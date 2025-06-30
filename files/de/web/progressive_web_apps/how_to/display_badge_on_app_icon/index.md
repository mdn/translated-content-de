---
title: Anzeige eines Badges auf dem App-Symbol
slug: Web/Progressive_web_apps/How_to/Display_badge_on_app_icon
l10n:
  sourceCommit: 26f9fbee05fb92b584d44fba4359e86796484aa6
---

Apps, die nativ auf mobilen und Desktop-Betriebssystemen laufen, können Badges auf ihren App-Symbolen anzeigen, um Benutzer darüber zu informieren, dass neue Inhalte verfügbar sind. Ein E-Mail-Client kann zum Beispiel die Gesamtanzahl ungelesener Nachrichten in einem Badge anzeigen und diese Zahl aktualisieren, auch wenn die App nicht läuft.

Hier ist ein Beispiel, das die Mail-Anwendung auf einem iOS-Gerät mit einem Badge in der oberen rechten Ecke zeigt:

![Der Dock-Bereich auf einem iPhone-Startbildschirm, zeigt ein Badge auf dem Mail-App-Symbol](./mail-badge-ios.png)

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) können ebenso Badges auf ihren App-Symbolen anzeigen und aktualisieren.

Die Anzeige und Aktualisierung eines Badges erfolgt mithilfe der [Badging API](/de/docs/Web/API/Badging_API). Diese API kann von dem [Service Worker](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) der App aufgerufen werden, um den Badge anzuzeigen oder zu aktualisieren, selbst wenn die App nicht läuft.

## Unterstützung für Badges

App-Badges werden nur unterstützt, wenn eine PWA auf ihrem Host-Betriebssystem installiert ist. Badges erscheinen auf dem App-Symbol, das nur vorhanden ist, nachdem die App installiert wurde.

> [!NOTE]
> Dieser Artikel konzentriert sich auf die Methoden [`Navigator.setAppBadge()`](/de/docs/Web/API/Navigator/setAppBadge) und [`Navigator.clearAppBadge()`](/de/docs/Web/API/Navigator/clearAppBadge) aus der Badging API und ignoriert `Navigator.setClientBadge` und `Navigator.clearClientBadge`. Obwohl diese Methoden ebenfalls in der [Badging API-Spezifikation](https://w3c.github.io/badging/) definiert sind, dienen sie zur Anzeige von Badges auf Dokumenten und nicht auf Anwendungssymbolen.

### Unterstützung auf dem Desktop

Auf Desktop-Betriebssystemen werden Badges nur unter Windows und macOS unterstützt, und nur wenn die PWA aus Chrome oder Edge installiert wurde. Obwohl die Badging API auf Chromium-basierten Browsern unter Linux unterstützt wird, werden Badges auf diesem Betriebssystem nicht angezeigt.

Safari und Firefox auf dem Desktop unterstützen die Badging API nicht und unterstützen auch nicht die Installation von PWAs.

### Unterstützung auf Mobilgeräten

Badges werden in Safari auf iOS und iPadOS ab iPadOS 16.4 unterstützt. Die Badging API wird auf Chromium-basierten Browsern unter Android nicht unterstützt. Stattdessen zeigt Android automatisch ein Badge auf dem App-Symbol der PWA an, wenn eine ungelesene Benachrichtigung vorliegt, so wie es auch bei Android-Apps der Fall ist.

## Beste Praktiken für Badges

Bevor Sie lernen, wie man Badges verwendet, sollten Sie diese besten Praktiken berücksichtigen, um sicherzustellen, dass Ihre App Badges auf die effektivste und nützlichste Weise für Ihre Benutzer nutzt.

### Prüfen auf Unterstützung

Um sicherzustellen, dass die Badging API im [Browser des Benutzers und Betriebssystem unterstützt](#unterstützung_für_badges) wird und um das Werfen eines JavaScript-Fehlers zu vermeiden, prüfen Sie auf Unterstützung, bevor Sie die API verwenden:

```js
if (navigator.setAppBadge) {
  // The API is supported, use it.
} else {
  // The API is not supported, don't use it.
}
```

Verlassen Sie sich nicht allein auf Badges, um Benutzer über die Verfügbarkeit neuer Inhalte zu informieren. Browser, die die Badging API unterstützen, können auf Betriebssystemen installiert sein, die das Anzeigen eines Badges nicht unterstützen. Zum Beispiel unterstützt Chrome die Badging API, aber Badges werden auf installierten Anwendungssymbolen unter Linux nicht erscheinen.

### Benachrichtigungsberechtigungen für iOS und/oder iPadOS anfordern

Während Benachrichtigungsbadges auf iOS und iPadOS unterstützt werden, werden Badges nicht angezeigt, bis der Anwendung Benachrichtigungsberechtigungen erteilt werden. Um Benachrichtigungsberechtigungen anzufordern, rufen Sie die Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API#getting_permission) auf:

```js
Notification.requestPermission().then((result) => {
  console.log(result);
});
```

Optional können Sie überprüfen, ob einem Benutzer zuvor Benachrichtigungsberechtigungen erteilt wurden, indem Sie die [Permissions API](/de/docs/Web/API/Permissions_API) verwenden.

### Badges sparsam verwenden

Wie Benachrichtigungen können Badges eine sehr effektive Möglichkeit sein, Benutzer mit Ihrer App erneut zu engagieren, wenn sie sparsam eingesetzt werden. Stellen Sie sicher, dass Badges nur zum Signalisieren neuer Inhalte verwendet werden, die für Ihre Benutzer wichtig sind.

### Badges in Echtzeit aktualisieren

Stellen Sie sicher, dass Ihr Applikations-Badge in Echtzeit aktualisiert wird. Das bedeutet, das Badge so zu aktualisieren, dass es die Anzahl neuer Gegenstände wiedergibt, die der Benutzer tatsächlich noch konsumieren muss, und das App-Badge zu löschen, wenn keine neuen Gegenstände mehr vorhanden sind.

Wenn beispielsweise eine E-Mail-Client-App neue Nachrichten im Hintergrund erhält, sollte sie ihr Badge so aktualisieren, dass die richtige Anzahl ungelesener Nachrichten im Posteingang angezeigt wird, wobei möglicherweise Nachrichten aus anderen Ordnern wie einem Spam-Ordner herausgefiltert werden. Es ist möglich, [Badges im Hintergrund zu aktualisieren](#aktualisierung_des_badges_im_hintergrund), indem die Methode `navigator.setAppBadge()` von einem Service Worker verwendet wird.

Sobald der Benutzer die App startet und beginnt, Nachrichten zu lesen, sollte die E-Mail-Client-App ihr Badge entsprechend aktualisieren, indem `navigator.setAppBadge()` mit der neuen Anzahl ungelesener Nachrichten aufgerufen oder `navigator.clearAppBadge()` aufgerufen wird, wenn keine ungelesenen Nachrichten vorhanden sind.

### Neue Inhalte in der App hervorheben

Wenn Ihre App neue Inhalte erhält und ein Badge auf dem App-Symbol hinzugefügt wird, stellen Sie sicher, dass diese neuen Inhalte für die Benutzer hervorgehoben werden, wenn sie die App starten.

Wenn beispielsweise eine E-Mail-Client-App die Anzahl der ungelesenen Nachrichten auf dem App-Symbol-Badge anzeigt, sollten diese Nachrichten fett dargestellt oder auf andere Weise hervorgehoben werden, wenn die App geöffnet wird.

## Anzeige und Aktualisierung des Badges

Um ein Badge auf dem App-Symbol Ihrer PWA anzuzeigen, das die Anzahl der ungelesenen Nachrichten zeigt, verwenden Sie die Methode [`Navigator.setAppBadge()`](/de/docs/Web/API/Navigator/setAppBadge):

```js
// Check for support first.
if (navigator.setAppBadge) {
  // Display the number of unread messages.
  navigator.setAppBadge(numberOfUnreadMessages);
}
```

Sie können auch ein leeres Badge mit derselben Methode anzeigen, indem Sie den Zählungsparameter weglassen oder auf `0` setzen:

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

## Aktualisierung des Badges im Hintergrund

Badges können nützlich sein, um Benutzer wieder mit Ihrer App zu beschäftigen, wenn sie die App nicht bereits verwenden. Das bedeutet, dass Ihre App in der Lage sein muss, ihr Badge zu aktualisieren, selbst wenn sie nicht läuft.

PWAs können die folgenden Mechanismen verwenden, um im Hintergrund zu aktualisieren und ihre Badges anzuzeigen, zu aktualisieren oder zu verbergen:

- [Push API](/de/docs/Web/API/Push_API)
  - : PWAs können diese API verwenden, um Nachrichten von einem Server zu empfangen, selbst wenn die App nicht läuft. Die meisten Browser erfordern, dass eine Benachrichtigung angezeigt wird, wann immer eine Push-Nachricht empfangen wird. Dies ist für einige Anwendungsfälle in Ordnung (zum Beispiel, wenn die Benachrichtigung beim Aktualisieren des Badges angezeigt wird), macht es jedoch unmöglich, das Badge subtil zu aktualisieren, ohne eine Benachrichtigung anzuzeigen. Darüber hinaus müssen Benutzer Ihrer Website Benachrichtigungsberechtigungen erteilen, um Push-Nachrichten zu empfangen.
    Weitere Informationen finden Sie in der [ServiceWorkerRegistration: showNotification() Methode](/de/docs/Web/API/ServiceWorkerRegistration/showNotification).
- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - : PWAs können diese API verwenden, um Code im Hintergrund auszuführen, wenn eine stabile Netzwerkverbindung erkannt wird.
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : PWAs können diese API verwenden, um Code im Hintergrund in periodischen Zeitintervallen auszuführen.

Hier ist ein Beispiel für einen Service Worker-Code, der zeigt, wie man auf Push-Nachrichten eines Servers hört und das Applikations-Badge aktualisiert, um eine Anzahl ungelesener Nachrichten anzuzeigen:

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

- [Anleitung zum Erstellen eines App-Badges](https://web.dev/patterns/web-apps/badges/)
- [Badging für App-Symbole](https://developer.chrome.com/docs/capabilities/web-apis/badging-api)
- [Benutzer erneut mit Badges, Benachrichtigungen und Push-Nachrichten ansprechen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/notifications-badges)
- [Codelab: Erstellen eines Push-Benachrichtigungsservers](https://web.dev/articles/push-notifications-server-codelab)
