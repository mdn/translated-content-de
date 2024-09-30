---
title: "ElementInternals: setFormValue()-Methode"
short-title: setFormValue()
slug: Web/API/ElementInternals/setFormValue
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Web Components")}}

Die **`setFormValue()`**-Methode des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces setzt den Übermittlungswert und den Zustand des Elements und kommuniziert diese an den Benutzeragenten.

## Syntax

```js-nolint
setFormValue(value)
setFormValue(value, state)
```

### Parameter

- `value`
  - : Eine [`File`](/de/docs/Web/API/File)-, eine String- oder eine [`FormData`](/de/docs/Web/API/FormData)-Instanz als zu übermittelnder Wert an den Server.
- `state` {{optional_inline}}
  - : Eine [`File`](/de/docs/Web/API/File)-, eine String- oder eine [`FormData`](/de/docs/Web/API/FormData)-Instanz, die die Eingabe des Nutzers darstellt.
    Dies ermöglicht es der Anwendung, die Informationen, die der Nutzer übermittelt hat, in der von ihm übermittelten Form erneut anzuzeigen, falls erforderlich.

> [!NOTE]
> Im Allgemeinen wird `state` verwendet, um Informationen zu übermitteln, die von einem Nutzer angegeben wurden, während `value` nach der Bereinigung für die Übermittlung an einen Server geeignet ist.
> Wenn zum Beispiel ein benutzerdefiniertes Element einen Nutzer bitten würde, ein Datum einzugeben, könnte der Nutzer "15.3.2019" eingeben.
> Dies wäre der `state`.
> Der Server erwartet ein Datumsformat von `2019-03-15`, das Datum in diesem Format würde als `value` übergeben.

### Rückgabewert

Undefined.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn das Element seine `formAssociated`-Eigenschaft nicht auf `true` gesetzt hat.

## Beispiele

Im folgenden Beispiel setzt ein benutzerdefiniertes Checkbox-Element `on` als Wert, der an den Server gesendet wird, und `checked` als Zustand.

```js
this.internals_.setFormValue("on", "checked");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
