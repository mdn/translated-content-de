---
title: content_security_policy
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{AddonSidebar}}

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

Erweiterungen haben standardmäßig eine Content Security Policy (CSP), die auf sie angewendet wird. Die Standardrichtlinie beschränkt die Quellen, von denen Erweiterungen Code laden können (wie zum Beispiel [`<script>`](/de/docs/Web/HTML/Element/script)-Ressourcen) und verbietet potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Weitere Informationen zu den Auswirkungen dieser Richtlinie finden Sie unter [Standard-Content-Security-Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy).

Sie können den Manifest-Schlüssel `"content_security_policy"` verwenden, um die Standardrichtlinie zu lockern oder zu verschärfen. Dieser Schlüssel wird in der gleichen Weise wie der Content-Security-Policy HTTP-Header angegeben. Für eine allgemeine Beschreibung der CSP-Syntax siehe [Verwendung der Content Security Policy](/de/docs/Web/HTTP/Guides/CSP).

Zum Beispiel können Sie diesen Schlüssel verwenden, um:

- Erlaubte Quellen für andere Inhaltstypen einzuschränken, wie Bilder und Stylesheets, unter Verwendung der entsprechenden [Richtliniendirektive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy).
- Es der Erweiterung zu ermöglichen, [WebAssembly](/de/docs/WebAssembly) zu nutzen, indem die Quelle `'wasm-unsafe-eval'` in die `script-src`-Direktive aufgenommen wird.
- Die Standard-CSP-Richtlinien für {{CSP("script-src")}} (nur Manifest V2) zu lockern:
  - Der Erweiterung erlauben, Skripte von außerhalb ihres Pakets zu laden, indem ihre URL in der {{CSP("script-src")}}-Direktive angegeben wird.
  - Der Erweiterung erlauben, Inline-Skripte auszuführen, indem [der Hash des Skripts in der `script-src`-Direktive angegeben wird](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_inline_script).
  - Der Erweiterung erlauben, `eval()` und ähnliche Funktionen zu verwenden, indem `'unsafe-eval'` in die {{CSP("script-src")}}-Direktive aufgenommen wird.

Es gibt Einschränkungen bezüglich der Richtlinie, die Sie mit diesem Manifest-Schlüssel angeben können:

- Die {{CSP("script-src")}}-Direktive muss mindestens das Schlüsselwort `'self'` enthalten und darf nur sichere Quellen umfassen. Der Satz erlaubter sicherer Quellen unterscheidet sich zwischen Manifest V2 und Manifest V3.
- Die Richtlinie kann {{CSP("default-src")}} allein (ohne {{CSP("script-src")}}) enthalten, wenn ihre Quellen die Anforderungen für die {{CSP("script-src")}}-Direktive erfüllen.
- Das Schlüsselwort {{CSP("object-src")}} kann erforderlich sein, siehe [object-src Direktive](#object-src_direktive) für Details.
- Direktiven, die sich auf Code beziehen – {{CSP("script-src")}}, {{CSP("script-src-elem")}}, {{CSP("worker-src")}} und {{CSP("default-src")}} (wenn als Fallback verwendet) – teilen die gleiche Anforderung an sichere Quellen. Es gibt keine Einschränkungen für CSP-Direktiven, die nicht-skriptbezogene Inhalte abdecken, wie {{CSP("img-src")}}.

In Manifest V3 sind alle CSP-Quellen, die sich auf externe oder nicht-statische Inhalte beziehen, verboten. Die einzigen erlaubten Werte sind `'none'`, `'self'` und `'wasm-unsafe-eval'`.
In Manifest V2 wird eine Quelle für eine Skript-Direktive als sicher angesehen, wenn sie diese Kriterien erfüllt:

- Platzhalterhosts sind nicht erlaubt, wie zum Beispiel `"script-src 'self' *"`.
- Entfernte Quellen müssen `https:`-Schemas verwenden.
- Entfernte Quellen dürfen keine Platzhalter für Domains aus der [öffentlichen Suffixliste](https://publicsuffix.org/list/) verwenden (also sind `*.co.uk` und `*.blogspot.com` nicht erlaubt, obwohl `*.foo.blogspot.com` erlaubt ist).
- Alle Quellen müssen einen Host angeben.
- Die einzigen erlaubten Schemas für Quellen sind `blob:`, `filesystem:`, `moz-extension:`, `https:` und `wss:`.
- Die einzigen erlaubten [Schlüsselwörter](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax) sind: `'none'`, `'self'`, `'unsafe-eval'` und `'wasm-unsafe-eval'`.

## object-src Direktive

Die `{{CSP("object-src")}}`-Direktive kann in einigen Browsern erforderlich sein, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen, und sollte zu einer sicheren Quelle wie `'none'` gesetzt werden, falls erforderlich. Dies kann für Browser bis 2022 notwendig sein.

- In Firefox ist `"object-src"` optional ab Firefox 106. In früheren Versionen, wenn `"object-src"` nicht angegeben ist, wird `"content_security_policy"` ignoriert und die standardmäßige CSP verwendet.
- In Chrome ist `"object-src"` erforderlich. Wenn es fehlt oder als unsicher eingestuft wird, wird die Standard-CSP (`"object-src 'self'"`) verwendet und eine Warnmeldung protokolliert.
- In Safari gibt es keine Anforderung für `"object-src"`.

Weitere Informationen finden Sie im W3C WebExtensions Community Group [Issue 204](https://github.com/w3c/webextensions/issues/204), Entfernen von object-src aus der CSP.

## Manifest V2-Syntax

In Manifest V2 gibt es eine Content-Security-Policy, die gegen den Schlüssel so angegeben wird:

```json
"content_security_policy": "default-src 'self'"
```

## Manifest V3-Syntax

In Manifest V3 ist der `content_security_policy`-Schlüssel ein Objekt, das eine dieser Eigenschaften haben kann, alle optional:

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
        Die Content Security Policy, die für Erweiterungsseiten verwendet wird. Die <code>script-src</code> und <code>worker-src</code>-Direktiven dürfen nur diese Werte haben:
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
        Die Content Security Policy, die für sandboxed Erweiterungsseiten verwendet wird.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Gültige Beispiele

> [!NOTE]
> Gültige Beispiele zeigen die korrekte Verwendung von Schlüsseln in CSP.
> Allerdings sind Erweiterungen mit 'unsafe-eval', entfernten Skripten, Blob- oder entfernten Quellen in ihrer CSP nicht für Firefox-Erweiterungen erlaubt gemäß den [Add-on-Richtlinien](https://extensionworkshop.com/documentation/publish/add-on-policies/) und aufgrund erheblicher Sicherheitsprobleme.

> [!NOTE]
> Einige Beispiele beinhalten die `{{CSP("object-src")}}`-Direktive, die ältere Browserversionen unterstützt. Für mehr Details siehe [object-src Direktive](#object-src_direktive).

Erfordern, dass alle Inhaltstypen mit der Erweiterung gebündelt werden sollen:

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

Erlauben von entfernten Skripten von jedem Subdomain von "jquery.com":

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://*.jquery.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine entfernten URLs in `script-src` von `extension_pages`.

Erlauben von [`eval()` und verwandten Funktionen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval%28%29_and_friends):

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"
  ```

- Manifest V3 erlaubt `'unsafe-eval'` nicht in `script-src`.

Erlauben des Inline-Skripts: `"<script>alert('Hello, world.');</script>"`:

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='; object-src 'self'"
  ```

- Manifest V3 erlaubt keine CSP-Hashes in `script-src` von `extension_pages`.

Den Rest der Richtlinie beibehalten, aber auch verlangen, dass Bilder mit der Erweiterung gebündelt werden:

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

Aktivieren der Nutzung von [WebAssembly](/de/docs/WebAssembly):

- Manifest V2

  Zur Rückwärtskompatibilität können Manifest V2-Erweiterungen in Firefox WebAssembly ohne die Verwendung von `'wasm-unsafe-eval'` verwenden. Dieses Verhalten ist jedoch nicht garantiert. Siehe [Firefox-Bug 1770909](https://bugzil.la/1770909). Erweiterungen, die WebAssembly verwenden, werden daher dazu aufgefordert, `'wasm-unsafe-eval'` in ihrer CSP anzugeben. Weitere Informationen siehe [WebAssembly](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#webassembly) auf der Content Security Policy Seite.

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

Dies ist jedoch nur in Browsern ungültig, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen. Siehe [object-src Direktive](#object-src_direktive) für mehr Details.

Richtlinie, die das Schlüsselwort `"self"` in der `"script-src"`-Direktive auslässt:

```json example-bad
"content_security_policy": "script-src https://*.jquery.com; object-src 'self'"
```

Schema für eine entfernte Quelle ist nicht `https`:

```json example-bad
"content_security_policy": "script-src 'self' http://code.jquery.com; object-src 'self'"
```

Platzhalter wird mit einem generischen Domain verwendet:

```json example-bad
"content_security_policy": "script-src 'self' https://*.blogspot.com; object-src 'self'"
```

Quelle gibt ein Schema an, aber keinen Host:

```json example-bad
"content_security_policy": "script-src 'self' https:; object-src 'self'"
```

Direktive enthält das nicht unterstützte Schlüsselwort `'unsafe-inline'`:

```json example-bad
"content_security_policy": "script-src 'self' 'unsafe-inline'; object-src 'self'"
```

## Browser-Kompatibilität

{{Compat}}
