---
title: Verarbeitung von CSS-Werteigenschaften
slug: Web/CSS/CSS_cascade/Value_processing
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{CSSRef}}

Für jedes Element in einem Dokumentbaum weist der Browser jedem CSS-Eigenschaft, die auf dieses Element zutrifft, einen Wert zu. Der gerenderte Wert jeder CSS-Eigenschaft für ein bestimmtes Element oder Box ist das Ergebnis einer Berechnung, die auf Stylesheet-Definitionen, Vererbung, der [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade), Abhängigkeiten, Einheit-Konvertierungen und der Anzeigeumgebung basiert. Dieser Leitfaden bietet einen Überblick über die Verarbeitungsschritte, die angewendet werden, um zu definieren, wie jeder CSS-Wert letztendlich gerendert wird, indem Schlüsselkonzepte wie spezifizierte, berechnete, verwendete und tatsächliche Werte untersucht werden.

## Eigenschaftswerte

Der Wert jeder CSS-Eigenschaft stammt von der Deklaration mit der größten {{cssxref("specificity")}}. Wenn zwei oder mehr Deklarationen mit der gleichen Spezifität unterschiedliche Eigenschaftswerte für dasselbe Element liefern, wird der Deklarationswert angewendet, dessen Selektor das größte algorithmische Gewicht hat.

Jeder Eigenschaftswert stammt aus einem einzigen Paar von Eigenschaft-Wert; ein einzelner Wert wird von jeder Eigenschaft angewendet. Selbst wenn der Wert eine durch Kommata getrennte Liste von Werten ist, kam diese Liste von einer einzigen Deklaration.

Um zu bestimmen, welcher spezifizierte Wert angewendet wird, sammelt und verarbeitet der Benutzer-Agent alle Stile aus verschiedenen Quellen, wie Inline-Stile und interne und externe Stylesheets.

Bestimmte Eigenschaften erben Werte von ihren Elternelementen, es sei denn, sie werden explizit überschrieben. [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) tritt auf, wenn für eine spezifische Eigenschaft eines Elements keine Stilinformationen vorhanden sind. Wenn die Eigenschaft vererbt wird, wird der Wert auf den [berechneten Wert](#berechneter_wert) des Elternelements gesetzt. Wenn die Eigenschaft nicht vererbt wird, wird ihr Wert auf den [Initialwert](#initialwert) für dieses Element gesetzt.

Die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) bestimmt, welcher Wert angewendet werden soll, wenn mehrere widersprüchliche Stile dasselbe Element anvisieren. Der Kaskade-Algorithmus definiert, wie Benutzer-Agenten Eigenschaftswerte aus verschiedenen Quellen, Bereichen und/oder Ebenen kombinieren. Wenn ein Selektor ein Element trifft, wird der [spezifizierte Wert](#spezifizierter_wert) der Eigenschaft aus dem Ursprung mit der höchsten Priorität angewendet, selbst wenn ein Selektor aus einem Ursprung oder einer Ebene mit geringerer Priorität eine größere {{cssxref("specificity")}} hat.

Nachdem die Kaskadieregeln angewendet und die Werte Schritt für Schritt aufgelöst wurden, sorgt der Browser dafür, dass die visuelle Präsentation dem verarbeiteten CSS entspricht.

## Verarbeitungsphasen

Alle Elemente, die Teil des abgeflachten Elementbaums des Dokuments sind, haben deklarierte, kaskadierte, spezifizierte, berechnete, verwendete und tatsächliche Werte. Für eine bestimmte Eigenschaft können diese Werte gleich oder unterschiedlich sein. Wenn Ihr großer Code-Bestand beispielsweise das CSS `p { font-size: 1.25em; }` enthält und Ihr HTML `<p>CSS is fun!</p>` enthält, welche Größe wird der Absatz haben? Der {{cssxref("font-size")}}-Wert durchläuft einige Phasen, um vom spezifizierten `em`-Wert zum gerenderten `px`-Wert zu gelangen.

- [Initialwert](#initialwert)
- [spezifizierter Wert](#spezifizierter_wert)
- [berechneter Wert](#berechneter_wert)
- [verwendeter Wert](#verwendeter_wert)

Diese Werte werden verwendet, um den endgültigen [gerenderten Wert](#gerenderte_werte) zu bestimmen.

### Initialwert

Der **Initialwert** einer Eigenschaft ist der Standardwert, wie er in ihrer Definitionstabelle in der Spezifikation aufgelistet ist. Die Verwendung des Initialwerts hängt davon ab, ob eine Eigenschaft vererbt wird oder nicht:

Für [vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) wird der Initialwert nur am _Wurzelelement_ verwendet, solange kein [spezifizierter Wert](#spezifizierter_wert) angegeben ist.

- Für [nicht-vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties) wird der Initialwert auf _alle Elemente_ angewendet, solange kein spezifizierter Wert angegeben ist.

Sie können den Initialwert explizit durch das {{cssxref("initial")}}-Schlüsselwort festlegen.

> [!NOTE]
> Der Initialwert kann im Bereich für die formale Syntax jeder CSS-Eigenschaftsreferenzseite gefunden werden. Zum Beispiel ist der [Initialwert von `font-size` `medium`](/de/docs/Web/CSS/font-size#formal_definition). Der Initialwert sollte nicht mit dem von dem Browser-Stylesheet spezifizierten Wert verwechselt werden.

### Spezifizierter Wert

Der **spezifizierte Wert** ist der Wert, der ursprünglich in der CSS-Datei oder durch das `style`-Attribut zugewiesen wurde. Der spezifizierte Wert für eine gegebene Eigenschaft wird gemäß den folgenden Regeln bestimmt:

1. Wenn das Stylesheet des Dokuments einen Wert für die Eigenschaft explizit angibt, wird der gegebene Wert verwendet.
2. Wenn das Stylesheet des Dokuments keinen Wert angibt, es sich jedoch um eine vererbte Eigenschaft handelt, wird der Wert vom Elternelement übernommen.
3. Wenn keine der obigen Bedingungen zutrifft, wird der [Initialwert](#initialwert) des Elements verwendet.

Im Beispiel `p { font-size: 1.25em; }` ist der spezifizierte Wert `1.25em`, es sei denn, der Codebestand enthält eine `font-size`-Deklaration mit größerer {{cssxref("specificity")}}.

### Berechneter Wert

Der **berechneter Wert** einer Eigenschaft ist der Wert, der während der Vererbung von Eltern zu Kind übertragen wird. Es ist das Ergebnis, nachdem Dinge wie relative Einheiten und benutzerdefinierte Eigenschaften in absolute Werte aufgelöst wurden, jedoch vor der Berücksichtigung layout-spezifischer Informationen.

Der berechnete Wert wird vom [spezifizierten Wert](#spezifizierter_wert) berechnet durch:

1. Bearbeitung der speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, und {{cssxref("unset")}}.
2. Durchführung der Berechnungen, die erforderlich sind, um den in der Zeile "Berechneter Wert" in der Definitionstabelle der Eigenschaft beschriebenen Wert zu erreichen.

Die Berechnung, die benötigt wird, um den berechneten Wert einer Eigenschaft zu erreichen, beinhaltet normalerweise die Umwandlung relativer Werte (wie derer in `em`-Einheiten oder Prozentsätzen) in absolute Werte. Wenn ein Element beispielsweise die spezifizierten Werte `font-size: 16px` und `padding-top: 2em` hat, ist der berechnete Wert von `padding-top` `32px` (das Doppelte der Schriftgröße).

Für einige Eigenschaften (diejenigen, bei denen Prozentsätze relativ zu etwas sind, das möglicherweise ein Layout erfordert, um bestimmt zu werden, wie `width`, `margin-right`, `text-indent` und `top`), verwandeln sich prozentspezifizierte Werte in prozentberechnete Werte. Zudem werden einheitslose Zahlen, die auf der `line-height`-Eigenschaft angegeben sind, zum berechneten Wert, wie angegeben. Die relativen Werte, die im berechneten Wert verbleiben, werden absolut, wenn der [verwendete Wert](#verwendeter_wert) bestimmt wird.

Wenn in `p { font-size: 1.25em; }` `em` `16px` ist, wird die berechnete Schriftgröße für einen Absatz `20px` sein.

### Verwendeter Wert

Der **verwendete Wert** ist der Wert der Eigenschaft, nachdem alle Berechnungen am [berechneten Wert](#berechneter_wert) durchgeführt wurden und dieser mit layout-spezifischen Details verfeinert wurde (z.B. Prozentsätze, die zu tatsächlichen Pixelwerten aufgelöst werden).

Jede CSS-Eigenschaft hat einen verwendeten Wert. Die verwendeten Werte von Dimensionen (z.B. {{cssxref("width")}} oder {{cssxref("line-height")}}) sind in Pixeln. Die verwendeten Werte von Kurzschreibweisen (z.B. {{cssxref("background")}}) sind konsistent mit denen ihrer Komponenteneigenschaften (z.B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}) und mit {{cssxref("position")}} und {{cssxref("float")}}.

Der verwendete Wert für die {{cssxref("width")}} oder {{cssxref("inline-size")}} eines Elements ist ein Pixelwert, auch wenn der spezifizierte Wert der Eigenschaft mit Prozentsätzen oder Schlüsselwortwerten gesetzt wurde.

Wenn wir drei Containerelemente mit ihrer Breite `auto`, `50%` und `inherit` gesetzt haben:

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

Während die drei spezifizierten Werte, `auto`, `50%` und `inherit`, Schlüsselwort- und {{cssxref("percentage")}}-Werte sind, liefert das Abrufen der `width` mit `window.getComputedStyle(el)["width"];` einen [absoluten Länge](/de/docs/Web/CSS/length#absolute_length_units) `px`-Wert:

{{ EmbedLiveSample('Example', '80%', 372) }}

Verändern Sie die Fenstergröße oder drehen Sie Ihr mobiles Gerät, um die Größe und die verwendeten Werte zu ändern.

## Gerenderte Werte

Der gerenderte Wert wird der [tatsächliche Wert](#tatsächlicher_wert) genannt, während der Wert, der über das Skript abgerufen wird, der [aufgelöste Wert](#aufgelöster_wert) genannt wird.

### Tatsächlicher Wert

Der **tatsächliche Wert** einer Eigenschaft ist der [verwendete Wert](#verwendeter_wert) dieser Eigenschaft, nachdem alle notwendigen Annäherungen angewendet wurden. Es ist der endgültige gerenderte Wert, wie er vom Browser implementiert wird, einschließlich Anpassungen für Rendering-Spezifika oder Einschränkungen. Zum Beispiel kann ein {{Glossary("user_agent", "Benutzer-Agent")}}, der nur Rahmen mit einer ganzen Zahlenanzahl an Pixelbreiten rendern kann, die Dicke des Rahmens auf die nächste ganze Zahl runden.

Die Berechnung umfasst diese Schritte:

1. Zuerst wird der [spezifizierte Wert](#spezifizierter_wert) bestimmt, basierend auf dem Ergebnis der [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade), der [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) oder durch den [Initialwert](#initialwert).
2. Als Nächstes wird der [berechnete Wert](#berechneter_wert) gemäß der Spezifikation berechnet (zum Beispiel wird ein `span` mit `position: absolute` seine berechnete `display`-Eigenschaft auf `block` ändern).
3. Dann wird das Layout berechnet, was zum [verwendeten Wert](#verwendeter_wert) führt.
4. Schließlich wird der verwendete Wert gemäß den Einschränkungen der lokalen Umgebung transformiert, was zum tatsächlichen Wert führt.

### Aufgelöster Wert

Der **aufgelöste Wert** einer Eigenschaft ist der Wert nach Anwendung aktiver Stylesheets und Auflösung jeglicher grundlegenden Berechnungen, die diese Werte enthalten könnten. Die [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)-Methode gibt ein Live-Objekt [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück, das die aufgelösten Werte aller auf ein bestimmtes Element angewendeten CSS-Eigenschaften enthält. Jeder aufgelöste Wert ist entweder der [berechnete Wert](#berechneter_wert) oder der [verwendete Wert](#verwendeter_wert), abhängig von der Eigenschaft.

Historisch gesehen gab `getComputedStyle()` den berechneten Wert eines Elements oder Pseudo-Elements zurück. Mit der Weiterentwicklung von CSS entwickelte sich auch das Konzept des "berechneten Wertes", aber die von `getComputedStyle()` zurückgegebenen Werte mussten aus Gründen der Abwärtskompatibilität mit eingesetzten Skripten gleich bleiben. Diese Werte sind die "aufgelösten Werte".

Für die meisten Eigenschaften ist der aufgelöste Wert der berechnete Wert, aber für einige wenige Legacy-Eigenschaften (einschließlich {{cssxref("width")}} und {{cssxref("height")}}) ist es der verwendete Wert. Die [CSSOM-Spezifikation](https://drafts.csswg.org/cssom/#resolved-values) bietet pro Eigenschaft Details.

CSS 2.0 definierte _berechneter Wert_ als den letzten Schritt in der Berechnung einer Eigenschaft. CSS 2.1 führte die eigenständige Definition des "verwendeten Wertes" ein. Ein Element konnte dann explizit die Breite/Höhe seines Elternteils erben, dessen berechneter Wert ein Prozentsatz ist. Für CSS-Eigenschaften, die nicht vom Layout abhängen (z.B. `display`, `font-size` oder `line-height`), sind die berechneten Werte und die verwendeten Werte gleich. Die folgende Liste enthält die CSS 2.1 Eigenschaften, die _vom Layout_ abhängen, und daher einen unterschiedlichen berechneten Wert und verwendeten Wert haben (entnommen aus [CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("top")}}
- {{cssxref("height")}}, {{cssxref("width")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/inherit), [`initial`](/de/docs/Web/CSS/initial), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer), und [`unset`](/de/docs/Web/CSS/unset)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
