---
title: tabs.sendMessage()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Sendet eine einzelne Nachricht von den Hintergrundskripten der Erweiterung (oder anderen privilegierten Skripten, wie z.B. Popup-Skripten oder Optionsseitenskripten) an beliebige [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) oder Erweiterungsseiten/Iframes, die zur Erweiterung gehören und im angegebenen Tab ausgeführt werden.

Die Nachricht wird im Erweiterungskontext von allen Listenern des {{WebExtAPIRef("runtime.onMessage")}}-Ereignisses empfangen. Listener können optional etwas als Antwort an den Absender zurücksenden.

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
  - : `integer`. ID des Tabs, dessen Inhalts-Skripte wir eine Nachricht senden möchten.
- `message`
  - : `any`. Ein Objekt, das serialisiert werden kann (siehe [Datenklon-Algorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).
- `options` {{optional_inline}}
  - : `object`.
    - `frameId` {{optional_inline}}
      - : `integer`. Sendet die Nachricht an einen bestimmten Frame, der durch `frameId` identifiziert wird, anstatt an alle Frames im Tab. Ob das Inhalts-Skript in allen Frames ausgeführt wird, hängt von der `all_frames`-Einstellung im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Abschnitt von `manifest.json` ab.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem Antwortobjekt erfüllt wird, das vom Handler der Nachricht im Inhalts-Skript gesendet wurde, oder ohne Argumente, wenn das Inhalts-Skript keine Antwort gesendet hat.

Wenn ein Fehler beim Verbinden mit dem angegebenen Tab oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

Wenn mehrere Frames auf die Nachricht antworten, wird das Promise mit einer der Antworten aufgelöst.

## Beispiele

Hier ist ein Beispiel für ein Hintergrundskript, das eine Nachricht an die im aktiven Tab ausgeführten Inhalts-Skripte sendet, wenn der Benutzer auf die Browseraktion klickt. Das Hintergrundskript erwartet auch, dass das Inhalts-Skript eine Antwort sendet:

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

Hier ist das entsprechende Inhalts-Skript:

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
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-sendMessage)-API von Chromium. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
