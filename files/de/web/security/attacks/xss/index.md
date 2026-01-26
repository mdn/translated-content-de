---
title: Cross-site scripting (XSS)
slug: Web/Security/Attacks/XSS
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

Ein Cross-site scripting (XSS)-Angriff ist ein Angriff, bei dem ein Angreifer eine Zielwebsite dazu bringen kann, bösartigen Code auszuführen, als ob er Teil der Website wäre.

## Übersicht

Ein Webbrowser lädt Code von vielen verschiedenen Websites herunter und führt ihn auf dem Computer des Benutzers aus. Einige dieser Websites sind äußerst vertrauenswürdig, und der Benutzer nutzt sie möglicherweise für sensible Operationen, wie Finanztransaktionen oder medizinische Beratung. Bei anderen, wie einer Gelegenheitsspieleseite, besteht möglicherweise keine solche Vertrauensbeziehung. Die Grundlage des Sicherheitsmodells des Browsers besteht darin, dass diese Websites voneinander getrennt bleiben sollten, sodass Code von einer Website nicht auf Objekte oder {{Glossary("credential", "Zugangsdaten")}} auf einer anderen Website zugreifen kann. Dies wird als [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) bezeichnet.

![Diagramm von 2 Websites im Browser, in getrennten Welten](same-origin.svg)

In einem erfolgreichen XSS-Angriff kann der Angreifer die Same-Origin-Policy untergraben, indem er die Zielwebsite dazu bringt, bösartigen Code innerhalb ihres eigenen Kontexts auszuführen, als wäre er aus demselben Ursprung. Der Code kann dann alles tun, was der eigene Code der Website tun kann, einschließlich zum Beispiel:

- Zugriff auf und/oder Modifikation aller Inhalte der geladenen Seiten der Website sowie auf jegliche Inhalte im lokalen Speicher
- HTTP-Anfragen mit den Zugangsdaten des Benutzers durchführen, um ihn zu impersonalisieren oder auf sensible Daten zuzugreifen

![Diagramm von Angreifercode, der auf Zielwebsite ausgeführt wird](xss.svg)

Alle XSS-Angriffe hängen davon ab, dass eine Website zwei Dinge tut:

1. Sie akzeptiert Eingaben, die von einem Angreifer erstellt worden sein könnten
2. Sie schließt diese Eingaben in eine Seite ein, ohne sie zu _sanitieren_: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausführbar sind.

## Zwei XSS-Beispiele

In diesem Abschnitt gehen wir zwei Beispielseiten durch, die anfällig für einen XSS-Angriff sind.

### Codeinjektion im Browser

In diesem Beispiel nehmen wir an, dass die Website der Bank des Benutzers `my-bank.example.com` ist. Der Benutzer ist in der Regel dort angemeldet, und der Code auf der Website kann auf die Kontodetails des Benutzers zugreifen und Transaktionen durchführen. Die Website möchte eine Willkommensnachricht anzeigen, die für den aktuellen Benutzer personalisiert ist. Sie zeigt das Willkommen in einem {{htmlelement("Heading_Elements", "heading")}}-Element an:

```html
<h1 id="welcome"></h1>
```

Die Seite erwartet, den aktuellen Benutzernamen in einem [URL-Parameter](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#parameters) zu finden. Sie extrahiert den Parameterwert und verwendet den Wert, um eine personalisierte Begrüßungsnachricht zu erstellen:

```js
const params = new URLSearchParams(window.location.search);
const user = params.get("user");
const welcome = document.querySelector("#welcome");

welcome.innerHTML = `Welcome back, ${user}!`;
```

Angenommen, diese Seite wird von `https://my-bank.example.com/welcome` bereitgestellt. Um die Sicherheitsanfälligkeit auszunutzen, sendet ein Angreifer dem Benutzer einen Link wie diesen:

```html
<a
  href="https://my-bank.example.com/welcome?user=<img src=x onerror=alert('hello!')>">
  Get a free kitten!</a
>
```

Wenn der Benutzer auf den Link klickt:

1. Der Browser lädt die Seite.
2. Die Seite extrahiert den URL-Parameter mit dem Namen `user`, dessen Wert `<img src=x onerror=alert("hello!")>` ist.
3. Die Seite weist diesen Wert dann der `innerHTML`-Eigenschaft des `welcome`-Elements zu, was ein neues {{htmlelement("img")}}-Element erstellt, das einen `src`-Attributwert von `x` hat.
4. Da der `src`-Wert einen Fehler generiert, wird der `onerror`-[Ereignishandler](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_%e2%80%94_dont_use_these) ausgeführt, und der Angreifer kann seinen Code auf der Seite ausführen.

In diesem Fall zeigt der Code nur einen Alarm an, aber auf einer echten Banking-Website könnte der Angreifercode alles tun, was der eigene Frontend-Code der Bank könnte.

### Codeinjektion auf dem Server

In diesem Beispiel betrachten wir eine Website mit einer Suchfunktion. Das HTML für die Suchseite könnte so aussehen:

```html
<h1>Search</h1>

<form action="/results">
  <label for="mySearch">Search for an item:</label>
  <input id="mySearch" type="search" name="search" />
  <input type="submit" />
</form>
```

Wenn der Benutzer einen Suchbegriff eingibt und auf "Senden" klickt, sendet der Browser eine GET-Anfrage an "/results", einschließlich des Suchbegriffs als URL-Parameter, wie folgt:

```plain
https://example.org/results?search=bananas
```

Der Server möchte eine Liste von Suchergebnissen anzeigen, mit einem Titel, der angibt, wonach der Benutzer gesucht hat. Er extrahiert den Suchbegriff aus dem URL-Parameter. So könnte dies in [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) aussehen:

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

Wie alle XSS-Angriffe sind diese beiden Beispiele möglich, weil die Website:

1. Eingaben verwendet, die von einem Angreifer erstellt worden sein könnten
2. Die Eingabe in die Seite einfügt, ohne sie zu sanitieren.

Beide Beispiele verwenden denselben Vektor für die bösartige Eingabe: den URL-Parameter. Es gibt jedoch auch andere Vektoren, die Angreifer verwenden können.

Zum Beispiel betrachten Sie einen Blog mit Kommentaren. In einem Fall wie diesem:

1. Erlaubt die Website jedem, Kommentare über ein {{htmlelement("form")}}-Element einzureichen
2. Speichert die Kommentare in einer Datenbank
3. Fügt die Kommentare in Seiten ein, die die Website anderen Benutzern bereitstellt.

Wenn die Kommentare nicht sanitisiert werden, sind sie potenzielle Vektoren für XSS. Diese Art von Angriff wird manchmal als _gespeichertes_ oder _persistent_ XSS bezeichnet und ist besonders schwerwiegend, weil der infizierte Inhalt allen Benutzern angezeigt wird, die die Seite aufrufen, jedes Mal, wenn sie darauf zugreifen.

### Client- und Server-XSS

Ein großer Unterschied zwischen den beiden Beispielen ist, dass der bösartige Code in verschiedenen Teilen des Codebase der Website injiziert wird, was eine Reflexion der Architektur der einzelnen Websites ist.

Eine Website, die clientseitiges Rendering verwendet, wie eine {{Glossary("SPA", "Single-Page-Anwendung")}}, modifiziert Seiten im Browser, indem sie Web-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwendet, entweder direkt oder indirekt über ein Framework wie React. In diesem Prozess wird die XSS-Injektion stattfinden. Das sieht man im ersten Beispiel: Der bösartige Code wird im Browser injiziert, indem ein Skript, das auf der Seite läuft, den URL-Parameterwert der [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft zuweist, die seinen Wert als HTML-Code interpretiert.

Eine Website, die serverseitiges Rendering verwendet, erstellt Seiten auf dem Server, indem sie ein Framework wie Django oder Express verwendet, meistens durch das Einfügen von Werten in Seitentemplates. Die XSS-Injektion, falls sie auftritt, wird auf dem Server während des Templating-Prozesses stattfinden. Das sieht man im zweiten Beispiel: Der Code wird auf dem Server injiziert, indem der Express-Code den URL-Parameterwert in das zurückzugebende Dokument einfügt. Der XSS-Angriffs-Code wird dann ausgeführt, wenn der Browser die Seite auswertet.

In beiden Fällen ist der allgemeine Ansatz zur Verteidigung derselbe, und wir werden darauf im nächsten Abschnitt näher eingehen. Die spezifischen Werkzeuge und APIs, die Sie verwenden, werden jedoch unterschiedlich sein.

## Abwehrmaßnahmen gegen XSS

Wenn Sie externe Eingaben in die Seiten Ihrer Website einfügen müssen, gibt es zwei Hauptabwehrmaßnahmen gegen XSS:

1. Verwenden Sie _Ausgabe-Codierung_ und _Sanitierung_, um zu verhindern, dass Eingaben ausführbar werden. Wenn Sie Inhalte im Browser rendern, können Sie die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) verwenden, um sicherzustellen, dass Eingaben über eine Sanitierungsfunktion geleitet werden, bevor sie in die Seite aufgenommen werden.
2. Verwenden Sie eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP), um dem Browser mitzuteilen, welche JavaScript- oder CSS-Ressourcen ausgeführt werden dürfen. Dies ist eine Backup-Verteidigung: Wenn die erste Verteidigung fehlschlägt und ausführbare Eingaben in eine Seite gelangen, sollte eine ordnungsgemäß konfigurierte CSP verhindern, dass der Browser sie ausführt.

### Ausgabe-Codierung

_Ausgabe-Codierung_ ist der Prozess, bei dem Zeichen im Eingabestring, die potenziell gefährlich sind, so maskiert werden, dass sie als Text und nicht als Teil einer Sprache wie HTML behandelt werden.

Dies ist die geeignete Wahl, wenn Sie Eingaben als Text behandeln möchten, zum Beispiel, weil Ihre Website Templates verwendet, die Eingaben in Inhalte interpolieren, wie in diesem [Django-Template](https://docs.djangoproject.com/en/5.1/ref/templates/language/) Ausschnitt:

```django
<p>You searched for \{{ search_term }}.</p>
```

Die meisten modernen Templating-Engines führen automatisch eine Ausgabe-Codierung durch. Zum Beispiel konvertiert die Templating-Engine von Django die folgenden Zeichen:

- `<` wird in `&lt;` konvertiert

- `>` wird in `&gt;` konvertiert

- `'` wird in `&#x27;` konvertiert

- `"` wird in `&quot;` konvertiert

- `&` wird in `&amp;` konvertiert

Das bedeutet, dass, wenn Sie `<img src=x onerror=alert('XSS!')>` in das obige Django-Template eingeben, es in `&lt;img src=x onerror=alert(&#x27;XSS!&#x27;)&gt;` konvertiert wird, was als folgender Text angezeigt wird:

> You searched for &lt;img src=x onerror=alert('XSS!')&gt;.

Ähnlich, wenn Sie clientseitiges Rendering mit React durchführen, werden Werte, die in JSX eingebettet sind, automatisch kodiert. Betrachten Sie zum Beispiel eine JSX-Komponente wie diese:

```jsx
import React from "react";

export function App(props) {
  return <div>Hello, {props.name}!</div>;
}
```

Wenn wir `<img src=x onerror=alert('XSS!')>` in `props.name` einfügen, wird es gerendert als:

> Hello, &lt;img src=x onerror=alert('XSS!')&gt;!

Ein wesentlicher Teil zur Verhinderung von XSS-Angriffen ist die Verwendung einer renommierten Templating-Engine, die eine robuste Ausgabe-Codierung durchführt, und das Lesen ihrer Dokumentation, um etwaige Vorbehalte bezüglich des Schutzes, den sie bietet, zu verstehen.

#### Dokumentkontexte

Selbst wenn Sie eine Templating-Engine verwenden, die automatisch HTML kodiert, müssen Sie sich bewusst sein, wo im Dokument Sie nicht vertrauenswürdige Inhalte einfügen. Zum Beispiel, nehmen Sie ein Django-Template an wie dieses:

```django
<div>\{{ my_input }}</div>
```

In diesem Kontext befindet sich die Eingabe innerhalb von `<div>`-Tags, sodass der Browser sie als HTML auswertet. Sie müssen also gegen den Fall geschützt sein, dass `my_input` HTML ist, das ausführbaren Code definiert, wie `<img src=x onerror="alert('XSS')">`. Die im Django eingebaute Ausgabe-Codierung verhindert diesen Angriff, indem Zeichen wie `<` und `>` als HTML-Entities `&lt;` und `&gt;` kodiert werden.

Nehmen Sie jedoch an, das Template sieht so aus:

```django
<div \{{ my_input }}></div>
```

In diesem Kontext wird der Browser die `my_input`-Variable als HTML-Attribut behandeln. Da Django Anführungszeichen kodiert (`"` → `&quot;`, `'` → `&#x27;`), wird der Payload `onmouseover="alert('XSS')"` nicht ausgeführt. Ein nicht angegebener Payload wie `onmouseover=alert(1)` (oder unter Verwendung von Backticks, ``onmouseover=alert(`XSS`)``) wird jedoch weiterhin ausgeführt, da Attributwerte nicht zitiert werden müssen und Backticks standardmäßig nicht maskiert werden.

Der Browser verwendet verschiedene Regeln zur Verarbeitung verschiedener Teile einer Webseite — HTML-Elemente und deren Inhalt, HTML-Attribute, Inline-Stile, Inline-Skripte. Die Art der Kodierung, die durchgeführt werden muss, ist unterschiedlich, je nachdem, in welchem Kontext die Eingaben interpoliert werden.

Was in einem Kontext sicher ist, kann in einem anderen unsicher sein, und es ist notwendig, den Kontext zu verstehen, in dem Sie nicht vertrauenswürdige Inhalte einfügen, und jegliche spezielle Behandlung zu implementieren, die erforderlich ist.

- **HTML-Kontexte**: Eingabe, die zwischen den Tags der meisten HTML-Elemente eingefügt wird (mit Ausnahme von {{htmlelement("style")}} oder {{htmlelement("script")}}), wird als HTML interpretiert. Die von Template-Engines durchgeführte Kodierung bezieht sich größtenteils auf diesen Kontext.
- **HTML-Attributkontexte**: Das Einfügen von Eingaben als HTML-Attributwerte ist manchmal sicher und manchmal nicht, je nach Attribut. Insbesondere Event-Handler-Attribute wie `onblur` sind unsicher, ebenso wie das [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src)-Attribut des {{htmlelement("iframe")}}-Elements.

  Es ist auch wichtig, Platzhalter für eingefügte Attributwerte zu zitieren, ansonsten könnte ein Angreifer in der Lage sein, ein weiteres unsicheres Attribut im bereitgestellten Wert einzufügen. Zum Beispiel zitiert diese Template keinen eingefügten Wert:

  ```django example-bad
  <div class=\{{ my_class }}>...</div>
  ```

  Ein Angreifer kann dies ausnutzen, indem er ein Event-Handler-Attribut injiziert, indem er Eingaben wie `some_id onmouseover=alert(1)` verwendet. Um den Angriff zu verhindern, zitieren Sie den Platzhalter:

  ```django example-good
    <div class="\{{ my_class }}">...</div>
  ```

- **JavaScript- und CSS-Kontexte**: Das Einfügen von Eingaben innerhalb von {{htmlelement("script")}}- oder {{htmlelement("style")}}-Tags ist fast immer unsicher.

### Sanitierung

Templating-Engines erlauben es Entwicklern typischerweise, die Ausgabe-Codierung zu deaktivieren. Dies ist notwendig, wenn Entwickler nicht vertrauenswürdige Inhalte als HTML und nicht als Text einfügen möchten. In Django deaktiviert der [`safe`](https://docs.djangoproject.com/en/5.0/ref/templates/language/#how-to-turn-it-off)-Filter die Ausgabe-Codierung, und in React hat [`dangerouslySetInnerHTML`](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html) denselben Effekt.

In diesem Fall liegt es am Entwickler, sicherzustellen, dass der Inhalt sicher ist, indem er ihn sanitisiert.

_Sanitierung_ ist der Prozess des Entfernens unsicherer Funktionen aus einem HTML-String, zum Beispiel {{htmlelement("script")}}-Tags oder Inline-Event-Handler. Da es schwierig ist, wie die Ausgabe-Codierung, die Sanitierung richtig zu implementieren, ist es ratsam, eine renommierte Drittanbieter-Bibliothek dafür zu verwenden. [DOMPurify](https://github.com/cure53/DOMPurify) wird von vielen Experten, einschließlich [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#html-sanitization), empfohlen.

Zum Beispiel, betrachten Sie einen HTML-String wie:

```html
<div>
  <img src="x" onerror="alert('hello!')" />
  <script>
    alert("hello!");
  </script>
</div>
```

Wenn wir dies DOMPurify übergeben, wird es zurückgegeben:

```html
<div>
  <img src="x" />
</div>
```

### Vertrauenswürdige Typen

Eine Funktion zu haben, die einen gegebenen Eingabestring sanitieren kann, ist eine Sache, aber alle Stellen in einem Codebase zu finden, an denen Eingabestrings sanitisiert werden müssen, kann an sich ein sehr schwieriges Problem sein.

Wenn Sie im Browser clientseitiges Rendering implementieren, gibt es eine Reihe von Web-APIs, die unsicher sind, wenn sie mit nicht sanitisierten unvertrauenswürdigen Inhalten aufgerufen werden.

Zum Beispiel inter

pretieren die folgenden APIs ihre String-Argumente als HTML und verwenden sie, um das Seiten-DOM zu aktualisieren:

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) (das auch intern von React's `dangerouslySetInnerHTML` verwendet wird)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Document.write()`](/de/docs/Web/API/Document/write)

Andere APIs führen ihre Argumente direkt als JavaScript aus. Zum Beispiel:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) ermöglicht es einem Entwickler, sicherzustellen, dass Eingaben immer sanitisiert werden, bevor sie an eine dieser APIs übergeben werden.

Der Schlüssel zur Durchsetzung der Verwendung vertrauenswürdiger Typen ist die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive. Wenn diese Direktive gesetzt ist, dann wird das Übergeben von String-Argumenten an unsichere APIs eine Ausnahme werfen:

```js example-bad
const userInput = "I might be XSS";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Stattdessen muss ein Entwickler einen _vertrauten Typ_ an eine dieser APIs übergeben. Ein vertrauter Typ ist ein Objekt, das aus einem String von einem [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt erstellt wird, dessen Implementierung vom Entwickler definiert ist. Zum Beispiel:

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
> Die Trusted Types API bietet keine Sanitierungsfunktion: Sie ist ein Rahmen, in dem ein Entwickler sicherstellen kann, dass eine von ihm bereitgestellte Sanitierungsfunktion aufgerufen wurde. Im obigen Beispiel verwendet der Entwickler DOMPurify als Sanitizer für HTML-Senken im Trusted Types-Framework.

Die Trusted Types API hat noch keine gute Unterstützung in verschiedenen Browsern, aber wenn sie es tut, wird sie eine wichtige Verteidigung gegen DOM-basierte XSS-Angriffe sein.

### Einsatz einer CSP

Ausgabe-Codierung und Sanitierung zielen darauf ab, zu verhindern, dass bösartige Skripte in die Seiten einer Website gelangen. Eine der Hauptfunktionen einer Content-Security-Policy ist es, zu verhindern, dass bösartige Skripte ausgeführt werden, selbst wenn sie in den Seiten einer Website sind. Das heißt, es ist eine Sicherung, falls die anderen Verteidigungen versagen.

Der empfohlene Ansatz zur Minderung von XSS mit einer CSP ist eine [strikte CSP](/de/docs/Web/HTTP/Guides/CSP#strict_csp), die ein [Nonce](/de/docs/Web/HTTP/Guides/CSP#nonces) oder einen [Hash](/de/docs/Web/HTTP/Guides/CSP#hashes) verwendet, um dem Browser mitzuteilen, welche Skripte es erwartet, im Dokument zu sehen. Wenn ein Angreifer es schafft, bösartige `<script>`-Elemente einzufügen, werden sie nicht das korrekte {{Glossary("Nonce", "Nonce")}} oder den Hash haben, und der Browser wird sie nicht ausführen. Zusätzlich werden verschiedene häufige XSS-Vektoren komplett untersagt: Inline-Event-Handler, `javascript:`-URLs und APIs wie `eval()`, die ihre Argumente als JavaScript ausführen.

## Checkliste zur Verteidigungszusammenfassung

- Wenn Sie Eingaben in eine Seite interpolieren, entweder im Browser oder auf dem Server, verwenden Sie eine Templating-Engine, die eine Ausgabe-Codierung durchführt.
- Seien Sie sich des Kontextes bewusst, in dem Sie Eingaben interpolieren, und stellen Sie sicher, dass die geeignete Ausgabe-Codierung in diesem Kontext durchgeführt wird.
- Wenn Sie Eingaben als HTML einfügen müssen, sanitieren Sie diese mit einer renommierten Bibliothek. Wenn Sie dies im Browser tun, verwenden Sie das Trusted Types-Framework, um sicherzustellen, dass Eingaben von Ihrer Sanitierungsfunktion verarbeitet werden.
- Implementieren Sie eine strikte CSP.

## Siehe auch

- [Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)
