---
title: Sensor APIs
slug: Web/API/Sensor_APIs
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{securecontext_header}}{{DefaultAPISidebar("Sensor API")}}

Die **Sensor APIs** sind eine Reihe von Schnittstellen, die nach einem gemeinsamen Design erstellt wurden und die Gerätesensoren auf konsistente Weise für die Webplattform zugänglich machen.

## Konzepte und Verwendung

Obwohl die Generic Sensor API-Spezifikation eine [`Sensor`](/de/docs/Web/API/Sensor)-Schnittstelle definiert, werden Sie als Webentwickler diese niemals direkt nutzen. Stattdessen verwenden Sie eine ihrer Unterklassen, um bestimmte Arten von Sensordaten abzurufen. Zum Beispiel liefert die [`Accelerometer`](/de/docs/Web/API/Accelerometer)-Schnittstelle die Beschleunigung des Geräts entlang aller drei Achsen zum Zeitpunkt des Abrufs.

Sensoren können mit einem physischen Gerätesensor übereinstimmen oder auch nicht. Beispielsweise entspricht die [`Gyroscope`](/de/docs/Web/API/Gyroscope)-Schnittstelle genau einer physikalischen Geräteschnittstelle. Alternativ bietet die [`AbsoluteOrientationSensor`](/de/docs/Web/API/AbsoluteOrientationSensor)-Schnittstelle Informationen, die algorithmisch aus zwei oder mehr Gerätesensoren aggregiert werden. Diese Sensortypen werden jeweils als _Low-Level_ und _High-Level_ bezeichnet. Der letztere Sensortyp wird auch als Fusion Sensor (alternativ virtuelle oder synthetische Sensoren) bezeichnet.

### Funktionsprüfung

Sensor-Schnittstellen sind nur Stellvertreter für die zugrunde liegenden Gerätesensoren. Folglich ist die Funktionsprüfung für Sensoren komplexer als für andere APIs. Das Vorhandensein einer Sensor-API sagt Ihnen nicht, ob diese API mit einem echten Hardwaresensor verbunden ist, ob dieser Sensor funktioniert, ob er noch verbunden ist oder ob der Benutzer Zugriff darauf gewährt hat. All diese Informationen konsistent bereitzustellen, ist leistungstechnisch und für die Batterielebensdauer kostspielig.

Daher muss die Funktionsprüfung für Sensor-APIs sowohl die Erkennung der APIs selbst als auch [defensive Programmierstrategien (siehe unten)](#defensive_programmierung) umfassen.

Die folgenden Beispiele zeigen drei Methoden zur Erkennung von Sensor-APIs. Zusätzlich können Sie die Objekterstellung in einen {{jsxref('statements/try...catch', 'try...catch')}}-Block einfügen. Beachten Sie, dass die Erkennung über die [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle nicht zu den verfügbaren Optionen gehört.

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

Wie in der Funktionsprüfung angegeben, reicht die Prüfung auf eine bestimmte Sensor-API nicht aus. Das Vorhandensein eines tatsächlichen Sensors muss ebenfalls bestätigt werden. Hier ist defensive Programmierung erforderlich. Defensive Programmierung erfordert drei Strategien.

- Überprüfung auf ausgelöste Fehler beim Instanziieren eines Sensorobjekts.
- Lauschen auf Fehler, die während der Nutzung ausgelöst werden.
- Fehler so handhaben, dass das Benutzererlebnis verbessert wird, anstatt es zu verschlechtern.

Das folgende Codebeispiel veranschaulicht diese Prinzipien. Der {{jsxref('statements/try...catch', 'try...catch')}}-Block fängt Fehler auf, die während der Sensorinstanziierung auftreten. Es hört auf [`error`](/de/docs/Web/API/Sensor/error_event)-Ereignisse, um Fehler abzufangen, die während der Nutzung auftreten. Die einzige Zeit, in der dem Benutzer etwas angezeigt wird, ist, wenn [Berechtigungen](/de/docs/Web/API/Permissions_API) angefordert werden müssen und wenn der Sensortyp vom Gerät nicht unterstützt wird.

Zusätzlich kann dieses Feature durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden, die auf Ihrem Server eingestellt ist.

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

Sensorablesungen dürfen nur durchgeführt werden, wenn der Benutzer die Berechtigung für einen bestimmten Sensortyp über die [Permissions API](/de/docs/Web/API/Permissions_API) erteilt hat und/oder der Zugriff nicht durch den Server {{httpheader('Permissions-Policy')}} blockiert ist.

Das folgende Beispiel zeigt, wie Sie die Erlaubnis des Benutzers anfordern, bevor Sie versuchen, den Sensor zu verwenden.

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

Die folgende Tabelle beschreibt für jeden Sensortyp den in der Permissions API erforderlichen Namen, das `allow`-Attribut des {{HTMLElement('iframe')}}-Elements und die {{httpheader('Permissions-Policy')}}-Direktive.

| Sensor                      | Berechtigungsrichtlinienname                           |
| --------------------------- | ------------------------------------------------------ |
| `AbsoluteOrientationSensor` | `'accelerometer'`, `'gyroscope'`, und `'magnetometer'` |
| `Accelerometer`             | `'accelerometer'`                                      |
| `AmbientLightSensor`        | `'ambient-light-sensor'`                               |
| `GravitySensor`             | `'accelerometer'`                                      |
| `Gyroscope`                 | `'gyroscope'`                                          |
| `LinearAccelerationSensor`  | `'accelerometer'`                                      |
| `Magnetometer`              | `'magnetometer'`                                       |
| `RelativeOrientationSensor` | `'accelerometer'`, und `'gyroscope'`                   |

### Messungen

Sensorablesungen werden über den [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis-Callback empfangen, der von allen Sensortypen geerbt wird. Die Lesefrequenz wird von Ihnen entschieden und mit einer Option festgelegt, die dem Konstruktor eines Sensors übergeben wird. Die Option ist eine Zahl, die die Anzahl der Ablesungen pro Sekunde angibt. Eine ganze Zahl oder ein Dezimalwert kann verwendet werden, letzterer für Frequenzen unter einer Sekunde. Die tatsächliche Lesefrequenz hängt von der Gerätetechnologie ab und kann daher geringer sein als angefordert.

Das folgende Beispiel verdeutlicht dies mit dem [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Sensor.

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
  - : Beschreibt die physische Orientierung des Geräts im Verhältnis zum Referenzkoordinatensystem der Erde.
- [`Accelerometer`](/de/docs/Web/API/Accelerometer)
  - : Liefert die auf das Gerät angewendete Beschleunigung entlang aller drei Achsen.
- [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)
  - : Gibt das aktuelle Lichtniveau oder die Beleuchtungsstärke des Umgebungslichts um das Hostgerät zurück.
- [`GravitySensor`](/de/docs/Web/API/GravitySensor)
  - : Liefert die auf das Gerät angewendete Gravitation entlang aller drei Achsen.
- [`Gyroscope`](/de/docs/Web/API/Gyroscope)
  - : Liefert die Winkelgeschwindigkeit des Geräts entlang aller drei Achsen.
- [`LinearAccelerationSensor`](/de/docs/Web/API/LinearAccelerationSensor)
  - : Liefert die auf das Gerät angewendete Beschleunigung entlang aller drei Achsen, jedoch ohne den Beitrag der Gravitation.
- [`Magnetometer`](/de/docs/Web/API/Magnetometer)
  - : Liefert Informationen über das Magnetfeld, wie sie vom primären Magnetometersensor des Geräts erkannt werden.
- [`OrientationSensor`](/de/docs/Web/API/OrientationSensor)
  - : Die Basisklasse für den [`AbsoluteOrientationSensor`](/de/docs/Web/API/AbsoluteOrientationSensor). Diese Schnittstelle kann nicht direkt verwendet werden, sondern stellt Eigenschaften und Methoden bereit, auf die von Schnittstellen zugegriffen wird, die von ihr erben.
- [`RelativeOrientationSensor`](/de/docs/Web/API/RelativeOrientationSensor)
  - : Beschreibt die physische Orientierung des Geräts ohne Berücksichtigung des Referenzkoordinatensystems der Erde.
- [`Sensor`](/de/docs/Web/API/Sensor)
  - : Die Basisklasse für alle anderen Sensorschnittstellen. Diese Schnittstelle kann nicht direkt verwendet werden. Stattdessen stellt sie Eigenschaften, Ereignis-Handler und Methoden bereit, auf die von Schnittstellen zugegriffen wird, die von ihr erben.
- [`SensorErrorEvent`](/de/docs/Web/API/SensorErrorEvent)
  - : Bietet Informationen über von einem [`Sensor`](/de/docs/Web/API/Sensor) oder einer verwandten Schnittstelle ausgelöste Fehler.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
