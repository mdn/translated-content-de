---
title: Permissions API
slug: Web/API/Permissions_API
l10n:
  sourceCommit: 3fde60e07c74ad4954a0c77fdd80958c7d07f088
---

{{DefaultAPISidebar("Permissions API")}}{{AvailableInWorkers}}

Die **Permissions API** bietet eine konsistente programmatische Möglichkeit, den Status von API-Berechtigungen für den aktuellen Kontext abzufragen, wie z.B. eine Webseite oder einen Worker. Sie kann beispielsweise verwendet werden, um festzustellen, ob die Berechtigung für den Zugriff auf eine bestimmte Funktion oder API erteilt, abgelehnt oder eine spezifische Benutzererlaubnis erforderlich ist.

## Konzepte und Verwendung

Historisch haben unterschiedliche APIs ihre eigenen Berechtigungen inkonsistent gehandhabt — zum Beispiel bot die [Notifications API](/de/docs/Web/API/Notifications_API) eigene Methoden zum Anfordern von Berechtigungen und zum Überprüfen des Berechtigungsstatus, während die [Geolocation API](/de/docs/Web/API/Geolocation) das nicht tat. Die Permissions API bietet die Werkzeuge, die es Entwicklern ermöglichen, eine konsistente Benutzererfahrung bei der Arbeit mit Berechtigungen zu implementieren.

Die Berechtigungen dieser API aggregieren effektiv alle Sicherheitsbeschränkungen für den Kontext, einschließlich der Anforderung, dass eine API in einem sicheren Kontext verwendet wird, der [Permissions-Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy), die auf das Dokument angewendet wird, Anforderungen für Benutzerinteraktionen und Benutzereingabeaufforderungen. Wenn eine API zum Beispiel durch die Berechtigungspolitik eingeschränkt ist, würde die zurückgegebene Berechtigung `denied` sein und der Benutzer würde nicht zur Genehmigung des Zugriffs aufgefordert werden.

Die `permissions`-Eigenschaft wurde sowohl im Standard-Browsing-Kontext als auch im Worker-Kontext am [`Navigator`](/de/docs/Web/API/Navigator)-Objekt verfügbar gemacht ([`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) — so sind Berechtigungsüberprüfungen auch innerhalb von Workern verfügbar) und gibt ein [`Permissions`](/de/docs/Web/API/Permissions)-Objekt zurück, das Zugriff auf die Funktionalität der Permissions API bietet.

Sobald Sie dieses Objekt haben, können Sie die Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwenden, um ein Versprechen zurückzugeben, das mit dem [`PermissionStatus`](/de/docs/Web/API/PermissionStatus) für eine bestimmte API auflöst.

### Berechtigung anfordern

Wenn der Berechtigungsstatus `prompt` ist, muss der Benutzer eine Eingabeaufforderung bestätigen, um Zugriff auf die Funktion zu gewähren.

Der Mechanismus, der diese Eingabeaufforderung auslöst, hängt von der spezifischen API ab und ist nicht Teil der Permissions API definiert. Allgemein wird die Auslösung durch Code verursacht, der eine Methode zum Zugriff auf die Funktion aufruft oder sich für Benachrichtigungen von der Funktion registriert, die anschließend darauf zugreifen wird.

Beachten Sie, dass nicht alle Funktionen eine Eingabeaufforderung erfordern. Die Berechtigung könnte durch eine `Permission Policy`, implizit durch [transient activation](/de/docs/Glossary/transient_activation) oder durch einen anderen Mechanismus gewährt werden.

### Berechtigung widerrufen

Der Widerruf von Berechtigungen wird nicht von der API verwaltet. Genauer gesagt, eine Methode [`Permissions.revoke()`](/de/docs/Web/API/Permissions/revoke) wurde vorgeschlagen, aber inzwischen aus den Browsern entfernt, in denen sie implementiert war.

Benutzer können Berechtigungen für bestimmte Seiten manuell über die Browsereinstellungen entfernen:

- **Firefox**: _Hamburger-Menü > Einstellungen > Datenschutz & Sicherheit > Berechtigungen_ (dann den **Einstellungen**-Button für die relevante Berechtigung auswählen).
- **Chrome**: _Hamburger-Menü > Einstellungen > Erweiterte Einstellungen anzeigen_. Im Abschnitt _Datenschutz_ auf _Content-Einstellungen_ klicken. Im resultierenden Dialogfenster den Abschnitt _Standort_ finden und _Fragen, wenn eine Seite versucht…_ auswählen. Schließlich auf _Ausnahmen verwalten_ klicken und die erteilten Berechtigungen für die interessierenden Seiten entfernen.

### Berechtigungsbewusste APIs

Nicht alle APIs' Berechtigungsstatus können mit der Permissions API abgefragt werden. Eine nicht erschöpfende Liste berechtigungsbewusster APIs umfasst:

- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API): `background-sync` (sollte immer gewährt werden)
- [Clipboard_API](/de/docs/Web/API/Clipboard_API#security_considerations): `clipboard-read`, `clipboard-write`
- [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API): `compute-pressure`
- [Geolocation API](/de/docs/Web/API/Geolocation_API#security_considerations): `geolocation`
- [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API): `local-fonts`
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API): `microphone`, `camera`
- [Notifications API](/de/docs/Web/API/Notifications_API): `notifications`
- [Payment Handler API](/de/docs/Web/API/Payment_Handler_API): `payment-handler`
- [Push API](/de/docs/Web/API/Push_API): `push`
- [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API): `screen-wake-lock`
- [Sensor APIs](/de/docs/Web/API/Sensor_APIs): `accelerometer`, `gyroscope`, `magnetometer`, `ambient-light-sensor`
- [Storage Access API](/de/docs/Web/API/Storage_Access_API): `storage-access`, `top-level-storage-access`
- [Storage API](/de/docs/Web/API/Storage_API): `persistent-storage`
- [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API): `bluetooth`
- [Web MIDI API](/de/docs/Web/API/Web_MIDI_API): `midi`
- [Window Management API](/de/docs/Web/API/Window_Management_API): `window-management`

## Schnittstellen

- [`Permissions`](/de/docs/Web/API/Permissions)
  - : Bietet die Kernfunktionalität der Permissions API, wie z.B. Methoden zum Abfragen und Widerrufen von Berechtigungen.
- [`PermissionStatus`](/de/docs/Web/API/PermissionStatus)
  - : Bietet Zugriff auf den aktuellen Status einer Berechtigung und einen Ereignishandler, um auf Änderungen des Berechtigungsstatus zu reagieren.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.permissions`](/de/docs/Web/API/Navigator/permissions) und [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) {{ReadOnlyInline}}
  - : Bietet Zugriff auf das [`Permissions`](/de/docs/Web/API/Permissions)-Objekt aus dem Hauptkontext und dem Worker-Kontext.

## Beispiele

Wir haben ein einfaches Beispiel entwickelt, das Location Finder heißt. Sie können [das Beispiel live ausführen](https://chrisdavidmills.github.io/location-finder-permissions-api/), [den Quellcode auf GitHub ansehen](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages) oder mehr darüber lesen, wie es funktioniert, in unserem Artikel [Using the Permissions API](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API).

Das Beispiel [`Permissions.query()`](/de/docs/Web/API/Permissions/query#test_support_for_various_permissions) zeigt auch Code, der die meisten Berechtigungen im aktuellen Browser testet und das Ergebnis protokolliert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Permissions API](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API)
- [Using the Permissions API to Detect How Often Users Allow or Deny Camera Access](https://blog.addpipe.com/using-permissions-api-to-detect-getusermedia-responses/)
- [`Notification.permission`](/de/docs/Web/API/Notification/permission_static)
- [Privacy, permissions, and information security](/de/docs/Web/Privacy)
