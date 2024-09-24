---
title: Vary
slug: Web/HTTP/Headers/Vary
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

Der **`Vary`** HTTP-Antwortheader beschreibt die Teile der Anfragenachricht, abgesehen von der Methode und der URL, die den Inhalt der Antwort beeinflusst haben, in der er vorkommt. Meistens wird dies verwendet, um einen Cache-Schlüssel zu erstellen, wenn [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation) verwendet wird.

Der gleiche `Vary`-Header-Wert sollte bei allen Antworten für eine gegebene URL verwendet werden, einschließlich {{HTTPStatus("304")}} `Not Modified`-Antworten und der "Standard"-Antwort.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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
  - : Gibt an, dass andere Faktoren als Anforderungsheader die Erstellung dieser Antwort beeinflusst haben. Impliziert, dass die Antwort nicht im Cache gespeichert werden kann.
- \<header-name>
  - : Eine kommagetrennte Liste von Anforderungsheadernamen, die die Erstellung dieser Antwort beeinflusst haben könnten.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

### Kompatibilitätsnotizen

- [Vary with care – Vary header problems in IE6-9](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/vary-with-care)

## Siehe auch

- [Understanding The Vary Header - Smashing Magazine](https://www.smashingmagazine.com/2017/11/understanding-vary-header/)
- [Best Practices for Using the Vary Header – fastly.com](https://www.fastly.com/blog/best-practices-using-vary-header)
- [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation)
