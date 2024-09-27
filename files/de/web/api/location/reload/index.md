---
title: "Location: reload() Methode"
short-title: reload()
slug: Web/API/Location/reload
l10n:
  sourceCommit: c7d112ad5dc6f88a05cfc96e6d5dca36ec0250a7
---

{{ APIRef("HTML DOM") }}

Die **`reload()`** Methode der [`Location`](/de/docs/Web/API/Location) Schnittstelle lädt die aktuelle URL neu, ähnlich wie die Aktualisieren-Schaltfläche.

## Syntax

```js-nolint
reload()
```

### Parameter

- `forceGet` {{non-standard_inline}}
  - : Übergeben Sie `true`, um ein Neuladen zu erzwingen, das den Cache umgeht. Der Standardwert ist `false`. Wird nur in Firefox unterstützt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [origin](/de/docs/Glossary/origin) des Skripts, das die Methode aufruft, nicht der [same origin](/de/docs/Glossary/Same-origin_policy) der Seite entspricht, die ursprünglich durch das [`Location`](/de/docs/Web/API/Location) Objekt beschrieben wurde, hauptsächlich wenn das Skript in einer anderen Domain gehostet wird.

## Beispiele

```js
// reload the current page
window.location.reload();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`Location`](/de/docs/Web/API/Location) Schnittstelle, zu der es gehört.
- Ähnliche Methoden: [`Location.assign()`](/de/docs/Web/API/Location/assign) und
  [`Location.replace()`](/de/docs/Web/API/Location/replace).
