---
title: Sensor-APIs
slug: Web/API/Sensor_APIs
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{securecontext_header}}{{DefaultAPISidebar("Sensor API")}}

Die **Sensor-APIs** sind eine Reihe von Schnittstellen, die nach einem gemeinsamen Design erstellt wurden und Endgerätesensoren auf konsistente Weise für die Webplattform zugänglich machen.

## Konzepte und Verwendung

Obwohl die Spezifikation der Generic Sensor API eine {{domxref('Sensor')}} Schnittstelle definiert, werden Sie als Webentwickler diese nie direkt verwenden. Stattdessen nutzen Sie eine ihrer Unterklassen, um spezifische Sensordaten abzurufen. Zum Beispiel gibt die {{domxref('Accelerometer')}}-Schnittstelle die Beschleunigung des Geräts entlang aller drei Achsen zum Zeitpunkt des Auslesens zurück.

Sensoren können genau oder auch nur teilweise mit einem physischen Endgerätesensor korrespondieren. Beispielsweise entspricht die {{domxref('Gyroscope')}}-Schnittstelle genau einem physischen Gerätesensor. Alternativ liefert die {{domxref('AbsoluteOrientationSensor')}}-Schnittstelle Informationen, die algorithmisch aus zwei oder mehr Endgerätesensoren aggregiert werden. Diese Sensortypen werden als _low-level_ und _high-level_ bezeichnet. Der letztgenannte Sensortyp wird auch als Fusion-Sensor (alternativ virtuelle oder synthetische Sensoren) bezeichnet.

### Funktionsprüfung

Sensor-Schnittstellen sind nur Stellvertreter für die zugrunde liegenden Gerätesensoren. Folglich ist die Funktionsprüfung bei Sensoren komplizierter als bei anderen APIs. Das Vorhandensein einer Sensor-API zeigt Ihnen nicht, ob diese API mit einem realen Hardwaresensor verbunden ist, ob dieser Sensor funktioniert, ob er noch verbunden ist oder ob der Benutzer Zugriff darauf gewährt hat. Diese Informationen konsistent zur Verfügung zu stellen, ist kostspielig in Bezug auf Leistung und Akkulaufzeit.

Daher muss die Funktionsprüfung für Sensor-APIs sowohl die Erkennung der APIs selbst als auch [strategisch defensives Programmieren (siehe unten)](#defensives_programmieren) umfassen.

Die folgenden Beispiele zeigen drei Methoden zur Erkennung von Sensor-APIs. Außerdem können Sie die Objektinstanziierung in einen {{jsxref('statements/try...catch', 'try...catch')}}-Block einfügen. Beachten Sie, dass die Erkennung über die {{domxref('Navigator')}}-Schnittstelle nicht zu den verfügbaren Optionen gehört.

```js
if (typeof Gyroscope === "function") {
  // Kreisbewegungen ausführen…
}

if ("ProximitySensor" in window) {
  // Achtung!
}

if (window.AmbientLightSensor) {
  // in den Dunkelmodus wechseln…
}
```

### Defensives Programmieren

Wie bei der Funktionsprüfung erklärt, ist die Überprüfung einer bestimmten Sensor-API für die Funktionsprüfung nicht ausreichend. Das Vorhandensein eines tatsächlichen Sensors muss ebenfalls bestätigt werden. Hier kommt das defensive Programmieren ins Spiel. Defensives Programmieren erfordert drei Strategien:

- Überprüfen auf ausgelöste Fehler bei der Instanziierung eines Sensorobjekts.
- Abhören von Fehlern, die während der Nutzung ausgelöst werden.
- Fehler so behandeln, dass die Benutzererfahrung verbessert und nicht verschlechtert wird.

Das folgende Codebeispiel veranschaulicht diese Prinzipien. Der {{jsxref('statements/try...catch', 'try...catch')}}-Block fängt Fehler ab, die während der Sensor-Instanziierung auftreten. Er lauscht auf {{domxref('Sensor.error_event', 'error')}}-Ereignisse, um während der Nutzung auftretende Fehler abzufangen. Nur wenn [Berechtigungen](/de/docs/Web/API/Permissions_API) angefordert werden müssen oder der Sensortyp vom Gerät nicht unterstützt wird, wird dem Benutzer etwas angezeigt.

Darüber hinaus kann diese Funktion durch eine auf Ihrem Server festgelegte [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden.

```js
let accelerometer = null;
try {
  accelerometer = new Accelerometer({ referenceFrame: "device" });
  accelerometer.addEventListener("error", (event) => {
    // Laufzeitfehler behandeln.
    if (event.error.name === "NotAllowedError") {
      // Zum Codezweig wechseln, der die Berechtigung anfordert.
    } else if (event.error.name === "NotReadableError") {
      console.log("Keine Verbindung zum Sensor möglich.");
    }
  });
  accelerometer.addEventListener("reading", () => reloadOnShake(accelerometer));
  accelerometer.start();
} catch (error) {
  // Konstruktionsfehler behandeln.
  if (error.name === "SecurityError") {
    // Siehe oben die Anmerkung zur Berechtigungspolitik.
    console.log("Die Sensorkonstruktion wurde durch eine Berechtigungspolicy blockiert.");
  } else if (error.name === "ReferenceError") {
    console.log("Der Sensor wird vom User Agent nicht unterstützt.");
  } else {
    throw error;
  }
}
```

### Berechtigungen und Berechtigungspolitik

Sensorablesungen dürfen nur erfolgen, wenn der Benutzer die Erlaubnis für einen speziellen Sensortyp mithilfe der [Berechtigungs-API](/de/docs/Web/API/Permissions_API) gewährt und/oder der Zugriff nicht durch die Servereinstellung {{httpheader('Permissions-Policy')}} blockiert wird.

Das folgende Beispiel zeigt, wie Sie die Benutzererlaubnis anfordern, bevor Sie versuchen, den Sensor zu verwenden.

```js
navigator.permissions.query({ name: "accelerometer" }).then((result) => {
  if (result.state === "denied") {
    console.log("Die Erlaubnis zur Nutzung des Beschleunigungssensors wurde verweigert.");
    return;
  }
  // Sensor verwenden.
});
```

Ein alternativer Ansatz besteht darin, zu versuchen, den Sensor zu verwenden und auf den `SecurityError` zu hören.

```js
const sensor = new AbsoluteOrientationSensor();
sensor.start();
sensor.addEventListener("error", (error) => {
  if (event.error.name === "SecurityError")
    console.log("Keine Berechtigungen zur Nutzung des AbsoluteOrientationSensor.");
});
```

Die folgende Tabelle beschreibt für jeden Sensortyp den Namen, der für die Berechtigungs-API, das `allow`-Attribut des {{HTMLElement('iframe')}}-Elements und die {{httpheader('Permissions-Policy')}}-Richtlinie erforderlich ist.

| Sensor                      | Berechtigungspolitik-Name                          |
| --------------------------- | -------------------------------------------------- |
| `AbsoluteOrientationSensor` | `'accelerometer'`, `'gyroscope'`, und `'magnetometer'` |
| `Accelerometer`             | `'accelerometer'`                                  |
| `AmbientLightSensor`        | `'ambient-light-sensor'`                           |
| `GravitySensor`             | `'accelerometer'`                                  |
| `Gyroscope`                 | `'gyroscope'`                                      |
| `LinearAccelerationSensor`  | `'accelerometer'`                                  |
| `Magnetometer`              | `'magnetometer'`                                   |
| `RelativeOrientationSensor` | `'accelerometer'`, und `'gyroscope'`               |

### Messungen

Sensormessungen werden über den {{domxref('Sensor.reading_event', 'reading')}}-Ereignis-Callback empfangen, das von allen Sensortypen geerbt wird. Die Häufigkeit der Messungen wird von Ihnen festgelegt und erfolgt durch eine Option, die dem Konstruktor eines Sensors übergeben wird. Diese Option ist eine Zahl, die die Anzahl der Messungen pro Sekunde angibt. Es kann eine ganze Zahl oder ein Dezimalwert verwendet werden, letzteres für Frequenzen unter einer Sekunde. Die tatsächliche Messfrequenz hängt von der Hardware des Geräts ab und kann daher geringer als die angeforderte Frequenz sein.

Das folgende Beispiel veranschaulicht dies unter Verwendung des {{domxref('Magnetometer')}}-Sensors.

```js
let magSensor = new Magnetometer({ frequency: 60 });

magSensor.addEventListener("reading", (e) => {
  console.log(`Magnetfeld entlang der X-Achse ${magSensor.x}`);
  console.log(`Magnetfeld entlang der Y-Achse ${magSensor.y}`);
  console.log(`Magnetfeld entlang der Z-Achse ${magSensor.z}`);
});
magSensor.addEventListener("error", (event) => {
  console.log(event.error.name, event.error.message);
});
magSensor.start();
```

## Schnittstellen

- {{domxref('AbsoluteOrientationSensor')}}
  - : Beschreibt die physische Orientierung des Geräts in Bezug auf das Referenzkoordinatensystem der Erde.
- {{domxref('Accelerometer')}}
  - : Liefert die auf das Gerät in allen drei Achsen angewandte Beschleunigung.
- {{domxref('AmbientLightSensor')}}
  - : Gibt das aktuelle Lichtniveau oder die Beleuchtungsstärke des Umgebungslichts um das hostende Gerät herum zurück.
- {{domxref('GravitySensor')}}
  - : Liefert die auf das Gerät in allen drei Achsen angewandte Schwerkraft.
- {{domxref('Gyroscope')}}
  - : Liefert die Winkelgeschwindigkeit des Geräts in allen drei Achsen.
- {{domxref('LinearAccelerationSensor')}}
  - : Liefert die auf das Gerät in allen drei Achsen angewandte Beschleunigung, jedoch ohne den Beitrag der Schwerkraft.
- {{domxref('Magnetometer')}}
  - : Liefert Informationen über das Magnetfeld, wie es vom primären Magnetometersensor des Geräts erkannt wird.
- {{domxref('OrientationSensor')}}
  - : Die Basisklasse für den {{domxref('AbsoluteOrientationSensor')}}. Diese Schnittstelle kann nicht direkt verwendet werden, sondern bietet Eigenschaften und Methoden, die von Schnittstellen, die von ihr erben, genutzt werden.
- {{domxref('RelativeOrientationSensor')}}
  - : Beschreibt die physische Orientierung des Geräts ohne Berücksichtigung des Erd-Referenzkoordinatensystems.
- {{domxref('Sensor')}}
  - : Die Basisklasse für alle anderen Sensorschnittstellen. Diese Schnittstelle kann nicht direkt verwendet werden. Stattdessen bietet sie Eigenschaften, Ereignishandler und Methoden, die von Schnittstellen, die von ihr erben, genutzt werden.
- {{domxref('SensorErrorEvent')}}
  - : Liefert Informationen über Fehler, die von einem {{domxref('Sensor')}} oder einer verwandten Schnittstelle ausgelöst werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
