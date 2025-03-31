---
title: Verwenden von Containergrößen- und Stilabfragen
slug: Web/CSS/CSS_containment/Container_size_and_style_queries
l10n:
  sourceCommit: 44f398527f2b0195a7c3b35db0a53c80aebe8e48
---

{{CSSRef}}

[Container-Queries](/de/docs/Web/CSS/CSS_containment/Container_queries) ermöglichen es Ihnen, Stile auf Elemente innerhalb eines bestimmten Containers basierend auf den Merkmalen dieses Containers anzuwenden. Die Abfrage liefert true oder false, je nachdem, ob die Abfragebedingung für den Container zutrifft.

Container-Queries sind ähnlich wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries). Die {{cssxref("@media")}}-Regel ermöglicht es, Stile auf Elemente basierend auf der Größe des Viewports oder anderen Geräteeigenschaften anzuwenden. Ebenso ermöglicht die {{cssxref("@container")}}-Regel, Stile auf Elemente basierend auf der Größe eines enthaltenden Elements oder anderen Stilmerkmalen anzuwenden, anstatt auf den Viewport. Container-Queries haben die gleichen Syntaxregeln und logische Operatoren wie Media Queries.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt drei Arten von Container-Queries:

- **Größenanfragen für Container**

  - : Größenanfragen ermöglichen es, Stile auf Elemente basierend auf der aktuellen [Größe](/de/docs/Web/CSS/@container#descriptors) eines enthaltenden Elements anzuwenden, einschließlich der Orientierung und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}}. Die enthaltenden Elemente müssen explizit als _Größenanfrage-Container_ deklariert werden.

- **Stilanfragen für Container**

  - : Stilanfragen ermöglichen es, Stile auf Elemente basierend auf den Stilmerkmalen eines enthaltenden Elements anzuwenden. Jedes nicht leere Element kann ein Stilabfrage-Container sein. Derzeit wird von den Stilanfragen nur das Stilmerkmal CSS [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) unterstützt. In diesem Fall liefert die Abfrage true oder false, je nach dem berechneten Wert der benutzerdefinierten Eigenschaften des enthaltenden Elements. Wenn Container-Stilanfragen vollständig unterstützt werden, können Sie Stile auf die Nachfahren eines beliebigen Elements basierend auf beliebigen Eigenschaften, Deklarationen oder berechneten Werten anwenden — zum Beispiel, wenn der Container `display: inline flex` ist oder eine nicht transparente Hintergrundfarbe hat.

- **[Scrollstatus-Abfragen für Container](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)**

  - : Scrollstatus-Abfragen ermöglichen es, CSS-Regeln selektiv auf die Nachfahren eines Containers basierend auf Scrollstatus-Bedingungen anzuwenden, wie zum Beispiel, ob das abgefragte Element teilweise gescrollt ist oder ob der Container an einen Scroll-Snap-Container angeheftet ist. Die enthaltenden Elemente müssen explizit als _Scrollstatus-Abfrage-Container_ deklariert werden.

In diesem Leitfaden lernen wir die Grundlagen von Container-Queries, indem wir uns mit folgenden Punkten beschäftigen:

1. [Containergrößenanfragen](#container_size_queries_2),
2. [Benennung von Containern](#benennung_von_containern), um ihren Geltungsbereich zu begrenzen, und
3. Verwenden der `style()`-Funktionsnotation innerhalb der {{cssxref("@container")}}-Regel `<container-condition>`, um [Stilanfragen mit benutzerdefinierten Eigenschaften](#stilanfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

Scrollstatus-Abfragen werden in [Verwendung von Scrollstatus-Abfragen für Container](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) behandelt.

## Containergrößenanfragen

Containergrößenanfragen werden durch eine Größenbedingung gefiltert. Die zugeordneten Stile werden auf enthaltene Elemente angewendet, wenn das Container-Element als Container deklariert wurde und die Containerbedingung für dieses Element zutrifft. Ein Element hat seinen nächstgelegenen Vorfahr mit Containment als Größencontainer.

Elemente werden als _Größenanfrage-Container_ deklariert, indem ihre {{cssxref("container-type")}}-Eigenschaft (oder die {{cssxref("container")}}-Kurzform) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Das Deklarieren von Größenanfrage-Containern fügt [Containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) zu ihnen hinzu. Dies ist eine Performance-Notwendigkeit — die Abfrage der Größe jedes Elements im DOM jederzeit wäre schlecht für die Leistung und Benutzererfahrung. Außerdem könnte eine unendliche Schleife auftreten, wenn ein Nachfahrenstil die Größe des Container-Elements ändern würde.

In einer Containergrößenabfrage enthält das `<container-condition>` eine oder mehrere `<size-query>`-Anfragen. Jede Größenanfrage enthält einen Größenmerkmalnamen, einen Vergleichsoperator und einen Wert. Die Größenmerkmale, die abgefragt werden können, sind auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation` beschränkt. Die boolesche Syntax und Logik, um eine oder mehrere `<size-query>`-Anfragen zu kombinieren, ist dieselbe wie bei [`@media`](/de/docs/Web/CSS/@media)-Größenmerkalsanfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Das `<container-condition>` in diesem Beispiel enthält eine einzelne `<size-query>` — `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}}-Elemente potenzielle Treffer für jede unbenannte Container-Abfrage. Die innerhalb unserer Containerabfrage deklarierten Stile werden auf die Nachfahren aller Formulare angewendet, die zwischen `10em` und `30em` breit sind, einschließlich.

## Benennung von Containern

Ein `<container-condition>` kann einen optionalen, unterscheidungssensitiven {{cssxref("container-name")}} enthalten. Ein Containername macht die Containerbedingung spezifischer — sie wird nur gegen Elemente ausgewertet, denen dieser Name in der `container-name`-Eigenschaft gegeben wurde.

Die {{cssxref("container-name")}}-Eigenschaft gibt eine Liste von Abfrage-`<container-name>`-Werten an, die in `@container`-Regeln verwendet werden können; dies sind unterscheidungssensitive {{cssxref("ident")}}-Werte. Die Containernamen ermöglichen die gezielte Auswahl eines beliebigen Container-Vorfahren des Elements. Ohne einen Container-Namen stimmt die Abfrage nur mit dem nächstgelegenen Container-Vorfahren überein.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Namen zu Ihren `@container`-Regeln hinzugefügt haben, können Sie die {{cssxref("container-name")}}-Eigenschaft oder die {{cssxref("container")}}-Kurzform verwenden, um spezifische Containerelemente anzusprechen. Stile innerhalb der benannten `@container`-Regeln werden nur auf passende Elemente innerhalb von Containern mit den gesetzten Namen angewendet, die die Containerabfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel werden die Stile innerhalb des Container-Abfrageblocks auf die Nachfahren aller {{htmlelement("li")}}-Elemente mit einer Breite angewendet, die größer ist als deren Höhe. Beachten Sie, dass andere Elemente mit `container-name: card`, die der Größenanfrage entsprechen, ebenfalls diese Stile auf die Nachfahren dieser Elemente angewendet bekommen.

```css
@container wide (min-width: 20em) {
  /* styles applied to descendants of wide .sizeContainer */
}

@container narrow (max-width: 20em) {
  /* styles applied to descendants of narrow .sizeContainer */
}

.sizeContainer {
  container-type: size;
  container-name: wide narrow;
}
```

Im obigen Beispiel hat das Element zwei Containernamen, `wide` und `narrow`. Die Nachfahren aller Elemente mit `class="sizeContainer"` bekommen die Stile der `wide`- oder `narrow`-Abfrage angewendet (oder beide, wenn ein Element genau 20em breit ist).

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer ist, aber er kann immer noch ein [Stilcontainer](#container-stilanfragen) sein. Der Standardwert `container-name: none` gibt an, dass der Container keinen Namen hat, verhindert aber nicht, dass das Element mit unbenannten Abfragen übereinstimmt.

Mit Container-Queries sind wir nicht auf Größenanfragen beschränkt! Sie können auch die Stilmerkmale eines Containers abfragen.

## Container-Stilanfragen

Eine _Container-Stilanfrage_ ist eine `@container`-Abfrage, die berechnete Stile des Container-Elements bewertet, wie in einer oder mehreren `style()`-Funktionsnotationen definiert. Die boolesche Syntax und Logik, die zur Kombination von Stilmerkmalen in eine Stilanfrage verwendet wird, ist dieselbe wie bei [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname — `style()` innerhalb eines `<style-feature>` im Gegensatz zu `supports()` innerhalb eines `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist ein einzelnes **`<style-feature>`**. Gemäß der CSS-Containment-Spezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values) sein. Das einzige derzeit unterstützte Stilmerkmal sind benutzerdefinierte Eigenschaften, mit oder ohne einen Wert. Siehe die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Wenn das `<style-feature>` einen Wert enthält, ergibt die Stilanfrage true, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder in Zukunft der CSS-Deklaration), die als `style()`-Argument übergeben wird, für den abgefragten Container zutrifft. Andernfalls ergibt sich false. Ein Stilmerkmal ohne Wert ergibt true, wenn der berechnete Wert vom [Anfangswert](#registrierte_eigenschaften) für die gegebene Eigenschaft abweicht.

In Zukunft werden wir Stilanfragen wie folgt schreiben können:

```css
@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple),
    (max-width: 100vw) and style(max-width: 600px) {
  /* <stylesheet> */
}
```

Die `style()`-Funktionsnotation wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Zwar noch nicht unterstützt, werden wir irgendwann in der Lage sein, reguläre CSS-Deklarationen wie `max-width: 100vw` abzufragen. Die Abfrage `@container (max-width: 100vw)` ist eine Größenanfrage; Containment mit {{cssxref("container-type")}} oder die {{cssxref("container")}}-Kurzform ist erforderlich. Diese Abfrage wird true ergeben, wenn der Container 100vw oder weniger ist. Dies unterscheidet sich von der Abfrage `@container style(max-width: 100vw)`, die eine Stilabfrage ist; wenn unterstützt, wird diese Abfrage true ergeben, wenn der Container einen {{cssxref("max-width")}}-Wert von `100vw` hat.

Bis Stilanfragen für reguläre CSS-Deklarationen und -Eigenschaften unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als `style()`-Parameter einzubeziehen, mit oder ohne einen Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige Dinge, die bereits erwähnt wurden, aber wichtig sind, sich zu erinnern:

- Alle Elemente können Stilabfrage-Container sein; das Setzen eines `container-type` ist nicht erforderlich. Wenn die Nachfahrenstile die berechneten Stile eines Vorfahren nicht beeinflussen, ist Containment nicht erforderlich.
- Ein `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Sie Größenmerkmale in Ihrer Abfrage einschließen, stellen Sie sicher, dass Ihre Containerelemente einen `container-type` von `size` oder `inline-size` haben.
- Wenn Sie nicht möchten, dass ein Element jemals als Container betrachtet wird, geben Sie ihm einen `container-name`, der nicht verwendet werden wird. Das Setzen von `container-name: none` entfernt alle Abfragenamen, die mit einem Container assoziiert sind; es verhindert nicht, dass das Element ein Stilcontainer ist.
- Zum Zeitpunkt des Schreibens (Februar 2024) funktionieren Container-Stilanfragen nur mit CSS-Werten für benutzerdefinierte Eigenschaften in der `style()`-Abfrage.

Nun, lassen Sie uns einen genaueren Blick auf die verschiedenen `<style-feature>`-Typen werfen.

### Stilanfragen für benutzerdefinierte Eigenschaften

Stilanfragen für benutzerdefinierte Eigenschaften ermöglichen es, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), auch "CSS-Variablen" genannt, eines Elternelements abzufragen. Sie sind innerhalb eines `<style-query>` enthalten, genauso wie Sie eine reguläre CSS-Eigenschaft innerhalb einer Feature-Abfrage einfügen würden: entweder mit oder ohne einen Wert.

#### Eigenständige Abfragen für benutzerdefinierte Eigenschaften

Der `<style-query>`-Parameter der `style()`-Funktionsnotation kann nur einen CSS-Variablennamen enthalten; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert enthalten ist, gibt die Abfrage false zurück, wenn der Wert derselbe ist wie der Wert des `initial-value`-Descriptors innerhalb der `@property`-Regel, wenn es gibt. Die Stilanfrage ergibt true und trifft auf alle Elemente zu, die einen Wert für eine benutzerdefinierte Eigenschaft haben, der sich vom `initial-value` unterscheidet, oder für alle Elemente, die eine benutzerdefinierte Eigenschaft mit beliebigem Wert haben, wenn die benutzerdefinierte Eigenschaft ohne Registrierung deklariert wurde.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen über eine Zuweisung von benutzerdefinierten CSS-Eigenschaftenwerten eingeführt werden, geben abwertfreie Abfragen für benutzerdefinierte Eigenschaften immer true zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel entspricht die Containerabfrage dem Element, auf dem die Eigenschaft `--theme-color` deklariert wurde, und all seinen Nachfahren. Da die CSS-Variable `--theme-color` auf dem {{cssxref(":root")}} deklariert wurde, ergibt die Stilanfrage `style(--theme-color)` einen wahrhaften Wert für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}}-Knotens.

##### Registrierte Eigenschaften

Das Verhalten registrierter benutzerdefinierter Eigenschaften ist anders. Wenn explizit mit der {{cssxref("@property")}}-CSS-Regel oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert, ergibt die Stilanfrage `style(--theme-color)` nur für Elemente true, wenn der berechnete Wert der `--theme-color`-Eigenschaft des Elements sich vom [`initial-value`](/de/docs/Web/CSS/@property/initial-value) unterscheidet, der in der ursprünglichen Definition dieser benutzerdefinierten Eigenschaft festgelegt wurde.

```css
@property --theme-color {
  initial-value: rebeccapurple;
  inherited: true;
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

In diesem Beispiel entspricht das `:root`-Element NICHT der Stilanfrage, weil der Wert der benutzerdefinierten Eigenschaft derselbe wie der `initial-value` ist. Der Wert der benutzerdefinierten Eigenschaft für das Element (und alle Elemente, die diesen geerbten Wert haben) ist immer noch `rebeccapurple`. Nur Elemente, die sich vom Anfangswert unterscheiden, in diesem Fall das {{htmlelement("main")}} und seine Nachfahren, die diesen geänderten Wert erben, sind ein Treffer.

#### Benutzerdefinierte Eigenschaft mit Wert

Wenn eine Stilanfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert des Elements für diese Eigenschaft exakt übereinstimmen, wobei äquivalente Werte nur dann übereinstimmen, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}}-Regel (oder einem Aufruf der Methode [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)) mit einem `syntax`-Descriptor definiert wurde.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Container-Stilanfrage entspricht jedem Element, das `blue` als [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der `--accent-color`-benutzerdefinierten Eigenschaft hat.

In diesem Fall stimmen andere Farbwerte, die sRGB `blue` entsprechen (wie der Hexadezimalcode `#0000ff`), nur überein, wenn die `--accent-color`-Eigenschaft als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, zum Beispiel:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #00f;
}
```

In diesem Fall, falls der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzt wäre, würde dieser für `@container style(--accent-color: blue)` wahr sein.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Optionsschaltflächen. Die vierte Option enthält ein Text-{{htmlelement("input")}} zur Eingabe einer benutzerdefinierten Farbe.

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
      <input type="radio" name="selection" value="currentcolor" id="other" />
      <label for="other">Other</label>
      <label for="color">color:</label>
      <input text="checkbox" name="selection" value="currentcolor" id="color" />
    </li>
  </ol>
</fieldset>
<output>I change colors</output>
```

JavaScript aktualisiert den Wert der CSS-`--theme`-Variablen am {{htmlelement("body")}}-Element, das ein Vorfahre des {{htmlelement("fieldset")}} und {{htmlelement("output")}}-Elements ist, wann immer eine Optionsschaltfläche ausgewählt wird. Wenn das Text-`<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des `other`-Radio-Buttons nur dann aktualisiert, wenn der `other`-Radio-Button markiert ist, was wiederum den Wert von `--theme` aktualisiert.

```js
const radios = document.querySelectorAll('input[name="selection"]');
const body = document.querySelector("body");
const other = document.getElementById("other");
const color = document.getElementById("color");

for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener("change", (e) => {
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

Wir verwenden die `@property`-Regel, um eine CSS-Variable `--theme` zu definieren, die einen {{cssxref("color_value", "&lt;color&gt;")}}-Wert sein soll und setzen den `initial-value` auf `#00F`, um sicherzustellen, dass äquivalente Farben unabhängig von der verwendeten Syntax ein Treffer sind (zum Beispiel, `#F00` entspricht `rgb(255 0 0)`, `#ff0000`, und `red`).

```css
@property --theme {
  syntax: "<color>";
  inherits: true;
  initial-value: #f00;
}
```

```css hidden
output {
  padding: 3px 5px;
  margin-top: 5px;
}
```

Die erste Stilmerkmalabfrage ist eine benutzerdefinierte Eigenschaft ohne Wert. Dieser Abfragetyp ergibt true, wenn der berechnete Wert für den benutzerdefinierten Eigenschaftswert sich vom `initial-value` für diese Eigenschaft unterscheidet. In diesem Fall wird er true sein, wenn der Wert von `--theme` ein anderer Wert ist als jeder sRGB-äquivalente Wert von `#f00` (wie `red`). Wenn dies zutrifft, hat das {{htmlelement("output")}} eine 5px gepunktete Umrandung. Die Umrandungsfarbe ist der aktuelle Wert der `--theme`. Die Standard-Text-{{cssxref("color")}} ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777;
  }
}
```

Die zweite und dritte Stilabfrage enthält Werte für die benutzerdefinierte Eigenschaft. Diese passen, wenn der Wert der `--theme` für den Container äquivalent zum aufgelisteten Wert ist, auch wenn dieser Wert derselbe ist wie der `initial-value`. Die erste Abfrage entspricht Elementen, deren `--theme`-Wert `red`, `blue` oder `green` entspricht. Wenn dies der Fall ist, wird die {{cssxref("color")}} die aktuelle Farbwert von `--theme` sein (im Fall von `blue` und `green` wird die im ersten Stilabfrage abgebildete graue Farbe überschrieben).

Die zweite Stilabfrage besagt, dass, wenn `--theme` mit `red` übereinstimmt, der Inhalt des `<output>` ebenfalls fett sein wird. Wir haben dies getan, um besser zu demonstrieren, dass die Containerabfrage ein Treffer ist.

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

Versuchen Sie, verschiedene Farbwerte in das Textfeld einzugeben. Sie werden vielleicht bemerken, dass Werte, die sRGB-Äquivalente von `red` sind, das `<output>`-Feld rot machen — da es `style(--theme: red)` entspricht — während sie die Umrandung entfernen, weil `style(--theme)` false ergibt, wenn der Elemente-Wert für `--theme` derselbe ist wie der Anfangswert für `--theme`, der durch die `@property`-Regel definiert wurde. Jeder nicht-rote gültige sRGB-Farbwert, einschließlich `currentcolor` oder `hsl(180 100% 50%)`, usw., bewirkt, dass die erste Stilabfrage true ergibt; es sind Werte, die sich vom `initial-value` unterscheiden.

Da wir `syntax: "<color>";` gesetzt haben, kann der CSS-Variable nur gültigen `<color>`-Werte zugewiesen werden. Gültige Werte für die {{cssxref("color")}}-Eigenschaft, die keine `<color>`-Werte sind, wie `unset` oder `inherit`, sind [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling) für diese benutzerdefinierte Eigenschaft und werden ignoriert.

Wenn Sie `unset` oder `gibberish` eingeben, aktualisiert das JavaScript das `style` auf dem {{HTMLElement("body")}} zu `--theme: unset` oder `--theme: gibberish`. Keines davon sind Farben. Beide sind ungültig und werden ignoriert. Das bedeutet, dass der Anfangswert geerbt und unverändert bleibt, wobei `style(--theme)` zu false und `style(--theme: red)` zu true führt.

> [!NOTE]
> Wenn Sie benutzerdefinierte Eigenschaften deklarieren, erwägen Sie die Verwendung von `@property` mit dem {{cssxref("@property/syntax","syntax")}}-Descriptor, damit der Browser berechnete Werte ordnungsgemäß vergleichen kann.

### Verschachtelte Abfragen

Containerabfragen können innerhalb anderer Container-Abfragen verschachtelt sein. Die in mehreren verschachtelten Containerabfragen definierten Stile werden angewendet, wenn alle umgebenden Containerabfragen true sind.

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

In diesem Fall wird das `<output>` eine 5px gepunktete Umrandung haben, wenn es in einem Container verschachtelt ist, in dem `--theme: purple` gesetzt ist, und dieser Container in einem Container verschachtelt ist, dessen `--theme`-Wert `red` ist.

### Stilanfrage von CSS-Deklarationen und -Eigenschaften

Nicht in jedem Browser unterstützt, kann die `style()`-Funktionsnotation regelmäßige CSS-Deklarationen einschließlich CSS-Eigenschaften und Eigenschafts-Wert-Paare enthalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn unterstützt, wird dieses einfache Beispiel den Hintergrund von allen {{htmlelement("b")}} und {{htmlelement("strong")}}-Elementen gelb färben, wenn der Elternelement bereits `fett` ist.

Das Matching erfolgt gegen den berechneten Wert des übergeordneten Containers; wenn der berechnete {{cssxref("font-weight")}}-Wert des Elternelements `fett` ist (nicht `schwerer` oder `900`), gibt es ein Match. Genau wie bei benutzerdefinierten Eigenschaften-Container-Stilabfragen mussten wir keine Elemente als Stilcontainer definieren, da alle Elemente standardmäßig Stilcontainer sind. Solange ein Element keinen `container-name` hat, wenn es `font-weight: fett` gesetzt oder geerbt hat, wird es ein Match sein.

Stilmerkmale, die eine Kurzform-Eigenschaft abfragen, sind true, wenn die berechneten Werte für jede der Langform-Eigenschaften übereinstimmen, aus denen sich diese Kurzform zusammensetzt, und false andernfalls. Zum Beispiel würde `@container style({{cssxref("border")}}: 2px solid red)` true ergeben, wenn alle 12 Langform-Eigenschaften ({{cssxref("border-bottom-style")}}, usw.), die diese Kurzform bilden, auf den gleichen äquivalenten Wert gesetzt sind.

Die globalen CSS-Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und verursachen, dass die Containerstilanfrage false ergibt.

Wenden Sie die Stile, die Sie in der Stilanfrage abfragen, nicht auf das Element an, das Sie mit dieser Abfrage stylen, da dies eine Endlosschleife verursachen könnte.

Es wird erwartet, dass Stilanfragen auch Eigenschaften in einem booleschen Kontext akzeptieren. Die Stilanfrage ergibt false, wenn der Wert der Eigenschaft der Anfangswert für diese Eigenschaft ist (wenn er nicht geändert wurde), und true andernfalls.

```css
@container style(font-weight) {
}
```

Das obige Beispiel ergibt true für jede Element, die einen Wert für `font-weight` hat, der sich von ihrem Anfangswert unterscheidet. Benutzeragentur-Stylesheets setzen `font-weight: fett` für {{htmlelement("Überschriftselemente", "Überschrift")}} und {{htmlelement("th")}}-Elemente, zum Beispiel. Einige Browser setzen {{htmlelement("stark")}} und {{htmlelement("b")}} auf `fett`, andere auf `schwerer`. {{htmlelement("optgroup")}} hat auch manchmal ein `font-weight`, das nicht `normal` ist, das von der Benutzeragentur festgelegt wurde. Solange das `font-weight` des Elements nicht der Standardwert für diese Benutzeragentur ist, ergibt die Stilanfrage true.

Diese Funktionen werden derzeit von keinem Browser unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}}-Regel
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container")}} Kurzformat-Eigenschaft
- CSS {{Cssxref("container-name")}}-Eigenschaft
- [Verwendung von Scrollstatus-Abfragen für Container](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Verstehen des `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Einführung in Stilanfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilanfragen](https://una.im/style-queries/) über una.im (2022)
