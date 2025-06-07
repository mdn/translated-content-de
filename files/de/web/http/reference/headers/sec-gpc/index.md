---
title: Sec-GPC header
short-title: Sec-GPC
slug: Web/HTTP/Reference/Headers/Sec-GPC
l10n:
  sourceCommit: f89740247002fb71eb339af142482900f3c32349
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Sec-GPC`** {{Glossary("request_header", "Request-Header")}} ist Teil des [Global Privacy Control](https://globalprivacycontrol.org/) (GPC)-Mechanismus, um anzuzeigen, ob der Benutzer einer Website oder einem Dienst zustimmt, seine persönlichen Informationen an Dritte zu verkaufen oder zu teilen.

Die Spezifikation definiert nicht, wie der Benutzer die Zustimmung zu einer Website entziehen oder erteilen kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
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
  - : Ein Wert von `1` bedeutet, dass der Benutzer angegeben hat, dass er es vorzieht, dass seine Informationen nicht mit Dritten geteilt oder an Dritte verkauft werden.
    Andernfalls wird der Header nicht gesendet, was darauf hinweist, dass der Benutzer entweder keine Entscheidung getroffen hat oder einverstanden ist, dass seine Informationen mit Dritten geteilt oder an Dritte verkauft werden.

## Beispiele

### Lesen des Global Privacy Control-Status aus JavaScript

Die GPC-Präferenz des Benutzers kann auch aus JavaScript mit der Eigenschaft [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) oder [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) gelesen werden:

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
- [Do Not Track auf Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
