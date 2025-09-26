---
title: Content Security Policy (CSP)
slug: Web/HTTP/Guides/CSP
l10n:
  sourceCommit: 0fd5fa80156beeac5e18b73b8bd9c49f8e9674fa
---

**Content Security Policy** (CSP) ist ein Feature, das hilft, das Risiko bestimmter Arten von Sicherheitsbedrohungen zu verhindern oder zu minimieren. Es besteht aus einer Reihe von Anweisungen von einer Webseite an einen Browser, die dem Browser vorschreiben, Einschränkungen bezüglich der Dinge vorzunehmen, die der Code der Seite tun darf.

Der primäre Anwendungsfall für CSP ist die Steuerung, welche Ressourcen, insbesondere JavaScript-Ressourcen, ein Dokument laden darf. Dies wird hauptsächlich als Verteidigung gegen {{Glossary("cross-site_scripting", "Cross-Site Scripting")}} (XSS)-Angriffe verwendet, bei denen ein Angreifer in der Lage ist, bösartigen Code in die Seite des Opfers einzufügen.

Ein CSP kann auch andere Zwecke erfüllen, einschließlich der Abwehr gegen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und der Sicherstellung, dass Seiten einer Website über HTTPS geladen werden.

In diesem Leitfaden beginnen wir damit, zu beschreiben, wie ein CSP an einen Browser ausgeliefert wird und wie es auf hoher Ebene aussieht.

Dann beschreiben wir, wie es verwendet werden kann, um zu [kontrollieren, welche Ressourcen geladen werden](#steuerung_des_ressourcenladens), um sich gegen XSS zu schützen, und dann andere Anwendungsfälle wie [Clickjacking-Schutz](#clickjacking-schutz) und [Aufwertung unsicherer Anfragen](#aufwertung_unsicherer_anfragen). Beachten Sie, dass es keine Abhängigkeit zwischen den verschiedenen Anwendungsfällen gibt: Wenn Sie Clickjacking-Schutz hinzufügen möchten, aber nicht XSS-Abschwächung, können Sie einfach die Direktiven für diesen Anwendungsfall hinzufügen.

Schließlich beschreiben wir [Strategien für die Bereitstellung eines CSP](#testen_ihrer_richtlinie) und Werkzeuge, die helfen können, diesen Prozess zu erleichtern.

## CSP Überblick

Ein CSP sollte im {{httpheader("Content-Security-Policy")}} Antwort-Header an den Browser ausgeliefert werden. Es sollte auf alle Antworten auf alle Anfragen gesetzt werden, nicht nur auf das Hauptdokument.

Sie können es auch mit dem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) Attribut Ihres Dokuments im {{htmlelement("meta")}} Element angeben, und dies ist eine nützliche Option für einige Anwendungsfälle, wie z.B. eine clientseitig gerenderte {{Glossary("SPA", "Single Page App")}}, die nur statische Ressourcen hat, da Sie dann vermeiden können, sich auf eine Serverinfrastruktur zu verlassen. Diese Option unterstützt jedoch nicht alle CSP-Funktionen.

Die Richtlinie wird als eine Reihe von _Direktiven_ angegeben, getrennt durch Semikolons. Jede Direktive steuert einen anderen Aspekt der Sicherheitsrichtlinie. Jede Direktive hat einen Namen, gefolgt von einem Leerzeichen, gefolgt von einem Wert. Verschiedene Direktiven können unterschiedliche Syntaxen haben.

Zum Beispiel betrachten Sie das folgende CSP:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

Es setzt zwei Direktiven:

- die Direktive `default-src` ist auf `'self'` gesetzt
- die Direktive `img-src` ist auf `'self' example.com` gesetzt.

![Ein CSP aufgeteilt in seine Direktiven.](csp-overview.svg)

Die erste Direktive, `default-src`, weist den Browser an, nur Ressourcen zu laden, die gleiche Herkunft wie das Dokument haben, es sei denn, andere spezifischere Direktiven setzen eine andere Richtlinie für andere Ressourcentypen. Die zweite, `img-src`, weist den Browser an, Bilder zu laden, die die gleiche Herkunft haben oder die von `example.com` stammen.

Im nächsten Abschnitt werden wir uns die verfügbaren Werkzeuge zur Kontrolle von Ressourcenladevorgängen ansehen, was die Hauptfunktion eines CSP ist.

## Steuerung des Ressourcenladens

Ein CSP kann verwendet werden, um die Ressourcen zu kontrollieren, die ein Dokument laden darf. Dies wird hauptsächlich zum Schutz vor Cross-Site Scripting (XSS)-Angriffen verwendet.

In diesem Abschnitt sehen wir zuerst, wie die Kontrolle von Ressourcenladungen helfen kann, sich gegen XSS zu schützen und dann bei den Werkzeugen, die CSP bietet, um zu kontrollieren, welche Ressourcen geladen werden. Schließlich beschreiben wir eine besonders empfohlene Strategie, die als "Strenge CSP" bezeichnet wird.

### XSS und Ressourcenladen

Ein Cross-Site Scripting (XSS)-Angriff ist ein Angriff, bei dem es einem Angreifer gelingt, seinen Code im Kontext der Ziel-Website auszuführen. Dieser Code kann dann alles tun, was der Code der Website selbst tun könnte, einschließlich z.B.:

- Zugriff auf oder Änderung des Inhalts der geladenen Seiten der Website
- Zugriff auf oder Änderung von Inhalten im lokalen Speicher
- HTTP-Anfragen mit den Anmeldeinformationen des Benutzers ausführend, wodurch sie den Benutzer imitieren oder auf sensible Daten zugreifen können

Ein XSS-Angriff ist möglich, wenn eine Website einige Eingaben akzeptiert, die von einem Angreifer verfasst worden sein könnten (zum Beispiel URL-Parameter oder ein Kommentar zu einem Blogpost) und sie dann in die Seite einfügt, ohne sie _zu säubern_: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausgeführt werden kann.

Websites sollten sich gegen XSS schützen, indem sie diese Eingaben säubern, bevor sie in die Seite eingefügt werden. Ein CSP bietet einen ergänzenden Schutz, der die Website schützen kann, selbst wenn die Säuberung fehlschlägt.

Wenn die Säuberung fehlschlägt, können verschiedene Formen des eingeschleusten bösartigen Code im Dokument erscheinen, einschließlich:

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

Ein CSP kann Schutz gegen all diese bieten. Mit einem CSP können Sie:

- die zulässigen Quellen für JavaScript-Dateien und andere Ressourcen definieren und so das Laden von `https://evil.example.com` effektiv blockieren
- Inline-Skripttags deaktivieren
- nur Skripttags erlauben, die den korrekten Nonce oder Hash haben
- Inline-Ereignishandler deaktivieren
- `javascript:`-URLs deaktivieren
- gefährliche APIs wie `eval()` deaktivieren

Im nächsten Abschnitt gehen wir über die Werkzeuge, die CSP bietet, um diese Dinge zu tun.

> [!NOTE]
> Das Setzen eines CSP ist keine Alternative zur Säuberung von Eingaben. Websites sollten Eingaben säubern _und_ ein CSP setzen, um einen tiefgehenden Schutz gegen XSS zu bieten.

### Fetch-Direktiven

Fetch-Direktiven werden verwendet, um eine bestimmte Kategorie von Ressourcen anzugeben, die ein Dokument laden darf — wie JavaScript, CSS-Stylesheets, Bilder, Schriftarten und so weiter.

Es gibt verschiedene Fetch-Direktiven für verschiedene Arten von Ressourcen. Zum Beispiel:

- [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) legt fest, welche Quellen für JavaScript erlaubt sind.
- [`style-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) legt fest, welche Quellen für CSS-Stylesheets erlaubt sind.
- [`img-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) legt fest, welche Quellen für Bilder erlaubt sind.

Eine spezielle Fetch-Direktive ist `default-src`, die eine Rückfallrichtlinie für alle Ressourcen festlegt, deren Direktiven nicht explizit aufgelistet sind.

Für die vollständige Liste der Fetch-Direktiven siehe die [Referenzdokumentation](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directives).

Jede Fetch-Direktive wird entweder als das einzelne Schlüsselwort `'none'` oder als eine oder mehrere _Quellen-Ausdrücke_ angegeben, getrennt durch Leerzeichen. Wenn mehr als ein Quellen-Ausdruck gelistet ist: wenn eine der Methoden die Ressource erlaubt, dann ist die Ressource erlaubt.

Zum Beispiel setzt das folgende CSP zwei Fetch-Direktiven:

- `default-src` wird der einzelne Quellen-Ausdruck `'self'` gegeben
- `img-src` wird zwei Quellen-Ausdrücke gegeben: `'self'` und `example.com`

![CSP-Diagramm, das Quellen-Ausdrücke zeigt](csp-source-expressions.svg)

Der Effekt hiervon ist, dass:

- Bilder entweder die gleiche Herkunft wie das Dokument haben müssen oder von `example.com` geladen werden.
- alle anderen Ressourcen müssen die gleiche Herkunft wie das Dokument haben.

In den nächsten Abschnitten beschreiben wir einige der Möglichkeiten, wie Sie Quellen-Ausdrücke verwenden können, um Ressourcenladen zu steuern. Beachten Sie, dass wir, obwohl wir sie separat beschreiben, diese allgemeinen Ausdrücke kombinieren können: Zum Beispiel kann eine einzelne Fetch-Direktive Nonces sowie Hostnamen enthalten.

#### Ressourcentypen blockieren

Um einen Ressourcentyp vollständig zu blockieren, verwenden Sie das Schlüsselwort `'none'`. Zum Beispiel blockiert die folgende Direktive alle {{htmlelement("object")}}- und {{htmlelement("embed")}}-Ressourcen:

```http
Content-Security-Policy: object-src 'none'
```

Beachten Sie, dass `'none'` nicht mit einer anderen Methode in einer bestimmten Direktive kombiniert werden kann: In der Praxis, wenn andere Quellen-Ausdrücke zusammen mit `'none'` angegeben werden, dann werden sie ignoriert.

#### Nonces

Ein `nonce` ist der empfohlene Ansatz zum Einschränken des Ladens von {{htmlelement("script")}}- und {{htmlelement("style")}}-Ressourcen.

Bei einem Nonce generiert der Server für jede HTTP-Antwort einen Zufallswert und fügt ihn in eine `script-src`- und/oder eine `style-src`-Direktive ein:

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server fügt diesen Wert dann als Wert des `nonce`-Attributs aller `<script>`- und/oder `<style>`-Tags ein, die sie im Dokument enthalten möchten.

Der Browser vergleicht die beiden Werte und lädt die Ressource nur, wenn sie übereinstimmen. Die Idee ist, dass selbst wenn ein Angreifer in der Lage ist, JavaScript in die Seite einzufügen, er nicht weiß, welchen Nonce der Server verwenden wird, so dass der Browser das Skript nicht ausführen wird.

Damit dieser Ansatz funktioniert, darf es einem Angreifer nicht möglich sein, den Nonce zu erraten.

**In der Praxis bedeutet dies, dass der Nonce für jede HTTP-Antwort unterschiedlich sein muss und nicht vorhersehbar sein darf.**

Dies bedeutet wiederum, dass der Server kein statisches HTML liefern kann, da er bei jeder Lieferung einen neuen Nonce einfügen muss. In der Regel würde der Server eine Template-Engine verwenden, um den Nonce einzufügen.

Hier ist ein Snippet aus [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)-Code zur Demonstration:

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

Bei jeder Anfrage generiert der Server einen neuen Nonce und fügt ihn in das CSP und in die {{htmlelement("script")}}-Tags im zurückgegebenen Dokument ein. Beachten Sie, dass der Server:

- einen neuen Nonce für jede Anfrage generiert
- Nonces sowohl mit externen als auch mit Inline-Skripten verwenden kann
- denselben Nonce für alle `<script>`-Tags im Dokument verwendet

Es ist wichtig, dass der Server eine Art Template verwendet, um Nonces einzufügen, und sie nicht nur in alle `<script>`-Tags einfügt: Andernfalls könnte der Server versehentlich Nonces in durch einen Angreifer eingespeiste Skripte einfügen.

Beachten Sie, dass Nonces nur für Elemente verwendet werden können, die ein `nonce`-Attribut haben: das heißt, nur `<script>`- und `<style>`-Elemente.

#### Hashes

Fetch-Direktiven können auch einen Hash des Skripts verwenden, um seine Integrität zu gewährleisten. Der Server wird folgendermaßen vorgehen:

1. Berechnen eines Hashs der Skriptinhalte mithilfe einer {{Glossary("hash_function", "Hash-Funktion")}} (einer von SHA-256, SHA-384 oder SHA-512)
2. Erstellen einer {{Glossary("Base64", "Base64")}}-Kodierung des Ergebnisses
3. Hinzufügen eines Präfixes zur Identifizierung des verwendeten Hash-Algorithmus (einer von `sha256-`, `sha384-` oder `sha512-`).

Dann fügt er das Ergebnis der Direktive hinzu:

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

Wenn der Browser das Dokument empfängt, hasht er das Skript, vergleicht das Ergebnis mit dem Wert aus dem Header und lädt das Skript nur, wenn sie übereinstimmen.

Externe Skripte müssen ebenfalls das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut enthalten, damit diese Methode funktioniert.

Hier ist ein Snippet aus Express-Code zur Demonstration:

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
- Für das externe Skript "main.js" fügen wir auch das `integrity`-Attribut hinzu und geben ihm denselben Wert.
- Im Gegensatz zum Beispiel mit Nonces können sowohl das CSP als auch der Inhalt statisch sein, da die Hashes gleich bleiben. Dies macht hashbasierte Richtlinien besser geeignet für statische Seiten oder Websites, die auf clientseitiges Rendering setzen.

#### Richtlinien basierend auf Schemen

Fetch-Direktiven können ein Schema, wie `https:`, auflisten, um Ressourcen zu erlauben, die mit diesem Schema bereitgestellt werden. Dies ermöglicht es beispielsweise, eine Richtlinie festzulegen, die HTTPS für alle Ressourcenladevorgänge erfordert:

```http
Content-Security-Policy: default-src https:
```

#### Richtlinien basierend auf dem Standort

Fetch-Direktiven können die Ressourcenladen basierend darauf steuern, wo sich die Ressource befindet.

Das Schlüsselwort `'self'` erlaubt Ressourcen, die die gleiche Herkunft wie das Dokument selbst haben:

```http
Content-Security-Policy: img-src 'self'
```

Sie können auch einen oder mehrere Hostnamen angeben, möglicherweise einschließlich Platzhalter, und nur von diesen Hosts bereitgestellte Ressourcen werden erlaubt. Dies könnte beispielsweise verwendet werden, um Inhalte zuzulassen, die von einem vertrauenswürdigen CDN bereitgestellt werden.

```http
Content-Security-Policy: img-src *.example.org
```

Sie können mehrere Standorte angeben. Die folgende Direktive erlaubt nur Bilder, die die gleiche Herkunft wie das aktuelle Dokument haben oder von einer Subdomain von "example.org" oder von "example.com" geladen werden:

```http
Content-Security-Policy: img-src 'self' *.example.org  example.com
```

#### Inline-JavaScript

Wenn ein CSP entweder eine `default-src`- oder eine `script-src`-Direktive enthält, dann darf Inline-JavaScript nicht ausgeführt werden, es sei denn, es werden zusätzliche Maßnahmen getroffen, um es zu aktivieren. Dies schließt ein:

- JavaScript, das sich innerhalb eines `<script>`-Elements auf der Seite befindet:

  ```html
  <script>
    console.log("Hello from an inline script");
  </script>
  ```

- JavaScript in einem Inline-Ereignishandlerattribut:

  ```html
  <img src="x" onerror="console.log('Hello from an inline event handler')" />
  ```

- JavaScript in einer `javascript:`-URL:

  ```html
  <a href="javascript:console.log('Hello from a javascript: URL')"></a>
  ```

Das `unsafe-inline`-Schlüsselwort kann verwendet werden, um diese Einschränkung aufzuheben. Zum Beispiel verlangt die folgende Direktive, dass alle Ressourcen die gleiche Herkunft haben, erlaubt jedoch Inline-JavaScript:

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es einen Großteil des Zwecks einer CSP zunichtemacht. Inline-JavaScript ist einer der häufigsten XSS-Vektoren, und eines der grundlegendsten Ziele einer CSP ist es, dessen unkontrollierte Verwendung zu verhindern.

Inline-`<script>`-Elemente sind erlaubt, wenn sie durch ein Nonce oder einen Hash geschützt sind, wie oben beschrieben.

Wenn eine Direktive Nonce- oder Hash-Ausdrücke enthält, wird das Schlüsselwort `unsafe-inline` von Browsern ignoriert.

#### `eval()` und ähnliche APIs

Wie Inline-JavaScript wird auch die Ausführung von `eval()` und ähnlichen APIs nicht erlaubt, wenn ein CSP entweder eine `default-src`- oder eine `script-src`-Direktive enthält. Dies schließt unter anderem die folgenden APIs ein:

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

Das `unsafe-eval`-Schlüsselwort kann verwendet werden, um dieses Verhalten zu überschreiben, und ebenso wie `unsafe-inline`, und aus denselben Gründen: **Entwickler sollten `unsafe-eval` vermeiden**. Manchmal kann es schwierig sein, die Verwendung von `eval()` zu entfernen: In diesen Situationen kann die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) es sicherer machen, indem sichergestellt wird, dass die Eingabe einer definierten Richtlinie entspricht.

Im Gegensatz zu `unsafe-inline` funktioniert das `unsafe-eval`-Schlüsselwort weiterhin in einer Direktive, die Nonce- oder Hash-Ausdrücke enthält.

### Strenge CSP

Um das Laden von Skripten als Abschwächung gegen XSS zu steuern, ist es die empfohlene Vorgehensweise, [nonce-](#nonces) oder [hash-](#hashes) basierte Fetch-Direktiven zu verwenden. Dies wird als _strenge CSP_ bezeichnet. Diese Art von CSP hat zwei Hauptvorteile gegenüber einer standortbasierten CSP (normalerweise als _Whitelisting-CSP_ bezeichnet):

- Whitelisting-CSPs sind schwer richtig zu machen und oft führen Richtlinien unabsichtlich unsichere Domains auf die Whitelist auf, und bieten dadurch keinen effektiven Schutz gegen XSS (siehe [CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)).
- Whitelisting-CSPs können sehr groß und schwer zu pflegen sein, insbesondere wenn Skripte verwendet werden, die außerhalb Ihrer Kontrolle liegen. Laut [How I learned to stop worrying and love the Content Security Policy](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/) wird ein Entwickler allein zur Integration von Google Analytics gebeten, 187 Google-Domains auf die Whitelist zu setzen.

Eine nonce-basierte strenge CSP sieht so aus:

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

In diesem CSP:

- verwenden wir Nonces, um zu kontrollieren, welche JavaScript-Ressourcen geladen werden dürfen
- blockieren wir alle Objekteinbettungen
- blockieren wir alle Verwendungen des `<base>`-Elements zur Setzung eines Basis-URI.

Eine hash-basierte strenge CSP ist die gleiche, verwendet jedoch Hashes statt Nonces:

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

Nonce-basierte Direktiven sind einfacher zu pflegen, wenn Sie Antworten, einschließlich des Inhalts selbst, dynamisch generieren können. Andernfalls müssen Sie hash-basierte Direktiven verwenden. Das Problem mit hash-basierten Direktiven ist, dass Sie den Hash neu berechnen und erneut anwenden müssen, wenn Änderungen am Skriptinhalt vorgenommen werden.

#### Das `strict-dynamic`-Schlüsselwort

Wie oben dargestellt, ist die strenge CSP schwer umsetzbar, wenn Sie Skripte verwenden, die nicht unter Ihrer Kontrolle stehen. Wenn ein Drittanbieterskript zusätzliche Skripte lädt oder Inline-Skripte verwendet, schlägt dies fehl, da das Drittanbieterskript den Nonce oder Hash nicht weitergeben wird.

Das `strict-dynamic`-Schlüsselwort wird angeboten, um dieses Problem zu lösen. Es ist ein Schlüsselwort, das in eine Fetch-Direktive aufgenommen werden kann und hat den Effekt, dass, wenn ein Skript einen Nonce oder einen Hash hat, dieses Skript erlaubt wird, weitere Skripte zu laden, die selbst keinen Nonce oder Hash haben. Das heißt, das Vertrauen, das durch einen Nonce oder Hash in ein Skript gesetzt wird, wird an Skripte weitergegeben, die das ursprüngliche Skript lädt (und Skripte, die _sie_ laden, und so weiter).

Betrachten Sie beispielsweise ein Dokument wie dieses:

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

Das "main.js"-Skript wird geladen, da der Hash zur CSP passt. Aber der Versuch, "main2.js" zu laden, schlägt fehl.

Wenn wir `'strict-dynamic'` zur CSP hinzufügen, darf "main.js" "main2.js" laden:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  'strict-dynamic'
```

Das `'strict-dynamic'`-Schlüsselwort erleichtert die Erstellung und Pflege von Nonce- oder Hash-basierten CSPs, insbesondere wenn eine Website Drittanbieterskripte verwendet. Es macht jedoch Ihre CSP weniger sicher, da, wenn die Skripte, die Sie einfügen, `<script>`-Elemente basierend auf potenziellen XSS-Quellen erstellen, die CSP sie nicht schützt.

#### Refactoring von Inline-JavaScript und `eval()`

Wir haben oben gesehen, dass Inline-JavaScript standardmäßig in einer CSP nicht erlaubt ist. Mit Nonces oder Hashes kann ein Entwickler Inline-`<script>`-Tags verwenden, aber Sie müssen dennoch Code refaktorisieren, um andere nicht erlaubte Muster zu entfernen, einschließlich Inline-Ereignishandler, `javascript:`-URLs und die Verwendung von `eval()`. Zum Beispiel sollten Inline-Ereignishandler normalerweise durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ersetzt werden:

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

Die [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors)-Direktive kann verwendet werden, um zu kontrollieren, welche Dokumente, falls vorhanden, dieses Dokument in einem verschachtelten Browsing-Kontext wie einem {{htmlelement("iframe")}} einbetten dürfen. Dies ist ein effektiver Schutz gegen Clickjacking-Angriffe, da diese Angriffe davon abhängen, dass die Zielseite in einer vom Angreifer kontrollierten Seite eingebettet wird.

Die Syntax von `frame-ancestors` ist eine Teilmenge der Fetch-Direktivensyntax: Sie können den einzelnen Schlüsselwortwert `'none'` oder einen oder mehrere Quellen-Ausdrücke bereitstellen. Allerdings können Sie nur Schemata, Hostnamen oder das Schlüsselwort `'self'` als Quellen-Ausdrücke verwenden.

Wenn Sie nicht möchten, dass Ihre Seite eingebettet wird, sollten Sie `frame-ancestors` auf `'none'` setzen:

```http
Content-Security-Policy: frame-ancestors 'none'
```

Diese Direktive ist ein flexiblerer Ersatz für den {{httpheader("X-Frame-Options")}}-Header.

## Aufwertung unsicherer Anfragen

Webentwickler werden dringend empfohlen, alle ihre Inhalte über HTTPS bereitzustellen. Beim Upgrade einer Site auf HTTPS wird manchmal das Hauptdokument über HTTPS bereitgestellt, während die Ressourcen weiterhin über HTTP bereitgestellt werden, z.B. durch Verwendung von Markup wie diesem:

```html
<script src="http://example.org/my-cat.js"></script>
```

Dies wird als _gemischter Inhalt_ bezeichnet, und die Präsenz unsicherer Ressourcen schwächt den durch HTTPS gebotenen Schutz erheblich. Nach dem [gemischten Inhaltsalgorithmus](/de/docs/Web/Security/Mixed_content), den Browser implementieren, wenn ein Dokument über HTTPS bereitgestellt wird, werden unsichere Ressourcen in "aufrüstbare Inhalte" und "blockierbare Inhalte" kategorisiert. Aufrüstbare Inhalte werden auf HTTPS aufgewertet, und blockierbare Inhalte werden blockiert, wodurch die Seite möglicherweise beschädigt wird.

Die ultimative Lösung für gemischte Inhalte besteht darin, dass Entwickler alle Ressourcen über HTTPS laden. Selbst wenn eine Site tatsächlich in der Lage ist, alle Inhalte über HTTPS bereitzustellen, kann es jedoch äußerst schwierig (oder sogar effektiv unmöglich, insbesondere bei archivierten Inhalten) sein, alle URLs der Ressourcenladevorgänge einer Site umzuschreiben.

Die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests)-Direktive wurde entwickelt, um dieses Problem zu lösen. Diese Direktive hat keinen Wert: Um sie zu setzen, geben Sie einfach den Direktivennamen an:

```http
Content-Security-Policy: upgrade-insecure-requests
```

Wenn diese Direktive auf einem Dokument gesetzt ist, wird der Browser automatisch HTTP-URLs in den folgenden Fällen auf HTTPS aufwerten:

- Anfragen, Ressourcen zu laden (wie Bilder, Skripte oder Schriftarten)
- Navigationsanfragen (wie Linkziele), die die gleiche Herkunft wie das Dokument haben
- Navigationsanfragen in verschachtelten Browsing-Kontexten wie iframes
- Formularübermittlungen

Navigationsanfragen auf oberster Ebene, deren Ziel eine andere Herkunft ist, werden jedoch nicht aufgewertet.

Angenommen, das Dokument unter `https://example.org` wird mit einem CSP, das die `upgrade-insecure-requests`-Direktive enthält, bereitgestellt, und das Dokument enthält Markup wie dieses:

```html
<script src="http://example.org/my-cat.js"></script>
<script src="http://not-example.org/another-cat.js"></script>
```

Der Browser wird beide Anfragen automatisch auf HTTPS aufwerten.

Angenommen, das Dokument enthält auch Folgendes:

```html
<a href="http://example.org/more-cats">See some more cats!</a>
<a href="http://not-example.org/even-more-cats">More cats, on another site!</a>
```

Der Browser wird den ersten Link auf HTTPS aufwerten, nicht jedoch den zweiten, da er zu einer anderen Herkunft navigiert.

Diese Direktive ist kein Ersatz für den {{httpheader("Strict-Transport-Security")}}-Header (auch bekannt als HSTS), da sie externe Links zu einer Site nicht aufwertet. Sites sollten diese Direktive und den `Strict-Transport-Security`-Header einbeziehen.

## Testen Ihrer Richtlinie

Um die Bereitstellung zu erleichtern, kann CSP im Nur-Berichtsmodus bereitgestellt werden. Die Richtlinie wird nicht durchgesetzt, aber alle Verstöße werden an den in der Richtlinie angegebenen Berichts-Endpunkt gesendet. Außerdem kann ein Nur-Berichts-Header verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich bereitzustellen.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header verwenden, um Ihre Richtlinie anzugeben, wie folgt:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header als auch ein {{HTTPHeader("Content-Security-Policy")}}-Header in derselben Antwort vorhanden sind, werden beide Richtlinien beachtet. Die in den `Content-Security-Policy`-Headern angegebene Richtlinie wird durchgesetzt, während die `Content-Security-Policy-Report-Only`-Richtlinie Berichte generiert, aber nicht durchgesetzt wird.

Beachten Sie, dass im Gegensatz zu einer normalen Inhalts-Sicherheitsrichtlinie eine Nur-Berichts-Richtlinie nicht in einem `<meta>`-Element geliefert werden kann.

### Verletzungsberichterstattung

Die empfohlene Methode zur Meldung von CSP-Verletzungen besteht darin, die [Reporting-API](/de/docs/Web/API/Reporting_API) zu verwenden, Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} zu deklarieren und einen von ihnen als CSP-Berichts-Ziel mit der {{CSP("report-to")}}-Direktive im `Content-Security-Policy`-Header anzugeben.

> [!WARNING]
> Sie können auch die {{CSP("report-uri")}}-Direktive von CSP verwenden, um eine Ziel-URL für CSP-Verletzungsberichte anzugeben. Dies sendet ein leicht anderes JSON-Berichtsformat über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`. Dieser Ansatz wird als veraltet angesehen, aber Sie sollten beide deklarieren, bis {{CSP("report-to")}} von allen Browsern unterstützt wird. Weitere Informationen zu diesem Ansatz finden Sie im {{CSP("report-uri")}}-Thema.

Ein Server kann Clients darüber informieren, wohin Berichte gesendet werden sollen, indem er den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header verwendet. Dieser Header definiert eine oder mehrere Endpunkt-URLs als kommaseparierte Liste. Zum Beispiel, um einen Berichts-Endpunkt namens `csp-endpoint` zu definieren, der Berichte unter `https://example.com/csp-reports` akzeptiert, könnte der Antwort-Header des Servers so aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die verschiedene Arten von Berichten bearbeiten, würden Sie sie wie folgt angeben:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Sie können dann die {{CSP("report-to")}}-Direktive des `Content-Security-Policy`-Headers verwenden, um anzugeben, dass ein bestimmter definierter Endpunkt für Berichte verwendet werden soll. Zum Beispiel, um CSP-Verletzungsberichte an `https://example.com/csp-reports` für die `default-src` zu senden, könnten Sie Antwort-Header senden, die wie folgt aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn eine CSP-Verletzung auftritt, sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt über eine HTTP-`POST`-Operation, mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`. Der Bericht ist eine serialisierte Form des [`Report`](/de/docs/Web/API/Report)-Objekts, das eine `type`-Eigenschaft mit einem Wert von `"csp-violation"` und einen `body`, der die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist, enthält.

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

Sie müssen einen Server einrichten, um Berichte im gegebenen JSON-Format und Inhaltstyp zu empfangen. Der Server, der diese Anfragen verarbeitet, kann die eingehenden Berichte dann auf eine Weise speichern oder verarbeiten, die Ihren Anforderungen am besten entspricht.

## Weitere Informationen

- [CSP-Fehler und Warnungen](/de/docs/Web/HTTP/Guides/CSP/Errors)
- [Cross-Site Scripting mit einer strengen Content-Security-Policy abschwächen](https://web.dev/articles/strict-csp) auf web.dev (2024)
- [Content Security Policy: Ein erfolgreicher Kompromiss zwischen Härtung und Abschwächung](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- [Content Security Policy Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) auf owasp.org
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
