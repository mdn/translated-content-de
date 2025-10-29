---
title: Breadcrumb-Navigation
slug: Web/CSS/How_to/Layout_cookbook/Breadcrumb_navigation
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

Breadcrumb-Navigation hilft dem Benutzer, seine Position auf der Website zu verstehen, indem sie einen {{Glossary("breadcrumb", "Breadcrumb")}}-Pfad zurück zur Startseite bereitstellt. Die Elemente werden typischerweise inline angezeigt, mit einem Trennzeichen zwischen jedem Element, das die Hierarchie zwischen den einzelnen Seiten anzeigt.

![Links, die inline mit Trennzeichen angezeigt werden](breadcrumb-navigation.png)

## Anforderungen

Stellen Sie die Hierarchie der Seite dar, indem Sie inline Links anzeigen, mit einem Trennzeichen zwischen den Elementen, das die Hierarchie zwischen den einzelnen Seiten anzeigt, wobei die aktuelle Seite zuletzt erscheint.

## Rezept

Klicken Sie auf "Play" in den folgenden Code-Blöcken, um das Beispiel im MDN Playground zu bearbeiten:

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
> Das obige Beispiel verwendet einen komplexen Selektor, um Inhalt vor jedem `li` außer dem letzten hinzuzufügen. Dies könnte auch durch einen komplexen Selektor erreicht werden, der alle `li`-Elemente außer dem ersten anspricht:
>
> ```css
> .breadcrumb li:not(:first-child)::before {
>   content: "→";
> }
> ```
>
> Sie können die Lösung wählen, die Sie bevorzugen.

## Getroffene Entscheidungen

Um Listenelemente inline anzuzeigen, verwenden wir das [Flexbox-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), was zeigt, wie eine Zeile CSS uns unsere Navigation geben kann. Die Trennzeichen werden mithilfe von [in CSS generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) hinzugefügt. Diese können Sie in jedes beliebige Trennzeichen ändern, das Sie möchten.

## Barrierefreiheitsbedenken

Wir haben die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-current`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current) verwendet, um Benutzern unterstützender Technologien zu helfen zu verstehen, was diese Navigation ist und wo sich die aktuelle Seite in der Struktur befindet. Siehe die verwandten Links für weitere Informationen.

Seien Sie sich bewusst, dass die über die {{cssxref("content")}} CSS-Eigenschaft im obigen Beispiel hinzugefügten Trennpfeile `→` unterstützenden Technologien (AT) ausgesetzt sind, einschließlich Bildschirmlesern und Braille-Displays. Für eine ruhigere Lösung verwenden Sie ein dekoratives {{HTMLElement("img")}} in Ihrem HTML mit einem leeren `alt`-Attribut. Ein ARIA [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles), das auf [`none`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role) oder [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) gesetzt ist, verhindert ebenfalls, dass das Bild an AT weitergegeben wird.

Alternativ können Sie den [in CSS generierten Inhalt](/de/docs/Web/CSS/CSS_generated_content) durch Einfügen eines leeren Strings als Alternativtext, dem ein Schrägstrich (`/`) vorausgeht, zum Schweigen bringen; zum Beispiel `content: url("arrow.png") / "";`.

Wenn Sie generierte Trennzeichen einfügen, die AT ausgesetzt werden, wählen Sie die Erstellung des generierten Inhalts mithilfe des {{cssxref("::after")}} Pseudo-Element-Selektors anstelle von {{cssxref("::before")}}, sodass der Trenninhalt nach dem HTML-Inhalt und nicht davor angekündigt wird.

## Siehe auch

- [CSS flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)
- [Bereitstellung eines Breadcrumb-Pfads](https://www.w3.org/TR/WCAG20-TECHS/G65.html)
- [Verwendung des `aria-current` Attributs](https://tink.uk/using-the-aria-current-attribute/)
