---
title: Content Security Policy (CSP)
slug: Web/HTTP/CSP
l10n:
  sourceCommit: a80f7efdfe2d1476245df9d7634adbe8cfca6951
---

{{HTTPSidebar}}

**Content Security Policy** (CSP) ist ein Merkmal, das dazu beiträgt, das Risiko bestimmter Arten von Sicherheitsbedrohungen zu verhindern oder zu minimieren. Es besteht aus einer Reihe von Anweisungen von einer Website an einen Browser, die den Browser anweisen, Beschränkungen für die Dinge zu erlassen, die der Code der Website ausführen darf.

Der Hauptanwendungsfall für CSP ist die Kontrolle darüber, welche Ressourcen, insbesondere JavaScript-Ressourcen, ein Dokument laden darf. Dies wird hauptsächlich als Abwehr gegen {{Glossary("cross-site_scripting", "Cross-Site Scripting")}} (XSS) Angriffe genutzt, bei denen ein Angreifer in der Lage ist, bösartigen Code in die Website des Opfers einzuschleusen.

Ein CSP kann auch andere Zwecke haben, einschließlich des Schutzes vor {{Glossary("clickjacking", "Clickjacking")}} und der Unterstützung, sicherzustellen, dass die Seiten einer Website über HTTPS geladen werden.

In diesem Leitfaden beginnen wir mit der Beschreibung, wie ein CSP an einen Browser übermittelt wird und wie es auf hoher Ebene aussieht.

Dann werden wir beschreiben, wie es verwendet werden kann, um [zu kontrollieren, welche Ressourcen geladen werden](#kontrolle_der_ressourcennutzung), um gegen XSS zu schützen, und andere Anwendungsfälle wie den [Clickjacking-Schutz](#clickjacking-schutz) und das [Aktualisieren unsicherer Anforderungen](#aktualisieren_unsicherer_anfragen). Beachten Sie, dass es keine Abhängigkeit zwischen den verschiedenen Anwendungsfällen gibt: Wenn Sie Clickjacking-Schutz hinzufügen möchten, aber nicht die XSS-Abwehr, können Sie einfach die Direktiven für diesen Anwendungsfall hinzufügen.

Abschließend beschreiben wir [Strategien zur Bereitstellung eines CSP](#testen_ihrer_richtlinie) und Werkzeuge, die diesen Prozess erleichtern können.

## CSP-Übersicht

Ein CSP sollte im {{httpheader("Content-Security-Policy")}} Antwortheader an den Browser übermittelt werden. Es sollte für alle Antworten auf alle Anfragen gesetzt werden, nicht nur das Hauptdokument.

Sie können es auch über das [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv) Attribut des {{htmlelement("meta")}} Elements Ihres Dokuments spezifizieren, und dies ist eine nützliche Option für einige Anwendungsfälle, wie eine clientseitig gerenderte {{Glossary("SPA", "Single Page App")}}, die nur aus statischen Ressourcen besteht, da Sie auf diese Weise auf jede Serverinfrastruktur verzichten können. Diese Option unterstützt jedoch nicht alle CSP-Funktionen.

Die Richtlinie wird als eine Reihe von _Direktiven_ angegeben, die durch Semikolons getrennt sind. Jede Direktive steuert einen anderen Aspekt der Sicherheitsrichtlinie. Jede Direktive hat einen Namen, gefolgt von einem Leerzeichen, gefolgt von einem Wert. Verschiedene Direktiven können unterschiedliche Syntaxen haben.

Betrachten Sie zum Beispiel das folgende CSP:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

Es setzt zwei Direktiven:

- Die `default-src` Direktive ist auf `'self'` gesetzt
- Die `img-src` Direktive ist auf `'self' example.com` gesetzt.

![Ein CSP zerlegt in seine Direktiven.](csp-overview.svg)

Die erste Direktive, `default-src`, weist den Browser an, nur Ressourcen zu laden, die gleichen Ursprungs sind wie das Dokument, es sei denn, andere spezifischere Direktiven setzen eine andere Richtlinie für andere Ressourcentypen. Die zweite, `img-src`, weist den Browser an, Bilder zu laden, die gleichen Ursprungs sind oder von `example.com` stammen.

Im nächsten Abschnitt betrachten wir die Werkzeuge, die zur Verfügung stehen, um den Ressourcenverbrauch zu kontrollieren, was die Hauptfunktion eines CSP ist.

## Kontrolle der Ressourcennutzung

Ein CSP kann verwendet werden, um die Ressourcen zu kontrollieren, die ein Dokument laden darf. Dies wird hauptsächlich zum Schutz vor Cross-Site Scripting (XSS) Angriffen verwendet.

In diesem Abschnitt werden wir zunächst sehen, wie die Kontrolle der Ressourcennutzung helfen kann, XSS zu verhindern, und dann die Werkzeuge, die CSP bietet, um zu kontrollieren, welche Ressourcen geladen werden. Schließlich beschreiben wir eine besonders empfohlene Strategie, die als "Strenges CSP" bezeichnet wird.

### XSS und Ressourcennutzung

Ein Cross-Site Scripting (XSS) Angriff ist einer, bei dem ein Angreifer in der Lage ist, seinen Code im Kontext der Zielwebsite auszuführen. Dieser Code kann dann alles tun, was der eigene Code der Website tun könnte, einschließlich zum Beispiel:

- Zugriff auf oder Änderung des Inhalts der geladenen Seiten der Website
- Zugriff auf oder Änderung von Inhalten im lokalen Speicher
- Durchführung von HTTP-Anfragen mit den Anmeldedaten des Benutzers, wodurch der Angreifer den Benutzer imitieren oder auf sensible Daten zugreifen kann

Ein XSS-Angriff ist möglich, wenn eine Website eine Eingabe akzeptiert, die möglicherweise von einem Angreifer erstellt wurde (zum Beispiel URL-Parameter oder ein Kommentar zu einem Blogeintrag), und diese dann in die Seite einfügt, ohne sie zu _säubern_: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausgeführt werden kann.

Websites sollten sich gegen XSS schützen, indem sie diese Eingabe säubern, bevor sie in die Seite aufgenommen wird. Ein CSP bietet einen ergänzenden Schutz, der die Website auch dann schützen kann, wenn die Säuberung fehlschlägt.

Wenn die Säuberung fehlschlägt, gibt es verschiedene Formen, die der eingespritzte bösartige Code im Dokument annehmen kann, darunter:

- Ein {{htmlelement("script")}}-Tag, das auf eine bösartige Quelle verweist:

  ```html
  <script src="https://evil.com/hacker.js"></script>
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

Ein CSP kann Schutz gegen all dies bieten. Mit einem CSP können Sie:

- die erlaubten Quellen für JavaScript-Dateien und andere Ressourcen definieren und effektiv Ladevorgänge von `https://evil.com` blockieren
- Inline-Script-Tags deaktivieren
- Nur Script-Tags zulassen, die das richtige Nonce oder den richtigen Hash gesetzt haben
- Inline-Ereignishandler deaktivieren
- `javascript:`-URLs deaktivieren
- Gefährliche APIs wie `eval()` deaktivieren

Im nächsten Abschnitt werden wir die Werkzeuge behandeln, die CSP bereitstellt, um dies zu tun.

> [!NOTE]
> Das Setzen eines CSP ist kein Ersatz für das Säubern von Eingaben. Websites sollten Eingaben _säubern_ und ein CSP setzen, um Tiefe im Schutz gegen XSS zu bieten.

### Fetch-Direktiven

Fetch-Direktiven werden verwendet, um eine bestimmte Kategorie von Ressourcen anzugeben, die ein Dokument laden darf — wie JavaScript, CSS-Stylesheets, Bilder, Schriftarten und so weiter.

Es gibt verschiedene Fetch-Direktiven für verschiedene Ressourcentypen. Zum Beispiel:

- [`script-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) legt erlaubte Quellen für JavaScript fest.
- [`style-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) legt erlaubte Quellen für CSS-Stylesheets fest.
- [`img-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) legt erlaubte Quellen für Bilder fest.

Eine spezielle Fetch-Direktive ist `default-src`, die eine Fallback-Richtlinie für alle Ressourcen setzt, deren Direktiven nicht explizit aufgelistet sind.

Für die vollständige Liste der Fetch-Direktiven siehe die [Referenzdokumentation](/de/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directives).

Jede Fetch-Direktive wird entweder als das einzelne Schlüsselwort `'none'` oder als eine oder mehrere _Quellausdrücke_, getrennt durch Leerzeichen, angegeben. Wenn mehr als ein Quellausdruck aufgelistet ist: wenn eine der Methoden die Ressource erlaubt, wird die Ressource erlaubt.

Zum Beispiel legt das folgende CSP zwei Fetch-Direktiven fest:

- `default-src` wird der einzelne Quellausdruck `'self'` zugewiesen
- `img-src` werden zwei Quellausdrücke zugewiesen: `'self'` und `example.com`

![CSP-Diagramm, das Quellausdrücke zeigt](csp-source-expressions.svg)

Die Wirkung davon ist, dass:

- Bilder entweder gleich-Ursprung mit dem Dokument sein müssen oder von `example.com` geladen werden
- Alle anderen Ressourcen gleich-Ursprung mit dem Dokument sein müssen.

In den nächsten Abschnitten werden wir einige der Möglichkeiten beschreiben, wie Sie Quellausdrücke verwenden können, um Ressourcennutzungen zu steuern. Beachten Sie, dass, obwohl wir sie separat beschreiben, diese Ausdrücke im Allgemeinen kombiniert werden können: Zum Beispiel kann eine einzelne Fetch-Direktive sowohl Nonces als auch Hostnamen enthalten.

#### Ressourcen blockieren

Um einen Ressourcentyp vollständig zu blockieren, verwenden Sie das Schlüsselwort `'none'`. Zum Beispiel blockiert die folgende Direktive alle {{htmlelement("object")}} und {{htmlelement("embed")}} Ressourcen:

```http
Content-Security-Policy: object-src 'none'
```

Beachten Sie, dass `'none'` nicht mit einer anderen Methode in einer bestimmten Direktive kombiniert werden kann: in der Praxis, wenn neben `'none'` noch andere Quellausdrücke angegeben sind, werden sie ignoriert.

#### Nonces

Ein `nonce` ist der empfohlene Ansatz, um das Laden von {{htmlelement("script")}} und {{htmlelement("style")}} Ressourcen einzuschränken.

Mit einem Nonce generiert der Server einen zufälligen Wert für jede HTTP-Antwort und fügt ihn in eine `script-src` und/oder eine `style-src` Direktive ein:

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server fügt diesen Wert dann als Wert des `nonce` Attributs in allen `<script>` und/oder `<style>` Tags ein, die sie im Dokument aufnehmen möchten.

Der Browser vergleicht die beiden Werte und lädt die Ressource nur, wenn sie übereinstimmen. Die Idee ist, dass selbst wenn ein Angreifer etwas JavaScript in die Seite einfügen kann, er nicht wissen wird, welches Nonce der Server verwenden wird, sodass der Browser das Skript verweigern wird.

Damit dieser Ansatz funktioniert, darf es für einen Angreifer nicht möglich sein, das Nonce zu erraten.

**In der Praxis bedeutet dies, dass das Nonce für jede HTTP-Antwort unterschiedlich sein muss und nicht vorhersehbar sein darf.**

Dies bedeutet wiederum, dass der Server keine statische HTML-Seiten ausliefern kann, da er jedes Mal ein neues Nonce einfügen muss. Normalerweise würde der Server eine Templating-Engine verwenden, um das Nonce einzufügen.

Hier ist ein Snippet von [Express](/de/docs/Learn/Server-side/Express_Nodejs) Code, um das zu demonstrieren:

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

Bei jeder Anfrage generiert der Server ein neues Nonce, fügt es in das CSP und in die {{htmlelement("script")}} Tags im zurückgegebenen Dokument ein. Beachten Sie, dass der Server:

- ein neues Nonce für jede Anfrage generiert
- Nonces sowohl mit externen als auch inline Scripts verwenden kann
- dasselbe Nonce für alle `<script>` Tags im Dokument verwendet

Es ist wichtig, dass der Server eine Art Templating verwendet, um Nonces einzufügen, und sie nicht einfach in alle `<script>` Tags einfügt: andernfalls könnte der Server versehentlich Nonces in von einem Angreifer eingeschleuste Scripts einfügen.

Beachten Sie, dass Nonces nur für Elemente verwendet werden können, die ein `nonce` Attribut haben: das heißt, nur `<script>` und `<style>` Elemente.

#### Hashes

Fetch-Direktiven können auch einen Hash des Scripts verwenden, um seine Integrität zu gewährleisten. Mit dieser Methode:

1. berechnet der Server einen Hash der Skriptinhalte mit einer {{Glossary("cryptographic_hash_function", "kryptografischen Hashfunktion")}} (eine von SHA-256, SHA-384 oder SHA-512)
2. erstellt eine {{Glossary("Base64", "Base64")}} Kodierung des Ergebnisses
3. fügt ein Präfix hinzu, das den verwendeten Hash-Algorithmus identifiziert (eines von `sha256-`, `sha384-` oder `sha512-`).

Anschließend fügt es das Ergebnis der Direktive hinzu:

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

Wenn der Browser das Dokument empfängt, hashiert er das Skript, vergleicht das Ergebnis mit dem Wert aus dem Header und lädt das Skript nur, wenn sie übereinstimmen.

Externe Skripte müssen das [`integrity`](/de/docs/Web/HTML/Element/script#integrity) Attribut enthalten, damit diese Methode funktioniert.

Hier ist ein Snippet von Express-Code, um das zu demonstrieren:

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

Beachten Sie:

- Wir haben einen separaten Hash für jedes Skript im Dokument.
- Für das externe Skript "main.js" fügen wir auch das `integrity` Attribut hinzu und geben ihm denselben Wert.
- Im Gegensatz zum Beispiel mit Nonces können sowohl das CSP als auch die Inhalte statisch sein, da die Hashes gleich bleiben. Dies macht hashbasierte Richtlinien besser geeignet für statische Seiten oder Websites, die sich auf clientseitiges Rendering verlassen.

#### Schema-basierte Richtlinien

Fetch-Direktiven können ein Schema wie `https:` auflisten, um Ressourcen zuzulassen, die mit diesem Schema bereitgestellt werden. Dies erlaubt zum Beispiel einer Richtlinie, HTTPS für alle Ressourcennutzungen vorzuschreiben:

```http
Content-Security-Policy: default-src https:
```

#### Positionsbasierte Richtlinien

Fetch-Direktiven können die Ressourcennutzung basierend darauf steuern, wo sich die Ressource befindet.

Das Schlüsselwort `'self'` erlaubt Ressourcen, die gleich-Ursprung mit dem Dokument selbst sind:

```http
Content-Security-Policy: img-src 'self'
```

Sie können auch einen oder mehrere Hostnamen angeben, die möglicherweise Platzhalter enthalten, und es sind nur Ressourcen von diesen Hosts erlaubt. Dies könnte zum Beispiel verwendet werden, um Inhalte zuzulassen, die von einem vertrauenswürdigen CDN bereitgestellt werden.

```http
Content-Security-Policy: img-src *.example.org
```

Sie können mehrere Standorte angeben. Die folgende Direktive erlaubt nur Bilder, die gleich-Ursprung mit dem aktuellen Dokument sind oder von einem Subdomain von "example.org" oder von "example.com" bereitgestellt werden:

```http
Content-Security-Policy: img-src 'self' *.example.org  example.com
```

#### Inline-JavaScript

Wenn ein CSP entweder eine `default-src` oder eine `script-src` Direktive enthält, darf Inline-JavaScript nicht ausgeführt werden, es sei denn, es werden zusätzliche Maßnahmen ergriffen, um es zu aktivieren. Dazu gehören:

- JavaScript, das in einem `<script>` Element auf der Seite enthalten ist:

  ```html
  <script>
    console.log("Hello from an inline script");
  </script>
  ```

- JavaScript in einem Inline-Ereignishandler-Attribut:

  ```html
  <img src="x" onerror="console.log('Hello from an inline event handler')" />
  ```

- JavaScript in einer `javascript:` URL:

  ```html
  <a href="javascript:console.log('Hello from a javascript: URL')"></a>
  ```

Das Schlüsselwort `unsafe-inline` kann verwendet werden, um diese Einschränkung zu überschreiben. Zum Beispiel erfordert die folgende Direktive, dass alle Ressourcen gleich-Ursprung sind, erlaubt jedoch Inline-JavaScript:

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es den größten Teil des Zwecks eines CSP zunichtemacht. Inline-JavaScript ist einer der häufigsten XSS-Vektoren, und eines der grundlegendsten Ziele eines CSP ist es, seine unkontrollierte Verwendung zu verhindern.

Inline-`<script>` Elemente sind erlaubt, wenn sie durch ein Nonce oder einen Hash geschützt sind, wie oben beschrieben.

Wenn eine Direktive Nonce- oder Hash-Ausdrücke enthält, wird das Schlüsselwort `unsafe-inline` von Browsern ignoriert.

#### `eval()` und ähnliche APIs

Wie bei Inline-JavaScript werden `eval()` und ähnliche APIs nicht erlaubt ausgeführt zu werden, wenn ein CSP entweder eine `default-src` oder eine `script-src` Direktive enthält. Dazu gehören unter anderem:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) selbst:

  ```js
  eval('console.log("hello from eval()")');
  ```

- Der {{jsxref("Function/Function()", "Function()")}} Konstruktor:

  ```js
  const sum = new Function("a", "b", "return a + b");
  ```

- Das Zeichenfolgenargument für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval):

  ```js
  setTimeout("console.log('hello from setTimeout')", 1);
  ```

Das Schlüsselwort `unsafe-eval` kann verwendet werden, um dieses Verhalten zu überschreiben, und aus den gleichen Gründen sollten **Entwickler `unsafe-eval` vermeiden**. Manchmal kann es schwierig sein, die Nutzung von `eval()` zu eliminieren: In diesen Situationen kann die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) es sicherer machen, indem sie sicherstellt, dass die Eingabe den definierten Richtlinien entspricht.

Im Gegensatz zu `unsafe-inline` funktioniert das Schlüsselwort `unsafe-eval` weiterhin in einer Direktive, die Nonce- oder Hash-Ausdrücke enthält.

### Strenges CSP

Um das Laden von Skripten als Abwehrmaßnahme gegen XSS zu kontrollieren, wird empfohlen, [Nonce-](#nonces) oder [Hash-](#hashes) basierte Fetch-Direktiven zu verwenden. Dies wird als _strenges CSP_ bezeichnet. Diese Art von CSP hat zwei Hauptvorteile gegenüber einem positionsbasierten CSP (häufig als _Allowlist-CSP_ bezeichnet):

- Allowlist-CSPs sind schwer richtig umzusetzen und oft whitelistet die Richtlinie unbeabsichtigt unsichere Domains und bietet daher keinen effektiven Schutz gegen XSS (siehe [CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)).
- Allowlist-CSPs können sehr groß und schwer zu warten sein, insbesondere wenn man Skripte verwendet, die außerhalb Ihrer Kontrolle sind. Laut [How I learned to stop worrying and love the Content Security Policy](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/), wird ein Entwickler allein zum Integrieren von Google Analytics gebeten, 187 Google-Domains zur Allowlist hinzuzufügen.

Ein Nonce-basiertes strenges CSP sieht so aus:

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

In diesem CSP:

- verwenden wir Nonces, um zu kontrollieren, welche JavaScript-Ressourcen laden dürfen
- blockieren wir alle Objekt-Einbettungen
- blockieren wir alle Verwendungen des `<base>` Elements zur Festlegung einer Basis-URI.

Ein Hash-basiertes strenges CSP ist das gleiche, außer dass es Hashes anstelle von Nonces verwendet:

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

Nonce-basierte Direktiven sind einfacher zu pflegen, wenn Sie Antworten, einschließlich des Inhalts selbst, dynamisch generieren können. Andernfalls müssen Sie hash-basierte Direktiven verwenden. Das Problem bei hash-basierten Direktiven ist, dass Sie den Hash neu berechnen und erneut anwenden müssen, wenn eine Änderung an den Skriptinhalten vorgenommen wird.

#### Das `strict-dynamic` Schlüsselwort

Wie oben dargestellt, ist das strenge CSP schwer zu implementieren, wenn man Skripte verwendet, die nicht unter eigener Kontrolle stehen. Wenn ein Drittanbieter-Skript zusätzliche Skripte lädt oder Inline-Skripte verwendet, wird dies fehlschlagen, da das Drittanbieter-Skript den Nonce oder Hash nicht weitergeben wird.

Das `strict-dynamic` Schlüsselwort wird bereitgestellt, um dieses Problem zu lösen. Es ist ein Schlüsselwort, das in eine Fetch-Direktive aufgenommen werden kann, und es hat die Wirkung, dass wenn ein Skript einen Nonce oder einen Hash hat, dann darf dieses Skript weitere Skripte laden, die selbst keine Nonces oder Hashes haben. Das heißt, das Vertrauen, das einem Skript durch einen Nonce oder Hash entgegengebracht wird, wird auf Skripte, die das ursprüngliche Skript lädt (und Skripte, die _sie_ laden, und so weiter), übertragen.

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

Es enthält ein Skript "main.js", das ein weiteres Skript erstellt und hinzufügt, "main2.js":

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

Das "main.js" Skript darf geladen werden, da sein Hash mit dem Wert im CSP übereinstimmt. Aber sein Versuch, "main2.js" zu laden, wird fehlschlagen.

Wenn wir `'strict-dynamic'` zum CSP hinzufügen, darf "main.js" "main2.js" laden:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  strict-dynamic
```

Das `'strict-dynamic'` Schlüsselwort erleichtert die Erstellung und Pflege von Nonce- oder Hash-basierten CSPs erheblich, insbesondere wenn eine Website Drittanbieter-Skripte verwendet. Es macht Ihr CSP jedoch weniger sicher, da, wenn die von Ihnen inkludierten Skripte `<script>`-Elemente basierend auf potenziellen XSS-Quellen erstellen, das CSP sie nicht schützt.

#### Refactoring von Inline-JavaScript und `eval()`

Wir haben oben gesehen, dass Inline-JavaScript standardmäßig in einem CSP nicht erlaubt ist. Mit Nonces oder Hashes kann ein Entwickler Inline-`<script>` Tags verwenden, aber Sie müssen den Code auch refaktorisieren, um andere nicht erlaubte Muster, einschließlich Inline-Ereignishandler, `javascript:` URLs und die Verwendung von `eval()`, zu entfernen. Beispielsweise sollten Inline-Ereignishandler normalerweise durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ersetzt werden:

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

Die [`frame-ancestors`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) Direktive kann verwendet werden, um zu steuern, welche Dokumente, falls vorhanden, dieses Dokument in einem verschachtelten Browsing-Kontext wie einem {{htmlelement("iframe")}} einbetten dürfen. Dies ist ein effektiver Schutz gegen Clickjacking-Angriffe, da diese Angriffe davon abhängen, dass die Zielseite in eine vom Angreifer kontrollierte Seite eingebettet wird.

Die Syntax von `frame-ancestors` ist ein Unterabschnitt der Fetch-Direktiven-Syntax: Sie können den einzelnen Schlüsselwortwert `'none'` oder einen oder mehrere Quellausdrücke angeben. Allerdings können Sie nur Schema, Hostnamen oder das Schlüsselwort `'self'` verwenden.

Es sei denn, Sie brauchen Ihre Seite einbettbar zu machen, sollten Sie `frame-ancestors` auf `'none'` setzen:

```http
Content-Security-Policy: frame-ancestors 'none'
```

Diese Direktive ist ein flexibler Ersatz für den {{httpheader("X-Frame-Options")}} Header.

## Aktualisieren unsicherer Anfragen

Webentwickler werden dringend dazu ermutigt, alle ihre Inhalte über HTTPS bereitzustellen. Beim Aktualisieren einer Website auf HTTPS kommt es manchmal vor, dass das Hauptdokument über HTTPS, seine Ressourcen jedoch über HTTP bereitgestellt werden, zum Beispiel durch die Verwendung von Markup wie diesem:

```html
<script src="http://example.org/my-cat.js"></script>
```

Dies wird als _Mixed Content_ bezeichnet, und das Vorhandensein unsicherer Ressourcen schwächt den Schutz von HTTPS erheblich. Gemäß dem [Algorithmus für gemischte Inhalte](/de/docs/Web/Security/Mixed_content), den Browser implementieren, werden unsichere Ressourcen in "upgradefähige Inhalte" und "blockierbare Inhalte" kategorisiert, wenn ein Dokument über HTTPS bereitgestellt wird. Upgradefähige Inhalte werden auf HTTPS aktualisiert, und blockierbare Inhalte werden blockiert, wodurch möglicherweise die Seite beschädigt wird.

Die endgültige Lösung für gemischte Inhalte besteht darin, dass Entwickler alle Ressourcen über HTTPS laden. Aber selbst wenn eine Seite tatsächlich in der Lage ist, alle Inhalte über HTTPS bereitzustellen, kann es für einen Entwickler immer noch sehr schwierig (oder sogar praktisch unmöglich, wenn es sich um archivierte Inhalte handelt) sein, alle von der Seite verwendeten URLs umzuschreiben, um Ressourcen zu laden.

Die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests) Direktive soll dieses Problem lösen. Diese Direktive hat keinen Wert: Um sie zu setzen, geben Sie einfach den Direktivennamen an:

```http
Content-Security-Policy: upgrade-insecure-requests
```

Wenn diese Direktive auf ein Dokument gesetzt ist, wird der Browser automatisch alle HTTP-URLs in den folgenden Fällen auf HTTPS aktualisieren:

- Anfragen zum Laden von Ressourcen (wie Bilder, Skripte oder Schriftarten)
- Navigationsanforderungen (wie Linkziele), die gleichen Ursprungs mit dem Dokument sind
- Navigationsanforderungen in verschachtelten Browsing-Kontexten, wie `iframes`
- Formularübermittlungen

Top-Level-Navigationsanforderungen, deren Ziel ein anderer Ursprung ist, werden jedoch nicht aktualisiert.

Zum Beispiel, nehmen wir an, dass das Dokument unter `https://example.org` mit einem CSP bereitgestellt wird, das die `upgrade-insecure-requests` Direktive enthält, und das Dokument enthält Markup wie dieses:

```html
<script src="http://example.org/my-cat.js"></script>
<script src="http://not-example.org/another-cat.js"></script>
```

Der Browser wird beide Anfragen automatisch auf HTTPS aktualisieren.

Angenommen, das Dokument enthält auch dies:

```html
<a href="http://example.org/more-cats">See some more cats!</a>
<a href="http://not-example.org/even-more-cats">More cats, on another site!</a>
```

Der Browser wird den ersten Link auf HTTPS aktualisieren, jedoch nicht den zweiten, da er zu einem anderen Ursprung navigiert.

Diese Direktive ist kein Ersatz für den {{httpheader("Strict-Transport-Security")}} Header (auch bekannt als HSTS), da sie keine externen Links zu einer Website aktualisiert. Websites sollten diese Direktive und den `Strict-Transport-Security` Header einschließen.

## Testen Ihrer Richtlinie

Um die Bereitstellung zu erleichtern, kann CSP im Report-Only-Modus bereitgestellt werden.
Die Richtlinie wird nicht durchgesetzt, aber alle Verstöße werden an den in der Richtlinie angegebenen Berichtsendpunkt gesendet. Zusätzlich kann ein Report-Only-Header verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich bereitzustellen.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header verwenden, um Ihre Richtlinie anzugeben, wie folgt:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header als auch ein {{HTTPHeader("Content-Security-Policy")}} Header in derselben Antwort vorhanden sind, werden beide Richtlinien berücksichtigt.
Die in den `Content-Security-Policy` Headers angegebene Richtlinie wird durchgesetzt, während die `Content-Security-Policy-Report-Only` Richtlinie Berichte erstellt, aber nicht durchgesetzt.

Beachten Sie, dass im Gegensatz zu einer normalen Content-Security-Richtlinie eine Report-Only-Richtlinie nicht in einem `<meta>` Element bereitgestellt werden kann.

### Verstöße melden

Für die Meldung von CSP-Verstößen wird empfohlen, die [Reporting-API](/de/docs/Web/API/Reporting_API) zu verwenden, indem Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} deklariert und einer von ihnen als CSP-Meldungsziel unter Verwendung der {{CSP("report-to")}} Direktive des `Content-Security-Policy` Headers angegeben wird.

> [!WARNING]
> Sie können auch die CSP {{CSP("report-uri")}} Direktive verwenden, um eine Ziel-URL für CSP-Verstoßberichte anzugeben.
> Dies sendet ein leicht anderes JSON-Berichtsformat über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`.
> Dieser Ansatz ist veraltet, aber Sie sollten beide deklarieren, bis {{CSP("report-to")}} in allen Browsern unterstützt wird.
> Für weitere Informationen über den Ansatz siehe das {{CSP("report-uri")}} Thema.

Ein Server kann Clients informieren, wo Berichte gesendet werden sollen, indem er den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwortheader verwendet.
Dieser Header definiert eine oder mehrere Endpunkt-URLs als kommagetrennte Liste.
Zum Beispiel könnte der Antwortheader des Servers so aussehen, um einen Berichts-Endpunkt namens `csp-endpoint` zu definieren, der Berichte an `https://example.com/csp-reports` akzeptiert:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die verschiedene Typen von Berichten verarbeiten, würden Sie sie wie folgt angeben:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Sie können dann die {{CSP("report-to")}} Direktive des `Content-Security-Policy` Headers verwenden, um anzugeben, dass ein bestimmter definierter Endpunkt für die Berichterstattung verwendet werden soll.
Zum Beispiel, um CSP-Verstoßberichte an `https://example.com/csp-reports` für `default-src` zu senden, könnten Sie Antwortheader senden, die wie folgt aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn ein CSP-Verstoß auftritt, sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt über eine HTTP `POST`-Operation, mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`.
Der Bericht ist eine serialisierte Form des [`Report`](/de/docs/Web/API/Report) Objekts, das eine `type` Eigenschaft mit einem Wert von `"csp-violation"` enthält, und einen `body`, der die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Objekts ist.

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
Der Server, der diese Anfragen verarbeitet, kann dann die eingehenden Berichte speichern oder auf eine Weise verarbeiten, die am besten zu Ihren Bedürfnissen passt.

## Siehe auch

- [Mitigate cross-site scripting with a strict Content Security Policy](https://web.dev/strict-csp) auf web.dev (2024)
- [Content Security Policy: A successful mess between hardening and mitigation](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) auf owasp.org
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
