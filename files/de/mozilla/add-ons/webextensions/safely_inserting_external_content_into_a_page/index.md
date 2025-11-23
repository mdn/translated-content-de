---
title: Sicheres Einfügen von externen Inhalten in eine Seite
short-title: Externe Inhalte einfügen
slug: Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page
l10n:
  sourceCommit: c39cf764d2e9ae7de92ad027c73a7d643ed5bc63
---

Es gibt Zeiten, in denen Sie Inhalte aus einer externen Quelle in Ihre Erweiterung aufnehmen möchten oder müssen. Es besteht jedoch das Risiko, dass die Quelle bösartige Skripte eingebettet hat - entweder durch den Entwickler der Quelle oder durch eine bösartige Drittpartei.

Nehmen Sie einen RSS-Reader als Beispiel. Sie wissen nicht, welche RSS-Feeds Ihre Erweiterung öffnen wird, und haben keine Kontrolle über den Inhalt dieser RSS-Feeds. Es ist also möglich, dass der Benutzer einen Feed abonniert, in dem beispielsweise der Titel eines Feed-Elements ein Skript enthält. Das könnte so einfach sein wie das Einfügen von JavaScript-Code innerhalb von `<script></script>`-Tags. Wenn Sie den Titel extrahieren, annehmen, dass es sich um reinen Text handelt, und ihn dem DOM einer von Ihrer Erweiterung erstellten Seite hinzufügen, läuft nun ein unbekanntes Skript im Browser Ihres Nutzers. Daher muss vorsichtig vermieden werden, beliebigen Text als HTML zu interpretieren.

Sie müssen sich auch daran erinnern, dass Erweiterungen privilegierte Kontexte haben, zum Beispiel in Hintergrundskripten und Inhalteskripten. Im schlimmsten Fall könnte ein eingebettetes Skript in einem dieser Kontexte ausgeführt werden, eine Situation, die als Privilegienerweiterung bekannt ist. Diese Situation kann den Browser eines Benutzers für einen Fernangriff anfällig machen, indem die Website, die den Code injizierte, in die Lage versetzt wird, auf kritische Benutzerdaten zuzugreifen, wie etwa Passwörter, Browserverlauf oder Browsing-Verhalten.

Dieser Artikel untersucht, wie Sie sicher mit Remote-Daten arbeiten und sie einem DOM hinzufügen können.

## Arbeiten mit beliebigen Zeichenfolgen

Beim Arbeiten mit Zeichenfolgen gibt es einige empfohlene Optionen, um sie sicher einer Seite hinzuzufügen: die standardmäßigen DOM-Node-Erstellungsmethoden oder jQuery.

### DOM-APIs zur Knoten-Erstellung und sicheren Texteingabe

Für eine leichte und sichere Methode zum Einfügen von Zeichenfolgen verwenden Sie native DOM-APIs: Erstellen Sie Elemente mit [`document.createElement`](/de/docs/Web/API/Document/createElement) und setzen Sie nur validierte, nicht-ausführbare Attribute mit [`Element.setAttribute`](/de/docs/Web/API/Element/setAttribute). Um Textinhalt hinzuzufügen, verwenden Sie die [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft. Ein sicherer Ansatz ist, die Knoten separat zu erstellen und ihren Inhalt mit `textContent` zuzuweisen:

```js example-good
let data = JSON.parse(responseText);
let div = document.createElement("div");
div.className = data.className;
div.textContent = `Your favorite color is now ${data.color}`;
addonElement.appendChild(div);
```

Dieser Ansatz ist sicher, da die Verwendung von `.textContent` automatisch alle externen HTML in `data.color` maskiert.

Seien Sie jedoch vorsichtig, da Sie auch native Methoden verwenden können, die nicht sicher sind. Nehmen Sie den folgenden Code:

```js example-bad
let data = JSON.parse(responseText);
addonElement.innerHTML = `<div class='${data.className}'>Your favorite color is now ${data.color}</div>`;
```

Hier könnten die Inhalte von `data.className` oder `data.color` HTML enthalten, das das Tag vorzeitig schließen, beliebigen weiteren HTML-Inhalt einfügen und dann ein weiteres Tag öffnen könnte.

### jQuery

Beim Verwenden von jQuery, Funktionen wie `attr()` und `text()` maskieren Inhalte beim Hinzufügen zu einem DOM. Das oben angeführte Beispiel "Lieblingsfarbe", implementiert mit jQuery, würde so aussehen:

```js example-good
let node = $("<div>");
node.addClass(data.className);
node.text(`Your favorite color is now ${data.color}`);
```

## Arbeiten mit HTML-Inhalten

Beim Arbeiten mit extern bezogenen Inhalten, von denen Sie wissen, dass sie HTML sind, ist das Desinfizieren des HTMLs unerlässlich, bevor es einer Seite hinzugefügt wird. Die beste Praxis für die Desinfektion von HTML ist die Verwendung einer HTML-Desinfektionsbibliothek oder einer Template-Engine mit HTML-Desinfektionsfunktionen. In diesem Abschnitt werfen wir einen Blick auf einige geeignete Werkzeuge und deren Anwendung.

### HTML-Desinfektion

Eine HTML-Desinfektionsbibliothek entfernt alles, was zu Skriptausführung führen könnte, aus HTML, sodass Sie vollständige HTML-Knotensätze sicher aus einer externen Quelle in Ihr DOM injizieren können. [DOMPurify](https://github.com/cure53/DOMPurify), das von verschiedenen Sicherheitsexperten überprüft wurde, ist eine geeignete Bibliothek für diese Aufgabe in Erweiterungen.

Für den Produktionseinsatz kommt [DOMPurify](https://github.com/cure53/DOMPurify) als minifizierte Version: purify.min.js. Sie können dieses Skript auf die für Ihre Erweiterung am besten geeignete Weise verwenden. Zum Beispiel könnten Sie es als Inhalteskript hinzufügen:

```json
"content_scripts": [
  {
    "matches" : ["<all_urls>"],
    "js": ["purify.min.js", "my-injection-script.js"]
  }
]
```

Dann können Sie in `my-injection-script.js` das externe HTML lesen, es desinfizieren und es einem Seiten-DOM hinzufügen:

```js
let elem = document.createElement("div");
let cleanHTML = DOMPurify.sanitize(externalHTML);
elem.innerHTML = cleanHTML;
```

Sie können jede Methode verwenden, um das desinfizierte HTML zu Ihrem DOM hinzuzufügen, zum Beispiel die `.html()`-Funktion von jQuery. Beachten Sie jedoch, dass in diesem Fall das `SAFE_FOR_JQUERY`-Flag verwendet werden muss:

```js
let elem = $("<div/>");
let cleanHTML = DOMPurify.sanitize(externalHTML, { SAFE_FOR_JQUERY: true });
elem.html(cleanHTML);
```

### Template-Engines

Ein weiteres häufiges Muster ist das Erstellen einer lokalen HTML-Vorlage für eine Seite und das Einfügen von Remote-Werten in die Lücken. Während dieser Ansatz im Allgemeinen akzeptabel ist, sollte darauf geachtet werden, keine Konstrukte zu verwenden, die das Einfügen von ausführbarem Code ermöglichen würden. Dies kann passieren, wenn die Template-Engine Konstrukte verwendet, die rohes HTML in das Dokument einfügen. Wenn die Variable, die rohes HTML einfügt, von einer externen Quelle stammt, unterliegt sie dem gleichen Sicherheitsrisiko, das in der Einleitung erwähnt wird.

Zum Beispiel müssen Sie beim Verwenden von [Mustache-Vorlagen](https://mustache.github.io/) den doppelten Mustache verwenden, `\{{variable}}`, der beliebige HTML maskiert. Die Nutzung des dreifachen Mustache, `\{\{{variable}}}`, muss vermieden werden, da dieser eine rohe HTML-Zeichenfolge injiziert und ausführbaren Code zu Ihrer Vorlage hinzufügen könnte. [Handlebars](https://handlebarsjs.com/) funktioniert auf ähnliche Weise, wobei Variablen in doppelten Handlebar-Klammern, `\{{variable}}`, maskiert werden. Hingegen werden Variablen in dreifachen Handlebar-Klammern roh gelassen und müssen vermieden werden. Wenn Sie auch einen Handlebars-Helfer mit `Handlebars.SafeString` erstellen, verwenden Sie `Handlebars.escapeExpression()`, um alle dynamischen Parameter, die dem Helfer übergeben werden, zu maskieren. Dies ist erforderlich, da die resultierende Variable von `Handlebars.SafeString` als sicher betrachtet wird und nicht maskiert wird, wenn sie mit doppelten Handlebar-Klammern eingefügt wird.

Ähnliche Konstrukte gibt es in anderen Template-Systemen, die mit der gleichen Sorgfalt behandelt werden müssen.

## Weiterführende Literatur

Für weitere Informationen zu diesem Thema sehen Sie die folgenden Artikel an:

- [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://owasp.org/www-community/xss-filter-evasion-cheatsheet)
