---
title: Content Security Policy (CSP)
slug: Web/HTTP/Guides/CSP
l10n:
  sourceCommit: a33c2c8081a1df867a0a334afc560057b2124bad
---

{{HTTPSidebar}}

**Content Security Policy** (CSP) ist ein Feature, das dabei hilft, das Risiko bestimmter Sicherheitsbedrohungen zu verhindern oder zu minimieren. Es besteht aus einer Reihe von Anweisungen einer Website an einen Browser, die den Browser anweisen, Einschränkungen für das, was der Code der Seite tun darf, zu setzen.

Das Hauptanwendungsbeispiel für CSP ist die Kontrolle darüber, welche Ressourcen, insbesondere JavaScript-Ressourcen, ein Dokument laden darf. Dies wird hauptsächlich als Verteidigung gegen {{Glossary("cross-site_scripting", "Cross-Site-Scripting")}} (XSS)-Angriffe verwendet, bei denen ein Angreifer in der Lage ist, bösartigen Code in die Seite des Opfers einzuschleusen.

Ein CSP kann auch andere Zwecke haben, einschließlich der Verteidigung gegen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und der Unterstützung der Gewährleistung, dass die Seiten einer Website über HTTPS geladen werden.

In diesem Leitfaden beschreiben wir zunächst, wie ein CSP an einen Browser übermittelt wird und wie es auf hoher Ebene aussieht.

Dann beschreiben wir, wie es verwendet werden kann, um [die geladenen Ressourcen zu kontrollieren](#kontrolle_der_ressourcenladung), um gegen XSS zu schützen, sowie andere Anwendungsfälle wie [Schutz vor Clickjacking](#schutz_vor_clickjacking) und [Aufrüsten unsicherer Anfragen](#aufrüsten_unsicherer_anfragen). Beachten Sie, dass keine Abhängigkeit zwischen den verschiedenen Anwendungsfällen besteht: Wenn Sie einen Schutz gegen Clickjacking hinzufügen möchten, aber keine XSS-Minderung, können Sie einfach die Direktiven für diesen Anwendungsfall hinzufügen.

Zum Schluss beschreiben wir [Strategien zur Bereitstellung eines CSP](#testen_ihrer_richtlinie) und Tools, die diesen Prozess erleichtern können.

## CSP-Übersicht

Ein CSP sollte dem Browser im {{httpheader("Content-Security-Policy")}}-Antwort-Header übermittelt werden. Es sollte auf alle Antworten auf alle Anfragen angewendet werden, nicht nur auf das Hauptdokument.

Sie können es auch mit dem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attribut Ihres Dokumentes im {{htmlelement("meta")}}-Element spezifizieren. Dies ist eine nützliche Option für bestimmte Anwendungsfälle, wie eine clientseitig gerenderte {{Glossary("SPA", "Single Page App")}}, die nur statische Ressourcen hat, weil Sie dann jegliche Server-Infrastruktur vermeiden können. Diese Option unterstützt jedoch nicht alle CSP-Features.

Die Richtlinie wird als eine Reihe von _Direktiven_ angegeben, die durch Strichpunkte getrennt sind. Jede Direktive steuert einen anderen Aspekt der Sicherheitspolitik. Jede Direktive hat einen Namen, gefolgt von einem Leerzeichen, gefolgt von einem Wert. Verschiedene Direktiven können unterschiedliche Syntaxen haben.

Betrachten Sie zum Beispiel das folgende CSP:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

Es setzt zwei Direktiven:

- die `default-src`-Direktive ist auf `'self'` gesetzt
- die `img-src`-Direktive ist auf `'self' example.com` gesetzt.

![Ein in seine Direktiven zerlegtes CSP.](csp-overview.svg)

Die erste Direktive, `default-src`, weist den Browser an, nur Ressourcen zu laden, die den gleichen Ursprung wie das Dokument haben, es sei denn, andere spezifischere Direktiven setzen eine andere Richtlinie für andere Ressourcentypen. Die zweite, `img-src`, weist den Browser an, Bilder zu laden, die denselben Ursprung haben oder von `example.com` stammen.

Im nächsten Abschnitt betrachten wir die verfügbare Werkzeuge zur Kontrolle der Ressourcenladung, was die Hauptfunktion eines CSP ist.

## Kontrolle der Ressourcenladung

Ein CSP kann verwendet werden, um die Ressourcen zu steuern, die ein Dokument laden darf. Dies wird hauptsächlich zum Schutz gegen Cross-Site-Scripting (XSS)-Angriffe verwendet.

In diesem Abschnitt werden wir zunächst sehen, wie die Kontrolle der Ressourcenladungen helfen kann, sich gegen XSS zu schützen, dann auf die Werkzeuge eingehen, die CSP bietet, um zu kontrollieren, welche Ressourcen geladen werden. Schließlich beschreiben wir eine bestimmte empfohlene Strategie, die als "Strict CSP" bezeichnet wird.

### XSS und Ressourcenladung

Ein Cross-Site-Scripting (XSS)-Angriff ist einer, bei dem ein Angreifer in der Lage ist, seinen Code im Kontext der Zielwebsite auszuführen. Dieser Code kann dann alles tun, was der eigene Code der Website tun könnte, einschließlich zum Beispiel:

- Zugriff auf oder Modifikation des Inhalts der geladenen Seiten der Website
- Zugriff auf oder Modifikation von Inhalten im lokalen Speicher
- HTTP-Anfragen mit den Anmeldedaten des Benutzers durchführen, wodurch er in der Lage ist, sich als der Benutzer auszugeben oder auf sensible Daten zuzugreifen

Ein XSS-Angriff ist möglich, wenn eine Website einige Eingaben akzeptiert, die von einem Angreifer erstellt worden sein könnten (zum Beispiel URL-Parameter oder ein Kommentar in einem Blogbeitrag) und diese dann in die Seite einfügt, ohne sie zu _sanitisieren_: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausgeführt werden können.

Websites sollten sich gegen XSS schützen, indem sie diese Eingaben sanitisieren, bevor sie in die Seite eingefügt werden. Ein CSP bietet einen ergänzenden Schutz, der die Website schützen kann, selbst wenn die Sanitisierung fehlschlägt.

Wenn die Sanitisierung fehlschlägt, gibt es verschiedene Formen, die der eingeschleuste bösartige Code im Dokument annehmen kann, einschließlich:

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

- Ein Inline-Event-Handler:

  ```html
  <img onmouseover="console.log(`You've been hacked!`)" />
  ```

- Eine `javascript:` URL:

  ```html
  <iframe src="javascript:console.log(`You've been hacked!`)"></iframe>
  ```

- Ein String-Argument für eine unsichere API wie [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval):

  ```js
  eval("console.log(`You've been hacked!`)");
  ```

Ein CSP kann Schutz gegen all dies bieten. Mit einem CSP können Sie:

- die erlaubten Quellen für JavaScript-Dateien und andere Ressourcen definieren, effektiv das Laden von `https://evil.example.com` blockieren
- Inline-Script-Tags deaktivieren
- nur Script-Tags zulassen, die den korrekten Nonce oder Hash gesetzt haben
- Inline-Event-Handler deaktivieren
- `javascript:` URLs deaktivieren
- gefährliche APIs wie `eval()` deaktivieren

Im nächsten Abschnitt werden wir die Werkzeuge durchgehen, die CSP bietet, um diese Dinge zu tun.

> [!NOTE]
> Das Setzen eines CSP ist kein Ersatz für die Sanitisierung von Eingaben. Websites sollten Eingaben _sanitisieren_ und ein CSP setzen, um einen Verteidigung in der Tiefe gegen XSS zu bieten.

### Fetch-Direktiven

Fetch-Direktiven werden verwendet, um eine bestimmte Kategorie von Ressourcen anzugeben, die ein Dokument laden darf — wie JavaScript, CSS-Stylesheets, Bilder, Schriftarten und so weiter.

Es gibt unterschiedliche Fetch-Direktiven für verschiedene Ressourcentypen. Zum Beispiel:

- [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) legt erlaubte Quellen für JavaScript fest.
- [`style-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) legt erlaubte Quellen für CSS-Stylesheets fest.
- [`img-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) legt erlaubte Quellen für Bilder fest.

Eine spezielle Fetch-Direktive ist `default-src`, welche eine Ersatz-Richtlinie für alle Ressourcen festlegt, deren Direktiven nicht explizit aufgelistet sind.

Für die vollständige Liste der Fetch-Direktiven siehe die [Referenzdokumentation](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directives).

Jede Fetch-Direktive wird entweder als einzelnes Schlüsselwort `'none'` oder als eine oder mehrere _Quellausdrücke_ angegeben, die durch Leerzeichen getrennt sind. Wenn mehr als ein Quellausdruck aufgelistet ist: Wenn eine der Methoden die Ressource erlaubt, dann ist die Ressource erlaubt.

Zum Beispiel setzt das nachfolgende CSP zwei Fetch-Direktiven:

- `default-src` wird der einzige Quellausdruck `'self'` gegeben
- `img-src` werden zwei Quellausdrücke gegeben: `'self'` und `example.com`

![CSP-Diagramm, das Quellausdrücke zeigt](csp-source-expressions.svg)

Die Auswirkung davon ist, dass:

- Bilder entweder denselben Ursprung wie das Dokument haben oder von `example.com` geladen werden müssen
- alle anderen Ressourcen denselben Ursprung wie das Dokument haben müssen.

In den nächsten Abschnitten beschreiben wir einige der Möglichkeiten, wie Sie Quellausdrücke verwenden können, um die Ressourcennutzung zu steuern. Beachten Sie, dass obwohl wir sie separat beschreiben, diese Ausdrücke im Allgemeinen kombiniert werden können: zum Beispiel kann eine einzelne Fetch-Direktive sowohl Nonce als auch Hostnamen enthalten.

#### Ressourcen blockieren

Um einen Ressourcentyp vollständig zu blockieren, verwenden Sie das `'none'`-Schlüsselwort. Zum Beispiel blockiert die folgende Direktive alle {{htmlelement("object")}}- und {{htmlelement("embed")}}-Ressourcen:

```http
Content-Security-Policy: object-src 'none'
```

Beachten Sie, dass `'none'` nicht mit einer anderen Methode in einer bestimmten Direktive kombiniert werden kann: In der Praxis, wenn andere Quelldirektiven neben `'none'` angegeben werden, werden sie ignoriert.

#### Nonce

Ein `nonce` ist der empfohlene Ansatz, um das Laden von {{htmlelement("script")}}- und {{htmlelement("style")}}-Ressourcen einzuschränken.

Mit einem Nonce generiert der Server einen Zufallswert für jede HTTP-Antwort und fügt ihn in eine `script-src`- und/oder eine `style-src`-Direktive ein:

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server fügt diesen Wert dann als Wert des `nonce`-Attributs aller `<script>`- und/oder `<style>`-Tags ein, die sie in das Dokument aufnehmen möchten.

Der Browser vergleicht die beiden Werte und lädt die Ressource nur, wenn sie übereinstimmen. Die Idee ist, dass selbst wenn ein Angreifer etwas JavaScript in die Seite einfügen kann, sie nicht wissen, welcher Nonce der Server verwenden wird, sodass der Browser das Skript nicht ausführt.

Damit dieser Ansatz funktioniert, darf es einem Angreifer nicht möglich sein, den Nonce zu erraten.

**In der Praxis bedeutet das, dass der Nonce für jede HTTP-Antwort unterschiedlich sein muss und nicht vorhersehbar sein darf.**

Dies bedeutet wiederum, dass der Server kein statisches HTML ausliefern kann, da er jedes Mal einen neuen Nonce einfügen muss. In der Regel verwendet der Server eine Template-Engine, um den Nonce einzufügen.

Hier ist ein Ausschnitt von [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)-Code zur Demonstration:

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

Bei jeder Anfrage generiert der Server einen neuen Nonce, fügt ihn in das CSP und in die {{htmlelement("script")}}-Tags im zurückgegebenen Dokument ein. Beachten Sie, dass der Server:

- für jede Anfrage einen neuen Nonce generiert
- Nonces sowohl mit externen als auch mit Inline-Skripten verwenden kann
- denselben Nonce für alle `<script>`-Tags im Dokument verwendet

Es ist wichtig, dass der Server irgendeine Art von Templating verwendet, um Nonces einzufügen, und nicht einfach in alle `<script>`-Tags einfügt: andernfalls könnte der Server versehentlich Nonces in Skripte einfügen, die von einem Angreifer eingeschleust wurden.

Beachten Sie, dass Nonces nur für Elemente verwendet werden können, die ein `nonce`-Attribut haben: das heißt, nur `<script>`- und `<style>`-Elemente.

#### Hashes

Fetch-Direktiven können auch einen Hash des Skripts verwenden, um seine Integrität zu garantieren. Mit dieser Methode:

1. berechnet der Server einen Hash des Skriptinhalts mit einer {{Glossary("hash_function", "Hashfunktion")}} (einer von SHA-256, SHA-384 oder SHA-512)
2. erstellt eine {{Glossary("Base64", "Base64")}}-Codierung des Ergebnisses
3. hängt ein Präfix an, das den verwendeten Hash-Algorithmus identifiziert (einer von `sha256-`, `sha384-` oder `sha512-`).

Dann fügt er das Ergebnis in die Direktive ein:

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

Wenn der Browser das Dokument empfängt, hasht er das Skript, vergleicht das Ergebnis mit dem Wert aus dem Header und lädt das Skript nur, wenn sie übereinstimmen.

Externe Skripte müssen ebenfalls das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut enthalten, damit diese Methode funktioniert.

Hier ist ein Ausschnitt von Express-Code zur Demonstration:

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

- Wir für jedes Skript im Dokument einen separaten Hash haben.
- Für das externe Skript "main.js" fügen wir auch das `integrity`-Attribut hinzu und geben ihm denselben Wert.
- Im Gegensatz zum Beispiel mit Nonces können sowohl das CSP als auch der Inhalt statisch sein, da die Hashwerte gleich bleiben. Dies macht Hash-basierte Richtlinien besser geeignet für statische Seiten oder Websites, die auf clientseitigem Rendering basieren.

#### Schema-basierte Richtlinien

Fetch-Direktiven können ein Schema, wie `https:`, auflisten, um Ressourcen zu erlauben, die über dieses Schema bereitgestellt werden. Dies ermöglicht es beispielsweise, eine Richtlinie zu erzwingen, die HTTPS für alle Ressourcenladungen erfordert:

```http
Content-Security-Policy: default-src https:
```

#### Standortbasierte Richtlinien

Fetch-Direktiven können die Ressourcennutzung basierend auf dem Standort der Ressource steuern.

Das Schlüsselwort `'self'` erlaubt Ressourcen, die denselben Ursprung wie das Dokument selbst haben:

```http
Content-Security-Policy: img-src 'self'
```

Sie können auch einen oder mehrere Hostnamen angeben, möglicherweise einschließlich Platzhaltern, und nur von diesen Hosts bereitgestellte Ressourcen werden erlaubt. Dies könnte beispielsweise verwendet werden, um das Bereitstellen von Inhalten von einem vertrauenswürdigen CDN zu erlauben.

```http
Content-Security-Policy: img-src *.example.org
```

Sie können mehrere Standorte angeben. Die folgende Direktive erlaubt nur Bilder, die denselben Ursprung wie das aktuelle Dokument haben oder von einer Subdomain von "example.org" oder von "example.com" bereitgestellt werden:

```http
Content-Security-Policy: img-src 'self' *.example.org  example.com
```

#### Inline-Javascript

Wenn eine CSP entweder eine `default-src`- oder eine `script-src`-Direktive enthält, darf Inline-JavaScript nicht ausgeführt werden, es sei denn, es werden zusätzliche Maßnahmen ergriffen, um es zu ermöglichen. Dies schließt ein:

- JavaScript, das in einem `<script>`-Element in der Seite enthalten ist:

  ```html
  <script>
    console.log("Hello from an inline script");
  </script>
  ```

- JavaScript in einem Inline-Eventhandler-Attribut:

  ```html
  <img src="x" onerror="console.log('Hello from an inline event handler')" />
  ```

- JavaScript in einer `javascript:` URL:

  ```html
  <a href="javascript:console.log('Hello from a javascript: URL')"></a>
  ```

Das `unsafe-inline`-Schlüsselwort kann verwendet werden, um diese Einschränkung zu überschreiben. Zum Beispiel erfordert die folgende Direktive, dass alle Ressourcen denselben Ursprung haben, erlaubt jedoch Inline-JavaScript:

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es den Großteil des Zwecks eines CSPs zunichtemacht. Inline-JavaScript ist einer der häufigsten XSS-Vektoren, und eines der grundlegenden Ziele eines CSPs ist es, dessen unkontrollierte Verwendung zu verhindern.

Inline-`<script>`-Elemente sind erlaubt, wenn sie durch einen Nonce oder einen Hash geschützt sind, wie oben beschrieben.

Wenn eine Direktive Nonce- oder Hash-Ausdrücke enthält, wird das `unsafe-inline`-Schlüsselwort von Browsern ignoriert.

#### `eval()` und ähnliche APIs

Wie Inline-JavaScript dürfen `eval()` und ähnliche APIs nicht ausgeführt werden, wenn ein CSP entweder eine `default-src`- oder eine `script-src`-Direktive enthält. Dies schließt unter anderem die folgenden APIs ein:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) selbst:

  ```js
  eval('console.log("hello from eval()")');
  ```

- Den {{jsxref("Function/Function()", "Function()")}}-Konstruktor:

  ```js
  const sum = new Function("a", "b", "return a + b");
  ```

- Das String-Argument für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval):

  ```js
  setTimeout("console.log('hello from setTimeout')", 1);
  ```

Das `unsafe-eval`-Schlüsselwort kann verwendet werden, um dieses Verhalten zu überschreiben, und wie bei `unsafe-inline`, aus den gleichen Gründen: **Entwickler sollten `unsafe-eval` vermeiden**. Manchmal kann es schwierig sein, die Verwendung von `eval()` zu beseitigen: In diesen Fällen kann die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) sicherer machen, indem sie sicherstellt, dass der Input einer definierten Richtlinie entspricht.

Im Gegensatz zu `unsafe-inline` funktioniert das `unsafe-eval`-Schlüsselwort immer noch in einer Direktive, die Nonce- oder Hash-Ausdrücke enthält.

### Strikte CSP

Um das Laden von Skripten als Minderung gegen XSS zu steuern, wird empfohlen, [Nonce-](#nonce) oder [Hash-](#hashes) basierte Fetch-Direktiven zu verwenden. Dies wird als _strikte CSP_ bezeichnet. Diese Art der CSP hat zwei große Vorteile gegenüber einer standortbasierten CSP (normalerweise als _Allowlist-CSP_ bezeichnet):

- Allowlist-CSPs sind schwer richtig zu machen und oft werden versehentlich unsichere Domänen freigegeben, und bieten daher keinen effektiven Schutz gegen XSS (siehe [CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)).
- Allowlist-CSPs können sehr groß und schwer zu verwalten sein, insbesondere wenn Skripte verwendet werden, die außerhalb Ihrer Kontrolle liegen. Laut [How I learned to stop worrying and love the Content Security Policy](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/) wird einem Entwickler, um Google Analytics zu integrieren, empfohlen, 187 Google-Domänen in die Allowlist aufzunehmen.

Eine Nonce-basierte strikte CSP sieht so aus:

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

In dieser CSP:

- verwenden wir Nonces, um zu steuern, welche JavaScript-Ressourcen geladen werden dürfen
- blockieren wir alle Objekt-Embeddings
- blockieren wir alle Verwendungen des `<base>`-Elements, um eine Basis-URI festzulegen.

Eine Hash-basierte strikte CSP ist die gleiche, außer dass sie anstelle von Nonces Hashes verwendet:

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

Nonce-basierte Direktiven sind einfacher zu warten, wenn Sie Antworten, einschließlich des Inhalts selbst, dynamisch generieren können. Andernfalls müssen Sie hashbasierte Direktiven verwenden. Das Problem bei hashbasierten Direktiven ist, dass Sie den Hash neu berechnen und erneut anwenden müssen, wenn Änderungen am Skriptinhalt vorgenommen werden.

#### Das `strict-dynamic`-Schlüsselwort

Wie oben dargestellt, ist die strikte CSP schwer umzusetzen, wenn Sie Skripte verwenden, die sich nicht in Ihrer Kontrolle befinden. Wenn ein Drittanbieter-Skript zusätzliche Skripte lädt oder Inline-Skripte verwendet, wird dies fehlschlagen, da das Drittanbieter-Skript den Nonce oder Hash nicht durchführt.

Das `strict-dynamic`-Schlüsselwort wird bereitgestellt, um bei diesem Problem zu helfen. Es ist ein Schlüsselwort, das in eine Fetch-Direktive aufgenommen werden kann, und hat die Wirkung, dass wenn ein Skript einen Nonce oder einen Hash angehängt hat, dieses Skript erlaubt wird, weitere Skripte zu laden, die selbst keine Nonces oder Hashes haben. Das heißt, das Vertrauen, das in ein Skript durch einen Nonce oder Hash gesetzt wird, wird auf Skripte übertragen, die das ursprüngliche Skript lädt (und Skripte, die _sie_ laden, und so weiter).

Betrachten Sie zum Beispiel ein Dokument wie dieses:

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

Es enthält ein Skript "main.js", das ein weiteres Skript, "main2.js", erstellt und hinzufügt:

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

Das Skript "main.js" darf geladen werden, weil sein Hash mit dem Wert im CSP übereinstimmt. Aber der Versuch, "main2.js" zu laden, wird fehlschlagen.

Wenn wir `'strict-dynamic'` dem CSP hinzufügen, darf "main.js" "main2.js" laden:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  strict-dynamic
```

Das `'strict-dynamic'`-Schlüsselwort macht es viel einfacher, Nonce- oder Hash-basierte CSPs zu erstellen und zu pflegen, insbesondere wenn eine Website Drittanbieter-Skripte verwendet. Es macht Ihre CSP jedoch weniger sicher, denn wenn die Skripte, die Sie einfügen, `<script>`-Elemente basierend auf potenziellen XSS-Quellen erstellen, wird der CSP sie nicht schützen.

#### Refactoring von Inline-JavaScript und `eval()`

Wir haben oben gesehen, dass Inline-JavaScript standardmäßig in einem CSP nicht erlaubt ist. Mit Nonces oder Hashes kann ein Entwickler Inline-`<script>`-Tags verwenden, aber Sie müssen den Code trotzdem überarbeiten, um andere nicht erlaubte Muster zu entfernen, einschließlich Inline-Event-Handler, `javascript:` URLs und Verwendungen von `eval()`. Zum Beispiel sollten Inline-Event-Handler normalerweise durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ersetzt werden:

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

## Schutz vor Clickjacking

Die [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors)-Direktive kann verwendet werden, um zu steuern, welche Dokumente, wenn überhaupt, dieses Dokument in einem eingebetteten Browsing-Kontext wie einem {{htmlelement("iframe")}} einbetten dürfen. Dies ist ein effektiver Schutz gegen Clickjacking-Angriffe, da diese Angriffe auf der Einbettung der Zielseite in eine vom Angreifer kontrollierte Seite basieren.

Die Syntax von `frame-ancestors` ist ein Teil der Fetch-Direktiv-Syntax: Sie können den einzelnen Schlüsselwortwert `'none'` oder einen oder mehrere Quellausdrücke angeben. Die einzigen Quellausdrücke, die Sie verwenden können, sind jedoch Schemata, Hostnamen oder das `'self'`-Schlüsselwort.

Es sei denn, Sie brauchen Ihre Seite, um einbettbar zu sein, sollten Sie `frame-ancestors` auf `'none'` setzen:

```http
Content-Security-Policy: frame-ancestors 'none'
```

Diese Direktive ist ein flexibler Ersatz für den {{httpheader("X-Frame-Options")}}-Header.

## Aufrüsten unsicherer Anfragen

Webentwickler werden dringend ermutigt, alle ihre Inhalte über HTTPS bereitzustellen. Im Zuge der Umstellung einer Website auf HTTPS wird manchmal das Hauptdokument über HTTPS bereitgestellt, während die Ressourcen über HTTP bereitgestellt werden, zum Beispiel mit einem Markup wie diesem:

```html
<script src="http://example.org/my-cat.js"></script>
```

Dies wird als _Mixed Content_ bezeichnet, und das Vorhandensein unsicherer Ressourcen schwächt den Schutz, den HTTPS bietet, erheblich. Unter dem [Mixed Content-Algorithmus](/de/docs/Web/Security/Mixed_content), den Browser implementieren, wenn ein Dokument über HTTPS bereitgestellt wird, werden unsichere Ressourcen in "aufsteigbare Inhalte" und "blockierbare Inhalte" kategorisiert. Aufsteigbare Inhalte werden auf HTTPS aktualisiert, und blockierbare Inhalte werden blockiert, was möglicherweise die Seite unterbricht.

Die ultimative Lösung für Mixed Content besteht darin, dass Entwickler alle Ressourcen über HTTPS laden. Jedoch, selbst wenn eine Website tatsächlich in der Lage ist, alle Inhalte über HTTPS bereitzustellen, kann es für einen Entwickler immer noch sehr schwierig (oder sogar effektiv unmöglich, wo es um archivierte Inhalte geht) sein, alle URLs, die die Website verwendet, um Ressourcen zu laden, umzuschreiben.

Die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests)-Direktive soll dieses Problem lösen. Diese Direktive hat keinen Wert: Um sie zu setzen, fügen Sie einfach den Direktivenamen ein:

```http
Content-Security-Policy: upgrade-insecure-requests
```

Wenn diese Direktive auf einem Dokument gesetzt ist, wird der Browser automatisch HTTP-URLs in den folgenden Fällen auf HTTPS aufrüsten:

- Anfragen zum Laden von Ressourcen (wie Bilder, Skripte oder Schriftarten)
- Navigationsanfragen (wie Linkziele), die denselben Ursprung wie das Dokument haben
- Navigationsanfragen in eingebetteten Browsing-Kontexten, wie iframes
- Formularübermittlungen

Navigationsanfragen auf oberster Ebene, deren Ziel ein anderer Ursprung ist, werden jedoch nicht aufgerüstet.

Zum Beispiel, wenn das Dokument unter `https://example.org` mit einem CSP bereitgestellt wird, das die `upgrade-insecure-requests`-Direktive enthält, und das Dokument Markup wie dieses enthält:

```html
<script src="http://example.org/my-cat.js"></script>
<script src="http://not-example.org/another-cat.js"></script>
```

Der Browser wird beide Anfragen automatisch auf HTTPS aufrüsten.

Angenommen, das Dokument enthält auch dies:

```html
<a href="http://example.org/more-cats">See some more cats!</a>
<a href="http://not-example.org/even-more-cats">More cats, on another site!</a>
```

Der Browser wird den ersten Link auf HTTPS aufrüsten, jedoch nicht den zweiten, da er zu einem anderen Ursprung navigiert.

Diese Direktive ist kein Ersatz für den {{httpheader("Strict-Transport-Security")}}-Header (auch bekannt als HSTS), da sie keine externen Links zu einer Site aufrüstet. Sites sollten diese Direktive und den `Strict-Transport-Security`-Header einschließen.

## Testen Ihrer Richtlinie

Um die Bereitstellung zu erleichtern, kann CSP im Berichtmodus bereitgestellt werden.
Die Richtlinie wird nicht durchgesetzt, aber alle Verstöße werden an den im Policy-Header spezifizierten Meldeendpunkt gesendet. Darüber hinaus kann ein Header im Berichtmodus verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich bereitzustellen.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header verwenden, um Ihre Richtlinie zu spezifizieren, wie folgt:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header als auch ein {{HTTPHeader("Content-Security-Policy")}} Header in derselben Antwort vorhanden sind, werden beide Richtlinien berücksichtigt.
Die im `Content-Security-Policy` Header spezifizierte Richtlinie wird durchgesetzt, während die `Content-Security-Policy-Report-Only` Richtlinie Berichte generiert, aber nicht durchgesetzt wird.

Beachten Sie, dass im Gegensatz zu einer normalen inhaltlichen Sicherheitsrichtlinie eine Berichtrichtlinie nicht in einem `<meta>`-Element bereitgestellt werden kann.

### Berichterstattung bei Verstößen

Die empfohlene Methode zur Berichterstattung bei Verstößen gegen CSP ist die Verwendung des [Reporting API](/de/docs/Web/API/Reporting_API), mit der Sie Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} deklarieren und einen davon als CSP-Berichtsziel mit der {{CSP("report-to")}} Direktive des `Content-Security-Policy` Headers festlegen.

> [!WARNING]
> Sie können auch die CSP-{{CSP("report-uri")}}-Direktive verwenden, um eine Ziel-URL für CSP-Verstoßberichte anzugeben.
> Diese sendet ein leicht anderes JSON-Berichtformat über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`.
> Dieser Ansatz ist veraltet, aber Sie sollten beides deklarieren, bis {{CSP("report-to")}} in allen Browsern unterstützt wird.
> Für weitere Informationen über den Ansatz siehe das {{CSP("report-uri")}}-Thema.

Ein Server kann Clients darüber informieren, wohin Berichte gesendet werden sollen, indem er den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header verwendet.
Dieser Header definiert eine oder mehrere Endpunkt-URLs als kommagetrennte Liste.
Um zum Beispiel einen Berichts-Endpunkt namens `csp-endpoint` zu definieren, der Berichte an `https://example.com/csp-reports` akzeptiert, könnte der Antwort-Header des Servers folgendermaßen aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die unterschiedliche Arten von Berichten verarbeiten, sollten Sie sie wie folgt spezifizieren:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Sie können dann die {{CSP("report-to")}}-Direktive des `Content-Security-Policy` Headers verwenden, um zu spezifizieren, dass ein bestimmter definierter Endpunkt für das Reporting verwendet werden soll.
Zum Beispiel, um CSP-Verstoßberichte an `https://example.com/csp-reports` für die `default-src` zu senden, könnten Sie Antwort-Header senden, die so aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn ein CSP-Verstoß auftritt, sendet der Browser den Bericht als JSON-Objekt an den spezifizierten Endpunkt über eine HTTP-`POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`.
Der Bericht ist eine serialisierte Form des [`Report`](/de/docs/Web/API/Report)-Objekts und enthält eine `type`-Eigenschaft mit einem Wert von `"csp-violation"`, und einen `body`, der die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist.

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

Sie müssen einen Server einrichten, um Berichte mit dem gegebenen JSON-Format und Inhaltstyp zu empfangen.
Der Server, der diese Anfragen bearbeitet, kann dann die eingehenden Berichte speichern oder verarbeiten, auf eine Weise, die Ihren Bedürfnissen am besten entspricht.

## Siehe auch

- [CSP-Fehler und Warnungen](/de/docs/Web/HTTP/Guides/CSP/Errors)
- [Mitigieren von Cross-Site-Scripting mit einer strikten Content-Security-Policy](https://web.dev/articles/strict-csp) auf web.dev (2024)
- [Content-Security-Policy: Ein erfolgreicher Durcheinander zwischen Härtung und Minderung](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- [Content-Security-Policy Ressource Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) auf owasp.org
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
