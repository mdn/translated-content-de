---
title: Media query
slug: Glossary/Media_query
l10n:
  sourceCommit: 9ff83eb7950a8d4e2d55d61fcf9b06cf82eae6bf
---

{{GlossarySidebar}}

Eine **Media Query** ist ein logischer Ausdruck, der als Methode für CSS, JavaScript, HTML und andere Websprachen dient, um Aspekte des User-Agenten oder Geräts, auf dem das Dokument angezeigt wird, unabhängig vom Dokumentinhalt zu überprüfen. Damit wird bestimmt, ob der zugeordnete Codeblock oder die Funktion angewendet werden soll.

Media Queries werden verwendet, um CSS-Stile bedingt mithilfe der CSS {{cssxref("@media")}}- und {{cssxref("@import")}}-Regeln anzuwenden und in JavaScript, um Medienzustände zu testen und zu überwachen, wie mit der [`matchMedia()`](/de/docs/Web/API/Window/matchMedia)-Methode, der [`matches`](/de/docs/Web/API/MediaQueryList/matches)-Eigenschaft und dem [`change`](/de/docs/Web/API/MediaQueryList/change_event)-Ereignis. Media Queries werden als Werte der `media`-Attribute der [`<link>`](/de/docs/Web/HTML/Element/link#media)-, [`<source>`](/de/docs/Web/HTML/Element/source#media)- und [`<style>`](/de/docs/Web/HTML/Element/style#media)-[HTML](/de/docs/Web/HTML)-Elemente verwendet und wenden den Link, die Quelle oder den Stil bedingt an, wenn die Media Query wahr ist. Wenn ein `media`-Attribut weggelassen wird, ist die Standardeinstellung `true`. Media Queries werden auch als Wert des `sizes`-Attributs des {{HTMLElement("img")}}-Elements verwendet.

Media Queries bestehen aus optionalen Media Query-Modifikatoren und Medientypen sowie null oder mehr Medienbedingungen zusammen mit logischen Operatoren.

Media Queries werden als Reaktion auf Änderungen der Benutzerumgebung ausgewertet, zum Beispiel wenn ein Benutzer ein Browserfenster vergrößert oder ein mobiles Gerät von Hoch- auf Querformat umdreht.

Mehrere durch Kommas getrennte Media Queries erzeugen eine **Media Query-Liste**. Eine Media Query-Liste ist wahr, wenn eine ihrer Komponentenwörter wahr ist, und nur dann falsch, wenn alle ihrer Komponentenwörter falsch sind.

Eine Media Query kann optional durch einen einzelnen Media Query-Modifikator oder `not` oder `only` vorangestellt werden, wobei im Fall von `not` die Bedeutung der folgenden Media Query geändert wird.

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) Modul
