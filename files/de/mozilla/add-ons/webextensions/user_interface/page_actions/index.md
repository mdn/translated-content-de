---
title: Adressleistenschaltfläche
slug: Mozilla/Add-ons/WebExtensions/user_interface/Page_actions
l10n:
  sourceCommit: 17f2455db3b25d116e40b1f22dab83b911139f2b
---

Häufig als [Page Action](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) bezeichnet, ist diese Benutzeroberflächenoption eine Schaltfläche, die zur Adressleiste des Browsers hinzugefügt wird. Benutzer klicken auf die Schaltfläche, um mit Erweiterungen zu interagieren.

![Page Action Schaltfläche ist ein Icon eines Hundepfotenabdrucks](address_bar_button.png)

## Page Actions und Browser Actions

Die Adressleistenschaltfläche (oder Page Action) ist der Symbolleistenschaltfläche (oder Browser Action) ähnlich.

Die Unterschiede sind:

- **Der Standort der Schaltfläche:**
  - Die Page Action wird innerhalb der Adressleiste des Browsers angezeigt.
  - Die Browser Action wird außerhalb der Adressleiste in der Browsersymbolleiste angezeigt.

- **Die Sichtbarkeit der Schaltfläche:**
  - Die Page Action ist standardmäßig versteckt (obwohl dieser Standard durch die Eigenschaften `show_matches` und `hide_matches` des [Manifest-Schlüssels](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) geändert werden kann) und Sie rufen [`pageAction.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/show) und [`pageAction.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/hide) auf, um sie in bestimmten Tabs anzuzeigen oder zu verbergen.
  - Die Browser Action wird immer angezeigt.

Verwenden Sie eine Page Action, wenn die Aktion sich auf die aktuelle Seite bezieht. Verwenden Sie eine Browser Action, wenn sich die Aktion auf den gesamten Browser oder auf viele Seiten bezieht. Zum Beispiel:

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
      <td>Werbeblockierung aktivieren</td>
      <td>Alle offenen Tabs synchronisieren</td>
    </tr>
  </tbody>
</table>

## Festlegen der Page Action

Sie definieren die Eigenschaften der Page Action mithilfe des Schlüssels [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) in manifest.json:

```json
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?"
}
```

Es gibt zwei Möglichkeiten, eine Page Action zu spezifizieren: mit oder ohne ein [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups).

- **Ohne Popup:** Wenn der Benutzer auf die Schaltfläche klickt, wird ein Ereignis an die Erweiterung gesendet, das die Erweiterung mithilfe von [`pageAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked) überwacht:

  ```js
  browser.pageAction.onClicked.addListener(handleClick);
  ```

- **Mit Popup:** Das `click`-Ereignis wird nicht gesendet. Stattdessen erscheint das Popup, wenn der Benutzer auf die Schaltfläche klickt. Der Benutzer interagiert dann mit dem Popup. Wenn der Benutzer außerhalb des Popups klickt, schließt es sich automatisch. Weitere Informationen zum Erstellen und Verwalten von Popups finden Sie im Artikel über [Popups](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups).

Beachten Sie, dass Ihre Erweiterung nur eine Page Action haben kann.

Sie können alle Eigenschaften der Page Action programmgesteuert mit der [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) API ändern.

## Icons

Sie können Bitmap-Bildformate wie PNG verwenden oder SVG-Icons bereitstellen. Wenn Sie ein SVG-Icon verwenden, können Sie eine Media-Query für `prefers-color-scheme` nutzen, um das Icon für helle und dunkle Themes zu aktualisieren. Weitere Informationen finden Sie unter [`"page_action"` `"default_icon"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action#default_icon) und das Beispiel [themed-icons](https://github.com/mdn/webextensions-examples/tree/main/themed-icons).

> [!NOTE]
> Ein implizierter CSS-Filter wird auf SVG-Icons in dunklen UI-Themes angewendet. Dieser Filter wird in der Firefox-Desktop-Version 152 ([Firefox-Bug 2016509](https://bugzil.la/2016509)) deaktiviert. Sie können SVG-Icons mit deaktiviertem CSS-Filter testen, indem Sie eine boolesche `about:config`-Präferenz namens `extensions.webextensions.pageActionIconDarkModeFilter.enabled` erstellen und auf `false` setzen. Der Filter ist standardmäßig in Firefox Desktop Nightly ab Version 149 deaktiviert.

Informationen zum Erstellen von Icons, die mit Ihrer Page Action verwendet werden, finden Sie unter [Iconographie](https://acorn.firefox.com/latest/foundations/styles/iconography-QEDMXQqj) in der Dokumentation des [Acorn Design Systems](https://acorn.firefox.com/latest).

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält:

- das [chill-out](https://github.com/mdn/webextensions-examples/tree/main/chill-out) Beispiel, das eine Page Action ohne Popup implementiert.
- das [themed-icons](https://github.com/mdn/webextensions-examples/tree/main/themed-icons) Beispiel, das zeigt, wie ein SVG-Page-Action-Icon auf die hellen und dunklen Themes in der Benutzeroberfläche des Browsers reagieren kann.
