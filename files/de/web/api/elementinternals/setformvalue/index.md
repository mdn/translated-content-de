---
title: "ElementInternals: setFormValue() Methode"
short-title: setFormValue()
slug: Web/API/ElementInternals/setFormValue
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Web Components")}}

Die **`setFormValue()`** Methode der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle setzt den Übermittlungswert und Status des Elements und kommuniziert diese dem Benutzeragenten.

## Syntax

```js-nolint
setFormValue(value)
setFormValue(value, state)
```

### Parameter

- `value`
  - : Eine [`File`](/de/docs/Web/API/File), ein String oder ein [`FormData`](/de/docs/Web/API/FormData) als der Wert, der an den Server übermittelt werden soll.
- `state` {{optional_inline}}
  - : Eine [`File`](/de/docs/Web/API/File), ein String oder ein [`FormData`](/de/docs/Web/API/FormData), die/das die Eingabe durch den Benutzer darstellt.
    Dies ermöglicht es der Anwendung, die vom Benutzer übermittelten Informationen in der Form, in der sie übermittelt wurden, erneut anzuzeigen, falls erforderlich.

> [!NOTE]
> Im Allgemeinen wird `state` verwendet, um Informationen zu übergeben, die von einem Benutzer angegeben wurden. Der `value` ist geeignet für die Übermittlung an einen Server, nach der Bereinigung.
> Zum Beispiel, wenn ein benutzerdefiniertes Element einen Benutzer bat, ein Datum einzugeben, könnte der Benutzer "3/15/2019" eingeben.
> Dies wäre der `state`.
> Der Server erwartet ein Datumsformat von `2019-03-15`, das Datum in diesem Format würde als `value` übergeben.

### Rückgabewert

Nicht definiert.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Element nicht seine `formAssociated` Eigenschaft auf `true` gesetzt hat.

## Beispiele

Im folgenden Beispiel setzt ein benutzerdefiniertes Kontrollkästchen-Element `on` als den Wert, der an den Server gesendet werden soll, und `checked` als den Zustand.

```js
this.internals_.setFormValue("on", "checked");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
