---
title: "`@container` CSS at-rule"
short-title: "@container"
slug: Web/CSS/Reference/At-rules/@container
l10n:
  sourceCommit: 48afb4da7957efe672d7fd837413ee1a69a842fd
---

Die **`@container`**-[CSS](/de/docs/Web/CSS)-[Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ist eine bedingte Gruppenregel, die Stile auf einen [Contexte der Einhaltung](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts) anwendet. Stil-Deklarationen werden nach einer Bedingung gefiltert und auf die Elemente innerhalb des Containers angewendet, wenn die Bedingung wahr ist. Die Bedingung wird ausgewertet, wenn sich die abgefragte Containergröße, [`<style-feature>`](#container-stileabfragen) oder der Scroll-Zustand ändert.

Die Bedingung muss einen oder beide von {{cssxref("container-name")}} und `<container-query>` festlegen.

Die {{cssxref("container-name")}}-Eigenschaft gibt eine Liste von Abfrage-Containernamen an, die verwendet werden, um zu filtern, welche Container von den `@container`-Regeln angesprochen werden. Die Containereigenschaften im `<container-query>` werden mit den ausgewählten Containern verglichen. Wenn kein `<container-name>` angegeben ist, werden die `<container-query>`-Eigenschaften mit dem nächsten übergeordneten Abfragecontainer verglichen, der den passenden [`container-type`](/de/docs/Web/CSS/Reference/Properties/container-type) hat. Wird kein `<container-query>` angegeben, werden benannte Container ausgewählt.

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
```

### Parameter

- `<container-condition>`
  - : Einer oder beide von `<container-name>` und `<container-query>`. Die im `<stylesheet>` definierten Stile werden angewendet, wenn die Bedingung `true` ist.
    - `<container-name>` {{optional_inline}}
      - : Der Name des Containers, der abgefragt werden soll; er wird als {{cssxref("ident")}} angegeben. Wenn die Abfrage zu `true` ausgewertet wird, werden die deklarierten Stile auf die Nachfahrenelemente des Containers angewendet.
    - `<container-query>` {{optional_inline}}
      - : Eine Gruppe von Eigenschaften, die mit dem Abfrage-Container verglichen werden, wenn sich die Größe, [`<style-feature>`](#container-stileabfragen), der Scroll-Zustand oder die angewendete Position-try-Reservierung des Containers ändert.

### Logische Schlüsselwörter in Containerabfragen

Logische Schlüsselwörter können verwendet werden, um die Container-Bedingung zu definieren:

- `and` kombiniert zwei oder mehr Bedingungen.
- `or` kombiniert zwei oder mehr Bedingungen.
- `not` negiert die Bedingung. Nur eine `not`-Bedingung ist pro Containerabfrage erlaubt und kann nicht mit den Schlüsselwörtern `and` oder `or` verwendet werden.

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

### Benannte Einhaltungs-Contexts

Ein Einhaltungs-Context kann mit der {{cssxref("container-name")}}-Eigenschaft benannt werden.

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

In Containerabfragen wird die {{cssxref("container-name")}}-Eigenschaft verwendet, um die Menge der Container auf diejenigen mit einem übereinstimmenden Abfrage-Container-Namen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details zur Verwendung und zu den Benennungsbeschränkungen sind auf der Seite {{cssxref("container-name")}} beschrieben.

### Deskriptoren

Die `<container-condition>`-Abfragen enthalten [Größe](#größen-container-deskriptoren), [Scroll-Zustand](#scroll-zustand_container-deskriptoren) und [verankerte](#verankerte_container-deskriptoren) Container-Deskriptoren.

#### Größen-Container-Deskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größenabfragen umfassen, die jeweils in einer Gruppe von Klammern stehen. Eine Größenabfrage enthält einen Größen-Deskriptor, einen Wert und — abhängig vom Deskriptor — einen Vergleichsoperator. Die Abfragen messen immer die [Content Box](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) als Vergleich. Die Syntax zum Einbinden mehrerer Bedingungen ist die gleiche wie bei {{cssxref("@media")}}-Größenabfragen.

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
  - : Das {{cssxref("aspect-ratio")}} des Containers wird als Verhältnis von Breite zu Höhe des Containers als {{cssxref("ratio")}}-Wert berechnet.

- `block-size`
  - : Die {{cssxref("block-size")}} des Containers wird als {{cssxref("length")}}-Wert ausgedrückt.

- `height`
  - : Die Höhe des Containers wird als {{cssxref("length")}}-Wert ausgedrückt.

- `inline-size`
  - : Die {{cssxref("inline-size")}} des Containers wird als {{cssxref("length")}}-Wert ausgedrückt.

- `orientation`
  - : Die [Ausrichtung](/de/docs/Web/CSS/Reference/At-rules/@media/orientation) des Containers, entweder `landscape` oder `portrait`.

- `width`
  - : Die Breite des Containers wird als {{cssxref("length")}}-Wert ausgedrückt.

#### Scroll-Zustand Container-Deskriptoren

Scroll-Zustand Container-Deskriptoren werden innerhalb der `<container-condition>` als Argument für die `scroll-state()`-Funktion angegeben, zum Beispiel:

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

Unterstützte Schlüsselwörter für Scroll-Zustand Container-Deskriptoren umfassen {{Glossary("physical_properties", "Physische")}} und {{Glossary("flow_relative_values", "flussbezogene")}} Werte.

- `scrollable`
  - : Prüft, ob der Container in der angegebenen Richtung durch benutzergesteuertes Scrollen, wie z.B. durch Ziehen der Scrollleiste oder Verwenden einer Trackpad-Geste, gescrollt werden kann. Mit anderen Worten, gibt es überlaufenden Inhalt in der angegebenen Richtung, der gescrollt werden kann? Gültige `scrollable`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder kann anderweitig nicht in irgendeiner Richtung gescrollt werden.
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
      - : Der Container kann in Richtung seiner Block-Start-Kante gescrollt werden.
    - `block-end`
      - : Der Container kann in Richtung seiner Block-Ende-Kante gescrollt werden.
    - `inline-start`
      - : Der Container kann in Richtung seiner Inline-Start-Kante gescrollt werden.
    - `inline-end`
      - : Der Container kann in Richtung seiner Inline-Ende-Kante gescrollt werden.
    - `block`
      - : Der Container kann in seiner Block-Richtung in Richtung einer oder beider seiner Block-Start- oder Block-Ende-Kanten gescrollt werden.
    - `inline`
      - : Der Container kann in seiner Inline-Richtung in Richtung einer oder beider seiner Inline-Start- und Inline-Ende-Kanten gescrollt werden.

    Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf die Nachkommen des Scroll-Containers angewendet.

    Um zu bewerten, ob ein Container scrollbar ist, ohne auf die Richtung zu achten, verwenden Sie den `none`-Wert mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `scrolled`
  - : Prüft, ob der Container zuletzt in eine bestimmte Richtung gescrollt wurde. Gültige `scrolled` Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder wurde anderweitig nicht vorher in irgendeiner Richtung gescrollt.
    - `top`
      - : Der Container wurde zuletzt in Richtung seiner oberen Kante gescrollt.
    - `right`
      - : Der Container wurde zuletzt in Richtung seiner rechten Kante gescrollt.
    - `bottom`
      - : Der Container wurde zuletzt in Richtung seiner unteren Kante gescrollt.
    - `left`
      - : Der Container wurde zuletzt in Richtung seiner linken Kante gescrollt.
    - `x`
      - : Der Container wurde zuletzt in Richtung einer seiner linken oder rechten Kanten gescrollt.
    - `y`
      - : Der Container wurde zuletzt in Richtung einer seiner oberen oder unteren Kanten gescrollt.
    - `block-start`
      - : Der Container wurde zuletzt in Richtung seiner Block-Start-Kante gescrollt.
    - `block-end`
      - : Der Container wurde zuletzt in Richtung seiner Block-Ende-Kante gescrollt.
    - `inline-start`
      - : Der Container wurde zuletzt in Richtung seiner Inline-Start-Kante gescrollt.
    - `inline-end`
      - : Der Container wurde zuletzt in Richtung seiner Inline-Ende-Kante gescrollt.
    - `block`
      - : Der Container wurde zuletzt in Richtung seiner Block-Start- oder Block-Ende-Kanten gescrollt.
    - `inline`
      - : Der Container wurde zuletzt in Richtung seiner Inline-Start- oder Inline-Ende-Kanten gescrollt.

    Wenn der Test zu wahr evaluiert, werden die verschachtelten Regeln im `@container`-Block auf die Nachfahren des Scroll-Containers angewendet.

    Um zu beurteilen, ob ein Container kürzlich gescrollt wurde, ohne auf die Richtung zu achten, verwenden Sie den `none`-Wert mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrolled: none) {
      /* … */
    }
    ```

- `snapped`
  - : Prüft, ob der Container an einen [Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Container-Ahnen entlang der angegebenen Achse einrasten wird. Gültige `snapped`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein Scroll-{{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} für seinen Ahnen-Scroll-Container. Wenn Sie eine `snapped: none`-Abfrage implementieren, werden Container, die **Snap-Ziele** für den Scroll-Container sind, **nicht** die `@container`-Stile angewendet, während auf **Nicht-Snap-Ziele** die Stile angewendet werden.
    - `x`
      - : Der Container ist ein horizontales Scroll-Snap-Ziel für seinen Ahnen-Scroll-Container, d.h. es rastet horizontal bei seinem Ahnen ein.
    - `y`
      - : Der Container ist ein vertikales Scroll-Snap-Ziel für seinen Ahnen-Scroll-Container, d.h. es rastet vertikal bei seinem Ahnen ein.
    - `block`
      - : Der Container ist ein Block-Achsen-Scroll-Snap-Ziel für seinen Ahnen-Scroll-Container, d.h. es rastet in der Block-Richtung bei seinem Ahnen ein.
    - `inline`
      - : Der Container ist ein Inline-Achsen-Scroll-Snap-Ziel für seinen Ahnen-Scroll-Container, d.h. es rastet in der Inline-Richtung bei seinem Ahnen ein.
    - `both`
      - : Der Container ist sowohl ein horizontales als auch ein vertikales Scroll-Snap-Ziel für seinen Ahnen-Scroll-Container und rastet in beiden Richtungen bei seinem Ahnen ein. Der Container passt nicht, wenn es nur entlang der horizontalen **oder**vertikalen Achse bei seinem Ahnen einrastet. Es muss beides sein.

    Um einen Container mit einem nicht-`none` `snapped`-Scroll-Zustandsabfrage zu bewerten, muss es sich um einen Container mit einem abrollbaren Containerahnen mit einem {{cssxref("scroll-snap-type")}}-Wert handelt, der nicht `none` ist. Eine `snapped: none`-Abfrage wird auch dann übereinstimmen, wenn kein Scroll-Containerahne vorhanden ist.

    Die Bewertungen erfolgen, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignisse auf dem Scroll-Snap-Container ausgelöst werden. Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf die Nachfahren des Containers angewendet.

    Um zu prüfen, ob ein Container ein Snap-Ziel ist, ohne auf die Richtung zu achten, verwenden Sie den `none`-Wert mit dem `not`-Operator:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`
  - : Prüft, ob ein Container mit einem {{cssxref("position")}}-Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an einer Kante seines scrollbaren Containerahnen angeheftet ist. Gültige `stuck`-Werte umfassen die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist an keine Kanten seines Containers angeheftet. Beachten Sie, dass `none`-Abfragen auch dann übereinstimmen, wenn der Container nicht `position: sticky` festgelegt hat.
    - `top`
      - : Der Container ist an die obere Kante seines Containers angeheftet.
    - `right`
      - : Der Container ist an die rechte Kante seines Containers angeheftet.
    - `bottom`
      - : Der Container ist an die untere Kante seines Containers angeheftet.
    - `left`
      - : Der Container ist an die linke Kante seines Containers angeheftet.
    - `block-start`
      - : Der Container ist an die Block-Start-Kante seines Containers angeheftet.
    - `block-end`
      - : Der Container ist an die Block-Ende-Kante seines Containers angeheftet.
    - `inline-start`
      - : Der Container ist an die Inline-Start-Kante seines Containers angeheftet.
    - `inline-end`
      - : Der Container ist an die Inline-Ende-Kante seines Containers angeheftet.

    Um einen Container mit einem nicht-`none` `stuck`-Scroll-Zustandsabfrage zu bewerten, muss er `position: sticky` aufweisen und innerhalb eines scrollbaren Containers sein. Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf die Nachfahren des `position: sticky` Containers angewendet.

    Es ist möglich, dass zwei Werte von benachbarten Achsen gleichzeitig passen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Zwei Werte von gegenüberliegenden Kanten werden jedoch niemals gleichzeitig passen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) {
      /* … */
    }
    ```

    Um zu überprüfen, ob ein Container angeheftet ist, ohne auf die Richtung zu achten, verwenden Sie den `none`-Wert mit dem `not`-Operator:

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
  - : Prüft, ob ein bestimmtes Position-Try-Reservierung zurzeit auf einem verankerten Positionierten Container aktiv ist, wie es über die {{cssxref("position-try-fallbacks")}}-Eigenschaft angegeben ist. Gültige `fallback`-Werte umfassen alle Komponentenwerte, die für die Aufnahme in einen `position-try-fallbacks`-Eigenschaftswert gültig sind.

    Wenn der im Test genannte `fallback`-Wert zurzeit auf dem verankerten Positionierten Container aktiv ist, besteht der Test, und die Regeln innerhalb des `@container`-Blocks werden auf die Nachfahren des verankerten Positionierten Containers angewendet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Stile basierend auf der Größe eines Containers festlegen

Betrachten Sie das folgende Beispiel eines Karten-Components mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Container-Context kann unter Verwendung der `container-type`-Eigenschaft erstellt werden, in diesem Fall mit dem Wert `inline-size` auf der `.post`-Klasse. Sie können dann die `@container`-Regel verwenden, um Stile auf das Element mit der `.card`-Klasse in einem Container anzuwenden, der schmaler als `650px` ist.

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

Angesichts des folgenden HTML-Beispiels, das ein Karten-Component mit einem Titel und etwas Text ist:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Erstellen Sie zuerst einen Container-Context unter Verwendung der `container-type` und `container-name`-Eigenschaften. Die Kurzschreibsyntax für diese Deklaration ist auf der {{cssxref("container")}}-Seite beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Zielen Sie dann, indem Sie den Namen zur Container-Abfrage hinzufügen, auf diesen Container ab:

```css
@container summary (width >= 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Containerabfragen

Es ist nicht möglich, mehrere Container in einer einzigen Containerabfrage anzusprechen. Es ist möglich, Containerabfragen zu verschachteln, was denselben Effekt hat.

Die folgende Abfrage wird als wahr ausgewertet und wendet den deklarierten Stil an, wenn der Container mit dem Namen `summary` breiter als `400px` ist und einen Ahnencontainer hat, der breiter als `800px` ist:

```css
@container summary (width > 400px) {
  @container (width > 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stileabfragen

Containerabfragen können auch den berechneten Stil des Containerelements bewerten. Eine _Container-Stilabfrage_ ist eine `@container`-Abfrage, die eine oder mehrere `style()`-Funktionsnotationen verwendet. Die boolesche Syntax und das logische Kombinieren von Stileigenschaften in eine Stilabfrage ist dieselbe wie für [CSS-Eigenschaftsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Das Parameter von jedem `style()` ist eine einzelne `<style-feature>`. Ein **`<style-feature>`** kann eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations) (die **einfache** Form), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values) für sich haben (die **boolesche** Form) oder ein [Bereichsvergleich](#bereichssyntax) (die **Bereichs** Form).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Eine Stileigenschaft ohne Wert wird als wahr bewertet, wenn der berechnete Wert unterschiedlich vom anfänglichen Wert der gegebenen Eigenschaft ist.

Wenn das `<style-feature>`, das als Argument der `style()` Funktion übergeben wurde, eine Deklaration ist, bewertet die Stilabfrage wahr, wenn der Wert der Deklaration derselbe ist wie der berechnete Wert dieser Eigenschaft für den überprüften Container. Andernfalls ergibt es falsch.

Die folgende Container-Abfrage prüft, ob der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der`--accent-color` im Containerelement `blue` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft den Wert `blue` hat, wird der entsprechende hexadezimale Code `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, damit der Browser die berechneten Werte richtig vergleichen kann.

Stileigenschaften, die eine Kurzschrift-Eigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langhand-Eigenschaften übereinstimmen, und sonst falsch. Zum Beispiel würde `@container style(border: 2px solid red)` wahr sein, wenn alle 12 Langhand-Eigenschaften (`border-bottom-style`, usw.), die diese Kurzschrift ausmachen, wahr sind.

Beachten Sie, dass [`!important`](/de/docs/Web/CSS/Reference/Values/important) in Stilabfragen erlaubt ist, jedoch ignoriert wird.

```css
/* !important is valid but has no effect */
@container style(--themeColor: purple !important) {
  /* <stylesheet> */
}
```

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und verursachen, dass die Container-Stilabfrage falsch ist.

#### Bereichssyntax

Zusätzlich zur einfachen Form `<style-feature-name>: <value>` kann ein `<style-feature>` als **Bereichs**vergleich mit `=`, `<`, `<=`, `>`, oder `>=` geschrieben werden. Die Bereichssyntax ermöglicht **numerische** Vergleiche, die die einfache Form nicht kann, wie `style(--columns >= 3)` oder `style(--gap = 1rem)`. Es vergleicht die aufgelösten Werte beider Seiten numerisch.

Um einen Bereich zu evaluieren, wird der Browser:

1. Löst jede Seite (benutzerdefinierte Eigenschaftsnamen werden behandelt, als ob sie mit [`var()`](/de/docs/Web/CSS/Reference/Values/var) genutzt werden) auf.
2. Parst jede Seite als {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, oder {{cssxref("&lt;resolution&gt;")}}. Wenn entweder Seite nicht als eine dieser Typen geparst werden kann, oder die beiden Seiten nicht den gleichen Typ haben, ist die Abfrage falsch.
3. Berechnet jede Seite (auswertend jede `calc()`-Ausdrücke) und führt den numerischen Vergleich durch.

Das bedeutet, dass die Bereichssyntax nicht verwendet werden kann, um Werte wie Schlüsselwort-ähnliche Werte zu vergleichen: `style(--theme = dark)` ist immer falsch, weil `dark` kein numerischer Typ ist. Verwenden Sie die einfache Syntax für diese, zum Beispiel `style(--theme: dark)`.

Jede Seite eines Bereichs kann ein benutzerdefinierter Eigenschaftsname sein, ein `var()`-Verweis, ein wörtlicher Wert oder ein `calc()`-Ausdruck, in beliebiger Reihenfolge:

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

Ein Bereich kann auch eine Drei-Werte-Form annehmen, wobei beide Vergleichsoperatoren in dieselbe Richtung zeigen, um zu testen, ob ein Wert innerhalb eines Intervalls liegt:

```css
@container style(0 < --n < 10) {
  /* true when --n is greater than 0 and less than 10 */
}
@container style(100px > --width > 50px) {
  /* true when --width is less than 100px and greater than 50px */
}
```

Das heißt, `style(0 < --n < 10)` ist gleichwertig zu `style(0 < --n) und style(--n < 10)`. Der Mittelwert wird gegen beide Grenzen getestet, anstatt links zu rechts verkettet zu sein.

> [!NOTE]
> Einfache und Bereichs-Syntax verhalten sich unterschiedlich, auch wenn sie ähnlich aussehen. Given`--n: calc(6/2)`, die Abfrage `style(--n: 3)` ist **falsch**, weil die einfache Form den berechneten Wert der Eigenschaft (`calc(6/2)`) direkt gegen `3` vergleicht. Die äquivalente Bereichsabfrage `style(--n = 3)` ist **wahr**, weil die Bereichsform beide Seiten numerisch berechnet, bevor sie verglichen werden. Siehe [Einfache vs. Bereichs-Syntax in Stil-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#plain_versus_range_syntax_in_style_queries) in der Anleitung zu Container-Stilabfragen für mehr Details.

### Scroll-Zustand-Abfragen

Siehe [Verwendung von Container-Scroll-Zustand-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) für Beispiele zu Scroll-Zustand-Abfragen.

### Verankerte Abfragen

Siehe [Verwendung von verankerten Container-Abfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries) für Beispiele zu verankerten Abfragen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustand-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verwendung von verankerten Container-Abfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS-Einhaltung Modul](/de/docs/Web/CSS/Guides/Containment)
- [CSS-Regel Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
