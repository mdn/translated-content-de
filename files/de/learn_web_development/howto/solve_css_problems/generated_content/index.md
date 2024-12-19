---
title: Verwendung von CSS-generierten Inhalten
slug: Learn_web_development/Howto/Solve_CSS_problems/Generated_content
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Dieser Artikel beschreibt einige Möglichkeiten, wie Sie CSS verwenden können, um Inhalte hinzuzufügen, wenn ein Dokument angezeigt wird. Sie modifizieren Ihr Stylesheet, um Textinhalte oder Bilder hinzuzufügen.

Ein wichtiger Vorteil von CSS ist, dass es Ihnen hilft, den Stil eines Dokuments von seinem Inhalt zu trennen. Es gibt jedoch Situationen, in denen es sinnvoll ist, bestimmte Inhalte als Teil des Stylesheets anzugeben und nicht als Teil des Dokuments. Sie können Text- oder Bildinhalte innerhalb eines Stylesheets angeben, wenn diese Inhalte eng mit der Struktur des Dokuments verbunden sind.

> [!NOTE]
> Inhalte, die in einem Stylesheet angegeben sind, werden nicht Teil des DOM.

Inhalte in einem Stylesheet anzugeben, kann Komplikationen verursachen. Zum Beispiel könnten Sie verschiedene Sprachversionen Ihres Dokuments haben, die ein Stylesheet gemeinsam nutzen. Wenn Sie Inhalte in Ihrem Stylesheet angeben, die eine Übersetzung erfordern, müssen Sie diese Teile Ihres Stylesheets in verschiedenen Dateien speichern und dafür sorgen, dass sie mit den entsprechenden Sprachversionen Ihres Dokuments verlinkt werden.

Dieses Problem tritt nicht auf, wenn die von Ihnen angegebenen Inhalte aus Symbolen oder Bildern bestehen, die in allen Sprachen und Kulturen anwendbar sind.

## Beispiele

### Textinhalt

CSS kann Textinhalte vor oder nach einem Element einfügen oder den Inhalt eines Listenelementsmarkers (wie ein Aufzählungssymbol oder eine Nummer) vor einem {{HTMLElement('li')}} oder einem anderen Element mit {{ cssxref("display", "display: list-item;") }} ändern. Um dies zu spezifizieren, erstellen Sie eine Regel und fügen Sie {{ cssxref("::before") }}, {{ cssxref("::after") }} oder {{cssxref("::marker")}} dem Selektor hinzu. In der Deklaration spezifizieren Sie die {{ cssxref("content") }}-Eigenschaft mit dem Textinhalt als Wert.

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

Der Zeichensatz eines Stylesheets ist standardmäßig UTF-8, kann jedoch auch im Link, im Stylesheet selbst oder auf andere Weise festgelegt werden. Für Details siehe [4.4 CSS style sheet representation](https://www.w3.org/TR/CSS21/syndata.html#q23) in der CSS-Spezifikation.

Einzelne Zeichen können auch durch einen Escape-Mechanismus angegeben werden, der den Backslash als Escape-Zeichen verwendet. Zum Beispiel ist "\265B" das Schachsymbol für eine schwarze Dame ♛. Für Details siehe [Referring to characters not represented in a character encoding](https://www.w3.org/TR/CSS21/syndata.html#q24) und [Characters and case](https://www.w3.org/TR/CSS21/syndata.html#q6) in der CSS-Spezifikation.

### Bildinhalt

Um ein Bild vor oder nach einem Element hinzuzufügen, können Sie die URL einer Bilddatei im Wert der {{ cssxref("content") }}-Eigenschaft angeben.

Diese Regel fügt nach jedem Link mit der Klasse `glossary` ein Leerzeichen und ein Icon hinzu:

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
