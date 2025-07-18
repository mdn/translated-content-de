---
title: Adressleisten-Button
slug: Mozilla/Add-ons/WebExtensions/user_interface/Page_actions
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Häufig als [Seitenaktions-](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) Button bezeichnet, ist diese Benutzeroberflächenoption ein Knopf, der zur Adressleiste des Browsers hinzugefügt wird. Benutzer klicken auf den Button, um mit Erweiterungen zu interagieren.

![Seitenaktions-Button ist ein Symbol eines Hundepfotenabdrucks](address_bar_button.png)

## Seitenaktionen und Browseraktionen

Der Adressleisten-Button (oder Seitenaktion) ist ähnlich dem Toolbar-Button (oder Browseraktion).

Die Unterschiede sind:

- **Der Ort des Buttons:**
  - Die Seitenaktion wird innerhalb der Adressleiste des Browsers angezeigt.
  - Die Browseraktion wird außerhalb der Adressleiste, in der Symbolleiste des Browsers, angezeigt.

- **Die Sichtbarkeit des Buttons:**
  - Die Seitenaktion ist standardmäßig verborgen (obwohl dieser Standard über die `show_matches` und `hide_matches` [manifest key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Eigenschaften geändert werden kann), und Sie verwenden [`pageAction.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/show) und [`pageAction.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/hide), um sie in bestimmten Tabs anzuzeigen oder zu verbergen.
  - Die Browseraktion wird immer angezeigt.

Verwenden Sie eine Seitenaktion, wenn die Aktion sich auf die aktuelle Seite bezieht. Verwenden Sie eine Browseraktion, wenn die Aktion sich auf den gesamten Browser oder auf viele Seiten bezieht. Zum Beispiel:

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
      <th scope="row">Seitenaktion</th>
      <td>Diese Seite zu Favoriten hinzufügen</td>
      <td>Reddit-Verbesserung</td>
      <td>Tab senden</td>
    </tr>
    <tr>
      <th scope="row">Browseraktion</th>
      <td>Alle Lesezeichen anzeigen</td>
      <td>Werbeblockierung aktivieren</td>
      <td>Alle offenen Tabs synchronisieren</td>
    </tr>
  </tbody>
</table>

## Spezifizierung der Seitenaktion

Sie definieren die Eigenschaften der Seitenaktion mithilfe des [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Schlüssels in der manifest.json:

```json
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?"
}
```

Der einzige erforderliche Schlüssel ist `default_icon`.

Es gibt zwei Möglichkeiten, eine Seitenaktion zu bestimmen: mit oder ohne ein [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups).

- **Ohne Popup:** Wenn der Benutzer auf den Button klickt, wird ein Ereignis an die Erweiterung gesendet, auf das die Erweiterung mit [`pageAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked) lauscht:

  ```js
  browser.pageAction.onClicked.addListener(handleClick);
  ```

- **Mit Popup:** das `click`-Ereignis wird nicht gesendet. Stattdessen erscheint das Popup, wenn der Benutzer auf den Button klickt. Der Benutzer interagiert dann mit dem Popup. Wenn der Benutzer außerhalb des Popups klickt, schließt es sich automatisch. Sehen Sie sich den [Popup-Artikel](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) an, um mehr über das Erstellen und Verwalten von Popups zu erfahren.

Bitte beachten Sie, dass Ihre Erweiterung nur eine Seitenaktion haben kann.

Sie können alle Eigenschaften der Seitenaktion programmatisch über die [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) API ändern.

## Icons

Für Details, wie Sie Icons für Ihre Seitenaktion erstellen können, sehen Sie sich die [Ikonographie](https://acorn.firefox.com/latest/styles/iconography/overview-QEDMXQqj) in der Dokumentation des [Acorn Design Systems](https://acorn.firefox.com/latest) an.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub beinhaltet das [chill-out](https://github.com/mdn/webextensions-examples/tree/main/chill-out) Beispiel, das eine Seitenaktion ohne Popup implementiert.
