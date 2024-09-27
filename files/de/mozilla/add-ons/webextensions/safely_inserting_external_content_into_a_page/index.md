---
title: Externe Inhalte sicher in eine Seite einfügen
short-title: Externe Inhalte einfügen
slug: Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page
l10n:
  sourceCommit: 4e0fe2b61a65f3334debdb473ba9c937a878426b
---

{{AddonSidebar}}

Es gibt Situationen, in denen Sie Inhalte aus einer externen Quelle in Ihre Erweiterung einfügen möchten oder müssen. Dabei besteht jedoch das Risiko, dass die Quelle bösartige Skripte enthält, die entweder vom Entwickler der Quelle oder von einem böswilligen Dritten hinzugefügt wurden.

Nehmen Sie zum Beispiel einen RSS-Reader. Sie wissen nicht, welche RSS-Feeds Ihre Erweiterung öffnen wird, und haben keine Kontrolle über deren Inhalt. Es ist also möglich, dass der Benutzer einen Feed abonniert, in dem zum Beispiel der Titel eines Feed-Elements ein Skript enthält. Dies könnte so einfach sein wie das Einfügen von JavaScript-Code innerhalb von `<script></script>`-Tags. Wenn Sie nun den Titel extrahieren, annehmen, dass es sich um einfachen Text handelt, und ihn dem DOM einer von Ihrer Erweiterung erstellten Seite hinzufügen, führt Ihr Benutzer jetzt ein unbekanntes Skript im Browser aus. Daher muss darauf geachtet werden, dass willkürlicher Text nicht als HTML ausgewertet wird.

Sie müssen sich auch daran erinnern, dass Erweiterungen privilegierte Kontexte haben, zum Beispiel in Hintergrundskripten und Inhalts-Skripten. Im schlimmsten Fall könnte ein eingebettetes Skript in einem dieser Kontexte ausgeführt werden, eine Situation, die als Privilegieneskalation bekannt ist. Diese Situation kann dazu führen, dass der Browser eines Benutzers einer entfernten Attacke ausgesetzt wird, indem die Website, die den Code eingeschleust hat, auf wichtige Benutzerdaten wie Passwörter, Browserverlauf oder Surfverhalten zugreifen kann.

Dieser Artikel untersucht, wie man sicher mit entfernten Daten arbeitet und sie einem DOM hinzufügt.

## Arbeiten mit beliebigen Zeichenketten

Beim Umgang mit Zeichenketten gibt es einige empfohlene Methoden, um diese sicher in eine Seite einzufügen: die standardmäßigen DOM-Knotenerzeugungsmethoden oder jQuery.

### DOM-Knotenerzeugungsmethoden

Ein leichter Ansatz, Zeichenketten in eine Seite einzufügen, ist die Verwendung der nativen DOM-Manipulationsmethoden: [`document.createElement`](/de/docs/Web/API/Document/createElement), [`Element.setAttribute`](/de/docs/Web/API/Element/setAttribute) und [`Node.textContent`](/de/docs/Web/API/Node/textContent). Der sichere Ansatz besteht darin, die Knoten separat zu erstellen und deren Inhalt mit `textContent` zuzuweisen:

```js example-good
let data = JSON.parse(responseText);
let div = document.createElement("div");
div.className = data.className;
div.textContent = `Your favorite color is now ${data.color}`;
addonElement.appendChild(div);
```

Dieser Ansatz ist sicher, da die Verwendung von `.textContent` alle entfernten HTML-Inhalte in `data.color` automatisch maskiert.

Seien Sie jedoch vorsichtig, denn Sie können auch native Methoden verwenden, die nicht sicher sind. Nehmen Sie den folgenden Code:

```js example-bad
let data = JSON.parse(responseText);
addonElement.innerHTML = `<div class='${data.className}'>Your favorite color is now ${data.color}</div>`;
```

Hier könnten die Inhalte von `data.className` oder `data.color` HTML enthalten, das den Tag frühzeitig schließen, beliebigen weiteren HTML-Inhalt einfügen und dann einen weiteren Tag öffnen kann.

### jQuery

Bei der Verwendung von jQuery maskieren Funktionen wie `attr()` und `text()` Inhalte, während sie dem DOM hinzugefügt werden. Das obige Beispiel der "Lieblingsfarbe", implementiert in jQuery, würde so aussehen:

```js example-good
let node = $("</div>");
node.addClass(data.className);
node.text(`Your favorite color is now ${data.color}`);
```

## Arbeiten mit HTML-Inhalten

Wenn Sie mit extern bezogenen Inhalten arbeiten, die Sie als HTML kennen, ist die Bereinigung des HTMLs unerlässlich, bevor es in eine Seite eingefügt wird. Die beste Praxis zur Bereinigung von HTML ist die Verwendung einer HTML-Bereinigungsbibliothek oder einer Template-Engine mit HTML-Bereinigungsfunktionen. In diesem Abschnitt betrachten wir einige geeignete Werkzeuge und deren Anwendung.

### HTML-Bereinigung

Eine HTML-Bereinigungsbibliothek entfernt alles, was zur Skriptausführung führen könnte, aus dem HTML, sodass Sie komplette Sets von HTML-Knoten aus einer entfernten Quelle sicher in Ihr DOM einfügen können. [DOMPurify](https://github.com/cure53/DOMPurify), das von verschiedenen Sicherheitsexperten überprüft wurde, ist eine geeignete Bibliothek für diese Aufgabe in Erweiterungen.

Für die Verwendung in der Produktion kommt [DOMPurify](https://github.com/cure53/DOMPurify) als minifizierte Version: purify.min.js. Sie können dieses Skript auf die Weise verwenden, die am besten zu Ihrer Erweiterung passt. Beispielsweise könnten Sie es als Inhalts-Skript hinzufügen:

```json
"content_scripts": [
  {
    "matches" : ["<all_urls>"],
    "js": ["purify.min.js", "myinjectionscript.js"]
  }
]
```

Dann können Sie in myinjectionscript.js das externe HTML lesen, bereinigen und es dem DOM einer Seite hinzufügen:

```js
let elem = document.createElement("div");
let cleanHTML = DOMPurify.sanitize(externalHTML);
elem.innerHTML = cleanHTML;
```

Sie können jede Methode verwenden, um das bereinigte HTML zu Ihrem DOM hinzuzufügen, beispielsweise die `.html()`-Funktion von jQuery. Denken Sie jedoch daran, dass in diesem Fall das `SAFE_FOR_JQUERY`-Flag verwendet werden muss:

```js
let elem = $("<div/>");
let cleanHTML = DOMPurify.sanitize(externalHTML, { SAFE_FOR_JQUERY: true });
elem.html(cleanHTML);
```

### Template-Engines

Ein weiteres gängiges Muster besteht darin, eine lokale HTML-Vorlage für eine Seite zu erstellen und entfernte Werte zu verwenden, um die Lücken zu füllen. Während dieser Ansatz im Allgemeinen akzeptabel ist, sollte darauf geachtet werden, keine Konstrukte zu verwenden, die die Einfügung ausführbaren Codes ermöglichen würden. Dies kann passieren, wenn die Template-Engine Konstrukte verwendet, die rohes HTML in das Dokument einfügen. Wenn die Variable, die rohes HTML einfügt, aus einer entfernten Quelle stammt, unterliegt sie demselben Sicherheitsrisiko wie in der Einführung erwähnt.

Wenn Sie beispielsweise [Mustache-Templates](https://mustache.github.io/) verwenden, müssen Sie die doppelten geschweiften Klammern `\{{variable}}` verwenden, die HTML maskieren. Die Verwendung der dreifachen geschweiften Klammern `\{\{{variable}}}` muss vermieden werden, da diese einen rohen HTML-String injizieren und ausführbaren Code zu Ihrer Vorlage hinzufügen können. [Handlebars](https://handlebarsjs.com/) funktioniert auf ähnliche Weise, wobei Variablen in doppelten Handlebars `\{{variable}}` maskiert werden. Hingegen bleiben Variablen in dreifachen Handlebars unmaskiert und müssen vermieden werden. Zudem, wenn Sie einen Handlebars-Helfer mit `Handlebars.SafeString` erstellen, verwenden Sie `Handlebars.escapeExpression()`, um alle dynamischen Parameter, die an den Helfer übergeben werden, zu maskieren. Dies ist erforderlich, da die resultierende Variable von `Handlebars.SafeString` als sicher gilt und beim Einfügen mit doppelten Handlebars nicht maskiert wird.

Es gibt ähnliche Konstrukte in anderen Templating-Systemen, die mit der gleichen Sorgfalt behandelt werden müssen.

## Weiterführende Literatur

Für weitere Informationen zu diesem Thema, siehe folgende Artikel:

- [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://owasp.org/www-community/xss-filter-evasion-cheatsheet)
