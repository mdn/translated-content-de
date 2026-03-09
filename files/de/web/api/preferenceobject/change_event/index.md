---
title: "PreferenceObject: change Ereignis"
short-title: change
slug: Web/API/PreferenceObject/change_event
l10n:
  sourceCommit: ac0fef0566bfd672c44644a95240b8e1407277bd
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`change`**-Ereignis der [`PreferenceObject`](/de/docs/Web/API/PreferenceObject)-Schnittstelle wird ausgelöst, wenn sich ein `PreferenceObject`-[`override`](/de/docs/Web/API/PreferenceObject/override)-Wert ändert. Dies kann durch Aufrufe der Methoden [`requestOverride`](/de/docs/Web/API/PreferenceObject/requestOverride) oder [`clearOverride`](/de/docs/Web/API/PreferenceObject/clearOverride) geschehen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Grundlegende Nutzung

Das folgende Beispiel protokolliert das bevorzugte Farbschema des Benutzers in der Konsole, wenn es sich ändert.

```js
navigator.preferences.colorScheme.addEventListener("change", (event) => {
  console.log(navigator.preferences.colorScheme.value);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
