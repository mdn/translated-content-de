---
title: Sicheres Einfügen externer Inhalte in eine Seite
short-title: Externe Inhalte einfügen
slug: Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{AddonSidebar}}

Es gibt Zeiten, in denen Sie möglicherweise Inhalte aus einer externen Quelle in Ihre Erweiterung einfügen möchten oder müssen. Dabei besteht jedoch das Risiko, dass die Quelle schädliche Skripte enthält – entweder vom Entwickler der Quelle hinzugefügt oder von einem bösartigen Dritten eingebracht.

Nehmen Sie einen RSS-Reader als Beispiel. Sie wissen nicht, welche RSS-Feeds Ihre Erweiterung öffnen wird, und haben keine Kontrolle über den Inhalt dieser RSS-Feeds. Es ist also möglich, dass der Benutzer einen Feed abonniert, wo z. B. der Titel eines Feed-Elements ein Skript enthält. Dies könnte so einfach sein wie das Einfügen von JavaScript-Code innerhalb von `<script></script>`-Tags. Wenn Sie den Titel extrahieren, annehmen, dass es sich um einfachen Text handelt, und ihn in das DOM einer von Ihrer Erweiterung erstellten Seite einfügen, läuft jetzt ein unbekanntes Skript im Browser Ihres Benutzers. Daher ist Vorsicht geboten, um zu vermeiden, dass willkürlicher Text als HTML ausgewertet wird.

Sie müssen auch bedenken, dass Erweiterungen privilegierte Kontexte haben, wie z.B. in Hintergrundskripten und Inhalts-Skripten. Im schlimmsten Fall könnte ein eingebettetes Skript in einem dieser Kontexte ausgeführt werden, eine Situation, die als Privilegieneskalation bekannt ist. Diese Situation kann den Browser eines Benutzers für Angriffe aus der Ferne öffnen, indem sie der Website, die den Code eingespeist hat, Zugriff auf kritische Benutzerdaten gewährt, wie z.B. Passwörter, Browser-Verlauf oder Surfverhalten.

Dieser Artikel untersucht, wie Sie sicher mit entfernten Daten arbeiten und sie einem DOM hinzufügen können.

## Arbeiten mit beliebigen Zeichenfolgen

Beim Arbeiten mit Zeichenfolgen gibt es ein paar empfohlene Optionen, um diese sicher auf einer Seite hinzuzufügen: die Standardmethoden zur DOM-Node-Erstellung oder jQuery.

### DOM-Node-Erstellungsmethoden

Ein leichter Ansatz zum Einfügen von Zeichenfolgen in eine Seite ist die Verwendung der nativen DOM-Manipulationsmethoden: [`document.createElement`](/de/docs/Web/API/Document/createElement), [`Element.setAttribute`](/de/docs/Web/API/Element/setAttribute) und [`Node.textContent`](/de/docs/Web/API/Node/textContent). Der sichere Ansatz besteht darin, die Knoten separat zu erstellen und ihren Inhalt mit `textContent` zuzuweisen:

```js example-good
let data = JSON.parse(responseText);
let div = document.createElement("div");
div.className = data.className;
div.textContent = `Your favorite color is now ${data.color}`;
addonElement.appendChild(div);
```

Dieser Ansatz ist sicher, da durch die Verwendung von `.textContent` jede entfernte HTML in `data.color` automatisch abgewandelt wird.

Aber Vorsicht, Sie können native Methoden verwenden, die nicht sicher sind. Nehmen Sie den folgenden Code:

```js example-bad
let data = JSON.parse(responseText);
addonElement.innerHTML = `<div class='${data.className}'>Your favorite color is now ${data.color}</div>`;
```

Hier könnten die Inhalte von `data.className` oder `data.color` HTML enthalten, das das Tag vorzeitig schließen, beliebige weitere HTML-Inhalte einfügen und dann ein anderes Tag öffnen könnte.

### jQuery

Bei Verwendung von jQuery entweichen Funktionen wie `attr()` und `text()` den Inhalt beim Hinzufügen zu einem DOM. So würde das "Lieblingsfarbe"-Beispiel oben, in jQuery implementiert, folgendermaßen aussehen:

```js example-good
let node = $("</div>");
node.addClass(data.className);
node.text(`Your favorite color is now ${data.color}`);
```

## Arbeiten mit HTML-Inhalt

Beim Arbeiten mit extern bezogenen Inhalten, von denen Sie wissen, dass es sich um HTML handelt, ist es unerlässlich, den HTML zu bereinigen, bevor er einer Seite hinzugefügt wird. Best Practice für die Bereinigung von HTML ist die Verwendung einer HTML-Bereinigungsbibliothek oder einer Template-Engine mit HTML-Bereinigungsfunktionen. In diesem Abschnitt sehen wir uns einige geeignete Werkzeuge und deren Verwendung an.

### HTML-Bereinigung

Eine HTML-Bereinigungsbibliothek entfernt alles, was zur Skriptausführung führen könnte, aus HTML, sodass Sie vollständige Sätze von HTML-Knoten aus einer entfernten Quelle sicher in Ihr DOM injizieren können. [DOMPurify](https://github.com/cure53/DOMPurify), das von verschiedenen Sicherheitsexperten überprüft wurde, ist eine geeignete Bibliothek für diese Aufgabe in Erweiterungen.

Für den Produktionseinsatz kommt [DOMPurify](https://github.com/cure53/DOMPurify) als minimierte Version: purify.min.js. Sie können dieses Skript auf die Weise verwenden, die am besten zu Ihrer Erweiterung passt. Zum Beispiel könnten Sie es als Inhaltsskript hinzufügen:

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

Sie können jede Methode verwenden, um das bereinigte HTML zu Ihrem DOM hinzuzufügen, beispielsweise die `.html()`-Funktion von jQuery. Denken Sie jedoch daran, dass in diesem Fall das `SAFE_FOR_JQUERY`-Flag verwendet werden muss:

```js
let elem = $("<div/>");
let cleanHTML = DOMPurify.sanitize(externalHTML, { SAFE_FOR_JQUERY: true });
elem.html(cleanHTML);
```

### Template-Engines

Ein weiteres häufiges Muster ist es, ein lokales HTML-Template für eine Seite zu erstellen und Remote-Werte zu verwenden, um die Lücken zu füllen. Während dieser Ansatz im Allgemeinen akzeptabel ist, sollte darauf geachtet werden, keine Konstrukte zu verwenden, die das Einfügen von ausführbarem Code ermöglichen würden. Dies kann passieren, wenn die Template-Engine Konstrukte verwendet, die rohen HTML-Code in das Dokument einfügen. Wenn die Variable, die rohen HTML einfügt, von einer entfernten Quelle stammt, unterliegt sie demselben Sicherheitsrisiko, das in der Einleitung erwähnt wurde.

Zum Beispiel müssen Sie bei der Verwendung von [Mustache-Templates](https://mustache.github.io/) die doppelte Mustache-Syntax, `\{{variable}}`, verwenden, die jeden HTML-Code abwandelt. Die Verwendung der dreifachen Mustache-Syntax, `\{\{{variable}}}`, muss vermieden werden, da dies einen rohen HTML-String injiziert und ausführbaren Code zu Ihrem Template hinzufügen könnte. [Handlebars](https://handlebarsjs.com/) arbeitet auf ähnliche Weise, wobei Variablen in doppelten Handlebars, `\{{variable}}`, abgewandelt werden. Während Variablen in dreifachen Handlebars roh bleiben und vermieden werden müssen. Auch wenn Sie einen Handlebars-Helfer mit `Handlebars.SafeString` erstellen, verwenden Sie `Handlebars.escapeExpression()`, um alle dynamischen Parameter zu entschärfen, die an den Helfer übergeben werden. Dies ist erforderlich, da die resultierende Variable von `Handlebars.SafeString` als sicher gilt und beim Einfügen mit doppelten Handlebars nicht entschärft wird.

Andere Templatesysteme haben ähnliche Konstrukte, die mit der gleichen Sorgfalt behandelt werden müssen.

## Weiterführende Literatur

Weitere Informationen zu diesem Thema finden Sie in den folgenden Artikeln:

- [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://owasp.org/www-community/xss-filter-evasion-cheatsheet)
