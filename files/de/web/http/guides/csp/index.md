---
title: Content Security Policy (CSP)
slug: Web/HTTP/Guides/CSP
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

**Content Security Policy** (CSP) ist ein Feature, das hilft, das Risiko bestimmter Arten von Sicherheitsbedrohungen zu verhindern oder zu minimieren. Es besteht aus einer Reihe von Anweisungen von einer Website an einen Browser, die den Browser anweisen, Beschränkungen für die Dinge zu setzen, die der Code der Website tun darf.

Der Hauptanwendungsfall für CSP ist die Kontrolle, welche Ressourcen, insbesondere JavaScript-Ressourcen, ein Dokument laden darf. Dies wird hauptsächlich als Verteidigung gegen {{Glossary("cross-site_scripting", "Cross-Site-Scripting")}} (XSS)-Angriffe verwendet, bei denen ein Angreifer in der Lage ist, bösartigen Code in die Website des Opfers einzufügen.

Ein CSP kann auch andere Zwecke haben, einschließlich der Verteidigung gegen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und der Unterstützung, sicherzustellen, dass die Seiten einer Website über HTTPS geladen werden.

In diesem Leitfaden beginnen wir damit zu beschreiben, wie ein CSP an einen Browser geliefert wird und wie es auf hoher Ebene aussieht.

Dann beschreiben wir, wie es verwendet werden kann, um [die geladenen Ressourcen zu kontrollieren](#kontrolle_der_ressourcennutzung), um sich gegen XSS zu schützen, und dann andere Anwendungsfälle wie [Clickjacking-Schutz](#clickjacking-schutz) und [Aktualisierung unsicherer Anfragen](#aktualisierung_unsicherer_anfragen). Beachten Sie, dass es keine Abhängigkeit zwischen den verschiedenen Anwendungsfällen gibt: Wenn Sie Clickjacking-Schutz hinzufügen möchten, aber nicht XSS-Minderung, können Sie einfach die Direktiven für diesen Anwendungsfall hinzufügen.

Schließlich beschreiben wir [Strategien für das Ausrollen einer CSP](#testen_ihrer_richtlinie) und Werkzeuge, die helfen können, diesen Prozess zu erleichtern.

## CSP-Übersicht

Ein CSP sollte im {{httpheader("Content-Security-Policy")}}-Antwortheader an den Browser geliefert werden. Es sollte auf alle Antworten für alle Anfragen gesetzt werden, nicht nur auf das Hauptdokument.

Sie können es auch mit dem [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attribut des {{htmlelement("meta")}}-Elements Ihres Dokuments angeben, und dies ist eine nützliche Option für einige Anwendungsfälle, wie eine clientseitig gerenderte {{Glossary("SPA", "Single-Page-App")}}, die nur aus statischen Ressourcen besteht, da Sie dann vermeiden können, auf eine Serverinfrastruktur angewiesen zu sein. Diese Option unterstützt jedoch nicht alle CSP-Funktionen.

Die Richtlinie wird als eine Reihe von _Direktiven_ angegeben, die durch Semikolons getrennt sind. Jede Direktive steuert einen anderen Aspekt der Sicherheitsrichtlinie. Jede Direktive hat einen Namen, gefolgt von einem Leerzeichen, gefolgt von einem Wert. Verschiedene Direktiven können unterschiedliche Syntaxen haben.

Betrachten Sie zum Beispiel das folgende CSP:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

Es setzt zwei Direktiven:

- die `default-src`-Direktive ist auf `'self'` gesetzt
- die `img-src`-Direktive ist auf `'self' example.com` gesetzt.

![Ein CSP wird in seine Direktiven aufgeteilt.](csp-overview.svg)

Die erste Direktive, `default-src`, weist den Browser an, nur Ressourcen zu laden, die mit dem Dokument gleichherkunftsberechtigt sind, es sei denn, andere spezifischere Direktiven setzen eine andere Richtlinie für andere Ressourcentypen. Die zweite, `img-src`, weist den Browser an, Bilder zu laden, die gleichherkunftsberechtigt sind oder von `example.com` stammen.

Im nächsten Abschnitt betrachten wir die Werkzeuge, die zur Kontrolle der Ressourcennutzung zur Verfügung stehen, was die Hauptfunktion eines CSP ist.

## Kontrolle der Ressourcennutzung

Ein CSP kann verwendet werden, um die Ressourcen zu kontrollieren, die ein Dokument laden darf. Dies wird hauptsächlich zum Schutz vor Cross-Site-Scripting (XSS)-Angriffen verwendet.

In diesem Abschnitt werden wir zuerst sehen, wie die Kontrolle der Ressourcennutzung helfen kann, sich gegen XSS zu schützen, dann die Werkzeuge, die CSP bereitstellt, um zu kontrollieren, welche Ressourcen geladen werden. Schließlich beschreiben wir eine empfohlene Strategie, die als „Striktes CSP“ bezeichnet wird.

### XSS und Ressourcennutzung

Ein Cross-Site-Scripting (XSS)-Angriff ist ein Angriff, bei dem ein Angreifer seinen Code im Kontext der Zielwebsite ausführen kann. Dieser Code kann dann alles tun, was der eigene Code der Website tun könnte, einschließlich zum Beispiel:

- Zugriff auf oder Änderung des Inhalts der geladenen Seiten der Website
- Zugriff auf oder Änderung von Inhalten im lokalen Speicher
- HTTP-Anfragen mit den Anmeldeinformationen des Benutzers machen, wodurch es ihm ermöglicht wird, den Benutzer zu imitieren oder auf vertrauliche Daten zuzugreifen

Ein XSS-Angriff ist möglich, wenn eine Website eine Eingabe akzeptiert, die von einem Angreifer erstellt worden sein könnte (zum Beispiel URL-Parameter oder ein Kommentar zu einem Blogbeitrag) und sie dann in die Seite einfügt, ohne sie zu _sanisieren_: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausgeführt werden kann.

Websites sollten sich vor XSS schützen, indem sie diese Eingaben sanitisieren, bevor sie in die Seite eingefügt werden. Ein CSP bietet einen ergänzenden Schutz, der die Website auch dann schützen kann, wenn die Sanitisierung fehlschlägt.

Wenn die Sanitisierung fehlschlägt, gibt es verschiedene Formen, die der eingefügte bösartige Code im Dokument annehmen kann, einschließlich:

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

- Ein Inline-Event-Handler:

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

Ein CSP kann Schutz gegen alle diese bieten. Mit einem CSP können Sie:

- die erlaubten Quellen für JavaScript-Dateien und andere Ressourcen definieren und effektiv das Laden von `https://evil.example.com` blockieren
- Inline-Skript-Tags deaktivieren
- nur die Skript-Tags zulassen, die die korrekte Nonce oder den Hash gesetzt haben
- Inline-Event-Handler deaktivieren
- `javascript:` URLs deaktivieren
- gefährliche APIs wie `eval()` deaktivieren

Im nächsten Abschnitt gehen wir auf die Werkzeuge ein, die CSP bietet, um diese Dinge zu tun.

> [!NOTE]
> Das Setzen eines CSP ist keine Alternative zur Eingabesanitierung. Websites sollten Eingaben sanitisieren _und_ ein CSP setzen, um Vertiefungsschutz gegen XSS zu bieten.

### Fetch-Direktiven

Fetch-Direktiven werden verwendet, um eine bestimmte Kategorie von Ressourcen anzugeben, die ein Dokument laden darf — wie JavaScript, CSS-Stylesheets, Bilder, Schriftarten usw.

Es gibt verschiedene Fetch-Direktiven für verschiedene Ressourcentypen. Zum Beispiel:

- [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) legt die erlaubten Quellen für JavaScript fest.
- [`style-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) legt die erlaubten Quellen für CSS-Stylesheets fest.
- [`img-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) legt die erlaubten Quellen für Bilder fest.

Eine spezielle Fetch-Direktive ist `default-src`, die eine Fallback-Richtlinie für alle Ressourcen festlegt, deren Direktiven nicht explizit aufgeführt sind.

Für das vollständige Set von Fetch-Direktiven siehe die [Referenzdokumentation](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directives).

Jede Fetch-Direktive wird entweder als das Schlüsselwort `'none'` oder als eine oder mehrere _Quellenausdrücke_, getrennt durch Leerzeichen, angegeben. Wenn mehr als ein Quellenausdruck aufgelistet ist: wenn eine der Methoden die Ressource erlaubt, dann ist die Ressource erlaubt.

Zum Beispiel setzt das unten stehende CSP zwei Fetch-Direktiven:

- `default-src` wird der Einzelquellenausdruck `'self'` gegeben
- `img-src` wird zwei Quellenausdrücke gegeben: `'self'` und `example.com`

![CSP-Diagramm, das Quellenausdrücke zeigt](csp-source-expressions.svg)

Die Wirkung davon ist, dass:

- Bilder entweder gleichherkunftsberechtigt mit dem Dokument sein müssen oder von `example.com` geladen werden müssen
- alle anderen Ressourcen gleichherkunftsberechtigt mit dem Dokument sein müssen.

In den nächsten Abschnitten beschreiben wir einige der Möglichkeiten, wie Sie Quellenausdrücke verwenden können, um Ressourcennutzung zu kontrollieren. Beachten Sie, dass, obwohl wir sie separat beschreiben, diese Ausdrücke im Allgemeinen kombiniert werden können: zum Beispiel kann eine einzelne Fetch-Direktive sowohl Nonces als auch Hostnamen enthalten.

#### Ressourcen blockieren

Um einen Ressourcentyp vollständig zu blockieren, verwenden Sie das Schlüsselwort `'none'`. Zum Beispiel blockiert die folgende Direktive alle {{htmlelement("object")}}- und {{htmlelement("embed")}}-Ressourcen:

```http
Content-Security-Policy: object-src 'none'
```

Beachten Sie, dass `'none'` nicht mit einer anderen Methode in einer bestimmten Direktive kombiniert werden kann: in der Praxis, wenn andere Quellenausdrücke zusammen mit `'none'` gegeben werden, dann werden sie ignoriert.

#### Nonces

Eine `nonce` ist die empfohlene Vorgehensweise zur Einschränkung des Ladens von {{htmlelement("script")}}- und {{htmlelement("style")}}-Ressourcen.

Mit einer Nonce generiert der Server einen Zufallswert für jede HTTP-Antwort und fügt ihn in eine `script-src`- und/oder eine `style-src`-Direktive ein:

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server fügt dann diesen Wert als Wert des `nonce`-Attributes aller `<script>`- und/oder `<style>`-Tags ein, die er in das Dokument einfügen möchte.

Der Browser vergleicht die beiden Werte und lädt die Ressource nur, wenn sie übereinstimmen. Die Idee ist, dass auch wenn ein Angreifer es schaffen sollte, etwas JavaScript in die Seite einzuschleusen, er nicht wissen wird, welche Nonce der Server verwenden wird, und daher der Browser das Skript nicht ausführen wird.

Damit dieser Ansatz funktioniert, darf es für einen Angreifer nicht möglich sein, die Nonce zu erraten.

**Das bedeutet in der Praxis, dass die Nonce für jede HTTP-Antwort unterschiedlich sein muss und nicht vorhersehbar sein darf.**

Dies bedeutet wiederum, dass der Server kein statisches HTML bereitstellen kann, da er bei jeder Anfrage eine neue Nonce einfügen muss. Typischerweise würde der Server eine Templating-Engine verwenden, um die Nonce einzufügen.

Hier ist ein Beispielcode von [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs), um dies zu veranschaulichen:

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

Bei jeder Anfrage generiert der Server eine neue Nonce, fügt sie in das CSP und in die {{htmlelement("script")}}-Tags im zurückgegebenen Dokument ein. Beachten Sie, dass der Server:

- eine neue Nonce für jede Anfrage generiert
- Nonces sowohl für externe als auch für Inline-Skripte verwenden kann
- dieselbe Nonce für alle `<script>`-Tags im Dokument verwendet

Es ist wichtig, dass der Server eine Art Templating zur Einfügung von Nonces verwendet und sie nicht einfach in alle `<script>`-Tags einfügt: andernfalls könnte der Server versehentlich Nonces in Skripte einfügen, die von einem Angreifer eingeschleust wurden.

Beachten Sie, dass Nonces nur für Elemente verwendet werden können, die ein `nonce`-Attribut haben: das heißt, nur `<script>`- und `<style>`-Elemente.

#### Hashes

Fetch-Direktiven können auch einen Hash des Skripts verwenden, um seine Integrität zu garantieren. Mit dieser Methode:

1. berechnet der Server einen Hash des Skriptinhalts unter Verwendung einer {{Glossary("cryptographic_hash_function", "kryptografischen Hash-Funktion")}} (eine von SHA-256, SHA-384 oder SHA-512)
2. erstellt eine {{Glossary("Base64", "Base64")}}-Codierung des Ergebnisses
3. fügt ein Präfix hinzu, das den verwendeten Hash-Algorithmus identifiziert (einer von `sha256-`, `sha384-`, oder `sha512-`).

Dann fügt er das Ergebnis der Direktive hinzu:

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

Wenn der Browser das Dokument erhält, hasht er das Skript, vergleicht das Ergebnis mit dem Wert aus dem Header und lädt das Skript nur, wenn sie übereinstimmen.

Externe Skripte müssen auch das [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attribut enthalten, damit diese Methode funktioniert.

Hier ist ein Beispielcode von Express, um dies zu verdeutlichen:

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
- Für das externe Skript "main.js" fügen wir auch das `integrity`-Attribut hinzu und geben ihm denselben Wert.
- Im Gegensatz zum Beispiel mit Nonces können sowohl das CSP als auch der Inhalt statisch sein, da die Hashes gleich bleiben. Dies macht hash-basierte Richtlinien besser geeignet für statische Seiten oder Websites, die auf clientseitige Darstellung angewiesen sind.

#### Schema-basierte Richtlinien

Fetch-Direktiven können ein Schema wie `https:` auflisten, um Ressourcen zuzulassen, die über dieses Schema bereitgestellt werden. Dies erlaubt zum Beispiel, dass eine Richtlinie HTTPS für alle Ressourcennutzungen erfordert:

```http
Content-Security-Policy: default-src https:
```

#### Standortbasierte Richtlinien

Fetch-Direktiven können Ressourcennutzungen basierend darauf kontrollieren, wo sich die Ressource befindet.

Das Schlüsselwort `'self'` erlaubt Ressourcen, die mit dem Dokument selbst gleichherkunftsberechtigt sind:

```http
Content-Security-Policy: img-src 'self'
```

Sie können auch einen oder mehrere Hostnamen angeben, möglicherweise auch mit Platzhaltern, und nur von diesen Hosts bereitgestellte Ressourcen werden zugelassen. Auf diese Weise könnte zum Beispiel erlaubt werden, dass Inhalte von einem vertrauenswürdigen CDN bereitgestellt werden.

```http
Content-Security-Policy: img-src *.example.org
```

Sie können mehrere Standorte angeben. Die folgende Direktive erlaubt nur Bilder, die gleichherkunftsberechtigt mit dem aktuellen Dokument sind, oder von einer Subdomäne von "example.org" geladen werden, oder von "example.com":

```http
Content-Security-Policy: img-src 'self' *.example.org  example.com
```

#### Inline-JavaScript

Wenn ein CSP entweder eine `default-src` oder eine `script-src`-Direktive enthält, wird inline JavaScript nicht ausgeführt, es sei denn, es werden zusätzliche Maßnahmen ergriffen, um es zu ermöglichen. Dies umfasst:

- JavaScript, das innerhalb eines `<script>`-Elements auf der Seite enthalten ist:

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

Das Schlüsselwort `unsafe-inline` kann verwendet werden, um diese Einschränkung außer Kraft zu setzen. Zum Beispiel erfordert die folgende Direktive, dass alle Ressourcen gleichherkunftsberechtigt sein müssen, erlaubt jedoch inline JavaScript:

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es viel des Zwecks eines CSP zunichte macht. Inline-JavaScript ist einer der häufigsten XSS-Vektoren, und eines der grundlegendsten Ziele eines CSP ist es, dessen unkontrollierten Gebrauch zu verhindern.

Inline-`<script>`-Elemente sind erlaubt, wenn sie durch eine Nonce oder einen Hash geschützt sind, wie oben beschrieben.

Wenn eine Direktive Nonce- oder Hash-Ausdrücke enthält, wird das `unsafe-inline`-Schlüsselwort von Browsern ignoriert.

#### `eval()` und ähnliche APIs

Wie beim Inline-JavaScript wird auch `eval()` und ähnliche APIs nicht ausgeführt, wenn ein CSP entweder eine `default-src` oder eine `script-src`-Direktive enthält. Dazu gehören unter anderem APIs:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) selbst:

  ```js
  eval('console.log("hello from eval()")');
  ```

- Der {{jsxref("Function/Function()", "Function()")}}-Konstruktor:

  ```js
  const sum = new Function("a", "b", "return a + b");
  ```

- Das String-Argument bei [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval):

  ```js
  setTimeout("console.log('hello from setTimeout')", 1);
  ```

Das Schlüsselwort `unsafe-eval` kann verwendet werden, um dieses Verhalten außer Kraft zu setzen, und aus den gleichen Gründen wie bei `unsafe-inline`: **Entwickler sollten `unsafe-eval` vermeiden**. Manchmal kann es schwierig sein, die Verwendung von `eval()` zu entfernen: in diesen Situationen kann die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) es sicherer machen, indem sie sicherstellt, dass die Eingabe eine definierte Richtlinie erfüllt.

Im Gegensatz zu `unsafe-inline` funktioniert das `unsafe-eval`-Schlüsselwort weiterhin in einer Direktive, die Nonce- oder Hash-Ausdrücke enthält.

### Striktes CSP

Um das Laden von Skripten als Abwehr gegen XSS zu kontrollieren, wird empfohlen, [Nonce-](#nonces) oder [Hash-](#hashes) basierte Fetch-Direktiven zu verwenden. Dies wird als _striktes CSP_ bezeichnet. Diese Art von CSP hat zwei Hauptvorteile gegenüber einem standortbasierten CSP (häufig als _Erlaubnisliste-CSP_ bezeichnet):

- Erlaubnislisten-CSPs sind schwer richtig zu setzen und oft listen Richtlinien versehentlich unsichere Domains auf, und bieten daher keinen effektiven Schutz gegen XSS (siehe [CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)).
- Erlaubnislisten-CSPs können sehr groß und schwer zu pflegen sein, insbesondere wenn man Skripte verwendet, die außerhalb Ihrer Kontrolle liegen. Laut [How I learned to stop worrying and love the Content Security Policy](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/), um Google Analytics zu integrieren, wird ein Entwickler gebeten, 187 Google-Domains zur Erlaubnisliste hinzuzufügen.

Ein nonce-basiertes striktes CSP sieht folgendermaßen aus:

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

In diesem CSP:

- verwenden wir Nonces, um zu kontrollieren, welche JavaScript-Ressourcen geladen werden dürfen
- blockieren wir alle Objekt-Einbettungen
- blockieren wir alle Verwendungen des `<base>`-Elements, um eine Basis-URI festzulegen.

Ein hash-basiertes striktes CSP ist dasselbe, außer dass es Hashes anstelle von Nonces verwendet:

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

Nonce-basierte Direktiven sind leichter zu pflegen, wenn Sie Antworten, einschließlich des Inhalts selbst, dynamisch generieren können. Andernfalls müssen Sie hash-basierte Direktiven verwenden. Das Problem bei hash-basierten Direktiven ist, dass Sie den Hash neu berechnen und wieder anwenden müssen, wenn eine Änderung am Skriptinhalt vorgenommen wird.

#### Das `strict-dynamic`-Schlüsselwort

Wie oben dargestellt, ist das strikte CSP schwer umzusetzen, wenn Sie Skripte verwenden, die nicht unter Ihrer Kontrolle stehen. Wenn ein Drittanbieterskript weitere Skripte lädt oder Inline-Skripte verwendet, wird dies fehlschlagen, weil das Drittanbieterskript die Nonce oder den Hash nicht weitergeben wird.

Das `strict-dynamic`-Schlüsselwort wird bereitgestellt, um bei diesem Problem zu helfen. Es ist ein Schlüsselwort, das in einer Fetch-Direktive enthalten sein kann, und es hat die Wirkung, dass wenn ein Skript eine Nonce oder einen Hash hat, dann darf dieses Skript weitere Skripte laden, die selbst keine Nonces oder Hashes haben. Das heißt, das Vertrauen, das in ein Skript durch eine Nonce oder einen Hash gesetzt wird, wird auf die Skripte übertragen, die das ursprüngliche Skript lädt (und auf die Skript, die _sie_ laden, und so weiter).

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

Es enthält ein Skript "main.js", das ein anderes Skript "main2.js" erstellt und hinzufügt:

```js
console.log("hello");

const scriptElement = document.createElement("script");
scriptElement.src = `main2.js`;

document.head.appendChild(scriptElement);
```

Wir dienen unser Dokument mit einem CSP wie diesem:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
```

Das Skript "main.js" darf geladen werden, weil sein Hash mit dem Wert in der CSP übereinstimmt. Aber sein Versuch, "main2.js" zu laden, wird fehlschlagen.

Wenn wir `'strict-dynamic'` zur CSP hinzufügen, dann darf "main.js" "main2.js" laden:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  strict-dynamic
```

Das `'strict-dynamic'`-Schlüsselwort erleichtert es erheblich, nonce- oder hash-basierte CSPs zu erstellen und zu pflegen, insbesondere wenn eine Website Drittanbieterskripte verwendet. Es macht Ihre CSP jedoch weniger sicher, da wenn die Skripte, die Sie einschließen, `<script>`-Elemente basierend auf potenziellen Quellen von XSS erstellen, dann wird die CSP sie nicht schützen.

#### Neustrukturierung von Inline-JavaScript und `eval()`

Wir haben oben gesehen, dass Inline-JavaScript standardmäßig in einer CSP nicht erlaubt ist. Mit Nonces oder Hashes kann ein Entwickler Inline-`<script>`-Tags verwenden, aber Sie müssen den Code dennoch umstrukturieren, um andere nicht erlaubte Muster zu entfernen, einschließlich inline Event-Handler, `javascript:` URLs und Verwendungen von `eval()`. Zum Beispiel sollten Inline-Ereignishandler normalerweise durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ersetzt werden:

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

Die [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) Direktive kann verwendet werden, um zu kontrollieren, welche Dokumente, wenn überhaupt, dieses Dokument in einem verschachtelten Browsing-Kontext wie einem {{htmlelement("iframe")}} einbetten dürfen. Dies ist ein effektiver Schutz gegen Clickjacking-Angriffe, da diese Angriffe davon abhängen, die Zielseite in einer vom Angreifer kontrollierten Website einzubetten.

Die Syntax von `frame-ancestors` ist eine Teilmenge der Fetch-Direktiven-Syntax: Sie können das einzelne Schlüsselwort `'none'` oder einen oder mehrere Quellenausdrücke angeben. Die einzigen Quellenausdrücke, die Sie verwenden können, sind jedoch Schemata, Hostnamen oder der Schlüsselwortwert `'self'`.

Es sei denn, Sie benötigen Ihre Seite einbettbar, sollten Sie `frame-ancestors` auf `'none'` setzen:

```http
Content-Security-Policy: frame-ancestors 'none'
```

Diese Direktive ist ein flexibler Ersatz für den {{httpheader("X-Frame-Options")}}-Header.

## Aktualisierung unsicherer Anfragen

Webentwickler werden nachdrücklich ermutigt, alle ihre Inhalte über HTTPS bereitzustellen. Im Verlauf des Upgrades einer Website auf HTTPS wird manchmal das Hauptdokument über HTTPS bereitgestellt, aber die Ressourcen über HTTP, zum Beispiel mit Markup wie diesem:

```html
<script src="http://example.org/my-cat.js"></script>
```

Dies wird _gemischter Inhalt_ genannt, und das Vorhandensein unsicherer Ressourcen schwächt den durch HTTPS gewährten Schutz erheblich. Unter dem von Browsern implementierten [gemischten Inhalt-Algorithmus](/de/docs/Web/Security/Mixed_content) wird, wenn ein Dokument über HTTPS bereitgestellt wird, unsicherer Inhalt in „aktualisierbaren Inhalt“ und „blockierbaren Inhalt“ kategorisiert. Aktualisierbarer Inhalt wird auf HTTPS aktualisiert, und blockierbarer Inhalt wird blockiert, was möglicherweise die Seite beschädigt.

Die ultimative Lösung für gemischten Inhalt besteht darin, dass Entwickler alle Ressourcen über HTTPS laden. Auch wenn eine Website tatsächlich in der Lage ist, alle Inhalte über HTTPS bereitzustellen, kann es für einen Entwickler dennoch sehr schwierig (oder gar unmöglich bei archivierten Inhalten) sein, alle von der Website verwendeten URLs zur Ressourcennutzung umzuschreiben.

Die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests)-Direktive soll dieses Problem lösen. Diese Direktive hat keinen Wert: um sie zu setzen, fügen Sie einfach den Direktivennamen hinzu:

```http
Content-Security-Policy: upgrade-insecure-requests
```

Wenn diese Direktive auf ein Dokument gesetzt ist, wird der Browser automatisch HTTP-URLs in den folgenden Fällen auf HTTPS aktualisieren:

- Anfragen zum Laden von Ressourcen (wie Bilder, Skripte oder Schriftarten)
- Navigationsanfragen (wie Linkziele), die gleichherkunftsberechtigt mit dem Dokument sind
- Navigationsanfragen in verschachtelten Browsing-Kontexten, wie iframes
- Formularübermittlungen

Hingegen werden Top-Level-Navigationsanfragen, deren Ziel ein anderer Ursprung ist, nicht aktualisiert.

Zum Beispiel, nehmen wir an, das Dokument unter `https://example.org` wird mit einem CSP bereitgestellt, das die `upgrade-insecure-requests`-Direktive enthält, und das Dokument enthält eine Markup wie dieses:

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

Der Browser wird den ersten Link auf HTTPS aktualisieren, aber nicht den zweiten, da er zu einem anderen Ursprung navigiert.

Diese Direktive ist kein Ersatz für den {{httpheader("Strict-Transport-Security")}}-Header (auch bekannt als HSTS), weil sie keine externen Links zu einer Website aktualisiert. Websites sollten diese Direktive und den `Strict-Transport-Security`-Header einfügen.

## Testen Ihrer Richtlinie

Um die Bereitstellung zu erleichtern, kann CSP im Reporting-Only-Modus bereitgestellt werden. Die Richtlinie wird nicht durchgesetzt, aber alle Verstöße werden an den Meldungsendpunkt gesendet, der in der Richtlinie angegeben ist. Zusätzlich kann ein Reporting-Only-Header verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich zu implementieren.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}}-HTTP-Header verwenden, um Ihre Richtlinie wie folgt anzugeben:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header als auch ein {{HTTPHeader("Content-Security-Policy")}}-Header in der gleichen Antwort vorhanden sind, werden beide Richtlinien berücksichtigt. Die im `Content-Security-Policy`-Header angegebene Richtlinie wird durchgesetzt, während die `Content-Security-Policy-Report-Only`-Richtlinie Berichte generiert, aber nicht durchgesetzt wird.

Beachten Sie, dass im Gegensatz zu einer normalen Content-Security-Richtlinie eine Reporting-Only-Richtlinie nicht in einem `<meta>`-Element bereitgestellt werden kann.

### Verstoßberichterstattung

Die empfohlene Methode zum Melden von CSP-Verstößen ist die Verwendung der [Messaging API](/de/docs/Web/API/Reporting_API), indem Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} deklariert und einer von ihnen als CSP Meldungsempfänger angegeben wird, indem die {{CSP("report-to")}}-Direktive des `Content-Security-Policy`-Headers verwendet wird.

> [!WARNING]
> Sie können auch die CSP {{CSP("report-uri")}}-Direktive verwenden, um eine Ziel-URL für CSP-Verstoßberichte anzugeben.
> Dies sendet ein leicht anderes JSON-Berichtsformat über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`.
> Dieser Ansatz ist veraltet, aber Sie sollten beide angeben, bis {{CSP("report-to")}} in allen Browsern unterstützt wird.
> Weitere Informationen zu diesem Ansatz finden Sie im Thema {{CSP("report-uri")}}.

Ein Server kann Clients darüber informieren, wohin Berichte gesendet werden sollen, indem er den {{HTTPHeader("Reporting-Endpoints")}}-HTTP-Antwortheader verwendet. Dieser Header definiert eine oder mehrere Endpunkt-URLs als kommagetrennte Liste. Zum Beispiel, um einen Berichtsendpunkt namens `csp-endpoint` zu definieren, der Berichte an `https://example.com/csp-reports` akzeptiert, könnte der Antwortheader des Servers folgendermaßen aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die verschiedene Arten von Berichten verarbeiten, würden Sie sie folgendermaßen angeben:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Sie können dann die {{CSP("report-to")}}-Direktive des `Content-Security-Policy`-Headers verwenden, um anzugeben, dass ein bestimmter definierter Endpunkt für das Reporting verwendet werden soll. Zum Beispiel, um CSP-Verstöße an `https://example.com/csp-reports` für die `default-src` zu senden, könnten Sie Antwortheader senden, die folgendermaßen aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn ein CSP-Verstoß auftritt, sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt über eine HTTP-`POST`-Operation, mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`. Der Bericht ist eine serialisierte Form des [`Report`](/de/docs/Web/API/Report)-Objekts, das eine `type`-Eigenschaft mit einem Wert von `"csp-violation"` hat, und einen `body`, der die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist.

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

Sie müssen einen Server einrichten, der Berichte in diesem JSON-Format und Inhaltstyp empfängt. Der Server, der diese Anfragen bearbeitet, kann dann die eingehenden Berichte in einer Weise speichern oder verarbeiten, die Ihren Anforderungen am besten entspricht.

## Siehe auch

- [Cross-Site-Scripting mit einer strikten Content-Security-Richtlinie abschwächen](https://web.dev/articles/strict-csp) auf web.dev (2024)
- [Content Security Policy: Ein erfolgreiches Chaos zwischen Härtung und Minderung](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) auf owasp.org
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
