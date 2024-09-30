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

Weist den Browser an, [content scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) in Webseiten zu laden, deren URL einem bestimmten Muster entspricht.

Dieser Schlüssel ist ein Array. Jedes Element ist ein Objekt, das:

- **muss** einen Schlüssel namens **`matches`** enthalten, der die URL-Muster angibt, die übereinstimmen müssen, damit die Skripte geladen werden;
- **kann** Schlüssel namens **`js`** und **`css`** enthalten, die Skripte und/oder Stylesheets listen, die in passenden Seiten geladen werden sollen; und
- **kann** eine Reihe weiterer Eigenschaften enthalten, die feinere Aspekte steuern, wie und wann content scripts geladen werden.

Details zu allen enthaltenen Schlüsseln finden Sie in der folgenden Tabelle.

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
              Injektieren Sie die in <code><a href="#js">js</a></code> und <code><a href="#css">css</a></code> angegebenen Skripte in alle Frames, die den angegebenen URL-Anforderungen entsprechen, auch wenn der Frame nicht der oberste Frame in einem Tab ist. Dies injiziert nicht in untergeordnete Frames, bei denen nur ihr übergeordneter Frame den URL-Anforderungen entspricht und der untergeordnete Frame nicht den URL-Anforderungen entspricht. Die URL-Anforderungen werden für jeden Frame unabhängig geprüft.
            </p>
            <div class="notecard note">
              <p>
                <strong>Hinweis:</strong> Dies gilt auch für Tracker oder Werbung, die iframes verwenden, was bedeutet, dass das Aktivieren dieser Option dazu führen könnte, dass Ihr content script auf einigen Seiten dutzende Male aufgerufen wird.
              </p>
            </div>
          </dd>
          <dt><code>false</code></dt>
          <dd>
            Nur in Frames injizieren, die den URL-Anforderungen entsprechen und der oberste Frame in einem Tab sind.
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
          Ein Array von Pfaden, relativ zu <code>manifest.json</code>, das CSS-Dateien referenziert, die in passende Seiten injiziert werden.
        </p>
        <p>
          Dateien werden in der angegebenen Reihenfolge und zur Zeit, die durch <code><a href="#run_at">run_at</a></code> angegeben ist, injiziert.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Firefox löst URLs in injizierten CSS-Dateien relativ zur CSS-Datei selbst auf, anstatt zu der Seite, in die sie injiziert wird.
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
        Ein Array von Zeichenfolgen, die Platzhalter enthalten. Siehe <a href="#matching_url_patterns">Passende URL-Muster</a> unten.
      </td>
    </tr>
    <tr>
      <td>
        <a id="exclude_matches"><code>exclude_matches</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">Match-Mustern</a>. Siehe <a href="#matching_url_patterns">Passende URL-Muster</a> unten.
      </td>
    </tr>
    <tr>
      <td>
        <a id="include_globs"><code>include_globs</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        Ein Array von Zeichenfolgen, die Platzhalter enthalten. Siehe <a href="#matching_url_patterns">Passende URL-Muster</a> unten.
      </td>
    </tr>
    <tr>
      <td>
        <a id="js"><code>js</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          Ein Array von Pfaden, relativ zu <code>manifest.json</code>, das JavaScript-Dateien referenziert, die in passende Seiten injiziert werden.
        </p>
        <p>
          Dateien werden in der angegebenen Reihenfolge injiziert. Das bedeutet, dass zum Beispiel, wenn Sie jQuery hier gefolgt von einem anderen content script einfügen, so:
        </p>
        <pre class="brush: json">
"js": ["jquery.js", "my-content-script.js"]</pre
        >
        <p>Dann kann <code>"my-content-script.js"</code> jQuery verwenden.</p>
        <p>
          Die Dateien werden nach allen Dateien in <code><a href="#css">css</a></code> injiziert und zur Zeit, die durch <code><a href="#run_at">run_at</a></code> angegeben ist.
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
          Fügen Sie die content scripts in Seiten ein, deren URL <code>"about:blank"</code> oder <code>"about:srcdoc"</code> ist, wenn die URL der Seite, die diese Seite geöffnet oder erstellt hat, <a href="#matching_url_patterns">den Mustern entspricht</a>, die im Rest des <code>content_scripts</code>-Schlüssels angegeben sind.
        </p>
        <p>
          Dies ist besonders nützlich, um Skripte in leeren iframes auszuführen, deren URL <code>"about:blank"</code> ist. Dazu sollten Sie auch den Schlüssel <code>all_frames</code> festlegen.
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
            Beachten Sie, dass in Firefox content scripts nicht in leere iframes bei <code>"document_start"</code> injiziert werden, auch wenn Sie diesen Wert in <code><a href="#run_at">run_at</a></code> angeben.
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
        Wenn <code>true</code>, wird Code in <code>about:</code>, <code>data:</code> und <code>blob:</code> Seiten injiziert, wenn deren Herkunft dem Muster in <code>matches</code> entspricht, selbst wenn die Dokumentherkunft opak ist (wegen der Verwendung von CSP oder iframe-Sandbox). Match-Muster in <code>matches</code> müssen ein vollständiges Platzhaltermuster angeben. Standardmäßig <code>false</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="matches"><code>matches</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          Ein Array von <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">Match-Mustern</a>. Siehe <a href="#matching_url_patterns">Passende URL-Muster</a> unten.
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
          Diese Option bestimmt, wann die in <code><a href="#css">css</a></code> und <code><a href="#js">js</a></code> angegebenen Dateien injiziert werden. Sie können hier eine von drei Zeichenfolgen angeben, von denen jede einen Zustand im Prozess des Ladens eines Dokuments identifiziert. Die Zustände entsprechen direkt [`Document.readyState`](/de/docs/Web/API/Document/readyState):
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
            Entspricht <code>complete</code>. Das Dokument und alle seine Ressourcen sind vollständig geladen.
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
            Die Standardausführungsumgebung für <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts">content scripts</a>.
            Diese Umgebung ist vom Kontext der Seite isoliert: während sie dasselbe Dokument teilen, unterscheiden sich die globalen Bereiche und verfügbaren APIs.
          </dd>
          <dt><code>"MAIN"</code></dt>
          <dd>
            Die Ausführungsumgebung der Webseite.
            Diese Umgebung wird ohne Isolation mit der Webseite geteilt.
            Skripte in dieser Umgebung haben keinen Zugriff auf die APIs, die nur für content scripts verfügbar sind.
            <div class="notecard warning" id="sect1">
              <p>
                <strong>Warnung:</strong> Aufgrund der fehlenden Isolation kann die Webseite den ausgeführten Code erkennen und beeinträchtigen. Verwenden Sie die <code>MAIN</code>-Welt nur, wenn es akzeptabel ist, dass Webseiten die Logik oder Daten, die durch den ausgeführten Code fließen, lesen, darauf zugreifen oder sie ändern können.
              </p>
            </div>
          </dd>
        </dl>
        <p>Der Standardwert ist <code>"ISOLATED"</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Passende URL-Muster

Der Schlüssel `"content_scripts"` hängt content scripts an Dokumente basierend auf der URL-Übereinstimmung an: wenn die URL des Dokuments der im Schlüssel angegebenen Spezifikation entspricht, dann wird das Skript angehängt. Es gibt vier Eigenschaften innerhalb von `"content_scripts"`, die Sie für diese Spezifikation verwenden können:

- `matches`
  - : ein Array von [Match-Mustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- `exclude_matches`
  - : ein Array von [Match-Mustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- `include_globs`
  - : ein Array von [globs](#globs)
- `exclude_globs`
  - : ein Array von [globs](#globs)

Um eine dieser Eigenschaften zu erfüllen, muss eine URL mindestens eines der Elemente in ihrem Array erfüllen. Zum Beispiel, bei einer Eigenschaft wie:

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

Ein _glob_ ist einfach eine Zeichenfolge, die Platzhalter enthalten kann.

Es gibt zwei Arten von Platzhaltern, und Sie können sie im selben glob kombinieren:

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

Dies injiziert ein einzelnes content script `borderify.js` in alle Seiten unter `mozilla.org` oder einem seiner Subdomains, egal ob über HTTP oder HTTPS bereitgestellt.

```json
  "content_scripts": [
    {
      "exclude_matches": ["*://developer.mozilla.org/*"],
      "matches": ["*://*.mozilla.org/*"],
      "js": ["jquery.js", "borderify.js"]
    }
  ]
```

Dies injiziert zwei content scripts in alle Seiten unter `mozilla.org` oder einem seiner Subdomains außer `developer.mozilla.org`, egal ob über HTTP oder HTTPS bereitgestellt.

Die content scripts sehen denselben DOM-Bereich und werden in der Reihenfolge injiziert, in der sie im Array erscheinen, sodass `borderify.js` globale Variablen sehen kann, die von `jquery.js` hinzugefügt wurden.

## Browser-Kompatibilität

{{Compat}}
