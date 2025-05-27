---
title: Verwendung von Containergrößen- und Stilabfragen
slug: Web/CSS/CSS_containment/Container_size_and_style_queries
l10n:
  sourceCommit: edb16c0a662d7e719efe67561389a7a087c1ace9
---

{{CSSRef}}

[Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) ermöglichen es Ihnen, Stile auf innerhalb eines bestimmten Containers verschachtelte Elemente basierend auf den Eigenschaften dieses Containers anzuwenden. Die Abfrage gibt `true` oder `false` zurück, je nachdem, ob die Abfragebedingung für den Container zutrifft.

Container-Abfragen ähneln [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries). Die {{cssxref("@media")}}-Regel ermöglicht die Anwendung von Stilen auf Elemente basierend auf der Größe des Ansichtsfensters oder anderen Geräteeigenschaften. Ebenso ermöglicht die {{cssxref("@container")}}-Regel die Anwendung von Stilen auf Elemente basierend auf der Größe oder anderen Stileigenschaften eines enthaltenen Elements, anstatt des Ansichtsfensters. Container-Abfragen haben dieselben Syntaxregeln und logischen Operatoren wie Media-Abfragen.

```css
@container <container-condition># {
  /* <stylesheet> */
}
```

Es gibt drei Arten von Container-Abfragen:

- **Containergrößen-Abfragen**

  - : Größenabfragen ermöglichen es, Stile basierend auf der aktuellen [Größe](/de/docs/Web/CSS/@container#descriptors) eines enthaltenen Elements anzuwenden, einschließlich der Ausrichtung und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}}. Die enthaltenen Elemente müssen explizit als _Größenabfragecontainer_ deklariert werden.

- **Containerstil-Abfragen**

  - : Stilabfragen ermöglichen es, Stile basierend auf den Stileigenschaften eines enthaltenen Elements anzuwenden. Jedes nicht-leere Element kann ein Stilabfragecontainer sein. Derzeit wird von Stilabfragen nur die Stileigenschaft von CSS [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) unterstützt. In diesem Fall gibt die Abfrage `true` oder `false` zurück, je nach dem berechneten Wert der benutzerdefinierten Eigenschaften des enthaltenen Elements. Wenn Containerstil-Abfragen vollständig unterstützt werden, ermöglichen sie die Anwendung von Stilen auf Nachkommen eines jeden Elements basierend auf einer beliebigen Eigenschaft, Deklaration oder einem berechneten Wert — zum Beispiel, ob der Container `display: inline flex` hat oder eine nicht-transparente Hintergrundfarbe aufweist.

- **[Container-Scrollstatus-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)**

  - : Scrollstatus-Abfragen ermöglichen es, CSS-Regeln selektiv auf die Nachkommen eines Containers basierend auf Scrollstatusbedingungen anzuwenden, wie zum Beispiel ob das abgefragte Element teilweise gescrollt wird oder ob der Container zu einem Scrollschnapp-Container gesperrt ist. Die enthaltenen Elemente müssen explizit als _Scrollstatus-Abfragecontainer_ deklariert werden.

In diesem Leitfaden lernen wir die Grundlagen von Container-Abfragen, indem wir uns ansehen:

1. [Containergrößen-Abfragen](#container_size_queries_2),
2. [Vergabe von Namen für Container](#vergabe_von_namen_für_container) zur Einschränkung ihres Geltungsbereichs, und
3. die Verwendung der `style()`-Funktionsnotation innerhalb der {{cssxref("@container")}}-Regel `<container-condition>`, um [Stilabfragen mit benutzerdefinierten Eigenschaften](#stilabfragen_für_benutzerdefinierte_eigenschaften) zu erstellen.

Scrollstatus-Abfragen werden in [Verwendung von Container-Scrollstatus-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) behandelt.

## Containergrößen-Abfragen

Containergrößen-Abfragen werden durch eine Größenbedingung gefiltert. Die zugehörigen Stile werden auf enthaltene Elemente angewendet, wenn das Containerelement als Container deklariert wurde und die Containerbedingung für dieses Element zutrifft. Der Größencontainer eines Elements ist der nächstgelegene Vorgänger mit Eindämmung.

Elemente werden als _Größenabfragecontainer_ deklariert, indem man ihre {{cssxref("container-type")}}-Eigenschaft (oder die {{cssxref("container")}}-Kurzschrift) auf `size` oder `inline-size` setzt.

```css
@container (orientation: landscape) {
  /* styles applied to descendants of this size container */
}

.sizeContainer {
  container-type: size;
}
```

Die Deklaration von Größenabfragecontainern fügt ihnen [Eindämmung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) hinzu. Dies ist eine Leistungsnotwendigkeit — die Größe jedes Elements im DOM ständig abzufragen, wäre schlecht für die Leistung und Benutzererfahrung. Außerdem könnte eine unendliche Schleife auftreten, wenn ein Nachkommenstil die Größe des Containerelements änderte.

In einer Containergrößen-Abfrage enthält die `<container-condition>` eine oder mehrere `<size-query>`s. Jede Größenabfrage enthält einen Größenmerkmalnamen, einen Vergleichsoperator und einen Wert. Die Größenmerkmale, die abgefragt werden können, beschränken sich auf `width`, `height`, `inline-size`, `block-size`, `aspect-ratio` und `orientation`. Die boolesche Syntax und Logik, die eine oder mehrere `<size-query>`s kombiniert, ist dieselbe wie bei [`@media`](/de/docs/Web/CSS/@media)-Größenmerkmalabfragen.

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

Die `<container-condition>` in diesem Beispiel enthält eine einzelne `<size-query>` — `(10em <= width <= 20em)`. In diesem Fall sind alle {{htmlelement("form")}}-Elemente potenzielle Treffer für jede unbenannte Containerabfrage. Die innerhalb unserer Containerabfrage deklarierten Stile gelten für die Nachkommen aller Formulare mit einer Breite zwischen `10em` und `30em`, einschließlich.

## Vergabe von Namen für Container

Eine `<container-condition>` kann einen optionalen, auf Groß- und Kleinschreibung sensitiven, {{cssxref("container-name")}} enthalten. Ein Containername macht die Containerbedingung spezifischer — sie wird nur an Elementen ausgewertet, die diesen Namen in der `container-name`-Eigenschaft gesetzt haben.

Die {{cssxref("container-name")}}-Eigenschaft gibt eine Liste von Abfrage-`<container-name>`-Werten an, die in `@container`-Regeln verwendet werden können; dies sind auf Groß- und Kleinschreibung sensitive {{cssxref("ident")}}-Werte. Die Containernamen ermöglichen es, gezielt jeden containerähnlichen Vorfahren des Elements anzusprechen. Ohne einen Containername stimmt die Abfrage nur mit dem nächstgelegenen containerähnlichen Vorfahren überein.

```css
@container [ [ <container-name> ]? <container-query> ]# {
  /* <stylesheet> */
}
```

Nachdem Sie Namen zu Ihren `@container`-Regeln hinzugefügt haben, können Sie die {{cssxref("container-name")}}-Eigenschaft oder die {{cssxref("container")}}-Kurzschrift verwenden, um bestimmte Containerelemente anzusprechen. Die Stile innerhalb der benannten `@container`-Regeln werden nur auf passende Elemente innerhalb von Containern mit diesen gesetzten Namen angewendet, die die Containerabfragen erfüllen.

```css
@container card (orientation: landscape) {
  /* styles */
}

.todo-panel > li {
  container-type: inline-size;
  container-name: card;
}
```

Im obigen Beispiel gelten die Stile innerhalb des Containerabfrageblocks für die Nachkommen aller {{htmlelement("li")}}-Elemente mit einer Breite, die größer als ihre Höhe ist. Beachten Sie, dass auch andere Elemente mit `container-name: card`, die die Größenabfrage erfüllen, diese Stile auf die Nachkommen ihrer Elemente anwenden werden.

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

Im obigen Beispiel hat das Element zwei Containernamen, `wide` und `narrow`. Die Nachkommen aller Elemente mit `class="sizeContainer"` bekommen die Stile aus der `wide`- oder `narrow`-Abfrage angewendet (oder beide, wenn ein Element genau 20em breit ist).

Der Standardwert `container-type: normal` verhindert, dass der Container ein Größencontainer wird, aber er kann trotzdem ein [Stilcontainer](#containerstil-abfragen) sein. Der Standardwert `container-name: none` besagt, dass der Container keinen Namen hat, verhindert jedoch nicht, dass das Element mit unbenannten Abfragen übereinstimmt.

Mit Containerabfragen sind wir nicht nur auf Größenabfragen beschränkt! Sie können auch die Stileigenschaften eines Containers abfragen.

## Containerstil-Abfragen

Eine _Containerstil-Abfrage_ ist eine `@container`-Abfrage, die berechnete Stile des Containerelements auswertet, wie in einer oder mehreren `style()`-Funktionsnotationen definiert. Die boolesche Syntax und Logik, die zur Kombination von Stileigenschaften in eine Stilabfrage verwendet wird, ist dieselbe wie bei [CSS-Featureabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries). Der einzige Unterschied ist der Funktionsname — `style()` innerhalb eines `<style-feature>` im Gegensatz zu `supports()` innerhalb einer `<support-condition>`:

```css
@container style(<style-feature>),
    not style(<style-feature>),
    style(<style-feature>) and style(<style-feature>),
    style(<style-feature>) or style(<style-feature>) {
  /* <stylesheet> */
}
```

Der Parameter jeder `style()`-Funktion ist ein einzelnes **`<style-feature>`**. Entsprechend der CSS-Eindämmungsspezifikation kann ein `<style-feature>` eine gültige CSS-[Deklaration](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), eine CSS-Eigenschaft oder ein [`<custom-property-name>`](/de/docs/Web/CSS/var#values) sein. Das einzige momentan unterstützte Stilelement sind benutzerdefinierte Eigenschaften, mit oder ohne Wert. Siehe die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Wenn das `<style-feature>` einen Wert enthält, wird die Stilabfrage als wahr ausgewertet, wenn der berechnete Wert der benutzerdefinierten Eigenschaft (oder, in Zukunft, der CSS-Deklaration), die als `style()`-Argument übergeben wird, für den abgefragten Container zutrifft. Andernfalls wird es als falsch aufgelöst.
Ein Stilelement ohne Wert wird als wahr ausgewertet, wenn der berechnete Wert von dem [Anfangswert](#registrierte_eigenschaften) für die gegebene Eigenschaft abweicht.

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

Die `style()`-Funktionsnotation wird verwendet, um Stilabfragen von Größenabfragen zu unterscheiden. Obwohl noch nicht unterstützt, werden wir schließlich reguläre CSS-Deklarationen wie `max-width: 100vw` abfragen können. Die Abfrage `@container (max-width: 100vw)` ist eine Größenabfrage; Eindämmung mit {{cssxref("container-type")}} oder die {{cssxref("container")}}-Kurzschrift ist erforderlich. Diese Abfrage gibt `true` zurück, wenn der Container 100vw oder kleiner ist. Das unterscheidet sich von der Abfrage `@container style(max-width: 100vw)`, die eine Stilabfrage ist; wenn sie unterstützt wird, gibt diese Abfrage `true` zurück, wenn der Container einen {{cssxref("max-width")}}-Wert von `100vw` hat.

Solange Stilabfragen für reguläre CSS-Deklarationen und -Eigenschaften nicht unterstützt werden, sind wir darauf beschränkt, nur benutzerdefinierte Eigenschaften als `style()`-Parameter einzuschließen, mit oder ohne Wert:

```css
@container style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple) {
  /* <stylesheet> */
}
```

Einige Dinge, die bereits erwähnt wurden, aber wichtig sind, um sie zu erinnern:

- Alle Elemente können Stilabfragecontainer sein; das Setzen eines `container-type` ist nicht erforderlich. Wenn Nachkommenstile die berechneten Stile eines Vorfahren nicht beeinflussen, ist Eindämmung nicht notwendig.
- Eine `<container-condition>` kann sowohl Stil- als auch Größenmerkmale enthalten. Wenn Sie Größenmerkmale in Ihre Abfrage aufnehmen, stellen Sie sicher, dass Ihre Containerelemente ein `container-type` von `size` oder `inline-size` gesetzt haben.
- Wenn Sie nicht möchten, dass ein Element jemals als Container betrachtet wird, geben Sie ihm einen `container-name`, der nicht verwendet wird. Das Setzen von `container-name: none` entfernt alle Abfragenamen, die einem Container zugeordnet sind; es verhindert nicht, dass das Element ein Stilkcontainer wird.
- Zum Zeitpunkt dieses Schreibens (Februar 2024) funktionieren Containerstil-Abfragen nur mit CSS-Benutzereigenschaftswerten in der `style()`-Abfrage.

Nun, lassen Sie uns einen näheren Blick auf die verschiedenen `<style-feature>`-Typen werfen.

### Stilabfragen für benutzerdefinierte Eigenschaften

Stilabfragen für benutzerdefinierte Eigenschaften ermöglichen es Ihnen, die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), auch "CSS-Variablen" genannt, eines übergeordneten Elements abzufragen. Diese sind in einem `<style-query>` enthalten, genau wie eine reguläre CSS-Eigenschaft innerhalb einer Funktionsabfrage: entweder mit oder ohne Wert.

#### Standalone-Abfragen benutzerdefinierter Eigenschaften

Der `<style-query>`-Parameter der `style()`-Funktionsnotation kann nur einen CSS-Variablennamen enthalten; eine benutzerdefinierte Eigenschaft ohne Wert. Wenn kein Wert enthalten ist, gibt die Abfrage `false` zurück, wenn der Wert derselbe ist wie der Wert des `initial-value`-Descriptors innerhalb der `@property`-Regel, falls vorhanden. Die Stilabfrage wird `true` zurückgeben und mit allen Elementen übereinstimmen, die einen benutzerdefinierten Eigenschaftswert haben, der vom `initial-value` abweicht oder für alle Elemente, die eine benutzerdefinierte Eigenschaft mit einem beliebigen Wert haben, wenn die benutzerdefinierte Eigenschaft deklariert wurde, ohne registriert zu sein.

##### Nicht registrierte benutzerdefinierte Eigenschaften

Wenn CSS-Variablen über eine CSS-Benutzereigenschaftswertzuweisung eingeführt werden, geben wertlose benutzerdefinierte Eigenschaftsabfragen immer `true` zurück.

```css
:root {
  --theme-color: rebeccapurple;
}

@container style(--theme-color) {
  /* <stylesheet> */
}
```

In diesem Beispiel stimmt die Containerabfrage mit dem Element überein, auf dem die Eigenschaft `--theme-color` deklariert wurde, und mit allen seinen Nachkommen. Da die CSS-Variable `--theme-color` auf der {{cssxref(":root")}} deklariert wurde, wird die Stilabfrage `style(--theme-color)` für jedes Element innerhalb dieses {{Glossary("DOM", "DOM")}}-Nodes wahr sein.

##### Registrierte Eigenschaften

Das Verhalten registrierter benutzerdefinierter Eigenschaften ist anders. Wenn sie explizit mit der {{cssxref("@property")}}-CSS-Regel oder via JavaScript mit [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) definiert werden, gibt die Stilabfrage `style(--theme-color)` nur `true` zurück, wenn der berechnete Wert für `--theme-color` des Elements vom [`initial-value`](/de/docs/Web/CSS/@property/initial-value), das in der ursprünglichen Definition dieser benutzerdefinierten Eigenschaft festgelegt wurde, abweicht.

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

In diesem Beispiel stimmt das `:root`-Element NICHT mit der Stilabfrage überein, da der Wert der benutzerdefinierten Eigenschaft derselbe ist wie der `initial-value`-Wert. Der benutzerdefinierte Eigenschaftswert für das Element (und alle Elemente, die den Wert erben) bleibt `rebeccapurple`. Nur Elemente, die sich vom Anfangswert unterscheiden, in diesem Fall das {{htmlelement("main")}} und seine Nachkommen, die jenen geänderten Wert erben, passen.

#### Benutzerdefinierte Eigenschaft mit einem Wert

Wenn eine Stilabfrage einen Wert für die benutzerdefinierte Eigenschaft enthält, muss der berechnete Wert des Elements für diese Eigenschaft genau übereinstimmen, wobei äquivalente Werte nur dann übereinstimmen, wenn die benutzerdefinierte Eigenschaft mit einer {{cssxref("@property")}}-Regel (oder einem Aufruf der Methode [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)) definiert wurde, die einen `syntax`-Descriptor enthält.

```css
@container style(--accent-color: blue) {
  /* <stylesheet> */
}
```

Diese Containerstil-Abfrage stimmt mit jedem Element überein, das `blue` als [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der benutzerdefinierten Eigenschaft `--accent-color` hat.

In diesem Fall stimmen andere Farbwerte, die dem sRGB-`blue` äquivalent sind (wie zum Beispiel der Hexadezimalcode `#0000ff`), nur überein, wenn die `--accent-color`-Eigenschaft als Farbe mit `@property` oder `CSS.registerProperty()` definiert wurde, zum Beispiel:

```css
@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #00f;
}
```

In diesem Fall, wenn der Wert von `--accent-color` auf `blue`, `#00f`, `#0000ff`, `rgb(0 0 255 / 1)` oder `rgb(0% 0% 100%)` gesetzt wird, würde er für `@container style(--accent-color: blue)` `true` zurückgeben.

##### Beispiel

In diesem Beispiel haben wir ein {{htmlelement("fieldset")}} mit vier Optionsfeldern. Die vierte Option enthält ein Text-{{htmlelement("input")}} zum Eingeben einer benutzerdefinierten Farbe.

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

JavaScript aktualisiert den Wert der CSS-`--theme`-Variable auf dem {{htmlelement("body")}}-Element, das ein Vorfahre der {{htmlelement("fieldset")}}- und {{htmlelement("output")}}-Elemente ist, wann immer ein Optionsfeld ausgewählt wird. Wenn das textbasierte `<input>` aktualisiert wird, wird der [`value`](/de/docs/Web/API/HTMLInputElement/value) des `anderen` Optionsfelds nur dann aktualisiert, wenn das `other` Optionsfeld aktiviert ist, was wiederum den Wert von `--theme` aktualisiert.

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

Wir verwenden die `@property`-Regel, um eine CSS-Variable `--theme` als {{cssxref("color_value", "&lt;color&gt;")}}-Wert zu definieren und den `initial-value` auf `#00F` zu setzen, damit äquivalente Farben unabhängig von der verwendeten Syntax übereinstimmen (zum Beispiel ist `#F00` gleich `rgb(255 0 0)`, `#ff0000` und `red`).

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

Die erste Stilmerkmalsabfrage ist eine benutzerdefinierte Eigenschaft ohne Wert. Dieser Abfragetyp gibt `true` zurück, wenn der berechnete Wert für den benutzerdefinierten Eigenschaftswert vom `initial-value` für diese Eigenschaft abweicht. In diesem Fall wird es wahr sein, wenn der Wert von `--theme` ein anderer Wert als ein äquivalenter Syntaxwert von `#f00` (wie `red`) ist. Wenn es wahr ist, wird das {{htmlelement("output")}} einen 5px gepunkteten Umriss haben. Die Outline-Farbe ist der aktuelle Wert von `--theme`. Die Standardtextfarbe ist grau.

```css
@container style(--theme) {
  output {
    outline: 5px dotted var(--theme);
    color: #777;
  }
}
```

Die zweite und dritte Stilmerkmalsabfragen enthalten Werte für die benutzerdefinierte Eigenschaft. Diese stimmen dann überein, wenn der `--theme`-Wert des Containers eine äquivalente Farbe zum angegebenen Wert ist, auch wenn dieser Wert der gleiche ist wie der Initialwert. Die erste Abfrage stimmt mit Elementen überein, deren `--theme`-Wert äquivalent zu `red`, `blue` oder `green` ist. Wenn das der Fall ist, wird die {{cssxref("color")}} die Farbe des aktuellen Wertes von `--theme` sein (im Fall von `blue` und `green`, übergreifend die graue Farbe, die in der ersten Stilabfrage gesetzt wurde).

Die zweite Stilabfrage besagt, dass, wenn `--theme` äquivalent zu `red` ist, der Inhalt des `<output>` auch fett sein wird. Wir haben dies getan, um besser zu demonstrieren, dass die Containerabfrage ein Treffer ist.

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

Versuchen Sie, verschiedene Farbwerte in das Textfeld einzugeben. Ihnen fällt vielleicht auf, dass Werte, die sRGB-Äquivalente von `red` sind, das `<output>`-Element rot machen — da es mit `style(--theme: red)` übereinstimmt — und den Umriss entfernen, weil `style(--theme)` `false` zurückgibt, wenn der Wert des Elements für `--theme` derselbe ist wie der Anfangswert für `--theme`, der durch die `@property`-Regel definiert wurde. Jeder nicht-rote gültige sRGB-Farbwert, einschließlich `currentcolor` oder `hsl(180 100% 50%)` usw., führt die erste Stilabfrage zu `true`; sie sind Werte, die sich vom `initial-value` unterscheiden.

Da wir `syntax: "<color>";` gesetzt haben, kann der CSS-Variable nur gültige `<color>`-Werte zugewiesen werden. Gültige Werte für die {{cssxref("color")}}-Eigenschaft, die keine gültigen `<color>`-Werte sind, wie `unset` oder `inherit`, sind für diese benutzerdefinierte Eigenschaft [ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling) und werden ignoriert.

Wenn Sie `unset` oder `gibberish` eingeben, aktualisiert das JavaScript den `style` auf dem {{HTMLElement("body")}} zu `--theme: unset` oder `--theme: gibberish`. Keines davon sind Farben. Beide sind ungültig und werden ignoriert. Dies bedeutet, dass der Anfangswert geerbt und unverändert bleibt, `style(--theme)` `false` zurückgibt und `style(--theme: red)` `true`.

> [!NOTE]
> Erwägen Sie beim Deklarieren benutzerdefinierter Eigenschaften die Verwendung von `@property` mit dem {{cssxref("@property/syntax","syntax")}}-Descriptor, damit der Browser berechnete Werte richtig vergleichen kann.

### Verschachtelte Abfragen

Containerabfragen können innerhalb anderer Containerabfragen verschachtelt werden. Die im Inneren mehrerer verschachtelter Containerabfragen definierten Stile werden angewendet, wenn alle umgebenden Containerabfragen wahr sind.

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

In diesem Fall wird das `<output>` einen 5px gepunkteten Rahmen haben, wenn es in einem Container verschachtelt ist, in dem `--theme: purple` gesetzt ist, und dieser Container innerhalb eines Containers verschachtelt ist, dessen `--theme`-Wert `red` ist.

### Stilabfragen für CSS-Deklarationen und -Eigenschaften

Noch in keinem Browser unterstützt, kann die `style()`-Funktionsnotation reguläre CSS-Deklarationen einschließlich CSS-Eigenschaften und Eigenschaftswertpaaren enthalten.

```css
@container style(font-weight: bold) {
  b,
  strong {
    background: yellow;
  }
}
```

Wenn unterstützt, wird dieses grundlegende Beispiel die Hintergrundfarbe von {{htmlelement("b")}}- und {{htmlelement("strong")}}-Elementen gelb machen, wenn der Elternteil bereits `bold` ist.

Das Matching erfolgt gegen den berechneten Wert des übergeordneten Containers; wenn der berechnete {{cssxref("font-weight")}} des Elternteils `bold` (nicht `bolder` oder `900`) ist, gibt es ein Match. Genau wie bei benutzerdefinierten Eigenschafts-Containerstilabfragen mussten wir keine Elemente als Stilcontainer definieren, da alle Elemente standardmäßig Stilcontainer sind. Solange ein Element keinen `container-name` gesetzt hat, wird es, wenn es `font-weight: bold` gesetzt oder geerbt hat, übereinstimmen.

Stilmerkmale, die eine Kurzschreibweiseigenschaft abfragen, sind dann wahr, wenn die berechneten Werte jedes ihrer Langform-Eigenschaften übereinstimmen, und anders falsch. Zum Beispiel wird `@container style({{cssxref("border")}}: 2px solid red)` wahr, wenn alle 12 Langform-Eigenschaften ({{cssxref("border-bottom-style")}}, usw.), aus denen diese Kurzform besteht, auf dieselben äquivalenten Werte gesetzt sind.

Die globalen CSS-Werte `revert` und `revert-layer` sind als Werte in einem `<style-feature>` ungültig und führen dazu, dass die Containerstilabfrage falsch ist.

Tragen Sie die Stile, die Sie in der Stilabfrage auf das Element abfragen, nicht auf das Element an, das Sie mit dieser Abfrage gestalten, da dies zu einer Endlosschleife führen kann.

Es wird erwartet, dass Stilabfragen auch Eigenschaften in einem booleschen Kontext akzeptieren werden. Die Stilabfrage wird `false` zurückgeben, wenn der Wert der Eigenschaft der Anfangswert für diese Eigenschaft ist (wenn er nicht geändert wurde), und andernfalls `true`.

```css
@container style(font-weight) {
}
```

Das obige Beispiel wird `true` für jedes Element zurückgeben, das einen `font-weight`-Wert hat, der von seinem Anfangswert abweicht. Benutzeragenten-Stylesheets setzen `font-weight: bold` für {{htmlelement("heading_elements", "heading")}}- und {{htmlelement("th")}}-Elemente zum Beispiel. Einige Browser setzen {{htmlelement("strong")}} und {{htmlelement("b")}} auf `bold`, andere auf `bolder`. {{htmlelement("optgroup")}} haben ebenfalls manchmal einen `font-weight`, der nicht `normal` ist und von dem Benutzeragenten gesetzt wird. Solange der `font-weight`-Wert des Elements nicht der Standardwert für jenen Benutzeragenten ist, gibt die Stilabfrage `true` zurück.

Diese Funktionen werden derzeit in keinem Browser unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}}-Regel
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container")}}-Kurzschrift
- CSS {{Cssxref("container-name")}}-Eigenschaft
- [Verwendung von Container-Scrollstatus-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Verständnis von `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Einführung in Stilabfragen](https://developer.chrome.com/docs/css-ui/style-queries) (2022)
- [Style queries](https://una.im/style-queries/) via una.im (2022)
