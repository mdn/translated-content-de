---
title: "CSP: script-src"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{HTTPSidebar}}

Die HTTP-Direktive {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src`** bestimmt gültige Quellen für JavaScript. Dies schließt nicht nur URLs ein, die direkt in {{HTMLElement("script")}}-Elemente geladen werden, sondern auch Dinge wie inline Skript-Ereignis-Handler (`onclick`) und [XSLT-Stilvorlagen](/de/docs/Web/XML/XSLT), die Skriptausführungen auslösen können.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Richtlinientyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Rückgriff</th>
      <td>
        Ja. Wenn diese Direktive fehlt, sucht der User-Agent nach der
        <code>default-src</code>-Richtlinie.
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

  - : Eine durch Leerzeichen getrennte Liste von _Quellausdrücken_. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind alle Quellausdruckswerte zulässig, die in der [Fetch directive syntax](/de/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directive_syntax) aufgeführt sind.

## Beispiele

### Ressourcen aus vertrauenswürdigen Domains zulassen

Gegeben ist diese CSP-Header-Konfiguration, die nur Skripte von `https://example.com` erlaubt:

```http
Content-Security-Policy: script-src https://example.com/
```

Das folgende Skript wird blockiert und nicht geladen oder ausgeführt:

```html
<script src="https://not-example.com/js/library.js"></script>
```

Beachten Sie, dass auch inline Ereignis-Handler blockiert werden:

```html
<button id="btn" onclick="doSomething()"></button>
```

Sie sollten diese durch [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe ersetzen:

```js
document.getElementById("btn").addEventListener("click", doSomething);
```

Wenn Sie inline Ereignis-Handler nicht ersetzen können, können Sie den Quellausdruck `'unsafe-hashes'` verwenden, um sie zuzulassen.
Weitere Informationen finden Sie unter [Unsichere Hashes](#unsichere_hashes).

### Externe Skripte mit Hashes zulassen

Das Zulassen vertrauenswürdiger Domains, wie im vorherigen Abschnitt beschrieben, ist ein pauschaler Ansatz, um die Standorte anzugeben, von denen sicherer Code geladen werden kann.
Dies ist ein pragmatischer Ansatz, insbesondere wenn Ihre Website viele Ressourcen verwendet und Sie darauf vertrauen, dass die vertrauenswürdige Seite nicht kompromittiert wird.

Eine alternative Methode besteht darin, zulässige Skripte anhand von Dateihashes zu spezifizieren.
Bei diesem Ansatz kann eine externe Datei in einem `<script>`-Element nur geladen und ausgeführt werden, wenn alle gültigen Hash-Werte im [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attribut den zulässigen Werten im CSP-Header entsprechen.
Die Funktion [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) überprüft zusätzlich, ob die heruntergeladene Datei den angegebenen Hash-Wert hat und somit nicht modifiziert wurde.
Dies ist sicherer, als einer Domain zu vertrauen, da Dateien nur verwendet werden, wenn sie unverändert sind, selbst wenn sie von einer kompromittierten Seite geladen werden.
Es ist jedoch granularer und erfordert, dass Hash-Werte bei Änderungen der zugehörigen Skripte sowohl im CSP als auch in Skriptelementen aktualisiert werden.

Die folgende CSP-Header-Konfiguration demonstriert den Ansatz.
Sie erlaubt Skripte, deren SHA384-Hash `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` oder SHA256-Hash `fictional_value` ist.

```http
Content-Security-Policy: script-src 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC' 'sha256-fictional_value'
```

Das folgende `example-framework.js`-Skript sollte geladen werden, weil der Hash-Wert im `integrity`-Attribut auch im CSP enthalten ist (vorausgesetzt, die Datei hat tatsächlich diesen Hash nach dem Herunterladen!):

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

Das `integrity`-Attribut kann mehrere Werte enthalten, wobei jeder einen Hash für die Datei angibt, der mit einem anderen Algorithmus berechnet wurde.
Damit ein externes Skript geladen wird, muss CSP verlangen, dass _alle_ gültigen Hash-Werte im Attribut auch in der `script-src`-Deklaration des CSP enthalten sind.
Das folgende Skript würde daher nicht geladen, da der zweite Hash im obigen CSP-Header fehlt:

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

[Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) enthält weitere Informationen zur Berechnung von Hashes und zur Verwendung des `integrity`-Attributs.

### Unsicheres Inline-Skript

> [!NOTE]
> Das Unterbinden von Inline-Stilen und Inline-Skripten ist einer der größten Sicherheitsbenefits, den CSP bietet.
> Wenn Sie diese unbedingt verwenden müssen, gibt es einige Mechanismen, die dies erlauben.
> Hashes gelten für Inline-Skripte und -Stile, jedoch nicht für Ereignis-Handler.
> Weitere Informationen finden Sie unter [Unsichere Hashes](#unsichere_hashes).

Um Inline-Skripte und -Stile zuzulassen, können `'unsafe-inline'`, eine Nonce-Quelle oder eine Hash-Quelle verwendet werden, die mit dem Inline-Block übereinstimmt.
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

Das Zulassen aller Inline-Skripte wird als Sicherheitsrisiko angesehen, daher wird empfohlen, stattdessen eine Nonce-Quelle oder eine Hash-Quelle zu verwenden.
Um Inline-Skripte und -Stile mit einer Nonce-Quelle zuzulassen, müssen Sie einen zufälligen Nonce-Wert generieren (mithilfe eines kryptografisch sicheren Zufalls-Token-Generators) und ihn in die Richtlinie aufnehmen.
Es ist wichtig zu beachten, dass dieser Nonce-Wert dynamisch generiert werden muss, da er für jede HTTP-Anfrage eindeutig sein muss:

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

Beim Generieren des Hashes schließen Sie die {{HTMLElement("script")}}-Tags aus und beachten Sie, dass Groß-/Kleinschreibung und Leerzeichen wichtig sind, einschließlich führender oder nachfolgender Leerzeichen.

```html
<script>
  const inline = 1;
</script>
```

### Unsichere Hashes

Richtlinien für Inline-Ressourcen mit Hashes wie `script-src 'sha256-{HASHED_INLINE_SCRIPT}'` erlauben Skripte und Stile durch ihren Hash, jedoch nicht Ereignis-Handler:

```html
<!-- Allowed by CSP: script-src 'sha256-{HASHED_INLINE_SCRIPT}' -->
<script>
  const inline = 1;
</script>

<!-- CSP: script-src 'sha256-{HASHED_EVENT_HANDLER}'
      will not allow this event handler -->
<button onclick="myScript()">Submit</button>
```

Anstatt `'unsafe-inline'` zuzulassen, können Sie den Quellausdruck `'unsafe-hashes'` verwenden, wenn Code nicht in entsprechende [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe umgewandelt werden kann.
Gegeben ist eine HTML-Seite, die den folgenden Inline-Ereignis-Handler enthält:

```html
<!-- I want to use addEventListener, but I can't :( -->
<button onclick="myScript()">Submit</button>
```

Der folgende CSP-Header erlaubt die Ausführung des Skriptes:

```http
Content-Security-Policy:  script-src 'unsafe-hashes' 'sha256-{HASHED_EVENT_HANDLER}'
```

### Unsichere eval-Ausdrücke

Der Quellausdruck `'unsafe-eval'` steuert mehrere Methoden zur Skriptausführung, die Code aus Zeichenfolgen erstellen.
Wenn eine Seite einen CSP-Header enthält und `'unsafe-eval'` nicht mit der `script-src`-Direktive angegeben ist, werden die folgenden Methoden blockiert und haben keine Wirkung:

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Function", "Function()")}}
- Wenn ein Zeichenfolgenliteral an Methoden übergeben wird wie: `setTimeout("alert(\"Hello World!\");", 500);`

  - [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)
  - [`setInterval()`](/de/docs/Web/API/Window/setInterval)
  - [`setImmediate()`](/de/docs/Web/API/Window/setImmediate)

- `window.execScript()` {{non-standard_inline}} (nur IE < 11)

### Unsichere WebAssembly-Ausführung

Der Quellausdruck `'wasm-unsafe-eval'` steuert die Ausführung von WebAssembly.
Wenn eine Seite einen CSP-Header enthält und `'wasm-unsafe-eval'` nicht in der `script-src`-Direktive angegeben ist, wird verhindert, dass WebAssembly auf der Seite geladen und ausgeführt wird.

Der Quellausdruck `'wasm-unsafe-eval'` ist spezifischer als `'unsafe-eval'`, welches sowohl die Kompilierung (und Instanziierung) von WebAssembly als auch beispielsweise die Nutzung der `eval`-Operation in JavaScript ermöglicht.
Wenn das Schlüsselwort `'unsafe-eval'` verwendet wird, überschreibt dies jede Verwendung von `'wasm-unsafe-eval'` in der CSP-Richtlinie.

```http
Content-Security-Policy: script-src 'wasm-unsafe-eval'
```

### strict-dynamic

Der Quellausdruck `'strict-dynamic'` legt fest, dass das explizit einem Skript im Markup verliehene Vertrauen, indem es mit einer Nonce oder einem Hash versehen wird, auf alle von diesem Root-Skript geladenen Skripte übertragen werden soll. Gleichzeitig werden alle Whitelists oder Quellausdrücke wie `'self'` oder `'unsafe-inline'` ignoriert.

Ein Beispiel für eine Richtlinie wie `script-src 'strict-dynamic' 'nonce-R4nd0m' https://allowlisted.example.com/` würde das Laden eines Root-Skripts mit `<script nonce="R4nd0m" src="https://example.com/loader.js">` sowie aller von `loader.js` geladenen Skripte erlauben, aber das Laden von Skripten von `https://allowlisted.example.com/` nur zulassen, wenn sie von einer Nonce begleitet oder von einem vertrauenswürdigen Skript geladen werden.

```http
Content-Security-Policy: script-src 'strict-dynamic' 'nonce-someNonce'
```

Oder:

```http
Content-Security-Policy: script-src 'strict-dynamic' 'sha256-base64EncodedHash'
```

Es ist möglich, `'strict-dynamic'` auf eine abwärtskompatible Weise einzusetzen, ohne Benutzer-Agent-Überprüfungen zu benötigen.
Die Richtlinie:

```http
Content-Security-Policy: script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'
```

wird wie `'unsafe-inline' https:` in Browsern fungieren, die CSP1 unterstützen, `https: 'nonce-abcdefg'` in Browsern, die CSP2 unterstützen, und `'nonce-abcdefg' 'strict-dynamic'` in Browsern, die CSP3 unterstützen.

### Spekulationsregeln erlauben

Um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in einem Skriptelement einzuschließen (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)), müssen Sie die `script-src`-Direktive mit `'inline-speculation-rules'`, einem Hash-Quelle oder einer Nonce-Quelle verwenden. Zum Beispiel:

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
