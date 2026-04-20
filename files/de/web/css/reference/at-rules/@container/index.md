---
title: "`@container` CSS at-rule"
short-title: "@container"
slug: Web/CSS/Reference/At-rules/@container
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

Die **`@container`** [CSS](/de/docs/Web/CSS) [Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ist eine bedingte Gruppenregel, die Stile auf einen [Containment-Kontext](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts) anwendet. Stildeklarationen werden durch eine Bedingung gefiltert und auf die Elemente innerhalb des Containers angewendet, wenn die Bedingung wahr ist. Die Bedingung wird ausgewertet, wenn sich die abgefragte Containergröße, [`<style-feature>`](#container-stilabfragen) oder der Scroll-Zustand ändert.

Die Bedingung muss entweder {{cssxref("container-name")}} und/oder `<container-query>` spezifizieren.

Die {{cssxref("container-name")}} Eigenschaft spezifiziert eine Liste von Abfragecontainer-Namen, die verwendet werden, um festzulegen, welche Container durch die `@container` Regeln angesprochen werden. Die Features des Containers im `<container-query>` werden gegen die ausgewählten Container ausgewertet. Wenn kein `<container-name>` angegeben ist, werden die `<container-query>`-Features gegen den nächstgelegenen Vorfahren-Abfragecontainer mit passendem [`container-type`](/de/docs/Web/CSS/Reference/Properties/container-type) ausgewertet. Wenn kein `<container-query>` spezifiziert ist, werden benannte Container ausgewählt.

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

/* Boolean style() queries */
@container style(--theme: one) or style(--theme: two) {
  /* matched container styles */
}
@container style((--theme: one) or (--theme: two)) {
  /* matched container styles */
}
@container style(--theme: one) and style(--theme: two) {
  /* matched container styles */
}
@container style((--theme: one) and (--theme: two)) {
  /* matched container styles */
}
@container not style(--theme: one) {
  /* matched container styles */
}
```

### Parameter

- `<container-condition>`
  - : Einer oder beide von `<container-name>` und `<container-query>`. Stile, die im `<stylesheet>` definiert sind, werden angewendet, wenn die Bedingung `true` ist.
    - `<container-name>` {{optional_inline}}
      - : Der Name des Containers, der abgefragt wird; als {{cssxref("ident")}} angegeben. Wenn die Abfrage zu `true` ausgewertet wird, werden die deklarierten Stile auf die Nachfahren des Containers angewendet.
    - `<container-query>` {{optional_inline}}
      - : Eine Reihe von Features, die beim Ändern der Größe, [`<style-feature>`](#container-stilabfragen), des Scroll-Zustands oder des angewendeten Position-Try-Fallback des Containers gegen den Abfragecontainer ausgewertet werden.

### Logische Schlüsselwörter in Container-Abfragen

Logische Schlüsselwörter können verwendet werden, um die Container-Bedingung zu definieren:

- `and` kombiniert zwei oder mehr Bedingungen.
- `or` kombiniert zwei oder mehr Bedingungen.
- `not` negiert die Bedingung. Nur eine 'not'-Bedingung ist pro Container-Abfrage erlaubt und kann nicht mit den Schlüsseln `and` oder `or` verwendet werden.

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

Ein Containment-Kontext kann mit der {{cssxref("container-name")}}-Eigenschaft benannt werden.

```css
.post {
  container-name: sidebar;
  container-type: inline-size;
}
```

Die Kurzsyntax dafür ist, {{cssxref("container")}} in der Form `container: <name> / <type>` zu verwenden, zum Beispiel:

```css
.post {
  container: sidebar / inline-size;
}
```

In Container-Abfragen wird die {{cssxref("container-name")}}-Eigenschaft verwendet, um die Menge der Container nach einem passenden Abfragecontainer-Namen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Verwendung und Einschränkungen bei der Namensgebung sind auf der Seite {{cssxref("container-name")}} beschrieben.

### Deskriptoren

Die `<container-condition>`-Abfragen beinhalten [Größe](#größen-container-deskriptoren), [Scroll-Zustand](#scroll-state-container-deskriptoren) und [verankerte](#verankerte_container-deskriptoren) Container-Deskriptoren.

#### Größen-Container-Deskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größenabfragen enthalten, die jeweils innerhalb eines Parenthesen-Sets eingeschlossen sind. Eine Größenabfrage enthält einen Größen-Deskriptor, einen Wert und – abhängig vom Deskriptor – einen Vergleichsoperator. Die Abfragen messen immer die [Inhaltsbox](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) als Vergleich. Die Syntax zum Einbeziehen mehrerer Bedingungen entspricht der von {{cssxref("@media")}}-Größen-Feature-Abfragen.

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
  - : Das {{cssxref("aspect-ratio")}} des Containers wird als Verhältnis von Breite zu Höhe des Containers berechnet und als {{cssxref("ratio")}}-Wert ausgedrückt.

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

#### Scroll-State-Container-Deskriptoren

Scroll-State-Container-Deskriptoren werden innerhalb der `<container-condition>` als Argument für die `scroll-state()`-Funktion angegeben, zum Beispiel:

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

Unterstützte Schlüsselwörter für Scroll-State-Container-Deskriptoren beinhalten Werte aus {{Glossary("physical_properties", "physikalischen")}} und {{Glossary("flow_relative_values", "flussrelativen")}} Eigenschaften.

- `scrollable`
  - : Abfragt, ob der Container in der angegebenen Richtung durch benutzerinitiiertes Scrollen, z.B. durch Ziehen des Scrollbalkens oder mit einer Trackpad-Geste, gescrollt werden kann. Mit anderen Worten, gibt es überlaufenden Inhalt in der angegebenen Richtung, der gescrollt werden kann? Gültige `scrollable`-Werte beinhalten die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder kann anderweitig in keiner Richtung gescrollt werden.
    - `top`
      - : Der Container kann in Richtung seiner oberen Kante gescrollt werden.
    - `right`
      - : Der Container kann in Richtung seiner rechten Kante gescrollt werden.
    - `bottom`
      - : Der Container kann in Richtung seiner unteren Kante gescrollt werden.
    - `left`
      - : Der Container kann in Richtung seiner linken Kante gescrollt werden.
    - `x`
      - : Der Container kann horizontal in Richtung entweder seiner linken oder rechten Kante gescrollt werden.
    - `y`
      - : Der Container kann vertikal in Richtung entweder seiner oberen oder unteren Kante gescrollt werden.
    - `block-start`
      - : Der Container kann in Richtung seiner Block-Startkante gescrollt werden.
    - `block-end`
      - : Der Container kann in Richtung seiner Block-Endkante gescrollt werden.
    - `inline-start`
      - : Der Container kann in Richtung seiner Inline-Startkante gescrollt werden.
    - `inline-end`
      - : Der Container kann in Richtung seiner Inline-Endkante gescrollt werden.
    - `block`
      - : Der Container kann in seiner Block-Richtung in Richtung entweder seiner Block-Start- oder Block-End-Kante gescrollt werden.
    - `inline`
      - : Der Container kann in seiner Inline-Richtung in Richtung entweder seiner Inline-Start- oder Inline-End-Kantengesrollt werden.

    Wenn der Test bestanden wird, werden die Regeln innerhalb des `@container`-Blocks auf die Nachfahren des Scroll-Containers angewendet.

    Um zu beurteilen, ob ein Container scrollfähig ist, ohne sich um die Richtung zu kümmern, verwenden Sie den `none`-Wert mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `scrolled`
  - : Abfragt, ob der Container zuletzt in eine bestimmte Richtung gescrollt wurde. Gültige `scrolled`-Werte beinhalten die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder wurde anderweitig in keiner Richtung gescrollt.
    - `top`
      - : Der Container wurde zuletzt in Richtung seiner oberen Kante gescrollt.
    - `right`
      - : Der Container wurde zuletzt in Richtung seiner rechten Kante gescrollt.
    - `bottom`
      - : Der Container wurde zuletzt in Richtung seiner unteren Kante gescrollt.
    - `left`
      - : Der Container wurde zuletzt in Richtung seiner linken Kante gescrollt.
    - `x`
      - : Der Container wurde zuletzt in Richtung entweder seiner linken oder rechten Kanten gescrollt.
    - `y`
      - : Der Container wurde zuletzt in Richtung entweder seiner oberen oder unteren Kanten gescrollt.
    - `block-start`
      - : Der Container wurde zuletzt in Richtung seiner Block-Startkante gescrollt.
    - `block-end`
      - : Der Container wurde zuletzt in Richtung seiner Block-Endkante gescrollt.
    - `inline-start`
      - : Der Container wurde zuletzt in Richtung seiner Inline-Startkante gescrollt.
    - `inline-end`
      - : Der Container wurde zuletzt in Richtung seiner Inline-Endkante gescrollt.
    - `block`
      - : Der Container wurde zuletzt in Richtung entweder seiner Block-Start- oder Block-End-Kanten gescrollt.
    - `inline`
      - : Der Container wurde zuletzt in Richtung entweder seiner Inline-Start- oder Inline-End-Kanten gescrollt.

    Wenn der Test zu `true` zurückkehrt, werden die Regeln im `@container`-Block auf die Nachfahren des Scroll-Containers angewendet.

    Um zu beurteilen, ob ein Container kürzlich gescrollt wurde, ohne sich um die Richtung zu kümmern, verwenden Sie den `none`-Wert mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrolled: none) {
      /* … */
    }
    ```

- `snapped`
  - : Abfragt, ob der Container an einen [Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Container-Vorfahren entlang der gegebenen Achse geschnappt wird. Gültige `snapped`-Werte beinhalten die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein Scroll-{{Glossary("Scroll_snap#snap_target", "Ziel")}} für seinen Scroll-Container-Vorfahren. Wenn Sie eine Abfrage `snapped: none` implementieren, werden Container, die _sind_ Snap-Ziele für den Scroll-Container, _nicht_ die `@container`-Stile angewendet bekommen, wohingegen Nicht-Snap-Ziele _werden_ die Stile angewendet.
    - `x`
      - : Der Container ist ein horizontales Scroll-Snap-Ziel für seinen Scroll-Container-Vorfahren, das heißt, er schnappt sich horizontal zu seinem Vorfahren fest.
    - `y`
      - : Der Container ist ein vertikales Scroll-Snap-Ziel für seinen Scroll-Container-Vorfahren, das heißt, er schnappt sich vertikal zu seinem Vorfahren fest.
    - `block`
      - : Der Container ist ein Block-Achsen-Scroll-Snap-Ziel für seinen Scroll-Container-Vorfahren, das heißt, er schnappt sich in der Block-Richtung zu seinem Vorfahren fest.
    - `inline`
      - : Der Container ist ein Inline-Achsen-Scroll-Snap-Ziel für seinen Scroll-Container-Vorfahren, das heißt, er schnappt sich in der Inline-Richtung zu seinem Vorfahren fest.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch ein vertikales Scroll-Snap-Ziel für seinen Scroll-Container-Vorfahren und schnappt sich in beide Richtungen zu seinem Vorfahren fest. Der Container passt nicht, wenn er sich nur in einer der beiden Richtungen horizontal _oder_ vertikal zu seinem Vorfahren schnappt. Beide Richtungen sind erforderlich.

    Für die Bewertung eines Containers mit einer nicht-`none` `snapped` Scroll-Zustandsabfrage muss es sich um einen Container mit einem Scroll-Container-Vorfahren handeln, der einen {{cssxref("scroll-snap-type")}}-Wert ungleich `none` hat. Eine Abfrage mit `snapped: none` wird sogar dann passen, wenn es keinen Scroll-Container-Vorfahren gibt.

    Bewertungen erfolgen, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignisse auf dem Scroll-Snap-Container ausgelöst werden. Wenn der Test bestanden wird, werden die Regeln innerhalb des `@container`-Blocks auf die Nachfahren des Containers angewendet.

    Um zu bewerten, ob ein Container ein Snap-Ziel ist, ohne sich um die Richtung zu kümmern, verwenden Sie den `none`-Wert mit dem `not`-Operator:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`
  - : Abfragt, ob ein Container mit einem {{cssxref("position")}}-Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an einer Kante seines Scroll-Container-Vorfahren festhängt. Gültige `stuck`-Werte beinhalten die folgenden Schlüsselwörter:
    - `none`
      - : Der Container hängt nicht an einer seiner Kanten fest. Beachten Sie, dass `none`-Abfragen sogar dann passen, wenn der Container `position: sticky` nicht gesetzt hat.
    - `top`
      - : Der Container hängt an der oberen Kante seines Containers fest.
    - `right`
      - : Der Container hängt an der rechten Kante seines Containers fest.
    - `bottom`
      - : Der Container hängt an der unteren Kante seines Containers fest.
    - `left`
      - : Der Container hängt an der linken Kante seines Containers fest.
    - `block-start`
      - : Der Container hängt an der Block-Startkante seines Containers fest.
    - `block-end`
      - : Der Container hängt an der Block-Endkante seines Containers fest.
    - `inline-start`
      - : Der Container hängt an der Inline-Startkante seines Containers fest.
    - `inline-end`
      - : Der Container hängt an der Inline-Endkante seines Containers fest.

    Um einen Container mit einer nicht-`none` `stuck` Scroll-Zustandsabfrage zu bewerten, muss er `position: sticky` gesetzt haben und sich in einem Scroll-Container befinden. Wenn der Test bestanden wird, werden die Regeln innerhalb des `@container`-Blocks auf die Nachfahren des `position: sticky`-Containers angewendet.

    Es ist möglich, dass zwei Werte von benachbarten Achsen gleichzeitig passen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Allerdings passen zwei Werte von gegenüberliegenden Kanten niemals gleichzeitig:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) {
      /* … */
    }
    ```

    Um zu bewerten, ob ein Container stecken geblieben ist, ohne sich um die Richtung zu kümmern, verwenden Sie den `none`-Wert mit dem `not`-Operator:

    ```css
    @container not scroll-state(stuck: none) {
      /* … */
    }
    ```

#### Verankerte Container-Deskriptoren

Verankerte Container-Deskriptoren werden innerhalb der `<container-condition>` als Argument für die Funktion `anchored()` angegeben, zum Beispiel:

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
  - : Abfragt, ob ein bestimmtes Position-Try-Fallback derzeit aktiv auf einem verankerten Container ist, wie durch die Eigenschaft {{cssxref("position-try-fallbacks")}} angegeben. Gültige `fallback`-Werte beinhalten jeden Komponentwert, der gültig für die Aufnahme in eine `position-try-fallbacks`-Eigenschaft ist.

    Wenn der im Test benannte `fallback`-Wert derzeit aktiv auf dem verankerten Container ist, besteht der Test, und die Regeln innerhalb des `@container`-Blocks werden auf die Nachfahren des verankerten Containers angewendet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Stile basierend auf der Größe eines Containers setzen

Betrachten Sie das folgende Beispiel eines Kartenkomponenten mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Container-Kontext kann mithilfe der `container-type`-Eigenschaft erstellt werden, in diesem Fall mit dem `inline-size`-Wert auf der `.post`-Klasse. Sie können dann die `@container`-Regel verwenden, um Stile auf das Element mit der `.card`-Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

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

### Erstellen benannter Container-Kontexte

Angenommen, das folgende HTML-Beispiel ist eine Kartenkomponente mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Zuerst erstellen Sie einen Container-Kontext mithilfe der Eigenschaften `container-type` und `container-name`. Die Kurzsyntax für diese Deklaration wird auf der Seite {{cssxref("container")}} beschrieben.

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

Es ist nicht möglich, mehrere Container in einer einzigen Container-Abfrage anzusprechen. Es ist möglich, Container-Abfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage wird zu wahr ausgewertet und wendet den deklarierten Stil an, wenn der Container mit dem Namen `summary` breiter als `400px` ist und einen Vorfahren-Container hat, der breiter als `800px` ist:

```css
@container summary (width > 400px) {
  @container (width > 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stilabfragen

Container-Abfragen können auch den berechneten Stil des Containerelements evaluieren. Eine _Container-Stilabfrage_ ist eine `@container`-Abfrage, die eine oder mehrere `style()` funktionale Notationen verwendet. Die boolesche Syntax und Logik zur Kombination von Stilmerkmalen in eine Stilabfrage ist dieselbe wie bei [CSS-Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Das Parameter jeder `style()` ist ein einzelnes `<style-feature>`. Ein **`<style-feature>`** ist eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Ein Stilmerkmal ohne einen Wert wird als wahr ausgewertet, wenn der berechnete Wert für die gegebene Eigenschaft vom Anfangswert abweicht.

Wenn das `<style-feature>`, das als Argument der `style()`-Funktion übergeben wird, eine Deklaration ist, wird die Stilabfrage als wahr ausgewertet, wenn der Wert der Deklaration derselbe ist wie der berechnete Wert dieser Eigenschaft für den Container, der abgefragt wird. Andernfalls wird es zu falsch.

Die folgende Container-Abfrage überprüft, ob der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der `--accent-color` des Containerelements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft einen Wert von `blue` hat, wird der entsprechende Hexadezimalcode `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, damit der Browser berechnete Werte korrekt vergleichen kann.

Stilmerkmale, die eine Abkürzungseigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langform-Eigenschaften übereinstimmen, und andernfalls falsch. Beispielsweise wird `@container style(border: 2px solid red)` zu wahr ausgewertet, wenn alle 12 Langform-Eigenschaften (`border-bottom-style`, etc.), die diese Abkürzung bilden, wahr sind.

Beachten Sie, dass [`!important`](/de/docs/Web/CSS/Reference/Values/important) in Stilabfragen erlaubt ist, aber ignoriert wird.

```css
/* !important is valid but has no effect */
@container style(--themeColor: purple !important) {
  /* <stylesheet> */
}
```

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und lassen die Container-Stilabfrage zu falsch werden.

### Abfragen des Scroll-Zustands

Siehe [Verwendung von Container Scroll-State-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) für Beispiele zu Scroll-State-Abfragen.

### Verankerte Abfragen

Siehe [Verwendung von verankerten Container-Abfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries) für Beispiele zu verankerten Abfragen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verwendung von verankerten Container-Abfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS Containment-Modul](/de/docs/Web/CSS/Guides/Containment)
- [CSS at-rule Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
