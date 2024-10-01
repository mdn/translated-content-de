---
title: "CSP: script-src"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src
l10n:
  sourceCommit: bca6332a9b752ba195f544e115ada4bff76bc822
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src`** Direktive legt zulässige Quellen für JavaScript fest. Dies umfasst nicht nur direkt in {{HTMLElement("script")}} Elemente geladene URLs, sondern auch Inline-Skript-Ereignis-Handler (`onclick`) und [XSLT-Stile](/de/docs/Web/XSLT), die Script-Ausführung auslösen können.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch directive")}}</td>
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

Eine oder mehrere Quellen können für die `script-src` Richtlinie zugelassen werden:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src <source> <source>;
```

### Quellen

`<source>` kann einer der in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgelisteten Werte sein.

Beachten Sie, dass dieses gleiche Set von Werten in allen {{Glossary("fetch_directive", "Fetch-Direktiven")}} (und einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Erlauben von Ressourcen aus vertrauenswürdigen Domains

Gegeben ist dieser CSP-Header, der nur Skripte von `https://example.com` erlaubt:

```http
Content-Security-Policy: script-src https://example.com/
```

wird das folgende Skript blockiert und nicht geladen oder ausgeführt:

```html
<script src="https://not-example.com/js/library.js"></script>
```

Beachten Sie, dass auch Inline-Ereignis-Handler blockiert sind:

```html
<button id="btn" onclick="doSomething()"></button>
```

Sie sollten diese durch [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe ersetzen:

```js
document.getElementById("btn").addEventListener("click", doSomething);
```

Wenn Sie Inline-Ereignis-Handler nicht ersetzen können, können Sie den `'unsafe-hashes'` Quellenausdruck verwenden, um sie zuzulassen.
Siehe [Unsichere Hashes](#unsichere_hashes) für mehr Informationen.

### Erlauben externer Skripte mit Hashes

Das Erlauben von vertrauenswürdigen Domains, wie im obigen Abschnitt gezeigt, ist ein breit angelegter Ansatz, um die Orte anzugeben, von denen Code sicher geladen werden kann.
Dies ist ein pragmatischer Ansatz, insbesondere wenn Ihre Website viele Ressourcen nutzt und Sie darauf vertrauen, dass die vertrauenswürdige Site nicht kompromittiert wird.

Eine alternative Methode ist es, erlaubte Skripte mit Dateihashes anzugeben.
Mit diesem Ansatz kann eine externe Datei in einem `<script>` Element nur geladen und ausgeführt werden, wenn alle gültigen Hash-Werte in ihrem [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attribut mit den erlaubten Werten im CSP-Header übereinstimmen.
Das [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Feature prüft zusätzlich, ob die heruntergeladene Datei den angegebenen Hash-Wert besitzt und somit nicht verändert wurde.
Dies ist sicherer als das Vertrauen in eine Domain, da Dateien nur verwendet werden, wenn sie unverändert sind, selbst wenn sie von einer kompromittierten Seite geladen werden.
Es ist jedoch granularer und erfordert, dass Hash-Werte in CSP- und Skriptelementen aktualisiert werden, wann immer die zugehörigen Skripte geändert werden.

Der unten stehende CSP-Header demonstriert den Ansatz.
Er erlaubt Skripte, für die der SHA384-Hash `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` oder der SHA256-Hash `fictional_value` ist.

```http
Content-Security-Policy: script-src 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC' 'sha256-fictional_value'
```

Das `example-framework.js` Skript unten sollte geladen werden, weil der Hash-Wert in seinem `integrity` Attribut auch im CSP vorhanden ist (vorausgesetzt, die Datei hat tatsächlich diesen Hash, sobald sie heruntergeladen wird!)

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

Das `integrity` Attribut kann mehrere Werte haben, von denen jeder einen Hash für die Datei angibt, der mit einem anderen Algorithmus berechnet wurde.
Damit ein externes Skript geladen wird, verlangt CSP, dass _alle_ gültigen Hash-Werte im Attribut auch in der CSP `script-src` Deklaration enthalten sein müssen.
Daher würde das Skript unten nicht geladen, da der zweite Hash im obigen CSP-Header nicht vorhanden ist.

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

[Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) enthält weitere Informationen zum Berechnen von Hashes und zum Verwenden des `integrity` Attributs.

### Unsicheres Inline-Skript

> [!NOTE]
> Das Untersagen von Inline-Stilen und Inline-Skripten ist einer der größten Sicherheitsgewinne, die CSP bietet.
> Wenn Sie sie unbedingt verwenden müssen, gibt es einige Mechanismen, die sie zulassen.
> Hashes gelten für Inline-Skripte und -Stile, nicht jedoch für Ereignis-Handler.
> Siehe [Unsichere Hashes](#unsichere_hashes) für weitere Informationen.

Um Inline-Skripte und -Stile zuzulassen, kann `'unsafe-inline'`, eine Nonce-Quelle oder eine Hash-Quelle angegeben werden, die dem Inline-Block entspricht.
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
Um Inline-Skripte und -Stile mit einer Nonce-Quelle zuzulassen, müssen Sie einen zufälligen Nonce-Wert generieren (unter Verwendung eines kryptografisch sicheren Zufallstoken-Generators) und ihn in die Richtlinie aufnehmen.
Es ist wichtig zu beachten, dass dieser Nonce-Wert dynamisch generiert werden muss, da er für jede HTTP-Anfrage einzigartig sein muss:

```http
Content-Security-Policy: script-src 'nonce-2726c7f26c'
```

Dann müssen Sie denselben Nonce im {{HTMLElement("script")}} Element einschließen:

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

Beim Generieren des Hashes, schließen Sie die {{HTMLElement("script")}} Tags nicht ein und beachten Sie, dass Groß- und Kleinschreibung sowie Leerzeichen, einschließlich führender oder nachfolgender Leerzeichen, eine Rolle spielen.

```html
<script>
  const inline = 1;
</script>
```

### Unsichere Hashes

Richtlinien für Inline-Ressourcen mit Hashes wie `script-src 'sha256-{HASHED_INLINE_SCRIPT}'` erlauben Skripte und Stile durch ihren Hash, aber nicht Ereignis-Handler:

```html
<!-- Allowed by CSP: script-src 'sha256-{HASHED_INLINE_SCRIPT}' -->
<script>
  const inline = 1;
</script>

<!-- CSP: script-src 'sha256-{HASHED_EVENT_HANDLER}'
      will not allow this event handler -->
<button onclick="myScript()">Submit</button>
```

Anstatt `'unsafe-inline'` zuzulassen, können Sie den `'unsafe-hashes'` Quellenausdruck verwenden, wenn der Code nicht in gleichwertige [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) Aufrufe aktualisiert werden kann.
Gegeben ist eine HTML-Seite, die den folgenden Inline-Ereignis-Handler enthält:

```html
<!-- I want to use addEventListener, but I can't :( -->
<button onclick="myScript()">Submit</button>
```

Der folgende CSP-Header erlaubt die Ausführung des Skripts:

```http
Content-Security-Policy:  script-src 'unsafe-hashes' 'sha256-{HASHED_EVENT_HANDLER}'
```

### Unsichere Eval-Ausdrücke

Der `'unsafe-eval'` Quellenausdruck steuert mehrere Skriptausführungsmethoden, die Code aus Zeichenfolgen erstellen.
Wenn eine Seite einen CSP-Header hat und `'unsafe-eval'` nicht mit der `script-src` Direktive spezifiziert ist, werden die folgenden Methoden blockiert und haben keine Wirkung:

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Function", "Function()")}}
- Wenn eine String-Literal an Methoden wie übergeben wird: `setTimeout("alert(\"Hello World!\");", 500);`

  - [`setTimeout()`](/de/docs/Web/API/SetTimeout)
  - [`setInterval()`](/de/docs/Web/API/SetInterval)
  - [`window.setImmediate`](/de/docs/Web/API/Window/setImmediate)

- `window.execScript()` {{non-standard_inline}} (nur IE < 11)

### Unsichere WebAssembly-Ausführung

Der `'wasm-unsafe-eval'` Quellenausdruck steuert die WebAssembly-Ausführung.
Wenn eine Seite einen CSP-Header hat und `'wasm-unsafe-eval'` in der `script-src` Direktive nicht spezifiziert ist, wird das Laden und Ausführen von WebAssembly auf der Seite blockiert.

Der `'wasm-unsafe-eval'` Quellenausdruck ist spezifischer als `'unsafe-eval'`, das sowohl die Kompilierung (und Instanziierung) von WebAssembly als auch beispielsweise die Verwendung der `eval` Operation in JavaScript erlaubt.
Wenn das `'unsafe-eval'` Quellenschlüsselwort verwendet wird, überschreibt es jede Vorkommen von `'wasm-unsafe-eval'` in der CSP-Richtlinie.

```http
Content-Security-Policy: script-src 'wasm-unsafe-eval'
```

### strict-dynamic

Der `'strict-dynamic'` Quellenausdruck spezifiziert, dass das explizite Vertrauen, das einem Skript im Markup durch Begleitung mit einer Nonce oder einem Hash gegeben wird, auf alle Skripte ausgeweitet wird, die von diesem Basis-Skript geladen werden. Gleichzeitig werden alle Erlaubnislisten oder Quellenausdrücke wie `'self'` oder `'unsafe-inline'` ignoriert.

Zum Beispiel würde eine Richtlinie wie `script-src 'strict-dynamic' 'nonce-R4nd0m' https://allowlisted.example.com/` das Laden eines Basis-Skripts mit `<script nonce="R4nd0m" src="https://example.com/loader.js">` und die Weitergabe des Vertrauens an jedes Skript, das von `loader.js` geladen wird, erlauben, aber Skripte von `https://allowlisted.example.com/` nur dann erlauben, wenn sie von einer vertrauenswürdigen Skriptquelle begleitet oder geladen werden.

```http
Content-Security-Policy: script-src 'strict-dynamic' 'nonce-someNonce'
```

Oder:

```http
Content-Security-Policy: script-src 'strict-dynamic' 'sha256-base64EncodedHash'
```

Es ist möglich, `strict-dynamic` auf rückwärtskompatible Weise einzusetzen, ohne dass ein User-Agent-Sniffing erforderlich ist.
Die Richtlinie:

```http
Content-Security-Policy: script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'
```

wird sich wie `'unsafe-inline' https:` in Browsern verhalten, die CSP1 unterstützen, `https: 'nonce-abcdefg'` in Browsern, die CSP2 unterstützen, und `'nonce-abcdefg' 'strict-dynamic'` in Browsern, die CSP3 unterstützen.

### Spekulationsregeln erlauben

Um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in einem Skriptelement einzuschließen (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)), müssen Sie die `script-src` Direktive mit einer der `'inline-speculation-rules'` Quelle, einer Hash-Quelle oder Nonce-Quelle verwenden. Zum Beispiel:

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
