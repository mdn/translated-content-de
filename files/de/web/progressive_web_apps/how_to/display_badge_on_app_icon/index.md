---
title: Anzeigen eines Badges auf dem App-Symbol
slug: Web/Progressive_web_apps/How_to/Display_badge_on_app_icon
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

Anwendungen, die nativ auf mobilen und Desktop-Betriebssystemen sind, können Badges auf ihren App-Symbolen anzeigen, um Benutzer darüber zu informieren, dass neue Inhalte verfügbar sind. Zum Beispiel kann eine E-Mail-Client-Anwendung die Gesamtzahl ungelesener Nachrichten in einem Badge anzeigen und diese Zahl aktualisieren, selbst wenn die App nicht läuft.

Hier ist ein Beispiel, das die Mail-Anwendung auf einem iOS-Gerät mit einem Badge in der oberen rechten Ecke zeigt:

![Der Dockbereich auf einem iPhone-Startbildschirm, der ein Badge auf dem Mail-App-Symbol zeigt](./mail-badge-ios.png)

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) können ebenfalls Badges auf ihren App-Symbolen anzeigen und aktualisieren.

Die Anzeige und Aktualisierung eines Badges erfolgt durch die Verwendung der [Badging API](/de/docs/Web/API/Badging_API). Sie können diese API von dem [Service Worker](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) der App aus aufrufen, um den Badge anzuzeigen oder zu aktualisieren, selbst wenn die App nicht läuft.

## Unterstützung für Badges

App-Badges werden nur unterstützt, wenn eine PWA auf ihrem Host-Betriebssystem installiert ist. Badges erscheinen auf dem App-Symbol, das nur nach der Installation der App existiert.

> [!NOTE]
> Dieser Artikel konzentriert sich auf die Methoden [`Navigator.setAppBadge()`](/de/docs/Web/API/Navigator/setAppBadge) und [`Navigator.clearAppBadge()`](/de/docs/Web/API/Navigator/clearAppBadge) aus der Badging API und ignoriert `Navigator.setClientBadge` und `Navigator.clearClientBadge`. Obwohl diese Methoden ebenfalls in der [Badging API-Spezifikation](https://w3c.github.io/badging/) definiert sind, sind sie für die Anzeige von Badges auf Dokumenten gedacht, nicht auf Applikationssymbolen.

### Unterstützung auf dem Desktop

Auf Desktop-Betriebssystemen werden Badges nur auf Windows und macOS unterstützt, und nur wenn die PWA von Chrome oder Edge installiert ist. Obwohl die Badging API auf Chromium-basierten Browsern unter Linux unterstützt wird, werden Badges auf diesem Betriebssystem nicht angezeigt.

Safari und Firefox auf Desktops unterstützen die Badging API nicht und unterstützen nicht die Installation von PWAs.

### Unterstützung auf mobilen Geräten

Badges werden in Safari auf iOS und iPadOS unterstützt, beginnend mit iPadOS 16.4. Die Badging API wird auf Chromium-basierten Browsern, die unter Android laufen, nicht unterstützt. Stattdessen zeigt Android automatisch ein Badge auf dem App-Symbol der PWA an, wenn eine ungelesene Benachrichtigung vorliegt, genau wie bei Android-Apps.

## Best Practices für Badges

Bevor Sie lernen, wie man Badges verwendet, berücksichtigen Sie diese Best Practices, um sicherzustellen, dass Ihre App Badges auf die effektivste und nützlichste Weise für Ihre Benutzer verwendet.

### Unterstützung prüfen

Um sicherzustellen, dass die Badging API im [Browser](#unterstützung_für_badges) und Betriebssystem des Benutzers unterstützt wird, um das Auslösen eines JavaScript-Fehlers zu vermeiden, prüfen Sie die Unterstützung, bevor Sie die API verwenden:

```js
if (navigator.setAppBadge) {
  // The API is supported, use it.
} else {
  // The API is not supported, don't use it.
}
```

Verlassen Sie sich nicht ausschließlich auf Badges, um Benutzer über die Verfügbarkeit neuer Inhalte zu informieren. Browser, die die Badging API unterstützen, können auf Betriebssystemen installiert sein, die die Anzeige eines Badges nicht unterstützen. Beispielsweise unterstützt Chrome die Badging API, jedoch werden Badges nicht auf installierten Applikationssymbolen unter Linux angezeigt.

### Benachrichtigungsberechtigungen für iOS und/oder iPadOS anfordern

Während Benachrichtigungs-Badges auf iOS und iPadOS unterstützt werden, erscheinen Badges nicht, bis der Anwendung Benachrichtigungsberechtigungen erteilt werden. Um Benachrichtigungsberechtigungen anzufordern, rufen Sie die Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API#getting_permission) auf:

```js
Notification.requestPermission().then((result) => {
  console.log(result);
});
```

Optional können Sie überprüfen, ob ein Benutzer zuvor Benachrichtigungsberechtigungen erteilt hat, indem Sie die [Permissions API](/de/docs/Web/API/Permissions_API) verwenden.

### Badges sparsam verwenden

Wie Benachrichtigungen können Badges eine sehr effektive Möglichkeit sein, Benutzer mit Ihrer App wieder zu engagieren, wenn sie sparsam eingesetzt werden. Stellen Sie sicher, dass Sie Badges nur verwenden, um neue Inhalte zu signalisieren, die für Ihre Benutzer wichtig sind.

### Badges in Echtzeit aktualisieren

Stellen Sie sicher, dass das App-Badge in Echtzeit aktualisiert wird. Das bedeutet, dass die Badge-Zählung aktualisiert wird, um widerzuspiegeln, wie viele neue Elemente tatsächlich noch vom Benutzer konsumiert werden müssen, und das App-Badge gelöscht wird, wenn keine neuen Elemente vorhanden sind.

Zum Beispiel, wenn eine E-Mail-Client-App neue Nachrichten im Hintergrund erhält, sollte sie ihren Badge aktualisieren, um die richtige Anzahl ungelesener Nachrichten im Posteingang anzuzeigen, wobei möglicherweise Nachrichten aus anderen Ordnern wie einem Spam-Ordner herausgefiltert werden. Es ist möglich, [Badges im Hintergrund zu aktualisieren](#aktualisierung_des_badges_im_hintergrund), indem die Methode `navigator.setAppBadge()` von einem Service Worker verwendet wird.

Sobald der Benutzer die App startet und beginnt, Nachrichten zu lesen, sollte die E-Mail-Client-App ihren Badge entsprechend aktualisieren, indem `navigator.setAppBadge()` mit der neuen Zählung der ungelesenen Nachrichten aufgerufen wird oder indem `navigator.clearAppBadge()` aufgerufen wird, wenn keine ungelesenen Nachrichten mehr vorhanden sind.

### Neue Inhalte in der App hervorheben

Wenn Ihre App neue Inhalte erhält und ein Badge auf dem App-Symbol hinzufügt, stellen Sie sicher, dass diese neuen Inhalte für Benutzer hervorgehoben werden, wenn sie die App starten.

Zum Beispiel, wenn eine E-Mail-Client-App die Anzahl der ungelesenen Nachrichten auf dem App-Symbol-Badge anzeigt, sollten diese Nachrichten in irgendeiner Weise fettgedruckt oder hervorgehoben werden, wenn die App geöffnet wird.

## Anzeige und Aktualisierung des Badges

Um ein Badge auf dem App-Symbol Ihrer PWA anzuzeigen, das die Anzahl ungelesener Nachrichten zeigt, verwenden Sie die Methode [`Navigator.setAppBadge()`](/de/docs/Web/API/Navigator/setAppBadge):

```js
// Check for support first.
if (navigator.setAppBadge) {
  // Display the number of unread messages.
  navigator.setAppBadge(numberOfUnreadMessages);
}
```

Sie können auch ein leeres Badge mit derselben Methode anzeigen, indem Sie den Zählparameter weglassen oder auf `0` setzen:

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

Badges können nützlich sein, um Benutzer mit Ihrer App wieder zu engagieren, wenn sie die App nicht bereits benutzen. Das bedeutet, dass Ihre App in der Lage sein muss, ihren Badge zu aktualisieren, selbst wenn sie nicht läuft.

PWAs können die folgenden Mechanismen verwenden, um im Hintergrund zu aktualisieren und ihre Badges anzuzeigen, zu aktualisieren oder zu verbergen:

- [Push API](/de/docs/Web/API/Push_API)
  - : PWAs können diese API verwenden, um Nachrichten von einem Server zu empfangen, selbst wenn die App nicht läuft. Die meisten Browser erfordern, dass eine Benachrichtigung angezeigt wird, wann immer eine Push-Nachricht empfangen wird. Dies ist für einige Anwendungsfälle (z.B. das Anzeigen einer Benachrichtigung beim Aktualisieren des Badges) in Ordnung, macht es jedoch unmöglich, den Badge subtil zu aktualisieren, ohne eine Benachrichtigung anzuzeigen. Außerdem müssen Benutzer Ihrer Website Benachrichtigungsberechtigungen erteilen, um Push-Nachrichten zu empfangen.
    Für weitere Informationen siehe die [Methode ServiceWorkerRegistration: showNotification()](/de/docs/Web/API/ServiceWorkerRegistration/showNotification).
- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - : PWAs können diese API verwenden, um Code im Hintergrund auszuführen, wenn eine stabile Netzwerkverbindung erkannt wird.
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : PWAs können diese API verwenden, um Code im Hintergrund in periodischen Intervallen auszuführen.

Hier ist ein Service Worker-Codebeispiel, das zeigt, wie auf die Push-Nachrichten eines Servers gehorcht wird und das App-Badge aktualisiert wird, um eine Zahl ungelesener Nachrichten widerzuspiegeln:

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

- [Anleitung zum Erstellen eines App-Badges](https://web.dev/articles/web-apps/badges)
- [Badges für App-Symbole](https://developer.chrome.com/docs/capabilities/web-apis/badging-api)
- [Benutzer mit Badges, Benachrichtigungen und Push-Nachrichten wieder engagieren](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/notifications-badges)
- [Codelab: Einen Push-Benachrichtigungsserver erstellen](https://web.dev/articles/push-notifications-server-codelab)
