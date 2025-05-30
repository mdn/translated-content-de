---
title: "@container"
slug: Web/CSS/@container
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{CSSRef}}

Die **`@container`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ist eine konditionale Gruppenregel, die Stile auf einen [Containment-Kontext](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) anwendet.
Stilerklärungen werden durch eine Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung wahr ist.
Die Bedingung wird ausgewertet, wenn sich die abgefragte Containergröße, [`<style-feature>`](#container-stil-abfragen), oder der Scroll-Zustand ändert.

Die Eigenschaft {{cssxref("container-name")}} spezifiziert eine Liste von Abfrage-Containernamen. Diese Namen können von `@container`-Regeln verwendet werden, um zu filtern, welche Abfrage-Container angesprochen werden. Der optionale, groß-/kleinsensitve `<container-name>` filtert die Abfrage-Container, die durch die Abfrage angesprochen werden.

Sobald ein qualifizierter Abfrage-Container für ein Element ausgewählt wurde, wird jedes Container-Feature in der `<container-condition>` gegen diesen Abfrage-Container ausgewertet.

## Syntax

Die `@container`-At-Regel hat folgende Syntax:

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

  - : Ein optionaler `<container-name>` und ein `<container-query>`. Stile, die im `<stylesheet>` definiert sind, werden angewendet, wenn die Bedingung wahr ist.

    - `<container-name>`
      - : Optional. Der Name des Containers, auf den die Stile angewendet werden, wenn die Abfrage zu wahr ausgewertet wird, angegeben als ein {{cssxref("ident")}}.
    - `<container-query>`
      - : Eine Reihe von Features, die gegen den Abfrage-Container ausgewertet werden, wenn sich die Größe, [`<style-feature>`](#container-stil-abfragen), oder der Scroll-Zustand des Containers ändert.

- `<stylesheet>`
  - : Eine Reihe von CSS-Regeln oder Deklarationen.

### Logische Schlüsselwörter in Container-Abfragen

Logische Schlüsselwörter können verwendet werden, um die Container-Bedingung zu definieren:

- `and` kombiniert zwei oder mehr Bedingungen.
- `or` kombiniert zwei oder mehr Bedingungen.
- `not` negiert die Bedingung. Pro Container-Abfrage ist nur eine `not`-Bedingung erlaubt und kann nicht mit den Schlüsselwörtern `and` oder `or` verwendet werden.

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

In Container-Abfragen wird die Eigenschaft {{cssxref("container-name")}} verwendet, um die Menge der Container auf diejenigen mit einem passenden Abfrage-Containernamen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Verwendung und Benennungseinschränkungen sind auf der Seite {{cssxref("container-name")}} beschrieben.

### Deskriptoren

Die `<container-condition>`-Abfragen beinhalten [Größen-](#größen-container-deskriptoren) und [Scroll-Zustands-](#scroll-zustands-container-deskriptoren) Container-Deskriptoren.

#### Größen-Container-Deskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größen-Abfragen enthalten, jede innerhalb eines Satzes von Klammern. Eine Größen-Abfrage beinhaltet einen Größen-Deskriptor, einen Wert und – abhängig vom Deskriptor – einen Vergleichsoperator. Die Syntax für die Einbeziehung mehrerer Bedingungen ist dieselbe wie bei [`@media`](/de/docs/Web/CSS/@media)-Größen-Feature-Abfragen.

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

  - : Das {{cssxref("aspect-ratio")}} des Containers, berechnet als das Verhältnis von Breite zu Höhe des Containers, ausgedrückt als ein {{cssxref("ratio")}}-Wert.

- `block-size`

  - : Die {{cssxref("block-size")}} des Containers, ausgedrückt als ein {{cssxref("length")}}-Wert.

- `height`

  - : Die Höhe des Containers, ausgedrückt als ein {{cssxref("length")}}-Wert.

- `inline-size`

  - : Die {{cssxref("inline-size")}} des Containers, ausgedrückt als ein {{cssxref("length")}}-Wert.

- `orientation`

  - : Die [Orientierung](/de/docs/Web/CSS/@media/orientation) des Containers, entweder `landscape` oder `portrait`.

- `width`
  - : Die Breite des Containers, ausgedrückt als ein {{cssxref("length")}}-Wert.

#### Scroll-Zustands-Container-Deskriptoren

Scroll-Zustands-Container-Deskriptoren werden innerhalb der `<container-condition>` innerhalb eines Satzes von Klammern, die dem Schlüsselwort `scroll-state` folgen, angegeben, zum Beispiel:

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

Unterstützte Schlüsselwörter für Scroll-Zustands-Container-Deskriptoren beinhalten physische und {{Glossary("flow_relative_values", "flussrelevante Werte")}}

- `scrollable`

  - : Fragt ab, ob der Container in die angegebene Richtung durch benutzerinitiierte Bildläufe, wie z. B. durch Ziehen des Scrollbalkens oder Verwenden einer Trackpad-Geste, gescrollt werden kann. Mit anderen Worten, gibt es in der angegebenen Richtung überfließenden Inhalt, zu dem gescrollt werden kann? Gültige `scrollable`-Werte umfassen die folgenden Schlüsselwörter:

    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder kann ansonsten in keine Richtung gescrollt werden.
    - `top`
      - : Der Container kann zu seiner oberen Kante gescrollt werden.
    - `right`
      - : Der Container kann zu seiner rechten Kante gescrollt werden.
    - `bottom`
      - : Der Container kann zu seiner unteren Kante gescrollt werden.
    - `left`
      - : Der Container kann zu seiner linken Kante gescrollt werden.
    - `x`
      - : Der Container kann horizontal zu einer oder beiden seiner linken oder rechten Kanten gescrollt werden.
    - `y`
      - : Der Container kann vertikal zu einer oder beiden seiner oberen oder unteren Kanten gescrollt werden.
    - `block-start`
      - : Der Container kann zu seiner Block-Start-Kante gescrollt werden.
    - `block-end`
      - : Der Container kann zu seiner Block-End-Kante gescrollt werden.
    - `inline-start`
      - : Der Container kann zu seiner Inline-Start-Kante gescrollt werden.
    - `inline-end`
      - : Der Container kann zu seiner Inline-End-Kante gescrollt werden.
    - `block`
      - : Der Container kann in seine Block-Richtung zu einer oder beiden seiner Block-Start- oder Block-End-Kanten gescrollt werden.
    - `inline`
      - : Der Container kann in seine Inline-Richtung zu einer oder beiden seiner Inline-Start- und Inline-End-Kanten gescrollt werden.

    Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des Scroll-Containers angewendet.

    Um zu bewerten, ob ein Container scrollbar ist, ohne die Richtung zu berücksichtigen, verwenden Sie den `none`-Wert mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `snapped`

  - : Fragt ab, ob der Container, oder wird zukünftig, an einem [Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)-Container-Vorfahren entlang der angegebenen Achse eingerastet wird. Gültige `snapped`-Werte umfassen die folgenden Schlüsselwörter:

    - `none`
      - : Der Container ist kein Scroll-{{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} für seinen Vorfahren-Scroll-Container. Beim Implementieren einer `snapped: none`-Abfrage werden Container, die _sind_ Snap-Ziele für den Scroll-Container, _nicht_ die `@container`-Stile angewendet, während Nicht-Snap-Ziele _werden_ die Stile angewendet.
    - `x`
      - : Der Container ist ein horizontales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, das heißt, es schnappt horizontal an seinen Vorfahren.
    - `y`
      - : Der Container ist ein vertikales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, das heißt, es schnappt vertikal an seinen Vorfahren.
    - `block`
      - : Der Container ist ein Block-Achse-Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, das heißt, es schnappt an seinen Vorfahren in Block-Richtung.
    - `inline`
      - : Der Container ist ein Inline-Achse-Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, das heißt, es schnappt an seinen Vorfahren in Inline-Richtung.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch ein vertikales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container und schnappt in beide Richtungen an seinen Vorfahren. Der Container wird nicht passen, wenn er nur an seinen Vorfahren entlang der horizontalen _oder_ vertikalen Achse schnappt. Es muss beides sein.

    Um einen Container mit einer nicht-`none`-`snapped`-Scroll-Zustandsabfrage zu bewerten, muss es sich um einen Container mit einem Scroll-Container-Vorfahren handeln, der einen {{cssxref("scroll-snap-type")}}-Wert hat, der nicht `none` ist. Eine `snapped: none`-Abfrage wird auch dann passen, wenn kein Scroll-Container-Vorfahre vorhanden ist.

    Bewertungen erfolgen, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignisse auf dem Scroll-Snap-Container ausgelöst werden. Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des Containers angewendet.

    Um zu bewerten, ob ein Container ein Snap-Ziel ist, ohne die Richtung zu berücksichtigen, verwenden Sie den `none`-Wert mit dem `not`-Operator:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`

  - : Fragt ab, ob ein Container mit einem {{cssxref("position")}}-Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an einer Kante seines scrollenden Container-Vorfahren haftet. Gültige `stuck`-Werte umfassen die folgenden Schlüsselwörter:

    - `none`
      - : Der Container haftet an keiner Kante seines Containers. Beachten Sie, dass `none`-Abfragen auch dann passen, wenn der Container `position: sticky` nicht gesetzt hat.
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

    Um einen Container mit einer nicht-`none`-`stuck`-Scroll-Zustandsabfrage zu bewerten, muss er `position: sticky` gesetzt haben und sich in einem scrollenden Container befinden. Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des `position: sticky`-Containers angewendet.

    Es ist möglich, dass zwei Werte von entgegengesetzten Achsen gleichzeitig passen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Zwei Werte von entgegengesetzten Kanten werden jedoch niemals gleichzeitig passen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) {
      /* … */
    }
    ```

    Um zu bewerten, ob ein Container festgeklebt ist, ohne die Richtung zu berücksichtigen, verwenden Sie den `none`-Wert mit dem `not`-Operator:

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

Ein Container-Kontext kann mit der Eigenschaft `container-type` erstellt werden, in diesem Fall mit dem Wert `inline-size` in der `.post`-Klasse. Sie können dann die `@container`-At-Regel verwenden, um Stile auf das Element mit der `.card`-Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

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

Das folgende HTML-Beispiel, das eine Kartenkomponente mit einem Titel und etwas Text ist:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Zunächst erstellen Sie einen Container-Kontext mit den Eigenschaften `container-type` und `container-name`.
Die Kurzschreibweise für diese Deklaration wird auf der Seite {{cssxref("container")}} beschrieben.

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

Es ist nicht möglich, mehrere Container in einer einzigen Container-Abfrage anzusprechen.
Es ist jedoch möglich, Container-Abfragen zu verschachteln, was den gleichen Effekt hat.

Die folgende Abfrage wird zu wahr ausgewertet und wendet den deklarierten Stil an, wenn der Container mit dem Namen `summary` breiter als `400px` ist und einen Vorfahren-Container hat, der breiter als `800px` ist:

```css
@container summary (min-width: 400px) {
  @container (min-width: 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stil-Abfragen

Container-Abfragen können auch den berechneten Stil des Containerelements auswerten. Eine _Container-Stil-Abfrage_ ist eine `@container`-Abfrage, die eine oder mehrere `style()`-Funktionalnotationen verwendet. Die boolesche Syntax und Logik, die Stil-Features zu einer Stil-Abfrage kombiniert, ist die gleiche wie bei [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

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

Ein Stil-Feature ohne Wert wird als wahr ausgewertet, wenn der berechnete Wert ungleich dem Anfangswert für die gegebene Eigenschaft ist.

Wenn das `<style-feature>`, das als Argument der `style()`-Funktion übergeben wird, eine Deklaration ist, wird die Stil-Abfrage als wahr ausgewertet, wenn der Deklarationswert mit dem berechneten Wert dieser Eigenschaft für den abgefragten Container übereinstimmt. Andernfalls wird sie als falsch aufgelöst.

Die folgende Container-Abfrage überprüft, ob der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der `--accent-color` des Containerelements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, entspricht der äquivalente hexadezimale Code `#0000ff` nicht, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, sodass der Browser berechnete Werte richtig vergleichen kann.

Stil-Features, die eine Kurzschreibweiseabfrage nutzen, sind wahr, wenn die berechneten Werte für jede ihrer Langversion-Eigenschaften übereinstimmen, und falsch, wenn nicht. Zum Beispiel wird `@container style(border: 2px solid red)` als wahr aufgelöst, wenn alle 12 Langversion-Eigenschaften (`border-bottom-style`, etc.) dieser Kurzschreibweise wahr sind.

Die globalen Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Container-Stil-Abfrage als falsch ausgewertet wird.

### Scroll-Zustands-Abfragen

Vollständige Durchläufe von Scroll-Zustands-Abfragen finden Sie unter [Verwendung von Container-Scroll-Zustands-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Größen- und Stil-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustands-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS-Containment-Modul](/de/docs/Web/CSS/CSS_containment)
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
