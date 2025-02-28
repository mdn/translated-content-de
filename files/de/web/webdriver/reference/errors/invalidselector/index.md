---
title: Ungültiger Selektor
slug: Web/WebDriver/Reference/Errors/InvalidSelector
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Der **ungültige Selektor**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn ein Befehl zur Elementabfrage mit einer unbekannten Selektorstrategie für ein [Web-Element](/de/docs/Web/WebDriver/WebElement) verwendet wird.

Die verfügbaren Selektorstrategien sind [CSS](/de/docs/Web/WebDriver/WebElement#css-selector), [Link-Text](/de/docs/Web/WebDriver/WebElement#link-text-selector), [Partieller Link-Text](/de/docs/Web/WebDriver/WebElement#partial-link-text-selector), [Tag-Name](/de/docs/Web/WebDriver/WebElement#tag-name-selector) und [XPath](/de/docs/Web/WebDriver/WebElement#tag-name-selector). Jede andere Selektorstrategie wird mit diesem Fehler abgelehnt.

## Siehe auch

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors)
- [WebElement](/de/docs/Web/WebDriver/WebElement)
- Kommandos zur Abfrage von Elementen:

  - [Find Element](/de/docs/Web/WebDriver/Commands/FindElement)
  - [Find Elements](/de/docs/Web/WebDriver/Commands/FindElements)
  - [Find Element From Element](/de/docs/Web/WebDriver/Commands/FindElementFromElement)
  - [Find Elements From Element](/de/docs/Web/WebDriver/Commands/FindElementsFromElement)
