---
title: "CSP: script-src"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src
l10n:
  sourceCommit: bca6332a9b752ba195f544e115ada4bff76bc822
---

{{HTTPSidebar}}

Die HTTP-Direktive {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src`** spezifiziert gültige Quellen für JavaScript. Dazu gehören nicht nur direkt in {{HTMLElement("script")}}-Elementen geladene URLs, sondern auch Dinge wie Inline-Skript-Ereignishandler (`onclick`) und [XSLT-Stylesheets](/de/docs/Web/XSLT), die Skriptausführung auslösen können.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Directive-Typ</th>
      <td>[Fetch directive](/de/docs/Glossary/Fetch_directive)</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Direktive fehlt, sucht der Benutzeragent nach der
        <code>default-src</code>-Direktive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `script-src`-Richtlinie erlaubt werden:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src <source> <source>;
```

### Quellen

`<source>` kann einer der in [CSP Source Values](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgelisteten Werte sein.

Beachten Sie, dass dieselbe Menge von Werten in allen [Fetch-Direktiven](/de/docs/Glossary/fetch_directive) (und einer [Reihe anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Ressourcen von vertrauenswürdigen Domains auf die Whitelist setzen

Angenommen, dieser CSP-Header erlaubt nur Skripte von `https://example.com`:

```http
Content-Security-Policy: script-src https://example.com/
```

Das folgende Skript wird blockiert und nicht geladen oder ausgeführt:

```html
<script src="https://not-example.com/js/library.js"></script>
```

Beachten Sie, dass Inline-Ereignishandler ebenfalls blockiert werden:

```html
<button id="btn" onclick="doSomething()"></button>
```

Sie sollten sie durch [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe ersetzen:

```js
document.getElementById("btn").addEventListener("click", doSomething);
```

Wenn Sie Inline-Ereignishandler nicht ersetzen können, können Sie den Quellenausdruck `'unsafe-hashes'` verwenden, um sie zuzulassen. Siehe [Unsichere Hashes](#unsichere_hashes) für weitere Informationen.

### Externe Skripte mit Hashes auf die Whitelist setzen

Das Zulassen vertrauenswürdiger Domains, wie im Abschnitt oben gezeigt, ist ein pragmatischer Ansatz, um die Standorte zu spezifizieren, von denen aus Code sicher geladen werden kann. Dies ist ein pragmatischer Ansatz, insbesondere wenn Ihre Website viele Ressourcen verwendet und Sie Vertrauen haben, dass die vertrauenswürdige Website nicht kompromittiert wird.

Eine alternative Methode besteht darin, erlaubte Skripte mit Datei-Hashes anzugeben. Bei diesem Ansatz kann eine externe Datei in einem `<script>`-Element nur geladen und ausgeführt werden, wenn alle gültigen Hash-Werte im [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attribut mit den erlaubten Werten im CSP-Header übereinstimmen. Die Funktion [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) überprüft zusätzlich, dass die heruntergeladene Datei den angegebenen Hash-Wert hat und daher nicht modifiziert wurde. Dies ist sicherer als das Vertrauen in eine Domain, da Dateien nur verwendet werden, wenn sie unverändert sind, selbst wenn sie von einer kompromittierten Seite geladen wurden. Es ist jedoch feingranularer und erfordert, dass Hash-Werte in CSP und Skriptelementen aktualisiert werden, wenn die zugehörigen Skripte geändert werden.

Der folgende CSP-Header zeigt den Ansatz. Er erlaubt Skripte, bei denen der SHA384-Hash `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` oder der SHA256-Hash `fictional_value` ist.

```http
Content-Security-Policy: script-src 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC' 'sha256-fictional_value'
```

Das `example-framework.js`-Skript unten sollte geladen werden, da der Hash-Wert in seinem `integrity`-Attribut auch im CSP vorhanden ist (vorausgesetzt, die Datei hat diesen Hash tatsächlich, sobald sie heruntergeladen wurde!)

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

Das `integrity`-Attribut kann mehrere Werte haben, von denen jeder einen Hash für die Datei angibt, der mit einem anderen Algorithmus berechnet wurde. Damit ein externes Skript geladen werden kann, erfordert CSP, dass _alle_ gültigen Hash-Werte im Attribut auch in der CSP `script-src`-Deklaration enthalten sein müssen. Daher würde das Skript unten nicht geladen, weil der zweite Hash nicht im CSP-Header oben vorhanden ist.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC sha256-not-in-csp"
  crossorigin="anonymous"></script>
```

Diese Regel gilt nur für _gültige_ Hash-Werte. Werte, die vom Browser nicht als Hashes erkannt werden, werden ignoriert, sodass das folgende Skript geladen werden sollte:

```html
<script
  src="https://example.com/example-framework.js"
  integrity="invalid-or-unsupported-hash sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

[Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) enthält mehr Informationen über das Berechnen von Hashes und die Verwendung des `integrity`-Attributs.

### Unsicheres Inline-Skript

> [!NOTE]
> Das Verbot von Inline-Stilen und Inline-Skripten ist einer der größten Sicherheitsvorteile, die CSP bietet.
> Wenn Sie diese absolut verwenden müssen, gibt es einige Mechanismen, die dies ermöglichen.
> Hashes gelten für Inline-Skripte und -Stile, nicht jedoch für Ereignishandler.
> Siehe [Unsichere Hashes](#unsichere_hashes) für weitere Informationen.

Um Inline-Skripte und -Stile zuzulassen, kann `'unsafe-inline'`, eine `nonce-source` oder eine `hash-source` angegeben werden, die mit dem Inline-Block übereinstimmt. Die folgende Content-Security-Policy erlaubt alle Inline-{{HTMLElement("script")}}-Elemente:

```http
Content-Security-Policy: script-src 'unsafe-inline';
```

Das folgende {{HTMLElement("script")}}-Element wird durch die Richtlinie erlaubt:

```html
<script>
  const inline = 1;
  // …
</script>
```

Das Zulassen aller Inline-Skripte wird als Sicherheitsrisiko betrachtet, daher wird empfohlen, stattdessen eine `nonce-source` oder `hash-source` zu verwenden. Um Inline-Skripte und -Stile mit einer `nonce-source` zu erlauben, müssen Sie einen zufälligen Nonce-Wert (unter Verwendung eines kryptografisch sicheren Zufallsgenerator-Tokens) generieren und ihn in die Richtlinie einfügen. Es ist wichtig zu beachten, dass dieser Nonce-Wert dynamisch generiert werden muss, da er für jede HTTP-Anfrage eindeutig sein muss:

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

Beim Erstellen des Hashes nicht die {{HTMLElement("script")}}-Tags einbeziehen und beachten, dass Groß-/Kleinschreibung und Leerzeichen wichtig sind, einschließlich führender oder nachfolgender Leerzeichen.

```html
<script>
  const inline = 1;
</script>
```

### Unsichere Hashes

Richtlinien für Inline-Ressourcen mit Hashes wie `script-src 'sha256-{HASHED_INLINE_SCRIPT}'` erlauben Skripte und Stile durch ihren Hash, nicht jedoch Ereignishandler:

```html
<!-- Allowed by CSP: script-src 'sha256-{HASHED_INLINE_SCRIPT}' -->
<script>
  const inline = 1;
</script>

<!-- CSP: script-src 'sha256-{HASHED_EVENT_HANDLER}'
      will not allow this event handler -->
<button onclick="myScript()">Submit</button>
```

Anstatt `'unsafe-inline'` zu erlauben, können Sie den Quellenausdruck `'unsafe-hashes'` verwenden, wenn der Code nicht auf gleichwertige [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe aktualisiert werden kann. Angenommen, eine HTML-Seite enthält den folgenden Inline-Ereignishandler:

```html
<!-- I want to use addEventListener, but I can't :( -->
<button onclick="myScript()">Submit</button>
```

Der folgende CSP-Header erlaubt das Ausführen des Skripts:

```http
Content-Security-Policy:  script-src 'unsafe-hashes' 'sha256-{HASHED_EVENT_HANDLER}'
```

### Unsichere Eval-Ausdrücke

Der Quellenausdruck `'unsafe-eval'` steuert mehrere Skript-Ausführungsmethoden, die Code aus Strings erstellen. Wenn eine Seite einen CSP-Header hat und `'unsafe-eval'` nicht mit der `script-src`-Direktive angegeben ist, werden die folgenden Methoden blockiert und haben keine Wirkung:

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Function", "Function()")}}
- Wenn ein Stringliteral wie an Methoden wie: `setTimeout("alert(\"Hello World!\");", 500);` übergeben wird.

  - [`setTimeout()`](/de/docs/Web/API/SetTimeout)
  - [`setInterval()`](/de/docs/Web/API/SetInterval)
  - [`window.setImmediate`](/de/docs/Web/API/Window/setImmediate)

- `window.execScript()` {{non-standard_inline}} (nur IE < 11)

### Unsichere WebAssembly-Ausführung

Der Quellenausdruck `'wasm-unsafe-eval'` steuert die WebAssembly-Ausführung. Wenn eine Seite einen CSP-Header hat und `'wasm-unsafe-eval'` nicht in der `script-src`-Direktive angegeben ist, wird WebAssembly vom Laden und Ausführen auf der Seite blockiert.

Der Quellenausdruck `'wasm-unsafe-eval'` ist spezifischer als `'unsafe-eval'`, das sowohl die Kompilierung (und Instanziierung) von WebAssembly als auch zum Beispiel die Verwendung der `eval`-Operation in JavaScript zulässt. Wenn das Schlüsselwort `'unsafe-eval'` verwendet wird, übersteuert dies jeden Vorkommen von `'wasm-unsafe-eval'` in der CSP-Richtlinie.

```http
Content-Security-Policy: script-src 'wasm-unsafe-eval'
```

### strict-dynamic

Der Quellenausdruck `'strict-dynamic'` gibt an, dass das einem Skript im Markup explizit gegebene Vertrauen, indem es mit einem Nonce oder einem Hash versehen wird, auf alle von diesem Root-Skript geladenen Skripte übertragen wird. Gleichzeitig werden alle Whitelists oder Quellenausdrücke wie `'self'` oder `'unsafe-inline'` ignoriert.

Zum Beispiel würde eine Richtlinie wie `script-src 'strict-dynamic' 'nonce-R4nd0m' https://allowlisted.example.com/` das Laden eines Root-Skripts mit `<script nonce="R4nd0m" src="https://example.com/loader.js">` erlauben und dieses Vertrauen auf jedes von `loader.js` geladene Skript übertragen, jedoch das Laden von Skripten von `https://allowlisted.example.com/`, es sei denn, sie sind von einem Nonce begleitet oder von einem vertrauenswürdigen Skript geladen.

```http
Content-Security-Policy: script-src 'strict-dynamic' 'nonce-someNonce'
```

Oder:

```http
Content-Security-Policy: script-src 'strict-dynamic' 'sha256-base64EncodedHash'
```

Es ist möglich, `strict-dynamic` auf abwärtskompatible Weise bereitzustellen, ohne Benutzeragentsniffing erforderlich zu machen. Die Richtlinie:

```http
Content-Security-Policy: script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'
```

wird in Browsern, die CSP1 unterstützen, wie `'unsafe-inline' https:` agieren; in Browsern, die CSP2 unterstützen, wie `https: 'nonce-abcdefg'`; und in Browsern, die CSP3 unterstützen, wie `'nonce-abcdefg' 'strict-dynamic'`.

### Zulassen von Spekulationsregeln

Um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in einem Skriptelement einzuschließen (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)), müssen Sie die `script-src`-Direktive mit einer der `'inline-speculation-rules'`-Quelle, einem Hash-Source oder Nonce-Source verwenden. Zum Beispiel:

```http
Content-Security-Policy: script-src 'inline-speculation-rules'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("Sources")}}
- {{HTMLElement("script")}}
- {{CSP("script-src-elem")}}
- {{CSP("script-src-attr")}}
