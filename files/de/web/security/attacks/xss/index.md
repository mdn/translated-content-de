---
title: Cross-Site Scripting (XSS)
slug: Web/Security/Attacks/XSS
l10n:
  sourceCommit: 18d2846b513c9c626ed863007d87c40fcbda74ff
---

Ein Cross-Site Scripting (XSS) Angriff ist ein Angriff, bei dem ein Angreifer dazu in der Lage ist, eine Zielseite dazu zu bringen, bösartigen Code auszuführen, als ob dieser Teil der Webseite wäre.

## Übersicht

Ein Webbrowser lädt Code von vielen verschiedenen Websites herunter und führt ihn auf dem Computer des Benutzers aus. Einige dieser Websites sind sehr vertrauenswürdig, und der Benutzer könnte sie für sensible Vorgänge nutzen, wie beispielsweise finanzielle Transaktionen oder medizinische Beratung. Bei anderen, wie etwa einer lässigen Gaming-Seite, könnte keine solche Vertrauensbeziehung bestehen. Die Grundlage des Sicherheitsmodells des Browsers besteht darin, dass diese Seiten voneinander getrennt gehalten werden sollten, sodass Code von einer Seite nicht auf Objekte oder {{Glossary("credential", "Zugangsdaten")}} auf einer anderen Seite zugreifen kann. Dies wird als die [same-origin policy](/de/docs/Web/Security/Same-origin_policy) bezeichnet.

![Diagramm von 2 Seiten in den Browsern, in separaten Welten](same-origin.svg)

Bei einem erfolgreichen XSS-Angriff gelingt es dem Angreifer, die same-origin policy zu umgehen, indem er die Zielseite dazu bringt, bösartigen Code innerhalb ihres eigenen Kontexts auszuführen, als ob es die gleiche Herkunft wäre. Der Code kann dann alles tun, was der eigene Code der Seite tun kann, einschließlich zum Beispiel:

- Zugreifen und/oder Ändern aller Inhalte der geladenen Seiten der Seite und aller Inhalte im lokalen Speicher
- HTTP-Anfragen mit den Anmeldeinformationen des Benutzers durchführen, wodurch dieser den Benutzer imitieren oder auf sensible Daten zugreifen kann

![Diagramm von Angreifercode, der auf der Zielwebsite ausgeführt wird](xss.svg)

Alle XSS-Angriffe hängen davon ab, dass eine Website zwei Dinge tut:

1. Eingaben akzeptiert, die von einem Angreifer erstellt worden sein könnten
2. Diese Eingaben in eine Seite einbezieht, ohne sie zu _sanitisieren_: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausführbar sind.

## Zwei XSS-Beispiele

In diesem Abschnitt werden wir zwei Beispielseiten durchgehen, die anfällig für einen XSS-Angriff sind.

### Code-Injektion im Browser

In diesem Beispiel nehmen wir an, dass die Website der Bank des Nutzers `my-bank.example.com` ist. Der Nutzer ist in der Regel angemeldet, und der Code auf der Website kann auf die Kontodetails des Nutzers zugreifen und Transaktionen durchführen. Die Website möchte eine Willkommensnachricht anzeigen, die für den aktuellen Benutzer personalisiert ist. Sie zeigt die Willkommensnachricht in einem {{htmlelement("Heading_Elements", "heading")}}-Element an:

```html
<h1 id="welcome"></h1>
```

Die Seite erwartet, den Namen des aktuellen Benutzers in einem [URL-Parameter](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#parameters) zu finden. Sie extrahiert den Parameterwert und verwendet ihn, um eine personalisierte Begrüßungsnachricht zu erstellen:

```js
const params = new URLSearchParams(window.location.search);
const user = params.get("user");
const welcome = document.querySelector("#welcome");

welcome.innerHTML = `Welcome back, ${user}!`;
```

Angenommen, diese Seite wird unter `https://my-bank.example.com/welcome` bereitgestellt. Um die Schwachstelle auszunutzen, sendet ein Angreifer dem Nutzer einen Link wie diesen:

```html
<a
  href="https://my-bank.example.com/welcome?user=<img src=x onerror=alert('hello!')>">
  Get a free kitten!</a
>
```

Wenn der Nutzer auf den Link klickt:

1. Lädt der Browser die Seite.
2. Die Seite extrahiert den URL-Parameter namens `user`, dessen Wert `<img src=x onerror=alert("hello!")>` ist.
3. Die Seite weist dann diesen Wert der `innerHTML`-Eigenschaft des `welcome`-Elements zu, was ein neues {{htmlelement("img")}}-Element erstellt, das einen `src`-Attributwert von `x` hat.
4. Da der `src`-Wert einen Fehler erzeugt, wird die [Ereignishandler-Eigenschaft](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_%e2%80%94_dont_use_these) `onerror` ausgeführt, und der Angreifer kann seinen Code auf der Seite ausführen.

In diesem Fall zeigt der Code nur eine Warnung an, aber auf einer echten Bankenseite könnte der Angreifercode alles tun, was der eigene Front-End-Code der Bank tun könnte.

### Code-Injektion auf dem Server

In diesem Beispiel betrachten wir eine Website mit einer Suchfunktion. Das HTML für die Suchseite könnte so aussehen:

```html
<h1>Search</h1>

<form action="/results">
  <label for="mySearch">Search for an item:</label>
  <input id="mySearch" type="search" name="search" />
  <input type="submit" />
</form>
```

Wenn der Nutzer einen Suchbegriff eingibt und auf "Senden" klickt, macht der Browser eine GET-Anfrage an "/results" und fügt den Suchbegriff als URL-Parameter hinzu, wie folgt:

```plain
https://example.org/results?search=bananas
```

Der Server möchte eine Liste der Suchergebnisse anzeigen, mit einem Titel, der anzeigt, wonach der Nutzer gesucht hat. Er extrahiert den Suchbegriff aus dem URL-Parameter. So könnte das in [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) aussehen:

```js
app.get("/results", (req, res) => {
  const searchQuery = req.query.search;
  const results = getResults(searchQuery); // Implementation not shown
  res.send(`
   <h1>You searched for ${searchQuery}</h1>
   <p>Here are the results: ${results}</p>`);
});
```

Um diese Schwachstelle auszunutzen, sendet ein Angreifer dem Nutzer einen Link wie diesen:

```html
<a href="http://example.org/results?search=<img src=x onerror=alert('hello')">
  Get a free kitten!</a
>
```

Wenn der Nutzer auf den Link klickt:

1. Sendet der Browser eine GET-Anfrage an den Server. Der URL-Parameter der Anfrage enthält den bösartigen Code.
2. Der Server extrahiert den Wert des URL-Parameters und bettet ihn in die Seite ein.
3. Der Server gibt die Seite an den Browser zurück, der sie ausführt.

## Anatomie eines XSS-Angriffs

Wie bei allen XSS-Angriffen sind diese beiden Beispiele möglich, weil die Website:

1. Eingaben verwendet, die von einem Angreifer erstellt worden sein könnten
2. Diese Eingaben in die Seite einfügt, ohne sie zu sanitisieren.

In beiden Beispielen wird derselbe Vektor für die bösartige Eingabe verwendet: der URL-Parameter. Es gibt jedoch auch andere Vektoren, die Angreifer verwenden können.

Betrachten Sie zum Beispiel ein Blog mit Kommentaren. In einem solchen Fall:

1. Ermöglicht die Website jedem, Kommentare über ein {{htmlelement("form")}}-Element einzureichen
2. Speichert die Kommentare in einer Datenbank
3. Fügt die Kommentare in Seiten ein, die die Website an andere Nutzer ausliefert.

Wenn die Kommentare nicht sanitisiert werden, sind sie potenzielle Vektoren für XSS. Diese Art von Angriff wird manchmal _stored_ oder _persistent_ XSS genannt und ist besonders schwerwiegend, da der infizierte Inhalt allen Nutzern, die auf die Seite zugreifen, bei jedem Zugriff darauf angezeigt wird.

### Client- und Server-XSS

Ein großer Unterschied zwischen den beiden Beispielen besteht darin, dass der bösartige Code in verschiedenen Teilen des Codebasis der Website injiziert wird, was die Architektur der jeweiligen Website widerspiegelt.

Eine Website, die clientseitiges Rendering verwendet, wie etwa eine {{Glossary("SPA", "Single-Page-Anwendung")}}, modifiziert Seiten im Browser, indem sie Web-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwendet, entweder direkt oder indirekt durch ein Framework wie React. Im Verlauf dieses Prozesses erfolgt die XSS-Injektion. Das sehen wir im ersten Beispiel: Der bösartige Code wird im Browser injiziert, indem ein Script, das auf der Seite läuft, den Wert des URL-Parameters der [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft zuweist, die ihren Wert als HTML-Code interpretiert.

Eine Website, die serverseitiges Rendering verwendet, erstellt Seiten auf dem Server, indem ein Framework wie Django oder Express verwendet wird, meistens indem Werte in Seitenvorlagen eingefügt werden. Wenn eine XSS-Injektion auftritt, geschieht dies auf dem Server während des Templating-Prozesses. Das sehen wir im zweiten Beispiel: Der Code wird auf dem Server injiziert, indem der Express-Code den Wert des URL-Parameters in das zurückgegebene Dokument einfügt. Der XSS-Angriffscode wird dann ausgeführt, wenn der Browser die Seite auswertet.

In beiden Fällen ist der allgemeine Ansatz zur Verteidigung derselbe, und wir werden dies im nächsten Abschnitt im Detail behandeln. Die spezifischen Werkzeuge und APIs, die Sie verwenden werden, können jedoch unterschiedlich sein.

## Abwehrmaßnahmen gegen XSS

Wenn Sie externe Eingaben in Ihre Seiten einfügen müssen, gibt es zwei Hauptabwehrstrategien gegen XSS:

1. Verwenden Sie _Ausgabe-Codierung_ und _Sanitization_, um zu verhindern, dass Eingaben ausführbar werden. Wenn Sie Inhalte im Browser rendern, können Sie die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) verwenden, um sicherzustellen, dass Eingaben durch eine Sanitierungsfunktion gefiltert werden, bevor sie auf der Seite erscheinen.
2. Nutzen Sie eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP), um dem Browser mitzuteilen, welche JavaScript- oder CSS-Ressourcen ausgeführt werden dürfen. Dies ist eine Sicherung: Wenn die erste Abwehr versagt und ausführbare Eingaben auf eine Seite gelangen, sollte eine korrekt konfigurierte CSP verhindern, dass der Browser sie ausführt.

### Ausgabe-Codierung

_Ausgabe-Codierung_ ist der Prozess, bei dem Zeichen in der Eingabezeichenfolge, die potenziell gefährlich sind, maskiert werden, damit sie als Text behandelt werden, anstatt als Teil einer Sprache wie HTML.

Dies ist die geeignete Wahl, wenn Sie Eingaben als Text behandeln möchten, zum Beispiel weil Ihre Website Vorlagen verwendet, die Eingaben in Inhalte interpolieren, wie in diesem [Django Template](https://docs.djangoproject.com/en/5.1/ref/templates/language/)-Auszug:

```django
<p>You searched for \{{ search_term }}.</p>
```

Die meisten modernen Templating-Engines führen automatisch eine Ausgabe-Codierung durch. Zum Beispiel führt die Templating-Engine von Django folgende Konvertierungen durch:

- `<` wird in `&lt;` umgewandelt

- `>` wird in `&gt;` umgewandelt

- `'` wird in `&#x27;` umgewandelt

- `"` wird in `&quot;` umgewandelt

- `&` wird in `&amp;` umgewandelt

Das bedeutet, dass wenn Sie `<img src=x onerror=alert('XSS!')>` in das oben erwähnte Django-Template eingeben, es in `&lt;img src=x onerror=alert(&#x27;XSS!&#x27;)&gt;` umgewandelt wird, was als folgender Text angezeigt wird:

> You searched for &lt;img src=x onerror=alert('XSS!')&gt;.

Ähnlich, wenn Sie clientseitiges Rendering mit React verwenden, werden Werte, die in JSX eingebettet sind, automatisch kodiert. Betrachten Sie zum Beispiel eine JSX-Komponente wie diese:

```jsx
import React from "react";

export function App(props) {
  return <div>Hello, {props.name}!</div>;
}
```

Wenn wir `<img src=x onerror=alert('XSS!')>` in `props.name` eingeben, wird es wie folgt gerendert:

> Hello, &lt;img src=x onerror=alert('XSS!')&gt;!

Ein wichtiger Aspekt, um XSS-Angriffe zu verhindern, besteht darin, eine gut anerkannte Templating-Engine zu verwenden, die eine robuste Ausgabe-Codierung durchführt, und deren Dokumentation zu lesen, um mögliche Einschränkungen im Schutz zu verstehen.

#### Dokumentkontexte

Auch wenn Sie eine Templating-Engine verwenden, die automatisch HTML kodiert, müssen Sie sich darüber im Klaren sein, in welchem Teil des Dokuments Sie unzuverlässige Inhalte einfügen. Angenommen, Sie haben ein Django-Template wie dieses:

```django
<div>\{{ my_input }}</div>
```

In diesem Kontext befindet sich die Eingabe zwischen `<div>`-Tags, sodass der Browser sie als HTML auswertet. Sie müssen also den Fall schützen, in dem `my_input` HTML ist, das ausführbaren Code definiert, wie z. B. `<img src=x onerror="alert('XSS')">`. Die in Django eingebaute Ausgabe-Codierung verhindert diesen Angriff, indem sie Zeichen wie `<` und `>` als HTML-Entities `&lt;` und `&gt;` kodiert.

Angenommen, die Vorlage sieht so aus:

```django
<div \{{ my_input }}></div>
```

In diesem Kontext behandelt der Browser die Variable `my_input` als ein HTML-Attribut. Da Django Anführungszeichen (`"` → `&quot;`, `'` → `&#x27;`) kodiert, wird die Nutzlast `onmouseover="alert('XSS')"` nicht ausgeführt. Ein nicht zitiertes Payload wie `onmouseover=alert(1)` (oder mit Backticks, ``onmouseover=alert(`XSS`)``) wird jedoch immer noch ausgeführt, da Attributwerte nicht unbedingt in Anführungszeichen stehen müssen und Backticks standardmäßig nicht kodiert werden.

Der Browser verwendet für die Verarbeitung verschiedener Teile einer Webseite unterschiedliche Regeln — HTML-Elemente und deren Inhalte, HTML-Attribute, Inline-Stile, Inline-Skripte. Die Art der Kodierung, die durchgeführt werden muss, ist abhängig von dem Kontext, in dem die Eingabe interpoliert wird.

Was in einem Kontext sicher ist, kann in einem anderen unsicher sein, und es ist notwendig, den Kontext zu verstehen, in dem Sie unzuverlässige Inhalte einfügen, und jegliche spezielle Handhabung zu implementieren, die dies erfordert.

- **HTML-Kontexte**: Eingaben, die zwischen den Tags der meisten HTML-Elemente (außer {{htmlelement("style")}} oder {{htmlelement("script")}}) eingefügt werden, werden als HTML interpretiert. Die Kodierung, die von Templating-Engines angewendet wird, bezieht sich hauptsächlich auf diesen Kontext.
- **HTML-Attribut-Kontexte**: Das Einfügen von Eingaben als HTML-Attributwerte ist manchmal sicher und manchmal nicht, abhängig vom Attribut. Insbesondere Ereignishandler-Attribute wie `onblur` sind unsicher, ebenso das [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src)-Attribut des {{htmlelement("iframe")}}-Elements.

  Es ist auch wichtig, Platzhalter für eingefügte Attributwerte in Anführungszeichen zu setzen, sonst könnte ein Angreifer in der Lage sein, ein zusätzliches unsicheres Attribut in den bereitgestellten Wert einzufügen. Zum Beispiel zitiert diese Vorlage keinen eingefügten Wert:

  ```django example-bad
  <div class=\{{ my_class }}>...</div>
  ```

  Ein Angreifer kann dies ausnutzen, um ein Ereignishandler-Attribut zu injizieren, indem er Eingaben wie `some_id onmouseover=alert(1)` benutzt. Um den Angriff zu verhindern, setzen Sie den Platzhalter in Anführungszeichen:

  ```django example-good
    <div class="\{{ my_class }}">...</div>
  ```

- **JavaScript- und CSS-Kontexte**: Das Einfügen von Eingaben innerhalb von {{htmlelement("script")}}- oder {{htmlelement("style")}}-Tags ist fast immer unsicher.

### Sanitization

Templating-Engines erlauben es Entwicklern typischerweise, die Ausgabe-Codierung zu deaktivieren. Dies ist notwendig, wenn Entwickler nicht vertrauenswürdige Inhalte als HTML einfügen möchten, nicht als Text. In Django deaktiviert der [`safe`](https://docs.djangoproject.com/en/5.0/ref/templates/language/#how-to-turn-it-off)-Filter die Ausgabe-Codierung, und in React hat [`dangerouslySetInnerHTML`](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html) denselben Effekt.

In diesem Fall liegt es in der Verantwortung des Entwicklers sicherzustellen, dass der Inhalt sicher ist, indem er ihn saniert.

_Sanitization_ ist der Prozess des Entfernens unsicherer Merkmale aus einer HTML-Zeichenfolge: zum Beispiel {{htmlelement("script")}}-Tags oder Inline-Ereignishandler. Da Sanitization wie die Ausgabe-Codierung schwer richtig hinzukriegen ist, wird empfohlen, dafür eine angesehene Drittanbieter-Bibliothek zu verwenden. [DOMPurify](https://github.com/cure53/DOMPurify) wird von vielen Experten einschließlich [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#html-sanitization) empfohlen.

Betrachten Sie zum Beispiel eine HTML-Zeichenfolge wie:

```html
<div>
  <img src="x" onerror="alert('hello!')" />
  <script>
    alert("hello!");
  </script>
</div>
```

Wenn wir diese an DOMPurify übergeben, wird sie zurückgegeben als:

```html
<div>
  <img src="x" />
</div>
```

### Trusted Types

Eine Funktion zu haben, die eine gegebene Eingabezeichenfolge sanitisieren kann, ist eine Sache, aber alle Stellen in einer Codebasis zu finden, an denen Eingabezeichenfolgen saniert werden müssen, kann an sich bereits ein sehr schwieriges Problem sein.

Wenn Sie clientseitiges Rendering im Browser implementieren, gibt es eine Reihe von Web-APIs, die unsicher sind, wenn sie mit nicht sanierten, nicht vertrauenswürdigen Inhalten aufgerufen werden.

Zum Beispiel interpretieren die folgenden APIs ihre String-Argumente als HTML und verwenden diese, um den DOM der Seite zu aktualisieren:

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) (das auch intern von Reacts `dangerouslySetInnerHTML` verwendet wird)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Document.write()`](/de/docs/Web/API/Document/write)

Andere APIs führen ihre Argumente direkt als JavaScript aus. Beispielweise:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) ermöglicht es einem Entwickler sicherzustellen, dass Eingaben immer saniert werden, bevor sie an eine dieser APIs übergeben werden.

Der Schlüssel zur Durchsetzung der Verwendung von Trusted Types ist die CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for). Wenn diese Direktive gesetzt ist, wird das Übergeben von String-Argumenten an unsichere APIs eine Ausnahme auslösen:

```js example-bad
const userInput = "I might be XSS";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Stattdessen muss ein Entwickler einen _Trusted Type_ an eine dieser APIs übergeben. Ein Trusted Type ist ein Objekt, das aus einer Zeichenfolge von einem [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt erstellt wird, dessen Implementierung vom Entwickler definiert wird. Beispiel:

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
> Die Trusted Types API bietet keine Sanitierungsfunktion: Sie stellt einen Rahmen dar, in dem ein Entwickler sicherstellen kann, dass eine von ihm bereitgestellte Sanitierungsfunktion aufgerufen wurde. Im obigen Beispiel verwendet der Entwickler DOMPurify als den Sanitizer für HTML-Sinks innerhalb des Trusted Types-Rahmens.

Die Trusted Types API hat noch keine gute plattformübergreifende Unterstützung, aber wenn sie dies tut, wird sie eine wichtige Verteidigung gegen DOM-basierte XSS-Angriffe darstellen.

### Deployment einer CSP

Ausgabe-Codierung und Sanitization drehen sich darum, zu verhindern, dass bösartige Skripte in die Seiten einer Site gelangen. Eine der Hauptfunktionen einer Content-Security-Policy besteht darin, zu verhindern, dass bösartige Skripte ausgeführt werden, selbst wenn sie sich auf den Seiten einer Site befinden. Das heißt, sie ist eine Absicherung für den Fall, dass andere Abwehrmechanismen versagen.

Der empfohlene Ansatz zur Minderung von XSS mit einer CSP ist eine [strikte CSP](/de/docs/Web/HTTP/Guides/CSP#strict_csp), die ein [Nonce](/de/docs/Web/HTTP/Guides/CSP#nonces) oder ein [Hash](/de/docs/Web/HTTP/Guides/CSP#hashes) verwendet, um dem Browser anzugeben, welche Skripte er im Dokument erwartet. Wenn es einem Angreifer gelingt, bösartige `<script>`-Elemente einzufügen, dann werden sie nicht das korrekte Nonce oder den Hash haben, und der Browser wird sie nicht ausführen. Darüber hinaus sind verschiedene gängige XSS-Vektoren vollständig verboten: Inline-Ereignishandler, `javascript:`-URLs und APIs wie `eval()`, die ihre Argumente als JavaScript ausführen.

### Abwehrzusammenfassung Checkliste

Wir können die oben genannten Verteidigungen wie folgt zusammenfassen:

- Wenn Sie Eingaben in eine Seite interpolieren, entweder im Browser oder auf dem Server, verwenden Sie eine Templating-Engine, die eine Ausgabe-Codierung durchführt.
- Seien Sie sich des Kontexts bewusst, in dem Sie Eingaben interpolieren, und stellen Sie sicher, dass die entsprechende Ausgabe-Codierung in diesem Kontext durchgeführt wird.
- Wenn Sie Eingaben als HTML einfügen müssen, sanitisieren Sie diese mit einer renommierten Bibliothek. Wenn Sie dies im Browser tun, verwenden Sie das Trusted Types-Framework, um sicherzustellen, dass Eingaben von Ihrer Sanitierungsfunktion verarbeitet werden.
- Implementieren Sie eine strikte CSP.

## Siehe auch

- [Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)
