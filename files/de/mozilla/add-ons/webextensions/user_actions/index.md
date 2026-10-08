---
title: Benutzeraktionen
slug: Mozilla/Add-ons/WebExtensions/User_actions
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Einige WebExtension-APIs führen Funktionen aus, die normalerweise durch eine Benutzeraktion ausgelöst werden. Nach dem Prinzip „keine Überraschungen“ können diese APIs nur innerhalb eines Handlers für eine Benutzeraktion (auch als Benutzergeste bezeichnet) aufgerufen werden. Als Benutzeraktionen gelten:

- Das Klicken auf die Browser-Aktion oder Seiten-Aktion der Erweiterung.
- Das Auswählen eines von der Erweiterung definierten Kontextmenüeintrags.
- Das Aktivieren eines von der Erweiterung definierten Tastaturkürzels (dies gilt erst ab Firefox 63 als Benutzeraktion).
- Das Klicken auf eine Schaltfläche auf einer Seite, die mit der Erweiterung gebündelt ist.
- Das Klicken auf einen Vorschlag der Erweiterung in der Adressleiste (Omnibox) (dies gilt erst ab Firefox 142 als Benutzeraktion).

Durch eine Benutzeraktion werden die folgenden APIs nutzbar:

- Die {{WebExtAPIRef("pageAction.openPopup")}}-API öffnet das Popup der Seiten-Aktion einer Erweiterung. Benutzer können dies tun, indem sie auf die Seiten-Aktion klicken.
- Die APIs {{WebExtAPIRef("sidebarAction.open")}}, {{WebExtAPIRef("sidebarAction.close")}} und {{WebExtAPIRef("sidebarAction.toggle")}} öffnen und schließen die Seitenleiste einer Erweiterung. Benutzer können dies über die integrierte Benutzeroberfläche des Browsers tun, beispielsweise über das Menü **Ansicht** > **Seitenleiste**.
- Die API {{WebExtAPIRef("downloads.open")}} öffnet eine heruntergeladene Datei. Benutzer können dies über die integrierte Benutzeroberfläche des Browsers tun, beispielsweise über das Menü **Extras** > **Downloads**.
- Die API {{WebExtAPIRef("management.setEnabled")}}. Benutzer können eine Theme-Erweiterung auf der Add-on-Manager-Seite der Erweiterung deaktivieren.
- Die API {{WebExtAPIRef("permissions.request")}}. Benutzer können Berechtigungen auf der Registerkarte für Berechtigungen und Daten im Add-on-Manager der Erweiterung erteilen.

Zum Beispiel:

```js
function handleClick() {
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);
```

Diese Aktionen machen nicht nur die APIs nutzbar, sondern aktivieren auch die [Berechtigung `activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission). Diese Berechtigung gewährt zusätzliche Rechte für den Tab, der zum Zeitpunkt der Benutzeraktion sichtbar ist.

Interaktionen auf gewöhnlichen Webseiten gelten nicht als Benutzeraktionen. Betrachten Sie beispielsweise eine Schaltfläche auf einer gewöhnlichen Webseite, für die ein Content-Skript verwendet wird. Dieses Content-Skript hat für die Schaltfläche einen Click-Handler hinzugefügt, der eine Nachricht an die Hintergrundseite der Erweiterung sendet. Wenn ein Benutzer auf die Schaltfläche klickt, gilt der Nachrichten-Handler der Hintergrundseite nicht als Handler für eine Benutzeraktion.

Wenn ein Handler für eine Benutzereingabe auf ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wartet, verliert er außerdem seinen Status als Handler für eine Benutzereingabe. Zum Beispiel:

```js
async function handleClick() {
  let result = await someAsyncFunction();

  // this fails, because the handler lost its "user action handler" status
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);
```
