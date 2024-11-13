---
title: Breadcrumb-Navigation
slug: Web/CSS/Layout_cookbook/Breadcrumb_Navigation
l10n:
  sourceCommit: 507825f6292eb73f0a96419d69870d9330b6776f
---

{{CSSRef}}

Breadcrumb-Navigation hilft dem Benutzer, ihre Position auf der Website zu verstehen, indem ein {{Glossary("breadcrumb", "Breadcrumb")}}-Pfad zurück zur Startseite bereitgestellt wird. Die Elemente werden typischerweise inline angezeigt, mit einem Trennzeichen zwischen jedem Element, das die Hierarchie zwischen den einzelnen Seiten angibt.

![Links werden inline mit Trennzeichen angezeigt](breadcrumb-navigation.png)

## Anforderungen

Zeigen Sie die Hierarchie der Website durch die Anzeige von Links inline an, mit einem Trennzeichen zwischen den Elementen, das die Hierarchie zwischen den einzelnen Seiten angibt, wobei die aktuelle Seite zuletzt erscheint.

## Rezept

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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
> Das obige Beispiel verwendet einen komplexen Selektor, um vor jedem `li` Inhalt einzufügen, außer vor dem letzten. Dies könnte auch durch einen komplexen Selektor erreicht werden, der auf alle `li`-Elemente außer dem ersten abzielt:
>
> ```css
> .breadcrumb li:not(:first-child)::before {
>   content: "→";
> }
> ```
>
> Sie können die Lösung wählen, die Sie bevorzugen.

## Getroffene Entscheidungen

Um Listenelemente inline anzuzeigen, verwenden wir das [Flexbox-Layout](/de/docs/Learn/CSS/CSS_layout/Flexbox) und zeigen somit, wie eine Zeile CSS uns unsere Navigation geben kann. Die Trennzeichen werden mit [CSS-generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) hinzugefügt. Sie können diese in jedes beliebige Trennzeichen ändern, das Sie möchten.

## Barrierefreiheitsbedenken

Wir haben die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) und [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current) verwendet, um Benutzern von unterstützender Technologie zu helfen, zu verstehen, was diese Navigation ist und wo sich die aktuelle Seite in der Struktur befindet. Weitere Informationen finden Sie in den verwandten Links.

Beachten Sie, dass die Trennpfeile `→`, die über die {{cssxref("content")}}-CSS-Eigenschaft im obigen Beispiel hinzugefügt werden, unterstützenden Technologien (AT) zur Verfügung gestellt werden, einschließlich Bildschirmlesern und Braille-Displays. Für eine ruhigere Lösung verwenden Sie ein dekoratives {{HTMLElement("img")}} in Ihrem HTML mit einem leeren `alt`-Attribut. Ein ARIA [`role`](/de/docs/Web/Accessibility/ARIA/Roles), das auf [`none`](/de/docs/Web/Accessibility/ARIA/Roles/none_role) oder [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) gesetzt ist, verhindert ebenfalls, dass das Bild AT zur Verfügung gestellt wird.

Alternativ können Sie den [CSS-generierten Inhalt](/de/docs/Web/CSS/CSS_generated_content) durch Hinzufügen eines leeren Strings als Alternativtext, gefolgt von einem Schrägstrich (`/`), stumm schalten; beispielsweise `content: url("arrow.png") / "";`.

Wenn Sie generierte Trennzeichen einfügen, die AT zur Verfügung gestellt werden, entscheiden Sie sich dafür, den generierten Inhalt mit dem {{cssxref("::after")}}-Pseudoelement-Selektor anstelle von {{cssxref("::before")}} zu erstellen, sodass der Trennzeicheninhalt nach dem HTML-Inhalt angekündigt wird, anstatt davor.

## Siehe auch

- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)
- [Bereitstellung eines Breadcrumb-Pfads](https://www.w3.org/TR/WCAG20-TECHS/G65.html)
- [Verwendung des `aria-current`-Attributs](https://tink.uk/using-the-aria-current-attribute/)
