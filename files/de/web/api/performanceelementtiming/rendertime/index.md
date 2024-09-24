---
title: "PerformanceElementTiming: renderTime-Eigenschaft"
short-title: renderTime
slug: Web/API/PerformanceElementTiming/renderTime
l10n:
  sourceCommit: ec83af3d3b8879673fcdc49c2ed81b0ed73397fa
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`renderTime`**-Eigenschaft der Schnittstelle {{domxref("PerformanceElementTiming")}} gibt die Renderzeit des zugehörigen Elements zurück.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}} mit der Renderzeit des Elements.

Für Bilder ist dies der **Bild-Rendering-Zeitstempel**. Dies wird als das nächste Zeichnen definiert, das nach dem vollständigen Laden des Bildes erfolgt. Wenn die Timing-Berechtigungsprüfung fehlschlägt (wie im [Timing-allow-origin](/de/docs/Web/HTTP/Headers/Timing-Allow-Origin) Header definiert), wird `0` zurückgegeben.

Für Textknoten ist dies der **Text-Rendering-Zeitstempel**. Dies wird als der Zeitpunkt definiert, zu dem das Element als Text gezeichnet wird.

## Beispiele

### `renderTime` protokollieren

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) Attribut hinzugefügt wird. Ein {{domxref("PerformanceObserver")}} wird registriert, um alle Performance-Einträge des Typs `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten vor der Erstellung des Observers zuzugreifen. Der Aufruf von `entry.renderTime` gibt die Renderzeit des Bildelements zurück.

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

### Renderzeit eines Cross-Origin-Bildes

Aus Sicherheitsgründen ist der Wert der `renderTime`-Eigenschaft `0`, wenn die Ressource eine Cross-Origin-Anfrage ist. Um Informationen zur Renderzeit bei Cross-Origin anzubieten, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header gesetzt werden.

Um beispielsweise `https://developer.mozilla.org` zu erlauben, `renderTime` zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Alternativ kann man {{domxref("PerformanceEntry.startTime", "startTime")}} verwenden, welches den Wert von `renderTime` der Eintragung zurückgibt, wenn dieser nicht `0` ist, und ansonsten den Wert von {{domxref("PerformanceElementTiming.loadTime", "loadTime")}} dieser Eintragung. Es wird jedoch empfohlen, den {{HTTPHeader("Timing-Allow-Origin")}} Header zu setzen, damit die Metriken genauer sind.

Wenn Sie `startTime` verwenden, können Sie eventuelle Ungenauigkeiten kennzeichnen, indem Sie prüfen, ob `renderTime` verwendet wurde:

```js
const isRenderTime = entry.renderTime ? true : false;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
