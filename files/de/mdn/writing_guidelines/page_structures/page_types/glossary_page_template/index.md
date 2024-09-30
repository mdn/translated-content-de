---
title: Glossarseite Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template
l10n:
  sourceCommit: 77eea2b80f7352068ed59a2c2fb03de4ed85e194
---

{{MDNSidebar}}

> **Note:** _Diese gesamte erläuternde Notiz vor der Veröffentlichung entfernen_
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter am Anfang der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend der spezifischen Methode aktualisiert werden.
>
> ```md
> ---
> title: Begriff, der definiert wird
> slug: Glossary/Begriff_der_definiert_wird
> page-type: glossary-definition OR glossary-disambiguation
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Formatieren als: `Begriff, der definiert wird`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`).
>     Dies wird im Snake-Case des Titels formatiert: `Glossary/Begriff_der_definiert_wird`.
> - **page-type**
>   - : `glossary-definition` für eine Definitionsseite oder `glossary-disambiguation` für eine Disambiguierungsseite.
>
> ---
>
> _Denken Sie daran, diese gesamte erläuternde Notiz vor der Veröffentlichung zu entfernen_

Der **TermBeingDefined** ist _(fügen Sie eine prägnante Definition des Begriffs ein)_.

Fügen Sie bei Bedarf weitere unterstützende Informationen hinzu, aber nicht zu viel — nicht mehr als 2 weitere kleine Absätze. Weitere detaillierte Informationen, Codebeispiele, Tutorials usw. sollten in separaten Artikeln enthalten sein.

## Siehe auch

Fügen Sie eine Liste von Links hinzu, die auf detailliertere allgemeine und technische Informationen verweisen. Beispielsweise können Sie Links zu Wikipedia-Artikeln, anderen Enzyklopädieeinträgen, technischen Tutorials und Spezifikationen hinzufügen. Für Richtlinien zum Hinzufügen dieser Liste von Links, siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
