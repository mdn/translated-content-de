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
        <pre class="brush: json;">
"options_ui": {
  "page": "options/options.html"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel `options_ui`, um eine [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) für Ihre Erweiterung zu definieren. Sie verwenden diese Seite, um Nutzern zu ermöglichen, die Einstellungen Ihrer Erweiterung zu ändern.

Die Art und Weise, wie der Benutzer die Seite öffnet, hängt vom Browser ab und hängt auch von der Einstellung `open_in_tab` ab. Ihre Erweiterung kann die Seite auch mithilfe von {{WebExtAPIRef("runtime.openOptionsPage()")}} öffnen.

Sie geben `options_ui` als Pfad zu einer in Ihre Erweiterung verpackten HTML-Datei an. Die HTML-Datei kann wie eine normale Webseite CSS- und JavaScript-Dateien enthalten. Im Gegensatz zu einer normalen Seite kann das JavaScript jedoch alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, für die die Erweiterung [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat. Es läuft jedoch in einem anderen Bereich als Ihre Hintergrundskripte.

Wenn Sie Daten oder Funktionen zwischen dem JavaScript auf Ihrer **Optionsseite** und Ihren **Hintergrundskripten** teilen möchten, können Sie dies direkt tun, indem Sie eine Referenz auf das [Window](/de/docs/Web/API/Window) Ihrer Hintergrundskripte mithilfe von {{WebExtAPIRef("extension.getBackgroundPage()")}} oder eine Referenz auf das {{domxref("Window")}} einer der Seiten, die innerhalb Ihrer Erweiterung laufen, mit {{WebExtAPIRef("extension.getViews()")}} erhalten. Alternativ können Sie zwischen dem JavaScript für Ihre Optionsseite und Ihrem Hintergrundskript über {{WebExtAPIRef("runtime.sendMessage()")}}, {{WebExtAPIRef("runtime.onMessage")}} oder {{WebExtAPIRef("runtime.connect()")}} kommunizieren. Letzteres (oder die Äquivalente von {{WebExtAPIRef("runtime.Port")}}) kann auch verwendet werden, um Optionen zwischen Ihren [Hintergrundskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) und Ihren **[Inhalts-Skripten.](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)** zu teilen.

Im Allgemeinen möchten Sie Optionen, die auf Optionsseiten geändert wurden, mithilfe der {{WebExtAPIRef("storage", "storage API", "", "true")}} entweder in {{WebExtAPIRef("storage.sync")}} (wenn Sie die Einstellungen über alle Instanzen des Browsers hinweg synchronisieren möchten, bei denen der Benutzer angemeldet ist), oder in {{WebExtAPIRef("storage.local")}} (wenn die Einstellungen lokal auf dem aktuellen Computer/Profil sind) speichern. Wenn Sie dies tun und Ihre [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) (oder [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)) über die Änderung informiert werden müssen, können Ihre Skripte einen Listener zu {{WebExtAPIRef("storage.onChanged")}} hinzufügen.

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
        <p>Optional, Standard ist:</p>
          <ul>
            <li><code>true</code> in Manifest V2 und vor Firefox 115 in Manifest V3.</li>
            <li><code>false</code> in Manifest V3 ab Firefox 115.</li>
          </ul>
        <div class="notecard warning">
          <p>
            Setzen Sie <code>browser_style</code> nicht auf true: Es wird ab Firefox 118 in Manifest V3 nicht unterstützt. Siehe <a href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration">Manifest V3 Migration für <code>browser_style</code></a>.
          </p>
        </div>
        <p>
          In Firefox kann das Stylesheet unter
          <code>chrome://browser/content/extension.css</code> oder
          <code>chrome://browser/content/extension-mac.css</code> auf macOS eingesehen werden. Beim Setzen der Dimensionen beachten Sie bitte, dass dieses Stylesheet
          <code>box-sizing: border-box</code> festlegt (siehe
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
        <p>Standard ist <code>false</code>.</p>
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
          Der Pfad ist relativ zum Speicherort des
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
- [Browser-Stile](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
- [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
