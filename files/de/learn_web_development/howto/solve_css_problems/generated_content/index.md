---
title: CSS generierte Inhalte verwenden
short-title: Generierte Inhalte verwenden
slug: Learn_web_development/Howto/Solve_CSS_problems/Generated_content
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Dieser Artikel beschreibt einige Möglichkeiten, wie Sie mit CSS Inhalte hinzufügen können, wenn ein Dokument angezeigt wird. Sie ändern Ihr Stylesheet, um Textinhalte oder Bilder hinzuzufügen.

Ein wichtiger Vorteil von CSS ist, dass es Ihnen hilft, das Design eines Dokuments von seinem Inhalt zu trennen. In bestimmten Situationen macht es jedoch Sinn, bestimmte Inhalte als Teil des Stylesheets und nicht als Teil des Dokuments anzugeben. Sie können Text- oder Bildinhalte innerhalb eines Stylesheets angeben, wenn dieser Inhalt eng mit der Struktur des Dokuments verknüpft ist.

> [!NOTE]
> Inhalte, die in einem Stylesheet angegeben sind, werden nicht Teil des DOM.

Die Angabe von Inhalten in einem Stylesheet kann zu Komplikationen führen. Zum Beispiel könnten Sie verschiedene Sprachversionen Ihres Dokuments haben, die ein Stylesheet teilen. Wenn Sie Inhalte in Ihrem Stylesheet angeben, die eine Übersetzung erfordern, müssen Sie diese Teile Ihres Stylesheets in verschiedene Dateien aufteilen und sicherstellen, dass sie mit den entsprechenden Sprachversionen Ihres Dokuments verknüpft sind.

Dieses Problem tritt nicht auf, wenn die von Ihnen angegebenen Inhalte aus Symbolen oder Bildern bestehen, die in allen Sprachen und Kulturen anwendbar sind.

## Beispiele

### Textinhalte

CSS kann Textinhalte vor oder nach einem Element einfügen oder den Inhalt eines Listenelementsymbols (wie z. B. ein Aufzählungspunkt oder eine Nummer) vor einem {{HTMLElement('li')}} oder einem anderen Element mit {{ cssxref("display", "display: list-item;") }} ändern. Um dies anzugeben, erstellen Sie eine Regel und fügen Sie {{ cssxref("::before") }}, {{ cssxref("::after") }} oder {{cssxref("::marker")}} dem Selektor hinzu. Geben Sie in der Deklaration die {{ cssxref("content") }}-Eigenschaft mit dem Textinhalt als Wert an.

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

Der Zeichensatz eines Stylesheets ist standardmäßig UTF-8, kann jedoch auch im Link, im Stylesheet selbst oder auf andere Weise angegeben werden. Für Details siehe die [`@charset`](/de/docs/Web/CSS/Reference/At-rules/@charset) Referenz.

Einzelne Zeichen können auch durch einen Escape-Mechanismus angegeben werden, der Backslash als Escape-Zeichen verwendet. Zum Beispiel ist "\265B" das Schachsymbol für eine schwarze Dame ♛.

### Bildinhalte

Um ein Bild vor oder nach einem Element hinzuzufügen, können Sie die URL einer Bilddatei im Wert der {{ cssxref("content") }}-Eigenschaft angeben.

Diese Regel fügt ein Leerzeichen und ein Symbol nach jedem Link hinzu, der die Klasse `glossary` hat:

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
