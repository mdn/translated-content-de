---
title: 'Fehler: Erlaubnis verweigert, um auf die Eigenschaft "x" zuzugreifen'
slug: Web/JavaScript/Reference/Errors/Property_access_denied
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

Die JavaScript-Ausnahme "Erlaubnis verweigert, um auf die Eigenschaft zuzugreifen" tritt auf, wenn ein Versuch unternommen wurde, auf ein Objekt zuzugreifen, für das Sie keine Berechtigung haben.

## Nachricht

```plain
DOMException: Blocked a frame with origin "x" from accessing a cross-origin frame. (Chromium-based)
DOMException: Permission denied to access property "x" on cross-origin object (Firefox)
SecurityError: Blocked a frame with origin "x" from accessing a cross-origin frame. Protocols, domains, and ports must match. (Safari)
```

## Fehlerart

[`DOMException`](/de/docs/Web/API/DOMException).

## Was ist schiefgelaufen?

Es gab den Versuch, auf ein Objekt zuzugreifen, für das Sie keine Berechtigung haben. Dies ist wahrscheinlich ein {{HTMLElement("iframe")}}-Element, das von einer anderen Domäne geladen wurde, bei der Sie gegen die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) verstoßen haben.

## Beispiele

### Keine Berechtigung zum Zugriff auf das Dokument

```html
<iframe id="myframe" src="http://www1.w3c-test.org/common/blank.html"></iframe>
```

```js
console.log(frames[0].document);
// Error: Permission denied to access property "document"
```

## Siehe auch

- {{HTMLElement("iframe")}}
- [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
