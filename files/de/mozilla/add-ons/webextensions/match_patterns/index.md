---
title: Übereinstimmungsmuster
slug: Mozilla/Add-ons/WebExtensions/Match_patterns
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Übereinstimmungsmuster sind eine Methode, um Gruppen von URLs zu spezifizieren: Ein Übereinstimmungsmuster passt auf eine bestimmte Menge von URLs. Sie werden in den WebExtensions-APIs an einigen Stellen verwendet, insbesondere um zu definieren, in welche Dokumente [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) geladen werden sollen, und um anzugeben, bei welchen URLs [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) Listener hinzugefügt werden sollen.

APIs, die Übereinstimmungsmuster verwenden, akzeptieren in der Regel eine Liste von Übereinstimmungsmustern und führen die entsprechende Aktion aus, wenn die URL einem der Muster entspricht. Siehe zum Beispiel den [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel in manifest.json.

## Struktur des Übereinstimmungsmusters

> [!NOTE]
> Einige Browser unterstützen bestimmte Schemes nicht.
> Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Alle Übereinstimmungsmuster werden als Strings angegeben. Abgesehen vom speziellen Muster [`<all_urls>`](#all_urls) bestehen Übereinstimmungsmuster aus drei Teilen: _scheme_, _host_ und _path_. Scheme und Host sind durch `://` getrennt.

```plain
<scheme>://<host><path>
```

### scheme

Die Komponente _scheme_ kann eine von zwei Formen annehmen:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Form</th>
      <th scope="col">Übereinstimmungen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>*</code></td>
      <td>
        Nur "http" und "https" und in einigen Browsern auch
        <a href="/de/docs/Web/API/WebSockets_API">"ws" und "wss"</a>.
      </td>
    </tr>
    <tr>
      <td>
        Eines von <code>http</code>, <code>https</code>, <code>ws</code>,
        <code>wss</code>, <code>ftp</code>, <code>data</code>,
        <code>file</code> oder <code>(chrome-)extension</code>.
      </td>
      <td>Nur das angegebene Scheme.</td>
    </tr>
  </tbody>
</table>

### host

Die Komponente _host_ kann eine von drei Formen annehmen:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Form</th>
      <th scope="col">Übereinstimmungen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>*</code></td>
      <td>Jeder Host.</td>
    </tr>
    <tr>
      <td><code>*.</code> gefolgt von einem Teil des Hostnamens.</td>
      <td>Der angegebene Host und alle seine Subdomains.</td>
    </tr>
    <tr>
      <td>Ein vollständiger Hostname ohne Platzhalter.</td>
      <td>Nur der angegebene Host.</td>
    </tr>
  </tbody>
</table>

_host_ darf keine Portnummer enthalten.

_host_ ist nur dann optional, wenn das _scheme_ "file" ist.

Beachten Sie, dass das Platzhalterzeichen nur am Anfang stehen darf.

### path

Die Komponente _path_ muss mit einem `/` beginnen.

Danach kann sie jede Kombination aus dem Platzhalterzeichen `*` und den Zeichen enthalten, die in URL-Pfaden oder Abfragezeichenfolgen erlaubt sind. Im Gegensatz zu _host_ darf die Komponente _path_ das Platzhalterzeichen `*` in der Mitte oder am Ende enthalten, und das Platzhalterzeichen `*` darf mehr als einmal vorkommen.

Der Wert für den _path_ wird mit dem String abgeglichen, der aus dem URL-Pfad plus der [URL-Abfragezeichenfolge](https://en.wikipedia.org/wiki/Query_string) besteht. Dies schließt gegebenenfalls das `?` zwischen den beiden ein, wenn die Abfragezeichenfolge in der URL vorhanden ist. Wenn Sie beispielsweise URLs in einer beliebigen Domain abgleichen möchten, bei denen der URL-Pfad mit `foo.bar` endet, müssen Sie ein Array von Übereinstimmungsmustern wie `["*://*/*foo.bar", "*://*/*foo.bar?*"]` verwenden. Das `?*` ist notwendig, um zu verhindern, dass das abschließende `*` auf den URL-Pfad anstelle der URL-Abfragezeichenfolge angewendet wird.

Weder der [URL-Fragment-Identifier](https://en.wikipedia.org/wiki/Fragment_identifier) noch das `#`, das ihm vorangeht, werden als Teil des _path_ betrachtet.

> [!NOTE]
> Die String-Formatierung für das Pfadmuster sollte keine Portnummer enthalten. Das Hinzufügen eines Ports, wie in: `http://localhost:1234/*`, führt dazu, dass das Übereinstimmungsmuster ignoriert wird. Jedoch passt `http://localhost:1234` zu `http://localhost/*`.

### \<all_urls>

Der spezielle Wert `<all_urls>` stimmt mit allen URLs unter jedem unterstützten Scheme überein, das sind "http", "https", "ws", "wss", "ftp", "data" und "file".

## Beispiele

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Muster</th>
      <th scope="col">Beispielmatches</th>
      <th scope="col">Beispiel-Nicht-Übereinstimmungen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p><code>&#x3C;all_urls></code></p>
        <p>Übereinstimmung mit allen URLs.</p>
      </td>
      <td>
        <p><code>http://example.org/</code></p>
        <p><code>https://a.org/some/path/</code></p>
        <p><code>ws://sockets.somewhere.org/</code></p>
        <p><code>wss://ws.example.com/stuff/</code></p>
        <p><code>ftp://files.somewhere.org/</code></p>
      </td>
      <td>
        <p><code>resource://a/b/c/</code><br />(nicht unterstütztes Scheme)</p>
        <p>
          <code>ftps://files.somewhere.org/</code><br />(nicht unterstütztes Scheme)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://*/*</code></p>
        <p>Übereinstimmung mit allen HTTP-, HTTPS- und WebSocket-URLs.</p>
      </td>
      <td>
        <p><code>http://example.org/</code></p>
        <p><code>https://a.org/some/path/</code></p>
        <p><code>ws://sockets.somewhere.org/</code></p>
        <p><code>wss://ws.example.com/stuff/</code></p>
      </td>
      <td>
        <p><code>ftp://ftp.example.org/</code><br />(nicht passendes Scheme)</p>
        <p><code>file:///a/</code><br />(nicht passendes Scheme)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://*.mozilla.org/*</code></p>
        <p>
          Übereinstimmung mit allen HTTP-, HTTPS- und WebSocket-URLs, die auf
          "mozilla.org" oder einer seiner Subdomains gehostet werden.
        </p>
      </td>
      <td>
        <p><code>http://mozilla.org/</code></p>
        <p><code>https://mozilla.org/</code></p>
        <p><code>http://a.mozilla.org/</code></p>
        <p><code>http://a.b.mozilla.org/</code></p>
        <p><code>https://b.mozilla.org/path/</code></p>
        <p><code>ws://ws.mozilla.org/</code></p>
        <p><code>wss://secure.mozilla.org/something</code></p>
      </td>
      <td>
        <p><code>ftp://mozilla.org/</code><br />(nicht passendes Scheme)</p>
        <p><code>http://mozilla.com/</code><br />(nicht passender Host)</p>
        <p><code>http://firefox.org/</code><br />(nicht passender Host)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://mozilla.org/</code></p>
        <p>
          Übereinstimmung mit allen HTTP-, HTTPS- und WebSocket-URLs, die
          exakt unter "mozilla.org/" gehostet werden.
        </p>
      </td>
      <td>
        <p><code>http://mozilla.org/</code></p>
        <p><code>https://mozilla.org/</code></p>
        <p><code>ws://mozilla.org/</code></p>
        <p><code>wss://mozilla.org/</code></p>
      </td>
      <td>
        <p><code>ftp://mozilla.org/</code><br />(nicht passendes Scheme)</p>
        <p><code>http://a.mozilla.org/</code><br />(nicht passender Host)</p>
        <p><code>http://mozilla.org/a</code><br />(nicht passender Pfad)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>ftp://mozilla.org/</code></p>
        <p>Übereinstimmung nur mit "ftp://mozilla.org/".</p>
      </td>
      <td><code>ftp://mozilla.org</code></td>
      <td>
        <p><code>http://mozilla.org/</code><br />(nicht passendes Scheme)</p>
        <p><code>ftp://sub.mozilla.org/</code><br />(nicht passender Host)</p>
        <p><code>ftp://mozilla.org/path</code><br />(nicht passender Pfad)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://*/path</code></p>
        <p>Übereinstimmung mit HTTPS-URLs auf jedem Host, deren Pfad "path" ist.</p>
      </td>
      <td>
        <p><code>https://mozilla.org/path</code></p>
        <p><code>https://a.mozilla.org/path</code></p>
        <p><code>https://something.com/path</code></p>
      </td>
      <td>
        <p><code>http://mozilla.org/path</code><br />(nicht passendes Scheme)</p>
        <p><code>https://mozilla.org/path/</code><br />(nicht passender Pfad)</p>
        <p><code>https://mozilla.org/a</code><br />(nicht passender Pfad)</p>
        <p><code>https://mozilla.org/</code><br />(nicht passender Pfad)</p>
        <p>
          <code>https://mozilla.org/path?foo=1</code><br />(nicht passender Pfad aufgrund
          der URL-Abfragezeichenfolge)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://*/path/</code></p>
        <p>
          Übereinstimmung mit HTTPS-URLs auf jedem Host, deren Pfad "path/" ist
          und die keine URL-Abfragezeichenfolge haben.
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/path/</code></p>
        <p><code>https://a.mozilla.org/path/</code></p>
        <p><code>https://something.com/path</code>/</p>
      </td>
      <td>
        <p><code>http://mozilla.org/path/</code><br />(nicht passendes Scheme)</p>
        <p><code>https://mozilla.org/path</code><br />(nicht passender Pfad)</p>
        <p><code>https://mozilla.org/a</code><br />(nicht passender Pfad)</p>
        <p><code>https://mozilla.org/</code><br />(nicht passender Pfad)</p>
        <p>
          <code>https://mozilla.org/path/?foo=1</code
          ><br />(nicht passender Pfad aufgrund der URL-Abfragezeichenfolge)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://mozilla.org/*</code></p>
        <p>
          Übereinstimmung mit HTTPS-URLs nur bei "mozilla.org", mit jedem URL-Pfad
          und jeder URL-Abfragezeichenfolge.
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/</code></p>
        <p><code>https://mozilla.org/path</code></p>
        <p><code>https://mozilla.org/another</code></p>
        <p><code>https://mozilla.org/path/to/doc</code></p>
        <p><code>https://mozilla.org/path/to/doc?foo=1</code></p>
      </td>
      <td>
        <p><code>http://mozilla.org/path</code><br />(nicht passendes Scheme)</p>
        <p><code>https://mozilla.com/path</code><br />(nicht passender Host)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://mozilla.org/a/b/c/</code></p>
        <p>Übereinstimmung nur mit dieser URL oder mit dieser URL mit einem beliebigem URL-Fragment.</p>
      </td>
      <td>
        <p><code>https://mozilla.org/a/b/c/</code></p>
        <p><code>https://mozilla.org/a/b/c/#section1</code></p>
      </td>
      <td>Alles andere.</td>
    </tr>
    <tr>
      <td>
        <p><code>https://mozilla.org/*/b/*/</code></p>
        <p>
          Übereinstimmung mit HTTPS-URLs, die auf "mozilla.org" gehostet werden,
          deren Pfad irgendwo in der Mitte eine Komponente "b" enthält. URLs mit
          Abfragezeichenfolgen werden übereinstimmen, wenn die Zeichenfolge mit einem
          <code>/</code> endet.
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/a/b/c/</code></p>
        <p><code>https://mozilla.org/d/b/f/</code></p>
        <p><code>https://mozilla.org/a/b/c/d/</code></p>
        <p><code>https://mozilla.org/a/b/c/d/#section1</code></p>
        <p><code>https://mozilla.org/a/b/c/d/?foo=/</code></p>
        <p>
          <code
            >https://mozilla.org/a?foo=21314&#x26;bar=/b/&#x26;extra=c/</code
          >
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/b/*/</code><br />(nicht passender Pfad)</p>
        <p><code>https://mozilla.org/a/b/</code><br />(nicht passender Pfad)</p>
        <p>
          <code>https://mozilla.org/a/b/c/d/?foo=bar</code><br />(nicht passender Pfad
          aufgrund der URL-Abfragezeichenfolge)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>file:///blah/*</code></p>
        <p>Übereinstimmung mit jeder FILE-URL, deren Pfad mit "blah" beginnt.</p>
      </td>
      <td>
        <p><code>file:///blah/</code></p>
        <p><code>file:///blah/bleh</code></p>
      </td>
      <td><code>file:///bleh/</code><br />(nicht passender Pfad)</td>
    </tr>
  </tbody>
</table>

### Ungültige Übereinstimmungsmuster

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Ungültiges Muster</th>
      <th scope="col">Grund</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>resource://path/</code></td>
      <td>Nicht unterstütztes Scheme.</td>
    </tr>
    <tr>
      <td><code>https://mozilla.org</code></td>
      <td>Kein Pfad vorhanden.</td>
    </tr>
    <tr>
      <td><code>https://mozilla.*.org/</code></td>
      <td>"*" im Host muss am Anfang stehen.</td>
    </tr>
    <tr>
      <td><code>https://*zilla.org/</code></td>
      <td>"*" im Host muss das einzige Zeichen sein oder von "." gefolgt werden.</td>
    </tr>
    <tr>
      <td><code>http*://mozilla.org/</code></td>
      <td>"*" im Scheme muss das einzige Zeichen sein.</td>
    </tr>
    <tr>
      <td><code>https://mozilla.org:80/</code></td>
      <td>Der Host darf keine Portnummer enthalten.</td>
    </tr>
    <tr>
      <td><code>*://*</code></td>
      <td>Leerzeichen: das sollte <code>*://*/*</code> sein.</td>
    </tr>
    <tr>
      <td><code>file://*</code></td>
      <td>Leerzeichen: das sollte <code>file:///*</code> sein.</td>
    </tr>
  </tbody>
</table>

## Browser-Kompatibilität

{{Compat}}
