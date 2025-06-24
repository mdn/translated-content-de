---
title: "Content-Security-Policy: Direktive `script-src`"
short-title: script-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/script-src
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

Die HTTP-Direktive **`script-src`** im {{HTTPHeader("Content-Security-Policy")}} (CSP) legt gültige Quellen für JavaScript fest. Dies betrifft nicht nur URLs, die direkt in {{HTMLElement("script")}}-Elemente geladen werden, sondern auch Dinge wie eingebettete Skriptereignishandler (`onclick`) und [XSLT-Stylesheets](/de/docs/Web/XML/XSLT), die Skriptausführung auslösen können.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktiventyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Direktive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Direktive fehlt, wird der Benutzeragent nach der
        <code>default-src</code>-Direktive suchen.
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
  - : Eine durch Leerzeichen getrennte Liste von _source expression_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind alle in der [Fetch-Direktiven-Syntax](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax) aufgeführten Quellausdrücke anwendbar.

## Beispiele

### Ressourcen von vertrauenswürdigen Domains erlauben

Angenommen, dieser CSP-Header erlaubt nur Skripte von `https://example.com`:

```http
Content-Security-Policy: script-src https://example.com/
```

Das folgende Skript wird blockiert und weder geladen noch ausgeführt:

```html
<script src="https://not-example.com/js/library.js"></script>
```

Beachten Sie, dass auch eingebettete Ereignishandler blockiert werden:

```html
<button id="btn" onclick="doSomething()"></button>
```

Sie sollten diese durch [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe ersetzen:

```js
document.getElementById("btn").addEventListener("click", doSomething);
```

Wenn Sie eingebettete Ereignishandler nicht ersetzen können, können Sie den Quellausdruck `'unsafe-hashes'` verwenden, um sie zuzulassen.
Siehe [Unsichere Hashes](#unsichere_hashes) für weitere Informationen.

### Externe Skripte mit Hashes erlauben

Das Zulassen vertrauenswürdiger Domains, wie im obigen Abschnitt gezeigt, ist ein umfassender Ansatz für die Angabe der Orte, von denen sicherer Code geladen werden kann.
Dies ist ein pragmatischer Ansatz, insbesondere wenn Ihre Website viele Ressourcen verwendet und Sie sicher sind, dass die vertrauenswürdige Seite nicht kompromittiert wird.

Eine alternative Methode ist die Angabe erlaubter Skripte mit Dateihashes.
Bei diesem Ansatz kann eine externe Datei in einem `<script>`-Element nur geladen und ausgeführt werden, wenn alle gültigen Hashwerte in ihrem [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut mit den erlaubten Werten im CSP-Header übereinstimmen.
Das [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Feature prüft zusätzlich, ob die heruntergeladene Datei den angegebenen Hashwert hat und daher nicht verändert wurde.
Dies ist sicherer als das Vertrauen auf eine Domain, da Dateien nur verwendet werden, wenn sie unverändert sind, selbst wenn sie von einer kompromittierten Seite geladen werden.
Es ist jedoch detaillierter und erfordert, dass Hashwerte in den CSP- und Skript-Elementen aktualisiert werden, wann immer die zugehörigen Skripte geändert werden.

Der nachstehende CSP-Header zeigt den Ansatz.
Er erlaubt Skripte, für die der SHA384-Hash `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` oder der SHA256-Hash `fictional_value` ist.

```http
Content-Security-Policy: script-src 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC' 'sha256-fictional_value'
```

Das untenstehende Skript `example-framework.js` sollte geladen werden, da der Hashwert in seinem `integrity`-Attribut auch im CSP vorhanden ist (vorausgesetzt, die Datei hat beim Herunterladen tatsächlich diesen Hash!).

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

Das `integrity`-Attribut kann mehrere Werte haben, wobei jeder einen Hash für die Datei bereitstellt, der mit einem anderen Algorithmus berechnet wurde.
Damit ein externes Skript geladen wird, erfordert CSP, dass _alle_ gültigen Hashwerte im Attribut auch in der CSP `script-src`-Deklaration vorhanden sein müssen.
Daher würde das untenstehende Skript nicht geladen, da der zweite Hash im obigen CSP-Header nicht vorhanden ist.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC sha256-not-in-csp"
  crossorigin="anonymous"></script>
```

Diese Regel gilt nur für _gültige_ Hashwerte.
Vom Browser nicht als Hashes erkannte Werte werden ignoriert, sodass das folgende Skript geladen werden sollte:

```html
<script
  src="https://example.com/example-framework.js"
  integrity="invalid-or-unsupported-hash sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

[Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) enthält weitere Informationen zum Berechnen von Hashes und zur Verwendung des `integrity`-Attributs.

### Unsicheres eingebettetes Skript

> [!NOTE]
> Das Verbot von eingebetteten Stilen und eingebetteten Skripten ist einer der größten Sicherheitsgewinne, die CSP bietet.
> Wenn Sie sie unbedingt verwenden müssen, gibt es einige Mechanismen, die sie erlauben.
> Hashes gelten für eingebettete Skripte und Stile, jedoch nicht für Ereignishandler.
> Siehe [Unsichere Hashes](#unsichere_hashes) für weitere Informationen.

Um eingebettete Skripte und Stile zu erlauben, kann `'unsafe-inline'`, eine Nonce-Quelle oder eine Hash-Quelle angegeben werden, die mit dem eingebetteten Block übereinstimmt.
Die folgende Content-Security-Policy erlaubt alle eingebetteten {{HTMLElement("script")}}-Elemente:

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

Das Erlauben aller eingebetteten Skripte wird als Sicherheitsrisiko betrachtet, daher wird empfohlen, stattdessen eine Nonce-Quelle oder eine Hash-Quelle zu verwenden.
Um eingebettete Skripte und Stile mit einer Nonce-Quelle zu erlauben, müssen Sie einen zufälligen Nonce-Wert (unter Verwendung eines kryptografisch sicheren Zufallstoken-Generators) erzeugen und in der Richtlinie aufnehmen.
Es ist wichtig, zu beachten, dass dieser Nonce-Wert dynamisch generiert werden muss, da er für jede HTTP-Anfrage einzigartig sein muss:

```http
Content-Security-Policy: script-src 'nonce-2726c7f26c'
```

Dann müssen Sie denselben Nonce in das {{HTMLElement("script")}}-Element einfügen:

```html
<script nonce="2726c7f26c">
  const inline = 1;
  // …
</script>
```

Alternativ können Sie Hashes aus Ihren eingebetteten Skripten erstellen. CSP unterstützt sha256, sha384 und sha512.

```http
Content-Security-Policy: script-src 'sha256-B2yPHKaXnvFWtRChIbabYmUBFZdVfKKXHbWtWidDVF8='
```

Beim Erzeugen des Hashes dürfen die {{HTMLElement("script")}}-Tags nicht einbezogen werden, und es ist zu beachten, dass Groß-/Kleinschreibung und Leerzeichen bedeutsam sind, einschließlich führender oder nachfolgender Leerzeichen.

```html
<script>
  const inline = 1;
</script>
```

### Unsichere Hashes

Richtlinien für eingebettete Ressourcen mit Hashes wie `script-src 'sha256-{HASHED_INLINE_SCRIPT}'` erlauben Skripte und Stile anhand ihres Hashs, jedoch keine Ereignishandler:

```html
<!-- Allowed by CSP: script-src 'sha256-{HASHED_INLINE_SCRIPT}' -->
<script>
  const inline = 1;
</script>

<!-- CSP: script-src 'sha256-{HASHED_EVENT_HANDLER}'
      will not allow this event handler -->
<button onclick="myScript()">Submit</button>
```

Statt `'unsafe-inline'` zu erlauben, können Sie den Quellausdruck `'unsafe-hashes'` verwenden, wenn der Code nicht auf gleichwertige [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe aktualisiert werden kann.
Angenommen, eine HTML-Seite enthält den folgenden eingebetteten Ereignishandler:

```html
<!-- I want to use addEventListener, but I can't :( -->
<button onclick="myScript()">Submit</button>
```

Der folgende CSP-Header erlaubt die Ausführung des Skripts:

```http
Content-Security-Policy:  script-src 'unsafe-hashes' 'sha256-{HASHED_EVENT_HANDLER}'
```

### Unsichere Eval-Ausdrücke

Der Quellausdruck `'unsafe-eval'` steuert mehrere Skriptausführungsmethoden, die Code aus Zeichenfolgen erstellen.
Wenn eine Seite einen CSP-Header hat und `'unsafe-eval'` nicht mit der `script-src`-Direktive angegeben ist, werden die folgenden Methoden blockiert und haben keine Wirkung:

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Function", "Function()")}}
- Bei Übergabe eines Zeichenfolgenliterals an Methoden wie: `setTimeout("alert(\"Hallo Welt!\");", 500);`

  - [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)
  - [`setInterval()`](/de/docs/Web/API/Window/setInterval)
  - [`setImmediate()`](/de/docs/Web/API/Window/setImmediate)

- `window.execScript()` {{non-standard_inline}} (nur IE < 11)

### Unsichere WebAssembly-Ausführung

Der Quellausdruck `'wasm-unsafe-eval'` steuert die WebAssembly-Ausführung.
Wenn eine Seite einen CSP-Header hat und `'wasm-unsafe-eval'` nicht in der `script-src`-Direktive angegeben ist, wird das Laden und Ausführen von WebAssembly auf der Seite blockiert.

Der Quellausdruck `'wasm-unsafe-eval'` ist spezifischer als `'unsafe-eval'`, welches sowohl die Kompilierung (und Instanziierung) von WebAssembly als auch z.B. die Verwendung der `eval`-Operation in JavaScript erlaubt.
Wird das Quellschlüsselwort `'unsafe-eval'` verwendet, überschreibt dies jedes Vorkommen von `'wasm-unsafe-eval'` in der CSP-Richtlinie.

```http
Content-Security-Policy: script-src 'wasm-unsafe-eval'
```

### strict-dynamic

Der Quellausdruck `'strict-dynamic'` gibt an, dass das ausdrücklich einem in der Markup vorhandenen Skript gegebene Vertrauen, indem es mit einer Nonce oder einem Hash versehen wird, auf alle Skripte, die von diesem Wurzelskript geladen werden, übertragen wird. Gleichzeitig werden alle Whitelists oder Quellausdrücke wie `'self'` oder `'unsafe-inline'` ignoriert.

Zum Beispiel würde eine Richtlinie wie `script-src 'strict-dynamic' 'nonce-R4nd0m' https://allowlisted.example.com/` das Laden eines Wurzelskripts mit `<script nonce="R4nd0m" src="https://example.com/loader.js">` erlauben und dieses Vertrauen auf jedes von `loader.js` geladene Skript übertragen, jedoch das Laden von Skripten von `https://allowlisted.example.com/` verbieten, es sei denn, es wird mit einer Nonce begleitet oder von einem vertrauenswürdigen Skript geladen.

```http
Content-Security-Policy: script-src 'strict-dynamic' 'nonce-someNonce'
```

Oder:

```http
Content-Security-Policy: script-src 'strict-dynamic' 'sha256-base64EncodedHash'
```

Es ist möglich, `strict-dynamic` auf rückwärtskompatible Weise bereitzustellen, ohne ein User-Agent-Sniffing zu erfordern.
Die Richtlinie:

```http
Content-Security-Policy: script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'
```

wird wie `'unsafe-inline' https:` in Browsern, die CSP1 unterstützen, `https: 'nonce-abcdefg'` in Browsern, die CSP2 unterstützen, und `'nonce-abcdefg' 'strict-dynamic'` in Browsern, die CSP3 unterstützen, funktionieren.

### Zulassung von Spekulationsregeln

Um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in ein Skriptelement aufzunehmen (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules)), müssen Sie die `script-src`-Direktive mit einem der `'inline-speculation-rules'`-Quellen, einer Hash-Quelle oder einer Nonce-Quelle verwenden. Zum Beispiel:

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
