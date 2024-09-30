---
title: "SecurityPolicyViolationEvent: SecurityPolicyViolationEvent() Konstruktor"
short-title: SecurityPolicyViolationEvent()
slug: Web/API/SecurityPolicyViolationEvent/SecurityPolicyViolationEvent
l10n:
  sourceCommit: 701ac4440432ac215713b6b7f274291ca643c49a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Der **`SecurityPolicyViolationEvent()`**-Konstruktor erstellt ein neues [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Objekt.

## Syntax

```js-nolint
new SecurityPolicyViolationEvent(type)
new SecurityPolicyViolationEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitiv und Browser setzen ihn immer auf `securitypolicyviolation`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `blockedURI` {{optional_inline}}
      - : Die [`blockedURI`](/de/docs/Web/API/SecurityPolicyViolationEvent/blockedURI) des `SecurityPolicyViolationEvent`.
        Wenn nicht angegeben, ist der Standardwert `""`.
    - `columnNumber` {{optional_inline}}
      - : Die [`columnNumber`](/de/docs/Web/API/SecurityPolicyViolationEvent/columnNumber) des `SecurityPolicyViolationEvent`.
        Wenn nicht angegeben, ist der Standardwert `0`.
    - `disposition`
      - : Die [`disposition`](/de/docs/Web/API/SecurityPolicyViolationEvent/disposition) des `SecurityPolicyViolationEvent`.
    - `documentURI`
      - : Die [`documentURI`](/de/docs/Web/API/SecurityPolicyViolationEvent/documentURI) des `SecurityPolicyViolationEvent`.
    - `effectiveDirective`
      - : Die [`effectiveDirective`](/de/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective) des `SecurityPolicyViolationEvent`.
    - `lineNumber` {{optional_inline}}
      - : Die [`lineNumber`](/de/docs/Web/API/SecurityPolicyViolationEvent/lineNumber) des `SecurityPolicyViolationEvent`.
        Wenn nicht angegeben, ist der Standardwert `0`.
    - `originalPolicy`
      - : Die [`originalPolicy`](/de/docs/Web/API/SecurityPolicyViolationEvent/originalPolicy) des `SecurityPolicyViolationEvent`.
    - `referrer` {{optional_inline}}
      - : Der [`referrer`](/de/docs/Web/API/SecurityPolicyViolationEvent/referrer) des `SecurityPolicyViolationEvent`.
        Wenn nicht angegeben, ist der Standardwert `""`.
    - `sample` {{optional_inline}}
      - : Das [`sample`](/de/docs/Web/API/SecurityPolicyViolationEvent/sample) des `SecurityPolicyViolationEvent`.
        Wenn nicht angegeben, ist der Standardwert `""`.
    - `sourceFile` {{optional_inline}}
      - : Die [`sourceFile`](/de/docs/Web/API/SecurityPolicyViolationEvent/sourceFile) des `SecurityPolicyViolationEvent`.
        Wenn nicht angegeben, ist der Standardwert `""`.
    - `statusCode`
      - : Der [`statusCode`](/de/docs/Web/API/SecurityPolicyViolationEvent/statusCode) des `SecurityPolicyViolationEvent`.
    - `violatedDirective`
      - : Die [`violatedDirective`](/de/docs/Web/API/SecurityPolicyViolationEvent/violatedDirective) des `SecurityPolicyViolationEvent`.

### Rückgabewert

Ein neues `SecurityPolicyViolationEvent`-Objekt.

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
