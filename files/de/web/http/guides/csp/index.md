---
title: Content-Security-Policy (CSP)
slug: Web/HTTP/Guides/CSP
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

**Content Security Policy** (CSP) ist eine Funktion, die dabei hilft, bestimmte Arten von Sicherheitsbedrohungen zu verhindern oder das Risiko dieser Bedrohungen zu minimieren. Sie besteht aus einer Reihe von Anweisungen, die eine Website an einen Browser sendet. Diese Anweisungen weisen den Browser an, Beschränkungen für die Dinge zu setzen, die der Code, der die Website bildet, tun darf.

Der primäre Anwendungsfall für CSP ist die Steuerung, welche Ressourcen, insbesondere JavaScript-Ressourcen, ein Dokument laden darf. Dies wird hauptsächlich als Schutz vor {{Glossary("cross-site_scripting", "Cross-Site Scripting")}} (XSS)-Angriffen verwendet, bei denen ein Angreifer bösartigen Code in die Website des Opfers einschleusen kann.

Ein CSP kann auch andere Zwecke haben, wie z.B. den Schutz vor [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und die Sicherstellung, dass die Seiten einer Website über HTTPS geladen werden.

In diesem Leitfaden beginnen wir damit, zu beschreiben, wie ein CSP an einen Browser geliefert wird und wie es auf hoher Ebene aussieht.

Dann beschreiben wir, wie es verwendet werden kann, um:

1. [Zu kontrollieren, welche Ressourcen geladen werden](#kontrolle_der_ressourcenladung), um XSS zu verhindern.
2. [Einbettung zu beschränken](#schutz_gegen_clickjacking), um Clickjacking zu vermeiden.
3. [Unsichere Anfragen aufzurüsten](#aufrüsten_unsicherer_anfragen), um sicherzustellen, dass alle Ressourcen über HTTPS bereitgestellt werden.
4. [Die Verwendung von Trusted Types zu verlangen](#trusted_types_erfordern), um Client-seitige XSS zu verhindern.

Beachten Sie, dass es keine Abhängigkeit zwischen den verschiedenen Anwendungsfällen gibt: Wenn Sie Clickjacking-Schutz hinzufügen möchten, aber keine XSS-Minderung, können Sie einfach die Direktiven für diesen Anwendungsfall hinzufügen.

Schließlich beschreiben wir [Strategien zur Implementierung eines CSP](#testen_ihrer_richtlinie) und Tools, die helfen können, diesen Prozess zu erleichtern.

## Überblick über CSP

Ein CSP sollte an den Browser im {{httpheader("Content-Security-Policy")}}-Response-Header übergeben werden. Es sollte in allen Antworten auf alle Anfragen gesetzt werden, nicht nur im Hauptdokument.

Sie können es auch mit dem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attribut des {{htmlelement("meta")}} Elements Ihres Dokuments angeben, und dies ist eine nützliche Option für einige Anwendungsfälle, wie eine clientseitig gerenderte {{Glossary("SPA", "Single Page App")}}, die nur statische Ressourcen hat, da Sie sich dann nicht auf eine Serverinfrastruktur verlassen müssen. Diese Option unterstützt jedoch nicht alle CSP-Funktionen.

Die Richtlinie wird als eine Reihe von _Direktiven_ angegeben, die durch Semikolons getrennt sind. Jede Direktive steuert einen anderen Aspekt der Sicherheitsrichtlinie. Jede Direktive hat einen Namen, gefolgt von einem Leerzeichen, gefolgt von einem Wert. Verschiedene Direktiven können unterschiedliche Syntaxen haben.

Zum Beispiel betrachten Sie den folgenden CSP:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

Es setzt zwei Direktiven:

- die `default-src` Direktive ist auf `'self'` gesetzt
- die `img-src` Direktive ist auf `'self' example.com` gesetzt.

![Ein CSP, aufgeteilt in seine Direktiven.](csp-overview.svg)

Die erste Direktive, `default-src`, weist den Browser an, nur Ressourcen zu laden, die gleichen Ursprungs wie das Dokument sind, es sei denn, andere spezifischere Direktiven legen eine andere Richtlinie für andere Ressourcentypen fest. Die zweite, `img-src`, weist den Browser an, Bilder zu laden, die gleichen Ursprungs sind oder von `example.com` bereitgestellt werden.

Im nächsten Abschnitt werfen wir einen Blick auf die verfügbaren Tools zur Kontrolle von Ressourcenladungen, die die Hauptfunktion eines CSP ist.

## Kontrolle der Ressourcenladung

Ein CSP kann verwendet werden, um die Ressourcen, die ein Dokument laden darf, zu kontrollieren. Dies wird in erster Linie zum Schutz vor Cross-Site Scripting (XSS)-Angriffen verwendet.

In diesem Abschnitt sehen wir zunächst, wie die Kontrolle von Ressourcenladungen dabei helfen kann, XSS zu verhindern, und dann auf die Tools, die CSP bereitstellt, um zu steuern, welche Ressourcen geladen werden. Schließlich beschreiben wir eine spezielle empfohlene Strategie, die als "Strict CSP" bezeichnet wird.

### XSS und Ressourcenladung

Ein Cross-Site Scripting (XSS)-Angriff ist einer, bei dem ein Angreifer seinen Code im Kontext der Zielwebsite ausführen kann. Dieser Code kann dann alles tun, was der eigene Code der Website tun könnte, einschließlich, zum Beispiel:

- Zugriff auf oder Änderung des Inhalts der geladenen Seiten der Website
- Zugriff auf oder Änderung von Inhalten im lokalen Speicher
- HTTP-Anfragen mit den Anmeldeinformationen des Benutzers machen, wodurch der Angreifer sich als dieser ausgeben oder auf sensible Daten zugreifen kann

Ein XSS-Angriff ist möglich, wenn eine Website einige Eingaben akzeptiert, die von einem Angreifer erstellt worden sein könnten (zum Beispiel URL-Parameter oder ein Kommentar zu einem Blogpost) und diese dann in die Seite einbindet, ohne sie zu _bereinigen_: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausgeführt werden können.

Websites sollten sich vor XSS dadurch schützen, dass sie diese Eingaben bereinigen, bevor sie in die Seite eingebunden werden.

> [!NOTE]
> Ein CSP kann eigentlich auf zwei verschiedene Arten helfen, sich gegen XSS zu schützen:
>
> - Es kann helfen sicherzustellen, dass Eingaben bereinigt werden, bevor sie im Client verwendet werden: Dies besprechen wir später im Abschnitt [Verlangen von Trusted Types](#trusted_types_erfordern).
> - Durch die Steuerung der Ressourcenladungen kann ein CSP eine Verteidigung in der Tiefe gegen XSS bieten, die Website vor Angriffen schützen, selbst wenn die Bereinigung fehlschlägt. Dies ist die XSS-Verteidigung, die wir in diesem Abschnitt besprechen werden.

Wenn die Bereinigung fehlschlägt, kann der eingeschleuste bösartige Code verschiedene Formen in dem Dokument annehmen, einschließlich:

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
  <img
    onmouseover="console.log(`You've been hacked!`)"
    src="thumbnail.jpg"
    alt="" />
  ```

- Eine `javascript:` URL:

  ```html
  <iframe src="javascript:console.log(`You've been hacked!`)"></iframe>
  ```

- Ein String-Argument für ein unsicheres API wie [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval):

  ```js
  eval("console.log(`You've been hacked!`)");
  ```

Durch die Steuerung der Ressourcenladung kann ein CSP Schutz gegen all diese bieten. Mit einem CSP können Sie:

- die erlaubten Quellen für JavaScript-Dateien und andere Ressourcen definieren, wodurch effektiv das Laden von `https://evil.example.com` blockiert wird
- Inline-Scripttags deaktivieren
- nur Scripttags mit dem korrekten {{Glossary("Nonce", "Nonce")}} oder Hash zulassen
- Inline-Event-Handler deaktivieren
- `javascript:` URLs deaktivieren
- gefährliche APIs wie `eval()` deaktivieren

Im nächsten Abschnitt werden wir die Tools durchgehen, die CSP bereitstellt, um diese Dinge zu tun.

> [!NOTE]
> Das Setzen eines CSP ist keine Alternative zur Bereinigung von Eingaben. Websites sollten Eingaben bereinigen _und_ ein CSP setzen, um eine Verteidigung in der Tiefe gegen XSS zu bieten.

### Fetch-Direktiven

Fetch-Direktiven werden verwendet, um eine bestimmte Kategorie von Ressourcen zu spezifizieren, die ein Dokument laden darf — wie JavaScript, CSS Stylesheets, Bilder, Schriftarten usw.

Es gibt unterschiedliche Fetch-Direktiven für unterschiedliche Arten von Ressourcen. Zum Beispiel:

- [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) legt erlaubte Quellen für JavaScript fest.
- [`style-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) legt erlaubte Quellen für CSS Stylesheets fest.
- [`img-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) legt erlaubte Quellen für Bilder fest.

Eine spezielle Fetch-Direktive ist `default-src`, die eine Fallback-Richtlinie für alle Ressourcen festlegt, deren Direktiven nicht explizit aufgeführt sind.

Für die vollständige Liste der Fetch-Direktiven siehe die [Referenzdokumentation](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directives).

Jede Fetch-Direktive wird entweder als das Einzelwort `'none'` oder als eine oder mehrere _Quellen-Ausdrücke_ angegeben, getrennt durch Leerzeichen. Wenn mehr als eine Quellen-Ausdruck aufgelistet ist: Wenn eine der Methoden die Ressource erlaubt, dann ist die Ressource erlaubt.

Zum Beispiel setzt der folgende CSP zwei Fetch-Direktiven:

- `default-src` erhält den einzigen Quellen-Ausdruck `'self'`
- `img-src` erhält zwei Quellen-Ausdrücke: `'self'` und `example.com`

![CSP-Diagramm zeigt Quellen-Ausdrücke](csp-source-expressions.svg)

Die Wirkung davon ist, dass:

- Bilder entweder gleichen Ursprungs mit dem Dokument sein müssen oder von `example.com` geladen werden
- alle anderen Ressourcen müssen gleichen Ursprungs mit dem Dokument sein.

In den folgenden Abschnitten beschreiben wir einige der Möglichkeiten, wie Sie Quellen-Ausdrücke verwenden können, um Ressourcenladungen zu kontrollieren. Beachten Sie, dass obwohl wir sie einzeln beschreiben, diese Ausdrücke generell kombiniert werden können: zum Beispiel kann eine einzelne Fetch-Direktive Nonces sowie Hostnamen enthalten.

#### Blockieren von Ressourcen

Um einen Ressourcentyp vollständig zu blockieren, verwenden Sie das Schlüsselwort `'none'`. Zum Beispiel blockiert die folgende Direktive alle {{htmlelement("object")}} und {{htmlelement("embed")}} Ressourcen:

```http
Content-Security-Policy: object-src 'none'
```

Beachten Sie, dass `'none'` nicht mit irgendeiner anderen Methode in einer bestimmten Direktive kombiniert werden kann: in der Praxis, wenn irgendwelche anderen Quellen-Ausdrücke neben `'none'` gegeben sind, werden sie ignoriert.

#### Nonces

Ein `nonce` ist der empfohlene Ansatz zum Einschränken des Ladens von {{htmlelement("script")}} und {{htmlelement("style")}} Ressourcen.

Mit einem Nonce generiert der Server einen zufälligen Wert für jede HTTP-Antwort und fügt ihn in eine `script-src` und/oder `style-src` Direktive ein:

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server fügt diesen Wert dann als Wert des `nonce` Attributs in allen `<script>` und/oder `<style>` Tags ein, die sie im Dokument einbinden möchten.

Der Browser vergleicht die beiden Werte und lädt die Ressource nur, wenn sie übereinstimmen. Die Idee ist, dass selbst wenn ein Angreifer in der Lage ist, etwas JavaScript auf die Seite einzufügen, er nicht wissen wird, welchen Nonce der Server verwenden wird, sodass der Browser das Skript nicht ausführen wird.

Damit dieser Ansatz funktioniert, darf es für einen Angreifer nicht möglich sein, den Nonce zu erraten.

**Dies bedeutet in der Praxis, dass der Nonce für jede HTTP-Antwort unterschiedlich und nicht vorhersehbar sein muss.**

Dies bedeutet wiederum, dass der Server kein statisches HTML bereitstellen kann, da er jedes Mal einen neuen Nonce einfügen muss. Typischerweise verwendet der Server eine Template-Engine, um den Nonce einzufügen.

Hier ist ein Ausschnitt von [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)-Code zur Veranschaulichung:

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

Bei jeder Anforderung generiert der Server einen neuen Nonce, fügt ihn in das CSP und in die {{htmlelement("script")}} Tags im zurückgegebenen Dokument ein. Beachten Sie, dass der Server:

- einen neuen Nonce für jede Anforderung generiert
- Nonces sowohl mit externen als auch mit Inline-Skripten verwenden kann
- denselben Nonce für alle `<script>` Tags im Dokument verwendet

Es ist wichtig, dass der Server irgendeine Art von Templating verwendet, um Nonces einzufügen, und sie nicht einfach in alle `<script>` Tags einfügt: andernfalls könnte der Server versehentlich Nonces in Skripte einfügen, die von einem Angreifer eingeschleust wurden.

Beachten Sie, dass Nonces nur für Elemente verwendet werden können, die ein `nonce` Attribut haben: das heißt, nur `<script>` und `<style>` Elemente.

#### Hashes

Fetch-Direktiven können auch einen Hash des Skripts verwenden, um dessen Integrität zu gewährleisten. Mit dieser Methode:

1. Berechnet der Server einen Hash der Skriptinhalte mithilfe einer {{Glossary("hash_function", "Hash-Funktion")}} (eine von SHA-256, SHA-384 oder SHA-512)
2. Erzeugt eine {{Glossary("Base64", "Base64")}}-Kodierung des Ergebnisses
3. Fügt ein Präfix hinzu, das den verwendeten Hash-Algorithmus angibt (eines von `sha256-`, `sha384-` oder `sha512-`).

Dann fügt es das Ergebnis der Direktive hinzu:

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

Wenn der Browser das Dokument erhält, hashiert er das Skript, vergleicht das Ergebnis mit dem Wert aus dem Header und lädt das Skript nur, wenn sie übereinstimmen.

Externe Skripte müssen auch das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut enthalten, damit diese Methode funktioniert.

Hier ist ein Ausschnitt von Express-Code, um dies zu veranschaulichen:

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
- Für das externe Skript "main.js" geben wir auch das `integrity` Attribut an und geben ihm denselben Wert.
- Anders als bei dem Beispiel mit Nonces können sowohl das CSP als auch der Inhalt statisch sein, da die Hashes gleich bleiben. Dies macht Hash-basierte Richtlinien besser geeignet für statische Seiten oder Websites, die sich auf clientseitiges Rendering verlassen.

#### Richtlinien basierend auf Protokollen

Fetch-Direktiven können ein Protokoll wie `https:` auflisten, um Ressourcen zuzulassen, die über dieses Protokoll bereitgestellt werden. Dies ermöglicht es einer Richtlinie beispielsweise, HTTPS für alle Ressourcenladungen zu verlangen:

```http
Content-Security-Policy: default-src https:
```

#### Richtlinien basierend auf Ort

Fetch-Direktiven können Ressourcenladungen basierend darauf steuern, wo sich die Ressource befindet.

Das Schlüsselwort `'self'` erlaubt Ressourcen, die gleichen Ursprungs mit dem Dokument selbst sind:

```http
Content-Security-Policy: img-src 'self'
```

Sie können auch einen oder mehrere Hostnamen angeben, möglicherweise mit Wildcards, und nur von diesen Hosts bereitgestellte Ressourcen werden zugelassen. Dies könnte beispielsweise verwendet werden, um Inhalte von einem vertrauenswürdigen CDN bereitzustellen.

```http
Content-Security-Policy: img-src *.example.org
```

Sie können mehrere Standorte angeben. Die folgende Direktive erlaubt nur Bilder, die gleichen Ursprungs mit dem aktuellen Dokument sind oder von einer Subdomain von "example.org" bereitgestellt werden oder von "example.com" stammen:

```http
Content-Security-Policy: img-src 'self' *.example.org  example.com
```

#### Inline-JavaScript

Wenn ein CSP entweder eine `default-src` oder eine `script-src` Direktive enthält, wird Inline-JavaScript nicht ausgeführt, es sei denn, es werden zusätzliche Maßnahmen ergriffen, um es zu aktivieren. Dazu gehören:

- JavaScript, das in einem `<script>`-Element auf der Seite enthalten ist:

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
  <a href="javascript:console.log('Hello from a javascript: URL')">Click me</a>
  ```

Das `unsafe-inline` Schlüsselwort kann verwendet werden, um diese Einschränkung aufzuheben. Beispielsweise erfordert die folgende Direktive, dass alle Ressourcen gleichen Ursprungs sind, erlaubt jedoch Inline-JavaScript:

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da dies den Hauptzweck der CSP zunichtemacht. Inline-JavaScript ist einer der häufigsten XSS-Vektoren, und eines der grundlegenden Ziele eines CSP besteht darin, dessen unkontrollierten Einsatz zu verhindern.

Inline-`<script>`-Elemente sind zulässig, wenn sie durch einen Nonce oder einen Hash geschützt sind, wie oben beschrieben.

Wenn eine Direktive Nonce- oder Hash-Ausdrücke enthält, wird das `unsafe-inline` Schlüsselwort von Browsern ignoriert.

#### `eval()` und ähnliche APIs

Wie Inline-JavaScript, sind auch `eval()` und ähnliche APIs nicht erlaubt, wenn das CSP entweder eine `default-src` oder eine `script-src` Direktive enthält. Dies umfasst unter anderem die folgenden APIs:

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

Das `unsafe-eval` Schlüsselwort kann verwendet werden, um dieses Verhalten aufzuheben, und aus den gleichen Gründen wie `unsafe-inline`: **Entwickler sollten `unsafe-eval` vermeiden**.

Manchmal kann es schwierig sein, die Verwendung von `eval()` und den anderen Methoden zu entfernen: in diesen Situationen kann das [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) es sicherer machen, indem es sicherstellt, dass die Eingabe einer definierten Richtlinie entspricht.
Das `trusted-types-eval` Schlüsselwort sollte verwendet werden, um das Verhalten in diesem Fall aufzuheben.
Anders als `unsafe-inline` hebt es das Verhalten nur in Browsern mit unterstützten und aktivierten Trusted Types auf,
wodurch sichergestellt wird, dass die Methoden in Browsern, die Trusted Types nicht unterstützen, blockiert bleiben.

Anders als `unsafe-inline`, funktioniert das `unsafe-eval` Schlüsselwort immer noch in einer Direktive, die Nonce- oder Hash-Ausdrücke enthält.

### Strict CSP

Um die Skriptladung abzuschwächen und gegen XSS zu schützen, wird als empfohlene Praxis die Verwendung von [Nonce-](#nonces) oder [Hash-](#hashes) basierten Fetch-Direktiven empfohlen. Dies wird als _strict CSP_ bezeichnet. Diese Art von CSP hat zwei wesentliche Vorteile gegenüber einer ortsabhängigen CSP (normalerweise als _Allowlist CSP_ bezeichnet):

- Allowlist-CSPs sind schwer richtig zu implementieren und oft whitelisten Richtlinien versehentlich unsichere Domains, und bieten daher keinen effektiven Schutz gegen XSS (siehe [CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)).
- Allowlist-CSPs können sehr umfangreich und schwer zu pflegen sein, insbesondere wenn Sie Skripte verwenden, die außerhalb Ihrer Kontrolle liegen. Laut [How I learned to stop worrying and love the Content Security Policy](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/), um Google Analytics zu integrieren, wird ein Entwickler gebeten, 187 Google Domains zur Allowlist hinzuzufügen.

Eine auf Nonces basierende strict CSP sieht so aus:

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

In diesem CSP tun wir:

- Verwenden Sie Nonces, um zu steuern, welche JavaScript-Ressourcen geladen werden dürfen
- Blockieren Sie alle Objekteinbettungen
- Blockieren Sie die Nutzung des `<base>` Elements zur Setzung eines Basis-URIs.

Eine auf Hashes basierende strict CSP ist die gleiche, außer dass sie Hashes anstelle von Nonces verwenden:

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

Nonce-basierte Direktiven sind leichter zu pflegen, wenn Sie in der Lage sind, Antworten, einschließlich des Inhalts selbst, dynamisch zu generieren. Andernfalls müssen Sie Hash-basierte Direktiven verwenden. Das Problem bei Hash-basierten Direktiven ist, dass Sie den Hash neu berechnen und anwenden müssen, wenn Änderungen an den Skriptinhalten vorgenommen werden.

#### Das `strict-dynamic` Schlüsselwort

Wie oben gezeigt, ist die Strict CSP schwierig zu implementieren, wenn Sie Skripte verwenden, die nicht unter Ihrer Kontrolle stehen. Wenn ein Drittanbieter-Skript weitere Skripte lädt oder Inline-Skripte verwendet, wird dies fehlschlagen, da das Drittanbieter-Skript den Nonce oder Hash nicht übergibt.

Das `strict-dynamic` Schlüsselwort wird bereitgestellt, um dieses Problem zu lösen. Es ist ein Schlüsselwort, das in einer Fetch-Direktive enthalten sein kann, und die Wirkung hat, dass wenn ein Skript einen Nonce oder einen Hash hat, dann wird diesem Skript erlaubt, weitere Skripte zu laden, die selbst keine Nonces oder Hashes haben. Das heißt, das Vertrauen, das ein Nonce oder ein Hash in ein Skript setzt, wird auf die Skripte, die das ursprüngliche Skript lädt (und die, die _sie_ laden usw.), weitergegeben.

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

Wir liefern unser Dokument mit einem CSP wie diesem:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
```

Das "main.js"-Skript wird erlaubt sein, weil sein Hash mit dem Wert in der CSP übereinstimmt. Aber sein Versuch, "main2.js" zu laden, wird fehlschlagen.

Wenn wir `'strict-dynamic'` zur CSP hinzufügen, wird "main.js" erlaubt sein, "main2.js" zu laden:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  'strict-dynamic'
```

Das `'strict-dynamic'` Schlüsselwort erleichtert es sehr, Nonce- oder Hash-basierte CSPs zu erstellen und zu pflegen, insbesondere wenn eine Website Drittanbieter-Skripte verwendet. Es macht Ihre CSP jedoch weniger sicher, da, wenn die Skripte, die Sie einbinden, `<script>` Elemente basierend auf potenziellen XSS-Quellen erstellen, die CSP diese nicht schützt.

#### Refactoring von Inline-JavaScript und `eval()`

Wie oben gesehen, ist Inline-JavaScript standardmäßig in einer CSP nicht erlaubt. Mit Nonces oder Hashes kann ein Entwickler dennoch Inline-`<script>`-Tags verwenden, aber Sie müssen immer noch den Code umgestalten, um andere verbotene Muster zu entfernen, einschließlich inline-Event-Handlern, `javascript:` URLs, und Verwendungen von `eval()`. Zum Beispiel sollten Inline-Event-Handler in der Regel durch Aufrufe zu [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ersetzt werden:

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

Die [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) Direktive kann verwendet werden, um zu kontrollieren, welche Dokumente, falls vorhanden, dieses Dokument in einem verschachtelten Browsing-Kontext wie einem {{htmlelement("iframe")}} einbetten dürfen. Dies ist ein effektiver Schutz gegen Clickjacking-Angriffe, da diese Angriffe darauf angewiesen sind, die Zielseite in einer vom Angreifer kontrollierten Seite einzubetten.

Die Syntax von `frame-ancestors` ist ein Teilmengen von der Fetch-Direktiven-Syntax: Sie können den einzigen Schlüsselwortwert `'none'` oder einen oder mehrere Quellen-Ausdrücke angeben. Die einzigen Quellen-Ausdrücke, die Sie verwenden können, sind jedoch Protokolle, Hostnamen oder das `'self'` Schlüsselwort.

Es sei denn, dass Ihre Seite einbettbar sein muss, sollten Sie `frame-ancestors` auf `'none'` setzen:

```http
Content-Security-Policy: frame-ancestors 'none'
```

Diese Direktive ist ein flexibler Ersatz für den {{httpheader("X-Frame-Options")}} Header.

## Aufrüsten unsicherer Anfragen

Webentwickler werden stark ermutigt, alle ihre Inhalte über HTTPS bereitzustellen. Beim Upgrade einer Seite auf HTTPS wird manchmal das Hauptdokument über HTTPS bereitgestellt, aber die Ressourcen werden über HTTP bereitgestellt, zum Beispiel mit Markup wie diesem:

```html
<script src="http://example.org/my-cat.js"></script>
```

Dies wird als _gemischter Inhalt_ bezeichnet, und das Vorhandensein unsicherer Ressourcen schwächt den durch HTTPS gebotenen Schutz erheblich. Unter dem von Browsern implementierten [Algorithmus für gemischte Inhalte](/de/docs/Web/Security/Defenses/Mixed_content) wird unsicherer Inhalt kategorisiert in "aufrüstbaren Inhalt" und "blockierbaren Inhalt". Aufrüstbarer Inhalt wird auf HTTPS umgestellt, und blockbarer Inhalt wird blockiert, was die Seite möglicherweise zerstört.

Die ultimative Lösung für gemischten Inhalt ist, dass Entwickler alle Ressourcen über HTTPS laden. Selbst wenn eine Seite in der Lage ist, allen Content über HTTPS bereitzustellen, kann es jedoch immer noch sehr schwierig (oder sogar effektiv unmöglich, wenn es sich um archivierten Inhalt handelt) sein, dass ein Entwickler alle URLs, die die Seite zum Laden von Ressourcen verwendet, umschreibt.

Die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) Direktive ist dafür gedacht, dieses Problem zu lösen. Diese Direktive hat keinen Wert: Um sie zu setzen, geben Sie einfach den Namen der Direktive an:

```http
Content-Security-Policy: upgrade-insecure-requests
```

Wenn diese Direktive in einem Dokument gesetzt ist, wird der Browser alle HTTP-URLs in den folgenden Fällen automatisch zu HTTPS umstellen:

- Anfragen zum Laden von Ressourcen (wie Bilder, Skripte oder Schriftarten)
- Navigationsanfragen (wie Linkziele), die gleichen Ursprungs mit dem Dokument sind
- Navigationsanfragen in verschachtelten Browsing-Kontexten, wie iframes
- Formularübermittlungen

Top-Level-Navigationsanfragen, deren Ziel eine andere Herkunft ist, werden jedoch nicht umgestellt.

Stellen Sie zum Beispiel vor, das Dokument bei `https://example.org` wird mit einem CSP bereitgestellt, das die `upgrade-insecure-requests` Direktive enthält, und das Dokument enthält Markup wie dieses:

```html
<script src="http://example.org/my-cat.js"></script>
<script src="http://not-example.org/another-cat.js"></script>
```

Der Browser wird beide Abfragen automatisch zu HTTPS umstellen.

Angenommen, das Dokument enthält auch diese:

```html
<a href="http://example.org/more-cats">See some more cats!</a>
<a href="http://not-example.org/even-more-cats">More cats, on another site!</a>
```

Der Browser wird den ersten Link zu HTTPS umstellen, aber nicht den zweiten, da es zu einer anderen Herkunft navigiert.

Diese Direktive ist kein Ersatz für den {{httpheader("Strict-Transport-Security")}} Header (auch bekannt als HSTS), da er keine externen Links zu einer Seite umstellt. Seiten sollten diese Direktive und den `Strict-Transport-Security` Header verwenden.

## Trusted Types erfordern

Die Direktiven [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) und [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) ermöglichen es Ihnen, sich gegen Client-seitige [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe zu verteidigen, indem Sie sicherstellen, dass jede Eingabe vor der Übergabe an ein Webplattform-API, das sie andernfalls als Code ausführen könnte, durch eine Transformation übergeben wurde.

### Injektionssenken und Bereinigung

Einige APIs in der Webplattform sind als _Injektionssenken_ bekannt. Dies sind APIs, die einige Eingaben erhalten können, normalerweise in Form eines Strings, und diese Eingaben als Code ausführen können. In diesem Leitfaden haben wir bereits `eval()` gesehen, aber es gibt viele andere Injektionssenken, wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`Document.write()`](/de/docs/Web/API/Document/write).

Wenn ein Angreifer es schafft, einige speziell gestaltete Eingaben an Ihre Website zu liefern, und Ihre Website diese an eine dieser Injektionssenken übergibt, dann kann der Angreifer bösartigen Code ausführen.

Einige Injektionssenken, wie `eval()`, sind sehr schwer sicher zu verwenden, und wir haben gesehen, dass ein CSP sie typischerweise [vollständig blockiert](#eval_and_similar_apis). Andere können sicherer gemacht werden, wenn die Eingabe an sie verarbeitet wird, um unsichere Elemente zu entfernen. Diese Praxis wird [_Bereinigung_](/de/docs/Web/Security/Attacks/XSS#sanitization) genannt.

### Das Trusted Types API

Mit dem [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) können Sie _Trusted Types_ in Injektionssenken übergeben, anstatt Strings. Trusted Types sind Objekte, die aus der Übergabe potenziell gefährlicher Eingaben durch eine Transformation resultieren. Diese Transformation bereinigt in der Regel die Eingabe, indem sie alle Elemente entfernt, die sie ausführbar machen könnten (wie {{htmlelement("script")}}-Tags).

Standardmäßig könnte Ihr Code wählen, ob er Trusted Types oder nicht bereinigte Strings an Injektionssenken übergeben möchte. Wenn Sie jedoch die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) Direktive in Ihrem CSP einfügen und ihr den Wert `'script'` geben, wird der Browser Ihrer Seite nur erlauben, Trusted Types an Injektionssenken zu übergeben. Zum Beispiel wird der folgende Code eine Ausnahme auslösen:

```js example-bad
const possiblyXSS = "<p>I might be XSS</p>";
const target = document.querySelector("#target");

target.innerHTML = possiblyXSS;
// Will throw an exception if `require-trusted-types-for` is set
```

Trusted Type-Objekte werden unter Verwendung eines benutzerdefinierten _Policy_-Objekts erstellt. Ihr Code kann jede Art von Policy-Objekt erstellen, einschließlich solcher, deren Transformationsfunktion die Eingabe tatsächlich nicht bereinigt und Sie daher nicht schützt. Um dieses Risiko zu minimieren, können Sie die [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) Direktive einfügen. Diese listet die Namen akzeptabler Policies auf, und der Browser erlaubt nur, dass diese benannten Policies verwendet werden.

## Testen Ihrer Richtlinie

Um den Einsatz zu erleichtern, kann CSP im nur Berichtsmodus implementiert werden.
Die Richtlinie wird nicht erzwungen, aber jede Verletzung wird an den in der Richtlinie angegebenen Berichts-Endpunkt gesendet. Darüber hinaus kann ein nur Berichts-Header verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich einzusetzen.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header verwenden, um Ihre Richtlinie anzugeben, wie folgt:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header als auch ein {{HTTPHeader("Content-Security-Policy")}} Header in derselben Antwort vorhanden sind, werden beide Richtlinien umgesetzt.
Die in den `Content-Security-Policy` Headers spezifizierte Richtlinie wird durchgesetzt, während die `Content-Security-Policy-Report-Only` Richtlinie Berichte generiert, aber nicht durchgesetzt wird.

Beachten Sie, dass im Gegensatz zu einer normalen Inhalts-Sicherheitsrichtlinie eine Nur-Berichts-Richtlinie nicht in einem `<meta>` Element geliefert werden kann.

### Berichterstattung von Verstößen

Die empfohlene Methode zur Berichterstattung von CSP-Verstößen ist die Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API), die Endpunkte im {{HTTPHeader("Reporting-Endpoints")}} deklarieren und einen davon als CSP-Berichtsziel mithilfe der `Content-Security-Policy` Header-{{CSP("report-to")}}-Direktive festlegen.

> [!WARNING]
> Sie können auch die CSP {{CSP("report-uri")}} Direktive verwenden, um eine Ziel-URL für CSP-Verstoßberichte anzugeben.
> Dies sendet ein leicht unterschiedliches JSON-Berichtsformat über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`.
> Dieser Ansatz ist veraltet, aber Sie sollten beide deklarieren, bis {{CSP("report-to")}} in allen Browsern unterstützt wird.
> Für weitere Informationen über den Ansatz siehe das {{CSP("report-uri")}}-Thema.

Ein Server kann die Clients darüber informieren, wohin Berichte gesendet werden sollen, indem er den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwortheader verwendet.
Dieser Header definiert eine oder mehrere Endpunkt-URLs als Komma-getrennte Liste.
Zum Beispiel, um einen Berichtsendpunkt namens `csp-endpoint` zu definieren, der Berichte unter `https://example.com/csp-reports` akzeptiert, könnte der Header der Server-Antwort so aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die unterschiedliche Arten von Berichten behandeln, würden Sie sie folgendermaßen angeben:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Sie können dann die `Content-Security-Policy` Header-{{CSP("report-to")}}-Direktive verwenden, um festzulegen, dass ein bestimmter definierter Endpunkt für die Berichterstattung verwendet werden soll.
Zum Beispiel, um CSP-Verstoßberichte an `https://example.com/csp-reports` für die `default-src` zu senden, könnten Sie Antwortheader senden, die folgendermaßen aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn ein CSP-Verstoß auftritt, sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt über eine HTTP {{httpmethod("POST")}}-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`.
Der Bericht ist eine serialisierte Form des [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport) Objekts, das eine `type` Eigenschaft mit einem Wert von `"csp-violation"` enthält.

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

Sie müssen einen Server einrichten, um Berichte mit dem angegebenen JSON-Format und -Inhaltstyp zu empfangen.
Der Server, der diese Anfragen bearbeitet, kann die eingehenden Berichte dann speichern oder verarbeiten, wie es Ihrer Anforderung am besten entspricht.

## Siehe auch

- [CSP-Fehler und Warnungen](/de/docs/Web/HTTP/Guides/CSP/Errors)
- [Cross-Site Scripting mit einer strikten Content Security Policy mindern](https://web.dev/articles/strict-csp) auf web.dev (2024)
- [Content Security Policy: Ein erfolgreicher Kompromiss zwischen Härtung und Minderung](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- [Content Security Policy Spickzettel](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) auf owasp.org
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
