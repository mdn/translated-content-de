---
title: Übereinstimmungsmuster
slug: Mozilla/Add-ons/WebExtensions/Match_patterns
l10n:
  sourceCommit: 8f7fa9e7aef0399c7a7f8e5a20476a0c2f287640
---

Übereinstimmungsmuster sind eine Möglichkeit, Gruppen von URLs zu spezifizieren: Ein Übereinstimmungsmuster entspricht einer bestimmten Menge von URLs. Sie werden an einigen Stellen in WebExtensions-APIs verwendet, insbesondere um anzugeben, in welche Dokumente [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) geladen werden sollen, und um anzugeben, welchen URLs [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)-Listener hinzugefügt werden sollen.

APIs, die Übereinstimmungsmuster verwenden, akzeptieren normalerweise eine Liste von Übereinstimmungsmustern und führen die entsprechende Aktion aus, wenn die URL mit einem der Muster übereinstimmt. Siehe zum Beispiel den [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Schlüssel in manifest.json.

## Struktur eines Übereinstimmungsmusters

> [!NOTE]
> Einige Browser unterstützen bestimmte Schemas nicht.
> Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Alle Übereinstimmungsmuster werden als Zeichenfolgen angegeben. Abgesehen vom speziellen Muster [`<all_urls>`](#all_urls) bestehen Übereinstimmungsmuster aus drei Teilen: _scheme_, _host_ und _path_. Das Schema und der Host werden durch `://` getrennt.

```plain
<scheme>://<host><path>
```

### scheme

Der _scheme_-Bestandteil kann eine von zwei Formen annehmen:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Form</th>
      <th scope="col">Treffer</th>
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
      <td>Nur das angegebene Schema.</td>
    </tr>
  </tbody>
</table>

### host

Der _host_-Bestandteil kann eine der folgenden Formen annehmen:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Form</th>
      <th scope="col">Treffer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>*</code></td>
      <td>Jeder Host.</td>
    </tr>
    <tr>
      <td><code>*.</code> gefolgt von einem Teil des Hostnamens, optional inklusive eines Ports.</td>
      <td>Der angegebene Host (und Port) und alle seine Subdomains.</td>
    </tr>
    <tr>
      <td>Ein vollständiger Hostname, ohne Wildcards, optional inklusive eines Ports.</td>
      <td>Nur der Host (und Port).</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Firefox unterstützt aufgrund von ([Firefox Bug 1362809](https://bugzil.la/1362809)) und ([Firefox Bug 1468162](https://bugzil.la/1468162)) nicht die Einbindung einer Portnummer.

_host_ ist nur optional, wenn _scheme_ "file" ist.

Beachten Sie, dass das Wildcard-Zeichen nur am Anfang erscheinen darf.

### path

Der _path_-Bestandteil muss mit einem `/` beginnen.

Danach kann es jede Kombination aus dem `*`-Wildcard und allen Zeichen enthalten, die in URL-Pfaden oder Abfragezeichenfolgen erlaubt sind. Im Gegensatz zu _host_ kann der _path_-Bestandteil das `*`-Wildcard in der Mitte oder am Ende enthalten, und das `*`-Wildcard kann mehrmals erscheinen.

Der Wert für den _path_ stimmt mit dem String überein, der der URL-Pfad plus der [URL-Abfragezeichenfolge](https://en.wikipedia.org/wiki/Query_string) ist. Dies schließt das `?` zwischen den beiden ein, falls die Abfragezeichenfolge in der URL vorhanden ist. Wenn Sie beispielsweise URLs auf einer beliebigen Domain abgleichen möchten, bei denen der URL-Pfad mit `foo.bar` endet, müssen Sie ein Array von Übereinstimmungsmustern wie `["*://*/*foo.bar", "*://*/*foo.bar?*"]` verwenden. Das `?*` ist notwendig, statt nur `bar*`, um das Ende `*` als Anwendung auf die URL-Abfragezeichenfolge zu verankern und nicht auf einen Teil des URL-Pfads.

Weder der [URL-Fragment-Identifikator](https://en.wikipedia.org/wiki/Fragment_identifier) noch das `#`, das ihm vorangeht, werden als Teil des _path_ betrachtet und werden beim Mustermatching ignoriert. Ein Übereinstimmungsmuster, das `#` enthält, wird mit keiner URL übereinstimmen.

### \<all_urls>

Der spezielle Wert `<all_urls>` stimmt mit allen URLs unter jedem der unterstützten Schemata überein: das heißt "http", "https", "ws", "wss", "ftp", "data" und "file".

## Beispiele

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Muster</th>
      <th scope="col">Beispiele für Übereinstimmungen</th>
      <th scope="col">Beispiele für Nicht-Übereinstimmungen</th>
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
        <p><code>resource://a/b/c/</code><br />(nicht unterstütztes Schema)</p>
        <p>
          <code>ftps://files.somewhere.org/</code><br />(nicht unterstütztes Schema)
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
        <p><code>ftp://ftp.example.org/</code><br />(nicht übereinstimmendes Schema)</p>
        <p><code>file:///a/</code><br />(nicht übereinstimmendes Schema)</p>
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
        <p><code>ftp://mozilla.org/</code><br />(nicht übereinstimmendes Schema)</p>
        <p><code>http://mozilla.com/</code><br />(nicht übereinstimmender Host)</p>
        <p><code>http://firefox.org/</code><br />(nicht übereinstimmender Host)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://mozilla.org/</code></p>
        <p>
          Übereinstimmung mit allen HTTP-, HTTPS- und WebSocket-URLs, die genau
          auf "mozilla.org/" gehostet werden.
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
    <tr>
      <td>
        <p><code>https://mozilla.org:8080/</code></p>
        <p>
          Übereinstimmung mit allen HTTPS-URLs, die auf "mozilla.org/" auf Port 8080 gehostet werden.
          Hinweis: Ports werden in Chrome unterstützt, nicht in Firefox.
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org:8080/</code></p>
      </td>
      <td>
        <p><code>http://a.mozilla.org/</code><br />(nicht übereinstimmender Host)</p>
        <p><code>http://mozilla.org:8081</code><br />(nicht übereinstimmender Host)</p>
      </td>
    </tr>
      <td>
        <p><code>ftp://mozilla.org/</code></p>
        <p>Übereinstimmung nur mit "ftp://mozilla.org/".</p>
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
        <p>Übereinstimmung mit HTTPS-URLs auf jedem Host, deren Pfad "path" ist.</p>
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
          <code>https://mozilla.org/path?foo=1</code><br />(nicht übereinstimmender Pfad aufgrund der URL-Abfragezeichenkette)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://*/path/</code></p>
        <p>
          Übereinstimmung mit HTTPS-URLs auf jedem Host, deren Pfad "path/" ist und die keine URL-Abfragezeichenkette haben.
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
          <code>https://mozilla.org/path/?foo=1</code
          ><br />(nicht übereinstimmender Pfad aufgrund der URL-Abfragezeichenkette)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://mozilla.org/*</code></p>
        <p>
          Übereinstimmung mit HTTPS-URLs nur bei "mozilla.org", mit jedem URL-Pfad und jeder URL-Abfragezeichenkette.
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
        <p>Übereinstimmung nur mit dieser URL oder dieser URL mit beliebigem URL-Fragment.</p>
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
          Übereinstimmung mit HTTPS-URLs, die auf "mozilla.org" gehostet werden und deren Pfad irgendwo in der Mitte eine Komponente "b" enthält. Wird URL mit Abfragezeichenfolgen entsprechen, wenn die Zeichenfolge mit einem <code>/</code> endet.
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
          <code>https://mozilla.org/a/b/c/d/?foo=bar</code><br />(nicht übereinstimmender Pfad aufgrund der URL-Abfragezeichenkette)
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

### Ungültige oder nicht übereinstimmende Muster

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Muster</th>
      <th scope="col">Problem</th>
      <th scope="col">Grund</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>resource://path/</code></td>
      <td>Ungültig</td>
      <td>Nicht unterstütztes Schema.</td>
    </tr>
    <tr>
      <td><code>https://mozilla.org</code></td>
      <td>Ungültig</td>
      <td>Kein Pfad.</td>
    </tr>
    <tr>
      <td><code>https://www.mozilla.org/#section1</code></td>
      <td>Nicht übereinstimmend</td>
      <td>Enthält ein Referenzfragment: Die URL, mit der das Muster übereinstimmt, hat jedes Referenzfragment entfernt, bevor es übereinstimmt.</td>
    </tr>
    <tr>
      <td><code>https://mozilla.*.org/</code></td>
      <td>Ungültig</td>
      <td>"*" im Host muss am Anfang stehen.</td>
    </tr>
    <tr>
      <td><code>https://*zilla.org/</code></td>
      <td>Ungültig</td>
      <td>"*" im Host muss das einzige Zeichen sein oder von "." gefolgt werden.</td>
    </tr>
    <tr>
      <td><code>http*://mozilla.org/</code></td>
      <td>Ungültig</td>
      <td>"*" im Schema muss das einzige Zeichen sein.</td>
    </tr>
    <tr>
      <td><code>*://*</code></td>
      <td>Ungültig</td>
      <td>Leerer Pfad: Dies sollte <code>*://*/*</code> sein.</td>
    </tr>
    <tr>
      <td><code>file://*</code></td>
      <td>Ungültig</td>
      <td>Leerer Pfad: Dies sollte <code>file:///*</code> sein. <code>file://*</code> wird akzeptiert, wenn es in <code>host_permissions</code> in Chrome erklärt wird, was den Eintrag automatisch zu <code>file:///*</code> korrigiert.</td>
    </tr>
  </tbody>
</table>

## Browser-Kompatibilität

{{Compat}}
