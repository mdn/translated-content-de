---
title: Verwendung von Containergrößen- und Stilabfragen
slug: Web/CSS/Guides/Containment/Container_size_and_style_queries
l10n:
  sourceCommit: 2ce88199869b63f8da3bbeafd899400f7579cce9
---

[Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries) ermöglichen es Ihnen, Stile auf Elemente anzuwenden, die innerhalb eines bestimmten Containers verschachtelt sind, basierend auf den Merkmalen dieses Containers. Die Abfrage gibt entweder `true` oder `false` zurück, je nachdem, ob die Abfragebedingung für den Container zutrifft.

Containerabfragen sind ähnlich wie [Media Queries](/de/docs/Web/CSS/Guides/Media_queries). Die {{cssxref("@media")}}-Regel ermöglicht es, Stile auf Elemente basierend auf der Bildschirmgröße oder anderen Gerätemerkmalen anzuwenden. Ähnlich ermöglicht die {{cssxref("@container")}}-Regel das Anwenden von Stilen auf Elemente basierend auf der Größe oder anderen Merkmalen eines umgebenden Elements, anstatt der Bildschirmgröße. Containerabfragen haben die gleichen Syntaxregeln und logischen Operatoren wie Media Queries.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt fünf Arten von Containerabfragen:

- **Containergrößen-Abfragen**
  - : Größenabfragen ermöglichen das Anwenden von Stilen auf Elemente basierend auf der aktuellen [Größe](/de/docs/Web/CSS/Reference/At-rules/@container#descriptors) eines umgebenden Elements, einschließlich Orientierung und {{Glossary("aspect_ratio", "Seitenverhältnis")}}. Die umgebenden Elemente müssen explizit als _Größenabfrage-Container_ deklariert werden.

- **[Containerstil-Abfragen](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries)**
  - : Stilabfragen ermöglichen das Anwenden von Stilen auf Elemente basierend auf den Stilmerkmalen eines umgebenden Elements, wobei jedes nicht leere Element ein Stilabfrage-Container sein kann. Ein Stilmerkmal kann eine CSS-Eigenschaft, eine CSS-[benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) oder eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations) sein.
    Dies ermöglicht es Ihnen, Stile auf beliebige Nachfahren von Container-Elementen basierend auf deren Stilmerkmalen anzuwenden — zum Beispiel, ob es eine `display: inline` Flex-Deklaration hat oder der Wert einer benutzerdefinierten Eigenschaft zutrifft.

- **[Nur nach Namen ausgerichtete Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries)**
  - : Diese Abfragen ermöglichen das selektive Anwenden von Stilen auf ein Element basierend darauf, ob es eine spezielle {{cssxref("container-name")}} gesetzt hat.

- **[Container-Scrollzustands-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)**
  - : Scrollzustands-Abfragen ermöglichen das selektive Anwenden von CSS-Regeln auf Nachfahren eines Containers basierend auf Scrollbedingungen, wie z. B. ob das abgefragte Element teilweise gescrollt ist oder ob der Container an einen Scrollsnap-Container gefangen ist. Die umgebenden Elemente müssen explizit als _Scrollzustand-Abfrage-Container_ deklariert werden.

- **[Verankerte Containerabfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)**
  - : Diese Abfragen ermöglichen die Überprüfung, ob der Container [verankert positioniert](/de/docs/Web/CSS/Guides/Anchor_positioning) ist und eine [Position-try-Fallback-Option](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) angewendet wurde.

In diesem Leitfaden lernen Sie die Grundlagen von Containerabfragen kennen, indem wir:

1. [Containergrößen-Abfragen](#container_size_queries_2),
2. [Benennung von Containern](#benennung_von_containern), um deren Bereich zu begrenzen, und
3. die Verwendung der `style()` Funktionsnotation innerhalb der `<container-condition>` der {{cssxref("@container")}}-Regel zur Erstellung von [Stilabfragen mit benutzerdefinierten Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften).

## Containergrößen-Abfragen

Containergrößen-Abfragen werden durch eine Größenbedingung gefiltert. Die zugehörigen Stile werden auf enthaltene Elemente angewendet, wenn das Containerelement als Container deklariert wurde und die Containerbedingung für dieses Element zutrifft. Der Größencontainer eines Elements ist der nächste Vorfahre mit Containment.

Elemente werden als _Größenabfrage-Container_ deklariert, indem ihre {{cssxref("container-type")}}-Eigenschaft (oder die {{cssxref("container")}}-Kurzform) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Die Deklaration von Größenabfrage-Containern fügt ihnen [Containment](/de/docs/Web/CSS/Guides/Containment/Using) hinzu. Dies ist eine Leistungsnotwendigkeit — das dauerhafte Abfragen der Größe jedes Elements im DOM wäre schlecht für die Leistung und die Benutzererfahrung. Wenn ein Nachfahrenstil die Größe des Containerelements änderte, könnte ein Endlosschleife auftreten.

In einer Containergrößen-Abfrage beinhaltet die `<container-condition>` ein oder mehrere `<size-query>`s. Jede Größenabfrage enthält einen Namen der Größenmerkmale, einen Vergleichsoperator und einen Wert. Die abfragbaren Größenmerkmale beschränken sich auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation`. Die boolesche Syntax und Logik, um ein oder mehrere `<size-query>`s zu kombinieren, ist die gleiche wie bei {{cssxref("@media")}}-Größenabfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Die `<container-condition>` in diesem Beispiel enthält eine einzelne `<size-query>` — `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}}-Elemente potenzielle Übereinstimmungen für eine beliebige unbenannte Containerabfrage. Die innerhalb unserer Containerabfrage deklarierten Stile gelten für die Nachfahren aller Formulare mit einer Breite zwischen `10em` und `30em`, einschließlich.

## Benennung von Containern

Eine `<container-condition>` kann optional einen `container-name` enthalten, der zwischen Groß- und Kleinschreibung unterscheidet. Ein Containername macht die Containerbedingung spezifischer — sie wird nur auf Elemente angewendet, die diesen Namen in der `container-name`-Eigenschaft gesetzt haben.

Die {{cssxref("container-name")}}-Eigenschaft gibt eine Liste von `<container-name>`-Werten an, die in `@container`-Regeln verwendet werden können, um spezifische Abfragecontainer anzusprechen; dies sind zwischen Groß- und Kleinschreibung unterscheidende {{cssxref("ident")}}-Werte. Ohne einen `<container-name>` passt die Abfrage nur auf den nächsten Container-Vorfahren, und ohne eine `<container-query>` passt die Abfrage auf Elemente mit dem angegebenen `container-name` (siehe [Nur nach Namen ausgerichtete Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries)).

```css
@container [ <container-name>? <container-query>? ]!# {
  /* <stylesheet> */
}
```

Stile innerhalb der benannten `@container`-Regeln werden nur auf übereinstimmende Elemente innerhalb von Containern angewendet, bei denen diese Namen gesetzt sind und die Containerabfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel werden die Stile innerhalb des Containerabfrageblocks auf die Nachfahren aller {{htmlelement("li")}}-Elemente angewendet, deren Breite größer als ihre Höhe ist. Beachten Sie, dass auch andere Elemente mit `container-name: card`, die der Größenabfrage entsprechen, diese Stile auf die Nachfahren ihrer Elemente angewendet bekommen.

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

Im obigen Beispiel hat das Element zwei Containernamen, `wide` und `narrow`. Die Nachfahren aller Elemente mit `class="sizeContainer"` erhalten die Stile aus der `wide`- oder `narrow`-Abfrage angewendet.

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer wird, aber er kann immer noch ein [Stilcontainer](#containerstil-abfragen) sein und immer noch von einer [nur nach Namen ausgerichteten Containerabfrage](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries) angesprochen werden. Der Standardwert `container-name: none` besagt, dass der Container keinen Namen hat, verhindert aber nicht, dass das Element auf unbenannte Abfragen passt.

## Containerstil-Abfragen

Eine _Containerstil-Abfrage_ ist eine `@container`-Abfrage, die berechnete Stile des Containerelements, wie sie in einer oder mehreren `style()`-Funktionsnotationen definiert sind, evaluiert. Die boolesche Syntax und Logik, die verwendet wird, um Stilmerkmale in einer Stilabfrage zu kombinieren, sind die gleichen wie in [CSS-Merkmalsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname — `style()` innerhalb eines `<style-feature>`, im Gegensatz zu `supports()` innerhalb einer `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Das Argument jeder `style()`-Funktion ist ein einziges **`<style-feature>`**. Gemäß der CSS-Containment-Spezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values) sein. Das einzige zurzeit unterstützte Stilmerkmal sind benutzerdefinierte Eigenschaften, mit oder ohne Wert. Siehe die [Browser-Kompatibilitätstabelle für `@container`](/de/docs/Web/CSS/Reference/At-rules/@container#browser_compatibility).

Wenn das `<style-feature>` einen Wert enthält, evaluiert die Stilabfrage zu `true`, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder in Zukunft der CSS-Deklaration), die als Argument der `style()`-Funktion übergeben wird, für den abgefragten Container `true` ist. Andernfalls löst sie zu `false` auf.
Ein Stilmerkmal ohne Wert evaluiert zu `true`, wenn der berechnete Wert von dem [Anfangswert](#registrierte_eigenschaften) für die gegebene Eigenschaft abweicht.

In Zukunft werden wir in der Lage sein, Stilabfragen wie folgt zu schreiben:

```css
@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple),
    (width <= 100vw) and style(max-width: 600px) {
  /* <stylesheet> */
}
```

Die `style()`-Funktionsnotation wird verwendet, um Stilabfragen von Größenabfragen zu differenzieren. Obwohl sie noch nicht unterstützt wird, werden wir schließlich in der Lage sein, reguläre CSS-Deklarationen wie `max-width: 600px` abzufragen. Das Abfragen von `@container (max-width: 600px)` ist eine Größenabfrage; Containment mit {{cssxref("container-type")}} oder der {{cssxref("container")}}-Kurzform ist erforderlich. Diese Abfrage wird wahr zurückgeben, wenn der Container 600px oder weniger ist. Das unterscheidet sich von der Abfrage `@container style(max-width: 600px)`, die eine Stilabfrage ist; wenn unterstützt, wird diese Abfrage wahr zurückgeben, wenn der Container einen {{cssxref("max-width")}}-Wert von `600px` hat.

Bis Stilabfragen für reguläre CSS-Deklarationen und -Eigenschaften unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als `style()`-Argumente, mit oder ohne einen Wert, einzuschließen:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige Dinge, die bereits erwähnt wurden, aber wichtig sind, um sich daran zu erinnern:

- Alle Elemente können Stilabfrage-Container sein; es ist nicht erforderlich, einen `container-type` zu setzen. Wenn Nachfahrenstile die berechneten Stile eines Vorfahrens nicht beeinflussen, ist kein Containment nötig.
- Eine `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Sie Größenmerkmale in Ihrer Abfrage einschließen, stellen Sie sicher, dass Ihre Containerelemente einen `container-type` von `size` oder `inline-size` gesetzt haben.
- Wenn Sie nicht möchten, dass ein Element jemals als Container angesehen wird, geben Sie ihm einen `container-name`, der nicht verwendet wird. Das Setzen von `container-name: none` entfernt alle Abfragenamen, die mit einem Container verbunden sind; es verhindert nicht, dass das Element ein Stilcontainer ist.
- Zum Zeitpunkt dieses Schreibens (Februar 2024) funktionieren Containerstil-Abfragen nur mit den Werten von CSS-Benutzereigenschaften in der `style()`-Abfrage.

Schauen wir uns nun die verschiedenen `<style-feature>`-Typen genauer an.

### Stilabfragen für benutzerdefinierte Eigenschaften

Stilabfragen für benutzerdefinierte Eigenschaften ermöglichen es Ihnen, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), auch "CSS-Variablen" genannt, eines übergeordneten Elements abzufragen. Sie werden innerhalb einer `<style-query>` genau so eingeschlossen, wie Sie eine reguläre CSS-Eigenschaft innerhalb einer Merkmalabfrage einfügen würden: entweder mit oder ohne einen Wert.

#### Eigenständige Abfragen benutzerdefinierter Eigenschaften

Der `<style-query>`-Parameter der `style()`-Funktionsnotation kann nur einen CSS-Variablennamen enthalten; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert enthalten ist, gibt die Abfrage `false` zurück, wenn der Wert derselbe ist wie der des `initial-value`-Descriptors innerhalb der `@property`-Regel, falls vorhanden. Die Stilabfrage gibt `true` zurück und passt auf alle Elemente, die einen benutzerdefinierten Eigenschaftswert haben, der sich vom `initial-value` unterscheidet, oder auf alle Elemente, die eine benutzerdefinierte Eigenschaft von irgendeinem Wert haben, wenn die benutzerdefinierte Eigenschaft deklariert wurde, ohne registriert zu sein.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen über eine CSS-Benutzereigenschaftswertzuweisung eingeführt werden, geben wertlose Abfragen benutzerdefinierter Eigenschaften immer `true` zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel stimmt die Containerabfrage mit dem Element überein, auf dem die `--theme-color`-Eigenschaft deklariert wurde, und alle seine Nachkommen. Da die CSS-Variable `--theme-color` am {{cssxref(":root")}} deklariert wurde, wird die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}}-Knotens `true` sein.

##### Registrierte Eigenschaften

Das Verhalten registrierter benutzerdefinierter Eigenschaften ist anders. Wenn sie explizit mit der {{cssxref("@property")}}-CSS-Regel oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert werden, gibt die Stilabfrage `style(--theme-color)` nur für Elemente `true` zurück, wenn der berechnete Wert für `--theme-color` des Elements von dem in der ursprünglichen Definition dieser benutzerdefinierten Eigenschaft gesetzten [`initial-value`](/de/docs/Web/CSS/Reference/At-rules/@property/initial-value) abweicht.

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

In diesem Beispiel stimmt das `:root`-Element NICHT mit der Stilabfrage überein, da der Wert der benutzerdefinierten Eigenschaft mit dem `initial-value`-Wert übereinstimmt. Der Wert der benutzerdefinierten Eigenschaft für das Element (und alle Elemente, die den Wert erben) bleibt `rebeccapurple`. Nur Elemente, die sich vom Anfangswert unterscheiden, in diesem Fall das {{htmlelement("main")}} und seine Nachkommen, die diesen geänderten Wert erben, stimmen überein.

#### Benutzerdefinierte Eigenschaft mit Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert dieser Eigenschaft für das Element genau übereinstimmen, wobei äquivalente Werte nur dann übereinstimmen, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}}-Regel (oder einem [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)-Methodenaufruf) definiert wurde, die einen `syntax`-Descriptor enthält.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Containerstilabfrage stimmt mit jedem Element überein, das `blue` als [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der `--accent-color`-Benutzereigenschaft hat.

In diesem Fall stimmen andere Farbwerte, die sRGB `blue` entsprechen (wie der Hexadezimalcode `#0000ff`), nur dann überein, wenn die `--accent-color`-Eigenschaft als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, zum Beispiel:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #0000ff;
}
```

In diesem Fall, wenn der Wert der `--accent-color`-Eigenschaft auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzt wurde, würde `@container style(--accent-color: blue)` `true` zurückgeben.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Optionsfeldern. Die vierte Option enthält ein Text-{{htmlelement("input")}}, um eine benutzerdefinierte Farbe einzugeben.

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

JavaScript aktualisiert den Wert der CSS-`--theme`-Variablen am {{htmlelement("body")}}-Element, das ein Vorfahre der {{htmlelement("fieldset")}}- und {{htmlelement("output")}}-Elemente ist, wann immer ein Optionsfeld ausgewählt wird. Wenn das Text`<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des `other`-Optionsfeldes nur aktualisiert, wenn das `other`-Optionsfeld aktiviert ist, was wiederum den Wert von `--theme` aktualisiert.

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

Wir verwenden die `@property`-Regel, um eine CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}}-Wert zu definieren und den `initial-value` auf `red` zu setzen, um sicherzustellen, dass gleichwertige Farben übereinstimmen, unabhängig davon, welche Syntax verwendet wird (zum Beispiel ist `red` gleich `rgb(255 0 0)`, `#ff0000` und `#f00`).

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

Die erste Stilmerkmalabfrage ist eine benutzerdefinierte Eigenschaft ohne Wert. Dieser Abfragetyp gibt `true` zurück, wenn der berechnete Wert für die benutzerdefinierte Eigenschaft von dem `initial-value` für diese Eigenschaft abweicht. In diesem Fall ist sie `true`, wenn der Wert von `--theme` ein beliebiger Wert ist, außer einem Syntaxäquivalent zu `red` (wie `#ff0000`). Wenn `true`, wird der {{htmlelement("output")}} eine 5px gestrichelte Umrandung haben. Die Rahmenfarbe ist der aktuelle Wert von `--theme`. Die Standardtextfarbe ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777777;
  }
}
```

Die zweite und die dritte Stilabfragen enthalten Werte für die benutzerdefinierte Eigenschaft. Diese stimmen überein, wenn der `--theme`-Wert des Containers mit dem gelisteten Wert als äquivalente Farbe übereinstimmt, auch wenn dieser Wert derselbe wie der `initial-value` ist. Die erste Abfrage stimmt mit Elementen überein, deren `--theme`-Wert äquivalent zu `red`, `blue` oder `green` ist. Wenn dies der Fall ist, wird die {{cssxref("color")}} die Farbe des aktuellen Werts von `--theme` sein (im Fall von `blue` und `green`, überschreibt sie das in der ersten Stilabfrage gesetzte Grau).

Die zweite Stilabfrage besagt, dass bei `red` als `--theme` auch der Inhalt des `<output>` fett sein wird. Wir haben dies getan, um besser zu demonstrieren, dass die Containerabfrage übereinstimmt.

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

Versuchen Sie, verschiedene Farbwerte in das Textfeld einzugeben. Sie werden möglicherweise feststellen, dass Werte, die sRGB-Äquivalente von `red` sind, das `<output>` rot machen - da es mit `style(--theme: red)` übereinstimmt - während die Umrandung entfernt wird, da `style(--theme)` `false` zurückgibt, wenn der Wert des Elements für `--theme` derselbe wie der Anfangswert für `--theme` ist, der von der `@property`-Regel definiert wird. Jeder nicht-rote sRGB-gültige Farbwert, einschließlich `currentColor` oder `hsl(180 100% 50%)`, usw., macht die erste Stilabfrage `true` zurückgeben; sie sind Werte, die sich vom `initial-value` unterscheiden.

Da wir `syntax: "<color>;"` gesetzt haben, kann die CSS-Variable nur gültige `<color>`-Werte zugewiesen werden. Gültige Werte für die {{cssxref("color")}}-Eigenschaft, die keine gültigen `<color>`-Werte sind, wie `unset` oder `inherit`, sind [ungültig](/de/docs/Web/CSS/Guides/Syntax/Error_handling) für diese benutzerdefinierte Eigenschaft und werden ignoriert.

Wenn Sie `unset` oder `gibberish` eingeben, aktualisiert das JavaScript das `style` auf dem {{HTMLElement("body")}} zu `--theme: unset` oder `--theme: gibberish`. Keines von beiden sind Farben. Beide sind ungültig und werden ignoriert. Dies bedeutet, dass der Anfangswert geerbt und unverändert bleibt, wobei `style(--theme)` `false` zurückgibt und `style(--theme: red)` `true` zurückgibt.

> [!NOTE]
> Bei der Deklaration benutzerdefinierter Eigenschaften sollten Sie die Verwendung von `@property` mit dem {{cssxref("@property/syntax","syntax")}}-Deskriptor in Betracht ziehen, damit der Browser die berechneten Werte richtig vergleichen kann.

### Einfache vs. Bereichs-Syntax in Stilabfragen

Wenn ein `<style-feature>` einen Wert enthält, können Sie den Vergleich auf zwei verschiedene Weisen ausdrücken. Sie sehen ähnlich aus, verhalten sich jedoch sehr unterschiedlich, und die Wahl der richtigen ist wichtig.

Die **einfache Syntax** verwendet einen Doppelpunkt, die gleiche Syntax, die in einer CSS-Deklaration verwendet wird:

```css
@container style(--n: 3) {
  /* … */
}
```

Diese Form ist `true`, wenn der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der Eigenschaft mit dem Wert rechts übereinstimmt. Für eine [nicht registrierte](#nicht_registrierte_benutzerdefinierte_eigenschaften) benutzerdefinierte Eigenschaft ist der berechnete Wert der Wert der Eigenschaft, wie er geschrieben wurde: der Browser bewertet `calc()` oder andere Ausdrücke darin nicht. Der Abgleich ist im Wesentlichen ein Vergleich der Token der beiden Werte. Um äquivalente Werte (wie `blue` und `#0000ff`) abzugleichen, [registrieren Sie die benutzerdefinierte Eigenschaft](#registrierte_eigenschaften) mit `@property` und einem `syntax`-Descriptor.

Die **Bereichssyntax** verwendet einen Vergleichsoperator (`=`, `<`, `<=`, `>`, oder `>=`):

```css
@container style(--n = 3) {
  /* … */
}
```

Um diese Form zu bewerten, löst der Browser:

1. Beide Seiten auf (benutzerdefinierte Eigenschaftsnamen werden aufgelöst, als ob sie mit [`var()`](/de/docs/Web/CSS/Reference/Values/var) verwendet würden).
2. Parst jede Seite als eine der {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, oder {{cssxref("&lt;resolution&gt;")}}. Wenn eine der Seiten nicht als einer dieser Typen geparst werden kann, ist die Abfrage `false`.
3. Wenn beide Seiten denselben Typ haben, berechnet er jede Seite (bewertet alle `calc()`-Ausdrücke) und führt den numerischen Vergleich durch. Andernfalls ist die Abfrage `false`.

Betrachten Sie das folgende Beispiel, bei dem `--n` auf einen `calc()`-Ausdruck gesetzt ist:

```css
.box {
  --n: calc(6/2);
}

/* Evaluates to FALSE: */
/* the computed value of --n is the string `calc(6/2)`, which is */
/* not equal to the string `3`. */
@container style(--n: 3) {
  /* … */
}

/* Evaluates to TRUE: */
/* both sides are parsed as <integer>, calc(6/2) is computed to 3, */
/* and 3 = 3. */
@container style(--n = 3) {
  /* … */
}
```

Die Bereichssyntax unterstützt auch eine Drei-Wert-Form zum Testen, ob ein Wert innerhalb eines Intervalls liegt. Beide Vergleichsoperatoren müssen in die gleiche Richtung zeigen:

```css
@container style(0 < --n < 10) {
  /* true when --n is greater than 0 and less than 10 */
}

@container style(100px > --width > 50px) {
  /* true when --width is less than 100px and greater than 50px */
}
```

Die Bereichssyntax ist auch flexibler in der Art und Weise, wie jede Seite verfasst wird. Jede Seite kann ein benutzerdefinierter Eigenschaftsname, ein [`var()`](/de/docs/Web/CSS/Reference/Values/var)-Verweis, ein literaler Wert oder ein `calc()`-Ausdruck sein, und die Operanden können in jeder Reihenfolge erscheinen. Die folgenden sind alle gültig:

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

Die einfache Syntax ist restriktiver: Die linke Seite muss der benutzerdefinierte Eigenschaftsname sein (ohne `var()`), und der Wert steht rechts. Die folgenden sind alle **ungültig**:

```css example-bad
@container style(var(--n): 3) {
  /* … */
}
@container style(3: --n) {
  /* … */
}
```

Da die Bereichssyntax erfordert, dass beide Seiten als einer der aufgeführten numerischen Typen geparst werden, kann sie nicht verwendet werden, um keywordähnliche Werte zu vergleichen. Zum Beispiel, wenn `--s: new` gesetzt ist, ist die Abfrage `style(--s = new)` `false` (weil `new` keine Zahl, Länge usw. ist), während `style(--s: new)` `true` ist.

Kurz gesagt:

- Verwenden Sie **`style(--variable: value)`** für keywordähnliche oder stringähnliche Übereinstimmungen, wie `style(--stock: low)` oder `style(--theme: dark)`.
- Verwenden Sie **`style(--variable = value)`** (oder `<`, `<=`, `>`, `>=`) für numerische Vergleiche, wie `style(--columns >= 3)` oder `style(--gap = 1rem)`.

### Verschachtelte Abfragen

Containerabfragen können innerhalb anderer Containerabfragen verschachtelt werden. Die innerhalb mehrerer verschachtelter Containerabfragen definierten Stile werden angewendet, wenn alle umgebenden Containerabfragen `true` sind.

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

In diesem Fall wird das `<output>` eine 5px gestrichelte Umrandung haben, wenn es in einem Container verschachtelt ist, in dem `--theme: purple` gesetzt ist, und dieser Container in einem Container verschachtelt ist, dessen `--theme`-Wert `red` ist.

### Stilabfrage-CSS-Deklarationen und -Eigenschaften

Noch in keinem Browser unterstützt, kann die `style()`-Funktionsnotation reguläre CSS-Deklarationen, einschließlich CSS-Eigenschaften und Eigenschafts-Wert-Paare, enthalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn unterstützt, würde dieses einfache Beispiel den Hintergrund jedes {{htmlelement("b")}}- und {{htmlelement("strong")}}-Elements gelb machen, wenn das übergeordnete Element bereits `bold` gesetzt ist.

Die Übereinstimmung erfolgt gegen den berechneten Wert des übergeordneten Containers; wenn der berechnete {{cssxref("font-weight")}} des übergeordneten Elements `bold` ist (nicht `bolder` oder `900`), gibt es eine Übereinstimmung. Genau wie bei benutzerdefinierten Eigenschafts-Containerstilabfragen mussten wir keine Elemente als Stilcontainer definieren, da alle Elemente standardmäßig Stilcontainer sind. Solange ein Element keinen `container-name` hat, wird es eine Übereinstimmung sein, wenn es `font-weight: bold` gesetzt oder vererbt hat.

Stilmerkmale, die eine Kurzschreibeigenschaft abfragen, sind `true`, wenn die berechneten Werte für jede ihrer Langschreibeigenschaften übereinstimmen, und `false` sonst. Zum Beispiel wird `@container style({{cssxref("border")}}: 2px solid red)` als `true` aufgelöst, wenn alle 12 Langschreibeeigenschaften ({{cssxref("border-bottom-style")}}, usw.), die diese Kurzschreibweise ausmachen, auf die gleichen äquivalenten Werte gesetzt sind.

Die globalen CSS-Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Containerstilabfrage `false` ist.

Wenden Sie die Stile, die Sie in der Stilabfrage abfragen, nicht auf das Element an, das Sie mit dieser Abfrage stylen, da dies zu einer Endlosschleife führen könnte.

Es wird erwartet, dass Stilabfragen auch Eigenschaften in einem booleschen Kontext akzeptieren. Die Stilabfrage wird `false` zurückgeben, wenn der Wert der Eigenschaft der Anfangswert für diese Eigenschaft ist (wenn er nicht geändert wurde), und `true` sonst.

```css
@container style(font-weight) {
}
```

Das obige Beispiel wird `true` für jedes Element zurückgeben, das einen Wert für `font-weight` hat, der von seinem Anfangswert abweicht. Benutzeragenten-Stylesheets setzen `font-weight: bold` für {{htmlelement("heading_elements", "heading")}}- und {{htmlelement("th")}}-Elemente, zum Beispiel. Einige Browser setzen {{htmlelement("strong")}}- und {{htmlelement("b")}}-Elemente auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} hat auch manchmal einen anderen `font-weight` als `normal`, der vom Benutzeragenten gesetzt wird. Solange der `font-weight` des Elements nicht der Standardwert für diesen Benutzeragenten ist, wird die Stilabfrage `true` zurückgeben.

Diese Funktionen werden noch in keinem Browser unterstützt.

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries)
- CSS {{Cssxref("@container")}}-At-Regel
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container")}}-Kurzformeigenschaft
- CSS {{Cssxref("container-name")}}-Eigenschaft
- [Verwendung von Container-Scrollzustands-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verständnis von `aspect-ratio`](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [Erste Schritte mit Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) über una.im (2022)
