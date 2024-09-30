---
title: CSS generierte Inhalte
slug: Web/CSS/CSS_generated_content
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Das **CSS generierte Inhalte**-Modul definiert, wie der Inhalt eines Elements ersetzt werden kann und wie Inhalte mit CSS zu einem Dokument hinzugefügt werden können.

Generierte Inhalte können zum Ersetzen von Inhalten verwendet werden, wobei der Inhalt eines DOM-Knotens durch ein CSS-`<image>` ersetzt wird. Das CSS generierte Inhalte ermöglicht außerdem die Erzeugung sprachspezifischer Anführungszeichen, das Erstellen benutzerdefinierter Listenelementzahlen und -aufzählungszeichen, sowie das visuelle Hinzufügen von Inhalten durch das Erzeugen von Inhalten auf ausgewählten Pseudo-Elementen als anonyme ersetzte Elemente.

### Generierte Inhalte in Aktion

{{EmbedGHLiveSample("css-examples/modules/generated_content.html", '100%',420)}}

Das HTML für dieses Beispiel ist ein einzelnes, leeres {{HTMLElement("div")}} in einem ansonsten leeren {{HTMLElement("body")}}. Der Schneemann wurde mit [CSS-Bildern](/de/docs/Web/CSS/CSS_images) und [CSS-Hintergründen und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) erstellt. Die Karottennase wurde mit generierten Inhalten hinzugefügt: ein leerer Kasten mit einer breiten orangefarbenen [linken Rahmenlinie](/de/docs/Web/CSS/border-left), die dem {{cssxref("::before")}} Pseudo-Element hinzugefügt wurde. Der Text ist ebenfalls generierter Inhalt: "nur ein &lt;div>" wurde mit der {{cssxref("content")}}-Eigenschaft erzeugt, die auf das {{cssxref("::after")}} Pseudo-Element angewendet wurde.

Um den Code für diese Animation zu sehen, [sehen Sie sich den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/generated_content.html).

## Referenz

### Eigenschaften

- {{cssxref("content")}}
- {{cssxref("quotes")}}

> [!NOTE]
> Das CSS generierte Inhalte-Modul führt vier gefährdete Eigenschaften ein, die nicht implementiert wurden: `string-set`, `bookmark-label`, `bookmark-level` und `bookmark-state`.

### Funktionen

Das CSS generierte Inhalte-Modul führt sechs noch nicht implementierte CSS-Funktionen ein, darunter `content()`, `string()` und `leader()`, sowie die drei [`<target>`](/de/docs/Web/CSS/content#target)-Funktionen `target-counter()`, `target-counters()` und `target-text()`.

### Datentypen

- [`<content-list>`](/de/docs/Web/CSS/content)
- `<content-replacement>` (siehe {{cssxref("image")}})
- {{cssxref("image")}}
- [`<counter>`](/de/docs/Web/CSS/content#counter)
- [`<quote>`](/de/docs/Web/CSS/content#quote)
- [`<target>`](/de/docs/Web/CSS/content#target)

## Leitfäden

- ["Anleitung" für generierte Inhalte](/de/docs/Learn/CSS/Howto/Generated_content)

  - : Lernen Sie, wie Sie Text oder Bildinhalte mit der {{cssxref("content")}}-Eigenschaft zu einem Dokument hinzufügen.

- [Erstellen Sie stilvolle Boxen mit generierten Inhalten](/de/docs/Learn/CSS/Howto/Create_fancy_boxes)

  - : Beispiel für das Styling von generierten Inhalten für visuelle Effekte.

## Verwandte Konzepte

- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul

  - {{cssxref("::before")}} Pseudo-Element
  - {{cssxref("::after")}} Pseudo-Element
  - {{cssxref("::marker")}} Pseudo-Element

- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul

  - {{cssxref("counter", "counter()")}} Funktion
  - {{cssxref("counters", "counters()")}} Funktion
  - {{cssxref("counter-increment")}} Eigenschaft
  - {{cssxref("counter-reset")}} Eigenschaft

- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul

  - {{cssxref("attr", "attr()")}} Funktion
  - {{cssxref("string")}} Datentyp
  - {{cssxref("image")}} Datentyp

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
