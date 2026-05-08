---
title: PreferenceObject
slug: Web/API/PreferenceObject
l10n:
  sourceCommit: cef391e51005fcc0716545cc6629e5f6d6223225
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`PreferenceObject`** Interface der [User Preferences API](/de/docs/Web/API/User_Preferences_API) bietet Attribute und Methoden zum Lesen und Überschreiben von Benutzereinstellungen.

Verwenden Sie den [`PreferenceManager`](/de/docs/Web/API/PreferenceManager) des Dokuments (zugänglich über [`Navigator.preferences`](/de/docs/Web/API/Navigator/preferences)), um auf die `PreferenceObject`-Objekte zuzugreifen, die jede verfügbare Einstellung repräsentieren.

Das `PreferenceManager`-Interface erbt von [`EventTarget`](/de/docs/Web/API/EventTarget).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`PreferenceObject.override`](/de/docs/Web/API/PreferenceObject/override) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der Überschreibungswert, falls gesetzt, andernfalls `null`.
- [`PreferenceObject.value`](/de/docs/Web/API/PreferenceObject/value) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der Überschreibungswert, falls gesetzt, andernfalls der UA-Standardwert.
- [`PreferenceObject.validValues`](/de/docs/Web/API/PreferenceObject/validValues) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die gültigen Werte für die Überschreibung.

## Instanz-Methoden

- [`PreferenceObject.clearOverride()`](/de/docs/Web/API/PreferenceObject/clearOverride) {{Experimental_Inline}}
  - : Setzt eine zuvor festgelegte Überschreibung auf `null` zurück und löst das [`change`](/de/docs/Web/API/PreferenceObject/change_event) Ereignis aus.
- [`PreferenceObject.requestOverride()`](/de/docs/Web/API/PreferenceObject/requestOverride) {{Experimental_Inline}}
  - : Fordert eine Überschreibung der Einstellung an und löst bei Erfolg das [`change`](/de/docs/Web/API/PreferenceObject/change_event) Ereignis aus.

## Ereignisse

- [`change`](/de/docs/Web/API/PreferenceObject/change_event) {{Experimental_Inline}}
  - : Ausgelöst, wenn die Überschreibung gesetzt oder zurückgesetzt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
