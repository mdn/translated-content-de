---
title: <use>
slug: Web/SVG/Reference/Element/use
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Das **`<use>`**-Element nimmt Knoten aus dem SVG-Dokument und dupliziert sie an einer anderen Stelle.
Der Effekt ist derselbe, als ob die Knoten tief in einem nicht sichtbaren DOM geklont und dann dort eingefügt würden, wo sich das `use`-Element befindet, ähnlich wie bei geklonten [Vorlagenelementen (template)](/de/docs/Web/HTML/Element/template).

## Beispiel

Das folgende Beispiel zeigt, wie das `use`-Element verwendet wird, um einen Kreis mit unterschiedlichen Füll- und Randfarben zu zeichnen. Beim letzten Kreis wird `stroke="red"` ignoriert, da der Stroke bereits auf `myCircle` gesetzt war.

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
  - : Die URL zu einem Element/Fragment, das dupliziert werden muss. Siehe [Nutzungsbemerkungen](#nutzungsbemerkungen) für Details zu häufigen Fallstricken.<br/> _Werttyp_: [**`<URL>`**](/de/docs/Web/SVG/Guides/Content_type#url) ; _Standardwert_: none; _Animierbar_: **yes**
- {{SVGAttr("xlink:href")}} {{Deprecated_Inline}}
  - : Ein [`<IRI>`](/de/docs/Web/SVG/Guides/Content_type#iri)-Verweis auf ein Element/Fragment, das dupliziert werden muss. Wenn sowohl {{SVGAttr("href")}} als auch {{SVGAttr("xlink:href")}} vorhanden sind, wird der Wert von {{SVGAttr("href")}} verwendet.<br/> _Werttyp_: [**`<IRI>`**](/de/docs/Web/SVG/Guides/Content_type#iri) ; _Standardwert_: none; _Animierbar_: **yes**
- {{SVGAttr("x")}}
  - : Die x-Koordinate einer zusätzlichen Endversatztransformation, die auf das `<use>`-Element angewendet wird.<br/> _Werttyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Guides/Content_type#coordinate) ; _Standardwert_: `0`; _Animierbar_: **yes**
- {{SVGAttr("y")}}
  - : Die y-Koordinate einer zusätzlichen Endversatztransformation, die auf das `<use>`-Element angewendet wird.<br/> _Werttyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Guides/Content_type#coordinate) ; _Standardwert_: `0`; _Animierbar_: **yes**
- {{SVGAttr("width")}}
  - : Die Breite des use-Elements.<br/> _Werttyp_: [**`<length>`**](/de/docs/Web/SVG/Guides/Content_type#length) ; _Standardwert_: `0`; _Animierbar_: **yes**
- {{SVGAttr("height")}}
  - : Die Höhe des use-Elements.<br/> _Werttyp_: [**`<length>`**](/de/docs/Web/SVG/Guides/Content_type#length) ; _Standardwert_: `0`; _Animierbar_: **yes**

> **Hinweis:** `width` und `height` haben keinen Effekt auf `use`-Elemente, es sei denn, das referenzierte Element hat ein [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox) - d.h. sie haben nur eine Wirkung, wenn `use` auf ein `svg`- oder `symbol`-Element verweist.

> [!NOTE]
> Ab SVG2 sind `x`, `y`, `width` und `height` _Geometrie-Eigenschaften_, d.h. diese Attribute können auch als CSS-Eigenschaften für dieses Element verwendet werden.

## Nutzungsbemerkungen

Die meisten Attribute auf `use` werden ignoriert, wenn das entsprechende Attribut bereits auf dem von `use` _referenzierten_ Element definiert ist. (Dies unterscheidet sich davon, wie CSS-Stilattributen frühere Einstellungen in der Cascade überschreiben können). **Nur** die Attribute {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}} und {{SVGAttr("href")}} auf dem `use`-Element werden oder können einige Effekte haben, die später beschrieben werden, wenn das referenzierte Element das entsprechende Attribut bereits definiert hat. Allerdings werden _alle anderen Attribute_, die nicht auf dem referenzierten Element gesetzt sind, **auf das `use`-Element angewendet**.

Da die geklonten Knoten nicht sichtbar sind, muss beim Verwenden von [CSS](/de/docs/Web/CSS) zur Stilgestaltung eines `use`-Elements und seiner geklonten Nachkommen vorsichtig vorgegangen werden. CSS-Eigenschaften werden nicht garantiert auf das geklonte DOM vererbt, es sei denn, Sie fordern dies ausdrücklich durch [CSS-Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) an.

Aus Sicherheitsgründen können Browser die [Same-Origin-Richtlinie](/de/docs/Web/Security/Same-origin_policy) auf `use`-Elemente anwenden und verweigern möglicherweise das Laden einer Cross-Origin-URL im {{SVGAttr("href")}}-Attribut. Derzeit gibt es keine definierte Möglichkeit, eine Cross-Origin-Richtlinie für `use`-Elemente festzulegen.

> [!WARNING]
> Das Laden von Ressourcen mit Daten-URIs im `href`-Attribut ist aus Sicherheitsgründen veraltet.
> Dies betrifft sowohl `<use href="data:...` als auch das Setzen von `href` durch Verwenden der [`set`](/de/docs/Web/SVG/Reference/Element/set)- oder [`setAttribute`](/de/docs/Web/API/Element/setAttribute)-Methode.
> Siehe "Load from data: URI" in der [Browser-Kompatibilitätstabelle](#browser-kompatibilität), um die Unterstützung in verschiedenen Browserversionen zu überprüfen.

> [!WARNING]
> Seit SVG 2 ist das {{SVGAttr("xlink:href")}}-Attribut zugunsten von {{SVGAttr("href")}} veraltet. Weitere Informationen finden Sie auf der {{SVGAttr("xlink:href")}}-Seite.

## Nutzungskontext

{{SVGInfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
