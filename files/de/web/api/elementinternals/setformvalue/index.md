---
title: "ElementInternals: setFormValue()-Methode"
short-title: setFormValue()
slug: Web/API/ElementInternals/setFormValue
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("Web Components")}}

Die **`setFormValue()`**-Methode der {{domxref("ElementInternals")}}-Schnittstelle setzt den Übermittlungswert und Zustand des Elements und kommuniziert diese mit dem Benutzeragenten.

## Syntax

```js-nolint
setFormValue(value)
setFormValue(value, state)
```

### Parameter

- `value`
  - : Eine {{domxref("File")}}, ein String oder eine {{domxref("FormData")}} als der Wert, der an den Server übermittelt werden soll.
- `state` {{optional_inline}}
  - : Eine {{domxref("File")}}, ein String oder eine {{domxref("FormData")}}, die die vom Benutzer vorgenommenen Eingaben repräsentiert.
    Dies ermöglicht es der Anwendung, die Informationen, die der Benutzer übermittelt hat, in der von ihm übermittelten Form erneut anzuzeigen, falls erforderlich.

> [!NOTE]
> Im Allgemeinen wird `state` verwendet, um Informationen weiterzugeben, die ein Benutzer angegeben hat, während `value` für die Übermittlung an einen Server geeignet ist, nachdem eine Bereinigung erfolgte.
> Zum Beispiel: Wenn ein benutzerdefiniertes Element einen Benutzer aufforderte, ein Datum einzugeben, könnte der Benutzer "3/15/2019" eingeben.
> Dies wäre der `state`.
> Der Server erwartet ein Datumsformat von `2019-03-15`, und das Datum in diesem Format würde als `value` übergeben werden.

### Rückgabewert

Undefined.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Element seine `formAssociated`-Eigenschaft nicht auf `true` gesetzt hat.

## Beispiele

Im folgenden Beispiel setzt ein benutzerdefiniertes Checkbox-Element `on` als Wert, der an den Server gesendet werden soll, und `checked` als den Zustand.

```js
this.internals_.setFormValue("on", "checked");
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
