---
title: Verwendung von durch CSS generiertem Inhalt
slug: Learn/CSS/Howto/Generated_content
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

Dieser Artikel beschreibt einige Möglichkeiten, wie Sie mit CSS Inhalt hinzufügen können, wenn ein Dokument angezeigt wird. Sie ändern Ihr Stylesheet, um Textinhalt oder Bilder hinzuzufügen.

Einer der wichtigen Vorteile von CSS ist, dass es Ihnen hilft, den Stil eines Dokuments von seinem Inhalt zu trennen. Es gibt jedoch Situationen, in denen es sinnvoll ist, bestimmten Inhalt als Teil des Stylesheets und nicht als Teil des Dokuments zu spezifizieren. Sie können Text- oder Bildinhalte innerhalb eines Stylesheets angeben, wenn dieser Inhalt eng mit der Struktur des Dokuments verknüpft ist.

> [!NOTE]
> In einem Stylesheet angegebener Inhalt wird nicht Teil des DOM.

Die Angabe von Inhalt in einem Stylesheet kann Komplikationen verursachen. Zum Beispiel könnten Sie verschiedene Sprachversionen Ihres Dokuments haben, die ein Stylesheet teilen. Wenn Sie in Ihrem Stylesheet Inhalt angeben, der eine Übersetzung erfordert, müssen Sie diese Teile Ihres Stylesheets in verschiedene Dateien aufteilen und dafür sorgen, dass sie mit den entsprechenden Sprachversionen Ihres Dokuments verknüpft werden.

Dieses Problem tritt nicht auf, wenn der von Ihnen angegebene Inhalt aus Symbolen oder Bildern besteht, die in allen Sprachen und Kulturen verwendet werden.

## Beispiele

### Textinhalt

CSS kann Textinhalt vor oder nach einem Element einfügen oder den Inhalt eines Listenelements (wie ein Aufzählungszeichen oder eine Nummer) vor einem {{HTMLElement('li')}} oder einem anderen Element mit {{ cssxref("display", "display: list-item;") }} ändern. Um dies anzugeben, erstellen Sie eine Regel und fügen Sie {{ cssxref("::before") }}, {{ cssxref("::after") }} oder {{ cssxref("::marker") }} dem Selektor hinzu. Geben Sie in der Deklaration die {{ cssxref("content") }}-Eigenschaft mit dem Textinhalt als Wert an.

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

Die Zeichensatzkodierung eines Stylesheets ist standardmäßig UTF-8, kann aber auch im Link, im Stylesheet selbst oder auf andere Weise spezifiziert werden. Für Details siehe [4.4 CSS-Stylesheet-Darstellung](https://www.w3.org/TR/CSS21/syndata.html#q23) in der CSS-Spezifikation.

Einzelne Zeichen können auch durch ein Escape-Mechanismus angegeben werden, der den Backslash als Escape-Zeichen verwendet. Zum Beispiel ist "\265B" das Schachsymbol für eine schwarze Dame ♛. Für Details siehe [Verwendung von Zeichen, die nicht in einer Zeichencodierung dargestellt werden](https://www.w3.org/TR/CSS21/syndata.html#q24) und [Zeichen und Groß-/Kleinschreibung](https://www.w3.org/TR/CSS21/syndata.html#q6) in der CSS-Spezifikation.

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
