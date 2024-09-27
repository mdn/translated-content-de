---
title: Vary
slug: Web/HTTP/Headers/Vary
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

Der **`Vary`** HTTP-Antwort-Header beschreibt die Teile der Anfragenachricht, abgesehen von der Methode und der URL, die den Inhalt der Antwort beeinflusst haben, in der er auftritt. Meist wird dies verwendet, um einen Cache-Schlüssel zu erstellen, wenn die [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation) genutzt wird.

Der gleiche `Vary`-Header-Wert sollte für alle Antworten für eine gegebene URL verwendet werden, einschließlich {{HTTPStatus("304")}} `Not Modified`-Antworten und der "Standard"-Antwort.

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
Vary: *
Vary: <header-name>, <header-name>, ...
```

## Direktiven

- \*
  - : Gibt an, dass Faktoren abseits von Anfrage-Headern die Erstellung dieser Antwort beeinflusst haben. Impliziert, dass die Antwort nicht zwischengespeichert werden kann.
- \<header-name>
  - : Eine durch Kommas getrennte Liste von Anfrage-Header-Namen, die möglicherweise die Erstellung dieser Antwort beeinflusst haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitätsnotizen

- [Vary with care – Vary header problems in IE6-9](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/vary-with-care)

## Siehe auch

- [Verständnis des Vary-Headers - Smashing Magazine](https://www.smashingmagazine.com/2017/11/understanding-vary-header/)
- [Best Practices für die Verwendung des Vary-Headers – fastly.com](https://www.fastly.com/blog/best-practices-using-vary-header)
- [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation)
