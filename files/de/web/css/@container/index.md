---
title: "@container"
slug: Web/CSS/@container
l10n:
  sourceCommit: 36b140be395b9976ac8ef659e88e9f81a547b3ed
---

{{CSSRef}}

Die **`@container`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) ist eine bedingte Gruppenregel, die auf einen [Containment-Kontext](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) angewendet wird. Stil-Deklarationen werden durch eine Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung wahr ist. Die Bedingung wird ausgewertet, wenn sich die Containergröße oder der Wert von [`<style-feature>`](#container-stil-abfragen) ändert.

Die {{cssxref("container-name")}} Eigenschaft spezifiziert eine Liste von Namen für Abfrage-Container. Diese Namen können von `@container` Regeln verwendet werden, um zu filtern, welche Abfrage-Container angesprochen werden. Das optionale, groß- und kleinschreibungssensible `<container-name>` filtert die Abfrage-Container, die durch die Abfrage anvisiert werden.

Sobald ein geeigneter Abfrage-Container für ein Element ausgewählt wurde, wird jedes Container-Feature in der `<container-condition>` gegen diesen Abfrage-Container ausgewertet.

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
      - : Eine Anzahl von Features, die gegen den Abfrage-Container ausgewertet werden, wenn sich die Größe des Containers ändert.

- `<stylesheet>`
  - : Eine Anzahl von CSS-Deklarationen.

### Logische Schlüsselwörter in Container-Abfragen

Logische Schlüsselwörter können verwendet werden, um die Container-Bedingung zu definieren:

- `and` kombiniert zwei oder mehr Bedingungen.
- `or` kombiniert zwei oder mehr Bedingungen.
- `not` negiert die Bedingung. Pro Container-Abfrage ist nur eine `not`-Bedingung erlaubt und kann nicht mit den `and` oder `or` Schlüsselwörtern verwendet werden.

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

Die Kurzschreibweise dafür ist die Verwendung von {{cssxref("container")}} in der Form `container: <name> / <type>`, zum Beispiel:

```css
.post {
  container: sidebar / inline-size;
}
```

In Container-Abfragen wird die {{cssxref("container-name")}} Eigenschaft verwendet, um die Menge der Container auf diejenigen mit einem passenden Namen des Abfrage-Containers zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Verwendung und zu Namenseinschränkungen sind auf der {{cssxref("container-name")}} Seite beschrieben.

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

### Stile basierend auf der Größe eines Containers festlegen

Betrachten Sie das folgende Beispiel eines Kartenkomponenten mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Container-Kontext kann mit der `container-type` Eigenschaft erstellt werden, in diesem Fall unter Verwendung des `inline-size` Werts auf der `.post` Klasse. Sie können dann die `@container` At-Regel verwenden, um Stile auf das Element mit der `.card` Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

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

### Erstellen von benannten Container-Kontexten

Gegeben ist das folgende HTML-Beispiel, das eine Kartenkomponente mit einem Titel und etwas Text ist:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Erstellen Sie zuerst einen Container-Kontext mit den Eigenschaften `container-type` und `container-name`. Die Kurzschreibweise für diese Deklaration ist auf der {{cssxref("container")}} Seite beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Zielen Sie dann auf diesen Container, indem Sie den Namen zur Container-Abfrage hinzufügen:

```css
@container summary (min-width: 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Container-Abfragen

Es ist nicht möglich, in einer einzigen Container-Abfrage auf mehrere Container zu zielen. Es ist jedoch möglich, Container-Abfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage wird als wahr ausgewertet und wendet den deklarierten Stil an, wenn der Container mit dem Namen `summary` breiter als `400px` ist und einen übergeordneten Container hat, der breiter als `800px` ist:

```css
@container summary (min-width: 400px) {
  @container (min-width: 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stil-Abfragen

Container-Abfragen können auch den berechneten Stil des Container-Elements bewerten. Eine _Container-Stil-Abfrage_ ist eine `@container` Abfrage, die eine oder mehrere `style()` funktionale Notationen verwendet. Die boolesche Syntax und Logik zur Kombination von Stil-Features in eine Stil-Abfrage ist dieselbe wie für [CSS Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()` ist ein einzelnes `<style-feature>`. Ein **`<style-feature>`** ist eine gültige CSS [Deklaration](/de/docs/Web/CSS/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Ein Stil-Feature ohne Wert wird als wahr ausgewertet, wenn der berechnete Wert von dem initialen Wert der gegebenen Eigenschaft abweicht.

Wenn das `<style-feature>`, das als Argument der `style()` Funktion übergeben wird, eine Deklaration ist, wird die Stil-Abfrage als wahr ausgewertet, wenn der Deklarationswert mit dem berechneten Wert dieser Eigenschaft für den abgefragten Container übereinstimmt. Andernfalls löst sie sich auf false.

Die folgende Container-Abfrage überprüft, ob der {{cssxref("computed_value")}} des Container-Elements `--accent-color` `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, wird der äquivalente Hexadezimalcode `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, damit der Browser berechnete Werte richtig vergleichen kann.

Stil-Features, die eine Kurzschreibweise abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langform-Eigenschaften übereinstimmen, und andernfalls falsch. Zum Beispiel wird `@container style(border: 2px solid red)` als wahr ausgewertet, wenn alle 12 Langform-Eigenschaften (`border-bottom-style` usw.), die diese Kurzform bilden, als wahr ausgewertet werden.

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und verursachen, dass die Container-Stil-Abfrage auf false gesetzt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Größen- und Stil-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS-Containment-Modul](/de/docs/Web/CSS/CSS_containment)
