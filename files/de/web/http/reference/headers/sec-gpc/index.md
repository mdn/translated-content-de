---
title: Sec-GPC header
short-title: Sec-GPC
slug: Web/HTTP/Reference/Headers/Sec-GPC
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP **`Sec-GPC`** {{Glossary("request_header", "Anforderungsheader")}} ist Teil des [Global Privacy Control](https://globalprivacycontrol.org/) (GPC)-Mechanismus, um anzuzeigen, ob der Benutzer einer Website oder einem Service das Verkaufen oder Teilen ihrer persönlichen Informationen mit Dritten zustimmt.

Die Spezifikation definiert nicht, wie der Benutzer die Einwilligung für eine Website zurückziehen oder erteilen kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Ein Wert von `1` bedeutet, dass der Benutzer angegeben hat, dass er es vorzieht, dass seine Informationen nicht mit Dritten geteilt oder an diese verkauft werden. Andernfalls wird der Header nicht gesendet, was anzeigt, dass der Benutzer entweder keine Entscheidung getroffen hat oder es ihm recht ist, dass seine Informationen mit oder an Dritte geteilt oder verkauft werden.

## Beispiele

### Lesen des Global Privacy Control-Status von JavaScript

Die GPC-Voreinstellung des Benutzers kann auch aus JavaScript mit der Eigenschaft [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) oder [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) ausgelesen werden:

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
