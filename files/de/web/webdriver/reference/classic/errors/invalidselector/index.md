---
title: Ungültiger Selektor
slug: Web/WebDriver/Reference/Classic/Errors/InvalidSelector
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Der **ungültige Selektor**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Classic/Errors), der auftritt, wenn ein Befehl zum Abrufen von Elementen mit einer unbekannten [Webelement](/de/docs/Web/WebDriver/Reference/WebElement)-Selektorstrategie verwendet wird.

Die verfügbaren Selektorstrategien sind [CSS](/de/docs/Web/WebDriver/Reference/WebElement#css-selector), [Linktext](/de/docs/Web/WebDriver/Reference/WebElement#link-text-selector), [partieller Linktext](/de/docs/Web/WebDriver/Reference/WebElement#partial-link-text-selector), [Tagname](/de/docs/Web/WebDriver/Reference/WebElement#tag-name-selector) und [XPath](/de/docs/Web/WebDriver/Reference/WebElement#tag-name-selector). Jede andere Selektorstrategie wird mit diesem Fehler abgelehnt.

## Siehe auch

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Classic/Errors)
- [WebElement](/de/docs/Web/WebDriver/Reference/WebElement)
- Befehle zum Abrufen von Elementen:
  - [Element finden](/de/docs/Web/WebDriver/Reference/Commands/FindElement)
  - [Elemente finden](/de/docs/Web/WebDriver/Reference/Commands/FindElements)
  - [Element aus Element finden](/de/docs/Web/WebDriver/Reference/Commands/FindElementFromElement)
  - [Elemente aus Element finden](/de/docs/Web/WebDriver/Reference/Commands/FindElementsFromElement)
