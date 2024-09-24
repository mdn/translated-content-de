---
title: Verwendung der Permissions API
slug: Web/API/Permissions_API/Using_the_Permissions_API
l10n:
  sourceCommit: 3fde60e07c74ad4954a0c77fdd80958c7d07f088
---

{{DefaultAPISidebar("Permissions API")}}

Dieser Artikel bietet eine grundlegende Anleitung zur Verwendung der [Permissions API](/de/docs/Web/API/Permissions_API), die eine programmgesteuerte Möglichkeit bietet, den Status von API-Berechtigungen zu erfragen, die dem aktuellen Kontext zugeordnet sind.

## Das Problem mit der Anforderung von Berechtigungen…

Berechtigungen im Web sind ein notwendiges Übel, aber sie machen Entwicklern nicht viel Spaß.

Historisch gesehen handhaben verschiedene APIs ihre eigenen Berechtigungen inkonsistent – zum Beispiel hatte die [Notifications API](/de/docs/Web/API/Notifications_API) ihre eigenen Methoden zur Überprüfung des Berechtigungsstatus und zur Anforderung von Berechtigungen, während die [Geolocation API](/de/docs/Web/API/Geolocation_API) dies nicht tat.

Die [Permissions API](/de/docs/Web/API/Permissions_API) bietet Entwicklern einen einheitlichen Ansatz und ermöglicht es ihnen, ein besseres Benutzererlebnis in Bezug auf Berechtigungen zu implementieren. Insbesondere können Entwickler {{domxref("Permissions.query()")}} verwenden, um zu prüfen, ob die Berechtigung zur Nutzung einer bestimmten API im aktuellen Kontext erteilt, abgelehnt oder eine spezifische Benutzererlaubnis über ein Prompt erfordert wird. Die Erfragung von Berechtigungen im Hauptthread wird [breit unterstützt](/de/docs/Web/API/Permissions_API#api.navigator.permissions) und auch in [Workers](/de/docs/Web/API/Permissions_API#api.workernavigator.permissions) (mit einer bemerkenswerten Ausnahme).

Viele APIs ermöglichen jetzt die Berechtigungsabfrage, wie die [Clipboard API](/de/docs/Web/API/Clipboard_API), [Notifications API](/de/docs/Web/API/Notifications_API), [Push API](/de/docs/Web/API/Push_API) und [Web MIDI API](/de/docs/Web/API/Web_MIDI_API). Eine Liste vieler APIs mit Berechtigungen finden Sie in der [API-Übersicht](/de/docs/Web/API/Permissions_API#permission-aware_apis), und Sie können einen Eindruck von der Unterstützung durch Browser in der [Kompatibilitätstabelle hier](/de/docs/Web/API/Permissions_API#api.permissions) bekommen.

{{domxref("Permissions")}} hat andere Methoden, um ausdrücklich die Erlaubnis zur Nutzung einer API anzufordern und um Erlaubnisse zu widerrufen, aber diese sind veraltet (nicht standardisiert und/oder nicht breit unterstützt).

## Ein einfaches Beispiel

Für diesen Artikel haben wir ein einfaches Demo mit dem Namen Location Finder erstellt. Es verwendet Geolocation, um den aktuellen Standort des Benutzers abzufragen und ihn auf einer Google-Karte darzustellen:

![Screenshot zeigt eine Karte von Greenfield, UK.](location-finder-with-permissions-api.png)

Sie können das [Beispiel live ausführen](https://chrisdavidmills.github.io/location-finder-permissions-api/) oder [den Quellcode auf GitHub ansehen](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages). Der meiste Code ist einfach und unscheinbar – im Folgenden werden wir nur den mit der Permissions API verbundenen Code durchgehen. Schauen Sie sich den Code selbst an, wenn Sie andere Teile studieren möchten.

### Zugriff auf die Permissions API

Die {{domxref("Navigator.permissions")}}-Eigenschaft wurde dem Browser hinzugefügt, um den Zugriff auf das globale {{domxref("Permissions")}}-Objekt zu ermöglichen. Dieses Objekt wird schließlich Methoden zum Abfragen, Anfordern und Widerrufen von Berechtigungen enthalten, auch wenn es derzeit nur {{domxref("Permissions.query()")}} enthält; siehe unten.

### Abfragen des Berechtigungsstatus

In unserem Beispiel wird die Berechtigungsfunktionalität von einer Funktion namens `handlePermission()` verwaltet. Diese beginnt mit der Abfrage des Berechtigungsstatus mittels {{domxref("Permissions.query()")}}. Abhängig vom Wert der {{domxref("PermissionStatus.state", "state")}}-Eigenschaft des {{domxref("PermissionStatus")}}-Objekts, das zurückgegeben wird, wenn das Versprechen aufgelöst wird, verhält sich das Programm unterschiedlich:

- `"granted"`
  - : Die Schaltfläche "Geolocation aktivieren" wird ausgeblendet, da sie nicht benötigt wird, wenn Geolocation bereits aktiv ist.
- `"prompt"`
  - : Die Schaltfläche "Geolocation aktivieren" wird ausgeblendet, da sie nicht benötigt wird, wenn der Benutzer aufgefordert wird, die Erlaubnis für Geolocation zu erteilen. Die Funktion {{domxref("Geolocation.getCurrentPosition()")}} wird dann ausgeführt, die den Benutzer um Erlaubnis fragt; sie führt die Funktion `revealPosition()` aus, wenn die Erlaubnis erteilt wird (was die Karte anzeigt), oder die Funktion `positionDenied()`, wenn die Erlaubnis abgelehnt wird (was die Schaltfläche "Geolocation aktivieren" erscheinen lässt).
- `"denied"`
  - : Die Schaltfläche "Geolocation aktivieren" wird angezeigt (dieser Code muss hier auch eingefügt werden, falls der Berechtigungsstatus bereits für diesen Ursprung beim ersten Laden der Seite auf abgelehnt eingestellt ist).

```js
function handlePermission() {
  navigator.permissions.query({ name: "geolocation" }).then((result) => {
    if (result.state === "granted") {
      report(result.state);
      geoBtn.style.display = "none";
    } else if (result.state === "prompt") {
      report(result.state);
      geoBtn.style.display = "none";
      navigator.geolocation.getCurrentPosition(
        revealPosition,
        positionDenied,
        geoSettings,
      );
    } else if (result.state === "denied") {
      report(result.state);
      geoBtn.style.display = "inline";
    }
    result.addEventListener("change", () => {
      report(result.state);
    });
  });
}

function report(state) {
  console.log(`Permission ${state}`);
}

handlePermission();
```

### Berechtigungsdeskriptoren

Die Methode {{domxref("Permissions.query()")}} nimmt ein `PermissionDescriptor`-Wörterbuch als Parameter entgegen – dies enthält den Namen der API, an der Sie interessiert sind. Einige APIs haben komplexere `PermissionDescriptor`s, die zusätzliche Informationen enthalten, die vom Standard-`PermissionDescriptor` erben. Zum Beispiel sollte der `PushPermissionDescriptor` auch ein Boolean enthalten, das angibt, ob [`userVisibleOnly`](/de/docs/Web/API/PushManager/subscribe#parameters) `true` oder `false` ist.

### Reagieren auf Änderungen des Berechtigungsstatus

Sie werden bemerken, dass wir im obigen Code auf das {{domxref("PermissionStatus.change_event", "change")}}-Ereignis hören, das an das {{domxref("PermissionStatus")}}-Objekt angehängt ist – dies ermöglicht es uns, auf Änderungen im Berechtigungsstatus für die API zu reagieren, an der wir interessiert sind. Im Moment berichten wir nur über die Änderung des Status.
