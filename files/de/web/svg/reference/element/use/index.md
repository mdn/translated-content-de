---
title: <use>
slug: Web/SVG/Reference/Element/use
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

Das **`<use>`**-Element übernimmt Knoten aus einem SVG-Dokument und dupliziert sie an einer anderen Stelle.
Der Effekt ist derselbe, als ob die Knoten tief geklont und dann dort eingefügt würden, wo sich das `<use>`-Element befindet, ähnlich wie geklonte {{HTMLElement("template")}}-Elemente.

## Verwendungskontext

{{SVGInfo}}

## Attribute

- {{SVGAttr("href")}}
  - : Die URL zu einem Element/Fragment, das dupliziert werden muss. Siehe [Verwendungsnotizen](#verwendungsnotizen) für Details zu häufigen Fallstricken.<br/> _Werttyp_: [**`<URL>`**](/de/docs/Web/SVG/Guides/Content_type#url); _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{Deprecated_Inline}}
  - : Eine [`<IRI>`](/de/docs/Web/SVG/Guides/Content_type#iri)-Referenz zu einem Element/Fragment, das dupliziert werden muss. Wenn sowohl {{SVGAttr("href")}} als auch {{SVGAttr("xlink:href")}} vorhanden sind, wird der von {{SVGAttr("href")}} angegebene Wert verwendet.<br/> _Werttyp_: [**`<IRI>`**](/de/docs/Web/SVG/Guides/Content_type#iri); _Standardwert_: keiner; _Animierbar_: **ja**
    > [!WARNING]
    > Seit SVG 2 wird das Attribut {{SVGAttr("xlink:href")}} zugunsten von {{SVGAttr("href")}} als veraltet angesehen. Weitere Informationen finden Sie auf der Seite von {{SVGAttr("xlink:href")}}.
- {{SVGAttr("x")}}
  - : Die x-Koordinate einer zusätzlichen endgültigen Offset-Transformation, die auf das `<use>`-Element angewendet wird.<br/> _Werttyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Guides/Content_type#coordinate); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Die y-Koordinate einer zusätzlichen endgültigen Offset-Transformation, die auf das `<use>`-Element angewendet wird.<br/> _Werttyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Guides/Content_type#coordinate); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Die Breite des `<use>`-Elements.<br/> _Werttyp_: [**`<length>`**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("height")}}
  - : Die Höhe des `<use>`-Elements.<br/> _Werttyp_: [**`<length>`**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0`; _Animierbar_: **ja**

> **Hinweis:** `width` und `height` haben keine Wirkung auf `<use>`-Elemente, es sei denn, das referenzierte Element hat ein [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox) - d.h. sie haben nur eine Wirkung, wenn `<use>` auf ein `<svg>`- oder `<symbol>`-Element verweist.

> [!NOTE]
> Ab SVG2 sind `x`, `y`, `width` und `height` _Geometrie-Eigenschaften_, was bedeutet, dass diese Attribute auch als CSS-Eigenschaften für dieses Element verwendet werden können.

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGUseElement`](/de/docs/Web/API/SVGUseElement)-Schnittstelle.

## Beispiel

Das folgende Beispiel zeigt, wie das `<use>`-Element verwendet wird, um einen Kreis mit einer anderen Füll- und Strichfarbe zu zeichnen. Beim letzten Kreis wird `stroke="red"` ignoriert, da der Strich bereits bei `myCircle` gesetzt wurde.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <circle id="myCircle" cx="5" cy="5" r="4" stroke="blue" />
  <use href="#myCircle" x="10" fill="blue" />
  <use href="#myCircle" x="20" fill="white" stroke="red" />
</svg>
```

{{EmbedLiveSample('Example', 200, 200)}}

## Verwendungsnotizen

Die meisten Attribute auf `<use>` werden ignoriert, wenn das entsprechende Attribut bereits auf dem _referenzierten_ Element von `<use>` definiert ist. (Dies unterscheidet sich davon, wie CSS-Stilattribute diejenigen überschreiben, die früher im Kaskadierungsprozess gesetzt wurden).
**Nur** die Attribute {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}} und {{SVGAttr("href")}} auf dem `<use>`-Element haben oder können eine Wirkung haben, die später beschrieben wird, wenn das referenzierte Element das entsprechende Attribut bereits definiert hat. Allerdings werden _alle anderen Attribute_, die nicht auf dem referenzierten Element gesetzt sind, auf das `<use>`-Element angewendet.

Da die geklonten Knoten nicht sichtbar sind, muss beim Verwenden von [CSS](/de/docs/Web/CSS) zur Gestaltung eines `<use>`-Elements und seiner geklonten Nachkommen Vorsicht geboten sein. CSS-Eigenschaften werden möglicherweise nicht vom geklonten DOM übernommen, es sei denn, Sie fordern sie ausdrücklich mit [CSS-Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) an.

Aus Sicherheitsgründen können Browser die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) auf `<use>`-Elemente anwenden und möglicherweise das Laden einer Cross-Origin-URL im {{SVGAttr("href")}}-Attribut verweigern. Derzeit gibt es keinen definierten Weg, eine Cross-Origin-Policy für `<use>`-Elemente festzulegen.

### Laden von Ressourcen aus externen Dateien über `<use>`

Sie können Knoten aus einer externen SVG-Datei über das `<use>`-Element laden, indem Sie den Pfad der Datei gefolgt von einem URL-Fragment angeben, das auf die `id` des zu ladenden Knotens zeigt:

```html
<svg>
  <use href="../assets/my-svg.svg#my-fragment"></use>
</svg>
```

Historisch gesehen war das URL-Fragment immer erforderlich, selbst wenn Sie nur das gesamte SVG-Dokument laden wollten. In einem solchen Fall wurde die `id` auf dem SVG-Root-Element eingeschlossen:

```html
<svg xmlns="http://www.w3.org/2000/svg" id="my-fragment">
  <circle cx="150" cy="100" r="80" fill="green" />
</svg>
```

Moderne Implementierungen wurden jedoch aktualisiert, sodass, wenn Sie das gesamte externe Dokument laden möchten, Sie es ohne ein URL-Fragment referenzieren können (und die `id` ist nicht mehr erforderlich auf dem SVG-Dokument-Root-Element):

```html
<svg>
  <use href="../assets/my-svg.svg"></use>
</svg>
```

Prüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle für die Unterstützung durch Browser.

### Laden von Ressourcen aus Daten-URIs über `<use>`

Das Laden von Ressourcen mit Daten-URIs im `href`-Attribut ist aus Sicherheitsgründen veraltet. Dies gilt für `<use href="data:...` und auch wenn das `href` mithilfe der [`set`](/de/docs/Web/SVG/Reference/Element/set)- oder [`setAttribute`](/de/docs/Web/API/Element/setAttribute)-Methode gesetzt wird.

Überprüfen Sie erneut die [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle für die Unterstützung durch Browser.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
