---
title: Verarbeitung von CSS-Eigenschaftswerten
short-title: Verarbeitung von Eigenschaftswerten
slug: Web/CSS/CSS_cascade/Value_processing
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Für jedes Element in einem Dokumentbaum weist der Browser jedem CSS-Attribut, das auf dieses Element angewendet wird, einen Wert zu. Der gerenderte Wert jeder CSS-Eigenschaft für ein bestimmtes Element oder eine Box ist das Ergebnis einer Berechnung basierend auf Stylesheet-Definitionen, Vererbung, dem [Cascade](/de/docs/Web/CSS/Guides/Cascade/Introduction), Abhängigkeiten, Einheitenumwandlung und der Anzeigumgebung. Dieser Leitfaden bietet einen Überblick über die Verarbeitungsschritte, die angewendet werden, um zu definieren, wie jeder CSS-Wert letztendlich durch die Untersuchung von Schlüsselkonzepten wie spezifizierte, berechnete, verwendete und tatsächliche Werte gerendert wird.

## Eigenschaftswerte

Jeder Stil, der auf ein Element oder Pseudoelement angewendet wird, basiert auf einer einzigen CSS-Eigenschaftserklärung. Jede CSS-Eigenschaft hat nur einen Wert. Der angewendete Wert wird durch die [Kaskadierungswerte](#kaskadierter_wert) aller Deklarationen dieser Eigenschaft bestimmt, die auf dieses Element oder Pseudoelement angewendet werden, wobei der einzige angewendete Wert von der Eigenschaftserklärung stammt, die im [Kaskadierungssortierauftrag](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order) auf der Grundlage des [Kaskadenalgorithmus](/de/docs/Web/CSS/Guides/Cascade/Introduction) am höchsten gereiht ist.

Wenn es mehrere [erklärte Werte](#erklärter_wert) gibt, bei denen mehrere Deklarationen dieselben oder unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, muss jeder Eigenschaftswert weiterhin aus einem einzigen Eigenschaftsname-Wert-Paar stammen, da nur ein einzelner Wert aus jeder Eigenschaft angewendet wird, selbst wenn der Wert eine durch Kommas getrennte Liste von Werten ist.

Um zu bestimmen, welcher [erklärte Wert](#erklärter_wert) angewendet wird, sammelt und verarbeitet der Benutzeragent alle Stile aus verschiedenen Quellen, wie z.B. Inline-Stile und interne und externe Stylesheets.

Die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) bestimmt, welcher Wert angewendet werden soll, wenn mehrere widersprüchliche Stile dasselbe Element anvisieren. Der [Kaskadenalgorithmus](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order) definiert, wie Benutzeragenten Eigenschaftswerte kombinieren, die aus verschiedenen Quellen, Bereichen und/oder [Schichten](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascade_layers) stammen. Wenn ein Selektor ein Element trifft, wird der [erklärte Wert](#erklärter_wert) dieser Eigenschaft aus dem [Ursprung](/de/docs/Web/CSS/Guides/Cascade/Introduction#origin_types) mit der höchsten Priorität angewendet, selbst wenn ein Selektor aus einem niedrigeren Prioritätsursprung oder [Schichten](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascade_layers) eine höhere {{cssxref("specificity")}} hat.

Bestimmte Eigenschaften erben Werte von ihren Elternelementen, es sei denn, sie werden ausdrücklich überschrieben. [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance) kann auftreten, wenn keine Stilinformationen für eine bestimmte Eigenschaft auf einem Element vorhanden sind. Wenn die Eigenschaft geerbt wird, wird der Wert auf den [berechneten Wert](#berechneter_wert) des Elternelements gesetzt. Wenn die Eigenschaft nicht geerbt wird, wird ihr Wert auf den [Anfangswert](#anfangswert) für dieses Element gesetzt.

Nach der Anwendung der [Kaskadierungs](#kaskadieren)-Regeln und der schrittweisen Festlegung von Standardwerten stellt der Browser sicher, dass die visuelle Darstellung mit dem verarbeiteten CSS übereinstimmt.

## Überblick über die Verarbeitung

Bevor wir in die einzelnen Wertstufen eintauchen, ist es wichtig, die drei Hauptphasen der Wertverarbeitung zu verstehen: [Filtern](#filtern), [Kaskadieren](#kaskadieren) und [Standardisieren](#standardisierung).

### Filtern

**Filtern** ist der Prozess der Identifizierung aller Deklarationen, die auf jedes Element angewendet werden. Eine Deklaration gilt für ein Element nur, wenn:

- Die Deklaration gehört zu einem Stylesheet, das aktuell für dieses Dokument gilt
- Alle [Bedingungsregeln](/de/docs/Web/CSS/Guides/Conditional_rules) (wie {{cssxref("@media")}} oder {{cssxref("@supports")}}), die die Deklaration enthalten, derzeit wahr sind.
- Die Deklaration gehört zu einer Stilregel, deren Selektor mit dem Element übereinstimmt
- Die Deklaration ist syntaktisch gültig: Der Eigenschaftsname wird vom Browser erkannt, und der Wert entspricht der erwarteten Syntax für diese Eigenschaft

Nur gültige Deklarationen werden zu deklarierten Werten. Deklarationen mit ungültigen Eigenschaftsnamen oder ungültigen Werten werden gemäß [CSS-Fehlerbehandlungsregeln](/de/docs/Web/CSS/Guides/Syntax/Error_handling) herausgefiltert.

In diesem Beispiel werden nur die {{cssxref("font-size")}} und {{cssxref("font-weight")}} Deklarationen verarbeitet. Der [CSS-Parser filtert Fehler aus](/de/docs/Web/CSS/Guides/Syntax/Error_handling#css_parser_errors), indem er die Deklaration mit dem ungültigen Eigenschaftsnamen ignoriert oder "aussiebt":

```css
p {
  font-size: 1.25em;
  colr: blue;
  font-weight: bold;
}
```

Wenn das Filtern abgeschlossen ist, hat jedes Element null oder mehr [erklärte Werte](#erklärter_wert) für jede CSS-Eigenschaft. Diese deklarierten Werte sind der Ausgangspunkt für die [Kaskadierungs](#kaskadieren)-Verarbeitungsstufe.

### Kaskadieren

Die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) löst Konflikte, wenn mehrere Deklarationen auf dieselbe Eigenschaft auf demselben Element angewendet werden. Die Kaskade sortiert Deklarationen mit Hilfe des [Kaskadensortieralgorithmus](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order).

Zum Beispiel passen beide {{cssxref("font-size")}}-Deklarationen zu `<p class="large">CSS is fun!</p>`, aber die zweite Deklaration wird angewendet, weil sie eine höhere {{cssxref("specificity")}} hat. Beide Deklarationen haben den Autors-Ursprung, aber der zweite Selektor hat eine Spezifität von `0-1-1`, während der erste `0-0-1` hat:

```css
p {
  font-size: 1em;
}

p.large {
  font-size: 1.5em;
}
```

Nach dem Kaskadieren bestimmt der Browser den [**Kaskadierungswert**](#kaskadierter_wert) für jede Eigenschaft auf jedem Element. Dies ist der Wert, der in der nächsten Verarbeitungsstufe verwendet wird; [Standardisierung](#standardisierung).

### Standardisierung

**Standardisierung** stellt sicher, dass jede Eigenschaft auf jedem Element einen Wert hat. Dies beinhaltet die Anwendung von Standardwerteigenschaften, wenn keine CSS-Deklarationen diesen Eigenschaftswert explizit festlegen.
Dies beinhaltet:

- Setzen von **geerbten Werten** für [geerbte Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties)
- Setzen von **Anfangswerten** für [nicht geerbte Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#non-inherited_properties)

Ergebnis der Standardisierung ist, dass jede Eigenschaft garantiert einen [spezifizierten Wert](#spezifizierter_wert) hat.

Beachten Sie, dass explizite Standardisierungs-Schlüsselwörter ([`initial`](/de/docs/Web/CSS/Reference/Values/initial), [`inherit`](/de/docs/Web/CSS/Reference/Values/inherit), [`unset`](/de/docs/Web/CSS/Reference/Values/unset), [`revert`](/de/docs/Web/CSS/Reference/Values/revert), [`revert-layer`](/de/docs/Web/CSS/Reference/Values/revert-layer)) ebenfalls in ihre entsprechenden Werte aufgelöst werden, um den [spezifizierten Wert](#spezifizierter_wert) zu bestimmen.

## Verarbeitungsstufen

Alle Elemente, die Teil des abgeflachten Elementebaums des Dokuments sind, haben [erklärte](#erklärter_wert), [kaskadierte](#kaskadierter_wert), [spezifizierte](#spezifizierter_wert), [berechnete](#berechneter_wert), [verwendete](#verwendeter_wert) und [tatsächliche](#tatsächlicher_wert) Werte. Für eine bestimmte Eigenschaft können diese Werte gleich oder unterschiedlich sein. Zum Beispiel, wenn Ihr großer Codebestand das CSS `p { font-size: 1.25em; }` enthält und Ihr HTML `<p class="large">CSS is fun!</p>` enthält, welche Größe wird der Absatz haben? Der {{cssxref("font-size")}}-Wert durchläuft einige Stufen, um vom `em`-spezifizierten Wert zum gerenderten `px`-Wert zu gelangen.

Die Verarbeitungsstufen der Werte sind:

- [Erklärter Wert](#erklärter_wert)
- [Kaskadierter Wert](#kaskadierter_wert)
- [Spezifizierter Wert](#spezifizierter_wert)
- [Berechneter Wert](#berechneter_wert)
- [Verwendeter Wert](#verwendeter_wert)
- [Tatsächlicher Wert](#tatsächlicher_wert)

Diese Werte werden verwendet, um den endgültigen [gerenderten Wert](#gerenderte_werte) zu bestimmen.

### Erklärter Wert

Ein **erklärter Wert** ist jeder syntaktisch gültige Wert aus einer Deklaration, die auf ein Element angewendet wird. Ein Element kann null oder mehr erklärte Werte für jede Eigenschaft haben. Diese Werte stammen aus Stylesheets (Autor, Benutzer oder Benutzeragent) und werden während der [Filter](#filtern)-Stufe identifiziert.

Fortsetzend mit unserem Beispiel, bei dem unser Stylesheet eine Vorkommen von `p { font-size: 1.25em; }` enthält und das Dokument, das mit dem Stylesheet verknüpft ist, `<p class="large">CSS is fun!</p>` enthält, kann es andere `font-size`-Deklarationen geben, die potenziell auf den gleichen Absatz angewendet werden könnten. Das Benutzeragent-Stylesheet könnte `font-size: 1em` für alle Absätze festlegen, während eine andere Autoren-Deklaration `font-size: 2em` für Elemente mit der Klasse "large" festlegt:

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

Es können im Stylesheet viele weitere `font-size`-Deklarationen vorkommen, aber nur Deklarationen, deren Selektoren mit dem Element übereinstimmen, werden zu deklarierten Werten. In diesem Beispiel, da unser `<p>`-Element `class="large"` hat, sind alle drei Erklärungen erklärte Werte für dieses Element.

### Kaskadierter Wert

Der **kaskadierte Wert** ist der erklärte Wert, der die [Kaskade](#kaskadieren) gewinnt. Es gibt höchstens einen kaskadierten Wert pro Eigenschaft pro Element.

Von unseren erklärten Werten gewinnen Autorenstile über die Benutzeragent-Stile. Innerhalb desselben Ursprungs gewinnen Stile mit höherer Spezifität über Stile mit geringerer Spezifität. In diesem Fall wäre der kaskadierte Wert `font-size: 2em`, aus dem Autoren-Ursprung mit der Spezifität `0-1-1`:

```css
font-size: 2em;
```

Wenn es keine erklärten Werte für eine Eigenschaft gibt, gibt es keinen kaskadierten Wert, was bedeutet, dass der [spezifizierte Wert](#spezifizierter_wert) für diese Eigenschaft durch den [Standardisierungs](#standardisierung)-Prozess bestimmt wird.

### Spezifizierter Wert

Der **spezifizierte Wert** ist das Ergebnis des [Standardisierungs](#standardisierung)-Prozesses. Es ist garantiert, dass er für jede Eigenschaft auf jedem Element existiert. Der spezifizierte Wert wird wie folgt bestimmt:

1. Wenn es einen [kaskadierten Wert](#kaskadierter_wert) gibt, ist der kaskadierte Wert der spezifizierte Wert.
2. Wenn es _keinen_ kaskadierten Wert gibt und die Eigenschaft [geerbt](/de/docs/Web/CSS/Guides/Cascade/Inheritance) wird, ist der spezifizierte Wert der [berechnete Wert](#berechneter_wert) des Elternelements.
3. Wenn es _keinen_ kaskadierten Wert gibt und die Eigenschaft _nicht_ geerbt wird, ist der spezifizierte Wert der [Anfangswert](#anfangswert) der Eigenschaft.

In unserem Beispiel, da wir einen [kaskadierten Wert](#kaskadierter_wert) von `2em` haben, wird dies zum spezifizierten Wert:

```css
font-size: 2em;
```

Für Eigenschaften ohne kaskadierte Werte bestimmt der Standardisierungsprozess den Wert. Zum Beispiel, wenn `color` nicht spezifiziert ist, wird `color` vom berechneten Wert des Elternteils geerbt, da es eine geerbte Eigenschaft ist. Wenn `margin` nicht spezifiziert ist, wird der `initial` Wert von `0` verwendet, da `margin` keine [geerbte Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties) ist:

```css
color: inherit;
margin: 0;
```

#### Anfangswert

Ein **Anfangswert** einer Eigenschaft ist der Standardwert, wie er in der Definitionstabelle der Spezifikation aufgeführt ist. Der Anfangswert wird während der Standardisierung verwendet, wenn:

- Bei [geerbten Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties) wird der Anfangswert nur auf dem _Wurzelelement_ verwendet, das kein Elternelement hat, wenn kein kaskadierter Wert existiert.
- Bei [nicht geerbten Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#non-inherited_properties) wird der Anfangswert auf _alle Elemente_ angewendet, wenn kein kaskadierter Wert existiert.

Sie können den Anfangswert explizit durch Verwendung des {{cssxref("initial")}} Schlüsselworts setzen.

> [!NOTE]
> Der Anfangswert kann im Abschnitt zur formalen Syntax auf jeder Referenzseite der CSS-Eigenschaften gefunden werden. Zum Beispiel beträgt der [Anfangswert von `font-size` `medium`](/de/docs/Web/CSS/Reference/Properties/font-size#formal_definition). Der Anfangswert sollte nicht mit dem Wert verwechselt werden, der durch das Stylesheet des Browsers festgelegt wird.

### Berechneter Wert

Der **berechnete Wert** einer Eigenschaft ist der Wert, der von Eltern zu Kind während der Vererbung übertragen wird. Es ist das Ergebnis, nachdem Dinge wie relative Einheiten und benutzerdefinierte Eigenschaften in absolute Werte aufgelöst wurden, aber bevor layout-spezifische Informationen berücksichtigt werden.

Der berechnete Wert wird vom [spezifizierten Wert](#spezifizierter_wert) bestimmt durch:

1. Umgang mit den speziellen Werten {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}}.
2. Durchführung der zur Erreichung des Wertes erforderlichen Berechnung, die in der Zeile "Berechneter Wert" in der Definitionstabelle der Eigenschaft beschrieben wird.

Die Berechnung, die erforderlich ist, um den berechneten Wert einer Eigenschaft zu erreichen, umfasst typischerweise die Umwandlung relativer Werte (wie bei Verwendung von `em`-Einheiten oder Prozentsätzen) in absolute Werte. Zum Beispiel, wenn ein Element spezifizierte Werte `font-size: 16px` und `padding-top: 2em` hat, dann ist der berechnete Wert von `padding-top` `32px` (das Doppelte der Schriftgröße).

Jedoch, für einige Eigenschaften (diejenigen, bei denen Prozentsätze relativ zu etwas sind, das möglicherweise Layout erfordert, um dies zu bestimmen, wie z.B. `width`, `margin-right`, `text-indent` und `top`), werden prozentsatzsspezifizierte Werte in prozentual berechnete Werte umgewandelt. Zusätzlich werden dimensionslose Zahlen, die bei der Eigenschaft `line-height` spezifiziert sind, zum berechneten Wert, wie angegeben. Die relativen Werte, die im berechneten Wert verbleiben, werden absolut, wenn der [verwendete Wert](#verwendeter_wert) bestimmt wird.

### Verwendeter Wert

Der **verwendete Wert** ist der Wert der Eigenschaft, nachdem alle Berechnungen auf dem [berechneten Wert](#berechneter_wert) durchgeführt wurden und er mit layout-spezifischen Details verfeinert wurde (z.B. in tatsächliche Pixelwerte umgewandelte Prozentsätze).

Jede CSS-Eigenschaft hat einen verwendeten Wert. Die verwendeten Werte von Dimensionen (z.B. {{cssxref("width")}} oder {{cssxref("line-height")}}) sind in Pixeln. Die verwendeten Werte von Kurzschreibeigenschaften (z.B. {{cssxref("background")}}) sind mit denen ihrer Komponenteneigenschaften (z.B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}) und mit {{cssxref("position")}} und {{cssxref("float")}} konsistent.

Der verwendete Wert für die {{cssxref("width")}} oder {{cssxref("inline-size")}} eines Elements ist ein Pixelwert, selbst wenn der angegebene Wert der Eigenschaft mit Prozentwerten oder Schlüsselwortwerten festgelegt wurde.

Wenn wir drei Containerelemente haben, deren Breite auf `auto`, `50%` und `inherit` eingestellt ist:

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

Während die drei spezifizierten Werte, `auto`, `50%` und `inherit`, Schlüsselwort- und {{cssxref("percentage")}}-Werte sind, liefert das Abrufen der `width`-Eigenschaft mit `window.getComputedStyle(el)["width"];` einen [absoluten Längenwert](/de/docs/Web/CSS/Reference/Values/length#absolute_length_units) in `px`:

{{ EmbedLiveSample('Example', '80%', 372) }}

Ändern Sie die Fenstergröße oder drehen Sie Ihr Mobilgerät, um die Größe und die verwendeten Werte zu ändern.

## Gerenderte Werte

Der gerenderte Wert wird als [tatsächlicher Wert](#tatsächlicher_wert) bezeichnet, während der über ein Skript abgerufene Wert als [aufgelöster Wert](#aufgelöster_wert) bezeichnet wird.

### Tatsächlicher Wert

Der **tatsächliche Wert** einer Eigenschaft ist der [verwendete Wert](#verwendeter_wert) dieser Eigenschaft, nachdem alle notwendigen Annäherungen angewendet wurden. Es ist der endgültige gerenderte Wert, wie er vom Browser implementiert wird, einschließlich Anpassungen für Renderprobleme oder -einschränkungen. Zum Beispiel kann ein {{Glossary("user_agent", "Benutzeragent")}}, der nur Ränder mit einer ganzen Zahl Pixelbreite rendern kann, die Dicke des Randes auf die nächste ganze Zahl runden.

Die Berechnung umfasst diese Schritte:

1. Zuerst wird der [spezifizierte Wert](#spezifizierter_wert) basierend auf dem Ergebnis der [Kaskadierung](/de/docs/Web/CSS/Guides/Cascade/Introduction), [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance) oder anhand des [Anfangswerts](#anfangswert) bestimmt.
2. Als nächstes wird der [berechnete Wert](#berechneter_wert) gemäß der Spezifikation berechnet (zum Beispiel wird ein `span` mit `position: absolute` sein berechneter `display` auf `block` geändert).
3. Dann wird das Layout berechnet, was zum [verwendeten Wert](#verwendeter_wert) führt.
4. Schließlich wird der verwendete Wert entsprechend den Einschränkungen der lokalen Umgebung transformiert, was zum tatsächlichen Wert führt.

### Aufgelöster Wert

Der **aufgelöste Wert** einer Eigenschaft ist der Wert nach Anwendung aktiver Stylesheets und der Auflösung aller grundlegenden Berechnungen, die diese Werte möglicherweise enthalten. Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt ein lebendiges [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zurück, das die aufgelösten Werte aller auf ein bestimmtes Element angewendeten CSS-Eigenschaften enthält. Jeder aufgelöste Wert ist entweder der [berechnete Wert](#berechneter_wert) oder der [verwendete Wert](#verwendeter_wert), abhängig von der Eigenschaft.

Historisch gesehen hat `getComputedStyle()` den berechneten Wert eines Elements oder Pseudoelements zurückgegeben. Als sich CSS weiterentwickelte, tat dies auch das Konzept des "berechneten Wertes", aber die von `getComputedStyle()` zurückgegebenen Werte mussten aus Gründen der Rückwärtskompatibilität mit bereits eingesetzten Skripten gleich bleiben. Diese Werte sind die "aufgelösten Werte".

Für die meisten Eigenschaften ist der aufgelöste Wert der berechnete Wert, aber für einige ältere Eigenschaften (einschließlich {{cssxref("width")}} und {{cssxref("height")}}) ist es der verwendete Wert. Die [CSSOM-Spezifikation](https://drafts.csswg.org/cssom/#resolved_values) bietet detaillierte Informationen pro Eigenschaft.

CSS 2.0 definierte _berechneter Wert_ als den letzten Schritt in der Berechnung einer Eigenschaft. CSS 2.1 führte die separate Definition "verwendeter Wert" ein. Ein Element konnte dann explizit die Breite/Höhe seines Elternteils erben, dessen berechneter Wert ein Prozentsatz war. Bei CSS-Eigenschaften, die nicht vom Layout abhängen (z.B. `display`, `font-size` oder `line-height`), sind die berechneten Werte und die verwendeten Werte gleich. Die folgende Liste enthält die CSS 2.1-Eigenschaften, die tatsächlich vom Layout abhängen und daher unterschiedliche berechnete und verwendete Werte haben (entnommen aus [CSS 2.1 Änderungen: Spezifizierte, berechnete und tatsächliche Werte](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("top")}}
- {{cssxref("height")}}, {{cssxref("width")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/Reference/Values/inherit), [`initial`](/de/docs/Web/CSS/Reference/Values/initial), [`revert`](/de/docs/Web/CSS/Reference/Values/revert), [`revert-layer`](/de/docs/Web/CSS/Reference/Values/revert-layer), und [`unset`](/de/docs/Web/CSS/Reference/Values/unset)
- Modul [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)
- Modul [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax)
