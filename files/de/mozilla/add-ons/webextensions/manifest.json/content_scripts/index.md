---
title: content_scripts
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts
l10n:
  sourceCommit: 2e0b9415ed31484a4830e214eff9e06e408c7261
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Erforderlich</th>
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

- **muss** eine Eigenschaft namens **`matches`** enthalten, die die URL-Muster angibt, die erfüllt sein müssen, damit die Skripte geladen werden;
- **kann** Eigenschaften namens **`js`** und **`css`** enthalten, die Skripte und Stylesheets auflisten, die in übereinstimmende Seiten geladen werden sollen; und
- **kann** eine Reihe weiterer Eigenschaften enthalten, die Aspekte davon steuern, wie und wann Content Scripts geladen werden.

Diese Tabelle führt alle Eigenschaften auf, die Sie einschließen können.

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
        <a id="all_frames" href="#all_frames"><code>all_frames</code></a>
      </td>
      <td><code>Boolean</code></td>
      <td>
        <dl>
          <dt><code>true</code></dt>
          <dd>
            <p>
              Fügt die in <code><a href="#js">js</a></code> und
              <code><a href="#css">css</a></code> angegebenen Skripte in alle
              Frames ein, die den angegebenen URL-Anforderungen entsprechen,
              auch wenn der Frame nicht der oberste Frame in einem Tab ist. Dies
              fügt sie nicht in untergeordnete Frames ein, bei denen nur ihr
              übergeordneter Frame den URL-Anforderungen entspricht und der
              untergeordnete Frame den URL-Anforderungen nicht entspricht. Die
              URL-Anforderungen werden für jeden Frame unabhängig geprüft.
            </p>
            <div class="notecard note">
              <p>
                <strong>Hinweis:</strong> Dies gilt auch für jeden Tracker oder
                jede Werbung, die iframes verwendet. Das Aktivieren dieser
                Option kann daher dazu führen, dass Ihr Content Script auf
                einigen Seiten Dutzende Male aufgerufen wird.
              </p>
            </div>
          </dd>
          <dt><code>false</code></dt>
          <dd>
            Fügt sie nur in Frames ein, die den URL-Anforderungen entsprechen
            und der oberste Frame in einem Tab sind.
          </dd>
        </dl>
        <p>Der Standardwert ist <code>false</code>.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="css" href="#css"><code>css</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          Ein Array von Pfaden relativ zu <code>manifest.json</code>, die auf
          CSS-Dateien verweisen, die in übereinstimmende Seiten eingefügt werden
          sollen. Informationen über die Reihenfolge, in der Dateien eingefügt
          werden, finden Sie unter <a href="#load_order">Ladereihenfolge</a>.
        </p>
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Firefox löst URLs in eingefügten
            CSS-Dateien relativ zur CSS-Datei selbst auf und nicht relativ zu
            der Seite, in die sie eingefügt wird.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <a id="css_origin" href="#css_origin"><code>css_origin</code></a>
        <br />{{optional_inline}}
      </td>
      <td><code>String</code></td>
      <td>
        <p>
          Der Stilursprung für die CSS-Injektion:
          <ul>
            <li><code>"user"</code>, zum Hinzufügen als Benutzer-Stylesheet.</li>
            <li><code>"author"</code>, zum Hinzufügen als Autoren-Stylesheet.</li>
          </ul>
          Der Standardwert ist <code>"author"</code>.
        </p>
        <p>
          Bei dieser Eigenschaft wird in Firefox und Safari die Groß- und
          Kleinschreibung nicht berücksichtigt.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="exclude_globs" href="#exclude_globs"><code>exclude_globs</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von Strings mit Wildcards. Siehe unten
        <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="exclude_matches" href="#exclude_matches"><code>exclude_matches</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von
        <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns"
          >Übereinstimmungsmustern</a
        >. Siehe unten <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="include_globs" href="#include_globs"><code>include_globs</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von Strings mit Wildcards. Siehe unten
        <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="js" href="#js"><code>js</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          Ein Array von Pfaden relativ zu <code>manifest.json</code>, die auf
          JavaScript-Dateien verweisen, die in übereinstimmende Seiten eingefügt
          werden sollen. Informationen über die Reihenfolge, in der Dateien
          eingefügt werden, finden Sie unter <a href="#load_order">Ladereihenfolge</a>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><a id="match_about_blank" href="#match_about_blank">match_about_blank</a></code>
      </td>
      <td><code>Boolean</code></td>
      <td>
        <p>
          Fügt die Content Scripts in Seiten ein, deren URL
          <code>"about:blank"</code> oder <code>"about:srcdoc"</code> ist, wenn
          die URL der Seite, die diese Seite geöffnet oder erstellt hat,
          den im übrigen Schlüssel <code>content_scripts</code> angegebenen
          <a href="#matching_url_patterns">Mustern entspricht</a>.
        </p>
        <p>
          Dies ist besonders nützlich, um Skripte in leeren iframes auszuführen,
          deren URL <code>"about:blank"</code> ist. Dazu sollten Sie auch den
          Schlüssel <code>all_frames</code> setzen.
        </p>
        <p>
          Nehmen Sie beispielsweise an, Sie haben einen Schlüssel
          <code>content_scripts</code> wie diesen:
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
          Wenn der Benutzer <code>https://example.org/</code> lädt und diese
          Seite ein leeres iframe einbettet, wird <code>"my-script.js"</code> in
          das iframe geladen.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> <code>match_about_blank</code> wird in
            Firefox ab Version 52 unterstützt.
          </p>
          <p>
            Beachten Sie, dass Content Scripts in Firefox nicht bei
            <code>"document_start"</code> in leere iframes eingefügt werden,
            selbst wenn Sie diesen Wert in
            <code><a href="#run_at">run_at</a></code> angeben.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a id="match_origin_as_fallback" href="#match_origin_as_fallback">match_origin_as_fallback</a></code>
      </td>
      <td><code>Boolean</code></td>
      <td>
        Wenn <code>true</code>, wird Code in <code>about:</code>-, <code>data:</code>- und <code>blob:</code>-Seiten eingefügt, wenn ihr Ursprung dem Muster in <code>matches</code> entspricht, selbst wenn der Dokumentursprung undurchsichtig ist (aufgrund der Verwendung von CSP oder einer iframe-Sandbox). Übereinstimmungsmuster in <code>matches</code> müssen einen Wildcard-Pfad-Glob angeben. Der Standardwert ist <code>false</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="matches" href="#matches"><code>matches</code></a>
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
        <p>Dies ist der einzige erforderliche Schlüssel.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="run_at" href="#run_at"><code>run_at</code></a>
      </td>
      <td><code>String</code></td>
      <td>
        <p>
          Diese Option bestimmt, wann die in
          <code><a href="#css">css</a></code> und
          <code><a href="#js">js</a></code> angegebenen Dateien eingefügt
          werden. Sie können hier einen von drei Strings angeben, die jeweils
          einen Zustand im Ladeprozess eines Dokuments kennzeichnen. Die Zustände
          entsprechen direkt
          [`Document.readyState`](/de/docs/Web/API/Document/readyState):
        </p>
        <dl>
          <dt><code>"document_start"</code></dt>
          <dd>
            Entspricht <code>loading</code>. Das DOM wird noch geladen.
          </dd>
          <dt><code>"document_end"</code></dt>
          <dd>
            Entspricht <code>interactive</code>. Das DOM wurde vollständig
            geladen, aber Ressourcen wie Skripte und Bilder werden möglicherweise
            noch geladen.
          </dd>
          <dt><code>"document_idle"</code></dt>
          <dd>
            Entspricht <code>complete</code>. Das Dokument und alle seine
            Ressourcen wurden vollständig geladen.
          </dd>
        </dl>
        <p>Der Standardwert ist <code>"document_idle"</code>.</p>
        <p>
          In allen Fällen werden Dateien in <code><a href="#js">js</a></code>
          nach Dateien in <code><a href="#css">css</a></code
          > eingefügt.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="world" href="#world"><code>world</code></a>
      </td>
      <td><code>String</code></td>
      <td>
        <p>
          Die JavaScript-Welt, in der das Skript ausgeführt wird.
        </p>
        <dl>
          <dt><code>"ISOLATED"</code></dt>
          <dd>
            Die Standardausführungsumgebung für <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts">Content Scripts</a>.
            Diese Umgebung ist vom Kontext der Seite isoliert: Obwohl sie dasselbe Dokument teilen, unterscheiden sich die globalen Bereiche und verfügbaren APIs.
          </dd>
          <dt><code>"MAIN"</code></dt>
          <dd>
            Die Ausführungsumgebung der Webseite.
            Diese Umgebung wird ohne Isolierung mit der Webseite geteilt.
            Skripte in dieser Umgebung haben keinen Zugriff auf APIs, die nur für Content Scripts verfügbar sind.
            <div class="notecard warning" id="sect1">
              <p>
                <strong>Warnung:</strong> Aufgrund der fehlenden Isolierung kann die Webseite den ausgeführten Code erkennen und beeinträchtigen.
                Verwenden Sie die <code>MAIN</code>-Welt nicht, es sei denn, es ist akzeptabel, dass Webseiten die Logik oder Daten lesen, darauf zugreifen oder sie ändern können, die durch den ausgeführten Code fließen.
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

Registrierte Objekte in `content_scripts` werden zum durch `run_at` angegebenen Zeitpunkt in übereinstimmende Webseiten eingefügt (zuerst `document_start`, dann `document_end` und schließlich `document_idle`):

- In der in dem Array `content_scripts` angegebenen Reihenfolge, für jedes Objekt mit einem übereinstimmenden `run_at`-Wert, dann:
  - CSS wird in der in seinem Array `css` angegebenen Reihenfolge angewendet. Standardmäßig erhält CSS vom Ursprung `"author"` Priorität, sofern `css_origin` nicht auf `"user"` gesetzt ist.
  - JavaScript-Code wird in der in seinem Array `js` angegebenen Reihenfolge ausgeführt.

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

Die Dateien werden beim Öffnen einer mozilla.org-Domain wie folgt geladen:

- `"run-first.js"` – weil die Ausführung bei `"document_start"` angefordert wird.
- `"jquery.js"` – weil es sich im ersten Array befindet, das die Ausführung bei `"document_idle"` anfordert.
- `"my-content-script.js"` – weil es das zweite Element im ersten Array ist, das die Ausführung bei `"document_idle"` anfordert.
- `"my-css.css"` – weil das CSS eines Objekts vor seinem JavaScript geladen wird.
- `"another-content-script.js"` – weil es das erste Element in der Eigenschaft `js` ist.
- `"yet-another-content-script.js"`

## Übereinstimmende URL-Muster

Der Schlüssel `"content_scripts"` hängt Content Scripts anhand von URL-Übereinstimmungen an Dokumente an: Wenn die URL des Dokuments der Spezifikation im Schlüssel entspricht, wird das Skript angehängt. In `"content_scripts"` gibt es vier Eigenschaften, die Sie für diese Spezifikation verwenden können:

- `matches`
  - : ein Array von [Übereinstimmungsmustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- `exclude_matches`
  - : ein Array von [Übereinstimmungsmustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- `include_globs`
  - : ein Array von [Globs](#globs)
- `exclude_globs`
  - : ein Array von [Globs](#globs)

Damit eine dieser Eigenschaften übereinstimmt, muss eine URL mindestens einem der Elemente in ihrem Array entsprechen. Bei einer Eigenschaft wie der folgenden:

```json
"matches": ["*://*.example.org/*", "*://*.example.com/*"]
```

entsprechen sowohl `http://example.org/` als auch `http://example.com/` dem Muster.

Da `matches` der einzige erforderliche Schlüssel ist, werden die anderen drei Schlüssel verwendet, um die übereinstimmenden URLs weiter einzuschränken. Damit eine URL dem Schlüssel als Ganzem entspricht, muss sie:

- der Eigenschaft `matches` entsprechen
- UND der Eigenschaft `include_globs` entsprechen, sofern vorhanden
- UND NICHT der Eigenschaft `exclude_matches` entsprechen, sofern vorhanden
- UND NICHT der Eigenschaft `exclude_globs` entsprechen, sofern vorhanden

### globs

Ein _Glob_ ist einfach ein String, der Wildcards enthalten kann.

Es gibt zwei Arten von Wildcards, die Sie im selben Glob kombinieren können:

1. `*` entspricht null oder mehr Zeichen.
2. `?` entspricht genau einem Zeichen.

Zum Beispiel würde `"*na?i"` mit `"illuminati"` und `"annunaki"` übereinstimmen, aber nicht mit `"sagnarelli"`.

## Beispiel

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["borderify.js"]
  }
]
```

Dies fügt ein einzelnes Content Script `borderify.js` in alle Seiten unter `mozilla.org` oder einer seiner Subdomains ein, unabhängig davon, ob sie über HTTP oder HTTPS bereitgestellt werden.

```json
  "content_scripts": [
    {
      "exclude_matches": ["*://developer.mozilla.org/*"],
      "matches": ["*://*.mozilla.org/*"],
      "js": ["jquery.js", "borderify.js"]
    }
  ]
```

Dies fügt zwei Content Scripts in alle Seiten unter `mozilla.org` oder einer seiner Subdomains ein, mit Ausnahme von `developer.mozilla.org`, unabhängig davon, ob sie über HTTP oder HTTPS bereitgestellt werden.

Die Content Scripts sehen dieselbe Ansicht des DOM und werden in der Reihenfolge eingefügt, in der sie im Array erscheinen. Daher kann `borderify.js` globale Variablen sehen, die von `jquery.js` hinzugefügt wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
