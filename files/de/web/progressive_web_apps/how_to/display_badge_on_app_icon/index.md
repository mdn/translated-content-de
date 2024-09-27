---
title: Anzeigen eines Badges auf dem App-Symbol
slug: Web/Progressive_web_apps/How_to/Display_badge_on_app_icon
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PWASidebar}}

Anwendungen, die nativ für mobile und Desktop-Betriebssysteme entwickelt wurden, können Badges auf ihren App-Symbolen anzeigen, um Benutzer darüber zu informieren, dass neue Inhalte verfügbar sind. Beispielsweise kann eine E-Mail-Client-Anwendung die Gesamtzahl ungelesener Nachrichten in einem Badge anzeigen und diese Zahl aktualisieren, selbst wenn die App nicht läuft.

Hier ist ein Beispiel, das die Mail-Anwendung auf einem iOS-Gerät mit einem Badge in der oberen rechten Ecke zeigt:

![Der Dockbereich auf einem iPhone-Startbildschirm, der ein Badge auf dem Mail-App-Symbol zeigt](./mail-badge-ios.png)

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) können auch Badges auf ihren App-Symbolen anzeigen und aktualisieren.

Das Anzeigen und Aktualisieren eines Badges erfolgt über die [Badging API](/de/docs/Web/API/Badging_API). Sie können diese API vom [Service Worker](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) der App aufrufen, um das Badge anzuzeigen oder zu aktualisieren, selbst wenn die App nicht läuft.

## Unterstützung für Badges

App-Badges werden nur unterstützt, wenn eine PWA auf ihrem Host-Betriebssystem installiert ist. Badges erscheinen auf dem App-Symbol, das erst nach der Installation der App existiert.

> [!NOTE]
> Dieser Artikel konzentriert sich auf die Methoden [`Navigator.setAppBadge()`](/de/docs/Web/API/Navigator/setAppBadge) und [`Navigator.clearAppBadge()`](/de/docs/Web/API/Navigator/clearAppBadge) der Badging API und ignoriert die `Navigator.setClientBadge` und `Navigator.clearClientBadge`. Obwohl diese Methoden auch in der [Badging API Spezifikation](https://w3c.github.io/badging/) definiert sind, dienen sie der Anzeige von Badges auf Dokumenten, nicht auf Applikationssymbolen.

### Desktop-Unterstützung

Auf Desktop-Betriebssystemen werden Badges nur auf Windows und macOS unterstützt und nur, wenn die PWA von Chrome oder Edge installiert ist. Während die Badging API auf Chromium-basierten Browsern unter Linux unterstützt wird, werden Badges auf diesem Betriebssystem nicht angezeigt.

Safari und Firefox auf Desktop unterstützen die Badging API nicht und unterstützen nicht die Installation von PWAs.

### Mobile Unterstützung

Badges werden in Safari auf iOS und iPadOS ab iPadOS 16.4 unterstützt. Die Badging API wird auf Chromium-basierten Browsern, die auf Android laufen, nicht unterstützt. Stattdessen zeigt Android automatisch ein Badge auf dem App-Symbol der PWA an, wenn eine ungelesene Benachrichtigung vorhanden ist, so wie es auch für Android-Apps der Fall ist.

## Beste Praktiken für Badges

Bevor Sie lernen, wie Sie Badges verwenden, sollten Sie diese bewährten Praktiken beachten, um sicherzustellen, dass Ihre App Badges auf die effektivste und nützlichste Weise für Ihre Benutzer verwendet.

### Überprüfen Sie die Unterstützung

Um sicherzustellen, dass die Badging API im [Browser des Benutzers und Betriebssystem unterstützt wird](#unterstützung_für_badges), um das Auslösen eines JavaScript-Fehlers zu verhindern, überprüfen Sie die Unterstützung, bevor Sie die API verwenden:

```js
if (navigator.setAppBadge) {
  // The API is supported, use it.
} else {
  // The API is not supported, don't use it.
}
```

Verlassen Sie sich nicht allein auf Badges, um Benutzer über die Verfügbarkeit neuer Inhalte zu informieren. Browser, die die Badging API unterstützen, können auf Betriebssystemen installiert sein, die die Anzeige eines Badges nicht unterstützen. Zum Beispiel wird, obwohl Chrome die Badging API unterstützt, auf installierten Applikationssymbolen unter Linux kein Badge angezeigt.

### Fordern Sie Benachrichtigungsberechtigungen für iOS und/oder iPadOS an

Während Benachrichtigungs-Badges auf iOS und iPadOS unterstützt werden, erscheinen Badges nicht, bis der Anwendung Benachrichtigungsberechtigungen erteilt werden. Um Benachrichtigungsberechtigungen anzufordern, rufen Sie die Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API#getting_permission) auf:

```js
Notification.requestPermission().then((result) => {
  console.log(result);
});
```

Optional können Sie überprüfen, ob ein Benutzer zuvor Benachrichtigungsberechtigungen erteilt hat, indem Sie die [Permissions API](/de/docs/Web/API/Permissions_API) verwenden.

### Verwenden Sie Badges sparsam

Wie Benachrichtigungen können Badges eine sehr effektive Möglichkeit sein, Benutzer mit Ihrer App wieder zu engagieren, wenn sie sparsam eingesetzt werden. Stellen Sie sicher, dass Sie Badges nur verwenden, um neue Inhalte anzuzeigen, die für Ihre Benutzer wichtig sind.

### Aktualisieren Sie Badges in Echtzeit

Stellen Sie sicher, dass Sie das Badge Ihrer Anwendung in Echtzeit aktualisieren. Das bedeutet, dass Sie die Anzahl der Badges so aktualisieren, dass sie widerspiegelt, wie viele neue Elemente tatsächlich noch übrig sind, damit der Benutzer sie konsumieren kann, und das App-Badge löschen, wenn keine neuen Elemente vorhanden sind.

Beispielsweise sollte ein E-Mail-Client, wenn er neue Nachrichten im Hintergrund erhält, sein Badge aktualisieren, um die korrekte Anzahl von ungelesenen Nachrichten im Posteingang anzuzeigen, möglicherweise Nachrichten aus anderen Ordnern wie einem Spam-Ordner herauszufiltern. Es ist möglich, [Badges im Hintergrund zu aktualisieren](#aktualisieren_des_badges_im_hintergrund), indem die Methode `navigator.setAppBadge()` von einem Service Worker verwendet wird.

Sobald der Benutzer die App startet und Nachrichten zu lesen beginnt, sollte die E-Mail-Client-App ihr Badge entsprechend aktualisieren, indem `navigator.setAppBadge()` mit der neuen Anzahl ungelesener Nachrichten aufgerufen wird oder `navigator.clearAppBadge()`, wenn keine ungelesenen Nachrichten mehr vorhanden sind.

### Heben Sie neue Inhalte in der App hervor

Wenn Ihre App neue Inhalte erhält und ein Badge auf dem App-Symbol hinzufügt, sollten Sie sicherstellen, dass diese neuen Inhalte für die Benutzer hervorgehoben werden, wenn sie die App starten.

Beispielsweise, wenn eine E-Mail-Client-App die Anzahl der ungelesenen Nachrichten auf dem App-Symbol-Button anzeigt, sollten diese Nachrichten fett oder auf irgendeine Weise hervorgehoben werden, wenn die App geöffnet wird.

## Anzeigen und Aktualisieren des Badges

Um ein Badge auf dem App-Symbol Ihrer PWA anzuzeigen, das die Anzahl ungelesener Nachrichten zeigt, verwenden Sie die Methode [`Navigator.setAppBadge()`](/de/docs/Web/API/Navigator/setAppBadge):

```js
// Check for support first.
if (navigator.setAppBadge) {
  // Display the number of unread messages.
  navigator.setAppBadge(numberOfUnreadMessages);
}
```

Sie können auch ein leeres Badge mit derselben Methode anzeigen, indem Sie den Zählerparameter weglassen oder ihn auf `0` setzen:

```js
// Check for support first.
if (navigator.setAppBadge) {
  // Just display the badge, with no number in it.
  navigator.setAppBadge();
}
```

Um das Badge auf dem App-Symbol zu entfernen, verwenden Sie die Methode [`Navigator.clearAppBadge()`](/de/docs/Web/API/Navigator/clearAppBadge):

```js
// Check for support first.
if (navigator.clearAppBadge) {
  // Remove the badge on the app icon.
  navigator.clearAppBadge();
}
```

## Aktualisieren des Badges im Hintergrund

Badges können nützlich sein, um Benutzer wieder mit Ihrer App zu engagieren, wenn sie die App nicht bereits nutzen. Das bedeutet, dass Ihre App in der Lage sein muss, ihr Badge zu aktualisieren, auch wenn sie nicht läuft.

PWAs können die folgenden Mechanismen verwenden, um im Hintergrund zu aktualisieren und ihre Badges anzuzeigen, zu aktualisieren oder zu verbergen:

- [Push API](/de/docs/Web/API/Push_API)
  - : PWAs können diese API verwenden, um Nachrichten von einem Server zu empfangen, selbst wenn die App nicht läuft. Die meisten Browser erfordern, dass eine Benachrichtigung angezeigt wird, wann immer eine Push-Nachricht empfangen wird. Dies ist für einige Anwendungsfälle in Ordnung (z. B. wenn eine Benachrichtigung angezeigt wird, wenn das Badge aktualisiert wird), macht es jedoch unmöglich, das Badge subtil zu aktualisieren, ohne eine Benachrichtigung anzuzeigen. Darüber hinaus müssen Benutzer Ihrer Seite Benachrichtigungsberechtigungen erteilen, um Push-Nachrichten zu empfangen. Weitere Informationen finden Sie in der [ServiceWorkerRegistration: showNotification() Methode](/de/docs/Web/API/ServiceWorkerRegistration/showNotification).
- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - : PWAs können diese API verwenden, um Code im Hintergrund auszuführen, wenn eine stabile Netzwerkverbindung erkannt wird.
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : PWAs können diese API verwenden, um Code im Hintergrund in periodischen Zeitabständen auszuführen.

Hier ist ein Beispiel für einen Service Worker-Code, der zeigt, wie man auf die Push-Nachrichten eines Servers hört und das App-Badge aktualisiert, um eine Anzahl ungelesener Nachrichten anzuzeigen:

```js
// Listen to "push" events in the service worker.
self.addEventListener("push", (event) => {
  // Extract the unread count from the push message data.
  const message = event.data.json();
  const unreadCount = message.unreadCount;

  // Set or clear the badge.
  if (navigator.setAppBadge) {
    if (unreadCount && unreadCount > 0) {
      navigator.setAppBadge(unreadCount);
    } else {
      navigator.clearAppBadge();
    }
  }
  // It's obligatory to show the notification to the user.
  self.registration.showNotification(`${unreadCount} unread messages`);
});
```

## Siehe auch

- [Anleitung zur Erstellung eines App-Badges](https://web.dev/patterns/web-apps/badges/)
- [Badging für App-Symbole](https://developer.chrome.com/docs/capabilities/web-apis/badging-api)
- [Benutzer mit Badges, Benachrichtigungen und Push-Nachrichten wieder engagieren](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/notifications-badges)
- [Codelab: Erstellen eines Push-Benachrichtigungsservers](https://web.dev/articles/push-notifications-server-codelab)
