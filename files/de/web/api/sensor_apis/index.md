---
title: Sensor APIs
slug: Web/API/Sensor_APIs
l10n:
  sourceCommit: 690498c3dbaebcf8b9a21220fbb23d192a30a225
---

{{securecontext_header}}{{DefaultAPISidebar("Sensor API")}}

Die **Sensor-APIs** sind eine Sammlung von Schnittstellen, die nach einem einheitlichen Design erstellt wurden, um Gerätesensoren in einer konsistenten Weise auf der Web-Plattform verfügbar zu machen.

## Konzepte und Verwendung

Obwohl die Generic Sensor API-Spezifikation eine [`Sensor`](/de/docs/Web/API/Sensor) Schnittstelle definiert, werden Sie als Webentwickler diese niemals direkt verwenden. Stattdessen verwenden Sie eine ihrer Unterklassen, um spezifische Sensordaten abzurufen. Zum Beispiel liefert die [`Accelerometer`](/de/docs/Web/API/Accelerometer) Schnittstelle die Beschleunigung des Geräts entlang aller drei Achsen zur Zeit des Abrufs.

Sensoren können mit einem physischen Gerätesensor übereinstimmen oder nicht. Beispielsweise entspricht die [`Gyroscope`](/de/docs/Web/API/Gyroscope) Schnittstelle genau einer physischen Geräteschnittstelle. Alternativ dazu stellt die [`AbsoluteOrientationSensor`](/de/docs/Web/API/AbsoluteOrientationSensor) Schnittstelle Informationen zur Verfügung, die algorithmisch aus zwei oder mehr Gerätesensoren zusammengefasst werden. Diese Sensortypen werden als _Low-Level_ bzw. _High-Level_ bezeichnet. Letzterer Sensortyp wird auch Fusion Sensor (alternativ virtuelle oder synthetische Sensoren) genannt.

### Feature-Erkennung

Sensor-Schnittstellen sind nur Stellvertreter für die zugrunde liegenden Gerätesensoren. Folglich ist die Feature-Erkennung für Sensoren komplizierter als für andere APIs. Das Vorhandensein einer Sensor-API sagt nichts darüber aus, ob diese API mit einem echten Hardware-Sensor verbunden ist, ob dieser Sensor funktioniert, ob er noch angeschlossen ist oder ob der Nutzer den Zugriff darauf gewährt hat. Alle diese Informationen durchgängig bereitzustellen, ist kostspielig für die Leistung und die Batterielebensdauer.

Daher muss die Feature-Erkennung für Sensor-APIs sowohl die Erkennung der APIs selbst als auch [Strategien zur defensiven Programmierung (siehe unten)](#defensive_programmierung) beinhalten.

Die folgenden Beispiele zeigen drei Methoden zur Erkennung von Sensor-APIs. Zusätzlich können Sie das Erzeugen von Objekten innerhalb eines {{jsxref('Statements/try...catch', 'try...catch')}}-Blocks vornehmen. Beachten Sie, dass die Erkennung über die [`Navigator`](/de/docs/Web/API/Navigator) Schnittstelle keine der verfügbaren Optionen ist.

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

Wie im Abschnitt Feature-Erkennung angegeben, reicht das Überprüfen einer bestimmten Sensor-API nicht aus, um ein Feature zu erkennen. Das Vorhandensein eines tatsächlichen Sensors muss ebenfalls bestätigt werden. Hierbei kommt die defensive Programmierung ins Spiel. Die defensive Programmierung erfordert drei Strategien.

- Überprüfen auf ausgelöste Fehler beim Erstellen eines Sensorobjekts.
- Überwachen auf Fehler, die während der Nutzung ausgelöst werden.
- Fehler so abfangen, dass das Benutzererlebnis verbessert und nicht verschlechtert wird.

Das folgende Codebeispiel veranschaulicht diese Prinzipien. Der {{jsxref('Statements/try...catch', 'try...catch')}}-Block fängt Fehler ab, die während der Sensor-Erstellung ausgelöst werden. Es überwacht [`error`](/de/docs/Web/API/Sensor/error_event) Ereignisse, um Fehler abzufangen, die während der Nutzung auftreten. Der Nutzer wird nur dann informiert, wenn [Berechtigungen](/de/docs/Web/API/Permissions_API) beantragt werden müssen und wenn der Sensortyp auf dem Gerät nicht unterstützt wird.

Darüber hinaus kann dieses Feature durch eine auf Ihrem Server festgelegte [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert sein.

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

Sensorablesungen dürfen erst erfolgen, wenn der Nutzer für einen bestimmten Sensortyp die Berechtigung mithilfe der [Permissions API](/de/docs/Web/API/Permissions_API) erteilt hat und/oder wenn der Zugriff nicht durch die serverseitige {{httpheader('Permissions-Policy')}} blockiert wurde.

Das folgende Beispiel zeigt, wie die Nutzerberechtigung angefragt wird, bevor versucht wird, den Sensor zu verwenden.

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

Die folgende Tabelle beschreibt für jeden Sensortyp den erforderlichen Namen für die Permissions API, das `allow`-Attribut des {{HTMLElement('iframe')}}-Elements und die {{httpheader('Permissions-Policy')}} Richtlinie.

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

### Messwerte

Sensormesswerte werden über den [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignis-Callback empfangen, der von allen Sensortypen geerbt wird. Die Abtastrate wird von Ihnen entschieden, wofür eine Option beim Konstruktor eines Sensors übergeben wird. Die Option ist eine Zahl, die die Anzahl der Messungen pro Sekunde angibt. Es kann eine ganze Zahl oder ein Dezimalwert verwendet werden, letzterer für Frequenzen unter einer Sekunde. Die tatsächliche Abtastrate hängt von der Gerätehardware ab und kann daher geringer sein als angefordert.

Das folgende Beispiel veranschaulicht dies mit dem [`Magnetometer`](/de/docs/Web/API/Magnetometer) Sensor.

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
  - : Beschreibt die physische Orientierung des Geräts in Bezug auf das Referenzkoordinatensystem der Erde.
- [`Accelerometer`](/de/docs/Web/API/Accelerometer)
  - : Liefert die auf das Gerät angewandte Beschleunigung entlang aller drei Achsen.
- [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)
  - : Gibt das aktuelle Lichtniveau oder die Beleuchtungsstärke des Umgebungslichts um das Host-Gerät zurück.
- [`GravitySensor`](/de/docs/Web/API/GravitySensor)
  - : Liefert die auf das Gerät ausgeübte Schwerkraft entlang aller drei Achsen.
- [`Gyroscope`](/de/docs/Web/API/Gyroscope)
  - : Liefert die Winkelgeschwindigkeit des Geräts entlang aller drei Achsen.
- [`LinearAccelerationSensor`](/de/docs/Web/API/LinearAccelerationSensor)
  - : Liefert die auf das Gerät angewandte Beschleunigung entlang aller drei Achsen, jedoch ohne den Beitrag der Schwerkraft.
- [`Magnetometer`](/de/docs/Web/API/Magnetometer)
  - : Stellt Informationen über das Magnetfeld bereit, wie sie vom primären Magnetometersensor des Geräts erfasst werden.
- [`OrientationSensor`](/de/docs/Web/API/OrientationSensor)
  - : Die Basisklasse für den [`AbsoluteOrientationSensor`](/de/docs/Web/API/AbsoluteOrientationSensor). Diese Schnittstelle kann nicht direkt verwendet werden, sondern stellt Eigenschaften und Methoden bereit, die von ihr ererbte Schnittstellen nutzen.
- [`RelativeOrientationSensor`](/de/docs/Web/API/RelativeOrientationSensor)
  - : Beschreibt die physische Orientierung des Geräts ohne Bezug zum Referenzkoordinatensystem der Erde.
- [`Sensor`](/de/docs/Web/API/Sensor)
  - : Die Basisklasse für alle anderen Sensor-Schnittstellen. Diese Schnittstelle kann nicht direkt verwendet werden. Stattdessen stellt sie Eigenschaften, Ereignisbehandler und Methoden bereit, die von ihr ererbte Schnittstellen nutzen.
- [`SensorErrorEvent`](/de/docs/Web/API/SensorErrorEvent)
  - : Stellt Informationen über Fehler bereit, die von einem [`Sensor`](/de/docs/Web/API/Sensor) oder einer verwandten Schnittstelle ausgelöst wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
