---
title: Brotkrümelnavigation
slug: Web/CSS/Layout_cookbook/Breadcrumb_Navigation
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die Brotkrümelnavigation hilft dem Benutzer, seine Position auf der Website zu verstehen, indem sie einen {{glossary("breadcrumb")}}-Pfad zurück zur Startseite bietet. Die Elemente werden typischerweise inline angezeigt, mit einem Trennzeichen zwischen jedem Element, das die Hierarchie zwischen den einzelnen Seiten angibt.

![Links, die inline mit Trennzeichen angezeigt werden](breadcrumb-navigation.png)

## Anforderungen

Stellen Sie die Hierarchie der Website dar, indem Sie Links inline anzeigen, mit einem Trennzeichen zwischen den Elementen, das die Hierarchie zwischen den einzelnen Seiten angibt, wobei die aktuelle Seite zuletzt erscheint.

## Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/breadcrumb-navigation.html", '100%', 530)}}

> [!CALLOUT]
>
> [Laden Sie dieses Beispiel herunter](https://github.com/mdn/css-examples/blob/main/css-cookbook/breadcrumb-navigation--download.html)

> [!NOTE]
> Das obige Beispiel verwendet einen komplexen Selektor, um Inhalt vor jedem `li` außer dem letzten einzufügen. Dies könnte auch durch einen komplexen Selektor erreicht werden, der alle `li`-Elemente außer dem ersten anvisiert:
>
> ```css
> .breadcrumb li:not(:first-child)::before {
>   content: "→";
> }
> ```
>
> Wählen Sie die Lösung, die Ihnen besser gefällt.

## Getroffene Entscheidungen

Um Listenelemente inline darzustellen, verwenden wir das [Flexbox-Layout](/de/docs/Learn/CSS/CSS_layout/Flexbox). Dadurch wird demonstriert, wie eine Zeile CSS uns unsere Navigation geben kann. Die Trennzeichen werden mit [CSS-generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) hinzugefügt. Sie können diese in jedes gewünschte Trennzeichen ändern.

## Barrierefreiheitshinweise

Wir haben die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) und [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current) verwendet, um Benutzern von unterstützender Technologie zu helfen, zu verstehen, was diese Navigation ist und wo die aktuelle Seite in der Struktur ist. Sehen Sie sich die verwandten Links für weitere Informationen an.

Beachten Sie, dass die über die {{cssxref("content")}} CSS-Eigenschaft hinzugefügten Trennzeichenpfeile `→` im obigen Beispiel für unterstützende Technologien (AT), einschließlich Bildschirmlesegeräten und Braille-Displays, sichtbar sind. Für eine leisere Lösung verwenden Sie ein dekoratives {{HTMLElement("img")}} in Ihrem HTML mit einem leeren `alt`-Attribut. Ein ARIA [`role`](/de/docs/Web/Accessibility/ARIA/Roles), das auf [`none`](/de/docs/Web/Accessibility/ARIA/Roles/none_role) oder [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) gesetzt ist, verhindert ebenfalls, dass das Bild für AT sichtbar ist.

Alternativ können Sie den [CSS-generierten Inhalt](/de/docs/Web/CSS/CSS_generated_content) stummschalten, indem Sie einen leeren String als Alternativtext einschließen, gefolgt von einem Schrägstrich (`/`); z. B. `content: url("arrow.png") / "";`.

Wenn Sie generierte Trennzeichen einfügen, die für AT sichtbar sein werden, ziehen Sie in Betracht, den generierten Inhalt unter Verwendung des Pseudo-Elementselektors {{cssxref("::after")}} anstelle von {{cssxref("::before")}} zu erstellen, damit der Trennzeicheninhalt nach dem HTML-Inhalt und nicht davor angekündigt wird.

## Siehe auch

- [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)
- [Eine Brotkrümelnavigation bereitstellen](https://www.w3.org/TR/WCAG20-TECHS/G65.html)
- [Verwendung des `aria-current`-Attributs](https://tink.uk/using-the-aria-current-attribute/)
