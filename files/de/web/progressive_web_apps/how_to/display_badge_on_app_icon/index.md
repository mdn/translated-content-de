---
title: Anzeigen eines Abzeichens auf dem App-Symbol
slug: Web/Progressive_web_apps/How_to/Display_badge_on_app_icon
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PWASidebar}}

Anwendungen, die nativ für mobile und Desktop-Betriebssysteme entwickelt wurden, können Abzeichen auf ihren App-Symbolen anzeigen, um Benutzer darüber zu informieren, dass neue Inhalte verfügbar sind. Beispielsweise kann eine E-Mail-Client-Anwendung die Gesamtanzahl ungelesener Nachrichten in einem Abzeichen anzeigen und diese Zahl aktualisieren, selbst wenn die App nicht läuft.

Hier ist ein Beispiel, das die Mail-Anwendung auf einem iOS-Gerät mit einem Abzeichen in der oberen rechten Ecke zeigt:

![Der Dock-Bereich auf einem iPhone-Startbildschirm, der ein Abzeichen auf dem Mail-App-Symbol zeigt](./mail-badge-ios.png)

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) können ebenfalls Abzeichen auf ihren App-Symbolen anzeigen und aktualisieren.

Das Anzeigen und Aktualisieren eines Abzeichens erfolgt durch die Verwendung der [Badging API](/de/docs/Web/API/Badging_API). Sie können diese API vom [Service Worker](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) der App aus aufrufen, um das Abzeichen anzuzeigen oder zu aktualisieren, selbst wenn die App nicht läuft.

## Unterstützung für Abzeichen

App-Abzeichen werden nur unterstützt, wenn eine PWA auf ihrem Host-Betriebssystem installiert ist. Abzeichen erscheinen auf dem App-Symbol, das erst nach der Installation der App existiert.

> [!NOTE]
> Dieser Artikel konzentriert sich auf die Methoden {{domxref("Navigator.setAppBadge()")}} und {{domxref("Navigator.clearAppBadge()")}} der Badging API und ignoriert `Navigator.setClientBadge` und `Navigator.clearClientBadge`. Obwohl diese Methoden ebenfalls in der [Badging API-Spezifikation](https://w3c.github.io/badging/) definiert sind, dienen sie zum Anzeigen von Abzeichen auf Dokumenten und nicht auf Anwendungsicons.

### Unterstützung auf Desktop-Systemen

Auf Desktop-Betriebssystemen werden Abzeichen nur auf Windows und macOS unterstützt und nur, wenn die PWA von Chrome oder Edge installiert wurde. Obwohl die Badging API auf Chromium-basierten Browsern unter Linux unterstützt wird, werden Abzeichen auf diesem Betriebssystem nicht angezeigt.

Safari und Firefox auf Desktop-Systemen unterstützen die Badging API nicht und unterstützen auch nicht die Installation von PWAs.

### Unterstützung auf mobilen Geräten

Abzeichen werden in Safari auf iOS und iPadOS ab iPadOS 16.4 unterstützt. Die Badging API wird auf Chromium-basierten Browsern, die auf Android laufen, nicht unterstützt. Stattdessen zeigt Android automatisch ein Abzeichen auf dem App-Symbol der PWA an, wenn eine ungelesene Benachrichtigung vorliegt, genau wie bei Android-Apps.

## Best Practices für Abzeichen

Bevor Sie lernen, wie Sie Abzeichen verwenden, bedenken Sie diese Best Practices, um sicherzustellen, dass Ihre App die Abzeichen auf die effektivste und nützlichste Weise für Ihre Benutzer nutzt.

### Unterstützung prüfen

Um sicherzustellen, dass die Badging API im [Browser des Benutzers und Betriebssystem](#unterstützung_für_abzeichen) unterstützt wird, und um das Auslösen eines JavaScript-Fehlers zu vermeiden, prüfen Sie die Unterstützung, bevor Sie die API verwenden:

```js
if (navigator.setAppBadge) {
  // Die API wird unterstützt, verwenden Sie sie.
} else {
  // Die API wird nicht unterstützt, verwenden Sie sie nicht.
}
```

Verlassen Sie sich nicht ausschließlich auf Abzeichen, um Benutzer über die Verfügbarkeit neuer Inhalte zu informieren. Browser, die die Badging API unterstützen, können auf Betriebssystemen installiert sein, die das Anzeigen eines Abzeichens nicht unterstützen. Beispielsweise unterstützt Chrome die Badging API, jedoch werden Abzeichen auf installierten Anwendungsicons unter Linux nicht angezeigt.

### Benachrichtigungsberechtigungen für iOS und/oder iPadOS anfordern

Obwohl Benachrichtigungsabzeichen auf iOS und iPadOS unterstützt werden, erscheinen Abzeichen nicht, bis der Anwendung Benachrichtigungsberechtigungen erteilt werden. Um Benachrichtigungsberechtigungen anzufordern, rufen Sie die Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API#getting_permission) auf:

```js
Notification.requestPermission().then((result) => {
  console.log(result);
});
```

Optional können Sie prüfen, ob ein Benutzer zuvor Benachrichtigungsberechtigungen erteilt hat, indem Sie die [Permissions API](/de/docs/Web/API/Permissions_API) verwenden.

### Abzeichen sparsam verwenden

Wie Benachrichtigungen können Abzeichen eine sehr effektive Methode sein, um Benutzer in Ihre App zurückzuholen, wenn sie sparsam verwendet werden. Stellen Sie sicher, dass Sie Abzeichen nur verwenden, um auf neue Inhalte hinzuweisen, die wichtig für Ihre Benutzer sind.

### Abzeichen in Echtzeit aktualisieren

Stellen Sie sicher, dass Sie das Anwendungsabzeichen in Echtzeit aktualisieren. Dies bedeutet, dass die Abzeichenzahl so aktualisiert wird, dass sie die tatsächlich für den Benutzer verbleibenden neuen Elemente widerspiegelt, und das App-Abzeichen gelöscht wird, wenn keine neuen Elemente vorhanden sind.

Zum Beispiel sollte, wenn eine E-Mail-Client-App neue Nachrichten im Hintergrund erhält, ihr Abzeichen zur Anzeige der richtigen Anzahl ungelesener Nachrichten im Posteingang aktualisiert werden, wobei möglicherweise Nachrichten aus anderen Ordnern wie einem Spam-Ordner herausgefiltert werden. Es ist möglich, [Abzeichen im Hintergrund zu aktualisieren](#aktualisieren_des_abzeichens_im_hintergrund), indem Sie die Methode `navigator.setAppBadge()` von einem Service Worker verwenden.

Sobald der Benutzer die App startet und Nachrichten zu lesen beginnt, sollte die E-Mail-Client-App ihr Abzeichen entsprechend aktualisieren, indem sie `navigator.setAppBadge()` mit der neuen Anzahl ungelesener Nachrichten aufruft, oder `navigator.clearAppBadge()`, wenn keine ungelesenen Nachrichten vorhanden sind.

### Neue Inhalte in der App hervorheben

Wenn Ihre App neue Inhalte erhält und ein Abzeichen auf dem App-Symbol hinzufügt, stellen Sie sicher, dass Sie diese neuen Inhalte für Benutzer hervorheben, wenn sie die App starten.

Zum Beispiel, wenn eine E-Mail-Client-App die Anzahl ungelesener Nachrichten auf dem App-Abzeichen anzeigt, sollten diese Nachrichten hervorgehoben oder irgendwie markiert sein, wenn die App geöffnet wird.

## Anzeigen und Aktualisieren des Abzeichens

Um ein Abzeichen auf dem App-Symbol Ihrer PWA anzuzeigen, das eine Anzahl ungelesener Nachrichten zeigt, verwenden Sie die Methode {{domxref("Navigator.setAppBadge()")}}:

```js
// Zuerst auf Unterstützung prüfen.
if (navigator.setAppBadge) {
  // Die Anzahl der ungelesenen Nachrichten anzeigen.
  navigator.setAppBadge(numberOfUnreadMessages);
}
```

Sie können auch ein leeres Abzeichen mit derselben Methode anzeigen, indem Sie den Zählparameter weglassen oder auf `0` setzen:

```js
// Zuerst auf Unterstützung prüfen.
if (navigator.setAppBadge) {
  // Nur das Abzeichen anzeigen, ohne eine Zahl darin.
  navigator.setAppBadge();
}
```

Um das Abzeichen auf dem App-Symbol zu entfernen, verwenden Sie die Methode {{domxref("Navigator.clearAppBadge()")}}:

```js
// Zuerst auf Unterstützung prüfen.
if (navigator.clearAppBadge) {
  // Das Abzeichen auf dem App-Symbol entfernen.
  navigator.clearAppBadge();
}
```

## Aktualisieren des Abzeichens im Hintergrund

Abzeichen können nützlich sein, um Benutzer mit Ihrer App in Verbindung zu bringen, wenn sie die App noch nicht verwenden. Dies bedeutet, dass Ihre App in der Lage sein muss, ihr Abzeichen zu aktualisieren, auch wenn sie nicht ausgeführt wird.

PWAs können die folgenden Mechanismen verwenden, um im Hintergrund zu aktualisieren und ihre Abzeichen anzuzeigen, zu aktualisieren oder zu verbergen:

- [Push API](/de/docs/Web/API/Push_API)
  - : PWAs können diese API nutzen, um Nachrichten von einem Server zu empfangen, selbst wenn die App nicht läuft. Die meisten Browser erfordern, dass eine Benachrichtigung angezeigt wird, sobald eine Push-Nachricht empfangen wird. Dies ist für einige Anwendungsfälle in Ordnung (zum Beispiel, wenn das Abzeichen aktualisiert wird), macht es jedoch unmöglich, das Abzeichen subtil zu aktualisieren, ohne eine Benachrichtigung anzuzeigen. Darüber hinaus müssen Benutzer Ihrer Site Benachrichtigungsberechtigungen erteilen, um Push-Nachrichten zu empfangen.
    Weitere Informationen finden Sie in der [ServiceWorkerRegistration: showNotification() Methode](/de/docs/Web/API/ServiceWorkerRegistration/showNotification).
- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
  - : PWAs können diese API verwenden, um Code im Hintergrund auszuführen, wenn eine stabile Netzwerkverbindung erkannt wird.
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : PWAs können diese API verwenden, um Code im Hintergrund in regelmäßigen Zeitintervallen auszuführen.

Hier ist ein Beispielcode für einen Service Worker, der zeigt, wie Push-Nachrichten eines Servers abgehört und das App-Abzeichen zur Anzeige einer Anzahl ungelesener Nachrichten aktualisiert werden kann:

```js
// Auf "push"-Ereignisse im Service Worker hören.
self.addEventListener("push", (event) => {
  // Die Anzahl ungelesener Nachrichten aus den Push-Nachrichtendaten extrahieren.
  const message = event.data.json();
  const unreadCount = message.unreadCount;

  // Das Abzeichen setzen oder löschen.
  if (navigator.setAppBadge) {
    if (unreadCount && unreadCount > 0) {
      navigator.setAppBadge(unreadCount);
    } else {
      navigator.clearAppBadge();
    }
  }
  // Es ist obligatorisch, dem Benutzer die Benachrichtigung anzuzeigen.
  self.registration.showNotification(`${unreadCount} unread messages`);
});
```

## Siehe auch

- [Wie erstellt man ein App-Abzeichen](https://web.dev/patterns/web-apps/badges/)
- [Abzeichen für App-Symbole](https://developer.chrome.com/docs/capabilities/web-apis/badging-api)
- [Benutzer mit Abzeichen, Benachrichtigungen und Push-Nachrichten erneut ansprechen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/notifications-badges)
- [Codelab: Erstellen Sie einen Push-Benachrichtigungsserver](https://web.dev/articles/push-notifications-server-codelab)
