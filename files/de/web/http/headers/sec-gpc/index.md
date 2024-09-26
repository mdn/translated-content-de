---
title: Sec-GPC
slug: Web/HTTP/Headers/Sec-GPC
l10n:
  sourceCommit: 5b0888d387742ed1fb4de9ec9b02198643622a2c
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

Der **`Sec-GPC`** ([**G**lobal **P**rivacy **C**ontrol](https://globalprivacycontrol.org/)) Anfrage-Header gibt an, ob der Benutzer der Verkauf oder das Teilen seiner persönlichen Informationen mit Dritten durch eine Website oder einen Dienst zustimmt.

Die Spezifikation definiert nicht, wie der Benutzer die Einwilligung zur Website zurückziehen oder erteilen kann. Wo möglich, wird der Mechanismus im Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) unten angegeben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
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

Der `Sec-GPC` Header wird mit einem Wert von `1` gesendet, wenn der Benutzer angegeben hat, dass er es vorzieht, dass seine Informationen nicht mit Dritten geteilt oder an sie verkauft werden.

Andernfalls wird der Header nicht gesendet, was anzeigt, dass entweder der Benutzer keine Entscheidung getroffen hat oder der Benutzer damit einverstanden ist, dass seine Informationen geteilt oder verkauft werden.

## Beispiele

### Lesen des Global Privacy Control-Status aus JavaScript

Die GPC-Präferenz des Benutzers kann auch aus JavaScript gelesen werden, indem die {{domxref("Navigator.globalPrivacyControl")}} oder {{domxref("WorkerNavigator.globalPrivacyControl")}} Eigenschaft verwendet wird:

```js
navigator.globalPrivacyControl; // "false" oder "true"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Navigator.globalPrivacyControl")}}
- {{HTTPHeader("DNT")}} Header
- {{HTTPHeader("Tk")}} Header
- [globalprivacycontrol.org](https://globalprivacycontrol.org/)
- [Global Privacy Control Spezifikation](https://privacycg.github.io/gpc-spec/)
- [Do Not Track auf Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
