---
title: Glossarseitenschablone
slug: MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

> [!NOTE] > _Entfernen Sie diese gesamte erklärende Anmerkung vor der Veröffentlichung_
>
> ---
>
> **Seiteneigenschaften:**
>
> Die Seiteneigenschaften am Anfang der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend der jeweiligen Methode aktualisiert werden.
>
> ```md
> ---
> title: Zu definierender Begriff
> slug: Glossar/ZU_DEFINIERENDER_BEGRIFF
> page-type: glossary-definition ODER glossary-disambiguation
> sidebar: glossarseitenleiste
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Formatieren als: `Zu definierender Begriff`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`).
>     Dies wird im Snake-Case des Titels formatiert: `Glossar/ZU_DEFINIERENDER_BEGRIFF`.
> - **page-type**
>   - : `glossary-definition` für eine Definitionsseite oder `glossary-disambiguation` für eine Begriffsklärungsseite.
> - **sidebar**
>   - : Dies ist immer `glossarseitenleiste`.
>     Siehe [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> _Denken Sie daran, diese gesamte erklärende Anmerkung vor der Veröffentlichung zu entfernen_

Der **TermBeingDefined** ist _(fügen Sie eine prägnante Definition des Begriffs ein)_.

Fügen Sie bei Bedarf weitere unterstützende Informationen hinzu, aber nicht viel – nicht mehr als 2 weitere kleine Absätze. Weitere detaillierte Informationen, Code-Beispiele, Tutorials usw. sollten in separaten Artikeln erscheinen.

## Siehe auch

Fügen Sie eine Liste von Links hinzu, die auf ausführlichere allgemeine und technische Informationen verweisen. Zum Beispiel können Sie Links zu Wikipedia-Artikeln, anderen Eintragsenzyklopädien, technischen Tutorials und Spezifikationen hinzufügen. Für Richtlinien zum Hinzufügen dieser Linkliste, siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden für Schreibstil_.

- link1
- link2
