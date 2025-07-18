---
title: content_security_policy
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
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

Erweiterungen haben standardmäßig eine Content Security Policy (CSP) angewendet. Die Standardrichtlinie beschränkt die Quellen, von denen Erweiterungen Code laden können (wie [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Ressourcen) und verbietet potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Siehe [Standard-Content-Security-Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy), um mehr über die Auswirkungen dieser Richtlinie zu erfahren.

Sie können den Manifest-Schlüssel `"content_security_policy"` verwenden, um die Standardrichtlinie zu lockern oder zu straffen. Dieser Schlüssel wird auf die gleiche Weise wie der Content-Security-Policy-HTTP-Header spezifiziert. Siehe [Verwendung von Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) für eine allgemeine Beschreibung der CSP-Syntax.

Beispielsweise können Sie diesen Schlüssel verwenden, um:

- Zugelassene Quellen für andere Arten von Inhalten wie Bilder und Stylesheets einzuschränken, indem die entsprechende [Richtliniendirektive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) verwendet wird.
- Der Erweiterung die Nutzung von [WebAssembly](/de/docs/WebAssembly) zu ermöglichen, indem die Quelle `'wasm-unsafe-eval'` in die `script-src`-Direktive aufgenommen wird.
- Die Standard-{{CSP("script-src")}}-Richtlinien (nur Manifest V2) zu lockern:
  - Der Erweiterung erlauben, Skripte von außerhalb ihres Pakets zu laden, indem ihre URL in der {{CSP("script-src")}}-Direktive angegeben wird.
  - Der Erweiterung erlauben, Inline-Skripte auszuführen, indem der [Hash des Skripts in der `script-src`-Direktive angegeben wird](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_inline_script).
  - Der Erweiterung erlauben, `eval()` und ähnliche Funktionen zu verwenden, indem `'unsafe-eval'` in die {{CSP("script-src")}}-Direktive aufgenommen wird.

Es gibt Einschränkungen für die Richtlinie, die Sie mit diesem Manifest-Schlüssel spezifizieren können:

- Die {{CSP("script-src")}}-Direktive muss mindestens das `'self'`-Schlüsselwort enthalten und darf nur sichere Quellen umfassen. Der Satz erlaubter sicherer Quellen unterscheidet sich zwischen Manifest V2 und Manifest V3.
- Die Richtlinie darf {{CSP("default-src")}} allein (ohne {{CSP("script-src")}}) beinhalten, wenn ihre Quellen die Anforderungen für die {{CSP("script-src")}}-Direktive erfüllen.
- Das Schlüsselwort {{CSP("object-src")}} kann erforderlich sein, siehe [object-src-Direktive](#object-src-direktive) für Details.
- Direktiven, die sich auf Code beziehen – {{CSP("script-src")}}, {{CSP("script-src-elem")}}, {{CSP("worker-src")}} und {{CSP("default-src")}} (wenn als Fallback verwendet) – teilen die gleiche Anforderung für sichere Quellen. Es gibt keine Einschränkungen für CSP-Direktiven, die sich auf Nicht-Skript-Inhalte beziehen, wie z.B. {{CSP("img-src")}}.

In Manifest V3 sind alle CSP-Quellen, die sich auf externe oder nicht-statische Inhalte beziehen, verboten. Die einzigen zulässigen Werte sind `'none'`, `'self'` und `'wasm-unsafe-eval'`.
In Manifest V2 wird eine Quelle für eine Skriptdirektive als sicher angesehen, wenn sie diese Kriterien erfüllt:

- Platzhalter-Hosts sind nicht erlaubt, wie `"script-src 'self' *"`.
- Externe Quellen müssen `https:`-Schemata verwenden.
- Externe Quellen dürfen keine Platzhalter für Domains in der [Public Suffix List](https://publicsuffix.org/list/) verwenden (daher sind `*.co.uk` und `*.blogspot.com` nicht erlaubt, obwohl `*.foo.blogspot.com` erlaubt ist).
- Alle Quellen müssen einen Host angeben.
- Die einzigen erlaubten Schemata für Quellen sind `blob:`, `filesystem:`, `moz-extension:`, `https:` und `wss:`.
- Die einzigen erlaubten [Schlüsselwörter](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax) sind: `'none'`, `'self'`, `'unsafe-eval'` und `'wasm-unsafe-eval'`.

## object-src-Direktive

Die `{{CSP("object-src")}}`-Direktive kann in einigen Browsern erforderlich sein, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen, und sollte auf eine sichere Quelle wie `'none'` gesetzt werden, falls erforderlich. Dies kann für Browser bis ins Jahr 2022 notwendig sein.

- In Firefox ist `"object-src"` ab Firefox 106 optional. In früheren Versionen, wenn `"object-src"` nicht angegeben ist, wird `"content_security_policy"` ignoriert und die Standard-CSP verwendet.
- In Chrome ist `"object-src"` erforderlich. Fehlt der Wert oder wird er als unsicher angesehen, wird die Standardrichtlinie (`"object-src 'self'"`) verwendet und eine Warnmeldung ausgegeben.
- In Safari gibt es keine Anforderung für `"object-src"`.

Weitere Informationen finden Sie im W3C WebExtensions Community Group [issue 204](https://github.com/w3c/webextensions/issues/204), "Remove object-src from the CSP".

## Manifest V2-Syntax

In Manifest V2 gibt es eine Content-Security-Policy, die gegen den Schlüssel so spezifiziert ist:

```json
"content_security_policy": "default-src 'self'"
```

## Manifest V3-Syntax

In Manifest V3 ist der Schlüssel `content_security_policy` ein Objekt, das beliebige dieser Eigenschaften haben kann, alle optional:

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
        Die Content-Security-Policy, die für Erweiterungsseiten verwendet wird. Die Direktiven <code>script-src</code> und <code>worker-src</code> dürfen nur diese Werte haben:
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
        Die Content-Security-Policy, die für sandboxes Erweiterungsseiten verwendet wird.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Gültige Beispiele

> [!NOTE]
> Gültige Beispiele zeigen die korrekte Verwendung der Schlüssel in CSP.
> Jedoch sind Erweiterungen mit 'unsafe-eval', entfernten Skripten, Blob- oder entfernten Quellen in ihrer CSP nicht für Firefox-Erweiterungen zugelassen gemäß den [Add-on-Richtlinien](https://extensionworkshop.com/documentation/publish/add-on-policies/) und aufgrund signifikanter Sicherheitsprobleme.

> [!NOTE]
> Einige Beispiele enthalten die `{{CSP("object-src")}}`-Direktive, die eine Abwärtskompatibilität für ältere Browserversionen bietet. Siehe [object-src-Direktive](#object-src-direktive) für weitere Details.

Erfordern, dass alle Arten von Inhalten mit der Erweiterung gebündelt werden sollen:

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

Erlauben von entfernten Skripten von "https://example.com":

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://example.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine entfernten URLs in `script-src` von `extension_pages`.

Erlauben von entfernten Skripten von beliebigen Subdomains von "jquery.com":

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://*.jquery.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine entfernten URLs in `script-src` von `extension_pages`.

Erlauben von [`eval()` und Verwandten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval_and_friends):

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"
  ```

- Manifest V3 erlaubt kein `'unsafe-eval'` in `script-src`.

Erlauben des Inline-Skripts: `"<script>alert('Hello, world.');</script>"`:

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='; object-src 'self'"
  ```

- Manifest V3 erlaubt keine CSP-Hashes in `script-src` von `extension_pages`.

Den Rest der Richtlinie beibehalten, aber auch erfordern, dass Bilder mit der Erweiterung gebündelt werden:

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

Die Nutzung von [WebAssembly](/de/docs/WebAssembly) ermöglichen:

- Manifest V2

  Für die Abwärtskompatibilität können Manifest V2-Erweiterungen in Firefox WebAssembly ohne die Verwendung von `'wasm-unsafe-eval'` nutzen. Allerdings ist dieses Verhalten nicht garantiert. Siehe [Firefox Bug 1770909](https://bugzil.la/1770909). Erweiterungen, die WebAssembly verwenden, werden daher ermutigt, `'wasm-unsafe-eval'` in ihrer CSP zu deklarieren. Siehe [WebAssembly](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#webassembly) auf der Content Security Policy-Seite für weitere Informationen.

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

Richtlinie, die die `"object-src"`-Direktive weglässt:

```json example-bad
"content_security_policy": "script-src 'self' https://*.jquery.com;"
```

Dies ist jedoch nur in Browsern ungültig, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen. Siehe [object-src-Direktive](#object-src-direktive) für weitere Details.

Richtlinie, die das `"self"`-Schlüsselwort in der `"script-src"`-Direktive weglässt:

```json example-bad
"content_security_policy": "script-src https://*.jquery.com; object-src 'self'"
```

Das Schema für eine externe Quelle ist nicht `https`:

```json example-bad
"content_security_policy": "script-src 'self' http://code.jquery.com; object-src 'self'"
```

Ein Platzhalter wird mit einer generischen Domain verwendet:

```json example-bad
"content_security_policy": "script-src 'self' https://*.blogspot.com; object-src 'self'"
```

Die Quelle gibt ein Schema an, aber keinen Host:

```json example-bad
"content_security_policy": "script-src 'self' https:; object-src 'self'"
```

Die Direktive enthält das nicht unterstützte Schlüsselwort `'unsafe-inline'`:

```json example-bad
"content_security_policy": "script-src 'self' 'unsafe-inline'; object-src 'self'"
```

## Browser-Kompatibilität

{{Compat}}
