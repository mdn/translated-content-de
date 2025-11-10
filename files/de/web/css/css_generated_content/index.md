---
title: CSS generierter Inhalt
slug: Web/CSS/CSS_generated_content
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **CSS generierter Inhalt**-Modul definiert, wie der Inhalt eines Elements ersetzt werden kann und wie Inhalte mit CSS zu einem Dokument hinzugefügt werden können.

Generierter Inhalt kann für Inhaltsersetzung verwendet werden, wobei der Inhalt eines DOM-Knotens durch ein CSS-`<image>` ersetzt wird. Der CSS generierter Inhalt ermöglicht außerdem das Erzeugen sprachspezifischer Anführungszeichen, das Erstellen benutzerdefinierter Listenelementnummern und Aufzählungszeichen und das visuelle Hinzufügen von Inhalten, indem auf ausgewählten Pseudoelementen generierter Inhalt als anonyme ersetzte Elemente dargestellt wird.

## Generierter Inhalt in Aktion

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
  font-family: "Comic Sans", "Papyrus", sans-serif;
}
```

{{EmbedLiveSample("generated_content", "", "400px")}}

Das HTML für dieses Beispiel besteht aus einem einzigen, leeren {{HTMLElement("div")}} in einem ansonsten leeren {{HTMLElement("body")}}. Der Schneemann wurde mit [CSS-Bildern](/de/docs/Web/CSS/Guides/Images) und [CSS-Hintergründen und -Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) erstellt. Die Karottennase wurde unter Verwendung von generiertem Inhalt hinzugefügt: Eine leere Box mit einer breiten orangen [linken Umrandung](/de/docs/Web/CSS/Reference/Properties/border-left) wurde dem {{cssxref("::before")}} Pseudoelement hinzugefügt. Der Text ist ebenfalls generierter Inhalt: "only one &lt;div>" wurde mit der {{cssxref("content")}}-Eigenschaft auf das {{cssxref("::after")}} Pseudoelement angewendet generiert.

Klicken Sie auf "Play" im obigen Beispiel, um den Code im MDN Playground zu sehen oder zu bearbeiten.

## Referenz

### Eigenschaften

- {{cssxref("content")}}
- {{cssxref("quotes")}}

Das CSS generierter Inhalt-Modul führt auch vier riskante Eigenschaften ein: `string-set`, `bookmark-label`, `bookmark-level` und `bookmark-state`. Derzeit unterstützen keine Browser diese Funktionen.

### Funktionen

Das CSS generierter Inhalt-Modul führt sechs noch nicht umgesetzte CSS-Funktionen ein, darunter `content()`, `string()` und `leader()`, sowie die drei [`<target>`](/de/docs/Web/CSS/Reference/Properties/content#target)-Funktionen `target-counter()`, `target-counters()` und `target-text()`.

### Datentypen

- [`<content-list>`](/de/docs/Web/CSS/Reference/Properties/content)
- `<content-replacement>` (siehe {{cssxref("image")}})
- {{cssxref("image")}}
- [`<counter>`](/de/docs/Web/CSS/Reference/Properties/content#counter)
- [`<quote>`](/de/docs/Web/CSS/Reference/Properties/content#quote)
- [`<target>`](/de/docs/Web/CSS/Reference/Properties/content#target)

## Leitfaden

- ["Anleitung" Leitfaden für generierten Inhalt](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content)
  - : Lernen Sie, wie Sie Text- oder Bildinhalte mit der {{cssxref("content")}}-Eigenschaft zu einem Dokument hinzufügen können.

- [Erstellen Sie schicke Boxen mit generiertem Inhalt](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes)
  - : Beispiel für die Gestaltung generierter Inhalte für visuelle Effekte.

## Verwandte Konzepte

- [CSS-Pseudoelemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
  - {{cssxref("::before")}} Pseudoelement
  - {{cssxref("::after")}} Pseudoelement
  - {{cssxref("::marker")}} Pseudoelement

- [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
  - {{cssxref("counter", "counter()")}} Funktion
  - {{cssxref("counters", "counters()")}} Funktion
  - {{cssxref("counter-increment")}} Eigenschaft
  - {{cssxref("counter-reset")}} Eigenschaft

- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
  - {{cssxref("::scroll-button()")}} Pseudoelement
  - {{cssxref("::scroll-marker")}} Pseudoelement
  - {{cssxref(":target-current")}} Pseudoklasse

- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
  - {{cssxref("attr", "attr()")}} Funktion
  - {{cssxref("string")}} Datentyp
  - {{cssxref("image")}} Datentyp

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Pseudoelemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
