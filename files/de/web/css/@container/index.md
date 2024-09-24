---
title: "@container"
slug: Web/CSS/@container
l10n:
  sourceCommit: eb7a000b802ee9089456b0d3602c71ff5aabcebd
---

{{CSSRef}}

Die **`@container`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) ist eine bedingte Gruppenregel, die Stile auf einen [Containment-Kontext](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) anwendet. Stildeklarationen werden durch eine Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung wahr ist. Die Bedingung wird ausgewertet, wenn sich die Containergröße oder der [`<style-feature>`](#container-stilabfragen) Wert ändert.

Die {{cssxref("container-name")}} Eigenschaft spezifiziert eine Liste von Abfragecontainernamen. Diese Namen können von `@container` Regeln verwendet werden, um die gezielten Abfragecontainer zu filtern. Der optionale, groß-kleinschreibungssensitive `<container-name>` filtert die Abfragecontainer, die von der Abfrage gezielt werden.

Sobald ein geeigneter Abfragecontainer für ein Element ausgewählt wurde, wird jede Containerfunktion im `<container-condition>` gegen diesen Abfragecontainer evaluiert.

## Syntax

Die `@container` At-Regel hat folgende Syntax:

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

/* mit einem optionalen <container-name> */
@container tall (height > 30rem) {
  h2 {
    line-height: 1.6;
  }
}

/* mehrere Abfragen in einer einzigen Bedingung */
@container (width > 400px) and style(--responsive: true) {
  h2 {
    font-size: 1.5em;
  }
}

/* Bedingungsliste */
@container card (width > 400px), style(--responsive: true) {
  h2 {
    font-size: 1.5em;
  }
}
```

### Werte

- `<container-condition>`

  - : Ein optionaler `<container-name>` und ein `<container-query>`. Stile, die im `<stylesheet>` definiert sind, werden angewendet, wenn die Bedingung wahr ist.

    - `<container-name>`
      - : Optional. Der Name des Containers, auf den die Stile angewendet werden, wenn die Abfrage als wahr ausgewertet wird, angegeben als ein {{cssxref("ident")}}.
    - `<container-query>`
      - : Eine Reihe von Funktionen, die gegen den Abfragecontainer evaluiert werden, wenn sich die Größe des Containers ändert.

- `<stylesheet>`
  - : Eine Reihe von CSS-Deklarationen.

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

Ein Containment-Kontext kann mit der {{cssxref("container-name")}} Eigenschaft benannt werden.

```css
.post {
  container-name: sidebar;
  container-type: inline-size;
}
```

Die Kurzschriftsyntax dafür ist die Verwendung von {{cssxref("container")}} in der Form `container: <name> / <type>`, zum Beispiel:

```css
.post {
  container: sidebar / inline-size;
}
```

In Containerabfragen wird die {{cssxref("container-name")}} Eigenschaft verwendet, um den Satz von Containern auf die mit einem passenden Abfragecontainer-Namen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Verwendung und zu Namensbeschränkungen sind auf der {{cssxref("container-name")}} Seite beschrieben.

### Deskriptoren

Die folgenden Deskriptoren können innerhalb der Containerbedingung verwendet werden:

- `aspect-ratio`

  - : Der {{cssxref("aspect-ratio")}} des Containers, berechnet als Verhältnis der Breite zur Höhe des Containers, ausgedrückt als {{cssxref("ratio")}} Wert.

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

## Beispiele

### Setzen von Stilen basierend auf der Größe eines Containers

Betrachten Sie das folgende Beispiel eines Kartenkomponenten mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Containerkontext kann mit der `container-type` Eigenschaft erstellt werden, in diesem Fall unter Verwendung des `inline-size` Wertes auf der `.post` Klasse. Sie können dann die `@container` At-Regel verwenden, um Stile auf das Element mit der `.card` Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

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
/* Ein Containerkontext basierend auf der Inline-Größe */
.post {
  container-type: inline-size;
}

/* Stile anwenden, wenn der Container schmaler als 650px ist */
@container (width < 650px) {
  .card {
    width: 50%;
    background-color: gray;
    font-size: 1em;
  }
}
```

{{EmbedLiveSample("Setting_styles_based_on_a_container's_size", "100%", 230)}}

### Erstellen von benannten Containerkontexten

Gegeben das folgende HTML-Beispiel, welches eine Kartenkomponente mit einem Titel und etwas Text ist:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Erstellen Sie zuerst einen Containerkontext mit den `container-type` und `container-name` Eigenschaften. Die Kurzschriftsyntax für diese Deklaration ist auf der {{cssxref("container")}} Seite beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Zielen Sie dann diesen Container an, indem Sie den Namen zur Containerabfrage hinzufügen:

```css
@container summary (min-width: 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Containerabfragen

Es ist nicht möglich, mehrere Container in einer einzigen Containerabfrage zu adressieren. Es ist jedoch möglich, Containerabfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage evaluiert zu wahr und wendet den deklarierten Stil an, wenn der Container mit dem Namen `summary` breiter als `400px` ist und einen übergeordneten Container hat, der breiter als `800px` ist:

```css
@container summary (min-width: 400px) {
  @container (min-width: 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stilabfragen

{{CSSRef}}{{SeeCompatTable}}

Containerabfragen können auch den berechneten Stil des Containerelements auswerten. Eine _Container-Stilabfrage_ ist eine `@container` Abfrage, die eine oder mehrere `style()` Funktionsnotationen verwendet. Die boolesche Syntax und Logik zur Kombination von Stilmerkmalen in einer Stilabfrage ist dieselbe wie für [CSS-Funktionsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()` ist eine einzelne `<style-feature>`. Ein **`<style-feature>`** ist eine gültige CSS [Deklaration](/de/docs/Web/CSS/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Ein Stilmerkmal ohne Wert evaluiert zu wahr, wenn der berechnete Wert vom Anfangswert für die gegebene Eigenschaft abweicht.

Wenn das `<style-feature>`, das als Argument der `style()` Funktion übergeben wird, eine Deklaration ist, evaluiert die Stilabfrage zu wahr, wenn der Wert der Deklaration mit dem berechneten Wert dieser Eigenschaft für den abgefragten Container übereinstimmt. Andernfalls löst es sich zu falsch auf.

Die folgende Containerabfrage überprüft, ob der {{cssxref("computed_value")}} der `--accent-color` des Containerelements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, wird der entsprechende hexadezimale Code `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, damit der Browser die berechneten Werte korrekt vergleichen kann.

Stilmerkmale, die eine Shorthand-Eigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langform-Eigenschaften übereinstimmen, und andernfalls falsch. Zum Beispiel wird `@container style(border: 2px solid red)` wahr, wenn alle 12 Langform-Eigenschaften (`border-bottom-style`, etc.), die dieses Shorthand bilden, wahr sind.

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Container-Stilabfrage falsch wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS-Containment-Modul](/de/docs/Web/CSS/CSS_containment)
