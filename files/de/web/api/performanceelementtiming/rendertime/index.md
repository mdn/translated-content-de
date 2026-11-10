---
title: "PerformanceElementTiming: renderTime-Eigenschaft"
short-title: renderTime
slug: Web/API/PerformanceElementTiming/renderTime
l10n:
  sourceCommit: b9569fcd65bb09ea7e032ef0938185eccdc2d9c4
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`renderTime`** der Schnittstelle [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) gibt den Zeitpunkt zurück, zu dem das zugehörige Element gerendert wurde.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt angibt, zu dem das Element gerendert wurde.

Bei Bildern ist dies der **Zeitstempel für das Rendern des Bildes**. Er entspricht dem nächsten Zeichenvorgang, nachdem das Bild vollständig geladen wurde. Wenn die Timing-Allow-Prüfung fehlschlägt (wie durch den Header [Timing-Allow-Origin](/de/docs/Web/HTTP/Reference/Headers/Timing-Allow-Origin) definiert), wird `0` zurückgegeben.

Bei Textknoten ist dies der **Zeitstempel für das Rendern des Textes**. Er gibt an, wann der Text des Elements gezeichnet wird.

### Renderzeit von Bildern aus anderen Ursprüngen

Aus Sicherheitsgründen war der Wert der Eigenschaft `renderTime` ursprünglich `0`, wenn die Ressource über eine ursprungsübergreifende Anfrage geladen wurde. Stattdessen sollte die Eigenschaft `loadTime` als Ersatzwert verwendet werden.

Browser [können in diesen Fällen inzwischen eine etwas weniger genaue Renderzeit bereitstellen](https://github.com/w3c/paint-timing/issues/104). Prüfen Sie die [Browser-Unterstützung](#browser-kompatibilität).

Um genauere Informationen zur Renderzeit von Ressourcen aus anderen Ursprüngen bereitzustellen, muss der HTTP-Antwortheader {{HTTPHeader("Timing-Allow-Origin")}} gesetzt werden.

Damit beispielsweise `https://developer.mozilla.org` einen genauen `renderTime`-Wert sehen kann, sollte die Ressource aus einem anderen Ursprung Folgendes senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Alternativ können Sie [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) verwenden. Diese Eigenschaft gibt den `renderTime`-Wert des Eintrags zurück, sofern er nicht `0` ist, andernfalls den Wert von [`loadTime`](/de/docs/Web/API/PerformanceElementTiming/loadTime). Es wird jedoch empfohlen, den Header {{HTTPHeader("Timing-Allow-Origin")}} zu setzen, damit die Messwerte genauer sind.

Wenn Sie `startTime` verwenden, können Sie mögliche Ungenauigkeiten kennzeichnen, indem Sie prüfen, ob `renderTime` verwendet wurde:

```js
const isRenderTime = Boolean(entry.renderTime);
```

## Beispiele

### `renderTime` protokollieren

In diesem Beispiel wird ein {{HTMLElement("img")}}-Element mithilfe des Attributs [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) beobachtet. Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Performance-Einträge vom Typ `"element"` abzurufen. Mit dem Flag `buffered` können auch Daten aus der Zeit vor der Erstellung des Observers abgerufen werden. Der Aufruf von `entry.renderTime` gibt den Zeitpunkt zurück, zu dem das Bildelement gerendert wurde.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
