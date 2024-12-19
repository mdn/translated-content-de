---
title: Content Security Policy (CSP)
slug: Web/HTTP/CSP
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTTPSidebar}}

**Content Security Policy** (CSP) ist eine Funktion, die hilft, das Risiko bestimmter Arten von Sicherheitsbedrohungen zu verhindern oder zu minimieren. Sie besteht aus einer Reihe von Anweisungen von einer Website an einen Browser, die den Browser anweisen, Einschränkungen für die Dinge zu setzen, die der Code der Seite ausführen darf.

Der Hauptanwendungsfall für CSP ist die Kontrolle, welche Ressourcen, insbesondere JavaScript-Ressourcen, ein Dokument laden darf. Dies wird hauptsächlich als Abwehr gegen {{Glossary("cross-site_scripting", "Cross-Site-Scripting")}} (XSS)-Angriffe verwendet, bei denen ein Angreifer in der Lage ist, bösartigen Code in die Seite des Opfers einzufügen.

Eine CSP kann auch andere Zwecke haben, einschließlich der Abwehr von [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und der Sicherstellung, dass die Seiten einer Website über HTTPS geladen werden.

In diesem Leitfaden beginnen wir damit zu beschreiben, wie eine CSP an einen Browser geliefert wird und wie sie auf höherer Ebene aussieht.

Dann beschreiben wir, wie sie verwendet werden kann, um [zu kontrollieren, welche Ressourcen geladen werden](#kontrolle_des_ressourcenladens), um sich gegen XSS zu schützen, und dann andere Anwendungsfälle wie [Clickjacking-Schutz](#clickjacking-schutz) und [das Upgrade unsicherer Anfragen](#upgrade_unsicherer_anfragen). Beachten Sie, dass es keine Abhängigkeit zwischen den verschiedenen Anwendungsfällen gibt: Wenn Sie einen Schutz gegen Clickjacking hinzufügen möchten, aber nicht gegen XSS, können Sie einfach die Direktiven für diesen Anwendungsfall hinzufügen.

Schließlich beschreiben wir [Strategien für die Bereitstellung einer CSP](#testen_ihrer_richtlinie) und Werkzeuge, die helfen können, diesen Prozess zu erleichtern.

## Überblick über CSP

Eine CSP sollte dem Browser im {{httpheader("Content-Security-Policy")}} Antwort-Header übermittelt werden. Sie sollte für alle Antworten auf alle Anfragen eingestellt werden, nicht nur für das Hauptdokument.

Sie können dies auch unter Verwendung des [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv) Attributs des {{htmlelement("meta")}} Elements Ihres Dokuments festlegen, was eine nützliche Option für einige Anwendungsfälle ist, wie z. B. eine clientseitig gerenderte {{Glossary("SPA", "Single Page App")}}, die nur statische Ressourcen hat, weil Sie dann nicht von einer Serverinfrastruktur abhängig sind. Diese Option unterstützt jedoch nicht alle CSP-Funktionen.

Die Richtlinie wird als eine Reihe von _Direktiven_ angegeben, die durch Semikolons getrennt sind. Jede Direktive steuert einen anderen Aspekt der Sicherheitsrichtlinie. Jede Direktive hat einen Namen, gefolgt von einem Leerzeichen, gefolgt von einem Wert. Verschiedene Direktiven können unterschiedliche Syntaxen haben.

Betrachten Sie zum Beispiel die folgende CSP:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

Sie setzt zwei Direktiven fest:

- die `default-src` Direktive ist auf `'self'` gesetzt
- die `img-src` Direktive ist auf `'self' example.com` gesetzt.

![Eine CSP, unterteilt in ihre Direktiven.](csp-overview.svg)

Die erste Direktive, `default-src`, sagt dem Browser, nur Ressourcen zu laden, die sich am selben Ursprung wie das Dokument befinden, es sei denn, andere spezifischere Direktiven setzen eine andere Richtlinie für andere Ressourcentypen. Die zweite, `img-src`, sagt dem Browser, Bilder zu laden, die entweder vom selben Ursprung sind oder von `example.com` bereitgestellt werden.

Im nächsten Abschnitt werden wir uns die Werkzeuge ansehen, die zur Kontrolle von Ressourcennetzladungen zur Verfügung stehen, was die Hauptfunktion einer CSP ist.

## Kontrolle des Ressourcenladens

Eine CSP kann verwendet werden, um die Ressourcen zu kontrollieren, die ein Dokument laden darf. Dies wird in erster Linie zum Schutz vor Cross-Site-Scripting (XSS)-Angriffen genutzt.

In diesem Abschnitt sehen wir zuerst, wie die Kontrolle des Ressourcenladens helfen kann, sich gegen XSS zu schützen, dann die Werkzeuge, die CSP bereitstellt, um zu kontrollieren, welche Ressourcen geladen werden. Schließlich beschreiben wir eine besondere empfohlene Strategie, die als "Strikte CSP" bezeichnet wird.

### XSS und Ressourcenladen

Ein Cross-Site-Scripting (XSS)-Angriff ist einer, bei dem ein Angreifer in der Lage ist, seinen Code im Kontext der Zielwebsite auszuführen. Dieser Code kann dann alles tun, was der eigene Code der Website tun könnte, einschließlich, zum Beispiel:

- Zugreifen oder Ändern des Inhalts der geladenen Seiten der Website
- Zugreifen oder Ändern von Inhalten im lokalen Speicher
- HTTP-Anfragen mit den Anmeldeinformationen des Benutzers erstellen, was ihnen ermöglicht, den Benutzer zu imitieren oder auf sensible Daten zuzugreifen

Ein XSS-Angriff ist möglich, wenn eine Website einige Eingaben akzeptiert, die von einem Angreifer erstellt wurden (zum Beispiel URL-Parameter oder ein Kommentar zu einem Blogbeitrag) und diese dann in die Seite einfügt, ohne sie _zu bereinigen_: Das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausgeführt werden können.

Websites sollten sich gegen XSS schützen, indem sie diese Eingaben bereinigen, bevor sie in die Seite aufgenommen werden. Eine CSP bietet einen ergänzenden Schutz, der die Website auch dann schützen kann, wenn die Bereinigung fehlschlägt.

Wenn die Bereinigung fehlschlägt, gibt es verschiedene Formen, die der injizierte bösartige Code im Dokument annehmen kann, darunter:

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
  <img onmouseover="console.log(`You've been hacked!`)" />
  ```

- Eine `javascript:` URL:

  ```html
  <iframe src="javascript:console.log(`You've been hacked!`)"></iframe>
  ```

- Ein Zeichenfolgenargument für eine unsichere API wie [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval):

  ```js
  eval("console.log(`You've been hacked!`)");
  ```

Eine CSP kann Schutz gegen all dies bieten. Mit einer CSP können Sie:

- die erlaubten Quellen für JavaScript-Dateien und andere Ressourcen definieren, effektiv das Laden von `https://evil.example.com` blockieren
- Inline-Skript-Tags deaktivieren
- nur Skript-Tags zulassen, die den korrekten Nonce oder Hash gesetzt haben
- Inline-Ereignishandler deaktivieren
- `javascript:` URLs deaktivieren
- gefährliche APIs wie `eval()` deaktivieren

Im nächsten Abschnitt werden wir die Werkzeuge durchgehen, die CSP zur Verfügung stellt, um diese Dinge zu tun.

> [!NOTE]
> Das Setzen einer CSP ist kein Ersatz für das Bereinigen von Eingaben. Websites sollten Eingaben bereinigen _und_ eine CSP setzen, um einen gestaffelten Schutz gegen XSS zu bieten.

### Fetch-Direktiven

Fetch-Direktiven werden verwendet, um eine bestimmte Kategorie von Ressourcen zu spezifizieren, die ein Dokument laden darf — wie JavaScript, CSS-Stylesheets, Bilder, Schriftarten und so weiter.

Es gibt verschiedene Fetch-Direktiven für unterschiedliche Arten von Ressourcen. Zum Beispiel:

- [`script-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) legt erlaubte Quellen für JavaScript fest.
- [`style-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) legt erlaubte Quellen für CSS-Stylesheets fest.
- [`img-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) legt erlaubte Quellen für Bilder fest.

Eine spezielle Fetch-Direktive ist `default-src`, die eine Ersatzrichtlinie für alle Ressourcen festlegt, deren Direktiven nicht explizit aufgeführt sind.

Für die vollständige Liste der Fetch-Direktiven sehen Sie sich die [Referenzdokumentation](/de/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directives) an.

Jede Fetch-Direktive wird entweder als einzelnes Schlüsselwort `'none'` oder als eine oder mehrere _Quellenausdrücke_, getrennt durch Leerzeichen, angegeben. Wenn mehr als ein Quellenausdruck aufgeführt ist: Wenn eine der Methoden die Ressource erlaubt, ist die Ressource erlaubt.

Zum Beispiel setzt die CSP unten zwei Fetch-Direktiven:

- `default-src` wird der Einzel-Quellausdruck `'self'` zugewiesen
- `img-src` werden zwei Quellenausdrücke zugewiesen: `'self'` und `example.com`

![CSP-Diagramm zeigt Quellenausdrücke](csp-source-expressions.svg)

Der Effekt davon ist, dass:

- Bilder entweder vom selben Ursprung wie das Dokument stammen müssen oder von `example.com` geladen werden müssen
- alle anderen Ressourcen müssen vom selben Ursprung wie das Dokument sein.

In den nächsten Abschnitten werden wir einige der Möglichkeiten beschreiben, wie Sie Quellenausdrücke verwenden können, um das Laden von Ressourcen zu kontrollieren. Beachten Sie, dass wir sie zwar separat beschreiben, diese Ausdrücke im Allgemeinen kombiniert werden können: Zum Beispiel kann eine einzelne Fetch-Direktive sowohl Nonces als auch Hostnamen enthalten.

#### Blockieren von Ressourcen

Um einen Ressourcentyp vollständig zu blockieren, verwenden Sie das Schlüsselwort `'none'`. Zum Beispiel blockiert die folgende Direktive alle {{htmlelement("object")}} und {{htmlelement("embed")}} Ressourcen:

```http
Content-Security-Policy: object-src 'none'
```

Beachten Sie, dass `'none'` nicht mit einer anderen Methode in einer bestimmten Direktive kombiniert werden kann: In der Praxis, wenn irgendwelche anderen Quellenausdrücke neben `'none'` angegeben werden, werden sie ignoriert.

#### Nonces

Ein `nonce` ist der empfohlene Ansatz, um das Laden von {{htmlelement("script")}} und {{htmlelement("style")}} Ressourcen einzuschränken.

Mit einem Nonce generiert der Server bei jeder HTTP-Antwort einen zufälligen Wert und enthält ihn in einer `script-src` und/oder einer `style-src` Direktive:

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server fügt diesen Wert dann als Wert des `nonce` Attributs aller `<script>` und/oder `<style>` Tags hinzu, die sie im Dokument einfügen möchten.

Der Browser vergleicht die beiden Werte und lädt die Ressource nur, wenn sie übereinstimmen. Die Idee ist, dass selbst wenn ein Angreifer in der Lage ist, etwas JavaScript in die Seite einzufügen, er nicht wissen wird, welchen Nonce der Server verwenden wird, sodass der Browser das Skript nicht ausführen wird.

Damit dieser Ansatz funktioniert, darf es einem Angreifer nicht möglich sein, den Nonce zu erraten.

**In der Praxis bedeutet dies, dass der Nonce bei jeder HTTP-Antwort unterschiedlich sein und nicht vorhersehbar sein darf.**

Dies bedeutet wiederum, dass der Server kein statisches HTML ausliefern kann, da er bei jeder Antwort einen neuen Nonce einfügen muss. Typischerweise würde der Server eine Vorlagen-Engine verwenden, um den Nonce einzufügen.

Hier ist ein Ausschnitt von [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) Code, um dies zu demonstrieren:

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

- bei jeder Anfrage einen neuen Nonce generiert
- Nonces sowohl mit externen als auch mit Inline-Skripten verwenden kann
- den gleichen Nonce für alle `<script>` Tags im Dokument verwendet

Es ist wichtig, dass der Server eine Art von Templating verwendet, um Nonces einzufügen, und nicht einfach alle `<script>` Tags einf...

...ügt: andernfalls könnte der Server versehentlich Nonces in Skripts einfügen, die von einem Angreifer injiziert wurden.

Beachten Sie, dass Nonces nur für Elemente verwendet werden können, die ein `nonce` Attribut haben: das heißt, nur `<script>` und `<style>` Elemente.

#### Hashes

Fetch-Direktiven können auch einen Hash des Skripts verwenden, um seine Integrität zu gewährleisten. Mit dieser Methode:

1. berechnet der Server einen Hash des Skriptinhalts mit einer {{Glossary("cryptographic_hash_function", "kryptografischen Hash-Funktion")}} (einer von SHA-256, SHA-384 oder SHA-512)
2. erstellt eine {{Glossary("Base64", "Base64")}} Kodierung des Ergebnisses
3. fügt ein Präfix an, das den verwendeten Hash-Algorithmus identifiziert (einer von `sha256-`, `sha384-` oder `sha512-`).

Dann fügt er das Ergebnis der Direktive hinzu:

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

Wenn der Browser das Dokument empfängt, hashed er das Skript, vergleicht das Ergebnis mit dem Wert im Header und lädt das Skript nur, wenn sie übereinstimmen.

Externe Skripte müssen auch das [`integrity`](/de/docs/Web/HTML/Element/script#integrity) Attribut enthalten, damit diese Methode funktioniert.

Hier ist ein Express-Code-Ausschnitt, um dies zu demonstrieren:

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

- Wir einen separaten Hash für jedes Skript im Dokument haben.
- Für das externe Skript "main.js" fügen wir auch das `integrity` Attribut hinzu und gleichen es ab.
- Anders als im Beispiel mit Nonces können sowohl die CSP als auch der Inhalt statisch sein, da die Hashes gleich bleiben. Dies macht hashbasierte Richtlinien besser geeignet für statische Seiten oder Websites, die auf clientseitiges Rendering angewiesen sind.

#### Schema-basierte Richtlinien

Fetch-Direktiven können ein Schema auflisten, wie `https:`, um Ressourcen zu erlauben, die mit diesem Schema bereitgestellt werden. Dies erlaubt es zum Beispiel, dass eine Richtlinie HTTPS für alle Ressourcenladungen verlangt:

```http
Content-Security-Policy: default-src https:
```

#### Standortbasierte Richtlinien

Fetch-Direktiven können das Laden von Ressourcen basierend auf dem Standort der Ressource kontrollieren.

Das Schlüsselwort `'self'` erlaubt Ressourcen, die vom gleichen Ursprung wie das Dokument selbst sind:

```http
Content-Security-Policy: img-src 'self'
```

Sie können auch einen oder mehrere Hostnamen angeben, möglicherweise einschließlich Wildcards, und nur Ressourcen, die von diesen Hosts geliefert werden, sind erlaubt. Dies könnte zum Beispiel verwendet werden, um zuzulassen, dass Inhalte von einem vertrauenswürdigen CDN bereitgestellt werden.

```http
Content-Security-Policy: img-src *.example.org
```

Sie können mehrere Standorte angeben. Die folgende Direktive erlaubt nur Bilder, die vom gleichen Ursprung wie das aktuelle Dokument sind, oder von einem Subdomain von "example.org", oder von "example.com":

```http
Content-Security-Policy: img-src 'self' *.example.org  example.com
```

#### Inline-JavaScript

Wenn eine CSP entweder eine `default-src` oder eine `script-src` Direktive enthält, wird Inline-JavaScript nicht erlaubt, es sei denn, es werden zusätzliche Maßnahmen ergriffen, um dies zu ermöglichen. Dies umfasst:

- JavaScript, das innerhalb eines `<script>` Elements auf der Seite enthalten ist:

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

Das Schlüsselwort `unsafe-inline` kann verwendet werden, um diese Einschränkung zu überschreiben. Zum Beispiel erfordert die folgende Direktive, dass alle Ressourcen vom gleichen Ursprung stammen, erlaubt aber Inline-JavaScript:

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es den Zweck einer CSP zu einem großen Teil zunichte macht. Inline-JavaScript ist einer der häufigsten XSS-Vektoren, und eines der grundlegendsten Ziele einer CSP ist es, seine unkontrollierte Verwendung zu verhindern.

Inline `<script>` Elemente sind erlaubt, wenn sie durch ein Nonce oder einen Hash geschützt sind, wie oben beschrieben.

Wenn eine Direktive Nonce- oder Hash-Ausdrücke enthält, wird das `unsafe-inline` Schlüsselwort von Browsern ignoriert.

#### `eval()` und ähnliche APIs

Wie Inline-JavaScript, wenn eine CSP entweder eine `default-src` oder eine `script-src` Direktive enthält, dann wird `eval()` und ähnliche APIs nicht erlaubt zu laufen. Dies umfasst unter anderem APIs:

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

Das Schlüsselwort `unsafe-eval` kann verwendet werden, um dieses Verhalten zu überschreiben, und wie bei `unsafe-inline`, und aus den gleichen Gründen: **Entwickler sollten `unsafe-eval` vermeiden**. Manchmal kann es schwierig sein, die Verwendung von `eval()` zu entfernen: In solchen Situationen kann die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) es sicherer machen, indem sichergestellt wird, dass der Eingabewert einer definierten Richtlinie entspricht.

Anders als bei `unsafe-inline`, funktioniert das `unsafe-eval` Schlüsselwort immer noch in einer Direktive, die Nonce- oder Hash-Ausdrücke enthält.

### Strikte CSP

Um das Laden von Skripten als Minderung gegen XSS zu steuern, wird empfohlen, [Nonce-](#nonces) oder [Hash-](#hashes) basierte Fetch-Direktiven zu verwenden. Dies wird als _strikte CSP_ bezeichnet. Diese Art von CSP hat zwei Hauptvorteile gegenüber einer standortbasierten CSP (in der Regel als _Allowlist CSP_ bezeichnet):

- Allowlist CSPs sind schwer richtig zu machen und oft unfreiwillig unsichere Domänen auf die Whitelist setzen und daher keinen effektiven Schutz gegen XSS bieten (siehe [CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)).
- Allowlist CSPs können sehr groß und schwer zu pflegen sein, besonders wenn Skripte verwendet werden, die außerhalb Ihrer Kontrolle liegen. Laut [How I learned to stop worrying and love the Content Security Policy](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/), wird ein Entwickler, nur um Google Analytics zu integrieren, gebeten, 187 Google-Domains zur Allowlist hinzuzufügen.

Eine Nonce-basierte strikte CSP sieht so aus:

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

In dieser CSP:

- verwenden wir Nonces, um zu kontrollieren, welche JavaScript-Ressourcen geladen werden dürfen
- blockieren wir alle Objekt-Einbindungen
- blockieren wir alle Verwendungen des `<base>` Elements, um eine Basis-URI festzulegen.

Eine Hash-basierte strikte CSP ist die gleiche, außer dass sie Hashes statt Nonces verwendet:

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

Nonce-basierte Direktiven sind einfacher zu warten, wenn Sie dynamisch Antworten, einschließlich des Inhalts selbst, generieren können. Andernfalls müssen Sie Hash-basierte Direktiven verwenden. Das Problem mit Hash-basierter Direktiven ist, dass Sie den Hash neu berechnen und erneut anwenden müssen, wenn eine Änderung am Skriptinhalt vorgenommen wird.

#### Das `strict-dynamic` Schlüsselwort

Wie oben dargestellt, ist die strikte CSP schwer umzusetzen, wenn Sie Skripte verwenden, die nicht unter Ihrer Kontrolle stehen. Wenn ein Drittanbieter-Skript zusätzliche Skripte lädt oder Inline-Skripte verwendet, schlägt dies fehl, weil das Drittanbieter-Skript den Nonce oder Hash nicht weiterleitet.

Das `strict-dynamic` Schlüsselwort wird bereitgestellt, um bei diesem Problem zu helfen. Es ist ein Schlüsselwort, das in eine Fetch-Direktive aufgenommen werden kann, und es hat die Wirkung, dass wenn ein Skript einen Nonce oder einen Hash hat, dann dieses Skript weiter Skripte laden darf, die selbst keine Nonces oder Hashes haben. Das heißt, das Vertrauen, das in ein Skript durch einen Nonce oder einen Hash gesetzt wird, wird auf Skripte übertragen, die das ursprüngliche Skript lädt (und Skripte, die _sie_ laden, und so weiter).

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

Wir liefern unser Dokument mit einer CSP wie dieser:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
```

Das "main.js" Skript darf geladen werden, weil sein Hash dem Wert in der CSP entspricht. Aber sein Versuch, "main2.js" zu laden, wird fehlschlagen.

Wenn wir `'strict-dynamic'` zur CSP hinzufügen, dann darf "main.js" "main2.js" laden:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  strict-dynamic
```

Das `'strict-dynamic'` Schlüsselwort macht es viel einfacher, Nonce- oder Hash-basierte CSPs zu erstellen und zu pflegen, besonders wenn eine Website Drittanbieter-Skripte verwendet. Es macht Ihre CSP jedoch weniger sicher, weil, wenn die Skripte, die Sie einfügen, `<script>` Elemente auf Basis potenzieller XSS-Quellen erstellen, dann wird die CSP sie nicht schützen.

#### Refactoring von Inline-JavaScript und `eval()`

Wir haben oben gesehen, dass Inline-JavaScript standardmäßig in einer CSP nicht erlaubt ist. Mit Nonces oder Hashes kann ein Entwickler Inline-`<script>` Tags verwenden, aber Sie müssen immer noch Code umgestalten, um andere nicht erlaubte Muster, einschließlich Inline-Ereignishandler, `javascript:` URLs und Verwendungen von `eval()`, zu entfernen. Zum Beispiel sollten Inline-Ereignishandler in der Regel durch Aufrufe an [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ersetzt werden:

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

Die [`frame-ancestors`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) Direktive kann verwendet werden, um zu kontrollieren, welche Dokumente, falls vorhanden, erlaubt sind, dieses Dokument in einem eingebetteten Browserkontext wie einem {{htmlelement("iframe")}} einzubetten. Dies ist ein wirksamer Schutz gegen Clickjacking-Angriffe, da diese Angriffe auf der Einbettung der Zielsite in eine vom Angreifer kontrollierte Seite beruhen.

Die Syntax von `frame-ancestors` ist ein Teil der Fetch-Direktiven-Syntax: Sie können den Einzelwert-Schlüsselwort `'none'` oder einen oder mehrere Quellenausdrücke angeben. Die einzigen Quellenausdrücke, die Sie verwenden können, sind jedoch Schemata, Hostnamen oder das `'self'` Schlüsselwort.

Sofern Sie nicht möchten, dass Ihre Seite eingebettet werden kann, sollten Sie `frame-ancestors` auf `'none'` setzen:

```http
Content-Security-Policy: frame-ancestors 'none'
```

Diese Direktive ist ein flexibler Ersatz für den {{httpheader("X-Frame-Options")}} Header.

## Upgrade unsicherer Anfragen

Web-Entwickler werden nachdrücklich ermutigt, alle Inhalte über HTTPS zu bedienen. Beim Upgrade einer Site auf HTTPS wird manchmal das Hauptdokument über HTTPS bedient, aber seine Ressourcen werden über HTTP geliefert, zum Beispiel durch die Verwendung von Markup wie diesem:

```html
<script src="http://example.org/my-cat.js"></script>
```

Dies wird _gemischter Inhalt_ genannt und die Präsenz unsicherer Ressourcen schwächt den durch HTTPS gebotenen Schutz erheblich. Unter dem [Algorithmus für gemischten Inhalt](/de/docs/Web/Security/Mixed_content), den Browser implementieren, wenn ein Dokument über HTTPS geliefert wird, werden unsichere Ressourcen in "aufrüstbaren Inhalt" und "blockierbaren Inhalt" kategorisiert. Aufrüstbarer Inhalt wird auf HTTPS aufgerüstet, und blockierbarer Inhalt wird blockiert, was potenziell die Seite bricht.

Die ultimative Lösung für gemischten Inhalt besteht darin, dass Entwickler alle Ressourcen über HTTPS laden. Selbst wenn eine Site tatsächlich in der Lage ist, alle Inhalte über HTTPS zu bedienen, kann es dennoch sehr schwierig (oder sogar praktisch unmöglich, wenn es um archivierte Inhalte geht) für einen Entwickler sein, alle URLs der Site, die zum Laden von Ressourcen verwendet werden, neu zu schreiben.

Die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests) Direktive ist dazu gedacht, dieses Problem zu lösen. Diese Direktive hat keinen Wert: um sie festzulegen, fügen Sie einfach den direktenivennamen ein:

```http
Content-Security-Policy: upgrade-insecure-requests
```

Wenn diese Direktive in einem Dokument festgelegt ist, wird der Browser automatisch alle HTTP-URLs in den folgenden Fällen auf HTTPS aufrüsten:

- Anfragen zum Laden von Ressourcen (wie Bilder, Skripte oder Schriftarten)
- Navigationsanfragen (wie Linkziele), die mit dem Dokument gleichursprüngig sind
- Navigationsanfragen in eingebetteten Browserkontexten, wie iframes
- Formularübermittlungen

Navigationen auf oberster Ebene, deren Ziel eine andere Quelle ist, werden jedoch nicht aufgerüstet.

Zum Beispiel, nehmen wir an, das Dokument unter `https://example.org` wird mit einer CSP geliefert, die die `upgrade-insecure-requests` Direktive enthält, und das Dokument enthält Markup wie dieses:

```html
<script src="http://example.org/my-cat.js"></script>
<script src="http://not-example.org/another-cat.js"></script>
```

Der Browser wird beide dieser Anfragen automatisch auf HTTPS aufrüsten.

Angenommen, das Dokument enthält auch dies:

```html
<a href="http://example.org/more-cats">See some more cats!</a>
<a href="http://not-example.org/even-more-cats">More cats, on another site!</a>
```

Der Browser wird den ersten Link auf HTTPS aufrüsten, nicht jedoch den zweiten, da er eine Navigation zu einer anderen Quelle ist.

Diese Direktive ist kein Ersatz für den {{httpheader("Strict-Transport-Security")}} Header (auch als HSTS bekannt), da sie externe Links zu einer Site nicht aufrüstet. Sites sollten diese Direktive und den `Strict-Transport-Security` Header einfügen.

## Testen Ihrer Richtlinie

Um die Bereitstellung zu erleichtern, kann CSP im Nur-Bericht-Modus bereitgestellt werden.
Die Richtlinie wird nicht durchgesetzt, aber alle Verstöße werden an den im Richtlinienbericht angegebenen Endpunkt gesendet. Zusätzlich kann ein Nur-Bericht-Header verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich bereitzustellen.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header verwenden, um Ihre Richtlinie anzugeben, wie folgt:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header als auch ein {{HTTPHeader("Content-Security-Policy")}} Header in derselben Antwort vorhanden sind, werden beide Richtlinien berücksichtigt.
Die im `Content-Security-Policy` Header angegebene Richtlinie wird durchgesetzt, während die `Content-Security-Policy-Report-Only` Richtlinie Berichte erstellt, aber nicht durchgesetzt wird.

Beachten Sie, dass eine Nur-Bericht-Richtlinie im Gegensatz zu einer normalen Inhalts-Sicherheitsrichtlinie nicht in einem `<meta>` Element geliefert werden kann.

### Verletzungsberichte

Die empfohlene Methode zur Meldung von CSP-Verletzungen besteht darin, die [Reporting API](/de/docs/Web/API/Reporting_API) zu verwenden, Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} zu deklarieren und einen von ihnen als CSP-Berichts... target mit dem {{CSP("report-to")}} Direktive im `Content-Security-Policy` Header anzugeben.

> [!WARNING]
> Sie können auch die CSP {{CSP("report-uri")}} Direktive verwenden, um eine Ziel-URL für CSP-Verletzungsberichte anzugeben.
> Dies sendet ein leicht anderes JSON-Berichtsformat über eine `POST` Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`.
> Dieser Ansatz ist veraltet, aber Sie sollten beide erklären, bis {{CSP("report-to")}} in allen Browsern unterstützt wird.
> Für weitere Informationen zu diesem Ansatz siehe das Thema {{CSP("report-uri")}}.

Ein Server kann Kunden informieren, wohin Berichte gesendet werden, indem er den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort Header verwendet.
Dieser Header definiert einen oder mehrere Endpunkt-URLs als kommagetrennte Liste.
Zum Beispiel, um einen Berichtsendpunkt namens `csp-endpoint` zu definieren, der Berichte unter `https://example.com/csp-reports` akzeptiert, könnte der Antwort-Header des Servers folgendermaßen aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die verschiedene Arten von Berichten bearbeiten, würden Sie sie so angeben:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Sie können dann die `Content-Security-Policy` Header {{CSP("report-to")}} Direktive verwenden, um anzugeben, dass ein bestimmter festgelegter Endpunkt für die Berichterstattung verwendet werden soll.
Zum Beispiel, um CSP-Verletzungsberichte an `https://example.com/csp-reports` für die `default-src` zu senden, könnten Sie Antwort-Headers senden, die folgendermaßen aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn eine CSP-Verletzung auftritt, sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt über eine HTTP-`POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`.
Der Bericht ist eine serielle Form des [`Report`](/de/docs/Web/API/Report) Objekts, das eine `type` Eigenschaft mit einem Wert von `"csp-violation"` und einen `body` hat, der die serielle Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Objekts ist.

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

Sie müssen einen Server einrichten, der die Berichte mit dem angegebenen JSON-Format und Inhalts-Typ empfängt.
Der Server, der diese Anfragen bearbeitet, kann dann die eingehenden Berichte speichern oder verarbeiten, so dass es Ihren Bedürfnissen am besten entspricht.

## Siehe auch

- [Mitigieren Sie Cross-Site-Scripting mit einer strikten Content-Sicherheitsrichtlinie](https://web.dev/articles/strict-csp) auf web.dev (2024)
- [Content Security Policy: Ein erfolgreicher Mischmasch zwischen Härtung und Minderung](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) auf owasp.org
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
