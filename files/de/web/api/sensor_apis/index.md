---
title: Sensor APIs
slug: Web/API/Sensor_APIs
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{DefaultAPISidebar("Sensor API")}}

Die **Sensor-APIs** sind eine Reihe von Schnittstellen, die auf einem gemeinsamen Design basieren und Gerätesensoren auf konsistente Weise der Webplattform zugänglich machen.

## Konzepte und Verwendung

Obwohl die Generic Sensor API-Spezifikation eine [`Sensor`](/de/docs/Web/API/Sensor)-Schnittstelle definiert, werden Sie als Webentwickler diese nie direkt verwenden. Stattdessen verwenden Sie eine ihrer Unterklassen, um bestimmte Arten von Sensordaten abzurufen. Zum Beispiel gibt die [`Accelerometer`](/de/docs/Web/API/Accelerometer)-Schnittstelle die Beschleunigung des Geräts entlang aller drei Achsen zum Zeitpunkt der Abfrage zurück.

Sensoren stimmen möglicherweise nicht genau mit einem physischen Gerätesensor überein. Zum Beispiel entspricht die [`Gyroscope`](/de/docs/Web/API/Gyroscope)-Schnittstelle genau einer physischen Geräte-Schnittstelle. Alternativ bietet die [`AbsoluteOrientationSensor`](/de/docs/Web/API/AbsoluteOrientationSensor)-Schnittstelle Informationen, die algorithmisch aus zwei oder mehr Gerätesensoren aggregiert werden. Diese Sensortypen werden jeweils als _niedrigstufig_ und _höherstufig_ bezeichnet. Der letztere Sensortyp wird auch als Fusion-Sensor (alternativ virtuelle oder synthetische Sensoren) bezeichnet.

### Funktionsüberprüfung

Sensor-Schnittstellen sind nur Stellvertreter für die zugrunde liegenden Gerätesensoren. Folglich ist die Funktionsüberprüfung bei Sensoren komplizierter als bei anderen APIs. Die Anwesenheit einer Sensor-API sagt nicht aus, ob diese API mit einem echten Hardwaresensor verbunden ist, ob dieser Sensor funktioniert, ob er immer noch verbunden ist oder ob der Benutzer Zugriff darauf gewährt hat. All diese Informationen konsistent verfügbar zu machen, ist kostenintensiv in Bezug auf Leistung und Batterielebensdauer.

Daher muss die Funktionsüberprüfung für Sensor-APIs sowohl die Erkennung der APIs selbst als auch [defensive Programmierstrategien (siehe unten)](#defensive_programmierung) beinhalten.

Die folgenden Beispiele zeigen drei Methoden zur Erkennung von Sensor-APIs. Zusätzlich können Sie die Objektinstanziierung in einen {{jsxref('statements/try...catch', 'try...catch')}}-Block einfügen. Beachten Sie, dass die Erkennung über die [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle nicht zu den verfügbaren Optionen gehört.

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

Wie in der Funktionsüberprüfung beschrieben, reicht es nicht aus, nur für eine bestimmte Sensor-API zu prüfen. Das Vorhandensein eines tatsächlichen Sensors muss ebenfalls bestätigt werden. Hier wird defensive Programmierung benötigt. Defensive Programmierung erfordert drei Strategien.

- Überprüfen auf auftretende Fehler bei der Instanziierung eines Sensorobjekts.
- Überwachen auf Fehler, die während der Nutzung auftreten.
- Fehler so behandeln, dass die Benutzererfahrung verbessert und nicht verschlechtert wird.

Das folgende Codebeispiel veranschaulicht diese Prinzipien. Der {{jsxref('statements/try...catch', 'try...catch')}}-Block fängt während der Sensor-Instanzierung auftretende Fehler ab. Er lauscht auf [`error`](/de/docs/Web/API/Sensor/error_event)-Ereignisse, um Fehler bei der Nutzung abzufangen. Der Benutzer wird nur informiert, wenn [Berechtigungen](/de/docs/Web/API/Permissions_API) angefordert werden müssen und wenn der Sensortyp vom Gerät nicht unterstützt wird.

Zusätzlich kann diese Funktion durch eine auf Ihrem Server festgelegte [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

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

### Berechtigungen und Berechtigungsrichtlinie

SensoR-abfragen dürfen erst durchgeführt werden, wenn der Benutzer einer bestimmten Art von Sensor durch die [Berechtigungs-API](/de/docs/Web/API/Permissions_API) die Genehmigung erteilt hat und/oder der Zugriff nicht durch den Server über die {{httpheader('Permissions-Policy')}}-Richtlinie blockiert wird.

Das folgende Beispiel zeigt, wie Benutzerberechtigungen angefordert werden, bevor versucht wird, den Sensor zu verwenden.

```js
navigator.permissions.query({ name: "accelerometer" }).then((result) => {
  if (result.state === "denied") {
    console.log("Permission to use accelerometer sensor is denied.");
    return;
  }
  // Use the sensor.
});
```

Ein alternativer Ansatz besteht darin, zu versuchen, den Sensor zu verwenden und auf den `SecurityError` zu lauschen.

```js
const sensor = new AbsoluteOrientationSensor();
sensor.start();
sensor.addEventListener("error", (error) => {
  if (event.error.name === "SecurityError")
    console.log("No permissions to use AbsoluteOrientationSensor.");
});
```

Die folgende Tabelle beschreibt für jeden Sensortyp, den erforderlichen Namen für die Berechtigungs-API, das `allow`-Attribut des {{HTMLElement('iframe')}}-Elements und die {{httpheader('Permissions-Policy')}}-Direktive.

| Sensor                      | Berechtigungsrichtlinien-Name                          |
| --------------------------- | ------------------------------------------------------ |
| `AbsoluteOrientationSensor` | `'accelerometer'`, `'gyroscope'`, and `'magnetometer'` |
| `Accelerometer`             | `'accelerometer'`                                      |
| `AmbientLightSensor`        | `'ambient-light-sensor'`                               |
| `GravitySensor`             | `'accelerometer'`                                      |
| `Gyroscope`                 | `'gyroscope'`                                          |
| `LinearAccelerationSensor`  | `'accelerometer'`                                      |
| `Magnetometer`              | `'magnetometer'`                                       |
| `RelativeOrientationSensor` | `'accelerometer'`, and `'gyroscope'`                   |

### Messwerte

Sensor-Messwerte werden durch den [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis-Callback empfangen, das von allen Sensortypen geerbt wird. Die Abfragerate wird von Ihnen entschieden und mit einer Option, die dem Konstruktor eines Sensors übergeben wird, erreicht. Die Option ist eine Zahl, die die Anzahl der Abfragen pro Sekunde angibt. Eine Ganz- oder Dezimalzahl kann verwendet werden, letztere für Frequenzen unter einer Sekunde. Die tatsächliche Abfragerate hängt von der Gerätehardware ab und kann daher geringer ausfallen als angefordert.

Das folgende Beispiel veranschaulicht dies anhand des [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Sensors.

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
  - : Beschreibt die physische Ausrichtung des Geräts in Relation zum geographischen Koordinatensystem der Erde.
- [`Accelerometer`](/de/docs/Web/API/Accelerometer)
  - : Stellt die auf das Gerät entlang aller drei Achsen wirkende Beschleunigung bereit.
- [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)
  - : Gibt das aktuelle Umgebungslichtniveau oder die Beleuchtungsstärke um das gastgebende Gerät herum zurück.
- [`GravitySensor`](/de/docs/Web/API/GravitySensor)
  - : Stellt die auf das Gerät entlang aller drei Achsen wirkende Gravitation bereit.
- [`Gyroscope`](/de/docs/Web/API/Gyroscope)
  - : Liefert die Winkelgeschwindigkeit des Geräts entlang aller drei Achsen.
- [`LinearAccelerationSensor`](/de/docs/Web/API/LinearAccelerationSensor)
  - : Stellt die auf das Gerät entlang aller drei Achsen wirkende Beschleunigung bereit, jedoch ohne den Einfluss der Gravitation.
- [`Magnetometer`](/de/docs/Web/API/Magnetometer)
  - : Liefert Informationen über das Magnetfeld, wie es vom primären Magnetsensor des Geräts erkannt wird.
- [`OrientationSensor`](/de/docs/Web/API/OrientationSensor)
  - : Die Basisklasse für den [`AbsoluteOrientationSensor`](/de/docs/Web/API/AbsoluteOrientationSensor). Diese Schnittstelle kann nicht direkt verwendet werden, sondern bietet Eigenschaften und Methoden, die von abgeleiteten Schnittstellen abgerufen werden.
- [`RelativeOrientationSensor`](/de/docs/Web/API/RelativeOrientationSensor)
  - : Beschreibt die physische Ausrichtung des Geräts ohne Bezug auf das geographische Koordinatensystem der Erde.
- [`Sensor`](/de/docs/Web/API/Sensor)
  - : Die Basisklasse für alle anderen Sensor-Schnittstellen. Diese Schnittstelle kann nicht direkt verwendet werden. Stattdessen bietet sie Eigenschaften, Ereignishandler und Methoden, die von abgeleiteten Schnittstellen abgerufen werden.
- [`SensorErrorEvent`](/de/docs/Web/API/SensorErrorEvent)
  - : Liefert Informationen über Fehler, die von einer [`Sensor`](/de/docs/Web/API/Sensor) oder verwandten Schnittstelle aufgetreten sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
