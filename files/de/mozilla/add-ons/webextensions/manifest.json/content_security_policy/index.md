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

Erweiterungen haben standardmäßig eine Content-Security-Policy (CSP). Die Standardrichtlinie schränkt die Quellen ein, von denen Erweiterungen Code laden können (z. B. [\<script>](/de/docs/Web/HTML/Element/script)-Ressourcen) und verbietet potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Weitere Informationen zu den Implikationen finden Sie unter [Standard-Content-Security-Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy).

Sie können den Manifest-Schlüssel `"content_security_policy"` verwenden, um die Standardrichtlinie zu lockern oder zu verschärfen. Dieser Schlüssel wird in derselben Weise wie der HTTP-Header Content-Security-Policy angegeben. Weitere Informationen zur CSP-Syntax finden Sie unter [Verwendung von Content Security Policy](/de/docs/Web/HTTP/CSP).

Zum Beispiel können Sie diesen Schlüssel verwenden, um:

- Erlaubte Quellen für andere Arten von Inhalten, wie Bilder und Stylesheets, mit der entsprechenden [Policy-Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy) einzuschränken.
- Der Erweiterung die Nutzung von [WebAssembly](/de/docs/WebAssembly) zu ermöglichen, indem die Quelle `'wasm-unsafe-eval'` in die `script-src`-Direktive aufgenommen wird.
- Die Standardrichtlinien {{CSP("script-src")}} (nur Manifest V2) zu lockern:
  - Der Erweiterung zu erlauben, Skripte außerhalb ihres Pakets zu laden, indem deren URL in der {{CSP("script-src")}}-Direktive bereitgestellt wird.
  - Der Erweiterung zu erlauben, Inline-Skripte zu verwenden, indem der [Hash des Skripts in der `script-src`-Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script) bereitgestellt wird.
  - Die Verwendung von `eval()` und ähnlichen Funktionen zu erlauben, indem `'unsafe-eval'` in die {{CSP("script-src")}}-Direktive aufgenommen wird.

Es gibt Einschränkungen bezüglich der Richtlinie, die Sie mit diesem Manifest-Schlüssel angeben können:

- Die {{CSP("script-src")}}-Direktive muss mindestens das Schlüsselwort `'self'` enthalten und darf nur sichere Quellen enthalten. Die Menge der zulässigen sicheren Quellen unterscheidet sich zwischen Manifest V2 und Manifest V3.
- Die Richtlinie kann allein {{CSP("default-src")}} beinhalten (ohne {{CSP("script-src")}}), wenn ihre Quellen die Anforderungen an die {{CSP("script-src")}}-Direktive erfüllen.
- Das {{CSP("object-src")}}-Schlüsselwort kann erforderlich sein, siehe [object-src-Direktive](#object-src-direktive) für Details.
- Direktiven, die sich auf Code beziehen – {{CSP("script-src")}}, {{CSP("script-src-elem")}}, {{CSP("worker-src")}} und {{CSP("default-src")}} (falls als Fallback verwendet) – teilen dieselben Anforderungen an sichere Quellen. Es gibt keine Einschränkungen für CSP-Direktiven, die nicht auf Skriptinhalt abdecken, wie {{CSP("img-src")}}.

In Manifest V3 sind alle CSP-Quellen, die sich auf externe oder nicht statische Inhalte beziehen, verboten. Die einzigen zulässigen Werte sind `'none'`, `'self'`, und `'wasm-unsafe-eval'`.
In Manifest V2 gilt eine Quelle für eine Skript-Direktive als sicher, wenn diese Kriterien erfüllt sind:

- Platzhalter-Hosts sind nicht erlaubt, wie `"script-src 'self' *"`.
- Externe Quellen müssen `https:`-Schemata verwenden.
- Externe Quellen dürfen keine Platzhalter für Domains in der [öffentlichen Suffix-Liste](https://publicsuffix.org/list/) verwenden (daher sind `*.co.uk` und `*.blogspot.com` nicht erlaubt, obwohl `*.foo.blogspot.com` erlaubt ist).
- Alle Quellen müssen einen Host angeben.
- Die einzigen zulässigen Schemata für Quellen sind `blob:`, `filesystem:`, `moz-extension:`, `https:`, und `wss:`.
- Die einzigen zulässigen [Schlüsselwörter](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) sind: `'none'`, `'self'`, `'unsafe-eval'`, und `'wasm-unsafe-eval'`.

## object-src-Direktive

Die `{{CSP("object-src")}}`-Direktive kann in einigen Browsern erforderlich sein, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen und sollte bei Bedarf auf eine sichere Quelle wie `'none'` gesetzt werden. Dies kann für Browser bis 2022 notwendig sein.

- In Firefox ist `"object-src"` optional ab Firefox 106. In früheren Versionen, wenn `"object-src"` nicht angegeben ist, wird `"content_security_policy"` ignoriert und die Standard-CSP verwendet.
- In Chrome ist `"object-src"` erforderlich. Wenn es fehlt oder als unsicher angesehen wird, wird die Standardeinstellung (`"object-src 'self'"`) verwendet und eine Warnmeldung protokolliert.
- In Safari besteht keine Anforderung für `"object-src"`.

Weitere Informationen finden Sie im W3C WebExtensions Community Group [Issue 204](https://github.com/w3c/webextensions/issues/204), Remove object-src from the CSP.

## Manifest V2-Syntax

In Manifest V2 ist eine Content-Security-Policy gegen den Schlüssel wie folgt angegeben:

```json
"content_security_policy": "default-src 'self'"
```

## Manifest V3-Syntax

In Manifest V3 ist der `"content_security_policy"`-Schlüssel ein Objekt, das jede dieser Eigenschaften haben kann, alle optional:

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
        Die Content-Security-Policy, die für Sandbox-Erweiterungsseiten verwendet wird.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Gültige Beispiele

> [!NOTE]
> Gültige Beispiele zeigen die korrekte Verwendung von Schlüsseln in CSP.
> Allerdings sind Erweiterungen mit 'unsafe-eval', externen Skripten, Blob- oder externen Quellen in ihrer CSP gemäß den [Add-on-Richtlinien](https://extensionworkshop.com/documentation/publish/add-on-policies/) und aufgrund erheblicher Sicherheitsprobleme für Firefox-Erweiterungen nicht zulässig.

> [!NOTE]
> Einige Beispiele beinhalten die `{{CSP("object-src")}}`-Direktive, die Abwärtskompatibilität für ältere Browserversionen bietet. Siehe [object-src-Direktive](#object-src-direktive) für weitere Details.

Erfordern Sie, dass alle Arten von Inhalten mit der Erweiterung verpackt werden:

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

Erlauben Sie Remote-Skripte von "https://example.com":

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://example.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine Remote-URLs in `script-src` von `extension_pages`.

Erlauben Sie Remote-Skripte von jeder Subdomain von "jquery.com":

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://*.jquery.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine Remote-URLs in `script-src` von `extension_pages`.

Erlauben Sie [`eval()` und Freunden](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval%28%29_and_friends):

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

Behalten Sie den Rest der Richtlinie bei, erfordern Sie jedoch, dass Bilder mit der Erweiterung verpackt werden:

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

  Aus Gründen der Abwärtskompatibilität können Manifest V2-Erweiterungen in Firefox WebAssembly ohne die Verwendung von `'wasm-unsafe-eval'` verwenden. Dieses Verhalten ist jedoch nicht garantiert. Siehe [Firefox-Bug 1770909](https://bugzil.la/1770909). Erweiterungen, die WebAssembly verwenden, werden daher ermutigt, `'wasm-unsafe-eval'` in ihrer CSP zu deklarieren. Weitere Informationen finden Sie auf der Seite zur Content-Security-Policy unter [WebAssembly](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#webassembly).

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

Dies ist jedoch nur in Browsern ungültig, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen. Siehe [object-src-Direktive](#object-src-direktive) für weitere Details.

Richtlinie, die das `"self"`-Schlüsselwort in der `"script-src"`-Direktive auslässt:

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

Quelle gibt ein Schema an, jedoch keinen Host:

```json example-bad
"content_security_policy": "script-src 'self' https:; object-src 'self'"
```

Direktive enthält das nicht unterstützte Schlüsselwort `'unsafe-inline'`:

```json example-bad
"content_security_policy": "script-src 'self' 'unsafe-inline'; object-src 'self'"
```

## Browser-Kompatibilität

{{Compat}}
