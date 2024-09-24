---
title: Benutzeraktionen
slug: Mozilla/Add-ons/WebExtensions/User_actions
l10n:
  sourceCommit: d86e14de2e66319fc0a0ec0539a05400dea5a453
---

{{AddonSidebar}}

Einige WebExtension-APIs führen Funktionen aus, die normalerweise als Ergebnis einer Benutzeraktion ausgeführt werden. Zum Beispiel:

- Eine Browseraktion mit einem Popup zeigt das Popup an, wenn der Benutzer darauf klickt, aber es gibt auch eine {{WebExtAPIRef("browserAction.openPopup")}} API, die es einer Erweiterung ermöglicht, das Popup programmgesteuert zu öffnen.
- Wenn eine Erweiterung eine Seitenleiste hinzufügt, wird diese typischerweise vom Benutzer über einen Teil der integrierten Benutzeroberfläche des Browsers geöffnet, wie das Menü Ansicht/Seitenleiste. Aber es gibt auch eine {{WebExtAPIRef("sidebarAction.open")}} API, die es einer Erweiterung ermöglicht, die Seitenleiste programmgesteuert zu öffnen.

Um das Prinzip „keine Überraschungen“ zu befolgen, können APIs dieser Art nur innerhalb des Handlers für eine Benutzeraktion aufgerufen werden. Benutzeraktionen umfassen Folgendes:

- Klicken auf die Browseraktion oder Seitenaktion der Erweiterung.
- Auswählen eines vom Add-on definierten Kontextmenüelements.
- Aktivieren einer vom Add-on definierten Tastenkombination (dies wird erst ab Firefox 63 als Benutzeraktion behandelt).
- Klicken auf eine Schaltfläche in einer mit der Erweiterung gebündelten Seite.

Zum Beispiel:

```js
function handleClick() {
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);
```

Beachten Sie, dass Benutzeraktionen in normalen Webseiten für diesen Zweck nicht als Benutzeraktionen behandelt werden. Wenn ein Benutzer beispielsweise auf eine Schaltfläche in einer normalen Webseite klickt und ein Inhalts-Skript einen Klick-Handler für diese Schaltfläche hinzugefügt hat und in diesem Handler eine Nachricht an die Hintergrundseite der Erweiterung sendet, wird der Nachrichten-Handler der Hintergrundseite nicht als Bearbeitung einer Benutzeraktion betrachtet.

Auch wenn ein Benutzer-Eingabe-Handler auf ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wartet, verliert er seinen Status als Benutzer-Eingabe-Handler. Zum Beispiel:

```js
async function handleClick() {
  let result = await someAsyncFunction();

  // dies wird fehlschlagen, da der Handler seinen Status als "Benutzeraktions-Handler" verloren hat
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);
```
