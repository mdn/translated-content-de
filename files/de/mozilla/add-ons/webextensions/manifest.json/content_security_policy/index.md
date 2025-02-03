---
title: content_security_policy
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy
l10n:
  sourceCommit: 30d512a2224b300bbc5fec3aaa07f4e48f87784e
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

Erweiterungen haben standardmäßig eine Content Security Policy (CSP), die auf sie angewendet wird. Die Standardrichtlinie beschränkt die Quellen, von denen Erweiterungen Code laden können (wie z.B. [`<script>`](/de/docs/Web/HTML/Element/script)-Ressourcen), und verbietet potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Weitere Informationen zu den Auswirkungen finden Sie unter [Standard-Content-Sicherheitsrichtlinie](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy).

Sie können den Manifest-Schlüssel `"content_security_policy"` verwenden, um die Standardrichtlinie zu lockern oder zu verschärfen. Dieser Schlüssel wird in gleicher Weise wie der Content-Security-Policy HTTP-Header angegeben. Siehe [Verwendung der Content Security Policy](/de/docs/Web/HTTP/CSP) für eine allgemeine Beschreibung der CSP-Syntax.

Beispielsweise können Sie diesen Schlüssel verwenden, um:

- Zulässige Quellen für andere Arten von Inhalten wie Bilder und Stylesheets mit der entsprechenden [Policy-Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy) zu beschränken.
- Der Erweiterung zu ermöglichen, [WebAssembly](/de/docs/WebAssembly) zu nutzen, indem die Quelle `'wasm-unsafe-eval'` in die `script-src`-Direktive aufgenommen wird.
- Die Standard-{{CSP("script-src")}}-Richtlinien zu lockern (nur Manifest V2):
  - Der Erweiterung zu erlauben, Skripte außerhalb ihres Pakets zu laden, indem Sie deren URL in der {{CSP("script-src")}}-Direktive angeben.
  - Der Erweiterung zu erlauben, Inline-Skripte auszuführen, indem Sie [den Hash des Skripts in der `script-src`-Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script) angeben.
  - Der Erweiterung zu erlauben, `eval()` und ähnliche Funktionen zu verwenden, indem `'unsafe-eval'` in die {{CSP("script-src")}}-Direktive eingeschlossen wird.

Es gibt Einschränkungen hinsichtlich der Richtlinie, die Sie mit diesem Manifest-Schlüssel angeben können:

- Die {{CSP("script-src")}}-Direktive muss mindestens das Schlüsselwort `'self'` enthalten und darf nur sichere Quellen umfassen. Der Satz der erlaubten sicheren Quellen unterscheidet sich zwischen Manifest V2 und Manifest V3.
- Die Richtlinie darf {{CSP("default-src")}} allein (ohne {{CSP("script-src")}}) enthalten, wenn deren Quellen die Anforderungen der {{CSP("script-src")}}-Direktive erfüllen.
- Das {{CSP("object-src")}}-Schlüsselwort kann erforderlich sein; siehe [object-src-Direktive](#object-src-direktive) für Details.
- Direktiven, die sich auf Code beziehen – {{CSP("script-src")}}, {{CSP("script-src-elem")}}, {{CSP("worker-src")}} und {{CSP("default-src")}} (wenn als Fallback verwendet) – teilen die gleichen Anforderungen an sichere Quellen. Es gibt keine Einschränkungen für CSP-Direktiven, die nicht skriptbezogene Inhalte abdecken, wie {{CSP("img-src")}}.

In Manifest V3 sind alle CSP-Quellen, die sich auf externe oder nicht statische Inhalte beziehen, verboten. Die einzigen zulässigen Werte sind `'none'`, `'self'` und `'wasm-unsafe-eval'`.
In Manifest V2 wird eine Quelle für eine Skript-Direktive als sicher angesehen, wenn sie diese Kriterien erfüllt:

- Platzhalter-Hosts sind nicht zulässig, wie `"script-src 'self' *"`.
- Entfernte Quellen müssen `https:`-Schemata verwenden.
- Entfernte Quellen dürfen keine Platzhalter für Domains in der [öffentlichen Suffixliste](https://publicsuffix.org/list/) verwenden (also sind `*.co.uk` und `*.blogspot.com` nicht erlaubt, obwohl `*.foo.blogspot.com` zulässig ist).
- Alle Quellen müssen einen Host spezifizieren.
- Die einzigen erlaubten Schemata für Quellen sind `blob:`, `filesystem:`, `moz-extension:`, `https:` und `wss:`.
- Die einzigen erlaubten [Schlüsselwörter](/de/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directive_syntax) sind: `'none'`, `'self'`, `'unsafe-eval'` und `'wasm-unsafe-eval'`.

## object-src-Direktive

Die `{{CSP("object-src")}}`-Direktive kann in einigen Browsern erforderlich sein, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen, und sollte bei Bedarf auf eine sichere Quelle wie `'none'` gesetzt werden. Dies kann bis 2022 für Browser notwendig sein.

- In Firefox ist `"object-src"` ab Firefox 106 optional. In früheren Versionen wird, wenn `"object-src"` nicht angegeben ist, `"content_security_policy"` ignoriert und die Standard-CSP verwendet.
- In Chrome ist `"object-src"` erforderlich. Wenn es fehlt oder als unsicher angesehen wird, wird der Standard (`"object-src 'self'"`) verwendet und eine Warnmeldung protokolliert.
- In Safari gibt es keine Anforderung für `"object-src"`.

Siehe W3C WebExtensions Community Group [Issue 204](https://github.com/w3c/webextensions/issues/204), um object-src aus der CSP zu entfernen, für weitere Informationen.

## Manifest V2-Syntax

In Manifest V2 gibt es eine Content Security Policy, die gegen den Schlüssel wie folgt angegeben wird:

```json
"content_security_policy": "default-src 'self'"
```

## Manifest V3-Syntax

In Manifest V3 ist der `content_security_policy`-Schlüssel ein Objekt, das beliebige dieser Eigenschaften haben kann, alle optional:

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
        Die Content Security Policy für Erweiterungsseiten. Die <code>script-src</code>- und <code>worker-src</code>-Direktiven dürfen nur diese Werte haben:
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
        Die Content Security Policy für sandboxed Erweiterungsseiten.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Gültige Beispiele

> [!NOTE]
> Gültige Beispiele demonstrieren den korrekten Gebrauch von Schlüsseln in CSP.
> Erweiterungen mit 'unsafe-eval', Remote-Skript, Blob oder externen Quellen in ihrer CSP sind jedoch gemäß den [Add-on-Richtlinien](https://extensionworkshop.com/documentation/publish/add-on-policies/) und aufgrund erheblicher Sicherheitsprobleme für Firefox-Erweiterungen nicht erlaubt.

> [!NOTE]
> Einige Beispiele beinhalten die `{{CSP("object-src")}}`-Direktive, die Rückwärtskompatibilität für ältere Browserversionen bietet. Siehe [object-src-Direktive](#object-src-direktive) für weitere Details.

Erfordern, dass alle Arten von Inhalten mit der Erweiterung verpackt sein sollten:

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

- Manifest V3 erlaubt keine externen URLs in `script-src` von `extension_pages`.

Erlaubt Remote-Skripte von jedem Subdomain von "jquery.com":

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://*.jquery.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine externen URLs in `script-src` von `extension_pages`.

Erlaube [`eval()` und Freunde](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval%28%29_and_friends):

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"
  ```

- Manifest V3 erlaubt `'unsafe-eval'` nicht in `script-src`.

Erlaubt das Inline-Skript: `"<script>alert('Hallo, Welt.');</script>"`:

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='; object-src 'self'"
  ```

- Manifest V3 erlaubt keine CSP-Hashes in `script-src` von `extension_pages`.

Halten Sie den Rest der Richtlinie bei, erfordern jedoch auch, dass Bilder mit der Erweiterung verpackt sind:

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

Aktivieren Sie die Nutzung von [WebAssembly](/de/docs/WebAssembly):

- Manifest V2

  Um die Rückwärtskompatibilität zu gewährleisten, können Manifest V2-Erweiterungen in Firefox WebAssembly ohne die Verwendung von `'wasm-unsafe-eval'` verwenden. Dieses Verhalten ist jedoch nicht garantiert. Siehe [Firefox Bug 1770909](https://bugzil.la/1770909). Erweiterungen, die WebAssembly verwenden, werden daher ermutigt, `'wasm-unsafe-eval'` in ihrer CSP zu deklarieren. Siehe [WebAssembly](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#webassembly) auf der Content Security Policy-Seite für weitere Informationen.

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

Eine Richtlinie, die die `"object-src"`-Direktive weglässt:

```json example-bad
"content_security_policy": "script-src 'self' https://*.jquery.com;"
```

Dies ist jedoch nur in Browsern ungültig, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen. Weitere Details siehe [object-src-Direktive](#object-src-direktive).

Eine Richtlinie, die das `"self"`-Schlüsselwort in der `"script-src"`-Direktive weglässt:

```json example-bad
"content_security_policy": "script-src https://*.jquery.com; object-src 'self'"
```

Das Schema für eine entfernte Quelle ist nicht `https`:

```json example-bad
"content_security_policy": "script-src 'self' http://code.jquery.com; object-src 'self'"
```

Es wird ein Platzhalter mit einer generischen Domain verwendet:

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
