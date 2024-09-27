---
title: InputDeviceCapabilities
slug: Web/API/InputDeviceCapabilities
l10n:
  sourceCommit: 8cac4a3fed6a702840efd2deda67a922120732d0
---

{{APIRef("Input Device Capabilities API")}}{{SeeCompatTable}}

Die **`InputDeviceCapabilities`**-Schnittstelle der [Input Device Capabilities API](/de/docs/Web/API/InputDeviceCapabilities_API) bietet Informationen über das physische Gerät oder eine Gruppe verwandter Geräte, die für die Erzeugung von Eingabeereignissen verantwortlich sind. Ereignisse, die vom selben physischen Eingabegerät verursacht werden, erhalten dieselbe Instanz dieses Objekts, aber das Gegenteil ist nicht wahr. Beispielsweise können zwei Mäuse mit denselben Fähigkeiten in einem System als eine einzige `InputDeviceCapabilities`-Instanz erscheinen.

In einigen Fällen repräsentiert `InputDeviceCapabilities` die Fähigkeiten von logischen Geräten anstelle von physischen Geräten. Dies ermöglicht es beispielsweise, dass Bildschirmtastaturen und physische Tastaturen auf die gleiche Weise dargestellt werden, wenn sie die gleiche Eingabe erzeugen.

## Konstruktoren

- [`InputDeviceCapabilities()`](/de/docs/Web/API/InputDeviceCapabilities/InputDeviceCapabilities) {{Experimental_Inline}}
  - : Erstellt ein `InputDeviceCapabilities`-Objekt.

## Instanzeigenschaften

- [`InputDeviceCapabilities.firesTouchEvents`](/de/docs/Web/API/InputDeviceCapabilities/firesTouchEvents) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{JSxRef("Boolean")}}, das angibt, ob das Gerät Touch-Ereignisse auslöst.

## Instanzmethoden

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
