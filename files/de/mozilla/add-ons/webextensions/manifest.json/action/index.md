---
title: action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/action
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

Eine Aktion ist ein Button, den Ihre Erweiterung zur Browser-Toolbar hinzufügt. Der Button hat ein Icon und kann optional ein Popup haben, dessen Inhalt mithilfe von HTML, CSS und JavaScript angegeben wird.

Dieser Schlüssel ersetzt [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) in Manifest V3-Erweiterungen.

Sie müssen diesen Schlüssel angeben, um einen Browser-Toolbar-Button in Ihre Erweiterung einzuschließen. Wenn dieser festgelegt ist, können Sie den Button programmgesteuert mithilfe der {{WebExtAPIRef("action")}} API manipulieren.

Wenn Sie ein Popup bereitstellen, wird dieses geöffnet, wenn der Benutzer auf den Button klickt, und Ihr JavaScript, das im Popup ausgeführt wird, kann die Interaktionen des Benutzers damit abwickeln. Wenn Sie kein Popup bereitstellen, wird ein Klickereignis an die [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) Ihrer Erweiterung gesendet, wenn der Benutzer auf den Button klickt.

## Syntax

Der `action`-Schlüssel ist ein Objekt, das jede dieser Eigenschaften haben kann, alle optional:

- [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) {{optional_inline}} {{deprecated_inline}}
  - : `Boolean`. Optional, standardmäßig `false`.
    > [!WARNING]
    > Setzen Sie `browser_style` nicht auf true: Die Unterstützung für Manifest V3 wurde in Firefox 118 entfernt. Siehe [Manifest V3 Migration für `browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration).
- `default_area` {{optional_inline}}
  - : `String`. Definiert den Bereich des Browsers, in dem der Button initial platziert wird. Dies ist ein String, der einen der vier Werte annehmen kann:
    - `"navbar"`: Der Button wird in der Hauptbrowser-Toolbar neben der URL-Leiste platziert.
    - `"menupanel"`: Der Button wird in einem Popup-Panel platziert.
    - `"tabstrip"`: Der Button wird in der Toolbar platziert, die die Browser-Tabs enthält.
    - `"personaltoolbar"`: Der Button wird in der Lesezeichen-Toolbar platziert.

    Diese Eigenschaft wird nur in Firefox unterstützt. Diese Eigenschaft ist optional und standardmäßig auf `"menupanel"` gesetzt. Firefox merkt sich die `default_area`-Einstellung einer Erweiterung, auch wenn diese Erweiterung deinstalliert und anschließend erneut installiert wird. Um den Browser dazu zu zwingen, einen neuen Wert für `default_area` anzuerkennen, muss die ID der Erweiterung geändert werden. Eine Erweiterung kann den Ort des Buttons nicht ändern, nachdem er installiert wurde, aber der Benutzer kann möglicherweise den Button mit dem eingebauten Anpassungsmechanismus der Benutzeroberfläche verschieben.

- `default_icon` {{optional_inline}}
  - : `Object` oder `String`. Verwenden Sie dies, um ein oder mehrere Icons für die Aktion anzugeben. Das Icon wird standardmäßig in der Browser-Toolbar angezeigt. Icons werden als URLs relativ zur manifest.json-Datei selbst angegeben.

    Sie können eine einzelne Icon-Datei angeben, indem Sie hier einen String angeben:

    ```json
    "default_icon": "path/to/geo.svg"
    ```

    Um mehrere Icons in verschiedenen Größen anzugeben, geben Sie hier ein Objekt an. Der Name jeder Eigenschaft ist die Höhe des Icons in Pixeln und muss in eine Ganzzahl umwandelbar sein. Der Wert ist die URL. Zum Beispiel:

    ```json
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png"
    }
    ```

    Sie können nicht mehrere Icons derselben Größe angeben. Siehe [Auswahl der Icon-Größen](#auswahl_der_icon-größen) für weitere Hinweise.

- `default_popup` {{optional_inline}}
  - : `String`. Der Pfad zu einer HTML-Datei, die die Spezifikation des Popups enthält. Die HTML-Datei kann CSS und JavaScript-Dateien mithilfe von `<link>` und `<script>`-Elementen einbinden, genau wie eine normale Webseite. `<script>` muss jedoch ein `src`-Attribut haben, um eine Datei zu laden. Verwenden Sie `<script>` nicht mit eingebettetem Code, da Sie sonst einen verwirrenden Fehler der Inhaltsverletzungspolitik erhalten. Im Gegensatz zu einer normalen Webseite kann JavaScript, das im Popup ausgeführt wird, auf alle [WebExtension APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) zugreifen (vorausgesetzt natürlich, die Erweiterung hat die entsprechenden [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)). Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).
- `default_title` {{optional_inline}}
  - : `String`. Tooltip für den Button, der angezeigt wird, wenn der Benutzer mit der Maus darüber fährt. Wenn der Button zum Menü-Panel des Browsers hinzugefügt wird, wird dies auch unter dem App-Icon angezeigt. Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).
- `theme_icons` {{optional_inline}}
  - : `Array`. Diese Eigenschaft ermöglicht es Ihnen, unterschiedliche Icons für Themen anzugeben, abhängig davon, ob Firefox erkennt, dass das Thema dunklen oder hellen Text verwendet. Wenn diese Eigenschaft vorhanden ist, ist es ein Array, das mindestens ein `ThemeIcons`-Objekt enthält. Ein `ThemeIcons`-Objekt enthält drei verpflichtende Eigenschaften:
    - `"dark"`
      - : Eine URL, die auf ein Icon zeigt. Dieses Icon wird angezeigt, wenn ein Thema mit dunklem Text aktiv ist (z.B. das Firefox-Light-Thema und, falls kein `default_icon` angegeben ist, das Standardthema).
    - `"light"`
      - : Eine URL, die auf ein Icon zeigt. Dieses Icon wird angezeigt, wenn ein Thema mit hellem Text aktiv ist (z.B. das Firefox-Dark-Thema).
    - `"size"`
      - : Die Größe der beiden Icons in Pixeln.

    Icons werden als URLs relativ zur manifest.json-Datei angegeben. Sie sollten 16x16 und 32x32 (für Retina-Displays) `ThemeIcons` bereitstellen.

    > [!NOTE]
    > Alternativ können Sie ein SVG-Icon in `default_icon` angeben und eine Media Query für `prefers-color-scheme` verwenden, um das Icon für helle und dunkle Themen zu aktualisieren. Zum Beispiel:
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
    > Für weitere Informationen siehe das [Themen-Icons](https://github.com/mdn/webextensions-examples/tree/master/themed-icons) Beispiel.

## Auswahl der Icon-Größen

Das Icon der Aktion muss möglicherweise in verschiedenen Größen in verschiedenen Kontexten angezeigt werden:

- Das Icon wird in der Browser-Toolbar angezeigt. Ältere Versionen von Firefox unterstützten die Möglichkeit, das Icon im Menü-Panel des Browsers (dem Panel, das sich öffnet, wenn der Benutzer auf das "Hamburger"-Icon klickt) zu platzieren. In diesen Versionen von Firefox war das Menü-Panel-Icon größer als das Toolbar-Icon.
- Auf einem hochauflösenden Display wie einem Retina-Bildschirm müssen Icons doppelt so groß sein.

Wenn der Browser kein Icon der richtigen Größe in einer gegebenen Situation findet, wird er die beste Übereinstimmung auswählen und es skalieren. Skalierung kann dazu führen, dass das Icon verschwommen erscheint, daher ist es wichtig, die Icon-Größen sorgfältig auszuwählen.

Es gibt zwei Hauptansätze dafür. Sie können ein einzelnes Icon als SVG-Datei bereitstellen, und es wird korrekt skaliert:

```json
"default_icon": "path/to/geo.svg"
```

Alternativ können Sie mehrere Icons in verschiedenen Größen bereitstellen, und der Browser wird die beste Übereinstimmung auswählen.

In Firefox:

- Die Standardhöhe und -breite für Icons in der Toolbar beträgt 16 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).
- Die Standardhöhe und -breite für Icons im Menü-Panel beträgt 32 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

Sie können also Icons angeben, die genau auf normal und Retina-Displays passen, indem Sie drei Icon-Dateien bereitstellen und sie wie folgt angeben:

```json
"default_icon": {
  "16": "path/to/geo-16.png",
  "32": "path/to/geo-32.png",
  "64": "path/to/geo-64.png"
}
```

Wenn Firefox keine exakte Übereinstimmung für die Größe findet, die es haben möchte, wird es das kleinste angegebene Icon auswählen, das größer als die ideale Größe ist. Wenn alle Icons kleiner als die ideale Größe sind, wählt es das größte angegebene Icon aus.

## Beispiel

```json
"action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  }
}
```

Eine Aktion mit nur einem Icon, angegeben in 2 Größen. Die Hintergrundskripte der Erweiterung können Klick-Ereignisse empfangen, wenn der Benutzer das Icon mit folgendem Code klickt:

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
