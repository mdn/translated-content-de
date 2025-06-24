---
title: Ungültiger Selektor
slug: Web/WebDriver/Reference/Errors/InvalidSelector
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Der **ungültige Selektor**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn ein Befehl zur Elementabfrage mit einer unbekannten [Webelement](/de/docs/Web/WebDriver/Reference/WebElement)-Selektorstrategie verwendet wird.

Die verfügbaren Selektorstrategien sind [CSS](/de/docs/Web/WebDriver/Reference/WebElement#css-selector), [Linktext](/de/docs/Web/WebDriver/Reference/WebElement#link-text-selector), [Teil-Linktext](/de/docs/Web/WebDriver/Reference/WebElement#partial-link-text-selector), [Tag-Name](/de/docs/Web/WebDriver/Reference/WebElement#tag-name-selector) und [XPath](/de/docs/Web/WebDriver/Reference/WebElement#tag-name-selector). Jede andere Selektorstrategie wird mit diesem Fehler abgelehnt.

## Siehe auch

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors)
- [WebElement](/de/docs/Web/WebDriver/Reference/WebElement)
- Befehle zur Elementabfrage:
  - [Find Element](/de/docs/Web/WebDriver/Reference/Commands/FindElement)
  - [Find Elements](/de/docs/Web/WebDriver/Reference/Commands/FindElements)
  - [Find Element From Element](/de/docs/Web/WebDriver/Reference/Commands/FindElementFromElement)
  - [Find Elements From Element](/de/docs/Web/WebDriver/Reference/Commands/FindElementsFromElement)
