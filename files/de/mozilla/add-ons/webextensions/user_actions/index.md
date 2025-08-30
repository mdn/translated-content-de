---
title: Benutzeraktionen
slug: Mozilla/Add-ons/WebExtensions/User_actions
l10n:
  sourceCommit: 4da1a8a9c5464e521d95ff78341ec8ed791fc97b
---

Einige WebExtension-APIs führen Funktionen aus, die normalerweise als Ergebnis einer Benutzeraktion auftreten. Nach dem Prinzip "keine Überraschungen" können diese APIs nur innerhalb des Handlers für eine Benutzeraktion aufgerufen werden (auch als Benutzerinteraktionen bezeichnet). Diese Benutzeraktionen sind:

- Klicken auf die Browser- oder Seitenaktion der Erweiterung.
- Auswählen eines vom Add-on definierten Kontextmenüeintrags.
- Aktivierung einer von der Erweiterung definierten Tastenkombination (dies wird erst ab Firefox 63 als Benutzeraktion behandelt).
- Klicken auf eine Schaltfläche auf einer mit der Erweiterung gebündelten Seite.
- Klicken auf einen Erweiterungsvorschlag in der Adressleiste (omnibox) (dies wird erst ab Firefox 142 als Benutzeraktion behandelt).

Die durch eine Benutzeraktion aktivierten APIs sind:

- Die APIs {{WebExtAPIRef("action.openPopup")}}, {{WebExtAPIRef("browserAction.openPopup")}}, und {{WebExtAPIRef("pageAction.openPopup")}}, die das Popup der Browser- oder Seitenaktion einer Erweiterung öffnen. Benutzer tun dies auch, indem sie auf die Browser- oder Seitenaktion klicken.
- Die APIs {{WebExtAPIRef("sidebarAction.open")}}, {{WebExtAPIRef("sidebarAction.close")}}, und {{WebExtAPIRef("sidebarAction.toggle")}} öffnen und schließen die Seitenleiste einer Erweiterung. Der Benutzer tut dies aus einem Teil der eingebauten Benutzeroberfläche des Browsers, wie z.B. dem Menü **Ansicht** > **Seitenleiste**.
- Die API {{WebExtAPIRef("downloads.open")}} öffnet eine heruntergeladene Datei. Der Benutzer tut dies aus einem Teil der eingebauten Benutzeroberfläche des Browsers, wie z.B. dem Menü **Werkzeuge** > **Downloads**.
- Die API {{WebExtAPIRef("management.setEnabled")}}. Der Benutzer kann ein Theme-Add-on von der Seite des Add-ons-Managers deaktivieren.
- Die API {{WebExtAPIRef("permissions.request")}}. Der Benutzer kann Berechtigungen über das Berechtigungs- und Datentab im Add-on-Manager der Erweiterung erteilen.

Zum Beispiel:

```js
function handleClick() {
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);
```

Zusätzlich zur Aktivierung der APIs ermöglicht diese Aktion auch die [`"activeTab"`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Diese Berechtigung gewährt zusätzliche Privilegien für den Tab, der sichtbar ist, wenn die Benutzeraktion stattfindet.

Benutzerinteraktionen auf normalen Webseiten werden nicht als Benutzeraktionen behandelt. Zum Beispiel, betrachten Sie eine Schaltfläche auf einer normalen Webseite, die ein Content-Skript verwendet. Dieses Content-Skript hat einen Klick-Handler für die Schaltfläche hinzugefügt, der eine Nachricht an die Hintergrundseite der Erweiterung sendet. Wenn ein Benutzer auf die Schaltfläche klickt, wird der Nachrichten-Handler der Hintergrundseite nicht als Verarbeitung einer Benutzeraktion angesehen.

Auch wenn ein Benutzer-Eingabe-Handler auf ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wartet, geht sein Status als Benutzer-Eingabe-Handler verloren. Zum Beispiel:

```js
async function handleClick() {
  let result = await someAsyncFunction();

  // this fails, because the handler lost its "user action handler" status
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);
```
