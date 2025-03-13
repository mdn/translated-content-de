---
title: 402 Payment Required
slug: Web/HTTP/Reference/Status/402
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`402 Payment Required`** für [Client-Fehlerantworten](/de/docs/Web/HTTP/Reference/Status#client_error_responses) ist ein **nicht standardmäßiger** Antwortstatuscode, der für zukünftige Verwendung reserviert ist.

Dieser Statuscode wurde geschaffen, um digitale Zahlungsmittel oder (Mikro-) Zahlungssysteme zu ermöglichen und würde anzeigen, dass angeforderter Inhalt erst verfügbar ist, wenn der Client eine Zahlung geleistet hat. Es gibt keine standardisierte Nutzungskonvention, und unterschiedliche Systeme verwenden ihn in unterschiedlichen Kontexten.

## Status

```http
402 Payment Required
```

## Beispiele

### Fehler bei Zahlungsschnittstelle

Einige Zahlungsschnittstellen verwenden die 402-Antwort als allgemeine Falle für fehlgeschlagene Zahlungsanforderungen. Im folgenden Beispiel wird versucht, mit einer POST-Anfrage einen Aufruf an eine Zahlungsschnittstelle zur Einleitung einer Transaktion zu richten:

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
      "first_name": "Brian",
      "middle_name": "Smith",
      "email": "test123@sender.example.com"
    },
    "recipient": {
      "first_name": "John",
      "middle_name": "Tyler",
      "email": "test123@example.com",
      "merchant_id": "123"
    },
    "authentication_value": "ucaf:jJJLtQa+Iws8AREAEbjsA1MAAAA",
  }
}
```

Der Server antwortet auf die Anfrage mit einer 402, wenn es ein Problem mit der Transaktion gibt, in diesem Fall ist die Karte abgelaufen:

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

Dieser Statuscode ist _reserviert_, aber nicht definiert. Tatsächliche Implementierungen variieren im Format und Inhalt der Antwort. Kein Browser unterstützt eine 402, und ein Fehler wird als allgemeiner `4xx` Statuscode angezeigt.

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)
