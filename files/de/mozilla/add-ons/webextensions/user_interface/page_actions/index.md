---
title: Adressleisten-Schaltfläche
slug: Mozilla/Add-ons/WebExtensions/user_interface/Page_actions
l10n:
  sourceCommit: 1ba0755482292cd52e89cf96fda34000c8e60c91
---

Häufig als [Seitenaktion](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) bezeichnet, ist diese Benutzeroberflächenoption eine Schaltfläche, die zur Adressleiste des Browsers hinzugefügt wird. Benutzer klicken auf die Schaltfläche, um mit Erweiterungen zu interagieren.

![Seitenaktions-Schaltfläche ist ein Symbol eines Hundepfotenabdrucks](address_bar_button.png)

## Seitenaktionen und Browseraktionen

Die Adressleisten-Schaltfläche (oder Seitenaktion) ist ähnlich der Toolbar-Schaltfläche (oder Browseraktion).

Die Unterschiede sind:

- **Die Position der Schaltfläche:**
  - Die Seitenaktion wird innerhalb der Adressleiste des Browsers angezeigt.
  - Die Browseraktion wird außerhalb der Adressleiste, in der Toolbar des Browsers angezeigt.

- **Die Sichtbarkeit der Schaltfläche:**
  - Die Seitenaktion ist standardmäßig verborgen (obwohl dieser Standard über die `show_matches` und `hide_matches` [Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Eigenschaften geändert werden kann), und Sie rufen [`pageAction.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/show) und [`pageAction.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/hide) auf, um sie in bestimmten Tabs anzuzeigen oder zu verbergen.
  - Die Browseraktion wird immer angezeigt.

Verwenden Sie eine Seitenaktion, wenn die Aktion sich auf die aktuelle Seite bezieht. Verwenden Sie eine Browseraktion, wenn sich die Aktion auf den gesamten Browser oder viele Seiten bezieht. Zum Beispiel:

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

## Spezifizierung der Seitenaktion

Sie definieren die Eigenschaften der Seitenaktion mit dem [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Schlüssel in der manifest.json:

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

- **Ohne ein Popup:** Wenn der Benutzer auf die Schaltfläche klickt, wird ein Ereignis an die Erweiterung gesendet, welches die Erweiterung mithilfe von [`pageAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked) abhört:

  ```js
  browser.pageAction.onClicked.addListener(handleClick);
  ```

- **Mit einem Popup:** das `click` Ereignis wird nicht gesendet. Stattdessen erscheint das Popup, wenn der Benutzer auf die Schaltfläche klickt. Der Benutzer interagiert dann mit dem Popup. Wenn der Benutzer außerhalb des Popups klickt, schließt es sich automatisch. Siehe den [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) Artikel für mehr Details zur Erstellung und Verwaltung von Popups.

Beachten Sie, dass Ihre Erweiterung nur eine Seiteaktion haben kann.

Sie können alle Eigenschaften der Seitenaktion programmatisch über die [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) API ändern.

## Symbole

Sie können Bitmap-Bildformate wie PNG verwenden oder SVG-Icons bereitstellen. Wenn Sie ein SVG-Icon verwenden, können Sie eine Medienabfrage für `prefers-color-scheme` verwenden, um das Icon für helle und dunkle Themen zu aktualisieren. Für mehr Informationen siehe [`"page_action"` `"default_icon"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action#default_icon) und das [themed-icons](https://github.com/mdn/webextensions-examples/tree/master/themed-icons) Beispiel.

> [!NOTE]
> Ein impliziter CSS-Filter wird auf SVG-Icons in dunklen UI-Themen angewendet. Dieser Filter wird in Firefox Desktop Version 152 ([Firefox Bug 2016509](https://bugzil.la/2016509)) deaktiviert. Sie können SVG-Icons mit dem deaktivierten CSS-Filter testen, indem Sie eine boolesche `about:config`-Präferenz namens `extensions.webextensions.pageActionIconDarkModeFilter.enabled` erstellen und auf `false` setzen. Der Filter ist standardmäßig in Firefox Desktop Nightly ab Version 149 deaktiviert.

Für Einzelheiten zur Erstellung von Icons für Ihre Seitenaktion siehe [Ikonographie](https://acorn.firefox.com/latest/foundations/styles/iconography-QEDMXQqj) in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das:

- [chill-out](https://github.com/mdn/webextensions-examples/tree/main/chill-out) Beispiel, welches eine Seitenaktion ohne Popup implementiert.
- [themed-icons](https://github.com/mdn/webextensions-examples/tree/master/themed-icons) Beispiel, welches zeigt, wie ein SVG-Seitenaktions-Symbol auf die hellen und dunklen Themen in der Benutzeroberfläche des Browsers reagieren kann.
