---
title: Adressleisten-Schaltfläche
slug: Mozilla/Add-ons/WebExtensions/user_interface/Page_actions
l10n:
  sourceCommit: 8a74d8feac267c1ddc37a4a8bc61e9aa8db75b12
---

Häufig als [Seitenaktionsschaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) bezeichnet, ist diese Benutzeroberflächenoption eine Schaltfläche, die der Adressleiste des Browsers hinzugefügt wird. Benutzer klicken auf die Schaltfläche, um mit Erweiterungen zu interagieren.

![Die Seitenaktionsschaltfläche ist ein Symbol eines Hundepfotenabdrucks](address_bar_button.png)

## Seitenaktionen und Browseraktionen

Die Adressleisten-Schaltfläche (oder Seitenaktion) ist der Werkzeugleistenschaltfläche (oder Browseraktion) ähnlich.

Die Unterschiede sind:

- **Position der Schaltfläche:**
  - Die Seitenaktion wird innerhalb der Adressleiste des Browsers angezeigt.
  - Die Browseraktion wird außerhalb der Adressleiste in der Browser-Werkzeugleiste angezeigt.

- **Sichtbarkeit der Schaltfläche:**
  - Die Seitenaktion ist standardmäßig ausgeblendet (obwohl dieser Standard über die Eigenschaften `show_matches` und `hide_matches` des [Manifest-Schlüssels](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) geändert werden kann), und Sie rufen [`pageAction.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/show) und [`pageAction.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/hide) auf, um sie in bestimmten Tabs anzuzeigen oder auszublenden.
  - Die Browseraktion wird immer angezeigt.

Verwenden Sie eine Seitenaktion, wenn die Aktion mit der aktuellen Seite in Zusammenhang steht. Verwenden Sie eine Browseraktion, wenn die Aktion sich auf den gesamten Browser oder viele Seiten bezieht. Zum Beispiel:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row">Typ</th>
      <th scope="col">Lesezeichenaktion</th>
      <th scope="col">Inhaltsaktion</th>
      <th scope="col">Tabs-Operation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Seitenaktion</th>
      <td>Diese Seite als Lesezeichen hinzufügen</td>
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

## Spezifizieren der Seitenaktion

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

Es gibt zwei Möglichkeiten, eine Seitenaktion zu spezifizieren: mit oder ohne ein [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups).

- **Ohne ein Popup:** Wenn der Benutzer auf die Schaltfläche klickt, wird ein Ereignis an die Erweiterung gesendet, auf das die Erweiterung mithilfe von [`pageAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked) reagiert:

  ```js
  browser.pageAction.onClicked.addListener(handleClick);
  ```

- **Mit einem Popup:** das `click`-Ereignis wird nicht gesendet. Stattdessen erscheint das Popup, wenn der Benutzer auf die Schaltfläche klickt. Der Benutzer interagiert dann mit dem Popup. Wenn der Benutzer außerhalb des Popups klickt, schließt es sich automatisch. Weitere Einzelheiten zum Erstellen und Verwalten von Popups finden Sie im [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) Artikel.

Beachten Sie, dass Ihre Erweiterung nur eine einzige Seitenaktion haben kann.

Sie können alle Eigenschaften der Seitenaktion programmatisch mit der [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) API ändern.

## Symbole

Sie können Bitmap-Bildformate wie PNG verwenden oder SVG-Symbole bereitstellen. Wenn Sie ein SVG-Symbol verwenden, können Sie eine Medienabfrage auf `prefers-color-scheme` verwenden, um das Symbol für helle und dunkle Designs zu aktualisieren. Weitere Informationen finden Sie unter [`"page_action"` `"default_icon"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action#default_icon) und im [themed-icons](https://github.com/mdn/webextensions-examples/tree/main/themed-icons) Beispiel.

> [!NOTE]
> Ein impliziter CSS-Filter wird auf SVG-Symbole in dunklen UI-Designs angewendet. Dieser Filter wird in Firefox Desktop-Version 152 ([Firefox-Fehler 2016509](https://bugzil.la/2016509)) deaktiviert. Sie können SVG-Symbole mit deaktiviertem CSS-Filter testen, indem Sie eine boolesche `about:config`-Einstellung namens `extensions.webextensions.pageActionIconDarkModeFilter.enabled` erstellen und auf `false` setzen. Der Filter ist standardmäßig ab Firefox Desktop Nightly Version 149 deaktiviert.

Einzelheiten zur Erstellung von Symbolen für Ihre Seitenaktion finden Sie unter [Ikonographie](https://acorn.firefox.com/latest/foundations/styles/iconography-QEDMXQqj) in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub umfasst das:

- [chill-out](https://github.com/mdn/webextensions-examples/tree/main/chill-out) Beispiel, das eine Seitenaktion ohne Popup implementiert.
- [themed-icons](https://github.com/mdn/webextensions-examples/tree/main/themed-icons) Beispiel, das zeigt, wie ein SVG-Seitenaktionssymbol auf die hellen und dunklen Themen in der Browser-Benutzeroberfläche reagieren kann.
