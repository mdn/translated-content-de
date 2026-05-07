---
title: "`invalid selector` Fehlercode"
short-title: invalid selector
slug: Web/WebDriver/Reference/Errors/InvalidSelector
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Der **invalid selector** Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn ein Befehl zur Elementabfrage mit einer unbekannten [Webelement](/de/docs/Web/WebDriver/Reference/WebElement)-Selektorstrategie verwendet wird.

Die verfügbaren Selektorstrategien sind [CSS](/de/docs/Web/WebDriver/Reference/WebElement#css-selector), [Linktext](/de/docs/Web/WebDriver/Reference/WebElement#link-text-selector), [teilweiser Linktext](/de/docs/Web/WebDriver/Reference/WebElement#partial-link-text-selector), [Tagname](/de/docs/Web/WebDriver/Reference/WebElement#tag-name-selector) und [XPath](/de/docs/Web/WebDriver/Reference/WebElement#tag-name-selector). Jede andere Selektorstrategie wird mit diesem Fehler abgelehnt.

## Siehe auch

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors)
- [WebElement](/de/docs/Web/WebDriver/Reference/WebElement)
- Befehle zur Elementabfrage:
  - [Element finden](/de/docs/Web/WebDriver/Reference/Commands/FindElement)
  - [Elemente finden](/de/docs/Web/WebDriver/Reference/Commands/FindElements)
  - [Element von Element finden](/de/docs/Web/WebDriver/Reference/Commands/FindElementFromElement)
  - [Elemente von Element finden](/de/docs/Web/WebDriver/Reference/Commands/FindElementsFromElement)
