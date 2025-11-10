---
title: "PaymentRequestUpdateEvent: updateWith() Methode"
short-title: updateWith()
slug: Web/API/PaymentRequestUpdateEvent/updateWith
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Payment Request API")}}{{securecontext_header}}

Die **`updateWith()`** Methode des [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent)-Interfaces aktualisiert die Details eines bestehenden [`PaymentRequest`](/de/docs/Web/API/PaymentRequest).

## Syntax

```js-nolint
updateWith(details)
```

### Parameter

- `details`

  - : Entweder ein Objekt oder ein {{jsxref("Promise")}}, das sich zu einem Objekt auflöst und die Änderungen angibt, die auf die Zahlungsanforderung angewendet werden:

    - `displayItems` {{optional_inline}}

      - : Ein Array von Objekten, die jeweils eine Zeile für die Zahlungsanforderung beschreiben. Diese stellen die Zeilenartikel auf einer Quittung oder Rechnung dar, jeweils mit den folgenden Eigenschaften:
        - `amount`
          - : Ein Objekt, das den Geldwert des Artikels beschreibt. Dieses Objekt enthält die folgenden Felder:
            - `currency`
              - : Ein String mit einem gültigen 3-Buchstaben-[ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) Währungskennzeichen ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)), der die für die Zahlung verwendete Währung angibt.
            - `value`
              - : Ein String, der einen gültigen Dezimalwert enthält, der den Betrag der Währung darstellt, die die Zahlungssumme bildet. Dieser String darf nur ein optionales führendes "-" enthalten, um einen negativen Wert anzuzeigen, dann eine oder mehrere Ziffern von 0 bis 9, und einen optionalen Dezimalpunkt (".", unabhängig von der Lokalisierung) gefolgt von mindestens einer weiteren Ziffer. Leerzeichen sind nicht erlaubt.
        - `label`
          - : Ein String, der einen menschenlesbaren Namen oder eine Beschreibung des Artikels oder der Dienstleistung angibt, für die berechnet wird. Dies kann dem Benutzer vom {{Glossary("user_agent", "Benutzeragenten")}} angezeigt werden, je nach Gestaltung der Schnittstelle.
        - `pending`
          - : Ein Boolean-Wert, der `true` ist, wenn der angegebene `amount` noch nicht abgeschlossen ist. Dies kann verwendet werden, um Posten wie Versand- oder Steuerbeträge anzuzeigen, die von der Auswahl der Versandadresse, Versandoption oder anderem abhängig sind. Der Benutzeragent kann diese Information anzeigen, ist aber nicht dazu verpflichtet.

    - `error` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}

      - : Ein String, der eine Fehlermeldung angibt, die dem Benutzer angezeigt werden soll. Beim Aufruf von `updateWith()` bewirkt die Aufnahme von `error` in die aktualisierten Daten, dass der {{Glossary("user_agent", "Benutzeragent")}} den Text als allgemeine Fehlermeldung anzeigt. Für feldspezifische Fehler bei der Adresse verwenden Sie das `shippingAddressErrors`-Feld.

    - `modifiers` {{optional_inline}}

      - : Ein {{jsxref("Array")}} von `PaymentDetailsModifier`-Objekten, dessen Eigenschaften in [`PaymentRequestEvent.modifiers`](/de/docs/Web/API/PaymentRequestEvent/modifiers) beschrieben sind.

        Zum Beispiel kann eines verwendet werden, um den Gesamtzahlungsbetrag basierend auf der ausgewählten Zahlungsmethode anzupassen ("5% Barzahlungsrabatt!").

    - `shippingAddressErrors` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Ein Objekt, das eine Fehlermeldung für jede Eigenschaft der Versandadresse enthält, die nicht validiert werden konnte.
    - `shippingOptions` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Ein Array von Objekten, die jeweils eine verfügbare Versandoption beschreiben, aus der der Benutzer wählen kann.
    - `total` {{optional_inline}}
      - : Ein Objekt mit den gleichen Eigenschaften wie die Objekte in `displayItems`, das eine aktualisierte Summe für die Zahlung bereitstellt. Stellen Sie sicher, dass dieser Wert der Summe aller Posten in `displayItems` entspricht. _Dieser Wert wird nicht automatisch berechnet_. Sie müssen diesen Wert selbst aktualisieren, wann immer sich der fällige Gesamtbetrag ändert. Dies bietet Ihnen Flexibilität, wie Sie Dinge wie Steuern, Rabatte und andere Anpassungen am gesamten Preis handhaben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
