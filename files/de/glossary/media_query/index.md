---
title: Media-Abfrage
slug: Glossary/Media_query
l10n:
  sourceCommit: 9ff83eb7950a8d4e2d55d61fcf9b06cf82eae6bf
---

{{GlossarySidebar}}

Eine **Media-Abfrage** ist ein logischer Ausdruck, der eine Methode für CSS, JavaScript, HTML und andere Websprachen darstellt, um Aspekte des User-Agents oder Geräts, auf dem das Dokument angezeigt wird, zu überprüfen. Dies geschieht unabhängig vom Dokumentinhalt, um festzustellen, ob der zugehörige Codeblock oder das Feature angewendet werden soll.

Media-Abfragen werden verwendet, um CSS-Stile bedingt mit den CSS-At-Regeln {{cssxref("@media")}} und {{cssxref("@import")}} anzuwenden und in JavaScript, um Medienzustände zu testen und zu überwachen, wie mit der Methode {{DOMxRef("Window.matchMedia", "matchMedia()")}}, der Eigenschaft {{DOMxRef("MediaQueryList.matches", "matches")}} und dem Ereignis {{DOMxRef("MediaQueryList.change_event", "change")}}. Media-Abfragen werden als Werte der `media`-Attribute der [`<link>`](/de/docs/Web/HTML/Element/link#media), [`<source>`](/de/docs/Web/HTML/Element/source#media) und [`<style>`](/de/docs/Web/HTML/Element/style#media) [HTML](/de/docs/Web/HTML)-Elemente verwendet, um den Link, die Quelle oder den Stil bedingt anzuwenden, wenn die Media-Abfrage wahr ist. Wenn ein `media`-Attribut nicht angegeben wird, ist es standardmäßig auf `true` gesetzt. Media-Abfragen werden auch als Wert des `sizes`-Attributs des {{HTMLElement("img")}}-Elements verwendet.

Media-Abfragen bestehen aus optionalen Medientyp- und Modifikatoren, sowie null oder mehr Medienbedingungen und logischen Operatoren.

Media-Abfragen werden in Reaktion auf Änderungen in der Benutzerumgebung neu ausgewertet, beispielsweise wenn ein Benutzer ein Browserfenster vergrößert oder ein mobiles Gerät auf die Seite dreht und von Hoch- zu Querformat wechselt.

Mehrere durch Kommas getrennte Media-Abfragen bilden eine **Media-Abfrageliste**. Eine Media-Abfrageliste ist wahr, wenn eine ihrer Komponenten-Media-Abfragen wahr ist, und nur falsch, wenn alle ihrer Komponenten-Media-Abfragen falsch sind.

Eine Media-Abfrage kann optional durch einen einzelnen Media-Abfrage-Modifikator oder `not` oder `only` vorangestellt werden, wobei im Falle von `not` die Bedeutung der folgenden Media-Abfrage verändert wird.

## Siehe auch

- [Verwendung von Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [CSS Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) Modul
