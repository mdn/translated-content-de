---
title: CSS generierter Inhalt
short-title: Generierter Inhalt
slug: Web/CSS/Guides/Generated_content
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS generierter Inhalt**-Modul definiert, wie der Inhalt eines Elements ersetzt und Inhalt mit CSS zu einem Dokument hinzugefügt werden kann.

Generierter Inhalt kann für das Inhaltsersatz verwendet werden, in welchem Fall der Inhalt eines DOM-Knotens durch ein CSS-`<image>` ersetzt wird. Der CSS generierter Inhalt ermöglicht außerdem das Erzeugen von sprachspezifischen Anführungszeichen, das Erstellen benutzerdefinierter Listenelementnummern und Aufzählungszeichen sowie das visuelle Hinzufügen von Inhalten, indem auf ausgewählten Pseudoelementen generierter Inhalt als anonyme ersetzte Elemente erzeugt wird.

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

Das HTML für dieses Beispiel ist ein einzelnes, leeres {{HTMLElement("div")}} in einem ansonsten leeren {{HTMLElement("body")}}. Der Schneemann wurde mit [CSS-Bildern](/de/docs/Web/CSS/Guides/Images) und [CSS-Hintergründen und -Rändern](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) erstellt. Die Karottennase wurde mit generiertem Inhalt hinzugefügt: eine leere Box mit einem breiten orangenen [linken Rand](/de/docs/Web/CSS/Reference/Properties/border-left), der dem {{cssxref("::before")}} Pseudoelement hinzugefügt wurde. Der Text ist ebenfalls generierter Inhalt: "only one &lt;div>" wurde mit der {{cssxref("content")}}-Eigenschaft, die auf das {{cssxref("::after")}} Pseudoelement angewendet wurde, generiert.

Klicken Sie auf "Play" im obigen Beispiel, um den Code im MDN Playground zu sehen oder zu bearbeiten.

## Referenz

### Eigenschaften

- {{cssxref("content")}}
- {{cssxref("quotes")}}

Das CSS generierte Inhalt-Modul stellt auch vier risikobehaftete Eigenschaften vor: `string-set`, `bookmark-label`, `bookmark-level` und `bookmark-state`. Derzeit unterstützen keine Browser diese Funktionen.

### Funktionen

Das CSS generierte Inhalt-Modul führt sechs noch nicht implementierte CSS-Funktionen ein, darunter `content()`, `string()` und `leader()`, sowie die drei [`<target>`](/de/docs/Web/CSS/Reference/Properties/content#target) Funktionen `target-counter()`, `target-counters()` und `target-text()`.

### Datentypen

- [`<content-list>`](/de/docs/Web/CSS/Reference/Properties/content)
- `<content-replacement>` (siehe {{cssxref("image")}})
- {{cssxref("image")}}
- [`<counter>`](/de/docs/Web/CSS/Reference/Properties/content#counter)
- [`<quote>`](/de/docs/Web/CSS/Reference/Properties/content#quote)
- [`<target>`](/de/docs/Web/CSS/Reference/Properties/content#target)

## Leitfäden

- ["Anleitung für generierten Inhalt](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content)
  - : Lernen Sie, wie Sie Text oder Bildinhalt zu einem Dokument mit der {{cssxref("content")}}-Eigenschaft hinzufügen.

- [Erstellen Sie schicke Boxen mit generiertem Inhalt](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes)
  - : Beispiel für das Styling von generiertem Inhalt für visuelle Effekte.

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

- [CSS-Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
  - {{cssxref("attr", "attr()")}} Funktion
  - {{cssxref("string")}} Datentyp
  - {{cssxref("image")}} Datentyp

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Pseudoelemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
