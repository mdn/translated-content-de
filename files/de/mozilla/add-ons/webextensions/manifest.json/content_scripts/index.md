---
title: content_scripts
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
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

Weist den Browser an, [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) in Webseiten zu laden, deren URL einem Muster entspricht.

Dieser Schlüssel ist ein Array. Jedes Element ist ein Objekt, das:

- **muss** einen Schlüssel namens **`matches`** enthalten, der die URL-Muster angibt, für die die Skripte geladen werden sollen;
- **kann** Schlüssel namens **`js`** und **`css`** enthalten, die Skripte und Stylesheets auflisten, die in die entsprechenden Seiten geladen werden sollen; und
- **kann** eine Reihe anderer Eigenschaften enthalten, die Aspekte steuern, wie und wann Content-Skripte geladen werden.

Diese Tabelle zeigt alle Schlüssel, die Sie einfügen können.

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
              Injiziert die in <code><a href="#js">js</a></code> und <code><a href="#css">css</a></code> angegebenen Skripte in alle Frames, die den angegebenen URL-Anforderungen entsprechen, auch wenn der Frame nicht der oberste Frame in einem Tab ist. Dies injiziert nicht in untergeordnete Frames, deren Elternteil nur den URL-Anforderungen entspricht und der untergeordnete Frame nicht den URL-Anforderungen entspricht. Die URL-Anforderungen werden für jeden Frame unabhängig geprüft.
            </p>
            <div class="notecard note">
              <p>
                <strong>Hinweis:</strong> Dies gilt auch für jeden Tracker oder jede Anzeige, die iframes verwendet, was bedeutet, dass das Aktivieren dieser Option dazu führen könnte, dass Ihr Content-Skript auf manchen Seiten dutzende Male aufgerufen wird.
              </p>
            </div>
          </dd>
          <dt><code>false</code></dt>
          <dd>
            Injiziert nur in Frames, die den URL-Anforderungen entsprechen und der oberste Frame in einem Tab sind.
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
          Ein Array von Pfaden, relativ zu <code>manifest.json</code>, die CSS-Dateien referenzieren, die in die entsprechenden Seiten injiziert werden sollen. Informationen zur Reihenfolge, in der die Dateien injiziert werden, finden Sie unter <a href="#load_order">Ladereihenfolge</a>.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Firefox löst URLs in injizierten CSS-Dateien relativ zur CSS-Datei selbst auf, nicht zur Seite, in die sie injiziert wird.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <a id="exclude_globs"><code>exclude_globs</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von Zeichenfolgen, die Wildcards enthalten. Siehe <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a> unten.
      </td>
    </tr>
    <tr>
      <td>
        <a id="exclude_matches"><code>exclude_matches</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">Übereinstimmungsmustern</a>. Siehe <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a> unten.
      </td>
    </tr>
    <tr>
      <td>
        <a id="include_globs"><code>include_globs</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von Zeichenfolgen, die Wildcards enthalten. Siehe <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a> unten.
      </td>
    </tr>
    <tr>
      <td>
        <a id="js"><code>js</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          Ein Array von Pfaden, relativ zu <code>manifest.json</code>, die JavaScript-Dateien referenzieren, die in die entsprechenden Seiten injiziert werden sollen. Informationen zur Reihenfolge, in der die Dateien injiziert werden, finden Sie unter <a href="#load_order">Ladereihenfolge</a>.
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
          Fügt die Content-Skripte in Seiten ein, deren URL <code>"about:blank"</code> oder <code>"about:srcdoc"</code> ist, wenn die URL der Seite, die diese Seite geöffnet oder erstellt hat, <a href="#matching_url_patterns">den angegebenen Mustern entspricht</a> im Rest des <code>content_scripts</code>-Schlüssels.
        </p>
        <p>
          Dies ist besonders nützlich, um Skripte in leeren iframes auszuführen, deren URL <code>"about:blank"</code> ist. Dazu sollten Sie auch den <code>all_frames</code>-Schlüssel setzen.
        </p>
        <p>Angenommen, Sie haben einen <code>content_scripts</code>-Schlüssel wie diesen:</p>
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
            Beachten Sie, dass in Firefox Content-Skripte nicht in leere iframes injiziert werden bei <code>"document_start"</code>, selbst wenn Sie diesen Wert in <code><a href="#run_at">run_at</a></code> angeben.
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
        Wenn <code>true</code>, wird Code in <code>about:</code>, <code>data:</code> und <code>blob:</code> Seiten injiziert, wenn deren Ursprung mit dem Muster in <code>matches</code> übereinstimmt, auch wenn der Dokumentenursprung undurchsichtig ist (aufgrund der Verwendung von CSP oder iframe-Sandbox). Übereinstimmungsmuster in <code>matches</code> müssen ein Platzhalter-Pfad-Globbing angeben. Standardmäßig <code>false</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="matches"><code>matches</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          Ein Array von <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">Übereinstimmungsmustern</a>. Siehe <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a> unten.
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
          Diese Option bestimmt, wann die in <code><a href="#css">css</a></code> und <code><a href="#js">js</a></code> angegebenen Dateien injiziert werden. Sie können einen von drei Zeichenfolgen hier angeben, jede davon identifiziert einen Zustand im Prozess des Ladens eines Dokuments. Die Zustände entsprechen direkt dem [`Document.readyState`](/de/docs/Web/API/Document/readyState):
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
          In allen Fällen werden die Dateien in <code><a href="#js">js</a></code> nach den Dateien in <code><a href="#css">css</a></code> injiziert.
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
            Die Ausführungsumgebung der Webseite.
            Diese Umgebung wird mit der Webseite ohne Isolierung geteilt.
            Skripte in dieser Umgebung haben keinen Zugriff auf die APIs, die nur für Content-Skripte verfügbar sind.
            <div class="notecard warning" id="sect1">
              <p>
                <strong>Warnung:</strong> Aufgrund des Fehlens der Isolierung kann die Webseite den ausgeführten Code erkennen und beeinträchtigen. Verwenden Sie die <code>MAIN</code> Welt nicht, es sei denn, es ist akzeptabel, dass Webseiten die Logik oder Daten lesen, darauf zugreifen oder sie modifizieren können, die durch den ausgeführten Code fließen.
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

Registrierte Objekte in `content_scripts` werden in die passenden Webseiten zur angegebenen Zeit durch `run_at` injiziert (zuerst `document_start`, dann `document_end` und schließlich `document_idle`):

- In der Reihenfolge angegeben im `content_scripts` Array, für jedes Objekt mit einem passenden `run_at` Wert, dann:
  - CSS wird in der Reihenfolge angewendet, die in seinem `css` Array angegeben ist.
  - JavaScript-Code wird in der Reihenfolge ausgeführt, die in seinem `js` Array angegeben ist.

Zum Beispiel, bei dieser Schlüsselspezifikation:

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

- `"run-first.js"` - weil es gebeten wird, bei `"document_start"` zu laufen.
- `"jquery.js"` - weil es im ersten Array angefordert wird, bei `"document_idle"` zu laufen.
- `"my-content-script.js"` - weil es das zweite Element im ersten Array ist, das angefordert wird, bei `"document_idle"` zu laufen.
- `"my-css.css"` - weil das CSS eines Objekts vor seinem JavaScript geladen wird.
- `"another-content-script.js"` - weil es das erste Element in der `js` Eigenschaft ist.
- `"yet-another-content-script.js"`

## Übereinstimmende URL-Muster

Der `"content_scripts"` Schlüssel fügt Content-Skripte an Dokumente basierend auf URL-Übereinstimmungen: wenn die URL des Dokuments mit der Angabe im Schlüssel übereinstimmt, dann wird das Skript angefügt. Es gibt vier Eigenschaften innerhalb von `"content_scripts"`, die Sie für diese Angabe verwenden können:

- `matches`
  - : ein Array von [Übereinstimmungsmustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- `exclude_matches`
  - : ein Array von [Übereinstimmungsmustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- `include_globs`
  - : ein Array von [globs](#globs)
- `exclude_globs`
  - : ein Array von [globs](#globs)

Um eine dieser Eigenschaften zu entsprechen, muss eine URL mit mindestens einem der Elemente in ihrem Array übereinstimmen. Beispielsweise bei einer Eigenschaft wie:

```json
"matches": ["*://*.example.org/*", "*://*.example.com/*"]
```

Sowohl `http://example.org/` als auch `http://example.com/` werden übereinstimmen.

Da `matches` der einzige verpflichtende Schlüssel ist, werden die anderen drei Schlüssel verwendet, um die URLs weiter einzuschränken, die übereinstimmen. Um der Schlüssel insgesamt zu entsprechen, muss eine URL:

- der `matches` Eigenschaft entsprechen
- UND der `include_globs` Eigenschaft entsprechen, falls vorhanden
- UND NICHT der `exclude_matches` Eigenschaft entsprechen, falls vorhanden
- UND NICHT der `exclude_globs` Eigenschaft entsprechen, falls vorhanden

### globs

Ein _glob_ ist einfach eine Zeichenfolge, die Wildcards enthalten kann.

Es gibt zwei Arten von Wildcards, und Sie können sie im selben Glob kombinieren:

1. `*` passt auf null oder mehr Zeichen
2. `?` passt genau auf ein Zeichen.

Zum Beispiel: `"*na?i"` würde `"illuminati"` und `"annunaki"` passen, aber nicht `"sagnarelli"`.

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

Dies injiziert zwei Content-Skripte in alle Seiten unter `mozilla.org` oder einem seiner Subdomains außer `developer.mozilla.org`, unabhängig davon, ob es über HTTP oder HTTPS bereitgestellt wird.

Die Content-Skripte sehen dieselbe Ansicht des DOM und werden in der Reihenfolge injiziert, in der sie im Array erscheinen, sodass `borderify.js` globale Variablen sehen kann, die von `jquery.js` hinzugefügt wurden.

## Browser-Kompatibilität

{{Compat}}
