---
title: Cross-Site Scripting (XSS)
slug: Web/Security/Attacks/XSS
l10n:
  sourceCommit: 023a970ac41f9de098b31650b69f210e3be368e1
---

Ein Cross-Site Scripting (XSS)-Angriff ist einer, bei dem ein Angreifer in der Lage ist, eine Zielseite dazu zu bringen, schädlichen Code auszuführen, als ob er Teil der Website wäre.

## Überblick

Ein Webbrowser lädt Code von vielen verschiedenen Websites herunter und führt ihn auf dem Computer des Benutzers aus. Einige dieser Websites sind hochgradig vertrauenswürdig, und der Benutzer könnte sie für sensible Operationen nutzen, wie z.B. Finanztransaktionen oder medizinische Beratung. Andere, wie z.B. eine Casual-Gaming-Seite, haben möglicherweise keine solche Vertrauensbeziehung mit dem Benutzer. Die Grundlage des Sicherheitsmodells eines Browsers besteht darin, dass diese Seiten voneinander getrennt gehalten werden sollten, sodass Code von einer Seite nicht auf Objekte oder {{Glossary("credential", "Credentials")}} einer anderen Seite zugreifen kann. Dies wird die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) genannt.

![Diagramm von 2 Seiten im Browser, in getrennten Welten](same-origin.svg)

In einem erfolgreichen XSS-Angriff ist der Angreifer in der Lage, die Same-Origin-Policy zu umgehen, indem er die Zielseite dazu bringt, schädlichen Code in ihrem eigenen Kontext auszuführen, als ob er vom selben Ursprung wäre. Der Code kann dann alles tun, was der eigene Code der Seite tun kann, einschließlich beispielsweise:

- Zugriff auf oder Modifikation aller Inhalte der geladenen Seiten der Seite und aller Inhalte im lokalen Speicher
- Durchführung von HTTP-Anfragen mit den Anmeldedaten des Benutzers, wodurch sie in der Lage sind, den Benutzer zu imitieren oder auf sensible Daten zuzugreifen

![Diagramm von Attackercode, der auf der Zielwebsite läuft](xss.svg)

Alle XSS-Angriffe hängen davon ab, dass eine Website zwei Dinge tut:

1. Annahme von Eingaben, die von einem Angreifer erstellt worden sein könnten
2. Einfügen dieser Eingaben in eine Seite ohne sie _sanitizing_: also ohne sicherzustellen, dass sie nicht als JavaScript ausführbar sind.

## Zwei XSS-Beispiele

In diesem Abschnitt gehen wir zwei Beispielseiten durch, die anfällig für einen XSS-Angriff sind.

### Code-Injektion im Browser

In diesem Beispiel nehmen wir an, dass die Website der Bank des Benutzers `my-bank.example.com` ist. Der Benutzer ist normalerweise dort angemeldet, und der Code auf der Website kann auf die Kontodaten des Benutzers zugreifen und Transaktionen durchführen. Die Website möchte eine persönliche Willkommensnachricht für den aktuellen Benutzer anzeigen. Sie zeigt das Willkommen in einem {{htmlelement("Heading_Elements", "heading")}}-Element:

```html
<h1 id="welcome"></h1>
```

Die Seite erwartet, den Namen des aktuellen Benutzers in einem [URL-Parameter](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL#parameters) zu finden. Sie extrahiert den Parameterwert und verwendet diesen Wert, um eine personalisierte Begrüßungsnachricht zu erstellen:

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
3. Die Seite weist dann diesen Wert der `innerHTML`-Eigenschaft des `welcome`-Elements zu, wodurch ein neues {{htmlelement("img")}}-Element erstellt wird, dessen `src`-Attributwert `x` ist.
4. Da der `src`-Wert einen Fehler erzeugt, wird die `onerror`-Eigenschaft des [Event Handlers](/de/docs/Learn/JavaScript/Building_blocks/Events#inline_event_handlers_—_dont_use_these) ausgeführt, und der Angreifer kann seinen Code auf der Seite ausführen.

In diesem Fall zeigt der Code nur eine Warnung an, aber auf einer echten Bankwebseite wäre der Angreifercode in der Lage, alles zu tun, was der eigene Frontend-Code der Bank könnte.

### Code-Injektion auf dem Server

In diesem Beispiel betrachten wir eine Website mit einer Suchfunktion. Der HTML-Code für die Suchseite könnte so aussehen:

```html
<h1>Search</h1>

<form action="/results">
  <label for="mySearch">Search for an item:</label>
  <input id="mySearch" type="search" name="search" />
  <input type="submit" />
</form>
```

Wenn der Benutzer ein Suchbegriff eingibt und auf "Senden" klickt, macht der Browser eine GET-Anfrage an "/results", wobei der Suchbegriff als URL-Parameter wie folgt übergeben wird:

```plain
https://example.org/results?search=bananas
```

Der Server möchte eine Liste von Suchergebnissen anzeigen, mit einem Titel, der angibt, wonach der Benutzer gesucht hat. Er extrahiert den Suchbegriff aus dem URL-Parameter. So könnte dies in [Express](/de/docs/Learn/Server-side/Express_Nodejs) aussehen:

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

1. Der Browser sendet eine GET-Anfrage an den Server. Der URL-Parameter der Anfrage enthält den schädlichen Code.
2. Der Server extrahiert den URL-Parameterwert und bettet ihn in die Seite ein.
3. Der Server gibt die Seite an den Browser zurück, der diese ausführt.

## Anatomie eines XSS-Angriffs

Wie bei allen XSS-Angriffen sind diese beiden Beispiele möglich, weil die Website:

1. Eingaben verwendet, die von einem Angreifer erstellt worden sein könnten
2. Die Eingaben in die Seite einfügt, ohne sie zu bereinigen.

Beide Beispiele verwenden denselben Vektor für die schädlichen Eingaben: den URL-Parameter. Es gibt jedoch auch andere Vektoren, die ein Angreifer nutzen kann.

Beispielsweise betrachten Sie einen Blog mit Kommentaren. In einem solchen Fall:

1. Erlaubt die Website jedem, Kommentare mit einem {{htmlelement("form")}}-Element abzugeben
2. Speichert die Kommentare in einer Datenbank
3. Beinhaltet die Kommentare in Seiten, die die Website anderen Benutzern bereitstellt.

Wenn die Kommentare nicht bereinigt werden, sind sie potenzielle Vektoren für XSS. Diese Art von Angriff wird manchmal als _gespeichert_ oder _persistent_ XSS bezeichnet und ist besonders schwerwiegend, da der infizierte Inhalt jedem Benutzer bereitgestellt wird, der die Seite bei jedem Zugriff darauf aufruft.

### Client- und Server-XSS

Ein großer Unterschied zwischen den beiden Beispielen ist, dass der schädliche Code in verschiedenen Bereichen der Codebasis der Website injiziert wird, was die Architektur der jeweiligen Website widerspiegelt.

Eine Website, die Client-Side-Rendering verwendet, wie eine {{Glossary("SPA", "Single-Page-App")}}, modifiziert Seiten im Browser mit Web-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement), entweder direkt oder indirekt über ein Framework wie React. Im Laufe dieses Prozesses erfolgt die XSS-Injektion. Das sehen wir im ersten Beispiel: Der schädliche Code wird im Browser injiziert, indem ein im Skript der Seite ausgeführter URL-Parameterwert der [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft zugewiesen wird, die ihren Wert als HTML-Code interpretiert.

Eine Website, die Server-Side-Rendering verwendet, erstellt Seiten auf dem Server mit einem Framework wie Django oder Express, meistens durch Einfügen von Werten in Seitentemplates. Die XSS-Injektion, sofern sie auftritt, erfolgt auf dem Server während des Template-Prozesses. Das sehen wir im zweiten Beispiel: Der Code wird auf dem Server injiziert, indem der Express-Code den URL-Parameterwert in das Dokument einfügt, das er zurückgibt. Der XSS-Angriffscode wird dann ausgeführt, wenn der Browser die Seite bewertet.

In beiden Fällen ist der allgemeine Ansatz zur Verteidigung derselbe, und wir werden dies im Detail im nächsten Abschnitt behandeln. Die spezifischen Werkzeuge und APIs, die Sie verwenden werden, unterscheiden sich jedoch.

## Abwehrmaßnahmen gegen XSS

Wenn Sie externe Eingaben auf den Seiten Ihrer Website einfügen müssen, gibt es zwei Hauptabwehrmaßnahmen gegen XSS:

1. Verwenden Sie _Ausgabecodierung_ und _Sanitization_, um zu verhindern, dass Eingaben ausführbar werden. Wenn Sie Inhalte im Browser rendern, können Sie die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) verwenden, um sicherzustellen, dass Eingaben durch eine Bereinigungsfunktion geleitet werden, bevor sie auf der Seite eingefügt werden.
2. Verwenden Sie eine [Content Security Policy](/de/docs/Web/HTTP/CSP) (CSP), um dem Browser mitzuteilen, welche JavaScript- oder CSS-Ressourcen ausgeführt werden dürfen. Dies ist eine Backup-Abwehr: Wenn die erste Abwehr versagt und ausführbare Eingaben auf einer Seite landen, sollte eine richtig konfigurierte CSP den Browser daran hindern, diese auszuführen.

### Ausgabecodierung

_Ausgabecodierung_ ist der Prozess, bei dem Zeichen im Eingabestring, die potenziell gefährlich sind, maskiert werden, sodass sie als Text behandelt werden, anstatt als Teil einer Sprache wie HTML.

Dies ist die geeignete Wahl, wenn Sie Eingaben als Text behandeln möchten, zum Beispiel, weil Ihre Website Templates verwendet, die Eingaben in Inhalte interpolieren, wie in diesem [Django-Template](https://docs.djangoproject.com/en/5.1/ref/templates/language/) Auszug:

```django
<p>You searched for \{{ search_term }}.</p>
```

Die meisten modernen Template-Engines führen die Ausgabecodierung automatisch durch. Beispielsweise führt die Template-Engine von Django die folgenden Konvertierungen durch:

- `<` wird zu `&lt;`

- `>` wird zu `&gt;`

- `'` wird zu `&#x27;`

- `"` wird zu `&quot;`

- `&` wird zu `&amp;`

Dies bedeutet, dass wenn Sie `<img src=x onerror=alert('XSS!')>` in das Django-Template oben eingeben, es zu `&lt;img src=x onerror=alert(&#x27;XSS!&#x27;)&gt;` konvertiert wird, was als folgender Text angezeigt wird:

> Sie haben nach &lt;img src=x onerror=alert('XSS!')&gt; gesucht.

Ähnlich gilt, wenn Sie Client-Side-Rendering mit React durchführen, werden Werte, die in JSX eingebettet sind, automatisch kodiert. Zum Beispiel betrachten wir eine JSX-Komponente wie diese:

```jsx
import React from "react";

export function App(props) {
  return <div>Hello, {props.name}!</div>;
}
```

Wenn wir `<img src=x onerror=alert('XSS!')>` in `props.name` übergeben, wird es gerendert als:

> Hallo, &lt;img src=x onerror=alert('XSS!')&gt;!

Einer der wichtigsten Teile der Verhinderung von XSS-Angriffen ist die Verwendung einer gut angesehenen Template-Engine, die eine robuste Ausgabecodierung durchführt, und die Lektüre ihrer Dokumentation, um etwaige Vorbehalte zu den angebotenen Schutzmechanismen zu verstehen.

#### Dokumentkontexte

Selbst wenn Sie eine Template-Engine verwenden, die HTML automatisch codiert, müssen Sie sich bewusst sein, in welchem Teil des Dokuments Sie nicht vertrauenswürdige Inhalte einfügen. Angenommen, Sie haben ein Django-Template wie dieses:

```django
<div>\{{ my_input }}</div>
```

In diesem Kontext sind die Eingaben innerhalb von `<div>`-Tags, sodass der Browser sie als HTML bewertet. Daher müssen Sie gegen den Fall schützen, dass `my_input` HTML ist, das ausführbaren Code definiert, wie z.B. `<img src=x onerror="alert('XSS')">`. Die in Django eingebaute Ausgabecodierung verhindert diesen Angriff, indem sie Zeichen wie `<` und `>` als HTML-Entitäten `&lt;` und `&gt;` kodiert.

Angenommen, das Template sieht so aus:

```django
<div \{{ my_input }}></div>
```

In diesem Kontext wird der Browser die Variable `my_input` als HTML-Attribut behandeln. Wenn `my_input` `onmouseover="alert('XSS')"` ist, verhindert die von Django bereitgestellte Ausgabecodierung den Angriff nicht.

Der Browser verwendet unterschiedliche Regeln, um verschiedene Teile einer Webseite zu verarbeiten — HTML-Elemente und deren Inhalte, HTML-Attribute, Inline-Stile, Inline-Skripte. Die Art der Kodierung, die angewendet werden muss, hängt davon ab, in welchem Kontext die Eingaben interpoliert werden.

Was in einem Kontext sicher ist, kann in einem anderen unsicher sein, und es ist notwendig, den Kontext zu verstehen, in dem Sie nicht vertrauenswürdige Inhalte einfügen, und umsetzbares spezielles Handling zu implementieren.

- **HTML-Kontexte**: Eingaben, die zwischen den Tags der meisten HTML-Elemente (außer {{htmlelement("style")}} oder {{htmlelement("script")}}) eingefügt werden, werden als HTML interpretiert. Die von Template-Engines angewendete Kodierung bezieht sich hauptsächlich auf diesen Kontext.
- **HTML-Attributkontexte**: Eingaben als HTML-Attributwerte einzufügen, ist manchmal sicher und manchmal nicht, abhängig vom Attribut. Insbesondere sind Event-Handler-Attribute wie `onblur` unsicher, ebenso wie das [`src`](/de/docs/Web/HTML/Element/iframe#src)-Attribut des {{htmlelement("iframe")}}-Elements.

  Es ist auch wichtig, Platzhalter für eingefügte Attributwerte zu zitieren, sonst kann ein Angreifer möglicherweise ein weiteres unsicheres Attribut in den bereitgestellten Wert einfügen. Zum Beispiel zitiert dieses Template keinen eingefügten Wert:

  ```django example-bad
  <div class=\{{ my_class }}>...</div>
  ```

  Ein Angreifer kann dies ausnutzen, um ein Event-Handler-Attribut zu injizieren, indem er Eingaben wie `some_id onmouseover="alert('XSS!')"` verwendet. Um den Angriff zu verhindern, setzen Sie den Platzhalter in Anführungszeichen:

  ```django example-good
    <div class="\{{ my_class }}">...</div>
  ```

- **JavaScript- und CSS-Kontexte**: Eingaben in {{htmlelement("script")}} oder {{htmlelement("style")}}-Tags einzufügen, ist fast immer unsicher.

### Sanitization

Template-Engines erlauben es normalerweise Entwicklern, die Ausgabecodierung zu deaktivieren. Dies ist notwendig, wenn Entwickler nicht vertrauenswürdige Inhalte als HTML und nicht als Text einfügen möchten. Zum Beispiel deaktiviert in Django der [`safe`](https://docs.djangoproject.com/en/5.0/ref/templates/language/#how-to-turn-it-off) Filter die Ausgabecodierung, und in React hat [`dangerouslySetInnerHTML`](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html) denselben Effekt.

In diesem Fall liegt es am Entwickler sicherzustellen, dass der Inhalt sicher ist, indem er ihn bereinigt.

_Sanitization_ ist der Prozess des Entfernens unsicherer Merkmale aus einem HTML-String, wie z.B. {{htmlelement("script")}}-Tags oder Inline-Event-Handler. Da es schwierig ist, sowohl Ausgabecodierung als auch Bereinigung richtig zu machen, wird empfohlen, dazu eine anerkannte Drittanbieter-Bibliothek zu verwenden. [DOMPurify](https://github.com/cure53/DOMPurify) wird von vielen Experten, einschließlich [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#html-sanitization), empfohlen.

Betrachten Sie zum Beispiel einen HTML-String wie:

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

### Trusted Types

Eine Funktion zu haben, die einen gegebenen Eingabestring bereinigen kann, ist eine Sache, aber alle Stellen in einer Codebasis zu finden, an denen Eingabestrings bereinigt werden müssen, kann an sich schon ein sehr schwieriges Problem sein.

Wenn Sie clientseitiges Rendering im Browser implementieren, gibt es eine Anzahl von Web-APIs, die unsicher sind, wenn sie mit unbereinigten nicht vertrauenswürdigen Inhalten aufgerufen werden.

Zum Beispiel interpretieren die folgenden APIs ihre String-Argumente als HTML und verwenden es, um das DOM der Seite zu aktualisieren:

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) (das auch intern von Reacts `dangerouslySetInnerHTML` verwendet wird)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Document.write()`](/de/docs/Web/API/Document/write)

Andere APIs führen ihre Argumente direkt als JavaScript aus. Zum Beispiel:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) ermöglicht es einem Entwickler sicherzustellen, dass Eingaben immer bereinigt werden, bevor sie an eine dieser APIs übergeben werden.

Der Schlüssel zur Durchsetzung der Verwendung vertrauenswürdiger Typen ist die [`require-trusted-types-for`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive. Wenn diese Direktive gesetzt ist, wird das Übergeben von String-Argumenten an unsichere APIs eine Ausnahme auslösen:

```js example-bad
const userInput = "I might be XSS";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Stattdessen muss ein Entwickler einen _trusted type_ an eine dieser APIs übergeben. Ein vertrauenswürdiger Typ ist ein Objekt, das aus einem String von einem [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt erstellt wird, dessen Implementierung vom Entwickler definiert wird. Zum Beispiel:

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
> Die Trusted Types API bietet keine Bereinigungsfunktion: Sie ist ein Rahmenwerk, in dem ein Entwickler sicherstellen kann, dass eine von ihm bereitgestellte Bereinigungsfunktion aufgerufen wurde. Im obigen Beispiel verwendet der Entwickler DOMPurify als Bereiniger für HTML-Senken innerhalb des Trusted Types Rahmens.

Die Trusted Types API hat noch keine gute browserübergreifende Unterstützung, aber wenn sie diese hat, wird sie eine wichtige Verteidigung gegen DOM-basierte XSS-Angriffe darstellen.

### Implementieren einer CSP

Ausgabecodierung und Bereinigung zielen darauf ab, zu verhindern, dass schädliche Skripte in die Seiten einer Website gelangen. Eine der Hauptfunktionen einer Inhalts-Sicherheitsrichtlinie besteht darin, zu verhindern, dass schädliche Skripte ausgeführt werden, selbst wenn sie auf Seiten einer Website sind. Das heißt, es ist eine Sicherung für den Fall, dass die anderen Abwehrmaßnahmen versagen.

Der empfohlene Ansatz zur Abschwächung von XSS mit einer CSP ist eine [strikte CSP](/de/docs/Web/HTTP/CSP#strict_csp), die eine [Nonce](/de/docs/Web/HTTP/CSP#nonces) oder einen [Hash](/de/docs/Web/HTTP/CSP#hashes) verwendet, um dem Browser zu signalisieren, welche Skripte er im Dokument erwartet. Wenn es einem Angreifer gelingt, bösartige `<script>`-Elemente einzufügen, haben diese nicht die richtige Nonce oder den richtigen Hash, und der Browser wird sie nicht ausführen. Zusätzlich werden verschiedene gängige XSS-Vektoren vollständig verboten: Inline-Event-Handler, `javascript:`-URLs und APIs wie `eval()`, die ihre Argumente als JavaScript ausführen.

### Zusammenfassende Verteidigungs-Checkliste

Wir können die oben genannten Abwehrmaßnahmen wie folgt zusammenfassen:

- Bei der Interpolation von Eingaben in eine Seite, entweder im Browser oder auf dem Server, verwenden Sie eine Template-Engine, die eine Ausgabecodierung durchführt.
- Seien Sie sich des Kontexts bewusst, in dem Sie Eingaben interpolieren, und stellen Sie sicher, dass die angemessene Ausgabecodierung in diesem Kontext durchgeführt wird.
- Wenn Sie Eingaben als HTML einfügen müssen, bereinigen Sie sie mithilfe einer anerkannten Bibliothek. Wenn Sie dies im Browser tun, verwenden Sie den Rahmen der vertrauenswürdigen Typen, um sicherzustellen, dass Eingaben durch Ihre Bereinigungsfunktion verarbeitet werden.
- Implementieren Sie eine strikte CSP.

## Siehe auch

- [Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Security", "1", "0", "1")}}
</section>
