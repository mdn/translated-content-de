---
title: "Node: firstChild Eigenschaft"
short-title: firstChild
slug: Web/API/Node/firstChild
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("DOM")}}

Die schreibgeschützte **`firstChild`** Eigenschaft der {{domxref("Node")}}-Schnittstelle gibt das erste Kind des Knotens im Baum zurück oder `null`, wenn der Knoten keine Kinder hat.

Wenn der Knoten ein {{domxref("Document")}} ist, gibt diese Eigenschaft das erste Knoten in der Liste seiner direkten Kinder zurück.

> [!NOTE]
> Diese Eigenschaft gibt jeden Typ von Knoten zurück, der das erste Kind dieses Knotens ist. Es kann sich um einen {{domxref("Text")}}- oder einen {{domxref("Comment")}}-Knoten handeln. Wenn Sie das erste {{domxref("Element")}}, das ein Kind eines anderen Elements ist, erhalten möchten, sollten Sie {{domxref("Element.firstElementChild")}} verwenden.

## Wert

Ein {{domxref("Node")}}, oder `null`, wenn keine vorhanden sind.

## Beispiel

Dieses Beispiel demonstriert die Verwendung von `firstChild` und wie Leerzeichen-Knoten die Verwendung dieser Eigenschaft beeinflussen können.

```html
<p id="para-01">
  <span>First span</span>
</p>

<script>
  const p01 = document.getElementById("para-01");
  console.log(p01.firstChild.nodeName);
</script>
```

Im obigen Beispiel zeigt die [Konsole](/de/docs/Web/API/console) `#text`, weil ein Textknoten eingefügt wird, um den Leerraum zwischen dem Ende des öffnenden `<p>`- und `<span>`-Tags zu erhalten. **Jeder**
[Leerraum](/de/docs/Web/API/Document_Object_Model/Whitespace) erzeugt einen `#text`-Knoten, von einem einzelnen Leerzeichen bis hin zu mehreren Leerzeichen, Zeilenumbrüchen, Tabs usw.

Ein weiterer `#text`-Knoten wird zwischen den schließenden `</span>`- und `</p>`-Tags eingefügt.

Wenn dieser Leerraum aus der Quelle entfernt wird, werden die #text Knoten nicht eingefügt und das span-Element wird zum ersten Kind des Absatzes.

```html
<p id="para-01"><span>First span</span></p>

<script>
  const p01 = document.getElementById("para-01");
  console.log(p01.firstChild.nodeName);
</script>
```

Jetzt zeigt die Konsole `SPAN`.

Um das Problem zu vermeiden, dass `node.firstChild` `#text` oder `#comment`-Knoten zurückgibt, kann {{domxref("Element.firstElementChild")}} verwendet werden, um nur das erste Elementknoten zurückzugeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.firstElementChild")}}
- {{domxref("Node.lastChild")}}
