---
title: Sec-GPC
slug: Web/HTTP/Headers/Sec-GPC
l10n:
  sourceCommit: 5b0888d387742ed1fb4de9ec9b02198643622a2c
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

Der **`Sec-GPC`** ([**G**lobal **P**rivacy **C**ontrol](https://globalprivacycontrol.org/)) Anfrage-Header zeigt an, ob der Benutzer zustimmt, dass eine Website oder ein Dienst ihre persönlichen Daten an Dritte verkauft oder teilt.

Die Spezifikation definiert nicht, wie der Benutzer die Zustimmung zu einer Website entziehen oder erteilen kann.
Wo möglich, wird der Mechanismus im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) unten angegeben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Anfrage-Header](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-GPC: 1
```

## Direktiven

Der `Sec-GPC` Header wird mit einem Wert von `1` gesendet, wenn der Benutzer angegeben hat, dass seine Informationen nicht mit Dritten geteilt oder an diese verkauft werden sollen.

Andernfalls wird der Header nicht gesendet, was darauf hinweist, dass der Benutzer entweder keine Entscheidung getroffen hat oder damit einverstanden ist, dass seine Informationen mit Dritten geteilt oder an diese verkauft werden.

## Beispiele

### Lesen des Global Privacy Control-Status aus JavaScript

Die GPC-Präferenz des Benutzers kann auch aus JavaScript mit der [`Navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) oder [`WorkerNavigator.globalPrivacyControl`](/de/docs/Web/API/WorkerNavigator/globalPrivacyControl) Eigenschaft gelesen werden:

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
