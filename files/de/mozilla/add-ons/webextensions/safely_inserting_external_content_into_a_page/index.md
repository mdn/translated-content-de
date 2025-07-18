---
title: Externen Inhalt sicher in eine Seite einfügen
short-title: Externen Inhalt einfügen
slug: Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Es gibt Zeiten, in denen Sie Inhalte aus einer externen Quelle in Ihre Erweiterung einfügen möchten oder müssen. Es besteht jedoch die Gefahr, dass die Quelle bösartige Skripte eingebettet hat—entweder vom Entwickler der Quelle oder von einem bösartigen Dritten hinzugefügt.

Nehmen Sie einen RSS-Reader als Beispiel. Sie wissen nicht, welche RSS-Feeds Ihre Erweiterung öffnen wird und haben keine Kontrolle über den Inhalt dieser RSS-Feeds. Es ist also möglich, dass der Benutzer einen Feed abonniert, in dem zum Beispiel der Titel eines Feed-Elements ein Skript enthält. Dies könnte so einfach sein wie das Einfügen von JavaScript-Code innerhalb von `<script></script>`-Tags. Wenn Sie den Titel extrahieren, davon ausgehen, dass er reiner Text ist, und ihn in das DOM einer von Ihrer Erweiterung erstellten Seite einfügen, läuft nun ein unbekanntes Skript im Browser Ihres Nutzers. Daher muss darauf geachtet werden, beliebigen Text nicht als HTML auszuführen.

Sie müssen auch bedenken, dass Erweiterungen privilegierte Kontexte haben, zum Beispiel in Hintergrundskripten und Inhalts-Skripten. Im schlimmsten Fall könnte ein eingebettetes Skript in einem dieser Kontexte laufen, eine Situation, die als Privilegieneskalation bekannt ist. Diese Situation kann den Browser eines Nutzers für Remote-Angriffe öffnen, indem sie der Website, die den Code injiziert hat, den Zugriff auf kritische Benutzerdaten ermöglicht, wie Passwörter, Browserverlauf oder das Surfverhalten.

Dieser Artikel untersucht, wie Sie sicher mit entfernten Daten arbeiten und diese zu einem DOM hinzufügen können.

## Arbeiten mit beliebigen Zeichenfolgen

Beim Arbeiten mit Zeichenfolgen gibt es einige empfohlene Optionen, um sie sicher zu einer Seite hinzuzufügen: die Standard-DOM-Knoten-Erstellungsmethoden oder jQuery.

### DOM-Knoten-Erstellungsmethoden

Ein leichter Ansatz, um Zeichenfolgen in eine Seite einzufügen, ist die Verwendung der nativen DOM-Manipulationsmethoden: [`document.createElement`](/de/docs/Web/API/Document/createElement), [`Element.setAttribute`](/de/docs/Web/API/Element/setAttribute) und [`Node.textContent`](/de/docs/Web/API/Node/textContent). Der sichere Ansatz besteht darin, die Knoten separat zu erstellen und ihren Inhalt mit `textContent` zuzuweisen:

```js example-good
let data = JSON.parse(responseText);
let div = document.createElement("div");
div.className = data.className;
div.textContent = `Your favorite color is now ${data.color}`;
addonElement.appendChild(div);
```

Dieser Ansatz ist sicher, weil die Verwendung von `.textContent` automatisch jegliches Remote-HTML in `data.color` escaped.

Jedoch Vorsicht, Sie können native Methoden verwenden, die nicht sicher sind. Nehmen Sie den folgenden Code:

```js example-bad
let data = JSON.parse(responseText);
addonElement.innerHTML = `<div class='${data.className}'>Your favorite color is now ${data.color}</div>`;
```

Hier könnten die Inhalte von `data.className` oder `data.color` HTML enthalten, das den Tag frühzeitig schließen, beliebigen weiteren HTML-Inhalt einfügen und dann einen weiteren Tag öffnen kann.

### jQuery

Wenn Sie jQuery verwenden, escapen Funktionen wie `attr()` und `text()` Inhalte, wenn sie zu einem DOM hinzugefügt werden. Also würde das "Lieblingsfarbe"-Beispiel von oben, umgesetzt in jQuery, so aussehen:

```js example-good
let node = $("</div>");
node.addClass(data.className);
node.text(`Your favorite color is now ${data.color}`);
```

## Arbeiten mit HTML-Inhalten

Wenn Sie mit externen Inhalten arbeiten, von denen Sie wissen, dass sie HTML sind, ist es wichtig, das HTML zu sanitizen, bevor es zu einer Seite hinzugefügt wird. Die beste Praxis für das Sanitisieren von HTML besteht darin, eine HTML-Sanitisierungsbibliothek oder ein Template-Engine mit HTML-Sanitisierungsfunktionen zu verwenden. In diesem Abschnitt schauen wir uns einige geeignete Werkzeuge an und wie man sie verwendet.

### HTML-Sanitisierung

Eine HTML-Sanitisierungsbibliothek entfernt alles, was zu einer Skriptausführung führen könnte, aus HTML, sodass Sie komplette Sätze von HTML-Knoten aus einer externen Quelle sicher in Ihr DOM einfügen können. [DOMPurify](https://github.com/cure53/DOMPurify), das von verschiedenen Sicherheitsexperten überprüft wurde, ist eine geeignete Bibliothek für diese Aufgabe in Erweiterungen.

Für die Verwendung in Produktionsumgebungen wird [DOMPurify](https://github.com/cure53/DOMPurify) als minifizierte Version geliefert: purify.min.js. Sie können dieses Skript auf die Weise verwenden, die am besten zu Ihrer Erweiterung passt. Beispielsweise könnten Sie es als Inhaltsskript hinzufügen:

```json
"content_scripts": [
  {
    "matches" : ["<all_urls>"],
    "js": ["purify.min.js", "my-injection-script.js"]
  }
]
```

Dann können Sie in `my-injection-script.js` das externe HTML lesen, es sanitizen und es zum DOM einer Seite hinzufügen:

```js
let elem = document.createElement("div");
let cleanHTML = DOMPurify.sanitize(externalHTML);
elem.innerHTML = cleanHTML;
```

Sie können jede Methode verwenden, um das sanitisierte HTML zu Ihrem DOM hinzuzufügen, zum Beispiel die `.html()`-Funktion von jQuery. Denken Sie jedoch daran, dass in diesem Fall die `SAFE_FOR_JQUERY`-Flag verwendet werden muss:

```js
let elem = $("<div/>");
let cleanHTML = DOMPurify.sanitize(externalHTML, { SAFE_FOR_JQUERY: true });
elem.html(cleanHTML);
```

### Template-Engines

Ein weiteres häufiges Muster besteht darin, eine lokale HTML-Vorlage für eine Seite zu erstellen und entfernte Werte zu verwenden, um die Lücken auszufüllen. Während dieser Ansatz im Allgemeinen akzeptabel ist, sollte darauf geachtet werden, keine Konstruktionen zu verwenden, die die Einfügung ausführbaren Codes ermöglichen würden. Dies kann passieren, wenn die Template-Engine Konstruktionen verwendet, die rohes HTML in das Dokument einfügen. Wenn die Variable, die rohes HTML einfügt, aus einer externen Quelle stammt, unterliegt sie dem gleichen Sicherheitsrisiko, das in der Einleitung erwähnt wurde.

Zum Beispiel müssen Sie bei der Verwendung von [Mustache-Vorlagen](https://mustache.github.io/) die doppelten geschweiften Klammern, `\{{variable}}`, verwenden, die jedes HTML escapen. Die Verwendung der dreifachen geschweiften Klammern, `\{\{{variable}}}`, muss vermieden werden, da diese einen rohen HTML-String einfügen und ausführbaren Code zu Ihrem Template hinzufügen könnten. [Handlebars](https://handlebarsjs.com/) funktioniert auf ähnliche Weise, indem Variablen in doppelten geschweiften Klammern, `\{{variable}}`, escaped werden. Wohingegen Variablen in dreifachen geschweiften Klammern roh bleiben und vermieden werden müssen. Wenn Sie auch einen Handlebars-Helper mit `Handlebars.SafeString` erstellen, verwenden Sie `Handlebars.escapeExpression()`, um alle dynamischen Parameter zu escapen, die an den Helper übergeben werden. Dies ist erforderlich, weil die resultierende Variable von `Handlebars.SafeString` als sicher gilt und nicht escaped wird, wenn sie mit doppelten geschweiften Klammern eingefügt wird.

Es gibt ähnliche Konstruktionen in anderen Templating-Systemen, die mit derselben Sorgfalt behandelt werden müssen.

## Weiterführende Literatur

Für weitere Informationen zu diesem Thema siehe die folgenden Artikel:

- [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://owasp.org/www-community/xss-filter-evasion-cheatsheet)
