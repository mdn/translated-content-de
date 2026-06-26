---
title: tabs.sendMessage()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Sendet eine einzelne Nachricht von den Hintergrundskripten der Erweiterung (oder anderen privilegierten Skripten wie Popup-Skripten oder Optionsseitenskripten) an beliebige [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) oder Erweiterungsseiten/Iframes, die zur Erweiterung gehören und in dem angegebenen Tab laufen.

Die Nachricht wird im Erweiterungskontext von allen Zuhörern des {{WebExtAPIRef("runtime.onMessage")}}-Ereignisses empfangen. Zuhörer können optional etwas als Antwort an den Absender zurücksenden.

Dies ist eine asynchrone Funktion, die ein {{jsxref("Promise")}} zurückgibt.

> [!NOTE]
> Sie können auch einen [verbindungsbasierten Ansatz zum Austauschen von Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging) verwenden.

## Syntax

```js-nolint
const sending = browser.tabs.sendMessage(
  tabId,     // integer
  message,   // any
  options    // optional object
)
```

### Parameter

- `tabId`
  - : `integer`. ID des Tabs, dessen Content-Skripten wir eine Nachricht senden möchten.
- `message`
  - : `any`. Ein Objekt, das serialisiert werden kann (siehe [Datenklon-Algorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).
- `options` {{optional_inline}}
  - : `object`.
    - `documentId` {{optional_inline}}
      - : `string`. Sendet eine Nachricht an ein spezifisches Dokument, statt an alle Frames im Tab. Weitere Informationen finden Sie im Artikel [Mit documentId arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
    - `frameId` {{optional_inline}}
      - : `integer`. Sendet die Nachricht an einen spezifischen Frame, statt an alle Frames im Tab. Ob das Content-Skript in allen Frames ausgeführt wird, hängt von der Einstellung `all_frames` in der [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Sektion von `manifest.json` ab.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem vom Handler der Nachricht im Content-Skript gesendeten Antwortobjekt erfüllt wird, oder ohne Argumente, falls das Content-Skript keine Antwort gesendet hat.

Falls ein Fehler beim Verbinden mit dem angegebenen Tab oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

Wenn mehrere Frames auf die Nachricht antworten, wird das Promise in eine der Antworten aufgelöst.

## Beispiele

Hier ist ein Beispiel für ein Hintergrundskript, das eine Nachricht an die Content-Skripte im aktiven Tab sendet, wenn der Benutzer auf die Browser-Aktion klickt. Das Hintergrundskript erwartet auch, dass das Content-Skript eine Antwort sendet:

```js
// background-script.js
"use strict";

function onError(error) {
  console.error(`Error: ${error}`);
}

function sendMessageToTabs(tabs) {
  for (const tab of tabs) {
    browser.tabs
      .sendMessage(tab.id, { greeting: "Hi from background script" })
      .then((response) => {
        console.log("Message from the content script:");
        console.log(response.response);
      })
      .catch(onError);
  }
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs
    .query({
      currentWindow: true,
      active: true,
    })
    .then(sendMessageToTabs)
    .catch(onError);
});
```

Hier ist das entsprechende Content-Skript:

```js
// content-script.js
"use strict";

browser.runtime.onMessage.addListener((request) => {
  console.log("Message from the background script:");
  console.log(request.greeting);
  return Promise.resolve({ response: "Hi from content script" });
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-sendMessage) API von Chromium. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
