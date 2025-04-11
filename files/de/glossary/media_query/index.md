---
title: Media query
slug: Glossary/Media_query
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{GlossarySidebar}}

Ein **Media Query** ist ein logischer Ausdruck, der eine Methode für CSS, JavaScript, HTML und andere Websprachen darstellt, um Aspekte des Benutzeragents oder Geräts zu überprüfen, auf dem das Dokument angezeigt wird, unabhängig von den Dokumentinhalten, um festzustellen, ob der zugehörige Codeblock oder das Feature angewendet werden sollte.

Media Queries werden verwendet, um CSS-Stile bedingt mit den CSS-At-Rules {{cssxref("@media")}} und {{cssxref("@import")}} zu verwenden und in JavaScript Medienzustände zu testen und zu überwachen, wie mit der Methode [`matchMedia()`](/de/docs/Web/API/Window/matchMedia), der Eigenschaft [`matches`](/de/docs/Web/API/MediaQueryList/matches) und dem Ereignis [`change`](/de/docs/Web/API/MediaQueryList/change_event). Media Queries werden als Werte der `media`-Attribute der [HTML](/de/docs/Web/HTML)-Elemente [`<link>`](/de/docs/Web/HTML/Reference/Elements/link#media), [`<source>`](/de/docs/Web/HTML/Reference/Elements/source#media) und [`<style>`](/de/docs/Web/HTML/Reference/Elements/style#media) verwendet und wenden den Link, die Quelle oder den Stil bedingt an, wenn die Media Query wahr ist. Wenn ein `media`-Attribut weggelassen wird, ist es standardmäßig `true`. Media Queries werden auch als Wert des Attributs [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes) des {{HTMLElement("img")}}-Elements verwendet.

Media Queries bestehen aus optionalen Media Query Modifiern und Medientypen sowie null oder mehr Medienbedingungen, zusammen mit logischen Operatoren.

Media Queries werden in Reaktion auf Änderungen in der Benutzerumgebung neu ausgewertet, beispielsweise wenn ein Benutzer ein Browserfenster erweitert oder ein mobiles Gerät von Hochformat auf Querformat dreht.

Mehrere durch Kommata getrennte Media Queries bilden eine **Media Query-Liste**. Eine Media Query-Liste ist wahr, wenn eine ihrer enthaltenen Media Queries wahr ist, und nur dann falsch, wenn alle enthaltenen Media Queries falsch sind.

Eine Media Query kann optional durch einen einzelnen Media Query Modifier oder `not` oder `only` vorangestellt werden, wodurch im Fall von `not` die Bedeutung der folgenden Media Query geändert wird.

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) Modul
