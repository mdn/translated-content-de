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
      <th scope="row">Manifestversion</th>
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

Erweiterungen haben standardmäßig eine Content Security Policy (CSP) angewendet. Die Standardrichtlinie schränkt die Quellen ein, von denen Erweiterungen Code laden können (wie z.B. [\<script>](/de/docs/Web/HTML/Element/script)-Ressourcen) und verbietet potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Weitere Informationen zu den Auswirkungen finden Sie unter [Standardmäßige Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy).

Sie können den Manifest-Schlüssel `"content_security_policy"` verwenden, um die Standardrichtlinie zu lockern oder zu verschärfen. Dieser Schlüssel wird in derselben Weise spezifiziert wie der Content-Security-Policy HTTP-Header. Eine allgemeine Beschreibung der CSP-Syntax finden Sie unter [Verwendung der Content Security Policy](/de/docs/Web/HTTP/CSP).

Zum Beispiel können Sie diesen Schlüssel verwenden, um:

- Erlaubte Quellen für andere Inhaltsarten wie Bilder und Stylesheets mithilfe der entsprechenden [Richtliniendirektive](/de/docs/Web/HTTP/Headers/Content-Security-Policy) einzuschränken.
- Der Erweiterung zu ermöglichen, [WebAssembly](/de/docs/WebAssembly) zu nutzen, indem die Quelle `'wasm-unsafe-eval'` in die `script-src`-Direktive aufgenommen wird.
- Die Standard-{{CSP("script-src")}}-Richtlinien zu lockern (nur Manifest V2):
  - Der Erweiterung zu erlauben, Skripte von außerhalb ihres Pakets zu laden, indem deren URL in der {{CSP("script-src")}}-Direktive angegeben wird.
  - Der Erweiterung zu erlauben, Inline-Skripte auszuführen, indem der [Hash des Skripts in der `script-src`-Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script) angegeben wird.
  - Der Erweiterung zu erlauben, `eval()` und ähnliche Funktionen zu verwenden, indem `'unsafe-eval'` in die {{CSP("script-src")}}-Direktive aufgenommen wird.

Es gibt Einschränkungen für die Richtlinie, die Sie mit diesem Manifest-Schlüssel angeben können:

- Die {{CSP("script-src")}}-Direktive muss mindestens das `'self'`-Schlüsselwort enthalten und darf nur sichere Quellen enthalten. Der Satz der erlaubten sicheren Quellen unterscheidet sich zwischen Manifest V2 und Manifest V3.
- Die Richtlinie darf {{CSP("default-src")}} alleine enthalten (ohne {{CSP("script-src")}}), wenn ihre Quellen die Anforderungen für die {{CSP("script-src")}}-Direktive erfüllen.
- Das {{CSP("object-src")}}-Schlüsselwort kann erforderlich sein; siehe [object-src-Direktive](#object-src-direktive) für Details.
- Direktiven, die auf Code verweisen – {{CSP("script-src")}}, {{CSP("script-src-elem")}}, {{CSP("worker-src")}} und {{CSP("default-src")}} (wenn als Fallback verwendet) – teilen denselben Anspruch auf sichere Quellen. Es gibt keine Einschränkungen für CSP-Direktiven, die nicht skriptbezogene Inhalte abdecken, wie {{CSP("img-src")}}.

In Manifest V3 sind alle CSP-Quellen, die auf externe oder nicht-statische Inhalte verweisen, verboten. Die einzigen erlaubten Werte sind `'none'`, `'self'`, und `'wasm-unsafe-eval'`.
In Manifest V2 wird eine Quelle für eine Skript-Direktive als sicher angesehen, wenn sie diese Kriterien erfüllt:

- Platzhalter-Hosts sind nicht erlaubt, wie `"script-src 'self' *"`.
- Ferne Quellen müssen `https:`-Schemata verwenden.
- Ferne Quellen dürfen keine Platzhalter für Domains in der [Public Suffix List](https://publicsuffix.org/list/) verwenden (sodass `*.co.uk` und `*.blogspot.com` nicht erlaubt sind, obwohl `*.foo.blogspot.com` erlaubt ist).
- Alle Quellen müssen einen Host angeben.
- Die einzigen erlaubten Schemata für Quellen sind `blob:`, `filesystem:`, `moz-extension:`, `https:`, und `wss:`.
- Die einzigen erlaubten [Schlüsselwörter](/de/docs/Web/HTTP/Headers/Content-Security-Policy/default-src#sources) sind: `'none'`, `'self'`, `'unsafe-eval'`, und `'wasm-unsafe-eval'`.

## object-src-Direktive

Die `{{CSP("object-src")}}`-Direktive kann in einigen Browsern erforderlich sein, die veraltete [Plugins](/de/docs/Glossary/Plugin) unterstützen, und sollte, falls nötig, auf eine sichere Quelle wie `'none'` gesetzt werden. Dies kann bis 2022 in einigen Browsern notwendig sein.

- In Firefox ist `"object-src"` ab Firefox 106 optional. In älteren Versionen wird, wenn `"object-src"` nicht angegeben ist, `"content_security_policy"` ignoriert und die Standard-CSP verwendet.
- In Chrome ist `"object-src"` erforderlich. Wenn es fehlt oder als unsicher angesehen wird, wird die Standard-CSP (`"object-src 'self'"`) verwendet und eine Warnmeldung protokolliert.
- In Safari gibt es keine Anforderung für `"object-src"`.

Für weitere Informationen siehe W3C WebExtensions Community Group [Issue 204](https://github.com/w3c/webextensions/issues/204), Entfernen von object-src aus der CSP.

## Manifest V2-Syntax

In Manifest V2 gibt es eine Content Security Policy, die gegen den Schlüssel wie folgt spezifiziert ist:

```json
"content_security_policy": "default-src 'self'"
```

## Manifest V3-Syntax

In Manifest V3 ist der `content_security_policy`-Schlüssel ein Objekt, das eine der folgenden, alle optionalen, Eigenschaften haben kann:

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
        Die für Erweiterungsseiten verwendete Content Security Policy. Die <code>script-src</code>- und <code>worker-src</code>-Direktiven dürfen nur diese Werte haben:
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
        Die für sandboxed Erweiterungsseiten verwendete Content Security Policy.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Gültige Beispiele

> [!NOTE]
> Gültige Beispiele zeigen die korrekte Verwendung von Schlüsseln in CSP.
> Allerdings sind Erweiterungen mit 'unsafe-eval', Remote-Skript, Blob oder Remote-Quellen in ihrer CSP nicht für Firefox-Erweiterungen gemäß den [Add-on-Richtlinien](https://extensionworkshop.com/documentation/publish/add-on-policies/) und aufgrund erheblicher Sicherheitsprobleme erlaubt.

> [!NOTE]
> Einige Beispiele enthalten die `{{CSP("object-src")}}`-Direktive, welche Rückwärtskompatibilität für ältere Browserversionen bietet. Weitere Details finden Sie unter [object-src-Direktive](#object-src-direktive).

Anfordern, dass alle Inhaltsarten mit der Erweiterung gepackt werden sollten:

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

Ermöglichen Sie entfernte Skripte von "https://example.com":

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://example.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine entfernten URLs in `script-src` von `extension_pages`.

Ermöglichen Sie entfernte Skripte von jeglichem Subdomain von "jquery.com":

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://*.jquery.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine entfernten URLs in `script-src` von `extension_pages`.

Erlauben Sie [`eval()` und ähnliche Funktionen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval%28%29_and_friends):

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"
  ```

- Manifest V3 erlaubt `'unsafe-eval'` nicht in `script-src`.

Erlauben Sie das Inline-Skript: `"<script>alert('Hello, world.');</script>"`:

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='; object-src 'self'"
  ```

- Manifest V3 erlaubt keine CSP-Hashes in `script-src` von `extension_pages`.

Behalten Sie den Rest der Richtlinie bei, verlangen aber zusätzlich, dass Bilder mit der Erweiterung gepackt werden sollen:

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

  Für die Rückwärtskompatibilität können Manifest V2-Erweiterungen in Firefox WebAssembly ohne Verwendung von `'wasm-unsafe-eval'` nutzen. Dieses Verhalten ist jedoch nicht garantiert. Siehe [Firefox Bug 1770909](https://bugzil.la/1770909). Erweiterungen, die WebAssembly verwenden, wird daher empfohlen, `'wasm-unsafe-eval'` in ihrer CSP zu deklarieren. Weitere Informationen finden Sie auf der Seite zur [WebAssembly](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#webassembly) Content Security Policy.

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

Dies ist jedoch nur in Browsern ungültig, die veraltete [Plugins](/de/docs/Glossary/Plugin) unterstützen. Weitere Details finden Sie unter [object-src-Direktive](#object-src-direktive).

Richtlinie, die das `"self"`-Schlüsselwort in der `"script-src"`-Direktive weglässt:

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
