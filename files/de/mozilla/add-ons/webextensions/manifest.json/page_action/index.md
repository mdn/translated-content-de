---
title: page_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/page_action
l10n:
  sourceCommit: 8a74d8feac267c1ddc37a4a8bc61e9aa8db75b12
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Erforderlich</th>
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

Eine Page-Action ist ein Symbol, das Ihre Erweiterung in der URL-Leiste des Browsers hinzufügt.

Ihre Erweiterung kann optional auch ein zugehöriges Popup bereitstellen, dessen Inhalt mit HTML, CSS und JavaScript spezifiziert wird.

Sie müssen diesen Schlüssel angeben, um eine Page-Action in Ihre Erweiterung einzubinden. Wenn angegeben, können Sie den Button programmgesteuert mithilfe der {{WebExtAPIRef("pageAction")}} API manipulieren.

Wenn Sie ein Popup bereitstellen, wird das Popup geöffnet, wenn der Benutzer auf das Symbol klickt, und Ihr JavaScript, das im Popup ausgeführt wird, kann mit der Benutzerinteraktion umgehen. Wenn Sie kein Popup bereitstellen, wird ein Klickereignis an die [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) Ihrer Erweiterung gesendet, wenn der Benutzer auf das Symbol klickt.

Page-Actions sind ähnlich wie Browser-Actions, außer dass sie mit bestimmten Webseiten und nicht mit dem gesamten Browser verbunden sind. Wenn eine Aktion nur auf bestimmten Seiten relevant ist, sollten Sie eine Page-Action verwenden und sie nur auf relevanten Seiten anzeigen. Wenn eine Aktion für alle Seiten oder für den Browser selbst relevant ist, verwenden Sie eine Browser-Action.

Während Browser-Actions standardmäßig angezeigt werden, sind Page-Actions standardmäßig ausgeblendet. Sie können für einen bestimmten Tab durch den Aufruf von {{WebExtAPIRef("pageAction.show()")}} angezeigt werden, indem die Tab-`id` übergeben wird. Sie können dieses Standardverhalten auch über die `show_matches` Eigenschaft ändern.

## Syntax

Der `page_action` Schlüssel ist ein Objekt, das beliebige der drei optionalen Eigenschaften haben kann:

- [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) {{optional_inline}} {{deprecated_inline}}
  - : `Boolean`. Standardmäßig `false`.

    > [!WARNING]
    > Setzen Sie `browser_style` nicht auf true: Es wird ab Manifest V3, beginnend mit Firefox 118, nicht unterstützt. Siehe [Manifest V3 Migration für `browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration).

    In Firefox kann das Stylesheet unter `chrome://browser/content/extension.css` oder `chrome://browser/content/extension-mac.css` auf macOS eingesehen werden. Die [latest-download](https://github.com/mdn/webextensions-examples/tree/main/latest-download) Beispiel-Erweiterung verwendet `browser_style` in ihrem Popup.

- `default_icon` {{optional_inline}}
  - : `Object` oder `String`. Verwenden Sie dies, um ein Symbol für die Aktion anzugeben.

    Es wird empfohlen, hier zwei Symbole bereitzustellen (19×19 Pixel und 38×38 Pixel) und sie in einem Objekt mit den Eigenschaften `"19"` und `"38"` anzugeben, wie folgt:

    ```json
    "default_icon": {
      "19": "geo-19.png",
      "38": "geo-38.png"
    }
    ```

    Wenn Sie dies tun, wählt der Browser die richtige Symbolgröße für die Pixeldichte des Bildschirms.

    Sie können auch einfach einen String bereitstellen:

    ```json
    "default_icon": "geo.png"
    ```

    Wenn Sie dies tun, wird das Symbol skaliert, um in die Symbolleiste zu passen, und kann verschwommen erscheinen.

    Sie können ein SVG-Symbol verwenden. Sie können auch das Symbol an helle und dunkle Themes anpassen, indem Sie eine Medienabfrage auf `prefers-color-scheme` verwenden. Zum Beispiel:

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

    Weitere Informationen finden Sie im [themed-icons](https://github.com/mdn/webextensions-examples/tree/main/themed-icons) Beispiel.

    > [!NOTE]
    > Auf SVG-Symbole in dunklen UI-Themen wird ein impliziter CSS-Filter angewendet. Dieser Filter wird in Firefox Desktop Version 152 ([Firefox Bug 2016509](https://bugzil.la/2016509)) deaktiviert. Sie können SVG-Symbole mit deaktiviertem CSS-Filter testen, indem Sie eine boolesche `about:config`-Präferenz namens `extensions.webextensions.pageActionIconDarkModeFilter.enabled` erstellen und auf `false` setzen. Der Filter ist standardmäßig in Firefox Desktop Nightly ab 149 deaktiviert.

- `default_popup` {{optional_inline}}
  - : `String`. Der Pfad zu einer HTML-Datei, die die Spezifikation des Popups enthält. Die HTML-Datei kann CSS- und JavaScript-Dateien mittels `<link>` und `<script>` Elemente einbinden, genau wie eine normale Webseite.

    Setzen Sie jedoch keine eingebetteten Codes in `<script>` ein, da Sie sonst einen Content Violation Policy-Fehler erhalten. Stattdessen muss `<script>` das `src` Attribut verwenden, um eine separate Skriptdatei zu laden.

    Im Gegensatz zu einer normalen Webseite kann auf JavaScript, das im Popup ausgeführt wird, auf alle [WebExtension APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugegriffen werden (vorausgesetzt, die Erweiterung hat die entsprechenden [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)). Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

- `default_title` {{optional_inline}}
  - : `String`. Tooltip für das Symbol, angezeigt, wenn der Benutzer den Mauszeiger darüber bewegt. Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

- `hide_matches` {{optional_inline}}
  - : `Array` von `MatchPattern` außer `<all_urls>`. Versteckt die Page-Action standardmäßig für Seiten, deren URLs mit einem der angegebenen [Match-Patterns](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) übereinstimmen.

    Beachten Sie, dass Page-Actions standardmäßig immer versteckt sind, es sei denn, `show_matches` wird angegeben. Daher macht es nur Sinn, diese Eigenschaft einzuschließen, wenn auch `show_matches` angegeben wird, und sie wird die Muster in `show_matches` überschreiben.

    Beispielsweise könnte ein Wert wie folgt aussehen:

    ```json
    "page_action": {
      "show_matches": ["https://*.mozilla.org/*"],
      "hide_matches": ["https://developer.mozilla.org/*"]
    }
    ```

    Dies zeigt die Page-Action standardmäßig für alle HTTPS-URLs unter der Domain `"mozilla.org"` an, außer für Seiten unter `"developer.mozilla.org"`.

- `show_matches` {{optional_inline}}
  - : `Array` von `MatchPattern`. Zeigt die Page-Action standardmäßig für Seiten an, deren URLs mit einem der angegebenen Muster übereinstimmen. Siehe auch `hide_matches`.

- `pinned` {{optional_inline}} {{deprecated_inline}}
  - : `Boolean`. Optional. Standardwert ist `true`. Steuert, ob die Page-Action standardmäßig in der Adressleiste erscheinen sollte, wenn der Benutzer die Erweiterung installiert. Diese Eigenschaft wird seit Firefox 89 nicht mehr unterstützt.

## Beispiel

```json
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  }
}
```

Eine Page-Action mit nur einem Symbol, das in 2 verschiedenen Größen angegeben ist. Die Hintergrundskripte der Erweiterung können Klickereignisse empfangen, wenn der Benutzer auf das Symbol klickt, mit einem Code wie diesem:

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

Eine Page-Action mit einem Symbol, einem Titel und einem Popup. Das Popup wird angezeigt, wenn der Benutzer auf das Symbol klickt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)
- [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [Browser Styles](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
