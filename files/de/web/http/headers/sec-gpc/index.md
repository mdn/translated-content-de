---
title: Sec-GPC
slug: Web/HTTP/Headers/Sec-GPC
l10n:
  sourceCommit: 5b0888d387742ed1fb4de9ec9b02198643622a2c
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

Der **`Sec-GPC`** ([**G**lobal **P**rivacy **C**ontrol](https://globalprivacycontrol.org/)) Request-Header zeigt an, ob der Benutzer zustimmt, dass eine Website oder ein Dienst ihre persönlichen Informationen an Dritte verkauft oder weitergibt.

Die Spezifikation definiert nicht, wie der Benutzer seine Zustimmung zur Website zurückziehen oder erteilen kann.
Wo möglich, wird der Mechanismus im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) unten angegeben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-GPC: 1
```

## Direktiven

Der `Sec-GPC`-Header wird mit einem Wert von `1` gesendet, wenn der Benutzer angegeben hat, dass er bevorzugt, dass seine Informationen nicht mit Dritten geteilt oder an diese verkauft werden.

Andernfalls wird der Header nicht gesendet, was darauf hinweist, dass der Benutzer entweder keine Entscheidung getroffen hat oder mit der Weitergabe oder dem Verkauf seiner Informationen an Dritte einverstanden ist.

## Beispiele

### Lesen des Global Privacy Control-Status von JavaScript

Die GPC-Präferenz des Benutzers kann auch aus JavaScript mit der Eigenschaft {{domxref("Navigator.globalPrivacyControl")}} oder {{domxref("WorkerNavigator.globalPrivacyControl")}} gelesen werden:

```js
navigator.globalPrivacyControl; // "false" or "true"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Navigator.globalPrivacyControl")}}
- {{HTTPHeader("DNT")}} header
- {{HTTPHeader("Tk")}} header
- [globalprivacycontrol.org](https://globalprivacycontrol.org/)
- [Global Privacy Control Spec](https://privacycg.github.io/gpc-spec/)
- [Do Not Track auf Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
