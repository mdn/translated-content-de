---
title: Content Security Policy (CSP)
slug: Web/HTTP/Guides/CSP
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{HTTPSidebar}}

**Content Security Policy** (CSP) ist ein Feature, das dabei hilft, das Risiko bestimmter Arten von Sicherheitsbedrohungen zu verhindern oder zu minimieren. Es besteht aus einer Reihe von Anweisungen von einer Website an einen Browser, die den Browser anweisen, Einschränkungen für die Dinge zu setzen, die der Code, aus dem die Website besteht, tun darf.

Der Hauptverwendungszweck von CSP ist die Kontrolle darüber, welche Ressourcen, insbesondere JavaScript-Ressourcen, ein Dokument laden darf. Dies wird hauptsächlich als Schutz gegen {{Glossary("cross-site_scripting", "Cross-Site Scripting")}} (XSS)-Angriffe verwendet, bei denen ein Angreifer in der Lage ist, schädlichen Code in die Seite des Opfers zu injizieren.

Ein CSP kann auch zu anderen Zwecken verwendet werden, darunter der Schutz vor [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und die Sicherstellung, dass die Seiten einer Website über HTTPS geladen werden.

In diesem Leitfaden beginnen wir mit der Beschreibung, wie ein CSP an einen Browser ausgeliefert wird und wie es auf hoher Ebene aussieht.

Dann beschreiben wir, wie es verwendet werden kann, um [zu steuern, welche Ressourcen geladen werden](#kontrolle_der_ressourcennutzung), um sich gegen XSS zu schützen, sowie andere Anwendungsfälle wie [Clickjacking-Schutz](#clickjacking-schutz) und [das Upgraden unsicherer Anfragen](#upgraden_unsicherer_anfragen). Beachten Sie, dass es keine Abhängigkeit zwischen den verschiedenen Anwendungsfällen gibt: Wenn Sie Clickjacking-Schutz hinzufügen möchten, aber keine XSS-Abwehr, können Sie einfach die Direktiven für diesen Anwendungsfall hinzufügen.

Schließlich beschreiben wir [Strategien zur Implementierung eines CSP](#testen_ihrer_richtlinie) und Werkzeuge, die helfen können, diesen Prozess zu erleichtern.

## CSP-Überblick

Ein CSP sollte im {{httpheader("Content-Security-Policy")}} Response-Header an den Browser geliefert werden. Es sollte auf alle Antworten auf alle Anfragen gesetzt werden, nicht nur auf das Hauptdokument.

Sie können es auch mithilfe des [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attributes Ihres Dokuments im {{htmlelement("meta")}}-Element angeben, und dies ist eine nützliche Option für einige Anwendungsfälle, wie z.B. eine clientseitig gerenderte {{Glossary("SPA", "Single Page App")}}, die nur statische Ressourcen hat, da Sie dann nicht auf jegliche Serverinfrastruktur angewiesen sind. Diese Option unterstützt jedoch nicht alle CSP-Funktionen.

Die Richtlinie wird als eine Reihe von _Direktiven_ angegeben, die durch Semikolons getrennt sind. Jede Direktive kontrolliert einen anderen Aspekt der Sicherheitsrichtlinie. Jede Direktive hat einen Namen, gefolgt von einem Leerzeichen und einem Wert. Verschiedene Direktiven können unterschiedliche Syntaxen haben.

Zum Beispiel betrachten Sie das folgende CSP:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

Es setzt zwei Direktiven:

- die `default-src` Direktive ist auf `'self'` gesetzt
- die `img-src` Direktive ist auf `'self' example.com` gesetzt.

![Ein CSP, aufgebrochen in seine Direktiven.](csp-overview.svg)

Die erste Direktive, `default-src`, sagt dem Browser, nur Ressourcen zu laden, die gleich Herkunft wie das Dokument sind, es sei denn, andere spezifischere Direktiven setzen eine andere Richtlinie für andere Ressourcentypen. Die zweite, `img-src`, sagt dem Browser, Bilder zu laden, die gleich Herkunft sind oder von `example.com` bereitgestellt werden.

Im nächsten Abschnitt schauen wir uns die verfügbaren Werkzeuge zur Steuerung der Ressourcennutzung an, was die Hauptfunktion eines CSP ist.

## Kontrolle der Ressourcennutzung

Ein CSP kann verwendet werden, um die Ressourcen zu steuern, die ein Dokument laden darf. Dies wird hauptsächlich zum Schutz gegen Cross-Site Scripting (XSS)-Angriffe verwendet.

In diesem Abschnitt werden wir zuerst sehen, wie die Kontrolle der Ressourcennutzung helfen kann, sich gegen XSS zu schützen, dann die Werkzeuge, die CSP bietet, um zu kontrollieren, welche Ressourcen geladen werden. Schließlich beschreiben wir eine bestimmte empfohlene Strategie, die als "Strict CSP" bezeichnet wird.

### XSS und Ressourcennutzung

Ein Cross-Site Scripting (XSS) Angriff ist ein Angriff, bei dem ein Angreifer seinen Code im Kontext der Zielwebsite ausführen kann. Dieser Code kann dann alles tun, was der eigene Code der Website tun könnte, einschließlich:

- Zugriff auf oder Änderung des Inhalts der geladenen Seiten der Website
- Zugriff auf oder Änderung von Inhalten im lokalen Speicher
- Erstellung von HTTP-Anfragen mit den Anmeldeinformationen des Benutzers, wodurch der Angreifer den Benutzer imitieren oder auf sensible Daten zugreifen kann

Ein XSS-Angriff ist möglich, wenn eine Website irgendeine Eingabe akzeptiert, die vom Angreifer erstellt worden sein könnte (zum Beispiel URL-Parameter oder ein Kommentar in einem Blogbeitrag) und diese dann ohne _Bereinigung_ einbindet: das bedeutet, ohne sicherzustellen, dass sie nicht als JavaScript ausgeführt werden kann.

Websites sollten sich gegen XSS schützen, indem sie diese Eingaben bereinigen, bevor sie in die Seite eingebunden werden. Ein CSP bietet einen ergänzenden Schutz, der die Website auch dann schützen kann, wenn die Bereinigung fehlschlägt.

Wenn die Bereinigung fehlschlägt, gibt es verschiedene Formen, die der injizierte böswillige Code im Dokument annehmen kann, einschließlich:

- Ein {{htmlelement("script")}} Tag, das zu einer böswilligen Quelle verlinkt:

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

- Ein Zeichenkettenargument an eine unsichere API wie [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval):

  ```js
  eval("console.log(`You've been hacked!`)");
  ```

Ein CSP kann für all diese Schutz bieten. Mit einem CSP können Sie:

- die zulässigen Quellen für JavaScript-Dateien und andere Ressourcen definieren und das Laden von `https://evil.example.com` effektiv blockieren
- Inline-Skript-Tags deaktivieren
- nur Skript-Tags erlauben, die das richtige Nonce oder den richtigen Hash haben
- Inline-Event-Handler deaktivieren
- `javascript:` URLs deaktivieren
- gefährliche APIs wie `eval()` deaktivieren

Im nächsten Abschnitt werden wir über die Werkzeuge gehen, die CSP zur Verfügung stellt, um diese Dinge zu tun.

> [!NOTE]
> Das Setzen eines CSP ist kein Ersatz für die Bereinigung von Eingaben. Websites sollten Eingaben bereinigen _und_ ein CSP setzen, um einen tiefgreifenden Schutz gegen XSS zu bieten.

### Fetch-Direktiven

Fetch-Direktiven werden verwendet, um eine bestimmte Kategorie von Ressourcen anzugeben, die ein Dokument laden darf — wie JavaScript, CSS Stylesheets, Bilder, Schriftarten und so weiter.

Es gibt verschiedene Fetch-Direktiven für verschiedene Arten von Ressourcen. Zum Beispiel:

- [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) setzt erlaubte Quellen für JavaScript.
- [`style-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) setzt erlaubte Quellen für CSS Stylesheets.
- [`img-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) setzt erlaubte Quellen für Bilder.

Eine spezielle Fetch-Direktive ist `default-src`, die eine Rückfallrichtlinie für alle Ressourcen setzt, deren Direktiven nicht ausdrücklich aufgelistet sind.

Für die vollständige Liste der Fetch-Direktiven, siehe die [Referenzdokumentation](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directives).

Jede Fetch-Direktive wird entweder als einzelnes Schlüsselwort `'none'` oder eine oder mehrere _Quellenausdrücke_, getrennt durch Leerzeichen, angegeben. Wenn mehr als ein Quellenausdruck aufgelistet ist: Wenn eine der Methoden die Ressource erlaubt, dann ist die Ressource erlaubt.

Zum Beispiel, das folgende CSP setzt zwei Fetch-Direktiven:

- `default-src` erhält den einzelnen Quellenausdruck `'self'`
- `img-src` erhält zwei Quellenausdrücke: `'self'` und `example.com`

![CSP-Diagramm, das Quellenausdrücke zeigt](csp-source-expressions.svg)

Die Auswirkung davon ist, dass:

- Bilder entweder gleicher Herkunft mit dem Dokument sein müssen oder von `example.com` geladen werden müssen
- alle anderen Ressourcen gleicher Herkunft mit dem Dokument sein müssen.

In den nächsten Abschnitten werden wir einige der Möglichkeiten beschreiben, wie Sie Quellenausdrücke verwenden können, um Ressourcennutzungen zu steuern. Beachten Sie, dass, obwohl wir sie separat beschreiben, diese Ausdrücke im Allgemeinen kombiniert werden können: zum Beispiel kann eine einzige Fetch-Direktive gleichzeitig Nonces und Hostnamen enthalten.

#### Blockierung von Ressourcen

Um einen Ressourcentyp vollständig zu blockieren, verwenden Sie das `'none'` Schlüsselwort. Zum Beispiel blockiert die folgende Direktive alle {{htmlelement("object")}} und {{htmlelement("embed")}} Ressourcen:

```http
Content-Security-Policy: object-src 'none'
```

Beachten Sie, dass `'none'` mit keiner anderen Methode in einer bestimmten Direktive kombiniert werden kann: In der Praxis, wenn irgendwelche anderen Quellenausdrücke zusammen mit `'none'` gegeben werden, dann werden sie ignoriert.

#### Nonces

Ein `nonce` ist der empfohlene Ansatz zur Einschränkung des Ladens von {{htmlelement("script")}} und {{htmlelement("style")}} Ressourcen.

Mit einem Nonce generiert der Server für jede HTTP-Antwort einen zufälligen Wert und fügt ihn in eine `script-src` und/oder `style-src` Direktive ein:

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server fügt dann diesen Wert als `nonce` Attributwert zu allen `<script>` und/oder `<style>` Tags hinzu, die sie im Dokument einfügen möchten.

Der Browser vergleicht die beiden Werte und lädt die Ressource nur, wenn sie übereinstimmen. Die Idee ist, dass, selbst wenn ein Angreifer in der Lage ist, etwas JavaScript in die Seite einzufügen, er nicht wissen wird, welches Nonce der Server verwenden wird, sodass der Browser das Skript nicht ausführen wird.

Damit dieser Ansatz funktioniert, muss es unmöglich sein, dass ein Angreifer das Nonce errät.

**In der Praxis bedeutet dies, dass das Nonce für jede HTTP-Antwort unterschiedlich sein muss und nicht vorhersehbar sein darf.**

Dies bedeutet wiederum, dass der Server kein statisches HTML bereitstellen kann, da er jedes Mal ein neues Nonce einfügen muss. Typischerweise würde der Server eine Template-Engine verwenden, um das Nonce einzufügen.

Hier ist ein Codeausschnitt von [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) zur Demonstration:

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

Bei jeder Anfrage generiert der Server ein neues Nonce, fügt es in das CSP und in die {{htmlelement("script")}} Tags im zurückgegebenen Dokument ein. Beachten Sie, dass der Server:

- ein neues Nonce für jede Anfrage generiert
- Nonces sowohl mit externen als auch mit Inline-Skripten verwenden kann
- das gleiche Nonce für alle `<script>` Tags im Dokument verwendet

Es ist wichtig, dass der Server irgendeine Form von Templates verwendet, um Nonces einzufügen und sie nicht einfach in alle `<script>` Tags einzufügen: Andernfalls könnte der Server versehentlich Nonces in Skripte einfügen, die von einem Angreifer injiziert wurden.

Beachten Sie, dass Nonces nur für Elemente verwendet werden können, die ein `nonce` Attribut haben: das bedeutet, nur `<script>` und `<style>` Elemente.

#### Hashes

Fetch-Direktiven können auch einen Hash des Skripts verwenden, um seine Integrität zu gewährleisten. Bei dieser Methode:

1. berechnet der Server einen Hash des Skriptinhalts mit einer {{Glossary("hash_function", "Hash-Funktion")}} (einem der SHA-256, SHA-384 oder SHA-512)
2. erstellt eine {{Glossary("Base64", "Base64")}} Kodierung des Ergebnisses
3. hängt einen Präfix an, das den verwendeten Hash-Algorithmus identifiziert (eines von `sha256-`, `sha384-`, oder `sha512-`).

Dann fügt er das Ergebnis der Direktive hinzu:

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

Wenn der Browser das Dokument erhält, hasht er das Skript, vergleicht das Ergebnis mit dem Wert aus dem Header und lädt das Skript nur, wenn sie übereinstimmen.

Externe Skripte müssen auch das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut haben, damit diese Methode funktioniert.

Hier ist ein Codeausschnitt von Express, um das zu demonstrieren:

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
- Im Gegensatz zum Beispiel mit Nonces können sowohl das CSP als auch der Inhalt statisch sein, da die Hashes gleich bleiben. Dies macht hashbasierte Richtlinien besser geeignet für statische Seiten oder Websites, die auf clientseitiges Rendering setzen.

#### Schema-basierte Richtlinien

Fetch-Direktiven können ein Schema wie `https:` auflisten, um Ressourcen zu erlauben, die mit diesem Schema geliefert werden. Dies ermöglicht es beispielsweise einer Richtlinie, HTTPS für alle Ressourcennutzungen zu verlangen:

```http
Content-Security-Policy: default-src https:
```

#### Standort-basierte Richtlinien

Fetch-Direktiven können Ressourcennutzungen basierend darauf steuern, wo sich die Ressource befindet.

Das Schlüsselwort `'self'` erlaubt Ressourcen, die gleich Herkunft mit dem Dokument selbst sind:

```http
Content-Security-Policy: img-src 'self'
```

Sie können auch einen oder mehrere Hostnamen angeben, möglicherweise einschließlich Platzhalter, und nur Ressourcen, die von diesen Hosts bereitgestellt werden, sind erlaubt. Dies könnte verwendet werden, um beispielsweise Inhalte von einem vertrauenswürdigen CDN bereitstellen zu lassen.

```http
Content-Security-Policy: img-src *.example.org
```

Sie können mehrere Standorte angeben. Die folgende Direktive erlaubt nur Bilder, die gleich Herkunft mit dem aktuellen Dokument sind, oder von einem Subdomain von "example.org" oder von "example.com" bereitgestellt werden:

```http
Content-Security-Policy: img-src 'self' *.example.org  example.com
```

#### Inline-JavaScript

Wenn ein CSP entweder eine `default-src` oder eine `script-src` Direktive enthält, dann darf Inline-JavaScript nicht ausgeführt werden, es sei denn, es werden zusätzliche Maßnahmen ergriffen, um es zu ermöglichen. Dies umfasst:

- JavaScript, das innerhalb eines `<script>` Elements auf der Seite enthalten ist:

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
  <a href="javascript:console.log('Hello from a javascript: URL')"></a>
  ```

Das `unsafe-inline` Schlüsselwort kann verwendet werden, um diese Beschränkung zu überschreiben. Zum Beispiel erfordert die folgende Direktive, dass alle Ressourcen gleicher Herkunft sind, erlaubt jedoch Inline-JavaScript:

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es den Zweck eines CSP weitgehend zunichte macht. Inline-JavaScript ist einer der häufigsten XSS-Vektoren, und eines der grundlegendsten Ziele eines CSP ist es, dessen unkontrollierten Einsatz zu verhindern.

Inline `<script>` Elemente sind erlaubt, wenn sie durch ein Nonce oder einen Hash geschützt sind, wie oben beschrieben.

Wenn eine Direktive Nonce- oder Hashexpressionen enthält, wird das `unsafe-inline` Schlüsselwort von Browsern ignoriert.

#### `eval()` und ähnliche APIs

Wie bei Inline-JavaScript, wenn ein CSP entweder eine `default-src` oder `script-src` Direktive enthält, dann dürfen `eval()` und ähnliche APIs nicht ausgeführt werden. Dies schließt unter anderem folgende APIs ein:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) selbst:

  ```js
  eval('console.log("hello from eval()")');
  ```

- Der {{jsxref("Function/Function()", "Function()")}} Konstruktor:

  ```js
  const sum = new Function("a", "b", "return a + b");
  ```

- Das Zeichenkettenargument für [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setInterval()`](/de/docs/Web/API/Window/setInterval):

  ```js
  setTimeout("console.log('hello from setTimeout')", 1);
  ```

Das `unsafe-eval` Schlüsselwort kann verwendet werden, um dieses Verhalten zu überschreiben, und aus den gleichen Gründen wie bei `unsafe-inline`: **Entwickler sollten `unsafe-eval` vermeiden**. Manchmal kann es schwierig sein, Verwendung von `eval()` zu entfernen: In diesen Situationen kann die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) es sicherer machen, indem sichergestellt wird, dass die Eingabe einer definierten Richtlinie entspricht.

Im Gegensatz zu `unsafe-inline` funktioniert das `unsafe-eval` Schlüsselwort immer noch in einer Direktive, die Nonce- oder Hashexpressionen enthält.

### Strict CSP

Um das Laden von Skripten als Schutzmaßnahme gegen XSS zu kontrollieren, ist es empfohlene Praxis, [Nonce](#nonces)- oder [Hash](#hashes)-basierte Fetch-Direktiven zu verwenden. Dies nennt man ein _strict CSP_. Diese Art von CSP hat zwei Hauptvorteile gegenüber einem ortsabhängigen CSP (gewöhnlich auch als _Whitelist CSP_ bezeichnet):

- Whitelist-CSPs sind schwer richtig zu machen und oft führen Richtlinien unbeabsichtigt unsichere Domains auf die Whitelist und bieten daher keinen effektiven Schutz gegen XSS (siehe [CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)).
- Whitelist-CSPs können sehr groß und schwer zu pflegen sein, insbesondere wenn Skripte verwendet werden, die außerhalb Ihrer Kontrolle liegen. Laut [How I learned to stop worrying and love the Content Security Policy](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/) wird ein Entwickler, der Google Analytics integrieren möchte, gebeten, 187 Google-Domains auf die Whitelist zu setzen.

Ein Nonce-basiertes striktes CSP sieht so aus:

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

In diesem CSP:

- verwenden wir Nonces, um zu kontrollieren, welche JavaScript-Ressourcen geladen werden dürfen
- blockieren wir alle eingebetteten Objekte
- blockieren wir alle Verwendungen des `<base>` Elements, um eine Basis-URI zu setzen.

Ein Hash-basiertes striktes CSP ist dasselbe, außer dass es Hashes anstelle von Nonces verwendet:

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

Nonce-basierte Direktiven sind einfacher zu warten, wenn Sie Antworten, einschließlich des Inhalts selbst, dynamisch generieren können. Andernfalls müssen Sie auf Hash-basierte Direktiven zurückgreifen. Das Problem mit Hash-basierten Direktiven ist, dass Sie den Hash bei jeder Änderung der Skriptinhalte neu berechnen und anwenden müssen.

#### Das Schlüsselwort `strict-dynamic`

Wie oben dargestellt, ist das strikte CSP schwer zu implementieren, wenn Sie Skripte verwenden, die nicht unter Ihrer Kontrolle stehen. Wenn ein Drittanbieter-Skript zusätzliche Skripte lädt oder irgendwelche Inline-Skripte verwendet, dann wird dies fehlschlagen, da das Drittanbieter-Skript den Nonce oder Hash nicht weiterleitet.

Das Schlüsselwort `strict-dynamic` wird bereitgestellt, um bei diesem Problem zu helfen. Es ist ein Schlüsselwort, das in eine Fetch-Direktive aufgenommen werden kann und hat die Wirkung, dass, wenn ein Skript ein Nonce- oder Hash-Attribut hat, dann darf dieses Skript weitere Skripte laden, die selbst keine Nonces oder Hashes haben. Das bedeutet, das Vertrauen, das einem Skript durch einen Nonce oder Hash entgegengebracht wird, wird an Skripte weitergegeben, die das ursprüngliche Skript lädt (und Skripte, die _sie_ laden, und so weiter).

Zum Beispiel betrachten Sie ein Dokument wie dieses:

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

Das "main.js" Skript wird geladen, da sein Hash mit dem Wert im CSP übereinstimmt. Aber sein Versuch, "main2.js" zu laden, wird scheitern.

Wenn wir `'strict-dynamic'` zum CSP hinzufügen, dann wird "main.js" erlaubt, "main2.js" zu laden:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  strict-dynamic
```

Das `strict-dynamic` Schlüsselwort macht es viel einfacher, Nonce- oder Hash-basierte CSPs zu erstellen und zu pflegen, insbesondere wenn eine Website Drittanbieter-Skripte verwendet. Es macht Ihr CSP jedoch weniger sicher, da, wenn die von Ihnen eingeschlossenen Skripte `<script>` Elemente basierend auf potenziellen XSS-Quellen erstellen, das CSP sie nicht schützt.

#### Refaktorierung von Inline-JavaScript und `eval()`

Wir haben oben gesehen, dass Inline-JavaScript standardmäßig in einem CSP nicht erlaubt ist. Mit Nonces oder Hashes kann ein Entwickler Inline-`<script>` Elemente verwenden, aber Sie müssen immer noch den Code refaktorieren, um andere nicht erlaubte Muster zu entfernen, einschließlich Inline-Ereignishandlungen, `javascript:` URLs und Verwendungen von `eval()`. Zum Beispiel sollten Inline-Ereignishandler normalerweise durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ersetzt werden:

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

Die [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) Direktive kann verwendet werden, um zu steuern, welche Dokumente, wenn überhaupt, dieses Dokument in einem verschachtelten Browsing-Kontext wie einem {{htmlelement("iframe")}} einbetten dürfen. Dies ist ein effektiver Schutz gegen Clickjacking-Angriffe, da diese Angriffe davon abhängen, dass die Zielsite in einer vom Angreifer kontrollierten Seite eingebettet wird.

Die Syntax von `frame-ancestors` ist ein Teil der Fetch-Direktivensyntax: Sie können das einzelne Schlüsselwort `'none'` oder einen oder mehrere Quellenausdrücke angeben. Die einzigen Quellenausdrücke, die Sie verwenden können, sind jedoch Schemas, Hostnamen oder das `'self'` Schlüsselwort.

Sofern es nicht erforderlich ist, dass Ihre Site eingebettet werden kann, sollten Sie `frame-ancestors` auf `'none'` setzen:

```http
Content-Security-Policy: frame-ancestors 'none'
```

Diese Direktive ist ein flexiblerer Ersatz für den {{httpheader("X-Frame-Options")}} Header.

## Upgraden unsicherer Anfragen

Webentwickler werden dringend ermutigt, alle ihre Inhalte über HTTPS zu servieren. Im Prozess der Umstellung einer Site auf HTTPS wird manchmal das Hauptdokument über HTTPS serviert, aber seine Ressourcen über HTTP, zum Beispiel mit einem Markup wie diesem:

```html
<script src="http://example.org/my-cat.js"></script>
```

Dies nennt man _mixed content_, und das Vorhandensein unsicherer Ressourcen schwächt den durch HTTPS gebotenen Schutz erheblich. Unter dem [mixed content Algorithmus](/de/docs/Web/Security/Mixed_content), den Browser implementieren, wird, wenn ein Dokument über HTTPS serviert wird, unsicherer Inhalt in "upgradbaren Inhalt" und "blockierbaren Inhalt" kategorisiert. Upgradabler Inhalt wird zu HTTPS hochgestuft, und blockierbarer Inhalt wird blockiert, was potenziell die Seite zerstören kann.

Die ultimative Lösung für mixed content ist, dass Entwickler alle Ressourcen über HTTPS laden. Selbst wenn eine Site tatsächlich in der Lage ist, alle Inhalte über HTTPS bereitzustellen, kann es dennoch sehr schwierig (oder sogar praktisch unmöglich, wenn es sich um archivierte Inhalte handelt) sein, alle von der Site verwendeten URLs zum Laden von Ressourcen von einem Entwickler umschreiben zu lassen.

Die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) Direktive soll dieses Problem lösen. Diese Direktive hat keinen Wert: Um sie zu setzen, fügen Sie einfach den Namen der Direktive hinzu:

```http
Content-Security-Policy: upgrade-insecure-requests
```

Wenn diese Direktive auf einem Dokument gesetzt ist, wird der Browser automatisch alle HTTP-URLs in folgenden Fällen zu HTTPS hochstufen:

- Anfragen zum Laden von Ressourcen (wie Bilder, Skripte oder Schriftarten)
- Navigationsanfragen (wie Linkziele), die gleich Herkunft mit dem Dokument sind
- Navigationsanfragen in verschachtelten Browsing-Kontexten, wie iframes
- Formularübermittlungen

Top-Level Navigationsanfragen, deren Ziel ein anderer Ursprung ist, werden jedoch nicht hochgestuft.

Zum Beispiel, angenommen das Dokument bei `https://example.org` wird mit einem CSP serviert, das die `upgrade-insecure-requests` Direktive enthält, und das Dokument enthält Markup wie dieses:

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

Der Browser wird den ersten Link auf HTTPS hochstufen, jedoch nicht den zweiten, da er zu einem anderen Ursprung navigiert.

Diese Direktive ist kein Ersatz für den {{httpheader("Strict-Transport-Security")}} Header (auch bekannt als HSTS), da sie externe Links zu einer Site nicht hochstuft. Sites sollten diese Direktive und den `Strict-Transport-Security` Header einbeziehen.

## Testen Ihrer Richtlinie

Um den Einsatz zu erleichtern, kann CSP im Report-Only-Modus eingesetzt werden. Die Richtlinie wird nicht durchgesetzt, aber alle Verstöße werden an den im CSP angegebenen Berichtsendpunkt gesendet. Außerdem kann ein Report-Only-Header verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich bereitzustellen.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header verwenden, um Ihre Richtlinie anzugeben, wie folgt:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header als auch ein {{HTTPHeader("Content-Security-Policy")}} Header in derselben Antwort vorhanden sind, werden beide Richtlinien berücksichtigt. Die in den `Content-Security-Policy` Headern angegebene Richtlinie wird durchgesetzt, während die `Content-Security-Policy-Report-Only` Richtlinie Berichte erzeugt, aber nicht durchgesetzt wird.

Beachten Sie, dass im Gegensatz zu einer normalen Content-Security-Policy eine Report-Only-Policy nicht in einem `<meta>` Element bereitgestellt werden kann.

### Verletzungsberichte

Die empfohlene Methode zum Melden von CSP-Verletzungen ist die Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API), indem Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} deklariert und einer von ihnen als CSP-Berichts-Ziel mit der {{CSP("report-to")}} Direktive des `Content-Security-Policy` Headers angegeben wird.

> [!WARNING]
> Sie können auch die CSP {{CSP("report-uri")}} Direktive verwenden, um eine Ziel-URL für CSP-Verletzungsberichte anzugeben. Dies sendet ein leicht anderes JSON-Berichtsformat via `POST` Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`. Dieser Ansatz ist veraltet, aber Sie sollten beides deklarieren, bis {{CSP("report-to")}} in allen Browsern unterstützt wird. Für weitere Informationen zu diesem Ansatz siehe das {{CSP("report-uri")}} Thema.

Ein Server kann Clients darüber informieren, wo Berichte hinzusenden sind, indem der {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header verwendet wird. Dieser Header definiert eine oder mehrere Endpunkt-URLs als kommaseparierte Liste. Zum Beispiel, um einen Berichts-Endpunkt namens `csp-endpoint` zu definieren, der Berichte unter `https://example.com/csp-reports` annimmt, könnte die Serverantwort wie folgt aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die verschiedene Arten von Berichten behandeln, würden Sie sie so angeben:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Sie können dann die {{CSP("report-to")}} Richtlinie des `Content-Security-Policy` Headers verwenden, um anzugeben, dass ein bestimmter definierter Endpunkt für Berichterstattung verwendet werden soll. Zum Beispiel, um CSP-Verletzungsberichte an `https://example.com/csp-reports` für `default-src` zu senden, könnten Sie Antwort-Header senden, die wie folgt aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Bei einer CSP-Verletzung sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt mittels einer HTTP `POST` Operation, mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`. Der Bericht ist eine serialisierte Form des [`Reports`](/de/docs/Web/API/Report) Objekts enthalten eine `type` Eigenschaft mit einem Wert von `"csp-violation"`, und ein `body`, das die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Objekts ist.

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

Sie müssen einen Server einrichten, um Berichte mit dem gegebenen JSON-Format und Inhaltstyp zu empfangen. Der Server, der diese Anfragen bearbeitet, kann die eingehenden Berichte auf eine Weise speichern oder verarbeiten, die Ihren Bedürfnissen am besten entspricht.

## Siehe auch

- [CSP Fehler und Warnungen](/de/docs/Web/HTTP/Guides/CSP/Errors)
- [Cross-Site Scripting mit einem strikten Content Security Policy mindern](https://web.dev/articles/strict-csp) auf web.dev (2024)
- [Content Security Policy: Ein erfolgreicher Kompromiss zwischen Härtung und Minderung](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) auf owasp.org
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
