---
title: "Permissions-Policy: aria-notify Direktive"
short-title: aria-notify
slug: Web/HTTP/Reference/Headers/Permissions-Policy/aria-notify
l10n:
  sourceCommit: 9af64ef430ad722b9cc3f75ccabeb8989c23b988
---

{{SeeCompatTable}}

Der HTTP {{HTTPHeader("Permissions-Policy")}} Header `aria-notify` Direktive steuert, ob das aktuelle Dokument die Methoden [`Document.ariaNotify()`](/de/docs/Web/API/Document/ariaNotify) und [`Element.ariaNotify()`](/de/docs/Web/API/Element/ariaNotify) verwenden darf, um {{Glossary("screen_reader", "Screenreader")}}-Ankündigungen auszulösen.

Insbesondere dort, wo eine definierte Richtlinie die Nutzung blockiert, schlagen Ankündigungen, die mit `ariaNotify()` erstellt wurden, stillschweigend fehl (sie werden nicht gesendet).

## Syntax

```http
Permissions-Policy: aria-notify=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Zulassungsliste für `aria-notify` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [`Document.ariaNotify()`](/de/docs/Web/API/Document/ariaNotify), [`Element.ariaNotify()`](/de/docs/Web/API/Element/ariaNotify)
