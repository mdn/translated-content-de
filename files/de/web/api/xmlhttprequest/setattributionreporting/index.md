---
title: "XMLHttpRequest: Methode setAttributionReporting()"
short-title: setAttributionReporting()
slug: Web/API/XMLHttpRequest/setAttributionReporting
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{non-standard_header}}

Die Methode **`setAttributionReporting()`** des Interfaces [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gibt an, dass die Antwort auf die Anfrage eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) registrieren können soll.

Weitere Informationen finden Sie unter [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

## Syntax

```js-nolint
setAttributionReporting(options)
```

### Parameter

- `options`
  - : Ein Objekt mit Optionen für das Attribution Reporting, das die folgenden Eigenschaften enthält:
    - `eventSourceEligible`
      - : Ein boolescher Wert. Wenn er auf `true` gesetzt ist, kann die Antwort auf die Anfrage eine Attributionsquelle registrieren. Bei `false` ist dies nicht möglich.
    - `triggerEligible`
      - : Ein boolescher Wert. Wenn er auf `true` gesetzt ist, kann die Antwort auf die Anfrage einen Attributionstrigger registrieren. Bei `false` ist dies nicht möglich.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die zugehörige [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) noch nicht [geöffnet](/de/docs/Web/API/XMLHttpRequest/open) oder bereits [gesendet](/de/docs/Web/API/XMLHttpRequest/send) wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Verwendung der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) durch eine [`attribution-reporting`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/attribution-reporting)-{{httpheader("Permissions-Policy")}} blockiert wird.

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
