---
title: Verwendetes CSS-generiertes Inhalt
slug: Learn_web_development/Howto/Solve_CSS_problems/Generated_content
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Dieser Artikel beschreibt einige Möglichkeiten, wie Sie CSS verwenden können, um Inhalt hinzuzufügen, wenn ein Dokument angezeigt wird. Sie ändern Ihr Stylesheet, um Textinhalte oder Bilder hinzuzufügen.

Ein wichtiger Vorteil von CSS ist, dass es Ihnen hilft, den Stil eines Dokuments von dessen Inhalt zu trennen. Es gibt jedoch Situationen, in denen es sinnvoll ist, bestimmten Inhalt als Teil des Stylesheets zu spezifizieren, nicht als Teil des Dokuments. Sie können Text- oder Bildinhalte innerhalb eines Stylesheets angeben, wenn dieser Inhalt eng mit der Struktur des Dokuments verknüpft ist.

> [!NOTE]
> Inhalt, der in einem Stylesheet angegeben ist, wird nicht Teil des DOM.

Das Spezifizieren von Inhalt in einem Stylesheet kann Komplikationen verursachen. Zum Beispiel könnten Sie verschiedene Sprachversionen Ihres Dokuments haben, die ein Stylesheet gemeinsam nutzen. Wenn Sie Inhalt in Ihrem Stylesheet spezifizieren, der eine Übersetzung erfordert, müssen Sie diese Teile Ihres Stylesheets in verschiedenen Dateien platzieren und arrangieren, dass sie mit den entsprechenden Sprachversionen Ihres Dokuments verknüpft werden.

Dieses Problem tritt nicht auf, wenn der von Ihnen spezifizierte Inhalt aus Symbolen oder Bildern besteht, die in allen Sprachen und Kulturen gelten.

## Beispiele

### Textinhalt

CSS kann Textinhalt vor oder nach einem Element einfügen oder den Inhalt eines Listenpunktelements (wie ein Aufzählungspunkt oder eine Nummer) vor einem {{HTMLElement('li')}} oder einem anderen Element mit {{ cssxref("display", "display: list-item;") }} ändern. Um dies zu spezifizieren, erstellen Sie eine Regel und fügen {{ cssxref("::before") }}, {{ cssxref("::after") }} oder {{cssxref("::marker")}} zum Selektor hinzu. Geben Sie in der Deklaration die Eigenschaft {{ cssxref("content") }} mit dem Textinhalt als ihren Wert an.

#### HTML

```html
A text where I need to <span class="ref">something</span>
```

#### CSS

```css
.ref::before {
  font-weight: bold;
  color: navy;
  content: "Reference ";
}
```

#### Ausgabe

{{ EmbedLiveSample('Text_content', 600, 30) }}

Der Zeichensatz eines Stylesheets ist standardmäßig UTF-8, kann aber auch im Link, im Stylesheet selbst oder auf andere Weise spezifiziert werden. Einzelheiten finden Sie unter [4.4 CSS style sheet representation](https://www.w3.org/TR/CSS21/syndata.html#q23) in der CSS-Spezifikation.

Einzelne Zeichen können auch durch einen Escape-Mechanismus spezifiziert werden, der den Backslash als Escape-Zeichen verwendet. Beispielsweise ist "\265B" das Schachsymbol für eine schwarze Dame ♛. Einzelheiten finden Sie unter [Referring to characters not represented in a character encoding](https://www.w3.org/TR/CSS21/syndata.html#q24) und [Characters and case](https://www.w3.org/TR/CSS21/syndata.html#q6) in der CSS-Spezifikation.

### Bildinhalt

Um ein Bild vor oder nach einem Element hinzuzufügen, können Sie die URL einer Bilddatei im Wert der Eigenschaft {{ cssxref("content") }} angeben.

Diese Regel fügt nach jedem Link, der die Klasse `glossary` hat, ein Leerzeichen und ein Symbol hinzu:

#### HTML

```html
<a href="developer.mozilla.org" class="glossary">developer.mozilla.org</a>
```

#### CSS

```css
a.glossary::after {
  content: " " url("glossary-icon.gif");
}
```

{{ EmbedLiveSample('Image_content', 600, 40) }}
