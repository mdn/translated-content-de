---
title: CSS-Umgebungsvariablen
slug: Web/CSS/CSS_environment_variables
l10n:
  sourceCommit: 9f1ac4351350c32273d5e0501c2fb895d561a0e8
---

Das **CSS-Umgebungsvariablen**-Modul definiert das Konzept der Umgebungsvariablen und die {{cssxref("env")}}-Funktion. Umgebungsvariablen funktionieren ähnlich wie [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) und die {{cssxref("var")}}-Funktion, außer dass sie global definiert sind; sie sind globale Variablen, die auf das gesamte Dokument bezogen sind. Es handelt sich um Benutzeragenten-Werte, die vom Browser oder Betriebssystem bereitgestellt werden und auf die Sie mit der {{cssxref("env")}}-Funktion zugreifen können, um Ihre Styles an das Gerät oder den Kontext des Benutzers anzupassen.

Umgebungsvariablen liefern Werte, die auf der Seite basierend auf Informationen verwendet werden können, auf die der Benutzeragent Zugriff hat, wie die Größe der Titelleiste, die dynamische Tastatur und die sicheren Bereichseinsätze. Sichere Bereichseinsätze definieren ein Rechteck, das auf nicht-rechteckigen Displays garantiert sichtbar ist, basierend auf dem Abstand zu den Rändern des Ansichtsfensters. Sie können die Größen des Benutzeragenten in Ihre Styles einbeziehen, sodass Sie das Layout von wesentlichem Inhalt anhand des verfügbaren Raums innerhalb des sicheren Bereichsrechtecks, neben einer sichtbaren dynamischen Tastatur oder in der Nähe einer sichtbaren Titelleiste, ändern können.

## Referenz

### Funktionen

- {{cssxref("env")}}

### Datentypen

- [`<environment-variable-name>`](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables#browser-defined_environment_variables)

## Leitfäden

- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables)
  - : Ein Überblick darüber, was Umgebungsvariablen sind, browserdefinierte Umgebungsvariablen und wie man die `env()`-Funktion verwendet.

## Verwandte Konzepte

- [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*)
- {{cssxref("var")}}
- [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Wertfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) Leitfaden
- [CSS-Eigenschaften und Werte-API](/de/docs/Web/CSS/CSS_properties_and_values_API) Modul
- [CSS-Benutzereigenschaften für Kaskadenvariablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
