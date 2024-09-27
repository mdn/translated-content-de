---
title: browser_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_action
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

Eine Browser-Aktion ist ein Button, den Ihre Erweiterung zur Symbolleiste des Browsers hinzufügt. Der Button hat ein Icon und kann optional ein Popup haben, dessen Inhalt mit HTML, CSS und JavaScript angegeben wird.

Dieser Schlüssel wird in Manifest V3-Erweiterungen durch [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) ersetzt.

Sie müssen diesen Schlüssel angeben, um einen Toolbar-Button in Ihrer Erweiterung aufzunehmen. Wenn dieser angegeben ist, können Sie den Button programmatisch über die {{WebExtAPIRef("browserAction")}} API manipulieren.

Wenn Sie ein Popup bereitstellen, wird dieses geöffnet, wenn der Benutzer auf den Button klickt, und Ihr JavaScript, das im Popup läuft, kann mit dem Benutzer interagieren. Wenn Sie kein Popup bereitstellen, wird ein Klick-Ereignis an die [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) Ihrer Erweiterung gesendet, wenn der Benutzer auf den Button klickt.

## Syntax

Der `browser_action`-Schlüssel ist ein Objekt, das die folgenden Attribute haben kann, die alle optional sind:

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
      </td>
      <td><code>Boolean</code></td>
      <td>
        <p>Optional, Standardwert ist <code>false</code>.</p>
        <div class="notecard warning">
          <p>
            Setzen Sie <code>browser_style</code> nicht auf true: Es wird in Manifest V3, beginnend mit Firefox 118, nicht unterstützt. Siehe <a href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration">Manifest V3 Migration für <code>browser_style</code></a>.
          </p>
        </div>
        <p>
          In Firefox kann das Stylesheet unter
          chrome://browser/content/extension.css oder
          chrome://browser/content/extension-mac.css auf macOS eingesehen werden. Bei der Festlegung der Dimensionen beachten Sie, dass dieses Stylesheet
          <code>box-sizing: border-box</code> festlegt (siehe
          <a href="/de/docs/Web/CSS/box-sizing">box-sizing</a>).
        </p>
        <p>
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles"
            >Browser-Stile</a
          > beschreibt die Klassen, die Sie auf Elemente im Popup anwenden können, um bestimmte Stile zu erhalten.
        </p>
        <p>
          Die
          <a
            href="https://github.com/mdn/webextensions-examples/tree/main/latest-download"
            >latest-download</a
          >
          Beispielerweiterung verwendet <code>browser_style</code> in ihrem Popup.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Wenn <code>browser_style</code> auf
            <code>true</code> gesetzt ist, können Benutzer keinen Text im Popup oder Seitenleisteninhalt einer Erweiterung markieren. Dies ist normales Verhalten. Teile der Benutzeroberfläche im Browser können nicht markiert werden. Sie können jedoch diese Einschränkung umgehen, um Ihren Benutzern die Markierung von Text zu ermöglichen, indem Sie die folgenden Maßnahmen ergreifen:
          </p>
          <ol>
            <li>Setzen Sie <code>browser_style</code> auf <code>false</code>.</li>
            <li>
              Verwenden Sie CSS-Styling im Body Ihrer Seitenleiste oder Popup-HTML, um Textauswahl zu ermöglichen, indem Sie die Regel
              <code>-moz-user-select</code> mit einem Wert von <code>all</code> oder
              <code>text</code> hinzufügen.
            </li>
          </ol>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>default_area</code>
      <br />{{optional_inline}}</td>
      <td><code>String</code></td>
      <td>
        <p>
          Definiert den Bereich des Browsers, in dem der Button initial platziert wird. Dies ist ein String, der einen von vier Werten annehmen kann:
        </p>
        <ul>
          <li>
            "navbar": Der Button wird in der Hauptsymbolleiste des Browsers platziert, neben der URL-Leiste.
          </li>
          <li>"menupanel": Der Button wird in einem Popup-Panel platziert.</li>
          <li>
            "tabstrip": Der Button wird in der Symbolleiste platziert, die die Browsertabs enthält.
          </li>
          <li>
            "personaltoolbar": Der Button wird in der Lesezeichensymbolleiste platziert.
          </li>
        </ul>
        <p>Diese Eigenschaft wird nur in Firefox unterstützt.</p>
        <p>Diese Eigenschaft ist optional und hat als Standardwert "menupanel".</p>
        <p>
          Firefox merkt sich die <code>default_area</code>-Einstellung einer Erweiterung, auch wenn die Erweiterung deinstalliert und anschließend neu installiert wird. Um den Browser zu zwingen, einen neuen Wert für <code>default_area</code> anzuerkennen, muss die ID der Erweiterung geändert werden.
        </p>
        <p>
          Eine Erweiterung kann den Standort des Buttons nach der Installation nicht ändern, aber der Benutzer kann möglicherweise den Button mit dem eingebauten UI-Anpassungsmechanismus des Browsers verschieben.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_icon</code>
      <br />{{optional_inline}}</td>
      <td><code>Object</code> oder <code>String</code></td>
      <td>
        <p>
          Verwenden Sie dies, um ein oder mehrere Icons für die Browser-Aktion anzugeben. Das Icon wird standardmäßig in der Symbolleiste des Browsers angezeigt.
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
          Sie können keine mehrfachen Icons der gleichen Größe angeben.<br /><br />Sehen Sie <a href="#choosing_icon_sizes">Auswahl von Icon-Größen</a> für weitere Hinweise dazu.
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
          Die HTML-Datei kann CSS- und JavaScript-Dateien mit
          <code
            ><a href="/de/docs/Web/HTML/Element/link">&#x3C;link></a></code
          >
          und
          <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script></a
            ></code
          >
          Elementen einbeziehen, ähnlich wie eine normale Webseite. Allerdings muss
          <code><a href="/de/docs/Web/HTML/Element/script">src</a></code> Attribut aufweisen, um eine Datei zu laden. Verwenden Sie keine
          <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script></a
            ></code
          >
          mit eingebettetem Code, da Sie ansonsten einen verwirrenden Content Violation Policy Fehler erhalten.
        </p>
        <p>
          Anders als bei einer normalen Webseite kann JavaScript, das im Popup läuft, auf alle <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API">WebExtension APIs</a> zugreifen (vorausgesetzt, die Erweiterung hat die entsprechenden <a href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">Berechtigungen</a>).
        </p>
        <p>
          Dies ist eine <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json">lokalisierbare Eigenschaft</a>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_title</code>
      <br />{{optional_inline}}</td>
      <td><code>String</code></td>
      <td>
        <p>
          Tooltip für den Button, der angezeigt wird, wenn der Benutzer mit der Maus darüber fährt. Wenn der Button zum Menü-Panel des Browsers hinzugefügt wird, wird dies auch unter dem App-Icon angezeigt.
        </p>
        <p>
          Dies ist eine <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json">lokalisierbare Eigenschaft</a>.
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
          Wenn diese Eigenschaft vorhanden ist, handelt es sich um ein Array, das mindestens ein <code>ThemeIcons</code> Objekt enthält. Ein <code>ThemeIcons</code> Objekt enthält drei verpflichtende Eigenschaften:
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

## Auswahl von Icon-Größen

Das Icon der Browser-Aktion muss möglicherweise in verschiedenen Größen in unterschiedlichen Kontexten angezeigt werden:

- Das Icon wird in der Symbolleiste des Browsers angezeigt. Ältere Versionen von Firefox unterstützten die Option, das Icon im Menüpanel des Browsers zu platzieren (das Panel, das sich öffnet, wenn der Benutzer auf das "Hamburger"-Icon klickt). In diesen Versionen von Firefox war das Icon im Menüpanel größer als das Icon in der Symbolleiste.
- Auf einem hochdichten Display wie einem Retina-Bildschirm müssen Icons doppelt so groß sein.

Wenn der Browser kein Icon der richtigen Größe in einer bestimmten Situation finden kann, wählt er das beste Übereinstimmung und skaliert es. Skalierung kann dazu führen, dass das Icon verschwommen erscheint, daher ist es wichtig, die Größen von Icons sorgfältig zu wählen.

Es gibt zwei Hauptansätze dafür. Sie können ein einzelnes Icon als SVG-Datei bereitstellen, und es wird korrekt skaliert:

```json
"default_icon": "path/to/geo.svg"
```

Alternativ können Sie mehrere Icons in verschiedenen Größen bereitstellen, und der Browser wählt die beste Übereinstimmung.

In Firefox:

- Die standardmäßige Höhe und Breite für Icons in der Symbolleiste ist 16 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).
- Die standardmäßige Höhe und Breite für Icons im Menüpanel ist 32 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

Sie können also Icons angeben, die genau passen, auf normalen und Retina-Displays, indem Sie drei Icon-Dateien bereitstellen und sie so angeben:

```json
"default_icon": {
  "16": "path/to/geo-16.png",
  "32": "path/to/geo-32.png",
  "64": "path/to/geo-64.png"
}
```

Wenn Firefox keine exakte Übereinstimmung für die Größe findet, die er möchte, wählt er das kleinste angegebene Icon, das größer als die ideale Größe ist. Wenn alle Icons kleiner als die ideale Größe sind, wählt er das größte angegebene Icon.

## Beispiel

```json
"browser_action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  }
}
```

Eine Browser-Aktion mit nur einem Icon, das in 2 verschiedenen Größen angegeben ist. Die Hintergrundskripte der Erweiterung können Klickevents empfangen, wenn der Benutzer auf das Icon klickt, indem sie folgenden Code verwenden:

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

Für eine einfache, aber vollständige Erweiterung, die eine Browser-Aktion verwendet, siehe das [Durchgangstutorial](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)
- [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [Browser-Stile](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
