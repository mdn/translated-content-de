---
title: chrome_url_overrides
slug: Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides
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
      <th scope="row">Manifestversion</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
  "chrome_url_overrides" : {
    "newtab": "my-new-tab.html"
  }</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel `chrome_url_overrides`, um einen benutzerdefinierten Ersatz für die Dokumente bereitzustellen, die in verschiedenen speziellen Seiten geladen werden, die normalerweise vom Browser selbst bereitgestellt werden.

## Syntax

Der Schlüssel `chrome_url_overrides` ist ein Objekt, das die folgenden Eigenschaften haben kann:

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
      <td><code>bookmarks</code></td>
      <td><code>String</code></td>
      <td>
        <p>Stellen Sie einen Ersatz für die Seite bereit, die die Lesezeichen anzeigt. </p>
      </td>
    </tr>
    <tr>
      <td><code>history</code></td>
      <td><code>String</code></td>
      <td>
        <p>
          Stellen Sie einen Ersatz für die Seite bereit, die den Browserverlauf anzeigt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>newtab</code></td>
      <td><code>String</code></td>
      <td>
        <p>
          Stellen Sie einen Ersatz für das Dokument bereit, das auf der "neue Tab"-Seite angezeigt wird. Dies ist die Seite, die gezeigt wird, wenn der Benutzer einen neuen Tab geöffnet hat, aber kein Dokument darin geladen hat: zum Beispiel durch die Verwendung des
          <kbd>Strg</kbd>/<kbd>Command</kbd>+<kbd>T</kbd>-Tastenkürzels.
        </p>
        <p>
          Der Ersatz wird als URL zu einer HTML-Datei angegeben. Die Datei muss mit der Erweiterung gebündelt sein: Sie können hier keine Remote-URL angeben. Sie können sie relativ zum Stammordner der Erweiterung angeben, wie:
          "path/to/newtab.html".
        </p>
        <p>
          Das Dokument kann CSS und JavaScript laden, genau wie eine normale Webseite. JavaScript, das auf der Seite läuft, erhält Zugriff auf dieselben
          <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API"
            >privilegierten "browser.*"-APIs</a
          >
          wie das Hintergrundskript der Erweiterung.
        </p>
        <p>
          Es ist eine sehr gute Praxis, einen
          <a href="/de/docs/Web/HTML/Reference/Elements/title">&#x3C;title></a> für die
          Seite einzuschließen, da der Titel des Tabs sonst die "moz-extension://..."-URL sein wird.
        </p>
        <p>
          Ein häufiger Anwendungsfall ist es, dem Benutzer zu ermöglichen, eine neue Tab-Seite zu definieren: Um dies zu tun, stellen Sie eine benutzerdefinierte neue Tab-Seite bereit, die zur vom Benutzer definierten Seite navigiert.
        </p>
        <p>
          Wenn zwei oder mehr Erweiterungen benutzerdefinierte neue Tab-Seiten definieren, dann wird der Wert der zuletzt installierten oder aktivierten Erweiterung verwendet.
        </p>
        <p>
          Um die Startseite des Browsers zu überschreiben, verwenden Sie stattdessen "<a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides"
            >chrome_settings_overrides</a
          >".
        </p>
      </td>
    </tr>
  </tbody>
</table>

Alle Eigenschaften sind [lokalisierbar](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Beispiel

```json
"chrome_url_overrides" : {
  "newtab": "my-new-tab.html"
}
```

## Browser-Kompatibilität

{{Compat}}
