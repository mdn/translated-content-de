---
title: "Navigator: clipboard-Eigenschaft"
short-title: clipboard
slug: Web/API/Navigator/clipboard
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die schreibgeschützte **`clipboard`**-Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt zurück, das zum Lesen und Schreiben der Inhalte der Zwischenablage verwendet wird.

Dies ist der Einstiegspunkt in die [Clipboard-API](/de/docs/Web/API/Clipboard_API), die zum Implementieren von Funktionen zum Ausschneiden, Kopieren und Einfügen innerhalb einer Webanwendung verwendet werden kann.

## Wert

Das [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt, das zum Zugriff auf die System-Zwischenablage verwendet wird.

## Beispiele

Der folgende Code verwendet `navigator.clipboard`, um auf die System-Zwischenablage zuzugreifen und Textinhalte aus der Zwischenablage zu lesen.

```js
navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".clip-text").innerText = clipText),
  );
```

Dieses Snippet ersetzt den Inhalt des Elements, dessen Klasse `"clip-text"` ist, mit den Textinhalten der Zwischenablage.
Vielleicht wird dieser Code in einer Browsererweiterung verwendet, die den aktuellen Zwischenspeicherinhalt anzeigt und sich automatisch periodisch oder bei bestimmten Ereignissen aktualisiert.

Wenn die Zwischenablage leer ist oder keinen Text enthält, wird der Inhalt des `"clip-text"`-Elements gelöscht.
Dies geschieht, weil [`readText()`](/de/docs/Web/API/Clipboard/readText) einen leeren String zurückgibt, wenn die Zwischenablage leer ist oder keinen Text enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
