---
title: Cross-Site-Scripting (XSS)
slug: Web/Security/Attacks/XSS
l10n:
  sourceCommit: dd70ed064388b0fac4338321f727c8840a508b64
---

Bei einem Cross-Site-Scripting-Angriff (XSS) gelingt es einem Angreifer, eine Zielwebsite dazu zu bringen, bösartigen Code auszuführen, als wäre er Teil der Website.

## Überblick

Ein Webbrowser lädt Code von vielen verschiedenen Websites herunter und führt ihn auf dem Computer des Benutzers aus. Einige dieser Websites sind sehr vertrauenswürdig und werden möglicherweise für sensible Vorgänge wie Finanztransaktionen oder medizinische Beratung genutzt. Zu anderen, etwa einer einfachen Spielewebsite, besteht möglicherweise kein solches Vertrauensverhältnis. Die Grundlage des Sicherheitsmodells des Browsers ist, dass diese Websites voneinander getrennt bleiben: Code einer Website darf nicht auf Objekte oder {{Glossary("credential", "Anmeldeinformationen")}} einer anderen Website zugreifen können. Dies wird als [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) bezeichnet.

![Diagramm mit zwei Websites, die im Browser voneinander getrennt sind](same-origin.svg)

Bei einem erfolgreichen XSS-Angriff umgeht der Angreifer die Same-Origin-Policy, indem er die Zielwebsite dazu bringt, bösartigen Code in ihrem eigenen Kontext auszuführen, als stamme er von derselben Origin. Der Code kann dann alles tun, was auch der eigene Code der Website tun kann, beispielsweise:

- Auf sämtliche Inhalte der geladenen Seiten der Website sowie auf Inhalte im lokalen Speicher zugreifen und/oder diese verändern
- HTTP-Anfragen mit den Anmeldeinformationen des Benutzers stellen und sich so als dieser ausgeben oder auf sensible Daten zugreifen

![Diagramm mit Angreifercode, der auf der Zielwebsite ausgeführt wird](xss.svg)

Alle XSS-Angriffe setzen voraus, dass eine Website zwei Dinge tut:

1. Sie akzeptiert Eingaben, die von einem Angreifer erstellt worden sein könnten.
2. Sie bindet diese Eingaben in eine Seite ein, ohne sie zu _bereinigen_ – also ohne sicherzustellen, dass sie nicht als JavaScript ausgeführt werden können.

## Zwei XSS-Beispiele

In diesem Abschnitt betrachten wir zwei Beispielseiten, die für XSS-Angriffe anfällig sind.

### Code-Injektion im Browser

Angenommen, die Website der Bank des Benutzers lautet `my-bank.example.com`. Der Benutzer ist dort normalerweise angemeldet, und Code auf der Website kann auf seine Kontodaten zugreifen und Transaktionen ausführen. Die Website möchte eine personalisierte Willkommensnachricht für den aktuellen Benutzer anzeigen. Sie zeigt die Begrüßung in einem {{htmlelement("Heading_Elements", "heading")}}-Element an:

```html
<h1 id="welcome"></h1>
```

Die Seite erwartet den Namen des aktuellen Benutzers in einem [URL-Parameter](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#parameters). Sie liest den Parameterwert aus und erstellt damit eine personalisierte Begrüßung:

```js
const params = new URLSearchParams(window.location.search);
const user = params.get("user");
const welcome = document.querySelector("#welcome");

welcome.innerHTML = `Welcome back, ${user}!`;
```

Nehmen wir an, diese Seite wird unter `https://my-bank.example.com/welcome` bereitgestellt. Um die Sicherheitslücke auszunutzen, sendet ein Angreifer dem Benutzer einen Link wie diesen:

```html
<a
  href="https://my-bank.example.com/welcome?user=<img src=x onerror=alert('hello!')>">
  Get a free kitten!</a
>
```

Wenn der Benutzer auf den Link klickt:

1. Der Browser lädt die Seite.
2. Die Seite liest den URL-Parameter `user` aus, dessen Wert `<img src=x onerror=alert("hello!")>` ist.
3. Anschließend weist die Seite diesen Wert der `innerHTML`-Eigenschaft des `welcome`-Elements zu. Dadurch entsteht ein neues {{htmlelement("img")}}-Element mit dem `src`-Attributwert `x`.
4. Da der `src`-Wert einen Fehler auslöst, wird die [Event-Handler-Eigenschaft](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_%e2%80%94_dont_use_these) `onerror` ausgeführt. So kann der Angreifer seinen Code auf der Seite ausführen.

In diesem Fall zeigt der Code lediglich eine Warnmeldung an. Auf einer echten Bankenwebsite könnte der Angreifercode jedoch alles tun, was auch der Frontend-Code der Bank tun kann.

### Code-Injektion auf dem Server

Betrachten wir eine Website mit einer Suchfunktion. Der HTML-Code der Suchseite könnte so aussehen:

```html
<h1>Search</h1>

<form action="/results">
  <label for="mySearch">Search for an item:</label>
  <input id="mySearch" type="search" name="search" />
  <input type="submit" />
</form>
```

Wenn der Benutzer einen Suchbegriff eingibt und auf „Submit“ klickt, sendet der Browser eine GET-Anfrage an „/results“, die den Suchbegriff als URL-Parameter enthält:

```plain
https://example.org/results?search=bananas
```

Der Server möchte eine Liste von Suchergebnissen anzeigen, mit einer Überschrift, die angibt, wonach der Benutzer gesucht hat. Dazu liest er den Suchbegriff aus dem URL-Parameter aus. In [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) könnte das so aussehen:

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
2. Der Server liest den Wert des URL-Parameters aus und bettet ihn in die Seite ein.
3. Der Server sendet die Seite an den Browser zurück, der den Code ausführt.

## Anatomie eines XSS-Angriffs

Wie alle XSS-Angriffe sind diese beiden Beispiele möglich, weil die Website:

1. Eingaben verwendet, die von einem Angreifer erstellt worden sein könnten.
2. Die Eingaben ohne Bereinigung in die Seite einbindet.

In beiden Beispielen dient derselbe Weg zur Einschleusung der bösartigen Eingabe: der URL-Parameter. Angreifer können jedoch auch andere Wege nutzen.

Betrachten wir beispielsweise einen Blog mit Kommentaren. Eine solche Website:

1. Erlaubt es allen, über ein {{htmlelement("form")}}-Element Kommentare einzureichen.
2. Speichert die Kommentare in einer Datenbank.
3. Bindet die Kommentare in Seiten ein, die sie anderen Benutzern bereitstellt.

Werden die Kommentare nicht bereinigt, können sie als Weg für XSS-Angriffe dienen. Diese Art von Angriff wird manchmal als _gespeichertes_ oder _persistentes_ XSS bezeichnet. Sie ist besonders schwerwiegend, da der infizierte Inhalt jedes Mal an alle Benutzer ausgeliefert wird, die die Seite aufrufen.

### Clientseitiges und serverseitiges XSS

Ein wesentlicher Unterschied zwischen den beiden Beispielen besteht darin, an welcher Stelle der Codebasis der Website der bösartige Code eingeschleust wird. Das hängt mit der Architektur der jeweiligen Website zusammen.

Eine Website, die clientseitiges Rendering verwendet, etwa eine {{Glossary("SPA", "Single-Page-App")}}, verändert Seiten im Browser. Dafür nutzt sie Web-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement), entweder direkt oder indirekt über ein Framework wie React. Während dieses Vorgangs kann die XSS-Injektion stattfinden. Das sehen wir im ersten Beispiel: Ein auf der Seite ausgeführtes Skript weist den Wert des URL-Parameters der Eigenschaft [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) zu, die den Wert als HTML-Code interpretiert. So wird der bösartige Code im Browser eingeschleust.

Eine Website mit serverseitigem Rendering erstellt Seiten auf dem Server, beispielsweise mit einem Framework wie Django oder Express. Meist werden dabei Werte in Seitenvorlagen eingefügt. Eine XSS-Injektion findet in diesem Fall auf dem Server während der Verarbeitung der Vorlage statt. Das sehen wir im zweiten Beispiel: Der Express-Code fügt den Wert des URL-Parameters in das zurückgegebene Dokument ein. Der XSS-Code wird anschließend ausgeführt, wenn der Browser die Seite verarbeitet.

In beiden Fällen ist der allgemeine Schutzansatz derselbe; der nächste Abschnitt erläutert ihn genauer. Die konkreten Werkzeuge und APIs unterscheiden sich jedoch.

## Schutzmaßnahmen gegen XSS

Wenn Sie externe Eingaben in die Seiten Ihrer Website einbinden müssen, gibt es zwei wichtige Schutzmaßnahmen gegen XSS:

1. Verwenden Sie _Output-Encoding_ und _Bereinigung_, damit Eingaben nicht ausführbar werden. Wenn Sie Inhalte im Browser rendern, können Sie mit der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) sicherstellen, dass Eingaben eine Bereinigungsfunktion durchlaufen, bevor sie in die Seite eingebunden werden.
2. Verwenden Sie eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) (CSP), um dem Browser vorzugeben, welche JavaScript- oder CSS-Ressourcen er ausführen darf. Dies ist eine zusätzliche Schutzmaßnahme: Wenn die erste Maßnahme versagt und ausführbare Eingaben in eine Seite gelangen, sollte eine korrekt konfigurierte CSP verhindern, dass der Browser sie ausführt.

### Output-Encoding

Beim _Output-Encoding_ werden Zeichen in der Eingabezeichenfolge maskiert, die sie potenziell gefährlich machen. Dadurch werden sie als Text behandelt und nicht als Teil einer Sprache wie HTML.

Dies ist die richtige Wahl, wenn Sie Eingaben als Text behandeln möchten – beispielsweise, weil Ihre Website Vorlagen verwendet, die Eingaben in Inhalte einfügen, wie in diesem Auszug aus einer [Django-Vorlage](https://docs.djangoproject.com/en/stable/ref/templates/language/):

```django
<p>You searched for \{{ search_term }}.</p>
```

Die meisten modernen Template-Engines führen Output-Encoding automatisch durch. Die Template-Engine von Django nimmt beispielsweise folgende Umwandlungen vor:

- `<` wird in `&lt;` umgewandelt.

- `>` wird in `&gt;` umgewandelt.

- `'` wird in `&#x27;` umgewandelt.

- `"` wird in `&quot;` umgewandelt.

- `&` wird in `&amp;` umgewandelt.

Wenn Sie also `<img src=x onerror=alert('XSS!')>` an die obige Django-Vorlage übergeben, wird die Eingabe in `&lt;img src=x onerror=alert(&#x27;XSS!&#x27;)&gt;` umgewandelt und als folgender Text angezeigt:

> Ihre Suche nach &lt;img src=x onerror=alert('XSS!')&gt;.

Auch beim clientseitigen Rendering mit React werden in JSX eingebettete Werte automatisch kodiert. Betrachten wir beispielsweise eine JSX-Komponente wie diese:

```jsx
import React from "react";

export function App(props) {
  return <div>Hello, {props.name}!</div>;
}
```

Wenn wir `<img src=x onerror=alert('XSS!')>` an `props.name` übergeben, wird es so gerendert:

> Hallo, &lt;img src=x onerror=alert('XSS!')&gt;!

Eine der wichtigsten Maßnahmen zur Verhinderung von XSS-Angriffen besteht darin, eine bewährte Template-Engine mit zuverlässigem Output-Encoding zu verwenden. Lesen Sie deren Dokumentation, um mögliche Einschränkungen des gebotenen Schutzes zu verstehen.

#### Dokumentkontexte

Auch wenn Sie eine Template-Engine verwenden, die HTML automatisch kodiert, müssen Sie beachten, an welcher Stelle im Dokument Sie nicht vertrauenswürdige Inhalte einbinden. Angenommen, Sie haben eine Django-Vorlage wie diese:

```django
<div>\{{ my_input }}</div>
```

In diesem Kontext befindet sich die Eingabe innerhalb von `<div>`-Tags und wird daher vom Browser als HTML interpretiert. Sie müssen sich also gegen den Fall schützen, dass `my_input` HTML mit ausführbarem Code enthält, etwa `<img src=x onerror="alert('XSS')">`. Das in Django integrierte Output-Encoding verhindert diesen Angriff, indem es Zeichen wie `<` und `>` als HTML-Entities `&lt;` und `&gt;` kodiert.

Angenommen jedoch, die Vorlage sieht so aus:

```django
<div \{{ my_input }}></div>
```

In diesem Kontext behandelt der Browser die Variable `my_input` als HTML-Attribut. Da Django Anführungszeichen kodiert (`"` → `&quot;`, `'` → `&#x27;`), wird die Payload `onmouseover="alert('XSS')"` nicht ausgeführt.
Eine Payload ohne Anführungszeichen wie `onmouseover=alert(1)` (oder mit Backticks wie ``onmouseover=alert(`XSS`)``) wird jedoch weiterhin ausgeführt, da Attributwerte keine Anführungszeichen benötigen und Backticks standardmäßig nicht maskiert werden.

Der Browser verarbeitet verschiedene Teile einer Webseite nach unterschiedlichen Regeln: HTML-Elemente und deren Inhalt, HTML-Attribute, Inline-Styles und Inline-Skripte. Welche Kodierung erforderlich ist, hängt davon ab, in welchem Kontext die Eingabe eingefügt wird.

Was in einem Kontext sicher ist, kann in einem anderen unsicher sein. Deshalb müssen Sie den Kontext verstehen, in dem Sie nicht vertrauenswürdige Inhalte einbinden, und gegebenenfalls besondere Schutzmaßnahmen umsetzen.

- **HTML-Kontexte**: Eingaben zwischen den Tags der meisten HTML-Elemente (mit Ausnahme von {{htmlelement("style")}} oder {{htmlelement("script")}}) werden als HTML interpretiert. Die Kodierung durch Template-Engines ist hauptsächlich auf diesen Kontext ausgerichtet.
- **HTML-Attributkontexte**: Ob das Einfügen von Eingaben als HTML-Attributwerte sicher ist, hängt vom jeweiligen Attribut ab. Insbesondere Event-Handler-Attribute wie `onblur` sind unsicher. Das gilt auch für das Attribut [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src) des {{htmlelement("iframe")}}-Elements.

  Außerdem müssen Platzhalter für eingefügte Attributwerte in Anführungszeichen stehen. Andernfalls könnte ein Angreifer über den bereitgestellten Wert ein zusätzliches unsicheres Attribut einfügen. In dieser Vorlage steht der eingefügte Wert beispielsweise nicht in Anführungszeichen:

  ```django example-bad
  <div class=\{{ my_class }}>...</div>
  ```

  Ein Angreifer kann dies ausnutzen, um mit einer Eingabe wie `some_id onmouseover=alert(1)` ein Event-Handler-Attribut einzuschleusen. Setzen Sie den Platzhalter in Anführungszeichen, um den Angriff zu verhindern:

  ```django example-good
    <div class="\{{ my_class }}">...</div>
  ```

- **JavaScript- und CSS-Kontexte**: Das Einfügen von Eingaben innerhalb von {{htmlelement("script")}}- oder {{htmlelement("style")}}-Tags ist fast immer unsicher.

### Bereinigung

Template-Engines ermöglichen es Entwicklern in der Regel, das Output-Encoding zu deaktivieren. Das ist nötig, wenn sie nicht vertrauenswürdige Inhalte als HTML statt als Text einfügen möchten. In Django deaktiviert beispielsweise der Filter [`safe`](https://docs.djangoproject.com/en/stable/ref/templates/language/#how-to-turn-it-off) das Output-Encoding; in React hat [`dangerouslySetInnerHTML`](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html) denselben Effekt.

In diesem Fall müssen die Entwickler durch Bereinigung sicherstellen, dass der Inhalt unbedenklich ist.

Bei der _Bereinigung_ werden unsichere Bestandteile aus einer HTML-Zeichenfolge entfernt, beispielsweise {{htmlelement("script")}}-Tags oder Inline-Event-Handler. Da eine korrekte Bereinigung ebenso schwierig ist wie korrektes Output-Encoding, empfiehlt sich dafür eine bewährte Bibliothek eines Drittanbieters. [DOMPurify](https://github.com/cure53/DOMPurify) wird von vielen Fachleuten empfohlen, darunter [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#html-sanitization).

Betrachten wir beispielsweise eine HTML-Zeichenfolge wie diese:

```html
<div>
  <img src="x" onerror="alert('hello!')" />
  <script>
    alert("hello!");
  </script>
</div>
```

Wenn wir sie an DOMPurify übergeben, gibt es Folgendes zurück:

```html
<div>
  <img src="x" />
</div>
```

### Trusted Types

Eine Funktion zur Bereinigung einer Eingabezeichenfolge zu haben, ist eine Sache. Alle Stellen in einer Codebasis zu finden, an denen Eingabezeichenfolgen bereinigt werden müssen, kann jedoch selbst sehr schwierig sein.

Wenn Sie clientseitiges Rendering im Browser implementieren, gibt es mehrere Web-APIs, deren Verwendung mit nicht bereinigten, nicht vertrauenswürdigen Inhalten unsicher ist.

Die folgenden APIs interpretieren beispielsweise ihre Zeichenfolgenargumente als HTML und verwenden sie, um das DOM der Seite zu aktualisieren:

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) (wird auch intern von Reacts `dangerouslySetInnerHTML` verwendet)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Document.write()`](/de/docs/Web/API/Document/write)

Andere APIs führen ihre Argumente direkt als JavaScript aus. Beispiele dafür sind:

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)

Mit der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) können Entwickler sicherstellen, dass Eingaben stets bereinigt werden, bevor sie an eine dieser APIs übergeben werden.

Der Schlüssel zur Durchsetzung von Trusted Types ist die CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for). Wenn diese Direktive gesetzt ist, löst die Übergabe von Zeichenfolgenargumenten an unsichere APIs eine Ausnahme aus:

```js example-bad
const userInput = "I might be XSS";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Stattdessen müssen Entwickler einen _Trusted Type_ an eine dieser APIs übergeben. Ein Trusted Type ist ein Objekt, das aus einer Zeichenfolge durch ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt erstellt wird, dessen Implementierung die Entwickler festlegen. Zum Beispiel:

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
> Die Trusted Types API stellt keine Bereinigungsfunktion bereit. Sie ist ein Framework, mit dem Entwickler sicherstellen können, dass eine von ihnen bereitgestellte Bereinigungsfunktion aufgerufen wurde. Im obigen Beispiel verwenden die Entwickler innerhalb des Trusted-Types-Frameworks DOMPurify zur Bereinigung von HTML für entsprechende APIs.

Die Trusted Types API wird noch nicht browserübergreifend ausreichend unterstützt. Sobald dies der Fall ist, wird sie eine wichtige Schutzmaßnahme gegen DOM-basierte XSS-Angriffe sein.

### Eine CSP einsetzen

Output-Encoding und Bereinigung sollen verhindern, dass bösartige Skripte in die Seiten einer Website gelangen. Eine Hauptaufgabe einer Content Security Policy besteht darin, die Ausführung bösartiger Skripte zu verhindern, selbst wenn sie auf den Seiten vorhanden sind. Sie dient also als zusätzliche Absicherung, falls die anderen Schutzmaßnahmen versagen.

Der empfohlene Ansatz zur Eindämmung von XSS mithilfe einer CSP ist eine [strikte CSP](/de/docs/Web/HTTP/Guides/CSP#strict_csp). Sie verwendet einen [Nonce](/de/docs/Web/HTTP/Guides/CSP#nonces) oder einen [Hash](/de/docs/Web/HTTP/Guides/CSP#hashes), um dem Browser anzuzeigen, welche Skripte im Dokument erwartet werden. Gelingt es einem Angreifer, bösartige `<script>`-Elemente einzufügen, fehlt ihnen der passende {{Glossary("Nonce", "Nonce")}} oder Hash, und der Browser führt sie nicht aus. Außerdem werden verschiedene verbreitete Wege für XSS-Angriffe vollständig unterbunden: Inline-Event-Handler, `javascript:`-URLs und APIs wie `eval()`, die ihre Argumente als JavaScript ausführen.

## Checkliste der Schutzmaßnahmen

- Verwenden Sie beim Einfügen von Eingaben in eine Seite – ob im Browser oder auf dem Server – eine Template-Engine, die Output-Encoding durchführt.
- Beachten Sie, in welchem Kontext Sie Eingaben einfügen, und stellen Sie sicher, dass in diesem Kontext die passende Ausgabekodierung erfolgt.
- Wenn Sie Eingaben als HTML einbinden müssen, bereinigen Sie sie mit einer bewährten Bibliothek. Wenn Sie dies im Browser tun, verwenden Sie das Trusted-Types-Framework, um sicherzustellen, dass Ihre Bereinigungsfunktion die Eingaben verarbeitet.
- Implementieren Sie eine strikte CSP.

## Siehe auch

- [Spickzettel zur Verhinderung von Cross-Site-Scripting](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) auf [owasp.org](https://owasp.org/)
