---
title: Breadcrumb navigation
slug: Web/CSS/Layout_cookbook/Breadcrumb_Navigation
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Breadcrumb-Navigation hilft dem Benutzer, seine Position auf der Website zu verstehen, indem sie einen [Breadcrumb](/de/docs/Glossary/breadcrumb)-Pfad zurück zur Startseite bietet. Die Elemente werden normalerweise inline angezeigt, mit einem Trenner zwischen jedem Element, was die Hierarchie zwischen den einzelnen Seiten anzeigt.

![Links, die inline mit Trennern angezeigt werden](breadcrumb-navigation.png)

## Anforderungen

Zeigen Sie die Hierarchie der Seite an, indem Sie Links inline anzeigen, mit einem Trenner zwischen den Elementen, der die Hierarchie zwischen den einzelnen Seiten anzeigt, wobei die aktuelle Seite zuletzt erscheint.

## Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/breadcrumb-navigation.html", '100%', 530)}}

> [!CALLOUT]
>
> [Laden Sie dieses Beispiel herunter](https://github.com/mdn/css-examples/blob/main/css-cookbook/breadcrumb-navigation--download.html)

> [!NOTE]
> Das obige Beispiel verwendet einen komplexen Selektor, um Content vor jedem `li` einzufügen, außer vor dem letzten. Dies könnte auch erreicht werden durch einen komplexen Selektor, der alle `li`-Elemente außer dem ersten anvisiert:
>
> ```css
> .breadcrumb li:not(:first-child)::before {
>   content: "→";
> }
> ```
>
> Sie können die Lösung wählen, die Sie bevorzugen.

## Getroffene Entscheidungen

Um Listenelemente inline anzuzeigen, verwenden wir das [Flexbox-Layout](/de/docs/Learn/CSS/CSS_layout/Flexbox) und demonstrieren so, wie eine Zeile CSS uns unsere Navigation gibt. Die Trenner werden mithilfe von [CSS generiertem Content](/de/docs/Web/CSS/CSS_generated_content) hinzugefügt. Sie können diese zu jedem beliebigen Trenner ändern, den Sie möchten.

## Barrierefreiheitsbedenken

Wir haben die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) und [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current) verwendet, um Benutzern von assistiven Technologien zu helfen zu verstehen, was diese Navigation ist und wo sich die aktuelle Seite in der Struktur befindet. Weitere Informationen finden Sie in den verwandten Links.

Beachten Sie, dass die Trennpfeile `→`, die im obigen Beispiel über die {{cssxref("content")}} CSS-Eigenschaft hinzugefügt wurden, assistiven Technologien (AT) offenbart werden, einschließlich Bildschirmlesern und Braille-Ausgaben. Für eine leisere Lösung verwenden Sie ein dekoratives {{HTMLElement("img")}} in Ihrem HTML mit einem leeren `alt`-Attribut. Ein ARIA [`role`](/de/docs/Web/Accessibility/ARIA/Roles), das auf [`none`](/de/docs/Web/Accessibility/ARIA/Roles/none_role) oder [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) gesetzt ist, wird auch verhindern, dass das Bild AT offenbart wird.

Alternativ können Sie den [CSS generierten Content](/de/docs/Web/CSS/CSS_generated_content) zum Schweigen bringen, indem Sie einen leeren String als Alternativtext einfügst, der von einem Schrägstrich (`/`) gefolgt wird; zum Beispiel: `content: url("arrow.png") / "";`.

Wenn generierte Trenner eingebunden werden, die AT offenbart werden, entscheiden Sie sich dafür, den generierten Content mit dem {{cssxref("::after")}}-Pseudoelement-Selektor anstelle von {{cssxref("::before")}} zu erstellen, sodass der Trenner-Content nach dem HTML-Content und nicht davor angekündigt wird.

## Siehe auch

- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)
- [Bereitstellung eines Breadcrumb-Pfads](https://www.w3.org/TR/WCAG20-TECHS/G65.html)
- [Verwendung des `aria-current` Attributs](https://tink.uk/using-the-aria-current-attribute/)
