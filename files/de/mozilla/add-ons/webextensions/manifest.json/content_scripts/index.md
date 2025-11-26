---
title: content_scripts
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts
l10n:
  sourceCommit: 01768f6dcc74acdbd32d2e91512939003b86ac6c
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

Weist den Browser an, [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) in Webseiten zu laden, deren URL einem Muster entspricht.

Dieser Schlüssel ist ein Array. Jedes Element ist ein Objekt, das:

- **muss** eine Eigenschaft namens **`matches`** enthalten, die die URL-Muster angibt, die für das Laden der Skripte abgeglichen werden sollen;
- **kann** Eigenschaften namens **`js`** und **`css`** enthalten, die Skripte und Stylesheets auflisten, die in übereinstimmende Seiten geladen werden sollen; und
- **kann** eine Reihe anderer Eigenschaften enthalten, die Aspekte steuern, wie und wann Content-Skripte geladen werden.

Diese Tabelle zeigt alle Eigenschaften, die Sie einschließen können.

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
              Injektion der in
              <code><a href="#js">js</a></code> und
              <code><a href="#css">css</a></code> angegebenen Skripte in alle Frames, die den angegebenen URL-Anforderungen entsprechen, auch wenn das Frame nicht das oberste Frame in einem Tab ist. Dies injiziert nicht in Kind-Frames, bei denen nur das übergeordnete Element den URL-Anforderungen entspricht und das Kind-Frame nicht den URL-Anforderungen entspricht. Die URL-Anforderungen werden für jedes Frame unabhängig geprüft.
            </p>
            <div class="notecard note">
              <p>
                <strong>Hinweis:</strong> Dies gilt auch für Tracker oder Anzeigen, die iframes verwenden, was bedeutet, dass das Aktivieren dieser Option dazu führen kann, dass Ihr Content-Skript auf einigen Seiten dutzende Male aufgerufen wird.
              </p>
            </div>
          </dd>
          <dt><code>false</code></dt>
          <dd>
            Injektion nur in Frames, die den URL-Anforderungen entsprechen und das oberste Frame in einem Tab sind.
          </dd>
        </dl>
        <p>Standardmäßig <code>false</code>.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="css"><code>css</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          Ein Array von Pfaden, relativ zu <code>manifest.json</code>, die CSS-Dateien referenzieren, die in übereinstimmende Seiten injiziert werden sollen. Für Informationen zur Reihenfolge, in der Dateien injiziert werden, siehe einen <a href="#load_order">Lade-Reihenfolge</a>.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Firefox löst URLs in injizierten CSS-Dateien relativ zur CSS-Datei selbst auf, statt zur Seite, in die sie injiziert wird.
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
          Der Stil-Ursprung für die CSS-Injektion:
          <ul>
            <li><code>"user"</code>, um es als Nutzer-Stylesheet hinzuzufügen.</li>
            <li><code>"author"</code>, um es als Autoren-Stylesheet hinzuzufügen.</li>
          </ul>
          Standardmäßig <code>"author"</code>.
        </p>
        <p>
          Diese Eigenschaft ist in Firefox und Safari nicht auf Groß-/Kleinschreibung empfindlich.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="exclude_globs"><code>exclude_globs</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von Zeichenketten, die Platzhalter enthalten. Siehe
        <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a> unten.
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
        >. Siehe <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a> unten.
      </td>
    </tr>
    <tr>
      <td>
        <a id="include_globs"><code>include_globs</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von Zeichenketten, die Platzhalter enthalten. Siehe
        <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a> unten.
      </td>
    </tr>
    <tr>
      <td>
        <a id="js"><code>js</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          Ein Array von Pfaden, relativ zu <code>manifest.json</code>, die JavaScript-Dateien referenzieren, die in übereinstimmende Seiten injiziert werden sollen. Für Informationen zur Reihenfolge, in der Dateien injiziert werden, siehe eine <a href="#load_order">Lade-Reihenfolge</a>.
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
          Fügt die Content-Skripte in Seiten ein, deren URL
          <code>"about:blank"</code> oder <code>"about:srcdoc"</code> ist, wenn die URL der Seite, die diese Seite geöffnet oder erstellt hat,
          <a href="#matching_url_patterns">den in den restlichen <code>content_scripts</code>-Schlüsseln angegebenen Mustern entspricht</a>.
        </p>
        <p>
          Dies ist besonders nützlich, um Skripte in leeren iframes auszuführen, deren URL <code>"about:blank"</code> ist. Dazu sollten Sie auch den
          Schlüssel <code>all_frames</code> setzen.
        </p>
        <p>
          Zum Beispiel, nehmen wir an, Sie haben einen <code>content_scripts</code>-Schlüssel wie diesen:
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
          Wenn der Benutzer <code>https://example.org/</code> lädt und diese Seite ein leeres iframe einbettet, wird <code>"my-script.js"</code>
          in das iframe geladen.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> <code>match_about_blank</code> wird in Firefox ab Version 52 unterstützt.
          </p>
          <p>
            Beachten Sie, dass in Firefox Content-Skripte nicht in leere iframes bei <code>"document_start"</code> injiziert werden, auch wenn Sie diesen Wert in <code><a href="#run_at">run_at</a></code> angeben.
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
        Wenn <code>true</code>, wird Code in <code>about:</code>, <code>data:</code> und <code>blob:</code>-Seiten injiziert, wenn deren Herkunftsmuster im <code>matches</code> übereinstimmt, selbst wenn der Dokumentursprung undurchsichtig ist (aufgrund der Verwendung von CSP oder iframe-Sandbox). Übereinstimmungsmuster in <code>matches</code> müssen ein Platzhalter-Pfadmuster angeben. Standardmäßig <code>false</code>.
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
          >. Siehe
          <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a> unten.
        </p>
        <p>Dies ist der einzige obligatorische Schlüssel.</p>
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
          <code><a href="#js">js</a></code> angegebenen Dateien injiziert werden. Sie können hier einen von drei Zeichenketten übergeben, die jeweils einen Zustand im Prozess des Ladens eines Dokuments identifizieren. Die Zustände entsprechen direkt
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
            Die standardmäßige <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts">Umgebung für Content-Skripte</a>.
            Diese Umgebung ist von der Seitenkontext isoliert: obwohl sie das gleiche Dokument teilen, unterscheiden sich die globalen Geltungsbereiche und verfügbaren APIs.
          </dd>
          <dt><code>"MAIN"</code></dt>
          <dd>
            Die Ausführungsumgebung der Webseite.
            Diese Umgebung wird mit der Webseite ohne Isolation geteilt.
            Skripte in dieser Umgebung haben keinen Zugriff auf die APIs, die nur Content-Skripten zur Verfügung stehen.
            <div class="notecard warning" id="sect1">
              <p>
                <strong>Warnung:</strong> Aufgrund der fehlenden Isolation kann die Webseite den ausgeführten Code erkennen und beeinträchtigen.
                Verwenden Sie die <code>MAIN</code>-Welt nicht, es sei denn, es ist akzeptabel, dass Webseiten die Logik oder Daten lesen, darauf zugreifen oder sie ändern, die durch den ausgeführten Code fließen.
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

Registrierte Objekte in `content_scripts` werden in übereinstimmende Webseiten zur geplanten Zeit durch `run_at` injiziert (zuerst `document_start`, dann `document_end` und schließlich `document_idle`):

- In der im `content_scripts`-Array angegebenen Reihenfolge, für jedes Objekt mit einem passenden `run_at`-Wert, dann:
  - CSS wird in der im `css`-Array angegebenen Reihenfolge angewendet. Standardmäßig hat CSS aus dem `"author"`-Ursprung Vorrang, es sei denn, `css_origin` ist auf `"user"` gesetzt.
  - JavaScript-Code wird in der Reihenfolge ausgeführt, die im `js`-Array angegeben ist.

Zum Beispiel, in dieser Schlüsselspezifikation:

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

Werden die Dateien auf diese Weise geladen, wenn eine mozilla.org-Domain geöffnet wird:

- `"run-first.js"` - weil es eingestellt ist, bei `"document_start"` ausgeführt zu werden.
- `"jquery.js"` - da es sich im ersten Array befindet, das mit `"document_idle"` ausgeführt werden soll.
- `"my-content-script.js"` - weil es das zweite Element im ersten Array ist, das mit `"document_idle"` ausgeführt werden soll.
- `"my-css.css"` - da CSS eines Objekts vor dessen JavaScript geladen wird.
- `"another-content-script.js"` - weil es das erste Element in der `js`-Eigenschaft ist.
- `"yet-another-content-script.js"`

## Übereinstimmende URL-Muster

Der `"content_scripts"`-Schlüssel hängt Content-Skripte an Dokumente basierend auf URL-Übereinstimmungsmuster an: Wenn die URL des Dokuments mit der Spezifikation im Schlüssel übereinstimmt, wird das Skript angehängt. Es gibt vier Eigenschaften innerhalb von `"content_scripts"`, die Sie für diese Spezifikation verwenden können:

- `matches`
  - : ein Array von [Übereinstimmungsmustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- `exclude_matches`
  - : ein Array von [Übereinstimmungsmustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- `include_globs`
  - : ein Array von [Globs](#globs)
- `exclude_globs`
  - : ein Array von [Globs](#globs)

Um eine dieser Eigenschaften zu erfüllen, muss eine URL mit mindestens einem der Einträge im Array übereinstimmen. Beispielsweise, bei einer Eigenschaft wie:

```json
"matches": ["*://*.example.org/*", "*://*.example.com/*"]
```

Werden sowohl `http://example.org/` als auch `http://example.com/` übereinstimmen.

Da `matches` der einzige obligatorische Schlüssel ist, werden die anderen drei Schlüssel verwendet, um die URLs weiter einzuschränken, die übereinstimmen. Damit der Schlüssel insgesamt übereinstimmt, muss eine URL:

- der `matches`-Eigenschaft entsprechen
- UND der `include_globs`-Eigenschaft entsprechen, falls vorhanden
- UND NICHT der `exclude_matches`-Eigenschaft entsprechen, falls vorhanden
- UND NICHT der `exclude_globs`-Eigenschaft entsprechen, falls vorhanden

### Globs

Ein _Glob_ ist einfach eine Zeichenkette, die Platzhalter enthalten kann.

Es gibt zwei Arten von Platzhaltern, und Sie können sie im gleichen Glob kombinieren:

1. `*` entspricht null oder mehr Zeichen
2. `?` entspricht genau einem Zeichen.

Zum Beispiel: `"*na?i"` würde mit `"illuminati"` und `"annunaki"` übereinstimmen, aber nicht mit `"sagnarelli"`.

## Beispiel

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["borderify.js"]
  }
]
```

Dies injiziert ein einzelnes Content-Skript `borderify.js` in alle Seiten unter `mozilla.org` oder einem seiner Subdomains, unabhängig davon, ob es über HTTP oder HTTPS bereitgestellt wird.

```json
  "content_scripts": [
    {
      "exclude_matches": ["*://developer.mozilla.org/*"],
      "matches": ["*://*.mozilla.org/*"],
      "js": ["jquery.js", "borderify.js"]
    }
  ]
```

Dies injiziert zwei Content-Skripte in alle Seiten unter `mozilla.org` oder einem seiner Subdomains, außer `developer.mozilla.org`, unabhängig davon, ob es über HTTP oder HTTPS bereitgestellt wird.

Die Content-Skripte sehen die gleiche Ansicht des DOM und werden in der Reihenfolge injiziert, in der sie im Array erscheinen, sodass `borderify.js` auf globale Variablen zugreifen kann, die von `jquery.js` hinzugefügt wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
