---
title: "@container"
slug: Web/CSS/@container
l10n:
  sourceCommit: 49bbddc34034e59a63c0b2cda79e45c94ea9daa9
---

{{CSSRef}}

Die **`@container`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ist eine bedingte Gruppenregel, die Stile auf einen [Einschlusskontext](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) anwendet. Stildefinitionen werden durch eine Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung wahr ist. Die Bedingung wird ausgewertet, wenn sich die abgefragte Containergröße, [`<style-feature>`](#container-stilabfragen) oder der Scroll-Zustand ändert.

Die Eigenschaft {{cssxref("container-name")}} spezifiziert eine Liste von Kontainernamen für Abfragen. Diese Namen können durch `@container`-Regeln verwendet werden, um zu filtern, welche Abfragecontainer angesprochen werden. Der optionale, auf Groß- und Kleinschreibung achtende `<container-name>` filtert die Abfragecontainer, die von der Abfrage angesprochen werden.

Sobald ein gültiger Abfragecontainer für ein Element ausgewählt wurde, wird jedes Container-Feature in der `<container-condition>` gegen diesen Abfragecontainer ausgewertet.

## Syntax

Die `@container` At-Regel hat folgende Syntax:

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

  - : Ein optionaler `<container-name>` und eine `<container-query>`. Stile, die im `<stylesheet>` definiert sind, werden angewendet, wenn die Bedingung wahr ist.

    - `<container-name>`
      - : Optional. Der Name des Containers, auf den die Stile angewendet werden, wenn die Abfrage als wahr ausgewertet wird, spezifiziert als ein {{cssxref("ident")}}.
    - `<container-query>`
      - : Eine Reihe von Features, die gegen den Abfragecontainer ausgewertet werden, wenn sich die Größe, [`<style-feature>`](#container-stilabfragen) oder der Scroll-Zustand des Containers ändert.

- `<stylesheet>`
  - : Eine Reihe von CSS-Regeln oder Deklarationen.

### Logische Schlüsselwörter in Container-Abfragen

Logische Schlüsselwörter können verwendet werden, um die Containerbedingung zu definieren:

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

### Benannte Einschlusskontexte

Ein Einschlusskontext kann unter Verwendung der Eigenschaft {{cssxref("container-name")}} benannt werden.

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

In Container-Abfragen wird die Eigenschaft {{cssxref("container-name")}} verwendet, um die Menge der Container auf diejenigen mit einem übereinstimmenden Abfragenamen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Verwendung und zu Namensbeschränkungen sind auf der Seite {{cssxref("container-name")}} beschrieben.

### Deskriptoren

Die `<container-condition>`-Abfragen umfassen [Größe](#größen-container-deskriptoren) und [Scroll-Zustand](#scroll-zustand_container-deskriptoren) Container-Deskriptoren.

#### Größen-Container-Deskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größenabfragen enthalten, jede innerhalb eines Klammerpaaren. Eine Größenabfrage enthält einen Größen-Deskriptor, einen Wert und — abhängig vom Deskriptor — einen Vergleichsoperator. Die Syntax für das Einfügen mehrerer Bedingungen ist die gleiche wie für [`@media`](/de/docs/Web/CSS/@media) Größenfeature-Abfragen.

```css
@container (min-width: 400px) { ... }
@container (orientation: landscape) and (width > 400px) { ... }
@container (15em <= block-size <= 30em) { ... }
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

#### Scroll-Zustand Container-Deskriptoren

Scroll-Zustand Container-Deskriptoren werden innerhalb des `<container-condition>` innerhalb eines Klammerpärchens nach dem Schlüsselwort `scroll-state` spezifiziert, zum Beispiel:

```css
@container scroll-state(scrollable: top) { ... }
@container scroll-state(stuck: inline-end) { ... }
@container scroll-state(snapped: both) { ... }
```

Unterstützte Schlüsselwörter für Scroll-Zustand Container-Deskriptoren umfassen physische und {{Glossary("flow_relative_values", "flussrelativen Werte")}}

- `scrollable`

  - : Fragt ab, ob der Container in der gegebenen Richtung durch benutzergesteuertes Scrollen gescrollt werden kann, z.B. durch Ziehen der Bildlaufleiste oder mit einer Trackpad-Geste. Mit anderen Worten, gibt es in der angegebenen Richtung überlaufenden Inhalt, zu dem gescrollt werden kann? Gültige `scrollable`-Werte umfassen folgende Schlüsselwörter:

    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder kann nicht in irgendeiner Richtung gescrollt werden.
    - `top`
      - : Der Container kann zu seiner oberen Kante gescrollt werden.
    - `right`
      - : Der Container kann zu seiner rechten Kante gescrollt werden.
    - `bottom`
      - : Der Container kann zu seiner unteren Kante gescrollt werden.
    - `left`
      - : Der Container kann zu seiner linken Kante gescrollt werden.
    - `x`
      - : Der Container kann horizontal zu beiden oder einer seiner linken oder rechten Kanten gescrollt werden.
    - `y`
      - : Der Container kann vertikal zu beiden oder einer seiner oberen oder unteren Kanten gescrollt werden.
    - `block-start`
      - : Der Container kann zu seiner Block-Startkante gescrollt werden.
    - `block-end`
      - : Der Container kann zu seiner Block-Endkante gescrollt werden.
    - `inline-start`
      - : Der Container kann zu seiner Inline-Startkante gescrollt werden.
    - `inline-end`
      - : Der Container kann zu seiner Inline-Endkante gescrollt werden.
    - `block`
      - : Der Container kann in seine Blockrichtung zu beiden oder einer seiner Block-Start oder Block-Endkanten gescrollt werden.
    - `inline`
      - : Der Container kann in seiner Inline-Richtung zu beiden oder einer seiner Inline-Start und Inline-Endkanten gescrollt werden.

    Wenn der Test besteht, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des Scroll-Containers angewendet.

    Um zu prüfen, ob ein Container scrollbar ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrollable: none) { ... }
    ```

- `snapped`

  - : Fragt ab, ob der Container ein Sprungziel für seinen [Scroll-Snap-Container](/de/docs/Web/CSS/CSS_scroll_snap) Vorfahren entlang der gegebenen Achse ist oder sein wird. Gültige `snapped`-Werte umfassen folgende Schlüsselwörter:

    - `none`
      - : Der Container ist kein Sprungziel für seinen Scroll-Container-Vorfahren. Wenn eine `snapped: none` Abfrage implementiert wird, werden Container, die Sprungziele für den Scroll-Container sind, die `@container`-Stile nicht angewendet, während auf Nicht-Sprungziele die Stile angewendet werden.
    - `x`
      - : Der Container ist ein horizontales Sprungziel für seinen Scroll-Container-Vorfahren, d.h. er springt horizontal zu seinem Vorfahren.
    - `y`
      - : Der Container ist ein vertikales Sprungziel für seinen Scroll-Container-Vorfahren, d.h. er springt vertikal zu seinem Vorfahren.
    - `block`
      - : Der Container ist ein Block-Achsen Sprungziel für seinen Scroll-Container-Vorfahren, d.h. er springt zu seinem Vorfahren in Blockrichtung.
    - `inline`
      - : Der Container ist ein Inline-Achsen Sprungziel für seinen Scroll-Container-Vorfahren, d.h. er springt zu seinem Vorfahren in Inlinerichtung.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch ein vertikales Sprungziel für seinen Scroll-Container-Vorfahren und springt zu seinem Vorfahren in beide Richtungen. Der Container wird nicht übereinstimmen, wenn er nur zu seinem Vorfahren entlang der horizontalen _oder_ vertikalen Achse springt. Er muss beides sein.

    Um einen Container mit einer nicht-`none` `snapped` Scroll-Zustand-Abfrage auszuwerten, muss es ein Container mit einem Scroll-Container-Vorfahren sein, der einen {{cssxref("scroll-snap-type")}} Wert ungleich `none` hat. Eine `snapped: none` Abfrage wird übereinstimmen, selbst wenn es keinen Scroll-Container-Vorfahren gibt.

    Auswertungen erfolgen, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignisse im Scroll-Snap-Container auftreten. Wenn der Test besteht, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des Containers angewendet.

    Um zu prüfen, ob ein Container ein Sprungziel ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(snapped: none) { ... }
    ```

- `stuck`

  - : Fragt ab, ob ein Container mit einem {{cssxref("position")}} Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an einer Kante seines scrollenden Container-Vorfahren festhängt. Gültige `stuck`-Werte umfassen folgende Schlüsselwörter:

    - `none`
      - : Der Container hängt an keiner Kante seines Containers fest. Beachten Sie, dass `none`-Abfragen übereinstimmen, selbst wenn der Container kein `position: sticky` gesetzt hat.
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

    Um einen Container mit einer nicht-`none` `stuck` Scroll-Zustand-Abfrage auszuwerten, muss das `position: sticky` auf dem Container gesetzt sein, und es muss sich innerhalb eines Scroll-Containers befinden. Wenn der Test besteht, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des `position: sticky` Containers angewendet.

    Es ist möglich, dass zwei Werte aus gegenüberliegenden Achsen gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) { ... }
    ```

    Allerdings werden zwei Werte aus gegenüberliegenden Kanten niemals gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) { ... }
    ```

    Um zu prüfen, ob ein Container festhängt, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(stuck: none) { ... }
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

Ein Container-Kontext kann mit der Eigenschaft `container-type` erstellt werden, in diesem Fall unter Verwendung des Werts `inline-size` auf der `.post` Klasse.
Sie können dann die `@container` At-Regel verwenden, um Stile auf das Element mit der `.card` Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

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

### Erstellen von benannten Container-Kontexten

Gegeben das folgende HTML-Beispiel, das eine Kartenkomponente mit einem Titel und etwas Text ist:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Erstellen Sie zuerst einen Container-Kontext unter Verwendung der Eigenschaften `container-type` und `container-name`.
Die Kurzsyntax für diese Deklaration ist auf der Seite {{cssxref("container")}} beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Zielen Sie dann diesen Container an, indem Sie den Namen in die Container-Abfrage einfügen:

```css
@container summary (min-width: 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Container-Abfragen

Es ist nicht möglich, mehrere Container in einer einzelnen Container-Abfrage zuzielten.
Es ist jedoch möglich, Container-Abfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage wird als wahr ausgewertet und wendet den deklarierten Stil an, wenn der Container mit dem Namen `summary` breiter als `400px` ist und einen Vorfahren-Container hat, der breiter als `800px` ist:

```css
@container summary (min-width: 400px) {
  @container (min-width: 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stilabfragen

Container-Abfragen können auch den berechneten Stil des Containerelements auswerten. Eine _Container-Stilabfrage_ ist eine `@container`-Abfrage, die eine oder mehrere `style()`-funktionale Notationen verwendet. Die boolesche Syntax und Logik zur Kombination von Stilfeatures in eine Stilabfrage ist dieselbe wie für [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jedes `style()` ist ein einzelnes `<style-feature>`. Ein **`<style-feature>`** ist eine gültige CSS [Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Ein Stilfeature ohne Wert wird als wahr ausgewertet, wenn der berechnete Wert von dem Anfangswert der gegebenen Eigenschaft abweicht.

Wenn das `<style-feature>`, das als Argument für die `style()`-Funktion übergeben wird, eine Deklaration ist, dann wird die Stilabfrage als wahr ausgewertet, wenn der Deklarationswert dem berechneten Wert dieser Eigenschaft für den abgefragten Container entspricht. Andernfalls löst es sich zu false auf.

Die folgende Container-Abfrage prüft, ob der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der `--accent-color` des Containerelements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, wird der äquivalente Hexadezimalcode `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde mit {{cssxref("@property")}} als Farbe definiert, damit der Browser die berechneten Werte korrekt vergleichen kann.

Stileigenschaften, die eine Kurzform-Eigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langform-Eigenschaften übereinstimmen, und falsch andernfalls. Zum Beispiel wird `@container style(border: 2px solid red)` wahr sein, wenn alle 12 Langform-Eigenschaften (`border-bottom-style`, usw.), die diese Kurzform ausmachen, wahr sind.

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und verursachen, dass die Container-Stilabfrage falsch ist.

### Scroll-Zustandsabfragen

Siehe [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) für vollständige Anleitungen zu Beispielen von Scroll-Zustandsabfragen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS-Einschlussmodul](/de/docs/Web/CSS/CSS_containment)
- [Funktionen der CSS-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
