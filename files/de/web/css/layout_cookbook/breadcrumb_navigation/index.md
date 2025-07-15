---
title: Breadcrumb-Navigation
slug: Web/CSS/Layout_cookbook/Breadcrumb_Navigation
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die Breadcrumb-Navigation hilft dem Benutzer, seine Position auf der Website zu verstehen, indem sie eine {{Glossary("breadcrumb", "Breadcrumb")}}-Spur zurück zur Startseite bietet. Die Elemente werden typischerweise inline angezeigt, mit einem Trennzeichen zwischen jedem Element, das die Hierarchie zwischen den einzelnen Seiten anzeigt.

![Links werden inline mit Trennzeichen angezeigt](breadcrumb-navigation.png)

## Anforderungen

Zeigen Sie die Hierarchie der Seite an, indem Sie inline Links mit einem Trennzeichen zwischen den Elementen anzeigen, das die Hierarchie zwischen den einzelnen Seiten anzeigt. Die aktuelle Seite erscheint zuletzt.

## Rezept

Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

```html live-sample___breadcrumb-example
<nav aria-label="Breadcrumb" class="breadcrumb">
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#">Category</a></li>
    <li><a href="#">Sub Category</a></li>
    <li><a href="#">Type</a></li>
    <li><span aria-current="page">Product</span></li>
  </ol>
</nav>
```

```css live-sample___breadcrumb-example
body {
  font: 1.2em sans-serif;
}

.breadcrumb {
  padding: 0 0.5rem;
}

.breadcrumb ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: end;
}

.breadcrumb li:not(:last-child)::after {
  display: inline-block;
  margin: 0 0.25rem;
  content: "→";
}
```

{{EmbedLiveSample("breadcrumb-example", "", "100px")}}

> [!NOTE]
> Das obige Beispiel verwendet einen komplexen Selektor, um vor jedem `li` außer dem letzten Inhalt einzufügen. Dies könnte auch mit einem komplexen Selektor erreicht werden, der alle `li`-Elemente außer dem ersten anspricht:
>
> ```css
> .breadcrumb li:not(:first-child)::before {
>   content: "→";
> }
> ```
>
> Sie können die Lösung wählen, die Sie bevorzugen.

## Getroffene Entscheidungen

Um Listenelemente inline darzustellen, verwenden wir das [Flexbox-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), und zeigen damit, wie eine Zeile CSS uns unsere Navigation geben kann. Die Trennzeichen werden mittels [CSS-generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) hinzugefügt. Sie könnten diese in jedes Trennzeichen Ihrer Wahl ändern.

## Barrierefreiheit

Wir verwendeten die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-current`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current), um Benutzern von assistiven Technologien zu helfen, zu verstehen, was diese Navigation ist und wo sich die aktuelle Seite in der Struktur befindet. Weitere Informationen finden Sie in den verwandten Links.

Beachten Sie, dass die Trennpfeile `→`, die über die {{cssxref("content")}} CSS-Eigenschaft im obigen Beispiel hinzugefügt wurden, assistiven Technologien (AT) einschließlich Bildschirmlesegeräten und Braille-Displays ausgesetzt sind. Für eine ruhigere Lösung verwenden Sie ein dekoratives {{HTMLElement("img")}} in Ihrem HTML mit einem leeren `alt`-Attribut. Ein ARIA [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles), der auf [`none`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role) oder [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) gesetzt ist, wird auch verhindern, dass das Bild AT ausgesetzt wird.

Alternativ können Sie den [CSS-generierten Inhalt](/de/docs/Web/CSS/CSS_generated_content) zum Schweigen bringen, indem Sie einen leeren String als alternativen Text, vorangegangen von einem Schrägstrich (`/`), einbeziehen; beispielsweise `content: url("arrow.png") / "";`.

Wenn generierte Trennzeichen eingeschlossen werden, die AT ausgesetzt werden, wählen Sie, den generierten Inhalt mit dem {{cssxref("::after")}} Pseudoelement-Selektor anstelle des {{cssxref("::before")}} zu erstellen, sodass der Trenninhalt nach dem HTML-Inhalt statt davor angekündigt wird.

## Siehe auch

- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)
- [Bereitstellung einer Breadcrumb-Spur](https://www.w3.org/TR/WCAG20-TECHS/G65.html)
- [Verwendung des `aria-current`-Attributs](https://tink.uk/using-the-aria-current-attribute/)
