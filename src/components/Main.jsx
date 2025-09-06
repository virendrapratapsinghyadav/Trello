import React, { useContext } from 'react'
import CardAdd from './CardAdd'
import AddList from './AddList'
import Utils from '../utils/Utils'
import { Edit2, MoreHorizontal, Share, UserPlus } from 'react-feather'
import { BoardContext } from '../context/BoardContext'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'



const Main = () => {

    const { allboard, setAllboard } = useContext(BoardContext);
    const bdata = allboard.boards[allboard.active];

    const onDragEnd=(res)=>{
        if(!res.destination){
            console.log("No destination")
            return;
        }
        const newList =[...(bdata.list)];
        const s_id = parseInt(res.source.droppableId);
        const d_id = parseInt(res.destination.droppableId)
        const [removed] = newList[s_id-1].items.splice(res.source.index,1);
        newList[d_id - 1].items.splice(res.destination.index, 0, removed);

        let board_ = {...allboard};
        board_.boards[board_.active].list = newList;
        setAllboard(board_);
    }

    const cardData = (e, index) => {
        let newList = [...(bdata.list)]
        newList[index].items.push({id: Utils.makeid(5), title:e})

        let board = {...allboard}
        board.boards[board.active].list = newList;
        setAllboard(board);
    }
    const listData = (e) => {
        let newList = [...(bdata.list)]
        newList.push({id: newList.length+1+'', title:e, items:[]})

        let board = {...allboard}
        board.boards[board.active].list = newList;
        setAllboard(board);
    }





    return (
        <div className='flex flex-col  w-full' style={{backgroundColor:`${bdata.bgcolor}`}}>
            <div className='p-3 bg-black flex justify-between w-full bg-opacity-50'>
                <h2 className='text-md'>{bdata.name}</h2>
                <div className='flex items-center justify-center'>
                    <button className=' h-8 bg-gray-200 text-gray-800 px-2 py-1 mr-2 rounded flex justify-center items-center'><UserPlus size={16} className='mr-2' /> <Share size={16} /> </button>
                    <button className='hover:bg-gray-500 px-2 py-1 h-8 rounded'><MoreHorizontal size={16} /> </button>
                </div>
            </div>
            <div className='flex flex-col w-full flex-grow relative'>
                <div className='absolute mb-1 pb-2 left-0 right-0 top-0 bottom-0 p-3 flex overflow-x-scroll overflow-y-hidden'>

                    <DragDropContext onDragEnd={onDragEnd}>
                        {bdata.list && bdata.list.map((e, index) => {
                            return (
                                <div key={index} className='mr-3 w-60 h-fit rounded-md p-2 flex-shrink-0 bg-black'>
                                    <div className="list-body">
                                        <div className='flex justify-between p-1'>
                                            <span>{e.title}</span>
                                            <button className='hover:bg-gray-500 p-1 rounded-sm'><MoreHorizontal size={16} /> </button>
                                        </div>
                                        <Droppable droppableId={e.id} >
                                            {(provided, snapshot) => (
                                                <div className='py-1'
                                                    ref={provided.innerRef}
                                                    style={{ backgroundColor: snapshot.isDraggingOver ? '#222' : 'transparent' }}
                                                    {...provided.droppableProps}
                                                >
                                                    {e.items && e.items.map((card, index) => {
                                                        return (
                                                        <Draggable key={card.id} draggableId={card.id} index={index}>
                                                                {(provided, snapshot) => (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                    >
                                                                        <div className="item flex justify-between items-center bg-sinx-700 p-1 cursor-pointer rounded-md border-2 border-zinc-900 hover:border-gray-500">
                                                                            <span >{card.title}</span>
                                                                            <span className='flex justify-start items-start'>
                                                                                <button className='hover:bg-gray-600 p-1 rounded-sm'><Edit2 size={16} /> </button>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </Draggable> 
                                                        )                                                        
                                                    })
                                                    }
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>

                                        <CardAdd getcard={(e) => cardData(e, index)} />
                                    </div>
                                </div>
                            )
                        })}
                    </DragDropContext>

                    <AddList getlist={(e)=>listData(e)}/>

                </div>
            </div>
        </div>
    )
}

export default Main
