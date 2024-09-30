---
title: Ein Badge auf dem App-Symbol anzeigen
slug: Web/Progressive_web_apps/How_to/Display_badge_on_app_icon
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PWASidebar}}

Anwendungen, die nativ auf mobilen oder Desktop-Betriebssystemen laufen, können Badges auf ihren App-Symbolen anzeigen, um Benutzer darüber zu informieren, dass neuer Inhalt verfügbar ist. Zum Beispiel kann eine E-Mail-Client-Anwendung die Gesamtzahl der ungelesenen Nachrichten in einem Badge anzeigen und diese Zahl aktualisieren, selbst wenn die App nicht läuft.

Hier ist ein Beispiel, das die Mail-Anwendung auf einem iOS-Gerät mit einem Badge in der oberen rechten Ecke zeigt:

![Der Dockbereich auf einem iPhone-Startbildschirm, der ein Badge auf dem Mail-App-Symbol zeigt](./mail-badge-ios.png)

[Progressive Web-Apps](/de/docs/Web/Progressive_web_apps) (PWAs) können ebenfalls Badges auf ihren App-Symbolen anzeigen und aktualisieren.

Das Anzeigen und Aktualisieren eines Badges erfolgt über die [Badging API](/de/docs/Web/API/Badging_API). Sie können diese API vom [Service Worker](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) der App aus aufrufen, um das Badge anzuzeigen oder zu aktualisieren, auch wenn die App nicht läuft.

## Unterstützung für Badges

App-Badges werden nur unterstützt, wenn eine PWA auf ihrem Host-Betriebssystem installiert ist. Badges erscheinen auf dem App-Symbol, das erst vorhanden ist, nachdem die App installiert wurde.

> [!NOTE]
> Dieser Artikel konzentriert sich auf die [`Navigator.setAppBadge()`](/de/docs/Web/API/Navigator/setAppBadge) und [`Navigator.clearAppBadge()`](/de/docs/Web/API/Navigator/clearAppBadge) Methoden aus der Badging API und ignoriert `Navigator.setClientBadge` und `Navigator.clearClientBadge`. Obwohl diese Methoden ebenfalls in der [Badging API-Spezifikation](https://w3c.github.io/badging/) definiert sind, dienen sie dazu, Badges auf Dokumenten und nicht auf Anwendungs-Symbolen anzuzeigen.

### Desktop-Unterstützung

Auf Desktop-Betriebssystemen werden Badges nur auf Windows und macOS unterstützt und nur, wenn die PWA über Chrome oder Edge installiert ist. Während die Badging API auf Chromium-basierten Browsern unter Linux unterstützt wird, werden Badges auf diesem Betriebssystem nicht angezeigt.

Safari und Firefox auf dem Desktop unterstützen die Badging API nicht und erlauben nicht die Installation von PWAs.

### Mobile Unterstützung

Badges werden ab iPadOS 16.4 in Safari auf iOS und iPadOS unterstützt. Die Badging API wird nicht von Chromium-basierten Browsern auf Android unterstützt. Stattdessen zeigt Android automatisch ein Badge auf dem App-Symbol der PWA an, wenn eine ungelesene Benachrichtigung vorliegt, genau wie bei Android-Apps.

## Beste Praktiken für Badges

Bevor Sie lernen, wie man Badges verwendet, überlegen Sie sich diese bewährten Methoden, um sicherzustellen, dass Ihre App Badges auf die effektivste und nützlichste Weise für Ihre Benutzer einsetzt.

### Überprüfen Sie die Unterstützung

Um sicherzustellen, dass die Badging API im [Browser des Benutzers und dessen Betriebssystem](#unterstützung_für_badges) unterstützt wird, überprüfen Sie dies, bevor Sie die API verwenden, um einen JavaScript-Fehler zu vermeiden:

```js
if (navigator.setAppBadge) {
  // The API is supported, use it.
} else {
  // The API is not supported, don't use it.
}
```

Verlassen Sie sich nicht allein auf Badges, um Benutzer über die Verfügbarkeit neuer Inhalte zu informieren. Browser, die die Badging API unterstützen, können auf Betriebssystemen installiert sein, die das Anzeigen eines Badges nicht unterstützen. Zum Beispiel unterstützt Chrome die Badging API, aber Badges erscheinen nicht auf installierten Anwendungs-Symbolen unter Linux.

### Benachrichtigungsberechtigungen für iOS und/oder iPadOS anfordern

Obwohl Benachrichtigungs-Badges auf iOS und iPadOS unterstützt werden, werden Badges erst angezeigt, wenn der Anwendung Benachrichtigungsberechtigungen erteilt wurden. Um Benachrichtigungsberechtigungen anzufordern, rufen Sie die [`Notification.requestPermission()`](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API#getting_permission) Methode auf:

```js
Notification.requestPermission().then((result) => {
  console.log(result);
});
```

Optional können Sie mit der [Permissions API](/de/docs/Web/API/Permissions_API) überprüfen, ob ein Benutzer zuvor Benachrichtigungsberechtigungen erteilt hat.

### Nutzen Sie Badges sparsam

Ähnlich wie Benachrichtigungen können Badges eine sehr effektive Möglichkeit sein, Benutzer mit Ihrer App erneut zu engagieren, wenn sie sparsam eingesetzt werden. Stellen Sie sicher, dass Sie Badges nur verwenden, um neuen, für Ihre Benutzer wichtigen Inhalt zu signalisieren.

### Aktualisieren Sie Badges in Echtzeit

Stellen Sie sicher, dass Sie das Badge Ihrer Anwendung in Echtzeit aktualisieren. Das bedeutet, die Anzahl der Badges zu aktualisieren, um widerzuspiegeln, wie viele neue Elemente dem Benutzer tatsächlich noch zur Verfügung stehen, und das App-Badge zu löschen, wenn keine neuen Elemente mehr vorhanden sind.

Zum Beispiel sollte eine E-Mail-Client-App, die im Hintergrund neue Nachrichten erhält, ihr Badge aktualisieren, um die richtige Anzahl ungelesener Nachrichten im Posteingang anzuzeigen und möglicherweise Nachrichten aus anderen Ordnern wie einem Spam-Ordner herauszufiltern. Es ist möglich, [Badges im Hintergrund zu aktualisieren](#aktualisieren_des_badges_im_hintergrund), indem die `navigator.setAppBadge()` Methode von einem Service Worker verwendet wird.

Sobald der Benutzer die App startet und Nachrichten zu lesen beginnt, sollte die E-Mail-Client-App ihr Badge entsprechend aktualisieren, indem `navigator.setAppBadge()` mit der neuen Anzahl ungelesener Nachrichten aufgerufen wird oder `navigator.clearAppBadge()`, wenn keine ungelesenen Nachrichten mehr vorhanden sind.

### Heben Sie neue Inhalte in der App hervor

Wenn Ihre App neue Inhalte erhält und ein Badge auf dem App-Symbol hinzufügt, stellen Sie sicher, dass Sie diesen neuen Inhalt für Benutzer hervorheben, wenn sie die App starten.

Zum Beispiel, wenn eine E-Mail-Client-App die Anzahl ungelesener Nachrichten auf dem App-Symbol-Badge anzeigt, sollten diese Nachrichten fett oder auf irgendeine Weise hervorgehoben werden, wenn die App geöffnet wird.

## Anzeigen und Aktualisieren des Badges

Um ein Badge auf dem App-Symbol Ihrer PWA anzuzeigen, das die Anzahl ungelesener Nachrichten zeigt, verwenden Sie die [`Navigator.setAppBadge()`](/de/docs/Web/API/Navigator/setAppBadge) Methode:

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

Um das Badge auf dem App-Symbol zu entfernen, verwenden Sie die [`Navigator.clearAppBadge()`](/de/docs/Web/API/Navigator/clearAppBadge) Methode:

```js
// Check for support first.
if (navigator.clearAppBadge) {
  // Remove the badge on the app icon.
  navigator.clearAppBadge();
}
```

## Aktualisieren des Badges im Hintergrund

Badges können nützlich sein, um Benutzer wieder mit Ihrer App zu engagieren, wenn sie die App gerade nicht verwenden. Dies bedeutet, dass Ihre App in der Lage sein muss, ihr Badge auch dann zu aktualisieren, wenn sie nicht läuft.

PWAs können die folgenden Mechanismen verwenden, um im Hintergrund zu aktualisieren und ihre Badges anzuzeigen, zu aktualisieren oder zu verbergen:

- [Push API](/de/docs/Web/API/Push_API)
  - : PWAs können diese API verwenden, um Nachrichten von einem Server zu empfangen, selbst wenn die App nicht läuft. Die meisten Browser erfordern, dass eine Benachrichtigung angezeigt wird, wann immer eine Push-Nachricht empfangen wird. Dies ist für einige Anwendungsfälle in Ordnung (zum Beispiel das Anzeigen einer Benachrichtigung beim Aktualisieren des Badges), macht es jedoch unmöglich, das Badge subtil zu aktualisieren, ohne eine Benachrichtigung anzuzeigen. Darüber hinaus müssen Benutzer Ihrer Website Benachrichtigungsberechtigungen erteilen, um Push-Nachrichten zu empfangen.
    Weitere Informationen finden Sie in der [ServiceWorkerRegistration: showNotification() Methode](/de/docs/Web/API/ServiceWorkerRegistration/showNotification).
- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - : PWAs können diese API verwenden, um Code im Hintergrund auszuführen, wenn eine stabile Netzwerkverbindung erkannt wird.
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : PWAs können diese API verwenden, um Code im Hintergrund in periodischen Zeitintervallen auszuführen.

Hier ist ein Beispiel für einen Service Worker-Code, der zeigt, wie man auf Push-Nachrichten eines Servers hört und das App-Badge aktualisiert, um eine Anzahl ungelesener Nachrichten widerzuspiegeln:

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
- [Benutzer mit Badges, Benachrichtigungen und Push-Nachrichten erneut ansprechen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/notifications-badges)
- [Codelab: Erstellen eines Push-Benachrichtigungsservers](https://web.dev/articles/push-notifications-server-codelab)
