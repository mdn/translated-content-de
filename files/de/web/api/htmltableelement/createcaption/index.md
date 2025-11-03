---
title: "HTMLTableElement: createCaption() Methode"
short-title: createCaption()
slug: Web/API/HTMLTableElement/createCaption
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{APIRef("HTML DOM")}}

Die **`HTMLTableElement.createCaption()`** Methode gibt das
{{HtmlElement("caption")}} Element zurück, das mit einem bestimmten {{HtmlElement("table")}} verknüpft ist.
Wenn kein `<caption>` Element in der Tabelle vorhanden ist, erstellt diese Methode
es und gibt es danach zurück.

> [!NOTE]
> Wenn keine Beschriftung existiert, fügt `createCaption()` direkt eine neue Beschriftung
> in die Tabelle ein. Die Beschriftung muss nicht separat hinzugefügt werden, wie es der Fall wäre, wenn [`Document.createElement()`](/de/docs/Web/API/Document/createElement) verwendet worden wäre, um das neue `<caption>` Element zu erstellen.

## Syntax

```js-nolint
createCaption()
```

### Parameter

Keine.

### Rückgabewert

[`HTMLTableCaptionElement`](/de/docs/Web/API/HTMLTableCaptionElement)

## Beispiele

Dieses Beispiel verwendet JavaScript, um einer Tabelle, die anfangs keine hat, eine Beschriftung hinzuzufügen.

### HTML

```html
<table>
  <tbody>
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
  </tbody>
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
