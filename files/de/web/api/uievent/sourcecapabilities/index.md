---
title: "UIEvent: sourceCapabilities-Eigenschaft"
short-title: sourceCapabilities
slug: Web/API/UIEvent/sourceCapabilities
l10n:
  sourceCommit: 8cac4a3fed6a702840efd2deda67a922120732d0
---

{{APIRef("Input Device Capabilities API")}}{{SeeCompatTable}}

Die schreibgeschützte **`sourceCapabilities`**-Eigenschaft der [`UIEvent`](/de/docs/Web/API/UIEvent)-Schnittstelle gibt eine Instanz der [`InputDeviceCapabilities`](/de/docs/Web/API/InputDeviceCapabilities)-Schnittstelle zurück, die Informationen über das physische Gerät liefert, das für die Erzeugung eines Touch-Events verantwortlich ist. Wenn kein Eingabegerät für das Ereignis verantwortlich war, wird `null` zurückgegeben.

Wenn eine einzelne Benutzerinteraktion mit einem Eingabegerät eine Reihe verschiedener Eingabeereignisse erzeugt, wird die `sourceCapabilities`-Eigenschaft bei allen auf dieselbe Instanz von `InputDeviceCapabilities` verweisen. Wenn ein Benutzer beispielsweise den Finger von einem Touchscreen hebt, können mehrere UIEvents generiert werden, darunter `touchend`, `mousedown`, `click` und `focus`. Alle diese Ereignisse müssen dieselben `sourceCapabilities` haben, die den Touchscreen repräsentieren.

Ein Gerät wird nur dann als "verantwortlich" für ein Ereignis angesehen, wenn diese Interaktion Teil der Abstraktion ist, die von der Web-Plattform bereitgestellt wird. Beispielsweise erlauben viele Benutzeragenten, dass ein Fenster mit einer Maus oder einer Tastatur in der Größe verändert wird, aber dieses Detail wird der Web-Plattform in keiner Weise offengelegt, sodass sourceCapabilities eines Resize-Events typischerweise null ist.

## Wert

Eine Instanz von [`InputDeviceCapabilities`](/de/docs/Web/API/InputDeviceCapabilities).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
