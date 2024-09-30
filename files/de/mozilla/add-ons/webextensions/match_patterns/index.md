---
title: Match patterns
slug: Mozilla/Add-ons/WebExtensions/Match_patterns
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Match-Muster sind eine Möglichkeit, Gruppen von URLs zu spezifizieren: Ein Match-Muster entspricht einem bestimmten Satz von URLs. Sie werden in WebExtensions-APIs an mehreren Stellen verwendet, insbesondere um festzulegen, in welche Dokumente [Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) geladen werden sollen, und um zu bestimmen, welchen URLs [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)-Listener hinzugefügt werden sollen.

APIs, die Match-Muster verwenden, akzeptieren normalerweise eine Liste von Match-Mustern und führen die entsprechende Aktion durch, wenn die URL einem der Muster entspricht. Siehe zum Beispiel den [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel in der manifest.json.

## Struktur der Match-Muster

> [!NOTE]
> Einige Browser unterstützen bestimmte Schemes nicht.
> Überprüfen Sie die [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität) für Details.

Alle Match-Muster werden als Zeichenfolgen angegeben. Abgesehen vom speziellen Muster [`<all_urls>`](#all_urls) bestehen Match-Muster aus drei Teilen: _scheme_, _host_ und _path_. Das Scheme und der Host werden durch `://` getrennt.

```plain
<scheme>://<host><path>
```

### scheme

Der _scheme_-Teil kann eine von zwei Formen annehmen:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Form</th>
      <th scope="col">Entspricht</th>
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

Der _host_-Teil kann eine von drei Formen annehmen:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Form</th>
      <th scope="col">Entspricht</th>
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
      <td>Ein vollständiger Hostname, ohne Platzhalter.</td>
      <td>Nur der angegebene Host.</td>
    </tr>
  </tbody>
</table>

_host_ darf keine Portnummer enthalten.

_host_ ist nur optional, wenn _scheme_ "file" ist.

Beachten Sie, dass der Platzhalter nur am Anfang erscheinen darf.

### path

Der _path_-Teil muss mit einem `/` beginnen.

Danach kann er jede Kombination aus dem Platzhalter `*` und beliebigen Zeichen enthalten, die in URL-Pfaden oder Abfragezeichenfolgen erlaubt sind. Im Gegensatz zu _host_ kann der _path_-Teil den Platzhalter `*` in der Mitte oder am Ende enthalten, und der Platzhalter `*` kann mehrmals erscheinen.

Der Wert für den _path_ wird mit dem String verglichen, der aus dem URL-Pfad plus der [URL-Abfragezeichenfolge](https://de.wikipedia.org/wiki/Query-String) besteht. Dies schließt das `?` zwischen beiden ein, wenn die Abfragezeichenfolge in der URL vorhanden ist. Wenn Sie beispielsweise URLs auf einer beliebigen Domain abgleichen möchten, bei denen der URL-Pfad mit `foo.bar` endet, müssen Sie ein Array von Match-Mustern wie `["*://*/*foo.bar", "*://*/*foo.bar?*"]` verwenden. Das `?*` ist notwendig, anstatt nur `bar*`, um sicherzustellen, dass das abschließende `*` auf die URL-Abfragezeichenfolge angewandt wird und nicht auf einen Teil des URL-Pfades.

Weder der [URL-Fragment-Identifier](https://de.wikipedia.org/wiki/Fragment-Identifier) noch das ihm vorangegangene `#` werden als Teil des _path_ betrachtet.

> [!NOTE]
> Der Pfadmuster-String sollte keine Portnummer enthalten. Das Hinzufügen eines Ports, wie in: `http://localhost:1234/*`, führt dazu, dass das Match-Muster ignoriert wird. `http://localhost:1234` wird jedoch mit `http://localhost/*` übereinstimmen.

### \<all_urls>

Der spezielle Wert `<all_urls>` entspricht allen URLs unter jedem der unterstützten Schemes: das sind "http", "https", "ws", "wss", "ftp", "data" und "file".

## Beispiele

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Muster</th>
      <th scope="col">Beispielhafte Übereinstimmungen</th>
      <th scope="col">Beispielhafte Nicht-Übereinstimmungen</th>
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
        <p><code>ftp://ftp.example.org/</code><br />(nicht übereinstimmendes Scheme)</p>
        <p><code>file:///a/</code><br />(nicht übereinstimmendes Scheme)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://*.mozilla.org/*</code></p>
        <p>
          Übereinstimmung mit allen HTTP-, HTTPS- und WebSocket-URLs, die auf "mozilla.org" oder einem seiner Subdomains gehostet sind.
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
        <p><code>ftp://mozilla.org/</code><br />(nicht übereinstimmendes Scheme)</p>
        <p><code>http://mozilla.com/</code><br />(nicht übereinstimmender Host)</p>
        <p><code>http://firefox.org/</code><br />(nicht übereinstimmender Host)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://mozilla.org/</code></p>
        <p>
          Übereinstimmung mit allen HTTP-, HTTPS- und WebSocket-URLs, die genau auf "mozilla.org/" gehostet sind.
        </p>
      </td>
      <td>
        <p><code>http://mozilla.org/</code></p>
        <p><code>https://mozilla.org/</code></p>
        <p><code>ws://mozilla.org/</code></p>
        <p><code>wss://mozilla.org/</code></p>
      </td>
      <td>
        <p><code>ftp://mozilla.org/</code><br />(nicht übereinstimmendes Scheme)</p>
        <p><code>http://a.mozilla.org/</code><br />(nicht übereinstimmender Host)</p>
        <p><code>http://mozilla.org/a</code><br />(nicht übereinstimmender Pfad)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>ftp://mozilla.org/</code></p>
        <p>Übereinstimmung nur mit "ftp://mozilla.org/".</p>
      </td>
      <td><code>ftp://mozilla.org</code></td>
      <td>
        <p><code>http://mozilla.org/</code><br />(nicht übereinstimmendes Scheme)</p>
        <p><code>ftp://sub.mozilla.org/</code><br />(nicht übereinstimmender Host)</p>
        <p><code>ftp://mozilla.org/path</code><br />(nicht übereinstimmender Pfad)</p>
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
        <p><code>http://mozilla.org/path</code><br />(nicht übereinstimmendes Scheme)</p>
        <p><code>https://mozilla.org/path/</code><br />(nicht übereinstimmender Pfad)</p>
        <p><code>https://mozilla.org/a</code><br />(nicht übereinstimmender Pfad)</p>
        <p><code>https://mozilla.org/</code><br />(nicht übereinstimmender Pfad)</p>
        <p>
          <code>https://mozilla.org/path?foo=1</code><br />(nicht übereinstimmender Pfad aufgrund der URL-Abfragezeichenfolge)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://*/path/</code></p>
        <p>
          Übereinstimmung mit HTTPS-URLs auf jedem Host, deren Pfad "path/" ist und die keine URL-Abfragezeichenfolge haben.
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/path/</code></p>
        <p><code>https://a.mozilla.org/path/</code></p>
        <p><code>https://something.com/path/</code></p>
      </td>
      <td>
        <p><code>http://mozilla.org/path/</code><br />(nicht übereinstimmendes Scheme)</p>
        <p><code>https://mozilla.org/path</code><br />(nicht übereinstimmender Pfad)</p>
        <p><code>https://mozilla.org/a</code><br />(nicht übereinstimmender Pfad)</p>
        <p><code>https://mozilla.org/</code><br />(nicht übereinstimmender Pfad)</p>
        <p>
          <code>https://mozilla.org/path/?foo=1</code><br />(nicht übereinstimmender Pfad aufgrund der URL-Abfragezeichenfolge)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://mozilla.org/*</code></p>
        <p>
          Übereinstimmung mit HTTPS-URLs nur auf "mozilla.org", mit jedem URL-Pfad und jeder URL-Abfragezeichenfolge.
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
        <p><code>http://mozilla.org/path</code><br />(nicht übereinstimmendes Scheme)</p>
        <p><code>https://mozilla.com/path</code><br />(nicht übereinstimmender Host)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://mozilla.org/a/b/c/</code></p>
        <p>Übereinstimmung nur mit dieser URL oder dieser URL mit einem beliebigen URL-Fragment.</p>
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
          Übereinstimmung mit HTTPS-URLs, die auf "mozilla.org" gehostet sind, wobei der Pfad irgendwo in der Mitte die Komponente "b" enthält. URLs mit Abfragezeichenfolgen werden übereinstimmen, wenn die Zeichenfolge mit einem <code>/</code> endet.
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
        <p><code>https://mozilla.org/b/*/</code><br />(nicht übereinstimmender Pfad)</p>
        <p><code>https://mozilla.org/a/b/</code><br />(nicht übereinstimmender Pfad)</p>
        <p>
          <code>https://mozilla.org/a/b/c/d/?foo=bar</code><br />(nicht übereinstimmender Pfad aufgrund der URL-Abfragezeichenfolge)
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
      <td><code>file:///bleh/</code><br />(nicht übereinstimmender Pfad)</td>
    </tr>
  </tbody>
</table>

### Ungültige Match-Muster

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
      <td>Kein Pfad.</td>
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
      <td>Host darf keine Portnummer enthalten.</td>
    </tr>
    <tr>
      <td><code>*://*</code></td>
      <td>Leerer Pfad: dies sollte "<code>*://*/*</code>" sein.</td>
    </tr>
    <tr>
      <td><code>file://*</code></td>
      <td>Leerer Pfad: dies sollte "<code>file:///*</code>" sein.</td>
    </tr>
  </tbody>
</table>

## Browser-Kompatibilität

{{Compat}}
