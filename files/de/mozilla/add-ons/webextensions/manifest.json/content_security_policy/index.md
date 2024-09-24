---
title: content_security_policy
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest version</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
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

Erweiterungen haben standardmäßig eine Content Security Policy (CSP) angewendet. Die Standardrichtlinie schränkt die Quellen ein, von denen Erweiterungen Code laden können (wie zum Beispiel [\<script>](/de/docs/Web/HTML/Element/script)-Ressourcen) und verbietet potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Weitere Informationen zu den Auswirkungen finden Sie unter [Standard-Content-Security-Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy).

Sie können den Manifest-Schlüssel `"content_security_policy"` verwenden, um die Standardrichtlinie zu lockern oder zu verschärfen. Dieser Schlüssel wird auf die gleiche Weise wie der HTTP-Header Content-Security-Policy angegeben. Siehe [Verwendung von Content Security Policy](/de/docs/Web/HTTP/CSP) für eine allgemeine Beschreibung der CSP-Syntax.

Beispielsweise können Sie diesen Schlüssel verwenden, um:

- Zulässige Quellen für andere Arten von Inhalten wie Bilder und Stylesheets mit der entsprechenden [Richtlinienanweisung](/de/docs/Web/HTTP/Headers/Content-Security-Policy) zu beschränken.
- Der Erweiterung die Nutzung von [WebAssembly](/de/docs/WebAssembly) zu ermöglichen, indem die Quelle `'wasm-unsafe-eval'` in der `script-src`-Direktive aufgenommen wird.
- Die Standardrichtlinien für die {{CSP("script-src")}} zu lockern (nur Manifest V2):
  - Der Erweiterung zu erlauben, Skripte von außerhalb ihres Pakets zu laden, indem ihre URL in der {{CSP("script-src")}}-Direktive angegeben wird.
  - Der Erweiterung zu erlauben, Inline-Skripte auszuführen, indem [der Hash des Skripts in der `script-src`-Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script) angegeben wird.
  - Der Erweiterung zu erlauben, `eval()` und ähnliche Funktionen zu verwenden, indem `'unsafe-eval'` in der {{CSP("script-src")}}-Direktive aufgenommen wird.

Es gibt Einschränkungen für die Richtlinie, die Sie mit diesem Manifest-Schlüssel angeben können:

- Die {{CSP("script-src")}}-Direktive muss mindestens das `'self'`-Schlüsselwort enthalten und darf nur sichere Quellen enthalten. Die Menge der zulässigen sicheren Quellen unterscheidet sich zwischen Manifest V2 und Manifest V3.
- Die Richtlinie kann {{CSP("default-src")}} allein (ohne {{CSP("script-src")}}) enthalten, wenn ihre Quellen die Anforderungen der {{CSP("script-src")}}-Direktive erfüllen.
- Das {{CSP("object-src")}}-Schlüsselwort kann erforderlich sein, siehe [object-src Direktive](#object-src_direktive) für Details.
- Direktiven, die sich auf Code beziehen – {{CSP("script-src")}}, {{CSP("script-src-elem")}}, {{CSP("worker-src")}} und {{CSP("default-src")}} (wenn als Fallback verwendet) – teilen die gleiche Anforderung an sichere Quellen. Es gibt keine Einschränkungen für CSP-Direktiven, die sich auf nicht-skriptbezogene Inhalte beziehen, wie z. B. {{CSP("img-src")}}.

In Manifest V3 sind alle CSP-Quellen, die sich auf externe oder nicht-statische Inhalte beziehen, verboten. Die einzigen zulässigen Werte sind `'none'`, `'self'` und `'wasm-unsafe-eval'`.
In Manifest V2 wird eine Quelle für eine Skript-Direktive als sicher angesehen, wenn sie diese Kriterien erfüllt:

- Platzhalter-Hosts sind nicht zulässig, wie z. B. `"script-src 'self' *"`.
- Entfernte Quellen müssen `https:`-Schemas verwenden.
- Entfernte Quellen dürfen keine Platzhalter für Domains in der [öffentlichen Suffixliste](https://publicsuffix.org/list/) verwenden (daher sind `*.co.uk` und `*.blogspot.com` nicht erlaubt, obwohl `*.foo.blogspot.com` zulässig ist).
- Alle Quellen müssen einen Host angeben.
- Die einzigen zulässigen Schema für Quellen sind `blob:`, `filesystem:`, `moz-extension:`, `https:` und `wss:`.
- Die einzigen zulässigen [Schlüsselwörter](/de/docs/Web/HTTP/Headers/Content-Security-Policy/default-src#sources) sind: `'none'`, `'self'`, `'unsafe-eval'` und `'wasm-unsafe-eval'`.

## object-src Direktive

Die `{{CSP("object-src")}}`-Direktive kann in einigen Browsern erforderlich sein, die veraltete [Plugins](/de/docs/Glossary/Plugin) unterstützen, und sollte auf eine sichere Quelle wie `'none'` gesetzt werden, wenn erforderlich. Dies kann für Browser bis 2022 notwendig sein.

- In Firefox ist `"object-src"` ab Firefox 106 optional. In früheren Versionen, wenn `"object-src"` nicht angegeben ist, wird `"content_security_policy"` ignoriert und die Standard-CSP verwendet.
- In Chrome ist `"object-src"` erforderlich. Wenn es fehlt oder als unsicher angesehen wird, wird die Standardeinstellung (`"object-src 'self'"`) verwendet und eine Warnmeldung protokolliert.
- In Safari gibt es keine Anforderung für `"object-src"`.

Weitere Informationen finden Sie im W3C WebExtensions Community Group [Issue 204](https://github.com/w3c/webextensions/issues/204), Entfernen von object-src aus der CSP.

## Manifest V2 Syntax

In Manifest V2 ist eine Content Security Policy gegen den Schlüssel wie folgt spezifiziert:

```json
"content_security_policy": "default-src 'self'"
```

## Manifest V3 Syntax

In Manifest V3 ist der `content_security_policy`-Schlüssel ein Objekt, das eine beliebige dieser Eigenschaften besitzt, die alle optional sind:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
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
> Erweiterungen mit 'unsafe-eval', remote Skripten, Blob- oder Remotequellen in ihrer CSP sind jedoch gemäß den [Add-on-Richtlinien](https://extensionworkshop.com/documentation/publish/add-on-policies/) und aufgrund erheblicher Sicherheitsprobleme für Firefox-Erweiterungen nicht erlaubt.

> [!NOTE]
> Einige Beispiele enthalten die `{{CSP("object-src")}}`-Direktive, die Abwärtskompatibilität für ältere Browserversionen bietet. Weitere Details finden Sie in der [object-src Direktive](#object-src_direktive).

Verlangen, dass alle Arten von Inhalten mit der Erweiterung verpackt sein sollten:

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

- Manifest V3 erlaubt keine Remote-URLs in `script-src` von `extension_pages`.

Erlauben Sie entfernte Skripte von jeder Subdomain von "jquery.com":

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://*.jquery.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine Remote-URLs in `script-src` von `extension_pages`.

Erlauben von [`eval()` und ähnlichen Funktionen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval%28%29_and_friends):

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"
  ```

- Manifest V3 erlaubt kein `'unsafe-eval'` in `script-src`.

Erlauben Sie das Inline-Skript: `"<script>alert('Hello, world.');</script>"`:

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='; object-src 'self'"
  ```

- Manifest V3 erlaubt keine CSP-Hashes in `script-src` von `extension_pages`.

Behalten Sie den Rest der Richtlinie bei, verlangen aber auch, dass Bilder mit der Erweiterung verpackt werden sollten:

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

  Aus Gründen der Kompatibilität können Manifest V2-Erweiterungen in Firefox WebAssembly ohne die Verwendung von `'wasm-unsafe-eval'` nutzen. Dieses Verhalten ist jedoch nicht garantiert. Siehe [Firefox Fehler 1770909](https://bugzil.la/1770909). Erweiterungen, die WebAssembly verwenden, werden daher ermutigt, `'wasm-unsafe-eval'` in ihrer CSP zu deklarieren. Weitere Informationen finden Sie auf der Seite zur Content Security Policy unter [WebAssembly](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#webassembly).

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

Dies ist jedoch nur in Browsern ungültig, die veraltete [Plugins](/de/docs/Glossary/Plugin) unterstützen. Weitere Details finden Sie in der [object-src Direktive](#object-src_direktive).

Richtlinie, die das `"self"`-Schlüsselwort in der `"script-src"`-Direktive auslässt:

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

Quelle gibt ein Schema, aber keinen Host an:

```json example-bad
"content_security_policy": "script-src 'self' https:; object-src 'self'"
```

Direktive enthält das nicht unterstützte Schlüsselwort `'unsafe-inline'`:

```json example-bad
"content_security_policy": "script-src 'self' 'unsafe-inline'; object-src 'self'"
```

## Browser-Kompatibilität

{{Compat}}
