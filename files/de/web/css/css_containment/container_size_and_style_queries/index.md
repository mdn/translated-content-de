---
title: Verwenden von Containergrößen- und Stilabfragen
slug: Web/CSS/CSS_containment/Container_size_and_style_queries
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{CSSRef}}

[Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) ermöglichen es Ihnen, Stile auf Elemente anzuwenden, die in einem bestimmten Container verschachtelt sind, basierend auf den Merkmalen dieses Containers. Die Abfrage ergibt wahr oder falsch, abhängig davon, ob die Abfragebedingung für den Container zutrifft.

Containerabfragen sind ähnlich wie [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries). Die {{cssxref("@media")}}-Regel ermöglicht es, Stile auf Elemente basierend auf der Größe des Ansichtsfensters oder anderen Gerätemerkmalen anzuwenden. In ähnlicher Weise ermöglicht die {{cssxref("@container")}}-Regel es, Stile auf Elemente basierend auf der Größe oder anderen Stilmerkmalen eines enthaltenen Elements und nicht des Ansichtsfensters anzuwenden. Containerabfragen haben dieselben Syntaxregeln und logischen Operatoren wie Media-Abfragen.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt drei Arten von Containerabfragen:

- **Container-Größenabfragen**

  - : Größenabfragen erlauben es, Stile basierend auf der aktuellen [Größe](/de/docs/Web/CSS/@container#descriptors) eines enthaltenen Elements anzuwenden, einschließlich der Ausrichtung und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}}. Die enthaltenen Elemente müssen explizit als _Größenabfrage-Container_ deklariert werden.

- **Container-Stilabfragen**

  - : Stilabfragen erlauben es, Stile basierend auf den Stilmerkmalen eines enthaltenen Elements anzuwenden. Jedes nicht-leere Element kann ein Stilabfrage-Container sein. Derzeit ist das einzige Stilmerkmal, das von Stilabfragen unterstützt wird, CSS [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties). In diesem Fall ergibt die Abfrage wahr oder falsch, abhängig von dem berechneten Wert der benutzerdefinierten Eigenschaften des enthaltenen Elements. Wenn Container-Stilabfragen vollständig unterstützt werden, ermöglichen sie es Ihnen, Stile auf Nachfahren eines jeden Elements basierend auf jeder Eigenschaft, Deklaration oder einem berechneten Wert anzuwenden — beispielsweise, wenn der Container `display: inline flex` ist oder eine nicht-transparente Hintergrundfarbe hat.

- **[Container-Scrollzustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)**

  - : Scrollzustandsabfragen erlauben es Ihnen, CSS-Regeln basierend auf Scrollzustandsbedingungen selektiv auf die Nachfahren eines Containers anzuwenden, wie zum Beispiel, ob das abgefragte Element teilweise gescrollt ist oder ob der Container an einen Scroll-Snap-Container angeheftet ist. Die enthaltenen Elemente müssen explizit als _Scrollzustandsabfrage-Container_ deklariert werden.

In diesem Leitfaden lernen wir die Grundlagen von Containerabfragen, indem wir uns anschauen:

1. [Größenabfragen von Containern](#container_size_queries_2),
2. [Benennen von Containern](#benennen_von_containern), um ihren Umfang zu begrenzen, und
3. die Verwendung der `style()`-Funktionalnotation innerhalb der {{cssxref("@container")}}-Regel im `<container-condition>`, um [Stilabfragen mit benutzerdefinierten Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

Scrollzustandsabfragen werden in [Verwendung von Container-Scrollzustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) behandelt.

## Container-Größenabfragen

Container-Größenabfragen werden durch eine Größenbedingung gefiltert. Die zugehörigen Stile werden auf enthaltene Elemente angewendet, wenn das Containerelement als Container deklariert wurde und die Containerbedingung für das Element zutrifft. Der Größencontainer eines Elements ist der nächste Vorfahre mit Containment.

Elemente werden als _Größenabfrage-Container_ deklariert, indem ihre {{cssxref("container-type")}}-Eigenschaft (oder die {{cssxref("container")}}-Kurzform) auf `size` oder `inline-size` gesetzt wird.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Die Deklaration von Größenabfrage-Containern fügt [Enthaltenheit](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) zu ihnen hinzu. Dies ist aus Leistungsgründen notwendig — die Größe jedes Elements im DOM ständig abzufragen, wäre schlecht für die Leistung und Benutzererfahrung. Außerdem könnte eine endlose Schleife entstehen, wenn ein Nachfahrenstil die Größe des Containerelements ändert.

In einer Container-Größenabfrage enthält das `<container-condition>` eine oder mehrere `<size-query>`s. Jede Größenabfrage umfasst einen Größeneigenschaftsnamen, einen Vergleichsoperator und einen Wert. Die Größenmerkmale, die abgefragt werden können, sind auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation` beschränkt. Die boolesche Syntax und Logik, die verwendet wird, um eine oder mehrere `<size-query>`s zu kombinieren, ist dieselbe wie bei [`@media`](/de/docs/Web/CSS/@media)-Abfragen für Größenmerkmale.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Das `<container-condition>` in diesem Beispiel enthält eine einzelne `<size-query>` — `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}}-Elemente potenzielle Treffer für jede unbenannte Containerabfrage. Die innerhalb unserer Containerabfrage deklarierten Stile gelten für die Nachfahren aller Formulare zwischen `10em` und `30em` Breite, einschließlich.

## Benennen von Containern

Ein `<container-condition>` kann einen optionalen, groß- und kleinschreibungssensitiven {{cssxref("container-name")}} enthalten. Ein Containername macht die Containerbedingung spezifischer – sie wird nur für Elemente ausgewertet, die diesen Namen im `container-name`-Eigentum gesetzt haben.

Das {{cssxref("container-name")}}-Eigentum legt eine Liste von Abfrage-`<container-name>`-Werten fest, die in `@container`-Regeln verwendet werden können; diese sind groß- und kleinschreibungssensitive {{cssxref("ident")}}-Werte. Die Contrainernamen ermöglichen es, jeden container Vorfahr des Elements anzuvisieren. Ohne einen Containername entspricht die Abfrage nur dem nächsten container Vorfahren.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Namen zu Ihren `@container`-Regeln hinzugefügt haben, können Sie das {{cssxref("container-name")}}-Eigentum oder die {{cssxref("container")}}-Kurzform verwenden, um spezifische Containerelemente anzuzielen. Stile innerhalb der benannten `@container`-Regeln werden nur auf passende Elemente innerhalb von Containern mit diesen gesetzten Namen angewendet, die den Containerabfragen entsprechen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel gelten die Stile innerhalb des Containerabfrage-Blocks für die Nachfahren aller {{htmlelement("li")}}-Elemente mit einer Breite, die größer ist als ihre Höhe. Beachten Sie, dass auch andere Elemente mit `container-name: card`, auf die die Größenabfrage zutrifft, diese Stile auf die Nachfahren ihrer Elemente anwenden werden.

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

Im obigen Beispiel hat das Element zwei Contrainernamen, `wide` und `narrow`. Die Nachfahren von Elementen mit `class="sizeContainer"` erhalten die Stile aus der `wide`- oder der `narrow`-Abfrage angewendet (oder beide, wenn ein Element genau 20em breit ist).

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer ist, aber er kann immer noch ein [Stilcontainer](#container-stilabfragen) sein. Der Standardwert `container-name: none` gibt an, dass der Container keinen Namen hat, aber es verhindert nicht, dass das Element zu unbenannten Abfragen passt.

Mit Containerabfragen sind wir nicht auf Größenabfragen beschränkt! Sie können auch die Stilmerkmale eines Containers abfragen.

## Container-Stilabfragen

Eine _Container-Stilabfrage_ ist eine `@container`-Abfrage, die die berechneten Stile des Containerelements bewertet, wie in einer oder mehreren `style()`-Funktionalnotationen definiert. Die boolesche Syntax und Logik, die verwendet wird, um Stilmerkmale zu einer Stilabfrage zu kombinieren, ist dieselbe wie bei [CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname — `style()` innerhalb eines `<style-feature>` im Gegensatz zu `supports()` innerhalb eines `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist ein einzelnes **`<style-feature>`**. Laut der CSS-Containment-Spezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values) sein. Das einzige Stilmerkmal, das derzeit unterstützt wird, sind benutzerdefinierte Eigenschaften, mit oder ohne Wert. Siehe die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Wenn das `<style-feature>` einen Wert enthält, ergibt die Stilabfrage wahr, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder in Zukunft der CSS-Deklaration), die als `style()`-Argument übergeben wird, für den abgefragten Container zutrifft. Andernfalls löst es zu falsch auf.
Ein Stilmerkmal ohne Wert ergibt wahr, wenn der berechnete Wert unterschiedlich zum [Anfangswert](#registrierte_eigenschaften) für die gegebene Eigenschaft ist.

In Zukunft werden wir Stilabfragen wie folgt schreiben können:

```css
@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple),
    (max-width: 100vw) and style(max-width: 600px) {
  /* <stylesheet> */
}
```

Die `style()`-Funktionalnotation wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Obwohl sie noch nicht unterstützt wird, werden wir schließlich in der Lage sein, reguläre CSS-Deklarationen wie `max-width: 100vw` abzufragen. `@container (max-width: 100vw)` ist eine Größenabfrage; Containment mit {{cssxref("container-type")}} oder das {{cssxref("container")}}-Kurzform ist erforderlich. Diese Abfrage gibt wahr zurück, wenn der Container 100vw oder weniger ist. Das unterscheidet sich von der Abfrage `@container style(max-width: 100vw)`, die eine Stilabfrage ist; wenn unterstützt, gibt diese Abfrage wahr zurück, wenn der Container einen {{cssxref("max-width")}}-Wert von `100vw` hat.

Bis Stilabfragen für reguläre CSS-Deklarationen und -Eigenschaften unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als `style()`-Parameter einzuschließen, mit oder ohne Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige Dinge, die bereits erwähnt wurden, aber wichtig sind zu erinnern:

- Alle Elemente können Stilabfrage-Container sein; das Setzen eines `container-type` ist nicht erforderlich. Wenn Nachfahrenstile die berechneten Stile eines Vorfahren nicht beeinflussen, ist Containment nicht nötig.
- Ein `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Größenmerkmale in Ihrer Abfrage enthalten sind, stellen Sie sicher, dass Ihre Containerelemente einen `container-type` von `size` oder `inline-size` gesetzt haben.
- Wenn Sie nicht wollen, dass ein Element jemals als Container betrachtet wird, geben Sie ihm einen `container-name`, der nicht verwendet wird. Das Setzen von `container-name: none` entfernt alle Abfragenamen, die einem Container zugeordnet sind; es hindert das Element nicht daran, ein Stilcontainer zu sein.
- Zum Zeitpunkt des Verfassens dieses Artikels (Februar 2024) funktionieren Container-Stilabfragen nur mit CSS-Werten für benutzerdefinierte Eigenschaften in der `style()`-Abfrage.

Schauen wir uns nun die verschiedenen `<style-feature>`-Typen an.

### Stilabfragen für benutzerdefinierte Eigenschaften

Stilabfragen für benutzerdefinierte Eigenschaften erlauben es Ihnen, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), auch "CSS-Variablen" genannt, eines übergeordneten Elements abzufragen. Sie sind innerhalb eines `<style-query>` enthalten, genauso wie Sie eine reguläre CSS-Eigenschaft innerhalb einer Feature-Abfrage einfügen würden: entweder mit oder ohne Wert.

#### Eigenständige benutzerdefinierte Eigenschaftsabfragen

Der `<style-query>`-Parameter der `style()`-Funktionalnotation kann nur einen CSS-Variablennamen enthalten; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert enthalten ist, ergibt die Abfrage falsch, wenn der Wert derselbe wie der Wert des `initial-value`-Descriptors innerhalb der `@property`-Regel ist, falls vorhanden. Die Stilabfrage ergibt wahr und entspricht allen Elementen, die einen benutzerdefinierten Eigenschaftswert haben, der sich vom `initial-value` unterscheidet, oder für alle Elemente, die eine benutzerdefinierte Eigenschaft mit beliebigem Wert haben, wenn die benutzerdefinierte Eigenschaft ohne Registrierung deklariert wurde.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen über eine Zuweisung von CSS-Werten für benutzerdefinierte Eigenschaften eingeführt werden, geben wertlose benutzerdefinierte Eigenschaftsabfragen immer wahr zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel stimmt die Containerabfrage mit dem Element überein, auf dem die Eigenschaft `--theme-color` deklariert wurde, und allen seinen Nachfahren. Da die CSS-Variable `--theme-color` auf der {{cssxref(":root")}} deklariert wurde, wird die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}}-Knotens wahr sein.

##### Registrierte Eigenschaften

Das Verhalten von registrierten benutzerdefinierten Eigenschaften ist anders. Wenn sie explizit mit der {{cssxref("@property")}}-Regel oder über JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert werden, ergibt die Stilabfrage `style(--theme-color)` nur wahr für Elemente, wenn der berechnete Wert für `--theme-color` des Elements sich von dem in der ursprünglichen Definition dieser benutzerdefinierten Eigenschaft festgelegten [`initial-value`](/de/docs/Web/CSS/@property/initial-value) unterscheidet.

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

In diesem Beispiel entspricht das `:root`-Element NICHT der Stilabfrage, da der Wert der benutzerdefinierten Eigenschaft mit dem `initial-value`-Wert identisch ist. Der benutzerdefinierte Eigenschaftswert für das Element (und alle die diesen Wert erben) ist weiterhin `rebeccapurple`. Nur Elemente, die sich vom ursprünglichen Wert unterscheiden, in diesem Fall das {{htmlelement("main")}} und seine Nachfahren, die diesen geänderten Wert erben, sind ein Treffer.

#### Benutzerdefinierte Eigenschaft mit einem Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert dieser Eigenschaft des Elements eine genaue Übereinstimmung sein, wobei äquivalente Werte nur dann ein Treffer sind, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}}-Regel (oder einem [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)-Methodenaufruf) definiert wurde, der einen `syntax`-Descriptor enthält.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Container-Stilabfrage entspricht jedem Element, das `blue` als [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der benutzerdefinierten Eigenschaft `--accent-color` hat.

In diesem Fall werden andere Farbwerte, die dem sRGB `blue` entsprechen (wie der Hexadezimalcode `#0000ff`), nur dann übereinstimmen, wenn die `--accent-color`-Eigenschaft als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, zum Beispiel:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #00f;
}
```

In diesem Fall, wenn der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzt wäre, würde er für `@container style(--accent-color: blue)` wahr zurückgeben.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Optionsfeldern. Die vierte Option enthält ein Textfeld zum Eingeben einer benutzerdefinierten Farbe.

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

JavaScript aktualisiert den Wert der CSS-`--theme`-Variable auf dem {{htmlelement("body")}}-Element, welches ein Vorfahre des {{htmlelement("fieldset")}} und des {{htmlelement("output")}}-Elements ist, wann immer ein Optionsfeld ausgewählt wird. Wenn das Textfeld aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des `other`-Optionsfelds nur dann aktualisiert, wenn das `other`-Optionsfeld ausgewählt ist, was wiederum den Wert von `--theme` aktualisiert.

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

Wir verwenden die `@property`-Regel, um eine CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}}-Wert zu definieren und den `initial-value` auf `#00F` zu setzen, um sicherzustellen, dass äquivalente Farben ein Treffer sind, unabhängig davon, welche Syntax verwendet wird (zum Beispiel ist `#F00` gleich `rgb(255 0 0)`, `#ff0000` und `red`).

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

Die erste Stilmerkmalsabfrage ist eine benutzerdefinierte Eigenschaft ohne Wert. Dieser Abfragetyp gibt wahr zurück, wenn der berechnete Wert der benutzerdefinierten Eigenschaft sich vom `initial-value` für diese Eigenschaft unterscheidet. In diesem Fall wird er wahr sein, wenn der Wert von `--theme` jeder Wert außer einem syntaktisch äquivalenten Wert von `#f00` (wie `red`) ist. Wenn wahr, hat das {{htmlelement("output")}} einen 5px gepunkteten Umriss. Die Umrissfarbe ist der aktuelle Wert von `--theme`. Die Standardtextfarbe ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777;
  }
}
```

Die zweite und dritte Stilabfragen beinhalten Werte für die benutzerdefinierte Eigenschaft. Diese stimmen überein, wenn der `--theme`-Wert des Containers eine äquivalente Farbe zu dem angegebenen Wert ist, selbst wenn dieser Wert derselbe wie der `initial-value` ist. Die erste Abfrage entspricht Elementen, deren `--theme`-Wert äquivalent zu `red`, `blue` oder `green` ist. Wenn dies der Fall ist, ist die {{cssxref("color")}} die Farbe des aktuellen Werts von `--theme` (im Fall von `blue` und `green`, überschrieben durch das Grau, das in der ersten Stilabfrage gesetzt wurde).

Die zweite Stilabfrage besagt, dass der Inhalt des `<output>`, wenn `--theme` gleich `red` ist, auch fett sein wird. Wir haben dies getan, um besser zu demonstrieren, dass die Containerabfrage ein Treffer ist.

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

Versuchen Sie, verschiedene Farbwerte in das Textfeld einzugeben. Sie werden bemerken, dass Werte, die dem sRGB `red` entsprechen, das `<output>` rot machen — da es `style(--theme: red)` entspricht —, während sie den Umriss entfernen, da `style(--theme)` falsch zurückgibt, wenn der Wert von `--theme` des Elements derselbe wie der Anfangswert ist, der durch die `@property`-Regel definiert wurde. Jeder andere gültige Farbwert, einschließlich `currentcolor` oder `hsl(180 100% 50%)`, lässt die erste Stilabfrage wahr zurückgeben; diese sind Werte, die sich vom `initial-value` unterscheiden.

Da wir `syntax: "<color>";` gesetzt haben, kann die CSS-Variable nur gültige `<color>`-Werte zugewiesen bekommen. Gültige Werte für das {{cssxref("color")}}-Eigentum, die keine `<color>`-Werte sind, wie `unset` oder `inherit`, sind [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling) für diese benutzerdefinierte Eigenschaft und werden ignoriert.

Wenn Sie `unset` oder `gibberish` eingeben, aktualisiert das JavaScript den `style` auf dem {{HTMLElement("body")}} zu `--theme: unset` oder `--theme: gibberish`. Keine dieser Werte sind Farben. Beide sind ungültig und werden ignoriert. Das bedeutet, dass der Anfangswert vererbt und unverändert bleibt, wobei `style(--theme)` falsch und `style(--theme: red)` wahr zurückgibt.

> [!NOTE]
> Wenn Sie benutzerdefinierte Eigenschaften deklarieren, sollten Sie in Betracht ziehen, `@property` mit dem {{cssxref("@property/syntax","syntax")}}-Deskriptor zu verwenden, damit der Browser berechnete Werte richtig vergleichen kann.

### Verschachtelte Abfragen

Containerabfragen können innerhalb anderer Containerabfragen verschachtelt werden. Die innerhalb mehrerer verschachtelter Containerabfragen definierten Stile werden angewendet, wenn alle umgebenden Containerabfragen wahr sind.

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

In diesem Fall wird das `<output>` einen 5px gepunkteten Rand haben, wenn es in einem Container verschachtelt ist, in dem `--theme: purple` gesetzt ist, und dieser Container innerhalb eines Containers verschachtelt ist, dessen `--theme`-Wert `red` ist.

### Stilabfrage-CSS-Deklarationen und -Eigenschaften

Noch in keinem Browser unterstützt, kann die `style()`-Funktionalnotation reguläre CSS-Deklarationen einschließlich CSS-Eigenschaften und -Wertpaare enthalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn unterstützt, wird dieses einfache Beispiel die Hintergrundfarbe von {{htmlelement("b")}}- und {{htmlelement("strong")}}-Elementen gelb machen, wenn das übergeordnete Element bereits `bold` ist.

Das Matching wird gegen den berechneten Wert des übergeordneten Containers durchgeführt; wenn der berechnete {{cssxref("font-weight")}} des übergeordneten Elements `bold` ist (nicht `bolder` oder `900`), gibt es eine Übereinstimmung. Genau wie bei benutzerdefinierten Eigenschafts-Container-Stilabfragen mussten wir keine Elemente als Stilcontainer definieren, da alle Elemente standardmäßig Stilcontainer sind. Solange ein Element nicht mit einem `container-name` versehen ist, wird es übereinstimmen, wenn `font-weight: bold` gesetzt oder vererbt wird.

Stilmerkmale, die eine Kurzform abfragen, sind wahr, wenn die berechneten Werte für jede ihrer Langformen übereinstimmen, und falsch andernfalls. Zum Beispiel löst `@container style({{cssxref("border")}}: 2px solid red)` zu wahr auf, wenn alle 12 Langformen ({{cssxref("border-bottom-style")}}, etc.), die diese Kurzform ausmachen, auf dieselben äquivalenten Werte gesetzt sind.

Die globalen CSS-Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und lassen die Container-Stilabfrage zu falsch werden.

Wenden Sie die Stile, die Sie in der Stilabfrage abfragen, nicht auf das Element an, das Sie mit dieser Abfrage stylen, da dies zu einer unendlichen Schleife führen kann.

Es wird erwartet, dass Stilabfragen auch Eigenschaften in einem booleschen Kontext akzeptieren. Die Stilabfrage gibt falsch zurück, wenn der Wert der Eigenschaft der Ausgangswert für diese Eigenschaft ist (wenn er nicht geändert wurde), und wahr andernfalls.

```css
@container style(font-weight) {
}
```

Das obige Beispiel wird für jedes Element wahr zurückgeben, das einen Wert für `font-weight` hat, der sich vom Ausgangswert unterscheidet. Benutzeragenten-Stylesheets setzen `font-weight: bold` für {{htmlelement("heading_elements", "heading")}}- und {{htmlelement("th")}}-Elemente, zum Beispiel. Einige Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} hat manchmal auch ein `font-weight`, das vom Benutzeragenten auf etwas anderes als `normal` gesetzt wird. Solange das `font-weight` des Elements nicht der Standardwert für diesen Benutzeragenten ist, wird die Stilabfrage wahr zurückgeben.

Diese Funktionen werden in keinem Browser unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media queries](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}}-Regel
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container")}}-Kurzform-Eigenschaft
- CSS {{Cssxref("container-name")}}-Eigenschaft
- [Verwendung von Container-Scrollzustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Understanding `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Getting Started with Style Queries](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Stilabfragen](https://una.im/style-queries/) über una.im (2022)
