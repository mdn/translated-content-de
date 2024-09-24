---
title: "UIEvent: sourceCapabilities-Eigenschaft"
short-title: sourceCapabilities
slug: Web/API/UIEvent/sourceCapabilities
l10n:
  sourceCommit: 8cac4a3fed6a702840efd2deda67a922120732d0
---

{{APIRef("Input Device Capabilities API")}}{{SeeCompatTable}}

Die schreibgeschützte **`sourceCapabilities`**-Eigenschaft der {{domxref("UIEvent")}}-Schnittstelle gibt eine Instanz der {{domxref('InputDeviceCapabilities')}}-Schnittstelle zurück, die Informationen über das physische Gerät bietet, das für die Erzeugung eines Touch-Events verantwortlich ist. Wenn kein Eingabegerät für das Ereignis verantwortlich war, wird `null` zurückgegeben.

Wenn eine einzelne Benutzerinteraktion mit einem Eingabegerät eine Reihe unterschiedlicher Eingabeereignisse erzeugt, verweist die Eigenschaft `sourceCapabilities` für alle auf dieselbe Instanz von `InputDeviceCapabilities`. Wenn ein Benutzer beispielsweise seinen Finger von einem Touchscreen hebt, können mehrere UIEvents erzeugt werden, darunter `touchend`, `mousedown`, `click` und `focus`. Alle diese Ereignisse müssen dieselben `sourceCapabilities` repräsentieren, die den Touchscreen darstellen.

Ein Gerät wird nur dann als "verantwortlich" für ein Ereignis angesehen, wenn diese Interaktion Teil der Abstraktion ist, die von der Webplattform bereitgestellt wird. Zum Beispiel erlauben viele User Agents, ein Fenster mit einer Maus oder einer Tastatur zu vergrößern oder zu verkleinern, aber dieses Detail wird der Webplattform in keiner Weise offengelegt, und daher sind die `sourceCapabilities` eines Resize-Ereignisses normalerweise null.

## Wert

Eine Instanz von {{domxref('InputDeviceCapabilities')}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
