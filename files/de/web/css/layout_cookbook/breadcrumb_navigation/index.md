---
title: Breadcrumb-Navigation
slug: Web/CSS/Layout_cookbook/Breadcrumb_Navigation
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Breadcrumb-Navigation hilft dem Benutzer, seinen Standort auf der Website zu verstehen, indem eine {{Glossary("breadcrumb", "Breadcrumb")}}-Spur zurück zur Startseite angeboten wird. Die Elemente werden typischerweise inline angezeigt, mit einem Trennzeichen zwischen jedem Element, das die Hierarchie zwischen den einzelnen Seiten angibt.

![Links werden inline mit Trennzeichen angezeigt](breadcrumb-navigation.png)

## Anforderungen

Stellen Sie die Hierarchie der Seite dar, indem inline Links mit einem Trennzeichen zwischen den Elementen angezeigt werden, die die Hierarchie zwischen den einzelnen Seiten angeben, wobei die aktuelle Seite zuletzt erscheint.

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
> Das obige Beispiel verwendet einen komplexen Selektor, um Inhalte vor jedem `li` einzufügen, außer dem letzten. Dies könnte auch durch einen komplexen Selektor erreicht werden, der alle `li`-Elemente außer dem ersten anspricht:
>
> ```css
> .breadcrumb li:not(:first-child)::before {
>   content: "→";
> }
> ```
>
> Sie können die Lösung wählen, die Sie bevorzugen.

## Getroffene Entscheidungen

Um Listenelemente inline darzustellen, verwenden wir das [Flexbox-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), wodurch gezeigt wird, wie eine CSS-Zeile uns unsere Navigation geben kann. Die Trennzeichen werden mit [CSS generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) hinzugefügt. Sie könnten diese in jedes beliebige Trennzeichen ändern, das Ihnen gefällt.

## Barrierefreiheitsüberlegungen

Wir verwenden die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-current`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current), um Benutzern von assistiven Technologien zu helfen, zu verstehen, was diese Navigation ist und wo sich die aktuelle Seite in der Struktur befindet. Weitere Informationen finden Sie in den verwandten Links.

Beachten Sie, dass die Trennpfeile `→`, die über die CSS-Eigenschaft {{cssxref("content")}} im obigen Beispiel hinzugefügt wurden, für assistive Technologien (AT) sichtbar sind, einschließlich Bildschirmlesegeräten und Braille-Displays. Für eine ruhigere Lösung verwenden Sie ein dekoratives {{HTMLElement("img")}} in Ihrem HTML mit einem leeren `alt`-Attribut. Eine ARIA [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) auf [`none`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role) oder [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) gesetzt, verhindert auch, dass das Bild für AT sichtbar wird.

Alternativ können Sie den [CSS generierten Inhalt](/de/docs/Web/CSS/CSS_generated_content) zum Schweigen bringen, indem Sie einen leeren String als Alternativtext einfügen, gefolgt von einem Schrägstrich (`/`); zum Beispiel `content: url("arrow.png") / "";`.

Wenn generierte Trenner, die für AT sichtbar sein werden, einbezogen werden, entscheiden Sie sich dafür, den generierten Inhalt mit dem {{cssxref("::after")}} Pseudoelement-Selektor anstelle von {{cssxref("::before")}} zu erstellen, damit der Trennerinhalt nach dem HTML-Inhalt und nicht davor angekündigt wird.

## Siehe auch

- [CSS Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)
- [Anbieten einer Breadcrumb-Spur](https://www.w3.org/TR/WCAG20-TECHS/G65.html)
- [Verwendung des `aria-current`-Attributes](https://tink.uk/using-the-aria-current-attribute/)
