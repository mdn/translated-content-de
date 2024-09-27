---
title: Media query
slug: Glossary/Media_query
l10n:
  sourceCommit: 9ff83eb7950a8d4e2d55d61fcf9b06cf82eae6bf
---

{{GlossarySidebar}}

Eine **Media Query** ist ein logischer Ausdruck, der eine Methode für CSS, JavaScript, HTML und andere Web-Sprachen darstellt, um Aspekte des Benutzeragenten oder Gerätes, auf dem das Dokument angezeigt wird, unabhängig vom Dokumentinhalt zu überprüfen, um festzustellen, ob der zugehörige Codeblock oder das Merkmal angewendet werden soll.

Media Queries werden verwendet, um CSS-Stile bedingt mit den CSS {{cssxref("@media")}}- und {{cssxref("@import")}}-At-Regeln anzuwenden und in JavaScript, um Medienzustände zu testen und zu überwachen, wie mit der [`matchMedia()`](/de/docs/Web/API/Window/matchMedia)-Methode, der [`matches`](/de/docs/Web/API/MediaQueryList/matches)-Eigenschaft und dem [`change`](/de/docs/Web/API/MediaQueryList/change_event)-Ereignis. Media Queries werden als Werte der `media`-Attribute der HTML-Elemente [`<link>`](/de/docs/Web/HTML/Element/link#media), [`<source>`](/de/docs/Web/HTML/Element/source#media) und [`<style>`](/de/docs/Web/HTML/Element/style#media) verwendet, um den Link, die Quelle oder den Stil bedingt anzuwenden, wenn die Media Query wahr ist. Wenn ein `media`-Attribut weggelassen wird, ist es standardmäßig `true`. Media Queries werden auch als Wert des `sizes`-Attributs des {{HTMLElement("img")}}-Elements verwendet.

Media Queries bestehen aus optionalen Media Query-Modifikatoren und Medientypen sowie null oder mehr Medienbedingungen zusammen mit logischen Operatoren.

Media Queries werden als Reaktion auf Änderungen in der Benutzerumgebung neu ausgewertet, beispielsweise wenn ein Benutzer ein Browserfenster erweitert oder ein mobiles Gerät auf die Seite dreht, wodurch sich die Ausrichtung von Porträt auf Landschaft ändert.

Mehrere durch Kommas getrennte Media Queries bilden eine **Media Query-Liste**. Eine Media Query-Liste ist dann wahr, wenn eine ihrer Media Queries wahr ist und nur dann falsch, wenn alle ihre Media Queries falsch sind.

Eine Media Query kann optional durch einen einzelnen Media Query-Modifikator oder `not` oder `only` vorangestellt werden, wobei im Falle von `not` die Bedeutung der folgenden Media Query verändert wird.

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- CSS-Media Queries-Modul
