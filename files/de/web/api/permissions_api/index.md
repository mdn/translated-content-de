---
title: Permissions API
slug: Web/API/Permissions_API
l10n:
  sourceCommit: 73ca80b86a348f88f51fdb8f9441c114b76e94f1
---

{{DefaultAPISidebar("Permissions API")}}{{AvailableInWorkers}}

Die **Permissions-API** bietet eine einheitliche programmiertechnische Möglichkeit, den Status von API-Berechtigungen abzufragen, die dem aktuellen Kontext, wie einer Webseite oder einem Worker, zugeordnet sind. Sie kann beispielsweise verwendet werden, um festzustellen, ob die Berechtigung zum Zugriff auf eine bestimmte Funktion oder API erteilt, verweigert oder spezifische Benutzerberechtigung erforderlich ist.

## Konzepte und Verwendung

Historisch gesehen handhaben unterschiedliche APIs ihre Berechtigungen auf inkonsistente Weise — zum Beispiel stellte die [Notifications API](/de/docs/Web/API/Notifications_API) ihre eigenen Methoden zum Anfordern von Berechtigungen und Überprüfen des Berechtigungsstatus bereit, während die [Geolocation API](/de/docs/Web/API/Geolocation) dies nicht tat. Die Permissions-API stellt die Werkzeuge bereit, mit denen Entwickler eine konsistente Benutzererfahrung für den Umgang mit Berechtigungen implementieren können.

Die Berechtigungen dieser API aggregieren effektiv alle Sicherheitsbeschränkungen für den Kontext, einschließlich der Anforderung, dass eine API in einem sicheren Kontext verwendet werden muss, [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)-Beschränkungen, die auf das Dokument angewendet werden, Anforderungen für Benutzerinteraktionen und Benutzeraufforderungen. Wenn eine API beispielsweise durch die Berechtigungspolitik eingeschränkt ist, wird die zurückgegebene Berechtigung als `denied` angegeben und der Benutzer wird nicht um Zugriff gebeten.

Die `permissions`-Eigenschaft wurde sowohl im Standard-Browsing-Kontext als auch im Worker-Kontext ([`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) — sodass Berechtigungsprüfungen in Workern verfügbar sind) auf dem [`Navigator`](/de/docs/Web/API/Navigator)-Objekt bereitgestellt und gibt ein [`Permissions`](/de/docs/Web/API/Permissions)-Objekt zurück, das Zugriff auf die Funktionalität der Permissions-API bietet.

Sobald Sie dieses Objekt haben, können Sie die Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwenden, um ein Promise zurückzugeben, das sich mit dem [`PermissionStatus`](/de/docs/Web/API/PermissionStatus) für eine bestimmte API auflöst.

### Berechtigung anfordern

Wenn der Berechtigungsstatus `prompt` ist, muss der Benutzer eine Aufforderung bestätigen, um Zugriff auf die Funktion zu gewähren.

Der Mechanismus, der diese Aufforderung auslöst, hängt von der spezifischen API ab — es ist nicht als Teil der Permissions-API definiert. Im Allgemeinen ist der Trigger der Aufruf einer Methode zum Zugreifen oder Öffnen der Funktion oder die Registrierung für Benachrichtigungen von der Funktion, die anschließend darauf zugreifen wird.

Beachten Sie, dass nicht alle Funktionen eine Aufforderung erfordern. Die Berechtigung könnte durch eine `Permission Policy`, implizit durch {{Glossary("transient_activation", "transient activation")}} oder durch einen anderen Mechanismus erteilt werden.

### Berechtigung widerrufen

Der Widerruf von Berechtigungen wird nicht durch die API verwaltet. Genauer gesagt, eine Methode [`Permissions.revoke()`](/de/docs/Web/API/Permissions/revoke) wurde vorgeschlagen, aber inzwischen aus den Browsern entfernt, in denen sie implementiert war.

Benutzer können die Berechtigungen für bestimmte Websites manuell über die Browsereinstellungen entfernen:

- **Firefox**: _Hamburger-Menü > Einstellungen > Datenschutz & Sicherheit > Berechtigungen_ (wählen Sie dann die **Einstellungen**-Schaltfläche für die betreffende Berechtigung aus).
- **Chrome**: _Hamburger-Menü > Einstellungen > Erweiterte Einstellungen anzeigen_. Im Abschnitt _Datenschutz_ klicken Sie auf _Inhaltseinstellungen_. In dem sich öffnenden Dialogfenster finden Sie den Abschnitt _Standort_ und wählen _Fragen, wenn eine Seite versucht, …_. Schließlich klicken Sie auf _Ausnahmen verwalten_ und entfernen die Berechtigungen, die Sie den für Sie interessanten Websites erteilt haben.

### Berechtigungsbewusste APIs

Nicht alle APIs' Berechtigungsstatus können mit der Permissions-API abgefragt werden. Eine nicht erschöpfende Liste von berechtigungsbewussten APIs umfasst:

- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API): `background-sync` (sollte immer erteilt werden)
- [Clipboard API](/de/docs/Web/API/Clipboard_API#security_considerations): `clipboard-read`, `clipboard-write`
- [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API): `compute-pressure`
- [Geolocation API](/de/docs/Web/API/Geolocation_API#security_considerations): `geolocation`
- [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API): `local-fonts`
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API): `microphone`, `camera`
- [Notifications API](/de/docs/Web/API/Notifications_API): `notifications`
- [Web-based Payment Handler API](/de/docs/Web/API/Web_Based_Payment_Handler_API): `payment-handler`
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
  - : Bietet die grundlegende Funktionalität der Permission-API, wie Methoden zum Abfragen und Widerrufen von Berechtigungen.
- [`PermissionStatus`](/de/docs/Web/API/PermissionStatus)
  - : Bietet Zugriff auf den aktuellen Status einer Berechtigung und einen Ereignishandler, um auf Änderungen im Berechtigungsstatus zu reagieren.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.permissions`](/de/docs/Web/API/Navigator/permissions) und [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) {{ReadOnlyInline}}
  - : Bietet Zugriff auf das [`Permissions`](/de/docs/Web/API/Permissions)-Objekt aus dem Hauptkontext bzw. dem Worker-Kontext.

## Beispiele

Wir haben ein Beispiel namens Standortfinder erstellt. Sie können [das Beispiel live ausführen](https://chrisdavidmills.github.io/location-finder-permissions-api/), [den Quellcode auf GitHub ansehen](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages) oder mehr darüber erfahren, wie es in unserem Artikel [Using the Permissions API](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API) funktioniert.

Das [`Permissions.query()`-Beispiel](/de/docs/Web/API/Permissions/query#test_support_for_various_permissions) zeigt auch Code, der die meisten Berechtigungen im aktuellen Browser testet und das Ergebnis protokolliert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Permissions API](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API)
- [Using the Permissions API to Detect How Often Users Allow or Deny Camera Access](https://blog.addpipe.com/using-permissions-api-to-detect-getusermedia-responses/)
- [`Notification.permission`](/de/docs/Web/API/Notification/permission_static)
- [Privacy, permissions, and information security](/de/docs/Web/Privacy)
