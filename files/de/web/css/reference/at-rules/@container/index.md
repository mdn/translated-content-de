---
title: "@container"
slug: Web/CSS/Reference/At-rules/@container
l10n:
  sourceCommit: 1dcf976e9b654679c762568812562b1a2361c755
---

Die **`@container`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ist eine bedingte Gruppenregel, die Stile auf einen [Eingrenzungskontext](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts) anwendet. Stil-Deklarationen werden durch eine Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung zutrifft. Die Bedingung wird ausgewertet, wenn sich die abgefragte Containergröße, [`<style-feature>`](#container-style-abfragen) oder der Scroll-Zustand ändert.

Die {{cssxref("container-name")}}-Eigenschaft spezifiziert eine Liste von Abfragecontainernamen. Diese Namen können durch `@container`-Regeln verwendet werden, um zu filtern, welche Abfragecontainer gezielt werden. Der optionale, groß-/kleinschreibungssensitive `<container-name>` filtert die Abfragecontainer, die durch die Abfrage gezielt werden.

Sobald ein geeigneter Abfragecontainer für ein Element ausgewählt wurde, wird für jede Containereigenschaft im `<container-condition>` die Bewertung gegenüber diesem Abfragecontainer durchgeführt.

## Syntax

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

### Parameter

- `<container-condition>`
  - : Ein optionaler `<container-name>` und ein `<container-query>`. Stile, die im `<stylesheet>` definiert sind, werden angewendet, wenn die Bedingung zutrifft.
    - `<container-name>`
      - : Optional. Der Name des Containers, auf den die Stile angewendet werden, wenn die Abfrage zu wahr ausgewertet wird, angegeben als ein {{cssxref("ident")}}.
    - `<container-query>`
      - : Ein Satz von Merkmalen, die bei einer Änderung der Größe, des [`<style-feature>`](#container-style-abfragen) oder des Scroll-Zustandes des Containers gegenüber dem Abfragecontainer bewertet werden.

### Logische Schlüsselwörter in Container-Abfragen

Logische Schlüsselwörter können verwendet werden, um die Container-Bedingung zu definieren:

- `and` kombiniert zwei oder mehr Bedingungen.
- `or` kombiniert zwei oder mehr Bedingungen.
- `not` negiert die Bedingung. Nur eine 'not'-Bedingung ist pro Container-Abfrage erlaubt und kann nicht mit den Schlüsselwörtern `and` oder `or` verwendet werden.

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

### Benannte Eingrenzungskontexte

Ein Eingrenzungskontext kann mit der {{cssxref("container-name")}}-Eigenschaft benannt werden.

```css
.post {
  container-name: sidebar;
  container-type: inline-size;
}
```

Die Kurzschreibweise hierfür ist die Verwendung von {{cssxref("container")}} in der Form `container: <name> / <type>`, zum Beispiel:

```css
.post {
  container: sidebar / inline-size;
}
```

In Container-Abfragen wird die {{cssxref("container-name")}}-Eigenschaft verwendet, um den Satz von Containern auf diejenigen mit einem passenden Abfragecontainernamen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Verwendung und zu Namensbeschränkungen sind auf der Seite {{cssxref("container-name")}} beschrieben.

### Deskriptoren

Die `<container-condition>`-Abfragen beinhalten [Größen](#größen-container-deskriptoren) und [Scroll-Zustands](#scroll-zustands-container-deskriptoren)-Container-Deskriptoren.

#### Größen-Container-Deskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größenzabfragen enthalten, jede innerhalb eines Satzes von Klammern. Eine Größenzabfrage beinhaltet einen Größen-Deskriptor, einen Wert und – je nach Deskriptor – einen Vergleichsoperator. Die Abfragen messen immer die [Content-Box](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) als Vergleich. Die Syntax für die Einbeziehung mehrerer Bedingungen ist die gleiche wie bei [`@media`](/de/docs/Web/CSS/Reference/At-rules/@media)-Größenmerkmal-Abfragen.

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
  - : Das {{cssxref("aspect-ratio")}} des Containers berechnet als Breite zu Höhe des Containers, ausgedrückt als ein {{cssxref("ratio")}}-Wert.

- `block-size`
  - : Die {{cssxref("block-size")}} des Containers, ausgedrückt als ein {{cssxref("length")}}-Wert.

- `height`
  - : Die Höhe des Containers, ausgedrückt als ein {{cssxref("length")}}-Wert.

- `inline-size`
  - : Die {{cssxref("inline-size")}} des Containers, ausgedrückt als ein {{cssxref("length")}}-Wert.

- `orientation`
  - : Die [Ausrichtung](/de/docs/Web/CSS/Reference/At-rules/@media/orientation) des Containers, entweder `landscape` oder `portrait`.

- `width`
  - : Die Breite des Containers, ausgedrückt als ein {{cssxref("length")}}-Wert.

#### Scroll-Zustands-Container-Deskriptoren

Scroll-Zustands-Container-Deskriptoren werden innerhalb der `<container-condition>` in einem Satz von Klammern nach dem Schlüsselwort `scroll-state` angegeben, zum Beispiel:

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

Unterstützte Schlüsselwörter für Scroll-Zustands-Container-Deskriptoren beinhalten physische und {{Glossary("flow_relative_values", "flussrelative Werte")}}

- `scrollable`
  - : Fragt ab, ob der Container in die angegebene Richtung durch benutzerinitiierte Scrollvorgänge, wie durch Ziehen des Scrollbalkens oder durch Nutzung einer Trackpad-Geste, gescrollt werden kann. Mit anderen Worten, gibt es in die gewünschte Richtung überlaufenden Inhalt, der gescrollt werden kann? Gültige `scrollable`-Werte beinhalten die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder kann auch nicht in irgendeine Richtung gescrollt werden.
    - `top`
      - : Der Container kann in Richtung seines oberen Randes gescrollt werden.
    - `right`
      - : Der Container kann in Richtung seines rechten Randes gescrollt werden.
    - `bottom`
      - : Der Container kann in Richtung seines unteren Randes gescrollt werden.
    - `left`
      - : Der Container kann in Richtung seines linken Randes gescrollt werden.
    - `x`
      - : Der Container kann horizontal in Richtung entweder seines linken oder rechten Randes gescrollt werden.
    - `y`
      - : Der Container kann vertikal in Richtung entweder seines oberen oder unteren Randes gescrollt werden.
    - `block-start`
      - : Der Container kann in Richtung seines block-start Randes gescrollt werden.
    - `block-end`
      - : Der Container kann in Richtung seines block-end Randes gescrollt werden.
    - `inline-start`
      - : Der Container kann in Richtung seines inline-start Randes gescrollt werden.
    - `inline-end`
      - : Der Container kann in Richtung seines inline-end Randes gescrollt werden.
    - `block`
      - : Der Container kann in seiner Block-Richtung entweder in Richtung seines block-start oder block-end Randes gescrollt werden.
    - `inline`
      - : Der Container kann in seiner Inline-Richtung entweder in Richtung seines inline-start oder inline-end Randes gescrollt werden.

    Falls der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des Scroll-Containers angewendet.

    Um zu evaluieren, ob ein Container scrollfähig ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `snapped`
  - : Fragt ab, ob der Container an ein [Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Container-Vorfahr entlang der angegebenen Achse angezogen wird. Gültige `snapped`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein Scroll-{{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} für seinen Vorfahr-Scroll-Container. Beim Implementieren einer `snapped: none`-Abfrage werden Container, die Snap-Ziele für den Scroll-Container sind, die `@container`-Stile _nicht_ anwenden, während Nicht-Snap-Ziele die Stile _anwenden_.
    - `x`
      - : Der Container ist ein horizontales Scroll-Snap-Ziel für seinen Vorfahr-Scroll-Container, das heißt, er snappt horizontal zu seinem Vorfahren.
    - `y`
      - : Der Container ist ein vertikales Scroll-Snap-Ziel für seinen Vorfahr-Scroll-Container, das heißt, er snappt vertikal zu seinem Vorfahren.
    - `block`
      - : Der Container ist ein Blockachsen-Scroll-Snap-Ziel für seinen Vorfahr-Scroll-Container, das heißt, er snappt zu seinem Vorfahren in Blockrichtung.
    - `inline`
      - : Der Container ist ein Inlineachsen-Scroll-Snap-Ziel für seinen Vorfahr-Scroll-Container, das heißt, er snappt zu seinem Vorfahren in Inlinerichtung.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch ein vertikales Scroll-Snap-Ziel für seinen Vorfahr-Scroll-Container und snappt zu seinem Vorfahren in beiden Richtungen. Der Container passt nicht, wenn er nur zu seinem Vorfahren entlang der horizontalen _oder_ vertikalen Achse snappt. Es muss beides sein.

    Um einen Container mit einer nicht-`none` `snapped`-Scroll-Zustandsabfrage zu evaluieren, muss es ein Container mit einem Scroll-Container-Vorfahr sein, der einen {{cssxref("scroll-snap-type")}}-Wert außer `none` aufweist. Eine `snapped: none`-Abfrage passt sogar, wenn es keinen Scroll-Container-Vorfahr gibt.

    Bewertungen erfolgen, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignisse auf dem Scroll-Snap-Container ausgelöst werden. Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des Containers angewendet.

    Um zu evaluieren, ob ein Container ein Snap-Ziel ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`
  - : Fragt ab, ob ein Container mit einem {{cssxref("position")}}-Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an einen Rand seines scrollenden Container-Vorfahrens fixiert ist. Gültige `stuck`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist an keinen Rändern seines Containers fixiert. Beachten Sie, dass `none`-Abfragen auch übereinstimmen, wenn der Container nicht `position: sticky` darauf gesetzt hat.
    - `top`
      - : Der Container ist an den oberen Rand seines Containers fixiert.
    - `right`
      - : Der Container ist an den rechten Rand seines Containers fixiert.
    - `bottom`
      - : Der Container ist an den unteren Rand seines Containers fixiert.
    - `left`
      - : Der Container ist an den linken Rand seines Containers fixiert.
    - `block-start`
      - : Der Container ist an den block-start Rand seines Containers fixiert.
    - `block-end`
      - : Der Container ist an den block-end Rand seines Containers fixiert.
    - `inline-start`
      - : Der Container ist an den inline-start Rand seines Containers fixiert.
    - `inline-end`
      - : Der Container ist an den inline-end Rand seines Containers fixiert.

    Um einen Container mit einer nicht-`none` `stuck` Scroll-Zustandsabfrage zu evaluieren, muss es `position: sticky` gesetzt haben und sich in einem Scroll-Container befinden. Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des `position: sticky`-Containers angewendet.

    Es ist möglich, dass zwei Werte von entgegengesetzten Achsen zur gleichen Zeit übereinstimmen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Allerdings werden zwei Werte von entgegengesetzten Rändern nie zur gleichen Zeit übereinstimmen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) {
      /* … */
    }
    ```

    Um zu evaluieren, ob ein Container fixiert ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(stuck: none) {
      /* … */
    }
    ```

## Formale Syntax

{{csssyntax}}

## Beispiele

### Stile basierend auf der Größe eines Containers setzen

Betrachten Sie das folgende Beispiel einer Kartenkomponente mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Eingrenzungskontext kann mit der `container-type`-Eigenschaft erstellt werden, in diesem Fall mit dem Wert `inline-size` auf der `.post`-Klasse. Sie können dann die `@container`-At-Regel verwenden, um Stile auf das Element mit der `.card`-Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

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

### Benannte Eingrenzungskontexte erstellen

Angesichts des folgenden HTML-Beispiels, das eine Kartenkomponente mit einem Titel und etwas Text ist:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Zuerst erstellen Sie einen Eingrenzungskontext mit den Eigenschaften `container-type` und `container-name`. Die Kurzschreibsyntax für diese Deklaration ist auf der Seite {{cssxref("container")}} beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Als nächstes zielen Sie mit der Namenseinfügung auf diesen Container in der Container-Abfrage:

```css
@container summary (width >= 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Container-Abfragen

Es ist nicht möglich, mehrere Container in einer einzigen Container-Abfrage zu adressieren. Es ist möglich, Container-Abfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage wird als wahr bewertet und wendet den deklarierten Stil an, wenn der Container namens `summary` breiter als `400px` ist und einen Vorfahren-Container größer als `800px` hat:

```css
@container summary (width > 400px) {
  @container (width > 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Style-Abfragen

Container-Abfragen können auch den berechneten Stil des Container-Elements bewerten. Eine _Container-Style-Abfrage_ ist eine `@container`-Abfrage, die eine oder mehrere `style()`-Funktionsnotationen verwendet. Die boolesche Syntax und die logische Kombination von Stil-Merkmalen zu einer Style-Abfrage ist dieselbe wie bei [CSS-Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jedes `style()` ist ein einzelnes `<style-feature>`. Ein **`<style-feature>`** ist eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Ein Stil-Merkmal ohne Wert wird als wahr bewertet, wenn der berechnete Wert sich vom Anfangswert für die gegebene Eigenschaft unterscheidet.

Wenn das `<style-feature>`, das als Argument der `style()`-Funktion übergeben wird, eine Deklaration ist, wird die Style-Abfrage als wahr bewertet, wenn der Wert der Deklaration mit dem berechneten Wert dieser Eigenschaft für den abgefragten Container übereinstimmt. Andernfalls wird sie als falsch aufgelöst.

Die folgende Container-Abfrage prüft, ob der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der `--accent-color` des Container-Elements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, wird der äquivalente hexadezimale Code `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, damit der Browser die berechneten Werte korrekt vergleichen kann.

Style-Merkmale, die eine Kurzschreibweise abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langschreib-Eigenschaften übereinstimmen, und falsch, andernfalls. Zum Beispiel löst `@container style(border: 2px solid red)` zu wahr auf, wenn alle 12 Langschreib-Eigenschaften (`border-bottom-style`, etc.), die diese Kurzschreibweise ausmachen, wahr sind.

Die globalen `revert` und `revert-layer` sind ungültig als Werte in einem `<style-feature>` und führen dazu, dass die Container-Style-Abfrage falsch ist.

### Abfragen zum Scroll-Zustand

Vollständige Beispiele zu Abfragen des Scroll-Zustands finden Sie unter [Verwenden von Container-Scroll-Zustands-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden von Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwenden von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwenden von Container-Scroll-Zustands-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS-Eingrenzungsmodul](/de/docs/Web/CSS/Guides/Containment)
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
