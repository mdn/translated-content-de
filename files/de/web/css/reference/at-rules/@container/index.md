---
title: "@container"
slug: Web/CSS/Reference/At-rules/@container
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`@container`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rules) ist eine bedingte Gruppenregel, die Stile auf einen [Containment-Kontext](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) anwendet.
Stildeklarationen werden durch eine Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung wahr ist.
Die Bedingung wird ausgewertet, wenn sich die abgefragte Containergröße, [`<style-feature>`](#container-stile-abfragen) oder der Scroll-Zustand ändert.

Die Eigenschaft {{cssxref("container-name")}} gibt eine Liste von Abfrage-Container-Namen an. Diese Namen können von `@container`-Regeln verwendet werden, um zu filtern, welche Abfrage-Container anvisiert werden. Der optionale, groß- und kleinschreibungssensitive `<container-name>` filtert die Abfrage-Container, die von der Abfrage anvisiert werden.

Sobald ein geeigneter Abfrage-Container für ein Element ausgewählt wurde, wird jede Container-Funktion in der `<container-condition>` gegen diesen Abfrage-Container ausgewertet.

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
      - : Optional. Der Name des Containers, auf den die Stile angewendet werden, wenn die Abfrage als wahr ausgewertet wird, angegeben als ein {{cssxref("ident")}}.
    - `<container-query>`
      - : Eine Reihe von Funktionen, die gegen den Abfrage-Container ausgewertet werden, wenn sich die Größe, [`<style-feature>`](#container-stile-abfragen) oder der Scroll-Zustand des Containers ändert.

### Logische Schlüsselwörter in Container-Abfragen

Logische Schlüsselwörter können verwendet werden, um die Container-Bedingung zu definieren:

- `and` kombiniert zwei oder mehrere Bedingungen.
- `or` kombiniert zwei oder mehrere Bedingungen.
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

Ein Containment-Kontext kann mit der Eigenschaft {{cssxref("container-name")}} benannt werden.

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

In Container-Abfragen wird die Eigenschaft {{cssxref("container-name")}} verwendet, um die Menge der Container auf diejenigen mit einem passenden Abfrage-Container-Namen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Nutzung und Namenbeschränkungen sind auf der Seite {{cssxref("container-name")}} beschrieben.

### Deskriptoren

Die `<container-condition>`-Abfragen umfassen [Größen](#größen-container-deskriptoren) und [Scroll-Zustand](#scroll-zustand-container-deskriptoren) Container-Deskriptoren.

#### Größen-Container-Deskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größenabfragen enthalten, jeweils in einem Set von Klammern. Eine Größenabfrage umfasst einen Größen-Deskriptor, einen Wert und - je nach Deskriptor - einen Vergleichsoperator. Die Abfragen messen immer die [Inhaltsbox](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) als Vergleich. Die Syntax zum Einfügen mehrerer Bedingungen ist die gleiche wie bei [`@media`](/de/docs/Web/CSS/Reference/At-rules/@media) Größenmerkmalsabfragen.

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
  - : Das {{cssxref("aspect-ratio")}} des Containers berechnet als Verhältnis der Breite zur Höhe des Containers ausgedrückt als ein {{cssxref("ratio")}}-Wert.

- `block-size`
  - : Die {{cssxref("block-size")}} des Containers ausgedrückt als ein {{cssxref("length")}}-Wert.

- `height`
  - : Die Höhe des Containers ausgedrückt als ein {{cssxref("length")}}-Wert.

- `inline-size`
  - : Die {{cssxref("inline-size")}} des Containers ausgedrückt als ein {{cssxref("length")}}-Wert.

- `orientation`
  - : Die [Ausrichtung](/de/docs/Web/CSS/Reference/At-rules/@media/orientation) des Containers, entweder `landscape` oder `portrait`.

- `width`
  - : Die Breite des Containers ausgedrückt als ein {{cssxref("length")}}-Wert.

#### Scroll-Zustand-Container-Deskriptoren

Scroll-Zustand-Container-Deskriptoren werden innerhalb der `<container-condition>` angegeben, in einem Set von Klammern nach dem `scroll-state`-Schlüsselwort, zum Beispiel:

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

Unterstützte Schlüsselwörter für Scroll-Zustand-Container-Deskriptoren umfassen physische und {{Glossary("flow_relative_values", "flussrelative Werte")}}

- `scrollable`
  - : Fragt ab, ob der Container in die angegebene Richtung durch nutzergesteuertes Scrollen gescrollt werden kann, wie beispielsweise durch Ziehen des Scrollbars oder Verwenden einer Trackpad-Geste. Anders gesagt, gibt es überfließenden Inhalt in der angegebenen Richtung, zu dem gescrollt werden kann? Gültige `scrollable`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder kann anderweitig in keiner Richtung gescrollt werden.
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
      - : Der Container kann zu seiner Block-Start-Kante gescrollt werden.
    - `block-end`
      - : Der Container kann zu seiner Block-End-Kante gescrollt werden.
    - `inline-start`
      - : Der Container kann zu seiner Inline-Start-Kante gescrollt werden.
    - `inline-end`
      - : Der Container kann zu seiner Inline-End-Kante gescrollt werden.
    - `block`
      - : Der Container kann in seiner Block-Richtung zu seinen Block-Start- oder Block-End-Kanten gescrollt werden, oder zu beiden.
    - `inline`
      - : Der Container kann in seiner Inline-Richtung zu seinen Inline-Start- oder Inline-End-Kanten gescrollt werden, oder zu beiden.

    Wenn der Test bestanden wird, werden die Regeln im `@container`-Block auf die Nachfahren des Scroll-Containers angewendet.

    Um zu beurteilen, ob ein Container scrollbar ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `snapped`
  - : Fragt ab, ob der Container zu einem [Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)-Container-Vorfahren entlang der angegebenen Achse angepasst wird. Gültige `snapped`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein Scroll-{{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} für seinen Vorfahren-Scroll-Container. Bei der Implementierung einer `snapped: none`-Abfrage werden Container, die _Snap-Ziele_ für den Scroll-Container _sind_, die `@container`-Stile _nicht_ angewendet haben, während Nicht-Snap-Ziele _die_ Stile angewendet haben.
    - `x`
      - : Der Container ist ein horizontales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, das heißt, er wird horizontal an seinen Vorfahren angepasst.
    - `y`
      - : Der Container ist ein vertikales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, das heißt, er wird vertikal an seinen Vorfahren angepasst.
    - `block`
      - : Der Container ist ein Block-Achsen-Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, das heißt, er wird in der Block-Richtung an seinen Vorfahren angepasst.
    - `inline`
      - : Der Container ist ein Inline-Achsen-Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, das heißt, er wird in der Inline-Richtung an seinen Vorfahren angepasst.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch ein vertikales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container und wird in beide Richtungen an seinen Vorfahren angepasst. Der Container wird nicht übereinstimmen, wenn er nur in der horizontalen _oder_ vertikalen Achse an seinen Vorfahren angepasst wird. Es muss beides sein.

    Um einen Container mit einer nicht-`none` `snapped` Scroll-Zustands-Abfrage zu beurteilen, muss es ein Container mit einem Scroll-Container-Vorfahren sein, der einen {{cssxref("scroll-snap-type")}}-Wert ungleich `none` hat. Eine `snapped: none`-Abfrage wird übereinstimmen, selbst wenn es keinen Scroll-Container-Vorfahren gibt.

    Bewertungen erfolgen, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignisse auf dem Scroll-Snap-Container ausgelöst werden. Wenn der Test erfolgreich ist, werden die Regeln im `@container`-Block auf die Nachfahren des Containers angewendet.

    Um zu beurteilen, ob ein Container ein Snap-Ziel ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`
  - : Fragt ab, ob ein Container mit einem {{cssxref("position")}}-Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an einer Kante seines scrollenden Container-Vorfahren festgeklebt ist. Gültige `stuck`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container klebt an keiner Kante seines Containers fest. Beachten Sie, dass `none`-Abfragen übereinstimmen, selbst wenn der Container nicht `position: sticky` eingestellt hat.
    - `top`
      - : Der Container klebt an der oberen Kante seines Containers fest.
    - `right`
      - : Der Container klebt an der rechten Kante seines Containers fest.
    - `bottom`
      - : Der Container klebt an der unteren Kante seines Containers fest.
    - `left`
      - : Der Container klebt an der linken Kante seines Containers fest.
    - `block-start`
      - : Der Container klebt an der Block-Start-Kante seines Containers fest.
    - `block-end`
      - : Der Container klebt an der Block-End-Kante seines Containers fest.
    - `inline-start`
      - : Der Container klebt an der Inline-Start-Kante seines Containers fest.
    - `inline-end`
      - : Der Container klebt an der Inline-End-Kante seines Containers fest.

    Um einen Container mit einer nicht-`none` `stuck` Scroll-Zustands-Abfrage zu beurteilen, muss `position: sticky` auf ihm eingestellt sein und sich in einem Scroll-Container befinden. Wenn der Test erfolgreich ist, werden die Regeln im `@container`-Block auf die Nachfahren des `position: sticky` Containers angewendet.

    Es ist möglich, dass zwei Werte von gegenüberliegenden Achsen gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Doch zwei Werte von gegenüberliegenden Kanten werden nie gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) {
      /* … */
    }
    ```

    Um zu beurteilen, ob ein Container festgeklebt ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(stuck: none) {
      /* … */
    }
    ```

## Formale Syntax

{{csssyntax}}

## Beispiele

### Stile basierend auf der Größe eines Containers festlegen

Betrachten Sie das folgende Beispiel einer Kartenkomponente mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Container-Kontext kann mit der Eigenschaft `container-type` erstellt werden, in diesem Fall durch Verwendung des `inline-size` Werts in der `.post` Klasse.
Sie können dann die `@container` at-rule verwenden, um Stile auf das Element mit der `.card` Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

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

### Benannte Container-Kontexte erstellen

Angesichts des folgenden HTML-Beispiels, das eine Kartenkomponente mit einem Titel und etwas Text ist:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Erstellen Sie zunächst einen Container-Kontext unter Verwendung der Eigenschaften `container-type` und `container-name`.
Die Kurzschreibweise dieser Deklaration ist auf der Seite {{cssxref("container")}} beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Als nächstes zielen Sie auf diesen Container ab, indem Sie den Namen zur Container-Abfrage hinzufügen:

```css
@container summary (width >= 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Container-Abfragen

Es ist nicht möglich, mehrere Container in einer einzigen Container-Abfrage anzuzielen.
Es ist möglich, Container-Abfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage wird als wahr ausgewertet und wendet den deklarierten Stil an, wenn der Container namens `summary` breiter als `400px` ist und ein Vorfahren-Container breiter als `800px` ist:

```css
@container summary (width > 400px) {
  @container (width > 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stile-Abfragen

Container-Abfragen können auch den berechneten Stil des Container-Elements auswerten. Eine _Container-Stilabfrage_ ist eine `@container`-Abfrage, die eine oder mehrere `style()`-funktionale Notationen verwendet. Die boolesche Syntax und Logik zur Kombination von Stilmerkmalen in einer Stilabfrage ist die gleiche wie bei [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jedes `style()` ist ein einzelnes `<style-feature>`. Ein **`<style-feature>`** ist eine gültige CSS-[Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Ein Stilmerkmal ohne Wert wird als wahr ausgewertet, wenn der berechnete Wert von dem Initialwert für die gegebene Eigenschaft abweicht.

Wenn das `<style-feature>`, das als Argument der `style()`-Funktion übergeben wird, eine Deklaration ist, wird die Stilabfrage als wahr bewertet, wenn der Wert der Deklaration derselbe ist wie der berechnete Wert dieser Eigenschaft für den abgefragten Container. Andernfalls löst sie sich zu false auf.

Die folgende Container-Abfrage überprüft, ob der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der `--accent-color` des Container-Elements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, wird der entsprechende hexadezimale Code `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, sodass der Browser die berechneten Werte ordnungsgemäß vergleichen kann.

Stilmerkmale, die eine Kurzform-Eigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langform-Eigenschaften übereinstimmen, und andernfalls falsch. Zum Beispiel wird `@container style(border: 2px solid red)` als wahr bewertet, wenn alle 12 Langform-Eigenschaften (`border-bottom-style`, etc.), die diese Kurzform bilden, wahr sind.

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und lassen die Container-Stilabfrage auf false.

### Scroll-Zustands-Abfragen

Siehe [Verwendung von Container-Scroll-Zustands-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) für vollständige Durchläufe von Scroll-Zustands-Abfrage-Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustands-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS-Containment-Modul](/de/docs/Web/CSS/CSS_containment)
- [CSS-At-Regeln-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
