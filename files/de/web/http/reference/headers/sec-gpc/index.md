---
title: Sec-GPC
slug: Web/HTTP/Reference/Headers/Sec-GPC
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Sec-GPC`** {{Glossary("request_header", "Anforderungsheader")}} ist Teil des [Global Privacy Control](https://globalprivacycontrol.org/) (GPC) Mechanismus, um anzuzeigen, ob der Benutzer einem Verkauf oder Teilen seiner persönlichen Informationen mit Drittanbietern durch eine Website oder einen Dienst zustimmt.

Die Spezifikation definiert nicht, wie der Benutzer seine Zustimmung für eine Website widerrufen oder erteilen kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-GPC: <preference>
```

## Direktiven

- `<preference>`
  - : Ein Wert von `1` bedeutet, dass der Benutzer angegeben hat, dass er es vorzieht, dass seine Informationen nicht mit oder an Dritte geteilt oder verkauft werden. Andernfalls wird der Header nicht gesendet, was anzeigt, dass entweder der Benutzer keine Entscheidung getroffen hat oder mit dem Teilen oder Verkaufen seiner Informationen an Dritte einverstanden ist.

## Beispiele

### Lesen des Global Privacy Control-Status mit JavaScript

Die GPC-Präferenz des Benutzers kann auch über JavaScript mithilfe der [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) oder [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) Eigenschaft ausgelesen werden:

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
- [Global Privacy Control Spezifikation](https://privacycg.github.io/gpc-spec/)
- [Do Not Track auf Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
