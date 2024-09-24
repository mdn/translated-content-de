---
title: "XMLHttpRequest: Methode setAttributionReporting()"
short-title: setAttributionReporting()
slug: Web/API/XMLHttpRequest/setAttributionReporting
l10n:
  sourceCommit: ba5f28ab10ef1af48a55f363c8facc04a1f94479
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{SeeCompatTable}}

Die Methode **`setAttributionReporting()`** des {{domxref("XMLHttpRequest")}}-Interfaces zeigt an, dass Sie möchten, dass die Antwort der Anfrage in der Lage ist, eine auf JavaScript basierende [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren.

Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

## Syntax

```js-nolint
setAttributionReporting(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Optionen für die Attributionsberichterstattung bereitstellt, welche die folgenden Eigenschaften beinhaltet:
    - `eventSourceEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, eine Attributionsquelle zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.
    - `triggerEligible`
      - : Ein Boolean. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, einen Attributionstrigger zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das zugehörige {{domxref("XMLHttpRequest")}} noch nicht {{domxref("XMLHttpRequest.open", "geöffnet", "", "nocode")}} wurde oder bereits {{domxref("XMLHttpRequest.send", "gesendet", "", "nocode")}} wurde.
- `TypeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Verwendung der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) durch eine [`attribution-reporting`](/de/docs/Web/HTTP/Headers/Permissions-Policy/attribution-reporting) {{httpheader("Permissions-Policy")}} blockiert wird.

## Beispiele

```js
const attributionReporting = {
  eventSourceEligible: true,
  triggerEligible: false,
};

function triggerSourceInteraction() {
  const req = new XMLHttpRequest();
  req.open("GET", "https://shop.example/endpoint");
  // Verfügbarkeit von setAttributionReporting() prüfen, bevor es aufgerufen wird
  if (typeof req.setAttributionReporting === "function") {
    req.setAttributionReporting(attributionReporting);
    req.send();
  } else {
    throw new Error("Attributionsberichterstattung nicht verfügbar");
    // Fügen Sie hier geeigneten Wiederherstellungscode hinzu
  }
}

// Verknüpfen Sie den Interaktionstrigger mit dem
// Element und Ereignis, das für Ihren Code sinnvoll ist
elem.addEventListener("click", triggerSourceInteraction);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
