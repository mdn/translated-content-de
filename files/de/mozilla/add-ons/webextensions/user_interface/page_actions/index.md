---
title: Adressleisten-Schaltfläche
slug: Mozilla/Add-ons/WebExtensions/user_interface/Page_actions
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

Allgemein als [Seitenaktion](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction)-Schaltfläche bezeichnet, ist diese Benutzeroberflächenoption eine Schaltfläche, die zur Adressleiste des Browsers hinzugefügt wird. Benutzer klicken auf die Schaltfläche, um mit Erweiterungen zu interagieren.

![Die Seitenaktion-Schaltfläche ist ein Symbol eines Hundepfotenabdrucks](address_bar_button.png)

## Seitenaktionen und Browseraktionen

Die Adressleisten-Schaltfläche (oder Seitenaktion) ähnelt der Symbolleisten-Schaltfläche (oder Browseraktion).

Die Unterschiede sind:

- **Der Speicherort der Schaltfläche:**

  - Die Seitenaktion wird in der Adressleiste des Browsers angezeigt.
  - Die Browseraktion wird außerhalb der Adressleiste, in der Symbolleiste des Browsers, angezeigt.

- **Die Sichtbarkeit der Schaltfläche:**

  - Die Seitenaktion ist standardmäßig ausgeblendet (obwohl diese Standardeinstellung über die Eigenschaften `show_matches` und `hide_matches` im [Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) geändert werden kann), und Sie rufen [`pageAction.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/show) und [`pageAction.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/hide) auf, um sie in spezifischen Tabs anzuzeigen oder auszublenden.
  - Die Browseraktion wird immer angezeigt.

Verwenden Sie eine Seitenaktion, wenn die Aktion sich auf die aktuelle Seite bezieht. Verwenden Sie eine Browseraktion, wenn die Aktion sich auf den gesamten Browser oder viele Seiten bezieht. Zum Beispiel:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row">Typ</th>
      <th scope="col">Lesezeichenaktion</th>
      <th scope="col">Inhaltsaktion</th>
      <th scope="col">Tab-Aktion</th>
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

## Die Seitenaktion festlegen

Sie definieren die Eigenschaften der Seitenaktion mit dem [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)-Schlüssel in manifest.json:

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

Es gibt zwei Möglichkeiten, eine Seitenaktion zu definieren: mit oder ohne [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups).

- **Ohne Popup:** Wenn der Benutzer auf die Schaltfläche klickt, wird ein Ereignis an die Erweiterung gesendet, das die Erweiterung mithilfe von [`pageAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked) überwacht:

  ```js
  browser.pageAction.onClicked.addListener(handleClick);
  ```

- **Mit Popup:** das `click`-Ereignis wird nicht gesendet. Stattdessen erscheint das Popup, wenn der Benutzer auf die Schaltfläche klickt. Der Benutzer interagiert dann mit dem Popup. Wenn der Benutzer außerhalb des Popups klickt, wird es automatisch geschlossen. Weitere Einzelheiten zum Erstellen und Verwalten von Popups finden Sie im Artikel [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups).

Beachten Sie, dass Ihre Erweiterung nur eine Seitenaktion haben kann.

Sie können alle Eigenschaften der Seitenaktion programmatisch mithilfe der [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction)-API ändern.

## Symbole

Details zum Erstellen von Symbolen für Ihre Seitenaktion finden Sie unter [Ikonographie](https://acorn.firefox.com/latest/styles/iconography-q7JqGl5H) in der Dokumentation des [Acorn Design Systems](https://acorn.firefox.com/latest).

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples)-Repository auf GitHub enthält das [chill-out](https://github.com/mdn/webextensions-examples/tree/main/chill-out)-Beispiel, das eine Seitenaktion ohne Popup implementiert.
