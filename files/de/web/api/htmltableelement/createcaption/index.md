---
title: "HTMLTableElement: createCaption()-Methode"
short-title: createCaption()
slug: Web/API/HTMLTableElement/createCaption
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

Die **`createCaption()`**-Methode der [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Schnittstelle erstellt ein {{HTMLElement("caption")}}-Element, fügt es als erstes Kind des angegebenen {{HTMLElement("table")}} ein und gibt es zurück. Wenn die Tabelle bereits ein `<caption>`-Elementkind hat, gibt diese Methode das erste solcher Kinder zurück, ohne eins zu erstellen.

Wenn eine Erstellung erforderlich ist, erstellt und fügt diese Methode das Element direkt ein, ohne dass separate Aufrufe von Methoden wie [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) erforderlich sind.

## Syntax

```js-nolint
createCaption()
```

### Parameter

Keine.

### Rückgabewert

Ein [`HTMLTableCaptionElement`](/de/docs/Web/API/HTMLTableCaptionElement).

## Beispiele

Dieses Beispiel verwendet JavaScript, um einer Tabelle, die zunächst keine besitzt, eine Beschriftung hinzuzufügen.

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
const table = document.querySelector("table");
const caption = table.createCaption();
caption.textContent = "This caption was created by JavaScript!";
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableElement.createTBody()`](/de/docs/Web/API/HTMLTableElement/createTBody)
- [`HTMLTableElement.createTFoot()`](/de/docs/Web/API/HTMLTableElement/createTFoot)
- [`HTMLTableElement.createTHead()`](/de/docs/Web/API/HTMLTableElement/createTHead)
- [`HTMLTableElement.deleteCaption()`](/de/docs/Web/API/HTMLTableElement/deleteCaption)
