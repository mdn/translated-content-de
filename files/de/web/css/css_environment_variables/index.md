---
title: CSS-Umgebungsvariablen
slug: Web/CSS/CSS_environment_variables
l10n:
  sourceCommit: 3a9a6f9dd92859dca2f928c59b34d9177adb9ae5
---

Das Modul **CSS-Umgebungsvariablen** definiert das Konzept von Umgebungsvariablen und die {{cssxref("env")}}-Funktion. Umgebungsvariablen funktionieren ähnlich wie [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) und die {{cssxref("var")}}-Funktion, mit dem Unterschied, dass sie global definiert sind; es handelt sich um globale Variablen, die auf das gesamte Dokument beschränkt sind. Es handelt sich um Benutzeragent-Werte, die vom Browser oder Betriebssystem bereitgestellt werden und auf die Sie mit der {{cssxref("env")}}-Funktion zugreifen können, um Ihre Styles an das Gerät oder den Kontext des Nutzers anzupassen.

Umgebungsvariablen liefern Werte, die basierend auf Informationen, auf die der Benutzeragent Zugriff hat, auf der Seite verwendet werden können, wie z. B. die Größe der Titelleiste, die dynamische Tastatur und die sicheren Bereichseinlagen. Sichere Bereichseinlagen definieren ein Rechteck, das auf nicht-rechteckigen Anzeigen sichtbar bleibt, basierend auf dem Abstand von den Rändern des Ansichtsfeldes. Sie können die Größen des Benutzeragents in Ihre Styles einbeziehen, um das Layout wichtiger Inhalte basierend auf dem verfügbaren Platz innerhalb des sicheren Bereichsrechtecks, neben einer sichtbaren dynamischen Tastatur oder in der Nähe einer sichtbaren Titelleiste zu ändern.

## Referenz

### Funktionen

- {{cssxref("env")}}

## Leitfäden

- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables)
  - : Ein Überblick darüber, was Umgebungsvariablen sind, browserdefinierte Umgebungsvariablen und wie die `env()`-Funktion verwendet wird.

## Verwandte Konzepte

- [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*)
- {{cssxref("var")}}
- [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Wertfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) Leitfaden
- [CSS-Eigenschaften- und Werte-API](/de/docs/Web/CSS/CSS_properties_and_values_API) Modul
- [CSS-Benutzervorgaben für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
