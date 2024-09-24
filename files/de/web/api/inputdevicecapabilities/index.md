---
title: InputDeviceCapabilities
slug: Web/API/InputDeviceCapabilities
l10n:
  sourceCommit: 8cac4a3fed6a702840efd2deda67a922120732d0
---

{{APIRef("Input Device Capabilities API")}}{{SeeCompatTable}}

Die **`InputDeviceCapabilities`**-Schnittstelle der {{domxref("InputDeviceCapabilities API", "Input Device Capabilities API", "", "nocode")}} bietet Informationen über das physische Gerät oder eine Gruppe verwandter Geräte, die für die Erzeugung von Eingabeereignissen verantwortlich sind. Ereignisse, die durch dasselbe physische Eingabegerät verursacht werden, erhalten dieselbe Instanz dieses Objekts, aber umgekehrt gilt dies nicht. Zwei Mäuse mit denselben Fähigkeiten in einem System können beispielsweise als eine einzige `InputDeviceCapabilities`-Instanz erscheinen.

In einigen Fällen repräsentiert `InputDeviceCapabilities` die Fähigkeiten logischer Geräte anstelle von physischen Geräten. Dies ermöglicht es beispielsweise, dass Touchscreen-Tastaturen und physische Tastaturen auf die gleiche Weise dargestellt werden, wenn sie dieselbe Eingabe erzeugen.

## Konstruktoren

- {{domxref("InputDeviceCapabilities.InputDeviceCapabilities", "InputDeviceCapabilities()")}} {{Experimental_Inline}}
  - : Erstellt ein `InputDeviceCapabilities`-Objekt.

## Instanzeigenschaften

- {{DOMxRef("InputDeviceCapabilities.firesTouchEvents")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{JSxRef("Boolean")}}, der angibt, ob das Gerät Touch-Ereignisse auslöst.

## Instanzmethoden

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
