---
title: browser_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_action
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
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

Eine Browser-Aktion ist ein Button, den Ihre Erweiterung zur Symbolleiste des Browsers hinzufügt. Der Button hat ein Icon und kann optional ein Popup haben, dessen Inhalt mit HTML, CSS und JavaScript spezifiziert wird.

Dieser Schlüssel wird in Manifest V3-Erweiterungen durch [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) ersetzt.

Sie müssen diesen Schlüssel angeben, um einen Browser-Toolbar-Button in Ihrer Erweiterung einzuschließen. Wenn er angegeben ist, können Sie den Button programmatisch mit der {{WebExtAPIRef("browserAction")}} API manipulieren.

Wenn Sie ein Popup bereitstellen, wird das Popup geöffnet, wenn der Benutzer auf den Button klickt, und Ihr JavaScript, das im Popup läuft, kann die Benutzerinteraktion damit handhaben. Wenn Sie kein Popup bereitstellen, wird ein Klickereignis an die [Hintergrund-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) Ihrer Erweiterung gesendet, wenn der Benutzer auf den Button klickt.

## Syntax

Der `browser_action`-Schlüssel ist ein Objekt, das alle der folgenden optionalen Eigenschaften haben kann:

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
            Setzen Sie <code>browser_style</code> nicht auf true: Es wird in Manifest V3 nicht unterstützt, beginnend mit Firefox 118. Siehe <a href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration">Manifest V3 Migration für <code>browser_style</code></a>.
          </p>
        </div>
        <p>
          In Firefox kann das Stylesheet unter
          chrome://browser/content/extension.css oder
          chrome://browser/content/extension-mac.css auf macOS eingesehen werden. Beim Festlegen
          von Dimensionen beachten Sie, dass dieses Stylesheet
          <code>box-sizing: border-box</code> setzt (siehe
          <a href="/de/docs/Web/CSS/Reference/Properties/box-sizing">box-sizing</a>).
        </p>
        <p>
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles"
            >Browser-Stile</a
          > beschreibt die Klassen, die Sie auf Elemente im Popup anwenden können,
          um bestimmte Stile zu erhalten.
        </p>
        <p>
          Die
          <a
            href="https://github.com/mdn/webextensions-examples/tree/main/latest-download"
            >latest-download</a
          > Beispielerweiterung verwendet <code>browser_style</code> in ihrem Popup.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Das Setzen von <code>browser_style</code> auf
            <code>true</code> verhindert, dass Benutzer Text im Popup oder in den Seiteninhalten einer
            Erweiterung auswählen können. Dies ist normales Verhalten. Sie können
            keine Teile der Benutzeroberfläche im Browser auswählen. Sie können jedoch
            diese Einschränkung umgehen, indem Sie Ihren Benutzern das Auswählen
            von Text auf zwei Arten ermöglichen:
          </p>
          <ol>
            <li>Setzen Sie <code>browser_style</code> auf <code>false</code>.</li>
            <li>
              Verwenden Sie CSS-Styling im Body Ihrer Sidebar oder des Popup-HTMLs,
              um die Textauswahl zu ermöglichen, indem Sie die Regel
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
            "navbar": Der Button wird in der Haupt-Symbolleiste des Browsers platziert, neben der URL-Leiste.
          </li>
          <li>"menupanel": Der Button wird in einem Popup-Panel platziert.</li>
          <li>
            "tabstrip": Der Button wird in der Symbolleiste platziert, die die Browser-Tabs enthält.
          </li>
          <li>
            "personaltoolbar": Der Button wird in der Lesezeichen-Symbolleiste platziert.
          </li>
        </ul>
        <p>Diese Eigenschaft wird nur in Firefox unterstützt.</p>
        <p>Diese Eigenschaft ist optional und hat "menupanel" als Standardwert.</p>
        <p>
          Firefox merkt sich die <code>default_area</code>-Einstellung einer
          Erweiterung, selbst wenn diese deinstalliert und anschließend
          neu installiert wird. Um den Browser dazu zu zwingen, einen neuen Wert für
          <code>default_area</code> zu berücksichtigen, muss die ID der Erweiterung geändert werden.
        </p>
        <p>
          Eine Erweiterung kann die Position des Buttons nach der Installation
          nicht ändern, aber der Benutzer kann möglicherweise den Button mit
          dem integrierten UI-Anpassungsmechanismus des Browsers verschieben.
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
          Icons werden als relative URLs zur manifest.json-Datei selbst angegeben.
        </p>
        <p>Sie können eine einzelne Icon-Datei angeben, indem Sie hier einen String angeben:</p>
        <pre class="brush: json">"default_icon": "path/to/geo.svg"</pre>
        <p>
          Um mehrere Icons in verschiedenen Größen anzugeben, geben Sie hier ein Objekt an.
          Der Name jeder Eigenschaft ist die Höhe des Icons in Pixeln und muss in eine Ganzzahl konvertierbar sein. Der Wert ist die URL. Zum Beispiel:
        </p>
        <pre class="brush: json">
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png"
    }</pre
        >
        <p>
          Sie können nicht mehrere Icons in denselben Größen angeben.<br /><br />Siehe
          <a
            href="#choosing_icon_sizes"
            >Auswahl von Icon-Größen</a
          > für weitere Hinweise dazu.
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
            ><a href="/de/docs/Web/HTML/Reference/Elements/link">&#x3C;link></a></code
          >
          und
          <code
            ><a href="/de/docs/Web/HTML/Reference/Elements/script"
              >&#x3C;script></a
            ></code
          >
          Elementen einbinden, genau wie eine normale Webseite. Allerdings muss
          <code
            ><a href="/de/docs/Web/HTML/Reference/Elements/script"
              >&#x3C;script>
            </a></code
          > das
          <code><a href="/de/docs/Web/HTML/Reference/Elements/script">src</a></code>-Attribut haben, um eine Datei zu laden. Verwenden Sie kein
          <code
            ><a href="/de/docs/Web/HTML/Reference/Elements/script"
              >&#x3C;script></a
            ></code
          >
          mit eingebettetem Code, da dies zu einer verwirrenden Content Violation
          Policy-Fehlermeldung führt.
        </p>
        <p>
          Anders als bei einer normalen Webseite kann das JavaScript, das im Popup läuft,
          auf alle
          <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API"
            >WebExtension-APIs</a
          >
          zugreifen (vorausgesetzt, die Erweiterung besitzt die entsprechenden
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
          Tooltip für den Button, der angezeigt wird, wenn der Benutzer die Maus darüber bewegt. Wenn der Button zum Menüpanel des Browsers hinzugefügt wird, wird dies auch unter dem App-Icon angezeigt.
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
          Diese Eigenschaft ermöglicht es Ihnen, je nach Erkennung von dunklem oder hellem Text im Theme, unterschiedliche Icons für Themes anzugeben.
        </p>
        <p>
          Wenn diese Eigenschaft vorhanden ist, handelt es sich um ein Array, das mindestens ein
          <code>ThemeIcons</code>-Objekt enthält. Ein <code>ThemeIcons</code>-Objekt
          enthält drei erforderliche Eigenschaften:
        </p>
        <dl>
          <dt><code>"dark"</code></dt>
          <dd>
            Eine URL, die auf ein Icon zeigt. Dieses Icon wird angezeigt, wenn ein Theme verwendet wird, das dunklen Text verwendet (wie das Firefox Light Theme und das Standard-Theme, wenn kein default_icon angegeben ist).
          </dd>
          <dt><code>"light"</code></dt>
          <dd>
            Eine URL, die auf ein Icon zeigt. Dieses Icon wird angezeigt, wenn ein Theme verwendet wird, das hellen Text verwendet (wie das Firefox Dark Theme).
          </dd>
          <dt><code>"size"</code></dt>
          <dd>Die Größe der beiden Icons in Pixeln.</dd>
        </dl>
        <p>Icons werden als relative URLs zur manifest.json-Datei angegeben.</p>
        <p>
          Sie sollten 16x16 und 32x32 (für Retina-Displays)
          <code>ThemeIcons</code> bereitstellen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Auswahl von Icon-Größen

Das Icon für die Browser-Aktion muss möglicherweise in verschiedenen Größen in verschiedenen Kontexten angezeigt werden:

- Das Icon wird in der Browser-Symbolleiste angezeigt. Ältere Versionen von Firefox unterstützten die Möglichkeit, das Icon im Menüpanel des Browsers zu platzieren (das Panel, das geöffnet wird, wenn der Benutzer auf das "Hamburger"-Icon klickt). In diesen Versionen von Firefox war das Icon im Menüpanel größer als in der Symbolleiste.
- Auf einem hochauflösenden Display wie einem Retina-Bildschirm müssen die Icons doppelt so groß sein.

Wenn der Browser in einer bestimmten Situation kein Icon der richtigen Größe findet, wählt er die beste Übereinstimmung und skaliert es. Skalierung kann dazu führen, dass das Icon unscharf erscheint, daher ist es wichtig, die Icon-Größen sorgfältig auszuwählen.

Es gibt zwei Hauptansätze dafür. Sie können ein einzelnes Icon als SVG-Datei bereitstellen, und es wird korrekt skaliert:

```json
"default_icon": "path/to/geo.svg"
```

Alternativ können Sie mehrere Icons in verschiedenen Größen bereitstellen, und der Browser wählt die beste Übereinstimmung aus.

In Firefox:

- Die Standardhöhe und -breite für Icons in der Symbolleiste beträgt 16 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).
- Die Standardhöhe und -breite für Icons im Menüpanel beträgt 32 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

Sie können also Icons bereitstellen, die genau passen, sowohl auf normalen als auch auf Retina-Displays, indem Sie drei Icon-Dateien bereitstellen und sie so angeben:

```json
"default_icon": {
  "16": "path/to/geo-16.png",
  "32": "path/to/geo-32.png",
  "64": "path/to/geo-64.png"
}
```

Wenn Firefox keine genaue Übereinstimmung der gewünschten Größe findet, wählt es das kleinste angegebene Icon, das größer ist als die ideale Größe. Wenn alle Icons kleiner als die ideale Größe sind, wählt es das größte angegebene Icon.

## Beispiel

```json
"browser_action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  }
}
```

Eine Browser-Aktion mit nur einem Icon, in 2 verschiedenen Größen spezifiziert. Die Hintergrundskripte der Erweiterung können Klickereignisse empfangen, wenn der Benutzer auf das Icon klickt, indem sie Code wie diesen verwenden:

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

Für eine einfache, aber vollständige Erweiterung, die eine Browser-Aktion verwendet, siehe das [Schritt-für-Schritt-Tutorial](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)
- [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [Browser-Stile](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
