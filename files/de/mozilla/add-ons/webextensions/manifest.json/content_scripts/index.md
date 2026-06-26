---
title: content_scripts
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts
l10n:
  sourceCommit: ff9896b8f5e8a16696ca8ef50d8a9baa0ae8b1f8
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

Weist den Browser an, [Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) in Webseiten zu laden, deren URL einem Muster entspricht.

Dieser Schlüssel ist ein Array. Jedes Element ist ein Objekt, das:

- **muss** eine Eigenschaft mit dem Namen **`matches`** enthalten, die die URL-Muster spezifiziert, die für das Laden der Skripte übereinstimmen müssen;
- **kann** Eigenschaften mit den Namen **`js`** und **`css`** enthalten, die Skripte und Stylesheets listen, die in übereinstimmende Seiten geladen werden sollen; und
- **kann** eine Anzahl anderer Eigenschaften enthalten, die Aspekte steuern, wie und wann Content Scripts geladen werden.

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
              Integrieren Sie die in
              <code><a href="#js">js</a></code> und
              <code><a href="#css">css</a></code> angegebenen Skripte in alle Frames, die die angegebenen URL-Anforderungen erfüllen, auch wenn der Frame nicht der oberste Frame in einem Tab ist. Dies wird nicht in Child-Frames integriert, bei denen nur der Parent die URL-Anforderungen erfüllt und der Child-Frame die URL-Anforderungen nicht erfüllt. Die URL-Anforderungen werden für jeden Frame unabhängig überprüft.
            </p>
            <div class="notecard note">
              <p>
                <strong>Hinweis:</strong> Dies gilt auch für Tracker oder Anzeigen, die iframes verwenden, was bedeutet, dass die Aktivierung dazu führen könnte, dass Ihr Content Script auf einigen Seiten dutzende Male aufgerufen wird.
              </p>
            </div>
          </dd>
          <dt><code>false</code></dt>
          <dd>
            Integrieren Sie nur in Frames, die die URL-Anforderungen erfüllen und der oberste Frame in einem Tab sind.
          </dd>
        </dl>
        <p>Standardmäßig ist <code>false</code>.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="css"><code>css</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          Ein Array von Pfaden, relativ zu <code>manifest.json</code>, die CSS-Dateien referenzieren, die in übereinstimmende Seiten integriert werden sollen. Informationen über die Reihenfolge, in der Dateien integriert werden, finden Sie unter <a href="#load_order">Lade-Reihenfolge</a>.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Firefox löst URLs in integrierten CSS-Dateien relativ zur CSS-Datei selbst auf, anstatt zur Seite, in die sie integriert ist.
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
          Der Stilursprung für die CSS-Integration:
          <ul>
            <li><code>"user"</code>, um es als Benutzer-Stylesheet hinzuzufügen.</li>
            <li><code>"author"</code>, um es als Autoren-Stylesheet hinzuzufügen.</li>
          </ul>
          Standardmäßig ist <code>"author"</code>.
        </p>
        <p>
          Diese Eigenschaft ist in Firefox und Safari nicht case-sensitiv.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="exclude_globs"><code>exclude_globs</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von Zeichenfolgen, die Platzhalter enthalten. Siehe unten
        <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="exclude_matches"><code>exclude_matches</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von
        <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns"
          >Übereinstimmungsmustern</a
        >. Siehe unten
        <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="include_globs"><code>include_globs</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von Zeichenfolgen, die Platzhalter enthalten. Siehe unten
        <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="js"><code>js</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          Ein Array von Pfaden, relativ zu <code>manifest.json</code>, die JavaScript-Dateien referenzieren, die in übereinstimmende Seiten integriert werden sollen. Informationen über die Reihenfolge, in der Dateien integriert werden, finden Sie unter <a href="#load_order">Lade-Reihenfolge</a>.
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
          Fügen Sie die Content Scripts in Seiten ein, deren URL
          <code>"about:blank"</code> oder <code>"about:srcdoc"</code> ist, wenn die URL der Seite, die diese Seite geöffnet oder erstellt hat,
          <a href="#matching_url_patterns">den Mustern entspricht</a>, die im Rest des <code>content_scripts</code>-Schlüssels angegeben sind.
        </p>
        <p>
          Dies ist besonders nützlich, um Skripte in leeren iframes auszuführen, deren URL <code>"about:blank"</code> ist. Um dies zu tun, sollten Sie auch den <code>all_frames</code>-Schlüssel setzen.
        </p>
        <p>
          Angenommen, Sie haben einen <code>content_scripts</code>-Schlüssel wie diesen:
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
            Beachten Sie, dass in Firefox Content Scripts nicht in leere iframes bei <code>"document_start"</code> injiziert werden, auch wenn Sie diesen Wert in <code><a href="#run_at">run_at</a></code> angeben.
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
        Wenn <code>true</code>, wird Code in <code>about:</code>, <code>data:</code> und <code>blob:</code>-Seiten injiziert, wenn ihr Ursprung mit dem Muster in <code>matches</code> übereinstimmt, auch wenn der Dokumentenursprung undurchsichtig ist (aufgrund der Verwendung von CSP oder iframe-Sandbox). Übereinstimmungsmuster in <code>matches</code> müssen ein Wildcard-Pfad-Glob spezifizieren. Standardmäßig ist <code>false</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="matches"><code>matches</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          Ein Array von
          <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns"
            >Übereinstimmungsmustern</a
          >. Siehe unten
          <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a>.
        </p>
        <p>Dies ist der einzige zwingende Schlüssel.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="run_at"><code>run_at</code></a>
      </td>
      <td><code>String</code></td>
      <td>
        <p>
          Diese Option bestimmt, wann die in
          <code><a href="#css">css</a></code> und
          <code><a href="#js">js</a></code> angegebenen Dateien injiziert werden. Sie können hier einen von drei Strings angeben, von denen jeder einen Status im Prozess des Ladens eines Dokuments identifiziert. Die Zustände entsprechen direkt
          [`Document.readyState`](/de/docs/Web/API/Document/readyState):
        </p>
        <dl>
          <dt><code>"document_start"</code></dt>
          <dd>
            Entspricht <code>loading</code>. Das DOM wird noch geladen.
          </dd>
          <dt><code>"document_end"</code></dt>
          <dd>
            Entspricht <code>interactive</code>. Das DOM ist fertig geladen, aber Ressourcen wie Skripte und Bilder können noch geladen werden.
          </dd>
          <dt><code>"document_idle"</code></dt>
          <dd>
            Entspricht <code>complete</code>. Das Dokument und alle seine Ressourcen sind geladen.
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
            Die Standard-Ausführungsumgebung für <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts">Content Scripts</a>.
            Diese Umgebung ist von dem Kontext der Seite isoliert: während sie dasselbe Dokument teilen, unterscheiden sich die globalen Umgebungen und verfügbaren APIs.
          </dd>
          <dt><code>"MAIN"</code></dt>
          <dd>
            Die Ausführungsumgebung der Webseite.
            Diese Umgebung wird mit der Webseite ohne Isolierung geteilt.
            Skripte in dieser Umgebung haben keinen Zugriff auf die APIs, die nur für Content Scripts verfügbar sind.
            <div class="notecard warning" id="sect1">
              <p>
                <strong>Warnung:</strong> Aufgrund des Fehlens einer Isolierung kann die Webseite den ausgeführten Code erkennen und beeinflussen.
                Verwenden Sie die <code>MAIN</code>-Welt nicht, es sei denn, es ist akzeptabel, dass Webseiten die Logik oder Daten lesen, darauf zugreifen oder ändern, die durch den ausgeführten Code fließen.
              </p>
            </div>
          </dd>
        </dl>
        <p>Der Standardwert ist <code>"ISOLATED"</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Lade-Reihenfolge

Registrierte Objekte in `content_scripts` werden in übereinstimmende Webseiten zur Zeit eingesetzt, die durch `run_at` festgelegt wird (zuerst `document_start`, dann `document_end` und schließlich `document_idle`):

- In der Reihenfolge, die im `content_scripts`-Array für jedes Objekt angegeben ist, das einen passenden `run_at`-Wert hat, dann:
  - CSS wird in der Reihenfolge angewendet, die im `css`-Array angegeben ist. Standardmäßig hat CSS aus dem `"author"`-Ursprung Vorrang, es sei denn, `css_origin` ist auf `"user"` gesetzt.
  - JavaScript-Code wird in der Reihenfolge ausgeführt, die im `js`-Array angegeben ist.

Zum Beispiel, in dieser Schlüssel-Spezifikation:

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

Werden die Dateien folgendermaßen geladen, wenn eine mozilla.org-Domain geöffnet wird:

- `"run-first.js"` - weil es auf `document_start` ausgeführt werden soll.
- `"jquery.js"` - weil es im ersten Array angefordert wird, um auf `"document_idle"` ausgeführt zu werden.
- `"my-content-script.js"` - weil es das zweite Element im ersten Array ist, das `"document_idle"` anfordert.
- `"my-css.css"` - weil das CSS eines Objekts vor seinem JavaScript geladen wird.
- `"another-content-script.js"` - weil es das erste Element in der `js`-Eigenschaft ist.
- `"yet-another-content-script.js"`

## Übereinstimmende URL-Muster

Der Schlüssel `"content_scripts"` fügt Content Scripts an Dokumente basierend auf URL-Übereinstimmung an: Wenn die URL des Dokuments mit der Spezifikation im Schlüssel übereinstimmt, wird das Skript angeheftet. Es gibt vier Eigenschaften innerhalb von `"content_scripts"`, die Sie für diese Spezifikation verwenden können:

- `matches`
  - : ein Array von [Übereinstimmungsmustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- `exclude_matches`
  - : ein Array von [Übereinstimmungsmustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- `include_globs`
  - : ein Array von [Globs](#globs)
- `exclude_globs`
  - : ein Array von [Globs](#globs)

Um mit einer dieser Eigenschaften übereinzustimmen, muss eine URL mit mindestens einem der Elemente in ihrem Array übereinstimmen. Zum Beispiel, gegeben eine Eigenschaft wie:

```json
"matches": ["*://*.example.org/*", "*://*.example.com/*"]
```

Sowohl `http://example.org/` als auch `http://example.com/` werden übereinstimmen.

Da `matches` der einzige verpflichtende Schlüssel ist, werden die anderen drei Schlüssel verwendet, um die URLs, die übereinstimmen, weiter zu begrenzen. Um mit dem Schlüssel insgesamt übereinzustimmen, muss eine URL:

- mit der `matches`-Eigenschaft übereinstimmen
- UND mit der `include_globs`-Eigenschaft übereinstimmen, falls vorhanden
- UND NICHT mit der `exclude_matches`-Eigenschaft übereinstimmen, falls vorhanden
- UND NICHT mit der `exclude_globs`-Eigenschaft übereinstimmen, falls vorhanden

### Globs

Ein _Glob_ ist einfach eine Zeichenfolge, die Platzhalter enthalten kann.

Es gibt zwei Arten von Platzhaltern, und Sie können sie im selben Glob kombinieren:

1. `*` steht für null oder mehr Zeichen
2. `?` steht für genau ein Zeichen.

Zum Beispiel: `"*na?i"` würde sowohl `"illuminati"` als auch `"annunaki"` entsprechen, aber nicht `"sagnarelli"`.

## Beispiel

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["borderify.js"]
  }
]
```

Dies injiziert ein einzelnes Content Script `borderify.js` in alle Seiten unter `mozilla.org` oder einer seiner Subdomains, unabhängig davon, ob es über HTTP oder HTTPS bereitgestellt wird.

```json
  "content_scripts": [
    {
      "exclude_matches": ["*://developer.mozilla.org/*"],
      "matches": ["*://*.mozilla.org/*"],
      "js": ["jquery.js", "borderify.js"]
    }
  ]
```

Dies injiziert zwei Content Scripts in alle Seiten unter `mozilla.org` oder einer seiner Subdomains, außer `developer.mozilla.org`, unabhängig davon, ob es über HTTP oder HTTPS bereitgestellt wird.

Die Content Scripts sehen dieselbe Ansicht des DOMs und werden in der Reihenfolge injiziert, in der sie im Array erscheinen, sodass `borderify.js` globale Variablen sehen kann, die von `jquery.js` hinzugefügt wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
