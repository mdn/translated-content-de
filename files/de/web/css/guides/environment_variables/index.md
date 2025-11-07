---
title: CSS-Umgebungsvariablen
short-title: Environment variables
slug: Web/CSS/Guides/Environment_variables
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das Modul der **CSS-Umgebungsvariablen** definiert das Konzept der Umgebungsvariablen sowie die {{cssxref("env")}}-Funktion. Umgebungsvariablen funktionieren ähnlich wie [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) und die {{cssxref("var")}}-Funktion, außer dass sie global definiert sind; es handelt sich um globale Variablen, die auf das gesamte Dokument beschränkt sind. Sie sind Benutzeragent-Werte, die vom Browser oder Betriebssystem bereitgestellt werden. Sie können darauf zugreifen, indem Sie die {{cssxref("env")}}-Funktion verwenden, sodass Sie Ihre Stile an das Gerät oder den Kontext des Benutzers anpassen können.

Umgebungsvariablen liefern Werte, die basierend auf Informationen, auf die der Benutzeragent zugreifen kann, für die Seite verwendet werden können, wie z.B. die Größe der Titelleiste, dynamische Tastatur und sichere Bereichseinlagen. Sichere Bereichseinlagen definieren ein Rechteck, das auf nicht rechteckigen Displays sichtbar ist, basierend auf seiner Entfernung von den Rändern des Viewports. Sie können die Benutzeragentgrößen in Ihre Stile aufnehmen, sodass Sie das Layout wichtiger Inhalte basierend auf dem verfügbaren Raum innerhalb des sicheren Bereichsrechtecks, neben einer sichtbaren dynamischen Tastatur oder neben einer sichtbaren Titelleiste ändern können.

## Referenz

### Funktionen

- {{cssxref("env")}}

### Datentypen

- [`<environment-variable-name>`](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables)

## Leitfäden

- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using)
  - : Ein Überblick darüber, was Umgebungsvariablen sind, browserdefinierte Umgebungsvariablen und wie man die `env()`-Funktion verwendet.

## Verwandte Konzepte

- [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries) Modul
- [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*)
- {{cssxref("var")}}
- [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) Schnittstelle
- [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) Manifestfeld
  [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) und {{domxref("WindowControlsOverlay"))}} Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Leitfaden für CSS-Wertfunktionen](/de/docs/Web/CSS/Reference/Values/Functions)
- [CSS-Eigenschaften und Werte-API](/de/docs/Web/CSS/Guides/Properties_and_values_API) Modul
- [CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) Modul
