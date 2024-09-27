---
title: Sensor APIs
slug: Web/API/Sensor_APIs
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{securecontext_header}}{{DefaultAPISidebar("Sensor API")}}

Die **Sensor APIs** sind eine Reihe von Schnittstellen, die nach einem gemeinsamen Design erstellt wurden, um Gerätesensoren auf konsistente Weise für die Webplattform bereitzustellen.

## Konzepte und Nutzung

Obwohl die Spezifikation der generischen Sensor-API eine [`Sensor`](/de/docs/Web/API/Sensor)-Schnittstelle definiert, werden Sie als Webentwickler diese nie direkt verwenden. Stattdessen verwenden Sie eine ihrer Unterklassen, um spezifische Arten von Sensordaten abzurufen. Beispielsweise gibt die [`Accelerometer`](/de/docs/Web/API/Accelerometer)-Schnittstelle die Beschleunigung des Geräts entlang aller drei Achsen zum Zeitpunkt der Abfrage zurück.

Sensoren können den physischen Gerätesensoren genau entsprechen oder auch nicht. Die [`Gyroscope`](/de/docs/Web/API/Gyroscope)-Schnittstelle entspricht genau einem physischen Gerätesensor. Alternativ bietet die [`AbsoluteOrientationSensor`](/de/docs/Web/API/AbsoluteOrientationSensor)-Schnittstelle Informationen, die algorithmisch aus zwei oder mehr Gerätesensoren aggregiert werden. Diese Sensortypen werden als _Low-Level_ und _High-Level_ bezeichnet. Letztere Art von Sensor wird auch als Fusionssensor (alternativ virtuelle oder synthetische Sensoren) bezeichnet.

### Funktionserkennung

Sensor-Schnittstellen sind nur Stellvertreter für die zugrundeliegenden Gerätesensoren. Folglich ist die Funktionserkennung für Sensoren komplizierter als für andere APIs. Die Anwesenheit einer Sensor-API sagt Ihnen nicht, ob diese API mit einem realen Hardwaresensor verbunden ist, ob dieser Sensor funktioniert, ob er noch verbunden ist, oder ob der Benutzer Zugriff darauf gewährt hat. Die konsistente Bereitstellung all dieser Informationen ist sowohl kostenintensiv in Bezug auf Leistung als auch auf die Akkulaufzeit.

Daher muss die Funktionserkennung für Sensor-APIs sowohl die Erkennung der APIs selbst als auch [defensive Programmierstrategien (siehe unten)](#defensive_programmierung) umfassen.

Die nachstehenden Beispiele zeigen drei Methoden zur Erkennung von Sensor-APIs. Zusätzlich können Sie die Objekterzeugung in einen {{jsxref('statements/try...catch', 'try...catch')}}-Block setzen. Beachten Sie, dass die Erkennung über die [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle nicht zu den verfügbaren Optionen gehört.

```js
if (typeof Gyroscope === "function") {
  // run in circles…
}

if ("ProximitySensor" in window) {
  // watch out!
}

if (window.AmbientLightSensor) {
  // go dark…
}
```

### Defensive Programmierung

Wie in der Funktionserkennung erwähnt, ist das Überprüfen einer bestimmten Sensor-API allein nicht ausreichend für die Funktionserkennung. Es muss auch bestätigt werden, dass ein tatsächlicher Sensor vorhanden ist. Hier ist defensive Programmierung erforderlich. Defensive Programmierung erfordert drei Strategien:

- Überprüfen auf ausgelöste Fehler beim Erstellen eines Sensorobjekts.
- Lauschen auf Fehler, die während der Nutzung ausgelöst werden.
- Fehler so abfangen, dass die Benutzererfahrung verbessert und nicht verschlechtert wird.

Das folgende Codebeispiel veranschaulicht diese Prinzipien. Der {{jsxref('statements/try...catch', 'try...catch')}}-Block fängt Fehler ab, die bei der Sensorerstellung auftreten. Er lauscht auf [`error`](/de/docs/Web/API/Sensor/error_event)-Ereignisse, um Fehler abzufangen, die während der Nutzung ausgelöst werden. Nur wenn [Berechtigungen](/de/docs/Web/API/Permissions_API) angefordert werden müssen oder der Sensortyp vom Gerät nicht unterstützt wird, wird etwas dem Benutzer angezeigt.

Zusätzlich kann diese Funktion durch eine auf Ihrem Server gesetzte [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden.

```js
let accelerometer = null;
try {
  accelerometer = new Accelerometer({ referenceFrame: "device" });
  accelerometer.addEventListener("error", (event) => {
    // Handle runtime errors.
    if (event.error.name === "NotAllowedError") {
      // Branch to code for requesting permission.
    } else if (event.error.name === "NotReadableError") {
      console.log("Cannot connect to the sensor.");
    }
  });
  accelerometer.addEventListener("reading", () => reloadOnShake(accelerometer));
  accelerometer.start();
} catch (error) {
  // Handle construction errors.
  if (error.name === "SecurityError") {
    // See the note above about permissions policy.
    console.log("Sensor construction was blocked by a permissions policy.");
  } else if (error.name === "ReferenceError") {
    console.log("Sensor is not supported by the User Agent.");
  } else {
    throw error;
  }
}
```

### Berechtigungen und Berechtigungspolicy

Sensorablesungen dürfen nur erfolgen, wenn der Benutzer einer bestimmten Art von Sensor mithilfe der [Permissions API](/de/docs/Web/API/Permissions_API) zustimmt und/oder wenn der Zugriff nicht durch den Server durch die {{httpheader('Permissions-Policy')}} blockiert wird.

Das folgende Beispiel zeigt, wie Sie die Benutzerberechtigung anfordern, bevor Sie versuchen, den Sensor zu verwenden.

```js
navigator.permissions.query({ name: "accelerometer" }).then((result) => {
  if (result.state === "denied") {
    console.log("Permission to use accelerometer sensor is denied.");
    return;
  }
  // Use the sensor.
});
```

Ein alternativer Ansatz ist der Versuch, den Sensor zu verwenden und auf `SecurityError` zu hören.

```js
const sensor = new AbsoluteOrientationSensor();
sensor.start();
sensor.addEventListener("error", (error) => {
  if (event.error.name === "SecurityError")
    console.log("No permissions to use AbsoluteOrientationSensor.");
});
```

Die folgende Tabelle beschreibt für jeden Sensortyp den erforderlichen Namen für die Permissions API, das `allow`-Attribut des {{HTMLElement('iframe')}}-Elements und die {{httpheader('Permissions-Policy')}}-Direktive.

| Sensor                      | Name der Berechtigungspolicy                           |
| --------------------------- | ------------------------------------------------------ |
| `AbsoluteOrientationSensor` | `'accelerometer'`, `'gyroscope'`, und `'magnetometer'` |
| `Accelerometer`             | `'accelerometer'`                                      |
| `AmbientLightSensor`        | `'ambient-light-sensor'`                               |
| `GravitySensor`             | `'accelerometer'`                                      |
| `Gyroscope`                 | `'gyroscope'`                                          |
| `LinearAccelerationSensor`  | `'accelerometer'`                                      |
| `Magnetometer`              | `'magnetometer'`                                       |
| `RelativeOrientationSensor` | `'accelerometer'`, und `'gyroscope'`                   |

### Messwerte

Sensormesswerte werden über den [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignisrückruf empfangen, der von allen Sensortypen geerbt wird. Sie entscheiden über die Messfrequenz, indem Sie sie mit einer Option an den Konstruktor eines Sensors übergeben. Die Option ist eine Zahl, die die Anzahl der Messungen pro Sekunde angibt. Es kann eine ganze Zahl oder eine Dezimalzahl für Frequenzen unter einer Sekunde verwendet werden. Die tatsächliche Messfrequenz hängt von der Gerätehardware ab und kann somit geringer sein als angefordert.

Das folgende Beispiel zeigt dies anhand des [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Sensors.

```js
let magSensor = new Magnetometer({ frequency: 60 });

magSensor.addEventListener("reading", (e) => {
  console.log(`Magnetic field along the X-axis ${magSensor.x}`);
  console.log(`Magnetic field along the Y-axis ${magSensor.y}`);
  console.log(`Magnetic field along the Z-axis ${magSensor.z}`);
});
magSensor.addEventListener("error", (event) => {
  console.log(event.error.name, event.error.message);
});
magSensor.start();
```

## Schnittstellen

- [`AbsoluteOrientationSensor`](/de/docs/Web/API/AbsoluteOrientationSensor)
  - : Beschreibt die physische Ausrichtung des Geräts im Verhältnis zum Koordinatensystem der Erde.
- [`Accelerometer`](/de/docs/Web/API/Accelerometer)
  - : Liefert die auf das Gerät wirkende Beschleunigung entlang aller drei Achsen.
- [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)
  - : Gibt den aktuellen Lichtpegel oder die Beleuchtungsstärke des Umgebungslichts um das hostende Gerät zurück.
- [`GravitySensor`](/de/docs/Web/API/GravitySensor)
  - : Liefert die auf das Gerät wirkende Schwerkraft entlang aller drei Achsen.
- [`Gyroscope`](/de/docs/Web/API/Gyroscope)
  - : Liefert die Winkelgeschwindigkeit des Geräts entlang aller drei Achsen.
- [`LinearAccelerationSensor`](/de/docs/Web/API/LinearAccelerationSensor)
  - : Gibt die auf das Gerät wirkende Beschleunigung entlang aller drei Achsen an, jedoch ohne den Beitrag der Schwerkraft.
- [`Magnetometer`](/de/docs/Web/API/Magnetometer)
  - : Liefert Informationen über das Magnetfeld, wie es vom primären Magnetometersensor des Geräts erkannt wird.
- [`OrientationSensor`](/de/docs/Web/API/OrientationSensor)
  - : Die Basisklasse für den [`AbsoluteOrientationSensor`](/de/docs/Web/API/AbsoluteOrientationSensor). Diese Schnittstelle kann nicht direkt verwendet werden; sie stellt stattdessen Eigenschaften und Methoden bereit, die von Schnittstellen abgerufen werden, die von ihr erben.
- [`RelativeOrientationSensor`](/de/docs/Web/API/RelativeOrientationSensor)
  - : Beschreibt die physische Ausrichtung des Geräts ohne Bezug auf das Koordinatensystem der Erde.
- [`Sensor`](/de/docs/Web/API/Sensor)
  - : Die Basisklasse für alle anderen Sensorschnittstellen. Diese Schnittstelle kann nicht direkt verwendet werden. Stattdessen bietet sie Eigenschaften, Ereignishandler und Methoden, die von Schnittstellen abgerufen werden, die von ihr erben.
- [`SensorErrorEvent`](/de/docs/Web/API/SensorErrorEvent)
  - : Bietet Informationen über Fehler, die von einer [`Sensor`](/de/docs/Web/API/Sensor) oder einer verwandten Schnittstelle ausgelöst werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
