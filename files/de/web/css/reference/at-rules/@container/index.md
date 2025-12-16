---
title: "@container"
slug: Web/CSS/Reference/At-rules/@container
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`@container`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ist eine bedingte Gruppenregel, die Stile auf einen [Kapselungskontext](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts) anwendet. Stilzuweisungen werden durch eine Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung erfüllt ist. Die Bedingung wird ausgewertet, wenn sich die abgefragte Containergröße, [`<style-feature>`](#container-stil-abfragen) oder der Scroll-Zustand ändert.

Die {{cssxref("container-name")}} Eigenschaft spezifiziert eine Liste von Abfragecontainernamen. Diese Namen können von `@container` Regeln verwendet werden, um zu filtern, welche Abfragecontainer gezielt werden. Der optionale, case-sensitive `<container-name>` filtert die Abfragecontainer, die von der Abfrage gezielt werden.

Sobald ein geeigneter Abfragecontainer für ein Element ausgewählt wurde, wird jedes Container-Feature im `<container-condition>` gegen diesen Abfragecontainer ausgewertet.

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
      - : Optional. Der Name des Containers, auf den die Stile angewendet werden, wenn die Abfrage als wahr ausgewertet wird, angegeben als {{cssxref("ident")}}.
    - `<container-query>`
      - : Ein Satz von Features, die gegen den Abfragecontainer ausgewertet werden, wenn sich die Größe, [`<style-feature>`](#container-stil-abfragen) oder der Scroll-Zustand des Containers ändert.

### Logische Schlüsselwörter in Container-Abfragen

Logische Schlüsselwörter können verwendet werden, um die Containerbedingung zu definieren:

- `and` kombiniert zwei oder mehr Bedingungen.
- `or` kombiniert zwei oder mehr Bedingungen.
- `not` negiert die Bedingung. Pro Containerabfrage ist nur eine 'not'-Bedingung zulässig und kann nicht mit den Schlüsselwörtern `and` oder `or` verwendet werden.

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

### Benannte Kapselungskontexte

Ein Kapselungskontext kann mit der {{cssxref("container-name")}} Eigenschaft benannt werden.

```css
.post {
  container-name: sidebar;
  container-type: inline-size;
}
```

Die Kurzschreibweise hierfür ist die Verwendung von {{cssxref("container")}} in der Form `container: <name> / <type>`, beispielsweise:

```css
.post {
  container: sidebar / inline-size;
}
```

In Container-Abfragen wird die {{cssxref("container-name")}} Eigenschaft verwendet, um die Menge der Container auf diejenigen mit einem passenden Abfragecontainernamen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details über die Verwendung und Benennungseinschränkungen sind auf der {{cssxref("container-name")}} Seite beschrieben.

### Deskriptoren

Die `<container-condition>` Abfragen beinhalten [Größen](#größen-container-deskriptoren) und [Scroll-Zustands](#scroll-zustands-container-deskriptoren) Containier-Deskriptoren.

#### Größen-Container-Deskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größenabfragen enthalten, jede innerhalb eines Klammernpaares. Eine Größenabfrage beinhaltet einen Größen-Deskriptor, einen Wert und - abhängig vom Deskriptor - einen Vergleichsoperator. Die Abfragen messen immer das [Inhaltsfeld](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) als Vergleichsmaßstab. Die Syntax zum Einbinden mehrerer Bedingungen ist die gleiche wie für {{cssxref("@media")}} Größen-Feature-Abfragen.

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
  - : Das {{cssxref("aspect-ratio")}} des Containers, berechnet als Verhältnis der Breite zur Höhe des Containers, ausgedrückt als {{cssxref("ratio")}} Wert.

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

#### Scroll-Zustands-Container-Deskriptoren

Scroll-Zustands-Container-Deskriptoren werden innerhalb der `<container-condition>` in einem Klammernpaar nach dem Schlüsselwort `scroll-state` angegeben, beispielsweise:

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

Unterstützte Schlüsselwörter für Scroll-Zustands-Container-Deskriptoren umfassen physische und {{Glossary("flow_relative_values", "flussrelative Werte")}}

- `scrollable`
  - : Fragt ab, ob der Container in die angegebene Richtung durch benutzerausgelöstes Scrollen, wie z.B. durch Ziehen des Bildlaufleiste oder Verwenden einer Trackpad-Geste, gescrollt werden kann. Anders ausgedrückt, gibt es überlaufenden Inhalt in der angegebenen Richtung, zu dem gescrollt werden kann? Gültige `scrollable` Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Blättercontainer")}} oder kann auf keine Weise gescrollt werden.
    - `top`
      - : Der Container kann zum oberen Rand gescrollt werden.
    - `right`
      - : Der Container kann zum rechten Rand gescrollt werden.
    - `bottom`
      - : Der Container kann zum unteren Rand gescrollt werden.
    - `left`
      - : Der Container kann zum linken Rand gescrollt werden.
    - `x`
      - : Der Container kann horizontal zu seinen linken und/oder rechten Rändern gescrollt werden.
    - `y`
      - : Der Container kann vertikal zu seinen oberen und/oder unteren Rändern gescrollt werden.
    - `block-start`
      - : Der Container kann zum Block-Start-Rand gescrollt werden.
    - `block-end`
      - : Der Container kann zum Block-End-Rand gescrollt werden.
    - `inline-start`
      - : Der Container kann zum Inline-Start-Rand gescrollt werden.
    - `inline-end`
      - : Der Container kann zum Inline-End-Rand gescrollt werden.
    - `block`
      - : Der Container kann in seiner Blockrichtung zu seinen Block-Start-oder Block-End-Rändern gescrollt werden.
    - `inline`
      - : Der Container kann in seiner Inlinerichtung zu seinen Inline-Start- und/oder Inline-End-Rändern gescrollt werden.

    Wenn der Test besteht, werden die Regeln innerhalb des `@container` Blocks auf Nachkommen des Blättercontainers angewendet.

    Um zu evaluieren, ob ein Container blätterbar ist, ohne sich um die Richtung zu kümmern, verwenden Sie den `none` Wert mit dem `not` Operator:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `snapped`
  - : Fragt ab, ob der Container an einem [Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Container-Vorfahren entlang der angegebenen Achse anhaften wird. Gültige `snapped` Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein Scroll-{{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} für seinen Vorfahren Blättercontainer. Bei der Implementierung einer `snapped: none` Abfrage werden Container, die Snap-Ziele für den Blättercontainer sind, die `@container` Stile _nicht_ angewendet haben, während Container, die keine Snap-Ziele sind, die Stile _haben_.
    - `x`
      - : Der Container ist ein horizontales Scroll-Snap-Ziel für seinen Vorfahren Blättercontainer, das heißt, er rastet horizontal an seinem Vorfahren ein.
    - `y`
      - : Der Container ist ein vertikales Scroll-Snap-Ziel für seinen Vorfahren Blättercontainer, das heißt, er rastet vertikal an seinem Vorfahren ein.
    - `block`
      - : Der Container ist ein Block-Achsenscroll-Snap-Ziel für seinen Vorfahren Blättercontainer, das heißt, er rastet in der Blockrichtung bei seinem Vorfahren ein.
    - `inline`
      - : Der Container ist ein Inline-Achsenscroll-Snap-Ziel für seinen Vorfahren Blättercontainer, das heißt, er rastet in der Inlinerichtung bei seinem Vorfahren ein.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch vertikales Scroll-Snap-Ziel für seinen Vorfahren Blättercontainer und rastet an seinem Vorfahren in beiden Richtungen ein. Der Container wird nicht übereinstimmen, wenn er nur entlang der horizontalen _oder_ vertikalen Achse an seinem Vorfahren einrastet. Es muss beides sein.

    Um einen Container mit einer `snapped` Scroll-Zustandsabfrage zu evaluieren, die nicht `none` ist, muss es sich um einen Container mit einem Blättercontainer-Vorfahren handeln, der einen {{cssxref("scroll-snap-type")}} Wert ungleich `none` hat. Eine `snapped: none` Abfrage wird auch dann übereinstimmen, wenn es keinen Blättercontainer-Vorfahren gibt.

    Auswertungen treten auf, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignisse auf dem Scroll-Snap-Container ausgelöst werden. Wenn der Test besteht, werden die Regeln innerhalb des `@container` Blocks auf Nachkommen des Containers angewendet.

    Um zu evaluieren, ob ein Container ein Snap-Ziel ist, ohne sich um die Richtung zu kümmern, verwenden Sie den `none` Wert mit dem `not` Operator:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`
  - : Fragt ab, ob ein Container mit einem {{cssxref("position")}} Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an einer Kante seines scrollenden Container-Vorfahren festklebt. Gültige `stuck` Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist an keiner Kante seines Containers festgeklebt. Beachten Sie, dass `none` Abfragen auch dann übereinstimmen, wenn der Container nicht `position: sticky` darauf gesetzt hat.
    - `top`
      - : Der Container ist an der oberen Kante seines Containers festgeklebt.
    - `right`
      - : Der Container ist an der rechten Kante seines Containers festgeklebt.
    - `bottom`
      - : Der Container ist an der unteren Kante seines Containers festgeklebt.
    - `left`
      - : Der Container ist an der linken Kante seines Containers festgeklebt.
    - `block-start`
      - : Der Container ist an der Block-Start-Kante seines Containers festgeklebt.
    - `block-end`
      - : Der Container ist an der Block-End-Kante seines Containers festgeklebt.
    - `inline-start`
      - : Der Container ist an der Inline-Start-Kante seines Containers festgeklebt.
    - `inline-end`
      - : Der Container ist an der Inline-End-Kante seines Containers festgeklebt.

    Um einen Container mit einer `stuck` Scroll-Zustandsabfrage zu evaluieren, die nicht `none` ist, muss `position: sticky` darauf gesetzt sein und innerhalb eines Blättercontainers sein. Wenn der Test besteht, werden die Regeln innerhalb des `@container` Blocks auf Nachkommen des `position: sticky` Containers angewendet.

    Es ist möglich, dass zwei Werte von gegenüberliegenden Achsen gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Jedoch werden zwei Werte von gegenüberliegenden Kanten niemals gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) {
      /* … */
    }
    ```

    Um zu evaluieren, ob ein Container festklebt, ohne sich um die Richtung zu kümmern, verwenden Sie den `none` Wert mit dem `not` Operator:

    ```css
    @container not scroll-state(stuck: none) {
      /* … */
    }
    ```

## Formale Syntax

{{csssyntax}}

## Beispiele

### Stile basierend auf der Containergröße festlegen

Betrachten Sie folgendes Beispiel eines Kartenelements mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Container-Kontext kann mit der `container-type` Eigenschaft erstellt werden, in diesem Fall mit dem `inline-size` Wert auf der `.post` Klasse. Sie können dann die `@container` At-Regel verwenden, um Stile auf das Element mit der `.card` Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

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

Angenommen, Sie folgen diesem HTML-Beispiel, welches ein Kartenelement mit einem Titel und etwas Text ist:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Zuerst erstellen Sie einen Container-Kontext mit den `container-type` und `container-name` Eigenschaften. Die Kurzschreibweise für diese Deklaration ist auf der {{cssxref("container")}} Seite beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Als nächstes richten Sie sich auf diesen Container, indem Sie den Namen zur Containerabfrage hinzufügen:

```css
@container summary (width >= 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Container-Abfragen

Es ist nicht möglich, mehrere Container in einer einzigen Containerabfrage zu bearbeiten. Es ist möglich, Containerabfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage wird als wahr bewertet und wendet den deklarierten Stil an, wenn der Container namens `summary` breiter als `400px` ist und einen Vorfahrencontainer hat, der breiter als `800px` ist:

```css
@container summary (width > 400px) {
  @container (width > 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stil-Abfragen

Container-Abfragen können auch den berechneten Stil des Containerelements auswerten. Eine _Container-Stil-Abfrage_ ist eine `@container`-Abfrage, die eine oder mehrere `style()` funktionale Notationen verwendet. Die boolesche Syntax und das logische Kombinieren von Stil-Features in einer Stil-Abfrage sind dieselben wie bei [CSS-Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Das Parameter von jedem `style()` ist ein einziges `<style-feature>`. Ein **`<style-feature>`** ist eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Ein Stil-Feature ohne Wert wird als wahr bewertet, wenn der berechnete Wert vom Anfangswert der gegebenen Eigenschaft abweicht.

Wenn das `<style-feature>`, das als Argument der `style()` Funktion übermittelt wird, eine Deklaration ist, wird die Stil-Abfrage als wahr bewertet, wenn der Wert der Deklaration mit dem berechneten Wert dieser Eigenschaft für den abgefragten Container übereinstimmt. Andernfalls wird es als falsch aufgelöst.

Die folgende Container-Abfrage überprüft, ob der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der `--accent-color` des Containerelements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, wird der äquivalente hexadezimale Code `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, damit der Browser berechnete Werte richtig vergleichen kann.

Stil-Features, die eine Kurzschreibweise abfragen, sind wahr, wenn die berechneten Werte für jede seiner Langschreibweiseigenschaften übereinstimmen, und andernfalls falsch. Zum Beispiel löst sich `@container style(border: 2px solid red)` zu wahr auf, wenn alle 12 Langschreibweiseigenschaften (`border-bottom-style`, etc.), die diese Kurzschreibweise ausmachen, wahr sind.

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Container-Stil-Abfrage zu falsch wird.

### Scroll-Zustandsabfragen

Siehe [Verwendung von Container-Scrollzustandsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) für vollständige Durchgänge von Scroll-Zustandsabfrage-Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Containergrößen- und Stil-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Container-Scrollzustands-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS Kapselungsmodul](/de/docs/Web/CSS/Guides/Containment)
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
