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
      <th scope="row">Type</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
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

Eine Browser-Aktion ist eine Schaltfläche, die Ihre Erweiterung zur Symbolleiste des Browsers hinzufügt. Die Schaltfläche hat ein Symbol und kann optional ein Popup haben, dessen Inhalt mit HTML, CSS und JavaScript angegeben wird.

Dieser Schlüssel wird in Manifest V3-Erweiterungen durch [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) ersetzt.

Sie müssen diesen Schlüssel angeben, um eine Browser-Symbolleistenschaltfläche in Ihre Erweiterung aufzunehmen. Wenn angegeben, können Sie die Schaltfläche programmatisch mit der {{WebExtAPIRef("browserAction")}} API manipulieren.

Wenn Sie ein Popup angeben, wird dieses geöffnet, wenn der Benutzer die Schaltfläche anklickt, und Ihr JavaScript, das im Popup ausgeführt wird, kann mit der Benutzerinteraktion umgehen. Wenn Sie kein Popup angeben, wird beim Klick des Benutzers auf die Schaltfläche ein Klickereignis an die [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) Ihrer Erweiterung übertragen.

## Syntax

Der `browser_action`-Schlüssel ist ein Objekt, das eine oder alle der folgenden Eigenschaften haben kann, alle optional:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
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
        <p>Optional, standardmäßig <code>false</code>.</p>
        <div class="notecard warning">
          <p>
            Setzen Sie <code>browser_style</code> nicht auf true: es wird in Manifest V3 nicht unterstützt, beginnend mit Firefox 118. Siehe <a href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration">Manifest V3 Migration für <code>browser_style</code></a>.
          </p>
        </div>
        <p>
          In Firefox ist das Stylesheet zu finden unter
          chrome://browser/content/extension.css oder
          chrome://browser/content/extension-mac.css auf macOS. Beim Festlegen
          von Dimensionen beachten Sie, dass dieses Stylesheet
          <code>box-sizing: border-box</code> setzt (siehe
          <a href="/de/docs/Web/CSS/box-sizing">box-sizing</a>).
        </p>
        <p>
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles"
            >Browserstile</a
          > beschreibt die Klassen, die Sie auf Elemente im Popup anwenden
          können, um bestimmte Stile zu erhalten.
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
            <code>true</code> verhindert, dass Benutzer Text im Popup- oder
            Seitenleisteninhalt einer Erweiterung auswählen. Dies ist normales Verhalten. Man kann keine Teile der Benutzeroberfläche im Browser auswählen. Sie können jedoch diese Einschränkung umgehen, um Ihren Benutzern das Auswählen von Text zu ermöglichen, auf zwei Arten:
          </p>
          <ol>
            <li>Setzen Sie <code>browser_style</code> auf <code>false</code>.</li>
            <li>
              Verwenden Sie CSS-Styling für den Body des HTML Ihrer Seitenleiste oder Ihres Popups, um die Textauswahl zu erlauben, indem Sie die Regel
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
          Definiert den Teil des Browsers, in dem die Schaltfläche zunächst platziert wird. Dies ist ein String, der einen von vier Werten annehmen kann:
        </p>
        <ul>
          <li>
            "navbar": Die Schaltfläche wird in der Hauptsymbolleiste des Browsers platziert, neben der URL-Leiste.
          </li>
          <li>"menupanel": Die Schaltfläche wird in einem Popup-Panel platziert.</li>
          <li>
            "tabstrip": Die Schaltfläche wird in der Symbolleiste platziert, die die Browser-Tabs enthält.
          </li>
          <li>
            "personaltoolbar": Die Schaltfläche wird in der Lesezeichen-Symbolleiste platziert.
          </li>
        </ul>
        <p>Diese Eigenschaft wird nur in Firefox unterstützt.</p>
        <p>Diese Eigenschaft ist optional und hat standardmäßig den Wert "menupanel".</p>
        <p>
          Firefox merkt sich die <code>default_area</code> Einstellung für eine
          Erweiterung, selbst wenn diese Erweiterung deinstalliert und anschließend
          neu installiert wird. Um den Browser zu zwingen, einen neuen Wert für
          <code>default_area</code> anzuerkennen, muss die ID der Erweiterung geändert werden.
        </p>
        <p>
          Eine Erweiterung kann den Standort der Schaltfläche nach der Installation
          nicht ändern, aber der Benutzer kann möglicherweise die Schaltfläche über
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
          Verwenden Sie dies, um ein oder mehrere Symbole für die Browser-Aktion anzugeben. Das Symbol wird standardmäßig in der Symbolleiste des Browsers angezeigt.
        </p>
        <p>
          Symbole werden als URLs relativ zur manifest.json-Datei selbst angegeben.
        </p>
        <p>Sie können eine einzelne Symboldatei angeben, indem Sie hier einen String angeben:</p>
        <pre class="brush: json">"default_icon": "path/to/geo.svg"</pre>
        <p>
          Um mehrere Symbole in verschiedenen Größen anzugeben, geben Sie hier ein Objekt an.
          Der Name jeder Eigenschaft ist die Höhe des Symbols in Pixel und muss in eine ganze Zahl konvertierbar sein. Der Wert ist die URL. Zum Beispiel:
        </p>
        <pre class="brush: json">
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png"
    }</pre
        >
        <p>
          Sie können nicht mehrere Symbole gleicher Größe angeben.<br /><br />Siehe
          <a
            href="#choosing_icon_sizes"
            >Auswahl von Symbolgrößen</a
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
          Die HTML-Datei kann CSS- und JavaScript-Dateien enthalten, die durch
          <code
            ><a href="/de/docs/Web/HTML/Element/link">&#x3C;link></a></code
          >
          und
          <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script></a
            ></code
          >
          Elemente eingebunden werden, genau wie auf einer normalen Webseite. Jedoch muss
          <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script>
            </a></code
          >das
          <code><a href="/de/docs/Web/HTML/Element/script">src</a></code>
          Attribut haben, um eine Datei zu laden. Verwenden Sie nicht
          <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script></a
            ></code
          >
          mit eingebettetem Code, da Sie eine verwirrende Inhaltsverletzungsempfehlung erhalten.
        </p>
        <p>
          Anders als bei einer normalen Webseite kann JavaScript, das im Popup ausgeführt wird,
          auf alle
          <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API"
            >WebExtension APIs</a
          >
          zugreifen (vorbehaltlich, dass die Erweiterung die entsprechenden
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions"
            >Berechtigungen</a
          > hat).
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
          Tooltip für die Schaltfläche, das angezeigt wird, wenn der Benutzer den
          Mauszeiger darüber bewegt. Wenn die Schaltfläche zum Menüpanel des Browers
          hinzugefügt wird, wird dies auch unter dem Anwendungssymbol angezeigt.
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
          Diese Eigenschaft ermöglicht es Ihnen, für Themen unterschiedliche Symbole anzugeben, abhängig davon, ob Firefox erkennt, dass das Thema dunklen oder hellen Text verwendet.
        </p>
        <p>
          Wenn diese Eigenschaft vorhanden ist, handelt es sich um ein Array, das mindestens ein
          <code>ThemeIcons</code>-Objekt enthält. Ein <code>ThemeIcons</code>-Objekt
          enthält drei obligatorische Eigenschaften:
        </p>
        <dl>
          <dt><code>"dark"</code></dt>
          <dd>
            Eine URL, die auf ein Symbol verweist. Dieses Symbol wird angezeigt, wenn ein Thema mit dunklem Text aktiv ist (wie das Firefox Light-Thema und das Standardthema, wenn kein default_icon angegeben ist).
          </dd>
          <dt><code>"light"</code></dt>
          <dd>
            Eine URL, die auf ein Symbol verweist. Dieses Symbol wird angezeigt, wenn ein Thema mit hellem Text aktiv ist (wie das Firefox Dark-Thema).
          </dd>
          <dt><code>"size"</code></dt>
          <dd>Die Größe der beiden Symbole in Pixeln.</dd>
        </dl>
        <p>Symbole werden als URLs relativ zur manifest.json-Datei angegeben.</p>
        <p>
          Sie sollten 16x16 und 32x32 (für Retina-Displays)
          <code>ThemeIcons</code> bereitstellen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Auswahl von Symbolgrößen

Das Symbol der Browser-Aktion kann in verschiedenen Kontexten in unterschiedlichen Größen angezeigt werden müssen:

- Das Symbol wird in der Symbolleiste des Browsers angezeigt. Ältere Versionen von Firefox unterstützten die Möglichkeit, das Symbol im Menüpanel des Browsers zu platzieren (das Panel, das sich öffnet, wenn der Benutzer auf das "Hamburger"-Symbol klickt). In diesen Versionen von Firefox war das Symbol im Menüpanel größer als das Symbol in der Symbolleiste.
- Auf einem hochauflösenden Display wie einem Retina-Display müssen Symbole doppelt so groß sein.

Wenn der Browser in einer bestimmten Situation kein Symbol der richtigen Größe finden kann, wird die beste Übereinstimmung ausgewählt und skalieren. Skalieren kann das Symbol unscharf erscheinen lassen, daher ist es wichtig, die Symbolgrößen sorgfältig auszuwählen.

Es gibt zwei Hauptansätze dazu. Sie können eine einzelne Symboldatei als SVG-Datei bereitstellen, die korrekt skalieren wird:

```json
"default_icon": "path/to/geo.svg"
```

Alternativ können Sie mehrere Symbole in verschiedenen Größen bereitstellen, und der Browser wählt die beste Übereinstimmung aus.

In Firefox:

- Die Standardhöhe und -breite für Symbole in der Symbolleiste ist 16 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).
- Die Standardhöhe und -breite für Symbole im Menüpanel ist 32 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

Sie können also Symbole angeben, die sowohl auf normalen als auch auf Retina-Displays genau passen, indem Sie drei Symboldateien bereitstellen und diese wie folgt angeben:

```json
"default_icon": {
  "16": "path/to/geo-16.png",
  "32": "path/to/geo-32.png",
  "64": "path/to/geo-64.png"
}
```

Wenn Firefox keine exakte Übereinstimmung für die gewünschte Größe finden kann, wird das kleinste angegebene Symbol ausgewählt, das größer als die ideale Größe ist. Wenn alle Symbole kleiner sind als die ideale Größe, wird das größte angegebene Symbol ausgewählt.

## Beispiel

```json
"browser_action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  }
}
```

Eine Browser-Aktion mit nur einem Symbol, das in 2 verschiedenen Größen angegeben wurde. Die Hintergrundskripte der Erweiterung können Klick-Ereignisse empfangen, wenn der Benutzer das Symbol anklickt, unter Verwendung von Code wie diesem:

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

Eine Browser-Aktion mit einem Symbol, einem Titel und einem Popup. Das Popup wird angezeigt, wenn der Benutzer auf die Schaltfläche klickt.

Für eine einfache, aber vollständige Erweiterung, die eine Browser-Aktion verwendet, siehe das [Schritt-für-Schritt-Tutorial](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension).

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)
- [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [Browserstile](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
