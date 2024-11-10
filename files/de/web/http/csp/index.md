---
title: Content Security Policy (CSP)
slug: Web/HTTP/CSP
l10n:
  sourceCommit: 82cffc5aaf956b307522038a773f3e99d5ec878c
---

{{HTTPSidebar}}

**Content Security Policy** (CSP) ist eine Funktion, die hilft, das Risiko bestimmter Sicherheitsbedrohungen zu verhindern oder zu minimieren. Sie besteht aus einer Reihe von Anweisungen von einer Website an einen Browser, die dem Browser mitteilen, dass er Einschränkungen für die Dinge vornehmen soll, die der Code der Website tun darf.

Der Hauptanwendungsfall für CSP ist die Kontrolle, welche Ressourcen, insbesondere JavaScript-Ressourcen, ein Dokument laden darf. Dies wird hauptsächlich als Verteidigung gegen {{Glossary("cross-site_scripting", "Cross-Site Scripting")}} (XSS)-Angriffe verwendet, bei denen ein Angreifer bösartigen Code in die Website des Opfers injizieren kann.

Eine CSP kann auch andere Zwecke erfüllen, einschließlich der Verteidigung gegen {{Glossary("clickjacking", "Clickjacking")}} und der Unterstützung zur Sicherstellung, dass die Seiten einer Website über HTTPS geladen werden.

In diesem Leitfaden beginnen wir damit, zu beschreiben, wie eine CSP an einen Browser übermittelt wird und wie sie auf hoher Ebene aussieht.

Dann beschreiben wir, wie sie verwendet werden kann, um [zu kontrollieren, welche Ressourcen geladen werden](#kontrolle_des_ressourcenladens), um sich gegen XSS zu schützen, und andere Anwendungsfälle wie den [Schutz vor Clickjacking](#clickjacking-schutz) und [die Aktualisierung unsicherer Anfragen](#upgrading_unsicherer_anfragen). Beachten Sie, dass es keine Abhängigkeit zwischen den verschiedenen Anwendungsfällen gibt: Wenn Sie den Schutz vor Clickjacking hinzufügen möchten, aber nicht die XSS-Minderung, können Sie einfach die Anweisungen für diesen Anwendungsfall hinzufügen.

Abschließend beschreiben wir [Strategien zur Bereitstellung einer CSP](#testen_ihrer_richtlinie) und Werkzeuge, die diesen Prozess erleichtern können.

## CSP-Übersicht

Eine CSP sollte im {{httpheader("Content-Security-Policy")}} Antwort-Header an den Browser übermittelt werden. Sie sollte für alle Antworten auf alle Anfragen gesetzt werden, nicht nur für das Hauptdokument.

Sie können sie auch mit dem [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv) Attribut des {{htmlelement("meta")}} Elements Ihres Dokuments angeben, was für einige Anwendungsfälle nützlich ist, wie zum Beispiel eine client-seitig gerenderte {{Glossary("SPA", "Single Page App")}}, die nur statische Ressourcen hat, weil Sie sich dann nicht auf eine serverseitige Infrastruktur verlassen müssen. Diese Option unterstützt jedoch nicht alle CSP-Funktionen.

Die Richtlinie wird als eine Reihe von _Direktiven_ spezifiziert, die durch Semikolons getrennt sind. Jede Direktive kontrolliert einen anderen Aspekt der Sicherheitsrichtlinie. Jede Direktive hat einen Namen, gefolgt von einem Leerzeichen, gefolgt von einem Wert. Verschiedene Direktiven können unterschiedliche Syntaxen haben.

Betrachten Sie zum Beispiel die folgende CSP:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

Sie setzt zwei Direktiven fest:

- die `default-src` Direktive ist auf `'self'` gesetzt
- die `img-src` Direktive ist auf `'self' example.com` gesetzt.

![Eine CSP, die in ihre Direktiven aufgeteilt ist.](csp-overview.svg)

Die erste Direktive, `default-src`, teilt dem Browser mit, nur Ressourcen zu laden, die mit dem Dokument gleichen Ursprungs sind, es sei denn, andere spezifischere Direktiven legen eine andere Richtlinie für andere Ressourcentypen fest. Die zweite, `img-src`, teilt dem Browser mit, Bilder zu laden, die gleichen Ursprungs sind oder die von `example.com` bereitgestellt werden.

Im nächsten Abschnitt betrachten wir die Werkzeuge, die zur Kontrolle des Ressourcenladens verfügbar sind, was die Hauptfunktion einer CSP ist.

## Kontrolle des Ressourcenladens

Eine CSP kann verwendet werden, um die Ressourcen zu kontrollieren, die ein Dokument laden darf. Dies wird hauptsächlich zum Schutz vor Cross-Site Scripting (XSS)-Angriffen verwendet.

In diesem Abschnitt werden wir zuerst sehen, wie die Kontrolle des Ressourcenladens helfen kann, sich gegen XSS zu schützen, dann betrachten wir die Werkzeuge, die CSP zur Kontrolle der geladenen Ressourcen bietet. Schließlich beschreiben wir eine bestimmte empfohlene Strategie, die als "Strikte CSP" bezeichnet wird.

### XSS und Ressourcenladen

Ein Cross-Site Scripting (XSS)-Angriff ist einer, bei dem ein Angreifer in der Lage ist, seinen Code im Kontext der Ziel-Website auszuführen. Dieser Code kann dann alles tun, was der eigene Code der Website tun könnte, einschließlich:

- Zugriff oder Änderung des Inhalts der geladenen Seiten der Website
- Zugriff oder Änderung des Inhalts im lokalen Speicher
- HTTP-Anfragen mit den Anmeldeinformationen des Benutzers durchführen, wodurch der Angreifer den Benutzer impersonieren oder auf sensible Daten zugreifen kann

Ein XSS-Angriff ist möglich, wenn eine Website einige Eingaben akzeptiert, die vom Angreifer gestaltet worden sein könnten (zum Beispiel URL-Parameter oder ein Kommentar zu einem Blogbeitrag) und diese dann in die Seite ohne _Sanitisierung_ einfügt: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausgeführt werden können.

Websites sollten sich gegen XSS schützen, indem sie diese Eingaben sanitisieren, bevor sie sie in die Seite einfügen. Eine CSP bietet einen komplementären Schutz, der die Website auch dann schützen kann, wenn die Sanitisierung fehlschlägt.

Wenn die Sanitisierung fehlschlägt, können die injizierten bösartigen Codes verschiedene Formen im Dokument annehmen, einschließlich:

- Ein {{htmlelement("script")}} Tag, das auf eine bösartige Quelle verweist:

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

- Eine `javascript:` URL:

  ```html
  <iframe src="javascript:console.log(`You've been hacked!`)"></iframe>
  ```

- Ein String-Argument für eine unsichere API wie [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval):

  ```js
  eval("console.log(`You've been hacked!`)");
  ```

Eine CSP kann Schutz gegen alle diese bieten. Mit einer CSP können Sie:

- die erlaubten Quellen für JavaScript-Dateien und andere Ressourcen definieren und so effektiv das Laden von `https://evil.example.com` blockieren
- Inline-Skript-Tags deaktivieren
- nur Skript-Tags erlauben, die das korrekte Nonce oder den Hash gesetzt haben
- Inline-Ereignishandler deaktivieren
- `javascript:` URLs deaktivieren
- gefährliche APIs wie `eval()` deaktivieren

Im nächsten Abschnitt werden wir die Werkzeuge durchgehen, die CSP bietet, um diese Dinge zu tun.

> [!NOTE]
> Das Setzen einer CSP ist keine Alternative zur Sanitisierung von Eingaben. Websites sollten Eingaben _sanitisieren_ und eine CSP setzen, um eine tiefenwirksame Verteidigung gegen XSS zu bieten.

### Abruffunktionen

Abrufdirektiven werden verwendet, um eine bestimmte Kategorie von Ressourcen festzulegen, die ein Dokument laden darf — wie JavaScript, CSS-Stylesheets, Bilder, Schriften und so weiter.

Es gibt verschiedene Abrufdirektiven für verschiedene Ressourcentypen. Zum Beispiel:

- [`script-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) legt erlaubte Quellen für JavaScript fest.
- [`style-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) legt erlaubte Quellen für Stylesheets fest.
- [`img-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) legt erlaubte Quellen für Bilder fest.

Eine spezielle Abrufdirektive ist `default-src`, die eine Fallback-Richtlinie für alle Ressourcen festlegt, deren Direktiven nicht explizit aufgelistet sind.

Für das vollständige Set von Abrufdirektiven siehe die [Referenzdokumentation](/de/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directives).

Jede Abrufdirektive wird entweder als das einzelne Schlüsselwort `'none'` oder eine oder mehrere _Quellen-Ausdrücke_ angegeben, getrennt durch Leerzeichen. Wenn mehr als ein Quellen-Ausdruck aufgelistet ist: Wenn eine der Methoden die Ressource erlaubt, dann ist die Ressource erlaubt.

Beispielsweise setzt die folgende CSP zwei Abrufdirektiven:

- `default-src` erhält den einzelnen Quellen-Ausdruck `'self'`
- `img-src` erhält zwei Quellen-Ausdrücke: `'self'` und `example.com`

![CSP-Diagramm, das Quellenausdrücke zeigt](csp-source-expressions.svg)

Die Auswirkung davon ist, dass:

- Bilder müssen entweder gleichen Ursprungs mit dem Dokument sein oder von `example.com` geladen werden
- alle anderen Ressourcen müssen gleichen Ursprungs mit dem Dokument sein.

In den nächsten Abschnitten werden wir einige der Möglichkeiten beschreiben, wie Sie Quellenausdrücke verwenden können, um Ressourcenlader zu kontrollieren. Beachten Sie, dass, obwohl wir sie separat beschreiben, diese Ausdrücke im Allgemeinen kombiniert werden können: zum Beispiel kann eine einzelne Abrufdirektive sowohl Nonces als auch Hostnamen enthalten.

#### Ressourcen blockieren

Um einen Ressourcentyp vollständig zu blockieren, verwenden Sie das Schlüsselwort `'none'`. Zum Beispiel blockiert die folgende Direktive alle {{htmlelement("object")}} und {{htmlelement("embed")}} Ressourcen:

```http
Content-Security-Policy: object-src 'none'
```

Beachten Sie, dass `'none'` nicht mit irgendeiner anderen Methode in einer bestimmten Direktive kombiniert werden kann: in der Praxis, wenn irgendwelche anderen Quellen-Ausdrücke zusammen mit `'none'` gegeben werden, dann werden sie ignoriert.

#### Nonces

Ein `nonce` ist der empfohlene Ansatz für die Einschränkung des Ladens von {{htmlelement("script")}} und {{htmlelement("style")}} Ressourcen.

Mit einem Nonce generiert der Server einen zufälligen Wert für jede HTTP-Antwort und fügt ihn in eine `script-src` und/oder `style-src` Direktive ein:

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server fügt dann diesen Wert als Wert des `nonce` Attributs bei allen `<script>` und/oder `<style>` Tags ein, die sie im Dokument einfügen möchten.

Der Browser vergleicht die beiden Werte und lädt die Ressource nur, wenn sie übereinstimmen. Die Idee ist, dass selbst wenn ein Angreifer etwas JavaScript in die Seite einfügen kann, er nicht wissen wird, welchen Nonce der Server verwenden wird, sodass der Browser das Skript nicht ausführen wird.

Damit dieser Ansatz funktioniert, darf es einem Angreifer nicht möglich sein, den Nonce zu erraten.

**In der Praxis bedeutet dies, dass der Nonce für jede HTTP-Antwort unterschiedlich sein muss und nicht vorhersehbar sein darf.**

Dies bedeutet wiederum, dass der Server kein statisches HTML bereitstellen kann, da er bei jeder Anfrage einen neuen Nonce einfügen muss. Typischerweise würde der Server eine Template-Engine verwenden, um den Nonce einzufügen.

Hier ist ein Ausschnitt von [Express](/de/docs/Learn/Server-side/Express_Nodejs) Code, um dies zu demonstrieren:

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

Bei jeder Anfrage generiert der Server einen neuen Nonce, fügt ihn in die CSP und in die {{htmlelement("script")}} Tags im zurückgegebenen Dokument ein. Beachten Sie, dass der Server:

- einen neuen Nonce für jede Anfrage generiert
- Nonces sowohl mit externen als auch mit Inlineskripten verwenden kann
- den gleichen Nonce für alle `<script>` Tags im Dokument verwendet

Es ist wichtig, dass der Server irgendeine Art von Templating verwendet, um Nonces einzufügen, und sie nicht einfach in alle `<script>` Tags einfügt: andernfalls könnte der Server versehentlich Nonces in Skripte einfügen, die von einem Angreifer injiziert wurden.

Beachten Sie, dass Nonces nur für Elemente verwendet werden können, die ein `nonce` Attribut haben: das heißt, nur für `<script>` und `<style>` Elemente.

#### Hashes

Abrufdirektiven können auch einen Hash des Skripts verwenden, um seine Integrität zu gewährleisten. Mit dieser Methode:

1. berechnet der Server einen Hash des Skriptinhalts mit einer {{Glossary("cryptographic_hash_function", "kryptographischen Hash-Funktion")}} (eine von SHA-256, SHA-384 oder SHA-512)
2. erzeugt eine {{Glossary("Base64", "Base64")}} Kodierung des Ergebnisses
3. hängt ein Präfix an, das den verwendeten Hash-Algorithmus identifiziert (eines von `sha256-`, `sha384-` oder `sha512-`).

Er fügt dann das Ergebnis der Direktive hinzu:

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

Wenn der Browser das Dokument erhält, hashiert er das Skript, vergleicht das Ergebnis mit dem Wert aus dem Header und lädt das Skript nur, wenn sie übereinstimmen.

Externe Skripte müssen auch das [`integrity`](/de/docs/Web/HTML/Element/script#integrity) Attribut für diese Methode verwenden.

Hier ist ein Ausschnitt von Express-Code, um dies zu demonstrieren:

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
- Beim externen Skript "main.js" fügen wir auch das `integrity` Attribut hinzu und geben ihm den gleichen Wert.
- Im Gegensatz zum Beispiel mit Nonces können sowohl die CSP als auch der Inhalt statisch sein, da die Hashes gleich bleiben. Dies macht Hash-basierte Richtlinien besser geeignet für statische Seiten oder Websites, die sich auf die clientseitige Darstellung verlassen.

#### Schemabasierte Richtlinien

Abrufdirektiven können ein Schema, wie `https:`, auflisten, um Ressourcen zuzulassen, die mit diesem Schema bereitgestellt werden. Damit kann zum Beispiel eine Richtlinie erstellt werden, die für alle Ressourcenladevorgänge HTTPS erfordert:

```http
Content-Security-Policy: default-src https:
```

#### Standortbasierte Richtlinien

Abrufdirektiven können das Laden von Ressourcen basierend darauf kontrollieren, wo sich die Ressource befindet.

Das Schlüsselwort `'self'` erlaubt Ressourcen, die gleichen Ursprungs mit dem Dokument selbst sind:

```http
Content-Security-Policy: img-src 'self'
```

Sie können auch einen oder mehrere Hostnamen angeben, möglicherweise einschließlich Wildcards, und nur Ressourcen, die von diesen Hosts bereitgestellt werden, sind erlaubt. Dies könnte zum Beispiel verwendet werden, um Inhalte von einem vertrauenswürdigen CDN zuzulassen.

```http
Content-Security-Policy: img-src *.example.org
```

Sie können mehrere Standorte angeben. Die folgende Direktive erlaubt nur Bilder, die gleichen Ursprungs mit dem aktuellen Dokument sind oder von einem Unterbereich von "example.org" oder von "example.com" bereitgestellt werden:

```http
Content-Security-Policy: img-src 'self' *.example.org  example.com
```

#### Inline-JavaScript

Wenn eine CSP entweder eine `default-src` oder eine `script-src` Direktive enthält, wird Inline-JavaScript nicht erlaubt, es sei denn, es werden zusätzliche Maßnahmen ergriffen, um es zu ermöglichen. Dazu gehören:

- JavaScript in einem `<script>` Element innerhalb der Seite:

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
  <a href="javascript:console.log('Hello from a javascript: URL')"></a>
  ```

Das `unsafe-inline` Schlüsselwort kann verwendet werden, um diese Einschränkung aufzuheben. Zum Beispiel erlaubt die folgende Direktive alle Ressourcen gleichen Ursprungs, erlaubt jedoch Inline-JavaScript:

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es einen Großteil des Zwecks einer CSP vereitelt. Inline-JavaScript ist einer der häufigsten XSS-Vektoren und eines der grundlegendsten Ziele einer CSP ist es, dessen unkontrollierte Verwendung zu verhindern.

Inline `<script>` Elemente sind erlaubt, wenn sie durch einen Nonce oder einen Hash geschützt sind, wie oben beschrieben.

Wenn eine Direktive Nonce- oder Hash-Ausdrücke enthält, wird das `unsafe-inline` Schlüsselwort von Browsern ignoriert.

#### `eval()` und ähnliche APIs

Ähnlich wie Inline-JavaScript wird `eval()` und ähnliche APIs nicht erlaubt, wenn eine CSP entweder eine `default-src` oder eine `script-src` Direktive enthält. Dies umfasst, unter anderem:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) selbst:

  ```js
  eval('console.log("hello from eval()")');
  ```

- Den {{jsxref("Function/Function()", "Function()")}} Konstruktor:

  ```js
  const sum = new Function("a", "b", "return a + b");
  ```

- Das String-Argument in [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval):

  ```js
  setTimeout("console.log('hello from setTimeout')", 1);
  ```

Das `unsafe-eval` Schlüsselwort kann verwendet werden, um dieses Verhalten aufzuheben. Ebenso wie `unsafe-inline`, und aus den gleichen Gründen: **Entwickler sollten `unsafe-eval` vermeiden**. Manchmal kann es schwierig sein, die Verwendung von `eval()` zu entfernen: In diesen Situationen kann die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) es sicherer machen, indem sichergestellt wird, dass die Eingabe eine definierte Richtlinie erfüllt.

Im Gegensatz zu `unsafe-inline` funktioniert das `unsafe-eval` Schlüsselwort immer noch in einer Direktive, die Nonce- oder Hash-Ausdrücke enthält.

### Strikte CSP

Um das Laden von Skripten als Maßnahme gegen XSS zu kontrollieren, ist es eine empfohlene Praxis, [nonce-](#nonces) oder [hash-](#hashes) basierte Abrufdirektiven zu verwenden. Dies wird als _strikte CSP_ bezeichnet. Diese Art von CSP bietet zwei Hauptvorteile gegenüber einer standortbasierten CSP (üblicherweise als _Allowlist CSP_ bezeichnet):

- Allowlist CSPs sind schwer richtig zu machen und oft erlauben Richtlinien unsichere Domains versehentlich, und bieten daher keinen effektiven Schutz gegen XSS (siehe [CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)).
- Allowlist CSPs können sehr groß und schwer zu pflegen sein, insbesondere wenn Sie Skripte verwenden, die außerhalb Ihrer Kontrolle liegen. Laut [How I learned to stop worrying and love the Content Security Policy](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/), wird ein Entwickler, um Google Analytics zu integrieren, aufgefordert, 187 Google-Domains zur Allowlist hinzuzufügen.

Eine Nonce-basierte strikte CSP sieht folgendermaßen aus:

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

In dieser CSP:

- verwenden wir Nonces, um zu steuern, welche JavaScript-Ressourcen geladen werden dürfen
- blockieren wir alle Objekt-Embeds
- blockieren wir alle Verwendungen des `<base>` Elements, um eine Basis-URI festzulegen.

Eine Hash-basierte strikte CSP ist die gleiche, verwendet jedoch Hashes anstelle von Nonces:

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

Nonce-basierte Direktiven sind einfacher zu warten, wenn Sie Antworten, einschließlich des Inhalts selbst, dynamisch generieren können. Andernfalls müssen Sie Hash-basierte Direktiven verwenden. Das Problem mit Hash-basierten Direktiven ist, dass Sie den Hash neu berechnen und erneut anwenden müssen, wenn eine Änderung an den Skriptinhalten vorgenommen wird.

#### Das `strict-dynamic` Schlüsselwort

Wie oben dargestellt, ist die strikte CSP schwer zu implementieren, wenn Sie Skripte verwenden, die nicht unter Ihrer Kontrolle stehen. Wenn ein Drittanbieter-Skript weitere Skripte lädt oder Inline-Skripte verwendet, schlägt dies fehl, da das Drittanbieter-Skript den Nonce oder Hash nicht weitergeben kann.

Das `strict-dynamic` Schlüsselwort wird bereitgestellt, um bei diesem Problem zu helfen. Es ist ein Schlüsselwort, das in einer Abrufdirektive enthalten sein kann und hat den Effekt, dass wenn ein Skript einen Nonce oder einen Hash hat, dieses Skript dann weitere Skripte laden darf, die selbst keine Nonces oder Hashes haben. Das heißt, das Vertrauen, das in ein Skript durch einen Nonce oder Hash gesetzt wird, wird auf Skripte, die das Originalskript lädt, übertragen (und Skripte, die _sie_ laden und so weiter).

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

Es enthält ein Skript "main.js", das ein weiteres Skript erstellt und hinzufügt, "main2.js":

```js
console.log("hello");

const scriptElement = document.createElement("script");
scriptElement.src = `main2.js`;

document.head.appendChild(scriptElement);
```

Wir liefern unser Dokument mit einer CSP wie dieser:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
```

Das Skript "main.js" darf geladen werden, da sein Hash mit dem Wert in der CSP übereinstimmt. Aber sein Versuch, "main2.js" zu laden, wird fehlschlagen.

Wenn wir `'strict-dynamic'` zur CSP hinzufügen, darf "main.js" "main2.js" laden:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  strict-dynamic
```

Das `'strict-dynamic'` Schlüsselwort erleichtert die Erstellung und Wartung von Nonce- oder Hash-basierten CSPs erheblich, insbesondere wenn eine Website Drittanbieter-Skripte verwendet. Es macht Ihre CSP jedoch weniger sicher, da, wenn die von Ihnen einbezogenen Skripte `<script>`-Elemente basierend auf potenziellen XSS-Quellen erstellen, die CSP sie nicht schützen wird.

#### Refactoring von Inline-JavaScript und `eval()`

Wir haben oben gesehen, dass Inline-JavaScript standardmäßig in einer CSP nicht erlaubt ist. Mit Nonces oder Hashes kann ein Entwickler Inline-`<script>` Tags verwenden, aber Sie müssen immer noch Code refaktorisieren, um andere nicht erlaubten Muster zu entfernen, einschließlich Inline-Ereignishandler, `javascript:` URLs und Verwendungen von `eval()`. Zum Beispiel sollten Inline-Ereignishandler normalerweise durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ersetzt werden:

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

Die [`frame-ancestors`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) Direktive kann verwendet werden, um zu kontrollieren, welche Dokumente, wenn überhaupt, dieses Dokument in einem verschachtelten Browsing-Kontext wie einem {{htmlelement("iframe")}} einbetten dürfen. Dies ist ein wirksamer Schutz gegen Clickjacking-Angriffe, da diese Angriffe davon abhängen, dass die Zielseite in eine vom Angreifer kontrollierte Seite eingebettet wird.

Die Syntax von `frame-ancestors` ist ein Unterabschnitt der Syntax der Abrufdirektiven: Sie können den einzelnen Schlüsselwortwert `'none'` oder eine oder mehrere Quellen-Ausdrücke angeben. Die einzigen Quellen-Ausdrücke, die Sie verwenden können, sind jedoch Schemen, Hostnamen oder der `'self'` Schlüsselwortwert.

Wenn es nicht erforderlich ist, dass Ihre Website eingebettbar ist, sollten Sie `frame-ancestors` auf `'none'` setzen:

```http
Content-Security-Policy: frame-ancestors 'none'
```

Diese Direktive ist ein flexibler Ersatz für den {{httpheader("X-Frame-Options")}} Header.

## Upgrading unsicherer Anfragen

Webentwickler werden dringend ermutigt, alle Inhalte über HTTPS bereitzustellen. Beim Upgrade einer Website auf HTTPS wird die Hauptdokumentation manchmal über HTTPS bereitgestellt, während die Ressourcen über HTTP bereitgestellt werden, beispielsweise mit Markup wie diesem:

```html
<script src="http://example.org/my-cat.js"></script>
```

Dies wird als _gemischter Inhalt_ bezeichnet, und das Vorhandensein unsicherer Ressourcen schwächt den Schutz, den HTTPS bietet, erheblich. Unter dem von Browsern implementierten [gemischten Inhalt-Algorithmus](/de/docs/Web/Security/Mixed_content) wird der Dokumentinhalt über HTTPS bereitgestellt, unsichere Ressourcen werden in "aufrüstbaren Inhalt" und "blockierbaren Inhalt" kategorisiert. Aufrüstbarer Inhalt wird auf HTTPS aktualisiert, und blockierbarer Inhalt wird blockiert, wodurch die Seite möglicherweise beschädigt wird.

Die ultimative Lösung für gemischten Inhalt besteht darin, dass Entwickler alle Ressourcen über HTTPS laden. Selbst wenn eine Website tatsächlich in der Lage ist, alle Inhalte über HTTPS bereitzustellen, kann es jedoch sehr schwierig (oder sogar faktisch unmöglich sein, wenn es um archivierte Inhalte geht) für einen Entwickler sein, alle URLs umzuschreiben, die die Website verwendet, um Ressourcen zu laden.

Die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests) Direktive ist dafür gedacht, dieses Problem zu lösen. Diese Direktive hat keinen Wert: um sie festzulegen, fügen Sie einfach den Direktiven-Namen ein:

```http
Content-Security-Policy: upgrade-insecure-requests
```

Wenn diese Direktive in einem Dokument gesetzt ist, dann wird der Browser automatisch alle HTTP-URLs in den folgenden Fällen auf HTTPS aktualisieren:

- Anfragen zum Laden von Ressourcen (wie Bilder, Skripte oder Schriften)
- Navigationsanfragen (wie Link-Ziele), die denselben Ursprung wie das Dokument haben
- Navigationsanfragen in verschachtelten Browsing-Kontexten, wie iframes
- Formularübermittlungen

Jedoch werden Top-Level-Navigationsanfragen, deren Ziel ein anderer Ursprung ist, nicht aktualisiert.

Zum Beispiel, nehmen wir an, das Dokument unter `https://example.org` wird mit einer CSP bereitgestellt, die die `upgrade-insecure-requests` Direktive enthält, und das Dokument enthält Markup, wie dieses:

```html
<script src="http://example.org/my-cat.js"></script>
<script src="http://not-example.org/another-cat.js"></script>
```

Der Browser wird beide Anfragen automatisch auf HTTPS aktualisieren.

Nehmen wir an, das Dokument enthält auch dies:

```html
<a href="http://example.org/more-cats">See some more cats!</a>
<a href="http://not-example.org/even-more-cats">More cats, on another site!</a>
```

Der Browser wird den ersten Link auf HTTPS aktualisieren, nicht jedoch den zweiten, da er zu einem anderen Ursprung navigiert.

Diese Direktive ist kein Ersatz für den {{httpheader("Strict-Transport-Security")}} Header (auch bekannt als HSTS), da sie keine externen Links zu einer Website aktualisiert. Websites sollten diese Direktive und den `Strict-Transport-Security` Header enthalten.

## Testen Ihrer Richtlinie

Um die Bereitstellung zu erleichtern, kann CSP im Bericht-Modus bereitgestellt werden.
Die Richtlinie wird nicht durchgesetzt, jedoch werden alle Verstöße an den im Protokoll angegebenen Endpunkt gesendet. Zusätzlich kann ein Bericht-Header verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich bereitzustellen.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header verwenden, um Ihre Richtlinie anzugeben, wie folgt:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header als auch ein {{HTTPHeader("Content-Security-Policy")}} Header in derselben Antwort vorhanden sind, werden beide Richtlinien berücksichtigt.
Die in `Content-Security-Policy` Headern angegebene Richtlinie wird durchgesetzt, während die `Content-Security-Policy-Report-Only` Richtlinie Berichte erstellt, aber nicht erzwungen wird.

Beachten Sie, dass im Gegensatz zu einer normalen Content-Security-Richtlinie eine Bericht-Only-Richtlinie nicht in einem `<meta>` Element geliefert werden kann.

### Bericht über Verstöße

Die empfohlene Methode zum Berichten von CSP-Verstößen ist die Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API), die Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} deklariert und einen von ihnen als CSP-Berichterstattungsziel mit der `Content-Security-Policy` Header {{CSP("report-to")}} Direktive spezifiziert.

> [!WARNING]
> Sie können auch die CSP {{CSP("report-uri")}} Direktive verwenden, um eine Ziel-URL für CSP-Verstöße-Berichte anzugeben.
> Dies sendet ein etwas anderes JSON-Berichtsformat über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`.
> Dieser Ansatz ist veraltet, aber Sie sollten beide deklarieren, bis {{CSP("report-to")}} in allen Browsern unterstützt wird.
> Für weitere Informationen zu diesem Ansatz siehe das {{CSP("report-uri")}} Thema.

Ein Server kann Kunden darüber informieren, wohin Berichte gesendet werden, indem er den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header verwendet.
Dieser Header definiert eine oder mehrere Endpunkt-URLs als kommagetrennte Liste.
Beispielsweise, um einen Berichterstattung-Endpunkt namens `csp-endpoint` zu definieren, der Berichte unter `https://example.com/csp-reports` akzeptiert, könnte der Serverantwort-Header so aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die verschiedene Arten von Berichten behandeln, würden Sie sie so angeben:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Sie können dann den `Content-Security-Policy` Header's {{CSP("report-to")}} Direktive verwenden, um anzugeben, dass ein bestimmter definierter Endpunkt für die Berichterstattung verwendet werden soll.
Zum Beispiel, um CSP-Verstöße an `https://example.com/csp-reports` für `default-src` zu senden, könnten Sie Antwort-Header senden, die folgendermaßen aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn ein CSP-Verstoß auftritt, sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt über eine HTTP `POST` Operation, mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`.
Der Bericht ist eine serialisierte Form des [`Report`](/de/docs/Web/API/Report) Objekts, der eine `type` Eigenschaft mit dem Wert `"csp-violation"` und einen `body` enthält, der die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Objekts ist.

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

Sie müssen einen Server einrichten, um Berichte mit dem angegebenen JSON-Format und Inhalts-Typ zu empfangen.
Der die Anforderungen verarbeitende Server kann dann die eingehenden Berichte so speichern oder verarbeiten, wie es am besten zu Ihren Bedürfnissen passt.

## Siehe auch

- [Mitigate cross-site scripting with a strict Content Security Policy](https://web.dev/strict-csp) auf web.dev (2024)
- [Content Security Policy: A successful mess between hardening and mitigation](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) auf owasp.org
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
