---
title: "`@container` CSS at-rule"
short-title: "@container"
slug: Web/CSS/Reference/At-rules/@container
l10n:
  sourceCommit: dc6f92b8877c1c53c187ad6cb6ba677db3ab179a
---

Die **CSS-At-Regel** **`@container`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules) ist eine bedingte Gruppenregel, die Stile auf einen [Containment-Kontext](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts) anwendet.
Stildeklarationen werden anhand einer Bedingung gefiltert und auf die Elemente innerhalb des Containers angewendet, wenn die Bedingung wahr ist.
Die Bedingung wird ausgewertet, wenn sich die Größe des abgefragten Containers, [`<style-feature>`](#container-stilabfragen) oder der Scroll-Status ändert.

Die Bedingung muss einen {{cssxref("container-name")}}, eine `<container-query>` oder beides angeben.

Die Eigenschaft {{cssxref("container-name")}} legt eine Liste von Abfrage-Containernamen fest, die verwendet werden, um zu filtern, welche Container durch die `@container`-Regeln angesprochen werden. Wenn nur ein `container-name`-Wert enthalten ist (eine [Container-Abfrage nur mit Namen](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries)), werden die enthaltenen Regeln auf alle Container angewendet, für die einer oder mehrere dieser `container-name`-Werte festgelegt sind.

Die Container-Features in der `<container-query>` werden für die ausgewählten Container ausgewertet.
Wenn kein `<container-name>` angegeben ist, werden die Features der `<container-query>` für den nächstgelegenen übergeordneten Abfrage-Container ausgewertet, der den passenden [`container-type`](/de/docs/Web/CSS/Reference/Properties/container-type) besitzt.

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
  - : Eines oder beide von `<container-name>` und `<container-query>`.
    Die im `<stylesheet>` definierten Stile werden angewendet, wenn die Bedingung `true` ist.
    - `<container-name>` {{optional_inline}}
      - : Der Name des abzufragenden Containers; er wird als {{cssxref("ident")}} angegeben. Wenn die Abfrage zu `true` ausgewertet wird, werden die deklarierten Stile auf die Nachfahrenelemente des Containers angewendet.
    - `<container-query>` {{optional_inline}}
      - : Eine Menge von Features, die für den Abfrage-Container ausgewertet werden, wenn sich die Größe, [`<style-feature>`](#container-stilabfragen), der Scroll-Status oder der angewendete Position-try-Fallback des Containers ändert.

### Logische Schlüsselwörter in Container-Abfragen

Logische Schlüsselwörter können verwendet werden, um die Container-Bedingung zu definieren:

- `and` kombiniert zwei oder mehr Bedingungen.
- `or` kombiniert zwei oder mehr Bedingungen.
- `not` negiert die Bedingung. Pro Container-Abfrage ist nur eine `not`-Bedingung zulässig, und sie kann nicht zusammen mit den Schlüsselwörtern `and` oder `or` verwendet werden.

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

Die Kurzschreibweise hierfür besteht darin, {{cssxref("container")}} in der Form `container: <name> / <type>` zu verwenden, zum Beispiel:

```css
.post {
  container: sidebar / inline-size;
}
```

In Container-Abfragen wird die Eigenschaft {{cssxref("container-name")}} verwendet, um die Menge der Container auf diejenigen mit einem passenden Abfrage-Containernamen zu beschränken:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Verwendung und zu Benennungseinschränkungen werden auf der Seite zu {{cssxref("container-name")}} beschrieben.

### Deskriptoren

Die Abfragen in `<container-condition>` umfassen [Größen-](#größen-container-deskriptoren), [Scroll-Status-](#scroll-status-container-deskriptoren) und [verankerte](#verankerte_container-deskriptoren) Container-Deskriptoren.

#### Größen-Container-Deskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größenabfragen enthalten, jeweils innerhalb eines Klammerpaars. Eine Größenabfrage umfasst einen Größen-Deskriptor, einen Wert und – abhängig vom Deskriptor – einen Vergleichsoperator. Die Abfragen messen zum Vergleich immer die [Content-Box](/de/docs/Web/CSS/Reference/Values/box-edge#content-box). Die Syntax zum Einschließen mehrerer Bedingungen entspricht derjenigen für Größen-Feature-Abfragen von {{cssxref("@media")}}.

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
  - : Das {{cssxref("aspect-ratio")}} des Containers, berechnet als Breite im Verhältnis zur Höhe des Containers und ausgedrückt als {{cssxref("ratio")}}-Wert.

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

#### Scroll-Status-Container-Deskriptoren

Scroll-Status-Container-Deskriptoren werden innerhalb der `<container-condition>` als Argument für die Funktion `scroll-state()` angegeben, zum Beispiel:

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

Unterstützte Schlüsselwörter für Scroll-Status-Container-Deskriptoren umfassen {{Glossary("physical_properties", "physische")}} und {{Glossary("flow_relative_values", "flussrelative")}} Werte.

- `scrollable`
  - : Fragt ab, ob der Container durch vom Benutzer ausgelöstes Scrollen in die angegebene Richtung gescrollt werden kann, beispielsweise durch Ziehen der Bildlaufleiste oder durch eine Trackpad-Geste. Anders gesagt: Gibt es in der angegebenen Richtung überlaufenden Inhalt, zu dem gescrollt werden kann? Gültige `scrollable`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder kann auf andere Weise in keine Richtung gescrollt werden.
    - `top`
      - : Der Container kann in Richtung seiner oberen Kante gescrollt werden.
    - `right`
      - : Der Container kann in Richtung seiner rechten Kante gescrollt werden.
    - `bottom`
      - : Der Container kann in Richtung seiner unteren Kante gescrollt werden.
    - `left`
      - : Der Container kann in Richtung seiner linken Kante gescrollt werden.
    - `x`
      - : Der Container kann horizontal in Richtung einer oder beider seiner linken oder rechten Kanten gescrollt werden.
    - `y`
      - : Der Container kann vertikal in Richtung einer oder beider seiner oberen oder unteren Kanten gescrollt werden.
    - `block-start`
      - : Der Container kann in Richtung seiner Block-Startkante gescrollt werden.
    - `block-end`
      - : Der Container kann in Richtung seiner Block-Endkante gescrollt werden.
    - `inline-start`
      - : Der Container kann in Richtung seiner Inline-Startkante gescrollt werden.
    - `inline-end`
      - : Der Container kann in Richtung seiner Inline-Endkante gescrollt werden.
    - `block`
      - : Der Container kann in seiner Blockrichtung in Richtung einer oder beider seiner Block-Start- oder Block-Endkanten gescrollt werden.
    - `inline`
      - : Der Container kann in seiner Inline-Richtung in Richtung einer oder beider seiner Inline-Start- und Inline-Endkanten gescrollt werden.

    Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf Nachfahren des Scroll-Containers angewendet.

    Um auszuwerten, ob ein Container scrollbar ist, ohne die Richtung zu berücksichtigen, verwenden Sie den Wert `none` mit dem Operator `not`:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `scrolled`
  - : Fragt ab, ob der Container zuletzt in eine angegebene Richtung gescrollt wurde. Gültige `scrolled`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder wurde auf andere Weise zuvor in keine Richtung gescrollt.
    - `top`
      - : Der Container wurde zuletzt in Richtung seiner oberen Kante gescrollt.
    - `right`
      - : Der Container wurde zuletzt in Richtung seiner rechten Kante gescrollt.
    - `bottom`
      - : Der Container wurde zuletzt in Richtung seiner unteren Kante gescrollt.
    - `left`
      - : Der Container wurde zuletzt in Richtung seiner linken Kante gescrollt.
    - `x`
      - : Der Container wurde zuletzt in Richtung seiner linken oder rechten Kante gescrollt.
    - `y`
      - : Der Container wurde zuletzt in Richtung seiner oberen oder unteren Kante gescrollt.
    - `block-start`
      - : Der Container wurde zuletzt in Richtung seiner Block-Startkante gescrollt.
    - `block-end`
      - : Der Container wurde zuletzt in Richtung seiner Block-Endkante gescrollt.
    - `inline-start`
      - : Der Container wurde zuletzt in Richtung seiner Inline-Startkante gescrollt.
    - `inline-end`
      - : Der Container wurde zuletzt in Richtung seiner Inline-Endkante gescrollt.
    - `block`
      - : Der Container wurde zuletzt in Richtung einer seiner Block-Start- oder Block-Endkanten gescrollt.
    - `inline`
      - : Der Container wurde zuletzt in Richtung einer seiner Inline-Start- oder Inline-Endkanten gescrollt.

    Wenn der Test `true` zurückgibt, werden die im `@container`-Block verschachtelten Regeln auf die Nachfahren des Scroll-Containers angewendet.

    Um auszuwerten, ob ein Container kürzlich gescrollt wurde, ohne die Richtung zu berücksichtigen, verwenden Sie den Wert `none` mit dem Operator `not`:

    ```css
    @container not scroll-state(scrolled: none) {
      /* … */
    }
    ```

- `snapped`
  - : Fragt ab, ob der Container entlang der angegebenen Achse an einen [Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Container-Vorfahren eingerastet wird. Gültige `snapped`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein Scroll-{{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} für seinen übergeordneten Scroll-Container. Bei der Implementierung einer Abfrage `snapped: none` werden Container, die _Snap-Ziele_ für den Scroll-Container sind, die `@container`-Stile _nicht_ erhalten, während Nicht-Snap-Ziele die Stile _erhalten_.
    - `x`
      - : Der Container ist ein horizontales Scroll-Snap-Ziel für seinen übergeordneten Scroll-Container, das heißt, er rastet horizontal an seinem Vorfahren ein.
    - `y`
      - : Der Container ist ein vertikales Scroll-Snap-Ziel für seinen übergeordneten Scroll-Container, das heißt, er rastet vertikal an seinem Vorfahren ein.
    - `block`
      - : Der Container ist ein Scroll-Snap-Ziel auf der Block-Achse für seinen übergeordneten Scroll-Container, das heißt, er rastet in Blockrichtung an seinem Vorfahren ein.
    - `inline`
      - : Der Container ist ein Scroll-Snap-Ziel auf der Inline-Achse für seinen übergeordneten Scroll-Container, das heißt, er rastet in Inline-Richtung an seinem Vorfahren ein.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch ein vertikales Scroll-Snap-Ziel für seinen übergeordneten Scroll-Container und rastet in beiden Richtungen an seinem Vorfahren ein. Der Container entspricht der Abfrage nicht, wenn er nur entlang der horizontalen _oder_ vertikalen Achse an seinem Vorfahren einrastet. Es müssen beide sein.

    Um einen Container mit einer `snapped`-Scroll-Status-Abfrage ungleich `none` auszuwerten, muss er ein Container mit einem Scroll-Container-Vorfahren sein, dessen {{cssxref("scroll-snap-type")}}-Wert nicht `none` ist. Eine Abfrage `snapped: none` stimmt auch überein, wenn kein Scroll-Container-Vorfahre vorhanden ist.

    Auswertungen erfolgen, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignisse auf dem Scroll-Snap-Container ausgelöst werden. Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf Nachfahren des Containers angewendet.

    Um auszuwerten, ob ein Container ein Snap-Ziel ist, ohne die Richtung zu berücksichtigen, verwenden Sie den Wert `none` mit dem Operator `not`:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`
  - : Fragt ab, ob ein Container mit einem {{cssxref("position")}}-Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an einer Kante seines Scroll-Container-Vorfahren haftet. Gültige `stuck`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container haftet an keiner Kante seines Containers. Beachten Sie, dass `none`-Abfragen auch dann übereinstimmen, wenn für den Container nicht `position: sticky` festgelegt ist.
    - `top`
      - : Der Container haftet an der oberen Kante seines Containers.
    - `right`
      - : Der Container haftet an der rechten Kante seines Containers.
    - `bottom`
      - : Der Container haftet an der unteren Kante seines Containers.
    - `left`
      - : Der Container haftet an der linken Kante seines Containers.
    - `block-start`
      - : Der Container haftet an der Block-Startkante seines Containers.
    - `block-end`
      - : Der Container haftet an der Block-Endkante seines Containers.
    - `inline-start`
      - : Der Container haftet an der Inline-Startkante seines Containers.
    - `inline-end`
      - : Der Container haftet an der Inline-Endkante seines Containers.

    Um einen Container mit einer `stuck`-Scroll-Status-Abfrage ungleich `none` auszuwerten, muss für ihn `position: sticky` festgelegt sein und er muss sich innerhalb eines Scroll-Containers befinden. Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf Nachfahren des Containers mit `position: sticky` angewendet.

    Es können gleichzeitig zwei Werte von benachbarten Achsen übereinstimmen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Zwei Werte von gegenüberliegenden Kanten werden jedoch niemals gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) {
      /* … */
    }
    ```

    Um auszuwerten, ob ein Container haftet, ohne die Richtung zu berücksichtigen, verwenden Sie den Wert `none` mit dem Operator `not`:

    ```css
    @container not scroll-state(stuck: none) {
      /* … */
    }
    ```

#### Verankerte Container-Deskriptoren

Verankerte Container-Deskriptoren werden innerhalb der `<container-condition>` als Argument für die Funktion `anchored()` angegeben, zum Beispiel:

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
  - : Fragt ab, ob ein bestimmter Position-try-Fallback derzeit für einen ankerpositionierten Container aktiv ist, wie über die Eigenschaft {{cssxref("position-try-fallbacks")}} angegeben. Gültige `fallback`-Werte umfassen jeden Komponentenwert, der in einem Eigenschaftswert von `position-try-fallbacks` gültig ist.

    Wenn der im Test benannte `fallback`-Wert derzeit für den ankerpositionierten Container aktiv ist, ist der Test erfolgreich und die Regeln innerhalb des `@container`-Blocks werden auf Nachfahren des ankerpositionierten Containers angewendet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Stile basierend auf der Größe eines Containers festlegen

Betrachten Sie das folgende Beispiel einer Kartenkomponente mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Container-Kontext kann mithilfe der Eigenschaft `container-type` erstellt werden, in diesem Fall mit dem Wert `inline-size` für die Klasse `.post`.
Anschließend können Sie die `@container`-At-Regel verwenden, um Stile auf das Element mit der Klasse `.card` in einem Container anzuwenden, der schmaler als `650px` ist.

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

Gegeben sei das folgende HTML-Beispiel einer Kartenkomponente mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Erstellen Sie zunächst mithilfe der Eigenschaften `container-type` und `container-name` einen Container-Kontext.
Die Kurzschreibweise für diese Deklaration wird auf der Seite zu {{cssxref("container")}} beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Sprechen Sie anschließend diesen Container an, indem Sie den Namen zur Container-Abfrage hinzufügen:

```css
@container summary (width >= 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Container-Abfragen

Es ist nicht möglich, in einer einzelnen Container-Abfrage mehrere Container anzusprechen.
Es ist jedoch möglich, Container-Abfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage wird zu `true` ausgewertet und wendet den deklarierten Stil an, wenn der Container mit dem Namen `summary` breiter als `400px` ist und einen übergeordneten Container besitzt, der breiter als `800px` ist:

```css
@container summary (width > 400px) {
  @container (width > 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stilabfragen

Container-Abfragen können auch den berechneten Stil des Container-Elements auswerten. Eine _Container-Stilabfrage_ ist eine `@container`-Abfrage, die eine oder mehrere funktionale Notationen `style()` verwendet. Die boolesche Syntax und Logik zum Kombinieren von Stil-Features zu einer Stilabfrage entspricht derjenigen für [CSS-Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jedes `style()` ist ein einzelnes `<style-feature>`. Ein **`<style-feature>`** kann eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations) (die **einfache** Form), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values) allein (die **boolesche** Form) oder ein [Bereichsvergleich](#bereichssyntax) (die **Bereichsform**) sein.

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Ein Stil-Feature ohne Wert wird zu `true` ausgewertet, wenn sich der berechnete Wert für die angegebene Eigenschaft vom Anfangswert unterscheidet.

Wenn das als Argument der Funktion `style()` übergebene `<style-feature>` eine Deklaration ist, wird die Stilabfrage zu `true` ausgewertet, wenn der Wert der Deklaration dem berechneten Wert dieser Eigenschaft für den abgefragten Container entspricht. Andernfalls wird sie zu `false` aufgelöst.

Die folgende Container-Abfrage prüft, ob der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) von `--accent-color` des Container-Elements `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` besitzt, stimmt der entsprechende hexadezimale Code `#0000ff` nicht überein, es sei denn, die Eigenschaft wurde mit {{cssxref("@property")}} als Farbe definiert, damit der Browser berechnete Werte korrekt vergleichen kann.

Stil-Features, die eine Kurzschreibweise abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langform-Eigenschaften übereinstimmen, und andernfalls falsch. Beispielsweise wird `@container style(border: 2px solid red)` zu `true` aufgelöst, wenn alle 12 Langform-Eigenschaften (`border-bottom-style` usw.), aus denen diese Kurzschreibweise besteht, wahr sind.

Beachten Sie, dass [`!important`](/de/docs/Web/CSS/Reference/Values/important) in Stilabfragen zulässig ist, jedoch ignoriert wird.

```css
/* !important is valid but has no effect */
@container style(--themeColor: purple !important) {
  /* <stylesheet> */
}
```

Die globalen Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Container-Stilabfrage `false` ist.

#### Bereichssyntax

Zusätzlich zur oben beschriebenen einfachen Form `<style-feature-name>: <value>` kann ein `<style-feature>` als **Bereichsvergleich** mit `=`, `<`, `<=`, `>`, oder `>=` geschrieben werden. Die Bereichssyntax ermöglicht **numerische** Vergleiche, die mit der einfachen Form nicht möglich sind, beispielsweise `style(--columns >= 3)` oder `style(--gap = 1rem)`. Sie vergleicht die aufgelösten Werte beider Seiten numerisch.

Um einen Bereich auszuwerten, führt der Browser Folgendes aus:

1. Er löst jede Seite auf (Namen benutzerdefinierter Eigenschaften werden nachgeschlagen, als würden sie mit [`var()`](/de/docs/Web/CSS/Reference/Values/var) verwendet).
2. Er analysiert jede Seite als {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;frequency&gt;")}} oder {{cssxref("&lt;resolution&gt;")}}. Wenn eine der Seiten nicht als einer dieser Typen analysiert werden kann oder die beiden Seiten nicht denselben Typ besitzen, ist die Abfrage falsch.
3. Er berechnet jede Seite, wobei alle `calc()`-Ausdrücke ausgewertet werden, und führt den numerischen Vergleich durch.

Das bedeutet, dass die Bereichssyntax nicht verwendet werden kann, um schlüsselwortähnliche Werte zu vergleichen: `style(--theme = dark)` ist immer falsch, da `dark` kein numerischer Typ ist. Verwenden Sie hierfür die einfache Syntax, beispielsweise `style(--theme: dark)`.

Beide Seiten eines Bereichs können ein Name einer benutzerdefinierten Eigenschaft, eine `var()`-Referenz, ein Literalwert oder ein `calc()`-Ausdruck sein, in beliebiger Reihenfolge:

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

Ein Bereich kann auch eine Form mit drei Werten annehmen, bei der beide Vergleichsoperatoren in dieselbe Richtung zeigen, um zu prüfen, ob ein Wert innerhalb eines Intervalls liegt:

```css
@container style(0 < --n < 10) {
  /* true when --n is greater than 0 and less than 10 */
}
@container style(100px > --width > 50px) {
  /* true when --width is less than 100px and greater than 50px */
}
```

Anders gesagt entspricht `style(0 < --n < 10)` der Abfrage `style(0 < --n) and style(--n < 10)`. Der mittlere Wert wird gegen beide Grenzen getestet, anstatt von links nach rechts verkettet zu werden.

> [!NOTE]
> Einfache und Bereichssyntax verhalten sich unterschiedlich, selbst wenn sie ähnlich aussehen. Bei `--n: calc(6/2)` ist die Abfrage `style(--n: 3)` **false**, da die einfache Form den berechneten Wert der Eigenschaft (`calc(6/2)`) direkt mit `3` vergleicht. Die entsprechende Bereichsabfrage `style(--n = 3)` ist **true**, da die Bereichsform beide Seiten vor dem Vergleich numerisch berechnet. Weitere Details finden Sie unter [Einfache im Vergleich zur Bereichssyntax in Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#plain_versus_range_syntax_in_style_queries) im Leitfaden zu Container-Stilabfragen.

### Scroll-Status-Abfragen

Beispiele für Scroll-Status-Abfragen finden Sie unter [Container-Scroll-Status-Abfragen verwenden](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries).

### Verankerte Abfragen

Beispiele für verankerte Abfragen finden Sie unter [Verankerte Container-Abfragen verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Container-Abfragen verwenden](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Container-Größen- und Stilabfragen verwenden](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Container-Scroll-Status-Abfragen verwenden](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verankerte Container-Abfragen verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule)-API
- [CSS-Containment-Modul](/de/docs/Web/CSS/Guides/Containment)
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
