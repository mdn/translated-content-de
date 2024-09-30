---
title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Headers/Cross-Origin-Resource-Policy
l10n:
  sourceCommit: b54373ab9025ceb6eb404bd2538ebd4c01576c60
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Resource-Policy`** Antwort-Header
vermittelt den Wunsch, dass der Browser `no-cors`-Anfragen von verschiedenen Ursprüngen/Sites auf die
angegebene Ressource blockiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

## Beispiele

Der untenstehende Antwort-Header führt dazu, dass kompatible Benutzeragenten `no-cors`-Anfragen von verschiedenen Ursprüngen blockieren:

```http
Cross-Origin-Resource-Policy: same-origin
```

Für weitere Beispiele siehe <https://resourcepolicy.fyi/>.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Cross-Origin Resource Policy (CORP) Erklärung](/de/docs/Web/HTTP/Cross-Origin_Resource_Policy)
- [Erwägen Sie die Bereitstellung der Cross-Origin Resource Policy](https://resourcepolicy.fyi/)
- {{httpheader("Access-Control-Allow-Origin")}}
