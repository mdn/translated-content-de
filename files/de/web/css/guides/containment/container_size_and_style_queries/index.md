---
title: Verwendung von Containergröße- und Stilabfragen
slug: Web/CSS/Guides/Containment/Container_size_and_style_queries
l10n:
  sourceCommit: 6f498c48ad30499640fd721896f13949aded9990
---

[Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries) ermöglichen das Anwenden von Stilen auf Elemente, die innerhalb eines bestimmten Containers verschachtelt sind, basierend auf den Merkmalen dieses Containers. Die Abfrage gibt `true` oder `false` zurück, je nachdem, ob die Bedingung für den Container erfüllt ist.

Containerabfragen sind ähnlich wie [Media Queries](/de/docs/Web/CSS/Guides/Media_queries). Die {{cssxref("@media")}}-Regel erlaubt es, Stile auf Basis der Viewport-Größe oder anderer Gerätemerkmale anzuwenden. In ähnlicher Weise ermöglicht die {{cssxref("@container")}}-Regel das Anwenden von Stilen basierend auf der Größe oder anderen Stilmerkmalen eines umschließenden Elements, anstatt auf den Viewport. Containerabfragen haben die gleichen Syntaxregeln und logischen Operatoren wie Media Queries.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt drei Arten von Containerabfragen:

- **Containergrößenabfragen**
  - : Größenabfragen ermöglichen das Anwenden von Stilen basierend auf der aktuellen [Größe](/de/docs/Web/CSS/Reference/At-rules/@container#descriptors) eines umschließenden Elements, einschließlich der Orientierung und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}}. Die umschließenden Elemente müssen explizit als _Größenabfrage-Container_ deklariert werden.

- **[Containerstilabfragen](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries)**
  - : Stilabfragen ermöglichen das Anwenden von Stilen basierend auf den Stilmerkmalen eines umschließenden Elements, wobei jedes nicht-leere Element ein Stilabfrage-Container sein kann. Ein Stilmerkmal kann eine CSS-Eigenschaft, eine CSS-[benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) oder eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations) sein. Dies ermöglicht es, Stile basierend auf den Stilmerkmalen eines Container-Elements auf dessen Nachkommen anzuwenden — wie zum Beispiel, ob es eine `display: inline`-Flex-Deklaration hat oder der Wert einer benutzerdefinierten Eigenschaft.

- **[Container-Scrollstatus-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)**
  - : Scrollstatus-Abfragen erlauben es, CSS-Regeln selektiv auf die Nachkommen eines Containers basierend auf Bedingungen des Scrollstatus anzuwenden, wie zum Beispiel, ob das abgefragte Element teilweise gescrollt ist oder ob der Container an einem Scroll-Snap-Punkt eingerastet ist. Die umschließenden Elemente müssen explizit als _Scrollstatus-Abfrage-Container_ deklariert werden.

In diesem Leitfaden lernen wir die Grundlagen von Containerabfragen, indem wir uns ansehen:

1. [Containergrößenabfragen](#container_size_queries_2),
2. [Benennen von Containern](#benennen_von_containern), um deren Gültigkeitsbereich einzuschränken, und
3. Verwendung der `style()`-Funktion innerhalb der {{cssxref("@container")}}-Regel's `<container-condition>`, um [Stilabfragen mit benutzerdefinierten Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

Scrollstatus-Abfragen werden in [Verwendung von Container-Scrollstatus-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) behandelt.

## Containergrößenabfragen

Containergrößenabfragen werden durch eine Größenbedingung gefiltert. Die zugehörigen Stile werden auf enthaltene Elemente angewendet, wenn das Containerelement als Container deklariert wurde und die Containerbedingung für dieses Element erfüllt ist. Der Größencontainer eines Elements ist der nächstgelegene Vorfahr mit Containment.

Elemente werden als _Größenabfrage-Container_ deklariert, indem ihre {{cssxref("container-type")}}-Eigenschaft (oder die {{cssxref("container")}}-Kurzschreibweise) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Das Deklarieren von Größenabfrage-Containern fügt [Containment](/de/docs/Web/CSS/Guides/Containment/Using) hinzu. Dies ist eine leistungsbasierte Notwendigkeit — die Größe jedes Elements im DOM ständig abzufragen, wäre schlecht für die Leistung und Benutzererfahrung. Außerdem könnte eine unendliche Schleife entstehen, wenn ein Nachkommen-Stil die Größe des Containerelements ändern würde.

In einer Containergrößenabfrage umfasst die `<container-condition>` eine oder mehrere `<size-query>`s. Jede Größenabfrage enthält einen Namen des Größenmerkmals, einen Vergleichsoperator und einen Wert. Die gesuchten Größenmerkmale sind auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation` beschränkt. Die boolesche Syntax und Logik zum Kombinieren von ein oder mehreren `<size-query>`s ist die gleiche wie bei {{cssxref("@media")}}-Größenmerkmalsabfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Die `<container-condition>` in diesem Beispiel enthält eine einzelne `<size-query>` — `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}}-Elemente potenzielle Übereinstimmungen für jede unbenannte Containerabfrage. Die innerhalb unserer Containerabfrage deklarierten Stile gelten für die Nachkommen aller Formen zwischen `10em` und `30em` Breite, einschließlich.

## Benennen von Containern

Eine `<container-condition>` kann einen optionalen, groß-/kleinschreibungssensitiven {{cssxref("container-name")}} enthalten. Ein Containername macht die Containerbedingung spezifischer — sie wird nur gegen Elemente ausgewertet, bei denen dieser Name in der `container-name`-Eigenschaft gesetzt ist.

Die {{cssxref("container-name")}}-Eigenschaft gibt eine Liste von Abfrage-`<container-name>`-Werten an, die in `@container`-Regeln verwendet werden können; dies sind groß-/kleinschreibungsensitive {{cssxref("ident")}}-Werte. Die Container-Namen ermöglichen das Zielen auf jeden Container-Vorfahr des Elements. Ohne einen Container-Namen stimmt die Abfrage nur mit dem nächstgelegenen Container-Vorfahr überein.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Ihren `@container`-Regeln Namen hinzugefügt haben, können Sie die {{cssxref("container-name")}}-Eigenschaft oder die {{cssxref("container")}}-Kurzschreibweise verwenden, um auf bestimmte Containerelemente zu zielen. Stile innerhalb der benannten `@container`-Regeln werden nur auf entsprechende Elemente innerhalb von Containern mit diesen Namen angewendet, die die Containerabfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel gelten die Stile innerhalb des Containerabfrageblocks für die Nachkommen aller {{htmlelement("li")}}-Elemente mit einer Breite, die größer ist als ihre Höhe. Beachten Sie, dass auch andere Elemente mit `container-name: card`, die der Größenabfrage entsprechen, diese Stile auf die Nachkommen ihrer Elemente angewendet bekommen.

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

Im obigen Beispiel hat das Element zwei Containernamen, `wide` und `narrow`. Die Nachkommen von Elementen mit `class="sizeContainer"` erhalten die Stile aus der `wide`- oder `narrow`-Abfrage angewendet.

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer wird, aber er kann immer noch ein [Stilcontainer](#containerstilabfragen) sein. Der Standardwert `container-name: none` gibt an, dass der Container keinen Namen hat, verhindert aber nicht, dass das Element mit namenlosen Abfragen übereinstimmt.

Mit Containerabfragen sind wir nicht auf Größenabfragen beschränkt! Sie können auch die Stilmerkmale eines Containers abfragen.

## Containerstilabfragen

Eine _Containerstilabfrage_ ist eine `@container`-Abfrage, die berechnete Stile des Containerelements auswertet, wie in einer oder mehreren `style()`-Funktionsnotationen definiert. Die boolesche Syntax und Logik, die verwendet wird, um Stilmerkmale zu einem Stilabfrage zu kombinieren, ist die gleiche wie in [CSS-Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname — `style()` innerhalb eines `<style-feature>` im Gegensatz zu `supports()` innerhalb eines `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist ein einzelnes **`<style-feature>`**. Gemäß der CSS-Containment-Spezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/Reference/Values/var#values) sein. Das einzige derzeit unterstützte Stilmerkmal sind benutzerdefinierte Eigenschaften, mit oder ohne Wert. Siehe die [Browser-Kompatibilitätstabelle für `@container`](/de/docs/Web/CSS/Reference/At-rules/@container#browser_compatibility).

Wenn das `<style-feature>` einen Wert enthält, wird die Stilabfrage als wahr ausgewertet, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder, zukünftig, der CSS-Deklaration), die als `style()`-Argument übergeben wird, für den abgefragten Container wahr ist. Andernfalls wird auf falsch aufgelöst.
Ein Stilmerkmal ohne Wert wird als wahr ausgewertet, wenn der berechnete Wert sich vom [Anfangswert](#registrierte_eigenschaften) für die gegebene Eigenschaft unterscheidet.

In Zukunft können wir Stilabfragen wie folgt schreiben:

```css
@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple),
    (width <= 100vw) and style(max-width: 600px) {
  /* <stylesheet> */
}
```

Die `style()`-Funktionsnotation wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Während dies noch nicht unterstützt wird, können wir schließlich reguläre CSS-Deklarationen wie `max-width: 600px` abfragen. Eine Abfrage von `@container (max-width: 600px)` ist eine Größenabfrage; Containment mit {{cssxref("container-type")}}, oder die {{cssxref("container")}}-Kurzschreibweise, wird benötigt. Diese Abfrage wird `true` zurückgeben, wenn der Container 600px oder kleiner ist. Das unterscheidet sich von der Abfrage `@container style(max-width: 600px)`, die eine Stilabfrage ist; wenn unterstützt, wird diese Abfrage `true` zurückgeben, wenn der Container einen {{cssxref("max-width")}}-Wert von `600px` hat.

Bis Stilabfragen für reguläre CSS-Deklarationen und Eigenschaften unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als `style()`-Parameter aufzunehmen, mit oder ohne Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige Dinge, die bereits erwähnt wurden, sich aber wichtig zu erinnern sind:

- Alle Elemente können Stilabfrage-Container sein; das Setzen eines `container-type` ist nicht erforderlich. Wenn Nachkommenstyles die berechneten Stile eines Vorfahren nicht beeinflussen, ist Containment nicht nötig.
- Eine `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Sie Größenmerkmale in Ihre Abfrage aufnehmen, stellen Sie sicher, dass Ihre Containerelemente einen `container-type` von `size` oder `inline-size` gesetzt haben.
- Wenn Sie nicht möchten, dass ein Element jemals als Container betrachtet wird, geben Sie ihm einen `container-name`, der nicht verwendet wird. Das Setzen von `container-name: none` entfernt alle zugehörigen Abfragenamen von einem Container; es verhindert nicht, dass das Element ein Stilcontainer ist.
- Zum Zeitpunkt des Schreibens (Februar 2024) funktionieren Stilabfragen von Containern nur mit CSS-Benutzerdefinierte-Eigenschaftswerten in der `style()`-Abfrage.

Nun, lassen Sie uns eintauchen und einen Blick auf die verschiedenen `<style-feature>`-Typen werfen.

### Stilabfragen für benutzerdefinierte Eigenschaften

Stilabfragen für benutzerdefinierte Eigenschaften ermöglichen es, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), auch "CSS-Variablen" genannt, eines übergeordneten Elements abzufragen. Sie werden innerhalb eines `<style-query>` genauso aufgenommen, wie Sie eine reguläre CSS-Eigenschaft innerhalb einer Feature-Abfrage einfügen würden: entweder mit oder ohne Wert.

#### Eigenständige benutzerdefinierte Eigenschafts-Abfragen

Der `<style-query>`-Parameter der `style()`-Funktionsnotation kann nur einen CSS-Variablennamen enthalten; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert enthalten ist, wird die Abfrage `false` zurückgeben, wenn der Wert mit dem Wert des `initial-value`-Descriptors innerhalb der `@property`-Regel übereinstimmt, falls vorhanden. Die Stilabfrage gibt `true` zurück und stimmt mit allen Elementen überein, die einen benutzerdefinierten Eigenschaftswert haben, der sich vom `initial-value` unterscheidet, oder mit allen Elementen, die eine benutzerdefinierte Eigenschaft mit einem beliebigen Wert haben, wenn die benutzerdefinierte Eigenschaft ohne Registrierung deklariert wurde.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen über eine CSS-Benutzerdefinierte-Eigenschaftswertzuweisung eingeführt werden, geben wertlose benutzerdefinierte Eigenschaftsabfragen immer `true` zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel stimmt die Containerabfrage mit dem Element überein, auf dem die `--theme-color`-Eigenschaft deklariert wurde, und allen seinen Nachkommen. Da die CSS-Variable `--theme-color` auf der {{cssxref(":root")}} deklariert wurde, wird die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}}-Knotens wahr sein.

##### Registrierte Eigenschaften

Das Verhalten von registrierten benutzerdefinierten Eigenschaften ist anders. Wenn sie ausdrücklich mit der {{cssxref("@property")}} CSS-Regel oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert werden, gibt die Stilabfrage `style(--theme-color)` nur `true` für Elemente zurück, wenn der berechnete Wert der `--theme-color`-Eigenschaft des Elements sich von dem [`initial-value`](/de/docs/Web/CSS/Reference/At-rules/@property/initial-value) unterscheidet, der in der ursprünglichen Definition dieser benutzerdefinierten Eigenschaft festgelegt ist.

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

In diesem Beispiel stimmt das `:root`-Element NICHT mit der Stilabfrage überein, weil der Wert der benutzerdefinierten Eigenschaft dem `initial-value`-Wert entspricht. Der benutzerdefinierte Eigenschaftswert für das Element (und alle die diesen Wert erben) bleibt `rebeccapurple`. Nur Elemente, die sich vom Anfangswert unterscheiden, in diesem Fall das {{htmlelement("main")}}-Element und dessen Nachkommen, die diesen geänderten Wert erben, sind eine Übereinstimmung.

#### Benutzerdefinierte Eigenschaft mit Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert der Eigenschaft des Elements eine exakte Übereinstimmung sein, wobei äquivalente Werte nur dann eine Übereinstimmung sind, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}}-Regel (oder einem [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)-Methodenaufruf) mit einem `syntax`-Descriptor definiert wurde.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Containerstilabfrage stimmt mit jedem Element überein, das `blue` als [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der `--accent-color`-benutzerdefinierten Eigenschaft hat.

In diesem Fall werden andere Farbwerte, die sRGB `blue` entsprechen (wie der Hexadezimalcode `#0000ff`), nur übereinstimmen, wenn die `--accent-color`-Eigenschaft als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #0000ff;
}
```

In diesem Fall, wenn der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzt wäre, würde es `true` für `@container style(--accent-color: blue)` zurückgeben.

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

JavaScript aktualisiert den Wert der CSS-`--theme`-Variablen auf dem {{htmlelement("body")}}-Element, das ein Vorfahr des {{htmlelement("fieldset")}} und des {{htmlelement("output")}}-Elements ist, wann immer ein Optionsfeld ausgewählt wird. Wenn das Text-`<input>` aktuell wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des `other` Optionsfelds nur aktualisiert, wenn das `other` Optionsfeld aktiviert ist, was wiederum den Wert von `--theme` aktualisiert.

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

Wir verwenden die `@property`-Regel, um eine CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}}-Wert zu definieren, und setzen den `initial-value` auf `red`, um sicherzustellen, dass äquivalente Farben unabhängig von der verwendeten Syntax übereinstimmen (zum Beispiel ist `red` gleich `rgb(255 0 0)`, `#ff0000` und `#f00`).

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

Die erste Stilmerkmalsabfrage ist eine benutzerdefinierte Eigenschaft ohne Wert. Diese Art der Abfrage gibt `true` zurück, wenn der berechnete Wert der benutzerdefinierten Eigenschaft anders ist als der `initial-value` für diese Eigenschaft. In diesem Fall wird sie `true` sein, wenn der Wert von `--theme` ein anderer Wert ist als jeder Syntax-äquivalente Wert von `red` (wie `#ff0000`). Wenn `true`, erhält das {{htmlelement("output")}} eine 5px gepunktete Kontur. Die Konturfarbe ist der aktuelle Wert von `--theme`. Die Standardtextfarbe ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777777;
  }
}
```

Die zweite und dritte Stilabfrage enthalten Werte für die benutzerdefinierte Eigenschaft. Diese stimmen überein, wenn der `--theme`-Wert des Containers eine äquivalente Farbe zu dem angegebenen Wert ist, selbst wenn dieser Wert dem `initial-value` entspricht. Die erste Abfrage stimmt mit Elementen überein, deren `--theme`-Wert äquivalent zu `red`, `blue` oder `green` ist. Wenn es so ist, wird die {{cssxref("color")}} die Farbe des aktuellen Werts von `--theme` sein (im Falle von `blue` und `green`, überschreibt sie das Grau, das in der ersten Stilabfrage gesetzt wurde).

Die zweite Stilabfrage besagt, dass, wenn `--theme` äquivalent zu `red` ist, der Inhalt des `<output>` ebenfalls fett sein wird. Wir haben dies getan, um besser zu demonstrieren, dass die Containerabfrage eine Übereinstimmung ist.

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

Versuchen Sie, verschiedene Farbwerte in das Textfeld einzugeben. Sie werden feststellen, dass Werte, die RGB-Äquivalente von `red` sind, das `<output>` rot machen — da es mit `style(--theme: red)` übereinstimmt —, während die Umrisslinie entfernt wird, weil `style(--theme)` `false` zurückgibt, wenn der Wert des Elements für `--theme` gleich dem Anfangswert für `--theme` ist, der durch die `@property`-Regel definiert ist. Jeder gültige nicht rote RGB-Farbwert, einschließlich `currentColor` oder `hsl(180 100% 50%)` usw., bringt die erste Stilabfrage dazu, `true` zurückzugeben; sie sind Werte, die sich vom `initial-value` unterscheiden.

Da wir `syntax: "<color>";` gesetzt haben, kann die CSS-Variable nur gültige `<color>`-Werte zugewiesen bekommen. Gültige Werte für die {{cssxref("color")}}-Eigenschaft, die keine `<color>`-Werte sind, wie `unset` oder `inherit`, sind für diese benutzerdefinierte Eigenschaft [ungültig](/de/docs/Web/CSS/Guides/Syntax/Error_handling) und werden ignoriert.

Wenn Sie `unset` oder Unsinn eingeben, aktualisiert das JavaScript die `style` des {{htmlElement("body")}} zu `--theme: unset` oder `--theme: gibberish`. Keines von beiden sind Farben. Beide sind ungültig und werden ignoriert. Dies bedeutet, dass der Anfangswert übernommen wird und unverändert bleibt, wobei `style(--theme)` `false` zurückgibt und `style(--theme: red)` `true`.

> [!NOTE]
> Beim Deklarieren benutzerdefinierter Eigenschaften sollten Sie `@property` mit dem {{cssxref("@property/syntax","syntax")}}-Descriptor verwenden, damit der Browser berechnete Werte richtig vergleichen kann.

### Verschachtelte Abfragen

Containerabfragen können innerhalb anderer Containerabfragen verschachtelt werden. Die innerhalb verschachtelter Containerabfragen definierten Stile werden angewendet, wenn alle umgebenden Containerabfragen `true` sind.

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

In diesem Fall wird das `<output>` eine 5px gepunktete Grenze haben, wenn es in einem Container verschachtelt ist, bei dem `--theme: purple` gesetzt ist, und dieser Container innerhalb eines Containers verschachtelt ist, dessen `--theme`-Wert `red` ist.

### Stilabfrage-CSS-Deklarationen und -Eigenschaften

Noch nicht in einem Browser unterstützt, kann die `style()`-Funktionsnotation reguläre CSS-Deklarationen einschließlich CSS-Eigenschaften und Eigenschafts-Wert-Paare enthalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn unterstützt, wird dieses einfache Beispiel die Hintergrundfarbe aller {{htmlelement("b")}} und {{htmlelement("strong")}}-Elemente gelb machen, wenn das übergeordnete Element bereits `bold` ist.

Das Matching erfolgt gegen den berechneten Wert des übergeordneten Containers; wenn der berechnete {{cssxref("font-weight")}} des übergeordneten Elements `bold` ist (nicht `bolder` oder `900`), gibt es eine Übereinstimmung. Genau wie bei benutzerdefinierten Eigenschafts-Containerstilabfragen mussten wir keine Elemente als Stilcontainer definieren, da alle Elemente standardmäßig Stilcontainer sind. Solange ein Element keinen `container-name` gesetzt hat, wird es übereinstimmen, wenn es `font-weight: bold` gesetzt oder geerbt hat.

Stilmerkmale, die eine beliebig zusammengesetzte Eigenschaft abfragen, werden `true`, wenn die berechneten Werte für jede ihrer Langform-Eigenschaften übereinstimmen, und andernfalls `false`. Beispielsweise wird `@container style({{cssxref("border")}}: 2px solid red)` zu `true`, wenn alle 12 Langform-Eigenschaften ({{cssxref("border-bottom-style")}}, usw.), die diese Abkürzung ausmachen, auf dieselben äquivalenten Werte gesetzt sind.

Die globalen CSS-Werte `revert` und `revert-layer` sind in einem `<style-feature>` ungültig und verursachen, dass die Containerstilabfrage `false` ist.

Wenden Sie die Stile, die Sie in der Stilabfrage abfragen, nicht auf das Element an, das Sie mit dieser Abfrage stilisieren, da dies eine Endlosschleife verursachen kann.

Es wird erwartet, dass Stilabfragen auch Eigenschaften im booleschen Kontext akzeptieren werden. Die Stilabfrage gibt `false` zurück, wenn der Wert der Eigenschaft gleich dem Anfangswert dieser Eigenschaft ist (wenn er nicht geändert wurde), und andernfalls `true`.

```css
@container style(font-weight) {
}
```

Das obige Beispiel wird `true` für jedes Element zurückgeben, das einen `font-weight`-Wert hat, der sich von seinem Anfangswert unterscheidet. Benutzeragent-Stylesheets setzen `font-weight: bold` für {{htmlelement("heading_elements", "heading")}}- und {{htmlelement("th")}}-Elemente zum Beispiel. Einige Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} hat ebenfalls manchmal einen `font-weight`, der nicht `normal` ist, als Standardwert. Solange das `font-weight` des Elements nicht der Standardwert für diesen Benutzeragent ist, wird die Stilabfrage `true` zurückgeben.

Diese Features werden derzeit in keinem Browser unterstützt.

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries)
- CSS {{Cssxref("@container")}}-Regel
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container")}}-Kurzschreibweise
- CSS {{Cssxref("container-name")}}-Eigenschaft
- [Verwendung von Container-Scrollstatus-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verstehen von `aspect-ratio`](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [Erste Schritte mit Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) via una.im (2022)
