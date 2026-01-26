---
title: Verwenden von CSS-generiertem Inhalt
short-title: Generierten Inhalt verwenden
slug: Learn_web_development/Howto/Solve_CSS_problems/Generated_content
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

Dieser Artikel beschreibt einige Möglichkeiten, wie Sie CSS verwenden können, um Inhalt hinzuzufügen, wenn ein Dokument angezeigt wird. Sie modifizieren Ihr Stylesheet, um Textinhalt oder Bilder hinzuzufügen.

Ein wichtiger Vorteil von CSS ist, dass es Ihnen hilft, den Stil eines Dokuments von seinem Inhalt zu trennen. Es gibt jedoch Situationen, in denen es sinnvoll ist, bestimmten Inhalt als Teil des Stylesheets und nicht des Dokuments festzulegen. Sie können Text- oder Bildinhalte innerhalb eines Stylesheets angeben, wenn dieser Inhalt eng mit der Struktur des Dokuments verknüpft ist.

> [!NOTE]
> Inhalt, der in einem Stylesheet angegeben wird, wird nicht Teil des DOM.

Die Angabe von Inhalt in einem Stylesheet kann zu Komplikationen führen. Beispielsweise könnten Sie verschiedene Sprachversionen Ihres Dokuments haben, die ein gemeinsames Stylesheet verwenden. Wenn Sie Inhalt in Ihrem Stylesheet angeben, der eine Übersetzung erfordert, müssen Sie diese Teile Ihres Stylesheets in verschiedene Dateien legen und dafür sorgen, dass sie mit den entsprechenden Sprachversionen Ihres Dokuments verlinkt werden.

Dieses Problem tritt nicht auf, wenn der von Ihnen angegebene Inhalt aus Symbolen oder Bildern besteht, die in allen Sprachen und Kulturen anwendbar sind.

## Beispiele

### Textinhalt

CSS kann Textinhalt vor oder nach einem Element einfügen oder den Inhalt eines Listenelementmarkers (wie ein Aufzählungszeichen oder eine Nummer) vor einem {{HTMLElement('li')}} oder einem anderen Element mit {{ cssxref("display", "display: list-item;") }} ändern. Um dies anzugeben, erstellen Sie eine Regel und fügen {{ cssxref("::before") }}, {{ cssxref("::after") }} oder {{cssxref("::marker")}} zum Selektor hinzu. Geben Sie in der Deklaration die {{ cssxref("content") }}-Eigenschaft mit dem Textinhalt als Wert an.

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

Der Zeichensatz eines Stylesheets ist standardmäßig UTF-8, kann aber auch im Link, im Stylesheet selbst oder auf andere Weise angegeben werden. Für nähere Informationen siehe die {{cssxref("@charset")}} Referenz.

Individuelle Zeichen können ebenfalls durch einen Escape-Mechanismus angegeben werden, der den Backslash als Escape-Zeichen verwendet. Zum Beispiel ist "\265B" das Schachsymbol für eine schwarze Dame ♛.

### Bildinhalt

Um ein Bild vor oder nach einem Element hinzuzufügen, können Sie die URL einer Bilddatei als Wert der {{ cssxref("content") }}-Eigenschaft angeben.

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
