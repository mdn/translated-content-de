---
title: Verarbeitung von CSS-Property-Werten
slug: Web/CSS/CSS_cascade/Value_processing
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Für jedes Element in einem Dokumentbaum weist der Browser jedem anwendbaren CSS-Property-Wert einen Wert zu. Der dargestellte Wert jedes CSS-Propertys für ein gegebenes Element oder eine Box ist das Ergebnis einer Berechnung, basierend auf Stylesheet-Definitionen, Vererbung, dem [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade), Abhängigkeiten, Einheitenumrechnung und dem Anzeigemilieu. Dieser Leitfaden bietet einen Überblick über die Verarbeitungsstufen, die angewendet werden, um zu definieren, wie jeder CSS-Wert letztendlich gerendert wird, indem Schlüsselkonzepte wie spezifizierte, berechnete, verwendete und tatsächliche Werte erkundet werden.

## Property-Werte

Der Wert jedes CSS-Propertys stammt aus der Deklaration mit der höchsten {{cssxref("spezifität")}}. Wenn zwei oder mehr Deklarationen mit derselben Spezifität unterschiedliche Property-Werte für dasselbe Element bereitstellen, wird der Deklarationswert angewendet, dessen Selektor das größte algorithmische Gewicht hat.

Jeder Property-Wert stammt aus einem einzelnen Property-Wert-Paar; es wird ein einzelner Wert von jedem Property angewendet. Auch wenn der Wert eine durch Kommas getrennte Liste von Werten ist, kommt diese Liste von einer einzigen Deklaration.

Um zu bestimmen, welcher spezifizierte Wert angewendet wird, sammelt und verarbeitet der User-Agent alle Stile aus verschiedenen Quellen, wie Inline-Stile und interne sowie externe Stylesheets.

Bestimmte Eigenschaften erben Werte von ihren Elternelementen, es sei denn, sie werden ausdrücklich überschrieben. [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) tritt auf, wenn keine Stilinformationen für ein spezifisches Property auf einem Element existieren. Wenn das Property vererbt wird, wird der Wert auf den [berechneten Wert](#computed-value) des Elternelements gesetzt. Wenn das Property nicht vererbt wird, wird sein Wert auf den [Initialwert](#initial-value) für dieses Element gesetzt.

Das [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade) bestimmt, welcher Wert angewendet werden soll, wenn mehrere widersprüchliche Stile dasselbe Element ansprechen. Der Cascade-Algorithmus definiert, wie User-Agents Property-Werte kombinieren, die aus verschiedenen Quellen, Bereichen oder Schichten stammen. Wenn ein Selektor ein Element trifft, wird der [spezifizierte Wert](#specified-value) des Propertys aus dem Ursprung mit der höchsten Vorrang Berechtigung angewendet, auch wenn ein Selektor aus einem Ursprung oder Schicht niedrigerer Vorrang mit größerer {{cssxref("Spezifität")}} vorliegt.

Nachdem die Cascade-Regeln angewendet und Werte schrittweise aufgelöst wurden, stellt der Browser sicher, dass die visuelle Präsentation dem verarbeiteten CSS entspricht.

## Verarbeitungsstufen

Alle Elemente, die Teil des abgeflachten Elementbaums des Dokuments sind, haben deklarierte, Cascade, spezifizierte, berechnete, verwendete und tatsächliche Werte. Für ein spezifisches Property können diese Werte gleich oder verschieden sein. Zum Beispiel, wenn Ihr umfangreicher Code-Bestand das CSS "`p { font-size: 1.25em; }`" enthält und Ihr HTML "`<p>CSS is fun!</p>`" enthält, welche Größe hat der Absatz? Der {{cssxref("font-size")}}-Wert durchläuft einige Stufen, um vom `em`-spezifizierten Wert zum gerenderten `px`-Wert zu gelangen.

- [Initialwert](#initial-value)
- [Spezifizierter Wert](#specified-value)
- [Berechneter Wert](#computed-value)
- [Verwendeter Wert](#used-value)

Diese Werte werden verwendet, um den endgültigen [gerenderten Wert](#rendered-values) zu bestimmen.

### Initialwert

Ein Property's **Initialwert** ist der Standardwert, wie er in seiner Definitionstabelle in der Spezifikation aufgeführt ist. Die Verwendung des Initialwertes hängt davon ab, ob ein Property vererbt wird oder nicht:

Für [vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) wird der Initialwert nur auf dem _Root-Element_ verwendet, solange kein [spezifizierter Wert](#specified-value) angegeben ist.

- Für [nicht vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties) wird der Initialwert auf _allen Elementen_ verwendet, solange kein spezifizierter Wert angegeben ist.

Sie können den Initialwert explizit einstellen, indem Sie das {{cssxref("initial")}} Schlüsselwort verwenden.

> [!NOTE]
> Der Initialwert kann im Abschnitt zur formalen Syntax jeder CSS-Property-Referenzseite gefunden werden. Zum Beispiel, der [Initialwert von `font-size` ist `medium`](/de/docs/Web/CSS/font-size#formal_definition). Der Initialwert sollte nicht mit dem Wert verwechselt werden, der vom Stylesheet des Browsers angegeben wird.

### Spezifizierter Wert

Der **spezifizierte Wert** ist der Wert, der ursprünglich in der CSS-Datei oder vom `style`-Attribut zugewiesen wurde. Der spezifizierte Wert für ein gegebenes Property wird gemäß den folgenden Regeln bestimmt:

1. Wenn das Stylesheet des Dokuments explizit einen Wert für das Property angibt, wird der gegebene Wert verwendet.
2. Wenn das Stylesheet des Dokuments keinen Wert angibt, aber es sich um ein vererbtes Property handelt, wird der Wert vom Elternelement übernommen.
3. Wenn nichts davon zutrifft, wird der [Initialwert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value) des Elements verwendet.

Im Beispiel, "`p { font-size: 1.25em; }`", ist der spezifizierte Wert `1.25em`, es sei denn, der Codebestand enthält eine `font-size`-Deklaration mit größerer {{cssxref("Spezifität")}}.

### Berechneter Wert

Der **berechnete Wert** eines Properties ist der Wert, der während der Vererbung vom Elternteil zum Kind übertragen wird. Er ist das Ergebnis nach dem Auflösen von Dingen wie relativen Einheiten und benutzerdefinierten Eigenschaften in absolute Werte, jedoch bevor layout-spezifische Informationen berücksichtigt werden.

Der berechnete Wert wird aus dem [spezifizierten Wert](#specified-value) berechnet durch:

1. Handhabung der speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, und {{cssxref("unset")}}.
2. Durchführung der Berechnung, die erforderlich ist, um den Wert zu erreichen, der in der Zeile "Berechneter Wert" in der Definitionstabelle des Properties beschrieben ist.

Die Berechnung, die erforderlich ist, um einen berechneten Wert eines Properties zu erreichen, beinhaltet typischerweise die Umwandlung relativer Werte (wie diejenigen in `em`-Einheiten oder Prozentangaben) in absolute Werte. Zum Beispiel, wenn ein Element spezifizierte Werte `font-size: 16px` und `padding-top: 2em` hat, dann ist der berechnete Wert von `padding-top` `32px` (das Doppelte der Schriftgröße).

Für einige Eigenschaften jedoch (diejenigen, bei denen Prozentsätze sich auf etwas beziehen, das ein Layout erfordert, um bestimmt zu werden, wie `width`, `margin-right`, `text-indent` und `top`), werden prozentuell spezifizierte Werte zu prozentual berechneten Werten. Zusätzlich werden zahllose Zahlen, die auf dem `line-height` Property angegeben sind, zum berechneten Wert, wie angegeben. Die relativen Werte, die im berechneten Wert verbleiben, werden absolut, wenn der [verwendete Wert](#used-value) bestimmt wird.

Bei "`p { font-size: 1.25em; }`", wenn `em` `16px` ist, beträgt die berechnete Schriftgröße für einen Absatz `20px`.

### Verwendeter Wert

Der **verwendete Wert** ist der Wert des Properties nach allen Berechnungen, die am [berechneten Wert](#computed-value) durchgeführt wurden, und er wurde mit layout-spezifischen Details (z.B. Prozentsätze, die auf tatsächliche Pixelwerte gelöst werden) verfeinert.

Jedes CSS-Property hat einen verwendeten Wert. Die verwendeten Werte von Dimensionen (z.B. {{cssxref("breite")}} oder {{cssxref("line-height")}}) sind in Pixeln. Die verwendeten Werte von Shorthand-Properties (z.B. {{cssxref("background")}}) sind konsistent mit denen ihrer Komponenten-Properties (z.B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}) und mit {{cssxref("position")}} und {{cssxref("float")}}.

Der verwendete Wert für {{cssxref("breite")}} oder {{cssxref("inline-size")}} eines Elements ist ein Pixel-Wert, auch wenn der spezifizierte Wert des Properties mit Prozentangaben oder Schlüsselwortwerten gesetzt wurde.

Wenn wir drei Container-Elemente mit ihrer Breite auf `auto`, `50%` und `inherit` eingestellt haben:

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

Während die drei spezifizierten Werte, `auto`, `50%`, und `inherit`, Schlüsselwort und {{cssxref("prozentual")}} Werte sind, liefert das Abrufen der `width`-Eigenschaft über `window.getComputedStyle(el)["width"];` ein [absolutes Längenmaß](/de/docs/Web/CSS/length#absolute_length_units) im `px`-Wert:

{{ EmbedLiveSample('Example', '80%', 372) }}

Ändern Sie die Fenstergröße oder drehen Sie Ihr mobiles Gerät, um die Größe und die verwendeten Werte zu ändern.

## Gerenderte Werte

Der gerenderte Wert wird der [tatsächliche Wert](#actual-value) genannt, während der über ein Skript abgerufene Wert als [aufgelöster Wert](#resolved-value) bezeichnet wird.

### Tatsächlicher Wert

Der **tatsächliche Wert** eines Properties ist der [verwendete Wert](#used-value) dieses Properties, nachdem alle notwendigen Annäherungen angewendet wurden. Es ist der endgültige gerenderte Wert, wie er vom Browser implementiert wird, einschließlich Anpassungen für Rendering-Eigenheiten oder Einschränkungen. Zum Beispiel könnte ein {{Glossary("user_agent", "User-Agent")}}, der nur Ränder mit einer ganzzahligen Pixelbreite rendern kann, die Dicke des Randes auf die nächste ganze Zahl runden.

Die Berechnung umfasst diese Schritte:

1. Zuerst wird der [spezifizierte Wert](#specified-valuespecified_value) auf Basis des Ergebnisses von [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade), [Inheritance](/de/docs/Web/CSS/CSS_cascade/Inheritance) oder unter Verwendung des [Initialwertes](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value) bestimmt.
2. Als nächstes wird der [berechnete Wert](#computed-value) gemäß der Spezifikation berechnet (zum Beispiel wird ein `span` mit `position: absolute` sein berechnetes `display` zu `block` ändern).
3. Dann wird das Layout berechnet, was zum [verwendeten Wert](#used-value) führt.
4. Schließlich wird der verwendete Wert entsprechend den Einschränkungen des lokalen Umfelds transformiert, was zum tatsächlichen Wert führt.

### Aufgelöster Wert

Der **aufgelöste Wert** eines Properties ist der Wert nach Anwendung aktiver Stylesheets und Auflösung der Werte, die möglicherweise eine grundlegende Berechnung erfordern. Die [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) Methode gibt ein Live-`[`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)`-Objekt zurück, das die aufgelösten Werte aller auf ein bestimmtes Element angewendeten CSS-Eigenschaften enthält. Jeder aufgelöste Wert ist entweder der [berechnete Wert](#computed-value) oder der [verwendete Wert](#used-value), abhängig von der Eigenschaft.

Historisch gesehen gab `getComputedStyle()` den berechneten Wert eines Elements oder Pseudo-Elements zurück. Während sich CSS entwickelte, entwickelte sich auch das Konzept des "berechneten Wertes", aber die von `getComputedStyle()` zurückgegebenen Werte mussten aus Gründen der Abwärtskompatibilität mit bereitgestellten Skripten gleich bleiben. Diese Werte sind die "aufgelösten Werte".

Für die meisten Eigenschaften ist der aufgelöste Wert der berechnete Wert, aber für einige wenige ältere Eigenschaften (einschließlich {{cssxref("breite")}} und {{cssxref("höhe")}}) ist es der verwendete Wert. Die [CSSOM-Spezifikation](https://drafts.csswg.org/cssom/#resolved-values) bietet detailspezifische Informationen pro Eigenschaft.

CSS 2.0 definierte _berechneter Wert_ als letzten Schritt in der Berechnung eines Properties. CSS 2.1 führte die klare Definition des "verwendeten Wertes" ein. Ein Element könnte dann explizit die Breite/Höhe seines Elternteils erben, dessen berechneter Wert ein Prozentsatz ist. Für CSS-Eigenschaften, die nicht abhängig vom Layout sind (z.B. `display`, `font-size` oder `line-height`), sind die berechneten Werte und verwendeten Werte gleich. Die folgende Liste enthält die CSS 2.1 Eigenschaften, die _vom Layout_ abhängen und daher einen unterschiedlichen berechneten Wert und verwendeten Wert haben (entnommen aus [CSS 2.1 Änderungen: Spezifizierte, berechnete und tatsächliche Werte](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

- {{cssxref("background-position")}}
- {{cssxref("unten")}}, {{cssxref("links")}}, {{cssxref("rechts")}}, {{cssxref("oben")}}
- {{cssxref("höhe")}}, {{cssxref("breite")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/inherit), [`initial`](/de/docs/Web/CSS/initial), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer), und [`unset`](/de/docs/Web/CSS/unset)
- [CSS-Cascading und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
