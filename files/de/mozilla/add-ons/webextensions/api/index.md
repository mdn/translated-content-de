---
title: JavaScript-APIs
slug: Mozilla/Add-ons/WebExtensions/API
l10n:
  sourceCommit: 83b221d2955a42bed9b87a5206a7953d1b57d8a9
---

JavaScript-APIs für Web-Erweiterungen können innerhalb der [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) der Erweiterung und in allen anderen Dokumenten, die mit der Erweiterung gebündelt sind, verwendet werden. Dazu gehören Pop-ups für [Browseraktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [Seitenaktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions), [Sidebars](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars), [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) oder [neue Tab-Seiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides). Einige dieser APIs können auch von den [Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#content_scripts) einer Erweiterung zugegriffen werden. (Siehe die [Liste im Inhalts-Skript-Leitfaden](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis).)

Um die leistungsstärkeren APIs zu nutzen, müssen Sie in der `manifest.json` Ihrer Erweiterung [Berechtigung anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

Sie können auf die APIs über den `browser`-Namespace zugreifen:

```js
function logTabs(tabs) {
  console.log(tabs);
}

browser.tabs.query({ currentWindow: true }, logTabs);
```

Viele der APIs sind asynchron und geben ein {{JSxRef("Promise")}} zurück:

```js
function logCookie(c) {
  console.log(c);
}

function logError(e) {
  console.error(e);
}

let setCookie = browser.cookies.set({ url: "https://developer.mozilla.org/" });
setCookie.then(logCookie, logError);
```

## Unterschiede im Browser-Namespace

Firefox und Safari haben immer den `browser`-Namespace (mit Promises) verwendet. Ursprünglich verwendeten auf Chromium basierende Browser (wie Chrome, Opera und Microsoft Edge) den `chrome`-Namespace (mit Rückrufen).

Ab Chrome 148 unterstützt Chrome auch den `browser`-Namespace, außer in Erweiterungen, die eine DevTools-Seite enthalten. Diese Einschränkung wurde in Chrome 152 entfernt (siehe [Chrome-Bug 500769389](https://crbug.com/500769389)), und der `browser`-Namespace wurde allen Chrome-Erweiterungen zugänglich. Außerdem begann Chrome, Promises für asynchrone Methoden mit der Einführung von Manifest V3 bereitzustellen, wobei die vollständige Abdeckung in Chrome 152 erreicht wurde.

Das bedeutet, dass alle großen Browser den `browser`-Namespace verwenden und Promises für asynchrone Funktionen zurückgeben.

Vor Chrome 148 benutzt Chrome den `chrome`-Namespace. Als Unterstützung bei der Portierung unterstützt die Firefox-Implementierung der WebExtensions-APIs sowohl `chrome` und Rückrufe als auch `browser` und Promises. Dies ermöglicht es, dass für Chrome geschriebener Code weitgehend unverändert in Firefox für die hier dokumentierten APIs ausgeführt werden kann. Ein [Polyfill](https://github.com/mozilla/webextension-polyfill), der es ermöglicht, dass Code, der `browser` und Promises verwendet, unverändert in Chrome funktioniert, ist ebenfalls verfügbar. Dieses Polyfill ist in Chrome 148 und später ohne Wirkung.

Nicht alle Browser unterstützen alle APIs: Einzelheiten finden Sie unter [Browser-Unterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) und [Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities).

## Beispiele

In den JavaScript-API-Auflistungen veranschaulichen kurze Codebeispiele, wie die API verwendet wird. Sie können mit den meisten dieser Beispiele in der Konsole im [Toolbox](https://extensionworkshop.com/documentation/develop/debugging/#developer-tools-toolbox) experimentieren. Sie benötigen jedoch die Toolbox, die im Kontext einer Web-Erweiterung läuft. Öffnen Sie dazu `about:debugging`, dann **Dieses Firefox**, klicken Sie auf **Untersuchen** neben einer installierten oder temporären Erweiterung, und öffnen Sie die **Konsole**. Sie können den Beispielcode dann in die Konsole einfügen und ausführen.

Zum Beispiel sehen Sie hier das erste Codebeispiel auf dieser Seite, das in der Toolbox-Konsole in Firefox Developer Edition läuft:

![Illustration eines Ausschnitts von Web-Erweiterungscode, der von der Konsole in der Toolbox ausgeführt wird](javascript_exercised_in_console.jpg)

## JavaScript-API-Auflistung

Siehe unten für eine vollständige Liste der JavaScript-APIs:

{{SubpagesWithSummaries}}
