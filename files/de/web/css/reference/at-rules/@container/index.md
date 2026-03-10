---
title: "@container"
slug: Web/CSS/Reference/At-rules/@container
l10n:
  sourceCommit: c55c9e2191ad434c496c3a1edd323f8ba24486d6
---

Die **`@container`**-Regel in [CSS](/de/docs/Web/CSS) ist eine [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules), die Styles auf einen [Einschließungskontext](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts) unter einer Bedingung anwendet. Stil-Deklarationen werden durch eine Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung wahr ist. Die Bedingung wird bewertet, wenn sich die abgefragte Containergröße, [`<style-feature>`](#containerstile-abfragen) oder der Scrollzustand ändert.

Die {{cssxref("container-name")}} Eigenschaft gibt eine Liste von Abfrage-Container-Namen an. Diese Namen können von `@container`-Regeln verwendet werden, um zu filtern, welche Abfragecontainer angesprochen werden. Der optionale, groß- und kleinschreibungsempfindliche `<container-name>` filtert die Abfragecontainer, die von der Abfrage angesprochen werden.

Sobald ein geeigneter Abfragecontainer für ein Element ausgewählt wurde, wird jede Containereigenschaft in der `<container-condition>` gegen diesen Abfragecontainer bewertet.

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
  - : Ein optionaler `<container-name>` und ein `<container-query>`. Stile, die im `<stylesheet>` definiert sind, werden angewendet, wenn die Bedingung wahr ist.
    - `<container-name>`
      - : Optional. Der Name des Containers, auf den die Stile angewendet werden, wenn die Abfrage als wahr bewertet wird, als {{cssxref("ident")}} angegeben.
    - `<container-query>`
      - : Eine Reihe von Funktionen, die gegen den Abfragecontainer bewertet werden, wenn sich die Größe, [`<style-feature>`](#containerstile-abfragen) oder Scrollzustand des Containers ändert.

### Logische Schlüsselwörter in Containerabfragen

Logische Schlüsselwörter können verwendet werden, um die Containerbedingung zu definieren:

- `and` kombiniert zwei oder mehr Bedingungen.
- `or` kombiniert zwei oder mehr Bedingungen.
- `not` verneint die Bedingung. Nur eine 'not'-Bedingung ist pro Containerabfrage erlaubt und kann nicht mit den Schlüsselwörtern `and` oder `or` verwendet werden.

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

### Benannte Einschließungskontexte

Ein Einschließungskontext kann mit der {{cssxref("container-name")}} Eigenschaft benannt werden.

```css
.post {
  container-name: sidebar;
  container-type: inline-size;
}
```

Die Kurzschreibweise dafür ist {{cssxref("container")}} in der Form `container: <name> / <type>`, zum Beispiel:

```css
.post {
  container: sidebar / inline-size;
}
```

In Containerabfragen wird die {{cssxref("container-name")}} Eigenschaft verwendet, um die Menge der Container auf diejenigen zu filtern, die einen übereinstimmenden Abfrage-Container-Namen haben:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Verwendung und zu Namensbeschränkungen sind auf der Seite {{cssxref("container-name")}} beschrieben.

### Deskriptoren

Die `<container-condition>`-Abfragen beinhalten [Größe](#größe-container-deskriptoren) und [Scrollzustand](#scroll-zustand_container-deskriptoren) Container-Deskriptoren.

#### Größe-Container-Deskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größenabfragen enthalten, jede in einem Satz von Klammern. Eine Größenabfrage beinhaltet einen Größen-Deskriptor, einen Wert und — je nach Deskriptor — einen Vergleichsoperator. Die Abfragen messen immer das [Inhaltsfeld](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) als den Vergleich. Die Syntax für das Einbeziehen mehrerer Bedingungen ist dieselbe wie für {{cssxref("@media")}} Größenfunktionen-Abfragen.

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
  - : Das {{cssxref("aspect-ratio")}} des Containers, berechnet als Breite zu Höhe des Containers, ausgedrückt als {{cssxref("ratio")}}-Wert.

- `block-size`
  - : Das {{cssxref("block-size")}} des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

- `height`
  - : Die Höhe des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

- `inline-size`
  - : Das {{cssxref("inline-size")}} des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

- `orientation`
  - : Die [Orientierung](/de/docs/Web/CSS/Reference/At-rules/@media/orientation) des Containers, entweder `landscape` oder `portrait`.

- `width`
  - : Die Breite des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

#### Scroll-Zustand Container-Deskriptoren

Scroll-Zustand Container-Deskriptoren werden innerhalb der `<container-condition>` in einem Klammerpaar nach dem `scroll-state` Schlüsselwort spezifiziert, zum Beispiel:

```css
@container scroll-state(scrollable: top) {
  /* … */
}
@container scroll-state(scrolled: block-end) {
  /* … */
}
@container scroll-state(stuck: inline-end) {
  /* … */
}
@container scroll-state(snapped: both) {
  /* … */
}
```

Unterstützte Schlüsselwörter für Scroll-Zustand Container-Deskriptoren umfassen {{Glossary("physical_properties", "physikalische")}} und {{Glossary("flow_relative_values", "fluss-relative")}} Werte.

- `scrollable`
  - : Prüft, ob der Container in der angegebenen Richtung durch Benutzerinitiiertes Scrollen, wie durch Ziehen der Bildlaufleiste oder Verwendung einer Trackpad-Geste, gescrollt werden kann. Mit anderen Worten, gibt es in der angegebenen Richtung überfließenden Inhalt, zu dem gescrollt werden kann? Gültige `scrollable`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder kann in keiner Richtung gescrollt werden.
    - `top`
      - : Der Container kann zu seiner oberen Kante gescrollt werden.
    - `right`
      - : Der Container kann zu seiner rechten Kante gescrollt werden.
    - `bottom`
      - : Der Container kann zu seiner unteren Kante gescrollt werden.
    - `left`
      - : Der Container kann zu seiner linken Kante gescrollt werden.
    - `x`
      - : Der Container kann horizontal zu seinen linken oder rechten Kanten gescrollt werden, oder zu beiden.
    - `y`
      - : Der Container kann vertikal zu seinen oberen oder unteren Kanten gescrollt werden, oder zu beiden.
    - `block-start`
      - : Der Container kann zu seiner Blockstart-Kante gescrollt werden.
    - `block-end`
      - : Der Container kann zu seiner Blockend-Kante gescrollt werden.
    - `inline-start`
      - : Der Container kann zu seiner Inlinestart-Kante gescrollt werden.
    - `inline-end`
      - : Der Container kann zu seiner Inlineend-Kante gescrollt werden.
    - `block`
      - : Der Container kann in seiner Blockrichtung zu seinen Blockstart- oder Blockend-Kanten gescrollt werden, oder zu beiden.
    - `inline`
      - : Der Container kann in seiner Inlinerichtung zu seinen Inlinestart- oder Inlineend-Kanten gescrollt werden, oder zu beiden.

    Wenn der Test erfolgreich ist, werden die Regeln im `@container` Block auf Nachkommen des Scroll-Containers angewendet.

    Um zu bewerten, ob ein Container scrollbar ist, ohne sich um die Richtung zu kümmern, verwenden Sie den `none` Wert mit dem `not` Operator:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `scrolled`
  - : Prüft, ob der Container zuletzt in eine bestimmte Richtung gescrollt wurde. Gültige `scrolled`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder wurde zuvor in keiner Richtung gescrollt.
    - `top`
      - : Der Container wurde zuletzt zu seiner oberen Kante gescrollt.
    - `right`
      - : Der Container wurde zuletzt zu seiner rechten Kante gescrollt.
    - `bottom`
      - : Der Container wurde zuletzt zu seiner unteren Kante gescrollt.
    - `left`
      - : Der Container wurde zuletzt zu seiner linken Kante gescrollt.
    - `x`
      - : Der Container wurde zuletzt zu seinen linken oder rechten Kanten gescrollt.
    - `y`
      - : Der Container wurde zuletzt zu seinen oberen oder unteren Kanten gescrollt.
    - `block-start`
      - : Der Container wurde zuletzt zu seiner Blockstart-Kante gescrollt.
    - `block-end`
      - : Der Container wurde zuletzt zu seiner Blockend-Kante gescrollt.
    - `inline-start`
      - : Der Container wurde zuletzt zu seiner Inlinestart-Kante gescrollt.
    - `inline-end`
      - : Der Container wurde zuletzt zu seiner Inlineend-Kante gescrollt.
    - `block`
      - : Der Container wurde zuletzt zu seinen Blockstart- oder Blockend-Kanten gescrollt, oder zu beiden.
    - `inline`
      - : Der Container wurde zuletzt zu seinen Inlinestart- oder Inlineend-Kanten gescrollt, oder zu beiden.

    Wenn der Test erfolgreich ist, werden die Regeln im `@container` Block auf die Nachkommen des Scroll-Containers angewendet.

    Um zu bewerten, ob ein Container kürzlich gescrollt wurde, ohne sich um die Richtung zu kümmern, verwenden Sie den `none` Wert mit dem `not` Operator:

    ```css
    @container not scroll-state(scrolled: none) {
      /* … */
    }
    ```

- `snapped`
  - : Prüft, ob der Container an einen [Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Container-Ahnen entlang der angegebenen Achse geschnappt wird. Gültige `snapped`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein Scroll {{Glossary("Scroll_snap#snap_target", "Snap Target")}} für seinen Ahnencontainer. Bei einer `snapped: none` Abfrage werden Container, die _Snap-Ziele_ sind, nicht die `@container` Stile anwenden, während Nicht-Snap-Ziele _die_ Stile anwenden werden.
    - `x`
      - : Der Container ist ein horizontales Scroll-Snap-Ziel für seinen Ahnencontainer, das heißt, er wird horizontal zu seinem Ahnen hin geschnappt.
    - `y`
      - : Der Container ist ein vertikales Scroll-Snap-Ziel für seinen Ahnencontainer, das heißt, er wird vertikal zu seinem Ahnen hin geschnappt.
    - `block`
      - : Der Container ist ein Block-Achsen-Scroll-Snap-Ziel für seinen Ahnencontainer, das heißt, er wird in der Blockrichtung zu seinem Ahnen hin geschnappt.
    - `inline`
      - : Der Container ist ein Inline-Achsen-Scroll-Snap-Ziel für seinen Ahnencontainer, das heißt, er wird in der Inlinerichtung zu seinem Ahnen hin geschnappt.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch ein vertikales Scroll-Snap-Ziel für seinen Ahnencontainer und wird in beide Richtungen zu seinem Ahnen hin geschnappt. Der Container wird nicht übereinstimmen, wenn er nur in einer einzigen Richtung zu seinem Ahnen geschnappt wird.

    Um einen Container mit einer `snapped` Scroll-State-Abfrage, die nicht `none` ist, zu bewerten, muss es sich um einen Container mit einem Ahnen-Scroll-Container handeln, der einen {{cssxref("scroll-snap-type")}} Wert ungleich `none` hat. Eine `snapped: none` Abfrage stimmt auch dann überein, wenn es keinen Ahnen-Scroll-Container gibt.

    Bewertungen finden statt, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignisse auf dem Scroll-Snap-Container ausgelöst werden. Wenn der Test erfolgreich ist, werden die Regeln im `@container` Block auf Nachkommen des Containers angewendet.

    Um zu bewerten, ob ein Container ein Snap-Ziel ist, ohne sich um die Richtung zu kümmern, verwenden Sie den `none` Wert mit dem `not` Operator:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`
  - : Prüft, ob ein Container mit einem {{cssxref("position")}} Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an einer Kante seines Scroll-Container-Ahnen angeklebt ist. Gültige `stuck`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist an keine Kante seines Containers geklebt. Beachten Sie, dass `none` Abfragen auch dann zutreffen, wenn der Container keinen `position: sticky` Wert hat.
    - `top`
      - : Der Container ist an die obere Kante seines Containers geklebt.
    - `right`
      - : Der Container ist an die rechte Kante seines Containers geklebt.
    - `bottom`
      - : Der Container ist an die untere Kante seines Containers geklebt.
    - `left`
      - : Der Container ist an die linke Kante seines Containers geklebt.
    - `block-start`
      - : Der Container ist an die Blockstart-Kante seines Containers geklebt.
    - `block-end`
      - : Der Container ist an die Blockend-Kante seines Containers geklebt.
    - `inline-start`
      - : Der Container ist an die Inlinestart-Kante seines Containers geklebt.
    - `inline-end`
      - : Der Container ist an die Inlineend-Kante seines Containers geklebt.

    Um einen Container mit einer `stuck` Scroll-State-Abfrage, die nicht `none` ist, zu bewerten, muss `position: sticky` auf ihn gesetzt werden und er muss sich innerhalb eines Scroll-Containers befinden. Wenn der Test erfolgreich ist, werden die Regeln im `@container` Block auf Nachkommen des `position: sticky` Containers angewendet.

    Es ist möglich, dass zwei gegenüberliegende Achsenwerte gleichzeitig zutreffen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Jedoch werden zwei Werte von gegenüberliegenden Kanten niemals gleichzeitig zutreffen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) {
      /* … */
    }
    ```

    Um zu bewerten, ob ein Container festgeklebt ist, ohne sich um die Richtung zu kümmern, verwenden Sie den `none` Wert mit dem `not` Operator:

    ```css
    @container not scroll-state(stuck: none) {
      /* … */
    }
    ```

## Formale Syntax

{{csssyntax}}

## Beispiele

### Styles basierend auf der Größe eines Containers festlegen

Betrachten Sie das folgende Beispiel eines Kartenkomponenten mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Containerkontext kann unter Verwendung der `container-type` Eigenschaft erstellt werden, in diesem Fall mit dem Wert `inline-size` in der `.post` Klasse. Sie können dann die `@container` At-Regel verwenden, um Stile auf das Element mit der `.card` Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

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

### Benannte Containerkontexte erstellen

Angesichts des folgenden HTML-Beispiels, das eine Kartenkomponente mit einem Titel und etwas Text ist:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Zuerst erstellen Sie einen Containerkontext unter Verwendung der `container-type` und `container-name` Eigenschaften. Die Kurzschreibweise für diese Deklaration ist auf der Seite {{cssxref("container")}} beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Anschließend diesen Container anvisieren, indem Sie den Namen zur Containerabfrage hinzufügen:

```css
@container summary (width >= 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Containerabfragen

Es ist nicht möglich, mehrere Container in einer einzigen Containerabfrage anzusprechen. Es ist möglich, Containerabfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage wird als wahr bewertet und wendet den deklarierten Stil an, wenn der Container namens `summary` breiter als `400px` ist und einen Ahnencontainer hat, der breiter als `800px` ist:

```css
@container summary (width > 400px) {
  @container (width > 800px) {
    /* <stylesheet> */
  }
}
```

### Containerstile-Abfragen

Containerabfragen können auch den berechneten Stil des Containerelements bewerten. Eine _Containerstilabfrage_ ist eine `@container` Abfrage, die eine oder mehrere `style()` funktionale Notationen verwendet. Die boolesche Syntax und das logische Kombinieren von Stileigenschaften zu einer Stilabfrage ist dieselbe wie bei [CSS-Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jedes `style()` ist ein einzelnes `<style-feature>`. Ein **`<style-feature>`** ist eine gültige CSS [Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Eine Stileigenschaft ohne Wert wird als wahr bewertet, wenn der berechnete Wert vom Anfangswert für die angegebene Eigenschaft abweicht.

Wenn das `<style-feature>`, das als Argument der `style()` Funktion übergeben wird, eine Deklaration ist, wird die Stilabfrage als wahr bewertet, wenn der Wert der Deklaration derselben dem berechneten Wert dieser Eigenschaft für den abgefragten Container entspric
