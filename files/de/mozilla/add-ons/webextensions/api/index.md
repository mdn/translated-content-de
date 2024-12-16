---
title: JavaScript-APIs
slug: Mozilla/Add-ons/WebExtensions/API
l10n:
  sourceCommit: b86c026ce4413be2a6b084ad5877dd641c32756e
---

{{AddonSidebar}}

JavaScript-APIs für WebExtensions können innerhalb der [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) der Erweiterung und in allen anderen Dokumenten verwendet werden, die mit der Erweiterung gebündelt sind, einschließlich [Browser-Action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button)- oder [Page-Action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)-Popups, [Seitenleisten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars), [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) oder [Neue-Tab-Seiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides). Einige dieser APIs können auch von den [Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#content_scripts) einer Erweiterung aufgerufen werden. (Siehe die [Liste im Inhalts-Skript-Leitfaden](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis).)

Um die mächtigeren APIs zu nutzen, müssen Sie in der `manifest.json` Ihrer Erweiterung [Berechtigungen anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

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

## Unterschiede der Browser-APIs

Beachten Sie, dass dies sich vom Erweiterungssystem von Google Chrome unterscheidet, das den Namespace `chrome` anstelle von `browser` verwendet und für asynchrone Funktionen in Manifest V2 Rückrufe statt Versprechen nutzt. Als Portierungshilfe unterstützt die Firefox-Implementierung der WebExtensions-APIs sowohl `chrome` und Rückrufe als auch `browser` und Versprechen. Mozilla hat auch eine Polyfill geschrieben, die es ermöglicht, dass Code, der `browser` und Versprechen verwendet, unverändert in Chrome funktioniert: <https://github.com/mozilla/webextension-polyfill>.

Firefox implementiert diese APIs auch unter dem `chrome`-Namespace mithilfe von Rückrufen. Dies ermöglicht es, dass in Chrome geschriebener Code weitgehend unverändert in Firefox ausgeführt werden kann, für die hier dokumentierten APIs.

Nicht alle Browser unterstützen alle APIs: Details dazu finden Sie unter [Browser-Kompatibilität für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) und [Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities).

## Beispiele

In den JavaScript-API-Listen veranschaulichen kurze Codebeispiele, wie die API verwendet wird. Sie können mit den meisten dieser Beispiele im Konsolenbereich der [Toolbox](https://extensionworkshop.com/documentation/develop/debugging/#developer-tools-toolbox) experimentieren. Sie müssen jedoch die Toolbox im Kontext einer Web-Erweiterung ausführen. Öffnen Sie hierfür `about:debugging`, klicken Sie dann auf **Dieser Firefox**, klicken Sie auf **Untersuchen** neben einer installierten oder temporären Erweiterung und öffnen Sie die **Konsole**. Sie können dann den Beispielcode in die Konsole einfügen und ausführen.

Zum Beispiel hier das erste Codebeispiel auf dieser Seite, das in der Toolbox-Konsole in Firefox Developer Edition ausgeführt wird:

![Illustration eines Codeschnipsels einer Web-Erweiterung, der aus der Konsole in der Toolbox ausgeführt wird](javascript_exercised_in_console.jpg)

## JavaScript-API-Übersicht

Unten finden Sie eine vollständige Liste der JavaScript-APIs:

{{SubpagesWithSummaries}}
