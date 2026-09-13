---
title: page_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/page_action
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Verpflichtend</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest-Version</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Eine Page Action ist ein Icon, das Ihre Erweiterung in die URL-Leiste des Browsers hinzufügt.

Ihre Erweiterung kann optional auch ein zugehöriges Popup bereitstellen, dessen Inhalt mit HTML, CSS und JavaScript spezifiziert wird.

Sie müssen diesen Schlüssel angeben, um eine Page Action in Ihre Erweiterung aufzunehmen. Wenn angegeben, können Sie den Button programmatisch mit der {{WebExtAPIRef("pageAction")}} API manipulieren.

Wenn Sie ein Popup bereitstellen, wird das Popup geöffnet, wenn der Benutzer auf das Icon klickt. Ihr JavaScript, das im Popup läuft, kann die Benutzerinteraktion verwalten. Wenn Sie kein Popup bereitstellen, wird bei einem Klick auf das Icon ein Klick-Ereignis an die [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) Ihrer Erweiterung gesendet.

Page Actions ähneln den Browser-Actions, sind jedoch mit bestimmten Webseiten und nicht mit dem gesamten Browser verknüpft. Wenn eine Aktion nur auf bestimmten Seiten relevant ist, sollten Sie eine Page Action verwenden und sie nur auf den relevanten Seiten anzeigen. Wenn eine Aktion auf alle Seiten oder den Browser selbst zutrifft, verwenden Sie eine Browser-Action.

Während Browser-Actions standardmäßig angezeigt werden, sind Page Actions standardmäßig ausgeblendet. Sie können für einen bestimmten Tab angezeigt werden, indem Sie {{WebExtAPIRef("pageAction.show()")}} aufrufen und die `id` des Tabs übergeben. Sie können dieses Standardverhalten auch mit der Eigenschaft `show_matches` ändern.

## Syntax

Der Schlüssel `page_action` ist ein Objekt, das drei optionale Eigenschaften haben kann:

- [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) {{optional_inline}} {{deprecated_inline}}
  - : `Boolean`. Standardmäßig auf `false` gesetzt.

    > [!WARNING]
    > Setzen Sie `browser_style` nicht auf wahr: Es wird in Manifest V3 nicht unterstützt, beginnend mit Firefox 118. Sehen Sie sich die [Manifest V3-Migration für `browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) an.

    In Firefox kann das Stylesheet unter `chrome://browser/content/extension.css` oder `chrome://browser/content/extension-mac.css` auf macOS eingesehen werden. Die [latest-download](https://github.com/mdn/webextensions-examples/tree/main/latest-download) Beispiel-Erweiterung verwendet `browser_style` in ihrem Popup.

- `default_icon` {{optional_inline}}
  - : `Object` oder `String`. Verwenden Sie dies, um ein Icon für die Aktion anzugeben.

    Es wird empfohlen, hier zwei Icons bereitzustellen (19×19 Pixel und 38×38 Pixel) und sie in einem Objekt mit den Eigenschaften `"19"` und `"38"` anzugeben, wie hier:

    ```json
    "default_icon": {
      "19": "geo-19.png",
      "38": "geo-38.png"
    }
    ```

    Wenn Sie dies tun, wird der Browser die passende Icon-Größe für die Pixel-Dichte des Bildschirms auswählen.

    Sie können hier auch einfach einen String angeben:

    ```json
    "default_icon": "geo.png"
    ```

    Wenn Sie dies tun, wird das Icon auf die Symbolleiste skaliert und kann unscharf erscheinen.

    Sie können ein SVG-Icon verwenden. Sie können das Icon auch an helle und dunkle Themen anpassen, indem Sie eine Medienabfrage zu `prefers-color-scheme` verwenden. Zum Beispiel:

    ```css
    #outside {
      fill: black;
    }
    #inside {
      fill: red;
    }
    @media (prefers-color-scheme: dark) {
      #outside {
        fill: white;
      }
      #inside {
        fill: black;
      }
    }
    ```

    Für weitere Informationen siehe das [themed-icons](https://github.com/mdn/webextensions-examples/tree/main/themed-icons) Beispiel.

    > [!NOTE]
    > Ein impliziter CSS-Filter wird auf SVG-Icons in dunklen UI-Themen angewendet. Dieser Filter wird in der Firefox-Desktop-Version 152 deaktiviert ([Firefox-Bug 2016509](https://bugzil.la/2016509)). Sie können SVG-Icons mit deaktiviertem CSS-Filter testen, indem Sie eine boolesche `about:config`-Präferenz mit dem Namen `extensions.webextensions.pageActionIconDarkModeFilter.enabled` erstellen und auf `false` setzen. Der Filter ist standardmäßig in Firefox Desktop Nightly ab 149 deaktiviert.

- `default_popup` {{optional_inline}}
  - : `String`. Der Pfad zu einer HTML-Datei, die die Spezifikation des Popups enthält. Die HTML-Datei kann CSS- und JavaScript-Dateien mit `<link>` und `<script>`-Elementen einbinden, ähnlich wie eine normale Webseite.

    Verwenden Sie jedoch kein `<script>` mit eingebettetem Code, da Sie sonst einen Content Security Policy-Fehler erhalten. Stattdessen muss `<script>` das `src`-Attribut verwenden, um eine separate Skriptdatei zu laden.

    Im Gegensatz zu einer normalen Webseite kann JavaScript, das im Popup läuft, auf alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen (sofern die Erweiterung die entsprechenden [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat). Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

- `default_title` {{optional_inline}}
  - : `String`. Tooltip für das Icon, das angezeigt wird, wenn der Benutzer die Maus darüber bewegt. Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

- `hide_matches` {{optional_inline}}
  - : `Array` von `MatchPattern` außer `<all_urls>`. Versteckt die Page Action standardmäßig für Seiten, deren URLs mit einem der angegebenen [Match Patterns](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) übereinstimmen.

    Beachten Sie, dass Page Actions standardmäßig immer ausgeblendet sind, es sei denn, `show_matches` ist angegeben. Daher macht es nur Sinn, diese Eigenschaft einzuschließen, wenn `show_matches` ebenfalls angegeben ist und wird die Muster in `show_matches` überschreiben.

    Betrachten Sie zum Beispiel einen Wert wie:

    ```json
    "page_action": {
      "show_matches": ["https://*.mozilla.org/*"],
      "hide_matches": ["https://developer.mozilla.org/*"]
    }
    ```

    Dies zeigt die Page Action standardmäßig für alle HTTPS-URLs unter der Domain `"mozilla.org"` an, außer für Seiten unter `"developer.mozilla.org"`.

- `show_matches` {{optional_inline}}
  - : `Array` von `MatchPattern`. Zeigt die Page Action standardmäßig für Seiten an, deren URLs mit einem der angegebenen Muster übereinstimmen. Siehe auch `hide_matches`.

- `pinned` {{optional_inline}} {{deprecated_inline}}
  - : `Boolean`. Optional. Standardmäßig auf `true` gesetzt. Steuert, ob die Page Action standardmäßig in der Adressleiste angezeigt werden soll, wenn der Benutzer die Erweiterung installiert. Diese Eigenschaft wird seit Firefox 89 nicht mehr unterstützt.

## Beispiel

```json
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  }
}
```

Eine Page Action mit nur einem Icon, angegeben in 2 verschiedenen Größen. Die Hintergrundskripte der Erweiterung können Klick-Ereignisse empfangen, wenn der Benutzer auf das Icon klickt, mit einem Code wie diesem:

```js
browser.pageAction.onClicked.addListener(handleClick);
```

```json
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html"
}
```

Eine Page Action mit einem Icon, einem Titel und einem Popup. Das Popup wird angezeigt, wenn der Benutzer auf das Icon klickt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)
- [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [Browser-Stile](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
