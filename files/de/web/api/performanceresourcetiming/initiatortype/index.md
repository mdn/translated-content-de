---
title: "PerformanceResourceTiming: initiatorType-Eigenschaft"
short-title: initiatorType
slug: Web/API/PerformanceResourceTiming/initiatorType
l10n:
  sourceCommit: 4a0413ef319179b7d0d833c42a156629544c8248
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`initiatorType`** ist eine Zeichenkette, die das Web-Plattform-Feature repräsentiert, das das Laden der Ressource initiiert hat.

> [!NOTE]
> Diese Eigenschaft repräsentiert nicht den Typ des abgerufenen Inhalts. Eine `.css`-Datei kann über ein {{HTMLElement("link")}}-Element abgerufen werden, was zu einem `initiatorType` von `link` führt. Beim Laden von Bildern mit `background: url()` in einer CSS-Datei wird der `initiatorType` `css` und nicht `img` sein.

## Wert

Die Eigenschaft `initiatorType` kann die folgenden Werte annehmen oder `other`, wenn keine der Bedingungen zutrifft.

- `audio`
  - : Wenn die Anfrage durch das `src`-Attribut eines {{HTMLElement("audio")}}-Elements initiiert wurde.
- `beacon`
  - : Wenn die Anfrage durch eine [`navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon)-Methode initiiert wurde.
- `body`
  - : Wenn die Anfrage durch das `background`-Attribut eines {{HTMLElement("body")}}-Elements initiiert wurde.
- `css`
  - : Wenn die Anfrage durch eine CSS-`url()`-Funktion initiiert wurde.
- `early-hint`
  - : Wenn die Anfrage durch eine {{HTTPStatus("103")}}-`Early Hint`-Antwort initiiert wurde.
- `embed`
  - : Wenn die Anfrage durch das `src`-Attribut eines {{HTMLElement("embed")}}-Elements initiiert wurde.
- `fetch`
  - : Wenn die Anfrage durch eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode initiiert wurde.
- `frame`
  - : Wenn die Anfrage durch das Laden eines {{HTMLElement("frame")}}-Elements initiiert wurde.
- `iframe`
  - : Wenn die Anfrage durch das `src`-Attribut eines {{HTMLElement("iframe")}}-Elements initiiert wurde.
- `icon` {{non-standard_inline}}
  - : Wenn die Anfrage durch ein Favicon initiiert wurde. Nicht standardisiert und nur von Safari gemeldet.
- `image`
  - : Wenn die Anfrage durch ein {{SVGElement("image")}}-Element initiiert wurde.
- `img`
  - : Wenn die Anfrage durch das `src`- oder `srcset`-Attribut eines {{HTMLElement("img")}}-Elements initiiert wurde.
- `input`
  - : Wenn die Anfrage durch ein {{HTMLElement("input")}}-Element vom Typ `image` initiiert wurde.
- `link`
  - : Wenn die Anfrage durch ein {{HTMLElement("link")}}-Element initiiert wurde.
- `navigation`
  - : Wenn die Anfrage durch eine Navigationsanfrage initiiert wurde.
- `object`
  - : Wenn die Anfrage durch ein {{HTMLElement("object")}}-Element initiiert wurde.
- `ping`
  - : Wenn die Anfrage durch ein `ping` eines {{HTMLElement("a")}}-Elements initiiert wurde.
- `script`
  - : Wenn die Anfrage durch ein {{HTMLElement("script")}}-Element initiiert wurde.
- `track`
  - : Wenn die Anfrage durch das `src` eines {{HTMLElement("track")}}-Elements initiiert wurde.
- `video`
  - : Wenn die Anfrage durch das `poster` oder `src` eines {{HTMLElement("video")}}-Elements initiiert wurde.
- `xmlhttprequest`
  - : Wenn die Anfrage durch ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) initiiert wurde.

## Beispiele

### Filtern von Ressourcen

Die `initiatorType`-Eigenschaft kann verwendet werden, um nur bestimmte Ressourcentimeing-Einträge zu erhalten. Zum Beispiel nur die, die durch {{HTMLElement("script")}}-Elemente initiiert wurden.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const scripts = list
    .getEntries()
    .filter((entry) => entry.initiatorType === "script");
  console.log(scripts);
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die in der Performance-Zeitleiste des Browsers vorhanden sind, wenn Sie diese Methode aufrufen:

```js
const scripts = performance
  .getEntriesByType("resource")
  .filter((entry) => entry.initiatorType === "script");
console.log(scripts);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
