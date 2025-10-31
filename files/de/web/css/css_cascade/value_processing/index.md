---
title: Verarbeitung von CSS-Eigenschaftswerten
short-title: Verarbeitung von Eigenschaftswerten
slug: Web/CSS/CSS_cascade/Value_processing
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Für jedes Element in einem Dokumentbaum weist der Browser jedem CSS-Eigenschaftswert, der auf dieses Element zutrifft, einen Wert zu. Der gerenderte Wert jeder CSS-Eigenschaft für ein bestimmtes Element oder Box ist das Ergebnis einer Berechnung basierend auf den Stylesheet-Definitionen, Vererbung, dem [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade), Abhängigkeiten, Einheitsumrechnung und der Anzeigumgebung. Dieser Leitfaden bietet einen Überblick über die Verarbeitungsstufen, die angewendet werden, um zu definieren, wie jeder CSS-Wert letztendlich gerendert wird, indem Schlüsselkonzepte wie spezifizierte, berechnete, verwendete und tatsächliche Werte untersucht werden.

## Eigenschaftswerte

Jeder Stil, der auf ein Element oder Pseudoelement angewendet wird, basiert auf einer einzelnen CSS-Eigenschaftsdeklaration. Jede CSS-Eigenschaft hat nur einen Wert. Der angewendete Wert wird durch die [kaskadierten Werte](#kaskadierter_wert) aller Deklarationen dieser Eigenschaft bestimmt, die auf dieses Element oder Pseudoelement angewendet werden. Der einzige angewendete Wert stammt aus der Eigenschaftsdeklaration, die in der [Sortierreihenfolge der Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order) basierend auf dem [Kaskaden-Algorithmus](/de/docs/Web/CSS/CSS_cascade/Cascade) am höchsten eingestuft wird.

Wenn es mehrere [deklarierte Werte](#deklarierter_wert) gibt, bei denen mehrere Deklarationen dieselben oder unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, muss jeder Eigenschaftswert dennoch aus einem einzigen Eigenschaftsnamen-Wert-Paar stammen, da nur ein einziger Wert aus jeder Eigenschaft angewendet wird, selbst wenn der Wert eine durch Kommata getrennte Liste von Werten ist.

Um zu bestimmen, welcher [deklarierte Wert](#deklarierter_wert) angewendet wird, sammelt und verarbeitet der Benutzer-Agent alle Stile aus verschiedenen Quellen, wie Inline-Stile und interne und externe Stylesheets.

Die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) bestimmt, welcher Wert angewendet werden soll, wenn mehrere widersprüchliche Stile auf dasselbe Element abzielen. Der [Kaskaden-Algorithmus](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order) definiert, wie Benutzer-Agenten Eigenschaftswerte aus verschiedenen Quellen, Geltungsbereichen und/oder [Schichten](/de/docs/Web/CSS/CSS_cascade/Cascade#cascade_layers) kombinieren. Wenn ein Selektor mit einem Element übereinstimmt, wird der [deklarierte Wert](#deklarierter_wert) der Eigenschaft aus dem [Ursprung](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types) mit der höchsten Priorität angewendet, selbst wenn ein Selektor aus einem niedrigeren Prioritäts-[Ursprung](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types) oder [Schichten](/de/docs/Web/CSS/CSS_cascade/Cascade#cascade_layers) {{cssxref("specificity")}} höher ist.

Bestimmte Eigenschaften erben Werte von ihren Elternelementen, es sei denn, sie werden ausdrücklich überschrieben. [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) kann auftreten, wenn keine Stilinformationen für eine bestimmte Eigenschaft auf einem Element existieren. Wenn die Eigenschaft vererbt wird, wird der Wert auf den [berechneten Wert](#berechneter_wert) des Elternelements gesetzt. Wenn die Eigenschaft nicht vererbt wird, wird ihr Wert auf den [Anfangswert](#anfangswert) für dieses Element gesetzt.

Nach der Anwendung der [kaskadierenden](#kaskadieren) Regeln und der stufenweisen Festlegung von Standardwerten stellt der Browser sicher, dass die visuelle Darstellung mit den verarbeiteten CSS übereinstimmt.

## Verarbeitungsübersicht

Bevor wir in die einzelnen Wertstufen eintauchen, ist es wichtig, die drei Hauptphasen der Wertverarbeitung zu verstehen: [Filtern](#filtern), [Kaskadieren](#kaskadieren) und [Standardisierung](#standardisierung).

### Filtern

**Filtern** ist der Prozess des Identifizierens aller Deklarationen, die für jedes Element gelten. Eine Deklaration gilt für ein Element nur, wenn:

- Die Deklaration zu einem Stylesheet gehört, das derzeit auf dieses Dokument angewendet wird.
- Alle [bedingten Regeln](/de/docs/Web/CSS/CSS_conditional_rules) (wie {{cssxref("@media")}} oder {{cssxref("@supports")}}), die die Deklaration enthalten, derzeit wahr sind.
- Die Deklaration zu einer Stilregel gehört, deren Selektor auf das Element zutrifft.
- Die Deklaration syntaktisch gültig ist: Der Eigenschaftsname wird vom Browser erkannt und der Wert entspricht der erwarteten Syntax für diese Eigenschaft.

Nur gültige Deklarationen werden zu deklarierten Werten. Deklarationen mit ungültigen Eigenschaftsnamen oder ungültigen Werten werden gemäß den [CSS-Fehlerbehandlungsregeln](/de/docs/Web/CSS/CSS_syntax/Error_handling) herausgefiltert.

In diesem Beispiel werden nur die {{cssxref("font-size")}}- und {{cssxref("font-weight")}}-Deklarationen verarbeitet. Der [CSS-Parser filtert Fehler heraus](/de/docs/Web/CSS/CSS_syntax/Error_handling#css_parser_errors) und ignoriert oder "filtert" die Deklaration mit dem ungültigen Eigenschaftsnamen:

```css
p {
  font-size: 1.25em;
  colr: blue;
  font-weight: bold;
}
```

Wenn die Filterung abgeschlossen ist, hat jedes Element null oder mehr [deklarierte Werte](#deklarierter_wert) für jede CSS-Eigenschaft. Diese deklarierten Werte sind der Ausgangspunkt für die [Kaskadierung](#kaskadieren) Verarbeitungsstufe.

### Kaskadieren

[Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) löst Konflikte, wenn mehrere Deklarationen auf dieselbe Eigenschaft auf demselben Element angewendet werden. Kaskade sortiert Deklarationen mit dem [Kaskaden-Sortieralgorithmus](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order).

Zum Beispiel entsprechen beide {{cssxref("font-size")}}-Deklarationen `<p class="large">CSS macht Spaß!</p>`, aber die zweite Deklaration wird angewendet, weil sie höhere {{cssxref("specificity")}} aufweist. Beide Deklarationen haben die Herkunft des Autors, aber der zweite Selektor hat eine Spezifität von `0-1-1`, während der erste `0-0-1` hat:

```css
p {
  font-size: 1em;
}

p.large {
  font-size: 1.5em;
}
```

Nach dem Kaskadieren bestimmt der Browser den [**kaskadierten Wert**](#kaskadierter_wert) für jede Eigenschaft jedes Elements. Dieser Wert wird in der nächsten Verarbeitungsstufe verwendet: [Standardisierung](#standardisierung).

### Standardisierung

**Standardisierung** stellt sicher, dass jede Eigenschaft jedes Elements einen Wert hat. Dies beinhaltet die Anwendung von Standardwerten für Eigenschaften, wenn keine CSS-Deklarationen diesen Eigenschaftswert explizit festgelegt haben.
Dies beinhaltet:

- Festlegen von **geerbten Werten** für [geerbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties)
- Festlegen von **Anfangswerten** für [nicht geerbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties)

Durch die Standardisierung ist gewährleistet, dass jede Eigenschaft einen [spezifizierten Wert](#spezifizierter_wert) hat.

Beachten Sie, dass explizite Standardisierungsschlüsselwörter ([`initial`](/de/docs/Web/CSS/initial), [`inherit`](/de/docs/Web/CSS/inherit), [`unset`](/de/docs/Web/CSS/unset), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer)) auch auf ihre entsprechenden Werte aufgelöst werden, um den [spezifizierten Wert](#spezifizierter_wert) zu bestimmen.

## Verarbeitungsstufen

Alle Elemente, die Teil des abgeflachten Elementebaums des Dokuments sind, haben [deklarierte](#deklarierter_wert), [kaskadierte](#kaskadierter_wert), [spezifizierte](#spezifizierter_wert), [berechnete](#berechneter_wert), [verwendete](#verwendeter_wert) und [tatsächliche](#tatsächlicher_wert) Werte. Für eine bestimmte Eigenschaft können diese Werte gleich sein oder nicht. Zum Beispiel, wenn Ihr großer Codebasiert das CSS `p { font-size: 1.25em; }` enthält und Ihr HTML `<p class="large">CSS macht Spaß!</p>` enthält, welche Größe wird der Absatz haben? Der {{cssxref("font-size")}}-Wert durchläuft einige Stufen, um vom `em` spezifizierten Wert zum gerenderten `px` Wert zu gelangen.

Die Wertverarbeitungsstufen sind:

- [Deklarierter Wert](#deklarierter_wert)
- [Kaskadierter Wert](#kaskadierter_wert)
- [Spezifizierter Wert](#spezifizierter_wert)
- [Berechneter Wert](#berechneter_wert)
- [Verwendeter Wert](#verwendeter_wert)
- [Tatsächlicher Wert](#tatsächlicher_wert)

Diese Werte werden verwendet, um den endgültigen [gerenderten Wert](#gerenderte_werte) zu bestimmen.

### Deklarierter Wert

Ein **deklarierter Wert** ist ein syntaktisch gültiger Wert aus einer Deklaration, die auf ein Element angewendet wird. Ein Element kann null oder mehr deklarierte Werte für jede Eigenschaft haben. Diese Werte stammen aus Stylesheets (Autor, Benutzer oder Benutzer-Agent) und werden während der [Filterung](#filtern) identifiziert.

In unserem Beispiel, bei dem unser Stylesheet eine Deklaration `p { font-size: 1.25em; }` enthält und das Dokument, das auf dieses Stylesheet verweist, `<p class="large">CSS macht Spaß!</p>` enthält, könnten andere `font-size`-Deklarationen potenziell auf denselben Absatz angewendet werden. Das stylesheet des Benutzeragents könnte `font-size: 1em` für alle Absätze festlegen, während eine andere Deklaration des Autors `font-size: 2em` für Elemente mit der Klasse "large" festlegt:

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

Es könnten viele andere `font-size`-Deklarationen in unseren Stylesheets vorhanden sein, aber nur Deklarationen, deren Selektoren mit dem Element übereinstimmen, werden zu deklarierten Werten. In diesem Beispiel, da unser `<p>`-Element `class="large"` hat, sind alle drei Deklarationen deklarierte Werte für dieses Element.

### Kaskadierter Wert

Der **kaskadierte Wert** ist der deklarierte Wert, der die [Kaskade](#kaskadieren) gewinnt. Es gibt höchstens einen kaskadierten Wert pro Eigenschaft und Element.

Von unseren deklarierten Werten gewinnen Autorstile gegenüber Benutzer-Agent-Stilen. Innerhalb desselben Ursprungs gewinnen Stile mit höherer Spezifität gegenüber Stilen mit niedrigerer Spezifität. In diesem Fall würde der kaskadierte Wert `font-size: 2em` sein, vom Autorursprung mit Spezifität `0-1-1`:

```css
font-size: 2em;
```

Wenn es keine deklarierten Werte für eine Eigenschaft gibt, gibt es keinen kaskadierten Wert, was bedeutet, dass der [spezifizierte Wert](#spezifizierter_wert) für diese Eigenschaft durch den [Standardisierungsprozess](#standardisierung) bestimmt wird.

### Spezifizierter Wert

Der **spezifizierte Wert** ist das Ergebnis des [Standardisierungsprozesses](#standardisierung). Es ist für jede Eigenschaft jedes Elements garantiert vorhanden. Der spezifizierte Wert wird wie folgt bestimmt:

1. Wenn ein [kaskadierter Wert](#kaskadierter_wert) vorhanden ist, ist dies der spezifizierte Wert.
2. Wenn _kein_ kaskadierter Wert vorhanden ist und die Eigenschaft [vererbt](/de/docs/Web/CSS/CSS_cascade/Inheritance) wird, ist der spezifizierte Wert der [berechnete Wert](#berechneter_wert) des Elternelements.
3. Wenn _kein_ kaskadierter Wert vorhanden ist und die Eigenschaft _nicht_ vererbt wird, ist der spezifizierte Wert der [Anfangswert](#anfangswert) der Eigenschaft.

In unserem Beispiel, da wir einen [kaskadierten Wert](#kaskadierter_wert) von `2em` haben, wird dies der spezifizierte Wert:

```css
font-size: 2em;
```

Für Eigenschaften ohne kaskadierte Werte bestimmt der Standardisierungsprozess den Wert. Wenn zum Beispiel `color` nicht spezifiziert ist, wird die `color` vom berechneten Wert des Elternteils vererbt, da es sich um eine vererbte Eigenschaft handelt. Wenn `margin` nicht spezifiziert ist, wird der `initial` Wert von `0` verwendet da `margin` keine [vererbte Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) ist:

```css
color: inherit;
margin: 0;
```

#### Anfangswert

Der **Anfangswert** einer Eigenschaft ist der Standardwert, wie in der Spezifikation in der Definitionstabelle angegeben. Der Anfangswert wird während der Standardisierung verwendet, wenn:

- Für [vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties), wird der Anfangswert nur am _Wurzelelement_ verwendet, das kein Elternelement hat, wenn kein kaskadierter Wert existiert.
- Für [nicht-vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties), wird der Anfangswert für _alle Elemente_ verwendet, wenn kein kaskadierter Wert existiert.

Sie können den Anfangswert explizit mit dem {{cssxref("initial")}} Schlüsselwort setzen.

> [!NOTE]
> Der Anfangswert kann im Abschnitt "Formale Syntax" auf jeder CSS-Eigenschaftsreferenzseite gefunden werden. Zum Beispiel ist der [Anfangswert von `font-size` `medium`](/de/docs/Web/CSS/Reference/Properties/font-size#formal_definition). Der Anfangswert sollte nicht mit dem vom Stylesheet des Browsers festgelegten Wert verwechselt werden.

### Berechneter Wert

Der **berechnete Wert** einer Eigenschaft ist der Wert, der während der Vererbung von Eltern zu Kind übertragen wird. Es ist das Ergebnis, nachdem Dinge wie relative Einheiten und benutzerdefinierte Eigenschaften in absolute Werte umgewandelt wurden, aber bevor layoutspezifische Informationen berücksichtigt werden.

Der berechnete Wert wird aus dem [spezifizierten Wert](#spezifizierter_wert) berechnet durch:

1. Umgang mit speziellen Werten wie {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, und {{cssxref("unset")}}.
2. Durchführung der Berechnung, die erforderlich ist, um den in der Definitionstabelle der Eigenschaft beschriebenen "Computed value" zu erreichen.

Die Berechnung, die erforderlich ist, um den berechneten Wert einer Eigenschaft zu erreichen, beinhaltet typischerweise die Umwandlung relativer Werte (wie `em`-Einheiten oder Prozentsätzen) in absolute Werte. Wenn ein Element beispielsweise die spezifizierten Werte `font-size: 16px` und `padding-top: 2em` hat, dann ist der berechnete Wert von `padding-top` `32px` (doppelt so groß wie die Schriftgröße).

Für einige Eigenschaften (diejenigen, für die Prozentsätze relativ zu etwas sind, das möglicherweise das Layout erfordert, wie `width`, `margin-right`, `text-indent` und `top`) werden prozentuale spezifizierte Werte in prozentuale berechnete Werte umgewandelt. Zusätzlich werden einheitslose Zahlen, die auf die Eigenschaft `line-height` spezifiziert sind, als berechneter Wert übernommen. Die relativen Werte, die im berechneten Wert verbleiben, werden absolut, wenn der [verwendete Wert](#verwendeter_wert) bestimmt wird.

### Verwendeter Wert

Der **verwendete Wert** ist der Wert der Eigenschaft, nachdem alle Berechnungen am [berechneten Wert](#berechneter_wert) durchgeführt wurden und er mit layoutspezifischen Details verfeinert wurde (z. B. Prozentsätze, die in tatsächliche Pixelwerte umgewandelt wurden).

Jede CSS-Eigenschaft hat einen verwendeten Wert. Die verwendeten Werte von Dimensionen (z. B. {{cssxref("width")}} oder {{cssxref("line-height")}}) sind in Pixeln. Die verwendeten Werte von Kurzform-Eigenschaften (z. B. {{cssxref("background")}}) sind mit denen ihrer Komponenten-Eigenschaften (z. B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}), sowie mit {{cssxref("position")}} und {{cssxref("float")}} konsistent.

Der verwendete Wert für die {{cssxref("width")}} oder {{cssxref("inline-size")}} eines Elements ist ein Pixelwert, auch wenn der spezifizierte Wert der Eigenschaft mit Prozentsätzen oder Schlüsselwortwerten gesetzt wurde.

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

Während die drei spezifizierten Werte, `auto`, `50%` und `inherit`, Schlüsselwort- und {{cssxref("percentage")}} Werte sind, liefert das Abrufen der `width` mittels `window.getComputedStyle(el)["width"];` einen [absolut langen](/de/docs/Web/CSS/length#absolute_length_units) `px` Wert:

{{ EmbedLiveSample('Example', '80%', 372) }}

Ändern Sie die Fenstergröße oder drehen Sie Ihr mobiles Gerät, um die Größe zu ändern und die verwendeten Werte zu beeinflussen.

## Gerenderte Werte

Der gerenderte Wert wird als [tatsächlicher Wert](#tatsächlicher_wert) bezeichnet, während der über ein Skript abgerufene Wert als [aufgelöster Wert](#aufgelöster_wert) bezeichnet wird.

### Tatsächlicher Wert

Der **tatsächliche Wert** einer Eigenschaft ist der [verwendete Wert](#verwendeter_wert) dieser Eigenschaft, nachdem alle notwendigen Annäherungen angewendet wurden. Es ist der endgültige gerenderte Wert, wie er vom Browser implementiert wurde, einschließlich Anpassungen für Rendering-Quirks oder -Beschränkungen. Beispielsweise kann ein {{Glossary("user_agent", "Benutzer-Agent")}}, der nur Rahmen mit ganzzahliger Pixelbreite rendern kann, die Dicke des Rahmens auf die nächste ganze Zahl runden.

Die Berechnung umfasst diese Schritte:

1. Zuerst wird der [spezifizierte Wert](#spezifizierter_wert) basierend auf dem Ergebnis der [Kaskadierung](/de/docs/Web/CSS/CSS_cascade/Cascade), [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) oder unter Verwendung des [Anfangswerts](#anfangswert) bestimmt.
2. Als nächstes wird der [berechnete Wert](#berechneter_wert) gemäß der Spezifikation berechnet (beispielsweise hat ein `span` mit `position: absolute` einen berechneten `display`, der zu `block` geändert wurde).
3. Dann wird das Layout berechnet, was zum [verwendeten Wert](#verwendeter_wert) führt.
4. Schließlich wird der verwendete Wert entsprechend den Einschränkungen der lokalen Umgebung transformiert, was zum tatsächlichen Wert führt.

### Aufgelöster Wert

Der **aufgelöste Wert** einer Eigenschaft ist der Wert, nachdem aktive Stylesheets angewendet wurden und alle grundlegenden Berechnungen dieser Werte aufgelöst wurden. Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt ein lebendes [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zurück, das die aufgelösten Werte aller auf ein bestimmtes Element angewendeten CSS-Eigenschaften enthält. Jeder aufgelöste Wert ist entweder der [berechnete Wert](#berechneter_wert) oder der [verwendete Wert](#verwendeter_wert), abhängig von der Eigenschaft.

Historisch gesehen gab `getComputedStyle()` den berechneten Wert eines Elements oder Pseudoelements zurück. Mit der Weiterentwicklung von CSS hat sich auch das Konzept des "berechneten Werts" weiterentwickelt, aber die von `getComputedStyle()` zurückgegebenen Werte mussten aus Gründen der Rückwärtskompatibilität mit bereitgestellten Skripten gleich bleiben. Diese Werte sind die "aufgelösten Werte".

Bei den meisten Eigenschaften ist der aufgelöste Wert der berechnete Wert, aber bei einigen wenigen Legacy-Eigenschaften (einschließlich {{cssxref("width")}} und {{cssxref("height")}}) ist es der verwendete Wert. Die [CSSOM-Spezifikation](https://drafts.csswg.org/cssom/#resolved_values) bietet detaillierte Informationen pro Eigenschaft.

CSS 2.0 definierte _berechneter Wert_ als den letzten Schritt bei der Berechnung einer Eigenschaft. CSS 2.1 führte die klare Definition des "verwendeten Werts" ein. Ein Element konnte dann explizit die Breite/Höhe seines Elternteils erben, dessen berechneter Wert ein Prozentsatz ist. Für CSS-Eigenschaften, die nicht vom Layout abhängen (z.B. `display`, `font-size` oder `line-height`), sind die berechneten Werte und verwendeten Werte gleich. Die folgende Liste enthält die CSS 2.1-Eigenschaften, die _doch_ vom Layout abhängen und daher unterschiedliche berechnete und verwendete Werte haben (übernommen von [CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("top")}}
- {{cssxref("height")}}, {{cssxref("width")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/inherit), [`initial`](/de/docs/Web/CSS/initial), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer), und [`unset`](/de/docs/Web/CSS/unset)
- [CSS Module: Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)
- [CSS Module: Syntax](/de/docs/Web/CSS/CSS_syntax)
