---
title: Ungültiger Selektor
slug: Web/WebDriver/Errors/InvalidSelector
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Errors")}}

Der **ungültige Selektor**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Errors), der auftritt, wenn ein Elementabrufbefehl mit einer unbekannten [Webelement](/de/docs/Web/WebDriver/WebElement)-Selektorstrategie verwendet wird.

Die verfügbaren Selektorstrategien sind [CSS](/de/docs/Web/WebDriver/WebElement#css-selector), [Linktext](/de/docs/Web/WebDriver/WebElement#link-text-selector), [teilweiser Linktext](/de/docs/Web/WebDriver/WebElement#partial-link-text-selector), [Tag-Name](/de/docs/Web/WebDriver/WebElement#tag-name-selector) und [XPath](/de/docs/Web/WebDriver/WebElement#tag-name-selector). Jede andere Selektorstrategie wird mit diesem Fehler abgelehnt.

## Siehe auch

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Errors)
- [WebElement](/de/docs/Web/WebDriver/WebElement)
- Elementabrufbefehle:

  - [Find Element](/de/docs/Web/WebDriver/Commands/FindElement)
  - [Find Elements](/de/docs/Web/WebDriver/Commands/FindElements)
  - [Find Element From Element](/de/docs/Web/WebDriver/Commands/FindElementFromElement)
  - [Find Elements From Element](/de/docs/Web/WebDriver/Commands/FindElementsFromElement)
