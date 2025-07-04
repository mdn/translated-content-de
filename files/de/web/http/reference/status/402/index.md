---
title: 402 Payment Required
slug: Web/HTTP/Reference/Status/402
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`402 Payment Required`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) ist ein **nichtstandardmäßiger** Antwortstatuscode, der für zukünftige Nutzung reserviert ist.

Dieser Statuscode wurde entwickelt, um digitale Geld- oder (Mikro-) Zahlungssysteme zu ermöglichen, und würde anzeigen, dass der angeforderte Inhalt nicht verfügbar ist, bis der Client eine Zahlung leistet. Es existiert keine standardisierte Konvention für die Verwendung, und unterschiedliche Systeme nutzen ihn in unterschiedlichen Kontexten.

## Status

```http
402 Payment Required
```

## Beispiele

### Zahlung API-Fehler

Einige Zahlungs-APIs verwenden die 402-Antwort als generischen Fangeintrag für fehlgeschlagene Zahlungsanforderungen. Im folgenden Beispiel wird versucht, einen Aufruf an eine Zahlungs-API mithilfe einer POST-Anfrage zur Initiierung einer Transaktion zu machen:

```http
POST /merchant/transfers/payment HTTP/1.1
Host: payments.example.com
Content-Type: application/json
Content-Length: 402

{
  "payment_transfer": {
    "reference": "PAYMENT123456",
    "amount": "1337",
    "currency": "EUR",
    "sender_account_uri": "pan:5299920000000149;exp=2020-08;cvc=123",
    "sender": {
      "first_name": "Amelia",
      "middle_name": "Rosenburg",
      "email": "test123@sender.example.com"
    },
    "recipient": {
      "first_name": "Tyrone",
      "middle_name": "Johnston",
      "email": "test123@example.com",
      "merchant_id": "123"
    },
    "authentication_value": "ucaf:jJJLtQa+Iws8AREAEbjsA1MAAAA",
  }
}
```

Der Server antwortet auf die Anfrage mit einem 402, wenn ein Problem mit der Transaktion vorliegt, in diesem Fall ist die Karte abgelaufen:

```http
HTTP/1.1 402 Payment Required
Date: Tue, 02 Jul 2024 12:56:49 GMT
Content-Type: application/json
Content-Length: 175

{
  "error": {
    "code": "expired_card",
    "doc_url": "https://example.com/error-codes#expired-card",
    "message": "The card has expired. Verify expiration or use a different card.",
  }
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilitätsnotizen

Dieser Statuscode ist _reserviert_, aber nicht definiert. Tatsächliche Implementierungen variieren im Format und Inhalt der Antwort. Kein Browser unterstützt einen 402, und ein Fehler wird als generischer `4xx`-Statuscode angezeigt.

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)
