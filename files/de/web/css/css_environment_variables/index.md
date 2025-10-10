---
title: CSS-Umgebungsvariablen
slug: Web/CSS/CSS_environment_variables
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Das **CSS-Umgebungsvariablen**-Modul definiert das Konzept von Umgebungsvariablen und die {{cssxref("env")}}-Funktion. Umgebungsvariablen funktionieren ähnlich wie [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) und die {{cssxref("var")}}-Funktion, außer dass sie global definiert sind; es handelt sich um globale Variablen, die sich auf das gesamte Dokument beziehen. Es sind Benutzeragent-Werte, die vom Browser oder Betriebssystem bereitgestellt werden und auf die Sie über die {{cssxref("env")}}-Funktion zugreifen können, um Ihre Stile an das Gerät oder den Kontext des Benutzers anzupassen.

Umgebungsvariablen liefern Werte, die auf der Seite verwendet werden können, basierend auf Informationen, auf die der Benutzeragent Zugriff hat, wie z. B. die Größe der Titelleiste, die dynamische Tastatur und die „safe area insets“. Die „safe area insets“ definieren ein Rechteck, das auf nicht-rechteckigen Displays garantiert sichtbar ist, basierend auf seiner Entfernung von den Rändern des Ansichtsbereichs. Sie können die Benutzeragent-Größen in Ihre Stile einbeziehen, sodass Sie das Layout wesentlicher Inhalte basierend auf dem verfügbaren Platz innerhalb des „safe area“-Rechtecks anpassen können, neben einer sichtbaren dynamischen Tastatur oder angrenzend an eine sichtbare Titelleiste.

## Referenz

### Funktionen

- {{cssxref("env")}}

### Datentypen

- [`<environment-variable-name>`](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables#browser-defined_environment_variables)

## Leitfäden

- [Umgebungsvariablen verwenden](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables)
  - : Ein Überblick darüber, was Umgebungsvariablen sind, browserdefinierte Umgebungsvariablen und wie man die `env()`-Funktion nutzt.

## Verwandte Konzepte

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*)
- {{cssxref("var")}}
- [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) Schnittstelle
- [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) Manifest-Feld
  [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) und {{domxref("WindowControlsOverlay"))}} Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Wertfunktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) Leitfaden
- [CSS Eigenschaften und Werte API](/de/docs/Web/CSS/CSS_properties_and_values_API) Modul
- [CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
