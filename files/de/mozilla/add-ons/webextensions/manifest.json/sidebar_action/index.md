---
title: sidebar_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action
l10n:
  sourceCommit: ba3c8980510073ee92674aa71cb2c8c5b71294ab
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
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
"sidebar_action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  },
  "default_title": "My sidebar",
  "default_panel": "sidebar/sidebar.html",
  "open_at_install":true
}</pre
        >
      </td>
    </tr>
    <tr>
      <th scope="row"> </th>
      <td></td>
    </tr>
  </tbody>
</table>

Ein [Sidebar](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) ist ein Bereich, der auf der linken Seite des Browserfensters, neben der Webseite, angezeigt wird. Der Browser stellt eine Benutzeroberfläche bereit, die es dem Benutzer ermöglicht, die derzeit verfügbaren Sidebars zu sehen und eine Sidebar zur Anzeige auszuwählen.

Der `sidebar_action`-Schlüssel ermöglicht es Ihnen, die Standard-Eigenschaften für die Sidebar zu definieren. Sie können diese Eigenschaften zur Laufzeit über die {{WebExtAPIRef("sidebarAction")}} API ändern.

## Syntax

Der `sidebar_action`-Schlüssel ist ein Objekt, das alle unten aufgeführten Eigenschaften haben kann. Die einzige verpflichtende Eigenschaft ist `default_panel`.

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
        <br />{{deprecated_inline}} in Manifest V3.
      </td>
      <td><code>Boolean</code></td>
      <td>
        <p>Optional, standardmäßig:</p>
          <ul>
            <li><code>true</code> in Manifest V2 und vor Firefox 115 in Manifest V3.</li>
            <li><code>false</code> in Manifest V3 ab Firefox 115.</li>
          </ul>
        <div class="notecard warning">
          <p>
            Setzen Sie <code>browser_style</code> nicht auf true: Es wird in Manifest V3 ab Firefox 118 nicht unterstützt. Siehe <a href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration">Manifest V3-Migration für <code>browser_style</code></a>.
          </p>
        </div>
        <p>
          In Firefox kann das Stylesheet unter
          chrome://browser/content/extension.css oder
          chrome://browser/content/extension-mac.css auf macOS gesehen werden. Beim Festlegen
          von Dimensionen beachten Sie, dass dieses Stylesheet
          <code>box-sizing: border-box</code> setzt (siehe
          <a href="/de/docs/Web/CSS/Reference/Properties/box-sizing">box-sizing</a>).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_icon</code>
      <br />{{optional_inline}}</td>
      <td><code>Object</code> oder <code>String</code></td>
      <td>
        <p>
          Verwenden Sie dies, um ein oder mehrere Icons für die Sidebar anzugeben. Das Icon wird
          in der Benutzeroberfläche des Browsers zum Öffnen und Schließen von Sidebars angezeigt.
        </p>
        <p>
          Icons werden als URLs relativ zur manifest.json-Datei selbst angegeben.
        </p>
        <p>Sie können eine einzelne Icon-Datei angeben, indem Sie hier einen String angeben:</p>
        <pre class="brush: json">"default_icon": "path/to/geo.svg"</pre>
        <p>
          Um mehrere Icons in verschiedenen Größen anzugeben, geben Sie hier ein Objekt an.
          Der Name jeder Eigenschaft ist die Höhe des Icons in Pixeln und muss
          in einen Integer umwandelbar sein. Der Wert ist die URL. Zum Beispiel:
        </p>
        <pre class="brush: json">
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png"
    }</pre
        >
        <p>
          Siehe
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes"
            >Auswahl der Icon-Größen</a
          >
          für weitere Hinweise hierzu.
        </p>
        <p>
          Diese Eigenschaft ist optional: Wenn sie weggelassen wird, erhält die Sidebar kein Icon.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_panel</code></td>
      <td><code>String</code></td>
      <td>
        <p>Der Pfad zu einer HTML-Datei, die den Inhalt der Sidebar angibt.</p>
        <p>
          Die HTML-Datei kann CSS- und JavaScript-Dateien einschließen mit
          <code
            ><a href="/de/docs/Web/HTML/Reference/Elements/link">&#x3C;link></a></code
          >
          und
          <code
            ><a href="/de/docs/Web/HTML/Reference/Elements/script"
              >&#x3C;script></a
            ></code
          >
          Elementen, genau wie eine normale Webseite.
        </p>
        <p>
          Anders als eine normale Webseite kann JavaScript, das im Panel läuft, auf
          alle
          <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API"
            >WebExtension APIs</a
          >
          zugreifen (natürlich unter der Voraussetzung, dass die Erweiterung die entsprechenden
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions"
            >Berechtigungen</a
          >)
          besitzt.
        </p>
        <p>Diese Eigenschaft ist verpflichtend.</p>
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
          Titel für die Sidebar. Dieser wird in der Benutzeroberfläche des Browsers zum Auflisten und
          Öffnen von Sidebars verwendet und wird oben in der Sidebar angezeigt, wenn sie geöffnet ist.
        </p>
        <p>
          Diese Eigenschaft ist optional: Wenn sie weggelassen wird, ist der Titel der Sidebar
          der
          <code
            ><a
              href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name"
              >Name</a
            ></code
          > der Erweiterung.
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
      <td><code>open_at_install</code>
      <br />{{optional_inline}}</td>
      <td>Boolean</td>
      <td>
        Optional, standardmäßig <code>true</code>. Bestimmt, ob die
        Sidebar bei der Installation geöffnet werden soll. Das Standardverhalten ist, die
        Sidebar zu öffnen, wenn die Installation abgeschlossen ist.
      </td>
    </tr>
  </tbody>
</table>

## Beispiel

```json
"sidebar_action": {
  "default_icon": "sidebar.svg",
  "default_title": "My sidebar!",
  "default_panel": "sidebar.html"
}
```

Für ein Beispiel einer Erweiterung, die eine Sidebar verwendet, siehe [annotate-page](https://github.com/mdn/webextensions-examples/tree/main/annotate-page).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)
- [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)
- [Browser styles](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
