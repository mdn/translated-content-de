---
title: "@container"
slug: Web/CSS/Reference/At-rules/@container
l10n:
  sourceCommit: 51872f3d8311c3c071cbfea613da40036911e4d7
---

Die **`@container`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ist eine bedingte Gruppenregel, die Stile auf einen [Einschlusskontext](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts) anwendet. Stil-Deklarationen werden durch eine Bedingung gefiltert und auf die Elemente im Container angewendet, wenn die Bedingung wahr ist. Die Bedingung wird ausgewertet, wenn sich die abgefragte Containergröße, [`<style-feature>`](#containerstil-abfragen) oder der Scroll-Status ändert.

Die Bedingung muss eine oder beide von {{cssxref("container-name")}} und `<container-query>` spezifizieren.

Die {{cssxref("container-name")}} Eigenschaft gibt eine Liste von Containerabfrage-Namen an, die verwendet werden, um zu filtern, welche Container durch die `@container` Regeln angesprochen werden. Die Container-Features im `<container-query>` werden gegen die ausgewählten Container ausgewertet. Wenn kein `<container-name>` angegeben ist, werden die Features des `<container-query>` gegen den nächsten übergeordneten Container ausgewertet, der den passenden [`container-type`](/de/docs/Web/CSS/Reference/Properties/container-type) hat. Wenn kein `<container-query>` angegeben ist, werden benannte Container ausgewählt.

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

/* With a <container-name> only (query is optional) */
@container sidebar {
  h2 {
    background: blue;
  }
}

/* With a <scroll-state> */
@container scroll-state(scrollable: top) {
  .back-to-top-link {
    visibility: visible;
  }
}

/* With an anchored query */
@container anchored(fallback: bottom) {
  .infobox::before {
    content: "▲";
    bottom: 100%;
    top: auto;
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
  - : Eine oder beide von `<container-name>` und `<container-query>`. Stile, die im `<stylesheet>` definiert sind, werden angewendet, wenn die Bedingung `true` ist.
    - `<container-name>` {{optional_inline}}
      - : Der Name des Containers, der abgefragt werden soll; er wird als {{cssxref("ident")}} angegeben. Wenn die Abfrage zu `true` ausgewertet wird, werden die deklarierten Stile auf die Nachfolgerelemente des Containers angewendet.
    - `<container-query>` {{optional_inline}}
      - : Eine Reihe von Features, die gegen den Abfrage-Container ausgewertet werden, wenn sich die Größe, [`<style-feature>`](#containerstil-abfragen), der Scroll-Status oder der angewendete Positionsversuch-Fallback des Containers ändert.

### Logische Schlüsselwörter in Containerabfragen

Logische Schlüsselwörter können verwendet werden, um die Containerbedingung zu definieren:

- `and` kombiniert zwei oder mehr Bedingungen.
- `or` kombiniert zwei oder mehr Bedingungen.
- `not` negiert die Bedingung. Nur eine 'not'-Bedingung ist pro Containerabfrage erlaubt und kann nicht mit den Schlüsselwörtern `and` oder `or` verwendet werden.

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

Die Kurzsyntax hierfür ist die Verwendung von {{cssxref("container")}} in der Form `container: <name> / <type>`, zum Beispiel:

```css
.post {
  container: sidebar / inline-size;
}
```

In Containerabfragen wird die {{cssxref("container-name")}} Eigenschaft verwendet, um die Menge der Container auf diejenigen mit einem passenden Containerabfragenamen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Verwendung und Namensbeschränkungen sind auf der {{cssxref("container-name")}} Seite beschrieben.

### Deskriptoren

Die `<container-condition>` Abfragen beinhalten [Größe](#größe_der_container-deskriptoren), [Scroll-Status](#scroll-status_der_container-deskriptoren) und [verankerte](#verankerte_container-deskriptoren) Container-Deskriptoren.

#### Größe der Container-Deskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größenabfragen enthalten, jede in einem Satz von Klammern. Eine Größenabfrage enthält einen Größen-Deskriptor, einen Wert und abhängig vom Deskriptor einen Vergleichsoperator. Die Abfragen messen immer die [Inhaltsbox](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) als Vergleich. Die Syntax zum Einschluss mehrerer Bedingungen ist die gleiche wie für {{cssxref("@media")}} Größen-Feature-Abfragen.

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
  - : Die [Ausrichtung](/de/docs/Web/CSS/Reference/At-rules/@media/orientation) des Containers, entweder `landscape` oder `portrait`.

- `width`
  - : Die Breite des Containers, ausgedrückt als {{cssxref("length")}} Wert.

#### Scroll-Status der Container-Deskriptoren

Scroll-Status Container-Deskriptoren werden innerhalb der `<container-condition>` als Argument für die `scroll-state()` Funktion spezifiziert, zum Beispiel:

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

Unterstützte Schlüsselwörter für die Scroll-Status Container-Deskriptoren umfassen {{Glossary("physical_properties", "physische")}} und {{Glossary("flow_relative_values", "fluss-relative")}} Werte.

- `scrollable`
  - : Fragt ab, ob der Container in die angegebene Richtung durch benutzerinitiiertes Scrollen, wie durch Ziehen der Bildlaufleiste oder mit einer Trackpad-Geste, gescrollt werden kann. Mit anderen Worten, gibt es in die angegebene Richtung überfließenden Inhalt, der gescrollt werden kann? Gültige `scrollable` Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder kann anderweitig nicht in irgendeine Richtung gescrollt werden.
    - `top`
      - : Der Container kann in Richtung seiner oberen Kante gescrollt werden.
    - `right`
      - : Der Container kann in Richtung seiner rechten Kante gescrollt werden.
    - `bottom`
      - : Der Container kann in Richtung seiner unteren Kante gescrollt werden.
    - `left`
      - : Der Container kann in Richtung seiner linken Kante gescrollt werden.
    - `x`
      - : Der Container kann horizontal in Richtung seiner linken oder rechten Kanten gescrollt werden.
    - `y`
      - : Der Container kann vertikal in Richtung seiner oberen oder unteren Kanten gescrollt werden.
    - `block-start`
      - : Der Container kann in Richtung seiner Block-Start-Kante gescrollt werden.
    - `block-end`
      - : Der Container kann in Richtung seiner Block-End-Kante gescrollt werden.
    - `inline-start`
      - : Der Container kann in Richtung seiner Inline-Start-Kante gescrollt werden.
    - `inline-end`
      - : Der Container kann in Richtung seiner Inline-End-Kante gescrollt werden.
    - `block`
      - : Der Container kann in seiner Block-Richtung in Richtung seiner Block-Start- oder Block-End-Kante gescrollt werden.
    - `inline`
      - : Der Container kann in seiner Inline-Richtung in Richtung seiner Inline-Start- oder Inline-End-Kante gescrollt werden.

    Wenn der Test besteht, werden die Regeln innerhalb des `@container` Blocks auf Nachfolger des Scroll-Containers angewendet.

    Um zu bewerten, ob ein Container scrollbar ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not` Operator:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `scrolled`
  - : Fragt ab, ob der Container zuletzt in eine bestimmte Richtung gescrollt wurde. Gültige `scrolled` Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder wurde anderweitig nicht in irgendeine Richtung gescrollt.
    - `top`
      - : Der Container wurde zuletzt in Richtung seiner oberen Kante gescrollt.
    - `right`
      - : Der Container wurde zuletzt in Richtung seiner rechten Kante gescrollt.
    - `bottom`
      - : Der Container wurde zuletzt in Richtung seiner unteren Kante gescrollt.
    - `left`
      - : Der Container wurde zuletzt in Richtung seiner linken Kante gescrollt.
    - `x`
      - : Der Container wurde zuletzt in Richtung seiner linken oder rechten Kanten gescrollt.
    - `y`
      - : Der Container wurde zuletzt in Richtung seiner oberen oder unteren Kanten gescrollt.
    - `block-start`
      - : Der Container wurde zuletzt in Richtung seiner Block-Start-Kante gescrollt.
    - `block-end`
      - : Der Container wurde zuletzt in Richtung seiner Block-End-Kante gescrollt.
    - `inline-start`
      - : Der Container wurde zuletzt in Richtung seiner Inline-Start-Kante gescrollt.
    - `inline-end`
      - : Der Container wurde zuletzt in Richtung seiner Inline-End-Kante gescrollt.
    - `block`
      - : Der Container wurde zuletzt in Richtung seiner Block-Start- oder Block-End-Kante gescrollt.
    - `inline`
      - : Der Container wurde zuletzt in Richtung seiner Inline-Start- oder Inline-End-Kante gescrollt.

    Wenn der Test wahr ist, werden die verschachtelten Regeln im `@container` Block auf die Nachfolger des Scroll-Containers angewendet.

    Um zu bewerten, ob ein Container kürzlich gescrollt wurde, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not` Operator:

    ```css
    @container not scroll-state(scrolled: none) {
      /* … */
    }
    ```

- `snapped`
  - : Fragt ab, ob der Container zu einem [Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Container-Vorfahren entlang der angegebenen Achse eingerastet wird. Gültige `snapped` Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein Scroll {{Glossary("Scroll_snap#snap_target", "Snap Ziel")}} für seinen Vorfahren-Scroll-Container. Bei der Implementierung einer `snapped: none` Abfrage werden Container, die _Snap-Ziele_ für den Scroll-Container sind, die `@container` Stile _nicht_ erhalten, während Nicht-Snap-Ziele die Stile _erhalten_.
    - `x`
      - : Der Container ist ein horizontales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er rastet horizontal zu seinem Vorfahren ein.
    - `y`
      - : Der Container ist ein vertikales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er rastet vertikal zu seinem Vorfahren ein.
    - `block`
      - : Der Container ist ein Block-Achsen-Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er rastet in seiner Block-Richtung zu seinem Vorfahren ein.
    - `inline`
      - : Der Container ist ein Inline-Achsen-Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er rastet in seiner Inline-Richtung zu seinem Vorfahren ein.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch ein vertikales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container und rastet in beide Richtungen zu seinem Vorfahren ein. Der Container passt nicht, wenn er nur entlang der horizontalen _oder_ vertikalen Achse zu seinem Vorfahren einrastet. Er muss beides sein.

    Um einen Container mit einer nicht-`none` `snapped` Scroll-Status-Abfrage zu bewerten, muss er ein Container mit einem Scroll-Container-Vorfahren sein, der einen {{cssxref("scroll-snap-type")}} Wert ungleich `none` hat. Eine `snapped: none` Abfrage wird übereinstimmen, selbst wenn es keinen Scroll-Container-Vorfahren gibt.

    Auswertungen erfolgen, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignisse im Scroll-Snap-Container ausgelöst werden. Wenn der Test besteht, werden die Regeln innerhalb des `@container` Blocks auf Nachfolger des Containers angewendet.

    Um zu bewerten, ob ein Container ein Snap-Ziel ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not` Operator:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`
  - : Fragt ab, ob ein Container mit einem {{cssxref("position")}} Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an einer Kante seines rollenden Container-Vorfahren haftet. Gültige `stuck` Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container haftet an keiner Kante seines Containers. Beachten Sie, dass `none` Abfragen übereinstimmen, selbst wenn der Container `position: sticky` nicht auf ihn gesetzt hat.
    - `top`
      - : Der Container haftet an der oberen Kante seines Containers.
    - `right`
      - : Der Container haftet an der rechten Kante seines Containers.
    - `bottom`
      - : Der Container haftet an der unteren Kante seines Containers.
    - `left`
      - : Der Container haftet an der linken Kante seines Containers.
    - `block-start`
      - : Der Container haftet an der Block-Start-Kante seines Containers.
    - `block-end`
      - : Der Container haftet an der Block-End-Kante seines Containers.
    - `inline-start`
      - : Der Container haftet an der Inline-Start-Kante seines Containers.
    - `inline-end`
      - : Der Container haftet an der Inline-End-Kante seines Containers.

    Um einen Container mit einer nicht-`none` `stuck` Scroll-Status-Abfrage zu bewerten, muss `position: sticky` darauf gesetzt sein und sich in einem Scroll-Container befinden. Wenn der Test besteht, werden die Regeln innerhalb des `@container` Blocks auf die Nachfolger des `position: sticky` Containers angewendet.

    Es ist möglich, dass zwei Werte von benachbarten Achsen gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Zwei Werte von gegenüberliegenden Kanten werden jedoch niemals gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) {
      /* … */
    }
    ```

    Um zu bewerten, ob ein Container haftet, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not` Operator:

    ```css
    @container not scroll-state(stuck: none) {
      /* … */
    }
    ```

#### Verankerte Container-Deskriptoren

Verankerte Container-Deskriptoren werden innerhalb der `<container-condition>` als Argument für die `anchored()` Funktion spezifiziert, zum Beispiel:

```css
@container anchored(fallback: top) {
  /* … */
}
@container anchored(fallback: flip-block flip-inline) {
  /* … */
}
@container anchored(fallback: --custom-fallback) {
  /* … */
}
```

- `fallback`
  - : Fragt ab, ob ein bestimmter Positionsversuch-Fallback aktuell auf einem ankerpositionierten Container aktiv ist, wie in der {{cssxref("position-try-fallbacks")}} Eigenschaft angegeben. Gültige `fallback` Werte umfassen alle Komponentenwerte, die für die Einbindung in einen `position-try-fallbacks` Eigenschaftswert gültig sind.

    Wenn der `fallback` Wert, der im Test benannt ist, aktuell auf dem ankerpositionierten Container aktiv ist, besteht der Test, und die Regeln innerhalb des `@container` Blocks werden auf die Nachfolger des ankerpositionierten Containers angewendet.

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

Ein Containerkontext kann mit der `container-type` Eigenschaft erstellt werden, in diesem Fall unter Verwendung des `inline-size` Werts auf der `.post` Klasse. Sie können dann die `@container` At-Regel verwenden, um Stile auf das Element mit der `.card` Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

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

### Erstellung benannter Containerkontexte

Angenommen Sie haben das folgende HTML-Beispiel, das eine Kartenkomponente mit einem Titel und etwas Text ist:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Erstellen Sie zuerst einen Containerkontext mit den `container-type` und `container-name` Eigenschaften. Die Kurzsyntax für diese Deklaration wird auf der {{cssxref("container")}} Seite beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Zielen Sie als nächstes diesen Container ab, indem Sie den Namen zur Containerabfrage hinzufügen:

```css
@container summary (width >= 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Containerabfragen

Es ist nicht möglich, mehrere Container in einer einzigen Containerabfrage anzusprechen. Es ist jedoch möglich, Containerabfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage wird zu wahr ausgewertet und wendet den deklarierten Stil an, wenn der Container mit dem Namen `summary` breiter als `400px` ist und einen übergeordneten Container hat, der breiter als `800px` ist:

```css
@container summary (width > 400px) {
  @container (width > 800px) {
    /* <stylesheet> */
  }
}
```

### Containerstil-Abfragen

Containerabfragen können auch den berechneten Stil des Containerelements auswerten. Eine _Containerstil-Abfrage_ ist eine `@container` Abfrage, die eine oder mehrere `style()` funktionale Notationen verwendet. Die boolesche Syntax und Logik, die Stil-Features zu einer Stil-Abfrage kombiniert, ist dieselbe wie für [CSS-Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Das Parameter von jedem `style()` ist ein einzelnes `<style-feature>`. Ein **`<style-feature>`** ist eine gültige CSS [Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), eine CSS Eigenschaft, oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Ein Stil-Feature ohne Wert wird zu wahr ausgewertet, wenn der berechnete Wert vom Anfangswert für die gegebene Eigenschaft abweicht.

Wenn das `<style-feature>`, das als Argument der `style()` Funktion übergeben wird, eine Deklaration ist, wird die Stil-Abfrage zu wahr ausgewertet, wenn der Wert der Deklaration mit dem berechneten Wert dieser Eigenschaft für den abgefragten Container übereinstimmt. Andernfalls wird sie zu falsch ausgewertet.

Die folgende Containerabfrage prüft, ob der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) des `--accent-color` des Containerelements `blau` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blau` hat, wird der äquivalente hexadezimale Code `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, sodass der Browser die berechneten Werte richtig vergleichen kann.

Stil-Features, die eine Kurzschreibweiseigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langschreibweise-Eigenschaften übereinstimmen, und falsch, andernfalls. Zum Beispiel wird `@container style(border: 2px solid red)` zu wahr, wenn alle 12 Langschreibweise-Eigenschaften (`border-bottom-style` usw.), die diese Kurzschreibweise ausmachen, wahr sind.

Beachten Sie, dass [`!important`](/de/docs/Web/CSS/Reference/Values/important) in Stilabfragen erlaubt ist, aber ignoriert wird.

```css
/* !important is valid but has no effect */
@container style(--themeColor: purple !important) {
  /* <stylesheet> */
}
```

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Containerstil-Abfrage zu falsch wird.

### Scroll-Status-Abfragen

Sehen Sie sich [Verwendung von Scrollstatus-Abfragen für Container](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) für Beispiele zu Scroll-Status-Abfragen an.

### Ankerabfragen

Sehen Sie sich [Verwendung von verankerten Containerabfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries) für Beispiele zu Ankerabfragen an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Scrollstatus-Abfragen für Container](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verwendung von verankerten Containerabfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS-Einschlussmodul](/de/docs/Web/CSS/Guides/Containment)
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
