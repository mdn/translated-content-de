---
title: Mustermuster
slug: Mozilla/Add-ons/WebExtensions/Match_patterns
l10n:
  sourceCommit: e13b6ffe7c9cb05c6a89fcb3c8fcbc987eb05211
---

{{AddonSidebar}}

Mustermuster sind eine Möglichkeit, Gruppen von URLs zu spezifizieren: Ein Mustermuster entspricht einer bestimmten Gruppe von URLs. Sie werden in WebExtensions APIs an einigen Stellen verwendet, vor allem um anzugeben, in welche Dokumente [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) geladen werden sollen, und um anzugeben, auf welche URLs [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) Listener hinzugefügt werden sollen.

APIs, die Mustermuster verwenden, akzeptieren normalerweise eine Liste von Mustermustern und führen die entsprechende Aktion aus, wenn die URL mit einem der Muster übereinstimmt. Siehe zum Beispiel den [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Schlüssel in manifest.json.

## Struktur von Mustermustern

> [!NOTE]
> Einige Browser unterstützen bestimmte Schemata nicht.
> Überprüfen Sie die [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität) für Details.

Alle Mustermuster sind als Zeichenfolgen angegeben. Abgesehen vom speziellen [`<all_urls>`](#all_urls) Muster bestehen Mustermuster aus drei Teilen: _scheme_, _host_ und _path_. Das Schema und der Host sind durch `://` getrennt.

```plain
<scheme>://<host><path>
```

### scheme

Die Komponente _scheme_ kann eine von zwei Formen annehmen:

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
        Eine der folgenden: <code>http</code>, <code>https</code>, <code>ws</code>,
        <code>wss</code>, <code>ftp</code>, <code>data</code>,
        <code>file</code>, oder <code>(chrome-)extension</code>.
      </td>
      <td>Nur das angegebene Schema.</td>
    </tr>
  </tbody>
</table>

### host

Die Komponente _host_ kann eine von drei Formen annehmen:

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
      <td>Ein vollständiger Hostname ohne Platzhalter.</td>
      <td>Nur der angegebene Host.</td>
    </tr>
  </tbody>
</table>

_host_ darf keine Portnummer enthalten.

_host_ ist nur optional, wenn das _scheme_ "file" ist.

Beachten Sie, dass der Platzhalter nur am Anfang stehen darf.

### path

Die Komponente _path_ muss mit einem `/` beginnen.

Danach kann sie jede Kombination des `*` Platzhalters und der Zeichen enthalten, die in URL-Pfaden oder Abfragezeichenfolgen erlaubt sind. Im Gegensatz zu _host_ kann die Komponente _path_ den `*` Platzhalter in der Mitte oder am Ende enthalten, und der `*` Platzhalter kann mehrmals auftauchen.

Der Wert für den _path_ wird mit dem String abgeglichen, der der URL-Pfad plus die [URL-Abfragezeichenfolge](https://de.wikipedia.org/wiki/Query_string) ist. Dazu gehört das `?` zwischen den beiden, wenn die Abfragezeichenfolge in der URL vorhanden ist. Zum Beispiel, wenn Sie URLs auf einer beliebigen Domain abgleichen wollen, bei denen der URL-Pfad mit `foo.bar` endet, dann müssen Sie ein Array von Mustermustern wie `["*://*/*foo.bar", "*://*/*foo.bar?*"]` verwenden. Das `?*` wird benötigt, anstatt einfach `bar*`, um das Ende `*` als auf die URL-Abfragezeichenfolge anwendbar zu verankern und nicht auf einen Teil des URL-Pfads.

Weder der [URL-Fragment-Identifier](https://de.wikipedia.org/wiki/Fragment_identifier) noch das `#`, das ihm vorausgeht, werden als Teil des _path_ betrachtet.

> [!NOTE]
> Der Path-Muster-String sollte keine Portnummer enthalten. Das Hinzufügen eines Ports, wie in: `http://localhost:1234/*`, führt dazu, dass das Mustermuster ignoriert wird. Jedoch, `http://localhost:1234` wird mit `http://localhost/*` übereinstimmen.

### \<all_urls>

Der spezielle Wert `<all_urls>` entspricht allen URLs unter einem der unterstützten Schemata: das heißt "http", "https", "ws", "wss", "ftp", "data" und "file".

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
        <p>Entspricht allen URLs.</p>
      </td>
      <td>
        <p><code>http://example.org/</code></p>
        <p><code>https://a.org/some/path/</code></p>
        <p><code>ws://sockets.somewhere.org/</code></p>
        <p><code>wss://ws.example.com/stuff/</code></p>
        <p><code>ftp://files.somewhere.org/</code></p>
      </td>
      <td>
        <p><code>resource://a/b/c/</code><br />(unterstütztes Schema)</p>
        <p>
          <code>ftps://files.somewhere.org/</code><br />(unterstütztes Schema)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://*/*</code></p>
        <p>Entspricht allen HTTP-, HTTPS- und WebSocket-URLs.</p>
      </td>
      <td>
        <p><code>http://example.org/</code></p>
        <p><code>https://a.org/some/path/</code></p>
        <p><code>ws://sockets.somewhere.org/</code></p>
        <p><code>wss://ws.example.com/stuff/</code></p>
      </td>
      <td>
        <p><code>ftp://ftp.example.org/</code><br />(nicht übereinstimmendes Schema)</p>
        <p><code>file:///a/</code><br />(nicht übereinstimmendes Schema)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://*.mozilla.org/*</code></p>
        <p>
          Entspricht allen HTTP-, HTTPS- und WebSocket-URLs, die bei
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
        <p><code>ftp://mozilla.org/</code><br />(nicht übereinstimmendes Schema)</p>
        <p><code>http://mozilla.com/</code><br />(nicht übereinstimmender Host)</p>
        <p><code>http://firefox.org/</code><br />(nicht übereinstimmender Host)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://mozilla.org/</code></p>
        <p>
          Entspricht allen HTTP-, HTTPS- und WebSocket-URLs, die exakt bei
          "mozilla.org/" gehostet werden.
        </p>
      </td>
      <td>
        <p><code>http://mozilla.org/</code></p>
        <p><code>https://mozilla.org/</code></p>
        <p><code>ws://mozilla.org/</code></p>
        <p><code>wss://mozilla.org/</code></p>
      </td>
      <td>
        <p><code>ftp://mozilla.org/</code><br />(nicht übereinstimmendes Schema)</p>
        <p><code>http://a.mozilla.org/</code><br />(nicht übereinstimmender Host)</p>
        <p><code>http://mozilla.org/a</code><br />(nicht übereinstimmender Pfad)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>ftp://mozilla.org/</code></p>
        <p>Entspricht nur "ftp://mozilla.org/".</p>
      </td>
      <td><code>ftp://mozilla.org</code></td>
      <td>
        <p><code>http://mozilla.org/</code><br />(nicht übereinstimmendes Schema)</p>
        <p><code>ftp://sub.mozilla.org/</code><br />(nicht übereinstimmender Host)</p>
        <p><code>ftp://mozilla.org/path</code><br />(nicht übereinstimmender Pfad)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://*/path</code></p>
        <p>Entspricht HTTPS-URLs auf jedem Host, deren Pfad "path" ist.</p>
      </td>
      <td>
        <p><code>https://mozilla.org/path</code></p>
        <p><code>https://a.mozilla.org/path</code></p>
        <p><code>https://something.com/path</code></p>
      </td>
      <td>
        <p><code>http://mozilla.org/path</code><br />(nicht übereinstimmendes Schema)</p>
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
          Entspricht HTTPS-URLs auf jedem Host, deren Pfad "path/" ist und die
          keine URL-Abfragezeichenfolge haben.
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/path/</code></p>
        <p><code>https://a.mozilla.org/path/</code></p>
        <p><code>https://something.com/path/</code></p>
      </td>
      <td>
        <p><code>http://mozilla.org/path/</code><br />(nicht übereinstimmendes Schema)</p>
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
          Entspricht HTTPS-URLs nur bei "mozilla.org", mit jedem URL-Pfad und
          jeder URL-Abfragezeichenfolge.
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
        <p><code>http://mozilla.org/path</code><br />(nicht übereinstimmendes Schema)</p>
        <p><code>https://mozilla.com/path</code><br />(nicht übereinstimmender Host)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://mozilla.org/a/b/c/</code></p>
        <p>Entspricht nur dieser URL oder dieser URL mit jedem URL-Fragment.</p>
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
          Entspricht HTTPS-URLs, die bei "mozilla.org" gehostet sind und deren
          Pfad irgendwo in der Mitte eine Komponente "b" enthält. Wird mit
          URLs mit Abfragezeichenfolgen übereinstimmen, wenn der String mit
          einem <code>/</code> endet.
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/a/b/c/</code></p>
        <p><code>https://mozilla.org/d/b/f/</code></p>
        <p><code>https://mozilla.org/a/b/c/d/</code></p>
        <p><code>https://mozilla.org/a/b/c/d/#section1</code></p>
        <p><code>https://mozilla.org/a/b/c/d/?foo=/</code></p>
        <p>
          <code>https://mozilla.org/a?foo=21314&#x26;bar=/b/&#x26;extra=c/</code>
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
        <p>Entspricht jeder FILE-URL, deren Pfad mit "blah" beginnt.</p>
      </td>
      <td>
        <p><code>file:///blah/</code></p>
        <p><code>file:///blah/bleh</code></p>
      </td>
      <td><code>file:///bleh/</code><br />(nicht übereinstimmender Pfad)</td>
    </tr>
  </tbody>
</table>

### Ungültige Mustermuster

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
      <td>Nicht unterstütztes Schema.</td>
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
      <td>"*" im Schema muss das einzige Zeichen sein.</td>
    </tr>
    <tr>
      <td><code>https://mozilla.org:80/</code></td>
      <td>Host darf keine Portnummer enthalten.</td>
    </tr>
    <tr>
      <td><code>*://*</code></td>
      <td>Leerer Pfad: dies sollte <code>*://*/*</code> sein.</td>
    </tr>
    <tr>
      <td><code>file://*</code></td>
      <td>Leerer Pfad: dies sollte <code>file:///*</code> sein.</td>
    </tr>
  </tbody>
</table>

## Browser-Kompatibilität

{{Compat}}
