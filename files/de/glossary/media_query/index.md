---
title: Media Query
slug: Glossary/Media_query
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Media Query** ist ein logischer Ausdruck, der eine Methode für CSS, JavaScript, HTML und andere Websprachen darstellt, um Aspekte des Benutzeragenten oder Geräts, auf dem das Dokument angezeigt wird, unabhängig vom Dokumentinhalt zu überprüfen. Dies dient dazu zu bestimmen, ob der zugehörige Codeblock oder die Funktion angewendet werden soll.

Media Queries werden verwendet, um mit den CSS-Regeln {{cssxref("@media")}} und {{cssxref("@import")}} bedingt CSS-Stile anzuwenden und in JavaScript, um Medienzustände zu testen und zu überwachen, wie mit der [`matchMedia()`](/de/docs/Web/API/Window/matchMedia)-Methode, der [`matches`](/de/docs/Web/API/MediaQueryList/matches)-Eigenschaft und dem [`change`](/de/docs/Web/API/MediaQueryList/change_event)-Ereignis. Media Queries werden als Werte der `media`-Attribute der [HTML](/de/docs/Web/HTML)-Elemente [`<link>`](/de/docs/Web/HTML/Reference/Elements/link#media), [`<source>`](/de/docs/Web/HTML/Reference/Elements/source#media) und [`<style>`](/de/docs/Web/HTML/Reference/Elements/style#media) verwendet, indem der Link, die Quelle oder der Stil bedingt angewendet wird, wenn die Media Query wahr ist. Wenn ein `media`-Attribut weggelassen wird, ist es standardmäßig `true`. Media Queries werden auch als Wert des `sizes`-Attributs des {{HTMLElement("img")}}-Elements verwendet.

Media Queries bestehen aus optionalen Media Query Modifikatoren und Medientypen sowie null oder mehr Medienbedingungen zusammen mit logischen Operatoren.

Media Queries werden bei Änderungen in der Benutzerumgebung neu ausgewertet, z. B. wenn ein Benutzer ein Browserfenster erweitert oder ein mobiles Gerät auf die Seite dreht und von Hoch- zu Querformat wechselt.

Mehrere durch Kommas getrennte Media Queries bilden eine **Media Query-Liste**. Eine Media Query-Liste ist wahr, wenn eine ihrer Komponenten-Media Queries wahr ist, und falsch nur, wenn alle ihrer Komponenten-Media Queries falsch sind.

Eine Media Query kann optional von einem einzelnen Media Query Modifikator oder `not` oder `only` vorangestellt werden, wobei im Fall von `not` die Bedeutung der folgenden Media Query verändert wird.

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)-Modul
