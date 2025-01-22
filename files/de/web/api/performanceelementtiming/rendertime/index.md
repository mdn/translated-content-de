---
title: "PerformanceElementTiming: Eigenschaft renderTime"
short-title: renderTime
slug: Web/API/PerformanceElementTiming/renderTime
l10n:
  sourceCommit: 9070ad78e5933064ce6b67eed53a62d5cf0cec83
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`renderTime`**-Eigenschaft (schreibgeschützt) der Schnittstelle [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) gibt die Renderzeit des zugehörigen Elements zurück.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit der Renderzeit des Elements.

Für Bilder wird dies der **Bild-Rendering-Zeitstempel** sein. Dies ist definiert als die nächste Darstellung, die erfolgt, nachdem das Bild vollständig geladen wurde. Wenn die Timing-Erlaubnis-Prüfung fehlschlägt (wie durch den [Timing-allow-origin](/de/docs/Web/HTTP/Headers/Timing-Allow-Origin) Header definiert), wird `0` zurückgegeben.

Für Textknoten wird dies der **Text-Rendering-Zeitstempel** sein. Dies ist definiert, wenn das Element als Text gerendert wird.

## Beispiele

### `renderTime` protokollieren

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das Attribut [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Performance-Einträge vom Typ `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten vor der Observer-Erstellung zuzugreifen. Das Aufrufen von `entry.renderTime` gibt die Renderzeit des Bildelements zurück.

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

Browser [können jetzt eine leicht grob granulierte Renderzeit bereitstellen](https://github.com/w3c/paint-timing/issues/104) in diesen Situationen. Überprüfen Sie die [Browser-Unterstützung](#browser-kompatibilität).

Um genauere Informationen zur Cross-Origin-Renderzeit bereitzustellen, muss der HTTP-Antwort-Header {{HTTPHeader("Timing-Allow-Origin")}} gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` eine genaue `renderTime` anzuzeigen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Alternativ können Sie [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) verwenden, die den Wert der `renderTime` des Eintrags zurückgibt, wenn er nicht `0` ist, und andernfalls den Wert der [`loadTime`](/de/docs/Web/API/PerformanceElementTiming/loadTime) dieses Eintrags. Es wird jedoch empfohlen, den {{HTTPHeader("Timing-Allow-Origin")}}-Header zu setzen, damit die Metriken genauer sind.

Wenn Sie `startTime` verwenden, können Sie Ungenauigkeiten kennzeichnen, indem Sie überprüfen, ob `renderTime` verwendet wurde:

```js
const isRenderTime = entry.renderTime ? true : false;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
