---
title: "@container"
slug: Web/CSS/@container
l10n:
  sourceCommit: eb7a000b802ee9089456b0d3602c71ff5aabcebd
---

{{CSSRef}}

Die **`@container`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) ist eine bedingte Gruppenregel, die Stile auf einen [Containment-Kontext](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) anwenden kann. Stil-Deklarationen werden durch eine Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung erfüllt ist. Die Bedingung wird ausgewertet, wenn sich die Containergröße oder der Wert von [`<style-feature>`](#container-stilabfragen) ändert.

Die Eigenschaft {{cssxref("container-name")}} gibt eine Liste von Namen für Abfragecontainer an. Diese Namen können von `@container`-Regeln verwendet werden, um zu filtern, welche Abfragecontainer angesprochen werden. Die optionale, groß- und kleinschreibungssensitive `<container-name>` filtert die Abfragecontainer, die von der Abfrage angesprochen werden.

Sobald ein geeigneter Abfragecontainer für ein Element ausgewählt wurde, wird jede Container-Eigenschaft in der `<container-condition>` gegen diesen Abfragecontainer ausgewertet.

## Syntax

Die At-Regel `@container` hat die folgende Syntax:

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

  - : Ein optionaler `<container-name>` und eine `<container-query>`. Stile, die im `<stylesheet>` definiert sind, werden angewendet, wenn die Bedingung erfüllt ist.

    - `<container-name>`
      - : Optional. Der Name des Containers, auf den die Stile angewendet werden, wenn die Abfrage zu wahr ausgewertet wird, spezifiziert als ein {{cssxref("ident")}}.
    - `<container-query>`
      - : Eine Reihe von Eigenschaften, die gegen den Abfragecontainer ausgewertet werden, wenn sich die Größe des Containers ändert.

- `<stylesheet>`
  - : Eine Menge von CSS-Deklarationen.

### Logische Schlüsselwörter in Containerabfragen

Logische Schlüsselwörter können verwendet werden, um die Containerbedingung zu definieren:

- `and` kombiniert zwei oder mehr Bedingungen.
- `or` kombiniert zwei oder mehr Bedingungen.
- `not` negiert die Bedingung. Es darf nur eine 'not'-Bedingung pro Containerabfrage geben und sie kann nicht mit den Schlüsselwörtern `and` oder `or` verwendet werden.

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

Die Kurzschreibweise hierfür ist {{cssxref("container")}} in der Form `container: <name> / <type>`, zum Beispiel:

```css
.post {
  container: sidebar / inline-size;
}
```

In Containerabfragen wird die Eigenschaft {{cssxref("container-name")}} verwendet, um die Menge der Container auf diejenigen mit einem übereinstimmenden Abfragecontainer-Namen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Verwendung und den Benennungseinschränkungen sind auf der Seite {{cssxref("container-name")}} beschrieben.

### Deskriptoren

Die folgenden Deskriptoren können in der Containerbedingung verwendet werden:

- `aspect-ratio`

  - : Das {{cssxref("aspect-ratio")}} des Containers berechnet als Verhältnis der Breite zur Höhe des Containers ausgedrückt als {{cssxref("ratio")}}-Wert.

- `block-size`

  - : Die {{cssxref("block-size")}} des Containers ausgedrückt als {{cssxref("length")}}-Wert.

- `height`

  - : Die Höhe des Containers ausgedrückt als {{cssxref("length")}}-Wert.

- `inline-size`

  - : Die {{cssxref("inline-size")}} des Containers ausgedrückt als {{cssxref("length")}}-Wert.

- `orientation`

  - : Die [Ausrichtung](/de/docs/Web/CSS/@media/orientation) des Containers, entweder `landscape` oder `portrait`.

- `width`
  - : Die Breite des Containers ausgedrückt als {{cssxref("length")}}-Wert.

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

Ein Containerkontext kann unter Verwendung der Eigenschaft `container-type` erstellt werden, in diesem Fall durch die Verwendung des Werts `inline-size` auf der Klasse `.post`. Sie können dann die At-Regel `@container` verwenden, um Stile auf das Element mit der Klasse `.card` in einem Container anzuwenden, der schmaler als `650px` ist.

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

### Benannte Container-Kontexte erstellen

Angenommen, folgendes HTML-Beispiel ist eine Kartenkomponente mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Erstellen Sie zuerst einen Containerkontext mithilfe der Eigenschaften `container-type` und `container-name`. Die Kurzform der Deklaration ist auf der Seite {{cssxref("container")}} beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Zielen Sie anschließend auf diesen Container, indem Sie den Namen zur Containerabfrage hinzufügen:

```css
@container summary (min-width: 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Containerabfragen

Es ist nicht möglich, mehrere Container in einer einzigen Containerabfrage anzusprechen. Es ist jedoch möglich, Containerabfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage wird wahr und die deklarierten Stile werden angewendet, wenn der Container mit dem Namen `summary` breiter als `400px` ist und einen übergeordneten Container hat, der breiter als `800px` ist:

```css
@container summary (min-width: 400px) {
  @container (min-width: 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stilabfragen

{{CSSRef}}{{SeeCompatTable}}

Containerabfragen können auch den berechneten Stil des Containerelements auswerten. Eine _Container-Stilabfrage_ ist eine `@container`-Abfrage, die eine oder mehrere `style()`-Funktionsnotations verwendet. Die boolesche Syntax und Logik zur Kombination von Stileigenschaften in einer Stilabfrage ist dieselbe wie bei [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist ein einzelnes `<style-feature>`. Ein **`<style-feature>`** ist eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Eine Stileigenschaft ohne einen Wert wird als wahr ausgewertet, wenn der berechnete Wert sich vom Anfangswert für die gegebene Eigenschaft unterscheidet.

Wenn das `<style-feature>`, das als Argument der `style()`-Funktion übergeben wird, eine Deklaration ist, wird die Stilabfrage als wahr ausgewertet, wenn der Wert der Deklaration mit dem berechneten Wert dieser Eigenschaft für den abgefragten Container übereinstimmt. Andernfalls wird sie als falsch ausgewertet.

Die folgende Containerabfrage überprüft, ob der {{cssxref("computed_value")}} der `--accent-color` des Containerelements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, wird der äquivalente hexadezimale Code `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde mit {{cssxref("@property")}} als Farbe definiert, damit der Browser berechnete Werte richtig vergleichen kann.

Stileigenschaften, die eine Kurzschreibweise abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langform-Eigenschaften übereinstimmen, und andernfalls falsch. Zum Beispiel wird `@container style(border: 2px solid red)` als wahr ausgewertet, wenn alle 12 Langform-Eigenschaften (`border-bottom-style`, etc.), die diese Kurzschreibweise bilden, wahr sind.

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Container-Stilabfrage falsch ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergröße und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS-Containment-Modul](/de/docs/Web/CSS/CSS_containment)
