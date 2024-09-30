---
title: "XMLHttpRequest: setAttributionReporting()-Methode"
short-title: setAttributionReporting()
slug: Web/API/XMLHttpRequest/setAttributionReporting
l10n:
  sourceCommit: ba5f28ab10ef1af48a55f363c8facc04a1f94479
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`setAttributionReporting()`**-Methode der
[`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Schnittstelle zeigt an, dass die Antwort auf die Anfrage in der Lage sein soll, eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

## Syntax

```js-nolint
setAttributionReporting(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Optionen zur Attributionsberichterstattung bereitstellt, einschließlich der folgenden Eigenschaften:
    - `eventSourceEligible`
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, ist die Antwort auf die Anfrage berechtigt, eine Attributionsquelle zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.
    - `triggerEligible`
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, ist die Antwort auf die Anfrage berechtigt, einen Attributionstrigger zu registrieren. Wenn auf `false` gesetzt, ist sie es nicht.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugehörige [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) noch nicht [geöffnet](/de/docs/Web/API/XMLHttpRequest/open) oder bereits [gesendet](/de/docs/Web/API/XMLHttpRequest/send) wurde.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) durch eine [`attribution-reporting`](/de/docs/Web/HTTP/Headers/Permissions-Policy/attribution-reporting) {{httpheader("Permissions-Policy")}} blockiert wird.

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
