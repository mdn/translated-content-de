---
title: "PerformanceResourceTiming: contentType-Eigenschaft"
short-title: contentType
slug: Web/API/PerformanceResourceTiming/contentType
l10n:
  sourceCommit: c28529c0cc75eb5d2de857c923f0a1ebd5145313
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`contentType`**-Eigenschaft des [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interfaces ist eine schreibgeschützte Zeichenkette, die den Inhaltstyp der abgerufenen Ressource angibt und als [MIME-Typ](/de/docs/Glossary/MIME_type) und Subtyp formatiert ist, die durch einen Schrägstrich getrennt sind.

Der Inhaltstyp ist eine minimierte und "standardisierte" Version des MIME-Typs, der aus dem {{httpheader("Content-Type")}} HTTP-Header extrahiert wird, der in der Fetch-Antwort der Ressource gesendet wird.
Für JavaScript, JSON, SVG und XML wird der MIME-Typ durch eine repräsentative MIME-Typ/Subtyp-Zeichenkette ersetzt.
Andere vom Browser unterstützte Typen werden durch die MIME-Typ/Subtyp-Zeichenkette im Header dargestellt (andere Informationen im Header werden verworfen).

## Wert

Eine Zeichenkette, die das MIME-Typ-"Essenz" des Inhalts angibt.
Dies kann einer der folgenden Werte sein:

- `text/javascript`
  - : JavaScript-Inhalt.
- `application/json`
  - : JSON-Inhalt.
- `image/svg+xml`
  - : SVG-Inhalt.
- `application/xml`
  - : XML-Inhalt (außerhalb von SVG).
- MIME-Typ/Subtyp
  - : Jeder andere MIME-Typ/Subtyp, der vom Benutzeragent unterstützt wird.
- `""` (leere Zeichenkette)
  - : Wird für MIME-Typen zurückgegeben, die vom Browser nicht unterstützt werden, oder wenn der Ressourcenzugriff aufgrund von [CORS](/de/docs/Web/HTTP/CORS)-Prüfungen fehlgeschlagen ist.

## Beispiele

### Ressourcen filtern

Die `contentType`-Eigenschaft kann verwendet werden, um nur bestimmte Ressourcentiming-Einträge zu erhalten; beispielsweise nur solche, die mit Skripten verbunden sind.

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um über neue `resource`-Performance-Einträge zu benachrichtigen, sobald diese in der Leistungstimeline des Browsers aufgezeichnet werden.
Die `buffered`-Option wird verwendet, um auf Einträge vor der Erstellung des Beobachters zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const javascriptResources = list.getEntries().filter((entry) => {
    return entry.contentType === "text/javascript";
  });
  console.log(javascriptResources);
});

observer.observe({ type: "resource", buffered: true });
```

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs der Methode in der Leistungstimeline des Browsers vorhanden sind.

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
