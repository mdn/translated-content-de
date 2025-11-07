---
title: Verwendung von Containergrößen- und Stilabfragen
slug: Web/CSS/CSS_containment/Container_size_and_style_queries
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

[Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) ermöglichen es Ihnen, Stile für Elemente, die in einem bestimmten Container verschachtelt sind, basierend auf den Eigenschaften dieses Containers anzuwenden. Die Abfrage gibt wahr oder falsch zurück, je nachdem, ob die Abfragebedingung für den Container zutrifft.

Container-Abfragen sind ähnlich wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries). Mit der {{cssxref("@media")}} At-Regel können Sie Stile für Elemente basierend auf der Größe des Ansichtsfensters oder anderen Gerätemerkmalen anwenden. Ebenso ermöglicht die {{cssxref("@container")}} At-Regel das Anwenden von Stilen auf Elemente basierend auf der Größe oder anderen Stilmerkmalen eines enthaltenden Elements, anstatt auf die des Ansichtsfensters. Container-Abfragen haben dieselben Syntaxregeln und logischen Operatoren wie Media Queries.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt drei Arten von Container-Abfragen:

- **Containergrößen-Abfragen**
  - : Größenabfragen ermöglichen es, Stile für Elemente basierend auf der aktuellen [Größe](/de/docs/Web/CSS/Reference/At-rules/@container#descriptors) eines enthaltenden Elements anzuwenden, einschließlich der Ausrichtung und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}}. Die enthaltenden Elemente müssen explizit als _Größenabfrage-Container_ deklariert werden.

- **Containerstil-Abfragen**
  - : Stilabfragen ermöglichen es, Stile für Elemente basierend auf den Stilmerkmalen eines enthaltenden Elements anzuwenden. Jedes nicht-leere Element kann ein Stilabfrage-Container sein. Derzeit ist das einzige von Stilabfragen unterstützte Stilmerkmal die CSS [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties). In diesem Fall gibt die Abfrage wahr oder falsch zurück, je nachdem, wie der berechnete Wert der benutzerdefinierten Eigenschaften des enthaltenen Elements ist. Sobald Containerstilabfragen vollständig unterstützt werden, können Sie Stile auf die Nachfahren jedes Elements basierend auf beliebigen Eigenschaften, Deklarationen oder berechneten Werten anwenden – zum Beispiel, wenn der Container `display: inline flex` oder eine nicht-transparente Hintergrundfarbe hat.

- **[Container-Scrollzustands-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)**
  - : Scrollzustands-Abfragen ermöglichen es Ihnen, CSS-Regeln selektiv auf die Nachfahren eines Containers basierend auf Scrollzustands-Bedingungen anzuwenden, beispielsweise ob das abgefragte Element teilweise gescrollt ist oder ob der Container an einen Scroll-Snap-Container gefügt ist. Die enthaltenden Elemente müssen explizit als _Scrollzustands-Abfrage-Container_ deklariert werden.

In diesem Leitfaden lernen wir die Grundlagen von Container-Abfragen anhand von:

1. [Containergrößen-Abfragen](#container_size_queries_2),
2. [Benennung von Containern](#benennung_von_containern) zur Einschränkung ihres Anwendungsbereichs und
3. der Verwendung der `style()` funktionalen Notation innerhalb der {{cssxref("@container")}} At-Regel`s `<container-condition>`, um [Stilabfragen mit benutzerdefinierten Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

Scrollzustands-Abfragen werden in [Verwenden von Container-Scrollzustands-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) behandelt.

## Containergrößen-Abfragen

Containergrößen-Abfragen werden durch eine Größenbedingung gefiltert. Die zugehörigen Stile werden auf enthaltene Elemente angewendet, wenn das Container-Element als Container deklariert wurde und die Container-Bedingung für dieses Element zutrifft. Der Größencontainer eines Elements ist der nächstgelegene Vorfahr mit Einschließung.

Elemente werden als _Größenabfrage-Container_ deklariert, indem ihre {{cssxref("container-type")}} Eigenschaft (oder die {{cssxref("container")}} Kurzform) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Das Deklarieren von Größenabfrage-Containern fügt ihnen [Einschließung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) hinzu. Dies ist eine Leistungsanforderung — die Abfrage der Größe jedes Elements im DOM die ganze Zeit wäre schlecht für die Leistung und Benutzererfahrung. Darüber hinaus könnte es zu einer Endlosschleife kommen, wenn ein Nachfahrstil die Größe des Container-Elements änderte.

In einer Containergrößen-Abfrage enthält das `<container-condition>` eine oder mehrere `<size-query>`s. Jede Größenabfrage umfasst einen Größenmerkmalnamen, einen Vergleichsoperator und einen Wert. Die Größenmerkmale, die abgefragt werden können, sind auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation` beschränkt. Die boolesche Syntax und Logik zur Kombination eines oder mehrerer `<size-query>`s entspricht der von [`@media`](/de/docs/Web/CSS/Reference/At-rules/@media) Größenmerkmalabfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Das `<container-condition>` in diesem Beispiel enthält eine einzelne `<size-query>` — `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}} Elemente potenzielle Übereinstimmungen für jede unbenannte Container-Abfrage. Die in unserer Container-Abfrage deklarierten Stile gelten für die Nachfahren aller Formulare zwischen `10em` und `30em` Breite, einschließlich.

## Benennung von Containern

Ein `<container-condition>` kann einen optionalen, groß-/kleinschreibungssensitiven {{cssxref("container-name")}} enthalten. Ein Containername macht die Container-Bedingung spezifischer — sie wird nur gegen Elemente ausgewertet, die diesen Namen in der `container-name` Eigenschaft gesetzt haben.

Die {{cssxref("container-name")}} Eigenschaft gibt eine Liste von Abfrage-`<container-name>` Werten an, die in `@container` Regeln verwendet werden können; dies sind groß-/kleinschreibungssensitive {{cssxref("ident")}} Werte. Die Container-Namen ermöglichen das Zielen auf jeden Container-Vorfahren des Elements. Ohne einen Container-Namen stimmt die Abfrage nur mit dem nächstgelegenen Container-Vorfahren überein.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Namen zu Ihren `@container` At-Regeln hinzugefügt haben, können Sie die {{cssxref("container-name")}} Eigenschaft oder die {{cssxref("container")}} Kurzform verwenden, um bestimmte Container-Elemente anzusprechen. Stile innerhalb der benannten `@container` At-Regeln werden nur auf übereinstimmende Elemente innerhalb von Containern mit diesen Namen angewendet, die die Container-Abfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel werden die Stile innerhalb des Container-Abfrageblocks auf die Nachfahren aller {{htmlelement("li")}} Elemente mit einer Breite angewendet, die größer ist als ihre Höhe. Beachten Sie, dass andere Elemente mit `container-name: card` auf sie angewendet, die mit der Größenabfrage übereinstimmen, ebenfalls diese Stile auf die Nachfahren ihrer Elemente anwenden.

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

Im obigen Beispiel hat das Element zwei Containernamen, `wide` und `narrow`. Die Nachkommen von Elementen mit `class="sizeContainer"` erhalten die Stile aus der `wide` oder `narrow` Abfrage angewendet.

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer ist, aber er kann trotzdem ein [Stilcontainer](#containerstil-abfragen) sein. Der Standardwert `container-name: none` gibt an, dass der Container keinen Namen hat, verhindert jedoch nicht, dass das Element mit unbenannten Abfragen übereinstimmt.

Mit Container-Abfragen sind wir nicht nur auf Größenabfragen beschränkt! Sie können auch die Stilmerkmale eines Containers abfragen.

## Containerstil-Abfragen

Eine _Containerstil-Abfrage_ ist eine `@container` Abfrage, die berechnete Stile des Container-Elements auswertet, wie in einem oder mehreren `style()` funktionalen Notationen definiert. Die boolesche Syntax und Logik zur Kombination von Stilmerkmalen in einer Stilabfrage entspricht der in [CSS Feature Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname — `style()` innerhalb eines `<style-feature>` anstelle von `supports()` innerhalb eines `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()` Funktion ist ein einziger **`<style-feature>`**. Nach der CSS-Einschließungsspezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), ein CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values) sein. Derzeit wird nur das Stilmerkmal benutzerdefinierte Eigenschaften unterstützt, mit oder ohne Wert. Siehe die [Browser-Kompatibilitätstabelle für `@container`](/de/docs/Web/CSS/Reference/At-rules/@container#browser_compatibility).

Wenn das `<style-feature>` einen Wert enthält, ergibt die Stilabfrage wahr, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder in Zukunft der CSS-Deklaration), die als `style()` Argument übergeben wird, für den abgefragten Container zutrifft. Andernfalls wird es zu falsch aufgelöst. Ein Stilmerkmal ohne Wert ergibt wahr, wenn der berechnete Wert von dem [Anfangswert](#registrierte_eigenschaften) für die gegebene Eigenschaft abweicht.

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

Die `style()` funktionale Notation wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Während noch nicht unterstützt, werden wir schließlich in der Lage sein, reguläre CSS-Deklarationen wie `max-width: 600px` abzufragen. Die Abfrage `@container (max-width: 600px)` ist eine Größenabfrage; eine Einschließung mit {{cssxref("container-type")}} oder die {{cssxref("container")}} Kurzform wird benötigt. Diese Abfrage wird wahr zurückgeben, wenn der Container 600px oder weniger ist. Dies unterscheidet sich von der Abfrage `@container style(max-width: 600px)`, die eine Stilabfrage ist; wenn sie unterstützt wird, wird diese Abfrage wahr zurückgeben, wenn der Container einen {{cssxref("max-width")}} Wert von `600px` hat.

Bis stilbezogene Abfragen für reguläre CSS-Deklarationen und Eigenschaften unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als `style()` Parameter einzuschließen, mit oder ohne Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige Dinge zu beachten, die bereits erwähnt wurden, aber wichtig zu behalten sind:

- Alle Elemente können Stilabfrage-Container sein; das Setzen eines `container-type` ist nicht erforderlich. Wenn Nachfahrenstile die berechneten Stile eines Vorfahren nicht beeinflussen, ist keine Einschließung erforderlich.
- Ein `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Sie Größenmerkmale in Ihrer Abfrage einfügen, stellen Sie sicher, dass Ihre Container-Elemente einen `container-type` von `size` oder `inline-size` gesetzt haben.
- Wenn Sie nicht möchten, dass ein Element jemals als Container betrachtet wird, geben Sie ihm einen `container-name`, der nicht verwendet wird. Das Setzen von `container-name: none` entfernt alle mit einem Container verbundenen Abfragenamen; es verhindert nicht, dass das Element ein Stilcontainer ist.
- Zum Zeitpunkt des Schreibens (Februar 2024) arbeiten Containerstil-Abfragen nur mit CSS-Werten für benutzerdefinierte Eigenschaften in der `style()` Abfrage.

Nun, lassen Sie uns einen Blick auf die verschiedenen `<style-feature>` Arten werfen.

### Stilabfragen für benutzerdefinierte Eigenschaften

Stilabfragen für benutzerdefinierte Eigenschaften erlauben es Ihnen, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), auch "CSS-Variablen" genannt, eines Elternelements abzufragen. Sie sind in einer `<style-query>` enthalten, genau wie Sie eine reguläre CSS-Eigenschaft innerhalb einer Feature-Abfrage einfügen würden: entweder mit oder ohne einen Wert.

#### Eigenständige benutzerdefinierte Eigenschaftsabfragen

Der `<style-query>` Parameter der `style()` funktionalen Notation kann nur einen CSS-Variablennamen enthalten; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert enthalten ist, wird die Abfrage falsch zurückgeben, wenn der Wert derselbe ist wie der Wert des `initial-value` Deskriptors innerhalb der `@property` At-Regel, falls vorhanden. Die Stilabfrage wird wahr zurückgeben und alle Elemente abgleichen, die einen benutzerdefinierten Eigenschaftswert haben, der sich vom `initial-value` unterscheidet oder für alle Elemente, die eine benutzerdefinierte Eigenschaft mit einem beliebigen Wert haben, wenn die benutzerdefinierte Eigenschaft ohne Registrierung deklariert wurde.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen über eine Zuweisung von CSS-Benutzerdefinierteigenschaftswerten eingeführt werden, geben wertlose benutzerdefinierte Eigenschaftsabfragen immer wahr zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel stimmt die Container-Abfrage mit dem Element überein, auf dem die `--theme-color` Eigenschaft deklariert wurde, und allen seinen Nachfahren. Da die CSS-Variable `--theme-color` auf dem {{cssxref(":root")}} deklariert wurde, wird die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}} Knotens wahr sein.

##### Registrierte Eigenschaften

Das Verhalten registrierter benutzerdefinierter Eigenschaften ist anders. Wenn sie explizit mit der {{cssxref("@property")}} CSS-At-Regel oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert werden, gibt die Stilabfrage `style(--theme-color)` nur wahr zurück, wenn der berechnete Wert für `--theme-color` des Elements sich vom [`initial-value`](/de/docs/Web/CSS/Reference/At-rules/@property/initial-value) unterscheidet, der in der ursprünglichen Definition dieser benutzerdefinierten Eigenschaft festgelegt wurde.

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

In diesem Beispiel stimmt das `:root` Element nicht mit der Stilabfrage überein, weil der Wert der benutzerdefinierten Eigenschaft derselbe ist wie der `initial-value` Wert. Der Wert der benutzerdefinierten Eigenschaft für das Element (und alle Elemente, die den Wert erben) ist weiterhin `rebeccapurple`. Nur Elemente, die sich vom Anfangswert unterscheiden, in diesem Fall der {{htmlelement("main")}} und seine Nachfahren, die diesen geänderten Wert erben, sind eine Übereinstimmung.

#### Benutzerdefinierte Eigenschaft mit einem Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert der Eigenschaft des Elements eine genaue Übereinstimmung sein, wobei nur gleichwertige Werte übereinstimmen, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}} At-Regel (oder einem [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) Methodenaufruf) definiert wurde, der einen `syntax` Deskriptor enthält.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Containerstil-Abfrage stimmt mit jedem Element überein, das `blue` als [berechneter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der `--accent-color` benutzerdefinierten Eigenschaft hat.

In diesem Fall stimmen andere Farbwerte, die dem sRGB `blue` entsprechen (wie der hexadezimale Code `#0000ff`), nur überein, wenn die `--accent-color` Eigenschaft als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, zum Beispiel:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #0000ff;
}
```

In diesem Fall, wenn der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)`, oder `rgb(0% 0% 100%)` gesetzt wäre, würde er wahr für `@container style(--accent-color: blue)` sein.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Optionsfeldern. Die vierte Option enthält ein Text-{{htmlelement("input")}} zur Eingabe einer benutzerdefinierten Farbe.

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

JavaScript aktualisiert den Wert der CSS-Variablen `--theme` auf dem {{htmlelement("body")}} Element, das ein Vorfahre des {{htmlelement("fieldset")}} und der {{htmlelement("output")}} Elemente ist, wenn ein Optionsfeld ausgewählt wird. Wenn das Text-`<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des `other` Optionsfelds nur aktualisiert, wenn das `other` Optionsfeld ausgewählt ist, was wiederum den Wert von `--theme` aktualisiert.

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

Wir verwenden die `@property` At-Regel, um eine CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}} Wert zu definieren und den `initial-value` auf `red` zu setzen, um sicherzustellen, dass gleichwertige Farben übereinstimmen, unabhängig davon, welche Syntax verwendet wird (zum Beispiel ist `red` gleich `rgb(255 0 0)`, `#ff0000`, und `#f00`).

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

Die erste Stilmerkmalabfrage ist eine benutzerdefinierte Eigenschaft ohne Wert. Dieser Abfragetyp gibt wahr zurück, wenn der berechnete Wert für den benutzerdefinierten Eigenschaftswert anders ist als der `initial-value` für diese Eigenschaft. In diesem Fall wird es wahr sein, wenn der Wert von `--theme` ein anderer Wert als ein synaktisch gleichwertiger Wert von `red` (wie `#ff0000`) ist. Wenn es wahr ist, wird das {{htmlelement("output")}} eine 5px gestrichelte Umrandung haben. Die Umrissfarbe ist der aktuelle Wert von `--theme`. Die Standardtext{{cssxref("color")}} ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777777;
  }
}
```

Die zweite und dritte Stilabfragen enthalten Werte für die benutzerdefinierte Eigenschaft. Diese stimmen überein, wenn der `--theme` Wert des Containers eine gleichwertige Farbe zu dem angegebenen Wert ist, selbst wenn dieser Wert dasselbe ist wie der `initial-value`. Die erste Abfrage stimmt mit Elementen überein, deren `--theme` Wert gleich `red`, `blue` oder `green` ist. Wenn es so ist, wird die {{cssxref("color")}} die Farbe des aktuellen Wertes von `--theme` (im Fall von `blue` und `green`, die das in der ersten Stilabfrage gesetzte Grau überschreiben).

Die zweite Stilabfrage besagt, dass wenn `--theme` gleich `red` ist, der Inhalt des `<output>` ebenfalls fett dargestellt wird. Wir haben dies getan, um besser zu demonstrieren, dass die Container-Abfrage eine Übereinstimmung ist.

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

Versuchen Sie, verschiedene Farbwerte in das Textfeld einzugeben. Sie werden möglicherweise feststellen, dass Werte, die sRGB-Äquivalente von `red` sind, das `<output>` rot machen — da es `style(--theme: red)` erfüllt — während die Umrandung entfernt wird, weil `style(--theme)` falsch zurückgibt, wenn der Wert des Elements für `--theme` derselbe wie der Anfangswert für `--theme` ist, der durch die `@property` At-Regel definiert wurde. Jeder nicht rote sRGB-gültige Farbwert, einschließlich `currentColor` oder `hsl(180 100% 50%)` usw., lässt die erste Stilabfrage wahr werden; es sind Werte, die sich von dem `initial-value` unterscheiden.

Da wir `syntax: "<color>";` gesetzt haben, kann der CSS-Variable nur gültige `<color>` Werte zugewiesen werden. Gültige Werte für die {{cssxref("color")}} Eigenschaft, die keine Wert-`<color>` Werte sind, wie `unset` oder `inherit`, sind [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling) für diese benutzerdefinierte Eigenschaft und werden ignoriert.

Wenn Sie `unset` oder `Kuddelmuddel` eingeben, aktualisiert das JavaScript den `style` auf dem {{HTMLElement("body")}} zu `--theme: unset` oder `--theme: Kuddelmuddel`. Keine dieser Werte sind Farben. Beide sind ungültig und werden ignoriert. Dies bedeutet, dass der Anfangswert vererbt und unverändert bleibt, wobei `style(--theme)` falsch und `style(--theme: red)` wahr ergibt.

> [!NOTE]
> Wenn Sie benutzerdefinierte Eigenschaften deklarieren, sollten Sie in Betracht ziehen, `@property` mit dem {{cssxref("@property/syntax","syntax")}} Deskriptor zu verwenden, damit der Browser die berechneten Werte richtig vergleichen kann.

### Verschachtelte Abfragen

Container-Abfragen können innerhalb anderer Container-Abfragen verschachtelt werden. Die innerhalb mehrfach verschachtelter Container-Abfragen definierten Stile werden angewendet, wenn alle der umschließenden Container-Abfragen wahr sind.

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

In diesem Fall wird das `<output>` eine 5px gestrichelte Umrandung haben, wenn es in einem Container verschachtelt ist, in dem `--theme: purple` gesetzt ist, und dieser Container innerhalb eines Containers verschachtelt ist, dessen `--theme` Wert `red` ist.

### Stilabfrage CSS-Deklarationen und Eigenschaften

Noch in keinem Browser unterstützt, kann die `style()` funktionale Notation reguläre CSS-Deklarationen einschließlich CSS-Eigenschaften und Eigenschaft-Wert-Paare enthalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn unterstützt, wird dieses einfache Beispiel die Hintergrundfarbe aller {{htmlelement("b")}} und {{htmlelement("strong")}} Elemente gelb machen, wenn das übergeordnete Element bereits `bold` ist.

Die Übereinstimmung erfolgt anhand des berechneten Wertes des übergeordneten Containers; wenn der berechnete {{cssxref("font-weight")}} des Elternteils `bold` ist (nicht `bolder` oder `900`), gibt es eine Übereinstimmung. Genau wie bei benutzerdefinierten Eigenschafts-Containerstil-Abfragen mussten wir keine Elemente als Stilcontainer definieren, da alle Elemente standardmäßig Stilcontainer sind. Solange ein Element keinen `container-name` gesetzt hat, wenn es `font-weight: bold` gesetzt oder vererbt hat, wird es übereinstimmen.

Stilmerkmale, die eine Kurzform-Eigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langform-Eigenschaften übereinstimmen, und andernfalls falsch. Zum Beispiel, `@container style({{cssxref("border")}}: 2px solid red)` wird wahr sein, wenn alle 12 Langform-Eigenschaften ({{cssxref("border-bottom-style")}}, usw.) dieser Kurzform auf dieselben äquivalenten Werte gesetzt sind.

Die globalen CSS-Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Containerstil-Abfrage falsch ist.

Wenden Sie die Stile, die Sie in der Stilabfrage auf das Element anwenden, das Sie mit dieser Abfrage gestalten, nicht an, da dies zu einer Endlosschleife führen kann.

Es wird erwartet, dass Stilabfragen auch Eigenschaften in einem booleschen Kontext akzeptieren. Die Stilabfrage gibt falsch zurück, wenn der Wert der Eigenschaft der Anfangswert für diese Eigenschaft ist (wenn sie nicht geändert wurde), und andernfalls wahr.

```css
@container style(font-weight) {
}
```

Das obige Beispiel wird für jedes Element wahr ergeben, das einen Wert für `font-weight` hat, der sich von seinem Anfangswert unterscheidet. Benutzeragenten-Stile setzen `font-weight: bold` für {{htmlelement("heading_elements", "heading")}} und {{htmlelement("th")}} Elemente, zum Beispiel. Einige Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} hat ebenfalls manchmal einen `font-weight`, der nicht `normal` ist, der vom Benutzeragenten gesetzt wird. Solange das `font-weight` des Elements nicht der Standardwert für diesen Benutzeragenten ist, wird die Stilabfrage wahr zurückgeben.

Diese Funktionen werden in keinem Browser unterstützt.

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("contain")}} Eigenschaft
- CSS {{Cssxref("container")}} Kurzform-Eigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- [Verwenden von Container-Scrollzustands-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Verstehen von `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Getting Started with Style Queries](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Style queries](https://una.im/style-queries/) über una.im (2022)
