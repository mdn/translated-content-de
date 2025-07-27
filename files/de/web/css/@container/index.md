---
title: "@container"
slug: Web/CSS/@container
l10n:
  sourceCommit: 27e3d279057ebbb559f4725641b1c431914de7b1
---

Die **`@container`**- [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) ist eine bedingte Gruppenregel, die Stile auf einen [Containment-Kontext](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) anwendet. Stil-Deklarationen werden anhand einer Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung wahr ist. Die Bedingung wird ausgewertet, wenn sich die abgefragte Containergröße, das [`<style-feature>`](#container-stilabfragen) oder der Scroll-Zustand ändert.

Die {{cssxref("container-name")}}-Eigenschaft spezifiziert eine Liste von Abfragecontainernamen. Diese Namen können von `@container`-Regeln verwendet werden, um zu filtern, welche Abfragecontainer angesprochen werden. Der optionale, groß/klein-schreibungssensitive `<container-name>` filtert die Abfragecontainer, die durch die Abfrage angesprochen werden.

Sobald ein geeigneter Abfragecontainer für ein Element ausgewählt wurde, wird jedes Container-Feature im `<container-condition>` gegen diesen Abfragecontainer evaluiert.

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
      - : Optional. Der Name des Containers, auf den die Stile angewendet werden, wenn die Abfrage als wahr ausgewertet wird, angegeben als {{cssxref("ident")}}.
    - `<container-query>`
      - : Eine Gruppe von Features, die gegen den Abfragecontainer ausgewertet werden, wenn sich die Größe, das [`<style-feature>`](#container-stilabfragen) oder der Scroll-Zustand des Containers ändert.

### Logische Schlüsselwörter in Container-Abfragen

Logische Schlüsselwörter können verwendet werden, um die Container-Bedingung zu definieren:

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

### Benannte Containment-Kontexte

Ein Containment-Kontext kann mit der {{cssxref("container-name")}}-Eigenschaft benannt werden.

```css
.post {
  container-name: sidebar;
  container-type: inline-size;
}
```

Die Kurzschreibsyntax hierfür ist die Verwendung von {{cssxref("container")}} in der Form `container: <name> / <type>`, zum Beispiel:

```css
.post {
  container: sidebar / inline-size;
}
```

In Container-Abfragen wird die {{cssxref("container-name")}}-Eigenschaft verwendet, um die Menge der Container zu filtern, die einen übereinstimmenden Abfragecontainernamen haben:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Verwendung und Namenseinschränkungen sind auf der {{cssxref("container-name")}}-Seite beschrieben.

### Deskriptoren

Die `<container-condition>`-Abfragen umfassen [Größen-](#größen-containerdeskriptoren) und [Scroll-Zustand](#scroll-zustand_containerdeskriptoren)-Containerdeskriptoren.

#### Größen-Containerdeskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größenabfragen enthalten, jede innerhalb einer Gruppe von Klammern. Eine Größenabfrage umfasst einen Größen-Deskriptor, einen Wert und — abhängig vom Deskriptor — einen Vergleichsoperator. Die Abfragen messen immer die [content box](/de/docs/Web/CSS/box-edge#content-box) als Vergleich. Die Syntax für das Einbeziehen mehrerer Bedingungen ist dieselbe wie für [`@media`](/de/docs/Web/CSS/@media) Größen-Feature-Abfragen.

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
  - : Das {{cssxref("aspect-ratio")}} des Containers, berechnet als das Verhältnis von Breite zu Höhe des Containers, ausgedrückt als {{cssxref("ratio")}}-Wert.

- `block-size`
  - : Die {{cssxref("block-size")}} des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

- `height`
  - : Die Höhe des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

- `inline-size`
  - : Die {{cssxref("inline-size")}} des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

- `orientation`
  - : Die [orientation](/de/docs/Web/CSS/@media/orientation) des Containers, entweder `landscape` oder `portrait`.

- `width`
  - : Die Breite des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

#### Scroll-Zustand Containerdeskriptoren

Scroll-Zustand Containerdeskriptoren werden innerhalb der `<container-condition>` in einem Klammerpaar nach dem Schlüsselwort `scroll-state` angegeben, zum Beispiel:

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

Unterstützte Schlüsselwörter für Scroll-Zustand Containerdeskriptoren beinhalten physische und {{Glossary("flow_relative_values", "flussverwandte Werte")}}

- `scrollable`
  - : Prüft, ob der Container in der angegebenen Richtung über Benutzerinitiiertes Scrollen, wie das Ziehen des Scrollbalkens oder einer Trackpad-Geste, gescrollt werden kann. Mit anderen Worten: Gibt es überlaufenden Inhalt in der angegebenen Richtung, zu dem gescrollt werden kann? Gültige `scrollable`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "scroll container")}} oder kann anderweitig in keine Richtung gescrollt werden.
    - `top`
      - : Der Container kann zur oberen Kante gescrollt werden.
    - `right`
      - : Der Container kann zur rechten Kante gescrollt werden.
    - `bottom`
      - : Der Container kann zur unteren Kante gescrollt werden.
    - `left`
      - : Der Container kann zur linken Kante gescrollt werden.
    - `x`
      - : Der Container kann horizontal zu entweder links oder rechts gescrollt werden.
    - `y`
      - : Der Container kann vertikal zu entweder oben oder unten gescrollt werden.
    - `block-start`
      - : Der Container kann zur Block-Start-Kante gescrollt werden.
    - `block-end`
      - : Der Container kann zur Block-Ende-Kante gescrollt werden.
    - `inline-start`
      - : Der Container kann zur Inline-Start-Kante gescrollt werden.
    - `inline-end`
      - : Der Container kann zur Inline-Ende-Kante gescrollt werden.
    - `block`
      - : Der Container kann in Block-Richtung gescrollt werden, entweder zu Beginn oder zum Ende.
    - `inline`
      - : Der Container kann in Inline-Richtung gescrollt werden, entweder zu Beginn oder zum Ende.

    Wenn der Test bestanden wird, werden die Regeln innerhalb des `@container`-Blocks auf die Nachfahren des Scroll-Containers angewendet.

    Um zu überprüfen, ob ein Container gescrollt werden kann, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `snapped`
  - : Prüft, ob der Container an einen [scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)-Container-Vorfahren entlang der angegebenen Achse angedockt wird. Gültige `snapped`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein scroll {{Glossary("Scroll_snap#snap_target", "snap target")}} für seinen Vorfahren-Scroll-Container. Bei der Implementierung einer `snapped: none`-Abfrage werden Container, die _snap targets_ für den Scroll-Container sind, _nicht_ mit den `@container`-Stilen angewendet, während Nicht-Snap Targets die Stile _angewendet_ bekommen.
    - `x`
      - : Der Container ist ein horizontales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er wird horizontal zu seinem Vorfahren gesnappt.
    - `y`
      - : Der Container ist ein vertikales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er wird vertikal zu seinem Vorfahren gesnappt.
    - `block`
      - : Der Container ist ein Block-Axis-Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er wird in Block-Richtung zu seinem Vorfahren gesnappt.
    - `inline`
      - : Der Container ist ein Inline-Axis-Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er wird in Inline-Richtung zu seinem Vorfahren gesnappt.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch ein vertikales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container und wird in beide Richtungen zu seinem Vorfahren gesnappt. Der Container wird nicht übereinstimmen, wenn er nur zu seinem Vorfahren entlang der horizontalen _oder_ vertikalen Achse gesnappt wird. Es muss beides sein.

    Um einen Container mit einer nicht-`none` `snapped`-Scroll-Zustandsabfrage zu überprüfen, muss es sich um einen Container mit einem Scroll-Container-Vorfahren handeln, der einen {{cssxref("scroll-snap-type")}}-Wert ungleich `none` hat. Eine `snapped: none`-Abfrage wird auch dann übereinstimmen, wenn es keinen Scroll-Container-Vorfahren gibt.

    Evaluierungen erfolgen, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignisse auf dem Scroll-Snap-Container ausgelöst werden. Wenn der Test bestanden wird, werden die Regeln innerhalb des `@container`-Blocks auf die Nachfahren des Containers angewendet.

    Um zu überprüfen, ob ein Container ein Snap-Ziel ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`
  - : Prüft, ob ein Container mit einem {{cssxref("position")}}-Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an einer Kante seines Scroll-Container-Vorfahren klebt. Gültige `stuck`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container klebt an keiner Kante seines Containers. Beachten Sie, dass `none`-Abfragen sogar übereinstimmen, wenn der Container nicht `position: sticky` gesetzt hat.
    - `top`
      - : Der Container klebt an der oberen Kante seines Containers.
    - `right`
      - : Der Container klebt an der rechten Kante seines Containers.
    - `bottom`
      - : Der Container klebt an der unteren Kante seines Containers.
    - `left`
      - : Der Container klebt an der linken Kante seines Containers.
    - `block-start`
      - : Der Container klebt an der Block-Start-Kante seines Containers.
    - `block-end`
      - : Der Container klebt an der Block-Ende-Kante seines Containers.
    - `inline-start`
      - : Der Container klebt an der Inline-Start-Kante seines Containers.
    - `inline-end`
      - : Der Container klebt an der Inline-Ende-Kante seines Containers.

    Um einen Container mit einer nicht-`none` `stuck`-Scroll-Zustandsabfrage zu überprüfen, muss `position: sticky` darauf gesetzt sein und sich in einem Scroll-Container befinden. Wenn der Test bestanden wird, werden die Regeln innerhalb des `@container`-Blocks auf die Nachfahren des `position: sticky`-Containers angewendet.

    Es ist möglich, dass zwei Werte von entgegengesetzten Achsen gleichzeitig zutreffen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Allerdings werden zwei Werte von entgegengesetzten Kanten niemals gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) {
      /* … */
    }
    ```

    Um zu überprüfen, ob ein Container feststeckt, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(stuck: none) {
      /* … */
    }
    ```

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

Ein Container-Kontext kann mit der `container-type`-Eigenschaft erstellt werden, in diesem Fall mit dem `inline-size`-Wert auf der `.post`-Klasse. Sie können dann die `@container`-At-Regel verwenden, um Stile auf das Element mit der `.card`-Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

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

Zuerst erstellen Sie einen Container-Kontext mit den Eigenschaften `container-type` und `container-name`. Die Kurzschreibsyntax für diese Deklaration wird auf der {{cssxref("container")}}-Seite beschrieben.

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

Die folgende Abfrage wird als wahr ausgewertet und wendet den erklärten Stil an, wenn der Container namens `summary` breiter als `400px` ist und einen Vorfahrencontainer hat, der breiter als `800px` ist:

```css
@container summary (width > 400px) {
  @container (width > 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stilabfragen

Container-Abfragen können auch den berechneten Stil des Containerelements auswerten. Eine _Container-Stil-Abfrage_ ist eine `@container`-Abfrage, die eine oder mehrere `style()`-funktionale Notationen verwendet. Die boolesche Syntax und Logik, die Stil-Features in eine Stil-Abfrage kombiniert, ist dieselbe wie für [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Das Parameter jeder `style()` ist ein einziges `<style-feature>`. Ein **`<style-feature>`** ist eine gültige CSS-[Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Ein Stil-Feature ohne Wert wird als wahr ausgewertet, wenn der berechnete Wert von dem Standardwert für die gegebene Eigenschaft unterschiedlich ist.

Wenn das `<style-feature>`, das als Argument der `style()`-Funktion übergeben wird, eine Deklaration ist, wird die Stil-Abfrage als wahr ausgewertet, wenn der Wert der Deklaration dieselbe wie der berechnete Wert dieser Eigenschaft für den abgefragten Container ist. Andernfalls löst es sich in falsch auf.

Die folgende Container-Abfrage überprüft, ob der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der `--accent-color` des Containerelements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, wird der äquivalente hexadezimale Code `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, damit der Browser berechnete Werte ordnungsgemäß vergleichen kann.

Stil-Features, die eine Kurzschreibungseigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langschrift-Eigenschaften übereinstimmen, und andernfalls falsch. Zum Beispiel wird `@container style(border: 2px solid red)` als wahr gelöst, wenn alle 12 Langschrift-Eigenschaften (`border-bottom-style` usw.), die diese Kurzschreibung ausmachen, wahr sind.

Die globalen `revert` und `revert-layer` sind ungültig als Werte in einem `<style-feature>` und führen dazu, dass die Container-Stilabfrage falsch ist.

### Scroll-Zustand Abfragen

Für vollständige Anleitungen von Scroll-Zustand Abfragen siehe [Verwendung von Container-Scroll-Zustand Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Größen- und Stil-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS-Containment-Modul](/de/docs/Web/CSS/CSS_containment)
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
