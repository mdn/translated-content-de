---
title: Glossarseiten-Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template
l10n:
  sourceCommit: 77eea2b80f7352068ed59a2c2fb03de4ed85e194
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diese ganze erklärende Notiz vor der Veröffentlichung_
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Frontmatter am Anfang der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten für die jeweilige Methode entsprechend aktualisiert werden.
>
> ```md
> ---
> title: Zu definierender Begriff
> slug: Glossary/Zu_definierender_Begriff
> page-type: glossary-definition ODER glossary-disambiguation
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Formatieren Sie dies als: `Zu definierender Begriff`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`).
>     Dies wird als Snake Case des Titels formatiert: `Glossary/Zu_definierender_Begriff`.
> - **page-type**
>   - : `glossary-definition` für eine Definitionsseite oder `glossary-disambiguation` für eine Disambiguierungsseite.
>
> ---
>
> _Denken Sie daran, diese ganze erklärende Notiz vor der Veröffentlichung zu entfernen_

Der **TermBeingDefined** ist _(eine kurze Definition des Begriffs einfügen)_.

Fügen Sie bei Bedarf weitere unterstützende Informationen hinzu, aber nicht zu viele — nicht mehr als 2 weitere kleine Absätze. Detaillierte Informationen, Codebeispiele, Tutorials usw. sollten in separaten Artikeln untergebracht werden.

## Siehe auch

Fügen Sie eine Liste mit Links zu detaillierteren allgemeinen und technischen Informationen hinzu. Zum Beispiel können Sie Links zu Wikipedia-Artikeln, anderen Enzyklopädieeinträgen, technischen Tutorials und Spezifikationen hinzufügen. Für Richtlinien zum Hinzufügen dieser Liste von Links siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Writing style guide_.

- link1
- link2
