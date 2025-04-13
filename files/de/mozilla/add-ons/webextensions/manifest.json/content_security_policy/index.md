---
title: content_security_policy
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy
l10n:
  sourceCommit: 5c5ee35d66ac24bc6513c14f120750c74d779d20
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

Erweiterungen haben standardmäßig eine Content-Security-Policy (CSP) angewendet. Die Standardrichtlinie beschränkt die Quellen, von denen Erweiterungen Code laden können (wie zum Beispiel [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Ressourcen), und verbietet potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Weitere Informationen zu den Auswirkungen dieser Standardrichtlinie finden Sie unter [Standard-Content-Security-Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy).

Sie können den Manifest-Schlüssel `"content_security_policy"` verwenden, um die Standardrichtlinie zu lockern oder zu verschärfen. Dieser Schlüssel wird auf die gleiche Weise wie der HTTP-Header Content-Security-Policy angegeben. Eine allgemeine Beschreibung der CSP-Syntax finden Sie unter [Verwendung der Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP).

Beispielsweise können Sie diesen Schlüssel verwenden, um:

- Erlaubte Quellen für andere Arten von Inhalten wie Bilder und Stylesheets mit der entsprechenden [Richtliniendirektive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) einzuschränken.
- Der Erweiterung zu ermöglichen, von [WebAssembly](/de/docs/WebAssembly) zu profitieren, indem die Quelle `'wasm-unsafe-eval'` in der `script-src`-Direktive enthalten ist.
- Die standardmäßigen {{CSP("script-src")}}-Richtlinien zu lockern (nur Manifest V2):
  - Der Erweiterung das Laden von Skripten außerhalb ihres Pakets zu ermöglichen, indem deren URL in der {{CSP("script-src")}}-Direktive angegeben wird.
  - Der Erweiterung das Ausführen von Inline-Skripten zu ermöglichen, indem [der Hash des Skripts in der `script-src`-Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_inline_script) angegeben wird.
  - Der Erweiterung die Nutzung von `eval()` und ähnlichen Funktionen zu gestatten, indem `'unsafe-eval'` in der {{CSP("script-src")}}-Direktive eingeschlossen wird.

Es gibt Einschränkungen bei der Richtlinie, die Sie mit diesem Manifest-Schlüssel angeben können:

- Die {{CSP("script-src")}}-Direktive muss mindestens das Schlüsselwort `'self'` enthalten und darf nur sichere Quellen umfassen. Die Menge der erlaubten sicheren Quellen unterscheidet sich zwischen Manifest V2 und Manifest V3.
- Die Richtlinie darf {{CSP("default-src")}} allein enthalten (ohne {{CSP("script-src")}}), wenn ihre Quellen die Anforderungen der {{CSP("script-src")}}-Direktive erfüllen.
- Das Schlüsselwort {{CSP("object-src")}} kann erforderlich sein, siehe [object-src-Direktive](#object-src-direktive) für Einzelheiten.
- Direktiven, die sich auf Code beziehen – {{CSP("script-src")}}, {{CSP("script-src-elem")}}, {{CSP("worker-src")}} und {{CSP("default-src")}} (wenn als Fallback verwendet) – teilen sich die gleichen Anforderungen für sichere Quellen. Es gibt keine Einschränkungen bei CSP-Direktiven, die nicht auf Skriptinhalte abzielen, wie {{CSP("img-src")}}.

In Manifest V3 sind alle CSP-Quellen, die auf externe oder nicht statische Inhalte verweisen, verboten. Die einzigen erlaubten Werte sind `'none'`, `'self'` und `'wasm-unsafe-eval'`.
In Manifest V2 wird eine Quelle für eine Skript-Direktive als sicher angesehen, wenn sie diese Kriterien erfüllt:

- Platzhalter-Hosts sind nicht erlaubt, wie `"script-src 'self' *"`.
- Externe Quellen müssen `https:`-Schemata verwenden.
- Externe Quellen dürfen keine Platzhalter für beliebige Domains in der [öffentlichen Suffixliste](https://publicsuffix.org/list/) verwenden (also sind `*.co.uk` und `*.blogspot.com` nicht erlaubt, obwohl `*.foo.blogspot.com` zulässig ist).
- Alle Quellen müssen einen Host angeben.
- Die einzigen erlaubten Schemata für Quellen sind `blob:`, `filesystem:`, `moz-extension:`, `https:` und `wss:`.
- Die einzigen erlaubten [Schlüsselwörter](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax) sind: `'none'`, `'self'`, `'unsafe-eval'` und `'wasm-unsafe-eval'`.

## object-src-Direktive

Die `{{CSP("object-src")}}`-Direktive kann in einigen Browsern erforderlich sein, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen, und sollte, falls erforderlich, auf eine sichere Quelle wie `'none'` gesetzt werden. Dies kann bis 2022 für Browser erforderlich sein.

- In Firefox ist `"object-src"` ab Firefox 106 optional. In früheren Versionen wird, falls `"object-src"` nicht angegeben ist, `"content_security_policy"` ignoriert und die Standard-CSP verwendet.
- In Chrome ist `"object-src"` erforderlich. Fehlt es oder ist es als unsicher eingestuft, wird die Standard-CSP (`"object-src 'self'"`) verwendet und eine Warnmeldung protokolliert.
- In Safari gibt es keine Anforderung für `"object-src"`.

Weitere Informationen finden Sie im W3C WebExtensions Community Group [Problem 204](https://github.com/w3c/webextensions/issues/204), Entfernen von object-src aus der CSP.

## Manifest V2-Syntax

In Manifest V2 gibt es eine Content-Security-Policy, die mit dem Schlüssel wie folgt angegeben wird:

```json
"content_security_policy": "default-src 'self'"
```

## Manifest V3-Syntax

In Manifest V3 ist der `content_security_policy`-Schlüssel ein Objekt, das jede dieser Eigenschaften haben kann, alle optional:

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
> Gültige Beispiele zeigen die korrekte Verwendung von Schlüsseln in CSPs.
> Erweiterungen, die 'unsafe-eval', Remote-Skripte, Blobs oder entfernte Quellen in ihrer CSP verwenden, sind jedoch aufgrund signifikanter Sicherheitsprobleme und gemäß den [Add-on-Richtlinien](https://extensionworkshop.com/documentation/publish/add-on-policies/) nicht für Firefox-Erweiterungen zulässig.

> [!NOTE]
> Einige Beispiele beinhalten die `{{CSP("object-src")}}`-Direktive, die Abwärtskompatibilität für ältere Browserversionen bietet. Weitere Einzelheiten finden Sie unter [object-src-Direktive](#object-src-direktive).

Erfordern, dass alle Arten von Inhalten mit der Erweiterung gepackt werden:

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

Remote-Skripte von "https://example.com" erlauben:

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://example.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine externen URLs in `script-src` von `extension_pages`.

Remote-Skripte von jeder Subdomain von "jquery.com" erlauben:

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://*.jquery.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine externen URLs in `script-src` von `extension_pages`.

[`eval()` und ähnliches](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval_and_friends) erlauben:

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"
  ```

- Manifest V3 erlaubt `'unsafe-eval'` nicht in `script-src`.

Das Inline-Skript `"<script>alert('Hello, world.');</script>"` erlauben:

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='; object-src 'self'"
  ```

- Manifest V3 erlaubt keine CSP-Hashes in `script-src` von `extension_pages`.

Den Rest der Richtlinie beibehalten, aber zusätzlich verlangen, dass Bilder mit der Erweiterung gepackt werden:

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

Die Verwendung von [WebAssembly](/de/docs/WebAssembly) ermöglichen:

- Manifest V2

  Für die Abwärtskompatibilität können Manifest-V2-Erweiterungen in Firefox WebAssembly ohne die Verwendung von `'wasm-unsafe-eval'` nutzen. Dieses Verhalten ist jedoch nicht garantiert. Siehe [Firefox-Bug 1770909](https://bugzil.la/1770909). Erweiterungen, die WebAssembly verwenden, werden daher ermutigt, in ihrer CSP `'wasm-unsafe-eval'` zu deklarieren. Weitere Informationen finden Sie auf der Content-Security-Policy-Seite unter [WebAssembly](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#webassembly).

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

Dies ist jedoch nur in Browsern ungültig, die veraltete {{Glossary("Plugin", "Plugins")}} unterstützen. Weitere Einzelheiten finden Sie unter [object-src-Direktive](#object-src-direktive).

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

Die Quelle spezifiziert ein Schema, aber keinen Host:

```json example-bad
"content_security_policy": "script-src 'self' https:; object-src 'self'"
```

Die Direktive enthält das nicht unterstützte Schlüsselwort `'unsafe-inline'`:

```json example-bad
"content_security_policy": "script-src 'self' 'unsafe-inline'; object-src 'self'"
```

## Browser-Kompatibilität

{{Compat}}
