---
title: "PaymentRequestUpdateEvent: updateWith()-Methode"
short-title: updateWith()
slug: Web/API/PaymentRequestUpdateEvent/updateWith
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{APIRef("Payment Request API")}}{{securecontext_header}}

Die **`updateWith()`**-Methode der
{{domxref("PaymentRequestUpdateEvent")}}-Schnittstelle aktualisiert die Details einer bestehenden
{{domxref("PaymentRequest")}}.

## Syntax

```js-nolint
updateWith(details)
```

### Parameter

- `details`

  - : Entweder ein Objekt oder ein {{jsxref("Promise")}}, das sich zu einem Objekt auflöst und die Änderungen an der Zahlungsanfrage angibt:

    - `displayItems` {{optional_inline}}

      - : Ein Array von Objekten, von denen jedes einen Posten für die Zahlungsanfrage beschreibt. Diese repräsentieren die Posten auf einem Beleg oder einer Rechnung, jeweils mit den folgenden Eigenschaften:

        - `amount`
          - : Ein Objekt, das den Geldwert des Artikels beschreibt. Dieses Objekt enthält die folgenden Felder:
            - `currency`
              - : Eine Zeichenfolge, die einen gültigen, dreistelligen [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)-Währungscode ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)) enthält und die für die Zahlung `value` verwendete Währung angibt.
            - `value`
              - : Eine Zeichenfolge, die einen gültigen Dezimalwert darstellt, der den Betrag der Währung angibt, der den Zahlungsbetrag ausmacht. Diese Zeichenfolge darf nur ein optionales führendes "-" enthalten, um einen negativen Wert anzuzeigen, gefolgt von einer oder mehreren Ziffern von 0 bis 9 und einem optionalen Dezimalpunkt (".", unabhängig von der Sprache) gefolgt von mindestens einer weiteren Ziffer. Kein Leerzeichen ist erlaubt.
        - `label`
          - : Eine Zeichenfolge, die einen lesbaren Namen oder eine Beschreibung des Artikels oder der Dienstleistung, für die abgerechnet wird, angibt. Dies kann dem Benutzer vom {{Glossary("user agent")}} angezeigt werden, abhängig vom Design der Schnittstelle.
        - `pending`
          - : Ein Boolescher Wert, der `true` ist, wenn der angegebene `amount` noch nicht festgelegt wurde. Dies kann verwendet werden, um Artikel wie Versand- oder Steuerbeträge anzuzeigen, die von der Auswahl der Versandadresse, der Versandoption usw. abhängen. Der Benutzeragent kann diese Informationen anzeigen, ist jedoch nicht dazu verpflichtet.

    - `error` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}

      - : Eine Zeichenfolge, die eine Fehlermeldung angibt, die dem Benutzer angezeigt werden soll. Wenn `updateWith()` aufgerufen wird, führt die Angabe von `error` in den aktualisierten Daten dazu, dass der {{Glossary("user agent")}} den Text als allgemeine Fehlermeldung anzeigt. Für adressfeldspezifische Fehler verwenden Sie das Feld `shippingAddressErrors`.

    - `modifiers` {{optional_inline}}

      - : Ein {{jsxref("Array")}} von `PaymentDetailsModifier`-Objekten, deren Eigenschaften in {{domxref("PaymentRequestEvent.modifiers")}} beschrieben werden.

        Zum Beispiel kann damit der Gesamtzahlungsbetrag basierend auf der ausgewählten Zahlungsmethode angepasst werden ("5% Barzahlungsrabatt!").

    - `shippingAddressErrors` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Ein Objekt, das eine Fehlermeldung für jede Eigenschaft der Lieferadresse enthält, die nicht validiert werden konnte.
    - `shippingOptions` {{optional_inline}} {{deprecated_inline}} {{non-standard_inline}}
      - : Ein Array von Objekten, von denen jedes eine verfügbare Versandoption beschreibt, aus der der Benutzer wählen kann.
    - `total` {{optional_inline}}
      - : Ein Objekt mit den gleichen Eigenschaften wie die Objekte in `displayItems`, das eine aktualisierte Gesamtsumme für die Zahlung bietet. Stellen Sie sicher, dass es der Summe aller Artikel in `displayItems` entspricht. _Dies wird nicht automatisch berechnet_. Sie müssen diesen Wert selbst aktualisieren, sobald sich der Gesamtbetrag ändert. Dies ermöglicht Ihnen Flexibilität im Umgang mit z.B. Steuern, Rabatten und anderen Anpassungen am Gesamtpreis, der berechnet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
