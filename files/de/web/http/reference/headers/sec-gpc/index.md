---
title: Sec-GPC header
short-title: Sec-GPC
slug: Web/HTTP/Reference/Headers/Sec-GPC
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-**`Sec-GPC`**-{{Glossary("request_header", "Anforderungs-Header")}} ist Teil des [Global Privacy Control](https://globalprivacycontrol.org/) (GPC)-Mechanismus, um anzuzeigen, ob der Benutzer einem Verkauf oder einer Weitergabe seiner persönlichen Informationen an Dritte durch eine Website oder einen Service zustimmt.

Die Spezifikation definiert nicht, wie der Benutzer die Einwilligung für eine Website entziehen oder erteilen kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-GPC: <preference>
```

## Direktiven

- `<preference>`
  - : Ein Wert von `1` bedeutet, dass der Benutzer angegeben hat, dass er nicht möchte, dass seine Informationen mit Dritten geteilt oder an diese verkauft werden. Andernfalls wird der Header nicht gesendet, was anzeigt, dass der Benutzer entweder keine Entscheidung getroffen hat oder damit einverstanden ist, dass seine Informationen mit Dritten geteilt oder an diese verkauft werden.

## Beispiele

### Lesen des Global Privacy Control-Status aus JavaScript

Die GPC-Präferenz des Benutzers kann auch über JavaScript mit der Eigenschaft [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) oder [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) ausgelesen werden:

```js
navigator.globalPrivacyControl; // "false" or "true"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl)
- {{HTTPHeader("DNT")}}-Header
- {{HTTPHeader("Tk")}}-Header
- [globalprivacycontrol.org](https://globalprivacycontrol.org/)
- [Global Privacy Control Spec](https://privacycg.github.io/gpc-spec/)
- [Do Not Track auf Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
