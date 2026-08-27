---
title: "ProcessingInstruction: getAttribute() Methode"
short-title: getAttribute()
slug: Web/API/ProcessingInstruction/getAttribute
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Die **`getAttribute()`** Methode des [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Interfaces gibt den Wert eines angegebenen Attributs der Verarbeitungshinweise zurück.

Falls das angegebene Attribut nicht existiert, wird der Wert `null` zurückgegeben.

## Syntax

```js-nolint
getAttribute(attributeName)
```

### Parameter

- `attributeName`
  - : Der Name des Attributs, dessen Wert Sie abrufen möchten.

### Rückgabewert

Ein String, der den Wert von `attributeName` enthält, wenn das Attribut existiert; andernfalls `null`.

## Beschreibung

### Groß- und Kleinschreibung

Argumente von Verarbeitungshinweisen sind groß- und kleinschreibungssensitiv.

### Dekodierte Zeichenreferenzen in Attributwerten

HTML-{{Glossary("Character_reference", "Zeichenreferenzen")}} im Quellmarkup eines Attributs (zum Beispiel `&lt;`, `&amp;` oder `&#x3C;`) werden vom HTML-Parser dekodiert, wenn das Dokument geparst wird, sodass `getAttribute()` den dekodierten Wert zurückgibt, nicht den Quellwert.

Zum Beispiel:

```js
const pi = document.createProcessingInstruction(
  "start",
  'data-payload="&lt;b&gt;hi&lt;/b&gt;"',
);

pi.getAttribute("data-payload");
// <b>hi</b>
```

## Beispiele

### Grundlegende Nutzung

```js
const pi = document.createProcessingInstruction("start", 'name="placeholder"');

console.log(pi.getAttribute("name"));
// Logs:
// "placeholder"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ProcessingInstruction.hasAttribute()`](/de/docs/Web/API/ProcessingInstruction/hasAttribute)
- [`ProcessingInstruction.hasAttributes()`](/de/docs/Web/API/ProcessingInstruction/hasAttributes)
- [`ProcessingInstruction.getAttributeNames()`](/de/docs/Web/API/ProcessingInstruction/getAttributeNames)
- [`ProcessingInstruction.setAttribute()`](/de/docs/Web/API/ProcessingInstruction/setAttribute)
- [`ProcessingInstruction.removeAttribute()`](/de/docs/Web/API/ProcessingInstruction/removeAttribute)
- [`ProcessingInstruction.toggleAttribute()`](/de/docs/Web/API/ProcessingInstruction/toggleAttribute)
