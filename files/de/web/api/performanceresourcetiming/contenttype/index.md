---
title: "PerformanceResourceTiming: contentType-Eigenschaft"
short-title: contentType
slug: Web/API/PerformanceResourceTiming/contentType
l10n:
  sourceCommit: 4a0413ef319179b7d0d833c42a156629544c8248
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`contentType`**-Eigenschaft des [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interfaces ist eine schreibgeschützte Zeichenfolge, die den Inhaltstyp der abgerufenen Ressource angibt, formatiert als ein {{Glossary("MIME_type", "MIME-Typ")}} und Subtyp, getrennt durch einen Schrägstrich.

Der Inhaltstyp ist eine minimierte und "standardisierte" Version des MIME-Typs, die aus dem {{httpheader("Content-Type")}}-HTTP-Header extrahiert wird, der in der Antwort auf den Abruf der Ressource gesendet wird.
Für JavaScript, JSON, SVG und XML wird der MIME-Typ durch eine repräsentative MIME-Typ-/Subtyp-Zeichenfolge ersetzt.
Andere vom Browser unterstützte Typen werden durch die MIME-Typ-/Subtyp-Zeichenfolge im Header dargestellt (andere Informationen im Header werden verworfen).

## Wert

Eine Zeichenfolge, die das "Essenz"-MIME-Typ des Inhalts angibt.
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
  - : Jeder andere vom Benutzeragent unterstützte MIME-Typ/Subtyp.
- `""` (leere Zeichenfolge)
  - : Wird für MIME-Typen zurückgegeben, die vom Browser nicht unterstützt werden, oder wenn der Ressourcenzugriff aufgrund von [CORS](/de/docs/Web/HTTP/Guides/CORS)-Prüfungen fehlgeschlagen ist.

## Beispiele

### Filtern von Ressourcen

Die `contentType`-Eigenschaft kann verwendet werden, um nur bestimmte Ressourcentimingeinträge zu erhalten; zum Beispiel nur diejenigen, die mit Skripten zusammenhängen.

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um über neue `resource`-Performance-Einträge zu benachrichtigen, wie sie in der Leistungstimeline des Browsers aufgezeichnet werden.
Die `buffered`-Option wird verwendet, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const javascriptResources = list
    .getEntries()
    .filter((entry) => entry.contentType === "text/javascript");
  console.log(javascriptResources);
});

observer.observe({ type: "resource", buffered: true });
```

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufens der Methode in der Leistungstimeline des Browsers vorhanden sind.

```js
const scripts = performance
  .getEntriesByType("resource")
  .filter((entry) => entry.contentType === "text/javascript");
console.log(scripts);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
