---
title: Verwendung von Container-Größen- und Stilabfragen
slug: Web/CSS/CSS_containment/Container_size_and_style_queries
l10n:
  sourceCommit: 1ed137ce2510aa322c198bcf9d8592a445f915db
---

[Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) ermöglichen es Ihnen, Stile auf Elemente anzuwenden, die sich innerhalb eines bestimmten Containers befinden, basierend auf den Eigenschaften dieses Containers. Die Abfrage liefert wahr oder falsch, je nachdem, ob die Abfragebedingung für den Container zutrifft.

Container-Abfragen ähneln [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries). Die {{cssxref("@media")}}-Regel ermöglicht es, Stile basierend auf der Größe des Ansichtsfensters oder anderen Gerätemerkmalen anzuwenden. Ähnlich ermöglicht die {{cssxref("@container")}}-Regel, Stile basierend auf der Größe oder anderen Stileigenschaften eines enthaltenen Elements anzuwenden, anstatt auf das Ansichtsfenster. Container-Abfragen haben die gleichen Syntaxregeln und logischen Operatoren wie Medienabfragen.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt drei Arten von Container-Abfragen:

- **Container-Größenabfragen**
  - : Größenabfragen ermöglichen es, Stile basierend auf der aktuellen [Größe](/de/docs/Web/CSS/@container#descriptors) eines enthaltenen Elements anzuwenden, einschließlich der Ausrichtung und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}}. Die enthaltenen Elemente müssen explizit als _Größenabfrage-Container_ deklariert werden.

- **Container-Stilabfragen**
  - : Stilabfragen ermöglichen es, Stile basierend auf den Stileigenschaften eines enthaltenen Elements anzuwenden. Jedes nicht-leere Element kann ein Stilabfrage-Container sein. Derzeit ist das einzige von Stilabfragen unterstützte Stilelement die CSS [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties). In diesem Fall gibt die Abfrage wahr oder falsch zurück, abhängig vom berechneten Wert der benutzerdefinierten Eigenschaften des enthaltenen Elements. Wenn Container-Stilabfragen vollständig unterstützt werden, können Sie Stile basierend auf jeder Eigenschaft, Deklaration oder berechnetem Wert auf die Nachkommen eines Elements anwenden – zum Beispiel, wenn der Container `display: inline flex` ist oder eine nicht-transparente Hintergrundfarbe hat.

- **[Container-Scrollstatus-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)**
  - : Scrollstatus-Abfragen ermöglichen es Ihnen, CSS-Regeln selektiv auf die Nachkommen eines Containers anzuwenden, basierend auf Scrollstatus-Bedingungen, wie etwa ob das abgefragte Element teilweise gescrollt wird oder ob der Container an einem Scrollsnap-Container befestigt ist. Die enthaltenen Elemente müssen explizit als _Scrollstatus-Abfrage-Container_ deklariert werden.

In diesem Leitfaden lernen wir die Grundlagen von Container-Abfragen, indem wir uns ansehen:

1. [Container-Größenabfragen](#container_size_queries_2),
2. [Benennung von Containern](#benennung_von_containern), um ihren Umfang einzuschränken, und
3. die Verwendung der `style()`-Funktionsnotation innerhalb der {{cssxref("@container")}}-Regel im `<container-condition>`, um [Stilabfragen mit benutzerdefinierten Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

Scrollstatus-Abfragen werden in [Verwendung von Container-Scrollstatus-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) behandelt.

## Container-Größenabfragen

Container-Größenabfragen werden nach einer Größenbedingung gefiltert. Die zugehörigen Stile werden auf enthaltende Elemente angewendet, wenn das Container-Element als Container deklariert wurde und die Container-Bedingung für dieses Element zutrifft. Der Größencontainer eines Elements ist der nächstgelegene Vorfahre mit Einschluss.

Elemente werden als _Größenabfrage-Container_ deklariert, indem ihre {{cssxref("container-type")}}-Eigenschaft (oder die {{cssxref("container")}}-Kurzform) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Die Deklaration von Größenabfrage-Containern fügt ihnen [Einschluss](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) hinzu. Dies ist eine Leistungsnotwendigkeit – die Abfrage der Größe jedes Elements im DOM zu jeder Zeit wäre schlecht für die Leistung und Benutzererfahrung. Zusätzlich könnte eine unendliche Schleife entstehen, wenn ein Nachkommenstil die Größe des Container-Elements ändern würde.

In einer Container-Größenabfrage enthält die `<container-condition>` eine oder mehrere `<size-query>`s. Jede Größenabfrage enthält einen Namen eines Größenmerkmals, einen Vergleichsoperator und einen Wert. Die Größenmerkmale, die abgefragt werden können, beschränken sich auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation`. Die boolesche Syntax und Logik, die eine oder mehrere `<size-query>`s kombiniert, ist dieselbe wie bei [`@media`](/de/docs/Web/CSS/@media)-Größenmerkmalsabfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Die `<container-condition>` in diesem Beispiel enthält eine einzelne `<size-query>` – `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}}-Elemente potenzielle Treffer für jede unbenannte Containerabfrage. Die innerhalb unserer Containerabfrage deklarierten Stile gelten für die Nachkommen aller Formulare, die zwischen `10em` und `30em` breit sind, einschließlich.

## Benennung von Containern

Eine `<container-condition>` kann optional einen case-sensitiven {{cssxref("container-name")}} beinhalten. Ein Containername macht die Container-Bedingung spezifischer – sie wird nur gegen Elemente ausgewertet, die diesen Namen in der `container-name`-Eigenschaft gesetzt haben.

Die {{cssxref("container-name")}}-Eigenschaft gibt eine Liste von Abfrage-`<container-name>`-Werten an, die in `@container`-Regeln verwendet werden können; dies sind case-sensitive {{cssxref("ident")}}-Werte. Die Container-Namen ermöglichen die Ausrichtung auf einen beliebigen Container-Vorfahren des Elements. Ohne einen Container-Namen passt die Abfrage nur auf den nächstgelegenen Container-Vorfahren.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Namen zu Ihren `@container`-Regeln hinzugefügt haben, können Sie die {{cssxref("container-name")}}-Eigenschaft oder die {{cssxref("container")}}-Kurzform verwenden, um bestimmte Container-Elemente zu zielen. Stile innerhalb der benannten `@container`-Regeln werden nur auf übereinstimmende Elemente innerhalb von Containern mit diesen gesetzten Namen angewendet, die die Container-Abfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel werden die Stile innerhalb des Containerabfrage-Blocks auf die Nachkommen aller {{htmlelement("li")}}-Elemente angewendet, deren Breite größer ist als ihre Höhe. Beachten Sie, dass andere Elemente mit `container-name: card`, die die Größenabfrage erfüllen, auch diese Stile auf die Nachkommen ihrer Elemente anwenden werden.

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

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer wird, aber er kann trotzdem ein [Stil-Container](#container-stilabfragen) sein. Der Standardwert `container-name: none` besagt, dass der Container keinen Namen hat, aber es verhindert nicht, dass das Element namenlose Abfragen erfüllt.

Mit Container-Abfragen sind wir nicht auf Größenabfragen beschränkt! Sie können auch die Stileigenschaften eines Containers abfragen.

## Container-Stilabfragen

Eine _Container-Stilabfrage_ ist eine `@container`-Abfrage, die die berechneten Stile des Container-Elements auswertet, wie in der Funktionsnotation `style()` definiert. Die boolesche Syntax und Logik, die zur Kombination von Stileigenschaften in einer Stilabfrage verwendet wird, ist dieselbe wie in [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname – `style()` innerhalb eines `<style-feature>` anstelle von `supports()` innerhalb eines `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist ein einzelnes **`<style-feature>`**. Gemäß der CSS-Einschluss-Spezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values) sein. Das einzige derzeit unterstützte Stilelement sind benutzerdefinierte Eigenschaften, mit oder ohne Wert. Siehe die [Browser-Kompatibilitätstabelle für `@container`](/de/docs/Web/CSS/@container#browser_compatibility).

Wenn das `<style-feature>` einen Wert enthält, wird die Stilabfrage als wahr ausgewertet, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder künftig der CSS-Deklaration), die als `style()`-Argument übergeben wird, für den abgefragten Container zutrifft. Andernfalls wird es als falsch aufgelöst.
Ein Stilelement ohne Wert wird als wahr ausgewertet, wenn der berechnete Wert nicht den [Anfangswert](#registrierte_eigenschaften) für die gegebene Eigenschaft entspricht.

In Zukunft werden wir Stileigenschaften wie folgt in Abfragen verwenden können:

```css
@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple),
    (width <= 100vw) and style(max-width: 600px) {
  /* <stylesheet> */
}
```

Die Funktionsnotation `style()` wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Obwohl noch nicht unterstützt, werden wir schließlich reguläre CSS-Deklarationen wie `max-width: 600px` abfragen können. Die Abfrage `@container (max-width: 600px)` ist eine Größenabfrage; containment mit {{cssxref("container-type")}}, oder die {{cssxref("container")}}-Kurzform, ist notwendig. Diese Abfrage wird wahr sein, wenn der Container 600px oder weniger ist. Dies unterscheidet sich von der Abfrage `@container style(max-width: 600px)`, das eine Stilabfrage ist; wenn es unterstützt wird, wird diese Abfrage wahr sein, wenn der Container einen {{cssxref("max-width")}}-Wert von `600px` hat.

Bis Stilabfragen für reguläre CSS-Deklarationen und Eigenschaften unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als den `style()`-Parameter, mit oder ohne Wert, einzuschließen:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige Punkte, die bereits erwähnt wurden, aber wichtig sind, sich zu merken:

- Alle Elemente können Stilabfrage-Container sein; das Setzen eines `container-type` ist nicht erforderlich. Wenn Nachkommenstile die berechneten Stile eines Vorfahren nicht beeinflussen, ist Einschluss nicht notwendig.
- Eine `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn man Größenmerkmale in die Abfrage einbezieht, sollte man sicherstellen, dass die Container-Elemente einen `container-type` `size` oder `inline-size` eingestellt haben.
- Wenn man nicht möchte, dass ein Element jemals als Container angesehen wird, kann man ihm einen `container-name` geben, der nicht verwendet wird. Das Setzen von `container-name: none` entfernt alle Abfragenamen, die mit einem Container assoziiert sind; es verhindert nicht, dass das Element ein Stilcontainer ist.
- Zum Zeitpunkt des Schreibens dieses Artikels (Februar 2024) funktionieren Container-Stilabfragen nur mit CSS-Custom-Property-Werten in der `style()`-Anfrage.

Nun, lassen Sie uns eintauchen und die verschiedenen Typen von `<style-feature>` betrachten.

### Stilabfragen für benutzerdefinierte Eigenschaften

Stilabfragen für benutzerdefinierte Eigenschaften ermöglichen es Ihnen, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), auch "CSS-Variablen" genannt, eines Elternelements abzufragen. Sie sind innerhalb eines `<style-query>` enthalten, genauso wie man eine reguläre CSS-Eigenschaft innerhalb einer Feature-Abfrage aufnehmen würde: entweder mit oder ohne Wert.

#### Eigenständige Abfragen von benutzerdefinierten Eigenschaften

Der `<style-query>`-Parameter der `style()`-Funktionsnotation kann nur einen CSS-Variablennamen enthalten; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert enthalten ist, wird die Abfrage false zurückgeben, wenn der Wert mit dem Wert des `initial-value`-Deskriptors innerhalb der `@property`-Regel übereinstimmt, falls vorhanden. Die Stilabfrage gibt true zurück und stimmt mit allen Elementen überein, die einen benutzerdefinierten Eigenschaftswert haben, der sich vom `initial-value` unterscheidet, oder für alle Elemente, die eine benutzerdefinierte Eigenschaft mit beliebigem Wert haben, wenn die benutzerdefinierte Eigenschaft deklariert wurde, ohne registriert zu werden.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen durch eine Zuweisung von CSS-Custom-Property-Werten eingeführt werden, geben wertlose benutzerdefinierte Eigenschaftenabfragen immer true zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel stimmt die Containerabfrage mit dem Element überein, auf dem die `--theme-color` Eigenschaft deklariert wurde, und allen seinen Nachkommen. Da die CSS-Variable `--theme-color` auf der {{cssxref(":root")}} deklariert wurde, wird die Stilabfrage `style(--theme-color)` für jedes Element im {{Glossary("DOM", "DOM")}}-Knoten wahr sein.

##### Registrierte Eigenschaften

Das Verhalten von registrierten benutzerdefinierten Eigenschaften ist anders. Wenn sie explizit mit der {{cssxref("@property")}}-Regel oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert werden, gibt die Stilabfrage `style(--theme-color)` true nur für Elemente zurück, wenn der berechnete Wert für `--theme-color` des Elements sich vom [`initial-value`](/de/docs/Web/CSS/@property/initial-value) unterscheidet, der in der ursprünglichen Definition dieser benutzerdefinierten Eigenschaft gesetzt wurde.

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

In diesem Beispiel stimmt das `:root`-Element nicht mit der Stilabfrage überein, da der Wert der benutzerdefinierten Eigenschaft derselbe wie der `initial-value` ist. Der benutzerdefinierte Eigenschaftswert für das Element (und alle Elemente, die den Wert erben) ist immer noch `rebeccapurple`. Nur Elemente, die sich vom Anfangswert unterscheiden, in diesem Fall das {{htmlelement("main")}} und seine Nachkommen, die diesen geänderten Wert erben, sind ein Treffer.

#### Benutzerdefinierte Eigenschaft mit Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert des Elements für diese Eigenschaft genau übereinstimmen, wobei gleichwertige Werte nur dann ein Treffer sind, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}}-Regel (oder einem [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) Methodenaufruf) definiert wurde, die einen `syntax`-Deskriptor enthält.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Container-Stilabfrage entspricht jedem Element, das `blue` als [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der benutzerdefinierten Eigenschaft `--accent-color` hat.

In diesem Fall werden andere Farbwerte, die mit sRGB `blue` gleichwertig sind (wie der Hexadezimalcode `#0000ff`), nur dann übereinstimmen, wenn die `--accent-color`-Eigenschaft als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, zum Beispiel:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #0000ff;
}
```

In diesem Fall würde ein auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzter Wert von `--accent-color` wahr für `@container style(--accent-color: blue)` zurückgeben.

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

JavaScript aktualisiert den Wert der CSS-Variablen `--theme` auf dem {{htmlelement("body")}}-Element, das ein Vorfahre der {{htmlelement("fieldset")}}- und {{htmlelement("output")}}-Elemente ist, wann immer ein Optionsfeld ausgewählt wird. Wenn das Text-`<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des `anderen`-Optionsfeldes nur aktualisiert, wenn das `andere`-Optionsfeld markiert ist, was wiederum den Wert von `--theme` aktualisiert.

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

Wir verwenden die `@property`-Regel, um eine CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}}-Wert zu definieren und setzen den `initial-value` auf `red`, um sicherzustellen, dass gleichwertige Farben unabhängig von der verwendeten Syntax ein Treffer sind (zum Beispiel ist `red` gleichwertig mit `rgb(255 0 0)`, `#ff0000` und `#f00`).

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

Die erste Stileigenschaftsabfrage ist eine benutzerdefinierte Eigenschaft ohne Wert. Dieser Abfragetyp gibt wahr zurück, wenn der berechnete Wert für den benutzerdefinierten Eigenschaftswert von dem `initial-value` dieser Eigenschaft abweicht. In diesem Fall wird es wahr sein, wenn der Wert von `--theme` ein beliebiger Wert außer einem Syntaxäquivalent von `red` ist (wie `#ff0000`). Wenn es wahr ist, hat das {{htmlelement("output")}} eine 5px punktierte Umrandung. Die Umrandungsfarbe ist der aktuelle Wert von `--theme`. Die Standard-Text-{{cssxref("color")}} ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777777;
  }
}
```

Die zweite und dritte Stilabfragen enthalten Werte für die benutzerdefinierte Eigenschaft. Diese werden übereinstimmen, wenn der `--theme`-Wert des Containers ein äquivalentes Farbwert äquivalent zu dem angegebenen ist, auch wenn der Wert derselbe wie der `initial-value` ist. Die erste Abfrage entspricht Elementen, deren `--theme`-Wert äquivalent zu `red`, `blue` oder `green` ist. Wenn dies der Fall ist, wird die {{cssxref("color")}} die Farbe des aktuellen Werts von `--theme` sein (im Fall von `blue` und `green` wird das Grau überschrieben, das in der ersten Stilabfrage gesetzt wurde).

Die zweite Stilabfrage besagt, dass wenn `--theme` äquivalent zu `red` ist, der Inhalt des `<output>` ebenfalls fett sein wird. Wir haben dies getan, um besser zu demonstrieren, dass die Containerabfrage ein Treffer ist.

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

Versuchen Sie, verschiedene Farbwerte in das Textfeld einzugeben. Sie werden bemerken, dass Werte, die sRGB-Äquivalente von `red` sind, das `<output>` rot machen – da es `style(--theme: red)` entspricht – während die Umrandung entfernt wird, da `style(--theme)` false zurückgibt, wenn der Wert des Elements für `--theme` derselbe wie der Anfangswert für `--theme` ist, der durch die `@property`-Regel definiert wurde. Jeder nicht-rote, sRGB-gültige Farbwert, einschließlich `currentColor` oder `hsl(180 100% 50%)`, usw., sorgt dafür, dass die erste Stilabfrage wahr zurückgibt, da sie Werte sind, die sich vom `initial-value` unterscheiden.

Da wir `syntax: "<color>";` gesetzt haben, kann die CSS-Variable nur gültigen `<color>`-Werten zugewiesen werden. Gültige Werte für die {{cssxref("color")}}-Eigenschaft, die keine gültigen `<color>`-Werte sind, wie `unset` oder `inherit`, sind für diese benutzerdefinierte Eigenschaft [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling) und werden ignoriert.

Wenn Sie `unset` oder `gibberish` eingeben, aktualisiert JavaScript den `style` auf dem {{HTMLElement("body")}} auf `--theme: unset` oder `--theme: gibberish`. Keiner dieser Werte sind Farben. Beide sind ungültig und werden ignoriert. Dies bedeutet, dass der Anfangswert geerbt und unverändert bleibt, wobei `style(--theme)` false zurückgibt und `style(--theme: red)` true.

> [!NOTE]
> Bei der Deklaration von benutzerdefinierten Eigenschaften sollte man in Erwägung ziehen, `@property` mit dem {{cssxref("@property/syntax","syntax")}}-Deskriptor zu verwenden, damit der Browser berechnete Werte korrekt vergleichen kann.

### Verschachtelte Abfragen

Container-Abfragen können innerhalb anderer Container-Abfragen verschachtelt werden. Die innerhalb mehrerer verschachtelter Container-Abfragen definierten Stile werden angewendet, wenn alle umschließenden Container-Abfragen wahr sind.

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

In diesem Fall wird das `<output>` eine 5px punktierte Umrandung haben, wenn es in einem Container liegt, in dem `--theme: purple` gesetzt ist, und dieser Container in einem Container verschachtelt ist, dessen `--theme`-Wert `red` ist.

### Stilabfrage-CSS-Deklarationen und -Eigenschaften

Noch in keinem Browser unterstützt, kann die `style()`-Funktionsbeschreibung reguläre CSS-Deklarationen einschließlich CSS-Eigenschaften und Eigenschaft-Werte-Paare enthalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn dies unterstützt wird, wird dieses einfache Beispiel die Hintergrundfarbe aller {{htmlelement("b")}}- und {{htmlelement("strong")}}-Elemente gelb machen, wenn das Elternelement bereits `bold` ist.

Das Matching erfolgt gegen den berechneten Wert des Eltern-Containers; wenn das berechnete {{cssxref("font-weight")}} des Elternteils `bold` ist (nicht `bolder` oder `900`), gibt es einen Match. Genau wie bei benutzerdefinierten Eigenschafts-Container-Stilabfragen mussten wir keine Elemente als Stilcontainer definieren, da alle Elemente standardmäßig Stilcontainer sind. Solange ein Element keinen `container-name` gesetzt hat, wird es, wenn es `font-weight: bold` gesetzt oder geerbt hat, übereinstimmen.

Stilelemente, die ein Kurzform-Eigenschaft abfragen, werden wahr sein, wenn die berechneten Werte jeder ihrer Langform-Eigenschaften übereinstimmen, und andernfalls falsch. Zum Beispiel wird `@container style({{cssxref("border")}}: 2px solid red)` wahr sein, wenn alle 12 Langform-Eigenschaften ({{cssxref("border-bottom-style")}}, etc.), die diese Kurzform ausmachen, auf die gleichen gleichwertigen Werte gesetzt sind.

Die globalen CSS-Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Container-Stilabfrage falsch wird.

Die Stile, die Sie in der Stilabfrage abfragen, sollten nicht auf das Element angewendet werden, das Sie mit dieser Abfrage stylen, da dies eine unendliche Schleife verursachen könnte.

Es wird erwartet, dass Stilabfragen auch Eigenschaften in einem booleschen Kontext akzeptieren werden. Die Stilabfrage gibt false zurück, wenn der Wert der Eigenschaft der Anfangswert für diese Eigenschaft ist (wenn er nicht geändert wurde), und true ansonsten.

```css
@container style(font-weight) {
}
```

Das obige Beispiel wird wahr für jedes Element, das einen Wert für `font-weight` hat, der sich vom Anfangswert unterscheidet. Benutzeragenten-Stilblätter setzen `font-weight: bold` für {{htmlelement("heading_elements", "heading")}} und {{htmlelement("th")}}-Elemente, zum Beispiel. Einige Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} hat manchmal auch ein `font-weight`, das vom Benutzeragenten auf einen anderen Wert als `normal` gesetzt wird. Solange das `font-weight` eines Elements nicht den Standardwert für diesen Benutzeragenten hat, gibt die Stilabfrage true zurück.

Diese Funktionen werden in keinem Browser bisher unterstützt.

## Siehe auch

- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}}-Regel
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container")}}-Kurzform-Eigenschaft
- CSS {{Cssxref("container-name")}}-Eigenschaft
- [Verwendung von Container-Scrollstatus-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Verständnis von `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Einstieg in Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) über una.im (2022)
