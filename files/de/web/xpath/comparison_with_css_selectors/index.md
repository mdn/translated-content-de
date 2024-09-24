---
title: Vergleich von CSS-Selektoren und XPath
slug: Web/XPath/Comparison_with_CSS_selectors
l10n:
  sourceCommit: 0d8e5e932d471180075f041b73c03289abdf6b3c
---

{{XsltSidebar}}

Dieser Artikel versucht, die Unterschiede zwischen CSS-Selektoren und XPath zu dokumentieren, damit WebentwicklerInnen besser das richtige Werkzeug für den richtigen Zweck auswählen können.

| [XPath-Funktion](/de/docs/Web/XPath)                                                                                                                                      | [CSS-Äquivalent](/de/docs/Web/CSS/CSS_selectors)                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`ancestor`](/de/docs/Web/XPath/Axes#ancestor), [`parent`](/de/docs/Web/XPath/Axes#parent) oder [`preceding-sibling`](/de/docs/Web/XPath/Axes#preceding-sibling) Axis | {{CSSxRef(":has",":has()")}} Selektor                                                                                                                        |
| [`attribute`](/de/docs/Web/XPath/Axes#attribute) Axis                                                                                                                     | [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors)                                                                                               |
| [`child`](/de/docs/Web/XPath/Axes#child) Axis                                                                                                                             | [Kindkombinator](/de/docs/Web/CSS/Child_combinator)                                                                                                      |
| [`descendant`](/de/docs/Web/XPath/Axes#descendant) Axis                                                                                                                   | [Nachfahrenkombinator](/de/docs/Web/CSS/Descendant_combinator)                                                                                           |
| [`following-sibling`](/de/docs/Web/XPath/Axes#following-sibling) Axis                                                                                                     | [Weitere-Geschwister-Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator) oder [Nächster-Geschwister-Kombinator](/de/docs/Web/CSS/Next-sibling_combinator) |
| [`self`](/de/docs/Web/XPath/Axes#self) Axis                                                                                                                               | {{CSSxRef(":scope")}} oder {{CSSxRef(":host")}} Selektor                                                                                                     |
