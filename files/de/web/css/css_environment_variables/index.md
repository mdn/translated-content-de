---
title: CSS-Umgebungsvariablen
slug: Web/CSS/CSS_environment_variables
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das Modul **CSS-Umgebungsvariablen** definiert das Konzept der Umgebungsvariablen und die {{cssxref("env")}}-Funktion. Umgebungsvariablen funktionieren ähnlich wie [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) und die {{cssxref("var")}}-Funktion, mit dem Unterschied, dass sie global definiert sind; sie sind globale Variablen, die für das gesamte Dokument gelten. Es handelt sich um Benutzereinstellungswerte, die vom Browser oder Betriebssystem bereitgestellt werden und die Sie mit der {{cssxref("env")}}-Funktion abrufen können, sodass Sie Ihre Styles an das Gerät oder den Kontext des Nutzers anpassen können.

Umgebungsvariablen liefern Werte, die basierend auf Informationen, auf die der User Agent zugreifen kann, auf der Seite verwendet werden können, wie z.B. die Größe der Titelzeile, die dynamische Tastatur und die Randeinzüge des sicheren Bereichs. Randeinzüge des sicheren Bereichs definieren ein Rechteck, das auf nicht-rechteckigen Anzeigen basierend auf seinem Abstand zu den Rändern des Viewports garantiert sichtbar ist. Sie können die Größen des User Agents in Ihre Styles einbeziehen, sodass Sie das Layout wesentlicher Inhalte basierend auf dem verfügbaren Platz innerhalb des Rechteckes des sicheren Bereichs, neben einer sichtbaren dynamischen Tastatur oder in der Nähe einer sichtbaren Titelzeile ändern können.

## Referenz

### Funktionen

- {{cssxref("env")}}

### Datentypen

- [`<environment-variable-name>`](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables)

## Leitfäden

- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using)
  - : Ein Überblick darüber, was Umgebungsvariablen sind, browserdefinierte Umgebungsvariablen und wie die `env()`-Funktion verwendet wird.

## Verwandte Konzepte

- [CSS-Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries) Modul
- [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*)
- {{cssxref("var")}}
- [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard)-Schnittstelle
- [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) Manifestfeld
  [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) und {{domxref("WindowControlsOverlay")}}-Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Wertfunktionen](/de/docs/Web/CSS/Reference/Values/Functions) Leitfaden
- [CSS Properties und Values API](/de/docs/Web/CSS/Guides/Properties_and_values_API) Modul
- [CSS-benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) Modul
