---
title: Adressleisten-Schaltfläche
slug: Mozilla/Add-ons/WebExtensions/user_interface/Page_actions
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

Häufig als [Page Action](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction)-Schaltfläche bezeichnet, ist diese Benutzeroberflächenoption eine Schaltfläche, die zur Browser-Adressleiste hinzugefügt wird. Benutzer klicken auf die Schaltfläche, um mit Erweiterungen zu interagieren.

![Page Action-Schaltfläche ist ein Symbol eines Hundepfotenabdrucks](address_bar_button.png)

## Page Actions und Browser Actions

Die Adressleisten-Schaltfläche (oder Page Action) ist der Toolbar-Schaltfläche (oder Browser Action) ähnlich.

Die Unterschiede sind:

- **Der Ort der Schaltfläche:**

  - Die Page Action wird innerhalb der Browser-Adressleiste angezeigt.
  - Die Browser Action wird außerhalb der Adressleiste, in der Browser-Toolbar, angezeigt.

- **Die Sichtbarkeit der Schaltfläche:**

  - Die Page Action ist standardmäßig ausgeblendet (obwohl dieser Standard mithilfe der `show_matches` und `hide_matches` [manifest key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)-Eigenschaften geändert werden kann), und Sie rufen [`pageAction.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/show) und [`pageAction.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/hide) auf, um sie in bestimmten Tabs anzuzeigen oder auszublenden.
  - Die Browser Action wird immer angezeigt.

Verwenden Sie eine Page Action, wenn die Aktion sich auf die aktuelle Seite bezieht. Verwenden Sie eine Browser Action, wenn sich die Aktion auf den gesamten Browser oder auf viele Seiten bezieht. Zum Beispiel:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row">Typ</th>
      <th scope="col">Lesezeichen-Aktion</th>
      <th scope="col">Inhalt-Aktion</th>
      <th scope="col">Tab-Operation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">page action</th>
      <td>Diese Seite als Lesezeichen speichern</td>
      <td>Reddit-Erweiterung</td>
      <td>Tab senden</td>
    </tr>
    <tr>
      <th scope="row">browser action</th>
      <td>Alle Lesezeichen anzeigen</td>
      <td>Werbeblocker aktivieren</td>
      <td>Alle offenen Tabs synchronisieren</td>
    </tr>
  </tbody>
</table>

## Spezifizierung der Page Action

Sie definieren die Eigenschaften der Page Action mithilfe des [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)-Schlüssels in manifest.json:

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

Es gibt zwei Möglichkeiten, eine Page Action zu spezifizieren: mit oder ohne einen [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups).

- **Ohne Popup:** Wenn der Benutzer auf die Schaltfläche klickt, wird ein Ereignis an die Erweiterung gesendet, das von der Erweiterung mit [`pageAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked) überwacht wird:

  ```js
  browser.pageAction.onClicked.addListener(handleClick);
  ```

- **Mit Popup:** Das `click`-Ereignis wird nicht gesendet. Stattdessen erscheint das Popup, wenn der Benutzer auf die Schaltfläche klickt. Der Benutzer interagiert dann mit dem Popup. Wenn der Benutzer außerhalb des Popups klickt, schließt es sich automatisch. Weitere Details zur Erstellung und Verwaltung von Popups finden Sie im Artikel [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups).

Beachten Sie, dass Ihre Erweiterung nur eine Page Action haben kann.

Sie können alle Eigenschaften der Page Action programmatisch mit der [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction)-API ändern.

## Symbole

Für Details zur Erstellung von Symbolen, die Sie mit Ihrer Page Action verwenden können, sehen Sie unter [Ikonografie](https://acorn.firefox.com/latest/styles/iconography-q7JqGl5H) in der [Acorn Design System](https://acorn.firefox.com/latest)-Dokumentation nach.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples)-Repository auf GitHub enthält das [chill-out](https://github.com/mdn/webextensions-examples/tree/main/chill-out)-Beispiel, das eine Page Action ohne ein Popup implementiert.
