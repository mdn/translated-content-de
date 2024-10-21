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
}</pre>
      </td>
    </tr>
  </tbody>
</table>

Eine Aktion ist eine Schaltfläche, die Ihre Erweiterung zur Symbolleiste des Browsers hinzufügt. Die Schaltfläche hat ein Symbol und kann optional ein Popup haben, dessen Inhalt mit HTML, CSS und JavaScript angegeben wird.

Dieser Schlüssel ersetzt [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) in Manifest V3-Erweiterungen.

Sie müssen diesen Schlüssel angeben, um eine Browser-Symbolleistenschaltfläche in Ihre Erweiterung aufzunehmen. Wenn angegeben, können Sie die Schaltfläche programmatisch mit der {{WebExtAPIRef("action")}} API manipulieren.

Wenn Sie ein Popup bereitstellen, wird dieses geöffnet, wenn der Benutzer auf die Schaltfläche klickt, und Ihr JavaScript, das im Popup ausgeführt wird, kann die Interaktion des Benutzers damit handhaben. Wenn Sie kein Popup bereitstellen, wird ein Klickereignis an die [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) Ihrer Erweiterung gesendet, wenn der Benutzer auf die Schaltfläche klickt.

## Syntax

Der `action`-Schlüssel ist ein Objekt, das eine oder mehrere der folgenden Eigenschaften haben kann, alle optional:

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
            Setzen Sie <code>browser_style</code> nicht auf true: Die Unterstützung in Manifest V3 wurde in Firefox 118 entfernt. Siehe <a href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration">Manifest V3 Migration für <code>browser_style</code></a>.
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
          Definiert den Bereich des Browsers, in dem die Schaltfläche initially platziert wird. Dies ist eine Zeichenfolge, die einen von vier Werten annehmen kann:
        </p>
        <ul>
          <li>
            "navbar": Die Schaltfläche wird in der Hauptsymbolleiste des Browsers platziert, neben der URL-Leiste.
          </li>
          <li>"menupanel": Die Schaltfläche wird in einem Popup-Fenster platziert.</li>
          <li>
            "tabstrip": Die Schaltfläche wird in der Symbolleiste platziert, die die Browser-Tabs enthält.
          </li>
          <li>
            "personaltoolbar": Die Schaltfläche wird in der Lesezeichen-Symbolleiste platziert.
          </li>
        </ul>
        <p>Diese Eigenschaft wird nur in Firefox unterstützt.</p>
        <p>Diese Eigenschaft ist optional und standardmäßig auf "menupanel" gesetzt.</p>
        <p>
          Firefox speichert die <code>default_area</code>-Einstellung für eine Erweiterung, selbst wenn diese Erweiterung deinstalliert und anschließend erneut installiert wird. Um den Browser zu zwingen, einen neuen Wert für <code>default_area</code> zu erkennen, muss die ID der Erweiterung geändert werden.
        </p>
        <p>
          Eine Erweiterung kann den Standort der Schaltfläche nicht ändern, nachdem sie installiert wurde, aber der Benutzer kann möglicherweise die Schaltfläche mithilfe des integrierten UI-Anpassungsmechanismus des Browsers verschieben.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_icon</code>
      <br />{{optional_inline}}</td>
      <td><code>Object</code> oder <code>String</code></td>
      <td>
        <p>
          Verwenden Sie dies, um eines oder mehrere Symbole für die Aktion anzugeben. Das Symbol wird standardmäßig in der Browser-Symbolleiste angezeigt.
        </p>
        <p>
          Symbole werden als URLs angegeben, die relativ zur manifest.json-Datei selbst sind.
        </p>
        <p>Sie können eine einzelne Symbol-Datei angeben, indem Sie hier eine Zeichenfolge bereitstellen:</p>
        <pre class="brush: json">"default_icon": "path/to/geo.svg"</pre>
        <p>
          Um mehrere Symbole in unterschiedlichen Größen anzugeben, geben Sie hier ein Objekt an. Der Name jeder Eigenschaft ist die Höhe des Symbols in Pixeln und muss in einen Ganzzahl konvertierbar sein. Der Wert ist die URL. Zum Beispiel:
        </p>
        <pre class="brush: json">
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png"
    }</pre>
        <p>
          Sie können nicht mehrere Symbole der gleichen Größen angeben.<br /><br />Siehe
          <a
            href="#choosing_icon_sizes"
            >Auswahl der Symbolgrößen</a>
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
          Die HTML-Datei kann CSS- und JavaScript-Dateien unter Verwendung von
          <code
            ><a href="/de/docs/Web/HTML/Element/link">&#x3C;link></a></code
          >
          und
          <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script></a
            ></code
          >
          Elementen einbeziehen, genau wie eine normale Webseite. Jedoch,
          <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script>
            </a></code
          >muss das
          <code><a href="/de/docs/Web/HTML/Element/script">src</a></code>
          Attribut haben, um eine Datei zu laden. Verwenden Sie nicht
          <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script></a
            ></code
          >
          mit eingebettetem Code, da Sie eine verwirrende Inhaltsrichtlinienverletzung erhalten.
        </p>
        <p>
          Anders als bei einer normalen Webseite kann JavaScript, das im Popup ausgeführt wird, auf alle
          <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API"
            >WebExtension-APIs</a
          >
          zugreifen (natürlich vorausgesetzt, die Erweiterung hat die entsprechenden
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
          Tooltip für die Schaltfläche, das angezeigt wird, wenn der Benutzer den Mauszeiger darüber bewegt. Wenn die Schaltfläche zur Menüleiste des Browsers hinzugefügt wird, wird dies auch unter dem App-Symbol angezeigt.
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
          Diese Eigenschaft ermöglicht es Ihnen, je nach dem, ob Firefox erkennt, dass das Thema dunklen oder hellen Text verwendet, verschiedene Symbole für Themen anzugeben.
        </p>
        <p>
          Wenn diese Eigenschaft vorhanden ist, ist es ein Array, das mindestens ein
          <code>ThemeIcons</code>-Objekt enthält. Ein <code>ThemeIcons</code>-Objekt
          enthält drei obligatorische Eigenschaften:
        </p>
        <dl>
          <dt><code>"dark"</code></dt>
          <dd>
            Eine URL, die auf ein Symbol zeigt. Dieses wird angezeigt, wenn ein Thema mit dunklem Text aktiv ist (wie das Firefox Light-Thema und das Standardthema, wenn kein default_icon angegeben ist).
          </dd>
          <dt><code>"light"</code></dt>
          <dd>
            Eine URL, die auf ein Symbol zeigt. Dieses wird angezeigt, wenn ein Thema mit hellem Text aktiv ist (wie zum Beispiel das Firefox Dark-Thema).
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

## Auswahl der Symbolgrößen

Das Symbol der Aktion muss möglicherweise in unterschiedlichen Größen in verschiedenen Kontexten angezeigt werden:

- Das Symbol wird in der Browser-Symbolleiste angezeigt. Ältere Versionen von Firefox unterstützten die Möglichkeit, das Symbol im Menüpanel des Browsers zu platzieren (dem Panel, das geöffnet wird, wenn der Benutzer auf das "Hamburger"-Symbol klickt). In diesen Versionen von Firefox war das Symbol im Menüpanel größer als das Symbol in der Symbolleiste.
- Auf einem hochauflösenden Display wie einem Retina-Bildschirm müssen Symbole doppelt so groß sein.

Wenn der Browser in einer bestimmten Situation kein Symbol der richtigen Größe finden kann, wird die am besten passtende Möglichkeit gewählt und skaliert. Das Skalieren kann dafür sorgen, dass das Symbol verschwommen aussieht, daher ist es wichtig, die Symbolgrößen sorgfältig auszuwählen.

Es gibt zwei Hauptansätze dazu. Sie können ein einzelnes Symbol als SVG-Datei bereitstellen, und es wird korrekt skaliert:

```json
"default_icon": "path/to/geo.svg"
```

Alternativ können Sie mehrere Symbole in verschiedenen Größen bereitstellen, und der Browser wird die am besten passende Wahl treffen.

In Firefox:

- Die Standardhöhe und -breite für Symbole in der Symbolleiste ist 16 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).
- Die Standardhöhe und -breite für Symbole im Menüpanel ist 32 \* [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio).

So können Sie Symbole, die auf normalen und Retina-Displays genau stimmen, angeben, indem Sie drei Symbol-Dateien bereitstellen und sie so angeben:

```json
"default_icon": {
  "16": "path/to/geo-16.png",
  "32": "path/to/geo-32.png",
  "64": "path/to/geo-64.png"
}
```

Wenn Firefox keine exakte Übereinstimmung für die gewünschte Größe finden kann, wird das kleinste angegebene Symbol gewählt, das größer als die ideale Größe ist. Wenn alle Symbole kleiner als die ideale Größe sind, wird das größte angegebene Symbol gewählt.

## Beispiel

```json
"action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  }
}
```

Eine Aktion mit nur einem Symbol, angegeben in 2 Größen. Die Hintergrundskripte der Erweiterung können Klickereignisse empfangen, wenn der Benutzer auf das Symbol klickt, indem Sie folgenden Code verwenden:

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
