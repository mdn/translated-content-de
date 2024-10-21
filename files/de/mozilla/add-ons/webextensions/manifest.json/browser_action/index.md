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
      <th scope="row">Erforderlich</th>
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

Eine Browser-Aktion ist eine Schaltfläche, die Ihre Erweiterung zur Symbolleiste des Browsers hinzufügt. Die Schaltfläche hat ein Symbol und kann optional ein Popup haben, dessen Inhalt mit HTML, CSS und JavaScript festgelegt wird.

Dieser Schlüssel wird in Manifest V3-Erweiterungen durch [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) ersetzt.

Sie müssen diesen Schlüssel angeben, um eine Schaltfläche zur Browser-Symbolleiste Ihrer Erweiterung hinzuzufügen. Wenn Sie ihn angeben, können Sie die Schaltfläche programmatisch mit der {{WebExtAPIRef("browserAction")}}-API manipulieren.

Wenn Sie ein Popup bereitstellen, wird das Popup geöffnet, wenn der Benutzer auf die Schaltfläche klickt, und Ihr JavaScript, das im Popup ausgeführt wird, kann die Benutzerinteraktion mit diesem steuern. Wenn Sie kein Popup bereitstellen, wird beim Klicken auf die Schaltfläche ein Klickereignis an die [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) Ihrer Erweiterung gesendet.

## Syntax

Der Schlüssel `browser_action` ist ein Objekt, das jede der folgenden Eigenschaften enthalten kann, alle optional:

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
            Setzen Sie <code>browser_style</code> nicht auf true: dies wird in Manifest V3, beginnend mit Firefox 118, nicht unterstützt. Siehe <a href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration">Manifest V3-Migration für <code>browser_style</code></a>.
          </p>
        </div>
        <p>
          In Firefox kann das Stylesheet unter
          chrome://browser/content/extension.css oder
          chrome://browser/content/extension-mac.css auf macOS angesehen werden. Wenn Sie
          Dimensionen festlegen, beachten Sie, dass dieses Stylesheet
          <code>box-sizing: border-box</code> anwendet (siehe
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
          Beispielerweiterung verwendet <code>browser_style</code> in ihrem Popup.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Das Setzen von <code>browser_style</code> auf
            <code>true</code> verhindert, dass Benutzer Text in einem Popup oder
            Seitenleisteninhalt einer Erweiterung auswählen. Dies ist normales Verhalten. Teile der Benutzeroberfläche im Browser können nicht ausgewählt werden. Es gibt jedoch zwei Möglichkeiten, um dieses Limit zu umgehen und es Ihren Benutzern zu ermöglichen, Text auszuwählen:
          </p>
          <ol>
            <li>Legen Sie <code>browser_style</code> auf <code>false</code> fest.</li>
            <li>
              Verwenden Sie CSS-Styling im Body Ihrer Seitenleiste oder des HTML-Popups, um die Textauswahl zu erlauben, indem Sie die Regel
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
            "navbar": Die Schaltfläche wird in der Haupt-Symbolleiste des Browsers neben der URL-Leiste platziert.
          </li>
          <li>"menupanel": Die Schaltfläche wird in einem Popup-Panel platziert.</li>
          <li>
            "tabstrip": Die Schaltfläche wird in der Symbolleiste platziert, die Zeilen des Browsers enthält.
          </li>
          <li>
            "personaltoolbar": Die Schaltfläche wird in der Lesezeichen-Symbolleiste platziert.
          </li>
        </ul>
        <p>Diese Eigenschaft wird nur in Firefox unterstützt.</p>
        <p>Diese Eigenschaft ist optional und hat als Standardwert "menupanel".</p>
        <p>
          Firefox merkt sich die Einstellung <code>default_area</code> für eine
          Erweiterung, auch wenn diese Erweiterung deinstalliert und später erneut
          installiert wurde. Um einen neuen Wert für <code>default_area</code>
          zu erzwingen, muss die ID der Erweiterung geändert werden.
        </p>
        <p>
          Eine Erweiterung kann den Ort der Schaltfläche nach der Installation nicht ändern, aber der Benutzer kann möglicherweise die Schaltfläche mit dem integrierten UI-Anpassungsmechanismus des Browsers verschieben.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_icon</code>
      <br />{{optional_inline}}</td>
      <td><code>Object</code> oder <code>String</code></td>
      <td>
        <p>
          Verwenden Sie dies, um ein oder mehrere Symbole für die Browser-Aktion anzugeben. Das Symbol wird standardmäßig in der Browser-Symbolleiste angezeigt.
        </p>
        <p>
          Symbole werden als URLs angegeben, die relativ zur manifest.json-Datei selbst sind.
        </p>
        <p>Sie können eine einzelne Symboldatei angeben, indem Sie hier einen String angeben:</p>
        <pre class="brush: json">"default_icon": "path/to/geo.svg"</pre>
        <p>
          Um mehrere Symbole in verschiedenen Größen anzugeben, geben Sie hier ein Objekt an. Der Name jeder Eigenschaft ist die Höhe des Symbols in Pixeln und muss in einen Ganzzahl umwandelbar sein. Der Wert ist die URL. Beispiel:
        </p>
        <pre class="brush: json">
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png"
    }</pre
        >
        <p>
          Sie dürfen nicht mehrere Symbole mit denselben Größen spezifizieren.<br /><br />Siehe
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
          Die HTML-Datei kann CSS- und JavaScript-Dateien enthalten, indem
          <code
            ><a href="/de/docs/Web/HTML/Element/link">&#x3C;link></a></code
          >
          und
          <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script></a
            ></code
          >
          Elemente verwendet werden, genau wie bei einer normalen Webseite. Allerdings
          muss <code
            ><a href="/de/docs/Web/HTML/Element/script">src</a></code
          >
          Attribut gesetzt sein, um eine Datei zu laden. Verwenden Sie nicht
          <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script></a
            ></code
          >
          mit eingebettetem Code, da Sie sonst einen verwirrenden Content Violation
          Policy-Fehler erhalten.
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
          Tooltip für die Schaltfläche, das angezeigt wird, wenn der Benutzer mit der Maus darüber fährt. Wenn die Schaltfläche dem Menü-Panel des Browsers hinzugefügt wird, wird dies auch unter dem App-Symbol angezeigt.
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
          Diese Eigenschaft ermöglicht es Ihnen, verschiedene Symbole für Themen anzugeben, je nachdem, ob Firefox erkennt, dass das Thema dunklen oder hellen Text verwendet.
        </p>
        <p>
          Wenn diese Eigenschaft vorhanden ist, ist sie ein Array, das mindestens ein
          <code>ThemeIcons</code>-Objekt enthält. Ein <code>ThemeIcons</code>-Objekt
          enthält drei obligatorische Eigenschaften:
        </p>
        <dl>
          <dt><code>"dark"</code></dt>
          <dd>
            Eine URL, die zu einem Symbol zeigt. Dieses Symbol wird angezeigt, wenn ein Thema mit dunklem Text aktiv ist (wie das Firefox Light-Theme und das Standardthema, wenn kein default_icon angegeben ist).
          </dd>
          <dt><code>"light"</code></dt>
          <dd>
            Eine URL, die zu einem Symbol zeigt. Dieses Symbol wird angezeigt, wenn ein Thema mit hellem Text aktiv ist (wie das Firefox Dark-Theme).
          </dd>
          <dt><code>"size"</code></dt>
          <dd>Die Größe der beiden Symbole in Pixeln.</dd>
        </dl>
        <p>Symbole werden als URLs angegeben, die relativ zur manifest.json-Datei sind.</p>
        <p>
          Sie sollten 16x16 und 32x32 (für Retina-Display)
          <code>ThemeIcons</code> bereitstellen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Auswahl von Symbolgrößen

Das Symbol der Browser-Aktion muss möglicherweise in unterschiedlichen Größen in verschiedenen Kontexten angezeigt werden:

- Das Symbol wird in der Symbolleiste des Browsers angezeigt. Ältere Versionen von Firefox unterstützten die Option, das Symbol im Menü-Panel des Browsers (dem Panel, das geöffnet wird, wenn der Benutzer auf das "Hamburger"-Symbol klickt) zu platzieren. In diesen Versionen von Firefox war das Symbol im Menü-Panel größer als das Symbol in der Symbolleiste.
- Auf einem hochauflösenden Display wie einem Retina-Bildschirm müssen Symbole doppelt so groß sein.

Wenn der Browser kein Symbol der richtigen Größe in einer bestimmten Situation findet, wählt er die beste Übereinstimmung und skaliert es. Skalierung kann das Symbol unscharf erscheinen lassen, daher ist es wichtig, Symbolgrößen sorgfältig zu wählen.

Dafür gibt es zwei Hauptansätze. Sie können ein einzelnes Symbol als SVG-Datei bereitstellen, und es wird korrekt skaliert:

```json
"default_icon": "path/to/geo.svg"
```

Alternativ können Sie mehrere Symbole in verschiedenen Größen bereitstellen, und der Browser wählt die beste Übereinstimmung.

In Firefox:

- Die Standardhöhe und -breite für Symbole in der Symbolleiste ist 16 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).
- Die Standardhöhe und -breite für Symbole im Menü-Panel ist 32 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

So können Sie Symbole angeben, die genau passen, sowohl auf normalen als auch auf Retina-Displays, indem Sie drei Symboldateien bereitstellen und sie wie folgt angeben:

```json
"default_icon": {
  "16": "path/to/geo-16.png",
  "32": "path/to/geo-32.png",
  "64": "path/to/geo-64.png"
}
```

Wenn Firefox keine genaue Übereinstimmung für die gewünschte Größe findet, wird es das kleinste angegebene Symbol auswählen, das größer als die ideale Größe ist. Sind alle Symbole kleiner als die ideale Größe, wählt es das größte angegebene Symbol.

## Beispiel

```json
"browser_action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  }
}
```

Eine Browser-Aktion mit nur einem Symbol, angegeben in 2 verschiedenen Größen. Die Hintergrundskripte der Erweiterung können Klickereignisse empfangen, wenn der Benutzer auf das Symbol klickt, mit Code wie diesem:

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

Für eine einfache, aber vollständige Erweiterung, die eine Browser-Aktion verwendet, siehe die [schrittweise Anleitung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)
- [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [Browser-Stile](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
