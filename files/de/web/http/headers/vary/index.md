---
title: Vary
slug: Web/HTTP/Headers/Vary
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

Der **`Vary`** HTTP-Antwortheader beschreibt die Teile der Anfragenachricht, abgesehen von der Methode und der URL, die den Inhalt der Antwort beeinflusst haben. Am häufigsten wird dieser verwendet, um einen Cache-Schlüssel zu erstellen, wenn [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation) im Einsatz ist.

Für alle Antworten auf eine gegebene URL sollte derselbe `Vary`-Headerwert verwendet werden, einschließlich {{HTTPStatus("304")}} `Not Modified`-Antworten und der "Standard"-Antwort.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
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
  - : Gibt an, dass Faktoren, die nicht zu den Anforderungsheadern gehören, die Erstellung dieser Antwort beeinflusst haben. Impliziert, dass die Antwort nicht zwischenspeicherbar ist.
- \<header-name>
  - : Eine durch Kommas getrennte Liste von Namen von Anforderungsheadern, die die Erstellung dieser Antwort beeinflusst haben könnten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitätshinweise

- [Vary with care – Vary header problems in IE6-9](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/vary-with-care)

## Siehe auch

- [Understanding The Vary Header - Smashing Magazine](https://www.smashingmagazine.com/2017/11/understanding-vary-header/)
- [Best Practices for Using the Vary Header – fastly.com](https://www.fastly.com/blog/best-practices-using-vary-header)
- [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation)
