---
title: 402 Payment Required
slug: Web/HTTP/Status/402
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`402 Payment Required`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) ist ein **nicht standardmäßiger** Antwortstatuscode, der für die zukünftige Verwendung reserviert ist.

Dieser Statuscode wurde entwickelt, um digitale Zahlungssysteme oder (Mikro-) Zahlungssysteme zu ermöglichen und würde anzeigen, dass angeforderte Inhalte nicht verfügbar sind, bis der Client eine Zahlung leistet.
Es gibt keine standardisierte Nutzungskonvention und verschiedene Systeme verwenden ihn in unterschiedlichen Kontexten.

## Status

```http
402 Payment Required
```

## Beispiele

### Zahlung API-Fehler

Einige Zahlungs-APIs verwenden die 402-Antwort als allgemeine Lösung für fehlgeschlagene Zahlungsanforderungen.
Das folgende Beispiel versucht, einen Aufruf an eine Zahlungs-API mithilfe einer POST-Anfrage zur Initiierung einer Transaktion zu tätigen:

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

Dieser Statuscode ist _reserviert_, aber nicht definiert.
Tatsächliche Implementierungen variieren im Format und Inhalt der Antwort.
Kein Browser unterstützt eine 402, und ein Fehler wird als generischer `4xx`-Statuscode angezeigt.

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication)
