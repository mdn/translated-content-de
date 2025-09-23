---
title: "Permissions-Policy: aria-notify-Direktive"
short-title: aria-notify
slug: Web/HTTP/Reference/Headers/Permissions-Policy/aria-notify
l10n:
  sourceCommit: 93e3c303704c560ce28cc7764ff0069e67c48e79
---

{{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header mit der Direktive `aria-notify` steuert, ob das aktuelle Dokument die Methoden [`Document.ariaNotify()`](/de/docs/Web/API/Document/ariaNotify) und [`Element.ariaNotify()`](/de/docs/Web/API/Element/ariaNotify) verwenden darf, um {{Glossary("screen_reader", "Screenreader")}}-Ankündigungen abzusetzen.

Konkret bedeutet dies, dass, wenn eine definierte Richtlinie die Nutzung blockiert, alle Ankündigungen, die mit `ariaNotify()` erstellt werden, stillschweigend fehlschlagen (sie werden nicht gesendet).

## Syntax

```http
Permissions-Policy: aria-notify=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `aria-notify` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [`Document.ariaNotify()`](/de/docs/Web/API/Document/ariaNotify), [`Element.ariaNotify()`](/de/docs/Web/API/Element/ariaNotify)
