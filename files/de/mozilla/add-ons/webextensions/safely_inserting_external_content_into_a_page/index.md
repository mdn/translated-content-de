---
title: Sicheres Einfügen externer Inhalte in eine Seite
short-title: Externe Inhalte einfügen
slug: Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page
l10n:
  sourceCommit: b9850ebb7c55331766b1976f861907fbc90352a1
---

Es gibt Situationen, in denen Sie Inhalte aus einer externen Quelle in Ihre Erweiterung einbinden möchten oder müssen. Es besteht jedoch das Risiko, dass die Quelle möglicherweise bösartige Skripte eingebettet hat – entweder durch den Entwickler der Quelle oder durch eine böswillige Drittpartei.

Betrachten Sie zum Beispiel einen RSS-Reader. Sie wissen nicht, welche RSS-Feeds Ihre Erweiterung öffnen wird, und haben keine Kontrolle über den Inhalt dieser RSS-Feeds. Es ist also möglich, dass der Benutzer einen Feed abonniert, bei dem beispielsweise der Titel eines Feed-Elements ein Skript enthält. Dies könnte so einfach sein wie das Einfügen von JavaScript-Code innerhalb von `<script></script>`-Tags. Wenn Sie den Titel extrahieren, annehmen, dass es sich um einfachen Text handelt, und ihn dem DOM einer von Ihrer Erweiterung erstellten Seite hinzufügen, führt Ihr Benutzer jetzt ein unbekanntes Skript in seinem Browser aus. Daher muss darauf geachtet werden, dass beliebiger Text nicht als HTML ausgewertet wird.

Sie müssen auch bedenken, dass Erweiterungen privilegierte Kontexte haben, zum Beispiel in Hintergrundskripten und Inhaltsskripten. Im schlimmsten Fall könnte ein eingebettetes Skript in einem dieser Kontexte ausgeführt werden, was als Privilegieneskalation bekannt ist. Diese Situation kann den Browser eines Benutzers für einen entfernten Angriff öffnen, indem der Website, die den Code injiziert hat, ermöglicht wird, auf kritische Benutzerdaten zuzugreifen, wie z.B. Passwörter, Browserhistorie oder Surfverhalten.

Dieser Artikel untersucht, wie man sicher mit entfernten Daten arbeitet und sie einem DOM hinzufügt.

## Arbeiten mit beliebigen Zeichenfolgen

Beim Arbeiten mit Zeichenfolgen gibt es einige empfohlene Optionen, um diese sicher in eine Seite einzufügen: die Standard-DOM-Knoten-Erstellungsmethoden oder jQuery.

### DOM-APIs zur Knoten-Erstellung und sicheren Texteingabe

Für eine leichte und sichere Methode, Zeichenfolgen einzufügen, verwenden Sie native DOM-APIs: Erstellen Sie Elemente mit [`document.createElement`](/de/docs/Web/API/Document/createElement) und setzen Sie nur validierte, nicht ausführbare Attribute mit [`Element.setAttribute`](/de/docs/Web/API/Element/setAttribute). Um Textinhalt hinzuzufügen, verwenden Sie die [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft. Eine sichere Vorgehensweise besteht darin, die Knoten separat zu erstellen und deren Inhalt mit `textContent` zuzuweisen:

```js example-good
let data = JSON.parse(responseText);
let div = document.createElement("div");
div.className = data.className;
div.textContent = `Your favorite color is now ${data.color}`;
addonElement.appendChild(div);
```

Dieser Ansatz ist sicher, da die Verwendung von `.textContent` automatisch jegliches remote HTML in `data.color` maskiert.

Achtung, es gibt native Methoden, die nicht sicher sind. Betrachten Sie den folgenden Code:

```js example-bad
let data = JSON.parse(responseText);
addonElement.innerHTML = `<div class='${data.className}'>Your favorite color is now ${data.color}</div>`;
```

Hier könnten die Inhalte von `data.className` oder `data.color` HTML enthalten, das das Tag frühzeitig schließen, beliebigen weiteren HTML-Inhalt einfügen und dann ein weiteres Tag öffnen kann.

### jQuery

Bei der Verwendung von jQuery vermeiden Funktionen wie `attr()` und `text()` die Behandlung eines beliebigen Zeichens als HTML-Syntax. Das "Favorite Color"-Beispiel von oben würde in jQuery so aussehen:

```js example-good
let node = $("<div>");
node.addClass(data.className);
node.text(`Your favorite color is now ${data.color}`);
```

## Arbeiten mit HTML-Inhalt

Beim Arbeiten mit extern bezogenem Inhalt, den Sie als HTML kennen, ist es wesentlich, das HTML zu bereinigen, bevor es einer Seite hinzugefügt wird. Die beste Praxis für das Bereinigen von HTML ist die Verwendung einer HTML-Bereinigungsbibliothek oder einer Template-Engine mit HTML-Bereinigungsfunktionen. In diesem Abschnitt betrachten wir einige geeignete Werkzeuge und deren Anwendung.

### HTML-Bereinigung

Eine HTML-Bereinigungsbibliothek entfernt alles aus HTML, was zur Skriptausführung führen könnte, sodass Sie sicher vollständige HTML-Knoten von einer externen Quelle in Ihr DOM injizieren können. [DOMPurify](https://github.com/cure53/DOMPurify), das von verschiedenen Sicherheitsexperten überprüft wurde, ist eine geeignete Bibliothek für diese Aufgabe in Erweiterungen.

Für die Produktion kommt [DOMPurify](https://github.com/cure53/DOMPurify) als minimierte Version: purify.min.js. Sie können dieses Skript in der für Ihre Erweiterung am besten geeigneten Weise verwenden. Zum Beispiel könnten Sie es als Inhaltsskript hinzufügen:

```json
"content_scripts": [
  {
    "matches" : ["<all_urls>"],
    "js": ["purify.min.js", "my-injection-script.js"]
  }
]
```

Dann können Sie in `my-injection-script.js` das externe HTML lesen, bereinigen und es dem DOM einer Seite hinzufügen:

```js
let elem = document.createElement("div");
let cleanHTML = DOMPurify.sanitize(externalHTML);
elem.innerHTML = cleanHTML;
```

Sie können jede Methode verwenden, um das bereinigte HTML Ihrem DOM hinzuzufügen, zum Beispiel die `.html()`-Funktion von jQuery. Beachten Sie jedoch, dass das `SAFE_FOR_JQUERY`-Flag in diesem Fall verwendet werden muss:

```js
let elem = $("<div/>");
let cleanHTML = DOMPurify.sanitize(externalHTML, { SAFE_FOR_JQUERY: true });
elem.html(cleanHTML);
```

### Template-Engines

Ein weiteres häufiges Muster besteht darin, eine lokale HTML-Vorlage für eine Seite zu erstellen und entfernte Werte zu verwenden, um Lücken zu füllen. Während dieser Ansatz im Allgemeinen akzeptabel ist, sollte darauf geachtet werden, keine Konstrukte zu verwenden, die die Ausführung von Code erlauben würden. Dies kann passieren, wenn die Template-Engine Konstrukte verwendet, die rohe HTML in das Dokument einfügen. Wenn die Variable, die verwendet wird, um rohes HTML einzufügen, von einer entfernten Quelle stammt, unterliegt sie dem gleichen Sicherheitsrisiko, das in der Einführung erwähnt wurde.

Zum Beispiel bei der Verwendung von [Mustache-Templates](https://mustache.github.io/) müssen Sie den doppelten Mustache `\{{variable}}` verwenden, der jegliches HTML maskiert. Die Verwendung des dreifachen Mustache `\{\{{variable}}}` muss vermieden werden, da dies eine rohe HTML-Zeichenfolge einfügt und ausführbaren Code zu Ihrer Vorlage hinzufügen könnte. [Handlebars](https://handlebarsjs.com/) funktioniert auf ähnliche Weise, wobei Variablen in doppelten Handlebars `\{{variable}}` maskiert werden. Während Variablen in dreifachen Handlebars roh bleiben und vermieden werden müssen. Wenn Sie auch einen Handlebars-Helper mit `Handlebars.SafeString` erstellen, verwenden Sie `Handlebars.escapeExpression()`, um alle dynamischen Parameter zu maskieren, die dem Helper übergeben werden. Dies ist erforderlich, da die resultierende Variable aus `Handlebars.SafeString` als sicher gilt und nicht maskiert wird, wenn sie mit doppelten Handlebars eingefügt wird.

Es gibt ähnliche Konstrukte in anderen Template-Systemen, die mit der gleichen Sorgfalt behandelt werden müssen.

## Weiterführende Informationen

Für weitere Informationen zu diesem Thema lesen Sie die folgenden Artikel:

- [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://owasp.org/www-community/xss-filter-evasion-cheatsheet)
