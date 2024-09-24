---
title: CSS Custom Highlight-API
slug: Web/API/CSS_Custom_Highlight_API
l10n:
  sourceCommit: 408aa6446554821aa52f4208e9431fa6b85083cf
---

{{DefaultAPISidebar("CSS Custom Highlight API")}}

Die CSS Custom Highlight-API bietet einen Mechanismus, um beliebige Textranges auf einem Dokument zu stylen, indem JavaScript zur Erstellung der Ranges und CSS zur Gestaltung verwendet wird.

## Konzepte und Nutzung

Das Styling von Textranges auf einer Webseite kann sehr nützlich sein. Zum Beispiel heben Textbearbeitungs-Web-Apps Rechtschreib- oder Grammatikfehler hervor, und Code-Editoren heben Syntaxfehler hervor.

Die CSS Custom Highlight-API erweitert das Konzept anderer Highlight-Pseudoelemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}}, und {{cssxref('::target-text')}} indem sie eine Möglichkeit bietet, beliebige {{domxref('Range')}}-Objekte zu erstellen und zu stylen, anstatt auf browserdefinierte Ranges beschränkt zu sein.

Mit der CSS Custom Highlight-API können Sie programmatisch Textranges erstellen und hervorheben, ohne die DOM-Struktur auf der Seite zu beeinflussen.

Es gibt vier Schritte, um Textranges auf einer Webseite mithilfe der CSS Custom Highlight-API zu stylen:

1. Erstellen von {{domxref("Range")}}-Objekten.
2. Erstellen von {{domxref("Highlight")}}-Objekten für diese Ranges.
3. Registrieren der Highlights mit dem {{domxref("HighlightRegistry")}}.
4. Stylen der Highlights mit dem Pseudoelement {{cssxref("::highlight", "::highlight()")}}.

### Ranges erstellen

Der erste Schritt besteht darin, die Textranges zu definieren, die Sie stylen möchten, indem Sie {{domxref("Range")}}-Objekte in JavaScript erstellen. Zum Beispiel:

```js
const parentNode = document.getElementById("foo");

const range1 = new Range();
range1.setStart(parentNode, 10);
range1.setEnd(parentNode, 20);

const range2 = new Range();
range2.setStart(parentNode, 40);
range2.setEnd(parentNode, 60);
```

### Highlights erstellen

Der zweite Schritt ist das Erstellen von {{domxref("Highlight")}}-Objekten für Ihre Textranges.

Mehrere Ranges können einem Highlight zugeordnet werden. Wenn Sie mehrere Textstellen auf die gleiche Weise hervorheben möchten, müssen Sie ein einzelnes Highlight erstellen und es mit den entsprechenden Ranges initialisieren.

```js
const highlight = new Highlight(range1, range2);
```

Sie können jedoch auch so viele Highlights erstellen, wie Sie benötigen. Wenn Sie beispielsweise einen kollaborativen Texteditor erstellen, bei dem jeder Benutzer eine andere Textfarbe erhält, können Sie für jeden Benutzer ein Highlight erstellen, wie im folgenden Code-Snippet gezeigt:

```js
const user1Highlight = new Highlight(user1Range1, user1Range2);
const user2Highlight = new Highlight(user2Range1, user2Range2, user2Range3);
```

Jedes Highlight kann unterschiedlich gestylt werden.

### Highlights registrieren

Sobald Highlights erstellt wurden, registrieren Sie diese mit der {{domxref("HighlightRegistry")}}, die als {{domxref("CSS/highlights_static", "CSS.highlights")}} verfügbar ist.

Das Register ist ein {{jsxref("Map")}}-ähnliches Objekt, das verwendet wird, um Highlights mit Namen zu registrieren, wie unten gezeigt:

```js
CSS.highlights.set("user-1-highlight", user1Highlight);
CSS.highlights.set("user-2-highlight", user2Highlight);
```

In dem obigen Code-Snippet sind die Zeichenketten `user-1-highlight` und `user-2-highlight` benutzerdefinierte Identifikatoren, die in CSS verwendet werden können, um Styles auf die registrierten Highlights anzuwenden.

Sie können so viele Highlights registrieren, wie Sie im Register benötigen, sowie Highlights entfernen und das gesamte Register löschen.

```js
// Entfernen eines einzelnen Highlights aus dem Register.
CSS.highlights.delete("user-1-highlight");

// Löschen des Registers.
CSS.highlights.clear();
```

### Highlights stylen

Der letzte Schritt besteht darin, die registrierten Highlights zu stylen. Dies erfolgt durch die Verwendung des Pseudoelements {{cssxref("::highlight", "::highlight()")}}. Zum Beispiel, um das `user-1-highlight` hervorzuheben, das im vorherigen Schritt registriert wurde:

```css
::highlight(user-1-highlight) {
  background-color: yellow;
  color: black;
}
```

## Schnittstellen

- {{domxref("Highlight")}}
  - : Diese Schnittstelle wird verwendet, um eine Sammlung von Ranges darzustellen, die auf einem Dokument gestylt werden sollen.
- {{domxref("HighlightRegistry")}}
  - : Zugänglich über {{domxref("CSS/highlights_static", "CSS.highlights")}}, dieses {{jsxref("Map")}}-ähnliche Objekt wird verwendet, um Highlights mit benutzerdefinierten Identifikatoren zu registrieren.

## Beispiele

### Hervorheben von Suchergebnissen

Dieses Beispiel zeigt, wie die CSS Custom Highlight-API verwendet wird, um Suchergebnisse hervorzuheben.

#### HTML

Der folgende HTML-Code definiert ein Suchfeld und einen Artikel mit einigen Textabsätzen:

```html
<label>Suche im Text <input id="query" type="text" /></label>
<article>
  <p>
    Maxime debitis hic, delectus perspiciatis laborum molestiae labore,
    deleniti, quam consequatur iure veniam alias voluptas nisi quo. Dolorem
    eaque alias, quo vel quas repudiandae architecto deserunt quidem, sapiente
    laudantium nulla.
  </p>
  <p>
    Maiores odit molestias, necessitatibus doloremque dolor illum reprehenderit
    provident nostrum laboriosam iste, tempore perferendis! Ab porro neque esse
    voluptas libero necessitatibus fugiat, ex, minus atque deserunt veniam
    molestiae tempora? Vitae.
  </p>
  <p>
    Dolorum facilis voluptate eaque eius similique ducimus dignissimos assumenda
    quos architecto. Doloremque deleniti non exercitationem rerum quam alias
    harum, nisi obcaecati corporis temporibus vero sapiente voluptatum est
    quibusdam id ipsa.
  </p>
</article>
```

#### JavaScript

JavaScript wird verwendet, um auf das `input`-Ereignis im Suchfeld zu hören. Wenn das Ereignis ausgelöst wird, sucht der Code nach Übereinstimmungen für den eingegebenen Text im Artikeltext. Dann erstellt er Ranges für die Treffer und verwendet die CSS Custom Highlight-API, um ein `search-results` Highlight-Objekt zu erstellen und zu registrieren:

```js
const query = document.getElementById("query");
const article = document.querySelector("article");

// Alle Textknoten im Artikel finden. Wir werden
// in diesen Textknoten suchen.
const treeWalker = document.createTreeWalker(article, NodeFilter.SHOW_TEXT);
const allTextNodes = [];
let currentNode = treeWalker.nextNode();
while (currentNode) {
  allTextNodes.push(currentNode);
  currentNode = treeWalker.nextNode();
}

// Auf das input-Ereignis hören, um die Suche auszuführen.
query.addEventListener("input", () => {
  // Wenn die CSS Custom Highlight-API nicht unterstützt wird,
  // eine Nachricht anzeigen und abbrechen.
  if (!CSS.highlights) {
    article.textContent = "CSS Custom Highlight API nicht unterstützt.";
    return;
  }

  // Die HighlightRegistry löschen, um die
  // vorherigen Suchergebnisse zu entfernen.
  CSS.highlights.clear();

  // Die Suchanfrage bereinigen und abbrechen, 
  // wenn sie leer ist.
  const str = query.value.trim().toLowerCase();
  if (!str) {
    return;
  }

  // Über alle Textknoten iterieren und Übereinstimmungen finden.
  const ranges = allTextNodes
    .map((el) => {
      return { el, text: el.textContent.toLowerCase() };
    })
    .map(({ text, el }) => {
      const indices = [];
      let startPos = 0;
      while (startPos < text.length) {
        const index = text.indexOf(str, startPos);
        if (index === -1) break;
        indices.push(index);
        startPos = index + str.length;
      }

      // Ein Range-Objekt für jede Instanz von
      // str erstellen, die wir im Textknoten gefunden haben.
      return indices.map((index) => {
        const range = new Range();
        range.setStart(el, index);
        range.setEnd(el, index + str.length);
        return range;
      });
    });

  // Ein Highlight-Objekt für die Ranges erstellen.
  const searchResultsHighlight = new Highlight(...ranges.flat());

  // Das Highlight-Objekt im Register registrieren.
  CSS.highlights.set("search-results", searchResultsHighlight);
});
```

#### CSS

Schließlich wird das Pseudoelement `::highlight()` in CSS verwendet, um die Highlights zu stylen:

```css
::highlight(search-results) {
  background-color: #f06;
  color: white;
}
```

#### Ergebnis

Das Ergebnis wird unten gezeigt. Geben Sie Text in das Suchfeld ein, um Übereinstimmungen im Artikel hervorzuheben:

{{ EmbedLiveSample('Highlighting search results', 700, 300) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
- HTML-Attribut [`contentEditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)
- CSS {{cssxref("pseudo-elements")}}
