---
title: USBEndpoint
slug: Web/API/USBEndpoint
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `USBEndpoint`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) liefert Informationen über einen vom USB-Gerät bereitgestellten Endpunkt. Ein Endpunkt stellt einen unidirektionalen Datenstrom in oder aus einem Gerät dar.

## Konstruktor

- [`USBEndpoint()`](/de/docs/Web/API/USBEndpoint/USBEndpoint) {{Experimental_Inline}}
  - : Erstellt ein neues `USBEndpoint`-Objekt, das mit Informationen über den Endpunkt auf dem bereitgestellten [`USBAlternateInterface`](/de/docs/Web/API/USBAlternateInterface) mit der gegebenen Endpunktnummer und Übertragungsrichtung gefüllt wird.

## Instanzeigenschaften

- [`USBEndpoint.endpointNumber`](/de/docs/Web/API/USBEndpoint/endpointNumber) {{Experimental_Inline}}
  - : Gibt die "Endpunktnummer" dieses Endpunkts zurück, die ein Wert von 1 bis 15 ist, der aus dem `bEndpointAddress`-Feld des Endpunktdeskriptors, der diesen Endpunkt definiert, extrahiert wurde. Dieser Wert wird verwendet, um den Endpunkt zu identifizieren, wenn Methoden auf `USBDevice` aufgerufen werden.
- [`USBEndpoint.direction`](/de/docs/Web/API/USBEndpoint/direction) {{Experimental_Inline}}

  - : Gibt die Richtung zurück, in der dieser Endpunkt Daten überträgt, eine der folgenden:

    - `"in"` - Daten werden vom Gerät zum Host übertragen.
    - `"out"` - Daten werden vom Host zum Gerät übertragen.

- [`USBEndpoint.type`](/de/docs/Web/API/USBEndpoint/type) {{Experimental_Inline}}

  - : Gibt den Typ dieses Endpunkts zurück, einer der folgenden:

    - `"bulk"` - Bietet zuverlässige Datenübertragung für große Nutzlasten. Daten, die über einen Massen-Endpunkt gesendet werden, sind garantiert zugestellt oder führen zu einem Fehler, können jedoch durch anderen Datenverkehr unterbrochen werden.
    - `"interrupt"` - Bietet zuverlässige Datenübertragung für kleine Nutzlasten. Daten, die über einen Interrupt-Endpunkt gesendet werden, sind garantiert zugestellt oder führen zu einem Fehler und erhalten außerdem dedizierte Buszeit für die Übertragung.
    - `"isochronous"` - Bietet unzuverlässige Datenübertragung für Nutzlasten, die periodisch geliefert werden müssen. Sie erhalten dedizierte Buszeit, aber wenn eine Frist versäumt wird, werden die Daten verworfen.

- [`USBEndpoint.packetSize`](/de/docs/Web/API/USBEndpoint/packetSize) {{Experimental_Inline}}
  - : Gibt die Größe der Pakete zurück, in die die durch diesen Endpunkt gesendeten Daten unterteilt werden.

## Beispiele

Während der Entwickler manchmal im Voraus die genaue Anordnung der Endpunkte eines Geräts kennt, gibt es Fälle, in denen dies zur Laufzeit entdeckt werden muss. Beispielsweise muss ein USB-Seriellgerät Massen-Ein- und Ausgabepunkte bereitstellen, aber ihre Endpunktnummern hängen davon ab, welche anderen Schnittstellen das Gerät bereitstellt.

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
