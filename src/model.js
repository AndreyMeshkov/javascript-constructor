import image from './assets/image.png'
import { TextBlock, TitleBlock, ImageBlock, TextColumnsBlock } from './classes/blocks'
import { css } from './utils'

const text = `
Создание сайтов при помощи конструктора
`

export const model = [
	new TitleBlock('Конструктор сайтов на чистом JavaScript!', {
		tag: 'h2',
		styles: css({
			background: 'linear-gradient(to right, #ff0099, #493240)',
			color: '#fff',
			padding: '1.5rem',
			'text-align': 'center'
		})
	}),
	new ImageBlock(image, {
		styles: 'padding: 2rem 0;display: flex;justify-content: center;',
		alt: 'my image',
		imageStyles: 'width: 500px; height: auto;'
	}),
	new TextColumnsBlock([
		'Пример 1',
		'Пример 2',
		'Пример 3',
		'Пример 4'
	], {
		styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
	}),
	new TextBlock(text, {
		styles: 'background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;text-align: center;'
	})
]