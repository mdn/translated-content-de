---
title: Sec-GPC
slug: Web/HTTP/Headers/Sec-GPC
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

Der HTTP **`Sec-GPC`** {{Glossary("request_header", "Anforderungs-Header")}} ist Teil des [Global Privacy Control](https://globalprivacycontrol.org/) (GPC)-Mechanismus, um anzugeben, ob der Benutzer einer Website oder einem Dienst zustimmt, seine persönlichen Informationen an Dritte zu verkaufen oder weiterzugeben.

Die Spezifikation definiert nicht, wie der Benutzer die Zustimmung zu einer Website widerrufen oder erteilen kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Ein Wert von `1` bedeutet, dass der Benutzer angegeben hat, dass er es bevorzugt, seine Informationen nicht mit Dritten zu teilen oder an Dritte zu verkaufen. Andernfalls wird der Header nicht gesendet, was darauf hinweist, dass der Benutzer entweder keine Entscheidung getroffen hat oder damit einverstanden ist, dass seine Informationen mit Dritten geteilt oder an diese verkauft werden.

## Beispiele

### Lesen des Global Privacy Control-Status von JavaScript

Die GPC-Präferenz des Benutzers kann auch aus JavaScript über die Eigenschaft [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) oder [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) gelesen werden:

```js
navigator.globalPrivacyControl; // "false" or "true"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl)
- {{HTTPHeader("DNT")}} Header
- {{HTTPHeader("Tk")}} Header
- [globalprivacycontrol.org](https://globalprivacycontrol.org/)
- [Global Privacy Control Spec](https://privacycg.github.io/gpc-spec/)
- [Do Not Track auf Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
