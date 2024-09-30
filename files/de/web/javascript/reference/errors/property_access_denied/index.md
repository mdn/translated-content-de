---
title: "Fehler: Zugriff verweigert auf Eigenschaft \"x\""
slug: Web/JavaScript/Reference/Errors/Property_access_denied
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Permission denied to access property" tritt auf, wenn versucht wurde, auf ein Objekt zuzugreifen, für das Sie keine Berechtigung haben.

## Meldung

```plain
DOMException: Blocked a frame with origin "x" from accessing a cross-origin frame. (Chromium-based)
DOMException: Permission denied to access property "x" on cross-origin object (Firefox)
SecurityError: Blocked a frame with origin "x" from accessing a cross-origin frame. Protocols, domains, and ports must match. (Safari)
```

## Fehlertyp

[`DOMException`](/de/docs/Web/API/DOMException).

## Was ist schiefgelaufen?

Es wurde versucht, auf ein Objekt zuzugreifen, für das Sie keine Berechtigung haben. Dies ist wahrscheinlich ein {{HTMLElement("iframe")}}-Element, das von einer anderen Domäne geladen wurde und bei dem Sie gegen die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) verstoßen haben.

## Beispiele

### Keine Berechtigung zum Zugriff auf das Dokument

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
- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
