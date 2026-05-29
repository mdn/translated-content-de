---
title: "`@container` CSS at-rule"
short-title: "@container"
slug: Web/CSS/Reference/At-rules/@container
l10n:
  sourceCommit: 3e5fd6765f891b6fedae20ce1e31e2fdefe55b3c
---

Die **`@container`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ist eine bedingte Gruppenregel, die Stile auf einen [Containment-Kontext](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts) anwendet. Stil-Deklarationen werden durch eine Bedingung gefiltert und auf die Elemente innerhalb des Containers angewendet, wenn die Bedingung zutrifft. Die Bedingung wird ausgewertet, wenn sich die Größe des abgefragten Containers, [`<style-feature>`](#container-stil-abfragen) oder der Scroll-Status ändert.

Die Bedingung muss eine oder beide von {{cssxref("container-name")}} und `<container-query>` spezifizieren.

Die {{cssxref("container-name")}}-Eigenschaft gibt eine Liste von Abfrage-Container-Namen an, die verwendet werden, um festzulegen, welche Container von den `@container`-Regeln anvisiert werden. Die Container-Features im `<container-query>` werden gegen die ausgewählten Container ausgewertet. Wenn kein `<container-name>` angegeben ist, werden die `<container-query>`-Features gegen den nächstgelegenen Vorfahren-Abfrage-Container ausgewertet, der den passenden [`container-type`](/de/docs/Web/CSS/Reference/Properties/container-type) hat. Wenn keine `<container-query>` angegeben ist, werden benannte Container ausgewählt.

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
  - : Eine oder beide von `<container-name>` und `<container-query>`. Stile, die im `<stylesheet>` definiert sind, werden angewendet, wenn die Bedingung `true` ist.
    - `<container-name>` {{optional_inline}}
      - : Der Name des abzufragenden Containers; es wird als ein {{cssxref("ident")}} angegeben. Wenn die Abfrage als `true` ausgewertet wird, werden die deklarierten Stile auf die untergeordneten Elemente des Containers angewendet.
    - `<container-query>` {{optional_inline}}
      - : Eine Gruppe von Features, die gegen den Abfrage-Container ausgewertet werden, wenn sich die Größe, [`<style-feature>`](#container-stil-abfragen), der Scroll-Status oder der angewendete Position-Try-Fallback des Containers ändern.

### Logische Schlüsselwörter in Container-Abfragen

Logische Schlüsselwörter können verwendet werden, um die Container-Bedingung zu definieren:

- `and` kombiniert zwei oder mehr Bedingungen.
- `or` kombiniert zwei oder mehr Bedingungen.
- `not` negiert die Bedingung. Nur eine `not`-Bedingung ist pro Container-Abfrage erlaubt und sie kann nicht mit den Schlüsselwörtern `and` oder `or` verwendet werden.

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

In Container-Abfragen wird die {{cssxref("container-name")}}-Eigenschaft verwendet, um die Menge der Container auf diejenigen mit einem passenden Abfrage-Container-Namen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Verwendung und zu Benennungseinschränkungen sind auf der Seite {{cssxref("container-name")}} beschrieben.

### Deskriptoren

Die `<container-condition>`-Abfragen umfassen [Größe](#größend-container-deskriptoren), [Scroll-Status](#scroll-status-container-deskriptoren) und [verankert](#verankerte_container-deskriptoren) Container-Deskriptoren.

#### Größend-Container-Deskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größenabfragen enthalten, jede innerhalb eines Satzes von Klammern. Eine Größenabfrage umfasst einen Größen-Deskriptor, einen Wert und - abhängig vom Deskriptor - einen Vergleichsoperator. Die Abfragen messen immer die [Inhaltsbox](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) als den Vergleich. Die Syntax zum Einschließen mehrerer Bedingungen ist die gleiche wie die Features-Abfragen von {{cssxref("@media")}}.

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
  - : Das {{cssxref("aspect-ratio")}} des Containers, berechnet als das Verhältnis der Breite zur Höhe des Containers als {{cssxref("ratio")}}-Wert.

- `block-size`
  - : Die {{cssxref("block-size")}} des Containers als {{cssxref("length")}}-Wert ausgedrückt.

- `height`
  - : Die Höhe des Containers als {{cssxref("length")}}-Wert ausgedrückt.

- `inline-size`
  - : Die {{cssxref("inline-size")}} des Containers als {{cssxref("length")}}-Wert ausgedrückt.

- `orientation`
  - : Die [Ausrichtung](/de/docs/Web/CSS/Reference/At-rules/@media/orientation) des Containers, entweder `Landscape` oder `Portrait`.

- `width`
  - : Die Breite des Containers als {{cssxref("length")}}-Wert ausgedrückt.

#### Scroll-Status-Container-Deskriptoren

Scroll-Status-Container-Deskriptoren werden innerhalb der `<container-condition>` als Argument für die `scroll-state()`-Funktion angegeben, zum Beispiel:

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

Unterstützte Schlüsselwörter für Scroll-Status-Container-Deskriptoren umfassen {{Glossary("physical_properties", "physische")}} und {{Glossary("flow_relative_values", "fluss-relative")}} Werte.

- `scrollable`
  - : Fragt ab, ob der Container in die angegebene Richtung durch nutzerinitiierte Scrollvorgänge, wie das Ziehen der Scrollleiste oder die Verwendung einer Trackpad-Geste, gescrollt werden kann. Mit anderen Worten, gibt es überlaufenden Inhalt in der angegebenen Richtung, der gescrollt werden kann? Gültige `scrollable`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder kann in keiner Richtung gescrollt werden.
    - `top`
      - : Der Container kann zu seiner oberen Kante hin gescrollt werden.
    - `right`
      - : Der Container kann zu seiner rechten Kante hin gescrollt werden.
    - `bottom`
      - : Der Container kann zu seiner unteren Kante hin gescrollt werden.
    - `left`
      - : Der Container kann zu seiner linken Kante hin gescrollt werden.
    - `x`
      - : Der Container kann horizontal entweder zu seiner linken oder rechten Kante gescrollt werden.
    - `y`
      - : Der Container kann vertikal entweder zu seiner oberen oder unteren Kante gescrollt werden.
    - `block-start`
      - : Der Container kann zu seiner Block-Start-Kante hin gescrollt werden.
    - `block-end`
      - : Der Container kann zu seiner Block-End-Kante hin gescrollt werden.
    - `inline-start`
      - : Der Container kann zu seiner Inline-Start-Kante hin gescrollt werden.
    - `inline-end`
      - : Der Container kann zu seiner Inline-End-Kante hin gescrollt werden.
    - `block`
      - : Der Container kann in seiner Blockrichtung entweder zu seiner Block-Start- oder Block-End-Kante gescrollt werden.
    - `inline`
      - : Der Container kann in seiner Inline-Richtung entweder zu seiner Inline-Start- oder Inline-End-Kante gescrollt werden.

    Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des Scroll-Containers angewendet.

    Um zu überprüfen, ob ein Container scrollbar ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `scrolled`
  - : Fragt ab, ob der Container zuletzt in eine bestimmte Richtung gescrollt wurde. Gültige `scrolled`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder wurde zuletzt in keine Richtung gescrollt.
    - `top`
      - : Der Container wurde zuletzt zu seiner oberen Kante hin gescrollt.
    - `right`
      - : Der Container wurde zuletzt zu seiner rechten Kante hin gescrollt.
    - `bottom`
      - : Der Container wurde zuletzt zu seiner unteren Kante hin gescrollt.
    - `left`
      - : Der Container wurde zuletzt zu seiner linken Kante hin gescrollt.
    - `x`
      - : Der Container wurde zuletzt entweder zu seiner linken oder rechten Kante hin gescrollt.
    - `y`
      - : Der Container wurde zuletzt entweder zu seiner oberen oder unteren Kante hin gescrollt.
    - `block-start`
      - : Der Container wurde zuletzt zu seiner Block-Start-Kante hin gescrollt.
    - `block-end`
      - : Der Container wurde zuletzt zu seiner Block-End-Kante hin gescrollt.
    - `inline-start`
      - : Der Container wurde zuletzt zu seiner Inline-Start-Kante hin gescrollt.
    - `inline-end`
      - : Der Container wurde zuletzt zu seiner Inline-End-Kante hin gescrollt.
    - `block`
      - : Der Container wurde zuletzt entweder zu seiner Block-Start- oder Block-End-Kante hin gescrollt.
    - `inline`
      - : Der Container wurde zuletzt entweder zu seiner Inline-Start- oder Inline-End-Kante hin gescrollt.

    Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des Scroll-Containers angewendet.

    Um zu überprüfen, ob ein Container zuletzt gescrollt wurde, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrolled: none) {
      /* … */
    }
    ```

- `snapped`
  - : Fragt ab, ob der Container an einen [Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Container-Vorfahren entlang der angegebenen Achse geschnappt wird. Gültige `snapped`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein Scroll-{{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} für seinen Vorfahren-Scroll-Container. Bei der Implementierung einer `snapped: none`-Abfrage, werden Container, die Snap-Ziele für den Scroll-Container sind, die `@container`-Stile nicht anwenden, während Nicht-Snap-Ziele die Stile anwenden.
    - `x`
      - : Der Container ist ein horizontales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er schnippt horizontal zu seinem Vorfahren.
    - `y`
      - : Der Container ist ein vertikales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er schnippt vertikal zu seinem Vorfahren.
    - `block`
      - : Der Container ist ein Block-Achsen-Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er schnippt zu seinem Vorfahren in der Block-Richtung.
    - `inline`
      - : Der Container ist ein Inline-Achsen-Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container, d.h. er schnippt zu seinem Vorfahren in der Inline-Richtung.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch ein vertikales Scroll-Snap-Ziel für seinen Vorfahren-Scroll-Container und schnippt zu seinem Vorfahren in beiden Richtungen. Der Container wird nicht übereinstimmen, wenn er nur zu seinem Vorfahren entlang der horizontalen _oder_ vertikalen Achse schnippt. Er muss beides sein.

    Um einen Container mit einer Nicht-`none` `snapped` Scroll-Status-Abfrage zu evaluieren, muss er ein Container mit einem Scroll-Container-Vorfahren sein, der einen {{cssxref("scroll-snap-type")}}-Wert ungleich `none` hat. Eine `snapped: none`-Abfrage wird auch dann übereinstimmen, wenn es keinen Scroll-Container-Vorfahren gibt.

    Die Auswertungen finden statt, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignisse auf dem Scroll-Snap-Container ausgelöst werden. Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des Containers angewendet.

    Um zu überprüfen, ob ein Container ein Snap-Ziel ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`
  - : Fragt ab, ob ein Container mit einem {{cssxref("position")}}-Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an eine Kante seines Scroll-Container-Vorfahren haftet. Gültige `stuck`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container haftet an keiner Kante seines Containers. Beachten Sie, dass `none`-Abfragen auch dann übereinstimmen, wenn der Container kein `position: sticky` gesetzt hat.
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

    Um einen Container mit einer Nicht-`none` `stuck` Scroll-Status-Abfrage zu evaluieren, muss er `position: sticky` gesetzt haben und sich in einem Scroll-Container befinden. Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des `position: sticky` Containers angewendet.

    Es ist möglich, dass zwei Werte von angrenzenden Achsen gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Jedoch werden zwei Werte von gegenüberliegenden Kanten niemals gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) {
      /* … */
    }
    ```

    Um zu überprüfen, ob ein Container haftet, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

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
  - : Fragt ab, ob ein spezifischer Position-Try-Fallback derzeit auf einem Anker-Positionierten Container aktiv ist, wie es durch die {{cssxref("position-try-fallbacks")}}-Eigenschaft spezifiziert ist. Gültige `fallback`-Werte umfassen jeden Komponentenwert, der für die Aufnahme in einen `position-try-fallbacks`-Eigenschaftenwert gültig ist.

    Wenn der im Test angegebene `fallback`-Wert derzeit auf dem Anker-Positionierten Container aktiv ist, besteht der Test und die Regeln innerhalb des `@container`-Blocks werden auf die Nachkommen des Anker-Positionierten Containers angewendet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Stile basierend auf der Größe eines Containers festlegen

Betrachten Sie das folgende Beispiel einer Kartenkomponente mit Titel und Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Container-Kontext kann mit der `container-type` Eigenschaft erstellt werden, in diesem Fall mit dem `inline-size` Wert auf der `.post` Klasse. Sie können dann die `@container` At-Regel verwenden, um Stilelemente mit der Klasse `.card` in einem Container anzuwenden, der schmaler als `650px` ist.

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

### Benannte Container-Kontexte erstellen

Angenommen, folgende HTML-Beispiel, das eine Kartenkomponente mit einem Titel und etwas Text ist:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Erstellen Sie zunächst einen Container-Kontext mit den Eigenschaften `container-type` und `container-name`. Die Kurzschreibweise für diese Deklaration wird auf der {{cssxref("container")}}-Seite beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Als nächstes zielen Sie auf diesen Container, indem Sie den Namen zur Container-Abfrage hinzufügen:

```css
@container summary (width >= 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Container-Abfragen

Es ist nicht möglich, in einer einzigen Container-Abfrage auf mehrere Container abzuzielen. Es ist jedoch möglich, Container-Abfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage wird als wahr ausgewertet und wendet den deklarierten Stil an, wenn der Container mit dem Namen `summary` breiter als `400px` ist und einen Vorfahren-Container hat, der breiter als `800px` ist:

```css
@container summary (width > 400px) {
  @container (width > 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stil-Abfragen

Container-Abfragen können auch den berechneten Stil des Container-Elements bewerten. Eine _Container-Stil-Abfrage_ ist eine `@container`-Abfrage, die eine oder mehrere `style()` Funktionsnotationen verwendet. Die boolesche Syntax und Logik zur Kombination von Stilmerkmalen in eine Stilabfrage ist dieselbe wie bei [CSS-Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Das Parameter jeder `style()` ist ein einzelnes `<style-feature>`. Ein **`<style-feature>`** kann eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations) (die **einfache** Form), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values) allein (die **boolesche** Form) oder ein [Bereichsvergleich](#bereichssyntax) (die **Bereichsform**) sein.

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Ein Stilmerkmal ohne Wert wird als wahr ausgewertet, wenn der berechnete Wert vom Initialwert für die gegebene Eigenschaft abweicht.

Wenn das `<style-feature>`, das als Argument der `style()` Funktion übergeben wird, eine Deklaration ist, wird die Stilabfrage als wahr ausgewertet, wenn der Deklarationswert dem berechneten Wert dieser Eigenschaft für den abgefragten Container entspricht. Andernfalls löst es sich zu falsch.

Die folgende Container-Abfrage überprüft, ob der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) des Container-Elements `--accent-color` `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, wird der gleichwertige hexadezimale Code `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, damit der Browser die berechneten Werte korrekt vergleichen kann.

Stilmerkmale, die eine Kurzschreibweise abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langform-Eigenschaften zutreffen, und andernfalls falsch. Zum Beispiel wird `@container style(border: 2px solid red)` als wahr ausgewertet, wenn alle 12 Langform-Eigenschaften (`border-bottom-style`, etc.), die diese Kurzschreibweise bilden, zutreffen.

Beachten Sie, dass [`!important`](/de/docs/Web/CSS/Reference/Values/important) in Stilabfragen erlaubt ist, aber ignoriert wird.

```css
/* !important is valid but has no effect */
@container style(--themeColor: purple !important) {
  /* <stylesheet> */
}
```

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Container-Stil-Abfrage falsch ist.

#### Bereichssyntax

Zusätzlich zur einfachen `<style-feature-name>: <value>`-Form, die oben beschrieben wurde, kann ein `<style-feature>` als **Bereichs**vergleich mit `=`, `<`, `<=`, `>`, oder `>=` geschrieben werden. Bereichssyntax ermöglicht **numerische** Vergleiche, die die einfache Form nicht kann, wie `style(--columns >= 3)` oder `style(--gap = 1rem)`. Es vergleicht die aufgelösten Werte beider Seiten numerisch.

Um einen Bereich zu bewerten, tut der Browser:

1. Löst jede Seite auf (benutzerdefinierte Eigenschaftsnamen werden so aufgelöst, als ob sie mit [`var()`](/de/docs/Web/CSS/Reference/Values/var) verwendet würden).
2. Parst jede Seite als ein {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, oder {{cssxref("&lt;resolution&gt;")}}. Wenn eine Seite nicht als einer dieser Typen geparst werden kann oder die beiden Seiten nicht den gleichen Typ haben, ist die Abfrage falsch.
3. Berechnet jede Seite (wertet alle `calc()` Ausdrücke aus) und führt den numerischen Vergleich durch.

Das bedeutet, dass die Bereichssyntax nicht verwendet werden kann, um keywordartige Werte zu vergleichen: `style(--theme = dark)` ist immer falsch, weil `dark` kein numerischer Typ ist. Verwenden Sie für diese die einfache Syntax, z. B. `style(--theme: dark)`.

Jede Seite eines Bereichs kann ein benutzerdefinierter Eigenschaftsname, eine `var()` Referenz, ein literaler Wert oder ein `calc()` Ausdruck sein, in beliebiger Reihenfolge:

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

Ein Bereich kann auch eine Drei-Werte-Form annehmen, mit beiden Vergleichsoperatoren in die gleiche Richtung zeigend, um zu testen, ob ein Wert innerhalb eines Intervalls liegt:

```css
@container style(0 < --n < 10) {
  /* true when --n is greater than 0 and less than 10 */
}
@container style(100px > --width > 50px) {
  /* true when --width is less than 100px and greater than 50px */
}
```

Mit anderen Worten, `style(0 < --n < 10)` ist äquivalent zu `style(0 < --n) and style(--n < 10)`. Der mittlere Wert wird gegen beide Grenzen getestet, anstatt von links nach rechts verkettet zu werden.

> [!NOTE]
> Einfache und Bereichssyntax verhalten sich unterschiedlich, auch wenn sie ähnlich aussehen. Bei `--n: calc(6/2)` ist die Abfrage `style(--n: 3)` **falsch**, weil die einfache Form den berechneten Wert der Eigenschaft (`calc(6/2)`) direkt mit `3` vergleicht. Die äquivalente Bereichsabfrage `style(--n = 3)` ist **wahr**, weil die Bereichsform beide Seiten numerisch berechnet, bevor sie vergleicht. Siehe [Einfache im Gegensatz zur Bereichssyntax in Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#plain_versus_range_syntax_in_style_queries) im Leitfaden für Container-Stilabfragen für weitere Details.

### Scroll-Status-Abfragen

Siehe [Verwendung von Container-Scroll-Status-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) für Beispiele zu Scroll-Status-Abfragen.

### Verankerte Abfragen

Siehe [Verwendung von verankerten Container-Abfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries) für Beispiele zu verankerten Abfragen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Container-Größen und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Status-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verwendung von verankerten Container-Abfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule) API
- [CSS-Containment-Modul](/de/docs/Web/CSS/Guides/Containment)
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
