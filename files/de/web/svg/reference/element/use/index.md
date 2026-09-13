---
title: <use>
slug: Web/SVG/Reference/Element/use
l10n:
  sourceCommit: 27bb49e1849433e05c964c8a645c448f184380ce
---

Das **`<use>`** Element nimmt Knoten aus einem SVG-Dokument und dupliziert sie an anderer Stelle. Der Effekt ist derselbe, als ob die Knoten tief in ein nicht offengelegtes DOM geklont und dann dort eingefügt würden, wo das `<use>` Element ist, ähnlich wie geklonte {{HTMLElement("template")}} Elemente.

## Einsatzkontext

{{svginfo}}

## Attribute

- {{SVGAttr("href")}}
  - : Die URL zu einem Element/Fragment, das dupliziert werden muss. Siehe [Nutzungshinweise](#nutzungshinweise) für Details zu häufigen Fallstricken.<br/> _Werttyp_: [**`<URL>`**](/de/docs/Web/SVG/Guides/Content_type#url); _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Eine [`<IRI>`](/de/docs/Web/SVG/Guides/Content_type#iri) Referenz zu einem Element/Fragment, das dupliziert werden muss. Wenn sowohl {{SVGAttr("href")}} als auch {{SVGAttr("xlink:href")}} vorhanden sind, wird der Wert von {{SVGAttr("href")}} verwendet.<br/> _Werttyp_: [**`<IRI>`**](/de/docs/Web/SVG/Guides/Content_type#iri); _Standardwert_: keiner; _Animierbar_: **ja**
    > [!WARNING]
    > Seit SVG 2 ist das {{SVGAttr("xlink:href")}} Attribut zugunsten von {{SVGAttr("href")}} veraltet. Siehe die {{SVGAttr("xlink:href")}} Seite für weitere Informationen.
- {{SVGAttr("x")}}
  - : Die x-Koordinate einer zusätzlichen, abschließenden Offset-Transformation, die auf das `<use>` Element angewendet wird.<br/> _Werttyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Guides/Content_type#coordinate); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Die y-Koordinate einer zusätzlichen, abschließenden Offset-Transformation, die auf das `<use>` Element angewendet wird.<br/> _Werttyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Guides/Content_type#coordinate); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Die Breite des `<use>` Elements.<br/> _Werttyp_: [**`<length>`**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("height")}}
  - : Die Höhe des `<use>` Elements.<br/> _Werttyp_: [**`<length>`**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0`; _Animierbar_: **ja**

> [!NOTE]
> `width` und `height` haben keine Wirkung auf `<use>` Elemente, es sei denn, das referenzierte Element hat einen [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox) - das heißt, sie haben nur eine Wirkung, wenn `<use>` sich auf ein `<svg>` oder `<symbol>` Element bezieht.

> [!NOTE]
> Ab SVG2 sind `x`, `y`, `width` und `height` _Geometrie-Eigenschaften_, was bedeutet, dass diese Attribute auch als CSS-Eigenschaften für dieses Element verwendet werden können.

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGUseElement`](/de/docs/Web/API/SVGUseElement) Schnittstelle.

## Beispiel

Das folgende Beispiel zeigt, wie das `<use>` Element verwendet wird, um mehrere Kreise mit unterschiedlichen Füll- und Strichfarben zu zeichnen.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <circle id="myCircle" cx="5" cy="5" r="4" />
  <use href="#myCircle" x="10" fill="blue" />
  <use href="#myCircle" x="20" fill="white" stroke="red" />
</svg>
```

{{EmbedLiveSample('Example', 200, 200)}}

## Nutzungshinweise

Die meisten Attribute auf `<use>` werden ignoriert, wenn das entsprechende Attribut bereits auf dem durch `<use>` referenzierten Element definiert ist. (Dies unterscheidet sich von der Art und Weise, wie CSS-Stilattributen Vorrang vor früher gesetzten in der Kaskade gegeben wird). **Nur** die Attribute {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}} und {{SVGAttr("href")}} auf dem `<use>` Element werden oder können einen Effekt haben, der nachfolgend beschrieben wird, wenn das referenzierte Element das entsprechende Attribut bereits definiert hat. **Alle anderen Attribute**, die nicht auf dem referenzierten Element gesetzt sind, **werden** jedoch auf das `<use>` Element angewendet.

Da die geklonten Knoten nicht offenliegen, muss beim Stylen eines `<use>` Elements und seiner geklonten Nachkommen mit [CSS](/de/docs/Web/CSS) Vorsicht walten gelassen werden. CSS-Eigenschaften werden nicht garantiert von dem geklonten DOM geerbt, es sei denn, Sie fordern dies ausdrücklich an, indem Sie [CSS-Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance) verwenden.

Aus Sicherheitsgründen können Browser die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) auf `<use>` Elemente anwenden und möglicherweise das Laden einer Cross-Origin-URL im {{SVGAttr("href")}} Attribut ablehnen. Derzeit gibt es keine definierte Möglichkeit, eine Cross-Origin-Richtlinie für `<use>` Elemente festzulegen.

### Laden von Ressourcen aus externen Dateien via `<use>`

Sie können Knoten aus einer externen SVG-Datei über das `<use>` Element laden, indem Sie den Pfad der Datei gefolgt von einem URL-Fragment angeben, das auf die `id` des zu ladenden Knotens zeigt:

```html
<svg>
  <use href="../assets/my-svg.svg#my-fragment"></use>
</svg>
```

Historisch gesehen war das URL-Fragment immer erforderlich, selbst wenn Sie nur das gesamte SVG-Dokument laden wollten. In einem solchen Fall würde die `id` auf dem SVG-Wurzelelement enthalten sein:

```html
<svg xmlns="http://www.w3.org/2000/svg" id="my-fragment">
  <circle cx="150" cy="100" r="80" fill="green" />
</svg>
```

Moderne Implementierungen wurden jedoch aktualisiert, sodass Sie, wenn Sie das gesamte externe Dokument laden möchten, auf dieses ohne ein URL-Fragment verweisen können (und die `id` ist nicht mehr erforderlich auf dem SVG-Dokumentenwurzelelement):

```html
<svg>
  <use href="../assets/my-svg.svg"></use>
</svg>
```

Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) Tabelle für die Browserunterstützung.

### Laden von Ressourcen aus Daten-URIs via `<use>`

Das Laden von Ressourcen mit Daten-URIs im `href` Attribut ist aus Sicherheitsgründen veraltet. Dies gilt für `<use href="data:..."` ebenso wie für das Setzen von `href` durch die Verwendung der [`set`](/de/docs/Web/SVG/Reference/Element/set) oder [`setAttribute`](/de/docs/Web/API/Element/setAttribute) Methode.

Auch hier sollten Sie die [Browser-Kompatibilität](#browser-kompatibilität) Tabelle für die Browserunterstützung überprüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
