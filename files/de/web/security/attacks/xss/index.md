---
title: Cross-site scripting (XSS)
slug: Web/Security/Attacks/XSS
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Ein Cross-Site-Scripting (XSS) Angriff ist eine Angriffsart, bei der ein Angreifer es schafft, eine Zielseite dazu zu bringen, bösartigen Code auszuführen, als ob er Teil der Website wäre.

## Übersicht

Ein Webbrowser lädt Code von vielen verschiedenen Websites herunter und führt ihn auf dem Computer des Benutzers aus. Einige dieser Websites sind sehr vertrauenswürdig, und der Benutzer nutzt sie möglicherweise für sensible Vorgänge, wie finanzielle Transaktionen oder medizinische Beratung. Bei anderen, wie zum Beispiel einer Casual-Gaming-Seite, hat der Benutzer möglicherweise keine solche Vertrauensbeziehung. Das Fundament des Sicherheitsmodells des Browsers besteht darin, dass diese Seiten voneinander getrennt bleiben sollen, sodass Code von einer Seite nicht auf Objekte oder {{Glossary("credential", "Anmeldeinformationen")}} auf einer anderen Seite zugreifen kann. Dies wird die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) genannt.

![Diagramm von 2 Seiten im Browser, in getrennten Welten](same-origin.svg)

Bei einem erfolgreichen XSS-Angriff kann der Angreifer die Same-Origin-Policy umgehen, indem er die Zielseite dazu bringt, bösartigen Code in ihrem eigenen Kontext auszuführen, als ob er vom gleichen Ursprung käme. Der Code kann dann alles tun, was der eigene Code der Seite tun kann, einschließlich beispielsweise:

- Zugriff auf oder Änderung des gesamten Inhalts der geladenen Seiten der Seite und jeglichen Inhalts im lokalen Speicher
- HTTP-Anfragen mit den Anmeldeinformationen des Benutzers ausführen, wodurch sie den Benutzer imitieren oder auf sensible Daten zugreifen können

![Diagramm von Angreifercode, der auf der Zielwebsite ausgeführt wird](xss.svg)

Alle XSS-Angriffe hängen davon ab, dass eine Website zwei Dinge tut:

1. Eingaben akzeptiert, die von einem Angreifer manipuliert worden sein könnten
2. Diese Eingaben in eine Seite einfügt, ohne sie zu _sanitisieren_: also ohne sicherzustellen, dass sie nicht als JavaScript ausführbar sind.

## Zwei XSS-Beispiele

In diesem Abschnitt gehen wir über zwei Beispielseiten hinweg, die anfällig für XSS-Angriffe sind.

### Code-Injektion im Browser

In diesem Beispiel nehmen wir an, dass die Website der Bank des Benutzers `my-bank.example.com` lautet. Der Benutzer ist in der Regel dort angemeldet, und Code auf der Website kann auf die Kontodetails des Benutzers zugreifen und Transaktionen durchführen. Die Website möchte eine Willkommensnachricht anzeigen, die für den aktuellen Benutzer personalisiert ist. Sie zeigt das Willkommen in einem {{htmlelement("Heading_Elements", "heading")}}-Element an:

```html
<h1 id="welcome"></h1>
```

Die Seite erwartet, den Namen des aktuellen Benutzers in einem [URL-Parameter](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#parameters) zu finden. Sie extrahiert den Parameterwert und verwendet diesen Wert, um eine personalisierte Begrüßungsnachricht zu erstellen:

```js
const params = new URLSearchParams(window.location.search);
const user = params.get("user");
const welcome = document.querySelector("#welcome");

welcome.innerHTML = `Welcome back, ${user}!`;
```

Angenommen, diese Seite wird von `https://my-bank.example.com/welcome` bereitgestellt. Um die Schwachstelle auszunutzen, sendet ein Angreifer dem Benutzer einen Link wie diesen:

```html
<a
  href="https://my-bank.example.com/welcome?user=<img src=x onerror=alert('hello!')>">
  Get a free kitten!</a
>
```

Wenn der Benutzer auf den Link klickt:

1. Der Browser lädt die Seite.
2. Die Seite extrahiert den URL-Parameter mit dem Namen `user`, dessen Wert `<img src=x onerror=alert("hello!")>` ist.
3. Die Seite weist dann diesen Wert der `innerHTML`-Eigenschaft des `welcome`-Elements zu, wodurch ein neues {{htmlelement("img")}}-Element erstellt wird, das einen `src`-Attributwert von `x` hat.
4. Da der `src`-Wert einen Fehler erzeugt, wird die `onerror` [Event-Handler-Eigenschaft](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_%e2%80%94_dont_use_these) ausgeführt, und der Angreifer kann seinen Code auf der Seite ausführen.

In diesem Fall zeigt der Code nur eine Warnmeldung an, aber auf einer echten Banking-Website könnte der Angreifercode alles tun, was der eigene Frontend-Code der Bank könnte.

### Code-Injektion auf dem Server

In diesem Beispiel betrachten wir eine Website mit einer Suchfunktion. Das HTML der Suchseite könnte so aussehen:

```html
<h1>Search</h1>

<form action="/results">
  <label for="mySearch">Search for an item:</label>
  <input id="mySearch" type="search" name="search" />
  <input type="submit" />
</form>
```

Wenn der Benutzer einen Suchbegriff eingibt und auf "Submit" klickt, führt der Browser eine GET-Anfrage an "/results" aus und übergibt den Suchbegriff als URL-Parameter, etwa so:

```plain
https://example.org/results?search=bananas
```

Der Server möchte eine Liste der Suchergebnisse anzeigen, mit einem Titel, der angibt, nach was der Benutzer gesucht hat. Er extrahiert den Suchbegriff aus dem URL-Parameter. So könnte dies in [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) aussehen:

```js
app.get("/results", (req, res) => {
  const searchQuery = req.query.search;
  const results = getResults(searchQuery); // Implementation not shown
  res.send(`
   <h1>You searched for ${searchQuery}</h1>
   <p>Here are the results: ${results}</p>`);
});
```

Um diese Schwachstelle auszunutzen, sendet ein Angreifer dem Benutzer einen Link wie diesen:

```html
<a href="http://example.org/results?search=<img src=x onerror=alert('hello')">
  Get a free kitten!</a
>
```

Wenn der Benutzer auf den Link klickt:

1. Der Browser sendet eine GET-Anfrage an den Server. Der URL-Parameter der Anfrage enthält den bösartigen Code.
2. Der Server extrahiert den URL-Parameterwert und bettet ihn in die Seite ein.
3. Der Server gibt die Seite an den Browser zurück, der sie dann ausführt.

## Anatomie eines XSS-Angriffs

Wie alle XSS-Angriffe sind auch diese beiden Beispiele möglich, weil die Website:

1. Eingaben verwendet, die von einem Angreifer manipuliert worden sein könnten
2. Die Eingabe einfügt, ohne sie zu sanitisieren.

Beide Beispiele verwenden den gleichen Vektor für die bösartige Eingabe: den URL-Parameter. Es gibt jedoch auch andere Vektoren, die Angreifer nutzen können.

Betrachten Sie zum Beispiel ein Blog mit Kommentaren. In einem solchen Fall erlaubt die Website:

1. Jedem, Kommentare über ein {{htmlelement("form")}}-Element einzureichen
2. Die Speicherung der Kommentare in einer Datenbank
3. Die Einbindung der Kommentare in Seiten, die die Website anderen Nutzern zur Verfügung stellt.

Wenn die Kommentare nicht sanitiert sind, sind sie potenzielle Vektoren für XSS. Diese Art von Angriff wird manchmal als _gespeichertes_ oder _persistentes_ XSS bezeichnet und ist besonders schwerwiegend, da der infizierte Inhalt an alle Benutzer, die die Seite aufrufen, jedes Mal ausgeliefert wird, wenn sie darauf zugreifen.

### Client- und Server-XSS

Ein wesentlicher Unterschied zwischen den beiden Beispielen ist, dass der bösartige Code in unterschiedlichen Teilen des Codes der Website injiziert wird, was die Architektur der jeweiligen Website widerspiegelt.

Eine Website, die clientseitiges Rendering verwendet, wie eine {{Glossary("SPA", "Single-Page-App")}}, ändert Seiten im Browser mit Web-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement), entweder direkt oder indirekt über ein Framework wie React. In diesem Prozess tritt XSS-Injektion auf. Das sehen wir im ersten Beispiel: der bösartige Code wird im Browser injiziert, indem ein Skript, das auf der Seite läuft, den URL-Parameterwert der [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft zuweist, die ihren Wert als HTML-Code interpretiert.

Eine Website, die serverseitiges Rendering verwendet, baut Seiten auf dem Server mit einem Framework wie Django oder Express auf, meist durch das Einfügen von Werten in Seitentemplates. XSS-Injektion, wenn sie passiert, geschieht auf dem Server während des Templating-Prozesses. Das sehen wir im zweiten Beispiel: der Code wird auf dem Server injiziert, indem der Express-Code den URL-Parameterwert in das Dokument einfügt, das er zurückgibt. Der XSS-Angriffscode wird dann ausgeführt, wenn der Browser die Seite auswertet.

In beiden Fällen ist das allgemeine Vorgehen zur Verteidigung dasselbe, und wir werden dies im nächsten Abschnitt detailliert erläutern. Die spezifischen Werkzeuge und APIs, die Sie verwenden werden, unterscheiden sich jedoch.

## Verteidigungen gegen XSS

Wenn Sie externe Eingaben in die Seiten Ihrer Website einfügen müssen, gibt es zwei Hauptverteidigungsmechanismen gegen XSS:

1. Verwenden Sie _Ausgabe-Codierung_ und _Sanitization_, um zu verhindern, dass die Eingaben ausführbar werden. Wenn Sie Inhalte im Browser rendern, können Sie die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) verwenden, um sicherzustellen, dass die Eingaben durch eine Sanitization-Funktion geleitet werden, bevor sie in die Seite aufgenommen werden.
2. Verwenden Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), um dem Browser mitzuteilen, welche JavaScript- oder CSS-Ressourcen es ausführen darf. Dies ist eine Backup-Verteidigung: Wenn die erste Verteidigung fehlschlägt und ausführbarer Input in eine Seite gelangt, sollte eine ordnungsgemäß konfigurierte CSP verhindern, dass der Browser ihn ausführt.

### Ausgabe-Codierung

_Ausgabe-Codierung_ ist der Prozess, bei dem Zeichen in der Eingabestring, die möglicherweise gefährlich sind, maskiert werden, sodass sie als Text behandelt werden, anstatt als Teil einer Sprache wie HTML.

Dies ist die angemessene Wahl, wenn Sie Eingaben als Text behandeln möchten, beispielsweise weil Ihre Website Templates verwendet, die Eingaben in Inhalte interpolieren. Zum Beispiel, im folgenden [Django-Template](https://docs.djangoproject.com/en/5.1/ref/templates/language/)-Auszug:

```django
<p>You searched for \{{ search_term }}.</p>
```

Die meisten modernen Templating-Engines führen die Ausgabe-Codierung automatisch aus. Zum Beispiel führt die Templating-Engine von Django die folgenden Umwandlungen durch:

- `<` wird in `&lt;` umgewandelt

- `>` wird in `&gt;` umgewandelt

- `'` wird in `&#x27;` umgewandelt

- `"` wird in `&quot;` umgewandelt

- `&` wird in `&amp;` umgewandelt

Das bedeutet, dass wenn Sie `<img src=x onerror=alert('XSS!')>` in das oben genannte Django-Template einfügen, es in `&lt;img src=x onerror=alert(&#x27;XSS!&#x27;)&gt;` umgewandelt wird, was als folgender Text angezeigt wird:

> Sie haben nach &lt;img src=x onerror=alert('XSS!')&gt; gesucht.

Ähnlich, wenn Sie clientseitiges Rendering mit React durchführen, werden Werte in JSX automatisch kodiert. Betrachten Sie beispielsweise eine JSX-Komponente wie diese:

```jsx
import React from "react";

export function App(props) {
  return <div>Hello, {props.name}!</div>;
}
```

Wenn wir `<img src=x onerror=alert('XSS!')>` in `props.name` übergeben, wird es gerendert als:

> Hallo, &lt;img src=x onerror=alert('XSS!')&gt;!

Einer der wichtigsten Teile zur Verhinderung von XSS-Angriffen ist die Verwendung einer anerkannten Templating-Engine, die eine robuste Ausgabe-Codierung durchführt, und die Dokumentation zu lesen, um die Besonderheiten der angebotenen Schutzmaßnahmen zu verstehen.

#### Kontext in Dokumenten

Auch wenn Sie eine Templating-Engine verwenden, die HTML automatisch kodiert, müssen Sie sich darüber im Klaren sein, wo im Dokument Sie untrusted content einfügen. Nehmen wir beispielsweise ein Django-Template wie dieses:

```django
<div>\{{ my_input }}</div>
```

In diesem Kontext befindet sich die Eingabe zwischen `<div>`-Tags, sodass der Browser sie als HTML auswertet. Sie müssen also gegen den Fall gewappnet sein, dass `my_input` HTML ist, das ausführbaren Code definiert, wie `<img src=x onerror="alert('XSS')">`. Die in Django integrierte Ausgabe-Codierung verhindert diesen Angriff, indem sie Zeichen wie `<` und `>` als HTML-Entities `&lt;` und `&gt;` kodiert.

Nehmen wir jedoch an, das Template sieht so aus:

```django
<div \{{ my_input }}></div>
```

In diesem Kontext behandelt der Browser die `my_input`-Variable als HTML-Attribut. Wenn `my_input` `onmouseover="alert('XSS')"` ist, verhindert die von Django bereitgestellte Ausgabe-Codierung den Angriff nicht.

Der Browser verwendet unterschiedliche Regeln, um verschiedene Teile einer Webseite zu verarbeiten — HTML-Elemente und deren Inhalt, HTML-Attribute, Inline-Stile, Inline-Skripte. Die Art der Kodierung, die vorgenommen werden muss, ist unterschiedlich, abhängig vom Kontext, in dem die Eingabe interpoliert wird.

Was in einem Kontext sicher ist, kann in einem anderen unsicher sein, und es ist notwendig, den Kontext zu verstehen, in dem Sie untrusted content einfügen, und alle erforderlichen speziellen Handhabungen zu implementieren, die dies erfordert.

- **HTML-Kontexte**: Eingaben, die zwischen den Tags der meisten HTML-Elemente (außer {{htmlelement("style")}} oder {{htmlelement("script")}}) eingefügt werden, werden als HTML interpretiert. Die von Template-Engines durchgeführte Kodierung ist hauptsächlich auf diesen Kontext ausgerichtet.
- **HTML-Attributkontexte**: Das Einfügen von Eingaben als HTML-Attributwerte ist manchmal sicher und manchmal nicht, abhängig vom Attribut. Insbesondere Event-Handler-Attribute wie `onblur` sind unsicher, ebenso wie das [`src`](/de/docs/Web/HTML/Element/iframe#src)-Attribut des {{htmlelement("iframe")}}-Elements.

  Es ist auch wichtig, Platzhalter für eingefügte Attributwerte zu zitieren, oder ein Angreifer könnte in der Lage sein, ein weiteres unsicheres Attribut in den bereitgestellten Wert einzufügen. Beispielsweise Zitiert diese Vorlage keinen eingefügten Wert:

  ```django example-bad
  <div class=\{{ my_class }}>...</div>
  ```

  Ein Angreifer könnte dies ausnutzen, um ein Event-Handler-Attribut zu injizieren, indem er eine Eingabe wie `some_id onmouseover="alert('XSS!')"` verwendet. Um den Angriff zu verhindern, zitieren Sie den Platzhalter:

  ```django example-good
    <div class="\{{ my_class }}">...</div>
  ```

- **JavaScript- und CSS-Kontexte**: Das Einfügen von Eingaben in {{htmlelement("script")}}- oder {{htmlelement("style")}}-Tags ist fast immer unsicher.

### Sanitization

Templating-Engines erlauben es den Entwicklern in der Regel, die Ausgabe-Codierung zu deaktivieren. Dies ist notwendig, wenn Entwickler untrusted content als HTML und nicht als Text einfügen möchten. Zum Beispiel deaktiviert der [`safe`](https://docs.djangoproject.com/en/5.0/ref/templates/language/#how-to-turn-it-off)-Filter in Django die Ausgabe-Codierung, und in React hat [`dangerouslySetInnerHTML`](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html) denselben Effekt.

In diesem Fall liegt es in der Verantwortung des Entwicklers, sicherzustellen, dass der Inhalt sicher ist, indem er ihn sanitisiert.

_Sanitization_ ist der Prozess, bei dem unsichere Funktionen aus einem HTML-String entfernt werden: zum Beispiel {{htmlelement("script")}}-Tags oder Inline-Event-Handler. Da Sanitization, ebenso wie Ausgabe-Codierung, schwierig richtig zu machen ist, wird empfohlen, dafür eine anerkanntes Drittanbieter-Bibliothek zu verwenden. [DOMPurify](https://github.com/cure53/DOMPurify) wird von vielen Experten einschließlich [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#html-sanitization) empfohlen.

Betrachten Sie zum Beispiel einen HTML-String wie:

```html
<div>
  <img src="x" onerror="alert('hello!')" />
  <script>
    alert("hello!");
  </script>
</div>
```

Wenn wir diesen an DOMPurify übergeben, wird zurückgegeben:

```html
<div>
  <img src="x" />
</div>
```

### Vertrauenswürdige Typen

Eine Funktion zu haben, die einen gegebenen Eingabestring sanitizen kann, ist eine Sache, aber alle Stellen im Codebase zu finden, an denen Eingabestrings sanitizieren müssen, kann an sich ein sehr schwieriges Problem sein.

Wenn Sie clientseitiges Rendering im Browser implementieren, gibt es eine Reihe von Web-APIs, die unsicher sind, wenn sie mit unsanitizierten untrusted content aufgerufen werden.

Zum Beispiel interpretieren die folgenden APIs ihre String-Argumente als HTML und verwenden es, um das Seiten-DOM zu aktualisieren:

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) (die auch intern von Reacts `dangerouslySetInnerHTML` verwendet wird)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Document.write()`](/de/docs/Web/API/Document/write)

Andere APIs führen ihre Argumente direkt als JavaScript aus. Zum Beispiel:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) ermöglicht es einem Entwickler, sicherzustellen, dass Eingaben immer sanitiziert werden, bevor sie einer dieser APIs übergeben werden.

Der Schlüssel zur Durchsetzung der Verwendung von vertrauenswürdigen Typen ist die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive. Wenn diese Direktive gesetzt ist, wird das Übergeben von String-Argumenten an unsichere APIs eine Ausnahme auslösen:

```js example-bad
const userInput = "I might be XSS";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Stattdessen muss ein Entwickler einen _trusted type_ an eine dieser APIs übergeben. Ein trusted type ist ein Objekt, das aus einem String von einem [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt erstellt wurde, dessen Implementierung vom Entwickler definiert wird. Zum Beispiel:

```js example-good
// Create a policy that can create TrustedHTML values
// by sanitizing the input strings with DOMPurify library.
const sanitizer = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});

const userInput = "I might be XSS";
const element = document.querySelector("#container");

const trustedHTML = sanitizer.createHTML(userInput);
element.innerHTML = trustedHTML;
```

> [!NOTE]
> Die Trusted Types API bietet keine Sanitization-Funktion: Es ist ein Framework, in dem ein Entwickler sicher sein kann, dass eine von ihm bereitgestellte Sanitization-Funktion aufgerufen wurde. Im obigen Beispiel verwendet der Entwickler DOMPurify als Sanitizer für HTML-Sinks innerhalb des Trusted Types-Rahmens.

Die Trusted Types API hat noch keine gute browserübergreifende Unterstützung, aber wenn sie es hat, wird es eine wichtige Verteidigung gegen DOM-basierte XSS-Angriffe sein.

### CSP bereitstellen

Die Ausgabe-Codierung und die Sanitization zielen darauf ab, zu verhindern, dass bösartige Skripte in die Seiten einer Website geraten. Eine der Hauptfunktionen einer Content Security Policy ist es, zu verhindern, dass bösartige Skripte ausgeführt werden, selbst wenn sie sich auf den Seiten einer Website befinden. Das heißt, es ist ein Backup für den Fall, dass die anderen Verteidigungen scheitern.

Der empfohlene Ansatz zur Minderung von XSS mit einer CSP ist eine [strikte CSP](/de/docs/Web/HTTP/Guides/CSP#strict_csp), die eine [nonce](/de/docs/Web/HTTP/Guides/CSP#nonces) oder einen [Hash](/de/docs/Web/HTTP/Guides/CSP#hashes) verwendet, um dem Browser anzuzeigen, welche Skripte er im Dokument erwartet. Wenn es einem Angreifer gelingt, bösartige `<script>`-Elemente einzufügen, haben diese keine korrekte nonce oder keinen korrekten Hash und der Browser wird sie nicht ausführen. Zusätzlich werden verschiedene gängige XSS-Vektoren vollständig verboten: Inline-Event-Handler, `javascript:` URLs und APIs wie `eval()`, die ihre Argumente als JavaScript ausführen.

### Zusammenfassende Verteidigungscheckliste

Wir können die oben genannten Verteidigungen wie folgt zusammenfassen:

- Verwenden Sie beim Interpolieren von Eingaben in eine Seite, sowohl im Browser als auch auf dem Server, eine Templating-Engine, die Ausgabe-Codierung durchführt.
- Seien Sie sich des Kontexts bewusst, in dem Sie Eingaben interpolieren, und stellen Sie sicher, dass die entsprechende Ausgabe-Codierung in diesem Kontext durchgeführt wird.
- Wenn Sie Eingaben als HTML einfügen müssen, sanitizieren Sie sie mit einer anerkannten Bibliothek. Wenn Sie dies im Browser tun, verwenden Sie das Trusted Types-Framework, um sicherzustellen, dass die Eingaben von Ihrer Sanitization-Funktion verarbeitet werden.
- Implementieren Sie eine strikte CSP.

## Siehe auch

- [Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) auf [owasp.org](https://owasp.org/)

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Security", "1", "0", "1")}}
</section>
