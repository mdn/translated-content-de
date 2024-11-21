---
title: Permissions API
slug: Web/API/Permissions_API
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{DefaultAPISidebar("Permissions API")}}{{AvailableInWorkers}}

Die **Permissions API** bietet eine konsistente programmatische Möglichkeit, den Status der API-Berechtigungen im aktuellen Kontext, wie einer Webseite oder einem Worker, abzufragen.
Zum Beispiel kann sie verwendet werden, um festzustellen, ob die Berechtigung zum Zugriff auf eine bestimmte Funktion oder API gewährt, verweigert oder eine spezifische Benutzererlaubnis erforderlich ist.

## Konzepte und Nutzung

Historisch gesehen handhaben verschiedene APIs ihre eigenen Berechtigungen unterschiedlich - zum Beispiel stellte die [Notifications API](/de/docs/Web/API/Notifications_API) eigene Methoden zum Anfordern von Berechtigungen und zum Überprüfen des Berechtigungsstatus bereit, während die [Geolocation API](/de/docs/Web/API/Geolocation) dies nicht tat.
Die Permissions API bietet die Werkzeuge, damit Entwickler ein konsistentes Benutzererlebnis für den Umgang mit Berechtigungen umsetzen können.

Die Berechtigungen dieser API fassen effektiv alle Sicherheitsbeschränkungen für den Kontext zusammen, einschließlich jeglicher Anforderungen, dass eine API in einem sicheren Kontext verwendet wird, [Permissions-Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy)-Beschränkungen, die auf das Dokument angewendet werden, Anforderungen an die Benutzerinteraktion und Benutzeranfragen.
Wenn zum Beispiel eine API durch die Berechtigungsrichtlinie eingeschränkt ist, würde die zurückgegebene Berechtigung `denied` lauten, und der Benutzer würde nicht aufgefordert, den Zugriff zu gewähren.

Die `permissions`-Eigenschaft wurde sowohl im Standard-Browsing-Kontext als auch im Worker-Kontext auf dem [`Navigator`](/de/docs/Web/API/Navigator)-Objekt verfügbar gemacht ([`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) - sodass Berechtigungsabfragen innerhalb von Workern verfügbar sind) und gibt ein [`Permissions`](/de/docs/Web/API/Permissions)-Objekt zurück, das Zugriff auf die Funktionalität der Permissions API bietet.

Sobald Sie dieses Objekt haben, können Sie die Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwenden, um ein Promise zurückzugeben, das mit dem [`PermissionStatus`](/de/docs/Web/API/PermissionStatus) für eine spezifische API aufgelöst wird.

### Anfordern von Berechtigungen

Wenn der Berechtigungsstatus `prompt` ist, muss der Benutzer eine Eingabeaufforderung bestätigen, um Zugriff auf die Funktion zu gewähren.

Der Mechanismus, der diese Eingabeaufforderung auslöst, hängt von der spezifischen API ab - er ist nicht Teil der Permissions API definiert.
In der Regel wird die Eingabeaufforderung durch Code ausgelöst, der eine Methode aufruft, um die Funktion zuzugreifen oder zu öffnen, oder der sich für Benachrichtigungen von der Funktion registriert, die anschließend darauf zugreifen.

Beachten Sie, dass nicht alle Funktionen eine Eingabeaufforderung erfordern.
Berechtigungen könnten durch eine `Permission Policy`, implizit durch {{Glossary("transient_activation", "transient activation")}} oder durch einen anderen Mechanismus gewährt werden.

### Widerrufen von Berechtigungen

Das Widerrufen von Berechtigungen wird nicht von der API verwaltet.
Genauer gesagt wurde eine Methode [`Permissions.revoke()`](/de/docs/Web/API/Permissions/revoke) vorgeschlagen, aber mittlerweile aus den Browsern entfernt, in denen sie implementiert war.

Benutzer können Berechtigungen für bestimmte Seiten manuell über die Browsereinstellungen entfernen:

- **Firefox**: _Hamburger-Menü > Einstellungen > Datenschutz & Sicherheit > Berechtigungen_ (dann den **Einstellungen**-Button für die gewünschte Berechtigung auswählen).
- **Chrome**: _Hamburger-Menü > Einstellungen > Erweiterte Einstellungen anzeigen_. In der _Datenschutz_-Sektion, klicken Sie auf _Inhaltseinstellungen_. Im resultierenden Dialogfeld finden Sie den _Standort_-Abschnitt und wählen _Fragen, wenn eine Seite versucht…_. Schließlich klicken Sie auf _Ausnahmen verwalten_ und entfernen die Berechtigungen, die Sie den Seiten erteilt haben, die Sie interessieren.

### Berechtigungsbewusste APIs

Nicht alle APIs' Berechtigungsstatuse können über die Permissions API abgefragt werden.
Eine nicht vollständige Liste berechtigungsbewusster APIs umfasst:

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
  - : Bietet die Kernfunktionalität der Permission API, wie Methoden zum Abfragen und Widerrufen von Berechtigungen.
- [`PermissionStatus`](/de/docs/Web/API/PermissionStatus)
  - : Bietet Zugriff auf den aktuellen Status einer Berechtigung und einen Ereignishandler, um auf Änderungen des Berechtigungsstatus zu reagieren.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.permissions`](/de/docs/Web/API/Navigator/permissions) und [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) {{ReadOnlyInline}}
  - : Bietet Zugriff auf das [`Permissions`](/de/docs/Web/API/Permissions)-Objekt aus dem Hauptkontext bzw. dem Worker-Kontext.

## Beispiele

Wir haben ein Beispiel namens Location Finder erstellt.
Sie können [das Beispiel live ausführen](https://chrisdavidmills.github.io/location-finder-permissions-api/), [den Quellcode auf GitHub ansehen](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages) oder mehr darüber lesen, wie es funktioniert, in unserem Artikel [Using the Permissions API](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API).

Das Beispiel für [`Permissions.query()`](/de/docs/Web/API/Permissions/query#test_support_for_various_permissions) zeigt auch Code, der die meisten Berechtigungen im aktuellen Browser testet und das Ergebnis protokolliert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Permissions API](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API)
- [Using the Permissions API to Detect How Often Users Allow or Deny Camera Access](https://blog.addpipe.com/using-permissions-api-to-detect-getusermedia-responses/)
- [`Notification.permission`](/de/docs/Web/API/Notification/permission_static)
- [Privacy, permissions, and information security](/de/docs/Web/Privacy)
