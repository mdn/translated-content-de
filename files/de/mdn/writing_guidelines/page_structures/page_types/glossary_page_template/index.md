---
title: Glossarseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

> **Hinweis:** _Entfernen Sie diesen gesamten erklärenden Hinweis vor der Veröffentlichung_
>
> ---
>
> **Seiten-Frontmatter:**
>
> Die Frontmatter am Anfang der Seite wird verwendet, um „Seitenmetadaten“ zu definieren.
> Die Werte sollten entsprechend der jeweiligen Methode aktualisiert werden.
>
> ```md
> ---
> title: Zu definierender Begriff
> slug: Glossary/Zu_definierender_Begriff
> page-type: glossary-definition OR glossary-disambiguation
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Formatieren Sie es als: `Zu definierender Begriff`.
> - **slug**
>   - : Das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`).
>     Dies wird als Snake Case des Titels formatiert: `Glossary/Zu_definierender_Begriff`.
> - **page-type**
>   - : `glossary-definition` für eine Definitionsseite oder `glossary-disambiguation` für eine Disambiguierungsseite.
>
> ---
>
> _Vergessen Sie nicht, diesen gesamten erklärenden Hinweis vor der Veröffentlichung zu entfernen_

Der **ZuDefinierendeBegriff** ist _(eine prägnante Definition des Begriffs einfügen)_.

Fügen Sie bei Bedarf weitere unterstützende Informationen ein, aber nicht viel — nicht mehr als 2 weitere kleine Absätze. Alle weiteren detaillierten Informationen, Codebeispiele, Anleitungen usw. sollten in separaten Artikeln behandelt werden.

## Siehe auch

Fügen Sie eine Liste von Links zu detaillierteren allgemeinen und technischen Informationen ein. Zum Beispiel können Sie Links zu Wikipedia-Artikeln, anderen Enzyklopädieeinträgen, technischen Tutorials und Spezifikationen hinzufügen. Für Richtlinien zum Hinzufügen dieser Liste von Links siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden für Schreibstil_.

- Link1
- Link2
