---
title: CSS-Umgebungsvariablen
slug: Web/CSS/CSS_environment_variables
l10n:
  sourceCommit: 10f562a8a12f7bbf4b35b21de449c721ed756eb4
---

Das **CSS-Umgebungsvariablen**-Modul definiert das Konzept der Umgebungsvariablen und die Funktion {{cssxref("env")}}. Umgebungsvariablen funktionieren ähnlich wie [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) und die {{cssxref("var")}} Funktion, außer dass sie global definiert sind; sie sind globale Variablen, die auf das gesamte Dokument angewendet werden. Es handelt sich um Werte des Benutzeragents, die vom Browser oder Betriebssystem bereitgestellt werden. Sie können diese mit der Funktion {{cssxref("env")}} abrufen, was es Ihnen ermöglicht, Ihre Stile an das Gerät oder den Kontext des Benutzers anzupassen.

Umgebungsvariablen bieten Werte, die auf der Seite basierend auf Informationen, auf die der Benutzeragent Zugriff hat, verwendet werden können, wie z.B. die Größe der Titelleiste, dynamische Tastaturen und sichere Bereichseinfüge. Sichere Bereichseinfüge definieren ein Rechteck, das auf nicht-rechteckigen Displays als sichtbar garantiert wird, basierend auf dem Abstand zu den Rändern des Ansichtsfensters. Sie können die Benutzeragent-Größen in Ihre Stile einbeziehen, wodurch Sie das Layout von wesentlichen Inhalten basierend auf dem verfügbaren Platz innerhalb des sicheren Bereichsrechtecks, neben einer sichtbaren dynamischen Tastatur oder angrenzend an eine sichtbare Titelleiste anpassen können.

## Referenz

### Funktionen

- {{cssxref("env")}}

## Leitfäden

- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables)
  - : Ein Überblick darüber, was Umgebungsvariablen sind, browserdefinierte Umgebungsvariablen und wie man die Funktion `env()` verwendet.

## Verwandte Konzepte

- [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*)
- {{cssxref("var")}}
- [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Wertfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) Leitfaden
- [CSS-Eigenschaften und Werte API](/de/docs/Web/CSS/CSS_properties_and_values_API) Modul
- [CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
