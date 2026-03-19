---
title: browser_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_action
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
      <th scope="row">Pflichtfeld</th>
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

Eine Browser-Aktion ist ein Button, den Ihre Erweiterung zur Symbolleiste des Browsers hinzufügt. Der Button hat ein Icon und kann optional ein Popup enthalten, dessen Inhalt mithilfe von HTML, CSS und JavaScript spezifiziert wird.

Dieser Schlüssel wird in Manifest V3-Erweiterungen durch [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) ersetzt.

Sie müssen diesen Schlüssel angeben, um einen Symbolleisten-Button in Ihre Erweiterung aufzunehmen. Wenn er angegeben ist, können Sie den Button programmatisch mit der {{WebExtAPIRef("browserAction")}}-API manipulieren.

Wenn Sie ein Popup bereitstellen, wird dieses geöffnet, wenn der Benutzer auf den Button klickt, und Ihr JavaScript, das im Popup ausgeführt wird, kann mit der Interaktion des Benutzers umgehen. Wenn Sie kein Popup bereitstellen, wird ein Klick-Ereignis an die [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) Ihrer Erweiterung gesendet, wenn der Benutzer auf den Button klickt.

## Syntax

Der `browser_action`-Schlüssel ist ein Objekt, das eine der folgenden optionalen Eigenschaften haben kann:

- [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) {{optional_inline}} {{deprecated_inline}}
  - : `Boolean`. Optional, Standardwert ist `false`.

    > [!WARNING]
    > Setzen Sie `browser_style` nicht auf true: Es wird in Manifest V3 nicht unterstützt, beginnend mit Firefox 118. Siehe [Manifest V3 Migration für `browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration).

    In Firefox kann das Stylesheet unter `chrome://browser/content/extension.css` oder `chrome://browser/content/extension-mac.css` auf macOS eingesehen werden. Wenn Sie Dimensionen festlegen, beachten Sie, dass dieses Stylesheet `box-sizing: border-box` festlegt (siehe [box-sizing](/de/docs/Web/CSS/Reference/Properties/box-sizing)).

    [Browser-Stile](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) beschreibt die Klassen, die Sie auf Elemente im Popup anwenden können, um bestimmte Stile zu erhalten. Die Beispiel-Erweiterung [latest-download](https://github.com/mdn/webextensions-examples/tree/main/latest-download) verwendet `browser_style` in ihrem Popup.

    > [!NOTE]
    > Wenn Sie `browser_style` auf `true` setzen, können Benutzer keinen Text im Popup- oder Seitenleisteninhalt einer Erweiterung auswählen. Dies ist normales Verhalten. Sie können keine Teile der Benutzeroberfläche im Browser auswählen. Sie können jedoch diese Einschränkung umgehen, um Ihren Benutzern das Auswählen von Text auf zwei Arten zu ermöglichen:
    >
    > 1. Setzen Sie `browser_style` auf `false`.
    > 2. Verwenden Sie CSS-Styling auf dem `<body>` Ihrer Seitenleiste oder des Popups, um die Texauswahl zu erlauben, indem Sie die Regel `-moz-user-select` mit dem Wert `all` oder `text` hinzufügen.

- `default_area` {{optional_inline}}
  - : `String`. Definiert den Bereich des Browsers, in dem der Button zunächst platziert wird. Dies ist ein String, der einen von vier Werten annehmen kann:
    - `"navbar"`: der Button wird in der Hauptsymbolleiste des Browsers neben der URL-Leiste platziert.
    - `"menupanel"`: der Button wird in einem Popup-Panel platziert.
    - `"tabstrip"`: der Button wird in der Symbolleiste platziert, die die Browsing-Tabs enthält.
    - `"personaltoolbar"`: der Button wird in der Lesezeichensymbolleiste platziert.

    Diese Eigenschaft wird nur in Firefox unterstützt. Sie ist optional und der Standardwert ist `"menupanel"`. Firefox merkt sich die `default_area`-Einstellung für eine Erweiterung, auch wenn diese deinstalliert und anschließend neu installiert wird. Um den Browser zu zwingen, einen neuen Wert zu akzeptieren, muss die ID der Erweiterung geändert werden. Eine Erweiterung kann den Standort des Buttons nach der Installation nicht ändern, aber der Benutzer kann ihn mit dem integrierten UI-Anpassungsmechanismus des Browsers verschieben.

- `default_icon` {{optional_inline}}
  - : `Object` oder `String`. Verwenden Sie dies, um ein oder mehrere Icons für die Browser-Aktion anzugeben. Das Icon wird standardmäßig in der Browser-Symbolleiste angezeigt. Icons werden als relative URLs zur manifest.json-Datei selbst angegeben.

    Sie können eine einzige Icon-Datei angeben, indem Sie hier einen String angeben:

    ```json
    "default_icon": "path/to/geo.svg"
    ```

    Um mehrere Icons in verschiedenen Größen anzugeben, geben Sie hier ein Objekt an. Der Name jeder Eigenschaft ist die Höhe des Icons in Pixel und muss in eine Ganzzahl umwandelbar sein. Der Wert ist die URL. Zum Beispiel:

    ```json
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png"
    }
    ```

    Sie können nicht mehrere Icons in den gleichen Größen angeben. Weitere Anleitungen finden Sie unter [Auswahl von Icon-Größen](#auswahl_von_icon-größen).

- `default_popup` {{optional_inline}}
  - : `String`. Der Pfad zu einer HTML-Datei, die die Spezifikation des Popups enthält.

    Die HTML-Datei kann CSS- und JavaScript-Dateien mit `<link>`- und `<script>`-Elementen einbinden, genau wie eine normale Webseite. `<script>`-Elemente müssen jedoch ein `src`-Attribut haben, um eine Datei zu laden. Verwenden Sie kein `<script>` mit eingebettetem Code, da Sie sonst einen verwirrenden Fehler zur Inhaltsverletzungspolitik erhalten.

    Anders als bei einer normalen Webseite kann auf die im Popup laufende JavaScript auf alle [WebExtension APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugegriffen werden (vorausgesetzt, die Erweiterung hat die entsprechenden [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)). Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

- `default_title` {{optional_inline}}
  - : `String`. Tooltip für den Button, der angezeigt wird, wenn der Benutzer seine Maus darüber bewegt. Wenn der Button in das Menüpanel des Browsers hinzugefügt wird, wird er auch unter dem App-Icon angezeigt. Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

- `theme_icons` {{optional_inline}}
  - : `Array`. Diese Eigenschaft ermöglicht es Ihnen, verschiedene Icons für Themes abhängig davon anzugeben, ob Firefox erkennt, dass das Theme dunklen oder hellen Text verwendet. Wenn vorhanden, ist es ein Array, das mindestens ein `ThemeIcons`-Objekt enthält. Ein ThemeIcons-Objekt enthält drei obligatorische Eigenschaften:
    - `"dark"`
      - : Eine URL, die auf ein Icon zeigt. Dieses Icon wird angezeigt, wenn ein Theme mit dunklem Text aktiv ist (wie das Firefox-Leicht-Theme und, wenn kein `default_icon` angegeben ist, das Standard-Theme).
    - `"light"`
      - : Eine URL, die auf ein Icon zeigt. Dieses Icon wird angezeigt, wenn ein Theme mit hellem Text aktiv ist (wie das Firefox-Dunkel-Theme).
    - `"size"`
      - : Die Größe der beiden Icons in Pixel.

    Icons werden als relative URLs zur manifest.json-Datei angegeben. Sie sollten 16x16 und 32x32 (für Retina-Display) `ThemeIcons` bereitstellen.

    > [!NOTE]
    > Alternativ können Sie ein SVG-Icon in `default_icon` angeben und eine Medienabfrage auf `prefers-color-scheme` verwenden, um das Icon für helle und dunkle Themes zu aktualisieren. Zum Beispiel:
    >
    > ```html
    > <style>
    >   #outside {
    >     fill: black;
    >   }
    >   #inside {
    >     fill: red;
    >   }
    >   @media (prefers-color-scheme: dark) {
    >     #outside {
    >       fill: white;
    >     }
    >     #inside {
    >       fill: black;
    >     }
    >   }
    > </style>
    > ```
    >
    > Weitere Informationen finden Sie im Beispiel [themed-icons](https://github.com/mdn/webextensions-examples/tree/master/themed-icons).

## Auswahl von Icon-Größen

Das Icon der Browser-Aktion kann in verschiedenen Kontexten in verschiedenen Größen angezeigt werden müssen:

- Das Icon wird in der Symbolleiste des Browsers angezeigt. Ältere Versionen von Firefox unterstützten die Option, das Icon im Menüpanel des Browsers zu platzieren (das Panel, das sich öffnet, wenn der Benutzer das "Hamburger"-Icon anklickt). In diesen Versionen von Firefox war das Icon im Menüpanel größer als das Icon in der Symbolleiste.
- Auf einem hochauflösenden Display wie einem Retina-Bildschirm müssen Icons doppelt so groß sein.

Wenn der Browser kein Icon der richtigen Größe in einer bestimmten Situation finden kann, wählt er den besten Match und skaliert es. Durch das Skalieren kann das Icon verschwommen erscheinen, daher ist es wichtig, die Icon-Größen sorgfältig zu wählen.

Es gibt zwei Hauptansätze dafür. Sie können ein einziges Icon als SVG-Datei bereitstellen, und es wird korrekt skaliert:

```json
"default_icon": "path/to/geo.svg"
```

Alternativ können Sie mehrere Icons in verschiedenen Größen bereitstellen, und der Browser wählt den besten Match aus.

In Firefox:

- Die Standardhöhe und -breite für Icons in der Symbolleiste beträgt 16 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).
- Die Standardhöhe und -breite für Icons im Menüpanel beträgt 32 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

Sie können also Icons angeben, die exakt übereinstimmen, sowohl auf normalen als auch auf Retina-Displays, indem Sie drei Icon-Dateien bereitstellen und sie wie folgt angeben:

```json
"default_icon": {
  "16": "path/to/geo-16.png",
  "32": "path/to/geo-32.png",
  "64": "path/to/geo-64.png"
}
```

Wenn Firefox keine genaue Übereinstimmung für die gewünschte Größe finden kann, wählt es das kleinste angegebene Icon, das größer als die ideale Größe ist. Wenn alle Icons kleiner als die ideale Größe sind, wählt es das größte angegebene Icon.

## Beispiel

```json
"browser_action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  }
}
```

Eine Browser-Aktion mit nur einem Icon, das in 2 verschiedenen Größen spezifiziert ist. Die Hintergrundskripte der Erweiterung können Klick-Ereignisse empfangen, wenn der Benutzer auf das Icon klickt, mittels Code wie diesem:

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

Eine Browser-Aktion mit einem Icon, einem Titel und einem Popup. Das Popup wird angezeigt, wenn der Benutzer auf den Button klickt.

Für eine einfache, aber vollständige Erweiterung, die eine Browser-Aktion verwendet, siehe das [Walkthrough-Tutorial](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)
- [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [Browser-Stile](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
