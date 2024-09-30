---
title: Breadcrumb navigation
slug: Web/CSS/Layout_cookbook/Breadcrumb_Navigation
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die Breadcrumb-Navigation hilft dem Benutzer, seine Position auf der Website zu verstehen, indem sie einen [Breadcrumb](/de/docs/Glossary/breadcrumb)-Pfad zurück zur Startseite bietet. Die Elemente werden typischerweise inline angezeigt, mit einem Trenner zwischen jedem Element, der die Hierarchie zwischen den einzelnen Seiten angibt.

![Links werden inline mit Trennern angezeigt](breadcrumb-navigation.png)

## Anforderungen

Stellen Sie die Hierarchie der Website dar, indem Sie Links inline anzeigen, wobei ein Trenner zwischen den Elementen die Hierarchie zwischen den einzelnen Seiten angibt. Die aktuelle Seite erscheint zuletzt.

## Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/breadcrumb-navigation.html", '100%', 530)}}

> [!CALLOUT]
>
> [Dieses Beispiel herunterladen](https://github.com/mdn/css-examples/blob/main/css-cookbook/breadcrumb-navigation--download.html)

> [!NOTE]
> Das obige Beispiel verwendet einen komplexen Selektor, um Inhalt vor jedem `li` einzufügen, außer dem letzten. Dies könnte auch mit einem komplexen Selektor erreicht werden, der auf alle `li`-Elemente außer dem ersten abzielt:
>
> ```css
> .breadcrumb li:not(:first-child)::before {
>   content: "→";
> }
> ```
>
> Fühlen Sie sich frei, die Lösung zu wählen, die Sie bevorzugen.

## Getroffene Entscheidungen

Um Listenelemente inline anzuzeigen, verwenden wir das [Flexbox-Layout](/de/docs/Learn/CSS/CSS_layout/Flexbox) und zeigen somit, wie eine Zeile CSS unsere Navigation ermöglichen kann. Die Trenner werden mittels [CSS generierter Inhalte](/de/docs/Web/CSS/CSS_generated_content) hinzugefügt. Sie könnten diese zu einem beliebigen Trenner ändern, der Ihnen gefällt.

## Barrierefreiheit

Wir haben die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) und [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current) verwendet, um Benutzern unterstützender Technologien zu helfen, zu verstehen, was diese Navigation ist und wo sich die aktuelle Seite in der Struktur befindet. Weitere Informationen finden Sie in den verwandten Links.

Beachten Sie, dass die Trennerpfeile `→`, die über die CSS-Eigenschaft {{cssxref("content")}} im obigen Beispiel hinzugefügt werden, für unterstützende Technologien (AT) wie Bildschirmlesegeräte und Brailleanzeigen zugänglich sind. Für eine ruhigere Lösung verwenden Sie ein dekoratives {{HTMLElement("img")}} in Ihrem HTML mit einem leeren `alt`-Attribut. Ein ARIA [`role`](/de/docs/Web/Accessibility/ARIA/Roles) gesetzt auf [`none`](/de/docs/Web/Accessibility/ARIA/Roles/none_role) oder [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) verhindert ebenfalls, dass das Bild für AT sichtbar ist.

Alternativ können Sie die [CSS generierten Inhalte](/de/docs/Web/CSS/CSS_generated_content) durch Einschließen eines leeren Strings als Alternativtext, vorangestellt mit einem Schrägstrich (`/`), zum Schweigen bringen; zum Beispiel `content: url("arrow.png") / "";`.

Wenn Sie generierte Trenner einfügen, die für AT sichtbar sind, wählen Sie stattdessen den {{cssxref("::after")}}-Pseudoelement-Selektor anstelle von {{cssxref("::before")}}, sodass der Trennerinhalt nach dem HTML-Inhalt und nicht davor angekündigt wird.

## Siehe auch

- [CSS flexible Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)
- [Bereitstellung eines Breadcrumb-Pfades](https://www.w3.org/TR/WCAG20-TECHS/G65.html)
- [Verwendung des `aria-current`-Attributs](https://tink.uk/using-the-aria-current-attribute/)
