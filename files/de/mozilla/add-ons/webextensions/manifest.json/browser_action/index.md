---
title: browser_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_action
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
      <th scope="row">Verpflichtend</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest-Version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
"browser_action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html",
  "theme_icons": [{
    "light": "icons/geo-16-light.png",
    "dark": "icons/geo-16.png",
    "size": 16
  }, {
    "light": "icons/geo-32-light.png",
    "dark": "icons/geo-32.png",
    "size": 32
  }]
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Eine Browser-Action ist ein Button, den Ihre Erweiterung zur Symbolleiste des Browsers hinzufügt. Der Button hat ein Icon und kann optional ein Popup haben, dessen Inhalt mit HTML, CSS und JavaScript spezifiziert wird.

Dieser Schlüssel wird in Manifest V3-Erweiterungen durch [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) ersetzt.

Sie müssen diesen Schlüssel angeben, um einen Button in der Browser-Symbolleiste in Ihre Erweiterung aufzunehmen. Wenn angegeben, können Sie den Button programmatisch über die {{WebExtAPIRef("browserAction")}} API manipulieren.

Wenn Sie ein Popup bereitstellen, wird dieses geöffnet, wenn der Benutzer auf den Button klickt, und Ihr JavaScript, das im Popup läuft, kann die Interaktion des Benutzers damit verarbeiten. Wenn Sie kein Popup bereitstellen, wird bei einem Klick auf den Button ein Klickereignis an die [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) Ihrer Erweiterung gesendet.

## Syntax

Der `browser_action`-Schlüssel ist ein Objekt, das alle der folgenden Eigenschaften enthalten kann, die alle optional sind:

- [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) {{optional_inline}} {{deprecated_inline}}
  - : `Boolean`. Optional, standardmäßig `false`.

    > [!WARNING]
    > Setzen Sie `browser_style` nicht auf true: Es wird in Manifest V3, beginnend mit Firefox 118, nicht unterstützt. Siehe [Manifest V3 Migration für `browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration).

    In Firefox kann das Stylesheet unter `chrome://browser/content/extension.css` oder auf macOS unter `chrome://browser/content/extension-mac.css` angesehen werden. Beim Festlegen von Dimensionen beachten Sie bitte, dass dieses Stylesheet `box-sizing: border-box` setzt (siehe [box-sizing](/de/docs/Web/CSS/Reference/Properties/box-sizing)).

    [Browserstile](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) beschreibt die Klassen, die Sie Elementen im Popup anwenden können, um bestimmte Stile zu erhalten. Die Beispielerweiterung [latest-download](https://github.com/mdn/webextensions-examples/tree/main/latest-download) verwendet `browser_style` in ihrem Popup.

    > [!NOTE]
    > Das Setzen von `browser_style` auf `true` verhindert, dass Benutzer Text im Popup oder Seitenleisteninhalt einer Erweiterung auswählen können. Das ist normales Verhalten. Sie können Teile der Benutzeroberfläche im Browser nicht auswählen. Sie können dieses Verhalten jedoch umgehen, um Ihren Benutzern die Textauswahl auf zwei Arten zu ermöglichen:
    >
    > 1. Setzen Sie `browser_style` auf `false`.
    > 2. Verwenden Sie CSS-Styling im Body des HTML Ihres Popups oder Ihrer Seitenleiste, um die Textauswahl zu ermöglichen, indem Sie die Regel `-moz-user-select` mit dem Wert `all` oder `text` hinzufügen.

- `default_area` {{optional_inline}}
  - : `String`. Definiert den Teil des Browsers, in dem der Button initial platziert wird. Dies ist ein String, der einen von vier Werten annehmen kann:
    - `"navbar"`: der Button wird in der Haupt-Browser-Symbolleiste, neben der URL-Leiste, platziert.
    - `"menupanel"`: der Button wird in einem Popup-Panel platziert.
    - `"tabstrip"`: der Button wird in der Symbolleiste platziert, die die Browser-Tabs enthält.
    - `"personaltoolbar"`: der Button wird in der Lesezeichen-Symbolleiste platziert.

    Diese Eigenschaft wird nur in Firefox unterstützt. Sie ist optional und standardmäßig `"menupanel"`. Firefox merkt sich die `default_area`-Einstellung einer Erweiterung, auch wenn diese Erweiterung deinstalliert und anschließend wieder installiert wird. Um den Browser zu zwingen, einen neuen Wert anzuerkennen, muss die ID der Erweiterung geändert werden. Eine Erweiterung kann die Position des Buttons nach der Installation nicht ändern, aber der Benutzer kann ihn mit dem integrierten UI-Anpassungsmechanismus des Browsers verschieben.

- `default_icon` {{optional_inline}}
  - : `Object` oder `String`. Verwenden Sie dies, um ein oder mehrere Icons für die Browser-Action anzugeben. Das Icon wird standardmäßig in der Browser-Symbolleiste angezeigt. Icons werden als URLs relativ zur manifest.json-Datei angegeben.

    Sie können eine einzelne Icon-Datei angeben, indem Sie hier einen String bereitstellen:

    ```json
    "default_icon": "path/to/geo.svg"
    ```

    Um mehrere Icons in verschiedenen Größen anzugeben, geben Sie hier ein Objekt an. Der Name einer jeden Eigenschaft ist die Höhe des Icons in Pixeln und muss in eine Ganzzahl umwandelbar sein. Der Wert ist die URL. Zum Beispiel:

    ```json
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png"
    }
    ```

    Sie können nicht mehrere Icons derselben Größe angeben. Siehe [Auswahl der Icon-Größen](#auswahl_der_icon-größen) für mehr Anleitung.

- `default_popup` {{optional_inline}}
  - : `String`. Der Pfad zu einer HTML-Datei, die die Spezifikation des Popups enthält.

    Die HTML-Datei kann CSS- und JavaScript-Dateien mit `<link>`- und `<script>`-Elementen einbinden, genau wie eine normale Webseite. `<script>`-Elemente müssen jedoch ein `src`-Attribut haben, um eine Datei zu laden. Verwenden Sie kein `<script>` mit eingebettetem Code, da Sie sonst einen verwirrenden Content Violation Policy-Fehler erhalten.

    Im Gegensatz zu einer normalen Webseite kann JavaScript, das im Popup läuft, auf alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen (vorausgesetzt, die Erweiterung hat die entsprechenden [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)). Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

- `default_title` {{optional_inline}}
  - : `String`. Tooltip für den Button, der angezeigt wird, wenn der Benutzer mit der Maus darüber fährt. Wenn der Button zum Menü-Panel des Browsers hinzugefügt wird, wird dies auch unter dem App-Symbol angezeigt. Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

- `theme_icons` {{optional_inline}}
  - : `Array`. Diese Eigenschaft ermöglicht es Ihnen, verschiedene Icons für Themes anzugeben, abhängig davon, ob Firefox erkennt, dass das Theme dunklen oder hellen Text verwendet. Wenn vorhanden, ist es ein Array, das mindestens ein `ThemeIcons`-Objekt enthält. Ein ThemeIcons-Objekt enthält drei verpflichtende Eigenschaften:
    - `"dark"`
      - : Eine URL, die auf ein Icon zeigt. Dieses Icon wird angezeigt, wenn ein Theme mit dunklem Text aktiv ist (wie das Firefox Light-Theme und, wenn kein `default_icon` angegeben ist, das Standard-Theme).
    - `"light"`
      - : Eine URL, die auf ein Icon zeigt. Dieses Icon wird angezeigt, wenn ein Theme mit hellem Text aktiv ist (wie das Firefox Dark-Theme).
    - `"size"`
      - : Die Größe der beiden Icons in Pixeln.

    Icons werden als URLs relativ zur manifest.json-Datei angegeben. Sie sollten 16x16 und 32x32 (für Retina-Displays) `ThemeIcons` bereitstellen.

    > [!NOTE]
    > Alternativ können Sie ein SVG-Icon in `default_icon` angeben und eine Medienabfrage auf `prefers-color-scheme` verwenden, um das Icon für helle und dunkle Themes zu aktualisieren. Zum Beispiel:
    >
    > ```css
    > #outside {
    >   fill: black;
    > }
    > #inside {
    >   fill: red;
    > }
    > @media (prefers-color-scheme: dark) {
    >   #outside {
    >     fill: white;
    >   }
    >   #inside {
    >     fill: black;
    >   }
    > }
    > ```
    >
    > Für weitere Informationen siehe das Beispiel [themed-icons](https://github.com/mdn/webextensions-examples/tree/main/themed-icons).

## Auswahl der Icon-Größen

Das Icon der Browser-Action muss möglicherweise in verschiedenen Größen in unterschiedlichen Kontexten angezeigt werden:

- Das Icon wird in der Browser-Symbolleiste angezeigt. Ältere Versionen von Firefox unterstützten die Möglichkeit, das Icon im Menü-Panel des Browsers zu platzieren (das Panel, das geöffnet wird, wenn der Benutzer auf das "Hamburger"-Symbol klickt). In diesen Versionen von Firefox war das Icon im Menü-Panel größer als das Icon in der Symbolleiste.
- Auf einem hochdichten Display wie einem Retina-Bildschirm müssen Icons doppelt so groß sein.

Wenn der Browser kein Icon in der richtigen Größe in einer bestimmten Situation findet, wählt er die beste Übereinstimmung und skaliert es. Skalierung kann das Icon verschwommen erscheinen lassen, daher ist es wichtig, die Icon-Größen sorgfältig zu wählen.

Es gibt zwei Hauptansätze hierfür. Sie können ein einzelnes Icon als SVG-Datei bereitstellen, und es wird korrekt skaliert:

```json
"default_icon": "path/to/geo.svg"
```

Alternativ können Sie mehrere Icons in verschiedenen Größen bereitstellen, und der Browser sucht sich die beste Übereinstimmung aus.

In Firefox:

- Die Standardhöhe und -breite für Icons in der Symbolleiste beträgt 16 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).
- Die Standardhöhe und -breite für Icons im Menü-Panel beträgt 32 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

Sie können also Icons angeben, die genau passen, sowohl auf normalen als auch auf Retina-Displays, indem Sie drei Icon-Dateien bereitstellen und sie wie folgt angeben:

```json
"default_icon": {
  "16": "path/to/geo-16.png",
  "32": "path/to/geo-32.png",
  "64": "path/to/geo-64.png"
}
```

Wenn Firefox keine genaue Übereinstimmung für die gewünschte Größe findet, wählt es das kleinste spezifizierte Icon, das größer als die ideale Größe ist. Wenn alle Icons kleiner als die ideale Größe sind, wählt es das größte spezifizierte Icon.

## Beispiel

```json
"browser_action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  }
}
```

Eine Browser-Action nur mit einem Icon, angegeben in 2 verschiedenen Größen. Die Hintergrundskripte der Erweiterung können Klickereignisse empfangen, wenn der Benutzer auf das Icon klickt, mit folgendem Code:

```js
browser.browserAction.onClicked.addListener(handleClick);
```

```json
"browser_action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html"
}
```

Eine Browser-Action mit einem Icon, einem Titel und einem Popup. Das Popup wird angezeigt, wenn der Benutzer den Button klickt.

Für eine einfache, aber vollständige Erweiterung, die eine Browser-Action verwendet, sehen Sie sich den [Schritt-für-Schritt-Leitfaden](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension) an.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)
- [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [Browserstile](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
