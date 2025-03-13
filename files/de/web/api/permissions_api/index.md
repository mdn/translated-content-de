---
title: Permissions API
slug: Web/API/Permissions_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Permissions API")}}{{AvailableInWorkers}}

Die **Permissions API** bietet eine konsistente programmgesteuerte Möglichkeit, den Status von API-Berechtigungen im aktuellen Kontext zu erfragen, wie zum Beispiel in einer Webseite oder einem Worker. Beispielsweise kann sie verwendet werden, um festzustellen, ob die Berechtigung für den Zugriff auf eine bestimmte Funktion oder API gewährt, verweigert oder spezifische Benutzerberechtigungen erforderlich macht.

## Konzepte und Verwendung

Historisch gesehen behandeln verschiedene APIs ihre Berechtigungen inkonsistent – zum Beispiel die [Notifications API](/de/docs/Web/API/Notifications_API), die eigene Methoden zum Anfordern von Berechtigungen und zum Überprüfen des Berechtigungsstatus bereitstellt, während die [Geolocation API](/de/docs/Web/API/Geolocation) dies nicht tat. Die Permissions API stellt Entwicklern die Werkzeuge zur Verfügung, um eine konsistente Benutzererfahrung beim Arbeiten mit Berechtigungen zu implementieren.

Die Berechtigungen dieser API aggregieren effektiv alle Sicherheitsbeschränkungen für den Kontext, einschließlich aller Anforderungen, dass eine API in einem sicheren Kontext verwendet wird, [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)-Beschränkungen, die auf das Dokument angewendet werden, Anforderungen für Benutzerinteraktionen und Benutzeraufforderungen. Wenn zum Beispiel eine API durch eine Berechtigungspolitik beschränkt ist, würde die zurückgegebene Berechtigung `denied` sein und der Benutzer würde nicht um Zugriff gebeten werden.

Die Eigenschaft `permissions` ist sowohl im Standard-Browsing-Kontext als auch im Worker-Kontext auf dem [`Navigator`](/de/docs/Web/API/Navigator)-Objekt verfügbar ([`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) – sodass Berechtigungsüberprüfungen auch innerhalb von Workern verfügbar sind) und gibt ein [`Permissions`](/de/docs/Web/API/Permissions)-Objekt zurück, das Zugriff auf die Funktionen der Permissions API bietet.

Sobald Sie dieses Objekt haben, können Sie die Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwenden, um ein Versprechen zurückzugeben, das mit dem [`PermissionStatus`](/de/docs/Web/API/PermissionStatus) für eine spezifische API aufgelöst wird.

### Berechtigung anfordern

Wenn der Berechtigungsstatus `prompt` ist, muss der Benutzer eine Aufforderung bestätigen, um den Zugriff auf die Funktion zu gewähren.

Der Mechanismus, der diese Aufforderung auslöst, hängt von der spezifischen API ab – er ist nicht als Teil der Permissions API definiert. Im Allgemeinen wird die Aufforderung durch Code ausgelöst, der eine Methode zum Zugriff auf oder Öffnen der Funktion aufruft oder der sich für Benachrichtigungen von der Funktion registriert, die sie anschließend aufrufen werden.

Beachten Sie, dass nicht alle Funktionen eine Aufforderung benötigen. Die Berechtigung kann durch eine `Permission Policy`, implizit durch {{Glossary("transient_activation", "transiente Aktivierung")}} oder durch einen anderen Mechanismus gewährt werden.

### Berechtigung widerrufen

Der Widerruf von Berechtigungen wird nicht durch die API verwaltet. Genauer gesagt wurde eine Methode [`Permissions.revoke()`](/de/docs/Web/API/Permissions/revoke) vorgeschlagen, aber inzwischen aus den Browsern entfernt, in denen sie implementiert war.

Benutzer können Berechtigungen für bestimmte Websites manuell über die Browsereinstellungen entfernen:

- **Firefox**: _Hamburger-Menü > Einstellungen > Datenschutz & Sicherheit > Berechtigungen_ (dann die **Einstellungen**-Schaltfläche für die betreffende Berechtigung auswählen).
- **Chrome**: _Hamburger-Menü > Einstellungen > Erweiterte Einstellungen anzeigen_. Im Abschnitt _Privatsphäre_ auf _Inhaltseinstellungen_ klicken. Im sich öffnenden Dialogfeld den Abschnitt _Standort_ finden und _Fragen, wenn eine Website…_ auswählen. Schließlich auf _Ausnahmen verwalten_ klicken und die Berechtigungen entfernen, die Sie den Webseiten erteilt haben.

### Berechtigungsbewusste APIs

Nicht der Berechtigungsstatus aller APIs kann mit der Permissions API abgefragt werden. Eine nicht abschließende Liste von berechtigungsbewussten APIs umfasst:

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
  - : Stellt die Kernfunktionalität der Permission API bereit, wie Methoden zum Abfragen und Widerrufen von Berechtigungen.
- [`PermissionStatus`](/de/docs/Web/API/PermissionStatus)
  - : Ermöglicht den Zugriff auf den aktuellen Status einer Berechtigung und einen Ereignishandler, um auf Änderungen im Berechtigungsstatus zu reagieren.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.permissions`](/de/docs/Web/API/Navigator/permissions) und [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) {{ReadOnlyInline}}
  - : Ermöglicht den Zugriff auf das [`Permissions`](/de/docs/Web/API/Permissions)-Objekt aus dem Hauptkontext und dem Worker-Kontext.

## Beispiele

Wir haben ein Beispiel namens Location Finder erstellt. Sie können [das Beispiel live ausführen](https://chrisdavidmills.github.io/location-finder-permissions-api/), [den Quellcode auf GitHub einsehen](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages) oder mehr darüber erfahren, wie es in unserem Artikel [Using the Permissions API](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API) funktioniert.

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
