---
title: CSS-Eigenschaft `scroll-padding`
short-title: scroll-padding
slug: Web/CSS/Reference/Properties/scroll-padding
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`scroll-padding`** legt das Scroll-Padding auf allen Seiten eines Elements gleichzeitig fest. Sie gibt Versätze an, die den optimalen Sichtbereich eines Scrollports innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} definieren.

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

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{CSSXref("scroll-padding-bottom")}}
- {{CSSXref("scroll-padding-left")}}
- {{CSSXref("scroll-padding-right")}}
- {{CSSXref("scroll-padding-top")}}

## Syntax

```css
/* Keyword value */
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
  - : Ein nach innen gerichteter Versatz von der entsprechenden Kante des Scrollports als gültiger {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}.
- `auto`
  - : Der Versatz wird durch den User-Agent bestimmt. Im Allgemeinen wird dies `0px` sein, aber der User-Agent kann erkennen und etwas anderes tun, wenn ein Wert ungleich null angemessener ist.

## Beschreibung

Die Eigenschaft `scroll-padding` ist eine Kurzschreibweise, die {{CSSXref("scroll-padding-top")}}, {{CSSXref("scroll-padding-right")}}, {{CSSXref("scroll-padding-bottom")}} und {{CSSXref("scroll-padding-left")}} in dieser Reihenfolge festlegt und damit jeweils das obere, rechte, untere und linke Scroll-Padding eines Scroll-Containers setzt.

Die Eigenschaft `scroll-padding` ist nützlich beim Erstellen von Scroll-Snap-Containern und ermöglicht das Definieren von Versätzen für den _optimalen Sichtbereich_ des Scrollports: den Bereich, der als Zielbereich verwendet wird, um Elemente im Sichtbereich der Benutzerin oder des Benutzers zu platzieren. Dadurch können Sie Einzüge im Scrollport erstellen, um Platz für Objekte zu schaffen, die den Inhalt verdecken könnten, etwa Toolbars oder Sidebars mit fester Positionierung, oder um mehr Abstand zwischen einem zielgerichteten Element und den Kanten des Scrollports zu schaffen.

Obwohl sie im Modul [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap) definiert ist, gilt diese Eigenschaft für alle Scroll-Container, unabhängig vom Wert der Eigenschaft {{cssxref("scroll-snap-type")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass Inhalte durch einen festen Header verdeckt werden

Ein häufiger Anwendungsfall für `scroll-padding` besteht darin, zu verhindern, dass scrollende Inhalte durch einen Header mit fester Position verdeckt werden. Dieses Beispiel zeigt, wie Sie `scroll-padding` zu diesem Zweck verwenden.

#### HTML

Der Header enthält Links zu drei Abschnitten auf der Seite.

```html
<header>
  <nav>
    <a href="#section-1">Section 1</a>
    <a href="#section-2">Section 2</a>
    <a href="#section-3">Section 3</a>
  </nav>
</header>
<main>
  <section id="section-1">
    <h2>Section 1</h2>
    <p>Use the links in the header to jump to another section.</p>
  </section>
  <section id="section-2">
    <h2>Section 2</h2>
    <p>This heading remains visible below the fixed header.</p>
  </section>
  <section id="section-3">
    <h2>Section 3</h2>
    <p>This heading also remains visible below the fixed header.</p>
  </section>
</main>
```

#### CSS

```css hidden
header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
}

nav {
  display: flex;
  gap: 1rem;
}

section {
  box-sizing: border-box;
  padding: 1rem;
  min-height: 60vh;
}

h2 {
  margin-top: 0;
}
```

Der Header ist am oberen Rand des Viewports fixiert und `60px` hoch. Wir setzen `scroll-padding` auf dem Wurzelelement, um beim Scrollen zu einem Abschnitt am oberen Rand des Viewports `60px` zu reservieren, ohne Versatz auf den anderen Seiten.

```css
html {
  --navbar-height: 60px;

  scroll-padding: var(--navbar-height) 0 0;
  scroll-behavior: smooth;
}

header {
  position: fixed;
  top: 0;
  height: var(--navbar-height);
  width: 100%;
}
```

Wir fügen dem Hauptinhalt Padding hinzu, damit der erste Abschnitt beim anfänglichen Laden unterhalb des Headers beginnt.

```css
main {
  padding-top: var(--navbar-height);
}
```

#### Ergebnis

Klicken Sie auf die Links im Header, um zwischen den Abschnitten zu springen. Jeder Abschnitt erscheint unterhalb des Headers, sodass seine Überschrift sichtbar bleibt. Öffnen Sie dieses Beispiel im Playground, entfernen Sie die Zeile mit `scroll-padding` und klicken Sie erneut auf die Links, um zu sehen, wie der Header die Überschriften verdeckt.

{{EmbedLiveSample("Preventing content from being hidden by a fixed header", "100%", 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("scroll-snap-type")}}
- [Grundlegende Konzepte von scroll-snap](/de/docs/Web/CSS/Guides/Scroll_snap/Basic_concepts)
- Modul [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap)
- Modul [CSS overflow](/de/docs/Web/CSS/Guides/Overflow)
- Modul [CSS scroll-driven animations](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
