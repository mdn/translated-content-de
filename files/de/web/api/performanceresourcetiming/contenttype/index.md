---
title: "PerformanceResourceTiming: contentType-Eigenschaft"
short-title: contentType
slug: Web/API/PerformanceResourceTiming/contentType
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`contentType`** schreibgeschützte Eigenschaft des [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interfaces ist ein String, der den Inhaltstyp der abgerufenen Ressource angibt, formatiert als {{Glossary("MIME_type", "MIME-Typ")}} und Subtyp, getrennt durch einen Schrägstrich.

Der Inhaltstyp ist eine vereinfachte und "standardisierte" Version des MIME-Typs, der aus dem {{httpheader("Content-Type")}} HTTP-Header der Fetch-Antwort der Ressource extrahiert wird.
Für JavaScript, JSON, SVG und XML wird der MIME-Typ durch einen repräsentativen MIME-Typ/Subtyp-String ersetzt.
Andere vom Browser unterstützte Typen werden durch den MIME-Typ/Subtyp-String im Header dargestellt (andere Informationen im Header werden verworfen).

## Wert

Ein String, der das MIME-Typ-"Essenz" des Inhalts angibt.
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
  - : Jeder andere vom Nutzeragenten unterstützte MIME-Typ/Subtyp.
- `""` (leerer String)
  - : Wird für MIME-Typen zurückgegeben, die vom Browser nicht unterstützt werden oder wenn das Abrufen der Ressource aufgrund von [CORS](/de/docs/Web/HTTP/CORS)-Prüfungen fehlgeschlagen ist.

## Beispiele

### Filtern von Ressourcen

Die `contentType`-Eigenschaft kann verwendet werden, um nur bestimmte Ressourcentiming-Einträge zu erhalten; zum Beispiel nur solche, die mit Skripten zu tun haben.

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um über neue `resource` Performance-Einträge zu informieren, während sie in der Leistungstimeline des Browsers aufgezeichnet werden. Die `buffered`-Option wird verwendet, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const javascriptResources = list.getEntries().filter((entry) => {
    return entry.contentType === "text/javascript";
  });
  console.log(javascriptResources);
});

observer.observe({ type: "resource", buffered: true });
```

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), welches nur `resource` Performance-Einträge zeigt, die in der Leistungstimeline des Browsers vorhanden sind, wenn Sie die Methode aufrufen.

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
