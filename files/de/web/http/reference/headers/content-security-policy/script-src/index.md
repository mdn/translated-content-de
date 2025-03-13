---
title: "CSP: script-src"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/script-src
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src`** Direktive gibt gültige Quellen für JavaScript an. Dies umfasst nicht nur URLs, die direkt in {{HTMLElement("script")}}-Elemente geladen werden, sondern auch Dinge wie Inline-Skript-Ereignishandler (`onclick`) und [XSLT-Stylesheets](/de/docs/Web/XML/XSLT), die Skriptausführung auslösen können.

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
        Ja. Wenn diese Direktive fehlt, sucht der User-Agent nach der
        <code>default-src</code> Direktive.
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
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _source expression_ Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind alle in der [Fetch-Direktive-Syntax](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax) aufgeführten Quellausdrücke anwendbar.

## Beispiele

### Whitelisting von Ressourcen aus vertrauenswürdigen Domains

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

Sie sollten sie durch [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe ersetzen:

```js
document.getElementById("btn").addEventListener("click", doSomething);
```

Wenn Sie Inline-Ereignishandler nicht ersetzen können, können Sie den `'unsafe-hashes'` Quellausdruck verwenden, um sie zuzulassen.
Siehe [Unsichere Hashes](#unsichere_hashes) für weitere Informationen.

### Whitelisting von externen Skripten mit Hashes

Das Zulassen von vertrauenswürdigen Domains, wie im obigen Abschnitt gezeigt, ist ein pragmatischer Ansatz, um die sicheren Ladeorte von Code zu spezifizieren.
Dies ist insbesondere dann sinnvoll, wenn Ihre Seite viele Ressourcen nutzt und Sie Vertrauen haben, dass die vertrauenswürdige Seite nicht kompromittiert wird.

Eine alternative Methode besteht darin, zulässige Skripte mit Dateihashes anzugeben.
Bei diesem Ansatz kann eine externe Datei in einem `<script>`-Element nur geladen und ausgeführt werden, wenn alle gültigen Hash-Werte in ihrem [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attribut mit den im CSP-Header erlaubten Werten übereinstimmen.
Die [Subresource-Integrität](/de/docs/Web/Security/Subresource_Integrity)-Funktion stellt zusätzlich sicher, dass die heruntergeladene Datei den angegebenen Hash-Wert hat und daher nicht modifiziert wurde.
Dies ist sicherer, als einer Domain zu vertrauen, da Dateien nur verwendet werden, wenn sie nicht verändert sind, selbst wenn sie von einer kompromittierten Seite geladen werden.
Es ist jedoch granulärer und erfordert, dass Hash-Werte in CSP und Skriptelementen aktualisiert werden, wenn die zugehörigen Skripte geändert werden.

Der folgende CSP-Header demonstriert diesen Ansatz.
Es erlaubt Skripte, für die der SHA384-Hash `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` oder der SHA256-Hash `fictional_value` ist.

```http
Content-Security-Policy: script-src 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC' 'sha256-fictional_value'
```

Das `example-framework.js`-Skript unten sollte geladen werden, da der Hash-Wert in seinem `integrity`-Attribut auch im CSP vorhanden ist (sofern die Datei tatsächlich diesen Hash hat, sobald sie heruntergeladen ist!)

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

Das `integrity`-Attribut kann mehrere Werte haben, die jeweils einen Hash für die Datei bereitstellen, der mit einem anderen Algorithmus berechnet wurde.
Damit ein externes Skript geladen wird, erfordert CSP, dass _alle_ gültigen Hash-Werte im Attribut auch in der CSP `script-src`-Deklaration enthalten sein müssen.
Daher würde das Skript unten nicht geladen, da der zweite Hash nicht im obigen CSP-Header vorhanden ist.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC sha256-not-in-csp"
  crossorigin="anonymous"></script>
```

Diese Regel gilt nur für _gültige_ Hash-Werte.
Werte, die nicht als Hashes vom Browser erkannt werden, werden ignoriert, sodass das folgende Skript geladen werden sollte:

```html
<script
  src="https://example.com/example-framework.js"
  integrity="invalid-or-unsupported-hash sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

[Subresource-Integrität](/de/docs/Web/Security/Subresource_Integrity) enthält weitere Informationen zum Berechnen von Hashes und zur Verwendung des `integrity`-Attributs.

### Unsicheres Inline-Skript

> [!NOTE]
> Das Verbot von Inline-Stilen und Inline-Skripten ist einer der größten Sicherheitsgewinne, die CSP bietet.
> Wenn Sie sie unbedingt verwenden müssen, gibt es einige Mechanismen, die sie erlauben.
> Hashes gelten für Inline-Skripte und -Stile, jedoch nicht für Ereignishandler.
> Siehe [Unsichere Hashes](#unsichere_hashes) für weitere Informationen.

Um Inline-Skripte und -Stile zu erlauben, kann `'unsafe-inline'`, eine Nonce-Quelle oder eine Hash-Quelle, die mit dem Inline-Block übereinstimmt, angegeben werden.
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

Das Zulassen aller Inline-Skripte wird als Sicherheitsrisiko betrachtet, daher wird empfohlen, stattdessen eine Nonce-Quelle oder eine Hash-Quelle zu verwenden.
Um Inline-Skripte und -Stile mit einer Nonce-Quelle zu erlauben, müssen Sie einen zufälligen Nonce-Wert generieren (unter Verwendung eines kryptografisch sicheren Zufalls-Tokengenerators) und ihn in die Richtlinie aufnehmen.
Es ist wichtig zu beachten, dass dieser Nonce-Wert dynamisch generiert werden muss, da er für jede HTTP-Anfrage einzigartig sein muss:

```http
Content-Security-Policy: script-src 'nonce-2726c7f26c'
```

Dann müssen Sie denselben Nonce in das {{HTMLElement("script")}}-Element aufnehmen:

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

Wenn Sie den Hash generieren, schließen Sie die {{HTMLElement("script")}}-Tags nicht ein und beachten Sie, dass Groß-/Kleinschreibung und Leerzeichen wichtig sind, einschließlich führender oder nachfolgender Leerzeichen.

```html
<script>
  const inline = 1;
</script>
```

### Unsichere Hashes

Richtlinien für Inline-Ressourcen mit Hashes wie `script-src 'sha256-{HASHED_INLINE_SCRIPT}'` erlauben Skripte und Stile durch ihren Hash, jedoch nicht Ereignishandler:

```html
<!-- Allowed by CSP: script-src 'sha256-{HASHED_INLINE_SCRIPT}' -->
<script>
  const inline = 1;
</script>

<!-- CSP: script-src 'sha256-{HASHED_EVENT_HANDLER}'
      will not allow this event handler -->
<button onclick="myScript()">Submit</button>
```

Anstatt `'unsafe-inline'` zu erlauben, können Sie den `'unsafe-hashes'` Quellausdruck verwenden, wenn der Code nicht auf gleichwertige [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe aktualisiert werden kann.
Angenommen, eine HTML-Seite enthält den folgenden Inline-Ereignishandler:

```html
<!-- I want to use addEventListener, but I can't :( -->
<button onclick="myScript()">Submit</button>
```

Der folgende CSP-Header erlaubt, dass das Skript ausgeführt wird:

```http
Content-Security-Policy:  script-src 'unsafe-hashes' 'sha256-{HASHED_EVENT_HANDLER}'
```

### Unsichere eval-Ausdrücke

Der `'unsafe-eval'` Quellausdruck steuert mehrere Skriptausführungsmethoden, die Code aus Zeichenfolgen erstellen.
Wenn eine Seite einen CSP-Header hat und `'unsafe-eval'` nicht mit der `script-src`-Direktive spezifiziert ist, werden die folgenden Methoden blockiert und haben keine Wirkung:

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Function", "Function()")}}
- Beim Übergeben eines String-Literals an Methoden wie: `setTimeout("alert(\"Hallo Welt!\");", 500);`

  - [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)
  - [`setInterval()`](/de/docs/Web/API/Window/setInterval)
  - [`setImmediate()`](/de/docs/Web/API/Window/setImmediate)

- `window.execScript()` {{non-standard_inline}} (nur IE < 11)

### Unsichere WebAssembly-Ausführung

Der `'wasm-unsafe-eval'` Quellausdruck steuert die Ausführung von WebAssembly.
Wenn eine Seite einen CSP-Header hat und `'wasm-unsafe-eval'` nicht in der `script-src`-Direktive spezifiziert ist, wird WebAssembly daran gehindert, auf der Seite geladen und ausgeführt zu werden.

Der `'wasm-unsafe-eval'` Quellausdruck ist spezifischer als `'unsafe-eval'`, das sowohl Kompilierung (und Instanziierung) von WebAssembly als auch beispielsweise die Verwendung der `eval`-Operation in JavaScript erlaubt.
Wenn das `'unsafe-eval'` Quellenschlüsselwort verwendet wird, überschreibt es jede Verwendung von `'wasm-unsafe-eval'` in der CSP-Richtlinie.

```http
Content-Security-Policy: script-src 'wasm-unsafe-eval'
```

### strict-dynamic

Der `'strict-dynamic'` Quellausdruck gibt an, dass das Vertrauen, das explizit einem Skript im Markup gegeben wird, indem es mit einer Nonce oder einem Hash versehen wird, auf alle Skripte übertragen wird, die von diesem Wurzelskript geladen werden. Gleichzeitig werden alle Whitelists oder Quellausdrücke wie `'self'` oder `'unsafe-inline'` ignoriert.

Beispielsweise würde eine Richtlinie wie `script-src 'strict-dynamic' 'nonce-R4nd0m' https://allowlisted.example.com/` das Laden eines Wurzelskripts mit `<script nonce="R4nd0m" src="https://example.com/loader.js">` erlauben und dieses Vertrauen auf jedes Skript übertragen, das von `loader.js` geladen wird, aber das Laden von Skripten von `https://allowlisted.example.com/` verweigern, es sei denn, sie sind mit einer Nonce versehen oder stammen aus einem vertrauenswürdigen Skript.

```http
Content-Security-Policy: script-src 'strict-dynamic' 'nonce-someNonce'
```

Oder:

```http
Content-Security-Policy: script-src 'strict-dynamic' 'sha256-base64EncodedHash'
```

Es ist möglich, `strict-dynamic` in einer abwärtskompatiblen Weise einzuführen, ohne Benutzeragenten-Sniffing zu erfordern.
Die Richtlinie:

```http
Content-Security-Policy: script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'
```

wird sich verhalten wie `'unsafe-inline' https:` in Browsern, die CSP1 unterstützen, `https: 'nonce-abcdefg'` in Browsern, die CSP2 unterstützen, und `'nonce-abcdefg' 'strict-dynamic'` in Browsern, die CSP3 unterstützen.

### Zulassen von Spekulationsregeln

Um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in einem Skriptelement einzuschließen (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)), müssen Sie die `script-src`-Direktive mit einer der `'inline-speculation-rules'` Quellen, einer Hash-Quelle oder einer Nonce-Quelle verwenden. Zum Beispiel:

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
