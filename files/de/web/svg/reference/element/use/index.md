---
title: <use>
slug: Web/SVG/Reference/Element/use
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das **`<use>`**-Element nimmt Knoten aus dem SVG-Dokument und dupliziert sie an anderer Stelle.
Der Effekt ist derselbe, als ob die Knoten in einem nicht sichtbaren DOM tief geklont und dann dort eingefügt würden, wo das `use`-Element ist, ähnlich wie geklonte [Template-Elemente](/de/docs/Web/HTML/Reference/Elements/template).

## Beispiel

Das folgende Beispiel zeigt, wie das `use`-Element verwendet wird, um einen Kreis mit einer anderen Füll- und Strichfarbe zu zeichnen.
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
  - : Die URL zu einem Element/Fragment, das dupliziert werden muss. Siehe [Verwendungsnotizen](#verwendungsnotizen) für Details zu häufigen Fallstricken.<br/> _Wertetyp_: [**`<URL>`**](/de/docs/Web/SVG/Guides/Content_type#url) ; _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{Deprecated_Inline}}
  - : Ein [`<IRI>`](/de/docs/Web/SVG/Guides/Content_type#iri)-Referenz zu einem Element/Fragment, das dupliziert werden muss. Wenn sowohl {{SVGAttr("href")}} als auch {{SVGAttr("xlink:href")}} vorhanden sind, wird der Wert von {{SVGAttr("href")}} verwendet.<br/> _Wertetyp_: [**`<IRI>`**](/de/docs/Web/SVG/Guides/Content_type#iri) ; _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("x")}}
  - : Die x-Koordinate einer zusätzlichen endgültigen Versatztransformation, die auf das `<use>`-Element angewendet wird.<br/> _Wertetyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Guides/Content_type#coordinate) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Die y-Koordinate einer zusätzlichen endgültigen Versatztransformation, die auf das `<use>`-Element angewendet wird.<br/> _Wertetyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Guides/Content_type#coordinate) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Die Breite des use-Elements.<br/> _Wertetyp_: [**`<length>`**](/de/docs/Web/SVG/Guides/Content_type#length) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("height")}}
  - : Die Höhe des use-Elements.<br/> _Wertetyp_: [**`<length>`**](/de/docs/Web/SVG/Guides/Content_type#length) ; _Standardwert_: `0`; _Animierbar_: **ja**

> **Hinweis:** `width` und `height` haben keine Wirkung auf `use`-Elemente, es sei denn, das referenzierte Element hat ein [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox) - d.h. sie haben nur eine Wirkung, wenn `use` sich auf ein `svg`- oder `symbol`-Element bezieht.

> [!NOTE]
> Ab SVG2 sind `x`, `y`, `width` und `height` _Geometrie-Eigenschaften_, was bedeutet, dass diese Attribute auch als CSS-Eigenschaften für dieses Element verwendet werden können.

## Verwendungsnotizen

Die meisten Attribute auf `use` werden ignoriert, wenn das entsprechende Attribut bereits auf dem vom `use` referenzierten Element definiert ist. (Dies unterscheidet sich davon, wie CSS-Stilattributen früher in der Kaskade überschrieben wurden).
**Nur** die Attribute {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}} und {{SVGAttr("href")}} auf dem `use`-Element werden oder können eine Wirkung haben, die später beschrieben wird, wenn das referenzierte Element das entsprechende Attribut bereits definiert hat. Allerdings werden _alle anderen Attribute_, die nicht auf dem referenzierten Element gesetzt sind, **auf das `use`-Element angewendet werden**.

Da die geklonten Knoten nicht sichtbar sind, muss mit Sorgfalt vorgegangen werden, wenn [CSS](/de/docs/Web/CSS) verwendet wird, um ein `use`-Element und seine geklonten Nachkommen zu stylen. CSS-Eigenschaften sind nicht garantiert, von dem geklonten DOM geerbt zu werden, es sei denn, Sie verlangen dies ausdrücklich mit [CSS-Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance).

Aus Sicherheitsgründen können Browser die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) auf `use`-Elemente anwenden und können sich weigern, eine Cross-Origin-URL im {{SVGAttr("href")}} Attribut zu laden. Derzeit gibt es keine definierte Möglichkeit, eine Cross-Origin-Policy für `use`-Elemente festzulegen.

> [!WARNING]
> Das Laden von Ressourcen mit Daten-URIs im `href`-Attribut ist aus Sicherheitsgründen veraltet.
> Dies gilt für `<use href="data:...` und auch beim Setzen von `href` mittels [`set`](/de/docs/Web/SVG/Reference/Element/set) oder [`setAttribute`](/de/docs/Web/API/Element/setAttribute)-Methode.
> Siehe "Laden von data: URI" in der [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle, um die Unterstützung in verschiedenen Browserversionen zu prüfen.

> [!WARNING]
> Seit SVG 2 ist das {{SVGAttr("xlink:href")}}-Attribut zugunsten von {{SVGAttr("href")}} veraltet. Weitere Informationen finden Sie auf der {{SVGAttr("xlink:href")}}-Seite.

## Verwendungskontext

{{SVGInfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
