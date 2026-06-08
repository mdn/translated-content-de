---
title: "`@container` CSS at-rule"
short-title: "@container"
slug: Web/CSS/Reference/At-rules/@container
l10n:
  sourceCommit: 2ce88199869b63f8da3bbeafd899400f7579cce9
---

Die **`@container`** [CSS](/de/docs/Web/CSS) [Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ist eine bedingte Gruppenregel, die Stile auf einen [Containment-Kontext](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts) anwendet. Stil-Deklarationen werden durch eine Bedingung gefiltert und auf die Elemente innerhalb des Containers angewendet, wenn die Bedingung wahr ist. Die Bedingung wird ausgewertet, wenn sich die abgefragte Containergröße, [`<style-feature>`](#container-style-abfragen) oder der Scroll-Zustand ändern.

Die Bedingung muss eine {{cssxref("container-name")}} und `<container-query>` oder beides spezifizieren.

Die Eigenschaft {{cssxref("container-name")}} legt eine Liste von Abfragecontainer-Namen fest, die verwendet werden, um zu filtern, welche Container von den `@container`-Regeln angesprochen werden. Wenn nur ein `container-name`-Wert enthalten ist (eine [name-only-Abfrage](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries)), werden die enthaltenen Regeln auf alle Container mit einem oder mehreren dieser `container-name`-Werte angewendet.

Die Container-Merkmale im `<container-query>` werden gegen die ausgewählten Container ausgewertet. Wenn kein `<container-name>` angegeben ist, werden die `<container-query>`-Merkmale gegen den nächsten übergeordneten Abfragecontainer ausgewertet, der den passenden [`container-type`](/de/docs/Web/CSS/Reference/Properties/container-type) hat.

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

/* With an anchored query */
@container anchored(fallback: bottom) {
  .infobox::before {
    content: "▲";
    bottom: 100%;
    top: auto;
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

/* Boolean style() queries */
@container style(--theme: one) or style(--theme: two) {
  /* matched container styles */
}
@container style((--theme: one) or (--theme: two)) {
  /* matched container styles */
}
@container style(--theme: one) and style(--theme: two) {
  /* matched container styles */
}
@container style((--theme: one) and (--theme: two)) {
  /* matched container styles */
}
@container not style(--theme: one) {
  /* matched container styles */
}

/* range style() queries */
@container style(--number > 4) {
  /* matched container styles */
}
```

### Parameter

- `<container-condition>`
  - : Eines oder beide von `<container-name>` und `<container-query>`. Stile, die in der `<stylesheet>` definiert sind, werden angewendet, wenn die Bedingung `true` ist.
    - `<container-name>` {{optional_inline}}
      - : Der Name des abzufragenden Containers; er wird als {{cssxref("ident")}} angegeben. Wenn die Abfrage zu `true` ausgewertet wird, werden die deklarierten Stile auf die Nachkommenelemente des Containers angewendet.
    - `<container-query>` {{optional_inline}}
      - : Eine Reihe von Merkmalen, die gegen den Abfragecontainer ausgewertet werden, wenn die Größe, [`<style-feature>`](#container-style-abfragen), der Scroll-Zustand oder die angewendete Positions-try-Fallback des Containers sich ändert.

### Logische Schlüsselwörter in Container-Abfragen

Logische Schlüsselwörter können verwendet werden, um die Container-Bedingung zu definieren:

- `and` kombiniert zwei oder mehr Bedingungen.
- `or` kombiniert zwei oder mehr Bedingungen.
- `not` negiert die Bedingung. Nur eine `not`-Bedingung ist pro Container-Abfrage erlaubt und kann nicht mit den `and`- oder `or`-Schlüsselwörtern verwendet werden.

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

Die Kurzschrift-Syntax hierfür verwendet {{cssxref("container")}} in der Form `container: <name> / <type>`, zum Beispiel:

```css
.post {
  container: sidebar / inline-size;
}
```

In Container-Abfragen wird die Eigenschaft {{cssxref("container-name")}} verwendet, um die Menge der Container auf diejenigen mit einem passenden Abfragecontainer-Namen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Nutzung und zu Namensbeschränkungen finden Sie auf der Seite für {{cssxref("container-name")}}.

### Deskriptoren

Die `<container-condition>`-Abfragen umfassen [Größe](#größen-container-deskriptoren), [Scroll-Zustand](#scroll-zustands-container-deskriptoren) und [verankerte](#verankerte_container-deskriptoren) Container-Deskriptoren.

#### Größen-Container-Deskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größenabfragen enthalten, jeweils innerhalb eines Klammerpaars. Eine Größenabfrage umfasst einen Größen-Deskriptor, einen Wert und – je nach Deskriptor – einen Vergleichsoperator. Die Abfragen messen immer die [inhaltliche Box](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) als Vergleich. Die Syntax für mehrere Bedingungen ist die gleiche wie bei {{cssxref("@media")}}-Größen-Merkmal-Abfragen.

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
  - : Das {{cssxref("aspect-ratio")}} des Containers, berechnet als Breite-zu-Höhe-Verhältnis des Containers als {{cssxref("ratio")}}-Wert.

- `block-size`
  - : Die {{cssxref("block-size")}} des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

- `height`
  - : Die Höhe des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

- `inline-size`
  - : Die {{cssxref("inline-size")}} des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

- `orientation`
  - : Die [Ausrichtung](/de/docs/Web/CSS/Reference/At-rules/@media/orientation) des Containers, entweder `landscape` oder `portrait`.

- `width`
  - : Die Breite des Containers, ausgedrückt als {{cssxref("length")}}-Wert.

#### Scroll-Zustands-Container-Deskriptoren

Scroll-Zustands-Container-Deskriptoren werden innerhalb der `<container-condition>` als Argument für die `scroll-state()`-Funktion angegeben, zum Beispiel:

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

Unterstützte Schlüsselwörter für Scroll-Zustands-Container-Deskriptoren umfassen {{Glossary("physical_properties", "physische")}} und {{Glossary("flow_relative_values", "flussrelative")}} Werte.

- `scrollable`
  - : Fragt ab, ob der Container in die angegebene Richtung durch benutzerinitiierte Bildläufe, wie z.B. durch Ziehen des Scrollbalkens oder eine Trackpad-Geste, gescrollt werden kann. Mit anderen Worten: Gibt es in der angegebenen Richtung überlaufenden Inhalt, der gescrollt werden kann? Gültige `scrollable`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder kann anderweitig in keine Richtung gescrollt werden.
    - `top`
      - : Der Container kann zu seiner oberen Kante hin gescrollt werden.
    - `right`
      - : Der Container kann zu seiner rechten Kante hin gescrollt werden.
    - `bottom`
      - : Der Container kann zu seiner unteren Kante hin gescrollt werden.
    - `left`
      - : Der Container kann zu seiner linken Kante hin gescrollt werden.
    - `x`
      - : Der Container kann horizontal zu einer oder beiden seiner linken oder rechten Kanten hin gescrollt werden.
    - `y`
      - : Der Container kann vertikal zu einer oder beiden seiner oberen oder unteren Kanten hin gescrollt werden.
    - `block-start`
      - : Der Container kann zu seiner Block-Start-Kante hin gescrollt werden.
    - `block-end`
      - : Der Container kann zu seiner Block-End-Kante hin gescrollt werden.
    - `inline-start`
      - : Der Container kann zu seiner Inline-Start-Kante hin gescrollt werden.
    - `inline-end`
      - : Der Container kann zu seiner Inline-End-Kante hin gescrollt werden.
    - `block`
      - : Der Container kann in seiner Block-Richtung zu einer oder beiden seiner Block-Start- oder Block-End-Kanten hin gescrollt werden.
    - `inline`
      - : Der Container kann in seiner Inline-Richtung zu einer oder beiden seiner Inline-Start- und Inline-End-Kanten hin gescrollt werden.

    Wenn der Test bestanden wird, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des Scroll-Containers angewendet.

    Um zu evaluieren, ob ein Container scrollbar ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `scrolled`
  - : Fragt ab, ob der Container zuletzt in eine bestimmte Richtung gescrollt wurde. Gültige `scrolled`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder wurde sonst in keine Richtung gescrollt.
    - `top`
      - : Der Container wurde zuletzt zu seiner oberen Kante hin gescrollt.
    - `right`
      - : Der Container wurde zuletzt zu seiner rechten Kante hin gescrollt.
    - `bottom`
      - : Der Container wurde zuletzt zu seiner unteren Kante hin gescrollt.
    - `left`
      - : Der Container wurde zuletzt zu seiner linken Kante hin gescrollt.
    - `x`
      - : Der Container wurde zuletzt zu einer seiner linken oder rechten Kanten hin gescrollt.
    - `y`
      - : Der Container wurde zuletzt zu einer seiner oberen oder unteren Kanten hin gescrollt.
    - `block-start`
      - : Der Container wurde zuletzt zu seiner Block-Start-Kante hin gescrollt.
    - `block-end`
      - : Der Container wurde zuletzt zu seiner Block-End-Kante hin gescrollt.
    - `inline-start`
      - : Der Container wurde zuletzt zu seiner Inline-Start-Kante hin gescrollt.
    - `inline-end`
      - : Der Container wurde zuletzt zu seiner Inline-End-Kante hin gescrollt.
    - `block`
      - : Der Container wurde zuletzt zu einer seiner Block-Start- oder Block-End-Kanten hin gescrollt.
    - `inline`
      - : Der Container wurde zuletzt zu einer seiner Inline-Start- oder Inline-End-Kanten hin gescrollt.

    Wenn der Test wahr ergibt, werden die Regeln im `@container`-Block auf die Nachkommen des Scroll-Containers angewendet.

    Um zu evaluieren, ob ein Container kürzlich gescrollt wurde, ohne sich um die Richtung zu sorgen, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrolled: none) {
      /* … */
    }
    ```

- `snapped`
  - : Fragt ab, ob der Container an einen [Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Container-Vorfahren entlang der gegebenen Achse eingerastet wird. Gültige `snapped`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein Scroll-{{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} für seinen Vorfahren-Scroll-Container. Bei einer `snapped: none`-Abfrage werden Container, die _Snap-Ziele_ für den Scroll-Container sind, _nicht_ die `@container`-Stile anwenden, während bei Nicht-Snap-Zielen _ja_.
    - `x`
      - : Der Container ist ein horizontaler Scroll Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er rastet horizontal zu seinem Vorfahren ein.
    - `y`
      - : Der Container ist ein vertikaler Scroll Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er rastet vertikal zu seinem Vorfahren ein.
    - `block`
      - : Der Container ist ein Block-Achsen-Scroll Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er rastet in der Block-Richtung zu seinem Vorfahren ein.
    - `inline`
      - : Der Container ist ein Inline-Achsen-Scroll Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er rastet in der Inline-Richtung zu seinem Vorfahren ein.
    - `both`
      - : Der Container ist sowohl ein horizontaler als auch vertikaler Scroll Snap-Ziel für seinen Vorfahren-Scroll-Container und rastet zu seinem Vorfahren in beiden Richtungen ein. Der Container wird nicht übereinstimmen, wenn er nur zu seinem Vorfahren entlang der horizontalen _oder_ vertikalen Achse einrastet. Es muss beides sein.

    Um einen Container mit einer nicht-`none` `snapped`-Scroll-Zustands-Abfrage zu evaluieren, muss es ein Container mit einem Scroll-Container-Vorfahren sein, der einen {{cssxref("scroll-snap-type")}}-Wert ungleich `none` hat. Eine `snapped: none`-Abfrage wird auch dann übereinstimmen, wenn kein Scroll-Container-Vorfahre vorhanden ist.

    Evaluierungen erfolgen, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Events auf dem Scroll Snap-Container ausgelöst werden. Wenn der Test bestehen, werden die Regeln im `@container`-Block auf die Nachkommen des Containers angewendet.

    Um zu evaluieren, ob ein Container ein Snap-Ziel ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`
  - : Fragt ab, ob ein Container mit einem {{cssxref("position")}}-Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an eine Kante seiner scrollenden Container-Vorfahren klebt. Gültige `stuck`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container klebt an keiner Kante seines Containers. Beachten Sie, dass `none`-Abfragen auch dann übereinstimmen, wenn der Container nicht `position: sticky` aufweist.
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

    Um einen Container mit einer nicht-`none` `stuck`-Scroll-Zustands-Abfrage zu evaluieren, muss er `position: sticky` aufweisen und in einem Scroll-Container angeordnet sein. Wenn der Test bestehen, werden die Regeln im `@container`-Block auf die Nachkommen des `position: sticky`-Containers angewendet.

    Es ist möglich, dass zwei Werte von benachbarten Achsen gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Allerdings werden zwei Werte von gegenüberliegenden Kanten niemals gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) {
      /* … */
    }
    ```

    Um zu evaluieren, ob ein Container feststeckt, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(stuck: none) {
      /* … */
    }
    ```

#### Verankerte Container-Deskriptoren

Verankerte Container-Deskriptoren werden innerhalb der `<container-condition>` als Argument für die `anchored()`-Funktion angegeben, zum Beispiel:

```css
@container anchored(fallback: top) {
  /* … */
}
@container anchored(fallback: flip-block flip-inline) {
  /* … */
}
@container anchored(fallback: --custom-fallback) {
  /* … */
}
```

- `fallback`
  - : Fragt ab, ob ein spezifischer Fallback beim Position-Try aktuell auf einem containern-positionierten Container aktiv ist, wie durch die Eigenschaft {{cssxref("position-try-fallbacks")}} spezifiziert. Gültige `fallback`-Werte umfassen jeden Komponentwert, der für die Aufnahme in eine `position-try-fallbacks`-Eigenschaft gültig ist.

    Wenn der im Test genannte `fallback`-Wert derzeit auf dem containern-positionierten Container aktiv ist, besteht der Test, und die Regeln im `@container`-Block werden auf Nachkommen des containern-positionierten Containers angewendet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Stilen basierend auf der Größe eines Containers

Betrachten Sie das folgende Beispiel eines Kartenkomponenten mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Container-Kontext kann mit der Eigenschaft `container-type` erstellt werden, in diesem Fall mit dem Wert `inline-size` auf der `.post`-Klasse. Dann können Sie die `@container`-Regel verwenden, um Stile auf das Element mit der `.card`-Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

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

Angesichts des folgenden HTML-Beispiels, das eine Kartenkomponente mit einem Titel und etwas Text ist:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Zuerst erstellen Sie einen Container-Kontext mit den Eigenschaften `container-type` und `container-name`. Die Kurzschrift-Syntax für diese Deklaration wird auf der Seite für {{cssxref("container")}} beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Dann zielen Sie auf diesen Container, indem Sie den Namen der Container-Abfrage hinzufügen:

```css
@container summary (width >= 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Container-Abfragen

Es ist nicht möglich, in einer einzigen Container-Abfrage mehrere Container anzuzielen. Es ist möglich, Container-Abfragen zu verschachteln, was den gleichen Effekt hat.

Die folgende Abfrage ergibt wahr und wendet den deklarierten Stil an, wenn der Container namens `summary` breiter als `400px` ist und einen übergeordneten Container hat, der breiter als `800px` ist:

```css
@container summary (width > 400px) {
  @container (width > 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Style-Abfragen

Container-Abfragen können auch den berechneten Stil des Container-Elements auswerten. Eine _Container-Style-Abfrage_ ist eine `@container`-Abfrage, die eine oder mehrere `style()`-funktionale Notationen verwendet. Die boolesche Syntax und die Logik des Kombinierens von Stilmerkmalen zu einer Style-Abfrage ist die gleiche wie bei [CSS-Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()` ist ein einzelnes `<style-feature>`. Ein **`<style-feature>`** kann eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations) (die **einfache** Form), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values) allein (die **boolesche** Form), oder ein [Bereichsvergleich](#bereichssyntax) (die **Bereichs**-Form) sein.

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Ein Stilmerkmal ohne Wert ergibt wahr, wenn der berechnete Wert sich vom Anfangswert für die gegebene Eigenschaft unterscheidet.

Wenn das `<style-feature>`, das als Argument der `style()`-Funktion übergeben wird, eine Deklaration ist, ergibt die Style-Abfrage wahr, wenn der Wert der Deklaration mit dem berechneten Wert dieser Eigenschaft für den abgefragten Container übereinstimmt. Andernfalls ergibt sie falsch.

Die folgende Container-Abfrage prüft, ob der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der `--accent-color` des Container-Elements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, wird der entsprechende hexadezimale Code `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, sodass der Browser die berechneten Werte richtig vergleichen kann.

Style-Merkmale, die eine Kurzschrift-Eigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langschrift-Eigenschaften übereinstimmen, andernfalls falsch. Beispielsweise ergibt `@container style(border: 2px solid red)` wahr, wenn alle 12 Langschrift-Eigenschaften (`border-bottom-style`, etc.), die diese Kurzschrift ausmachen, wahr sind.

Beachten Sie, dass [`!important`](/de/docs/Web/CSS/Reference/Values/important) in Style-Abfragen erlaubt ist, aber ignoriert wird.

```css
/* !important is valid but has no effect */
@container style(--themeColor: purple !important) {
  /* <stylesheet> */
}
```

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Container-Style-Abfrage falsch ist.

#### Bereichssyntax

Neben der einfachen Form `<style-feature-name>: <value>` kann ein `<style-feature>` auch als **Bereichs**-Vergleich mit `=`, `<`, `<=`, `>`, oder `>=` geschrieben werden. Die Bereichssyntax ermöglicht **numerische** Vergleiche, die die einfache Form nicht kann, wie `style(--columns >= 3)` oder `style(--gap = 1rem)`. Sie vergleicht die gelösten Werte beider Seiten numerisch.

Um einen Bereich zu evaluieren, führt der Browser folgende Schritte durch:

1. Löst jede Seite auf (benutzerdefinierte Eigenschaftsnamen werden nachgeschlagen, als ob sie mit [`var()`](/de/docs/Web/CSS/Reference/Values/var) verwendet werden).
2. Parst jede Seite als {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, oder {{cssxref("&lt;resolution&gt;")}}. Wenn keine Seite als einer dieser Typen geparst werden kann oder die beiden Seiten nicht den gleichen Typ haben, ist die Abfrage falsch.
3. Berechnet jede Seite (bewertet alle `calc()`-Ausdrücke aus) und führt den numerischen Vergleich durch.

Dies bedeutet, dass Bereichssyntax nicht verwendet werden kann, um schlüsselwortähnliche Werte zu vergleichen: `style(--theme = dark)` ist immer falsch, weil `dark` kein numerischer Typ ist. Verwenden Sie für diese die einfache Syntax, zum Beispiel `style(--theme: dark)`.

Beide Seiten eines Bereichs können ein benutzerdefinierter Eigenschaftsname, ein `var()`-Verweis, ein literaler Wert oder ein `calc()`-Ausdruck sein, in beliebiger Reihenfolge:

```css
@container style(3 = --n) {
  /* … */
}
@container style(var(--n) = 3) {
  /* … */
}
@container style(calc(6/2) = var(--n)) {
  /* … */
}
```

Ein Bereich kann auch eine Drei-Werte-Form annehmen, bei der beide Vergleichsoperatoren in die gleiche Richtung zeigen, um zu testen, ob ein Wert innerhalb eines Intervalls liegt:

```css
@container style(0 < --n < 10) {
  /* true when --n is greater than 0 and less than 10 */
}
@container style(100px > --width > 50px) {
  /* true when --width is less than 100px and greater than 50px */
}
```

Das heißt `style(0 < --n < 10)` ist gleichwertig zu `style(0 < --n) and style(--n < 10)`. Der mittlere Wert wird gegen beide Grenzen getestet, anstatt von links nach rechts verkettet zu werden.

> [!NOTE]
> Einfache und Bereichssyntax verhalten sich unterschiedlich, auch wenn sie ähnlich aussehen. Angesichts `--n: calc(6/2)` ist die Abfrage `style(--n: 3)` **falsch**, weil die einfache Form den berechneten Wert der Eigenschaft (`calc(6/2)`) direkt mit `3` vergleicht. Die äquivalente Bereichsabfrage `style(--n = 3)` ist **wahr**, weil die Bereichsform beide Seiten numerisch berechnet, bevor der Vergleich durchgeführt wird. Details zu diesem Thema können Sie im Leitfaden [Einfache versus Bereichssyntax in Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#plain_versus_range_syntax_in_style_queries) nachlesen.

### Scroll-Zustands-Abfragen

Siehe [Using container scroll-state queries](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) für Beispiele zu Scroll-Zustands-Abfragen.

### Verankerte Abfragen

Siehe [Using anchored container queries](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries) für Beispiele zu verankerten Abfragen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Containergröße- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustands-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verwendung verankerter Container-Abfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) API
- [CSS-Containment-Modul](/de/docs/Web/CSS/Guides/Containment)
- [CSS @-Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
