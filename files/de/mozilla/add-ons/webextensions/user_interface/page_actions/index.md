---
title: Schaltfläche in der Adressleiste
slug: Mozilla/Add-ons/WebExtensions/user_interface/Page_actions
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

Diese Benutzeroberflächenoption, häufig als [page action](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction)-Schaltfläche bezeichnet, fügt der Adressleiste des Browsers eine Schaltfläche hinzu. Benutzer klicken auf die Schaltfläche, um mit Erweiterungen zu interagieren.

![Hervorgehobene Schaltfläche mit einem Pfotenabdruck-Symbol in der Firefox-Adressleiste](address_bar_button.png)

## Page actions und browser actions

Die Schaltfläche in der Adressleiste (oder page action) ähnelt der Schaltfläche in der Symbolleiste (oder browser action).

Die Unterschiede sind:

- **Position der Schaltfläche:**
  - Die page action wird innerhalb der Adressleiste des Browsers angezeigt.
  - Die browser action wird außerhalb der Adressleiste in der Symbolleiste des Browsers angezeigt.

- **Sichtbarkeit der Schaltfläche:**
  - Die page action ist standardmäßig ausgeblendet (dieser Standardwert kann jedoch über die Eigenschaften `show_matches` und `hide_matches` des [Manifest-Schlüssels](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) geändert werden). Mit [`pageAction.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/show) und [`pageAction.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/hide) können Sie sie in bestimmten Tabs ein- oder ausblenden.
  - Die browser action wird immer angezeigt.

Verwenden Sie eine page action, wenn sich die Aktion auf die aktuelle Seite bezieht. Verwenden Sie eine browser action, wenn sich die Aktion auf den Browser als Ganzes oder auf viele Seiten bezieht. Zum Beispiel:

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
      <th scope="row">page action</th>
      <td>Diese Seite als Lesezeichen speichern</td>
      <td>Reddit erweitern</td>
      <td>Tab senden</td>
    </tr>
    <tr>
      <th scope="row">browser action</th>
      <td>Alle Lesezeichen anzeigen</td>
      <td>Werbeblockierung aktivieren</td>
      <td>Alle geöffneten Tabs synchronisieren</td>
    </tr>
  </tbody>
</table>

## Page action festlegen

Sie definieren die Eigenschaften der page action mit dem Schlüssel [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) in manifest.json:

```json
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?"
}
```

Es gibt zwei Möglichkeiten, eine page action festzulegen: mit oder ohne [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups).

- **Ohne Popup:** Wenn der Benutzer auf die Schaltfläche klickt, wird ein Ereignis an die Erweiterung gesendet. Die Erweiterung wartet mit [`pageAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked) auf dieses Ereignis:

  ```js
  browser.pageAction.onClicked.addListener(handleClick);
  ```

- **Mit Popup:** Das `click`-Ereignis wird nicht gesendet. Stattdessen erscheint das Popup, wenn der Benutzer auf die Schaltfläche klickt. Anschließend kann der Benutzer mit dem Popup interagieren. Wenn der Benutzer außerhalb des Popups klickt, wird es automatisch geschlossen. Weitere Informationen zum Erstellen und Verwalten von Popups finden Sie im Artikel [Popups](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups).

Beachten Sie, dass Ihre Erweiterung nur eine page action haben kann.

Sie können alle Eigenschaften der page action programmgesteuert über die [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction)-API ändern.

## Symbole

Sie können Bitmap-Bildformate wie PNG verwenden oder SVG-Symbole bereitstellen. Wenn Sie ein SVG-Symbol verwenden, können Sie mit einer Media Query für `prefers-color-scheme` das Symbol an helle und dunkle Themes anpassen. Weitere Informationen finden Sie unter [`"page_action"` `"default_icon"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action#default_icon) und im Beispiel [themed-icons](https://github.com/mdn/webextensions-examples/tree/main/themed-icons).

> [!NOTE]
> In dunklen Benutzeroberflächen-Themes wird implizit ein CSS-Filter auf SVG-Symbole angewendet. Dieser Filter wird in Firefox Desktop Version 152 deaktiviert ([Firefox-Bug 2016509](https://bugzil.la/2016509)). Sie können SVG-Symbole bei deaktiviertem CSS-Filter testen, indem Sie eine boolesche `about:config`-Einstellung namens `extensions.webextensions.pageActionIconDarkModeFilter.enabled` erstellen und auf `false` setzen. In Firefox Desktop Nightly ist der Filter ab Version 149 standardmäßig deaktiviert.

Wie Sie Symbole für Ihre page action erstellen, erfahren Sie unter [Ikonografie](https://acorn.firefox.com/latest/foundations/styles/iconography-QEDMXQqj) in der Dokumentation des [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das Repository [webextensions-examples](https://github.com/mdn/webextensions-examples) auf GitHub enthält folgende Beispiele:

- [chill-out](https://github.com/mdn/webextensions-examples/tree/main/chill-out) implementiert eine page action ohne Popup.
- [themed-icons](https://github.com/mdn/webextensions-examples/tree/main/themed-icons) zeigt, wie sich ein SVG-Symbol für eine page action an das helle und das dunkle Theme der Browseroberfläche anpassen kann.
