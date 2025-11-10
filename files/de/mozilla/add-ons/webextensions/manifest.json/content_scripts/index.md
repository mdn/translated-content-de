---
title: content_scripts
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts
l10n:
  sourceCommit: 05aab3e51dc609cbd66be67516e45d20feeefd0c
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
      <th scope="row">Manifest-Version</th>
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

Weist den Browser an, [Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) in Webseiten zu laden, deren URL einem Muster entspricht.

Dieser Schlüssel ist ein Array. Jedes Element ist ein Objekt, das:

- **muss** eine Eigenschaft namens **`matches`** enthalten, die die URL-Muster spezifiziert, die für das Laden der Skripte übereinstimmen müssen;
- **kann** Eigenschaften namens **`js`** und **`css`** enthalten, die Skripte und Stylesheets auflisten, die in übereinstimmende Seiten geladen werden sollen; und
- **kann** eine Reihe anderer Eigenschaften enthalten, die Aspekte kontrollieren, wie und wann Content Scripts geladen werden.

Diese Tabelle beschreibt alle Eigenschaften, die Sie einfügen können.

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
              Injiizieren Sie die in <code><a href="#js">js</a></code> und <code><a href="#css">css</a></code> spezifizierten Skripte in alle Frames, die die angegebenen URL-Anforderungen erfüllen, auch wenn der Frame nicht der oberste Frame in einem Tab ist. Dies injiziert nicht in Kinder-Frames, bei denen nur deren Eltern die URL-Anforderungen erfüllen und der Kinder-Frame nicht die URL-Anforderungen erfüllt. Die URL-Anforderungen werden für jeden Frame unabhängig überprüft.
            </p>
            <div class="notecard note">
              <p>
                <strong>Hinweis:</strong> Dies gilt auch für Tracker oder Werbungen, die iframes verwenden, was bedeutet, dass die Aktivierung dazu führen könnte, dass Ihr Content Script dutzende Male auf einigen Seiten aufgerufen wird.
              </p>
            </div>
          </dd>
          <dt><code>false</code></dt>
          <dd>
            Injizieren Sie nur in Frames, die die URL-Anforderungen erfüllen, welche der oberste Frame in einem Tab sind.
          </dd>
        </dl>
        <p>Der Standardwert ist <code>false</code>.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="css"><code>css</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          Ein Array von Pfaden, relativ zu <code>manifest.json</code>, das CSS-Dateien referenziert, die in übereinstimmende Seiten injiziert werden sollen. Für Informationen über die Reihenfolge, in der Dateien injiziert werden, siehe eine <a href="#load_order">Ladereihenfolge</a>.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Firefox löst URLs in injizierten CSS-Dateien relativ zur CSS-Datei selbst und nicht zur Seite, in die es injiziert wird, auf.
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
          Der Stilursprung für die CSS-Injektion:
          <ul>
            <li><code>"user"</code>, um es als Benutzer-Stylesheet hinzuzufügen.</li>
            <li><code>"author"</code>, um es als Autoren-Stylesheet hinzuzufügen.</li>
          </ul>
          Der Standardwert ist <code>"author"</code>.
        </p>
        <p>
          Diese Eigenschaft ist in Firefox und Safari nicht case sensitive.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="exclude_globs"><code>exclude_globs</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von Zeichenfolgen mit Platzhaltern. Siehe <a href="#matching_url_patterns">URL-Musterabgleich</a> unten.
      </td>
    </tr>
    <tr>
      <td>
        <a id="exclude_matches"><code>exclude_matches</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">Musterabgleichen</a>. Siehe <a href="#matching_url_patterns">URL-Musterabgleich</a> unten.
      </td>
    </tr>
    <tr>
      <td>
        <a id="include_globs"><code>include_globs</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von Zeichenfolgen mit Platzhaltern. Siehe <a href="#matching_url_patterns">URL-Musterabgleich</a> unten.
      </td>
    </tr>
    <tr>
      <td>
        <a id="js"><code>js</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          Ein Array von Pfaden, relativ zu <code>manifest.json</code>, das JavaScript-Dateien referenziert, die in übereinstimmende Seiten injiziert werden sollen. Für Informationen über die Reihenfolge, in der Dateien injiziert werden, siehe eine <a href="#load_order">Ladereihenfolge</a>.
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
          Fügen Sie die Content Scripts in Seiten ein, deren URL <code>"about:blank"</code> oder <code>"about:srcdoc"</code> ist, wenn die URL der Seite, die diese Seite geöffnet oder erstellt hat, <a href="#matching_url_patterns">die Muster</a> erfüllt, die im restlichen Teil des <code>content_scripts</code>-Schlüssels angegeben sind.
        </p>
        <p>
          Dies ist besonders nützlich, um Skripte in leere iframes auszuführen, deren URL <code>"about:blank"</code> ist. Dafür sollten Sie auch den Schlüssel <code>all_frames</code> setzen.
        </p>
        <p>
          Zum Beispiel: Angenommen, Sie haben einen <code>content_scripts</code>-Schlüssel wie diesen:
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
          Wenn der Benutzer <code>https://example.org/</code> lädt und diese Seite ein leeres iframe einbettet, wird <code>"my-script.js"</code> in das iframe geladen.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> <code>match_about_blank</code> wird in Firefox ab Version 52 unterstützt.
          </p>
          <p>
            Beachten Sie, dass in Firefox Content Scripts nicht in leere iframes bei <code>"document_start"</code> injiziert werden, selbst wenn Sie diesen Wert in <code><a href="#run_at">run_at</a></code> angeben.
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
        Wenn <code>true</code>, wird Code in <code>about:</code>, <code>data:</code> und <code>blob:</code>-Seiten injiziert, wenn deren Ursprung mit dem Muster in <code>matches</code> übereinstimmt, sogar wenn der Dokumentenursprung opak ist (durch die Verwendung von CSP oder iframe sandbox). Match-Muster in <code>matches</code> müssen ein Platzhalter-Pfadmuster spezifizieren. Der Standardwert ist <code>false</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="matches"><code>matches</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          Ein Array von <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">Musterabgleichen</a>. Siehe <a href="#matching_url_patterns">URL-Musterabgleich</a> unten.
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
          Diese Option bestimmt, wann die in <code><a href="#css">css</a></code> und <code><a href="#js">js</a></code> spezifizierten Dateien injiziert werden. Sie können hier eine von drei Zeichenfolgen angeben, wobei jede einen Zustand im Prozess des Ladens eines Dokuments identifiziert. Die Zustände entsprechen direkt der [`Document.readyState`](/de/docs/Web/API/Document/readyState):
        </p>
        <dl>
          <dt><code>"document_start"</code></dt>
          <dd>
            Entspricht <code>loading</code>. Das DOM wird noch geladen.
          </dd>
          <dt><code>"document_end"</code></dt>
          <dd>
            Entspricht <code>interactive</code>. Das DOM ist fertig geladen, aber Ressourcen wie Skripte und Bilder werden möglicherweise noch geladen.
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
            Die Standardausführungsumgebung für <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts">Content Scripts</a>. Diese Umgebung ist vom Kontext der Seite isoliert: Während sie das gleiche Dokument teilen, unterscheiden sich die globalen Bereiche und die verfügbaren APIs.
          </dd>
          <dt><code>"MAIN"</code></dt>
          <dd>
            Die Ausführungsumgebung der Webseite. Diese Umgebung wird ohne Isolierung mit der Webseite geteilt. Skripte in dieser Umgebung haben keinen Zugriff auf die APIs, die nur für Content Scripts verfügbar sind.
            <div class="notecard warning" id="sect1">
              <p>
                <strong>Warnung:</strong> Aufgrund der fehlenden Isolierung kann die Webseite den ausgeführten Code erkennen und beeinflussen. Verwenden Sie die <code>MAIN</code>-Welt nicht, es sei denn, es ist akzeptabel, dass Webseiten die Logik oder Daten, die durch den ausgeführten Code fließen, lesen, darauf zugreifen oder sie ändern können.
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

Registrierte Objekte in `content_scripts` werden in übereinstimmende Webseiten zur durch `run_at` angegebenen Zeit injiziert (zuerst `document_start`, dann `document_end` und schließlich `document_idle`):

- In der Reihenfolge, die im `content_scripts`-Array angegeben ist, für jedes Objekt mit einem übereinstimmenden `run_at`-Wert, dann:
  - CSS wird in der Reihenfolge angewendet, die in seinem `css`-Array angegeben ist. Standardmäßig erhält CSS aus dem `"author"`-Ursprung Priorität, es sei denn, `css_origin` ist auf `"user"` gesetzt.
  - JavaScript-Code wird in der Reihenfolge ausgeführt, die in seinem `js`-Array angegeben ist.

Zum Beispiel in dieser Schlüsselspezifikation:

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

Werden die Dateien wie folgt geladen, wenn eine Domain von mozilla.org geöffnet wird:

- `"run-first.js"` - weil es angefordert wird, bei `"document_start"` auszuführen.
- `"jquery.js"` - weil es im ersten Array angefordert wird, bei `"document_idle"` auszuführen.
- `"my-content-script.js"` - weil es das zweite Element im ersten Array mit der Anforderung ist, bei `"document_idle"` auszuführen.
- `"my-css.css"` - weil ein Objektmit CSS vor seinem JavaScript geladen wird.
- `"another-content-script.js"` - weil es das erste Element in der `js`-Eigenschaft ist.
- `"yet-another-content-script.js"`

## URL-Musterabgleich

Der Schlüssel `"content_scripts"` fügt Content Scripts zu Dokumenten basierend auf dem URL-Matching hinzu: Wenn die URL des Dokuments der im Schlüssel angegebenen Spezifikation entspricht, dann wird das Skript angehängt. Es gibt vier Eigenschaften innerhalb von `"content_scripts"`, die Sie für diese Spezifikation verwenden können:

- `matches`
  - : ein Array von [Musterabgleichen](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- `exclude_matches`
  - : ein Array von [Musterabgleichen](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- `include_globs`
  - : ein Array von [Globs](#globs)
- `exclude_globs`
  - : ein Array von [Globs](#globs)

Um mit einer dieser Eigenschaften übereinzustimmen, muss eine URL mindestens eines der Elemente in ihrem Array erfüllen. Zum Beispiel, gegeben eine Eigenschaft wie:

```json
"matches": ["*://*.example.org/*", "*://*.example.com/*"]
```

Sowohl `http://example.org/` als auch `http://example.com/` werden übereinstimmen.

Da `matches` der einzige verpflichtende Schlüssel ist, werden die anderen drei Schlüssel verwendet, um die URLs, die übereinstimmen, weiter einzuschränken. Um mit dem Schlüssel als Ganzes übereinzustimmen, muss eine URL:

- mit der `matches`-Eigenschaft übereinstimmen
- UND mit der `include_globs`-Eigenschaft übereinstimmen, falls vorhanden
- UND NICHT mit der `exclude_matches`-Eigenschaft übereinstimmen, falls vorhanden
- UND NICHT mit der `exclude_globs`-Eigenschaft übereinstimmen, falls vorhanden

### Globs

Ein _Glob_ ist einfach eine Zeichenfolge, die Platzhalter enthalten kann.

Es gibt zwei Arten von Platzhaltern, und Sie können sie im selben Glob kombinieren:

1. `*` passt auf null oder mehr Zeichen
2. `?` passt genau auf ein Zeichen.

Zum Beispiel: `"*na?i"` würde auf `"illuminati"` und `"annunaki"` passen, aber nicht auf `"sagnarelli"`.

## Beispiel

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["borderify.js"]
  }
]
```

Dies injiziert ein einziges Content Script `borderify.js` in alle Seiten unter `mozilla.org` oder eine ihrer Subdomains, unabhängig davon, ob über HTTP oder HTTPS bereitgestellt.

```json
  "content_scripts": [
    {
      "exclude_matches": ["*://developer.mozilla.org/*"],
      "matches": ["*://*.mozilla.org/*"],
      "js": ["jquery.js", "borderify.js"]
    }
  ]
```

Dies injiziert zwei Content Scripts in alle Seiten unter `mozilla.org` oder eine ihrer Subdomains außer `developer.mozilla.org`, unabhängig davon, ob über HTTP oder HTTPS bereitgestellt.

Die Content Scripts sehen die gleiche Ansicht des DOM und werden in der Reihenfolge injiziert, in der sie im Array erscheinen, sodass `borderify.js` globale Variablen sehen kann, die von `jquery.js` hinzugefügt wurden.

## Browser-Kompatibilität

{{Compat}}
