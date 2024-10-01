---
title: Accept-Ranges
slug: Web/HTTP/Headers/Accept-Ranges
l10n:
  sourceCommit: eddef03cfbc7f50806a348f4093601033a7976fc
---

{{HTTPSidebar}}

Der **`Accept-Ranges`** HTTP-Antwortheader ist ein Hinweis, der vom Server verwendet wird, um seine Unterstützung für partielle Anfragen vom Client für Dateidownloads anzuzeigen. Der Wert dieses Feldes gibt die Einheit an, die verwendet werden kann, um einen Bereich zu definieren.

Bei Vorhandensein eines `Accept-Ranges`-Headers kann der Browser versuchen, einen unterbrochenen Download _fortzusetzen_, anstatt den Download neu zu starten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Definiert die Range-Einheit, die der Server unterstützt. Obwohl `bytes` die einzige durch {{RFC("7233")}} formal definierte Range-Einheit ist, können zusätzliche Range-Einheiten im [HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units) registriert werden.
- `none`
  - : Gibt an, dass keine Range-Einheit unterstützt wird. Dies macht den Header äquivalent zu seiner Abwesenheit und wird daher selten verwendet. In einigen Browsern, wie z.B. IE9, wird diese Einstellung verwendet, um die Pause-Taste im Download-Manager zu deaktivieren oder zu entfernen.

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
