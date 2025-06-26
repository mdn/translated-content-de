---
title: "@container"
slug: Web/CSS/@container
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{CSSRef}}

Die **`@container`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ist eine bedingte Gruppenregel, die Stile auf einen [Containment-Kontext](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) anwendet. Stildeklarationen werden durch eine Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung wahr ist. Die Bedingung wird bewertet, wenn sich die Größe des angefragten Containers, [`<style-feature>`](#container-stilabfragen), oder der Scroll-Zustand ändert.

Die {{cssxref("container-name")}} Eigenschaft legt eine Liste von Abfrage-Container-Namen fest. Diese Namen können von `@container` Regeln verwendet werden, um zu filtern, welche Abfrage-Container anvisiert werden. Der optionale, groß-/kleinschreibungssensitive `<container-name>` filtert die Abfrage-Container, die durch die Abfrage anvisiert werden.

Sobald ein geeigneter Abfrage-Container für ein Element ausgewählt wurde, wird jedes Container-Feature in der `<container-condition>` gegen jenen Abfragecontainer beurteilt.

## Syntax

```plain
@container <container-condition># {
  <stylesheet>
}
```

Beispielsweise:

```css
/* With a <size-query> */
@container (width > 400px) {
  h2 {
    font-size: 1.5em;
  }
}

/* With an optional <container-name> */
@container tall (height > 30rem) {
  p {
    line-height: 1.6;
  }
}

/* With a <scroll-state> */
@container scroll-state(scrollable: top) {
  .back-to-top-link {
    visibility: visible;
  }
}

/* With a <container-name> and a <scroll-state> */
@container sticky-heading scroll-state(stuck: top) {
  h2 {
    background: purple;
    color: white;
  }
}

/* Multiple queries in a single condition */
@container (width > 400px) and style(--responsive: true) {
  h2 {
    font-size: 1.5em;
  }
}

/* Condition list */
@container card (width > 400px), style(--responsive: true), scroll-state(stuck: top) {
  h2 {
    font-size: 1.5em;
  }
}
```

### Werte

- `<container-condition>`
  - : Ein optionaler `<container-name>` und ein `<container-query>`. Im `<stylesheet>` definierte Stile werden angewendet, wenn die Bedingung wahr ist.
    - `<container-name>`
      - : Optional. Der Name des Containers, auf den die Stile angewendet werden, wenn die Abfrage mit "wahr" bewertet wird, angegeben als {{cssxref("ident")}}.
    - `<container-query>`
      - : Eine Menge von Features, die gegen den Abfrage-Container bewertet werden, wenn sich die Größe, [`<style-feature>`](#container-stilabfragen), oder der Scroll-Zustand des Containers ändert.

- `<stylesheet>`
  - : Eine Menge von CSS-Regeln oder -Deklarationen.

### Logische Schlüsselwörter in Container-Abfragen

Logische Schlüsselwörter können verwendet werden, um die Container-Bedingung zu definieren:

- `and` kombiniert zwei oder mehr Bedingungen.
- `or` kombiniert zwei oder mehr Bedingungen.
- `not` negiert die Bedingung. Pro Container-Abfrage ist nur eine 'not'-Bedingung erlaubt und kann nicht mit den Schlüsselwörtern `and` oder `or` verwendet werden.

```css
@container (width > 400px) and (height > 400px) {
  /* <stylesheet> */
}

@container (width > 400px) or (height > 400px) {
  /* <stylesheet> */
}

@container not (width < 400px) {
  /* <stylesheet> */
}
```

### Benannte Containment-Kontexte

Ein Containment-Kontext kann unter Verwendung der {{cssxref("container-name")}} Eigenschaft benannt werden.

```css
.post {
  container-name: sidebar;
  container-type: inline-size;
}
```

Die Kurzschreibweise dafür ist, {{cssxref("container")}} in der Form `container: <name> / <type>` zu verwenden, zum Beispiel:

```css
.post {
  container: sidebar / inline-size;
}
```

In Container-Abfragen wird die {{cssxref("container-name")}} Eigenschaft verwendet, um die Menge der Container auf diejenigen mit einem übereinstimmenden Abfrage-Container-Namen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Nutzung und Namensbeschränkungen werden auf der {{cssxref("container-name")}} Seite beschrieben.

### Deskriptoren

Die `<container-condition>` Abfragen beinhalten [Größen](#größencontainer-deskriptoren) und [Scroll-Zustand](#scroll-zustand_container-deskriptoren) Container-Deskriptoren.

#### Größencontainer-Deskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größenabfragen enthalten, jede in einem Satz von Klammern. Eine Größenabfrage umfasst einen Größen-Deskriptor, einen Wert und — abhängig vom Deskriptor — einen Vergleichsoperator. Die Syntax, mehrere Bedingungen einzuschließen, ist dieselbe wie bei [`@media`](/de/docs/Web/CSS/@media) Größen-Feature-Abfragen.

```css
@container (min-width: 400px) {
  /* … */
}
@container (orientation: landscape) and (width > 400px) {
  /* … */
}
@container (15em <= block-size <= 30em) {
  /* … */
}
```

- `aspect-ratio`
  - : Das {{cssxref("aspect-ratio")}} des Containers, berechnet als das Verhältnis der Breite zur Höhe des Containers, ausgedrückt als {{cssxref("ratio")}} Wert.

- `block-size`
  - : Die {{cssxref("block-size")}} des Containers, ausgedrückt als {{cssxref("length")}} Wert.

- `height`
  - : Die Höhe des Containers, ausgedrückt als {{cssxref("length")}} Wert.

- `inline-size`
  - : Die {{cssxref("inline-size")}} des Containers, ausgedrückt als {{cssxref("length")}} Wert.

- `orientation`
  - : Die [Ausrichtung](/de/docs/Web/CSS/@media/orientation) des Containers, entweder `landscape` oder `portrait`.

- `width`
  - : Die Breite des Containers, ausgedrückt als {{cssxref("length")}} Wert.

#### Scroll-Zustand Container-Deskriptoren

Scroll-Zustand Container-Deskriptoren werden innerhalb der `<container-condition>` in einem Satz von Klammern angegeben, der dem Schlüsselwort `scroll-state` folgt, zum Beispiel:

```css
@container scroll-state(scrollable: top) {
  /* … */
}
@container scroll-state(stuck: inline-end) {
  /* … */
}
@container scroll-state(snapped: both) {
  /* … */
}
```

Unterstützte Schlüsselwörter für Scroll-Zustand Container-Deskriptoren beinhalten physische und {{Glossary("flow_relative_values", "fluss-relative Werte")}}.

- `scrollable`
  - : Prüft, ob der Container in der gegebenen Richtung durch benutzerinitiierte Scroll-Vorgänge, wie z.B. durch Ziehen der Scrollleiste oder durch ein Trackpad-Geste, gescrollt werden kann. Anders ausgedrückt, gibt es überfließenden Inhalt in der gegebenen Richtung, der gescrollt werden kann? Gültige `scrollable` Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder kann anderweitig nicht in irgendeine Richtung gescrollt werden.
    - `top`
      - : Der Container kann zu seiner oberen Kante gescrollt werden.
    - `right`
      - : Der Container kann zu seiner rechten Kante gescrollt werden.
    - `bottom`
      - : Der Container kann zu seiner unteren Kante gescrollt werden.
    - `left`
      - : Der Container kann zu seiner linken Kante gescrollt werden.
    - `x`
      - : Der Container kann horizontal zu einer oder beiden seiner linken oder rechten Kanten gescrollt werden.
    - `y`
      - : Der Container kann vertikal zu einer oder beiden seiner oberen oder unteren Kanten gescrollt werden.
    - `block-start`
      - : Der Container kann zu seiner Block-Startkante gescrollt werden.
    - `block-end`
      - : Der Container kann zu seiner Block-Endkante gescrollt werden.
    - `inline-start`
      - : Der Container kann zu seiner Inline-Startkante gescrollt werden.
    - `inline-end`
      - : Der Container kann zu seiner Inline-Endkante gescrollt werden.
    - `block`
      - : Der Container kann in seiner Block-Richtung zu einer oder beiden seiner Block-Start- oder Block-Endkanten gescrollt werden.
    - `inline`
      - : Der Container kann in seiner Inline-Richtung zu einer oder beiden seiner Inline-Start- und Inline-Endkanten gescrollt werden.

    Wenn der Test besteht, werden die Regeln innerhalb des `@container` Blocks auf die Nachkommen des Scroll-Containers angewendet.

    Um zu bewerten, ob ein Container scrollbar ist, ohne sich um die Richtung zu kümmern, verwenden Sie den `none` Wert mit dem `not` Operator:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `snapped`
  - : Prüft, ob der Container an einen [Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) Container-Vorfahren entlang der gegebenen Achse angeschnappt ist oder wird. Gültige `snapped` Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein Scroll-{{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} für seinen Vorfahren-Scroll-Container. Beim Implementieren einer `snapped: none` Abfrage, werden Container, die _Snap-Ziele_ für den Scroll-Container sind, die `@container` Stile _nicht_ übernehmen, während Nicht-Snap-Ziele die Stile _übernehmen_ werden.
    - `x`
      - : Der Container ist ein horizontaler Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, das heißt, es snappt horizontal zu seinem Vorfahren.
    - `y`
      - : Der Container ist ein vertikaler Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, das heißt, er snappt vertikal zu seinem Vorfahren.
    - `block`
      - : Der Container ist ein Block-Achsen-Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, das heißt, er snappt in der Block-Richtung zu seinem Vorfahren.
    - `inline`
      - : Der Container ist ein Inline-Achsen-Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, das heißt, er snappt in der Inline-Richtung zu seinem Vorfahren.
    - `both`
      - : Der Container ist sowohl ein horizontaler als auch ein vertikaler Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container und snappt in beide Richtungen zu seinem Vorfahren. Der Container wird nicht übereinstimmen, wenn er nur entlang der horizontalen _oder_ vertikalen Achse zu seinem Vorfahren snappt. Er muss in beiden sein.

    Um einen Container mit einer nicht-`none` `snapped` Scroll-Zustand Abfrage zu bewerten, muss es ein Container mit einem Scroll-Container-Vorfahren sein, das einen {{cssxref("scroll-snap-type")}} Wert hat, der nicht `none` ist. Eine `snapped: none` Abfrage wird übereinstimmen, auch wenn es keinen Scroll-Container-Vorfahren gibt.

    Bewertungen erfolgen, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignisse im Scroll-Snap-Container ausgelöst werden. Wenn der Test besteht, werden die Regeln innerhalb des `@container` Blocks auf die Nachkommen des Containers angewendet.

    Um zu bewerten, ob ein Container ein Snap-Ziel ist, ohne sich um die Richtung zu kümmern, verwenden Sie den `none` Wert mit dem `not` Operator:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`
  - : Prüft, ob ein Container mit einem {{cssxref("position")}} Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an einer Kante seines Scroll-Container-Vorfahren klebt. Gültige `stuck` Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist an keiner Kante seines Containers klebend. Beachten Sie, dass `none` Abfragen übereinstimmen, auch wenn der Container nicht `position: sticky` auf sich hat.
    - `top`
      - : Der Container klebt an der oberen Kante seines Containers.
    - `right`
      - : Der Container klebt an der rechten Kante seines Containers.
    - `bottom`
      - : Der Container klebt an der unteren Kante seines Containers.
    - `left`
      - : Der Container klebt an der linken Kante seines Containers.
    - `block-start`
      - : Der Container klebt an der Block-Startkante seines Containers.
    - `block-end`
      - : Der Container klebt an der Block-Endkante seines Containers.
    - `inline-start`
      - : Der Container klebt an der Inline-Startkante seines Containers.
    - `inline-end`
      - : Der Container klebt an der Inline-Endkante seines Containers.

    Um einen Container mit einer nicht-`none` `stuck` Scroll-Zustand Abfrage zu bewerten, muss es `position: sticky` auf sich haben und in einem Scroll-Container sein. Wenn der Test besteht, werden die Regeln innerhalb des `@container` Blocks auf die Nachkommen des `position: sticky` Containers angewendet.

    Es ist möglich, dass zwei Werte von entgegengesetzten Achsen gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Jedoch werden zwei Werte von entgegengesetzten Kanten niemals gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) {
      /* … */
    }
    ```

    Um zu bewerten, ob ein Container festklebt, ohne sich um die Richtung zu kümmern, verwenden Sie den `none` Wert mit dem `not` Operator:

    ```css
    @container not scroll-state(stuck: none) {
      /* … */
    }
    ```

## Formale Syntax

{{csssyntax}}

## Beispiele

### Stile basierend auf der Größe eines Containers festlegen

Betrachten Sie das folgende Beispiel eines Kartenkomponenten mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Container-Kontext kann durch die `container-type` Eigenschaft erstellt werden, in diesem Fall mit dem `inline-size` Wert auf der `.post` Klasse.
Sie können dann die `@container` At-Regel verwenden, um Stile auf das Element mit der `.card` Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

```js hidden
const post = document.querySelector(".post");
const span = document.createElement("span");
span.textContent = `.post width: ${post.clientWidth}px`;
post.parentNode.insertBefore(span, post.nextSibling);
// update on resize
window.addEventListener("resize", () => {
  span.textContent = `.post width: ${post.clientWidth}px`;
});
```

```css hidden
span {
  display: block;
  text-align: center;
}
.card {
  margin: 10px;
  border: 2px dotted;
  font-size: 1.5em;
}
.post {
  border: 2px solid;
}
```

```css
/* A container context based on inline size */
.post {
  container-type: inline-size;
}

/* Apply styles if the container is narrower than 650px */
@container (width < 650px) {
  .card {
    width: 50%;
    background-color: lightgray;
    font-size: 1em;
  }
}
```

{{EmbedLiveSample("Setting_styles_based_on_a_container's_size", "100%", 230)}}

### Erstellen von benannten Container-Kontexten

Gegeben sei das folgende HTML-Beispiel, das eine Kartenkomponente mit einem Titel und etwas Text ist:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Erstellen Sie zuerst einen Container-Kontext unter Verwendung der `container-type` und `container-name` Eigenschaften. Die Kurzschreibweise für diese Deklaration wird auf der {{cssxref("container")}} Seite beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Ziel setzen Sie dann diesen Container, indem Sie den Namen zur Container-Abfrage hinzufügen:

```css
@container summary (min-width: 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Container-Abfragen

Es ist nicht möglich, mehrere Container in einer einzigen Container-Abfrage anzusprechen. Es ist jedoch möglich, Container-Abfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage wird als wahr bewertet und wendet den deklarierten Stil an, wenn der Container, der `summary` genannt wird, breiter als `400px` ist und einen Vorfahrer-Container hat, der breiter als `800px` ist:

```css
@container summary (min-width: 400px) {
  @container (min-width: 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stilabfragen

Container-Abfragen können auch den berechneten Stil des Container-Elements auswerten. Eine _Container-Stilabfrage_ ist eine `@container` Abfrage, die eine oder mehrere `style()` Funktionsnotationen verwendet. Die boolesche Syntax und Logik zur Kombination von Stil-Features zu einer Stil-Abfrage ist dieselbe wie für [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jedes `style()` ist ein einzelnes `<style-feature>`. Ein **`<style-feature>`** ist eine gültige CSS-[Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Ein Stil-Feature ohne Wert wird als wahr bewertet, wenn der berechnete Wert von dem Anfangswert der gegebenen Eigenschaft unterschiedlich ist.

Wenn das `<style-feature>`, das als Argument der `style()` Funktion übergeben wird, eine Deklaration ist, wird die Stil-Abfrage als wahr bewertet, wenn der Wert der Deklaration mit dem berechneten Wert dieser Eigenschaft für den abgefragten Container übereinstimmt. Andernfalls wird es als falsch ausgewertet.

Die folgende Containerabfrage überprüft, ob der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der `--accent-color` des Container-Elements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, wird der entsprechende hexadezimale Code `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, damit der Browser berechnete Werte ordnungsgemäß vergleichen kann.

Stil-Features, die eine Kurzschreibweise abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langhand-Eigenschaften übereinstimmen, und andernfalls falsch. Zum Beispiel, `@container style(border: 2px solid red)` wird als wahr bewertet, wenn alle 12 Langhand-Eigenschaften (`border-bottom-style`, etc.), die diese Kurzschreibweise ausmachen, wahr sind.

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Container-Stilabfrage falsch ist.

### Abfragen des Scroll-Zustandes

Siehe [Verwendung von Container Scroll-Zustand Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) für vollständige Anleitungen zu Beispielen von Scroll-Zustand Abfragen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustands-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS-Containment-Modul](/de/docs/Web/CSS/CSS_containment)
- [CSS-At-Regel Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
