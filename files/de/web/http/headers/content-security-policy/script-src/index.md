---
title: "CSP: script-src"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{HTTPSidebar}}

Das HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src`**-Direktive spezifiziert gültige Quellen für JavaScript. Dazu gehören nicht nur URLs, die direkt in {{HTMLElement("script")}}-Elemente geladen werden, sondern auch Dinge wie Inline-Skript-Ereignishandler (`onclick`) und [XSLT-Stylesheets](/de/docs/Web/XSLT), die die Skriptausführung triggern können.

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
        Ja. Wenn diese Direktive nicht vorhanden ist, sucht der User-Agent nach der
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

  - : Eine durch Leerzeichen getrennte Liste von _Quell-Ausdruckswerten_. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen.

    Quell-Ausdrücke werden als Schlüsselwortwerte oder URL-Muster angegeben: die Syntax für jeden Quellausdruck ist unter [CSP Source Values](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources) beschrieben.

## Beispiele

### Ressourcen von vertrauenswürdigen Domains erlauben

Angenommen, dieser CSP-Header erlaubt nur Skripte von `https://example.com`:

```http
Content-Security-Policy: script-src https://example.com/
```

das folgende Skript wird blockiert und nicht geladen oder ausgeführt:

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

Wenn Sie Inline-Ereignishandler nicht ersetzen können, können Sie den `'unsafe-hashes'` Quellausdruck verwenden, um sie zu erlauben.
Siehe [Unsichere Hashes](#unsichere_hashes) für weitere Informationen.

### Externe Skripte mit Hashes erlauben

Das Erlauben von vertrauenswürdigen Domains, wie im vorherigen Abschnitt gezeigt, ist ein grober Ansatz, um die Orte anzugeben, von denen Code sicher geladen werden kann. Dies ist ein pragmatischer Ansatz, insbesondere wenn Ihre Seite viele Ressourcen verwendet und Sie sicher sind, dass die vertrauenswürdige Seite nicht kompromittiert wird.

Eine alternative Methode ist das Spezifizieren erlaubter Skripte mittels Datei-Hashes. Bei diesem Ansatz kann eine externe Datei in einem `<script>`-Element nur geladen und ausgeführt werden, wenn alle gültigen Hash-Werte in ihrem [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attribut mit den erlaubten Werten im CSP-Header übereinstimmen. Die [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) Funktion prüft zusätzlich, ob die heruntergeladene Datei den angegebenen Hash-Wert hat und somit nicht verändert wurde. Dies ist sicherer als das Vertrauen in eine Domain, da Dateien nur verwendet werden, wenn sie unverändert sind, selbst wenn sie von einer kompromittierten Seite geladen werden. Allerdings ist es auch feiner granuliert und erfordert, dass Hash-Werte im CSP und in Skriptelementen aktualisiert werden, wann immer die zugehörigen Skripte geändert werden.

Der folgende CSP-Header demonstriert diesen Ansatz. Er erlaubt Skripte, bei denen der SHA384-Hash `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` oder der SHA256-Hash `fictional_value` ist.

```http
Content-Security-Policy: script-src 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC' 'sha256-fictional_value'
```

Das folgende `example-framework.js`-Skript sollte geladen werden, da der Hash-Wert in seinem `integrity`-Attribut auch im CSP vorhanden ist (vorausgesetzt, die Datei hat tatsächlich diesen Hash nach dem Herunterladen!)

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

Das `integrity`-Attribut kann mehrere Werte haben, die jeweils einen Hash für die Datei liefern, berechnet mit einem anderen Algorithmus. Damit ein externes Skript geladen wird, erfordert CSP, dass _alle_ gültigen Hash-Werte im Attribut auch in der CSP-`script-src`-Deklaration enthalten sein müssen. Daher würde das folgende Skript nicht geladen, da der zweite Hash nicht im obigen CSP-Header vorhanden ist.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC sha256-not-in-csp"
  crossorigin="anonymous"></script>
```

Diese Regel gilt nur für _gültige_ Hash-Werte. Werte, die vom Browser nicht als Hash erkannt werden, werden ignoriert, sodass das folgende Skript geladen werden sollte:

```html
<script
  src="https://example.com/example-framework.js"
  integrity="invalid-or-unsupported-hash sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

[Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) enthält weitere Informationen über das Berechnen von Hashes und die Verwendung des `integrity`-Attributs.

### Unsicheres Inline-Skript

> [!NOTE]
> Das Verbot von Inline-Stilen und Inline-Skripten ist einer der größten Sicherheitsgewinne, die CSP bietet.
> Wenn Sie sie unbedingt verwenden müssen, gibt es einige Mechanismen, die dies ermöglichen.
> Hashes gelten für Inline-Skripte und -Stile, jedoch nicht für Ereignishandler.
> Siehe [Unsichere Hashes](#unsichere_hashes) für weitere Informationen.

Um Inline-Skripte und -Stile zu erlauben, können `'unsafe-inline'`, ein Nonce-Quelle oder eine Hash-Quelle, die mit dem Inline-Block übereinstimmt, angegeben werden. Die folgende Content-Security-Policy erlaubt alle Inline-{{HTMLElement("script")}}-Elemente:

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

Das Erlauben aller Inline-Skripte wird als Sicherheitsrisiko angesehen, daher wird empfohlen, stattdessen eine Nonce-Quelle oder eine Hash-Quelle zu verwenden. Um Inline-Skripte und -Stile mit einer Nonce-Quelle zu erlauben, müssen Sie einen zufälligen Nonce-Wert generieren (mithilfe eines kryptografisch sicheren Zufallstoken-Generators) und ihn in die Richtlinie einfügen. Es ist wichtig zu beachten, dass dieser Nonce-Wert dynamisch generiert werden muss, da er für jede HTTP-Anfrage einzigartig sein muss:

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

Beim Generieren des Hashs schließen Sie die {{HTMLElement("script")}}-Tags nicht ein und beachten Sie dabei, dass Groß- und Kleinschreibung sowie Leerzeichen von Bedeutung sind, einschließlich führender oder nachfolgender Leerzeichen.

```html
<script>
  const inline = 1;
</script>
```

### Unsichere Hashes

Richtlinien für Inline-Ressourcen mit Hashes wie `script-src 'sha256-{HASHED_INLINE_SCRIPT}'` erlauben Skripte und Stile anhand ihres Hashes, aber nicht Ereignishandler:

```html
<!-- Allowed by CSP: script-src 'sha256-{HASHED_INLINE_SCRIPT}' -->
<script>
  const inline = 1;
</script>

<!-- CSP: script-src 'sha256-{HASHED_EVENT_HANDLER}'
      will not allow this event handler -->
<button onclick="myScript()">Submit</button>
```

Statt `'unsafe-inline'` zu erlauben, können Sie den Quellausdruck `'unsafe-hashes'` verwenden, wenn der Code nicht auf gleichwertige [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe aktualisiert werden kann. Angenommen, eine HTML-Seite enthält den folgenden Inline-Ereignishandler:

```html
<!-- I want to use addEventListener, but I can't :( -->
<button onclick="myScript()">Submit</button>
```

Der folgende CSP-Header erlaubt die Ausführung des Skripts:

```http
Content-Security-Policy:  script-src 'unsafe-hashes' 'sha256-{HASHED_EVENT_HANDLER}'
```

### Unsichere eval-Ausdrücke

Der Quellausdruck `'unsafe-eval'` steuert mehrere Skriptausführungsmethoden, die Code aus Zeichenfolgen erstellen. Wenn eine Seite einen CSP-Header hat und `'unsafe-eval'` nicht mit der `script-src`-Direktive spezifiziert ist, werden die folgenden Methoden blockiert und haben keine Wirkung:

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Function", "Function()")}}
- Beim Übergeben eines Zeichenfolgenliterals an Methoden wie: `setTimeout("alert(\"Hello World!\");", 500);`

  - [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)
  - [`setInterval()`](/de/docs/Web/API/Window/setInterval)
  - [`setImmediate()`](/de/docs/Web/API/Window/setImmediate)

- `window.execScript()` {{non-standard_inline}} (nur IE < 11)

### Unsichere WebAssembly-Ausführung

Der Quellausdruck `'wasm-unsafe-eval'` steuert die WebAssembly-Ausführung. Wenn eine Seite einen CSP-Header hat und `'wasm-unsafe-eval'` nicht in der `script-src`-Direktive angegeben ist, wird verhindert, dass WebAssembly auf der Seite geladen und ausgeführt wird.

Der Quellausdruck `'wasm-unsafe-eval'` ist spezifischer als `'unsafe-eval'`, der sowohl die Kompilierung (und Instanziierung) von WebAssembly als auch beispielsweise die Verwendung der `eval`-Operation in JavaScript erlaubt. Wenn das `'unsafe-eval'` Schlüsselwort verwendet wird, überschreibt dies alle Vorkommen von `'wasm-unsafe-eval'` in der CSP-Richtlinie.

```http
Content-Security-Policy: script-src 'wasm-unsafe-eval'
```

### strict-dynamic

Der Quellausdruck `'strict-dynamic'` gibt an, dass das Vertrauen, das einem im Markup vorhandenen Skript ausdrücklich durch Begleitung mit einem Nonce oder Hash gegeben wird, auf alle von diesem Root-Skript geladenen Skripte übertragen wird. Gleichzeitig werden alle Allowlists oder Quellausdrücke wie `'self'` oder `'unsafe-inline'` ignoriert.

Zum Beispiel erlaubt eine Richtlinie wie `script-src 'strict-dynamic' 'nonce-R4nd0m' https://allowlisted.example.com/` das Laden eines Root-Skripts mit `<script nonce="R4nd0m" src="https://example.com/loader.js">` und leitet dieses Vertrauen auf jedes von `loader.js` geladene Skript weiter, allerdings nicht das Laden von Skripten von `https://allowlisted.example.com/`, es sei denn, sie sind von einem Nonce begleitet oder von einem vertrauenswürdigen Skript geladen.

```http
Content-Security-Policy: script-src 'strict-dynamic' 'nonce-someNonce'
```

Oder:

```http
Content-Security-Policy: script-src 'strict-dynamic' 'sha256-base64EncodedHash'
```

Es ist möglich, `strict-dynamic` rückwärtskompatibel, ohne Benutzeragentenerkennung, bereitzustellen. Die Richtlinie:

```http
Content-Security-Policy: script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'
```

wird in Browsern, die CSP1 unterstützen, wie `'unsafe-inline' https:` agieren, `https: 'nonce-abcdefg'` in Browsern, die CSP2 unterstützen, und `'nonce-abcdefg' 'strict-dynamic'` in Browsern, die CSP3 unterstützen.

### Spekulationsregeln erlauben

Um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in einem Skriptelement einzuschließen (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)), müssen Sie die `script-src`-Direktive mit einer der `'inline-speculation-rules'`-Quellen, einer Hash-Quelle oder Nonce-Quelle verwenden. Zum Beispiel:

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
