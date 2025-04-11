---
title: content_security_policy
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
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

Erweiterungen haben standardmäßig eine Content Security Policy (CSP) angelegt. Die Standardrichtlinie beschränkt die Quellen, von denen Erweiterungen Code laden können (wie zum Beispiel [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Ressourcen), und verbietet potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Weitere Informationen zu den Auswirkungen finden Sie unter [Standard-Content-Security-Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy).

Sie können den `"content_security_policy"`-Manifest-Schlüssel verwenden, um die Standardrichtlinie zu lockern oder zu verschärfen. Dieser Schlüssel wird auf die gleiche Weise spezifiziert wie der HTTP-Header Content-Security-Policy. Eine allgemeine Beschreibung der CSP-Syntax finden Sie unter [Verwendung von Content Security Policy](/de/docs/Web/HTTP/Guides/CSP).

Zum Beispiel können Sie diesen Schlüssel verwenden, um:

- Die erlaubten Quellen für andere Inhaltsarten wie Bilder und Stylesheets mit der entsprechenden [Richtliniendirektive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) einzuschränken.
- Der Erweiterung zu ermöglichen, [WebAssembly](/de/docs/WebAssembly) zu nutzen, indem die Quelle `'wasm-unsafe-eval'` in die `script-src`-Direktive aufgenommen wird.
- Die Standard-{{CSP("script-src")}}-Richtlinien zu lockern (nur für Manifest V2):
  - Der Erweiterung erlauben, Skripte von außerhalb ihres Pakets zu laden, indem ihre URL in der {{CSP("script-src")}}-Direktive angegeben wird.
  - Der Erweiterung erlauben, Inline-Skripte auszuführen, indem [der Hash des Skripts in der `script-src`-Direktive angegeben wird](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_inline_script).
  - Der Erweiterung erlauben, `eval()` und ähnliche Funktionen zu verwenden, indem `'unsafe-eval'` in die {{CSP("script-src")}}-Direktive aufgenommen wird.

Es gibt Einschränkungen bezüglich der Richtlinie, die Sie mit diesem Manifest-Schlüssel angeben können:

- Die {{CSP("script-src")}}-Direktive muss mindestens das `'self'`-Schlüsselwort enthalten und darf nur sichere Quellen enthalten. Die Menge der erlaubten sicheren Quellen unterscheidet sich zwischen Manifest V2 und Manifest V3.
- Die Richtlinie kann {{CSP("default-src")}} alleine (ohne {{CSP("script-src")}}) enthalten, wenn ihre Quellen die Anforderungen für die {{CSP("script-src")}}-Direktive erfüllen.
- Das {{CSP("object-src")}}-Schlüsselwort kann erforderlich sein, siehe [object-src-Direktive](#object-src-direktive) für Details.
- Direktiven, die sich auf Code beziehen – {{CSP("script-src")}}, {{CSP("script-src-elem")}}, {{CSP("worker-src")}} und {{CSP("default-src")}} (wenn als Fallback verwendet) – teilen dieselbe Anforderung an sichere Quellen. Es gibt keine Einschränkungen für CSP-Direktiven, die sich auf Nicht-Skript-Inhalte beziehen, wie {{CSP("img-src")}}.

In Manifest V3 sind alle CSP-Quellen, die sich auf externe oder nicht-statische Inhalte beziehen, verboten. Die einzigen zugelassenen Werte sind `'none'`, `'self'`, und `'wasm-unsafe-eval'`.
In Manifest V2 wird eine Quelle für eine Skript-Direktive als sicher angesehen, wenn sie diese Kriterien erfüllt:

- Platzhalter-Hosts sind nicht zulässig, wie `"script-src 'self' *"`.
- Remote-Quellen müssen `https:`-Schemata verwenden.
- Remote-Quellen dürfen keine Platzhalter für Domains in der [öffentlichen Suffixliste](https://publicsuffix.org/list/) verwenden (also `*.co.uk` und `*.blogspot.com` sind nicht erlaubt, obwohl `*.foo.blogspot.com` erlaubt ist).
- Alle Quellen müssen einen Host angeben.
- Die einzigen zugelassenen Schemata für Quellen sind `blob:`, `filesystem:`, `moz-extension:`, `https:`, und `wss:`.
- Die einzigen zugelassenen [Schlüsselwörter](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax) sind: `'none'`, `'self'`, `'unsafe-eval'`, und `'wasm-unsafe-eval'`.

## object-src-Direktive

Die `{{CSP("object-src")}}`-Direktive kann in einigen Browsern, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen, erforderlich sein und sollte bei Bedarf auf eine sichere Quelle wie `'none'` gesetzt werden. Dies kann für Browser bis einschließlich 2022 notwendig sein.

- In Firefox ist `"object-src"` ab Firefox 106 optional. In früheren Versionen wird, wenn `"object-src"` nicht spezifiziert ist, `"content_security_policy"` ignoriert und die Standard-CSP verwendet.
- In Chrome ist `"object-src"` erforderlich. Wenn es fehlt oder als unsicher angesehen wird, wird die Standard- (`"object-src 'self'"`) verwendet und eine Warnmeldung protokolliert.
- In Safari gibt es keine Anforderung für `"object-src"`.

Siehe W3C WebExtensions Community Group [issue 204](https://github.com/w3c/webextensions/issues/204), Remove object-src from the CSP, für weitere Informationen.

## Manifest V2-Syntax

In Manifest V2 wird eine Content-Security-Policy gegen den Schlüssel wie folgt spezifiziert:

```json
"content_security_policy": "default-src 'self'"
```

## Manifest V3-Syntax

In Manifest V3 ist der `content_security_policy`-Schlüssel ein Objekt, das möglicherweise eine dieser Eigenschaften enthalten kann, die alle optional sind:

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
        Die Content-Security-Policy, die für sandboxed-Erweiterungsseiten verwendet wird.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Gültige Beispiele

> [!NOTE]
> Gültige Beispiele veranschaulichen die korrekte Verwendung von Schlüsseln in CSP.
> Allerdings sind Erweiterungen mit 'unsafe-eval', entfernten Skripten, Blob- oder Remote-Quellen in ihrer CSP gemäß den [Add-on-Richtlinien](https://extensionworkshop.com/documentation/publish/add-on-policies/) und aufgrund signifikanter Sicherheitsprobleme für Firefox-Erweiterungen nicht zulässig.

> [!NOTE]
> Einige Beispiele enthalten die `{{CSP("object-src")}}`-Direktive, die Rückwärtskompatibilität für ältere Browserversionen bietet. Weitere Details finden Sie unter [object-src-Direktive](#object-src-direktive).

Erfordern, dass alle Arten von Inhalten mit der Erweiterung verpackt werden:

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

Erlauben von Remote-Skripten von "https://example.com":

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://example.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine Remote-URLs in `script-src` von `extension_pages`.

Erlauben von Remote-Skripten von jeder Subdomain von "jquery.com":

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://*.jquery.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine Remote-URLs in `script-src` von `extension_pages`.

Erlauben von [`eval()` und Freunden](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval%28%29_and_friends):

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

Behalten des Rests der Richtlinie, aber zusätzlich erfordern, dass Bilder mit der Erweiterung verpackt werden:

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

Ermöglichen der Nutzung von [WebAssembly](/de/docs/WebAssembly):

- Manifest V2

  Aus Kompatibilitätsgründen können Manifest V2-Erweiterungen in Firefox WebAssembly ohne die Verwendung von `'wasm-unsafe-eval'` verwenden. Dieses Verhalten ist jedoch nicht garantiert. Siehe [Firefox Bug 1770909](https://bugzil.la/1770909). Erweiterungen, die WebAssembly verwenden, sollten daher `'wasm-unsafe-eval'` in ihrer CSP deklarieren. Weitere Informationen finden Sie auf der Content Security Policy-Seite unter [WebAssembly](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#webassembly).

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

Richtlinie, die das `"self"`-Schlüsselwort in der `"script-src"`-Direktive weglässt:

```json example-bad
"content_security_policy": "script-src https://*.jquery.com; object-src 'self'"
```

Schema für eine Remote-Quelle ist nicht `https`:

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
