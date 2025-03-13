---
title: Vary
slug: Web/HTTP/Reference/Headers/Vary
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Vary`** {{Glossary("response_header", "Antwort-Header")}} beschreibt die Teile der Anfragenachricht (außer Methode und URL), die den Inhalt der Antwort beeinflusst haben, in der er vorkommt.
Das Einschließen eines `Vary`-Headers stellt sicher, dass Antworten separat basierend auf den im `Vary`-Feld aufgeführten Headern zwischengespeichert werden.
Meistens wird dies verwendet, um einen Cache-Schlüssel zu erstellen, wenn [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation) in Gebrauch ist.

Der gleiche `Vary`-Headerwert sollte für alle Antworten für eine bestimmte URL verwendet werden, einschließlich {{HTTPStatus("304")}} `Not Modified`-Antworten und der "Standard"-Antwort.

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

Entweder `*` als Platzhalter oder ein oder mehrere Headernamen in einer kommagetrennten Liste:

```http
Vary: *
Vary: <header-name>, …, <header-nameN>
```

## Direktiven

- `*` (Platzhalter)
  - : Faktoren außer Anforderungs-Headers beeinflussten die Erstellung dieser Antwort. Impliziert, dass die Antwort nicht zwischenspeicherbar ist.
- `<header-name>`
  - : Ein Anforderungs-Headername, der die Erstellung dieser Antwort beeinflusst haben könnte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation)
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary)
- [Understanding The Vary Header](https://www.smashingmagazine.com/2017/11/understanding-vary-header/) auf smashingmagazine.com (2017)
- [Best Practices for Using the Vary Header](https://www.fastly.com/blog/best-practices-using-vary-header) auf fastly.com
