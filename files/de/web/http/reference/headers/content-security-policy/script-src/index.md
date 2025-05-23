---
title: "Content-Security-Policy: script-src Direktive"
short-title: script-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/script-src
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src`** Direktive gibt gültige Quellen für JavaScript an. Dies umfasst nicht nur URLs, die direkt in {{HTMLElement("script")}}-Elementen geladen werden, sondern auch Dinge wie inline Skript-Event-Handler (`onclick`) und [XSLT Stylesheets](/de/docs/Web/XML/XSLT), die Skript-Ausführung auslösen können.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Direktive")}}</td>
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

```http
Content-Security-Policy: script-src 'none';
Content-Security-Policy: script-src <source-expression-list>;
```

Diese Direktive kann einen der folgenden Werte haben:

- `'none'`
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind zwingend erforderlich.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _source expression_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind alle in [Fetch-Direktiven-Syntax](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax) aufgeführten Quellausdrücke anwendbar.

## Beispiele

### Whitelisting von Ressourcen aus vertrauenswürdigen Domains

Angenommen, dieser CSP-Header erlaubt nur Skripte von `https://example.com`:

```http
Content-Security-Policy: script-src https://example.com/
```

das folgende Skript wird blockiert und weder geladen noch ausgeführt:

```html
<script src="https://not-example.com/js/library.js"></script>
```

Beachten Sie, dass auch Inline-Event-Handler blockiert werden:

```html
<button id="btn" onclick="doSomething()"></button>
```

Sie sollten sie durch [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe ersetzen:

```js
document.getElementById("btn").addEventListener("click", doSomething);
```

Wenn Sie Inline-Event-Handler nicht ersetzen können, können Sie den `'unsafe-hashes'` Quellausdruck verwenden, um sie zuzulassen. Weitere Informationen finden Sie unter [Unsafe hashes](#unsafe_hashes).

### Whitelisting von externen Skripten mit Hashes

Das Zulassen von vertrauenswürdigen Domains, wie im obigen Abschnitt gezeigt, ist ein pragmatischer Ansatz, insbesondere wenn Ihre Website viele Ressourcen verwendet und Sie darauf vertrauen, dass die vertrauenswürdige Seite nicht gefährdet wird.

Eine alternative Methode ist das Angeben zulässiger Skripte unter Verwendung von Datei-Hashes. Mit diesem Ansatz kann eine externe Datei in einem `<script>`-Element nur geladen und ausgeführt werden, wenn alle gültigen Hash-Werte in ihrem [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut mit den erlaubten Werten im CSP-Header übereinstimmen. Das [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) Feature überprüft zusätzlich, dass die heruntergeladene Datei den angegebenen Hash-Wert hat und daher nicht verändert wurde. Dies ist sicherer als einem Domain zu vertrauen, weil Dateien nur verwendet werden, wenn sie unverändert sind, auch wenn sie von einer kompromittierten Seite geladen werden. Es ist jedoch granulärer und erfordert, dass Hash-Werte in CSP- und Skript-Elementen aktualisiert werden, wann immer die zugehörigen Skripte geändert werden.

Der nachstehende CSP-Header demonstriert den Ansatz. Er erlaubt Skripte, für die der SHA384-Hash `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` oder der SHA256-Hash `fictional_value` ist.

```http
Content-Security-Policy: script-src 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC' 'sha256-fictional_value'
```

Das `example-framework.js`-Skript unten sollte geladen werden, weil der Hash-Wert in seinem `integrity`-Attribut auch im CSP vorhanden ist (vorausgesetzt, die Datei hat tatsächlich diesen Hash nach dem Herunterladen!).

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

Das `integrity`-Attribut kann mehrere Werte haben, die jeweils einen Hash für die Datei liefern, der mit einem anderen Algorithmus berechnet wird. Damit ein externes Skript geladen werden kann, verlangt CSP, dass _alle_ gültigen Hash-Werte im Attribut auch in der CSP-`script-src`-Deklaration enthalten sein müssen. Daher würde das folgende Skript nicht geladen, da der zweite Hash im obigen CSP-Header nicht vorhanden ist.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC sha256-not-in-csp"
  crossorigin="anonymous"></script>
```

Diese Regel gilt nur für _gültige_ Hash-Werte. Werte, die vom Browser nicht als Hashes erkannt werden, werden ignoriert. Daher sollte das folgende Skript geladen werden:

```html
<script
  src="https://example.com/example-framework.js"
  integrity="invalid-or-unsupported-hash sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

[Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) enthält weitere Informationen über das Berechnen von Hashes und die Verwendung des `integrity`-Attributs.

### Unsafe Inline-Skript

> [!NOTE]
> Das Unterbinden von Inline-Styles und Inline-Skripten ist einer der größten Sicherheitsvorteile, die CSP bietet.
> Wenn Sie sie unbedingt verwenden müssen, gibt es einige Mechanismen, die dies ermöglichen.
> Hashes gelten für Inline-Skripte und -Stile, aber nicht für Event-Handler.
> Weitere Informationen finden Sie unter [Unsafe hashes](#unsafe_hashes).

Um Inline-Skripte und -Stile zu erlauben, kann `'unsafe-inline'`, eine Nonce-Source oder eine Hash-Source angegeben werden, die mit dem Inline-Block übereinstimmt. Die folgende Content Security Policy erlaubt alle Inline-{{HTMLElement("script")}}-Elemente:

```http
Content-Security-Policy: script-src 'unsafe-inline';
```

Das folgende {{HTMLElement("script")}}-Element wird durch die Richtlinie zugelassen:

```html
<script>
  const inline = 1;
  // …
</script>
```

Alle Inline-Skripte zuzulassen, wird als Sicherheitsrisiko betrachtet, daher wird empfohlen, stattdessen eine Nonce-Source oder eine Hash-Source zu verwenden. Um Inline-Skripte und -Stile mit einer Nonce-Source zu erlauben, müssen Sie einen zufälligen Nonce-Wert generieren (mit einem kryptografisch sicheren Zufallstoken-Generator) und ihn in die Richtlinie aufnehmen. Es ist wichtig zu beachten, dass dieser Nonce-Wert dynamisch generiert werden muss, da er für jede HTTP-Anfrage einzigartig sein muss:

```http
Content-Security-Policy: script-src 'nonce-2726c7f26c'
```

Anschließend müssen Sie denselben Nonce im {{HTMLElement("script")}}-Element einfügen:

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

Beim Generieren des Hashes dürfen die {{HTMLElement("script")}}-Tags nicht einbezogen werden, und es ist darauf zu achten, dass Groß-/Kleinschreibung und Leerzeichen wichtig sind, einschließlich führender oder nachfolgender Leerzeichen.

```html
<script>
  const inline = 1;
</script>
```

### Unsafe Hashes

Richtlinien für Inline-Ressourcen mit Hashes wie `script-src 'sha256-{HASHED_INLINE_SCRIPT}'` erlauben Skripte und Stile anhand ihres Hashs, aber nicht Event-Handler:

```html
<!-- Allowed by CSP: script-src 'sha256-{HASHED_INLINE_SCRIPT}' -->
<script>
  const inline = 1;
</script>

<!-- CSP: script-src 'sha256-{HASHED_EVENT_HANDLER}'
      will not allow this event handler -->
<button onclick="myScript()">Submit</button>
```

Anstatt `'unsafe-inline'` zuzulassen, können Sie den `'unsafe-hashes'` Quellausdruck verwenden, wenn der Code nicht auf gleichwertige [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe aktualisiert werden kann. Angenommen, eine HTML-Seite enthält den folgenden Inline-Event-Handler:

```html
<!-- I want to use addEventListener, but I can't :( -->
<button onclick="myScript()">Submit</button>
```

Der folgende CSP-Header erlaubt die Ausführung des Skripts:

```http
Content-Security-Policy:  script-src 'unsafe-hashes' 'sha256-{HASHED_EVENT_HANDLER}'
```

### Unsafe Eval-Ausdrücke

Der `'unsafe-eval'` Quellausdruck steuert mehrere Skriptausführungsmethoden, die Code aus Zeichenfolgen erstellen. Wenn eine Seite einen CSP-Header hat und `'unsafe-eval'` nicht mit der `script-src`-Direktive angegeben ist, werden die folgenden Methoden blockiert und haben keine Wirkung:

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Function", "Function()")}}
- Wenn ein Zeichenfolgenliteral wie zu Methoden wie: `setTimeout("alert(\"Hello World!\");", 500);` übergeben wird

  - [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)
  - [`setInterval()`](/de/docs/Web/API/Window/setInterval)
  - [`setImmediate()`](/de/docs/Web/API/Window/setImmediate)

- `window.execScript()` {{non-standard_inline}} (nur IE < 11)

### Unsafe WebAssembly-Ausführung

Der `'wasm-unsafe-eval'` Quellausdruck steuert die WebAssembly-Ausführung. Wenn eine Seite einen CSP-Header hat und `'wasm-unsafe-eval'` nicht in der `script-src`-Direktive angegeben ist, wird WebAssembly daran gehindert, auf der Seite geladen und ausgeführt zu werden.

Der `'wasm-unsafe-eval'` Quellausdruck ist spezifischer als `'unsafe-eval'`, das sowohl die Kompilierung (und Instanziierung) von WebAssembly als auch beispielsweise die Verwendung der `eval`-Operation in JavaScript zulässt. Wenn das `'unsafe-eval'` Quellenschlüsselwort verwendet wird, überschreibt dies jedes Vorkommen von `'wasm-unsafe-eval'` in der CSP-Richtlinie.

```http
Content-Security-Policy: script-src 'wasm-unsafe-eval'
```

### strict-dynamic

Der `'strict-dynamic'` Quellausdruck gibt an, dass das explizit einem Skript im Markup gegebene Vertrauen, indem es mit einer Nonce oder einem Hash versehen wird, auf alle Skripte, die von diesem Root-Skript geladen werden, übertragen werden soll. Gleichzeitig werden alle Allowlists oder Quellausdrücke wie `'self'` oder `'unsafe-inline'` ignoriert.

Zum Beispiel ermöglicht eine Richtlinie wie `script-src 'strict-dynamic' 'nonce-R4nd0m' https://allowlisted.example.com/` das Laden eines Root-Skripts mit `<script nonce="R4nd0m" src="https://example.com/loader.js">` und überträgt dieses Vertrauen auf jedes von `loader.js` geladene Skript, verbietet jedoch das Laden von Skripten von `https://allowlisted.example.com/`, es sei denn, es ist mit einer Nonce versehen oder von einem vertrauenswürdigen Skript geladen.

```http
Content-Security-Policy: script-src 'strict-dynamic' 'nonce-someNonce'
```

Oder:

```http
Content-Security-Policy: script-src 'strict-dynamic' 'sha256-base64EncodedHash'
```

Es ist möglich, `strict-dynamic` auf eine rückwärtskompatible Weise bereitzustellen, ohne Benutzeragenten-Sniffing zu erfordern. Die Richtlinie:

```http
Content-Security-Policy: script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'
```

wird in Browsern, die CSP1 unterstützen, wie `'unsafe-inline' https:` wirken, `https: 'nonce-abcdefg'` in Browsern, die CSP2 unterstützen, und `'nonce-abcdefg' 'strict-dynamic'` in Browsern, die CSP3 unterstützen.

### Erlauben von Spekulationsregeln

Um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in ein Skript-Element einzuschließen (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules)), müssen Sie die `script-src`-Direktive mit einer der `'inline-speculation-rules'`-Quellen, einer Hash-Source oder einer Nonce-Source verwenden. Zum Beispiel:

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
