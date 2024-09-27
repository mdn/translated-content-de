---
title: Ungültiger selector
slug: Web/WebDriver/Errors/InvalidSelector
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Errors")}}

Der **ungültige selector**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Errors), der auftritt, wenn ein Befehl zur Elementabfrage mit einer unbekannten [Webelement](/de/docs/Web/WebDriver/WebElement)-Selector-Strategie verwendet wird.

Die verfügbaren Selector-Strategien sind [CSS](/de/docs/Web/WebDriver/WebElement#css-selector), [Link-Text](/de/docs/Web/WebDriver/WebElement#link-text-selector), [Partieller Link-Text](/de/docs/Web/WebDriver/WebElement#partial-link-text-selector), [Tag-Name](/de/docs/Web/WebDriver/WebElement#tag-name-selector) und [XPath](/de/docs/Web/WebDriver/WebElement#tag-name-selector). Jede andere Selector-Strategie wird mit diesem Fehler abgelehnt.

## Siehe auch

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Errors)
- [Webelement](/de/docs/Web/WebDriver/WebElement)
- Befehle zur Elementabfrage:

  - [Element finden](/de/docs/Web/WebDriver/Commands/FindElement)
  - [Elemente finden](/de/docs/Web/WebDriver/Commands/FindElements)
  - [Element von Element finden](/de/docs/Web/WebDriver/Commands/FindElementFromElement)
  - [Elemente von Element finden](/de/docs/Web/WebDriver/Commands/FindElementsFromElement)
