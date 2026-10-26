---
title: "PreferenceObject: change-Ereignis"
short-title: change
slug: Web/API/PreferenceObject/change_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`change`**-Ereignis der [`PreferenceObject`](/de/docs/Web/API/PreferenceObject)-Schnittstelle wird ausgelöst, wenn sich der Wert von [`override`](/de/docs/Web/API/PreferenceObject/override) eines `PreferenceObject` ändert. Dies kann durch Aufrufe der Methoden [`requestOverride`](/de/docs/Web/API/PreferenceObject/requestOverride) oder [`clearOverride`](/de/docs/Web/API/PreferenceObject/clearOverride) geschehen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("change", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Grundlegende Verwendung

Der folgende Codeausschnitt gibt das bevorzugte Farbschema des Benutzers in der Konsole aus, wenn es sich ändert.

```js
navigator.preferences.colorScheme.addEventListener("change", (event) => {
  console.log(navigator.preferences.colorScheme.value);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
