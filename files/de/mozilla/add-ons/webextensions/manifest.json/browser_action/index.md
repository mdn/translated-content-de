---
title: browser_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_action
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
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

Eine Browser-Aktion ist ein Button, den Ihre Erweiterung zur Toolbar des Browsers hinzufügt. Der Button hat ein Icon und kann optional ein Popup haben, dessen Inhalt mittels HTML, CSS und JavaScript festgelegt wird.

Dieser Schlüssel wird in Manifest V3-Erweiterungen durch [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) ersetzt.

Sie müssen diesen Schlüssel angeben, um einen Button in der Browser-Toolbar in Ihre Erweiterung einzufügen. Wenn er angegeben ist, können Sie den Button programmatisch über die {{WebExtAPIRef("browserAction")}} API manipulieren.

Wenn Sie ein Popup bereitstellen, öffnet sich dieses, wenn der Benutzer auf den Button klickt, und Ihr JavaScript, das im Popup ausgeführt wird, kann die Benutzerinteraktion damit steuern. Wenn Sie kein Popup bereitstellen, wird ein Klick-Ereignis an die [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) Ihrer Erweiterung gesendet, wenn der Benutzer auf den Button klickt.

## Syntax

Der Schlüssel `browser_action` ist ein Objekt, das eine der folgenden, alle optionalen, Eigenschaften haben kann:

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
            Setzen Sie <code>browser_style</code> nicht auf true: Ab Firefox 118 wird dies in Manifest V3 nicht unterstützt. Siehe <a href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration">Manifest V3-Migration für <code>browser_style</code></a>.
          </p>
        </div>
        <p>
          In Firefox kann das Stylesheet unter
          chrome://browser/content/extension.css oder
          chrome://browser/content/extension-mac.css auf macOS eingesehen werden. Beachten Sie beim Festlegen von Dimensionen, dass dieses Stylesheet
          <code>box-sizing: border-box</code> setzt (siehe
          <a href="/de/docs/Web/CSS/box-sizing">box-sizing</a>).
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
          >
          Beispiel-Erweiterung verwendet <code>browser_style</code> in ihrem Popup.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Wenn Sie <code>browser_style</code> auf
            <code>true</code> setzen, können Benutzer keinen Text im Popup oder in den Seitenleisteninhalten der Erweiterung auswählen. Dies ist ein normales Verhalten. Sie können keine Teile der Benutzeroberfläche im Browser auswählen. Sie können jedoch diese Einschränkung umgehen, indem Sie Ihren Benutzern das Auswählen von Text auf zwei Arten ermöglichen:
          </p>
          <ol>
            <li>Setzen Sie <code>browser_style</code> auf <code>false</code>.</li>
            <li>
              Verwenden Sie CSS-Styling für den Body Ihres Sidebars oder des HTML-Popups, um Textauswahl zu ermöglichen, indem Sie die Regel
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
          Definiert den Teil des Browsers, in dem der Button zunächst platziert wird. Dies ist ein String, der einen der vier Werte annehmen kann:
        </p>
        <ul>
          <li>
            "navbar": Der Button wird in der Haupt-Browser-Toolbar neben der URL-Leiste platziert.
          </li>
          <li>"menupanel": Der Button wird in einem Popup-Panel platziert.</li>
          <li>
            "tabstrip": Der Button wird in der Toolbar platziert, die die Browser-Tabs enthält.
          </li>
          <li>
            "personaltoolbar": Der Button wird in der Lesezeichen-Toolbar platziert.
          </li>
        </ul>
        <p>Diese Eigenschaft wird nur in Firefox unterstützt.</p>
        <p>Diese Eigenschaft ist optional und hat standardmäßig den Wert "menupanel".</p>
        <p>
          Firefox speichert die <code>default_area</code>-Einstellung für eine
          Erweiterung, selbst wenn diese deinstalliert und später wieder
          installiert wird. Um den Browser zu zwingen, einen neuen Wert für
          <code>default_area</code> anzuerkennen, muss die ID der Erweiterung
          geändert werden.
        </p>
        <p>
          Eine Erweiterung kann den Standort des Buttons nach der Installation
          nicht ändern, aber der Benutzer kann den Button möglicherweise über
          den eingebauten UI-Anpassungsmechanismus des Browsers verschieben.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_icon</code>
      <br />{{optional_inline}}</td>
      <td><code>Object</code> oder <code>String</code></td>
      <td>
        <p>
          Verwenden Sie dies, um ein oder mehrere Icons für die Browser-Aktion anzugeben. Das Icon wird standardmäßig in der Browser-Toolbar angezeigt.
        </p>
        <p>
          Icons werden als URLs angegeben, die relativ zur manifest.json-Datei selbst sind.
        </p>
        <p>Sie können eine einzelne Icon-Datei angeben, indem Sie hier einen String bereitstellen:</p>
        <pre class="brush: json">"default_icon": "path/to/geo.svg"</pre>
        <p>
          Um mehrere Icons in verschiedenen Größen anzugeben, geben Sie hier ein Objekt an. Der Name jeder Eigenschaft ist die Höhe des Icons in Pixel und muss in einen Integer umwandelbar sein. Der Wert ist die URL. Zum Beispiel:
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
          Die HTML-Datei kann CSS- und JavaScript-Dateien einbinden mit
          <code
            ><a href="/de/docs/Web/HTML/Reference/Elements/link">&#x3C;link></a></code
          >
          und
          <code
            ><a href="/de/docs/Web/HTML/Reference/Elements/script"
              >&#x3C;script></a
            ></code
          >
          Elementen, genau wie eine normale Webseite. Jedoch muss
          <code
            ><a href="/de/docs/Web/HTML/Reference/Elements/script"
              >&#x3C;script>
            </a></code
          > das
          <code><a href="/de/docs/Web/HTML/Reference/Elements/script">src</a></code>
          Attribut haben, um eine Datei zu laden. Verwenden Sie kein
          <code
            ><a href="/de/docs/Web/HTML/Reference/Elements/script"
              >&#x3C;script></a
            ></code
          >
          mit eingebettetem Code, weil Sie sonst einen verwirrenden Content Security Policy-Fehler erhalten.
        </p>
        <p>
          Im Gegensatz zu einer normalen Webseite kann JavaScript, das im Popup läuft, auf alle
          <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API"
            >WebExtension-APIs</a
          >
          zugreifen (natürlich vorausgesetzt, dass die Erweiterung die entsprechenden
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions"
            >Berechtigungen</a
          >
          hat).
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
          Tooltip für den Button, der angezeigt wird, wenn der Benutzer mit der Maus über den Button fährt. Wenn der Button zum Menü-Panel des Browsers hinzugefügt wird, wird dieser Tooltip auch unter dem App-Icon angezeigt.
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
          Diese Eigenschaft erlaubt es Ihnen, verschiedene Icons für Themes anzugeben, je nachdem, ob Firefox erkennt, dass das Theme dunklen oder hellen Text verwendet.
        </p>
        <p>
          Wenn diese Eigenschaft vorhanden ist, handelt es sich um ein Array, das mindestens ein
          <code>ThemeIcons</code>-Objekt enthält. Ein <code>ThemeIcons</code>-Objekt enthält drei zwingende Eigenschaften:
        </p>
        <dl>
          <dt><code>"dark"</code></dt>
          <dd>
            Eine URL, die auf ein Icon verweist. Dieses Icon wird angezeigt, wenn ein Theme mit dunklem Text aktiv ist (wie das Firefox Light-Theme und das Standardtheme, wenn kein default_icon angegeben ist).
          </dd>
          <dt><code>"light"</code></dt>
          <dd>
            Eine URL, die auf ein Icon verweist. Dieses Icon wird angezeigt, wenn ein Theme mit hellem Text aktiv ist (wie das Firefox Dark-Theme).
          </dd>
          <dt><code>"size"</code></dt>
          <dd>Die Größe der beiden Icons in Pixel.</dd>
        </dl>
        <p>Icons werden als URLs angegeben, die relativ zur manifest.json-Datei sind.</p>
        <p>
          Sie sollten 16x16 und 32x32 (für Retina-Displays)
          <code>ThemeIcons</code> bereitstellen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Wahl der Icon-Größen

Das Icon der Browser-Aktion muss möglicherweise in verschiedenen Größen in unterschiedlichen Kontexten angezeigt werden:

- Das Icon wird in der Browser-Toolbar angezeigt. Ältere Versionen von Firefox unterstützten die Option, das Icon im Menü-Panel des Browsers zu platzieren (das Panel, das sich öffnet, wenn der Benutzer auf das "Hamburger"-Icon klickt). In diesen Versionen von Firefox war das Icon im Menü-Panel größer als das Icon in der Toolbar.
- Auf einem hochauflösenden Display wie einem Retina-Bildschirm müssen Icons doppelt so groß sein.

Wenn der Browser kein Icon in der richtigen Größe in einer bestimmten Situation finden kann, wählt er den am besten passenden und skaliert ihn. Skalierung kann dazu führen, dass das Icon verschwommen aussieht, daher ist es wichtig, die Icon-Größen sorgfältig auszuwählen.

Es gibt zwei Hauptansätze dafür. Sie können ein einzelnes Icon als SVG-Datei bereitstellen, das dann korrekt skaliert wird:

```json
"default_icon": "path/to/geo.svg"
```

Alternativ können Sie mehrere Icons in unterschiedlichen Größen bereitstellen, und der Browser wird den am besten passenden auswählen.

In Firefox:

- Die Standardhöhe und -breite für Icons in der Toolbar ist 16 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).
- Die Standardhöhe und -breite für Icons im Menü-Panel ist 32 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

So können Sie Icons bereitstellen, die auf normalen und Retina-Displays genau passen, indem Sie drei Icon-Dateien bereitstellen und sie so angeben:

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

Eine Browser-Aktion nur mit einem Icon, das in 2 verschiedenen Größen angegeben ist. Die Hintergrundskripte der Erweiterung können Klick-Ereignisse empfangen, wenn der Benutzer auf das Icon klickt, mit Code wie diesem:

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
