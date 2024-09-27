---
title: "HTMLImageElement: fetchPriority-Eigenschaft"
short-title: fetchPriority
slug: Web/API/HTMLImageElement/fetchPriority
l10n:
  sourceCommit: f8b524a5fbdedf04ed5d3bac2200c33c5eda8148
---

{{APIRef}}

Die **`fetchPriority`**-Eigenschaft des
[`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces repräsentiert einen Hinweis an den Browser, wie
er das Laden des Bildes im Vergleich zu anderen Bildern priorisieren soll.

## Wert

Ein String, der den Prioritätshinweis darstellt. Mögliche Werte sind:

- `high`
  - : Das Bild mit hoher Priorität im Vergleich zu anderen Bildern laden.
- `low`
  - : Das Bild mit niedriger Priorität im Vergleich zu anderen Bildern laden.
- `auto`
  - : Standardmodus, der keine Präferenz für die Ladepriorität festlegt.
    Der Browser entscheidet, was am besten für den Benutzer ist.

Die `fetchPriority`-Eigenschaft ermöglicht es Ihnen, Signale für hohe oder niedrige Priorität für Bildladevorgänge zu senden. Dies kann nützlich sein, wenn es auf {{HTMLElement("img")}}-Elemente angewendet wird, um anzuzeigen, dass Bilder zu Beginn des Ladeprozesses "wichtig" für die Benutzererfahrung sind.

Die Auswirkungen des Hinweises auf das Ressourcenladen sind browserspezifisch, testen Sie daher in mehreren Browser-Engines.

Verwenden Sie es sparsam für besondere Fälle, in denen der Browser möglicherweise nicht in der Lage ist, automatisch die beste Methode zum Laden des Bildes zu ermitteln. Übermäßige Nutzung kann die Leistung beeinträchtigen.

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

- [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority)
- [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority)
