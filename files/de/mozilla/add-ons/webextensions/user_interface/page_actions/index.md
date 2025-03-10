---
title: Schaltfläche in der Adressleiste
slug: Mozilla/Add-ons/WebExtensions/user_interface/Page_actions
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{AddonSidebar}}

Häufig als [Seitenaktion](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction)-Schaltfläche bezeichnet, ist diese Benutzeroberflächenoption eine Schaltfläche, die der Adressleiste des Browsers hinzugefügt wird. Benutzer klicken auf die Schaltfläche, um mit Erweiterungen zu interagieren.

![Seitenaktionsknopf ist ein Symbol eines Hundepfotenabdrucks](address_bar_button.png)

## Seitenaktionen und Browseraktionen

Die Schaltfläche in der Adressleiste (oder Seitenaktion) ähnelt der Symbolleistenschaltfläche (oder Browseraktion).

Die Unterschiede sind:

- **Der Standort der Schaltfläche:**

  - Die Seitenaktion wird innerhalb der Adressleiste des Browsers angezeigt.
  - Die Browseraktion wird außerhalb der Adressleiste, in der Symbolleiste des Browsers, angezeigt.

- **Die Sichtbarkeit der Schaltfläche:**

  - Die Seitenaktion ist standardmäßig verborgen (obwohl diese Standardeinstellung über die `show_matches` und `hide_matches` [Schlüssel im Manifest](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) geändert werden kann), und Sie rufen [`pageAction.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/show) und [`pageAction.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/hide) auf, um sie in bestimmten Tabs anzuzeigen oder zu verbergen.
  - Die Browseraktion wird immer angezeigt.

Verwenden Sie eine Seitenaktion, wenn sich die Aktion auf die aktuelle Seite bezieht. Verwenden Sie eine Browseraktion, wenn sich die Aktion auf den Browser insgesamt oder auf viele Seiten bezieht. Zum Beispiel:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row">Typ</th>
      <th scope="col">Lesezeichenaktion</th>
      <th scope="col">Inhaltsaktion</th>
      <th scope="col">Tab-Operation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Seitenaktion</th>
      <td>Diese Seite als Lesezeichen speichern</td>
      <td>Reddit-Verbesserung</td>
      <td>Tab senden</td>
    </tr>
    <tr>
      <th scope="row">Browseraktion</th>
      <td>Alle Lesezeichen anzeigen</td>
      <td>Werbeblocker aktivieren</td>
      <td>Alle offenen Tabs synchronisieren</td>
    </tr>
  </tbody>
</table>

## Festlegen der Seitenaktion

Sie definieren die Eigenschaften der Seitenaktion mit dem [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)-Schlüssel in der manifest.json:

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

Es gibt zwei Möglichkeiten, eine Seitenaktion anzugeben: mit oder ohne ein [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups).

- **Ohne ein Popup:** Wenn der Benutzer auf die Schaltfläche klickt, wird ein Ereignis an die Erweiterung gesendet, das die Erweiterung mit [`pageAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked) abfängt:

  ```js
  browser.pageAction.onClicked.addListener(handleClick);
  ```

- **Mit einem Popup:** Das `click`-Ereignis wird nicht gesendet. Stattdessen erscheint das Popup, wenn der Benutzer auf die Schaltfläche klickt. Der Benutzer interagiert dann mit dem Popup. Wenn der Benutzer außerhalb des Popups klickt, schließt es sich automatisch. Weitere Informationen zum Erstellen und Verwalten von Popups finden Sie im Artikel [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups).

Beachten Sie, dass Ihre Erweiterung nur eine Seitenaktion haben kann.

Sie können alle Eigenschaften der Seitenaktion programmatisch mit der [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction)-API ändern.

## Symbole

Für Details, wie Sie Symbole für Ihre Seitenaktion erstellen, sehen Sie sich die [Ikonografie](https://acorn.firefox.com/latest/styles/iconography/overview-QEDMXQqj) in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation an.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples)-Repository auf GitHub enthält das [chill-out](https://github.com/mdn/webextensions-examples/tree/main/chill-out)-Beispiel, das eine Seitenaktion ohne Popup implementiert.
