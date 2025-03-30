---
title: Content Security Policy (CSP)
slug: Web/HTTP/Guides/CSP
l10n:
  sourceCommit: 7159a4c0a2f1e886c09268c41c103c4ac7100d63
---

{{HTTPSidebar}}

**Content Security Policy** (CSP) ist eine Funktion, die hilft, bestimmte Arten von Sicherheitsbedrohungen zu verhindern oder zu minimieren. Sie besteht aus einer Reihe von Anweisungen von einer Website an einen Browser, die den Browser anweisen, Einschränkungen auf die Dinge zu setzen, die der Code der Website ausführen darf.

Der Hauptverwendungszweck von CSP ist die Kontrolle darüber, welche Ressourcen, insbesondere JavaScript-Ressourcen, ein Dokument laden darf. Dies wird hauptsächlich als Abwehrmaßnahme gegen {{Glossary("cross-site_scripting", "Cross-Site Scripting")}} (XSS)-Angriffe eingesetzt, bei denen ein Angreifer in der Lage ist, bösartigen Code in die Seite des Opfers einzuschleusen.

CSP kann auch andere Zwecke haben, wie zum Beispiel den Schutz vor [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und die Gewährleistung, dass die Seiten einer Website über HTTPS geladen werden.

In diesem Leitfaden beginnen wir damit, zu beschreiben, wie eine CSP an einen Browser geliefert wird und wie sie in groben Zügen aussieht.

Anschließend beschreiben wir, wie sie verwendet werden kann, um [zu kontrollieren, welche Ressourcen geladen werden](#kontrolle_des_ressourcenladens), um sich gegen XSS zu schützen, sowie andere Anwendungsfälle wie den [Schutz vor Clickjacking](#schutz_gegen_clickjacking) und [das Upgrade unsicherer Anfragen](#upgrade_unsicherer_anfragen). Beachten Sie, dass keine Abhängigkeit zwischen den unterschiedlichen Anwendungsfällen besteht: Wenn Sie den Schutz vor Clickjacking hinzufügen möchten, aber nicht die XSS-Minderung, können Sie einfach die Direktiven für diesen Anwendungsfall hinzufügen.

Abschließend beschreiben wir [Strategien für die Bereitstellung einer CSP](#testen_ihrer_richtlinie) und Tools, die diesen Prozess einfacher machen können.

## CSP-Überblick

Eine CSP sollte in der {{httpheader("Content-Security-Policy")}}-Antwortkopfzeile an den Browser geliefert werden. Sie sollte auf alle Antworten zu allen Anfragen gesetzt werden, nicht nur auf das Hauptdokument.

Sie können sie auch mithilfe des [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attributs Ihres Dokuments im {{htmlelement("meta")}}-Element angeben, was für einige Anwendungsfälle nützlich ist, wie zum Beispiel eine clientseitig gerenderte {{Glossary("SPA", "Single Page App")}}, die nur statische Ressourcen hat, da Sie so auf jede Serverinfrastruktur verzichten können. Diese Option unterstützt jedoch nicht alle Funktionen von CSP.

Die Richtlinie ist als eine Reihe von _Direktiven_ angegeben, die durch Semikolons getrennt sind. Jede Direktive kontrolliert einen unterschiedlichen Aspekt der Sicherheitsrichtlinie. Jede Direktive hat einen Namen, gefolgt von einem Leerzeichen und einem Wert. Unterschiedliche Direktiven können unterschiedliche Syntaxen haben.

Betrachten Sie zum Beispiel die folgende CSP:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

Sie setzt zwei Direktiven:

- die `default-src`-Direktive ist auf `'self'` gesetzt
- die `img-src`-Direktive ist auf `'self' example.com` gesetzt.

![Eine CSP, die in ihre Direktiven aufgeteilt ist.](csp-overview.svg)

Die erste Direktive, `default-src`, weist den Browser an, nur Ressourcen zu laden, die gleichbürtig mit dem Dokument sind, sofern andere spezifischere Direktiven keine andere Richtlinie für andere Ressourcentypen festlegen. Die zweite, `img-src`, weist den Browser an, Bilder zu laden, die gleichbürtig oder von `example.com` gehostet werden.

Im nächsten Abschnitt schauen wir uns die Werkzeuge an, die zur Kontrolle des Ladens von Ressourcen zur Verfügung stehen, was die Hauptfunktion einer CSP ist.

## Kontrolle des Ressourcenladens

Eine CSP kann verwendet werden, um die Ressourcen zu kontrollieren, die ein Dokument laden darf. Dies wird hauptsächlich zum Schutz vor Cross-Site Scripting (XSS)-Angriffen eingesetzt.

In diesem Abschnitt zeigen wir zunächst, wie die Kontrolle über das Laden von Ressourcen helfen kann, sich gegen XSS zu schützen, dann die Werkzeuge, die CSP zur Verfügung stellt, um zu kontrollieren, welche Ressourcen geladen werden. Abschließend beschreiben wir eine besonders empfohlene Strategie, die als "Strikte CSP" bezeichnet wird.

### XSS und Ressourcenladung

Ein Cross-Site Scripting (XSS)-Angriff ist ein Angriff, bei dem ein Angreifer in der Lage ist, seinen Code im Kontext der Zielwebsite auszuführen. Dieser Code kann dann alles tun, was der Code der Website selbst tun könnte, einschließlich zum Beispiel:

- Zugriff auf oder Ändern des Inhalts der geladenen Seiten der Website
- Zugriff auf oder Ändern von Inhalten im lokalen Speicher
- HTTP-Anfragen mit den Anmeldedaten des Benutzers stellen, die es dem Angreifer ermöglichen, sich als der Benutzer auszugeben oder auf sensible Daten zugreifen

Ein XSS-Angriff ist möglich, wenn eine Website einige Eingaben akzeptiert, die von einem Angreifer erstellt worden sein können (zum Beispiel URL-Parameter oder ein Kommentar in einem Blog-Beitrag) und diese dann in die Seite einfügt, ohne sie zu _sanitieren_, das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausgeführt werden kann.

Websites sollten sich gegen XSS schützen, indem sie diese Eingaben vor dem Einfügen in die Seite sanitieren. Eine CSP bietet einen ergänzenden Schutz, der die Website auch dann schützen kann, wenn die Sanitisierung fehlschlägt.

Wenn die Sanitisierung fehlschlägt, gibt es verschiedene Formen, in denen der eingeschleuste bösartige Code im Dokument auftreten kann, einschließlich:

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
  <img onmouseover="console.log(`You've been hacked!`)" />
  ```

- Eine `javascript:`-URL:

  ```html
  <iframe src="javascript:console.log(`You've been hacked!`)"></iframe>
  ```

- Ein String-Argument für eine unsichere API wie [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval):

  ```js
  eval("console.log(`You've been hacked!`)");
  ```

Eine CSP kann Schutz gegen all diese bieten. Mit einer CSP können Sie:

- die erlaubten Quellen für JavaScript-Dateien und andere Ressourcen definieren und damit effektiv das Laden von `https://evil.example.com` blockieren
- Inline-Script-Tags deaktivieren
- nur Script-Tags zulassen, die die richtige Nonce oder den richtigen Hash gesetzt haben
- Inline-Ereignishandler deaktivieren
- `javascript:`-URLs deaktivieren
- gefährliche APIs wie `eval()` deaktivieren

Im nächsten Abschnitt werden wir auf die Werkzeuge eingehen, die CSP bereitstellt, um diese Dinge zu tun.

> [!NOTE]
> Das Setzen einer CSP ersetzt nicht die Sanitisierung von Eingaben. Websites sollten Eingaben _sanitieren_ und eine CSP setzen, um einen mehrschichtigen Schutz gegen XSS zu bieten.

### Fetch-Direktiven

Fetch-Direktiven werden verwendet, um eine spezifische Kategorie von Ressourcen anzugeben, die ein Dokument laden darf — wie JavaScript, CSS-Stylesheets, Bilder, Schriftarten und so weiter.

Es gibt unterschiedliche Fetch-Direktiven für unterschiedliche Ressourcentypen. Zum Beispiel:

- [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) legt erlaubte Quellen für JavaScript fest.
- [`style-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) legt erlaubte Quellen für CSS-Stylesheets fest.
- [`img-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) legt erlaubte Quellen für Bilder fest.

Eine spezielle Fetch-Direktive ist `default-src`, die eine Fallback-Politik für alle Ressourcen festlegt, deren Direktiven nicht explizit aufgeführt sind.

Für die vollständige Liste der Fetch-Direktiven siehe die [Referenzdokumentation](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directives).

Jede Fetch-Direktive ist entweder als das einzelne Schlüsselwort `'none'` oder als eines oder mehrere _Quell-Ausdrücke_ angegeben, die durch Leerzeichen getrennt sind. Wenn mehr als ein Quell-Ausdruck angegeben ist: Wenn eine der Methoden es der Ressource erlaubt, dann ist die Ressource erlaubt.

Zum Beispiel setzt die untenstehende CSP zwei Fetch-Direktiven:

- `default-src` wird der einzelne Quell-Ausdruck `'self'` gegeben
- `img-src` werden zwei Quell-Ausdrücke gegeben: `'self'` und `example.com`

![CSP-Diagramm, das Quell-Ausdrücke zeigt](csp-source-expressions.svg)

Die Wirkung davon ist, dass:

- Bilder entweder gleichbürtig mit dem Dokument sein müssen oder von `example.com` geladen werden
- alle anderen Ressourcen gleichbürtig mit dem Dokument sein müssen.

In den nächsten Abschnitten beschreiben wir einige der Möglichkeiten, wie Sie Quell-Ausdrücke verwenden können, um das Laden von Ressourcen zu kontrollieren. Beachten Sie, dass, obwohl wir sie separat beschreiben, diese Ausdrücke im Allgemeinen kombiniert werden können: Zum Beispiel kann eine einzige Fetch-Direktive Nonces sowie Hostnamen enthalten.

#### Blockierung von Ressourcen

Um einen Ressourcentyp vollständig zu blockieren, verwenden Sie das Schlüsselwort `'none'`. Zum Beispiel blockiert die folgende Direktive alle {{htmlelement("object")}}- und {{htmlelement("embed")}}-Ressourcen:

```http
Content-Security-Policy: object-src 'none'
```

Beachten Sie, dass `'none'` nicht mit einer anderen Methode in einer speziellen Direktive kombiniert werden kann: In der Praxis, wenn andere Quell-Ausdrücke zusammen mit `'none'` angegeben werden, dann werden sie ignoriert.

#### Nonces

Ein `nonce` ist der empfohlene Ansatz zur Beschränkung des Ladens von {{htmlelement("script")}}- und {{htmlelement("style")}}-Ressourcen.

Mit einem Nonce generiert der Server einen Zufallswert für jede HTTP-Antwort und fügt ihn in eine `script-src`- und/oder `style-src`-Direktive ein:

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server fügt diesen Wert dann als Wert des `nonce`-Attributs aller `<script>`- und/oder `<style>`-Tags ein, die sie in das Dokument einfügen möchten.

Der Browser vergleicht die beiden Werte und lädt die Ressource nur, wenn sie übereinstimmen. Die Idee ist, dass selbst wenn ein Angreifer in der Lage ist, einige JavaScript in die Seite einzufügen, er nicht weiß, welches Nonce der Server verwenden wird, sodass der Browser das Script ablehnen wird.

Damit dieser Ansatz funktioniert, darf es für einen Angreifer nicht möglich sein, das Nonce zu erraten.

**In der Praxis bedeutet dies, dass das Nonce für jede HTTP-Antwort unterschiedlich sein muss und nicht vorhersehbar sein darf.**

Dies bedeutet wiederum, dass der Server keine statische HTML-Datei bereitstellen kann, weil er jedes Mal ein neues Nonce einfügen muss. Typischerweise würde der Server eine Template-Engine verwenden, um das Nonce einzufügen.

Hier ist ein Beispielcode in [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs), um dies zu demonstrieren:

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

Bei jeder Anfrage generiert der Server ein neues Nonce, fügt es in die CSP und in die {{htmlelement("script")}}-Tags im zurückgegebenen Dokument ein. Beachten Sie, dass der Server:

- generiert bei jeder Anfrage ein neues Nonce
- kann Nonces sowohl mit externen als auch mit Inline-Skripten verwenden
- verwendet dasselbe Nonce für alle `<script>`-Tags im Dokument

Es ist wichtig, dass der Server irgendeine Art von Templating verwendet, um Nonces einzufügen und sie nicht einfach in alle `<script>`-Tags einfügt: Andernfalls könnte der Server versehentlich Nonces in von einem Angreifer eingeschleuste Skripte einfügen.

Beachten Sie, dass Nonces nur für Elemente verwendet werden können, die ein `nonce`-Attribut haben: Das heißt, nur `<script>`- und `<style>`-Elemente.

#### Hashes

Fetch-Direktiven können auch einen Hash des Skripts verwenden, um seine Integrität zu gewährleisten. Bei dieser Methode:

1. berechnet der Server einen Hash des Skriptinhalts mit einer {{Glossary("hash_function", "Hash-Funktion")}} (einer von SHA-256, SHA-384 oder SHA-512)
2. erstellt eine {{Glossary("Base64", "Base64")}}-Codierung des Ergebnisses
3. fügt ein Präfix hinzu, das den verwendeten Hash-Algorithmus identifiziert (einer von `sha256-`, `sha384-` oder `sha512-`).

Dann fügt er das Ergebnis zur Direktive hinzu:

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

Wenn der Browser das Dokument erhält, hasht er das Skript, vergleicht das Ergebnis mit dem Wert im Header und lädt das Skript nur, wenn sie übereinstimmen.

Externe Skripte müssen auch das [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attribut enthalten, damit diese Methode funktioniert.

Hier ist ein Beispielcode in Express, um dies zu demonstrieren:

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

- Wir haben einen separaten Hash für jedes Skript im Dokument.
- Für das externe Skript "main.js" fügen wir auch das `integrity`-Attribut ein und geben ihm denselben Wert.
- Im Gegensatz zum Beispiel mit Nonces können sowohl die CSP als auch der Inhalt statisch sein, weil die Hashes gleich bleiben. Dies macht hashbasierte Richtlinien besser geeignet für statische Seiten oder Websites, die auf clientseitiges Rendering setzen.

#### Richtlinien auf Basis von Schemata

Fetch-Direktiven können ein Schema, wie `https:`, auflisten, um Ressourcen zu erlauben, die mit diesem Schema bereitgestellt werden. Dies erlaubt es zum Beispiel, eine Richtlinie zu setzen, die HTTPS für alle Ressourcenanfragen erfordert:

```http
Content-Security-Policy: default-src https:
```

#### Standortbasierte Richtlinien

Fetch-Direktiven können das Laden von Ressourcen basierend darauf kontrollieren, wo sich die Ressource befindet.

Das Schlüsselwort `'self'` erlaubt Ressourcen, die gleichbürtig mit dem Dokument selbst sind:

```http
Content-Security-Policy: img-src 'self'
```

Sie können auch einen oder mehrere Hostnamen angeben, möglicherweise einschließlich Platzhaltern, und nur Ressourcen von diesen Hosts werden erlaubt. Dies könnte zum Beispiel verwendet werden, um Inhalte von einem vertrauenswürdigen CDN zu erlauben.

```http
Content-Security-Policy: img-src *.example.org
```

Sie können mehrere Standorte angeben. Die folgende Direktive erlaubt nur Bilder, die gleichbürtig mit dem aktuellen Dokument sind oder von einer Subdomain von "example.org" oder von "example.com" bereitgestellt werden:

```http
Content-Security-Policy: img-src 'self' *.example.org  example.com
```

#### Inline-JavaScript

Wenn eine CSP entweder eine `default-src`- oder eine `script-src`-Direktive enthält, wird Inline-JavaScript nicht zur Ausführung zugelassen, es sei denn, es werden zusätzliche Maßnahmen ergriffen, um es zu ermöglichen. Dies umfasst:

- JavaScript, das innerhalb eines `<script>`-Elements in der Seite enthalten ist:

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
  <a href="javascript:console.log('Hello from a javascript: URL')"></a>
  ```

Das Schlüsselwort `unsafe-inline` kann verwendet werden, um diese Einschränkung zu umgehen. Zum Beispiel erfordert die folgende Direktive, dass alle Ressourcen gleichbürtig sind, erlaubt aber Inline-JavaScript:

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es einen großen Teil des Zwecks einer CSP zunichte macht. Inline-JavaScript ist einer der häufigsten Vektoren für XSS und eines der grundlegendsten Ziele einer CSP ist, dessen unkontrollierte Nutzung zu verhindern.

Inline `<script>`-Elemente sind erlaubt, wenn sie durch eine Nonce oder einen Hash geschützt sind, wie oben beschrieben.

Wenn eine Direktive Nonce- oder Hash-Ausdrücke enthält, wird das Schlüsselwort `unsafe-inline` von Browsern ignoriert.

#### `eval()` und ähnliche APIs

Wie Inline-JavaScript werden, wenn eine CSP entweder eine `default-src`- oder eine `script-src`-Direktive enthält, `eval()` und ähnliche APIs nicht zur Ausführung zugelassen. Dies umfasst unter anderem folgende APIs:

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

Das Schlüsselwort `unsafe-eval` kann verwendet werden, um dieses Verhalten zu überschreiben, und wie bei `unsafe-inline`, und aus denselben Gründen: **Entwickler sollten `unsafe-eval` vermeiden**. Manchmal kann es schwierig sein, die Nutzung von `eval()` zu entfernen: In diesen Situationen kann die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) sicherer machen, indem sie sicherstellt, dass die Eingabe einer definierten Richtlinie entspricht.

Im Gegensatz zu `unsafe-inline` funktioniert das Schlüsselwort `unsafe-eval` weiterhin in einer Direktive, die Nonce- oder Hash-Ausdrücke enthält.

### Strikte CSP

Um das Laden von Skripten als Maßnahme gegen XSS zu kontrollieren, ist es empfohlene Praxis, [nonce-](#nonces) oder [hash-](#hashes) basierte Fetch-Direktiven zu verwenden. Dies wird als _strikte CSP_ bezeichnet. Diese Art von CSP hat zwei Hauptvorteile gegenüber einer standortbasierten CSP (in der Regel als _Allowlist CSP_ bezeichnet):

- Allowlist CSPs sind schwer richtig zu implementieren und oft erlauben Richtlinien versehentlich unsichere Domains und bieten daher keinen effektiven Schutz gegen XSS (siehe [CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)).
- Allowlist CSPs können sehr groß und schwer zu pflegen sein, insbesondere bei der Verwendung von Skripten, die außerhalb Ihrer Kontrolle liegen. Laut [How I learned to stop worrying and love the Content Security Policy](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/), muss ein Entwickler nur, um Google Analytics zu integrieren, 187 Google-Domains zur Allowlist hinzufügen.

Eine nonce-basierte strikte CSP sieht so aus:

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

In dieser CSP:

- verwenden wir Nonces, um zu kontrollieren, welche JavaScript-Ressourcen geladen werden dürfen
- blockieren wir alle Objekteinschlüssen
- blockieren wir alle Verwendungen des `<base>`-Elements, um eine Basis-URI festzulegen.

Eine hash-basierte strikte CSP ist dieselbe, außer dass sie Hashes anstelle von Nonces verwendet:

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

Nonce-basierte Direktiven sind einfacher zu pflegen, wenn Sie die Antworten, einschließlich des Inhalts selbst, dynamisch generieren können. Andernfalls müssen Sie hashbasierte Direktiven verwenden. Das Problem mit hashbasierten Direktiven ist, dass Sie den Hash neu berechnen und erneut anwenden müssen, wenn Änderungen an den Skriptinhalten vorgenommen werden.

#### Das Schlüsselwort `strict-dynamic`

Wie oben dargestellt, ist die strikte CSP schwierig zu implementieren, wenn Sie Skripte verwenden, die nicht unter Ihrer Kontrolle stehen. Wenn ein Dritt-Anbieter-Skript zusätzliche Skripte lädt oder irgendwelche Inline-Skripte verwendet, dann wird dies fehlschlagen, weil das Dritt-Anbieter-Skript das Nonce oder den Hash nicht weitergibt.

Das Schlüsselwort `strict-dynamic` wird bereitgestellt, um bei diesem Problem zu helfen. Es ist ein Schlüsselwort, das in eine Fetch-Direktive aufgenommen werden kann und bewirkt, dass, wenn ein Skript ein Nonce oder einen Hash angehängt hat, dieses Skript weitere Skripte laden darf, die selbst keine Nonces oder Hashes haben. Das heißt, das Vertrauen, das einem Skript durch einen Nonce oder einen Hash gegeben wird, wird an Skripte weitergegeben, die das ursprüngliche Skript lädt (und Skripte, die _sie_ laden, und so weiter).

Zum Beispiel, betrachten Sie ein Dokument wie dieses:

```html
<html>
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

Es enthält ein Skript "main.js", das ein weiteres Skript "main2.js" erstellt und hinzufügt:

```js
console.log("hello");

const scriptElement = document.createElement("script");
scriptElement.src = `main2.js`;

document.head.appendChild(scriptElement);
```

Wir liefern unser Dokument mit einer CSP, die so aussieht:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
```

Das Skript "main.js" darf geladen werden, weil sein Hash mit dem Wert in der CSP übereinstimmt. Aber sein Versuch, "main2.js" zu laden, wird fehlschlagen.

Wenn wir `'strict-dynamic'` zur CSP hinzufügen, darf "main.js" "main2.js" laden:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  strict-dynamic
```

Das `'strict-dynamic'`-Schlüsselwort macht es wesentlich einfacher, nonce- oder hashbasierte CSPs zu erstellen und zu pflegen, insbesondere wenn eine Website Drittanbieter-Skripte verwendet. Es macht Ihre CSP jedoch weniger sicher, weil, wenn die Skripte, die Sie einbinden, `<script>`-Elemente basierend auf potenziellen Quellen von XSS erstellen, die CSP sie nicht schützt.

#### Refactoring von Inline-JavaScript und `eval()`

Wie oben gesehen ist Inline-JavaScript standardmäßig in einer CSP nicht erlaubt. Mit Nonces oder Hashes kann ein Entwickler Inline-`<script>`-Tags verwenden, aber Sie müssen immer noch Code refaktorisieren, um andere nicht erlaubte Muster zu entfernen, einschließlich Inline-Ereignishandler, `javascript:`-URLs und die Verwendung von `eval()`. Zum Beispiel sollten Inline-Ereignishandler normalerweise durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ersetzt werden:

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

## Schutz gegen Clickjacking

Die [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors)-Direktive kann verwendet werden, um zu kontrollieren, welche Dokumente, falls vorhanden, dieses Dokument in einem eingebetteten Browsing-Kontext wie einem {{htmlelement("iframe")}} einbetten dürfen. Dies ist ein effektiver Schutz gegen Clickjacking-Angriffe, da diese Angriffe davon abhängen, die Zielseite in eine vom Angreifer kontrollierte Seite einzubetten.

Die Syntax von `frame-ancestors` ist ein Teil der Syntax der Fetch-Direktive: Sie können den einzelnen Schlüsselwortwert `'none'` oder einen oder mehrere Quell-Ausdrücke angeben. Allerdings sind die einzigen Quell-Ausdrücke, die Sie verwenden können, Schemata, Hostnamen oder der Schlüsselwortwert `'self'`.

Es sei denn, Sie benötigen Ihre Website, um eingebettet werden zu können, sollten Sie `frame-ancestors` auf `'none'` setzen:

```http
Content-Security-Policy: frame-ancestors 'none'
```

Diese Direktive ist ein flexibler Ersatz für den {{httpheader("X-Frame-Options")}}-Header.

## Upgrade unsicherer Anfragen

Webentwickler werden dringend ermutigt, alle ihre Inhalte über HTTPS bereitzustellen. Beim Upgrade einer Website auf HTTPS wird manchmal das Hauptdokument über HTTPS bereitgestellt, jedoch die Ressourcen über HTTP, zum Beispiel durch die Verwendung von Markup wie diesem:

```html
<script src="http://example.org/my-cat.js"></script>
```

Dies wird als _gemischte Inhalte_ bezeichnet, und die Präsenz unsicherer Ressourcen schwächt den Schutz, den HTTPS bietet, erheblich. Nach dem [Algorithmus für gemischte Inhalte](/de/docs/Web/Security/Mixed_content), den Browser implementieren, werden unsichere Ressourcen auf Seiten, die über HTTPS bereitgestellt werden, in "aktualisierbare Inhalte" und "blockierbare Inhalte" kategorisiert. Aktualisierbare Inhalte werden auf HTTPS aktualisiert, und blockierbare Inhalte werden blockiert, was möglicherweise die Seite bricht.

Die letztendliche Lösung für gemischte Inhalte ist, dass Entwickler alle Ressourcen über HTTPS laden. Selbst wenn eine Website tatsächlich in der Lage ist, alle Inhalte über HTTPS bereitzustellen, kann es jedoch für einen Entwickler sehr schwierig (oder sogar unmöglich sein, wenn es sich um archivierte Inhalte handelt) sein, alle URLs, die die Website verwendet, um Ressourcen zu laden, neu zu schreiben.

Die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests)-Direktive ist dazu gedacht, dieses Problem zu lösen. Diese Direktive hat keinen Wert: Um sie zu setzen, fügen Sie einfach den Direktivennamen ein:

```http
Content-Security-Policy: upgrade-insecure-requests
```

Wenn diese Direktive auf einem Dokument gesetzt ist, wird der Browser automatisch HTTPS für alle HTTP-URLs in den folgenden Fällen aktualisieren:

- Anfragen zum Laden von Ressourcen (wie Bilder, Skripte oder Schriftarten)
- Navigationsanfragen (wie Linkziele), die gleichbürtig mit dem Dokument sind
- Navigationsanfragen in eingebetteten Browsing-Kontexten, wie iframes
- Formularübermittlungen

Top-Level-Navigationsanfragen, deren Ziel ein anderer Ursprung ist, werden jedoch nicht aktualisiert.

Zum Beispiel, nehmen wir an, das Dokument unter `https://example.org` wird mit einer CSP bereitgestellt, die die `upgrade-insecure-requests`-Direktive enthält, und das Dokument enthält Markup wie dieses:

```html
<script src="http://example.org/my-cat.js"></script>
<script src="http://not-example.org/another-cat.js"></script>
```

Der Browser wird beide dieser Anfragen automatisch auf HTTPS aktualisieren.

Nehmen wir an, das Dokument enthält auch dies:

```html
<a href="http://example.org/more-cats">See some more cats!</a>
<a href="http://not-example.org/even-more-cats">More cats, on another site!</a>
```

Der Browser wird den ersten Link auf HTTPS aktualisieren, aber nicht den zweiten, da er zu einem anderen Ursprung navigiert.

Diese Direktive ist kein Ersatz für die {{httpheader("Strict-Transport-Security")}}-Header (auch bekannt als HSTS), da sie externe Links zu einer Site nicht aktualisiert. Sites sollten diese Direktive und den `Strict-Transport-Security`-Header einfügen.

## Testen Ihrer Richtlinie

Um die Bereitstellung zu erleichtern, kann CSP im Bericht-Modus bereitgestellt werden.
Die Richtlinie wird nicht erzwungen, aber alle Verstöße werden an den in der Richtlinie angegebenen Berichts-Endpunkt gesendet. Zusätzlich kann ein Bericht-Header verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich bereitzustellen.

Sie können den HTTP-Header {{HTTPHeader("Content-Security-Policy-Report-Only")}} verwenden, um Ihre Richtlinie anzugeben, so:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header als auch ein {{HTTPHeader("Content-Security-Policy")}}-Header in derselben Antwort vorhanden sind, werden beide Richtlinien berücksichtigt.
Die Richtlinie, die in `Content-Security-Policy`-Headern angegeben ist, wird durchgesetzt, während die `Content-Security-Policy-Report-Only`-Richtlinie Berichte generiert, aber nicht durchgesetzt wird.

Beachten Sie, dass im Gegensatz zu einer normalen Inhaltsicherheitspolitik eine Berichtsrichtlinie nicht in einem `<meta>`-Element geliefert werden kann.

### Verletzungsberichte

Die empfohlene Methode zum Berichten von CSP-Verstößen ist die Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API), wobei Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} deklariert werden und einer davon als Ziel für die CSP-Berichterstattung mithilfe der {{CSP("report-to")}}-Direktive des `Content-Security-Policy`-Headers angegeben wird.

> [!WARNING]
> Sie können auch die CSP-{{CSP("report-uri")}}-Direktive verwenden, um eine Ziel-URL für CSP-Verletzungsberichte anzugeben.
> Dies sendet ein wenig anderes JSON-Berichtsformat über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`.
> Dieser Ansatz wird veraltet, aber Sie sollten beide deklarieren, bis {{CSP("report-to")}} in allen Browsern unterstützt wird.
> Für weitere Informationen zu diesem Ansatz siehe das {{CSP("report-uri")}}-Thema.

Ein Server kann Clients informieren, wohin Berichte gesendet werden sollen, mithilfe der {{HTTPHeader("Reporting-Endpoints")}}-HTTP-Antwortkopfzeile.
Dieser Header definiert eine oder mehrere Endpunkt-URLs als Komma-getrennte Liste.
Zum Beispiel, um einen Berichts-Endpunkt namens `csp-endpoint` zu definieren, der Berichte bei `https://example.com/csp-reports` akzeptiert, könnte die Antwortkopfzeile des Servers so aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die unterschiedliche Arten von Berichten behandeln, würden Sie sie so angeben:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Sie können dann die {{CSP("report-to")}}-Direktive des `Content-Security-Policy`-Headers verwenden, um anzugeben, dass ein bestimmter definierter Endpunkt für die Berichterstattung verwendet werden soll.
Zum Beispiel, um CSP-Verletzungsberichte an `https://example.com/csp-reports` für den `default-src` zu senden, könnten Sie Antwortkopfzeilen, die wie folgt aussehen, senden:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn ein CSP-Verstoß auftritt, sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt über eine HTTP-`POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`.
Der Bericht ist eine serialisierte Form des [`Report`](/de/docs/Web/API/Report)-Objekts, das eine `type`-Eigenschaft mit einem Wert von `"csp-violation"` und einen `body` enthält, der die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist.

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
Der Server, der diese Anfragen bearbeitet, kann anschließend die eingehenden Berichte in einer Weise speichern oder verarbeiten, die Ihren Bedürfnissen am besten entspricht.

## Siehe auch

- [Mitigieren von Cross-Site Scripting mit einer strikten Content Security Policy](https://web.dev/articles/strict-csp) auf web.dev (2024)
- [Content Security Policy: Ein erfolgreicher Mix aus Härtung und Minderung](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) auf owasp.org
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
