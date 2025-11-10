---
title: Sicheres Einfügen externer Inhalte in eine Seite
short-title: Externe Inhalte einfügen
slug: Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page
l10n:
  sourceCommit: a71a38f7bb60ccbeb81b0eb1c27dc769370b5053
---

Es gibt Situationen, in denen Sie Inhalte aus einer externen Quelle in Ihre Erweiterung einfügen möchten oder müssen. Es besteht jedoch das Risiko, dass die Quelle bösartige Skripte enthält, die entweder vom Entwickler der Quelle oder von einem böswilligen Dritten hinzugefügt wurden.

Nehmen Sie einen RSS-Reader als Beispiel. Sie wissen nicht, welche RSS-Feeds Ihre Erweiterung öffnen wird, und Sie haben keine Kontrolle über die Inhalte dieser RSS-Feeds. Es ist also möglich, dass der Benutzer einem Feed abonniert, bei dem beispielsweise der Titel eines Feed-Elements ein Skript enthält. Dies könnte so einfach sein wie das Einfügen von JavaScript-Code innerhalb von `<script></script>`-Tags. Wenn Sie den Titel extrahieren, annehmen, dass es sich um einfachen Text handelt, und ihn dem DOM einer von Ihrer Erweiterung erstellten Seite hinzufügen, läuft nun ein unbekanntes Skript im Browser Ihres Benutzers. Daher muss darauf geachtet werden, beliebigen Text nicht als HTML zu interpretieren.

Sie müssen sich auch bewusst sein, dass Erweiterungen privilegierte Kontexte haben, beispielsweise in Hintergrundskripts und Inhalts-Skripten. Im schlimmsten Fall könnte ein eingebettetes Skript in einem dieser Kontexte ausgeführt werden, eine Situation, die als Privilegieneskalation bekannt ist. Diese Situation kann den Browser eines Benutzers für externe Angriffe öffnen, indem die Website, die den Code eingefügt hat, Zugriff auf kritische Benutzerdaten wie Passwörter, Browserverlauf oder Surfverhalten erhält.

Dieser Artikel untersucht, wie man sicher mit Remote-Daten arbeitet und sie einem DOM hinzufügt.

## Arbeiten mit beliebigen Zeichenfolgen

Beim Arbeiten mit Zeichenfolgen gibt es einige empfohlene Optionen, um sie sicher auf einer Seite hinzuzufügen: die standardmäßigen Methoden zur DOM-Knotenerstellung oder jQuery.

### DOM-APIs zur Knotenerstellung und sicheren Texteingabe

Für eine leichte und sichere Methode zum Einfügen von Zeichenfolgen verwenden Sie native DOM-APIs: Erstellen Sie Elemente mit [`document.createElement`](/de/docs/Web/API/Document/createElement) und setzen Sie nur validierte, nicht ausführbare Attribute mit [`Element.setAttribute`](/de/docs/Web/API/Element/setAttribute). Um Textinhalte hinzuzufügen, verwenden Sie die [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft. Ein sicherer Ansatz ist es, die Knoten separat zu erstellen und deren Inhalt mit `textContent` zuzuweisen:

```js example-good
let data = JSON.parse(responseText);
let div = document.createElement("div");
div.className = data.className;
div.textContent = `Your favorite color is now ${data.color}`;
addonElement.appendChild(div);
```

Dieser Ansatz ist sicher, weil die Verwendung von `.textContent` automatisch jegliches Remote-HTML in `data.color` maskiert.

Seien Sie jedoch vorsichtig, Sie können native Methoden verwenden, die nicht sicher sind. Nehmen Sie den folgenden Code:

```js example-bad
let data = JSON.parse(responseText);
addonElement.innerHTML = `<div class='${data.className}'>Your favorite color is now ${data.color}</div>`;
```

Hier könnten die Inhalte von `data.className` oder `data.color` HTML enthalten, das den Tag frühzeitig schließen, beliebige zusätzliche HTML-Inhalte einfügen und dann einen weiteren Tag öffnen kann.

### jQuery

Bei der Verwendung von jQuery maskieren Funktionen wie `attr()` und `text()` Inhalte, während sie zu einem DOM hinzugefügt werden. Das obige Beispiel "Lieblingsfarbe" würde in jQuery folgendermaßen aussehen:

```js example-good
let node = $("</div>");
node.addClass(data.className);
node.text(`Your favorite color is now ${data.color}`);
```

## Arbeiten mit HTML-Inhalten

Beim Arbeiten mit extern bezogenen Inhalten, die Sie als HTML erkennen, ist es unerlässlich, das HTML zu bereinigen, bevor es einer Seite hinzugefügt wird. Die beste Praxis zur Bereinigung von HTML ist die Verwendung einer HTML-Bereinigungsbibliothek oder einer Template-Engine mit HTML-Bereinigungsfunktionen. In diesem Abschnitt betrachten wir einige geeignete Werkzeuge und deren Verwendung.

### HTML-Bereinigung

Eine HTML-Bereinigungsbibliothek entfernt alles, was zur Skriptausführung führen könnte, aus HTML, sodass Sie vollständige HTML-Knotensätze aus einer Remote-Quelle sicher in Ihr DOM einfügen können. [DOMPurify](https://github.com/cure53/DOMPurify), das von verschiedenen Sicherheitsexperten überprüft wurde, ist eine geeignete Bibliothek für diese Aufgabe in Erweiterungen.

Für die Produktion kommt [DOMPurify](https://github.com/cure53/DOMPurify) als minimierte Version: purify.min.js. Sie können dieses Skript auf die Weise verwenden, die am besten zu Ihrer Erweiterung passt. Zum Beispiel könnten Sie es als Inhaltsskript hinzufügen:

```json
"content_scripts": [
  {
    "matches" : ["<all_urls>"],
    "js": ["purify.min.js", "my-injection-script.js"]
  }
]
```

Dann können Sie in `my-injection-script.js` das externe HTML lesen, es bereinigen und es dem DOM einer Seite hinzufügen:

```js
let elem = document.createElement("div");
let cleanHTML = DOMPurify.sanitize(externalHTML);
elem.innerHTML = cleanHTML;
```

Sie können jede Methode verwenden, um das bereinigte HTML in Ihr DOM hinzuzufügen, beispielsweise die `.html()`-Funktion von jQuery. Denken Sie jedoch daran, dass in diesem Fall das `SAFE_FOR_JQUERY`-Flag verwendet werden muss:

```js
let elem = $("<div/>");
let cleanHTML = DOMPurify.sanitize(externalHTML, { SAFE_FOR_JQUERY: true });
elem.html(cleanHTML);
```

### Template-Engines

Ein weiteres häufiges Muster ist die Erstellung einer lokalen HTML-Vorlage für eine Seite und die Verwendung von Remote-Werten, um die Lücken zu füllen. Während dieser Ansatz im Allgemeinen akzeptabel ist, sollte darauf geachtet werden, keine Konstrukte zu verwenden, die die Einfügung ausführbaren Codes ermöglichen würden. Dies kann passieren, wenn die Template-Engine Konstrukte verwendet, die rohes HTML in das Dokument einfügen. Wenn die Variable, die rohes HTML einfügt, von einer Remote-Quelle stammt, ist es demselben Sicherheitsrisiko ausgesetzt, das in der Einleitung erwähnt wurde.

Beispielsweise müssen Sie bei der Verwendung von [Mustache-Vorlagen](https://mustache.github.io/) das doppelte Mustache verwenden, `\{{variable}}`, das jegliches HTML maskiert. Die Verwendung des dreifachen Mustache, `\{\{{variable}}}`, muss vermieden werden, da dies einen rohen HTML-String einfügt und ausführbaren Code zu Ihrer Vorlage hinzufügen könnte. [Handlebars](https://handlebarsjs.com/) funktioniert auf ähnliche Weise, mit Variablen in doppelten Handlebars, `\{{variable}}`, die maskiert werden. Während Variablen in dreifachen Handlebars unbehandelt bleiben und vermieden werden müssen. Wenn Sie auch einen Handlebars-Helper mit `Handlebars.SafeString` erstellen, verwenden Sie `Handlebars.escapeExpression()`, um alle dynamischen Parameter zu maskieren, die dem Helper übergeben werden. Dies ist erforderlich, da die resultierende Variable von `Handlebars.SafeString` als sicher angesehen wird und nicht maskiert wird, wenn sie mit doppelten Handlebars eingefügt wird.

Es gibt ähnliche Konstrukte in anderen Template-Systemen, die mit dem gleichen Maß an Vorsicht angegangen werden müssen.

## Weiterführende Lektüre

Weitere Informationen zu diesem Thema finden Sie in den folgenden Artikeln:

- [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://owasp.org/www-community/xss-filter-evasion-cheatsheet)
