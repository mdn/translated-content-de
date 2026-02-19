---
title: Content Security Policy (CSP)
slug: Web/HTTP/Guides/CSP
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

**Content Security Policy** (CSP) ist ein Feature, das hilft, das Risiko bestimmter Arten von Sicherheitsbedrohungen zu verhindern oder zu minimieren. Es besteht aus einer Reihe von Anweisungen von einer Website an einen Browser, die diesem vorschreiben, Einschränkungen für die Dinge zu setzen, die der Code der Seite ausführen darf.

Der primäre Anwendungsfall für CSP ist die Kontrolle darüber, welche Ressourcen, insbesondere JavaScript-Ressourcen, ein Dokument laden darf. Dies wird hauptsächlich als Schutz gegen {{Glossary("cross-site_scripting", "Cross-Site Scripting")}} (XSS)-Angriffe verwendet, bei denen ein Angreifer bösartigen Code in die Seite des Opfers einschleusen kann.

Eine CSP kann auch andere Zwecke erfüllen, wie beispielsweise den Schutz vor [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und die Unterstützung der Sicherstellung, dass die Seiten einer Website über HTTPS geladen werden.

In diesem Leitfaden beginnen wir damit, zu beschreiben, wie eine CSP an einen Browser übermittelt wird und wie sie auf einer hohen Ebene aussieht.

Dann beschreiben wir, wie sie verwendet werden kann, um:

1. [Kontrollieren, welche Ressourcen geladen werden](#kontrolle_von_ressourcenladevorgängen), um XSS zu verhindern.
2. [Einbettung einschränken](#clickjacking-schutz), um Clickjacking zu verhindern.
3. [Unsichere Anfragen aktualisieren](#aktualisieren_unsicherer_anfragen), um sicherzustellen, dass alle Ressourcen über HTTPS bereitgestellt werden.
4. [Die Verwendung von vertrauenswürdigen Typen verlangen](#vertrauenswürdige_typen_verlangen), um Client-seitiges XSS abzuwehren.

Beachten Sie, dass es keine Abhängigkeit zwischen den verschiedenen Anwendungsfällen gibt: Wenn Sie Clickjacking-Schutz hinzufügen möchten, aber keine XSS-Abwehr, können Sie einfach die Direktiven für diesen Anwendungsfall hinzufügen.

Abschließend beschreiben wir [Strategien zur Einführung einer CSP](#testen_ihrer_richtlinie) und Werkzeuge, die diesen Prozess erleichtern können.

## CSP-Überblick

Eine CSP sollte im {{httpheader("Content-Security-Policy")}} Antwort-Header an den Browser übermittelt werden. Sie sollte bei allen Antworten auf alle Anfragen gesetzt werden, nicht nur beim Hauptdokument.

Sie können sie auch mit dem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) Attribut des {{htmlelement("meta")}} Elements Ihres Dokuments angeben, was für einige Anwendungsfälle nützlich ist, wie etwa ein clientseitig gerendertes {{Glossary("SPA", "Single Page App")}}, das nur statische Ressourcen hat, da Sie so vermeiden können, auf irgendwelche Serverinfrastruktur angewiesen zu sein. Diese Option unterstützt jedoch nicht alle CSP-Funktionen.

Die Richtlinie wird als eine Reihe von _Direktiven_ angegeben, getrennt durch Semikolons. Jede Direktive kontrolliert einen anderen Aspekt der Sicherheitsrichtlinie. Jede Direktive besteht aus einem Namen, gefolgt von einem Leerzeichen und einem Wert. Unterschiedliche Direktiven können unterschiedliche Syntaxen haben.

Zum Beispiel betrachten wir die folgende CSP:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

Sie setzt zwei Direktiven:

- die `default-src` Direktive ist auf `'self'` gesetzt
- die `img-src` Direktive ist auf `'self' example.com` gesetzt.

![Eine CSP aufgeteilt in ihre Direktiven.](csp-overview.svg)

Die erste Direktive, `default-src`, weist den Browser an, nur Ressourcen zu laden, die dieselbe Herkunft wie das Dokument haben, es sei denn, andere spezifischere Direktiven setzen eine andere Richtlinie für andere Ressourcentypen. Die zweite, `img-src`, weist den Browser an, Bilder zu laden, die dieselbe Herkunft haben oder von `example.com` bereitgestellt werden.

Im nächsten Abschnitt betrachten wir die Werkzeuge zur Kontrolle von Ressourcenladevorgängen, was die Hauptfunktion einer CSP darstellt.

## Kontrolle von Ressourcenladevorgängen

Eine CSP kann verwendet werden, um die Ressourcen zu kontrollieren, die ein Dokument laden darf. Dies wird primär zum Schutz vor Cross-Site Scripting (XSS)-Angriffen eingesetzt.

In diesem Abschnitt werden wir zuerst sehen, wie die Kontrolle von Ressourcenladevorgängen helfen kann, XSS zu verhindern, und dann die Werkzeuge betrachten, die CSP bereitstellt, um zu kontrollieren, welche Ressourcen geladen werden. Schließlich beschreiben wir eine spezielle empfohlene Strategie, die als "Strikte CSP" bezeichnet wird.

### XSS und Ressourcenladevorgänge

Ein Cross-Site Scripting (XSS)-Angriff ist einer, bei dem ein Angreifer in der Lage ist, seinen Code im Kontext der Zielwebsite auszuführen. Dieser Code kann dann alles tun, was auch der eigene Code der Website könnte, einschließlich zum Beispiel:

- den Inhalt der geladenen Seiten der Website zuzugreifen oder zu modifizieren
- auf Inhalte im lokalen Speicher zuzugreifen oder diese zu modifizieren
- HTTP-Anfragen mit den Berechtigungen des Benutzers zu stellen, was es dem Angreifer ermöglicht, den Benutzer zu täuschen oder auf sensible Daten zuzugreifen

Ein XSS-Angriff ist möglich, wenn eine Website einige Eingaben akzeptiert, die von einem Angreifer erstellt worden sein könnten (zum Beispiel URL-Parameter oder ein Kommentar zu einem Blog-Post), und diese dann in die Seite einfügt, ohne sie zu _zu bereinigen_: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausgeführt werden können.

Websites sollten sich durch Bereinigung dieser Eingaben vor XSS schützen, bevor sie sie in die Seite einfügen.

> [!NOTE]
> Eine CSP kann tatsächlich auf zwei verschiedene Arten helfen, sich vor XSS zu schützen:
>
> - Sie kann sicherstellen, dass Eingaben bereinigt werden, bevor sie auf dem Client verwendet werden: wir besprechen dies später im Abschnitt [Vertrauenswürdige Typen verlangen](#vertrauenswürdige_typen_verlangen).
> - Durch Kontrolle der Ressourcenladevorgänge kann eine CSP einen Schutz in der Tiefe gegen XSS bieten und die Website selbst dann schützen, wenn die Bereinigung fehlschlägt. Dies ist die XSS-Abwehr, die wir in diesem Abschnitt diskutieren werden.

Wenn die Bereinigung fehlschlägt, gibt es verschiedene Formen, die der injizierte bösartige Code im Dokument annehmen kann, einschließlich:

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

- Ein Inline-Ereignishandler:

  ```html
  <img
    onmouseover="console.log(`You've been hacked!`)"
    src="thumbnail.jpg"
    alt="" />
  ```

- Eine `javascript:` URL:

  ```html
  <iframe src="javascript:console.log(`You've been hacked!`)"></iframe>
  ```

- Ein String-Argument für eine unsichere API wie [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval):

  ```js
  eval("console.log(`You've been hacked!`)");
  ```

Durch die Kontrolle von Ressourcenladevorgängen kann eine CSP Schutz gegen all dies bieten. Mit einer CSP können Sie:

- die erlaubten Quellen für JavaScript-Dateien und andere Ressourcen festlegen und effektiv Ladevorgänge von `https://evil.example.com` blockieren
- inline Skript-Tags deaktivieren
- nur Skript-Tags zulassen, die den richtigen {{Glossary("Nonce", "Nonce")}} oder Hash gesetzt haben
- Inline-Ereignishandler deaktivieren
- `javascript:` URLs deaktivieren
- gefährliche APIs wie `eval()` deaktivieren

Im nächsten Abschnitt werden wir die Werkzeuge betrachten, die CSP zur Verfügung stellt, um diese Dinge zu tun.

> [!NOTE]
> Das Festlegen einer CSP ist kein Ersatz für die Bereinigung von Eingaben. Websites sollten Eingaben bereinigen _und_ eine CSP setzen, um einen Schutz in der Tiefe gegen XSS zu bieten.

### Fetch-Direktiven

Fetch-Direktiven werden verwendet, um eine bestimmte Kategorie von Ressourcen anzugeben, die ein Dokument laden darf — wie JavaScript, CSS-Stylesheets, Bilder, Schriftarten usw.

Es gibt verschiedene Fetch-Direktiven für unterschiedliche Arten von Ressourcen. Zum Beispiel:

- [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) legt erlaubte Quellen für JavaScript fest.
- [`style-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) legt erlaubte Quellen für CSS-Stylesheets fest.
- [`img-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) legt erlaubte Quellen für Bilder fest.

Eine spezielle Fetch-Direktive ist `default-src`, die eine Fallback-Richtlinie für alle Ressourcen festlegt, deren Direktiven nicht explizit aufgelistet sind.

Für die vollständige Sammlung von Fetch-Direktiven siehe die [Referenzdokumentation](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directives).

Jede Fetch-Direktive wird entweder als einzelnes Schlüsselwort `'none'` oder als eine oder mehrere _Quellausdrücke_, getrennt durch Leerzeichen, spezifiziert. Wenn mehr als ein Quellausdruck aufgeführt ist: Wenn eine der Methoden die Ressource erlaubt, wird die Ressource zugelassen.

Zum Beispiel setzt die folgende CSP zwei Fetch-Direktiven:

- `default-src` erhält den Einzel-Quellausdruck `'self'`
- `img-src` erhält zwei Quellausdrücke: `'self'` und `example.com`

![CSP-Diagramm, das Quellausdrücke zeigt](csp-source-expressions.svg)

Die Wirkung davon ist, dass:

- Bilder entweder von der gleichen Herkunft wie das Dokument stammen oder von `example.com` geladen werden müssen
- alle anderen Ressourcen von derselben Herkunft wie das Dokument stammen müssen.

In den folgenden Abschnitten beschreiben wir einige der Möglichkeiten, wie Sie Quellausdrücke verwenden können, um Ressourcenladevorgänge zu kontrollieren. Beachten Sie, dass, obwohl wir sie separat beschreiben, diese Ausdrücke im Allgemeinen kombiniert werden können: Beispielsweise kann eine einzelne Fetch-Direktive Nonces sowie Hostnamen enthalten.

#### Ressourcen blockieren

Um eine Ressourcentype vollständig zu blockieren, verwenden Sie das Schlüsselwort `'none'`. Zum Beispiel blockiert die folgende Direktive alle {{htmlelement("object")}} und {{htmlelement("embed")}} Ressourcen:

```http
Content-Security-Policy: object-src 'none'
```

Beachten Sie, dass `'none'` nicht mit einer anderen Methode in einer bestimmten Direktive kombiniert werden darf: In der Praxis, wenn andere Quellausdrücke zusammen mit `'none'` angegeben werden, werden sie ignoriert.

#### Nonces

Ein `nonce` ist der empfohlene Ansatz, um das Laden von {{htmlelement("script")}} und {{htmlelement("style")}} Ressourcen einzuschränken.

Mit einem Nonce generiert der Server für jede HTTP-Antwort einen Zufallswert und fügt ihn in eine `script-src` und/oder eine `style-src` Direktive ein:

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server fügt dann diesen Wert als Wert des `nonce` Attributs für alle `<script>` und/oder `<style>` Tags ein, die sie im Dokument beabsichtigen, einzuschließen.

Der Browser vergleicht die beiden Werte und lädt die Ressource nur, wenn sie übereinstimmen. Die Idee ist, dass selbst wenn ein Angreifer etwas JavaScript in die Seite einfügen kann, sie nicht wissen, welchen Nonce der Server verwendet, sodass der Browser das Skript nicht ausführt.

Damit dieser Ansatz funktioniert, darf es nicht möglich sein, dass ein Angreifer den Nonce errät.

**In der Praxis bedeutet das, dass der Nonce für jede HTTP-Antwort unterschiedlich sein muss und nicht vorhersagbar sein darf.**

Dies bedeutet wiederum, dass der Server kein statisches HTML bereitstellen kann, da er jedes Mal einen neuen Nonce einfügen muss. Normalerweise würde der Server eine Templating-Engine verwenden, um den Nonce einzufügen.

Hier ist ein Ausschnitt aus [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) Code, um dies zu demonstrieren:

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

- für jede Anfrage einen neuen Nonce generiert
- Nonces sowohl mit externen als auch Inline-Skripten verwenden kann
- den gleichen Nonce für alle `<script>` Tags im Dokument verwendet

Es ist wichtig, dass der Server eine Art Templating benutzt, um Nonces einzufügen, und sie nicht einfach in alle `<script>` Tags einfügt: sonst könnte der Server versehentlich Nonces in Skripte einfügen, die von einem Angreifer eingeschleust wurden.

Beachten Sie, dass Nonces nur für Elemente verwendet werden können, die ein `nonce` Attribut haben: das heißt, nur `<script>` und `<style>` Elemente.

#### Hashes

Fetch-Direktiven können auch einen Hash des Skripts verwenden, um seine Integrität zu garantieren. Bei dieser Methode:

1. berechnet der Server einen Hash der Skriptinhalte mit einer {{Glossary("hash_function", "Hash-Funktion")}} (eine von SHA-256, SHA-384 oder SHA-512)
2. erstellt er eine {{Glossary("Base64", "Base64")}} Kodierung des Ergebnisses
3. fügt er einen Präfix hinzu, der den verwendeten Hash-Algorithmus identifiziert (einer von `sha256-`, `sha384-` oder `sha512-`).

Dann fügt er das Ergebnis der Direktive hinzu:

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

Wenn der Browser das Dokument erhält, hasht er das Skript, vergleicht das Ergebnis mit dem Wert aus dem Header und lädt das Skript nur, wenn sie übereinstimmen.

Externe Skripten müssen auch das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut enthalten, damit diese Methode funktioniert.

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

Beachten Sie, dass:

- Wir haben einen separaten Hash für jedes Skript im Dokument.
- Für das externe Skript "main.js" fügen wir auch das `integrity` Attribut hinzu und geben ihm den gleichen Wert.
- Im Gegensatz zum Beispiel mit Nonces können sowohl die CSP als auch der Inhalt statisch sein, da sich die Hashes nicht ändern. Dies macht Hash-basierte Richtlinien besser geeignet für statische Seiten oder Websites, die auf clientseitigem Rendering beruhen.

#### Schema-basierte Richtlinien

Fetch-Direktiven können ein Schema auflisten, wie `https:`, um Ressourcen zuzulassen, die über dieses Schema bereitgestellt werden. Dies erlaubt es einer Richtlinie beispielsweise, HTTPS für alle Ressourcenladevorgänge zu verlangen:

```http
Content-Security-Policy: default-src https:
```

#### Ortsbasierte Richtlinien

Fetch-Direktiven können Ressourcenladevorgänge basierend auf dem Ort, an dem sich die Ressource befindet, kontrollieren.

Das Schlüsselwort `'self'` erlaubt Ressourcen, die vom selben Ursprung wie das Dokument selbst stammen:

```http
Content-Security-Policy: img-src 'self'
```

Sie können auch einen oder mehrere Hostnamen angeben, möglicherweise mit Wildcards, und nur Ressourcen, die von diesen Hosts bereitgestellt werden, sind erlaubt. Dies könnte beispielsweise verwendet werden, um Inhalte zuzulassen, die von einem vertrauenswürdigen CDN bereitgestellt werden.

```http
Content-Security-Policy: img-src *.example.org
```

Sie können mehrere Standorte angeben. Die folgende Direktive erlaubt nur Bilder, die vom selben Ursprung wie das aktuelle Dokument stammen, oder von einer Subdomain von "example.org", oder von "example.com" bereitgestellt werden:

```http
Content-Security-Policy: img-src 'self' *.example.org  example.com
```

#### Inline-JavaScript

Wenn eine CSP entweder eine `default-src` oder eine `script-src` Direktive enthält, dann darf Inline-JavaScript nicht ausgeführt werden, es sei denn, es werden zusätzliche Maßnahmen getroffen, um es zu ermöglichen. Dies schließt ein:

- JavaScript, das in einem `<script>` Element auf der Seite enthalten ist:

  ```html
  <script>
    console.log("Hello from an inline script");
  </script>
  ```

- JavaScript in einem Inline-Ereignishandlerattribut:

  ```html
  <img src="x" onerror="console.log('Hello from an inline event handler')" />
  ```

- JavaScript in einer `javascript:` URL:

  ```html
  <a href="javascript:console.log('Hello from a javascript: URL')">Click me</a>
  ```

Das Schlüsselwort `unsafe-inline` kann verwendet werden, um diese Einschränkung zu überschreiben. Zum Beispiel erfordert die folgende Direktive, dass alle Ressourcen vom selben Ursprung stammen, erlaubt jedoch Inline-JavaScript:

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es den Zweck einer CSP weitgehend untergräbt. Inline-JavaScript ist einer der häufigsten XSS-Vektoren, und eines der wesentlichen Ziele einer CSP ist es, seine unkontrollierte Verwendung zu verhindern.

Inline `<script>` Elemente sind erlaubt, wenn sie durch einen Nonce oder einem Hash geschützt sind, wie oben beschrieben.

Wenn eine Direktive Nonce- oder Hash-Ausdrücke enthält, wird das `unsafe-inline` Schlüsselwort von Browsern ignoriert.

#### `eval()` und ähnliche APIs

Wie Inline-JavaScript, wenn eine CSP entweder eine `default-src` oder eine `script-src` Direktive enthält, dann sind `eval()` und ähnliche APIs nicht erlaubt auszuführen. Dies schließt unter anderem folgende APIs ein:

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

Das Schlüsselwort `unsafe-eval` kann verwendet werden, um dieses Verhalten zu überschreiben, und ebenso wie `unsafe-inline`, und aus den gleichen Gründen: **Entwickler sollten `unsafe-eval` vermeiden**.

Manchmal kann es schwierig sein, Verwendungen von `eval()` und den anderen Methoden zu entfernen: In diesen Situationen kann die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) es sicherer machen, indem sichergestellt wird, dass die Eingabe einer definierten Richtlinie entspricht.
Das `trusted-types-eval` Schlüsselwort sollte verwendet werden, um das Verhalten in diesem Fall zu überschreiben.
Im Gegensatz zu `unsafe-inline` überschreibt es nur das Verhalten im Browser, wenn vertrauenswürdige Typen unterstützt und aktiviert sind; dies stellt sicher, dass die Methoden auf Browsern blockiert bleiben, die keine vertrauenswürdigen Typen unterstützen.

Im Gegensatz zu `unsafe-inline` funktioniert das `unsafe-eval` Schlüsselwort auch in einer Direktive, die Nonce- oder Hash-Ausdrücke enthält.

### Strikte CSP

Um das Laden von Skripten als Abwehrmaßnahme gegen XSS zu kontrollieren, wird empfohlen, [nonce-](#nonces) oder [hash-](#hashes) basierte Fetch-Direktiven zu verwenden. Dies wird als _strikte CSP_ bezeichnet. Dieser CSP-Typ hat zwei Hauptvorteile gegenüber einer ortsbasierten CSP (in der Regel als _Whitelist-CSP_ bezeichnet):

- Whitelist-CSPs sind schwer richtig zu machen und oft weißen Richtlinien versehentlich unsichere Domains auf die Whitelist, und bieten somit keinen effektiven Schutz gegen XSS (siehe [CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)).
- Whitelist-CSPs können sehr umfangreich und schwer zu pflegen sein, insbesondere bei der Verwendung von Skripten, die sich außerhalb Ihrer Kontrolle befinden. Laut [How I learned to stop worrying and love the Content Security Policy](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/), wird ein Entwickler, nur um Google Analytics zu integrieren, aufgefordert, 187 Google-Domains zur Whitelist hinzuzufügen.

Eine nonce-basierte strikte CSP sieht so aus:

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

In dieser CSP verwenden wir:

- Nonces, um zu kontrollieren, welche JavaScript-Ressourcen geladen werden dürfen
- blockieren alle Objekt-Embeds
- blockieren alle Verwendungen des `<base>` Elements, um eine Basis-URI festzulegen.

Eine hash-basierte strikte CSP ist die gleiche, außer dass sie Hashes anstelle von Nonces verwendet:

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

Nonce-basierte Direktiven sind einfacher zu warten, wenn Sie Antworten, einschließlich des Inhalts selbst, dynamisch generieren können. Andernfalls müssen Sie hash-basierte Direktiven verwenden. Das Problem bei hash-basierten Direktiven ist, dass Sie den Hash neu berechnen und erneut anwenden müssen, wenn Änderungen an den Skriptinhalten vorgenommen werden.

#### Das `strict-dynamic` Schlüsselwort

Wie oben gezeigt, ist die strikte CSP schwierig zu implementieren, wenn Sie Skripte verwenden, die nicht unter Ihrer Kontrolle stehen. Wenn ein Drittanbieter-Skript zusätzliche Skripte lädt oder Inline-Skripte verwendet, schlägt dies fehl, da das Drittanbieter-Skript den Nonce oder Hash nicht weiterleitet.

Das `strict-dynamic` Schlüsselwort wurde bereitgestellt, um dieses Problem zu lösen. Es ist ein Schlüsselwort, das in eine Fetch-Direktive eingeschlossen werden kann und bewirkt, dass wenn ein Skript einen Nonce oder einen Hash aufweist, dann darf dieses Skript weitere Skripte laden, die selbst keine Nonces oder Hashes haben. Das bedeutet, dass das Vertrauen, das in ein Skript durch einen Nonce oder Hash gesetzt wird, auf die Skripte übertragen wird, die das ursprüngliche Skript lädt (und die Skripte, die _sie_ laden, und so weiter).

Zum Beispiel betrachten wir ein Dokument wie dieses:

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

Es beinhaltet ein Skript "main.js", das ein weiteres Skript "main2.js" erstellt und hinzufügt:

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

Das Skript "main.js" darf geladen werden, weil sein Hash dem Wert in der CSP entspricht. Aber sein Versuch, "main2.js" zu laden, wird fehlschlagen.

Wenn wir `'strict-dynamic'` zur CSP hinzufügen, darf "main.js" "main2.js" laden:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  'strict-dynamic'
```

Das `'strict-dynamic'` Schlüsselwort erleichtert das Erstellen und Pflegen von Nonce- oder Hash-basierten CSPs erheblich, insbesondere wenn eine Website Skripte von Drittanbietern verwendet. Es macht Ihre CSP jedoch weniger sicher, da, wenn die Skripte, die Sie einfügen, `<script>` Elemente basierend auf potenziellen XSS-Quellen erstellen, die CSP sie nicht schützt.

#### Refactoring von Inline-JavaScript und `eval()`

Wie oben gezeigt, wird Inline-JavaScript standardmäßig in einer CSP nicht erlaubt. Mit Nonces oder Hashes kann ein Entwickler Inline `<script>` Tags verwenden, aber Sie müssen dennoch Code umgestalten, um andere unzulässige Muster, einschließlich Inline-Ereignishandler, `javascript:` URLs und Verwendungen von `eval()` zu entfernen. Beispielsweise sollten Inline-Ereignishandler normalerweise durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ersetzt werden:

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

Die [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) Direktive kann verwendet werden, um zu kontrollieren, welche Dokumente, falls vorhanden, dieses Dokument in einem eingebetteten Browsing-Kontext wie einem {{htmlelement("iframe")}} einbetten dürfen. Dies ist ein wirksamer Schutz gegen Clickjacking-Angriffe, da diese Angriffe vom Einbetten der Ziel-Website in eine vom Angreifer kontrollierte Site abhängen.

Die Syntax von `frame-ancestors` ist ein Subset der Fetch-Direktiv-Syntax: Sie können den einzelnen Schlüsselwortwert `'none'` oder ein oder mehrere Quellausdrücke angeben. Allerdings sind die einzigen Quellausdrücke, die Sie verwenden können, Schemas, Hostnamen oder der `'self'` Schlüsselwortwert.

Sofern Ihre Site nicht einbettbar sein muss, sollten Sie `frame-ancestors` auf `'none'` setzen:

```http
Content-Security-Policy: frame-ancestors 'none'
```

Diese Direktive ist ein flexiblerer Ersatz für den {{httpheader("X-Frame-Options")}} Header.

## Aktualisieren unsicherer Anfragen

Webentwickler werden dringend ermutigt, alle ihre Inhalte über HTTPS bereitzustellen. Im Verlauf des Upgrades einer Site auf HTTPS dient eine Site manchmal das Hauptdokument über HTTPS, während sie ihre Ressourcen über HTTP bereitstellt, indem sie beispielsweise Markup wie dieses verwendet:

```html
<script src="http://example.org/my-cat.js"></script>
```

Dies wird als _Mixed Content_ bezeichnet, und die Präsenz unsicherer Ressourcen schwächt den durch HTTPS gebotenen Schutz erheblich. Unter dem von Browsern implementierten [Mixed Content-Algorithmus](/de/docs/Web/Security/Defenses/Mixed_content) wird, wenn ein Dokument über HTTPS bereitgestellt wird, unsichere Ressourcen als "aktualisierbare Inhalte" und "blockierbare Inhalte" kategorisiert. Aktualisierbare Inhalte werden auf HTTPS aktualisiert, und blockierbare Inhalte werden blockiert, was möglicherweise die Seite zerstört.

Die endgültige Lösung für Mixed Content besteht darin, dass Entwickler alle Ressourcen über HTTPS laden. Auch wenn eine Site tatsächlich alle Inhalte über HTTPS bereitstellen kann, kann es für einen Entwickler dennoch sehr schwierig (oder sogar praktisch unmöglich, wo archivierte Inhalte betroffen sind) sein, alle URLs der Site für das Laden von Ressourcen umzuschreiben.

Die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) Direktive soll dieses Problem lösen. Diese Direktive hat keinen Wert: Um sie zu setzen, müssen Sie nur den Direktivnamen einfügen:

```http
Content-Security-Policy: upgrade-insecure-requests
```

Wenn diese Direktive auf ein Dokument angewendet wird, wird der Browser alle HTTP-URLs in den folgenden Fällen automatisch auf HTTPS aktualisieren:

- Anfragen zum Laden von Ressourcen (wie Bilder, Skripte oder Schriften)
- Navigationsanfragen (wie Linkziele), die mit dem Dokument gleichherkunft sind
- Navigationsanfragen in eingebetteten Browsing-Kontexten, wie iframes
- Formularübermittlungen

Top-Level-Navigationsanfragen, deren Ziel ein anderer Ursprung ist, werden jedoch nicht aktualisiert.

Angenommen, das Dokument unter `https://example.org` wird mit einer CSP geliefert, die die `upgrade-insecure-requests` Direktive enthält, und das Dokument enthält Markup wie dieses:

```html
<script src="http://example.org/my-cat.js"></script>
<script src="http://not-example.org/another-cat.js"></script>
```

Der Browser aktualisiert automatisch beide dieser Anfragen zu HTTPS.

Angenommen, das Dokument enthält auch dies:

```html
<a href="http://example.org/more-cats">See some more cats!</a>
<a href="http://not-example.org/even-more-cats">More cats, on another site!</a>
```

Der Browser aktualisiert den ersten Link zu HTTPS, aber nicht den zweiten, da er zu einem anderen Ursprung navigiert.

Diese Direktive ist kein Ersatz für den {{httpheader("Strict-Transport-Security")}} Header (auch bekannt als HSTS), da sie keine externen Links zu einer Site aktualisiert. Sites sollten diese Direktive und den `Strict-Transport-Security` Header einschließen.

## Vertrauenswürdige Typen verlangen

Die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) und [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) Direktiven ermöglichen es Ihnen, sich gegen Client-seitige [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe zu verteidigen, indem sichergestellt wird, dass jede Eingabe vor der Übergabe an eine Webplattform-API, die sie ansonsten als Code ausführen könnte, durch eine Transformation zur Sicherheit führt.
Die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) und [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) Direktiven können verwendet werden, um die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) durchzusetzen.
Dies ermöglicht es Ihnen, sich gegen Client-seitige [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe zu verteidigen, indem gefordert wird, dass jede Eingabe durch eine Transformationsfunktion laufen muss, was die Gelegenheit bietet, sie sicher zu machen, bevor sie an eine Webplattform-API übergeben wird, die sie ansonsten als Code ausführen könnte.

### Injektions-Sinks und Bereinigung

Einige APIs in der Webplattform sind als _Injektions-Sinks_ bekannt. Dies sind APIs, die einige Eingaben in Form eines Strings erhalten können und diese Eingaben als Code interpretieren können. In diesem Leitfaden haben wir bereits `eval()` gesehen, aber es gibt viele andere Injektions-Sinks, wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`Document.write()`](/de/docs/Web/API/Document/write).

Wenn ein Angreifer Ihrer Website eine speziell angefertigte Eingabe zukommen lassen kann und Ihre Website diese an einen dieser Injektions-Sinks weiterleitet, kann der Angreifer bösartigen Code ausführen.

Einige Injektions-Sinks, wie `eval()`, sind sehr schwierig sicher zu verwenden, und wir haben gesehen, dass eine CSP sie typischerweise [vollständig blockiert](#eval_and_similar_apis). Andere können sicherer gemacht werden, wenn die Eingabe an sie so verarbeitet wird, dass unsichere Elemente entfernt werden. Diese Praxis wird _Bereinigung_ genannt (/de/docs/Web/Security/Attacks/XSS#sanitization).

### Die Trusted Types API

Mit der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) können Sie _vertrauenswürdige Typen_ statt Strings in Injektions-Sinks eintreten. Vertrauenswürdige Typen sind Objekte, die durch Weiterleitung potenziell gefährlicher Eingaben durch eine Transformationsfunktion entstehen. Diese Transformation bereinigt typischerweise die Eingaben, indem sie jegliche Elemente entfernt, die sie ausführbar machen könnten (wie z. B. {{htmlelement("script")}} Tags).

Standardmäßig konnte Ihr Code vertrauenswürdige Typen oder unbereinigte Strings an Injektions-Sinks weiterleiten. Wenn Sie jedoch die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) Direktive in Ihrer CSP einschließen und ihr den Wert `'script'` geben, dann ermöglicht der Browser Ihrer Site nur, vertrauenswürdige Typen an Injektions-Sinks zu übergeben. Zum Beispiel wirft der folgende Code eine Ausnahme:

```js example-bad
const possiblyXSS = "<p>I might be XSS</p>";
const target = document.querySelector("#target");

target.innerHTML = possiblyXSS;
// Will throw an exception if `require-trusted-types-for` is set
```

Vertrauenswürdige Typobjekte werden unter Verwendung eines benutzerdefinierten _Policy_ Objekts erstellt. Ihr Code kann jede Art von Policy-Objekt erstellen, auch solche, deren Transformationsfunktion die Eingabe nicht tatsächlich bereinigt und Sie daher nicht schützt. Um dieses Risiko zu minimieren, können Sie die [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) Direktive einschließen. Diese listet die Namen akzeptabler Richtlinien auf, und der Browser erlaubt nur die Verwendung der benannten Richtlinien.

## Testen Ihrer Richtlinie

Um die Einführung zu erleichtern, kann CSP im Report-Only-Modus bereitgestellt werden.
Die Richtlinie wird nicht durchgesetzt, aber Verstöße werden an den in der Richtlinie angegebenen Berichts-Endpunkt gesendet. Zusätzlich kann ein Report-Only-Header verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich einzuführen.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header verwenden, um Ihre Richtlinie festzulegen, wie dies:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header als auch ein {{HTTPHeader("Content-Security-Policy")}} Header in der gleichen Antwort vorhanden sind, werden beide Richtlinien berücksichtigt.
Die in den `Content-Security-Policy` Headern angegebene Richtlinie wird durchgesetzt, während die `Content-Security-Policy-Report-Only` Richtlinie Berichte generiert, aber nicht durchgesetzt wird.

Beachten Sie, dass im Gegensatz zu einer normalen Content-Security-Richtlinie eine Report-Only-Richtlinie nicht in einem `<meta>` Element bereitgestellt werden kann.

### Melden von Verstößen

Die empfohlene Methode zur Meldung von CSP-Verstößen ist die Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API), indem Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} deklariert und einer davon als Ziel für CSP-Meldungen im {{CSP("report-to")}} Direktive des `Content-Security-Policy`-Headers festgelegt wird.

> [!WARNING]
> Sie können auch die CSP {{CSP("report-uri")}} Direktive verwenden, um eine Ziel-URL für CSP-Verstoßmeldungen festzulegen.
> Dies sendet ein leicht abweichendes JSON-Berichtsformat über eine `POST` Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`.
> Dieses Vorgehen ist veraltet, aber Sie sollten beide deklarieren, bis {{CSP("report-to")}} in allen Browsern unterstützt wird.
> Für weitere Informationen zu diesem Ansatz siehe das Thema {{CSP("report-uri")}}.

Ein Server kann Clients über die {{HTTPHeader("Reporting-Endpoints")}} HTTP Response-Header informieren, wo Meldungen gesendet werden sollen.
Dieser Header definiert eine oder mehrere Endpunkt-URLs als kommagetrennte Liste.
Um zum Beispiel einen Berichts-Endpunkt namens `csp-endpoint` zu definieren, der Berichte bei `https://example.com/csp-reports` akzeptiert, könnte der Header der Serverantwort folgendermaßen aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die unterschiedliche Arten von Berichten behandeln, würden Sie sie folgendermaßen angeben:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Sie können dann die {{CSP("report-to")}} Direktive des `Content-Security-Policy` Headers verwenden, um anzugeben, dass ein bestimmter definierter Endpunkt für Berichte verwendet werden soll.
Um zum Beispiel CSP-Verstöße an `https://example.com/csp-reports` für die `default-src` zu senden, könnten die Antwort-Header folgendermaßen aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn ein CSP-Verstoß auftritt, sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt über eine HTTP `POST` Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`.
Der Bericht ist eine serialisierte Form des [`Report`](/de/docs/Web/API/Report) Objekts, das eine `type` Eigenschaft mit einem Wert von `"csp-violation"` und ein `body` enthält, das die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Objekts ist.

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
Der Server, der diese Anfragen behandelt, kann dann die eingehenden Berichte in einer Weise speichern oder verarbeiten, die am besten zu Ihren Bedürfnissen passt.

## Siehe auch

- [CSP-Fehler und Warnungen](/de/docs/Web/HTTP/Guides/CSP/Errors)
- [Mitigate cross-site scripting with a strict Content Security Policy](https://web.dev/articles/strict-csp) auf web.dev (2024)
- [Content Security Policy: A successful mess between hardening and mitigation](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) auf owasp.org
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
