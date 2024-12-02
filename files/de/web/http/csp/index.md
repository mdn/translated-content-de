---
title: Content Security Policy (CSP)
slug: Web/HTTP/CSP
l10n:
  sourceCommit: 4d12b3e4f9afb311f2656641260e42c0b6f8f4c6
---

{{HTTPSidebar}}

**Content Security Policy** (CSP) ist ein Feature, das dabei hilft, bestimmte Arten von Sicherheitsbedrohungen zu verhindern oder das Risiko zu minimieren. Es besteht aus einer Reihe von Instruktionen von einer Website an einen Browser, die den Browser anweisen, Einschränkungen für die Dinge zu setzen, die der Code der Seite tun darf.

Der Hauptanwendungsfall für CSP ist die Kontrolle darüber, welche Ressourcen, insbesondere JavaScript-Ressourcen, ein Dokument laden darf. Dies wird hauptsächlich als Schutz gegen {{Glossary("cross-site_scripting", "Cross-Site Scripting")}} (XSS)-Angriffe verwendet, bei denen ein Angreifer in der Lage ist, bösartigen Code in die Website des Opfers einzuschleusen.

Eine CSP kann auch andere Zwecke haben, einschließlich des Schutzes gegen {{Glossary("clickjacking", "Clickjacking")}} und der Sicherstellung, dass die Seiten einer Website über HTTPS geladen werden.

In diesem Leitfaden beginnen wir damit zu beschreiben, wie eine CSP an einen Browser übermittelt wird und wie sie auf hoher Ebene aussieht.

Dann beschreiben wir, wie sie verwendet werden kann, um [die geladenen Ressourcen zu kontrollieren](#kontrolle_des_ressourcenladens), um sich gegen XSS zu schützen, sowie andere Anwendungsfälle wie [Clickjacking-Schutz](#clickjacking-schutz) und [Upgrade unsicherer Anfragen](#upgrade_unsicherer_anfragen). Beachten Sie, dass es keine Abhängigkeit zwischen den verschiedenen Anwendungsfällen gibt: Wenn Sie nur Clickjacking-Schutz hinzufügen möchten, aber keine Maßnahmen gegen XSS ergreifen, können Sie einfach die Direktiven für diesen Anwendungsfall hinzufügen.

Schließlich werden wir [Strategien zur Implementierung einer CSP](#testen_ihrer_richtlinie) und Tools beschreiben, die helfen können, diesen Prozess zu erleichtern.

## Überblick über CSP

Eine CSP sollte dem Browser im {{httpheader("Content-Security-Policy")}}-Antwort-Header übermittelt werden. Sie sollte in allen Antworten auf alle Anfragen gesetzt werden, nicht nur im Hauptdokument.

Sie können sie auch mit dem [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attribut des {{htmlelement("meta")}}-Elements Ihres Dokuments angeben, und dies ist eine nützliche Option für einige Anwendungsfälle, wie zum Beispiel eine clientseitig gerenderte {{Glossary("SPA", "Single Page App")}}, die nur statische Ressourcen hat, da Sie dann auf die Abhängigkeit von einer Serverinfrastruktur verzichten können. Allerdings unterstützt diese Option nicht alle CSP-Funktionen.

Die Richtlinie wird als eine Reihe von _Direktiven_ spezifiziert, die durch Semikolons getrennt sind. Jede Direktive steuert einen anderen Aspekt der Sicherheitsrichtlinie. Jede Direktive hat einen Namen, gefolgt von einem Leerzeichen und einem Wert. Verschiedene Direktiven können unterschiedliche Syntaxen haben.

Betrachten Sie zum Beispiel die folgende CSP:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

Es setzt zwei Direktiven:

- die `default-src`-Direktive ist auf `'self'` gesetzt
- die `img-src`-Direktive ist auf `'self' example.com` gesetzt.

![Eine CSP, die in ihre Direktiven aufgeteilt ist.](csp-overview.svg)

Die erste Direktive, `default-src`, weist den Browser an, nur Ressourcen zu laden, die mit dem Dokument die gleiche Herkunft haben, es sei denn, andere spezifischere Direktiven setzen eine andere Richtlinie für andere Ressourcentypen. Die zweite, `img-src`, weist den Browser an, Bilder zu laden, die entweder aus derselben Herkunft stammen oder von `example.com` bereitgestellt werden.

Im nächsten Abschnitt werden wir die verfügbaren Werkzeuge betrachten, um das Laden von Ressourcen zu kontrollieren, was die Hauptfunktion einer CSP ist.

## Kontrolle des Ressourcenladens

Eine CSP kann verwendet werden, um die Ressourcen zu kontrollieren, die ein Dokument laden darf. Dies wird in erster Linie zum Schutz vor Cross-Site Scripting (XSS)-Angriffen eingesetzt.

In diesem Abschnitt werden wir zunächst sehen, wie die Kontrolle des Ressourcenladens helfen kann, sich gegen XSS zu schützen, dann die Tools, die CSP bietet, um zu kontrollieren, welche Ressourcen geladen werden. Schließlich beschreiben wir eine besonders empfohlene Strategie, die als "strikte CSP" bezeichnet wird.

### XSS und Ressourcenladen

Ein Cross-Site Scripting (XSS)-Angriff ist einer, bei dem ein Angreifer in der Lage ist, seinen Code im Kontext der Ziel-Website auszuführen. Dieser Code kann dann alles tun, was der eigene Code der Website tun könnte, einschließlich zum Beispiel:

- Zugriff oder Änderung der Inhalte der geladenen Seiten der Website
- Zugang zu oder Änderung von Inhalten im lokalen Speicher
- HTTP-Anfragen mit den Anmeldedaten des Nutzers stellen, wodurch er sich als der Nutzer ausgeben oder auf sensible Daten zugreifen kann

Ein XSS-Angriff ist möglich, wenn eine Website eine Eingabe akzeptiert, die von einem Angreifer manipuliert worden sein könnte (zum Beispiel URL-Parameter oder ein Kommentar zu einem Blogbeitrag), und diese dann in die Seite einbindet, ohne sie zu _bereinigen_: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausgeführt werden kann.

Websites sollten sich vor XSS schützen, indem sie diese Eingaben bereinigen, bevor sie in die Seite eingebunden werden. Eine CSP bietet einen ergänzenden Schutz, der die Website auch dann schützen kann, wenn die Bereinigung fehlschlägt.

Wenn die Bereinigung tatsächlich fehlschlägt, können die injizierten bösartigen Codes verschiedene Formen im Dokument annehmen, einschließlich:

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

- Ein Inline-Ereignis-Handler:

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

Eine CSP kann Schutz gegen all diese bieten. Mit einer CSP können Sie:

- die erlaubten Quellen für JavaScript-Dateien und andere Ressourcen definieren, wodurch effektiv das Laden von `https://evil.example.com` blockiert wird
- Inline-Skript-Tags deaktivieren
- nur Skript-Tags erlauben, die mit einem korrekten Nonce oder Hash versehen sind
- Inline-Ereignis-Handler deaktivieren
- `javascript:`-URLs deaktivieren
- gefährliche APIs wie `eval()` deaktivieren

Im nächsten Abschnitt werden wir die Werkzeuge besprechen, die CSP bietet, um diese Dinge zu tun.

> [!NOTE]
> Das Setzen einer CSP ist kein Ersatz für die Bereinigung von Eingaben. Websites sollten Eingaben bereinigen _und_ eine CSP setzen, um einen tiefgehenden Schutz gegen XSS zu gewährleisten.

### Fetch-Direktiven

Fetch-Direktiven werden verwendet, um eine bestimmte Kategorie von Ressourcen anzugeben, die ein Dokument laden darf — wie JavaScript, CSS-Stylesheets, Bilder, Schriftarten und so weiter.

Es gibt unterschiedliche Fetch-Direktiven für verschiedene Arten von Ressourcen. Zum Beispiel:

- [`script-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) legt erlaubte Quellen für JavaScript fest.
- [`style-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) legt erlaubte Quellen für CSS-Stylesheets fest.
- [`img-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) legt erlaubte Quellen für Bilder fest.

Eine spezielle Fetch-Direktive ist `default-src`, die eine Fallback-Richtlinie für alle Ressourcen festlegt, deren Direktiven nicht explizit aufgelistet sind.

Für die vollständige Liste der Fetch-Direktiven siehe die [Referenzdokumentation](/de/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directives).

Jede Fetch-Direktive wird entweder als einzelnes Schlüsselwort `'none'` oder als eine oder mehrere _Quell-Ausdrücke_ angegeben, getrennt durch Leerzeichen. Wenn mehr als ein Quell-Ausdruck angegeben ist: Wenn eine der Methoden die Ressource erlaubt, dann ist die Ressource erlaubt.

Zum Beispiel setzt die untenstehende CSP zwei Fetch-Direktiven:

- `default-src` erhält den einzelnen Quell-Ausdruck `'self'`
- `img-src` erhält zwei Quell-Ausdrücke: `'self'` und `example.com`

![CSP-Diagramm, das Quell-Ausdrücke zeigt](csp-source-expressions.svg)

Die Wirkung davon ist, dass:

- Bilder entweder aus derselben Herkunft wie das Dokument stammen müssen oder von `example.com` geladen werden
- alle anderen Ressourcen aus derselben Herkunft wie das Dokument stammen müssen.

In den nächsten Abschnitten werden wir einige der Möglichkeiten beschreiben, wie Sie Quell-Ausdrücke verwenden können, um das Laden von Ressourcen zu kontrollieren. Beachten Sie, dass diese Ausdrücke, obwohl wir sie getrennt beschreiben, im Allgemeinen kombiniert werden können: Zum Beispiel kann eine einzelne Fetch-Direktive sowohl Nonces als auch Hostnamen enthalten.

#### Blockieren von Ressourcen

Um eine Art von Ressource vollständig zu blockieren, verwenden Sie das `'none'`-Schlüsselwort. Zum Beispiel blockiert die folgende Direktive alle {{htmlelement("object")}}- und {{htmlelement("embed")}}-Ressourcen:

```http
Content-Security-Policy: object-src 'none'
```

Beachten Sie, dass `'none'` nicht mit einer anderen Methode in einer bestimmten Direktive kombiniert werden kann: In der Praxis werden alle anderen Quell-Ausdrücke ignoriert, wenn sie neben `'none'` angegeben werden.

#### Nonces

Ein `nonce` ist die empfohlene Methode, um das Laden von {{htmlelement("script")}}- und {{htmlelement("style")}}-Ressourcen einzuschränken.

Bei einem Nonce generiert der Server einen zufälligen Wert für jede HTTP-Antwort und fügt ihn in eine `script-src`-und/oder eine `style-src`-Direktive ein:

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server schließt diesen Wert dann als Wert des `nonce`-Attributs in allen `<script>`-und/oder `<style>`-Tags ein, die er in das Dokument einfügen möchte.

Der Browser vergleicht die beiden Werte und lädt die Ressource nur, wenn sie übereinstimmen. Die Idee ist, dass selbst wenn ein Angreifer JavaScript in die Seite einfügen kann, er nicht wissen wird, welches Nonce der Server verwenden wird, sodass der Browser sich weigern wird, das Skript auszuführen.

Damit dieser Ansatz funktioniert, darf es einem Angreifer nicht möglich sein, das Nonce zu erraten.

**In der Praxis bedeutet dies, dass das Nonce für jede HTTP-Antwort unterschiedlich sein muss und nicht vorhersehbar sein darf.**

Dies bedeutet wiederum, dass der Server kein statisches HTML liefern kann, da er jedes Mal ein neues Nonce einfügen muss. In der Regel würde der Server eine Template-Engine verwenden, um das Nonce einzufügen.

Hier ist ein Code-Snippet von [Express](/de/docs/Learn/Server-side/Express_Nodejs), um das zu demonstrieren:

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

- für jede Anfrage ein neues Nonce generiert
- Nonces sowohl mit externen als auch Inline-Skripten verwenden kann
- dasselbe Nonce für alle `<script>`-Tags im Dokument verwendet

Es ist wichtig, dass der Server eine Art von Templating verwendet, um Nonces einzufügen, und sie nicht einfach in alle `<script>`-Tags einfügt: Ansonsten könnte der Server unbeabsichtigt Nonces in Skripte einfügen, die von einem Angreifer eingeschleust wurden.

Beachten Sie, dass Nonces nur für Elemente verwendet werden können, die ein `nonce`-Attribut haben: das heißt, nur `<script>`-und `<style>`-Elemente.

#### Hashes

Fetch-Direktiven können auch einen Hash des Skripts verwenden, um seine Integrität zu garantieren. Mit dieser Methode:

1. berechnet der Server einen Hash des Skriptinhalts mit einer {{Glossary("cryptographic_hash_function", "kryptografischen Hash-Funktion")}} (eine von SHA-256, SHA-384 oder SHA-512)
2. erstellt eine {{Glossary("Base64", "Base64")}}-Kodierung des Ergebnisses
3. fügt ein Präfix hinzu, das den verwendeten Hash-Algorithmus identifiziert (eine von `sha256-`, `sha384-` oder `sha512-`).

Dann fügt er das Ergebnis der Direktive hinzu:

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

Wenn der Browser das Dokument erhält, hasht er das Skript, vergleicht das Ergebnis mit dem Wert aus dem Header und lädt das Skript nur, wenn sie übereinstimmen.

Externe Skripte müssen für diese Methode auch das Attribut [`integrity`](/de/docs/Web/HTML/Element/script#integrity) enthalten.

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

- wir einen separaten Hash für jedes Skript im Dokument haben.
- für das externe Skript "main.js" geben wir auch das Attribut `integrity` an und geben ihm denselben Wert.
- im Gegensatz zum Beispiel mit Nonces sowohl die CSP als auch der Inhalt statisch sein können, da die Hashes gleich bleiben. Dies macht hash-basierte Richtlinien besser geeignet für statische Seiten oder Websites, die auf clientseitigem Rendering basieren.

#### Schema-basierte Richtlinien

Fetch-Direktiven können ein Schema auflisten, wie `https:`, um Ressourcen zu erlauben, die mit diesem Schema bereitgestellt werden. Dies erlaubt es einer Richtlinie beispielsweise, HTTPS für alle Ressourcentypen zu verlangen:

```http
Content-Security-Policy: default-src https:
```

#### Standortbasierte Richtlinien

Fetch-Direktiven können das Laden von Ressourcen basierend auf dem Standort der Ressource kontrollieren.

Das Schlüsselwort `'self'` erlaubt Ressourcen, die dieselbe Herkunft wie das Dokument selbst haben:

```http
Content-Security-Policy: img-src 'self'
```

Sie können auch ein oder mehrere Hostnamen angeben, möglicherweise einschließlich Platzhaltern, und nur Ressourcen, die von diesen Hosts bereitgestellt werden, sind erlaubt. Dies könnte beispielsweise verwendet werden, um Inhalt zu erlauben, der von einem vertrauenswürdigen CDN bereitgestellt wird.

```http
Content-Security-Policy: img-src *.example.org
```

Sie können mehrere Standorte angeben. Die folgende Direktive erlaubt nur Bilder, die dieselbe Herkunft wie das aktuelle Dokument haben, oder auf einem Subdomain von "example.org" gehostet werden, oder von "example.com" bereitgestellt werden:

```http
Content-Security-Policy: img-src 'self' *.example.org  example.com
```

#### Inline-JavaScript

Wenn eine CSP entweder eine `default-src`- oder eine `script-src`-Direktive enthält, dann dürfen Inline-JavaScripts nicht ausgeführt werden, es sei denn, es werden zusätzliche Maßnahmen ergriffen, um es zu erlauben. Dies schließt ein:

- JavaScript, das innerhalb eines `<script>`-Elements im Dokument enthalten ist:

  ```html
  <script>
    console.log("Hello from an inline script");
  </script>
  ```

- JavaScript in einem Inline-Ereignis-Handler-Attribut:

  ```html
  <img src="x" onerror="console.log('Hello from an inline event handler')" />
  ```

- JavaScript in einer `javascript:`-URL:

  ```html
  <a href="javascript:console.log('Hello from a javascript: URL')"></a>
  ```

Das Schlüsselwort `unsafe-inline` kann verwendet werden, um diese Einschränkung aufzuheben. Zum Beispiel erlaubt die folgende Direktive alle Ressourcen aus derselben Herkunft, erlaubt aber auch Inline-JavaScript:

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es den größten Teil des Zwecks einer CSP untergräbt. Inline-JavaScript ist einer der häufigsten XSS-Vektoren und eines der grundlegendsten Ziele einer CSP ist es, seine unkontrollierte Nutzung zu verhindern.

Inline-`<script>`-Elemente sind erlaubt, wenn sie durch ein Nonce oder einen Hash geschützt sind, wie oben beschrieben.

Wenn eine Direktive Nonce- oder Hash-Ausdrücke enthält, wird das Schlüsselwort `unsafe-inline` von Browsern ignoriert.

#### `eval()` und ähnliche APIs

Wenn eine CSP entweder eine `default-src`- oder eine `script-src`-Direktive enthält, dann dürfen `eval()` und ähnliche APIs nicht ausgeführt werden. Dies schließt ein, unter anderem:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) selbst:

  ```js
  eval('console.log("hello from eval()")');
  ```

- Den {{jsxref("Function/Function()", "Function()")}}-Konstruktor:

  ```js
  const sum = new Function("a", "b", "return a + b");
  ```

- Das Zeichenfolgenargument für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval):

  ```js
  setTimeout("console.log('hello from setTimeout')", 1);
  ```

Das Schlüsselwort `unsafe-eval` kann verwendet werden, um dieses Verhalten zu überschreiben, und aus den gleichen Gründen wie bei `unsafe-inline`: **Entwickler sollten `unsafe-eval` vermeiden**. Manchmal kann es schwierig sein, die Verwendung von `eval()` zu entfernen: In diesen Situationen kann die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) es sicherer machen, indem sie sicherstellt, dass die Eingabe einer definierten Richtlinie entspricht.

Anders als `unsafe-inline` funktioniert das Schlüsselwort `unsafe-eval` weiterhin in einer Direktive, die Nonce- oder Hash-Ausdrücke enthält.

### Strikte CSP

Um das Laden von Skripten als Schutzmaßnahme gegen XSS zu kontrollieren, wird empfohlen, [nonce-](#nonces) oder [hash-](#hashes) basierte Fetch-Direktiven zu verwenden. Dies wird als _strikte CSP_ bezeichnet. Diese Art von CSP hat zwei Hauptvorteile gegenüber einer standortbasierten CSP (üblicherweise als _Erlaubnisliste CSP_ bezeichnet):

- Erlaubnislisten-CSPs sind schwer richtig zu implementieren und oft erlauben Richtlinien versehentlich unsichere Domains, und bieten daher keinen wirksamen Schutz gegen XSS (siehe [CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)).
- Erlaubnislisten-CSPs können sehr umfangreich und schwer zu warten sein, insbesondere wenn Skripte verwendet werden, die außerhalb Ihrer Kontrolle liegen. Laut [How I learned to stop worrying and love the Content Security Policy](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/), um Google Analytics zu integrieren, wird einem Entwickler empfohlen, 187 Google-Domains zur Erlaubnisliste hinzuzufügen.

Eine Nonce-basierte strikte CSP sieht so aus:

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

In diesem CSP haben wir:

- Nonces verwendet, um zu kontrollieren, welche JavaScript-Ressourcen geladen werden dürfen
- alle Objekteingaben blockiert
- alle Verwendungen des `<base>`-Elements zur Festlegung einer Basis-URI blockiert.

Eine Hash-basierte strikte CSP ist identisch, außer dass sie Hashes anstelle von Nonces verwendet:

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

Nonce-basierte Direktiven sind einfacher zu warten, wenn Sie in der Lage sind, Antworten, einschließlich des Inhalts selbst, dynamisch zu generieren. Ansonsten müssen Sie Hash-basierte Direktiven verwenden. Das Problem mit Hash-basierten Direktiven ist, dass Sie den Hash neu berechnen und anwenden müssen, wenn Änderungen am Skriptinhalt vorgenommen werden.

#### Das `strict-dynamic` Schlüsselwort

Wie oben präsentiert, ist die strikte CSP schwierig zu implementieren, wenn Sie Skripte verwenden, die nicht unter Ihrer Kontrolle stehen. Wenn ein Drittanbieter-Skript zusätzliche Skripte lädt oder Inline-Skripte verwendet, dann schlägt dies fehl, da das Drittanbieter-Skript den Nonce oder Hash nicht weitergibt.

Das `strict-dynamic`-Schlüsselwort wird bereitgestellt, um bei diesem Problem zu helfen. Es ist ein Schlüsselwort, das in einer Fetch-Direktive enthalten sein kann und die Wirkung hat, dass wenn ein Skript einen Nonce oder einen Hash angehängt hat, dann wird diesem Skript erlaubt, weitere Skripte zu laden, die selbst keinen Nonce oder Hash haben. Das heißt, das Vertrauen, das in ein Skript durch einen Nonce oder Hash gesetzt wird, wird an Skripte weitergegeben, die das ursprüngliche Skript lädt (und Skripte, die _sie_ laden, und so weiter).

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

Es enthält ein Skript "main.js", das ein anderes Skript "main2.js" erstellt und hinzufügt:

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

Das "main.js"-Skript wird zugelassen, weil sein Hash mit dem Wert in der CSP übereinstimmt. Aber sein Versuch, "main2.js" zu laden, schlägt fehl.

Wenn wir `'strict-dynamic'` zur CSP hinzufügen, dann darf "main.js" "main2.js" laden:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  strict-dynamic
```

Das `'strict-dynamic'`-Schlüsselwort macht es wesentlich einfacher, Nonce- oder Hash-basierte CSPs zu erstellen und zu pflegen, insbesondere wenn eine Website Drittanbieter-Skripte verwendet. Dies macht Ihre CSP jedoch weniger sicher, da, wenn die Skripte, die Sie einbeziehen, `<script>`-Elemente basierend auf potenziellen XSS-Quellen erstellen, die CSP diese nicht schützt.

#### Refactoring von Inline-JavaScript und `eval()`

Wir haben oben gesehen, dass Inline-JavaScript standardmäßig in einer CSP nicht zugelassen ist. Mit Nonces oder Hashes kann ein Entwickler Inline-`<script>`-Tags verwenden, aber dennoch müssen Sie den Code umgestalten, um andere unzulässige Muster zu entfernen, wie zum Beispiel Inline-Ereignis-Handler, `javascript:`-URLs und die Verwendung von `eval()`. Zum Beispiel sollten Inline-Ereignis-Handler in der Regel durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ersetzt werden:

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

Die [`frame-ancestors`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)-Direktive kann verwendet werden, um zu steuern, welche Dokumente, falls überhaupt, dieses Dokument in einem verschachtelten Browsing-Kontext wie einem {{htmlelement("iframe")}} einbetten dürfen. Dies ist ein wirksamer Schutz gegen Clickjacking-Angriffe, da diese Angriffe davon abhängen, die Zielseite in einer vom Angreifer kontrollierten Website einzubetten.

Die Syntax von `frame-ancestors` ist ein Subset der Fetch-Direktiv-Syntax: Sie können den einzelnen Schlüsselwortwert `'none'` oder einen oder mehrere Quell-Ausdrücke angeben. Allerdings können die einzigen Quell-Ausdrücke, die Sie verwenden können, Schemas, Hostnamen oder das Schlüsselwort `'self'` sein.

Wenn Ihre Seite nicht eingebettet werden muss, sollten Sie `frame-ancestors` auf `'none'` setzen:

```http
Content-Security-Policy: frame-ancestors 'none'
```

Diese Direktive ist ein flexiblerer Ersatz für den {{httpheader("X-Frame-Options")}}-Header.

## Upgrade unsicherer Anfragen

Webentwickler werden dringend dazu ermutigt, alle ihre Inhalte über HTTPS bereitzustellen. Im Prozess der Umstellung einer Website auf HTTPS dient eine Seite manchmal das Hauptdokument über HTTPS aus, während ihre Ressourcen über HTTP bereitgestellt werden, indem sie beispielsweise Markup wie dieses verwenden:

```html
<script src="http://example.org/my-cat.js"></script>
```

Dies wird als _Mixed Content_ bezeichnet und das Vorhandensein unsicherer Ressourcen schwächt den durch HTTPS gewährten Schutz erheblich. Nach dem von Browsern implementierten [Mixed Content-Algorithmus](/de/docs/Web/Security/Mixed_content) wird unsicherer Inhalt, wenn ein Dokument über HTTPS bereitgestellt wird, in "upgradable content" und "blockable content" kategorisiert. Upgradable content wird auf HTTPS aufgerüstet, und blockable content wird blockiert, was möglicherweise die Seite funktionsunfähig macht.

Die ultimative Lösung für Mixed Content ist, dass Entwickler alle Ressourcen über HTTPS laden. Aber selbst wenn eine Seite in der Lage ist, alle Inhalte über HTTPS bereitzustellen, kann es für einen Entwickler immer noch sehr schwierig sein (oder sogar effektiv unmöglich, wenn es um archivierte Inhalte geht), alle von der Seite verwendeten URLs zum Laden von Ressourcen umzuschreiben.

Die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests)-Direktive soll dieses Problem lösen. Diese Direktive hat keinen Wert: Um sie zu setzen, geben Sie einfach den Direktivennamen ein:

```http
Content-Security-Policy: upgrade-insecure-requests
```

Wenn diese Direktive für ein Dokument gesetzt ist, wird der Browser automatisch alle HTTP-URLs in folgenden Fällen auf HTTPS upgraden:

- Anfragen, um Ressourcen zu laden (wie Bilder, Skripte oder Schriftarten)
- Navigationsanforderungen (wie Linkziele), die dieselbe Herkunft wie das Dokument haben
- Navigationsanforderungen in verschachtelten Browsing-Kontexten wie iframes
- Formulareinsendungen

Allerdings werden Top-Level-Navigationsanforderungen, deren Ziel eine andere Herkunft ist, nicht aufgerüstet.

Angenommen, das Dokument unter `https://example.org` wird mit einer CSP geliefert, die die `upgrade-insecure-requests`-Direktive enthält, und das Dokument enthält ein Markup wie dieses:

```html
<script src="http://example.org/my-cat.js"></script>
<script src="http://not-example.org/another-cat.js"></script>
```

Der Browser wird beide Anfragen automatisch auf HTTPS upgraden.

Angenommen, das Dokument enthält auch Folgendes:

```html
<a href="http://example.org/more-cats">See some more cats!</a>
<a href="http://not-example.org/even-more-cats">More cats, on another site!</a>
```

Der Browser wird den ersten Link auf HTTPS upgraden, aber nicht den zweiten, da er sich zu einer anderen Herkunft bewegt.

Diese Direktive ist kein Ersatz für den {{httpheader("Strict-Transport-Security")}}-Header (auch bekannt als HSTS), da sie keine externen Links zu einer Site aufrüstet. Seiten sollten diese Direktive sowie den `Strict-Transport-Security`-Header einbeziehen.

## Testen Ihrer Richtlinie

Um die Bereitstellung zu erleichtern, kann CSP im "report-only"-Modus bereitgestellt werden.
Die Richtlinie wird nicht durchgesetzt, aber alle Verstöße werden an den in der Richtlinie angegebenen Reporting-Endpunkt gesendet. Zusätzlich kann ein report-only-Header verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich bereitzustellen.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header verwenden, um Ihre Richtlinie anzugeben, wie folgt:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header als auch ein {{HTTPHeader("Content-Security-Policy")}}-Header in derselben Antwort vorhanden sind, werden beide Richtlinien beachtet.
Die Richtlinie, die in den `Content-Security-Policy`-Headern angegeben ist, wird durchgesetzt, während die `Content-Security-Policy-Report-Only`-Richtlinie Berichte generiert, aber nicht durchgesetzt wird.

Beachten Sie, dass eine report-only-Richtlinie im Gegensatz zu einer normalen Content Security Policy nicht in einem `<meta>`-Element geliefert werden kann.

### Verstoßberichterstattung

Die empfohlene Methode zur Berichterstattung von CSP-Verstößen ist die Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API), wobei Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} deklariert und einer dieser Punkte als CSP-Berichtsziele verwendet wird, mittels der {{CSP("report-to")}}-Direktive des `Content-Security-Policy`-Headers.

> [!WARNING]
> Sie können auch die CSP-{{CSP("report-uri")}}-Direktive verwenden, um eine Ziel-URL für CSP-Verstoßberichte anzugeben.
> Dies sendet ein etwas anderes JSON-Berichtsformat über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`.
> Dieser Ansatz wird als veraltet angesehen, aber Sie sollten beide verwenden, bis {{CSP("report-to")}} in allen Browsern unterstützt wird.
> Für weitere Informationen über den Ansatz siehe das Thema {{CSP("report-uri")}}.

Ein Server kann die Clients darüber informieren, wo Berichte gesendet werden sollen, indem er den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header verwendet.
Dieser Header definiert eine oder mehrere Endpunkt-URLs als kommaseparierte Liste.
Zum Beispiel kann die Antwort des Servers folgendermaßen aussehen, um einen Reporting-Endpunkt namens `csp-endpoint` zu definieren, der Berichte an `https://example.com/csp-reports` akzeptiert:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die unterschiedliche Arten von Berichten bearbeiten, würden Sie sie wie folgt angeben:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Sie können dann die {{CSP("report-to")}}-Direktive des `Content-Security-Policy`-Headers verwenden, um anzugeben, dass ein bestimmter definierter Endpunkt für die Berichterstattung verwendet werden soll.
Zum Beispiel, um CSP-Verstoßberichte an `https://example.com/csp-reports` für den `default-src` zu senden, könnten Sie Antwort-Header verwenden, die folgendermaßen aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn ein CSP-Verstoß auftritt, sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt über eine HTTP-`POST`-Operation, mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`.
Der Bericht ist eine serialisierte Form des [`Report`](/de/docs/Web/API/Report)-Objekts, das eine `type`-Eigenschaft mit einem Wert von `"csp-violation"` und einen `body`, der die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist, enthält.

Ein typisches Objekt könnte folgendermaßen aussehen:

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
Der Server, der diese Anfragen behandelt, kann dann die eingehenden Berichte in einer Weise speichern oder verarbeiten, die am besten zu Ihren Anforderungen passt.

## Siehe auch

- [Mitigieren von Cross-Site Scripting mit einer strikten Content Security Policy](https://web.dev/articles/strict-csp) auf web.dev (2024)
- [Content Security Policy: Ein erfolgreicher Mischmasch zwischen Härtung und Abschwächung](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) auf owasp.org
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
