---
title: Verwendung von durch CSS generiertem Inhalt
short-title: Verwendung generierter Inhalte
slug: Learn_web_development/Howto/Solve_CSS_problems/Generated_content
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

Dieser Artikel beschreibt einige Möglichkeiten, wie Sie CSS nutzen können, um Inhalt hinzuzufügen, wenn ein Dokument angezeigt wird. Sie ändern Ihr Stylesheet, um Textinhalte oder Bilder hinzuzufügen.

Ein wesentlicher Vorteil von CSS ist, dass es Ihnen hilft, den Stil eines Dokuments von seinem Inhalt zu trennen. Es gibt jedoch Situationen, in denen es sinnvoll ist, bestimmten Inhalt als Teil des Stylesheets anzugeben und nicht als Teil des Dokuments. Sie können Text- oder Bildinhalte innerhalb eines Stylesheets angeben, wenn dieser Inhalt eng mit der Struktur des Dokuments verbunden ist.

> [!NOTE]
> Inhalt, der in einem Stylesheet angegeben wird, wird nicht Teil des DOM.

Das Angeben von Inhalt in einem Stylesheet kann zu Komplikationen führen. Zum Beispiel könnten Sie verschiedene Sprachversionen Ihres Dokuments haben, die ein Stylesheet gemeinsam nutzen. Wenn Sie Inhalte in Ihrem Stylesheet angeben, die übersetzt werden müssen, müssen Sie diese Teile Ihres Stylesheets in verschiedenen Dateien ablegen und dafür sorgen, dass sie mit den entsprechenden Sprachversionen Ihres Dokuments verknüpft werden.

Dieses Problem tritt nicht auf, wenn der angegebene Inhalt aus Symbolen oder Bildern besteht, die in allen Sprachen und Kulturen verwendet werden können.

## Beispiele

### Textinhalt

CSS kann Textinhalte vor oder nach einem Element einfügen oder den Inhalt des Listenpositionsmarkers (wie ein Aufzählungszeichen oder eine Zahl) vor einem {{HTMLElement('li')}} oder einem anderen Element mit {{ cssxref("display", "display: list-item;") }} ändern. Um dies festzulegen, erstellen Sie eine Regel und fügen {{ cssxref("::before") }}, {{ cssxref("::after") }}, oder {{cssxref("::marker")}} zum Selektor hinzu. In der Deklaration geben Sie die {{ cssxref("content") }}-Eigenschaft mit dem Textinhalt als Wert an.

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

Der Zeichensatz eines Stylesheets ist standardmäßig UTF-8, kann aber auch im Link, im Stylesheet selbst oder auf andere Weise angegeben werden. Für Details siehe das [`@charset`](/de/docs/Web/CSS/@charset)-Referenzdokument.

Einzelne Zeichen können auch durch einen Escape-Mechanismus angegeben werden, der den Backslash als Escape-Zeichen verwendet. Zum Beispiel ist "\265B" das Schachsymbol für eine schwarze Dame ♛.

### Bildinhalt

Um ein Bild vor oder nach einem Element hinzuzufügen, können Sie die URL einer Bilddatei im Wert der {{ cssxref("content") }}-Eigenschaft angeben.

Diese Regel fügt ein Leerzeichen und ein Icon nach jedem Link hinzu, der die Klasse `glossary` hat:

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
