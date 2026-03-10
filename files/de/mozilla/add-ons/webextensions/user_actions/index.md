---
title: Benutzeraktionen
slug: Mozilla/Add-ons/WebExtensions/User_actions
l10n:
  sourceCommit: 9ccb27e3072098028db8651e8b4df980d5e01e71
---

Einige WebExtension-APIs führen Funktionen aus, die normalerweise als Ergebnis einer Benutzeraktion stattfinden. Nach dem Prinzip "keine Überraschungen" können diese APIs nur innerhalb des Handlers für eine Benutzeraktion aufgerufen werden (auch als Benutzeraktionen bekannt). Diese Benutzeraktionen sind:

- Das Klicken auf die Browser- oder Seitenerweiterung der Erweiterung.
- Das Auswählen eines vom Add-on definierten Kontextmenüpunkts.
- Das Aktivieren einer vom Add-on definierten Tastenkombination (dies wird erst ab Firefox 63 als Benutzeraktion behandelt).
- Das Klicken auf eine Schaltfläche auf einer Seite, die mit der Erweiterung gebündelt ist.
- Das Klicken auf einen Erweiterungsvorschlag in der Adressleiste (Omnibox) (dies wird erst ab Firefox 142 als Benutzeraktion behandelt).

Die durch eine Benutzeraktion aktivierten APIs sind:

- Die APIs {{WebExtAPIRef("pageAction.openPopup")}}, die das Popup der Seitenaktion einer Erweiterung öffnen. Der Benutzer macht dies, indem er auf die Seitenaktion klickt.
- Die APIs {{WebExtAPIRef("sidebarAction.open")}}, {{WebExtAPIRef("sidebarAction.close")}} und {{WebExtAPIRef("sidebarAction.toggle")}} öffnen und schließen die Seitenleiste einer Erweiterung. Der Benutzer tut dies aus einem Teil der integrierten Benutzeroberfläche des Browsers, wie dem Menü **Ansicht** > **Seitenleiste**.
- Die API {{WebExtAPIRef("downloads.open")}} öffnet eine heruntergeladene Datei. Der Benutzer tut dies über einen Teil der integrierten Benutzeroberfläche des Browsers, wie dem Menü **Extras** > **Downloads**.
- Die API {{WebExtAPIRef("management.setEnabled")}}. Der Benutzer kann eine Themen-Erweiterung auf der Add-on-Manager-Seite der Erweiterung deaktivieren.
- Die API {{WebExtAPIRef("permissions.request")}}. Der Benutzer kann Berechtigungen auf der Berechtigungs- und Datenregisterkarte des Add-on-Managers der Erweiterung gewähren.

Zum Beispiel:

```js
function handleClick() {
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);
```

Zusätzlich zur Aktivierung der APIs ermöglichen diese Aktionen auch die [`"activeTab"` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Diese Berechtigung gewährt zusätzliche Privilegien für den Tab, der sichtbar ist, wenn die Benutzeraktion stattfindet.

Benutzerinteraktionen auf normalen Webseiten werden nicht als Benutzeraktionen behandelt. Zum Beispiel wird ein Button auf einer normalen Webseite, der ein Inhaltsskript verwendet, nicht als Benutzeraktion behandelt. Wenn dieses Inhaltsskript einen Klick-Handler für den Button hinzufügt, der eine Nachricht an die Hintergrundseite der Erweiterung sendet, wird der Nachricht-Handler der Hintergrundseite nicht als Bearbeiter einer Benutzeraktion betrachtet, wenn der Benutzer den Button klickt.

Auch wenn ein Benutzer-Eingabe-Handler auf ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wartet, verliert er seinen Status als Benutzer-Eingabe-Handler. Zum Beispiel:

```js
async function handleClick() {
  let result = await someAsyncFunction();

  // this fails, because the handler lost its "user action handler" status
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);
```
