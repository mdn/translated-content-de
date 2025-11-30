---
title: <use>
slug: Web/SVG/Reference/Element/use
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Das **`<use>`**-Element nimmt Knoten aus einem SVG-Dokument und dupliziert sie an einer anderen Stelle.
Der Effekt ist derselbe, als ob die Knoten tief in einen nicht sichtbaren DOM geklont und dann dort eingefügt würden, wo sich das `<use>`-Element befindet, ähnlich wie geklonte {{HTMLElement("template")}}-Elemente.

## Verwendungskontext

{{SVGInfo}}

## Attribute

- {{SVGAttr("href")}}
  - : Die URL zu einem Element/Fragment, das dupliziert werden muss. Weitere Informationen zu häufigen Fallstricken finden Sie in den [Verwendungsnotizen](#verwendungsnotizen).<br/> _Werttyp_: [**`<URL>`**](/de/docs/Web/SVG/Guides/Content_type#url); _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{Deprecated_Inline}}
  - : Ein [`<IRI>`](/de/docs/Web/SVG/Guides/Content_type#iri)-Verweis auf ein Element/Fragment, das dupliziert werden muss. Wenn sowohl {{SVGAttr("href")}} als auch {{SVGAttr("xlink:href")}} vorhanden sind, wird der durch {{SVGAttr("href")}} angegebene Wert verwendet.<br/> _Werttyp_: [**`<IRI>`**](/de/docs/Web/SVG/Guides/Content_type#iri); _Standardwert_: keiner; _Animierbar_: **ja**
    > [!WARNING]
    > Seit SVG 2 ist das Attribut {{SVGAttr("xlink:href")}} zugunsten von {{SVGAttr("href")}} veraltet. Weitere Informationen finden Sie auf der Seite zu {{SVGAttr("xlink:href")}}.
- {{SVGAttr("x")}}
  - : Die x-Koordinate einer zusätzlichen Endversatztransformation, die auf das `<use>`-Element angewendet wird.<br/> _Werttyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Guides/Content_type#coordinate); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Die y-Koordinate einer zusätzlichen Endversatztransformation, die auf das `<use>`-Element angewendet wird.<br/> _Werttyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Guides/Content_type#coordinate); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Die Breite des `<use>`-Elements.<br/> _Werttyp_: [**`<length>`**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("height")}}
  - : Die Höhe des `<use>`-Elements.<br/> _Werttyp_: [**`<length>`**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0`; _Animierbar_: **ja**

> [!NOTE]
> `width` und `height` haben keine Auswirkung auf `<use>`-Elemente, es sei denn, das referenzierte Element hat ein [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox) - d.h. sie haben nur dann eine Wirkung, wenn `<use>` sich auf ein `<svg>`- oder `<symbol>`-Element bezieht.

> [!NOTE]
> Ab SVG2 sind `x`, `y`, `width` und `height` _Geometrie-Eigenschaften_, was bedeutet, dass diese Attribute auch als CSS-Eigenschaften für dieses Element verwendet werden können.

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGUseElement`](/de/docs/Web/API/SVGUseElement)-Schnittstelle.

## Beispiel

Das folgende Beispiel zeigt, wie man das `<use>`-Element verwendet, um einen Kreis mit unterschiedlichen Füll- und Strichfarben zu zeichnen.
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

## Verwendungsnotizen

Die meisten Attribute auf `<use>` werden ignoriert, wenn das entsprechende Attribut bereits auf dem _referenzierten_ Element definiert ist. (Dies unterscheidet sich von der Art und Weise, wie CSS-Stilattributen Vorrang gegenüber zuvor in der Kaskade gesetzten Attributen gegeben wird).
**Nur** die Attribute {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}} und {{SVGAttr("href")}} des `<use>`-Elements werden eine Wirkung haben oder haben möglicherweise eine Wirkung, wenn das referenzierte Element das entsprechende Attribut bereits definiert hat. Andere nicht auf dem referenzierten Element gesetzte Attribute **werden** auf das `<use>`-Element angewendet.

Da die geklonten Knoten nicht sichtbar sind, muss beim Styling eines `<use>`-Elements und seiner geklonten Nachkommen mit [CSS](/de/docs/Web/CSS) Vorsicht geboten sein. CSS-Eigenschaften werden nicht garantiert an den geklonten DOM vererbt, es sei denn, Sie fordern sie explizit mit [CSS-Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance) an.

Aus Sicherheitsgründen können Browser die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) auf `<use>`-Elemente anwenden und möglicherweise das Laden einer Cross-Origin-URL im {{SVGAttr("href")}}-Attribut verweigern. Derzeit gibt es keine definierte Möglichkeit, eine Cross-Origin-Policy für `<use>`-Elemente festzulegen.

### Laden von Ressourcen aus externen Dateien über `<use>`

Sie können Knoten aus einer externen SVG-Datei über das `<use>`-Element laden, indem Sie den Pfad der Datei angeben, gefolgt von einem URL-Fragment, das auf die `id` des zu ladenden Knotens verweist:

```html
<svg>
  <use href="../assets/my-svg.svg#my-fragment"></use>
</svg>
```

Historisch war das URL-Fragment immer erforderlich, auch wenn Sie das gesamte SVG-Dokument laden wollten. In einem solchen Fall würde die `id` auf dem SVG-Root-Element enthalten sein:

```html
<svg xmlns="http://www.w3.org/2000/svg" id="my-fragment">
  <circle cx="150" cy="100" r="80" fill="green" />
</svg>
```

Moderne Implementierungen wurden jedoch so aktualisiert, dass Sie, wenn Sie das gesamte externe Dokument laden möchten, darauf ohne URL-Fragment verweisen können (und die `id` ist nicht mehr auf dem SVG-Dokumenten-Root-Element erforderlich):

```html
<svg>
  <use href="../assets/my-svg.svg"></use>
</svg>
```

Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle für Browserunterstützung.

### Laden von Ressourcen aus Daten-URIs über `<use>`

Das Laden von Ressourcen mit Daten-URIs im `href`-Attribut ist aus Sicherheitsgründen veraltet. Dies gilt für `<use href="data:..."` und auch für das Setzen von `href` durch Verwenden der [`set`](/de/docs/Web/SVG/Reference/Element/set)- oder [`setAttribute`](/de/docs/Web/API/Element/setAttribute)-Methode.

Auch hier sollten Sie die [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle für die Browserunterstützung überprüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
