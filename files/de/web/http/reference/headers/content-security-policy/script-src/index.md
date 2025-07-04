---
title: "Content-Security-Policy: script-src Richtlinie"
short-title: script-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/script-src
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src`** Richtlinie gibt gültige Quellen für JavaScript an. Dies umfasst nicht nur URLs, die direkt in {{HTMLElement("script")}}-Elemente geladen werden, sondern auch Dinge wie Inline-Skript-Ereignishandler (`onclick`) und [XSLT-Stilelemente](/de/docs/Web/XML/XSLT), die Skriptausführungen auslösen können.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Richtlinientyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Richtlinie")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Ersatz</th>
      <td>
        Ja. Falls diese Richtlinie fehlt, sucht der Benutzeragent nach der
        <code>default-src</code> Richtlinie.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: script-src 'none';
Content-Security-Policy: script-src <source-expression-list>;
```

Diese Richtlinie kann einen der folgenden Werte haben:

- `'none'`
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind zwingend erforderlich.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _source expression_ Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Richtlinie sind alle der in [Fetch directive syntax](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax) aufgeführten Quellausdrücke anwendbar.

## Beispiele

### Zulassen von Ressourcen aus vertrauenswürdigen Domänen

Unter dieser CSP-Header, der nur Skripte von `https://example.com` erlaubt:

```http
Content-Security-Policy: script-src https://example.com/
```

wird das folgende Skript blockiert und kann nicht geladen oder ausgeführt werden:

```html
<script src="https://not-example.com/js/library.js"></script>
```

Beachten Sie, dass Inline-Ereignishandler ebenfalls blockiert werden:

```html
<button id="btn" onclick="doSomething()"></button>
```

Sie sollten sie durch [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) Aufrufe ersetzen:

```js
document.getElementById("btn").addEventListener("click", doSomething);
```

Wenn Sie Inline-Ereignishandler nicht ersetzen können, können Sie den Quellausdruck `'unsafe-hashes'` verwenden, um sie zuzulassen.
Siehe [Unsichere hashes](#unsichere_hashes) für weitere Informationen.

### Zulassen externer Skripte mit Hashes

Das Zulassen von vertrauenswürdigen Domänen, wie im obigen Abschnitt gezeigt, ist ein grober Ansatz, um anzugeben, von welchen Orten aus Code sicher geladen werden kann.
Dies ist ein pragmatischer Ansatz, insbesondere wenn Ihre Website viele Ressourcen verwendet und Sie das Vertrauen haben, dass die vertrauenswürdige Seite nicht kompromittiert wird.

Eine alternative Methode besteht darin, erlaubte Skripte unter Nutzung von Dateihashes anzugeben.
Mit diesem Ansatz kann eine externe Datei in einem `<script>`-Element nur geladen und ausgeführt werden, wenn alle gültigen Hash-Werte in ihrem [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut mit den im CSP-Header erlaubten Werten übereinstimmen.
Das [Subresource integrity](/de/docs/Web/Security/Subresource_Integrity) Feature überprüft zusätzlich, dass die heruntergeladene Datei den angegebenen Hash-Wert hat und somit nicht verändert wurde.
Dies ist sicherer als das Vertrauen in eine Domäne, da Dateien nur verwendet werden, wenn sie unverändert sind, selbst wenn sie von einer kompromittierten Seite geladen werden.
Es ist jedoch feiner eingestellt und erfordert, dass Hash-Werte in CSP- und Skriptelementen aktualisiert werden, wann immer die zugehörigen Skripte geändert werden.

Der folgende CSP-Header demonstriert den Ansatz.
Er erlaubt Skripte, für die der SHA384-Hash `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` oder der SHA256-Hash `fictional_value` ist.

```http
Content-Security-Policy: script-src 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC' 'sha256-fictional_value'
```

Das `example-framework.js` Skript unten sollte geladen werden, da der Hash-Wert in seinem `integrity` Attribut auch im CSP vorhanden ist (vorausgesetzt, die Datei hat tatsächlich diesen Hash, sobald sie heruntergeladen wird!)

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

Das `integrity` Attribut kann mehrere Werte haben, wobei jeder einen Hash für die Datei bereitstellt, der mit einem anderen Algorithmus berechnet wird.
Um ein externes Skript zu laden, erfordert CSP, dass _alle_ gültigen Hash-Werte im Attribut auch in der `script-src` Deklaration des CSP vorhanden sein müssen.
Daher würde das folgende Skript nicht geladen, da der zweite Hash im CSP-Header oben nicht vorhanden ist.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC sha256-not-in-csp"
  crossorigin="anonymous"></script>
```

Diese Regel gilt nur für _gültige_ Hash-Werte.
Werte, die vom Browser nicht als Hashes erkannt werden, werden ignoriert, daher sollte das folgende Skript geladen werden:

```html
<script
  src="https://example.com/example-framework.js"
  integrity="invalid-or-unsupported-hash sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

[Subresource integrity](/de/docs/Web/Security/Subresource_Integrity) enthält mehr Informationen über das Berechnen von Hashes und die Verwendung des `integrity` Attributs.

### Unsichere Inline-Skripte

> [!NOTE]
> Das Verbot von Inline-Stilen und Inline-Skripten ist einer der größten Sicherheitsgewinne von CSP.
> Wenn Sie diese absolut verwenden müssen, gibt es einige Mechanismen, die sie erlauben.
> Hashes gelten für Inline-Skripte und Stile, aber nicht für Ereignishandler.
> Siehe [Unsichere hashes](#unsichere_hashes) für mehr Informationen.

Um Inline-Skripte und Stile zu erlauben, können `'unsafe-inline'`, eine nonce-source oder eine hash-source, die mit dem Inline-Block übereinstimmt, angegeben werden.
Die folgende Content Security Policy wird alle Inline-{{HTMLElement("script")}}-Elemente erlauben:

```http
Content-Security-Policy: script-src 'unsafe-inline';
```

Das folgende {{HTMLElement("script")}}-Element wird von der Richtlinie zugelassen:

```html
<script>
  const inline = 1;
  // …
</script>
```

Das Zulassen aller Inline-Skripte wird als Sicherheitsrisiko betrachtet, daher wird empfohlen, stattdessen eine nonce-source oder eine hash-source zu verwenden.
Um Inline-Skripte und Stile mit einer nonce-source zu erlauben, müssen Sie einen zufälligen nonce-Wert (unter Verwendung eines kryptographisch sicheren, zufälligen Token-Generators) generieren und diesen in die Richtlinie einfügen.
Es ist wichtig zu beachten, dass dieser nonce-Wert dynamisch generiert werden muss, da er für jede HTTP-Anfrage einzigartig sein muss:

```http
Content-Security-Policy: script-src 'nonce-2726c7f26c'
```

Dann müssen Sie denselben nonce in das {{HTMLElement("script")}}-Element einfügen:

```html
<script nonce="2726c7f26c">
  const inline = 1;
  // …
</script>
```

Alternativ können Sie Hashes von Ihren Inline-Skripten erstellen. CSP unterstützt sha256, sha384 und sha512.

```http
Content-Security-Policy: script-src 'sha256-B2yPHKaXnvFWtRChIbabYmUBFZdVfKKXHbWtWidDVF8='
```

Beim Erstellen des Hashes, schließen Sie die {{HTMLElement("script")}}-Tags nicht ein und beachten Sie, dass Groß-/Kleinschreibung und Leerzeichen, einschließlich führenden oder nachstehenden Leerzeichen, entscheidend sind.

```html
<script>
  const inline = 1;
</script>
```

### Unsichere Hashes

Richtlinien für Inline-Ressourcen mit Hashes wie `script-src 'sha256-{HASHED_INLINE_SCRIPT}'` erlauben Skripte und Stile durch ihren Hash, jedoch keine Ereignishandler:

```html
<!-- Allowed by CSP: script-src 'sha256-{HASHED_INLINE_SCRIPT}' -->
<script>
  const inline = 1;
</script>

<!-- CSP: script-src 'sha256-{HASHED_EVENT_HANDLER}'
      will not allow this event handler -->
<button onclick="myScript()">Submit</button>
```

Anstelle von `'unsafe-inline'` können Sie den `'unsafe-hashes'` Quellausdruck verwenden, wenn der Code nicht in äquivalente [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) Aufrufe geändert werden kann.
Für eine HTML-Seite, die den folgenden Inline-Ereignishandler enthält:

```html
<!-- I want to use addEventListener, but I can't :( -->
<button onclick="myScript()">Submit</button>
```

Wird der folgende CSP-Header das Skript ausführen lassen:

```http
Content-Security-Policy:  script-src 'unsafe-hashes' 'sha256-{HASHED_EVENT_HANDLER}'
```

### Unsichere eval-Ausdrücke

Der `'unsafe-eval'` Quellausdruck steuert mehrere Methoden zur Skriptausführung, die Code aus Zeichenfolgen erstellen.
Wenn eine Seite einen CSP-Header hat und `'unsafe-eval'` nicht mit der `script-src`-Richtlinie angegeben ist, werden die folgenden Methoden blockiert und haben keine Wirkung:

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Function", "Function()")}}
- Beim Übergeben von Zeichenfolgenliteralen an Methoden wie: `setTimeout("alert(\"Hello World!\");", 500);`
  - [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)
  - [`setInterval()`](/de/docs/Web/API/Window/setInterval)
  - [`setImmediate()`](/de/docs/Web/API/Window/setImmediate)

- `window.execScript()` {{non-standard_inline}} (nur IE < 11)

### Unsichere WebAssembly-Ausführung

Der `'wasm-unsafe-eval'` Quellausdruck steuert die Ausführung von WebAssembly.
Wenn eine Seite einen CSP-Header hat und `'wasm-unsafe-eval'` nicht in der `script-src`-Richtlinie angegeben ist, wird WebAssembly daran gehindert, auf der Seite geladen und ausgeführt zu werden.

Der `'wasm-unsafe-eval'` Quellausdruck ist spezifischer als `'unsafe-eval'`, welches sowohl die Kompilierung (und Instanziierung) von WebAssembly als auch beispielsweise die Verwendung der `eval`-Operation in JavaScript erlaubt.
Wenn das `'unsafe-eval'` Quellenschlüsselwort verwendet wird, überschreibt dieses jede Vorkommen von `'wasm-unsafe-eval'` in der CSP-Richtlinie.

```http
Content-Security-Policy: script-src 'wasm-unsafe-eval'
```

### strict-dynamic

Der `'strict-dynamic'` Quellausdruck spezifiziert, dass das Vertrauen, das einem im Markup vorhandenen Skript durch Hinzufügen eines nonce oder eines Hashs explizit gegeben wird, auf alle von diesem Wurzelskript geladenen Skripte übertragen werden soll. Gleichzeitig werden alle Whitelist-Ausdrücke oder Quellausdrücke wie `'self'` oder `'unsafe-inline'` ignoriert.

Beispielsweise würde eine Richtlinie wie `script-src 'strict-dynamic' 'nonce-R4nd0m' https://allowlisted.example.com/` das Laden eines Wurzelskripts mit `<script nonce="R4nd0m" src="https://example.com/loader.js">` erlauben und diese Vertrauensstellung auf jedes von `loader.js` geladene Skript übertragen, aber das Laden von Skripten von `https://allowlisted.example.com/` untersagen, es sei denn, sie werden von einem nonce begleitet oder von einem vertrauenswürdigen Skript geladen.

```http
Content-Security-Policy: script-src 'strict-dynamic' 'nonce-someNonce'
```

Oder:

```http
Content-Security-Policy: script-src 'strict-dynamic' 'sha256-base64EncodedHash'
```

Es ist möglich, `strict-dynamic` in einer rückwärtskompatiblen Weise zu implementieren, ohne Nutzeragentenerkennung zu erfordern.
Die Richtlinie:

```http
Content-Security-Policy: script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'
```

wird sich in Browsern, die CSP1 unterstützen, wie `'unsafe-inline' https:` verhalten, `https: 'nonce-abcdefg'` in Browsern, die CSP2 unterstützen, und `'nonce-abcdefg' 'strict-dynamic'` in Browsern, die CSP3 unterstützen.

### Zulassen von Spekulationsregeln

Um [speculation rules](/de/docs/Web/API/Speculation_Rules_API) in einem Skriptelement aufzunehmen (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules)), müssen Sie die `script-src`-Richtlinie mit einem der `'inline-speculation-rules'`-Quellen, eines hash-source oder nonce-source verwenden. Zum Beispiel:

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
