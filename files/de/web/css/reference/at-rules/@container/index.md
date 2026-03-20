---
title: "@container"
slug: Web/CSS/Reference/At-rules/@container
l10n:
  sourceCommit: 6f498c48ad30499640fd721896f13949aded9990
---

Die **`@container`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ist eine bedingte Gruppenregel, die Stile auf einen [Einschließungskontext](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts) anwendet. Stildefinitionen werden durch eine Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung wahr ist. Die Bedingung wird ausgewertet, wenn sich die abgefragte Containergröße, [`<style-feature>`](#container-stilabfragen) oder der Scroll-Zustand ändert.

Die Eigenschaft {{cssxref("container-name")}} gibt eine Liste von Abfragecontainernamen an. Diese Namen können von `@container`-Regeln verwendet werden, um zu filtern, welche Abfragecontainer angesprochen werden. Der optionale, Groß-/Kleinschreibung beachtende `<container-name>` filtert die Abfragecontainer, die von der Abfrage angesprochen werden.

Sobald ein geeigneter Abfragecontainer für ein Element ausgewählt wurde, wird jede Containerfunktion innerhalb der `<container-condition>` gegen diesen Abfragecontainer ausgewertet.

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
  - : Ein optionaler `<container-name>` und eine `<container-query>`. Stile, die im `<stylesheet>` definiert sind, werden angewendet, wenn die Bedingung wahr ist.
    - `<container-name>`
      - : Optional. Der Name des Containers, auf den die Stile angewendet werden, wenn die Abfrage als wahr bewertet wird, angegeben als ein {{cssxref("ident")}}.
    - `<container-query>`
      - : Eine Reihe von Funktionen, die gegen den Abfragecontainer ausgewertet werden, wenn sich die Größe, [`<style-feature>`](#container-stilabfragen) oder der Scroll-Zustand des Containers ändert.

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

### Benannte Einschließungskontexte

Ein Einschließungskontext kann mit der Eigenschaft {{cssxref("container-name")}} benannt werden.

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

In Containerabfragen wird die Eigenschaft {{cssxref("container-name")}} verwendet, um die Menge der Container auf diejenigen mit einem passenden Abfragecontainernamen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details über die Verwendung und Namensbeschränkungen sind auf der Seite {{cssxref("container-name")}} beschrieben.

### Deskriptoren

Die `<container-condition>`-Abfragen beinhalten [Größen-](#größen-containerdeskriptoren) und [Scroll-Zustands](#scroll-zustands-containerdeskriptoren)-Containerdeskriptoren.

#### Größen-Containerdeskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größenabfragen enthalten, jede innerhalb eines Klammerpaars. Eine Größenabfrage enthält einen Größendeskriptor, einen Wert und - abhängig vom Deskriptor - einen Vergleichsoperator. Die Abfragen messen immer den [Inhaltsbereich](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) als Vergleich. Die Syntax zur Einbeziehung mehrerer Bedingungen ist dieselbe wie bei {{cssxref("@media")}}-Größenfunktionsabfragen.

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
  - : Das {{cssxref("aspect-ratio")}} des Containers, berechnet als Verhältnis von Breite zu Höhe des Containers, ausgedrückt als {{cssxref("ratio")}}-Wert.

- `block-size`
  - : Die {{cssxref("block-size")}} des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

- `height`
  - : Die Höhe des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

- `inline-size`
  - : Die {{cssxref("inline-size")}} des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

- `orientation`
  - : Die [Ausrichtung](/de/docs/Web/CSS/Reference/At-rules/@media/orientation) des Containers, entweder `landscape` oder `portrait`.

- `width`
  - : Die Breite des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

#### Scroll-Zustands-Containerdeskriptoren

Scroll-Zustands-Containerdeskriptoren werden innerhalb der `<container-condition>` innerhalb eines Klammerpaars nach dem `scroll-state`-Schlüsselwort angegeben, zum Beispiel:

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

Unterstützte Schlüsselwörter für Scroll-Zustands-Containerdeskriptoren beinhalten {{Glossary("physical_properties", "physikalische")}} und {{Glossary("flow_relative_values", "flussrelative")}} Werte.

- `scrollable`
  - : Fragt ab, ob der Container in die gegebene Richtung durch benutzerinitiierte Scroll-Bewegungen gescrollt werden kann, wie z.B. durch Ziehen des Scrollbalkens oder durch Verwendung einer Trackpad-Geste. Mit anderen Worten, gibt es überlaufenden Inhalt in der angegebenen Richtung, zu dem gescrollt werden kann? Gültige `scrollable`-Werte beinhalten die folgenden Schlüsselwörter:
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
      - : Der Container kann horizontal in Richtung einer oder beider seiner linken oder rechten Kanten gescrollt werden.
    - `y`
      - : Der Container kann vertikal in Richtung einer oder beider seiner oberen oder unteren Kanten gescrollt werden.
    - `block-start`
      - : Der Container kann in Richtung seiner Block-Anfangskante gescrollt werden.
    - `block-end`
      - : Der Container kann in Richtung seiner Block-Endkante gescrollt werden.
    - `inline-start`
      - : Der Container kann in Richtung seiner Inline-Anfangskante gescrollt werden.
    - `inline-end`
      - : Der Container kann in Richtung seiner Inline-Endkante gescrollt werden.
    - `block`
      - : Der Container kann in seiner Block-Richtung in Richtung einer oder beider seiner Block-Anfangs- oder Block-Endkanten gescrollt werden.
    - `inline`
      - : Der Container kann in seiner Inline-Richtung in Richtung einer oder beider seiner Inline-Anfangs- und Inline-Endkanten gescrollt werden.

    Wenn der Test bestanden wird, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des Scroll-Containers angewendet.

    Um zu prüfen, ob ein Container ohne Berücksichtigung der Richtung gescrollt werden kann, verwenden Sie den `none`-Wert mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `scrolled`
  - : Fragt, ob der Container zuletzt in eine bestimmte Richtung gescrollt wurde. Gültige `scrolled`-Werte beinhalten die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder wurde anderweitig nicht zuvor in irgendeine Richtung gescrollt.
    - `top`
      - : Der Container wurde zuletzt in Richtung seiner oberen Kante gescrollt.
    - `right`
      - : Der Container wurde zuletzt in Richtung seiner rechten Kante gescrollt.
    - `bottom`
      - : Der Container wurde zuletzt in Richtung seiner unteren Kante gescrollt.
    - `left`
      - : Der Container wurde zuletzt in Richtung seiner linken Kante gescrollt.
    - `x`
      - : Der Container wurde zuletzt in Richtung einer seiner linken oder rechten Kanten gescrollt.
    - `y`
      - : Der Container wurde zuletzt in Richtung einer seiner oberen oder unteren Kanten gescrollt.
    - `block-start`
      - : Der Container wurde zuletzt in Richtung seiner Block-Anfangskante gescrollt.
    - `block-end`
      - : Der Container wurde zuletzt in Richtung seiner Block-Endkante gescrollt.
    - `inline-start`
      - : Der Container wurde zuletzt in Richtung seiner Inline-Anfangskante gescrollt.
    - `inline-end`
      - : Der Container wurde zuletzt in Richtung seiner Inline-Endkante gescrollt.
    - `block`
      - : Der Container wurde zuletzt in Richtung seiner Block-Anfangs- oder Block-Endkanten gescrollt.
    - `inline`
      - : Der Container wurde zuletzt in Richtung seiner Inline-Anfangs- oder Inline-Endkanten gescrollt.

    Wenn der Test wahr ist, werden die Regeln, die im `@container`-Block verschachtelt sind, auf die Nachkommen des Scroll-Containers angewendet.

    Um zu prüfen, ob ein Container kürzlich gescrollt wurde, ohne die Richtung zu berücksichtigen, verwenden Sie den `none`-Wert mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrolled: none) {
      /* … */
    }
    ```

- `snapped`
  - : Fragt ab, ob der Container zu einem [Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Container-Vorfahren entlang der angegebenen Achse aufspringen wird. Gültige `snapped`-Werte beinhalten die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein Scroll-{{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} für seinen Vorfahren-Scroll-Container. Bei der Implementierung einer `snapped: none`-Abfrage werden Container, die _Snap-Ziele_ für den Scroll-Container sind, _nicht_ die `@container`-Stile angewendet, während Nicht-Snap-Ziele _werden_ die Stile erhalten.
    - `x`
      - : Der Container ist ein horizontales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er schnappte horizontal zu seinem Vorfahren.
    - `y`
      - : Der Container ist ein vertikales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er schnappte vertikal zu seinem Vorfahren.
    - `block`
      - : Der Container ist ein Block-Achsen-Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er schnappte zu seinem Vorfahren in der Block-Richtung.
    - `inline`
      - : Der Container ist ein Inline-Achsen-Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er schnappte zu seinem Vorfahren in der Inline-Richtung.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch ein vertikales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container und schnappte zu seinem Vorfahren in beiden Richtungen. Der Container wird nicht übereinstimmen, wenn er nur zu seinem Vorfahren entlang der horizontalen _oder_ vertikalen Achse schnappt. Es muss beides sein.

    Um einen Container mit einer nicht-`none` `snapped`-Scroll-Zustandsabfrage auszuwerten, muss es ein Container mit einem Scroll-Container Vorfahren sein, der einen {{cssxref("scroll-snap-type")}}-Wert ungleich `none` hat. Eine `snapped: none`-Abfrage wird übereinstimmen, selbst wenn es keinen Scroll-Container-Vorfahren gibt.

    Auswertungen erfolgen, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignisse auf dem Scroll-Snap-Container ausgelöst werden. Wenn der Test bestanden wird, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des Containers angewendet.

    Um zu prüfen, ob ein Container ein Snap-Ziel ist, ohne die Richtung zu berücksichtigen, verwenden Sie den `none`-Wert mit dem `not`-Operator:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`
  - : Fragt ab, ob ein Container mit einem {{cssxref("position")}}-Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an einer Kante seines Scroll-Container-Vorfahren festklebt. Gültige `stuck`-Werte beinhalten die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist an keiner Kante seines Containers festgeklebt. Beachten Sie, dass `none`-Abfragen auch dann übereinstimmen, wenn der Container nicht über `position: sticky` verfügt.
    - `top`
      - : Der Container ist an der oberen Kante seines Containers festgeklebt.
    - `right`
      - : Der Container ist an der rechten Kante seines Containers festgeklebt.
    - `bottom`
      - : Der Container ist an der unteren Kante seines Containers festgeklebt.
    - `left`
      - : Der Container ist an der linken Kante seines Containers festgeklebt.
    - `block-start`
      - : Der Container ist an der Block-Anfangskante seines Containers festgeklebt.
    - `block-end`
      - : Der Container ist an der Block-Endkante seines Containers festgeklebt.
    - `inline-start`
      - : Der Container ist an der Inline-Anfangskante seines Containers festgeklebt.
    - `inline-end`
      - : Der Container ist an der Inline-Endkante seines Containers festgeklebt.

    Um einen Container mit einer nicht-`none` `stuck`-Scroll-Zustandsabfrage zu überprüfen, muss er `position: sticky` aufweisen und sich in einem Scroll-Container befinden. Wenn der Test bestanden ist, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des `position: sticky`-Containers angewendet.

    Es ist möglich, dass zwei Werte von gegenüberliegenden Achsen gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Allerdings werden zwei Werte von gegenüberliegenden Kanten nie gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) {
      /* … */
    }
    ```

    Um zu prüfen, ob ein Container festklebt, ohne die Richtung zu berücksichtigen, verwenden Sie den `none`-Wert mit dem `not`-Operator:

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

Ein Containerkontext kann mit der `container-type`-Eigenschaft erstellt werden, in diesem Fall unter Verwendung des `inline-size`-Werts für die `.post`-Klasse. Sie können dann die `@container`-At-Regel verwenden, um Stile auf das Element mit der `.card`-Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

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

### Erstellen benannter Containerkontexte

Angesichts des folgenden HTML-Beispiels, das eine Kartenkomponente mit einem Titel und etwas Text ist:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Erstellen Sie zunächst einen Containerkontext unter Verwendung der `container-type`- und `container-name`-Eigenschaften. Die Kurzschreibweise für diese Deklaration ist auf der Seite {{cssxref("container")}} beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Ziel dieses Containers ist es dann, den Namen zur Containerabfrage hinzuzufügen:

```css
@container summary (width >= 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Containerabfragen

Es ist nicht möglich, mehrere Container in einer einzigen Containerabfrage zu adressieren. Es ist möglich, Containerabfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage wird wahr und wendet den deklarierten Stil an, wenn der Container mit dem Namen `summary` breiter als `400px` ist und ein Vorfahrencontainer breiter als `800px` ist:

```css
@container summary (width > 400px) {
  @container (width > 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stilabfragen

Containerabfragen können auch den berechneten Stil des Containerelements auswerten. Eine _Container-Stilabfrage_ ist eine `@container`-Abfrage, die eine oder mehrere `style()`-Funktionalnotationen verwendet. Die boolesche Syntax und Logik zum Kombinieren von Stilfunktionen in eine Stilabfrage ist dieselbe wie bei [CSS-Funktionsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jedes `style()` ist ein einzelnes `<style-feature>`. Ein **`<style-feature>`** ist eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Eine Stilfunktion ohne Wert wird als wahr ausgewertet, wenn der berechnete Wert von dem Initialwert für die gegebene Eigenschaft abweicht.

Wenn das `<style-feature>`, das als Argument der `style()`-Funktion übergeben wird, eine Deklaration ist, wird die Stilabfrage als wahr bewertet, wenn der Wert der Deklaration mit dem berechneten Wert dieser Eigenschaft für den abgefragten Container übereinstimmt. Andernfalls ergibt sie falsch.

Die folgende Containerabfrage überprüft, ob der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der `--accent-color` des Containerelements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, wird der entsprechende Hexadezimalcode `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, sodass der Browser die berechneten Werte korrekt vergleichen kann.

Stilfunktionen, die eine Kurzschrift-Eigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langform-Eigenschaften übereinstimmen, und andernfalls falsch. Zum Beispiel wird `@container style(border: 2px solid red)` als wahr bewertet, wenn alle 12 Langform-Eigenschaften (`border-bottom-style`, etc.), die diese Kurzschrift ausmachen, wahr sind.

Beachten Sie, dass [`!important`](/de/docs/Web/CSS/Reference/Values/important) in Stilabfragen erlaubt ist, aber ignoriert wird.

```css
/* !important is valid but has no effect */
@container style(--themeColor: purple !important) {
  /* <stylesheet> */
}
```

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Container-Stilabfrage falsch ist.

### Scroll-Zustandsabfragen

Sehen Sie sich [Die Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) für vollständige Anleitungen und Beispiele für Scroll-Zustandsabfragen an.

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
- [CSS-Einschließungsmodul](/de/docs/Web/CSS/Guides/Containment)
- [CSS At-Rule-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
