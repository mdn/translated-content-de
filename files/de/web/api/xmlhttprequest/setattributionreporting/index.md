---
title: "XMLHttpRequest: Methode setAttributionReporting()"
short-title: setAttributionReporting()
slug: Web/API/XMLHttpRequest/setAttributionReporting
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{non-standard_header}}

Die **`setAttributionReporting()`**-Methode der [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Schnittstelle gibt an, dass Sie wollen, dass die Antwort der Anfrage eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) registrieren kann.

Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

## Syntax

```js-nolint
setAttributionReporting(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Optionen für die Attributionsberichterstattung bereitstellt und die folgenden Eigenschaften enthält:
    - `eventSourceEligible`
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, eine Attributionsquelle zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.
    - `triggerEligible`
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, ist die Antwort der Anfrage berechtigt, einen Attributionstrigger zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die zugehörige [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) noch nicht [geöffnet](/de/docs/Web/API/XMLHttpRequest/open) oder bereits [gesendet](/de/docs/Web/API/XMLHttpRequest/send) wurde.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) durch eine [`attribution-reporting`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/attribution-reporting) {{httpheader("Permissions-Policy")}} blockiert wird.

## Beispiele

```js
const attributionReporting = {
  eventSourceEligible: true,
  triggerEligible: false,
};

function triggerSourceInteraction() {
  const req = new XMLHttpRequest();
  req.open("GET", "https://shop.example/endpoint");
  // Check availability of setAttributionReporting() before calling
  if (typeof req.setAttributionReporting === "function") {
    req.setAttributionReporting(attributionReporting);
    req.send();
  } else {
    throw new Error("Attribution reporting not available");
    // Include recovery code here as appropriate
  }
}

// Associate the interaction trigger with whatever
// element and event makes sense for your code
elem.addEventListener("click", triggerSourceInteraction);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
