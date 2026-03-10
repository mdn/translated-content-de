---
title: PreferenceObject
slug: Web/API/PreferenceObject
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`PreferenceObject`** Interface der [User Preferences API](/de/docs/Web/API/User_Preferences_API) stellt Attribute und Methoden zum Lesen und Überschreiben von Benutzereinstellungen bereit.

Verwenden Sie den [`PreferenceManager`](/de/docs/Web/API/PreferenceManager) des Dokuments (zugänglich über [`Navigator.preferences`](/de/docs/Web/API/Navigator/preferences)), um Zugriff auf die `PreferenceObject`-Objekte zu erhalten, die jede verfügbare Einstellung repräsentieren.

Das `PreferenceManager`-Interface erbt von [`EventTarget`](/de/docs/Web/API/EventTarget).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`PreferenceObject.override`](/de/docs/Web/API/PreferenceObject/override) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der Override-Wert, falls gesetzt, andernfalls `null`.
- [`PreferenceObject.value`](/de/docs/Web/API/PreferenceObject/value) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der Override-Wert, falls gesetzt, andernfalls der UA-Standard.
- [`PreferenceObject.validValues`](/de/docs/Web/API/PreferenceObject/validValues) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die gültigen Werte für das Override.

## Instanz-Methoden

- [`PreferenceObject.clearOverride()`](/de/docs/Web/API/PreferenceObject/clearOverride) {{Experimental_Inline}}
  - : Setzt ein zuvor gesetztes Override auf `null` zurück und löst das {{domxref("PreferenceObject.change_event" "change")}}-Ereignis aus.
- [`PreferenceObject.requestOverride()`](/de/docs/Web/API/PreferenceObject/requestOverride) {{Experimental_Inline}}
  - : Fordert ein Überschreiben der Einstellung an und löst bei Erfolg das {{domxref("PreferenceObject.change_event" "change")}}-Ereignis aus.

## Ereignisse

- [`change`](/de/docs/Web/API/PreferenceObject/change_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn das Override gesetzt oder zurückgesetzt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
