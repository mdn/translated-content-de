---
title: chrome_url_overrides
slug: Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
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

Verwenden Sie den Schlüssel `chrome_url_overrides`, um ein benutzerdefiniertes Ersatzdokument für die verschiedenen speziellen Seiten bereitzustellen, die normalerweise vom Browser selbst bereitgestellt werden.

## Syntax

Der Schlüssel `chrome_url_overrides` ist ein Objekt, das die folgenden Eigenschaften enthalten kann:

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
        <p>Ersetzen Sie die Seite, die die Lesezeichen anzeigt. </p>
      </td>
    </tr>
    <tr>
      <td><code>history</code></td>
      <td><code>String</code></td>
      <td>
        <p>
          Ersetzen Sie die Seite, die den Browserverlauf anzeigt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>newtab</code></td>
      <td><code>String</code></td>
      <td>
        <p>
          Ersetzen Sie das Dokument, das auf der "Neuer Tab"-Seite angezeigt wird. Dies ist die Seite, die angezeigt wird, wenn der Benutzer einen neuen Tab geöffnet hat, aber noch kein Dokument geladen wurde: zum Beispiel durch die Verwendung der Tastenkombination <kbd>Ctrl</kbd>/<kbd>Command</kbd>+<kbd>T</kbd>.
        </p>
        <p>
          Der Ersatz wird als URL zu einer HTML-Datei angegeben. Die Datei muss mit der Erweiterung gebündelt sein: Sie können hier keine Remote-URL angeben. Sie können sie relativ zum Stammordner der Erweiterung angeben, wie: "path/to/newtab.html".
        </p>
        <p>
          Das Dokument kann CSS und JavaScript laden, genau wie eine normale Webseite. JavaScript, das auf der Seite läuft, hat Zugriff auf die gleichen <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API">privilegierten "browser.*" APIs</a> wie das Hintergrundskript der Erweiterung.
        </p>
        <p>
          Es ist sehr empfehlenswert, einen <a href="/de/docs/Web/HTML/Reference/Elements/title">&#x3C;title></a> für die Seite einzuschließen, andernfalls wird der Titel des Tabs die "moz-extension://..." URL sein.
        </p>
        <p>
          Ein häufiger Anwendungsfall ist es, dem Benutzer zu ermöglichen, eine neue Tab-Seite zu definieren: Um dies zu tun, stellen Sie eine benutzerdefinierte neue Tab-Seite bereit, die zu der vom Benutzer definierten Seite navigiert.
        </p>
        <p>
          Wenn zwei oder mehr Erweiterungen benutzerdefinierte neue Tab-Seiten definieren, wird die zuletzt installierte oder aktivierte Erweiterung ihren Wert verwenden.
        </p>
        <p>
          Um die Startseite des Browsers zu überschreiben, verwenden Sie stattdessen "<a href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides">chrome_settings_overrides</a>".
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
