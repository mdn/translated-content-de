---
title: action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/action
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

Eine Aktion ist ein Button, den Ihre Erweiterung zur Toolbar des Browsers hinzufügt. Der Button hat ein Icon und kann optional ein Popup haben, dessen Inhalt mittels HTML, CSS und JavaScript spezifiziert wird.

Dieser Schlüssel ersetzt [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) in Manifest V3-Erweiterungen.

Sie müssen diesen Schlüssel angeben, um einen Button für die Browser-Toolbar in Ihre Erweiterung einzuschließen. Wenn angegeben, können Sie den Button programmatisch über die {{WebExtAPIRef("action")}} API manipulieren.

Wenn Sie ein Popup bereitstellen, wird dieses geöffnet, wenn der Benutzer auf den Button klickt, und Ihr JavaScript, das im Popup ausgeführt wird, kann die Interaktion des Benutzers damit handhaben. Wenn Sie kein Popup angeben, wird bei einem Klick ein Ereignis an die [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) Ihrer Erweiterung gesendet, sobald der Benutzer auf den Button klickt.

## Syntax

Der `action` Schlüssel ist ein Objekt, das die folgenden, alle optionalen, Eigenschaften haben kann:

- [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) {{optional_inline}} {{deprecated_inline}}
  - : `Boolean`. Optional, standardmäßig `false`.
    > [!WARNING]
    > Setzen Sie `browser_style` nicht auf true: Die Unterstützung in Manifest V3 wurde in Firefox 118 entfernt. Siehe [Manifest V3 Migration für `browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration).
- `default_area` {{optional_inline}}
  - : `String`. Definiert den Bereich des Browsers, in dem der Button zunächst platziert wird. Dies ist ein String, der einen der folgenden vier Werte annehmen kann:
    - `"navbar"`: der Button wird in der Haupt-Toolbar des Browsers neben der URL-Leiste platziert.
    - `"menupanel"`: der Button wird in einem Popup-Panel platziert.
    - `"tabstrip"`: der Button wird in der Toolbar platziert, die Browsertabs enthält.
    - `"personaltoolbar"`: der Button wird in der Lesezeichen-Toolbar platziert.

    Diese Eigenschaft wird nur in Firefox unterstützt. Diese Eigenschaft ist optional und standardmäßig auf `"menupanel"` eingestellt. Firefox merkt sich die `default_area` Einstellung für eine Erweiterung, auch wenn diese deinstalliert und anschließend wieder installiert wird. Um den Browser dazu zu zwingen, einen neuen Wert für `default_area` anzuerkennen, muss die ID der Erweiterung geändert werden. Eine Erweiterung kann den Ort des Buttons nach der Installation nicht ändern, aber der Benutzer kann den Button möglicherweise mit der integrierten UI-Anpassungsmechanik des Browsers verschieben.

- `default_icon` {{optional_inline}}
  - : `Object` oder `String`. Verwenden Sie dies, um eine oder mehrere Icons für die Aktion anzugeben. Das Icon wird standardmäßig in der Browser-Toolbar angezeigt. Icons werden als relative URLs zur manifest.json-Datei selbst angegeben.

    Sie können eine einzelne Icon-Datei angeben, indem Sie hier einen String bereitstellen:

    ```json
    "default_icon": "path/to/geo.svg"
    ```

    Um mehrere Icons in verschiedenen Größen anzugeben, geben Sie hier ein Objekt an. Der Name jeder Eigenschaft ist die Höhe des Icons in Pixel, die in eine Ganzzahl umgewandelt werden kann. Der Wert ist die URL. Beispiel:

    ```json
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png"
    }
    ```

    Sie können nicht mehrere Icons gleicher Größe angeben. Weitere Anleitungen finden Sie unter [Auswahl der Icon-Größen](#auswahl_der_icon-größen).

- `default_popup` {{optional_inline}}
  - : `String`. Der Pfad zu einer HTML-Datei, die die Spezifikation des Popups enthält. Die HTML-Datei kann CSS- und JavaScript-Dateien mit `<link>` und `<script>` Elementen einbinden, genau wie eine normale Webseite. Allerdings muss `<script>` ein `src` Attribut haben, um eine Datei zu laden. Verwenden Sie kein `<script>` mit eingebettetem Code, da Sie sonst einen verwirrenden Fehler aufgrund der Content Security Policy erhalten. Anders als bei einer normalen Webseite kann JavaScript, das im Popup ausgeführt wird, auf alle [WebExtension APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen (wobei natürlich die entsprechenden [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) der Erweiterung vorhanden sein müssen). Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).
- `default_title` {{optional_inline}}
  - : `String`. Tooltip für den Button, der angezeigt wird, wenn der Benutzer mit der Maus darüber fährt. Wenn der Button dem Menü-Panel des Browsers hinzugefügt wird, wird dies auch unter dem App-Icon angezeigt. Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).
- `theme_icons` {{optional_inline}}
  - : `Array`. Diese Eigenschaft ermöglicht es Ihnen, je nach Erkennung durch Firefox unterschiedliche Icons für Themen anzugeben, je nachdem, ob das Thema dunklen oder hellen Text verwendet. Wenn diese Eigenschaft vorhanden ist, handelt es sich um ein Array, das mindestens ein `ThemeIcons` Objekt enthält. Ein `ThemeIcons` Objekt enthält drei obligatorische Eigenschaften:
    - `"dark"`
      - : Eine URL, die auf ein Icon zeigt. Dieses Icon wird angezeigt, wenn ein Thema mit dunklem Text aktiv ist (z. B. das Firefox-Standardtheme und, wenn kein `default_icon` angegeben ist, das Standardtheme).
    - `"light"`
      - : Eine URL, die auf ein Icon zeigt. Dieses Icon wird angezeigt, wenn ein Thema mit hellem Text aktiv ist (z. B. das Firefox-Dunkeltheme).
    - `"size"`
      - : Die Größe der beiden Icons in Pixeln.

    Icons werden als relative URLs zur manifest.json-Datei angegeben. Sie sollten `ThemeIcons` in den Größen 16x16 und 32x32 (für Retina-Displays) bereitstellen.

    > [!NOTE]
    > Alternativ können Sie ein SVG-Icon in `default_icon` angeben und eine Medienabfrage zu `prefers-color-scheme` verwenden, um das Icon für helle und dunkle Themen zu aktualisieren. Zum Beispiel:
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
    > Weitere Informationen finden Sie im [themed-icons](https://github.com/mdn/webextensions-examples/tree/main/themed-icons) Beispiel.

## Auswahl der Icon-Größen

Das Icon der Aktion muss möglicherweise in verschiedenen Größen in verschiedenen Kontexten angezeigt werden:

- Das Icon wird in der Browser-Toolbar angezeigt. Ältere Versionen von Firefox unterstützten die Möglichkeit, das Icon im Menü-Panel des Browsers zu platzieren (das Panel, das sich öffnet, wenn der Benutzer auf das "Hamburger"-Icon klickt). In diesen Versionen von Firefox war das Menü-Panelsymbol größer als das Toolbarsymbol.
- Auf einem hochauflösenden Display wie einem Retina-Bildschirm müssen Icons doppelt so groß sein.

Wenn der Browser kein Icon in der richtigen Größe in einer bestimmten Situation finden kann, wählt er das beste Übereinstimmung und skaliert es. Durch die Skalierung kann das Icon verschwommen erscheinen, daher ist es wichtig, die Icon-Größen sorgfältig auszuwählen.

Es gibt zwei Hauptansätze hierfür. Sie können ein einzelnes Icon als SVG-Datei bereitstellen, und es wird korrekt skaliert:

```json
"default_icon": "path/to/geo.svg"
```

Alternativ können Sie mehrere Icons in verschiedenen Größen bereitstellen, und der Browser wählt das beste Übereinstimmung.

In Firefox:

- Die Standardhöhe und -breite für Icons in der Toolbar beträgt 16 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).
- Die Standardhöhe und -breite für Icons im Menü-Panel beträgt 32 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

So können Sie Icons angeben, die genau passen, sowohl auf normalen als auch auf Retina-Displays, indem Sie drei Icon-Dateien bereitstellen und sie so angeben:

```json
"default_icon": {
  "16": "path/to/geo-16.png",
  "32": "path/to/geo-32.png",
  "64": "path/to/geo-64.png"
}
```

Wenn Firefox keine exakte Übereinstimmung für die gewünschte Größe findet, wählt es das kleinste angegebene Icon aus, das größer als die ideale Größe ist. Wenn alle Icons kleiner als die ideale Größe sind, wählt es das größte angegebene Icon.

## Beispiel

```json
"action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  }
}
```

Eine Aktion mit nur einem Icon, in 2 Größen angegeben. Die Hintergrundskripte der Erweiterung können Klickereignisse empfangen, wenn der Benutzer auf das Icon klickt, mit Code wie diesem:

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

Eine Aktion mit einem Icon, einem Titel und einem Popup. Das Popup wird angezeigt, wenn der Benutzer auf den Button klickt.

## Browser-Kompatibilität

{{Compat}}
