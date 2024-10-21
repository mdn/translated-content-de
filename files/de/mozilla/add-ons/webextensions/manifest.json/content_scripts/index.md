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
      <th scope="row">Pflichtfeld</th>
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

Weist den Browser an, [Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) in Webseiten zu laden, deren URL einem bestimmten Muster entspricht.

Dieser Schlüssel ist ein Array. Jedes Element ist ein Objekt, das:

- **muss** einen Schlüssel namens **`matches`** enthalten, der die URL-Muster angibt, die übereinstimmen müssen, damit die Skripte geladen werden;
- **kann** Schlüssel namens **`js`** und **`css`** enthalten, die Skripte und/oder Stylesheets auflisten, die in übereinstimmende Seiten geladen werden sollen; und
- **kann** eine Reihe anderer Eigenschaften enthalten, die feinere Aspekte der Art und des Zeitpunkts der Ladung von Inhaltsskripten steuern.

Details zu allen Schlüsseln, die Sie einfügen können, sind in der folgenden Tabelle angegeben.

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
              Injiziert die in <code><a href="#js">js</a></code> und <code><a href="#css">css</a></code> angegebenen Skripte in alle Frames, die den angegebenen URL-Anforderungen entsprechen, selbst wenn der Frame nicht der oberste Frame in einem Tab ist. Dies injiziert nicht in untergeordnete Frames, bei denen nur der übergeordnete Frame den URL-Anforderungen entspricht und der untergeordnete Frame dies nicht tut. Die URL-Anforderungen werden für jeden Frame unabhängig überprüft.
            </p>
            <div class="notecard note">
              <p>
                <strong>Hinweis:</strong> Dies gilt auch für jegliche Tracker oder Werbeanzeigen, die iframes verwenden, was bedeutet, dass das Aktivieren dieser Option dazu führen kann, dass Ihr Inhaltsskript auf einigen Seiten Dutzende Male aufgerufen wird.
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
          Ein Array von Pfaden, relativ zu <code>manifest.json</code>, die auf CSS-Dateien verweisen, die in übereinstimmende Seiten injiziert werden.
        </p>
        <p>
          Dateien werden in der angegebenen Reihenfolge injiziert und zu dem durch <code><a href="#run_at">run_at</a></code> angegebenen Zeitpunkt.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Firefox löst URLs in injizierten CSS-Dateien relativ zur CSS-Datei selbst und nicht zu der Seite, in die sie injiziert wird, auf.
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
        Ein Array von Zeichenfolgen, die Platzhalter enthalten. Siehe <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a> unten.
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
        Ein Array von Zeichenfolgen, die Platzhalter enthalten. Siehe <a href="#matching_url_patterns">Übereinstimmende URL-Muster</a> unten.
      </td>
    </tr>
    <tr>
      <td>
        <a id="js"><code>js</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          Ein Array von Pfaden, relativ zu <code>manifest.json</code>, die auf JavaScript-Dateien verweisen, die in übereinstimmende Seiten injiziert werden.
        </p>
        <p>
          Dateien werden in der angegebenen Reihenfolge injiziert. Das bedeutet zum Beispiel, dass, wenn Sie jQuery hier einschließen, gefolgt von einem anderen Inhaltsskript, wie folgt:
        </p>
        <pre class="brush: json">
"js": ["jquery.js", "my-content-script.js"]</pre
        >
        <p>Dann kann <code>"my-content-script.js"</code> jQuery verwenden.</p>
        <p>
          Die Dateien werden nach allen Dateien in <code><a href="#css">css</a></code> und zu dem durch <code><a href="#run_at">run_at</a></code> angegebenen Zeitpunkt injiziert.
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
          Fügt die Inhaltsskripte in Seiten ein, deren URL <code>"about:blank"</code> oder <code>"about:srcdoc"</code> ist, wenn die URL der Seite, die diese Seite geöffnet oder erstellt hat, <a href="#matching_url_patterns">den in den restlichen</a> <code>content_scripts</code> angegebenen Mustern entspricht.
        </p>
        <p>
          Dies ist besonders nützlich, um Skripte in leeren iframes auszuführen, deren URL <code>"about:blank"</code> ist. Um dies zu tun, sollten Sie auch den Schlüssel <code>all_frames</code> setzen.
        </p>
        <p>
          Zum Beispiel, nehmen wir an, Sie haben einen <code>content_scripts</code> Schlüssel wie folgt:
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
            Beachten Sie, dass in Firefox Inhaltsskripte nicht in leere iframes bei <code>"document_start"</code> injiziert werden, selbst wenn Sie diesen Wert in <code><a href="#run_at">run_at</a></code> angeben.
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
        Wenn <code>true</code>, wird Code in <code>about:</code>, <code>data:</code>, und <code>blob:</code> Seiten injiziert, wenn ihr Ursprung dem Muster in <code>matches</code> entspricht, selbst wenn der Dokumentenursprung undurchsichtig ist (aufgrund der Verwendung von CSP oder iframe-Sandbox). Übereinstimmungsmuster in <code>matches</code> müssen ein Platzhalterpfadmuster spezifizieren. Standardmäßig <code>false</code>.
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
        <p>Dies ist der einzige Pflichtschlüssel.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="run_at"><code>run_at</code></a>
      </td>
      <td><code>String</code></td>
      <td>
        <p>
          Diese Option bestimmt, wann die in <code><a href="#css">css</a></code> und <code><a href="#js">js</a></code> angegebenen Dateien injiziert werden. Sie können hier einen von drei Zeichenfolgen angeben, die jeweils einen Zustand im Prozess des Ladens eines Dokuments kennzeichnen. Die Zustände entsprechen direkt [`Document.readyState`](/de/docs/Web/API/Document/readyState):
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
            Die Standardausführungsumgebung von <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts">Inhaltsskripten</a>.
            Diese Umgebung ist von dem Kontext der Seite isoliert: Obwohl sie das gleiche Dokument teilen, unterscheiden sich die globalen Bereiche und verfügbaren APIs.
          </dd>
          <dt><code>"MAIN"</code></dt>
          <dd>
            Die Ausführungsumgebung der Webseite.
            Diese Umgebung wird mit der Webseite ohne Isolierung geteilt.
            Skripte in dieser Umgebung haben keinen Zugriff auf die APIs, die nur für Inhaltsskripte verfügbar sind.
            <div class="notecard warning" id="sect1">
              <p>
                <strong>Warnung:</strong> Aufgrund des fehlenden Schutzes kann die Webseite den ausgeführten Code erkennen und beeinflussen.
                Verwenden Sie die <code>MAIN</code>-Welt nicht, es sei denn, es ist akzeptabel, dass Webseiten die Logik oder Daten, die durch den ausgeführten Code fließen, lesen, darauf zugreifen oder sie ändern können.
              </p>
            </div>
          </dd>
        </dl>
        <p>Der Standardwert ist <code>"ISOLATED"</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Übereinstimmende URL-Muster

Der `"content_scripts"`-Schlüssel hängt Inhaltsskripte an Dokumente basierend auf URL-Übereinstimmungen an: wenn die URL des Dokuments der Angabe im Schlüssel entspricht, wird das Skript angehängt. Es gibt vier Eigenschaften innerhalb von `"content_scripts"`, die Sie für diese Spezifikation verwenden können:

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

sowohl `http://example.org/` als auch `http://example.com/` werden übereinstimmen.

Da `matches` der einzige Pflichtschlüssel ist, werden die anderen drei Schlüssel verwendet, um die URLs, die übereinstimmen, weiter einzuschränken. Um insgesamt mit dem Schlüssel übereinzustimmen, muss eine URL:

- mit der `matches`-Eigenschaft übereinstimmen
- UND mit der `include_globs`-Eigenschaft übereinstimmen, falls vorhanden
- UND NICHT mit der `exclude_matches`-Eigenschaft übereinstimmen, falls vorhanden
- UND NICHT mit der `exclude_globs`-Eigenschaft übereinstimmen, falls vorhanden

### Globs

Ein _Glob_ ist einfach eine Zeichenkette, die Platzhalter enthalten kann.

Es gibt zwei Arten von Platzhaltern, und Sie können sie im gleichen Glob kombinieren:

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

Dies injiziert ein einzelnes Inhaltsskript `borderify.js` in alle Seiten unter `mozilla.org` oder einem seiner Subdomains, unabhängig davon, ob es über HTTP oder HTTPS bereitgestellt wird.

```json
  "content_scripts": [
    {
      "exclude_matches": ["*://developer.mozilla.org/*"],
      "matches": ["*://*.mozilla.org/*"],
      "js": ["jquery.js", "borderify.js"]
    }
  ]
```

Dies injiziert zwei Inhaltsskripte in alle Seiten unter `mozilla.org` oder einem seiner Subdomains, außer `developer.mozilla.org`, unabhängig davon, ob es über HTTP oder HTTPS bereitgestellt wird.

Die Inhaltsskripte sehen denselben Blick auf das DOM und werden in der Reihenfolge injiziert, in der sie im Array erscheinen, sodass `borderify.js` globale Variablen sehen kann, die von `jquery.js` hinzugefügt wurden.

## Browser-Kompatibilität

{{Compat}}
