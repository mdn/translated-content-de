---
title: "Node: firstChild-Eigenschaft"
short-title: firstChild
slug: Web/API/Node/firstChild
l10n:
  sourceCommit: d4a50b63d9afd826e61eb8833e8e6337b5059e8a
---

{{APIRef("DOM")}}

Die schreibgeschützte **`firstChild`**-Eigenschaft der [`Node`](/de/docs/Web/API/Node)-Schnittstelle
gibt das erste Kind des Knotens im Baum zurück
oder `null`, wenn der Knoten keine Kinder hat.

Wenn der Knoten ein [`Document`](/de/docs/Web/API/Document) ist,
gibt diese Eigenschaft den ersten Knoten in der Liste seiner direkten Kinder zurück.

> [!NOTE]
> Diese Eigenschaft gibt jeden Typ von Knoten zurück, der das erste Kind dieses Knotens ist.
> Es kann ein [`Text`](/de/docs/Web/API/Text)- oder ein [`Comment`](/de/docs/Web/API/Comment)-Knoten sein.
> Wenn Sie das erste [`Element`](/de/docs/Web/API/Element) erhalten möchten, das ein Kind eines anderen Elements ist,
> sollten Sie [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild) verwenden.

## Wert

Ein [`Node`](/de/docs/Web/API/Node) oder `null`, wenn keiner vorhanden ist.

## Beispiel

Dieses Beispiel demonstriert die Verwendung von `firstChild` und wie Whitespace-Knoten
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

Im obigen Beispiel zeigt die Konsole '#text' an,
weil ein Textknoten eingefügt wird, um Leerraum zwischen dem Ende des
öffnenden `<p>`- und des `<span>`-Tags beizubehalten. **Jeder**
[Leerraum](/de/docs/Web/CSS/CSS_text/Whitespace#working_with_whitespace_in_the_dom)
erzeugt einen `#text`-Knoten, von einem einzelnen Leerzeichen bis zu mehreren Leerzeichen, Zeilenumbrüchen,
Tabs und so weiter.

Ein weiterer `#text`-Knoten wird zwischen den schließenden
`</span>`- und `</p>`-Tags eingefügt.

Wenn dieser Leerraum aus dem Quelltext entfernt wird, werden die #text-Knoten nicht eingefügt und das
`<span>`-Element wird zum ersten Kind des Absatzes.

```html
<p id="para-01"><span>First span</span></p>
```

```js
const p01 = document.getElementById("para-01");
console.log(p01.firstChild.nodeName);
```

Jetzt zeigt die Konsole 'SPAN' an.

Um das Problem zu vermeiden, dass `node.firstChild` `#text`- oder
`#comment`-Knoten zurückgibt, kann [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild) verwendet werden, um
nur den ersten Elementknoten zurückzugeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild)
- [`Node.lastChild`](/de/docs/Web/API/Node/lastChild)
