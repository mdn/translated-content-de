---
title: Glossarseite Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template
l10n:
  sourceCommit: da12dd76d4c9863ce4f9c436f5e2373fe541e1c7
---

> [!NOTE] > _Entfernen Sie diese gesamte Erläuterung, bevor Sie die Seite veröffentlichen._
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Frontmatter am Anfang der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten für die entsprechende Methode passend aktualisiert werden.
>
> ```md
> ---
> title: Zu definierender Begriff
> slug: Glossary/Zu_definierender_Begriff
> page-type: glossary-definition OR glossary-disambiguation
> sidebar: glossarysidebar
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Format: `Zu definierender Begriff`.
> - **slug**
>   - : Das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`).
>     Dies wird im Snake Case des Titels formatiert: `Glossary/Zu_definierender_Begriff`.
> - **page-type**
>   - : `glossary-definition` für eine Definitionsseite oder `glossary-disambiguation` für eine Begriffserklärungsseite.
> - **sidebar**
>   - : Dies ist immer `glossarysidebar`.
>     Siehe [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> _Denken Sie daran, diese gesamte Erläuterung vor der Veröffentlichung zu entfernen._

Der **BegriffDerDefiniertWird** ist _(eine kurze Definition des Begriffs einfügen)_.

Fügen Sie bei Bedarf weitere unterstützende Informationen hinzu, aber nicht viel — nicht mehr als 2 weitere kleine Absätze. Jegliche detaillierteren Informationen, Code-Beispiele, Tutorials, usw. sollten in separaten Artikeln enthalten sein.

## Siehe auch

Fügen Sie eine Liste von Links zu detaillierteren allgemeinen und technischen Informationen hinzu. Zum Beispiel können Sie Links zu Wikipedia-Artikeln, anderen Enzyklopädieeinträgen, technischen Tutorials und Spezifikationen hinzufügen. Für Richtlinien zum Hinzufügen dieser Linkliste siehe den [Abschnitt Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden für Schreibstil_.

- link1
- link2
