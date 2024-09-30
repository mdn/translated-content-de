---
title: "Node: firstChild Eigenschaft"
short-title: firstChild
slug: Web/API/Node/firstChild
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("DOM")}}

Die schreibgeschützte **`firstChild`**-Eigenschaft des [`Node`](/de/docs/Web/API/Node)-Interfaces
gibt das erste Kind des Knotens im Baum zurück
oder `null`, wenn der Knoten keine Kinder hat.

Wenn der Knoten ein [`Document`](/de/docs/Web/API/Document) ist,
gibt diese Eigenschaft den ersten Knoten in der Liste seiner unmittelbaren Kinder zurück.

> [!NOTE]
> Diese Eigenschaft gibt jeden Knoten zurück, der der erste Nachkomme dieses Knotens ist.
> Es kann sich um einen [`Text`](/de/docs/Web/API/Text)- oder einen [`Comment`](/de/docs/Web/API/Comment)-Knoten handeln.
> Wenn Sie das erste [`Element`](/de/docs/Web/API/Element) erhalten möchten, das ein Kind eines anderen Elements ist,
> sollten Sie [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild) verwenden.

## Wert

Ein [`Node`](/de/docs/Web/API/Node) oder `null`, wenn keine vorhanden sind.

## Beispiel

Dieses Beispiel demonstriert die Verwendung von `firstChild` und wie Whitespace-Knoten
die Verwendung dieser Eigenschaft beeinträchtigen könnten.

```html
<p id="para-01">
  <span>First span</span>
</p>

<script>
  const p01 = document.getElementById("para-01");
  console.log(p01.firstChild.nodeName);
</script>
```

Im obigen Beispiel zeigt die [Konsole](/de/docs/Web/API/console) '#text' an,
weil ein Textknoten eingefügt wird, um den Whitespace zwischen dem Ende der
öffnenden `<p>` und `<span>` Tags beizubehalten. **Jeder**
[Whitespace](/de/docs/Web/API/Document_Object_Model/Whitespace)
erzeugt einen `#text` Knoten, von einem einzelnen Leerzeichen bis zu mehreren Leerzeichen, Zeilenumbrüchen,
Tabulatoren und so weiter.

Ein weiterer `#text` Knoten wird zwischen den schließenden
`</span>` und `</p>` Tags eingefügt.

Wenn dieser Whitespace aus der Quelle entfernt wird, werden keine #text-Knoten eingefügt und das
`span`-Element wird zum ersten Kind des Absatzes.

```html
<p id="para-01"><span>First span</span></p>

<script>
  const p01 = document.getElementById("para-01");
  console.log(p01.firstChild.nodeName);
</script>
```

Nun zeigt die Konsole 'SPAN' an.

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
