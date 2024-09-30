---
title: Permissions API
slug: Web/API/Permissions_API
l10n:
  sourceCommit: 3fde60e07c74ad4954a0c77fdd80958c7d07f088
---

{{DefaultAPISidebar("Permissions API")}}{{AvailableInWorkers}}

Die **Permissions API** bietet eine konsistente programmatische Möglichkeit, den Status von API-Berechtigungen im aktuellen Kontext abzufragen, wie einer Webseite oder einem Worker.
Zum Beispiel kann sie verwendet werden, um festzustellen, ob die Berechtigung für den Zugriff auf eine bestimmte Funktion oder API erteilt, verweigert oder spezielle Benutzerberechtigung erfordert.

## Konzepte und Verwendung

Historisch handhaben unterschiedliche APIs ihre eigenen Berechtigungen inkonsistent — zum Beispiel bot die [Notifications API](/de/docs/Web/API/Notifications_API) ihre eigenen Methoden zum Anfordern von Berechtigungen und Überprüfen des Berechtigungsstatus, während die [Geolocation API](/de/docs/Web/API/Geolocation) dies nicht tat.
Die Permissions API stellt Entwickler:innen die Werkzeuge zur Verfügung, um eine konsistente Benutzererfahrung bei der Arbeit mit Berechtigungen zu implementieren.

Die Berechtigungen aus dieser API aggregieren effektiv alle Sicherheitsbeschränkungen für den Kontext, einschließlich jeglicher Anforderungen für die Nutzung einer API in einem sicheren Kontext, [Permissions-Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy)-Beschränkungen, die auf das Dokument angewendet werden, Anforderungen für Benutzerinteraktionen und Benutzeraufforderungen.
Wenn also eine API durch Berechtigungsrichtlinien eingeschränkt ist, würde die zurückgegebene Berechtigung `verweigert` sein und der Benutzer würde nicht um Zugriff gebeten werden.

Die `permissions`-Eigenschaft wurde sowohl im Standard-Browsing-Kontext als auch im Worker-Kontext auf dem [`Navigator`](/de/docs/Web/API/Navigator)-Objekt verfügbar gemacht ([`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) — so sind Berechtigungsabfragen auch in Workern verfügbar) und liefert ein [`Permissions`](/de/docs/Web/API/Permissions)-Objekt, das Zugriff auf die Funktionalität der Permissions API bietet.

Sobald Sie dieses Objekt haben, können Sie die Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwenden, um ein Promise zurückzugeben, das sich mit dem [`PermissionStatus`](/de/docs/Web/API/PermissionStatus) für eine spezifische API auflöst.

### Anfordern von Berechtigungen

Wenn der Berechtigungsstatus `prompt` lautet, muss der Benutzer eine Aufforderung bestätigen, um Zugriff auf die Funktion zu gewähren.

Der Mechanismus, der diese Aufforderung auslöst, hängt von der spezifischen API ab — er ist nicht Teil der Permissions API definiert.
In der Regel wird der Auslöser durch Code ausgelöst, der eine Methode aufruft, um auf die Funktion zuzugreifen oder diese zu öffnen, oder der sich für Benachrichtigungen von der Funktion registriert, die anschließend darauf zugreifen wird.

Beachten Sie, dass nicht alle Funktionen eine Aufforderung erfordern.
Berechtigungen könnten durch eine `Permission Policy`, implizit durch [transitorische Aktivierung](/de/docs/Glossary/transient_activation) oder über einen anderen Mechanismus erteilt werden.

### Widerrufen von Berechtigungen

Der Widerruf von Berechtigungen wird nicht durch die API verwaltet.
Genauer gesagt wurde eine Methode [`Permissions.revoke()`](/de/docs/Web/API/Permissions/revoke) vorgeschlagen, aber inzwischen aus den Browsern entfernt, in denen sie implementiert war.

Benutzer können manuell die Berechtigung für bestimmte Seiten über die Browsereinstellungen entfernen:

- **Firefox**: _Hamburger-Menü > Einstellungen > Datenschutz & Sicherheit > Berechtigungen_ (wählen Sie dann die **Einstellungen**-Schaltfläche für die betreffende Berechtigung).
- **Chrome**: _Hamburger-Menü > Einstellungen > Erweiterte Einstellungen anzeigen_. Im Abschnitt _Datenschutz_ klicken Sie auf _Inhaltseinstellungen_. Im resultierenden Dialogfeld finden Sie den Abschnitt _Standort_ und wählen _Fragen, wenn eine Website versucht, …_. Schließlich klicken Sie auf _Ausnahmen verwalten_ und entfernen die Berechtigungen, die Sie den betreffenden Websites erteilt haben.

### Berechtigungsbewusste APIs

Nicht alle APIs' Berechtigungsstatus können mit der Permissions API abgefragt werden.
Eine nicht erschöpfende Liste von berechtigungsbewussten APIs umfasst:

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
  - : Bietet Zugriff auf den aktuellen Status einer Berechtigung und einen Ereignishandler, um auf Änderungen im Berechtigungsstatus zu reagieren.

### Erweiterungen auf andere Schnittstellen

- [`Navigator.permissions`](/de/docs/Web/API/Navigator/permissions) und [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) {{ReadOnlyInline}}
  - : Ermöglicht den Zugriff auf das [`Permissions`](/de/docs/Web/API/Permissions)-Objekt aus dem Hauptkontext bzw. Worker-Kontext.

## Beispiele

Wir haben ein einfaches Beispiel namens Location Finder erstellt.
Sie können [das Beispiel live ausführen](https://chrisdavidmills.github.io/location-finder-permissions-api/), [den Quellcode auf GitHub ansehen](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages) oder mehr darüber lesen, wie es funktioniert, in unserem Artikel [Using the Permissions API](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API).

Das Beispiel [`Permissions.query()`](/de/docs/Web/API/Permissions/query#test_support_for_various_permissions) zeigt auch Code, der die meisten Berechtigungen im aktuellen Browser testet und das Ergebnis protokolliert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Permissions API](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API)
- [Using the Permissions API to Detect How Often Users Allow or Deny Camera Access](https://blog.addpipe.com/using-permissions-api-to-detect-getusermedia-responses/)
- [`Notification.permission`](/de/docs/Web/API/Notification/permission_static)
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
