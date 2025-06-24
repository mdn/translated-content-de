---
title: <use>
slug: Web/SVG/Reference/Element/use
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

Das **`<use>`**-Element nimmt Knoten aus einem SVG-Dokument und dupliziert sie an einer anderen Stelle. Der Effekt ist derselbe, als ob die Knoten tief in ein nicht offengelegtes DOM geklont und dann an der Stelle eingefügt würden, wo das `<use>`-Element ist, ähnlich wie geklonte {{HTMLElement("template")}}-Elemente.

## Verwendungskontext

{{SVGInfo}}

## Attribute

- {{SVGAttr("href")}}
  - : Die URL zu einem Element/Fragment, das dupliziert werden muss. Siehe [Verwendungsnotizen](#verwendungsnotizen) für Informationen zu häufigen Fallstricken.<br/> _Wertetyp_: [**`<URL>`**](/de/docs/Web/SVG/Guides/Content_type#url); _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{Deprecated_Inline}}
  - : Ein [`<IRI>`](/de/docs/Web/SVG/Guides/Content_type#iri)-Verweis auf ein Element/Fragment, das dupliziert werden muss. Wenn sowohl {{SVGAttr("href")}} als auch {{SVGAttr("xlink:href")}} vorhanden sind, wird der Wert von {{SVGAttr("href")}} verwendet.<br/> _Wertetyp_: [**`<IRI>`**](/de/docs/Web/SVG/Guides/Content_type#iri); _Standardwert_: keiner; _Animierbar_: **ja**
    > [!WARNING]
    > Seit SVG 2 ist das Attribut {{SVGAttr("xlink:href")}} zugunsten von {{SVGAttr("href")}} veraltet. Weitere Informationen finden Sie auf der {{SVGAttr("xlink:href")}}-Seite.
- {{SVGAttr("x")}}
  - : Die x-Koordinate einer zusätzlichen Endversetzungstransformation, die auf das `<use>`-Element angewendet wird.<br/> _Wertetyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Guides/Content_type#coordinate); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Die y-Koordinate einer zusätzlichen Endversetzungstransformation, die auf das `<use>`-Element angewendet wird.<br/> _Wertetyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Guides/Content_type#coordinate); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Die Breite des `<use>`-Elements.<br/> _Wertetyp_: [**`<length>`**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("height")}}
  - : Die Höhe des `<use>`-Elements.<br/> _Wertetyp_: [**`<length>`**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0`; _Animierbar_: **ja**

> [!NOTE] > `width` und `height` haben keinen Einfluss auf `<use>`-Elemente, es sei denn, das referenzierte Element hat eine [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox). D. h., sie haben nur dann eine Wirkung, wenn `<use>` sich auf ein `<svg>`- oder `<symbol>`-Element bezieht.

> [!NOTE]
> Ab SVG2 sind `x`, `y`, `width` und `height` _Geometrie-Eigenschaften_, das bedeutet, diese Attribute können auch als CSS-Eigenschaften für dieses Element verwendet werden.

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGUseElement`](/de/docs/Web/API/SVGUseElement)-Schnittstelle.

## Beispiel

Das folgende Beispiel zeigt, wie das `<use>`-Element verwendet wird, um einen Kreis mit einer anderen Füllung und Strichfarbe zu zeichnen. Beim letzten Kreis wird `stroke="red"` ignoriert, weil der Strich bereits auf `myCircle` gesetzt wurde.

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

## Verwendungsnotizen

Die meisten Attribute auf `<use>` werden ignoriert, wenn das entsprechende Attribut bereits auf dem vom `<use>` referenzierten Element definiert ist. (Dies unterscheidet sich davon, wie CSS-Stilattributen, die in der Kaskade 'früher' gesetzt wurden, überschrieben werden).
**Nur** die Attribute {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}} und {{SVGAttr("href")}} auf dem `<use>`-Element werden einen oder möglicherweise einen Effekt haben, der später beschrieben wird, wenn das referenzierte Element das entsprechende Attribut bereits definiert hat. Jedoch werden _alle anderen Attribute_, die nicht auf dem referenzierten Element gesetzt sind, **auf das `<use>`-Element angewendet**.

Da die geklonten Knoten nicht offengelegt werden, muss bei der Verwendung von [CSS](/de/docs/Web/CSS) zur Gestaltung eines `<use>`-Elements und seiner geklonten Nachkommen darauf geachtet werden. CSS-Eigenschaften sind nicht garantiert, dass sie vom geklonten DOM geerbt werden, es sei denn, Sie fordern sie ausdrücklich durch [CSS-Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) an.

Aus Sicherheitsgründen können Browser die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) auf `<use>`-Elemente anwenden und das Laden einer Cross-Origin-URL im {{SVGAttr("href")}}-Attribut verweigern. Es gibt derzeit keine definierte Möglichkeit, eine Cross-Origin-Policy für `<use>`-Elemente festzulegen.

### Ressourcen aus externen Dateien via `<use>` laden

Sie können Knoten aus einer externen SVG-Datei über das `<use>`-Element laden, indem Sie den Pfad der Datei angeben, gefolgt von einem URL-Fragment, das auf die `id` des zu ladenden Knotens verweist:

```html
<svg>
  <use href="../assets/my-svg.svg#my-fragment"></use>
</svg>
```

Historisch gesehen war das URL-Fragment immer erforderlich, selbst wenn Sie das gesamte SVG-Dokument laden wollten. In einem solchen Fall würde die `id` auf dem SVG-Root-Element enthalten sein:

```html
<svg xmlns="http://www.w3.org/2000/svg" id="my-fragment">
  <circle cx="150" cy="100" r="80" fill="green" />
</svg>
```

Moderne Implementierungen wurden jedoch so aktualisiert, dass, wenn Sie das gesamte externe Dokument laden möchten, Sie auf dieses ohne URL-Fragment verweisen können (und die `id` ist nicht mehr auf dem SVG-Dokumentroot-Element erforderlich):

```html
<svg>
  <use href="../assets/my-svg.svg"></use>
</svg>
```

Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle für die Unterstützung durch Browser.

### Ressourcen aus Data-URIs via `<use>` laden

Das Laden von Ressourcen mit Data-URIs im `href`-Attribut ist aus Sicherheitsgründen veraltet. Dies gilt für `<use href="data:..."` und auch beim Setzen von `href` mit der [`set`](/de/docs/Web/SVG/Reference/Element/set)- oder [`setAttribute`](/de/docs/Web/API/Element/setAttribute)-Methode.

Überprüfen Sie erneut die [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle für die Unterstützung durch Browser.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
