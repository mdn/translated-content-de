---
title: JavaScript-APIs
slug: Mozilla/Add-ons/WebExtensions/API
l10n:
  sourceCommit: d71511167189aea307159478883ff1b45f16c8a5
---

{{AddonSidebar}}

JavaScript-APIs für WebExtensions können innerhalb der [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) der Erweiterung und in allen anderen Dokumenten, die mit der Erweiterung gebündelt sind, verwendet werden, einschließlich [Browser-Aktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [Seitenaktionen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)-Popups, [Seitenleisten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars), [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) oder [Neue Tab-Seiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides). Einige dieser APIs können auch von den [Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#content_scripts) einer Erweiterung abgerufen werden. (Siehe die [Liste im Inhalts-Skript-Leitfaden](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis).)

Um die leistungsstärkeren APIs zu verwenden, müssen Sie in der `manifest.json` Ihrer Erweiterung [Berechtigungen anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

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

## Unterschiede in Browser-APIs

Beachten Sie, dass dies sich von Googles Chrome-Erweiterungssystem unterscheidet, das den `chrome`-Namespace anstelle von `browser` verwendet und für asynchrone Funktionen Callbacks anstelle von Promises benutzt. Als Unterstützung für die Portierung unterstützt die Firefox-Implementierung der WebExtensions-APIs sowohl `chrome` und Callbacks als auch `browser` und Promises. Mozilla hat auch ein Polyfill geschrieben, das es ermöglicht, dass Code, der `browser` und Promises verwendet, unverändert in Chrome funktioniert: <https://github.com/mozilla/webextension-polyfill>.

Firefox implementiert diese APIs auch unter dem `chrome`-Namespace unter Verwendung von Callbacks. Dies ermöglicht es, Code, der für Chrome geschrieben wurde, weitgehend unverändert in Firefox für die hier dokumentierten APIs auszuführen.

Microsoft Edge verwendet den `browser`-Namespace, unterstützt jedoch noch keine auf Promises basierenden asynchronen APIs. In Edge müssen asynchrone APIs vorläufig Callbacks verwenden.

Nicht alle Browser unterstützen alle APIs: Einzelheiten dazu finden Sie unter [Browser-Unterstützung für JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) und [Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities).

## Beispiele

In den JavaScript-API-Auflistungen veranschaulichen kurze Codebeispiele, wie die API verwendet wird. Sie können mit den meisten dieser Beispiele im Konsolenfenster des [Toolbox](https://extensionworkshop.com/documentation/develop/debugging/#developer-tools-toolbox) experimentieren. Sie müssen jedoch die Toolbox im Kontext einer Web-Erweiterung ausführen. Um dies zu tun, öffnen Sie `about:debugging`, dann **Dieser Firefox**, klicken Sie auf **Untersuchen** neben einer installierten oder temporären Erweiterung und öffnen Sie die **Konsole**. Sie können dann den Beispielcode in die Konsole einfügen und ausführen.

Zum Beispiel sehen Sie hier das erste Codebeispiel auf dieser Seite, das im Konsolenfenster der Toolbox in Firefox Developer Edition ausgeführt wird:

![Darstellung eines Schnipsels des Web-Erweiterungscodes, der in der Konsole der Toolbox ausgeführt wird](javascript_exercised_in_console.jpg)

## JavaScript-API-Auflistung

Sehen Sie unten eine vollständige Liste der JavaScript-APIs:

{{LandingPageListSubpages}}
