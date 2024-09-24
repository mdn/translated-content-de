---
title: Berechtigungen-API
slug: Web/API/Permissions_API
l10n:
  sourceCommit: 3fde60e07c74ad4954a0c77fdd80958c7d07f088
---

{{DefaultAPISidebar("Permissions API")}}{{AvailableInWorkers}}

Die **Berechtigungen-API** bietet eine konsistente programmatische Möglichkeit, den Status von API-Berechtigungen abzufragen, die dem aktuellen Kontext zugewiesen sind, wie zum Beispiel einer Webseite oder einem Worker. Sie kann verwendet werden, um festzustellen, ob die Erlaubnis zum Zugriff auf eine bestimmte Funktion oder API erteilt, verweigert oder eine spezifische Benutzererlaubnis erforderlich ist.

## Konzepte und Verwendung

Historisch gesehen handhaben unterschiedliche APIs ihre eigenen Berechtigungen inkonsistent — zum Beispiel hat die [Benachrichtigungen-API](/de/docs/Web/API/Notifications_API) ihre eigenen Methoden zur Anforderung von Berechtigungen und zur Überprüfung des Berechtigungsstatus bereitgestellt, während die [Geolocation-API](/de/docs/Web/API/Geolocation) dies nicht tat. Die Berechtigungen-API bietet Entwicklern Werkzeuge, um eine konsistente Benutzererfahrung im Umgang mit Berechtigungen zu implementieren.

Die Berechtigungen dieser API fassen effektiv alle Sicherheitsbeschränkungen für den Kontext zusammen, einschließlich jeglicher Anforderung, dass eine API in einem sicheren Kontext verwendet wird, [Permissions-Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy)-Beschränkungen, die auf das Dokument angewendet werden, Anforderungen an Benutzerinteraktion und Benutzeraufforderungen. Zum Beispiel, wenn eine API durch eine Berechtigungspolitik eingeschränkt ist, würde die zurückgegebene Berechtigung `denied` sein und der Benutzer würde nicht um Zugang gebeten.

Die `permissions`-Eigenschaft wurde sowohl im Standard-Browsing-Kontext als auch im Worker-Kontext ({{domxref("WorkerNavigator")}} — sodass Berechtigungsprüfungen innerhalb von Workern verfügbar sind) auf dem {{domxref("Navigator")}}-Objekt verfügbar gemacht und gibt ein {{domxref("Permissions")}}-Objekt zurück, das Zugriff auf die Funktionalität der Berechtigungen-API bietet.

Sobald Sie dieses Objekt haben, können Sie die Methode {{domxref("Permissions.query()")}} verwenden, um ein Versprechen zurückzugeben, das sich mit dem {{domxref("PermissionStatus")}} für eine spezifische API auflöst.

### Berechtigung anfordern

Wenn der Berechtigungsstatus `prompt` ist, muss der Benutzer eine Aufforderung zur Gewährung des Zugriffs auf die Funktion bestätigen.

Der Mechanismus, der diese Aufforderung auslöst, hängt von der spezifischen API ab — er ist nicht als Teil der Berechtigungen-API definiert. Im Allgemeinen wird der Trigger Code sein, der eine Methode aufruft, um auf die Funktion zuzugreifen oder diese zu öffnen oder der sich für Benachrichtigungen von der Funktion registriert, die dann darauf zugreifen wird.

Beachten Sie, dass nicht alle Funktionen eine Aufforderung erfordern. Die Erlaubnis könnte von einer `Permission Policy` erteilt werden, implizit durch {{glossary("transient activation")}}, oder über einen anderen Mechanismus.

### Berechtigung widerrufen

Der Widerruf von Berechtigungen wird nicht von der API verwaltet. Genauer gesagt wurde eine Methode {{domxref("Permissions.revoke()")}} vorgeschlagen, aber inzwischen aus den Browsern entfernt, in denen sie implementiert war.

Benutzer können Berechtigungen für bestimmte Websites manuell über die Browsereinstellungen entfernen:

- **Firefox**: _Hamburger Menü > Einstellungen > Datenschutz & Sicherheit > Berechtigungen_ (dann die **Einstellungen**-Schaltfläche für die Berechtigung von Interesse auswählen).
- **Chrome**: _Hamburger Menü > Einstellungen > Erweiterte Einstellungen anzeigen_. Im Abschnitt _Datenschutz_ auf _Inhaltseinstellungen_ klicken. Im darauf folgenden Dialog den Abschnitt _Standort_ finden und _Fragen, wenn eine Seite versucht, ..._ auswählen. Schließlich auf _Ausnahmen verwalten_ klicken und die Berechtigungen, die Sie den gewünschten Seiten erteilt haben, entfernen.

### Berechtigungsbewusste APIs

Nicht bei allen APIs kann der Berechtigungsstatus über die Berechtigungen-API abgefragt werden. Eine nicht abschließende Liste von berechtigungsbewussten APIs umfasst:

- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API): `background-sync` (sollte immer erteilt werden)
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

- {{domxref("Permissions")}}
  - : Bietet die Kernfunktionalität der Berechtigungs-API, wie Methoden zum Abfragen und Widerrufen von Berechtigungen.
- {{domxref("PermissionStatus")}}
  - : Bietet Zugriff auf den aktuellen Status einer Berechtigung und einen Ereignishandler, um auf Änderungen im Berechtigungsstatus zu reagieren.

### Erweiterungen anderer Schnittstellen

- {{domxref("Navigator.permissions")}} und {{domxref("WorkerNavigator.permissions")}} {{ReadOnlyInline}}
  - : Bietet Zugriff auf das {{domxref("Permissions")}}-Objekt aus dem Hauptkontext bzw. dem Worker-Kontext.

## Beispiele

Wir haben ein einfaches Beispiel namens Location Finder erstellt. Sie können [das Beispiel live ausführen](https://chrisdavidmills.github.io/location-finder-permissions-api/), [den Quellcode auf GitHub anzeigen](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages) oder mehr darüber lesen, wie es funktioniert, in unserem Artikel [Verwendung der Berechtigungen-API](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API).

Das Beispiel [`Permissions.query()`](/de/docs/Web/API/Permissions/query#test_support_for_various_permissions) zeigt ebenfalls Code, der die meisten Berechtigungen im aktuellen Browser testet und das Ergebnis protokolliert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Berechtigungen-API](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API)
- [Verwendung der Berechtigungen-API, um zu erkennen, wie oft Benutzer den Kamera-Zugriff erlauben oder verweigern](https://blog.addpipe.com/using-permissions-api-to-detect-getusermedia-responses/)
- {{DOMxref("Notification.permission_static", "Notification.permission")}}
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
