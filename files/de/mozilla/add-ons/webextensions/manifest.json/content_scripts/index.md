---
title: content_scripts
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Pflicht</th>
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

Weist den Browser an, [Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) in Webseiten zu laden, deren URL einem bestimmten Muster entspricht.

Dieser Schlüssel ist ein Array. Jedes Element ist ein Objekt, das:

- **muss** einen Schlüssel mit dem Namen **`matches`** enthalten, der die URL-Muster angibt, die übereinstimmen müssen, damit die Skripte geladen werden;
- **kann** Schlüssel mit den Namen **`js`** und **`css`** enthalten, die Skripte und/oder Stylesheets auflisten, die in übereinstimmende Seiten geladen werden sollen; und
- **kann** eine Reihe weiterer Eigenschaften enthalten, die feinere Aspekte steuern, wie und wann Content Scripts geladen werden.

Details zu allen enthaltenen Schlüsseln sind in der folgenden Tabelle aufgeführt.

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
              Injektieren Sie die in <code><a href="#js">js</a></code> und <code><a href="#css">css</a></code> angegebenen Skripte in alle Frames, die den angegebenen URL-Anforderungen entsprechen, auch wenn der Frame nicht der oberste Frame in einem Tab ist. Dies bedeutet nicht, dass sie in untergeordnete Frames injiziert werden, deren übergeordneter Frame den URL-Anforderungen entspricht, der untergeordnete Frame jedoch nicht. Die URL-Anforderungen werden für jeden Frame unabhängig geprüft.
            </p>
            <div class="notecard note">
              <p>
                <strong>Hinweis:</strong> Dies gilt auch für Tracker oder Werbungen, die iframes verwenden, was bedeutet, dass das Aktivieren dieser Option dazu führen könnte, dass Ihr Content Script auf einigen Seiten dutzende Male aufgerufen wird.
              </p>
            </div>
          </dd>
          <dt><code>false</code></dt>
          <dd>
            Nur in Frames injizieren, die den URL-Anforderungen entsprechen und der oberste Frame in einem Tab sind.
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
          Ein Array von Pfaden, relativ zu <code>manifest.json</code>, das auf CSS-Dateien verweist, die in übereinstimmende Seiten injiziert werden.
        </p>
        <p>
          Die Dateien werden in der angegebenen Reihenfolge und zu dem durch <code><a href="#run_at">run_at</a></code> angegebenen Zeitpunkt injiziert.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Firefox löst URLs in injizierten CSS-Dateien relativ zu der CSS-Datei selbst auf, nicht zu der Seite, in die sie injiziert wird.
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
        Ein Array von Zeichenfolgen, die Platzhalterzeichen enthalten. Siehe <a href="#matching_url_patterns">Abgleich von URL-Mustern</a> unten.
      </td>
    </tr>
    <tr>
      <td>
        <a id="exclude_matches"><code>exclude_matches</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">Abgleichsmustern</a>. Siehe <a href="#matching_url_patterns">Abgleich von URL-Mustern</a> unten.
      </td>
    </tr>
    <tr>
      <td>
        <a id="include_globs"><code>include_globs</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von Zeichenfolgen, die Platzhalterzeichen enthalten. Siehe <a href="#matching_url_patterns">Abgleich von URL-Mustern</a> unten.
      </td>
    </tr>
    <tr>
      <td>
        <a id="js"><code>js</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          Ein Array von Pfaden, relativ zu <code>manifest.json</code>, das auf JavaScript-Dateien verweist, die in übereinstimmende Seiten injiziert werden.
        </p>
        <p>
          Dateien werden in der angegebenen Reihenfolge injiziert. Das bedeutet, wenn Sie zum Beispiel jQuery hier aufnehmen, gefolgt von einem anderen Content Script, so wie hier:
        </p>
        <pre class="brush: json">
"js": ["jquery.js", "my-content-script.js"]</pre
        >
        <p>Dann kann <code>"my-content-script.js"</code> jQuery verwenden.</p>
        <p>
          Die Dateien werden nach allen Dateien in <code><a href="#css">css</a></code> injiziert und zu dem durch <code><a href="#run_at">run_at</a></code> angegebenen Zeitpunkt.
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
          Injeziert die Content Scripts in Seiten, deren URL <code>"about:blank"</code> oder <code>"about:srcdoc"</code> ist, wenn die URL der Seite, die diese Seite geöffnet oder erstellt hat, <a href="#matching_url_patterns">mit den in dem Rest des <code>content_scripts</code>-Schlüssels angegebenen Mustern übereinstimmt</a>.
        </p>
        <p>
          Dies ist besonders nützlich, um Skripte in leere iframes auszuführen, deren URL <code>"about:blank"</code> ist. Um dies zu tun, sollten Sie auch den <code>all_frames</code>-Schlüssel setzen.
        </p>
        <p>
          Zum Beispiel nehmen wir an, Sie haben einen <code>content_scripts</code>-Schlüssel, der so aussieht:
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
          Wenn der Benutzer <code>https://example.org/</code> lädt und diese Seite ein leeres iframe einbettet, dann wird <code>"my-script.js"</code> in das iframe geladen.
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
        Wenn <code>true</code>, wird Code in <code>about:</code>, <code>data:</code> und <code>blob:</code> Seiten injiziert, wenn ihr Ursprung mit dem Muster in <code>matches</code> übereinstimmt, selbst wenn der Dokumentenursprung undurchsichtig ist (aufgrund der Verwendung von CSP oder iframe-Sandbox). Abgleichsmuster in <code>matches</code> müssen einen Platzhalter-Pfadglob spezifizieren. Standardmäßig ist <code>false</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="matches"><code>matches</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          Ein Array von <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">Abgleichsmustern</a>. Siehe <a href="#matching_url_patterns">Abgleich von URL-Mustern</a> unten.
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
          Diese Option bestimmt, wann die in <code><a href="#css">css</a></code> und <code><a href="#js">js</a></code> angegebenen Dateien injiziert werden. Sie können hier einen der drei Strings angeben, von denen jeder einen Zustand im Prozess des Ladens eines Dokuments kennzeichnet. Die Zustände entsprechen direkt [`Document.readyState`](/de/docs/Web/API/Document/readyState):
        </p>
        <dl>
          <dt><code>"document_start"</code></dt>
          <dd>
            Entspricht <code>loading</code>. Das DOM lädt noch.
          </dd>
          <dt><code>"document_end"</code></dt>
          <dd>
            Entspricht <code>interactive</code>. Das DOM ist fertig geladen, aber Ressourcen wie Skripte und Bilder können noch laden.
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
            Die standardmäßige <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts">Content Scripts</a>-Ausführungsumgebung.
            Diese Umgebung ist vom Kontext der Seite isoliert: Obwohl sie dasselbe Dokument teilen, unterscheiden sich die globalen Bereiche und die verfügbaren APIs.
          </dd>
          <dt><code>"MAIN"</code></dt>
          <dd>
            Die Ausführungsumgebung der Webseite.
            Diese Umgebung wird ohne Isolierung mit der Webseite geteilt.
            Skripte in dieser Umgebung haben keinen Zugang zu den APIs, die nur für Content Scripts verfügbar sind.
            <div class="notecard warning" id="sect1">
              <p>
                <strong>Warnung:</strong> Aufgrund des Mangels an Isolierung kann die Webseite den ausgeführten Code erkennen und beeinträchtigen.
                Verwenden Sie die <code>MAIN</code> Welt nicht, es sei denn, es ist akzeptabel, dass Webseiten die Logik oder Daten, die durch den ausgeführten Code fließen, lesen, darauf zugreifen oder verändern können.
              </p>
            </div>
          </dd>
        </dl>
        <p>Der Standardwert ist <code>"ISOLATED"</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Abgleich von URL-Mustern

Der Schlüssel `"content_scripts"` bindet Content Scripts an Dokumente basierend auf URL-Abgleich: Wenn die URL des Dokuments mit den im Schlüssel angegebenen Spezifikationen übereinstimmt, wird das Skript angehängt. Es gibt vier Eigenschaften innerhalb von `"content_scripts"`, die Sie für diese Spezifikation verwenden können:

- `matches`
  - : ein Array von [Abgleichsmustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- `exclude_matches`
  - : ein Array von [Abgleichsmustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- `include_globs`
  - : ein Array von [Globs](#globs)
- `exclude_globs`
  - : ein Array von [Globs](#globs)

Um eine dieser Eigenschaften abzugleichen, muss eine URL mit mindestens einem der Elemente in ihrem Array übereinstimmen. Zum Beispiel, bei einer Eigenschaft wie:

```json
"matches": ["*://*.example.org/*", "*://*.example.com/*"]
```

Sowohl `http://example.org/` als auch `http://example.com/` würden übereinstimmen.

Da `matches` der einzige verpflichtende Schlüssel ist, werden die anderen drei Schlüssel verwendet, um die URLs, die übereinstimmen, weiter einzuschränken. Um mit dem Schlüssel als Ganzes übereinzustimmen, muss eine URL:

- mit der `matches`-Eigenschaft übereinstimmen
- UND mit der `include_globs`-Eigenschaft übereinstimmen, falls vorhanden
- UND NICHT mit der `exclude_matches`-Eigenschaft übereinstimmen, falls vorhanden
- UND NICHT mit der `exclude_globs`-Eigenschaft übereinstimmen, falls vorhanden

### Globs

Ein _Glob_ ist einfach eine Zeichenfolge, die Platzhalterzeichen enthalten kann.

Es gibt zwei Arten von Platzhaltern, und Sie können sie in demselben Glob kombinieren:

1. `*` entspricht null oder mehr Zeichen
2. `?` entspricht genau einem Zeichen.

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

Dies injiziert ein einzelnes Content Script `borderify.js` in alle Seiten unter `mozilla.org` oder einem seiner Subdomains, unabhängig davon, ob sie über HTTP oder HTTPS bereitgestellt werden.

```json
  "content_scripts": [
    {
      "exclude_matches": ["*://developer.mozilla.org/*"],
      "matches": ["*://*.mozilla.org/*"],
      "js": ["jquery.js", "borderify.js"]
    }
  ]
```

Dies injiziert zwei Content Scripts in alle Seiten unter `mozilla.org` oder einem seiner Subdomains außer `developer.mozilla.org`, unabhängig davon, ob sie über HTTP oder HTTPS bereitgestellt werden.

Die Content Scripts sehen dieselbe Ansicht des DOM und werden in der Reihenfolge injiziert, in der sie im Array erscheinen, sodass `borderify.js` auf globale Variablen zugreifen kann, die von `jquery.js` hinzugefügt wurden.

## Browser-Kompatibilität

{{Compat}}
