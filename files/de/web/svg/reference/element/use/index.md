---
title: <use>
slug: Web/SVG/Reference/Element/use
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`<use>`**-Element nimmt Knoten aus dem SVG-Dokument und dupliziert sie an einer anderen Stelle.
Der Effekt ist derselbe, als ob die Knoten tief in ein nicht freigelegtes DOM geklont und dann dort eingefügt würden, wo sich das `use`-Element befindet, ähnlich wie geklonte [Vorlagen-Elemente](/de/docs/Web/HTML/Element/template).

## Beispiel

Das folgende Beispiel zeigt, wie das `use`-Element verwendet wird, um einen Kreis mit einer anderen Füll- und Strichfarbe zu zeichnen.
Im letzten Kreis wird `stroke="red"` ignoriert, weil stroke bereits auf `myCircle` gesetzt wurde.

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
  - : Die URL zu einem Element/Fragment, das dupliziert werden muss. Siehe [Hinweise zur Verwendung](#hinweise_zur_verwendung) für Details zu häufigen Stolpersteinen.<br/> _Wertetyp_: [**`<URL>`**](/de/docs/Web/SVG/Guides/Content_type#url) ; _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{Deprecated_Inline}}
  - : Ein [`<IRI>`](/de/docs/Web/SVG/Guides/Content_type#iri)-Verweis auf ein Element/Fragment, das dupliziert werden muss. Wenn sowohl {{SVGAttr("href")}} als auch {{SVGAttr("xlink:href")}} vorhanden sind, wird der Wert von {{SVGAttr("href")}} verwendet.<br/> _Wertetyp_: [**`<IRI>`**](/de/docs/Web/SVG/Guides/Content_type#iri) ; _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("x")}}
  - : Die x-Koordinate einer zusätzlichen finalen Offset-Transformation, die auf das `<use>`-Element angewendet wird.<br/> _Wertetyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Guides/Content_type#coordinate) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Die y-Koordinate einer zusätzlichen finalen Offset-Transformation, die auf das `<use>`-Element angewendet wird.<br/> _Wertetyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Guides/Content_type#coordinate) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Die Breite des use-Elements.<br/> _Wertetyp_: [**`<length>`**](/de/docs/Web/SVG/Guides/Content_type#length) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("height")}}
  - : Die Höhe des use-Elements.<br/> _Wertetyp_: [**`<length>`**](/de/docs/Web/SVG/Guides/Content_type#length) ; _Standardwert_: `0`; _Animierbar_: **ja**

> **Hinweis:** `width` und `height` haben keinen Effekt auf `use`-Elemente, es sei denn, das referenzierte Element hat einen [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox) - d.h. sie haben nur eine Auswirkung, wenn `use` auf ein `svg`- oder `symbol`-Element verweist.

> [!NOTE]
> Ab SVG2 sind `x`, `y`, `width` und `height` _Geometrie-Eigenschaften_, was bedeutet, dass diese Attribute auch als CSS-Eigenschaften für dieses Element verwendet werden können.

## Hinweise zur Verwendung

Die meisten Attribute auf `use` werden ignoriert, wenn das entsprechende Attribut bereits auf dem von `use` _referenzierten_ Element definiert ist. (Dies unterscheidet sich davon, wie CSS-Stilattribute die 'früher' im Cascade gesetzten überschreiben).
**Nur** die Attribute {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}} und {{SVGAttr("href")}} auf dem `use`-Element werden oder können eine Wirkung haben, wie später beschrieben, wenn das referenzierte Element das entsprechende Attribut bereits definiert hat. Allerdings werden _alle anderen Attribute_, die nicht auf dem referenzierten Element gesetzt sind, auf das `use`-Element angewendet.

Da die geklonten Knoten nicht freigelegt sind, muss beim Verwenden von [CSS](/de/docs/Web/CSS) zur Stilgestaltung eines `use`-Elements und seiner geklonten Nachfahren Vorsicht walten lassen. CSS-Eigenschaften werden vom geklonten DOM nicht automatisch geerbt, es sei denn, Sie fordern ihre Vererbung ausdrücklich durch [CSS-Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) an.

Aus Sicherheitsgründen können Browser die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) auf `use`-Elemente anwenden und sich weigern, eine Cross-Origin-URL im {{SVGAttr("href")}}-Attribut zu laden. Derzeit gibt es keine definierte Möglichkeit, eine Cross-Origin-Policy für `use`-Elemente festzulegen.

> [!WARNING]
> Das Laden von Ressourcen mit data-URIs im href-Attribut ist aus Sicherheitsgründen veraltet.
> Dies gilt für `<use href="data:...` und auch wenn `href` mit der [`set`](/de/docs/Web/SVG/Reference/Element/set)- oder der [`setAttribute`](/de/docs/Web/API/Element/setAttribute)-Methode gesetzt wird.
> Siehe "Load from data: URI" in der [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle, um die Unterstützung in verschiedenen Browserversionen zu prüfen.

> [!WARNING]
> Seit SVG 2 ist das {{SVGAttr("xlink:href")}}-Attribut zugunsten von {{SVGAttr("href")}} veraltet. Weitere Informationen finden Sie auf der Seite von {{SVGAttr("xlink:href")}}.

## Verwendungskontext

{{SVGInfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
