---
title: CSS-Eigenschaft `scroll-padding`
short-title: scroll-padding
slug: Web/CSS/Reference/Properties/scroll-padding
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`scroll-padding`** [Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) setzt die Scroll-Abstände auf allen Seiten eines Elements gleichzeitig. Sie legt Versätze fest, die den optimalen Anzeigebereich eines Scrollport innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} definieren.

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

## Zu den Bestandteilen gehörende Eigenschaften

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
  - : Ein nach innen gerichteter Versatz vom entsprechenden Rand des Scrollports, als gültige {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}.
- `auto`
  - : Der Versatz wird vom Benutzeragenten bestimmt. Dieser wird in der Regel `0px` sein, aber der Benutzeragent kann auch einen anderen Wert verwenden, wenn ein Wert ungleich null passender ist.

## Beschreibung

Die `scroll-padding`-Eigenschaft ist eine Kurzform, die {{CSSXref("scroll-padding-top")}}, {{CSSXref("scroll-padding-right")}}, {{CSSXref("scroll-padding-bottom")}} und {{CSSXref("scroll-padding-left")}} in dieser Reihenfolge setzt und somit den oberen, rechten, unteren und linken Scroll-Abstand eines Scroll-Containers festlegt.

Nützlich beim Erstellen von Scroll-Snap-Containern ermöglicht die `scroll-padding`-Eigenschaft das Festlegen von Versätzen für den _optimalen Anzeigebereich_ des Scrollports: der Bereich, der als Zielregion dient, um Elemente für den Benutzer sichtbar zu platzieren. Dies erlaubt es Ihnen, Einrückungen im Scrollport zu schaffen, um Platz für Objekte zu machen, die den Inhalt verdecken könnten, wie z.B. fest positionierte Werkzeugleisten oder Seitenleisten, oder um mehr Abstand zwischen einem fokussierten Element und den Rändern des Scrollports zu schaffen.

Obwohl in dem [CSS scroll-snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Modul definiert, gilt diese Eigenschaft für alle Scroll-Container, unabhängig vom Wert der {{cssxref("scroll-snap-type")}}-Eigenschaft.

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
- [Grundkonzepte des Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap/Basic_concepts)
- [CSS scroll-snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul
- [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS scrollgetriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
