---
title: options_ui
slug: Mozilla/Add-ons/WebExtensions/manifest.json/options_ui
l10n:
  sourceCommit: df052b23bd544e625e471e8fad77d060eef9c9d1
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Objekt</code></td>
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
        <pre class="brush: json;">
"options_ui": {
  "page": "options/options.html"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel `options_ui`, um eine [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) für Ihre Erweiterung zu definieren. Diese Seite verwenden Sie, um den Nutzern die Möglichkeit zu geben, die Einstellungen Ihrer Erweiterung zu ändern.

Die Art und Weise, wie der Nutzer die Seite öffnet, ist browserabhängig und hängt auch von der Einstellung `open_in_tab` ab. Ihre Erweiterung kann die Seite auch mit {{WebExtAPIRef("runtime.openOptionsPage()")}} öffnen.

Sie geben `options_ui` als Pfad zu einer HTML-Datei an, die zusammen mit Ihrer Erweiterung verpackt ist. Die HTML-Datei kann CSS- und JavaScript-Dateien enthalten, genau wie eine normale Webseite. Im Gegensatz zu einer normalen Seite kann das JavaScript jedoch alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) nutzen, für die die Erweiterung [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat. Es wird jedoch in einem anderen Kontext als Ihre Hintergrundskripte ausgeführt.

Wenn Sie Daten oder Funktionen zwischen dem JavaScript auf Ihrer **Optionsseite** und Ihrem **Hintergrundskript/Ihren Hintergrundskripten** teilen möchten, können Sie dies direkt tun, indem Sie eine Referenz zum [Window](/de/docs/Web/API/Window) Ihrer Hintergrundskripte mit {{WebExtAPIRef("extension.getBackgroundPage()")}} oder eine Referenz zum [`Window`](/de/docs/Web/API/Window) einer der innerhalb Ihrer Erweiterung laufenden Seiten mit {{WebExtAPIRef("extension.getViews()")}} erhalten. Alternativ können Sie zwischen dem JavaScript Ihrer Optionsseite und Ihrem Hintergrundskript/Ihren Hintergrundskripten mit {{WebExtAPIRef("runtime.sendMessage()")}}, {{WebExtAPIRef("runtime.onMessage")}} oder {{WebExtAPIRef("runtime.connect()")}} kommunizieren. Letztere (oder die entsprechenden {{WebExtAPIRef("runtime.Port")}}) können auch verwendet werden, um Optionen zwischen Ihrem [Hintergrundskript/Ihren Hintergrundskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) und Ihren **[Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)** zu teilen.

Im Allgemeinen sollten Sie Optionen, die auf Optionsseiten geändert werden, mit der {{WebExtAPIRef("storage", "storage API", "", "true")}} entweder in {{WebExtAPIRef("storage.sync")}} (wenn Sie möchten, dass die Einstellungen auf allen Instanzen dieses Browsers, in denen der Nutzer angemeldet ist, synchronisiert werden) oder in {{WebExtAPIRef("storage.local")}} (wenn die Einstellungen lokal auf dem aktuellen Rechner/Profil gespeichert werden sollen) speichern. Wenn Sie dies tun und Ihre [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) (oder [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)) über die Änderung informiert werden müssen, könnten Ihre Skripte einen Listener zu {{WebExtAPIRef("storage.onChanged")}} hinzufügen.

## Syntax

Der Schlüssel `options_ui` ist ein Objekt mit folgendem Inhalt:

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
        <p>Optional, Standardwert ist:</p>
          <ul>
            <li><code>true</code> in Manifest V2 und vor Firefox 115 in Manifest V3.</li>
            <li><code>false</code> in Manifest V3 ab Firefox 115.</li>
          </ul>
        <div class="notecard warning">
          <p>
            Setzen Sie <code>browser_style</code> nicht auf true: es wird in Manifest V3 ab Firefox 118 nicht unterstützt. Siehe <a href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration">Manifest V3 Migration für <code>browser_style</code></a>.
          </p>
        </div>
        <p>
          In Firefox kann das Stylesheet unter
          <code>chrome://browser/content/extension.css</code> oder
          <code>chrome://browser/content/extension-mac.css</code> auf macOS eingesehen werden. Beim Festlegen von Dimensionen beachten Sie, dass dieses Stylesheet
          <code>box-sizing: border-box</code> setzt (siehe
          <a href="/de/docs/Web/CSS/box-sizing">box-sizing</a>).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>open_in_tab</code><br />{{optional_inline}}</td>
      <td><code>Boolean</code></td>
      <td>
        <ul>
          <li>Wenn <code>false</code>, öffnet sich die Optionsseite im Add-on-Manager des Browsers.</li>
        <li>
          Wenn <code>true</code>, öffnet sich die Optionsseite in einem normalen
          Browser-Tab.
        </li>
        </ul>
        <p>Standardwert ist <code>false</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>page</code></td>
      <td><code>String</code></td>
      <td>
        <p>Verpflichtend.</p>
        <p>
          Der Pfad zu einer HTML-Datei, die die Spezifikation Ihrer Optionsseite
          enthält.
        </p>
        <p>
          Der Pfad ist relativ zur Position von
          <code>manifest.json</code> selbst.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiel

```json
"options_ui": {
  "page": "options/options.html"
}
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`options_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page) {{deprecated_inline}}
- [Browserstile](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
- [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
