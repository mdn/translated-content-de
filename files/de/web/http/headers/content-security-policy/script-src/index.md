---
title: "CSP: script-src"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src
l10n:
  sourceCommit: bca6332a9b752ba195f544e115ada4bff76bc822
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src`**-Direktive legt gültige Quellen für JavaScript fest. Dies umfasst nicht nur URLs, die direkt in {{HTMLElement("script")}}-Elemente geladen werden, sondern auch Dinge wie Inline-Skript-Event-Handler (`onclick`) und [XSLT-Stylesheets](/de/docs/Web/XSLT), die die Ausführung von Skripten auslösen können.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch directive")}}</td>
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

Einer oder mehrere Quellen können für die `script-src`-Richtlinie erlaubt werden:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src <source> <source>;
```

### Quellen

`<source>` kann einer der in den [CSP Source Values](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgelisteten Werte sein.

Beachten Sie, dass dieser Satz von Werten in allen {{Glossary("fetch directive", "fetch directives")}} (und in einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Ressourcen aus vertrauenswürdigen Domains zulassen

Wenn dieser CSP-Header nur Skripte von `https://example.com` erlaubt:

```http
Content-Security-Policy: script-src https://example.com/
```

wird das folgende Skript blockiert und nicht geladen oder ausgeführt:

```html
<script src="https://not-example.com/js/library.js"></script>
```

Beachten Sie, dass Inline-Event-Handler ebenfalls blockiert werden:

```html
<button id="btn" onclick="doSomething()"></button>
```

Sie sollten sie durch {{domxref("EventTarget.addEventListener", "addEventListener")}}-Aufrufe ersetzen:

```js
document.getElementById("btn").addEventListener("click", doSomething);
```

Wenn Sie Inline-Event-Handler nicht ersetzen können, können Sie den `'unsafe-hashes'`-Quelle-Ausdruck verwenden, um sie zuzulassen. Siehe [Unsafe hashes](#unsichere_hashes) für weitere Informationen.

### Externe Skripte mit Hashes zulassen

Vertrauenswürdige Domains zuzulassen, wie im obigen Abschnitt gezeigt, ist ein pragmatischer Ansatz, um die Standorte anzugeben, von denen Code sicher geladen werden kann. Dies ist besonders nützlich, wenn Ihre Website viele Ressourcen verwendet und Sie sicher sind, dass die vertrauenswürdige Website nicht kompromittiert wird.

Eine alternative Methode ist das Zulassen von Skripten mit Dateihashes. Mit diesem Ansatz kann eine externe Datei in einem `<script>`-Element nur geladen und ausgeführt werden, wenn alle gültigen Hash-Werte im [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attribut mit den im CSP-Header angegebenen Werten übereinstimmen. Das [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Feature überprüft zusätzlich, dass die heruntergeladene Datei den angegebenen Hash-Wert hat und daher nicht verändert wurde. Dies ist sicherer als das Vertrauen in eine Domain, da Dateien nur verwendet werden, wenn sie unverändert sind, selbst wenn sie von einer kompromittierten Website geladen werden. Es ist jedoch granularer und erfordert, dass die Hash-Werte in CSP- und Skriptelementen aktualisiert werden, wann immer die zugehörigen Skripte geändert werden.

Der folgende CSP-Header demonstriert diesen Ansatz. Er erlaubt Skripte, für die der SHA384-Hash `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` oder der SHA256-Hash `fictional_value` ist.

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

Das `integrity`-Attribut kann mehrere Werte haben, von denen jeder einen Hash für die Datei liefert, berechnet mit einem anderen Algorithmus. Damit ein externes Skript geladen werden kann, erfordert CSP, dass _alle_ gültigen Hash-Werte im Attribut auch in der CSP-`script-src`-Deklaration vorhanden sein müssen. Daher würde das folgende Skript nicht geladen werden, da der zweite Hash nicht im obigen CSP-Header vorkommt.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC sha256-not-in-csp"
  crossorigin="anonymous"></script>
```

Diese Regel gilt nur für _gültige_ Hash-Werte. Werte, die vom Browser nicht als Hashes erkannt werden, werden ignoriert, sodass das folgende Skript laden sollte:

```html
<script
  src="https://example.com/example-framework.js"
  integrity="invalid-or-unsupported-hash sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

[Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) enthält weitere Informationen zum Berechnen von Hashes und zur Verwendung des `integrity`-Attributs.

### Unsicheres Inline-Skript

> [!NOTE]
> Das Verbot von Inline-Stilen und Inline-Skripten ist einer der größten Sicherheitserfolge, den CSP bietet.
> Wenn Sie sie absolut verwenden müssen, gibt es einige Mechanismen, die sie erlauben.
> Hashes gelten für Inline-Skripte und -Stile, nicht jedoch für Event-Handler.
> Weitere Informationen finden Sie unter [Unsafe hashes](#unsichere_hashes).

Um Inline-Skripte und -Stile zuzulassen, kann `'unsafe-inline'`, eine Nonce-Quelle oder eine Hash-Quelle, die zum Inline-Block passt, angegeben werden. Die folgende Content-Security-Policy wird alle Inline-{{HTMLElement("script")}}-Elemente zulassen:

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

Das Zulassen aller Inline-Skripte wird als Sicherheitsrisiko betrachtet, daher wird empfohlen, stattdessen eine Nonce-Quelle oder eine Hash-Quelle zu verwenden. Um Inline-Skripte und -Stile mit einer Nonce-Quelle zuzulassen, müssen Sie einen zufälligen Nonce-Wert generieren (unter Verwendung eines kryptografisch sicheren Zufallstoken-Generators) und ihn in die Richtlinie aufnehmen. Es ist wichtig zu beachten, dass dieser Nonce-Wert dynamisch erzeugt werden muss, da er für jede HTTP-Anfrage einzigartig sein muss:

```http
Content-Security-Policy: script-src 'nonce-2726c7f26c'
```

Dann müssen Sie den gleichen Nonce im {{HTMLElement("script")}}-Element einfügen:

```html
<script nonce="2726c7f26c">
  const inline = 1;
  // …
</script>
```

Alternativ können Sie Hash-Werte aus Ihren Inline-Skripten erstellen. CSP unterstützt sha256, sha384 und sha512.

```http
Content-Security-Policy: script-src 'sha256-B2yPHKaXnvFWtRChIbabYmUBFZdVfKKXHbWtWidDVF8='
```

Beim Erstellen des Hashs zählen die {{HTMLElement("script")}}-Tags nicht mit, und es ist wichtig, dass Groß-/Kleinschreibung und Leerzeichen, einschließlich führender oder nachfolgender Leerzeichen, übereinstimmen.

```html
<script>
  const inline = 1;
</script>
```

### Unsichere Hashes

Richtlinien für Inline-Ressourcen mit Hashes wie `script-src 'sha256-{HASHED_INLINE_SCRIPT}'` erlauben Skripte und Stile durch ihren Hash, jedoch nicht Event-Handler:

```html
<!-- Erlaubt durch CSP: script-src 'sha256-{HASHED_INLINE_SCRIPT}' -->
<script>
  const inline = 1;
</script>

<!-- CSP: script-src 'sha256-{HASHED_EVENT_HANDLER}'
      wird diesen Event-Handler nicht zulassen -->
<button onclick="myScript()">Submit</button>
```

Statt `'unsafe-inline'` zuzulassen, können Sie den `'unsafe-hashes'`-Quell-Ausdruck verwenden, wenn der Code nicht zu gleichwertigen {{domxref("EventTarget.addEventListener", "addEventListener")}}-Aufrufen aktualisiert werden kann.

```html
<!-- Ich möchte addEventListener verwenden, kann jedoch nicht :( -->
<button onclick="myScript()">Submit</button>
```

Der folgende CSP-Header erlaubt das Ausführen des Skripts:

```http
Content-Security-Policy:  script-src 'unsafe-hashes' 'sha256-{HASHED_EVENT_HANDLER}'
```

### Unsichere Eval-Ausdrücke

Der `'unsafe-eval'` Quell-Ausdruck steuert mehrere Skriptausführungsmethoden, die Code aus Zeichenfolgen erstellen. Wenn eine Seite einen CSP-Header hat und `'unsafe-eval'` nicht mit der `script-src`-Direktive angegeben ist, werden die folgenden Methoden blockiert und haben keine Wirkung:

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Function", "Function()")}}
- Wenn eine Zeichenfolgenliterale wie an Methoden übergeben wird: `setTimeout("alert(\"Hello World!\");", 500);`

  - {{domxref("setTimeout()")}}
  - {{domxref("setInterval()")}}
  - {{domxref("window.setImmediate")}}

- `window.execScript()` {{non-standard_inline}} (nur IE < 11)

### Unsichere WebAssembly-Ausführung

Der `'wasm-unsafe-eval'` Quell-Ausdruck steuert die WebAssembly-Ausführung. Wenn eine Seite einen CSP-Header hat und `'wasm-unsafe-eval'` in der `script-src`-Direktive nicht angegeben ist, wird das Laden und Ausführen von WebAssembly auf der Seite blockiert.

Der `'wasm-unsafe-eval'` Quell-Ausdruck ist spezifischer als `'unsafe-eval'`, welches sowohl die Kompilierung (und Instanziierung) von WebAssembly als auch beispielsweise die Verwendung der `eval`-Operation in JavaScript ermöglicht. Wenn das `'unsafe-eval'` Quell-Schlüsselwort verwendet wird, überschreibt es jedes Vorkommen von `'wasm-unsafe-eval'` in der CSP-Richtlinie.

```http
Content-Security-Policy: script-src 'wasm-unsafe-eval'
```

### strict-dynamic

Der `'strict-dynamic'` Quell-Ausdruck gibt an, dass das Vertrauen, das einem im Markup vorhandenen Skript explizit gegeben wird, indem es mit einem Nonce oder einem Hash versehen wird, auf alle von diesem Stamm-Skript geladenen Skripte übertragen wird. Gleichzeitig werden alle Whitelist- oder Quell-Ausdrücke wie `'self'` oder `'unsafe-inline'` ignoriert.

Zum Beispiel würde eine Richtlinie wie `script-src 'strict-dynamic' 'nonce-R4nd0m' https://allowlisted.example.com/` das Laden eines Stamm-Skripts mit `<script nonce="R4nd0m" src="https://example.com/loader.js">` erlauben und dieses Vertrauen auf jedes von `loader.js` geladene Skript übertragen, aber das Laden von Skripten von `https://allowlisted.example.com/` verbieten, es sei denn, sie sind mit einem Nonce versehen oder werden von einem vertrauenswürdigen Skript geladen.

```http
Content-Security-Policy: script-src 'strict-dynamic' 'nonce-someNonce'
```

Oder:

```http
Content-Security-Policy: script-src 'strict-dynamic' 'sha256-base64EncodedHash'
```

Es ist möglich, `strict-dynamic` auf eine abwärtskompatible Weise einzusetzen, ohne dass ein Benutzer-Agenten-Scanning erforderlich ist. Die Richtlinie:

```http
Content-Security-Policy: script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'
```

wird in Browsern, die CSP1 unterstützen, wie `'unsafe-inline' https:` wirken, in Browsern, die CSP2 unterstützen, wie `https: 'nonce-abcdefg'`, und in Browsern, die CSP3 unterstützen, wie `'nonce-abcdefg' 'strict-dynamic'`.

### Spekulationsregeln erlauben

Um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in einem Skriptelement einzuschließen (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)), müssen Sie die `script-src`-Direktive mit einer der `'inline-speculation-rules'`, einer Hash-Quelle oder einer Nonce-Quelle verwenden. Zum Beispiel:

```http
Content-Security-Policy: script-src 'inline-speculation-rules'
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("Sources")}}
- {{HTMLElement("script")}}
- {{CSP("script-src-elem")}}
- {{CSP("script-src-attr")}}
