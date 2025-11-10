---
title: Media Query
slug: Glossary/Media_query
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein **Media Query** ist ein logischer Ausdruck, der eine Methode für CSS, JavaScript, HTML und andere Websprachen darstellt, um Aspekte des User-Agents oder Geräts, auf dem das Dokument angezeigt wird, unabhängig vom Dokumentinhalt zu überprüfen, um festzustellen, ob der zugehörige Codeblock oder das Feature angewendet werden soll.

Media Queries werden verwendet, um CSS-Stile bedingt mit den CSS-At-Rules {{cssxref("@media")}} und {{cssxref("@import")}} anzuwenden und in JavaScript, um Medienzustände zu testen und zu überwachen, zum Beispiel mit der [`matchMedia()`](/de/docs/Web/API/Window/matchMedia)-Methode, der [`matches`](/de/docs/Web/API/MediaQueryList/matches)-Eigenschaft und dem [`change`](/de/docs/Web/API/MediaQueryList/change_event)-Event. Media Queries werden als Werte der `media`-Attribute der [`<link>`](/de/docs/Web/HTML/Reference/Elements/link#media), [`<source>`](/de/docs/Web/HTML/Reference/Elements/source#media) und [`<style>`](/de/docs/Web/HTML/Reference/Elements/style#media) [HTML](/de/docs/Web/HTML)-Elemente verwendet, wodurch der Link, die Quelle oder der Stil nur dann bedingt angewendet werden, wenn der Media Query wahr ist. Wenn ein `media`-Attribut weggelassen wird, ist es standardmäßig `true`. Media Queries werden auch als Wert des [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes)-Attributs des {{HTMLElement("img")}}-Elements verwendet.

Media Queries bestehen aus optionalen Media Query-Modifizierern und Medientypen sowie null oder mehr Medienbedingungen zusammen mit logischen Operatoren.

Media Queries werden neu evaluiert, wenn sich die Benutzerumgebung ändert, zum Beispiel, wenn ein Benutzer ein Browserfenster vergrößert oder ein mobiles Gerät zur Seite kippt und von Hochformat zu Querformat wechselt.

Mehrere komma-getrennte Media Queries bilden eine **Media Query-Liste**. Eine Media Query-Liste ist wahr, wenn eine ihrer Komponenten-Media Queries wahr ist und nur dann falsch, wenn alle ihrer Komponenten-Media Queries falsch sind.

Ein Media Query kann optional durch einen einzelnen Media Query-Modifizierer oder `not` oder `only` vorangestellt werden, wobei `not` die Bedeutung des folgenden Media Queries verändert.

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)-Modul
