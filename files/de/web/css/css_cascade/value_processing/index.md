---
title: Verarbeitung von CSS-Eigenschaftswerten
short-title: Verarbeitung von Eigenschaftswerten
slug: Web/CSS/CSS_cascade/Value_processing
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Für jedes Element in einem Dokumentbaum weist der Browser jedem CSS-Eigenschaft, die auf dieses Element angewendet wird, einen Wert zu. Der gerenderte Wert jeder CSS-Eigenschaft für ein bestimmtes Element oder eine Box ist das Ergebnis einer Berechnung basierend auf Stylesheet-Definitionen, Vererbung, dem [Cascade-Algorithmus](/de/docs/Web/CSS/CSS_cascade/Cascade), Abhängigkeiten, Einheitumrechnung und der Anzeigumgebung. Dieser Leitfaden bietet einen Überblick über die Verarbeitungsschritte, die angewendet werden, um zu definieren, wie jeder CSS-Wert letztendlich gerendert wird, indem Schlüsselkonzepte wie spezifizierte, berechnete, verwendete und aktuelle Werte untersucht werden.

## Eigenschaftswerte

Der Wert jeder CSS-Eigenschaft stammt aus der Deklaration mit der größten {{cssxref("specificity")}}. Wenn zwei oder mehr Deklarationen mit derselben Spezifität unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, wird der Deklarationswert angewendet, dessen Selektor das größte algorithmische Gewicht hat.

Jeder Eigenschaftswert stammt aus einem einzelnen Eigenschaft-Wert-Paar; es wird ein einzelner Wert aus jeder Eigenschaft angewendet. Selbst wenn der Wert eine kommagetrennte Liste von Werten ist, stammt diese Werteliste aus einer einzigen Deklaration.

Um zu bestimmen, welcher spezifizierte Wert angewendet wird, sammelt und verarbeitet der User Agent alle Stile aus verschiedenen Quellen, wie z.B. Inline-Stilen sowie internen und externen Stylesheets.

Bestimmte Eigenschaften erben Werte von ihren Elternelementen, sofern sie nicht ausdrücklich überschrieben werden. [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) tritt auf, wenn keine Stilinformationen für eine bestimmte Eigenschaft auf einem Element existieren. Wenn die Eigenschaft vererbt wird, wird der Wert auf den [berechneten Wert](#berechneter_wert) des Elternelements gesetzt. Wenn die Eigenschaft nicht vererbt wird, wird ihr Wert auf den [Anfangswert](#anfangswert) für dieses Element gesetzt.

Der [Cascade-Algorithmus](/de/docs/Web/CSS/CSS_cascade/Cascade) bestimmt, welcher Wert angewendet werden soll, wenn mehrere widersprüchliche Stile dasselbe Element anvisieren. Der Cascade-Algorithmus definiert, wie User Agents Eigenschaftswerte aus verschiedenen Quellen, Kontexten und/oder Ebenen kombinieren. Wenn ein Selektor mit einem Element übereinstimmt, wird der [spezifizierte Wert](#spezifizierter_wert) der Eigenschaft aus dem Ursprung mit der höchsten Priorität angewendet, selbst wenn ein Selektor von einem Ursprung oder einer Ebene mit niedrigerer Priorität größere {{cssxref("specificity")}} aufweist.

Nach der Anwendung der Cascade-Regeln und der schrittweisen Auflösung von Werten stellt der Browser sicher, dass die visuelle Darstellung mit dem verarbeiteten CSS übereinstimmt.

## Verarbeitungsstufen

Alle Elemente, die Teil des abgeflachten Elementbaums des Dokuments sind, besitzen deklarierte, kaskadierte, spezifizierte, berechnete, verwendete und aktuelle Werte. Für eine bestimmte Eigenschaft können diese Werte gleich oder unterschiedlich sein. Zum Beispiel, wenn Ihr großer Codebestand das CSS `p { font-size: 1.25em; }` und Ihr HTML `<p>CSS macht Spaß!</p>` enthält, welche Größe wird der Absatz haben? Der {{cssxref("font-size")}}-Wert durchläuft einige Stufen, um vom spezifizierten `em`-Wert zum gerenderten `px`-Wert zu gelangen.

- [Anfangswert](#anfangswert)
- [Spezifizierter Wert](#spezifizierter_wert)
- [Berechneter Wert](#berechneter_wert)
- [Verwendeter Wert](#verwendeter_wert)

Diese Werte werden verwendet, um den endgültigen [gerenderten Wert](#gerenderte_werte) zu bestimmen.

### Anfangswert

Der **Anfangswert** einer Eigenschaft ist der Standardwert, der in der Definitionstabelle in der Spezifikation aufgeführt ist. Die Verwendung des Anfangswertes hängt davon ab, ob eine Eigenschaft vererbt wird oder nicht:

- Für [vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) wird der Anfangswert nur auf das _Wurzelelement_ angewendet, solange kein [spezifizierter Wert](#spezifizierter_wert) angegeben ist.
- Für [nicht vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties) wird der Anfangswert auf _alle Elemente_ angewendet, solange kein spezifizierter Wert angegeben ist.

Sie können den Anfangswert explizit mit dem {{cssxref("initial")}}-Schlüsselwort festlegen.

> [!NOTE]
> Der Anfangswert kann im Abschnitt zur formalen Syntax jeder CSS-Eigenschaftsreferenzseite gefunden werden. Zum Beispiel ist der [Anfangswert von `font-size` `medium`](/de/docs/Web/CSS/font-size#formal_definition). Der Anfangswert sollte nicht mit dem Wert verwechselt werden, der durch das Stylesheet des Browsers angegeben wird.

### Spezifizierter Wert

Der **spezifizierte Wert** ist der Wert, der ursprünglich in der CSS-Datei oder durch das `style`-Attribut zugewiesen wurde. Der spezifizierte Wert für eine gegebene Eigenschaft wird nach den folgenden Regeln bestimmt:

1. Wenn das Stylesheet des Dokuments explizit einen Wert für die Eigenschaft angibt, wird der angegebene Wert verwendet.
2. Wenn das Stylesheet des Dokuments keinen Wert angibt, es sich jedoch um eine vererbte Eigenschaft handelt, wird der Wert vom Elternelement übernommen.
3. Wenn keine der oben genannten Regeln zutrifft, wird der [Anfangswert](#anfangswert) des Elements verwendet.

Im Beispiel `p { font-size: 1.25em; }` ist der spezifizierte Wert `1.25em`, es sei denn, der Codebestand enthält eine `font-size`-Deklaration mit größerer {{cssxref("specificity")}}.

### Berechneter Wert

Der **berechnete Wert** einer Eigenschaft ist der Wert, der während der Vererbung von Eltern zu Kindern übertragen wird. Es ist das Ergebnis nach der Auflösung von relativen Einheiten und benutzerdefinierten Eigenschaften in absolute Werte, jedoch bevor layout-spezifische Informationen berücksichtigt werden.

Der berechnete Wert wird aus dem [spezifizierten Wert](#spezifizierter_wert) berechnet durch:

1. Das Behandeln der speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, und {{cssxref("unset")}}.
2. Das Durchführen der Berechnung, die erforderlich ist, um den Wert zu erreichen, der in der Linie „Berechneter Wert“ in der Definitionstabelle der Eigenschaft beschrieben ist.

Die Berechnung, die erforderlich ist, um den berechneten Wert einer Eigenschaft zu erreichen, umfasst normalerweise die Umwandlung von relativen Werten (wie denen in `em`-Einheiten oder Prozentsätzen) in absolute Werte. Zum Beispiel, wenn ein Element spezifizierte Werte `font-size: 16px` und `padding-top: 2em` hat, beträgt der berechnete Wert von `padding-top` `32px` (das Doppelte der Schriftgröße).

Jedoch werden für einige Eigenschaften (diese, bei denen Prozentsätze relativ zu etwas anderem sind, was das Layout zur Bestimmung erfordert, wie `width`, `margin-right`, `text-indent` und `top`), prozentual spezifizierte Werte zu prozentual berechneten Werten. Außerdem werden einheitslose Zahlen, die für die Eigenschaft `line-height` angegeben sind, zum berechneten Wert, so wie sie angegeben sind. Die relativen Werte, die im berechneten Wert verbleiben, werden zu absoluten, wenn der [verwendete Wert](#verwendeter_wert) bestimmt wird.

Angenommen, `p { font-size: 1.25em; }`, wenn `em` `16px` ist, wird die berechnete Schriftgröße für einen Absatz `20px` betragen.

### Verwendeter Wert

Der **verwendete Wert** ist der Wert der Eigenschaft, nachdem alle Berechnungen auf den [berechneten Wert](#berechneter_wert) angewendet wurden und er mit layout-spezifischen Details (z.B. in tatsächliche Pixelwerte aufgelöste Prozentsätze) verfeinert wurde.

Jede CSS-Eigenschaft hat einen verwendeten Wert. Die verwendeten Werte von Dimensionen (z.B. {{cssxref("width")}} oder {{cssxref("line-height")}}) sind in Pixeln angegeben. Die verwendeten Werte von Shorthand-Eigenschaften (z.B. {{cssxref("background")}}) stimmen mit denen ihrer Komponenten-Eigenschaften (z.B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}) sowie mit {{cssxref("position")}} und {{cssxref("float")}} überein.

Der verwendete Wert für die {{cssxref("width")}} oder {{cssxref("inline-size")}} eines Elements ist ein Pixelwert, selbst wenn der spezifizierte Wert der Eigenschaft mit Prozentsätzen oder Schlüsselwortwerten festgelegt wurde.

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

Während die drei spezifizierten Werte, `auto`, `50%` und `inherit`, Schlüsselwort- und {{cssxref("percentage")}}-Werte sind, liefert das Abrufen der `width` mit `window.getComputedStyle(el)["width"];` ein [absolutes Längenmaß](/de/docs/Web/CSS/length#absolute_length_units) im `px`-Wert:

{{ EmbedLiveSample('Example', '80%', 372) }}

Ändern Sie die Fenstergröße oder drehen Sie Ihr mobiles Gerät, um die Größe und die verwendeten Werte zu ändern.

## Gerenderte Werte

Der gerenderte Wert wird als [tatsächlicher Wert](#tatsächlicher_wert) bezeichnet, während der über ein Skript abgerufene Wert als [aufgelöster Wert](#aufgelöster_wert) bezeichnet wird.

### Tatsächlicher Wert

Der **tatsächliche Wert** einer Eigenschaft ist der [verwendete Wert](#verwendeter_wert) dieser Eigenschaft, nachdem alle erforderlichen Approximationen angewendet wurden. Es ist der endgültige gerenderte Wert, wie er vom Browser implementiert wird, einschließlich Anpassungen für Rendering-„Macken“ oder -Einschränkungen. Zum Beispiel kann ein {{Glossary("user_agent", "User Agent")}}, der nur Rahmen mit einer ganzen Pixelbreite rendern kann, die Dicke des Rahmens auf die nächste ganze Zahl runden.

Die Berechnung umfasst folgende Schritte:

1. Zuerst wird der [spezifizierte Wert](#spezifizierter_wert) basierend auf dem Ergebnis der [Kaskadierung](/de/docs/Web/CSS/CSS_cascade/Cascade), [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance), oder dem [Anfangswert](#anfangswert) bestimmt.
2. Anschließend wird der [berechnete Wert](#berechneter_wert) gemäß der Spezifikation berechnet (zum Beispiel wird ein `span` mit `position: absolute` seine berechnete `display` in `block` ändern).
3. Dann wird das Layout berechnet, was zum [verwendeten Wert](#verwendeter_wert) führt.
4. Schließlich wird der verwendete Wert gemäß den Einschränkungen der lokalen Umgebung transformiert, was zum tatsächlichen Wert führt.

### Aufgelöster Wert

Der **aufgelöste Wert** einer Eigenschaft ist der Wert, nachdem aktive Stylesheets angewendet wurden und alle grundlegenden Berechnungen, die diese Werte enthalten können, aufgelöst sind. Die Methode [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt ein Live-[`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zurück, das die aufgelösten Werte aller auf ein bestimmtes Element angewendeten CSS-Eigenschaften enthält. Jeder aufgelöste Wert ist entweder der [berechnete Wert](#berechneter_wert) oder der [verwendete Wert](#verwendeter_wert), je nach Eigenschaft.

Historisch gesehen hat `getComputedStyle()` den berechneten Wert eines Elements oder Pseudo-Elements zurückgegeben. Als CSS sich weiterentwickelte, änderte sich auch das Konzept des „berechneten Wertes“, aber die von `getComputedStyle()` zurückgegebenen Werte mussten aus Gründen der Rückwärtskompatibilität mit bereitgestellten Skripten gleich bleiben. Diese Werte sind die „aufgelösten Werte“.

Für die meisten Eigenschaften ist der aufgelöste Wert der berechnete Wert, aber für einige ältere Eigenschaften (einschließlich {{cssxref("width")}} und {{cssxref("height")}}) ist es der verwendete Wert. Die [CSSOM-Spezifikation](https://drafts.csswg.org/cssom/#resolved-values) bietet detaillierte Informationen pro Eigenschaft.

CSS 2.0 definierte den _berechneten Wert_ als den letzten Schritt in der Berechnung einer Eigenschaft. CSS 2.1 führte die detaillierte Definition des "verwendeten Wertes" ein. Ein Element konnte dann explizit die Breite/Höhe seines Elternteils vererben, dessen berechneter Wert ein Prozentsatz ist. Für CSS-Eigenschaften, die nicht vom Layout abhängen (z.B. `display`, `font-size`, oder `line-height`), sind die berechneten Werte und verwendeten Werte gleich. Die folgende Liste enthält die CSS 2.1-Eigenschaften, die \_vom Layout abhängen und daher unterschiedliche berechnete und verwendete Werte haben (übernommen aus [CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("top")}}
- {{cssxref("height")}}, {{cssxref("width")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## Siehe auch

- CSS-Werte zur Steuerung der Vererbung: [`inherit`](/de/docs/Web/CSS/inherit), [`initial`](/de/docs/Web/CSS/initial), [`revert`](/de/docs/Web/CSS/revert), [`revert-layer`](/de/docs/Web/CSS/revert-layer), und [`unset`](/de/docs/Web/CSS/unset)
- [CSS-Kaskadierung und -Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
