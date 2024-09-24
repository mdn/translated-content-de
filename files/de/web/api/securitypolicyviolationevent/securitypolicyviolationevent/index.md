---
title: "SecurityPolicyViolationEvent: SecurityPolicyViolationEvent() Konstruktor"
short-title: SecurityPolicyViolationEvent()
slug: Web/API/SecurityPolicyViolationEvent/SecurityPolicyViolationEvent
l10n:
  sourceCommit: a5c1400a03d86162ea5c4342a93c2d96df470630
---

{{APIRef("Reporting API")}}

Der **`SecurityPolicyViolationEvent()`** Konstruktor erstellt ein neues {{domxref("SecurityPolicyViolationEvent")}} Objekt.

## Syntax

```js-nolint
new SecurityPolicyViolationEvent(type)
new SecurityPolicyViolationEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist fallunterscheidend und von den Browsern immer auf `securitypolicyviolation` gesetzt.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `blockedURI` {{optional_inline}}
      - : Die {{domxref("SecurityPolicyViolationEvent.blockedURI","blockedURI")}} des `SecurityPolicyViolationEvent`.
        Wenn nicht enthalten, ist der Standardwert `""`.
    - `columnNumber` {{optional_inline}}
      - : Die {{domxref("SecurityPolicyViolationEvent.columnNumber","columnNumber")}} des `SecurityPolicyViolationEvent`.
        Wenn nicht enthalten, ist der Standardwert `0`.
    - `disposition`
      - : Die {{domxref("SecurityPolicyViolationEvent.disposition","disposition")}} des `SecurityPolicyViolationEvent`.
    - `documentURI`
      - : Die {{domxref("SecurityPolicyViolationEvent.documentURI","documentURI")}} des `SecurityPolicyViolationEvent`.
    - `effectiveDirective`
      - : Die {{domxref("SecurityPolicyViolationEvent.effectiveDirective","effectiveDirective")}} des `SecurityPolicyViolationEvent`.
    - `lineNumber` {{optional_inline}}
      - : Die {{domxref("SecurityPolicyViolationEvent.lineNumber","lineNumber")}} des `SecurityPolicyViolationEvent`.
        Wenn nicht enthalten, ist der Standardwert `0`.
    - `originalPolicy`
      - : Die {{domxref("SecurityPolicyViolationEvent.originalPolicy","originalPolicy")}} des `SecurityPolicyViolationEvent`.
    - `referrer` {{optional_inline}}
      - : Die {{domxref("SecurityPolicyViolationEvent.referrer","referrer")}} des `SecurityPolicyViolationEvent`.
        Wenn nicht enthalten, ist der Standardwert `""`.
    - `sample` {{optional_inline}}
      - : Die {{domxref("SecurityPolicyViolationEvent.sample","sample")}} des `SecurityPolicyViolationEvent`.
        Wenn nicht enthalten, ist der Standardwert `""`.
    - `sourceFile` {{optional_inline}}
      - : Die {{domxref("SecurityPolicyViolationEvent.sourceFile","sourceFile")}} des `SecurityPolicyViolationEvent`.
        Wenn nicht enthalten, ist der Standardwert `""`.
    - `statusCode`
      - : Der {{domxref("SecurityPolicyViolationEvent.statusCode","statusCode")}} des `SecurityPolicyViolationEvent`.
    - `violatedDirective`
      - : Die {{domxref("SecurityPolicyViolationEvent.violatedDirective","violatedDirective")}} des `SecurityPolicyViolationEvent`.

### Rückgabewert

Ein neues `SecurityPolicyViolationEvent` Objekt.

## Beispiele

```js
let SPVEvt = new SecurityPolicyViolationEvent("foo", {
  /* ... */
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
