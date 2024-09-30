---
title: "HTMLImageElement: fetchPriority-Eigenschaft"
short-title: fetchPriority
slug: Web/API/HTMLImageElement/fetchPriority
l10n:
  sourceCommit: f8b524a5fbdedf04ed5d3bac2200c33c5eda8148
---

{{APIRef}}

Die **`fetchPriority`**-Eigenschaft des
[`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces stellt einen Hinweis für den Browser dar, wie er das Laden des Bildes im Vergleich zu anderen Bildern priorisieren sollte.

## Wert

Ein String, der den Prioritätshinweis darstellt. Mögliche Werte sind:

- `high`
  - : Das Bild wird mit hoher Priorität im Vergleich zu anderen Bildern geladen.
- `low`
  - : Das Bild wird mit niedriger Priorität im Vergleich zu anderen Bildern geladen.
- `auto`
  - : Standardmodus, der keine Präferenz für die Ladepriorität angibt.
    Der Browser entscheidet, was das Beste für den Benutzer ist.

Die `fetchPriority`-Eigenschaft ermöglicht es Ihnen, hohe oder niedrige Priorität für das Laden von Bildern anzugeben. Dies kann nützlich sein, wenn es auf {{HTMLElement("img")}}-Elemente angewendet wird, um anzuzeigen, dass Bilder früh im Ladeprozess für die Benutzererfahrung "wichtig" sind.

Die Auswirkungen des Hinweises auf das Ressourcenladen sind browserspezifisch, daher sollten Sie Tests auf mehreren Browser-Engines durchführen.

Verwenden Sie es sparsam für Ausnahmefälle, in denen der Browser möglicherweise nicht in der Lage ist, automatisch die beste Ladeweise zu bestimmen. Übermäßiger Gebrauch kann zu Leistungseinbußen führen.

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
