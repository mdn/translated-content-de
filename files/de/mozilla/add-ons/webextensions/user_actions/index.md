---
title: Benutzeraktionen
slug: Mozilla/Add-ons/WebExtensions/User_actions
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Einige WebExtension-APIs führen Funktionen aus, die im Allgemeinen als Ergebnis einer Benutzeraktion ausgeführt werden. Zum Beispiel:

- Eine Browseraktion mit einem Popup zeigt das Popup an, wenn der Benutzer darauf klickt, aber es gibt auch eine {{WebExtAPIRef("browserAction.openPopup")}}-API, die es einer Erweiterung ermöglicht, das Popup programmatisch zu öffnen.
- Wenn eine Erweiterung eine Seitenleiste hinzufügt, wird diese typischerweise vom Benutzer über einen Teil der integrierten Benutzeroberfläche des Browsers geöffnet, wie etwa das Menü Ansicht/Seitenleiste. Aber es gibt auch eine {{WebExtAPIRef("sidebarAction.open")}}-API, die es einer Erweiterung ermöglicht, ihre Seitenleiste programmatisch zu öffnen.

Um das Prinzip "keine Überraschungen" zu befolgen, können solche APIs nur innerhalb des Handlers für eine Benutzeraktion aufgerufen werden. Benutzeraktionen umfassen Folgendes:

- Klicken auf die Browseraktion oder Seitenaktion der Erweiterung.
- Auswählen eines vom Erweiterung definierten Kontextmenüelements.
- Aktivieren einer von der Erweiterung definierten Tastenkombination (dies wird erst ab Firefox 63 als Benutzeraktion behandelt).
- Klicken auf eine Schaltfläche in einer mit der Erweiterung gebündelten Seite.

Zum Beispiel:

```js
function handleClick() {
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);
```

Beachten Sie, dass Benutzeraktionen auf normalen Webseiten in diesem Zusammenhang nicht als Benutzeraktionen behandelt werden. Wenn ein Benutzer beispielsweise auf eine Schaltfläche in einer normalen Webseite klickt und ein Content Script einen Klick-Handler für diese Schaltfläche hinzugefügt hat und in diesem Handler eine Nachricht an die Hintergrundseite der Erweiterung sendet, dann wird der Nachrichten-Handler der Hintergrundseite nicht als Handling einer Benutzeraktion angesehen.

Auch wenn ein Benutzer-Eingabe-Handler auf ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wartet, geht dessen Status als Benutzer-Eingabe-Handler verloren. Zum Beispiel:

```js
async function handleClick() {
  let result = await someAsyncFunction();

  // this will fail, because the handler lost its "user action handler" status
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);
```
