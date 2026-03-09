---
title: PreferenceObject
slug: Web/API/PreferenceObject
l10n:
  sourceCommit: ac0fef0566bfd672c44644a95240b8e1407277bd
---

{{APIRef("Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`PreferenceObject`**-Interface der [Nutzerpräferenzen-API](/de/docs/Web/API/User_Preferences_API) bietet Attribute und Methoden zum Lesen und Überschreiben von Benutzerpräferenzen.

Verwenden Sie den [`PreferenceManager`](/de/docs/Web/API/PreferenceManager) des Dokuments (zugänglich über [`Navigator.preferences`](/de/docs/Web/API/Navigator/preferences)), um Zugriff auf die `PreferenceObject`-Objekte zu erhalten, die jede verfügbare Präferenz repräsentieren.

Das `PreferenceManager`-Interface erbt von [`EventTarget`](/de/docs/Web/API/EventTarget).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`PreferenceObject.override`](/de/docs/Web/API/PreferenceObject/override) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der Überschreibungswert, falls gesetzt, ansonsten `null`.
- [`PreferenceObject.value`](/de/docs/Web/API/PreferenceObject/value) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der Überschreibungswert, falls gesetzt, ansonsten der UA-Standard.
- [`PreferenceObject.validValues`](/de/docs/Web/API/PreferenceObject/validValues) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die gültigen Werte für die Überschreibung.

## Instanz-Methoden

- [`PreferenceObject.clearOverride()`](/de/docs/Web/API/PreferenceObject/clearOverride) {{Experimental_Inline}}
  - : Setzt eine zuvor festgelegte Überschreibung auf `null` zurück und löst das {{domxref("PreferenceObject.change_event" "change")}}-Ereignis aus.
- [`PreferenceObject.requestOverride()`](/de/docs/Web/API/PreferenceObject/requestOverride) {{Experimental_Inline}}
  - : Fordert eine Überschreibung der Präferenz an und löst bei Erfolg das {{domxref("PreferenceObject.change_event" "change")}}-Ereignis aus.

## Ereignisse

- [`change`](/de/docs/Web/API/PreferenceObject/change_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn die Überschreibung gesetzt oder zurückgesetzt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
