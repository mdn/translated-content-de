---
title: Verarbeitung von CSS-Eigenschaftswerten
short-title: Verarbeitung von Eigenschaftswerten
slug: Web/CSS/CSS_cascade/Value_processing
l10n:
  sourceCommit: 6afda999d054c2ba12d13d129b13eb35952b4fbe
---

Für jedes Element in einem Dokumentbaum weist der Browser jeder CSS-Eigenschaft, die für dieses Element gilt, einen Wert zu. Der gerenderte Wert jeder CSS-Eigenschaft für ein gegebenes Element oder eine Box ist das Ergebnis einer Berechnung basierend auf Stylesheet-Definitionen, Vererbung, der [Kaskade](https://de/docs/Web/CSS/CSS_cascade/Cascade), Abhängigkeiten, Einheitenumwandlung und der Anzeigeumgebung. Dieser Leitfaden bietet einen Überblick über die Verarbeitungsschritte, die angewendet werden, um zu definieren, wie jeder CSS-Wert letztlich gerendert wird, indem Schlüsselkonzepte wie spezifizierte, berechnete, verwendete und tatsächliche Werte untersucht werden.

## Eigenschaftswerte

Jeder Stil, der auf ein Element oder Pseudo-Element angewendet wird, basiert auf einer einzigen CSS-Eigenschaftsdeklaration. Jede CSS-Eigenschaft hat nur einen Wert. Der angewendete Wert wird durch die [kaskadierten Werte](#kaskadierter_wert) aller Deklarationen dieser Eigenschaft bestimmt, die für das Element oder Pseudo-Element gelten, wobei der einzelne angewendete Wert aus der Eigenschaftsdeklaration stammt, die im [Kaskadensortierungsalgorithmus](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order) basierend auf dem [Kaskadenalgorithmus](/de/docs/Web/CSS/CSS_cascade/Cascade) am höchsten eingestuft wird.

Wenn es mehrere [deklarierte Werte](#deklarierter_wert) gibt, mit mehreren Deklarationen, die die gleichen oder unterschiedlichen Eigenschaftswerte für dasselbe Element bereitstellen, muss jeder Eigenschaftswert dennoch aus einem einzigen Paar von Eigenschaftsnamen und -wert stammen, da nur ein einzelner Wert aus jeder Eigenschaft angewendet wird, selbst wenn der Wert eine kommagetrennte Liste von Werten ist.

Um zu bestimmen, welcher [deklarierte Wert](#deklarierter_wert) angewendet wird, sammelt und verarbeitet der Benutzeragent alle Stile aus verschiedenen Quellen, wie Inline-Stile sowie interne und externe Stylesheets.

Die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) bestimmt, welcher Wert angewendet werden sollte, wenn mehrere widersprüchliche Stile dasselbe Element anvisieren. Der [Kaskadenalgorithmus](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order) definiert, wie Benutzeragenten Eigenschaftswerte kombinieren, die aus verschiedenen Quellen, Bereichen und/oder [Schichten](/de/docs/Web/CSS/CSS_cascade/Cascade#cascade_layers) stammen. Wenn ein Selektor mit einem Element übereinstimmt, wird der [deklarierte Wert](#deklarierter_wert) der Eigenschaft aus dem [Ursprung](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types) mit der höchsten Priorität angewendet, selbst wenn ein Selektor von einem Ursprung oder [Schichten](/de/docs/Web/CSS/CSS_cascade/Cascade#cascade_layers) mit niedrigerer Priorität eine größere {{cssxref("specificity")}} hat.

Bestimmte Eigenschaften erben Werte von ihren Elternelementen, es sei denn, sie werden explizit überschrieben. [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) kann auftreten, wenn keine Stilinformationen für eine spezifische Eigenschaft auf einem Element existieren. Wenn die Eigenschaft geerbt wird, wird der Wert auf den [berechneten Wert](#berechneter_wert) des Elternelements gesetzt. Wenn die Eigenschaft nicht geerbt wird, wird ihr Wert auf den [Anfangswert](#anfangswert) für dieses Element gesetzt.

Nach der Anwendung der [Kaskaden](#kaskadieren)-Regeln und der schrittweisen Voreinstellung von Werten sorgt der Browser dafür, dass die visuelle Darstellung mit dem verarbeiteten CSS übereinstimmt.

## Überblick über die Verarbeitung

Bevor wir in die einzelnen Wertstufen eintauchen, ist es wichtig, die drei Hauptphasen zu verstehen, die bei der Wertverarbeitung auftreten: [Filtern](#filtern), [Kaskadieren](#kaskadieren) und [Voreinstellen](#voreinstellen).

### Filtern

**Filtern** ist der Prozess der Identifizierung aller Deklarationen, die auf jedes Element zutreffen. Eine Deklaration gilt nur dann für ein Element, wenn:

- Die Deklaration zu einem Stylesheet gehört, das derzeit für dieses Dokument gilt
- Alle [bedingten Regeln](/de/docs/Web/CSS/CSS_conditional_rules) (wie {{cssxref("@media")}} oder {{cssxref("@supports")}}), die die Deklaration enthalten, derzeit wahr sind.
- Die Deklaration gehört zu einer Stilregel, deren Selektor mit dem Element übereinstimmt
- Die Deklaration syntaktisch gültig ist: der Eigenschaftsname vom Browser erkannt wird und der Wert der erwarteten Syntax für diese Eigenschaft entspricht

Nur gültige Deklarationen werden zu deklarierten Werten. Deklarationen mit ungültigen Eigenschaftsnamen oder ungültigen Werten werden gemäß den [CSS-Fehlerbehandlungsregeln](/de/docs/Web/CSS/CSS_syntax/Error_handling) herausgefiltert.

In diesem Beispiel werden nur die {{cssxref("font-size")}} und {{cssxref("font-weight")}} Deklarationen verarbeitet. Der [CSS-Parser filtert Fehler aus](/de/docs/Web/CSS/CSS_syntax/Error_handling#css_parser_errors), indem er die Deklaration mit dem ungültigen Eigenschaftsnamen ignoriert oder "herausfiltert":

```css
p {
  font-size: 1.25em;
  colr: blue;
  font-weight: bold;
}
```

Wenn das Filtern abgeschlossen ist, hat jedes Element null oder mehr [deklarierte Werte](#deklarierter_wert) für jede CSS-Eigenschaft. Diese deklarierten Werte sind der Ausgangspunkt für die nächste Bearbeitungsstufe, das [Kaskadieren](#kaskadieren).

### Kaskadieren

Die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) löst Konflikte, wenn mehrere Deklarationen auf dieselbe Eigenschaft auf demselben Element angewendet werden. Die Kaskade sortiert Deklarationen mithilfe des [Kaskadensortierungsalgorithmus](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order).

Zum Beispiel stimmen beide {{cssxref("font-size")}} Deklarationen mit `<p class="large">CSS is fun!</p>` überein, aber die zweite Deklaration wird angewendet, weil sie eine höhere {{cssxref("specificity")}} hat. Beide Deklarationen haben den Ursprung des Autors, aber der zweite Selektor hat eine Spezifizität von `0-1-1`, während der erste `0-0-1` hat:

```css
p {
  font-size: 1em;
}

p.large {
  font-size: 1.5em;
}
```

Nach dem Kaskadieren bestimmt der Browser den [**kaskadierten Wert**](#kaskadierter_wert) für jede Eigenschaft auf jedem Element. Dies ist der Wert, der in der nächsten Verarbeitungsstufe verwendet wird; dem [Voreinstellen](#voreinstellen).

### Voreinstellen

**Voreinstellen** stellt sicher, dass jede Eigenschaft auf jedem Element einen Wert hat. Dies beinhaltet das Anwenden von Standardwerteigenschaften, wenn keine CSS-Deklarationen diesen Eigenschaftswert explizit festlegen. Dies beinhaltet:

- Festlegung von **geerbten Werten** für [geerbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties)
- Festlegung von **Anfangswerten** für [nicht geerbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties)

Als Ergebnis des Voreinstellens wird garantiert, dass jede Eigenschaft einen [spezifizierten Wert](#spezifizierter_wert) hat.

Beachten Sie, dass explizite Voreinstellungs-Schlüsselwörter ([`initial`](/de/docs/Web/CSS/initial), [`inherit`](/de/docs/Web/CSS/inherit), [`unset`](/de/docs/Web/CSS/unset), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer)) ebenfalls auf ihre entsprechenden Werte aufgelöst werden, um den [spezifizierten Wert](#spezifizierter_wert) zu bestimmen.

## Verarbeitungsphasen

Alle Elemente, die Teil des abgeflachten Elementbaums des Dokuments sind, haben [deklarierte](#deklarierter_wert), [kaskadierte](#kaskadierter_wert), [spezifizierte](#spezifizierter_wert), [berechnete](#berechneter_wert), [verwendete](#verwendeter_wert) und [tatsächliche](#tatsächlicher_wert) Werte. Für eine bestimmte Eigenschaft können diese Werte gleich oder unterschiedlich sein. Zum Beispiel, wenn Ihr großer Code-Bestand das CSS `p { font-size: 1.25em; }` und Ihr HTML `<p class="large">CSS is fun!</p>` enthält, welche Größe wird der Absatz haben? Der {{cssxref("font-size")}} Wert durchläuft einige Stufen, um vom `em` spezifizierten Wert zum gerenderten `px` Wert zu gelangen.

Die Werteverarbeitungsstufen sind:

- [Deklarierter Wert](#deklarierter_wert)
- [Kaskadierter Wert](#kaskadierter_wert)
- [Spezifizierter Wert](#spezifizierter_wert)
- [Berechneter Wert](#berechneter_wert)
- [Verwendeter Wert](#verwendeter_wert)
- [Tatsächlicher Wert](#tatsächlicher_wert)

Diese Werte werden verwendet, um den endgültigen [gerenderten Wert](#gerenderte_werte) zu bestimmen.

### Deklarierter Wert

Ein **deklarierter Wert** ist jeder syntaktisch gültige Wert aus einer Deklaration, die auf ein Element angewendet wird. Ein Element kann null oder mehr deklarierte Werte für jede Eigenschaft haben. Diese Werte stammen aus Stylesheets (Autor, Benutzer oder Benutzeragent) und werden während der [Filterung](#filtern) identifiziert.

Führen wir unser Beispiel fort, in dem unser Stylesheet ein Vorkommen von `p { font-size: 1.25em; }` enthält und das das Stylesheet verknüpfende Dokument `<p class="large">CSS is fun!</p>` enthält, könnten andere `font-size` Deklarationen potenziell auf denselben Absatz angewendet werden. Das Benutzeragenten-Stylesheet könnte `font-size: 1em` für alle Absätze festlegen, während eine andere Autor-Deklaration `font-size: 2em` für Elemente mit der Klasse "large" setzt:

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

Es könnten viele andere `font-size` Deklarationen in unseren Stylesheets vorhanden sein, aber nur Deklarationen, deren Selektoren mit dem Element übereinstimmen, werden zu deklarierten Werten. In diesem Beispiel, da unser `<p>` Element `class="large"` hat, sind alle drei Deklarationen deklarierte Werte für dieses Element.

### Kaskadierter Wert

Der **kaskadierte Wert** ist der deklarierte Wert, der die [Kaskade](#kaskadieren) gewinnt. Es gibt höchstens einen kaskadierten Wert pro Eigenschaft pro Element.

Von unseren deklarierten Werten gewinnen Autorenstile über Benutzeragentenstile. Innerhalb desselben Ursprungs gewinnen Stile mit höherer Spezifizität über Stile mit niedriger Spezifizität. In diesem Fall wäre der kaskadierte Wert `font-size: 2em`, vom Autor-Ursprung mit der Spezifizität `0-1-1`:

```css
font-size: 2em;
```

Wenn es keine deklarierten Werte für eine Eigenschaft gibt, gibt es keinen kaskadierten Wert, was bedeutet, dass der [spezifizierte Wert](#spezifizierter_wert) für diese Eigenschaft durch den [Voreinstellungsprozess](#voreinstellen) bestimmt wird.

### Spezifizierter Wert

Der **spezifizierte Wert** ist das Ergebnis des [Voreinstellungsprozesses](#voreinstellen). Er ist garantiert für jede Eigenschaft auf jedem Element vorhanden. Der spezifizierte Wert wird wie folgt bestimmt:

1. Wenn es einen [kaskadierten Wert](#kaskadierter_wert) gibt, ist der kaskadierte Wert der spezifizierte Wert.
2. Wenn es _keinen_ kaskadierten Wert gibt und die Eigenschaft [vererbt](/de/docs/Web/CSS/CSS_cascade/Inheritance) wird, ist der spezifizierte Wert der [berechnete Wert](#berechneter_wert) des Elternelements.
3. Wenn es _keinen_ kaskadierten Wert gibt und die Eigenschaft _nicht_ vererbt wird, ist der spezifizierte Wert der [Anfangswert](#anfangswert) der Eigenschaft.

In unserem Beispiel haben wir einen [kaskadierten Wert](#kaskadierter_wert) von `2em`, dieser wird daher zum spezifizierten Wert:

```css
font-size: 2em;
```

Für Eigenschaften ohne kaskadierte Werte bestimmt der Voreinstellungsprozess den Wert. Wenn beispielsweise `color` nicht spezifiziert ist, wird die `color` vom berechneten Wert des Elternteils geerbt, da es sich um eine vererbte Eigenschaft handelt. Wenn `margin` nicht spezifiziert ist, wird der `initial` Wert von `0` verwendet, da `margin` keine [vererbte Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) ist:

```css
color: inherit;
margin: 0;
```

#### Anfangswert

Der **Anfangswert** einer Eigenschaft ist der Standardwert, der in der Definitionstabelle in der Spezifikation aufgeführt ist. Der Anfangswert wird während des Voreinstellens verwendet, wenn:

- Für [vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) wird der Anfangswert nur auf das _Root-Element_ angewendet, das kein Elternelement hat, wenn kein kaskadierter Wert vorhanden ist.
- Für [nicht vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties) wird der Anfangswert auf _alle Elemente_ angewendet, wenn kein kaskadierter Wert vorhanden ist.

Sie können den Anfangswert explizit unter Verwendung des {{cssxref("initial")}} Schlüsselworts festlegen.

> [!NOTE]
> Der Anfangswert kann im Abschnitt zur formalen Syntax jeder CSS-Eigenschafts-Referenzseite gefunden werden. Zum Beispiel ist [der Anfangswert von `font-size` `medium`](/de/docs/Web/CSS/font-size#formal_definition). Der Anfangswert sollte nicht mit dem von dem Stylesheet des Browsers angegebenen Wert verwechselt werden.

### Berechneter Wert

Der **berechnete Wert** einer Eigenschaft ist der Wert, der von Elter auf Kind während der Vererbung übertragen wird. Es ist das Ergebnis, nachdem Größen wie relative Einheiten und benutzerdefinierte Eigenschaften in absolute Werte umgewandelt wurden, aber bevor spezifische Layoutinformationen berücksichtigt werden.

Der berechnete Wert wird aus dem [spezifizierten Wert](#spezifizierter_wert) wie folgt berechnet:

1. Behandlung der speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}}.
2. Durchführung der Berechnung, die erforderlich ist, um den Wert zu erreichen, der in der "Berechneter Wert"-Zeile in der Eigenschaften-Definitionstabelle beschrieben ist.

Die Berechnung, die erforderlich ist, um den berechneten Wert einer Eigenschaft zu erreichen, beinhaltet normalerweise das Umwandeln von relativen Werten (wie die in `em` Einheiten oder Prozentsätzen) in absolute Werte. Wenn ein Element beispielsweise spezifizierte Werte `font-size: 16px` und `padding-top: 2em` hat, dann beträgt der berechnete Wert von `padding-top` `32px` (das Doppelte der Schriftgröße).

Für einige Eigenschaften (diejenigen, bei denen Prozentsätze relativ zu etwas Layout-Abhängigem sind, z. B. `width`, `margin-right`, `text-indent` und `top`), werden prozentual angegebene Werte in prozentual berechnete Werte umgewandelt. Außerdem werden einheitenlose Zahlen, die auf der `line-height`-Eigenschaft angegeben sind, als spezifizierte Werte zum berechneten Wert. Die relativen Werte, die im berechneten Wert verbleiben, werden absolut, wenn der [verwendete Wert](#verwendeter_wert) bestimmt wird.

### Verwendeter Wert

Der **verwendete Wert** ist der Wert der Eigenschaft, nachdem alle Berechnungen am [berechneten Wert](#berechneter_wert) durchgeführt wurden und er mit layout-spezifischen Details verfeinert wurde (z. B. Prozentsätze in tatsächliche Pixelwerte umgewandelt).

Jede CSS-Eigenschaft hat einen verwendeten Wert. Die verwendeten Werte von Dimensionen (z. B. {{cssxref("width")}} oder {{cssxref("line-height")}}) sind in Pixeln. Die verwendeten Werte von Kurzschreibweise-Eigenschaften (z. B. {{cssxref("background")}}) sind konsistent mit denen ihrer Komponenteigenschaften (z. B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}) und mit {{cssxref("position")}} und {{cssxref("float")}}.

Der verwendete Wert für die {{cssxref("width")}} oder {{cssxref("inline-size")}} eines Elements ist ein Pixelwert, selbst wenn der spezifizierte Wert der Eigenschaft mit Prozentsätzen oder Schlüsselwortwerten festgelegt wurde.

Wenn wir drei Containerelemente mit ihrer Breite als `auto`, `50%` und `inherit` haben:

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

Während die drei spezifizierten Werte, `auto`, `50%` und `inherit`, Schlüsselwort- und {{cssxref("percentage")}}-Werte sind, gibt das Abrufen der `width` mit `window.getComputedStyle(el)["width"];` einen [absoluten Längenwert](/de/docs/Web/CSS/length#absolute_length_units) als `px` Wert zurück:

{{ EmbedLiveSample('Example', '80%', 372) }}

Ändern Sie die Größe des Fensters oder drehen Sie Ihr mobiles Gerät, um die Größe und die verwendeten Werte zu ändern.

## Gerenderte Werte

Der gerenderte Wert wird der [tatsächliche Wert](#tatsächlicher_wert) genannt, während der Wert, der über ein Script abgerufen wird, der [aufgelöste Wert](#aufgelöster_wert) genannt wird.

### Tatsächlicher Wert

Der **tatsächliche Wert** einer Eigenschaft ist der [verwendete Wert](#verwendeter_wert) dieser Eigenschaft, nachdem alle notwendigen Annäherungen angewendet wurden. Es ist der endgültige gerenderte Wert, wie er vom Browser umgesetzt wird, einschließlich Anpassungen für Rendering-Eigenheiten oder -Einschränkungen. Ein {{Glossary("user_agent", "Benutzeragent")}}, der zum Beispiel nur Ränder mit ganzzahliger Pixelbreite rendern kann, kann die Dicke des Randes auf die nächste ganze Zahl runden.

Die Berechnung umfasst diese Schritte:

1. Zunächst wird der [spezifizierte Wert](#spezifizierter_wert) basierend auf dem Ergebnis des [Kaskadierens](/de/docs/Web/CSS/CSS_cascade/Cascade), der [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) oder unter Verwendung des [Anfangswerts](#anfangswert) bestimmt.
2. Danach wird der [berechnete Wert](#berechneter_wert) gemäß der Spezifikation berechnet (zum Beispiel wird ein `span` mit `position: absolute` seine berechnete `display` zu `block` ändern).
3. Dann wird das Layout berechnet, was zum [verwendeten Wert](#verwendeter_wert) führt.
4. Schließlich wird der verwendete Wert entsprechend den Einschränkungen der lokalen Umgebung umgewandelt, was zum tatsächlichen Wert führt.

### Aufgelöster Wert

Der **aufgelöste Wert** einer Eigenschaft ist der Wert nach Anwendung aktiver Stylesheets und der Auflösung aller grundlegenden Berechnungen, die diese Werte enthalten können. Die [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) Methode gibt ein Live-Objekt [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück, das die aufgelösten Werte aller CSS-Eigenschaften enthält, die auf ein angegebenes Element angewendet werden. Jeder aufgelöste Wert ist entweder der [berechnete Wert](#berechneter_wert) oder der [verwendete Wert](#verwendeter_wert), je nach Eigenschaft.

Historisch gesehen gab `getComputedStyle()` den berechneten Wert eines Elements oder Pseudo-Elements zurück. Mit der Weiterentwicklung von CSS entwickelte sich auch das Konzept des "berechneten Werts", aber die von `getComputedStyle()` zurückgegebenen Werte mussten für die Rückwärtskompatibilität mit bereits eingesetzten Skripten gleich bleiben. Diese Werte sind die "aufgelösten Werte".

Für die meisten Eigenschaften ist der aufgelöste Wert der berechnete Wert, aber für einige wenige ältere Eigenschaften (einschließlich {{cssxref("width")}} und {{cssxref("height")}}) ist es der verwendete Wert. Die [CSSOM-Spezifikation](https://drafts.csswg.org/cssom/#resolved_values) bietet Details pro Eigenschaft.

CSS 2.0 definierte _berechneter Wert_ als den letzten Schritt in der Berechnung einer Eigenschaft. CSS 2.1 führte die explizite Definition des "verwendeten Werts" ein. Ein Element konnte dann explizit die Breite/Höhe seines Elternteils erben, dessen berechneter Wert ein Prozentsatz ist. Für CSS-Eigenschaften, die nicht vom Layout abhängen (z. B. `display`, `font-size` oder `line-height`), sind die berechneten Werte gleich den verwendeten Werten. Die folgende Liste enthält die CSS 2.1 Eigenschaften, die _vom Layout abhängen_ und daher einen anderen berechneten Wert und verwendeten Wert haben (entnommen aus [CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("top")}}
- {{cssxref("height")}}, {{cssxref("width")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/inherit), [`initial`](/de/docs/Web/CSS/initial), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer), und [`unset`](/de/docs/Web/CSS/unset)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
