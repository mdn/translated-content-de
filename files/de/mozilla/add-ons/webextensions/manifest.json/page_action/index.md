---
title: page_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/page_action
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
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Eine Page-Action ist ein Symbol, das Ihre Erweiterung in der URL-Leiste des Browsers hinzufügt.

Ihre Erweiterung kann optional auch ein zugeordnetes Popup bereitstellen, dessen Inhalt unter Verwendung von HTML, CSS und JavaScript festgelegt wird.

Sie müssen diesen Schlüssel angeben, um eine Page-Action in Ihre Erweiterung aufzunehmen. Wenn er angegeben ist, können Sie den Button programmatisch mit der {{WebExtAPIRef("pageAction")}} API manipulieren.

Wenn Sie ein Popup bereitstellen, wird dieses geöffnet, wenn der Benutzer auf das Symbol klickt, und Ihr JavaScript, das im Popup ausgeführt wird, kann auf die Interaktion des Benutzers reagieren. Wenn Sie kein Popup bereitstellen, wird ein Klickereignis an die [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_pages) Ihrer Erweiterung gesendet, wenn der Benutzer auf das Symbol klickt.

Page-Actions sind wie Browser-Actions, jedoch mit bestimmten Webseiten verbunden, anstatt mit dem gesamten Browser. Wenn eine Aktion nur auf bestimmten Seiten relevant ist, sollten Sie eine Page-Action verwenden und sie nur auf relevanten Seiten anzeigen. Wenn eine Aktion für alle Seiten oder den Browser selbst relevant ist, verwenden Sie eine Browser-Action.

Während Browser-Actions standardmäßig angezeigt werden, sind Page-Actions standardmäßig ausgeblendet. Sie können für einen bestimmten Tab angezeigt werden, indem {{WebExtAPIRef("pageAction.show()")}} aufgerufen wird und die `id` des Tabs übergeben wird. Sie können dieses Standardverhalten auch mit der Eigenschaft `show_matches` ändern.

## Syntax

Der `page_action` Schlüssel ist ein Objekt, das drei optionale Eigenschaften haben kann:

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
        <br />{{deprecated_inline}} in Manifest V3.
      </td>
      <td><code>Boolean</code></td>
      <td>
        <p>Optional. Standardwert ist <code>false</code>.</p>
        <div class="notecard warning">
          <p>
            Setzen Sie <code>browser_style</code> nicht auf true: Es wird in Manifest V3 ab Firefox 118 nicht unterstützt. Siehe <a href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration">Manifest V3 Migration für <code>browser_style</code></a>.
          </p>
        </div>
        <p>
          In Firefox kann das Stylesheet unter
          <code>chrome://browser/content/extension.css</code> oder
          <code>chrome://browser/content/extension-mac.css</code> auf macOS eingesehen werden.
        </p>
        <p>
          Die
          <a
            href="https://github.com/mdn/webextensions-examples/tree/main/latest-download"
            >latest-download</a
          >
          Beispielerweiterung verwendet <code>browser_style</code> in ihrem Popup.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_icon</code></td>
      <td><code>Object</code> oder <code>String</code></td>
      <td>
        <p>Verwenden Sie dies, um ein Symbol für die Aktion anzugeben.</p>
        <p>
          Es wird empfohlen, hier zwei Symbole bereitzustellen (19×19 Pixel und
          38×38 Pixel) und sie in einem Objekt mit den Eigenschaften
          <code>"19"</code> und <code>"38"</code> anzugeben, wie hier:
        </p>
        <pre class="brush: json">
    "default_icon": {
      "19": "geo-19.png",
      "38": "geo-38.png"
    }</pre
        >
        <p>
          Wenn Sie dies tun, wählt der Browser das richtige Größen-Symbol für die
          Pixeldichte des Bildschirms aus.
        </p>
        <p>Sie können hier auch nur einen String bereitstellen:</p>
        <pre class="brush: json">"default_icon": "geo.png"</pre>
        <p>
          Wenn Sie dies tun, wird das Symbol skaliert, um in die Symbolleiste zu passen, und
          kann unscharf erscheinen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_popup</code></td>
      <td><code>String</code></td>
      <td>
        <p>
          Der Pfad zu einer HTML-Datei, die die Spezifikation des Popups enthält.
        </p>
        <p>
          Die HTML-Datei kann CSS- und JavaScript-Dateien enthalten,
          die <code
            ><a href="/de/docs/Web/HTML/Element/link">&#x3C;link></a></code
          >
          und
          <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script></a
            ></code
          >,
          Elemente verwenden, genau wie eine normale Webseite. Verwenden Sie jedoch nicht
          <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script></a
            ></code
          >
          mit eingebettetem Code, da sonst ein Content Violation Policy
          Fehler auftritt. Stattdessen muss
          <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script></a
            ></code
          >
          das
          <code><a href="/de/docs/Web/HTML/Element/script">src</a></code>
          Attribut verwenden, um eine separate Skriptdatei zu laden.
        </p>
        <p>
          Im Gegensatz zu einer normalen Webseite kann JavaScript, das im Popup ausgeführt wird,
          auf alle
          <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API"
            >WebExtension APIs</a
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
      <td><code>default_title</code></td>
      <td><code>String</code></td>
      <td>
        <p>
          Tooltip für das Symbol, das angezeigt wird, wenn der Benutzer den Mauszeiger darüber bewegt.
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
      <td><code>hide_matches</code></td>
      <td>
        <code>Array</code> von <code>Match Pattern</code> außer
        <code>&#x3C;all_urls></code>
      </td>
      <td>
        <p>
          Verstecken Sie die Page-Action standardmäßig für Seiten, deren URLs mit einem der
          angegebenen
          <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns"
            >Match Patterns</a
          >
          übereinstimmen.
        </p>
        <p>
          Beachten Sie, dass Page-Actions immer standardmäßig ausgeblendet sind, es sei denn,
          <code>show_matches</code> wird angegeben. Daher macht es nur Sinn, diese Eigenschaft einzubeziehen, wenn <code>show_matches</code> ebenfalls angegeben wird, und überschreibt die Muster in <code>show_matches</code>.
        </p>
        <p>Ein Beispielwert könnte so aussehen:</p>
        <pre class="brush: json">
"page_action": {
  "show_matches": ["https://*.mozilla.org/*"],
  "hide_matches": ["https://developer.mozilla.org/*"]
}</pre
        >
        <p>
          Dies zeigt die Page-Action standardmäßig für alle HTTPS-URLs unter der
          <code>"mozilla.org"</code> Domain an, außer für Seiten unter
          <code>"developer.mozilla.org"</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>show_matches</code></td>
      <td><code>Array</code> von <code>Match Pattern</code></td>
      <td>
        <p>
          Zeigen Sie die Page-Action standardmäßig für Seiten an, deren URLs mit einem der
          angegebenen Muster übereinstimmen.
        </p>
        <p>Siehe auch <code>hide_matches</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>pinned</code> {{deprecated_inline}}</td>
      <td><code>Boolean</code></td>
      <td>
        <p>Optional. Standardwert ist <code>true</code>.</p>
        <p>
          Bestimmt, ob die Page-Action standardmäßig in der Adressleiste erscheinen soll, wenn der Benutzer die Erweiterung installiert. Diese Eigenschaft wird seit Firefox 89 nicht mehr unterstützt.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiel

```json
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  }
}
```

Eine Page-Action mit nur einem Symbol, das in zwei verschiedenen Größen angegeben ist. Die Hintergrundskripte der Erweiterung können Klickereignisse empfangen, wenn der Benutzer auf das Symbol klickt, mit Code wie diesem:

```js
browser.pageAction.onClicked.addListener(handleClick);
```

```json
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html"
}
```

Eine Page-Action mit einem Symbol, einem Titel und einem Popup. Das Popup wird angezeigt, wenn der Benutzer auf das Symbol klickt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)
- [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [Browser-Stile](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
