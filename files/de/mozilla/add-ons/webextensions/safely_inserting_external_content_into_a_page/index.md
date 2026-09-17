---
title: Externe Inhalte sicher in eine Seite einfügen
short-title: Externe Inhalte einfügen
slug: Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page
l10n:
  sourceCommit: 13ef67a4ffbdb929415dfa1b3d65ab1aa9ebe5da
---

Es gibt Situationen, in denen Sie Inhalte aus einer externen Quelle in Ihre Erweiterung einbinden möchten oder müssen. Dabei besteht jedoch das Risiko, dass die Quelle bösartige Skripte enthalten könnte – hinzugefügt entweder vom Entwickler der Quelle oder von einem bösartigen Dritten.

Nehmen Sie als Beispiel einen RSS-Reader. Sie wissen nicht, welche RSS-Feeds Ihre Erweiterung öffnen wird, und haben keine Kontrolle über die Inhalte dieser RSS-Feeds. Daher ist es möglich, dass der Benutzer einen Feed abonniert, bei dem beispielsweise der Titel eines Feed-Elements ein Skript enthält. Dies könnte so einfach sein wie das Einfügen von JavaScript-Code innerhalb von `<script></script>`-Tags. Wenn Sie den Titel extrahieren, davon ausgehen, dass es sich um Klartext handelt, und ihn dem DOM einer von Ihrer Erweiterung erstellten Seite hinzufügen, wird nun ein unbekanntes Skript im Browser Ihres Benutzers ausgeführt. Daher muss darauf geachtet werden, beliebigen Text nicht als HTML auszuwerten.

Sie müssen außerdem bedenken, dass Erweiterungen privilegierte Kontexte haben, beispielsweise in Hintergrundskripten und Inhaltsskripten. Im schlimmsten Fall könnte ein eingebettetes Skript in einem dieser Kontexte ausgeführt werden, eine Situation, die als Privilege Escalation bezeichnet wird. Diese Situation kann den Browser eines Benutzers für Remote-Angriffe offenlassen, indem sie der Website, die den Code eingeschleust hat, Zugriff auf kritische Benutzerdaten wie Passwörter, Browserverlauf oder Surfverhalten ermöglicht.

Dieser Artikel untersucht, wie Sie sicher mit Remote-Daten arbeiten und diese einem DOM hinzufügen.

## Mit beliebigen Zeichenfolgen arbeiten

Bei der Arbeit mit Zeichenfolgen gibt es einige empfohlene Optionen, um sie sicher zu einer Seite hinzuzufügen: die Standardmethoden zur DOM-Knotenerstellung oder jQuery.

### DOM-APIs zur Knotenerstellung und sicheren Texteinfügung

Verwenden Sie für eine schlanke und sichere Methode zum Einfügen von Zeichenfolgen native DOM-APIs: Erstellen Sie Elemente mit [`document.createElement`](/de/docs/Web/API/Document/createElement) und setzen Sie mit [`Element.setAttribute`](/de/docs/Web/API/Element/setAttribute) nur validierte, nicht ausführbare Attribute. Verwenden Sie zum Hinzufügen von Textinhalten die Eigenschaft [`textContent`](/de/docs/Web/API/Node/textContent). Ein sicherer Ansatz besteht darin, die Knoten separat zu erstellen und ihren Inhalt mit `textContent` zuzuweisen:

```js example-good
let data = JSON.parse(responseText);
let div = document.createElement("div");
div.className = data.className;
div.textContent = `Your favorite color is now ${data.color}`;
addonElement.appendChild(div);
```

Dieser Ansatz ist sicher, da die Verwendung von `.textContent` jegliches Remote-HTML in `data.color` automatisch maskiert.

Seien Sie jedoch vorsichtig: Sie können native Methoden verwenden, die nicht sicher sind. Betrachten Sie den folgenden Code:

```js example-bad
let data = JSON.parse(responseText);
addonElement.innerHTML = `<div class='${data.className}'>Your favorite color is now ${data.color}</div>`;
```

Hier könnten die Inhalte von `data.className` oder `data.color` HTML enthalten, das das Tag vorzeitig schließen, beliebige weitere HTML-Inhalte einfügen und anschließend ein weiteres Tag öffnen kann.

### jQuery

Bei der Verwendung von jQuery verhindern Funktionen wie `attr()` und `text()`, dass Zeichen als HTML-Syntax behandelt werden. Das oben gezeigte Beispiel „Lieblingsfarbe“, das mit jQuery implementiert ist, würde also wie folgt aussehen:

```js example-good
let node = $("<div>");
node.addClass(data.className);
node.text(`Your favorite color is now ${data.color}`);
```

## Mit HTML-Inhalten arbeiten

Bei der Arbeit mit Inhalten aus externen Quellen, von denen Sie wissen, dass sie HTML sind, ist die Bereinigung des HTMLs unerlässlich, bevor es einer Seite hinzugefügt wird. Die beste Praxis für die HTML-Bereinigung besteht darin, eine HTML-Bereinigungsbibliothek oder eine Template-Engine mit Funktionen zur HTML-Bereinigung zu verwenden. In diesem Abschnitt betrachten wir einige geeignete Werkzeuge und ihre Verwendung.

### HTML-Bereinigung

Eine HTML-Bereinigungsbibliothek entfernt alles aus HTML, was zur Skriptausführung führen könnte, sodass Sie vollständige Sätze von HTML-Knoten aus einer Remote-Quelle sicher in Ihr DOM einfügen können. [DOMPurify](https://github.com/cure53/DOMPurify), das von verschiedenen Sicherheitsexperten geprüft wurde, ist für diese Aufgabe in Erweiterungen eine geeignete Bibliothek.

Für den Produktionseinsatz ist [DOMPurify](https://github.com/cure53/DOMPurify) als minimierte Version verfügbar: purify.min.js. Sie können dieses Skript auf die Weise verwenden, die am besten zu Ihrer Erweiterung passt. Beispielsweise könnten Sie es als Inhaltsskript hinzufügen:

```json
"content_scripts": [
  {
    "matches" : ["<all_urls>"],
    "js": ["purify.min.js", "my-injection-script.js"]
  }
]
```

Anschließend können Sie in `my-injection-script.js` das externe HTML lesen, bereinigen und dem DOM einer Seite hinzufügen:

```js
let elem = document.createElement("div");
let cleanHTML = DOMPurify.sanitize(externalHTML);
elem.innerHTML = cleanHTML;
```

Sie können jede Methode verwenden, um das bereinigte HTML zu Ihrem DOM hinzuzufügen, beispielsweise die Funktion `.html()` von jQuery:

```js
let elem = $("<div/>");
let cleanHTML = DOMPurify.sanitize(externalHTML);
elem.html(cleanHTML);
```

### Template-Engines

Ein weiteres gängiges Muster besteht darin, ein lokales HTML-Template für eine Seite zu erstellen und Remote-Werte zu verwenden, um die Lücken zu füllen. Obwohl dieser Ansatz im Allgemeinen akzeptabel ist, sollte darauf geachtet werden, Konstrukte zu vermeiden, die das Einfügen ausführbaren Codes ermöglichen würden. Dies kann geschehen, wenn die Template-Engine Konstrukte verwendet, die Roh-HTML in das Dokument einfügen. Wenn die zum Einfügen von Roh-HTML verwendete Variable aus einer Remote-Quelle stammt, unterliegt sie demselben Sicherheitsrisiko, das in der Einleitung erwähnt wurde.

Wenn Sie beispielsweise [mustache templates](https://mustache.github.io/) verwenden, müssen Sie den doppelten Mustache-Ausdruck `\{{variable}}` verwenden, der jegliches HTML maskiert. Die Verwendung des dreifachen Mustache-Ausdrucks `\{\{{variable}}}` muss vermieden werden, da dieser eine Roh-HTML-Zeichenfolge einfügt und ausführbaren Code zu Ihrem Template hinzufügen könnte. [Handlebars](https://handlebarsjs.com/) funktioniert ähnlich: Variablen in doppelten Handlebars-Ausdrücken, `\{{variable}}`, werden maskiert. Variablen in dreifachen Handlebars-Ausdrücken hingegen bleiben roh und müssen vermieden werden. Wenn Sie außerdem einen Handlebars-Helper mit `Handlebars.SafeString` erstellen, verwenden Sie `Handlebars.escapeExpression()`, um alle dynamischen Parameter zu maskieren, die an den Helper übergeben werden. Dies ist erforderlich, weil die resultierende Variable von `Handlebars.SafeString` als sicher betrachtet wird und beim Einfügen mit doppelten Handlebars-Ausdrücken nicht maskiert wird.

In anderen Templating-Systemen gibt es ähnliche Konstrukte, die mit derselben Sorgfalt behandelt werden müssen.

## Weiterführende Literatur

Weitere Informationen zu diesem Thema finden Sie in den folgenden Artikeln:

- [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/XSS_Filter_Evasion_Cheat_Sheet.html)
