---
title: <use>
slug: Web/SVG/Element/use
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{SVGRef}}

Das **`<use>`**-Element nimmt Knoten aus dem SVG-Dokument und dupliziert sie an einer anderen Stelle.
Der Effekt ist derselbe, als ob die Knoten tief in einen nicht zugänglichen DOM geklont und dann dort eingefügt würden, wo das `use`-Element ist, ähnlich wie geklonte [Template-Elemente](/de/docs/Web/HTML/Element/template).

## Beispiel

Das folgende Beispiel zeigt, wie das `use`-Element verwendet wird, um einen Kreis mit unterschiedlichen Füll- und Konturfarben zu zeichnen.
Im letzten Kreis wird `stroke="red"` ignoriert, weil die Kontur bereits auf `myCircle` festgelegt wurde.

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

## Attribute

- {{SVGAttr("href")}}
  - : Die URL zu einem Element/Fragment, das dupliziert werden muss. Siehe [Anmerkungen zur Verwendung](#anmerkungen_zur_verwendung) für Details zu häufigen Fallstricken.<br/> _Wertetyp_: [**`<URL>`**](/de/docs/Web/SVG/Content_type#url) ; _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{Deprecated_Inline}}
  - : Ein [`<IRI>`](/de/docs/Web/SVG/Content_type#iri)-Verweis auf ein Element/Fragment, das dupliziert werden muss. Wenn sowohl {{SVGAttr("href")}} als auch {{SVGAttr("xlink:href")}} vorhanden sind, wird der Wert von {{SVGAttr("href")}} verwendet.<br/> _Wertetyp_: [**`<IRI>`**](/de/docs/Web/SVG/Content_type#iri) ; _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("x")}}
  - : Die x-Koordinate einer zusätzlichen endgültigen Offset-Transformation, die auf das `<use>`-Element angewendet wird.<br/> _Wertetyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Content_type#coordinate) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Die y-Koordinate einer zusätzlichen endgültigen Offset-Transformation, die auf das `<use>`-Element angewendet wird.<br/> _Wertetyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Content_type#coordinate) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Die Breite des Use-Elements.<br/> _Wertetyp_: [**`<length>`**](/de/docs/Web/SVG/Content_type#length) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("height")}}
  - : Die Höhe des Use-Elements.<br/> _Wertetyp_: [**`<length>`**](/de/docs/Web/SVG/Content_type#length) ; _Standardwert_: `0`; _Animierbar_: **ja**

> **Hinweis:** `width` und `height` haben keine Wirkung auf `use`-Elemente, es sei denn, das referenzierte Element hat ein [viewBox](/de/docs/Web/SVG/Attribute/viewBox) - das heißt, sie haben nur eine Wirkung, wenn `use` sich auf ein `svg`- oder `symbol`-Element bezieht.

> [!NOTE]
> Ab SVG2 sind `x`, `y`, `width` und `height` _Geometrie Eigenschaften_, was bedeutet, dass diese Attribute auch als CSS-Eigenschaften für dieses Element verwendet werden können.

## Anmerkungen zur Verwendung

Die meisten Attribute auf `use` werden ignoriert, wenn das entsprechende Attribut bereits auf dem vom `use` referenzierten Element definiert ist. (Dies unterscheidet sich davon, wie CSS-Stilattribute diejenigen überschreiben, die 'früher' in der Kaskade gesetzt wurden).
**Nur** die Attribute {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}} und {{SVGAttr("href")}} am `use`-Element werden oder können einige Auswirkungen haben, wie später beschrieben, wenn das referenzierte Element das entsprechende Attribut bereits definiert hat. Jedoch werden _alle anderen Attribute_, die nicht auf dem referenzierten Element festgelegt sind, **auf** das `use`-Element angewendet.

Da die geklonten Knoten nicht sichtbar sind, muss Vorsicht walten, wenn Sie [CSS](/de/docs/Web/CSS) verwenden, um ein `use`-Element und seine geklonten Nachfahren zu stylen. CSS-Eigenschaften werden nicht garantiert von dem geklonten DOM geerbt, es sei denn, Sie fordern sie explizit durch [CSS-Vererbung](/de/docs/Web/CSS/Inheritance) an.

Aus Sicherheitsgründen können Browser die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) auf `use`-Elemente anwenden und sich möglicherweise weigern, eine URL in der {{SVGAttr("href")}}-Eigenschaft zu laden, die von einer anderen Herkunft stammt. Derzeit gibt es keine festgelegte Möglichkeit, eine Cross-Origin-Policy für `use`-Elemente festzulegen.

> [!WARNING]
> Das Laden von Ressourcen mit Daten-URIs im `href`-Attribut wird aus Sicherheitsgründen nicht mehr empfohlen.
> Dies gilt für `<use href="data:...` sowie beim Setzen von `href` mithilfe der [`set`](/de/docs/Web/SVG/Element/set) oder [`setAttribute`](/de/docs/Web/API/Element/setAttribute) Methode.
> Siehe "Load from data: URI" in der [Browser-Kompatibilität](#browser-kompatibilität), um die Unterstützung in verschiedenen Browserversionen zu überprüfen.

> [!WARNING]
> Seit SVG 2 ist das {{SVGAttr("xlink:href")}} Attribut zugunsten von {{SVGAttr("href")}} veraltet. Weitere Informationen finden Sie auf der {{SVGAttr("xlink:href")}} Seite.

## Verwendungskontext

{{SVGInfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
