---
title: Permissions API
slug: Web/API/Permissions_API
l10n:
  sourceCommit: 4b33c650e27ddb5f82b6b0fc6f83c9a810eaca81
---

{{DefaultAPISidebar("Permissions API")}}{{AvailableInWorkers}}

Die **Permissions-API** bietet eine konsistente programmatische Möglichkeit, den Status von API-Berechtigungen abzufragen, die dem aktuellen Kontext, wie einer Webseite oder einem Worker, zugeordnet sind. Beispielsweise kann damit festgestellt werden, ob die Berechtigung zum Zugriff auf ein bestimmtes Feature oder eine API erteilt, verweigert oder eine spezifische Benutzerberechtigung erforderlich ist.

## Konzepte und Verwendung

Historisch gesehen handhaben verschiedene APIs ihre eigenen Berechtigungen inkonsistent – zum Beispiel stellte die [Notifications-API](/de/docs/Web/API/Notifications_API) eigene Methoden zum Anfordern von Berechtigungen und zum Überprüfen des Berechtigungsstatus bereit, während die [Geolocation-API](/de/docs/Web/API/Geolocation) dies nicht tat. Die Permissions-API bietet die Werkzeuge, die es Entwicklern ermöglichen, eine konsistente Benutzererfahrung im Umgang mit Berechtigungen umzusetzen.

Die Berechtigungen dieser API fassen alle Sicherheitsbeschränkungen für den Kontext zusammen, einschließlich der Anforderung, dass eine API in einem sicheren Kontext verwendet wird, und der [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)-Beschränkungen, die auf das Dokument angewendet werden, Anforderungen an die Benutzerinteraktion sowie Benutzereingabeaufforderungen. Wenn eine API beispielsweise durch eine Berechtigungspolitik eingeschränkt ist, wird die zurückgegebene Berechtigung als `denied` angegeben und der Benutzer wird nicht zur Zugriffsgewährung aufgefordert.

Die Eigenschaft `permissions` wurde sowohl im Standard-Browsing-Kontext als auch im Worker-Kontext auf das [`Navigator`](/de/docs/Web/API/Navigator)-Objekt gebracht ([`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) – Berechtigungsüberprüfungen sind also innerhalb von Workern verfügbar) und gibt ein [`Permissions`](/de/docs/Web/API/Permissions)-Objekt zurück, das Zugriff auf die Funktionen der Permissions-API bietet.

Sobald Sie dieses Objekt haben, können Sie die Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwenden, um einen Promise zurückzugeben, der mit dem [`PermissionStatus`](/de/docs/Web/API/PermissionStatus) für eine spezifische API aufgelöst wird.

### Berechtigung anfordern

Wenn der Berechtigungsstatus `prompt` ist, muss der Benutzer eine Eingabeaufforderung zur Gewährung des Zugriffs auf das Feature bestätigen.

Der Mechanismus, der diese Eingabeaufforderung auslöst, hängt von der spezifischen API ab – er ist nicht Teil der Permissions-API definiert. Im Allgemeinen wird der Auslöser durch Code hervorgerufen, der eine Methode aufruft, um auf das Feature zuzugreifen oder es zu öffnen, oder der sich für Benachrichtigungen von dem Feature registriert, das anschließend darauf zugreifen wird.

Beachten Sie, dass nicht alle Features eine Eingabeaufforderung erfordern. Die Berechtigung könnte durch eine `Permission Policy`, implizit durch {{Glossary("transient_activation", "transient activation")}} oder über einen anderen Mechanismus erteilt werden.

### Berechtigung widerrufen

Der Widerruf von Berechtigungen wird nicht von der API verwaltet. Genauer gesagt wurde eine Methode [`Permissions.revoke()`](/de/docs/Web/API/Permissions/revoke) vorgeschlagen, aber inzwischen aus den Browsern entfernt, in denen sie implementiert war.

Benutzer können Berechtigungen für bestimmte Websites manuell über die Browsereinstellungen entfernen:

- **Firefox**: _Hamburger-Menü > Einstellungen > Datenschutz & Sicherheit > Berechtigungen_ (dann die **Einstellungen**-Schaltfläche für die gewünschte Berechtigung auswählen).
- **Chrome**: _Hamburger-Menü > Einstellungen > Erweiterte Einstellungen anzeigen_. Im Abschnitt _Datenschutz_ klicken Sie auf _Inhaltseinstellungen_. Im resultierenden Dialogfeld finden Sie den Abschnitt _Standort_ und wählen _Fragen, wenn eine Website versucht, ..._. Schließlich auf _Ausnahmen verwalten_ klicken und die den Websites gewährten Berechtigungen, die Sie interessieren, entfernen.

### Berechtigungsbewusste APIs

Nicht alle APIs können ihre Berechtigungsstatus über die Permissions-API abfragen. Eine nicht erschöpfende Liste berechtigungsbewusster APIs umfasst:

- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API): `background-sync` (sollte immer gewährt sein)
- [Clipboard API](/de/docs/Web/API/Clipboard_API#security_considerations): `clipboard-read`, `clipboard-write`
- [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API): `compute-pressure`
- [Geolocation API](/de/docs/Web/API/Geolocation_API#security_considerations): `geolocation`
- [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API): `local-fonts`
- [Local Network Access](/de/docs/Web/Security/Defenses/Local_network_access): `local-network`, `loopback-network`. Die ältere Berechtigung `local-network-access` wird noch als Alias für die granulareren Entsprechungen unterstützt.
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
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API): `periodic-background-sync`
- [Window Management API](/de/docs/Web/API/Window_Management_API): `window-management`

## Schnittstellen

- [`Permissions`](/de/docs/Web/API/Permissions)
  - : Bietet die Kernfunktionalität der Permissions-API, wie Methoden zum Abfragen und Widerrufen von Berechtigungen.
- [`PermissionStatus`](/de/docs/Web/API/PermissionStatus)
  - : Bietet Zugriff auf den aktuellen Status einer Berechtigung und einen Ereignis-Handler zur Reaktion auf Änderungen des Berechtigungsstatus.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.permissions`](/de/docs/Web/API/Navigator/permissions) und [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) {{ReadOnlyInline}}
  - : Bietet Zugriff auf das [`Permissions`](/de/docs/Web/API/Permissions)-Objekt aus dem Hauptkontext bzw. Worker-Kontext.

## Beispiele

Wir haben ein Beispiel namens Location Finder erstellt. Sie können [das Beispiel live ausführen](https://chrisdavidmills.github.io/location-finder-permissions-api/), [den Quellcode auf GitHub ansehen](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages) oder mehr darüber lesen, wie es in unserem Artikel [Using the Permissions API](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API) funktioniert.

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
