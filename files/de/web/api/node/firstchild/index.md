---
title: "Node: Eigenschaft firstChild"
short-title: firstChild
slug: Web/API/Node/firstChild
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("DOM")}}

Die schreibgeschützte **`firstChild`**-Eigenschaft der [`Node`](/de/docs/Web/API/Node)-Schnittstelle gibt das erste Kind der Node im Baum zurück oder `null`, wenn die Node keine Kinder hat.

Wenn die Node ein [`Document`](/de/docs/Web/API/Document) ist, gibt diese Eigenschaft das erste Node in der Liste ihrer direkten Kinder zurück.

> [!NOTE]
> Diese Eigenschaft kann jeden Knotentyp zurückgeben, der das erste Kind ist.
> Es kann ein [`Text`](/de/docs/Web/API/Text) oder ein [`Comment`](/de/docs/Web/API/Comment) Node sein.
> Wenn Sie das erste [`Element`](/de/docs/Web/API/Element) möchten, das ein Kind eines anderen Elements ist,
> erwägen Sie die Verwendung von [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild).

## Wert

Ein [`Node`](/de/docs/Web/API/Node) oder `null`, wenn keine vorhanden sind.

## Beispiel

Dieses Beispiel zeigt die Verwendung von `firstChild` und wie Leerzeichen-Nodes diese Eigenschaft beeinflussen könnten.

```html
<p id="para-01">
  <span>First span</span>
</p>

<script>
  const p01 = document.getElementById("para-01");
  console.log(p01.firstChild.nodeName);
</script>
```

Im obigen Beispiel zeigt die [Konsole](/de/docs/Web/API/console) '#text' an, weil ein Textknoten eingefügt wird, um den Leerraum zwischen dem Ende der öffnenden `<p>`- und `<span>`-Tags beizubehalten. **Jedes** [Leerzeichen](/de/docs/Web/API/Document_Object_Model/Whitespace) erzeugt einen `#text`-Knoten, von einem einzelnen Leerzeichen bis zu mehreren Leerzeichen, Zeilenumbrüchen, Tabulatoren usw.

Ein weiterer `#text`-Knoten wird zwischen den schließenden `</span>`- und `</p>`-Tags eingefügt.

Wenn dieser Leerraum aus der Quelle entfernt wird, werden die #text-Knoten nicht eingefügt und das span-Element wird zum ersten Kind des Absatzes.

```html
<p id="para-01"><span>First span</span></p>

<script>
  const p01 = document.getElementById("para-01");
  console.log(p01.firstChild.nodeName);
</script>
```

Jetzt zeigt die Konsole 'SPAN' an.

Um das Problem zu vermeiden, dass `node.firstChild` `#text` oder `#comment` Nodes zurückgibt, kann [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild) verwendet werden, um nur das erste Element-Node zurückzugeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild)
- [`Node.lastChild`](/de/docs/Web/API/Node/lastChild)
