---
title: Glossar-Seitenschablone
slug: MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template
l10n:
  sourceCommit: 77eea2b80f7352068ed59a2c2fb03de4ed85e194
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diese ganze erklärende Anmerkung vor der Veröffentlichung_
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter oben auf der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend für die jeweilige Methode aktualisiert werden.
>
> ```md
> ---
> title: Begriff, der definiert wird
> slug: Glossary/Begriff_der_definiert_wird
> page-type: glossary-definition ODER glossary-disambiguation
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Formatieren Sie als: `Begriff, der definiert wird`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`).
>     Dies wird als Snake Case des Titels formatiert: `Glossary/Begriff_der_definiert_wird`.
> - **page-type**
>   - : `glossary-definition` für eine Definitionsseite oder `glossary-disambiguation` für eine Begriffsklärungsseite.
>
> ---
>
> _Denken Sie daran, diese ganze erklärende Anmerkung vor der Veröffentlichung zu entfernen_

Der **TermBeingDefined** ist _(eine prägnante Definition des Begriffs einschließen)_.

Fügen Sie bei Bedarf weitere unterstützende Informationen hinzu, aber nicht viel — nicht mehr als 2 weitere kleine Absätze. Weitere detaillierte Informationen, Codebeispiele, Anleitungen usw. sollten in separaten Artikeln behandelt werden.

## Siehe auch

Fügen Sie eine Liste von Links hinzu, die auf ausführlichere allgemeine und technische Informationen verweisen. Beispielsweise können Sie Links zu Wikipedia-Artikeln, anderen Lexikoneinträgen, technischen Anleitungen und Spezifikationen hinzufügen. Für Richtlinien zum Hinzufügen dieser Linkliste siehe den [Siehe auch Bereich](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
