---
title: "Navigator: clipboard-Eigenschaft"
short-title: clipboard
slug: Web/API/Navigator/clipboard
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die schreibgeschützte Eigenschaft **`clipboard`** der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt zurück, das zum Lesen und Schreiben der Inhalte der Zwischenablage verwendet wird.

Dies ist der Einstiegspunkt zur [Clipboard-API](/de/docs/Web/API/Clipboard_API), die zur Implementierung von Ausschneide-, Kopier- und Einfüge-Funktionen innerhalb einer Webanwendung verwendet werden kann.

## Wert

Das [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt, das zum Zugriff auf die Systemzwischenablage verwendet wird.

## Beispiele

Der folgende Code verwendet `navigator.clipboard`, um auf die Systemzwischenablage zuzugreifen, um Textinhalte aus der Zwischenablage zu lesen.

```js
navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".cliptext").innerText = clipText),
  );
```

Dieses Snippet ersetzt den Inhalt des Elements, dessen Klasse `"cliptext"` ist, mit den Textinhalten der Zwischenablage.
Vielleicht wird dieser Code in einer Browsererweiterung verwendet, die die aktuellen Zwischenablageinhalte anzeigt und automatisch periodisch oder bei bestimmten Ereignissen aktualisiert.

Wenn die Zwischenablage leer ist oder keinen Text enthält, werden die Inhalte des `"cliptext"`-Elements geleert.
Dies passiert, weil [`readText()`](/de/docs/Web/API/Clipboard/readText) einen leeren String zurückgibt, wenn die Zwischenablage leer ist oder keinen Text enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
