---
title: Vary header
short-title: Vary
slug: Web/HTTP/Reference/Headers/Vary
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Vary`** {{Glossary("response_header", "Antwort-Header")}} beschreibt die Teile der Anfragenachricht (abgesehen von der Methode und URL), die den Inhalt der Antwort, in der er vorkommt, beeinflusst haben.
Die Aufnahme eines `Vary`-Headers stellt sicher, dass Antworten basierend auf den im `Vary`-Feld aufgeführten Headern separat zwischengespeichert werden.
Am häufigsten wird dies verwendet, um einen Cache-Schlüssel zu erstellen, wenn [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation) im Einsatz ist.

Der gleiche `Vary`-Header-Wert sollte für alle Antworten einer gegebenen URL verwendet werden, einschließlich {{HTTPStatus("304")}} `Not Modified`-Antworten und der "Standard"-Antwort.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Vary: *
Vary: <header-name>, …, <header-nameN>
```

## Direktiven

- `*` (Wildcard)
  - : Andere Faktoren als die Anforderungsheader haben die Erstellung dieser Antwort beeinflusst. Impliziert, dass die Antwort nicht zwischenspeicherbar ist.
- `<header-name>`
  - : Ein Anforderungs-Header-Name, der die Erstellung dieser Antwort beeinflusst haben könnte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation)
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary)
- [Understanding The Vary Header](https://www.smashingmagazine.com/2017/11/understanding-vary-header/) auf smashingmagazine.com (2017)
- [Best Practices for Using the Vary Header](https://www.fastly.com/blog/best-practices-using-vary-header) auf fastly.com
