---
title: "@container"
slug: Web/CSS/Reference/At-rules/@container
l10n:
  sourceCommit: 879a1aece3a1d4eb28c0024f0baac6aa1b96638e
---

Die **`@container`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules) ist eine bedingte Gruppenregel, die Stile auf einen [Containment-Kontext](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts) anwendet. Die Stil-Deklarationen werden durch eine Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung wahr ist. Die Bedingung wird ausgewertet, wenn sich die abgefragte Containergröße, [`<style-feature>`](#container-stilabfragen), der Scroll-Zustand oder der Zustand des angewendeten [Position-Try-Fallback](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) (im Falle von [ankerpositionierten](/de/docs/Web/CSS/Guides/Anchor_positioning) Containern) ändert.

Die Bedingung muss eines oder beide von {{cssxref("container-name")}} und `<container-query>` spezifizieren.

Die {{cssxref("container-name")}} Eigenschaft gibt eine Liste von Abfragecontainernamen an, die verwendet werden, um zu filtern, welche Container von den `@container`-Regeln anvisiert werden. Die Container-Features in der `<container-query>` werden gegen die ausgewählten Container ausgewertet. Wenn kein `<container-name>` angegeben ist, werden die `<container-query>`-Features gegen den nächstgelegenen übergeordneten Abfragecontainer ausgewertet, der den passenden [`container-type`](/de/docs/Web/CSS/Reference/Properties/container-type) hat. Wenn keine `<container-query>` angegeben ist, werden benannte Container ausgewählt.

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
  - : Eines oder beide von `<container-name>` und `<container-query>`. Stile, die im `<stylesheet>` definiert sind, werden angewendet, wenn die Bedingung `wahr` ist.
    - `<container-name>` {{optional_inline}}
      - : Der Name des Containers, auf den die Stile angewendet werden, wenn die Abfrage als `wahr` ausgewertet wird, angegeben als ein {{cssxref("ident")}}.
    - `<container-query>` {{optional_inline}}
      - : Eine Gruppe von Features, die gegen den Abfragecontainer ausgewertet werden, wenn sich die Größe, [`<style-feature>`](#container-stilabfragen), der Scroll-Zustand oder der angewendete Position-Try-Fallback des Containers ändern.

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

### Benannte Containment-Kontexte

Ein Containment-Kontext kann mit der Eigenschaft {{cssxref("container-name")}} benannt werden.

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

In Containerabfragen wird die Eigenschaft {{cssxref("container-name")}} verwendet, um die Menge der Container auf diejenigen mit einem übereinstimmenden Abfragecontainernamen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Nutzung und Benennungseinschränkungen werden auf der Seite {{cssxref("container-name")}} beschrieben.

### Deskriptoren

Die `<container-condition>`-Abfragen umfassen [Größe](#größencontainer-deskriptoren), [Scroll-Zustand](#scroll-zustand_containerdeskriptoren) und [verankerte](#verankerte_container-deskriptoren) Containerdeskriptoren.

#### Größencontainer-Deskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größenabfragen enthalten, jede innerhalb eines Klammerpaars. Eine Größenabfrage umfasst einen Größen-Deskriptor, einen Wert und - abhängig vom Deskriptor - einen Vergleichsoperator. Die Abfragen messen immer die [Inhaltsbox](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) als Vergleich. Die Syntax für das Einfügen mehrerer Bedingungen ist die gleiche wie für {{cssxref("@media")}}-Größenfeature-Abfragen.

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
  - : Das {{cssxref("aspect-ratio")}} des Containers, berechnet als Verhältnis von Breite zu Höhe des Containers als ein {{cssxref("ratio")}}-Wert.

- `block-size`
  - : Die {{cssxref("block-size")}} des Containers, ausgedrückt als ein {{cssxref("length")}}-Wert.

- `height`
  - : Die Höhe des Containers, ausgedrückt als ein {{cssxref("length")}}-Wert.

- `inline-size`
  - : Die {{cssxref("inline-size")}} des Containers, ausgedrückt als ein {{cssxref("length")}}-Wert.

- `orientation`
  - : Die [Ausrichtung](/de/docs/Web/CSS/Reference/At-rules/@media/orientation) des Containers, entweder `landscape` oder `portrait`.

- `width`
  - : Die Breite des Containers, ausgedrückt als ein {{cssxref("length")}}-Wert.

#### Scroll-Zustand Containerdeskriptoren

Scroll-Zustand Containerdeskriptoren werden innerhalb der `<container-condition>` als Argument für die `scroll-state()` Funktion spezifiziert, zum Beispiel:

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

Unterstützte Schlüsselwörter für Scroll-Zustand Containerdeskriptoren umfassen {{Glossary("physical_properties", "physikalische")}} und {{Glossary("flow_relative_values", "flussrelative")}} Werte.

- `scrollable`
  - : Abfragt, ob der Container in der angegebenen Richtung durch nutzerinitiiertes Scrollen, wie durch Ziehen der Scrollleiste oder durch eine Trackpad-Geste, gescrollt werden kann. Mit anderen Worten, gibt es überfließenden Inhalt in der angegebenen Richtung, der gescrollt werden kann? Gültige `scrollable` Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scrollcontainer")}} oder kann anderweitig nicht in irgendeine Richtung gescrollt werden.
    - `top`
      - : Der Container kann zu seinem oberen Rand gescrollt werden.
    - `right`
      - : Der Container kann zu seinem rechten Rand gescrollt werden.
    - `bottom`
      - : Der Container kann zu seinem unteren Rand gescrollt werden.
    - `left`
      - : Der Container kann zu seinem linken Rand gescrollt werden.
    - `x`
      - : Der Container kann horizontal zu entweder seinem linken oder rechten oder beiden Rändern gescrollt werden.
    - `y`
      - : Der Container kann vertikal zu entweder seinem oberen oder unteren oder beiden Rändern gescrollt werden.
    - `block-start`
      - : Der Container kann zu seinem Block-Start-Rand gescrollt werden.
    - `block-end`
      - : Der Container kann zu seinem Block-End-Rand gescrollt werden.
    - `inline-start`
      - : Der Container kann zu seinem Inline-Start-Rand gescrollt werden.
    - `inline-end`
      - : Der Container kann zu seinem Inline-End-Rand gescrollt werden.
    - `block`
      - : Der Container kann in seiner Blockrichtung entweder zu seinem Block-Start- oder Block-End-Rand gescrollt werden.
    - `inline`
      - : Der Container kann in seiner Inline-Richtung entweder zu seinem Inline-Start- oder Inline-End-Rand gescrollt werden.

    Wenn der Test bestanden ist, werden die Regeln innerhalb des `@container`-Blocks auf Nachkommen des Scrollcontainers angewendet.

    Um zu bewerten, ob ein Container scrollfähig ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not` Operator:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `scrolled`
  - : Abfragt, ob der Container zuletzt in eine angegebene Richtung gescrollt wurde. Gültige `scrolled` Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scrollcontainer")}} oder wurde anderweitig bisher nicht in irgendeine Richtung gescrollt.
    - `top`
      - : Der Container wurde zuletzt zu seinem oberen Rand gescrollt.
    - `right`
      - : Der Container wurde zuletzt zu seinem rechten Rand gescrollt.
    - `bottom`
      - : Der Container wurde zuletzt zu seinem unteren Rand gescrollt.
    - `left`
      - : Der Container wurde zuletzt zu seinem linken Rand gescrollt.
    - `x`
      - : Der Container wurde zuletzt entweder zu seinem linken oder rechten Rand gescrollt.
    - `y`
      - : Der Container wurde zuletzt entweder zu seinem oberen oder unteren Rand gescrollt.
    - `block-start`
      - : Der Container wurde zuletzt zu seinem Block-Start-Rand gescrollt.
    - `block-end`
      - : Der Container wurde zuletzt zu seinem Block-End-Rand gescrollt.
    - `inline-start`
      - : Der Container wurde zuletzt zu seinem Inline-Start-Rand gescrollt.
    - `inline-end`
      - : Der Container wurde zuletzt zu seinem Inline-End-Rand gescrollt.
    - `block`
      - : Der Container wurde zuletzt entweder zu seinem Block-Start- oder Block-End-Rand gescrollt.
    - `inline`
      - : Der Container wurde zuletzt entweder zu seinem Inline-Start- oder Inline-End-Rand gescrollt.

    Wenn der Test wahr ist, werden die Regeln, die im `@container`-Block verschachtelt sind, auf die Nachkommen des Scrollcontainers angewendet.

    Um zu bewerten, ob ein Container kürzlich gescrollt wurde, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not` Operator:

    ```css
    @container not scroll-state(scrolled: none) {
      /* … */
    }
    ```

- `snapped`
  - : Abfragt, ob der Container zu einem [Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Container-Vorfahren entlang der angegebenen Achse schnappt. Gültige `snapped` Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein Scroll-{{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} für seinen Vorfahren-Scrollcontainer. Bei der Implementierung einer `snapped: none` Abfrage werden Container, die _Snap-Ziele_ für den Scrollcontainer sind, _nicht_ die `@container`-Stile erhalten, während _nicht_ Snap-Ziele die Stile erhalten.
    - `x`
      - : Der Container ist ein horizontales Scrollsnap-Ziel für seinen Vorfahren-Scrollcontainer, das heißt, er schnappt horizontal zu seinem Vorfahren.
    - `y`
      - : Der Container ist ein vertikales Scrollsnap-Ziel für seinen Vorfahren-Scrollcontainer, das heißt, er schnappt vertikal zu seinem Vorfahren.
    - `block`
      - : Der Container ist ein Block-Achsen-Scrollsnap-Ziel für seinen Vorfahren-Scrollcontainer, das heißt, er schnappt in der Blockrichtung zu seinem Vorfahren.
    - `inline`
      - : Der Container ist ein Inline-Achsen-Scrollsnap-Ziel für seinen Vorfahren-Scrollcontainer, das heißt, er schnappt in der Inlinerichtung zu seinem Vorfahren.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch ein vertikales Scrolling-Snap-Ziel für seinen Vorfahren-Scrollcontainer und schnappt in beide Richtungen zu seinem Vorfahren. Der Container wird nicht übereinstimmen, wenn er nur entlang der horizontalen _oder_ vertikalen Achse zu seinem Vorfahren schnappt. Es muss beides sein.

    Um einen Container mit einer nicht-`none` `snapped` Scroll-Zustand-Abfrage zu bewerten, muss es ein Container mit einem Scrollcontainer-Vorfahren sein, der einen {{cssxref("scroll-snap-type")}} Wert anders als `none` hat. Eine `snapped: none` Abfrage wird auch dann übereinstimmen, wenn es keinen Scrollcontainer-Vorfahren gibt.

    Bewertungen finden statt, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignisse auf dem Scroll-Snap-Container ausgelöst werden. Wenn der Test bestanden wird, werden die Regeln innerhalb des `@container`-Blocks auf Nachkommen des Containers angewendet.

    Um zu bewerten, ob ein Container ein Snap-Ziel ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not` Operator:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`
  - : Abfragt, ob ein Container mit einem {{cssxref("position")}} Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an einem Rand seines Scrollcontainer-Vorfahren festklebt. Gültige `stuck` Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container klebt an keinem Rand seines Containers fest. Beachten Sie, dass `none`-Abfragen auch übereinstimmen, wenn der Container kein `position: sticky` gesetzt hat.
    - `top`
      - : Der Container klebt an seinem oberen Rand fest.
    - `right`
      - : Der Container klebt an seinem rechten Rand fest.
    - `bottom`
      - : Der Container klebt an seinem unteren Rand fest.
    - `left`
      - : Der Container klebt an seinem linken Rand fest.
    - `block-start`
      - : Der Container klebt an seinem Block-Start-Rand fest.
    - `block-end`
      - : Der Container klebt an seinem Block-End-Rand fest.
    - `inline-start`
      - : Der Container klebt an seinem Inline-Start-Rand fest.
    - `inline-end`
      - : Der Container klebt an seinem Inline-End-Rand fest.

    Um einen Container mit einer nicht-`none` `stuck` Scroll-Zustand-Abfrage zu bewerten, muss `position: sticky` auf ihm gesetzt sein und er muss sich in einem Scrollcontainer befinden. Wenn der Test bestanden wird, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des `position: sticky` Containers angewendet.

    Es ist möglich, dass zwei Werte aus benachbarten Achsen zur gleichen Zeit übereinstimmen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Jedoch werden zwei Werte von gegenüberliegenden Rändern niemals zur gleichen Zeit übereinstimmen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) {
      /* … */
    }
    ```

    Um zu bewerten, ob ein Container festklebt, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not` Operator:

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
  - : Abfragt, ob ein spezifischer Position-Try-Fallback derzeit auf einem ankerpositionierten Container aktiv ist, wie durch die Eigenschaft {{cssxref("position-try-fallbacks")}} angegeben. Gültige `fallback` Werte umfassen jeden Komponentenwert, der gültig für die Einbeziehung in einen `position-try-fallbacks` Eigenschaftswert ist.

    Wenn der im Test genannte `fallback` Wert derzeit auf dem ankerpositionierten Container aktiv ist, besteht der Test, und die Regeln innerhalb des `@container`-Blocks werden auf die Nachkommen des ankerpositionierten Containers angewendet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Stile basierend auf der Größe eines Containers setzen

Betrachten Sie das folgende Beispiel einer Kartensammlung mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Container-Kontext kann mit der Eigenschaft `container-type` erstellt werden, in diesem Fall mit dem Wert `inline-size` auf der `.post`-Klasse. Sie können dann die `@container`-At-Regel verwenden, um Stile auf das Element mit der `.card`-Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

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

Angenommen, das folgende HTML-Beispiel ist eine Kartensammlung mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Erstellen Sie zunächst einen Container-Kontext mit den Eigenschaften `container-type` und `container-name`. Die Kurzschreibweise für diese Deklaration wird auf der Seite {{cssxref("container")}} beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Ziel ist es, diesen Container zu benennen und den Namen zur Containerabfrage hinzuzufügen:

```css
@container summary (width >= 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Container-Abfragen

Es ist nicht möglich, mehrere Container in einer einzigen Containerabfrage anzuzielen. Es ist möglich, Containerabfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage wird als wahr bewertet und wendet den deklarierten Stil an, wenn der Container namens `summary` breiter als `400px` ist und einen übergeordneten Container hat, der breiter als `800px` ist:

```css
@container summary (width > 400px) {
  @container (width > 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stilabfragen

Container-Abfragen können auch den berechneten Stil des Containerelements evaluieren. Eine _Container-Stilabfrage_ ist eine `@container`-Abfrage, die eine oder mehrere `style()` funktionale Notationen verwendet. Die boolesche Syntax und Logik zur Kombination von Stilfeatures in einer Stilabfrage ist dieselbe wie für [CSS-Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Das Parameter von jedem `style()` ist ein einzelnes `<style-feature>`. Ein **`<style-feature>`** ist eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Ein Stilfeature ohne einen Wert wird als wahr bewertet, wenn der berechnete Wert sich vom Anfangswert für die gegebene Eigenschaft unterscheidet.

Wenn das `<style-feature>`, das als Argument der `style()` Funktion übergeben wird, eine Deklaration ist, wird die Stilabfrage als wahr bewertet, wenn der Wert der Deklaration derselbe ist wie der berechnete Wert dieser Eigenschaft für den abgefragten Container. Andernfalls wird es als falsch bewertet.

Die folgende Containerabfrage überprüft, ob der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der `--accent-color` des Container-Elements `blau` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blau` hat, wird der entsprechende hexadezimale Code `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, sodass der Browser die berechneten Werte ordnungsgemäß vergleichen kann.

Stilfeatures, die eine Kurzschreibweiseigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langschreibweiseigenschaften übereinstimmen, und andernfalls falsch. Beispielsweise wird `@container style(border: 2px solid red)` als wahr bewertet, wenn alle 12 Langschreibweiseigenschaften (`border-bottom-style`, usw.), die diese Kurzschreibweise ausmachen, wahr sind.

Beachten Sie, dass [`!important`](/de/docs/Web/CSS/Reference/Values/important) in Stilabfragen erlaubt ist, aber ignoriert wird.

```css
/* !important is valid but has no effect */
@container style(--themeColor: purple !important) {
  /* <stylesheet> */
}
```

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und lassen die Container-Stilabfrage falsch werden.

### Scroll-Zustand-Abfragen

Siehe [Verwendung von Container-Scroll-Zustand-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) für Scroll-Zustand-Abfragebeispiele.

### Verankerte Abfragen

Siehe [Verwendung von verankerten Containerabfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries) für verankerte Abfragebeispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Container Größen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustand-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verwendung von verankerten Containerabfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS-Containment-Modul](/de/docs/Web/CSS/Guides/Containment)
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
