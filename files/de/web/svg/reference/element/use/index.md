---
title: <use>
slug: Web/SVG/Reference/Element/use
l10n:
  sourceCommit: 7833497591090148ecb78e7024004c02f276f44f
---

Das **`<use>`**-Element nimmt Knoten aus einem SVG-Dokument und dupliziert sie an einer anderen Stelle.
Der Effekt ist derselbe, als ob die Knoten tief in einen nicht zugänglichen DOM geklont und dann dort eingefügt würden, wo das `<use>`-Element ist, ähnlich wie geklonte {{HTMLElement("template")}}-Elemente.

## Beispiel

Das folgende Beispiel zeigt, wie man das `<use>`-Element verwendet, um einen Kreis mit einer anderen Füll- und Strichfarbe zu zeichnen.
Beim letzten Kreis wird `stroke="red"` ignoriert, da der Strich bereits auf `myCircle` gesetzt wurde.

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
  - : Die URL zu einem Element/Fragment, das dupliziert werden muss. Siehe [Nutzungshinweise](#nutzungshinweise) für Details zu häufigen Fallstricken.<br/> _Werttyp_: [**`<URL>`**](/de/docs/Web/SVG/Guides/Content_type#url); _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{Deprecated_Inline}}
  - : Eine [`<IRI>`](/de/docs/Web/SVG/Guides/Content_type#iri)-Referenz zu einem Element/Fragment, das dupliziert werden muss. Wenn sowohl {{SVGAttr("href")}} als auch {{SVGAttr("xlink:href")}} vorhanden sind, wird der durch {{SVGAttr("href")}} angegebene Wert verwendet.<br/> _Werttyp_: [**`<IRI>`**](/de/docs/Web/SVG/Guides/Content_type#iri); _Standardwert_: keiner; _Animierbar_: **ja**
    > [!WARNING]
    > Seit SVG 2 ist das {{SVGAttr("xlink:href")}} Attribut zugunsten von {{SVGAttr("href")}} veraltet. Siehe {{SVGAttr("xlink:href")}} Seite für weitere Informationen.
- {{SVGAttr("x")}}
  - : Die x-Koordinate einer zusätzlichen endgültigen Offset-Transformation, die auf das `<use>`-Element angewendet wird.<br/> _Werttyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Guides/Content_type#coordinate); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Die y-Koordinate einer zusätzlichen endgültigen Offset-Transformation, die auf das `<use>`-Element angewendet wird.<br/> _Werttyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Guides/Content_type#coordinate); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Die Breite des `<use>`-Elements.<br/> _Werttyp_: [**`<length>`**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("height")}}
  - : Die Höhe des `<use>`-Elements.<br/> _Werttyp_: [**`<length>`**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0`; _Animierbar_: **ja**

> **Hinweis:** `width` und `height` haben keinen Effekt auf `<use>`-Elemente, es sei denn, das referenzierte Element hat ein [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox) - d.h. sie haben nur eine Wirkung, wenn `<use>` sich auf ein `<svg>`- oder `<symbol>`-Element bezieht.

> [!NOTE]
> Ab SVG2 sind `x`, `y`, `width` und `height` _Geometrieeigenschaften_, was bedeutet, dass diese Attribute auch als CSS-Eigenschaften für dieses Element verwendet werden können.

## Nutzungshinweise

Die meisten Attribute auf `<use>` werden ignoriert, wenn das entsprechende Attribut bereits auf dem Element _referenziert_ durch `<use>` definiert ist. (Dies unterscheidet sich davon, wie CSS-Stilattributen die 'früher' in der Cascade gesetzt wurden übersteuern).
**Nur** die Attribute {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}} und {{SVGAttr("href")}} auf dem `<use>`-Element haben oder können eine Wirkung haben, wenn das referenzierte Element bereits das entsprechende Attribut definiert hat. Allerdings werden _alle anderen Attribute_, die auf dem referenzierten Element nicht gesetzt sind, **auf** das `<use>`-Element angewendet.

Da die geklonten Knoten nicht zugänglich sind, muss beim Styling eines `<use>`-Elements und seiner geklonten Nachkommen mit [CSS](/de/docs/Web/CSS) Vorsicht walten gelassen werden. CSS-Eigenschaften werden nur dann vererbt, wenn Sie dies ausdrücklich mit [CSS-Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) anfordern.

Aus Sicherheitsgründen können Browser die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) auf `<use>`-Elemente anwenden und möglicherweise die Ladeerlaubnis für eine Cross-Origin-URL im {{SVGAttr("href")}}-Attribut verweigern. Derzeit gibt es keine definierte Möglichkeit, eine Cross-Origin-Richtlinie für `<use>`-Elemente festzulegen.

### Laden von Ressourcen aus externen Dateien über `<use>`

Sie können Knoten aus einer externen SVG-Datei über das `<use>`-Element laden, indem Sie den Pfad zur Datei gefolgt von einem URL-Fragment angeben, das auf die `id` des zu ladenden Knotens verweist:

```html
<svg>
  <use href="../assets/my-svg.svg#my-fragment"></use>
</svg>
```

Historisch gesehen war das URL-Fragment immer erforderlich, auch wenn Sie nur das gesamte SVG-Dokument laden wollten. In einem solchen Fall wäre die `id` auf dem SVG-Root-Element enthalten:

```html
<svg xmlns="http://www.w3.org/2000/svg" id="my-fragment">
  <circle cx="150" cy="100" r="80" fill="green" />
</svg>
```

Moderne Implementierungen wurden jedoch aktualisiert, sodass, wenn Sie das gesamte externe Dokument laden möchten, darauf verwiesen werden kann, ohne ein URL-Fragment (und die `id` ist nicht mehr auf dem SVG-Dokument-Wurzelelement erforderlich):

```html
<svg>
  <use href="../assets/my-svg.svg"></use>
</svg>
```

Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle für die Unterstützung durch Browser.

### Laden von Ressourcen aus Daten-URIs über `<use>`

Das Laden von Ressourcen mit Daten-URIs im `href`-Attribut ist aus Sicherheitsgründen veraltet. Dies gilt für `<use href="data:...` und auch wenn `href` durch Verwendung der [`set`](/de/docs/Web/SVG/Reference/Element/set) oder [`setAttribute`](/de/docs/Web/API/Element/setAttribute) Methode gesetzt wird.

Überprüfen Sie erneut die [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle für die Unterstützung durch Browser.

## Nutzungskontext

{{SVGInfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
