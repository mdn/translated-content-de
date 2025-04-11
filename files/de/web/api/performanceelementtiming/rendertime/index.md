---
title: "PerformanceElementTiming: renderTime Eigenschaft"
short-title: renderTime
slug: Web/API/PerformanceElementTiming/renderTime
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`renderTime`** der [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Schnittstelle gibt die Renderzeit des zugehörigen Elements zurück.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit der Renderzeit des Elements.

Für Bilder wird dies der **Bild-Rendering-Zeitstempel** sein. Dies wird als das nächste Rendering definiert, das auftritt, nachdem das Bild vollständig geladen ist. Wenn die Timing-Berechtigungsprüfung fehlschlägt (wie im [Timing-allow-origin](/de/docs/Web/HTTP/Reference/Headers/Timing-Allow-Origin)-Header definiert), wird `0` zurückgegeben.

Für Textknoten wird dies der **Text-Rendering-Zeitstempel** sein. Dies wird definiert als der Zeitpunkt, zu dem das Element als Text gemalt wird.

## Beispiele

### Protokollierung von `renderTime`

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attribut hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Performance-Einträge des Typs `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten von vor der Beobachtererstellung zuzugreifen. Der Aufruf von `entry.renderTime` gibt die Renderzeit des Bild-Elements zurück.

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

Browser [können jetzt eine leicht feinere Renderzeit offenlegen](https://github.com/w3c/paint-timing/issues/104) in diesen Situationen. Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).

Um genauere Cross-Origin-Renderzeitinformationen anzuzeigen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` zu erlauben, eine genaue `renderTime` zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Alternativ können Sie [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) verwenden, die den Wert der `renderTime` des Eintrags zurückgibt, wenn er nicht `0` ist, und andernfalls den Wert der `loadTime` dieses Eintrags. Es wird jedoch empfohlen, den {{HTTPHeader("Timing-Allow-Origin")}}-Header zu setzen, damit die Metriken genauer sind.

Wenn Sie `startTime` verwenden, können Sie Ungenauigkeiten kennzeichnen, indem Sie prüfen, ob `renderTime` verwendet wurde:

```js
const isRenderTime = entry.renderTime ? true : false;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
