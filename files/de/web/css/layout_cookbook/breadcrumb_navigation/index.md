---
title: Breadcrumb-Navigation
slug: Web/CSS/Layout_cookbook/Breadcrumb_Navigation
l10n:
  sourceCommit: 0dd1289ceeb9c2f7abd20c50069ef6603447813f
---

{{CSSRef}}

Breadcrumb-Navigation hilft dem Benutzer, seine Position auf der Website zu verstehen, indem sie eine {{Glossary("breadcrumb", "breadcrumb")}}-Spur zurück zur Startseite bietet. Die Elemente werden typischerweise inline angezeigt, mit einem Trennzeichen zwischen jedem Element, das die Hierarchie zwischen den einzelnen Seiten anzeigt.

![Links werden inline mit Trennzeichen angezeigt](breadcrumb-navigation.png)

## Anforderungen

Stellen Sie die Hierarchie der Website dar, indem Sie Links inline anzeigen, mit einem Trennzeichen zwischen den Elementen, das die Hierarchie zwischen den einzelnen Seiten anzeigt, wobei die aktuelle Seite zuletzt erscheint.

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
> Das obige Beispiel verwendet einen komplexen Selektor, um vor jedem `li` Element außer dem letzten Inhalt einzufügen. Dies könnte auch durch einen komplexen Selektor erreicht werden, der alle `li`-Elemente mit Ausnahme des ersten anspricht:
>
> ```css
> .breadcrumb li:not(:first-child)::before {
>   content: "→";
> }
> ```
>
> Wählen Sie die Lösung, die Ihnen besser gefällt.

## Getroffene Entscheidungen

Um Listenelemente inline darzustellen, verwenden wir das [Flexbox-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und zeigen so, wie eine CSS-Zeile unsere Navigation darstellen kann. Die Trennzeichen werden mithilfe von [CSS generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) hinzugefügt. Sie können diese in ein beliebiges Trennzeichen ändern, das Ihnen gefällt.

## Barrierefreiheitsaspekte

Wir haben die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) und [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current) verwendet, um Benutzern von unterstützenden Technologien zu helfen, zu verstehen, was diese Navigation ist und wo sich die aktuelle Seite in der Struktur befindet. Weitere Informationen finden Sie unter den verwandten Links.

Beachten Sie, dass die über die {{cssxref("content")}} CSS-Eigenschaft hinzugefügten Trennpfeile `→` aus dem obigen Beispiel an unterstützende Technologien (AT) weitergegeben werden, einschließlich Bildschirmlesern und Brailledisplays. Für eine ruhigere Lösung verwenden Sie ein dekoratives {{HTMLElement("img")}} in Ihrem HTML mit einem leeren `alt`-Attribut. Eine ARIA [`role`](/de/docs/Web/Accessibility/ARIA/Roles), die auf [`none`](/de/docs/Web/Accessibility/ARIA/Roles/none_role) oder [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) gesetzt ist, verhindert ebenfalls, dass das Bild an AT übermittelt wird.

Alternativ können Sie den [CSS generierten Inhalt](/de/docs/Web/CSS/CSS_generated_content) zum Schweigen bringen, indem Sie als Alternativtext eine leere Zeichenfolge einschließen, gefolgt von einem Schrägstrich (`/`); zum Beispiel `content: url("arrow.png") / "";`.

Falls generierte Trennzeichen enthalten sind, die an AT übermittelt werden, wählen Sie die Erstellung des generierten Inhalts mit dem Pseudo-Element-Selektor {{cssxref("::after")}} anstelle von {{cssxref("::before")}}, sodass der Trenninhalt nach dem HTML-Inhalt und nicht davor angesagt wird.

## Siehe auch

- [CSS flexible Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)
- [Eine Breadcrumb-Spur bereitstellen](https://www.w3.org/TR/WCAG20-TECHS/G65.html)
- [Verwendung des `aria-current` Attributs](https://tink.uk/using-the-aria-current-attribute/)
