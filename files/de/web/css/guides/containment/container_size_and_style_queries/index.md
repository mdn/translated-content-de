---
title: Verwenden von Containergrößen- und Stilabfragen
slug: Web/CSS/Guides/Containment/Container_size_and_style_queries
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

[Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries) ermöglichen es Ihnen, Stile auf Elemente anzuwenden, die in einem bestimmten Container verschachtelt sind, basierend auf den Eigenschaften dieses Containers. Die Abfrage liefert `true` oder `false`, je nachdem, ob die Abfragebedingung für den Container zutrifft.

Containerabfragen ähneln [Media Queries](/de/docs/Web/CSS/Guides/Media_queries). Die {{cssxref("@media")}} At-Regel ermöglicht die Anwendung von Stilen auf Elemente basierend auf der Größe des Viewports oder anderen Gerätemerkmalen. Ähnlich ermöglicht die {{cssxref("@container")}} At-Regel die Anwendung von Stilen auf Elemente basierend auf der Größe oder anderen Stileigenschaften eines Containerelements, anstatt des Viewports. Containerabfragen haben die gleichen Syntaxregeln und logischen Operatoren wie Media Queries.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt drei Arten von Containerabfragen:

- **Containergrößenabfragen**
  - : Größenabfragen ermöglichen es, Stile auf Elemente basierend auf der aktuellen [Größe](/de/docs/Web/CSS/Reference/At-rules/@container#descriptors) eines Containerelements anzuwenden, einschließlich der Ausrichtung und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}}. Die Containerelemente müssen explizit als _Größenabfrage-Container_ deklariert werden.

- **Containerstilabfragen**
  - : Stilabfragen ermöglichen es, Stile auf Elemente basierend auf den Stileigenschaften eines Containerelements anzuwenden. Jedes nicht-leere Element kann ein Stilabfrage-Container sein. Derzeit ist die einzige von Stilabfragen unterstützte Stileigenschaft CSS [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties). In diesem Fall gibt die Abfrage `true` oder `false` zurück, abhängig vom berechneten Wert der benutzerdefinierten Eigenschaften des Containerelements. Wenn Containerstilabfragen vollständig unterstützt werden, ermöglichen sie es, Stile für Nachfahren eines jeden Elements basierend auf jeder Eigenschaft, Deklaration oder berechnetem Wert anzuwenden — zum Beispiel, ob der Container `display: inline flex` ist oder eine nicht-transparente Hintergrundfarbe hat.

- **[Container-Scrollstatus-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)**
  - : Scrollstatus-Abfragen erlauben es, CSS-Regeln selektiv auf die Nachfahren eines Containers basierend auf Scrollstatus-Bedingungen anzuwenden, wie ob das abgefragte Element teilweise gescrollt ist oder ob der Container an einem Scroll-Snap-Container eingerastet ist. Die Containerelemente müssen explizit als _Scrollstatus-Abfrage-Container_ deklariert werden.

In diesem Leitfaden lernen wir die Grundlagen von Containerabfragen durch:

1. [Containergrößenabfragen](#container_size_queries_2),
2. das [Benennen von Containern](#benennen_von_containern), um ihren Geltungsbereich zu begrenzen, und
3. die Verwendung der `style()` Funktionalnotation innerhalb der {{cssxref("@container")}} At-Regel `<container-condition>`, um [Stilabfragen mit benutzerdefinierten Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

Scrollstatus-Abfragen werden in [Verwenden von Container-Scrollstatus-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) behandelt.

## Containergrößenabfragen

Containergrößenabfragen werden durch eine Größenbedingung gefiltert. Die zugehörigen Stile werden auf enthaltene Elemente angewendet, wenn das Containerelement als Container deklariert wurde und die Containerbedingung für dieses Element zutrifft. Der Größencontainer eines Elements ist der nächstgelegene Vorfahre mit Containment.

Elemente werden als _Größenabfrage-Container_ deklariert, indem ihre {{cssxref("container-type")}} Eigenschaft (oder die {{cssxref("container")}} Kurzform) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Das Deklarieren von Größenabfrage-Containern fügt ihnen [Containment](/de/docs/Web/CSS/Guides/Containment/Using) hinzu. Dies ist eine Leistungsnotwendigkeit — die Größe jedes Elements im DOM jederzeit abzufragen, wäre schlecht für die Leistung und Benutzererfahrung. Außerdem könnte eine unendliche Schleife auftreten, wenn ein Nachfahrenstil die Größe des Containerelements ändern würde.

In einer Containergrößenabfrage umfasst die `<container-condition>` eine oder mehrere `<size-query>`s. Jede Größenabfrage enthält einen Größenmerkmalsnamen, einen Vergleichsoperator und einen Wert. Die Größenmerkmale, die abgefragt werden können, sind auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation` beschränkt. Die boolesche Syntax und Logik, die eine oder mehrere `<size-query>`s kombiniert, ist die gleiche wie für [`@media`](/de/docs/Web/CSS/Reference/At-rules/@media) Größenmerkmalabfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Die `<container-condition>` in diesem Beispiel enthält eine einzelne `<size-query>` — `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}} Elemente mögliche Übereinstimmungen für jede unbenannte Containerabfrage. Die innerhalb unserer Containerabfrage deklarierten Stile gelten für die Nachfahren aller Formulare zwischen `10em` und `30em` Breite, einschließlich.

## Benennen von Containern

Eine `<container-condition>` kann einen optionalen, groß-/kleinschreibungssensitiven {{cssxref("container-name")}} enthalten. Ein Containername macht die Containerbedingung spezifischer — er wird nur gegen Elemente ausgewertet, die diesen Namen in der `container-name` Eigenschaft gesetzt haben.

Die {{cssxref("container-name")}} Eigenschaft gibt eine Liste von Abfrage-`<container-name>`-Werten an, die in `@container` Regeln verwendet werden können; diese sind groß-/kleinschreibungssensitive {{cssxref("ident")}}-Werte. Die Container-Namen ermöglichen das Anvisieren jedes Container-Vorfahren des Elements. Ohne einen Container-Namen stimmt die Abfrage nur mit dem nächstgelegenen Container-Vorfahren überein.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Namen zu Ihren `@container` At-Regeln hinzugefügt haben, können Sie die {{cssxref("container-name")}} Eigenschaft oder die {{cssxref("container")}} Kurzform verwenden, um spezifische Containerelemente zu zielen. Stile innerhalb der benannten `@container` At-Regeln werden nur auf übereinstimmende Elemente innerhalb von Containern mit diesen gesetzten Namen angewendet, die die Containerabfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel werden die Stile innerhalb des Containerabfrageblocks auf die Nachfahren aller {{htmlelement("li")}} Elemente mit einer Breite, die größer als ihre Höhe ist, angewendet. Beachten Sie, dass andere Elemente mit `container-name: card` darauf angewendet, die die Größenabfrage erfüllen, auch diese Stile auf die Nachfahren ihrer Elemente angewendet haben.

```css
@container wide (width >= 20em) {
  /* styles applied to descendants of wide .sizeContainer */
}

@container narrow (width < 20em) {
  /* styles applied to descendants of narrow .sizeContainer */
}

.sizeContainer {
  container-type: size;
  container-name: wide narrow;
}
```

Im obigen Beispiel hat das Element zwei Containernamen, `wide` und `narrow`. Die Nachfahren aller Elemente mit `class="sizeContainer"` erhalten die Stile aus der `wide` oder `narrow` Abfrage angewendet.

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer ist, aber er kann immer noch ein [Stilcontainer](#containerstilabfragen) sein. Der Standardwert `container-name: none` gibt an, dass der Container keinen Namen hat, es verhindert jedoch nicht, dass das Element mit unbenannten Abfragen übereinstimmt.

Mit Containerabfragen sind wir nicht auf Größenabfragen beschränkt! Sie können auch die Stileigenschaften eines Containers abfragen.

## Containerstilabfragen

Eine _Containerstilabfrage_ ist eine `@container` Abfrage, die die berechneten Stile des Container-Elements auswertet, wie in einer oder mehreren `style()` Funktionalnotationen definiert. Die boolesche Syntax und Logik, die verwendet wird, um Stilmerkmale in eine Stilabfrage zu kombinieren, sind die gleichen wie in [CSS Feature Queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname — `style()` innerhalb eines `<style-feature>` im Gegensatz zu `supports()` innerhalb eines `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()` Funktion ist ein einzelnes **`<style-feature>`**. Gemäß der CSS Containment-Spezifikation kann ein `<style-feature>` eine gültige CSS [Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values) sein. Das einzige derzeit unterstützte Stilmerkmal sind benutzerdefinierte Eigenschaften, mit oder ohne Wert. Siehe die [Browser-Kompatibilitätstabelle für `@container`](/de/docs/Web/CSS/Reference/At-rules/@container#browser_compatibility).

Wenn das `<style-feature>` einen Wert enthält, wird die Stilabfrage als wahr ausgewertet, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder, in Zukunft, der CSS-Deklaration), der als `style()` Argument übergeben wird, für den abgefragten Container wahr ist. Andernfalls ergibt es `false`.
Ein Stilmerkmal ohne Wert wird als wahr bewertet, wenn der berechnete Wert vom [Initialwert](#registrierte_eigenschaften) für die gegebene Eigenschaft abweicht.

In Zukunft werden wir Stilabfragen wie folgt schreiben können:

```css
@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple),
    (width <= 100vw) and style(max-width: 600px) {
  /* <stylesheet> */
}
```

Die `style()` Funktionalnotation wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Während sie noch nicht unterstützt wird, können wir schließlich reguläre CSS-Deklarationen wie `max-width: 600px` abfragen. Die Abfrage von `@container (max-width: 600px)` ist eine Größenabfrage; Containment mit {{cssxref("container-type")}}, oder die {{cssxref("container")}} Kurzform, ist notwendig. Diese Abfrage ergibt `true`, wenn der Container 600px oder weniger ist. Das unterscheidet sich von der Abfrage `@container style(max-width: 600px)`, die eine Stilabfrage ist; wenn unterstützt, wird diese Abfrage `true` ergeben, wenn der Container einen {{cssxref("max-width")}} Wert von `600px` hat.

Bis Stilabfragen für reguläre CSS-Deklarationen und -Eigenschaften unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als `style()` Parameter einzubinden, mit oder ohne Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige Dinge, die zu beachten sind, die bereits erwähnt wurden, aber wichtig sind, sich zu erinnern:

- Alle Elemente können Stilabfrage-Container sein; das Setzen eines `container-type` ist nicht erforderlich. Wenn Nachfahrenstile die berechneten Stile eines Vorfahren nicht beeinflussen, ist Containment nicht notwendig.
- Eine `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Sie Größenmerkmale in Ihre Abfrage einbeziehen, stellen Sie sicher, dass Ihre Containerelemente einen `container-type` von `size` oder `inline-size` gesetzt haben.
- Wenn Sie nicht möchten, dass ein Element jemals als Container betrachtet wird, geben Sie ihm einen `container-name`, der nicht verwendet wird. Das Setzen von `container-name: none` entfernt alle Abfragenamen, die einem Container zugewiesen sind; es verhindert nicht, dass das Element ein Stilcontainer ist.
- Zum Zeitpunkt des Schreibens (Februar 2024) arbeiten Containerstilabfragen nur mit CSS-Werten für benutzerdefinierte Eigenschaften in der `style()` Abfrage.

Nun, lassen Sie uns eintauchen und einen Blick auf die verschiedenen `<style-feature>` Typen werfen.

### Stilabfragen für benutzerdefinierte Eigenschaften

Stilabfragen für benutzerdefinierte Eigenschaften ermöglichen es Ihnen, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), auch "CSS-Variablen" genannt, eines übergeordneten Elements abzufragen. Sie werden innerhalb einer `<style-query>` genauso eingebunden, wie Sie eine reguläre CSS-Eigenschaft innerhalb einer Feature-Abfrage einbinden würden: entweder mit oder ohne Wert.

#### Unabhängige Abfragen benutzerdefinierter Eigenschaften

Der `<style-query>` Parameter der `style()` Funktionalnotation kann nur einen CSS-Variablennamen enthalten; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert eingebunden ist, wird die Abfrage `false` zurückgeben, wenn der Wert derselbe ist wie der Wert des `initial-value` Deskriptors innerhalb der `@property` At-Regel, falls vorhanden. Die Stilabfrage wird `true` zurückgeben und mit allen Elementen übereinstimmen, die einen benutzerdefinierten Eigenschaftswert haben, der vom `initial-value` abweicht, oder mit allen Elementen, die eine benutzerdefinierte Eigenschaft von irgendeinem Wert haben, falls die benutzerdefinierte Eigenschaft ohne Registrierung deklariert wurde.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen über einen CSS-Wert für benutzerdefinierte Eigenschaften eingeführt werden, geben abfragelose benutzerdefinierte Eigenschaftsabfragen immer `true` zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel stimmt die Containerabfrage mit dem Element überein, auf dem die `--theme-color` Eigenschaft deklariert wurde, und allen seinen Nachfahren. Da die CSS-Variable `--theme-color` auf dem {{cssxref(":root")}} deklariert wurde, wird die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}} Knotens wahr sein.

##### Registrierte Eigenschaften

Das Verhalten registrierter benutzerdefinierter Eigenschaften ist anders. Wenn sie explizit mit der {{cssxref("@property")}} CSS At-Regel oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert wurden, gibt die Stilabfrage `style(--theme-color)` nur dann `true` für Elemente zurück, wenn der berechnete Wert des Elements für `--theme-color` vom [`initial-value`](/de/docs/Web/CSS/Reference/At-rules/@property/initial-value) abweicht, der in der ursprünglichen Definition dieser benutzerdefinierten Eigenschaft festgelegt wurde.

```css
@property --theme-color {
  initial-value: rebeccapurple;
  inherits: true;
}

:root {
  --theme-color: rebeccapurple;
}

main {
  --theme-color: blue;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel stimmt das `:root` Element NICHT mit der Stilabfrage überein, weil der Wert der benutzerdefinierten Eigenschaft derselbe ist wie der `initial-value` Wert. Der benutzerdefinierte Eigenschaftswert für das Element (und alle Elemente, die den Wert erben) ist immer noch `rebeccapurple`. Nur Elemente, die vom Initialwert abweichen, in diesem Fall das {{htmlelement("main")}} und seine Nachfahren, die diesen geänderten Wert erben, stimmen überein.

#### Benutzerdefinierte Eigenschaft mit einem Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert dieser Eigenschaft des Elements eine exakte Übereinstimmung sein, wobei gleichwertige Werte nur dann eine Übereinstimmung sind, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}} At-Regel (oder einem [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) Methodenaufruf) mit einem `syntax` Deskriptor definiert wurde.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Containerstilabfrage stimmt mit jedem Element überein, das `blue` als [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der benutzerdefinierten Eigenschaft `--accent-color` hat.

In diesem Fall werden andere Farbwerte, die dem sRGB `blue` entsprechen (wie der hexadezimale Code `#0000ff`), nur dann übereinstimmen, wenn die `--accent-color` Eigenschaft als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, zum Beispiel:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #0000ff;
}
```

In diesem Fall würde, wenn der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzt wird, dies für `@container style(--accent-color: blue)` wahr sein.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Optionsschaltflächen. Die vierte Option enthält ein Text-{{htmlelement("input")}}, um eine benutzerdefinierte Farbe einzugeben.

```html
<form>
  <fieldset>
    <legend>Change the value of <code>--theme</code></legend>
    <ol>
      <li>
        <input type="radio" name="selection" value="red" id="red" />
        <label for="red">--theme: red;</label>
      </li>
      <li>
        <input type="radio" name="selection" value="green" id="green" />
        <label for="green">--theme: green</label>
      </li>
      <li>
        <input type="radio" name="selection" value="blue" id="blue" />
        <label for="blue">--theme: blue</label>
      </li>
      <li>
        <input type="radio" name="selection" value="currentColor" id="other" />
        <label for="other">Other</label>
        <label for="color">color:</label>
        <input
          text="checkbox"
          name="selection-value"
          value="currentColor"
          id="color" />
      </li>
    </ol>
  </fieldset>
  <output>I change colors</output>
</form>
```

JavaScript aktualisiert den Wert der CSS-`--theme`-Variable auf dem {{htmlelement("body")}} Element, das ein Vorfahre der {{htmlelement("fieldset")}} und {{htmlelement("output")}} Elemente ist, wann immer eine Optionsschaltfläche ausgewählt wird. Wenn das Text-`<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) der `other` Optionsschaltfläche nur aktualisiert, wenn die `other` Optionsschaltfläche aktiviert ist, was wiederum den Wert von `--theme` aktualisiert.

```js
const radios = document.querySelectorAll('input[name="selection"]');
const body = document.querySelector("body");
const other = document.getElementById("other");
const color = document.getElementById("color");

for (const radio of radios) {
  radio.addEventListener("change", (e) => {
    body.style.setProperty("--theme", e.target.value);
  });
}
color.addEventListener("input", (e) => {
  other.style.setProperty("value", e.target.value);
  if (other.checked) {
    body.style.setProperty("--theme", e.target.value);
  }
});
```

Wir verwenden die `@property` At-Regel, um eine CSS-Variable `--theme` als einen {{cssxref("color_value", "&lt;color&gt;")}} Wert zu definieren und den `initial-value` auf `red` zu setzen, wodurch sichergestellt wird, dass gleichwertige Farben unabhängig davon, welche Syntax verwendet wird, übereinstimmen (zum Beispiel ist `red` gleich `rgb(255 0 0)`, `#ff0000` und `#f00`).

```css
@property --theme {
  syntax: "<color>";
  inherits: true;
  initial-value: red;
}
```

```css hidden
output {
  padding: 3px 5px;
  margin-top: 5px;
}
```

Die erste Stilmerkmalabfrage ist eine benutzerdefinierte Eigenschaft ohne Wert. Diese Abfrageart gibt `true` zurück, wenn der berechnete Wert der benutzerdefinierten Eigenschaft von dem `initial-value` dieser Eigenschaft abweicht. In diesem Fall wird sie `true` sein, wenn der Wert von `--theme` ein anderer Wert ist als jeder syntaktisch äquivalente Wert von `red` (wie `#ff0000`). Wenn dies wahr ist, wird das {{htmlelement("output")}} einen 5px gepunkteten Umriss haben. Die Umrissfarbe ist der aktuelle Wert von `--theme`. Die Standardtextfarbe ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777777;
  }
}
```

Die zweite und dritte Stilabfrage enthalten Werte für die benutzerdefinierte Eigenschaft. Diese stimmen überein, wenn der `--theme` Wert des Containers eine gleichwertige Farbe zu den aufgelisteten Werten ist, selbst wenn dieser Wert derselbe ist wie der `initial-value`. Die erste Abfrage stimmt mit Elementen überein, deren `--theme` Wert gleich `red`, `blue` oder `green` ist. Wenn dies der Fall ist, wird die {{cssxref("color")}} die Farbe des aktuellen Wertes von `--theme` sein (im Fall von `blue` und `green` wird das in der ersten Stilabfrage gesetzte graue überschrieben).

Die zweite Stilabfrage gibt an, dass der Inhalt des `<output>` fett gedruckt wird, wenn `--theme` gleichwertig zu `red` ist. Wir haben dies getan, um besser zu demonstrieren, dass die Containerabfrage eine Übereinstimmung ist.

```css
@container style(--theme: green) or style(--theme: blue) or style(--theme: red) {
  output {
    color: var(--theme);
  }
}

@container style(--theme: red) {
  output {
    font-weight: bold;
  }
}
```

{{EmbedLiveSample('example','100%','200')}}

Versuchen Sie es mit der Eingabe verschiedener Farbwerte in das Textfeld. Sie werden vielleicht bemerken, dass Werte, die sRGB-Äquivalente von `red` sind, das `<output>` rot machen — denn es stimmt mit `style(--theme: red)` überein — während der Umriss entfernt wird, weil `style(--theme)` `false` zurückgibt, wenn der Wert des Elements für `--theme` derselbe ist wie der Initialwert für `--theme`, der durch die `@property` At-Regel definiert wurde. Jeder nicht-rote sRGB-gültige Farbwert, einschließlich `currentColor` oder `hsl(180 100% 50%)`, macht die erste Stilabfrage `true`; es sind Werte, die sich vom `initial-value` unterscheiden.

Da wir `syntax: "<color>";` gesetzt haben, kann der CSS-Variable nur gültige `<color>` Werte zugewiesen werden. Gültige Werte für die {{cssxref("color")}} Eigenschaft, die keine Wert-`<color>` Werte sind, wie `unset` oder `inherit`, sind [ungültig](/de/docs/Web/CSS/Guides/Syntax/Error_handling) für diese benutzerdefinierte Eigenschaft und werden ignoriert.

Wenn Sie `unset` oder `gibberish` eingeben, aktualisiert das JavaScript das `style` auf dem {{HTMLElement("body")}} auf `--theme: unset` oder `--theme: gibberish`. Keines dieser ist eine Farbe. Beide sind ungültig und ignoriert. Das bedeutet, dass der Initialwert geerbt und unverändert bleibt, wobei `style(--theme)` `false` und `style(--theme: red)` `true` zurückgeben.

> [!NOTE]
> Beim Deklarieren benutzerdefinierter Eigenschaften sollten Sie in Betracht ziehen, `@property` mit dem {{cssxref("@property/syntax","syntax")}} Deskriptor zu verwenden, damit der Browser berechnete Werte richtig vergleichen kann.

### Verschachtelte Abfragen

Containerabfragen können innerhalb anderer Containerabfragen verschachtelt werden. Die innerhalb mehrerer verschachtelter Containerabfragen definierten Stile werden angewendet, wenn alle umschließenden Containerabfragen wahr sind.

```css
@container style(--theme: red) {
  output {
    outline: 1px dotted;
  }
  @container style(--theme: purple) {
    output {
      outline: 5px dotted;
    }
  }
}
```

In diesem Fall wird das `<output>` einen 5px gepunkteten Rahmen haben, wenn es in einem Container verschachtelt ist, in dem `--theme: purple` gesetzt ist, und dieser Container innerhalb eines Containers verschachtelt ist, dessen `--theme` Wert `red` ist.

### Stilabfragen mit CSS-Deklarationen und -Eigenschaften

Noch nicht in irgendeinem Browser unterstützt, kann die `style()` Funktionalnotation reguläre CSS-Deklarationen einschließlich CSS-Eigenschaften und Eigenschaftswertpaaren umfassen.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn unterstützt, wird dieses einfache Beispiel den Hintergrund jeder {{htmlelement("b")}} und {{htmlelement("strong")}} Elemente gelb machen, wenn das Elternteil bereits `bold` ist.

Die Übereinstimmung erfolgt gegen den berechneten Wert des übergeordneten Containers; wenn das berechnete {{cssxref("font-weight")}} des Elternteils `bold` ist (nicht `bolder` oder `900`), gibt es eine Übereinstimmung. Genau wie bei benutzerdefinierten Eigenschaftscontainer-Stilabfragen mussten wir keine Elemente als Stilcontainer definieren, da alle Elemente standardmäßig Stilcontainer sind. Solange ein Element keinen `container-name` gesetzt hat, wird es übereinstimmen, wenn es `font-weight: bold` gesetzt oder geerbt hat.

Stilmerkmale, die eine Kurzereigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langformeigenschaften übereinstimmen, und falsch, wenn nicht. Zum Beispiel wird `@container style({{cssxref("border")}}: 2px solid red)` `true` ergeben, wenn alle 12 Langformeigenschaften ({{cssxref("border-bottom-style")}}, usw.), die diese Kurzform ausmachen, auf die gleichen äquivalenten Werte gesetzt sind.

Die globalen CSS-Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen zu `false` in der Containerstilabfrage.

Wenden Sie nicht die Stile an, die Sie in der Stilabfrage abfragen, auf das Element an, das Sie mit dieser Abfrage stylen, da dies zu einer Endlosschleife führen kann.

Es wird erwartet, dass Stilabfragen auch Eigenschaften in einem booleschen Kontext akzeptieren. Die Stilabfrage gibt `false` zurück, wenn der Wert der Eigenschaft der Initialwert für diese Eigenschaft ist (wenn er nicht geändert wurde) und `true`, wenn nicht.

```css
@container style(font-weight) {
}
```

Das obige Beispiel gibt `true` zurück, für jedes Element, das einen Wert für `font-weight` hat, der von seinem Initialwert abweicht. Benutzer-Agent-Stylesheets setzen `font-weight: bold` für {{htmlelement("heading_elements", "heading")}} und {{htmlelement("th")}} Elemente zum Beispiel. Einige Browser setzen bei {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} hat auch manchmal ein anderes als `normal` gesetztes `font-weight`, das von den Benutzeragenten kommt. Solange das `font-weight` des Elements nicht der Standardwert für diesen Benutzeragenten ist, wird die Stilabfrage `true` zurückgeben.

Diese Funktionen werden noch nicht in irgendeinem Browser unterstützt.

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries)
- CSS {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("contain")}} Eigenschaft
- CSS {{Cssxref("container")}} Kurzform Eigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- [Verwenden von Container-Scrollstatus-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verständnis von `aspect-ratio`](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [Einstieg in Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) über una.im (2022)
