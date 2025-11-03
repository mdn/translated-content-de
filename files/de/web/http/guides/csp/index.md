---
title: Content Security Policy (CSP)
slug: Web/HTTP/Guides/CSP
l10n:
  sourceCommit: 4db798b6db5773ba5dd76511d60e151db65c320e
---

**Content Security Policy** (CSP) ist eine Funktion, die hilft, das Risiko bestimmter Arten von Sicherheitsbedrohungen zu verhindern oder zu minimieren. Sie besteht aus einer Reihe von Anweisungen einer Website an einen Browser, die den Browser dazu auffordern, Beschränkungen für die Dinge zu setzen, die der Code der Website ausführen darf.

Der Hauptzweck von CSP besteht darin, zu kontrollieren, welche Ressourcen, insbesondere JavaScript-Ressourcen, ein Dokument laden darf. Dies wird hauptsächlich als Verteidigung gegen {{Glossary("cross-site_scripting", "Cross-Site Scripting")}} (XSS)-Angriffe verwendet, bei denen ein Angreifer in der Lage ist, schädlichen Code in die Website des Opfers einzuschleusen.

Eine CSP kann auch andere Zwecke haben, einschließlich der Verteidigung gegen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und der Sicherstellung, dass die Seiten einer Website über HTTPS geladen werden.

In diesem Leitfaden beginnen wir damit, zu beschreiben, wie eine CSP an einen Browser übermittelt wird und wie sie auf einem hohen Niveau aussieht.

Dann beschreiben wir, wie sie verwendet werden kann, um [zu kontrollieren, welche Ressourcen geladen werden](#kontrolle_der_ressourcenladen), um sich gegen XSS zu schützen, und andere Anwendungsfälle wie [Schutz gegen Clickjacking](#schutz_gegen_clickjacking) und [Upgrade unsicherer Anfragen](#upgrade_unsicherer_anfragen). Beachten Sie, dass es keine Abhängigkeit zwischen den verschiedenen Anwendungsfällen gibt: Wenn Sie Schutz gegen Clickjacking hinzufügen möchten, aber nicht gegen XSS, können Sie einfach die Direktiven für diesen Anwendungsfall hinzufügen.

Abschließend beschreiben wir [Strategien zur Bereitstellung einer CSP](#testen_ihrer_richtlinie) und Tools, die helfen können, diesen Prozess zu erleichtern.

## Übersicht über CSP

Eine CSP sollte im {{httpheader("Content-Security-Policy")}} Antwort-Header an den Browser gesendet werden. Sie sollte auf alle Antworten für alle Anfragen festgelegt werden, nicht nur für das Hauptdokument.

Sie können es auch mit dem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) Attribut des {{htmlelement("meta")}} Elements Ihres Dokuments angeben, was für einige Anwendungsfälle eine nützliche Option ist, wie z.B. bei einer client-seitig gerenderten {{Glossary("SPA", "Single Page Application")}}, die nur statische Ressourcen hat, da Sie dann vermeiden können, auf jegliche Server-Infrastruktur angewiesen zu sein. Diese Option unterstützt jedoch nicht alle CSP-Funktionen.

Die Richtlinie wird als eine Reihe von _Direktiven_ angegeben, die durch Semikolons getrennt sind. Jede Direktive kontrolliert einen anderen Aspekt der Sicherheitsrichtlinie. Jede Direktive hat einen Namen, gefolgt von einem Leerzeichen, gefolgt von einem Wert. Unterschiedliche Direktiven können unterschiedliche Syntaxen haben.

Betrachten Sie zum Beispiel die folgende CSP:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

Sie setzt zwei Direktiven:

- die `default-src` Direktive ist auf `'self'` gesetzt
- die `img-src` Direktive ist auf `'self' example.com` gesetzt.

![Eine CSP aufgeschlüsselt in ihre Direktiven.](csp-overview.svg)

Die erste Direktive, `default-src`, sagt dem Browser, nur Ressourcen zu laden, die gleich-orig sind wie das Dokument, es sei denn, andere spezifischere Direktiven setzen eine andere Richtlinie für andere Ressourcentypen. Die zweite, `img-src`, sagt dem Browser, Bilder zu laden, die gleich-orig sind oder von `example.com` stammen.

Im nächsten Abschnitt werden wir die verfügbaren Tools zur Kontrolle der Ressourcenladung betrachten, was die Hauptfunktion einer CSP ist.

## Kontrolle der Ressourcenladen

Eine CSP kann verwendet werden, um die Ressourcen zu kontrollieren, die ein Dokument laden darf. Dies wird hauptsächlich zum Schutz vor Cross-Site Scripting (XSS)-Angriffen verwendet.

In diesem Abschnitt sehen wir zunächst, wie die Kontrolle der Ressourcenladung beim Schutz gegen XSS helfen kann, dann die Tools, die CSP bietet, um zu kontrollieren, welche Ressourcen geladen werden. Schließlich beschreiben wir eine bestimmte empfohlene Strategie, die als "Strikte CSP" bezeichnet wird.

### XSS und Ressourcenladen

Ein Cross-Site Scripting (XSS)-Angriff ist einer, bei dem ein Angreifer in der Lage ist, seinen Code im Kontext der Zielwebsite auszuführen. Dieser Code kann dann alles tun, was der Code der Website selbst tun könnte, einschließlich zum Beispiel:

- Zugriff auf oder Änderung des Inhalts der geladenen Seiten der Website
- Zugriff auf oder Änderung von Inhalten im lokalen Speicher
- HTTP-Anfragen mit den Anmeldedaten des Benutzers zu machen, wodurch sie den Benutzer imitieren oder auf sensible Daten zugreifen können

Ein XSS-Angriff ist möglich, wenn eine Website einige Eingaben akzeptiert, die von einem Angreifer erstellt worden sein könnten (zum Beispiel URL-Parameter oder ein Kommentar zu einem Blog-Beitrag) und diese dann in der Seite einschließt, ohne sie zu _sanitizen_: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausgeführt werden kann.

Websites sollten sich gegen XSS schützen, indem sie diese Eingaben sanitizen, bevor sie in die Seite aufgenommen werden. Eine CSP bietet einen ergänzenden Schutz, der die Website auch dann schützt, wenn die Sanitisierung fehlschlägt.

Wenn die Sanitisierung tatsächlich fehlschlägt, gibt es verschiedene Formen, die der eingeschleuste schädliche Code im Dokument annehmen kann, einschließlich:

- Ein {{htmlelement("script")}}-Tag, das auf eine bösartige Quelle verlinkt:

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

- Ein Zeichenfolgenargument für eine unsichere API wie [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval):

  ```js
  eval("console.log(`You've been hacked!`)");
  ```

Eine CSP kann Schutz vor all diesen bieten. Mit einer CSP können Sie:

- Die erlaubten Quellen für JavaScript-Dateien und andere Ressourcen definieren, wodurch effektiv das Laden von `https://evil.example.com` blockiert wird
- Inline-Skripttags deaktivieren
- Nur Skripttags erlauben, die das richtige Nonce oder den richtigen Hash haben
- Inline-Ereignishandler deaktivieren
- `javascript:`-URLs deaktivieren
- Gefährliche APIs wie `eval()` deaktivieren

Im nächsten Abschnitt werden wir die Tools durchgehen, die CSP bietet, um diese Aufgaben durchzuführen.

> [!NOTE]
> Das Setzen einer CSP ist keine Alternative zum Sanitizen von Eingaben. Websites sollten Eingaben _sanitizen_ und eine CSP setzen, um eine Verteidigung in der Tiefe gegen XSS zu bieten.

### Fetch-Direktiven

Fetch-Direktiven werden verwendet, um eine bestimmte Kategorie von Ressourcen anzugeben, die ein Dokument laden darf — wie JavaScript, CSS-Stile, Bilder, Schriftarten und so weiter.

Es gibt unterschiedliche Fetch-Direktiven für verschiedene Arten von Ressourcen. Zum Beispiel:

- [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) setzt erlaubte Quellen für JavaScript.
- [`style-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) setzt erlaubte Quellen für CSS-Stile.
- [`img-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) setzt erlaubte Quellen für Bilder.

Eine spezielle Fetch-Direktive ist `default-src`, die eine Fallback-Richtlinie für alle Ressourcen setzt, deren Direktiven nicht explizit aufgelistet sind.

Für das vollständige Set von Fetch-Direktiven, siehe die [referenzdokumentation](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directives).

Jede Fetch-Direktive wird entweder als einzelnes Schlüsselwort `'none'` oder mit einem oder mehreren _Quellenausdrücken_ angegeben, die durch Leerzeichen getrennt sind. Wenn mehr als ein Quellenausdruck aufgelistet ist: Wenn eine der Methoden die Ressource erlaubt, dann ist die Ressource erlaubt.

Zum Beispiel setzt die untenstehende CSP zwei Fetch-Direktiven:

- `default-src` wird der einzelne Quellenausdruck `'self'` gegeben
- `img-src` werden zwei Quellenausdrücke gegeben: `'self'` und `example.com`

![CSP-Diagramm zeigt Quellenausdrücke](csp-source-expressions.svg)

Die Auswirkung davon ist, dass:

- Bilder entweder gleich-orig mit dem Dokument oder von `example.com` geladen werden müssen
- alle anderen Ressourcen gleich-orig mit dem Dokument sein müssen.

In den nächsten Abschnitten werden wir einige der Möglichkeiten beschreiben, wie Sie Quellenausdrücke verwenden können, um Ressourcenladungen zu kontrollieren. Beachten Sie, dass wir sie zwar separat beschreiben, diese Ausdrücke in der Regel kombiniert werden können: zum Beispiel kann eine einzelne Fetch-Direktive Noncen ebenso wie Hostnamen enthalten.

#### Ressourcen blockieren

Um einen Ressourcentyp vollständig zu blockieren, verwenden Sie das Schlüsselwort `'none'`. Zum Beispiel blockiert die folgende Direktive alle {{htmlelement("object")}} und {{htmlelement("embed")}} Ressourcen:

```http
Content-Security-Policy: object-src 'none'
```

Beachten Sie, dass `'none'` nicht mit einer anderen Methode in einer bestimmten Direktive kombiniert werden kann: in der Praxis, wenn zusammen mit `'none'` andere Quellenausdrücke gegeben werden, dann werden diese ignoriert.

#### Nonces

Ein `nonce` ist der empfohlene Ansatz, um das Laden von {{htmlelement("script")}} und {{htmlelement("style")}} Ressourcen zu beschränken.

Mit einem Nonce generiert der Server einen zufälligen Wert für jede HTTP-Antwort und schließt ihn in eine `script-src` und/oder `style-src` Direktive ein:

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server schließt dann diesen Wert als Wert des `nonce`-Attributs aller `<script>` und/oder `<style>` Tags ein, die sie im Dokument enthalten möchten.

Der Browser vergleicht die beiden Werte und lädt die Ressource nur, wenn sie übereinstimmen. Die Idee ist, dass selbst wenn ein Angreifer in der Lage ist, etwas JavaScript in die Seite einzufügen, sie nicht wissen, welchen Nonce der Server verwenden wird, und der Browser das Skript entsprechend ablehnt.

Damit dieser Ansatz funktioniert, darf es für einen Angreifer nicht möglich sein, den Nonce zu erraten.

**In der Praxis bedeutet dies, dass der Nonce für jede HTTP-Antwort unterschiedlich und nicht vorhersehbar sein muss.**

Das wiederum bedeutet, dass der Server kein statisches HTML bedienen kann, da er bei jedem Mal einen neuen Nonce einfügen muss. In der Regel würde der Server eine Template-Engine verwenden, um den Nonce einzufügen.

Hier ist ein Beispiel von [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) Code zur Veranschaulichung:

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

Bei jeder Anfrage generiert der Server einen neuen Nonce, fügt ihn in die CSP und in die im zurückgegebenen Dokument enthaltenen {{htmlelement("script")}} Tags ein. Beachten Sie, dass der Server:

- einen neuen Nonce für jede Anfrage generiert
- Noncen sowohl für externe als auch für Inline-Skripte verwenden kann
- den gleichen Nonce für alle `<script>` Tags im Dokument verwendet

Es ist wichtig, dass der Server eine Art von Template zum Einfügen von Noncen verwendet und sie nicht einfach in alle `<script>` Tags einfügt: andernfalls könnte der Server unbeabsichtigt Noncen in Skripte einfügen, die von einem Angreifer eingeschleust wurden.

Beachten Sie, dass Noncen nur für Elemente verwendet werden können, die ein `nonce`-Attribut haben: das heißt, nur `<script>` und `<style>` Elemente.

#### Hashes

Fetch-Direktiven können auch einen Hash des Skripts verwenden, um dessen Integrität zu garantieren. Mit dieser Methode:

1. berechnet der Server einen Hash der Skriptinhalte unter Verwendung einer {{Glossary("hash_function", "Hash-Funktion")}} (eine von SHA-256, SHA-384 oder SHA-512)
2. erstellt er eine {{Glossary("Base64", "Base64")}} Kodierung des Ergebnisses
3. fügt er ein Präfix hinzu, das den verwendeten Hash-Algorithmus identifiziert (eines von `sha256-`, `sha384-` oder `sha512-`).

Dann fügt er das Ergebnis der Direktive hinzu:

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

Wenn der Browser das Dokument erhält, hashiert er das Skript, vergleicht das Ergebnis mit dem Wert aus dem Header und lädt das Skript nur, wenn sie übereinstimmen.

Externe Skripte müssen auch das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut enthalten, damit diese Methode funktioniert.

Hier ist ein Beispiel von Express Code zur Veranschaulichung:

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
- Für das externe Skript "main.js" fügen wir auch das `integrity`-Attribut hinzu und geben ihm den gleichen Wert.
- Anders als im Beispiel mit Noncen können sowohl die CSP als auch der Inhalt statisch sein, da die Hashes gleich bleiben. Dies macht hashbasierte Richtlinien besser geeignet für statische Seiten oder Websites, die sich auf clientseitiges Rendering verlassen.

#### Schema-basierte Richtlinien

Fetch-Direktiven können ein Schema wie `https:` auflisten, um Ressourcen zuzulassen, die über dieses Schema bedient werden. Dies ermöglicht zum Beispiel, dass eine Richtlinie alle Ressourcenladungen über HTTPS erfordert:

```http
Content-Security-Policy: default-src https:
```

#### Standortbasierte Richtlinien

Fetch-Direktiven können Ressourcenladungen basierend darauf kontrollieren, wo sich die Ressource befindet.

Das Schlüsselwort `'self'` erlaubt Ressourcen, die gleich-orig mit dem Dokument selbst sind:

```http
Content-Security-Policy: img-src 'self'
```

Sie können auch einen oder mehrere Hostnamen angeben, potenziell einschließlich Platzhalter, und nur Ressourcen, die von diesen Hosts bedient werden, sind erlaubt. Dies könnte verwendet werden, um Inhalte von einem vertrauenswürdigen CDN zuzulassen.

```http
Content-Security-Policy: img-src *.example.org
```

Sie können mehrere Standorte angeben. Die folgende Direktive erlaubt nur Bilder, die gleich-orig mit dem aktuellen Dokument sind, oder von einer Subdomain von "example.org" oder von "example.com" bedient werden:

```http
Content-Security-Policy: img-src 'self' *.example.org  example.com
```

#### Inline-JavaScript

Wenn eine CSP entweder eine `default-src` oder eine `script-src` Direktive enthält, dann wird Inline-JavaScript nicht erlaubt sein, es sei denn, es werden zusätzliche Maßnahmen ergriffen, um es zu aktivieren. Dies umfasst:

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

- JavaScript in einer `javascript:`-URL:

  ```html
  <a href="javascript:console.log('Hello from a javascript: URL')"></a>
  ```

Das Schlüsselwort `unsafe-inline` kann verwendet werden, um diese Einschränkung zu umgehen. Zum Beispiel benötigt die folgende Direktive, dass alle Ressourcen gleich-orig sind, erlaubt aber Inline-JavaScript:

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es den Zweck einer CSP weitgehend zunichtemacht. Inline-JavaScript ist einer der häufigsten XSS-Vektoren, und eines der Grundziele einer CSP ist es, dessen unkontrollierte Nutzung zu verhindern.

Inline `<script>` Elemente sind erlaubt, wenn sie durch einen Nonce oder einen Hash geschützt sind, wie oben beschrieben.

Wenn eine Direktive Nonce- oder Hash-Ausdrücke enthält, wird das `unsafe-inline` Schlüsselwort von Browsern ignoriert.

#### `eval()` und ähnliche APIs

Wie Inline-JavaScript, dürfen `eval()` und ähnliche APIs nicht ausgeführt werden, wenn eine CSP entweder eine `default-src` oder eine `script-src` Direktive enthält. Dies umfasst unter anderem:

- direkt `eval()`:

  ```js
  eval('console.log("hello from eval()")');
  ```

- Den {{jsxref("Function/Function()", "Function()")}} Konstruktor:

  ```js
  const sum = new Function("a", "b", "return a + b");
  ```

- Den Zeichenfolgenargument für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval):

  ```js
  setTimeout("console.log('hello from setTimeout')", 1);
  ```

Das Keyword `unsafe-eval` kann verwendet werden, um dieses Verhalten zu überschreiben, und ähnlich wie `unsafe-inline`, und aus den gleichen Gründen sollten **Entwickler `unsafe-eval` vermeiden**.

Manchmal kann es schwierig sein, Verwendungen von `eval()` und den anderen Methoden zu entfernen: in diesen Situationen kann die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) es sicherer machen, indem sichergestellt wird, dass die Eingabe einer definierten Richtlinie entspricht. Das `trusted-types-eval` Schlüsselwort sollte verwendet werden, um das Verhalten in diesem Fall zu überschreiben. Anders als `unsafe-inline` überschreibt es das Verhalten im Browser nur dann, wenn Trusted Types unterstützt und aktiviert sind; das stellt sicher, dass die Methoden in Browsern, die Trusted Types nicht unterstützen, weiterhin blockiert werden.

Im Gegensatz zu `unsafe-inline`, funktioniert das `unsafe-eval` Schlüsselwort weiterhin in einer Direktive, die Nonce- oder Hash-Ausdrücke enthält.

### Strikte CSP

Um das Laden von Skripten als eine Maßnahme gegen XSS zu kontrollieren, wird empfohlen, [niitwerkbasierte](#nonces) oder [hashbasierte](#hashes) Fetch-Direktiven zu verwenden. Dies wird als _strikte CSP_ bezeichnet. Diese Art von CSP hat zwei Hauptvorteile gegenüber einer standortbasierten CSP (oft als _Allowlist-CSP_ bezeichnet):

- Allowlist-CSPs sind schwer richtig zu konfigurieren und oft whitelistet man unbeabsichtigt unsichere Domains, was keine wirksame XSS-Schutz bietet (siehe [CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)).
- Allowlist-CSPs können sehr groß und schwer zu warten sein, insbesondere wenn man Skripte verwendet, die außerhalb Ihrer Kontrolle sind. Laut [How I learned to stop worrying and love the Content Security Policy](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/) wird ein Entwickler allein für die Integration von Google Analytics gebeten, 187 Google-Domains zur Allowlist hinzuzufügen.

Eine nonce-basierte strikte CSP sieht so aus:

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

In dieser CSP verwenden wir:

- Noncen, um zu kontrollieren, welche JavaScript-Ressourcen geladen werden dürfen
- Alle Objekt-Embeds blockieren
- Alle Verwendungen des `<base>`-Elements blockieren, um eine Basis-URI zu setzen.

Eine hash-basierte strikte CSP ist ähnlich, verwendet jedoch Hashes anstelle von Noncen:

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

Nonce-basierte Direktiven sind einfacher zu pflegen, wenn Sie die Antworten einschließlich des Inhalts selbst dynamisch generieren können. Andernfalls müssen Sie hash-basierte Direktiven verwenden. Das Problem bei hash-basierten Direktiven ist, dass Sie den Hash neu berechnen und erneut anwenden müssen, wenn eine Änderung am Skriptinhalt vorgenommen wird.

#### Das Keywort `strict-dynamic`

Wie oben gezeigt, ist die strikte CSP schwer umzusetzen, wenn Sie Skripte verwenden, die nicht unter Ihrer Kontrolle stehen. Wenn ein Drittanbieter-Skript zusätzliche Skripte lädt oder Inline-Skripte verwendet, schlägt dies fehl, da das Drittanbieter-Skript den Nonce oder Hash nicht durchgibt.

Das `strict-dynamic` Schlüsselwort wird bereitgestellt, um dieses Problem zu lösen. Es ist ein Schlüsselwort, das in einer Fetch-Direktive enthalten sein kann und die Auswirkung hat, dass, wenn ein Skript einen Nonce oder einen Hash hat, dieses Skript erlaubt wird, weitere Skripte zu laden, die selbst keine Noncen oder Hashes haben. Das heißt, das Vertrauen in ein Skript durch einen Nonce oder Hash wird an die durch das ursprüngliche Skript geladenen Skripte weitergegeben (und die, die _sie_ laden, und so weiter).

Zum Beispiel, betrachten Sie folgendes Dokument:

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

Es enthält ein Skript "main.js", das ein weiteres Skript, "main2.js", hinzufügt:

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

Das Skript "main.js" wird geladen, weil sein Hash mit dem Wert in der CSP übereinstimmt. Aber sein Versuch, "main2.js" zu laden, wird scheitern.

Wenn wir `'strict-dynamic'` zur CSP hinzufügen, wird "main.js" erlaubt, "main2.js" zu laden:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  'strict-dynamic'
```

Das Schlüsselwort `'strict-dynamic'` macht es einfacher, nonce- oder hash-basierte CSPs zu erstellen und zu pflegen, insbesondere wenn eine Website Drittanbieter-Skripte verwendet. Es macht Ihre CSP jedoch weniger sicher, da falls die Skripte, die Sie einschließen, `<script>`-Elemente basierend auf potenziellen XSS-Quellen erstellen, die CSP sie nicht schützt.

#### Refactoring von Inline-JavaScript und `eval()`

Wir haben oben gesehen, dass Inline-JavaScript standardmäßig in einer CSP nicht erlaubt ist. Mit Noncen oder Hashes kann ein Entwickler Inline-`<script>`-Tags verwenden, aber Sie müssen weiterhin Code refaktorisieren, um andere nicht erlaubte Muster zu entfernen, einschließlich Inline-Ereignishandler, `javascript:`-URLs und Verwendungen von `eval()`. Zum Beispiel sollten Inline-Ereignishandler normalerweise durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ersetzt werden:

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

## Schutz gegen Clickjacking

Die [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) Direktive kann verwendet werden, um zu kontrollieren, welche Dokumente, wenn überhaupt, dieses Dokument in einem verschachtelten Browsing-Kontext wie einem {{htmlelement("iframe")}} einbetten dürfen. Dies ist ein effektiver Schutz gegen Clickjacking-Angriffe, da diese Angriffe von der Einbettung der Zielseite in einer von einem Angreifer kontrollierten Seite abhängen.

Die Syntax von `frame-ancestors` ist eine Teilmenge der Fetch-Direktive-Syntax: Sie können den einzelnen Schlüsselwortwert `'none'` oder einen oder mehrere Quellenausdrücke angeben. Die einzigen Quellenausdrücke, die Sie verwenden können, sind jedoch Schemata, Hostnamen oder das `'self'` Schlüsselwort.

Wenn Sie nicht möchten, dass Ihre Seite eingebettet werden kann, sollten Sie `frame-ancestors` auf `'none'` setzen:

```http
Content-Security-Policy: frame-ancestors 'none'
```

Diese Direktive ist ein flexibler Ersatz für den {{httpheader("X-Frame-Options")}} Header.

## Upgrade unsicherer Anfragen

Webentwickler werden dringend ermutigt, alle ihre Inhalte über HTTPS zu bedienen. Beim Upgrade einer Site auf HTTPS bedient eine Site manchmal das Hauptdokument über HTTPS, aber führt ihre Ressourcen über HTTP aus, zum Beispiel mit Markup wie diesem:

```html
<script src="http://example.org/my-cat.js"></script>
```

Dies wird als _gemischter Inhalt_ bezeichnet, und das Vorhandensein unsicherer Ressourcen schwächt den Schutz, den HTTPS bietet, erheblich. Unter dem [gemischten Inhaltsalgorithmus](/de/docs/Web/Security/Mixed_content), den Browser umsetzen, werden, wenn ein Dokument über HTTPS bedient wird, unsichere Ressourcen als "aktualisierbare Inhalte" und "blockierbare Inhalte" kategorisiert. Aktualisierbare Inhalte werden zu HTTPS aktualisiert, und blockierbare Inhalte werden blockiert, was möglicherweise die Seite bricht.

Die letztendliche Lösung für gemischte Inhalte besteht darin, dass Entwickler alle Ressourcen über HTTPS laden. Selbst wenn eine Site tatsächlich in der Lage ist, alle Inhalte über HTTPS zu bedienen, kann es jedoch sehr schwierig (oder sogar effektiv unmöglich sein, wenn es um archivierte Inhalte geht) für einen Entwickler sein, alle von der Site verwendeten URLs, um Ressourcen zu laden, umzuschreiben.

Die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) Direktive ist dafür gedacht, dieses Problem zu lösen. Diese Direktive hat keinen Wert: um sie zu setzen, fügen Sie einfach den Namen der Direktive ein:

```http
Content-Security-Policy: upgrade-insecure-requests
```

Wenn diese Direktive auf einem Dokument gesetzt ist, wird der Browser automatisch HTTP-URLs unter den folgenden Bedingungen auf HTTPS aktualisieren:

- Anfragen zum Laden von Ressourcen (wie Bilder, Skripte oder Schriftarten)
- Navigationsanfragen (wie Linkziele), die gleich-orig mit dem Dokument sind
- Navigationsanfragen in verschachtelten Browsing-Kontexten, wie Iframes
- Formularübermittlungen

Top-Level-Navigationsanfragen, deren Ziel eine andere Origin ist, werden jedoch nicht aktualisiert.

Angenommen, das Dokument unter `https://example.org` wird mit einer CSP bedient, die die `upgrade-insecure-requests` Direktive enthält, und das Dokument enthält Markup wie dieses:

```html
<script src="http://example.org/my-cat.js"></script>
<script src="http://not-example.org/another-cat.js"></script>
```

Der Browser wird beide dieser Anfragen automatisch auf HTTPS aktualisieren.

Angenommen, das Dokument enthält auch dies:

```html
<a href="http://example.org/more-cats">See some more cats!</a>
<a href="http://not-example.org/even-more-cats">More cats, on another site!</a>
```

Der Browser wird den ersten Link auf HTTPS aktualisieren, aber nicht den zweiten, da er auf eine andere Origin navigiert.

Diese Direktive ist kein Ersatz für den {{httpheader("Strict-Transport-Security")}} Header (auch bekannt als HSTS), da sie keine externen Links zu einer Website aktualisiert. Websites sollten diese Direktive und den Header `Strict-Transport-Security` einschließen.

## Testen Ihrer Richtlinie

Um die Bereitstellung zu erleichtern, kann CSP im Nur-Berichtsmodus eingesetzt werden. Die Richtlinie wird nicht durchgesetzt, aber alle Verstöße werden an den in der Richtlinie angegebenen Berichtsendpunkt gesendet. Darüber hinaus kann ein Nur-Berichts-Header verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich bereitzustellen.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header verwenden, um Ihre Richtlinie anzugeben, so wie dieser:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header als auch ein {{HTTPHeader("Content-Security-Policy")}} Header in derselben Antwort vorhanden sind, werden beide Richtlinien berücksichtigt. Die in den `Content-Security-Policy` Headers angegebene Richtlinie wird durchgesetzt, während die `Content-Security-Policy-Report-Only` Richtlinie nur Berichte generiert, aber nicht durchgesetzt wird.

Beachten Sie, dass eine Nur-Bericht-Richtlinie im Gegensatz zu einer normalen Content-Sicherheitsrichtlinie nicht in einem `<meta>` Element geliefert werden kann.

### Verletzungsberichte

Die empfohlene Methode für das Melden von CSP-Verletzungen ist die Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API), indem Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} deklariert und einer von ihnen durch die {{CSP("report-to")}} Direktive des `Content-Security-Policy` Headers als CSP-Berichts- und Ziel angegeben wird.

> [!WARNING]
> Sie können auch die CSP {{CSP("report-uri")}} Direktive verwenden, um eine Ziel-URL für CSP-Verletzungsberichte anzugeben. Diese sendet ein leicht unterschiedliches JSON-Berichtsformat über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`. Dieser Ansatz ist veraltet, aber Sie sollten beide deklarieren, bis {{CSP("report-to")}} in allen Browsern unterstützt wird. Für weitere Informationen zu diesem Ansatz siehe das {{CSP("report-uri")}} Thema.

Ein Server kann Clients informieren, wohin Berichte gesendet werden sollen, indem er den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header verwendet. Dieser Header definiert eine oder mehrere Endpunkt-URLs als kommaseparierte Liste. Zum Beispiel, um einen Berichtsendpunkt namens `csp-endpoint` zu definieren, der Berichte unter `https://example.com/csp-reports` akzeptiert, könnte der Antwort-Header des Servers so aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die verschiedene Arten von Berichten behandeln, würden Sie sie so angeben:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Sie können dann die {{CSP("report-to")}} Direktive des `Content-Security-Policy` Headers verwenden, um anzugeben, dass ein bestimmter definierter Endpunkt für die Berichterstattung verwendet werden sollte. Zum Beispiel, um CSP-Verletzungsberichte an `https://example.com/csp-reports` für den `default-src` zu senden, könnten Sie Antwort-Header senden, die so aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn eine CSP-Verletzung auftritt, sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt über eine HTTP `POST`-Operation, mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`. Der Bericht ist eine serialisierte Form des [`Report`](/de/docs/Web/API/Report) Objekts, das eine `type` Eigenschaft mit einem Wert von `"csp-violation"` enthält, und einen `body`, der die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Objekts ist.

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

Sie müssen einen Server einrichten, der Berichte mit dem angegebenen JSON-Format und Inhaltstyp empfängt. Der Server, der diese Anfragen behandelt, kann dann die eingehenden Berichte auf eine Weise speichern oder verarbeiten, die Ihren Anforderungen am besten entspricht.

## Siehe auch

- [CSP-Fehler und Warnungen](/de/docs/Web/HTTP/Guides/CSP/Errors)
- [Mitigate cross-site scripting with a strict Content Security Policy](https://web.dev/articles/strict-csp) auf web.dev (2024)
- [Content Security Policy: A successful mess between hardening and mitigation](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content-Security_Policy_Cheat_Sheet.html) auf owasp.org
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
