---
title: content_security_policy
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy
l10n:
  sourceCommit: d586b8665a8787e09eb71711b2b0dbe736360c4d
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

Erweiterungen haben standardmäßig eine Content Security Policy (CSP), die auf sie angewendet wird. Die Standardrichtlinie schränkt die Quellen ein, von denen Erweiterungen Code laden können (z. B. [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Ressourcen), und verbietet potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Weitere Informationen über die Auswirkungen finden Sie unter [Standard-Content-Security-Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy).

Sie können den Manifest-Schlüssel `"content_security_policy"` verwenden, um die Standardrichtlinie zu lockern oder zu verschärfen. Dieser Schlüssel wird auf die gleiche Weise spezifiziert wie der Content-Security-Policy HTTP-Header. Eine allgemeine Beschreibung der CSP-Syntax finden Sie unter [Verwendung von Content Security Policy](/de/docs/Web/HTTP/Guides/CSP).

Sie können beispielsweise diesen Schlüssel verwenden, um:

- Zulässige Quellen für andere Arten von Inhalten wie Bilder und Stylesheets mit der entsprechenden [Richtliniendirektive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) zu beschränken.
- Der Erweiterung die Nutzung von [WebAssembly](/de/docs/WebAssembly) zu ermöglichen, indem die Quelle `'wasm-unsafe-eval'` in die `script-src`-Direktive aufgenommen wird.
- Die standardmäßigen {{CSP("script-src")}}-Richtlinien zu lockern (nur Manifest V2):
  - Der Erweiterung erlauben, Skripte von außerhalb ihres Pakets zu laden, indem Sie deren URL in der {{CSP("script-src")}}-Direktive angeben.
  - Der Erweiterung erlauben, Inline-Skripte auszuführen, indem [der Hash des Skripts in der `script-src`-Direktive angegeben wird](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_inline_script).
  - Der Erweiterung erlauben, `eval()` und ähnliche Funktionen zu verwenden, indem `'unsafe-eval'` in der {{CSP("script-src")}}-Direktive aufgenommen wird.

Es gibt Einschränkungen für die Richtlinie, die Sie mit diesem Manifest-Schlüssel angeben können:

- Die {{CSP("script-src")}}-Direktive muss mindestens das Schlüsselwort `'self'` enthalten und darf nur sichere Quellen umfassen. Der Satz der zulässigen sicheren Quellen unterscheidet sich zwischen Manifest V2 und Manifest V3.
- Die Richtlinie darf allein {{CSP("default-src")}} (ohne {{CSP("script-src")}}) enthalten, wenn deren Quellen die Anforderungen für die {{CSP("script-src")}}-Direktive erfüllen.
- Das Schlüsselwort {{CSP("object-src")}} kann erforderlich sein. Weitere Details finden Sie in der [object-src-Direktive](#object-src-direktive).
- Direktiven, die sich auf Code beziehen – {{CSP("script-src")}}, {{CSP("script-src-elem")}}, {{CSP("worker-src")}} und {{CSP("default-src")}} (falls als Fallback verwendet) – teilen die gleichen Anforderungen an sichere Quellen. Es gibt keine Einschränkungen für CSP-Direktiven, die nicht auf Skriptinhalte abzielen, wie {{CSP("img-src")}}.

In Manifest V3 sind alle CSP-Quellen, die sich auf externe oder nicht statische Inhalte beziehen, verboten. Die einzigen zulässigen Werte sind `'none'`, `'self'` und `'wasm-unsafe-eval'`.
In Manifest V2 gilt eine Quelle für eine Skript-Direktive als sicher, wenn sie folgende Kriterien erfüllt:

- Platzhalter-Hosts sind nicht erlaubt, wie z. B. `"script-src 'self' *"`.
- Externe Quellen müssen `https:`-Schemata verwenden.
- Externe Quellen dürfen keine Platzhalter für Domains in der [Public Suffix List](https://publicsuffix.org/list/) verwenden (sodass `*.co.uk` und `*.blogspot.com` nicht erlaubt sind, obwohl `*.foo.blogspot.com` erlaubt ist).
- Alle Quellen müssen einen Host spezifizieren.
- Die einzigen zulässigen Schemata für Quellen sind `blob:`, `filesystem:`, `moz-extension:`, `https:` und `wss:`.
- Die einzigen zulässigen [Schlüsselwörter](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax) sind: `'none'`, `'self'`, `'unsafe-eval'` und `'wasm-unsafe-eval'`.

## object-src-Direktive

Die `{{CSP("object-src")}}`-Direktive kann in einigen Browsern erforderlich sein, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen, und sollte bei Bedarf auf eine sichere Quelle wie `'none'` gesetzt werden. Dies kann für Browser bis 2022 erforderlich sein.

- In Firefox ist `"object-src"` ab Firefox 106 optional. In früheren Versionen wird, wenn `"object-src"` nicht angegeben ist, `"content_security_policy"` ignoriert und die Standard-CSP verwendet.
- In Chrome ist `"object-src"` erforderlich. Fehlt es oder wird es als unsicher angesehen, wird die Standardeinstellung (`"object-src 'self'"`) verwendet und eine Warnmeldung protokolliert.
- In Safari gibt es keine Anforderung für `"object-src"`.

Weitere Informationen finden Sie in der W3C WebExtensions Community Group [Issue 204](https://github.com/w3c/webextensions/issues/204), Entfernen Sie object-src aus der CSP.

## Manifest V2-Syntax

In Manifest V2 gibt es eine Content Security Policy, die gegen den Schlüssel wie folgt spezifiziert ist:

```json
"content_security_policy": "default-src 'self'"
```

## Manifest V3-Syntax

In Manifest V3 ist der `content_security_policy`-Schlüssel ein Objekt, das die folgenden Eigenschaften haben kann, alle optional:

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
        Die Content Security Policy, die für Erweiterungsseiten verwendet wird. Die <code>script-src</code>- und <code>worker-src</code>-Direktiven dürfen nur diese Werte haben:
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
> Erweiterungen mit 'unsafe-eval', Remote-Skript, Blob oder Remote-Quellen in ihrer CSP sind jedoch gemäß den [Add-on-Richtlinien](https://extensionworkshop.com/documentation/publish/add-on-policies/) und aufgrund erheblicher Sicherheitsprobleme bei Firefox-Erweiterungen nicht erlaubt.

> [!NOTE]
> Einige Beispiele enthalten die `{{CSP("object-src")}}`-Direktive, die die Abwärtskompatibilität für ältere Browserversionen bietet. Weitere Informationen finden Sie in der [object-src-Direktive](#object-src-direktive).

Erfordern Sie, dass alle Arten von Inhalten mit der Erweiterung gepackt werden:

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

Erlauben Sie Remoteskripte von "https://example.com":

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://example.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine Remote-URLs in `script-src` von `extension_pages`.

Erlauben Sie Remoteskripte von allen Subdomains von "jquery.com":

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://*.jquery.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine Remote-URLs in `script-src` von `extension_pages`.

Erlauben Sie [`eval()` und Freunde](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval_and_friends):

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"
  ```

- Manifest V3 erlaubt keine `'unsafe-eval'` in `script-src`.

Erlauben Sie das Inline-Skript: `"<script>alert('Hello, world.');<\/script>"`:

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='; object-src 'self'"
  ```

- Manifest V3 erlaubt keine CSP-Hashes in `script-src` von `extension_pages`.

Behalten Sie den Rest der Richtlinie bei, erfordern jedoch, dass Bilder mit der Erweiterung gepackt werden:

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

  Aus Gründen der Abwärtskompatibilität können Manifest V2-Erweiterungen in Firefox WebAssembly ohne Verwendung von `'wasm-unsafe-eval'` verwenden. Dieses Verhalten ist jedoch nicht garantiert. Siehe [Firefox-Fehler 1770909](https://bugzil.la/1770909). Erweiterungen, die WebAssembly verwenden, werden daher aufgefordert, `'wasm-unsafe-eval'` in ihrer CSP zu deklarieren. Weitere Informationen finden Sie auf der Seite Content Security Policy unter [WebAssembly](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#webassembly).

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

Dies ist jedoch nur in Browsern ungültig, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen. Weitere Details finden Sie in der [object-src-Direktive](#object-src-direktive).

Richtlinie, die das Schlüsselwort `"self"` in der `"script-src"`-Direktive weglässt:

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
