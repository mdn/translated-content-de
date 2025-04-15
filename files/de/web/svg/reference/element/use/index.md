---
title: <use>
slug: Web/SVG/Reference/Element/use
l10n:
  sourceCommit: 34c204f8f6c3f7ac60ebb23fca9798680aee9956
---

Das **`<use>`**-Element nimmt Knoten aus dem SVG-Dokument und dupliziert sie an anderer Stelle.
Der Effekt ist derselbe, als ob die Knoten tief in ein nicht-offen gelegtes DOM geklont und dann eingefügt würden, wo das `use`-Element ist, ähnlich wie geklonte [Template-Elemente](/de/docs/Web/HTML/Reference/Elements/template).

## Beispiel

Das folgende Beispiel zeigt, wie Sie das `use`-Element verwenden, um einen Kreis mit einer anderen Füll- und Strichfarbe zu zeichnen.
Im letzten Kreis wird `stroke="red"` ignoriert, da der Strich bereits auf `myCircle` gesetzt wurde.

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
  - : Die URL zu einem Element/Fragment, das dupliziert werden muss. Siehe [Benutzungshinweise](#verwendungshinweise) für Details zu häufigen Fallstricken.<br/> _Werttyp_: [**`<URL>`**](/de/docs/Web/SVG/Guides/Content_type#url); _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{Deprecated_Inline}}
  - : Eine [`<IRI>`](/de/docs/Web/SVG/Guides/Content_type#iri)-Referenz zu einem Element/Fragment, das dupliziert werden muss. Wenn sowohl {{SVGAttr("href")}} als auch {{SVGAttr("xlink:href")}} vorhanden sind, wird der Wert von {{SVGAttr("href")}} verwendet.<br/> _Werttyp_: [**`<IRI>`**](/de/docs/Web/SVG/Guides/Content_type#iri); _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("x")}}
  - : Die x-Koordinate einer zusätzlichen endgültigen Offset-Transformation, die auf das `<use>`-Element angewendet wird.<br/> _Werttyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Guides/Content_type#coordinate); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Die y-Koordinate einer zusätzlichen endgültigen Offset-Transformation, die auf das `<use>`-Element angewendet wird.<br/> _Werttyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Guides/Content_type#coordinate); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Die Breite des Use-Elements.<br/> _Werttyp_: [**`<length>`**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("height")}}
  - : Die Höhe des Use-Elements.<br/> _Werttyp_: [**`<length>`**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0`; _Animierbar_: **ja**

> **Hinweis:** `width` und `height` haben keine Wirkung auf `use`-Elemente, es sei denn, das referenzierte Element hat ein [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox) - d.h. sie haben nur dann eine Wirkung, wenn `use` auf ein `svg`- oder `symbol`-Element verweist.

> [!NOTE]
> Ab SVG2 sind `x`, `y`, `width` und `height` _Geometrieeigenschaften_, was bedeutet, dass diese Attribute auch als CSS-Eigenschaften für das Element verwendet werden können.

## Verwendungshinweise

Die meisten Attribute auf `use` werden ignoriert, wenn das entsprechende Attribut bereits auf dem vom `use` referenzierten Element definiert ist. (Dies unterscheidet sich davon, wie CSS-Stilattributen solche, die 'früher' in der Kaskade gesetzt wurden, überschreiben).
**Nur** die Attribute {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}} und {{SVGAttr("href")}} auf dem `use`-Element werden möglicherweise oder wahrscheinlich eine Wirkung haben, die später beschrieben wird, wenn das referenzierte Element bereits das entsprechende Attribut definiert hat. Jedoch werden _alle anderen Attribute_, die nicht auf dem referenzierten Element gesetzt sind, **auf das `use`-Element angewendet werden**.

Da die geklonten Knoten nicht offen gelegt werden, muss beim Verwenden von [CSS](/de/docs/Web/CSS) zur Gestaltung eines `use`-Elements und seiner geklonten Nachfahren Vorsicht geboten sein. CSS-Eigenschaften werden nicht garantiert von dem geklonten DOM übernommen, es sei denn, Sie fordern dies explizit über [CSS inheritance](/de/docs/Web/CSS/CSS_cascade/Inheritance) an.

Aus Sicherheitsgründen können Browser die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) auf `use`-Elemente anwenden und können sich weigern, eine Cross-Origin-URL im {{SVGAttr("href")}}-Attribut zu laden. Derzeit gibt es keinen definierten Weg, um eine Cross-Origin-Policy für `use`-Elemente festzulegen.

> [!WARNING]
> Das Laden von Ressourcen mit Daten-URIs im `href`-Attribut ist aus Sicherheitsgründen veraltet.
> Dies gilt für `<use href="data:...` und auch, wenn `href` durch die Methoden [`set`](/de/docs/Web/SVG/Reference/Element/set) oder [`setAttribute`](/de/docs/Web/API/Element/setAttribute) gesetzt wird.
> Siehe "Laden von data: URI" in der [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle, um die Unterstützung in verschiedenen Browserversionen zu überprüfen.

> [!WARNING]
> Seit SVG 2 ist das {{SVGAttr("xlink:href")}}-Attribut zugunsten von {{SVGAttr("href")}} veraltet. Weitere Informationen finden Sie auf der Seite {{SVGAttr("xlink:href")}}.

## Verwendungszusammenhang

{{SVGInfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
