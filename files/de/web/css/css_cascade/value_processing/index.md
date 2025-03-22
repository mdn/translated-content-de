---
title: Verarbeitung von CSS-Property-Werten
slug: Web/CSS/CSS_cascade/Value_processing
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{CSSRef}}

Für jedes Element in einem Dokumentbaum weist der Browser jedem CSS-Property, das auf dieses Element angewendet wird, einen Wert zu. Der gerenderte Wert jeder CSS-Property für ein bestimmtes Element oder Box ist das Ergebnis einer Berechnung basierend auf Stylesheet-Definitionen, Vererbung, dem [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade), Abhängigkeiten, Einheitsumrechnung und der Anzeigeumgebung. Dieser Leitfaden bietet einen Überblick über die Verarbeitungsschritte, die angewendet werden, um zu definieren, wie jeder CSS-Wert letztendlich angezeigt wird, indem Schlüsselkonzepte wie spezifizierte, berechnete, verwendete und tatsächliche Werte untersucht werden.

## Property-Werte

Der Wert jeder CSS-Property stammt aus der Deklaration mit der höchsten {{cssxref("specificity")}}. Wenn zwei oder mehr Deklarationen mit derselben Spezifität unterschiedliche Property-Werte für dasselbe Element bereitstellen, wird der Deklarationswert angewendet, dessen Selektor das größte algorithmische Gewicht hat.

Jeder Property-Wert stammt aus einem einzelnen Property-Werte-Paar; jeder Property wird ein einzelner Wert zugewiesen. Selbst wenn der Wert eine durch Kommas getrennte Liste von Werten ist, stammt diese Liste von Werten aus einer einzelnen Deklaration.

Um zu bestimmen, welcher spezifizierte Wert angewendet wird, sammelt und verarbeitet der Benutzeragent alle Stile aus verschiedenen Quellen, wie z. B. inline-Stile sowie interne und externe Stylesheets.

Bestimmte Eigenschaften erben Werte von ihren Elternelementen, es sei denn, sie werden explizit überschrieben. [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) tritt ein, wenn keine Stilinformationen für eine bestimmte Eigenschaft bei einem Element vorhanden sind. Wenn die Eigenschaft vererbt wird, wird der Wert auf den [berechneten Wert](#computed-value) des Elternelements gesetzt. Wenn die Eigenschaft nicht vererbt wird, wird ihr Wert auf den [Initialwert](#initial-value) für dieses Element gesetzt.

Die [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade) bestimmt, welcher Wert angewendet werden soll, wenn multiple, widersprüchliche Stile dasselbe Element anvisieren. Der Cascade-Algorithmus definiert, wie Benutzeragenten Property-Werte kombinieren, die aus verschiedenen Quellen, Bereichen und/oder Ebenen stammen. Wenn ein Selektor ein Element trifft, wird der [spezifizierte Wert](#specified-value) der Property aus dem Ursprung mit der höchsten Priorität angewendet, selbst wenn ein Selektor aus einem Ursprung oder einer Ebene mit niedrigerer Priorität eine größere {{cssxref("specificity")}} hat.

Nach der Anwendung der Kaskadenregeln und der schrittweisen Auflösung von Werten stellt der Browser sicher, dass die visuelle Darstellung den verarbeiteten CSS entspricht.

## Verarbeitungsstufen

Alle Elemente, die Teil des abgeflachten Elementbaums des Dokuments sind, haben deklarierte, gekaskadete, spezifizierte, berechnete, verwendete und tatsächliche Werte. Für eine bestimmte Eigenschaft können diese Werte gleich oder unterschiedlich sein. Beispielsweise, wenn Ihr großer Code-Bestand das CSS "`p { font-size: 1.25em; }`" enthält und Ihr HTML "`<p>CSS macht Spaß!</p>`" enthält, welche Größe wird der Absatz haben? Der {{cssxref("font-size")}}-Wert durchläuft einige Stufen, um vom `em` spezifizierten Wert zum gerenderten `px`-Wert zu gelangen.

- [Initialwert](#initial-value)
- [Spezifizierter Wert](#specified-value)
- [Berechneter Wert](#computed-value)
- [Verwendeter Wert](#used-value)

Diese Werte werden verwendet, um den endgültigen [gerenderten Wert](#rendered-values) zu bestimmen.

### Initialwert

Der **Initialwert** einer Property ist der Standardwert, wie er in seiner Definitionstabelle in der Spezifikation aufgeführt ist. Die Nutzung des Initialwerts hängt davon ab, ob eine Property vererbt wird oder nicht:

Für [vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) wird der Initialwert nur auf das _Root-Element_ angewendet, solange kein [spezifizierter Wert](#specified-value) angegeben wird.

- Für [nicht vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties) wird der Initialwert auf _alle Elemente_ angewendet, solange kein spezifizierter Wert angegeben wird.

Sie können den Initialwert explizit mit dem {{cssxref("initial")}} Schlüsselwort setzen.

> [!NOTE]
> Der Initialwert kann im Abschnitt zur formalen Syntax auf jeder CSS-Property-Referenzseite gefunden werden. Beispielsweise ist der [Initialwert von `font-size` `medium`](/de/docs/Web/CSS/font-size#formal_definition). Der Initialwert sollte nicht mit dem vom Browser-Stylesheet festgelegten Wert verwechselt werden.

### Spezifizierter Wert

Der **spezifizierte Wert** ist der Wert, der zuerst in der CSS-Datei oder durch das `style`-Attribut zugewiesen wird. Der spezifizierte Wert für eine bestimmte Property wird nach den folgenden Regeln bestimmt:

1. Wenn das Stylesheet des Dokuments explizit einen Wert für die Property angibt, wird der angegebene Wert verwendet.
2. Wenn das Stylesheet des Dokuments keinen Wert angibt, die Property jedoch eine vererbte Eigenschaft ist, wird der Wert vom Elternelement übernommen.
3. Wenn keine der obigen Bedingungen zutrifft, wird der [Initialwert](#initialwert) des Elements verwendet.

Im Beispiel "`p { font-size: 1.25em; }`" ist der spezifizierte Wert `1.25em`, es sei denn, der Codebestand enthält eine `font-size` Deklaration mit größerer {{cssxref("specificity")}}.

### Berechneter Wert

Der **berechnete Wert** einer Property ist der Wert, der während der Vererbung vom Parent auf das Kind übertragen wird. Es ist das Ergebnis, nachdem Dinge wie relative Einheiten und benutzerdefinierte Eigenschaften in absolute Werte aufgelöst wurden, jedoch bevor layout-spezifische Informationen berücksichtigt werden.

Der berechnete Wert wird aus dem [spezifizierten Wert](#specified-value) berechnet durch:

1. Behandlung der speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}}.
2. Durchführung der Berechnung, die erforderlich ist, um den Wert zu erreichen, der in der Zeile "Berechneter Wert" in der Eigenschaftsdefinitionstabelle beschrieben ist.

Die Berechnung, die erforderlich ist, um einen berechneten Wert einer Eigenschaft zu erreichen, beinhaltet normalerweise die Umwandlung relativer Werte (wie `em`-Einheiten oder Prozentsätzen) in absolute Werte. Zum Beispiel, wenn ein Element spezifizierte Werte `font-size: 16px` und `padding-top: 2em` hat, dann ist der berechnete Wert von `padding-top` `32px` (doppelte Schriftgröße).

Für einige Eigenschaften (diejenigen, bei denen Prozentsätze relativ zu etwas sind, das das Layout erfordert, um es zu bestimmen, wie z. B. `width`, `margin-right`, `text-indent` und `top`) werden prozentual spezifizierte Werte zu prozentual berechneten Werten. Zusätzlich werden für die `line-height`-Eigenschaft spezifizierte einheitenlose Zahlen zum berechneten Wert, wie angegeben. Die relativen Werte, die im berechneten Wert verbleiben, werden absolut, wenn der [verwendete Wert](#used-value) bestimmt wird.

Gegeben "`p { font-size: 1.25em; }`", wenn `em` `16px` ist, wird die berechnete Schriftgröße für einen Absatz `20px` sein.

### Verwendeter Wert

Der **verwendete Wert** ist der Wert der Property, nachdem alle Berechnungen am [berechneten Wert](#computed-value) durchgeführt wurden und dieser mit layout-spezifischen Details (z.B. Prozentsätze in tatsächliche Pixelwerte aufgelöst) verfeinert wurde.

Jede CSS-Property hat einen verwendeten Wert. Die verwendeten Werte von Dimensionen (z.B. {{cssxref("width")}} oder {{cssxref("line-height")}}) sind in Pixeln. Die verwendeten Werte von Kurzschrift-Eigenschaften (z.B. {{cssxref("background")}}) stimmen mit denen ihrer Komponenteneigenschaften (z.B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}) und mit {{cssxref("position")}} und {{cssxref("float")}} überein.

Der verwendete Wert für die {{cssxref("width")}} oder {{cssxref("inline-size")}} eines Elements ist ein Pixelwert, selbst wenn der spezifizierte Wert der Property mit Prozentsätzen oder Schlüsselwortwerten festgelegt wurde.

Wenn wir drei Container-Elemente haben, deren Breite auf `auto`, `50%` und `inherit` gesetzt ist:

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

Während die drei spezifizierten Werte, `auto`, `50%`, und `inherit`, Schlüsselwort- und {{cssxref("percentage")}}-Werte sind, gibt die Abfrage der `width` mit `window.getComputedStyle(el)["width"];` einen [absoluten Längeneinheiten](/de/docs/Web/CSS/length#absolute_length_units) `px`-Wert zurück:

{{ EmbedLiveSample('Example', '80%', 372) }}

Ändern Sie die Fenstergröße oder drehen Sie Ihr mobiles Gerät, um die Größe und die verwendeten Werte zu ändern.

## Gerenderte Werte

Der gerenderte Wert wird als [tatsächlicher Wert](#actual-value) bezeichnet, während der über ein Skript abgerufene Wert als [aufgelöster Wert](#resolved-value) bezeichnet wird.

### Tatsächlicher Wert

Der **tatsächliche Wert** einer Property ist der [verwendete Wert](#used-value) dieser Property nach Anwendung der notwendigen Annäherungen. Es ist der endgültige gerenderte Wert, wie er vom Browser implementiert wird, einschließlich Anpassungen für Rendering-Eigenheiten oder Einschränkungen. Beispielsweise kann ein {{Glossary("user_agent", "Benutzeragent")}}, der nur Rand mit einer Ganzzahl-Pixelbreite rendern kann, die Dicke des Rands auf die nächste ganze Zahl runden.

Die Berechnung umfasst diese Schritte:

1. Zuerst wird der [spezifizierte Wert](#specified-valuespecified_value) basierend auf dem Ergebnis des [Cascading](/de/docs/Web/CSS/CSS_cascade/Cascade), der [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) oder der Verwendung des [Initialwerts](#initialwert) ermittelt.
2. Danach wird der [berechnete Wert](#computed-value) gemäß der Spezifikation berechnet (zum Beispiel wird ein `span` mit `position: absolute` sein berechnetes `display` auf `block` ändern).
3. Dann wird das Layout berechnet, was zum [verwendeten Wert](#used-value) führt.
4. Schließlich wird der verwendete Wert gemäß den Einschränkungen der lokalen Umgebung transformiert, was zum tatsächlichen Wert führt.

### Aufgelöster Wert

Der **aufgelöste Wert** einer Property ist der Wert nach Anwendung aktiver Stylesheets und Auflösung jeder grundlegenden Berechnung, die diese Werte enthalten können. Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt ein Live-Objekt [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück, das die aufgelösten Werte aller auf ein bestimmtes Element angewendeten CSS-Eigenschaften enthält. Jeder aufgelöste Wert ist entweder der [berechnete Wert](#computed-value) oder der [verwendete Wert](#used-value), je nach Property.

Historisch gab `getComputedStyle()` den berechneten Wert eines Elements oder Pseudo-Elements zurück. Mit der Weiterentwicklung von CSS entwickelte sich auch das Konzept des "berechneten Werts", aber die von `getComputedStyle()` zurückgegebenen Werte mussten aus Gründen der Abwärtskompatibilität mit eingesetzten Skripten gleich bleiben. Diese Werte sind die "aufgelösten Werte".

Für die meisten Eigenschaften ist der aufgelöste Wert der berechnete Wert, aber für einige Legacy-Eigenschaften (einschließlich {{cssxref("width")}} und {{cssxref("height")}}) ist es der verwendete Wert. Die [CSSOM-Spezifikation](https://drafts.csswg.org/cssom/#resolved-values) liefert detailspezifische Informationen.

CSS 2.0 definierte den _berechneten Wert_ als den letzten Schritt in der Berechnung einer Property. CSS 2.1 führte die Unterscheidung zwischen "verwendetem Wert" ein. Ein Element konnte dann explizit die Breite/Höhe seines Elternteils erben, dessen berechneter Wert ein Prozentsatz ist. Für CSS-Eigenschaften, die nicht von Layout abhängen (z.B. `display`, `font-size` oder `line-height`), sind die berechneten Werte und verwendeten Werte gleich. Die folgende Liste enthält die CSS 2.1-Eigenschaften, die _doch_ vom Layout abhängen und daher unterschiedliche berechnete und verwendete Werte haben (aus [CSS 2.1 Änderungen: Spezifizierte, berechnete und tatsächliche Werte](https://www.w3.org/TR/CSS2/changes.html#q21.36) entnommen):

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
