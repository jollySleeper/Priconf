// TODO: Refactor Code keeping Future Scope in Mind

// TODO: Always check for Instaces First and localStorage Setting
// TODO: localStorage Setting "configuredViaExtension" should have instance name
function piped() {
	if (localStorage.getItem("configuredViaExtension") !== window.location.host) {
		// Get Instances by User
		const myInstances = [
			"https://piped.video",
			"https://piped.garudalinux.org",
			"https://piped.mha.fi",
			"https://piped.in.projectsegfau.lt",
		];

		for (const instance in myInstances) {
			if (window.location.origin === myInstances[instance]) {
				// TODO: Get This By User Using JSON File
				const config = {
					homepage: "feed",
					region: "US",
					hl: "en",
					theme: "light",
					showMarkers: "true",
					playerAutoPlay: "false",
					minimizeDescription: "false",
					minimizeChapters: "false",
					minimizeComments: "true",
					minimizeRecommendations: "true",
					autoPlayNextCountdown: "10",
					quality: "1440",
					bufferGoal: "10",
					enabledCodecs: "vp9,avc",
					listen: "false",
					showWatchOnYouTube: "false",
					searchHistory: "false",
					watchHistory: "false",
					hideWatched: "false",
					disableLBRY: "false",
					proxyLBRY: "false",
					instance: "https://pipedapi.kavin.rocks",
					auth_instance_url: "https://piped-api.garudalinux.org",
					authInstance: "false",
					sponsorblockp: "true",
					minSegmentLength: "5",
					skipOptions: {
						sponsor: "auto",
						intro: "button",
						outro: "button",
						preview: "button",
						interaction: "auto",
						selfpromo: "auto",
						music_offtopic: "auto",
						poi_highlight: "button",
						filler: "button",
					},
					// For EFY Themes
					efy: {
						folder: "./efy",
						lang_code: "en",
						gradient_trans:
							"linear-gradient(var(--efy_color_angle), hsla(0 84% 60% / .3), hsla(0 72% 51% / .3))",
						gradient:
							"linear-gradient(var(--efy_color_angle), hsl(0 84% 60%), hsl(0 72% 51%))",
						color1: "0 84% 60%",
						color_nr: 2,
						color2: "0 72% 51%",
						mode: "light_light",
					},
				};

				for (key in config) {
					if (typeof config[key] === "object") {
						localStorage.setItem(key, JSON.stringify(config[key]));
					} else {
						localStorage.setItem(key, config[key]);
					}
				}

				localStorage.setItem("configuredViaExtension", window.location.host);
				document.location.reload();
			}
		}
	}
}

function searxng() {
	// NOTE: Not Using Pako.js as will need to Bundle it with Extension.

	if (
		window.location.pathname === "/search" &&
		localStorage.getItem("configuredViaExtension") !== "true"
	) {
		// Get Instances by User
		const myInstances = [
			"s.frlt.one",
			"search.in.projectsegfau.lt",
			"opnxng.com",
		];

		for (const instance in myInstances) {
			if (window.location.href.includes(myInstances[instance])) {
				// TODO: Get This By User
				const preferenceString =
					"preferences=eJx1V8uy2zYM_Zp6o4lnkiw6XXjVafsBTdcaiIQlRCTB8GFZ9-sLWpJF2cniagyQBEHg4ABXQcKeA2G89OgwgDkZcH2GHi_oPv3378mwAlOEE-TEiq03mPCisxrLX88nsrK79YHv8-VbyHiymAbWl3_--naKcMWIENRw-XJKA1q8RComTgFjNim27FqHU5ugWw5rplbW2NwwXBhEPHPoT8upNqZZnDHUD-mk0CUMLYjkrPxezoO-gVOo2_Xav8FEPP3IGOaWXJsoiYFFSe5KjpJYVYGNWbWaInRGDKDryUlg_uihb9vIisA0FjXBb1_-BC_uNPJtYuKAbXslg7EsyKV0w4Zi264hfWgTqbZ9hKrs6ih1Ej1MoksiK6U-pVvb3kgjlw3iUYwBr3KxIpQHiW5GX9tUORjCWqMRPyQirc2R1EO-Ebgkl1dXY-CJdNuypCOIPNFIGhIcDD2z20wIZeO-f3m5BS8PlK9okoRpPjjy-V5deDWkxlArAmIT-ZomCNhoCqgkhvMaimsgNxLU0eqZe7nTG5hLyOMe7XrF8k1wXMWw96x1HY8BugDls141PE6vAjmozpKTn8Q5_ly3WfxOceA9NqO8FGLlnyG5McwNXxvFrhdgx-pdhruY8Bzi6oIUDigPbhXdDLCbYo8uoOfKuge5rqe4ocjn7iw536TZ0_rzxyQwqBP0UDRSeGKtfJ-qxbfKx0W9xKCKxVJdijU25fPMHVgob94UEa0cJ9VENbCBUMM5FmD6wh2VY4nHmRNLVMcSh-2l2UXJcRwqx2aQ9NVHJ-rmWrYQpIDFnQO0hczu4HQ4aksRdMxjfFVGzkEdi4xU-mB31GWNbodBxA8H9uALf0cca42DW4Hmrgi5m3u0OxaEaMTeKKCeJuyq2IdsuwLbp2LiO43sJPdNnB272WLlzHd_9pM7FrwV4qsv94I8s-T0F-p3ZCyhGfKGvr5KxwndkUTBj42lEDgcqbIx5PK9KT6tZiDc6VbjpJN0KbB-r7qy25f41L525PpX-d3ph_aA-4fmDd9d0tT3x-qThEWsbAkBB_HxADqt-0bjo68QuwOcNAvhh2bI3frSnWV_wb1v3qPgaHv5lk5Ms2UnYaxyftWBC8c_aRId1bQlcirZWvImLRG6XdgdLJXdYej3BD_ocvd1pd83P1f9Ic6r7i3Sq_4nBEFWd_ubNiott0c6cKzrb8ca_zBzIFU92NJdGc561zhvt0oD6Te49YSSaJCWVFpiRBlQKoe2NeFZ6WmwZvi4HpN0tySNceuOXndYb_KD8Jt7rlKQEayDuWL13Enx10fEG03pbQaJ6Am2ot2ZmbPUy_GxQrVqZMHv1fC01Vkcc5ddyhtVZ48hx2cgZAQjLX1ZIJ6qaKeJUhm7Xp150PEx4zPnlLuaqJ6a54QCZAS-JZLVthtZ5JrfpN4PloviR-aEL3Rd7ECZJGquK2VLaX5l9hvPL71nYrM0MD9U9WWFTa2MJ00K4KKRbFXD0-evX3-_V6lDDC9PnjhoR2PlUkrhTBUfC6xvBz8E6etMsA-j3mQh0ngp6b6fV-k8cEzSaVAmZmmPS1c9bJD8tWpANb6tSIxbQeKIc3yS9S8uKX13Ed6sGOkkae15tZ6hXQb5Kcj62_IKWkm6Wv4BmWVcNzIG_mSnucrcfuX3pwUofNrKFCz32ILuk0wPUoGX_wFqytoA";
				const url = `${window.location.origin}/preferences?${preferenceString}&save=1`;

				// callURL(url, "GET");

				// For Debug
				// document.body.style.border = "5px solid blue";
				// Async Await Not Needed as Doing Nothing After Calling this url
				// But Implementing it Anyway.
				fetch(url, { method: "GET" })
					.then((response) => {
						if (response.ok === true && response.status === 200) {
							// For Debug
							// document.body.style.border = "5px solid green";
							localStorage.setItem("configuredViaExtension", true);
							document.location.reload();
						}
					})
					.catch((err) => {
						console.log(err);
						// For Debug
						// document.body.style.border = "5px solid red";
						return;
					});
			}
		}
	}
}

function nitter() {
	// Nitter makes POST call to https://nitter.kavin.rocks/saveprefs for Saving Preferences
	// preferences are stored to cookies

	if (
		!window.location.pathname.includes("/settings") &&
		localStorage.getItem("configuredViaExtension") !== window.location.host
	) {
		// Get Instances by User
		const myInstances = [
			"https://nitter.net",
			"https://nitter.kavin.rocks",
			"https://singapore.unofficialbird.com",
			"https://india.unofficialbird.com",
		];

		for (const instance in myInstances) {
			if (window.location.origin === myInstances[instance]) {
				// TODO: Get This By User
				const url = `${window.location.origin}/saveprefs`;
				const params = new URLSearchParams({
					referer: "/",
					theme: "Twitter",
					infiniteScroll: "off",
					stickyProfile: "on",
					muteVideos: "on",
					mp4Playback: "on",
					hlsPlayback: "on",
					proxyVideos: "on",
					autoplayGifs: "on",
					replaceTwitter: "",
					replaceYouTube: "",
					replaceReddit: "",
				});

				fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: params.toString(),
				})
					.then((response) => {
						if (response.ok === true && response.status === 200) {
							// For Debug
							// document.body.style.border = "5px solid green";
							localStorage.setItem(
								"configuredViaExtension",
								window.location.host,
							);
							document.location.reload();
						}
					})
					.catch((err) => {
						console.log(err);
						// For Debug
						// document.body.style.border = "5px solid red";
						return;
					});
			}
		}
	}
}

function libreddit() {
	// Libreddit uses https://libreddit.kavin.rocks/settings/restore/?
	// theme=light&front_page=default&layout=card&wide=off&post_sort=hot
	// URL to ser preferences to cookies followed by query params

	if (
		window.location.pathname !== "/settings" &&
		localStorage.getItem("configuredViaExtension") !== window.location.host
	) {
		// Get Instances by User
		const myInstances = [
			"https://libreddit.kavin.rocks",
			"https://libreddit.privacy.com.de",
			"https://reddit.baby",
			"https://libreddit.pussthecat.org",
		];

		for (const instance in myInstances) {
			if (window.location.origin === myInstances[instance]) {
				// TODO: Get This By User
				const params = new URLSearchParams({
					theme: "light",
					front_page: "default",
					layout: "card",
					wide: "off",
					post_sort: "hot",
					comment_sort: "confidence",
					show_nsfw: "off",
					blur_nsfw: "on",
					use_hls: "on",
					hide_hls_notification: "on",
					hide_awards: "off",
					disable_visit_reddit_confirmation: "off",
					subscriptions: "",
					autoplay_videos: "off",
					filters: "",
				});
				const url = `${
					window.location.origin
				}/settings/restore/?${params.toString()}`;

				fetch(url, { method: "GET" })
					.then((response) => {
						if (response.ok === true && response.status === 200) {
							// For Debug
							// document.body.style.border = "5px solid green";
							localStorage.setItem(
								"configuredViaExtension",
								window.location.host,
							);
							document.location.reload();
						}
					})
					.catch((err) => {
						console.log(err);
						// For Debug
						// document.body.style.border = "5px solid red";
						return;
					});
			}
		}
	}
}

function anonymousOverflow() {
	// Uses https://code.whatever.social/options/theme?redirect_url=
	// this URL to set prefernces which are stored in cookie.
	// Preferences are sent via Cookie i.e Cookie Request Header

	if (
		window.location.pathname.includes("/questions") &&
		localStorage.getItem("configuredViaExtension") !== window.location.host
	) {
		// Get Instances by User
		const myInstances = [
			"https://code.whatever.social",
			"https://overflow.smnz.de",
			"https://overflow.hostux.net",
			"https://overflow.adminforge.de",
		];

		for (const instance in myInstances) {
			if (window.location.origin === myInstances[instance]) {
				// TODO: Get This By User
				const url = `${window.location.origin}/options/theme?redirect=${window.location.href}`;

				fetch(url, {
					method: "GET",
					headers: {
						Cookie: "theme=dark; disable_images=true",
					},
				})
					.then((response) => {
						if (response.ok === true && response.status === 200) {
							// For Debug
							// document.body.style.border = "5px solid green";
							localStorage.setItem(
								"configuredViaExtension",
								window.location.host,
							);
							document.location.reload();
						}
					})
					.catch((err) => {
						console.log(err);
						// For Debug
						// document.body.style.border = "5px solid red";
						return;
					});
			}
		}
	}
}

function libreMDB() {
	if (localStorage.getItem("configuredViaExtension") !== window.location.host) {
		// Get Instances by User
		const myInstances = ["https://libremdb.iket.me"];

		for (const instance in myInstances) {
			if (window.location.origin === myInstances[instance]) {
				// TODO: Get This By User Using JSON File
				const config = {
					theme: "light",
				};

				for (key in config) {
					if (typeof config[key] === "object") {
						localStorage.setItem(key, JSON.stringify(config[key]));
					} else {
						localStorage.setItem(key, config[key]);
					}
				}

				localStorage.setItem("configuredViaExtension", window.location.host);
				document.location.reload();
			}
		}
	}
}

function quetre() {
	if (localStorage.getItem("configuredViaExtension") !== window.location.host) {
		// Get Instances by User
		const myInstances = ["https://quetre.privacydev.net"];

		for (const instance in myInstances) {
			if (window.location.origin === myInstances[instance]) {
				// TODO: Get This By User Using JSON File
				const config = {
					theme: "light",
				};

				for (key in config) {
					if (typeof config[key] === "object") {
						localStorage.setItem(key, JSON.stringify(config[key]));
					} else {
						localStorage.setItem(key, config[key]);
					}
				}

				localStorage.setItem("configuredViaExtension", window.location.host);
				document.location.reload();
			}
		}
	}
}


// Dependencies -----------------------------------------------------------------------------------

// TODO: Use this Function
async function callURL(url, requestMethod) {
	try {
		const resposne = await fetch(url, { method: requestMethod });
		if (response.ok === true && response.status === 200) {
			// For Debug
			// document.body.style.border = "5px solid green";
			localStorage.setItem("configuredViaExtension", true);
			document.location.reload();
		}
	} catch (error) {
		console.log(err); // For Debug document.body.style.border = "5px solid red";
		return;
	}
}

function pageIsAnyInstace() {
	// TODO: Will check the window.location.href is any of the instance that user has given.
	// This Function will have a Switch Case to point to Particular Privacy Frontend
}

// Main Function Calls ----------------------------------------------------------------------------

// Call Piped Function
piped();
// Call SearXNG Function
searxng();
// Call AO
anonymousOverflow();
// Call libreddit
libreddit();
// Call Nitter
nitter();
// Call LibreMDB
libreMDB();
// Call Quetre
quetre();
