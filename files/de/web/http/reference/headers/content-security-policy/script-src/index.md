---
title: "CSP: script-src"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/script-src
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src`** Direktive gibt gültige Quellen für JavaScript an. Dies umfasst nicht nur URLs, die direkt in {{HTMLElement("script")}}-Elemente geladen werden, sondern auch Dinge wie Inline-Skriptereignis-Handler (`onclick`) und [XSLT Stylesheets](/de/docs/Web/XML/XSLT), die die Skriptausführung auslösen können.

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
      <th scope="row">{{CSP("default-src")}} Rückfall</th>
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
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einzelnen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _source expression_ Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind alle in der [Fetch-Direktivensyntax](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax) aufgeführten Quellausdrücke anwendbar.

## Beispiele

### Ressourcen aus vertrauenswürdigen Domains erlauben

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

Sie sollten sie durch [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe ersetzen:

```js
document.getElementById("btn").addEventListener("click", doSomething);
```

Wenn Sie Inline-Ereignishandler nicht ersetzen können, können Sie den Quellausdruck `'unsafe-hashes'` verwenden, um sie zu erlauben.
Sehen Sie [Unsichere Hashes](#unsichere_hashes) für weitere Informationen.

### Externe Skripte unter Verwendung von Hashes erlauben

Die Erlaubnis von vertrauenswürdigen Domains, wie im obigen Abschnitt gezeigt, ist ein pragmatischer Ansatz, um die Standorte festzulegen, von denen Code sicher geladen werden kann, insbesondere wenn Ihre Website viele Ressourcen verwendet und Sie zuversichtlich sind, dass die vertrauenswürdige Seite nicht kompromittiert wird.

Eine alternative Methode besteht darin, erlaubte Skripte mithilfe von Dateihashes anzugeben.
Bei diesem Ansatz kann eine externe Datei in einem `<script>`-Element nur dann geladen und ausgeführt werden, wenn alle gültigen Hashwerte in ihrem [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut mit den erlaubten Werten im CSP-Header übereinstimmen.
Die [Subresource-Integrität](/de/docs/Web/Security/Subresource_Integrity) überprüft zusätzlich, dass die heruntergeladene Datei den angegebenen Hashwert hat und somit nicht verändert wurde.
Dies ist sicherer als ein Domain-Vertrauen, da Dateien nur verwendet werden, wenn sie unverändert sind, selbst wenn sie von einer kompromittierten Website geladen wurden.
Es ist jedoch granularer und erfordert, dass Hashwerte in CSP- und Skriptelementen immer dann aktualisiert werden, wenn die zugehörigen Skripte geändert werden.

Der folgende CSP-Header demonstriert den Ansatz.
Er erlaubt Skripte, für die der SHA384-Hash `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` oder der SHA256-Hash `fictional_value` ist.

```http
Content-Security-Policy: script-src 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC' 'sha256-fictional_value'
```

Das `example-framework.js` Skript unten sollte geladen werden, weil der Hashwert in seinem `integrity`-Attribut auch im CSP vorhanden ist (vorausgesetzt, die Datei hat tatsächlich diesen Hash nach dem Herunterladen!).

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

Das `integrity`-Attribut kann mehrere Werte haben, von denen jeder einen Hash für die Datei bereitstellt, der mit einem anderen Algorithmus berechnet wurde.
Damit ein externes Skript geladen werden kann, erfordert CSP, dass _alle_ gültigen Hashwerte im Attribut auch in der CSP `script-src` -Deklaration enthalten sein müssen.
Deshalb würde das folgende Skript nicht geladen, weil der zweite Hash im obigen CSP-Header nicht vorhanden ist.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC sha256-not-in-csp"
  crossorigin="anonymous"></script>
```

Diese Regel gilt nur für _gültige_ Hashwerte.
Werte, die vom Browser nicht als Hashes erkannt werden, werden ignoriert, daher sollte das folgende Skript geladen werden:

```html
<script
  src="https://example.com/example-framework.js"
  integrity="invalid-or-unsupported-hash sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

[Subresource-Integrität](/de/docs/Web/Security/Subresource_Integrity) enthält weitere Informationen zu Hash-Berechnungen und der Verwendung des `integrity`-Attributs.

### Unsicheres Inline-Skript

> [!NOTE]
> Das Verbot von Inline-Stilen und Inline-Skripten ist eines der größten Sicherheitsvorteile, die CSP bietet.
> Wenn Sie sie unbedingt verwenden müssen, gibt es einige Mechanismen, die sie erlauben.
> Hashes gelten für Inline-Skripte und -Stile, aber nicht für Ereignishandler.
> Siehe [Unsichere Hashes](#unsichere_hashes) für weitere Informationen.

Um Inline-Skripte und -Stile zu erlauben, kann `'unsafe-inline'`, ein Nonce-Source oder ein Hash-Source angegeben werden, das mit dem Inline-Block übereinstimmt.
Die folgende Content Security-Policy erlaubt alle Inline-{{HTMLElement("script")}}-Elemente:

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

Das Erlauben aller Inline-Skripte wird als Sicherheitsrisiko betrachtet, es wird daher empfohlen, stattdessen einen Nonce-Source oder einen Hash-Source zu verwenden.
Um Inline-Skripte und -Stile mit einem Nonce-Source zuzulassen, müssen Sie einen zufälligen Nonce-Wert generieren (mithilfe eines kryptografisch sicheren Zufallstoken-Generators) und ihn in der Richtlinie einschließen.
Es ist wichtig zu beachten, dass dieser Nonce-Wert dynamisch generiert werden muss, da er für jede HTTP-Anfrage einzigartig sein muss:

```http
Content-Security-Policy: script-src 'nonce-2726c7f26c'
```

Dann müssen Sie denselben Nonce im {{HTMLElement("script")}}-Element einschließen:

```html
<script nonce="2726c7f26c">
  const inline = 1;
  // …
</script>
```

Alternativ können Sie Hashes aus Ihren Inline-Skripten erstellen. CSP unterstützt `sha256`, `sha384` und `sha512`.

```http
Content-Security-Policy: script-src 'sha256-B2yPHKaXnvFWtRChIbabYmUBFZdVfKKXHbWtWidDVF8='
```

Beim Generieren des Hashs schließen Sie die {{HTMLElement("script")}}-Tags nicht ein und beachten Sie, dass Groß- und Kleinschreibung sowie Leerzeichen wichtig sind, einschließlich führender oder nachfolgender Leerzeichen.

```html
<script>
  const inline = 1;
</script>
```

### Unsichere Hashes

Richtlinien für Inline-Ressourcen mit Hashes wie `script-src 'sha256-{HASHED_INLINE_SCRIPT}'` erlauben Skripte und Stile anhand ihres Hashs, jedoch nicht Ereignishandler:

```html
<!-- Allowed by CSP: script-src 'sha256-{HASHED_INLINE_SCRIPT}' -->
<script>
  const inline = 1;
</script>

<!-- CSP: script-src 'sha256-{HASHED_EVENT_HANDLER}'
      will not allow this event handler -->
<button onclick="myScript()">Submit</button>
```

Anstelle des Erlaubens von `'unsafe-inline'` können Sie den Quellausdruck `'unsafe-hashes'` verwenden, wenn der Code nicht in gleichwertige [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe aktualisiert werden kann.
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
Wenn eine Seite einen CSP-Header hat und `'unsafe-eval'` in der `script-src`-Direktive nicht angegeben ist, werden die folgenden Methoden blockiert und haben keine Wirkung:

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Function", "Function()")}}
- Bei Verwendung eines String-Literals wie bei Methoden, beispielsweise: `setTimeout("alert(\"Hello World!\");", 500);`

  - [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)
  - [`setInterval()`](/de/docs/Web/API/Window/setInterval)
  - [`setImmediate()`](/de/docs/Web/API/Window/setImmediate)

- `window.execScript()` {{non-standard_inline}} (IE < 11 nur)

### Unsichere WebAssembly-Ausführung

Der Quellausdruck `'wasm-unsafe-eval'` steuert die Ausführung von WebAssembly.
Wenn eine Seite einen CSP-Header hat und `'wasm-unsafe-eval'` in der `script-src`-Direktive nicht angegeben ist, wird WebAssembly daran gehindert, auf der Seite geladen und ausgeführt zu werden.

Der Quellausdruck `'wasm-unsafe-eval'` ist spezifischer als `'unsafe-eval'`, das sowohl die Kompilierung (und Instanziierung) von WebAssembly als auch beispielsweise die Verwendung der `eval`-Operation in JavaScript erlaubt.
Wenn das Quellenschlüsselwort `'unsafe-eval'` verwendet wird, überschreibt dies jedes Vorkommen von `'wasm-unsafe-eval'` in der CSP-Richtlinie.

```http
Content-Security-Policy: script-src 'wasm-unsafe-eval'
```

### strict-dynamic

Der Quellausdruck `'strict-dynamic'` gibt an, dass das Vertrauen, das einem im Markup vorhandenen Skript durch Begleitung mit einem Nonce oder einem Hash explizit gegeben wird, auf alle durch dieses Root-Skript geladenen Skripte übertragen wird. Gleichzeitig werden alle Erlaubnislisten oder Quellausdrücke wie `'self'` oder `'unsafe-inline'` ignoriert.

Zum Beispiel würde eine Richtlinie wie `script-src 'strict-dynamic' 'nonce-R4nd0m' https://allowlisted.example.com/` das Laden eines Root-Skripts mit `<script nonce="R4nd0m" src="https://example.com/loader.js">` erlauben und das Vertrauen an jedes von `loader.js` geladene Skript übertragen, jedoch das Laden von Skripten von `https://allowlisted.example.com/` verbieten, es sei denn, sie werden von einem Nonce begleitet oder von einem vertrauenswürdigen Skript geladen.

```http
Content-Security-Policy: script-src 'strict-dynamic' 'nonce-someNonce'
```

Oder:

```http
Content-Security-Policy: script-src 'strict-dynamic' 'sha256-base64EncodedHash'
```

Es ist möglich, `strict-dynamic` auf eine abwärtskompatible Weise zu implementieren, ohne Benutzeragenten-Erkennung zu benötigen.
Die Richtlinie:

```http
Content-Security-Policy: script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'
```

wird wie `'unsafe-inline' https:` in Browsern wirken, die CSP1 unterstützen, `https: 'nonce-abcdefg'` in Browsern, die CSP2 unterstützen, und `'nonce-abcdefg' 'strict-dynamic'` in Browsern, die CSP3 unterstützen.

### Spekulationsregeln erlauben

Um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in ein Script-Element aufzunehmen (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules)), müssen Sie die `script-src`-Direktive mit einer der Quellen `'inline-speculation-rules'`, einem Hash-Source oder einem Nonce-Source verwenden. Zum Beispiel:

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
