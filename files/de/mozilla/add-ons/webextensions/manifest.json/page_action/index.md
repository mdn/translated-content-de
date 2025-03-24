---
title: page_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/page_action
l10n:
  sourceCommit: c4c42a1573a65a808f085999a4d8d97199e142d1
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
      <th scope="row">Manifest Version</th>
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

Eine Page Action ist ein Symbol, das Ihre Erweiterung in der URL-Leiste des Browsers hinzufügt.

Ihre Erweiterung kann optional auch ein zugehöriges Popup bereitstellen, dessen Inhalt mit HTML, CSS und JavaScript spezifiziert wird.

Sie müssen diesen Schlüssel angeben, um eine Page Action in Ihre Erweiterung zu integrieren. Wenn angegeben, können Sie die Schaltfläche programmatisch mit der {{WebExtAPIRef("pageAction")}} API manipulieren.

Wenn Sie ein Popup bereitstellen, wird dieses geöffnet, wenn der Benutzer auf das Symbol klickt, und Ihr JavaScript, das im Popup läuft, kann die Interaktion des Benutzers damit behandeln. Wenn Sie kein Popup bereitstellen, wird ein Klickereignis an die [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) Ihrer Erweiterung gesendet, wenn der Benutzer auf das Symbol klickt.

Page Actions ähneln den Browser Actions, außer dass sie mit bestimmten Webseiten statt mit dem gesamten Browser verbunden sind. Wenn eine Aktion nur auf bestimmten Seiten relevant ist, sollten Sie eine Page Action verwenden und sie nur auf relevanten Seiten anzeigen. Wenn eine Aktion für alle Seiten oder für den Browser selbst relevant ist, verwenden Sie eine Browser Action.

Während Browser Actions standardmäßig angezeigt werden, sind Page Actions standardmäßig ausgeblendet. Sie können für einen bestimmten Tab angezeigt werden, indem Sie {{WebExtAPIRef("pageAction.show()")}} aufrufen und die `id` des Tabs übergeben. Sie können dieses Standardverhalten auch mit der Eigenschaft `show_matches` ändern.

## Syntax

Der `page_action` Schlüssel ist ein Objekt, das eine beliebige der drei Eigenschaften haben kann, alle optional:

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
        <p>Optional. Standardwert ist <code>false</code>.</p>
        <div class="notecard warning">
          <p>
            Setzen Sie <code>browser_style</code> nicht auf true: Es wird im Manifest V3 ab Firefox 118 nicht unterstützt. Siehe <a href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration">Manifest V3 Migration für <code>browser_style</code></a>.
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
          Beispiel-Erweiterung verwendet <code>browser_style</code> in ihrem Popup.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_icon</code></td>
      <td><code>Object</code> oder <code>String</code></td>
      <td>
        <p>Verwenden Sie dies, um ein Symbol für die Aktion festzulegen.</p>
        <p>
          Es wird empfohlen, hier zwei Symbole anzugeben (19×19 Pixel und 38×38 Pixel) und diese in einem Objekt mit Eigenschaften mit den Namen <code>"19"</code> und <code>"38"</code> anzugeben, so wie hier:
        </p>
        <pre class="brush: json">
    "default_icon": {
      "19": "geo-19.png",
      "38": "geo-38.png"
    }</pre
        >
        <p>
          Wenn Sie dies tun, wählt der Browser das richtige Größen-Symbol für die Pixeldichte des Bildschirms aus.
        </p>
        <p>Sie können hier auch nur eine Zeichenfolge angeben:</p>
        <pre class="brush: json">"default_icon": "geo.png"</pre>
        <p>
          Wenn Sie dies tun, wird das Symbol auf die Größe der Symbolleiste skaliert und kann verschwommen erscheinen.
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
          Die HTML-Datei kann CSS- und JavaScript-Dateien mithilfe von
          <code
            ><a href="/de/docs/Web/HTML/Element/link">&#x3C;link></a></code
          >
          und
          <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script></a
            ></code
          >
          Elementen einbinden, genau wie eine normale Webseite. Verwenden Sie jedoch
          <code
            ><a href="/de/docs/Web/HTML/Element/script"
              >&#x3C;script></a
            ></code
          >
          nicht mit eingebettetem Code, da dies einen Content Violation Policy Fehler verursachen kann. Stattdessen
          muss
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
          Im Gegensatz zu einer normalen Webseite kann JavaScript, das im Popup läuft, auf alle
          <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API"
            >WebExtension-APIs</a
          >
          zugreifen (vorausgesetzt, die Erweiterung hat die entsprechenden
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
      <td><code>default_title</code></td>
      <td><code>String</code></td>
      <td>
        <p>
          Tooltip für das Symbol, das angezeigt wird, wenn der Benutzer die Maus darüber bewegt.
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
          Verstecken Sie die Page Action standardmäßig für Seiten, deren URLs mit einem der angegebenen
          <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns"
            >Match Patterns</a
          >
          übereinstimmen.
        </p>
        <p>
          Beachten Sie, dass Page Actions standardmäßig immer versteckt sind, es sei denn, es wird
          <code>show_matches</code> angegeben. Daher ergibt es nur Sinn, diese Eigenschaft einzuschließen, wenn
          <code>show_matches</code> ebenfalls angegeben ist, und wird die Muster in <code>show_matches</code>
          überschreiben.
        </p>
        <p>Beispielsweise betrachten Sie einen Wert wie:</p>
        <pre class="brush: json">
"page_action": {
  "show_matches": ["https://*.mozilla.org/*"],
  "hide_matches": ["https://developer.mozilla.org/*"]
}</pre
        >
        <p>
          Dies zeigt die Page Action standardmäßig für alle HTTPS-URLs unter der
          <code>"mozilla.org"</code> Domain an, außer für Seiten unter
          <code>"developer.mozilla.org"</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>show_matches</code></td>
      <td><code>Array</code> of <code>Match Pattern</code></td>
      <td>
        <p>
          Zeigen Sie die Page Action standardmäßig für Seiten an, deren URLs mit einem der angegebenen Muster
          übereinstimmen.
        </p>
        <p>Sehen Sie auch <code>hide_matches</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>pinned</code> {{deprecated_inline}}</td>
      <td><code>Boolean</code></td>
      <td>
        <p>Optional. Standardwert ist <code>true</code>.</p>
        <p>
          Steuert, ob die Page Action standardmäßig in der Adressleiste erscheinen soll, wenn der Benutzer die
          Erweiterung installiert. Diese Eigenschaft wird seit Firefox 89 nicht mehr unterstützt.
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

Eine Page Action mit nur einem Symbol, das in 2 verschiedenen Größen angegeben wird. Die Hintergrundskripte der Erweiterung können Klickereignisse empfangen, wenn der Benutzer mit Code wie diesem auf das Symbol klickt:

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

Eine Page Action mit einem Symbol, einem Titel und einem Popup. Das Popup wird angezeigt, wenn der Benutzer auf das Symbol klickt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)
- [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [Browser Styles](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
