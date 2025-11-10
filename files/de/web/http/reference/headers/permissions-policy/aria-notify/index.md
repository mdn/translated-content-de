---
title: "Permissions-Policy: aria-notify Richtlinie"
short-title: aria-notify
slug: Web/HTTP/Reference/Headers/Permissions-Policy/aria-notify
l10n:
  sourceCommit: 11e09e7c584658fbfbecd2f00ae66e546cd54cc0
---

{{SeeCompatTable}}{{non-standard_header}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `aria-notify`-Richtlinie steuert, ob das aktuelle Dokument die Methoden [`Document.ariaNotify()`](/de/docs/Web/API/Document/ariaNotify) und [`Element.ariaNotify()`](/de/docs/Web/API/Element/ariaNotify) verwenden darf, um {{Glossary("screen_reader", "Screenreader")}}-Ankündigungen abzusetzen.

Konkret bedeutet dies, dass dort, wo eine definierte Richtlinie die Nutzung blockiert, alle Ankündigungen, die mithilfe von `ariaNotify()` erstellt werden, stillschweigend fehlschlagen (sie werden nicht gesendet).

## Syntax

```http
Permissions-Policy: aria-notify=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-`allowlist` für `aria-notify` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [`Document.ariaNotify()`](/de/docs/Web/API/Document/ariaNotify), [`Element.ariaNotify()`](/de/docs/Web/API/Element/ariaNotify)
