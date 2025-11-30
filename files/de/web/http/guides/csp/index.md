---
title: Content Security Policy (CSP)
slug: Web/HTTP/Guides/CSP
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

**Content Security Policy** (CSP) ist ein Feature, das hilft, bestimmte Arten von Sicherheitsbedrohungen zu verhindern oder zu minimieren. Es besteht aus einer Reihe von Anweisungen von einer Website an einen Browser, die den Browser anweisen, Einschränkungen aufzuerlegen, was der Code der Website tun darf.

Der Hauptanwendungsfall für CSP ist die Kontrolle, welche Ressourcen, insbesondere JavaScript-Ressourcen, ein Dokument laden darf. Dies wird hauptsächlich als Abwehrmaßnahme gegen {{Glossary("cross-site_scripting", "Cross-Site Scripting")}} (XSS)-Angriffe verwendet, bei denen ein Angreifer bösartigen Code in die Seite des Opfers einfügen kann.

Eine CSP kann auch andere Zwecke erfüllen, einschließlich des Schutzes vor [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und der Sicherstellung, dass die Seiten einer Website über HTTPS geladen werden.

In diesem Leitfaden beginnen wir damit zu beschreiben, wie eine CSP an einen Browser übermittelt wird und wie sie auf hohem Niveau aussieht.

Dann beschreiben wir, wie sie verwendet werden kann, um zu [kontrollieren, welche Ressourcen geladen werden](#kontrolle_des_ressourcennachladens), um gegen XSS zu schützen, und andere Anwendungsfälle wie [Clickjacking-Schutz](#clickjacking-schutz) und [das Hochstufen unsicherer Anfragen](#hochstufen_unsicherer_anfragen). Beachten Sie, dass es keine Abhängigkeit zwischen den verschiedenen Anwendungsfällen gibt: Wenn Sie Clickjacking-Schutz hinzufügen möchten, aber nicht die Minderung von XSS, können Sie einfach die Direktiven für diesen Anwendungsfall hinzufügen.

Abschließend beschreiben wir [Strategien für die Implementierung einer CSP](#testen_ihrer_richtlinie) und Werkzeuge, die dabei helfen können, diesen Prozess zu erleichtern.

## CSP-Übersicht

Eine CSP sollte dem Browser im {{httpheader("Content-Security-Policy")}}-Antwortheader übermittelt werden. Sie sollte für alle Antworten auf alle Anfragen festgelegt werden, nicht nur für das Hauptdokument.

Sie können sie auch mit dem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attribut Ihres Dokuments im {{htmlelement("meta")}}-Element angeben. Dies ist eine nützliche Option für einige Anwendungsfälle, wie z. B. eine clientseitig gerenderte {{Glossary("SPA", "Single Page App")}}, die nur statische Ressourcen hat, da Sie dann nicht auf eine Serverinfrastruktur angewiesen sind. Diese Option unterstützt jedoch nicht alle CSP-Funktionen.

Die Richtlinie wird als eine Reihe von _Direktiven_ angegeben, die durch Semikolons getrennt sind. Jede Direktive steuert einen anderen Aspekt der Sicherheitsrichtlinie. Jede Direktive hat einen Namen, gefolgt von einem Leerzeichen und einem Wert. Verschiedene Direktiven können unterschiedliche Syntaxen haben.

Betrachten Sie zum Beispiel die folgende CSP:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

Sie setzt zwei Direktiven:

- die `default-src`-Direktive ist auf `'self'` gesetzt
- die `img-src`-Direktive ist auf `'self' example.com` gesetzt.

![Eine CSP aufgeschlüsselt in ihre Direktiven.](csp-overview.svg)

Die erste Direktive, `default-src`, weist den Browser an, nur Ressourcen zu laden, die sich im selben Ursprung wie das Dokument befinden, es sei denn, andere spezifischere Direktiven setzen eine andere Richtlinie für andere Ressourcentypen. Die zweite, `img-src`, weist den Browser an, Bilder zu laden, die sich im selben Ursprung befinden oder von `example.com` bereitgestellt werden.

Im nächsten Abschnitt betrachten wir die verfügbaren Werkzeuge zur Kontrolle von Ressourcennachladungen, die die Hauptfunktion einer CSP darstellen.

## Kontrolle des Ressourcennachladens

Eine CSP kann verwendet werden, um die Ressourcen zu steuern, die ein Dokument laden darf. Dies wird in erster Linie zum Schutz vor Cross-Site Scripting (XSS)-Angriffen verwendet.

In diesem Abschnitt werden wir zunächst sehen, wie das Kontrollieren von Ressourcennachladungen helfen kann, vor XSS zu schützen, dann die Werkzeuge, die CSP bereitstellt, um zu kontrollieren, welche Ressourcen geladen werden. Schließlich beschreiben wir eine bestimmte empfohlene Strategie, die sogenannte "Strikte CSP".

### XSS und Ressourcennachladen

Ein Cross-Site Scripting (XSS)-Angriff ist einer, bei dem ein Angreifer in der Lage ist, eigenen Code im Kontext der Zielwebsite auszuführen. Dieser Code kann dann alles tun, was der eigene Code der Website tun könnte, einschließlich, zum Beispiel:

- Zugriff auf oder Änderung des Inhalts der geladenen Seiten der Website
- Zugriff auf oder Änderung von Inhalten im lokalen Speicher
- Ausführen von HTTP-Anfragen mit den Anmeldedaten des Benutzers, wodurch sie den Benutzer imitieren oder auf sensible Daten zugreifen können

Ein XSS-Angriff ist möglich, wenn eine Website einige Eingaben akzeptiert, die von einem Angreifer erstellt worden sein könnten (zum Beispiel URL-Parameter oder ein Kommentar auf einem Blogpost) und sie dann in die Seite einfügt, ohne sie zu _bereinigen_: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausgeführt werden können.

Websites sollten sich selbst gegen XSS schützen, indem sie diese Eingaben bereinigen, bevor sie sie in die Seite einfügen. Eine CSP bietet einen ergänzenden Schutz, der die Website schützen kann, auch wenn die Bereinigung fehlschlägt.

Wenn die Bereinigung tatsächlich fehlschlägt, gibt es verschiedene Formen, die der eingeschleuste bösartige Code im Dokument annehmen kann, einschließlich:

- Ein {{htmlelement("script")}}-Tag, das auf eine bösartige Quelle verweist:

  ```html
  <script src="https://evil.example.com/hacker.js"></script>
  ```

- Ein `<script>`-Tag, das Inline-JavaScript enthält:

  ```html
  <script>
    console.log("You've been hacked!");
  </script>
  ```

- Ein Inline-Ereignishandler:

  ```html
  <img
    onmouseover="console.log(`You've been hacked!`)"
    src="thumbnail.jpg"
    alt="" />
  ```

- Eine `javascript:`-URL:

  ```html
  <iframe src="javascript:console.log(`You've been hacked!`)"></iframe>
  ```

- Ein String-Argument für eine unsichere API wie [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval):

  ```js
  eval("console.log(`You've been hacked!`)");
  ```

Eine CSP kann einen Schutz gegen all diese bieten. Mit einer CSP können Sie:

- die erlaubten Quellen für JavaScript-Dateien und andere Ressourcen definieren, wodurch das Laden von `https://evil.example.com` effektiv blockiert wird
- Inline-Skript-Tags deaktivieren
- nur Skript-Tags zulassen, die das richtige Nonce oder den richtigen Hash gesetzt haben
- Inline-Ereignishandler deaktivieren
- `javascript:`-URLs deaktivieren
- gefährliche APIs wie `eval()` deaktivieren

Im nächsten Abschnitt gehen wir auf die Werkzeuge ein, die CSP bietet, um diese Dinge zu tun.

> [!NOTE]
> Das Setzen einer CSP ist kein Ersatz für die Bereinigung von Eingaben. Websites sollten Eingaben _bereinigen_ und eine CSP setzen, um so einen tiefen Schutz gegen XSS zu bieten.

### Abruffehlerdirektiven

Abruffehlerdirektiven werden verwendet, um eine bestimmte Kategorie von Ressourcen anzugeben, die ein Dokument laden darf — wie JavaScript, CSS-Stile, Bilder, Schriftarten usw.

Es gibt verschiedene Abruffehlerdirektiven für verschiedene Ressourcentypen. Zum Beispiel:

- [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) legt die erlaubten Quellen für JavaScript fest.
- [`style-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) legt die erlaubten Quellen für CSS-Stile fest.
- [`img-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) legt die erlaubten Quellen für Bilder fest.

Eine besondere Abruffehlerdirektive ist `default-src`, die eine Ersatzrichtlinie für alle Ressourcen festlegt, deren Direktiven nicht explizit aufgeführt sind.

Für die vollständige Liste der Abrufdirektiven siehe die [Referenzdokumentation](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directives).

Jede Abrufdirektive wird entweder als das einzelne Schlüsselwort `'none'` oder als eine oder mehrere _Quellenausdrücke_ angegeben, die durch Leerzeichen getrennt sind. Wenn mehr als ein Quellenausdruck aufgeführt ist: Wenn eine der Methoden die Ressource erlaubt, dann ist die Ressource erlaubt.

Zum Beispiel stellt die folgende CSP zwei Abruffehlerdirektiven auf:

- `default-src` erhält den einzelnen Quellenausdruck `'self'`
- `img-src` erhält zwei Quellenausdrücke: `'self'` und `example.com`

![CSP-Diagramm, das Quellenausdrücke zeigt](csp-source-expressions.svg)

Die Auswirkungen sind, dass:

- Bilder entweder vom selben Ursprung wie das Dokument stammen oder von `example.com` geladen werden müssen
- alle anderen Ressourcen vom selben Ursprung wie das Dokument stammen müssen.

In den nächsten Abschnitten werden wir einige der Möglichkeiten beschreiben, wie Sie Quellenausdrücke verwenden können, um das Laden von Ressourcen zu steuern. Beachten Sie, dass wir sie zwar separat beschreiben, diese Ausdrücke im Allgemeinen jedoch kombiniert werden können: Zum Beispiel kann eine einzelne Abruffehlerdirektive Nonces sowie Hostnamen enthalten.

#### Ressourcen blockieren

Um einen Ressourcentyp vollständig zu blockieren, verwenden Sie das Schlüsselwort `'none'`. Zum Beispiel blockiert die folgende Direktive alle {{htmlelement("object")}}- und {{htmlelement("embed")}}-Ressourcen:

```http
Content-Security-Policy: object-src 'none'
```

Beachten Sie, dass `'none'` nicht mit einer anderen Methode in einer bestimmten Direktive kombiniert werden kann: In der Praxis werden alle anderen Quellenausdrücke ignoriert, wenn sie zusammen mit `'none'` angegeben werden.

#### Nonces

Ein `nonce` ist der empfohlene Ansatz, um das Laden von {{htmlelement("script")}}- und {{htmlelement("style")}}-Ressourcen einzuschränken.

Mit einem Nonce generiert der Server für jede HTTP-Antwort einen zufälligen Wert und fügt ihn in eine `script-src`- und/oder eine `style-src`-Direktive ein:

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server fügt diesen Wert dann als Wert des `nonce`-Attributs in alle `<script>`- und/oder `<style>`-Tags ein, die sie im Dokument einfügen wollen.

Der Browser vergleicht die beiden Werte und lädt die Ressource nur, wenn sie übereinstimmen. Die Idee ist, dass selbst wenn ein Angreifer in der Lage ist, etwas JavaScript auf die Seite einzufügen, er nicht weiß, welches nonce der Server verwenden wird, sodass der Browser das Skript nicht ausführt.

Damit dieser Ansatz funktioniert, darf es einem Angreifer nicht möglich sein, das nonce zu erraten.

**In der Praxis bedeutet dies, dass das nonce für jede HTTP-Antwort unterschiedlich und nicht vorhersagbar sein muss.**

Dies bedeutet wiederum, dass der Server kein statisches HTML bereitstellen kann, da er jedes Mal ein neues nonce einfügen muss. Typischerweise würde der Server eine Template-Engine verwenden, um das nonce einzufügen.

Hier ist ein Ausschnitt von [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)-Code, um es zu demonstrieren:

```js
function content(nonce) {
  return `
    <script nonce="${nonce}" src="/main.js"></script>
    <script nonce="${nonce}">console.log("hello!");</script>
    <h1>Hello world</h1> 
    `;
}

app.get("/", (req, res) => {
  const nonce = crypto.randomUUID();
  res.setHeader("Content-Security-Policy", `script-src 'nonce-${nonce}'`);
  res.send(content(nonce));
});
```

Bei jeder Anfrage generiert der Server ein neues nonce, fügt es in die CSP und in die {{htmlelement("script")}}-Tags im zurückgegebenen Dokument ein. Beachten Sie, dass der Server:

- für jede Anfrage ein neues nonce generiert
- Nonces sowohl mit externen als auch mit Inline-Skripten verwenden kann
- das gleiche nonce für alle `<script>`-Tags im Dokument verwendet

Es ist wichtig, dass der Server irgendeine Art von Templating verwendet, um Nonces einzufügen und sie nicht einfach in alle `<script>`-Tags einfügt: Andernfalls könnte der Server versehentlich Nonces in Skripten einfügen, die von einem Angreifer eingefügt wurden.

Beachten Sie, dass Nonces nur für Elemente verwendet werden können, die ein `nonce`-Attribut haben: das heißt, nur `<script>`- und `<style>`-Elemente.

#### Hashes

Abruffehlerdirektiven können auch einen Hash des Skripts verwenden, um dessen Integrität zu garantieren. Bei dieser Methode:

1. berechnet der Server einen Hash der Skriptinhalte mit einer {{Glossary("hash_function", "Hash-Funktion")}} (eine von SHA-256, SHA-384 oder SHA-512),
2. erstellt eine {{Glossary("Base64", "Base64")}}-Kodierung des Ergebnisses,
3. hängt einen Präfix an, der den verwendeten Hash-Algorithmus identifiziert (einer von `sha256-`, `sha384-` oder `sha512-`).

Anschließend fügt er das Ergebnis der Direktive hinzu:

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

Wenn der Browser das Dokument erhält, hasht er das Skript, vergleicht das Ergebnis mit dem Wert aus dem Header und lädt das Skript nur, wenn sie übereinstimmen.

Externe Skripte müssen das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut enthalten, damit diese Methode funktioniert.

Hier ist ein Ausschnitt von Express-Code, um es zu demonstrieren:

```js
const hash1 = "sha256-ex2O7MWOzfczthhKm6azheryNVoERSFrPrdvxRtP8DI=";
const hash2 = "sha256-H/eahVJiG1zBXPQyXX0V6oaxkfiBdmanvfG9eZWSuEc=";

const csp = `script-src '${hash1}' '${hash2}'`;
const content = `
  <script src="./main.js" integrity="${hash2}"></script>
  <script>console.log("hello!");</script>
    <h1>Hello world</h1> 
    `;

app.get("/", (req, res) => {
  res.setHeader("Content-Security-Policy", csp);
  res.send(content);
});
```

Beachten Sie, dass:

- Wir einen separaten Hash für jedes Skript im Dokument haben.
- Für das externe Skript "main.js" auch das `integrity`-Attribut mit demselben Wert einschließen.
- Anders als das Beispiel mit Nonces können sowohl die CSP als auch der Inhalt statisch sein, da die Hashes gleich bleiben. Dadurch sind Hash-basierte Richtlinien besser geeignet für statische Seiten oder Websites, die auf Client-seitigem Rendering basieren.

#### Schema-basierte Richtlinien

Abruffehlerdirektiven können ein Schema wie `https:` auflisten, um Ressourcen zuzulassen, die über dieses Schema bereitgestellt werden. Dies ermöglicht beispielsweise einer Richtlinie, HTTPS für alle Ressourcennachladungen zu verlangen:

```http
Content-Security-Policy: default-src https:
```

#### Standortbasierte Richtlinien

Abruffehlerdirektiven können Ressourcennachladungen basierend auf dem Standort der Ressource steuern.

Das Schlüsselwort `'self'` erlaubt Ressourcen, die sich im selben Ursprung wie das Dokument selbst befinden:

```http
Content-Security-Policy: img-src 'self'
```

Sie können auch einen oder mehrere Hostnamen angeben, möglicherweise einschließlich Platzhalter, und nur Ressourcen, die von diesen Hosts bereitgestellt werden, werden erlaubt. Dies könnte beispielsweise verwendet werden, um Inhalte zu ermöglichen, die von einem vertrauenswürdigen CDN bereitgestellt werden.

```http
Content-Security-Policy: img-src *.example.org
```

Sie können mehrere Standorte angeben. Die folgende Direktive erlaubt nur Bilder, die im selben Ursprung wie das aktuelle Dokument sind, oder die von einem Unterdomäne von "example.org" oder von "example.com" bereitgestellt werden:

```http
Content-Security-Policy: img-src 'self' *.example.org  example.com
```

#### Inline-JavaScript

Wenn eine CSP entweder eine `default-src`- oder eine `script-src`-Direktive enthält, wird die Ausführung von Inline-JavaScript nicht erlaubt, es sei denn, es werden zusätzliche Maßnahmen getroffen, um es zu ermöglichen. Dies schließt ein:

- JavaScript, das innerhalb eines `<script>`-Elements auf der Seite enthalten ist:

  ```html
  <script>
    console.log("Hello from an inline script");
  </script>
  ```

- JavaScript in einem Inline-Ereignishandler-Attribut:

  ```html
  <img src="x" onerror="console.log('Hello from an inline event handler')" />
  ```

- JavaScript in einer `javascript:`-URL:

  ```html
  <a href="javascript:console.log('Hello from a javascript: URL')">Click me</a>
  ```

Das Schlüsselwort `unsafe-inline` kann verwendet werden, um diese Einschränkung aufzuheben. Zum Beispiel verlangt die folgende Direktive, dass alle Ressourcen im selben Ursprung sein müssen, erlaubt jedoch Inline-JavaScript:

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es den Zweck einer CSP weitestgehend zunichtemacht. Inline-JavaScript ist ein häufiger Vektor für XSS, und eines der grundlegendsten Ziele einer CSP ist es, dessen unkontrollierte Verwendung zu verhindern.

Inline-`<script>`-Elemente sind erlaubt, wenn sie durch ein Nonce oder einen Hash geschützt sind, wie oben beschrieben.

Wenn eine Direktive Nonce- oder Hash-Ausdrücke enthält, wird das Schlüsselwort `unsafe-inline` von Browsern ignoriert.

#### `eval()` und ähnliche APIs

Wie bei Inline-JavaScript wird durch eine CSP die Ausführung von `eval()` und ähnlichen APIs nicht erlaubt, wenn entweder eine `default-src`- oder eine `script-src`-Direktive enthalten ist. Dies schließt ein, unter anderem:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) selbst:

  ```js
  eval('console.log("hello from eval()")');
  ```

- Der {{jsxref("Function/Function()", "Function()")}}-Konstruktor:

  ```js
  const sum = new Function("a", "b", "return a + b");
  ```

- Das String-Argument für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval):

  ```js
  setTimeout("console.log('hello from setTimeout')", 1);
  ```

Das Schlüsselwort `unsafe-eval` kann verwendet werden, um dieses Verhalten aufzuheben, und wie bei `unsafe-inline` gilt: **Entwickler sollten `unsafe-eval` vermeiden**.

Manchmal kann es schwierig sein, die Verwendung von `eval()` und den anderen Methoden zu entfernen: In solchen Situationen kann die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) es sicherer machen, indem sichergestellt wird, dass die Eingabe einer definierten Richtlinie entspricht.
Das Schlüsselwort `trusted-types-eval` sollte verwendet werden, um das Verhalten in diesem Fall zu überschreiben.
Anders als `unsafe-inline` überschreibt es das Verhalten im Browser nur, wenn Trusted Types unterstützt und aktiviert sind; was sicherstellt, dass die Methoden in Browsern, die Trusted Types nicht unterstützen, weiterhin blockiert bleiben.

Anders als `unsafe-inline` funktioniert das Schlüsselwort `unsafe-eval` auch in einer Direktive, die Nonce- oder Hash-Ausdrücke enthält.

### Strikte CSP

Um das Laden von Skripten als Schutzmaßnahme gegen XSS zu kontrollieren, wird empfohlen, [nonce-](#nonces) oder [hash-](#hashes) basierte Abruffehlerdirektiven zu verwenden. Dies wird als _strikte CSP_ bezeichnet. Diese Art von CSP hat zwei Hauptvorteile gegenüber einer standortbasierten CSP (normalerweise als _Allowlist-CSP_ bezeichnet):

- Allowlist-CSPs sind schwer richtig zu erstellen und oft erlauben Richtlinien unbeabsichtigt unsichere Domänen, und bieten daher keinen effektiven Schutz gegen XSS (siehe [CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)).
- Allowlist-CSPs können sehr groß und schwer zu pflegen sein, insbesondere wenn Skripte verwendet werden, die nicht unter Ihrer Kontrolle stehen. Laut [How I learned to stop worrying and love the Content Security Policy](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/) wird ein Entwickler allein zur Integration von Google Analytics aufgefordert, 187 Google-Domänen in die Allowlist aufzunehmen.

Eine nonce-basierte strikte CSP sieht so aus:

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

In dieser CSP:

- verwenden wir Nonces, um zu kontrollieren, welche JavaScript-Ressourcen geladen werden dürfen
- blockieren wir alle objektbasierte Einbettungen
- blockieren wir alle Verwendungen des `<base>`-Elements, um eine Basis-URI festzulegen.

Eine hash-basierte strikte CSP ist gleich, nur dass sie Hashes anstelle von Nonces verwendet:

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

Nonce-basierte Direktiven sind einfacher zu pflegen, wenn Sie Antworten einschließlich des Inhalts selbst dynamisch generieren können. Andernfalls müssen Sie hash-basierte Direktiven verwenden. Das Problem mit hash-basierten Direktiven ist, dass Sie den Hash neu berechnen und neu anwenden müssen, wenn eine Änderung am Skriptinhalt vorgenommen wird.

#### Das `strict-dynamic`-Schlüsselwort

Wie oben dargestellt, ist die strikte CSP schwierig umzusetzen, wenn Sie Skripte verwenden, die nicht unter Ihrer Kontrolle stehen. Wenn ein Drittanbieterskript zusätzliche Skripte lädt oder Inline-Skripte verwendet, schlägt dies fehl, da das Drittanbieterskript das Nonce oder den Hash nicht weitergeben kann.

Das `strict-dynamic`-Schlüsselwort wird bereitgestellt, um dieses Problem zu lösen. Es handelt sich um ein Schlüsselwort, das in einer Abruffehlerdirektive enthalten sein kann und es hat den Effekt, dass wenn ein Skript ein Nonce oder einen Hash an sich hat, dann darf dieses Skript weitere Skripte laden, die nicht selbst Nonces oder Hashes haben. Das heißt, das Vertrauen, das in ein Skript durch ein Nonce oder einen Hash gesetzt wird, wird auf Skripte übertragen, die das ursprüngliche Skript lädt (und Skripte, die _sie_ laden, und so weiter).

Betrachten Sie zum Beispiel ein Dokument wie dieses:

```html
<html lang="en-US">
  <head>
    <script
      src="./main.js"
      integrity="sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk="></script>
  </head>
  <body>
    <h1>Example page!</h1>
  </body>
</html>
```

Es enthält ein Skript "main.js", welches ein weiteres Skript erstellt und hinzufügt, "main2.js":

```js
console.log("hello");

const scriptElement = document.createElement("script");
scriptElement.src = `main2.js`;

document.head.appendChild(scriptElement);
```

Wir servieren unser Dokument mit einer CSP wie dieser:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
```

Das "main.js"-Skript wird geladen, da sein Hash dem Wert in der CSP entspricht. Aber der Versuch, "main2.js" zu laden, wird fehlschlagen.

Wenn wir `'strict-dynamic'` zur CSP hinzufügen, darf "main.js" "main2.js" laden:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  'strict-dynamic'
```

Das `'strict-dynamic'`-Schlüsselwort macht es viel einfacher, Nonce- oder Hash-basierte CSPs zu erstellen und zu pflegen, insbesondere wenn eine Website Drittanbieterskripte verwendet. Es macht Ihre CSP jedoch weniger sicher, da, wenn die von Ihnen eingebrachten Skripte `<script>`-Elemente basierend auf potenziellen Quellen von XSS erstellen, die CSP sie nicht schützen wird.

#### Refactoring von Inline-JavaScript und `eval()`

Wie oben gesehen, ist Inline-JavaScript standardmäßig in einer CSP nicht erlaubt. Mit Nonces oder Hashes kann ein Entwickler Inline-`<script>`-Tags verwenden, aber Sie müssen trotzdem Code refactorn, um andere nicht erlaubte Muster zu entfernen, einschließlich Inline-Ereignishandler, `javascript:`-URLs und die Verwendung von `eval()`. Beispielsweise sollten Inline-Ereignishandler in der Regel durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ersetzt werden:

```html example-bad
<p onclick="console.log('Hello from an inline event handler')">click me</p>
```

```html
<!-- served with the following CSP:
 `script-src 'sha256-AjYfua7yQhrSlg807yyeaggxQ7rP9Lu0Odz7MZv8cL0='`
 -->
<p id="hello">click me</p>
<script>
  const hello = document.querySelector("#hello");
  hello.addEventListener("click", () => {
    console.log("Hello from an inline script");
  });
</script>
```

## Clickjacking-Schutz

Die [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors)-Direktive kann verwendet werden, um zu steuern, welche Dokumente, falls überhaupt, dieses Dokument in einem verschachtelten Browsing-Kontext wie einem {{htmlelement("iframe")}} einbetten dürfen. Dies ist ein effektiver Schutz gegen Clickjacking-Angriffe, da diese Angriffe vom Einbetten der Zielseite in eine vom Angreifer kontrollierte Seite abhängen.

Die Syntax von `frame-ancestors` ist eine Teilmenge der Abruffehlerdirektiven-Syntax: Sie können das einzelne Schlüsselwort `'none'` oder einen oder mehrere Quellenausdrücke angeben. Die einzigen Quellenausdrücke, die Sie verwenden können, sind jedoch Schemata, Hostnamen oder das Schlüsselwort `'self'`.

Es sei denn, Sie benötigen, dass Ihre Seite eingebettet werden kann, sollten Sie `frame-ancestors` auf `'none'` setzen:

```http
Content-Security-Policy: frame-ancestors 'none'
```

Diese Direktive ist ein flexiblerer Ersatz für den {{httpheader("X-Frame-Options")}}-Header.

## Hochstufen unsicherer Anfragen

Webentwickler werden dringend ermutigt, all ihre Inhalte über HTTPS bereitzustellen. Beim Hochstufen einer Website zu HTTPS erfolgt es manchmal, dass das Hauptdokument über HTTPS bereitgestellt wird, die Ressourcen jedoch über HTTP, z.B. unter Verwendung von Markup wie diesem:

```html
<script src="http://example.org/my-cat.js"></script>
```

Dies wird als _gemischter Inhalt_ bezeichnet, und die Präsenz unsicherer Ressourcen schwächt den durch HTTPS gewährten Schutz erheblich. Unter dem von Browsern implementierten [gemischten Inhaltsalgorithmus](/de/docs/Web/Security/Defenses/Mixed_content) wird, wenn ein Dokument über HTTPS bereitgestellt wird, unsicherer Inhalt in "aufwertbaren Inhalt" und "blockierbaren Inhalt" kategorisiert. Aufwertbarer Inhalt wird auf HTTPS hochgestuft, und blockierbarer Inhalt wird blockiert, was möglicherweise die Seite beschädigt.

Die endgültige Lösung für gemischte Inhalte besteht darin, dass Entwickler alle Ressourcen über HTTPS laden. Doch selbst wenn eine Website tatsächlich in der Lage ist, alle Inhalte über HTTPS bereitzustellen, kann es sehr schwierig (oder sogar praktisch unmöglich, wenn es um archivierte Inhalte geht) für einen Entwickler sein, alle URLs, die die Website zum Laden von Ressourcen verwendet, umzuschreiben.

Die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests)-Direktive soll dieses Problem lösen. Diese Direktive hat keinen Wert: Um sie einzustellen, fügen Sie einfach den Namen der Direktive ein:

```http
Content-Security-Policy: upgrade-insecure-requests
```

Wenn diese Direktive auf ein Dokument gesetzt ist, wird der Browser alle HTTP-URLs in den folgenden Fällen automatisch auf HTTPS hochstufen:

- Anfragen zum Laden von Ressourcen (wie Bilder, Skripte oder Schriftarten)
- Navigationsanfragen (wie Linkziele), die im gleichen Ursprung wie das Dokument sind
- Navigationsanfragen in verschachtelten Browsing-Kontexten, wie iframes
- Formularübermittlungen

Jedoch werden Top-Level-Navigationsanfragen, deren Ziel ein anderer Ursprung ist, nicht hochgestuft.

Betrachten Sie beispielsweise, dass das Dokument unter `https://example.org` mit einer CSP, die die `upgrade-insecure-requests`-Direktive enthält, bedient wird, und das Dokument enthält Markup wie dieses:

```html
<script src="http://example.org/my-cat.js"></script>
<script src="http://not-example.org/another-cat.js"></script>
```

Der Browser wird beide Anfragen automatisch auf HTTPS hochstufen.

Nehmen Sie an, das Dokument enthält auch Folgendes:

```html
<a href="http://example.org/more-cats">See some more cats!</a>
<a href="http://not-example.org/even-more-cats">More cats, on another site!</a>
```

Der Browser wird den ersten Link auf HTTPS hochstufen, jedoch nicht den zweiten, da es sich um eine Navigation zu einem anderen Ursprung handelt.

Diese Direktive ist kein Ersatz für den {{httpheader("Strict-Transport-Security")}}-Header (auch bekannt als HSTS), da sie keine externen Links zu einer Seite hochstufen. Websites sollten sowohl diese Direktive als auch den `Strict-Transport-Security`-Header enthalten.

## Testen Ihrer Richtlinie

Um die Implementierung zu erleichtern, kann CSP im Berichtsmodus bereitgestellt werden.
Die Richtlinie wird nicht durchgesetzt, aber alle Verstöße werden an den im Richtlinie angegebenen Berichtsendpoint gesendet. Zusätzlich kann ein nur Berichte enthaltender Header verwendet werden, um eine zukünftige Revision einer Richtlinie zu testen, ohne sie tatsächlich zu implementieren.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}}-HTTP-Header verwenden, um Ihre Richtlinie anzugeben, wie dieser:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header als auch ein {{HTTPHeader("Content-Security-Policy")}}-Header in der gleichen Antwort vorhanden sind, werden beide Richtlinien berücksichtigt. Die im `Content-Security-Policy` festgelegte Richtlinie wird durchgesetzt, während die `Content-Security-Policy-Report-Only`-Richtlinie Berichte generiert, jedoch nicht durchgesetzt wird.

Beachten Sie, dass eine nur Berichte beinhaltende Richtlinie anders als eine normale Inhalts-Sicherheitsrichtlinie nicht in einem `<meta>`-Element übermittelt werden kann.

### Verstoßmeldungen

Die empfohlene Methode zum Melden von CSP-Verstößen ist die Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API), indem Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} deklariert und einer davon als CSP-Berichtsziel unter Verwendung der {{CSP("report-to")}}-Direktive des `Content-Security-Policy`-Headers angegeben wird.

> [!WARNING]
> Sie können auch die CSP-{{CSP("report-uri")}}-Direktive verwenden, um eine Ziel-URL für CSP-Verstoßberichte anzugeben.
> Dies sendet ein leicht abweichendes JSON-Berichtsformat über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`.
> Dieser Ansatz ist veraltet, aber Sie sollten beide deklarieren, bis {{CSP("report-to")}} in allen Browsern unterstützt wird.
> Mehr Informationen zu diesem Ansatz finden Sie im {{CSP("report-uri")}}-Thema.

Ein Server kann Clients darüber informieren, wo Berichte gesendet werden sollen, indem der {{HTTPHeader("Reporting-Endpoints")}}-HTTP-Antwortheader verwendet wird.
Dieser Header definiert eine oder mehrere Endpunkt-URLs als kommaseparierte Liste.
Zum Beispiel könnte der Header der Serverantwort so aussehen, um einen Berichtsendpunkt namens `csp-endpoint` zu definieren, der Berichte unter `https://example.com/csp-reports` akzeptiert:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die verschiedene Arten von Berichten verarbeiten, würden Sie sie so festlegen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Sie können dann die {{CSP("report-to")}}-Direktive des `Content-Security-Policy`-Headers verwenden, um anzugeben, dass ein bestimmter definierter Endpunkt für die Berichterstattung verwendet werden soll.
Beispielsweise, um CSP-Verstoßberichte für den `default-src` an `https://example.com/csp-reports` zu senden, könnten Sie Antwortheader senden, die so aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn ein CSP-Verstoß auftritt, sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt über eine HTTP-`POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`.
Der Bericht ist eine serialisierte Form des [`Report`](/de/docs/Web/API/Report)-Objekts, das eine `type`-Eigenschaft mit einem Wert von `"csp-violation"` enthält, und ein `body`, das die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist.

Ein typisches Objekt könnte so aussehen:

```json
{
  "age": 53531,
  "body": {
    "blockedURL": "inline",
    "columnNumber": 39,
    "disposition": "enforce",
    "documentURL": "https://example.com/csp-report",
    "effectiveDirective": "script-src-elem",
    "lineNumber": 121,
    "originalPolicy": "default-src 'self'; report-to csp-endpoint-name",
    "referrer": "https://www.google.com/",
    "sample": "console.log(\"lo\")",
    "sourceFile": "https://example.com/csp-report",
    "statusCode": 200
  },
  "type": "csp-violation",
  "url": "https://example.com/csp-report",
  "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}
```

Sie müssen einen Server einrichten, um Berichte mit dem angegebenen JSON-Format und Inhaltstyp zu empfangen.
Der diesen Anforderungen gerecht werdende Server kann dann die eingehenden Berichte auf eine Weise speichern oder verarbeiten, die am besten zu Ihren Bedürfnissen passt.

## Siehe auch

- [CSP-Fehler und Warnungen](/de/docs/Web/HTTP/Guides/CSP/Errors)
- [Mit einer strikten Content Security Policy Cross-Site Scripting mindern](https://web.dev/articles/strict-csp) auf web.dev (2024)
- [Content Security Policy: Ein erfolgreicher Mix aus Härtung und Minderung](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) auf owasp.org
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
