---
title: "UIEvent: sourceCapabilities-Eigenschaft"
short-title: sourceCapabilities
slug: Web/API/UIEvent/sourceCapabilities
l10n:
  sourceCommit: 8cac4a3fed6a702840efd2deda67a922120732d0
---

{{APIRef("Input Device Capabilities API")}}{{SeeCompatTable}}

Die **`sourceCapabilities`** schreibgeschützte Eigenschaft der [`UIEvent`](/de/docs/Web/API/UIEvent) Schnittstelle gibt
eine Instanz der [`InputDeviceCapabilities`](/de/docs/Web/API/InputDeviceCapabilities) Schnittstelle zurück, die
Informationen über das physische Gerät bereitstellt, das für die Erzeugung eines Touch-Ereignisses verantwortlich ist. War kein
Eingabegerät für das Ereignis verantwortlich, gibt sie `null` zurück.

Wenn eine einzelne Benutzerinteraktion mit einem Eingabegerät eine Reihe unterschiedlicher
Eingabeereignisse erzeugt, zeigt die `sourceCapabilities`-Eigenschaft für alle diese Ereignisse auf
die gleiche Instanz von `InputDeviceCapabilities`. Zum Beispiel, wenn ein Benutzer
seinen Finger von einem Touchscreen hebt, können mehrere UIEvents erzeugt werden, darunter
`touchend`, `mousedown`, `click` und
`focus`. Alle diese Ereignisse müssen die gleichen
`sourceCapabilities` haben, die den Touchscreen repräsentieren.

Ein Gerät wird nur dann als "verantwortlich" für ein Ereignis angesehen, wenn diese Interaktion Teil der
Abstraktion ist, die von der Webplattform bereitgestellt wird. Zum Beispiel erlauben viele Benutzeragenten,
dass ein Fenster mit Maus oder Tastatur in der Größe verändert wird, aber dieses Detail wird der
Webplattform in keiner Weise zugänglich gemacht, und daher werden die sourceCapabilities eines Resize-Ereignisses in der Regel
null sein.

## Wert

Eine Instanz von [`InputDeviceCapabilities`](/de/docs/Web/API/InputDeviceCapabilities).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
