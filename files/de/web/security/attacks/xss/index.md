---
title: Cross-Site Scripting (XSS)
slug: Web/Security/Attacks/XSS
l10n:
  sourceCommit: a92e10b293358bc796c43d5872a8981fd988a005
---

Ein Cross-Site Scripting (XSS)-Angriff ist ein Angriff, bei dem ein Angreifer eine Zielwebsite dazu bringt, schädlichen Code so auszuführen, als ob er Teil der Website wäre.

## Überblick

Ein Webbrowser lädt Code von vielen verschiedenen Websites herunter und führt ihn auf dem Computer des Nutzers aus. Einige dieser Websites sind sehr vertrauenswürdig, und der Nutzer verwendet sie möglicherweise für sensible Operationen, wie finanzielle Transaktionen oder medizinische Beratung. Bei anderen, wie z.B. einer Gelegenheitsspiele-Website, besteht möglicherweise keine solche Vertrauensbeziehung. Die Grundlage des Sicherheitsmodells des Browsers ist, dass diese Websites voneinander getrennt gehalten werden sollten, sodass der Code einer Website keine Objekte oder {{Glossary("credential", "Zugangsdaten")}} auf einer anderen Website aufrufen kann. Dies wird als [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) bezeichnet.

![Diagramm von 2 Websites im Browser, in separaten Welten](same-origin.svg)

Bei einem erfolgreichen XSS-Angriff gelingt es dem Angreifer, die Same-Origin-Policy zu umgehen, indem er die Zielwebsite dazu bringt, schädlichen Code innerhalb ihres eigenen Kontextes auszuführen, als wäre er dieselben Ursprungs. Der Code kann dann alles tun, was der eigene Code der Website kann, einschließlich:

- Zugriff auf und/oder Änderung aller Inhalte der geladenen Seiten der Website und aller Inhalte im lokalen Speicher
- HTTP-Anfragen mit den Zugangsdaten des Nutzers ausführen, wodurch sie den Nutzer imitieren oder auf sensible Daten zugreifen können

![Diagramm des Angreifer-Codes, der auf der Zielwebsite ausgeführt wird](xss.svg)

Alle XSS-Angriffe hängen davon ab, dass eine Website zwei Dinge macht:

1. Sie akzeptiert eine Eingabe, die von einem Angreifer erstellt worden sein könnte.
2. Sie schließt diese Eingabe in eine Seite ein, ohne sie _zu bereinigen_: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausführbar ist.

## Zwei XSS-Beispiele

In diesem Abschnitt werden wir zwei Beispielseiten durchgehen, die anfällig für einen XSS-Angriff sind.

### Code-Injection im Browser

In diesem Beispiel nehmen wir an, dass die Website der Bank des Nutzers `my-bank.example.com` ist. Der Nutzer ist normalerweise darin angemeldet, und der Code auf der Website kann auf die Kontodetails des Nutzers zugreifen und Transaktionen ausführen. Die Website möchte eine Willkommensnachricht anzeigen, die für den aktuellen Nutzer personalisiert ist. Sie zeigt die Begrüßung in einem {{htmlelement("Heading_Elements", "heading")}}-Element an:

```html
<h1 id="welcome"></h1>
```

Die Seite erwartet, den Namen des Nutzers in einem [URL-Parameter](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#parameters) zu finden. Sie extrahiert den Parameterwert und verwendet diesen Wert, um eine personalisierte Begrüßungsnachricht zu erstellen:

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
2. Die Seite extrahiert den URL-Parameter namens `user`, dessen Wert `<img src=x onerror=alert("hello!")>` ist.
3. Die Seite weist dann diesen Wert der `innerHTML`-Eigenschaft des `welcome`-Elements zu, wodurch ein neues {{htmlelement("img")}}-Element erstellt wird, das einen `src`-Attributwert von `x` hat.
4. Da der `src`-Wert einen Fehler generiert, wird der `onerror`-[Event-Handler-Attribut](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_%e2%80%94_dont_use_these) ausgeführt, und der Angreifer kann seinen Code auf der Seite ausführen.

In diesem Fall zeigt der Code nur einen Hinweis an, aber auf einer echten Banking-Website könnte der Angreifer-Code alles tun, was der Frontend-Code der Bank selbst könnte.

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

Wenn der Nutzer einen Suchbegriff eingibt und "Senden" klickt, stellt der Browser eine GET-Anfrage an "/results", die den Suchbegriff als URL-Parameter enthält, wie:

```plain
https://example.org/results?search=bananas
```

Der Server möchte eine Liste von Suchergebnissen anzeigen, mit einem Titel, der angibt, wonach der Nutzer gesucht hat. Er extrahiert den Suchbegriff aus dem URL-Parameter. So könnte das in [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) aussehen:

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

1. Sendet der Browser eine GET-Anfrage an den Server. Der URL-Parameter der Anfrage enthält den schädlichen Code.
2. Der Server extrahiert den URL-Parameterwert und bettet ihn in die Seite ein.
3. Der Server gibt die Seite an den Browser zurück, der sie ausführt.

## Anatomie eines XSS-Angriffs

Wie bei allen XSS-Angriffen sind diese beiden Beispiele möglich, weil die Website:

1. Eine Eingabe verwendet, die von einem Angreifer erstellt worden sein könnte.
2. Die Eingabe in die Seite einfügt, ohne sie zu bereinigen.

Beide Beispiele verwenden denselben Vektor für die schädliche Eingabe: den URL-Parameter. Es gibt jedoch andere Vektoren, die Angreifer verwenden können.

Betrachten Sie zum Beispiel ein Blog mit Kommentaren. In einem solchen Fall:

1. Erlaubt die Website jedem, Kommentare mit einem {{htmlelement("form")}}-Element einzureichen.
2. Speichert die Kommentare in einer Datenbank.
3. Schließt die Kommentare in Seiten ein, die die Website anderen Nutzern bereitstellt.

Wenn die Kommentare nicht bereinigt werden, sind sie potenzielle Vektoren für XSS. Diese Art von Angriff wird manchmal als _gespeichertes_ oder _persistentes_ XSS bezeichnet und ist besonders schwerwiegend, da der infizierte Inhalt allen Nutzern, die die Seite aufrufen, jedes Mal serviert wird.

### Client und Server XSS

Ein großer Unterschied zwischen den beiden Beispielen besteht darin, dass der schädliche Code in verschiedenen Teilen des Codes der Website injiziert wird, und dies spiegelt die Architektur der jeweiligen Website wider.

Eine Website, die clientseitiges Rendering verwendet, wie eine {{Glossary("SPA", "Single-Page-App")}}, modifiziert Seiten im Browser, indem sie Web-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) direkt oder indirekt über ein Framework wie React verwendet. Während dieses Prozesses kommt es zur XSS-Injektion. Dies sehen wir im ersten Beispiel: der schädliche Code wird im Browser injiziert, indem ein Skript, das in der Seite läuft, den Wert des URL-Parameters der [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft zuweist, die ihren Wert als HTML-Code interpretiert.

Eine Website, die serverseitiges Rendering verwendet, baut Seiten auf dem Server mit einem Framework wie Django oder Express, meist durch Einfügen von Werten in Seitenschablonen. XSS-Injektion, falls es passiert, wird im Server während des Schablonenprozesses passieren. Das sehen wir im zweiten Beispiel: der Code wird im Server injiziert, indem der Express-Code den URL-Parameterwert in das Dokument einfügt, das er zurückgibt. Der XSS-Angriffs-Code wird dann ausgeführt, wenn der Browser die Seite auswertet.

In beiden Fällen ist die allgemeine Abwehrstrategie dieselbe, und wir werden dies im nächsten Abschnitt ausführlich behandeln. Die spezifischen Tools und APIs, die Sie verwenden werden, unterscheiden sich jedoch.

## Abwehrmaßnahmen gegen XSS

Wenn externe Eingaben in die Seiten Ihrer Website eingefügt werden müssen, gibt es zwei Hauptabwehrmaßnahmen gegen XSS:

1. Verwenden Sie _Ausgabe-Codierung_ und _Bereinigung_, um zu verhindern, dass Eingaben ausführbar werden. Wenn Sie Inhalt im Browser rendern, können Sie die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) verwenden, um sicherzustellen, dass Eingaben durch eine Bereinigungsfunktion geleitet werden, bevor sie in die Seite aufgenommen werden.
2. Verwenden Sie eine [Content Security Policy](/de/docs/Web/HTTP/CSP) (CSP), um dem Browser mitzuteilen, welche JavaScript- oder CSS-Ressourcen er ausführen darf. Dies ist eine Backup-Abwehr: Wenn die erste Abwehr versagt und ausführbare Eingaben in eine Seite gelangen, sollte eine ordnungsgemäß konfigurierte CSP verhindern, dass der Browser sie ausführt.

### Ausgabe-Codierung

_Ausgabe-Codierung_ ist der Prozess, bei dem Zeichen in einem Eingabestring, die ihn potenziell gefährlich machen, maskiert werden, sodass sie als Text behandelt werden, anstatt als Teil einer Sprache wie HTML.

Dies ist die geeignete Wahl, wenn Sie Eingaben als Text behandeln möchten, beispielsweise weil Ihre Website Vorlagen verwendet, um Eingaben in Inhalt zu interpolieren, wie in diesem [Django-Template](https://docs.djangoproject.com/en/5.1/ref/templates/language/)-Auszug:

```django
<p>You searched for \{{ search_term }}.</p>
```

Die meisten modernen Templating-Engines führen automatisch eine Ausgabe-Codierung durch. Beispielsweise führt Djangos Templating-Engine die folgenden Konvertierungen durch:

- `<` wird in `&lt;` konvertiert

- `>` wird in `&gt;` konvertiert

- `'` wird in `&#x27;` konvertiert

- `"` wird in `&quot;` konvertiert

- `&` wird in `&amp;` konvertiert

Das bedeutet, wenn Sie `<img src=x onerror=alert('XSS!')>` in das oben genannte Django-Template einfügen, wird es in `&lt;img src=x onerror=alert(&#x27;XSS!&#x27;)&gt;` umgewandelt, was als folgender Text angezeigt wird:

> You searched for &lt;img src=x onerror=alert('XSS!')&gt;.

Ähnlich, wenn Sie clientseitiges Rendering mit React verwenden, werden eingebettete Werte in JSX automatisch kodiert. Betrachten Sie zum Beispiel eine JSX-Komponente wie diese:

```jsx
import React from "react";

export function App(props) {
  return <div>Hello, {props.name}!</div>;
}
```

Wenn wir `<img src=x onerror=alert('XSS!')>` in `props.name` übergeben, wird es so gerendert:

> Hello, &lt;img src=x onerror=alert('XSS!')&gt;!

Eine der wichtigsten Maßnahmen zur Verhinderung von XSS-Angriffen ist die Verwendung einer angesehenen Templating-Engine, die eine robuste Ausgabe-Codierung bietet, und die Dokumentation zu lesen, um die Einschränkungen des gebotenen Schutzes zu verstehen.

#### Kontexte im Dokument

Selbst wenn Sie eine Templating-Engine verwenden, die HTML automatisch codiert, müssen Sie sich bewusst sein, in welchem Kontext im Dokument Sie unzuverlässigen Inhalt einfügen. Angenommen, Sie haben ein Django-Template wie dieses:

```django
<div>\{{ my_input }}</div>
```

In diesem Kontext befindet sich die Eingabe innerhalb von `<div>`-Tags, sodass der Browser sie als HTML auswertet. Sie müssen also gegen den Fall schützen, dass `my_input` HTML ist, das ausführbaren Code definiert, wie z. B. `<img src=x onerror="alert('XSS')">`. Die in Django eingebaute Ausgabe-Codierung verhindert diesen Angriff, indem sie Zeichen wie `<` und `>` in die HTML-Entities `&lt;` und `&gt;` kodiert.

Angenommen, die Vorlage sieht so aus:

```django
<div \{{ my_input }}></div>
```

In diesem Kontext behandelt der Browser die Variable `my_input` als HTML-Attribut. Wenn `my_input` `onmouseover="alert('XSS')"` ist, verhindert die von Django bereitgestellte Ausgabe-Codierung den Angriff nicht.

Der Browser verwendet unterschiedliche Regeln, um verschiedene Teile einer Webseite zu verarbeiten — HTML-Elemente und ihren Inhalt, HTML-Attribute, inline Styles, inline Scripts. Die Art der Codierung, die durchgeführt werden muss, ist je nach Kontext anders, in dem die Eingabe interpoliert wird.

Was in einem Kontext sicher ist, ist in einem anderen möglicherweise unsicher, und es ist notwendig, den Kontext, in dem man unzuverlässigen Inhalt interpoliert, zu verstehen und jede spezielle Behandlung, die dies erfordert, zu implementieren.

- **HTML-Kontexte**: Eingaben, die zwischen den Tags der meisten HTML-Elemente eingefügt werden (außer {{htmlelement("style")}} oder {{htmlelement("script")}}), werden als HTML interpretiert. Die von Templating-Engines angewandte Codierung bezieht sich größtenteils auf diesen Kontext.
- **HTML-Attributkontexte**: Das Einfügen von Eingaben als HTML-Attributwerte ist manchmal sicher und manchmal nicht, abhängig vom Attribut. Insbesondere Event-Handler-Attribute wie `onblur` sind unsicher, ebenso wie das [`src`](/de/docs/Web/HTML/Element/iframe#src)-Attribut des {{htmlelement("iframe")}} Elements.

  Es ist auch wichtig, Platzhalter für eingefügte Attributwerte zu zitieren, sonst könnte ein Angreifer ein weiteres unsicheres Attribut im bereitgestellten Wert einfügen. Beispielsweise zitiert diese Vorlage keinen eingefügten Wert:

  ```django example-bad
  <div class=\{{ my_class }}>...</div>
  ```

  Ein Angreifer könnte dies ausnutzen, um ein Event-Handler-Attribut zu injizieren, indem er eine Eingabe wie `some_id onmouseover="alert('XSS!')"` verwendet. Um den Angriff zu verhindern, zitieren Sie den Platzhalter:

  ```django example-good
    <div class="\{{ my_class }}">...</div>
  ```

- **JavaScript und CSS-Kontexte**: Das Einfügen von Eingaben innerhalb von {{htmlelement("script")}} oder {{htmlelement("style")}}-Tags ist fast immer unsicher.

### Sanitierung

Templating-Engines erlauben Entwicklern typischerweise, die Ausgabe-Codierung zu deaktivieren. Dies ist notwendig, wenn Entwickler unzuverlässigen Inhalt als HTML und nicht als Text einfügen möchten. In Django deaktiviert der [`safe`](https://docs.djangoproject.com/en/5.0/ref/templates/language/#how-to-turn-it-off)-Filter die Ausgabe-Codierung, und in React hat [`dangerouslySetInnerHTML`](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html) denselben Effekt.

In diesem Fall liegt es am Entwickler sicherzustellen, dass der Inhalt sicher ist, indem er ihn bereinigt.

_Sanitierung_ ist der Prozess des Entfernens unsicherer Merkmale aus einem HTML-String: beispielsweise {{htmlelement("script")}}-Tags oder inline Event-Handler. Da es schwierig ist, die Bereinigung wie die Ausgabe-Codierung richtig durchzuführen, wird empfohlen, eine angesehene Drittanbieter-Bibliothek dafür zu verwenden. [DOMPurify](https://github.com/cure53/DOMPurify) wird von vielen Experten, einschließlich [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#html-sanitization), empfohlen.

Betrachten Sie beispielsweise einen HTML-String wie:

```html
<div>
  <img src="x" onerror="alert('hello!')" />
  <script>
    alert("hello!");
  </script>
</div>
```

Wenn wir dies an DOMPurify übergeben, wird es zurückgegeben als:

```html
<div>
  <img src="x" />
</div>
```

### Vertrauenswürdige Typen

Eine Funktion zu haben, die einen gegebenen Eingabestring bereinigen kann, ist eine Sache, aber alle Stellen in einem Codebasis zu finden, an denen Eingabestrings bereinigt werden müssen, kann ein sehr schwieriges Problem sein.

Wenn Sie clientseitiges Rendering im Browser implementieren, gibt es eine Reihe von Web-APIs, die unsicher sind, wenn sie mit unbereinigtem unzuverlässigem Inhalt aufgerufen werden.

Beispielsweise interpretieren die folgenden APIs ihre String-Argumente als HTML und verwenden es, um das Seiten-DOM zu aktualisieren:

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) (das auch intern von React's `dangerouslySetInnerHTML` verwendet wird)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Document.write()`](/de/docs/Web/API/Document/write)

Andere APIs führen ihre Argumente direkt als JavaScript aus. Zum Beispiel:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) ermöglicht es einem Entwickler zu gewährleisten, dass Eingaben immer bereinigt werden, bevor sie an eine dieser APIs übergeben werden.

Der Schlüssel zur Durchsetzung der Verwendung vertrauenswürdiger Typen ist die [`require-trusted-types-for`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive. Wenn diese Direktive gesetzt ist, wird ein Ausnahmefehler ausgelöst, wenn String-Argumente an unsichere APIs übergeben werden:

```js example-bad
const userInput = "I might be XSS";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Stattdessen muss ein Entwickler einen _vertrauenswürdigen Typ_ an eine dieser APIs übergeben. Ein vertrauenswürdiger Typ ist ein Objekt, das aus einem String durch ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt erstellt wird, dessen Implementierung vom Entwickler definiert ist. Zum Beispiel:

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
> Die Trusted Types API bietet keine Bereinigungsfunktion: Sie ist ein Framework, in dem ein Entwickler sicherstellen kann, dass eine von ihm bereitgestellte Bereinigungsfunktion aufgerufen wurde. Im obigen Beispiel verwendet der Entwickler DOMPurify als Bereiniger für HTML-Bereiche innerhalb des Trusted Types Frameworks.

Die Trusted Types API hat noch keine gute Cross-Browser-Unterstützung, aber wenn sie dies haben wird, wird sie eine wichtige Verteidigung gegen DOM-basierte XSS-Angriffe sein.

### Deployment einer CSP

Ausgabe-Codierung und Bereinigung konzentrieren sich darauf, zu verhindern, dass schädliche Skripte in die Seiten einer Website gelangen. Eine der Hauptfunktionen einer Content Security Policy besteht darin, zu verhindern, dass schädliche Skripte ausgeführt werden, selbst wenn sie in den Seiten einer Website vorhanden sind. Das heißt, es ist eine Backup-Lösung, falls andere Abwehrmaßnahmen fehlschlagen.

Der empfohlene Ansatz zur Minderung von XSS mithilfe einer CSP ist eine [strikte CSP](/de/docs/Web/HTTP/CSP#strict_csp), die ein [Nonce](/de/docs/Web/HTTP/CSP#nonces) oder einen [Hash](/de/docs/Web/HTTP/CSP#hashes) verwendet, um dem Browser anzugeben, welche Skripte er im Dokument erwartet. Wenn es einem Angreifer gelingt, schädliche `<script>`-Elemente einzufügen, haben diese nicht das korrekte Nonce oder Hash, und der Browser wird sie nicht ausführen. Darüber hinaus werden verschiedene gängige XSS-Vektoren vollständig verboten: Inline-Event-Handler, `javascript:` URLs und APIs wie `eval()`, die ihre Argumente als JavaScript ausführen.

### Zusammenfassung der Verteidigung

Wir können die oben genannten Verteidigungen wie folgt zusammenfassen:

- Verwenden Sie beim Interpolieren von Eingaben in eine Seite, entweder im Browser oder auf dem Server, eine Templating-Engine, die eine Ausgabe-Codierung durchführt.
- Seien Sie sich des Kontexts bewusst, in dem Sie Eingaben interpolieren, und stellen Sie sicher, dass die geeignete Ausgabe-Codierung in diesem Kontext durchgeführt wird.
- Wenn Sie Eingaben als HTML einfügen müssen, bereinigen Sie sie mit einer angesehenen Bibliothek. Wenn Sie dies im Browser tun, verwenden Sie das Trusted Types Framework, um sicherzustellen, dass Eingaben von Ihrer Bereinigungsfunktion verarbeitet werden.
- Implementieren Sie eine strikte CSP.

## Siehe auch

- [Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) auf [owasp.org](https://owasp.org/)

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Security", "1", "0", "1")}}
</section>
