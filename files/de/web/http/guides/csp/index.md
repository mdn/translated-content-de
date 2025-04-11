---
title: Content Security Policy (CSP)
slug: Web/HTTP/Guides/CSP
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

**Content Security Policy** (CSP) ist ein Feature, das hilft, das Risiko bestimmter Arten von Sicherheitsbedrohungen zu verhindern oder zu minimieren. Es besteht aus einer Reihe von Anweisungen von einer Website an einen Browser, die den Browser anweisen, Einschränkungen für das zu setzen, was der Code der Website tun darf.

Hauptanwendungsfall für CSP ist die Kontrolle darüber, welche Ressourcen, insbesondere JavaScript-Ressourcen, ein Dokument laden darf. Dies wird hauptsächlich als Abwehrmaßnahme gegen {{Glossary("cross-site_scripting", "Cross-Site-Scripting")}} (XSS)-Angriffe verwendet, bei denen ein Angreifer in der Lage ist, schädlichen Code in die Website des Opfers einzuschleusen.

Ein CSP kann auch andere Zwecke haben, einschließlich der Abwehr von [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und der Sicherstellung, dass die Seiten einer Website über HTTPS geladen werden.

In diesem Leitfaden beginnen wir damit, zu beschreiben, wie ein CSP an einen Browser geliefert wird und wie es auf einem hohen Niveau aussieht.

Dann beschreiben wir, wie es verwendet werden kann, um [zu kontrollieren, welche Ressourcen geladen werden](#kontrolle_des_ressourcenladens), um gegen XSS zu schützen, und dann andere Anwendungsfälle wie [Clickjacking-Schutz](#clickjacking-schutz) und [Upgrade unsicherer Anfragen](#unsichere_anfragen_upgraden). Beachten Sie, dass es keine Abhängigkeit zwischen den verschiedenen Anwendungsfällen gibt: Wenn Sie z.B. Clickjacking-Schutz hinzufügen möchten, aber keine XSS-Minderung, können Sie einfach die Direktiven für diesen Anwendungsfall hinzufügen.

Schließlich beschreiben wir [Strategien zur Bereitstellung eines CSP](#ihre_richtlinie_testen) und Tools, die helfen können, diesen Prozess zu erleichtern.

## CSP-Übersicht

Ein CSP sollte dem Browser im {{httpheader("Content-Security-Policy")}}-Antwortheader übermittelt werden. Es sollte bei allen Antworten auf alle Anfragen gesetzt werden, nicht nur im Hauptdokument.

Sie können es auch mit dem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv)-Attribut Ihres Dokument-{{htmlelement("meta")}}-Elements angeben. Dies ist eine nützliche Option für einige Anwendungsfälle, wie eine clientseitig gerenderte {{Glossary("SPA", "Single Page App")}}, die nur statische Ressourcen hat, weil Sie dann nicht von einer Serverinfrastruktur abhängig sind. Diese Option unterstützt jedoch nicht alle CSP-Funktionen.

Die Richtlinie wird als eine Reihe von _Direktiven_ angegeben, die durch Semikolons getrennt sind. Jede Direktive steuert einen anderen Aspekt der Sicherheitsrichtlinie. Jede Direktive hat einen Namen, gefolgt von einem Leerzeichen, gefolgt von einem Wert. Verschiedene Direktiven können unterschiedliche Syntaxen haben.

Zum Beispiel, betrachten Sie das folgende CSP:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

Es setzt zwei Direktiven:

- die `default-src` Direktive wird auf `'self'` gesetzt
- die `img-src` Direktive wird auf `'self' example.com` gesetzt.

![Ein CSP, zerlegt in seine Direktiven.](csp-overview.svg)

Die erste Direktive, `default-src`, weist den Browser an, nur Ressourcen zu laden, die vom selben Ursprung wie das Dokument stammen, es sei denn, andere spezifischere Direktiven setzen eine andere Richtlinie für andere Ressourcentypen. Die zweite, `img-src`, weist den Browser an, Bilder zu laden, die vom selben Ursprung stammen oder die von `example.com` bereitgestellt werden.

Im nächsten Abschnitt werden die verfügbaren Tools zur Kontrolle von Ressourceneinsätzen, die Hauptfunktion eines CSP, betrachtet.

## Kontrolle des Ressourcenladens

Ein CSP kann verwendet werden, um die Ressourcen, die ein Dokument laden darf, zu kontrollieren. Dies wird in erster Linie zum Schutz vor Cross-Site-Scripting (XSS)-Angriffen eingesetzt.

In diesem Abschnitt sehen wir zunächst, wie die Kontrolle des Ressourcenladens helfen kann, vor XSS zu schützen, dann die Tools, die CSP zur Verfügung stellt, um zu kontrollieren, welche Ressourcen geladen werden. Schließlich beschreiben wir eine bestimmte empfohlene Strategie, die als "Strict CSP" bezeichnet wird.

### XSS und Ressourcenladen

Ein Cross-Site-Scripting (XSS)-Angriff ist einer, bei dem ein Angreifer in der Lage ist, seinen Code im Kontext der Ziel-Website auszuführen. Dieser Code kann dann alles tun, was der eigene Code der Website tun könnte, einschließlich, zum Beispiel:

- Zugriff auf oder Änderung der Inhalte der geladenen Seiten der Website
- Zugriff auf oder Änderung von Inhalten im lokalen Speicher
- HTTP-Anfragen mit den Anmeldedaten des Benutzers durchführen, sodass sie den Benutzer imitieren oder auf sensible Daten zugreifen können

Ein XSS-Angriff ist möglich, wenn eine Website eine Eingabe akzeptiert, die von einem Angreifer erstellt worden sein könnte (zum Beispiel URL-Parameter oder ein Kommentar zu einem Blog-Beitrag), und diese dann ohne _Sanitierung_ in die Seite einfügt, das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausgeführt werden kann.

Websites sollten sich vor XSS schützen, indem sie diese Eingaben sanitisieren, bevor sie in die Seite eingefügt werden. Ein CSP bietet einen ergänzenden Schutz, der die Website schützen kann, selbst wenn die Sanitierung fehlschlägt.

Wenn die Sanitierung fehlschlägt, gibt es verschiedene Formen, die der eingespritzte schädliche Code im Dokument annehmen kann, einschließlich:

- Ein {{htmlelement("script")}}-Tag, das auf eine bösartige Quelle verweist:

  ```html
  <script src="https://evil.example.com/hacker.js"></script>
  ```

- Ein `<script>`-Tag, das inline JavaScript enthält:

  ```html
  <script>
    console.log("You've been hacked!");
  </script>
  ```

- Ein inline Event-Handler:

  ```html
  <img onmouseover="console.log(`You've been hacked!`)" />
  ```

- Eine `javascript:`-URL:

  ```html
  <iframe src="javascript:console.log(`You've been hacked!`)"></iframe>
  ```

- Ein Zeichenfolgenargument für eine unsichere API wie [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval):

  ```js
  eval("console.log(`You've been hacked!`)");
  ```

Ein CSP kann Schutz gegen all diese bieten. Mit einem CSP können Sie:

- die erlaubten Quellen für JavaScript-Dateien und andere Ressourcen definieren, um effektiv das Laden von `https://evil.example.com` zu blockieren
- inline-Skripttags deaktivieren
- nur Skripttags erlauben, die den korrekten Nonce oder Hash gesetzt haben
- inline-Event-Handler deaktivieren
- `javascript:`-URLs deaktivieren
- gefährliche APIs wie `eval()` deaktivieren

Im nächsten Abschnitt werden wir die Werkzeuge durchgehen, die CSP bereitstellt, um diese Dinge zu tun.

> [!NOTE]
> Das Setzen eines CSP ist keine Alternative zur Eingabesanitierung. Websites sollten Eingaben sanitieren _und_ ein CSP setzen, um Verteidigung in der Tiefe gegen XSS zu bieten.

### Fetch-Direktiven

Fetch-Direktiven werden verwendet, um eine bestimmte Kategorie von Ressourcen zu spezifizieren, die ein Dokument laden darf — wie JavaScript, CSS-Stylesheets, Bilder, Schriftarten usw.

Es gibt verschiedene Fetch-Direktiven für verschiedene Ressourcentypen. Zum Beispiel:

- [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) setzt erlaubte Quellen für JavaScript.
- [`style-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) setzt erlaubte Quellen für CSS-Stylesheets.
- [`img-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) setzt erlaubte Quellen für Bilder.

Eine spezielle Fetch-Direktive ist `default-src`, die eine Fallback-Richtlinie für alle Ressourcen setzt, deren Direktiven nicht explizit aufgeführt sind.

Für das vollständige Set an Fetch-Direktiven siehe die [Referenzdokumentation](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directives).

Jede Fetch-Direktive kann als entweder das einzelne Schlüsselwort `'none'` oder ein oder mehrere _Quellausdrücke_ angegeben werden, getrennt durch Leerzeichen. Wenn mehr als ein Quellausdruck aufgelistet ist: Wenn eine der Methoden die Ressource erlaubt, dann ist die Ressource erlaubt.

Zum Beispiel setzt das folgende CSP zwei Fetch-Direktiven:

- `default-src` wird der Quellexpression `'self'` angegeben
- `img-src` werden zwei Quellexpressionen gegeben: `'self'` und `example.com`

![CSP-Diagramm, das Quellexpressionen zeigt](csp-source-expressions.svg)

Die Wirkung dessen ist, dass:

- Bilder entweder vom selben Ursprung stammen müssen wie das Dokument oder von `example.com` geladen werden
- alle anderen Ressourcen vom selben Ursprung wie das Dokument stammen müssen.

In den nächsten Abschnitten werden wir einige der Möglichkeiten beschreiben, wie Sie Quellexpressionen verwenden können, um Ressourceneinsätze zu kontrollieren. Beachten Sie, dass, obwohl wir sie separat beschreiben, diese Ausdrücke im Allgemeinen kombiniert werden können: zum Beispiel kann eine einzelne Fetch-Direktive sowohl Nonces als auch Hostnamen enthalten.

#### Ressourcen blockieren

Um einen Ressourcentyp vollständig zu blockieren, verwenden Sie das Schlüsselwort `'none'`. Zum Beispiel blockiert die folgende Direktive alle {{htmlelement("object")}}- und {{htmlelement("embed")}}-Ressourcen:

```http
Content-Security-Policy: object-src 'none'
```

Beachten Sie, dass `'none'` nicht mit einer anderen Methode in einer bestimmten Direktive kombiniert werden kann: in der Praxis werden alle anderen Quellexpressionen ignoriert, wenn sie zusammen mit `'none'` angegeben werden.

#### Nonces

Ein `nonce` ist der empfohlene Ansatz zur Einschränkung des Ladens von {{htmlelement("script")}}- und {{htmlelement("style")}}-Ressourcen.

Mit einem Nonce generiert der Server einen zufälligen Wert für jede HTTP-Antwort und fügt ihn in eine `script-src` und/oder eine `style-src` Direktive ein:

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server fügt diesen Wert dann als Wert des `nonce`-Attributs aller `<script>` und/oder `<style>` Tags, die sie im Dokument einfügen wollen, hinzu.

Der Browser vergleicht die beiden Werte und lädt die Ressource nur, wenn sie übereinstimmen. Die Idee ist, dass der Angreifer, selbst wenn er es schafft, JavaScript in die Seite einzuschleusen, nicht weiß, welchen Nonce der Server verwenden wird, sodass der Browser sich weigert, das Skript auszuführen.

Damit dieser Ansatz funktioniert, darf es für einen Angreifer nicht möglich sein, den Nonce zu erraten.

**In der Praxis bedeutet dies, dass der Nonce für jede HTTP-Antwort unterschiedlich sein muss und nicht vorhersagbar sein darf.**

Dies bedeutet wiederum, dass der Server kein statisches HTML bereitstellen kann, weil er jedes Mal einen neuen Nonce einfügen muss. Typischerweise würde der Server eine Template-Engine verwenden, um den Nonce einzufügen.

Hier ist ein Code-Snippet von [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs), um dies zu demonstrieren:

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
- Nonces sowohl für externe als auch für Inline-Skripte verwenden kann
- den gleichen Nonce für alle `<script>`-Tags im Dokument verwendet

Es ist wichtig, dass der Server eine Art von Templating verwendet, um Nonces einzufügen, und sie nicht einfach in alle `<script>`-Tags einfügt: andernfalls könnte der Server versehentlich Nonces in Skripte einfügen, die von einem Angreifer eingeschleust wurden.

Beachten Sie, dass Nonces nur für Elemente verwendet werden können, die ein `nonce`-Attribut haben: das heißt nur `<script>` und `<style>` Elemente.

#### Hashes

Fetch-Direktiven können auch einen Hash des Skripts verwenden, um dessen Integrität zu gewährleisten. Bei dieser Methode berechnet der Server:

1. einen Hash des Skriptinhalts mit einer {{Glossary("hash_function", "Hashfunktion")}} (eine von SHA-256, SHA-384 oder SHA-512)
2. eine {{Glossary("Base64", "Base64")}}-Kodierung des Ergebnisses
3. fügt einen Präfix hinzu, der den verwendeten Hash-Algorithmus identifiziert (einer von `sha256-`, `sha384-` oder `sha512-`).

Dann fügt er das Ergebnis der Direktive hinzu:

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

Wenn der Browser das Dokument erhält, hashert er das Skript, vergleicht das Ergebnis mit dem Wert aus dem Header und lädt das Skript nur, wenn sie übereinstimmen.

Externe Skripte müssen auch das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut enthalten, damit diese Methode funktioniert.

Hier ist ein Code-Snippet von Express, um dies zu demonstrieren:

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
- Für das externe Skript "main.js" fügen wir auch das `integrity`-Attribut hinzu und geben ihm den gleichen Wert.
- Im Gegensatz zum Beispiel mit Nonces können sowohl das CSP als auch der Inhalt statisch sein, da die Hashes gleich bleiben. Das macht Hash-basierte Richtlinien besser geeignet für statische Seiten oder Websites, die auf clientseitiges Rendering setzen.

#### Scheme-basierte Richtlinien

Fetch-Direktiven können ein Schema wie `https:` auflisten, um Ressourcen zu erlauben, die mit diesem Schema bereitgestellt werden. Dies erlaubt beispielsweise einer Richtlinie, HTTPS für alle Ressourcenladungen zu fordern:

```http
Content-Security-Policy: default-src https:
```

#### Standortbasierte Richtlinien

Fetch-Direktiven können Ressourceneinsätze basierend auf dem Ort der Ressource kontrollieren.

Das Schlüsselwort `'self'` erlaubt Ressourcen, die vom gleichen Ursprung stammen wie das Dokument selbst:

```http
Content-Security-Policy: img-src 'self'
```

Sie können auch einen oder mehr Hostnamen angeben, potenziell einschließlich Wildcards, und nur Ressourcen, die von diesen Hosts bereitgestellt werden, sind erlaubt. Dies könnte zum Beispiel verwendet werden, um zu erlauben, dass Inhalte von einem vertrauenswürdigen CDN bereitgestellt werden.

```http
Content-Security-Policy: img-src *.example.org
```

Sie können mehrere Standorte angeben. Die folgende Direktive erlaubt nur Bilder, die vom gleichen Ursprung wie das aktuelle Dokument stammen, von einer Subdomain von "example.org" oder von "example.com" bereitgestellt werden:

```http
Content-Security-Policy: img-src 'self' *.example.org  example.com
```

#### Inline JavaScript

Wenn ein CSP entweder eine `default-src`- oder eine `script-src`-Direktive enthält, wird es nicht erlaubt, Inline-JavaScript auszuführen, es sei denn, es werden zusätzliche Maßnahmen getroffen, um es zu aktivieren. Dies schließt ein:

- JavaScript innerhalb eines `<script>`-Elements auf der Seite:

  ```html
  <script>
    console.log("Hello from an inline script");
  </script>
  ```

- JavaScript in einem Inline-Event-Handler-Attribut:

  ```html
  <img src="x" onerror="console.log('Hello from an inline event handler')" />
  ```

- JavaScript in einer `javascript:`-URL:

  ```html
  <a href="javascript:console.log('Hello from a javascript: URL')"></a>
  ```

Das `unsafe-inline`-Schlüsselwort kann verwendet werden, um diese Einschränkung zu überschreiben. Zum Beispiel, die folgende Direktive verlangt, dass alle Ressourcen vom gleichen Ursprung stammen, erlaubt aber Inline-JavaScript:

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es den Großteil des Zwecks eines CSPs zunichte macht. Inline-JavaScript ist einer der häufigsten XSS-Vektoren und eines der grundlegendsten Ziele eines CSPs ist es, seine unkontrollierte Nutzung zu verhindern.

Inline-`<script>`-Elemente sind erlaubt, wenn sie durch einen Nonce oder einen Hash geschützt sind, wie oben beschrieben.

Wenn eine Direktive Nonce- oder Hash-Ausdrücke enthält, wird das `unsafe-inline`-Schlüsselwort von Browsern ignoriert.

#### `eval()` und ähnliche APIs

Wie bei Inline-JavaScript werden wenn ein CSP entweder eine `default-src`- oder eine `script-src`-Direktive enthält, `eval()` und ähnliche APIs nicht ausgeführt. Dies schließt unter anderem APIs ein:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) selbst:

  ```js
  eval('console.log("hello from eval()")');
  ```

- Der {{jsxref("Function/Function()", "Function()")}}-Konstruktor:

  ```js
  const sum = new Function("a", "b", "return a + b");
  ```

- Das Zeichenfolgenargument zu [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval):

  ```js
  setTimeout("console.log('hello from setTimeout')", 1);
  ```

Das `unsafe-eval`-Schlüsselwort kann verwendet werden, um dieses Verhalten zu überschreiben, und ebenso wie `unsafe-inline`, und aus den gleichen Gründen: **Entwickler sollten `unsafe-eval` vermeiden**. Manchmal kann es schwierig sein, Verwendungen von `eval()` zu entfernen: in diesen Situationen kann die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) es sicherer machen, indem sichergestellt wird, dass die Eingabe einer definierten Richtlinie entspricht.

Im Gegensatz zu `unsafe-inline` funktioniert das `unsafe-eval`-Schlüsselwort immer noch in einer Direktive, die Nonce- oder Hash-Ausdrücke enthält.

### Strict CSP

Um das Laden von Skripten als Abwehrmaßnahme gegen XSS zu kontrollieren, wird empfohlen, [nonce-](#nonces) oder [hash-](#hashes) basierte Fetch-Direktiven zu verwenden. Dies wird als _striktes CSP_ bezeichnet. Dieser Typ von CSP hat zwei Hauptvorteile gegenüber einem Standort-basierten CSP (in der Regel als _Whitelist-CSP_ bezeichnet):

- Whitelist-CSPs sind schwer richtig zu machen und oft führen Richtlinien versehentlich unsichere Domains auf die Whitelist und bieten daher keinen effektiven Schutz gegen XSS (siehe [CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)).
- Whitelist-CSPs können sehr groß und schwer zu verwalten sein, insbesondere wenn Skripte verwendet werden, die nicht unter Ihrer Kontrolle liegen. Laut [How I learned to stop worrying and love the Content Security Policy](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/), um nur Google Analytics zu integrieren, wird ein Entwickler gebeten, 187 Google-Domains auf die Whitelist zu setzen.

Ein Nonce-basiertes striktes CSP sieht so aus:

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

In diesem CSP verwenden wir Nonces, um zu steuern, welche JavaScript-Ressourcen geladen werden dürfen, blockieren alle Objekt-Embeds und blockieren alle Verwendungen des `<base>`-Elements, um eine Basis-URI festzulegen.

Ein Hash-basiertes striktes CSP ist dasselbe, außer dass es Hashes anstelle von Nonces verwendet:

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

Nonce-basierte Direktiven sind einfacher zu verwalten, wenn Sie Antworten dynamisch generieren können, einschließlich des Inhalts selbst. Andernfalls müssen Sie Hash-basierte Direktiven verwenden. Das Problem mit Hash-basierten Direktiven ist, dass Sie den Hash neu berechnen und erneut anwenden müssen, wenn eine Änderung an den Skriptinhalten vorgenommen wird.

#### Das `strict-dynamic` Schlüsselwort

Wie oben dargestellt, ist das strikte CSP schwierig zu implementieren, wenn Sie Skripte verwenden, die nicht unter Ihrer Kontrolle stehen. Wenn ein Drittanbieterskript zusätzliche Skripte lädt oder Inline-Skripte verwendet, dann wird dies fehlschlagen, weil das Drittanbieterskript den Nonce oder Hash nicht weitergibt.

Das `strict-dynamic` Schlüsselwort wird bereitgestellt, um bei diesem Problem zu helfen. Es ist ein Schlüsselwort, das in einer Fetch-Direktive enthalten sein kann, und es bewirkt, dass, wenn ein Skript einen Nonce oder einen Hash attached hat, dann darf dieses Skript weitere Skripte laden, die nicht selbst Nonces oder Hashes haben. Das heißt, das Vertrauen, das in ein Skript durch einen Nonce oder Hash gesetzt wird, wird an Skripte weitergegeben, die das ursprüngliche Skript lädt (und Skripte, die _sie_ laden, und so weiter).

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

Das "main.js"-Skript wird geladen werden dürfen, da dessen Hash mit dem Wert im CSP übereinstimmt. Aber sein Versuch, "main2.js" zu laden, wird fehlschlagen.

Wenn wir `'strict-dynamic'` zum CSP hinzufügen, dann wird "main.js" in der Lage sein, "main2.js" zu laden:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  strict-dynamic
```

Das `'strict-dynamic'`-Schlüsselwort macht es viel einfacher, Nonce- oder Hash-basierte CSPs zu erstellen und zu pflegen, insbesondere wenn eine Website Drittanbieterskripte verwendet. Es macht Ihr CSP jedoch weniger sicher, da, wenn die Skripte, die Sie einfügen, `<script>`-Elemente basierend auf potenziellen Quellen von XSS erstellen, das CSP sie nicht schützt.

#### Refaktorisierung von Inline-JavaScript und `eval()`

Wir haben oben gesehen, dass Inline-JavaScript standardmäßig in einem CSP nicht erlaubt ist. Mit Nonces oder Hashes kann ein Entwickler Inline-`<script>`-Tags verwenden, aber Sie müssen immer noch Code refaktorisieren, um andere nicht erlaubte Muster zu entfernen, einschließlich Inline-Event-Handler, `javascript:`-URLs und Verwendungen von `eval()`. Beispiel: Inline-Event-Handler sollten normalerweise durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ersetzt werden:

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

Die [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors)-Direktive kann verwendet werden, um zu kontrollieren, welche Dokumente, wenn überhaupt, dieses Dokument in einem verschachtelten Browsing-Kontext wie einem {{htmlelement("iframe")}} einbetten dürfen. Dies ist ein effektiver Schutz gegen Clickjacking-Angriffe, da diese Angriffe darauf beruhen, die Zielseite in einer vom Angreifer kontrollierten Seite einzubetten.

Die Syntax von `frame-ancestors` ist ein Untersetzer der Fetch-Direktive-Syntax: Sie können das einzelne Schlüsselwort `'none'` oder einen oder mehrere Quellexpressionen angeben. Die einzigen Quellexpressionen, die Sie verwenden können, sind jedoch Schemen, Hostnamen oder das `'self'`-Schlüsselwort.

Wenn Ihre Seite nicht eingebettet werden soll, sollten Sie `frame-ancestors` auf `'none'` setzen:

```http
Content-Security-Policy: frame-ancestors 'none'
```

Diese Direktive ist ein flexiblerer Ersatz für den {{httpheader("X-Frame-Options")}}-Header.

## Unsichere Anfragen upgraden

Webentwickler werden dringend dazu ermutigt, ihre Inhalte alle über HTTPS zu bedienen. Beim Upgrade einer Website auf HTTPS kommt es manchmal vor, dass das Hauptdokument über HTTPS bereitgestellt wird, aber die Ressourcen über HTTP geliefert werden, zum Beispiel mit Markup wie diesem:

```html
<script src="http://example.org/my-cat.js"></script>
```

Dies wird _Mixed Content_ genannt, und das Vorhandensein unsicherer Ressourcen schwächt den durch HTTPS gebotenen Schutz erheblich. Unter dem [Mixed Content-Algorithmus](/de/docs/Web/Security/Mixed_content), den Browser implementieren, wird, wenn ein Dokument über HTTPS bereitgestellt wird, unsichere Ressourcen in "upgradable content" und "blockable content" kategorisiert. Upgradable content wird auf HTTPS aufgerüstet und blockable content wird blockiert, was möglicherweise die Seite bricht.

Die ultimative Lösung für Mixed Content besteht darin, dass Entwickler alle Ressourcen über HTTPS laden. Aber selbst wenn eine Website tatsächlich in der Lage ist, alle Inhalte über HTTPS zu liefern, kann es für einen Entwickler sehr schwierig (oder sogar praktisch unmöglich, was archivierte Inhalte betrifft) sein, alle URLs umzuschreiben, die die Website zum Laden von Ressourcen verwendet.

Die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests)-Direktive ist dazu gedacht, dieses Problem zu lösen. Diese Direktive hat keinen Wert: um sie einzustellen, geben Sie einfach den Direktivennamen an:

```http
Content-Security-Policy: upgrade-insecure-requests
```

Wenn diese Direktive auf ein Dokument gesetzt ist, dann wird der Browser automatisch HTTP-URLs in folgenden Fällen auf HTTPS umstellen:

- Anfragen zum Laden von Ressourcen (wie Bilder, Skripte oder Schriftarten)
- Navigationsanfragen (wie Linkziele), die den gleichen Ursprung wie das Dokument haben
- Navigationsanfragen in verschachtelten Browsing-Kontexten, wie iframes
- Formularübermittlungen

Allerdings werden Top-Level-Navigationsanfragen, deren Ziel ein anderer Ursprung ist, nicht aufgerüstet.

Zum Beispiel, angenommen, das Dokument unter `https://example.org` wird mit einem CSP geliefert, das die `upgrade-insecure-requests`-Direktive enthält, und das Dokument enthält Markup wie dieses:

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

Der Browser wird den ersten Link auf HTTPS aufrüsten, aber nicht den zweiten, da er zu einem anderen Ursprung navigiert.

Diese Direktive ist kein Ersatz für den {{httpheader("Strict-Transport-Security")}}-Header (auch bekannt als HSTS), da sie externe Links zu einer Site nicht aufrüstet. Sites sollten diese Direktive und den `Strict-Transport-Security`-Header enthalten.

## Ihre Richtlinie testen

Um die Bereitstellung zu erleichtern, kann CSP im Nur-Bericht-Modus bereitgestellt werden.
Die Richtlinie wird nicht durchgesetzt, aber alle Verstöße werden an den in der Richtlinie angegebenen Berichts-Endpunkt gesendet. Außerdem kann ein Nur-Bericht-Header verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich bereitzustellen.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header verwenden, um Ihre Richtlinie anzugeben, wie folgt:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header als auch ein {{HTTPHeader("Content-Security-Policy")}}-Header in derselben Antwort vorhanden sind, werden beide Richtlinien berücksichtigt.
Die in `Content-Security-Policy`-Headern angegebene Richtlinie wird durchgesetzt, während die `Content-Security-Policy-Report-Only`-Richtlinie Berichte generiert, aber nicht durchgesetzt wird.

Beachten Sie, dass eine Nur-Bericht-Richtlinie im Gegensatz zu einer normalen Content-Security-Policy nicht in einem `<meta>`-Element geliefert werden kann.

### Verletzungsberichte

Die empfohlene Methode zur Meldung von CSP-Verletzungen ist die Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API), bei der Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} deklariert und einer von ihnen als CSP-Berichts-Ziel mit der {{CSP("report-to")}} Direktive des `Content-Security-Policy`-Headers angegeben wird.

> [!WARNING]
> Sie können auch die CSP {{CSP("report-uri")}}-Direktive verwenden, um eine Ziel-URL für CSP-Verletzungsberichte anzugeben.
> Dies sendet ein leicht anderes JSON-Berichtsformat über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`.
> Dieser Ansatz ist veraltet, aber Sie sollten beide deklarieren, bis {{CSP("report-to")}} in allen Browsern unterstützt wird.
> Weitere Informationen zu diesem Ansatz finden Sie im {{CSP("report-uri")}}-Thema.

Ein Server kann Clients informieren, wohin sie Berichte senden sollen, indem er den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header verwendet.
Dieser Header definiert eine oder mehrere Endpunkt-URLs als kommaseparierte Liste.
Zum Beispiel, um einen Reporting-Endpunkt namens `csp-endpoint` zu definieren, der Berichte unter `https://example.com/csp-reports` akzeptiert, könnte der Antwort-Header des Servers folgendermaßen aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die verschiedene Arten von Berichten bearbeiten, würden Sie sie so spezifizieren:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Dann können Sie die {{CSP("report-to")}} Direktive des `Content-Security-Policy` Headers verwenden, um anzugeben, dass ein bestimmter definierter Endpunkt für das Reporting verwendet werden soll.
Zum Beispiel können Sie Antwort-Header senden, die wie die folgenden aussehen, um CSP-Verletzungsberichte an `https://example.com/csp-reports` für `default-src` zu senden:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn ein CSP-Verstoß auftritt, sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt über eine HTTP-`POST`-Operation, mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`.
Der Bericht ist eine serialisierte Form des [`Report`](/de/docs/Web/API/Report)-Objekts, das ein `type`-Eigenschaft mit einem Wert von `"csp-violation"` und einen `body` enthält, der die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist.

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

Sie müssen einen Server einrichten, um Berichte mit dem gegebenen JSON-Format und Content-Type zu empfangen.
Der Server, der diese Anfragen bearbeitet, kann die eingehenden Berichte speichern oder verarbeiten, wie es am besten zu Ihren Bedürfnissen passt.

## Siehe auch

- [Mitigate cross-site scripting with a strict Content Security Policy](https://web.dev/articles/strict-csp) auf web.dev (2024)
- [Content Security Policy: A successful mess between hardening and mitigation](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) auf owasp.org
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
