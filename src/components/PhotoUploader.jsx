
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const MAX_IMAGES = 20;

const PhotoUploader = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);
    const newFiles = files.slice(0, MAX_IMAGES - images.length);
    setImages((prev) => [...prev, ...newFiles]);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(images);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setImages(reordered);
  };

  const handleRemove = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  };

  const renderImageItem = (file, index) => {
    const url = URL.createObjectURL(file);
    return (
      <Draggable draggableId={`${file.name}-${index}`} index={index} key={`${file.name}-${index}`}>
        {(provided) => (
          <div
            className="relative w-[85px] h-[85px] border border-gray-400 rounded overflow-hidden"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <img src={url} alt={`upload-${index}`} className="w-full h-full object-cover" />
            {index === 0 && (
              <div className="absolute top-0 left-0 bg-blue-600 text-white text-[10px] px-1 py-[1px]">
                COVER
              </div>
            )}
            <div
              className="absolute top-0 right-0 bg-black bg-opacity-50 text-white text-xs px-[4px] cursor-pointer"
              onClick={() => handleRemove(index)}
            >
              ✕
            </div>
          </div>
        )}
      </Draggable>
    );
  };

  const emptySlot = (index) => (
    <div
      key={`empty-${index}`}
      className="w-[85px] h-[85px] border border-gray-300 flex flex-col justify-center items-center text-gray-400"
    >
      <div className="text-xl">📷</div>
      <div className="text-[10px]">Add Photo</div>
    </div>
  );

  return (
    <div className="border border-gray-300 w-1/2 max-w-4xl mx-auto p-4 rounded">
      <h2 className="text-lg font-semibold mb-4 text-center">UPLOAD UP TO 20 PHOTOS</h2>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="photos" direction="horizontal">
          {(provided) => (
            <div
              className="grid grid-cols-5 gap-[4px]"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {images.map((file, index) => renderImageItem(file, index))}

              {images.length < MAX_IMAGES && (
                <div className="w-[85px] h-[85px] border-2 border-black flex flex-col items-center justify-center text-sm text-center cursor-pointer">
                  <label
                    htmlFor="photo-upload"
                    className="cursor-pointer w-full h-full flex flex-col justify-center items-center"
                  >
                    <div className="text-xl">📷</div>
                    <div className="text-[10px]">Add Photo</div>
                    <input
                      type="file"
                      id="photo-upload"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
              )}

              {Array.from({ length: MAX_IMAGES - images.length - 1 }).map((_, i) =>
                emptySlot(i)
              )}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {images.length === 0 && (
        <p className="text-red-500 text-sm mt-4 text-center">This field is mandatory</p>
      )}
    </div>
  );
};

export default PhotoUploader;
