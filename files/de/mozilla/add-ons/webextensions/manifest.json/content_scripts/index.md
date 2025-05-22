---
title: content_scripts
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts
l10n:
  sourceCommit: 3cc3f79ccdb38cb2277420c8fab55acbc7a7e766
---

{{AddonSidebar}}

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

Weist den Browser an, [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) in Webseiten zu laden, deren URL einem Muster entspricht.

Dieser Schlüssel ist ein Array. Jedes Element ist ein Objekt, das:

- **muss** einen Schlüssel namens **`matches`** enthalten, der die URL-Muster angibt, die für das Laden der Skripte übereinstimmen sollen;
- **kann** Schlüssel namens **`js`** und **`css`** enthalten, die Skripte und Stylesheets auflisten, die in übereinstimmende Seiten geladen werden sollen; und
- **kann** eine Reihe anderer Eigenschaften enthalten, die steuern, wie und wann Inhalts-Skripte geladen werden.

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
              Die Skripte, die in <code><a href="#js">js</a></code> und <code><a href="#css">css</a></code> angegeben sind, in alle Frames injizieren, die den angegebenen URL-Anforderungen entsprechen, auch wenn der Frame nicht der oberste Frame in einem Tab ist. Dies injiziert nicht in untergeordnete Frames, bei denen nur das übergeordnete Element den URL-Anforderungen entspricht und das untergeordnete Element den URL-Anforderungen nicht entspricht. Die URL-Anforderungen werden für jedes Frame unabhängig geprüft.
            </p>
            <div class="notecard note">
              <p>
                <strong>Hinweis:</strong> Dies gilt auch für Tracker oder Anzeigen, die iframes verwenden, was bedeutet, dass das Aktivieren dieser Option dazu führen kann, dass Ihr Inhalts-Skript dutzende Male auf einigen Seiten aufgerufen wird.
              </p>
            </div>
          </dd>
          <dt><code>false</code></dt>
          <dd>
            Nur in Frames injizieren, die den URL-Anforderungen entsprechen und der oberste Frame im Tab sind.
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
          Ein Array von Pfaden, relativ zu <code>manifest.json</code>, das CSS-Dateien referenziert, die in übereinstimmende Seiten injiziert werden sollen. Informationen zur Reihenfolge, in der Dateien injiziert werden, finden Sie in einem <a href="#load_order">Lade-Reihenfolge</a>.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Firefox löst URLs in injizierten CSS-Dateien relativ zur CSS-Datei selbst auf, anstatt zu der Seite, in die sie injiziert werden.
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
        Ein Array von Zeichenketten, die Platzhalter enthalten. Siehe unten <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="exclude_matches"><code>exclude_matches</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">Übereinstimmungsmustern</a>. Siehe unten <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="include_globs"><code>include_globs</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von Zeichenketten, die Platzhalter enthalten. Siehe unten <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="js"><code>js</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          Ein Array von Pfaden, relativ zu <code>manifest.json</code>, das JavaScript-Dateien referenziert, die in übereinstimmende Seiten injiziert werden sollen. Informationen zur Reihenfolge, in der Dateien injiziert werden, finden Sie in einem <a href="#load_order">Lade-Reihenfolge</a>.
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
          Die Inhalts-Skripte in Seiten einfügen, deren URL <code>"about:blank"</code> oder <code>"about:srcdoc"</code> ist, wenn die URL der Seite, die diese Seite geöffnet oder erstellt hat, <a href="#matching_url_patterns">die in den Mustern</a> angegebenen Muster im Rest des <code>content_scripts</code>-Schlüssels erfüllt.
        </p>
        <p>
          Dies ist besonders nützlich, um Skripte in leeren Iframes auszuführen, deren URL <code>"about:blank"</code> ist. Dazu sollten Sie auch den <code>all_frames</code>-Schlüssel setzen.
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
          Wenn der Benutzer <code>https://example.org/</code> lädt und diese Seite ein leeres iframe einbettet, wird <code>"my-script.js"</code> in das iframe geladen.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> <code>match_about_blank</code> wird in Firefox ab Version 52 unterstützt.
          </p>
          <p>
            Beachten Sie, dass in Firefox Inhalts-Skripte nicht in leere iframes bei <code>"document_start"</code> injiziert werden, selbst wenn Sie diesen Wert in <code><a href="#run_at">run_at</a></code> angeben.
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
        Wenn <code>true</code>, wird Code in <code>about:</code>, <code>data:</code> und <code>blob:</code>-Seiten injiziert, wenn deren Ursprung mit dem Muster in <code>matches</code> übereinstimmt, selbst wenn der Dokumentenursprung aufgrund der Verwendung von CSP oder iframe-Sandbox undurchsichtig ist. Übereinstimmungsmuster in <code>matches</code> müssen ein Platzhalter-Pfadmuster spezifizieren. Standardmäßig <code>false</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="matches"><code>matches</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          Ein Array von <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">Übereinstimmungsmustern</a>. Siehe unten <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a>.
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
          Diese Option bestimmt, wann die in <code><a href="#css">css</a></code> und <code><a href="#js">js</a></code> angegebenen Dateien injiziert werden. Sie können hier eine von drei Zeichenketten angeben, von denen jede einen Zustand im Ladeprozess eines Dokuments kennzeichnet. Die Zustände entsprechen direkt [<code>Document.readyState</code>](/de/docs/Web/API/Document/readyState):
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
            Die Standardausführungsumgebung für <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts">Inhalts-Skripte</a>.
            Diese Umgebung ist vom Kontext der Seite isoliert: Während sie dasselbe Dokument teilen, unterscheiden sich die globalen Bereiche und verfügbaren APIs.
          </dd>
          <dt><code>"MAIN"</code></dt>
          <dd>
            Die Ausführungsumgebung der Webseite.
            Diese Umgebung wird ohne Isolierung mit der Webseite geteilt.
            Skripte in dieser Umgebung haben keinen Zugriff auf die APIs, die nur Inhalts-Skripten verfügbar sind.
            <div class="notecard warning" id="sect1">
              <p>
                <strong>Warnung:</strong> Aufgrund des Mangels an Isolierung kann die Webseite den ausgeführten Code erkennen und stören.
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

Registrierte Objekte in `content_scripts` werden in übereinstimmende Webseiten zum durch `run_at` spezifizierten Zeitpunkt injiziert (zuerst `document_start`, dann `document_end` und schließlich `document_idle`):

- In der im `content_scripts`-Array angegebenen Reihenfolge für jedes Objekt mit einem passenden `run_at`-Wert, dann:
  - CSS wird in der im `css`-Array angegebenen Reihenfolge angewendet.
  - JavaScript-Code wird in der im `js`-Array angegebenen Reihenfolge ausgeführt.

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

Werden die Dateien so geladen, wenn eine mozilla.org-Domain geöffnet wird:

- `"run-first.js"` - weil es angefordert wird, bei `"document_start"` ausgeführt zu werden.
- `"jquery.js"` - weil es im ersten Array angefordert wird, bei `"document_idle"` ausgeführt zu werden.
- `"my-content-script.js"` - weil es das zweite Element im ersten Array ist, das bei `"document_idle"` ausgeführt werden soll.
- `"my-css.css"` - weil das CSS eines Objekts vor dessen JavaScript geladen wird.
- `"another-content-script.js"` - weil es das erste Element in der `js`-Eigenschaft ist.
- `"yet-another-content-script.js"`

## Übereinstimmende URL-Muster

Der Schlüssel `"content_scripts"` hängt Inhalts-Skripte an Dokumente basierend auf URL-Übereinstimmungen an: wenn die URL des Dokuments der Spezifikation im Schlüssel entspricht, wird das Skript angehängt. Es gibt vier Eigenschaften innerhalb von `"content_scripts"`, die Sie für diese Spezifikation verwenden können:

- `matches`
  - : ein Array von [Übereinstimmungsmustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- `exclude_matches`
  - : ein Array von [Übereinstimmungsmustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- `include_globs`
  - : ein Array von [Globs](#globs)
- `exclude_globs`
  - : ein Array von [Globs](#globs)

Um mit einer dieser Eigenschaften übereinzustimmen, muss eine URL mit mindestens einem der Elemente in ihrem Array übereinstimmen. Zum Beispiel, bei einer Eigenschaft wie:

```json
"matches": ["*://*.example.org/*", "*://*.example.com/*"]
```

Werden sowohl `http://example.org/` als auch `http://example.com/` übereinstimmen.

Da `matches` der einzige zwingende Schlüssel ist, werden die anderen drei Schlüssel verwendet, um die übereinstimmenden URLs weiter einzuschränken. Um als Ganzes mit dem Schlüssel übereinzustimmen, muss eine URL:

- mit der `matches`-Eigenschaft übereinstimmen
- UND mit der `include_globs`-Eigenschaft übereinstimmen, wenn vorhanden
- UND NICHT mit der `exclude_matches`-Eigenschaft übereinstimmen, wenn vorhanden
- UND NICHT mit der `exclude_globs`-Eigenschaft übereinstimmen, wenn vorhanden

### Globs

Ein _Glob_ ist einfach eine Zeichenkette, die Platzhalter enthalten kann.

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

Dies injiziert ein einziges Inhalts-Skript `borderify.js` in alle Seiten unter `mozilla.org` oder einer ihrer Subdomains, unabhängig davon, ob sie über HTTP oder HTTPS bereitgestellt werden.

```json
  "content_scripts": [
    {
      "exclude_matches": ["*://developer.mozilla.org/*"],
      "matches": ["*://*.mozilla.org/*"],
      "js": ["jquery.js", "borderify.js"]
    }
  ]
```

Dies injiziert zwei Inhalts-Skripte in alle Seiten unter `mozilla.org` oder einer ihrer Subdomains, außer `developer.mozilla.org`, unabhängig davon, ob sie über HTTP oder HTTPS bereitgestellt werden.

Die Inhalts-Skripte sehen dieselbe Ansicht des DOMs und werden in der Reihenfolge injiziert, in der sie im Array angezeigt werden, sodass `borderify.js` globale Variablen sehen kann, die von `jquery.js` hinzugefügt wurden.

## Browser-Kompatibilität

{{Compat}}
