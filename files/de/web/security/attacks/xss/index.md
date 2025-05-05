---
title: Cross-site-Scripting (XSS)
slug: Web/Security/Attacks/XSS
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

Ein Cross-site-Scripting (XSS)-Angriff ist ein Angriff, bei dem ein Angreifer eine Zielseite dazu bringen kann, bösartigen Code auszuführen, als ob dieser Teil der Website wäre.

## Überblick

Ein Webbrowser lädt Code von vielen verschiedenen Websites herunter und führt ihn auf dem Computer des Benutzers aus. Einige dieser Websites sind sehr vertrauenswürdig, und der Benutzer nutzt sie möglicherweise für sensible Operationen wie Finanztransaktionen oder medizinische Beratung. Bei anderen, wie einer Gelegenheitsspieleseite, hat der Benutzer möglicherweise keine solche Vertrauensbeziehung. Die Grundlage des Sicherheitsmodells des Browsers ist, dass diese Websites voneinander getrennt bleiben sollten, damit Code von einer Website nicht auf Objekte oder {{Glossary("credential", "Anmeldedaten")}} einer anderen Website zugreifen kann. Dies wird als [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) bezeichnet.

![Diagramm von 2 Websites im Browser, in separaten Welten](same-origin.svg)

Bei einem erfolgreichen XSS-Angriff ist der Angreifer in der Lage, die Same-Origin-Policy zu umgehen, indem er die Zielseite dazu bringt, bösartigen Code in ihrem eigenen Kontext auszuführen, als ob es sich um die gleiche Herkunft handeln würde. Der Code kann dann alles tun, was der eigene Code der Seite tun kann, darunter beispielsweise:

- Zugriff auf und/oder Änderung des gesamten Inhalts der geladenen Seiten der Website und jeglichen Inhalts im lokalen Speicher
- Durchführung von HTTP-Anfragen mit den Anmeldedaten des Benutzers, was es dem Angreifer ermöglicht, den Benutzer zu imitieren oder auf sensible Daten zuzugreifen

![Diagramm von Angreifercode, der in der Zielwebsite ausgeführt wird](xss.svg)

Alle XSS-Angriffe hängen davon ab, dass eine Website zwei Dinge tut:

1. Erhalten von Eingaben, die vom Angreifer gestaltet worden sein könnten
2. Einfügen dieser Eingaben in eine Seite, ohne sie _zu bereinigen_: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausführbar sind.

## Zwei XSS-Beispiele

In diesem Abschnitt gehen wir durch zwei Beispielseiten, die für einen XSS-Angriff anfällig sind.

### Code-Injektion im Browser

In diesem Beispiel nehmen wir an, dass die Website der Bank des Benutzers `my-bank.example.com` ist. Der Benutzer ist normalerweise dort angemeldet, und der Code auf der Website kann auf die Kontodaten des Benutzers zugreifen und Transaktionen durchführen. Die Website möchte eine Willkommensnachricht anzeigen, die für den aktuellen Benutzer personalisiert ist. Sie zeigt die Begrüßung in einem {{htmlelement("Heading_Elements", "heading")}}-Element an:

```html
<h1 id="welcome"></h1>
```

Die Seite erwartet, den Namen des aktuellen Benutzers in einem [URL-Parameter](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#parameters) zu finden. Sie extrahiert den Parameterwert und verwendet den Wert, um eine personalisierte Begrüßungsnachricht zu erstellen:

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
2. Die Seite extrahiert den URL-Parameter namens `user`, dessen Wert `<img src=x onerror=alert("hello!")>` ist.
3. Die Seite weist dann diesen Wert der `innerHTML`-Eigenschaft des `welcome`-Elements zu, was ein neues {{htmlelement("img")}}-Element erstellt, das einen `src`-Attributwert von `x` hat.
4. Da der `src`-Wert einen Fehler erzeugt, wird die `onerror`-[Ereignishandler-Eigenschaft](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_%e2%80%94_dont_use_these) ausgeführt, und der Angreifer kann seinen Code auf der Seite ausführen.

In diesem Fall zeigt der Code lediglich eine Benachrichtigung an, aber in einer echten Bankwebsite könnte der Angreifercode alles tun, was der eigene Frontend-Code der Bank tun könnte.

### Code-Injektion im Server

In diesem Beispiel betrachten wir eine Website mit einer Suchfunktion. Das HTML für die Suchseite könnte so aussehen:

```html
<h1>Search</h1>

<form action="/results">
  <label for="mySearch">Search for an item:</label>
  <input id="mySearch" type="search" name="search" />
  <input type="submit" />
</form>
```

Wenn der Benutzer einen Suchbegriff eingibt und auf "Submit" klickt, sendet der Browser eine GET-Anfrage an "/results", einschließlich des Suchbegriffs als URL-Parameter, wie hier:

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

Um diese Schwachstelle auszunutzen, sendet ein Angreifer dem Benutzer einen Link wie diesen:

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

Wie alle XSS-Angriffe sind diese beiden Beispiele möglich, weil die Website:

1. Eingaben verwendet, die vom Angreifer gestaltet worden sein könnten
2. Die Eingaben auf der Seite einfügt, ohne sie zu bereinigen.

In beiden Beispielen wird derselbe Vektor für die bösartige Eingabe verwendet: der URL-Parameter. Es gibt jedoch auch andere Vektoren, die Angreifer nutzen können.

Betrachten Sie zum Beispiel einen Blog mit Kommentaren. In einem Fall wie diesem:

1. Erlaubt die Website jedem, über ein {{htmlelement("form")}}-Element Kommentare einzureichen
2. Speichert die Kommentare in einer Datenbank
3. Fügt die Kommentare in Seiten ein, die die Website anderen Benutzern bereitstellt.

Wenn die Kommentare nicht bereinigt werden, sind sie potenzielle Vektoren für XSS. Diese Art von Angriff wird manchmal als _gespeichertes_ oder _persistentes_ XSS bezeichnet und ist besonders schwerwiegend, da der infizierte Inhalt allen Benutzern, die auf die Seite zugreifen, jedes Mal bereitgestellt wird, wenn sie darauf zugreifen.

### Client- und Server-XSS

Ein großer Unterschied zwischen den beiden Beispielen ist, dass der bösartige Code an verschiedenen Stellen des Codebasis der Webseite injiziert wird, was die jeweilige Architektur der Website widerspiegelt.

Eine Website, die clientseitiges Rendering verwendet, wie eine {{Glossary("SPA", "Single-Page-App")}}, modifiziert Seiten im Browser, indem sie Web-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwendet, entweder direkt oder indirekt über ein Framework wie React. In diesem Prozess wird die XSS-Injektion stattfinden. Das sehen wir im ersten Beispiel: Der bösartige Code wird im Browser injiziert, indem ein Skript auf der Seite den URL-Parameterwert der [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft zuweist, die ihren Wert als HTML-Code interpretiert.

Eine Website, die serverseitiges Rendering verwendet, baut Seiten auf dem Server auf, indem sie ein Framework wie Django oder Express verwendet und am häufigsten Werte in Seitentemplates einfügt. Wenn es zur XSS-Injektion kommt, geschieht dies während des Templating-Prozesses auf dem Server. Das sehen wir im zweiten Beispiel: Der Code wird auf dem Server injiziert, indem der Express-Code den URL-Parameterwert in das Dokument einfügt, das er zurückgibt. Der XSS-Angriffscode wird dann ausgeführt, wenn der Browser die Seite auswertet.

In beiden Fällen ist der allgemeine Ansatz zur Abwehr derselbe, und wir werden dies im nächsten Abschnitt detailliert behandeln. Allerdings werden die spezifischen Tools und APIs, die Sie verwenden werden, unterschiedlich sein.

## Abwehrmaßnahmen gegen XSS

Wenn Sie externe Eingaben in die Seiten Ihrer Website einfügen müssen, gibt es zwei Hauptverteidigungsmaßnahmen gegen XSS:

1. Verwenden Sie _Ausgabenkodierung_ und _Bereinigung_, um zu verhindern, dass Eingaben ausführbar werden. Wenn Sie Inhalte im Browser rendern, können Sie die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) verwenden, um sicherzustellen, dass Eingaben durch eine Bereinigungsfunktion geleitet werden, bevor sie in die Seite eingefügt werden.
2. Verwenden Sie eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP), um dem Browser mitzuteilen, welche JavaScript- oder CSS-Ressourcen ausgeführt werden dürfen. Dies ist eine Sicherung: Wenn die erste Verteidigung versagt und ausführbare Eingaben in eine Seite gelangen, sollte eine richtig konfigurierte CSP verhindern, dass der Browser sie ausführt.

### Ausgabenkodierung

_Ausgabenkodierung_ ist der Prozess, bei dem Zeichen in der Eingabestring, die potenziell gefährlich sind, so behandelt werden, dass sie als Text statt als Teil einer Sprache wie HTML angesehen werden.

Dies ist die geeignete Wahl, wenn Sie Eingaben als Text behandeln wollen, zum Beispiel, weil Ihre Website Templates verwendet, die Eingaben in Inhalte interpolieren, wie in diesem [Django-Template](https://docs.djangoproject.com/en/5.1/ref/templates/language/) Auszug:

```django
<p>You searched for \{{ search_term }}.</p>
```

Die meisten modernen Template-Engines führen automatisch Ausgabenkodierung durch. Beispielsweise führt die Templating-Engine von Django die folgenden Umwandlungen durch:

- `<` wird zu `&lt;` konvertiert

- `>` wird zu `&gt;` konvertiert

- `'` wird zu `&#x27;` konvertiert

- `"` wird zu `&quot;` konvertiert

- `&` wird zu `&amp;` konvertiert

Das bedeutet, dass wenn Sie `<img src=x onerror=alert('XSS!')>` in das obige Django-Template eingeben, es in `&lt;img src=x onerror=alert(&#x27;XSS!&#x27;)&gt;` umgewandelt wird, und als folgender Text angezeigt wird:

> Sie suchten nach &lt;img src=x onerror=alert('XSS!')&gt;.

Ähnlich, wenn Sie clientseitiges Rendering mit React durchführen, werden in JSX eingebettete Werte automatisch kodiert. Betrachten Sie beispielsweise eine JSX-Komponente wie diese:

```jsx
import React from "react";

export function App(props) {
  return <div>Hello, {props.name}!</div>;
}
```

Wenn wir `<img src=x onerror=alert('XSS!')>` in `props.name` einfügen, wird es gerendert als:

> Hallo, &lt;img src=x onerror=alert('XSS!')&gt;!

Einer der wichtigsten Aspekte der Verhinderung von XSS-Angriffen ist die Verwendung einer gut etablierten Templating-Engine, die eine robuste Ausgabenkodierung durchführt, und deren Dokumentation zu lesen, um mögliche Einschränkungen des gebotenen Schutzes zu verstehen.

#### Kontext im Dokument

Auch wenn Sie eine Templating-Engine verwenden, die automatisch HTML kodiert, müssen Sie sich bewusst sein, wo im Dokument Sie nicht vertrauenswürdigen Inhalt einfügen. Stellen Sie sich zum Beispiel ein Django-Template wie dieses vor:

```django
<div>\{{ my_input }}</div>
```

In diesem Kontext befindet sich die Eingabe innerhalb von `<div>` Tags, sodass der Browser sie als HTML interpretiert. Daher müssen Sie gegen den Fall schützen, in dem `my_input` HTML ist, das ausführbaren Code definiert, wie `<img src=x onerror="alert('XSS')">`. Die in Django eingebaute Ausgabenkodierung verhindert diesen Angriff, indem sie Zeichen wie `<` und `>` als HTML-Entitäten `&lt;` und `&gt;` kodiert.

Wenn das Template jedoch so aussieht:

```django
<div \{{ my_input }}></div>
```

In diesem Kontext behandelt der Browser die `my_input` Variable als HTML-Attribut. Falls `my_input` `onmouseover="alert('XSS')"` ist, verhindert die von Django bereitgestellte Ausgabenkodierung den Angriff nicht.

Der Browser verwendet unterschiedliche Regeln zur Verarbeitung verschiedener Teile einer Webseite — HTML-Elemente und deren Inhalte, HTML-Attribute, Inline-Stile, Inline-Skripte. Die Art der Kodierung, die erforderlich ist, hängt davon ab, in welchem Kontext die Eingaben interpoliert werden.

Was in einem Kontext sicher ist, kann in einem anderen unsicher sein. Es ist notwendig, den Kontext, in dem Sie nicht vertrauenswürdige Inhalte einfügen, zu verstehen und jede notwendige Spezialbehandlung, die erforderlich ist, zu implementieren.

- **HTML-Kontexte**: Eingaben, die zwischen den Tags der meisten HTML-Elemente (außer für {{htmlelement("style")}} oder {{htmlelement("script")}}) eingefügt werden, werden als HTML interpretiert. Die von Templating-Engines angewendete Kodierung bezieht sich hauptsächlich auf diesen Kontext.
- **HTML-Attributkontexte**: Das Einfügen von Eingaben als HTML-Attributwerte ist manchmal sicher und manchmal nicht, je nach Attribut. Besonders unsicher sind Ereignis-Handler-Attribute wie `onblur`, ebenso wie das [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src) Attribut des {{htmlelement("iframe")}} Elements.

  Es ist auch wichtig, Platzhalter für eingefügte Attributwerte zu zitieren, da ein Angreifer möglicherweise ein zusätzliches unsicheres Attribut in den bereitgestellten Wert einfügen kann. Zum Beispiel zitiert diese Vorlage einen eingefügten Wert nicht:

  ```django example-bad
  <div class=\{{ my_class }}>...</div>
  ```

  Ein Angreifer kann dies ausnutzen, um ein Ereignis-Handler-Attribut zu injizieren, indem er Eingaben wie `some_id onmouseover="alert('XSS!')"` verwendet. Um den Angriff zu verhindern, zitiere den Platzhalter:

  ```django example-good
    <div class="\{{ my_class }}">...</div>
  ```

- **JavaScript- und CSS-Kontexte**: Eingaben innerhalb von {{htmlelement("script")}} oder {{htmlelement("style")}} Tags einzufügen, ist fast immer unsicher.

### Bereinigung

Templating-Engines erlauben es Entwicklern typischerweise, die Ausgabenkodierung zu deaktivieren. Dies ist erforderlich, wenn Entwickler nicht vertrauenswürdige Inhalte als HTML und nicht als Text einfügen möchten. Zum Beispiel deaktiviert der [`safe`](https://docs.djangoproject.com/en/5.0/ref/templates/language/#how-to-turn-it-off) Filter in Django die Ausgabenkodierung, und in React hat [`dangerouslySetInnerHTML`](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html) denselben Effekt.

In diesem Fall liegt es am Entwickler, sicherzustellen, dass der Inhalt sicher ist, indem er ihn bereinigt.

_Bereinigung_ ist der Prozess des Entfernens unsicherer Merkmale aus einer HTML-Zeichenkette: Zum Beispiel {{htmlelement("script")}} Tags oder Inline-Ereignishandler. Da die Bereinigung, wie die Ausgabenkodierung, schwierig korrekt umzusetzen ist, wird empfohlen, eine renommierte Drittanbieterbibliothek dafür zu verwenden. [DOMPurify](https://github.com/cure53/DOMPurify) wird von vielen Experten einschließlich [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#html-sanitization) empfohlen.

Betrachten Sie zum Beispiel eine HTML-Zeichenkette wie:

```html
<div>
  <img src="x" onerror="alert('hello!')" />
  <script>
    alert("hello!");
  </script>
</div>
```

Wenn wir dies an DOMPurify übergeben, wird es Folgendes zurückgeben:

```html
<div>
  <img src="x" />
</div>
```

### Trusted Types

Eine Funktion zu haben, die eine gegebene Eingabezeichenkette bereinigen kann, ist das eine, aber alle Stellen in einem Codebasis zu finden, an denen Eingabezeichenketten bereinigt werden müssen, kann an sich ein sehr schwieriges Problem sein.

Wenn Sie clientseitiges Rendering im Browser implementieren, gibt es eine Reihe von Web-APIs, die unsicher sind, wenn sie mit unbereinigtem nicht vertrauenswürdigem Inhalt aufgerufen werden.

Beispielsweise interpretieren die folgenden APIs ihre Zeichenkettenargumente als HTML und verwenden sie, um den Page-DOM zu aktualisieren:

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) (das auch intern von React's `dangerouslySetInnerHTML` verwendet wird)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Document.write()`](/de/docs/Web/API/Document/write)

Andere APIs führen ihre Argumente direkt als JavaScript aus. Beispielsweise:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) ermöglicht es einem Entwickler, sicherzustellen, dass Eingaben immer bereinigt werden, bevor sie an eine dieser APIs übergeben werden.

Der Schlüssel zur Durchsetzung der Verwendung vertrauenswürdiger Typen ist die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive. Wenn diese Direktive festgelegt ist, wird das Übergeben von Zeichenkettenargumenten an unsichere APIs eine Ausnahmebedingung auslösen:

```js example-bad
const userInput = "I might be XSS";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Stattdessen muss ein Entwickler einen _vertrauenswürdigen Typ_ an eine dieser APIs übergeben. Ein vertrauenswürdiger Typ ist ein Objekt, das aus einer Zeichenkette von einem [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt erstellt wurde, dessen Implementierung vom Entwickler definiert ist. Zum Beispiel:

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
> Die Trusted Types API bietet keine Bereinigungsfunktion: Es ist ein Framework, in dem ein Entwickler sicher sein kann, dass eine von ihm bereitgestellte Bereinigungsfunktion aufgerufen wurde. Im obigen Beispiel verwendet der Entwickler DOMPurify als Bereiniger für HTML-Senken innerhalb des Trusted Types Frameworks.

Die Trusted Types API hat noch keine gute Unterstützung in allen Browsern, aber wenn dies der Fall ist, wird sie eine wichtige Verteidigung gegen DOM-basierte XSS-Angriffe sein.

### Bereitstellung einer CSP

Ausgabenkodierung und Bereinigung zielen darauf ab, zu verhindern, dass bösartige Skripte in die Seiten einer Website gelangen. Eine der Hauptfunktionen einer Content-Security-Policy besteht darin, zu verhindern, dass bösartige Skripte ausgeführt werden, selbst wenn sie in den Seiten einer Website enthalten sind. Das heißt, es ist eine Sicherung für den Fall, dass die anderen Verteidigungsmittel versagen.

Der empfohlene Ansatz zur Abschwächung von XSS mit einer CSP ist eine [strikte CSP](/de/docs/Web/HTTP/Guides/CSP#strict_csp), die einen [Nonce](/de/docs/Web/HTTP/Guides/CSP#nonces) oder ein [Hash](/de/docs/Web/HTTP/Guides/CSP#hashes) verwendet, um dem Browser anzugeben, welche Skripte er im Dokument erwartet. Wenn es einem Angreifer gelingt, bösartige `<script>`-Elemente einzuschleusen, haben sie nicht den korrekten Nonce oder Hash, und der Browser wird sie nicht ausführen. Darüber hinaus werden verschiedene häufige XSS-Vektoren vollständig verboten: Inline-Ereignishandler, `javascript:` URLs und APIs wie `eval()`, die ihre Argumente als JavaScript ausführen.

### Zusammenfassung der Abwehrmaßnahmen

Wir können die oben genannten Verteidigungsmaßnahmen wie folgt zusammenfassen:

- Bei der Interpolation von Eingaben in eine Seite, entweder im Browser oder auf dem Server, verwenden Sie eine Templating-Engine, die eine Ausgabenkodierung durchführt.
- Seien Sie sich des Kontexts bewusst, in dem Sie Eingaben interpolieren, und stellen Sie sicher, dass die entsprechende Ausgabenkodierung in diesem Kontext vorgenommen wird.
- Wenn Sie Eingaben als HTML aufnehmen müssen, bereinigen Sie sie mit einer renommierten Bibliothek. Wenn Sie dies im Browser tun, verwenden Sie das Trusted Types Framework, um sicherzustellen, dass Eingaben durch Ihre Bereinigungsfunktion verarbeitet werden.
- Implementieren Sie eine strikte CSP.

## Siehe auch

- [Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)
