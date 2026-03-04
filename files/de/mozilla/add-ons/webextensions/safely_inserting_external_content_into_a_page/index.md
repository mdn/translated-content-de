---
title: Externen Inhalt sicher in eine Seite einfügen
short-title: Externen Inhalt einfügen
slug: Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page
l10n:
  sourceCommit: f55d17210c316e1f7ef8f2324d8d0c03f440c1f1
---

Es kann vorkommen, dass Sie Inhalte aus einer externen Quelle in Ihre Erweiterung einfügen möchten oder müssen. Dabei besteht jedoch das Risiko, dass die Quelle bösartige Skripte eingebettet hat – entweder vom Entwickler der Quelle oder von einem böswilligen Dritten hinzugefügt.

Nehmen Sie einen RSS-Reader als Beispiel. Sie wissen nicht, welche RSS-Feeds Ihre Erweiterung öffnen wird, und haben keine Kontrolle über den Inhalt dieser RSS-Feeds. Es ist also möglich, dass der Benutzer einen Feed abonniert, bei dem zum Beispiel der Titel eines Feed-Items ein Skript enthält. Dies könnte so einfach sein wie das Einfügen von JavaScript-Code innerhalb von `<script></script>`-Tags. Wenn Sie den Titel extrahieren, davon ausgehen, dass es sich um einfachen Text handelt, und diesen dem DOM einer von Ihrer Erweiterung erstellten Seite hinzufügen, hat Ihr Benutzer nun ein unbekanntes Skript in seinem Browser laufen. Daher ist Vorsicht geboten, um zu vermeiden, dass beliebiger Text als HTML ausgewertet wird.

Sie müssen auch daran denken, dass Erweiterungen privilegierte Kontexte haben, beispielsweise in Hintergrundskripten und Inhaltsskripten. Im schlimmsten Fall könnte ein eingebettetes Skript in einem dieser Kontexte ausgeführt werden, eine Situation, die als Privilegienerweiterung bekannt ist. Diese Situation kann den Browser eines Benutzers für entfernte Angriffe öffnen, indem es der Website, die den Code injiziert hat, ermöglicht wird, kritische Benutzerdaten wie Passwörter, Browserverlauf oder Surfverhalten zuzugreifen.

Dieser Artikel untersucht, wie man sicher mit entfernten Daten arbeitet und sie dem DOM hinzufügt.

## Arbeiten mit beliebigen Zeichenfolgen

Beim Arbeiten mit Zeichenfolgen gibt es ein paar empfohlene Optionen, um diese sicher zu einer Seite hinzuzufügen: die Standard-DOM-Knoten-Erstellungsmethoden oder jQuery.

### DOM-APIs für die Knoten-Erstellung und sichere Texteingabe

Verwenden Sie für eine leichte und sichere Methode zum Einfügen von Zeichenfolgen native DOM-APIs: Erstellen Sie Elemente mit [`document.createElement`](/de/docs/Web/API/Document/createElement) und setzen Sie nur validierte, nicht ausführbare Attribute mit [`Element.setAttribute`](/de/docs/Web/API/Element/setAttribute). Um Textinhalt hinzuzufügen, verwenden Sie die [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft. Ein sicherer Ansatz besteht darin, die Knoten separat zu erstellen und ihren Inhalt mit `textContent` zuzuweisen:

```js example-good
let data = JSON.parse(responseText);
let div = document.createElement("div");
div.className = data.className;
div.textContent = `Your favorite color is now ${data.color}`;
addonElement.appendChild(div);
```

Dieser Ansatz ist sicher, weil bei der Verwendung von `.textContent` automatisch jeder entfernte HTML-Code in `data.color` maskiert wird.

Seien Sie jedoch vorsichtig, denn Sie können native Methoden verwenden, die nicht sicher sind. Betrachten Sie den folgenden Code:

```js example-bad
let data = JSON.parse(responseText);
addonElement.innerHTML = `<div class='${data.className}'>Your favorite color is now ${data.color}</div>`;
```

Hier könnten die Inhalte von `data.className` oder `data.color` HTML enthalten, das das Tag frühzeitig schließen, beliebigen weiteren HTML-Inhalt einfügen und dann ein weiteres Tag öffnen kann.

### jQuery

Bei der Verwendung von jQuery verhindern Funktionen wie `attr()` und `text()`, dass Zeichen als HTML-Syntax behandelt werden. Das obige Beispiel mit der "Lieblingsfarbe", implementiert in jQuery, würde folgendermaßen aussehen:

```js example-good
let node = $("<div>");
node.addClass(data.className);
node.text(`Your favorite color is now ${data.color}`);
```

## Arbeiten mit HTML-Inhalten

Beim Arbeiten mit extern bezogenen Inhalten, von denen Sie wissen, dass sie HTML sind, ist es wesentlich, das HTML zu sanitieren, bevor es zu einer Seite hinzugefügt wird. Best Practice für die HTML-Sanitierung ist die Verwendung einer HTML-Sanitierungs-Bibliothek oder einer Template-Engine mit HTML-Sanitierungsfunktionen. In diesem Abschnitt schauen wir uns einige geeignete Tools und ihre Verwendung an.

### HTML-Sanitierung

Eine HTML-Sanitierungs-Bibliothek entfernt alles, was zur Skriptausführung führen könnte, aus HTML, sodass Sie komplette Sätze von HTML-Knoten aus einer entfernten Quelle sicher in Ihr DOM injizieren können. [DOMPurify](https://github.com/cure53/DOMPurify), das von verschiedenen Sicherheitsexperten überprüft wurde, ist eine geeignete Bibliothek für diese Aufgabe in Erweiterungen.

Für den Produktionseinsatz wird [DOMPurify](https://github.com/cure53/DOMPurify) als minimierte Version bereitgestellt: purify.min.js. Sie können dieses Skript auf die Weise verwenden, die am besten zu Ihrer Erweiterung passt. Zum Beispiel könnten Sie es als Inhaltsskript hinzufügen:

```json
"content_scripts": [
  {
    "matches" : ["<all_urls>"],
    "js": ["purify.min.js", "my-injection-script.js"]
  }
]
```

Dann können Sie in `my-injection-script.js` das externe HTML lesen, es sanitieren und es dem DOM einer Seite hinzufügen:

```js
let elem = document.createElement("div");
let cleanHTML = DOMPurify.sanitize(externalHTML);
elem.innerHTML = cleanHTML;
```

Sie können jede Methode zum Hinzufügen des gesäuberten HTML zu Ihrem DOM verwenden, zum Beispiel die `.html()`-Funktion von jQuery:

```js
let elem = $("<div/>");
let cleanHTML = DOMPurify.sanitize(externalHTML);
elem.html(cleanHTML);
```

### Template-Engines

Ein weiteres häufiges Muster ist das Erstellen einer lokalen HTML-Vorlage für eine Seite und das Füllen der Leerstellen mit entfernten Werten. Während dieser Ansatz im Allgemeinen akzeptabel ist, sollte darauf geachtet werden, keine Konstrukte zu verwenden, die das Einfügen von ausführbarem Code ermöglichen würden. Dies kann passieren, wenn die Template-Engine Konstrukte verwendet, die rohes HTML in das Dokument einfügen. Wenn die Variable, die zum Einfügen von rohem HTML verwendet wird, aus einer entfernten Quelle stammt, unterliegt sie dem gleichen Sicherheitsrisiko, das in der Einführung erwähnt wurde.

Zum Beispiel müssen Sie bei der Verwendung von [Mustache-Templates](https://mustache.github.io/) das doppelte Mustache verwenden, `\{{variable}}`, das jegliches HTML maskiert. Die Verwendung des dreifachen Mustache, `\{\{{variable}}}`, muss vermieden werden, da dies einen rohen HTML-String injiziert und ausführbaren Code zu Ihrer Vorlage hinzufügen könnte. [Handlebars](https://handlebarsjs.com/) funktioniert auf ähnliche Weise, wobei Variablen in doppelten Handlebars, `\{{variable}}`, maskiert werden. Wohingegen Variablen in dreifachen Handlebars roh bleiben und vermieden werden müssen. Außerdem, wenn Sie einen Handlebars-Helfer mit `Handlebars.SafeString` erstellen, verwenden Sie `Handlebars.escapeExpression()`, um alle dynamischen Parameter, die an den Helfer übergeben werden, zu maskieren. Dies ist eine Anforderung, weil die resultierende Variable von `Handlebars.SafeString` als sicher angesehen wird und nicht maskiert wird, wenn sie mit doppelten Handlebars eingefügt wird.

Es gibt ähnliche Konstrukte in anderen Templating-Systemen, die mit derselben Vorsicht zu handhaben sind.

## Weiterführende Literatur

Für weitere Informationen zu diesem Thema siehe die folgenden Artikel:

- [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://owasp.org/www-community/xss-filter-evasion-cheatsheet)
