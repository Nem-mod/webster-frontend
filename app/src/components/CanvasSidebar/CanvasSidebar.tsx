import {Tabs, Tab, ScrollShadow, Button} from '@nextui-org/react';
import { useState } from 'react';
import CanvasMenu from '../CanvasMenuGroup/CanvasMenu/CanvasMenu.tsx';
import HistoryList from '../HistoryList/HistoryList.tsx';



export const CanvasSidebar = () => {
	const [selected, setSelected] = useState(null);

	const unselectTab = () => {
		setSelected(null);
	};

	return (
		<div className={'relative flex flex-row justify-center h-[calc(100vh_-_64px)]'}>
			{selected !== 'null' &&
					<div
						className='absolute -right-3 top-[25rem] rounded-r rounded-l-none '
						onClick={() => setSelected('null')}
					>
						{/* <div className='bg-red-900 w-2 h-5'>
					
						</div>
						<div className='bg-red-900'>
							button
						</div>
						<div className='bg-red-900 w-2 h-5'>
							
						</div> */}
						<svg xmlns="http://www.w3.org/2000/svg" width={13} height={96} viewBox='0 0 13 96'
							className='fill-secondary/20 cursor-pointer'
						>
							<path d="M0,0 h1 c0,20,12,12,12,32 v32 c0,20,-12,12,-12,32 H0 z"></path>
							<path d="M0.5,0 c0,20,12,12,12,32 v32 c0,20,-12,12,-12,32"></path>
							<path stroke="currentColor" stroke-linecap="round" stroke-width="1.25" d="M 3.5,47 l 5,-5 M 3.5,47 l 5,5"></path>
						</svg>
					</div>
				}
			<Tabs
				selectedKey={selected}
				onSelectionChange={setSelected}
				isVertical
				classNames={{
					tabList: 'rounded-none bg-transparent m-2',
					tab: 'text-white-500',
					base: 'items-center border-r-1 border-primary/20',
					wrapper: 'max-w-inherit',
					panel: 'flex  justify-center m-2 overflow-auto max-h-full',
				}}
			>
				
				<Tab key={'null'} title={'Null'} className={'hidden'}></Tab>
				<Tab key={'tools'} title={'Tools'}>
					{/* <SidebarSelectedWrapper setSelected={setSelected}> */}
						<div className={'flex flex-col'}>
							{/*<Button isIconOnly className={'bg-secondary/70'} size={'sm'}>*/}
							{/*	X*/}
							{/*</Button>*/}
							{/*<span className={'ml-auto  rounded-xl rounded-r-none rounded-t-none aspect-square text-center'} onClick={unselectTab}>*/}
							{/*	X*/}
							{/*</span>*/}
							<CanvasMenu />
							
						</div>
					{/* </SidebarSelectedWrapper> */}
				</Tab>
				<Tab key={'images'} title={'Images'}>

					<div className='max-w-inherit'></div>
				</Tab>
				<Tab key={'history'} title={'History'}>
					<ScrollShadow >
						<HistoryList />
					</ScrollShadow>
				</Tab>
				<Tab key={'shortcuts'} title={'Shortcuts'}>
					<div className='max-w-inherit'>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
						<p>a</p>
					</div>
				</Tab>
			</Tabs>
		</div>
	);
};
