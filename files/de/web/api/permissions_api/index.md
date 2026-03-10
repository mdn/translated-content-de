---
title: Permissions API
slug: Web/API/Permissions_API
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

{{DefaultAPISidebar("Permissions API")}}{{AvailableInWorkers}}

Die **Permissions API** bietet eine konsistente programmgesteuerte Methode, um den Status von API-Berechtigungen für den aktuellen Kontext abzufragen, wie z.B. eine Webseite oder einen Worker.
Zum Beispiel kann sie verwendet werden, um festzustellen, ob die Berechtigung für den Zugriff auf eine bestimmte Funktion oder API erteilt, verweigert oder spezifische Benutzerberechtigung erforderlich ist.

## Konzepte und Verwendung

Historisch haben verschiedene APIs ihre Berechtigungen inkonsistent gehandhabt — zum Beispiel stellte die [Notifications API](/de/docs/Web/API/Notifications_API) eigene Methoden zum Anfordern von Berechtigungen und Überprüfen des Berechtigungsstatus bereit, während die [Geolocation API](/de/docs/Web/API/Geolocation) dies nicht tat.
Die Permissions API bietet Entwicklern die Werkzeuge, um eine konsistente Benutzererfahrung bei der Arbeit mit Berechtigungen umzusetzen.

Die Berechtigungen dieser API bündeln effektiv alle Sicherheitsbeschränkungen für den Kontext, einschließlich jeglicher Anforderung, dass eine API in einem sicheren Kontext verwendet wird, [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)-Beschränkungen, die auf das Dokument angewendet werden, Anforderungen für Benutzerinteraktion und Benutzeraufforderungen.
Wenn eine API z.B. durch eine Berechtigungsrichtlinie eingeschränkt ist, würde die zurückgegebene Berechtigung `denied` sein und der Benutzer würde nicht aufgefordert werden, Zugriff zu gewähren.

Die `permissions`-Eigenschaft ist sowohl im Standard-Browsing-Kontext als auch im Worker-Kontext auf dem [`Navigator`](/de/docs/Web/API/Navigator)-Objekt verfügbar ([`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) — sodass Berechtigungsüberprüfungen innerhalb von Workern möglich sind) und liefert ein [`Permissions`](/de/docs/Web/API/Permissions)-Objekt, das Zugriff auf die Funktionalität der Permissions API bietet.

Sobald Sie dieses Objekt haben, können Sie die Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwenden, um ein Versprechen zurückzugeben, das mit dem [`PermissionStatus`](/de/docs/Web/API/PermissionStatus) für eine bestimmte API aufgelöst wird.

### Anfordern von Berechtigungen

Wenn der Berechtigungsstatus `prompt` lautet, muss der Benutzer eine Aufforderung bestätigen, um Zugriff auf die Funktion zu gewähren.

Der Mechanismus, der diese Aufforderung auslöst, hängt von der spezifischen API ab — er ist nicht als Teil der Permissions API definiert.
Im Allgemeinen ist der Auslöser Code, der eine Methode aufruft, um die Funktion zu verwenden oder zu öffnen, oder der sich für Benachrichtigungen von der Funktion registriert, die anschließend darauf zugreifen wird.

Beachten Sie, dass nicht alle Funktionen eine Aufforderung erfordern.
Berechtigungen könnten durch eine `Permission Policy`, implizit durch {{Glossary("transient_activation", "transiente Aktivierung")}} oder durch einen anderen Mechanismus erteilt werden.

### Widerruf von Berechtigungen

Der Widerruf von Berechtigungen wird nicht von der API verwaltet.
Genauer gesagt, eine Methode [`Permissions.revoke()`](/de/docs/Web/API/Permissions/revoke) wurde vorgeschlagen, aber seitdem aus den Browsern, in denen sie implementiert war, entfernt.

Benutzer können Berechtigungen für bestimmte Sites manuell über die Browsereinstellungen entfernen:

- **Firefox**: _Hamburger-Menü > Einstellungen > Datenschutz & Sicherheit > Berechtigungen_ (dann die **Einstellungen**-Schaltfläche für die gewünschte Berechtigung auswählen).
- **Chrome**: _Hamburger-Menü > Einstellungen > Erweiterte Einstellungen anzeigen_. Im Abschnitt _Datenschutz_ klicken Sie auf _Inhaltseinstellungen_. Im erscheinenden Dialogfeld suchen Sie den Abschnitt _Standort_ und wählen _Fragen, wenn eine Website versucht, …_. Schließlich klicken Sie auf _Ausnahmen verwalten_ und entfernen die Berechtigungen, die Sie den interessierten Sites gewährt haben.

### Berechtigungsbewusste APIs

Nicht der Berechtigungsstatus aller APIs kann über die Permissions API abgefragt werden.
Eine unvollständige Liste von berechtigungsbewussten APIs umfasst:

- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API): `background-sync` (sollte immer gewährt sein)
- [Clipboard API](/de/docs/Web/API/Clipboard_API#security_considerations): `clipboard-read`, `clipboard-write`
- [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API): `compute-pressure`
- [Geolocation API](/de/docs/Web/API/Geolocation_API#security_considerations): `geolocation`
- [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API): `local-fonts`
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API): `microphone`, `camera`
- [Notifications API](/de/docs/Web/API/Notifications_API): `notifications`
- [Web-based Payment Handler API](/de/docs/Web/API/Web-Based_Payment_Handler_API): `payment-handler`
- [Push API](/de/docs/Web/API/Push_API): `push`
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API): `captured-surface-control`, `display-capture`
- [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API): `screen-wake-lock`
- [Sensor APIs](/de/docs/Web/API/Sensor_APIs): `accelerometer`, `gyroscope`, `magnetometer`, `ambient-light-sensor`
- [Storage Access API](/de/docs/Web/API/Storage_Access_API): `storage-access`, `top-level-storage-access`
- [Storage API](/de/docs/Web/API/Storage_API): `persistent-storage`
- [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API): `bluetooth`
- [Web MIDI API](/de/docs/Web/API/Web_MIDI_API): `midi`
- [Window Management API](/de/docs/Web/API/Window_Management_API): `window-management`

## Schnittstellen

- [`Permissions`](/de/docs/Web/API/Permissions)
  - : Bietet die grundlegende Funktionalität der Permission API, wie z.B. Methoden zur Abfrage und zum Widerruf von Berechtigungen.
- [`PermissionStatus`](/de/docs/Web/API/PermissionStatus)
  - : Ermöglicht den Zugriff auf den aktuellen Status einer Berechtigung und einen Ereignishandler, um auf Änderungen im Berechtigungsstatus zu reagieren.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.permissions`](/de/docs/Web/API/Navigator/permissions) und [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) {{ReadOnlyInline}}
  - : Bietet Zugriff auf das [`Permissions`](/de/docs/Web/API/Permissions)-Objekt aus dem Hauptkontext und dem Worker-Kontext.

## Beispiele

Wir haben ein Beispiel namens Location Finder erstellt.
Sie können [das Beispiel live ausführen](https://chrisdavidmills.github.io/location-finder-permissions-api/), [den Quellcode auf GitHub sehen](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages) oder mehr darüber lesen, wie es in unserem Artikel [Using the Permissions API](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API) funktioniert.

Das Beispiel der [`Permissions.query()`](/de/docs/Web/API/Permissions/query#test_support_for_various_permissions) zeigt auch Code, der die meisten Berechtigungen im aktuellen Browser testet und das Ergebnis protokolliert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Permissions API](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API)
- [Using the Permissions API to Detect How Often Users Allow or Deny Camera Access](https://blog.addpipe.com/using-permissions-api-to-detect-getusermedia-responses/)
- [`Notification.permission`](/de/docs/Web/API/Notification/permission_static)
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
