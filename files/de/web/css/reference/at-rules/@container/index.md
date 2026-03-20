---
title: "@container"
slug: Web/CSS/Reference/At-rules/@container
l10n:
  sourceCommit: 6e46ba1a7ac7aa2268afd0ecd079f221ef6d9af4
---

Die **`@container`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ist eine bedingte Gruppenregel, die Stile auf einen [Containment-Kontext](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts) anwendet. Stil-Deklarationen werden nach einer Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung wahr ist. Die Bedingung wird ausgewertet, wenn sich die abgefragte Containergröße, [`<style-feature>`](#container-stil-abfragen) oder der Scroll-Status ändern.

Die Bedingung muss eine oder beide von {{cssxref("container-name")}} und `<container-query>` spezifizieren.

Die {{cssxref("container-name")}}-Eigenschaft gibt eine Liste von Abfragecontainernamen an, die verwendet werden, um zu filtern, welche Container von den `@container`-Regeln betroffen sind. Die Containerfunktionen in der `<container-query>` werden gegen die ausgewählten Container ausgewertet. Wenn kein `<container-name>` angegeben ist, werden die Funktionen der `<container-query>` gegen den nächstgelegenen übergeordneten Abfragecontainer ausgewertet, der den passenden [`container-type`](/de/docs/Web/CSS/Reference/Properties/container-type) besitzt. Wenn keine `<container-query>` angegeben ist, werden benannte Container ausgewählt.

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

/* With a <container-name> only (query is optional) */
@container sidebar {
  h2 {
    background: blue;
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
  - : Eine oder beide von `<container-name>` und `<container-query>`. Stile im `<stylesheet>` werden angewendet, wenn die Bedingung `true` ist.
    - `<container-name>` {{optional_inline}}
      - : Der Name des Containers, auf den die Stile angewendet werden, wenn die Abfrage zu `true` ausgewertet wird, angegeben als {{cssxref("ident")}}.
    - `<container-query>` {{optional_inline}}
      - : Eine Menge von Funktionen, die gegen den Abfragecontainer ausgewertet werden, wenn sich die Größe, [`<style-feature>`](#container-stil-abfragen) oder der Scroll-Status des Containers ändern.

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

Ein Containment-Kontext kann mit der {{cssxref("container-name")}}-Eigenschaft benannt werden.

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

In Containerabfragen wird die {{cssxref("container-name")}}-Eigenschaft verwendet, um die Menge der Container auf die mit einem passenden Abfragenamen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Verwendung und zu Namenseinschränkungen sind auf der {{cssxref("container-name")}}-Seite beschrieben.

### Deskriptoren

Die `<container-condition>`-Abfragen enthalten [Größe](#größen-container-deskriptoren) und [Scroll-Status](#scroll-state-container-deskriptoren) Container-Deskriptoren.

#### Größen-Container-Deskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größenabfragen enthalten, jeweils in einer Menge von Klammern. Eine Größenabfrage beinhaltet einen Größen-Deskriptor, einen Wert und – je nach Deskriptor – einen Vergleichsoperator. Die Abfragen messen immer die [content box](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) als Vergleich. Die Syntax zum Einschließen mehrerer Bedingungen ist dieselbe wie bei {{cssxref("@media")}}-Größen-Funktionsabfragen.

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
  - : Das {{cssxref("aspect-ratio")}} des Containers, berechnet als Breite zur Höhe des Containers, ausgedrückt als {{cssxref("ratio")}}-Wert.

- `block-size`
  - : Die {{cssxref("block-size")}} des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

- `height`
  - : Die Höhe des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

- `inline-size`
  - : Die {{cssxref("inline-size")}} des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

- `orientation`
  - : Die [Orientierung](/de/docs/Web/CSS/Reference/At-rules/@media/orientation) des Containers, entweder `landscape` oder `portrait`.

- `width`
  - : Die Breite des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

#### Scroll-State-Container-Deskriptoren

Scroll-State-Container-Deskriptoren werden innerhalb der `<container-condition>` in einer Klammerfolge angegeben, die dem `scroll-state`-Schlüsselwort folgt, zum Beispiel:

```css
@container scroll-state(scrollable: top) {
  /* … */
}
@container scroll-state(scrolled: block-end) {
  /* … */
}
@container scroll-state(stuck: inline-end) {
  /* … */
}
@container scroll-state(snapped: both) {
  /* … */
}
```

Unterstützte Schlüsselwörter für Scroll-State-Container-Deskriptoren beinhalten {{Glossary("physical_properties", "physical")}} und {{Glossary("flow_relative_values", "flow relative")}} Werte.

- `scrollable`
  - : Prüft, ob der Container in der angegebenen Richtung über benutzerinitiierte Scroll-Aktionen gescrollt werden kann, wie z.B. das Ziehen des Scrollbalkens oder die Verwendung einer Trackpad-Geste. Mit anderen Worten, gibt es in der gegebenen Richtung überlaufenden Inhalt, zu dem gescrollt werden kann? Gültige `scrollable`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder kann anderweitig in keiner Richtung gescrollt werden.
    - `top`
      - : Der Container kann in Richtung seiner oberen Kante gescrollt werden.
    - `right`
      - : Der Container kann in Richtung seiner rechten Kante gescrollt werden.
    - `bottom`
      - : Der Container kann in Richtung seiner unteren Kante gescrollt werden.
    - `left`
      - : Der Container kann in Richtung seiner linken Kante gescrollt werden.
    - `x`
      - : Der Container kann horizontal gescrollt werden, entweder in Richtung seiner linken oder rechten Kanten.
    - `y`
      - : Der Container kann vertikal gescrollt werden, entweder in Richtung seiner oberen oder unteren Kanten.
    - `block-start`
      - : Der Container kann in Richtung seiner Block-Start-Kante gescrollt werden.
    - `block-end`
      - : Der Container kann in Richtung seiner Block-End-Kante gescrollt werden.
    - `inline-start`
      - : Der Container kann in Richtung seiner Inline-Start-Kante gescrollt werden.
    - `inline-end`
      - : Der Container kann in Richtung seiner Inline-End-Kante gescrollt werden.
    - `block`
      - : Der Container kann in seiner Block-Richtung in Richtung seiner Block-Start- oder Block-End-Kanten gescrollt werden.
    - `inline`
      - : Der Container kann in seiner Inline-Richtung in Richtung seiner Inline-Start- oder Inline-End-Kanten gescrollt werden.

    Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des Scroll-Containers angewendet.

    Um zu beurteilen, ob ein Container scrollfähig ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `scrolled`
  - : Überprüft, ob der Container zuletzt in eine bestimmte Richtung gescrollt wurde. Gültige `scrolled`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder wurde anderweitig zuvor in keiner Richtung gescrollt.
    - `top`
      - : Der Container wurde zuletzt in Richtung seiner oberen Kante gescrollt.
    - `right`
      - : Der Container wurde zuletzt in Richtung seiner rechten Kante gescrollt.
    - `bottom`
      - : Der Container wurde zuletzt in Richtung seiner unteren Kante gescrollt.
    - `left`
      - : Der Container wurde zuletzt in Richtung seiner linken Kante gescrollt.
    - `x`
      - : Der Container wurde zuletzt in Richtung seiner linken oder rechten Kanten gescrollt.
    - `y`
      - : Der Container wurde zuletzt in Richtung seiner oberen oder unteren Kanten gescrollt.
    - `block-start`
      - : Der Container wurde zuletzt in Richtung seiner Block-Start-Kante gescrollt.
    - `block-end`
      - : Der Container wurde zuletzt in Richtung seiner Block-End-Kante gescrollt.
    - `inline-start`
      - : Der Container wurde zuletzt in Richtung seiner Inline-Start-Kante gescrollt.
    - `inline-end`
      - : Der Container wurde zuletzt in Richtung seiner Inline-End-Kante gescrollt.
    - `block`
      - : Der Container wurde zuletzt in Richtung seiner Block-Start- oder Block-End-Kanten gescrollt.
    - `inline`
      - : Der Container wurde zuletzt in Richtung seiner Inline-Start- oder Inline-End-Kanten gescrollt.

    Wenn der Test wahr ist, werden die Regeln, die im `@container`-Block verschachtelt sind, auf die Nachkommen des Scroll-Containers angewendet.

    Um zu beurteilen, ob ein Container kürzlich gescrollt wurde, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrolled: none) {
      /* … */
    }
    ```

- `snapped`
  - : Überprüft, ob der Container an einen [Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Container-Vorfahren entlang der angegebenen Achse verhakt wird. Gültige `snapped`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein Scroll-{{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} für seinen übergeordneten Scroll-Container. Bei der Implementierung einer `snapped: none`-Abfrage werden Container, die _sind_ Snap-Ziele für den Scroll-Container, _nicht_ die `@container`-Stile erhalten, während Nicht-Snap-Ziele _die_ Stile erhalten.
    - `x`
      - : Der Container ist ein horizontales Scroll-Snap-Ziel für seinen übergeordneten Scroll-Container, d.h. er hängt horizontal an seinem Vorfahren.
    - `y`
      - : Der Container ist ein vertikales Scroll-Snap-Ziel für seinen übergeordneten Scroll-Container, d.h. er hängt vertikal an seinem Vorfahren.
    - `block`
      - : Der Container ist ein Block-Achsen-Scroll-Snap-Ziel für seinen übergeordneten Scroll-Container, d.h. er hängt in der Block-Richtung an seinem Vorfahren.
    - `inline`
      - : Der Container ist ein Inline-Achsen-Scroll-Snap-Ziel für seinen übergeordneten Scroll-Container, d.h. er hängt in der Inline-Richtung an seinem Vorfahren.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch ein vertikales Scroll-Snap-Ziel für seinen übergeordneten Scroll-Container und hängt in beiden Richtungen an seinem Vorfahren. Der Container wird nicht entsprechen, wenn er nur horizontal _oder_ vertikal an seinen Vorfahren hängt. Es muss beides sein.

    Um einen Container mit einer nicht-`none` `snapped`-Scroll-State-Abfrage zu bewerten, muss es sich um einen Container mit einem übergeordneten Scroll-Container handeln, der einen {{cssxref("scroll-snap-type")}}-Wert ungleich `none` hat. Eine `snapped: none`-Abfrage wird passen, auch wenn es keinen übergeordneten Scroll-Container gibt.

    Auswertungen erfolgen, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignisse im Scroll-Snap-Container ausgelöst werden. Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des Containers angewendet.

    Um zu bewerten, ob ein Container ein Snap-Ziel ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`
  - : Überprüft, ob ein Container mit einem {{cssxref("position")}}-Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an einer Kante seines Scrolling-Container-Vorfahren festgeklebt ist. Gültige `stuck`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container klebt nicht an einer seiner Kanten. Beachten Sie, dass `none`-Abfragen sogar dann passen, wenn der Container kein `position: sticky` hat.
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
      - : Der Container klebt an der Block-End-Kante seines Containers.
    - `inline-start`
      - : Der Container klebt an der Inline-Start-Kante seines Containers.
    - `inline-end`
      - : Der Container klebt an der Inline-End-Kante seines Containers.

    Um einen Container mit einer nicht-`none` `stuck`-Scroll-State-Abfrage zu bewerten, muss er `position: sticky` darauf gesetzt haben und in einem Scroll-Container sein. Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des `position: sticky`-Containers angewendet.

    Es ist möglich, dass zwei Werte von gegenüberliegenden Achsen gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Allerdings werden zwei Werte von gegenüberliegenden Kanten niemals gleichzeitig passen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) {
      /* … */
    }
    ```

    Um zu bewerten, ob ein Container klebt, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(stuck: none) {
      /* … */
    }
    ```

## Formale Syntax

{{csssyntax}}

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

Ein Container-Kontext kann mit der `container-type`-Eigenschaft erstellt werden, in diesem Fall mit dem Wert `inline-size` auf der `.post`-Klasse. Sie können dann die `@container`-At-Regel verwenden, um Stile auf das Element mit der `.card`-Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

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

Angenommen, folgendes HTML-Beispiel ist eine Komponentenkarte mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Erstellen Sie zuerst einen Container-Kontext unter Verwendung der Eigenschaften `container-type` und `container-name`. Die Kurzschreibweise für diese Deklaration wird auf der {{cssxref("container")}}-Seite beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Zielen Sie anschließend auf diesen Container, indem Sie den Namen zur Container-Abfrage hinzufügen:

```css
@container summary (width >= 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Container-Abfragen

Es ist nicht möglich, in einer einzigen Container-Abfrage auf mehrere Container zu zielen. Es ist jedoch möglich, Container-Abfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage wird zu wahr ausgewertet und der deklarierte Stil angewendet, wenn der Container namens `summary` breiter als `400px` ist und einen übergeordneten Container hat, der breiter als `800px` ist:

```css
@container summary (width > 400px) {
  @container (width > 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stil-Abfragen

Container-Abfragen können auch den berechneten Stil des Containerelements auswerten. Eine _Container-Stil-Abfrage_ ist eine `@container`-Abfrage, die eine oder mehrere `style()`-Funktionalnotationen verwendet. Die boolesche Syntax und Logik zur Kombination von Stil-Funktionen in eine Stil-Abfrage ist dieselbe wie für [CSS-Funktionsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist ein einzelnes `<style-feature>`. Ein **`<style-feature>`** ist eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Eine Stil-Funktion ohne Wert wird als wahr ausgewertet, wenn der berechnete Wert anders ist als der Anfangswert für die gegebene Eigenschaft.

Wenn das `<style-feature>` als Argument der `style()`-Funktion eine Deklaration ist, wird die Stil-Abfrage als wahr ausgewertet, wenn der Wert der Deklaration derselbe ist wie der berechnete Wert dieser Eigenschaft für den abgefragten Container. Andernfalls wird sie als falsch ausgewertet.

Die folgende Container-Abfrage überprüft, ob der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der `--accent-color` des Containerelements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, wird der äquivalente Hexadezimalcode `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, damit der Browser die berechneten Werte ordnungsgemäß vergleichen kann.

Stil-Funktionen, die eine Kurzschreibweise abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langhand-Eigenschaften übereinstimmen, und falsch, andernfalls. Zum Beispiel wird `@container style(border: 2px solid red)` wahr, wenn alle 12 Langhand-Eigenschaften (`border-bottom-style`, etc.), die diese Kurzschreibweise bilden, wahr sind.

Beachten Sie, dass [`!important`](/de/docs/Web/CSS/Reference/Values/important) in Stil-Abfragen erlaubt ist, jedoch ignoriert wird.

```css
/* !important is valid but has no effect */
@container style(--themeColor: purple !important) {
  /* <stylesheet> */
}
```

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Container-Stil-Abfrage als falsch ausgewertet wird.

### Scroll-State-Abfragen

Siehe [Verwendung von Scroll-State-Container-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) für vollständige Durchgänge von Scroll-State-Abfragebeispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Container-Größen- und Stil-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Scroll-State-Container-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS-Containment-Modul](/de/docs/Web/CSS/Guides/Containment)
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
