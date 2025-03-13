---
title: "PerformanceResourceTiming: contentType-Eigenschaft"
short-title: contentType
slug: Web/API/PerformanceResourceTiming/contentType
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`contentType`**-Eigenschaft des [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interfaces ist eine schreibgeschützte Zeichenkette, die den Inhaltstyp der abgerufenen Ressource angibt und als {{Glossary("MIME_type", "MIME-Typ")}} und Subtyp formatiert ist, getrennt durch einen Schrägstrich.

Der Inhaltstyp ist eine minimierte und "standardisierte" Version des MIME-Typs, die aus dem im {{httpheader("Content-Type")}}-HTTP-Header gesendeten Wert der Fetch-Antwort der Ressource extrahiert wird. Bei JavaScript, JSON, SVG und XML wird der MIME-Typ durch eine repräsentative MIME-Typ/Subtyp-Zeichenkette ersetzt. Andere vom Browser unterstützte Typen werden durch die MIME-Typ/Subtyp-Zeichenkette im Header dargestellt (andere Informationen im Header werden verworfen).

## Wert

Eine Zeichenkette, die das MIME-Typ-"Essenz" des Inhalts angibt. Dies kann einer der folgenden Werte sein:

- `text/javascript`
  - : JavaScript-Inhalt.
- `application/json`
  - : JSON-Inhalt.
- `image/svg+xml`
  - : SVG-Inhalt.
- `application/xml`
  - : XML-Inhalt (anders als SVG).
- MIME-Typ/Subtyp
  - : Jeder andere vom Benutzeragenten unterstützte MIME-Typ/Subtyp.
- `""` (leere Zeichenkette)
  - : Wird für MIME-Typen zurückgegeben, die vom Browser nicht unterstützt werden, oder wenn das Laden der Ressource aufgrund von [CORS](/de/docs/Web/HTTP/Guides/CORS)-Prüfungen fehlgeschlagen ist.

## Beispiele

### Filtern von Ressourcen

Die `contentType`-Eigenschaft kann verwendet werden, um nur bestimmte Ressourcentiming-Einträge abzurufen; zum Beispiel nur diejenigen, die mit Skripten zusammenhängen.

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um über neue `resource`-Performance-Einträge zu benachrichtigen, sobald sie in der Performance-Timeline des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const javascriptResources = list.getEntries().filter((entry) => {
    return entry.contentType === "text/javascript";
  });
  console.log(javascriptResources);
});

observer.observe({ type: "resource", buffered: true });
```

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs der Methode in der Performance-Timeline des Browsers vorhanden sind.

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
