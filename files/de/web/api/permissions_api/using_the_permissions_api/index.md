---
title: Verwendung der Permissions API
slug: Web/API/Permissions_API/Using_the_Permissions_API
l10n:
  sourceCommit: 3fde60e07c74ad4954a0c77fdd80958c7d07f088
---

{{DefaultAPISidebar("Permissions API")}}

Dieser Artikel bietet einen grundlegenden Leitfaden zur Verwendung der [Permissions API](/de/docs/Web/API/Permissions_API), die eine programmatische Möglichkeit bietet, den Status von API-Berechtigungen im aktuellen Kontext abzufragen.

## Die Schwierigkeit beim Einholen von Berechtigungen…

Berechtigungen im Web sind ein notwendiges Übel, jedoch nicht sehr angenehm für Entwickler.

Historisch gesehen gehen verschiedene APIs unterschiedlich mit ihren eigenen Berechtigungen um — zum Beispiel hatte die [Notifications API](/de/docs/Web/API/Notifications_API) ihre eigenen Methoden, um den Berechtigungsstatus zu überprüfen und Berechtigung anzufordern, während die [Geolocation API](/de/docs/Web/API/Geolocation_API) dies nicht tat.

Die [Permissions API](/de/docs/Web/API/Permissions_API) bietet Entwicklern einen einheitlichen Ansatz und ermöglicht es ihnen, eine bessere Benutzererfahrung in Bezug auf Berechtigungen zu implementieren. Insbesondere können Entwickler mit [`Permissions.query()`](/de/docs/Web/API/Permissions/query) überprüfen, ob die Berechtigung zur Nutzung einer bestimmten API im aktuellen Kontext gewährt, verweigert oder über eine Benutzeraufforderung spezifische Zustimmung erfordert. Das Abfragen von Berechtigungen im Hauptthread wird [breit unterstützt](/de/docs/Web/API/Permissions_API#api.navigator.permissions) und auch in [Workers](/de/docs/Web/API/Permissions_API#api.workernavigator.permissions) (mit einer bemerkenswerten Ausnahme).

Viele APIs ermöglichen nun die Abfrage von Berechtigungen, wie die [Clipboard API](/de/docs/Web/API/Clipboard_API), [Notifications API](/de/docs/Web/API/Notifications_API), [Push API](/de/docs/Web/API/Push_API) und [Web MIDI API](/de/docs/Web/API/Web_MIDI_API). Eine Liste vieler berechtigungsfähiger APIs finden Sie im [API-Überblick](/de/docs/Web/API/Permissions_API#permission-aware_apis), und einen Überblick über die Browser-Unterstützung erhalten Sie in der [Kompatibilitätstabelle hier](/de/docs/Web/API/Permissions_API#api.permissions).

[`Permissions`](/de/docs/Web/API/Permissions) hat weitere Methoden, um speziell die Berechtigung zur Nutzung einer API anzufordern und die Berechtigung zu widerrufen, diese sind jedoch veraltet (nicht standardisiert und/oder nicht breit unterstützt).

## Ein einfaches Beispiel

Für diesen Artikel haben wir eine einfache Demo namens Location Finder zusammengestellt. Sie verwendet Geolocation, um den aktuellen Standort des Benutzers abzufragen und auf einer Google-Karte darzustellen:

![Screenshot zeigt eine Karte von Greenfield, UK.](location-finder-with-permissions-api.png)

Sie können [das Beispiel live ausführen](https://chrisdavidmills.github.io/location-finder-permissions-api/) oder [den Quellcode auf GitHub ansehen](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages). Der Großteil des Codes ist einfach und unauffällig — im Folgenden gehen wir nur den codebezogenen Teil der Permissions API durch, daher sollten Sie sich den Code selbst ansehen, wenn Sie andere Teile studieren möchten.

### Zugriff auf die Permissions API

Die [`Navigator.permissions`](/de/docs/Web/API/Navigator/permissions)-Eigenschaft wurde dem Browser hinzugefügt, um Zugriff auf das globale [`Permissions`](/de/docs/Web/API/Permissions)-Objekt zu ermöglichen. Dieses Objekt wird schließlich Methoden zum Abfragen, Anfordern und Widerrufen von Berechtigungen enthalten, obwohl es derzeit nur [`Permissions.query()`](/de/docs/Web/API/Permissions/query) enthält; siehe unten.

### Abfragen des Berechtigungsstatus

In unserem Beispiel wird die Berechtigungsfunktionalität von einer Funktion – `handlePermission()` – behandelt. Diese beginnt mit dem Abfragen des Berechtigungsstatus über [`Permissions.query()`](/de/docs/Web/API/Permissions/query). Abhängig vom Wert der [`state`](/de/docs/Web/API/PermissionStatus/state)-Eigenschaft des [`PermissionStatus`](/de/docs/Web/API/PermissionStatus)-Objekts, das zurückgegeben wird, wenn das Versprechen erfüllt wird, reagiert es unterschiedlich:

- `"granted"`
  - : Der "Enable Geolocation"-Button wird versteckt, da er nicht benötigt wird, wenn Geolocation bereits aktiviert ist.
- `"prompt"`
  - : Der "Enable Geolocation"-Button wird versteckt, da er nicht benötigt wird, wenn der Benutzer aufgefordert wird, die Berechtigung für Geolocation zu erteilen. Die Funktion [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) wird dann ausgeführt, was den Benutzer um Erlaubnis bittet; sie führt die Funktion `revealPosition()` aus, wenn die Erlaubnis erteilt wird (was die Karte anzeigt), oder die Funktion `positionDenied()`, wenn die Erlaubnis verweigert wird (was den "Enable Geolocation"-Button erscheinen lässt).
- `"denied"`
  - : Der "Enable Geolocation"-Button wird angezeigt (dieser Code muss auch hier vorhanden sein, falls der Berechtigungsstatus bereits auf "verweigert" für diesen Ursprung gesetzt ist, wenn die Seite zuerst geladen wird).

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

Die Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) nimmt ein `PermissionDescriptor`-Wörterbuch als Parameter entgegen — dieses enthält den Namen der API, die Sie interessiert. Einige APIs haben komplexere `PermissionDescriptor`s, die zusätzliche Informationen enthalten und vom Standard-`PermissionDescriptor` erben. Zum Beispiel sollte der `PushPermissionDescriptor` auch ein Boolean enthalten, das angibt, ob [`userVisibleOnly`](/de/docs/Web/API/PushManager/subscribe#parameters) `true` oder `false` ist.

### Reagieren auf Änderungen des Berechtigungsstatus

Sie werden bemerken, dass wir im obigen Code das [`change`](/de/docs/Web/API/PermissionStatus/change_event)-Ereignis abhören, das am [`PermissionStatus`](/de/docs/Web/API/PermissionStatus)-Objekt angehängt ist — dies ermöglicht es uns, auf Änderungen des Berechtigungsstatus für die API, die uns interessiert, zu reagieren. Derzeit berichten wir nur über die Statusänderung.
