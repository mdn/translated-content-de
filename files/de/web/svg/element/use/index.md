---
title: <use>
slug: Web/SVG/Element/use
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{SVGRef}}

Das **`<use>`**-Element nimmt Knoten aus dem SVG-Dokument und dupliziert sie an einer anderen Stelle. Der Effekt ist derselbe, als ob die Knoten tief in einen nicht zugänglichen DOM geklont und dann dort eingefügt würden, wo sich das `use`-Element befindet, ähnlich wie geklonte [template-Elemente](/de/docs/Web/HTML/Element/template).

## Beispiel

Das folgende Beispiel zeigt, wie das `use`-Element verwendet wird, um einen Kreis mit unterschiedlichen Füll- und Strichfarben zu zeichnen. Beim letzten Kreis wird `stroke="red"` ignoriert, da der Strich bereits im `myCircle`-Element festgelegt wurde.

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
  - : Die URL zu einem Element/Fragment, das dupliziert werden soll. Siehe [Verwendungsnotizen](#verwendungsnotizen) für Details zu häufigen Fallstricken.<br/> _Werttyp_: [**`<URL>`**](/de/docs/Web/SVG/Content_type#url) ; _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{Deprecated_Inline}}
  - : Eine [`<IRI>`](/de/docs/Web/SVG/Content_type#iri)-Referenz zu einem Element/Fragment, das dupliziert werden soll. Wenn sowohl {{SVGAttr("href")}} als auch {{SVGAttr("xlink:href")}} vorhanden sind, wird der Wert aus {{SVGAttr("href")}} verwendet.<br/> _Werttyp_: [**`<IRI>`**](/de/docs/Web/SVG/Content_type#iri) ; _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("x")}}
  - : Die x-Koordinate einer zusätzlichen End-Offset-Transformation, die auf das `<use>`-Element angewendet wird.<br/> _Werttyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Content_type#coordinate) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Die y-Koordinate einer zusätzlichen End-Offset-Transformation, die auf das `<use>`-Element angewendet wird.<br/> _Werttyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Content_type#coordinate) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Die Breite des `use`-Elements.<br/> _Werttyp_: [**`<length>`**](/de/docs/Web/SVG/Content_type#length) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("height")}}
  - : Die Höhe des `use`-Elements.<br/> _Werttyp_: [**`<length>`**](/de/docs/Web/SVG/Content_type#length) ; _Standardwert_: `0`; _Animierbar_: **ja**

> **Hinweis:** `width` und `height` haben keine Wirkung auf `use`-Elemente, es sei denn, das referenzierte Element hat eine [viewBox](/de/docs/Web/SVG/Attribute/viewBox) – d. h. sie wirken sich nur aus, wenn `use` sich auf ein `svg`- oder `symbol`-Element bezieht.

> [!NOTE]
> Ab SVG2 sind `x`, `y`, `width` und `height` _Geometrie-Eigenschaften_, was bedeutet, dass diese Attribute auch als CSS-Eigenschaften für dieses Element verwendet werden können.

## Verwendungsnotizen

Die meisten Attribute von `use` werden ignoriert, wenn das entsprechende Attribut bereits auf dem durch `use` referenzierten Element definiert ist. (Dies unterscheidet sich von der Art und Weise, wie CSS-Stilattribut-Werte frühere Werte in der Kaskade überschreiben). **Nur** die Attribute {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}} und {{SVGAttr("href")}} am `use`-Element wirken sich möglicherweise oder teilweise aus, wenn das referenzierte Element bereits das entsprechende Attribut definiert hat. Jedoch werden **alle anderen Attribute**, die nicht auf dem referenzierten Element gesetzt sind, auf das `use`-Element angewendet.

Da die geklonten Knoten nicht sichtbar sind, ist Vorsicht geboten, wenn [CSS](/de/docs/Web/CSS) verwendet wird, um ein `use`-Element und dessen geklonte Nachkommen zu stylen. CSS-Eigenschaften werden nur geerbt, wenn dies explizit über [CSS-Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) angefordert wird.

Aus Sicherheitsgründen können Browser die [Same-Origin-Richtlinie](/de/docs/Web/Security/Same-origin_policy) auf `use`-Elemente anwenden und möglicherweise eine URL für {{SVGAttr("href")}} ablehnen, die von einer anderen Domain stammt. Derzeit gibt es keine definierte Methode, eine Cross-Origin-Richtlinie für `use`-Elemente festzulegen.

> [!WARNING]
> Das Laden von Ressourcen mit `data:`-URIs im `href` Attribut ist aus Sicherheitsgründen veraltet. Dies gilt sowohl für `<use href="data:...` als auch beim Setzen von `href` mit der Methode [`set`](/de/docs/Web/SVG/Element/set) oder [`setAttribute`](/de/docs/Web/API/Element/setAttribute). Siehe "Load from data: URI" in der [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle, um die Unterstützung in verschiedenen Browser-Versionen zu überprüfen.

> [!WARNING]
> Seit SVG 2 ist das {{SVGAttr("xlink:href")}}-Attribut zugunsten von {{SVGAttr("href")}} veraltet. Weitere Informationen finden Sie auf der {{SVGAttr("xlink:href")}}-Seite.

## Einsatzkontext

{{SVGInfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
