---
title: "CSP: script-src"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src
l10n:
  sourceCommit: 6368e2b112a343fa00ae1a8cf51ceb0b0b845834
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src`** Direktive legt fest, welche Quellen für JavaScript gültig sind. Dies schließt nicht nur URLs ein, die direkt in {{HTMLElement("script")}}-Elemente geladen werden, sondern auch Dinge wie Inline-Skript-Ereignishandler (`onclick`) und [XSLT Stylesheets](/de/docs/Web/XSLT), die Skriptausführung auslösen können.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Art der Direktive</th>
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

  - : Eine durch Leerzeichen getrennte Liste von _source expression_ Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellen übereinstimmen. Für diese Direktive sind alle Quellenwerte, die in der [Fetch-Direktive Syntax](/de/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directive_syntax) aufgeführt sind, anwendbar.

## Beispiele

### Zulassung von Ressourcen aus vertrauenswürdigen Domains

Angenommen, dieser CSP-Header erlaubt nur Skripte von `https://example.com`:

```http
Content-Security-Policy: script-src https://example.com/
```

Das folgende Skript wird blockiert und nicht geladen oder ausgeführt:

```html
<script src="https://not-example.com/js/library.js"></script>
```

Beachten Sie, dass auch Inline-Ereignishandler blockiert werden:

```html
<button id="btn" onclick="doSomething()"></button>
```

Sie sollten sie durch Aufrufe von [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) ersetzen:

```js
document.getElementById("btn").addEventListener("click", doSomething);
```

Wenn Sie Inline-Ereignishandler nicht ersetzen können, können Sie den `'unsafe-hashes'` Quellenwert verwenden, um sie zu erlauben.
Siehe [Unsichere Hashes](#unsichere_hashes) für weitere Informationen.

### Zulassung externer Skripte mithilfe von Hashes

Das Zulassen vertrauenswürdiger Domains, wie im obigen Abschnitt gezeigt, ist ein grober Ansatz, um die Orte festzulegen, von denen Code sicher geladen werden kann.
Dies ist ein pragmatischer Ansatz, insbesondere wenn Ihre Website viele Ressourcen verwendet und Sie zuversichtlich sind, dass die vertrauenswürdige Website nicht kompromittiert wird.

Eine alternative Methode besteht darin, erlaubte Skripte mit Dateihashes anzugeben.
Bei diesem Ansatz kann eine externe Datei in einem `<script>`-Element nur geladen und ausgeführt werden, wenn alle gültigen Hashwerte in ihrem [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attribut den erlaubten Werten im CSP-Header entsprechen.
Das [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Feature überprüft zusätzlich, dass die heruntergeladene Datei den angegebenen Hashwert hat und somit nicht verändert wurde.
Dies ist sicherer als das Vertrauen in eine Domain, da Dateien nur verwendet werden, wenn sie unverändert sind, selbst wenn sie von einer kompromittierten Seite geladen werden.
Es ist jedoch granularer und erfordert, dass die Hashwerte in CSP- und Script-Elementen aktualisiert werden, wann immer die zugehörigen Skripte geändert werden.

Der folgende CSP-Header demonstriert den Ansatz.
Er erlaubt Skripte, für die der SHA384-Hash `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` oder der SHA256-Hash `fiktiver_wert` ist.

```http
Content-Security-Policy: script-src 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC' 'sha256-fictional_value'
```

Das `example-framework.js` Skript unten sollte geladen werden, weil der Hashwert in seinem `integrity`-Attribut auch im CSP vorhanden ist (vorausgesetzt, die Datei hat tatsächlich diesen Hash, sobald sie heruntergeladen ist!)

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

Das `integrity`-Attribut kann mehrere Werte haben, die jeweils einen Hash für die Datei berechnen, wobei unterschiedliche Algorithmen verwendet werden.
Um ein externes Skript zu laden, erfordert CSP, dass _alle_ gültigen Hash-Werte im Attribut auch in der `script-src` Deklaration des CSP enthalten sein müssen.
Daher würde das untenstehende Skript nicht geladen, da der zweite Hash im obigen CSP-Header nicht vorhanden ist.

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

[Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) enthält weitere Informationen zum Berechnen von Hashes und zur Verwendung des `integrity`-Attributs.

### Unsicherer Inline-Skript

> [!NOTE]
> Das Verbot von Inline-Stilen und Inline-Skripten ist einer der größten Sicherheitsgewinne, die CSP bietet.
> Wenn Sie diese unbedingt verwenden müssen, gibt es einige Mechanismen, die dies ermöglichen.
> Hashes gelten für Inline-Skripte und -Stile, jedoch nicht für Ereignishandler.
> Siehe [Unsichere Hashes](#unsichere_hashes) für weitere Informationen.

Um Inline-Skripte und -Stile zu erlauben, kann `'unsafe-inline'`, eine Nicht-Quelle oder eine Hash-Quelle, die mit dem Inline-Block übereinstimmt, spezifiziert werden.
Die folgende Content-Security-Policy erlaubt alle Inline-{{HTMLElement("script")}}-Elemente:

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

Das Erlauben aller Inline-Skripte wird als Sicherheitsrisiko betrachtet, daher wird empfohlen, stattdessen eine Nicht-Quelle oder eine Hash-Quelle zu verwenden. Um Inline-Skripte und -Stile mit einer Nicht-Quelle zu erlauben, müssen Sie einen zufälligen Nicht-Wert erzeugen (unter Verwendung eines kryptografisch sicheren zufälligen Token-Generators) und ihn in die Richtlinie aufnehmen.
Es ist wichtig zu beachten, dass dieser Nicht-Wert dynamisch erzeugt werden muss, da er für jede HTTP-Anfrage einzigartig sein muss:

```http
Content-Security-Policy: script-src 'nonce-2726c7f26c'
```

Dann müssen Sie denselben Nicht-Wert im {{HTMLElement("script")}}-Element einfügen:

```html
<script nonce="2726c7f26c">
  const inline = 1;
  // …
</script>
```

Alternativ können Sie Hashes aus Ihren Inline-Skripts erstellen. CSP unterstützt sha256, sha384 und sha512.

```http
Content-Security-Policy: script-src 'sha256-B2yPHKaXnvFWtRChIbabYmUBFZdVfKKXHbWtWidDVF8='
```

Beim Generieren des Hashs sollten Sie die {{HTMLElement("script")}}-Tags nicht einschließen und beachten, dass Groß-/Kleinschreibung und Leerzeichen, einschließlich führender oder nachfolgender Leerzeichen, wichtig sind.

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

Anstatt `'unsafe-inline'` zu erlauben, können Sie den `'unsafe-hashes'` Quellenwert verwenden, wenn der Code nicht zu äquivalenten [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufen aktualisiert werden kann. Gegeben eine HTML-Seite, die den folgenden Inline-Ereignishandler enthält:

```html
<!-- I want to use addEventListener, but I can't :( -->
<button onclick="myScript()">Submit</button>
```

Der folgende CSP-Header erlaubt die Ausführung des Skripts:

```http
Content-Security-Policy:  script-src 'unsafe-hashes' 'sha256-{HASHED_EVENT_HANDLER}'
```

### Unsichere eval-Ausdrücke

Der `'unsafe-eval'` Quellenwert steuert mehrere Skriptausführungsmethoden, die Code aus Zeichenfolgen erstellen.
Wenn eine Seite einen CSP-Header hat und `'unsafe-eval'` nicht mit der `script-src` Direktive angegeben ist, werden die folgenden Methoden blockiert und haben keine Wirkung:

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Function", "Function()")}}
- Beim Übergeben eines Zeichenfolgenwerts wie bei Methoden wie: `setTimeout("alert(\"Hello World!\");", 500);`

  - [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)
  - [`setInterval()`](/de/docs/Web/API/Window/setInterval)
  - [`setImmediate()`](/de/docs/Web/API/Window/setImmediate)

- `window.execScript()` {{non-standard_inline}} (nur IE < 11)

### Unsichere WebAssembly-Ausführung

Der `'wasm-unsafe-eval'` Quellenwert steuert die Ausführung von WebAssembly.
Wenn eine Seite einen CSP-Header hat und `'wasm-unsafe-eval'` in der `script-src` Direktive nicht angegeben ist, wird WebAssembly daran gehindert, auf der Seite geladen und ausgeführt zu werden.

Der `'wasm-unsafe-eval'` Quellenwert ist spezifischer als `'unsafe-eval'`, das sowohl die Kompilierung (und Instanziierung) von WebAssembly als auch beispielsweise die Verwendung der `eval`-Operation in JavaScript erlaubt.
Wenn das `'unsafe-eval'` Schlüsselwort verwendet wird, überschreibt dies jede Vorkommen von `'wasm-unsafe-eval'` in der CSP-Richtlinie.

```http
Content-Security-Policy: script-src 'wasm-unsafe-eval'
```

### strict-dynamic

Der `'strict-dynamic'` Quellenwert gibt an, dass das Vertrauen, das einem im Markup vorhandenen Skript durch die Begleitung mit einem Nicht oder einem Hash explizit gegeben wird, auf alle durch dieses Wurzelskript geladenen Skripte weitergeleitet werden soll. Gleichzeitig werden jede Positivliste oder Quellenwerte wie `'self'` oder `'unsafe-inline'` ignoriert.

Beispielsweise würde eine Richtlinie wie `script-src 'strict-dynamic' 'nonce-R4nd0m' https://allowlisted.example.com/` das Laden eines Wurzelskripts mit `<script nonce="R4nd0m" src="https://example.com/loader.js">` erlauben und dieses Vertrauen auf jedes durch `loader.js` geladene Skript übertragen, jedoch das Laden von Skripten von `https://allowlisted.example.com/` verbieten, es sei denn, sie werden von einem Nicht begleitet oder von einem vertrauenswürdigen Skript geladen.

```http
Content-Security-Policy: script-src 'strict-dynamic' 'nonce-someNonce'
```

Oder:

```http
Content-Security-Policy: script-src 'strict-dynamic' 'sha256-base64EncodedHash'
```

Es ist möglich, `strict-dynamic` in einer rückwärtskompatiblen Weise einzusetzen, ohne dass User-Agent-Erkennung erforderlich ist.
Die Richtlinie:

```http
Content-Security-Policy: script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'
```

wird sich verhalten wie `'unsafe-inline' https:` in Browsern, die CSP1 unterstützen, `https: 'nonce-abcdefg'` in Browsern, die CSP2 unterstützen, und `'nonce-abcdefg' 'strict-dynamic'` in Browsern, die CSP3 unterstützen.

### Spekulationsregeln erlauben

Um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in einem Skript-Element einzuschließen (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)), müssen Sie die `script-src` Direktive mit einer der `'inline-speculation-rules'` Quellen, einer Hash-Quelle oder einer Nicht-Quelle verwenden. Zum Beispiel:

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
