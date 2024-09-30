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

Eine Browser-Aktion ist ein Button, den Ihre Erweiterung zur Symbolleiste des Browsers hinzufügt. Der Button hat ein Icon und kann optional ein <code>popup</code> haben, dessen Inhalt mit HTML, CSS und JavaScript spezifiziert wird.

Dieser Schlüssel wird in Manifest V3-Erweiterungen durch [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) ersetzt.

Sie müssen diesen Schlüssel angeben, um einen Browser-Symbolleisten-Button in Ihre Erweiterung einzuschließen. Wenn dies angegeben ist, können Sie den Button programmgesteuert mit der {{WebExtAPIRef("browserAction")}} API manipulieren.

Wenn Sie ein <code>popup</code> bereitstellen, wird dieses geöffnet, wenn der Benutzer den Button klickt, und Ihr JavaScript, das im <code>popup</code> ausgeführt wird, kann die Interaktion des Benutzers damit verwalten. Wenn Sie kein <code>popup</code> bereitstellen, wird ein Klickereignis an die [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) Ihrer Erweiterung gesendet, wenn der Benutzer den Button klickt.

## Syntax

Der `browser_action`-Schlüssel ist ein Objekt, das eine der folgenden Eigenschaften haben kann, alle optional:

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
            Setzen Sie <code>browser_style</code> nicht auf true: es wird ab Manifest V3 nicht unterstützt, beginnend mit Firefox 118. Siehe <a href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration">Manifest V3 Migration für <code>browser_style</code></a>.
          </p>
        </div>
        <p>
          In Firefox ist das Stylesheet unter
          chrome://browser/content/extension.css oder
          chrome://browser/content/extension-mac.css auf macOS zu sehen. Beim Einstellen
          von Dimensionen beachten Sie, dass dieses Stylesheet
          <code>box-sizing: border-box</code> setzt (siehe
          <a href="/de/docs/Web/CSS/box-sizing">box-sizing</a>).
        </p>
        <p>
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles"
            >Browser Styles</a
          > beschreibt die Klassen, die Sie auf Elemente im Popup anwenden können,
          um bestimmte Styles zu erhalten.
        </p>
        <p>
          Die
          <a
            href="https://github.com/mdn/webextensions-examples/tree/main/latest-download"
            >latest-download</a
          >
          Beispiel-Erweiterung verwendet <code>browser_style</code> in ihrem Popup.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Das Setzen von <code>browser_style</code> auf
            <code>true</code> verhindert, dass Benutzer Text im Popup oder im
            Sidebar-Inhalt einer Erweiterung markieren können. Dies ist ein normales Verhalten. Im Browser können Sie keine Teile der Benutzeroberfläche markieren. Sie können jedoch diese Einschränkung umgehen, um Ihren Benutzern die Textauswahl auf zwei Arten zu ermöglichen:
          </p>
          <ol>
            <li>Setzen Sie <code>browser_style</code> auf <code>false</code>.</li>
            <li>
              Verwenden Sie CSS-Styling auf dem Body Ihres Sidebar- oder Popup-HTMLs, um die Textauswahl zu ermöglichen, indem Sie die Regel
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
          Definiert den Teil des Browsers, in dem der Button initial platziert wird. Dies ist ein String, der einen von vier Werten annehmen kann:
        </p>
        <ul>
          <li>
            "navbar": der Button wird in der Hauptbrowser-Symbolleiste neben der URL-Leiste platziert.
          </li>
          <li>"menupanel": der Button wird in einem Popup-Panel platziert.</li>
          <li>
            "tabstrip": der Button wird in der Symbolleiste platziert, die die Browser-Tabs enthält.
          </li>
          <li>
            "personaltoolbar": der Button wird in der Lesezeichen-Symbolleiste platziert.
          </li>
        </ul>
        <p>Diese Eigenschaft wird nur in Firefox unterstützt.</p>
        <p>Diese Eigenschaft ist optional und hat standardmäßig den Wert "menupanel".</p>
        <p>
          Firefox merkt sich die <code>default_area</code>-Einstellung für eine
          Erweiterung, selbst wenn diese Erweiterung deinstalliert und anschließend
          wieder installiert wird. Um den Browser zu zwingen, einen neuen Wert für
          <code>default_area</code> anzuerkennen, muss die id der Erweiterung geändert werden.
        </p>
        <p>
          Eine Erweiterung kann den Ort des Buttons nach der Installation nicht ändern, aber der Benutzer kann den Button möglicherweise mit dem integrierten UI-Anpassungsmechanismus des Browsers verschieben.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_icon</code>
      <br />{{optional_inline}}</td>
      <td><code>Object</code> oder <code>String</code></td>
      <td>
        <p>
          Verwenden Sie dies, um ein oder mehrere Icons für die Browser-Aktion anzugeben. Das Icon wird standardmäßig in der Browser-Symbolleiste angezeigt.
        </p>
        <p>
          Icons werden als URLs relativ zur manifest.json-Datei angegeben.
        </p>
        <p>Sie können eine einzelne Icon-Datei angeben, indem Sie hier einen String angeben:</p>
        <pre class="brush: json">"default_icon": "path/to/geo.svg"</pre>
        <p>
          Um mehrere Icons in verschiedenen Größen anzugeben, geben Sie hier ein Objekt an.
          Der Name jeder Eigenschaft ist die Höhe des Icons in Pixeln und muss in einen Integer umwandelbar sein. Der Wert ist die URL. Zum Beispiel:
        </p>
        <pre class="brush: json">
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png"
    }</pre
        >
        <p>
          Sie können nicht mehrere Icons derselben Größe angeben.<br /><br />Siehe
          <a
            href="#choosing_icon_sizes"
            >Wahl der Icon-Größen</a
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
          Die HTML-Datei kann CSS- und JavaScript-Dateien enthalten, indem sie <code
            ><a href="/de/docs/Web/HTML/Element/link">&#x3C;link></a></code
          > und <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script></a></code
          > Elemente verwendet, genau wie eine normale Webseite. Allerdings muss <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script></a
            ></code
          > ein <code><a href="/de/docs/Web/HTML/Element/script">src</a></code> Attribut haben, um eine Datei zu laden. Verwenden Sie kein <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script></a
            ></code
          > mit eingebettetem Code, da Sie einen verwirrenden Content Violation Policy-Fehler erhalten.
        </p>
        <p>
          Im Gegensatz zu einer normalen Webseite kann JavaScript, das im Popup ausgeführt wird, auf alle <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API">WebExtension APIs</a> zugreifen (vorausgesetzt, die Erweiterung hat die entsprechenden <a
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
          Tooltip für den Button, angezeigt, wenn der Benutzer den Mauszeiger darüber bewegt. Wenn der Button zum Menü-Panel des Browsers hinzugefügt wird, wird dies auch unter dem App-Symbol angezeigt.
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
          Diese Eigenschaft ermöglicht es Ihnen, verschiedene Icons für Themes abhängig davon anzugeben, ob Firefox erkennt, dass das Theme dunklen oder hellen Text verwendet.
        </p>
        <p>
          Wenn diese Eigenschaft vorhanden ist, ist sie ein Array, das mindestens ein <code>ThemeIcons</code>-Objekt enthält. Ein <code>ThemeIcons</code>-Objekt enthält drei obligatorische Eigenschaften:
        </p>
        <dl>
          <dt><code>"dark"</code></dt>
          <dd>
            Eine URL, die auf ein Icon zeigt. Dieses Icon wird angezeigt, wenn ein Theme mit dunklem Text aktiv ist (wie das Firefox Light-Theme und das Standard-Theme, wenn kein <code>default_icon</code> angegeben ist).
          </dd>
          <dt><code>"light"</code></dt>
          <dd>
            Eine URL, die auf ein Icon zeigt. Dieses Icon wird angezeigt, wenn ein Theme mit hellem Text aktiv ist (wie das Firefox Dark-Theme).
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

## Wahl der Icon-Größen

Das Icon der Browser-Aktion muss möglicherweise in verschiedenen Größen in verschiedenen Kontexten angezeigt werden:

- Das Icon wird in der Browser-Symbolleiste angezeigt. Ältere Versionen von Firefox unterstützten die Option, das Icon im Menü-Panel des Browsers (dem Panel, das geöffnet wird, wenn der Benutzer auf das "Hamburger"-Icon klickt) zu platzieren. In diesen Versionen von Firefox war das Icon im Menü-Panel größer als das Icon in der Symbolleiste.
- Auf einem hochauflösenden Display wie einem Retina-Bildschirm müssen Icons doppelt so groß sein.

Wenn der Browser kein Icon der richtigen Größe in einer bestimmten Situation finden kann, wird er die beste Übereinstimmung auswählen und es skalieren. Skalierung kann dazu führen, dass das Icon verschwommen erscheint, daher ist es wichtig, die Icon-Größen sorgfältig auszuwählen.

Es gibt zwei Hauptansätze dafür. Sie können ein einzelnes Icon als SVG-Datei bereitstellen, und es wird korrekt skaliert:

```json
"default_icon": "path/to/geo.svg"
```

Alternativ können Sie mehrere Icons in verschiedenen Größen bereitstellen, und der Browser wählt die beste Übereinstimmung.

In Firefox:

- Die Standardhöhe und -breite für Icons in der Symbolleiste beträgt 16 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).
- Die Standardhöhe und -breite für Icons im Menü-Panel beträgt 32 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

So können Sie Icons angeben, die genau passen, sowohl auf normalen als auch auf Retina-Displays, indem Sie drei Icon-Dateien bereitstellen und sie so spezifizieren:

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

Eine Browser-Aktion mit nur einem Icon, das in zwei verschiedenen Größen angegeben ist. Die Hintergrundskripte der Erweiterung können Klickereignisse empfangen, wenn der Benutzer das Icon mit einem Code wie diesem klickt:

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

Eine Browser-Aktion mit einem Icon, einem Titel und einem Popup. Das Popup wird angezeigt, wenn der Benutzer den Button klickt.

Für eine einfache, aber vollständige Erweiterung, die eine Browser-Aktion verwendet, siehe das [Schritt-für-Schritt-Tutorial](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)
- [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [Browser Styles](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
