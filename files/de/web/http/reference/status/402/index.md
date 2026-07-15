---
title: 402 Payment Required
slug: Web/HTTP/Reference/Status/402
l10n:
  sourceCommit: 304469f96698fda14a08e35060057a23761daea4
---

Der HTTP-Statuscode **`402 Payment Required`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) ist ein **nicht standardmäßiger** Antwortstatuscode, der für zukünftige Verwendung reserviert ist.

Dieser Statuscode wurde erstellt, um digitale Bar- oder (Mikro-)Zahlungssysteme zu ermöglichen, und würde anzeigen, dass der angeforderte Inhalt erst verfügbar ist, nachdem der Client eine Zahlung geleistet hat.
Es gibt keine standardisierte Nutzungskonvention, und unterschiedliche Systeme verwenden ihn in unterschiedlichen Kontexten.

## Status

```http
402 Payment Required
```

## Beispiele

### Fehler bei der Zahlungs-API

Einige Zahlungs-APIs verwenden die 402-Antwort als generische Auffanglösung für fehlgeschlagene Zahlungsanfragen.
Im folgenden Beispiel wird versucht, einen Anruf an eine Zahlungs-API mit einer POST-Anfrage zu tätigen, um eine Transaktion zu initiieren:

```http
POST /merchant/transfers/payment HTTP/1.1
Host: payments.example.com
Content-Type: application/json
Content-Length: 529

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

Der Server beantwortet die Anfrage mit einer 402, wenn ein Problem mit der Transaktion vorliegt. In diesem Fall ist die Karte abgelaufen:

```http
HTTP/1.1 402 Payment Required
Date: Tue, 02 Jul 2024 12:56:49 GMT
Content-Type: application/json
Content-Length: 194

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

## Kompatibilitätshinweise

Dieser Statuscode ist _reserviert_, aber nicht definiert.
Tatsächliche Implementierungen variieren im Format und Inhalt der Antwort.
Kein Browser unterstützt eine 402, und ein Fehler wird als generischer `4xx`-Statuscode angezeigt.

## Siehe auch

- [HTTP-Statuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)
