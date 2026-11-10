---
title: JavaScript-APIs
slug: Mozilla/Add-ons/WebExtensions/API
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

JavaScript-APIs für WebExtensions können in den [Hintergrundskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) einer Erweiterung und in allen anderen Dokumenten verwendet werden, die mit der Erweiterung gebündelt sind. Dazu gehören Pop-ups für [Browser-Aktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) und [Seitenaktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions), [Seitenleisten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars), [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) und [Neue-Tab-Seiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides). Auf einige dieser APIs können auch die [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#content_scripts) einer Erweiterung zugreifen. (Siehe die [Liste im Leitfaden zu Content-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis).)

Um die leistungsfähigeren APIs zu verwenden, müssen Sie in der `manifest.json` Ihrer Erweiterung [Berechtigungen anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

Sie können über den Namespace `browser` auf die APIs zugreifen:

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

## Unterschiede bei den Browser-Namespaces

Firefox und Safari haben schon immer den Namespace `browser` (mit Promises) verwendet. Ursprünglich verwendeten Chromium-basierte Browser (wie Chrome, Opera und Microsoft Edge) den Namespace `chrome` (mit Callbacks).

Seit Chrome 148 unterstützt Chrome ebenfalls den Namespace `browser`, außer in Erweiterungen mit einer DevTools-Seite. Diese Einschränkung wurde in Chrome 152 aufgehoben (siehe [Chrome-Bug 500769389](https://crbug.com/500769389)), sodass der Namespace `browser` für alle Chrome-Erweiterungen verfügbar wurde. Außerdem begann Chrome mit der Einführung von Manifest V3, für asynchrone Methoden Promises bereitzustellen; seit Chrome 152 sind alle asynchronen Methoden abgedeckt.

Damit verwenden alle großen Browser den Namespace `browser` und geben für asynchrone Funktionen Promises zurück.

Vor Chrome 148 verwendet Chrome den Namespace `chrome`. Um die Portierung zu erleichtern, unterstützt die Firefox-Implementierung der WebExtensions-APIs neben `browser` und Promises auch `chrome` und Callbacks. Dadurch kann für Chrome geschriebener Code bei den hier dokumentierten APIs weitgehend unverändert in Firefox ausgeführt werden. Außerdem ist ein [Polyfill](https://github.com/mozilla/webextension-polyfill) verfügbar, mit dem Code, der `browser` und Promises verwendet, unverändert in Chrome funktioniert. In Chrome 148 und später hat dieser Polyfill keine Wirkung.

Nicht alle Browser unterstützen sämtliche APIs. Einzelheiten finden Sie unter [Browser-Unterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) und [Inkompatibilitäten mit Chrome](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities).

## Beispiele

In den Beschreibungen der JavaScript-APIs veranschaulichen kurze Codebeispiele die Verwendung der jeweiligen API. Die meisten dieser Beispiele können Sie über die Konsole in der [Toolbox](https://extensionworkshop.com/documentation/develop/debugging/#developer-tools-toolbox) ausprobieren. Dazu muss die Toolbox jedoch im Kontext einer WebExtension ausgeführt werden. Öffnen Sie dafür `about:debugging` und dann **Dieser Firefox**. Klicken Sie bei einer installierten oder temporären Erweiterung auf **Untersuchen** und öffnen Sie die **Konsole**. Anschließend können Sie den Beispielcode in die Konsole einfügen und ausführen.

Hier sehen Sie beispielsweise die Erweiterung [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) in der Toolbox-Konsole von Firefox Developer Edition:

![Die Beispielerweiterung tabs-tabs-tabs in der Toolbox-Konsole von Firefox Developer Edition](javascript_exercised_in_console.jpg)

## Liste der JavaScript-APIs

Nachfolgend finden Sie eine vollständige Liste der JavaScript-APIs:

{{SubpagesWithSummaries}}
