---
title: "Location: reload() Methode"
short-title: reload()
slug: Web/API/Location/reload
l10n:
  sourceCommit: c7d112ad5dc6f88a05cfc96e6d5dca36ec0250a7
---

{{ APIRef("HTML DOM") }}

Die **`reload()`** Methode der {{DOMXref("Location")}} Schnittstelle lädt die aktuelle URL neu, ähnlich wie die Aktualisieren-Schaltfläche.

## Syntax

```js-nolint
reload()
```

### Parameter

- `forceGet` {{non-standard_inline}}
  - : Übergeben Sie `true`, um ein Neuladen zu erzwingen, das den Cache umgeht. Standardmäßig ist dies `false`. Nur in Firefox unterstützt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{Glossary("origin")}} des Skripts, das die Methode aufruft, nicht dem {{Glossary("Same-origin policy", "same origin")}} der Seite entspricht, die ursprünglich vom {{domxref("Location")}} Objekt beschrieben wurde, hauptsächlich wenn das Skript auf einer anderen Domain gehostet wird.

## Beispiele

```js
// Lädt die aktuelle Seite neu
window.location.reload();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("Location")}} Schnittstelle, zu der sie gehört.
- Ähnliche Methoden: {{domxref("Location.assign()")}} und
  {{domxref("Location.replace()")}}.
