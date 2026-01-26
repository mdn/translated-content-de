---
title: scroll-padding
slug: Web/CSS/Reference/Properties/scroll-padding
l10n:
  sourceCommit: 57b9e55cd708d8ff4bfd9dc65c568bdee4089453
---

Die **`scroll-padding`** [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt den Scroll-Abstand auf allen Seiten eines Elements gleichzeitig fest. Sie gibt Versätze an, die den optimalen Anzeigebereich eines Scrollports innerhalb eines {{Glossary("scroll_container", "Scrollcontainers")}} definieren.

{{InteractiveExample("CSS Demo: scroll-padding")}}

```css interactive-example-choice
scroll-padding: 0;
```

```css interactive-example-choice
scroll-padding: 20px;
```

```css interactive-example-choice
scroll-padding: 20%;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="scroller" id="example-element">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <div class="info">Scroll »</div>
</section>
```

```css interactive-example
.default-example .info {
  inline-size: 100%;
  padding: 0.5em 0;
  font-size: 90%;
  writing-mode: vertical-rl;
}

.scroller {
  text-align: left;
  height: 250px;
  width: 270px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: y mandatory;
}

.scroller > div {
  flex: 0 0 250px;
  background-color: rebeccapurple;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.scroller > div:nth-child(even) {
  background-color: white;
  color: rebeccapurple;
}
```

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{CSSXref("scroll-padding-bottom")}}
- {{CSSXref("scroll-padding-left")}}
- {{CSSXref("scroll-padding-right")}}
- {{CSSXref("scroll-padding-top")}}

## Syntax

```css
/* Keyword values */
scroll-padding: auto;

/* <length> values */
scroll-padding: 10px;
scroll-padding: 1em 0.5em 1em 1em;
scroll-padding: 10%;

/* Global values */
scroll-padding: inherit;
scroll-padding: initial;
scroll-padding: revert;
scroll-padding: revert-layer;
scroll-padding: unset;
```

### Werte

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein innerer Versatz von der entsprechenden Kante des Scrollports, entweder als gültige {{cssxref("&lt;length&gt;")}} oder als {{cssxref("&lt;percentage&gt;")}}.
- `auto`
  - : Der Versatz wird durch den User-Agent bestimmt. Dies ist im Allgemeinen `0px`, aber der User-Agent kann auch einen anderen Wert wählen, wenn dieser passender ist.

## Beschreibung

Die `scroll-padding`-Eigenschaft ist eine Kurzform, die {{CSSXref("scroll-padding-top")}}, {{CSSXref("scroll-padding-right")}}, {{CSSXref("scroll-padding-bottom")}} und {{CSSXref("scroll-padding-left")}} in der Reihenfolge setzt und damit den oberen, rechten, unteren und linken Scroll-Abstand eines Scrollcontainers festlegt.

Nützlich bei der Erstellung von Scroll-Snap-Containern ermöglicht die `scroll-padding`-Eigenschaft die Definition von Versätzen für den _optimalen Anzeigebereich_ des Scrollports: der Bereich, der als Zielregion für die Platzierung von Elementen zur Ansicht des Benutzers verwendet wird. Dies erlaubt es, Einzüge im Scrollport zu erstellen, um Platz für Objekte zu schaffen, die den Inhalt verdecken könnten, wie z.B. fixierte Werkzeugleisten oder Seitenleisten, oder um mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

Obwohl sie im [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Modul definiert ist, gilt diese Eigenschaft für alle Scrollcontainer, unabhängig vom Wert der {{cssxref("scroll-snap-type")}}-Eigenschaft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("scroll-snap-type")}}
- [Grundkonzepte von Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap/Basic_concepts)
- [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul
- [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS Scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
