---
title: USBEndpoint
slug: Web/API/USBEndpoint
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `USBEndpoint`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) bietet Informationen über einen Endpunkt, der vom USB-Gerät bereitgestellt wird. Ein Endpunkt repräsentiert einen unidirektionalen Datenstrom in ein Gerät hinein oder aus einem Gerät heraus.

## Konstruktor

- [`USBEndpoint()`](/de/docs/Web/API/USBEndpoint/USBEndpoint) {{Experimental_Inline}}
  - : Erstellt ein neues `USBEndpoint`-Objekt, das mit Informationen über den Endpunkt auf der bereitgestellten [`USBAlternateInterface`](/de/docs/Web/API/USBAlternateInterface) mit der gegebenen Endpunktnummer und Übertragungsrichtung gefüllt wird.

## Instanz-Eigenschaften

- [`USBEndpoint.endpointNumber`](/de/docs/Web/API/USBEndpoint/endpointNumber) {{Experimental_Inline}}
  - : Gibt die "Endpunktnummer" dieses Endpunkts zurück, die ein Wert von 1 bis 15 ist, extrahiert aus dem `bEndpointAddress`-Feld des Endpunktdeskriptors, der diesen Endpunkt definiert. Dieser Wert wird verwendet, um den Endpunkt zu identifizieren, wenn Methoden auf `USBDevice` aufgerufen werden.
- [`USBEndpoint.direction`](/de/docs/Web/API/USBEndpoint/direction) {{Experimental_Inline}}

  - : Gibt die Richtung zurück, in die dieser Endpunkt Daten überträgt, eine der folgenden:
    - `"in"` - Daten werden vom Gerät zum Host übertragen.
    - `"out"` - Daten werden vom Host zum Gerät übertragen.

- [`USBEndpoint.type`](/de/docs/Web/API/USBEndpoint/type) {{Experimental_Inline}}

  - : Gibt den Typ dieses Endpunkts zurück, einer von:
    - `"bulk"` - Bietet zuverlässige Datenübertragung für große Nutzdaten. Daten, die über einen Bulk-Endpunkt gesendet werden, sind garantiert geliefert oder erzeugen einen Fehler, können jedoch von anderem Datenverkehr unterbrochen werden.
    - `"interrupt"` - Bietet zuverlässige Datenübertragung für kleine Nutzdaten. Daten, die über einen Interrupt-Endpunkt gesendet werden, sind garantiert geliefert oder erzeugen einen Fehler und erhalten auch dedizierte Buszeit für die Übertragung.
    - `"isochronous"` - Bietet unzuverlässige Datenübertragung für Nutzdaten, die periodisch geliefert werden müssen. Sie erhalten dedizierte Buszeit, aber wenn eine Frist versäumt wird, werden die Daten verworfen.

- [`USBEndpoint.packetSize`](/de/docs/Web/API/USBEndpoint/packetSize) {{Experimental_Inline}}
  - : Gibt die Größe der Pakete zurück, in die Daten durch diesen Endpunkt aufgeteilt werden.

## Beispiele

Während manchmal der Entwickler im Voraus das genaue Layout der Endpunkte eines Geräts kennt, gibt es Fälle, in denen dies zur Laufzeit entdeckt werden muss. Zum Beispiel muss ein USB-Seriellgerät Bulk-Ein- und Ausgabepunkte bereitstellen, aber ihre Endpunktnummern hängen davon ab, welche anderen Schnittstellen das Gerät bietet.

Dieser Code identifiziert die korrekten Endpunkte, indem er nach der Schnittstelle sucht, die die USB-CDC-Schnittstellenklasse implementiert, und dann die Endpunktkandidaten basierend auf ihrem Typ und ihrer Richtung identifiziert.

```js
let inEndpoint = undefined;
let outEndpoint = undefined;

for (const { alternates } of device.configuration.interfaces) {
  // Only support devices with out multiple alternate interfaces.
  const alternate = alternates[0];

  // Identify the interface implementing the USB CDC class.
  const USB_CDC_CLASS = 10;
  if (alternate.interfaceClass !== USB_CDC_CLASS) {
    continue;
  }

  for (const endpoint of alternate.endpoints) {
    // Identify the bulk transfer endpoints.
    if (endpoint.type !== "bulk") {
      continue;
    }

    if (endpoint.direction === "in") {
      inEndpoint = endpoint.endpointNumber;
    } else if (endpoint.direction === "out") {
      outEndpoint = endpoint.endpointNumber;
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
