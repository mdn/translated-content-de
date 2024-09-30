---
title: InputDeviceCapabilities
slug: Web/API/InputDeviceCapabilities
l10n:
  sourceCommit: 8cac4a3fed6a702840efd2deda67a922120732d0
---

{{APIRef("Input Device Capabilities API")}}{{SeeCompatTable}}

Die **`InputDeviceCapabilities`**-Schnittstelle der [Input Device Capabilities API](/de/docs/Web/API/InputDeviceCapabilities_API) liefert Informationen über das physische Gerät oder eine Gruppe von verwandten Geräten, die für die Erzeugung von Eingabeereignissen verantwortlich sind. Ereignisse, die durch dasselbe physische Eingabegerät verursacht werden, erhalten dieselbe Instanz dieses Objekts, aber das Umgekehrte ist nicht der Fall. Zum Beispiel können zwei Mäuse mit denselben Fähigkeiten in einem System als eine einzige `InputDeviceCapabilities`-Instanz erscheinen.

In einigen Fällen repräsentiert `InputDeviceCapabilities` die Fähigkeiten von logischen Geräten statt physischer Geräte. Dies ermöglicht es beispielsweise, dass Touchscreen-Tastaturen und physische Tastaturen gleich dargestellt werden, wenn sie dieselbe Eingabe erzeugen.

## Konstruktoren

- [`InputDeviceCapabilities()`](/de/docs/Web/API/InputDeviceCapabilities/InputDeviceCapabilities) {{Experimental_Inline}}
  - : Erstellt ein `InputDeviceCapabilities`-Objekt.

## Instanzeigenschaften

- [`InputDeviceCapabilities.firesTouchEvents`](/de/docs/Web/API/InputDeviceCapabilities/firesTouchEvents) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{JSxRef("Boolean")}}, der anzeigt, ob das Gerät Touch-Ereignisse auslöst.

## Instanzmethoden

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
