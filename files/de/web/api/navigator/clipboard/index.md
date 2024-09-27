---
title: "Navigator: clipboard-Eigenschaft"
short-title: clipboard
slug: Web/API/Navigator/clipboard
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die schreibgeschützte **`clipboard`**-Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt zurück, das verwendet wird, um die Inhalte der Zwischenablage zu lesen und zu schreiben.

Dies ist der Einstiegspunkt zur [Clipboard API](/de/docs/Web/API/Clipboard_API), die verwendet werden kann, um Ausschneiden-, Kopieren- und Einfügen-Funktionen innerhalb einer Webanwendung zu implementieren.

## Wert

Das [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt, das verwendet wird, um auf die Systemzwischenablage zuzugreifen.

## Beispiele

Der folgende Code verwendet `navigator.clipboard`, um auf die System-Zwischenablage zuzugreifen, um Textinhalte von der Zwischenablage zu lesen.

```js
navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".cliptext").innerText = clipText),
  );
```

Dieses Snippet ersetzt den Inhalt des Elements, dessen Klasse `"cliptext"` ist, mit den Textinhalten der Zwischenablage. Vielleicht wird dieser Code in einer Browsererweiterung verwendet, die die aktuellen Inhalte der Zwischenablage anzeigt und diese automatisch in regelmäßigen Abständen oder bei bestimmten Ereignissen aktualisiert.

Wenn die Zwischenablage leer ist oder keinen Text enthält, werden die Inhalte des `"cliptext"`-Elements gelöscht. Dies geschieht, weil [`readText()`](/de/docs/Web/API/Clipboard/readText) einen leeren String zurückgibt, wenn die Zwischenablage leer ist oder keinen Text enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
