---
title: Verwendung von Containergrößen- und Stilabfragen
slug: Web/CSS/Guides/Containment/Container_size_and_style_queries
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

[Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries) ermöglichen es Ihnen, Stile auf Elemente anzuwenden, die in einem bestimmten Container verschachtelt sind, basierend auf den Eigenschaften dieses Containers. Die Abfrage gibt wahr oder falsch zurück, je nachdem, ob die Abfragebedingung für den Container zutrifft.

Containerabfragen sind ähnlich wie [Media Queries](/de/docs/Web/CSS/Guides/Media_queries). Die {{cssxref("@media")}} Regel ermöglicht es, Stile auf Elemente basierend auf der Größe des Viewports oder anderen Gerätemerkmalen anzuwenden. Ebenso ermöglicht die {{cssxref("@container")}} Regel das Anwenden von Stilen auf Elemente basierend auf der Größe oder anderen Eigenschaften eines enthaltenden Elements, anstatt auf den Viewport zu fokussieren. Containerabfragen haben dieselben Syntaxregeln und logischen Operatoren wie Media Queries.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt fünf Arten von Containerabfragen:

- **Containergrößenabfragen**
  - : Größenabfragen ermöglichen das Anwenden von Stilen auf Elemente basierend auf der aktuellen [Größe](/de/docs/Web/CSS/Reference/At-rules/@container#descriptors) eines enthaltenden Elements, einschließlich der Orientierung und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}}. Die enthaltenden Elemente müssen explizit als _Size Query Container_ deklariert werden.

- **[Container-Stilabfragen](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries)**
  - : Stilabfragen ermöglichen das Anwenden von Stilen auf Elemente basierend auf den Stileigenschaften eines enthaltenden Elements, wobei jedes nicht-leere Element ein Stilabfrage-Container sein kann. Eine Stileigenschaft kann eine CSS-Eigenschaft, eine CSS-[benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) oder eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations) sein.
    Dies ermöglicht es Ihnen, Stile auf die Nachkommen eines jeden Container-Elements basierend auf dessen Stilmerkmalen anzuwenden — wie zum Beispiel ob es eine `display: inline` Felx-Deklaration gesetzt hat oder den Wert einer benutzerdefinierten Eigenschaft.

- **[Name-only Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries)**
  - : Name-only Containerabfragen ermöglichen, Stile selektiv auf ein Element basierend darauf anzuwenden, ob es einen bestimmten {{cssxref("container-name")}} gesetzt hat.

- **[Container-Scroll-Statusabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)**
  - : Scroll-Statusabfragen erlauben es, CSS-Regeln selektiv auf die Nachkommen eines Containers basierend auf Scroll-Statusbedingungen anzuwenden, wie zum Beispiel ob das abgefragte Element teilweise gescrollt ist oder ob der Container an einen Scroll-Snap-Container angeheftet ist. Die enthaltenden Elemente müssen explizit als _Scroll-Status-Abfrage-Container_ deklariert werden.

- **[Anker-Containerabfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)**
  - : Anker-Containerabfragen ermöglichen das Abfragen, ob der Container [anchor-positioniert](/de/docs/Web/CSS/Guides/Anchor_positioning) ist und eine [Position-Try-Fallback-Option](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) darauf angewendet wurde.

In diesem Leitfaden lernen wir die Grundlagen von Containerabfragen, indem wir uns folgende Punkte ansehen:

1. [Containergrößenabfragen](#container_size_queries_2),
2. [Benennung von Containern](#benennung_von_containern), um ihren Umfang zu begrenzen, und
3. Verwendung der `style()` Funktionalnotation innerhalb der {{cssxref("@container")}} Regel für `<container-condition>`, um [Stilabfragen mit benutzerdefinierten Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

## Containergrößenabfragen

Containergrößenabfragen werden durch eine Größenbedingung gefiltert. Die zugehörigen Stile werden auf enthaltene Elemente angewendet, wenn das Containerelement als Container deklariert wurde und die Containerbedingung für dieses Element zutrifft. Der Größencontainer eines Elements ist der nächste Vorfahre mit Containment.

Elemente werden als _Size Query Container_ deklariert, indem ihre {{cssxref("container-type")}} Eigenschaft (oder die {{cssxref("container")}} Kurzschreibweise) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Das Deklarieren von Größenabfragecontainern fügt [Containment](/de/docs/Web/CSS/Guides/Containment/Using) hinzu. Dies ist eine leistungsbedingte Notwendigkeit – das Abfragen der Größe jedes Elements im DOM zu jeder Zeit wäre schlecht für Leistung und Benutzererfahrung. Außerdem könnte eine unendliche Schleife entstehen, wenn ein Nachkommenstil die Größe des Containerelements verändert.

In einer Containergrößenabfrage enthält das `<container-condition>` eine oder mehrere `<size-query>`. Jede Größenabfrage umfasst einen Größenmerkmalnamen, einen Vergleichsoperator und einen Wert. Die abfragbaren Größenmerkmale sind auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation` beschränkt. Die boolesche Syntax und Logik, die eine oder mehrere `<size-query>` kombiniert, ist dieselbe wie bei {{cssxref("@media")}} Größenmerkmalabfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Das `<container-condition>` in diesem Beispiel enthält eine einzelne `<size-query>` — `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}}-Elemente potenzielle Übereinstimmungen für jede unbenannte Containerabfrage. Die innerhalb unserer Containerabfrage deklarierten Stile gelten für die Nachkommen aller Formulare, die zwischen `10em` und `30em` breit sind, einschließlich.

## Benennung von Containern

Ein `<container-condition>` kann einen optionalen, groß-/kleinschreibungssensitiven {{cssxref("container-name")}} enthalten. Ein Containername macht die Containerbedingung spezifischer – sie wird nur für Elemente ausgewertet, die diesen Namen in der `container-name` Eigenschaft gesetzt haben.

Die {{cssxref("container-name")}} Eigenschaft gibt eine Liste von Abfrage-`<container-name>` Werten an, die in `@container` Regeln verwendet werden können, um bestimmte Abfragecontainer anzusprechen; dies sind groß-/kleinschreibungssensitive {{cssxref("ident")}} Werte. Ohne einen `<container-name>` passt die Abfrage nur auf den nähesten Container-Vorfahren, und ohne eine `<container-query>` passt die Abfrage auf Elemente mit dem festgelegten `container-name` (siehe [Name-only Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries)).

```css
@container [ <container-name>? <container-query>? ]!# {
  /* <stylesheet> */
}
```

Stile innerhalb der benannten `@container`-Regeln werden nur auf übereinstimmende Elemente in Containern mit diesen gesetzten Namen angewendet, die die Containerabfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel werden die Stile innerhalb des Containerabfrageblocks auf die Nachkommen aller {{htmlelement("li")}} Elemente angewendet, deren Breite größer ist als deren Höhe. Beachten Sie, dass auch andere Elemente mit `container-name: card`, die die Größenabfrage erfüllen, diese Stile auf die Nachkommen ihrer Elemente anwenden werden.

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

Im obigen Beispiel hat das Element zwei Containernamen: `wide` und `narrow`. Die Nachkommen aller Elemente mit `class="sizeContainer"` erhalten die Stile aus der `wide` oder `narrow` Abfrage.

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer wird, aber er kann immer noch ein [Stilcontainer](#container-stilabfragen) sein und er kann weiterhin von einer [Name-only Containerabfrage](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries) anvisiert werden. Der Standardwert `container-name: none` gibt an, dass der Container keinen Namen hat, verhindert jedoch nicht, dass das Element auf unbenannte Abfragen passt.

## Container-Stilabfragen

Eine _Container-Stilabfrage_ ist eine `@container` Abfrage, die berechnete Stile des Container-Elements auswertet, wie sie in einer oder mehreren `style()` Funktionalnotationen definiert sind. Die boolesche Syntax und Logik zur Kombination von Stileigenschaften in einer Stilabfrage ist dieselbe wie in [CSS-Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname – `style()` innerhalb eines `<style-feature>`, im Gegensatz zu `supports()` innerhalb eines `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()` Funktion ist ein einzelnes **`<style-feature>`**. Laut der CSS Enthaltungsspezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values) sein. Das einzige derzeit unterstützte Stilelement sind benutzerdefinierte Eigenschaften, mit oder ohne Wert. Siehe die [Browser-Kompatibilitätstabelle für `@container`](/de/docs/Web/CSS/Reference/At-rules/@container#browser_compatibility).

Wenn das `<style-feature>` einen Wert enthält, ist die Stilabfrage wahr, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder, in Zukunft, der CSS-Deklaration), die als `style()`-Argument übergeben wird, für den abgefragten Container zutrifft. Andernfalls wird sie als falsch aufgelöst.
Ein Stilmerkmal ohne Wert ist wahr, wenn der berechnete Wert sich vom [Initialwert](#registrierte_eigenschaften) für die gegebene Eigenschaft unterscheidet.

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

Die `style()` Funktionalnotation wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Auch wenn es derzeit nicht unterstützt wird, werden wir irgendwann reguläre CSS-Deklarationen wie `max-width: 600px` abfragen können. Das Abfragen von `@container (max-width: 600px)` ist eine Größenabfrage; Entsprechung mit {{cssxref("container-type")}}, oder die {{cssxref("container")}} Kurzschreibweise, ist erforderlich. Diese Abfrage gibt wahr zurück, wenn der Container 600px oder kleiner ist. Dies unterscheidet sich vom Abfragen `@container style(max-width: 600px)`, welches eine Stilabfrage ist; wenn es unterstützt wird, gibt diese Abfrage wahr zurück, wenn der Container einen {{cssxref("max-width")}} Wert von `600px` hat.

Bis Stilabfragen für reguläre CSS-Deklarationen und -Eigenschaften unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als `style()`-Parameter einzuschließen, mit oder ohne Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige wichtige Punkte, die bereits erwähnt wurden, aber wichtig sind, sich zu merken:

- Alle Elemente können Stilabfragecontainer sein; das Setzen eines `container-type` ist nicht erforderlich. Wenn Nachkommenstile die berechneten Stile eines Vorfahren nicht beeinflussen, ist Containment nicht erforderlich.
- Ein `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Sie Größenmerkmale in Ihrer Abfrage aufnehmen möchten, stellen Sie sicher, dass Ihre Containerelemente ein `container-type` von `size` oder `inline-size` gesetzt haben.
- Wenn Sie nicht möchten, dass ein Element jemals als Container betrachtet wird, geben Sie ihm einen `container-name`, der nicht verwendet wird. Das Setzen von `container-name: none` entfernt alle mit einem Container verknüpften Abfragenamen; es verhindert nicht, dass das Element ein Stilcontainer ist.
- Zum Zeitpunkt des Schreibens (Februar 2024) funktionieren Container-Stilabfragen nur mit CSS-Werten für benutzerdefinierte Eigenschaften in der `style()` Abfrage.

Nun, lassen Sie uns eintauchen und uns die verschiedenen `<style-feature>` Typen ansehen.

### Stilabfragen für benutzerdefinierte Eigenschaften

Stilabfragen für benutzerdefinierte Eigenschaften ermöglichen es, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), auch "CSS Variablen" genannt, eines übergeordneten Elements abzufragen. Sie sind innerhalb eines `<style-query>` genauso enthalten, wie Sie jede reguläre CSS-Eigenschaft innerhalb einer Feature-Abfrage einfügen würden: entweder mit oder ohne Wert.

#### Unabhängige benutzerdefinierte Eigenschaftsabfragen

Der `<style-query>` Parameter der `style()` Funktionalnotation kann nur einen CSS-Variablennamen enthalten; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert enthalten ist, gibt die Abfrage `false` zurück, wenn der Wert derselbe ist wie der Wert des `initial-value` Deskriptor innerhalb der `@property` Regel, falls vorhanden. Die Stilabfrage gibt `true` zurück und passt auf alle Elemente, die einen benutzerdefinierten Eigenschaftswert haben, der sich vom `initial-value` unterscheidet, oder auf alle Elemente, die eine benutzerdefinierte Eigenschaft mit einem beliebigen Wert haben, wenn die benutzerdefinierte Eigenschaft deklariert wurde, ohne registriert zu sein.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen über eine CSS-Zuordnung für benutzerdefinierte Eigenschaftswerte eingeführt werden, geben wertlose benutzerdefinierte Eigenschaftsabfragen immer `true` zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel passt die Containerabfrage auf das Element, auf dem die `--theme-color` Eigenschaft deklariert wurde, und auf alle seine Nachkommen. Da die CSS-Variable `--theme-color` auf der {{cssxref(":root")}} deklariert wurde, ist die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}} Knotens `true`.

##### Registrierte Eigenschaften

Das Verhalten von registrierten benutzerdefinierten Eigenschaften ist anders. Wenn sie explizit mit der {{cssxref("@property")}} CSS-Regel oder via JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert wurden, gibt die Stilabfrage `style(--theme-color)` nur `true` für Elemente zurück, wenn der berechnete Wert der `--theme-color` für das Element sich vom [`initial-value`](/de/docs/Web/CSS/Reference/At-rules/@property/initial-value) unterscheidet, der in der ursprünglichen Definition dieser benutzerdefinierten Eigenschaft festgelegt wurde.

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

In diesem Beispiel passt das `:root` Element NICHT zur Stilabfrage, da der Wert der benutzerdefinierten Eigenschaft derselbe ist wie der `initial-value` Wert. Der benutzerdefinierte Eigenschaftswert für das Element (und alle die diesen Wert erben) ist immer noch `rebeccapurple`. Nur Elemente, die sich vom Initialwert unterscheiden, in diesem Fall das {{htmlelement("main")}} und seine Nachkommen, die diesen geänderten Wert erben, sind eine Übereinstimmung.

#### Benutzerdefinierte Eigenschaft mit einem Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert des Elements für diese Eigenschaft exakt übereinstimmen, wobei äquivalente Werte nur dann eine Übereinstimmung sind, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}} Regel (oder einem [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) Methodenaufruf) mit einem `syntax` Deskriptor definiert wurde.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Container-Stilabfrage passt auf jedes Element, das `blue` als [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der `--accent-color` benutzerdefinierten Eigenschaft hat.

In diesem Fall werden andere equivalent zu sRGB `blue` Farbwerte (wie der hexadezimale Code `#0000ff`) nur übereinstimmen, wenn die `--accent-color` Eigenschaft als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, z.B.:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #0000ff;
}
```

In diesem Fall würde, wenn der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzt wäre, es `true` für `@container style(--accent-color: blue)` zurückgeben.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Optionsfeldern. Die vierte Option enthält ein Text-{{htmlelement("input")}} zum Eingeben einer benutzerdefinierten Farbe.

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

JavaScript aktualisiert den Wert der CSS-Variablen `--theme` auf dem {{htmlelement("body")}} Element, welches ein Vorfahre des {{htmlelement("fieldset")}} und der {{htmlelement("output")}} Elemente ist, immer wenn ein Optionsfeld ausgewählt wird. Wenn das Text-`<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des `other` Optionsfelds nur dann aktualisiert, wenn das `other` Optionsfeld ausgewählt ist, was wiederum den Wert von `--theme` aktualisiert.

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

Wir verwenden die `@property` Regel, um eine CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}} Wert zu definieren und den `initial-value` auf `red` zu setzen, um sicherzustellen, dass gleichwertige Farben unabhängig von der verwendeten Syntax übereinstimmen (beispielsweise ist `red` gleich `rgb(255 0 0)`, `#ff0000` und `#f00`).

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

Die erste Stileigenschaftsabfrage ist eine benutzerdefinierte Eigenschaft ohne Wert. Dieser Abfragetyp gibt `true` zurück, wenn der berechnete Wert für den benutzerdefinierten Eigenschaftswert anders ist als der `initial-value` für diese Eigenschaft. In diesem Fall wird sie `true` zurückgeben, wenn der Wert von `--theme` ein anderer Wert ist als jeder syntaktisch gleichwertige Wert von `red` (wie `#ff0000`). Wenn sie `true` ist, hat das {{htmlelement("output")}} eine 5px gepunktete Kontur. Die Konturfarbe ist der aktuelle Wert von `--theme`. Die Standardtext{{cssxref("color")}}-Farbe ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777777;
  }
}
```

Die zweite und dritte Stilabfragen enthalten Werte für die benutzerdefinierte Eigenschaft. Diese stimmen überein, wenn der `--theme` Wert des Containers farblich gleichwertig mit dem aufgeführten Wert ist, selbst wenn dieser Wert dem `initial-value` entspricht. Die erste Abfrage trifft auf Elemente zu, deren `--theme` Wert gleichwertig mit `red`, `blue` oder `green` ist. Wenn dies der Fall ist, wird die {{cssxref("color")}} die Farbe des aktuellen Werts von `--theme` sein (im Fall von `blue` und `green`, die die in der ersten Stilabfrage gesetzte graue Farbe überschreiben).

Die zweite Stilabfrage besagt, dass wenn `--theme` gleich `red` ist, die Inhalte der `<output>` ebenfalls fett sein werden. Wir haben dies getan, um besser zu demonstrieren, dass die Containerabfrage eine Übereinstimmung ist.

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

Versuchen Sie, unterschiedliche Farbwerte in das Textfeld einzugeben. Möglicherweise stellen Sie fest, dass Werte, die sRGB-Pendants von `red` sind, das `<output>` rot machen – da es `style(--theme: red)` entspricht – während die Umrandung entfernt wird, weil `style(--theme)` `false` zurückgibt, wenn der Elementwert für `--theme` derselbe ist wie der Initialwert für `--theme`, der durch die `@property` Regel definiert wurde. Jede andere gültige sRGB-Farboption, einschließlich `currentColor` oder `hsl(180 100% 50%)`, usw., macht die erste Stilabfrage `true`; sie sind Werte, die sich vom `initial-value` unterscheiden.

Da wir `syntax: "<color>";` setzen, kann der CSS-Variable nur gültige `<color>` Werte zugewiesen werden. Gültige Werte für die {{cssxref("color")}}-Eigenschaft, die keine `<color>` Werte sind, wie `unset` oder `inherit`, sind [ungültig](/de/docs/Web/CSS/Guides/Syntax/Error_handling) für diese benutzerdefinierte Eigenschaft und werden ignoriert.

Wenn Sie `unset` oder `Kauderwelsch` eingeben, aktualisiert das JavaScript den Stil auf dem {{HTMLElement("body")}} zu `--theme: unset` oder `--theme: Kauderwelsch`. Keine dieser Angaben sind Farbangaben. Beide sind ungültig und werden ignoriert. Dies bedeutet, dass der Initialwert geerbt und unverändert bleibt, wobei `style(--theme)` `false` zurückgibt und `style(--theme: red)` `true`.

> [!NOTE]
> Beim Deklarieren von benutzerdefinierten Eigenschaften sollten Sie in Betracht ziehen, `@property` mit dem {{cssxref("@property/syntax","syntax")}} Deskriptor zu verwenden, damit der Browser berechnete Werte korrekt vergleichen kann.

### Einfache gegen Bereichssyntax in Stilabfragen

Wenn ein `<style-feature>` einen Wert enthält, können Sie den Vergleich auf zwei verschiedene Arten ausdrücken. Sie sehen ähnlich aus, verhalten sich jedoch sehr unterschiedlich, und die richtige Wahl ist wichtig.

Die **einfache Syntax** verwendet einen Doppelpunkt, dieselbe Syntax wie eine CSS-Deklaration:

```css
@container style(--n: 3) {
  /* … */
}
```

Diese Form ist wahr, wenn der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der Eigenschaft mit dem Wert rechts übereinstimmt. Für eine [nicht registrierte](#nicht_registrierte_benutzerdefinierte_eigenschaften) benutzerdefinierte Eigenschaft ist der berechnete Wert der Wert der Eigenschaft, wie geschrieben: Der Browser evaluiert kein `calc()` oder andere Ausdrücke darin. Das Matching ist letztendlich ein Vergleich der Token der beiden Werte. Um äquivalente Werte zu vergleichen (z.B. `blue` und `#0000ff`), [registrieren Sie die benutzerdefinierte Eigenschaft](#registrierte_eigenschaften) mit `@property` und einem `syntax` Deskriptor.

Die **Bereichssyntax** verwendet einen Vergleichsoperator (`=`, `<`, `<=`, `>`, oder `>=`):

```css
@container style(--n = 3) {
  /* … */
}
```

Um diese Form zu bewerten, führt der Browser:

1. Löst jede Seite (benutzerdefinierte Eigenschaftsnamen werden so ermittelt, als würden sie mit [`var()`](/de/docs/Web/CSS/Reference/Values/var) verwendet).
2. Parst jede Seite als eines von {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, oder {{cssxref("&lt;resolution&gt;")}}. Wenn eine der Seiten nicht als einer dieser Typen geparst werden kann, ist die Abfrage `false`.
3. Wenn beide Seiten den gleichen Typ haben, berechnet jede Seite (evaluiert alle `calc()` Ausdrücke) und führt den numerischen Vergleich durch. Andernfalls ist die Abfrage `false`.

Betrachten Sie das folgende Beispiel, bei dem `--n` auf einen `calc()` Ausdruck gesetzt ist:

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

Die Bereichssyntax unterstützt auch eine dreifache Form, um zu testen, ob ein Wert innerhalb eines Intervalls liegt. Beide Operatoren müssen in dieselbe Richtung zeigen:

```css
@container style(0 < --n < 10) {
  /* true when --n is greater than 0 and less than 10 */
}

@container style(100px > --width > 50px) {
  /* true when --width is less than 100px and greater than 50px */
}
```

Die Bereichssyntax ist auch flexibler, wie jede Seite geschrieben ist. Jede Seite kann ein benutzerdefinierter Eigenschaftsname, ein [`var()`](/de/docs/Web/CSS/Reference/Values/var) Verweis, ein Literalswert oder ein `calc()`-Ausdruck sein, und die Operanden können in beliebiger Reihenfolge erscheinen. Die folgenden sind alle gültig:

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

Die einfache Syntax ist restriktiver: Die linke Seite muss der benutzerdefinierte Eigenschaftsname sein (ohne `var()`), und der Wert geht nach rechts. Die folgenden sind alle **ungültig**:

```css example-bad
@container style(var(--n): 3) {
  /* … */
}
@container style(3: --n) {
  /* … */
}
```

Da die Bereichssyntax erfordert, dass beide Seiten als einer der aufgelisteten numerischen Typen geparst werden, kann sie nicht verwendet werden, um wortähnliche Werte zu vergleichen. Zum Beispiel, gegeben `--s: new`, wäre die Abfrage `style(--s = new)` `false` (weil `new` keine Zahl, Länge, etc. ist), während `style(--s: new)` `true` ist.

Kurzgesagt:

- Verwenden Sie **`style(--variable: value)`** für wortähnliche oder string-ähnliche Übereinstimmungen, wie `style(--stock: low)` oder `style(--theme: dark)`.
- Verwenden Sie **`style(--variable = value)`** (oder `<`, `<=`, `>`, `>=`) für numerische Vergleiche, wie `style(--columns >= 3)` oder `style(--gap = 1rem)`.

### Verschachtelte Abfragen

Containerabfragen können innerhalb anderer Containerabfragen verschachtelt werden. Die innerhalb mehrerer verschachtelter Containerabfragen definierten Stile werden angewendet, wenn alle umschließenden Containerabfragen `true` sind.

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

In diesem Fall hat das `<output>` eine 5px gepunktete Grenze, wenn es in einem Container verschachtelt ist, in dem `--theme: purple` gesetzt ist, und dieser Container innerhalb eines Containers verschachtelt ist, dessen `--theme` Wert `red` ist.

### Stilabfrage-CSS-Deklarationen und -Eigenschaften

Noch in keinem Browser unterstützt, kann die `style()` Funktionalnotation reguläre CSS-Deklarationen einschließlich CSS-Eigenschaften und Eigenschafts-Werte-Paare enthalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn unterstützt, macht dieses einfache Beispiel die Hintergrundfarbe von {{htmlelement("b")}} und {{htmlelement("strong")}} Elementen gelb, wenn der Elternteil bereits `bold` ist.

Das Matching wird gegen den berechneten Wert des Elterncontainers durchgeführt; wenn der berechnete {{cssxref("font-weight")}} Wert des Elternteils `bold` ist (nicht `bolder` oder `900`), gibt es eine Übereinstimmung. Gerade wie bei Container-Stilabfragen für benutzerdefinierte Eigenschaften, mussten wir keine Elemente als Stilcontainer definieren, da alle Elemente standardmäßig Stilcontainer sind. Solange ein Element keinen `container-name` setzt, passt es, wenn es `font-weight: bold` gesetzt oder geerbt hat.

Stilmerkmale, die eine Kurzschreibweise abfragen, sind `true`, wenn die berechneten Werte für jede ihrer Langschreibweisen übereinstimmen, und `false`, sonst. Zum Beispiel wird `@container style({{cssxref("border")}}: 2px solid red)` `true` sein, wenn alle 12 dazugehörigen Langschreibweisen ({{cssxref("border-bottom-style")}}, etc.) dieselben gleichwertigen Werte gesetzt haben.

Die globalen CSS-Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und verursachen, dass die Container-Stilabfrage `false` ist.

Sie sollten die Stile, die Sie in der Stilabfrage abfragen, nicht auf das Element anwenden, das Sie mit dieser Abfrage stylen, da dies eine Endlosschleife verursachen könnte.

Es wird erwartet, dass Stilabfragen auch Eigenschaften in einem booleschen Kontext akzeptieren. Die Stilabfrage gibt `false` zurück, wenn der Wert der Eigenschaft der Anfangswert für diese Eigenschaft ist (wenn er nicht geändert wurde), und `true` andernfalls.

```css
@container style(font-weight) {
}
```

Das obige Beispiel wird `true` für jedes Element sein, das einen Wert für `font-weight` hat, der sich von seinem Anfangswert unterscheidet. User-Agent-Stylesheets setzen `font-weight: bold` für {{htmlelement("heading_elements", "heading")}} und {{htmlelement("th")}} Elemente zum Beispiel. Einige Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} hat manchmal auch ein `font-weight` anderes als `normal`, das vom User-Agent gesetzt wird. Solange das `font-weight` des Elements nicht der Standardwert für diesen User-Agent ist, wird die Stilabfrage `true` sein.

Diese Funktionen werden noch in keinem Browser unterstützt.

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries)
- CSS {{Cssxref("@container")}} Regel
- CSS {{Cssxref("contain")}} Eigenschaft
- CSS {{Cssxref("container")}} Kurzschreibweise
- CSS {{Cssxref("container-name")}} Eigenschaft
- [Verwendung von Container-Scroll-Statusabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verständnis von `aspect-ratio`](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [Erste Schritte mit Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) via una.im (2022)
