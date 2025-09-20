---
title: Permissions API
slug: Web/API/Permissions_API
l10n:
  sourceCommit: 01658f45c6d90bd1098ad02f42fd32e95b59beaf
---

{{DefaultAPISidebar("Permissions API")}}{{AvailableInWorkers}}

Die **Permissions API** bietet eine konsistente programmatische Möglichkeit, den Status von API-Berechtigungen in dem aktuellen Kontext abzufragen, wie z. B. auf einer Webseite oder einem Worker. Sie kann beispielsweise verwendet werden, um festzustellen, ob die Berechtigung für den Zugriff auf eine bestimmte Funktion oder API erteilt, verweigert oder spezifische Benutzerberechtigung erforderlich ist.

## Konzepte und Nutzung

Historisch gesehen behandelten verschiedene APIs ihre eigenen Berechtigungen inkonsistent — zum Beispiel bot die [Notifications API](/de/docs/Web/API/Notifications_API) ihre eigenen Methoden zur Anforderung von Berechtigungen und zur Überprüfung des Berechtigungsstatus an, während die [Geolocation API](/de/docs/Web/API/Geolocation) dies nicht tat. Die Permissions API bietet die Werkzeuge, um Entwicklern zu ermöglichen, eine konsistente Benutzererfahrung im Umgang mit Berechtigungen zu implementieren.

Die Berechtigungen dieser API aggregieren effektiv alle Sicherheitsbeschränkungen für den Kontext, einschließlich der Anforderung, dass eine API in einem sicheren Kontext verwendet werden muss, [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)-Beschränkungen, die auf das Dokument angewendet werden, Anforderungen für Benutzerinteraktion und Benutzeraufforderungen. So würde beispielsweise, wenn eine API durch Berechtigungsrichtlinien eingeschränkt ist, die zurückgegebene Berechtigung `denied` sein und der Benutzer würde nicht aufgefordert, einen Zugriff zu erlauben.

Die `permissions`-Eigenschaft wurde sowohl im Standard-Browsing-Kontext als auch im Worker-Kontext ([`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) — so sind Berechtigungsprüfungen auch innerhalb von Workern verfügbar) im [`Navigator`](/de/docs/Web/API/Navigator)-Objekt verfügbar gemacht und liefert ein [`Permissions`](/de/docs/Web/API/Permissions)-Objekt, das Zugriff auf die Funktionalität der Permissions API bietet.

Sobald Sie dieses Objekt haben, können Sie die Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwenden, um ein Promise zurückzugeben, das mit dem [`PermissionStatus`](/de/docs/Web/API/PermissionStatus) für eine bestimmte API erfüllt wird.

### Anfordern von Berechtigungen

Wenn der Berechtigungsstatus `prompt` lautet, muss der Benutzer eine Aufforderung anerkennen, um Zugriff auf die Funktion zu gewähren.

Der Mechanismus, der diese Aufforderung auslöst, hängt von der spezifischen API ab — er wird nicht als Teil der Permissions API definiert. Im Allgemeinen wird der Auslöser durch Code verursacht, der eine Methode aufruft, um auf die Funktion zuzugreifen oder sie zu öffnen, oder der Anmeldungen für Benachrichtigungen von der Funktion mit sich führt, die sie anschließend darauf zugreift.

Beachten Sie, dass nicht alle Funktionen eine Aufforderung erfordern. Die Berechtigung kann durch eine `Permission Policy`, implizit durch {{Glossary("transient_activation", "transient activation")}}, oder über einen anderen Mechanismus gewährt werden.

### Zurückziehen von Berechtigungen

Das Zurückziehen von Berechtigungen wird nicht von der API verwaltet. Genauer gesagt, eine Methode [`Permissions.revoke()`](/de/docs/Web/API/Permissions/revoke) wurde vorgeschlagen, aber seither in denjenigen Browsern entfernt, in denen sie implementiert war.

Benutzer können die Berechtigung für bestimmte Websites manuell über die Browsereinstellungen entfernen:

- **Firefox**: _Hamburger-Menü > Einstellungen > Datenschutz & Sicherheit > Berechtigungen_ (dann den **Einstellungen**-Button für die jeweilige Berechtigung auswählen).
- **Chrome**: _Hamburger-Menü > Einstellungen > Erweiterte Einstellungen anzeigen_. Im Bereich _Datenschutz_ auf _Inhaltseinstellungen_ klicken. In dem erscheinenden Dialogfeld den Abschnitt _Standort_ finden und _Fragen, wenn eine Website versucht..._ auswählen. Schließlich auf _Ausnahmen verwalten_ klicken und die Berechtigungen entfernen, die Sie den betreffenden Websites gewährt haben.

### Berechtigungsbewusste APIs

Nicht der Berechtigungsstatus aller APIs kann mithilfe der Permissions API abgefragt werden. Eine nicht erschöpfende Liste von berechtigungsbewussten APIs umfasst:

- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API): `background-sync` (sollte immer gewährt werden)
- [Clipboard API](/de/docs/Web/API/Clipboard_API#security_considerations): `clipboard-read`, `clipboard-write`
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
  - : Bietet die Kernfunktionalität der Permissions API, wie Methoden zum Abfragen und Zurückziehen von Berechtigungen.
- [`PermissionStatus`](/de/docs/Web/API/PermissionStatus)
  - : Bietet Zugriff auf den aktuellen Status einer Berechtigung und einen Ereignishandler, um auf Änderungen des Berechtigungsstatus zu reagieren.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.permissions`](/de/docs/Web/API/Navigator/permissions) und [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) {{ReadOnlyInline}}
  - : Bietet Zugriff auf das [`Permissions`](/de/docs/Web/API/Permissions)-Objekt aus dem Hauptkontext bzw. dem Worker-Kontext.

## Beispiele

Wir haben ein Beispiel mit dem Namen Location Finder erstellt. Sie können [das Beispiel live ausführen](https://chrisdavidmills.github.io/location-finder-permissions-api/), [den Quellcode auf GitHub ansehen](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages) oder mehr darüber erfahren, wie es funktioniert, in unserem Artikel [Using the Permissions API](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API).

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
