---
title: "@container"
slug: Web/CSS/@container
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Die **`@container`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) ist eine bedingte Gruppenregel, die Stile auf einen [Containment-Kontext](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) anwendet.
Stildeklarationen werden durch eine Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung erfüllt ist.
Die Bedingung wird ausgewertet, wenn sich die abgefragte Containergröße, [`<style-feature>`](#container_stilabfragen) oder der Scroll-Status ändert.

Die {{cssxref("container-name")}}-Eigenschaft gibt eine Liste von Abfrage-Container-Namen an. Diese Namen können von `@container`-Regeln verwendet werden, um zu filtern, welche Abfrage-Container anvisiert werden. Der optionale, groß-/kleinschreibungssensitive `<container-name>` filtert die Abfrage-Container, die von der Abfrage anvisiert werden.

Sobald ein geeigneter Abfrage-Container für ein Element ausgewählt wurde, wird jede Container-Funktion in der `<container-condition>` gegen diesen Abfrage-Container ausgewertet.

## Syntax

Die `@container` at-rule hat folgende Syntax:

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

  - : Ein optionales `<container-name>` und eine `<container-query>`. Stile, die im `<stylesheet>` definiert sind, werden angewendet, wenn die Bedingung wahr ist.

    - `<container-name>`
      - : Optional. Der Name des Containers, auf den die Stile angewendet werden, wenn die Abfrage zu wahr auswertet, angegeben als ein {{cssxref("ident")}}.
    - `<container-query>`
      - : Eine Menge von Funktionen, die gegen den Abfrage-Container ausgewertet werden, wenn sich die Größe, [`<style-feature>`](#container_stilabfragen) oder der Scroll-Status des Containers ändert.

- `<stylesheet>`
  - : Eine Menge von CSS-Regeln oder Deklarationen.

### Logische Schlüsselwörter in Container-Abfragen

Logische Schlüsselwörter können verwendet werden, um die Container-Bedingung zu definieren:

- `and` kombiniert zwei oder mehr Bedingungen.
- `or` kombiniert zwei oder mehr Bedingungen.
- `not` negiert die Bedingung. Es ist jeweils nur eine 'not'-Bedingung pro Container-Abfrage erlaubt und kann nicht mit den Schlüsselwörtern `and` oder `or` verwendet werden.

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

Die Kurzschreibweise für dies ist die Verwendung von {{cssxref("container")}} in der Form `container: <name> / <type>`, zum Beispiel:

```css
.post {
  container: sidebar / inline-size;
}
```

In Container-Abfragen wird die {{cssxref("container-name")}}-Eigenschaft verwendet, um die Menge der Container auf jene mit einem passenden Abfrage-Container-Namen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Nutzung und zu Namensbeschränkungen sind auf der Seite zu {{cssxref("container-name")}} beschrieben.

### Deskriptoren

Die `<container-condition>`-Abfragen beinhalten [Größe](#größe_container-deskriptoren) und [Scroll-Status](#scroll-status_container-deskriptoren) Container-Deskriptoren.

#### Größe Container-Deskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größen-Abfragen beinhalten, jede innerhalb einer Klammer. Eine Größen-Abfrage beinhaltet einen Größen-Deskriptor, einen Wert, und – je nach Deskriptor – einen Vergleichsoperator. Die Syntax für die Einbeziehung mehrerer Bedingungen ist die gleiche wie für [Medienabfrage](/de/docs/Web/CSS/@media)-Größenfunktionen.

```css
@container (min-width: 400px) { ... }
@container (orientation: landscape) and (width > 400px) { ... }
@container (15em <= block-size <= 30em) { ... }
```

- `aspect-ratio`

  - : Das {{cssxref("aspect-ratio")}} des Containers, berechnet als Breite zu Höhe des Containers ausgedrückt als {{cssxref("ratio")}}-Wert.

- `block-size`

  - : Die {{cssxref("block-size")}} des Containers ausgedrückt als {{cssxref("length")}}-Wert.

- `height`

  - : Die Höhe des Containers ausgedrückt als {{cssxref("length")}}-Wert.

- `inline-size`

  - : Die {{cssxref("inline-size")}} des Containers ausgedrückt als {{cssxref("length")}}-Wert.

- `orientation`

  - : Die [Orientierung](/de/docs/Web/CSS/@media/orientation) des Containers, entweder `landscape` oder `portrait`.

- `width`
  - : Die Breite des Containers ausgedrückt als {{cssxref("length")}}-Wert.

#### Scroll-Status Container-Deskriptoren

Scroll-Status Container-Deskriptoren werden im `<container-condition>` innerhalb einer Klammer nach dem `scroll-state` Schlüsselwort angegeben, zum Beispiel:

```css
@container scroll-state(scrollable: top) { ... }
@container scroll-state(stuck: inline-end) { ... }
@container scroll-state(snapped: both) { ... }
```

Unterstützte Schlüsselwörter für Scroll-Status Container-Deskriptoren beinhalten physische und {{Glossary("flow_relative_values", "flussbezogene Werte")}}.

- `scrollable`

  - : Fragt, ob der Container in die angegebene Richtung durch benutzerinitiierte Scrollaktionen gescrollt werden kann, wie z.B. durch Ziehen des Scrollbalkens oder eine Trackpad-Geste. Mit anderen Worten, ob überlaufender Content in der gegebenen Richtung existiert, der gescrollt werden kann. Gültige `scrollable`-Werte umfassen die folgenden Schlüsselwörter:

    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder kann in keine Richtung gescrollt werden.
    - `top`
      - : Der Container kann in Richtung seiner oberen Kante gescrollt werden.
    - `right`
      - : Der Container kann in Richtung seiner rechten Kante gescrollt werden.
    - `bottom`
      - : Der Container kann in Richtung seiner unteren Kante gescrollt werden.
    - `left`
      - : Der Container kann in Richtung seiner linken Kante gescrollt werden.
    - `x`
      - : Der Container kann horizontal in Richtung entweder seiner linken oder rechten Kante oder beiden gescrollt werden.
    - `y`
      - : Der Container kann vertikal in Richtung entweder seiner oberen oder unteren Kante oder beiden gescrollt werden.
    - `block-start`
      - : Der Container kann in Richtung seiner Block-Startkante gescrollt werden.
    - `block-end`
      - : Der Container kann in Richtung seiner Block-Endkante gescrollt werden.
    - `inline-start`
      - : Der Container kann in Richtung seiner Inline-Startkante gescrollt werden.
    - `inline-end`
      - : Der Container kann in Richtung seiner Inline-Endkante gescrollt werden.
    - `block`
      - : Der Container kann in seiner Blockrichtung in Richtung entweder seiner Block-Start- oder Block-Endkante oder beiden gescrollt werden.
    - `inline`
      - : Der Container kann in seiner Inlinerichtung in Richtung entweder seiner Inline-Start- oder Inline-Endkante oder beiden gescrollt werden.

    Wenn der Test bestanden wird, werden die Regeln innerhalb des `@container`-Blocks auf Nachkommen des Scroll-Containers angewendet.

    Um zu bewerten, ob ein Container scrollbar ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrollable: none) { ... }
    ```

- `snapped`

  - : Fragt, ob der Container ein gesnapptes Element eines [Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)-Containers ist oder sein wird, und das entlang der gegebenen Achse. Gültige `snapped`-Werte umfassen die folgenden Schlüsselwörter:

    - `none`
      - : Der Container ist kein Scroll-{{Glossary("Scroll_snap#snap_target", "Schnappziel")}} für seinen übergeordneten Scroll-Container. Bei der Implementierung einer `snapped: none`-Abfrage haben Container, die Schnappziele für den Scroll-Container sind, _nicht_ die `@container`-Stile angewendet, während Nicht-Schnappziele _wohl_ die Stile angewendet bekommen.
    - `x`
      - : Der Container ist ein horizontales Scroll-Schnappziel für seinen übergeordneten Scroll-Container, das heißt, es wird horizontal zu seinem Vorfahren gesnappt.
    - `y`
      - : Der Container ist ein vertikales Scroll-Schnappziel für seinen übergeordneten Scroll-Container, das heißt, es wird vertikal zu seinem Vorfahren gesnappt.
    - `block`
      - : Der Container ist ein Block-Achsen-Scroll-Schnappziel für seinen übergeordneten Scroll-Container, das heißt, es wird zu seinem Vorfahren in Blockrichtung gesnappt.
    - `inline`
      - : Der Container ist ein Inline-Achsen-Scroll-Schnappziel für seinen übergeordneten Scroll-Container, das heißt, es wird zu seinem Vorfahren in Inline-Richtung gesnappt.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch ein vertikales Scroll-Schnappziel für seinen übergeordneten Scroll-Container und wird zu seinem Vorfahren in beide Richtungen gesnappt. Der Container wird nicht übereinstimmen, wenn er nur horizontal _oder_ vertikal zu seinem Vorfahren gesnappt wird. Er muss in beiden Richtungen gesnappt sein.

    Um einen Container mit einer nicht-`none` `snapped`-Scroll-Status-Abfrage zu bewerten, muss es sich um einen Container mit einem Scroll-Container-Vorfahren handeln, der einen {{cssxref("scroll-snap-type")}}-Wert ungleich `none` hat. Eine `snapped: none`-Abfrage wird auch dann übereinstimmen, wenn kein Scroll-Container-Vorfahre vorhanden ist.

    Bewertungen erfolgen, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignisse auf dem Scroll-Snap-Container ausgelöst werden. Wenn der Test bestanden wird, werden die Regeln innerhalb des `@container`-Blocks auf Nachkommen des Containers angewendet.

    Um zu bewerten, ob ein Container ein Schnappziel ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(snapped: none) { ... }
    ```

- `stuck`

  - : Fragt, ob ein Container mit einem {{cssxref("position")}}-Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an einer Kante seines rollenden Container-Vorfahren geklebt ist. Gültige `stuck`-Werte umfassen die folgenden Schlüsselwörter:

    - `none`
      - : Der Container ist an keiner Kante seines Containers angeklebt. Beachten Sie, dass `none`-Abfragen selbst dann übereinstimmen werden, wenn der Container kein `position: sticky` hat.
    - `top`
      - : Der Container ist an der oberen Kante seines Containers angeklebt.
    - `right`
      - : Der Container ist an der rechten Kante seines Containers angeklebt.
    - `bottom`
      - : Der Container ist an der unteren Kante seines Containers angeklebt.
    - `left`
      - : Der Container ist an der linken Kante seines Containers angeklebt.
    - `block-start`
      - : Der Container ist an der Block-Start-Kante seines Containers angeklebt.
    - `block-end`
      - : Der Container ist an der Block-End-Kante seines Containers angeklebt.
    - `inline-start`
      - : Der Container ist an der Inline-Start-Kante seines Containers angeklebt.
    - `inline-end`
      - : Der Container ist an der Inline-End-Kante seines Containers angeklebt.

    Um einen Container mit einer nicht-`none` `stuck`-Scroll-Status-Abfrage zu bewerten, muss `position: sticky` darauf gesetzt sein und sich innerhalb eines Scroll-Containers befinden. Wenn der Test bestanden wird, werden die Regeln innerhalb des `@container`-Blocks auf Nachkommen des `position: sticky`-Containers angewendet.

    Es ist möglich, dass zwei Werte von entgegengesetzten Achsen gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) { ... }
    ```

    Allerdings werden zwei Werte von entgegengesetzten Kanten nie gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) { ... }
    ```

    Um zu bewerten, ob ein Container angeklebt ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(stuck: none) { ... }
    ```

## Formale Syntax

{{csssyntax}}

## Beispiele

### Stile basierend auf der Größe eines Containers einstellen

Betrachten Sie das folgende Beispiel eines Kartenkomponenten mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Container-Kontext kann mit der `container-type`-Eigenschaft erstellt werden, in diesem Fall mit dem Wert `inline-size` auf der `.post`-Klasse.
Sie können dann die `@container`-at-rule verwenden, um Stile auf das Element mit der `.card` Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

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

Angenommen, das folgende HTML-Beispiel ist eine Kartenkomponente mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Zunächst erstellen Sie einen Container-Kontext unter Verwendung der `container-type` und `container-name` Eigenschaften.
Die Kurzschreibweise für diese Deklaration wird auf der {{cssxref("container")}}-Seite beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Als nächstes zielen Sie auf diesen Container, indem Sie den Namen der Container-Abfrage hinzufügen:

```css
@container summary (min-width: 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Container-Abfragen

Es ist nicht möglich, mehrere Container in einer einzigen Container-Abfrage anzusprechen.
Es ist jedoch möglich, verschachtelte Container-Abfragen zu verwenden, die denselben Effekt haben.

Die folgende Abfrage wird zu wahr auswerten und den deklarierten Stil anwenden, wenn der Container namens `summary` breiter als `400px` ist und einen Vorfahren-Container hat, der breiter als `800px` ist:

```css
@container summary (min-width: 400px) {
  @container (min-width: 800px) {
    /* <stylesheet> */
  }
}
```

### Container Stilabfragen

Container-Abfragen können auch den berechneten Stil des Container-Elements auswerten. Eine _container style query_ ist eine `@container` Abfrage, die eine oder mehrere `style()` funktionale Notationen verwendet. Die boolesche Syntax und Logik, um Stilfunktionen in eine Stilabfrage zu kombinieren, ist dieselbe wie für [CSS-Funktionsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()` ist ein einzelnes `<style-feature>`. Ein **`<style-feature>`** ist eine gültige CSS-[Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Eine Stilfunktion ohne Wert wertet zu wahr aus, wenn der berechnete Wert unterschiedlich vom Anfangswert für die gegebene Eigenschaft ist.

Wenn das `<style-feature>`, das als Argument der `style()`-Funktion übergeben wird, eine Deklaration ist, wertet die Stilabfrage zu wahr aus, wenn der Wert der Deklaration derselbe ist wie der berechnete Wert dieser Eigenschaft für den abgefragten Container. Andernfalls wird es zu falsch ausgewertet.

Die folgende Container-Abfrage überprüft, ob der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value) der `--accent-color` des Container-Elements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, wird der entsprechende hexadezimale Code `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, sodass der Browser die berechneten Werte korrekt vergleichen kann.

Stilfunktionen, die eine Kurzschreib-Eigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langhand-Eigenschaften übereinstimmen, und andernfalls falsch. Zum Beispiel wird `@container style(border: 2px solid red)` zu wahr auswerten, wenn alle 12 Langhand-Eigenschaften (`border-bottom-style`, etc.), die diese Kurzschreibweise ausmachen, wahr sind.

Die globalen Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Container-Stilabfrage zu falsch ausgewertet wird.

### Scroll-Status-Abfragen

Siehe [Verwendung von Container-Scroll-Status-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) für vollständige Anleitungen zu Scroll-Status-Abfrage-Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Status-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS-Containment-Modul](/de/docs/Web/CSS/CSS_containment)
- [CSS at-rule Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
