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

Eine Action ist ein Button, den Ihre Erweiterung zur Symbolleiste des Browsers hinzufügt. Der Button hat ein Icon und kann optional ein Popup haben, dessen Inhalt mithilfe von HTML, CSS und JavaScript festgelegt wird.

Dieser Schlüssel ersetzt [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) in Manifest-V3-Erweiterungen.

Sie müssen diesen Schlüssel angeben, um in Ihrer Erweiterung einen Button in der Browser-Symbolleiste einzufügen. Wenn angegeben, können Sie den Button programmatisch mit der {{WebExtAPIRef("action")}}-API manipulieren.

Wenn Sie ein Popup angeben, wird dieses geöffnet, wenn der Nutzer den Button anklickt, und Ihr JavaScript, das im Popup läuft, kann die Interaktion des Nutzers damit verarbeiten. Wenn kein Popup angegeben wird, wird beim Klick des Nutzers ein Klick-Event an die [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) Ihrer Erweiterung gesendet.

## Syntax

Der `action`-Schlüssel ist ein Objekt, das die folgenden optionalen Eigenschaften haben kann:

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
        <p>Optional, standardmäßig <code>false</code>.</p>
        <div class="notecard warning">
          <p>
            Setzen Sie <code>browser_style</code> nicht auf true: Die Unterstützung wurde in Manifest V3 in Firefox 118 entfernt. Siehe <a href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration">Manifest V3-Migration für <code>browser_style</code></a>.
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
          Definiert den Teil des Browsers, in dem der Button zunächst platziert wird. Dies ist ein String, der einen der vier folgenden Werte annehmen kann:
        </p>
        <ul>
          <li>
            "navbar": Der Button wird in der Hauptsymbolleiste des Browsers neben der URL-Leiste platziert.
          </li>
          <li>"menupanel": Der Button wird in einem Popup-Panel platziert.</li>
          <li>
            "tabstrip": Der Button wird in der Symbolleiste platziert, die die Browsertabs enthält.
          </li>
          <li>
            "personaltoolbar": Der Button wird in der Lesezeichen-Symbolleiste platziert.
          </li>
        </ul>
        <p>Diese Eigenschaft wird nur in Firefox unterstützt.</p>
        <p>Diese Eigenschaft ist optional und standardmäßig auf "menupanel" gesetzt.</p>
        <p>
          Firefox merkt sich die <code>default_area</code>-Einstellung einer Erweiterung, auch wenn diese deinstalliert und anschließend neu installiert wird. Um den Browser zu zwingen, einen neuen Wert für <code>default_area</code> anzunehmen, muss die ID der Erweiterung geändert werden.
        </p>
        <p>
          Eine Erweiterung kann den Ort des Buttons nach der Installation nicht ändern, aber der Nutzer kann den Button möglicherweise über den eingebauten UI-Anpassungsmechanismus des Browsers verschieben.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_icon</code>
      <br />{{optional_inline}}</td>
      <td><code>Object</code> oder <code>String</code></td>
      <td>
        <p>
          Verwenden Sie diese Option, um ein oder mehrere Icons für die Aktion anzugeben. Das Icon wird standardmäßig in der Browser-Symbolleiste angezeigt.
        </p>
        <p>
          Icons werden als URLs relativ zur manifest.json-Datei angegeben.
        </p>
        <p>Sie können eine einzelne Icon-Datei angeben, indem Sie hier einen String angeben:</p>
        <pre class="brush: json">"default_icon": "path/to/geo.svg"</pre>
        <p>
          Um mehrere Icons in verschiedenen Größen anzugeben, geben Sie hier ein Objekt an. Der Name jeder Eigenschaft ist die Höhe des Icons in Pixeln und muss in einen Integer konvertierbar sein. Der Wert ist die URL. Zum Beispiel:
        </p>
        <pre class="brush: json">
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png"
    }</pre
        >
        <p>
          Sie können nicht mehrere Icons in denselben Größen angeben.<br /><br />Weitere Hinweise finden Sie unter <a href="#choosing_icon_sizes">Auswahl der Icon-Größen</a>.
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
          Die HTML-Datei kann CSS- und JavaScript-Dateien einschließen mit
          <code
            ><a href="/de/docs/Web/HTML/Element/link">&#x3C;link></a></code
          >
          und
          <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script></a
            ></code
          >
          -Elementen, genau wie eine normale Webseite. Allerdings muss
          <code
            ><a href="/de/docs/Web/HTML/Element/script">src</a></code>
          Attribut verwenden, um eine Datei zu laden. Verwenden Sie keine
          <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script></a
            ></code
          >
          mit eingebettetem Code, da Sie einen verwirrenden Fehler in Bezug auf die Content Violation Policy erhalten würden.
        </p>
        <p>
          Anders als bei einer normalen Webseite kann JavaScript, das im Popup läuft, auf alle
          <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API">WebExtension-APIs</a>
          zugreifen (vorausgesetzt, die Erweiterung hat die entsprechenden
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions"
            >Berechtigungen</a
          >).
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
          Tooltip für den Button, der angezeigt wird, wenn der Nutzer seine Maus darüber bewegt. Wenn der Button zum Menüpanel des Browsers hinzugefügt wird, wird dies ebenfalls unter dem App-Symbol angezeigt.
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
          Diese Eigenschaft ermöglicht es Ihnen, verschiedene Icons für Themes anzugeben, je nachdem, ob Firefox erkennt, dass das Theme dunklen oder hellen Text verwendet.
        </p>
        <p>
          Wenn diese Eigenschaft vorhanden ist, handelt es sich um ein Array, das mindestens ein <code>ThemeIcons</code>-Objekt enthält. Ein <code>ThemeIcons</code>-Objekt enthält drei erforderliche Eigenschaften:
        </p>
        <dl>
          <dt><code>"dark"</code></dt>
          <dd>
            Eine URL, die auf ein Icon zeigt. Dieses Icon wird angezeigt, wenn ein Theme mit dunklem Text aktiv ist (wie das Firefox Light Theme und das Standard-Theme, wenn kein default_icon angegeben ist).
          </dd>
          <dt><code>"light"</code></dt>
          <dd>
            Eine URL, die auf ein Icon zeigt. Dieses Icon wird angezeigt, wenn ein Theme mit hellem Text aktiv ist (wie das Firefox Dark Theme).
          </dd>
          <dt><code>"size"</code></dt>
          <dd>Die Größe der beiden Icons in Pixeln.</dd>
        </dl>
        <p>Icons werden als URLs relativ zur manifest.json-Datei angegeben.</p>
        <p>
          Sie sollten 16x16 und 32x32 (für Retina-Display) <code>ThemeIcons</code> bereitstellen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Auswahl der Icon-Größen

Das Icon der Aktion muss möglicherweise in verschiedenen Größen in verschiedenen Kontexten angezeigt werden:

- Das Icon wird in der Browser-Symbolleiste angezeigt. Ältere Versionen von Firefox unterstützten die Option, das Icon im Menü-Panel des Browsers zu platzieren (das Panel, das öffnet, wenn der Nutzer das "Hamburger"-Symbol anklickt). In diesen Versionen von Firefox war das Icon im Menü-Panel größer als das Icon in der Symbolleiste.
- Auf einem hochdichten Display wie einem Retina-Bildschirm müssen Icons doppelt so groß sein.

Wenn der Browser in einer bestimmten Situation kein Icon in der passenden Größe finden kann, wird die am besten passende Größe gewählt und skaliert. Das Skalieren kann dazu führen, dass das Icon unscharf erscheint, daher ist es wichtig, die Icon-Größen sorgfältig auszuwählen.

Es gibt zwei Hauptansätze dazu. Sie können ein einzelnes Icon als SVG-Datei bereitstellen, und es wird korrekt skaliert:

```json
"default_icon": "path/to/geo.svg"
```

Alternativ können Sie mehrere Icons in verschiedenen Größen bereitstellen, und der Browser wird die beste Übereinstimmung auswählen.

In Firefox:

- Die Standardhöhe und -breite für Icons in der Symbolleiste beträgt 16 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).
- Die Standardhöhe und -breite für Icons im Menüpanel beträgt 32 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

So können Sie Icons bereitstellen, die genau auf normalen und Retina-Displays passen, indem Sie drei Icon-Dateien bereitstellen und sie wie folgt angeben:

```json
"default_icon": {
  "16": "path/to/geo-16.png",
  "32": "path/to/geo-32.png",
  "64": "path/to/geo-64.png"
}
```

Wenn Firefox keine genaue Übereinstimmung für die Größe findet, die es möchte, wird es das kleinste angegebene Icon wählen, das größer als die ideale Größe ist. Wenn alle Icons kleiner als die ideale Größe sind, wird das größte angegebene Icon gewählt.

## Beispiel

```json
"action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  }
}
```

Eine Aktion mit nur einem Icon, das in 2 Größen angegeben ist. Die Hintergrundskripte der Erweiterung können Klick-Events empfangen, wenn der Nutzer das Icon mit folgendem Code anklickt:

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

Eine Aktion mit einem Icon, einem Titel und einem Popup. Das Popup wird angezeigt, wenn der Nutzer den Button anklickt.

## Browser-Kompatibilität

{{Compat}}
