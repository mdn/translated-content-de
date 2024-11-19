---
title: content_security_policy
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy
l10n:
  sourceCommit: 6368e2b112a343fa00ae1a8cf51ceb0b0b845834
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

Erweiterungen haben standardmäßig eine Content Security Policy (CSP), die auf sie angewendet wird. Die Standardrichtlinie beschränkt die Quellen, von denen Erweiterungen Code laden können (wie z.B. [\<script>](/de/docs/Web/HTML/Element/script)-Ressourcen), und verbietet potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Siehe [Standard-Content-Security-Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy), um mehr über die Auswirkungen zu erfahren.

Sie können den Manifest-Schlüssel `"content_security_policy"` verwenden, um die Standardrichtlinie zu lockern oder zu verschärfen. Dieser Schlüssel wird auf die gleiche Weise wie der Content-Security-Policy-HTTP-Header angegeben. Siehe [Verwendung der Content-Security-Policy](/de/docs/Web/HTTP/CSP) für eine allgemeine Beschreibung der CSP-Syntax.

Zum Beispiel können Sie diesen Schlüssel verwenden, um:

- Zugelassene Quellen für andere Arten von Inhalten, wie Bilder und Stylesheets, mit Hilfe der entsprechenden [Policy-Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy) einschränken.
- Ermöglichen, dass die Erweiterung [WebAssembly](/de/docs/WebAssembly) nutzt, indem die Quelle `'wasm-unsafe-eval'` in die `script-src`-Direktive aufgenommen wird.
- Die Standard-{{CSP("script-src")}}-Richtlinien zu lockern (nur Manifest V2):
  - Ermöglichen, dass die Erweiterung Skripte außerhalb ihres Pakets lädt, indem deren URL in der {{CSP("script-src")}}-Direktive angegeben wird.
  - Ermöglichen, dass die Erweiterung Inline-Skripte ausführt, indem der Hash des Skripts in der `script-src`-Direktive angegeben wird.
  - Ermöglichen, dass die Erweiterung `eval()` und ähnliche Funktionen verwendet, indem `'unsafe-eval'` in die {{CSP("script-src")}}-Direktive aufgenommen wird.

Es gibt Einschränkungen für die Richtlinie, die Sie mit diesem Manifest-Schlüssel festlegen können:

- Die {{CSP("script-src")}}-Direktive muss mindestens das `'self'`-Schlüsselwort enthalten und darf nur sichere Quellen enthalten. Die Menge der zugelassenen sicheren Quellen unterscheidet sich zwischen Manifest V2 und Manifest V3.
- Die Richtlinie kann {{CSP("default-src")}} allein enthalten (ohne {{CSP("script-src")}}), wenn deren Quellen die Anforderungen für die {{CSP("script-src")}}-Direktive erfüllen.
- Das {{CSP("object-src")}}-Schlüsselwort kann erforderlich sein, siehe [object-src-Direktive](#object-src-direktive) für Details.
- Direktiven, die sich auf Code beziehen – {{CSP("script-src")}}, {{CSP("script-src-elem")}}, {{CSP("worker-src")}}, und {{CSP("default-src")}} (wenn als Fallback verwendet) – teilen die gleichen Anforderungen an sichere Quellen. Es gibt keine Einschränkungen für CSP-Direktiven, die nicht-skriptbasierte Inhalte abdecken, wie {{CSP("img-src")}}.

In Manifest V3 sind alle CSP-Quellen, die sich auf externe oder nicht-statische Inhalte beziehen, verboten. Die einzigen erlaubten Werte sind `'none'`, `'self'`, und `'wasm-unsafe-eval'`.
In Manifest V2 wird eine Quelle für eine Skriptdirektive als sicher angesehen, wenn sie diese Kriterien erfüllt:

- Platzhalter-Hosts sind nicht erlaubt, wie `"script-src 'self' *"`.
- Entfernte Quellen müssen `https:`-Schemata verwenden.
- Entfernte Quellen dürfen keine Platzhalter für Domains in der [öffentlichen Suffixliste](https://publicsuffix.org/list/) verwenden (also `*.co.uk` und `*.blogspot.com` sind nicht erlaubt, obwohl `*.foo.blogspot.com` erlaubt ist).
- Alle Quellen müssen einen Host angeben.
- Die einzigen erlaubten Schemata für Quellen sind `blob:`, `filesystem:`, `moz-extension:`, `https:`, und `wss:`.
- Die einzigen erlaubten [Schlüsselwörter](/de/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directive_syntax) sind: `'none'`, `'self'`, `'unsafe-eval'`, und `'wasm-unsafe-eval'`.

## object-src-Direktive

Die `{{CSP("object-src")}}`-Direktive kann in einigen Browsern erforderlich sein, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen und sollte, falls erforderlich, auf eine sichere Quelle wie `'none'` gesetzt werden. Dies kann für Browser bis 2022 notwendig sein.

- In Firefox ist `"object-src"` ab Firefox 106 optional. In früheren Versionen wird, wenn `"object-src"` nicht angegeben ist, `"content_security_policy"` ignoriert und die Standard-CSP verwendet.
- In Chrome ist `"object-src"` erforderlich. Wenn es fehlt oder als unsicher angesehen wird, wird die Standardeinstellung (`"object-src 'self'"`) verwendet und es wird eine Warnmeldung protokolliert.
- In Safari gibt es keine Anforderung für `"object-src"`.

Siehe W3C WebExtensions Community Group [Thema 204](https://github.com/w3c/webextensions/issues/204), Remove object-src from the CSP, für mehr Informationen.

## Manifest V2-Syntax

In Manifest V2 gibt es eine Content-Security-Policy, die dem Schlüssel folgendermaßen zugeordnet ist:

```json
"content_security_policy": "default-src 'self'"
```

## Manifest V3-Syntax

In Manifest V3 ist der Schlüssel `content_security_policy` ein Objekt, das jede dieser Eigenschaften haben kann, die alle optional sind:

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
        Die Content-Security-Policy, die für sandboxed Erweiterungsseiten verwendet wird.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Gültige Beispiele

> [!NOTE]
> Gültige Beispiele demonstrieren die korrekte Verwendung von Schlüsseln in CSP.
> Allerdings sind Erweiterungen mit 'unsafe-eval', Remote-Skripten, Blob- oder Remote-Quellen in ihrer CSP nicht für Firefox-Erweiterungen gemäß den [Add-on-Richtlinien](https://extensionworkshop.com/documentation/publish/add-on-policies/) erlaubt und wegen erheblicher Sicherheitsprobleme untersagt.

> [!NOTE]
> Einige Beispiele beinhalten die `{{CSP("object-src")}}`-Direktive, die eine Rückwärtskompatibilität für ältere Browserversionen bietet. Siehe [object-src-Direktive](#object-src-direktive) für mehr Details.

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

Erlaube Remote-Skripte von "https://example.com":

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://example.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine Remote-URLs in `script-src` von `extension_pages`.

Erlaube Remote-Skripte von beliebigen Subdomains von "jquery.com":

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://*.jquery.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine Remote-URLs in `script-src` von `extension_pages`.

Erlaube [`eval()` und Ähnliches](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval%28%29_and_friends):

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"
  ```

- Manifest V3 erlaubt kein `'unsafe-eval'` in `script-src`.

Erlaube das Inline-Skript: `"<script>alert('Hello, world.');</script>"`:

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='; object-src 'self'"
  ```

- Manifest V3 erlaubt keine CSP-Hashes in `script-src` von `extension_pages`.

Behalte den Rest der Richtlinie, erfordere aber auch, dass Bilder mit der Erweiterung gebündelt werden sollen:

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

Aktiviere die Verwendung von [WebAssembly](/de/docs/WebAssembly):

- Manifest V2

  Aus Gründen der Rückwärtskompatibilität können Manifest V2-Erweiterungen in Firefox WebAssembly ohne die Verwendung von `'wasm-unsafe-eval'` nutzen. Dieses Verhalten ist jedoch nicht garantiert. Siehe [Firefox-Fehler 1770909](https://bugzil.la/1770909). Erweiterungen, die WebAssembly verwenden, werden daher ermutigt, `'wasm-unsafe-eval'` in ihrer CSP anzugeben. Siehe [WebAssembly](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#webassembly) auf der Seite zur Content Security Policy für weitere Informationen.

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

Dies ist jedoch nur in Browsern ungültig, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen. Siehe [object-src-Direktive](#object-src-direktive) für mehr Details.

Richtlinie, die das `"self"`-Schlüsselwort in der `"script-src"`-Direktive auslässt:

```json example-bad
"content_security_policy": "script-src https://*.jquery.com; object-src 'self'"
```

Schema für eine Remote-Quelle ist nicht `https`:

```json example-bad
"content_security_policy": "script-src 'self' http://code.jquery.com; object-src 'self'"
```

Platzhalter wird mit einer generischen Domain verwendet:

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
