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

Erweiterungen haben standardmäßig eine Content Security Policy (CSP), die auf sie angewendet wird. Die Standardrichtlinie schränkt die Quellen ein, von denen Erweiterungen Code laden können (z. B. [\<script>](/de/docs/Web/HTML/Element/script)-Ressourcen), und verbietet potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Siehe [Standard-Content-Security-Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy), um mehr über die Auswirkungen zu erfahren.

Sie können den `"content_security_policy"`-Manifest-Schlüssel verwenden, um die Standardrichtlinie zu lockern oder zu straffen. Dieser Schlüssel wird auf dieselbe Weise angegeben wie der Content-Security-Policy-HTTP-Header. Siehe [Verwendung von Content Security Policy](/de/docs/Web/HTTP/CSP) für eine allgemeine Beschreibung der CSP-Syntax.

Zum Beispiel können Sie diesen Schlüssel verwenden, um:

- Erlaubte Quellen für andere Arten von Inhalten wie Bilder und Stylesheets mithilfe der entsprechenden [Richtliniendirektive](/de/docs/Web/HTTP/Headers/Content-Security-Policy) einzuschränken.
- Der Erweiterung die Nutzung von [WebAssembly](/de/docs/WebAssembly) zu ermöglichen, indem Sie die Quelle `'wasm-unsafe-eval'` in die `script-src`-Direktive einschließen.
- Die Standard-{{CSP("script-src")}}-Richtlinien zu lockern (nur Manifest V2):
  - Der Erweiterung erlauben, Skripte außerhalb ihres Pakets zu laden, indem Sie deren URL in der {{CSP("script-src")}}-Direktive angeben.
  - Der Erweiterung erlauben, Inline-Skripte auszuführen, indem [der Hash des Skripts in der `script-src`-Direktive angegeben](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script) wird.
  - Der Erweiterung erlauben, `eval()` und ähnliche Features zu verwenden, indem `'unsafe-eval'` in die {{CSP("script-src")}}-Direktive eingeschlossen wird.

Es gibt Einschränkungen für die Richtlinie, die Sie mit diesem Manifest-Schlüssel angeben können:

- Die {{CSP("script-src")}}-Direktive muss mindestens das `'self'`-Schlüsselwort enthalten und darf nur sichere Quellen enthalten. Die Menge der erlaubten sicheren Quellen unterscheidet sich zwischen Manifest V2 und Manifest V3.
- Die Richtlinie kann {{CSP("default-src")}} allein enthalten (ohne {{CSP("script-src")}}), wenn ihre Quellen die Anforderungen für die {{CSP("script-src")}}-Direktive erfüllen.
- Das {{CSP("object-src")}}-Schlüsselwort kann erforderlich sein, siehe [object-src-Direktive](#object-src-direktive) für Details.
- Direktiven, die sich auf Code beziehen – {{CSP("script-src")}}, {{CSP("script-src-elem")}}, {{CSP("worker-src")}} und {{CSP("default-src")}} (wenn als Fallback verwendet) – teilen die gleichen Anforderungen an sichere Quellen. Es gibt keine Einschränkungen für CSP-Direktiven, die sich auf nicht-skriptbezogene Inhalte beziehen, wie z. B. {{CSP("img-src")}}.

In Manifest V3 sind alle CSP-Quellen, die sich auf externe oder nicht-statische Inhalte beziehen, verboten. Die einzigen erlaubten Werte sind `'none'`, `'self'` und `'wasm-unsafe-eval'`.
In Manifest V2 wird eine Quelle für eine Skriptdirektive als sicher betrachtet, wenn sie diese Kriterien erfüllt:

- Platzhalter-Hosts sind nicht erlaubt, z. B. `"script-src 'self' *"`.
- Externe Quellen müssen `https:`-Schemata verwenden.
- Externe Quellen dürfen keine Platzhalter für Domänen in der [public suffix list](https://publicsuffix.org/list/) verwenden (also `*.co.uk` und `*.blogspot.com` sind nicht erlaubt, obwohl `*.foo.blogspot.com` erlaubt ist).
- Alle Quellen müssen einen Host angeben.
- Die einzig erlaubten Schemata für Quellen sind `blob:`, `filesystem:`, `moz-extension:`, `https:` und `wss:`.
- Die einzig erlaubten [Schlüsselwörter](/de/docs/Web/HTTP/Headers/Content-Security-Policy/default-src#sources) sind: `'none'`, `'self'`, `'unsafe-eval'` und `'wasm-unsafe-eval'`.

## object-src-Direktive

Die `{{CSP("object-src")}}`-Direktive kann in einigen Browsern erforderlich sein, die veraltete [Plugins](/de/docs/Glossary/Plugin) unterstützen, und sollte, falls erforderlich, auf eine sichere Quelle wie `'none'` gesetzt werden. Dies könnte für Browser bis 2022 notwendig sein.

- In Firefox ist `"object-src"` ab Firefox 106 optional. In früheren Versionen, wenn `"object-src"` nicht angegeben ist, wird `"content_security_policy"` ignoriert und die Standard-CSP verwendet.
- In Chrome ist `"object-src"` erforderlich. Wenn es fehlt oder als unsicher angesehen wird, wird die Standardrichtlinie (`"object-src 'self'"`) verwendet und eine Warnmeldung protokolliert.
- In Safari gibt es keine Anforderung an `"object-src"`.

Siehe W3C WebExtensions Community Group [Issue 204](https://github.com/w3c/webextensions/issues/204), Entfernen von object-src aus der CSP, für weitere Informationen.

## Manifest V2-Syntax

In Manifest V2 gibt es eine Content-Security-Policy, die gegen den Schlüssel wie folgt angegeben wird:

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
        Die Content Security Policy, die für Erweiterungsseiten verwendet wird. Die <code>script-src</code> und <code>worker-src</code>-Direktiven können nur diese Werte haben:
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
> Erweiterungen mit 'unsafe-eval', entfernten Skripten, Blob- oder entfernten Quellen in ihrer CSP sind jedoch nicht für Firefox-Erweiterungen gemäß den [Add-on-Richtlinien](https://extensionworkshop.com/documentation/publish/add-on-policies/) erlaubt und aufgrund erheblicher Sicherheitsprobleme.

> [!NOTE]
> Einige Beispiele beinhalten die `{{CSP("object-src")}}`-Direktive, die Rückwärtskompatibilität für ältere Browserversionen bietet. Siehe [object-src-Direktive](#object-src-direktive) für weitere Details.

Erfordern, dass alle Arten von Inhalten mit der Erweiterung gepackt werden sollen:

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

Erlaube entfernte Skripte von "https://example.com":

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://example.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine entfernten URLs in `script-src` von `extension_pages`.

Erlaube entfernte Skripte von jedem Subdomain von "jquery.com":

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://*.jquery.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine entfernten URLs in `script-src` von `extension_pages`.

Erlaube [`eval()` und Freunde](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval%28%29_and_friends):

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"
  ```

- Manifest V3 erlaubt `'unsafe-eval'` in `script-src` nicht.

Erlaube das Inline-Skript: `"<script>alert('Hello, world.');</script>"`:

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='; object-src 'self'"
  ```

- Manifest V3 erlaubt keine CSP-Hashes in `script-src` von `extension_pages`.

Behalte den Rest der Richtlinie, erfordere jedoch auch, dass Bilder mit der Erweiterung gepackt werden sollen:

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

  Für die Rückwärtskompatibilität können Manifest V2-Erweiterungen in Firefox WebAssembly ohne die Verwendung von `'wasm-unsafe-eval'` verwenden. Dieses Verhalten ist jedoch nicht garantiert. Siehe [Firefox-Fehler 1770909](https://bugzil.la/1770909). Erweiterungen, die WebAssembly verwenden, werden ermutigt, `'wasm-unsafe-eval'` in ihrer CSP zu deklarieren. Siehe [WebAssembly](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#webassembly) auf der Seite Content Security Policy für weitere Informationen.

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

Dies ist jedoch nur in Browsern ungültig, die veraltete [Plugins](/de/docs/Glossary/Plugin) unterstützen. Siehe [object-src-Direktive](#object-src-direktive) für weitere Details.

Richtlinie, die das `"self"`-Schlüsselwort in der `"script-src"`-Direktive auslässt:

```json example-bad
"content_security_policy": "script-src https://*.jquery.com; object-src 'self'"
```

Schema für eine externe Quelle ist nicht `https`:

```json example-bad
"content_security_policy": "script-src 'self' http://code.jquery.com; object-src 'self'"
```

Platzhalter wird mit einer generischen Domain verwendet:

```json example-bad
"content_security_policy": "script-src 'self' https://*.blogspot.com; object-src 'self'"
```

Quelle gibt ein Schema, aber keinen Host an:

```json example-bad
"content_security_policy": "script-src 'self' https:; object-src 'self'"
```

Direktive beinhaltet das nicht unterstützte Schlüsselwort `'unsafe-inline'`:

```json example-bad
"content_security_policy": "script-src 'self' 'unsafe-inline'; object-src 'self'"
```

## Browser-Kompatibilität

{{Compat}}
