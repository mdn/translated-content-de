---
title: action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/action
l10n:
  sourceCommit: 9f889f991b15d9f41f551bd7d5c93d273c9b7cb5
---

{{AddonSidebar}}

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

Eine Aktion ist ein Button, den Ihre Erweiterung zur Toolbar des Browsers hinzufügt. Der Button hat ein Icon und kann optional ein Popup beinhalten, dessen Inhalt mithilfe von HTML, CSS und JavaScript spezifiziert wird.

Dieser Schlüssel ersetzt [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) in Manifest V3-Erweiterungen.

Sie müssen diesen Schlüssel angeben, um einen Toolbar-Button in Ihrer Erweiterung einzuschließen. Wenn angegeben, können Sie den Button programmatisch mit der {{WebExtAPIRef("action")}} API manipulieren.

Wenn Sie ein Popup bereitstellen, wird es geöffnet, wenn der Benutzer auf den Button klickt, und Ihr JavaScript im Popup kann die Interaktion des Benutzers damit verarbeiten. Wenn Sie kein Popup bereitstellen, wird ein Klickereignis an die [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) Ihrer Erweiterung gesendet, wenn der Benutzer auf den Button klickt.

## Syntax

Der `action`-Schlüssel ist ein Objekt, das eine oder mehrere dieser Eigenschaften enthalten kann, alle optional:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Typ</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          <a href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles">
            browser_style
          </a>
        </code>
        <br />{{optional_inline}}
        <br />{{deprecated_inline}}
      </td>
      <td><code>Boolean</code></td>
      <td>
        <p>Optional, Standardwert ist <code>false</code>.</p>
        <div class="notecard warning">
          <p>
            Setzen Sie <code>browser_style</code> nicht auf true: Seine Unterstützung in Manifest V3 wurde in Firefox 118 entfernt. Siehe <a href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration">Manifest V3 Migration für <code>browser_style</code></a>.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>default_area</code>
      <br />{{optional_inline}}</td>
      <td><code>String</code></td>
      <td>
        <p>
          Definiert den Teil des Browsers, in dem der Button anfänglich platziert wird. Dies ist ein String, der einen von vier Werten haben kann:
        </p>
        <ul>
          <li>
            "navbar": Der Button wird in der Haupt-Toolbar des Browsers, neben der URL-Leiste, platziert.
          </li>
          <li>"menupanel": Der Button wird in einem Popup-Panel platziert.</li>
          <li>
            "tabstrip": Der Button wird in der Toolbar platziert, die die Tabs des Browsers enthält.
          </li>
          <li>
            "personaltoolbar": Der Button wird in der Lesezeichen-Toolbar platziert.
          </li>
        </ul>
        <p>Diese Eigenschaft wird nur in Firefox unterstützt.</p>
        <p>Diese Eigenschaft ist optional und hat standardmäßig den Wert "menupanel".</p>
        <p>
          Firefox speichert die <code>default_area</code>-Einstellung für eine Erweiterung, selbst wenn diese Erweiterung deinstalliert und anschließend neu installiert wird. Um den Browser zu zwingen, einen neuen Wert für <code>default_area</code> anzuerkennen, muss die ID der Erweiterung geändert werden.
        </p>
        <p>
          Eine Erweiterung kann nicht den Ort des Buttons ändern, nachdem sie installiert wurde, aber der Benutzer kann möglicherweise den Button mithilfe des eingebauten Mechanismus zur UI-Anpassung des Browsers verschieben.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_icon</code>
      <br />{{optional_inline}}</td>
      <td><code>Object</code> oder <code>String</code></td>
      <td>
        <p>
          Verwenden Sie dies, um ein oder mehrere Icons für die Aktion anzugeben. Das Icon wird standardmäßig in der Browser-Toolbar angezeigt.
        </p>
        <p>
          Icons werden als URLs relativ zur Datei manifest.json angegeben.
        </p>
        <p>Sie können eine einzelne Icon-Datei angeben, indem Sie hier einen String angeben:</p>
        <pre class="brush: json">"default_icon": "path/to/geo.svg"</pre>
        <p>
          Um mehrere Icons in verschiedenen Größen anzugeben, geben Sie hier ein Objekt an.
          Der Name jeder Eigenschaft ist die Höhe des Icons in Pixeln und muss in einen Integer konvertierbar sein. Der Wert ist die URL. Zum Beispiel:
        </p>
        <pre class="brush: json">
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png"
    }</pre
        >
        <p>
          Sie können nicht mehrere Icons derselben Größe angeben.<br /><br />Sehen Sie
          <a href="#choosing_icon_sizes"
            >Auswahl der Icon-Größen</a
          >
          für weitere Hinweise dazu.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_popup</code>
      <br />{{optional_inline}}</td>
      <td><code>String</code></td>
      <td>
        <p>
          Der Pfad zu einer HTML-Datei, die die Spezifikation des Popups enthält.
        </p>
        <p>
          Die HTML-Datei kann CSS- und JavaScript-Dateien einbinden, indem
          <code
            ><a href="/de/docs/Web/HTML/Element/link">&#x3C;link></a></code
          >
          und
          <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script></a
            ></code
          >
          Elemente wie bei einer normalen Webseite verwendet werden. Jedoch
          muss ein
          <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script>
            </a></code
          >
          Element ein
          <code><a href="/de/docs/Web/HTML/Element/script">src</a></code>
          Attribut haben, um eine Datei zu laden. Verwenden Sie kein
          <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script></a
            ></code
          >
          mit eingebettetem Code, da Sie andernfalls einen verwirrenden Content Violation
          Policy-Fehler erhalten werden.
        </p>
        <p>
          Im Gegensatz zu einer normalen Webseite kann JavaScript, das im Popup läuft, auf
          alle
          <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API"
            >WebExtension APIs</a
          >
          zugreifen (vorbehaltlich, dass die Erweiterung über die entsprechenden
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions"
            >Berechtigungen</a
          >
          verfügt).
        </p>
        <p>
          Dies ist eine
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json"
            >lokalisierbare Eigenschaft</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_title</code>
      <br />{{optional_inline}}</td>
      <td><code>String</code></td>
      <td>
        <p>
          Tooltip für den Button, wird angezeigt, wenn der Benutzer mit der Maus darüber fährt. Wenn der Button zum Menüpanel des Browsers hinzugefügt wird, wird dies auch unter dem App-Icon angezeigt.
        </p>
        <p>
          Dies ist eine
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json"
            >lokalisierbare Eigenschaft</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>theme_icons</code>
      <br />{{optional_inline}}</td>
      <td><code>Array</code></td>
      <td>
        <p>
          Diese Eigenschaft ermöglicht es Ihnen, verschiedene Icons für Themes anzugeben, abhängig davon, ob Firefox erkennt, dass das Theme dunklen oder hellen Text verwendet.
        </p>
        <p>
          Wenn diese Eigenschaft vorhanden ist, handelt es sich um ein Array, das mindestens ein
          <code>ThemeIcons</code>-Objekt enthält. Ein <code>ThemeIcons</code>-Objekt
          enthält drei verpflichtende Eigenschaften:
        </p>
        <dl>
          <dt><code>"dark"</code></dt>
          <dd>
            Eine URL, die auf ein Icon verweist. Dieses Icon wird angezeigt, wenn ein Theme mit dunklem Text aktiv ist (wie z.B. das Firefox Light-Theme oder das Standard-Theme, wenn kein default_icon angegeben ist).
          </dd>
          <dt><code>"light"</code></dt>
          <dd>
            Eine URL, die auf ein Icon verweist. Dieses Icon wird angezeigt, wenn ein Theme mit hellem Text aktiv ist (wie z.B. das Firefox Dark-Theme).
          </dd>
          <dt><code>"size"</code></dt>
          <dd>Die Größe der beiden Icons in Pixeln.</dd>
        </dl>
        <p>Icons werden als URLs relativ zur manifest.json-Datei angegeben.</p>
        <p>
          Sie sollten 16x16 und 32x32 (für Retina-Displays)
          <code>ThemeIcons</code> bereitstellen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Auswahl der Icon-Größen

Das Icon der Aktion muss möglicherweise in verschiedenen Größen in unterschiedlichen Kontexten angezeigt werden:

- Das Icon wird in der Browser-Toolbar angezeigt. Ältere Versionen von Firefox unterstützten die Option, das Icon im Menüpanel des Browsers (das Panel, das sich öffnet, wenn der Benutzer auf das "Hamburger"-Icon klickt) zu platzieren. In diesen Versionen von Firefox war das Icon im Menüpanel größer als das Icon in der Toolbar.
- Auf einem hochauflösenden Display wie einem Retina-Bildschirm müssen Icons doppelt so groß sein.

Wenn der Browser kein Icon der richtigen Größe für eine gegebene Situation findet, wählt er die beste Übereinstimmung und skaliert es. Skalierung kann das Icon unscharf erscheinen lassen, daher ist es wichtig, die Icon-Größen sorgfältig auszuwählen.

Es gibt zwei Hauptansätze dafür. Sie können ein einzelnes Icon als SVG-Datei bereitstellen, und es wird korrekt skaliert:

```json
"default_icon": "path/to/geo.svg"
```

Alternativ können Sie mehrere Icons in verschiedenen Größen bereitstellen, und der Browser wird die beste Übereinstimmung auswählen.

In Firefox:

- Die Standardhöhe und -breite für Icons in der Toolbar ist 16 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).
- Die Standardhöhe und -breite für Icons im Menüpanel ist 32 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

Sie können also Icons bereitstellen, die genau passen, sowohl auf normalen als auch Retina-Displays, indem Sie drei Icon-Dateien bereitstellen und sie so angeben:

```json
"default_icon": {
  "16": "path/to/geo-16.png",
  "32": "path/to/geo-32.png",
  "64": "path/to/geo-64.png"
}
```

Wenn Firefox keine exakte Übereinstimmung für die gewünschte Größe findet, wählt es das kleinste angegebene Icon, das größer als die ideale Größe ist. Wenn alle Icons kleiner als die ideale Größe sind, wählt es das größte angegebene Icon.

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
