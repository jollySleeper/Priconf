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
        localStorage.getItem("configuredViaExtension") !== window.location.host
	) {
        // Get Instances by User
		const myInstances = [
			"https://s.frlt.one",
			"https://search.in.projectsegfau.lt",
			"https://opnxng.com",
		];

        for (const instance in myInstances) {
            if (window.location.origin === myInstances[instance]) {
				// TODO: Get This By User
				const preferenceString =
					"preferences=eJx1V82S2zYMfpr6oolnkhw6PfjUafsATc8aiIQlRCTB5Y9l7dMXtCSLWm8OqzFAEv_4gFWQsOdAGC89OgxgTgZcn6HHC7ov__17MqzAFOIEObFi6w0mvOisxvLX84ms3G594Pt8-REyniymgfXln79-nCJcMSIENVy-ndKAFi-RiohTwJhNii271uHUJuguf4OJeNJMrRyyuWG4MAh55tCflmdtTLNYY6gf0kmhSxhaEMpZ-b1oB30Dp1C3q95F6lvGMLfk2kRJBCxMcldylESqCmzMZgBF6IwIQNeTk8j80UPftpEVgWksaoLfvv0JXsxp5NvExAHb9koGYzkQpXTDhmLbrjF9cBOptn3EqtzqKHUSPkzCS0Irpb6kW9veSCOXC2JRjAGvolgRikPCm9HXMlUOhrDmaMR3iUhrcyT1oG8ELonySjUGnki3LUs-Qrn0TGUzIRTmfrZ4acGLM_IVTpKQzAelX--V8KshNYaaERCbyNc0QcBGU0Al8ZpXt6-B3EhQR6Zn7kWnNzCX8MY9svWJ5ZsUbRWv3rPWte8DdAHKZ1U1PF6vBDmo3pKTn8Q5fs7bJP6kOPAem1E8hVjZZ0g0hrnha6PY9VLEsfLLcBcTnkNcTZAuAeXBraSbAXZR7NEF9FxJ9yDqeopbxfjcnSW_GzV7Wn--TZLyOkEPRiNdJtLK98labKtsXNhLDKpYLJ2kWGNTPs_cgYXi88aIaOU5qSaqgQ2EunRjKUJfgKIyLPE4c2KJ6ljisHmaXZQcx6EybAZJX_10om6uaQtBmlXMgUPXGbyD0-HInWikjnk8NKgmld7ZHdspa3R7wiO-O7AHrfwTcaw5Dm6lCHdGyN3co92zLvAh8kYp32nCropyyLYrBfpkTHynkZ1kuYmzYzdbrIz56c9-qqwrXlmBs1q5lxozS_Z-wX6tgcg5KBzyVmd9FfgTuiM0gh8bSyFwOAJgY8jle1NsWsVAuNOtrohOEqPA-r2_ym1f4lPb2pHrP9KvRj-4hwp_cF4quUua-v7YZ5KwiJUsgdUgNh7KS-u-0fiYFsTuWDgsMB6aIXerp8UNDQmOlbRh7OfcV49QamuLxpZiTLNlJ6Gt6uCqAxc0f4IkOqpBS-hUMrjkUoYfdDuxG136usPQ70l_gOVu6wq-L3au_EPsV95L9Ff-J_BAVne7TxuQFu2RDgjr-tuxw9_NHEhVDlu6K8NZ7xzn7dZ9INMGt4lQkg8ykEqyIsouUhm0nQnKykSDNevH85hktiUZi9ts9LrD-pIfBN3c85SCbFsdzBWm504AoX4i1mhKL9tGRE-wNfKOy5ylh47OCtCqkaWmr4anrffimLvsUt6AOnsMOT4DIcsWaZnKUvapinaaKJUF66MxDzA-ZnzmnHJXg9eT89xFgIyUb4lkde1GFrnGPGmeg-TCeMuc8COCLzj1gVukQ9kualQsDU5p_ijgxvOHeTSxWYaaH6qus4K7VlaWJgVw0UgOq-Xp6_fvv9-rhCKGD4GYOGhHY2VSSuFMFXJLsd8Odkj9r3vCvox6kwVy46UUwf28UueBY5KZhLIxy8hcJu3hgmS1VQOq8eVEIt9KfY44xyes_0JJmcUL8SLFyMxJ63Ss-QztsshPQc5fjtdSllJQy38gs6zrRlbDT26aq-ztV351LUBB3la2YNFjS82fZKOQvrz8DxvA2ks=";
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
				            localStorage.setItem("configuredViaExtension", window.location.host);
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
