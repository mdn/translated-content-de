---
title: Content Security Policy (CSP)
slug: Web/HTTP/Guides/CSP
l10n:
  sourceCommit: 2d9fd5822658f1943d1749aeb741bf989f7b6a20
---

{{HTTPSidebar}}

**Content Security Policy** (CSP) ist eine Funktion, die dazu beiträgt, das Risiko bestimmter Arten von Sicherheitsbedrohungen zu verhindern oder zu minimieren. Sie besteht aus einer Reihe von Anweisungen einer Website an einen Browser, die dem Browser vorschreibt, Beschränkungen für die Dinge zu setzen, die der Code der Website ausführen darf.

Der hauptsächliche Anwendungsfall für CSP ist die Kontrolle darüber, welche Ressourcen, insbesondere JavaScript-Ressourcen, ein Dokument laden darf. Dies wird hauptsächlich als Verteidigung gegen {{Glossary("cross-site_scripting", "Cross-Site Scripting")}} (XSS) Angriffe verwendet, bei denen ein Angreifer in der Lage ist, bösartigen Code in die Website des Opfers einzuschleusen.

Eine CSP kann auch andere Zwecke haben, wie zum Beispiel die Verteidigung gegen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und die Hilfe bei der Sicherstellung, dass Seiten einer Website über HTTPS geladen werden.

In diesem Leitfaden beginnen wir mit der Beschreibung, wie eine CSP an einen Browser geliefert wird und wie sie auf einer hohen Ebene aussieht.

Dann beschreiben wir, wie sie verwendet werden kann, um [zu kontrollieren, welche Ressourcen geladen werden](#kontrolle_des_ressourcenladens), um sich gegen XSS zu schützen, und dann andere Anwendungsfälle wie [Clickjacking-Schutz](#schutz_vor_clickjacking) und [Upgrade unsicherer Anfragen](#upgrade_unsicherer_anfragen). Beachten Sie, dass es keine Abhängigkeit zwischen den verschiedenen Anwendungsfällen gibt: Wenn Sie Clickjacking-Schutz hinzufügen möchten, aber nicht die Abschwächung von XSS, können Sie einfach die Anweisungen für diesen Anwendungsfall hinzufügen.

Abschließend beschreiben wir [Strategien zur Implementierung einer CSP](#testen_ihrer_richtlinie) und Werkzeuge, die diesen Prozess erleichtern können.

## Überblick über CSP

Eine CSP sollte im {{httpheader("Content-Security-Policy")}} Antwort-Header an den Browser geliefert werden. Sie sollte für alle Antworten auf alle Anfragen gesetzt werden, nicht nur für das Hauptdokument.

Sie können es auch mit dem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv) Attribut Ihres Dokuments {{htmlelement("meta")}} Element angeben, und dies ist eine nützliche Option für einige Anwendungsfälle, wie z.B. eine clientseitig gerenderte {{Glossary("SPA", "Single Page App")}}, die nur statische Ressourcen hat, weil Sie dann vermeiden können, auf irgendeine Serverinfrastruktur zu setzen. Diese Option unterstützt jedoch nicht alle CSP-Funktionen.

Die Richtlinie wird als eine Reihe von _Direktiven_ angegeben, die durch Semikolons getrennt sind. Jede Direktive steuert einen anderen Aspekt der Sicherheitsrichtlinie. Jede Direktive hat einen Namen, gefolgt von einem Leerzeichen und einem Wert. Verschiedene Direktiven können unterschiedliche Syntaxen haben.

Zum Beispiel zur Ansicht folgende CSP:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

Sie setzt zwei Direktiven:

- Die `default-src` Direktive ist auf `'self'` gesetzt
- Die `img-src` Direktive ist auf `'self' example.com` gesetzt.

![Eine CSP aufgeteilt in ihre Direktiven.](csp-overview.svg)

Die erste Direktive, `default-src`, sagt dem Browser, nur Ressourcen zu laden, die gleichartig mit dem Dokument sind, sofern nicht anders spezifische Direktiven eine andere Richtlinie für andere Ressourcentypen festlegen. Die zweite, `img-src`, sagt dem Browser, Bilder zu laden, die gleichartig sind oder die von `example.com` bereitgestellt werden.

Im nächsten Abschnitt gehen wir auf die Werkzeuge ein, um das Laden von Ressourcen zu steuern, was die Hauptfunktion einer CSP ist.

## Kontrolle des Ressourcenladens

Eine CSP kann verwendet werden, um die Ressourcen zu steuern, die ein Dokument laden darf. Dies wird in erster Linie zum Schutz gegen Cross-Site Scripting (XSS) -Angriffe verwendet.

In diesem Abschnitt werden wir zunächst sehen, wie die Kontrolle des Ressourcenladens helfen kann, XSS zu verhindern, dann auf die von CSP bereitgestellten Werkzeuge eingehen, um zu steuern, was geladen werden kann. Abschließend beschreiben wir eine besondere empfohlene Strategie, die als "Strikte CSP" bezeichnet wird.

### XSS und Ressourcenladen

Ein Cross-Site Scripting (XSS) -Angriff ist einer, bei dem ein Angreifer in der Lage ist, seinen Code im Kontext der Ziel-Website auszuführen. Dieser Code kann dann alles tun, was der eigene Code der Website auch könnte, einschließlich, zum Beispiel:

- Zugriff oder Änderung des Inhalts der geladenen Seiten der Site
- Zugriff oder Änderung von Inhalten im lokalen Speicher
- HTTP-Anfragen mit den Anmeldeinformationen des Benutzers machen, um den Benutzer zu imitieren oder auf sensible Daten zuzugreifen

Ein XSS-Angriff ist möglich, wenn eine Website eine Eingabe akzeptiert, die von einem Angreifer manipuliert worden sein könnte (z.B. URL-Parameter oder ein Kommentar zu einem Blogbeitrag) und diese dann in die Seite integriert, ohne sie zu _sanitisieren_: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausgeführt werden kann.

Websites sollten sich gegen XSS schützen, indem sie diese Eingaben vor der Einfügung in die Seite reinigen. Eine CSP bietet einen ergänzenden Schutz, der die Website schützen kann, selbst wenn die Reinigung fehlschlägt.

Wenn die Reinigung fehlschlägt, gibt es verschiedene Formen, die der eingespritzte bösartige Code im Dokument annehmen kann, unter anderem:

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

Eine CSP kann vor all dem schützen. Mit einer CSP können Sie:

- die erlaubten Quellen für JavaScript-Dateien und andere Ressourcen definieren und so effektiv das Laden von `https://evil.example.com` blockieren
- Inline-Skript-Tags deaktivieren
- nur Skript-Tags erlauben, die das korrekte Nonce oder den korrekten Hash gesetzt haben
- Inline-Event-Handler deaktivieren
- `javascript:` URLs deaktivieren
- gefährliche APIs wie `eval()` deaktivieren

Im nächsten Abschnitt werden wir die Werkzeuge erläutern, die CSP zur Verfügung stellt, um diese Dinge zu tun.

> [!NOTE]
> Das Setzen einer CSP ist keine Alternative zur Reinigung von Eingaben. Websites sollten Eingaben reinigen _und_ eine CSP setzen, um einen vertieften Schutz gegen XSS zu bieten.

### Laden von Direktiven

Fetch-Direktiven werden verwendet, um eine bestimmte Kategorie von Ressourcen zu spezifizieren, die ein Dokument laden darf — wie JavaScript, CSS-Stile, Bilder, Schriftarten und so weiter.

Es gibt unterschiedliche Laden-Direktiven für verschiedene Arten von Ressourcen. Zum Beispiel:

- [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) setzt erlaubte Quellen für JavaScript.
- [`style-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) setzt erlaubte Quellen für CSS-Stile.
- [`img-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) setzt erlaubte Quellen für Bilder.

Eine besondere Laden-Direktive ist `default-src`, die eine Fallback-Richtlinie für alle Ressourcen festlegt, deren Direktiven nicht explizit aufgeführt sind.

Für die vollständige Liste der Laden-Direktiven siehe die [Referenzdokumentation](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directives).

Jede Laden-Direktive wird entweder als das Schlüsselwort `'none'` oder als ein oder mehrere _Quellen-Ausdrücke_ angegeben, getrennt durch Leerzeichen. Wenn mehr als ein Quellen-Ausdruck aufgeführt ist: Wenn eine der Methoden die Ressource erlaubt, dann ist die Ressource erlaubt.

Zum Beispiel setzt die folgende CSP zwei Laden-Direktiven:

- `default-src` wird der einzelne Quellen-Ausdruck `'self'` gegeben
- `img-src` werden zwei Quellen-Ausdrücke gegeben: `'self'` und `example.com`

![CSP-Diagramm zeigt Quellen-Ausdrücke](csp-source-expressions.svg)

Die Wirkung davon ist, dass:

- Bilder müssen entweder gleichartig mit dem Dokument sein, oder von `example.com` geladen werden
- alle anderen Ressourcen müssen gleichartig mit dem Dokument sein.

In den nächsten Abschnitten werden wir einige der Möglichkeiten beschreiben, wie Quellen-Ausdrücke verwendet werden können, um das Laden von Ressourcen zu steuern. Beachten Sie, dass sie im Allgemeinen kombiniert werden können: eine einzelne Laden-Direktive kann Nichtsen sowie Hostnamen enthalten.

#### Blockieren von Ressourcen

Um einen Ressourcentyp vollständig zu blockieren, verwenden Sie das Schlüsselwort `'none'`. Zum Beispiel blockiert die folgende Direktive alle {{htmlelement("object")}} und {{htmlelement("embed")}} Ressourcen:

```http
Content-Security-Policy: object-src 'none'
```

Beachten Sie, dass `'none'` nicht mit einer anderen Methode in einer bestimmten Direktive kombiniert werden kann: In der Praxis, wenn andere Quellen-Ausdrücke zusammen mit `'none'` gegeben werden, werden diese ignoriert.

#### Nonces

Ein `nonce` ist der empfohlene Ansatz, um das Laden von {{htmlelement("script")}} und {{htmlelement("style")}} Ressourcen einzuschränken.

Mit einem Nonce generiert der Server für jede HTTP-Antwort einen zufälligen Wert und fügt ihn in eine `script-src` und/oder eine `style-src` Direktive ein:

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server fügt diesen Wert dann als Wert des `nonce` Attributs aller `<script>` und/oder `<style>` Tags ein, die sie im Dokument aufnehmen möchten.

Der Browser vergleicht die beiden Werte und lädt die Ressource nur, wenn sie übereinstimmen. Die Idee ist, dass, selbst wenn ein Angreifer in der Lage ist, etwas JavaScript in die Seite einzufügen, er das Nonce, das der Server verwenden wird, nicht kennt, und der Browser das Skript daher nicht ausführt.

Damit dieser Ansatz funktioniert, darf es nicht möglich sein, dass ein Angreifer das Nonce errät.

**In der Praxis bedeutet dies, dass das Nonce für jede HTTP-Antwort unterschiedlich und unvorhersehbar sein muss.**

Daher kann der Server kein statisches HTML liefern, da er jedes Mal ein neues Nonce einfügen muss. Typischerweise würde der Server eine Templating-Engine verwenden, um das Nonce einzufügen.

Hier ist ein Code-Schnipsel von [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs), um dies zu zeigen:

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

Bei jeder Anfrage generiert der Server ein neues Nonce, fügt es in die CSP und in die {{htmlelement("script")}} Tags im zurückgegebenen Dokument ein. Beachten Sie, dass der Server:

- ein neues Nonce für jede Anfrage generiert
- Nonces sowohl für externe als auch für Inline-Skripte verwenden kann
- dasselbe Nonce für alle `<script>`-Tags im Dokument verwendet

Es ist wichtig, dass der Server eine Art Templating verwendet, um Nonces einzufügen, und nicht einfach nur in alle `<script>`-Tags einfügt: sonst könnte der Server unbeabsichtigt Nonce in Skripte einfügen, die von einem Angreifer eingeschleust wurden.

Beachten Sie, dass Nonces nur für Elemente verwendet werden können, die ein `nonce` Attribut besitzen: das heißt, nur für `<script>` und `<style>` Elemente.

#### Hashes

Laden-Direktiven können auch einen Hash des Skripts verwenden, um dessen Integrität zu gewährleisten. Bei dieser Methode:

1. Berechnet der Server einen Hash des Skriptinhalts mit einer {{Glossary("hash_function", "Hashfunktion")}} (einer von SHA-256, SHA-384 oder SHA-512)
2. Erzeugt eine {{Glossary("Base64", "Base64")}} Kodierung des Ergebnisses
3. Fügt ein Präfix hinzu, das den verwendeten Hash-Algorithmus identifiziert (einer von `sha256-`, `sha384-` oder `sha512-`).

Dann fügt er das Ergebnis der Direktive hinzu:

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

Wenn der Browser das Dokument empfängt, hashiert er das Skript, vergleicht das Ergebnis mit dem Wert aus dem Header und lädt das Skript nur, wenn sie übereinstimmen.

Externe Skripte müssen auch das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut enthalten, damit diese Methode funktioniert.

Hier ist ein Code-Schnipsel von Express, um dies zu demonstrieren:

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
- Für das externe Skript "main.js" fügen wir auch das `integrity` Attribut hinzu und geben ihm denselben Wert.
- Im Gegensatz zum Beispiel mit Nonces können sowohl die CSP als auch der Inhalt statisch sein, da die Hashes gleich bleiben. Dies macht Hash-basierte Richtlinien besser geeignet für statische Seiten oder Websites, die auf clientseitiges Rendering angewiesen sind.

#### Schema-basierte Richtlinien

Laden-Direktiven können ein Schema auflisten, wie `https:`, um Ressourcen zu erlauben, die über dieses Schema bereitgestellt werden. Dies ermöglicht beispielsweise einer Richtlinie, HTTPS für alle Ressourcenladungen zu erfordern:

```http
Content-Security-Policy: default-src https:
```

#### Standortbasierte Richtlinien

Laden-Direktiven können das Laden von Ressourcen basierend darauf steuern, wo sich die Ressource befindet.

Das Schlüsselwort `'self'` erlaubt Ressourcen, die gleichartig mit dem Dokument selbst sind:

```http
Content-Security-Policy: img-src 'self'
```

Sie können auch einen oder mehrere Hostnamen angeben, möglicherweise Wildcards enthalten, und nur Ressourcen von diesen Hosts werden erlaubt. Dies könnte beispielsweise verwendet werden, um Inhalte zu ermöglichen, die von einem vertrauenswürdigen CDN bereitgestellt werden.

```http
Content-Security-Policy: img-src *.example.org
```

Sie können mehrere Standorte angeben. Die folgende Direktive erlaubt nur Bilder, die gleichartig mit dem aktuellen Dokument sind oder von einer Subdomain von "example.org" oder von "example.com" bereitgestellt werden:

```http
Content-Security-Policy: img-src 'self' *.example.org  example.com
```

#### Inline-JavaScript

Wenn eine CSP entweder eine `default-src` oder eine `script-src` Direktive enthält, dann darf Inline-JavaScript nicht ausgeführt werden, es sei denn, es werden zusätzliche Maßnahmen ergriffen, um es zu aktivieren. Das schließt ein:

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

Das Schlüsselwort `unsafe-inline` kann verwendet werden, um diese Einschränkung zu überschreiben. Zum Beispiel erlaubt die folgende Direktive alle Ressourcen, die gleichartig sind, aber ermöglicht Inline-JavaScript:

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es den größten Teil des Zwecks einer CSP unterläuft. Inline-JavaScript ist eines der häufigsten XSS-Vektoren, und eines der grundlegenden Ziele einer CSP ist es, dessen unkontrollierte Nutzung zu verhindern.

Inline-`<script>` Elemente sind erlaubt, wenn sie durch einen Nonce oder einen Hash geschützt sind, wie oben beschrieben.

Wenn eine Direktive Nonce- oder Hash-Ausdrücke enthält, wird das Schlüsselwort `unsafe-inline` von Browsern ignoriert.

#### `eval()` und ähnliche APIs

Wie Inline-JavaScript ist `eval()` und ähnliche APIs nicht erlaubt, wenn eine CSP entweder eine `default-src` oder eine `script-src` Direktive enthält. Dazu gehören, unter anderem, APIs:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) selbst:

  ```js
  eval('console.log("hello from eval()")');
  ```

- Der {{jsxref("Function/Function()", "Function()")}} Konstruktor:

  ```js
  const sum = new Function("a", "b", "return a + b");
  ```

- Das String-Argument für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval):

  ```js
  setTimeout("console.log('hello from setTimeout')", 1);
  ```

Das Schlüsselwort `unsafe-eval` kann verwendet werden, um dieses Verhalten zu überschreiben, und wie auch bei `unsafe-inline`, sollten Entwickler **`unsafe-eval` vermeiden**. Manchmal kann es schwierig sein, die Verwendung von `eval()` zu entfernen: In diesen Situationen kann die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) dies sicherer machen, indem sichergestellt wird, dass die Eingabe eine definierte Richtlinie erfüllt.

Im Gegensatz zu `unsafe-inline` funktioniert das Schlüsselwort `unsafe-eval` weiterhin in einer Direktive, die Nonce- oder Hash-Ausdrücke enthält.

### Strikte CSP

Um das Laden von Skripten als Abschwächung gegen XSS zu steuern, wird empfohlen, [nonce-](#nonces) oder [hash-](#hashes) basierte Laden-Direktiven zu verwenden. Das wird als eine _strikte CSP_ bezeichnet. Diese Art von CSP hat zwei Hauptvorteile gegenüber einer standortbasierten CSP (die oft eine _Allowlist-CSP_ genannt wird):

- Allowlist-CSPs sind schwer richtig umzusetzen und oft listen Richtlinien unbeabsichtigt unsichere Domains auf und bieten daher keinen effektiven Schutz gegen XSS (siehe [CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)).
- Allowlist-CSPs können sehr groß sein und schwer zu verwalten, insbesondere beim Einsatz von Skripten, die außerhalb Ihrer Kontrolle liegen. Laut [How I learned to stop worrying and love the Content Security Policy](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/) wird einem Entwickler allein für die Integration von Google Analytics empfohlen, 187 Google-Domains zur Allowlist hinzuzufügen.

Eine nonce-basierte strikte CSP sieht so aus:

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

In dieser CSP:

- verwenden wir Nonces, um zu steuern, welche JavaScript-Ressourcen geladen werden dürfen
- blockieren wir alle Objekteinbindungen
- blockieren wir die gesamte Verwendung des `<base>` Elements, um eine Basis-URI festzulegen.

Eine hash-basierte strikte CSP ist identisch, außer dass sie Hashes anstelle von Nonces verwendet:

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

Nonce-basierte Direktiven lassen sich einfacher verwalten, wenn Sie Antworten einschließlich des Inhalts selbst dynamisch erstellen können. Andernfalls müssen Sie hash-basierte Direktiven verwenden. Das Problem bei hash-basierten Direktiven ist, dass Sie den Hash neu berechnen und anwenden müssen, wenn irgendwelche Änderungen an den Skriptinhalten vorgenommen werden.

#### Das `strict-dynamic` Schlüsselwort

Wie oben präsentiert, ist die strikte CSP schwer zu implementieren, wenn Sie Skripte verwenden, die nicht unter Ihrer Kontrolle stehen. Wenn ein Drittanbieter-Skript weitere Skripte lädt oder Inline-Skripte verwendet, wird dies fehlschlagen, weil das Drittanbieter-Skript das Nonce oder den Hash nicht überträgt.

Das Schlüsselwort `strict-dynamic` wird bereitgestellt, um dieses Problem zu lösen. Es ist ein Schlüsselwort, das in eine Laden-Direktive aufgenommen werden kann, und es hat die Wirkung, dass, wenn ein Skript ein Nonce oder einen Hash an sich hat, dann ist dieses Skript erlaubt, weitere Skripte zu laden, die keine Nonces oder Hashes an sich haben. Das heißt, das Vertrauen, das durch einen Nonce oder Hash in ein Skript gesetzt wird, wird auf Skripte übertragen, die das ursprüngliche Skript lädt (und Skripte, die _sie_ laden, und so weiter).

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

Es beinhaltet ein Skript "main.js", das ein weiteres Skript erstellt und hinzufügt, "main2.js":

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

Das Skript "main.js" wird erlaubt zu laden, da sein Hash mit dem Wert in der CSP übereinstimmt. Aber sein Versuch, "main2.js" zu laden, wird fehlschlagen.

Wenn wir `'strict-dynamic'` zur CSP hinzufügen, wird "main.js" erlaubt, "main2.js" zu laden:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  strict-dynamic
```

Das `'strict-dynamic'` Schlüsselwort macht es viel einfacher, Nonce- oder Hash-basierte CSPs zu erstellen und zu pflegen, besonders wenn eine Website Drittanbieter-Skripte verwendet. Allerdings macht es Ihre CSP weniger sicher, da wenn die von Ihnen eingeschlossenen Skripte `<script>` Elemente basierend auf potenziellen XSS-Quellen erstellen, die CSP sie nicht schützt.

#### Refakturierung von Inline-JavaScript und `eval()`

Wir haben gesehen, dass Inline-JavaScript standardmäßig in einer CSP nicht erlaubt ist. Mit Nonces oder Hashes kann ein Entwickler Inline-`<script>` Tags verwenden, aber Sie müssen dennoch den Code umstrukturieren, um andere verbotene Muster zu entfernen, einschließlich Inline-Event-Handler, `javascript:` URLs und die Verwendung von `eval()`. Zum Beispiel sollten Inline-Event-Handler in der Regel durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ersetzt werden:

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

Die [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) Direktive kann verwendet werden, um zu kontrollieren, welche Dokumente, wenn überhaupt, das Dokument in einem verschachtelten Browsing-Kontext wie einem {{htmlelement("iframe")}} einbetten dürfen. Dies ist ein effektiver Schutz gegen Clickjacking-Angriffe, da diese Angriffe davon abhängen, dass die Ziel-Website in einer vom Angreifer kontrollierten Website eingebettet wird.

Die Syntax von `frame-ancestors` ist ein Subset der Syntax von Lade-Direktiven: Sie können den einzigen Schlüsselwortwert `'none'` oder einen oder mehrere Quellen-Ausdrücke angeben. Die einzigen Quellen-Ausdrücke, die Sie verwenden können, sind jedoch Schemata, Hostnamen oder das `'self'` Schlüsselwort.

Es sei denn, Sie benötigen Ihre Website, um einbettbar zu sein, sollten Sie `frame-ancestors` auf `'none'` setzen:

```http
Content-Security-Policy: frame-ancestors 'none'
```

Diese Direktive ist ein flexiblerer Ersatz für den {{httpheader("X-Frame-Options")}} Header.

## Upgrade unsicherer Anfragen

Webentwickler werden dringend ermutigt, alle ihre Inhalte über HTTPS zu bedienen. Beim Upgrade einer Website auf HTTPS wird immer wieder festgestellt, dass eine Website das Hauptdokument über HTTPS bedient, aber ihre Ressourcen über HTTP, zum Beispiel mit Markup wie diesem:

```html
<script src="http://example.org/my-cat.js"></script>
```

Dies wird _Mixed Content_ genannt, und das Vorhandensein unsicherer Ressourcen schwächt den Schutz von HTTPS erheblich. Unter dem [Mixed Content Algorithmus](/de/docs/Web/Security/Mixed_content), den Browser implementieren, wird, wenn ein Dokument über HTTPS bereitgestellt wird, unsichere Ressourcen in "Upgradebare Inhalte" und "Blockierbare Inhalte" kategorisiert. Upgradebare Inhalte werden zu HTTPS aktualisiert und blockierbare Inhalte werden blockiert, was möglicherweise die Seite bricht.

Die ultimative Lösung für Mixed Content besteht darin, dass Entwickler alle Ressourcen über HTTPS laden. Auch wenn eine Website tatsächlich alle Inhalte über HTTPS bereitstellen kann, kann es für einen Entwickler sehr schwierig (oder sogar praktisch unmöglich, wenn archivierte Inhalte betroffen sind) sein, alle URLs, die die Website verwendet, um Ressourcen zu laden, umzuschreiben.

Die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) Direktive ist dazu gedacht, dieses Problem zu lösen. Diese Direktive hat keinen Wert: Um sie zu setzen, fügen Sie einfach den Direktiven-Namen ein:

```http
Content-Security-Policy: upgrade-insecure-requests
```

Wenn diese Direktive auf einem Dokument gesetzt ist, wird der Browser automatisch alle HTTP-URLs in den folgenden Fällen zu HTTPS upgraden:

- Anfragen, um Ressourcen zu laden (wie Bilder, Skripte oder Schriftarten)
- Navigationsanfragen (wie Link-Ziele), die gleichen Ursprungs mit dem Dokument sind
- Navigationsanfragen in verschachtelten Browsing-Kontexten wie iframes
- Formularübermittlungen

Top-Level-Navigationsanfragen, deren Ziel ein anderer Ursprung ist, werden nicht hochgestuft.

Nehmen wir an, das Dokument bei `https://example.org` wird mit einer CSP, die die `upgrade-insecure-requests` Direktive enthält, ausgegeben, und das Dokument enthält Markup wie dieses:

```html
<script src="http://example.org/my-cat.js"></script>
<script src="http://not-example.org/another-cat.js"></script>
```

Der Browser wird beide dieser Anfragen automatisch auf HTTPS hochstufen.

Angenommen, das Dokument enthält auch dies:

```html
<a href="http://example.org/more-cats">See some more cats!</a>
<a href="http://not-example.org/even-more-cats">More cats, on another site!</a>
```

Der Browser hebt den ersten Link auf HTTPS an, nicht jedoch den zweiten, da es sich um das Navigieren zu einem anderen Ursprung handelt.

Diese Direktive ist kein Ersatz für den {{httpheader("Strict-Transport-Security")}} Header (auch bekannt als HSTS), da sie keine externen Links zu einer Website hochstuft. Websites sollten diese Direktive und den `Strict-Transport-Security` Header enthalten.

## Testen Ihrer Richtlinie

Um die Bereitstellung zu erleichtern, kann CSP im Report-Only-Modus bereitgestellt werden. Die Richtlinie wird nicht erzwungen, aber alle Verstöße werden an den in der Richtlinie angegebenen Melde-Endpunkt gesendet. Zusätzlich kann ein Report-Only-Header verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich bereitzustellen.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header verwenden, um Ihre Richtlinie anzugeben, etwa so:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header als auch ein {{HTTPHeader("Content-Security-Policy")}} Header in derselben Antwort vorhanden sind, werden beide Richtlinien berücksichtigt. Die durch `Content-Security-Policy` Header angegebene Richtlinie wird durchgesetzt, während die `Content-Security-Policy-Report-Only` Richtlinie Berichte generiert, aber nicht durchgesetzt wird.

Beachten Sie, dass im Gegensatz zu einer normalen Inhalts-Sicherheitsrichtlinie, eine Reporting-Only-Richtlinie nicht in einem `<meta>` Element bereitgestellt werden kann.

### Verletzungsberichterstattung

Die empfohlene Methode zur Meldung von CSP-Verletzungen besteht darin, die [Reporting API](/de/docs/Web/API/Reporting_API) zu verwenden, die Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} erklärt und einen davon als CSP-Berichtsziel mit der {{CSP("report-to")}} Direktive des `Content-Security-Policy` Headers angibt.

> [!WARNING]
> Sie können auch die CSP {{CSP("report-uri")}} Direktive verwenden, um ein Ziel-URL für CSP-Verletzungsberichte anzugeben.
> Dies sendet ein leicht abweichendes JSON-Berichtsformat über eine `POST` Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`.
> Dieser Ansatz ist veraltet, aber Sie sollten beide deklarieren, bis {{CSP("report-to")}} in allen Browsern unterstützt wird.
> Für weitere Informationen über den Ansatz siehe das {{CSP("report-uri")}} Thema.

Ein Server kann Clients darüber informieren, wohin Berichte gesendet werden sollen, indem er den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header setzt. Dieser Header definiert eine oder mehrere Endpunkt-URLs als kommagetrennte Liste. Zum Beispiel, um einen Meldeendpunkt namens `csp-endpoint` zu definieren, der Berichte unter `https://example.com/csp-reports` akzeptiert, könnte der Antwortheader des Servers so aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die verschiedene Arten von Berichten bearbeiten, würden Sie diese so angeben:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Dann können Sie die {{CSP("report-to")}} Direktive des `Content-Security-Policy` Headers verwenden, um anzugeben, dass ein bestimmter definierter Endpunkt für Berichte verwendet werden soll. Zum Beispiel, um CSP-Verletzungsberichte an `https://example.com/csp-reports` für `default-src` zu senden, könnten Sie Antwortheader senden, die so aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn eine CSP-Verletzung auftritt, sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt über eine HTTP `POST` Operation, mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`. Der Bericht ist eine serialisierte Form des [`Report`](/de/docs/Web/API/Report) Objekts, das eine `type` Eigenschaft mit einem Wert von `"csp-violation"` enthält, und einen `body`, der die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Objekts ist.

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

Sie müssen einen Server einrichten, der Berichte mit dem angegebenen JSON-Format und Inhaltstyp empfängt. Der Server, der diese Anfragen bearbeitet, kann die eingehenden Berichte speichern oder verarbeiten, auf die Weise, die am besten zu Ihren Bedürfnissen passt.

## Siehe auch

- [CSP Fehler und Warnungen](/de/docs/Web/HTTP/Guides/CSP/Errors)
- [Cross-Site Scripting mit einer strikten Content Security Policy abmildern](https://web.dev/articles/strict-csp) auf web.dev (2024)
- [Content Security Policy: Ein erfolgreicher Mix zwischen Härtung und Abschwächung](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) auf owasp.org
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
