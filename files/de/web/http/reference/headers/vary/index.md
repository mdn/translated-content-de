---
title: Vary header
short-title: Vary
slug: Web/HTTP/Reference/Headers/Vary
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Vary`**-{{Glossary("response_header", "Antwortheader")}} beschreibt die Teile der Anfragenachricht (außer der Methode und URL), die den Inhalt der Antwort beeinflusst haben, in der er vorkommt. Ein `Vary`-Header stellt sicher, dass Antworten basierend auf den im `Vary`-Feld aufgeführten Headers separat zwischengespeichert werden. Meistens wird dies verwendet, um einen Cache-Schlüssel zu erstellen, wenn [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation) verwendet wird.

Der gleiche `Vary`-Header-Wert sollte für alle Antworten zu einer bestimmten URL verwendet werden, einschließlich {{HTTPStatus("304")}} `Not Modified`-Antworten und der "Standard"-Antwort.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
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
  - : Andere Faktoren als Anforderungsheader beeinflussten die Erstellung dieser Antwort. Dies impliziert, dass die Antwort nicht zwischengespeichert werden kann.
- `<header-name>`
  - : Ein Anforderungsheader-Name, der die Erstellung dieser Antwort beeinflusst haben könnte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation)
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary)
- [Understanding The Vary Header](https://www.smashingmagazine.com/2017/11/understanding-vary-header/) auf smashingmagazine.com (2017)
- [Best Practices for Using the Vary Header](https://www.fastly.com/blog/best-practices-using-vary-header) auf fastly.com
