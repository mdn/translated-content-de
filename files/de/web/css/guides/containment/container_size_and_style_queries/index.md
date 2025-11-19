---
title: Verwendung von Containergrößen- und Stilabfragen
slug: Web/CSS/Guides/Containment/Container_size_and_style_queries
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

[Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries) ermöglichen es, Stile auf Elemente anzuwenden, die sich innerhalb eines bestimmten Containers befinden, basierend auf den Merkmalen dieses Containers. Die Abfrage liefert wahr oder falsch zurück, je nachdem, ob die Abfragebedingung für den Container wahr ist.

Containerabfragen sind ähnlich wie [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries). Die {{cssxref("@media")}} At-Regel ermöglicht es, Stile auf Elemente basierend auf der Größe des Ansichtsfensters oder anderen Gerätemerkmalen anzuwenden. Ähnlich dazu ermöglicht die {{cssxref("@container")}} At-Regel, Stile auf Elemente basierend auf der Größe eines enthaltenen Elements oder anderen Stileigenschaften anzuwenden, anstatt auf das Ansichtsfenster. Containerabfragen haben dieselben Syntaxregeln und logischen Operatoren wie Medienabfragen.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt drei Arten von Containerabfragen:

- **Containergrößenabfragen**
  - : Größenabfragen ermöglichen es, Stile basierend auf der aktuellen [Größe](/de/docs/Web/CSS/Reference/At-rules/@container#descriptors) eines enthaltenen Elements anzuwenden, einschließlich der Ausrichtung und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}}. Die enthaltenen Elemente müssen ausdrücklich als _Größenabfrage-Container_ deklariert werden.

- **Containerstilabfragen**
  - : Stilabfragen ermöglichen es, Stile basierend auf den Stileigenschaften eines enthaltenen Elements anzuwenden. Jedes nicht-leere Element kann ein Stilabfrage-Container sein. Zurzeit wird von Stilabfragen nur die Stileigenschaft CSS [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) unterstützt. In diesem Fall gibt die Abfrage wahr oder falsch zurück, abhängig vom berechneten Wert der benutzerdefinierten Eigenschaften des enthaltenen Elements. Sobald Containerstilabfragen vollständig unterstützt werden, ermöglichen sie es, auf jeden Nachfahren eines Elements Stile basierend auf einer beliebigen Eigenschaft, Deklaration oder berechnetem Wert anzuwenden — zum Beispiel, wenn der Container `display: inline flex` ist oder eine nicht-transparente Hintergrundfarbe hat.

- **[Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)**
  - : Scroll-Zustandsabfragen ermöglichen es, CSS-Regeln selektiv auf Nachfahren eines Containers anzuwenden, basierend auf Scroll-Zustandsbedingungen, wie zum Beispiel, ob das abgefragte Element teilweise gescrollt ist oder ob der Container an einen Scrollsnap-Container angeheftet ist. Die enthaltenen Elemente müssen ausdrücklich als _Scroll-Zustandsabfrage-Container_ deklariert werden.

In diesem Leitfaden lernen wir die Grundlagen von Containerabfragen, indem wir uns anschauen:

1. [Containergrößenabfragen](#container_size_queries_2),
2. [Benennung von Containern](#benennung_von_containern), um deren Umfang zu begrenzen, und
3. die Verwendung der `style()`-Funktionalnotation innerhalb der {{cssxref("@container")}} At-Regel `<container-condition>`, um [Stilabfragen mit benutzerdefinierten Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

Scroll-Zustandsabfragen werden in [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) behandelt.

## Containergrößenabfragen

Containergrößenabfragen werden durch eine Größenbedingung gefiltert. Die zugehörigen Stile werden auf enthaltene Elemente angewendet, wenn das Containerelement als Container deklariert wurde und die Containerbedingung für dieses Element wahr ist. Der Größencontainer eines Elements ist der nächste Vorfahr mit Containment.

Elemente werden als _Größenabfrage-Container_ deklariert, indem ihre {{cssxref("container-type")}}-Eigenschaft (oder die {{cssxref("container")}}-Kurzform) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Die Deklaration von Größenabfrage-Containern fügt ihnen [Containment](/de/docs/Web/CSS/Guides/Containment/Using) hinzu. Dies ist aus Leistungsgründen notwendig — die Größe jedes Elements im DOM jederzeit abzufragen, wäre schlecht für die Leistung und Benutzererfahrung. Zusätzlich könnte, wenn ein Nachfahrenstil die Größe des Containerelements ändert, eine Endlosschleife auftreten.

In einer Containergrößenabfrage enthält `<container-condition>` ein oder mehrere `<size-query>`s. Jede Größenabfrage enthält einen Namen einer Größenfunktion, einen Vergleichsoperator und einen Wert. Die Größenfunktionen, die abgefragt werden können, sind auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation` beschränkt. Die boolesche Syntax und Logik zum Kombinieren von einem oder mehreren `<size-query>`s ist die gleiche wie bei [`@media`](/de/docs/Web/CSS/Reference/At-rules/@media) Größenfunktionen-Abfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Die `<container-condition>` in diesem Beispiel enthält eine einzelne `<size-query>` — `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}}-Elemente potenzielle Treffer für jede unbenannte Containerabfrage. Die innerhalb unserer Containerabfrage deklarierten Stile gelten für die Nachfahren aller Formulare mit einer Breite von `10em` bis `30em`, einschließlich.

## Benennung von Containern

Eine `<container-condition>` kann einen optionalen, auf Groß- und Kleinschreibung achtenden {{cssxref("container-name")}} enthalten. Ein Containername macht die Containerbedingung spezifischer — sie wird nur für Elemente ausgewertet, die diesen Namen in der `container-name`-Eigenschaft gesetzt haben.

Die {{cssxref("container-name")}}-Eigenschaft gibt eine Liste von Abfrage-`<container-name>`-Werten an, die in `@container`-Regeln verwendet werden können; dies sind auf Groß- und Kleinschreibung achtende {{cssxref("ident")}}-Werte. Die Container-Namen ermöglichen das Ziel jedes Container-Vorfahren des Elements. Ohne einen Container-Namen stimmt die Abfrage nur mit dem nächsten Container-Vorfahren überein.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Namen zu Ihren `@container`-At-Regeln hinzugefügt haben, können Sie die {{cssxref("container-name")}}-Eigenschaft oder die {{cssxref("container")}}-Kurzform verwenden, um spezifische Containerelemente anzuzielen. Die Stile innerhalb der benannten `@container`-At-Regeln werden nur auf übereinstimmende Elemente innerhalb von Containern mit den gesetzten Namen angewandt, die die Containerabfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel werden die Stile innerhalb des Containerabfrageblocks auf die Nachfahren aller {{htmlelement("li")}}-Elemente mit einer Breite, die größer als ihre Höhe ist, angewendet. Beachten Sie, dass auch andere Elemente, auf die `container-name: card` angewandt wurde und die mit der Größenabfrage übereinstimmen, diese Stile auf die Nachfahren ihrer Elemente anwenden.

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

Im obigen Beispiel hat das Element zwei Container-Namen, `wide` und `narrow`. Die Nachfahren von Elementen mit `class="sizeContainer"` erhalten die Stile aus der `wide` oder `narrow`-Abfrage.

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer wird, aber er kann immer noch ein [Stilcontainer](#containerstilabfragen) sein. Der Standardwert `container-name: none` gibt an, dass der Container keinen Namen hat, aber es verhindert nicht, dass das Element mit unbenannten Abfragen übereinstimmt.

Mit Containerabfragen sind wir nicht auf Größenabfragen beschränkt! Sie können auch die Stileigenschaften eines Containers abfragen.

## Containerstilabfragen

Eine _Containerstilabfrage_ ist eine `@container`-Abfrage, die die berechneten Stile des Containerelements bewertet, wie sie in einer oder mehreren `style()`-Funktionsnotationen definiert sind. Die boolesche Syntax und Logik zur Kombination von Stileigenschaften in eine Stilabfrage ist die gleiche wie in [CSS-Funktionsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname — `style()` innerhalb eines `<style-feature>` anstelle von `supports()` innerhalb eines `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist ein einzelnes **`<style-feature>`**. Entsprechend der CSS Containment-Spezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values) sein. Die einzige zur Zeit unterstützte Stileigenschaft sind benutzerdefinierte Eigenschaften, mit oder ohne Wert. Siehe die [Browser-Kompatibilitätstabelle für `@container`](/de/docs/Web/CSS/Reference/At-rules/@container#browser_compatibility).

Wenn das `<style-feature>` einen Wert enthält, wertet die Stilabfrage zu wahr aus, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder, in der Zukunft, der CSS-Deklaration), die als Argument der `style()`-Funktion übergeben wird, für den abgefragten Container wahr ist. Andernfalls wird es zu falsch ausgewertet. Eine Stileigenschaft ohne Wert wird zu wahr ausgewertet, wenn der berechnete Wert sich vom [Anfangswert](#registrierte_eigenschaften) für die gegebene Eigenschaft unterscheidet.

In der Zukunft werden wir Stilabfragen wie folgt schreiben können:

```css
@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple),
    (width <= 100vw) and style(max-width: 600px) {
  /* <stylesheet> */
}
```

Die `style()`-Funktionalnotation wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Obwohl noch nicht unterstützt, werden wir schließlich reguläre CSS-Deklarationen wie `max-width: 600px` abfragen können. Das Abfragen von `@container (max-width: 600px)` ist eine Größenabfrage; Containment mit {{cssxref("container-type")}}, oder die {{cssxref("container")}}-Kurzform, ist notwendig. Diese Abfrage gibt wahr zurück, wenn der Container 600px oder kleiner ist. Dies unterscheidet sich vom Abfragen von `@container style(max-width: 600px)`, was eine Stilabfrage ist; wenn sie unterstützt wird, gibt diese Abfrage wahr zurück, wenn der Container einen {{cssxref("max-width")}}-Wert von `600px` hat.

Bis Stilabfragen für reguläre CSS-Deklarationen und -Eigenschaften unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als `style()`-Parameter einzuschließen, mit oder ohne Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige Dinge, die schon erwähnt wurden, aber wichtig sind zu beachten:

- Alle Elemente können Stilabfrage-Container sein; das Setzen eines `container-type` ist nicht nötig. Wenn Nachfahrenstile die berechneten Stile eines Vorfahren nicht beeinflussen, ist Containment nicht erforderlich.
- Eine `<container-condition>` kann sowohl Stil- als auch Größeneigenschaften enthalten. Wenn Sie Größeneigenschaften in Ihre Abfrage aufnehmen, stellen Sie sicher, dass Ihre Containerelemente einen `container-type` von `size` oder `inline-size` gesetzt haben.
- Wenn Sie nicht wollen, dass ein Element jemals als Container betrachtet wird, geben Sie ihm einen `container-name`, der nie verwendet wird. Das Setzen von `container-name: none` entfernt alle Abfragenamen, die mit einem Container verbunden sind; es verhindert nicht, dass das Element ein Stilcontainer ist.
- Zum Zeitpunkt dieses Schreibens (Februar 2024) funktionieren Containerstilabfragen nur mit CSS-Benutzerdefinierte Eigenschaftswerte in der `style()`-Abfrage.

Nun, lassen Sie uns in die verschiedenen `<style-feature>`-Typen eintauchen.

### Stilabfragen für benutzerdefinierte Eigenschaften

Stilabfragen für benutzerdefinierte Eigenschaften ermöglichen es Ihnen, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), auch "CSS-Variablen" genannt, eines Elternelements abzufragen. Sie sind innerhalb eines `<style-query>` enthalten, genauso wie Sie jede reguläre CSS-Eigenschaft innerhalb einer Funktionsabfrage einfügen würden: entweder mit oder ohne einen Wert.

#### Eigenständige Abfragen benutzerdefinierter Eigenschaften

Der `<style-query>`-Parameter der `style()`-Funktionalnotation kann nur einen CSS-Variablennamen enthalten; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert enthalten ist, wird die Abfrage falsch zurückgeben, wenn der Wert derselbe wie der Wert der `initial-value`-Deskriptor innerhalb der `@property`-At-Regel ist, falls vorhanden. Die Stilabfrage gibt wahr zurück und stimmt mit allen Elementen überein, die einen benutzerdefinierten Eigenschaftswert haben, der sich vom `initial-value` unterscheidet, oder für alle Elemente, die eine benutzerdefinierte Eigenschaft von irgendeinem Wert haben, falls die benutzerdefinierte Eigenschaft deklariert, aber nicht registriert wurde.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen über eine Wertzuweisung für eine benutzerdefinierte CSS-Eigenschaft eingeführt werden, geben wertlose benutzerdefinierte Eigenschaftsabfragen immer wahr zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel stimmt die Containerabfrage mit dem Element überein, auf dem die `--theme-color`-Eigenschaft deklariert wurde, und allen dessen Nachkommen. Da die CSS-Variable `--theme-color` auf der {{cssxref(":root")}} deklariert wurde, wird die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}}-Knotens wahr sein.

##### Registrierte Eigenschaften

Das Verhalten registrierter benutzerdefinierter Eigenschaften ist anders. Wenn sie explizit mit der {{cssxref("@property")}} CSS-At-Regel oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert werden, gibt die Stilabfrage `style(--theme-color)` nur wahr für Elemente zurück, wenn der berechnete Wert für `--theme-color` des Elements sich vom [`initial-value`](/de/docs/Web/CSS/Reference/At-rules/@property/initial-value) unterscheidet, der in der ursprünglichen Definition dieser benutzerdefinierten Eigenschaft gesetzt wurde.

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

In diesem Beispiel stimmt das `:root`-Element NICHT mit der Stilabfrage überein, weil der Wert der benutzerdefinierten Eigenschaft derselbe wie der `initial-value`-Wert ist. Der benutzerdefinierte Eigenschaftswert für das Element (und alle Elemente, die den Wert erben) bleibt `rebeccapurple`. Nur Elemente, die sich vom Anfangswert unterscheiden, in diesem Fall der {{htmlelement("main")}} und seine Nachkommen, die diesen geänderten Wert erben, sind eine Übereinstimmung.

#### Benutzerdefinierte Eigenschaft mit einem Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert für diese Eigenschaft des Elements eine exakte Übereinstimmung sein, wobei gleichwertige Werte nur dann eine Übereinstimmung sind, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}}-At-Regel (oder einem [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)-Methodenaufruf) definiert wurde, die einen `syntax`-Deskriptor enthält.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Containerstilabfrage stimmt mit jedem Element überein, das `blue` als [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der benutzerdefinierten Eigenschaft `--accent-color` hat.

In diesem Fall werden andere Farbwerte, die äquivalent zu sRGB `blue` sind (wie der Hexadezimal-Code `#0000ff`), nur dann eine Übereinstimmung sein, wenn die `--accent-color`-Eigenschaft als eine Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, zum Beispiel:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #0000ff;
}
```

In diesem Fall, wenn der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzt wird, würde es für `@container style(--accent-color: blue)` wahr sein.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Optionsfeldern. Die vierte Option enthält ein Text-{{htmlelement("input")}}-Feld zum Eingeben einer benutzerdefinierten Farbe.

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

JavaScript aktualisiert den Wert der CSS-Variablen `--theme` auf dem {{htmlelement("body")}}-Element, das ein Vorfahr der {{htmlelement("fieldset")}}- und {{htmlelement("output")}}-Elemente ist, wann immer ein Optionsfeld ausgewählt wird. Wenn das Text-`<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des `other`-Optionsfeldes nur aktualisiert, wenn das `other`-Optionsfeld aktiviert ist, was wiederum den Wert von `--theme` aktualisiert.

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

Wir verwenden die `@property`-At-Regel, um eine CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}}-Wert zu definieren und setzen den `initial-value` auf `red`, um sicherzustellen, dass äquivalente Farben unabhängig von der verwendeten Syntax übereinstimmend sind (zum Beispiel ist `red` gleich `rgb(255 0 0)`, `#ff0000` und `#f00`).

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

Die erste Stilabfrage ist eine benutzerdefinierte Eigenschaft ohne Wert. Dieser Abfragetyp gibt wahr zurück, wenn der berechnete Wert für die benutzerdefinierte Eigenschaft anders ist als der `initial-value` für diese Eigenschaft. In diesem Fall wird er wahr sein, wenn der Wert von `--theme` ein anderer Wert als irgendein Syntax-äquivalenter Wert von `red` (wie `#ff0000`) ist. Wenn wahr, hat das {{htmlelement("output")}} einen 5px gepunkteten Umriss. Die Umrissfarbe ist der aktuelle Wert von `--theme`. Die Standardtext{{cssxref("color")}} ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777777;
  }
}
```

Die zweite und dritte Stilabfragen enthalten Werte für die benutzerdefinierte Eigenschaft. Diese stimmen überein, wenn der Wert von `--theme` für den Container eine gleichwertige Farbe zum aufgelisteten Wert ist, selbst wenn dieser Wert derselbe wie der `initial-value` ist. Die erste Abfrage stimmt mit Elementen überein, wenn der Wert von `--theme` gleich `red`, `blue` oder `green` ist. Ist das der Fall, wird {{cssxref("color")}} der aktuelle Wert von `--theme` (im Fall von `blue` und `green`, die das in der ersten Stilabfrage gesetzte Grau überschreiben).

Die zweite Stilabfrage gibt an, dass wenn `--theme` gleich `red` ist, der Inhalt des `<output>`s auch fett gedruckt wird. Das haben wir gemacht, um besser zu demonstrieren, dass die Containerabfrage übereinstimmt.

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

Versuchen Sie, verschiedene Farbwerte in das Textfeld einzugeben. Möglicherweise bemerken Sie, dass Werte, die sRGB-Äquivalente von `red` sind, das `<output>` rot machen — da sie mit `style(--theme: red)` übereinstimmen — während der Umriss entfernt wird, weil `style(--theme)` falsch zurückgibt, wenn der Elementwert für `--theme` derselbe wie der Anfangswert für `--theme` ist, der durch die `@property`-At-Regel definiert wurde. Jeder nicht-rote sRGB-gültige Farbwert, einschließlich `currentColor` oder `hsl(180 100% 50%)`, etc., macht die erste Stilabfrage wahr; sie sind Werte, die sich vom `initial-value` unterscheiden.

Da wir `syntax: "<color>";` gesetzt haben, kann die CSS-Variable nur gültige `<color>` Werte zugewiesen werden. Gültige Werte für die {{cssxref("color")}}-Eigenschaft, die keine `<color>`-Werte sind, wie `unset` oder `inherit`, sind [ungültig](/de/docs/Web/CSS/Guides/Syntax/Error_handling) für diese benutzerdefinierte Eigenschaft und werden ignoriert.

Wenn Sie `unset` oder `gibberish` eingeben, aktualisiert das JavaScript den `style` des {{HTMLElement("body")}} auf `--theme: unset` oder `--theme: gibberish`. Keiner von beiden ist eine Farbe. Beide sind ungültig und werden ignoriert. Dies bedeutet, dass der Anfangswert geerbt und unverändert bleibt, wobei `style(--theme)` falsch und `style(--theme: red)` wahr zurückgibt.

> [!NOTE]
> Erwägen Sie beim Deklarieren benutzerdefinierter Eigenschaften die Verwendung von `@property` mit dem {{cssxref("@property/syntax","syntax")}}-Deskriptor, damit der Browser die berechneten Werte korrekt vergleichen kann.

### Verschachtelte Abfragen

Containerabfragen können innerhalb anderer Containerabfragen verschachtelt werden. Die in mehreren verschachtelten Containerabfragen definierten Stile werden angewendet, wenn alle umschließenden Containerabfragen wahr sind.

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

In diesem Fall wird das `<output>` einen 5px gepunkteten Rahmen haben, wenn es in einem Container verschachtelt ist, wo `--theme: purple` gesetzt ist und dieser Container innerhalb eines Containers verschachtelt ist, dessen `--theme`-Wert `red` ist.

### Stilabfragen mit CSS-Deklarationen und -Eigenschaften

Noch nicht in einem Browser unterstützt, kann die `style()`-Funktionalnotation reguläre CSS-Deklarationen einschließlich CSS-Eigenschaften und Eigenschaftswertpaaren beinhalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn unterstützt, wird dieses einfache Beispiel die Hintergrundfarbe von {{htmlelement("b")}} und {{htmlelement("strong")}}-Elementen gelb machen, wenn das übergeordnete Element bereits `bold` ist.

Die Übereinstimmung erfolgt gegen den berechneten Wert des übergeordneten Containers; wenn der berechnete {{cssxref("font-weight")}} des Elternteils `bold` ist (nicht `bolder` oder `900`), gibt es eine Übereinstimmung. Genau wie bei Containerstilabfragen für benutzerdefinierte Eigenschaften mussten wir keine Elemente als Stilcontainer definieren, da alle Elemente standardmäßig Stilcontainer sind. Solange ein Element keinen `container-name` gesetzt hat, wird es übereinstimmen, wenn es `font-weight: bold` gesetzt oder geerbt hat.

Stilabfragen, die eine Kurzformeigenschaft abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langformeigenschaften übereinstimmen, und falsch ansonsten. Zum Beispiel wird `@container style({{cssxref("border")}}: 2px solid red)` wahr sein, wenn alle 12 Langformeigenschaften ({{cssxref("border-bottom-style")}}, etc.), die diese Kurzform ausmachen, auf denselben äquivalenten Werte gesetzt sind.

Die globalen CSS-Werte `revert` und `revert-layer` sind ungültig als Werte in einem `<style-feature>` und verursachen, dass die Containerstilabfrage falsch ist.

Wenden Sie die Stile, die Sie in der Stilabfrage abfragen, nicht auf das Element an, das Sie mit dieser Abfrage stylen, da dies eine Endlosschleife verursachen könnte.

Es wird erwartet, dass Stilabfragen auch Eigenschaften in einem booleschen Kontext akzeptieren. Die Stilabfrage wird falsch sein, wenn der Wert der Eigenschaft der Anfangswert für diese Eigenschaft ist (wenn er nicht geändert wurde), und wahr ansonsten.

```css
@container style(font-weight) {
}
```

Das obige Beispiel wird wahr für jedes Element sein, das einen `font-weight`-Wert hat, der sich vom Anfangswert unterscheidet. Benutzersagenten-Stile setzen `font-weight: bold` für {{htmlelement("heading_elements", "Überschriften")}} und {{htmlelement("th")}}-Elemente, zum Beispiel. Einige Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} hat ebenfalls manchmal einen `font-weight`, der nicht `normal` ist, vom Benutzersagenten gesetzt. Solange das `font-weight` des Elements nicht der Standardwert für diesen Benutzeragenten ist, wird die Stilabfrage wahr sein.

Diese Funktionen werden noch in keinem Browser unterstützt.

## Siehe auch

- [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries)
- CSS {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container")}} Kurzformeigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verständnis von `aspect-ratio`](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [Erste Schritte mit Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) via una.im (2022)
