---
title: Content Security Policy (CSP)
slug: Web/HTTP/Guides/CSP
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

**Content Security Policy** (CSP) ist ein Feature, das dazu beiträgt, das Risiko bestimmter Arten von Sicherheitsbedrohungen zu verhindern oder zu minimieren. Es besteht aus einer Reihe von Anweisungen einer Website an einen Browser, die den Browser anweisen, Einschränkungen für die Dinge zu setzen, die der Code auf der Seite tun darf.

Der Hauptverwendungszweck von CSP ist die Kontrolle darüber, welche Ressourcen, insbesondere JavaScript-Ressourcen, ein Dokument laden darf. Dies wird hauptsächlich als Schutzmaßnahme gegen {{Glossary("cross-site_scripting", "Cross-Site Scripting")}} (XSS) Angriffe verwendet, bei denen ein Angreifer in der Lage ist, schädlichen Code in die Seite des Opfers einzuschleusen.

Ein CSP kann auch andere Zwecke haben, einschließlich des Schutzes vor [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) und der Unterstützung bei der Sicherstellung, dass die Seiten einer Website über HTTPS geladen werden.

In diesem Leitfaden beginnen wir damit, zu beschreiben, wie ein CSP an einen Browser übermittelt wird und wie es auf hoher Ebene aussieht.

Dann beschreiben wir, wie es verwendet werden kann, um [zu kontrollieren, welche Ressourcen geladen werden](#kontrolle_des_ladens_von_ressourcen), um sich gegen XSS zu schützen, und dann andere Anwendungsfälle wie [Clickjacking-Schutz](#clickjacking-schutz) und [Aufrüsten unsicherer Anfragen](#aufrüsten_unsicherer_anfragen). Beachten Sie, dass es keine Abhängigkeit zwischen den verschiedenen Anwendungsfällen gibt: Wenn Sie einen Schutz gegen Clickjacking hinzufügen möchten, aber nicht gegen XSS, können Sie einfach die Anweisungen für diesen Anwendungsfall hinzufügen.

Schließlich beschreiben wir [Strategien zur Bereitstellung eines CSP](#testen_ihrer_richtlinie) und Werkzeuge, die diesen Prozess einfacher machen können.

## CSP-Überblick

Ein CSP sollte dem Browser im {{httpheader("Content-Security-Policy")}}-Antwortheader übermittelt werden. Es sollte bei allen Antworten auf alle Anfragen gesetzt werden, nicht nur beim Hauptdokument.

Sie können es auch mit dem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attribut des {{htmlelement("meta")}}-Elements Ihres Dokuments angeben, und dies ist eine nützliche Option für einige Anwendungsfälle, wie zum Beispiel eine client-seitig gerenderte {{Glossary("SPA", "Single Page App")}}, die nur statische Ressourcen hat, da Sie dann nicht auf Serverinfrastruktur angewiesen sein müssen. Diese Option unterstützt jedoch nicht alle CSP-Funktionen.

Die Richtlinie wird als eine Reihe von _Anweisungen_ angegeben, die durch Semikolons getrennt sind. Jede Anweisung steuert einen anderen Aspekt der Sicherheitsrichtlinie. Jede Anweisung hat einen Namen, gefolgt von einem Leerzeichen, gefolgt von einem Wert. Verschiedene Anweisungen können verschiedene Syntaxen haben.

Betrachten Sie zum Beispiel das folgende CSP:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

Es setzt zwei Anweisungen:

- Die `default-src`-Anweisung ist auf `'self'` gesetzt
- Die `img-src`-Anweisung ist auf `'self' example.com` gesetzt.

![Ein CSP aufgeschlüsselt in seine Anweisungen.](csp-overview.svg)

Die erste Anweisung, `default-src`, weist den Browser an, nur Ressourcen zu laden, die mit dem Dokument gleich-origin sind, es sei denn, andere spezifischere Anweisungen setzen eine andere Richtlinie für andere Ressourcentypen. Die zweite, `img-src`, weist den Browser an, Bilder zu laden, die gleich-origin sind oder von `example.com` bereitgestellt werden.

Im nächsten Abschnitt werden wir die zur Verfügung stehenden Werkzeuge untersuchen, um das Laden von Ressourcen zu kontrollieren, das die Hauptfunktion eines CSP ist.

## Kontrolle des Ladens von Ressourcen

Ein CSP kann verwendet werden, um zu kontrollieren, welche Ressourcen ein Dokument laden darf. Dies wird hauptsächlich zum Schutz gegen Cross-Site Scripting (XSS) Angriffe eingesetzt.

In diesem Abschnitt werden wir zuerst sehen, wie das Kontrollieren des Ressourcenladens helfen kann, sich gegen XSS zu schützen, dann die Werkzeuge, die CSP bietet, um zu kontrollieren, welche Ressourcen geladen werden. Schließlich beschreiben wir eine bestimmte empfohlene Strategie, die als "strikte CSP" bezeichnet wird.

### XSS und Laden von Ressourcen

Ein Cross-Site Scripting (XSS) Angriff ist einer, bei dem ein Angreifer in der Lage ist, seinen Code im Kontext der Zielwebsite auszuführen. Dieser Code kann dann alles tun, was der eigene Code der Website tun könnte, einschließlich, zum Beispiel:

- Zugriff oder Modifizierung des Inhalts der geladenen Seiten der Website
- Zugriff oder Modifizierung von Inhalten in lokalem Speicher
- HTTP-Anfragen mit den Anmeldeinformationen des Benutzers ausführen, wodurch er sich als der Benutzer ausgeben oder auf sensible Daten zugreifen kann

Ein XSS Angriff ist möglich, wenn eine Website einige Eingaben akzeptiert, die vom Angreifer erstellt worden sein könnten (zum Beispiel URL-Parameter oder ein Kommentar zu einem Blog-Beitrag) und diese dann in die Seite einfügt, ohne sie _zu bereinigen_: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausgeführt werden können.

Websites sollten sich gegen XSS schützen, indem sie diese Eingaben bereinigen, bevor sie in die Seite aufgenommen werden. Ein CSP bietet einen ergänzenden Schutz, der die Website schützen kann, selbst wenn die Bereinigung fehlschlägt.

Wenn die Bereinigung fehlschlägt, gibt es verschiedene Arten, wie der eingeschleuste bösartige Code im Dokument aussehen kann, einschließlich:

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

- Ein Zeichenfolgenargument für eine unsichere API wie [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval):

  ```js
  eval("console.log(`You've been hacked!`)");
  ```

Ein CSP kann Schutz gegen all diese bieten. Mit einem CSP können Sie:

- die erlaubten Quellen für JavaScript-Dateien und andere Ressourcen definieren und effektiv das Laden von `https://evil.example.com` blockieren
- Inline-Skripttags deaktivieren
- nur Skripttags zulassen, die das korrekte `nonce` oder `hash` gesetzt haben
- Inline-Ereignishandler deaktivieren
- `javascript:` URLs deaktivieren
- gefährliche APIs wie `eval()` deaktivieren

Im nächsten Abschnitt werden wir die Werkzeuge, die CSP für diese Aufgaben bietet, durchgehen.

> [!NOTE]
> Das Setzen eines CSP ist kein Ersatz für die Bereinigung von Eingaben. Websites sollten Eingaben bereinigen _und_ ein CSP setzen, um einen Tiefenverteidigungsschutz gegen XSS zu bieten.

### Fetch-Richtlinien

Fetch-Richtlinien werden verwendet, um eine bestimmte Kategorie von Ressourcen anzugeben, die ein Dokument laden darf — wie JavaScript, CSS-Stile, Bilder, Schriftarten und so weiter.

Es gibt verschiedene Fetch-Richtlinien für verschiedene Arten von Ressourcen. Zum Beispiel:

- [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) setzt erlaubte Quellen für JavaScript.
- [`style-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) setzt erlaubte Quellen für CSS-Stile.
- [`img-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) setzt erlaubte Quellen für Bilder.

Eine spezielle Fetch-Richtlinie ist `default-src`, die eine Fallback-Richtlinie für alle Ressourcen setzt, deren Richtlinien nicht explizit aufgelistet sind.

Für das komplette Set von Fetch-Richtlinien siehe die [Referenzdokumentation](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directives).

Jede Fetch-Richtlinie wird entweder als einzelnes Schlüsselwort `'none'` oder ein oder mehrere _Quellausdrücke_ angegeben, die durch Leerzeichen getrennt sind. Wenn mehr als ein Quellausdruck aufgeführt ist: Wenn eine der Methoden die Ressource erlaubt, dann ist die Ressource erlaubt.

Zum Beispiel setzt das folgende CSP zwei Fetch-Richtlinien:

- `default-src` wird der einzelne Quellausdruck `'self'` gegeben
- `img-src` erhält zwei Quellausdrücke: `'self'` und `example.com`

![CSP-Diagramm, das Quellausdrücke zeigt](csp-source-expressions.svg)

Die Wirkung davon ist, dass:

- Bilder entweder gleich-origin mit dem Dokument, oder von `example.com` geladen werden müssen
- alle anderen Ressourcen gleich-origin mit dem Dokument sein müssen.

In den nächsten Abschnitten beschreiben wir einige der Möglichkeiten, wie Sie Quellausdrücke verwenden können, um das Laden von Ressourcen zu kontrollieren. Beachten Sie, dass obwohl wir sie separat beschreiben, diese Ausdrücke im Allgemeinen kombiniert werden können: Zum Beispiel kann eine einzelne Fetch-Richtlinie Nonce sowie Hostnamen umfassen.

#### Blockieren von Ressourcen

Um einen Ressourcentyp vollständig zu blockieren, verwenden Sie das Schlüsselwort `'none'`. Zum Beispiel blockiert die folgende Anweisung alle {{htmlelement("object")}} und {{htmlelement("embed")}} Ressourcen:

```http
Content-Security-Policy: object-src 'none'
```

Beachten Sie, dass `'none'` nicht mit einer anderen Methode in einer bestimmten Richtlinie kombiniert werden kann: in der Praxis, wenn andere Quellausdrücke neben `'none'` angegeben werden, werden sie ignoriert.

#### Nonces

Ein `nonce` ist der empfohlene Ansatz zur Einschränkung des Ladens von {{htmlelement("script")}} und {{htmlelement("style")}} Ressourcen.

Mit einem Nonce erzeugt der Server einen zufälligen Wert für jede HTTP-Antwort und fügt sie in eine `script-src`- und/oder eine `style-src`-Richtlinie ein:

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

Der Server fügt dann diesen Wert als Wert des `nonce`-Attributs für alle `<script>`- und/oder `<style>`-Tags hinzu, die sie im Dokument einfügen möchten.

Der Browser vergleicht die beiden Werte und lädt die Ressource nur, wenn sie übereinstimmen. Die Idee ist, dass selbst wenn ein Angreifer etwas JavaScript in die Seite einfügen kann, er nicht wissen wird, welcher Nonce der Server verwenden wird, sodass der Browser sich weigert, das Skript auszuführen.

Damit dieser Ansatz funktioniert, darf es einem Angreifer nicht möglich sein, den Nonce zu erraten.

**In der Praxis bedeutet dies, dass der Nonce für jede HTTP-Antwort unterschiedlich sein muss und nicht vorhersehbar sein darf.**

Das bedeutet wiederum, dass der Server kein statisches HTML bereitstellen kann, da er bei jeder Anfrage einen neuen Nonce einfügen muss. Typischerweise würde der Server eine Templating-Engine verwenden, um den Nonce einzufügen.

Hier ein Beispielcode von [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs), um dies zu veranschaulichen:

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

Bei jeder Anfrage erzeugt der Server einen neuen Nonce, fügt ihn in die CSP und in die {{htmlelement("script")}}-Tags in dem zurückgesandten Dokument ein. Beachten Sie, dass der Server:

- für jede Anfrage einen neuen Nonce erzeugt
- Nonces mit sowohl externen als auch Inline-Skripten verwenden kann
- den gleichen Nonce für alle `<script>`-Tags im Dokument verwendet

Es ist wichtig, dass der Server irgendeine Art von Templating verwendet, um Nonces einzufügen, und sie nicht einfach in alle `<script>`-Tags einfügt: andernfalls könnte der Server versehentlich Nonces in Skripte einfügen, die von einem Angreifer eingeschleust wurden.

Beachten Sie, dass Nonces nur für Elemente verwendet werden können, die ein `nonce`-Attribut haben: das heißt, nur `<script>` und `<style>` Elemente.

#### Hashes

Fetch-Richtlinien können auch einen Hash des Skripts verwenden, um seine Integrität zu gewährleisten. Mit dieser Methode:

1. Berechnet der Server einen Hash des Skriptinhalts mit einer {{Glossary("hash_function", "Hash-Funktion")}} (einer von SHA-256, SHA-384 oder SHA-512)
2. Erstellt eine {{Glossary("Base64", "Base64")}}-Codierung des Ergebnisses
3. Fügt ein Präfix hinzu, das den verwendeten Hash-Algorithmus identifiziert (eines von `sha256-`, `sha384-` oder `sha512-`).

Es fügt dann das Ergebnis in die Richtlinie ein:

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

Wenn der Browser das Dokument empfängt, hasht es das Skript, vergleicht das Ergebnis mit dem Wert aus dem Header und lädt das Skript nur, wenn sie übereinstimmen.

Externe Skripte müssen auch das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut enthalten, damit diese Methode funktioniert.

Hier ein Beispielcode von Express, um das zu veranschaulichen:

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
- Im Gegensatz zum Beispiel zur Verwendung von Nonces können sowohl das CSP als auch der Inhalt statisch sein, da die Hashes gleich bleiben. Dies macht hash-basierte Richtlinien geeigneter für statische Seiten oder Websites, die auf clientseitiges Rendering setzen.

#### Schema-basierte Richtlinien

Fetch-Richtlinien können ein Schema, wie `https:`, auflisten, um Ressourcen zu erlauben, die über dieses Schema bereitgestellt werden. Dies ermöglicht es beispielsweise, das Laden von Ressourcen auf HTTPS zu beschränken:

```http
Content-Security-Policy: default-src https:
```

#### Ortsbasierte Richtlinien

Fetch-Richtlinien können Ressourcenladungen basierend darauf steuern, wo sich die Ressourcen befinden.

Das Schlüsselwort `'self'` erlaubt Ressourcen, die mit dem Dokument selbst gleich-origin sind:

```http
Content-Security-Policy: img-src 'self'
```

Sie können auch einen oder mehrere Hostnamen angeben, möglicherweise einschließlich Platzhaltern, und nur von diesen Hosts bereitgestellte Ressourcen werden erlaubt. Dies könnte verwendet werden, um Inhalte von einem vertrauenswürdigen CDN bereitzustellen.

```http
Content-Security-Policy: img-src *.example.org
```

Sie können mehrere Standorte angeben. Die folgende Richtlinie erlaubt nur Bilder, die gleich-origin mit dem aktuellen Dokument sind oder von einem Subdomain von "example.org" oder von "example.com" bereitgestellt werden:

```http
Content-Security-Policy: img-src 'self' *.example.org  example.com
```

#### Inline-JavaScript

Wenn ein CSP entweder eine `default-src`- oder eine `script-src`-Richtlinie enthält, wird das Ausführen von Inline-JavaScript nicht erlaubt, es sei denn, es werden zusätzliche Maßnahmen ergriffen. Dazu gehört:

- JavaScript, das in einem `<script>`-Element auf der Seite enthalten ist:

  ```html
  <script>
    console.log("Hello from an inline script");
  </script>
  ```

- JavaScript in einer Inline-Ereignishandlereigenschaft:

  ```html
  <img src="x" onerror="console.log('Hello from an inline event handler')" />
  ```

- JavaScript in einer `javascript:` URL:

  ```html
  <a href="javascript:console.log('Hello from a javascript: URL')">Click me</a>
  ```

Das `unsafe-inline`-Schlüsselwort kann verwendet werden, um diese Einschränkung außer Kraft zu setzen. Zum Beispiel erlaubt die folgende Richtlinie alle Ressourcen gleichen Ursprungs, erlaubt aber Inline-JavaScript:

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> Entwickler sollten `'unsafe-inline'` vermeiden, da es einen Großteil des Zwecks eines CSP zunichtemacht. Inline-JavaScript ist einer der häufigsten XSS-Vektoren, und eines der grundlegendsten Ziele eines CSP ist es, seine unkontrollierte Verwendung zu verhindern.

Inline `<script>` Elemente sind erlaubt, wenn sie durch einen Nonce oder einen Hash geschützt sind, wie oben beschrieben.

Wenn eine Direktive Nonce- oder Hash-Ausdrücke enthält, wird das `unsafe-inline`-Schlüsselwort von Browsern ignoriert.

#### `eval()` und ähnliche APIs

Wie Inline-JavaScript, wird das Ausführen von `eval()` und ähnlichen APIs nicht erlaubt, wenn ein CSP entweder eine `default-src`- oder eine `script-src`-Richtlinie enthält. Dazu gehören unter anderem:

- `eval()` selbst:

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

Das `unsafe-eval`-Schlüsselwort kann verwendet werden, um dieses Verhalten außer Kraft zu setzen, und aus den gleichen Gründen wie bei `unsafe-inline`: **Entwickler sollten `unsafe-eval` vermeiden**.

Manchmal kann es schwierig sein, die Nutzung von `eval()` und anderen Methoden zu entfernen: In diesen Situationen kann die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) es sicherer machen, indem sie sicherstellt, dass die Eingabe eine definierte Richtlinie erfüllt.
Das `trusted-types-eval`-Schlüsselwort sollte verwendet werden, um das Verhalten in diesem Fall zu überschreiben.
Im Gegensatz zu `unsafe-inline` überschreibt es nur das Verhalten in Browsern, wenn Trusted Types unterstützt und aktiviert sind; das stellt sicher, dass die Methoden in Browsern blockiert bleiben, die Trusted Types nicht unterstützen.

Im Gegensatz zu `unsafe-inline` funktioniert das `unsafe-eval`-Schlüsselwort immer noch in einer Anweisung, die Nonce- oder Hash-Ausdrücke enthält.

### Strikte CSP

Um das Laden von Skripten als Schutzmaßnahme gegen XSS zu kontrollieren, wird empfohlen, [nonce-](#nonces) oder [hash-](#hashes) basierte Fetch-Richtlinien zu verwenden. Dies wird als _strikte CSP_ bezeichnet. Diese Art von CSP hat zwei Hauptvorteile gegenüber einer standortbasierten CSP (üblicherweise als _Allowlist-CSP_ bezeichnet):

- Allowlist-CSPs sind schwer richtig umzusetzen und oft erlauben Richtlinien unbeabsichtigt unsichere Domains und bieten daher keinen effektiven Schutz gegen XSS (siehe [CSP Is Dead, Long Live CSP! On the Insecurity of Whitelists and the Future of Content Security Policy](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)).
- Allowlist-CSPs können sehr groß und schwer zu warten sein, insbesondere wenn skripte verwendet werden, die außerhalb Ihrer Kontrolle liegen. Laut [How I learned to stop worrying and love the Content Security Policy](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/), wird einem Entwickler zum Integrieren von Google Analytics geraten, 187 Google-Domains zur Allowlist hinzuzufügen.

Eine nonce-basierte strikte CSP sieht so aus:

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

In diesem CSP:

- verwenden wir Nonces, um zu kontrollieren, welche JavaScript-Ressourcen geladen werden dürfen
- blockieren alle Einbettungen von Objekten
- blockieren alle Verwendungen des `<base>`-Elements, um einen Basis-URI festzulegen.

Eine hash-basierte strikte CSP ist dieselbe, verwendet jedoch Hashes anstelle von Nonces:

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

Nonce-basierte Richtlinien sind leichter zu pflegen, wenn Sie Antworten dynamisch generieren können, einschließlich des Inhalts selbst. Andernfalls müssen Sie hash-basierte Richtlinien verwenden. Das Problem bei hash-basierten Richtlinien ist, dass Sie den Hash neu berechnen und erneut anwenden müssen, wenn eine Änderung am Skriptinhalt vorgenommen wird.

#### Das `strict-dynamic` Schlüsselwort

Wie oben dargestellt, ist die strikte CSP schwer umzusetzen, wenn Sie Skripte verwenden, die nicht unter Ihrer Kontrolle stehen. Wenn ein Drittskript zusätzliche Skripte lädt oder irgendwelche Inline-Skripte verwendet, schlägt dies fehl, da das Drittskript den Nonce oder Hash nicht weitergeben wird.

Das `strict-dynamic` Schlüsselwort wird bereitgestellt, um dieses Problem zu lösen. Es handelt sich um ein Schlüsselwort, das in einer Fetch-Richtlinie enthalten sein kann, und es hat die Wirkung, dass, wenn ein Skript einen Nonce oder einen Hash angehängt hat, dann darf dieses Skript weitere Skripte laden, die selbst keine Nonces oder Hashes haben. Das heißt, das Vertrauen, das in ein Skript durch einen Nonce oder Hash gesetzt wird, wird an Skripte weitergegeben, die das ursprüngliche Skript lädt (und Skripte, die _sie_ laden und so weiter).

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

Es enthält ein Skript "main.js", das erstellt und ein weiteres Skript "main2.js" hinzufügt:

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

Das Skript "main.js" wird geladen, weil sein Hash mit dem Wert in der CSP übereinstimmt. Aber sein Versuch, "main2.js" zu laden, wird fehlschlagen.

Wenn wir `'strict-dynamic'` in die CSP aufnehmen, darf "main.js" "main2.js" laden:

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  'strict-dynamic'
```

Das `'strict-dynamic'` Schlüsselwort erleichtert es erheblich, nonce- oder hash-basierte CSPs zu erstellen und zu pflegen, besonders wenn eine Website Drittskripte verwendet. Es macht Ihre CSP jedoch weniger sicher, da wenn die Skripte, die Sie einfügen, `<script>`-Elemente basierend auf potenziellen XSS-Quellen erstellen, die CSP sie nicht schützt.

#### Refaktorieren von Inline-JavaScript und `eval()`

Wie oben gesehen, wird Inline-JavaScript standardmäßig in einem CSP nicht erlaubt. Mit Nonces oder Hashes kann ein Entwickler Inline-`<script>`-Tags verwenden, aber Sie müssen immer noch Code refaktorieren, um andere nicht erlaubte Muster zu entfernen, einschließlich Inline-Ereignishandler, `javascript:` URLs und die Verwendung von `eval()`. Beispielsweise sollten Inline-Ereignishandler in der Regel durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ersetzt werden:

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

Die [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) Richtlinie kann verwendet werden, um zu steuern, welche Dokumente, falls vorhanden, erlaubt sind, dieses Dokument in einem eingebetteten Browsing-Kontext wie einem {{htmlelement("iframe")}} einzubetten. Dies ist ein effektiver Schutz gegen Clickjacking-Angriffe, da diese Angriffe davon abhängen, die Zielseite in einer vom Angreifer kontrollierten Seite einzubetten.

Die Syntax von `frame-ancestors` ist eine Teilmenge der Fetch-Richtlinien-Syntax: Sie können den einzelnen Schlüsselwortwert `'none'` oder ein oder mehrere Quellausdrücke angeben. Die einzigen Quellausdrücke, die Sie verwenden können, sind jedoch Schemas, Hostnamen oder der `'self'` Schlüsselwortwert.

Es sei denn, Sie benötigen Ihre Website, um einbettbar zu sein, sollten Sie `frame-ancestors` auf `'none'` setzen:

```http
Content-Security-Policy: frame-ancestors 'none'
```

Diese Richtlinie ist ein flexibler Ersatz für den {{httpheader("X-Frame-Options")}}-Header.

## Aufrüsten unsicherer Anfragen

Webentwickler werden stark ermutigt, ihren gesamten Inhalt über HTTPS bereitzustellen. Im Prozess der Umstellung einer Website auf HTTPS stellt eine Site manchmal das Hauptdokument über HTTPS bereit, stellt jedoch ihre Ressourcen über HTTP bereit, beispielsweise unter Verwendung von Markup wie diesem:

```html
<script src="http://example.org/my-cat.js"></script>
```

Dies wird als _gemischter Inhalt_ bezeichnet, und das Vorhandensein unsicherer Ressourcen schwächt den durch HTTPS gebotenen Schutz erheblich. Gemäß dem [Algorithmus für gemischte Inhalte](/de/docs/Web/Security/Mixed_content), den Browser implementieren, werden, wenn ein Dokument über HTTPS bereitgestellt wird, unsichere Ressourcen in "aufrüstbare Inhalte" und "blockierbare Inhalte" kategorisiert. Aufrüstbare Inhalte werden auf HTTPS aufgerüstet, und blockierbare Inhalte werden blockiert, was die Seite möglicherweise zerstört.

Die endgültige Lösung für gemischte Inhalte besteht darin, dass Entwickler alle Ressourcen über HTTPS laden. Selbst wenn eine Site tatsächlich in der Lage ist, allen Inhalt über HTTPS bereitzustellen, kann es jedoch sehr schwierig (oder sogar praktisch unmöglich, wenn archivierter Inhalt betroffen ist) für einen Entwickler sein, alle von der Site verwendeten URLs zum Laden von Ressourcen umzuschreiben.

Die [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-P-Clienolicy/upgrade-insecure-requests) Richtlinie ist dazu gedacht, dieses Problem zu lösen. Diese Richtlinie hat keinen Wert: Um sie zu setzen, fügen Sie einfach den Richtliniennamen ein:

```http
Content-Security-Policy: upgrade-insecure-requests
```

Wenn diese Richtlinie auf einem Dokument festgelegt ist, wird der Browser alle HTTP URLS in den folgenden Fällen automatisch auf HTTPS aktualisieren:

- Anfragen zum Laden von Ressourcen (wie Bilder, Skripte oder Schriftarten)
- Navigationsanfragen (wie Linkziele), die gleich-origin mit dem Dokument sind
- Navigationsanfragen in eingebetteten Browsing-Kontexten, wie iframes
- Formularübermittlungen

Top-Level-Navigationsanfragen, die ein anderes Ursprungsziel haben, werden jedoch nicht aktualisiert.

Angenommen, das Dokument unter `https://example.org` wird mit einem CSP mit der `upgrade-insecure-requests`-Richtlinie bereitgestellt, und das Dokument enthält Markup wie dieses:

```html
<script src="http://example.org/my-cat.js"></script>
<script src="http://not-example.org/another-cat.js"></script>
```

Der Browser wird beide dieser Anfragen automatisch auf HTTPS aktualisieren.

Angenommen, das Dokument enthält ebenfalls dies:

```html
<a href="http://example.org/more-cats">See some more cats!</a>
<a href="http://not-example.org/even-more-cats">More cats, on another site!</a>
```

Der Browser wird den ersten Link auf HTTPS aktualisieren, aber nicht den zweiten, da er zu einem anderen Ursprung navigiert.

Diese Richtlinie ist kein Ersatz für den {{httpheader("Strict-Transport-Security")}}-Header (auch bekannt als HSTS), da er externe Links zu einer Site nicht aktualisiert. Sites sollten sowohl diese Richtlinie als auch den `Strict-Transport-Security`-Header enthalten.

## Testen Ihrer Richtlinie

Um die Bereitstellung zu erleichtern, kann CSP im Report-Only Modus bereitgestellt werden.
Die Richtlinie wird nicht durchgesetzt, aber jegliche Verstöße werden an den Berichtsendpunkt gesendet, der in der Richtlinie festgelegt ist. Zusätzlich kann ein Report-Only-Header verwendet werden, um eine zukünftige Überarbeitung einer Richtlinie zu testen, ohne sie tatsächlich bereitzustellen.

Sie können den {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP-Header verwenden, um Ihre Richtlinie zu spezifizieren, so:

```http
Content-Security-Policy-Report-Only: policy
```

Wenn sowohl ein {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header als auch ein {{HTTPHeader("Content-Security-Policy")}} Header in derselben Antwort vorhanden sind, werden beide Richtlinien gewürdigt.
Die Richtlinie, die in `Content-Security-Policy` Headern angegeben ist, wird durchgesetzt, während die `Content-Security-Policy-Report-Only` Richtlinie Berichte generiert, aber nicht durchgesetzt wird.

Beachten Sie, dass im Gegensatz zu einer normalen Inhalts-Sicherheitsrichtlinie eine nur für Berichte bestimmte Richtlinie nicht in einem `<meta>`-Element angegeben werden kann.

### Verletzungsberichterstattung

Die empfohlene Methode zur Berichterstattung von CSP-Verletzungen besteht darin, die [Reporting API](/de/docs/Web/API/Reporting_API) zu verwenden, Endpunkte in {{HTTPHeader("Reporting-Endpoints")}} anzugeben und eines von ihnen als CSP-Berichterstattungsziel mit der `Content-Security-Policy`-Headers {{CSP("report-to")}}-Anweisung festzulegen.

> [!WARNING]
> Sie können auch die CSP {{CSP("report-uri")}}-Anweisung verwenden, um eine Ziel-URL für CSP-Verletzungsberichte anzugeben.
> Dies sendet ein leicht unterschiedliches JSON-Berichtsformat über eine `POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report`.
> Dieser Ansatz wird nicht mehr empfohlen, aber Sie sollten beide deklarieren, bis {{CSP("report-to")}} in allen Browsern unterstützt wird.
> Weitere Informationen zu diesem Ansatz finden Sie im {{CSP("report-uri")}}-Thema.

Ein Server kann Clients darüber informieren, wohin Berichte gesendet werden sollen, indem er den {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header verwendet.
Dieser Header definiert eine oder mehrere Endpunkt-URLs als kommagetrennte Liste.
Zum Beispiel, um einen Berichterstattungsendpunkt mit dem Namen `csp-endpoint` zu definieren, der Berichte unter `https://example.com/csp-reports` akzeptiert, könnte der Antwortheader des Servers so aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Wenn Sie mehrere Endpunkte haben möchten, die verschiedene Arten von Berichten bearbeiten, sollten Sie sie so angeben:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

Sie können dann die {{HTTPHeader("Content-Security-Policy")}}-Headers {{CSP("report-to")}}-Anweisung verwenden, um anzugeben, dass ein bestimmter definierter Endpunkt für Berichte verwendet werden sollte.
Zum Beispiel, um CSP-Verletzungsberichte an `https://example.com/csp-reports` für den `default-src` zu senden, könnten Sie Antwortheader senden, die ungefähr so aussehen:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

Wenn eine CSP-Verletzung auftritt, sendet der Browser den Bericht als JSON-Objekt an den angegebenen Endpunkt über eine HTTP `POST`-Operation, mit einem {{HTTPHeader("Content-Type")}} von `application/reports+json`.
Der Bericht ist eine serialisierte Form des [`Report`](/de/docs/Web/API/Report)-Objekts, das eine `type`-Eigenschaft mit einem Wert von `"csp-violation"` und eine `body`, die die serialisierte Form eines [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Objekts ist, enthält.

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

Sie müssen einen Server einrichten, der Berichte mit dem gegebenen JSON-Format und Inhalts-Typ empfängt.
Der Server, der diese Anfragen verarbeitet, kann dann die eingehenden Berichte in einer Weise speichern oder verarbeiten, die am besten zu Ihren Bedürfnissen passt.

## Siehe auch

- [CSP-Fehler und Warnungen](/de/docs/Web/HTTP/Guides/CSP/Errors)
- [Mitigieren von Cross-Site Scripting mit einer strikten Content Security Policy](https://web.dev/articles/strict-csp) auf web.dev (2024)
- [Content Security Policy: Ein erfolgreicher Mischmasch zwischen Härtung und Mängelbeseitigung](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) auf owasp.org
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
