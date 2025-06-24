---
title: Schaltfläche in der Adressleiste
slug: Mozilla/Add-ons/WebExtensions/user_interface/Page_actions
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Oft wird diese Benutzeroberflächenoption als [Page-Action](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) Schaltfläche bezeichnet. Dabei handelt es sich um eine Schaltfläche, die der Browser-Adressleiste hinzugefügt wird. Benutzer klicken auf die Schaltfläche, um mit Erweiterungen zu interagieren.

![Page-Action-Schaltfläche ist ein Symbol eines Hundepfotenabdrucks](address_bar_button.png)

## Page Actions und Browser Actions

Die Schaltfläche in der Adressleiste (oder Page Action) ist ähnlich der Symbolleistenschaltfläche (oder Browser Action).

Die Unterschiede sind:

- **Die Position der Schaltfläche:**

  - Die Page Action wird innerhalb der Browser-Adressleiste angezeigt.
  - Die Browser Action wird außerhalb der Adressleiste, in der Browser-Symbolleiste, angezeigt.

- **Die Sichtbarkeit der Schaltfläche:**
  - Die Page Action ist standardmäßig ausgeblendet (obwohl dieser Standard über die Eigenschaften `show_matches` und `hide_matches` des [Manifest-Schlüssels](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) geändert werden kann), und Sie rufen [`pageAction.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/show) und [`pageAction.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/hide) auf, um sie in bestimmten Tabs anzuzeigen oder auszublenden.
  - Die Browser Action wird immer angezeigt.

Verwenden Sie eine Page Action, wenn die Aktion sich auf die aktuelle Seite bezieht. Nutzen Sie eine Browser Action, wenn die Aktion sich auf den gesamten Browser oder auf viele Seiten bezieht. Zum Beispiel:

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
      <th scope="row">page action</th>
      <td>Diese Seite als Lesezeichen hinzufügen</td>
      <td>Reddit-Verbesserung</td>
      <td>Tab senden</td>
    </tr>
    <tr>
      <th scope="row">browser action</th>
      <td>Alle Lesezeichen anzeigen</td>
      <td>Werbungsblockierung aktivieren</td>
      <td>Alle offenen Tabs synchronisieren</td>
    </tr>
  </tbody>
</table>

## Festlegen der Page Action

Sie definieren die Eigenschaften der Page Action mit dem [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Schlüssel in der manifest.json:

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

- **Ohne ein Popup:** Wenn der Benutzer auf die Schaltfläche klickt, wird ein Ereignis an die Erweiterung gesendet, welches die Erweiterung mit [`pageAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked) überwacht:

  ```js
  browser.pageAction.onClicked.addListener(handleClick);
  ```

- **Mit einem Popup:** das `click`-Ereignis wird nicht gesendet. Stattdessen erscheint das Popup, wenn der Benutzer auf die Schaltfläche klickt. Der Benutzer interagiert dann mit dem Popup. Wenn der Benutzer außerhalb des Popups klickt, wird es automatisch geschlossen. Siehe den [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) Artikel für weitere Details zur Erstellung und Verwaltung von Popups.

Beachten Sie, dass Ihre Erweiterung nur eine Page Action haben kann.

Sie können jede der Eigenschaften der Page Action programmatisch mit der [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) API ändern.

## Symbole

Für Details zur Erstellung von Symbolen, die Sie mit Ihrer Page Action verwenden können, sehen Sie unter [Iconography](https://acorn.firefox.com/latest/styles/iconography/overview-QEDMXQqj) in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation nach.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [chill-out](https://github.com/mdn/webextensions-examples/tree/main/chill-out) Beispiel, das eine Page Action ohne ein Popup implementiert.
