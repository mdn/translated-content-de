---
title: Verarbeitung von CSS-Werteigenschaften
slug: Web/CSS/CSS_cascade/Value_processing
l10n:
  sourceCommit: 041cf35a6932dfc59c00df24eebe381ea252cd29
---

{{CSSRef}}

Für jedes Element in einem Dokumentbaum weist der Browser jedem CSS-Property, das auf dieses Element anwendbar ist, einen Wert zu. Der gerenderte Wert jeder CSS-Eigenschaft für ein bestimmtes Element oder eine Box ist das Ergebnis einer Berechnung basierend auf den Stylesheet-Definitionen, Vererbung, dem [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade), Abhängigkeiten, Einheitenumrechnung und der Anzeigumgebung. Dieser Leitfaden bietet einen Überblick über die Verarbeitungsschritte, die angewendet werden, um zu definieren, wie jeder CSS-Wert letztendlich gerendert wird, indem wichtige Konzepte wie spezifizierte, berechnete, verwendete und tatsächliche Werte untersucht werden.

## Eigenschaftswerte

Jeder Wert einer CSS-Eigenschaft stammt aus der Deklaration mit der höchsten {{cssxref("specificity")}}. Wenn zwei oder mehr Deklarationen mit derselben Spezifität unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, wird der Deklarationswert angewendet, dessen Selektor das größte algorithmische Gewicht hat.

Jeder Eigenschaftswert stammt aus einem einzigen Eigenschaft-Wert-Paar; ein einzelner Wert wird aus jeder Eigenschaft angewendet. Auch wenn der Wert eine durch Kommas getrennte Liste von Werten ist, stammt diese Liste von Werten aus einer einzelnen Deklaration.

Um zu bestimmen, welcher spezifizierte Wert angewendet wird, sammelt und verarbeitet der User-Agent alle Stile aus verschiedenen Quellen, wie zum Beispiel Inline-Stile, interne und externe Stylesheets.

Bestimmte Eigenschaften erben Werte von ihren Elternelementen, es sei denn, sie werden ausdrücklich überschrieben. [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) tritt auf, wenn keine Stilinformation für eine bestimmte Eigenschaft für ein Element vorliegt. Wenn die Eigenschaft vererbt wird, wird der Wert auf den [berechneten Wert](#computed-value) des Elternelements gesetzt. Wenn die Eigenschaft nicht vererbt wird, wird ihr Wert auf den [Anfangswert](#initial-value) für dieses Element gesetzt.

Die [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade) bestimmt, welcher Wert angewendet werden soll, wenn mehrere widersprüchliche Stile auf dasselbe Element abzielen. Der Cascade-Algorithmus definiert, wie Benutzeragenten Eigenschaftswerte, die aus verschiedenen Quellen, Bereichen und/oder Ebenen stammen, kombinieren. Wenn ein Selektor mit einem Element übereinstimmt, wird der [spezifizierte Wert](#specified-value) der Eigenschaft aus dem Ursprung mit der höchsten Priorität angewendet, auch wenn ein Selektor aus einem Ursprung oder einer Ebene mit niedrigerer Priorität eine größere {{cssxref("specificity")}} hat.

Nachdem die Cascade-Regeln angewendet und die Werte Schritt für Schritt aufgelöst wurden, stellt der Browser sicher, dass die visuelle Darstellung den verarbeiteten CSS entspricht.

## Verarbeitungsstufen

Alle Elemente, die Teil des abgeflachten Elementbaums des Dokuments sind, haben deklarierte, aufeinander abgestimmte, spezifizierte, berechnete, verwendete und tatsächliche Werte. Für eine bestimmte Eigenschaft können diese Werte identisch oder unterschiedlich sein. Zum Beispiel, wenn Ihr großer Code-Bestand das CSS `p { font-size: 1.25em; }` enthält und Ihr HTML `<p>CSS is fun!</p>` umfasst, welche Größe wird der Absatz haben? Der {{cssxref("font-size")}}-Wert durchläuft einige Stufen, um vom `em` spezifizierten Wert zum gerenderten `px`-Wert zu gelangen.

- [Anfangswert](#initial-value)
- [Spezifizierter Wert](#specified-value)
- [Berechneter Wert](#computed-value)
- [Verwendeter Wert](#used-value)

Diese Werte werden verwendet, um den endgültigen [gerenderten Wert](#rendered-values) zu bestimmen.

### Anfangswert

Der **Anfangswert** einer Eigenschaft ist der Standardwert, wie er in ihrer Definitionstabelle in der Spezifikation aufgeführt ist. Die Verwendung des Anfangswerts hängt davon ab, ob eine Eigenschaft vererbt wird oder nicht:

Für [vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) wird der Anfangswert nur auf das _Wurzelelement_ angewendet, solange kein [spezifizierter Wert](#specified-value) bereitgestellt wird.

- Für [nicht vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties) wird der Anfangswert auf _alle Elemente_ angewendet, solange kein spezifizierter Wert bereitgestellt wird.

Sie können den Anfangswert explizit festlegen, indem Sie das {{cssxref("initial")}}-Schlüsselwort verwenden.

> [!NOTE]
> Der Anfangswert kann im Abschnitt zur formalen Syntax auf jeder CSS-Property-Referenzseite gefunden werden. Zum Beispiel ist der [Anfangswert von `font-size` `medium`](/de/docs/Web/CSS/font-size#formal_definition). Der Anfangswert sollte nicht mit dem Wert verwechselt werden, der durch das Stylesheet des Browsers spezifiziert wird.

### Spezifizierter Wert

Der **spezifizierte Wert** ist der Wert, der anfangs in der CSS-Datei oder durch das `style`-Attribut zugewiesen wird. Der spezifizierte Wert für eine gegebene Eigenschaft wird entsprechend den folgenden Regeln bestimmt:

1. Wenn das Stylesheet des Dokuments explizit einen Wert für die Eigenschaft angibt, wird der gegebene Wert verwendet.
2. Wenn das Stylesheet des Dokuments keinen Wert angibt, aber die Eigenschaft vererbt wird, wird der Wert vom Elternelement übernommen.
3. Wenn keiner der oben genannten Punkte zutrifft, wird der [Anfangswert](#anfangswert) des Elements verwendet.

Im Beispiel `p { font-size: 1.25em; }` ist der spezifizierte Wert `1.25em`, es sei denn, der Code-Bestand enthält eine `font-size`-Deklaration mit größerer {{cssxref("specificity")}}.

### Berechneter Wert

Der **berechnete Wert** einer Eigenschaft ist der Wert, der während der Vererbung vom Elternteil auf das Kind übertragen wird. Es ist das Ergebnis, nachdem Dinge wie relative Einheiten und benutzerdefinierte Eigenschaften in absolute Werte umgerechnet wurden, jedoch bevor layout-spezifische Informationen berücksichtigt werden.

Der berechnete Wert wird aus dem [spezifizierten Wert](#specified-value) berechnet durch:

1. Behandlung der speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}}.
2. Durchführung der Berechnung, die erforderlich ist, um den in der Zeile "Berechneter Wert" in der Definitionstabelle der Eigenschaft beschriebenen Wert zu erreichen.

Die Berechnung, um den berechneten Wert einer Eigenschaft zu erreichen, beinhaltet typischerweise die Umwandlung relativer Werte (wie Werte in `em`-Einheiten oder Prozentsätzen) in absolute Werte. Beispielsweise, wenn ein Element spezifizierte Werte `font-size: 16px` und `padding-top: 2em` hat, dann ist der berechnete Wert von `padding-top` `32px` (doppelt so groß wie die Schriftgröße).

Für einige Eigenschaften (solche, bei denen Prozentsätze relativ zu etwas sind, das ein Layout zur Bestimmung benötigt, wie `width`, `margin-right`, `text-indent` und `top`) verwandeln sich prozentuale spezifizierte Werte in prozentuale berechnete Werte. Darüber hinaus werden einheitenlose Zahlen, die auf der Eigenschaft `line-height` angegeben sind, wie spezifiziert zum berechneten Wert. Die im berechneten Wert verbleibenden relativen Werte werden absolut, wenn der [verwendete Wert](#used-value) bestimmt ist.

Angenommen, `p { font-size: 1.25em; }`, wenn `em` `16px` ist, wird die berechnete Schriftgröße für einen Absatz `20px` betragen.

### Verwendeter Wert

Der **verwendete Wert** ist der Wert der Eigenschaft, nachdem alle Berechnungen am [berechneten Wert](#computed-value) durchgeführt wurden und er mit layout-spezifischen Details verfeinert wurde (z.B. Prozentsätze, die in tatsächliche Pixelwerte umgerechnet wurden).

Jede CSS-Eigenschaft hat einen verwendeten Wert. Die verwendeten Werte von Dimensionen (z.B. {{cssxref("width")}} oder {{cssxref("line-height")}}) sind in Pixeln. Die verwendeten Werte von Kurzschreibweisen (z.B. {{cssxref("background")}}) sind konsistent mit denen ihrer Komponenteneigenschaften (z.B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}) und mit {{cssxref("position")}} und {{cssxref("float")}}.

Der verwendete Wert für die {{cssxref("width")}} oder {{cssxref("inline-size")}} eines Elements ist ein Pixelwert, selbst wenn der spezifizierte Wert der Eigenschaft mit Prozentsätzen oder Schlüsselwortwerten festgelegt wurde.

Wenn wir drei Containerelemente haben, deren Breite auf `auto`, `50%` und `inherit` gesetzt ist:

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

Während die drei spezifizierten Werte, `auto`, `50%` und `inherit`, Schlüsselwort- und {{cssxref("percentage")}}-Werte sind, gibt `window.getComputedStyle(el)["width"];` einen [absoluten Längenwert](/de/docs/Web/CSS/length#absolute_length_units) `px` zurück:

{{ EmbedLiveSample('Example', '80%', 372) }}

Ändern Sie die Fenstergröße oder drehen Sie Ihr mobiles Gerät, um die Größe und die verwendeten Werte zu ändern.

## Gerenderte Werte

Der gerenderte Wert wird als der [tatsächliche Wert](#actual-value) bezeichnet, während der Wert, der über ein Skript abgerufen wird, als der [aufgelöste Wert](#resolved-value) bezeichnet wird.

### Tatsächlicher Wert

Der **tatsächliche Wert** einer Eigenschaft ist der [verwendete Wert](#used-value) dieser Eigenschaft, nachdem erforderliche Annäherungen angewendet wurden. Er ist der endgültige gerenderte Wert, wie er vom Browser implementiert wird, einschließlich Anpassungen für Rendering-Eigenheiten oder -Einschränkungen. Zum Beispiel könnte ein {{Glossary("user_agent", "User-Agent")}}, der nur Rahmen mit ganzzahligen Pixelbreiten rendern kann, die Dicke des Rahmens auf die nächste Ganzzahl runden.

Die Berechnung umfasst folgende Schritte:

1. Zuerst wird der [spezifizierte Wert](#specified-valuespecified_value) basierend auf dem Ergebnis der [Cascading](/de/docs/Web/CSS/CSS_cascade/Cascade), [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) oder der Verwendung des [Anfangswerts](#anfangswert) ermittelt.
2. Als nächstes wird der [berechnete Wert](#computed-value) gemäß der Spezifikation berechnet (zum Beispiel wird ein `span` mit `position: absolute` seinen berechneten `display` zu `block` ändern).
3. Dann wird das Layout berechnet, was zum [verwendeten Wert](#used-value) führt.
4. Schließlich wird der verwendete Wert gemäß den Einschränkungen der lokalen Umgebung transformiert, was den tatsächlichen Wert ergibt.

### Aufgelöster Wert

Der **aufgelöste Wert** einer Eigenschaft ist der Wert nach Anwendung der aktiven Stylesheets und der Lösung jeglicher grundlegenden Berechnungen, die diese Werte enthalten können. Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt ein Live-Objekt [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück, das die aufgelösten Werte aller auf ein bestimmtes Element angewendeten CSS-Eigenschaften enthält. Jeder aufgelöste Wert ist entweder der [berechnete Wert](#computed-value) oder der [verwendete Wert](#used-value), je nach Eigenschaft.

Historisch gesehen gab `getComputedStyle()` den berechneten Wert eines Elements oder Pseudoelements zurück. Da CSS sich weiterentwickelte, entwickelte sich auch das Konzept des "berechneten Werts", aber die von `getComputedStyle()` zurückgegebenen Werte mussten gleich bleiben, um die Kompatibilität mit bereits eingesetzten Skripten zu gewährleisten. Diese Werte sind die "aufgelösten Werte".

Für die meisten Eigenschaften ist der aufgelöste Wert der berechnete Wert, aber für einige ältere Eigenschaften (einschließlich {{cssxref("width")}} und {{cssxref("height")}}) ist es der verwendete Wert. Die [CSSOM-Spezifikation](https://drafts.csswg.org/cssom/#resolved-values) bietet per-Eigenschaft Details.

CSS 2.0 definierte den _berechneten Wert_ als den letzten Schritt bei der Berechnung einer Eigenschaft. CSS 2.1 führte die eindeutige Definition des "verwendeten Werts" ein. Ein Element konnte dann explizit die Breite/Höhe seines Elternteils erben, dessen berechneter Wert ein Prozentsatz ist. Für CSS-Eigenschaften, die nicht vom Layout abhängen (z.B. `display`, `font-size` oder `line-height`), sind die berechneten Werte und verwendeten Werte identisch. Die folgende Liste enthält die CSS 2.1-Eigenschaften, die _vom Layout abhängen_ und daher einen unterschiedlichen berechneten Wert und verwendeten Wert haben (entnommen aus [CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("top")}}
- {{cssxref("height")}}, {{cssxref("width")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## Siehe auch

- CSS-Werte zur Kontrolle der Vererbung: [`inherit`](/de/docs/Web/CSS/inherit), [`initial`](/de/docs/Web/CSS/initial), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer), und [`unset`](/de/docs/Web/CSS/unset)
- [CSS Cascade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
