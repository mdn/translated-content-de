---
title: CSS-Umgebungsvariablen
slug: Web/CSS/CSS_environment_variables
l10n:
  sourceCommit: 7860297e91985460147c2bd6ced2bfa8cab5aba7
---

Das **CSS-Umgebungsvariablen**-Modul definiert das Konzept von Umgebungsvariablen und die {{cssxref("env")}}-Funktion. Umgebungsvariablen funktionieren ähnlich wie [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) und die {{cssxref("var")}}-Funktion, mit dem Unterschied, dass sie global definiert sind; es handelt sich um globale Variablen, die auf das gesamte Dokument beschränkt sind. Sie sind Werte des Benutzeragenten, bereitgestellt vom Browser oder Betriebssystem, auf die Sie mit der {{cssxref("env")}}-Funktion zugreifen können, um Ihre Styles an das Gerät oder den Kontext des Benutzers anzupassen.

Umgebungsvariablen liefern Werte, die auf der Seite basierend auf Informationen genutzt werden können, auf die der Benutzeragent Zugriff hat, wie die Größe der Titelleiste, die dynamische Tastatur und sichere Bereichs-Einrastungen. Sichere Bereichs-Einrastungen definieren ein Rechteck, das auf nicht-rechteckigen Displays sichtbar ist, basierend auf seinem Abstand zu den Rändern des Viewports. Sie können die Größen des Benutzeragenten in Ihre Styles einbinden, wodurch Sie das Layout wesentlicher Inhalte basierend auf dem verfügbaren Platz innerhalb des sicheren Bereichsrechtecks, neben einer sichtbaren dynamischen Tastatur oder neben einer sichtbaren Titelleiste, anpassen können.

## Nachschlagewerk

### Funktionen

- {{cssxref("env")}}

### Datentypen

- [`<environment-variable-name>`](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables#browser-defined_environment_variables)

## Leitfäden

- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables)
  - : Ein Überblick darüber, was Umgebungsvariablen sind, von Browsern definierte Umgebungsvariablen und wie die `env()`-Funktion verwendet wird.

## Verwandte Konzepte

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*)
- {{cssxref("var")}}
- [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) Schnittstelle
- [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) Manifest-Feld
  [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) und {{domxref("WindowControlsOverlay"))}} Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Wertfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) Leitfaden
- [CSS Eigenschaften und Werte API](/de/docs/Web/CSS/CSS_properties_and_values_API) Modul
- [CSS-Benutzerdefinierte Eigenschaften für Kaskadenvariablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
