---
title: "ClipboardChangeEvent: Eigenschaft changeId"
short-title: changeId
slug: Web/API/ClipboardChangeEvent/changeId
l10n:
  sourceCommit: c534ba0cb925657de5e99ab8c540eae31afd9382
---

{{securecontext_header}}{{APIRef("Clipboard API")}}{{SeeCompatTable}}

Die **`changeId`**-Eigenschaft der Schnittstelle [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent) gibt eine ganze Zahl zurück, die einen eindeutigen Bezeichner für diesen spezifischen Zwischenablage-Änderungsoperation darstellt.

Der Bezeichner ist über alle Fenster und Tabs mit dem gleichen Speicherschlüssel für die gleiche Zwischenablageänderung konsistent. Dadurch können Anwendungen Ereignisse deduplizieren, wenn mehrere Fenster dieselbe Zwischenablageänderungsbenachrichtigung erhalten.

## Wert

Eine ganze Zahl. Ein kryptographisch abgeleiteter 128-Bit-Integer, der nach dem Schreiben in die Zwischenablage garantiert einen anderen Wert ergibt als vor der Schreiboperation.

## Beispiele

In diesem Beispiel verwendet der Ereignis-Listener, nachdem sich der Inhalt der Zwischenablage ändert, die Eigenschaft `ClipboardChangeEvent.changeId`, um im Konsolenprotokoll die einzigartige ID zu protokollieren, die die Zwischenablage-Änderungsoperation darstellt, die das Ereignis ausgelöst hat.

```js
navigator.clipboard.addEventListener("clipboardchange", (event) => {
  console.log(event.changeId);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ClipboardChangeEvent.types`](/de/docs/Web/API/ClipboardChangeEvent/types)
- [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent)
- [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)
- [Clipboard API](/de/docs/Web/API/Clipboard_API)
