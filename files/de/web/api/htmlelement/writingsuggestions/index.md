---
title: "HTMLElement: writingSuggestions-Eigenschaft"
short-title: writingSuggestions
slug: Web/API/HTMLElement/writingSuggestions
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`writingSuggestions`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle ist ein String, der angibt, ob die von Browsern bereitgestellten Schreibvorschläge im Geltungsbereich des Elements aktiviert werden sollen oder nicht.

Sie spiegelt den Wert des globalen HTML-Attributs [`writingsuggestions`](/de/docs/Web/HTML/Reference/Global_attributes/writingsuggestions) wider.

## Wert

Ein enumerierter Wert; mögliche Werte sind:

- `"true"`
  - : Der Browser zeigt automatisch die virtuelle Tastatur an, wenn der Benutzer das Element antippt oder den Fokus darauf setzt.
- `"false"`
  - : Der Browser zeigt die virtuelle Tastatur nicht automatisch an; das Anzeigen/Verbergen der virtuellen Tastatur wird manuell durch das Skript gesteuert.

## Beispiele

Das folgende Beispiel zeigt, wie Schreibvorschläge, die von Benutzeragenten angeboten werden, per Skript deaktiviert werden:

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

- [`writingsuggestions`](/de/docs/Web/HTML/Reference/Global_attributes/writingsuggestions) globales HTML-Attribut
