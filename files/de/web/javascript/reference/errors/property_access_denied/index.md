---
title: 'Fehler: Erlaubnis verweigert, um auf die Eigenschaft "x" zuzugreifen'
slug: Web/JavaScript/Reference/Errors/Property_access_denied
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "Erlaubnis verweigert, um auf die Eigenschaft zuzugreifen" tritt auf, wenn versucht wurde, auf ein Objekt zuzugreifen, für das Sie keine Berechtigung haben.

## Meldung

```plain
DOMException: Blocked a frame with origin "x" from accessing a cross-origin frame. (Chromium-based)
DOMException: Permission denied to access property "x" on cross-origin object (Firefox)
SecurityError: Blocked a frame with origin "x" from accessing a cross-origin frame. Protocols, domains, and ports must match. (Safari)
```

## Fehlertyp

[`DOMException`](/de/docs/Web/API/DOMException).

## Was ist schiefgelaufen?

Es wurde versucht, auf ein Objekt zuzugreifen, für das Sie keine Berechtigung haben. Dies ist wahrscheinlich ein {{HTMLElement("iframe")}}-Element, das von einer anderen Domäne geladen wurde, bei der Sie gegen die [Sicherheitsrichtlinie für gleiche Herkunft](/de/docs/Web/Security/Same-origin_policy) verstoßen haben.

## Beispiele

### Keine Berechtigung, um auf das Dokument zuzugreifen

```html
<!doctype html>
<html lang="en-US">
  <head>
    <iframe
      id="myframe"
      src="http://www1.w3c-test.org/common/blank.html"></iframe>
    <script>
      onload = function () {
        console.log(frames[0].document);
        // Error: Permission denied to access property "document"
      };
    </script>
  </head>
  <body></body>
</html>
```

## Siehe auch

- {{HTMLElement("iframe")}}
- [Sicherheitsrichtlinie für gleiche Herkunft](/de/docs/Web/Security/Same-origin_policy)
