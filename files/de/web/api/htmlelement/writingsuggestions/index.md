---
title: "HTMLElement: writingSuggestions-Eigenschaft"
short-title: writingSuggestions
slug: Web/API/HTMLElement/writingSuggestions
l10n:
  sourceCommit: 8d5d18805ad96e1c56d72de5c26de60e86dfa817
---

{{APIRef("HTML DOM")}}

Die **`writingSuggestions`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces ist ein String, der angibt, ob vom Browser bereitgestellte Schreibvorschläge im Geltungsbereich des Elements aktiviert sein sollen oder nicht.

Sie spiegelt den Wert des [`writingsuggestions`](/de/docs/Web/HTML/Global_attributes/writingsuggestions) HTML-Globalattributs wider.

## Wert

Ein aufgezählter Wert; mögliche Werte sind:

- `"true"`
  - : Der Browser zeigt automatisch die virtuelle Tastatur an, wenn der Benutzer das Element antippt oder den Fokus darauf setzt.
- `"false"`
  - : Der Browser zeigt die virtuelle Tastatur nicht automatisch an: Das Anzeigen/Verbergen der virtuellen Tastatur wird manuell durch das Skript gesteuert.

## Beispiele

Das folgende Beispiel zeigt, wie man Schreibvorschläge, die von Benutzeragenten angeboten werden, über ein Skript deaktiviert:

```js
const element = document.querySelector("input");

// disable user agent writing suggestions
element.writingSuggestions = "false";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`writingsuggestions`](/de/docs/Web/HTML/Global_attributes/writingsuggestions) HTML-Globalattribut
