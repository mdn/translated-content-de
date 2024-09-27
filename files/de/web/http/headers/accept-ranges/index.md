---
title: Accept-Ranges
slug: Web/HTTP/Headers/Accept-Ranges
l10n:
  sourceCommit: eddef03cfbc7f50806a348f4093601033a7976fc
---

{{HTTPSidebar}}

Der **`Accept-Ranges`** HTTP-Antwort-Header ist ein Marker, der vom Server verwendet wird, um seine Unterstützung für teilweise Anfragen vom Client für Dateidownloads zu bewerben. Der Wert dieses Feldes gibt die Einheit an, die zur Definition eines Bereichs verwendet werden kann.

Bei Vorhandensein eines `Accept-Ranges`-Headers kann der Browser versuchen, einen unterbrochenen Download fortzusetzen, anstatt ihn neu zu starten.

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
Accept-Ranges: <range-unit>
Accept-Ranges: none
```

## Direktiven

- `<range-unit>`
  - : Definiert die Bereichseinheit, die der Server unterstützt. Obwohl `bytes` die einzige Bereichseinheit ist, die formal durch {{RFC("7233")}} definiert ist, können zusätzliche Bereichseinheiten im [HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units) registriert werden.
- `none`
  - : Gibt an, dass keine Bereichseinheit unterstützt wird. Dies macht den Header äquivalent zu seiner eigenen Abwesenheit und wird daher selten verwendet. In einigen Browsern, wie IE9, wird diese Einstellung jedoch verwendet, um die Pausentasten im Download-Manager zu deaktivieren oder zu entfernen.

## Beispiele

```http
Accept-Ranges: bytes
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- [IANA HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units)
