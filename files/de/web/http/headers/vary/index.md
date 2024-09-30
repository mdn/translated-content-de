---
title: Vary
slug: Web/HTTP/Headers/Vary
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

Der **`Vary`** HTTP-Response-Header beschreibt die Teile der Anfrage-Nachricht, abgesehen von der Methode und der URL, die den Inhalt der Antwort beeinflusst haben, in der er auftritt. Am häufigsten wird dies verwendet, um einen Cache-Schlüssel zu erstellen, wenn [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation) verwendet wird.

Der gleiche `Vary`-Header-Wert sollte in allen Antworten für eine gegebene URL verwendet werden, einschließlich {{HTTPStatus("304")}} `Not Modified`-Antworten und der "Standard"-Antwort.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Response-Header](/de/docs/Glossary/Response_header)</td>
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
  - : Gibt an, dass andere Faktoren als Anfrage-Header die Erstellung dieser Antwort beeinflusst haben. Impliziert, dass die Antwort nicht cachefähig ist.
- \<header-name>
  - : Eine durch Kommas getrennte Liste von Anfrage-Header-Namen, die die Erstellung dieser Antwort beeinflusst haben könnten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitätsnotizen

- [Vary with care – Vary-Header-Probleme in IE6-9](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/vary-with-care)

## Siehe auch

- [Understanding The Vary Header - Smashing Magazine](https://www.smashingmagazine.com/2017/11/understanding-vary-header/)
- [Best Practices for Using the Vary Header – fastly.com](https://www.fastly.com/blog/best-practices-using-vary-header)
- [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation)
