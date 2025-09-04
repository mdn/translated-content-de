---
title: content_scripts
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts
l10n:
  sourceCommit: d48c7a79d5a56ff10644fc79990cb75b04a5f626
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Array</code></td>
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
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["borderify.js"]
  }
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Anweisungen an den Browser, [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) in Webseiten zu laden, deren URL einem Muster entspricht.

Dieser Schlüssel ist ein Array. Jedes Element ist ein Objekt, welches:

- **muss** eine Eigenschaft namens **`matches`** enthalten, die die zu passenden URL-Muster angibt, für die die Skripte geladen werden sollen;
- **kann** Eigenschaften namens **`js`** und **`css`** enthalten, die Skripte und Stylesheets auflisten, die in passende Seiten geladen werden sollen; und
- **kann** eine Reihe anderer Eigenschaften enthalten, die Aspekte steuern, wie und wann Content-Skripte geladen werden.

Diese Tabelle beschreibt alle Eigenschaften, die Sie einschließen können.

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
        <a id="all_frames"><code>all_frames</code></a>
      </td>
      <td><code>Boolean</code></td>
      <td>
        <dl>
          <dt><code>true</code></dt>
          <dd>
            <p>
              Injektion der in <code><a href="#js">js</a></code> und <code><a href="#css">css</a></code> angegebenen Skripte in alle Frames, die den angegebenen URL-Anforderungen entsprechen, auch wenn der Frame nicht der oberste Frame in einem Tab ist. Dies injiziert nicht in untergeordnete Frames, wenn nur deren übergeordneter Frame den URL-Anforderungen entspricht und der untergeordnete Frame nicht den URL-Anforderungen entspricht. Die URL-Anforderungen werden für jedes Frame unabhängig überprüft.
            </p>
            <div class="notecard note">
              <p>
                <strong>Hinweis:</strong> Dies gilt auch für Tracker oder Anzeigen, die Iframes verwenden, was bedeutet, dass bei Aktivierung Ihr Content-Skript möglicherweise auf einigen Seiten dutzende Male aufgerufen wird.
              </p>
            </div>
          </dd>
          <dt><code>false</code></dt>
          <dd>
            Injektion nur in Frames, die den URL-Anforderungen entsprechen und der oberste Frame in einem Tab sind.
          </dd>
        </dl>
        <p>Standardwert ist <code>false</code>.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="css"><code>css</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          Ein Array von Pfaden, relativ zu <code>manifest.json</code>, das CSS-Dateien referenziert, die in passende Seiten injiziert werden sollen. Informationen zur Reihenfolge, in der Dateien injiziert werden, finden Sie unter <a href="#load_order">Ladereihenfolge</a>.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Firefox löst URLs in injizierten CSS-Dateien relativ zur CSS-Datei selbst auf, nicht zur Seite, in die es injiziert ist.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <a id="css_origin"><code>css_origin</code></a>
        <br />{{optional_inline}}
      </td>
      <td><code>String</code></td>
      <td>
        <p>
          Der Ursprung der zu injizierenden CSS-Dateien. Dies beeinflusst die Reihenfolge der Kaskadierung (Priorität) der injizierten Stylesheets. Dieser String nimmt folgende Werte an:
          <ul>
            <li><code>"user"</code></li>
            <li><code>"author"</code> (Standard)</li>
          </ul>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="exclude_globs"><code>exclude_globs</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von Strings, das Platzhalter enthält. Siehe <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a> unten.
      </td>
    </tr>
    <tr>
      <td>
        <a id="exclude_matches"><code>exclude_matches</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">Musterübereinstimmungen</a>. Siehe <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a> unten.
      </td>
    </tr>
    <tr>
      <td>
        <a id="include_globs"><code>include_globs</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von Strings, das Platzhalter enthält. Siehe <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a> unten.
      </td>
    </tr>
    <tr>
      <td>
        <a id="js"><code>js</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          Ein Array von Pfaden, relativ zu <code>manifest.json</code>, das JavaScript-Dateien referenziert, die in passende Seiten injiziert werden sollen. Informationen zur Reihenfolge, in der Dateien injiziert werden, finden Sie unter <a href="#load_order">Ladereihenfolge</a>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><a id="match_about_blank">match_about_blank</a></code>
      </td>
      <td><code>Boolean</code></td>
      <td>
        <p>
          Injektion der Content-Skripte in Seiten, deren URL <code>"about:blank"</code> oder <code>"about:srcdoc"</code> ist, wenn die URL der Seite, die diese Seite geöffnet oder erstellt hat, den im Rest des <code>content_scripts</code>-Schlüssels angegebenen Mustern entspricht.
        </p>
        <p>
          Dies ist besonders nützlich, um Skripte in leeren Iframes auszuführen, deren URL <code>"about:blank"</code> ist. Dazu sollten Sie auch den <code>all_frames</code>-Schlüssel setzen.
        </p>
        <p>
          Beispiel: Angenommen, Sie haben einen <code>content_scripts</code>-Schlüssel wie diesen:
        </p>
        <pre class="brush: json">
  "content_scripts": [
    {
      "js": ["my-script.js"],
      "matches": ["https://example.org/"],
      "match_about_blank": true,
      "all_frames": true
    }
  ]</pre
        >
        <p>
          Wenn der Nutzer <code>https://example.org/</code> lädt und diese Seite ein leeres Iframe einbettet, wird <code>"my-script.js"</code> in das Iframe geladen.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> <code>match_about_blank</code> wird ab Version 52 in Firefox unterstützt.
          </p>
          <p>
            Beachten Sie, dass in Firefox Content-Skripte nicht in leere Iframes bei <code>"document_start"</code> injiziert werden, auch wenn Sie diesen Wert in <code><a href="#run_at">run_at</a></code> angeben.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a id="match_origin_as_fallback">match_origin_as_fallback</a></code>
      </td>
      <td><code>Boolean</code></td>
      <td>
        Wenn <code>true</code>, wird Code auf <code>about:</code>, <code>data:</code> und <code>blob:</code> Seiten injiziert, wenn ihr Ursprung dem Muster in <code>matches</code> entspricht, selbst wenn der Dokumentursprung undurchsichtig ist (aufgrund der Verwendung von CSP oder Iframe-Sandbox). Musterübereinstimmungen in <code>matches</code> müssen ein Wildcard-Pfad-Glob angeben. Standardwert ist <code>false</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="matches"><code>matches</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          Ein Array von <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">Musterübereinstimmungen</a>. Siehe <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a> unten.
        </p>
        <p>Dies ist der einzige verpflichtende Schlüssel.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="run_at"><code>run_at</code></a>
      </td>
      <td><code>String</code></td>
      <td>
        <p>
          Diese Option bestimmt, wann die in <code><a href="#css">css</a></code> und <code><a href="#js">js</a></code> angegebenen Dateien injiziert werden. Sie können hier einen von drei String-Werten angeben, die jeweils einen Zustand im Prozess des Ladens eines Dokuments identifizieren. Die Zustände entsprechen direkt dem [`Document.readyState`](/de/docs/Web/API/Document/readyState):
        </p>
        <dl>
          <dt><code>"document_start"</code></dt>
          <dd>
            Entspricht <code>loading</code>. Der DOM wird noch geladen.
          </dd>
          <dt><code>"document_end"</code></dt>
          <dd>
            Entspricht <code>interactive</code>. Der DOM ist fertig geladen, aber Ressourcen wie Skripte und Bilder werden möglicherweise noch geladen.
          </dd>
          <dt><code>"document_idle"</code></dt>
          <dd>
            Entspricht <code>complete</code>. Das Dokument und alle seine Ressourcen sind fertig geladen.
          </dd>
        </dl>
        <p>Der Standardwert ist <code>"document_idle"</code>.</p>
        <p>
          In allen Fällen werden Dateien in <code><a href="#js">js</a></code> nach Dateien in <code><a href="#css">css</a></code> injiziert.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="world"><code>world</code></a>
      </td>
      <td><code>String</code></td>
      <td>
        <p>
          Die JavaScript-Welt, in der das Skript ausgeführt wird.
        </p>
        <dl>
          <dt><code>"ISOLATED"</code></dt>
          <dd>
            Die Standardausführungsumgebung für <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts">Content-Skripte</a>. Diese Umgebung ist vom Kontext der Seite isoliert: Während sie dasselbe Dokument teilen, unterscheiden sich die globalen Bereiche und verfügbaren APIs.
          </dd>
          <dt><code>"MAIN"</code></dt>
          <dd>
            Die Ausführungsumgebung der Webseite. Diese Umgebung wird ohne Isolierung mit der Webseite geteilt. Skripte in dieser Umgebung haben keinen Zugriff auf die APIs, die nur für Content-Skripte verfügbar sind.
            <div class="notecard warning" id="sect1">
              <p>
                <strong>Warnung:</strong> Aufgrund der fehlenden Isolierung kann die Webseite den ausgeführten Code erkennen und beeinträchtigen. Verwenden Sie die <code>MAIN</code>-Welt nur, wenn es akzeptabel ist, dass Webseiten die Logik oder Daten lesen, auf sie zugreifen oder verändern können, die durch den ausgeführten Code fließen.
              </p>
            </div>
          </dd>
        </dl>
        <p>Der Standardwert ist <code>"ISOLATED"</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Ladereihenfolge

Registrierte Objekte in `content_scripts` werden in die passenden Webseiten zu dem in `run_at` angegebenen Zeitpunkt injiziert (zuerst `document_start`, dann `document_end` und schließlich `document_idle`):

- In der Reihenfolge, die im `content_scripts`-Array angegeben ist, für jedes Objekt mit einem passenden `run_at`-Wert, dann:
  - CSS wird in der im `css`-Array angegebenen Reihenfolge angewendet. Standardmäßig erhält CSS aus dem `"author"`-Ursprung die Priorität, es sei denn, `css_origin` ist auf `"user"` gesetzt.
  - JavaScript-Code wird in der im `js`-Array angegebenen Reihenfolge ausgeführt.

Beispielsweise bei dieser Schlüssel-Spezifikation:

```json
"content_scripts": [
    {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["jquery.js", "my-content-script.js"],
    "run_at": "document_idle"
  },
  {
    "matches": ["*://*.mozilla.org/*"],
    "css": ["my-css.css"],
    "js": ["another-content-script.js", "yet-another-content-script.js"],
    "run_at": "document_idle"
  },
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["run-first.js"],
    "run_at": "document_start"
  }
]
```

Werden die Dateien so geladen, wenn eine mozilla.org-Domain geöffnet wird:

- `"run-first.js"` - da es angefordert wird, bei `"document_start"` zu laufen.
- `"jquery.js"` - da es im ersten Array bei `"document_idle"` angefordert wird.
- `"my-content-script.js"` - da es das zweite Element im ersten Array ist, das bei `"document_idle"` angefordert wird.
- `"my-css.css"` - da das CSS eines Objekts vor dessen JavaScript geladen wird.
- `"another-content-script.js"` - da es das erste Element in der `js`-Eigenschaft ist.
- `"yet-another-content-script.js"`

## Übereinstimmende URL-Muster

Der `"content_scripts"`-Schlüssel hängt Content-Skripte an Dokumente basierend auf URL-Mustern: Wenn die URL des Dokuments der im Schlüssel angegebenen Spezifikation entspricht, wird das Skript angehängt. Im Inneren von `"content_scripts"` gibt es vier Eigenschaften, die Sie für diese Spezifikation verwenden können:

- `matches`
  - : ein Array von [Musterübereinstimmungen](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- `exclude_matches`
  - : ein Array von [Musterübereinstimmungen](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- `include_globs`
  - : ein Array von [Globs](#globs)
- `exclude_globs`
  - : ein Array von [Globs](#globs)

Um eine dieser Eigenschaften zu erfüllen, muss eine URL mindestens eines der Elemente in ihrem Array übereinstimmen. Beispiel: Gegeben eine Eigenschaft wie:

```json
"matches": ["*://*.example.org/*", "*://*.example.com/*"]
```

Sowohl `http://example.org/` als auch `http://example.com/` werden übereinstimmen.

Da `matches` der einzige verpflichtende Schlüssel ist, werden die anderen drei Schlüssel verwendet, um die URLs, die übereinstimmen, weiter einzuschränken. Um den Schlüssel als Ganzes zu erfüllen, muss eine URL:

- der `matches`-Eigenschaft entsprechen
- UND der `include_globs`-Eigenschaft entsprechen, falls vorhanden
- UND NICHT der `exclude_matches`-Eigenschaft entsprechen, falls vorhanden
- UND NICHT der `exclude_globs`-Eigenschaft entsprechen, falls vorhanden

### Globs

Ein _Glob_ ist einfach ein String, der Platzhalter enthalten kann.

Es gibt zwei Arten von Platzhaltern, und Sie können sie im selben Glob kombinieren:

1. `*` entspricht null oder mehr Zeichen
2. `?` entspricht genau einem Zeichen.

Zum Beispiel: `"*na?i"` würde `"illuminati"` und `"annunaki"` entsprechen, aber nicht `"sagnarelli"`.

## Beispiel

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["borderify.js"]
  }
]
```

Dies injiziert ein einzelnes Content-Skript `borderify.js` in alle Seiten unter `mozilla.org` oder einem seiner Subdomains, ob über HTTP oder HTTPS bereitgestellt.

```json
  "content_scripts": [
    {
      "exclude_matches": ["*://developer.mozilla.org/*"],
      "matches": ["*://*.mozilla.org/*"],
      "js": ["jquery.js", "borderify.js"]
    }
  ]
```

Dies injiziert zwei Content-Skripte in alle Seiten unter `mozilla.org` oder einem seiner Subdomains, außer `developer.mozilla.org`, ob über HTTP oder HTTPS bereitgestellt.

Die Content-Skripte sehen denselben DOM-Ansichtsbereich und werden in der Reihenfolge injiziert, in der sie im Array erscheinen, sodass `borderify.js` globale Variablen sehen kann, die von `jquery.js` hinzugefügt wurden.

## Browser-Kompatibilität

{{Compat}}
