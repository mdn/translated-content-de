---
title: Content Security Policy (CSP)
slug: Web/HTTP/CSP
l10n:
  sourceCommit: 9c09d1ce824bd5e6ef879094428879c476ccbace
---

{{HTTPSidebar}}

Die **Content Security Policy** (CSP) ist eine Funktion, die hilft, das Risiko bestimmter Arten von Sicherheitsbedrohungen zu verhindern oder zu minimieren. Sie besteht aus einer Reihe von Anweisungen einer Website an einen Browser, die dem Browser auftragen, Einschränkungen für die Dinge zu setzen, die der Code der Seite tun darf.

Der Hauptanwendungsfall für CSP besteht darin, zu kontrollieren, welche Ressourcen, insbesondere JavaScript-Ressourcen, ein Dokument laden darf. Dies wird hauptsächlich als Schutz gegen {{Glossary("cross-site_scripting", "Cross-Site-Scripting")}} (XSS) Angriffe verwendet, bei denen ein Angreifer in der Lage ist, böswilligen Code in die Seite des Opfers einzuschleusen.

Eine CSP kann auch andere Zwecke erfüllen, einschließlich des Schutzes gegen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und der Sicherstellung, dass die Seiten einer Website über HTTPS geladen werden.

In diesem Leitfaden beginnen wir damit zu beschreiben, wie eine CSP an einen Browser geliefert wird und wie sie auf hoher Ebene aussieht.

Anschließend beschreiben wir, wie sie verwendet werden kann, um [zu kontrollieren, welche Ressourcen geladen werden](#kontrolle_der_ressourcenladung), um sich gegen XSS zu schützen, und dann andere Anwendungsfälle wie [Schutz gegen Clickjacking](#clickjacking-schutz) und [Upgrade unsicherer Anfragen](#upgrade_unsicherer_anfragen). Beachten Sie, dass es keine Abhängigkeit zwischen den verschiedenen Anwendungsfällen gibt: Wenn Sie Clickjacking-Schutz hinzufügen möchten, aber nicht die XSS-Milderung, können Sie einfach die Richtlinien für diesen Anwendungsfall hinzufügen.

Abschließend beschreiben wir [Strategien für die Bereitstellung einer CSP](#testen_ihrer_richtlinie) und Tools, die diesen Prozess vereinfachen können.

## CSP-Übersicht

Eine CSP sollte dem Browser im {{httpheader("Content-Security-Policy")}} Antwort-Header bereitgestellt werden. Sie sollte bei allen Antworten auf alle Anfragen gesetzt werden, nicht nur im Hauptdokument.

Sie können es auch mit dem [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv) Attribut Ihres Dokuments {{htmlelement("meta")}} Elements angeben, und dies ist eine nützliche Option für einige Anwendungsfälle, wie eine clientseitig gerenderte {{Glossary("SPA", "Single Page App")}}, die nur statische Ressourcen hat, da Sie dann nicht auf eine Serverinfrastruktur angewiesen sind. Diese Option unterstützt jedoch nicht alle CSP-Funktionen.

Die Richtlinie wird als eine Reihe von _Direktiven_ angegeben, die durch Semikolons getrennt sind. Jede Direktive steuert einen anderen Aspekt der Sicherheitsrichtlinie. Jede Direktive hat einen Namen, gefolgt von einem Leerzeichen, gefolgt von einem Wert. Unterschiedliche Direktiven können unterschiedliche Syntaxen haben.

Betrachten Sie zum Beispiel die folgende CSP:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

Sie setzt zwei Direktiven:

- die `default-src` Direktive ist auf `'self'` gesetzt
- die `img-src` Direktive ist auf `'self' example.com` gesetzt.

![Eine CSP, aufgeteilt in ihre Direktiven.](csp-overview.svg)

Die erste Direktive, `default-src`, weist den Browser an, nur Ressourcen zu laden, die mit dem Dokument gleichgeordnet sind, es sei denn, andere spezifischere Direktiven setzen eine andere Richtlinie für andere Ressourcentypen. Die zweite, `img-src`, weist den Browser an, Bilder zu laden, die entweder gleichgeordnet oder von `example.com` bereitgestellt werden.

Im nächsten Abschnitt betrachten wir die verfügbaren Tools zur Kontrolle der Ressourcenladungen, was die Hauptfunktion einer CSP ist.

## Kontrolle der Ressourcenladung

Eine CSP kann verwendet werden, um die Ressourcen zu kontrollieren, die ein Dokument laden darf. Dies wird hauptsächlich zum Schutz gegen Cross-Site-Scripting (XSS) Angriffe verwendet.

In diesem Abschnitt werden wir zuerst sehen, wie die Kontrolle der Ressourcenladungen dazu beitragen kann, sich vor XSS zu schützen, dann die von CSP bereitgestellten Tools, um zu kontrollieren, welche Ressourcen geladen werden. Schließlich beschreiben wir eine bestimmte empfohlene Strategie, die als "Strict CSP" bekannt ist.

### XSS und Ressourcenladung

Ein Cross-Site-Scripting (XSS) Angriff ist einer, bei dem ein Angreifer seinen Code im Kontext der Zielwebsite ausführen kann. Dieser Code kann dann alles tun, was der eigene Code der Website könnte, einschließlich zum Beispiel:

- Zugriff auf oder Modifikation des Inhalts der geladenen Seiten der Website
- Zugriff auf oder Modifikation von Inhalten im lokalen Speicher
- Ausführung von HTTP-Anfragen mit den Anmeldeinformationen des Benutzers, was es ihm ermöglicht, den Benutzer zu imitieren oder auf sensible Daten zuzugreifen

Ein XSS-Angriff ist möglich, wenn eine Website eine Eingabe akzeptiert, die von einem Angreifer erstellt worden sein könnte (zum Beispiel URL-Parameter oder ein Kommentar zu einem Blog-Beitrag) und diese dann in die Seite einfügt, ohne sie zu _säubern_: Das bedeutet, ohne sicherzustellen, dass sie nicht als JavaScript ausgeführt werden kann.

Websites sollten sich gegen XSS schützen, indem sie diese Eingaben säubern, bevor sie in die Seite eingefügt werden. Eine CSP bietet einen ergänzenden Schutz, der die Website schützen kann, selbst wenn die Säuberung fehlschlägt.

Wenn die Säuberung fehlschlägt, können verschiedene Formen bösartiger, eingeschleuster Code im Dokument angenommen werden, darunter:

- Ein {{htmlelement("script")}} Tag, das auf eine bösartige Quelle verweist:

  ```html
  <script src="https://evil.example.com/hacker.js"></script>
  ```

- Ein `<script>` Tag, das inline JavaScript enthält:

  ```html
  <script>
    console.log("You've been hacked!");
  </script>
  ```

- Ein inline Event-Handler:

  ```html
  <img onmouseover="console.log(`You've been hacked!`)" />
  ```

- Eine `javascript:` URL:

  ```html
  <iframe src="javascript:console.log(`You've been hacked!`)"></iframe>
  ```

- Ein Zeichenfolgen-Argument für eine unsichere API wie [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval):

  ```js
  eval("console.log(`You've been hacked!`)");
  ```

Eine CSP kann Schutz gegen all diese bieten. Mit einer CSP können Sie:

- die erlaubten Quellen für JavaScript-Dateien und andere Ressourcen definieren, wodurch effektiv das Laden aus `https://evil.example.com` blockiert wird
- Inline-Skript-Tags deaktivieren
- nur Skript-Tags zulassen, die das korrekte Nonce oder den Hash gesetzt haben
- Inline-Event-Handler deaktivieren
- `javascript:` URLs deaktivieren
- gefährliche APIs wie `eval()` deaktivieren

Im nächsten Abschnitt gehen wir auf die Tools ein, die CSP bereitstellt, um diese Dinge zu tun.

> [!NOTE]
> Das Setzen einer CSP ist keine Alternative zur Eingabereinigung. Websites sollten Eingaben reinigen _und_ eine CSP setzen, um einen umfassenden Schutz gegen XSS zu bieten.

### Fetch-Direktiven

Fetch-Direktiven werden verwendet, um eine bestimmte Kategorie von Ressourcen anzugeben, die ein Dokument laden darf – wie JavaScript, CSS-Stylesheets, Bilder, Schriftarten und so weiter.

Es gibt unterschiedliche Fetch-Direktiven für verschiedene Arten von Ressourcen. Zum Beispiel:

- [`script-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) legt die erlaubten Quellen für JavaScript fest.
- [`style-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) legt die erlaubten Quellen für CSS-Stylesheets fest.
- [`img-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) legt die erlaubten Quellen für Bilder fest.

Eine besondere Fetch-Direktive ist `default-src`, die eine Fallback-Richtlinie für alle Ressourcen setzt, deren Direktiven nicht explizit aufgeführt sind.

Für die vollständige Liste der Fetch-Direktiven siehe die [Referenzdokumentation](/de/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directives).

Jede Fetch-Direktive wird entweder als einzelnes Schlüsselwort `'none'` oder durch eine oder mehrere _Quellausdrücke_, getrennt durch Leerzeichen, angegeben. Wenn mehr als ein Quellausdruck aufgeführt ist: Wenn eine der Methoden die Ressource erlaubt, wird die Ressource erlaubt.

Zum Beispiel setzt die untenstehende CSP zwei Fetch-Direktiven:

- `default-src` wird der einzelne Quellausdruck `'self'` gegeben
- `img-src` wird zwei Quellausdrücke gegeben: `'self'` und `example.com`

![CSP-Diagramm mit Quellausdrücken](csp-source-expressions.svg)

Die Wirkung davon ist, dass:

- Bilder entweder gleichgeordnet mit dem Dokument sein müssen oder von `example.com` geladen werden
- alle anderen Ressourcen gleichgeordnet mit dem Dokument sein müssen.

In den nächsten Abschnitten beschreiben wir einige der Möglichkeiten, wie Sie Quellausdrücke verwenden können, um Ressourcenladen zu kontrollieren. Beachten Sie, dass, obwohl wir sie getrennt beschreiben, diese Ausdrücke im Allgemeinen kombiniert werden können: zum Beispiel kann eine einzelne Fetch-Direktive sowohl Nonces als auch Hostnames einschließen.

#### Blockieren von Ressourcen

Um einen Ressourcentyp vollständig zu blockieren, verwenden Sie das Schlüsselwort `'none'`. Zum Beispiel blockiert die folgende Direktive alle {{htmlelement("object")}} und {{htmlelement("embed")}} Ressourcen:

```http
Content-Security-Policy: object-src 'none'
```

Beachten Sie, dass `'none'` nicht mit einer anderen Methode in einer bestimmten Direktive kombiniert werden kann: In der Praxis, wenn neben `'none'` andere Quellausdrücke angegeben sind, werden diese ignoriert.

#### Nonces

Ein `nonce` ist der empfohlene Ansatz, um das Laden von {{htmlelement("script")}} und {{htmlelement("style")}} Ressourcen zu beschränken.

Mit einem Nonce generiert der Server einen zufälligen Wert für jede HTTP-Antwort und fügt ihn in eine `script-src` und/oder eine `style-src` Direktive ein:

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server fügt diesen Wert dann als Wert des `nonce` Attributs in alle `<script>` und/oder `<style>` Tags ein, die er in das Dokument aufnehmen möchte.

Der Browser vergleicht die beiden Werte und lädt die Ressource nur, wenn sie übereinstimmen. Die Idee ist, dass selbst wenn ein Angreifer JavaScript in die Seite einfügen kann, er nicht weiß, welches Nonce der Server verwenden wird, sodass der Browser das Skript nicht ausführen wird.

Damit dieser Ansatz funktioniert, darf es einem Angreifer nicht möglich sein, das Nonce vorherzusagen.

**In der Praxis bedeutet dies, dass das Nonce für jede HTTP-Antwort unterschiedlich sein muss und nicht vorhersehbar sein darf.**

Dies bedeutet wiederum, dass der Server kein statisches HTML bereitstellen kann, da er jedes Mal ein neues Nonce einfügen muss. Typischerweise würde der Server eine Template-Engine verwenden, um das Nonce einzufügen.

Hier ist ein Snippet von [Express](/de/docs/Learn/Server-side/Express_Nodejs) Code zur Demonstration:

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

Bei jeder Anforderung generiert der Server ein neues Nonce, fügt es in die CSP und in die {{htmlelement("script")}} Tags im zurückgegebenen Dokument ein. Beachten Sie, dass der Server:

- für jede Anfrage ein neues Nonce erzeugt
- Nonces sowohl mit externen als auch Inline-Skripts verwenden kann
- das gleiche Nonce für alle `<script>` Tags im Dokument verwendet

Es ist wichtig, dass der Server eine Art Templating verwendet, um Nonces einzufügen, und nicht einfach alle `<script>` Tags zu versehen: Ansonsten könnte der Server versehentlich Nonces in Skripts einfügen, die von einem Angreifer eingeschleust wurden.

Beachten Sie, dass Nonces nur für Elemente verwendet werden können, die ein `nonce` Attribut haben: das heißt, nur `<script>` und `<style>` Elemente.

#### Hashes

Fetch-Direktiven können auch einen Hash des Skripts verwenden, um dessen Integrität zu garantieren. Bei diesem Verfahren:

1. berechnet der Server einen Hash der Skriptinhalte mit einer {{Glossary("cryptographic_hash_function", "kryptografischen Hash-Funktion")}} (eine von SHA-256, SHA-384, oder SHA-512)
2. erstellt eine {{Glossary("Base64", "Base64")}} Codierung des Ergebnisses
3. fügt als Präfix den Hash-Algorithmus hinzu, der verwendet wurde (einer von `sha256-`, `sha384-`, oder `sha512-`).

Dann fügt er das Ergebnis der Direktive hinzu:

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

Wenn der Browser das Dokument erhält, hasht er das Skript, vergleicht das Ergebnis mit dem Wert im Header und lädt das Skript nur, wenn diese übereinstimmen.

Externe Skripts müssen auch das [`integrity`](/de/docs/Web/HTML/Element/script#integrity) Attribut enthalten, damit diese Methode funktioniert.

Hier ist ein Snippet von Express-Code zur Demonstration:

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
- Im Gegensatz zum Beispiel mit Nonces können sowohl die CSP als auch der Inhalt statisch sein, da die Hashes gleich bleiben. Dies macht hash-basierte Richtlinien besser geeignet für statische Seiten oder Websites, die auf clientseitiges Rendering angewiesen sind.

#### Schema-basierte Richtlinien

Fetch-Direktiven können ein Schema, wie `https:`, auflisten, um Ressourcen zu erlauben, die mit diesem Schema bereitgestellt werden. Dies ermöglicht es beispielsweise, eine Richtlinie zu erfordern, dass alle Ressourcen über HTTPS geladen werden:

```http
Content-Security-Policy: default-src https:
```

#### Standortbasierte Richtlinien

Fetch-Direktiven können das Laden von Ressourcen basierend darauf steuern, wo sich die Ressource befindet.

Das Schlüsselwort `'self'` erlaubt Ressourcen, die gleichgeordnet mit dem Dokument selbst sind:

```http
Content-Security-Policy: img-src 'self'
```

Sie können auch einen oder mehrere Hostnamen angeben, möglicherweise einschließlich Platzhaltern, und nur Ressourcen, die von diesen Hosts bereitgestellt werden, sind erlaubt. Dies könnte verwendet werden, um Inhalte von einem vertrauenswürdigen CDN zuzulassen.

```http
Content-Security-Policy: img-src *.example.org
```

Sie können mehrere Standorte angeben. Die folgende Direktive erlaubt nur Bilder, die gleichgeordnet mit dem aktuellen Dokument sind oder von einer Subdomain von "example.org" oder von "example.com" bereitgestellt werden:

```http
Content-Security-Policy: img-src 'self' *.example.org  example.com
```

#### Inline-JavaScript

Wenn eine CSP entweder eine `default-src` oder eine `script-src` Direktive enthält, wird das Ausführen von inline JavaScript nicht erlaubt sein, es sei denn, es werden zusätzliche Maßnahmen ergriffen, um es zu ermöglichen. Dies schließt ein:

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
  <a href="javascript:console.log('Hello from a javascript: URL')"></a>
  ```

Das Schlüsselwort `unsafe-inline` kann verwendet werden, um diese Einschränkung aufzuheben. Zum Beispiel erlaubt die folgende Direktive, dass alle Ressourcen gleichgeordnet sein müssen, erlaubt jedoch inline JavaScript:

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es den Zweck einer CSP weitgehend zunichte macht. Inline-JavaScript ist eines der häufigsten XSS-Vektoren, und eines der grundlegendsten Ziele einer CSP ist es, dessen unkontrollierte Verwendung zu verhindern.

Inline-`<script>` Elemente sind erlaubt, wenn sie durch ein Nonce oder einen Hash geschützt sind, wie oben beschrieben.

Wenn eine Direktive Nonce- oder Hash-Ausdrücke enthält, wird das `unsafe-inline` Schlüsselwort von Browsern ignoriert.

#### `eval()` und ähnliche APIs

Wie inline JavaScript wird, wenn eine CSP entweder eine `default-src` oder eine `script-src` Direktive enthält, `eval()` und ähnliche APIs nicht erlaubt sein, auszuführen. Dies umfasst neben anderen APIs:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) selbst:

  ```js
  eval('console.log("hello from eval()")');
  ```

- Den {{jsxref("Function/Function()", "Funktion()")}}-Konstruktor:

  ```js
  const sum = new Function("a", "b", "return a + b");
  ```

- Das Zeichenfolgen-Argument für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval):

  ```js
  setTimeout("console.log('hello from setTimeout')", 1);
  ```

Das Schlüsselwort `unsafe-eval` kann verwendet werden, um dieses Verhalten zu überschreiben, und wie bei `unsafe-inline` und aus den gleichen Gründen: **Entwickler sollten `unsafe-eval` vermeiden**. Manchmal kann es schwierig sein, die Verwendung von `eval()` zu entfernen: In diesen Situationen kann die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) es sicherer machen, indem sichergestellt wird, dass die Eingabe einer definierten Richtlinie entspricht.

Im Gegensatz zu `unsafe-inline` funktioniert das Schlüsselwort `unsafe-eval` dennoch in einer Direktive, die Nonce- oder Hash-Ausdrücke enthält.

### Strikte CSP

Um das Laden von Skripten als Schutzmaßnahme gegen XSS zu kontrollieren, wird die Verwendung von Nonce- oder Hash-basierten Fetch-Direktiven empfohlen. Dies wird als _strikte CSP_ bezeichnet. Diese Art von CSP hat zwei Hauptvorteile gegenüber einer standortbasierten CSP (normalerweise als _Whitelisting-CSP_ bezeichnet):

- Whitelisting-CSPs sind schwer richtig zu implementieren und oft schließt die Richtlinie versehentlich unsichere Domains ein und bietet daher keinen effektiven Schutz gegen XSS (siehe [CSP ist tot, lang lebe CSP! Über die Unsicherheit von Whitelists und die Zukunft der Content Security Policy](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)).
- Whitelisting-CSPs können sehr groß und schwer zu pflegen sein, insbesondere wenn Skripte verwendet werden, die nicht unter Ihrer Kontrolle stehen. Laut [How I learned to stop worrying and love the Content Security Policy](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/) wird ein Entwickler nur zur Integration von Google Analytics aufgefordert, 187 Google-Domains auf die Whitelist zu setzen.

Eine nonce-basierte strikte CSP sieht so aus:

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

In dieser CSP:

- verwenden wir Nonces, um zu kontrollieren, welche JavaScript-Ressourcen geladen werden dürfen
- blockieren wir alle Objekteinbettungen
- blockieren wir alle Verwendungen des `<base>` Elements, um eine Basis-URI festzulegen.

Eine Hash-basierte strikte CSP ist die gleiche, außer dass sie Hashes anstelle von Nonces verwendet:

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

Nonce-basierte Direktiven sind einfacher zu pflegen, wenn Sie Antworten dynamisch generieren können, einschließlich des Inhalts selbst. Andernfalls müssen Sie hash-basierte Direktiven verwenden. Das Problem mit hash-basierten Direktiven ist, dass Sie den Hash neu berechnen und erneut anwenden müssen, wenn eine Änderung an den Skriptinhalten vorgenommen wird.

#### Das `strict-dynamic` Schlüsselwort

Wie oben gezeigt, ist es schwierig, die strikte CSP zu implementieren, wenn Sie Skripte verwenden, die nicht unter Ihrer Kontrolle stehen. Wenn ein Drittanbieter-Skript zusätzliche Skripte lädt oder Inline-Skripte verwendet, schlägt dies fehl, da das Drittanbieter-Skript das Nonce oder den Hash nicht durchgibt.

Das `strict-dynamic` Schlüsselwort wird bereitgestellt, um bei diesem Problem zu helfen. Es ist ein Schlüsselwort, das in eine Fetch-Direktive aufgenommen werden kann, und es hat die Wirkung, dass, wenn ein Skript ein Nonce oder einen Hash enthält, dann dieses Skript weitere Skripte laden darf, die selbst keine Nonces oder Hashes haben. Das heißt, das Vertrauen in ein Skript durch ein Nonce oder einen Hash wird an die von dem ursprünglichen Skript geladenen Skripte weitergegeben (und an die, die _sie_ laden, und so weiter).

Zum Beispiel betrachten Sie ein Dokument wie dieses:

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

Wir liefern unser Dokument mit einer CSP wie dieser:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
```

Das "main.js" Skript wird geladen, da sein Hash mit dem Wert in der CSP übereinstimmt. Aber der Versuch, "main2.js" zu laden, schlägt fehl.

Wenn wir `'strict-dynamic'` zur CSP hinzufügen, darf "main.js" "main2.js" laden:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  strict-dynamic
```

Das `'strict-dynamic'` Schlüsselwort macht es viel einfacher, Nonce- oder Hash-basierte CSPs zu erstellen und zu pflegen, insbesondere wenn eine Website Drittanbieter-Skripte verwendet. Es macht Ihre CSP jedoch weniger sicher, da die CSP sie nicht schützen wird, wenn die Skripte, die Sie einfügen, `<script>` Elemente basierend auf potenziellen XSS-Quellen erstellen.

#### Refactoring von Inline-JavaScript und `eval()`

Wie wir oben gesehen haben, ist Inline-JavaScript standardmäßig in einer CSP nicht erlaubt. Mit Nonces oder Hashes kann ein Entwickler Inline-`<script>` Tags verwenden, aber Sie müssen den Code dennoch refaktorisieren, um andere nicht erlaubte Muster zu entfernen, einschließlich Inline-Event-Handler, `javascript:` URLs und Verwendungen von `eval()`. Zum Beispiel sollten Inline-Event-Handler normalerweise durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ersetzt werden:

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

Die [`frame-ancestors`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) Direktive kann verwendet werden, um zu kontrollieren, welche Dokumente, wenn überhaupt, dieses Dokument in einem eingebetteten Browsing-Kontext wie einem {{htmlelement("iframe")}} einbetten dürfen. Dies ist ein effektiver Schutz gegen Clickjacking-Angriffe, da diese Angriffe darauf angewiesen sind, das Ziel in einer vom Angreifer kontrollierten Seite einzubetten.

Die Syntax von `frame-ancestors` ist ein Subset der Fetch-Direktiven-Syntax: Sie können entweder das einzelne Schlüsselwort `'none'` oder einen oder mehrere Quellausdrücke angeben. Die einzigen Quellausdrücke, die Sie verwenden können, sind jedoch Schemas, Hostnamen oder das `'self'` Schlüsselwort.

Es sei denn, Sie benötigen Ihre Website, um eingebettet zu werden, sollten Sie `frame-ancestors` auf `'none'` setzen:

```http
Content-Security-Policy: frame-ancestors 'none'
```

Diese Direktive ist ein flexiblerer Ersatz für den {{httpheader("X-Frame-Options")}} Header.

## Upgrade unsicherer Anfragen

Webentwickler werden dringend ermutigt, allen Inhalt über HTTPS zu bedienen. Im Prozess der Umstellung einer Website auf HTTPS kommt es manchmal vor, dass die Hauptdokumente über HTTPS bedient werden, aber ihre Ressourcen über HTTP, indem zum Beispiel Markup wie dieses verwendet wird:

```html
<script src="http://example.org/my-cat.js"></script>
```

Das wird als _gemischter Inhalt_ bezeichnet, und das Vorhandensein unsicherer Ressourcen schwächt den Schutz, den HTTPS bietet, erheblich. Unter dem [Algorithmus für gemischten Inhalt](/de/docs/Web/Security/Mixed_content), den Browser implementieren, werden gewährleistet, dass unsichere Ressourcen auf "upgradable content" und "blockable content" aufgeteilt werden. Upgradable Content wird zu HTTPS hochgestuft, während blockbarer Content blockiert wird, was die Seite möglicherweise zerstört.

Die ultimative Lösung für gemischte Inhalte besteht darin, dass Entwickler alle Ressourcen über HTTPS laden. Selbst wenn eine Site tatsächlich in der Lage ist, allen Content über HTTPS zu bedienen, kann es jedoch sehr schwierig (oder sogar praktisch unmöglich) sein, wo archivierter Content betroffen ist, dass ein Entwickler alle URLs der Site umschreibt, die Ressourcen laden.

Die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests) Direktive soll dieses Problem lösen. Diese Direktive hat keinen Wert: Um sie einzustellen, fügen Sie einfach den Direktivnamen hinzu:

```http
Content-Security-Policy: upgrade-insecure-requests
```

Wenn diese Direktive in einem Dokument gesetzt ist, wird der Browser automatisch alle HTTP-URLs in den folgenden Fällen zu HTTPS upgraden:

- Anfragen, um Ressourcen zu laden (z.B. Bilder, Skripte oder Schriftarten)
- Navigationsanfragen (wie Link-Ziele), die gleichgeordnet mit dem Dokument sind
- Navigationsanfragen in eingebetteten Browsing-Kontexten, wie Iframes
- Formularübertragungen

Navigationsanfragen auf Top-Ebene, deren Ziel ein anderer Ursprung ist, werden jedoch nicht hochgestuft.

Angenommen, das Dokument unter `https://example.org` wird mit einer CSP serviert, die die `upgrade-insecure-requests` Direktive enthält, und das Dokument enthält Markup wie dieses:

```html
<script src="http://example.org/my-cat.js"></script>
<script src="http://not-example.org/another-cat.js"></script>
```

Der Browser wird beide Anforderungen automatisch zu HTTPS hochstufen.

Angenommen, das Dokument enthält auch dies:

```html
<a href="http://example.org/more-cats">See some more cats!</a>
<a href="http://not-example.org/even-more-cats">More cats, on another site!</a>
```

Der Browser wird den ersten Link zu HTTPS upgraden, aber nicht den zweiten, da er zu einem anderen Ursprung navigiert.

Diese Direktive ist kein Ersatz für den {{httpheader("Strict-Transport-Security")}} Header (auch bekannt als HSTS), weil sie keine externen Links zu einer Site hochstufen wird. Sites sollten diese Direktive und den `Strict-Transport-Security` Header einfügen.

## Testen Ihrer Richtlinie

Um die Bereitstellung zu erleichtern, kann CSP im Bericht-Only-Modus bereitgestellt werden.
Die Richtlinie wird nicht erzwungen, aber alle Verstöße werden an den in der Richtlinie angegebenen Berichts-Endpunkt gesendet. Zusätzlich kann ein Bericht-Only-Header verwendet werden, um eine zukünftige Revision einer Richtlinie zu testen, ohne sie tatsächlich auszuliefern.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header verwenden, um Ihre Richtlinie anzugeben, wie folgt:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header als auch ein {{HTTPHeader("Content-Security-Policy")}} Header in derselben Antwort vorhanden sind, werden beide Richtlinien berücksichtigt.
Die in den `Content-Security-Policy` Headern angegebene Richtlinie wird durchgesetzt, während die `Content-Security-Policy-Report-Only` Richtlinie Berichte generiert, aber nicht durchgesetzt wird.

Beachten Sie, dass im Gegensatz zu einer normalen Content-Security-Policy eine Report-Only-Richtlinie nicht in einem `<meta>` Element bereitgestellt werden kann.

### Fehlerberichterstattung

Die empfohlene Methode, um CSP-Verstöße zu berichten, besteht darin, die [Berichts-API](/de/docs/Web/API/Reporting_API) zu verwenden, indem Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} angegeben werden und einer davon als CSP-Berichts-Ziel mit der `Content-Security-Policy` Kopfzeile {{CSP("report-to")}} Direktive spezifiziert wird.

> [!WARNING]
> Sie können auch die CSP {{CSP("report-uri")}} Direktive verwenden, um eine Ziel-URL für CSP-Verletzungsberichte anzugeben.
> Dies sendet ein etwas anderes JSON-Berichtsformat über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`.
> Dieser Ansatz ist veraltet, aber Sie sollten beide deklarieren, bis {{CSP("report-to")}} in allen Browsern unterstützt wird.
> Weitere Informationen zu diesem Ansatz finden Sie im {{CSP("report-uri")}} Thema.

Ein Server kann Clients informieren, wohin Berichte gesendet werden sollen, indem er den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwortheader verwendet.
Dieser Header definiert eine oder mehrere Endpunkt-URLs als Komma-separierte Liste.
Zum Beispiel, um einen Berichts-Endpunkt namens `csp-endpoint` zu definieren, der Berichte unter `https://example.com/csp-reports` akzeptiert, könnte der Antwortheader des Servers folgendermaßen aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die unterschiedliche Arten von Berichten verarbeiten, würden Sie sie wie folgt spezifizieren:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Sie können dann die `Content-Security-Policy` Kopfzeile {{CSP("report-to")}} Direktive verwenden, um anzugeben, dass ein bestimmter definierter Endpunkt für die Berichterstattung verwendet werden soll.
Zum Beispiel, um CSP-Verletzungsberichte an `https://example.com/csp-reports` für `default-src` zu senden, könnten Sie Antwortheader senden, die wie folgt aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn eine CSP-Verletzung auftritt, sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt über eine HTTP `POST`-Operation, mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`.
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

Sie müssen einen Server einrichten, um Berichte im angegebenen JSON-Format und Inhalts-Typ zu empfangen.
Der Server, der diese Anforderungen verarbeitet, kann dann die eingehenden Berichte in einer Weise speichern oder verarbeiten, die am besten zu Ihren Bedürfnissen passt.

## Siehe auch

- [Mitigate cross-site scripting with a strict Content Security Policy](https://web.dev/articles/strict-csp) auf web.dev (2024)
- [Content Security Policy: A successful mess between hardening and mitigation](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) auf owasp.org
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
