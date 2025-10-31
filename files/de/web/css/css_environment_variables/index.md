---
title: CSS-Umgebungsvariablen
slug: Web/CSS/CSS_environment_variables
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

Das **CSS-Umgebungsvariablen**-Modul definiert das Konzept der Umgebungsvariablen und die {{cssxref("env")}}-Funktion. Umgebungsvariablen funktionieren ähnlich wie [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) und die {{cssxref("var")}}-Funktion, außer dass sie global definiert sind; sie sind globale Variablen, die auf das gesamte Dokument beschränkt sind. Sie sind Werte von Benutzeragenten, die vom Browser oder Betriebssystem bereitgestellt werden und auf die Sie mit der {{cssxref("env")}}-Funktion zugreifen können, sodass Sie Ihre Stile an das Gerät oder den Kontext des Benutzers anpassen können.

Umgebungsvariablen liefern Werte, die basierend auf Informationen, auf die der Benutzeragent Zugriff hat, auf der Seite verwendet werden können, wie zum Beispiel die Größe der Titelleiste, die dynamische Tastatur und die Ränder des sicheren Bereichs. Die Ränder des sicheren Bereichs definieren ein Rechteck, das auf nicht-rechteckigen Bildschirmen sichtbar ist, basierend auf seinem Abstand zu den Rändern des Ansichtsfensters. Sie können die Benutzeragentengrößen in Ihre Stile einbeziehen, sodass Sie das Layout von wesentlichen Inhalten basierend auf dem verfügbaren Platz innerhalb des sicheren Bereichsrechtecks anpassen können, neben einer sichtbaren dynamischen Tastatur oder neben einer sichtbaren Titelleiste.

## Referenz

### Funktionen

- {{cssxref("env")}}

### Datentypen

- [`<environment-variable-name>`](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables#browser-defined_environment_variables)

## Leitfäden

- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables)
  - : Ein Überblick darüber, was Umgebungsvariablen sind, von Browsern definierte Umgebungsvariablen und wie die `env()`-Funktion verwendet wird.

## Verwandte Konzepte

- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries)-Modul
- [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*)
- {{cssxref("var")}}
- [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard)-Schnittstelle
- [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override)-Manifestfeld
  [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) und {{domxref("WindowControlsOverlay"))}}-Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Leitfaden zu CSS-Wertfunktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions)
- [CSS Properties and Values API](/de/docs/Web/CSS/CSS_properties_and_values_API)-Modul
- [CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables)-Modul
