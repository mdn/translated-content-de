---
title: Content Security Policy (CSP)
slug: Web/HTTP/Guides/CSP
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**Content Security Policy** (CSP) ist eine Funktion, die hilft, das Risiko bestimmter Sicherheitsbedrohungen zu verhindern oder zu minimieren. Sie besteht aus einer Reihe von Anweisungen einer Website an einen Browser, die den Browser anweisen, Einschränkungen für die Aktivitäten des die Site bildenden Codes zu setzen.

Der primäre Anwendungsfall für CSP ist die Kontrolle, welche Ressourcen, insbesondere JavaScript-Ressourcen, ein Dokument laden darf. Dies wird hauptsächlich als Verteidigung gegen {{Glossary("cross-site_scripting", "Cross-Site Scripting")}} (XSS)-Angriffe verwendet, bei denen ein Angreifer bösartigen Code in die Seite des Opfers einschleusen kann.

Ein weiterer Zweck von CSP kann die Verteidigung gegen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) sein und die Sicherstellung, dass die Seiten einer Site über HTTPS geladen werden.

In diesem Leitfaden beginnen wir mit einer Beschreibung, wie eine CSP an einen Browser geliefert wird und wie sie auf hoher Ebene aussieht.

Dann beschreiben wir, wie sie verwendet werden kann, um [zu kontrollieren, welche Ressourcen geladen werden](#kontrolle_des_ressourcennachladens), um XSS zu verhindern, sowie andere Anwendungsfälle wie [Clickjacking-Schutz](#clickjacking-schutz) und [Aufrüsten unsicherer Anfragen](#aufrüsten_unsicherer_anfragen). Beachten Sie, dass es keine Abhängigkeiten zwischen den verschiedenen Anwendungsfällen gibt: Wenn Sie Clickjacking-Schutz hinzufügen möchten, aber keine XSS-Minderung, können Sie einfach die Direktiven für diesen Anwendungsfall hinzufügen.

Schließlich beschreiben wir [Strategien zur Bereitstellung einer CSP](#testen_ihrer_richtlinie) und Werkzeuge, die diesen Prozess erleichtern können.

## CSP-Übersicht

Eine CSP sollte an den Browser im {{httpheader("Content-Security-Policy")}} Antwort-Header geliefert werden. Sie sollte für alle Antworten auf alle Anfragen gesetzt werden, nicht nur für das Hauptdokument.

Sie können sie auch mit dem Attribut [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) des {{htmlelement("meta")}} Elements Ihres Dokuments angeben, was eine nützliche Option für einige Anwendungsfälle ist, z. B. eine client-seitig gerenderte {{Glossary("SPA", "Single Page App")}}, die nur statische Ressourcen hat, weil Sie dann nicht auf eine Serverinfrastruktur angewiesen sind. Diese Option unterstützt jedoch nicht alle CSP-Funktionen.

Die Richtlinie wird als eine Reihe von _Direktiven_ angegeben, die durch Semikolons getrennt sind. Jede Direktive steuert einen anderen Aspekt der Sicherheitsrichtlinie. Jede Direktive hat einen Namen, gefolgt von einem Leerzeichen, gefolgt von einem Wert. Unterschiedliche Direktiven können unterschiedliche Syntaxen haben.

Betrachten Sie zum Beispiel die folgende CSP:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

Sie setzt zwei Direktiven:

- Die `default-src` Direktive ist auf `'self'` gesetzt
- Die `img-src` Direktive ist auf `'self' example.com` gesetzt.

![Eine CSP, aufgeschlüsselt in ihre Direktiven.](csp-overview.svg)

Die erste Direktive, `default-src`, weist den Browser an, nur Ressourcen zu laden, die sich im gleichen Ursprung wie das Dokument befinden, es sei denn, andere spezifischere Direktiven setzen eine andere Richtlinie für andere Ressourcentypen. Die zweite, `img-src`, weist den Browser an, Bilder zu laden, die entweder gleichen Ursprung haben oder von `example.com` stammen.

Im nächsten Abschnitt betrachten wir die verfügbaren Werkzeuge zur Kontrolle von Ressourcennachladen, welches die Hauptfunktion einer CSP ist.

## Kontrolle des Ressourcennachladens

Eine CSP kann verwendet werden, um die Ressourcen zu kontrollieren, die ein Dokument laden darf. Dies wird hauptsächlich zum Schutz vor Cross-Site Scripting (XSS)-Angriffen verwendet.

In diesem Abschnitt sehen wir zuerst, wie die Kontrolle von Ressourcennachladen helfen kann, XSS zu verhindern, dann die Werkzeuge, die CSP bereitstellt, um zu kontrollieren, welche Ressourcen geladen werden. Schließlich beschreiben wir eine besonders empfohlene Strategie, die "Strict CSP" genannt wird.

### XSS und Ressourcennachladen

Ein Cross-Site Scripting (XSS)-Angriff ist ein Angriff, bei dem ein Angreifer seinen Code im Kontext der Zielwebsite ausführen kann. Dieser Code kann dann alles tun, was der Code der Website selbst tun könnte, einschließlich z. B.:

- Zugreifen auf oder Modifizieren des Inhalts der geladenen Seiten der Website
- Zugreifen auf oder Modifizieren des Inhalts im lokalen Speicher
- HTTP-Anfragen mit den Anmeldedaten des Benutzers durchführen, wodurch es möglich wird, den Benutzer zu imitieren oder auf sensible Daten zuzugreifen

Ein XSS-Angriff ist möglich, wenn eine Website eine Eingabe akzeptiert, die von einem Angreifer erstellt worden sein könnte (z. B. URL-Parameter oder ein Kommentar zu einem Blogpost), und diese dann in die Seite einschließt, ohne sie zu _sanitizeren_: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausgeführt werden kann.

Websites sollten sich vor XSS schützen, indem sie diese Eingabe sanitiseren, bevor sie sie in die Seite einfügen. Eine CSP bietet einen ergänzenden Schutz, der die Website schützen kann, selbst wenn die Sanitization fehlschlägt.

Wenn die Sanitization fehlschlägt, gibt es verschiedene Formen, die der eingeschleuste bösartige Code im Dokument annehmen kann, einschließlich:

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

- Ein String-Argument für eine unsichere API wie [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval):

  ```js
  eval("console.log(`You've been hacked!`)");
  ```

Eine CSP kann gegen all dies Schutz bieten. Mit einer CSP können Sie:

- die erlaubten Quellen für JavaScript-Dateien und andere Ressourcen definieren und dadurch das Laden von `https://evil.example.com` effektiv blockieren
- Inline-Skripttags deaktivieren
- nur Skripttags zulassen, die das korrekte `nonce` oder den korrekten `hash` haben
- Inline-Ereignishandler deaktivieren
- `javascript:` URLs deaktivieren
- gefährliche APIs wie `eval()` deaktivieren

Im nächsten Abschnitt gehen wir auf die von CSP bereitgestellten Werkzeuge ein, um diese Dinge zu tun.

> [!NOTE]
> Das Setzen einer CSP ist keine Alternative zur Sanitisierung von Eingaben. Websites sollten Eingaben sanitizeren _und_ eine CSP setzen, um einen tiefgehenden Schutz gegen XSS zu bieten.

### Abrufdirektiven

Abrufdirektiven werden verwendet, um eine bestimmte Ressourcenkategorie anzugeben, die ein Dokument laden darf - z. B. JavaScript, CSS-Stylesheets, Bilder, Schriftarten usw.

Es gibt unterschiedliche Abrufdirektiven für unterschiedliche Arten von Ressourcen. Zum Beispiel:

- [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) legt erlaubte Quellen für JavaScript fest.
- [`style-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) legt erlaubte Quellen für CSS-Stylesheets fest.
- [`img-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) legt erlaubte Quellen für Bilder fest.

Eine spezielle Abrufdirektive ist `default-src`, die eine Fallback-Richtlinie für alle Ressourcen festlegt, deren Direktiven nicht explizit aufgelistet sind.

Für die vollständige Liste der Abrufdirektiven siehe die [Referenzdokumentation](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directives).

Jede Abrufdirektive wird entweder als das Einzelstichwort `'none'` oder als ein oder mehrere _Quellausdrücke_ angegeben, die durch Leerzeichen getrennt sind. Wenn mehr als ein Quellausdruck aufgelistet ist: Wenn eine der Methoden die Ressource zulässt, dann ist die Ressource erlaubt.

Zum Beispiel legt die folgende CSP zwei Abrufdirektiven fest:

- `default-src` erhält den Einzelquellausdruck `'self'`
- `img-src` erhält zwei Quellausdrücke: `'self'` und `example.com`

![CSP-Diagramm, das Quellausdrücke zeigt](csp-source-expressions.svg)

Die Wirkung davon ist:

- Bilder müssen entweder den gleichen Ursprung haben wie das Dokument oder von `example.com` geladen werden.
- Alle anderen Ressourcen müssen den gleichen Ursprung haben wie das Dokument.

In den nächsten Abschnitten beschreiben wir einige der Möglichkeiten, wie Sie Quellausdrücke verwenden können, um Ressourcennachladen zu kontrollieren. Beachten Sie, dass, obwohl wir sie separat beschreiben, diese Ausdrücke im Allgemeinen kombiniert werden können: Eine einzelne Abrufdirektive kann zum Beispiel Nonces sowie Hostnamen beinhalten.

#### Blockieren von Ressourcen

Um einen Ressourcentyp vollständig zu blockieren, verwenden Sie das Stichwort `'none'`. Zum Beispiel blockiert die folgende Direktive alle {{htmlelement("object")}} und {{htmlelement("embed")}} Ressourcen:

```http
Content-Security-Policy: object-src 'none'
```

Beachten Sie, dass `'none'` nicht mit einer anderen Methode in einer bestimmten Direktive kombiniert werden kann: Tatsächlich werden alle anderen Quellausdrücke, die neben `'none'` angegeben sind, ignoriert.

#### Nonces

Ein `nonce` ist der empfohlene Ansatz, um das Laden von {{htmlelement("script")}} und {{htmlelement("style")}} Ressourcen zu beschränken.

Bei einem `nonce` generiert der Server einen zufälligen Wert für jede HTTP-Antwort und fügt ihn in eine `script-src` und/oder eine `style-src` Direktive ein:

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server fügt diesen Wert dann als Wert des `nonce` Attributs aller `<script>` und/oder `<style>` Tags ein, die sie in das Dokument einfügen möchten.

Der Browser vergleicht die beiden Werte und lädt die Ressource nur, wenn sie übereinstimmen. Die Idee ist, dass selbst wenn ein Angreifer es schafft, JavaScript in die Seite einzufügen, er nicht wissen wird, welches `nonce` der Server verwenden wird, sodass der Browser das Skript ablehnt.

Damit dieser Ansatz funktioniert, muss es für einen Angreifer unmöglich sein, das `nonce` zu erraten.

**In der Praxis bedeutet dies, dass das `nonce` für jede HTTP-Antwort unterschiedlich und nicht vorhersehbar sein muss.**

Dies bedeutet wiederum, dass der Server kein statisches HTML ausliefern kann, da er jedes Mal ein neues `nonce` einfügen muss. Typischerweise würde der Server eine Template-Engine verwenden, um das `nonce` einzufügen.

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

Bei jedem Request generiert der Server ein neues `nonce`, fügt es in die CSP ein und in die {{htmlelement("script")}} Tags im zurückgegebenen Dokument ein. Beachten Sie, dass der Server:

- ein neues `nonce` für jede Anfrage generiert
- Nonces sowohl für externe als auch für Inline-Skripte verwenden kann
- das gleiche `nonce` für alle `<script>` Tags im Dokument verwendet

Es ist wichtig, dass der Server eine Art Vorlagenverarbeitung verwendet, um Nonces einzufügen, und sie nicht einfach in alle `<script>`-Tags einfügt: Andernfalls könnte der Server unabsichtlich Nonces in Skripte einfügen, die von einem Angreifer eingeschleust wurden.

Beachten Sie, dass Nonces nur für Elemente verwendet werden können, die ein `nonce` Attribut haben: das heißt, nur `<script>` und `<style>` Elemente.

#### Hashes

Abrufdirektiven können auch einen Hash des Skripts verwenden, um seine Integrität zu garantieren. Bei diesem Verfahren:

1. berechnet der Server einen Hash des Skriptinhalts mithilfe einer {{Glossary("hash_function", "Hashfunktion")}} (einer von SHA-256, SHA-384 oder SHA-512)
2. erstellt ein {{Glossary("Base64", "Base64")}} Encoding des Ergebnisses
3. fügt ein Präfix hinzu, das den verwendeten Hash-Algorithmus identifiziert (einer von `sha256-`, `sha384-` oder `sha512-`).

Dann fügt er das Ergebnis der Direktive hinzu:

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

Wenn der Browser das Dokument erhält, hasht er das Skript, vergleicht das Ergebnis mit dem Wert aus dem Header und lädt das Skript nur, wenn sie übereinstimmen.

Externe Skripte müssen auch das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut enthalten, damit diese Methode funktioniert.

Hier ist ein Ausschnitt aus Express Code, um dies zu demonstrieren:

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
- Im Gegensatz zum Beispiel mit Nonces können sowohl die CSP als auch der Inhalt statisch sein, da die Hashes gleich bleiben. Dies macht hash-basierte Richtlinien besser geeignet für statische Seiten oder Websites, die auf client-seitigem Rendering basieren.

#### Schema-basierte Richtlinien

Abrufdirektiven können ein Schema auflisten, wie `https:`, um Ressourcen zu erlauben, die mit diesem Schema geliefert werden. Dies ermöglicht es beispielsweise, eine Richtlinie festzulegen, die HTTPS für alle Ressourcennachladen erfordert:

```http
Content-Security-Policy: default-src https:
```

#### Ortsbasierte Richtlinien

Abrufdirektiven können Ressourcennachladen basierend darauf kontrollieren, wo sich die Ressource befindet.

Das Stichwort `'self'` erlaubt Ressourcen, die den gleichen Ursprung wie das Dokument selbst haben:

```http
Content-Security-Policy: img-src 'self'
```

Sie können auch einen oder mehrere Hostnamen angeben, möglicherweise inklusive Wildcards. Nur Ressourcen, die von diesen Hosts geliefert werden, sind dann erlaubt. Dies könnte verwendet werden, um Inhalte von einem vertrauenswürdigen CDN zu laden.

```http
Content-Security-Policy: img-src *.example.org
```

Sie können mehrere Orte angeben. Die folgende Direktive erlaubt nur Bilder, die denselben Ursprung wie das aktuelle Dokument haben oder von einer Subdomain von "example.org" oder von "example.com" stammen:

```http
Content-Security-Policy: img-src 'self' *.example.org  example.com
```

#### Inline-JavaScript

Wenn eine CSP entweder eine `default-src` oder eine `script-src` Direktive enthält, wird Inline-JavaScript nicht ausgeführt, es sei denn, es werden zusätzliche Maßnahmen ergriffen, um es zu ermöglichen. Dies umfasst:

- JavaScript, das sich in einem `<script>` Element auf der Seite befindet:

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

Das Stichwort `unsafe-inline` kann verwendet werden, um diese Einschränkung zu übergehen. Zum Beispiel erlaubt die folgende Direktive alle Ressourcen nur mit demselben Ursprung, erlaubt jedoch Inline-JavaScript:

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es einen Großteil des Zwecks einer CSP zerstört. Inline-JavaScript ist einer der häufigsten XSS-Vektoren, und eines der grundlegendsten Ziele einer CSP ist es, dessen unkontrollierte Verwendung zu verhindern.

Inline `<script>` Elemente sind erlaubt, wenn sie durch ein `nonce` oder einen `hash` geschützt sind, wie oben beschrieben.

Wenn eine Direktive `nonce` oder `hash` Ausdrücke enthält, wird das Stichwort `unsafe-inline` von Browsern ignoriert.

#### `eval()` und ähnliche APIs

Wie Inline-JavaScript wird `eval()` und ähnliche APIs nicht ausgeführt, wenn eine CSP entweder eine `default-src` oder eine `script-src` Direktive enthält. Dies schließt unter anderem folgende APIs ein:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) selber:

  ```js
  eval('console.log("hello from eval()")');
  ```

- Der {{jsxref("Function/Function()", "Function()")}} Konstruktor:

  ```js
  const sum = new Function("a", "b", "return a + b");
  ```

- Das String-Argument von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval):

  ```js
  setTimeout("console.log('hello from setTimeout')", 1);
  ```

Das `unsafe-eval` Stichwort kann verwendet werden, um dieses Verhalten zu übergehen, und wie bei `unsafe-inline` sollten **Entwickler `unsafe-eval` vermeiden**. Manchmal kann es schwierig sein, Verwendungen von `eval()` zu entfernen: In diesen Situationen kann das [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) es sicherer machen, indem es sicherstellt, dass der Input eine definierte Richtlinie erfüllt.

Im Gegensatz zu `unsafe-inline` funktioniert das Stichwort `unsafe-eval` jedoch weiterhin auch in einer Direktive, die `nonce` oder `hash` Ausdrücke enthält.

### Strikte CSP

Um das Laden von Skripten als Schutzmaßnahme gegen XSS zu kontrollieren, wird empfohlen, den [nonce-](#nonces) oder [hash-](#hashes) basierten Abrufdirektiven zu verwenden. Dies wird als _strikte CSP_ bezeichnet. Diese Art von CSP hat zwei Hauptvorteile gegenüber einer ortsbasierenden CSP (gewöhnlich als _Allowlist CSP_ genannt):

- Allowlist CSPs sind schwer richtig zu gestalten und oft erlauben Richtlinien unbeabsichtigt unsichere Domains, und bieten daher keinen effektiven Schutz gegen XSS (siehe [CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)).
- Allowlist CSPs können sehr groß und schwer zu warten sein, besonders wenn Sie Skripte verwenden, die außerhalb Ihrer Kontrolle liegen. Laut [How I learned to stop worrying and love the Content Security Policy](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/), wird einem Entwickler allein für die Integration von Google Analytics gesagt, dass er 187 Google-Domains zur Allowlist hinzufügen muss.

Eine nonce-basierte strikte CSP sieht so aus:

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

In dieser CSP:

- verwenden wir Nonces, um zu steuern, welche JavaScript-Ressourcen geladen werden dürfen
- blockieren wir alle Objekt-Einbettungen
- blockieren wir alle Verwendungen des `<base>` Elements, um eine Basis-URI festzulegen.

Eine hash-basierte strikte CSP ist gleich, außer dass sie Hashes anstelle von Nonces verwendet:

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

Nonce-basierte Direktiven sind einfacher zu pflegen, wenn Sie Antworten, einschließlich des Inhalts selbst, dynamisch erzeugen können. Andernfalls müssen Sie hash-basierte Direktiven verwenden. Das Problem bei hash-basierten Direktiven ist, dass Sie den Hash neu berechnen und erneut anwenden müssen, wenn Änderungen am Skriptinhalt vorgenommen werden.

#### Das `strict-dynamic` Stichwort

Wie bereits gezeigt, ist die strikte CSP schwierig umzusetzen, wenn Sie Skripte verwenden, die nicht unter Ihrer Kontrolle stehen. Wenn ein Drittanbieter-Skript weitere Skripte lädt oder Inline-Skripte verwendet, wird dies fehlschlagen, da das Drittanbieter-Skript den `nonce` oder `hash` nicht weitergeben wird.

Das `strict-dynamic` Stichwort wird bereitgestellt, um bei diesem Problem zu helfen. Es ist ein Stichwort, das in eine Abrufdirektive aufgenommen werden kann, und hat den Effekt, dass wenn ein Skript einen `nonce` oder `hash` angehängt hat, dieses Skript weitere Skripte laden darf, die selbst keine Nonces oder Hashes haben. Das heißt, das Vertrauen, das in ein Skript durch einen Nonce oder Hash gesetzt wird, wird auf Skripte übertragen, die das ursprüngliche Skript lädt (und Skripte, die _sie_ laden usw.).

Betrachten Sie zum Beispiel ein Dokument wie dieses:

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

Wir liefern unser Dokument mit einer CSP wie dieser:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
```

Das "main.js"-Skript wird geladen, da sein Hash mit dem Wert in der CSP übereinstimmt. Aber sein Versuch, "main2.js" zu laden, wird fehlschlagen.

Wenn wir `'strict-dynamic'` zur CSP hinzufügen, kann "main.js" "main2.js" laden:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  strict-dynamic
```

Das `'strict-dynamic'` Stichwort macht es viel einfacher, nonce- oder hash-basierte CSPs zu erstellen und zu pflegen, besonders, wenn eine Website Drittanbieter-Skripte verwendet. Es macht Ihre CSP jedoch weniger sicher, da, wenn die Skripte, die Sie einfügen, `<script>` Elemente basierend auf potenziellen XSS-Quellen erstellen, die CSP sie nicht schützen wird.

#### Inline-JavaScript und `eval()` refaktorisieren

Wie oben gesehen, wird Inline-JavaScript standardmäßig in einer CSP nicht erlaubt. Mit Nonces oder Hashes kann ein Entwickler Inline-`<script>`-Tags verwenden, aber Sie müssen immer noch den Code refaktorisieren, um andere nicht erlaubte Muster zu entfernen, einschließlich Inline-Ereignishandler, `javascript:` URLs und Verwendungen von `eval()`. Zum Beispiel sollten Inline-Ereignishandler normalerweise durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ersetzt werden:

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

Die [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) Direktive kann verwendet werden, um zu steuern, welche Dokumente, falls überhaupt, erlaubt sind, dieses Dokument in einem geschachtelten Browserkontext wie einem {{htmlelement("iframe")}} einzubetten. Dies ist ein effektiver Schutz gegen Clickjacking-Angriffe, da diese Angriffe davon abhängen, die Zielseite in einer vom Angreifer kontrollierten Seite einzubetten.

Die Syntax von `frame-ancestors` ist ein Untersetzer der Abrufdirektive-Syntax: Sie können den Einzelstichwortwert `'none'` oder einen oder mehrere Quellausdrücke angeben. Allerdings sind die einzigen Quellausdrücke, die Sie verwenden können, Schemas, Hostnamen oder der `'self'` Stichwortwert.

Es sei denn, Sie möchten, dass Ihre Seite einbettbar ist, sollten Sie `frame-ancestors` auf `'none'` setzen:

```http
Content-Security-Policy: frame-ancestors 'none'
```

Diese Direktive ist ein flexibler Ersatz für den {{httpheader("X-Frame-Options")}} Header.

## Aufrüsten unsicherer Anfragen

Webentwickler werden dringend ermutigt, alle ihre Inhalte über HTTPS bereitzustellen. Bei der Umstellung einer Site auf HTTPS wird manchmal das Hauptdokument über HTTPS bereitgestellt, während Ressourcen über HTTP bereitgestellt werden, z. B. mit einem Markup wie diesem:

```html
<script src="http://example.org/my-cat.js"></script>
```

Dies wird _gemischter Inhalt_ genannt, und das Vorhandensein unsicherer Ressourcen schwächt den durch HTTPS gewährten Schutz erheblich. Gemäß dem von den Browsern implementierten [gemischten Inhalt Algorithmus](/de/docs/Web/Security/Mixed_content) wird, wenn ein Dokument über HTTPS bereitgestellt wird, unsicherer Inhalt in "aufrüstbare Inhalte" und "blockierbare Inhalte" kategorisiert. Aufrüstbare Inhalte werden auf HTTPS aufgerüstet, und blockierbare Inhalte werden blockiert, was die Seite möglicherweise bricht.

Die endgültige Lösung für gemischten Inhalt besteht darin, dass Entwickler alle Ressourcen über HTTPS laden. Selbst wenn eine Site tatsächlich in der Lage ist, alle Inhalte über HTTPS bereitzustellen, kann es jedoch immer noch sehr schwierig (oder sogar praktisch unmöglich, wenn es sich um archivierte Inhalte handelt) sein, dass ein Entwickler alle URLs, die die Site verwendet, um Ressourcen zu laden, neu schreibt.

Die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) Direktive soll dieses Problem lösen. Diese Direktive hat keinen Wert: Um sie zu setzen, fügen Sie einfach den Direktivnamen hinzu:

```http
Content-Security-Policy: upgrade-insecure-requests
```

Wenn diese Direktive auf ein Dokument gesetzt ist, wird der Browser automatisch alle HTTP-URLs in den folgenden Fällen auf HTTPS aufrüsten:

- Anfragen zum Laden von Ressourcen (wie Bilder, Skripte oder Schriftarten)
- Navigationsanfragen (wie Linkziele), die gleichen Ursprungs mit dem Dokument sind
- Navigationsanfragen in geschachtelten Browserkontexten, wie iframes
- Formularübermittlungen

Allerdings werden Top-Level-Navigationsanfragen, deren Ziel ein anderer Ursprung ist, nicht aufgerüstet.

Nehmen wir zum Beispiel an, dass das Dokument unter `https://example.org` mit einer CSP bereitgestellt wird, die die `upgrade-insecure-requests` Direktive enthält, und das Dokument folgenden Markup enthält:

```html
<script src="http://example.org/my-cat.js"></script>
<script src="http://not-example.org/another-cat.js"></script>
```

Der Browser wird beide dieser Anfragen automatisch auf HTTPS aufrüsten.

Angenommen, das Dokument enthält außerdem dies:

```html
<a href="http://example.org/more-cats">See some more cats!</a>
<a href="http://not-example.org/even-more-cats">More cats, on another site!</a>
```

Der Browser wird den ersten Link auf HTTPS aufrüsten, aber nicht den zweiten, da er zu einem anderen Ursprung navigiert.

Diese Direktive ist kein Ersatz für den {{httpheader("Strict-Transport-Security")}} Header (auch bekannt als HSTS), da sie keine externen Links zu einer Site aufrüstet. Sites sollten diese Direktive und den `Strict-Transport-Security` Header einfügen.

## Testen Ihrer Richtlinie

Um die Bereitstellung zu erleichtern, kann CSP im Nur-Berichtsmodus bereitgestellt werden. Die Richtlinie wird nicht durchgesetzt, aber Verstöße werden an den in der Richtlinie angegebenen Berichts-Endpunkt gesendet. Zusätzlich kann ein Nur-Berichts-Header verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich bereitzustellen.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header verwenden, um Ihre Richtlinie anzugeben, wie folgt:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header als auch ein {{HTTPHeader("Content-Security-Policy")}} Header in derselben Antwort vorhanden sind, werden beide Richtlinien beachtet.
Die in `Content-Security-Policy` Headern angegebene Richtlinie wird durchgesetzt, während die `Content-Security-Policy-Report-Only` Richtlinie Berichte erzeugt, aber nicht durchgesetzt wird.

Beachten Sie, dass im Gegensatz zu einer normalen Inhalts-Sicherheitsrichtlinie eine Nur-Berichts-Richtlinie nicht in einem `<meta>` Element geliefert werden kann.

### Verstoßsmeldung

Die empfohlene Methode zum Melden von CSP-Verstößen ist die Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API), indem Endpunkte im {{HTTPHeader("Reporting-Endpoints")}} deklariert werden und einer von ihnen als CSP Berichts-Ziel mithilfe der `Content-Security-Policy` Header {{CSP("report-to")}} Direktive angegeben wird.

> [!WARNING]
> Sie können auch die CSP {{CSP("report-uri")}} Direktive verwenden, um eine Ziel-URL für CSP-Verstoßsmeldungen anzugeben.
> Dies sendet ein leicht anderes JSON-Berichtsformat über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`.
> Dieser Ansatz ist veraltet, aber Sie sollten beide erklären, bis {{CSP("report-to")}} in allen Browsern unterstützt wird.
> Weitere Informationen zu dem Ansatz finden Sie im {{CSP("report-uri")}} Thema.

Ein Server kann Clients mitteilen, wohin Berichte gesendet werden sollen, indem er den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header verwendet.
Dieser Header definiert eine oder mehrere Endpunkt-URLs als kommagetrennte Liste.
Um beispielsweise einen Berichts-Endpunkt namens `csp-endpoint` zu definieren, der Berichte unter `https://example.com/csp-reports` akzeptiert, könnte der Antwort-Header des Servers folgendermaßen aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die unterschiedliche Arten von Berichten behandeln, würden Sie sie wie folgt angeben:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Sie können dann die `Content-Security-Policy` Header {{CSP("report-to")}} Direktive verwenden, um anzugeben, dass ein bestimmter definierter Endpunkt für Berichte verwendet werden soll.
Um beispielsweise CSP-Verstoßberichte an `https://example.com/csp-reports` für `default-src` zu senden, könnten Sie folgende Antwort-Header senden:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn ein CSP-Verstoß auftritt, sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt über eine HTTP `POST`-Operation, mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`.
Der Bericht ist eine serialisierte Form des [`Report`](/de/docs/Web/API/Report) Objekts, das eine `type` Eigenschaft mit einem Wert von `"csp-violation"` und einen `body` enthält, der die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Objekts ist.

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

Sie müssen einen Server einrichten, um Berichte mit dem gegebenen JSON-Format und Inhaltstyp zu empfangen.
Der Server, der diese Anfragen verarbeitet, kann dann die eingehenden Berichte auf eine Weise speichern oder verarbeiten, die am besten zu Ihren Bedürfnissen passt.

## Siehe auch

- [CSP-Fehler und Warnungen](/de/docs/Web/HTTP/Guides/CSP/Errors)
- [Milderung von Cross-Site Scripting mit einer strikten Content Security Policy](https://web.dev/articles/strict-csp) auf web.dev (2024)
- [Content Security Policy: Ein erfolgreicher Durcheinander zwischen Härtung und Minderung](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) auf owasp.org
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
