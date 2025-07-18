---
title: JavaScript-APIs
slug: Mozilla/Add-ons/WebExtensions/API
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

JavaScript-APIs für WebExtensions können innerhalb der [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) der Erweiterung und in allen anderen Dokumenten, die mit der Erweiterung gebündelt sind, verwendet werden, einschließlich Pop-ups für [Browseraktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [Seitenaktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions), [Seitenleisten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars), [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) oder [neuen Tab-Seiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides). Einige dieser APIs können auch von den [Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#content_scripts) einer Erweiterung aufgerufen werden. (Siehe die [Liste im Inhalts-Skript-Leitfaden](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis).)

Um die leistungsfähigeren APIs zu nutzen, müssen Sie in der `manifest.json` Ihrer Erweiterung [Berechtigungen anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

Sie können auf die APIs mit dem `browser`-Namespace zugreifen:

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

## Unterschiede bei der Browser-API

Beachten Sie, dass dies sich vom Erweiterungssystem von Google Chrome unterscheidet, das den `chrome`-Namespace anstelle von `browser` verwendet und in Manifest V2 Callbacks anstelle von Promises für asynchrone Funktionen nutzt. Als Unterstützung beim Portieren unterstützt die Firefox-Implementierung der WebExtensions-APIs sowohl `chrome` und Callbacks als auch `browser` und Promises. Mozilla hat auch ein Polyfill geschrieben, das es ermöglicht, dass Code, der `browser` und Promises verwendet, in Chrome unverändert funktioniert: <https://github.com/mozilla/webextension-polyfill>.

Firefox implementiert diese APIs auch unter dem `chrome`-Namespace mit Callbacks. Dies ermöglicht es, dass in Chrome geschriebener Code in Firefox größtenteils unverändert für die hier dokumentierten APIs ausgeführt werden kann.

Nicht alle Browser unterstützen alle APIs: Für die Details siehe [Browser-Kompatibilität für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) und [Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities).

## Beispiele

In den JavaScript-API-Listings veranschaulichen kurze Codebeispiele, wie die API verwendet wird. Sie können mit den meisten dieser Beispiele in der Konsole im [Toolbox](https://extensionworkshop.com/documentation/develop/debugging/#developer-tools-toolbox) experimentieren. Dafür muss jedoch die Toolbox im Kontext einer Web-Erweiterung laufen. Um dies zu tun, öffnen Sie `about:debugging`, dann **This Firefox**, klicken Sie auf **Inspect** gegen eine installierte oder temporäre Erweiterung und öffnen Sie **Console**. Sie können dann den Beispielcode in die Konsole einfügen und ausführen.

Zum Beispiel hier das erste Codebeispiel auf dieser Seite in der Toolbox-Konsole in Firefox Developer Edition:

![Illustration eines Schnipsels von Web-Erweiterungs-Code, das von der Konsole in der Toolbox ausgeführt wird](javascript_exercised_in_console.jpg)

## JavaScript-API-Auflistung

Siehe unten eine vollständige Liste der JavaScript-APIs:

{{SubpagesWithSummaries}}
