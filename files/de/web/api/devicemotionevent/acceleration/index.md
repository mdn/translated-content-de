---
title: "DeviceMotionEvent: Beschleunigungseigenschaft"
short-title: Beschleunigung
slug: Web/API/DeviceMotionEvent/acceleration
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Die schreibgeschützte Eigenschaft **`acceleration`** der {{domxref("DeviceMotionEvent")}}-Schnittstelle gibt die vom Gerät gemessene Beschleunigung in [Metern pro Sekunde zum Quadrat (m/s²)](https://en.wikipedia.org/wiki/Meter_per_second_squared) zurück. Der Beschleunigungswert schließt den Einfluss der Schwerkraft nicht ein, im Gegensatz zu {{DOMxRef("DeviceMotionEvent.accelerationIncludingGravity")}}.

> [!NOTE]
> Wenn die Hardware nicht weiß, wie man die Schwerkraft aus den
> Beschleunigungsdaten entfernt, ist dieser Wert möglicherweise nicht in der
> {{DOMxRef("DeviceMotionEvent")}} vorhanden. In diesem Fall müssen Sie
> {{DOMxRef("DeviceMotionEvent.accelerationIncludingGravity")}} verwenden.

## Wert

Die `acceleration`-Eigenschaft ist ein Objekt, das Informationen über
die Beschleunigung auf drei Achsen bereitstellt. Jede Achse wird durch ihre eigene Eigenschaft repräsentiert:

- `x`
  - : Repräsentiert die Beschleunigung auf der x-Achse, die von West nach Ost verläuft
- `y`
  - : Repräsentiert die Beschleunigung auf der y-Achse, die von Süd nach Nord verläuft
- `z`
  - : Repräsentiert die Beschleunigung auf der z-Achse, die von unten nach oben verläuft

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Device orientation events/Detecting device orientation", "Erkennung der Geräteausrichtung", "", "nocode")}}
- {{domxref("Device orientation events/Orientation and motion data explained", "Erklärung der Ausrichtungs- und Bewegungsdaten", "", "nocode")}}
- {{DOMxRef("Window/devicemotion_event", "devicemotion")}}-Ereignis
