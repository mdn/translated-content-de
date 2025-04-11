---
title: Cross-site Scripting (XSS)
slug: Web/Security/Attacks/XSS
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Ein Cross-site Scripting (XSS) Angriff ist ein Angriff, bei dem ein Angreifer in der Lage ist, eine Zielwebsite dazu zu bringen, bösartigen Code auszuführen, als ob er Teil der Website wäre.

## Überblick

Ein Webbrowser lädt Code von vielen verschiedenen Websites herunter und führt ihn auf dem Computer des Benutzers aus. Einige dieser Websites sind sehr vertrauenswürdig, und der Benutzer kann sie für sensible Operationen verwenden, wie z.B. Finanztransaktionen oder medizinische Beratung. Bei anderen, wie z.B. einer Casual-Gaming-Website, besteht möglicherweise keine solche Vertrauensbeziehung. Die Grundlage des Sicherheitsmodells des Browsers ist, dass diese Websites voneinander getrennt gehalten werden, sodass Code von einer Website keine Objekte oder {{Glossary("credential", "Anmeldedaten")}} auf einer anderen Website zugreifen kann. Dies wird als [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) bezeichnet.

![Diagramm von 2 Seiten im Browser, in separaten Welten](same-origin.svg)

In einem erfolgreichen XSS-Angriff ist der Angreifer in der Lage, die Same-Origin-Policy zu untergraben, indem er die Zielwebsite dazu bringt, bösartigen Code innerhalb ihres eigenen Kontexts auszuführen, als ob er im gleichen Ursprung wäre. Der Code kann dann alles tun, was der eigene Code der Website tun kann, einschließlich:

- Zugriff auf und/oder Änderung aller Inhalte der geladenen Seiten der Website und jeglicher Inhalte im lokalen Speicher
- HTTP-Anfragen mit den Anmeldedaten des Benutzers erstellen, wodurch sie den Benutzer imitieren oder auf sensible Daten zugreifen können

![Diagramm von Angreifercode, der auf einer Zielwebsite ausgeführt wird](xss.svg)

Alle XSS-Angriffe hängen davon ab, dass eine Website zwei Dinge tut:

1. Eingaben akzeptiert, die von einem Angreifer erstellt worden sein könnten
2. Diese Eingaben in eine Seite aufnimmt, ohne sie zu _sanitisieren_: also ohne sicherzustellen, dass sie nicht als JavaScript ausführbar werden.

## Zwei XSS-Beispiele

In diesem Abschnitt gehen wir durch zwei Beispielseiten, die für einen XSS-Angriff anfällig sind.

### Code Injection im Browser

In diesem Beispiel nehmen wir an, die Website der Bank des Benutzers ist `my-bank.example.com`. Der Benutzer ist typischerweise dort angemeldet, und der Code auf der Website kann auf die Kontodaten des Benutzers zugreifen und Transaktionen durchführen. Die Website möchte eine Begrüßungsnachricht anzeigen, die für den aktuellen Benutzer personalisiert ist. Sie zeigt die Begrüßung in einem {{htmlelement("Heading_Elements", "heading")}}-Element an:

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

Angenommen, diese Seite wird von `https://my-bank.example.com/welcome` bereitgestellt. Um die Schwachstelle auszunutzen, sendet ein Angreifer dem Benutzer einen Link wie diesen:

```html
<a
  href="https://my-bank.example.com/welcome?user=<img src=x onerror=alert('hello!')>">
  Get a free kitten!</a
>
```

Wenn der Benutzer auf den Link klickt:

1. Lädt der Browser die Seite.
2. Die Seite extrahiert den URL-Parameter mit dem Namen `user`, dessen Wert `<img src=x onerror=alert("hello!")>` ist.
3. Die Seite weist dann diesen Wert der `innerHTML`-Eigenschaft des `welcome`-Elements zu, was ein neues {{htmlelement("img")}}-Element erstellt, das einen `src`-Attributwert von `x` hat.
4. Da der `src`-Wert einen Fehler generiert, wird die `onerror`-[Ereignis-Handler-Eigenschaft](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_%E2%80%94_dont_use_these) ausgeführt, und der Angreifer kann seinen Code in der Seite ausführen lassen.

In diesem Fall zeigt der Code nur eine Warnung an, aber auf einer echten Banking-Website könnte der Angreifercode alles tun, was der Front-End-Code der Bank tun könnte.

### Code Injection auf dem Server

In diesem Beispiel betrachten wir eine Website mit einer Suchfunktion. Das HTML für die Suchseite könnte so aussehen:

```html
<h1>Search</h1>

<form action="/results">
  <label for="mySearch">Search for an item:</label>
  <input id="mySearch" type="search" name="search" />
  <input type="submit" />
</form>
```

Wenn der Benutzer einen Suchbegriff eingibt und "Submit" klickt, macht der Browser eine GET-Anfrage an "/results", einschließlich des Suchbegriffs als URL-Parameter, wie folgt:

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

Um diese Schwachstelle auszunutzen, sendet ein Angreifer dem Benutzer einen Link wie diesen:

```html
<a href="http://example.org/results?search=<img src=x onerror=alert('hello')">
  Get a free kitten!</a
>
```

Wenn der Benutzer auf den Link klickt:

1. Sendet der Browser eine GET-Anfrage an den Server. Der URL-Parameter des Requests enthält den bösartigen Code.
2. Der Server extrahiert den Wert des URL-Parameters und bettet ihn in die Seite ein.
3. Der Server gibt die Seite an den Browser zurück, der sie ausführt.

## Anatomie eines XSS-Angriffs

Wie alle XSS-Angriffe sind diese beiden Beispiele möglich, weil die Website:

1. Eingaben verwendet, die von einem Angreifer erstellt worden sein könnten
2. Die Eingabe in die Seite aufnimmt, ohne sie zu sanitisieren.

Beide Beispiele verwenden denselben Vektor für die bösartige Eingabe: den URL-Parameter. Es gibt jedoch auch andere Vektoren, die Angreifer verwenden können.

Zum Beispiel, betrachten Sie einen Blog mit Kommentaren. In einem Fall wie diesem:

1. Erlaubt die Website jedem, Kommentare über ein {{htmlelement("form")}}-Element einzureichen
2. Speichert die Kommentare in einer Datenbank
3. Nimmt die Kommentare in Seiten auf, die die Website an andere Benutzer liefert.

Sind die Kommentare nicht saniert, dann sind sie potenzielle Vektoren für XSS. Diese Art von Angriff wird manchmal als _gespeichertes_ oder _persistentes_ XSS bezeichnet und ist besonders schwerwiegend, weil der infizierte Inhalt allen Benutzern, die die Seite aufrufen, jedes Mal, wenn sie zugegriffen wird, ausgeliefert wird.

### Client- und Server-XSS

Ein großer Unterschied zwischen den beiden Beispielen ist, dass der bösartige Code an verschiedenen Stellen im Codebase der Website injiziert wird, was die Architektur jeder Website widerspiegelt.

Eine Website, die Client-side Rendering verwendet, wie z.B. eine {{Glossary("SPA", "Single-Page-App")}}, modifiziert Seiten im Browser, indem sie Web-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) direkt oder indirekt über ein Framework wie React verwendet. Im Laufe dieses Prozesses erfolgt die XSS-Injektion. Das sehen wir im ersten Beispiel: Der bösartige Code wird im Browser injiziert, indem ein Script, das in der Seite läuft, den Wert des URL-Parameters der [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft zuweist, die ihren Wert als HTML-Code interpretiert.

Eine Website, die Server-side Rendering verwendet, baut Seiten auf dem Server auf, indem sie ein Framework wie Django oder Express verwendet, meistens indem Werte in Seitenschablonen eingesetzt werden. XSS-Injektionen, falls sie auftreten, geschehen auf dem Server während des Schablonenprozesses. Das sehen wir im zweiten Beispiel: Der Code wird auf dem Server injiziert, indem der Express-Code den Wert des URL-Parameters in das Dokument einfügt, das er zurückgibt. Der XSS-Angriffscode wird dann ausgeführt, wenn der Browser die Seite auswertet.

In beiden Fällen ist der allgemeine Ansatz zur Abwehr derselbe, und wir werden im nächsten Abschnitt ausführlich darauf eingehen. Die spezifischen Tools und APIs, die Sie verwenden, werden jedoch unterschiedlich sein.

## Abwehrmaßnahmen gegen XSS

Wenn Sie externe Eingaben in die Seiten Ihrer Website einfügen müssen, gibt es zwei Hauptabwehrmaßnahmen gegen XSS:

1. Verwenden Sie _Ausgabe-Codierung_ und _Sanitisierung_, um zu verhindern, dass Eingaben ausführbar werden. Wenn Sie Inhalte im Browser rendern, können Sie die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) verwenden, um sicherzustellen, dass Eingaben durch eine Sanitisierungsfunktion geleitet werden, bevor sie in die Seite aufgenommen werden.
2. Verwenden Sie eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP), um dem Browser mitzuteilen, welche JavaScript- oder CSS-Ressourcen ausgeführt werden dürfen. Dies ist eine Backup-Abwehr: Wenn die erste Abwehr versagt und ausführbare Eingaben in eine Seite gelangen, sollte eine richtig konfigurierte CSP den Browser daran hindern, sie auszuführen.

### Ausgabe-Codierung

_Ausgabe-Codierung_ ist der Prozess, bei dem Zeichen in der Eingabezeichenfolge, die potenziell gefährlich sein könnten, maskiert werden, sodass sie als Text behandelt werden, anstatt als Teil einer Sprache wie HTML behandelt zu werden.

Dies ist die passende Wahl, wenn Sie Eingaben als Text behandeln möchten, zum Beispiel, weil Ihre Website Schablonen verwendet, die Eingaben in Inhalt interpolieren, wie in diesem [Django Template](https://docs.djangoproject.com/en/5.1/ref/templates/language/) Ausschnitt:

```django
<p>You searched for \{{ search_term }}.</p>
```

Die meisten modernen Schablonen-Engines führen automatisch eine Ausgabe-Codierung durch. Zum Beispiel führt die Schablonen-Engine von Django folgende Konvertierungen durch:

- `<` wird in `&lt;` umgewandelt

- `>` wird in `&gt;` umgewandelt

- `'` wird in `&#x27;` umgewandelt

- `"` wird in `&quot;` umgewandelt

- `&` wird in `&amp;` umgewandelt

Das bedeutet, dass wenn Sie `<img src=x onerror=alert('XSS!')>` in das oben genannte Django Template einfügen, es in `&lt;img src=x onerror=alert(&#x27;XSS!&#x27;)&gt;` umgewandelt wird, was als folgender Text angezeigt wird:

> Sie haben nach &lt;img src=x onerror=alert('XSS!')&gt; gesucht.

Ähnlich, wenn Sie Client-side Rendering mit React durchführen, werden in JSX eingebettete Werte automatisch codiert. Betrachten Sie zum Beispiel eine JSX-Komponente wie diese:

```jsx
import React from "react";

export function App(props) {
  return <div>Hello, {props.name}!</div>;
}
```

Wenn wir `<img src=x onerror=alert('XSS!')>` in `props.name` einfügen, wird es gerendert als:

> Hallo, &lt;img src=x onerror=alert('XSS!')&gt;!

Einer der wichtigsten Teile der Verhinderung von XSS-Angriffen ist die Verwendung einer angesehenen Schablonen-Engine, die eine robuste Ausgabe-Codierung durchführt, und deren Dokumentation zu lesen, um alle Einschränkungen des gebotenen Schutzes zu verstehen.

#### Dokumentkontexte

Selbst wenn Sie eine Schablonen-Engine verwenden, die automatisiert HTML codiert, müssen Sie sich bewusst sein, wo im Dokument Sie nicht vertrauenswürdige Inhalte einfügen. Zum Beispiel, nehmen Sie an, dass Sie ein Django Template wie dieses haben:

```django
<div>\{{ my_input }}</div>
```

In diesem Kontext ist die Eingabe innerhalb von `<div>`-Tags, sodass der Browser sie als HTML auswertet. Daher müssen Sie sich gegen den Fall schützen, dass `my_input` HTML ist, das ausführbaren Code definiert, wie `<img src=x onerror="alert('XSS')">`. Die in Django eingebaute Ausgabe-Codierung verhindert diesen Angriff, indem sie Zeichen wie `<` und `>` als HTML-Entitäten `&lt;` und `&gt;` kodiert.

Angenommen, das Template sieht folgendermaßen aus:

```django
<div \{{ my_input }}></div>
```

In diesem Kontext behandelt der Browser die `my_input`-Variable als HTML-Attribut. Wenn `my_input` `onmouseover="alert('XSS')"` ist, wird die Ausgabe-Codierung von Django den Angriff nicht verhindern.

Der Browser verwendet verschiedene Regeln, um verschiedene Teile einer Webseite zu verarbeiten — HTML-Elemente und deren Inhalt, HTML-Attribute, Inline-Stile, Inline-Skripte. Die Art der notwendigen Codierung ist unterschiedlich, abhängig vom Kontext, in dem die Eingabe eingefügt wird.

Was in einem Kontext sicher ist, kann in einem anderen unsicher sein, und es ist notwendig, den Kontext zu verstehen, in dem Sie nicht vertrauenswürdige Inhalte einfügen, und jede spezielle Handhabung, die dies erfordert, zu implementieren.

- **HTML-Kontexte**: Eingaben, die zwischen den Tags der meisten HTML-Elemente (außer {{htmlelement("style")}} oder {{htmlelement("script")}}) eingefügt werden, werden als HTML interpretiert. Die von Schablonen-Engines angewendete Codierung konzentriert sich hauptsächlich auf diesen Kontext.
- **HTML-Attributkontexte**: Das Einfügen von Eingaben als HTML-Attributwerte ist manchmal sicher und manchmal nicht, abhängig vom Attribut. Insbesondere Ereignis-Handler-Attribute wie `onblur` sind unsicher, ebenso wie das [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src) Attribut des {{htmlelement("iframe")}} Elements.

  Es ist auch wichtig, Platzhalter für eingefügte Attributwerte zu zitieren, da ein Angreifer möglicherweise in der Lage ist, ein weiteres unsicheres Attribut in den bereitgestellten Wert einzufügen. Zum Beispiel zitiert dieses Template keinen eingefügten Wert:

  ```django example-bad
  <div class=\{{ my_class }}>...</div>
  ```

  Ein Angreifer kann dies ausnutzen, um ein Ereignis-Handler-Attribut zu injizieren, indem er eine Eingabe wie `some_id onmouseover="alert('XSS!')"` verwendet. Um den Angriff zu verhindern, zitieren Sie den Platzhalter:

  ```django example-good
    <div class="\{{ my_class }}">...</div>
  ```

- **JavaScript- und CSS-Kontexte**: Das Einfügen von Eingaben in {{htmlelement("script")}} oder {{htmlelement("style")}} Tags ist fast immer unsicher.

### Sanitisierung

Schablonen-Engines ermöglichen Entwicklern normalerweise, die Ausgabe-Codierung zu deaktivieren. Dies ist notwendig, wenn Entwickler nicht vertrauenswürdige Inhalte als HTML, nicht als Text, einfügen möchten. In Django deaktiviert der [`safe`](https://docs.djangoproject.com/en/5.0/ref/templates/language/#how-to-turn-it-off) Filter die Ausgabe-Codierung, und in React hat [`dangerouslySetInnerHTML`](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html) denselben Effekt.

In diesem Fall liegt es am Entwickler sicherzustellen, dass der Inhalt sicher ist, indem er ihn sanitiert.

_Sanitisierung_ ist der Prozess des Entfernens unsicherer Features aus einer HTML-Zeichenkette: zum Beispiel {{htmlelement("script")}} Tags oder Inline-Ereignis-Handler. Da die Sanitisierung, ebenso wie die Ausgabe-Codierung, schwer richtig zu implementieren ist, wird angeraten, eine seriöse Drittanbieter-Bibliothek zu verwenden. [DOMPurify](https://github.com/cure53/DOMPurify) wird von vielen Experten, einschließlich [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#html-sanitization), empfohlen.

Zum Beispiel, betrachten Sie eine HTML-Zeichenkette wie:

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

Eine Funktion zu haben, die einen gegebenen Eingabestring sanitisieren kann, ist das eine, aber alle Stellen im Code zu finden, an denen Eingabestrings sanitisiert werden müssen, kann ein sehr schwieriges Problem sein.

Wenn Sie Client-side Rendering im Browser implementieren, gibt es eine Reihe von Web-APIs, die unsicher sind, wenn sie mit nicht sanierten, nicht vertrauenswürdigen Inhalten aufgerufen werden.

Zum Beispiel interpretieren die folgenden APIs ihre Zeichenkettenargumente als HTML und verwenden sie, um den DOM der Seite zu aktualisieren:

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) (das auch intern durch Reacts `dangerouslySetInnerHTML` verwendet wird)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Document.write()`](/de/docs/Web/API/Document/write)

Andere APIs führen ihre Argumente direkt als JavaScript aus. Zum Beispiel:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) ermöglicht es einem Entwickler, sicherzustellen, dass Eingaben immer saniert werden, bevor sie an eine dieser APIs übergeben werden.

Der Schlüssel zur Durchsetzung der Verwendung vertrauenswürdiger Typen ist die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive. Wenn diese Direktive gesetzt ist, wird das Übergeben von Zeichenkettenargumenten an unsichere APIs eine Ausnahme auslösen:

```js example-bad
const userInput = "I might be XSS";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Stattdessen muss ein Entwickler einen _vertrauenswürdigen Typ_ an eine dieser APIs übergeben. Ein vertrauenswürdiger Typ ist ein
Objekt, das aus einer Zeichenkette durch ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) Objekt erstellt wird, dessen Implementierung vom Entwickler definiert wird. Zum Beispiel:

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
> Die Trusted Types API bietet keine Sanitisierungsfunktion: Es ist ein Framework, in dem ein Entwickler sicherstellen kann, dass eine von ihm bereitgestellte Sanitisierungsfunktion aufgerufen wurde. Im obigen Beispiel verwendet der Entwickler DOMPurify als Sanierer für HTML-Senken im Trusted Types Framework.

Die Trusted Types API hat noch keine gute Unterstützung in verschiedenen Browsern, aber wenn sie verfügbar ist, wird sie eine wichtige Verteidigung gegen DOM-basierte XSS-Angriffe sein.

### Implementierung einer CSP

Ausgabe-Codierung und Sanitisierung zielen darauf ab, zu verhindern, dass bösartige Skripte in die Seiten einer Website gelangen. Eine der Hauptfunktionen einer Content-Security-Policy ist es, zu verhindern, dass bösartige Skripte ausgeführt werden, selbst wenn sie in den Seiten einer Website sind. Das heißt, es ist eine Absicherung, falls die anderen Abwehrmaßnahmen fehlschlagen.

Der empfohlene Ansatz zur Minderung von XSS mit einer CSP ist eine [strikte CSP](/de/docs/Web/HTTP/Guides/CSP#strict_csp), die einen [nonce](/de/docs/Web/HTTP/Guides/CSP#nonces) oder einen [Hash](/de/docs/Web/HTTP/Guides/CSP#hashes) verwendet, um dem Browser mitzuteilen, welche Skripte er im Dokument erwartet zu sehen. Wenn es einem Angreifer gelingt, bösartige `<script>`-Elemente einzufügen, dann haben sie nicht den korrekten Nonce oder Hash, und der Browser wird sie nicht ausführen. Zusätzlich werden verschiedene gängige XSS-Vektoren vollständig untersagt: Inline-Ereignis-Handler, `javascript:`-URLs und APIs wie `eval()`, die ihre Argumente als JavaScript ausführen.

### Verteidigungs-Checkliste zusammengefasst

Zusammengefasst können die oben genannten Verteidigungen wie folgt aufgelistet werden:

- Verwenden Sie bei der Interpolation von Eingaben in eine Seite, entweder im Browser oder auf dem Server, eine Schablonen-Engine, die Ausgabecodierung durchführt.
- Seien Sie sich des Kontexts bewusst, in dem Sie Eingaben interpolieren, und stellen Sie sicher, dass die passende Ausgabecodierung in diesem Kontext durchgeführt wird.
- Wenn Sie Eingaben als HTML einfügen müssen, säubern Sie diese mit einer anerkannten Bibliothek. Wenn Sie dies im Browser tun, verwenden Sie das Trusted-Types-Framework, um sicherzustellen, dass die Eingabe durch Ihre Sanitisierungsfunktion verarbeitet wird.
- Implementieren Sie eine strikte CSP.

## Siehe auch

- [Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) auf [owasp.org](https://owasp.org/)

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Security", "1", "0", "1")}}
</section>
