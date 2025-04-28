---
title: Ungültiger Selektor
slug: Web/WebDriver/Reference/Errors/InvalidSelector
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

Der **ungültige Selektor**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn ein Befehl zur Elementabfrage mit einer unbekannten [Webelement](/de/docs/Web/WebDriver/Reference/WebElement)-Selektorstrategie verwendet wird.

Die verfügbaren Selektorstrategien sind [CSS](/de/docs/Web/WebDriver/Reference/WebElement#css-selector), [Linktext](/de/docs/Web/WebDriver/Reference/WebElement#link-text-selector), [Teil-Linktext](/de/docs/Web/WebDriver/Reference/WebElement#partial-link-text-selector), [Tag-Name](/de/docs/Web/WebDriver/Reference/WebElement#tag-name-selector) und [XPath](/de/docs/Web/WebDriver/Reference/WebElement#tag-name-selector). Jede andere Selektorstrategie wird mit diesem Fehler abgelehnt.

## Siehe auch

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors)
- [WebElement](/de/docs/Web/WebDriver/Reference/WebElement)
- Befehle zur Elementabfrage:

  - [Element finden](/de/docs/Web/WebDriver/Reference/Commands/FindElement)
  - [Elemente finden](/de/docs/Web/WebDriver/Reference/Commands/FindElements)
  - [Element aus Element finden](/de/docs/Web/WebDriver/Reference/Commands/FindElementFromElement)
  - [Elemente aus Element finden](/de/docs/Web/WebDriver/Reference/Commands/FindElementsFromElement)
