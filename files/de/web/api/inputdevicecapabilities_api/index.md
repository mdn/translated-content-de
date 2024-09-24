---
title: InputDeviceCapabilities API
slug: Web/API/InputDeviceCapabilities_API
l10n:
  sourceCommit: 8cac4a3fed6a702840efd2deda67a922120732d0
---

{{DefaultAPISidebar("Input Device Capabilities API")}}{{SeeCompatTable}}

Die InputDeviceCapabilities-API liefert Details über die zugrunde liegenden Quellen von Eingabeereignissen. Die API versucht zu beschreiben, wie sich das Gerät verhält, anstatt was es ist. Zum Beispiel gibt die erste Version der API an, ob ein Gerät Touch-Ereignisse auslöst, anstatt ob es ein Touchscreen ist.

## Konzepte und Verwendung der Eingabegeräte-Fähigkeiten

Da DOM-Ereignisse die Geräteeingabe abstrahieren, bieten sie keine Möglichkeit, zu erfahren, welches Gerät oder welche Art von Gerät ein Ereignis ausgelöst hat. Dies kann zu Situationen führen, in denen dieselbe Aktion mehrere Ereignishandler auslöst. Um damit umzugehen, machen Entwickler Annahmen und verwenden Heuristiken, um das Verhalten auf Webseiten zu normalisieren.

Die InputDeviceCapabilities-API adressiert dieses Problem, indem sie die Fähigkeiten von Eingabegeräten abstrahiert. Nehmen wir zum Beispiel an, wir haben eine Webseite, die sowohl ein `touchstart`- als auch ein `mousedown`-Ereignis implementiert. Wir können annehmen, dass, wenn das Touchstart-Ereignis ausgelöst wird, das Gerät des Benutzers eine Touchschnittstelle hat. Was ist, wenn das Mousedown-Ereignis ausgelöst wird? Es wäre nützlich zu wissen, ob auch ein `touchstart`-Ereignis ausgelöst wurde, sodass wir nicht dieselbe Aktion zweimal ausführen. Dies können wir tun, indem wir die sourceCapabilities-Eigenschaft des {{domxref("UIEvent")}} überprüfen.

```js
myButton.addEventListener("mousedown", (e) => {
  // Touch event case handled above, don't change the style again on tap.
  if (!e.sourceCapabilities.firesTouchEvents) myButton.classList.add("pressed");
});
```

## Schnittstellen

- {{domxref("InputDeviceCapabilities")}} {{Experimental_Inline}}
  - : Liefert logische Informationen über ein Eingabegerät.

## Erweiterungen zu anderen Schnittstellen

- {{domxref("UIEvent.sourceCapabilities")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Instanz der `InputDeviceCapabilities`-Schnittstelle zurück, die Informationen über das physische Gerät liefert, das für die Erzeugung eines Touch-Ereignisses verantwortlich ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
