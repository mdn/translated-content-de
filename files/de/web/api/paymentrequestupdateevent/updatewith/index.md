---
title: "PaymentRequestUpdateEvent: updateWith()-Methode"
short-title: updateWith()
slug: Web/API/PaymentRequestUpdateEvent/updateWith
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{APIRef("Payment Request API")}}{{securecontext_header}}

Die **`updateWith()`**-Methode des [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent)-Interfaces aktualisiert die Details einer bestehenden [`PaymentRequest`](/de/docs/Web/API/PaymentRequest).

## Syntax

```js-nolint
updateWith(details)
```

### Parameter

- `details`

  - : Entweder ein Objekt oder ein {{jsxref("Promise")}}, das auf ein Objekt aufgelöst wird und die Änderungen spezifiziert, die auf die Zahlungsanfrage angewendet werden:

    - `displayItems` {{optional_inline}}

      - : Ein Array von Objekten, das jeweils eine Position für die Zahlungsanfrage beschreibt. Diese stellen die Posten auf einem Beleg oder einer Rechnung dar, jeweils mit den folgenden Eigenschaften:

        - `amount`
          - : Ein Objekt, das den Geldwert des Artikels beschreibt. Dieses Objekt umfasst die folgenden Felder:
            - `currency`
              - : Ein String, der einen gültigen 3-Buchstaben-[ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)-Währungsbezeichner enthält ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)), der die für den Zahlungsbetrag verwendete Währung angibt.
            - `value`
              - : Ein String, der einen gültigen Dezimalwert enthält und die Höhe der Währung angibt, die den Zahlungsbetrag ausmacht. Dieser String darf nur ein optionales führendes "-" enthalten, um einen negativen Wert anzuzeigen, gefolgt von einer oder mehreren Ziffern von 0 bis 9 und einem optionalen Dezimalpunkt (".", unabhängig von der Sprache) gefolgt von mindestens einer weiteren Ziffer. Leerzeichen sind nicht erlaubt.
        - `label`
          - : Ein String, der einen für Menschen lesbaren Namen oder eine Beschreibung des Artikels oder der Dienstleistung angibt, die in Rechnung gestellt wird. Dies kann dem Benutzer vom [user agent](/de/docs/Glossary/user_agent) angezeigt werden, abhängig vom Design der Benutzeroberfläche.
        - `pending`
          - : Ein Boolean-Wert, der `true` ist, wenn der angegebene `amount` noch nicht finalisiert wurde. Dies kann verwendet werden, um Posten wie Versands- oder Steuerbeträge anzuzeigen, die von der Auswahl der Lieferadresse, der Versandoption oder Ähnlichem abhängen. Der Benutzeragent kann diese Informationen anzeigen, ist jedoch nicht verpflichtet, dies zu tun.

    - `error` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}

      - : Ein String, der eine Fehlermeldung angibt, die dem Benutzer präsentiert werden soll. Bei einem Aufruf von `updateWith()` führt das Hinzufügen von `error` zu den aktualisierten Daten dazu, dass der [user agent](/de/docs/Glossary/user_agent) den Text als allgemeine Fehlermeldung anzeigt. Für adressfeldspezifische Fehler verwenden Sie das Feld `shippingAddressErrors`.

    - `modifiers` {{optional_inline}}

      - : Ein {{jsxref("Array")}} von `PaymentDetailsModifier`-Objekten, deren Eigenschaften in [`PaymentRequestEvent.modifiers`](/de/docs/Web/API/PaymentRequestEvent/modifiers) beschrieben werden.

        Zum Beispiel können Sie einen Modifier verwenden, um den Gesamtzahlungsbetrag basierend auf der gewählten Zahlungsmethode anzupassen ("5 % Barzahlungsrabatt!").

    - `shippingAddressErrors` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Ein Objekt, das eine Fehlermeldung für jede Eigenschaft der Versandadresse enthält, die nicht validiert werden konnte.
    - `shippingOptions` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Ein Array von Objekten, das jeweils eine verfügbare Versandoption beschreibt, aus der der Benutzer wählen kann.
    - `total` {{optional_inline}}
      - : Ein Objekt mit den gleichen Eigenschaften wie die Objekte in `displayItems`, das eine aktualisierte Gesamtsumme für die Zahlung bereitstellt. Stellen Sie sicher, dass dies der Summe aller Posten in `displayItems` entspricht. _Dies wird nicht automatisch berechnet_. Sie müssen diesen Wert selbst aktualisieren, sobald sich die fällige Gesamtsumme ändert. Dadurch haben Sie Flexibilität, wie Sie mit Dingen wie Steuern, Rabatten und anderen Anpassungen des Gesamtpreises umgehen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
