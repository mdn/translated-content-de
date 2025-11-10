---
title: Brotkrümelnavigation
slug: Web/CSS/How_to/Layout_cookbook/Breadcrumb_navigation
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die Brotkrümelnavigation hilft dem Benutzer, seine Position auf der Website zu verstehen, indem sie eine {{Glossary("breadcrumb", "Brotkrumen")}} Spur zurück zur Startseite bietet. Die Elemente werden typischerweise inline angezeigt, mit einem Trennzeichen zwischen jedem Element, das die Hierarchie zwischen den einzelnen Seiten anzeigt.

![Links displayed inline with separators](breadcrumb-navigation.png)

## Anforderungen

Zeigen Sie die Hierarchie der Website an, indem Sie Links inline anzeigen, mit einem Trennzeichen zwischen den Elementen, das die Hierarchie zwischen den einzelnen Seiten anzeigt, wobei die aktuelle Seite zuletzt erscheint.

## Rezept

Klicken Sie auf "Play" in den folgenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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
> Das obige Beispiel verwendet einen komplexen Selektor, um vor jedem `li` mit Ausnahme des letzten Inhalts einzufügen. Dies könnte auch erreicht werden, indem ein komplexer Selektor verwendet wird, der auf alle `li` Elemente außer dem ersten abzielt:
>
> ```css
> .breadcrumb li:not(:first-child)::before {
>   content: "→";
> }
> ```
>
> Wählen Sie die Lösung, die Sie bevorzugen.

## Getroffene Entscheidungen

Um Listenelemente inline anzuzeigen, verwenden wir das [Flexbox-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), und zeigen damit, wie uns eine Zeile CSS unsere Navigation geben kann. Die Trennzeichen werden mit [CSS generiertem Inhalt](/de/docs/Web/CSS/Guides/Generated_content) hinzugefügt. Sie könnten diese in ein beliebiges Trennzeichen ändern, das Sie mögen.

## Barrierefreiheitsaspekte

Wir haben die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-current`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current) verwendet, um Benutzern von unterstützenden Technologien zu helfen, zu verstehen, was diese Navigation ist und wo sich die aktuelle Seite in der Struktur befindet. Sehen Sie die verwandten Links für weitere Informationen.

Beachten Sie, dass die über die {{cssxref("content")}} CSS-Eigenschaft im obigen Beispiel hinzugefügten Trennpfeile `→` unterstützenden Technologien (AT) einschließlich Bildschirmlesegeräten und Braille-Displays ausgesetzt sind. Für eine leisere Lösung verwenden Sie ein dekoratives {{HTMLElement("img")}} in Ihrem HTML mit einem leeren `alt`-Attribut. Eine ARIA [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) auf [`none`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role) oder [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)gesetz, wird das Bild auch davon abhalten, AT ausgesetzt zu werden.

Alternativ können Sie den [CSS generierten Inhalt](/de/docs/Web/CSS/Guides/Generated_content) zum Schweigen bringen, indem Sie einen leeren String als Alternativtext einschließen, der durch einen Schrägstrich (`/`) vorangestellt wird; zum Beispiel `content: url("arrow.png") / "";`.

Falls generierte Trenner, die AT ausgesetzt werden, enthalten sind, ziehen Sie es vor, den generierten Inhalt mit der {{cssxref("::after")}} Pseudoelement-Selektor anstelle von {{cssxref("::before")}} zu erstellen, damit der Trenninhalt nach dem HTML-Inhalt und nicht davor angekündigt wird.

## Siehe auch

- [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)
- [Bereitstellung einer Brotkrümelspur](https://www.w3.org/TR/WCAG20-TECHS/G65.html)
- [Verwendung des `aria-current` Attributs](https://tink.uk/using-the-aria-current-attribute/)
