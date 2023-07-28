/**
 * Swiper 9.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: July 29, 2023
 */

import Swiper from './core/core.js';
export { default as Swiper, default } from './core/core.js';
import Keyboard from './modules/keyboard/keyboard.js';
import Navigation from './modules/navigation/navigation.js';
import Pagination from './modules/pagination/pagination.js';
import Zoom from './modules/zoom/zoom.js';
import Thumbs from './modules/thumbs/thumbs.js';

// Swiper Class
const modules = [Keyboard, Navigation, Pagination, Zoom, Thumbs];
Swiper.use(modules);
