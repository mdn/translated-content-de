---
title: CSS generierten Inhalt verwenden
slug: Learn/CSS/Howto/Generated_content
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

Dieser Artikel beschreibt einige Möglichkeiten, wie Sie mit CSS Inhalte hinzufügen können, wenn ein Dokument angezeigt wird. Sie ändern Ihr Stylesheet, um Textinhalte oder Bilder hinzuzufügen.

Ein wichtiger Vorteil von CSS ist, dass es Ihnen hilft, den Stil eines Dokuments von dessen Inhalt zu trennen. Es gibt jedoch Situationen, in denen es sinnvoll ist, bestimmte Inhalte als Teil des Stylesheets und nicht als Teil des Dokuments zu spezifizieren. Sie können Text- oder Bildinhalte in einem Stylesheet spezifizieren, wenn diese Inhalte eng mit der Struktur des Dokuments verknüpft sind.

> [!NOTE]
> Inhalte, die in einem Stylesheet spezifiziert sind, werden nicht Teil des DOM.

Das Spezifizieren von Inhalten in einem Stylesheet kann zu Komplikationen führen. Zum Beispiel könnten Sie verschiedene Sprachversionen Ihres Dokuments haben, die ein Stylesheet teilen. Wenn Sie Inhalte in Ihrem Stylesheet spezifizieren, die eine Übersetzung erfordern, müssen Sie diese Teile Ihres Stylesheets in verschiedene Dateien aufteilen und dafür sorgen, dass sie mit den entsprechenden Sprachversionen Ihres Dokuments verknüpft werden.

Dieses Problem tritt nicht auf, wenn die von Ihnen spezifizierten Inhalte aus Symbolen oder Bildern bestehen, die in allen Sprachen und Kulturen anwendbar sind.

## Beispiele

### Textinhalt

CSS kann Textinhalt vor oder nach einem Element einfügen oder den Inhalt eines Listenelementmarkers (wie ein Aufzählungssymbol oder eine Zahl) vor einem {{HTMLElement('li')}} oder einem anderen Element mit {{ cssxref("display", "display: list-item;") }} ändern. Um dies zu spezifizieren, erstellen Sie eine Regel und fügen Sie {{ cssxref("::before") }}, {{ cssxref("::after") }} oder {{cssxref("::marker")}} zum Selektor hinzu. Geben Sie in der Deklaration die {{ cssxref("content") }}-Eigenschaft mit dem Textinhalt als Wert an.

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

Der Zeichensatz eines Stylesheets ist standardmäßig UTF-8, kann aber auch im Link, im Stylesheet selbst oder auf andere Weise spezifiziert werden. Weitere Informationen finden Sie in [4.4 Darstellung von CSS-Stilblättern](https://www.w3.org/TR/CSS21/syndata.html#q23) in der CSS-Spezifikation.

Einzelne Zeichen können auch durch einen Escape-Mechanismus spezifiziert werden, der den Backslash als Escape-Zeichen verwendet. Zum Beispiel ist "\265B" das Schachsymbol für eine schwarze Dame ♛. Weitere Details finden Sie unter [Verweisen auf Zeichen, die nicht in einer Zeichencodierung dargestellt sind](https://www.w3.org/TR/CSS21/syndata.html#q24) und [Zeichen und Groß-/Kleinschreibung](https://www.w3.org/TR/CSS21/syndata.html#q6) in der CSS-Spezifikation.

### Bildinhalt

Um ein Bild vor oder nach einem Element hinzuzufügen, können Sie die URL einer Bilddatei im Wert der {{ cssxref("content") }}-Eigenschaft spezifizieren.

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
