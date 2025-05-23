---
title: Vary header
short-title: Vary
slug: Web/HTTP/Reference/Headers/Vary
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Vary`**-{{Glossary("response_header", "Antwort-Header")}} beschreibt die Teile der Anfragenachricht (außer Methode und URL), die den Inhalt der Antwort beeinflusst haben, in der er vorkommt. Das Einfügen eines `Vary`-Headers stellt sicher, dass Antworten basierend auf den im `Vary`-Feld aufgeführten Headern separat zwischengespeichert werden. Dies wird am häufigsten verwendet, um einen Cache-Schlüssel zu erstellen, wenn die [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation) aktiv ist.

Der gleiche `Vary`-Header-Wert sollte für alle Antworten einer bestimmten URL verwendet werden, einschließlich {{HTTPStatus("304")}} `Not Modified`-Antworten und der "Standard"-Antwort.

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

Entweder `*` als Platzhalter oder ein oder mehrere Header-Namen in einer kommagetrennten Liste:

```http
Vary: *
Vary: <header-name>, …, <header-nameN>
```

## Direktiven

- `*` (Platzhalter)
  - : Andere als Anforderungs-Header beeinflussten die Erstellung dieser Antwort. Bedeutet, dass die Antwort nicht zwischenspeicherbar ist.
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
