---
title: "@container"
slug: Web/CSS/@container
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{CSSRef}}

Die **`@container`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ist eine bedingte Gruppenregel, die Stile auf einen [Einschluss-Kontext](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) anwendet.
Stildeklarationen werden durch eine Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung erfüllt ist.
Die Bedingung wird ausgewertet, wenn sich die Größe des abgefragten Containers, [`<style-feature>`](#container-stilabfragen) oder der Scrollstatus ändert.

Die Eigenschaft {{cssxref("container-name")}} spezifiziert eine Liste von Abfragecontainer-Namen. Diese Namen können von `@container`-Regeln verwendet werden, um festzulegen, welche Abfragecontainer angesprochen werden sollen. Der optionale, groß-/kleinschreibungssensible `<container-name>` filtert die Abfragecontainer, die von der Abfrage angesprochen werden.

Sobald ein berechtigter Abfragecontainer für ein Element ausgewählt wurde, wird jedes Containermerkmal im `<container-condition>` gegen diesen Abfragecontainer ausgewertet.

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
  - : Ein optionaler `<container-name>` und eine `<container-query>`. Stile, die im `<stylesheet>` definiert sind, werden angewendet, wenn die Bedingung erfüllt ist.
    - `<container-name>`
      - : Optional. Der Name des Containers, auf den die Stile angewendet werden sollen, wenn die Abfrage zu true ausgewertet wird, angegeben als ein {{cssxref("ident")}}.
    - `<container-query>`
      - : Eine Menge von Merkmalen, die gegen den Abfragecontainer ausgewertet werden, wenn sich die Größe, [`<style-feature>`](#container-stilabfragen) oder der Scrollstatus des Containers ändert.

### Logische Schlüsselwörter in Container-Abfragen

Logische Schlüsselwörter können verwendet werden, um die Containerbedingung zu definieren:

- `and` kombiniert zwei oder mehr Bedingungen.
- `or` kombiniert zwei oder mehr Bedingungen.
- `not` negiert die Bedingung. Pro Containerabfrage ist nur eine 'not'-Bedingung erlaubt und kann nicht mit den Schlüsselwörtern `and` oder `or` verwendet werden.

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

Ein Einschlusskontext kann mittels der Eigenschaft {{cssxref("container-name")}} benannt werden.

```css
.post {
  container-name: sidebar;
  container-type: inline-size;
}
```

Die Kurzsyntax dafür ist die Verwendung von {{cssxref("container")}} in der Form `container: <name> / <type>`, zum Beispiel:

```css
.post {
  container: sidebar / inline-size;
}
```

In Container-Abfragen wird die Eigenschaft {{cssxref("container-name")}} verwendet, um die Menge der Container auf diejenigen mit einem passenden Abfragecontainer-Namen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Verwendung und zu Namensbeschränkungen sind auf der Seite {{cssxref("container-name")}} beschrieben.

### Deskriptoren

Die `<container-condition>`-Abfragen umfassen [Größe](#größen-container-deskriptoren) und [Scrollstatus](#scrollstatus-container-deskriptoren)-Container-Deskriptoren.

#### Größen-Container-Deskriptoren

Die `<container-condition>` kann eine oder mehrere Boolesche Größenabfragen enthalten, jede innerhalb eines Klammerpaars. Eine Größenabfrage umfasst einen Größen-Deskriptor, einen Wert und — abhängig vom Deskriptor — einen Vergleichsoperator. Die Syntax für mehrere Bedingungen ist dieselbe wie für [`@media`](/de/docs/Web/CSS/@media)-Größenmerkmal-Abfragen.

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
  - : Das {{cssxref("aspect-ratio")}} des Containers, berechnet als das Verhältnis der Breite zur Höhe des Containers, ausgedrückt als {{cssxref("ratio")}}-Wert.

- `block-size`
  - : Die {{cssxref("block-size")}} des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

- `height`
  - : Die Höhe des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

- `inline-size`
  - : Die {{cssxref("inline-size")}} des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

- `orientation`
  - : Die [Orientierung](/de/docs/Web/CSS/@media/orientation) des Containers, entweder `landscape` oder `portrait`.

- `width`
  - : Die Breite des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

#### Scrollstatus-Container-Deskriptoren

Scrollstatus-Container-Deskriptoren werden innerhalb der `<container-condition>` in einem Klammerpaar nach dem `scroll-state`-Schlüsselwort angegeben, zum Beispiel:

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

Unterstützte Schlüsselwörter für Scrollstatus-Container-Deskriptoren umfassen physische und {{Glossary("flow_relative_values", "flussrelative Werte")}}:

- `scrollable`
  - : Abfragt, ob der Container in der angegebenen Richtung durch vom Nutzer initiiertes Scrollen, wie durch Ziehen des Scrollbalkens oder eine Trackpad-Geste, gescrollt werden kann. Mit anderen Worten, gibt es überlaufenden Inhalt in der angegebenen Richtung, der gescrollt werden kann? Zulässige `scrollable`-Werte umfassen folgende Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scrollcontainer")}} oder kann anderweitig in keiner Richtung gescrollt werden.
    - `top`
      - : Der Container kann zu seinem oberen Rand gescrollt werden.
    - `right`
      - : Der Container kann zu seinem rechten Rand gescrollt werden.
    - `bottom`
      - : Der Container kann zu seinem unteren Rand gescrollt werden.
    - `left`
      - : Der Container kann zu seinem linken Rand gescrollt werden.
    - `x`
      - : Der Container kann horizontal zu einem oder beiden seiner linken oder rechten Ränder gescrollt werden.
    - `y`
      - : Der Container kann vertikal zu einem oder beiden seiner oberen oder unteren Ränder gescrollt werden.
    - `block-start`
      - : Der Container kann zu seinem blockanfang-Rand gescrollt werden.
    - `block-end`
      - : Der Container kann zu seinem blockende-Rand gescrollt werden.
    - `inline-start`
      - : Der Container kann zu seinem inline-anfang-Rand gescrollt werden.
    - `inline-end`
      - : Der Container kann zu seinem inline-ende-Rand gescrollt werden.
    - `block`
      - : Der Container kann in seiner Blockrichtung zu einem oder beiden seiner blockanfang- oder blockende-Ränder gescrollt werden.
    - `inline`
      - : Der Container kann in seiner Inlinerichtung zu einem oder beiden seiner inline-anfang- und inline-ende-Ränder gescrollt werden.

    Wenn der Test bestanden wird, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des Scrollcontainers angewendet.

    Um zu bewerten, ob ein Container scrollbar ist, ohne auf die Richtung zu achten, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `snapped`
  - : Abfragt, ob der Container ein Snap-Ziel eines [Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)-Container-Vorfahren in der angegebenen Achse ist oder sein wird. Zulässige `snapped`-Werte umfassen folgende Schlüsselwörter:
    - `none`
      - : Der Container ist kein Scroll-Snap-Ziel für seinen Vorfahren-Scrollcontainer. Bei der Implementierung einer `snapped: none`-Abfrage werden Container, die Snap-Ziele für den Scrollcontainer sind, _nicht_ die `@container`-Stile angewendet, während Nicht-Snap-Ziele die Stile angewendet bekommen.
    - `x`
      - : Der Container ist ein horizontales Scroll-Snap-Ziel für seinen Vorfahren-Scrollcontainer, das heißt, er schnappt horizontal zu seinem Vorfahren.
    - `y`
      - : Der Container ist ein vertikales Scroll-Snap-Ziel für seinen Vorfahren-Scrollcontainer, das heißt, er schnappt vertikal zu seinem Vorfahren.
    - `block`
      - : Der Container ist ein Block-Achsen-Scroll-Snap-Ziel für seinen Vorfahren-Scrollcontainer, das heißt, er schnappt zu seinem Vorfahren in der Blockrichtung.
    - `inline`
      - : Der Container ist ein Inline-Achsen-Scroll-Snap-Ziel für seinen Vorfahren-Scrollcontainer, das heißt, er schnappt zu seinem Vorfahren in der Inlinerichtung.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch ein vertikales Scroll-Snap-Ziel für seinen Vorfahren-Scrollcontainer und schnappt zu seinem Vorfahren in beiden Richtungen. Der Container wird nicht passen, wenn er nur zu seinem Vorfahren entlang der horizontalen _oder_ vertikalen Achse schnappt. Er muss beide sein.

    Um einen Container mit einer nicht-`none` `snapped` Scroll-Status-Abfrage zu bewerten, muss es sich um einen Container mit einem Scrollcontainer-Vorfahren handeln, der einen {{cssxref("scroll-snap-type")}}-Wert ungleich `none` hat. Eine `snapped: none`-Abfrage wird auch dann übereinstimmen, wenn kein Scrollcontainer-Vorfahre vorhanden ist.

    Bewertungen erfolgen, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignisse auf dem Scroll-Snap-Container ausgelöst werden. Wenn der Test bestanden wird, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des Containers angewendet.

    Um zu bewerten, ob ein Container ein Snap-Ziel ist, ohne auf die Richtung zu achten, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`
  - : Abfragt, ob ein Container mit einem {{cssxref("position")}}-Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an einer Kante seines scrollbaren Vorfahren-Containers festklebt. Zulässige `stuck`-Werte umfassen folgende Schlüsselwörter:
    - `none`
      - : Der Container ist an keiner Kante seines Behälters festgeklebt. Beachten Sie, dass `none`-Abfragen auch dann übereinstimmen, wenn der Container kein `position: sticky` gesetzt hat.
    - `top`
      - : Der Container klebt an der oberen Kante seines Behälters.
    - `right`
      - : Der Container klebt an der rechten Kante seines Behälters.
    - `bottom`
      - : Der Container klebt an der unteren Kante seines Behälters.
    - `left`
      - : Der Container klebt an der linken Kante seines Behälters.
    - `block-start`
      - : Der Container klebt an der Blockanfang-Kante seines Behälters.
    - `block-end`
      - : Der Container klebt an der Blockende-Kante seines Behälters.
    - `inline-start`
      - : Der Container klebt an der Inline-Anfangskante seines Behälters.
    - `inline-end`
      - : Der Container klebt an der Inline-Endekante seines Behälters.

    Um einen Container mit einer nicht-`none` `stuck` Scroll-Status-Abfrage zu bewerten, muss `position: sticky` darauf gesetzt sein und sich in einem Scrollcontainer befinden. Wenn der Test bestanden wird, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des `position: sticky`-Containers angewendet.

    Es ist möglich, dass zwei Werte aus entgegengesetzten Achsen gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Allerdings werden zwei Werte aus entgegengesetzten Kanten niemals gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) {
      /* … */
    }
    ```

    Um zu bewerten, ob ein Container feststeckt, ohne auf die Richtung zu achten, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(stuck: none) {
      /* … */
    }
    ```

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen von Stilen basierend auf der Größe eines Containers

Betrachten Sie das folgende Beispiel eines Kartenkomponenten mit einem Titel und Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Container-Kontext kann mit der Eigenschaft `container-type` erstellt werden, in diesem Fall mit dem Wert `inline-size` auf der Klasse `.post`.
Anschließend können Sie die `@container` At-Regel verwenden, um Stile auf das Element mit der Klasse `.card` in einem Container anzuwenden, der schmaler als `650px` ist.

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

Angesichts des folgenden HTML-Beispiels, das eine Kartenkomponente mit einem Titel und Text ist:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Zuerst erstellen Sie einen Container-Kontext mit den Eigenschaften `container-type` und `container-name`.
Die Kurzsyntax für diese Deklaration wird auf der {{cssxref("container")}}-Seite beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Als nächstes zielen Sie auf diesen Container, indem Sie den Namen zur Container-Abfrage hinzufügen:

```css
@container summary (width >= 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Container-Abfragen

Es ist nicht möglich, mehrere Container in einer einzigen Container-Abfrage anzusprechen.
Es ist möglich, Container-Abfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage wird zu true ausgewertet und wendet den deklarierten Stil an, wenn der Container namens `summary` breiter als `400px` ist und einen übergeordneten Container hat, der breiter als `800px` ist:

```css
@container summary (width > 400px) {
  @container (width > 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stilabfragen

Container-Abfragen können auch den berechneten Stil des Containerelements auswerten. Eine _Container-Stilabfrage_ ist eine `@container`-Abfrage, die eine oder mehrere `style()`-Funktionsnotationen verwendet. Die boolesche Syntax und Logik zum Kombinieren von Stilmerkmalen in einer Stilabfrage ist dieselbe wie für [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

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

Ein Stilmerkmal ohne Wert wird zu true ausgewertet, wenn der berechnete Wert vom Anfangswert für die gegebene Eigenschaft abweicht.

Wenn das `<style-feature>`, das als Argument der `style()`-Funktion übergeben wird, eine Deklaration ist, wird die Stilabfrage zu true ausgewertet, wenn der Wert der Deklaration mit dem berechneten Wert dieser Eigenschaft für den abgefragten Container übereinstimmt. Andernfalls löst es zu false auf.

Die folgende Container-Abfrage überprüft, ob der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) des Containerelements `--accent-color` `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, stimmt der äquivalente hexadezimale Code `#0000ff` nicht überein, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, damit der Browser berechnete Werte richtig vergleichen kann.

Stilmerkmale, die eine Kurzschreibweise abfragen, sind zutreffend, wenn die berechneten Werte für jede ihrer Langform-Eigenschaften übereinstimmen, und andererseits falsch. Zum Beispiel wird `@container style(border: 2px solid red)` zu true ausgewertet, wenn alle 12 Langform-Eigenschaften (`border-bottom-style`, usw.), die diese Kurzschreibweise ausmachen, zutreffend sind.

Die globalen Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Container-Stilabfrage zu false wird.

### Abfragen des Scrollstatus

Siehe [Verwendung von Container-Scrollstatus-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) für vollständige Anleitungen zu Beispielen von Scrollstatus-Abfragen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container-Scrollstatus-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS-Einschlussmodul](/de/docs/Web/CSS/CSS_containment)
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
