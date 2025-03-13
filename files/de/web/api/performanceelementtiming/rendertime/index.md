---
title: "PerformanceElementTiming: renderTime-Eigenschaft"
short-title: renderTime
slug: Web/API/PerformanceElementTiming/renderTime
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`renderTime`** des [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Interfaces gibt die Renderzeit des zugehörigen Elements zurück.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit der Renderzeit des Elements.

Für Bilder wird dies der **Bild-Rendering-Zeitstempel** sein. Dieser wird als der nächste Zeichenvorgang definiert, der nach dem vollständigen Laden des Bildes erfolgt. Wenn die Timing-Erlaubnisüberprüfung fehlschlägt (wie durch den [Timing-Allow-Origin](/de/docs/Web/HTTP/Reference/Headers/Timing-Allow-Origin)-Header definiert), wird `0` zurückgegeben.

Für Textknoten wird dies der **Text-Rendering-Zeitstempel** sein. Dies wird definiert, wenn das Element textuell gezeichnet wird.

## Beispiele

### Protokollierung von `renderTime`

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attribut hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Performance-Einträge des Typs `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten vor der Erstellung des Observers zuzugreifen. Das Aufrufen von `entry.renderTime` gibt die Renderzeit des Bild-Elements zurück.

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

### Renderzeit bei Cross-Origin-Bildern

Aus Sicherheitsgründen war der Wert der `renderTime`-Eigenschaft ursprünglich `0`, wenn die Ressource eine Cross-Origin-Anfrage ist. Stattdessen sollte die `loadTime`-Eigenschaft als Fallback verwendet werden.

Browser [können jetzt eine leicht grobkörnige Renderzeit offenlegen](https://github.com/w3c/paint-timing/issues/104) in diesen Situationen. Prüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).

Um genauere Cross-Origin-Renderzeit-Informationen preiszugeben, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header gesetzt werden.

Zum Beispiel sollte die Cross-Origin-Ressource senden, um `https://developer.mozilla.org` eine genaue `renderTime` zu erlauben:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Alternativ können Sie [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) verwenden, das den Wert der `renderTime` des Eintrags zurückgibt, wenn es nicht `0` ist, und andernfalls den Wert der [`loadTime`](/de/docs/Web/API/PerformanceElementTiming/loadTime) dieses Eintrags. Es wird jedoch empfohlen, den {{HTTPHeader("Timing-Allow-Origin")}}-Header zu setzen, damit die Metriken genauere Ergebnisse liefern.

Wenn Sie `startTime` verwenden, können Sie Ungenauigkeiten feststellen, indem Sie überprüfen, ob `renderTime` verwendet wurde:

```js
const isRenderTime = entry.renderTime ? true : false;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
