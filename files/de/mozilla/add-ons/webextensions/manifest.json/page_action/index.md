---
title: page_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/page_action
l10n:
  sourceCommit: 1ba0755482292cd52e89cf96fda34000c8e60c91
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

Eine Page-Aktion ist ein Icon, das Ihre Erweiterung in der URL-Leiste des Browsers hinzufügt.

Ihre Erweiterung kann optional auch ein zugehöriges Popup bereitstellen, dessen Inhalt mit HTML, CSS und JavaScript angegeben wird.

Sie müssen diesen Schlüssel angeben, um eine Page-Aktion in Ihre Erweiterung aufzunehmen. Wenn sie angegeben ist, können Sie den Button programmatisch mit der {{WebExtAPIRef("pageAction")}} API manipulieren.

Wenn Sie ein Popup bereitstellen, wird dieses geöffnet, wenn der Benutzer auf das Icon klickt, und Ihr JavaScript, das im Popup ausgeführt wird, kann die Interaktion des Benutzers damit behandeln. Wenn Sie kein Popup bereitstellen, wird ein Klick-Ereignis an die [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) Ihrer Erweiterung gesendet, wenn der Benutzer auf das Icon klickt.

Page-Aktionen ähneln Browser-Aktionen, außer dass sie mit bestimmten Webseiten assoziiert sind und nicht mit dem Browser als Ganzes. Wenn eine Aktion nur auf bestimmten Seiten relevant ist, sollten Sie eine Page-Aktion verwenden und sie nur auf relevanten Seiten anzeigen. Wenn eine Aktion für alle Seiten oder den Browser selbst relevant ist, verwenden Sie eine Browser-Aktion.

Während Browser-Aktionen standardmäßig angezeigt werden, sind Page-Aktionen standardmäßig verborgen. Sie können für einen bestimmten Tab angezeigt werden, indem Sie {{WebExtAPIRef("pageAction.show()")}} aufrufen und die `id` des Tabs übergeben. Sie können dieses Standardverhalten auch mit der Eigenschaft `show_matches` ändern.

## Syntax

Der Schlüssel `page_action` ist ein Objekt, das drei optionale Eigenschaften haben kann:

- [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) {{optional_inline}} {{deprecated_inline}}
  - : `Boolean`. Standardwert ist `false`.

    > [!WARNING]
    > Setzen Sie `browser_style` nicht auf true: Es wird ab Manifest V3 nicht unterstützt, beginnend mit Firefox 118. Siehe [Manifest V3 Migration für `browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration).

    In Firefox kann das Stylesheet bei `chrome://browser/content/extension.css` oder `chrome://browser/content/extension-mac.css` auf macOS eingesehen werden. Die Beispielerweiterung [latest-download](https://github.com/mdn/webextensions-examples/tree/main/latest-download) verwendet `browser_style` in ihrem Popup.

- `default_icon` {{optional_inline}}
  - : `Object` oder `String`. Verwenden Sie dies, um ein Icon für die Aktion anzugeben.

    Es wird empfohlen, hier zwei Icons bereitzustellen (19×19 Pixel und 38×38 Pixel) und sie in einem Objekt mit den Eigenschaften `"19"` und `"38"` anzugeben, wie folgt:

    ```json
    "default_icon": {
      "19": "geo-19.png",
      "38": "geo-38.png"
    }
    ```

    Wenn Sie dies tun, wählt der Browser das passende Größen-Icon für die Pixeldichte des Bildschirms.

    Sie können hier auch nur einen String angeben:

    ```json
    "default_icon": "geo.png"
    ```

    Wenn Sie dies tun, wird das Icon skaliert, um in die Toolbar zu passen, und könnte unscharf wirken.

    Sie können ein SVG-Icon verwenden. Zudem kann das Icon mit Hilfe einer Media Query zu `prefers-color-scheme` an helle und dunkle Themen angepasst werden. Zum Beispiel:

    ```html
    <style>
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
    </style>
    ```

    Weitere Informationen finden Sie im Beispiel [themed-icons](https://github.com/mdn/webextensions-examples/tree/master/themed-icons).

    > [!NOTE]
    > Ein implizierter CSS-Filter wird auf SVG-Icons in dunklen UI-Themen angewendet. Dieser Filter wird in Firefox Desktop Version 152 deaktiviert ([Firefox Bug 2016509](https://bugzil.la/2016509)). Sie können SVG-Icons mit deaktiviertem CSS-Filter testen, indem Sie eine boolesche `about:config`-Einstellung namens `extensions.webextensions.pageActionIconDarkModeFilter.enabled` erstellen und sie auf `false` setzen. Der Filter ist standardmäßig in Firefox Desktop Nightly ab 149 deaktiviert.

- `default_popup` {{optional_inline}}
  - : `String`. Der Pfad zu einer HTML-Datei, die die Spezifikation des Popups enthält. Die HTML-Datei kann CSS- und JavaScript-Dateien mit `<link>` und `<script>`-Elementen wie eine normale Webseite einbinden.

    Verwenden Sie jedoch kein `<script>` mit eingebettetem Code, da Sie sonst einen Content Violation Policy-Fehler erhalten. Stattdessen muss `<script>` das `src` Attribut verwenden, um eine separate Skriptdatei zu laden.

    Anders als bei einer normalen Webseite kann das in einem Popup ausgeführte JavaScript auf alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen (vorausgesetzt, die Erweiterung hat die entsprechenden [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)). Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

- `default_title` {{optional_inline}}
  - : `String`. Tooltip für das Icon, angezeigt, wenn der Benutzer mit der Maus darüber fährt. Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

- `hide_matches` {{optional_inline}}
  - : `Array` von `MatchPattern` außer `<all_urls>`. Verbirgt die Page-Aktion standardmäßig für Seiten, deren URLs mit einem der angegebenen [Match Patterns](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) übereinstimmen.

    Beachten Sie, dass Page-Aktionen standardmäßig immer verborgen sind, es sei denn `show_matches` wird angegeben. Daher macht es nur Sinn, diese Eigenschaft zu verwenden, wenn auch `show_matches` angegeben wird, und überschreibt die Muster in `show_matches`.

    Zum Beispiel kann ein Wert wie dieser aussehen:

    ```json
    "page_action": {
      "show_matches": ["https://*.mozilla.org/*"],
      "hide_matches": ["https://developer.mozilla.org/*"]
    }
    ```

    Dies zeigt die Page-Aktion standardmäßig für alle HTTPS-URLs unter der Domain `"mozilla.org"`, außer für Seiten unter `"developer.mozilla.org"`.

- `show_matches` {{optional_inline}}
  - : `Array` von `MatchPattern`. Zeigt die Page-Aktion standardmäßig für Seiten, deren URLs mit einem der angegebenen Muster übereinstimmen. Siehe auch `hide_matches`.

- `pinned` {{optional_inline}} {{deprecated_inline}}
  - : `Boolean`. Optional. Standardwert ist `true`. Steuert, ob die Page-Aktion standardmäßig in der Adressleiste erscheinen soll, wenn der Benutzer die Erweiterung installiert. Diese Eigenschaft wird seit Firefox 89 nicht mehr unterstützt.

## Beispiel

```json
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  }
}
```

Eine Page-Aktion mit nur einem Icon, angegeben in 2 verschiedenen Größen. Die Hintergrundskripte der Erweiterung können Klick-Ereignisse empfangen, wenn der Benutzer auf das Icon klickt, mit Code wie diesem:

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

Eine Page-Aktion mit einem Icon, einem Titel und einem Popup. Das Popup wird angezeigt, wenn der Benutzer auf das Icon klickt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)
- [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [Browser-Stile](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
