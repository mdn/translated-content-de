---
title: InputDeviceCapabilities API
slug: Web/API/InputDeviceCapabilities_API
l10n:
  sourceCommit: 8cac4a3fed6a702840efd2deda67a922120732d0
---

{{DefaultAPISidebar("Input Device Capabilities API")}}{{SeeCompatTable}}

Die InputDeviceCapabilities API liefert Details über die zugrunde liegenden Quellen von Eingabeereignissen. Die API versucht zu beschreiben, wie das Gerät sich verhält, anstatt was es ist. Zum Beispiel zeigt die erste Version der API, ob ein Gerät Touch-Ereignisse auslöst, anstatt ob es ein Touchscreen ist.

## Konzepte und Verwendungsmöglichkeiten von Eingabegerätefähigkeiten

Da DOM-Ereignisse die Eingabe von Geräten abstrahieren, bieten sie keine Möglichkeit, zu erfahren, welches Gerät oder welche Art von Gerät ein Ereignis ausgelöst hat. Dies kann zu Fällen führen, in denen dieselbe Aktion mehrere Ereignishandler auslöst. Um damit umzugehen, machen Entwickler Annahmen und verwenden Heuristiken, um das Verhalten auf Webseiten zu normalisieren.

Die InputDeviceCapabilities API löst dieses Problem, indem sie die Fähigkeiten von Eingabegeräten abstrahiert. Nehmen wir beispielsweise an, wir haben eine Webseite, die sowohl ein `touchstart` als auch ein `mousedown` Ereignis implementiert. Wir können annehmen, dass wenn das touchstart-Ereignis ausgelöst wird, das Gerät des Benutzers eine Touch-Schnittstelle hat. Was ist, wenn das mousedown-Ereignis ausgelöst wird? Es wäre nützlich zu wissen, ob auch ein `touchstart` Ereignis ausgelöst wurde, damit wir nicht dieselbe Aktion zweimal ausführen. Dies können wir tun, indem wir die sourceCapabilities-Eigenschaft des [`UIEvent`](/de/docs/Web/API/UIEvent) überprüfen.

```js
myButton.addEventListener("mousedown", (e) => {
  // Touch event case handled above, don't change the style again on tap.
  if (!e.sourceCapabilities.firesTouchEvents) myButton.classList.add("pressed");
});
```

## Schnittstellen

- [`InputDeviceCapabilities`](/de/docs/Web/API/InputDeviceCapabilities) {{Experimental_Inline}}
  - : Bietet logische Informationen über ein Eingabegerät.

## Erweiterungen für andere Schnittstellen

- [`UIEvent.sourceCapabilities`](/de/docs/Web/API/UIEvent/sourceCapabilities) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Instanz der `InputDeviceCapabilities` Schnittstelle zurück, die Informationen über das physische Gerät bietet, das für das Generieren eines Touch-Ereignisses verantwortlich ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
