---
title: "Navigator: clipboard-Eigenschaft"
short-title: clipboard
slug: Web/API/Navigator/clipboard
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`clipboard`** Lese-only Eigenschaft des {{domxref("Navigator")}} Interface gibt ein {{domxref("Clipboard")}} Objekt zurück, das zum Lesen und Schreiben der Inhalte der Zwischenablage verwendet wird.

Dies ist der Einstiegspunkt zur [Clipboard-API](/de/docs/Web/API/Clipboard_API), die verwendet werden kann, um Ausschneiden-, Kopieren- und Einfügen-Funktionen in einer Webanwendung zu implementieren.

## Wert

Das {{domxref("Clipboard")}} Objekt, das zum Zugriff auf die Systemzwischenablage verwendet wird.

## Beispiele

Der folgende Code verwendet `navigator.clipboard`, um auf die Systemzwischenablage zuzugreifen und Textinhalte aus der Zwischenablage zu lesen.

```js
navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".cliptext").innerText = clipText),
  );
```

Dieses Snippet ersetzt den Inhalt des Elements, dessen Klasse `"cliptext"` ist, mit dem Textinhalt der Zwischenablage.
Vielleicht wird dieser Code in einer Browsererweiterung verwendet, die die aktuellen Zwischenablageinhalte anzeigt und diese automatisch aktualisiert, entweder periodisch oder wenn bestimmte Ereignisse ausgelöst werden.

Wenn die Zwischenablage leer ist oder keinen Text enthält, werden die Inhalte des `"cliptext"`-Elements gelöscht.
Dies geschieht, weil {{domxref("Clipboard.readText", "readText()")}} einen leeren String zurückgibt, wenn die Zwischenablage leer ist oder keinen Text enthält.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
