---
title: "@container"
slug: Web/CSS/@container
l10n:
  sourceCommit: 93ca748b6242a54899af617756a9c325a7071793
---

Die **`@container`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ist eine bedingte Gruppenregel, die Stile auf einen [Containment-Kontext](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) anwendet. Stildeklarationen werden durch eine Bedingung gefiltert und auf den Container angewendet, wenn die Bedingung wahr ist. Die Bedingung wird ausgewertet, wenn sich die abgefragte Containergröße, [`<style-feature>`](#container-stilabfragen) oder der Scroll-Zustand ändert.

Die Eigenschaft {{cssxref("container-name")}} spezifiziert eine Liste von Abfrage-Containernamen. Diese Namen können von `@container`-Regeln verwendet werden, um zu filtern, welche Abfrage-Container angesprochen werden. Der optionale, groß-/kleinschreibungssensitive `<container-name>` filtert die Container, die von der Abfrage angesprochen werden.

Sobald ein geeigneter Abfragecontainer für ein Element ausgewählt wurde, wird jede Containerfunktion in der `<container-condition>` gegen diesen Abfragecontainer ausgewertet.

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
  - : Ein optionaler `<container-name>` und ein `<container-query>`. Stile, die im `<stylesheet>` definiert sind, werden angewendet, wenn die Bedingung wahr ist.
    - `<container-name>`
      - : Optional. Der Name des Containers, auf den die Stile angewendet werden, wenn die Abfrage als wahr bewertet wird, angegeben als ein {{cssxref("ident")}}.
    - `<container-query>`
      - : Eine Reihe von Funktionen, die bewertet werden, wenn die Größe, [`<style-feature>`](#container-stilabfragen) oder der Scroll-Zustand des Containers sich ändern.

### Logische Schlüsselwörter in Container-Abfragen

Logische Schlüsselwörter können verwendet werden, um die Containerbedingung zu definieren:

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

Ein Containment-Kontext kann mithilfe der Eigenschaft {{cssxref("container-name")}} benannt werden.

```css
.post {
  container-name: sidebar;
  container-type: inline-size;
}
```

Die Kurznotation hierfür ist die Verwendung von {{cssxref("container")}} in der Form `container: <name> / <type>`, zum Beispiel:

```css
.post {
  container: sidebar / inline-size;
}
```

In Container-Abfragen wird die Eigenschaft {{cssxref("container-name")}} verwendet, um den Satz von Containern auf diejenigen mit einem passenden Abfragecontainernamen zu filtern:

```css
@container sidebar (width > 400px) {
  /* <stylesheet> */
}
```

Details über die Verwendung und Namenseinschränkungen sind auf der {{cssxref("container-name")}}-Seite beschrieben.

### Deskriptoren

Die `<container-condition>`-Abfragen beinhalten [Größen](#größen-container-deskriptoren) und [Scroll-Zustand](#scroll-zustand_container-deskriptoren) Container-Deskriptoren.

#### Größen-Container-Deskriptoren

Die `<container-condition>` kann eine oder mehrere boolesche Größenabfragen enthalten, jede in einem Set von Klammern. Eine Größenabfrage umfasst einen Größen-Deskriptor, einen Wert und – abhängig vom Deskriptor – einen Vergleichsoperator. Die Syntax zur Einbindung mehrerer Bedingungen ist die gleiche wie bei [`@media`](/de/docs/Web/CSS/@media) Größenfunktions-Abfragen.

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
  - : Das {{cssxref("aspect-ratio")}} des Containers, berechnet als das Verhältnis von Breite zu Höhe des Containers, ausgedrückt als ein {{cssxref("ratio")}}-Wert.

- `block-size`
  - : Die {{cssxref("block-size")}} des Containers, ausgedrückt als ein {{cssxref("length")}}-Wert.

- `height`
  - : Die Höhe des Containers, ausgedrückt als ein {{cssxref("length")}}-Wert.

- `inline-size`
  - : Die {{cssxref("inline-size")}} des Containers, ausgedrückt als ein {{cssxref("length")}}-Wert.

- `orientation`
  - : Die [Orientierung](/de/docs/Web/CSS/@media/orientation) des Containers, entweder `landscape` oder `portrait`.

- `width`
  - : Die Breite des Containers, ausgedrückt als ein {{cssxref("length")}}-Wert.

#### Scroll-Zustand Container-Deskriptoren

Scroll-Zustand Container-Deskriptoren werden innerhalb der `<container-condition>` in einem Satz von Klammern nach dem Schlüsselwort `scroll-state` angegeben, zum Beispiel:

```css
@container scroll-state(scrollable: top) {
  /* … */
}
@container scroll-state(stuck: inline-end) {
  /* … */
}
@container scroll-state(snapped: both) {
  /* … */
}
```

Unterstützte Schlüsselwörter für Scroll-Zustand Container-Deskriptoren beinhalten physikalische und {{Glossary("flow_relative_values", "fluss-relative Werte")}}:

- `scrollable`
  - : Fragt ab, ob der Container in die angegebene Richtung durch Benutzer-initiierte Scrollen, wie durch Ziehen der Scrollleiste oder die Verwendung eines Trackpad-Gestus, gescrollt werden kann. Mit anderen Worten: Gibt es überlaufenden Inhalt in der angegebenen Richtung, der gescrollt werden kann? Gültige `scrollable` Werte beinhalten die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein {{Glossary("scroll_container", "Scroll-Container")}} oder kann anderweitig nicht in irgendeine Richtung gescrollt werden.
    - `top`
      - : Der Container kann nach oben gescrollt werden.
    - `right`
      - : Der Container kann nach rechts gescrollt werden.
    - `bottom`
      - : Der Container kann nach unten gescrollt werden.
    - `left`
      - : Der Container kann nach links gescrollt werden.
    - `x`
      - : Der Container kann horizontal zu beiden seiner linken oder rechten Kanten gescrollt werden.
    - `y`
      - : Der Container kann vertikal zu beiden seiner oberen oder unteren Kanten gescrollt werden.
    - `block-start`
      - : Der Container kann zu seiner Block-Startkante gescrollt werden.
    - `block-end`
      - : Der Container kann zu seiner Block-Endkante gescrollt werden.
    - `inline-start`
      - : Der Container kann zu seiner Inline-Startkante gescrollt werden.
    - `inline-end`
      - : Der Container kann zu seiner Inline-Endkante gescrollt werden.
    - `block`
      - : Der Container kann in seiner Blockrichtung zu beiden seiner Block-Startkante oder Block-Endkante gescrollt werden.
    - `inline`
      - : Der Container kann in seiner Inlinerichtung zu beiden seiner Inline-Startkante und Inline-Endkante gescrollt werden.

    Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf Nachfahren des Scroll-Containers angewendet.

    Um festzustellen, ob ein Container scrollbar ist, ohne auf die Richtung zu achten, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(scrollable: none) {
      /* … */
    }
    ```

- `snapped`
  - : Fragt ab, ob der Container an einen [scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Container-Vorfahren entlang der angegebenen Achse angeknipst wird. Gültige `snapped` Werte beinhalten die folgenden Schlüsselwörter:
    - `none`
      - : Der Container ist kein Scroll-{{Glossary("Scroll_snap#snap_target", "Snap-Target")}} für seinen Vorfahren-Scroll-Container. Bei der Implementierung einer `snapped: none`-Abfrage werden Container, die _sind_ Snap-Targets für den Scroll-Container, _nicht_ die `@container`-Stile haben, während Nicht-Snap-Targets _werden_ die Stile haben.
    - `x`
      - : Der Container ist ein horizontaler Scroll-Snap-Target für seinen Vorfahren-Scroll-Container, das bedeutet, er schnappt horizontal zu seinem Vorfahren.
    - `y`
      - : Der Container ist ein vertikaler Scroll-Snap-Target für seinen Vorfahren-Scroll-Container, das bedeutet, er schnappt vertikal zu seinem Vorfahren.
    - `block`
      - : Der Container ist ein Block-Achsis-Scroll-Snap-Target für seinen Vorfahren-Scroll-Container, das bedeutet, er schnappt zu seinem Vorfahren in der Blockrichtung.
    - `inline`
      - : Der Container ist ein Inline-Achsis-Scroll-Snap-Target für seinen Vorfahren-Scroll-Container, das bedeutet, er schnappt zu seinem Vorfahren in der Inlinerichtung.
    - `both`
      - : Der Container ist sowohl ein horizontaler als auch vertikaler Scroll-Snap-Target für seinen Vorfahren-Scroll-Container und wird zu seinem Vorfahren in beide Richtungen gesnappt. Der Container wird nicht übereinstimmen, wenn er nur zu seinem Vorfahren entlang der horizontalen _oder_ vertikalen Achse schnappt. Es muss beides sein.

    Um einen Container mit einer nicht-`none` `snapped` Scroll-Zustands-Abfrage zu bewerten, muss es ein Container mit einem Scroll-Container-Vorfahren sein, der einen {{cssxref("scroll-snap-type")}} Wert hat, der nicht `none` ist. Eine `snapped: none`-Abfrage wird übereinstimmen, auch wenn es keinen Scroll-Container-Vorfahren gibt.

    Bewertungen erfolgen, wenn [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignisse am Scroll-Snap-Container ausgelöst werden. Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf Nachfahren des Containers angewendet.

    Um festzustellen, ob ein Container ein Snap-Target ist, ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(snapped: none) {
      /* … */
    }
    ```

- `stuck`
  - : Fragt ab, ob ein Container mit einem {{cssxref("position")}} Wert von [`sticky`](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#sticky_positioning) an einer Kante seines Vorfahren-Scroll-Containers "klebt". Gültige 'stuck'-Werte beinhalten die folgenden Schlüsselwörter:
    - `none`
      - : Der Container klebt nicht an irgendwelchen Rändern seines Containers. Beachten Sie, dass `none`-Abfragen übereinstimmen, selbst wenn der Container nicht `position: sticky` darauf hat.
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

    Für die Bewertung eines Containers mit einer nicht-`none` `stuck` Scroll-Zustands-Abfrage, muss `position: sticky` darauf gesetzt sein, und ein Scroll-Container-Vorfahren vorhanden sein. Wenn der Test erfolgreich ist, werden die Regeln innerhalb des `@container`-Blocks auf Nachfahren des `position: sticky` Containers angewendet.

    Es ist möglich, dass zwei Werte von gegenüberliegenden Achsen gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: top) and (stuck: left)) {
      /* … */
    }
    ```

    Allerdings werden zwei Werte von gegenüberliegenden Rändern niemals gleichzeitig übereinstimmen:

    ```css
    @container scroll-state((stuck: left) and (stuck: right)) {
      /* … */
    }
    ```

    Um festzustellen, ob ein Container "klebt", ohne sich um die Richtung zu kümmern, verwenden Sie den Wert `none` mit dem `not`-Operator:

    ```css
    @container not scroll-state(stuck: none) {
      /* … */
    }
    ```

## Formale Syntax

{{csssyntax}}

## Beispiele

### Stile basierend auf der Größe eines Containers einstellen

Betrachten Sie das folgende Beispiel einer Kartenkomponente mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Ein Container-Kontext kann mit der `container-type`-Eigenschaft erstellt werden, in diesem Fall mit dem `inline-size`-Wert auf der `.post`-Klasse. Sie können dann die `@container`-Regel verwenden, um Stile auf das Element mit der `.card`-Klasse in einem Container anzuwenden, der schmaler ist als `650px`.

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

Angenommen, das folgende HTML-Beispiel ist eine Kartenkomponente mit einem Titel und einem Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Zuerst erstellen Sie einen Container-Kontext mit den Eigenschaften `container-type` und `container-name`. Die Kurznotation für diese Deklaration ist auf der {{cssxref("container")}}-Seite beschrieben.

```css
.post {
  container-type: inline-size;
  container-name: summary;
}
```

Als nächstes richten Sie den Container aus, indem Sie den Namen zur Container-Abfrage hinzufügen:

```css
@container summary (width >= 400px) {
  .card {
    font-size: 1.5em;
  }
}
```

### Verschachtelte Container-Abfragen

Es ist nicht möglich, mehrere Container in einer einzigen Container-Abfrage anzusprechen. Es ist möglich, verschachtelte Container-Abfragen zu verwenden, die denselben Effekt haben.

Die folgende Abfrage wird als wahr bewertet und wendet den deklarierten Stil an, wenn der Container mit dem Namen `summary` breiter ist als `400px` und ein Vorfahren-Container breiter ist als `800px`:

```css
@container summary (width > 400px) {
  @container (width > 800px) {
    /* <stylesheet> */
  }
}
```

### Container-Stilabfragen

Container-Abfragen können auch den berechneten Stil des Containerelements bewerten. Eine _Container-Stilabfrage_ ist eine `@container`-Abfrage, die eine oder mehrere `style()`-Funktionalitäten nutzt. Die boolesche Syntax und Logik, um Stilmerkmale zu einer Stilabfrage zu kombinieren, ist die gleiche wie für [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()` ist ein einzelnes `<style-feature>`. Ein **`<style-feature>`** ist eine gültige CSS-[Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values).

```css
@container style(--themeBackground),
    not style(background-color: red),
    style(color: green) and style(background-color: transparent),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Ein Stilmerkmal ohne Wert wird als wahr bewertet, wenn der berechnete Wert von dem Anfangswert der gegebenen Eigenschaft abweicht.

Wenn das `<style-feature>`, das als Argument der `style()`-Funktion übergeben wird, eine Deklaration ist, wird die Stilabfrage als wahr bewertet, wenn der Wert der Deklaration derselbe ist wie der berechnete Wert dieser Eigenschaft für den abgefragten Container. Andernfalls wird sie als falsch bewertet.

Die folgende Container-Abfrage prüft, ob der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der `--accent-color` des Containerelements `blau` ist:

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

> [!NOTE]
> Wenn eine benutzerdefinierte Eigenschaft einen Wert von `blau` hat, wird der äquivalente Hexadezimalcode `#0000ff` nicht übereinstimmen, es sei denn, die Eigenschaft wurde als Farbe mit {{cssxref("@property")}} definiert, sodass der Browser die berechneten Werte ordnungsgemäß vergleichen kann.

Stilmerkmale, die eine Kurzschrift-Eigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langschreib-Eigenschaften übereinstimmen, und falsch, andernfalls. Zum Beispiel wird `@container style(border: 2px solid red)` als wahr bewertet, wenn alle 12 Langschreib-Eigenschaften (`border-bottom-style`, etc.), die diese Kurzschrift ausmachen, wahr sind.

Die globalen `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und verursachen, dass die Container-Stilabfrage als falsch bewertet wird.

### Scroll-Zustands-Abfragen

Sehen Sie [Verwendung von Scroll-Zustands-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) für vollständige Durchführungen von Scroll-Zustands-Abfrage-Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustands-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("contain")}}
- {{Cssxref("content-visibility")}}
- [CSS-Containment-Modul](/de/docs/Web/CSS/CSS_containment)
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
