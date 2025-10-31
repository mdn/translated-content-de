---
title: scroll-margin
slug: Web/CSS/Reference/Properties/scroll-margin
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`scroll-margin`** [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt alle Scrollränder eines Elements gleichzeitig und weist Werte zu, ähnlich wie die [`margin`](/de/docs/Web/CSS/Reference/Properties/margin)-Eigenschaft dies für die Ränder eines Elements tut.

{{InteractiveExample("CSS Demo: scroll-margin")}}

```css interactive-example-choice
scroll-margin: 0;
```

```css interactive-example-choice
scroll-margin: 20px;
```

```css interactive-example-choice
scroll-margin: 2em;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="scroller">
    <div>1</div>
    <div id="example-element">2</div>
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

## Zusammensetzende Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`scroll-margin-bottom`](/de/docs/Web/CSS/Reference/Properties/scroll-margin-bottom)
- [`scroll-margin-left`](/de/docs/Web/CSS/Reference/Properties/scroll-margin-left)
- [`scroll-margin-right`](/de/docs/Web/CSS/Reference/Properties/scroll-margin-right)
- [`scroll-margin-top`](/de/docs/Web/CSS/Reference/Properties/scroll-margin-top)

## Syntax

```css
/* <length> values */
scroll-margin: 10px;
scroll-margin: 1em 0.5em 1em 1em;

/* Global values */
scroll-margin: inherit;
scroll-margin: initial;
scroll-margin: revert;
scroll-margin: revert-layer;
scroll-margin: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Ein Abstand vom entsprechenden Rand des Scrollcontainers.

## Beschreibung

Sie können den Effekt von `scroll-margin` sehen, indem Sie zu einem Punkt zwischen zwei der "Seiten" des Beispielinhalts scrollen. Der für `scroll-margin` angegebene Wert bestimmt, wie viel von der Seite, die sich hauptsächlich außerhalb des {{Glossary("Scroll_snap#snapport", "snapport")}} befindet, sichtbar bleiben soll.

Die `scroll-margin`-Werte stellen somit Abstände dar, die den Scroll-Snap-Bereich definieren, der verwendet wird, um dieses Feld an den Snapport anzupassen. Der Scroll-Snap-Bereich wird bestimmt, indem das transformierte Border-Box genommen wird, sein rechteckiger Begrenzungsrahmen (achsenparallel im Koordinatenraum des Scrollcontainers) gefunden und dann die angegebenen Abstände hinzugefügt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Dieses Beispiel implementiert etwas sehr Ähnliches wie das interaktive Beispiel oben, außer dass wir Ihnen hier erklären, wie es implementiert ist.

Das Ziel hier ist es, vier horizontal scrollende Blöcke zu erstellen, von denen die zweiten und dritten fast, aber nicht ganz an die linke Seite jedes Blocks einrasten.

#### HTML

Das HTML enthält einen Scroller mit vier Kindern:

```html
<div class="scroller">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

#### CSS

Lassen Sie uns das CSS durchgehen. Der äußere Container ist folgendermaßen gestylt:

```css
.scroller {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: x mandatory;
}
```

Die Hauptaspekte, die für das Scrollen von Bedeutung sind, sind `overflow-x: scroll`, das sicherstellt, dass die Inhalte scrollen und nicht verdeckt werden, und `scroll-snap-type: x mandatory`, das vorschreibt, dass das Scrollen entlang der horizontalen Achse einrasten muss und das Scrollen immer auf einem Einrastpunkt zum Stillstand kommt.

Die Kindelemente sind wie folgt gestylt:

```css
.scroller > div {
  flex: 0 0 250px;
  width: 250px;
  background-color: rebeccapurple;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.scroller > div:nth-child(2n) {
  background-color: white;
  color: rebeccapurple;
}
```

Der relevanteste Teil hier ist `scroll-snap-align: start`, der angibt, dass die linken Kanten (die "Starts" entlang der x-Achse, in unserem Fall) die festgelegten Einrastpunkte sind.

Zuletzt spezifizieren wir die Scroll-Margin-Werte, einen anderen für das zweite und dritte Kindelement:

```css
.scroller > div:nth-child(2) {
  scroll-margin: 1rem;
}

.scroller > div:nth-child(3) {
  scroll-margin: 2rem;
}
```

Das bedeutet, dass beim Scrollen über die mittleren Kindelemente das Scrollen bis `1rem` außerhalb des linken Randes des zweiten `<div>` und `2rems` außerhalb des linken Randes des dritten `<div>` einrastet.

> [!NOTE]
> Hier setzen wir `scroll-margin` auf allen Seiten gleichzeitig, aber nur die Startkante ist wirklich relevant. Es würde hier ebenso gut funktionieren, nur an dieser einen Kante eine Scroll-Margin festzulegen, zum Beispiel mit `scroll-margin-inline-start: 1rem`, oder `scroll-margin: 0 0 0 1rem`.

#### Ergebnis

Versuchen Sie es selbst:

{{EmbedLiveSample('Basic_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)
- [Gut gesteuertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap)
