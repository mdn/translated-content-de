---
title: Ein Abzeichen auf dem App-Symbol anzeigen
slug: Web/Progressive_web_apps/How_to/Display_badge_on_app_icon
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Apps, die nativ für mobile und Desktop-Betriebssysteme sind, können Abzeichen auf ihren App-Symbolen anzeigen, um Benutzer darüber zu informieren, dass neue Inhalte verfügbar sind. Beispielsweise kann eine E-Mail-Client-Anwendung die Gesamtzahl der ungelesenen Nachrichten in einem Abzeichen anzeigen und diese Zahl aktualisieren, auch wenn die App nicht läuft.

Hier ist ein Beispiel, das die Mail-Anwendung auf einem iOS-Gerät mit einem Abzeichen in der oberen rechten Ecke zeigt:

![Der Dockbereich auf einem iPhone-Startbildschirm, der ein Abzeichen auf dem Mail-App-Symbol zeigt](./mail-badge-ios.png)

[Progressive Web-Apps](/de/docs/Web/Progressive_web_apps) (PWAs) können ebenfalls Abzeichen auf ihren App-Symbolen anzeigen und aktualisieren.

Die Anzeige und Aktualisierung eines Abzeichens erfolgt durch die Verwendung der [Badging API](/de/docs/Web/API/Badging_API). Diese API kann aus dem [Service Worker](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) Ihrer App aufgerufen werden, um das Abzeichen anzuzeigen oder zu aktualisieren, selbst wenn die App nicht läuft.

## Unterstützung für Abzeichen

App-Abzeichen werden nur unterstützt, wenn eine PWA auf ihrem Host-Betriebssystem installiert ist. Abzeichen erscheinen auf dem App-Symbol, das nur nach der Installation der App existiert.

> [!NOTE]
> Dieser Artikel konzentriert sich auf die Methoden [`Navigator.setAppBadge()`](/de/docs/Web/API/Navigator/setAppBadge) und [`Navigator.clearAppBadge()`](/de/docs/Web/API/Navigator/clearAppBadge) der Badging API und ignoriert `Navigator.setClientBadge` und `Navigator.clearClientBadge`. Obwohl diese Methoden auch in der [Badging API-Spezifikation](https://w3c.github.io/badging/) definiert sind, dienen sie zur Anzeige von Abzeichen auf Dokumenten und nicht auf Anwendungssymbolen.

### Unterstützung auf dem Desktop

Auf Desktop-Betriebssystemen werden Abzeichen nur auf Windows und macOS unterstützt, und nur wenn die PWA von Chrome oder Edge installiert ist. Während die Badging API in Chromium-basierten Browsern auf Linux unterstützt wird, werden Abzeichen auf diesem Betriebssystem nicht angezeigt.

Safari und Firefox auf dem Desktop unterstützen die Badging API nicht und unterstützen nicht die Installation von PWAs.

### Unterstützung auf mobilen Geräten

Abzeichen werden in Safari auf iOS und iPadOS unterstützt, beginnend mit iPadOS 16.4. Die Badging API wird nicht von Chromium-basierten Browsern auf Android unterstützt. Stattdessen zeigt Android automatisch ein Abzeichen auf dem App-Symbol der PWA, wenn eine ungelesene Benachrichtigung vorhanden ist, genau wie bei Android-Apps.

## Beste Praktiken für Abzeichen

Bevor Sie lernen, wie Sie Abzeichen verwenden, berücksichtigen Sie diese besten Praktiken, um sicherzustellen, dass Ihre App Abzeichen auf die effektivste und nützlichste Weise für Ihre Benutzer verwendet.

### Unterstützung überprüfen

Um zu gewährleisten, dass die Badging API im Browser und Betriebssystem des Benutzers [unterstützt](#unterstützung_für_abzeichen) wird und um das Auftreten eines JavaScript-Fehlers zu verhindern, prüfen Sie die Unterstützung, bevor Sie die API verwenden:

```js
if (navigator.setAppBadge) {
  // The API is supported, use it.
} else {
  // The API is not supported, don't use it.
}
```

Verlassen Sie sich nicht ausschließlich auf Abzeichen, um Benutzer über die Verfügbarkeit neuer Inhalte zu informieren. Browser, die die Badging API unterstützen, können auf Betriebssystemen installiert sein, die die Anzeige eines Abzeichens nicht unterstützen. Zum Beispiel, während Chrome die Badging API unterstützt, werden Abzeichen auf installierten Anwendungssymbolen unter Linux nicht angezeigt.

### Benachrichtigungsrechte für iOS und/oder iPadOS anfordern

Obwohl Benachrichtigungs-Abzeichen auf iOS und iPadOS unterstützt werden, erscheinen Abzeichen nicht, bis der Anwendung Benachrichtigungsrechte gewährt wurden. Um Benachrichtigungsrechte anzufordern, rufen Sie die Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API#getting_permission) auf:

```js
Notification.requestPermission().then((result) => {
  console.log(result);
});
```

Optionale können Sie mit der [Permissions API](/de/docs/Web/API/Permissions_API) überprüfen, ob ein Benutzer bereits Benachrichtigungsrechte gewährt hat.

### Abzeichen sparsam verwenden

Ähnlich wie Benachrichtigungen können Abzeichen eine sehr effektive Methode sein, um Nutzer mit Ihrer App erneut zu engagieren, wenn sie sparsam verwendet werden. Stellen Sie sicher, dass Sie Abzeichen nur verwenden, um neue Inhalte anzuzeigen, die für Ihre Nutzer wichtig sind.

### Abzeichen in Echtzeit aktualisieren

Stellen Sie sicher, dass Sie das App-Abzeichen in Echtzeit aktualisieren. Das bedeutet, die Abzeichenanzahl zu aktualisieren, um widerzuspiegeln, wie viele neue Elemente tatsächlich für den Benutzer übrig sind, und das App-Abzeichen zu löschen, wenn keine neuen Elemente vorhanden sind.

Wenn beispielsweise eine E-Mail-Client-Anwendung im Hintergrund neue Nachrichten empfängt, sollte sie ihr Abzeichen aktualisieren, um die richtige Anzahl ungelesener Nachrichten im Posteingang anzuzeigen und möglicherweise Nachrichten aus anderen Ordnern wie einem Spam-Ordner herauszufiltern. Es ist möglich, [Abzeichen im Hintergrund zu aktualisieren](#das_abzeichen_im_hintergrund_aktualisieren), indem Sie die Methode `navigator.setAppBadge()` von einem Service Worker verwenden.

Sobald der Benutzer die App startet und die Nachrichten liest, sollte die E-Mail-Client-Anwendung ihr Abzeichen entsprechend aktualisieren, indem sie `navigator.setAppBadge()` mit der neuen Anzahl ungelesener Nachrichten aufruft oder `navigator.clearAppBadge()` aufruft, wenn keine ungelesenen Nachrichten mehr vorhanden sind.

### Neue Inhalte in der App hervorheben

Wenn Ihre App neue Inhalte erhält und ein Abzeichen auf dem App-Symbol hinzufügt, stellen Sie sicher, dass diese neuen Inhalte für Benutzer hervorgehoben werden, wenn sie die App starten.

Wenn beispielsweise ein E-Mail-Client die Anzahl ungelesener Nachrichten auf dem App-Symbol-Abzeichen anzeigt, sollten diese Nachrichten fett oder auf andere Weise hervorgehoben sein, wenn die App geöffnet wird.

## Das Abzeichen anzeigen und aktualisieren

Um ein Abzeichen auf dem App-Symbol Ihrer PWA anzuzeigen, das eine Anzahl ungelesener Nachrichten zeigt, verwenden Sie die Methode [`Navigator.setAppBadge()`](/de/docs/Web/API/Navigator/setAppBadge):

```js
// Check for support first.
if (navigator.setAppBadge) {
  // Display the number of unread messages.
  navigator.setAppBadge(numberOfUnreadMessages);
}
```

Sie können auch ein leeres Abzeichen mit derselben Methode anzeigen, indem Sie den Zählparameter weglassen oder ihn auf `0` setzen:

```js
// Check for support first.
if (navigator.setAppBadge) {
  // Just display the badge, with no number in it.
  navigator.setAppBadge();
}
```

Um das Abzeichen auf dem App-Symbol zu entfernen, verwenden Sie die Methode [`Navigator.clearAppBadge()`](/de/docs/Web/API/Navigator/clearAppBadge):

```js
// Check for support first.
if (navigator.clearAppBadge) {
  // Remove the badge on the app icon.
  navigator.clearAppBadge();
}
```

## Das Abzeichen im Hintergrund aktualisieren

Abzeichen können nützlich sein, um Benutzer mit Ihrer App erneut zu engagieren, wenn sie die App nicht bereits verwenden. Dies bedeutet, dass Ihre App ihr Abzeichen aktualisieren können muss, selbst wenn sie nicht läuft.

PWAs können die folgenden Mechanismen verwenden, um im Hintergrund zu aktualisieren und ihre Abzeichen anzuzeigen, zu aktualisieren oder zu verbergen:

- [Push API](/de/docs/Web/API/Push_API)
  - : PWAs können diese API verwenden, um Nachrichten von einem Server zu empfangen, selbst wenn die App nicht läuft. Die meisten Browser erfordern, dass eine Benachrichtigung angezeigt wird, wenn eine Push-Nachricht empfangen wird. Dies ist für einige Anwendungsfälle in Ordnung (zum Beispiel, wenn die Benachrichtigung beim Aktualisieren des Abzeichens angezeigt wird), macht es jedoch unmöglich, das Abzeichen subtil zu aktualisieren, ohne eine Benachrichtigung anzuzeigen. Darüber hinaus müssen Benutzer Ihrer Website Benachrichtigungsrechte erteilen, um Push-Nachrichten zu empfangen.
    Weitere Informationen finden Sie in der [ServiceWorkerRegistration: showNotification() Methode](/de/docs/Web/API/ServiceWorkerRegistration/showNotification).
- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - : PWAs können diese API verwenden, um Code im Hintergrund auszuführen, wenn eine stabile Netzwerkverbindung erkannt wird.
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : PWAs können diese API verwenden, um Code im Hintergrund in regelmäßigen Intervallen auszuführen.

Hier ist ein Service-Worker-Codebeispiel, das zeigt, wie auf Push-Nachrichten eines Servers gehört werden kann und das App-Abzeichen aktualisiert wird, um eine Anzahl ungelesener Nachrichten widerzuspiegeln:

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

- [Anleitung zur Erstellung eines App-Abzeichens](https://web.dev/patterns/web-apps/badges/)
- [Abzeichen für App-Symbole](https://developer.chrome.com/docs/capabilities/web-apis/badging-api)
- [Nutzer mit Abzeichen, Benachrichtigungen und Push-Nachrichten erneut ansprechen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/notifications-badges)
- [Codelab: Erstellen eines Push-Benachrichtigungsservers](https://web.dev/articles/push-notifications-server-codelab)
