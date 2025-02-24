---
title: Vary
slug: Web/HTTP/Headers/Vary
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-**`Vary`**-{{Glossary("response_header", "Antwort-Header")}} beschreibt die Teile der Anfragenachricht (abgesehen von der Methode und URL), die den Inhalt der Antwort beeinflusst haben, in der er auftritt. Die Einbeziehung eines `Vary`-Headers stellt sicher, dass Antworten basierend auf den im `Vary`-Feld aufgelisteten Headern separat zwischengespeichert werden. Dies wird häufig verwendet, um einen Cache-Schlüssel zu erstellen, wenn [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation) verwendet wird.

Der gleiche `Vary`-Header-Wert sollte für alle Antworten für eine gegebene URL verwendet werden, einschließlich {{HTTPStatus("304")}} `Not Modified`-Antworten und der "Standard"-Antwort.

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
  - : Andere als Anfrage-Header beeinflussten die Generierung dieser Antwort. Bedeutet, dass die Antwort nicht zwischengespeichert werden kann.
- `<header-name>`
  - : Ein Name eines Anforderungs-Headers, der die Generierung dieser Antwort beeinflusst haben könnte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation)
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary)
- [Understanding The Vary Header](https://www.smashingmagazine.com/2017/11/understanding-vary-header/) auf smashingmagazine.com (2017)
- [Best Practices for Using the Vary Header](https://www.fastly.com/blog/best-practices-using-vary-header) auf fastly.com
