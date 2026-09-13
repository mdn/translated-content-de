---
title: content_security_policy
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy
l10n:
  sourceCommit: ef11240e109e4b39ff9e8cac248d1c7d7c842112
---

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

Erweiterungen haben standardmäßig eine Content Security Policy (CSP) zugewiesen. Die Standardrichtlinie schränkt die Quellen ein, von denen Erweiterungen Code laden können (wie [\<script>](/de/docs/Web/HTML/Reference/Elements/script) Ressourcen) und verbietet potenziell unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval). Siehe [Standard-Content-Sicherheitsrichtlinie](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy), um mehr über die Auswirkungen dieser zu erfahren.

Sie können den Manifest-Schlüssel `"content_security_policy"` verwenden, um die Standardrichtlinie zu lockern oder zu verschärfen. Dieser Schlüssel wird auf die gleiche Weise spezifiziert wie der HTTP-Header Content-Security-Policy. Siehe [Verwendung von Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) für eine allgemeine Beschreibung der CSP-Syntax.

Zum Beispiel können Sie diesen Schlüssel verwenden, um:

- Zugelassene Quellen für andere Arten von Inhalten wie Bilder und Stylesheets mit der entsprechenden [Richtliniendirektive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) einzuschränken.
- Der Erweiterung erlauben, [WebAssembly](/de/docs/WebAssembly) zu nutzen, indem die Quelle `'wasm-unsafe-eval'` in die `script-src`-Direktive aufgenommen wird.
- Die Standardrichtlinien {{CSP("script-src")}} (nur Manifest V2) lockern:
  - Der Erweiterung erlauben, Skripte von außerhalb ihres Pakets zu laden, indem deren URL in der {{CSP("script-src")}}-Direktive angegeben wird.
  - Der Erweiterung erlauben, Inline-Skripte auszuführen, indem [der Hash des Skripts in der `script-src`-Direktive angegeben wird](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#unsafe_inline_script).
  - Der Erweiterung erlauben, `eval()` und ähnliche Funktionen zu verwenden, indem `'unsafe-eval'` in der {{CSP("script-src")}}-Direktive aufgenommen wird.

Es gibt Einschränkungen bezüglich der Richtlinie, die Sie mit diesem Manifest-Schlüssel spezifizieren können:

- Die {{CSP("script-src")}}-Direktive muss mindestens das `'self'`-Schlüsselwort enthalten und darf nur sichere Quellen enthalten. Der Satz zugelassener sicherer Quellen unterscheidet sich zwischen Manifest V2 und Manifest V3.
- Die Richtlinie darf {{CSP("default-src")}} alleine beinhalten (ohne {{CSP("script-src")}}), wenn ihre Quellen die Anforderungen für die {{CSP("script-src")}}-Direktive erfüllen.
- Das {{CSP("object-src")}}-Schlüsselwort könnte erforderlich sein, siehe [object-src-Direktive](#objekt-src-direktive) für Details.
- Direktiven, die auf Code verweisen – {{CSP("script-src")}}, {{CSP("script-src-elem")}}, {{CSP("worker-src")}} und {{CSP("default-src")}} (falls als Fallback verwendet) – teilen die gleiche Anforderung für sichere Quellen. Es gibt keine Einschränkungen für CSP-Direktiven, die nicht Skript-Inhalte betreffen, wie {{CSP("img-src")}}.

In Manifest V3 sind alle CSP-Quellen, die sich auf externe oder nicht-statische Inhalte beziehen, in CSP-Direktiven, die Skript-Inhalte betreffen, verboten. Die einzigen zugelassenen Werte sind `'none'`, `'self'` und `'wasm-unsafe-eval'`. Es gibt eine Ausnahme für Skripte von localhost während der Entwicklung; siehe [Skripte von localhost](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#scripts_from_localhost) in der Content Security Policy für mehr Informationen.

In Manifest V2 gilt eine Quelle für eine Skript-Direktive als sicher, wenn sie diesen Kriterien entspricht:

- Platzhalter-Hosts sind nicht erlaubt, wie `"script-src 'self' *"`.
- Entfernte Quellen müssen `https:`-Schemata verwenden.
- Entfernte Quellen dürfen keine Platzhalter für Domains in der [Public Suffix Liste](https://publicsuffix.org/list/) verwenden (so dass `*.co.uk` und `*.blogspot.com` nicht erlaubt sind, obwohl `*.foo.blogspot.com` erlaubt ist).
- Alle Quellen müssen einen Host angeben.
- Die einzigen erlaubten Schemata für Quellen sind `blob:`, `filesystem:`, `moz-extension:`, `https:` und `wss:`.
- Die einzigen erlaubten [Schlüsselwörter](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax) sind: `'none'`, `'self'`, `'unsafe-eval'` und `'wasm-unsafe-eval'`.

## objekt-src-Direktive

Die `{{CSP("object-src")}}`-Direktive kann in einigen Browsern erforderlich sein, die veraltete [Plugins](/de/docs/Glossary/Plugin) unterstützen und sollte, falls benötigt, auf eine sichere Quelle wie `'none'` gesetzt werden. Dies könnte für Browser bis 2022 notwendig sein.

- In Firefox ist `"object-src"` ab Firefox 106 optional. In früheren Versionen wird, falls `"object-src"` nicht spezifiziert ist, `"content_security_policy"` ignoriert und die Standard-CSP verwendet.
- In Chrome ist `"object-src"` erforderlich. Wenn es fehlt oder als unsicher angesehen wird, wird die Standardeinstellung (`"object-src 'self'"`) verwendet und eine Warnmeldung protokolliert.
- In Safari gibt es keine Anforderung für `"object-src"`.

Siehe W3C WebExtensions Community Group [Problem 204](https://github.com/w3c/webextensions/issues/204), Entfernen von object-src aus der CSP, für weitere Informationen.

## Manifest V2-Syntax

In Manifest V2 wird eine Content-Sicherheitsrichtlinie gegen den Schlüssel wie folgt festgelegt:

```json
"content_security_policy": "default-src 'self'"
```

## Manifest V3-Syntax

In Manifest V3 ist der Key `content_security_policy` ein Objekt, das eine beliebige dieser Eigenschaften haben kann, die alle optional sind:

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
        Die Content-Sicherheitsrichtlinie für Erweiterungsseiten. Die <code>script-src</code> und <code>worker-src</code>-Direktiven dürfen nur diese Werte haben:
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
        Die Content-Sicherheitsrichtlinie für die <a href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sandbox">sandboxed pages</a> der Erweiterung.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Gültige Beispiele

> [!NOTE]
> Gültige Beispiele zeigen die korrekte Verwendung von Schlüsseln in CSP.
> Allerdings sind Erweiterungen mit 'unsafe-eval', entfernten Skripten, Blob oder entfernten Quellen in ihrer CSP nicht für Firefox-Erweiterungen erlaubt gemäß den [Erweiterungsrichtlinien](https://extensionworkshop.com/documentation/publish/add-on-policies/) und aufgrund erheblicher Sicherheitsprobleme.

> [!NOTE]
> Einige Beispiele enthalten die `{{CSP("object-src")}}`-Direktive, die Rückwärtskompatibilität für ältere Browserversionen bietet. Siehe [object-src-Direktive](#objekt-src-direktive) für mehr Details.

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

Entfernte Skripte von "https://example.com" erlauben:

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://example.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine entfernten URLs in `script-src` von `extension_pages`.

Entfernte Skripte von beliebigen Subdomains von "jquery.com" erlauben:

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' https://*.jquery.com; object-src 'self'"
  ```

- Manifest V3 erlaubt keine entfernten URLs in `script-src` von `extension_pages`.

  ```json
  "content_security_policy": {
    "extension_pages": "script-src 'self' http://localhost:3000"
  }
  ```

  Allerdings können Skripte von localhost während der Entwicklung für nicht verpackte Erweiterungen aus Chrome 110 und temporär geladene Erweiterungen aus Firefox 147 erlaubt werden. Siehe [Skripte von localhost](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#scripts_from_localhost) in der Content Security Policy für mehr Informationen.

[`eval()` und ähnliches](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval_and_friends) erlauben:

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"
  ```

- Manifest V3 erlaubt `'unsafe-eval'` nicht in `script-src`.

Das Inline-Skript erlauben: `"<script>alert('Hello, world.');</script>"`:

- Manifest V2

  ```json
  "content_security_policy": "script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='; object-src 'self'"
  ```

- Manifest V3 erlaubt keine CSP-Hashes in `script-src` von `extension_pages`.

Den Rest der Richtlinie beibehalten, aber auch verlangen, dass Bilder mit der Erweiterung verpackt sein sollten:

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

Die Verwendung von [WebAssembly](/de/docs/WebAssembly) aktivieren:

- Manifest V2

  Für die Rückwärtskompatibilität können Manifest V2-Erweiterungen in Firefox WebAssembly ohne die Verwendung von `'wasm-unsafe-eval'` verwenden. Dieses Verhalten ist jedoch nicht garantiert. Siehe [Firefox-Bug 1770909](https://bugzil.la/1770909). Erweiterungen, die WebAssembly verwenden, werden daher ermutigt, `'wasm-unsafe-eval'` in ihrer CSP zu deklarieren. Weitere Informationen finden Sie unter [WebAssembly](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#webassembly) auf der Content Security Policy-Seite.

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

Dies ist jedoch nur in Browsern ungültig, die veraltete [Plugins](/de/docs/Glossary/Plugin) unterstützen. Siehe [object-src-Direktive](#objekt-src-direktive) für mehr Details.

Richtlinie, die das `"self"`-Schlüsselwort in der `"script-src"`-Direktive auslässt:

```json example-bad
"content_security_policy": "script-src https://*.jquery.com; object-src 'self'"
```

Das Schema für eine entfernte Quelle ist nicht `https`:

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

Die Direktive enthält das nicht unterstützte Schlüsselwort `'unsafe-inline'`:

```json example-bad
"content_security_policy": "script-src 'self' 'unsafe-inline'; object-src 'self'"
```

## Browser-Kompatibilität

{{Compat}}
