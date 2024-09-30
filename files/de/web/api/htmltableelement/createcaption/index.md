---
title: "HTMLTableElement: createCaption() Methode"
short-title: createCaption()
slug: Web/API/HTMLTableElement/createCaption
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`HTMLTableElement.createCaption()`** Methode gibt das
{{HtmlElement("caption")}}-Element zurück, das mit einem bestimmten {{HtmlElement("table")}} verbunden ist.
Wenn kein `<caption>`-Element in der Tabelle existiert, wird dieses durch die Methode erstellt und anschließend zurückgegeben.

> [!NOTE]
> Wenn keine Beschriftung existiert, fügt `createCaption()` eine neue Beschriftung direkt in die Tabelle ein. Die Beschriftung muss nicht separat hinzugefügt werden, wie es der Fall wäre, wenn [`Document.createElement()`](/de/docs/Web/API/Document/createElement) verwendet worden wäre, um das neue `<caption>`-Element zu erstellen.

## Syntax

```js-nolint
createCaption()
```

### Parameter

Keine.

### Rückgabewert

[`HTMLTableCaptionElement`](/de/docs/Web/API/HTMLTableCaptionElement)

## Beispiele

Dieses Beispiel verwendet JavaScript, um einer Tabelle, die ursprünglich keine hat, eine Beschriftung hinzuzufügen.

### HTML

```html
<table>
  <tr>
    <td>Cell 1.1</td>
    <td>Cell 1.2</td>
    <td>Cell 1.3</td>
  </tr>
  <tr>
    <td>Cell 2.1</td>
    <td>Cell 2.2</td>
    <td>Cell 2.3</td>
  </tr>
</table>
```

### JavaScript

```js
let table = document.querySelector("table");
let caption = table.createCaption();
caption.textContent = "This caption was created by JavaScript!";
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
