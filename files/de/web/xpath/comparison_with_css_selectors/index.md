---
title: Vergleich von CSS-Selektoren und XPath
slug: Web/XPath/Comparison_with_CSS_selectors
l10n:
  sourceCommit: 0d8e5e932d471180075f041b73c03289abdf6b3c
---

{{XsltSidebar}}

Dieser Artikel versucht, den Unterschied zwischen CSS-Selektoren und XPath für Webentwickler zu dokumentieren, damit sie das richtige Werkzeug für die jeweilige Aufgabe besser wählen können.

| [XPath-Funktion](/de/docs/Web/XPath)                                                                                                                                      | [CSS-Äquivalent](/de/docs/Web/CSS/CSS_selectors)                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`ancestor`](/de/docs/Web/XPath/Axes#ancestor), [`parent`](/de/docs/Web/XPath/Axes#parent) oder [`preceding-sibling`](/de/docs/Web/XPath/Axes#preceding-sibling) Achse | {{CSSxRef(":has",":has()")}} Selektor                                                                                                                         |
| [`attribute`](/de/docs/Web/XPath/Axes#attribute) Achse                                                                                                                    | [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors)                                                                                                 |
| [`child`](/de/docs/Web/XPath/Axes#child) Achse                                                                                                                            | [Kind-Kombinator](/de/docs/Web/CSS/Child_combinator)                                                                                                       |
| [`descendant`](/de/docs/Web/XPath/Axes#descendant) Achse                                                                                                                  | [Nachfahr-Kombinator](/de/docs/Web/CSS/Descendant_combinator)                                                                                              |
| [`following-sibling`](/de/docs/Web/XPath/Axes#following-sibling) Achse                                                                                                    | [Folge-Geschwister-Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator) oder [Nächstes-Geschwister-Kombinator](/de/docs/Web/CSS/Next-sibling_combinator) |
| [`self`](/de/docs/Web/XPath/Axes#self) Achse                                                                                                                              | {{CSSxRef(":scope")}} oder {{CSSxRef(":host")}} Selektor                                                                                                      |
