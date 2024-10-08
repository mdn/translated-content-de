---
title: Benutzeraktionen
slug: Mozilla/Add-ons/WebExtensions/User_actions
l10n:
  sourceCommit: d86e14de2e66319fc0a0ec0539a05400dea5a453
---

{{AddonSidebar}}

Einige WebExtension-APIs führen Funktionen aus, die normalerweise als Ergebnis einer Benutzeraktion ausgeführt werden. Zum Beispiel:

- Eine Browser-Aktion mit einem Popup zeigt das Popup an, wenn der Benutzer darauf klickt. Es gibt jedoch auch die {{WebExtAPIRef("browserAction.openPopup")}}-API, die es einer Erweiterung ermöglicht, das Popup programmgesteuert zu öffnen.
- Wenn eine Erweiterung eine Seitenleiste hinzufügt, wird sie typischerweise vom Benutzer über einen Teil der integrierten Benutzeroberfläche des Browsers geöffnet, wie z.B. das Menü Ansicht/Seitenleiste. Es gibt jedoch auch die {{WebExtAPIRef("sidebarAction.open")}}-API, die es einer Erweiterung ermöglicht, ihre Seitenleiste programmgesteuert zu öffnen.

Um das Prinzip „keine Überraschungen“ zu befolgen, können APIs wie diese nur innerhalb des Handlers einer Benutzeraktion aufgerufen werden. Benutzeraktionen umfassen Folgendes:

- Das Klicken auf die Browser-Aktion oder Seiten-Aktion der Erweiterung.
- Das Auswählen eines vom Plugin definierten Kontextmenüeintrags.
- Das Aktivieren einer von der Erweiterung definierten Tastenkombination (dies zählt ab Firefox 63 erst als Benutzeraktion).
- Das Klicken auf eine Schaltfläche auf einer Seite, die mit der Erweiterung gebündelt ist.

Zum Beispiel:

```js
function handleClick() {
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);
```

Beachten Sie, dass Benutzeraktionen auf normalen Webseiten für diesen Zweck nicht als Benutzeraktionen behandelt werden. Wenn beispielsweise ein Benutzer auf einer normalen Webseite auf eine Schaltfläche klickt und ein Inhalts-Skript einen Klick-Handler für diese Schaltfläche hinzugefügt hat und in diesem Handler eine Nachricht an die Hintergrundseite der Erweiterung sendet, wird der Nachrichten-Handler der Hintergrundseite nicht als Verarbeitung einer Benutzeraktion betrachtet.

Auch wenn ein Benutzereingabe-Handler auf eine [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wartet, geht sein Status als Benutzereingabe-Handler verloren. Zum Beispiel:

```js
async function handleClick() {
  let result = await someAsyncFunction();

  // this will fail, because the handler lost its "user action handler" status
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);
```
