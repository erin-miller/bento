// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'erin',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'wakey wakey,',
	greetingAfternoon: 'eat lunch,',
	greetingEvening: 'eat dinner,',
	greetingNight: 'its bed time',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '67ed0afc4d5617237b55e48a50de304b', // Write here your API Key
	weatherIcons: 'White', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '42.125290',
	defaultLongitude: '-72.510730',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	// icons: https://lucide.dev/?search=mail

	firstButtonsContainer: [
		{
			id: '1',
			name: 'kodiak',
			icon: 'paperclip',
			link: 'https://kodiak.wne.edu/d2l/home',
		},
		{
			id: '2',
			name: 'bank',
			icon: 'piggy-bank',
			link: 'https://www.numarkcu.org/',
		},
		{
			id: '3',
			name: 'weboasis',
			icon: 'palmtree',
			link: 'https://weboasis.app/',
		},
		{
			id: '4',
			name: 'calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/u/1/r',
		},
		{
			id: '5',
			name: 'letterboxd',
			icon: 'clapperboard',
			link: 'https://letterboxd.com/',
		},
		{
			id: '6',
			name: 'gitlab',
			icon: 'gitlab',
			link: 'https://gitlab.com/wne-csit-jackson/csit200/fall2022/section01/individual',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'tv',
			id: '1',
			links: [
				{
					name: 'youtube',
					link: 'https://www.youtube.com/',
				},
				{
					name: 'netflix',
					link: 'https://www.netflix.com/browse',
				},
				{
					name: 'disney+',
					link: 'https://www.disneyplus.com/home',
				},
				{
					name: 'hbo',
					link: 'https://play.hbomax.com/profile/select',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'primary',
					link: 'https://mail.google.com/mail/u/1/#inbox',
				},
				{
					name: 'secondary',
					link: 'https://mail.google.com/mail/u/0/#inbox',
				},
				{
					name: 'outlook',
					link: 'https://outlook.office.com/mail/',
				},
				{
					name: 'movie list',
					link: 'https://letterboxd.com/dave/list/official-top-250-narrative-feature-films/page/1/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
