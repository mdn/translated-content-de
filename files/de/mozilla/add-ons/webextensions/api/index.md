---
title: JavaScript-APIs
slug: Mozilla/Add-ons/WebExtensions/API
l10n:
  sourceCommit: d71511167189aea307159478883ff1b45f16c8a5
---

{{AddonSidebar}}

JavaScript-APIs für WebExtensions können innerhalb der [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) der Erweiterung und in allen anderen mit der Erweiterung gebündelten Dokumenten verwendet werden, einschließlich [Browseraktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [Seitenaktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) Popups, [Seitenleisten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars), [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) oder [neue Tab-Seiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides). Einige dieser APIs können auch von den [Inhaltsskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#content_scripts) einer Erweiterung aufgerufen werden. (Siehe die [Liste im Inhaltsskript-Leitfaden](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis).)

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

## Unterschiede zwischen Browser-APIs

Beachten Sie, dass dies sich von Googles Chromes Erweiterungssystem unterscheidet, das den `chrome`-Namespace anstelle von `browser` verwendet und Callbacks anstelle von Promises für asynchrone Funktionen einsetzt. Als Portierungshilfe unterstützt die Firefox-Implementierung der WebExtensions-APIs sowohl `chrome` und Callbacks als auch `browser` und Promises. Mozilla hat außerdem ein Polyfill geschrieben, das es ermöglicht, dass Code, der `browser` und Promises verwendet, unverändert in Chrome funktioniert: <https://github.com/mozilla/webextension-polyfill>.

Firefox implementiert diese APIs auch unter dem `chrome`-Namespace mit Callbacks. Dies ermöglicht es, dass Code, der für Chrome geschrieben wurde, weitgehend unverändert in Firefox für die hier dokumentierten APIs funktioniert.

Microsoft Edge verwendet den `browser`-Namespace, unterstützt jedoch noch keine auf Promises basierende asynchrone APIs. In Edge müssen vorerst asynchrone APIs Callbacks verwenden.

Nicht alle Browser unterstützen alle APIs: Details finden Sie unter [Browserunterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) und [Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities).

## Beispiele

Durch die JavaScript-API-Auflistungen hinweg veranschaulichen kurze Codebeispiele, wie die API verwendet wird. Sie können mit den meisten dieser Beispiele in der Konsole im [Toolbox](https://extensionworkshop.com/documentation/develop/debugging/#developer-tools-toolbox) experimentieren. Sie müssen jedoch Toolbox im Kontext einer Web-Erweiterung ausführen. Öffnen Sie dazu `about:debugging`, wählen Sie dann **Dieser Firefox**, klicken Sie auf **Untersuchen** bei einer installierten oder temporären Erweiterung und öffnen Sie die **Konsole**. Sie können dann den Beispielcode in die Konsole einfügen und ausführen.

Zum Beispiel sehen Sie hier das erste Codebeispiel auf dieser Seite, ausgeführt in der Toolbox-Konsole in Firefox Developer Edition:

![Darstellung eines Schnipsels von Web-Erweiterungscode, ausgeführt von der Konsole in der Toolbox](javascript_exercised_in_console.jpg)

## JavaScript-API-Auflistung

Siehe unten für eine vollständige Liste der JavaScript-APIs:

{{LandingPageListSubpages}}
