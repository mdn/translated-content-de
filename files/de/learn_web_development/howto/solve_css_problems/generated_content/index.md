---
title: Verwenden von CSS-generiertem Inhalt
short-title: Verwenden von generiertem Inhalt
slug: Learn_web_development/Howto/Solve_CSS_problems/Generated_content
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

Dieser Artikel beschreibt einige Möglichkeiten, wie Sie CSS verwenden können, um Inhalt hinzuzufügen, wenn ein Dokument angezeigt wird. Sie ändern Ihr Stylesheet, um Textinhalt oder Bilder hinzuzufügen.

Ein wesentlicher Vorteil von CSS ist, dass es Ihnen hilft, den Stil eines Dokuments von seinem Inhalt zu trennen. Es gibt jedoch Situationen, in denen es sinnvoll ist, bestimmten Inhalt als Teil des Stylesheets zu spezifizieren, nicht als Teil des Dokuments. Sie können Text- oder Bildinhalt innerhalb eines Stylesheets angeben, wenn dieser Inhalt eng mit der Struktur des Dokuments verbunden ist.

> [!NOTE]
> Im Stylesheet spezifizierter Inhalt wird nicht Teil des DOM.

Das Spezifizieren von Inhalt in einem Stylesheet kann Komplikationen verursachen. Beispielsweise könnten Sie verschiedene Sprachversionen Ihres Dokuments haben, die ein Stylesheet teilen. Wenn Sie Inhalt in Ihrem Stylesheet spezifizieren, der eine Übersetzung erfordert, müssen Sie diese Teile Ihres Stylesheets in verschiedene Dateien auslagern und sie mit den entsprechenden Sprachversionen Ihres Dokuments verknüpfen.

Dieses Problem tritt nicht auf, wenn der von Ihnen spezifizierte Inhalt aus Symbolen oder Bildern besteht, die in allen Sprachen und Kulturen gelten.

## Beispiele

### Textinhalt

CSS kann Textinhalt vor oder nach einem Element einfügen oder den Inhalt eines Listenelementsymbols (wie ein Aufzählungszeichen oder eine Zahl) vor einem {{HTMLElement('li')}} oder einem anderen Element mit {{ cssxref("display", "display: list-item;") }} ändern. Um dies zu spezifizieren, erstellen Sie eine Regel und fügen {{ cssxref("::before") }}, {{ cssxref("::after") }} oder {{cssxref("::marker")}} zum Selektor hinzu. Geben Sie in der Deklaration die {{ cssxref("content") }}-Eigenschaft mit dem Textinhalt als Wert an.

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

Die Zeichensatzkodierung eines Stylesheets ist standardmäßig UTF-8, kann jedoch auch im Link, im Stylesheet selbst oder auf andere Weise spezifiziert werden. Für Details siehe [4.4 Darstellung von CSS-Stylesheets](https://www.w3.org/TR/CSS21/syndata.html#q23) in der CSS-Spezifikation.

Einzelne Zeichen können auch durch einen Escape-Mechanismus spezifiziert werden, der den Backslash als Escape-Zeichen verwendet. Zum Beispiel steht "\265B" für das Schachsymbol einer schwarzen Dame ♛. Für Details siehe [Verweis auf Zeichen, die in einer Zeichencodierung nicht dargestellt sind](https://www.w3.org/TR/CSS21/syndata.html#q24) und [Zeichen und Groß-/Kleinschreibung](https://www.w3.org/TR/CSS21/syndata.html#q6) in der CSS-Spezifikation.

### Bildinhalt

Um ein Bild vor oder nach einem Element hinzuzufügen, können Sie die URL einer Bilddatei im Wert der {{ cssxref("content") }}-Eigenschaft angeben.

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
