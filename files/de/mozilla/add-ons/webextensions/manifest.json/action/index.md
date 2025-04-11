---
title: action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/action
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

Eine Aktion ist eine Schaltfläche, die Ihre Erweiterung zur Symbolleiste des Browsers hinzufügt. Die Schaltfläche hat ein Symbol und kann optional ein Popup haben, dessen Inhalt mit HTML, CSS und JavaScript spezifiziert wird.

Dieser Schlüssel ersetzt [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) in Manifest V3-Erweiterungen.

Sie müssen diesen Schlüssel angeben, um eine Schaltfläche in der Browser-Symbolleiste in Ihre Erweiterung aufzunehmen. Sobald er angegeben ist, können Sie die Schaltfläche programmgesteuert mit der {{WebExtAPIRef("action")}} API manipulieren.

Wenn Sie ein Popup bereitstellen, wird dieses geöffnet, wenn der Benutzer auf die Schaltfläche klickt, und Ihr JavaScript, das im Popup läuft, kann mit der Interaktion des Benutzers umgehen. Wenn Sie kein Popup bereitstellen, wird beim Klicken auf die Schaltfläche ein Klick-Ereignis an die [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) Ihrer Erweiterung gesendet.

## Syntax

Der `action` Schlüssel ist ein Objekt, das jede dieser Eigenschaften aufweisen kann, die alle optional sind:

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
            Setzen Sie <code>browser_style</code> nicht auf true: Die Unterstützung dafür wurde in Manifest V3 in Firefox 118 entfernt. Siehe <a href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration">Manifest V3 Migration für <code>browser_style</code></a>.
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
          Definiert den Teil des Browsers, in dem die Schaltfläche zunächst platziert wird. Dies ist ein String, der einen von vier Werten annehmen kann:
        </p>
        <ul>
          <li>
            "navbar": die Schaltfläche wird in der Haupt-Symbolleiste des Browsers, neben der URL-Leiste, platziert.
          </li>
          <li>"menupanel": die Schaltfläche wird in einem Popup-Panel platziert.</li>
          <li>
            "tabstrip": die Schaltfläche wird in der Symbolleiste platziert, die die Browser-Tabs enthält.
          </li>
          <li>
            "personaltoolbar": die Schaltfläche wird in der Lesezeichen-Symbolleiste platziert.
          </li>
        </ul>
        <p>Diese Eigenschaft wird nur in Firefox unterstützt.</p>
        <p>Diese Eigenschaft ist optional und hat standardmäßig den Wert "menupanel".</p>
        <p>
          Firefox merkt sich die <code>default_area</code>-Einstellung für eine
          Erweiterung, auch wenn diese Erweiterung deinstalliert und anschließend
          neu installiert wird. Um den Browser zu zwingen, einen neuen Wert für
          <code>default_area</code> anzuerkennen, muss die ID der Erweiterung geändert werden.
        </p>
        <p>
          Eine Erweiterung kann den Ort der Schaltfläche nicht ändern, nachdem sie installiert wurde, aber der Benutzer kann möglicherweise die Schaltfläche über den integrierten UI-Anpassungsmechanismus des Browsers verschieben.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_icon</code>
      <br />{{optional_inline}}</td>
      <td><code>Object</code> oder <code>String</code></td>
      <td>
        <p>
          Verwenden Sie dies, um ein oder mehrere Symbole für die Aktion anzugeben. Das Symbol
          wird standardmäßig in der Browser-Symbolleiste angezeigt.
        </p>
        <p>
          Symbole werden als URLs relativ zur manifest.json-Datei selbst angegeben.
        </p>
        <p>Sie können eine einzige Symboldatei angeben, indem Sie hier einen String angeben:</p>
        <pre class="brush: json">"default_icon": "path/to/geo.svg"</pre>
        <p>
          Um mehrere Symbole in verschiedenen Größen anzugeben, geben Sie hier ein Objekt an.
          Der Name jeder Eigenschaft ist die Höhe des Symbols in Pixeln und muss
          in einen Integer umwandelbar sein. Der Wert ist die URL. Zum Beispiel:
        </p>
        <pre class="brush: json">
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png"
    }</pre
        >
        <p>
          Sie können nicht mehrere Symbole mit denselben Größen angeben.<br /><br />Siehe
          <a href="#choosing_icon_sizes"
            >Auswahl von Symbolgrößen</a
          >
          für weitere Anleitung dazu.
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
          -Elementen einbinden, genau wie eine normale Webseite. Allerdings muss
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
          mit eingebettetem Code, da sonst ein verwirrender Fehler bei der Content Violation Policy auftritt.
        </p>
        <p>
          Anders als eine normale Webseite kann JavaScript, das im Popup läuft, auf
          alle
          <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API"
            >WebExtension APIs</a
          >
          zugreifen (natürlich vorbehaltlich, dass die Erweiterung über die entsprechenden
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions"
            >Berechtigungen</a
          > verfügt).
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
          Tooltip für die Schaltfläche, das angezeigt wird, wenn der Benutzer den Mauszeiger darüber bewegt. Wenn die Schaltfläche zum Menüpanel des Browsers hinzugefügt wird, wird dies auch unter dem App-Symbol angezeigt.
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
          Diese Eigenschaft ermöglicht es Ihnen, je nach Theme unterschiedliche Symbole
          anzugeben, abhängig davon, ob Firefox erkennt, dass das Theme dunklen oder hellen
          Text verwendet.
        </p>
        <p>
          Wenn diese Eigenschaft vorhanden ist, ist es ein Array, das mindestens ein
          <code>ThemeIcons</code> Objekt enthält. Ein <code>ThemeIcons</code> Objekt
          enthält drei verpflichtende Eigenschaften:
        </p>
        <dl>
          <dt><code>"dark"</code></dt>
          <dd>
            Eine URL, die auf ein Symbol zeigt. Dieses Symbol wird angezeigt, wenn ein
            Theme mit dunklem Text aktiv ist (wie z.B. das Firefox Light Theme, und das
            Standard-Theme, wenn kein default_icon angegeben ist).
          </dd>
          <dt><code>"light"</code></dt>
          <dd>
            Eine URL, die auf ein Symbol zeigt. Dieses Symbol wird angezeigt, wenn ein
            Theme mit hellem Text aktiv ist (wie z.B. das Firefox Dark Theme).
          </dd>
          <dt><code>"size"</code></dt>
          <dd>Die Größe der beiden Symbole in Pixeln.</dd>
        </dl>
        <p>Symbole werden als URLs relativ zur manifest.json-Datei angegeben.</p>
        <p>
          Sie sollten 16x16 und 32x32 (für Retina-Display)
          <code>ThemeIcons</code> bereitstellen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Auswahl von Symbolgrößen

Das Aktionssymbol muss möglicherweise in unterschiedlichen Größen in verschiedenen Kontexten angezeigt werden:

- Das Symbol wird in der Browser-Symbolleiste angezeigt. Ältere Versionen von Firefox unterstützten die Option, das Symbol im Menüpanel des Browsers (dem Panel, das sich öffnet, wenn der Benutzer auf das "Hamburger"-Symbol klickt) zu platzieren. In diesen Versionen von Firefox war das Symbol im Menüpanel größer als das Symbol in der Symbolleiste.
- Auf einem hochauflösenden Bildschirm wie einem Retina-Display müssen Symbole doppelt so groß sein.

Wenn der Browser kein Symbol der richtigen Größe in einer bestimmten Situation finden kann, wählt er die am besten passende Option und skaliert sie. Eine Skalierung kann das Symbol verschwommen erscheinen lassen, daher ist es wichtig, Symbole sorgfältig auszuwählen.

Es gibt zwei Hauptansätze. Sie können ein einzelnes Symbol als SVG-Datei liefern, und es wird korrekt skaliert:

```json
"default_icon": "path/to/geo.svg"
```

Alternativ können Sie mehrere Symbole in verschiedenen Größen bereitstellen, und der Browser wählt die am besten passende Option.

In Firefox:

- Die Standardhöhe und -breite für Symbole in der Symbolleiste beträgt 16 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).
- Die Standardhöhe und -breite für Symbole im Menüpanel beträgt 32 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

Sie können Symbole, die genau auf beiden normalen und Retina-Displays passen, festlegen, indem Sie drei Symboldateien bereitstellen und sie so spezifizieren:

```json
"default_icon": {
  "16": "path/to/geo-16.png",
  "32": "path/to/geo-32.png",
  "64": "path/to/geo-64.png"
}
```

Wenn Firefox keine exakte Übereinstimmung mit der gewünschten Größe finden kann, wählt es das kleinste angegebene Symbol, das größer als die ideale Größe ist. Wenn alle Symbole kleiner als die ideale Größe sind, wählt es das größte angegebene Symbol.

## Beispiel

```json
"action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  }
}
```

Eine Aktion mit nur einem Symbol, das in 2 Größen angegeben ist. Die Hintergrundskripte der Erweiterung können Klick-Ereignisse empfangen, wenn der Benutzer auf das Symbol klickt, mit einem Code wie diesem:

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

Eine Aktion mit einem Symbol, einem Titel und einem Popup. Das Popup wird angezeigt, wenn der Benutzer auf die Schaltfläche klickt.

## Browser-Kompatibilität

{{Compat}}
