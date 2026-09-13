---
title: CSS-Umgebungsvariablen
short-title: Environment variables
slug: Web/CSS/Guides/Environment_variables
l10n:
  sourceCommit: de1ffe9d19ce381ed182255fcc8fe0517029cfa2
---

Das Modul **CSS environment variables** definiert das Konzept von Umgebungsvariablen und die Funktion {{cssxref("env")}}. Umgebungsvariablen funktionieren ähnlich wie [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) und die Funktion {{cssxref("var")}}, mit dem Unterschied, dass sie global definiert sind; sie sind globale Variablen mit Gültigkeitsbereich für das gesamte Dokument. Es handelt sich um Werte des User Agents, die vom Browser oder Betriebssystem bereitgestellt werden und auf die Sie mit der Funktion {{cssxref("env")}} zugreifen können, sodass Sie Ihre Stile an das Gerät oder den Kontext des Benutzers anpassen können.

Umgebungsvariablen stellen Werte bereit, die auf der Seite basierend auf Informationen verwendet werden können, auf die der User Agent Zugriff hat, beispielsweise die Größe der Titelleiste, der dynamischen Tastatur und der Safe-Area-Einzüge. Safe-Area-Einzüge definieren ein Rechteck, das auf nicht rechteckigen Displays garantiert sichtbar ist, basierend auf seinem Abstand zu den Rändern des Viewports. Sie können die Größen des User Agents in Ihre Stile einbeziehen, sodass Sie das Layout wesentlicher Inhalte basierend auf dem verfügbaren Platz innerhalb des Safe-Area-Rechtecks, neben einer sichtbaren dynamischen Tastatur oder angrenzend an eine sichtbare Titelleiste ändern können.

## Referenz

### Funktionen

- {{cssxref("env")}}

### Datentypen

- [`<environment-variable-name>`](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables)

## Leitfäden

- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using)
  - : Eine Übersicht darüber, was Umgebungsvariablen sind, welche Umgebungsvariablen vom Browser definiert werden und wie die Funktion `env()` verwendet wird.

## Verwandte Konzepte

- Modul [CSS media queries](/de/docs/Web/CSS/Guides/Media_queries)
- [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*)
- {{cssxref("var")}}
- Schnittstelle [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard)
- Manifestfeld [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override)
  [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) und Schnittstelle [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Leitfaden [CSS value functions](/de/docs/Web/CSS/Reference/Values/Functions)
- Modul [CSS properties and values API](/de/docs/Web/CSS/Guides/Properties_and_values_API)
- Modul [CSS custom properties for cascading variables](/de/docs/Web/CSS/Guides/Cascading_variables)
