---
title: Verarbeitung von CSS-Werteigenschaften
short-title: Verarbeitung von Eigenschaftenwerten
slug: Web/CSS/Guides/Cascade/Property_value_processing
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Für jedes Element in einem Dokumentenbaum weist der Browser jeder CSS-Eigenschaft, die auf dieses Element zutrifft, einen Wert zu. Der dargestellte Wert jeder CSS-Eigenschaft für ein gegebenes Element oder eine Box ist das Ergebnis einer Berechnung basierend auf Stylesheet-Definitionen, Vererbung, dem [Cascade](/de/docs/Web/CSS/Guides/Cascade/Introduction), Abhängigkeiten, Umrechnungseinheiten und der Anzeigeumgebung. Dieser Leitfaden bietet einen Überblick über die Verarbeitungsschritte, die angewendet werden, um zu definieren, wie jeder CSS-Wert letztendlich gerendert wird. Dabei werden Schlüsselkonzepte wie spezifizierte, berechnete, verwendete und tatsächliche Werte erkundet.

## Eigenschaftswerte

Jeder Stil, der auf ein Element oder Pseudo-Element angewendet wird, basiert auf einer einzigen CSS-Eigenschaftsdeklaration. Jede CSS-Eigenschaft hat nur einen Wert. Der angewendete Wert wird durch die [kaskadierenden Werte](#kaskadierter_wert) aller Deklarationen dieser Eigenschaft bestimmt, die auf das Element oder Pseudo-Element angewendet werden, wobei der einzige angewendete Wert aus der Eigenschaftsdeklaration stammt, die in der [Kaskadensortierreihenfolge](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order) anhand des [Kaskadenalgorithmus](/de/docs/Web/CSS/Guides/Cascade/Introduction) den höchsten Rang hat.

Wenn es mehrere [angegebene Werte](#angegebener_wert) gibt, bei denen mehrere Deklarationen dieselben oder verschiedene Eigenschaftswerte für dasselbe Element bereitstellen, muss jeder Eigenschaftswert dennoch aus einem einzigen Eigenschaftsname-Wert-Paar stammen, da von jeder Eigenschaft nur ein einzelner Wert angewendet wird, selbst wenn der Wert eine durch Kommas getrennte Liste von Werten ist.

Um zu bestimmen, welcher [angegebene Wert](#angegebener_wert) angewendet wird, sammelt und verarbeitet der Benutzeragent alle Stile aus verschiedenen Quellen, wie Inline-Stile sowie interne und externe Stylesheets.

Das [Cascade](/de/docs/Web/CSS/Guides/Cascade/Introduction) bestimmt, welcher Wert angewendet werden soll, wenn mehrere widersprüchliche Stile dasselbe Element ansprechen. Der [Kaskadenalgorithmus](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order) definiert, wie Benutzeragenten Eigenschaftswerte kombinieren, die aus verschiedenen Quellen, Bereichen und/oder [Ebenen](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascade_layers) stammen. Wenn ein Selektor mit einem Element übereinstimmt, wird der [angegebene Wert](#angegebener_wert) der Eigenschaft aus dem [Ursprung](/de/docs/Web/CSS/Guides/Cascade/Introduction#origin_types) mit der höchsten Priorität angewendet, selbst wenn ein Selektor aus einem Ursprung mit niedrigerer Priorität oder [Ebenen](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascade_layers) eine höhere {{cssxref("Spezifität")}} hat.

Bestimmte Eigenschaften erben Werte von ihren übergeordneten Elementen, es sei denn, sie werden ausdrücklich überschrieben. [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance) kann auftreten, wenn keine Stilinformationen für eine bestimmte Eigenschaft eines Elements vorhanden sind. Wenn die Eigenschaft vererbt wird, wird der Wert auf den [berechneten Wert](#berechneter_wert) des Elternelements gesetzt. Wenn die Eigenschaft nicht vererbt wird, wird ihr Wert auf den [anfänglichen Wert](#anfangswert) für dieses Element gesetzt.

Nach der Anwendung der [kaskadierenden](#kaskadieren) Regeln und der schrittweisen Standardisierung der Werte stellt der Browser sicher, dass die visuelle Darstellung den verarbeiteten CSS entspricht.

## Verarbeitungsübersicht

Bevor Sie sich in die einzelnen Wertstufen vertiefen, ist es wichtig, die drei Hauptphasen zu verstehen, die bei der Wertverarbeitung auftreten: [Filtern](#filtern), [Kaskadieren](#kaskadieren) und [Standardisieren](#standardisieren).

### Filtern

**Filtern** ist der Prozess, bei dem alle Deklarationen identifiziert werden, die auf jedes Element zutreffen. Eine Deklaration gilt nur dann für ein Element, wenn:

- Die Deklaration zu einem Stylesheet gehört, das derzeit auf dieses Dokument angewendet wird
- Alle [Bedingungsregeln](/de/docs/Web/CSS/Guides/Conditional_rules) (wie {{cssxref("@media")}} oder {{cssxref("@supports")}}), die die Deklaration enthalten, derzeit wahr sind.
- Die Deklaration zu einer Stilregel gehört, deren Selektor mit dem Element übereinstimmt
- Die Deklaration syntaktisch gültig ist: der Eigenschaftsname wird vom Browser erkannt und der Wert entspricht der erwarteten Syntax für diese Eigenschaft

Nur gültige Deklarationen werden zu angegebenen Werten. Deklarationen mit ungültigen Eigenschaftsnamen oder ungültigen Werten werden gemäß den [CSS-Fehlerbehandlungsregeln](/de/docs/Web/CSS/Guides/Syntax/Error_handling) herausgefiltert.

In diesem Beispiel werden nur die {{cssxref("font-size")}}- und {{cssxref("font-weight")}}-Deklarationen verarbeitet. Der [CSS-Parser filtert Fehler](/de/docs/Web/CSS/Guides/Syntax/Error_handling#css_parser_errors) heraus, indem er die Deklaration mit dem ungültigen Eigenschaftsnamen ignoriert oder herausfiltert:

```css
p {
  font-size: 1.25em;
  colr: blue;
  font-weight: bold;
}
```

Nach Abschluss des Filterprozesses hat jedes Element null oder mehr [angegebene Werte](#angegebener_wert) für jede CSS-Eigenschaft. Diese angegebenen Werte sind der Ausgangspunkt für den [Kaskaden](#kaskadieren) Verarbeitungsprozess.

### Kaskadieren

[Cascade](/de/docs/Web/CSS/Guides/Cascade/Introduction) löst Konflikte, wenn mehrere Deklarationen auf dieselbe Eigenschaft auf demselben Element angewendet werden. Die Cascade sortiert Deklarationen mithilfe des [Kaskaden-Sortieralgorithmus](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order).

Zum Beispiel stimmen beide {{cssxref("font-size")}}-Deklarationen mit `<p class="large">CSS is fun!</p>` überein, aber die zweite Deklaration wird angewendet, da sie eine höhere {{cssxref("Spezifität")}} hat. Beide Deklarationen haben einen Autorenursprung, aber der zweite Selektor hat die Spezifität `0-1-1`, während der erste `0-0-1` hat:

```css
p {
  font-size: 1em;
}

p.large {
  font-size: 1.5em;
}
```

Nach der Kaskadierung bestimmt der Browser den [**kaskadierten Wert**](#kaskadierter_wert) für jede Eigenschaft auf jedem Element. Dies ist der Wert, der im nächsten Verarbeitungsstadium verwendet wird; [Standardisieren](#standardisieren).

### Standardisieren

**Standardisieren** stellt sicher, dass jede Eigenschaft auf jedem Element einen Wert hat. Dies beinhaltet das Anwenden von Standardwerteigenschaften, wenn keine CSS-Deklarationen explizit diesen Eigenschaftswert festlegen.
Dies umfasst:

- Festlegen von **geerbten Werten** für [vererbte Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties)
- Festlegen von **anfänglichen Werten** für [nicht-vererbte Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#non-inherited_properties)

Als Ergebnis der Standardisierung hat jede Eigenschaft garantiert einen [spezifizierten Wert](#spezifizierter_wert).

Beachten Sie, dass explizite Standardisierungsschlüsselwörter ([`initial`](/de/docs/Web/CSS/Reference/Values/initial), [`inherit`](/de/docs/Web/CSS/Reference/Values/inherit), [`unset`](/de/docs/Web/CSS/Reference/Values/unset), [`revert`](/de/docs/Web/CSS/Reference/Values/revert), [`revert-layer`](/de/docs/Web/CSS/Reference/Values/revert-layer)) ebenfalls auf ihre entsprechenden Werte aufgelöst werden, um den [spezifizierten Wert](#spezifizierter_wert) zu bestimmen.

## Verarbeitungsstadien

Alle Elemente, die Teil des flachen Elementbaums des Dokuments sind, haben [angegebene](#angegebener_wert), [kaskadierte](#kaskadierter_wert), [spezifizierte](#spezifizierter_wert), [berechnete](#berechneter_wert), [verwendete](#verwendeter_wert) und [tatsächliche](#tatsächlicher_wert) Werte. Für eine bestimmte Eigenschaft können diese Werte gleich oder unterschiedlich sein. Zum Beispiel, wenn Ihr großer Codebestand das CSS `p { font-size: 1.25em; }` enthält und Ihr HTML `<p class="large">CSS is fun!</p>`, welche Größe wird der Absatz haben? Der {{cssxref("Schriftgrößenwert")}} durchläuft einige Stufen, um vom `em` spezifizierten Wert zum gerenderten `px`-Wert zu gelangen.

Die Wertverarbeitungsstadien sind:

- [Angegebener Wert](#angegebener_wert)
- [Kaskadierter Wert](#kaskadierter_wert)
- [Spezifizierter Wert](#spezifizierter_wert)
- [Berechneter Wert](#berechneter_wert)
- [Verwendeter Wert](#verwendeter_wert)
- [Tatsächlicher Wert](#tatsächlicher_wert)

Diese Werte werden verwendet, um den endgültigen [gerenderten Wert](#gerenderte_werte) zu bestimmen.

### Angegebener Wert

Ein **angegebener Wert** ist jeder syntaktisch gültige Wert aus einer Deklaration, die auf ein Element zutrifft. Ein Element kann null oder mehr angegebene Werte für jede Eigenschaft haben. Diese Werte stammen aus Stylesheets (Autor-, Benutzer- oder Benutzeragent) und werden während der [Filterung](#filtern) identifiziert.

In unserem Beispiel, in dem unser Stylesheet eine Vorkommen von `p { font-size: 1.25em; }` beinhaltet und das Dokument, das mit diesem Stylesheet verlinkt ist, `<p class="large">CSS is fun!</p>` enthält, könnte es andere `font-size` Deklarationen geben, die potenziell auf denselben Absatz angewendet werden könnten. Das Benutzeragent-Stylesheet könnte `font-size: 1em` für alle Absätze festlegen, während eine andere Autoren-Deklaration `font-size: 2em` für Elemente mit der Klasse „large“ festlegt:

```css
/* User agent styles */
p {
  font-size: 1em;
}

/* author styles */
p {
  font-size: 1.25em;
}

.large {
  font-size: 2em;
}
```

Es könnte viele andere `font-size` Deklarationen in unseren Stylesheets geben, aber nur Deklarationen, deren Selektoren mit dem Element übereinstimmen, werden zu angegebenen Werten. In diesem Beispiel, da unser `<p>` Element `class="large"` hat, sind alle drei Deklarationen angegebene Werte für dieses Element.

### Kaskadierter Wert

Der **kaskadierte Wert** ist der angegebene Wert, der die [Kaskade](#kaskadieren) gewinnt. Es gibt höchstens einen kaskadierten Wert pro Eigenschaft und Element.

Von unseren angegebenen Werten gewinnen Autoren-Stile gegenüber Benutzeragent-Stilen. Innerhalb desselben Ursprungs gewinnen Stile mit höherer Spezifität gegenüber Stilen mit niedrigerer Spezifität. In diesem Fall wäre der kaskadierte Wert `font-size: 2em`, aus dem Autorenursprung mit Spezifität `0-1-1`:

```css
font-size: 2em;
```

Wenn es keine angegebenen Werte für eine Eigenschaft gibt, gibt es keinen kaskadierten Wert, was bedeutet, dass der [spezifizierte Wert](#spezifizierter_wert) für diese Eigenschaft durch den [Standardisierungsprozess](#standardisieren) bestimmt wird.

### Spezifizierter Wert

Der **spezifizierte Wert** ist das Ergebnis des [Standardisierungsprozesses](#standardisieren). Er ist für jede Eigenschaft auf jedem Element garantiert vorhanden. Der spezifizierte Wert wird wie folgt bestimmt:

1. Wenn es einen [kaskadierten Wert](#kaskadierter_wert) gibt, ist der kaskadierte Wert der spezifizierte Wert.
2. Wenn es _keinen_ kaskadierten Wert gibt und die Eigenschaft [vererbt wird](/de/docs/Web/CSS/Guides/Cascade/Inheritance), ist der spezifizierte Wert der [berechnete Wert](#berechneter_wert) des Elternelements.
3. Wenn es _keinen_ kaskadierten Wert gibt und die Eigenschaft _nicht_ vererbt wird, ist der spezifizierte Wert der [anfängliche Wert](#anfangswert) der Eigenschaft.

In unserem Beispiel, da wir einen [kaskadierten Wert](#kaskadierter_wert) von `2em` haben, wird dieser zum spezifizierten Wert:

```css
font-size: 2em;
```

Für Eigenschaften ohne kaskadierte Werte bestimmt der Standardisierungsprozess den Wert. Zum Beispiel, wenn `color` nicht spezifiziert ist, wird die `color` vom berechneten Wert des Elternteils geerbt, da es sich um eine vererbte Eigenschaft handelt. Wenn `margin` nicht spezifiziert ist, wird der `initial` Wert von `0` verwendet, da `margin` keine [vererbte Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties) ist:

```css
color: inherit;
margin: 0;
```

#### Anfangswert

Der **anfängliche Wert** einer Eigenschaft ist der Standardwert, der in ihrer Definitionstabelle in der Spezifikation aufgeführt ist. Der Anfangswert wird während der Standardisierung verwendet, wenn:

- Für [vererbte Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties) wird der Anfangswert nur beim _Root-Element_ verwendet, das kein übergeordnetes Element hat, wenn kein kaskadierter Wert existiert.
- Für [nicht-vererbte Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#non-inherited_properties) wird der Anfangswert bei _allen Elementen_ verwendet, wenn kein kaskadierter Wert existiert.

Sie können den Anfangswert explizit setzen, indem Sie das {{cssxref("initial")}} Schlüsselwort verwenden.

> [!NOTE]
> Der Anfangswert kann im Abschnitt „Formale Syntax“ jeder CSS-Eigenschaftsreferenzseite gefunden werden. Zum Beispiel ist der [Anfangswert von `font-size` `medium`](/de/docs/Web/CSS/Reference/Properties/font-size#formal_definition). Der Anfangswert sollte nicht mit dem Wert verwechselt werden, der im Stylesheet des Browsers angegeben ist.

### Berechneter Wert

Der **berechnete Wert** einer Eigenschaft ist der Wert, der von Eltern zu Kind während der Vererbung übertragen wird. Es ist das Ergebnis, nachdem Dinge wie relative Einheiten und benutzerdefinierte Eigenschaften in absolute Werte aufgelöst wurden, aber bevor layout-spezifische Informationen berücksichtigt werden.

Der berechnete Wert wird aus dem [spezifizierten Wert](#spezifizierter_wert) berechnet durch:

1. Handhaben der speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, und {{cssxref("unset")}}.
2. Durchführen der Berechnung, die erforderlich ist, um den in der Eigenschaftsdefinitionstabelle beschriebenen „berechneten Wert“ zu erreichen.

Die Berechnung, die erforderlich ist, um den berechneten Wert einer Eigenschaft zu erreichen, beinhaltet typischerweise die Umwandlung relativer Werte (wie solche in `em`-Einheiten oder Prozentsätzen) in absolute Werte. Zum Beispiel, wenn ein Element spezifizierte Werte `font-size: 16px` und `padding-top: 2em` hat, dann ist der berechnete Wert von `padding-top` `32px` (doppelt so groß wie die Schriftgröße).

Jedoch, für einige Eigenschaften (diejenigen, bei denen Prozentsätze relativ zu etwas sind, das Layout zur Bestimmung erfordert, wie `width`, `margin-right`, `text-indent` und `top`), werden Prozentangaben als berechnete Werte in Prozentsätze umgewandelt. Außerdem werden einheitslose Zahlen, die für die `line-height`-Eigenschaft angegeben werden, der berechnete Wert, wie spezifiziert. Die relativen Werte, die im berechneten Wert verbleiben, werden absolut, wenn der [verwendete Wert](#verwendeter_wert) bestimmt wird.

### Verwendeter Wert

Der **verwendete Wert** ist der Wert der Eigenschaft, nachdem alle Berechnungen am [berechneten Wert](#berechneter_wert) durchgeführt wurden und er mit layout-spezifischen Details (z. B. Prozentsätze, die auf tatsächliche Pixelwerte aufgelöst werden) verfeinert wurde.

Jede CSS-Eigenschaft hat einen verwendeten Wert. Die verwendeten Werte von Dimensionen (z. B. {{cssxref("width")}} oder {{cssxref("line-height")}}) sind in Pixeln. Die verwendeten Werte von Shorthand-Eigenschaften (z. B. {{cssxref("background")}}) stimmen mit denen ihrer Komponenten-Eigenschaften (z. B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}) und mit {{cssxref("position")}} und {{cssxref("float")}} überein.

Der verwendete Wert für die {{cssxref("width")}} oder {{cssxref("inline-size")}} eines Elements ist ein Pixelwert, selbst wenn der spezifizierte Wert der Eigenschaft mit Prozentsätzen oder Schlüsselwörtern festgelegt wurde.

Wenn wir drei Containerelemente mit ihrer Breite auf `auto`, `50%` und `inherit` gesetzt haben:

```html hidden
<div id="no-width">
  <p>No explicit width.</p>
  <p class="show-used-width">..</p>

  <div id="width-50">
    <p>Explicit width: 50%.</p>
    <p class="show-used-width">..</p>

    <div id="width-inherit">
      <p>Explicit width: inherit.</p>
      <p class="show-used-width">..</p>
    </div>
  </div>
</div>
```

```css
#no-width {
  width: auto;
}

#width-50 {
  width: 50%;
}

#width-inherit {
  width: inherit;
}

/* Make results easier to see */
div {
  border: 1px solid red;
  padding: 8px;
}
```

```js hidden
function updateUsedWidth(id) {
  const div = document.getElementById(id);
  const par = div.querySelector(".show-used-width");
  const wid = window.getComputedStyle(div)["width"];
  par.textContent = `Used width: ${wid}.`;
}

function updateAllUsedWidths() {
  updateUsedWidth("no-width");
  updateUsedWidth("width-50");
  updateUsedWidth("width-inherit");
}

updateAllUsedWidths();
window.addEventListener("resize", updateAllUsedWidths);
```

Während die drei spezifizierten Werte, `auto`, `50%` und `inherit`, Schlüsselwort- und {{cssxref("Prozentsatz")}}-Werte sind, gibt das Abrufen der `width` mit `window.getComputedStyle(el)["width"];` einen [absoluten Längenwert](/de/docs/Web/CSS/Reference/Values/length#absolute_length_units) in `px` zurück:

{{EmbedLiveSample('Example', '80%', 372)}}

Ändern Sie die Fenstergröße oder drehen Sie Ihr Mobilgerät, um die Größe und die verwendeten Werte zu ändern.

## Gerenderte Werte

Der gerenderte Wert wird als [tatsächlicher Wert](#tatsächlicher_wert) bezeichnet, während der über ein Skript abgerufene Wert der [aufgelöste Wert](#resolved_value) genannt wird.

### Tatsächlicher Wert

Der **tatsächliche Wert** einer Eigenschaft ist der [verwendete Wert](#verwendeter_wert) dieser Eigenschaft, nachdem alle notwendigen Näherungen angewendet wurden. Es ist der endgültige gerenderte Wert, wie er vom Browser implementiert wird, einschließlich Anpassungen für Renderingprobleme oder -einschränkungen. Zum Beispiel könnte ein [Benutzeragent](/de/docs/Glossary/User_agent), der nur Rahmen mit ganzzahliger Pixelbreite rendern kann, die Dicke des Rahmens auf die nächste ganze Zahl runden.

Die Berechnung umfasst diese Schritte:

1. Zunächst wird der [spezifizierte Wert](#spezifizierter_wert) basierend auf dem Ergebnis der [Kaskadierung](/de/docs/We
