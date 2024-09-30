---
title: Verwendung der Permissions API
slug: Web/API/Permissions_API/Using_the_Permissions_API
l10n:
  sourceCommit: 3fde60e07c74ad4954a0c77fdd80958c7d07f088
---

{{DefaultAPISidebar("Permissions API")}}

Dieser Artikel bietet einen grundlegenden Leitfaden zur Verwendung der [Permissions API](/de/docs/Web/API/Permissions_API), die eine programmatische Möglichkeit bietet, den Status von API-Berechtigungen im aktuellen Kontext abzufragen.

## Die Herausforderung bei der Einholung von Berechtigungen…

Berechtigungen im Web sind ein notwendiges Übel, aber sie sind für Entwickler nicht besonders angenehm in der Handhabung.

Historisch gesehen gehen verschiedene APIs unterschiedlich mit ihren eigenen Berechtigungen um — beispielsweise hatte die [Notifications API](/de/docs/Web/API/Notifications_API) ihre eigenen Methoden zur Überprüfung des Berechtigungsstatus und zum Anfordern von Berechtigungen, während die [Geolocation API](/de/docs/Web/API/Geolocation_API) dies nicht tat.

Die [Permissions API](/de/docs/Web/API/Permissions_API) bietet Entwicklern einen einheitlichen Ansatz und ermöglicht es ihnen, ein besseres Benutzererlebnis in Bezug auf Berechtigungen zu implementieren. Insbesondere können Entwickler [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwenden, um zu prüfen, ob die Berechtigung zur Nutzung einer bestimmten API im aktuellen Kontext gewährt, abgelehnt wurde oder eine spezifische Benutzererlaubnis über einen Prompt erforderlich ist. Die Abfrage von Berechtigungen im Haupt-Thread wird [weitgehend unterstützt](/de/docs/Web/API/Permissions_API#api.navigator.permissions) und auch in [Workers](/de/docs/Web/API/Permissions_API#api.workernavigator.permissions) (mit einer bemerkenswerten Ausnahme).

Viele APIs ermöglichen jetzt die Berechtigungsabfrage, wie zum Beispiel die [Clipboard API](/de/docs/Web/API/Clipboard_API), [Notifications API](/de/docs/Web/API/Notifications_API), [Push API](/de/docs/Web/API/Push_API) und [Web MIDI API](/de/docs/Web/API/Web_MIDI_API). Eine Liste vieler berechtigungsgesteuerter APIs finden Sie in der [API-Übersicht](/de/docs/Web/API/Permissions_API#permission-aware_apis), und Sie können einen Eindruck von der Browser-Unterstützung in der [Kompatibilitätstabelle hier](/de/docs/Web/API/Permissions_API#api.permissions) erhalten.

[`Permissions`](/de/docs/Web/API/Permissions) hat andere Methoden, um speziell Berechtigungen zur Nutzung einer API anzufordern oder zu widerrufen, aber diese sind veraltet (nicht standardisiert oder nicht weit unterstützt).

## Ein einfaches Beispiel

Für diesen Artikel haben wir eine einfache Demo namens Location Finder zusammengestellt. Sie nutzt Geolocation, um den aktuellen Standort des Nutzers abzufragen und auf einer Google Map darzustellen:

![Screenshot, der eine Karte von Greenfield, UK, zeigt.](location-finder-with-permissions-api.png)

Sie können [das Beispiel live ausführen](https://chrisdavidmills.github.io/location-finder-permissions-api/) oder [den Quellcode auf GitHub ansehen](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages). Der größte Teil des Codes ist einfach und unspektakulär — im Folgenden werden wir nur den Code im Zusammenhang mit der Permissions API durchgehen, also überprüfen Sie den Code selbst, wenn Sie eines der anderen Teile studieren möchten.

### Zugriff auf die Permissions API

Die [`Navigator.permissions`](/de/docs/Web/API/Navigator/permissions) Eigenschaft wurde dem Browser hinzugefügt, um Zugriff auf das globale [`Permissions`](/de/docs/Web/API/Permissions) Objekt zu ermöglichen. Dieses Objekt wird schließlich Methoden zum Abfragen, Anfordern und Widerrufen von Berechtigungen enthalten, obwohl es derzeit nur [`Permissions.query()`](/de/docs/Web/API/Permissions/query) enthält; siehe unten.

### Abfragen des Berechtigungsstatus

In unserem Beispiel wird die Funktionalität der Permissions von einer Funktion gehandhabt — `handlePermission()`. Diese beginnt mit der Abfrage des Berechtigungsstatus unter Verwendung von [`Permissions.query()`](/de/docs/Web/API/Permissions/query). Abhängig vom Wert der [`state`](/de/docs/Web/API/PermissionStatus/state) Eigenschaft des [`PermissionStatus`](/de/docs/Web/API/PermissionStatus) Objekts, das zurückgegeben wird, wenn das Versprechen aufgelöst wird, reagiert sie unterschiedlich:

- `"granted"`
  - : Der "Geolocation aktivieren" Button wird ausgeblendet, da er nicht benötigt wird, wenn Geolocation bereits aktiv ist.
- `"prompt"`
  - : Der "Geolocation aktivieren" Button wird ausgeblendet, da er nicht benötigt wird, wenn der Benutzer aufgefordert wird, die Erlaubnis für Geolocation zu erteilen. Die Funktion [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) wird dann ausgeführt, was den Benutzer um Erlaubnis bittet; sie führt die Funktion `revealPosition()` aus, wenn die Erlaubnis erteilt wird (die die Karte anzeigt), oder die Funktion `positionDenied()`, wenn die Erlaubnis verweigert wird (was den "Geolocation aktivieren" Button erscheinen lässt).
- `"denied"`
  - : Der "Geolocation aktivieren" Button wird angezeigt (dieser Code muss auch hier sein, falls der Berechtigungsstatus bereits auf verweigert für diesen Ursprung gesetzt ist, wenn die Seite zuerst geladen wird).

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

### Berechtigungsbeschreibungen

Die Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) nimmt ein `PermissionDescriptor` Wörterbuch als Parameter — dieses enthält den Namen der API, die Sie interessiert. Einige APIs haben komplexere `PermissionDescriptor`s, die zusätzliche Informationen enthalten, welche vom Standard `PermissionDescriptor` erben. Zum Beispiel sollte der `PushPermissionDescriptor` auch ein Boolean enthalten, das angibt, ob [`userVisibleOnly`](/de/docs/Web/API/PushManager/subscribe#parameters) `true` oder `false` ist.

### Reagieren auf Änderungen des Berechtigungsstatus

Sie werden bemerken, dass wir im obigen Code auf das [`change`](/de/docs/Web/API/PermissionStatus/change_event) Ereignis hören, das an das [`PermissionStatus`](/de/docs/Web/API/PermissionStatus) Objekt angehängt ist — dies ermöglicht es uns, auf Änderungen im Berechtigungsstatus für die API, die uns interessiert, zu reagieren. Zurzeit melden wir nur die Änderung im Status.
