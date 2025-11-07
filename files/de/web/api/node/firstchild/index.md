---
title: "Node: firstChild-Eigenschaft"
short-title: firstChild
slug: Web/API/Node/firstChild
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("DOM")}}

Die schreibgeschützte **`firstChild`**-Eigenschaft des [`Node`](/de/docs/Web/API/Node)-Interface
gibt das erste Kind des Knotens im Baum zurück
oder `null`, wenn der Knoten keine Kinder hat.

Wenn der Knoten ein [`Document`](/de/docs/Web/API/Document) ist,
gibt diese Eigenschaft den ersten Knoten in der Liste seiner direkten Kinder zurück.

> [!NOTE]
> Diese Eigenschaft gibt jeden Typ von Knoten zurück, der das erste Kind dieses Knotens ist.
> Es kann sich um einen [`Text`](/de/docs/Web/API/Text)- oder einen [`Comment`](/de/docs/Web/API/Comment)-Knoten handeln.
> Wenn Sie das erste [`Element`](/de/docs/Web/API/Element) erhalten möchten, das ein Kind eines anderen Elements ist,
> sollten Sie [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild) verwenden.

## Wert

Ein [`Node`](/de/docs/Web/API/Node), oder `null`, wenn keiner vorhanden ist.

## Beispiel

Dieses Beispiel demonstriert die Verwendung von `firstChild` und wie Leerzeichenknoten
die Nutzung dieser Eigenschaft beeinträchtigen können.

```html
<p id="para-01">
  <span>First span</span>
</p>
```

```js
const p01 = document.getElementById("para-01");
console.log(p01.firstChild.nodeName);
```

Im obigen Beispiel wird die Konsole '#text' anzeigen,
weil ein Textknoten eingefügt wird, um das Leerzeichen zwischen dem Ende des
öffnenden `<p>`- und des `<span>`-Tags beizubehalten. **Jegliche**
[Leerzeichen](/de/docs/Web/CSS/Guides/Text/Whitespace#working_with_whitespace_in_the_dom)
erzeugen einen `#text`-Knoten, sei es ein einzelnes Leerzeichen, mehrere Leerzeichen, Umbrüche,
Tabs und so weiter.

Ein weiterer `#text`-Knoten wird zwischen den schließenden
`</span>`- und `</p>`-Tags eingefügt.

Wenn dieses Leerzeichen aus der Quelle entfernt wird, werden die #text-Knoten nicht eingefügt und das
span-Element wird zum ersten Kind des Absatzes.

```html
<p id="para-01"><span>First span</span></p>
```

```js
const p01 = document.getElementById("para-01");
console.log(p01.firstChild.nodeName);
```

Jetzt wird die Konsole 'SPAN' anzeigen.

Um das Problem mit `node.firstChild`, das `#text`- oder
`#comment`-Knoten zurückgibt, zu vermeiden, kann [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild) verwendet werden, um
nur das erste Elementknoten zurückzugeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild)
- [`Node.lastChild`](/de/docs/Web/API/Node/lastChild)
