---
title: "Node: firstChild-Eigenschaft"
short-title: firstChild
slug: Web/API/Node/firstChild
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("DOM")}}

Die schreibgeschützte **`firstChild`**-Eigenschaft des [`Node`](/de/docs/Web/API/Node)-Interfaces
gibt das erste Kind des Knotens im Baum zurück
oder `null`, wenn der Knoten keine Kinder hat.

Wenn der Knoten ein [`Document`](/de/docs/Web/API/Document) ist,
gibt diese Eigenschaft den ersten Knoten in der Liste seiner direkten Kinder zurück.

> [!NOTE]
> Diese Eigenschaft gibt jeden Knoten aus, der das erste Kind dieses Knotens ist.
> Es kann sich um einen [`Text`](/de/docs/Web/API/Text)- oder einen [`Comment`](/de/docs/Web/API/Comment)-Knoten handeln.
> Falls Sie das erste [`Element`](/de/docs/Web/API/Element) erhalten möchten, das ein Kind eines anderen Elements ist,
> erwägen Sie die Verwendung von [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild).

## Wert

Ein [`Node`](/de/docs/Web/API/Node) oder `null`, wenn keine vorhanden sind.

## Beispiel

Dieses Beispiel demonstriert die Verwendung von `firstChild` und wie Leerraum-Knoten
in der Nutzung dieser Eigenschaft stören können.

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
weil ein Textknoten eingefügt wird, um den Leerraum zwischen dem Ende des
öffnenden `<p>` und `<span>`-Tags zu erhalten. **Jeder**
[Leerraum](/de/docs/Web/API/Document_Object_Model/Whitespace)
erzeugt einen `#text`-Knoten, von einem einzelnen Leerzeichen bis zu mehreren Leerzeichen, Zeilenumbrüchen, Tabulatoren usw.

Ein weiterer `#text`-Knoten wird zwischen den schließenden `</span>`- und `</p>`-Tags eingefügt.

Wenn dieser Leerraum aus der Quelle entfernt wird, werden die #text-Knoten nicht eingefügt und das
span-Element wird zum ersten Kind des Absatzes.

```html
<p id="para-01"><span>First span</span></p>
```

```js
const p01 = document.getElementById("para-01");
console.log(p01.firstChild.nodeName);
```

Jetzt wird die Konsole 'SPAN' anzeigen.

Um das Problem zu vermeiden, dass `node.firstChild` `#text` oder
`#comment`-Knoten zurückgibt, kann [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild) verwendet werden,
um nur den ersten Elementknoten zurückzugeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild)
- [`Node.lastChild`](/de/docs/Web/API/Node/lastChild)
