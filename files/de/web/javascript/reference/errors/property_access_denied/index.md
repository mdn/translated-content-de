---
title: 'Fehler: Erlaubnis verweigert, um auf Eigenschaft "x" zuzugreifen'
slug: Web/JavaScript/Reference/Errors/Property_access_denied
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Die JavaScript-Ausnahme "Erlaubnis verweigert, um auf Eigenschaft zuzugreifen" tritt auf, wenn versucht wurde, auf ein Objekt zuzugreifen, für das Sie keine Berechtigung haben.

## Nachricht

```plain
DOMException: Blocked a frame with origin "x" from accessing a cross-origin frame. (Chromium-based)
DOMException: Permission denied to access property "x" on cross-origin object (Firefox)
SecurityError: Blocked a frame with origin "x" from accessing a cross-origin frame. Protocols, domains, and ports must match. (Safari)
```

## Fehlertyp

[`DOMException`](/de/docs/Web/API/DOMException).

## Was ist schiefgelaufen?

Es wurde versucht, auf ein Objekt zuzugreifen, für das Sie keine Berechtigung haben. Dies ist wahrscheinlich ein {{HTMLElement("iframe")}}-Element, das von einer anderen Domäne geladen wurde und für das Sie die [Same-Origin-Richtlinie](/de/docs/Web/Security/Defenses/Same-origin_policy) verletzt haben.

## Beispiele

### Keine Berechtigung, auf das Dokument zuzugreifen

```html
<iframe id="myframe" src="http://www1.w3c-test.org/common/blank.html"></iframe>
```

```js
console.log(frames[0].document);
// Error: Permission denied to access property "document"
```

## Siehe auch

- {{HTMLElement("iframe")}}
- [Same-Origin-Richtlinie](/de/docs/Web/Security/Defenses/Same-origin_policy)
