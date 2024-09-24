---
title: USBEndpoint
slug: Web/API/USBEndpoint
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{APIRef("WebUSB API")}}{{securecontext_header}}{{SeeCompatTable}}

Das `USBEndpoint`-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) bietet Informationen über einen Endpunkt, der vom USB-Gerät bereitgestellt wird. Ein Endpunkt repräsentiert einen unidirektionalen Datenstrom in oder aus einem Gerät.

## Konstruktor

- {{domxref("USBEndpoint.USBEndpoint", "USBEndpoint()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `USBEndpoint`-Objekt, das mit Informationen über den Endpunkt auf der bereitgestellten {{domxref('USBAlternateInterface')}} mit der angegebenen Endpunktnummer und Übertragungsrichtung gefüllt wird.

## Instanzeigenschaften

- {{domxref("USBEndpoint.endpointNumber")}} {{Experimental_Inline}}
  - : Gibt die "Endpunktnummer" dieses Endpunkts zurück, die ein Wert von 1 bis 15 ist und aus dem `bEndpointAddress`-Feld des den Endpunkt definierenden Endpunktsdeskriptors extrahiert wird. Dieser Wert wird verwendet, um den Endpunkt beim Aufrufen von Methoden auf `USBDevice` zu identifizieren.

- {{domxref("USBEndpoint.direction")}} {{Experimental_Inline}}

  - : Gibt die Richtung zurück, in der dieser Endpunkt Daten überträgt, eine der folgenden:

    - `"in"` - Daten werden vom Gerät zum Host übertragen.
    - `"out"` - Daten werden vom Host zum Gerät übertragen.

- {{domxref("USBEndpoint.type")}} {{Experimental_Inline}}

  - : Gibt den Typ dieses Endpunkts zurück, einer der folgenden:

    - `"bulk"` - Bietet zuverlässige Datenübertragung für große Nutzlasten. Durch einen Bulk-Endpunkt gesendete Daten werden garantiert geliefert oder erzeugen einen Fehler, können jedoch durch anderen Datenverkehr unterbrochen werden.
    - `"interrupt"` - Bietet zuverlässige Datenübertragung für kleine Nutzlasten. Durch einen Interrupt-Endpunkt gesendete Daten werden garantiert geliefert oder erzeugen einen Fehler und erhalten zudem speziell zugeordnete Buszeit für die Übertragung.
    - `"isochronous"` - Bietet unzuverlässige Datenübertragung für Nutzlasten, die periodisch geliefert werden müssen. Diese erhalten speziell zugeordnete Buszeit, aber wenn eine Frist verpasst wird, werden die Daten verworfen.

- {{domxref("USBEndpoint.packetSize")}} {{Experimental_Inline}}
  - : Gibt die Größe der Pakete zurück, in die Daten, die durch diesen Endpunkt gesendet werden, aufgeteilt werden.

## Beispiele

Während Entwickler manchmal im Voraus das genaue Layout der Endpunkte eines Geräts kennen, gibt es Fälle, in denen dies zur Laufzeit ermittelt werden muss. Ein USB-Seriellgerät muss beispielsweise Bulk-Input- und Output-Endpunkte bereitstellen, aber deren Endpunktnummern hängen davon ab, welche anderen Schnittstellen das Gerät bereitstellt.

Dieser Code identifiziert die korrekten Endpunkte, indem er nach der Schnittstelle sucht, die die USB CDC-Schnittstellenklasse implementiert, und dann die möglichen Endpunkte basierend auf ihrem Typ und ihrer Richtung identifiziert.

```js
let inEndpoint = undefined;
let outEndpoint = undefined;

for (const { alternates } of device.configuration.interfaces) {
  // Unterstützt nur Geräte mit mehreren alternativen Schnittstellen.
  const alternate = alternates[0];

  // Identifiziert die Schnittstelle, die die USB CDC-Klasse implementiert.
  const USB_CDC_CLASS = 10;
  if (alternate.interfaceClass !== USB_CDC_CLASS) {
    continue;
  }

  for (const endpoint of alternate.endpoints) {
    // Identifiziert die Bulk-Transfer-Endpunkte.
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
