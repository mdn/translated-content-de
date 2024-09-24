---
title: content_security_policy
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy
l10n:
  sourceCommit: be48127d1f16af543287cbc54a9d4c6834ce1e30
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>String</code></td>
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

Erweiterungen haben standardmäßig eine Content Security Policy (CSP) angewendet. Die Standardrichtlinie beschränkt die Quellen, von denen Erweiterungen Code laden können (wie zum Beispiel [\<script>](/de/docs/Web/HTML/Element/script)-Ressourcen), und untersagt potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Weitere Informationen zu den Auswirkungen finden Sie unter [Standard-Content-Security-Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy).

Sie können den Manifest-Schlüssel `"content_security_policy"` verwenden, um die Standardrichtlinie zu lockern oder zu verschärfen. Dieser Schlüssel wird auf die gleiche Weise angegeben wie der HTTP-Header Content-Security-Policy. Eine allgemeine Beschreibung der CSP-Syntax finden Sie unter [Verwendung von Content Security Policy](/de/docs/Web/HTTP/CSP).

Beispielsweise können Sie diesen Schlüssel verwenden, um:

- Erlaubte Quellen für andere Arten von Inhalten wie Bilder und Stylesheets mithilfe der entsprechenden [Richtliniendirektive](/de/docs/Web/HTTP/Headers/Content-Security-Policy) einzuschränken.
- Der Erweiterung die Nutzung von [WebAssembly](/de/docs/WebAssembly) zu ermöglichen, indem die Quelle `'wasm-unsafe-eval'` in der `script-src`-Direktive enthalten ist.
- Die standardmäßigen {{CSP("script-src")}}-Richtlinien zu lockern (nur Manifest V2):
  - Der Erweiterung zu erlauben, Skripte außerhalb ihres Pakets durch Angabe ihrer URL in der {{CSP("script-src")}}-Direktive zu laden.
  - Der Erweiterung zu erlauben, Inline-Skripte auszuführen, indem der Hash des Skripts in der `script-src`-Direktive [angegeben wird](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script).
  - Der Erweiterung die Verwendung von `eval()` und ähnlichen Funktionen zu ermöglichen, indem `'unsafe-eval'` in die {{CSP("script-src")}}-Direktive aufgenommen wird.

Es gibt Einschränkungen bezüglich der Richtlinie, die Sie mit diesem Manifest-Schlüssel angeben können:

- Die {{CSP("script-src")}}-Direktive muss mindestens das Schlüsselwort `'self'` enthalten und darf nur sichere Quellen umfassen. Der Satz erlaubter sicherer Quellen unterscheidet sich zwischen Manifest V2 und Manifest V3.
- Die Richtlinie darf {{CSP("default-src")}} allein (ohne {{CSP("script-src")}}) umfassen, wenn ihre Quellen die Anforderungen der {{CSP("script-src")}}-Direktive erfüllen.
- Das Schlüsselwort {{CSP("object-src")}} kann erforderlich sein, siehe [object-src-Direktive](#object-src-direktive) für Details.
- Direktiven, die sich auf Code beziehen – {{CSP("script-src")}}, {{CSP("script-src-elem")}}, {{CSP("worker-src")}} und {{CSP("default-src")}} (falls als Fallback verwendet) – teilen die gleiche Anforderung für sichere Quellen. Es gibt keine Einschränkungen für CSP-Direktiven, die nicht-script-Inhalte abdecken, wie {{CSP("img-src")}}.

In Manifest V3 sind alle CSP-Quellen, die sich auf externe oder nicht-statische Inhalte beziehen, verboten. Die einzigen erlaubten Werte sind `'none'`, `'self'` und `'wasm-unsafe-eval'`.
In Manifest V2 wird eine Quelle für eine Skript-Direktive als sicher betrachtet, wenn sie diese Kriterien erfüllt:

- Platzhalter-Hosts sind nicht erlaubt, wie `"script-src 'self' *"`.
- Entfernte Quellen müssen `https:`-Schemata verwenden.
- Entfernte Quellen dürfen keine Platzhalter für Domänen in der [öffentlichen Suffixliste](https://publicsuffix.org/list/) verwenden (so sind `*.co.uk` und `*.blogspot.com` nicht erlaubt, obwohl `*.foo.blogspot.com` erlaubt ist).
- Alle Quellen müssen einen Host angeben.
- Die einzigen erlaubten Schemata für Quellen sind `blob:`, `filesystem:`, `moz-extension:`, `https:` und `wss:`.
- Die einzigen erlaubten [Schlüsselwörter](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) sind: `'none'`, `'self'`, `'unsafe-eval'` und `'wasm-unsafe-eval'`.

## object-src-Direktive

Die `{{CSP("object-src")}}`-Direktive kann in einigen Browsern erforderlich sein, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen, und sollte, falls benötigt, auf eine sichere Quelle wie `'none'` gesetzt werden. Dies kann für Browser bis 2022 notwendig sein.

- In Firefox ist `"object-src"` optional ab Firefox 106. In früheren Versionen wird `"content_security_policy"` ignoriert und die Standard-CSP verwendet, wenn `"object-src"` nicht angegeben ist.
- In Chrome ist `"object-src"` erforderlich. Wenn es fehlt oder als unsicher angesehen wird, wird die Standardrichtlinie (`"object-src 'self'"`) verwendet und eine Warnmeldung protokolliert.
- In Safari besteht keine Anforderung für `"object-src"`.

Weitere Informationen finden Sie im W3C WebExtensions Community Group [Thema 204](https://github.com/w3c/webextensions/issues/204), Entfernen Sie object-src aus der CSP.

## Manifest V2-Syntax

In Manifest V2 wird eine Content-Security-Policy gegen den Schlüssel wie folgt spezifiziert:

```json
"content_security_policy": "default-src 'self'"
```

## Manifest V3-Syntax

In Manifest V3 ist der `content_security_policy`-Schlüssel ein Objekt, das eine beliebige dieser, alle optionalen, Eigenschaften haben kann:

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
        Die Content-Security-Policy, die für Erweiterungsseiten verwendet wird. Die <code>script-src</code>- und <code>worker-src</code>-Direktiven dürfen nur die folgenden Werte haben:
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
        Die Content-Security-Policy, die für sandboxed-Erweiterungsseiten verwendet wird.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Gültige Beispiele

> [!NOTE]
> Gültige Beispiele zeigen die korrekte Verwendung von Schlüsseln in CSP.
> Allerdings sind Erweiterungen mit 'unsafe-eval', entfernten Skripten, Blob- oder entfernten Quellen in ihrer CSP gemäß den [Add-on-Richtlinien](https://extensionworkshop.com/documentation/publish/add-on-policies/) und aufgrund erheblicher Sicherheitsprobleme nicht für Firefox-Erweiterungen erlaubt.

> [!NOTE]
> Einige Beispiele beinhalten die `{{CSP("object-src")}}`-Direktive, die eine Rückwärtskompatibilität für ältere Browserversionen bietet. Weitere Details finden Sie unter [object-src-Direktive](#object-src-direktive).

Erfordern, dass alle Arten von Inhalten mit der Erweiterung verpackt werden sollten:

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

Erlauben von entfernten Skripten von einer beliebigen Subdomain von "jquery.com":

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://*.jquery.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine entfernten URLs in `script-src` von `extension_pages`.

Erlauben von [`eval()` und Freunden](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval%28%29_and_friends):

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"
  ```

- Manifest V3 erlaubt keine `'unsafe-eval'` in `script-src`.

Erlauben des Inline-Skripts: `"<script>alert('Hello, world.');</script>"`:

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='; object-src 'self'"
  ```

- Manifest V3 erlaubt keine CSP-Hashes in `script-src` von `extension_pages`.

Behalten der restlichen Richtlinie, aber auch erfordern, dass Bilder mit der Erweiterung verpackt werden:

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

Aktivieren der Verwendung von [WebAssembly](/de/docs/WebAssembly):

- Manifest V2

  Aus Gründen der Rückwärtskompatibilität können Manifest V2-Erweiterungen in Firefox WebAssembly verwenden, ohne `'wasm-unsafe-eval'` zu verwenden. Dieses Verhalten ist jedoch nicht garantiert. Siehe [Firefox Bug 1770909](https://bugzil.la/1770909). Erweiterungen, die WebAssembly verwenden, werden daher ermutigt, `'wasm-unsafe-eval'` in ihrer CSP anzugeben. Weitere Informationen finden Sie auf der Content-Security-Policy-Seite unter [WebAssembly](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#webassembly).

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

Dies ist jedoch nur in Browsern ungültig, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen. Weitere Details finden Sie unter [object-src-Direktive](#object-src-direktive).

Richtlinie, die das Schlüsselwort `"self"` in der `"script-src"`-Direktive weglässt:

```json example-bad
"content_security_policy": "script-src https://*.jquery.com; object-src 'self'"
```

Schema für eine entfernte Quelle ist nicht `https`:

```json example-bad
"content_security_policy": "script-src 'self' http://code.jquery.com; object-src 'self'"
```

Platzhalter wird mit einer generischen Domain verwendet:

```json example-bad
"content_security_policy": "script-src 'self' https://*.blogspot.com; object-src 'self'"
```

Quelle gibt ein Schema, jedoch keinen Host an:

```json example-bad
"content_security_policy": "script-src 'self' https:; object-src 'self'"
```

Direktive enthält das nicht unterstützte Schlüsselwort `'unsafe-inline'`:

```json example-bad
"content_security_policy": "script-src 'self' 'unsafe-inline'; object-src 'self'"
```

## Browser-Kompatibilität

{{Compat}}
