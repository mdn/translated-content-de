---
title: "@container"
slug: Web/CSS/@container
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{CSSRef}}

Die **`@container`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) ist eine bedingte Gruppenregel, die Stile auf einen [Einschlusskontext](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) anwendet.
Stildeklarationen werden durch eine Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung zutrifft.
Die Bedingung wird ausgewertet, wenn sich die Containergröße oder der Wert von [`<style-feature>`](#container-stilabfragen) ändert.

Die {{cssxref("container-name")}} Eigenschaft gibt eine Liste von Abfragecontainanernamen an. Diese Namen können von `@container`-Regeln verwendet werden, um zu filtern, welche Abfragecontainer anvisiert werden. Der optionale, groß-/kleinschreibungssensitive `<container-name>` filtert die Abfragecontainer, die von der Abfrage anvisiert werden.

Sobald ein geeigneter Abfragecontainer für ein Element ausgewählt wurde, wird jede Containerfunktion im `<container-condition>` gegen diesen Abfragecontainer ausgewertet.

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

  - : Ein optionaler `<container-name>` und ein `<container-query>`. Stile, die in der `<stylesheet>` definiert sind, werden angewendet, wenn die Bedingung zutrifft.

    - `<container-name>`
      - : Optional. Der Name des Containers, auf den die Stile angewendet werden, wenn die Abfrage zu wahr ausgewertet wird, angegeben als ein {{cssxref("ident")}}.
    - `<container-query>`
      - : Eine Reihe von Funktionen, die gegen den Abfragecontainer ausgewertet werden, wenn sich die Größe des Containers ändert.

- `<stylesheet>`
  - : Eine Reihe von CSS-Deklarationen.

### Logische Schlüsselwörter in Containerabfragen

Logische Schlüsselwörter können verwendet werden, um die Containerbedingung zu definieren:

- `and` kombiniert zwei oder mehr Bedingungen.
- `or` kombiniert zwei oder mehr Bedingungen.
- `not` negiert die Bedingung. Es ist nur eine 'not'-Bedingung pro Containerabfrage erlaubt und kann nicht mit den Schlüsselwörtern `and` oder `or` verwendet werden.

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

Ein Einschlusskontext kann mit der {{cssxref("container-name")}} Eigenschaft benannt werden.

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

In Containerabfragen wird die {{cssxref("container-name")}} Eigenschaft verwendet, um die Menge der Container auf diejenigen mit einem passenden Abfragecontainanernamen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Verwendung und zu Namensbeschränkungen sind auf der {{cssxref("container-name")}} Seite beschrieben.

### Deskriptoren

Die folgenden Deskriptoren können innerhalb der Containerbedingung verwendet werden:

- `aspect-ratio`

  - : Das {{cssxref("aspect-ratio")}} des Containers, berechnet als Breite zu Höhe des Containers, ausgedrückt als {{cssxref("ratio")}} Wert.

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

### Stile basierend auf der Größe eines Containers festlegen

Betrachten Sie das folgende Beispiel eines Karten-Komponents mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Container-Kontext kann mit der `container-type` Eigenschaft erstellt werden, in diesem Fall unter Verwendung des `inline-size` Wertes in der `.post` Klasse.
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
    background-color: gray;
    font-size: 1em;
  }
}
```

{{EmbedLiveSample("Setting_styles_based_on_a_container's_size", "100%", 230)}}

### Benannte Containerkontexte erstellen

Angenommen, das folgende HTML-Beispiel ist ein Kartenkomponent mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Erstellen Sie zuerst einen Container-Kontext mit den Eigenschaften `container-type` und `container-name`.
Die Kurzschreibsyntax für diese Deklaration wird auf der {{cssxref("container")}} Seite beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Zielen Sie dann auf diesen Container, indem Sie den Namen zur Containerabfrage hinzufügen:

```css
@container summary (min-width: 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Containerabfragen

Es ist nicht möglich, mehrere Container in einer einzelnen Containerabfrage anzusprechen.
Es ist möglich, Containerabfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage wird zu wahr auswertet und wendet den deklarierten Stil an, wenn der Container mit dem Namen `summary` breiter als `400px` ist und einen Vorfahren-Container hat, der breiter als `800px` ist:

```css
@container summary (min-width: 400px) {
  @container (min-width: 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stilabfragen

{{CSSRef}}{{SeeCompatTable}}

Containerabfragen können auch den berechneten Stil des Containerelements auswerten. Eine _Container-Stilabfrage_ ist eine `@container`-Abfrage, die eine oder mehrere `style()` funktionale Notationen verwendet. Die boolesche Syntax und Logik zum Kombinieren von Stilfunktionen in eine Stilabfrage ist die gleiche wie für [CSS-Funktionsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

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

Ein Stilmerkmal ohne Wert wird zu wahr ausgewertet, wenn der berechnete Wert vom Anfangswert für die gegebene Eigenschaft abweicht.

Wenn das `<style-feature>`, das als Argument der `style()`-Funktion übergeben wird, eine Deklaration ist, wird die Stilabfrage zu wahr ausgewertet, wenn der Wert der Deklaration mit dem berechneten Wert dieser Eigenschaft für den abgefragten Container identisch ist. Andernfalls wird es zu falsch aufgelöst.

Die folgende Containerabfrage überprüft, ob der {{cssxref("computed_value")}} des `--accent-color` des Containerelements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, wird der äquivalente hexadezimale Code `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde mit {{cssxref("@property")}} als Farbe definiert, damit der Browser die berechneten Werte ordnungsgemäß vergleichen kann.

Stilmerkmale, die eine Kurzschreibweise auf Anfrage stellen, sind wahr, wenn die berechneten Werte für jede ihrer Langform-Eigenschaften übereinstimmen und andernfalls falsch. Beispielsweise wird `@container style(border: 2px solid red)` zu wahr bewertet, wenn alle 12 Langform-Eigenschaften (`border-bottom-style`, etc.), die diese Kurzform ausmachen, wahr sind.

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Container-Stilabfrage als falsch ausgewertet wird.

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
- [CSS-Einschlussmodul](/de/docs/Web/CSS/CSS_containment)
