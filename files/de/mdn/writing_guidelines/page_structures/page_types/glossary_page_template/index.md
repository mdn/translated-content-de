---
title: Vorlage für Glossarseiten
slug: MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template
l10n:
  sourceCommit: c44003c788a907ef19e0d766e98f29ffca5b6798
---

> [!NOTE]
> _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung_
>
> ---
>
> **Frontmatter der Seite:**
>
> Das Frontmatter am Anfang der Seite dient dazu, „Seitenmetadaten“ festzulegen.
> Die Werte sollten für den jeweiligen Begriff entsprechend angepasst werden.
>
> ```md
> ---
> title: Term being defined
> slug: Glossary/Term_being_defined
> page-type: glossary-definition OR glossary-disambiguation
> sidebar: glossarysidebar
> ---
> ```
>
> - **title**
>   - : Titel, der oben auf der Seite angezeigt wird.
>     Format: `Term being defined`.
> - **slug**
>   - : Der letzte Teil des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Er wird aus dem Titel im Snake-Case-Format gebildet: `Glossary/Term_being_defined`.
> - **page-type**
>   - : `glossary-definition` für eine Definitionsseite oder `glossary-disambiguation` für eine Begriffsklärungsseite.
> - **sidebar**
>   - : Der Wert ist immer `glossarysidebar`.
>     Weitere Informationen finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen_

**TermBeingDefined** ist _(fügen Sie eine kurze Definition des Begriffs ein)_.

Ergänzen Sie bei Bedarf weitere erläuternde Informationen, aber nicht zu viele – höchstens zwei weitere kurze Absätze. Ausführlichere Informationen, Codebeispiele, Tutorials usw. gehören in separate Artikel.

## Siehe auch

Fügen Sie eine Liste mit Links zu weiterführenden allgemeinen und technischen Informationen hinzu. Sie können beispielsweise auf Wikipedia-Artikel, andere Enzyklopädieeinträge, technische Tutorials und Spezifikationen verlinken. Hinweise zum Erstellen dieser Linkliste finden Sie im [Abschnitt „Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) des _Leitfadens zum Schreibstil_.

- Link 1
- Link 2
