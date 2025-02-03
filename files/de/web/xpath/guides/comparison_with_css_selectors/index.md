---
title: Vergleich von CSS-Selektoren und XPath
slug: Web/XPath/Guides/Comparison_with_CSS_selectors
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Dieser Artikel soll den Unterschied zwischen CSS-Selektoren und XPath für Webentwickler dokumentieren, damit sie besser das richtige Werkzeug für die jeweilige Aufgabe wählen können.

| [XPath-Funktion](/de/docs/Web/XPath)                                                                                                                                                                 | [CSS-Äquivalent](/de/docs/Web/CSS/CSS_selectors)                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`ancestor`](/de/docs/Web/XPath/Reference/Axes#ancestor), [`parent`](/de/docs/Web/XPath/Reference/Axes#parent) oder [`preceding-sibling`](/de/docs/Web/XPath/Reference/Axes#preceding-sibling) Achse | {{CSSxRef(":has",":has()")}} Selektor                                                                                                                                   |
| [`attribute`](/de/docs/Web/XPath/Reference/Axes#attribute) Achse                                                                                                                                     | [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors)                                                                                                              |
| [`child`](/de/docs/Web/XPath/Reference/Axes#child) Achse                                                                                                                                             | [Kindkombinator](/de/docs/Web/CSS/Child_combinator)                                                                                                                     |
| [`descendant`](/de/docs/Web/XPath/Reference/Axes#descendant) Achse                                                                                                                                   | [Nachkommkombinator](/de/docs/Web/CSS/Descendant_combinator)                                                                                                            |
| [`following-sibling`](/de/docs/Web/XPath/Reference/Axes#following-sibling) Achse                                                                                                                     | [Nachfolgender-Geschwister-Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator) oder [Nächster-Geschwister-Kombinator](/de/docs/Web/CSS/Next-sibling_combinator) |
| [`self`](/de/docs/Web/XPath/Reference/Axes#self) Achse                                                                                                                                               | {{CSSxRef(":scope")}} oder {{CSSxRef(":host")}} Selektor                                                                                                                |
