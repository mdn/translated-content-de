---
title: Schaltfläche in der Adressleiste
slug: Mozilla/Add-ons/WebExtensions/user_interface/Page_actions
l10n:
  sourceCommit: 5d6f5187d1c657edec7e735d3cc5ad36907e2030
---

Allgemein als [page action](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) Schaltfläche bezeichnet, ist diese Benutzeroberflächenoption eine Schaltfläche, die zur Browser-Adressleiste hinzugefügt wird. Benutzer klicken auf die Schaltfläche, um mit Erweiterungen zu interagieren.

![Page action Schaltfläche ist ein Symbol eines Hundepfotenabdrucks](address_bar_button.png)

## Page actions und browser actions

Die Schaltfläche in der Adressleiste (oder page action) ist ähnlich der Toolbar-Schaltfläche (oder browser action).

Die Unterschiede sind:

- **Der Ort der Schaltfläche:**
  - Die page action wird innerhalb der Adressleiste des Browsers angezeigt.
  - Die browser action wird außerhalb der Adressleiste, in der Symbolleiste des Browsers, angezeigt.

- **Die Sichtbarkeit der Schaltfläche:**
  - Die page action ist standardmäßig verborgen (obwohl dieses Standardverhalten über die `show_matches` und `hide_matches` [Manifest-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) geändert werden kann), und Sie rufen [`pageAction.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/show) und [`pageAction.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/hide) auf, um sie in bestimmten Tabs anzuzeigen oder zu verbergen.
  - Die browser action wird immer angezeigt.

Verwenden Sie eine page action, wenn die Aktion in Bezug zur aktuellen Seite steht. Verwenden Sie eine browser action, wenn die Aktion sich auf den gesamten Browser oder auf viele Seiten bezieht. Zum Beispiel:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row">Typ</th>
      <th scope="col">Lesezeichen-Aktion</th>
      <th scope="col">Inhaltsaktion</th>
      <th scope="col">Tabs-Operation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">page action</th>
      <td>Diese Seite als Lesezeichen speichern</td>
      <td>Reddit-Verbesserung</td>
      <td>Tab senden</td>
    </tr>
    <tr>
      <th scope="row">browser action</th>
      <td>Alle Lesezeichen anzeigen</td>
      <td>Werbeblocker aktivieren</td>
      <td>Alle geöffneten Tabs synchronisieren</td>
    </tr>
  </tbody>
</table>

## Die page action spezifizieren

Sie definieren die Eigenschaften der page action mit dem [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Schlüssel in manifest.json:

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

Es gibt zwei Möglichkeiten, eine page action zu spezifizieren: mit oder ohne ein [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups).

- **Ohne ein Popup:** Wenn der Benutzer auf die Schaltfläche klickt, wird ein Ereignis an die Erweiterung gesendet, welches die Erweiterung mit [`pageAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked) abfängt:

  ```js
  browser.pageAction.onClicked.addListener(handleClick);
  ```

- **Mit einem Popup:** Das `click` Ereignis wird nicht gesendet. Stattdessen erscheint das Popup, wenn der Benutzer auf die Schaltfläche klickt. Der Benutzer interagiert anschließend mit dem Popup. Wenn der Benutzer außerhalb des Popups klickt, wird es automatisch geschlossen. Lesen Sie den [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) Artikel für weitere Details zur Erstellung und Verwaltung von Popups.

Beachten Sie, dass Ihre Erweiterung nur eine page action haben kann.

Sie können alle Eigenschaften der page action programmatisch mit der [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) API ändern.

## Symbole

Für Informationen zur Erstellung von Symbolen, die Sie mit Ihrer page action verwenden können, lesen Sie [Iconography](https://acorn.firefox.com/latest/foundations/styles/iconography-QEDMXQqj) in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [chill-out](https://github.com/mdn/webextensions-examples/tree/main/chill-out) Beispiel, das eine page action ohne ein Popup implementiert.
