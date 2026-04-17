---
title: "@container"
slug: Web/CSS/Reference/At-rules/@container
l10n:
  sourceCommit: 6043116de95e6452eefaf05ddf77aa57678d2ec3
---

Die **`@container`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules) ist eine bedingte Gruppenregel, die Stile auf einen [Containment-Kontext](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts) anwendet. Stildeklarationen werden durch eine Bedingung gefiltert und auf die Elemente innerhalb des Containers angewendet, wenn die Bedingung wahr ist. Die Bedingung wird überprüft, wenn sich die abgefragte Containergröße, [`<style-feature>`](#container-stil-abfragen) oder der Scroll-Status ändert.

Die Bedingung muss entweder den {{cssxref("container-name")}} und/oder `<container-query>` angeben.

Die {{cssxref("container-name")}} Eigenschaft spezifiziert eine Liste von Namen für Abfragecontainer, die verwendet werden, um zu filtern, welche Container von den `@container` Regeln angesprochen werden. Die Container-Features im `<container-query>` werden gegen die ausgewählten Container bewertet. Wenn kein `<container-name>` angegeben ist, werden die `<container-query>`-Features gegen den nächstgelegenen übergeordneten Abfragecontainer mit dem passenden [`container-type`](/de/docs/Web/CSS/Reference/Properties/container-type) bewertet. Wenn kein `<container-query>` spezifiziert ist, werden benannte Container ausgewählt.

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
      - : Der Name des Containers, der abgefragt werden soll; er wird als {{cssxref("ident")}} angegeben. Wenn die Abfrage als `true` bewertet wird, werden die deklarierten Stile auf die Nachfahr-Elemente des Containers angewendet.
    - `<container-query>` {{optional_inline}}
      - : Eine Menge von Features, die gegen den Abfragecontainer bewertet werden, wenn sich die Größe, [`<style-feature>`](#container-stil-abfragen), der Scroll-Status oder ein angewendeter position-try fallback des Containers ändert.

### Logische Schlüsselwörter in Container-Abfragen

Logische Schlüsselwörter können verwendet werden, um die Container-Bedingung zu definieren:

- `and` kombiniert zwei oder mehr Bedingungen.
- `or` kombiniert zwei oder mehr Bedingungen.
- `not` negiert die Bedingung. Pro Container-Abfrage ist nur eine 'not'-Bedingung erlaubt und kann nicht mit den Schlüsselwörtern `and` oder `or` verwendet werden.

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

In Container-Abfragen wird die {{cssxref("container-name")}} Eigenschaft verwendet, um die Menge der Container auf diejenigen mit einem passenden Abfragecontainernamen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Nutzung und Benennungsbeschränkungen werden auf der Seite {{cssxref("container-name")}} beschrieben.

### Deskriptoren

Die `<container-condition>` Abfragen schließen [Größe](#größen-container-deskriptoren), [Scroll-Zustand](#scroll-zustand_container-deskriptoren) und [verankerte](#verankerte_container-deskriptoren) Container-Deskriptoren ein.

#### Größen-Container-Deskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größenabfragen beinhalten, jede innerhalb eines Satzes von Klammern. Eine Größenabfrage beinhaltet einen Größen-Deskriptor, einen Wert und – je nach Deskriptor – einen Vergleichsoperator. Die Abfragen messen immer die [Inhaltsbox](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) als Vergleich. Die Syntax zur Einbeziehung mehrerer Bedingungen ist die gleiche wie für {{cssxref("@media")}} Größen-Feature-Abfragen.

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

#### Scroll-Zustand Container-Deskriptoren

Scroll-Zustand Container-Deskriptoren werden innerhalb der `<container-condition>` als Argument für die Funktion `scroll-state()` spezifiziert, zum Beispiel:

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

Unterstützte Schlüsselwörter für Scroll-Zustand Container-Deskriptoren beinhalten {{Glossary("physical_properties", "physikalische")}} und {{Glossary("flow_relative_values", "flussrelativ")}} Werte.

- `scrollable`
  - : Ermittelt, ob der Container in der angegebenen Richtung durch benutzerinitiierte Scrollen, wie das Ziehen der Scrollleiste oder das Verwenden einer Trackpad-Geste, gescrollt werden kann. Mit anderen Worten, gibt es überlaufende Inhalte in der angegebenen Richtung, zu denen gescrollt werden kann? Gültige `scrollable` Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scrollcontainer")}} oder kann in keiner Richtung gescrollt werden.
    - `top`
      - : Der Container kann zu seinem oberen Rand gescrollt werden.
    - `right`
      - : Der Container kann zu seiner rechten Seite gescrollt werden.
    - `bottom`
      - : Der Container kann zu seinem unteren Rand gescrollt werden.
    - `left`
      - : Der Container kann zu seiner linken Seite gescrollt werden.
    - `x`
      - : Der Container kann horizontal zu beiden oder zu einer seiner linken Seiten oder rechten Seiten gescrollt werden.
    - `y`
      - : Der Container kann vertikal zu beiden oder zu einer seiner oberen oder unteren Seiten gescrollt werden.
    - `block-start`
      - : Der Container kann zu seinem Block-Anfang gescrollt werden.
    - `block-end`
      - : Der Container kann zu seinem Block-Ende gescrollt werden.
    - `inline-start`
      - : Der Container kann zu seinem Inline-Anfang gescrollt werden.
    - `inline-end`
      - : Der Container kann zu seinem Inline-Ende gescrollt werden.
    - `block`
      - : Der Container kann in seiner Blockrichtung zu beiden oder zu einer seiner Block-Anfangs- oder Block-End-Ränder gescrollt werden.
    - `inline`
      - : Der Container kann in seiner Inline-Richtung zu beiden oder zu einer seiner Inline-Anfangs- und Inline-End-Ränder gescrollt werden.

    Wenn der Test erfolgreich ist, werden die Regeln im Inneren des `@container` Blocks auf Nachkommen des Scrollcontainers angewendet.

    Um zu bewerten, ob ein Container scrollfähig ist, ohne sich um die Richtung zu kümmern, verwenden Sie den `none` Wert mit dem `not` Operator:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `scrolled`
  - : Ermittelt, ob der Container zuletzt in die angegebene Richtung gescrollt wurde. Gültige `scrolled` Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scrollcontainer")}} oder wurde nicht zuvor in irgendeine Richtung gescrollt.
    - `top`
      - : Der Container wurde zuletzt zu seinem oberen Rand hin gescrollt.
    - `right`
      - : Der Container wurde zuletzt zu seiner rechten Seite hin gescrollt.
    - `bottom`
      - : Der Container wurde zuletzt zu seinem unteren Rand hin gescrollt.
    - `left`
      - : Der Container wurde zuletzt zu seiner linken Seite hin gescrollt.
    - `x`
      - : Der Container wurde zuletzt zu seiner linken oder rechten Seite hin gescrollt.
    - `y`
      - : Der Container wurde zuletzt zu seiner oberen oder unteren Seite hin gescrollt.
    - `block-start`
      - : Der Container wurde zuletzt zu seinem Block-Anfang gescrollt.
    - `block-end`
      - : Der Container wurde zuletzt zu seinem Block-Ende gescrollt.
    - `inline-start`
      - : Der Container wurde zuletzt zu seinem Inline-Anfang gescrollt.
    - `inline-end`
      - : Der Container wurde zuletzt zu seinem Inline-Ende gescrollt.
    - `block`
      - : Der Container wurde zuletzt zu seinem Block-Anfang oder Block-Ende gescrollt.
    - `inline`
      - : Der Container wurde zuletzt zu seinem Inline-Anfang oder Inline-Ende gescrollt.

    Wenn der Test erfolgreich ist, werden die Regeln im Inneren des `@container` Blocks auf die Nachkommen des Scrollcontainers angewendet.

    Um zu bewerten, ob ein Container kürzlich gescrollt wurde, ohne sich um die Richtung zu kümmern, verwenden Sie den `none` Wert mit dem `not` Operator:

    ```css
    @container not scroll-state(scrolled: none) {
      /* … */
    }
    ```

- `snapped`
  - : Ermittelt, ob der Container zu einem [Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Container-Vorfahren entlang der angegebenen Achse eingerastet ist. Gültige `snapped` Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein Scroll {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} für seinen Vorfahren-Scrollcontainer. Beim Implementieren einer `snapped: none` Abfrage erhalten Container, die _Snap Ziele_ für den Scrollcontainer sind, _nicht_ die `@container` Stile, während Nicht-Snap Ziele die Stile erhalten.
    - `x`
      - : Der Container ist ein horizontales Scroll-Snap-Ziel für seinen Vorfahren-Scrollcontainer, das heißt, er schnappt horizontal zu seinem Vorfahren.
    - `y`
      - : Der Container ist ein vertikales Scroll-Snap-Ziel für seinen Vorfahren-Scrollcontainer, das heißt, er schnappt vertikal zu seinem Vorfahren.
    - `block`
      - : Der Container ist ein Block-Achsen-Scroll-Snap-Ziel für seinen Vorfahren-Scrollcontainer, das heißt, er schnappt zu seinem Vorfahren in der Blockrichtung.
    - `inline`
      - : Der Container ist ein Inline-Achsen-Scroll-Snap-Ziel für seinen Vorfahren-Scrollcontainer, das heißt, er schnappt zu seinem Vorfahren in der Inlinerichtung.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch ein vertikales Scroll-Snap-Ziel für seinen Vorfahren-Scrollcontainer und schnappt zu seinem Vorfahren in beiden Richtungen. Der Container wird nicht übereinstimmen, wenn er nur zu seinem Vorfahren entlang der horizontalen _oder_ vertikalen Achse schnappt. Es muss beides sein.

    Um einen Container mit einer nicht-`none` `snapped` Scroll-State-Abfrage zu bewerten, muss er ein Container mit einem Scrollcontainer-Vorfahren sein, der einen {{cssxref("scroll-snap-type")}} Wert ungleich `none` hat. Eine `snapped: none` Abfrage wird übereinstimmen, selbst wenn es keinen Scrollcontainer-Vorfahren gibt.

    Bewertungen finden statt, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignisse auf dem Scroll-Snap-Container ausgelöst werden. Wenn der Test erfolgreich ist, werden die Regeln im Inneren des `@container` Blocks auf Nachkommen des Containers angewendet.

    Um zu bewerten, ob ein Container ein Snap-Ziel ist, ohne sich um die Richtung zu kümmern, verwenden Sie den `none` Wert mit dem `not` Operator:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`
  - : Ermittelt, ob ein Container mit einem {{cssxref("position")}} Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an eine Kante seines Scrollcontainers-Vorfahren haftet. Gültige `stuck` Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container haftet an keiner Kante seines Containers. Beachten Sie, dass `none` Abfragen übereinstimmen, selbst wenn der Container kein `position: sticky` auf sich hat.
    - `top`
      - : Der Container haftet an der oberen Kante seines Containers.
    - `right`
      - : Der Container haftet an der rechten Kante seines Containers.
    - `bottom`
      - : Der Container haftet an der unteren Kante seines Containers.
    - `left`
      - : Der Container haftet an der linken Kante seines Containers.
    - `block-start`
      - : Der Container haftet an der Block-Anfangs-Kante seines Containers.
    - `block-end`
      - : Der Container haftet an der Block-Ende-Kante seines Containers.
    - `inline-start`
      - : Der Container haftet an der Inline-Anfangs-Kante seines Containers.
    - `inline-end`
      - : Der Container haftet an der Inline-Ende-Kante seines Containers.

    Um einen Container mit einer nicht-`none` `stuck` Scroll-State-Abfrage zu bewerten, muss er `position: sticky` auf sich haben und sich in einem Scrollcontainer befinden. Wenn der Test erfolgreich ist, werden die Regeln im Inneren des `@container` Blocks auf Nachkommen des `position: sticky` Containers angewendet.

    Es ist möglich, dass zwei Werte von benachbarten Achsen gleichzeitig zutreffen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Jedoch werden zwei Werte von gegenüberliegenden Kanten niemals gleichzeitig zutreffen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) {
      /* … */
    }
    ```

    Um zu bewerten, ob ein Container festgeklebt ist, ohne sich um die Richtung zu kümmern, verwenden Sie den `none` Wert mit dem `not` Operator:

    ```css
    @container not scroll-state(stuck: none) {
      /* … */
    }
    ```

#### Verankerte Container-Deskriptoren

Verankerte Container-Deskriptoren werden innerhalb der `<container-condition>` als Argument für die Funktion `anchored()` spezifiziert, zum Beispiel:

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
  - : Ermittelt, ob ein spezifischer position-try Fallback derzeit auf einem Anker-positionierten Container aktiv ist, wie im {{cssxref("position-try-fallbacks")}} Eigenschaft angegeben. Gültige `fallback` Werte umfassen jeden Komponentenwert, der für die Aufnahme in einen `position-try-fallbacks` Eigenschaftswert gültig ist.

    Wenn der im Test genannte `fallback` Wert derzeit auf dem Anker-positionierten-Container aktiv ist, besteht der Test und die Regeln im Inneren des `@container` Blocks werden auf Nachfahren des Anker-positionierten-Containers angewendet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Stile basierend auf der Größe eines Containers einstellen

Betrachten Sie das folgende Beispiel eines Kartenkomponents mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Container-Kontext kann mit der Eigenschaft `container-type` erstellt werden, in diesem Fall unter Verwendung des `inline-size` Werts auf der `.post` Klasse.
Sie können dann die `@container` `at-rule` verwenden, um Stile auf das Element mit der `.card` Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

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

Angenommen, das folgende HTML-Beispiel ist ein Kartenkomponent mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Erstellen Sie zuerst ein Container-Kontext mit den Eigenschaften `container-type` und `container-name`.
Die Kurzschreibweise für diese Deklaration ist auf der {{cssxref("container")}} Seite beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Zielen Sie anschließend diesen Container an, indem Sie den Namen zur Container-Abfrage hinzufügen:

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

Die folgende Abfrage wird als wahr bewertet und wendet den deklarierten Stil an, wenn der Container mit dem Namen `summary` breiter als `400px` ist und einen Vorfahren-Container hat, der breiter als `800px` ist:

```css
@container summary (width > 400px) {
  @container (width > 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stil-Abfragen

Container-Abfragen können auch den berechneten Stil des Containerelements auswerten. Eine _Container-Stil-Abfrage_ ist eine `@container`-Abfrage, die eine oder mehrere `style()` Funktionsnotationen verwendet. Die boolesche Syntax und Logik, die Stil-Funktionen zu einer Stil-Abfrage kombiniert, ist dieselbe wie für [CSS Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jedes `style()` ist ein einziges `<style-feature>`. Ein **`<style-feature>`** ist eine gültige CSS [Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), eine CSS-Eigenschaft, oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Ein Stil-Feature ohne Wert bewertet als wahr, wenn der berechnete Wert sich vom Anfangswert für die gegebene Eigenschaft unterscheidet.

Wenn das `<style-feature>`, das als Argument der `style()` Funktion übergeben wird, eine Deklaration ist, bewertet die Stil-Abfrage als wahr, wenn der Wert der Deklaration dem berechneten Wert dieser Eigenschaft für den abgefragten Container entspricht. Andernfalls löst sie sich zu falsch auf.

Die folgende Container-Abfrage überprüft, ob der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der `--accent-color` des Containerelements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft einen Wert von `blue` hat, wird der äquivalente Hexadezimalcode `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, sodass der Browser berechnete Werte ordnungsgemäß vergleichen kann.

Stil-Features, die eine Kurzschreibweise einer Eigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langform-Eigenschaften übereinstimmen, und andernfalls falsch. Zum Beispiel wird `@container style(border: 2px solid red)` als wahr aufgelöst, wenn alle 12 Langform-Eigenschaften (`border-bottom-style`, etc.), die diese Kurzschreibweise ausmachen, wahr sind.

Beachten Sie, dass [`!important`](/de/docs/Web/CSS/Reference/Values/important) in Stil-Abfragen erlaubt, aber ignoriert wird.

```css
/* !important is valid but has no effect */
@container style(--themeColor: purple !important) {
  /* <stylesheet> */
}
```

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Container-Stil-Abfrage falsch ist.

### Scroll-State-Abfragen

Sehen Sie [Verwendung von Container-Scroll-Status-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) für Beispiele von Scroll-Status-Abfragen.

### Verankerte Abfragen

Sehen Sie [Verwendung von verankerten Container-Abfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries) für Beispiele von verankerten Abfragen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Container-Größen- und Stil-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Status-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verwendung von verankerten Container-Abfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS Containment Modul](/de/docs/Web/CSS/Guides/Containment)
- [CSS at-rule Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
