---
title: "PaymentRequestUpdateEvent: updateWith()-Methode"
short-title: updateWith()
slug: Web/API/PaymentRequestUpdateEvent/updateWith
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{APIRef("Payment Request API")}}{{securecontext_header}}

Die **`updateWith()`**-Methode der [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent)-Schnittstelle aktualisiert die Details eines bestehenden [`PaymentRequest`](/de/docs/Web/API/PaymentRequest).

## Syntax

```js-nolint
updateWith(details)
```

### Parameter

- `details`

  - : Entweder ein Objekt oder ein {{jsxref("Promise")}}, das zu einem Objekt aufgelöst wird, das die vorgenommenen Änderungen am Zahlungsantrag angibt:

    - `displayItems` {{optional_inline}}

      - : Ein Array von Objekten, die jeweils eine Einzelposition für den Zahlungsantrag beschreiben. Diese repräsentieren die Einzelposten auf einer Quittung oder Rechnung, die jeweils die folgenden Eigenschaften haben:

        - `amount`
          - : Ein Objekt, das den Geldwert des Artikels beschreibt. Dieses Objekt enthält die folgenden Felder:
            - `currency`
              - : Eine Zeichenkette, die eine gültige 3-Buchstaben [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) Währungskennzeichnung enthält ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)) und die für die Zahlung verwendete Währung `value` angibt.
            - `value`
              - : Eine Zeichenkette mit einem gültigen Dezimalwert, der die Währungsmenge darstellt, die den Zahlungsbetrag bildet. Diese Zeichenkette darf nur ein optionales führendes "-" enthalten, um einen negativen Wert anzuzeigen, gefolgt von einer oder mehreren Ziffern von 0 bis 9 und einem optionalen Dezimalpunkt (".", unabhängig von der Sprache) gefolgt von mindestens einer weiteren Ziffer. Kein Leerzeichen ist erlaubt.
        - `label`
          - : Eine Zeichenkette, die einen lesbaren Namen oder eine Beschreibung des Artikels oder der Dienstleistung angibt, für den/die die Gebühren erhoben werden. Dies kann dem Benutzer vom {{Glossary("user_agent", "user agent")}} angezeigt werden, je nach Design der Schnittstelle.
        - `pending`
          - : Ein Boolean, der `true` ist, wenn der angegebene `amount` noch nicht festgelegt ist. Dies kann verwendet werden, um Artikel wie Versand- oder Steuerbeträge anzuzeigen, die von der Auswahl der Versandadresse, der Versandoption oder Ähnlichem abhängen. Der user agent kann diese Informationen anzeigen, ist jedoch nicht dazu verpflichtet.

    - `error` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}

      - : Eine Zeichenkette, die eine Fehlermeldung angibt, die dem Benutzer präsentiert werden soll. Wenn `updateWith()` aufgerufen wird, bewirkt das Einbeziehen von `error` in die aktualisierten Daten, dass der {{Glossary("user_agent", "user agent")}} den Text als allgemeine Fehlermeldung anzeigt. Für feldspezifische Adressfehler verwenden Sie das Feld `shippingAddressErrors`.

    - `modifiers` {{optional_inline}}

      - : Ein {{jsxref("Array")}} von `PaymentDetailsModifier`-Objekten, deren Eigenschaften in [`PaymentRequestEvent.modifiers`](/de/docs/Web/API/PaymentRequestEvent/modifiers) beschrieben werden.

        Zum Beispiel können Sie einen verwenden, um den Gesamtzahlungsbetrag basierend auf der gewählten Zahlungsmethode anzupassen ("5% Barzahlungsrabatt!").

    - `shippingAddressErrors` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Ein Objekt, das eine Fehlermeldung für jede Eigenschaft der Lieferadresse enthält, die nicht validiert werden konnte.
    - `shippingOptions` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Ein Array von Objekten, die jeweils eine verfügbare Versandoption beschreiben, aus denen der Benutzer auswählen kann.
    - `total` {{optional_inline}}
      - : Ein Objekt mit denselben Eigenschaften wie die Objekte in `displayItems`, das eine aktualisierte Gesamtsumme für die Zahlung bereitstellt. Stellen Sie sicher, dass dies der Summe aller Artikel in `displayItems` entspricht. _Dies wird nicht automatisch berechnet_. Sie müssen diesen Wert jedes Mal selbst aktualisieren, wenn sich der fällige Gesamtbetrag ändert. Dies gibt Ihnen die Flexibilität, wie Sie mit Dingen wie Steuern, Rabatten und anderen Anpassungen des insgesamt berechneten Preises umgehen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
