---
title: <use>
slug: Web/SVG/Element/use
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{SVGRef}}

Das **`<use>`**-Element nimmt Knoten aus dem SVG-Dokument und dupliziert sie an anderer Stelle.
Der Effekt ist derselbe, als ob die Knoten tief in einen nicht freigelegten DOM geklont und dann dort eingefügt würden, wo sich das `use`-Element befindet, ähnlich wie geklonte [Template-Elemente](/de/docs/Web/HTML/Element/template).

## Beispiel

Das folgende Beispiel zeigt, wie das `use`-Element verwendet wird, um einen Kreis mit unterschiedlicher Füll- und Strichfarbe zu zeichnen.
Beim letzten Kreis wird `stroke="red"` ignoriert, da der Strich bereits auf `myCircle` gesetzt war.

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
  - : Die URL zu einem Element/Fragment, das dupliziert werden muss. Siehe [Verwendungshinweise](#verwendungshinweise) für Details zu häufigen Stolperfallen.<br/> _Werttyp_: [**`<URL>`**](/de/docs/Web/SVG/Content_type#url) ; _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{Deprecated_Inline}}
  - : Ein [`<IRI>`](/de/docs/Web/SVG/Content_type#iri)-Verweis auf ein Element/Fragment, das dupliziert werden muss. Wenn sowohl {{SVGAttr("href")}} als auch {{SVGAttr("xlink:href")}} vorhanden sind, wird der Wert von {{SVGAttr("href")}} verwendet.<br/> _Werttyp_: [**`<IRI>`**](/de/docs/Web/SVG/Content_type#iri) ; _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("x")}}
  - : Die x-Koordinate einer zusätzlichen finalen Offset-Transformation, die auf das `<use>`-Element angewendet wird.<br/> _Werttyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Content_type#coordinate) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Die y-Koordinate einer zusätzlichen finalen Offset-Transformation, die auf das `<use>`-Element angewendet wird.<br/> _Werttyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Content_type#coordinate) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Die Breite des `use`-Elements.<br/> _Werttyp_: [**`<length>`**](/de/docs/Web/SVG/Content_type#length) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("height")}}
  - : Die Höhe des `use`-Elements.<br/> _Werttyp_: [**`<length>`**](/de/docs/Web/SVG/Content_type#length) ; _Standardwert_: `0`; _Animierbar_: **ja**

> **Hinweis:** `width`, und `height` haben keinen Effekt auf `use`-Elemente, es sei denn, das referenzierte Element hat ein [viewBox](/de/docs/Web/SVG/Attribute/viewBox) - d.h., sie haben nur Einfluss, wenn `use` auf ein `svg`- oder `symbol`-Element verweist.

> [!NOTE]
> Seit SVG2 sind `x`, `y`, `width`, und `height` _Geometrie-Eigenschaften_, was bedeutet, dass diese Attribute auch als CSS-Eigenschaften für dieses Element verwendet werden können.

## Verwendungshinweise

Die meisten Attribute auf `use` werden ignoriert, wenn das entsprechende Attribut bereits auf dem vom `use` referenzierten Element definiert ist. (Dies unterscheidet sich davon, wie CSS-Stilattributen, die 'früher' in der Kaskade gesetzt wurden, Vorrang eingeräumt wird).
**Nur** die Attribute {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}} und {{SVGAttr("href")}} auf dem `use`-Element werden oder können eine Wirkung haben, wie später beschrieben, wenn das referenzierte Element das entsprechende Attribut bereits definiert hat. Jegliche _anderen Attribute_, die nicht auf dem referenzierten Element gesetzt sind, **werden** jedoch auf das `use`-Element angewendet.

Da die geklonten Knoten nicht freigelegt sind, muss beim Verwenden von [CSS](/de/docs/Web/CSS), um ein `use`-Element und seine geklonten Nachkommen zu stylen, Vorsicht geboten sein. CSS-Eigenschaften werden nicht garantiert vom geklonten DOM geerbt, es sei denn, Sie fordern dies explizit mittels [CSS-Vererbung](/de/docs/Web/CSS/Inheritance) an.

Aus Sicherheitsgründen können Browser die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) auf `use`-Elemente anwenden und das Laden einer Cross-Origin-URL im {{SVGAttr("href")}}-Attribut verweigern. Derzeit gibt es keine definierte Methode, um eine Cross-Origin-Policy für `use`-Elemente festzulegen.

> [!WARNING]
> Das Laden von Ressourcen mit Daten-URIs im `href`-Attribut ist aus Sicherheitsgründen veraltet.
> Dies gilt für `<use href="data:...` und auch beim Setzen von `href` mittels der [`set`](/de/docs/Web/SVG/Element/set) oder [`setAttribute`](/de/docs/Web/API/Element/setAttribute)-Methode.
> Siehe „Laden von Daten: URI“ in der [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle, um die Unterstützung in verschiedenen Browserversionen zu überprüfen.

> [!WARNING]
> Seit SVG 2 ist das {{SVGAttr("xlink:href")}}-Attribut zugunsten von {{SVGAttr("href")}} veraltet. Weitere Informationen finden Sie auf der Seite über {{SVGAttr("xlink:href")}}.

## Nutzungskontext

{{SVGInfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
