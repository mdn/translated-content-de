---
title: Content Security Policy (CSP)
slug: Web/HTTP/Guides/CSP
l10n:
  sourceCommit: a21dd72dbb291dd5f4d8477fcc8427e51972d58c
---

**Content Security Policy** (CSP) ist ein Feature, das hilft, das Risiko bestimmter Arten von Sicherheitsbedrohungen zu verhindern oder zu minimieren. Es besteht aus einer Reihe von Anweisungen einer Website an einen Browser, die den Browser anweisen, Beschränkungen für die Dinge festzulegen, die der Code der Website tun darf.

Der Hauptanwendungsfall von CSP ist die Kontrolle, welche Ressourcen, insbesondere JavaScript-Ressourcen, ein Dokument laden darf. Dies wird hauptsächlich als Verteidigung gegen {{Glossary("cross-site_scripting", "Cross-Site Scripting")}} (XSS) Angriffe verwendet, bei denen ein Angreifer in der Lage ist, schädlichen Code in die Website des Opfers einzuschleusen.

Ein CSP kann auch andere Zwecke haben, einschließlich der Verteidigung gegen [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und der Sicherstellung, dass die Seiten einer Website über HTTPS geladen werden.

In diesem Leitfaden beginnen wir damit, zu beschreiben, wie ein CSP an einen Browser geliefert wird und wie es auf hoher Ebene aussieht.

Dann beschreiben wir, wie es verwendet werden kann, um:

1. [Zu kontrollieren, welche Ressourcen geladen werden](#steuerung_des_ladens_von_ressourcen), um sich gegen XSS zu schützen.
2. [Das Einbetten einzuschränken](#clickjacking-schutz), um sich gegen Clickjacking zu schützen.
3. [Unsichere Anfragen zu upgraden](#upgrading_unsicherer_anfragen), um sicherzustellen, dass alle Ressourcen über HTTPS bereitgestellt werden.
4. [Die Verwendung vertrauenswürdiger Typen zu erzwingen](#erzwingen_vertrauenswürdiger_typen), um sich gegen clientseitiges XSS zu verteidigen.

Beachten Sie, dass es keine Abhängigkeit zwischen den verschiedenen Anwendungsfällen gibt: Wenn Sie Clickjacking-Schutz hinzufügen möchten, aber keine Maßnahmen gegen XSS, können Sie einfach die Direktiven für diesen Anwendungsfall hinzufügen.

Schließlich beschreiben wir [Strategien zur Bereitstellung eines CSP](#testen_ihrer_richtlinie) und Tools, die den Prozess erleichtern können.

## CSP-Übersicht

Ein CSP sollte dem Browser im {{httpheader("Content-Security-Policy")}} Response-Header geliefert werden. Es sollte auf alle Antworten zu allen Anfragen gesetzt werden, nicht nur auf das Hauptdokument.

Sie können es auch mit dem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) Attribut Ihres Dokuments {{htmlelement("meta")}} Elements angeben, und dies ist eine nützliche Option für einige Anwendungsfälle, wie z.B. eine client-seitig gerenderte {{Glossary("SPA", "Single Page App")}}, die nur statische Ressourcen hat, da Sie dann vermeiden können, sich auf eine Serverinfrastruktur zu verlassen. Diese Option unterstützt jedoch nicht alle CSP-Features.

Die Richtlinie wird als eine Reihe von _Direktiven_ angegeben, die durch Semikolons getrennt sind. Jede Direktive steuert einen anderen Aspekt der Sicherheitsrichtlinie. Jede Direktive hat einen Namen, gefolgt von einem Leerzeichen, gefolgt von einem Wert. Unterschiedliche Direktiven können unterschiedliche Syntaxen haben.

Zum Beispiel, betrachte das folgende CSP:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

Es setzt zwei Direktiven:

- Die `default-src` Direktive ist auf `'self'` gesetzt
- Die `img-src` Direktive ist auf `'self' example.com` gesetzt.

![Ein CSP aufgeteilt in seine Direktiven.](csp-overview.svg)

Die erste Direktive, `default-src`, weist den Browser an, nur Ressourcen zu laden, die mit dem Dokument gleichen Ursprungs sind, es sei denn, andere spezifischere Direktiven setzen eine andere Richtlinie für andere Ressourcentypen. Die zweite, `img-src`, weist den Browser an, Bilder zu laden, die vom gleichen Ursprung sind oder von `example.com` bereitgestellt werden.

Im nächsten Abschnitt werden wir uns die Tools ansehen, die zur Verfügung stehen, um das Laden von Ressourcen zu steuern, was die Hauptfunktion eines CSP ist.

## Steuerung des Ladens von Ressourcen

Ein CSP kann verwendet werden, um die Ressourcen zu kontrollieren, die ein Dokument laden darf. Dies wird in erster Linie zum Schutz gegen Cross-Site Scripting (XSS) Angriffe verwendet.

In diesem Abschnitt werden wir zuerst sehen, wie die Kontrolle von Ressourcenladen helfen kann, sich gegen XSS zu schützen, dann die Werkzeuge, die CSP bietet, um zu kontrollieren, welche Ressourcen geladen werden. Schließlich beschreiben wir eine besonders empfohlene Strategie, die als eine "Strict CSP" bezeichnet wird.

### XSS und Ressourcenladen

Ein Cross-Site Scripting (XSS) Angriff ist einer, bei dem ein Angreifer in der Lage ist, seinen Code im Kontext der Ziel-Website auszuführen. Dieser Code kann dann alles tun, was der eigene Code der Website tun könnte, einschließlich zum Beispiel:

- Zugriff auf oder Modifikation des Inhalts der geladenen Seiten der Seite
- Zugriff auf oder Modifikation von Inhalten im lokalen Speicher
- Durchführung von HTTP-Anfragen mit den Anmeldeinformationen des Benutzers, was dem Angreifer ermöglicht, den Benutzer zu imitieren oder auf sensible Daten zuzugreifen

Ein XSS-Angriff ist möglich, wenn eine Website eine Eingabe akzeptiert, die von einem Angreifer erstellt worden sein könnte (z.B. URL-Parameter oder ein Kommentar in einem Blog-Post) und sie dann in die Seite einfügt, ohne sie zu _sanitieren_: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausgeführt werden kann.

Websites sollten sich durch die Sanitisierung dieser Eingaben schützen, bevor sie in die Seite eingefügt werden.

> [!NOTE]
> Ein CSP kann tatsächlich auf zwei verschiedene Arten helfen, sich gegen XSS zu schützen:
>
> - Es kann helfen sicherzustellen, dass Eingaben gesäubert werden, bevor sie im Client verwendet werden: Wir besprechen dies später in [Erzwingen vertrauenswürdiger Typen](#erzwingen_vertrauenswürdiger_typen).
> - Durch die Kontrolle des Ladens von Ressourcen kann ein CSP eine Tiefenverteidigung gegen XSS bieten, indem es die Website auch dann schützt, wenn die Sanitisierung fehlschlägt. Dies ist die XSS-Verteidigung, die wir in diesem Abschnitt besprechen werden.

Wenn die Sanitisierung fehlschlägt, gibt es verschiedene Formen, die der eingespritzte schädliche Code im Dokument annehmen kann, einschließlich:

- Ein {{htmlelement("script")}} Tag, das auf eine schädliche Quelle verweist:

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

- Ein String-Argument an eine unsichere API wie [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval):

  ```js
  eval("console.log(`You've been hacked!`)");
  ```

Durch die Kontrolle des Ressourcenladens kann ein CSP Schutz gegen all dies bieten. Mit einem CSP können Sie:

- die zulässigen Quellen für JavaScript-Dateien und andere Ressourcen definieren und effektiv das Laden von `https://evil.example.com` blockieren
- Inline-Skripttags deaktivieren
- nur Skripttags erlauben, die den korrekten {{Glossary("Nonce", "Nonce")}} oder Hash gesetzt haben
- Inline-Event-Handler deaktivieren
- `javascript:` URLs deaktivieren
- gefährliche APIs wie `eval()` deaktivieren

Im nächsten Abschnitt werden wir uns die Tools ansehen, die CSP bietet, um diese Dinge zu tun.

> [!NOTE]
> Das Setzen eines CSP ist keine Alternative zur Sanitisierung von Eingaben. Websites sollten Eingaben _sanitieren_ und gleichzeitig ein CSP setzen, um eine Tiefenverteidigung gegen XSS bereitzustellen.

### Fetch-Direktiven

Fetch-Direktiven werden verwendet, um eine bestimmte Kategorie von Ressourcen anzugeben, die ein Dokument laden darf - wie JavaScript, CSS-Stile, Bilder, Schriftarten usw.

Es gibt verschiedene Fetch-Direktiven für verschiedene Arten von Ressourcen. Zum Beispiel:

- [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) legt die erlaubten Quellen für JavaScript fest.
- [`style-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) legt die erlaubten Quellen für CSS-Stile fest.
- [`img-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) legt die erlaubten Quellen für Bilder fest.

Eine spezielle Fetch-Direktive ist `default-src`, die eine Standardrichtlinie für alle Ressourcen festlegt, deren Direktiven nicht explizit aufgeführt sind.

Für die vollständige Liste der Fetch-Direktiven siehe die [Referenzdokumentation](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directives).

Jede Fetch-Direktive wird entweder als das einzelne Schlüsselwort `'none'` oder als ein oder mehrere _Quellausdrücke_ angegeben, die durch Leerzeichen getrennt sind. Wenn mehr als ein Quellausdruck aufgeführt ist: Wenn eine der Methoden die Ressource zulässt, dann ist die Ressource erlaubt.

Zum Beispiel legt das unten stehende CSP zwei Fetch-Direktiven fest:

- `default-src` erhält den einzelnen Quellausdruck `'self'`
- `img-src` erhält zwei Quellausdrücke: `'self'` und `example.com`

![CSP-Diagramm, das Quellausdrücke zeigt](csp-source-expressions.svg)

Die Wirkung davon ist, dass:

- Bilder entweder mit dem Dokument ursprungsgleich sein müssen oder von `example.com` geladen werden.
- alle anderen Ressourcen mit dem Dokument ursprungsgleich sein müssen.

In den nächsten Abschnitten beschreiben wir einige der Möglichkeiten, wie Sie Quellausdrücke verwenden können, um das Laden von Ressourcen zu steuern. Beachten Sie, dass diese Ausdrücke, obwohl wir sie separat beschreiben, im Allgemeinen kombiniert werden können: Zum Beispiel kann eine Einzelabrufdirektive sowohl Nonces als auch Hostnamen enthalten.

#### Blockieren von Ressourcen

Um einen Ressourcentyp vollständig zu blockieren, verwenden Sie das Schlüsselwort `'none'`. Zum Beispiel blockiert die folgende Direktive alle {{htmlelement("object")}} und {{htmlelement("embed")}} Ressourcen:

```http
Content-Security-Policy: object-src 'none'
```

Beachten Sie, dass `'none'` nicht mit einer anderen Methode in einer bestimmten Direktive kombiniert werden kann: In der Praxis, wenn neben `'none'` andere Quellausdrücke gegeben sind, werden diese ignoriert.

#### Nonces

Ein `nonce` ist der empfohlene Ansatz zur Einschränkung des Ladens von {{htmlelement("script")}} und {{htmlelement("style")}}-Ressourcen.

Mit einem Nonce erzeugt der Server für jede HTTP-Antwort einen zufälligen Wert und schließt ihn in eine `script-src` und/oder eine `style-src` Direktive ein:

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server schließt diesen Wert dann als Wert des `nonce` Attributs in alle `<script>` und/oder `<style>` Tags ein, die sie im Dokument einschließen möchten.

Der Browser vergleicht die beiden Werte und lädt die Ressource nur, wenn sie übereinstimmen. Die Idee ist, dass auch wenn ein Angreifer in der Lage ist, JavaScript in die Seite einzuschleusen, er nicht wissen wird, welches Nonce der Server verwenden wird, sodass der Browser das Skript nicht ausführen wird.

Damit dieser Ansatz funktioniert, darf es dem Angreifer nicht möglich sein, den Nonce zu erraten.

**In der Praxis bedeutet dies, dass der Nonce für jede HTTP-Antwort unterschiedlich sein muss und nicht vorhersehbar sein darf.**

Dies wiederum bedeutet, dass der Server kein statisches HTML bereitstellen kann, da er jedes Mal einen neuen Nonce einfügen muss. In der Regel würde der Server eine Templating-Engine verwenden, um den Nonce einzufügen.

Hier ist ein Snippet [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) Code zur Veranschaulichung:

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

Bei jeder Anfrage erzeugt der Server einen neuen Nonce, fügt ihn in die CSP und in die {{htmlelement("script")}} Tags im zurückgegebenen Dokument ein. Beachten Sie, dass der Server:

- einen neuen Nonce für jede Anfrage generiert
- Nonces sowohl mit externen als auch mit Inline-Skripten verwenden kann
- den gleichen Nonce für alle `<script>` Tags im Dokument verwendet

Es ist wichtig, dass der Server eine Art Templating verwendet, um Nonces einzufügen, und sie nicht einfach in alle `<script>` Tags einfügt: Andernfalls könnte der Server versehentlich Nonces in von einem Angreifer eingeschleuste Skripte einfügen.

Beachten Sie, dass Nonces nur für Elemente verwendet werden können, die ein `nonce` Attribut haben: das heißt, nur `<script>` und `<style>` Elemente.

#### Hashes

Fetch-Direktiven können auch einen Hash des Skripts verwenden, um seine Integrität zu garantieren. Mit dieser Methode:

1. berechnet der Server einen Hash der Skriptinhalte unter Verwendung einer {{Glossary("hash_function", "Hash-Funktion")}} (einer von SHA-256, SHA-384 oder SHA-512)
2. erstellt eine {{Glossary("Base64", "Base64")}} Kodierung des Ergebnisses
3. fügt ein Präfix hinzu, das den verwendeten Hash-Algorithmus identifiziert (eines von `sha256-`, `sha384-` oder `sha512-`).

Dann fügt er das Ergebnis zur Direktive hinzu:

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

Wenn der Browser das Dokument erhält, hashiert er das Skript, vergleicht das Ergebnis mit dem Wert aus dem Header und lädt das Skript nur, wenn sie übereinstimmen.

Externe Skripte müssen auch das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut enthalten, damit diese Methode funktioniert.

Hier ist ein Snippet von Express-Code zur Veranschaulichung:

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
- Für das externe Skript "main.js" fügen wir auch das `integrity` Attribut hinzu und geben ihm den gleichen Wert.
- Im Gegensatz zum Beispiel mit Nonces können sowohl die CSP als auch der Inhalt statisch sein, da die Hashes gleich bleiben. Dies macht hash-basierte Richtlinien besser geeignet für statische Seiten oder Websites, die auf clientseitiges Rendering angewiesen sind.

#### Schemen-basierte Richtlinien

Fetch-Direktiven können ein Schema auflisten, wie `https:`, um Ressourcen zu ermöglichen, die über dieses Schema bereitgestellt werden. Dies ermöglicht einer Richtlinie beispielsweise, HTTPS für alle Ressourcenladevorgänge zu fordern:

```http
Content-Security-Policy: default-src https:
```

#### Standortbasierte Richtlinien

Fetch-Direktiven können das Laden von Ressourcen basierend darauf steuern, wo sich die Ressource befindet.

Das Schlüsselwort `'self'` erlaubt Ressourcen, die mit dem Dokument ursprungsgleich sind:

```http
Content-Security-Policy: img-src 'self'
```

Sie können auch einen oder mehrere Hostnamen angeben, möglicherweise einschließlich Platzhaltern, und nur Ressourcen, die von diesen Hosts bereitgestellt werden, sind erlaubt. Dies könnte beispielsweise verwendet werden, um Inhalte von einem vertrauenswürdigen CDN zuzulassen.

```http
Content-Security-Policy: img-src *.example.org
```

Sie können mehrere Standorte angeben. Die folgende Direktive erlaubt nur Bilder, die mit dem aktuellen Dokument ursprungsgleich sind, oder von einer Subdomain von "example.org" bereitgestellt werden, oder von "example.com" bereitgestellt werden:

```http
Content-Security-Policy: img-src 'self' *.example.org  example.com
```

#### Inline-JavaScript

Wenn ein CSP entweder eine `default-src` oder eine `script-src` Direktive enthält, dann darf Inline-JavaScript nicht ausgeführt werden, es sei denn, es werden zusätzliche Maßnahmen ergriffen, um es zu aktivieren. Dies schließt ein:

- JavaScript, das innerhalb eines `<script>` Elements auf der Seite enthalten ist:

  ```html
  <script>
    console.log("Hello from an inline script");
  </script>
  ```

- JavaScript in einem Inline-Ereignis-Handler-Attribut:

  ```html
  <img src="x" onerror="console.log('Hello from an inline event handler')" />
  ```

- JavaScript in einer `javascript:` URL:

  ```html
  <a href="javascript:console.log('Hello from a javascript: URL')">Click me</a>
  ```

Das Schlüsselwort `unsafe-inline` kann verwendet werden, um diese Einschränkung zu überschreiben. Zum Beispiel erfordert die folgende Direktive, dass alle Ressourcen ursprungsgleich sind, erlaubt jedoch Inline-JavaScript:

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es einen Großteil des Zwecks eines CSP zunichtemacht. Inline-JavaScript ist einer der häufigsten XSS-Vektoren, und eines der grundlegendsten Ziele eines CSP ist es, seine unkontrollierte Verwendung zu verhindern.

Inline-`<script>` Elemente sind erlaubt, wenn sie durch einen Nonce oder einen Hash geschützt sind, wie oben beschrieben.

Wenn eine Direktive Nonce- oder Hash-Ausdrücke enthält, wird das Schlüsselwort `unsafe-inline` von Browsern ignoriert.

#### `eval()` und ähnliche APIs

Wie Inline-JavaScript, wenn ein CSP entweder eine `default-src` oder eine `script-src` Direktive enthält, dann werden `eval()` und ähnliche APIs nicht erlaubt sein, ausgeführt zu werden. Dies schließt unter anderem folgende APIs ein:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) selbst:

  ```js
  eval('console.log("hello from eval()")');
  ```

- Der {{jsxref("Function/Function()", "Function()")}} Konstruktor:

  ```js
  const sum = new Function("a", "b", "return a + b");
  ```

- Das String-Argument an [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval):

  ```js
  setTimeout("console.log('hello from setTimeout')", 1);
  ```

Das Schlüsselwort `unsafe-eval` kann verwendet werden, um dieses Verhalten zu überschreiben, und wie bei `unsafe-inline`, und aus den gleichen Gründen: **Entwickler sollten `unsafe-eval` vermeiden**.

Manchmal kann es schwierig sein, die Verwendung von `eval()` und den anderen Methoden zu entfernen: in diesen Situationen kann die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) es sicherer machen, indem sichergestellt wird, dass der Input einer definierten Richtlinie entspricht. Das Schlüsselwort `trusted-types-eval` sollte verwendet werden, um das Verhalten in diesem Fall zu überschreiben. Im Gegensatz zu `unsafe-inline` wird es nur das Verhalten im Browser überschreiben, wenn vertrauenswürdige Typen unterstützt und aktiviert sind; was sicherstellt, dass die Methoden auf Browsern, die keine vertrauenswürdigen Typen unterstützen, blockiert bleiben.

Im Gegensatz zu `unsafe-inline` funktioniert das Schlüsselwort `unsafe-eval` weiterhin in einer Direktive, die Nonce- oder Hash-Ausdrücke enthält.

### Strikte CSP

Um das Laden von Skripten als Maßnahme gegen XSS zu steuern, ist es empfohlene Praxis, [nonce-](#nonces) oder [hash-](#hashes) basierte Fetch-Direktiven zu verwenden. Dies wird als _strikte CSP_ bezeichnet. Diese Art von CSP hat zwei Hauptvorteile gegenüber einer standortbasierten CSP (in der Regel als _Allowlist-CSP_ bezeichnet):

- Allowlist-CSPs sind schwer richtig umzusetzen und oft enthalten Richtlinien unbeabsichtigt unsichere Domänen, und bieten daher keinen effektiven Schutz gegen XSS (siehe [CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)).
- Allowlist-CSPs können sehr groß und schwer zu warten sein, insbesondere bei der Verwendung von Skripten, die außerhalb Ihrer Kontrolle liegen. Laut [How I learned to stop worrying and love the Content Security Policy](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/), allein um Google Analytics zu integrieren, wird ein Entwickler aufgefordert, 187 Google-Domänen in die Allowlist aufzunehmen.

Eine Nonce-basierte strikte CSP sieht so aus:

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

In dieser CSP haben wir:

- Nonces verwendet, um zu kontrollieren, welche JavaScript-Ressourcen geladen werden dürfen
- alle Objekteinbettungen blockiert
- alle Verwendungen des `<base>` Elements blockiert, um eine Basis-URI festzulegen.

Eine Hash-basierte strikte CSP ist die gleiche, außer dass sie Hashes anstelle von Nonces verwendet:

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

Nonce-basierte Direktiven sind leichter zu warten, wenn Sie Antworten, einschließlich des Inhalts selbst, dynamisch generieren können. Andernfalls müssen Sie hash-basierte Direktiven verwenden. Das Problem mit hash-basierten Direktiven ist, dass Sie den Hash neu berechnen und wieder anwenden müssen, wenn Änderungen am Skriptinhalt vorgenommen werden.

#### Das `strict-dynamic` Schlüsselwort

Wie oben dargestellt, ist die strikte CSP schwer umzusetzen, wenn Sie Skripte verwenden, die nicht unter Ihrer Kontrolle sind. Wenn ein Drittskript zusätzliche Skripte lädt oder über Inline-Skripte verfügt, wird dies fehlschlagen, da das Drittskript den Nonce oder Hash nicht weitergeben wird.

Das `strict-dynamic` Schlüsselwort wird bereitgestellt, um bei diesem Problem zu helfen. Es ist ein Schlüsselwort, das in eine Fetch-Direktive aufgenommen werden kann, und es hat die Wirkung, dass, wenn ein Skript einen Nonce oder einen Hash angehängt hat, dann darf dieses Skript weitere Skripte laden, die selbst keine Nonces oder Hashes haben. Das heißt, das Vertrauen, das durch einen Nonce oder einen Hash in ein Skript gesetzt wird, wird an Skripte weitergegeben, die das ursprüngliche Skript lädt (und Skripte, die _sie_ laden, und so weiter).

Zum Beispiel, betrachten Sie ein Dokument wie dieses:

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

Das "main.js"-Skript wird geladen, weil sein Hash mit dem Wert in der CSP übereinstimmt. Aber sein Versuch, "main2.js" zu laden, wird fehlschlagen.

Wenn wir `'strict-dynamic'` zur CSP hinzufügen, dann kann "main.js" "main2.js" laden:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  'strict-dynamic'
```

Das `'strict-dynamic'` Schlüsselwort macht es viel einfacher, Nonce- oder Hash-basierte CSPs zu erstellen und zu warten, insbesondere wenn eine Website Drittanbieter-Skripte verwendet. Es macht Ihre CSP jedoch weniger sicher, da, wenn die Skripte, die Sie einbinden, `<script>` Elemente basierend auf potenziellen Quellen von XSS erstellen, dann wird die CSP sie nicht schützen.

#### Refaktorisierung von Inline-JavaScript und `eval()`

Wie bereits gesehen, ist Inline-JavaScript standardmäßig in einer CSP nicht erlaubt. Mit Nonces oder Hashes kann ein Entwickler Inline-`<script>`-Tags verwenden, aber Sie müssen immer noch den Code refaktorisieren, um andere unzulässige Muster zu entfernen, einschließlich Inline-Event-Handler, `javascript:` URLs und der Verwendung von `eval()`. Zum Beispiel sollten Inline-Event-Handler normalerweise durch Aufrufe an [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ersetzt werden:

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

Die [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) Direktive kann verwendet werden, um zu kontrollieren, welche Dokumente, falls vorhanden, erlaubt sind, dieses Dokument in einem verschachtelten Browserkontext wie einem {{htmlelement("iframe")}} einzubetten. Dies ist ein effektiver Schutz gegen Clickjacking-Angriffe, da diese Angriffe auf dem Einbetten der Zielseite in eine vom Angreifer kontrollierte Seite beruhen.

Die Syntax von `frame-ancestors` ist ein Subset der Fetch-Direktivsyntax: Sie können den einzelnen Schlüsselwortwert `'none'` oder einen oder mehrere Quellausdrücke angeben. Jedoch sind die einzigen Quellausdrücke, die Sie verwenden können, Schemata, Hostnamen oder der `'self'` Schlüsselwortwert.

Sofern Sie nicht benötigen, dass Ihre Seite eingebettet werden kann, sollten Sie `frame-ancestors` auf `'none'` setzen:

```http
Content-Security-Policy: frame-ancestors 'none'
```

Diese Direktive ist ein flexibler Ersatz für den {{httpheader("X-Frame-Options")}} Header.

## Upgrading unsicherer Anfragen

Web-Entwickler werden nachdrücklich ermutigt, alle ihre Inhalte über HTTPS zu liefern. Beim Prozess des Upgradens einer Seite zu HTTPS wird die Hauptseite manchmal über HTTPS bereitgestellt, während ihre Ressourcen über HTTP geliefert werden, zum Beispiel unter Verwendung eines Markups wie diesem:

```html
<script src="http://example.org/my-cat.js"></script>
```

Dies wird _gemischter Inhalt_ genannt, und das Vorhandensein unsicherer Ressourcen schwächt den Schutz, den HTTPS bietet, stark. Nach dem [Algorithmus für gemischte Inhalte](/de/docs/Web/Security/Defenses/Mixed_content), den Browser implementieren, werden unsichere Ressourcen, die von einem Dokument über HTTPS geladen werden, in "aufrüstbare Inhalte" und "blockierbare Inhalte" kategorisiert. Aufrüstbare Inhalte werden auf HTTPS aufgerüstet, und blockierbare Inhalte werden blockiert, wodurch möglicherweise die Seite beschädigt wird.

Die ultimative Lösung für gemischte Inhalte besteht darin, dass Entwickler alle Ressourcen über HTTPS laden. Selbst wenn eine Seite tatsächlich alle Inhalte über HTTPS bereitstellen kann, kann es jedoch sehr schwierig (oder sogar praktisch unmöglich, wenn es um archivierte Inhalte geht) für einen Entwickler sein, alle von der Seite verwendeten URLs neu zu schreiben, um Ressourcen zu laden.

Die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) Direktive ist gedacht, um dieses Problem zu lösen. Diese Direktive hat keinen Wert: Um sie einzustellen, fügen Sie einfach den Namen der Direktive hinzu:

```http
Content-Security-Policy: upgrade-insecure-requests
```

Wenn diese Direktive in einem Dokument gesetzt ist, wird der Browser automatisch alle HTTP-URLs in den folgenden Fällen auf HTTPS upgraden:

- Anfragen zum Laden von Ressourcen (wie Bilder, Skripten oder Schriftarten)
- Navigationsanfragen (wie Linkziele), die mit dem Dokument ursprungsgleich sind
- Navigationsanfragen in verschachtelten Browserkontexten, wie etwa iframes
- Formularübermittlungen

Jedoch werden Navigationsanfragen auf Top-Ebene, deren Ziel ein anderer Ursprung ist, nicht aufgerüstet.

Zum Beispiel, nehmen wir an, dass das Dokument bei `https://example.org` mit einem CSP serviert wird, das die `upgrade-insecure-requests` Direktive enthält, und das Dokument enthält ein Markup wie dieses:

```html
<script src="http://example.org/my-cat.js"></script>
<script src="http://not-example.org/another-cat.js"></script>
```

Der Browser wird beide Anfragen automatisch auf HTTPS upgraden.

Angenommen, das Dokument enthält außerdem Folgendes:

```html
<a href="http://example.org/more-cats">See some more cats!</a>
<a href="http://not-example.org/even-more-cats">More cats, on another site!</a>
```

Der Browser wird den ersten Link auf HTTPS upgraden, aber nicht den zweiten, da es sich um eine Navigation zu einem anderen Ursprung handelt.

Diese Direktive ist kein Ersatz für den {{httpheader("Strict-Transport-Security")}} Header (auch bekannt als HSTS), da sie externe Links zu einer Seite nicht aufrüstet. Seiten sollten diese Direktive und den `Strict-Transport-Security` Header enthalten.

## Erzwingen vertrauenswürdiger Typen

Die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) und [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) Direktiven ermöglichen es Ihnen, sich gegen clientseitige [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe zu verteidigen, indem sichergestellt wird, dass alle Eingaben durch eine Transformation verarbeitet werden, um sie sicher zu machen, bevor sie an eine Web-Plattform-API weitergegeben werden, die sie ansonsten als Code ausführen könnte. Die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) und [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) Direktiven können verwendet werden, um die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) durchzusetzen. Dies ermöglicht es Ihnen, sich gegen clientseitige [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe zu verteidigen, indem Sie vorschreiben, dass alle Eingaben durch eine Transformationsfunktion gehen müssen, was eine Gelegenheit bietet, sie sicher zu machen, bevor sie an eine Web-Plattform-API gesendet werden, die sie ansonsten als Code ausführen könnte.

### Injektionsstellen und Sanitisierung

Einige APIs in der Web-Plattform sind als _Injektionsstellen_ bekannt. Dies sind APIs, denen einige Eingaben, in der Regel in Form eines Strings, übergeben werden können und die diese Eingaben als Code interpretieren können. In diesem Leitfaden haben wir bereits `eval()` gesehen, aber es gibt viele andere Injektionsstellen, wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`Document.write()`](/de/docs/Web/API/Document/write).

Wenn ein Angreifer speziell gestaltete Eingaben an Ihre Website übermitteln kann und Ihre Website sie an eine dieser Injektionsstellen weiterleitet, kann der Angreifer schädlichen Code ausführen.

Einige Injektionsstellen, wie `eval()`, sind sehr schwer sicher zu verwenden, und wir haben gesehen, dass ein CSP sie typischerweise [vollständig blockiert](#eval_and_similar_apis). Andere können sicherer gemacht werden, wenn die Eingaben so verarbeitet werden, dass unsichere Elemente entfernt werden. Diese Praxis wird [_Sanitisierung_](/de/docs/Web/Security/Attacks/XSS#sanitization) genannt.

### Die Trusted Types API

Mit der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) können Sie _vertrauenswürdige Typen_ anstelle von Strings in Injektionsstellen übergeben. Vertrauenswürdige Typen sind Objekte, die sich aus dem Durchlaufen potenziell gefährlicher Eingaben durch eine Transformationsfunktion ergeben. Diese Transformation saniert in der Regel die Eingaben, indem alle Elemente entfernt werden, die sie ausführbar machen könnten (wie {{htmlelement("script")}} Tags).

Standardmäßig könnte Ihr Code entscheiden, vertrauenswürdige Typen oder nicht geprüfte Strings an Injektionsstellen zu übergeben. Wenn Sie jedoch die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) Direktive in Ihrem CSP aufnehmen und ihr den Wert `'script'` geben, dann erlaubt der Browser Ihrer Website nur, vertrauenswürdige Typen an Injektionsstellen zu übergeben. Zum Beispiel wird der folgende Code eine Ausnahme auslösen:

```js example-bad
const possiblyXSS = "<p>I might be XSS</p>";
const target = document.querySelector("#target");

target.innerHTML = possiblyXSS;
// Will throw an exception if `require-trusted-types-for` is set
```

Vertrauenswürdige Typobjekte werden durch ein benutzerdefiniertes _Policy_-Objekt erstellt. Ihr Code kann jede Art von Policy-Objekt erstellen, einschließlich solcher, deren Transformationsfunktion die Eingaben nicht tatsächlich saniert und Sie daher nicht schützt. Um dieses Risiko zu minimieren, können Sie die [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) Direktive einfügen. Diese listet die Namen akzeptabler Policies auf, und der Browser erlaubt nur die Verwendung dieser benannten Policies.

## Testen Ihrer Richtlinie

Um die Bereitstellung zu erleichtern, kann CSP im Bericht-Only-Modus bereitgestellt werden. Die Richtlinie wird nicht erzwungen, aber alle Verstöße werden an den in der Richtlinie angegebenen Berichts-Endpunkt gesendet. Zusätzlich kann ein Bericht-Only-Header verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich bereitzustellen.

Sie können die {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header verwenden, um Ihre Richtlinie wie folgt anzugeben:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header als auch ein {{HTTPHeader("Content-Security-Policy")}} Header in derselben Antwort vorhanden sind, werden beide Richtlinien berücksichtigt. Die in den `Content-Security-Policy` Headern angegebene Richtlinie wird durchgesetzt, während die `Content-Security-Policy-Report-Only` Richtlinie Berichte erstellt, aber nicht durchgesetzt wird.

Beachten Sie, dass im Gegensatz zu einer normalen Inhaltssicherheitsrichtlinie eine Nur-Bericht Richtlinie nicht in einem `<meta>` Element geliefert werden kann.

### Verstoßberichterstattung

Die empfohlene Methode zum Melden von CSP-Verstößen ist die Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API), wobei Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} deklariert und einer von ihnen als CSP-Berichtsziel durch die `Content-Security-Policy` Header {{CSP("report-to")}} Direktive angegeben wird.

> [!WARNING]
> Sie können auch die CSP {{CSP("report-uri")}} Direktive verwenden, um eine Ziel-URL für CSP-Verstoßberichte anzugeben.
> Dies sendet ein leicht unterschiedliches JSON-Berichtsformat über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`.
> Dieser Ansatz ist veraltet, aber Sie sollten beide deklarieren, bis {{CSP("report-to")}} in allen Browsern unterstützt wird.
> Weitere Informationen zu diesem Ansatz finden Sie im {{CSP("report-uri")}}-Thema.

Ein Server kann Clients informieren, wohin Berichte gesendet werden sollen, indem er den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwortheader verwendet.
Dieser Header definiert eine oder mehrere Endpunkt-URLs als kommagetrennte Liste.
Zum Beispiel, um einen Berichts-Endpunkt namens `csp-endpoint` zu definieren, der Berichte an `https://example.com/csp-reports` akzeptiert, könnte der Antwortheader des Servers so aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die unterschiedliche Arten von Berichten behandeln, würden Sie sie wie folgt spezifizieren:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Sie können dann die `Content-Security-Policy` Kopfzeile {{CSP("report-to")}} Direktive verwenden, um anzugeben, dass ein bestimmter definierter Endpunkt für die Berichterstattung verwendet werden soll.
Zum Beispiel, um CSP-Verstoßberichte an `https://example.com/csp-reports` für das `default-src` zu senden, könnten Sie Antwortheader senden, die wie folgt aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn ein CSP-Verstoß auftritt, sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt über eine HTTP-`POST`-Operation, mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`. Der Bericht ist eine serialisierte Form des [`Report`](/de/docs/Web/API/Report) Objekts, das eine `type` Eigenschaft mit einem Wert von `"csp-violation"` enthält und einen `body`, der die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Objekts ist.

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

Sie müssen einen Server einrichten, der Berichte mit dem angegebenen JSON-Format und Inhaltstyp empfängt. Der Server, der diese Anfragen bearbeitet, kann dann die eingehenden Berichte speichern oder verarbeiten, auf eine Weise, die Ihren Bedürfnissen am besten entspricht.

## Siehe auch

- [CSP-Fehler und Warnungen](/de/docs/Web/HTTP/Guides/CSP/Errors)
- [Mitigate cross-site scripting with a strict Content Security Policy](https://web.dev/articles/strict-csp) auf web.dev (2024)
- [Content Security Policy: A successful mess between hardening and mitigation](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) auf owasp.org
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
