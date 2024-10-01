---
title: "PerformanceResourceTiming: contentType-Eigenschaft"
short-title: contentType
slug: Web/API/PerformanceResourceTiming/contentType
l10n:
  sourceCommit: c28529c0cc75eb5d2de857c923f0a1ebd5145313
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`contentType`** der Schnittstelle [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) ist ein Zeichenfolgewert, der den Inhaltstyp der abgerufenen Ressource angibt, formatiert als {{Glossary("MIME_type", "MIME-Typ")}} und Subtyp, getrennt durch einen Schrägstrich.

Der Inhaltstyp ist eine minimierte und „standardisierte“ Version des MIME-Typs, der aus dem {{httpheader("Content-Type")}} HTTP-Header extrahiert wird, der in der Antwort des Ressourcen-Abrufs gesendet wird. Für JavaScript, JSON, SVG und XML wird der MIME-Typ durch eine repräsentative MIME-Typ/Subtyp-Zeichenfolge ersetzt. Andere vom Browser unterstützte Typen werden durch die MIME-Typ/Subtyp-Zeichenfolge im Header dargestellt (andere Informationen im Header werden verworfen).

## Wert

Eine Zeichenfolge, die die „Essenz“ des MIME-Typs des Inhalts angibt.
Dies kann einer der folgenden Werte sein:

- `text/javascript`
  - : JavaScript-Inhalt.
- `application/json`
  - : JSON-Inhalt.
- `image/svg+xml`
  - : SVG-Inhalt.
- `application/xml`
  - : XML-Inhalt (außer SVG).
- MIME-Typ/Subtyp
  - : Jeder andere vom Benutzeragenten unterstützte MIME-Typ/Subtyp.
- `""` (leere Zeichenfolge)
  - : Wird für MIME-Typen zurückgegeben, die vom Browser nicht unterstützt werden, oder wenn der Ressourcenabruf aufgrund von [CORS](/de/docs/Web/HTTP/CORS)-Prüfungen fehlgeschlagen ist.

## Beispiele

### Ressourcen filtern

Die `contentType`-Eigenschaft kann verwendet werden, um nur bestimmte Ressourcentiming-Einträge zu erhalten; zum Beispiel nur solche, die sich auf Skripte beziehen.

Das folgende Beispiel nutzt einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um über neue `resource`-Performance-Einträge zu informieren, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const javascriptResources = list.getEntries().filter((entry) => {
    return entry.contentType === "text/javascript";
  });
  console.log(javascriptResources);
});

observer.observe({ type: "resource", buffered: true });
```

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Methodenaufrufs in der Performance-Zeitleiste des Browsers vorhanden sind.

```js
const scripts = performance.getEntriesByType("resource").filter((entry) => {
  return entry.contentType === "text/javascript";
});
console.log(scripts);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
