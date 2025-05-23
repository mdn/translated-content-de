---
title: "PerformanceElementTiming: Eigenschaft renderTime"
short-title: renderTime
slug: Web/API/PerformanceElementTiming/renderTime
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`renderTime`** schreibgeschützte Eigenschaft des [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Interfaces gibt die Renderzeit des zugehörigen Elements zurück.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit der Renderzeit des Elements.

Für Bilder ist dies der **Bild-Renderzeitstempel**. Dieser wird als der nächste Zeichenvorgang definiert, der nach dem vollständigen Laden des Bildes auftritt. Wenn die Timing-Erlaubnisprüfung fehlschlägt (wie durch den [Timing-Allow-Origin](/de/docs/Web/HTTP/Reference/Headers/Timing-Allow-Origin)-Header definiert), wird `0` zurückgegeben.

Für Textknoten ist dies der **Text-Renderzeitstempel**. Dieser wird definiert als der Zeitpunkt, an dem das Element als Text gerendert wird.

## Beispiele

### Protokollierung von `renderTime`

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das Attribut [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Leistungsdaten von Typ `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten zuzugreifen, die vor der Erstellung des Beobachters existieren. Durch Aufrufen von `entry.renderTime` wird die Renderzeit des Bildelements zurückgegeben.

```html
<img
  src="image.jpg"
  alt="a nice image"
  elementtiming="big-image"
  id="myImage" />
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.identifier === "big-image") {
      console.log(entry.renderTime);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

### Renderzeit von Cross-Origin-Bildern

Aus Sicherheitsgründen war der Wert der `renderTime`-Eigenschaft ursprünglich `0`, wenn die Ressource eine Cross-Origin-Anfrage ist. Stattdessen sollte die `loadTime`-Eigenschaft als Fallback verwendet werden.

Browser [können jetzt eine leicht gröbere Renderzeit](https://github.com/w3c/paint-timing/issues/104) in diesen Situationen offenlegen. Überprüfen Sie die [Browser-Unterstützung](#browser-kompatibilität).

Um genauere Cross-Origin-Renderzeit-Informationen offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Ein Beispiel: Um `https://developer.mozilla.org` zu erlauben, eine genaue `renderTime` zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Alternativ können Sie [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) verwenden, welche den Wert von `renderTime` zurückgibt, falls dieser nicht `0` ist, und ansonsten den Wert von [`loadTime`](/de/docs/Web/API/PerformanceElementTiming/loadTime). Es wird jedoch empfohlen, den {{HTTPHeader("Timing-Allow-Origin")}}-Header zu setzen, damit die Metriken genauer sind.

Wenn Sie `startTime` verwenden, können Sie Ungenauigkeiten kennzeichnen, indem Sie prüfen, ob `renderTime` benutzt wurde:

```js
const isRenderTime = Boolean(entry.renderTime);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
