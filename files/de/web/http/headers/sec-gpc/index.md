---
title: Sec-GPC
slug: Web/HTTP/Headers/Sec-GPC
l10n:
  sourceCommit: c1fd7dc9410c14ec9e00b3ec35b7b94d43296389
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Sec-GPC`** {{Glossary("request_header", "Anforderungsheader")}} ist Teil des [Global Privacy Control](https://globalprivacycontrol.org/) (GPC) Mechanismus, um anzuzeigen, ob der Benutzer einwilligt, dass eine Website oder ein Dienst seine persönlichen Informationen an Dritte verkauft oder teilt.

Die Spezifikation definiert nicht, wie der Benutzer die Einwilligung für eine Website widerrufen oder erteilen kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Ein Wert von `1` bedeutet, dass der Benutzer angegeben hat, dass er es bevorzugt, dass seine Informationen nicht mit Dritten geteilt oder an sie verkauft werden. Andernfalls wird der Header nicht gesendet, was anzeigt, dass entweder der Benutzer keine Entscheidung getroffen hat oder der Benutzer damit einverstanden ist, dass seine Informationen mit Dritten geteilt oder an sie verkauft werden.

## Beispiele

### Lesen des Global Privacy Control-Status aus JavaScript

Die GPC-Präferenz des Benutzers kann auch aus JavaScript mithilfe der [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) oder [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) Eigenschaft gelesen werden:

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
