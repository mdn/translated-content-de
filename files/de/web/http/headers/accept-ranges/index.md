---
title: Accept-Ranges
slug: Web/HTTP/Headers/Accept-Ranges
l10n:
  sourceCommit: eddef03cfbc7f50806a348f4093601033a7976fc
---

{{HTTPSidebar}}

Der **`Accept-Ranges`** HTTP-Antwortheader ist ein Indikator, den der Server verwendet, um seine Unterstützung für teilweise Anfragen von der Clientseite bei Dateidownloads anzuzeigen. Der Wert dieses Feldes zeigt die Einheit an, die verwendet werden kann, um einen Bereich zu definieren.

In Anwesenheit eines `Accept-Ranges`-Headers kann der Browser versuchen, einen unterbrochenen Download _fortzusetzen_, anstatt den Download von vorne zu starten.

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
Accept-Ranges: <range-unit>
Accept-Ranges: none
```

## Direktiven

- `<range-unit>`
  - : Definiert die Range-Einheit, die der Server unterstützt. Obwohl `bytes` die einzige Range-Einheit ist, die formal durch {{RFC("7233")}} definiert wurde, können zusätzliche Range-Einheiten im [HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units) registriert werden.
- `none`
  - : Gibt an, dass keine Range-Einheit unterstützt wird. Dies macht den Header äquivalent zu seiner eigenen Abwesenheit und wird daher selten verwendet. In einigen Browsern, wie IE9, wird diese Einstellung jedoch verwendet, um die Pause-Tasten im Download-Manager zu deaktivieren oder zu entfernen.

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
