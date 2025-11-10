---
title: "@container"
slug: Web/CSS/Reference/At-rules/@container
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`@container`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules) ist eine bedingte Gruppenregel, die Stile auf einen [Einschlusskontext](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts) anwendet. Stil-Deklarationen werden durch eine Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung zutrifft. Die Bedingung wird bewertet, wenn sich die abgefragte Containergröße, [`<style-feature>`](#container-stilabfragen) oder der Scroll-Zustand ändern.

Die {{cssxref("container-name")}} Eigenschaft gibt eine Liste von Abfragecontainernamen an. Diese Namen können durch `@container` Regeln verwendet werden, um zu filtern, welche Abfragecontainer angesprochen werden. Der optionale, groß- und kleinschreibungssensitive `<container-name>` filtert die Abfragecontainer, die durch die Abfrage angesprochen werden.

Sobald ein geeigneter Abfragecontainer für ein Element ausgewählt wurde, wird jedes Containermerkmal im `<container-condition>` gegen diesen Abfragecontainer bewertet.

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
  - : Ein optionaler `<container-name>` und ein `<container-query>`. Im `<stylesheet>` definierte Stile werden angewendet, wenn die Bedingung wahr ist.
    - `<container-name>`
      - : Optional. Der Name des Containers, auf den die Stile angewendet werden, wenn die Abfrage als wahr ausgewertet wird, angegeben als ein {{cssxref("ident")}}.
    - `<container-query>`
      - : Eine Reihe von Merkmalen, die gegen den Abfragecontainer bewertet werden, wenn sich die Größe, [`<style-feature>`](#container-stilabfragen) oder der Scroll-Zustand des Containers ändert.

### Logische Schlüsselwörter in Containerabfragen

Logische Schlüsselwörter können verwendet werden, um die Containerbedingung zu definieren:

- `and` kombiniert zwei oder mehr Bedingungen.
- `or` kombiniert zwei oder mehr Bedingungen.
- `not` negiert die Bedingung. Nur eine 'not'-Bedingung ist pro Containerabfrage erlaubt und kann nicht mit den `and` oder `or` Schlüsselwörtern verwendet werden.

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

Ein Einschlusskontext kann mit der {{cssxref("container-name")}} Eigenschaft benannt werden.

```css
.post {
  container-name: sidebar;
  container-type: inline-size;
}
```

Die Kurzform-Syntax hierfür ist die Verwendung von {{cssxref("container")}} in der Form `container: <name> / <type>`, zum Beispiel:

```css
.post {
  container: sidebar / inline-size;
}
```

In Containerabfragen wird die {{cssxref("container-name")}} Eigenschaft verwendet, um die Menge der Container auf diejenigen mit einem passenden Abfragecontainernamen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Verwendung und Namensbeschränkungen sind auf der {{cssxref("container-name")}} Seite beschrieben.

### Deskriptoren

Die `<container-condition>` Abfragen umfassen [Größe](#größe_der_containerdeskriptoren) und [Scroll-Zustand](#scroll-zustand_der_containerdeskriptoren) Containerdeskriptoren.

#### Größe der Containerdeskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größenabfragen enthalten, jede innerhalb eines Satzes von Klammern. Eine Größenabfrage beinhaltet einen Größendeskriptor, einen Wert und - abhängig vom Deskriptor - einen Vergleichsoperator. Die Abfragen messen immer die [Inhaltsbox](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) für den Vergleich. Die Syntax zur Aufnahme mehrerer Bedingungen entspricht der von [`@media`](/de/docs/Web/CSS/Reference/At-rules/@media) Größenmerkmalabfragen.

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

  - : Das {{cssxref("aspect-ratio")}} des Containers, berechnet als Breite zu Höhe des Containers, ausgedrückt als ein {{cssxref("ratio")}} Wert.

- `block-size`

  - : Die {{cssxref("block-size")}} des Containers, ausgedrückt als ein {{cssxref("length")}} Wert.

- `height`

  - : Die Höhe des Containers, ausgedrückt als ein {{cssxref("length")}} Wert.

- `inline-size`

  - : Die {{cssxref("inline-size")}} des Containers, ausgedrückt als ein {{cssxref("length")}} Wert.

- `orientation`

  - : Die [Ausrichtung](/de/docs/Web/CSS/Reference/At-rules/@media/orientation) des Containers, entweder `landscape` oder `portrait`.

- `width`
  - : Die Breite des Containers, ausgedrückt als ein {{cssxref("length")}} Wert.

#### Scroll-Zustand der Containerdeskriptoren

Scroll-Zustands-Containerdeskriptoren werden innerhalb der `<container-condition>` in einem Satz von Klammern nach dem `scroll-state` Schlüsselwort angegeben, zum Beispiel:

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

Unterstützte Schlüsselwörter für Scroll-Zustands-Containerdeskriptoren umfassen physische und {{Glossary("flow_relative_values", "flussrelative Werte")}}

- `scrollable`

  - : Überprüft, ob der Container in die angegebene Richtung durch benutzerinitiierte Scrollvorgänge gescrollt werden kann, wie z.B. durch Ziehen der Bildlaufleiste oder durch eine Gestenbedienung des Trackpads. Mit anderen Worten, gibt es in der angegebenen Richtung überfließenden Inhalt, der gescrollt werden kann? Gültige `scrollable` Werte umfassen die folgenden Schlüsselwörter:

    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder kann anderweitig nicht in irgendeine Richtung gescrollt werden.
    - `top`
      - : Der Container kann zu seinem oberen Rand hin gescrollt werden.
    - `right`
      - : Der Container kann zu seinem rechten Rand hin gescrollt werden.
    - `bottom`
      - : Der Container kann zu seinem unteren Rand hin gescrollt werden.
    - `left`
      - : Der Container kann zu seinem linken Rand hin gescrollt werden.
    - `x`
      - : Der Container kann horizontal zu einem oder beiden seiner linken oder rechten Ränder hin gescrollt werden.
    - `y`
      - : Der Container kann vertikal zu einem oder beiden seiner oberen oder unteren Ränder hin gescrollt werden.
    - `block-start`
      - : Der Container kann zu seinem Block-Start-Rand hin gescrollt werden.
    - `block-end`
      - : Der Container kann zu seinem Block-End-Rand hin gescrollt werden.
    - `inline-start`
      - : Der Container kann zu seinem Inline-Start-Rand hin gescrollt werden.
    - `inline-end`
      - : Der Container kann zu seinem Inline-End-Rand hin gescrollt werden.
    - `block`
      - : Der Container kann in seiner Blockrichtung zu einem oder beiden seiner Block-Start- oder Block-End-Ränder hin gescrollt werden.
    - `inline`
      - : Der Container kann in seiner Inline-Richtung zu einem oder beiden seiner Inline-Start- und Inline-End-Ränder hin gescrollt werden.

    Wenn der Test besteht, werden die Regeln innerhalb des `@container` Blocks auf Nachkommen des Scroll-Containers angewendet.

    Um zu bewerten, ob ein Container scrollbar ist, ohne sich über die Richtung Gedanken zu machen, verwenden Sie den Wert `none` mit dem `not` Operator:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `snapped`

  - : Überprüft, ob der Container an einen [Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Container-Vorfahren entlang der gegebenen Achse geschnappt wird. Gültige `snapped` Werte umfassen die folgenden Schlüsselwörter:

    - `none`
      - : Der Container ist kein Scroll {{Glossary("Scroll_snap#snap_target", "Schnappziel")}} für seinen Vorfahren-Scroll-Container. Wenn eine `snapped: none` Abfrage durchgeführt wird, werden Container, die _sind_ Schnappziele für den Scroll-Container _nicht_ die `@container` Stile angewendet, während an Nicht-Schnappziele _werden_ die Stile angewendet.
    - `x`
      - : Der Container ist ein horizontales Scroll-Schnappziel für seinen Vorfahren-Scroll-Container, d.h. er schnapp horizontal zu seinem Vorfahren.
    - `y`
      - : Der Container ist ein vertikales Scroll-Schnappziel für seinen Vorfahren-Scroll-Container, d.h. er schnapp vertikal zu seinem Vorfahren.
    - `block`
      - : Der Container ist ein Block-Achsen-Scroll-Schnappziel für seinen Vorfahren-Scroll-Container, d.h. er schnapp zu seinem Vorfahren in der Blockrichtung.
    - `inline`
      - : Der Container ist ein Inline-Achsen-Scroll-Schnappziel für seinen Vorfahren-Scroll-Container, d.h. er schnapp zu seinem Vorfahren in der Inlinerichtung.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch ein vertikales Scroll-Schnappziel für seinen Vorfahren-Scroll-Container und schnapp zu seinem Vorfahren in beiden Richtungen. Der Container wird nicht übereinstimmen, wenn er nur zu seinem Vorfahren entlang der horizontalen _oder_ vertikalen Achse schnapp. Er muss beide sein.

    Um einen Container mit einer nicht-`none` `snapped` Scroll-Zustandsabfrage zu bewerten, muss es sich um einen Container mit einem Scroll-Container-Vorfahren handeln, der einen {{cssxref("scroll-snap-type")}} Wert ungleich `none` hat. Eine `snapped: none` Abfrage wird übereinstimmen, auch wenn es keinen Scroll-Container-Vorfahren gibt.

    Bewertungen erfolgen, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignisse im Scroll-Snap-Container ausgelöst werden. Wenn der Test besteht, werden die Regeln innerhalb des `@container` Blocks auf Nachkommen des Containers angewendet.

    Um zu bewerten, ob ein Container ein Schnappziel ist, ohne sich um die Richtung Gedanken zu machen, verwenden Sie den Wert `none` mit dem `not` Operator:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`

  - : Überprüft, ob ein Container mit einem {{cssxref("position")}} Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an einem Rand seines scrollenden Container-Vorfahren klebt. Gültige `stuck` Werte umfassen die folgenden Schlüsselwörter:

    - `none`
      - : Der Container klebt an keinem Rand seines Containers. Beachten Sie, dass `none` Abfragen auch übereinstimmen, wenn der Container nicht `position: sticky` darauf gesetzt hat.
    - `top`
      - : Der Container klebt am oberen Rand seines Containers.
    - `right`
      - : Der Container klebt am rechten Rand seines Containers.
    - `bottom`
      - : Der Container klebt am unteren Rand seines Containers.
    - `left`
      - : Der Container klebt am linken Rand seines Containers.
    - `block-start`
      - : Der Container klebt am Block-Start-Rand seines Containers.
    - `block-end`
      - : Der Container klebt am Block-End-Rand seines Containers.
    - `inline-start`
      - : Der Container klebt am Inline-Start-Rand seines Containers.
    - `inline-end`
      - : Der Container klebt am Inline-End-Rand seines Containers.

    Um einen Container mit einer nicht-`none` `stuck` Scroll-Zustandsabfrage zu bewerten, muss `position: sticky` darauf gesetzt sein und sich innerhalb eines Scroll-Containers befinden. Wenn der Test besteht, werden die Regeln innerhalb des `@container` Blocks auf Nachkommen des `position: sticky` Containers angewendet.

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

    Um zu bewerten, ob ein Container klebt, ohne sich um die Richtung Gedanken zu machen, verwenden Sie den Wert `none` mit dem `not` Operator:

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

Ein Containerkontext kann durch die Verwendung der Eigenschaft `container-type` erstellt werden, in diesem Fall unter Verwendung des Wertes `inline-size` auf der `.post` Klasse. Sie können dann die `@container` at-rule verwenden, um Stile auf das Element mit der `.card` Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

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

Angenommen, das folgende HTML-Beispiel ist eine Kartenkomponente mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Erstellen Sie zunächst einen Containerkontext mithilfe der Eigenschaften `container-type` und `container-name`. Die Kurzform-Syntax für diese Deklaration wird auf der {{cssxref("container")}} Seite beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Fügen Sie als Nächstes den Namen zur Containerabfrage hinzu, um diesen Container anzusprechen:

```css
@container summary (width >= 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Containerabfragen

Es ist nicht möglich, mehrere Container in einer einzigen Containerabfrage zu adressieren. Es ist jedoch möglich, Containerabfragen zu verschachteln, was den gleichen Effekt hat.

Die folgende Abfrage wird als wahr bewertet und wendet den deklarierten Stil an, wenn der Container mit dem Namen `summary` breiter als `400px` ist und einen Vorfahren-Container hat, der breiter als `800px` ist:

```css
@container summary (width > 400px) {
  @container (width > 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stilabfragen

Container-Abfragen können auch den berechneten Stil des Containerelements bewerten. Eine _Container-Stil-Abfrage_ ist eine `@container` Abfrage, die eine oder mehrere `style()` Funktionsnotationen verwendet. Die boolesche Syntax und Logik zum Kombinieren von Stilmerkmalen zu einer Stilabfrage ist die gleiche wie bei [CSS-Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()` ist eine einzelne `<style-feature>`. Ein **`<style-feature>`** ist eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Ein Stilmerkmal ohne Wert wird als wahr bewertet, wenn der berechnete Wert von dem Anfangswert für die gegebene Eigenschaft abweicht.

Wenn das `<style-feature>`, das als Argument der Funktion `style()` übergeben wird, eine Deklaration ist, wird die Stilabfrage als wahr bewertet, wenn der Wert der Deklaration mit dem berechneten Wert dieser Eigenschaft des abgefragten Containers übereinstimmt. Andernfalls wird sie als falsch ausgewertet.

Die folgende Containerabfrage überprüft, ob der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der `--accent-color` des Containerelements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, wird der äquivalente Hexadezimalcode `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, damit der Browser die berechneten Werte ordnungsgemäß vergleichen kann.

Stilmerkmale, die eine Kurzformeigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langformeigenschaften übereinstimmen, andernfalls sind sie falsch. Beispielsweise wird `@container style(border: 2px solid red)` als wahr bewertet, wenn alle 12 Langformeigenschaften (`border-bottom-style`, etc.), die die Kurzform ausmachen, übereinstimmen.

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und bewirken, dass die Container-Stilabfrage als falsch bewertet wird.

### Scroll-Zustandsabfragen

Siehe [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) für vollständige Anleitungen zu Beispielen für Scroll-Zustandsabfragen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS-Einschlussmodul](/de/docs/Web/CSS/Guides/Containment)
- [CSS at-rule Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
