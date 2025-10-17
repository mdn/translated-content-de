---
title: Cross-site scripting (XSS)
slug: Web/Security/Attacks/XSS
l10n:
  sourceCommit: b07e3b87504a8984cf31d7a735ec373d33a11cd5
---

Ein Cross-site Scripting (XSS)-Angriff ist ein Angriff, bei dem es einem Angreifer gelingt, eine Zielwebsite dazu zu bringen, schädlichen Code auszuführen, als wäre er Teil der Website.

## Überblick

Ein Webbrowser lädt Code von vielen verschiedenen Websites herunter und führt ihn auf dem Computer des Benutzers aus. Einige dieser Websites sind sehr vertrauenswürdig, und der Benutzer verwendet sie möglicherweise für sensible Operationen, wie z.B. Finanztransaktionen oder medizinischen Rat. Bei anderen, wie z.B. einer Gelegenheitsspiel-Website, hat der Benutzer möglicherweise keine solche Vertrauensbeziehung. Das Fundament des Sicherheitsmodells des Browsers besteht darin, dass diese Websites voneinander getrennt bleiben sollten, sodass Code von einer Website nicht in der Lage sein sollte, auf Objekte oder {{Glossary("credential", "Anmeldeinformationen")}} auf einer anderen Website zuzugreifen. Dies wird als [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) bezeichnet.

![Diagramm von 2 Websites im Browser in getrennten Welten](same-origin.svg)

Bei einem erfolgreichen XSS-Angriff gelingt es dem Angreifer, die Same-Origin-Policy zu umgehen, indem er die Zielwebsite austrickst, schädlichen Code innerhalb ihres eigenen Kontexts auszuführen, als wäre er derselben Herkunft. Der Code kann dann alles tun, was der eigene Code der Website tun kann, einschließlich zum Beispiel:

- Zugriff auf und/oder Modifikation aller Inhalte der geladenen Seiten der Website und beliebige Inhalte im lokalen Speicher
- Ausführen von HTTP-Anfragen mit den Anmeldeinformationen des Benutzers, wodurch sie sich als Benutzer ausgeben oder auf sensible Daten zugreifen können

![Diagramm von Angreifercode, der auf Zielwebsite läuft](xss.svg)

Alle XSS-Angriffe hängen davon ab, dass eine Website zwei Dinge tut:

1. Annahme von Eingaben, die von einem Angreifer erstellt worden sein könnten
2. Einfügen dieser Eingaben in eine Seite ohne sie _zu bereinigen_, d.h. ohne sicherzustellen, dass sie nicht als JavaScript ausführbar sind.

## Zwei XSS-Beispiele

In diesem Abschnitt werden wir zwei Beispielseiten durchgehen, die anfällig für einen XSS-Angriff sind.

### Code-Injektion im Browser

In diesem Beispiel nehmen wir an, die Website der Bank des Benutzers ist `my-bank.example.com`. Der Benutzer ist normalerweise angemeldet und der Code der Website kann auf die Kontodetails des Benutzers zugreifen und Transaktionen durchführen. Die Website möchte eine Willkommensnachricht anzeigen, die für den aktuellen Benutzer personalisiert ist. Sie zeigt die Begrüßung in einem {{htmlelement("Heading_Elements", "heading")}}-Element an:

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

Angenommen, diese Seite wird von `https://my-bank.example.com/welcome` bereitgestellt. Um die Sicherheitslücke auszunutzen, sendet ein Angreifer dem Benutzer einen Link wie diesen:

```html
<a
  href="https://my-bank.example.com/welcome?user=<img src=x onerror=alert('hello!')>">
  Get a free kitten!</a
>
```

Wenn der Benutzer auf den Link klickt:

1. Der Browser lädt die Seite.
2. Die Seite extrahiert den URL-Parameter mit dem Namen `user`, dessen Wert `<img src=x onerror=alert("hello!")>` ist.
3. Die Seite weist dann diesen Wert der `innerHTML`-Eigenschaft des `welcome`-Elements zu, was ein neues {{htmlelement("img")}}-Element erstellt, das einen `src`-Attributwert von `x` hat.
4. Da der `src`-Wert einen Fehler erzeugt, wird der `onerror` [Event-Handler Property](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_%e2%80%94_dont_use_these) ausgeführt und der Angreifer kann seinen Code in der Seite laufen lassen.

In diesem Fall zeigt der Code nur eine Benachrichtigung an, aber in einer echten Bankwebsite könnte der Angreifercode alles tun, was der eigene Frontend-Code der Bank tun könnte.

### Code-Injektion im Server

In diesem Beispiel betrachten wir eine Website mit einer Suchfunktion. Der HTML-Code für die Suchseite könnte so aussehen:

```html
<h1>Search</h1>

<form action="/results">
  <label for="mySearch">Search for an item:</label>
  <input id="mySearch" type="search" name="search" />
  <input type="submit" />
</form>
```

Wenn der Benutzer einen Suchbegriff eingibt und auf "Absenden" klickt, macht der Browser eine GET-Anfrage an "/results" und schließt den Suchbegriff als URL-Parameter ein, etwa so:

```plain
https://example.org/results?search=bananas
```

Der Server möchte eine Liste von Suchergebnissen anzeigen, mit einem Titel, der angibt, wonach der Benutzer gesucht hat. Er extrahiert den Suchbegriff aus dem URL-Parameter. So könnte das in [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) aussehen:

```js
app.get("/results", (req, res) => {
  const searchQuery = req.query.search;
  const results = getResults(searchQuery); // Implementation not shown
  res.send(`
   <h1>You searched for ${searchQuery}</h1>
   <p>Here are the results: ${results}</p>`);
});
```

Um diese Sicherheitslücke auszunutzen, sendet ein Angreifer dem Benutzer einen Link wie diesen:

```html
<a href="http://example.org/results?search=<img src=x onerror=alert('hello')">
  Get a free kitten!</a
>
```

Wenn der Benutzer auf den Link klickt:

1. Der Browser sendet eine GET-Anfrage an den Server. Der URL-Parameter der Anfrage enthält den bösartigen Code.
2. Der Server extrahiert den URL-Parameterwert und bettet ihn in die Seite ein.
3. Der Server gibt die Seite an den Browser zurück, der sie ausführt.

## Anatomie eines XSS-Angriffs

Wie alle XSS-Angriffe sind auch diese beiden Beispiele möglich, weil die Website:

1. Eingaben verwendet, die von einem Angreifer erstellt worden sein könnten
2. Die Eingaben in die Seite einbindet, ohne sie zu bereinigen.

Beide Beispiele verwenden denselben Vektor für die bösartigen Eingaben: den URL-Parameter. Es gibt jedoch auch andere Vektoren, die Angreifer verwenden können.

Betrachten Sie zum Beispiel ein Blog mit Kommentaren. In einem solchen Fall ermöglicht die Website:

1. Jeder Person, Kommentare über ein {{htmlelement("form")}}-Element einzureichen
2. Speichert die Kommentare in einer Datenbank
3. Enthält die Kommentare in Seiten, die die Website an andere Benutzer ausliefert.

Wenn die Kommentare nicht bereinigt sind, sind sie potenzielle Vektoren für XSS. Diese Art von Angriff wird manchmal als _gespeichert_ oder _persistent_ XSS bezeichnet und ist besonders schwerwiegend, weil der infizierte Inhalt allen Benutzern, die auf die Seite zugreifen, jedes Mal bei jedem Zugang zur Seite ausgeliefert wird.

### Client- und Server-XSS

Ein großer Unterschied zwischen den beiden Beispielen besteht darin, dass der bösartige Code in verschiedenen Teilen des Codebasis der Website injiziert wird, was die Architektur der jeweiligen Website widerspiegelt.

Eine Website, die Client-seitiges Rendering verwendet, wie eine {{Glossary("SPA", "Single-Page-App")}}, modifiziert Seiten im Browser und verwendet dazu Web-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement), entweder direkt oder indirekt über ein Framework wie React. Im Verlauf dieses Prozesses wird XSS-Injektion auftreten. Das sehen wir im ersten Beispiel: Der bösartige Code wird im Browser injiziert, indem ein Skript, das auf der Seite läuft, den Wert des URL-Parameters der [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft zuweist, die ihren Wert als HTML-Code interpretiert.

Eine Website, die serverseitiges Rendering verwendet, baut Seiten auf dem Server mithilfe eines Frameworks wie Django oder Express, am häufigsten durch das Einfügen von Werten in Seitenschablonen. XSS-Injektion, wenn sie auftritt, wird auf dem Server während des Template-Prozesses passieren. Das sehen wir im zweiten Beispiel: Der Code wird im Server injiziert, indem der Express-Code den URL-Parameterwert in das zurückgegebene Dokument einfügt. Der XSS-Angriffscode wird dann ausgeführt, wenn der Browser die Seite evaluiert.

In beiden Fällen ist der allgemeine Abwehransatz derselbe, und darauf werden wir im nächsten Abschnitt detailliert eingehen. Die spezifischen Tools und APIs, die Sie verwenden, werden jedoch unterschiedlich sein.

## Abwehrmaßnahmen gegen XSS

Wenn Sie externe Eingaben in die Seiten Ihrer Website einfügen müssen, gibt es zwei Hauptabwehrmechanismen gegen XSS:

1. Verwenden Sie _Ausgabe-Kodierung_ und _Bereinigung_, um zu verhindern, dass Eingaben ausführbar werden. Wenn Sie Inhalte im Browser rendern, können Sie die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) verwenden, um sicherzustellen, dass Eingaben durch eine Bereinigungsfunktion geleitet werden, bevor sie in die Seite aufgenommen werden.
2. Verwenden Sie eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP), um dem Browser mitzuteilen, welche JavaScript- oder CSS-Ressourcen ausgeführt werden dürfen. Dies ist eine Backup-Abwehr: Wenn die erste Verteidigung versagt und ausführbare Eingaben in eine Seite gelangen, sollte eine richtig konfigurierte CSP verhindern, dass der Browser sie ausführt.

### Ausgabe-Kodierung

_Ausgabe-Kodierung_ ist der Prozess, bei dem potenziell gefährliche Zeichen in der Eingabezeichenkette so maskiert werden, dass sie als Text behandelt werden, anstatt als Teil einer Sprache wie HTML.

Dies ist die geeignete Wahl, wenn Sie Eingaben als Text behandeln möchten, weil Ihre Website beispielsweise Templates verwendet, die Eingaben in Inhalte interpolieren, wie in diesem [Django-Template](https://docs.djangoproject.com/en/5.1/ref/templates/language/) Beispiel:

```django
<p>You searched for \{{ search_term }}.</p>
```

Die meisten modernen Template-Engines führen automatisch eine Ausgabe-Kodierung durch. Zum Beispiel führt die Template-Engine von Django die folgenden Konvertierungen durch:

- `<` wird in `&lt;` umgewandelt

- `>` wird in `&gt;` umgewandelt

- `'` wird in `&#x27;` umgewandelt

- `"` wird in `&quot;` umgewandelt

- `&` wird in `&amp;` umgewandelt

Das bedeutet, dass wenn Sie `<img src=x onerror=alert('XSS!')>` in das Django-Template oben einfügen, es in `&lt;img src=x onerror=alert(&#x27;XSS!&#x27;)&gt;` umgewandelt wird, was als folgender Text angezeigt wird:

> Sie haben nach &lt;img src=x onerror=alert('XSS!')&gt; gesucht.

Ähnlich, wenn Sie Client-seitiges Rendering mit React durchführen, werden Werte in JSX automatisch kodiert. Betrachten Sie zum Beispiel eine JSX-Komponente wie diese:

```jsx
import React from "react";

export function App(props) {
  return <div>Hello, {props.name}!</div>;
}
```

Wenn wir `<img src=x onerror=alert('XSS!')>` in `props.name` übergeben, wird es gerendert als:

> Hallo, &lt;img src=x onerror=alert('XSS!')&gt;!

Einer der wichtigsten Teile der Vermeidung von XSS-Angriffen ist, eine renommierte Templating-Engine zu verwenden, die eine robuste Ausgabe-Kodierung durchführt, und deren Dokumentation zu lesen, um eventuelle Vorsichtsmaßnahmen hinsichtlich des angebotenen Schutzes zu verstehen.

#### Dokumentkontexte

Selbst wenn Sie eine Templating-Engine verwenden, die HTML automatisch kodiert, müssen Sie sich darüber im Klaren sein, wo im Dokument Sie untrusted Inhalte einfügen. Angenommen, Sie haben ein Django-Template wie dieses:

```django
<div>\{{ my_input }}</div>
```

In diesem Kontext befindet sich die Eingabe innerhalb von `<div>`-Tags, sodass der Browser sie als HTML interpretiert. Sie müssen also gegen den Fall schützen, dass `my_input` HTML enthält, das ausführbaren Code definiert, wie z.B. `<img src=x onerror="alert('XSS')">`. Die in Django eingebaute Ausgabe-Kodierung verhindert diesen Angriff, indem sie Zeichen wie `<` und `>` als HTML-Entities `&lt;` und `&gt;` kodiert.

Angenommen, das Template sieht so aus:

```django
<div \{{ my_input }}></div>
```

In diesem Kontext behandelt der Browser die `my_input`-Variable als ein HTML-Attribut. Da Django Anführungszeichen (`"` → `&quot;`, `'` → `&#x27;`) kodiert, wird die Nutzlast `onmouseover="alert('XSS')"` nicht ausgeführt.
Ein unzitiertes Payload wie `onmouseover=alert(1)` (oder mit Backticks, ``onmouseover=alert(`XSS`)``) wird jedoch weiterhin ausgeführt, da Attributwerte nicht zitiert werden müssen und Backticks standardmäßig nicht maskiert werden.

Der Browser verwendet unterschiedliche Regeln, um verschiedene Teile einer Webseite zu verarbeiten — HTML-Elemente und deren Inhalt, HTML-Attribute, Inline-Stile, Inline-Scripts. Die Art der Kodierung, die durchgeführt werden muss, hängt davon ab, in welchem Kontext die Eingabe interpoliert wird.

Was in einem Kontext sicher ist, kann in einem anderen unsicher sein, und es ist notwendig, den Kontext zu verstehen, in dem Sie untrusted Inhalte einfügen, und jede spezielle Behandlung zu implementieren, die dies erfordert.

- **HTML-Kontexte**: Eingaben, die zwischen den Tags der meisten HTML-Elemente eingefügt werden (außer {{htmlelement("style")}} oder {{htmlelement("script")}}) werden als HTML interpretiert. Die Kodierung von Template-Engines bezieht sich hauptsächlich auf diesen Kontext.
- **HTML-Attributkontexte**: Eingaben als HTML-Attributwerte einzufügen, ist manchmal sicher und manchmal nicht, abhängig vom Attribut. Insbesondere Ereignis-Handler-Attribute wie `onblur` sind unsicher, ebenso wie das [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src)-Attribut des {{htmlelement("iframe")}}-Elements.

  Es ist auch wichtig, Platzhalter für eingefügte Attributwerte zu zitieren, sonst kann ein Angreifer möglicherweise ein zusätzliches unsicheres Attribut im bereitgestellten Wert einfügen. Zum Beispiel zitiert dieses Template keinen eingefügten Wert:

  ```django example-bad
  <div class=\{{ my_class }}>...</div>
  ```

  Ein Angreifer kann dies ausnutzen, um ein Ereignis-Handler-Attribut zu injizieren, indem er Eingaben wie `some_id onmouseover=alert(1)` verwendet. Um den Angriff zu verhindern, zitieren Sie den Platzhalter:

  ```django example-good
    <div class="\{{ my_class }}">...</div>
  ```

- **JavaScript- und CSS-Kontexte**: Eingaben in {{htmlelement("script")}}- oder {{htmlelement("style")}}-Tags einzufügen, ist fast immer unsicher.

### Bereinigung

Template-Engines erlauben Entwicklern typischerweise, die Ausgabe-Kodierung zu deaktivieren. Dies ist erforderlich, wenn Entwickler untrusted Inhalte als HTML und nicht als Text einfügen möchten. Beispielsweise deaktiviert der [`safe`](https://docs.djangoproject.com/en/5.0/ref/templates/language/#how-to-turn-it-off)-Filter in Django die Ausgabe-Kodierung und in React hat [`dangerouslySetInnerHTML`](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html) denselben Effekt.

In diesem Fall liegt es in der Verantwortung des Entwicklers, sicherzustellen, dass der Inhalt sicher ist, indem er ihn bereinigt.

_Bereinigung_ ist der Prozess des Entfernens unsicherer Eigenschaften aus einem HTML-String: zum Beispiel {{htmlelement("script")}}-Tags oder inline Ereignis-Handler. Da die Bereinigung, wie auch die Ausgabe-Kodierung, schwer korrekt durchzuführen ist, wird empfohlen, eine seriöse Drittanbieterbibliothek dafür zu verwenden. [DOMPurify](https://github.com/cure53/DOMPurify) wird von vielen Experten empfohlen, einschließlich [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#html-sanitization).

Betrachten Sie zum Beispiel einen HTML-String wie:

```html
<div>
  <img src="x" onerror="alert('hello!')" />
  <script>
    alert("hello!");
  </script>
</div>
```

Wenn wir diesen an DOMPurify übergeben, gibt er zurück:

```html
<div>
  <img src="x" />
</div>
```

### Trusted Types

Eine Funktion zu haben, die eine bestimmte Eingabezeichenkette bereinigen kann, ist eine Sache, aber alle Stellen im Codebasis zu finden, an denen Eingabezeichenketten bereinigt werden müssen, kann an sich ein sehr schwieriges Problem sein.

Wenn Sie client-seitiges Rendering im Browser implementieren, gibt es einige Web-APIs, die unsicher sind, wenn sie mit unbereinigten untrusted Inhalten aufgerufen werden.

Zum Beispiel interpretieren die folgenden APIs ihre Zeichenfolgenargumente als HTML und verwenden sie, um das DOM der Seite zu aktualisieren:

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) (das auch intern von Reacts `dangerouslySetInnerHTML` verwendet wird)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Document.write()`](/de/docs/Web/API/Document/write)

Andere APIs führen ihre Argumente direkt als JavaScript aus. Zum Beispiel:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) ermöglicht es einem Entwickler sicherzustellen, dass Eingaben immer bereinigt werden, bevor sie an eine dieser APIs übergeben werden.

Der Schlüssel zur Durchsetzung der Verwendung von Trusted Types ist die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive. Wenn diese Direktive gesetzt ist, wird das Übergeben von Zeichenfolgenargumenten an unsichere APIs eine Ausnahme werfen:

```js example-bad
const userInput = "I might be XSS";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Stattdessen muss ein Entwickler einen _Trusted Type_ an eine dieser APIs übergeben. Ein Trusted Type ist ein Objekt, das von einem [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt erstellt wird, dessen Implementierung vom Entwickler definiert wird. Zum Beispiel:

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
> Die Trusted Types API bietet keine Bereinigungsfunktion: Sie ist ein Framework, in dem ein Entwickler sicherstellen kann, dass eine von ihnen bereitgestellte Bereinigungsfunktion aufgerufen wurde. Im obigen Beispiel verwendet der Entwickler DOMPurify als Bereiniger für HTML-Senken im Trusted Types-Framework.

Die Trusted Types API hat noch keine gute Browser-übergreifende Unterstützung, aber wenn es soweit ist, wird sie ein wichtiger Schutz gegen DOM-basierte XSS-Angriffe sein.

### Einsatz einer CSP

Ausgabe-Kodierung und Bereinigung sind darauf ausgerichtet, zu verhindern, dass bösartige Skripte in die Seiten einer Website gelangen. Eine der Hauptfunktionen einer Content Security Policy ist es, zu verhindern, dass bösartige Skripte ausgeführt werden, selbst wenn sie sich in den Seiten einer Website befinden. Das heißt, sie ist eine Backup-Maßnahme für den Fall, dass andere Abwehrmaßnahmen versagen.

Der empfohlene Ansatz zur Abschwächung von XSS mit einer CSP ist eine [strikte CSP](/de/docs/Web/HTTP/Guides/CSP#strict_csp), die eine [Nonce](/de/docs/Web/HTTP/Guides/CSP#nonces) oder einen [Hash](/de/docs/Web/HTTP/Guides/CSP#hashes) verwendet, um dem Browser anzugeben, welche Skripte es in dem Dokument erwartet. Wenn es einem Angreifer gelingt, bösartige `<script>`-Elemente einzufügen, werden diese nicht korrekte Nonce oder Hash aufweisen und der Browser wird sie nicht ausführen. Darüber hinaus werden verschiedene gängige XSS-Vektoren vollständig ausgeschlossen: Inline-Ereignis-Handler, `javascript:` URLs und APIs wie `eval()`, die ihre Argumente als JavaScript ausführen.

## Zusammenfassung der Verteidigungsmaßnahmen

- Wenn Sie Eingaben in eine Seite interpolieren, sei es im Browser oder im Server, verwenden Sie eine Template-Engine, die eine Ausgabe-Kodierung durchführt.
- Seien Sie sich des Kontexts bewusst, in dem Sie Eingaben interpolieren, und stellen Sie sicher, dass die geeignete Ausgabe-Kodierung in diesem Kontext durchgeführt wird.
- Wenn Sie Eingaben als HTML einfügen müssen, bereinigen Sie diese mit einer renommierten Bibliothek. Wenn Sie dies im Browser tun, verwenden Sie das Trusted Types-Framework, um sicherzustellen, dass Eingaben von Ihrer Bereinigungsfunktion verarbeitet werden.
- Implementieren Sie eine strikte CSP.

## Siehe auch

- [Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)
