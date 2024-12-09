---
title: Vary
slug: Web/HTTP/Headers/Vary
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP-**`Vary`**-{{Glossary("response_header", "Antwortheader")}} beschreibt die Teile der Anforderungsnachricht (abgesehen von der Methode und der URL), die den Inhalt der Antwort beeinflussten, in der er vorkommt. Das Hinzufügen eines `Vary`-Headers stellt sicher, dass Antworten basierend auf den im `Vary`-Feld aufgeführten Headers separat zwischengespeichert werden. Meistens wird dies verwendet, um einen Cache-Schlüssel zu erstellen, wenn die [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation) in Verwendung ist.

Der gleiche `Vary`-Headerwert sollte für alle Antworten zu einer gegebenen URL verwendet werden, einschließlich {{HTTPStatus("304")}} `Not Modified`-Antworten und der "Standard"-Antwort.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Nicht erlaubter Headername")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Entweder `*` als Platzhalter oder ein oder mehrere Header-Namen in einer durch Kommas getrennten Liste:

```http
Vary: *
Vary: <header-name>, …, <header-nameN>
```

## Direktiven

- `*` (Platzhalter)
  - : Faktoren, die nicht Anforderungsheader waren, beeinflussten die Erstellung dieser Antwort. Dies impliziert, dass die Antwort nicht zwischengespeichert werden kann.
- `<header-name>`
  - : Ein Name eines Anforderungsheaders, der die Erstellung dieser Antwort beeinflusst haben könnte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation)
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary)
- [Understanding The Vary Header](https://www.smashingmagazine.com/2017/11/understanding-vary-header/) auf smashingmagazine.com (2017)
- [Best Practices for Using the Vary Header](https://www.fastly.com/blog/best-practices-using-vary-header) auf fastly.com
