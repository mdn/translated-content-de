---
title: "PerformanceElementTiming: renderTime-Eigenschaft"
short-title: renderTime
slug: Web/API/PerformanceElementTiming/renderTime
l10n:
  sourceCommit: ec83af3d3b8879673fcdc49c2ed81b0ed73397fa
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`renderTime`** des [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Interfaces gibt die Renderzeit des zugehörigen Elements zurück.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) mit der Renderzeit des Elements.

Für Bilder ist dies der **Bild-Rendering-Zeitstempel**. Dieser ist definiert als der nächste Paint-Vorgang nach dem vollständigen Laden des Bildes. Wenn die Timing-Allow-Prüfung fehlschlägt (wie im [Timing-allow-origin](/de/docs/Web/HTTP/Headers/Timing-Allow-Origin)-Header definiert), wird `0` zurückgegeben.

Für Textknoten ist dies der **Text-Rendering-Zeitstempel**. Dieser ist definiert als der Zeitpunkt, an dem das Element als Text gemalt wird.

## Beispiele

### `renderTime` protokollieren

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element beobachtet, indem das [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attribut hinzugefügt wird. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Performance-Einträge des Typs `"element"` zu erhalten, und das `buffered`-Flag wird verwendet, um auf Daten vor der Erstellung des Observers zuzugreifen. Der Aufruf von `entry.renderTime` gibt die Renderzeit des Bildelements zurück.

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

Aus Sicherheitsgründen ist der Wert der `renderTime`-Eigenschaft `0`, wenn die Ressource eine Cross-Origin-Anfrage ist. Um Informationen zur Renderzeit von Cross-Origin-Ressourcen offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel sollte die Cross-Origin-Ressource, um `https://developer.mozilla.org` die Ansicht der `renderTime` zu ermöglichen, Folgendes senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Alternativ können Sie [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) verwenden, das den Wert von `renderTime` der Eintragung zurückgibt, wenn dieser nicht `0` ist, und ansonsten den Wert von [`loadTime`](/de/docs/Web/API/PerformanceElementTiming/loadTime) dieser Eintragung. Es wird jedoch empfohlen, den {{HTTPHeader("Timing-Allow-Origin")}}-Header zu setzen, damit die Metriken genauer sind.

Wenn Sie `startTime` verwenden, können Sie Ungenauigkeiten kennzeichnen, indem Sie überprüfen, ob `renderTime` verwendet wurde:

```js
const isRenderTime = entry.renderTime ? true : false;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
