---
title: Adressleisten-Schaltfläche
slug: Mozilla/Add-ons/WebExtensions/user_interface/Page_actions
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

Häufig als [Page Action](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) bezeichnet, ist diese Benutzeroberflächenoption eine Schaltfläche, die der Adressleiste des Browsers hinzugefügt wird. Benutzer klicken auf die Schaltfläche, um mit Erweiterungen zu interagieren.

![Page-Action-Schaltfläche ist ein Symbol einer Hunde-Pfotenabdruck](address_bar_button.png)

## Page-Aktionen und Browser-Aktionen

Die Adressleisten-Schaltfläche (oder Page Action) ist der Toolbar-Schaltfläche (oder Browser Action) ähnlich.

Die Unterschiede sind:

- **Der Ort der Schaltfläche:**

  - Die Page Action wird innerhalb der Adressleiste des Browsers angezeigt.
  - Die Browser Action wird außerhalb der Adressleiste, in der Symbolleiste des Browsers, angezeigt.

- **Die Sichtbarkeit der Schaltfläche:**

  - Die Page Action ist standardmäßig verborgen (obwohl diese Standardeinstellung über die Eigenschaften `show_matches` und `hide_matches` des [Manifest-Schlüssels](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) geändert werden kann), und Sie rufen [`pageAction.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/show) und [`pageAction.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/hide) auf, um sie in bestimmten Tabs anzuzeigen oder zu verbergen.
  - Die Browser Action wird immer angezeigt.

Verwenden Sie eine Page Action, wenn die Aktion sich auf die aktuelle Seite bezieht. Verwenden Sie eine Browser Action, wenn die Aktion sich auf den Browser als Ganzes oder auf mehrere Seiten bezieht. Zum Beispiel:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row">Typ</th>
      <th scope="col">Lesezeichen-Aktion</th>
      <th scope="col">Inhaltsaktion</th>
      <th scope="col">Tab-Operation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Page Action</th>
      <td>Diese Seite mit einem Lesezeichen versehen</td>
      <td>Reddit-Verbesserung</td>
      <td>Tab senden</td>
    </tr>
    <tr>
      <th scope="row">Browser Action</th>
      <td>Alle Lesezeichen anzeigen</td>
      <td>Werbeblocker aktivieren</td>
      <td>Alle offenen Tabs synchronisieren</td>
    </tr>
  </tbody>
</table>

## Spezifizieren der Page Action

Sie definieren die Eigenschaften der Page Action mithilfe des [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Schlüssels in manifest.json:

```json
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?"
}
```

Der einzige obligatorische Schlüssel ist `default_icon`.

Es gibt zwei Möglichkeiten, eine Page Action zu spezifizieren: mit oder ohne ein [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups).

- **Ohne ein Popup:** Wenn der Benutzer auf die Schaltfläche klickt, wird ein Ereignis an die Erweiterung gesendet, das die Erweiterung mit [`pageAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked) abhört:

  ```js
  browser.pageAction.onClicked.addListener(handleClick);
  ```

- **Mit einem Popup:** Das `click`-Ereignis wird nicht gesendet. Stattdessen erscheint das Popup, wenn der Benutzer auf die Schaltfläche klickt. Der Benutzer interagiert dann mit dem Popup. Wenn der Benutzer außerhalb des Popups klickt, wird es automatisch geschlossen. Sehen Sie sich den [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) Artikel für mehr Details zur Erstellung und Verwaltung von Popups an.

Beachten Sie, dass Ihre Erweiterung nur eine Page Action haben kann.

Sie können alle Eigenschaften der Page Action programmatisch mit der [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) API ändern.

## Symbole

Für Details, wie Sie Symbole erstellen, die Sie mit Ihrer Page Action verwenden können, sehen Sie sich die [Ikonographie](https://acorn.firefox.com/latest/styles/iconography-q7JqGl5H) im [Acorn Design System](https://acorn.firefox.com/latest) an.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [chill-out](https://github.com/mdn/webextensions-examples/tree/main/chill-out) Beispiel, das eine Page Action ohne Popup implementiert.
