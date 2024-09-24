---
title: "PerformanceResourceTiming: initiatorType-Eigenschaft"
short-title: initiatorType
slug: Web/API/PerformanceResourceTiming/initiatorType
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`initiatorType`** ist ein String, der das Webplattform-Feature darstellt, das das Laden der Ressource initiiert hat.

> [!NOTE]
> Diese Eigenschaft repräsentiert nicht den Typ des abgerufenen Inhalts. Eine `.css`-Datei kann über ein {{HTMLElement("link")}}-Element abgerufen werden, was zu einem `initiatorType` von `link` führt. Wenn Bilder mit `background: url()` in einer CSS-Datei geladen werden, wird der `initiatorType` `css` sein und nicht `img`.

## Wert

Die `initiatorType`-Eigenschaft kann die folgenden Werte haben, oder `other`, wenn keine der Bedingungen zutrifft.

- `audio`
  - : Wenn die Anforderung durch das `src`-Attribut eines {{HTMLElement("audio")}}-Elements initiiert wurde.
- `beacon`
  - : Wenn die Anforderung durch die {{domxref("navigator.sendBeacon()")}}-Methode initiiert wurde.
- `body`
  - : Wenn die Anforderung durch das `background`-Attribut eines {{HTMLElement("body")}}-Elements initiiert wurde.
- `css`
  - : Wenn die Anforderung durch eine CSS-`url()`-Funktion initiiert wurde.
- `early-hint`
  - : Wenn die Anforderung durch eine {{HTTPStatus("103")}} `Early Hint`-Antwort initiiert wurde.
- `embed`
  - : Wenn die Anforderung durch das `src`-Attribut eines {{HTMLElement("embed")}}-Elements initiiert wurde.
- `fetch`
  - : Wenn die Anforderung durch die {{domxref("Window/fetch", "fetch()")}}-Methode initiiert wurde.
- `frame`
  - : Wenn die Anforderung durch das Laden eines {{HTMLElement("frame")}}-Elements initiiert wurde.
- `iframe`
  - : Wenn die Anforderung durch das `src`-Attribut eines {{HTMLElement("iframe")}}-Elements initiiert wurde.
- `icon` {{non-standard_inline}}
  - : Wenn die Anforderung durch ein Favicon initiiert wurde. Nicht standardisiert und nur von Safari gemeldet.
- `image`
  - : Wenn die Anforderung durch ein {{SVGElement("image")}}-Element initiiert wurde.
- `img`
  - : Wenn die Anforderung durch das `src`- oder `srcset`-Attribut eines {{HTMLElement("img")}}-Elements initiiert wurde.
- `input`
  - : Wenn die Anforderung durch ein {{HTMLElement("input")}}-Element vom Typ `image` initiiert wurde.
- `link`
  - : Wenn die Anforderung durch ein {{HTMLElement("link")}}-Element initiiert wurde.
- `navigation`
  - : Wenn die Anforderung durch eine Navigationsanforderung initiiert wurde.
- `object`
  - : Wenn die Anforderung durch ein {{HTMLElement("object")}}-Element initiiert wurde.
- `ping`
  - : Wenn die Anforderung durch das `ping` eines {{HTMLElement("a")}}-Elements initiiert wurde.
- `script`
  - : Wenn die Anforderung durch ein {{HTMLElement("script")}}-Element initiiert wurde.
- `track`
  - : Wenn die Anforderung durch das `src` eines {{HTMLElement("track")}}-Elements initiiert wurde.
- `video`
  - : Wenn die Anforderung durch das `poster` oder `src` eines {{HTMLElement("video")}}-Elements initiiert wurde.
- `xmlhttprequest`
  - : Wenn die Anforderung durch ein {{domxref("XMLHttpRequest")}} initiiert wurde.

## Beispiele

### Filtern von Ressourcen

Die `initiatorType`-Eigenschaft kann verwendet werden, um nur bestimmte Ressourcentiming-Einträge zu erhalten. Beispielsweise nur die, die durch {{HTMLElement("script")}}-Elemente initiiert wurden.

Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitachse des Browsers erfasst werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const scripts = list.getEntries().filter((entry) => {
    return entry.initiatorType === "script";
  });
  console.log(scripts);
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel unter Verwendung von {{domxref("Performance.getEntriesByType()")}}, das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitachse des Browsers vorhanden sind:

```js
const scripts = performance.getEntriesByType("resource").filter((entry) => {
  return entry.initiatorType === "script";
});
console.log(scripts);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
