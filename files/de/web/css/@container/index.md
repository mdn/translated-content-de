---
title: "@container"
slug: Web/CSS/@container
l10n:
  sourceCommit: a69f9903e7444d42adcf2432eaa511c05761c757
---

{{CSSRef}}

Die **`@container`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) ist eine bedingte Gruppenregel, die Stile auf einen [Einschlusskontext](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) anwendet. Stil-Deklarationen werden nach einer Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung wahr ist. Die Bedingung wird evaluiert, wenn sich die abgefragte Containergröße, [`<style-feature>`](#container-stil-abfragen), oder der Scroll-Zustand ändert.

Die {{cssxref("container-name")}}-Eigenschaft gibt eine Liste von Abfragecontainer-Namen an. Diese Namen können von `@container`-Regeln verwendet werden, um zu filtern, welche Abfragecontainer anvisiert werden. Der optionale, groß- und kleinschreibungssensible `<container-name>` filtert die Abfragecontainer, die von der Abfrage anvisiert werden.

Sobald ein geeigneter Abfragecontainer für ein Element ausgewählt wurde, wird jedes Container-Feature im `<container-condition>` gegen diesen Abfragecontainer evaluiert.

## Syntax

Die `@container` at-rule hat die folgende Syntax:

```plain
@container <container-condition># {
  <stylesheet>
}
```

Zum Beispiel:

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

  - : Ein optionaler `<container-name>` und eine `<container-query>`. Die im `<stylesheet>` definierten Stile werden angewendet, wenn die Bedingung wahr ist.

    - `<container-name>`
      - : Optional. Der Name des Containers, auf den die Stile angewendet werden, wenn die Abfrage zu wahr evaluiert wird, angegeben als ein {{cssxref("ident")}}.
    - `<container-query>`
      - : Eine Menge von Features, die gegen den Abfragecontainer evaluiert werden, wenn sich die Größe, [`<style-feature>`](#container-stil-abfragen), oder der Scroll-Zustand des Containers ändert.

- `<stylesheet>`
  - : Ein Satz von CSS-Regeln oder Deklarationen.

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

### Benannte Einschlusskontexte

Ein Einschlusskontext kann mit der {{cssxref("container-name")}}-Eigenschaft benannt werden.

```css
.post {
  container-name: sidebar;
  container-type: inline-size;
}
```

Die Kurzschreibweise dafür ist die Verwendung von {{cssxref("container")}} in der Form `container: <name> / <type>`, zum Beispiel:

```css
.post {
  container: sidebar / inline-size;
}
```

In Container-Abfragen wird die {{cssxref("container-name")}}-Eigenschaft verwendet, um die Menge der Container auf diejenigen mit einem passenden Abfragecontainer-Namen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Verwendung und Namensbeschränkungen werden auf der {{cssxref("container-name")}}-Seite beschrieben.

### Deskriptoren

Die `<container-condition>`-Abfragen beinhalten [Größen-](#größen-container-deskriptoren) und [Scroll-Zustands-](#scroll-zustands-container-deskriptoren) Container-Deskriptoren.

#### Größen-Container-Deskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größenabfragen beinhalten, jeweils innerhalb eines Satzes von Klammern. Eine Größenabfrage umfasst einen Größen-Deskriptor, einen Wert und — je nach Deskriptor — einen Vergleichsoperator. Die Syntax für mehrere Bedingungen ist dieselbe wie für [`@media`](/de/docs/Web/CSS/@media)-Größenfeature-Abfragen.

```css
@container (min-width: 400px) { ... }
@container (orientation: landscape) and (width > 400px) { ... }
@container (15em <= block-size <= 30em) { ... }
```

- `aspect-ratio`

  - : Das {{cssxref("aspect-ratio")}} des Containers wird als Verhältnis von Breite zu Höhe des Containers als {{cssxref("ratio")}}-Wert berechnet.

- `block-size`

  - : Die {{cssxref("block-size")}} des Containers als {{cssxref("length")}}-Wert ausgedrückt.

- `height`

  - : Die Höhe des Containers als {{cssxref("length")}}-Wert ausgedrückt.

- `inline-size`

  - : Die {{cssxref("inline-size")}} des Containers als {{cssxref("length")}}-Wert ausgedrückt.

- `orientation`

  - : Die [Ausrichtung](/de/docs/Web/CSS/@media/orientation) des Containers, entweder `landscape` oder `portrait`.

- `width`
  - : Die Breite des Containers als {{cssxref("length")}}-Wert ausgedrückt.

#### Scroll-Zustands-Container-Deskriptoren

Scroll-Zustands-Container-Deskriptoren werden innerhalb der `<container-condition>` in einem Satz Klammern nach dem Schlüsselwort `scroll-state` angegeben, zum Beispiel:

```css
@container scroll-state(scrollable: top) { ... }
@container scroll-state(stuck: inline-end) { ... }
@container scroll-state(snapped: both) { ... }
```

Unterstützte Schlüsselwörter für Scroll-Zustands-Container-Deskriptoren umfassen physische und {{Glossary("flow_relative_values", "fluss-relative Werte")}}

- `scrollable`

  - : Fragt ab, ob der Container in die angegebene Richtung durch vom Nutzer initiiertes Scrollen, wie zum Beispiel durch Ziehen des Scrollbalkens oder Verwenden einer Trackpad-Geste gescrollt werden kann. Mit anderen Worten, ob es überlaufende Inhalte in der angegebenen Richtung gibt, zu denen gescrollt werden kann. Gültige `scrollable`-Werte umfassen die folgenden Schlüsselwörter:

    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder kann auf andere Weise nicht in irgendeine Richtung gescrollt werden.
    - `top`
      - : Der Container kann zur oberen Kante gescrollt werden.
    - `right`
      - : Der Container kann zur rechten Kante gescrollt werden.
    - `bottom`
      - : Der Container kann zur unteren Kante gescrollt werden.
    - `left`
      - : Der Container kann zur linken Kante gescrollt werden.
    - `x`
      - : Der Container kann horizontal zu einer oder beiden Kanten, links oder rechts, gescrollt werden.
    - `y`
      - : Der Container kann vertikal zu einer oder beiden Kanten, oben oder unten, gescrollt werden.
    - `block-start`
      - : Der Container kann zur `block-start`-Kante gescrollt werden.
    - `block-end`
      - : Der Container kann zur `block-end`-Kante gescrollt werden.
    - `inline-start`
      - : Der Container kann zur `inline-start`-Kante gescrollt werden.
    - `inline-end`
      - : Der Container kann zur `inline-end`-Kante gescrollt werden.
    - `block`
      - : Der Container kann im `block`-Richtung zu einer oder beiden Kanten, `block-start` oder `block-end`, gescrollt werden.
    - `inline`
      - : Der Container kann im `inline`-Richtung zu einer oder beiden Kanten, `inline-start` und `inline-end`, gescrollt werden.

    Wenn der Test bestanden wird, werden die Regeln im `@container`-Block auf Nachkommen des Scroll-Containers angewendet.

    Um zu evaluieren, ob ein Container scrollfähig ist, ohne sich um die Richtung zu kümmern, verwenden Sie den `none`-Wert mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrollable: none) { ... }
    ```

- `snapped`

  - : Fragt ab, ob der Container ist oder sein wird an einen [Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)-Container-Vorfahren auf der angegebenen Achse eingerastet. Gültige `snapped`-Werte umfassen die folgenden Schlüsselwörter:

    - `none`
      - : Der Container ist kein Scroll-{{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} für seinen Vorfahren-Scroll-Container. Bei der Implementierung einer `snapped: none`-Abfrage werden Container, die _Snap-Ziel_ für den Scroll-Container _sind_, den `@container`-Stilen _nicht_ unterliegen, während Nicht-Snap-Ziele die Stile _haben_.
    - `x`
      - : Der Container ist ein horizontales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, das heißt, er rastet horizontal an seinen Vorfahren ein.
    - `y`
      - : Der Container ist ein vertikales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, das heißt, er rastet vertikal an seinen Vorfahren ein.
    - `block`
      - : Der Container ist ein `block`-Achsen-Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, das heißt, er rastet in der `block`-Richtung an seinen Vorfahren ein.
    - `inline`
      - : Der Container ist ein `inline`-Achsen-Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, das heißt, er rastet in der `inline`-Richtung an seinen Vorfahren ein.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch ein vertikales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container und rastet in beiden Richtungen an seinen Vorfahren ein. Der Container wird nicht übereinstimmen, wenn er nur entlang der horizontalen _oder_ vertikalen Achse an seinen Vorfahren einrastet. Es muss beides sein.

    Um einen Container mit einer nicht `none` `snapped`-Scroll-Zustandsabfrage zu evaluieren, muss er ein Container mit einem Scroll-Container Vorfahren sein, der einen {{cssxref("scroll-snap-type")}}-Wert ungleich `none` hat. Eine `snapped: none`-Abfrage wird auch dann übereinstimmen, wenn es keinen Scroll-Container Vorfahren gibt.

    Auswertungen finden statt, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignisse auf dem Scroll-Snap-Container ausgelöst werden. Wenn der Test bestanden wird, werden die Regeln im `@container`-Block auf Nachkommen des Containers angewendet.

    Um zu evaluieren, ob ein Container ein Snap-Ziel ist, ohne sich um die Richtung zu kümmern, verwenden Sie den `none`-Wert mit dem `not`-Operator:

    ```css
    @container not scroll-state(snapped: none) { ... }
    ```

- `stuck`

  - : Fragt ab, ob ein Container mit einem {{cssxref("position")}}-Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an einem Rand seines scrollenden Container-Vorfahrens festhängt. Gültige `stuck`-Werte umfassen die folgenden Schlüsselwörter:

    - `none`
      - : Der Container hängt nicht an einem Rand seines Containers fest. Beachten Sie, dass `none`-Abfragen auch dann übereinstimmen, wenn der Container nicht `position: sticky` gesetzt hat.
    - `top`
      - : Der Container hängt am oberen Rand seines Containers fest.
    - `right`
      - : Der Container hängt am rechten Rand seines Containers fest.
    - `bottom`
      - : Der Container hängt am unteren Rand seines Containers fest.
    - `left`
      - : Der Container hängt am linken Rand seines Containers fest.
    - `block-start`
      - : Der Container hängt am `block-start`-Rand seines Containers fest.
    - `block-end`
      - : Der Container hängt am `block-end`-Rand seines Containers fest.
    - `inline-start`
      - : Der Container hängt am `inline-start`-Rand seines Containers fest.
    - `inline-end`
      - : Der Container hängt am `inline-end`-Rand seines Containers fest.

    Um einen Container mit einer nicht `none` `stuck`-Scroll-Zustandsabfrage zu evaluieren, muss er `position: sticky` gesetzt haben und in einem Scroll-Container sein. Wenn der Test bestanden wird, werden die Regeln im `@container`-Block auf Nachkommen des `position: sticky` Containers angewendet.

    Es ist möglich, dass zwei Werte aus gegenüberliegenden Achsen gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) { ... }
    ```

    Allerdings werden zwei Werte aus gegenüberliegenden Kanten niemals gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) { ... }
    ```

    Um zu evaluieren, ob ein Container feststeckt, ohne sich um die Richtung zu kümmern, verwenden Sie den `none`-Wert mit dem `not`-Operator:

    ```css
    @container not scroll-state(stuck: none) { ... }
    ```

## Formale Syntax

{{csssyntax}}

## Beispiele

### Styles basierend auf der Größe eines Containers festlegen

Betrachten Sie das folgende Beispiel einer Kartenkomponente mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Container-Kontext kann mit der `container-type`-Eigenschaft erstellt werden, in diesem Fall wird der `inline-size`-Wert für die `.post`-Klasse verwendet. Sie können dann die `@container`-At-Regel verwenden, um Stile auf das Element mit der `.card`-Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

```js hidden
const post = document.querySelector(".post");
const span = document.createElement("span");
span.textContent = ".post width: " + post.clientWidth + "px";
post.parentNode.insertBefore(span, post.nextSibling);
// update on resize
window.addEventListener("resize", () => {
  span.textContent = ".post width: " + post.clientWidth + "px";
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

Angenommen, das folgende HTML-Beispiel ist eine Kartenkomponente mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Zuerst erstellen Sie einen Container-Kontext mit den Eigenschaften `container-type` und `container-name`. Die Kurzschreibweise für diese Deklaration wird auf der {{cssxref("container")}}-Seite beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Als nächstes zielen Sie auf diesen Container, indem Sie den Namen zur Container-Abfrage hinzufügen:

```css
@container summary (min-width: 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Container-Abfragen

Es ist nicht möglich, mehrere Container in einer einzigen Container-Abfrage zu targeten. Es ist jedoch möglich, Container-Abfragen zu verschachteln, was den gleichen Effekt hat.

Die folgende Abfrage evaluiert zu wahr und wendet den Deklarierten Stil an, wenn der Container mit dem Namen `summary` breiter als `400px` ist und einen Vorfahren-Container hat, der breiter als `800px` ist:

```css
@container summary (min-width: 400px) {
  @container (min-width: 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stil-Abfragen

Container-Abfragen können auch den berechneten Stil des Containerelements auswerten. Eine _Container-Stil-Abfrage_ ist eine `@container`-Abfrage, die eine oder mehrere `style()`-funktionalen Notationen verwendet. Die boolesche Syntax und Logik, die Stil-Features zu einer Stil-Abfrage kombiniert, ist dieselbe wie für [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

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

Ein Stil-Feature ohne Wert evaluiert zu wahr, wenn der berechnete Wert von dem Initialwert für die gegebene Eigenschaft abweicht.

Wenn das `<style-feature>`, das als Argument der `style()`-Funktion übergeben wird, eine Deklaration ist, evaluiert die Stil-Abfrage zu wahr, wenn der Deklarationswert mit dem berechneten Wert dieser Eigenschaft für den abgefragten Container übereinstimmt. Andernfalls wird er zu falsch aufgelöst.

Die folgende Container-Abfrage überprüft, ob der {{cssxref("computed_value")}} der `--accent-color` des Container-Elements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, wird der äquivalente Hexadezimalcode `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, damit der Browser die berechneten Werte korrekt vergleichen kann.

Stil-Features, die eine Kurzschreibweise abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langschreibweise-Eigenschaften übereinstimmen, und andernfalls falsch. Zum Beispiel wird `@container style(border: 2px solid red)` zu wahr, wenn alle 12 Langschreibweise-Eigenschaften (`border-bottom-style`, etc.), die diese Kurzschreibweise ausmachen, wahr sind.

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Container-Stil-Abfrage zu falsch wird.

### Scroll-Zustandsabfragen

Sehen Sie sich [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) für vollständige Anleitungen zu Scroll-Zustandsabfrage-Beispielen an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Größen- und -Stil-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS-Einschlussmodul](/de/docs/Web/CSS/CSS_containment)
- [CSS at-rule Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
