---
title: Content Security Policy (CSP)
slug: Web/HTTP/CSP
l10n:
  sourceCommit: 5900d847574b0afd7757218aefa3da6acfb474e3
---

{{HTTPSidebar}}

**Content Security Policy** (CSP) ist eine Funktion, die hilft, das Risiko bestimmter Sicherheitsbedrohungen zu verhindern oder zu minimieren. Es besteht aus einer Reihe von Anweisungen von einer Website an einen Browser, die dem Browser vorschreiben, Einschränkungen für die Dinge zu machen, die der Code der Website tun darf.

Der Hauptanwendungsfall für CSP besteht darin, zu kontrollieren, welche Ressourcen, insbesondere JavaScript-Ressourcen, ein Dokument laden darf. Dies wird hauptsächlich als Verteidigung gegen {{Glossary("cross-site_scripting", "Cross-Site Scripting")}} (XSS)-Angriffe verwendet, bei denen ein Angreifer in der Lage ist, bösartigen Code in die Website des Opfers einzuschleusen.

Ein CSP kann auch andere Zwecke erfüllen, einschließlich der Verteidigung gegen {{Glossary("clickjacking", "Clickjacking")}} und der Sicherstellung, dass die Seiten einer Website über HTTPS geladen werden.

In diesem Leitfaden beschreiben wir zunächst, wie ein CSP an einen Browser übermittelt wird und wie es auf hoher Ebene aussieht.

Dann beschreiben wir, wie es verwendet werden kann, um [zu kontrollieren, welche Ressourcen geladen werden](#kontrolle_des_ressourcenladens), um sich gegen XSS zu schützen, und dann andere Anwendungsfälle wie [Clickjacking-Schutz](#clickjacking-schutz) und [Upgrade unsicherer Anfragen](#upgrade_unsicherer_anfragen). Beachten Sie, dass es keine Abhängigkeit zwischen den verschiedenen Anwendungsfällen gibt: Wenn Sie Clickjacking-Schutz hinzufügen möchten, aber nicht die Abschwächung von XSS, können Sie einfach die Direktiven für diesen Anwendungsfall hinzufügen.

Abschließend beschreiben wir [Strategien zur Bereitstellung eines CSP](#testen_sie_ihre_richtlinie) und Tools, die diesen Prozess erleichtern können.

## CSP-Übersicht

Ein CSP sollte dem Browser im {{httpheader("Content-Security-Policy")}}-Antwort-Header übermittelt werden. Es sollte auf alle Antworten auf alle Anfragen gesetzt werden, nicht nur auf das Hauptdokument.

Sie können es auch mit dem [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attribut des {{htmlelement("meta")}}-Elements Ihres Dokuments angeben, was für einige Anwendungsfälle eine nützliche Option ist, wie zum Beispiel eine client-seitig gerenderte {{Glossary("SPA", "Single Page App")}}, die nur statische Ressourcen hat, da Sie dann auf keine Server-Infrastruktur angewiesen sind. Diese Option unterstützt jedoch nicht alle CSP-Funktionen.

Die Richtlinie wird als Reihe von _Direktiven_ angegeben, getrennt durch Semikolons. Jede Direktive steuert einen anderen Aspekt der Sicherheitsrichtlinie. Jede Direktive hat einen Namen, gefolgt von einem Leerzeichen und einem Wert. Unterschiedliche Direktiven können unterschiedliche Syntaxen haben.

Zum Beispiel, betrachten Sie das folgende CSP:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

Es setzt zwei Direktiven:

- die `default-src`-Direktive ist auf `'self'` gesetzt
- die `img-src`-Direktive ist auf `'self' example.com` gesetzt.

![Ein CSP, aufgebrochen in seine Direktiven.](csp-overview.svg)

Die erste Direktive, `default-src`, sagt dem Browser, dass er nur Ressourcen laden soll, die mit dem Dokument origin-gleich sind, es sei denn, andere, spezifischere Direktiven setzen eine andere Richtlinie für andere Ressourcentypen. Die zweite, `img-src`, sagt dem Browser, dass er Bilder laden soll, die origin-gleich oder von `example.com` sind.

Im nächsten Abschnitt werden wir die verfügbaren Tools zur Steuerung des Ressourcenladens betrachten, was die Hauptfunktion eines CSP ist.

## Kontrolle des Ressourcenladens

Ein CSP kann verwendet werden, um die Ressourcen zu kontrollieren, die ein Dokument laden darf. Dies wird hauptsächlich zum Schutz gegen Cross-Site Scripting (XSS)-Angriffe verwendet.

In diesem Abschnitt sehen wir zunächst, wie die Kontrolle des Ressourcenladens helfen kann, sich gegen XSS zu schützen, dann die Werkzeuge, die CSP bereitstellt, um zu kontrollieren, welche Ressourcen geladen werden. Abschließend beschreiben wir eine besondere empfohlene Strategie, die als "Strict CSP" bezeichnet wird.

### XSS und Ressourcenladen

Ein Cross-Site Scripting (XSS)-Angriff ist einer, bei dem ein Angreifer in der Lage ist, seinen Code im Kontext der Ziel-Website auszuführen. Dieser Code kann dann alles tun, was der eigene Code der Website tun könnte, einschließlich zum Beispiel:

- Zugriff oder Änderung des Inhalts der geladenen Seiten der Website
- Zugriff oder Änderung von Inhalten im lokalen Speicher
- HTTP-Anfragen mit den Anmeldedaten des Benutzers durchführen, was es ihm ermöglicht, den Benutzer zu impersonalisieren oder auf sensible Daten zuzugreifen

Ein XSS-Angriff ist möglich, wenn eine Website eine Eingabe akzeptiert, die von einem Angreifer erstellt worden sein könnte (zum Beispiel URL-Parameter oder ein Kommentar zu einem Blog-Post) und diese dann in die Seite einfügt, ohne sie _zu sanitizieren_: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausgeführt werden kann.

Websites sollten sich gegen XSS schützen, indem sie diese Eingaben sanitisieren, bevor sie sie in die Seite einfügen. Ein CSP bietet einen ergänzenden Schutz, der die Website auch dann schützen kann, wenn die Sanitizierung fehlschlägt.

Wenn die Sanitizierung tatsächlich fehlschlägt, gibt es verschiedene Formen, die der eingespritzte bösartige Code im Dokument annehmen kann, einschließlich:

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

Ein CSP kann Schutz gegen all diese Dinge bieten. Mit einem CSP können Sie:

- die erlaubten Quellen für JavaScript-Dateien und andere Ressourcen definieren und so effektiv Ladungen von `https://evil.example.com` blockieren
- Inline-Skript-Tags deaktivieren
- Nur Skript-Tags zulassen, die den korrekten Nonce oder Hash setzen
- Inline-Ereignishandler deaktivieren
- `javascript:` URLs deaktivieren
- Gefährliche APIs wie `eval()` deaktivieren

Im nächsten Abschnitt werden wir über die Werkzeuge sprechen, die CSP zur Verfügung stellt, um diese Dinge zu tun.

> [!NOTE]
> Das Setzen eines CSP ist kein Ersatz für die Sanitizierung von Eingaben. Websites sollten Eingaben sowohl sanitizieren _als auch_ ein CSP setzen, um einen tiefgreifenden Schutz gegen XSS zu bieten.

### Fetch-Direktiven

Fetch-Direktiven werden verwendet, um eine bestimmte Kategorie von Ressourcen anzugeben, die ein Dokument laden darf, wie zum Beispiel JavaScript, CSS-Stylesheets, Bilder, Schriftarten usw.

Es gibt verschiedene Fetch-Direktiven für verschiedene Arten von Ressourcen. Zum Beispiel:

- [`script-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) legt erlaubte Quellen für JavaScript fest.
- [`style-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) legt erlaubte Quellen für CSS-Stylesheets fest.
- [`img-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) legt erlaubte Quellen für Bilder fest.

Eine spezielle Fetch-Direktive ist `default-src`, die eine Fallback-Politik für alle Ressourcen festlegt, deren Direktiven nicht ausdrücklich aufgelistet sind.

Für die vollständige Liste der Fetch-Direktiven siehe die [Referenzdokumentation](/de/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directives).

Jede Fetch-Direktive wird entweder als das einzelne Schlüsselwort `'none'` oder als ein oder mehrere _Quellenausdrücke_ angegeben, getrennt durch Leerzeichen. Wenn mehr als ein Quellenausdruck aufgeführt ist: Wenn eine der Methoden die Ressource erlaubt, ist die Ressource erlaubt.

Zum Beispiel, das untenstehende CSP setzt zwei Fetch-Direktiven:

- `default-src` bekommt den einzelnen Quellenausdruck `'self'`
- `img-src` bekommt zwei Quellenausdrücke: `'self'` und `example.com`

![CSP-Diagramm, das Quellenausdrücke zeigt](csp-source-expressions.svg)

Der Effekt davon ist, dass:

- Bilder entweder origin-gleich mit dem Dokument sein müssen, oder von `example.com` geladen werden
- alle anderen Ressourcen origin-gleich mit dem Dokument sein müssen.

In den nächsten Abschnitten werden wir einige der Möglichkeiten beschreiben, wie Sie Quellenausdrücke verwenden können, um das Laden von Ressourcen zu steuern. Beachten Sie, dass, obwohl wir sie separat beschreiben, diese Ausdrücke allgemein kombiniert werden können: Zum Beispiel kann eine einzelne Fetch-Direktive Nonces sowie Hostnamen enthalten.

#### Ressourcen blockieren

Um einen Ressourcentyp vollständig zu blockieren, verwenden Sie das Schlüsselwort `'none'`. Zum Beispiel blockiert die folgende Direktive alle {{htmlelement("object")}}- und {{htmlelement("embed")}}-Ressourcen:

```http
Content-Security-Policy: object-src 'none'
```

Beachten Sie, dass `'none'` nicht mit einer anderen Methode in einer bestimmten Direktive kombiniert werden kann: In der Praxis, wenn irgendwelche anderen Quellenausdrücke neben `'none'` angegeben werden, werden sie ignoriert.

#### Nonces

Ein `nonce` ist der empfohlene Ansatz, um das Laden von {{htmlelement("script")}}- und {{htmlelement("style")}}-Ressourcen einzuschränken.

Mit einem Nonce generiert der Server für jede HTTP-Antwort einen zufälligen Wert und fügt ihn in eine `script-src` und/oder eine `style-src` Direktive ein:

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server fügt diesen Wert dann als Wert des `nonce`-Attributs aller `<script>`- und/oder `<style>`-Tags hinzu, die sie in das Dokument einfügen möchten.

Der Browser vergleicht die beiden Werte und lädt die Ressource nur, wenn sie übereinstimmen. Die Idee ist, dass selbst wenn ein Angreifer in der Lage ist, JavaScript in die Seite einzuschleusen, er nicht wissen wird, welchen Nonce der Server verwenden wird, sodass der Browser das Skript nicht ausführt.

Damit dieser Ansatz funktioniert, muss es unmöglich sein, dass ein Angreifer den Nonce errät.

**In der Praxis bedeutet dies, dass der Nonce für jede HTTP-Antwort unterschiedlich und nicht vorhersagbar sein muss.**

Dies bedeutet wiederum, dass der Server kein statisches HTML ausliefern kann, da er jedes Mal einen neuen Nonce einfügen muss. Normalerweise würde der Server eine Templating-Engine verwenden, um den Nonce einzufügen.

Hier ist ein Auszug aus [Express](/de/docs/Learn/Server-side/Express_Nodejs)-Code, um das zu demonstrieren:

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

- einen neuen Nonce für jede Anfrage generiert
- Nonces mit sowohl externen als auch Inline-Skripten verwenden kann
- den gleichen Nonce für alle `<script>`-Tags im Dokument verwendet

Es ist wichtig, dass der Server eine Art von Templating verwendet, um Nonces einzufügen, und sie nicht einfach in alle `<script>`-Tags einfügt: Andernfalls könnte der Server unbeabsichtigt Nonces in Skripte einfügen, die von einem Angreifer injiziert wurden.

Beachten Sie, dass Nonces nur für Elemente verwendet werden können, die ein `nonce`-Attribut haben: Das heißt, nur `<script>` und `<style>` Elemente.

#### Hashes

Fetch-Direktiven können auch einen Hash des Skripts verwenden, um seine Integrität zu gewährleisten. Bei dieser Methode:

1. berechnet der Server einen Hash des Skriptinhalts mit einer {{Glossary("cryptographic_hash_function", "kryptographischen Hash-Funktion")}} (eine von SHA-256, SHA-384 oder SHA-512)
2. erstellt er eine {{Glossary("Base64", "Base64")}}-Codierung des Ergebnisses
3. fügt er einen Präfix hinzu, der den verwendeten Hash-Algorithmus angibt (einer von `sha256-`, `sha384-` oder `sha512-`).

Dann fügt er das Ergebnis zur Direktive hinzu:

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

Wenn der Browser das Dokument erhält, hasht er das Skript, vergleicht das Ergebnis mit dem Wert aus dem Header und lädt das Skript nur, wenn sie übereinstimmen.

Externe Skripte müssen auch das [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attribut für diese Methode enthalten.

Hier ist ein Auszug aus Express-Code, um das zu demonstrieren:

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
- Für das externe Skript "main.js" fügen wir auch das `integrity`-Attribut hinzu und geben ihm denselben Wert.
- Im Gegensatz zum Beispiel mit Nonces können sowohl das CSP als auch der Inhalt statisch sein, da die Hashes gleich bleiben. Dies macht hash-basierte Richtlinien besser geeignet für statische Seiten oder Websites, die auf clientseitiges Rendern angewiesen sind.

#### Schema-basierte Richtlinien

Fetch-Direktiven können ein Schema auflisten, wie `https:`, um Ressourcen zu erlauben, die mit diesem Schema bereitgestellt werden. Dies ermöglicht zum Beispiel, dass eine Richtlinie erfordert, dass alle Ressourcennachladungen HTTPS verwenden:

```http
Content-Security-Policy: default-src https:
```

#### Standortbasierte Richtlinien

Fetch-Direktiven können Ladungen von Ressourcen basierend darauf steuern, wo sich die Ressource befindet.

Das Schlüsselwort `'self'` erlaubt Ressourcen, die origin-gleich mit dem Dokument selbst sind:

```http
Content-Security-Policy: img-src 'self'
```

Sie können auch einen oder mehrere Hostnamen angeben, möglicherweise mit Platzhaltern, und nur von diesen Hosts bereitgestellte Ressourcen werden erlaubt. Dies könnte zum Beispiel verwendet werden, um zu erlauben, dass Inhalte von einem vertrauenswürdigen CDN bereitgestellt werden.

```http
Content-Security-Policy: img-src *.example.org
```

Sie können mehrere Standorte angeben. Die folgende Direktive erlaubt nur Bilder, die origin-gleich mit dem aktuellen Dokument sind oder von einem Unterdomäne von "example.org" oder von "example.com" bereitgestellt werden:

```http
Content-Security-Policy: img-src 'self' *.example.org  example.com
```

#### Inline-JavaScript

Wenn ein CSP entweder eine `default-src` oder eine `script-src`-Direktive enthält, wird das Ausführen von Inline-JavaScript nicht erlaubt, es sei denn, es werden zusätzliche Maßnahmen ergriffen, um es zu ermöglichen. Dies schließt ein:

- JavaScript, das in einem `<script>`-Element auf der Seite enthalten ist:

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

Das `unsafe-inline`-Schlüsselwort kann verwendet werden, um diese Einschränkung zu überschreiben. Zum Beispiel erfordert die folgende Direktive, dass alle Ressourcen origin-gleich sind, erlaubt aber Inline-JavaScript:

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es einen großen Teil des Zwecks eines CSPs zunichtemacht. Inline-JavaScript ist einer der häufigsten XSS-Vektoren, und eines der grundlegendsten Ziele eines CSPs ist es, seine unkontrollierte Verwendung zu verhindern.

Inline-`<script>`-Elemente sind erlaubt, wenn sie durch einen Nonce oder einen Hash geschützt sind, wie oben beschrieben.

Wenn eine Direktive Nonce- oder Hash-Ausdrücke enthält, wird das `unsafe-inline`-Schlüsselwort von Browsern ignoriert.

#### `eval()` und ähnliche APIs

Wie Inline-JavaScript wird `eval()` und ähnliche APIs nicht erlaubt auszuführen, wenn ein CSP entweder eine `default-src` oder eine `script-src`-Direktive enthält. Dies umfasst unter anderem APIs:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) selbst:

  ```js
  eval('console.log("hello from eval()")');
  ```

- Den {{jsxref("Function/Function()", "Function()")}}-Konstruktor:

  ```js
  const sum = new Function("a", "b", "return a + b");
  ```

- Das Zeichenkettenargument für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval):

  ```js
  setTimeout("console.log('hello from setTimeout')", 1);
  ```

Das `unsafe-eval`-Schlüsselwort kann verwendet werden, um dieses Verhalten zu überschreiben, und aus den gleichen Gründen wie bei `unsafe-inline`: **Entwickler sollten `unsafe-eval` vermeiden**. Manchmal kann es schwierig sein, die Verwendung von `eval()` zu entfernen: In diesen Fällen kann die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) sicherer machen, indem sie sicherstellt, dass das Eingabegerät der definierten Richtlinie entspricht.

Im Gegensatz zu `unsafe-inline` bleibt das Schlüsselwort `unsafe-eval` in einer Direktive wirksam, die Nonce- oder Hash-Ausdrücke enthält.

### Striktes CSP

Um die Skriptladung als Abschwächung gegen XSS zu kontrollieren, ist es empfohlene Praxis, [Nonce-](#nonces) oder [Hash-](#hashes) basierte Fetch-Direktiven zu verwenden. Dies wird als _striktes CSP_ bezeichnet. Diese Art von CSP hat zwei Hauptvorteile gegenüber einem standortbasierten CSP (normalerweise als _Allowlist-CSP_ bezeichnet):

- Allowlist-CSPs sind schwer richtig umzusetzen und oft führen Richtlinien unbeabsichtigt zur Whitelistung unsicherer Domains, und bieten daher keinen wirksamen Schutz gegen XSS (siehe [CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)).
- Allowlist-CSPs können sehr groß und schwer zu warten sein, insbesondere wenn Skripte verwendet werden, die außerhalb Ihrer Kontrolle liegen. Laut [How I learned to stop worrying and love the Content Security Policy](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/) wird ein Entwickler, um Google Analytics zu integrieren, aufgefordert, 187 Google-Domains in die Whitelist aufzunehmen.

Ein Nonce-basiertes striktes CSP sieht folgendermaßen aus:

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

In diesem CSP:

- verwenden wir Nonces, um zu kontrollieren, welche JavaScript-Ressourcen geladen werden dürfen
- blockieren wir alle Objekteinbettungen
- blockieren wir alle Verwendungen des `<base>`-Elements zum Setzen eines Basis-URI.

Ein Hash-basiertes striktes CSP ist dasselbe, außer dass es Hashes anstelle von Nonces verwendet:

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

Nonce-basierte Direktiven sind einfacher zu warten, wenn Sie Antworten, einschließlich des Inhalts selbst, dynamisch generieren können. Andernfalls müssen Sie Hash-basierte Direktiven verwenden. Das Problem bei Hash-basierten Direktiven ist, dass Sie den Hash neu berechnen und erneut anwenden müssen, wenn sich irgendetwas am Skriptinhalt ändert.

#### Das `strict-dynamic`-Schlüsselwort

Wie oben präsentiert, ist es schwierig, das strikte CSP umzusetzen, wenn Sie Skripte verwenden, die nicht unter Ihrer Kontrolle stehen. Wenn ein Drittanbieter-Skript zusätzliche Skripte lädt oder Inline-Skripte verwendet, dann schlägt dies fehl, da das Drittanbieter-Skript den Nonce oder den Hash nicht weiterleitet.

Das `strict-dynamic`-Schlüsselwort wird bereitgestellt, um dieses Problem zu lösen. Es ist ein Schlüsselwort, das in eine Fetch-Direktive aufgenommen werden kann, und es hat den Effekt, dass, wenn ein Skript einen Nonce oder einen Hash angehängt hat, dieses Skript weiteren Skripten erlaubt wird, die keine eigenen Nonces oder Hashes haben. Das heißt, das Vertrauen, das in ein Skript durch einen Nonce oder einen Hash gesetzt wird, wird an die Skripte weitergegeben, die das ursprüngliche Skript lädt (und die Skripte, die _sie_ laden, und so weiter).

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

Wir liefern unser Dokument mit einem CSP wie diesem:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
```

Das Skript "main.js" wird erlaubt zu laden, weil sein Hash mit dem Wert im CSP übereinstimmt. Aber sein Versuch, "main2.js" zu laden, wird fehlschlagen.

Wenn wir das `'strict-dynamic'` zum CSP hinzufügen, wird "main.js" erlaubt, "main2.js" zu laden:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  strict-dynamic
```

Das `'strict-dynamic'`-Schlüsselwort macht es viel einfacher, Nonce- oder Hash-basierte CSPs zu erstellen und zu pflegen, insbesondere wenn eine Website Drittanbieter-Skripte verwendet. Es macht Ihr CSP jedoch weniger sicher, weil, wenn die Skripte, die Sie einbinden, `<script>`-Elemente basierend auf potenziellen XSS-Quellen erstellen, das CSP sie nicht schützen wird.

#### Refactoring von Inline-JavaScript und `eval()`

Wir haben oben gesehen, dass Inline-JavaScript standardmäßig in einem CSP nicht erlaubt ist. Mit Nonces oder Hashes kann ein Entwickler Inline-`<script>`-Tags verwenden, aber Sie müssen Ihren Code immer noch refaktorisieren, um andere nicht zulässige Muster zu entfernen, einschließlich Inline-Ereignishandler, `javascript:`-URLs und Nutzungen von `eval()`. Zum Beispiel sollten Inline-Ereignishandler normalerweise durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ersetzt werden:

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

Die [`frame-ancestors`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)-Direktive kann verwendet werden, um zu kontrollieren, welche Dokumente, falls vorhanden, dieses Dokument in einem verschachtelten Browsing-Kontext, wie einem {{htmlelement("iframe")}}, einbetten dürfen. Dies ist ein wirksamer Schutz gegen Clickjacking-Angriffe, da diese Angriffe darauf beruhen, die Zielseite in einer vom Angreifer kontrollierten Seite einzubetten.

Die Syntax von `frame-ancestors` ist ein Ausschnitt der Fetch-Direktivsyntax: Sie können den einzelnen Schlüsselwort-Wert `'none'` oder einen oder mehrere Quellenausdrücke angeben. Die einzigen Quellenausdrücke, die Sie verwenden können, sind jedoch Schemata, Hostnamen oder das `'self'`-Schlüsselwort.

Es sei denn, Sie benötigen, dass Ihre Website eingebettet werden kann, sollten Sie `frame-ancestors` auf `'none'` setzen:

```http
Content-Security-Policy: frame-ancestors 'none'
```

Diese Direktive ist ein flexiblerer Ersatz für den {{httpheader("X-Frame-Options")}} Header.

## Upgrade unsicherer Anfragen

Webentwickler werden nachdrücklich ermutigt, alle ihre Inhalte über HTTPS bereitzustellen. Bei der Umstellung einer Website auf HTTPS kommt es gelegentlich vor, dass eine Seite über HTTPS, ihre Ressourcen jedoch über HTTP bereitgestellt werden, indem zum Beispiel das folgende Markup verwendet wird:

```html
<script src="http://example.org/my-cat.js"></script>
```

Dies wird als _Mixed Content_ bezeichnet, und das Vorhandensein unsicherer Ressourcen schwächt den Schutz, den HTTPS bietet, stark. Gemäß dem von Browsern implementierten [Mixed-Content-Algorithmus](/de/docs/Web/Security/Mixed_content) werden unsichere Ressourcen, wenn ein Dokument über HTTPS bereitgestellt wird, in "upgradable content" und "blockable content" kategorisiert. Upgradable content wird auf HTTPS aktualisiert, und blockable content wird blockiert, was möglicherweise zu einer fehlerhaften Anzeige der Seite führt.

Die endgültige Lösung für Mixed Content besteht darin, dass Entwickler alle Ressourcen über HTTPS laden. Aber selbst wenn eine Seite tatsächlich in der Lage ist, alle Inhalte über HTTPS bereitzustellen, kann es für einen Entwickler sehr schwierig (oder sogar praktisch unmöglich sein, wenn es um archivierte Inhalte geht) sein, alle URLs, die die Seite zum Laden von Ressourcen verwendet, umzuschreiben.

Die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests)-Direktive ist dafür gedacht, dieses Problem zu lösen. Diese Direktive hat keinen Wert: Um sie zu setzen, geben Sie einfach den Namen der Direktive an:

```http
Content-Security-Policy: upgrade-insecure-requests
```

Wenn diese Direktive auf ein Dokument gesetzt ist, wird der Browser automatisch alle HTTP-URLs in den folgenden Fällen auf HTTPS aktualisieren:

- Anfragen, um Ressourcen zu laden (wie Bilder, Skripte oder Schriftarten)
- Navigationsanfragen (wie zum Beispiel Linkziele), die origin-gleich mit dem Dokument sind
- Navigationsanfragen in verschachtelten Browsing-Kontexten, wie iframes
- Formularübermittlungen

Top-Level-Navigationsanfragen, deren Ziel sich auf einem anderen Ursprung befindet, werden jedoch nicht aktualisiert.

Angenommen, das Dokument unter `https://example.org` wird mit einem CSP geliefert, das die `upgrade-insecure-requests`-Direktive enthält, und das Dokument enthält ein Markup wie dieses:

```html
<script src="http://example.org/my-cat.js"></script>
<script src="http://not-example.org/another-cat.js"></script>
```

Der Browser wird beide dieser Anfragen automatisch auf HTTPS aktualisieren.

Angenommen, das Dokument enthält auch Folgendes:

```html
<a href="http://example.org/more-cats">See some more cats!</a>
<a href="http://not-example.org/even-more-cats">More cats, on another site!</a>
```

Der Browser wird den ersten Link auf HTTPS aktualisieren, jedoch nicht den zweiten, da auf ein anderes Ursprungsziel navigiert wird.

Diese Direktive ist kein Ersatz für den {{httpheader("Strict-Transport-Security")}}-Header (auch bekannt als HSTS), da sie externe Links zu einer Seite nicht aktualisiert. Seiten sollten sowohl diese Direktive als auch den `Strict-Transport-Security`-Header enthalten.

## Testen Sie Ihre Richtlinie

Um die Bereitstellung zu erleichtern, kann CSP im Berichtsmodus bereitgestellt werden.
Die Richtlinie wird nicht durchgesetzt, aber alle Verstöße werden an den in der Richtlinie angegebenen Berichterstattungsendpunkt gesendet. Ein Berichts-Header kann auch verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich bereitzustellen.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}}-HTTP-Header verwenden, um Ihre Richtlinie anzugeben, wie folgt:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header als auch ein {{HTTPHeader("Content-Security-Policy")}}-Header in derselben Antwort vorhanden sind, werden beide Richtlinien berücksichtigt.
Die in `Content-Security-Policy`-Headern angegebene Richtlinie wird durchgesetzt, während die `Content-Security-Policy-Report-Only`-Richtlinie Berichte erstellt, aber nicht durchgesetzt wird.

Beachten Sie, dass im Gegensatz zu einer normalen Content Security Policy eine Reporting-Only-Richtlinie nicht in einem `<meta>`-Element bereitgestellt werden kann.

### Meldung von Verstößen

Die empfohlene Methode zur Meldung von CSP-Verstößen ist die Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API), bei der Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} deklariert werden und einer von ihnen als CSP-Berichterstattungsziel mit der `Content-Security-Policy`-Header {{CSP("report-to")}}-Direktive angegeben wird.

> [!WARNING]
> Sie können auch die CSP {{CSP("report-uri")}}-Direktive verwenden, um eine Ziel-URL für CSP-Verstoßmeldungen anzugeben.
> Dies sendet ein etwas anderes JSON-Format über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`.
> Dieser Ansatz ist veraltet, aber Sie sollten beide deklarieren, bis {{CSP("report-to")}} in allen Browsern unterstützt wird.
> Für weitere Informationen über diesen Ansatz siehe das {{CSP("report-uri")}}-Thema.

Ein Server kann Kunden darüber informieren, wohin Berichte gesendet werden sollen, indem er den {{HTTPHeader("Reporting-Endpoints")}}-HTTP-Antwortheader verwendet.
Dieser Header definiert eine oder mehrere Endpunkt-URLs als kommagetrennte Liste.
Beispielsweise könnte der Antwortheader des Servers so aussehen, um einen Berichterstattungsendpunkt namens `csp-endpunkt` zu definieren, der Berichte unter `https://example.com/csp-reports` akzeptiert:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte für verschiedene Berichtstypen haben möchten, würden Sie sie wie folgt angeben:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Sie können dann die `Content-Security-Policy`-Header {{CSP("report-to")}}-Direktive verwenden, um anzugeben, dass ein bestimmter definierter Endpunkt für die Berichterstattung verwendet werden soll.
Zum Beispiel, um CSP-Verstoßberichte an `https://example.com/csp-reports` für die `default-src` zu senden, könnten Sie Antwortheader senden, die folgendermaßen aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn ein CSP-Verstoß auftritt, sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt über eine HTTP-`POST`-Operation, mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`.
Der Bericht ist eine serialisierte Form des [`Report`](/de/docs/Web/API/Report)-Objekts, das eine `type`-Eigenschaft mit einem Wert von `"csp-violation"` und einen `body` hat, der die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist.

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

Sie müssen einen Server einrichten, um Berichte mit dem angegebenen JSON-Format und Content-Typ zu empfangen.
Der Server, der diese Anfragen bearbeitet, kann dann die eingehenden Berichte auf eine Weise speichern oder verarbeiten, die am besten zu Ihren Anforderungen passt.

## Siehe auch

- [Mitigate cross-site scripting with a strict Content Security Policy](https://web.dev/strict-csp) auf web.dev (2024)
- [Content Security Policy: A successful mess between hardening and mitigation](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) auf owasp.org
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
