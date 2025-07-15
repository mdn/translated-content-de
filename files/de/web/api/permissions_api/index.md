---
title: Permissions API
slug: Web/API/Permissions_API
l10n:
  sourceCommit: 83a92f1eaf27dabf71beec6c548afb03171aa194
---

{{DefaultAPISidebar("Permissions API")}}{{AvailableInWorkers}}

Die **Permissions-API** bietet eine konsistente programmatische Methode, um den Status von API-Berechtigungen abzufragen, die dem aktuellen Kontext wie einer Webseite oder einem Worker zugewiesen sind. Zum Beispiel kann sie verwendet werden, um festzustellen, ob die Berechtigung für den Zugriff auf eine bestimmte Funktion oder API erteilt, verweigert oder spezifische Benutzerberechtigung erforderlich ist.

## Konzepte und Verwendung

Historisch gesehen handhaben verschiedene APIs ihre Berechtigungen inkonsistent – zum Beispiel bot die [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API) ihre eigenen Methoden zur Anforderung von Berechtigungen und zum Überprüfen des Berechtigungsstatus, während die [Geolocation-API](/de/docs/Web/API/Geolocation) dies nicht tat. Die Permissions-API stellt Entwicklern die Werkzeuge zur Verfügung, um eine konsistente Benutzererfahrung im Umgang mit Berechtigungen zu implementieren.

Die Berechtigungen dieser API aggregieren effektiv alle Sicherheitsbeschränkungen für den Kontext, einschließlich der Anforderung, dass eine API in einem sicheren Kontext verwendet wird, der auf das Dokument angewandten [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)-Beschränkungen, Anforderungen an die Benutzerinteraktion und Benutzereingaben. Wenn eine API beispielsweise durch Berechtigungsrichtlinien eingeschränkt ist, würde die zurückgegebene Berechtigung `denied` sein und der Benutzer würde nicht um Zugriff gebeten.

Die `permissions`-Eigenschaft wurde sowohl im Standard-Browsing-Kontext als auch im Worker-Kontext ([`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) – sodass Berechtigungsprüfungen innerhalb von Workern verfügbar sind) auf dem [`Navigator`](/de/docs/Web/API/Navigator)-Objekt verfügbar gemacht und gibt ein [`Permissions`](/de/docs/Web/API/Permissions)-Objekt zurück, das Zugriff auf die Funktionalität der Permissions-API bietet.

Sobald Sie dieses Objekt haben, können Sie die Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwenden, um ein `Promise` zurückzugeben, das mit dem [`PermissionStatus`](/de/docs/Web/API/PermissionStatus) für eine bestimmte API aufgelöst wird.

### Berechtigung anfordern

Wenn der Berechtigungsstatus auf `prompt` gesetzt ist, muss der Benutzer eine Eingabe bestätigen, um Zugang zur Funktion zu gewähren.

Der Mechanismus, der diese Aufforderung auslöst, hängt von der spezifischen API ab – er ist nicht als Teil der Permissions-API definiert. Im Allgemeinen wird der Auslöser durch Code ausgelöst, der eine Methode aufruft, um auf die Funktion zuzugreifen oder sie zu öffnen, oder der sich für Benachrichtigungen von der Funktion registriert, die sie anschließend aufruft.

Beachten Sie, dass nicht alle Funktionen eine Eingabeaufforderung erfordern. Die Berechtigung könnte durch eine `Permission Policy`, implizit durch {{Glossary("transient_activation", "transient activation")}} oder durch einen anderen Mechanismus gewährt werden.

### Berechtigung widerrufen

Das Widerrufen von Berechtigungen wird nicht von der API verwaltet. Genauer gesagt wurde eine Methode [`Permissions.revoke()`](/de/docs/Web/API/Permissions/revoke) vorgeschlagen, aber in den Browsern, in denen sie implementiert wurde, wieder entfernt.

Benutzer können Berechtigungen für bestimmte Sites manuell über die Browsereinstellungen entfernen:

- **Firefox**: _Hamburger-Menü > Einstellungen > Datenschutz & Sicherheit > Berechtigungen_ (dann die **Einstellungen**-Schaltfläche für die interessierende Berechtigung auswählen).
- **Chrome**: _Hamburger-Menü > Einstellungen > Erweiterte Einstellungen anzeigen_. Im Abschnitt _Datenschutz_ auf _Inhaltseinstellungen_ klicken. Im resultierenden Dialogfeld den Abschnitt _Standort_ finden und _Fragen, wenn eine Seite versucht…_ auswählen. Schließlich auf _Ausnahmen verwalten_ klicken und die Berechtigungen entfernen, die Sie den Sites gewährt haben, die Sie interessieren.

### Berechtigungsbewusste APIs

Nicht der Berechtigungsstatus aller APIs kann mit der Permissions-API abgefragt werden. Eine nicht erschöpfende Liste von berechtigungsbewussten APIs umfasst:

- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API): `background-sync` (sollte immer gewährt werden)
- [Clipboard_API](/de/docs/Web/API/Clipboard_API#security_considerations): `clipboard-read`, `clipboard-write`
- [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API): `compute-pressure`
- [Geolocation API](/de/docs/Web/API/Geolocation_API#security_considerations): `geolocation`
- [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API): `local-fonts`
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API): `microphone`, `camera`
- [Notifications API](/de/docs/Web/API/Notifications_API): `notifications`
- [Payment Handler API](/de/docs/Web/API/Payment_Handler_API): `payment-handler`
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
  - : Bietet die Kernfunktionalität der Permissions-API, wie Methoden zum Abfragen und Widerrufen von Berechtigungen.
- [`PermissionStatus`](/de/docs/Web/API/PermissionStatus)
  - : Bietet Zugriff auf den aktuellen Status einer Berechtigung und einen Ereignishandler, um auf Änderungen des Berechtigungsstatus zu reagieren.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.permissions`](/de/docs/Web/API/Navigator/permissions) und [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) {{ReadOnlyInline}}
  - : Bietet Zugriff auf das [`Permissions`](/de/docs/Web/API/Permissions)-Objekt aus dem Haupt- und Worker-Kontext.

## Beispiele

Wir haben ein Beispiel namens Location Finder erstellt. Sie können das Beispiel [live ausführen](https://chrisdavidmills.github.io/location-finder-permissions-api/), [den Quellcode auf GitHub ansehen](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages) oder mehr darüber lesen, wie es in unserem Artikel [Die Permissions-API verwenden](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API) funktioniert.

Das Beispiel zu [`Permissions.query()`](/de/docs/Web/API/Permissions/query#test_support_for_various_permissions) zeigt auch Code, der die meisten Berechtigungen im aktuellen Browser überprüft und das Ergebnis protokolliert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die Permissions-API verwenden](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API)
- [Die Permissions-API verwenden, um zu ermitteln, wie oft Benutzer den Zugriff auf die Kamera erlauben oder verweigern](https://blog.addpipe.com/using-permissions-api-to-detect-getusermedia-responses/)
- [`Notification.permission`](/de/docs/Web/API/Notification/permission_static)
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
