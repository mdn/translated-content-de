---
title: "@container"
slug: Web/CSS/@container
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{CSSRef}}

Die **`@container`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) ist eine bedingte Gruppierungsregel, die Styles auf einen [Containment-Kontext](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) anwendet.
Stildeklarationen werden durch eine Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung wahr ist.
Die Bedingung wird ausgewertet, wenn sich die angefragte Containergröße, [`<style-feature>`](#container_style-abfragen) oder der Scroll-Zustand ändert.

Die {{cssxref("container-name")}} Eigenschaft spezifiziert eine Liste von Abfrage-Containernamen. Diese Namen können von `@container` Regeln genutzt werden, um zu filtern, welche Abfragecontainer anvisiert werden. Der optionale, groß- und kleinschreibungssensitive `<container-name>` filtert die Abfragecontainer, die durch die Abfrage anvisiert werden.

Sobald ein geeigneter Abfragecontainer für ein Element ausgewählt wurde, wird jedes Container-Feature im `<container-condition>` gegen diesen Abfragecontainer ausgewertet.

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

  - : Ein optionaler `<container-name>` und eine `<container-query>`. Styles, die im `<stylesheet>` definiert sind, werden angewendet, wenn die Bedingung wahr ist.

    - `<container-name>`
      - : Optional. Der Name des Containers, auf den die Styles angewendet werden, wenn die Abfrage zu wahr evaluiert, spezifiziert als ein {{cssxref("ident")}}.
    - `<container-query>`
      - : Eine Reihe von Features, die gegen den Abfragecontainer ausgewertet werden, wenn sich die Größe, [`<style-feature>`](#container_style-abfragen) oder der Scroll-Zustand des Containers ändern.

- `<stylesheet>`
  - : Eine Gruppe von CSS-Regeln oder Deklarationen.

### Logische Schlüsselwörter in Container-Abfragen

Logische Schlüsselwörter können verwendet werden, um die Container-Bedingung zu definieren:

- `and` kombiniert zwei oder mehr Bedingungen.
- `or` kombiniert zwei oder mehr Bedingungen.
- `not` negiert die Bedingung. Es ist nur eine 'not'-Bedingung pro Container-Abfrage erlaubt und kann nicht mit den Schlüsselwörtern `and` oder `or` verwendet werden.

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

### Benannten Containment-Kontexten

Ein Containment-Kontext kann mit der {{cssxref("container-name")}} Eigenschaft benannt werden.

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

In Container-Abfragen wird die {{cssxref("container-name")}} Eigenschaft verwendet, um die Menge der Container auf diejenigen mit einem passenden Abfragecontainer-Namen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Verwendung und zu Namensbeschränkungen sind auf der {{cssxref("container-name")}} Seite beschrieben.

### Deskriptoren

Die `<container-condition>` Abfragen umfassen [Größen-](#größen-container-deskriptoren) und [Scroll-Zustand-](#scroll-zustand-container-deskriptoren) Container-Deskriptoren.

#### Größen-Container-Deskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größen-Abfragen enthalten, jede innerhalb eines Satzes von Klammern. Eine Größenabfrage enthält einen Größen-Deskriptor, einen Wert und – abhängig von dem Deskriptor – einen Vergleichsoperator. Die Syntax für die Einbeziehung mehrerer Bedingungen entspricht der für [`@media`](/de/docs/Web/CSS/@media) Größen-Feature-Abfragen.

```css
@container (min-width: 400px) { ... }
@container (orientation: landscape) and (width > 400px) { ... }
@container (15em <= block-size <= 30em) { ... }
```

- `aspect-ratio`

  - : Das {{cssxref("aspect-ratio")}} des Containers, berechnet als Verhältnis der Breite zur Höhe des Containers, ausgedrückt als ein {{cssxref("ratio")}} Wert.

- `block-size`

  - : Die {{cssxref("block-size")}} des Containers, ausgedrückt als ein {{cssxref("length")}} Wert.

- `height`

  - : Die Höhe des Containers, ausgedrückt als ein {{cssxref("length")}} Wert.

- `inline-size`

  - : Die {{cssxref("inline-size")}} des Containers, ausgedrückt als ein {{cssxref("length")}} Wert.

- `orientation`

  - : Die [Orientierung](/de/docs/Web/CSS/@media/orientation) des Containers, entweder `landscape` oder `portrait`.

- `width`
  - : Die Breite des Containers, ausgedrückt als ein {{cssxref("length")}} Wert.

#### Scroll-Zustand-Container-Deskriptoren

Scroll-Zustand-Container-Deskriptoren werden innerhalb der `<container-condition>` in einem Klammerpaar nach dem `scroll-state` Schlüsselwort angegeben, zum Beispiel:

```css
@container scroll-state(scrollable: top) { ... }
@container scroll-state(stuck: inline-end) { ... }
@container scroll-state(snapped: both) { ... }
```

Unterstützte Schlüsselwörter für Scroll-Zustand-Container-Deskriptoren umfassen physische und {{Glossary("flow_relative_values", "flussrelativen Werte")}}

- `scrollable`

  - : Überprüft, ob der Container in der angegebenen Richtung durch benutzerinitiiertes Scrollen verschoben werden kann, z. B. durch Ziehen der Bildlaufleiste oder durch Gesten auf einem Trackpad. Mit anderen Worten, gibt es überlaufenden Inhalt in der angegebenen Richtung, der gescrollt werden kann? Gültige `scrollable` Werte umfassen die folgenden Schlüsselwörter:

    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder kann in keiner Richtung gescrollt werden.
    - `top`
      - : Der Container kann in Richtung seiner oberen Kante gescrollt werden.
    - `right`
      - : Der Container kann in Richtung seiner rechten Kante gescrollt werden.
    - `bottom`
      - : Der Container kann in Richtung seiner unteren Kante gescrollt werden.
    - `left`
      - : Der Container kann in Richtung seiner linken Kante gescrollt werden.
    - `x`
      - : Der Container kann horizontal in Richtung seiner linken oder rechten Kante oder in beide Richtungen gescrollt werden.
    - `y`
      - : Der Container kann vertikal in Richtung seiner oberen oder unteren Kante oder in beide Richtungen gescrollt werden.
    - `block-start`
      - : Der Container kann in Richtung seiner Block-Start-Kante gescrollt werden.
    - `block-end`
      - : Der Container kann in Richtung seiner Block-End-Kante gescrollt werden.
    - `inline-start`
      - : Der Container kann in Richtung seiner Inline-Start-Kante gescrollt werden.
    - `inline-end`
      - : Der Container kann in Richtung seiner Inline-End-Kante gescrollt werden.
    - `block`
      - : Der Container kann in seiner Blockrichtung in Richtung seiner Block-Start- oder Block-End-Kante oder in beide Richtungen gescrollt werden.
    - `inline`
      - : Der Container kann in seiner Inlinerichtung in Richtung seiner Inline-Start- oder Inline-End-Kante oder in beide Richtungen gescrollt werden.

    Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container` Blocks auf Abkömmlinge des Scroll-Containers angewendet.

    Um zu evaluieren, ob ein Container scrollbar ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not` Operator:

    ```css
    @container not scroll-state(scrollable: none) { ... }
    ```

- `snapped`

  - : Überprüft, ob der Container an einen [Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Container-Vorfahren entlang der angegebenen Achse ausgerichtet ist oder ausgerichtet wird. Gültige `snapped` Werte umfassen die folgenden Schlüsselwörter:

    - `none`
      - : Der Container ist kein Scroll-{{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} für seinen Vorfahren-Scroll-Container. Beim Implementieren einer `snapped: none` Abfrage werden Container, die _Snap-Ziele_ für den Scroll-Container sind, _nicht_ die `@container` Styles angewendet, während Nicht-Snap-Ziele _wohl_ die Styles angewendet bekommen.
    - `x`
      - : Der Container ist ein horizontales Scroll-Snap-Ziel für seinen Vorfahren Scroll-Container, d.h. er richtet sich horizontal zu seinem Vorfahren aus.
    - `y`
      - : Der Container ist ein vertikales Scroll-Snap-Ziel für seinen Vorfahren Scroll-Container, d.h. er richtet sich vertikal zu seinem Vorfahren aus.
    - `block`
      - : Der Container ist ein Block-Achsen Scroll-Snap-Ziel für seinen Vorfahren Scroll-Container, d.h. er richtet sich in Blockrichtung zu seinem Vorfahren aus.
    - `inline`
      - : Der Container ist ein Inline-Achsen Scroll-Snap-Ziel für seinen Vorfahren Scroll-Container, d.h. er richtet sich in Inlinerichtung zu seinem Vorfahren aus.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch ein vertikales Scroll-Snap-Ziel für seinen Vorfahren Scroll-Container und richtet sich in beide Richtungen zu seinem Vorfahren aus. Der Container wird nicht übereinstimmen, wenn er nur entlang der horizontalen _oder_ vertikalen Achse zu seinem Vorfahren ausgerichtet ist. Es muss beides sein.

    Um einen Container mit einer nicht-`none` `snapped` Scroll-Zustandsabfrage zu evaluieren, muss es ein Container mit einem Scroll-Container-Vorfahren sein, der einen {{cssxref("scroll-snap-type")}} Wert ungleich `none` hat. Eine `snapped: none` Abfrage wird auch dann übereinstimmen, wenn es keinen Scroll-Container-Vorfahren gibt.

    Es werden Bewertungen vorgenommen, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignisse auf dem Scroll-Snap-Container ausgelöst werden. Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container` Blocks auf Nachkommen des Containers angewendet.

    Um zu evaluieren, ob ein Container ein Snap-Ziel ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not` Operator:

    ```css
    @container not scroll-state(snapped: none) { ... }
    ```

- `stuck`

  - : Überprüft, ob ein Container mit einem {{cssxref("position")}} Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an einer Kante seines scrollenden Container-Vorfahren "haftet". Gültige `stuck` Werte umfassen die folgenden Schlüsselwörter:

    - `none`
      - : Der Container haftet nicht an irgendeiner Kante seines Containers. Beachten Sie, dass `none` Abfragen auch dann übereinstimmen werden, wenn der Container nicht `position: sticky` darauf gesetzt hat.
    - `top`
      - : Der Container haftet an der oberen Kante seines Containers an.
    - `right`
      - : Der Container haftet an der rechten Kante seines Containers an.
    - `bottom`
      - : Der Container haftet an der unteren Kante seines Containers an.
    - `left`
      - : Der Container haftet an der linken Kante seines Containers an.
    - `block-start`
      - : Der Container haftet an der Block-Start-Kante seines Containers an.
    - `block-end`
      - : Der Container haftet an der Block-End-Kante seines Containers an.
    - `inline-start`
      - : Der Container haftet an der Inline-Start-Kante seines Containers an.
    - `inline-end`
      - : Der Container haftet an der Inline-End-Kante seines Containers an.

    Um einen Container mit einer nicht-`none` `stuck` Scroll-Zustandsabfrage zu evaluieren, muss das `position: sticky` darauf gesetzt sein und sich innerhalb eines Scroll-Containers befinden. Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container` Blocks auf Nachkommen des `position: sticky` Containers angewendet.

    Es ist möglich, dass zwei Werte aus entgegengesetzten Achsen gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) { ... }
    ```

    Allerdings werden zwei Werte aus entgegengesetzten Kanten niemals gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) { ... }
    ```

    Um zu evaluieren, ob ein Container haftet, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not` Operator:

    ```css
    @container not scroll-state(stuck: none) { ... }
    ```

## Formale Syntax

{{csssyntax}}

## Beispiele

### Styles basierend auf der Größe eines Containers setzen

Betrachten Sie das folgende Beispiel eines Karten-Components mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Container-Kontext kann mit der `container-type` Eigenschaft erstellt werden, in diesem Fall mit dem `inline-size` Wert auf der `.post` Klasse.
Sie können dann die `@container` at-rule verwenden, um Styles auf das Element mit der `.card` Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

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

### Erstellen benannter Container-Kontexte

Angesichts des folgenden HTML-Beispiels, das ein Karten-Component mit einem Titel und etwas Text ist:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Erstellen Sie zuerst einen Container-Kontext mit den Eigenschaften `container-type` und `container-name`.
Die Kurzschreibweise für diese Deklaration wird auf der {{cssxref("container")}} Seite beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Zielen Sie als Nächstes diesen Container an, indem Sie den Namen zur Container-Abfrage hinzufügen:

```css
@container summary (min-width: 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Container-Abfragen

Es ist nicht möglich, mehrere Container in einer einzigen Container-Abfrage anzuzielen.
Es ist möglich, Container-Abfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage wird als wahr ausgewertet und wendet den deklarierten Style an, wenn der Container mit dem Namen `summary` breiter als `400px` ist und einen Vorfahren-Container hat, der breiter als `800px` ist:

```css
@container summary (min-width: 400px) {
  @container (min-width: 800px) {
    /* <stylesheet> */
  }
}
```

### Container Style-Abfragen

Container-Abfragen können auch den berechneten Stil des Containerelements auswerten. Eine _Container Style-Abfrage_ ist eine `@container` Abfrage, die eine oder mehrere `style()` funktionale Notationen verwendet. Die boolesche Syntax und die Logik zur Kombination von Style-Features in einer Style-Abfrage ist dieselbe wie bei [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

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

Ein Style-Feature ohne Wert wird als wahr ausgewertet, wenn der berechnete Wert vom Initialwert für die gegebene Eigenschaft abweicht.

Wenn das `<style-feature>`, das als Argument der `style()` Funktion übergeben wird, eine Deklaration ist, wird die Style-Abfrage als wahr ausgewertet, wenn der Wert der Deklaration mit dem berechneten Wert dieser Eigenschaft für den abgefragten Container übereinstimmt. Andernfalls ergibt es sich zu falsch.

Die folgende Container-Abfrage überprüft, ob der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der Eigenschaft `--accent-color` des Containerelements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, wird der entsprechende hexadezimale Code `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, damit der Browser die berechneten Werte ordnungsgemäß vergleichen kann.

Style-Features, die eine Kurzschreibweise einer Eigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langform-Eigenschaften übereinstimmen, und andernfalls falsch. Zum Beispiel wird `@container style(border: 2px solid red)` als wahr ausgewertet, wenn alle 12 Langform-Eigenschaften (`border-bottom-style`, etc.), die diese Kurzschreibweise ausmachen, wahr sind.

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Container Style-Abfrage falsch ist.

### Scroll-Zustandsabfragen

Siehe [Die Verwendung von Container Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) für vollständige Anleitungen zu Scroll-Zustandsabfrage-Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Style-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS Containment-Modul](/de/docs/Web/CSS/CSS_containment)
- [Funktionen der CSS at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
