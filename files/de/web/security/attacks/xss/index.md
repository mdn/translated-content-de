---
title: Cross-site scripting (XSS)
slug: Web/Security/Attacks/XSS
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Ein Cross-Site Scripting (XSS)-Angriff ist einer, bei dem ein Angreifer in der Lage ist, eine Zielwebsite dazu zu bringen, bösartigen Code auszuführen, als ob er ein Teil der Website wäre.

## Überblick

Ein Webbrowser lädt Code von vielen verschiedenen Websites herunter und führt ihn auf dem Computer des Nutzers aus. Einige dieser Websites werden sehr vertrauenswürdig sein, und der Nutzer könnte sie für sensible Operationen nutzen, wie finanzielle Transaktionen oder medizinische Beratung. Bei anderen, wie einer Gelegenheits-Spielseite, könnte der Nutzer keine solche Vertrauensbeziehung haben. Die Grundlage des Sicherheitsmodells des Browsers besteht darin, dass diese Seiten voneinander getrennt bleiben sollten, damit kein Code einer Website auf Objekte oder {{Glossary("credential", "Zugangsdaten")}} einer anderen zugreifen kann. Dies wird die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) genannt.

![Diagramm von 2 Seiten im Browser, in separaten Welten](same-origin.svg)

Bei einem erfolgreichen XSS-Angriff ist der Angreifer in der Lage, die Same-Origin-Policy zu untergraben, indem er die Zielwebsite dazu bringt, bösartigen Code in ihrem eigenen Kontext auszuführen, als ob es sich um denselben Ursprung handeln würde. Der Code kann dann alles tun, was der eigene Code der Website tun kann, einschließlich beispielsweise:

- Zugriff auf und/oder Modifizierung des gesamten Inhalts der geladenen Seiten der Website und aller Inhalte im lokalen Speicher
- Ausführen von HTTP-Anfragen mit den Zugangsdaten des Nutzers, wodurch sie sich als Nutzer ausgeben oder auf sensible Daten zugreifen können

![Diagramm des Angreifer-Codes, der auf der Zielwebsite ausgeführt wird](xss.svg)

Alle XSS-Angriffe hängen davon ab, dass eine Website zwei Dinge tut:

1. Annahme einer Eingabe, die von einem Angreifer manipuliert worden sein könnte
2. Aufnahme dieser Eingabe in eine Seite ohne sie zu _säubern_: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausführbar wird.

## Zwei XSS-Beispiele

In diesem Abschnitt werden wir zwei Beispielseiten durchgehen, die für einen XSS-Angriff anfällig sind.

### Codeinjektion im Browser

In diesem Beispiel nehmen wir an, dass die Website der Bank des Nutzers `my-bank.example.com` ist. Der Nutzer ist typischerweise dort angemeldet, und der Code auf der Website kann auf die Kontodetails des Nutzers zugreifen und Transaktionen durchführen. Die Website möchte eine Willkommensnachricht anzeigen, personalisiert für den aktuellen Nutzer. Sie zeigt das Willkommen in einem {{htmlelement("Heading_Elements", "heading")}}-Element an:

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

Angenommen, diese Seite wird von `https://my-bank.example.com/welcome` bereitgestellt. Um die Schwachstelle auszunutzen, sendet ein Angreifer dem Nutzer einen Link wie diesen:

```html
<a
  href="https://my-bank.example.com/welcome?user=<img src=x onerror=alert('hello!')>">
  Get a free kitten!</a
>
```

Wenn der Nutzer auf den Link klickt:

1. Lädt der Browser die Seite.
2. Die Seite extrahiert den URL-Parameter mit dem Namen `user`, dessen Wert `<img src=x onerror=alert("hello!")>` ist.
3. Die Seite weist dann diesen Wert der `innerHTML`-Eigenschaft des `welcome`-Elements zu, wodurch ein neues {{htmlelement("img")}}-Element erstellt wird, das einen `src`-Attributwert von `x` hat.
4. Da der `src`-Wert einen Fehler erzeugt, wird die `onerror`-[Ereignisbehandlereigenschaft](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_%e2%80%94_dont_use_these) ausgeführt, und der Angreifer kann seinen Code auf der Seite ausführen.

In diesem Fall zeigt der Code nur eine Warnung an, aber in einer echten Banking-Website könnte der Angreifer-Code alles tun, was der eigene Frontend-Code der Bank tun könnte.

### Codeinjektion im Server

In diesem Beispiel betrachten wir eine Website mit einer Suchfunktion. Das HTML für die Suchseite könnte so aussehen:

```html
<h1>Search</h1>

<form action="/results">
  <label for="mySearch">Search for an item:</label>
  <input id="mySearch" type="search" name="search" />
  <input type="submit" />
</form>
```

Wenn der Nutzer einen Suchbegriff eingibt und "Absenden" klickt, macht der Browser eine GET-Anfrage an "/results" und enthält den Suchbegriff als URL-Parameter, wie folgt:

```plain
https://example.org/results?search=bananas
```

Der Server möchte eine Liste der Suchergebnisse anzeigen, mit einem Titel, der angibt, wonach der Nutzer gesucht hat. Er extrahiert den Suchbegriff aus dem URL-Parameter. So könnte dies in [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) aussehen:

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
2. Der Server extrahiert den URL-Parameterwert und bettet ihn in die Seite ein.
3. Der Server gibt die Seite an den Browser zurück, der sie ausführt.

## Anatomie eines XSS-Angriffs

Wie bei allen XSS-Angriffen sind diese beiden Beispiele möglich, weil die Website:

1. Eingaben verwendet, die von einem Angreifer manipuliert worden sein könnten
2. Die Eingabe in die Seite aufnimmt, ohne sie zu säubern.

Beide Beispiele verwenden denselben Weg für die bösartige Eingabe: den URL-Parameter. Es gibt jedoch andere Wege, die Angreifer nutzen können.

Zum Beispiel stellen Sie sich einen Blog mit Kommentaren vor. In einem solchen Fall:

1. Erlaubt die Website jedem, Kommentare über ein {{htmlelement("form")}}-Element einzureichen
2. Speichert die Kommentare in einer Datenbank
3. Nimmt die Kommentare in Seiten auf, die der Website anderen Nutzern bereitstellt.

Wenn die Kommentare nicht gereinigt werden, sind sie potenzielle Vektoren für XSS. Diese Art von Angriff wird manchmal als _gespeichertes_ oder _persistent_ XSS bezeichnet und ist besonders schwerwiegend, da der infizierte Inhalt allen Nutzern, die auf die Seite zugreifen, jedes Mal, wenn sie darauf zugreifen, bereitgestellt wird.

### Client- und Server-XSS

Ein großer Unterschied zwischen den beiden Beispielen besteht darin, dass der bösartige Code in verschiedenen Teilen der Codebasis der Website injiziert wird, was die Architektur der jeweiligen Website widerspiegelt.

Eine Website, die client-seitiges Rendering verwendet, wie eine {{Glossary("SPA", "Single-Page-App")}}, modifiziert Seiten im Browser mit Hilfe von Web-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement), entweder direkt oder indirekt durch ein Framework wie React. In diesem Prozess erfolgt die XSS-Injektion. Das sehen wir im ersten Beispiel: Der bösartige Code wird im Browser injiziert, indem ein Skript in der Seite den Wert des URL-Parameters der [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft zuweist, die ihren Wert als HTML-Code interpretiert.

Eine Website, die server-seitiges Rendering verwendet, erstellt Seiten auf dem Server und nutzt ein Framework wie Django oder Express, meist indem Werte in Seitentemplates eingefügt werden. Wenn XSS-Injektionen passieren, geschieht dies während des Template-Prozesses auf dem Server. Das sehen wir im zweiten Beispiel: Der Code wird auf dem Server injiziert, indem der Express-Code den URL-Parameterwert in das zurückgegebene Dokument einfügt. Der XSS-Angriffscode wird dann ausgeführt, wenn der Browser die Seite auswertet.

In beiden Fällen ist der allgemeine Ansatz zur Verteidigung derselbe, und wir werden dies im nächsten Abschnitt detailliert behandeln. Die spezifischen Werkzeuge und APIs, die Sie verwenden, werden jedoch unterschiedlich sein.

## Verteidigungen gegen XSS

Wenn Sie externe Eingaben in die Seiten Ihrer Website aufnehmen müssen, gibt es zwei Hauptverteidigungen gegen XSS:

1. Verwenden Sie _Ausgabe-Codierung_ und _Sanitierung_, um zu verhindern, dass Eingaben ausführbar werden. Wenn Sie Inhalte im Browser rendern, können Sie die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) verwenden, um sicherzustellen, dass Eingaben durch eine Sanitisierungsfunktion verarbeitet werden, bevor sie in die Seite aufgenommen werden.
2. Verwenden Sie eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP), um dem Browser mitzuteilen, welche JavaScript- oder CSS-Ressourcen ausgeführt werden dürfen. Dies ist eine Backup-Abwehr: Wenn die erste Verteidigung versagt und ausführbare Eingaben in eine Seite gelangen, sollte eine richtig konfigurierte CSP verhindern, dass der Browser sie ausführt.

### Ausgabe-Codierung

_Ausgabe-Codierung_ ist der Prozess, bei dem Zeichen in der Eingabestring, die sie potenziell gefährlich machen, entkommen und somit als Text behandelt werden, anstatt als Teil einer Sprache wie HTML.

Dies ist die geeignete Wahl, wenn Sie die Eingaben als Text behandeln möchten, z. B. weil Ihre Website Vorlagen verwendet, die Eingaben in Inhalte interpolieren, wie in diesem [Django-Template](https://docs.djangoproject.com/en/5.1/ref/templates/language/) Auszug:

```django
<p>You searched for \{{ search_term }}.</p>
```

Die meisten modernen Template-Engines führen automatisch Ausgabe-Codierung durch. Zum Beispiel führt die Template-Engine von Django die folgenden Umwandlungen durch:

- `<` wird in `&lt;` umgewandelt

- `>` wird in `&gt;` umgewandelt

- `'` wird in `&#x27;` umgewandelt

- `"` wird in `&quot;` umgewandelt

- `&` wird in `&amp;` umgewandelt

Das bedeutet, dass wenn Sie `<img src=x onerror=alert('XSS!')>` in das oben genannte Django-Template übergeben, es in `&lt;img src=x onerror=alert(&#x27;XSS!&#x27;)&gt;` umgewandelt wird, was dann als folgender Text angezeigt wird:

> Sie haben nach &lt;img src=x onerror=alert('XSS!')&gt; gesucht.

Ähnlich, wenn Sie client-seitiges Rendering mit React verwenden, werden Werte, die in JSX eingebettet sind, automatisch kodiert. Betrachten Sie beispielsweise eine JSX-Komponente wie diese:

```jsx
import React from "react";

export function App(props) {
  return <div>Hello, {props.name}!</div>;
}
```

Wenn wir `<img src=x onerror=alert('XSS!')>` in `props.name` übergeben, wird es als:

> Hallo, &lt;img src=x onerror=alert('XSS!')&gt;!

gerendert.

Einer der wichtigsten Aspekte der Verhinderung von XSS-Angriffen ist die Verwendung einer anerkannten Template-Engine, die eine robuste Ausgabe-Codierung durchführt, und das Lesen ihrer Dokumentation, um alle Warnhinweise zu verstehen, die sie bietet.

#### Dokumentkontexte

Selbst wenn Sie eine Template-Engine verwenden, die automatisch HTML kodiert, müssen Sie darauf achten, wo im Dokument Sie nicht vertrauenswürdige Inhalte einfügen. Nehmen Sie zum Beispiel an, Sie haben ein Django-Template wie dieses:

```django
<div>\{{ my_input }}</div>
```

In diesem Kontext befindet sich die Eingabe innerhalb von `<div>`-Tags, sodass der Browser sie als HTML auswertet. Somit müssen Sie sich gegen den Fall schützen, dass `my_input` HTML ist, das ausführbaren Code definiert, wie `<img src=x onerror="alert('XSS')">`. Die in Django eingebaute Ausgabe-Codierung verhindert diesen Angriff, indem sie Zeichen wie `<` und `>` als HTML-Entitäten `&lt;` und `&gt;` kodiert.

Angenommen, das Template ist so:

```django
<div \{{ my_input }}></div>
```

In diesem Kontext behandelt der Browser die Variable `my_input` als ein HTML-Attribut. Da Django Anführungszeichen (`"` → `&quot;`, `'` → `&#x27;`) kodiert, wird die Nutzlast `onmouseover="alert('XSS')"` nicht ausgeführt. Allerdings wird eine nicht markierte Nutzlast wie `onmouseover=alert(1)` (oder mit Backticks, ``onmouseover=alert(`XSS`)``) ausgeführt, da Attributwerte nicht zwingend in Anführungszeichen stehen müssen und Backticks standardmäßig nicht entkommen.

Der Browser verwendet unterschiedliche Regeln, um verschiedene Teile einer Webseite zu verarbeiten — HTML-Elemente und deren Inhalte, HTML-Attribute, Inline-Stile, Inline-Skripte. Die Art der Kodierung, die vorgenommen werden muss, hängt davon ab, in welchem Kontext die Eingaben interpoliert werden.

Was in einem Kontext sicher ist, kann in einem anderen unsicher sein, und es ist notwendig, den Kontext zu verstehen, in dem Sie nicht vertrauenswürdige Inhalte einfügen, und eine entsprechende spezielle Behandlung sicherzustellen.

- **HTML-Kontexte**: Eingaben, die zwischen den Tags der meisten HTML-Elemente (außer für {{htmlelement("style")}} oder {{htmlelement("script")}}) eingefügt werden, werden als HTML interpretiert. Die von Template-Engines angewendete Kodierung konzentriert sich hauptsächlich auf diesen Kontext.
- **HTML-Attributkontexte**: Das Einfügen von Eingaben als HTML-Attributwerte ist manchmal sicher und manchmal nicht, abhängig vom Attribut. Insbesondere Attributen, die Ereignisse behandeln wie `onblur`, sind unsicher, ebenso das `src`-Attribut des {{htmlelement("iframe")}}-Elements.

  Es ist auch wichtig, Platzhalter für eingefügte Attributwerte in Anführungszeichen zu setzen, oder ein Angreifer könnte in der Lage sein, ein zusätzliches unsicheres Attribut in den bereitgestellten Wert einzufügen. Zum Beispiel zitiert dieses Template einen eingefügten Wert nicht:

  ```django example-bad
  <div class=\{{ my_class }}>...</div>
  ```

  Ein Angreifer kann dies ausnutzen, um ein Ereignisbehandlungsattribut zu injizieren, indem er eine Eingabe wie `some_id onmouseover=alert(1)` verwendet. Um den Angriff zu verhindern, zitieren Sie den Platzhalter:

  ```django example-good
    <div class="\{{ my_class }}">...</div>
  ```

- **JavaScript- und CSS-Kontexte**: Das Einfügen von Eingaben innerhalb von {{htmlelement("script")}}- oder {{htmlelement("style")}}-Tags ist fast immer unsicher.

### Sanitierung

Template-Engines erlauben es Entwicklern typischerweise, die Ausgabe-Codierung zu deaktivieren. Dies ist notwendig, wenn Entwickler nicht vertrauenswürdige Inhalte als HTML und nicht als Text einfügen möchten. Beispielsweise deaktiviert in Django der [`safe`](https://docs.djangoproject.com/en/5.0/ref/templates/language/#how-to-turn-it-off)-Filter die Ausgabe-Codierung, und in React hat [`dangerouslySetInnerHTML`](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html) denselben Effekt.

In diesem Fall liegt es beim Entwickler, sicherzustellen, dass der Inhalt sicher ist, indem er ihn bereinigt.

_Sanitisierung_ ist der Prozess, bei dem unsichere Merkmale aus einer HTML-Zeichenfolge entfernt werden: beispielsweise {{htmlelement("script")}}-Tags oder Inline-Ereignis-Handler. Da eine Sanitisierung, wie eine Ausgabe-Codierung, schwer richtig umzusetzen ist, empfiehlt es sich, eine angesehene Drittanbieter-Bibliothek zu verwenden. [DOMPurify](https://github.com/cure53/DOMPurify) wird von vielen Experten, darunter [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#html-sanitization), empfohlen.

Betrachten Sie zum Beispiel eine HTML-Zeichenfolge wie:

```html
<div>
  <img src="x" onerror="alert('hello!')" />
  <script>
    alert("hello!");
  </script>
</div>
```

Wenn wir dies DOMPurify übergeben, wird es zurückgegeben als:

```html
<div>
  <img src="x" />
</div>
```

### Vertrauenswürdige Typen

Eine Funktion zu haben, die einen bestimmten Eingabestring bereinigen kann, ist eine Sache, aber alle Stellen in einer Codebasis zu finden, an denen Eingabezeichenfolgen bereinigt werden müssen, kann an sich ein sehr schwieriges Problem sein.

Wenn Sie client-seitiges Rendering im Browser implementieren, gibt es eine Reihe von Web-APIs, die unsicher sind, wenn sie mit nicht bereinigten, nicht vertrauenswürdigen Inhalten aufgerufen werden.

Zum Beispiel interpretieren die folgenden APIs ihre Zeichenfolgenargumente als HTML und verwenden es, um das DOM der Seite zu aktualisieren:

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) (wird auch intern von React's `dangerouslySetInnerHTML` verwendet)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Document.write()`](/de/docs/Web/API/Document/write)

Andere APIs führen ihre Argumente direkt als JavaScript aus. Zum Beispiel:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) ermöglicht es einem Entwickler, sicher zu sein, dass Eingaben immer bereinigt werden, bevor sie an eine dieser APIs übergeben werden.

Der Schlüssel zur Durchsetzung der Verwendung vertrauenswürdiger Typen ist die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive. Wenn diese Direktive gesetzt ist, wird das Übergeben von Zeichenfolgenargumenten an unsichere APIs eine Ausnahme werfen:

```js example-bad
const userInput = "I might be XSS";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Stattdessen muss ein Entwickler einen _vertrauenswürdigen Typ_ an eine dieser APIs übergeben. Ein vertrauenswürdiger Typ ist ein Objekt, das aus einer Zeichenfolge von einem [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt erstellt wird, dessen Implementierung vom Entwickler festgelegt wird. Zum Beispiel:

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
> Die Trusted Types API bietet keine Bereinigungsfunktion an: Sie ist ein Framework, in dem ein Entwickler sicher sein kann, dass eine von ihm bereitgestellte Bereinigungsfunktion aufgerufen wurde. Im obigen Beispiel verwendet der Entwickler DOMPurify als Bereinigungsfunktion für HTML-Senken innerhalb des Trusted Types Frameworks.

Die Trusted Types API verfügt noch nicht über eine gute Browser-übergreifende Unterstützung, aber wenn dies der Fall ist, wird sie eine wichtige Verteidigung gegen DOM-basierte XSS-Angriffe sein.

### Bereitstellung einer CSP

Ausgabe-Codierung und Sanitisierung sind darauf ausgelegt, den Eintritt bösartiger Skripte in die Seiten einer Website zu verhindern. Eine der Hauptfunktionen einer Content Security Policy besteht darin, zu verhindern, dass bösartige Skripte selbst dann ausgeführt werden, wenn sie in den Seiten einer Website enthalten sind. Das heißt, es ist eine Sicherung, falls die anderen Verteidigungen fehlschlagen.

Der empfohlene Ansatz zur Minderung von XSS mit einer CSP ist eine [strikte CSP](/de/docs/Web/HTTP/Guides/CSP#strict_csp), die ein [Nonce](/de/docs/Web/HTTP/Guides/CSP#nonces) oder einen [Hash](/de/docs/Web/HTTP/Guides/CSP#hashes) verwendet, um dem Browser mitzuteilen, welche Skripte er im Dokument erwartet. Wenn ein Angreifer es schafft, bösartige `<script>`-Elemente einzuschleusen, werden sie nicht das richtige Nonce oder den richtigen Hash haben, und der Browser wird sie nicht ausführen. Darüber hinaus sind verschiedene häufige XSS-Vektoren vollständig untersagt: Inline-Event-Handler, `javascript:`-URLs und APIs wie `eval()`, die ihre Argumente als JavaScript ausführen.

## Zusammenfassende Verteidigung-Checkliste

- Verwenden Sie beim Interpolieren von Eingaben in eine Seite, entweder im Browser oder im Server, eine Template-Engine, die Ausgabe-Codierung durchführt.
- Seien Sie sich des Kontexts bewusst, in dem Sie Eingaben interpolieren, und stellen Sie sicher, dass die entsprechende Ausgabe-Codierung in diesem Kontext durchgeführt wird.
- Wenn Sie Eingaben als HTML einfügen müssen, säubern Sie sie mit einer renommierten Bibliothek. Wenn Sie dies im Browser durchführen, verwenden Sie das Trusted Types Framework, um sicherzustellen, dass die Eingabe von Ihrer Sanitisierungsfunktion verarbeitet wird.
- Implementieren Sie eine strikte CSP.

## Siehe auch

- [Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)
