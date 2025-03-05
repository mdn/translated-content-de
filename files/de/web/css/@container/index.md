---
title: "@container"
slug: Web/CSS/@container
l10n:
  sourceCommit: d50c6b04f0e0cb20eca8a5f0e643e435ee8ac6ff
---

{{CSSRef}}

Die **`@container`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ist eine bedingte Gruppierungsregel, die Stile auf einen [Containment-Kontext](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) anwendet. Stil-Deklarationen werden durch eine Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung wahr ist. Die Bedingung wird ausgewertet, wenn sich die Container-Größe oder der Wert des [`<style-feature>`](#container-stilabfragen) ändert.

Die {{cssxref("container-name")}} Eigenschaft gibt eine Liste von Abfragecontainer-Namen an. Diese Namen können von `@container` Regeln verwendet werden, um zu filtern, welche Abfragecontainer ausgerichtet werden. Der optionale, groß- und kleinschreibungsabhängige `<container-name>` filtert die Abfragecontainer, die durch die Abfrage ausgerichtet werden.

Sobald ein geeigneter Abfragecontainer für ein Element ausgewählt wurde, wird jede Container-Funktion im `<container-condition>` gegen diesen Abfragecontainer ausgewertet.

## Syntax

Die `@container` At-Regel hat die folgende Syntax:

```plain
@container <container-condition># {
  <stylesheet>
}
```

Zum Beispiel:

```css
@container (width > 400px) {
  h2 {
    font-size: 1.5em;
  }
}

/* with an optional <container-name> */
@container tall (height > 30rem) {
  h2 {
    line-height: 1.6;
  }
}

/* multiple queries in a single condition */
@container (width > 400px) and style(--responsive: true) {
  h2 {
    font-size: 1.5em;
  }
}

/* condition list */
@container card (width > 400px), style(--responsive: true) {
  h2 {
    font-size: 1.5em;
  }
}
```

### Werte

- `<container-condition>`

  - : Ein optionaler `<container-name>` und eine `<container-query>`. Stile, die im `<stylesheet>` definiert sind, werden angewendet, wenn die Bedingung wahr ist.

    - `<container-name>`
      - : Optional. Der Name des Containers, auf den die Stile angewendet werden, wenn die Abfrage als wahr ausgewertet wird, angegeben als {{cssxref("ident")}}.
    - `<container-query>`
      - : Eine Menge von Eigenschaften, die gegen den Abfragecontainer ausgewertet werden, wenn sich die Größe des Containers ändert.

- `<stylesheet>`
  - : Eine Menge von CSS-Deklarationen.

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

Ein Containment-Kontext kann unter Verwendung der {{cssxref("container-name")}} Eigenschaft benannt werden.

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

In Container-Abfragen wird die {{cssxref("container-name")}} Eigenschaft verwendet, um die Menge der Container auf diejenigen mit einem passenden Abfragecontainer-Namen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zu Nutzung und Namensbeschränkungen sind auf der {{cssxref("container-name")}} Seite beschrieben.

### Deskriptoren

Die folgenden Deskriptoren können innerhalb der Container-Bedingung verwendet werden:

- `aspect-ratio`

  - : Das {{cssxref("aspect-ratio")}} des Containers, berechnet als Verhältnis der Breite zur Höhe des Containers, ausgedrückt als {{cssxref("ratio")}} Wert.

- `block-size`

  - : Die {{cssxref("block-size")}} des Containers, ausgedrückt als {{cssxref("length")}} Wert.

- `height`

  - : Die Höhe des Containers, ausgedrückt als {{cssxref("length")}} Wert.

- `inline-size`

  - : Die {{cssxref("inline-size")}} des Containers, ausgedrückt als {{cssxref("length")}} Wert.

- `orientation`

  - : Die [Ausrichtung](/de/docs/Web/CSS/@media/orientation) des Containers, entweder `landscape` oder `portrait`.

- `width`
  - : Die Breite des Containers, ausgedrückt als {{cssxref("length")}} Wert.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen von Stilen basierend auf der Größe eines Containers

Betrachten Sie das folgende Beispiel eines Kartenbausteins mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Container-Kontext kann mit der `container-type` Eigenschaft erstellt werden, in diesem Fall mit dem `inline-size` Wert auf der `.post` Klasse. Sie können dann die `@container` At-Regel verwenden, um Stile auf das Element mit der `.card` Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

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
    background-color: gray;
    font-size: 1em;
  }
}
```

{{EmbedLiveSample("Setting_styles_based_on_a_container's_size", "100%", 230)}}

### Erstellen benannter Container-Kontexte

Betrachten Sie das folgende HTML-Beispiel, das einen Kartenbaustein mit einem Titel und etwas Text darstellt:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Zuerst erstellen Sie einen Container-Kontext unter Verwendung der `container-type` und `container-name` Eigenschaften. Die Kurzschreibweise für diese Deklaration ist auf der {{cssxref("container")}} Seite beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Als nächstes richten Sie den Container aus, indem Sie den Namen zur Container-Abfrage hinzufügen:

```css
@container summary (min-width: 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Container-Abfragen

Es ist nicht möglich, mehrere Container in einer einzigen Container-Abfrage zu zielen. Es ist möglich, Container-Abfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage wird als wahr ausgewertet und wendet den deklarierten Stil an, wenn der Container namens `summary` breiter als `400px` ist und einen übergeordneten Container hat, der breiter als `800px` ist:

```css
@container summary (min-width: 400px) {
  @container (min-width: 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stilabfragen

Container-Abfragen können auch den berechneten Stil des Container-Elements bewerten. Eine _Container-Stilabfrage_ ist eine `@container` Abfrage, die eine oder mehrere `style()` funktionale Notationen verwendet. Die boole'sche Syntax und Logik zur Kombination von Stileigenschaften in eine Stilabfrage ist dieselbe wie für [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

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

Eine Stil-Eigenschaft ohne Wert wird als wahr bewertet, wenn der berechnete Wert anders ist als der Anfangswert für die gegebene Eigenschaft.

Wenn das `<style-feature>`, das als Argument der `style()` Funktion übergeben wird, eine Deklaration ist, wird die Stilabfrage als wahr bewertet, wenn der Deklarationswert dem berechneten Wert dieser Eigenschaft für den abgefragten Container entspricht. Andernfalls löst es als falsch auf.

Die folgende Container-Abfrage überprüft, ob der {{cssxref("computed_value")}} der `--accent-color` des Container-Elements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft einen Wert von `blue` hat, wird der entsprechende hexadezimale Code `#0000ff` nur dann übereinstimmen, wenn die Eigenschaft als Farbe mit {{cssxref("@property")}} definiert wurde, sodass der Browser berechnete Werte ordnungsgemäß vergleichen kann.

Stil-Eigenschaften, die eine Kurzform-Eigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langform-Eigenschaften übereinstimmen und andernfalls falsch. Zum Beispiel löst `@container style(border: 2px solid red)` als wahr auf, wenn alle 12 Langform-Eigenschaften (`border-bottom-style`, etc.), die diese Kurzform ausmachen, wahr sind.

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und verursachen, dass die Container-Stilabfrage falsch ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using container queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Using container size and style queries](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS entferntes Modul](/de/docs/Web/CSS/CSS_containment)
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
