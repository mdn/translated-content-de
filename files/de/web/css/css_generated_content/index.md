---
title: CSS generierter Inhalt
slug: Web/CSS/CSS_generated_content
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Das **CSS-generierte Inhalt** Modul definiert, wie der Inhalt eines Elements ersetzt und Inhalt mit CSS zu einem Dokument hinzugefügt werden kann.

Generierter Inhalt kann für Inhaltsersetzung verwendet werden, wobei der Inhalt eines DOM-Knotens durch ein CSS `<image>` ersetzt wird. Der CSS-generierte Inhalt ermöglicht zudem das Erzeugen sprachspezifischer Anführungszeichen, das Erstellen benutzerdefinierter Listeneintrag-Zahlen und Aufzählungszeichen und das visuelle Hinzufügen von Inhalt, indem auf ausgewählten Pseudo-Elementen Inhalte als anonyme ersetzte Elemente erzeugt werden.

### Generierter Inhalt in Aktion

{{EmbedGHLiveSample("css-examples/modules/generated_content.html", '100%',420)}}

Das HTML für dieses Beispiel ist ein einzelnes, leeres {{HTMLElement("div")}} innerhalb eines ansonsten leeren {{HTMLElement("body")}}. Der Schneemann wurde mit [CSS-Bildern](/de/docs/Web/CSS/CSS_images) und [CSS-Hintergründen und -Randlinien](/de/docs/Web/CSS/CSS_backgrounds_and_borders) erstellt. Die Karottennase wurde mit generiertem Inhalt hinzugefügt: eine leere Box mit einem breiten orangen [linken Rand](/de/docs/Web/CSS/border-left), der zum {{cssxref("::before")}} Pseudo-Element hinzugefügt wurde. Der Text ist ebenfalls generierter Inhalt: "only one &lt;div>" wurde mit der {{cssxref("content")}} Eigenschaft erzeugt, die auf das {{cssxref("::after")}} Pseudo-Element angewendet wurde.

Um den Code für diese Animation zu sehen, [sehen Sie den Quellcode auf GitHub](https://github.com/mdn/css-examples/blob/main/modules/generated_content.html).

## Referenz

### Eigenschaften

- {{cssxref("content")}}
- {{cssxref("quotes")}}

> [!NOTE]
> Das CSS-generierte Inhaltsmodul führt vier gefährdete Eigenschaften ein, die noch nicht implementiert wurden: `string-set`, `bookmark-label`, `bookmark-level` und `bookmark-state`.

### Funktionen

Das CSS-generierte Inhaltsmodul führt sechs noch zu implementierende CSS-Funktionen ein, darunter `content()`, `string()`, und `leader()`, sowie die drei [`<target>`](/de/docs/Web/CSS/content#target) Funktionen `target-counter()`, `target-counters()`, und `target-text()`.

### Datentypen

- [`<content-list>`](/de/docs/Web/CSS/content)
- `<content-replacement>` (siehe {{cssxref("image")}})
- {{cssxref("image")}}
- [`<counter>`](/de/docs/Web/CSS/content#counter)
- [`<quote>`](/de/docs/Web/CSS/content#quote)
- [`<target>`](/de/docs/Web/CSS/content#target)

## Leitfäden

- ["Anleitung" für generierten Inhalt](/de/docs/Learn/CSS/Howto/Generated_content)

  - : Erfahren Sie, wie Sie Text- oder Bildinhalt zu einem Dokument mit der {{cssxref("content")}} Eigenschaft hinzufügen.

- [Erstellen Sie dekorative Boxen mit generiertem Inhalt](/de/docs/Learn/CSS/Howto/Create_fancy_boxes)

  - : Beispiel für das Styling von generiertem Inhalt für visuelle Effekte.

## Verwandte Konzepte

- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul

  - {{cssxref("::before")}} Pseudo-Element
  - {{cssxref("::after")}} Pseudo-Element
  - {{cssxref("::marker")}} Pseudo-Element

- [CSS-Listen und -Zähler](/de/docs/Web/CSS/CSS_lists) Modul

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
- [CSS-Listen und -Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
