---
title: Content Security Policy (CSP)
slug: Web/HTTP/Guides/CSP
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

**Content Security Policy** (CSP) ist eine Funktion, die dabei hilft, das Risiko bestimmter Arten von Sicherheitsbedrohungen zu verhindern oder zu minimieren. Sie besteht aus einer Reihe von Anweisungen einer Website an einen Browser, welche den Browser anweisen, Einschränkungen für die Dinge zu setzen, die der Code, aus dem die Website besteht, tun darf.

Der primäre Anwendungsfall für CSP ist die Kontrolle darüber, welche Ressourcen, insbesondere JavaScript-Ressourcen, ein Dokument laden darf. Dies wird hauptsächlich als Verteidigung gegen {{Glossary("cross-site_scripting", "Cross-Site-Scripting")}} (XSS) Angriffe genutzt, bei denen ein Angreifer bösartigen Code in die Website des Opfers einschleusen kann.

Ein CSP kann auch andere Zwecke haben, einschließlich der Verteidigung gegen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und der Unterstützung, dass die Seiten einer Website über HTTPS geladen werden.

In diesem Leitfaden beginnen wir damit zu beschreiben, wie ein CSP an einen Browser geliefert wird und wie es auf hohem Niveau aussieht.

Dann beschreiben wir, wie es verwendet werden kann, um [zu kontrollieren, welche Ressourcen geladen werden](#steuerung_von_ressourcenladungen), um XSS zu verhindern, und anschließend andere Anwendungsfälle wie [Clickjacking-Schutz](#clickjacking-schutz) und [Upgrade unsicherer Anforderungen](#upgrade_unsicherer_anforderungen). Beachten Sie, dass es keine Abhängigkeit zwischen den verschiedenen Anwendungsfällen gibt: Wenn Sie Clickjacking-Schutz hinzufügen möchten, aber nicht XSS-Minderung, können Sie einfach die Anweisungen für diesen Anwendungsfall hinzufügen.

Letztendlich beschreiben wir [Strategien zur Bereitstellung eines CSP](#testen_ihrer_richtlinie) und Werkzeuge, die diesen Prozess erleichtern können.

## CSP-Übersicht

Ein CSP sollte im {{httpheader("Content-Security-Policy")}} Antwort-Header an den Browser geliefert werden. Es sollte auf alle Antworten zu allen Anfragen angewendet werden, nicht nur auf das Hauptdokument.

Sie können es auch mit dem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) Attribut Ihres Dokuments im {{htmlelement("meta")}} Element angeben, und dies ist eine nützliche Option für einige Anwendungsfälle, wie eine clientseitig gerenderte {{Glossary("SPA", "Single Page App")}}, die nur statische Ressourcen hat, da Sie dann vermeiden können, auf jegliche Serverinfrastruktur angewiesen zu sein. Diese Option unterstützt jedoch nicht alle CSP-Funktionen.

Die Richtlinie wird als eine Reihe von _Direktiven_ angegeben, die durch Semikolons getrennt sind. Jede Direktive kontrolliert einen anderen Aspekt der Sicherheitspolitik. Jede Direktive hat einen Namen, gefolgt von einem Leerzeichen, gefolgt von einem Wert. Verschiedene Direktiven können unterschiedliche Syntaxen haben.

Zum Beispiel ein Blick auf das folgende CSP:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

Es setzt zwei Direktiven:

- die `default-src` Direktive ist auf `'self'` gesetzt
- die `img-src` Direktive ist auf `'self' example.com` gesetzt.

![A CSP broken into its directives.](csp-overview.svg)

Die erste Direktive, `default-src`, teilt dem Browser mit, nur Ressourcen zu laden, die gleichen Ursprungs wie das Dokument sind, es sei denn, andere spezifischere Direktiven setzen eine andere Richtlinie für andere Ressourcentypen fest. Die zweite, `img-src`, teilt dem Browser mit, Bilder zu laden, die entweder gleichen Ursprungs oder von `example.com` stammen.

Im nächsten Abschnitt werden wir die Werkzeuge besprechen, die zur Steuerung von Ressourcenladungen zur Verfügung stehen, was die Hauptfunktion eines CSP ist.

## Steuerung von Ressourcenladungen

Ein CSP kann verwendet werden, um zu kontrollieren, welche Ressourcen ein Dokument laden darf. Dies wird hauptsächlich zum Schutz vor Cross-Site-Scripting (XSS) Angriffen verwendet.

In diesem Abschnitt werden wir zunächst sehen, wie die Kontrolle von Ressourcenladungen zum Schutz vor XSS beitragen kann, dann die Werkzeuge, die CSP zur Kontrolle der geladenen Ressourcen bietet, und schließlich eine spezielle empfohlene Strategie beschreiben, die als "Strict CSP" bezeichnet wird.

### XSS und Ressourcenladung

Ein Cross-Site-Scripting (XSS) Angriff ist einer, bei dem es einem Angreifer gelingt, seinen Code im Kontext der Ziel-Website auszuführen. Dieser Code kann dann alles tun, was auch der eigene Code der Website tun könnte, einschließlich zum Beispiel:

- Zugriff auf oder Änderung des Inhalts der geladenen Seiten der Website
- Zugriff auf oder Änderung des Inhalts im lokalen Speicher
- HTTP-Anfragen mit den Anmeldeinformationen des Benutzers stellen, wodurch sie den Benutzer imitieren oder auf sensible Daten zugreifen können

Ein XSS-Angriff ist möglich, wenn eine Website einige Eingaben akzeptiert, die von einem Angreifer erstellt worden sein könnten (z.B. URL-Parameter oder ein Kommentar zu einem Blog-Post) und dann in die Seite einfügt, ohne sie _zu bereinigen_: Das bedeutet, ohne sicherzustellen, dass sie nicht als JavaScript ausgeführt werden können.

Websites sollten sich durch eine Bereinigung dieser Eingaben schützen, bevor sie sie auf der Seite einfügen. Ein CSP bietet einen ergänzenden Schutz, der die Website schützen kann, selbst wenn die Bereinigung fehlschlägt.

Wenn die Bereinigung fehlschlägt, können verschiedene Formen des injizierten bösartigen Codes im Dokument auftreten, einschließlich:

- Ein {{htmlelement("script")}} Tag, das auf eine bösartige Quelle verweist:

  ```html
  <script src="https://evil.example.com/hacker.js"></script>
  ```

- Ein `<script>` Tag, das Inline-JavaScript enthält:

  ```html
  <script>
    console.log("You've been hacked!");
  </script>
  ```

- Ein Inline-Event-Handler:

  ```html
  <img
    onmouseover="console.log(`You've been hacked!`)"
    src="thumbnail.jpg"
    alt="" />
  ```

- Eine `javascript:` URL:

  ```html
  <iframe src="javascript:console.log(`You've been hacked!`)"></iframe>
  ```

- Ein Zeichenkettenargument für eine unsichere API wie [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval):

  ```js
  eval("console.log(`You've been hacked!`)");
  ```

Ein CSP kann Schutz gegen all diese bieten. Mit einem CSP können Sie:

- die erlaubten Quellen für JavaScript-Dateien und andere Ressourcen definieren, wodurch effektiv das Laden von `https://evil.example.com` blockiert wird
- Inline-Skript-Tags deaktivieren
- Nur Skript-Tags zulassen, die den richtigen {{Glossary("Nonce", "nonce")}} oder Hash gesetzt haben
- Inline-Event-Handler deaktivieren
- `javascript:` URLs deaktivieren
- Gefährliche APIs wie `eval()` deaktivieren

Im nächsten Abschnitt werden wir die Werkzeuge durchgehen, die CSP für diese Zwecke bietet.

> [!NOTE]
> Das Setzen eines CSP ist keine Alternative zum Bereinigen der Eingabe. Websites sollten die Eingabe bereinigen _und_ ein CSP setzen, um einen tiefgreifenden Schutz gegen XSS zu bieten.

### Fetch-Direktiven

Fetch-Direktiven werden verwendet, um eine bestimmte Kategorie von Ressourcen anzugeben, die ein Dokument laden darf, wie JavaScript, CSS-Stylesheets, Bilder, Schriftarten und so weiter.

Es gibt verschiedene Fetch-Direktiven für unterschiedliche Ressourcentypen. Zum Beispiel:

- [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) legt erlaubte Quellen für JavaScript fest.
- [`style-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) legt erlaubte Quellen für CSS-Stylesheets fest.
- [`img-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) legt erlaubte Quellen für Bilder fest.

Eine spezielle Fetch-Direktive ist `default-src`, die eine Standardrichtlinie für alle Ressourcen festlegt, deren Direktiven nicht explizit aufgeführt sind.

Für das vollständige Set von Fetch-Direktiven, siehe die [Referenzdokumentation](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directives).

Jede Fetch-Direktive wird entweder als Schlüsselwort `'none'` oder als eine oder mehrere _Quellen-Ausdrücke_, getrennt durch Leerzeichen, spezifiziert. Wenn mehr als eine Quellen-Ausdrücke aufgelistet sind: Wenn eine der Methoden die Ressource zulässt, dann ist die Ressource erlaubt.

Zum Beispiel, das CSP unten setzt zwei Fetch-Direktiven:

- `default-src` erhält den einzigen Quellen-Ausdruck `'self'`
- `img-src` erhält zwei Quellen-Ausdrücke: `'self'` und `example.com`

![CSP-Diagramm, das Quellen-Ausdrücke zeigt](csp-source-expressions.svg)

Die Auswirkungen davon sind:

- Bilder müssen entweder gleichen Ursprungs mit dem Dokument sein oder von `example.com` geladen werden
- alle anderen Ressourcen müssen gleichen Ursprungs mit dem Dokument sein.

In den nächsten Abschnitten beschreiben wir einige der Möglichkeiten, wie Sie Quellen-Ausdrücke verwenden können, um die Ressourcenauslastung zu kontrollieren. Beachten Sie, dass obwohl wir sie separat beschreiben, diese Ausdrücke im Allgemeinen kombiniert werden können: Zum Beispiel kann eine einzelne Fetch-Direktive sowohl nonces als auch Hostnamen enthalten.

#### Ressourcen blockieren

Um einen Ressourcentyp vollständig zu blockieren, verwenden Sie das Schlüsselwort `'none'`. Zum Beispiel blockiert die folgende Direktive alle {{htmlelement("object")}} und {{htmlelement("embed")}} Ressourcen:

```http
Content-Security-Policy: object-src 'none'
```

Beachten Sie, dass `'none'` nicht mit einer anderen Methode in einer bestimmten Direktive kombiniert werden kann: Tatsächlich, wenn neben `'none'` noch andere Quellen-Ausdrücke angegeben werden, werden diese ignoriert.

#### Nonces

Ein `nonce` ist der empfohlene Ansatz, um das Laden von {{htmlelement("script")}} und {{htmlelement("style")}} Ressourcen zu beschränken.

Mit einem nonce generiert der Server einen Zufallswert für jede HTTP-Antwort und inkludiert ihn in einer `script-src` und/oder einer `style-src` Direktive:

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server fügt diesen Wert dann als Wert des `nonce` Attributs aller `<script>` und/oder `<style>` Tags hinzu, die sie im Dokument einfügen möchten.

Der Browser vergleicht die beiden Werte und lädt die Ressource nur, wenn sie übereinstimmen. Die Idee ist, dass selbst wenn ein Angreifer etwas JavaScript in die Seite einfügen kann, er nicht wissen wird, welchen nonce der Server verwenden wird, so dass der Browser sich weigert, das Skript auszuführen.

Damit dieser Ansatz funktioniert, darf es für einen Angreifer nicht möglich sein, den nonce zu erraten.

**In der Praxis bedeutet dies, dass der nonce für jede HTTP-Antwort anders sein muss und nicht vorhersehbar sein darf.**

Dies bedeutet wiederum, dass der Server kein statisches HTML ausliefern kann, da er jedes Mal einen neuen nonce einfügen muss. Typischerweise würde der Server eine Template-Engine verwenden, um den nonce einzufügen.

Hier ist ein Express-Code-Snippet, um dies zu demonstrieren:

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

Bei jedem Anfrage generiert der Server einen neuen nonce, fügt ihn in das CSP und in die {{htmlelement("script")}} Tags im zurückgegebenen Dokument ein. Beachten Sie, dass der Server:

- einen neuen nonce für jede Anfrage generiert
- nonces mit sowohl externen als auch Inline-Skripten verwenden kann
- denselben nonce für alle `<script>` Tags im Dokument verwendet

Es ist wichtig, dass der Server eine Art Templating verwendet, um nonces einzufügen, und sie nicht einfach in alle `<script>` Tags einfügt: Andernfalls könnte der Server versehentlich nonces in Skripte einfügen, die von einem Angreifer eingeschleust wurden.

Beachten Sie, dass nonces nur für Elemente verwendet werden können, die ein `nonce` Attribut haben: Das heißt, nur `<script>` und `<style>` Elemente.

#### Hashes

Fetch-Direktiven können auch einen Hash des Skripts verwenden, um dessen Integrität zu garantieren. Mit dieser Methode:

1. berechnet der Server einen Hash des Skriptinhalts mit einer {{Glossary("hash_function", "Hash-Funktion")}} (eine von SHA-256, SHA-384 oder SHA-512)
2. erstellt eine {{Glossary("Base64", "Base64")}} Kodierung des Ergebnisses
3. hängt ein Präfix an, das den verwendeten Hash-Algorithmus identifiziert (einer von `sha256-`, `sha384-` oder `sha512-`).

Dann fügt er das Ergebnis der Direktive hinzu:

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

Wenn der Browser das Dokument empfängt, hasht er das Skript, vergleicht das Ergebnis mit dem Wert aus dem Header und lädt das Skript nur, wenn sie übereinstimmen.

Externe Skripte müssen auch das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut einschließen, damit diese Methode funktioniert.

Hier ist ein Express-Code-Snippet, um dies zu demonstrieren:

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
- Für das externe Skript "main.js" fügen wir auch das `integrity` Attribut hinzu und geben ihm denselben Wert.
- Im Gegensatz zum Beispiel mit nonces können sowohl das CSP als auch der Inhalt statisch sein, weil die Hashes gleich bleiben. Dies macht Hash-basierte Richtlinien geeigneter für statische Seiten oder Websites, die auf clientseitigem Rendering beruhen.

#### Schema-basierte Richtlinien

Fetch-Direktiven können ein Schema auflisten, wie `https:`, um Ressourcen zu erlauben, die mit diesem Schema bereitgestellt werden. Dies erlaubt zum Beispiel einer Richtlinie, HTTPS für alle Ressourcenladungen zu verlangen:

```http
Content-Security-Policy: default-src https:
```

#### Standortbasierte Richtlinien

Fetch-Direktiven können Ressourcenladungen basierend darauf steuern, wo sich die Ressource befindet.

Das Schlüsselwort `'self'` erlaubt Ressourcen, die gleichen Ursprungs wie das Dokument selbst sind:

```http
Content-Security-Policy: img-src 'self'
```

Sie können auch einen oder mehrere Hostnamen angeben, möglicherweise einschließlich Platzhaltern, und nur Ressourcen, die von diesen Hosts bereitgestellt werden, werden erlaubt. Dies könnte zum Beispiel verwendet werden, um Inhalte zu erlauben, die von einem vertrauenswürdigen CDN bereitgestellt werden.

```http
Content-Security-Policy: img-src *.example.org
```

Sie können mehrere Standorte angeben. Die folgende Direktive erlaubt nur Bilder, die gleichen Ursprungs mit dem aktuellen Dokument sind, oder die von einem Subdomain von "example.org" oder von "example.com" bereitgestellt werden:

```http
Content-Security-Policy: img-src 'self' *.example.org  example.com
```

#### Inline-JavaScript

Wenn ein CSP entweder eine `default-src` oder eine `script-src` Direktive enthält, dann darf Inline-JavaScript nicht ausgeführt werden, es sei denn, es werden zusätzliche Maßnahmen ergriffen, um es zu erlauben. Dies umfasst:

- JavaScript, das innerhalb eines `<script>` Elements auf der Seite enthalten ist:

  ```html
  <script>
    console.log("Hello from an inline script");
  </script>
  ```

- JavaScript in einem Inline-Event-Handler-Attribut:

  ```html
  <img src="x" onerror="console.log('Hello from an inline event handler')" />
  ```

- JavaScript in einer `javascript:` URL:

  ```html
  <a href="javascript:console.log('Hello from a javascript: URL')">Click me</a>
  ```

Das Schlüsselwort `unsafe-inline` kann verwendet werden, um diese Einschränkung zu überschreiben. Zum Beispiel verlangt die folgende Direktive, dass alle Ressourcen gleichen Ursprungs sind, erlaubt aber Inline-JavaScript:

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es einen großen Teil des Zwecks eines CSPs zunichtemacht. Inline-JavaScript ist einer der häufigsten XSS-Vektoren, und eines der grundlegendsten Ziele eines CSP ist es, seine unkontrollierte Verwendung zu verhindern.

Inline `<script>` Elemente sind erlaubt, wenn sie durch einen nonce oder einen Hash geschützt sind, wie oben beschrieben.

Wenn eine Direktive nonce- oder Hash-Ausdrücke enthält, wird das Schlüsselwort `unsafe-inline` von Browsern ignoriert.

#### `eval()` und ähnliche APIs

Wie Inline-JavaScript wird `eval()` und ähnliche APIs in einem CSP nicht erlaubt, wenn eine `default-src` oder eine `script-src` Direktive enthalten ist. Dies schließt, unter anderem, APIs ein:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) selbst:

  ```js
  eval('console.log("hello from eval()")');
  ```

- Den {{jsxref("Function/Function()", "Function()")}} Konstruktor:

  ```js
  const sum = new Function("a", "b", "return a + b");
  ```

- Das Zeichenkettenargument für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval):

  ```js
  setTimeout("console.log('hello from setTimeout')", 1);
  ```

Das Sicherheitswort `unsafe-eval` kann verwendet werden, um dieses Verhalten zu überschreiben, und wie bei `unsafe-inline`, und aus denselben Gründen: **Entwickler sollten `unsafe-eval` vermeiden**.

Manchmal kann es schwierig sein, die Verwendung von `eval()` und den anderen Methoden zu entfernen: In diesen Situationen kann die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) es sicherer machen, indem sichergestellt wird, dass der Input einer definierten Richtlinie entspricht. Das Schlüsselwort `trusted-types-eval` sollte in diesem Fall verwendet werden, um das Verhalten zu überschreiben. Im Gegensatz zu `unsafe-inline` überschreibt es nur das Verhalten im Browser, wenn Trusted Types unterstützt und aktiviert sind; was sicherstellt, dass die Methoden weiterhin in Browsern blockiert bleiben, die keine Trusted Types unterstützen.

Im Gegensatz zu `unsafe-inline` funktioniert das Schlüsselwort `unsafe-eval` weiterhin in einer Direktive, die nonce- oder Hash-Ausdrücke enthält.

### Strict CSP

Um das Laden von Skripten als Abmilderung gegen XSS zu steuern, wird empfohlen, [nonce-](#nonces) oder [hash-](#hashes) basierte Fetch-Direktiven zu verwenden. Dies wird als _strict CSP_ bezeichnet. Diese Art von CSP hat zwei Hauptvorteile gegenüber einer standortbasierten CSP (normalerweise als _Allowlist CSP_ bezeichnet):

- Allowlist CSPs sind schwer richtig umzusetzen und oft whitelisten Richtlinien versehentlich unsichere Domains und bieten daher keinen effektiven Schutz gegen XSS (siehe [CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)).
- Allowlist CSPs können sehr groß und schwer zu pflegen sein, insbesondere wenn Skripte verwendet werden, die nicht unter Ihrer Kontrolle stehen. Laut [How I learned to stop worrying and love the Content Security Policy](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/), wird einem Entwickler allein, um Google Analytics zu integrieren, geraten, 187 Google-Domains auf die Allowlist zu setzen.

Eine nonce-basierte strict CSP sieht so aus:

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

In diesem CSP:

- verwenden wir nonces, um zu kontrollieren, welche JavaScript-Ressourcen geladen werden dürfen
- blockieren wir alle Objekt-Einbettungen
- blockieren wir alle Verwendungen des `<base>` Elements, um eine Basis-URI festzulegen.

Eine hash-basierte strict CSP ist dieselbe, außer dass sie Hashes statt nonces verwendet:

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

Nonce-basierte Direktiven sind einfacher zu pflegen, wenn Sie Antworten, einschließlich des Inhalts selbst, dynamisch generieren können. Andernfalls müssen Sie Hash-basierte Direktiven verwenden. Das Problem bei Hash-basierten Direktiven ist, dass Sie den Hash neu berechnen und wieder anwenden müssen, wenn Änderungen am Skriptinhalt vorgenommen werden.

#### Das `strict-dynamic` Schlüsselwort

Wie oben dargestellt, ist das strict CSP schwer umzusetzen, wenn Sie Skripte verwenden, die nicht unter Ihrer Kontrolle stehen. Wenn ein Drittanbieter-Skript weitere Skripte lädt oder Inline-Skripte verwendet, wird dies fehlschlagen, da das Drittanbieter-Skript den nonce oder Hash nicht übermittelt.

Das `strict-dynamic` Schlüsselwort wird bereitgestellt, um mit diesem Problem zu helfen. Es ist ein Schlüsselwort, das in eine Fetch-Direktive aufgenommen werden kann, und es hat die Wirkung, dass, wenn ein Skript einen nonce oder einen Hash hat, das Skript erlaubt wird, weitere Skripte zu laden, die selbst keinen nonce oder Hash haben. Das Vertrauen, das ein Skript durch einen nonce oder einen Hash erhält, wird an Skripte weitergegeben, die das ursprüngliche Skript lädt (und Skripte, die _sie_ laden, und so weiter).

Zum Beispiel, betrachten Sie ein Dokument wie dieses:

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

Es beinhaltet ein Skript "main.js", das ein weiteres Skript, "main2.js", erstellt und hinzufügt:

```js
console.log("hello");

const scriptElement = document.createElement("script");
scriptElement.src = `main2.js`;

document.head.appendChild(scriptElement);
```

Wir liefern unser Dokument mit einem CSP wie diesem:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
```

Das Skript "main.js" wird geladen, weil sein Hash mit dem Wert im CSP übereinstimmt. Aber sein Versuch, "main2.js" zu laden, wird fehlschlagen.

Wenn wir `'strict-dynamic'` zu dem CSP hinzufügen, dann kann "main.js" "main2.js" laden:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  'strict-dynamic'
```

Das `'strict-dynamic'` Schlüsselwort macht es viel einfacher, nonce- oder hash-basierte CSPs zu erstellen und zu pflegen, insbesondere wenn eine Website Drittanbieter-Skripte verwendet. Es macht Ihr CSP allerdings weniger sicher, weil, wenn die von Ihnen eingefügten Skripte basierend auf potenziellen XSS-Quellen `<script>` Elemente erstellen, das CSP diese nicht schützen wird.

#### Neustrukturierung von Inline-JavaScript und `eval()`

Wir haben gesehen, dass Inline-JavaScript standardmäßig in einem CSP nicht erlaubt ist. Mit nonces oder Hashes kann ein Entwickler Inline-`<script>` Tags verwenden, aber Sie müssen den Code trotzdem umstrukturieren, um andere nicht erlaubte Muster zu entfernen, einschließlich Inline-Event-Handler, `javascript:` URLs und die Verwendung von `eval()`. Zum Beispiel sollten Inline-Event-Handler normalerweise durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ersetzt werden:

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

Die [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) Direktive kann verwendet werden, um zu kontrollieren, welche Dokumente, falls vorhanden, dieses Dokument in einem verschachtelten Browsing-Kontext wie einem {{htmlelement("iframe")}} einbetten dürfen. Dies ist ein effektiver Schutz gegen Clickjacking-Angriffe, da diese Angriffe davon abhängen, dass die Ziel-Website in einer von Angreifern kontrollierten Website eingebettet wird.

Die Syntax von `frame-ancestors` ist ein Unterbereich der Fetch-Direktiven-Syntax: Sie können den einzigen Schlüsselwortwert `'none'` oder einen oder mehrere Quellen-Ausdrücke angeben. Die einzigen Quellen-Ausdrücke, die Sie verwenden können, sind jedoch Schemen, Hostnamen oder der `'self'` Schlüsselwortwert.

Es sei denn, Ihre Website muss eingebettbar sein, sollten Sie `frame-ancestors` auf `'none'` setzen:

```http
Content-Security-Policy: frame-ancestors 'none'
```

Diese Direktive ist ein flexiblerer Ersatz für den {{httpheader("X-Frame-Options")}} Header.

## Upgrade unsicherer Anforderungen

Webentwickler werden dringend ermutigt, alle Inhalte über HTTPS zu servieren. Beim Prozess der Umstellung einer Website auf HTTPS kann es vorkommen, dass eine Website das Hauptdokument über HTTPS ausliefert, aber ihre Ressourcen über HTTP, zum Beispiel unter Verwendung von Markup wie diesem:

```html
<script src="http://example.org/my-cat.js"></script>
```

Dies wird als _mixed content_ bezeichnet, und das Vorhandensein unsicherer Ressourcen schwächt den Schutz, den HTTPS bietet, erheblich. Nach dem von den Browsern implementierten [gemischten Inhaltsalgorithmus](/de/docs/Web/Security/Defenses/Mixed_content) werden unsichere Ressourcen, wenn ein Dokument über HTTPS geladen wird, in "upgradable content" und "blockable content" kategorisiert. Upgradable content wird zu HTTPS aufgewertet, und blockable content wird blockiert, was möglicherweise die Seite bricht.

Die ultimative Lösung für Mixed Content ist, dass Entwickler alle Ressourcen über HTTPS laden. Aber selbst wenn eine Website tatsächlich in der Lage ist, alle Inhalte über HTTPS auszuliefern, kann es für einen Entwickler immer noch sehr schwierig (oder sogar effektiv unmöglich sein, wo archivierte Inhalte betroffen sind), alle URLs, die die Website zum Laden von Ressourcen verwendet, umzuschreiben.

Die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) Direktive ist dafür gedacht, dieses Problem zu lösen. Diese Direktive hat keinen Wert: um sie festzulegen, geben Sie einfach den Direktivennamen an:

```http
Content-Security-Policy: upgrade-insecure-requests
```

Wenn diese Direktive auf ein Dokument gesetzt wird, dann wird der Browser automatisch alle HTTP-URLs in folgenden Fällen auf HTTPS aufwerten:

- Anfragen zum Laden von Ressourcen (wie Bilder, Skripte oder Schriftarten)
- Navigationsanfragen (wie Linkziele), die mit dem Dokument gleichen Ursprungs sind
- Navigationsanfragen in verschachtelten Browsing-Kontexten, wie iframes
- Formularübermittlungen

Allerdings werden Top-Level-Navigationsanfragen, deren Ziel ein anderer Ursprung ist, nicht aufgewertet.

Zum Beispiel, nehmen wir an, das Dokument unter `https://example.org` wird mit einem CSP ausgeliefert, das die `upgrade-insecure-requests` Direktive enthält, und das Dokument enthält Markup wie dieses:

```html
<script src="http://example.org/my-cat.js"></script>
<script src="http://not-example.org/another-cat.js"></script>
```

Der Browser wird beide Anfragen automatisch zu HTTPS aufwerten.

Nehmen wir an, das Dokument enthält auch dies:

```html
<a href="http://example.org/more-cats">See some more cats!</a>
<a href="http://not-example.org/even-more-cats">More cats, on another site!</a>
```

Der Browser wird den ersten Link zu HTTPS aufwerten, aber nicht den zweiten, da er zu einem anderen Ursprung navigiert.

Diese Direktive ist kein Ersatz für den {{httpheader("Strict-Transport-Security")}} Header (auch bekannt als HSTS), da sie keine externen Links zu einer Website aufwertet. Websites sollten diese Direktive und den `Strict-Transport-Security` Header enthalten.

## Testen Ihrer Richtlinie

Um die Bereitstellung zu erleichtern, kann CSP im Nur-Bericht-Modus bereitgestellt werden.
Die Richtlinie wird nicht durchgesetzt, aber alle Verstöße werden an den in der Richtlinie angegebenen Berichterstattungsendpunkt gesendet. Zusätzlich kann ein Nur-Bericht-Header verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich einzusetzen.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header verwenden, um Ihre Richtlinie anzugeben, wie dies:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header als auch ein {{HTTPHeader("Content-Security-Policy")}} Header in derselben Antwort vorhanden sind, werden beide Richtlinien beachtet. Die in den `Content-Security-Policy` Headern angegebene Richtlinie wird durchgesetzt, während die `Content-Security-Policy-Report-Only` Richtlinie Berichte generiert, aber nicht durchgesetzt wird.

Beachten Sie, dass im Gegensatz zu einer normalen Inhalts-Sicherheitsrichtlinie eine Nur-Bericht-Richtlinie nicht in einem `<meta>` Element bereitgestellt werden kann.

### Verstoßbericht

Die empfohlene Methode zur Meldung von CSP-Verstößen ist die Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API), indem Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} deklariert und einer davon als Ziel für die CSP-Berichterstattung mit der `Content-Security-Policy` Header {{CSP("report-to")}} Direktive angegeben wird.

> [!WARNING]
> Sie können auch die CSP {{CSP("report-uri")}} Direktive verwenden, um eine Ziel-URL für CSP-Verstoßberichte anzugeben. Diese sendet ein etwas anderes JSON-Berichtsformat über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`. Dieser Ansatz ist veraltet, aber Sie sollten beide angeben, bis {{CSP("report-to")}} in allen Browsern unterstützt wird. Für weitere Informationen zu diesem Ansatz siehe das {{CSP("report-uri")}} Thema.

Ein Server kann Clients mitteilen, wo Berichte hin gesendet werden sollen, indem er den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header verwendet. Dieser Header definiert einen oder mehrere Endpunkt-URLs als kommaseparierte Liste. Zum Beispiel, um einen Berichtsendpunkt namens `csp-endpoint` zu definieren, der Berichte unter `https://example.com/csp-reports` akzeptiert, könnte der Header der Serverantwort folgendermaßen aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die unterschiedliche Arten von Berichten verarbeiten, würden Sie sie folgendermaßen spezifizieren:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Sie können dann die `Content-Security-Policy` Header {{CSP("report-to")}} Direktive verwenden, um anzugeben, dass ein bestimmter definierter Endpunkt für die Berichterstattung verwendet werden soll. Zum Beispiel, um CSP-Verstoßberichte an `https://example.com/csp-reports` für die `default-src` zu senden, könnten Sie Antwort-Header senden, die folgendermaßen aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn ein CSP-Verstoß auftritt, sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt über eine HTTP `POST`-Operation, mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`. Der Bericht ist eine serialisierte Form des [`Report`](/de/docs/Web/API/Report) Objekts und enthält eine `type` Eigenschaft mit einem Wert von `"csp-violation"` und einen `body`, der die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Objekts ist.

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

Sie müssen einen Server einrichten, um Berichte mit dem angegebenen JSON-Format und Inhaltstyp zu empfangen. Der Server, der diese Anfragen bearbeitet, kann dann die eingehenden Berichte auf eine Weise speichern oder verarbeiten, die Ihren Bedürfnissen am besten entspricht.

## Siehe auch

- [CSP-Fehler und Warnungen](/de/docs/Web/HTTP/Guides/CSP/Errors)
- [Mitigate cross-site scripting with a strict Content Security Policy](https://web.dev/articles/strict-csp) auf web.dev (2024)
- [Content Security Policy: A successful mess between hardening and mitigation](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) auf owasp.org
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
