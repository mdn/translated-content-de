---
title: "HTMLTableElement: Methode createCaption()"
short-title: createCaption()
slug: Web/API/HTMLTableElement/createCaption
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die Methode **`HTMLTableElement.createCaption()`** gibt das
{{HtmlElement("caption")}}-Element zurück, das mit einem bestimmten {{HtmlElement("table")}}-Element verknüpft ist.
Wenn kein `<caption>`-Element in der Tabelle existiert, erstellt diese Methode
es und gibt es dann zurück.

> [!NOTE]
> Wenn keine Caption existiert, fügt `createCaption()` direkt eine neue
> Caption in die Tabelle ein. Die Caption muss nicht separat hinzugefügt werden,
> wie es der Fall wäre, wenn {{domxref("Document.createElement()")}} verwendet worden wäre,
> um das neue `<caption>`-Element zu erstellen.

## Syntax

```js-nolint
createCaption()
```

### Parameter

Keine.

### Rückgabewert

{{domxref("HTMLTableCaptionElement")}}

## Beispiele

Dieses Beispiel verwendet JavaScript, um einer Tabelle, die zunächst keine besitzt, eine Caption hinzuzufügen.

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
