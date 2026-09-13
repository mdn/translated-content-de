---
title: action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/action
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
      <th scope="row">Erforderlich</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifestversion</th>
      <td>3 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
"action": {
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

Eine Action ist ein Button, den Ihre Erweiterung zur Symbolleiste des Browsers hinzufügt. Der Button hat ein Symbol und kann optional ein Popup haben, dessen Inhalt mit HTML, CSS und JavaScript angegeben wird.

Dieser Schlüssel ersetzt [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) in Manifest V3-Erweiterungen.

Sie müssen diesen Schlüssel angeben, um einen Browsersymbolleisten-Button in Ihre Erweiterung aufzunehmen. Bei Angabe können Sie den Button programmatisch mit der {{WebExtAPIRef("action")}}-API manipulieren.

Wenn Sie ein Popup bereitstellen, wird das Popup geöffnet, wenn der Benutzer auf den Button klickt, und Ihr JavaScript, das im Popup ausgeführt wird, kann die Interaktion des Benutzers damit verarbeiten. Wenn Sie kein Popup bereitstellen, wird ein Click-Event an die [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) Ihrer Erweiterung gesendet, wenn der Benutzer auf den Button klickt.

## Syntax

Der `action`-Schlüssel ist ein Objekt, das beliebige dieser Eigenschaften haben kann, alle optional:

- [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) {{optional_inline}} {{deprecated_inline}}
  - : `Boolean`. Optional, standardmäßig `false`.
    > [!WARNING]
    > Setzen Sie `browser_style` nicht auf true: Die Unterstützung dafür wurde in Manifest V3 in Firefox 118 entfernt. Siehe [Manifest V3 Migration für `browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration).
- `default_area` {{optional_inline}}
  - : `String`. Definiert den Teil des Browsers, in dem der Button zunächst platziert wird. Dies ist ein String, der einen von vier Werten annehmen kann:
    - `"navbar"`: der Button wird in der Hauptsymbolleiste des Browsers neben der URL-Leiste platziert.
    - `"menupanel"`: der Button wird in einem Popup-Panel platziert.
    - `"tabstrip"`: der Button wird in der Symbolleiste platziert, die die Browser-Tabs enthält.
    - `"personaltoolbar"`: der Button wird in der Lesezeichen-Symbolleiste platziert.

    Diese Eigenschaft wird nur in Firefox unterstützt. Diese Eigenschaft ist optional und wird standardmäßig auf `"menupanel"` gesetzt. Firefox merkt sich die `default_area`-Einstellung für eine Erweiterung, auch wenn diese Erweiterung deinstalliert und anschließend neu installiert wird. Um den Browser zu zwingen, einen neuen Wert für `default_area` anzuerkennen, muss die ID der Erweiterung geändert werden. Eine Erweiterung kann den Standort des Buttons nicht ändern, nachdem sie installiert wurde, aber der Benutzer kann den Button möglicherweise mithilfe des integrierten Mechanismus zur Anpassung der Benutzeroberfläche des Browsers verschieben.

- `default_icon` {{optional_inline}}
  - : `Object` oder `String`. Verwenden Sie dies, um eines oder mehrere Symbole für die Aktion anzugeben. Das Symbol wird standardmäßig in der Browsersymbolleiste angezeigt. Symbole werden als URLs relativ zur manifest.json-Datei angegeben.

    Sie können eine einzelne Symboldatei angeben, indem Sie hier einen String angeben:

    ```json
    "default_icon": "path/to/geo.svg"
    ```

    Um mehrere Symbole in verschiedenen Größen anzugeben, geben Sie hier ein Objekt an. Der Name jeder Eigenschaft ist die Höhe des Symbols in Pixel, und muss in einen Integer umwandelbar sein. Der Wert ist die URL. Zum Beispiel:

    ```json
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png"
    }
    ```

    Sie können nicht mehrere Symbole derselben Größe angeben. Siehe [Auswahl der Symbolgrößen](#auswahl_der_symbolgrößen) für weitere Leitlinien dazu.

- `default_popup` {{optional_inline}}
  - : `String`. Der Pfad zu einer HTML-Datei, die die Spezifikation des Popups enthält. Die HTML-Datei kann CSS- und JavaScript-Dateien mithilfe von `<link>`- und `<script>`-Elementen einbeziehen, genau wie eine normale Webseite. Darin muss jedoch `<script>` ein `src`-Attribut haben, um eine Datei zu laden. Verwenden Sie kein `<script>` mit eingebettetem Code, da Sie sonst einen verwirrenden Content-Security-Policy-Fehler erhalten. Anders als bei einer normalen Webseite kann auf im Popup ausgeführtes JavaScript auf alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugegriffen werden (natürlich vorausgesetzt, die Erweiterung hat die entsprechenden [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)). Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).
- `default_title` {{optional_inline}}
  - : `String`. Tooltip für den Button, angezeigt, wenn der Benutzer die Maus darüber bewegt. Wenn der Button zur Menüleiste des Browsers hinzugefügt wird, wird dieser auch unter dem App-Symbol angezeigt. Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).
- `theme_icons` {{optional_inline}}
  - : `Array`. Diese Eigenschaft erlaubt es Ihnen, je nach Erkennung eines dunklen oder hellen Textes durch Firefox unterschiedliche Symbole für Themen anzugeben. Wenn diese Eigenschaft vorhanden ist, ist sie ein Array, das mindestens ein `ThemeIcons`-Objekt enthält. Ein `ThemeIcons`-Objekt enthält drei verpflichtende Eigenschaften:
    - `"dark"`
      - : Eine URL, die auf ein Symbol verweist. Dieses Symbol wird angezeigt, wenn ein Thema mit dunklem Text aktiv ist (wie z.B. das Firefox Light Theme und, wenn kein `default_icon` angegeben ist, das Default Theme).
    - `"light"`
      - : Eine URL, die auf ein Symbol verweist. Dieses Symbol wird angezeigt, wenn ein Thema mit hellem Text aktiv ist (wie z.B. das Firefox Dark Theme).
    - `"size"`
      - : Die Größe der beiden Symbole in Pixeln.

    Symbole werden als URLs relativ zur manifest.json-Datei angegeben. Sie sollten 16x16 und 32x32 (für Retina-Displays) `ThemeIcons` bereitstellen.

    > [!NOTE]
    > Alternativ können Sie ein SVG-Symbol in `default_icon` angeben und eine Medienabfrage zu `prefers-color-scheme` verwenden, um das Symbol für helle und dunkle Themen zu aktualisieren. Zum Beispiel:
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
    > Für weitere Informationen siehe das [Beispiel für themenbasierte Symbole](https://github.com/mdn/webextensions-examples/tree/main/themed-icons).

## Auswahl der Symbolgrößen

Das Symbol der Aktion muss möglicherweise in verschiedenen Kontexten in verschiedenen Größen angezeigt werden:

- Das Symbol wird in der Browsersymbolleiste angezeigt. Ältere Versionen von Firefox unterstützten die Möglichkeit, das Symbol im Menübereich des Browsers zu platzieren (das Panel, das sich öffnet, wenn der Benutzer auf das "Hamburger"-Symbol klickt). In diesen Firefox-Versionen war das Menübereich-Symbol größer als das Symbol in der Symbolleiste.
- Auf einem hochauflösenden Bildschirm wie einem Retina-Display müssen Symbole doppelt so groß sein.

Wenn der Browser kein Symbol der richtigen Größe in einer bestimmten Situation findet, wählt er die beste Übereinstimmung und skaliert es. Durch das Skalieren kann das Symbol verschwommen erscheinen. Daher ist es wichtig, die Symbolgrößen sorgfältig auszuwählen.

Es gibt zwei Hauptansätze dafür. Sie können ein einzelnes Symbol als SVG-Datei bereitstellen, und es wird korrekt skaliert:

```json
"default_icon": "path/to/geo.svg"
```

Alternativ können Sie mehrere Symbole in verschiedenen Größen bereitstellen, und der Browser wird die beste Übereinstimmung wählen.

In Firefox:

- Die Standardhöhe und -breite für Symbole in der Toolbar beträgt 16 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).
- Die Standardhöhe und -breite für Symbole im Menübereich beträgt 32 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

Sie können Symbole genau anpassen, sowohl auf normalen als auch Retina-Displays, indem Sie drei Symboldateien bereitstellen und sie auf diese Weise angeben:

```json
"default_icon": {
  "16": "path/to/geo-16.png",
  "32": "path/to/geo-32.png",
  "64": "path/to/geo-64.png"
}
```

Wenn Firefox keine genaue Übereinstimmung für die gewünschte Größe findet, wählt er das kleinste spezifizierte Symbol, das größer ist als die ideale Größe. Wenn alle Symbole kleiner als die ideale Größe sind, wird das größte spezifizierte Symbol ausgewählt.

## Beispiel

```json
"action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  }
}
```

Eine Aktion mit nur einem Symbol, in 2 Größen angegeben. Die Hintergrundskripte der Erweiterung können Click-Events empfangen, wenn der Benutzer auf das Symbol klickt, indem sie diesen Code verwenden:

```js
browser.action.onClicked.addListener(handleClick);
```

```json
"action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html"
}
```

Eine Aktion mit einem Symbol, einem Titel und einem Popup. Das Popup wird angezeigt, wenn der Benutzer auf den Button klickt.

## Browser-Kompatibilität

{{Compat}}
