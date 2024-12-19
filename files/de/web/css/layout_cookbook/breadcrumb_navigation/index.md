---
title: Brotkrumen-Navigation
slug: Web/CSS/Layout_cookbook/Breadcrumb_Navigation
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Brotkrumen-Navigation hilft dem Benutzer zu verstehen, wo er sich auf der Website befindet, indem sie eine {{Glossary("breadcrumb", "Brotkrumen")}}-Spur zurück zur Startseite bietet. Die Elemente werden typischerweise inline angezeigt, mit einem Trennzeichen zwischen jedem Element, das die Hierarchie zwischen den einzelnen Seiten anzeigt.

![Links displayed inline with separators](breadcrumb-navigation.png)

## Anforderungen

Stellen Sie die Hierarchie der Website dar, indem Sie inline Links mit einem Trennzeichen zwischen den Elementen anzeigen, das die Hierarchie zwischen den einzelnen Seiten anzeigt, wobei die aktuelle Seite zuletzt erscheint.

## Rezept

Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

```html live-sample___breadcrumb-example
<nav aria-label="Breadcrumb" class="breadcrumb">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Category</a></li>
    <li><a href="#">Sub Category</a></li>
    <li><a href="#">Type</a></li>
    <li><span aria-current="page">Product</span></li>
  </ul>
</nav>
```

```css live-sample___breadcrumb-example
body {
  font: 1.2em sans-serif;
}

.breadcrumb {
  padding: 0 0.5rem;
}

.breadcrumb ul {
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
> Fühlen Sie sich frei, die von Ihnen bevorzugte Lösung zu wählen.

## Getroffene Entscheidungen

Um Listenelemente inline anzuzeigen, verwenden wir das [Flexbox-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und demonstrieren so, wie eine Zeile CSS uns unsere Navigation geben kann. Die Trennzeichen werden mithilfe von [CSS-generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) hinzugefügt. Sie könnten diese in jedes Trennzeichen ändern, das Ihnen gefällt.

## Barrierefreiheitsbedenken

Wir haben die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) und [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current) verwendet, um Benutzern unterstützender Technologien zu helfen zu verstehen, was diese Navigation ist und wo sich die aktuelle Seite in der Struktur befindet. Siehe die verwandten Links für weitere Informationen.

Seien Sie sich bewusst, dass die Trennzeichen-Pfeile `→`, die über die {{cssxref("content")}} CSS-Eigenschaft im obigen Beispiel hinzugefügt werden, für unterstützende Technologien (AT) wie Bildschirmleser und Braille-Displays sichtbar sind. Für eine ruhigere Lösung verwenden Sie in Ihrem HTML ein dekoratives {{HTMLElement("img")}} mit einem leeren `alt`-Attribut. Ein ARIA [`role`](/de/docs/Web/Accessibility/ARIA/Roles) gesetzt auf [`none`](/de/docs/Web/Accessibility/ARIA/Roles/none_role) oder [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) wird ebenfalls verhindern, dass das Bild AT ausgesetzt wird.

Alternativ können Sie den [CSS-generierten Inhalt](/de/docs/Web/CSS/CSS_generated_content) zum Schweigen bringen, indem Sie einen leeren String als Alternativtext einschließen, der durch einen Schrägstrich (`/`) vorausgeht; zum Beispiel `content: url("arrow.png") / "";`.

Wenn Sie generierte Trennzeichen einfügen, die AT ausgesetzt werden, entscheiden Sie sich dafür, den generierten Inhalt mit dem {{cssxref("::after")}} Pseudoelement-Selektor anstelle von {{cssxref("::before")}} zu erstellen, sodass der Trennungsinhalt nach dem HTML-Inhalt und nicht davor angekündigt wird.

## Siehe auch

- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)
- [Bereitstellung einer Brotkrumenspur](https://www.w3.org/TR/WCAG20-TECHS/G65.html)
- [Verwendung des `aria-current` Attributs](https://tink.uk/using-the-aria-current-attribute/)
