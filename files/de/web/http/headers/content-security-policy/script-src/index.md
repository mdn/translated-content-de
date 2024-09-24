---
title: "CSP: script-src"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src
l10n:
  sourceCommit: bca6332a9b752ba195f544e115ada4bff76bc822
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src`** Direktive gibt gültige Quellen für JavaScript an. Dies umfasst nicht nur URLs, die direkt in {{HTMLElement("script")}}-Elemente geladen werden, sondern auch Dinge wie Inline-Skript-Ereignis-Handler (`onclick`) und [XSLT-Stylesheets](/de/docs/Web/XSLT), die Skript-Ausführung auslösen können.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktiventyp</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Direktive fehlt, sucht der User-Agent nach der
        <code>default-src</code>-Direktive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `script-src`-Richtlinie erlaubt werden:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src <source> <source>;
```

### Quellen

`<source>` kann einer der Werte sein, die in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgelistet sind.

Beachten Sie, dass derselbe Satz von Werten in allen {{Glossary("fetch directive", "fetch directives")}} (und einer [Reihe anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Zulässige Ressourcen von vertrauenswürdigen Domains

Angesichts dieses CSP-Headers, das nur Skripte von `https://example.com` erlaubt:

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

Sie sollten diese durch {{domxref("EventTarget.addEventListener", "addEventListener")}}-Aufrufe ersetzen:

```js
document.getElementById("btn").addEventListener("click", doSomething);
```

Wenn Sie Inline-Ereignis-Handler nicht ersetzen können, können Sie den Ausdruck `'unsafe-hashes'` verwenden, um diese zuzulassen.
Siehe [Unsichere Hashes](#unsichere_hashes) für weitere Informationen.

### Zulässige externe Skripte mit Hashes

Das Zulassen vertrauenswürdiger Domains, wie im obigen Abschnitt gezeigt, ist ein breiter Ansatz, um die sicheren Ladeorte von Code anzugeben.
Dies ist ein pragmatischer Ansatz, insbesondere wenn Ihre Website viele Ressourcen nutzt und Sie darauf vertrauen, dass die vertrauenswürdige Seite nicht kompromittiert wird.

Eine alternative Methode besteht darin, erlaubte Skripte mit Dateihashes anzugeben.
Mit diesem Ansatz kann eine externe Datei in einem `<script>`-Element nur geladen und ausgeführt werden, wenn alle gültigen Hash-Werte in ihrem [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attribut mit den erlaubten Werten im CSP-Header übereinstimmen.
Die Funktion [Subressourcenintegrität](/de/docs/Web/Security/Subresource_Integrity) überprüft zusätzlich, dass die heruntergeladene Datei den angegebenen Hash-Wert hat und daher nicht verändert wurde.
Dies ist sicherer als das Vertrauen in eine Domain, da Dateien nur dann verwendet werden, wenn sie unverändert sind, auch wenn sie von einer kompromittierten Seite geladen werden.
Es erfordert jedoch feinere Abstimmung und benötigt, dass Hash-Werte in CSP- und Skriptelementen jedes Mal, wenn die zugehörigen Skripte geändert werden, aktualisiert werden.

Der untenstehende CSP-Header zeigt den Ansatz.
Er erlaubt Skripte, für die der SHA384-Hash `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` oder der SHA256-Hash `fictional_value` ist.

```http
Content-Security-Policy: script-src 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC' 'sha256-fictional_value'
```

Das `example-framework.js`-Skript unten sollte geladen werden, weil der Hash-Wert in seinem `integrity`-Attribut ebenfalls im CSP vorhanden ist (vorausgesetzt, die Datei hat tatsächlich diesen Hash, sobald sie heruntergeladen wird!)

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

Das `integrity`-Attribut kann mehrere Werte haben, die jeweils einen Hash für die Datei liefern, der mit einem anderen Algorithmus berechnet wurde.
Damit ein externes Skript geladen werden kann, erfordert CSP, dass _alle_ gültigen Hash-Werte im Attribut auch in der CSP `script-src`-Deklaration enthalten sein müssen.
Das Skript unten würde daher nicht geladen werden, da der zweite Hash nicht im obigen CSP-Header vorhanden ist.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC sha256-not-in-csp"
  crossorigin="anonymous"></script>
```

Diese Regel gilt nur für _gültige_ Hash-Werte.
Werte, die vom Browser nicht als Hash erkannt werden, werden ignoriert, sodass das folgende Skript geladen werden sollte:

```html
<script
  src="https://example.com/example-framework.js"
  integrity="invalid-or-unsupported-hash sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

[Subressourcenintegrität](/de/docs/Web/Security/Subresource_Integrity) enthält mehr Informationen über die Berechnung von Hashes und die Verwendung des `integrity`-Attributs.

### Unsichere Inline-Skripte

> [!NOTE]
> Das Verbot von Inline-Stilen und Inline-Skripten ist einer der größten Sicherheitsvorteile, die CSP bietet.
> Wenn Sie sie unbedingt verwenden müssen, gibt es einige Mechanismen, die dies erlauben.
> Hashes gelten für Inline-Skripte und -Stile, aber nicht für Ereignis-Handler.
> Siehe [Unsichere Hashes](#unsichere_hashes) für weitere Informationen.

Um Inline-Skripte und -Stile zu erlauben, kann `'unsafe-inline'`, eine Nonce-Quelle oder eine Hash-Quelle angegeben werden, die zum Inline-Block passt.
Die folgende Content Security Policy wird alle Inline-{{HTMLElement("script")}}-Elemente erlauben:

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

Das Zulassen aller Inline-Skripte wird als Sicherheitsrisiko betrachtet, daher wird empfohlen, stattdessen eine Nonce-Quelle oder eine Hash-Quelle zu verwenden.
Um Inline-Skripte und -Stile mit einer Nonce-Quelle zu erlauben, müssen Sie einen zufälligen Nonce-Wert (mithilfe eines kryptographisch sicheren Zufallstokens) generieren und ihn in die Richtlinie aufnehmen.
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

Beim Generieren des Hashs sollten die {{HTMLElement("script")}}-Tags nicht eingeschlossen werden und beachten Sie, dass Groß-/Kleinschreibung und Leerzeichen wichtig sind, einschließlich führender oder nachfolgender Leerzeichen.

```html
<script>
  const inline = 1;
</script>
```

### Unsichere Hashes

Richtlinien für Inline-Ressourcen mit Hashes wie `script-src 'sha256-{HASHED_INLINE_SCRIPT}'` erlauben Skripte und Stile nach ihrem Hash, aber nicht Ereignis-Handler:

```html
<!-- Von CSP erlaubt: script-src 'sha256-{HASHED_INLINE_SCRIPT}' -->
<script>
  const inline = 1;
</script>

<!-- CSP: script-src 'sha256-{HASHED_EVENT_HANDLER}'
      erlaubt diesen Ereignis-Handler nicht -->
<button onclick="myScript()">Submit</button>
```

Statt `'unsafe-inline'` zu erlauben, können Sie den Ausdruck `'unsafe-hashes'` verwenden, wenn der Code nicht auf gleichwertige {{domxref("EventTarget.addEventListener", "addEventListener")}}-Aufrufe aktualisiert werden kann.
Angenommen, eine HTML-Seite enthält den folgenden Inline-Ereignis-Handler:

```html
<!-- Ich möchte addEventListener verwenden, kann aber nicht :( -->
<button onclick="myScript()">Submit</button>
```

Der folgende CSP-Header wird das Skript ausführen lassen:

```http
Content-Security-Policy:  script-src 'unsafe-hashes' 'sha256-{HASHED_EVENT_HANDLER}'
```

### Unsichere eval-Ausdrücke

Der `'unsafe-eval'`-Quellenausdruck steuert mehrere Skriptausführungsmethoden, die Code aus Zeichenfolgen erstellen.
Wenn eine Seite einen CSP-Header hat und `'unsafe-eval'` nicht mit der `script-src`-Direktive angegeben ist, werden die folgenden Methoden blockiert und haben keine Wirkung:

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Function", "Function()")}}
- Beim Übergeben eines String-Literals an Methoden wie: `setTimeout("alert(\"Hallo Welt!\");", 500);`

  - {{domxref("setTimeout()")}}
  - {{domxref("setInterval()")}}
  - {{domxref("window.setImmediate")}}

- `window.execScript()` {{non-standard_inline}} (nur IE < 11)

### Unsichere WebAssembly-Ausführung

Der `'wasm-unsafe-eval'`-Quellenausdruck steuert die WebAssembly-Ausführung.
Wenn eine Seite einen CSP-Header hat und `'wasm-unsafe-eval'` nicht in der `script-src`-Direktive angegeben ist, wird die WebAssembly von der Seite blockiert und kann nicht geladen oder ausgeführt werden.

Der `'wasm-unsafe-eval'`-Quellenausdruck ist spezifischer als `'unsafe-eval'`, das sowohl die Kompilierung (und Instanziierung) von WebAssembly als auch die Verwendung der `eval`-Operation in JavaScript erlaubt.
Wenn das `'unsafe-eval'`-Schlüsselwort verwendet wird, überschreibt es jede Vorkommen von `'wasm-unsafe-eval'` in der CSP-Richtlinie.

```http
Content-Security-Policy: script-src 'wasm-unsafe-eval'
```

### strict-dynamic

Der `'strict-dynamic'`-Quellenausdruck gibt an, dass das Vertrauen, das einem im Markup vorhandenen Skript durch die Begleitung mit einem Nonce oder einem Hash ausdrücklich gegeben wird, auf alle von diesem Root-Skript geladenen Skripte übertragen werden soll. Gleichzeitig werden alle Zulassungslisten oder Quellenausdrücke wie `'self'` oder `'unsafe-inline'` ignoriert.

Ein Beispiel für eine Richtlinie wie `script-src 'strict-dynamic' 'nonce-R4nd0m' https://allowlisted.example.com/` würde das Laden eines Root-Skripts mit `<script nonce="R4nd0m" src="https://example.com/loader.js">` erlauben und dieses Vertrauen an jedes von `loader.js` geladene Skript weitergeben, aber das Laden von Skripten von `https://allowlisted.example.com/` nicht erlauben, es sei denn, sie werden von einem vertrauenswürdigen Skript geladen oder mit einem Nonce begleitet.

```http
Content-Security-Policy: script-src 'strict-dynamic' 'nonce-someNonce'
```

Oder:

```http
Content-Security-Policy: script-src 'strict-dynamic' 'sha256-base64EncodedHash'
```

Es ist möglich, `strict-dynamic` auf eine rückwärtskompatible Weise einzusetzen, ohne dass User-Agent-Sniffing erforderlich ist.
Die Richtlinie:

```http
Content-Security-Policy: script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'
```

wird in Browsern, die CSP1 unterstützen, wie `'unsafe-inline' https:` agieren, in Browsern, die CSP2 unterstützen, wie `https: 'nonce-abcdefg'`, und in Browsern, die CSP3 unterstützen, wie `'nonce-abcdefg' 'strict-dynamic'`.

### Erlauben von Spekulationsregeln

Um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in einem Skriptelement einzuschließen (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)), müssen Sie die `script-src`-Direktive mit einer der `'inline-speculation-rules'`-Quellen, einer Hash-Quelle oder einer Nonce-Quelle verwenden. Zum Beispiel:

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
