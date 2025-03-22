---
title: "CSP: script-src"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/script-src
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{HTTPSidebar}}

Die HTTP-Direktive {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src`** spezifiziert gültige Quellen für JavaScript. Dies umfasst nicht nur URLs, die direkt in {{HTMLElement("script")}}-Elemente geladen werden, sondern auch Dinge wie Inline-Skript-Ereignishandler (`onclick`) und [XSLT-Stylesheets](/de/docs/Web/XML/XSLT), die Skriptausführung auslösen können.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Direktive fehlt, sucht der User-Agent nach der
        <code>default-src</code>-Direktive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: script-src 'none';
Content-Security-Policy: script-src <source-expression-list>;
```

Diese Direktive kann einen der folgenden Werte haben:

- `'none'`
  - : Es dürfen keine Ressourcen dieses Typs geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _Quellausdrücken_. Ressourcen dieses Typs dürfen geladen werden, wenn sie einem der angegebenen Quellausdrücke entsprechen. Für diese Direktive sind alle in der [Fetch directive syntax](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax) aufgeführten Quellausdrücke anwendbar.

## Beispiele

### Erlauben von Ressourcen aus vertrauenswürdigen Domains

Angenommen, dieser CSP-Header erlaubt nur Skripte von `https://example.com`:

```http
Content-Security-Policy: script-src https://example.com/
```

wird das folgende Skript blockiert und nicht geladen oder ausgeführt:

```html
<script src="https://not-example.com/js/library.js"></script>
```

Beachten Sie, dass auch Inline-Ereignishandler blockiert werden:

```html
<button id="btn" onclick="doSomething()"></button>
```

Sie sollten diese durch [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe ersetzen:

```js
document.getElementById("btn").addEventListener("click", doSomething);
```

Wenn Sie Inline-Ereignishandler nicht ersetzen können, können Sie den Quellausdruck `'unsafe-hashes'` verwenden, um sie zu erlauben.
Siehe [Unsichere Hashes](#unsichere_hashes) für weitere Informationen.

### Erlauben externer Skripte mit Hashes

Das Erlauben vertrauenswürdiger Domains, wie im obigen Abschnitt gezeigt, ist ein allgemeiner Ansatz, um die Orte zu spezifizieren, von denen Code sicher geladen werden kann.
Dies ist ein pragmatischer Ansatz, insbesondere wenn Ihre Site viele Ressourcen verwendet und Sie Vertrauen darauf haben, dass die vertrauenswürdige Site nicht kompromittiert wird.

Eine alternative Methode ist das Spezifizieren erlaubter Skripte unter Verwendung von Dateihashes.
Mit diesem Ansatz kann eine externe Datei in einem `<script>`-Element nur geladen und ausgeführt werden, wenn alle gültigen Hash-Werte in ihrem [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attribut mit den erlaubten Werten im CSP-Header übereinstimmen.
Das Feature [Subresource-Integrität](/de/docs/Web/Security/Subresource_Integrity) überprüft zusätzlich, dass die heruntergeladene Datei den angegebenen Hash-Wert hat und daher nicht modifiziert wurde.
Dies ist sicherer als das Vertrauen einer Domain, da Dateien nur verwendet werden, wenn sie nicht modifiziert wurden, auch wenn sie von einer kompromittierten Site geladen werden.
Es ist jedoch granularer und erfordert, dass Hash-Werte im CSP und in den Skript-Elementen aktualisiert werden, wann immer die zugehörigen Skripte geändert werden.

Der folgende CSP-Header demonstriert diesen Ansatz.
Er erlaubt Skripte, für die der SHA384-Hash `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` oder der SHA256-Hash `fictional_value` ist.

```http
Content-Security-Policy: script-src 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC' 'sha256-fictional_value'
```

Das `example-framework.js`-Skript unten sollte geladen werden, da der Hash-Wert in seinem `integrity`-Attribut auch im CSP vorhanden ist (vorausgesetzt, die Datei hat diesen Hash tatsächlich nach dem Herunterladen!).

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

Das `integrity`-Attribut kann mehrere Werte haben, von denen jeder einen Hash für die Datei liefert, der mit einem anderen Algorithmus berechnet wird.
Damit ein externes Skript geladen wird, verlangt CSP, dass _alle_ gültigen Hash-Werte im Attribut auch in der CSP `script-src`-Deklaration enthalten sein müssen.
Daher würde das folgende Skript nicht geladen werden, da der zweite Hash nicht im oben genannten CSP-Header vorhanden ist.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC sha256-not-in-csp"
  crossorigin="anonymous"></script>
```

Diese Regel gilt nur für _gültige_ Hash-Werte.
Werte, die vom Browser nicht als Hashes erkannt werden, werden ignoriert, sodass das folgende Skript geladen werden sollte:

```html
<script
  src="https://example.com/example-framework.js"
  integrity="invalid-or-unsupported-hash sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

[Subresource-Integrität](/de/docs/Web/Security/Subresource_Integrity) enthält weitere Informationen zum Berechnen von Hashes und zur Verwendung des `integrity`-Attributs.

### Unsicheres Inline-Skript

> [!NOTE]
> Das Verhindern von Inline-Stilen und -Skripten ist einer der größten Sicherheitsgewinne, die CSP bietet.
> Wenn Sie sie unbedingt verwenden müssen, gibt es einige Mechanismen, die dies erlauben.
> Hashes gelten für Inline-Skripte und -Stile, aber nicht für Ereignishandler.
> Siehe [Unsichere Hashes](#unsichere_hashes) für weitere Informationen.

Um Inline-Skripte und -Stile zu erlauben, kann `'unsafe-inline'`, ein Nonce-Source oder ein Hash-Source angegeben werden, der dem Inline-Block entspricht.
Die folgende Content Security Policy erlaubt alle Inline-{{HTMLElement("script")}}-Elemente:

```http
Content-Security-Policy: script-src 'unsafe-inline';
```

Das folgende {{HTMLElement("script")}}-Element wird von der Richtlinie erlaubt:

```html
<script>
  const inline = 1;
  // …
</script>
```

Alle Inline-Skripte zu erlauben, wird als Sicherheitsrisiko angesehen, daher wird empfohlen, stattdessen einen Nonce-Source oder einen Hash-Source zu verwenden.
Um Inline-Skripte und -Stile mit einem Nonce-Source zu erlauben, müssen Sie einen zufälligen Nonce-Wert (unter Verwendung eines kryptografisch sicheren Zufalls-Token-Generators) generieren und in die Richtlinie aufnehmen.
Es ist wichtig zu beachten, dass dieser Nonce-Wert dynamisch generiert werden muss, da er für jede HTTP-Anfrage einzigartig sein muss:

```http
Content-Security-Policy: script-src 'nonce-2726c7f26c'
```

Dann müssen Sie denselben Nonce im {{HTMLElement("script")}}-Element einfügen:

```html
<script nonce="2726c7f26c">
  const inline = 1;
  // …
</script>
```

Alternativ können Sie Hashes aus Ihren Inline-Skripten erstellen. CSP unterstützt sha256, sha384 und sha512.

```http
Content-Security-Policy: script-src 'sha256-B2yPHKaXnvFWtRChIbabYmUBFZdVfKKXHbWtWidDVF8='
```

Beim Generieren des Hashes schließen Sie die {{HTMLElement("script")}}-Tags nicht ein und beachten Sie, dass Groß- und Kleinschreibung sowie Leerzeichen, einschließlich führender oder nachfolgender Leerzeichen, eine Rolle spielen.

```html
<script>
  const inline = 1;
</script>
```

### Unsichere Hashes

Richtlinien für Inline-Ressourcen mit Hashes wie `script-src 'sha256-{HASHED_INLINE_SCRIPT}'` erlauben Skripte und Stile nach ihrem Hash, aber keine Ereignishandler:

```html
<!-- Allowed by CSP: script-src 'sha256-{HASHED_INLINE_SCRIPT}' -->
<script>
  const inline = 1;
</script>

<!-- CSP: script-src 'sha256-{HASHED_EVENT_HANDLER}'
      will not allow this event handler -->
<button onclick="myScript()">Submit</button>
```

Statt `'unsafe-inline'` zuzulassen, können Sie den Quellausdruck `'unsafe-hashes'` verwenden, wenn der Code nicht auf äquivalente [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe aktualisiert werden kann.
Angenommen, eine HTML-Seite enthält den folgenden Inline-Ereignishandler:

```html
<!-- I want to use addEventListener, but I can't :( -->
<button onclick="myScript()">Submit</button>
```

Der folgende CSP-Header erlaubt die Ausführung des Skripts:

```http
Content-Security-Policy:  script-src 'unsafe-hashes' 'sha256-{HASHED_EVENT_HANDLER}'
```

### Unsichere eval-Ausdrücke

Der Quellausdruck `'unsafe-eval'` steuert mehrere Skriptausführungsmethoden, die Code aus Zeichenfolgen erstellen.
Wenn eine Seite einen CSP-Header hat und `'unsafe-eval'` nicht mit der `script-src`-Direktive angegeben ist, werden die folgenden Methoden blockiert und haben keine Wirkung:

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Function", "Function()")}}
- Wenn ein Stringliteral wie bei Methoden wie: `setTimeout("alert(\"Hello World!\");", 500);` übergeben wird.

  - [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)
  - [`setInterval()`](/de/docs/Web/API/Window/setInterval)
  - [`setImmediate()`](/de/docs/Web/API/Window/setImmediate)

- `window.execScript()` {{non-standard_inline}} (nur IE < 11)

### Unsichere WebAssembly-Ausführung

Der Quellausdruck `'wasm-unsafe-eval'` steuert die WebAssembly-Ausführung.
Wenn eine Seite einen CSP-Header hat und `'wasm-unsafe-eval'` nicht in der `script-src`-Direktive angegeben ist, wird WebAssembly daran gehindert, auf der Seite zu laden und auszuführen.

Der Quellausdruck `'wasm-unsafe-eval'` ist spezifischer als `'unsafe-eval'`, welches sowohl die Kompilierung (und Instanziierung) von WebAssembly als auch beispielsweise die Verwendung der `eval`-Operation in JavaScript erlaubt.
Wird das Quellschlüsselwort `'unsafe-eval'` verwendet, überschreibt dieses jede Vorkommen von `'wasm-unsafe-eval'` in der CSP-Richtlinie.

```http
Content-Security-Policy: script-src 'wasm-unsafe-eval'
```

### strict-dynamic

Der Quellausdruck `'strict-dynamic'` legt fest, dass das Vertrauen, das einem im Markup präsentem Skript explizit gegeben wird, indem man es mit einem Nonce oder einem Hash begleitet, auf alle Skripte übertragen wird, die von diesem Wurzelskript geladen werden. Gleichzeitig werden alle Allowlists oder Quellausdrücke wie `'self'` oder `'unsafe-inline'` ignoriert.

Zum Beispiel würde eine Richtlinie wie `script-src 'strict-dynamic' 'nonce-R4nd0m' https://allowlisted.example.com/` das Laden eines Wurzelskripts mit `<script nonce="R4nd0m" src="https://example.com/loader.js">` und die Weitergabe dieses Vertrauens an jedes Skript erlauben, das von `loader.js` geladen wird, jedoch das Laden von Skripten von `https://allowlisted.example.com/` nicht erlauben, es sei denn, sie werden von einem Nonce begleitet oder von einem vertrauenswürdigen Skript geladen.

```http
Content-Security-Policy: script-src 'strict-dynamic' 'nonce-someNonce'
```

Oder:

```http
Content-Security-Policy: script-src 'strict-dynamic' 'sha256-base64EncodedHash'
```

Es ist möglich, `strict-dynamic` in einer rückwärtskompatiblen Weise bereitzustellen, ohne dass Benutzeragenten-Sniffing erforderlich ist.
Die Richtlinie:

```http
Content-Security-Policy: script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'
```

wird in Browsern, die CSP1 unterstützen, wie `'unsafe-inline' https:` agieren, in Browsern, die CSP2 unterstützen, wie `https: 'nonce-abcdefg'`, und in Browsern, die CSP3 unterstützen, wie `'nonce-abcdefg' 'strict-dynamic'`.

### Erlauben von Spekulationsregeln

Um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in einem Skriptelement einzuschließen (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)), müssen Sie die `script-src`-Direktive mit einer der `'inline-speculation-rules'`-Quellen, einer Hash-Quelle oder eine Nonce-Quelle verwenden. Zum Beispiel:

```http
Content-Security-Policy: script-src 'inline-speculation-rules'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("script")}}
- {{CSP("script-src-elem")}}
- {{CSP("script-src-attr")}}
