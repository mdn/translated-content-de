---
title: "@container"
slug: Web/CSS/@container
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`@container`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ist eine bedingte Gruppenregel, die Stile auf einen [Einschließungskontext](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) anwendet. Stildeklarationen werden durch eine Bedingung gefiltert und angewendet, wenn die Bedingung wahr ist. Die Bedingung wird ausgewertet, wenn sich die abgefragte Containergröße, [`<style-feature>`](#container-stilabfragen) oder der Scroll-Zustand ändert.

Die {{cssxref("container-name")}}-Eigenschaft legt eine Liste von Abfragecontainernamen fest. Diese Namen können von `@container`-Regeln verwendet werden, um zu filtern, welche Abfragecontainer angesprochen werden. Das optionale, groß- und kleinschreibungssensitive `<container-name>` filtert die Abfragecontainer, die durch die Abfrage angesprochen werden.

Sobald ein geeigneter Abfragecontainer für ein Element ausgewählt wurde, wird jede Containerfunktion in der `<container-condition>` gegen diesen Abfragecontainer ausgewertet.

## Syntax

Die `@container`-At-Regel hat folgende Syntax:

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

  - : Eine optionale Kombination aus `<container-name>` und `<container-query>`. Stile, die im `<stylesheet>` definiert sind, werden angewendet, wenn die Bedingung wahr ist.
    - `<container-name>`
      - : Optional. Der Name des Containers, auf den die Stile angewendet werden, wenn die Abfrage zu wahr ausgewertet wird, angegeben als ein {{cssxref("ident")}}.
    - `<container-query>`
      - : Eine Menge von Merkmalen, die beim Ändern der Größe, [`<style-feature>`](#container-stilabfragen) oder Scroll-Zustand des Containers gegen den Abfragecontainer ausgewertet werden.

- `<stylesheet>`
  - : Eine Menge von CSS-Regeln oder Deklarationen.

### Logische Schlüsselwörter in Containerabfragen

Logische Schlüsselwörter können verwendet werden, um die Containerbedingung zu definieren:

- `and` kombiniert zwei oder mehr Bedingungen.
- `or` kombiniert zwei oder mehr Bedingungen.
- `not` negiert die Bedingung. Pro Containerabfrage ist nur eine `not`-Bedingung erlaubt und kann nicht mit den Schlüsselwörtern `and` oder `or` verwendet werden.

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

Ein Einschließungskontext kann unter Verwendung der {{cssxref("container-name")}}-Eigenschaft benannt werden.

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

In Containerabfragen wird die {{cssxref("container-name")}}-Eigenschaft verwendet, um die Menge der Container auf diejenigen mit einem passenden Abfragecontainernamen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Verwendung und zu Namensbeschränkungen sind auf der {{cssxref("container-name")}}-Seite beschrieben.

### Deskriptoren

Die `<container-condition>`-Abfragen umfassen [Größe](#größen-container-deskriptoren) und [Scroll-Zustand](#scroll-zustand-container-deskriptoren) Container-Deskriptoren.

#### Größen-Container-Deskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größenabfragen enthalten, die jeweils innerhalb eines Satzes von Klammern stehen. Eine Größenabfrage umfasst einen Größen-Deskriptor, einen Wert und – je nach Deskriptor – einen Vergleichsoperator. Die Syntax zur Einbeziehung mehrerer Bedingungen ist dieselbe wie für [`@media`](/de/docs/Web/CSS/@media)-Größenfunktionsabfragen.

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

  - : Die {{cssxref("block-size")}} des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

- `height`

  - : Die Höhe des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

- `inline-size`

  - : Die {{cssxref("inline-size")}} des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

- `orientation`

  - : Die [Ausrichtung](/de/docs/Web/CSS/@media/orientation) des Containers, entweder `landscape` oder `portrait`.

- `width`
  - : Die Breite des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

#### Scroll-Zustand-Container-Deskriptoren

Scroll-Zustand-Container-Deskriptoren werden innerhalb der `<container-condition>` in einem Klammerpaar nach dem Schlüsselwort `scroll-state` angegeben, zum Beispiel:

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

Unterstützte Schlüsselwörter für Scroll-Zustand-Container-Deskriptoren umfassen physische und {{Glossary("flow_relative_values", "flussrelativer Werte")}}.

- `scrollable`

  - : Überprüft, ob der Container in die angegebene Richtung durch benutzerinitiierte Scrollvorgänge wie das Ziehen der Bildlaufleiste oder eine Trackpad-Geste gescrollt werden kann. Mit anderen Worten: Gibt es überlaufenden Inhalt in der angegebenen Richtung, zu dem gescrollt werden kann? Gültige `scrollable`-Werte umfassen die folgenden Schlüsselwörter:

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
      - : Der Container kann horizontal zu seinen linken oder rechten Kanten gescrollt werden.
    - `y`
      - : Der Container kann vertikal zu seinen oberen oder unteren Kanten gescrollt werden.
    - `block-start`
      - : Der Container kann zu seiner Block-Startkante gescrollt werden.
    - `block-end`
      - : Der Container kann zu seiner Block-Endkante gescrollt werden.
    - `inline-start`
      - : Der Container kann zu seiner Inline-Startkante gescrollt werden.
    - `inline-end`
      - : Der Container kann zu seiner Inline-Endkante gescrollt werden.
    - `block`
      - : Der Container kann in seiner Blockrichtung zu seinen Block-Start- oder Block-Endkanten gescrollt werden.
    - `inline`
      - : Der Container kann in seiner Inline-Richtung zu seinen Inline-Start- und Inline-Endkanten gescrollt werden.

    Wenn der Test bestanden wird, werden die Regeln im `@container`-Block auf Nachkommen des Scroll-Containers angewendet.

    Um zu überprüfen, ob ein Container scollbar ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `snapped`

  - : Überprüft, ob der Container an einem [Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)-Container-Vorfahren entlang der angegebenen Achse eingeklinkt ist oder wird. Gültige `snapped`-Werte umfassen die folgenden Schlüsselwörter:

    - `none`
      - : Der Container ist kein Scroll-{{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} für seinen Vorfahren-Scroll-Container. Beim Implementieren einer `snapped: none`-Abfrage werden Container, die _Snap-Ziele_ für den Scroll-Container sind, _nicht_ die `@container`-Stile anwenden, während Nicht-Snap-Ziele _werden_ die Stile anwenden.
    - `x`
      - : Der Container ist ein horizontales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er ist horizontal zu seinem Vorfahren eingerastet.
    - `y`
      - : Der Container ist ein vertikales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er ist vertikal zu seinem Vorfahren eingerastet.
    - `block`
      - : Der Container ist ein Block-Achsen-Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er rastet in der Blockrichtung zu seinem Vorfahren ein.
    - `inline`
      - : Der Container ist ein Inline-Achsen-Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er rastet in der Inline-Richtung zu seinem Vorfahren ein.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch ein vertikales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container und rastet in beide Richtungen zu seinem Vorfahren ein. Der Container passt nicht, wenn er nur entlang der horizontalen _oder_ vertikalen Achse zu seinem Vorfahren einrastet. Es muss beides sein.

    Um einen Container mit einer nicht-`none` `snapped`-Scroll-Zustandsabfrage zu bewerten, muss er ein Container mit einem Scroll-Container-Vorfahren sein, der einen {{cssxref("scroll-snap-type")}}-Wert ungleich `none` hat. Eine `snapped: none`-Abfrage wird auch dann passen, wenn es keinen Scroll-Container-Vorfahren gibt.

    Bewertungen erfolgen, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignisse im Scroll-Snap-Container auftreten. Wenn der Test bestanden wird, werden die Regeln im `@container`-Block auf Nachkommen des Containers angewendet.

    Um zu überprüfen, ob ein Container ein Snap-Ziel ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`

  - : Überprüft, ob ein Container mit einem {{cssxref("position")}} Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an eine Kante seines scrollenden Container-Vorfahren haftet. Gültige `stuck`-Werte umfassen die folgenden Schlüsselwörter:

    - `none`
      - : Der Container haftet nicht an einer Kante des Containers. Beachten Sie, dass `none`-Abfragen auch dann passen, wenn der Container `position: sticky` nicht gesetzt hat.
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

    Um einen Container mit einer nicht-`none` `stuck`-Scroll-Zustandsabfrage zu bewerten, muss er `position: sticky` gesetzt haben und sich in einem Scroll-Container befinden. Wenn der Test bestanden wird, werden die Regeln im `@container`-Block auf Nachkommen des `position: sticky` Containers angewendet.

    Es ist möglich, dass gleichzeitig zwei Werte von gegenüberliegenden Achsen übereinstimmen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Allerdings werden zwei Werte von gegenüberliegenden Kanten niemals gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) {
      /* … */
    }
    ```

    Um zu überprüfen, ob ein Container haftet, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

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

Ein Einschließungskontext kann unter Verwendung der `container-type`-Eigenschaft erstellt werden, in diesem Fall mit dem `inline-size`-Wert auf der `.post`-Klasse. Sie können dann die `@container`-At-Regel verwenden, um Stile auf das Element mit der `.card`-Klasse in einem Container anzuwenden, der schmaler ist als `650px`.

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

### Erstellen von benannten Containerkontexten

Das folgende HTML-Beispiel, das eine Kartenkomponente mit einem Titel und etwas Text zeigt:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Zuerst erstellen Sie einen Einschließungskontext unter Verwendung der `container-type`- und `container-name`-Eigenschaften. Die Kurzschreibsyntax für diese Deklaration ist auf der {{cssxref("container")}}-Seite beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Anschließend fügen Sie der Containerabfrage den Namen hinzu, um diesen Container zu adressieren:

```css
@container summary (min-width: 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Containerabfragen

Es ist nicht möglich, mehrere Container in einer einzigen Containerabfrage anzusprechen. Es ist jedoch möglich, verschachtelte Containerabfragen zu verwenden, die denselben Effekt haben.

Die folgende Abfrage wird wahr ausgewertet und wendet den deklarierten Stil an, wenn der Container mit dem Namen `summary` breiter als `400px` ist und ein Vorfahre-Container breiter als `800px` ist:

```css
@container summary (min-width: 400px) {
  @container (min-width: 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stilabfragen

Containerabfragen können auch den berechneten Stil des Containerelements auswerten. Eine _Container-Stilabfrage_ ist eine `@container`-Abfrage, die eine oder mehrere `style()`-Funktionalnotationen verwendet. Die boolesche Syntax und die Logik zur Kombination von Stilfunktionen in einer Stilabfrage ist dieselbe wie bei [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jedes `style()` ist eine einzelne `<style-feature>`. Ein **`<style-feature>`** ist eine gültige CSS-[Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Eine Stilfunktion ohne Wert wird als wahr ausgewertet, wenn der berechnete Wert von dem Initialwert für die gegebene Eigenschaft abweicht.

Wenn das `<style-feature>`, das als Argument der `style()`-Funktion übergeben wird, eine Deklaration ist, wird die Stilabfrage als wahr ausgewertet, wenn der Deklarationswert mit dem berechneten Wert dieser Eigenschaft für den abgefragten Container übereinstimmt. Andernfalls wird es als falsch ausgewertet.

Die folgende Containerabfrage überprüft, ob der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der `--accent-color` des Containerelements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, stimmt der entsprechende Hexadezimalcode `#0000ff` nicht überein, es sei denn, die Eigenschaft wurde mit {{cssxref("@property")}} als Farbe definiert, sodass der Browser die berechneten Werte ordnungsgemäß vergleichen kann.

Stilfunktionen, die eine Kurzschreibweise abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langschreibeigenschaften übereinstimmen, und andernfalls falsch. Zum Beispiel wird `@container style(border: 2px solid red)` als wahr ausgewertet, wenn alle 12 Langschreibeigenschaften (`border-bottom-style`, etc.), die diese Kurzschreibweise ausmachen, wahr sind.

Die globalen Werte `revert` und `revert-layer` sind ungültig als Werte in einem `<style-feature>` und führen dazu, dass die Container-Stilabfrage als falsch ausgewertet wird.

### Scroll-Zustand-Abfragen

Siehe [Verwendung von Scroll-Zustand-Abfragen für Container](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) für vollständige Durchführungen von Scroll-Zustand-Abfragebeispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und -stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Scroll-Zustand-Abfragen für Container](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS-Einschließungsmodul](/de/docs/Web/CSS/CSS_containment)
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
