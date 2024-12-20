---
title: Cross-site scripting (XSS)
slug: Web/Security/Attacks/XSS
l10n:
  sourceCommit: eb20babb96149f98bcbf7817b58e305c5297f2e1
---

Ein Cross-site Scripting (XSS)-Angriff ist ein Angriff, bei dem ein Angreifer es schafft, eine Zielwebsite dazu zu bringen, bösartigen Code auszuführen, als wäre er Teil der Website.

## Übersicht

Ein Webbrowser lädt Code von vielen verschiedenen Websites herunter und führt ihn auf dem Computer des Benutzers aus. Einige dieser Websites sind sehr vertrauenswürdig und der Benutzer nutzt sie möglicherweise für sensible Aktionen wie Finanztransaktionen oder medizinische Beratung. Bei anderen, wie z.B. einer lässigen Gaming-Website, besteht möglicherweise keine solche Vertrauensbeziehung. Das Fundament des Sicherheitsmodells des Browsers ist, dass diese Websites voneinander getrennt bleiben, sodass Code von einer Site nicht auf Objekte oder {{Glossary("credential", "Anmeldedaten")}} in einer anderen Site zugreifen kann. Dies wird als die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) bezeichnet.

![Diagramm von 2 Websites im Browser, in getrennten Welten](same-origin.svg)

Bei einem erfolgreichen XSS-Angriff kann der Angreifer die Same-Origin-Policy umgehen, indem er die Zielwebsite dazu bringt, bösartigen Code in ihrem eigenen Kontext auszuführen, als ob er vom gleichen Ursprung stamme. Der Code kann dann alles tun, was der eigene Code der Site tun könnte, einschließlich beispielsweise:

- Zugriff und/oder Änderung aller Inhalte der geladenen Seiten der Site und aller Inhalte im lokalen Speicher
- HTTP-Anfragen mit den Anmeldedaten des Benutzers ausführen, was es ermöglicht, den Benutzer zu imitieren oder auf sensible Daten zuzugreifen

![Diagramm von Angreifercode, der in der Zielwebsite ausgeführt wird](xss.svg)

Alle XSS-Angriffe hängen davon ab, dass eine Website zwei Dinge tut:

1. Eingaben akzeptiert, die von einem Angreifer erstellt worden sein könnten
2. Diese Eingaben in einer Seite einbindet, ohne sie zu _bereinigen_: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausführbar sind.

## Zwei XSS-Beispiele

In diesem Abschnitt werden wir zwei Beispielseiten durchgehen, die anfällig für einen XSS-Angriff sind.

### Code-Injektion im Browser

In diesem Beispiel nehmen wir an, die Website für die Bank des Nutzers ist `my-bank.example.com`. Der Nutzer ist normalerweise darin angemeldet, und der Code auf der Website kann auf die Kontodetails des Nutzers zugreifen und Transaktionen durchführen. Die Website möchte eine Willkommensnachricht anzeigen, personalisiert für den aktuellen Nutzer. Sie zeigt die Begrüßung in einem {{htmlelement("Heading_Elements", "heading")}}-Element an:

```html
<h1 id="welcome"></h1>
```

Die Seite erwartet, den Namen des aktuellen Nutzers in einem [URL-Parameter](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#parameters) zu finden. Sie extrahiert den Parameterwert und verwendet diesen Wert, um eine personalisierte Begrüßungsnachricht zu erstellen:

```js
const params = new URLSearchParams(window.location.search);
const user = params.get("user");
const welcome = document.querySelector("#welcome");

welcome.innerHTML = `Welcome back, ${user}!`;
```

Angenommen, diese Seite wird von `https://my-bank.example.com/welcome` bedient. Um die Schwachstelle auszunutzen, sendet ein Angreifer dem Benutzer einen Link wie diesen:

```html
<a
  href="https://my-bank.example.com/welcome?user=<img src=x onerror=alert('hello!')>">
  Get a free kitten!</a
>
```

Wenn der Benutzer auf den Link klickt:

1. Lädt der Browser die Seite.
2. Die Seite extrahiert den URL-Parameter mit dem Namen `user`, dessen Wert `<img src=x onerror=alert("hello!")>` ist.
3. Die Seite weist diesen Wert der `innerHTML`-Eigenschaft des `welcome`-Elements zu, was ein neues {{htmlelement("img")}}-Element erstellt, das einen `src`-Attributwert von `x` hat.
4. Da der `src`-Wert einen Fehler generiert, wird die `onerror`-Eigenschaft des [Ereignishandler](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_%e2%80%94_dont_use_these) ausgeführt, und der Angreifer bekommt die Gelegenheit, seinen Code auf der Seite auszuführen.

In diesem Fall zeigt der Code nur eine Warnung, aber auf einer echten Banking-Website könnte der Angreifercode alles tun, was der eigentliche Front-End-Code der Bank tun könnte.

### Code-Injektion im Server

In diesem Beispiel betrachten wir eine Website mit einer Suchfunktion. Das HTML für die Suchseite könnte folgendermaßen aussehen:

```html
<h1>Search</h1>

<form action="/results">
  <label for="mySearch">Search for an item:</label>
  <input id="mySearch" type="search" name="search" />
  <input type="submit" />
</form>
```

Wenn der Benutzer einen Suchbegriff eingibt und "Absenden" klickt, macht der Browser eine GET-Anfrage an "/results", inklusive des Suchbegriffs als URL-Parameter, wie folgt:

```plain
https://example.org/results?search=bananas
```

Der Server möchte eine Liste der Suchergebnisse anzeigen, mit einem Titel, der angibt, wonach der Nutzer gesucht hat. Er extrahiert den Suchbegriff aus dem URL-Parameter. So könnte das in [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) aussehen:

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

1. Sendet der Browser eine GET-Anfrage an den Server. Der URL-Parameter der Anfrage enthält den bösartigen Code.
2. Der Server extrahiert den URL-Parameterwert und bettet ihn in die Seite ein.
3. Der Server gibt die Seite an den Browser zurück, der sie ausführt.

## Aufbau eines XSS-Angriffs

Wie alle XSS-Angriffe sind diese beiden Beispiele möglich, weil die Website:

1. Eingaben verwendet, die von einem Angreifer erstellt worden sein könnten
2. Diese Eingaben in die Seite einbindet, ohne sie zu bereinigen.

Beide Beispiele verwenden denselben Vektor für die bösartige Eingabe: den URL-Parameter. Es gibt jedoch andere Vektoren, die Angreifer nutzen können.

Zum Beispiel betrachten Sie einen Blog mit Kommentaren. In einem solchen Fall ermöglicht die Website:

1. Jedem, Kommentare zu übermitteln, indem ein {{htmlelement("form")}}-Element verwendet wird
2. Die Kommentare in einer Datenbank zu speichern
3. Die Kommentare in den Seiten einzubinden, die die Website an andere Benutzer ausliefert.

Wenn die Kommentare nicht bereinigt werden, sind sie potenzielle Vektoren für XSS. Diese Art von Angriff wird manchmal als _gespeichertes_ oder _persistentes_ XSS bezeichnet und ist besonders schwerwiegend, da der infizierte Inhalt allen Benutzern, die die Seite aufrufen, jedes Mal, wenn sie darauf zugreifen, serviert wird.

### Client- und Server-XSS

Ein großer Unterschied zwischen den beiden Beispielen ist, dass der bösartige Code in unterschiedlichen Teilen des Codes der Website injiziert wird, was die Architektur der jeweiligen Website widerspiegelt.

Eine Website, die Client-seitiges Rendering verwendet, wie eine {{Glossary("SPA", "Single-Page-Anwendung")}}, modifiziert Seiten im Browser, indem Web-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) entweder direkt oder indirekt durch ein Framework wie React verwendet werden. Es ist im Laufe dieses Prozesses, dass die XSS-Injektion passieren wird. Das sehen wir im ersten Beispiel: Der bösartige Code wird im Browser injiziert, indem ein Skript auf der Seite den URL-Parameterwert der [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft zuweist, die ihren Wert als HTML-Code interpretiert.

Eine Website, die Server-seitiges Rendering verwendet, erstellt Seiten auf dem Server, mithilfe eines Frameworks wie Django oder Express, meistens indem Werte in Seitentemplates eingefügt werden. XSS-Injektion, wenn überhaupt, wird während des Templating-Prozesses im Server passieren. Das sehen wir im zweiten Beispiel: Der Code wird im Server injiziert, indem der Express-Code den URL-Parameterwert in das Dokument einfügt, das er zurückgibt. Der XSS-Angriffscode wird dann ausgeführt, wenn der Browser die Seite auswertet.

In beiden Fällen ist der allgemeine Ansatz zur Verteidigung derselbe, und wir werden dies im nächsten Abschnitt im Detail besprechen. Allerdings werden die spezifischen Werkzeuge und APIs, die Sie verwenden werden, unterschiedlich sein.

## Abwehrmaßnahmen gegen XSS

Wenn Sie externe Eingaben in die Seiten Ihrer Website einbinden müssen, gibt es zwei Hauptabwehrmechanismen gegen XSS:

1. Verwenden Sie _Output-Encoding_ und _Bereinigung_, um zu verhindern, że Eingaben ausführbar werden. Wenn Sie Inhalte im Browser rendern, können Sie die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) verwenden, um sicherzustellen, dass Eingaben durch eine Bereinigungsfunktion geleitet werden, bevor sie in die Seite aufgenommen werden.
2. Verwenden Sie eine [Content Security Policy](/de/docs/Web/HTTP/CSP) (CSP), um dem Browser mitzuteilen, welche JavaScript- oder CSS-Ressourcen ausgeführt werden dürfen. Dies ist eine Backup-Verteidigung: Wenn die erste Verteidigung fehlschlägt und ausführbare Eingaben in eine Seite gelangen, sollte eine richtig konfigurierte CSP verhindern, dass der Browser sie ausführt.

### Output Encoding

_Output Encoding_ ist der Prozess, bei dem Zeichen in der Eingabezeichenkette, die potenziell gefährlich sind, "escaped" werden, sodass sie als Text behandelt werden, anstatt als Teil einer Sprache wie HTML.

Dies ist die geeignete Wahl, wenn Sie Eingaben als Text behandeln möchten, zum Beispiel, weil Ihre Website Templates verwendet, die Eingaben in Inhalte interpolieren, wie in diesem [Django-Template](https://docs.djangoproject.com/en/5.1/ref/templates/language/):

```django
<p>You searched for \{{ search_term }}.</p>
```

Die meisten modernen Templating-Engines führen automatisch Output Encoding durch. Zum Beispiel führt die Templating-Engine von Django die folgenden Konvertierungen durch:

- `<` wird in `&lt;` konvertiert
- `>` wird in `&gt;` konvertiert
- `'` wird in `&#x27;` konvertiert
- `"` wird in `&quot;` konvertiert
- `&` wird in `&amp;` konvertiert

Das bedeutet, dass wenn Sie `<img src=x onerror=alert('XSS!')>` in das obige Django-Template eingeben, es konvertiert wird zu `&lt;img src=x onerror=alert(&#x27;XSS!&#x27;)&gt;`, was als folgender Text angezeigt wird:

> Sie haben gesucht nach &lt;img src=x onerror=alert('XSS!')&gt;.

Ähnlich, wenn Sie Client-seitiges Rendering mit React machen, werden eingebettete Werte in JSX automatisch kodiert. Zum Beispiel:

```jsx
import React from "react";

export function App(props) {
  return <div>Hello, {props.name}!</div>;
}
```

Wenn wir `<img src=x onerror=alert('XSS!')>` in `props.name` übergeben, wird es gerendert als:

> Hallo, &lt;img src=x onerror=alert('XSS!')&gt;!

Ein wesentlicher Bestandteil der Verhinderung von XSS-Angriffen ist die Verwendung einer renommierten Templating-Engine, die robustes Output Encoding durchführt, und deren Dokumentation zu lesen, um etwaige Einschränkungen bezüglich des Schutzes zu verstehen, den sie bietet.

#### Dokumentkontexte

Selbst wenn Sie eine Templating-Engine verwenden, die HTML automatisch kodiert, müssen Sie sich darüber im Klaren sein, an welcher Stelle im Dokument Sie nicht vertrauenswürdige Inhalte einfügen. Angenommen, Sie haben ein Django-Template wie dieses:

```django
<div>\{{ my_input }}</div>
```

In diesem Kontext befindet sich die Eingabe innerhalb von `<div>`-Tags, sodass der Browser es als HTML auswertet. Also müssen Sie sich gegen den Fall schützen, dass `my_input` HTML ist, das ausführbaren Code definiert, wie `<img src=x onerror="alert('XSS')">`. Die im Django eingebaute Ausgabe-Kodierung verhindert diesen Angriff, indem sie Zeichen wie `<` und `>` als HTML-Entities `&lt;` und `&gt;` kodiert.

Angenommen jedoch, das Template sieht folgendermaßen aus:

```django
<div \{{ my_input }}></div>
```

In diesem Kontext behandelt der Browser die Variable `my_input` als HTML-Attribut. Wenn `my_input` `onmouseover="alert('XSS')"` ist, verhindert die Ausgabe-Kodierung, die Django bereitstellt, den Angriff nicht.

Der Browser verwendet unterschiedliche Regeln, um verschiedene Teile einer Webseite zu verarbeiten — HTML-Elemente und deren Inhalte, HTML-Attribute, Inline-Stile, Inline-Skripte. Die Art der Kodierung, die durchgeführt werden muss, unterscheidet sich je nach Kontext, in den die Eingabe interpoliert wird.

Was in einem Kontext sicher ist, kann in einem anderen unsicher sein, und es ist notwendig, den Kontext zu verstehen, in dem Sie unzuverlässige Inhalte einfügen, und jede spezielle Behandlung umzusetzen, die dies erfordert.

- **HTML-Kontexte**: Eingabe, die zwischen den Tags der meisten HTML-Elemente (außer {{htmlelement("style")}} oder {{htmlelement("script")}}) eingefügt wird, wird als HTML interpretiert. Die von Template-Engines angewendete Kodierung bezieht sich hauptsächlich auf diesen Kontext.
- **HTML-Attribut-Kontexte**: Das Einfügen von Eingaben als HTML-Attributwerte ist manchmal sicher und manchmal nicht, abhängig vom Attribut. Insbesondere Attributen wie `onblur` sind unsicher, ebenso wie das [`src`](/de/docs/Web/HTML/Element/iframe#src)-Attribut des {{htmlelement("iframe")}}-Elements.

  Es ist auch wichtig, Platzhalter für eingefügte Attributwerte zu zitieren, oder ein Angreifer könnte ein zusätzliches unsicheres Attribut in den bereitgestellten Wert einfügen. Zum Beispiel zitiert dieses Template keinen eingefügten Wert:

  ```django example-bad
  <div class=\{{ my_class }}>...</div>
  ```

  Ein Angreifer kann dies ausnutzen, indem er ein Ereignishandler-Attribut mit einer Eingabe wie `some_id onmouseover="alert('XSS!')"` einfügt. Um den Angriff zu verhindern, zitieren Sie den Platzhalter:

  ```django example-good
    <div class="\{{ my_class }}">...</div>
  ```

- **JavaScript- und CSS-Kontexte**: Das Einfügen von Eingaben innerhalb von {{htmlelement("script")}}- oder {{htmlelement("style")}}-Tags ist fast immer unsicher.

### Bereinigung

Templating-Engines ermöglichen es Entwicklern typischerweise, die Ausgabe-Kodierung zu deaktivieren. Dies ist notwendig, wenn Entwickler unzuverlässige Inhalte als HTML einfügen möchten, nicht als Text. Beispielsweise deaktiviert der [`safe`](https://docs.djangoproject.com/en/5.0/ref/templates/language/#how-to-turn-it-off)-Filter in Django die Output-Encoding, und in React hat [`dangerouslySetInnerHTML`](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html) denselben Effekt.

In diesem Fall liegt es an dem Entwickler sicherzustellen, dass der Inhalt sicher ist, indem er ihn bereinigt.

_Bereinigung_ ist der Prozess, bei dem unsichere Merkmale aus einer HTML-Zeichenkette entfernt werden: beispielsweise {{htmlelement("script")}}-Tags oder Inline-Ereignishandler. Da die Bereinigung, wie auch die Ausgabe-Kodierung, schwer richtig zu machen ist, ist es ratsam, eine anerkannte Drittanbieter-Bibliothek dafür zu verwenden. [DOMPurify](https://github.com/cure53/DOMPurify) wird von vielen Experten empfohlen, darunter [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#html-sanitization).

Zum Beispiel, betrachten Sie eine HTML-Zeichenkette wie:

```html
<div>
  <img src="x" onerror="alert('hello!')" />
  <script>
    alert("hello!");
  </script>
</div>
```

Wenn wir dies an DOMPurify übergeben, wird es zurückgegeben:

```html
<div>
  <img src="x" />
</div>
```

### Vertrauenswürdige Typen

Eine Funktion zu haben, die eine gegebene Eingabezeichenkette bereinigen kann, ist eine Sache, aber alle Stellen in einem Codebestand zu finden, an denen Eingabezeichenketten bereinigt werden müssen, kann an sich ein sehr schwieriges Problem sein.

Wenn Sie clientseitiges Rendering im Browser implementieren, gibt es eine Reihe von Web-APIs, die unsicher sind, wenn sie mit nicht bereinigtem unzuverlässigem Inhalt aufgerufen werden.

Zum Beispiel interpretieren die folgenden APIs ihre Zeichenkettenargumente als HTML und verwenden sie, um das Seiten-DOM zu aktualisieren:

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) (wird auch intern von Reacts `dangerouslySetInnerHTML` verwendet)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Document.write()`](/de/docs/Web/API/Document/write)

Andere APIs führen ihre Argumente direkt als JavaScript aus. Zum Beispiel:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) ermöglicht es einem Entwickler, sicher zu sein, dass Eingaben immer bereinigt werden, bevor sie an eine dieser APIs übergeben werden.

Der Schlüssel zur Durchsetzung der Verwendung vertrauenswürdiger Typen ist die [`require-trusted-types-for`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive. Wenn diese Direktive gesetzt ist, wird das Übergeben von Zeichenkettenargumenten an unsichere APIs eine Ausnahme werfen:

```js example-bad
const userInput = "I might be XSS";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Stattdessen muss ein Entwickler einen _vertrauenswürdigen Typ_ an eine dieser APIs übergeben. Ein vertrauenswürdiger Typ ist ein Objekt, das aus einer Zeichenkette von einem [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) Objekt erstellt wurde, dessen Implementierung vom Entwickler definiert wird. Zum Beispiel:

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
> Die Trusted Types API stellt keine Bereinigungsfunktion bereit: Sie ist ein Framework, in dem ein Entwickler sicher sein kann, dass eine Bereinigungsfunktion, die sie bereitstellen, aufgerufen wurde. Im obigen Beispiel verwendet der Entwickler DOMPurify als Bereiniger für HTML-Einleitungen, innerhalb des Trusted Types-Frameworks.

Die Trusted Types API hat noch keine gute Unterstützung über verschiedene Browser hinweg, aber wenn dies der Fall ist, wird sie eine wichtige Verteidigung gegen DOM-basierte XSS-Angriffe sein.

### Einsatz einer CSP

Output-Encoding und Bereinigung zielen darauf ab, zu verhindern, dass bösartige Skripte in die Seiten einer Website gelangen. Eine der Hauptfunktionen einer Content Security Policy ist jedoch, zu verhindern, dass bösartige Skripte ausgeführt werden, selbst wenn sie in den Seiten einer Website vorhanden sind. Das heißt, es ist eine Sicherung, falls die anderen Abwehrmaßnahmen fehlschlagen.

Der empfohlene Ansatz zur Minderung von XSS mit einer CSP ist eine [strenge CSP](/de/docs/Web/HTTP/CSP#strict_csp), die eine [Nonce](/de/docs/Web/HTTP/CSP#nonces) oder einen [Hash](/de/docs/Web/HTTP/CSP#hashes) verwendet, um dem Browser mitzuteilen, welche Skripte er im Dokument erwartet. Wenn es einem Angreifer gelingt, bösartige `<script>`-Elemente einzufügen, haben diese nicht den korrekten Nonce oder Hash, und der Browser wird sie nicht ausführen. Zusätzlich werden verschiedene gängige XSS-Vektoren vollständig verhindert: inline Ereignishandler, `javascript:` URLs und APIs wie `eval()`, die ihre Argumente als JavaScript ausführen.

### Zusammenfassung der Verteidigungsmaßnahmen

Wir können die oben genannten Verteidigungsmaßnahmen wie folgt zusammenfassen:

- Beim Interpolieren von Eingaben in eine Seite, entweder im Browser oder auf dem Server, verwenden Sie eine Templating-Engine, die Output Encoding durchführt.
- Seien Sie sich des Kontexts bewusst, in dem Sie Eingaben interpolieren, und stellen Sie sicher, dass die geeignete Ausgabe-Kodierung in diesem Kontext durchgeführt wird.
- Wenn Sie Eingaben als HTML einfügen müssen, bereinigen Sie diese mit einer anerkannten Bibliothek. Wenn Sie dies im Browser tun, verwenden Sie das Trusted Types-Framework, um sicherzustellen, dass Eingaben von Ihrer Bereinigungsfunktion verarbeitet werden.
- Implementieren Sie eine strenge CSP.

## Siehe auch

- [Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Security", "1", "0", "1")}}
</section>
