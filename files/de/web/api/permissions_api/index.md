---
title: Permissions API
slug: Web/API/Permissions_API
l10n:
  sourceCommit: 75016e5d37ecff3b11de4c2ef6665178f654797e
---

{{DefaultAPISidebar("Permissions API")}}{{AvailableInWorkers}}

Die **Permissions API** bietet eine einheitliche programmatische Methode, um den Status von API-Berechtigungen im aktuellen Kontext, wie einer Webseite oder einem Worker, abzufragen. Zum Beispiel kann überprüft werden, ob die Berechtigung zur Nutzung einer bestimmten Funktion oder API erteilt, verweigert oder eine spezielle Benutzererlaubnis erforderlich ist.

## Konzepte und Nutzung

Historisch gesehen haben verschiedene APIs ihre Berechtigungen inkonsistent gehandhabt – zum Beispiel bot die [Notifications API](/de/docs/Web/API/Notifications_API) eigene Methoden zur Anforderung von Berechtigungen und zur Überprüfung des Berechtigungsstatus, während die [Geolocation API](/de/docs/Web/API/Geolocation) dies nicht tat. Die Permissions API bietet Tools, die es Entwicklern ermöglichen, eine konsistente Benutzererfahrung bei der Arbeit mit Berechtigungen zu implementieren.

Die Berechtigungen dieser API fassen effektiv alle Sicherheitsbeschränkungen für den Kontext zusammen, einschließlich jedweder Anforderung, dass eine API in einem sicheren Kontext verwendet werden muss, [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)-Beschränkungen, die auf das Dokument angewendet werden, Anforderungen für Benutzerinteraktionen und Benutzeraufforderungen. Wenn eine API beispielsweise durch eine Permissions-Policy eingeschränkt ist, wird die zurückgegebene Berechtigung `denied` sein und der Benutzer wird nicht zur Gewährung des Zugriffs aufgefordert.

Die `permissions`-Eigenschaft steht sowohl im Standard-Browsing-Kontext als auch im Worker-Kontext auf dem [`Navigator`](/de/docs/Web/API/Navigator)-Objekt zur Verfügung ([`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) – somit sind Berechtigungsprüfungen innerhalb von Workern möglich) und gibt ein [`Permissions`](/de/docs/Web/API/Permissions)-Objekt zurück, das Zugriff auf die Funktionalität der Permissions API bietet.

Sobald Sie dieses Objekt erhalten haben, können Sie die Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwenden, um ein Versprechen zurückzugeben, das mit dem [`PermissionStatus`](/de/docs/Web/API/PermissionStatus) für eine bestimmte API aufgelöst wird.

### Berechtigung anfordern

Wenn der Berechtigungsstatus `prompt` ist, muss der Benutzer eine Aufforderung zur Gewährung des Zugriffs auf die Funktion bestätigen.

Der Mechanismus, der diese Aufforderung auslöst, hängt von der spezifischen API ab – er ist nicht als Teil der Permissions API definiert. Im Allgemeinen wird der Auslöser durch den Aufruf einer Methode, die auf die Funktion zugreift oder diese öffnet, oder durch das Registrieren für Benachrichtigungen von der Funktion, die anschließend darauf zugreifen wird, ausgelöst.

Beachten Sie, dass nicht alle Funktionen eine Aufforderung erfordern. Berechtigungen können durch eine `Permission Policy`, implizit durch {{Glossary("transient_activation", "transient activation")}} oder durch irgendeinen anderen Mechanismus gewährt werden.

### Berechtigung widerrufen

Der Widerruf von Berechtigungen wird nicht von der API verwaltet. Genauer gesagt, eine Methode [`Permissions.revoke()`](/de/docs/Web/API/Permissions/revoke) wurde vorgeschlagen, aber inzwischen in den Browsern, in denen sie implementiert war, entfernt.

Benutzer können Berechtigungen für bestimmte Websites manuell über die Browsereinstellungen entfernen:

- **Firefox**: _Hamburger-Menü > Einstellungen > Datenschutz & Sicherheit > Berechtigungen_ (dann die **Einstellungen**-Taste für die entsprechende Berechtigung auswählen).
- **Chrome**: _Hamburger-Menü > Einstellungen > Erweiterte Einstellungen anzeigen_. Im Abschnitt _Datenschutz_ auf _Inhaltseinstellungen_ klicken. Im erscheinenden Dialog im Abschnitt _Standort_ die Option _Fragen, wenn eine Seite..._ wählen. Schließlich auf _Ausnahmen verwalten_ klicken und die Berechtigungen entfernen, die Sie den interessierten Seiten erteilt haben.

### Berechtigungsbewusste APIs

Nicht alle APIs’ Berechtigungsstatus können über die Permissions API abgefragt werden. Eine nicht vollständige Liste berechtigungsbewusster APIs beinhaltet:

- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API): `background-sync` (sollte immer gewährt sein)
- [Clipboard API](/de/docs/Web/API/Clipboard_API#security_considerations): `clipboard-read`, `clipboard-write`
- [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API): `compute-pressure`
- [Geolocation API](/de/docs/Web/API/Geolocation_API#security_considerations): `geolocation`
- [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API): `local-fonts`
- [Local Network Access](/de/docs/Web/Security/Defenses/Local_network_access): `local-network`, `loopback-network`. Die ältere Berechtigung `local-network-access` wird weiterhin als Alias für die genaueren Äquivalente unterstützt.
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
  - : Bietet die Kernfunktionalität der Permission API, wie Methoden zur Abfrage und zum Widerruf von Berechtigungen.
- [`PermissionStatus`](/de/docs/Web/API/PermissionStatus)
  - : Bietet Zugriff auf den aktuellen Status einer Berechtigung und einen Ereignishandler, um auf Änderungen im Berechtigungsstatus zu reagieren.

### Erweiterungen anderer Schnittstellen

- [`Navigator.permissions`](/de/docs/Web/API/Navigator/permissions) und [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions) {{ReadOnlyInline}}
  - : Bietet Zugriff auf das [`Permissions`](/de/docs/Web/API/Permissions)-Objekt aus dem Hauptkontext und dem Worker-Kontext.

## Beispiele

Wir haben ein Beispiel mit dem Namen Location Finder erstellt. Sie können [das Beispiel live ausführen](https://chrisdavidmills.github.io/location-finder-permissions-api/), [den Quellcode auf GitHub anzeigen](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages) oder mehr darüber erfahren, wie es funktioniert, in unserem Artikel [Using the Permissions API](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API).

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
