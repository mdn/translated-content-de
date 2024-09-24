---
title: Externen Inhalt sicher in eine Seite einfügen
short-title: Externen Inhalt einfügen
slug: Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page
l10n:
  sourceCommit: 4e0fe2b61a65f3334debdb473ba9c937a878426b
---

{{AddonSidebar}}

Manchmal möchten oder müssen Sie Inhalte aus einer externen Quelle in Ihre Erweiterung einbinden. Es besteht jedoch das Risiko, dass die Quelle bösartige Skripte enthält, die entweder vom Entwickler der Quelle oder von einem böswilligen Dritten hinzugefügt wurden.

Nehmen Sie einen RSS-Reader als Beispiel. Sie wissen nicht, welche RSS-Feeds Ihre Erweiterung öffnen wird und haben keine Kontrolle über den Inhalt dieser RSS-Feeds. Daher ist es möglich, dass ein Benutzer einen Feed abonniert, bei dem beispielsweise der Titel eines Feed-Elements ein Skript enthält. Dies könnte so einfach sein, wie JavaScript-Code innerhalb von `<script></script>`-Tags einzuschließen. Wenn Sie den Titel extrahieren, annehmen, dass es sich um normalen Text handelt, und ihn zum DOM einer von Ihrer Erweiterung erstellten Seite hinzufügen, hat Ihr Benutzer nun ein unbekanntes Skript, das in seinem Browser läuft. Daher muss darauf geachtet werden, beliebigen Text nicht als HTML auszuwerten.

Sie müssen sich auch daran erinnern, dass Erweiterungen privilegierte Kontexte haben, zum Beispiel in Hintergrundskripten und Inhaltsskripten. Im schlimmsten Fall könnte ein eingebettetes Skript in einem dieser Kontexte ausgeführt werden, eine Situation, die als Privilegieneskalation bekannt ist. Diese Situation kann den Browser eines Benutzers für remote Angriffe öffnen, indem es der Website, die den Code eingefügt hat, ermöglicht wird, auf kritische Benutzerdaten wie Passwörter, Browser-Historie oder Surfverhalten zuzugreifen.

Dieser Artikel untersucht, wie Sie sicher mit Remote-Daten arbeiten und diese einem DOM hinzufügen können.

## Arbeiten mit willkürlichen Zeichenfolgen

Beim Arbeiten mit Zeichenfolgen gibt es einige empfohlene Optionen, um sie sicher in eine Seite einzufügen: die Standardmethoden zur DOM-Knoten-Erstellung oder jQuery.

### DOM-Knoten-Erstellungsmethoden

Ein leichter Ansatz, Zeichenfolgen in eine Seite einzufügen, besteht darin, die nativen DOM-Manipulationsmethoden zu verwenden: [`document.createElement`](/de/docs/Web/API/Document/createElement), [`Element.setAttribute`](/de/docs/Web/API/Element/setAttribute) und [`Node.textContent`](/de/docs/Web/API/Node/textContent). Der sichere Ansatz besteht darin, die Knoten separat zu erstellen und ihren Inhalt mit textContent zuzuweisen:

```js example-good
let data = JSON.parse(responseText);
let div = document.createElement("div");
div.className = data.className;
div.textContent = `Your favorite color is now ${data.color}`;
addonElement.appendChild(div);
```

Dieser Ansatz ist sicher, da die Verwendung von `.textContent` automatisch jeden Remote-HTML-Inhalt in `data.color` escapet.

Seien Sie jedoch vorsichtig, es gibt native Methoden, die nicht sicher sind. Betrachten Sie den folgenden Code:

```js example-bad
let data = JSON.parse(responseText);
addonElement.innerHTML = `<div class='${data.className}'>Your favorite color is now ${data.color}</div>`;
```

Hier könnten die Inhalte von `data.className` oder `data.color` HTML enthalten, das den Tag frühzeitig schließen, beliebigen weiteren HTML-Inhalt einfügen und dann einen weiteren Tag öffnen könnte.

### jQuery

Bei der Verwendung von jQuery escapen Funktionen wie `attr()` und `text()` den Inhalt, während er einem DOM hinzugefügt wird. So würde das oben genannte Beispiel "Lieblingsfarbe" in jQuery so aussehen:

```js example-good
let node = $("</div>");
node.addClass(data.className);
node.text(`Your favorite color is now ${data.color}`);
```

## Arbeiten mit HTML-Inhalt

Beim Arbeiten mit extern bezogenen Inhalten, von denen Sie wissen, dass es sich um HTML handelt, ist es entscheidend, das HTML zu bereinigen, bevor es einer Seite hinzugefügt wird. Die beste Praxis für die HTML-Bereinigung besteht darin, eine HTML-Bereinigungsbibliothek oder eine Template-Engine mit HTML-Bereinigungsfunktionen zu verwenden. In diesem Abschnitt betrachten wir einige geeignete Werkzeuge und wie man sie benutzt.

### HTML-Bereinigung

Eine HTML-Bereinigungsbibliothek entfernt alles, was zur Skriptausführung führen könnte, aus HTML, sodass Sie komplette Sets von HTML-Knoten sicher aus einer Remote-Quelle in Ihr DOM injizieren können. [DOMPurify](https://github.com/cure53/DOMPurify), das von verschiedenen Sicherheitsexperten überprüft wurde, ist eine geeignete Bibliothek für diese Aufgabe in Erweiterungen.

Für den Produktionseinsatz kommt [DOMPurify](https://github.com/cure53/DOMPurify) als minifizierte Version: purify.min.js. Sie können dieses Skript so verwenden, wie es am besten zu Ihrer Erweiterung passt. Beispielsweise könnten Sie es als Inhaltsskript hinzufügen:

```json
"content_scripts": [
  {
    "matches" : ["<all_urls>"],
    "js": ["purify.min.js", "myinjectionscript.js"]
  }
]
```

Dann können Sie in myinjectionscript.js das externe HTML lesen, es bereinigen und es dem DOM einer Seite hinzufügen:

```js
let elem = document.createElement("div");
let cleanHTML = DOMPurify.sanitize(externalHTML);
elem.innerHTML = cleanHTML;
```

Sie können jede Methode verwenden, um das bereinigte HTML zu Ihrem DOM hinzuzufügen, beispielsweise die `.html()`-Funktion von jQuery. Denken Sie jedoch daran, dass das `SAFE_FOR_JQUERY`-Flag in diesem Fall verwendet werden muss:

```js
let elem = $("<div/>");
let cleanHTML = DOMPurify.sanitize(externalHTML, { SAFE_FOR_JQUERY: true });
elem.html(cleanHTML);
```

### Template-Engines

Ein weiteres gängiges Muster ist das Erstellen einer lokalen HTML-Vorlage für eine Seite und das Verwenden entfernter Werte, um die Lücken zu füllen. Während dieser Ansatz im Allgemeinen akzeptabel ist, sollte darauf geachtet werden, keine Konstrukte zu verwenden, die die Einfügung von ausführbarem Code ermöglichen würden. Dies kann passieren, wenn die Template-Engine Konstrukte verwendet, die rohes HTML in das Dokument einfügen. Wenn die Variable zum Einfügen von rohem HTML aus einer entfernten Quelle stammt, unterliegt sie demselben Sicherheitsrisiko, das in der Einführung erwähnt wurde.

Wenn Sie beispielsweise [Mustache-Vorlagen](https://mustache.github.io/) verwenden, müssen Sie die doppelten geschweiften Klammern `\{{variable}}` verwenden, die HTML escapen. Der Einsatz der dreifachen geschweiften Klammern `\{\{{variable}}}` muss vermieden werden, da diese eine rohe HTML-Zeichenfolge injizieren und ausführbaren Code zu Ihrer Vorlage hinzufügen könnten. [Handlebars](https://handlebarsjs.com/) funktioniert auf ähnliche Weise, wobei Variablen in doppelten geschweiften Klammern `\{{variable}}` escapet werden. Wohingegen Variablen in dreifachen geschweiften Klammern roh gelassen und vermieden werden müssen. Wenn Sie auch einen Handlebars-Helfer mit `Handlebars.SafeString` erstellen, verwenden Sie `Handlebars.escapeExpression()`, um dynamische Parameter zu escapen, die an den Helfer übergeben werden. Dies ist erforderlich, da die resultierende Variable von `Handlebars.SafeString` als sicher angesehen wird und nicht escapet wird, wenn sie mit doppelten geschweiften Klammern eingefügt wird.

Es gibt ähnliche Konstrukte in anderen Templatesystemen, die mit derselben Sorgfalt angegangen werden müssen.

## Weiterführende Lektüre

Für weitere Informationen zu diesem Thema lesen Sie die folgenden Artikel:

- [XSS (Cross Site Scripting) Präventions-Cheatsheet](https://owasp.org/www-community/xss-filter-evasion-cheatsheet)
