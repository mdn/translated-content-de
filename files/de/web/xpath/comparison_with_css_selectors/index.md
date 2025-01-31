---
title: Vergleich von CSS-Selektoren und XPath
slug: Web/XPath/Comparison_with_CSS_selectors
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Dieser Artikel versucht die Unterschiede zwischen CSS-Selektoren und XPath zu dokumentieren, damit Webentwickler besser das richtige Werkzeug für die jeweilige Aufgabe wählen können.

| [XPath-Funktion](/de/docs/Web/XPath)                                                                                                                                   | [CSS-Äquivalent](/de/docs/Web/CSS/CSS_selectors)                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`ancestor`](/de/docs/Web/XPath/Axes#ancestor), [`parent`](/de/docs/Web/XPath/Axes#parent) oder [`preceding-sibling`](/de/docs/Web/XPath/Axes#preceding-sibling) Achse | {{CSSxRef(":has",":has()")}} Selektor                                                                                                                                   |
| [`attribute`](/de/docs/Web/XPath/Axes#attribute) Achse                                                                                                                 | [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors)                                                                                                              |
| [`child`](/de/docs/Web/XPath/Axes#child) Achse                                                                                                                         | [Kind-Kombinator](/de/docs/Web/CSS/Child_combinator)                                                                                                                    |
| [`descendant`](/de/docs/Web/XPath/Axes#descendant) Achse                                                                                                               | [Nachfahren-Kombinator](/de/docs/Web/CSS/Descendant_combinator)                                                                                                         |
| [`following-sibling`](/de/docs/Web/XPath/Axes#following-sibling) Achse                                                                                                 | [Nachfolgender-Geschwister-Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator) oder [Nächster-Geschwister-Kombinator](/de/docs/Web/CSS/Next-sibling_combinator) |
| [`self`](/de/docs/Web/XPath/Axes#self) Achse                                                                                                                           | {{CSSxRef(":scope")}} oder {{CSSxRef(":host")}} Selektor                                                                                                                |
