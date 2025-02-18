---
title: CSS generierter Inhalt
slug: Web/CSS/CSS_generated_content
l10n:
  sourceCommit: b64538dc77e9a6181b882bd54bdbb307c1430ba8
---

{{CSSRef}}

Das **CSS generierter Inhalt**-Modul definiert, wie der Inhalt eines Elements ersetzt und zusätzlicher Inhalt mit CSS zu einem Dokument hinzugefügt werden kann.

Generierter Inhalt kann für Inhaltsersetzung verwendet werden, wobei der Inhalt eines DOM-Knotens durch ein CSS-`<image>` ersetzt wird. Das Modul für CSS-generierten Inhalt ermöglicht auch die Erzeugung sprachspezifischer Anführungszeichen, das Erstellen von benutzerdefinierten Listenelementnummern und -punkten sowie das visuelle Hinzufügen von Inhalten, indem Inhalte in ausgewählten Pseudo-Elementen als anonyme ersetzte Elemente generiert werden.

### Generierter Inhalt in Aktion

```html hidden live-sample___generated_content
<div></div>
```

```css hidden live-sample___generated_content
body,
div {
  background-repeat: no-repeat;
}
body {
  background-image: linear-gradient(#3a67ab, #e8f6ff 100%);
}
div {
  position: relative;
  width: 400px;
  height: 400px;
  background-image:
    linear-gradient(
      115deg,
      transparent 48%,
      brown,
      #996600,
      brown,
      transparent 52%
    ),
    linear-gradient(
      60deg,
      transparent 48%,
      brown,
      #996600,
      brown,
      transparent 52%
    ),
    radial-gradient(
      circle 10px at 50% 50%,
      #333333 30%,
      #999999 50%,
      transparent 50%
    ),
    radial-gradient(
      circle 10px at 50% 50%,
      #333333 30%,
      #999999 50%,
      transparent 50%
    ),
    radial-gradient(circle at 50% 50%, white 30%, #eeeeee 50%, transparent 50%),
    radial-gradient(circle at 50% 50%, white 30%, #eeeeee 50%, transparent 50%),
    radial-gradient(circle at 50% 50%, white 30%, #eeeeee 50%, transparent 50%);
  background-size:
    100px 100px,
    100px 100px,
    15px 15px,
    15px 15px,
    200px 200px,
    300px 300px,
    400px 400px;
  background-position:
    95% 120px,
    5% 120px,
    46% 80px,
    54% 80px,
    50% 0,
    50% 90px,
    50% 220px;
}
div::after {
  content: "";
  border: transparent solid 4px;
  border-left: orange 30px solid;
  height: 1px;
  width: 1px;
  position: absolute;
  left: 50%;
  top: 100px;
}

div::before {
  content: "Only one <div>";
  font-size: min(6vh, 2rem);
  justify-content: center;
  display: flex;
  font-family: comic-sans, papyrus, sans-serif;
}
```

{{EmbedLiveSample("generated_content", "", "400px")}}

Das HTML für dieses Beispiel besteht aus einem einzigen, leeren {{HTMLElement("div")}} in einem ansonsten leeren {{HTMLElement("body")}}. Der Schneemann wurde mit [CSS-Bildern](/de/docs/Web/CSS/CSS_images) und [CSS-Hintergründen und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) erstellt. Die Karottennase wurde mithilfe von generiertem Inhalt hinzugefügt: eine leere Box mit einer breiten orangen [linken Rahmenlinie](/de/docs/Web/CSS/border-left), die zum {{cssxref("::before")}}-Pseudo-Element hinzugefügt wurde. Der Text ist ebenfalls generierter Inhalt: "only one &lt;div>" wurde mit der {{cssxref("content")}}-Eigenschaft generiert, die auf das {{cssxref("::after")}}-Pseudo-Element angewendet wurde.

Klicken Sie im obigen Beispiel auf "Play", um den Code im MDN Playground zu sehen oder zu bearbeiten.

## Referenz

### Eigenschaften

- {{cssxref("content")}}
- {{cssxref("quotes")}}

> [!NOTE]
> Das CSS-Modul für generierten Inhalt führt vier unsichere Eigenschaften ein, die noch nicht implementiert wurden: `string-set`, `bookmark-label`, `bookmark-level` und `bookmark-state`.

### Funktionen

Das CSS-Modul für generierten Inhalt führt sechs noch nicht implementierte CSS-Funktionen ein, darunter `content()`, `string()` und `leader()` sowie die drei [`<target>`](/de/docs/Web/CSS/content#target)-Funktionen `target-counter()`, `target-counters()` und `target-text()`.

### Datentypen

- [`<content-list>`](/de/docs/Web/CSS/content)
- `<content-replacement>` (siehe {{cssxref("image")}})
- {{cssxref("image")}}
- [`<counter>`](/de/docs/Web/CSS/content#counter)
- [`<quote>`](/de/docs/Web/CSS/content#quote)
- [`<target>`](/de/docs/Web/CSS/content#target)

## Leitfäden

- ["Anleitung" für generierten Inhalt](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content)

  - : Erfahren Sie, wie Sie mit der {{cssxref("content")}}-Eigenschaft Text- oder Bildinhalte zu einem Dokument hinzufügen können.

- [Erstellen Sie stilvolle Boxen mit generiertem Inhalt](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes)

  - : Beispiel für das Styling von generiertem Inhalt für visuelle Effekte.

## Verwandte Konzepte

- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements)-Modul

  - {{cssxref("::before")}}-Pseudo-Element
  - {{cssxref("::after")}}-Pseudo-Element
  - {{cssxref("::marker")}}-Pseudo-Element

- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists)-Modul

  - {{cssxref("counter", "counter()")}}-Funktion
  - {{cssxref("counters", "counters()")}}-Funktion
  - {{cssxref("counter-increment")}}-Eigenschaft
  - {{cssxref("counter-reset")}}-Eigenschaft

- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)-Modul

  - {{cssxref("attr", "attr()")}}-Funktion
  - {{cssxref("string")}}-Datentyp
  - {{cssxref("image")}}-Datentyp

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements)-Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists)-Modul
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
