---
title: Cross-site Scripting (XSS)
slug: Web/Security/Attacks/XSS
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Ein Cross-site Scripting (XSS) Angriff ist ein Angriff, bei dem ein Angreifer in der Lage ist, eine Zielseite dazu zu bringen, bösartigen Code auszuführen, als ob er Teil der Website wäre.

## Überblick

Ein Webbrowser lädt Code von vielen verschiedenen Websites herunter und führt ihn auf dem Computer des Benutzers aus. Einige dieser Websites sind sehr vertrauenswürdig, und der Benutzer kann sie für sensible Operationen nutzen, wie zum Beispiel Finanztransaktionen oder medizinische Beratung. Bei anderen, wie einer lässigen Spieleseite, hat der Benutzer möglicherweise keine solche Vertrauensbeziehung. Die Grundlage des Sicherheitsmodells des Browsers ist, dass diese Seiten voneinander getrennt gehalten werden sollten, sodass Code von einer Website nicht in der Lage sein sollte, auf Objekte oder {{Glossary("credential", "Anmeldeinformationen")}} in einer anderen Website zuzugreifen. Dies wird als das [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) bezeichnet.

![Diagramm von 2 Seiten im Browser, in separaten Welten](same-origin.svg)

Bei einem erfolgreichen XSS-Angriff kann der Angreifer die Same-Origin-Policy unterwandern, indem er die Zielseite dazu bringt, bösartigen Code in ihrem eigenen Kontext auszuführen, als ob er aus der gleichen Quelle stammt. Der Code kann dann alles tun, was der eigene Code der Seite tun kann, einschließlich zum Beispiel:

- Zugriff und/oder Änderung aller Inhalte der geladenen Seiten der Website und aller Inhalte im lokalen Speicher
- HTTP-Anfragen mit den Anmeldeinformationen des Benutzers durchführen, wodurch der Angreifer den Benutzer imitieren oder auf sensible Daten zugreifen kann

![Diagramm des Angreifercodes, der auf einer Zielwebsite ausgeführt wird](xss.svg)

Alle XSS-Angriffe hängen davon ab, dass eine Website zwei Dinge tut:

1. Annahme von Eingaben, die von einem Angreifer erstellt worden sein könnten
2. Inklusion dieser Eingaben in eine Seite, ohne sie _zu bereinigen_: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausführbar sind.

## Zwei XSS-Beispiele

In diesem Abschnitt führen wir zwei Beispielseiten durch, die anfällig für einen XSS-Angriff sind.

### Code-Injektion im Browser

In diesem Beispiel nehmen wir an, dass die Website der Bank des Benutzers `my-bank.example.com` ist. Der Benutzer ist normalerweise dort angemeldet, und der Code auf der Website kann auf die Kontodetails des Benutzers zugreifen und Transaktionen ausführen. Die Website möchte eine Willkommensnachricht anzeigen, die für den aktuellen Benutzer personalisiert ist. Sie zeigt die Begrüßung in einem {{htmlelement("Heading_Elements", "heading")}}-Element an:

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

1. Lädt der Browser die Seite.
2. Die Seite extrahiert den URL-Parameter namens `user`, dessen Wert `<img src=x onerror=alert("hello!")>` ist.
3. Die Seite weist dann diesen Wert der Eigenschaft `innerHTML` des `welcome`-Elements zu, was ein neues {{htmlelement("img")}}-Element erstellt, das einen `src`-Attributwert von `x` hat.
4. Da der `src`-Wert einen Fehler erzeugt, wird die [Ereignishandler-Eigenschaft](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_%e2%80%94_dont_use_these) `onerror` ausgeführt, und der Angreifer kann seinen Code auf der Seite ausführen.

In diesem Fall zeigt der Code lediglich einen Alarm an, aber auf einer echten Bankwebsite könnte der Angreifercode alles tun, was der eigene Frontend-Code der Bank tun könnte.

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

Wenn der Benutzer einen Suchbegriff eingibt und "Absenden" klickt, macht der Browser eine GET-Anfrage an "/results", einschließlich des Suchbegriffs als URL-Parameter, wie folgt:

```plain
https://example.org/results?search=bananas
```

Der Server möchte eine Liste von Suchergebnissen mit einem Titel anzeigen, der angibt, wonach der Benutzer gesucht hat. Er extrahiert den Suchbegriff aus dem URL-Parameter. So könnte dies in [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) aussehen:

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
2. Der Server extrahiert den Wert des URL-Parameters und bettet ihn in die Seite ein.
3. Der Server gibt die Seite an den Browser zurück, der sie ausführt.

## Anatomie eines XSS-Angriffs

Wie alle XSS-Angriffe sind diese beiden Beispiele möglich, weil die Website:

1. Eingaben verwendet, die von einem Angreifer erstellt worden sein könnten
2. Die Eingabe in die Seite einfügt, ohne sie zu bereinigen.

Beide Beispiele verwenden den gleichen Vektor für die bösartige Eingabe: den URL-Parameter. Es gibt jedoch auch andere Vektoren, die Angreifer verwenden können.

Betrachten Sie zum Beispiel einen Blog mit Kommentaren. In einem solchen Fall:

1. Ermöglicht die Website jedem, Kommentare über ein {{htmlelement("form")}} Element einzureichen
2. Speichert die Kommentare in einer Datenbank
3. Fügt die Kommentare in Seiten ein, die die Website anderen Benutzern bereitstellt.

Wenn die Kommentare nicht bereinigt werden, dann sind sie potenzielle Vektoren für XSS. Diese Art von Angriff wird manchmal _stored_ oder _persistent_ XSS genannt und ist besonders schwerwiegend, da der infizierte Inhalt allen Benutzern angezeigt wird, die auf die Seite zugreifen, jedes Mal, wenn sie darauf zugreifen.

### Client- und Server-XSS

Ein großer Unterschied zwischen den beiden Beispielen ist, dass der bösartige Code in verschiedenen Teilen des Codebasis intrudiert wird, was die Architektur der jeweiligen Website widerspiegelt.

Eine Website, die Client-seitiges Rendering verwendet, wie zum Beispiel eine {{Glossary("SPA", "Single-Page-App")}}, verändert die Seiten im Browser, indem sie Web-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwendet, entweder direkt oder indirekt über ein Framework wie React. In diesem Prozess tritt die XSS-Injektion auf. Dies sehen wir im ersten Beispiel: Der bösartige Code wird im Browser injiziert, indem ein Skript, das in der Seite läuft, den URL-Parameterwert der Eigenschaft [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) zuweist, die ihren Wert als HTML-Code interpretiert.

Eine Website, die Server-seitiges Rendering verwendet, baut Seiten auf dem Server auf, indem sie ein Framework wie Django oder Express verwendet, meistens indem sie Werte in Seitentemplates einfügt. XSS-Injektionen, falls sie auftreten, geschehen auf dem Server während des Templating-Prozesses. Das sehen wir im zweiten Beispiel: Der Code wird im Server injiziert, indem der Express-Code den URL-Parameterwert in das zurückgegebene Dokument einfügt. Der XSS-Angriffscode läuft dann, wenn der Browser die Seite evaluiert.

In beiden Fällen ist der allgemeine Ansatz zur Verteidigung der gleiche, und wir werden im nächsten Abschnitt ausführlich darauf eingehen. Die spezifischen Werkzeuge und APIs, die Sie verwenden werden, sind jedoch unterschiedlich.

## Verteidigungen gegen XSS

Wenn Sie externe Eingaben in die Seiten Ihrer Website einfügen müssen, gibt es zwei Hauptverteidigungen gegen XSS:

1. Verwenden Sie _Ausgabe-Encoding_ und _Sanitizing_, um zu verhindern, dass Eingaben ausführbar werden. Wenn Sie Inhalte im Browser rendern, können Sie die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) verwenden, um sicherzustellen, dass Eingaben vor der Einbindung in die Seite durch eine Bereinigungsfunktion durchlaufen werden.
2. Verwenden Sie eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP), um dem Browser mitzuteilen, welche JavaScript- oder CSS-Ressourcen er ausführen darf. Dies ist eine Backup-Verteidigung: Falls die erste Verteidigung fehlschlägt und ausführbare Eingaben in eine Seite gelangen, sollte eine korrekt konfigurierte CSP den Browser daran hindern, sie auszuführen.

### Ausgabe-Encoding

_Ausgabe-Encoding_ ist der Prozess, bei dem Zeichen in der Eingabezeichenkette, die potenziell gefährlich sind, maskiert werden, sodass sie als Text und nicht als Teil einer Sprache wie HTML behandelt werden.

Dies ist die geeignete Wahl, wenn Sie Eingaben als Text behandeln möchten, beispielsweise weil Ihre Website Templates verwendet, die Eingaben in Inhalte interpolieren, wie in diesem [Django-Template](https://docs.djangoproject.com/en/5.1/ref/templates/language/):

```django
<p>You searched for \{{ search_term }}.</p>
```

Die meisten modernen Templating-Engines führen automatisch Ausgabe-Encoding durch. Beispielsweise führt Djangos Templating-Engine die folgenden Konvertierungen durch:

- `<` wird in `&lt;` umgewandelt

- `>` wird in `&gt;` umgewandelt

- `'` wird in `&#x27;` umgewandelt

- `"` wird in `&quot;` umgewandelt

- `&` wird in `&amp;` umgewandelt

Das bedeutet, dass wenn Sie `<img src=x onerror=alert('XSS!')>` in das oben erwähnte Django-Template übergeben, es in `&lt;img src=x onerror=alert(&#x27;XSS!&#x27;)&gt;` umgewandelt wird, was als folgender Text angezeigt wird:

> Sie haben nach &lt;img src=x onerror=alert('XSS!')&gt; gesucht.

Ähnlich, wenn Sie client-seitiges Rendering mit React durchführen, werden Werte, die in JSX eingebettet sind, automatisch kodiert. Betrachten Sie beispielsweise eine JSX-Komponente wie diese:

```jsx
import React from "react";

export function App(props) {
  return <div>Hello, {props.name}!</div>;
}
```

Wenn wir `<img src=x onerror=alert('XSS!')>` in `props.name` einfügen, wird es gerendert als:

> Hallo, &lt;img src=x onerror=alert('XSS!')&gt;!

Ein Teil der wichtigsten Maßnahmen zur Verhinderung von XSS-Angriffen ist die Verwendung einer gut beleumundeten Templating-Engine, die robustes Ausgabe-Encoding durchführt, und die Dokumentation zu lesen, um etwaige Einschränkungen der Schutzmaßnahmen zu verstehen.

#### Dokumentenkontexte

Selbst wenn Sie eine Templating-Engine verwenden, die HTML automatisch kodiert, müssen Sie sich bewusst sein, wo im Dokument Sie unzuverlässige Inhalte einfügen. Angenommen, Sie haben ein Django-Template wie dieses:

```django
<div>\{{ my_input }}</div>
```

In diesem Kontext befindet sich die Eingabe innerhalb von `<div>`-Tags, sodass der Browser sie als HTML auswertet. Sie müssen also gegen den Fall schützen, in dem `my_input` HTML ist, das ausführbaren Code definiert, wie `<img src=x onerror="alert('XSS')">`. Die im Django integrierte Ausgabe-Encoding verhindert diesen Angriff, indem Zeichen wie `<` und `>` als HTML-Entitäten `&lt;` und `&gt;` kodiert werden.

Angenommen, das Template sieht so aus:

```django
<div \{{ my_input }}></div>
```

In diesem Kontext behandelt der Browser die `my_input`-Variable als ein HTML-Attribut. Da Django Anführungszeichen (`"` → `&quot;`, `'` → `&#x27;`) kodiert, wird die Nutzlast `onmouseover="alert('XSS')"` nicht ausgeführt.
Ein nicht in Anführungszeichen gesetzter Payload wie `onmouseover=alert(1)` (oder mit Backticks, ``onmouseover=alert(`XSS`)``) wird jedoch immer noch ausgeführt, da Attributwerte nicht in Anführungszeichen stehen müssen und Backticks standardmäßig nicht maskiert werden.

Der Browser verwendet unterschiedliche Regeln, um verschiedene Teile einer Webseite zu verarbeiten — HTML-Elemente und deren Inhalt, HTML-Attribute, Inline-Stile, Inline-Scripts. Die Art der Kodierung, die durchgeführt werden muss, ist abhängig vom Kontext, in dem die Eingabe interpoliert wird.

Was in einem Kontext sicher ist, kann in einem anderen unsicher sein, und es ist notwendig, den Kontext zu verstehen, in dem Sie unzuverlässige Inhalte einfügen, und gegebenenfalls spezielle Handhabungen zu implementieren.

- **HTML-Kontexte**: Eingaben, die zwischen den Tags der meisten HTML-Elemente (außer {{htmlelement("style")}} oder {{htmlelement("script")}}) eingefügt werden, werden als HTML interpretiert. Die von Template-Engines angewandte Kodierung bezieht sich hauptsächlich auf diesen Kontext.
- **HTML-Attribut-Kontexte**: Das Einfügen von Eingaben als HTML-Attributwerte ist manchmal sicher und manchmal nicht, abhängig vom Attribut. Insbesondere Ereignishandler-Attribute wie `onblur` sind unsicher, ebenso wie das `src`-Attribut des {{htmlelement("iframe")}}-Elements.

  Es ist auch wichtig, Platzhalter für eingefügte Attributwerte in Anführungszeichen zu setzen, andernfalls könnte ein Angreifer in der Lage sein, ein zusätzliches unsicheres Attribut im bereitgestellten Wert einzufügen. Zum Beispiel zitiert dieses Template keinen eingefügten Wert:

  ```django example-bad
  <div class=\{{ my_class }}>...</div>
  ```

  Ein Angreifer könnte dies ausnutzen, um einen Ereignishandler-Attribut einzuschleusen, indem er eine Eingabe wie `some_id onmouseover=alert(1)` verwendet. Um den Angriff zu verhindern, setzen Sie den Platzhalter in Anführungszeichen:

  ```django example-good
    <div class="\{{ my_class }}">...</div>
  ```

- **JavaScript- und CSS-Kontexte**: Das Einfügen von Eingaben innerhalb von {{htmlelement("script")}} oder {{htmlelement("style")}}-Tags ist fast immer unsicher.

### Sanitizing

Templating-Engines erlauben Entwicklern typischerweise, die Ausgabe-Encoding zu deaktivieren. Dies ist notwendig, wenn Entwickler unvertrauenswürdige Inhalte als HTML einfügen möchten, nicht als Text. Zum Beispiel deaktiviert der [`safe`](https://docs.djangoproject.com/en/5.0/ref/templates/language/#how-to-turn-it-off) Filter in Django die Ausgabe-Encoding, und in React hat [`dangerouslySetInnerHTML`](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html) denselben Effekt.

In diesem Fall liegt es am Entwickler sicherzustellen, dass die Inhalte sicher sind, indem sie bereinigt werden.

_Sanitizing_ ist der Prozess des Entfernens unsicherer Elemente aus einer HTML-Zeichenkette: zum Beispiel {{htmlelement("script")}}-Tags oder Inline-Ereignishandler. Da es, wie auch bei der Ausgabe-Encoding, schwierig ist, das Bereinigen richtig zu machen, wird empfohlen, eine gut beleumundete Drittbibliothek dafür zu verwenden. [DOMPurify](https://github.com/cure53/DOMPurify) wird von vielen Experten einschließlich [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#html-sanitization) empfohlen.

Betrachten Sie zum Beispiel eine HTML-Zeichenkette wie:

```html
<div>
  <img src="x" onerror="alert('hello!')" />
  <script>
    alert("hello!");
  </script>
</div>
```

Wenn wir dies an DOMPurify übergeben, wird es zurückgeben:

```html
<div>
  <img src="x" />
</div>
```

### Trusted Types

Eine Funktion zu haben, die eine gegebene Eingabezeichenfolge bereinigen kann, ist eine Sache, aber alle Stellen zu finden, wo Eingaben bereinigt werden müssen, kann an sich ein sehr schwieriges Problem sein.

Wenn Sie im Browser client-seitiges Rendering implementieren, gibt es eine Reihe von Web-APIs, die unsicher sind, wenn sie mit unbereinigten unzuverlässigen Inhalten aufgerufen werden.

Beispielsweise interpretieren die folgenden APIs ihre String-Argumente als HTML und verwenden sie, um das Seiten-DOM zu aktualisieren:

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) (wird auch intern von Reacts `dangerouslySetInnerHTML` verwendet)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Document.write()`](/de/docs/Web/API/Document/write)

Andere APIs führen ihre Argumente direkt als JavaScript aus. Zum Beispiel:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) ermöglicht einem Entwickler, sicherzustellen, dass Eingaben immer bereinigt werden, bevor sie an eine dieser APIs übergeben werden.

Der Schlüssel zur Durchsetzung der Verwendung von Trusted Types ist die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive. Wenn diese Direktive gesetzt ist, wird das Übergeben von String-Argumenten an unsichere APIs eine Ausnahme auslösen:

```js example-bad
const userInput = "I might be XSS";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Stattdessen muss ein Entwickler einen _trusted type_ an eine dieser APIs übergeben. Ein trusted type ist ein Objekt, das von einem [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt erstellt wurde, dessen Implementierung vom Entwickler definiert wird. Zum Beispiel:

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
> Die Trusted Types API bietet keine Bereinigungsfunktion: Es ist ein Rahmenwerk, in dem ein Entwickler sicherstellen kann, dass eine von ihm bereitgestellte Bereinigungsfunktion aufgerufen wurde. Im obigen Beispiel verwendet der Entwickler DOMPurify als Bereinigungsfunktion für HTML-Sinks innerhalb des Trusted Types-Frameworks.

Die Trusted Types API hat noch keine gute Unterstützung über alle Browser hinweg, aber wenn dies der Fall ist, wird sie eine wichtige Verteidigung gegen DOM-basierte XSS-Angriffe sein.

### CSP bereitstellen

Ausgabe-Encoding und Bereinigen sind darauf ausgerichtet, zu verhindern, dass bösartige Skripte in die Seiten einer Website gelangen. Eine der Hauptfunktionen einer Content Security Policy ist es, zu verhindern, dass bösartige Skripte ausgeführt werden, selbst wenn sie sich in den Seiten einer Website befinden. Das heißt, sie ist eine Backup-Verteidigung, falls die anderen Verteidigungen versagen.

Der empfohlene Ansatz zur Minderung von XSS mit einer CSP ist eine [strikte CSP](/de/docs/Web/HTTP/Guides/CSP#strict_csp), die eine [Nonce](/de/docs/Web/HTTP/Guides/CSP#nonces) oder einen [Hash](/de/docs/Web/HTTP/Guides/CSP#hashes) verwendet, um dem Browser mitzuteilen, welche Skripte sie im Dokument erwartet. Wenn ein Angreifer es schafft, bösartige `<script>`-Elemente einzuschleusen, haben sie die korrekte Nonce oder den korrekten Hash nicht, und der Browser wird sie nicht ausführen. Darüber hinaus sind verschiedene häufige XSS-Vektoren vollständig unzulässig: inline Ereignishandler, `javascript:` URLs und APIs wie `eval()`, die ihre Argumente als JavaScript ausführen.

## Verteidigungsübersicht

- Verwenden Sie beim Interpolieren von Eingaben in eine Seite, entweder im Browser oder auf dem Server, eine Templating-Engine, die Ausgabe-Encoding durchführt.
- Seien Sie sich des Kontexts bewusst, in dem Sie Eingaben interpolieren, und stellen Sie sicher, dass die passende Ausgabe-Encoding in diesem Kontext durchgeführt wird.
- Wenn Sie Eingaben als HTML einschließen müssen, bereinigen Sie sie mit einer renommierten Bibliothek. Wenn Sie dies im Browser tun, verwenden Sie das Trusted Types-Framework, um sicherzustellen, dass Eingaben von Ihrer Bereinigungsfunktion verarbeitet werden.
- Implementieren Sie eine strikte CSP.

## Siehe auch

- [Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)
