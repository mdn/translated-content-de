---
title: Verarbeitung von CSS-Werteigenschaften
short-title: Verarbeitung von Eigenschaftswerten
slug: Web/CSS/Guides/Cascade/Property_value_processing
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Für jedes Element im Dokumentbaum weist der Browser jedem CSS-Eigenschaft, die für dieses Element gilt, einen Wert zu. Der gerenderte Wert jeder CSS-Eigenschaft für ein bestimmtes Element oder eine Box ist das Ergebnis einer Berechnung basierend auf Stylesheet-Definitionen, Vererbung, dem [Cascade](/de/docs/Web/CSS/Guides/Cascade/Introduction), Abhängigkeiten, Einheitenumwandlung und dem Anzeigemedium. Dieser Leitfaden bietet einen Überblick über die Verarbeitungsstufen, die angewendet werden, um zu bestimmen, wie jeder CSS-Wert letztendlich gerendert wird, indem Schlüsselkonzepte wie spezifizierte, berechnete, verwendete und tatsächliche Werte untersucht werden.

## Eigenschaftswerte

Jeder Stil, der auf ein Element oder Pseudo-Element angewendet wird, basiert auf einer einzigen CSS-Eigenschaftsdeklaration. Jede CSS-Eigenschaft hat nur einen Wert. Der angewandte Wert wird durch die [kaskadierten Werte](#kaskadierter_wert) aller Deklarationen dieser Eigenschaft bestimmt, die auf das Element oder Pseudo-Element angewendet werden, wobei der angewandte Einzelwert aus der Eigenschaftsdeklaration stammt, die in der [Kaskadierungs-Reihenfolge](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order) basierend auf dem [Kaskaden-Algorithmus](/de/docs/Web/CSS/Guides/Cascade/Introduction) am höchsten rangiert.

Wenn es mehrere [deklarierte Werte](#deklarierter_wert) gibt, mit mehreren Deklarationen, die denselben oder unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, muss jeder Eigenschaftswert dennoch aus einem einzigen Eigenschaftsname-Wert-Paar stammen, da nur ein einzelner Wert aus jeder Eigenschaft angewendet wird, auch wenn der Wert eine durch Kommas getrennte Liste von Werten ist.

Um zu bestimmen, welcher [deklarierte Wert](#deklarierter_wert) angewendet wird, sammelt und verarbeitet der Benutzer-Agent alle Stile aus verschiedenen Quellen, wie Inline-Stile, interne und externe Stylesheets.

Die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) bestimmt, welcher Wert angewendet werden soll, wenn mehrere widersprüchliche Stile dasselbe Element anvisieren. Der [Kaskaden-Algorithmus](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order) definiert, wie Benutzer-Agenten Eigenschaftswerte kombinieren, die aus verschiedenen Quellen, Bereichen und/oder [Ebenen](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascade_layers) stammen. Wenn ein Selektor ein Element trifft, wird der [deklarierte Wert](#deklarierter_wert) der Eigenschaft aus dem [Ursprung](/de/docs/Web/CSS/Guides/Cascade/Introduction#origin_types) mit der höchsten Priorität angewendet, selbst wenn ein Selektor aus einem Ursprung oder [Ebenen](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascade_layers) niedrigerer Präzedenz eine höhere {{cssxref("specificity")}} hat.

Bestimmte Eigenschaften erben Werte von ihren Elternelementen, es sei denn, sie werden ausdrücklich überschrieben. [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance) kann auftreten, wenn keine Stilinformationen für eine bestimmte Eigenschaft eines Elements existieren. Wenn die Eigenschaft geerbt wird, wird der Wert auf den [berechneten Wert](#berechneter_wert) des Elternelements gesetzt. Wenn die Eigenschaft nicht geerbt wird, wird ihr Wert auf den [Initialwert](#initialwert) für dieses Element gesetzt.

Nach Anwendung der [kaskadierenden](#kaskadierung) Regeln und der Standardwerte Schritt für Schritt stellt der Browser sicher, dass die visuelle Darstellung den verarbeiteten CSS entspricht.

## Überblick über die Verarbeitung

Bevor Sie in die einzelnen Wertephasen eintauchen, ist es wichtig, die drei Hauptphasen der Wertverarbeitung zu verstehen: [Filtern](#filtern), [Kaskadieren](#kaskadierung) und [Standardisieren](#standardisieren).

### Filtern

**Filtern** ist der Prozess der Identifizierung aller Deklarationen, die auf jedes Element angewendet werden. Eine Deklaration gilt für ein Element nur, wenn:

- Die Deklaration gehört zu einem Stylesheet, das derzeit für dieses Dokument gilt
- Alle [Bedingungsregeln](/de/docs/Web/CSS/Guides/Conditional_rules) (wie {{cssxref("@media")}} oder {{cssxref("@supports")}}), die die Deklaration enthalten, sind derzeit wahr.
- Die Deklaration gehört zu einer Stilregel, deren Selektor mit dem Element übereinstimmt
- Die Deklaration ist syntaktisch gültig: Der Eigenschaftsname wird vom Browser erkannt und der Wert entspricht der erwarteten Syntax für diese Eigenschaft

Nur gültige Deklarationen werden zu deklarierten Werten. Deklarationen mit ungültigen Eigenschaftsnamen oder ungültigen Werten werden gemäß den [CSS-Fehlerbehandlungsregeln](/de/docs/Web/CSS/Guides/Syntax/Error_handling) herausgefiltert.

In diesem Beispiel werden nur die Deklarationen {{cssxref("font-size")}} und {{cssxref("font-weight")}} verarbeitet. Der [CSS-Parser filtert Fehler heraus](/de/docs/Web/CSS/Guides/Syntax/Error_handling#css_parser_errors), indem er die Deklaration mit dem ungültigen Eigenschaftsnamen ignoriert oder "herausfiltert":

```css
p {
  font-size: 1.25em;
  colr: blue;
  font-weight: bold;
}
```

Wenn das Filtern abgeschlossen ist, hat jedes Element null oder mehr [deklarierte Werte](#deklarierter_wert) für jede CSS-Eigenschaft. Diese deklarierten Werte sind der Ausgangspunkt für die [Kaskadierung](#kaskadierung) Verarbeitungsstufe.

### Kaskadierung

[Cascade](/de/docs/Web/CSS/Guides/Cascade/Introduction) löst Konflikte, wenn mehrere Deklarationen für dieselbe Eigenschaft am selben Element angewendet werden. Die Kaskade sortiert Deklarationen mit dem [Kaskadierungs-Sortieralgorithmus](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order).

Zum Beispiel passen beide {{cssxref("font-size")}} Deklarationen zu `<p class="large">CSS ist spaßig!</p>`, aber die zweite Deklaration wird angewendet, weil sie eine höhere {{cssxref("specificity")}} hat. Beide Deklarationen haben den Autorenursprung, aber der zweite Selektor hat die Spezifität `0-1-1`, während der erste `0-0-1` hat:

```css
p {
  font-size: 1em;
}

p.large {
  font-size: 1.5em;
}
```

Nach der Kaskadierung bestimmt der Browser den [**kaskadierten Wert**](#kaskadierter_wert) für jede Eigenschaft jedes Elements. Dies ist der Wert, der in der nächsten Verarbeitungsstufe verwendet wird; [Standardisieren](#standardisieren).

### Standardisieren

**Standardisieren** stellt sicher, dass jede Eigenschaft auf jedem Element einen Wert hat. Dies beinhaltet die Anwendung von Standard-Eigenschaftswerten, wenn keine CSS-Deklarationen diesen Eigenschaftswert explizit setzen.
Dies umfasst:

- Festlegung von **vererbten Werten** für [vererbte Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties)
- Festlegung von **Initialwerten** für [nicht-vererbte Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#non-inherited_properties)

Als Ergebnis des Standardisierens ist garantiert, dass jede Eigenschaft einen [spezifizierten Wert](#spezifizierter_wert) hat.

Beachten Sie, dass explizite Standardisierungsschlüsselwörter ({{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}) auch auf ihre entsprechenden Werte aufgelöst werden, um den [spezifizierten Wert](#spezifizierter_wert) zu bestimmen.

## Verarbeitungsstufen

Alle Elemente, die Teil des abgeflachten Elementbaums des Dokuments sind, haben [deklarierte](#deklarierter_wert), [kaskadierte](#kaskadierter_wert), [spezifizierte](#spezifizierter_wert), [berechnete](#berechneter_wert), [verwendete](#verwendeter_wert) und [tatsächliche](#tatsächlicher_wert) Werte. Für eine bestimmte Eigenschaft können diese Werte gleich oder unterschiedlich sein. Zum Beispiel, wenn Ihr großer Code-Bestand das CSS `p { font-size: 1.25em; }` enthält und Ihr HTML `<p class="large">CSS ist spaßig!</p>` enthält, wie groß wird der Absatz sein? Der {{cssxref("font-size")}} Wert durchläuft einige Stufen, um von dem `em` spezifizierten Wert zum gerenderten `px` Wert zu gelangen.

Die Wertverarbeitungsstufen sind:

- [Deklarierter Wert](#deklarierter_wert)
- [Kaskadierter Wert](#kaskadierter_wert)
- [Spezifizierter Wert](#spezifizierter_wert)
- [Berechneter Wert](#berechneter_wert)
- [Verwendeter Wert](#verwendeter_wert)
- [Tatsächlicher Wert](#tatsächlicher_wert)

Diese Werte werden verwendet, um den endgültigen [gerenderten Wert](#gerenderte_werte) zu bestimmen.

### Deklarierter Wert

Ein **deklarierter Wert** ist jeder syntaktisch gültige Wert aus einer Deklaration, die auf ein Element angewendet wird. Ein Element kann null oder mehr deklarierte Werte für jede Eigenschaft haben. Diese Werte stammen aus Stylesheets (Autor, Benutzer oder Benutzer-Agent) und werden während der [Filterung](#filtern) identifiziert.

In unserem Beispiel, in dem unser Stylesheet `p { font-size: 1.25em; }` enthält und das Dokument, das dieses Stylesheet verlinkt, `<p class="large">CSS ist spaßig!</p>` enthält, könnte es andere `font-size` Deklarationen geben, die potenziell auf denselben Absatz angewendet werden können. Das Benutzer-Agent-Stylesheet könnte `font-size: 1em` für alle Absätze festlegen, während eine andere Autor-Deklaration `font-size: 2em` für Elemente mit der Klasse "large" festlegt:

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

Es könnte viele andere `font-size` Deklarationen in unseren Stylesheets geben, aber nur Deklarationen, deren Selektoren mit dem Element übereinstimmen, werden zu deklarierten Werten. In diesem Beispiel, da unser `<p>` Element `class="large"` hat, sind alle drei Deklarationen deklariert Werte für dieses Element.

### Kaskadierter Wert

Der **kaskadierte Wert** ist der deklarierte Wert, der die [Kaskade](#kaskadierung) gewinnt. Es gibt höchstens einen kaskadierten Wert pro Eigenschaft pro Element.

Aus unseren deklarierten Werten gewinnen Autorstile gegenüber Benutzer-Agent-Stilen. Innerhalb desselben Ursprungs gewinnen Stile mit höherer Spezifität gegenüber Stilen mit niedrigerer Spezifität. In diesem Fall wäre der kaskadierte Wert `font-size: 2em` vom Autorenursprung mit der Spezifität `0-1-1`:

```css
font-size: 2em;
```

Wenn es keine deklarierten Werte für eine Eigenschaft gibt, gibt es keinen kaskadierten Wert, was bedeutet, dass der [spezifizierte Wert](#spezifizierter_wert) für diese Eigenschaft durch den [Standardisierungsprozess](#standardisieren) bestimmt wird.

### Spezifizierter Wert

Der **spezifizierte Wert** ist das Ergebnis des [Standardisierungsprozesses](#standardisieren). Er ist garantiert für jede Eigenschaft auf jedem Element zu existieren. Der spezifizierte Wert wird wie folgt bestimmt:

1. Wenn es einen [kaskadierten Wert](#kaskadierter_wert) gibt, ist der kaskadierte Wert der spezifizierte Wert.
2. Wenn es _keinen_ kaskadierten Wert gibt und die Eigenschaft [vererbt](/de/docs/Web/CSS/Guides/Cascade/Inheritance) wird, ist der spezifizierte Wert der [berechnete Wert](#berechneter_wert) des Elternelements.
3. Wenn es _keinen_ kaskadierten Wert gibt und die Eigenschaft _nicht_ vererbt wird, ist der spezifizierte Wert der [Initialwert](#initialwert) der Eigenschaft.

In unserem Beispiel, da wir einen [kaskadierten Wert](#kaskadierter_wert) von `2em` haben, wird dies der spezifizierte Wert:

```css
font-size: 2em;
```

Für Eigenschaften ohne kaskadierte Werte bestimmt der Standardisierungsprozess den Wert. Zum Beispiel, wenn `color` nicht angegeben ist, wird die `color` vom berechneten Wert des Elternteils vererbt, da es eine vererbte Eigenschaft ist. Wenn `margin` nicht angegeben ist, wird der `initial` Wert von `0` verwendet, da `margin` keine [vererbte Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties) ist:

```css
color: inherit;
margin: 0;
```

#### Initialwert

Der **Initialwert** einer Eigenschaft ist der Standardwert, wie er in der Definitionstabelle in der Spezifikation aufgeführt ist. Der Initialwert wird während der Standardisierung verwendet, wenn:

- Für [vererbte Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties) wird der Initialwert nur am _Wurzelelement verwendet_, das kein Elternelement hat, wenn kein kaskadierter Wert existiert.
- Für [nicht-vererbte Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#non-inherited_properties) wird der Initialwert auf _allen Elementen_ verwendet, wenn kein kaskadierter Wert existiert.

Sie können den Initialwert explizit durch das {{cssxref("initial")}} Schlüsselwort setzen.

> [!NOTE]
> Der Initialwert kann im Abschnitt Formale Syntax jeder CSS-Eigenschaftsreferenzseite gefunden werden. Zum Beispiel ist der [Initialwert von `font-size` `medium`](/de/docs/Web/CSS/Reference/Properties/font-size#formal_definition). Der Initialwert sollte nicht mit dem von der Browsers-Stylesheet angegebenen Wert verwechselt werden.

### Berechneter Wert

Der **berechnete Wert** einer Eigenschaft ist der Wert, der während der Vererbung vom Elternteil auf das Kind übertragen wird. Es ist das Ergebnis nachdem Dinge wie relative Einheiten und benutzerdefinierte Eigenschaften in absolute Werte aufgelöst wurden, aber bevor Layout-spezifische Informationen berücksichtigt werden.

Der berechnete Wert wird aus dem [spezifizierten Wert](#spezifizierter_wert) berechnet durch:

1. Behandlung der speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}}.
2. Durchführung der Berechnung, die erforderlich ist, um den Wert zu erreichen, der in der Zeile "Berechneter Wert" in der Definitionstabelle der Eigenschaft beschrieben wird.

Die Berechnung, die erforderlich ist, um den berechneten Wert einer Eigenschaft zu erreichen, umfasst in der Regel die Umwandlung relativer Werte (wie diejenigen in `em` Einheiten oder Prozentsätzen) in absolute Werte. Zum Beispiel, wenn ein Element spezifizierte Werte `font-size: 16px` und `padding-top: 2em` hat, dann ist der berechnete Wert von `padding-top` `32px` (das Doppelte der Schriftgröße).

Jedoch werden für einige Eigenschaften (bei denen Prozentsätze relativ zu etwas sind, das möglicherweise ein Layout erfordert, wie `width`, `margin-right`, `text-indent`, und `top`) Prozentsatz-spezifizierte Werte in Prozentsatz-berechnete Werte umgewandelt. Darüber hinaus werden bei der Eigenschaft `line-height` ausgezeichnete Zahlen, wie angegeben, zu berechneten Werten. Die relativen Werte, die im berechneten Wert verbleiben, werden absolut, wenn der [verwendete Wert](#verwendeter_wert) bestimmt wird.

### Verwendeter Wert

Der **verwendete Wert** ist der Wert der Eigenschaft, nachdem alle Berechnungen am [berechneten Wert](#berechneter_wert) durchgeführt wurden und er mit Layout-spezifischen Details (z.B. Prozentsätze, die auf tatsächliche Pixelwerte aufgelöst werden) verfeinert wurde.

Jede CSS-Eigenschaft hat einen verwendeten Wert. Die verwendeten Werte von Dimensionen (z.B. {{cssxref("width")}} oder {{cssxref("line-height")}}) sind in Pixeln. Die verwendeten Werte von Kurzschreibweise-Eigenschaften (z.B. {{cssxref("background")}}) sind konsistent mit denen ihrer Komponenten-Eigenschaften (z.B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}) und mit {{cssxref("position")}} und {{cssxref("float")}}.

Der verwendete Wert für die {{cssxref("width")}} oder {{cssxref("inline-size")}} eines Elements ist ein Pixelwert, auch wenn der spezifizierte Wert der Eigenschaft mit Prozentsätzen oder Schlüsselwortwerten festgelegt wurde.

Wenn wir drei Containerelemente haben, deren Breite als `auto`, `50%`, und `inherit` festgelegt ist:

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

Während die drei spezifizierten Werte `auto`, `50%` und `inherit` Schlüsselwort- und {{cssxref("percentage")}} Werte sind, liefert das Abrufen der `width` mittels `window.getComputedStyle(el)["width"];` einen [absoluten Längenwert](/de/docs/Web/CSS/Reference/Values/length#absolute_length_units) im `px` Format:

{{ EmbedLiveSample('Example', '80%', 372) }}

Ändern Sie die Fenstergröße oder drehen Sie Ihr mobiles Gerät, um die Größe zu ändern und die verwendeten Werte anzupassen.

## Gerenderte Werte

Der gerenderte Wert wird als [tatsächlicher Wert](#tatsächlicher_wert) bezeichnet, während der Wert, der über Skript abgerufen wird, als [aufgelöster Wert](#aufgelöster_wert) bezeichnet wird.

### Tatsächlicher Wert

Der **tatsächliche Wert** einer Eigenschaft ist der [verwendete Wert](#verwendeter_wert) dieser Eigenschaft, nachdem alle notwendigen Annäherungen angewendet wurden. Es ist der endgültige gerenderte Wert, wie er vom Browser implementiert wird, einschließlich Anpassungen aufgrund von Darstellungsbesonderheiten oder -beschränkungen. Zum Beispiel kann ein {{Glossary("user_agent", "User-Agent")}}, der nur Ränder mit ganzer Pixelbreite rendern kann, die Dicke des Randes auf die nächste ganze Zahl runden.

Die Berechnung umfasst diese Schritte:

1. Zuerst wird der [spezifizierte Wert](#spezifizierter_wert) basierend auf dem Ergebnis des [Kaskadierens](/de/docs/Web/CSS/Guides/Cascade/Introduction), [der Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance) oder durch Verwendung des [Initialwerts](#initialwert) bestimmt.
2. Als Nächstes wird der [berechnete Wert](#berechneter_wert) gemäß der Spezifikation berechnet (zum Beispiel wird bei einem `span` mit `position: absolute` das berechnete `display` in `block` geändert).
3. Dann wird das Layout berechnet, was zum [verwendeten Wert](#verwendeter_wert) führt.
4. Schließlich wird der verwendete Wert gemäß den Einschränkungen des lokalen Umfelds transformiert, was zum tatsächlichen Wert führt.

### Aufgelöster Wert

Der **aufgelöste Wert** einer Eigenschaft ist der Wert nach Anwendung der aktiven Stylesheets und der Auflösung aller grundlegenden Berechnungen, die diese Werte möglicherweise enthalten. Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt ein Live-Objekt [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück, das die aufgelösten Werte aller CSS-Eigenschaften enthält, die auf ein bestimmtes Element angewendet werden. Jeder aufgelöste Wert ist entweder der [berechnete Wert](#berechneter_wert) oder der [verwendete Wert](#verwendeter_wert), abhängig von der Eigenschaft.

Historisch gesehen lieferte `getComputedStyle()` den berechneten Wert eines Elements oder Pseudoelements. Mit der Weiterentwicklung von CSS entwickelte sich auch das Konzept des „berechneten Werts“, aber die von `getComputedStyle()` zurückgegebenen Werte mussten aus Gründen der Rückwärtskompatibilität mit vorhandenen Skripten gleich bleiben. Diese Werte sind die „aufgelösten Werte“.

Für die meisten Eigenschaften ist der aufgelöste Wert der berechnete Wert, aber für einige ältere Eigenschaften (einschließlich {{cssxref("width")}} und {{cssxref("height")}}) ist es der verwendete Wert. Die [CSSOM-Spezifikation](https://drafts.csswg.org/cssom/#resolved_values) liefert pro Eigenschaft Details.

CSS 2.0 definierte _berechneter Wert_ als den letzten Schritt in der Berechnung einer Eigenschaft. CSS 2.1 führte die eigenständige Definition von „verwendeter Wert“ ein. Ein Element konnte dann explizit die Breite/Höhe seines Elternteils erben, dessen berechneter Wert ein Prozentsatz ist. Für CSS-Eigenschaften, die nicht von Layout abhängen (z.B. `display`, `font-size` oder `line-height`), sind die berechneten Werte und verwendeten Werte identisch. Die folgende Liste enthält die CSS 2.1 Eigenschaften, die _vom Layout abhängen_ und daher einen unterschiedlichen berechneten und verwendeten Wert haben (entnommen aus [CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("top")}}
- {{cssxref("height")}}, {{cssxref("width")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, und {{cssxref("unset")}}
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax) Modul
