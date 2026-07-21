---
title: <use>
slug: Web/SVG/Reference/Element/use
l10n:
  sourceCommit: 049effd31f65c1d5503ac807a8a7c3d39e661be2
---

Das **`<use>`**-Element nimmt Knoten innerhalb eines SVG-Dokuments und dupliziert sie an einer anderen Stelle.
Der Effekt ist derselbe, als ob die Knoten tief in einen nicht sichtbaren DOM geklont und dann dort eingefügt würden, wo sich das `<use>`-Element befindet, ähnlich wie geklonte {{HTMLElement("template")}}-Elemente.

## Verwendungskontext

{{SVGInfo}}

## Attribute

- {{SVGAttr("href")}}
  - : Die URL zu einem Element/Fragment, das dupliziert werden muss. Siehe [Hinweise zur Verwendung](#verwendungshinweise) für Details zu häufigen Fallstricken.<br/> _Wertetyp_: [**`<URL>`**](/de/docs/Web/SVG/Guides/Content_type#url); _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{Deprecated_Inline}}
  - : Ein [`<IRI>`](/de/docs/Web/SVG/Guides/Content_type#iri)-Verweis auf ein Element/Fragment, das dupliziert werden muss. Wenn sowohl {{SVGAttr("href")}} als auch {{SVGAttr("xlink:href")}} vorhanden sind, wird der in {{SVGAttr("href")}} angegebene Wert verwendet.<br/> _Wertetyp_: [**`<IRI>`**](/de/docs/Web/SVG/Guides/Content_type#iri); _Standardwert_: keiner; _Animierbar_: **ja**
    > [!WARNING]
    > Seit SVG 2 ist das Attribut {{SVGAttr("xlink:href")}} zugunsten von {{SVGAttr("href")}} veraltet. Weitere Informationen finden Sie auf der Seite {{SVGAttr("xlink:href")}}.
- {{SVGAttr("x")}}
  - : Die x-Koordinate einer zusätzlichen abschließenden Offset-Transformation, die auf das `<use>`-Element angewendet wird.<br/> _Wertetyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Guides/Content_type#coordinate); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Die y-Koordinate einer zusätzlichen abschließenden Offset-Transformation, die auf das `<use>`-Element angewendet wird.<br/> _Wertetyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Guides/Content_type#coordinate); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Die Breite des `<use>`-Elements.<br/> _Wertetyp_: [**`<length>`**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("height")}}
  - : Die Höhe des `<use>`-Elements.<br/> _Wertetyp_: [**`<length>`**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0`; _Animierbar_: **ja**

> [!NOTE]
> `width` und `height` haben keine Auswirkungen auf `<use>`-Elemente, es sei denn, das referenzierte Element hat ein [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox) - d.h. sie haben nur Einfluss, wenn `<use>` sich auf ein `<svg>`- oder `<symbol>`-Element bezieht.

> [!NOTE]
> Ab SVG2 sind `x`, `y`, `width` und `height` _Geometry Properties_, was bedeutet, dass diese Attribute auch als CSS-Eigenschaften für dieses Element verwendet werden können.

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGUseElement`](/de/docs/Web/API/SVGUseElement)-Schnittstelle.

## Beispiel

Das folgende Beispiel zeigt, wie man das `<use>`-Element verwendet, um mehrere Kreise mit unterschiedlichen Füll- und Konturfarben zu zeichnen.

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

## Verwendungshinweise

Die meisten Attribute von `<use>` werden ignoriert, wenn das entsprechende Attribut bereits auf dem durch `<use>` referenzierten Element definiert ist. (Dies unterscheidet sich davon, wie CSS-Stilattributvorgaben die früher in der Kaskade gesetzten Eigenschaften überschreiben). **Nur** die Attribute {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}} und {{SVGAttr("href")}} am `<use>`-Element werden oder könnten eine gewisse Wirkung haben, wie später beschrieben, wenn das referenzierte Element bereits das entsprechende Attribut definiert hat. Jedoch **werden alle anderen Attribute**, die am referenzierten Element nicht gesetzt sind, auf das `<use>`-Element angewendet.

Da die geklonten Knoten nicht sichtbar sind, muss bei der Verwendung von [CSS](/de/docs/Web/CSS) zur Gestaltung eines `<use>`-Elements und seiner geklonten Nachfolger Vorsicht walten lassen. CSS-Eigenschaften werden nicht garantiert von dem geklonten DOM geerbt, es sei denn, Sie beauftragen sie ausdrücklich durch [CSS-Inheritance](/de/docs/Web/CSS/Guides/Cascade/Inheritance).

Aus Sicherheitsgründen können Browser die [Same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy) auf `<use>`-Elemente anwenden und möglicherweise das Laden einer Cross-Origin-URL im {{SVGAttr("href")}}-Attribut verweigern. Derzeit gibt es keine definierte Möglichkeit, eine Cross-Origin-Richtlinie für `<use>`-Elemente festzulegen.

### Laden von Ressourcen aus externen Dateien über `<use>`

Sie können Knoten aus einer externen SVG-Datei über das `<use>`-Element laden, indem Sie den Pfad der Datei angeben, gefolgt von einem URL-Fragment, das auf die `id` des zu ladenden Knotens zeigt:

```html
<svg>
  <use href="../assets/my-svg.svg#my-fragment"></use>
</svg>
```

Historisch war das URL-Fragment immer erforderlich, selbst wenn Sie das gesamte SVG-Dokument laden wollten. In einem solchen Fall würde die `id` auf dem SVG-Wurzelelement enthalten sein:

```html
<svg xmlns="http://www.w3.org/2000/svg" id="my-fragment">
  <circle cx="150" cy="100" r="80" fill="green" />
</svg>
```

Moderne Implementierungen wurden jedoch aktualisiert, sodass, wenn Sie das gesamte externe Dokument laden möchten, Sie darauf verweisen können, ohne ein URL-Fragment (und die `id` ist nicht mehr auf dem Wurzelelement des SVG-Dokuments erforderlich):

```html
<svg>
  <use href="../assets/my-svg.svg"></use>
</svg>
```

Prüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle für die Unterstützung durch Browser.

### Laden von Ressourcen aus Daten-URIs über `<use>`

Das Laden von Ressourcen mit Daten-URIs im `href`-Attribut ist aus Sicherheitsgründen veraltet. Dies gilt für `<use href="data:..."` und auch beim Setzen von `href` durch die Verwendung der [`set`](/de/docs/Web/SVG/Reference/Element/set) oder [`setAttribute`](/de/docs/Web/API/Element/setAttribute)-Methode.

Auch hier sollten Sie die [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle für die Unterstützung durch Browser überprüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
