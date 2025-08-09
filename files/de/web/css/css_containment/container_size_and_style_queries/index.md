---
title: Verwenden von Containergröße und Stilabfragen
slug: Web/CSS/CSS_containment/Container_size_and_style_queries
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

[Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) ermöglichen es Ihnen, Stile auf Elemente anzuwenden, die in einem bestimmten Container verschachtelt sind, basierend auf den Merkmalen dieses Containers. Die Abfrage gibt true oder false zurück, je nachdem, ob die Abfragebedingung für den Container zutrifft.

Container-Abfragen sind ähnlich wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries). Die {{cssxref("@media")}}-At-Regel ermöglicht das Anwenden von Stilen auf Elemente basierend auf der Größe des Ansichtsfensters oder anderen Gerätecharakteristiken. Ebenso ermöglicht die {{cssxref("@container")}}-At-Regel das Anwenden von Stilen auf Elemente basierend auf der Größe eines beinhaltenden Elements oder anderen Stilmerkmalen, statt auf das Ansichtsfenster. Container-Abfragen haben die gleichen Syntaxregeln und logischen Operatoren wie Media Queries.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt drei Arten von Container-Abfragen:

- **Container-Größenabfragen**
  - : Größenabfragen ermöglichen das Anwenden von Stilen auf Elemente basierend auf der aktuellen [Größe](/de/docs/Web/CSS/@container#descriptors) eines beinhaltenden Elements, einschließlich der Ausrichtung und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}}. Die beinhaltenden Elemente müssen ausdrücklich als _Größenabfrage-Container_ deklariert werden.

- **Container-Stilabfragen**
  - : Stilabfragen ermöglichen das Anwenden von Stilen auf Elemente basierend auf den Stilmerkmalen eines beinhaltenden Elements. Jedes nicht leere Element kann ein Stilabfrage-Container sein. Derzeit wird von Stilabfragen nur das CSS-Merkmal [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) unterstützt. In diesem Fall gibt die Abfrage true oder false zurück, abhängig vom berechneten Wert der benutzerdefinierten Eigenschaften des beinhaltenden Elements. Sobald Container-Stilabfragen vollständig unterstützt werden, ermöglichen sie das Anwenden von Stilen auf die Nachkommen eines Elements basierend auf beliebigen Eigenschaften, Deklarationen oder berechneten Werten – zum Beispiel, ob der Container `display: inline flex` oder eine nicht transparente Hintergrundfarbe hat.

- **[Container-Scroll-Status-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)**
  - : Scroll-Status-Abfragen ermöglichen es, CSS-Regeln selektiv auf die Nachkommen eines Containers anzuwenden, basierend auf Scroll-Status-Bedingungen, wie zum Beispiel, ob das abgefragte Element teilweise gescrollt ist oder ob der Container an einen Scroll-Snap-Container angepasst ist. Die beinhaltenden Elemente müssen ausdrücklich als _Scroll-Status-Abfrage-Container_ deklariert werden.

In diesem Leitfaden lernen wir die Grundlagen der Container-Abfragen, indem wir uns Folgendes ansehen:

1. [Container-Größenabfragen](#container_size_queries_2),
2. [Benennung von Containern](#benennung_von_containern) zur Begrenzung ihres Umfangs und
3. die Verwendung der `style()`-Funktionsnotation innerhalb der {{cssxref("@container")}}-At-Regel `<container-condition>`, um [Stilabfragen mit benutzerdefinierten Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

Scroll-Status-Abfragen werden in [Verwenden von Container-Scroll-Status-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) behandelt.

## Container-Größenabfragen

Container-Größenabfragen werden durch eine Größenbedingung gefiltert. Die zugehörigen Stile werden auf enthaltene Elemente angewendet, wenn das Container-Element als Container deklariert wurde und die Container-Bedingung für dieses Element zutrifft. Der Größen-Container eines Elements ist der nächstgelegene Vorfahr mit Containment.

Elemente werden als _Größenabfrage-Container_ deklariert, indem ihre {{cssxref("container-type")}}-Eigenschaft (oder die {{cssxref("container")}}-Kurzform) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Das Deklarieren von Größenabfrage-Containern fügt [Containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) zu ihnen hinzu. Dies ist eine leistungsbezogene Notwendigkeit – die Größe jedes Elements im DOM ständig abzufragen, wäre schlecht für die Leistung und das Benutzererlebnis. Außerdem könnte eine unendliche Schleife auftreten, wenn ein Nachkommensstil die Größe des Container-Elements änderte.

In einer Container-Größenabfrage enthält die `<container-condition>` ein oder mehrere `<size-query>`s. Jede Größenabfrage enthält einen Größenmerkmalnamen, einen Vergleichsoperator und einen Wert. Die Merkmale, die abgefragt werden können, sind auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation` beschränkt. Die boolesche Syntax und Logik, die eine oder mehrere `<size-query>`s kombiniert, ist die gleiche wie bei [`@media`](/de/docs/Web/CSS/@media)-Größenmerkmalabfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Die `<container-condition>` in diesem Beispiel enthält eine einzelne `<size-query>` — `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}}-Elemente potenzielle Übereinstimmungen für jede nicht benannte Container-Abfrage. Die innerhalb unserer Container-Abfrage deklarierten Stile gelten für die Nachkommen aller Formulare mit einer Breite zwischen `10em` und `30em`, inklusive.

## Benennung von Containern

Eine `<container-condition>` kann einen optionalen, fallunterscheidenden {{cssxref("container-name")}} enthalten. Ein Containername macht die Container-Bedingung spezifischer — sie wird nur für Elemente ausgewertet, die diesen Namen in der `container-name`-Eigenschaft gesetzt haben.

Die {{cssxref("container-name")}}-Eigenschaft gibt eine Liste von `<container-name>`-Werte für Abfragen an, die in `@container`-Regeln verwendet werden können; dies sind fallunterscheidende {{cssxref("ident")}}-Werte. Die Container-Namen ermöglichen es, jeden Container-Vorfahren des Elements zu Zielobjekten zu machen. Ohne einen Container-Namen entspricht die Abfrage nur dem nächstgelegenen Container-Vorfahren.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Namen zu Ihren `@container`-At-Regeln hinzugefügt haben, können Sie die {{cssxref("container-name")}}-Eigenschaft oder die {{cssxref("container")}}-Kurzform verwenden, um bestimmte Container-Elemente zu adressieren. Stile innerhalb der benannten `@container`-At-Regeln werden nur auf passende Elemente innerhalb dieser Container mit den gesetzten Namen angewendet, die die Container-Abfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel werden die Stile innerhalb des Container-Abfrageblocks auf die Nachkommen aller {{htmlelement("li")}}-Elemente angewendet, deren Breite größer als ihre Höhe ist. Beachten Sie, dass auch andere Elemente, auf die `container-name: card` angewendet wurde und die der Größenabfrage entsprechen, diese Stile auf die Nachkommen ihrer Elemente angewandt bekommen.

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

Im obigen Beispiel hat das Element zwei Container-Namen, `wide` und `narrow`. Die Nachkommen aller Elemente mit `class="sizeContainer"` erhalten die Stile aus der `wide`- oder `narrow`-Abfrage angewendet.

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größen-Container ist, aber er kann immer noch ein [Stil-Container](#container-stilabfragen) sein. Der Standardwert `container-name: none` gibt an, dass der Container keinen Namen hat, aber es verhindert nicht, dass das Element zu nicht benannten Abfragen passt.

Mit Container-Abfragen sind wir nicht auf Größenabfragen beschränkt! Sie können auch die Stilmerkmale eines Containers abfragen.

## Container-Stilabfragen

Eine _Container-Stilabfrage_ ist eine `@container`-Abfrage, die berechnete Stile des Container-Elements bewertet, wie sie in einer oder mehreren `style()`-Funktionsnotationen definiert sind. Die boolesche Syntax und Logik, die verwendet wird, um Stilmerkmale in einer Stilabfrage zu kombinieren, ist die gleiche wie in [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname — `style()` innerhalb eines `<style-feature>` im Gegensatz zu `supports()` innerhalb eines `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist ein einzelnes **`<style-feature>`**. Gemäß der CSS-Containment-Spezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values) sein. Das einzige derzeit unterstützte Stilmerkmal sind benutzerdefinierte Eigenschaften, mit oder ohne Wert. Siehe die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Wenn das `<style-feature>` einen Wert enthält, wird die Stilabfrage wahr, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder zukünftig die CSS-Deklaration), die als `style()`-Argument übergeben wird, für den befragten Container zutrifft. Andernfalls wird sie auf false aufgelöst. Ein Stilmerkmal ohne Wert wird als wahr bewertet, wenn der berechnete Wert von dem [Initialwert](#registrierte_eigenschaften) für die gegebene Eigenschaft abweicht.

Zukünftig werden wir Stilabfragen wie folgt schreiben können:

```css
@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple),
    (width <= 100vw) and style(max-width: 600px) {
  /* <stylesheet> */
}
```

Die `style()`-Funktionsnotation wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Auch wenn es noch nicht unterstützt wird, werden wir schließlich in der Lage sein, reguläre CSS-Deklarationen wie `max-width: 600px` abzufragen. Abfrage `@container (max-width: 600px)` ist eine Größenabfrage; Containment mit {{cssxref("container-type")}}, oder die {{cssxref("container")}}-Kurzform, wird benötigt. Diese Abfrage wird zurückgeben, wenn der Container 600px oder weniger beträgt. Das ist anders als die Abfrage `@container style(max-width: 600px)`, was eine Stilabfrage ist; wenn unterstützt, wird diese Abfrage zurückgeben, wenn der Container einen {{cssxref("max-width")}}-Wert von `600px` hat.

Bis Stilabfragen für reguläre CSS-Deklarationen und -Eigenschaften unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als `style()`-Parameter einzuschließen, mit oder ohne Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige wichtige Punkte, die bereits erwähnt wurden, aber wichtig zu behalten sind:

- Alle Elemente können Stilabfrage-Container sein; das Setzen eines `container-type` ist nicht erforderlich. Wenn Nachkommen-Stile sich nicht auf die berechneten Stile eines Vorfahren auswirken, ist Containment nicht nötig.
- Eine `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Sie Größenmerkmale in Ihre Abfrage einbeziehen, stellen Sie sicher, dass Ihre Container-Elemente ein `container-type` von `size` oder `inline-size` haben.
- Wenn Sie nicht möchten, dass ein Element jemals als Container betrachtet wird, geben Sie ihm einen `container-name`, der nicht verwendet werden soll. `container-name: none` entfernt alle Abfragenamen, die einem Container zugeordnet sind; es verhindert nicht, dass das Element Stil-Container ist.
- Zum Zeitpunkt dieses Schreibens (Februar 2024) funktionieren Container-Stilabfragen nur mit CSS-Benutzerdefinierte-Eigenschaft-Werten in der `style()`-Abfrage.

Nun lassen Sie uns eintauchen und die verschiedenen `<style-feature>`-Typen betrachten.

### Stilabfragen für benutzerdefinierte Eigenschaften

Stilabfragen für benutzerdefinierte Eigenschaften ermöglichen es Ihnen, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), auch "CSS-Variablen" genannt, eines Elternelements abzufragen. Sie sind in einem `<style-query>` enthalten, genauso wie Sie eine reguläre CSS-Eigenschaft in einer Feature-Abfrage einschließen würden: entweder mit oder ohne Wert.

#### Unabhängige benutzerdefinierte Eigenschaftsabfragen

Der `<style-query>`-Parameter der `style()`-Funktionsnotation kann nur einen CSS-Variablennamen enthalten; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert angegeben ist, gibt die Abfrage false zurück, wenn der Wert mit dem Wert des `initial-value`-Deskriptors innerhalb der `@property`-At-Regel übereinstimmt, falls vorhanden. Die Stilabfrage gibt true zurück und stimmt mit allen Elementen überein, die einen benutzerdefinierten Eigenschaftswert haben, der von dem `initial-value` abweicht, oder für alle Elemente, die eine benutzerdefinierte Eigenschaft mit einem Wert haben, wenn die benutzerdefinierte Eigenschaft deklariert wurde, ohne registriert zu werden.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen über eine CSS-Benutzerdefinierte-Eigenschafts-Wert-Zuweisung eingeführt werden, geben wertelose benutzerdefinierte Eigenschaftsabfragen immer true zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel stimmt die Container-Abfrage mit dem Element überein, auf dem die `--theme-color`-Eigenschaft deklariert wurde, und all seinen Nachkommen. Da die CSS-Variable `--theme-color` auf der {{cssxref(":root")}} deklariert wurde, ist die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}}-Knotens wahr.

##### Registrierte Eigenschaften

Das Verhalten registrierter benutzerdefinierter Eigenschaften ist anders. Wenn explizit mit der {{cssxref("@property")}}-CSS-At-Regel oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert, gibt die Stilabfrage `style(--theme-color)` nur true für Elemente zurück, wenn der berechnete Wert für `--theme-color` von dem [`initial-value`](/de/docs/Web/CSS/@property/initial-value) in der ursprünglichen Definition dieser benutzerdefinierten Eigenschaft abweicht.

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

In diesem Beispiel stimmt das `:root`-Element NICHT mit der Stilabfrage überein, da der Wert der benutzerdefinierten Eigenschaft mit dem `initial-value` übereinstimmt. Der Wert der benutzerdefinierten Eigenschaft für das Element (und alle Elemente, die den Wert erben) bleibt `rebeccapurple`. Nur Elemente, die von dem Initialwert abweichen, in diesem Fall das {{htmlelement("main")}} und seine Nachkommen, die den geänderten Wert erben, stimmen überein.

#### Benutzerdefinierte Eigenschaft mit einem Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert des Elements für diese Eigenschaft eine exakte Übereinstimmung sein, wobei nur äquivalente Werte eine Übereinstimmung sind, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}}-Regel (oder ein [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) Methodenaufruf) mit einem `syntax`-Deskriptor definiert wurde.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Container-Stilabfrage stimmt mit jedem Element überein, das `blue` als [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der `--accent-color`-benutzerdefinierten Eigenschaft hat.

In diesem Fall stimmen andere Farbwerte, die sRGB `blue` äquivalent sind (wie der Hexadezimalcode `#0000ff`), nur überein, wenn die Eigenschaft `--accent-color` als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, zum Beispiel:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #00f;
}
```

In diesem Fall würde `@container style(--accent-color: blue)` true zurückgeben, wenn der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzt ist.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Optionsfeldern. Die vierte Option enthält ein Text-{{htmlelement("input")}}, um eine benutzerdefinierte Farbe einzugeben.

```html
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
      <input text="checkbox" name="selection" value="currentColor" id="color" />
    </li>
  </ol>
</fieldset>
<output>I change colors</output>
```

JavaScript aktualisiert den Wert der CSS-Variable `--theme` auf dem {{htmlelement("body")}}-Element, das ein Vorfahr des {{htmlelement("fieldset")}} und {{htmlelement("output")}}-Elements ist, wann immer ein Optionsfeld ausgewählt wird. Wenn das Text-`<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des `other` Optionsfeldes nur aktualisiert, wenn das `other` Optionsfeld markiert ist, was wiederum den Wert von `--theme` aktualisiert.

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

Wir verwenden die `@property`-At-Regel, um eine CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}}-Wert zu definieren und den `initial-value` auf `red` zu setzen, um sicherzustellen, dass äquivalente Farben unabhängig von der verwendeten Syntax eine Übereinstimmung sind (zum Beispiel ist `red` gleich `rgb(255 0 0)`, `#ff0000` und `#f00`).

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

Die erste Stilabfrage-Feature ist eine benutzerdefinierte Eigenschaft ohne Wert. Dieser Abfragetyp gibt true zurück, wenn der berechnete Wert für die benutzerdefinierte Eigenschaft anders ist als der `initial-value` für diese Eigenschaft. In diesem Fall wird sie true sein, wenn der Wert von `--theme` ein beliebiger Wert außer einem synaktisch äquivalenten Wert von `red` (wie `#f00`) ist. Ist das der Fall, wird das {{htmlelement("output")}} eine 5px gepunktete Umrandung haben. Die Farbe der Umrandung ist der aktuelle Wert von `--theme`. Die Standardtextfarbe ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777;
  }
}
```

Die zweite und dritte Stilabfrage enthält Werte für die benutzerdefinierte Eigenschaft. Diese stimmen überein, wenn der Wert von `--theme` des Containers einer äquivalenten Farbe zum angegebenen Wert entspricht, selbst wenn dieser Wert der gleiche ist wie der `initial-value`. Die erste Abfrage stimmt mit Elementen überein, deren `--theme`-Wert äquivalent zu `red`, `blue` oder `green` ist. Ist das der Fall, wird die {{cssxref("color")}} die aktuelle Farbe vom Wert `--theme` (im Fall von `blue` und `green`, überschreibt die graue Farbe, die in der ersten Stilabfrage gesetzt wurde).

Die zweite Stilabfrage besagt, dass wenn `--theme` äquivalent zu `red` ist, der Inhalt des `<output>` ebenfalls fett gedruckt wird. Wir haben dies getan, um besser zu demonstrieren, dass die Container-Abfrage übereinstimmt.

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

Versuchen Sie, verschiedene Farbwerte in das Textfeld einzugeben. Sie werden vielleicht feststellen, dass Werte, die sRGB-Äquivalent von `red` sind, das `<output>` rot machen — da es mit `style(--theme: red)` übereinstimmt — während die Umrandung entfernt wird, da `style(--theme)` false zurückgibt, wenn der Wert des Elements für `--theme` derselbe wie der Initialwert für `--theme` ist, der in der `@property`-At-Regel definiert ist. Jeder nicht-rote sRGB gültige Farbwert, einschließlich `currentColor` oder `hsl(180 100% 50%)`, etc., führt dazu, dass die erste Stilabfrage true zurückgibt; sie sind Werte, die sich vom `initial-value` unterscheiden.

Weil wir `syntax: "<color>";` gesetzt haben, kann die CSS-Variable nur gültige `<color>`-Werte zugewiesen bekommen. Gültige Werte für die {{cssxref("color")}}-Eigenschaft, die keine `<color>`-Werte sind, wie `unset` oder `inherit`, sind für diese benutzerdefinierte Eigenschaft [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling) und werden ignoriert.

Wenn Sie `unset` oder `gibberish` eingeben, aktualisiert das JavaScript das `style` auf dem {{HTMLElement("body")}} auf `--theme: unset` oder `--theme: gibberish`. Keines davon sind Farben. Beide sind ungültig und werden ignoriert. Das bedeutet, dass der Initialwert geerbt und unverändert bleibt, wobei `style(--theme)` false zurückgibt und `style(--theme: red)` true zurückgibt.

> [!NOTE]
> Bei der Deklaration benutzerdefinierter Eigenschaften sollten Sie in Betracht ziehen, `@property` mit dem {{cssxref("@property/syntax","syntax")}}-Deskriptor zu verwenden, damit der Browser die berechneten Werte richtig vergleichen kann.

### Verschachtelte Abfragen

Container-Abfragen können innerhalb anderer Container-Abfragen verschachtelt werden. Die innerhalb mehrerer verschachtelter Container-Abfragen definierten Stile werden angewendet, wenn alle umgebenden Container-Abfragen wahr sind.

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

In diesem Fall hat das `<output>` eine 5px gepunktete Umrandung, wenn es in einem Container verschachtelt ist, in dem `--theme: purple` gesetzt ist, und dieser Container innerhalb eines Containers verschachtelt ist, dessen `--theme`-Wert `red` ist.

### Stilabfrage-CSS-Deklarationen und -Eigenschaften

Noch nicht in einem Browser unterstützt, kann die `style()`-Funktionsnotation reguläre CSS-Deklarationen einschließlich CSS-Eigenschaften und Eigenschaftswertepaaren enthalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn unterstützt, wird dieses einfache Beispiel den Hintergrund von {{htmlelement("b")}}- und {{htmlelement("strong")}}-Elementen gelb machen, wenn das übergeordnete Element bereits `bold` ist.

Das Matching erfolgt gegen den berechneten Wert des übergeordneten Containers; wenn der berechnete {{cssxref("font-weight")}} des Elternteils `bold` ist (nicht `bolder` oder `900`), gibt es eine Übereinstimmung. Genau wie bei benutzerdefinierten Eigenschafts-Container-Stilabfragen mussten wir keine Elemente als Stil-Container definieren, da alle Elemente standardmäßig Stil-Container sind. Solange ein Element keinen `container-name` gesetzt hat, wird der {{cssxref("font-weight")}} auf `bold` gesetzt oder vererbt, es wird übereinstimmen.

Stilmerkmale, die eine Kurzform-Eigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langform-Eigenschaften übereinstimmen, andernfalls sind sie falsch. Zum Beispiel wird `@container style({{cssxref("border")}}: 2px solid red)` wahr sein, wenn alle 12 Langform-Eigenschaften ({{cssxref("border-bottom-style")}}, etc.), die diese Kurzform ausmachen, auf dieselben äquivalenten Werte gesetzt sind.

Die globalen CSS-Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und lassen die Container-Stilabfrage als false auflösen.

Wenden Sie nicht die Stile, die Sie in der Stilabfrage abfragen, auf das Element an, das Sie mit dieser Abfrage stylen, da dies zu einer Endlosschleife führen kann.

Es wird erwartet, dass Stilabfragen auch Eigenschaften in einem booleschen Kontext akzeptieren werden. Die Stilabfrage wird false zurückgeben, wenn der Wert der Eigenschaft der Initialwert für diese Eigenschaft ist (wenn er nicht geändert wurde), und true andernfalls.

```css
@container style(font-weight) {
}
```

Das obige Beispiel gibt für jedes Element true zurück, das einen Wert für `font-weight` hat, der sich von seinem Initialwert unterscheidet. Benutzeragent-Stylesheets setzen `font-weight: bold` für {{htmlelement("heading_elements", "heading")}}- und {{htmlelement("th")}}-Elemente, zum Beispiel. Einige Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} hat manchmal auch ein `font-weight`, das nicht `normal` ist, gesetzt durch den Benutzeragenten. Solange das `font-weight` des Elements nicht der Standardwert für diesen Benutzeragenten ist, wird die Stilabfrage true zurückgeben.

Diese Funktionen sind noch in keinem Browser unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}}-At-Regel
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container")}}-Kurzform-Eigenschaft
- CSS {{Cssxref("container-name")}}-Eigenschaft
- [Verwenden von Container-Scroll-Status-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Verständnis von `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Einführung in Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) über una.im (2022)
