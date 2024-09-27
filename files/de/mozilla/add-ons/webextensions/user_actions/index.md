---
title: Benutzeraktionen
slug: Mozilla/Add-ons/WebExtensions/User_actions
l10n:
  sourceCommit: d86e14de2e66319fc0a0ec0539a05400dea5a453
---

{{AddonSidebar}}

Einige WebExtension-APIs führen Funktionen aus, die normalerweise als Ergebnis einer Benutzeraktion ausgeführt werden. Zum Beispiel:

- Eine `browser action` mit einem Popup zeigt das Popup an, wenn der Benutzer darauf klickt. Es gibt jedoch auch die {{WebExtAPIRef("browserAction.openPopup")}}-API, die es einer Erweiterung ermöglicht, das Popup programmgesteuert zu öffnen.
- Wenn eine Erweiterung eine Seitenleiste hinzufügt, wird diese normalerweise vom Benutzer über einen Teil der integrierten Benutzeroberfläche des Browsers geöffnet, wie zum Beispiel das Menü Ansicht/Seitenleiste. Es gibt jedoch auch die {{WebExtAPIRef("sidebarAction.open")}}-API, die es einer Erweiterung ermöglicht, ihre Seitenleiste programmgesteuert zu öffnen.

Um das Prinzip "keine Überraschungen" zu befolgen, können APIs wie diese nur innerhalb des Handlers für eine Benutzeraktion aufgerufen werden. Benutzeraktionen umfassen Folgendes:

- Klicken auf die `browser action` oder `page action` der Erweiterung.
- Auswählen eines von der Erweiterung definierten Kontextmenüeintrags.
- Aktivieren einer von der Erweiterung definierten Tastenkombination (dies wird ab Firefox 63 nur als Benutzeraktion behandelt).
- Klicken auf eine Schaltfläche auf einer Seite, die mit der Erweiterung gebündelt ist.

Zum Beispiel:

```js
function handleClick() {
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);
```

Beachten Sie, dass Benutzeraktionen in normalen Webseiten für diesen Zweck nicht als Benutzeraktionen behandelt werden. Wenn beispielsweise ein Benutzer auf eine Schaltfläche in einer normalen Webseite klickt und ein Inhalts-Skript einen Klick-Handler für diese Schaltfläche hinzugefügt hat, der in diesem Handler eine Nachricht an die Hintergrundseite der Erweiterung sendet, dann wird der Nachricht-Handler der Hintergrundseite nicht als Bearbeitung einer Benutzeraktion angesehen.

Auch wenn ein Benutzer-Eingabe-Handler auf ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wartet, verliert er seinen Status als Benutzer-Eingabe-Handler. Zum Beispiel:

```js
async function handleClick() {
  let result = await someAsyncFunction();

  // this will fail, because the handler lost its "user action handler" status
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);
```
