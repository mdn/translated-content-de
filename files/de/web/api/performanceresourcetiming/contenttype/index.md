---
title: "PerformanceResourceTiming: contentType-Eigenschaft"
short-title: contentType
slug: Web/API/PerformanceResourceTiming/contentType
l10n:
  sourceCommit: c28529c0cc75eb5d2de857c923f0a1ebd5145313
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`contentType`** schreibgeschützte Eigenschaft des {{domxref("PerformanceResourceTiming")}}-Interfaces ist ein String, der den Inhaltstyp der abgerufenen Ressource angibt, formatiert als ein {{glossary("MIME type")}} und Subtyp, getrennt durch einen Schrägstrich.

Der Inhaltstyp ist eine minimierte und "standardisierte" Version des MIME-Typs, die aus dem {{httpheader("Content-Type")}} HTTP-Header extrahiert wird, der in der Antwort des Ressourcenabrufs gesendet wird.
Für JavaScript, JSON, SVG und XML wird der MIME-Typ durch eine repräsentative MIME-Typ/Subtyp-Zeichenkette ersetzt.
Andere vom Browser unterstützte Typen werden durch die MIME-Typ/Subtyp-Zeichenkette im Header dargestellt (andere Informationen im Header werden verworfen).

## Wert

Ein String, der die "Essenz" des MIME-Typs des Inhalts angibt.
Dieser kann einer der folgenden Werte sein:

- `text/javascript`
  - : JavaScript-Inhalte.
- `application/json`
  - : JSON-Inhalte.
- `image/svg+xml`
  - : SVG-Inhalte.
- `application/xml`
  - : XML-Inhalte (außer SVG).
- MIME-Typ/Subtyp
  - : Jeder andere vom Benutzeragenten unterstützte MIME-Typ/Subtyp.
- `""` (leerer String)
  - : Wird für MIME-Typen zurückgegeben, die vom Browser nicht unterstützt werden, oder wenn der Ressourcenabruf aufgrund von [CORS](/de/docs/Web/HTTP/CORS)-Prüfungen fehlgeschlagen ist.

## Beispiele

### Ressourcen filtern

Die `contentType`-Eigenschaft kann verwendet werden, um nur bestimmte Ressourcenzuordnungseinträge zu erhalten; zum Beispiel nur diejenigen, die sich auf Skripte beziehen.

Das folgende Beispiel verwendet einen {{domxref("PerformanceObserver")}}, um über neue `resource`-Leistungseinträge benachrichtigt zu werden, die in der Leistungstimeline des Browsers aufgezeichnet werden.
Die `buffered`-Option wird verwendet, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  const javascriptResources = list.getEntries().filter((entry) => {
    return entry.contentType === "text/javascript";
  });
  console.log(javascriptResources);
});

observer.observe({ type: "resource", buffered: true });
```

Das folgende Beispiel verwendet {{domxref("Performance.getEntriesByType()")}}, was nur `resource`-Leistungseinträge zeigt, die zu dem Zeitpunkt, an dem Sie die Methode aufrufen, in der Leistungstimeline des Browsers vorhanden sind.

```js
const scripts = performance.getEntriesByType("resource").filter((entry) => {
  return entry.contentType === "text/javascript";
});
console.log(scripts);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
