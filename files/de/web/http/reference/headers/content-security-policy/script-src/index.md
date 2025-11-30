---
title: "Content-Security-Policy: script-src Direktive"
short-title: script-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/script-src
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src`** Direktive gibt gültige Quellen für JavaScript an. Dies umfasst nicht nur URLs, die direkt in {{HTMLElement("script")}}-Elemente geladen werden, sondern auch Dinge wie Inline-Skript-Ereignishandler (`onclick`) und [XSLT Stylesheets](/de/docs/Web/XML/XSLT), die Skriptausführung auslösen können.

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
        <code>default-src</code> Direktive suchen.
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
  - : Eine durch Leerzeichen getrennte Liste von _Quellen-Ausdrucks_ Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellenausdrücke übereinstimmen. Für diese Direktive sind alle Quellenausdruckswerte, die in der [Fetch-Direktive-Syntax](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax) aufgelistet sind, anwendbar.

## Beispiele

### Allowlisting von Ressourcen aus vertrauenswürdigen Domains

Angenommen, dieser CSP-Header erlaubt nur Skripte von `https://example.com`:

```http
Content-Security-Policy: script-src https://example.com/
```

das folgende Skript wird blockiert und nicht geladen oder ausgeführt:

```html
<script src="https://not-example.com/js/library.js"></script>
```

Beachten Sie, dass Inline-Ereignishandler ebenfalls blockiert werden:

```html
<button id="btn" onclick="doSomething()">Click me</button>
```

Sie sollten sie durch [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe ersetzen:

```js
document.getElementById("btn").addEventListener("click", doSomething);
```

Wenn Sie Inline-Ereignishandler nicht ersetzen können, können Sie den `'unsafe-hashes'` Quellenausdruck verwenden, um sie zuzulassen.
Siehe [Unsichere Hashes](#unsichere_hashes) für weitere Informationen.

### Allowlisting externer Skripte mit Hashes

Das Erlauben vertrauenswürdiger Domains, wie im obigen Abschnitt gezeigt, ist ein grober Ansatz, um die Orte zu spezifizieren, von denen Code sicher geladen werden kann.
Dies ist ein pragmatischer Ansatz, insbesondere wenn Ihre Website viele Ressourcen verwendet und Sie Vertrauen darin haben, dass die vertrauenswürdige Website nicht kompromittiert wird.

Eine alternative Methode ist das Spezifizieren erlaubter Skripte durch Datei-Hashes.
Bei diesem Ansatz kann eine externe Datei in einem `<script>`-Element nur geladen und ausgeführt werden, wenn alle gültigen Hash-Werte in ihrem [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut mit den erlaubten Werten im CSP-Header übereinstimmen.
Das [Subresource-Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)-Feature überprüft zusätzlich, dass die heruntergeladene Datei den angegebenen Hash-Wert hat und daher nicht verändert wurde.
Dies ist sicherer als das Vertrauen in eine Domain, da Dateien nur verwendet werden, wenn sie unverändert sind, selbst wenn sie von einer kompromittierten Seite geladen werden.
Es ist jedoch auch granularer und erfordert, dass Hash-Werte in CSP- und Skript-Elementen aktualisiert werden, wann immer die zugehörigen Skripte geändert werden.

Der folgende CSP-Header demonstriert den Ansatz.
Er erlaubt Skripte, für die der SHA384-Hash `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` oder der SHA256-Hash `fictional_value` ist.

```http
Content-Security-Policy: script-src 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC' 'sha256-fictional_value'
```

Das untenstehende `example-framework.js`-Skript sollte geladen werden, da der Hash-Wert in seinem `integrity`-Attribut auch in der CSP vorhanden ist (vorausgesetzt, die Datei hat tatsächlich diesen Hash nach dem Herunterladen!).

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

Das `integrity`-Attribut kann mehrere Werte haben, von denen jeder einen Hash für die Datei liefert, der mit einem anderen Algorithmus berechnet wurde.
Um ein externes Skript zu laden, erfordert die CSP, dass _alle_ gültigen Hash-Werte im Attribut auch in der CSP `script-src`-Deklaration vorhanden sein müssen.
Daher würde das folgende Skript nicht geladen werden, da der zweite Hash nicht im oberen CSP-Header vorhanden ist.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC sha256-not-in-csp"
  crossorigin="anonymous"></script>
```

Diese Regel gilt nur für _gültige_ Hash-Werte.
Werte, die vom Browser nicht als Hashwerte erkannt werden, werden ignoriert, sodass das folgende Skript geladen werden sollte:

```html
<script
  src="https://example.com/example-framework.js"
  integrity="invalid-or-unsupported-hash sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

[Subresource-Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) enthält mehr Informationen über das Berechnen von Hashes und die Verwendung des `integrity`-Attributes.

### Unsicheres Inline-Skript

> [!NOTE]
> Das Verweigern von Inline-Styles und -Skripten ist einer der größten Sicherheitsgewinne, die CSP bietet.
> Wenn Sie sie unbedingt benutzen müssen, gibt es einige Mechanismen, die dies ermöglichen.
> Hashes gelten für Inline-Skripte und -Styles, aber nicht für Ereignishandler.
> Siehe [Unsichere Hashes](#unsichere_hashes) für weitere Informationen.

Um Inline-Skripte und -Styles zu erlauben, kann `'unsafe-inline'`, eine Nonce-Quelle oder eine Hash-Quelle angegeben werden, die mit dem Inline-Block übereinstimmt.
Die folgende Content-Security-Policy erlaubt alle Inline {{HTMLElement("script")}}-Elemente:

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

Das Erlauben aller Inline-Skripte wird als Sicherheitsrisiko angesehen, daher wird empfohlen, stattdessen eine Nonce-Quelle oder eine Hash-Quelle zu verwenden.
Um Inline-Skripte und -Styles mit einer Nonce-Quelle zu erlauben, müssen Sie einen zufälligen Nonce-Wert generieren (unter Verwendung eines kryptographisch sicheren Zufallstoken-Generators) und ihn in die Richtlinie aufnehmen.
Es ist wichtig zu beachten, dass dieser Nonce-Wert dynamisch generiert werden muss, da er für jede HTTP-Anfrage einzigartig sein muss:

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

Beim Erzeugen des Hashes dürfen Sie die {{HTMLElement("script")}}-Tags nicht einbeziehen und beachten Sie, dass Groß- und Kleinschreibung sowie Leerzeichen, einschließlich führender oder nachfolgender Leerzeichen von Bedeutung sind.

```html
<script>
  const inline = 1;
</script>
```

### Unsichere Hashes

Richtlinien für Inline-Ressourcen mit Hashes wie `script-src 'sha256-{HASHED_INLINE_SCRIPT}'` erlauben Skripte und Styles durch ihren Hash, aber nicht Ereignishandler:

```html
<!-- Allowed by CSP: script-src 'sha256-{HASHED_INLINE_SCRIPT}' -->
<script>
  const inline = 1;
</script>

<!-- CSP: script-src 'sha256-{HASHED_EVENT_HANDLER}'
      will not allow this event handler -->
<button onclick="myScript()">Submit</button>
```

Statt `'unsafe-inline'` zu erlauben, können Sie den `'unsafe-hashes'`-Quellenausdruck verwenden, wenn der Code nicht auf gleichwertige [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe aktualisiert werden kann.
Angenommen, eine HTML-Seite enthält den folgenden Inline-Ereignishandler:

```html
<!-- I want to use addEventListener, but I can't :( -->
<button onclick="myScript()">Submit</button>
```

Der folgende CSP-Header erlaubt das Skript auszuführen:

```http
Content-Security-Policy:  script-src 'unsafe-hashes' 'sha256-{HASHED_EVENT_HANDLER}'
```

### Unsichere eval-Ausdrücke

Der `'unsafe-eval'`-Quellenausdruck steuert mehrere Skriptausführungsmethoden, die Code aus Zeichenfolgen erstellen.
Wenn eine Seite einen CSP-Header hat und `'unsafe-eval'` nicht mit der `script-src`-Direktive angegeben ist, werden die folgenden Methoden blockiert und haben keine Wirkung:

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Function", "Function()")}}
- Bei Übergabe einer Zeichenfolgenliteral wie zu Methoden wie: `setTimeout("alert(\"Hello World!\");", 500);`
  - [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)
  - [`setInterval()`](/de/docs/Web/API/Window/setInterval)
  - [`setImmediate()`](/de/docs/Web/API/Window/setImmediate)

- `window.execScript()` {{non-standard_inline}} (nur IE < 11)

### Unsichere WebAssembly-Ausführung

Der `'wasm-unsafe-eval'`-Quellenausdruck steuert die Ausführung von WebAssembly.
Wenn eine Seite einen CSP-Header hat und `'wasm-unsafe-eval'` nicht in der `script-src`-Direktive spezifiziert ist, wird das Laden und Ausführen von WebAssembly auf der Seite blockiert.

Der `'wasm-unsafe-eval'`-Quellenausdruck ist spezifischer als `'unsafe-eval'`, welches sowohl die Kompilierung (und Instanziierung) von WebAssembly als auch zum Beispiel die Verwendung des `eval`-Operators in JavaScript erlaubt.
Wenn das `'unsafe-eval'`-Quellenschlüsselwort verwendet wird, überschreibt es jede Vorkommen von `'wasm-unsafe-eval'` in der CSP-Richtlinie.

```http
Content-Security-Policy: script-src 'wasm-unsafe-eval'
```

### strict-dynamic

Der `'strict-dynamic'`-Quellenausdruck gibt an, dass das Vertrauen, das einem Skript im Markup ausdrücklich durch Begleitung mit einem Nonce oder einem Hash gegeben wurde, auf alle Skripte, die von diesem Wurzelskript geladen werden, übertragen werden soll. Gleichzeitig werden alle Allowlisten oder Quellenausdrücke wie `'self'` oder `'unsafe-inline'` ignoriert.

Zum Beispiel würde eine Richtlinie wie `script-src 'strict-dynamic' 'nonce-R4nd0m' https://allowlisted.example.com/` das Laden eines Wurzelskripts mit `<script nonce="R4nd0m" src="https://example.com/loader.js">` erlauben und dieses Vertrauen auf jedes Skript übertragen, das von `loader.js` geladen wird, aber das Laden von Skripten von `https://allowlisted.example.com/` nur erlauben, wenn es durch ein Nonce begleitet oder von einem vertrauenswürdigen Skript geladen wird.

```http
Content-Security-Policy: script-src 'strict-dynamic' 'nonce-someNonce'
```

Oder:

```http
Content-Security-Policy: script-src 'strict-dynamic' 'sha256-base64EncodedHash'
```

Es ist möglich, `strict-dynamic` auf abwärtskompatible Weise bereitzustellen, ohne Benutzer-Agenten-Erkennung zu benötigen.
Die Richtlinie:

```http
Content-Security-Policy: script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'
```

wird in Browsern, die CSP1 unterstützen, wie `'unsafe-inline' https:` wirken, in Browsern, die CSP2 unterstützen, wie `https: 'nonce-abcdefg'` und in Browsern, die CSP3 unterstützen, wie `'nonce-abcdefg' 'strict-dynamic'`.

### Spekulationsregeln erlauben

Um [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) in einem Skript-Element einzuschließen (siehe auch [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules)), müssen Sie die `script-src`-Direktive mit einer der `'inline-speculation-rules'`-Quellen, eine Hash-Quelle, oder Nonce-Quelle verwenden. Zum Beispiel:

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
