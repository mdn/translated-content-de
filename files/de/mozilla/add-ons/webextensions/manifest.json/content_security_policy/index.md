---
title: content_security_policy
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy
l10n:
  sourceCommit: 64969748897516212b7585b8dbc8f9f1a9bbb242
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>String</code></td>
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
        Manifest V2:
        <pre class="brush: json">
"content_security_policy": "default-src 'self'"</pre>
        Manifest V3:
        <pre class="brush: json">
"content_security_policy": {
  "extension_pages": "default-src 'self'"
}</pre>
      </td>
    </tr>
  </tbody>
</table>

Erweiterungen haben standardmäßig eine Content Security Policy (CSP). Die Standardrichtlinie beschränkt die Quellen, von denen Erweiterungen Code laden können (wie beispielsweise [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Ressourcen), und verbietet potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Weitere Informationen zu den Implikationen finden Sie unter [Standard-Content-Security-Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy).

Sie können den Manifest-Schlüssel `"content_security_policy"` verwenden, um die Standardrichtlinie zu lockern oder zu verschärfen. Dieser Schlüssel wird auf die gleiche Weise spezifiziert wie der Content-Security-Policy HTTP-Header. Siehe [Verwendung von Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) für eine allgemeine Beschreibung der CSP-Syntax.

Beispielsweise können Sie diesen Schlüssel verwenden, um:

- Erlaubte Quellen für andere Inhaltstypen, wie Bilder und Stylesheets, durch die passende [Richtliniendirektive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) zu beschränken.
- Es der Erweiterung zu ermöglichen, [WebAssembly](/de/docs/WebAssembly) zu nutzen, indem die Quelle `'wasm-unsafe-eval'` in die `script-src`-Direktive aufgenommen wird.
- Die Standard-{{CSP("script-src")}}-Richtlinien zu lockern (nur Manifest V2):
  - Es der Erweiterung zu erlauben, Skripte von außerhalb ihres Pakets zu laden, indem ihre URL in der {{CSP("script-src")}}-Direktive angegeben wird.
  - Es der Erweiterung zu erlauben, Inline-Skripte auszuführen, indem [der Hash des Skripts in der `script-src`-Direktive angegeben wird](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_inline_script).
  - Es der Erweiterung zu erlauben, `eval()` und ähnliche Funktionen zu verwenden, indem `'unsafe-eval'` in der {{CSP("script-src")}}-Direktive einbezogen wird.

Es gibt Einschränkungen hinsichtlich der Richtlinie, die Sie mit diesem Manifests-Schlüssel festlegen können:

- Die {{CSP("script-src")}}-Direktive muss mindestens das `'self'`-Schlüsselwort enthalten und darf nur sichere Quellen beinhalten. Die Menge der erlaubten sicheren Quellen variiert zwischen Manifest V2 und Manifest V3.
- Die Richtlinie kann {{CSP("default-src")}} alleine (ohne {{CSP("script-src")}}) enthalten, wenn ihre Quellen die Anforderungen für die {{CSP("script-src")}}-Direktive erfüllen.
- Das {{CSP("object-src")}}-Schlüsselwort kann erforderlich sein; siehe [object-src-Direktive](#object-src-direktive) für weitere Details.
- Direktiven, die sich auf Code beziehen – {{CSP("script-src")}}, {{CSP("script-src-elem")}}, {{CSP("worker-src")}} und {{CSP("default-src")}} (falls als Fallback verwendet) – teilen die gleichen Anforderungen an sichere Quellen. Es gibt keine Einschränkungen für CSP-Direktiven, die nicht-skriptbasierten Inhalt betreffen, wie {{CSP("img-src")}}.

In Manifest V3 sind alle CSP-Quellen, die sich auf externe oder nicht-statische Inhalte beziehen, in CSP-Direktiven, die Skriptinhalte abdecken, verboten. Die einzigen erlaubten Werte sind `'none'`, `'self'` und `'wasm-unsafe-eval'`. Es gibt eine Ausnahme für Skripte von localhost während der Entwicklung; siehe [Skripte von localhost](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#scripts_from_localhost) in der Content Security Policy für mehr Informationen.

In Manifest V2 wird eine Quelle für eine Skriptrichtlinie als sicher angesehen, wenn sie folgende Kriterien erfüllt:

- Platzhalter-Hosts sind nicht erlaubt, wie `"script-src 'self' *"`.
- Entfernung von Quellen muss `https:`-Schemata verwenden.
- Entfernung von Quellen darf keine Platzhalter für Domänen in der [öffentlichen Suffixliste](https://publicsuffix.org/list/) verwenden (so sind `*.co.uk` und `*.blogspot.com` nicht erlaubt, obwohl `*.foo.blogspot.com` erlaubt ist).
- Alle Quellen müssen einen Host angeben.
- Die einzigen erlaubten Schemata für Quellen sind `blob:`, `filesystem:`, `moz-extension:`, `https:` und `wss:`.
- Die einzigen erlaubten [Schlüsselwörter](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax) sind: `'none'`, `'self'`, `'unsafe-eval'` und `'wasm-unsafe-eval'`.

## object-src-Direktive

Die `{{CSP("object-src")}}`-Direktive kann in einigen Browsern erforderlich sein, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen, und sollte auf eine sichere Quelle wie `'none'` gesetzt werden, falls erforderlich. Dies kann für Browser bis 2022 notwendig sein.

- In Firefox ist `"object-src"` ab Firefox 106 optional. In früheren Versionen wird, wenn `"object-src"` nicht angegeben ist, `"content_security_policy"` ignoriert und die Standard-CSP verwendet.
- In Chrome ist `"object-src"` erforderlich. Wenn es fehlt oder unsicher erscheint, wird der Standard (`"object-src 'self'"`) verwendet und eine Warnmeldung protokolliert.
- In Safari gibt es keine Anforderung für `"object-src"`.

Siehe W3C WebExtensions Community Group [Issue 204](https://github.com/w3c/webextensions/issues/204), Entfernen von object-src aus der CSP, für mehr Informationen.

## Manifest V2-Syntax

In Manifest V2 wird eine Content-Security-Policy gegen den Schlüssel so spezifiziert:

```json
"content_security_policy": "default-src 'self'"
```

## Manifest V3-Syntax

In Manifest V3 ist der `content_security_policy`-Schlüssel ein Objekt, das diese Eigenschaften haben kann, alle optional:

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
      <td><code>extension_pages</code></td>
      <td><code>String</code></td>
      <td>
        Die Content-Security-Policy, die für Erweiterungsseiten verwendet wird. Die <code>script-src</code>- und <code>worker-src</code>-Direktiven dürfen nur diese Werte haben:
        <ul>
          <li><code>'self'</code></li>
          <li><code>'none'</code></li>
          <li><code>'wasm-unsafe-eval'</code></li>
        </ul>
      </td>
    </tr>
   <tr>
      <td><code>sandbox</code></td>
      <td><code>String</code></td>
      <td>
        Die Content-Security-Policy, die für sandkastenbasierte Erweiterungsseiten verwendet wird.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Gültige Beispiele

> [!NOTE]
> Gültige Beispiele demonstrieren die korrekte Verwendung von Schlüsseln in der CSP.
> Allerdings sind Erweiterungen mit 'unsafe-eval', entfernten Skripten, Blobs oder entfernten Quellen in ihrer CSP für Firefox-Erweiterungen gemäß den [Add-on-Richtlinien](https://extensionworkshop.com/documentation/publish/add-on-policies/) und aufgrund signifikanter Sicherheitsprobleme nicht erlaubt.

> [!NOTE]
> Einige Beispiele enthalten die `{{CSP("object-src")}}`-Direktive, die Abwärtskompatibilität für ältere Browserversionen bietet. Siehe [object-src-Direktive](#object-src-direktive) für weitere Details.

Fordern Sie, dass alle Inhaltstypen mit der Erweiterung verpackt werden sollten:

- Manifest V2

  ```json
  "content_security_policy": "default-src 'self'"
  ```

- Manifest V3

  ```json
  "content_security_policy": {
    "extension_pages": "default-src 'self'"
  }
  ```

Erlauben Sie entfernte Skripte von "https://example.com":

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://example.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine entfernten URLs in `script-src` von `extension_pages`.

Erlauben Sie entfernte Skripte von beliebigen Subdomains von "jquery.com":

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://*.jquery.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine entfernten URLs in `script-src` von `extension_pages`.

  ```json
  "content_security_policy": {
    "extension_pages": "script-src 'self' http://localhost:3000"
  }
  ```

  Allerdings können Skripte von localhost während der Entwicklung für nicht gepackte Erweiterungen in Chrome 110 und temporär geladene Erweiterungen in Firefox 147 auf die Whitelist gesetzt werden. Siehe [Skripte von localhost](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#scripts_from_localhost) in der Content Security Policy für mehr Informationen.

Erlauben Sie [`eval()` und Ähnliches](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval_and_friends):

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"
  ```

- Manifest V3 erlaubt `'unsafe-eval'` nicht in `script-src`.

Erlauben Sie das Inline-Skript: `"<script>alert('Hello, world.');</script>"`:

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='; object-src 'self'"
  ```

- Manifest V3 erlaubt keine CSP-Hashes in `script-src` von `extension_pages`.

Behalten Sie den Rest der Richtlinie bei, verlangen aber auch, dass Bilder mit der Erweiterung verpackt werden:

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self'; object-src 'self'; img-src 'self'"
  ```

- Manifest V3

  ```json
  "content_security_policy": {
    "extension_pages": "script-src 'self'; img-src 'self'"
  }
  ```

Aktivieren Sie die Verwendung von [WebAssembly](/de/docs/WebAssembly):

- Manifest V2

  Für die Abwärtskompatibilität können Manifest V2-Erweiterungen in Firefox WebAssembly ohne die Verwendung von `'wasm-unsafe-eval'` verwenden. Dieses Verhalten ist jedoch nicht garantiert. Siehe [Firefox-Bug 1770909](https://bugzil.la/1770909). Erweiterungen, die WebAssembly verwenden, werden daher ermutigt, `'wasm-unsafe-eval'` in ihrer CSP zu deklarieren. Siehe [WebAssembly](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#webassembly) auf der Content Security Policy-Seite für mehr Informationen.

  ```json
  "content_security_policy": "script-src 'self' 'wasm-unsafe-eval'"
  ```

- Manifest V3

  ```json
  "content_security_policy": {
    "extension_pages": "script-src 'self' 'wasm-unsafe-eval'"
  }
  ```

### Ungültige Beispiele

Richtlinie, die die `"object-src"`-Direktive auslässt:

```json example-bad
"content_security_policy": "script-src 'self' https://*.jquery.com;"
```

Allerdings ist dies nur in Browsern ungültig, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen. Siehe [object-src-Direktive](#object-src-direktive) für mehr Details.

Richtlinie, die das `"self"`-Schlüsselwort in der `"script-src"`-Direktive auslässt:

```json example-bad
"content_security_policy": "script-src https://*.jquery.com; object-src 'self'"
```

Schema für eine entfernte Quelle ist nicht `https`:

```json example-bad
"content_security_policy": "script-src 'self' http://code.jquery.com; object-src 'self'"
```

Wildcard wird mit einer generischen Domain verwendet:

```json example-bad
"content_security_policy": "script-src 'self' https://*.blogspot.com; object-src 'self'"
```

Die Quelle gibt ein Schema an, aber keinen Host:

```json example-bad
"content_security_policy": "script-src 'self' https:; object-src 'self'"
```

Direktive enthält das nicht unterstützte Schlüsselwort `'unsafe-inline'`:

```json example-bad
"content_security_policy": "script-src 'self' 'unsafe-inline'; object-src 'self'"
```

## Browser-Kompatibilität

{{Compat}}
