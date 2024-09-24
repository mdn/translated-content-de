---
title: "HTMLImageElement: fetchPriority-Eigenschaft"
short-title: fetchPriority
slug: Web/API/HTMLImageElement/fetchPriority
l10n:
  sourceCommit: f8b524a5fbdedf04ed5d3bac2200c33c5eda8148
---

{{APIRef}}

Die **`fetchPriority`**-Eigenschaft des {{domxref("HTMLImageElement")}}-Interfaces stellt einen Hinweis für den Browser dar, wie er das Abrufen des Bildes im Vergleich zu anderen Bildern priorisieren soll.

## Wert

Ein String, der den Prioritätshinweis darstellt. Mögliche Werte sind:

- `high`
  - : Ruft das Bild mit hoher Priorität im Vergleich zu anderen Bildern ab.
- `low`
  - : Ruft das Bild mit niedriger Priorität im Vergleich zu anderen Bildern ab.
- `auto`
  - : Standardmodus, der keine Präferenz für die Abrufpriorität ausdrückt.
    Der Browser entscheidet, was am besten für den Benutzer ist.

Die `fetchPriority`-Eigenschaft ermöglicht es Ihnen, hohe oder niedrige Prioritäten für das Abrufen von Bildern zu signalisieren. Dies kann nützlich sein, wenn sie auf {{HTMLElement("img")}}-Elemente angewendet wird, um Bilder zu signalisieren, die zu Beginn des Ladeprozesses für die Benutzererfahrung "wichtig" sind.

Die Auswirkungen des Hinweises auf das Laden von Ressourcen sind browserspezifisch, daher sollten Sie auf mehreren Browser-Engines testen.

Verwenden Sie es sparsam für außergewöhnliche Fälle, in denen der Browser möglicherweise nicht in der Lage ist, automatisch den besten Weg zum Laden des Bildes zu bestimmen. Ein übermäßiger Gebrauch kann zu Leistungseinbußen führen.

## Beispiele

```js
const img = new Image();
img.fetchPriority = "high";
img.src = "img/logo.png";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLLinkElement.fetchPriority")}}
- {{domxref("HTMLScriptElement.fetchPriority")}}
