---
title: InputDeviceCapabilities API
slug: Web/API/InputDeviceCapabilities_API
l10n:
  sourceCommit: 8cac4a3fed6a702840efd2deda67a922120732d0
---

{{DefaultAPISidebar("Input Device Capabilities API")}}{{SeeCompatTable}}

Die InputDeviceCapabilities API liefert Details über die zugrundeliegenden Quellen von Eingabeereignissen. Die API versucht zu beschreiben, wie sich das Gerät verhält, anstatt was es ist. Zum Beispiel zeigt die erste Version der API an, ob ein Gerät Touch-Ereignisse auslöst, statt zu prüfen, ob es ein Touchscreen ist.

## Konzepte und Nutzung der Eingabegerätefähigkeiten

Da DOM-Ereignisse die Eingabe von Geräten abstrahieren, gibt es keine Möglichkeit, herauszufinden, welches Gerät oder welche Art von Gerät ein Ereignis ausgelöst hat. Dies kann dazu führen, dass dieselbe Aktion mehrere Ereignishandler auslöst. Um damit umzugehen, stellen Entwickler Annahmen auf und verwenden Heuristiken, um das Verhalten auf Webseiten zu normalisieren.

Die InputDeviceCapabilities API löst dieses Problem, indem sie die Fähigkeiten der Eingabegeräte abstrahiert. Nehmen wir zum Beispiel an, wir haben eine Webseite, die sowohl ein `touchstart`- als auch ein `mousedown`-Ereignis implementiert. Wir können annehmen, dass, wenn das Touchstart-Ereignis ausgelöst wird, das Gerät des Benutzers über eine Touch-Oberfläche verfügt. Was passiert, wenn das Mousedown-Ereignis ausgelöst wird? Es wäre nützlich zu wissen, ob auch ein `touchstart`-Ereignis ausgelöst wurde, damit wir dieselbe Aktion nicht zweimal ausführen. Dies können wir tun, indem wir die `sourceCapabilities`-Eigenschaft des [`UIEvent`](/de/docs/Web/API/UIEvent) überprüfen.

```js
myButton.addEventListener("mousedown", (e) => {
  // Touch event case handled above, don't change the style again on tap.
  if (!e.sourceCapabilities.firesTouchEvents) myButton.classList.add("pressed");
});
```

## Schnittstellen

- [`InputDeviceCapabilities`](/de/docs/Web/API/InputDeviceCapabilities) {{Experimental_Inline}}
  - : Bietet logische Informationen über ein Eingabegerät.

## Erweiterungen zu anderen Schnittstellen

- [`UIEvent.sourceCapabilities`](/de/docs/Web/API/UIEvent/sourceCapabilities) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Instanz der `InputDeviceCapabilities`-Schnittstelle zurück, die Informationen über das physische Gerät bietet, das für das Erzeugen eines Touch-Ereignisses verantwortlich ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
