---
title: Sec-GPC
slug: Web/HTTP/Headers/Sec-GPC
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Sec-GPC`** {{Glossary("request_header", "Anforderungsheader")}} ist Teil des [Global Privacy Control](https://globalprivacycontrol.org/) (GPC)-Mechanismus, um anzuzeigen, ob der Benutzer einer Website oder einem Dienst zustimmt, seine persönlichen Daten an Dritte zu verkaufen oder zu teilen.

Die Spezifikation definiert nicht, wie der Benutzer seine Einwilligung für die Website zurückziehen oder erteilen kann.

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
  - : Ein Wert von `1` bedeutet, dass der Benutzer angegeben hat, dass er es vorzieht, dass seine Informationen nicht mit Dritten geteilt oder an Dritte verkauft werden.
    Andernfalls wird der Header nicht gesendet, was darauf hinweist, dass der Benutzer entweder keine Entscheidung getroffen hat oder damit einverstanden ist, dass seine Informationen geteilt oder verkauft werden.

## Beispiele

### Lesen des Global Privacy Control-Status aus JavaScript

Die GPC-Präferenz des Benutzers kann auch aus JavaScript über die [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) oder [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) Eigenschaft abgerufen werden:

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
