---
title: USBEndpoint
slug: Web/API/USBEndpoint
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{APIRef("WebUSB API")}}{{securecontext_header}}{{SeeCompatTable}}

Das `USBEndpoint`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) liefert Informationen über einen Endpunkt, der vom USB-Gerät bereitgestellt wird. Ein Endpunkt stellt einen unidirektionalen Datenstrom in oder aus einem Gerät dar.

## Konstruktor

- [`USBEndpoint()`](/de/docs/Web/API/USBEndpoint/USBEndpoint) {{Experimental_Inline}}
  - : Erstellt ein neues `USBEndpoint`-Objekt, das mit Informationen über den Endpunkt auf dem bereitgestellten [`USBAlternateInterface`](/de/docs/Web/API/USBAlternateInterface) mit der angegebenen Endpunktnummer und Übertragungsrichtung gefüllt wird.

## Instanzeigenschaften

- [`USBEndpoint.endpointNumber`](/de/docs/Web/API/USBEndpoint/endpointNumber) {{Experimental_Inline}}
  - : Gibt die "Endpunktnummer" dieses Endpunkts zurück, ein Wert von 1 bis 15, der aus dem `bEndpointAddress`-Feld des Endpunktdeskriptors extrahiert wird, der diesen Endpunkt definiert. Dieser Wert wird verwendet, um den Endpunkt beim Aufrufen von Methoden auf `USBDevice` zu identifizieren.
- [`USBEndpoint.direction`](/de/docs/Web/API/USBEndpoint/direction) {{Experimental_Inline}}

  - : Gibt die Richtung zurück, in der dieser Endpunkt Daten überträgt, einer von:

    - `"in"` - Daten werden vom Gerät zum Host übertragen.
    - `"out"` - Daten werden vom Host zum Gerät übertragen.

- [`USBEndpoint.type`](/de/docs/Web/API/USBEndpoint/type) {{Experimental_Inline}}

  - : Gibt den Typ dieses Endpunkts zurück, einer von:

    - `"bulk"` - Bietet zuverlässige Datenübertragung für große Nutzlasten. Daten, die über einen Bulk-Endpunkt gesendet werden, sind entweder garantiert lieferbar oder erzeugen einen Fehler, können aber von anderem Datenverkehr unterbrochen werden.
    - `"interrupt"` - Bietet zuverlässige Datenübertragung für kleine Nutzlasten. Daten, die über einen Interrupt-Endpunkt gesendet werden, sind entweder garantiert lieferbar oder erzeugen einen Fehler und erhalten außerdem dedizierte Buszeit für die Übertragung.
    - `"isochronous"` - Bietet unzuverlässige Datenübertragung für Nutzlasten, die periodisch geliefert werden müssen. Sie erhalten dedizierte Buszeit, aber wenn eine Frist verpasst wird, werden die Daten verworfen.

- [`USBEndpoint.packetSize`](/de/docs/Web/API/USBEndpoint/packetSize) {{Experimental_Inline}}
  - : Gibt die Größe der Pakete zurück, in die die über diesen Endpunkt gesendeten Daten unterteilt werden.

## Beispiele

Während der Entwickler manchmal im Voraus das genaue Layout der Endpunkte eines Geräts kennt, gibt es Fälle, in denen dies zur Laufzeit ermittelt werden muss. Beispielsweise muss ein USB-Seriengerät Bulk-Ein- und Ausgabepunkte bereitstellen, aber deren Endpunktnummern hängen davon ab, welche anderen Schnittstellen das Gerät bietet.

Dieser Code identifiziert die richtigen Endpunkte, indem er nach der Schnittstelle sucht, die die USB-CDC-Schnittstellenklasse implementiert, und dann die Kandidatenendpunkte basierend auf ihrem Typ und ihrer Richtung identifiziert.

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
