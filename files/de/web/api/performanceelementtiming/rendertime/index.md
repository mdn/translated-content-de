---
title: "PerformanceElementTiming: Eigenschaft renderTime"
short-title: renderTime
slug: Web/API/PerformanceElementTiming/renderTime
l10n:
  sourceCommit: ec83af3d3b8879673fcdc49c2ed81b0ed73397fa
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`renderTime`**-Eigenschaft des [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Interfaces gibt die Renderzeit des zugehörigen Elements zurück.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit der Renderzeit des Elements.

Für Bilder ist dies der **Bild-Rendering-Zeitstempel**. Dies wird als der nächste Paint definiert, der nach dem vollständigen Laden des Bildes auftritt. Wenn die Timing-Überprüfung fehlschlägt (wie durch den [Timing-allow-origin](/de/docs/Web/HTTP/Headers/Timing-Allow-Origin)-Header definiert), wird `0` zurückgegeben.

Für Textknoten ist dies der **Text-Rendering-Zeitstempel**. Dies wird definiert, wenn das Element als Text gemalt wird.

## Beispiele

### `renderTime` protokollieren

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das Attribut [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) ist registriert, um alle Performance-Einträge vom Typ `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten vor der Erstellung des Beobachters zuzugreifen. Das Aufrufen von `entry.renderTime` gibt die Renderzeit des Bild-Elements zurück.

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

### Renderzeit von Bildern über Cross-Origin

Aus Sicherheitsgründen hat die `renderTime`-Eigenschaft den Wert `0`, wenn die Ressource eine Cross-Origin-Anfrage ist. Um Informationen zur Renderzeit bei Cross-Origin-Ressourcen offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header gesetzt werden.

Um beispielsweise `https://developer.mozilla.org` zu erlauben, `renderTime` zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Alternativ können Sie [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) verwenden, welches den Wert der `renderTime` des Eintrags zurückgibt, wenn diese nicht `0` ist, andernfalls den Wert der [`loadTime`](/de/docs/Web/API/PerformanceElementTiming/loadTime) dieses Eintrags. Es wird jedoch empfohlen, den {{HTTPHeader("Timing-Allow-Origin")}}-Header zu setzen, damit die Metriken genauer sind.

Wenn Sie `startTime` verwenden, können Sie Ungenauigkeiten kennzeichnen, indem Sie überprüfen, ob `renderTime` verwendet wurde:

```js
const isRenderTime = entry.renderTime ? true : false;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
