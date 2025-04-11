---
title: "@container"
slug: Web/CSS/@container
l10n:
  sourceCommit: 5a195171d06aee3d9c1c78d71c7f0c3a060f5263
---

{{CSSRef}}

Die **`@container`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ist eine bedingte Gruppenregel, die Stile auf einen [Containment-Kontext](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) anwendet. Stil-Deklarationen werden durch eine Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung erfüllt ist. Die Bedingung wird bewertet, wenn sich die abgefragte Containergröße, [`<style-feature>`](#container-stil-abfragen) oder der Scroll-Status ändert.

Die {{cssxref("container-name")}}-Eigenschaft spezifiziert eine Liste von Abfrage-Container-Namen. Diese Namen können von `@container`-Regeln verwendet werden, um zu filtern, welche Abfrage-Container gezielt werden. Der optionale, groß- und kleinschreibungssensitive `<container-name>` filtert die Abfrage-Container, die von der Abfrage anvisiert werden.

Sobald ein geeigneter Abfrage-Container für ein Element ausgewählt wurde, wird jede Container-Funktion im `<container-condition>` gegen diesen Abfrage-Container evaluiert.

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

  - : Ein optionaler `<container-name>` und ein `<container-query>`. Stile, die im `<stylesheet>` definiert sind, werden angewendet, wenn die Bedingung wahr ist.

    - `<container-name>`
      - : Optional. Der Name des Containers, auf den die Stile angewendet werden, wenn die Abfrage wahr ergibt, angegeben als {{cssxref("ident")}}.
    - `<container-query>`
      - : Eine Reihe von Funktionen, die gegen den Abfrage-Container evaluiert werden, wenn sich die Größe, [`<style-feature>`](#container-stil-abfragen) oder der Scroll-Status des Containers ändert.

- `<stylesheet>`
  - : Eine Reihe von CSS-Regeln oder -Deklarationen.

### Logische Schlüsselwörter in Container-Abfragen

Logische Schlüsselwörter können verwendet werden, um die Container-Bedingung zu definieren:

- `and` kombiniert zwei oder mehr Bedingungen.
- `or` kombiniert zwei oder mehr Bedingungen.
- `not` negiert die Bedingung. Nur eine 'not'-Bedingung ist pro Container-Abfrage erlaubt und kann nicht mit den Schlüsselwörtern `and` oder `or` verwendet werden.

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

Ein Containment-Kontext kann mithilfe der {{cssxref("container-name")}}-Eigenschaft benannt werden.

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

In Container-Abfragen wird die {{cssxref("container-name")}}-Eigenschaft verwendet, um den Satz von Containern auf diejenigen mit einem übereinstimmenden Abfrage-Containernamen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Verwendung und zu Namensbeschränkungen sind auf der {{cssxref("container-name")}}-Seite beschrieben.

### Deskriptoren

Die `<container-condition>`-Abfragen umfassen [Größen-](#größen-container-deskriptoren) und [Scroll-Status-](#scroll-status-container-deskriptoren) Container-Deskriptoren.

#### Größen-Container-Deskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größenabfragen enthalten, jede innerhalb eines Satzes von Klammern. Eine Größenabfrage enthält einen Größendeskriptor, einen Wert und — je nach Deskriptor — einen Vergleichsoperator. Die Syntax zum Einfügen mehrerer Bedingungen entspricht der für [`@media`](/de/docs/Web/CSS/@media) Größenmerkmal-Abfragen.

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

  - : Das {{cssxref("aspect-ratio")}} des Containers, berechnet als Breite zu Höhe des Containers ausgedrückt als {{cssxref("ratio")}}-Wert.

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

#### Scroll-Status-Container-Deskriptoren

Scroll-Status-Container-Deskriptoren werden innerhalb der `<container-condition>` innerhalb eines Satzes von Klammern spezifiziert, die dem `scroll-state`-Schlüsselwort folgen, zum Beispiel:

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

Unterstützte Schlüsselwörter für Scroll-Status-Container-Deskriptoren umfassen physische und {{Glossary("flow_relative_values", "flussrelative Werte")}}.

- `scrollable`

  - : Überprüft, ob der Container in die angegebene Richtung durch benutzergesteuertes Scrollen gescrollt werden kann, wie zum Beispiel durch Ziehen des Scrollbalkens oder Verwendung einer Trackpad-Geste. Mit anderen Worten: Gibt es überflüssigen Inhalt in der angegebenen Richtung, zu dem gescrollt werden kann? Gültige `scrollable`-Werte umfassen die folgenden Schlüsselwörter:

    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder kann sonst nicht in irgendeine Richtung gescrollt werden.
    - `top`
      - : Der Container kann zu seiner oberen Kante gescrollt werden.
    - `right`
      - : Der Container kann zu seiner rechten Kante gescrollt werden.
    - `bottom`
      - : Der Container kann zu seiner unteren Kante gescrollt werden.
    - `left`
      - : Der Container kann zu seiner linken Kante gescrollt werden.
    - `x`
      - : Der Container kann horizontal entweder zu seiner linken oder rechten Kante oder zu beiden gescrollt werden.
    - `y`
      - : Der Container kann vertikal entweder zu seiner oberen oder unteren Kante oder zu beiden gescrollt werden.
    - `block-start`
      - : Der Container kann zu seiner Block-Start-Kante gescrollt werden.
    - `block-end`
      - : Der Container kann zu seiner Block-End-Kante gescrollt werden.
    - `inline-start`
      - : Der Container kann zu seiner Inline-Start-Kante gescrollt werden.
    - `inline-end`
      - : Der Container kann zu seiner Inline-End-Kante gescrollt werden.
    - `block`
      - : Der Container kann in seiner Block-Richtung entweder zu seiner Block-Start- oder Block-End-Kante oder zu beiden gescrollt werden.
    - `inline`
      - : Der Container kann in seiner Inline-Richtung entweder zu seiner Inline-Start- oder Inline-End-Kante oder zu beiden gescrollt werden.

    Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf Nachkommen des Scroll-Containers angewendet.

    Um zu überprüfen, ob ein Container scrollbar ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `snapped`

  - : Überprüft, ob der Container ein Ziel einer [Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) Container-Ahne entlang der angegebenen Achse ist oder sein wird. Gültige `snapped`-Werte umfassen die folgenden Schlüsselwörter:

    - `none`
      - : Der Container ist kein Scroll-{{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} für seinen Ahnen-Scroll-Container. Bei der Implementierung einer `snapped: none`-Abfrage werden Container, die _Snap-Ziele_ für den Scroll-Container sind, _nicht_ die `@container`-Stile anwenden, während Nicht-Snap-Ziele _die_ Stile anwenden werden.
    - `x`
      - : Der Container ist ein horizontales Scroll-Snap-Ziel für seinen Ahnen-Scroll-Container, das heißt, er schnappt horizontal zu seinem Ahnen.
    - `y`
      - : Der Container ist ein vertikales Scroll-Snap-Ziel für seinen Ahnen-Scroll-Container, das heißt, er schnappt vertikal zu seinem Ahnen.
    - `block`
      - : Der Container ist ein Block-Achsen-Scroll-Snap-Ziel für seinen Ahnen-Scroll-Container, das heißt, er schnappt in Block-Richtung zu seinem Ahnen.
    - `inline`
      - : Der Container ist ein Inline-Achsen-Scroll-Snap-Ziel für seinen Ahnen-Scroll-Container, das heißt, er schnappt in Inline-Richtung zu seinem Ahnen.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch ein vertikales Scroll-Snap-Ziel für seinen Ahnen-Scroll-Container und schnappt in beiden Richtungen zu seinem Ahnen. Der Container wird nicht übereinstimmen, wenn er nur entlang der horizontalen _oder_ vertikalen Achse zu seinem Ahnen schnappen sollte. Es muss beides sein.

    Um einen Container mit einer nicht `none` `snapped` Scroll-Status-Abfrage zu evaluieren, muss es ein Container mit einem Scroll-Container-Ahnen sein, der einen {{cssxref("scroll-snap-type")}}-Wert hat, der nicht `none` ist. Eine `snapped: none`-Abfrage wird übereinstimmen, selbst wenn es keinen Scroll-Container-Ahnen gibt.

    Bewertungen finden statt, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignisse auf dem Scroll-Snap-Container ausgelöst werden. Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf Nachkommen des Containers angewendet.

    Um zu überprüfen, ob ein Container ein Snap-Ziel ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`

  - : Überprüft, ob ein Container mit einem {{cssxref("position")}}-Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an einer Kante seines Scroll-Container-Ahnen haftet. Gültige `stuck`-Werte umfassen die folgenden Schlüsselwörter:

    - `none`
      - : Der Container haftet an keiner Kante seines Containers. Beachten Sie, dass `none`-Abfragen übereinstimmen, selbst wenn der Container nicht `position: sticky` darauf gesetzt hat.
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

    Um einen Container mit einer nicht `none` `stuck` Scroll-Status-Abfrage zu evaluieren, muss er `position: sticky` darauf gesetzt haben und sich innerhalb eines Scroll-Containers befinden. Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf Nachkommen des `position: sticky` Containers angewendet.

    Es ist möglich, dass zwei Werte aus entgegengesetzten Achsen gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Jedoch werden zwei Werte aus entgegengesetzten Kanten niemals gleichzeitig übereinstimmen:

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

Betrachten Sie das folgende Beispiel einer Kartenkomponente mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Container-Kontext kann mithilfe der `container-type`-Eigenschaft erstellt werden, in diesem Fall mit dem Wert `inline-size` auf der Klasse `.post`. Sie können dann die `@container` At-Regel verwenden, um Stile auf das Element mit der Klasse `.card` in einem Container anzuwenden, der schmaler als `650px` ist.

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

Angenommen, das folgende HTML-Beispiel zeigt eine Kartenkomponente mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Zuerst erstellen Sie einen Container-Kontext mithilfe der `container-type` und `container-name`-Eigenschaften. Die Kurzschreibweise für diese Deklaration ist auf der {{cssxref("container")}}-Seite beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Als Nächstes zielen Sie auf diesen Container, indem Sie den Namen der Container-Abfrage hinzufügen:

```css
@container summary (min-width: 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Container-Abfragen

Es ist nicht möglich, mehrere Container in einer einzigen Container-Abfrage zu zielgenau anzugeben. Es ist jedoch möglich, Container-Abfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage evaluiert zu true und wendet den deklarierten Stil an, wenn der Container namens `summary` breiter als `400px` ist und einen Vorfahren-Container hat, der breiter als `800px` ist:

```css
@container summary (min-width: 400px) {
  @container (min-width: 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stil-Abfragen

Container-Abfragen können auch den berechneten Stil des Containerelements auswerten. Eine _Container-Stil-Abfrage_ ist eine `@container`-Abfrage, die einen oder mehrere `style()` Funktionalnotationen verwendet. Die boolesche Syntax und Logik, um Stilmerkmale in eine Stil-Abfrage zu kombinieren, ist dieselbe wie bei [CSS-Merkmalsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

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

Ein Stilmerkmal ohne Wert evaluiert zu true, wenn der berechnete Wert vom Anfangswert für die gegebene Eigenschaft abweicht.

Wenn das `<style-feature>`, das als Argument der `style()`-Funktion übergeben wird, eine Deklaration ist, evaluiert die Stil-Abfrage zu true, wenn der Wert der Deklaration mit dem berechneten Wert dieser Eigenschaft für den abgefragten Container übereinstimmt. Andernfalls wird sie zu false ausgewertet.

Die folgende Container-Abfrage überprüft, ob der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der `--accent-color` des Containerelements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, wird der äquivalente Hexadezimalcode `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, damit der Browser berechnete Werte ordnungsgemäß vergleichen kann.

Stilmerkmale, die eine Kurzschreibweise-Eigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langschreibweise-Eigenschaften übereinstimmen, und andernfalls falsch. Zum Beispiel wird `@container style(border: 2px solid red)` zu true ausgewertet, wenn alle 12 Langschreibweise-Eigenschaften (`border-bottom-style` usw.), die diese Kurzschreibweise ausmachen, wahr sind.

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Container-Stil-Abfrage falsch ist.

### Scroll-Status-Abfragen

Siehe [Verwendung von Container-Scroll-Status-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) für vollständige Anleitungen zu Scroll-Status-Abfragebeispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Status-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS-Containment-Modul](/de/docs/Web/CSS/CSS_containment)
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
