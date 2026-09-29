---
title: USBEndpoint
slug: Web/API/USBEndpoint
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die `USBEndpoint`-Schnittstelle der [WebUSB API](/de/docs/Web/API/WebUSB_API) stellt Informationen über einen Endpunkt bereit, den das USB-Gerät zur Verfügung stellt. Ein Endpunkt repräsentiert einen unidirektionalen Datenstrom in ein Gerät hinein oder aus einem Gerät heraus.

## Konstruktor

- [`USBEndpoint()`](/de/docs/Web/API/USBEndpoint/USBEndpoint) {{Experimental_Inline}}
  - : Erstellt ein neues `USBEndpoint`-Objekt, das mit Informationen über den Endpunkt der angegebenen [`USBAlternateInterface`](/de/docs/Web/API/USBAlternateInterface) mit der angegebenen Endpunktnummer und Übertragungsrichtung befüllt wird.

## Instanzeigenschaften

- [`USBEndpoint.endpointNumber`](/de/docs/Web/API/USBEndpoint/endpointNumber) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die „Endpunktnummer“ dieses Endpunkts zurück. Dies ist ein Wert zwischen 1 und 15, der aus dem `bEndpointAddress`-Feld des Endpunktdeskriptors extrahiert wird, der diesen Endpunkt definiert. Dieser Wert wird verwendet, um den Endpunkt beim Aufrufen von Methoden auf `USBDevice` zu identifizieren.
- [`USBEndpoint.direction`](/de/docs/Web/API/USBEndpoint/direction) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Richtung zurück, in der dieser Endpunkt Daten überträgt. Der Wert ist einer der folgenden:
    - `"in"` – Daten werden vom Gerät zum Host übertragen.
    - `"out"` – Daten werden vom Host zum Gerät übertragen.

- [`USBEndpoint.type`](/de/docs/Web/API/USBEndpoint/type) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ dieses Endpunkts zurück. Der Wert ist einer der folgenden:
    - `"bulk"` – Ermöglicht eine zuverlässige Datenübertragung für große Nutzdaten. Bei Daten, die über einen Bulk-Endpunkt gesendet werden, ist gewährleistet, dass sie entweder zugestellt werden oder ein Fehler erzeugt wird. Ihre Übertragung kann jedoch durch anderen Datenverkehr verzögert werden.
    - `"interrupt"` – Ermöglicht eine zuverlässige Datenübertragung für kleine Nutzdaten. Bei Daten, die über einen Interrupt-Endpunkt gesendet werden, ist gewährleistet, dass sie entweder zugestellt werden oder ein Fehler erzeugt wird. Außerdem wird ihnen dedizierte Übertragungszeit auf dem Bus zugewiesen.
    - `"isochronous"` – Ermöglicht eine unzuverlässige Datenübertragung für Nutzdaten, die regelmäßig zugestellt werden müssen. Ihnen wird dedizierte Übertragungszeit auf dem Bus zugewiesen. Wird jedoch eine Frist nicht eingehalten, werden die Daten verworfen.

- [`USBEndpoint.packetSize`](/de/docs/Web/API/USBEndpoint/packetSize) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Größe der Pakete zurück, in die über diesen Endpunkt gesendete Daten aufgeteilt werden.

## Beispiele

Manchmal ist die genaue Anordnung der Endpunkte eines Geräts bereits im Voraus bekannt. In anderen Fällen muss sie zur Laufzeit ermittelt werden. Ein serielles USB-Gerät muss beispielsweise Bulk-Endpunkte für Ein- und Ausgabe bereitstellen. Deren Endpunktnummern hängen jedoch davon ab, welche anderen Schnittstellen das Gerät bereitstellt.

Dieser Code ermittelt die richtigen Endpunkte, indem er nach der Schnittstelle sucht, die die USB-CDC-Schnittstellenklasse implementiert, und anschließend mögliche Endpunkte anhand ihres Typs und ihrer Richtung identifiziert.

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
