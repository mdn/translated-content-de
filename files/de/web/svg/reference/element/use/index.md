---
title: <use>
slug: Web/SVG/Reference/Element/use
l10n:
  sourceCommit: 9b6f7f0cdac4bb48a51e8a2098bafc40683ccf49
---

Das **`<use>`**-Element nimmt Knoten innerhalb eines SVG-Dokuments und dupliziert sie an anderer Stelle. Der Effekt ist derselbe, als ob die Knoten in einem nicht exponierten DOM tief geklont und dann an die Stelle eingefügt würden, an der sich das `<use>`-Element befindet, ähnlich wie bei geklonten {{HTMLElement("template")}}-Elementen.

## Verwendungskontext

{{SVGInfo}}

## Attribute

- {{SVGAttr("href")}}
  - : Die URL zu einem Element/Fragment, das dupliziert werden muss. Siehe [Hinweise zur Verwendung](#hinweise_zur_verwendung) für Details zu häufigen Fallstricken.<br/> _Wertetyp_: [**`<URL>`**](/de/docs/Web/SVG/Guides/Content_type#url); _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{Deprecated_Inline}}
  - : Eine [`<IRI>`](/de/docs/Web/SVG/Guides/Content_type#iri)-Referenz zu einem Element/Fragment, das dupliziert werden muss. Wenn sowohl {{SVGAttr("href")}} als auch {{SVGAttr("xlink:href")}} vorhanden sind, wird der Wert von {{SVGAttr("href")}} verwendet.<br/> _Wertetyp_: [**`<IRI>`**](/de/docs/Web/SVG/Guides/Content_type#iri); _Standardwert_: keiner; _Animierbar_: **ja**
    > [!WARNING]
    > Seit SVG 2 ist das {{SVGAttr("xlink:href")}} Attribut zugunsten von {{SVGAttr("href")}} veraltet. Weitere Informationen finden Sie auf der Seite {{SVGAttr("xlink:href")}}.
- {{SVGAttr("x")}}
  - : Die x-Koordinate einer zusätzlichen endgültigen Versatztransformation, die auf das `<use>`-Element angewendet wird.<br/> _Wertetyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Guides/Content_type#coordinate); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Die y-Koordinate einer zusätzlichen endgültigen Versatztransformation, die auf das `<use>`-Element angewendet wird.<br/> _Wertetyp_: [**`<coordinate>`**](/de/docs/Web/SVG/Guides/Content_type#coordinate); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Die Breite des `<use>`-Elements.<br/> _Wertetyp_: [**`<length>`**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("height")}}
  - : Die Höhe des `<use>`-Elements.<br/> _Wertetyp_: [**`<length>`**](/de/docs/Web/SVG/Guides/Content_type#length); _Standardwert_: `0`; _Animierbar_: **ja**

> **Hinweis:** `width` und `height` haben keinen Effekt auf `<use>`-Elemente, es sei denn, das referenzierte Element hat ein [viewBox](/de/docs/Web/SVG/Reference/Attribute/viewBox) - das heißt, sie haben nur einen Effekt, wenn `<use>` sich auf ein `<svg>` oder `<symbol>`-Element bezieht.

> [!NOTE]
> Ab SVG2 sind `x`, `y`, `width` und `height` _Geometrie-Eigenschaften_, was bedeutet, dass diese Attribute auch als CSS-Eigenschaften für dieses Element verwendet werden können.

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGUseElement`](/de/docs/Web/API/SVGUseElement)-Schnittstelle.

## Beispiel

Das folgende Beispiel zeigt, wie man das `<use>`-Element verwendet, um einen Kreis mit einer anderen Füllfarbe und einer anderen Strichfarbe zu zeichnen. Im letzten Kreis wird `stroke="red"` ignoriert, da der Strich bereits auf `myCircle` gesetzt wurde.

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

## Hinweise zur Verwendung

Die meisten Attribute auf `<use>` werden ignoriert, wenn das entsprechende Attribut bereits auf dem vom `<use>` referenzierten Element definiert ist. (Dies unterscheidet sich davon, wie CSS-Stilattributen solche in der Kaskade 'früher' gesetzten Attribute überschreiben). **Nur** die Attribute {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}} und {{SVGAttr("href")}} auf dem `<use>`-Element werden oder können einen Effekt haben, wie später beschrieben wird, wenn das referenzierte Element bereits das entsprechende Attribut definiert hat. Jedoch werden _alle anderen Attribute_, die nicht auf dem referenzierten Element gesetzt sind, **auf das `<use>`-Element angewendet**.

Da die geklonten Knoten nicht exponiert sind, muss beim Einsatz von [CSS](/de/docs/Web/CSS) zum Stylen eines `<use>`-Elements und seiner geklonten Nachkommen vorsichtig vorgegangen werden. CSS-Eigenschaften werden nicht garantiert vom geklonten DOM geerbt, es sei denn, Sie fordern sie explizit durch [CSS-Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) an.

Aus Sicherheitsgründen können Browser die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) auf `<use>`-Elemente anwenden und sich weigern, eine Cross-Origin-URL im {{SVGAttr("href")}}-Attribut zu laden. Derzeit gibt es keine festgelegte Methode, um eine Cross-Origin-Richtlinie für `<use>`-Elemente festzulegen.

### Laden von Ressourcen aus externen Dateien über `<use>`

Sie können Knoten aus einer externen SVG-Datei über das `<use>`-Element laden, indem Sie den Pfad der Datei angeben, gefolgt von einem URL-Fragment, das auf die `id` des zu ladenden Knotens verweist:

```html
<svg>
  <use href="../assets/my-svg.svg#my-fragment"></use>
</svg>
```

Historisch gesehen war immer ein URL-Fragment erforderlich, selbst wenn Sie das gesamte SVG-Dokument laden wollten. In einem solchen Fall würde die `id` auf dem Root-Element des SVG enthalten sein:

```html
<svg xmlns="http://www.w3.org/2000/svg" id="my-fragment">
  <circle cx="150" cy="100" r="80" fill="green" />
</svg>
```

Moderne Implementierungen wurden jedoch aktualisiert, sodass Sie, wenn Sie das gesamte externe Dokument laden möchten, es ohne URL-Fragment referenzieren können (und die `id` auf dem Root-Element des SVG ist nicht mehr erforderlich):

```html
<svg>
  <use href="../assets/my-svg.svg"></use>
</svg>
```

Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle für die Unterstützung durch Browser.

### Laden von Ressourcen aus Daten-URIs über `<use>`

Das Laden von Ressourcen mit Daten-URIs im `href`-Attribut ist aus Sicherheitsgründen veraltet. Dies gilt für `<use href="data:..."` und auch, wenn `href` durch Verwendung der Methode [`set`](/de/docs/Web/SVG/Reference/Element/set) oder [`setAttribute`](/de/docs/Web/API/Element/setAttribute) gesetzt wird.

Auch hier sollten Sie die [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle für die Unterstützung durch Browser überprüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
