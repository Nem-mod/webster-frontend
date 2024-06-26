import { CanvasElementType } from './canvas-element-types.enum';
import { ICanvasElement } from './canvas.types';

abstract class CanvasElementFactory {
	static register(type: CanvasElementType, creator: () => ICanvasElement) {
		this.creators[type] = creator;
	}

	static getCreator(type: CanvasElementType): (...args: unknown[]) => ICanvasElement {
		const creator = this.creators[type];
		if (!creator) {
			throw new Error(`Unknown element type: ${type}`);
		}
		return creator;
	}

	private static creators: { [type in CanvasElementType]?: () => ICanvasElement } = {};
}

CanvasElementFactory.register(CanvasElementType.IMAGE, () => ({ type: CanvasElementType.IMAGE }));
CanvasElementFactory.register(CanvasElementType.TEXT, () => ({
	type: CanvasElementType.TEXT,
	text: 'Hello, world!',

	fill: 'black',
	x: 30,
	y: 40,
	width: 200,
	height: 80,
}));
CanvasElementFactory.register(CanvasElementType.CIRCLE, () => ({
	type: CanvasElementType.CIRCLE,
	x: 100,
	y: 100,
	radius: 100,
	fill: '#aabbcc',
}));
CanvasElementFactory.register(CanvasElementType.RECT, () => ({
	type: CanvasElementType.RECT,
	x: 100,
	y: 100,
	width: 100,
	height: 100,
	fill: 'black',
}));
CanvasElementFactory.register(CanvasElementType.ELLIPSE, () => ({
	type: CanvasElementType.ELLIPSE,
	x: 100,
	y: 100,
	fill: 'black',
	radiusX: 50,
	radiusY: 50,
}));
CanvasElementFactory.register(CanvasElementType.STAR, () => ({
	type: CanvasElementType.STAR,
	x: 100,
	y: 100,
	numPoints: 5,
	innerRadius: 20,
	outerRadius: 50,
	fill: 'black',
}));
CanvasElementFactory.register(CanvasElementType.RING, () => ({
	type: CanvasElementType.RING,
	x: 100,
	y: 100,
	innerRadius: 40,
	outerRadius: 50,
	fill: 'black',
}));
CanvasElementFactory.register(CanvasElementType.LINE, () => ({
	type: CanvasElementType.LINE,
	x: 100,
	y: 100,
	fill: 'black',
}));
CanvasElementFactory.register(CanvasElementType.ARROW, () => ({
	type: CanvasElementType.ARROW,
	x: 100,
	y: 100,
	fill: 'black',
	points: [100, 100, 200, 200],
}));
CanvasElementFactory.register(CanvasElementType.ARC, () => ({
	type: CanvasElementType.ARC,
	x: 100,
	y: 100,
	innerRadius: 50,
	outerRadius: 80,
	angle: 30,
	fill: 'red',
	stroke: 'black',
	strokeWidth: 5,
	rotationDeg: -120,
}));

export default CanvasElementFactory;
