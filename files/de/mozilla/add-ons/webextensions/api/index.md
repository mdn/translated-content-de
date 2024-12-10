---
title: JavaScript-APIs
slug: Mozilla/Add-ons/WebExtensions/API
l10n:
  sourceCommit: 514d1d2690c6374cd65921193ff6b166677395fd
---

{{AddonSidebar}}

JavaScript-APIs für WebExtensions können innerhalb der Erweiterung in den [Hintergrundskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) und in allen anderen Dokumenten verwendet werden, die mit der Erweiterung gebündelt sind, einschließlich Popups von [Browseraktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [Seitenaktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions), [Seitenleisten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars), [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) oder [neuen Tab-Seiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides). Einige dieser APIs können auch von den [Inhaltsskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#content_scripts) einer Erweiterung verwendet werden. (Siehe die [Liste im Inhaltsskript-Leitfaden](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis)).

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

## Unterschiede in der Browser-API

Beachten Sie, dass dies sich vom Erweiterungssystem von Google Chrome unterscheidet, das den `chrome`-Namespace anstelle von `browser` verwendet und für asynchrone Funktionen Rückrufe anstelle von Promises verwendet. Als Portierungshilfe unterstützt die Firefox-Implementierung der WebExtensions-APIs sowohl `chrome` und Rückrufe als auch `browser` und Promises. Mozilla hat auch ein Polyfill geschrieben, das es ermöglicht, Code, der `browser` und Promises verwendet, unverändert in Chrome zu verwenden: <https://github.com/mozilla/webextension-polyfill>.

Firefox implementiert diese APIs auch unter dem `chrome`-Namespace mit Rückrufen. Dies ermöglicht es, in Chrome geschriebener Code größtenteils unverändert in Firefox für die hier dokumentierten APIs auszuführen.

Microsoft Edge verwendet den `browser`-Namespace, unterstützt jedoch noch keine auf Promises basierten asynchronen APIs. In Edge müssen asynchrone APIs vorerst Rückrufe verwenden.

Nicht alle Browser unterstützen alle APIs: Für Details siehe [Browser-Unterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) und [Chrome-Unverträglichkeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities).

## Beispiele

In den JavaScript-API-Auflistungen veranschaulichen kurze Codebeispiele, wie die API verwendet wird. Sie können mit den meisten dieser Beispiele in der Konsole im [Toolbox](https://extensionworkshop.com/documentation/develop/debugging/#developer-tools-toolbox) experimentieren. Allerdings muss die Toolbox im Kontext einer Web-Erweiterung laufen. Um dies zu tun, öffnen Sie `about:debugging` dann **Dieser Firefox**, klicken Sie auf **Untersuchen** gegen jede installierte oder temporäre Erweiterung, und öffnen Sie die **Konsole**. Sie können dann den Beispielcode in die Konsole einfügen und ausführen.

Zum Beispiel hier ist das erste Codebeispiel auf dieser Seite, das in der Toolbox-Konsole in Firefox Developer Edition ausgeführt wird:

![Illustration eines Schnipsels von Web-Erweiterungscode, der von der Konsole in der Toolbox aus ausgeführt wird](javascript_exercised_in_console.jpg)

## JavaScript-API-Auflistung

Siehe unten für eine vollständige Liste der JavaScript-APIs:

{{SubpagesWithSummaries}}
