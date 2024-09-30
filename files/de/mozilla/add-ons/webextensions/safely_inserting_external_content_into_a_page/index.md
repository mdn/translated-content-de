---
title: Externe Inhalte sicher auf einer Seite einfügen
short-title: Externe Inhalte einfügen
slug: Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page
l10n:
  sourceCommit: 4e0fe2b61a65f3334debdb473ba9c937a878426b
---

{{AddonSidebar}}

Es gibt Zeiten, in denen Sie Inhalte aus einer externen Quelle in Ihre Erweiterung einbinden möchten oder müssen. Dabei besteht das Risiko, dass die Quelle schädliche Skripte enthält, die entweder vom Entwickler der Quelle oder von einer bösartigen Drittpartei hinzugefügt wurden.

Nehmen Sie einen RSS-Reader als Beispiel. Sie wissen nicht, welche RSS-Feeds Ihre Erweiterung öffnen wird und haben keine Kontrolle über deren Inhalt. Es ist also möglich, dass der Benutzer einen Feed abonniert, in dem beispielsweise der Titel eines Feedeintrags ein Skript enthält. Dies könnte so einfach sein wie das Einfügen von JavaScript-Code innerhalb von `<script></script>`-Tags. Wenn Sie den Titel extrahieren, annehmen, er sei nur Text, und ihn in das DOM einer von Ihrer Erweiterung erstellten Seite einfügen, läuft nun ein unbekanntes Skript im Browser des Benutzers. Daher muss darauf geachtet werden, dass beliebiger Text nicht als HTML ausgewertet wird.

Sie müssen auch beachten, dass Erweiterungen privilegierte Kontexte haben, z. B. in Hintergrundskripten und Inhaltsskripten. Im schlimmsten Fall könnte ein eingebettetes Skript in einem dieser Kontexte laufen, eine Situation, die als Privilegieneskalation bekannt ist. Diese Situation kann den Browser des Benutzers für Remoteangriffe öffnen, indem die Website, die den Code injiziert hat, auf kritische Benutzerdaten zugreift, wie Passwörter, Browserverläufe oder das Surfverhalten.

Dieser Artikel untersucht, wie man sicher mit remote Daten arbeitet und sie in ein DOM einfügt.

## Umgang mit beliebigen Strings

Beim Arbeiten mit Zeichenketten gibt es einige empfohlene Optionen, um sie sicher auf einer Seite hinzuzufügen: die Standard-Methoden zur DOM-Knotenerstellung oder jQuery.

### DOM-Knotenerstellungsmethoden

Ein leichter Ansatz, um Zeichenketten in eine Seite einzufügen, besteht in der Verwendung nativer DOM-Manipulationsmethoden: [`document.createElement`](/de/docs/Web/API/Document/createElement), [`Element.setAttribute`](/de/docs/Web/API/Element/setAttribute) und [`Node.textContent`](/de/docs/Web/API/Node/textContent). Der sichere Ansatz ist, die Knoten separat zu erstellen und deren Inhalt mithilfe von textContent zuzuweisen:

```js example-good
let data = JSON.parse(responseText);
let div = document.createElement("div");
div.className = data.className;
div.textContent = `Your favorite color is now ${data.color}`;
addonElement.appendChild(div);
```

Dieser Ansatz ist sicher, weil die Verwendung von `.textContent` automatisch jegliches Remote-HTML in `data.color` entwertet.

Seien Sie jedoch vorsichtig, Sie können auch native Methoden verwenden, die nicht sicher sind. Nehmen Sie den folgenden Code:

```js example-bad
let data = JSON.parse(responseText);
addonElement.innerHTML = `<div class='${data.className}'>Your favorite color is now ${data.color}</div>`;
```

Hier könnten die Inhalte von `data.className` oder `data.color` HTML enthalten, das das Tag frühzeitig schließen, beliebigen weiteren HTML-Inhalt einfügen und dann ein weiteres Tag öffnen kann.

### jQuery

Wenn Sie jQuery verwenden, entwerten Funktionen wie `attr()` und `text()` den Inhalt, wenn er einem DOM hinzugefügt wird. Das "Lieblingsfarbe"-Beispiel von oben, in jQuery implementiert, würde so aussehen:

```js example-good
let node = $("</div>");
node.addClass(data.className);
node.text(`Your favorite color is now ${data.color}`);
```

## Umgang mit HTML-Inhalt

Wenn Sie mit extern bezogenen Inhalten arbeiten, von denen Sie wissen, dass sie HTML sind, ist es wichtig, das HTML zu bereinigen, bevor es einer Seite hinzugefügt wird. Best Practice für die Reinigung von HTML ist die Verwendung einer HTML-Sanitization-Bibliothek oder einer Template-Engine mit HTML-Sanitization-Funktionen. In diesem Abschnitt betrachten wir einige geeignete Werkzeuge und deren Anwendung.

### HTML-Sanitization

Eine HTML-Sanitization-Bibliothek entfernt alles, was zur Skriptausführung führen könnte, aus HTML, sodass Sie komplette Mengen von HTML-Knoten aus einer Remotequelle sicher in Ihr DOM injizieren können. [DOMPurify](https://github.com/cure53/DOMPurify), das von verschiedenen Sicherheitsexperten überprüft wurde, ist eine geeignete Bibliothek für diese Aufgabe in Erweiterungen.

Für den Produktionseinsatz kommt DOMPurify als minimierte Version: purify.min.js. Sie können dieses Skript auf die für Ihre Erweiterung am besten geeignete Weise verwenden. Beispielsweise könnten Sie es als Inhalts-Skript hinzufügen:

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

Sie können jede Methode verwenden, um das bereinigte HTML Ihrem DOM hinzuzufügen, beispielsweise die `.html()`-Funktion von jQuery. Denken Sie jedoch daran, dass in diesem Fall das `SAFE_FOR_JQUERY`-Flag verwendet werden muss:

```js
let elem = $("<div/>");
let cleanHTML = DOMPurify.sanitize(externalHTML, { SAFE_FOR_JQUERY: true });
elem.html(cleanHTML);
```

### Template-Engines

Ein weiteres häufiges Muster besteht darin, eine lokale HTML-Vorlage für eine Seite zu erstellen und entfernte Werte zu verwenden, um die Lücken zu füllen. Während dieser Ansatz im Allgemeinen akzeptabel ist, sollte darauf geachtet werden, keine Konstrukte zu verwenden, die das Einfügen von ausführbarem Code ermöglichen. Dies kann passieren, wenn die Template-Engine Konstrukte verwendet, die rohes HTML in das Dokument einfügen. Wenn die Variable, die verwendet wird, um rohes HTML einzufügen, von einer Remotequelle stammt, unterliegt sie demselben Sicherheitsrisiko, das in der Einführung erwähnt wird.

Zum Beispiel müssen Sie bei der Verwendung von [Mustache-Templates](https://mustache.github.io/) die doppelte Mustache, `\{{variable}}`, verwenden, die HTML entwertet. Die Verwendung der dreifachen Mustache, `\{\{{variable}}}`, muss vermieden werden, da diese eine rohe HTML-Zeichenkette injiziert und ausführbaren Code zu Ihrer Vorlage hinzufügen könnte. [Handlebars](https://handlebarsjs.com/) arbeitet auf ähnliche Weise, wobei Variablen in doppelten Handlebars, `\{{variable}}`, entwertet werden. Während Variablen in dreifachen Handlebars roh belassen werden und vermieden werden müssen. Wenn Sie auch einen Handlebars-Helper mit `Handlebars.SafeString` erstellen, verwenden Sie `Handlebars.escapeExpression()`, um alle dynamischen Parameter zu entwerten, die an den Helper übergeben werden. Dies ist erforderlich, weil die resultierende Variable von `Handlebars.SafeString` als sicher angesehen wird und nicht entwertet wird, wenn sie mit doppelten Handlebars eingefügt wird.

Es gibt ähnliche Konstrukte in anderen Template-Systemen, die mit dem gleichen Grad an Vorsicht angegangen werden müssen.

## Weiterführende Literatur

Für weitere Informationen zu diesem Thema siehe die folgenden Artikel:

- [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://owasp.org/www-community/xss-filter-evasion-cheatsheet)
