---
title: "@container"
slug: Web/CSS/@container
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Die **`@container`**-[CSS](/de/docs/Web/CSS)-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ist eine bedingte Gruppenregel, die Stile auf einen [Containment-Kontext](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) anwendet. Stil-Deklarationen werden durch eine Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung erfüllt ist. Die Bedingung wird ausgewertet, wenn sich die Größe des Containers oder der Wert von [`<style-feature>`](#container-stil-abfragen) ändert.

Die Eigenschaft {{cssxref("container-name")}} gibt eine Liste von Namen für Abfrage-Container an. Diese Namen können von `@container`-Regeln verwendet werden, um zu filtern, welche Abfrage-Container angesprochen werden. Der optionale, groß-/kleinschreibungssensitive `<container-name>` filtert die Abfrage-Container, die von der Abfrage angesprochen werden.

Sobald ein qualifizierter Abfrage-Container für ein Element ausgewählt wurde, wird jede Container-Funktion in der `<container-condition>` gegen diesen Abfrage-Container ausgewertet.

## Syntax

Die `@container`-At-Regel hat die folgende Syntax:

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
      - : Optional. Der Name des Containers, auf den die Stile angewendet werden, wenn die Abfrage zu wahr ausgewertet wird. Angegeben als ein {{cssxref("ident")}}.
    - `<container-query>`
      - : Eine Reihe von Funktionen, die gegen den Abfrage-Container ausgewertet werden, wenn sich die Größe des Containers ändert.

- `<stylesheet>`
  - : Eine Sammlung von CSS-Deklarationen.

### Logische Schlüsselwörter in Container-Abfragen

Logische Schlüsselwörter können verwendet werden, um die Container-Bedingung zu definieren:

- `and` kombiniert zwei oder mehr Bedingungen.
- `or` kombiniert zwei oder mehr Bedingungen.
- `not` negiert die Bedingung. Es ist nur eine `not`-Bedingung pro Container-Abfrage erlaubt und sie kann nicht mit den Schlüsselwörtern `and` oder `or` kombiniert werden.

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

Ein Containment-Kontext kann mithilfe der Eigenschaft {{cssxref("container-name")}} benannt werden.

```css
.post {
  container-name: sidebar;
  container-type: inline-size;
}
```

Die Kurzschreibweise hierfür ist die Verwendung von {{cssxref("container")}} in der Form `container: <name> / <type>`, z. B.:

```css
.post {
  container: sidebar / inline-size;
}
```

In Container-Abfragen wird die Eigenschaft {{cssxref("container-name")}} verwendet, um die Menge der Container auf diejenigen zu filtern, die einen passenden Namen für den Abfrage-Container besitzen:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Verwendung und zu Benennungseinschränkungen sind auf der Seite {{cssxref("container-name")}} beschrieben.

### Deskriptoren

Die folgenden Deskriptoren können innerhalb der Container-Bedingung verwendet werden:

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

## Formale Syntax

{{csssyntax}}

## Beispiele

### Stile basierend auf der Größe eines Containers festlegen

Betrachten Sie das folgende Beispiel einer Karten-Komponente mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Container-Kontext kann mit der `container-type`-Eigenschaft erstellt werden, in diesem Fall mit dem Wert `inline-size` für die Klasse `.post`. Sie können dann die `@container`-At-Regel verwenden, um Stile auf das Element mit der Klasse `.card` in einem Container anzuwenden, der schmaler als `650px` ist.

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

### Benannte Containment-Kontexte erstellen

Angenommen, Sie haben das folgende HTML-Beispiel, das eine Karten-Komponente mit einem Titel und etwas Text darstellt:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Zuerst erstellen Sie einen Container-Kontext mit den Eigenschaften `container-type` und `container-name`. Die Kurzschreibweise für diese Deklaration ist auf der {{cssxref("container")}}-Seite beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Danach fügen Sie den Namen der Container-Abfrage hinzu, um diesen Container anzusprechen:

```css
@container summary (min-width: 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Container-Abfragen

Es ist nicht möglich, mehrere Container in einer einzelnen Container-Abfrage anzusprechen. Es ist jedoch möglich, Container-Abfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage wird zu wahr ausgewertet und wendet den deklarierten Stil an, wenn der Container mit dem Namen `summary` breiter als `400px` ist und einen übergeordneten Container besitzt, der breiter als `800px` ist:

```css
@container summary (min-width: 400px) {
  @container (min-width: 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stil-Abfragen

Container-Abfragen können auch den berechneten Stil des Container-Elements auswerten. Eine _Container-Stil-Abfrage_ ist eine `@container`-Abfrage, die eine oder mehrere `style()`-Funktionalnotationen verwendet. Die boolesche Syntax und die Logik beim Kombinieren von Stilfunktionen in einer Stil-Abfrage sind dieselben wie bei [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

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

Eine Stil-Funktion ohne Wert wird zu wahr ausgewertet, wenn der berechnete Wert vom Initialwert der gegebenen Eigenschaft abweicht.

Wenn das `<style-feature>` als Argument der `style()`-Funktion eine Deklaration ist, wird die Stil-Abfrage zu wahr ausgewertet, wenn der Wert der Deklaration dem berechneten Wert dieser Eigenschaft für den abgefragten Container entspricht. Andernfalls ergibt sie falsch.

Die folgende Container-Abfrage überprüft, ob der {{cssxref("computed_value")}} der Eigenschaft `--accent-color` des Container-Elements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, wird der entsprechende hexadezimale Code `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, sodass der Browser die berechneten Werte korrekt vergleichen kann.

Stil-Funktionen, die eine Kurzschreibweise abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langform-Eigenschaften übereinstimmen, ansonsten falsch. Zum Beispiel wird `@container style(border: 2px solid red)` zu wahr, wenn alle 12 Langform-Eigenschaften (`border-bottom-style` usw.), die diese Kurzform ausmachen, wahr sind.

Die globalen Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Container-Stil-Abfrage zu falsch wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden von Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwenden von Container-Größen- und Stil-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS Containment Modul](/de/docs/Web/CSS/CSS_containment)
