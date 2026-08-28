---
title: CSS-Eigenschaft `scroll-padding`
short-title: scroll-padding
slug: Web/CSS/Reference/Properties/scroll-padding
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die CSS-Abkürzungseigenschaft **`scroll-padding`** legt den Bildlaufabstand auf allen Seiten eines Elements gleichzeitig fest. Sie spezifiziert Versätze, die den optimalen Ansichtsbereich eines Scrollports innerhalb eines {{Glossary("scroll_container", "Scrollcontainers")}} definieren.

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

## Teilweise Eigenschaften

Diese Eigenschaft ist eine Abkürzung für die folgenden CSS-Eigenschaften:

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
  - : Ein einwärts gerichteter Versatz von der entsprechenden Kante des Scrollports, als gültige {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}.
- `auto`
  - : Der Versatz wird vom User-Agent bestimmt. Im Allgemeinen wird dies `0px` sein, aber der User-Agent kann erkennen, dass ein anderer Wert angemessener ist, und entsprechend handeln.

## Beschreibung

Die `scroll-padding`-Eigenschaft ist eine Abkürzung, die {{CSSXref("scroll-padding-top")}}, {{CSSXref("scroll-padding-right")}}, {{CSSXref("scroll-padding-bottom")}} und {{CSSXref("scroll-padding-left")}} in dieser Reihenfolge setzt. Sie legt den oberen, rechten, unteren und linken Bildlaufabstand eines Scrollcontainers fest.

Nützlich bei der Erstellung von Scroll-Snap-Containern ermöglicht die `scroll-padding`-Eigenschaft das Festlegen von Versätzen für den _optimalen Ansichtsbereich_ des Scrollports: den Bereich, der als Zielbereich für die Platzierung von Elementen im Sichtfeld des Benutzers dient. Dies ermöglicht das Erstellen von Einzügen im Scrollport, um Platz für Objekte zu schaffen, die den Inhalt verdecken könnten, wie z.B. fest positionierte Werkzeugleisten oder Seitenleisten, oder um mehr Abstand zwischen einem anvisierten Element und den Rändern des Scrollports zu schaffen.

Während diese Eigenschaft im [CSS-Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Modul definiert ist, gilt sie für alle Scrollcontainer, unabhängig vom Wert der {{cssxref("scroll-snap-type")}}-Eigenschaft.

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
- [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Modul
- [CSS Überlauf](/de/docs/Web/CSS/Guides/Overflow)-Modul
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)-Modul
