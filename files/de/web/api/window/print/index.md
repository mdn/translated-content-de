---
title: "Fenster: print()-Methode"
short-title: print()
slug: Web/API/Window/print
l10n:
  sourceCommit: 62cedc63226017e9e7d0718b6fea3529ca8dbf37
---

{{APIRef}}

Öffnet den Druckdialog, um das aktuelle Dokument zu drucken.

Wenn das Dokument noch lädt, wenn diese Funktion aufgerufen wird, wird das Dokument das Laden beenden, bevor der Druckdialog geöffnet wird.

Diese Methode wird blockieren, während der Druckdialog geöffnet ist.

## Syntax

```js-nolint
print()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drucken](/de/docs/Web/CSS/CSS_media_queries/Printing)
- {{ domxref("window.beforeprint_event", "beforeprint") }} Event
- {{ domxref("window.afterprint_event", "afterprint") }} Event
