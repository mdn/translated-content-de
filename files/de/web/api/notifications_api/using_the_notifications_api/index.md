---
title: Verwendung der Notifications API
slug: Web/API/Notifications_API/Using_the_Notifications_API
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{DefaultAPISidebar("Web Notifications")}}

Die [Notifications API](/de/docs/Web/API/Notifications_API) ermöglicht es einer Webseite oder App, Benachrichtigungen zu senden, die außerhalb der Seite auf Systemebene angezeigt werden. Dies erlaubt es Web-Apps, Informationen an einen Benutzer zu senden, selbst wenn die Anwendung inaktiv oder im Hintergrund ist. Dieser Artikel betrachtet die Grundlagen der Verwendung dieser API in Ihren eigenen Apps.

Typischerweise beziehen sich Systembenachrichtigungen auf den Standardmechanismus für Benachrichtigungen des Betriebssystems: Denken Sie beispielsweise daran, wie ein typisches Desktop-System oder mobiles Gerät Benachrichtigungen ausstrahlt.

![Desktop-Benachrichtigung: Zu erledigende Liste via mdn.github.io HEY! Ihre Aufgabe "Einkaufen gehen" ist jetzt fällig](desktop-notification.png)

Das Benachrichtigungssystem des Systems variiert natürlich je nach Plattform und Browser, aber das ist in Ordnung, und die Notifications API ist so konzipiert, dass sie allgemein genug ist, um mit den meisten Systembenachrichtigungssystemen kompatibel zu sein.

## Beispiele

Eine der offensichtlichsten Anwendungsfälle für Web-Benachrichtigungen ist eine webbasierte Mail- oder IRC-Anwendung, die den Benutzer benachrichtigen muss, wenn eine neue Nachricht eingegangen ist, selbst wenn der Benutzer gerade etwas anderes mit einer anderen Anwendung tut. Viele Beispiele dafür existieren bereits, wie etwa [Slack](https://slack.com/).

Wir haben ein Praxisbeispiel geschrieben – eine To-Do-Liste-App –, um einen besseren Eindruck davon zu vermitteln, wie Web-Benachrichtigungen verwendet werden können. Sie speichert Daten lokal mithilfe von [IndexedDB](/de/docs/Web/API/IndexedDB_API) und benachrichtigt Benutzer, wenn Aufgaben fällig sind, über Systembenachrichtigungen. [Laden Sie den To-Do-List-Code herunter](https://github.com/mdn/dom-examples/tree/main/to-do-notifications), oder [sehen Sie sich die App live an](https://mdn.github.io/dom-examples/to-do-notifications/).

## Erlaubnis anfordern

Bevor eine App eine Benachrichtigung senden kann, muss der Benutzer der Anwendung das Recht dazu einräumen. Dies ist eine häufige Anforderung, wenn eine API versucht, mit etwas außerhalb einer Webseite zu interagieren – zumindest einmal muss der Benutzer dieser Anwendung ausdrücklich die Erlaubnis erteilen, Benachrichtigungen zu präsentieren, wodurch der Benutzer kontrollieren kann, welche Apps/Websites Benachrichtigungen anzeigen dürfen.

Aufgrund von Missbräuchen von Push-Benachrichtigungen in der Vergangenheit haben Webbrowser und Entwickler damit begonnen, Strategien zu implementieren, um dieses Problem abzumildern. Sie sollten nur die Erlaubnis zur Anzeige von Benachrichtigungen in Reaktion auf eine Benutzeraktion (z. B. Klicken auf einen Button) anfordern. Dies ist nicht nur eine Best Practice – Sie sollten Benutzer nicht mit Benachrichtigungen belästigen, denen sie nicht zugestimmt haben –, sondern in Zukunft werden Browser explizit Benachrichtigungsberechtigungsanfragen verbieten, die nicht in Reaktion auf eine Benutzeraktion ausgelöst werden. Firefox tut dies bereits seit Version 72, und Safari hat dies schon seit einiger Zeit getan.

Zusätzlich können Sie in Chrome und Firefox keine Benachrichtigungen anfordern, es sei denn, die Seite ist ein sicheres Kontext (d.h. HTTPS), und Sie können die Anforderung von Benachrichtigungsberechtigungen nicht mehr von Cross-Origin-\{{htmlelement("iframe")}}s zulassen.

### Aktuellen Berechtigungsstatus prüfen

Sie können überprüfen, ob Sie bereits die Erlaubnis haben, indem Sie den Wert der schreibgeschützten Eigenschaft [`Notification.permission`](/de/docs/Web/API/Notification/permission_static) überprüfen. Sie kann einen von drei möglichen Werten haben:

- `default`
  - : Der Benutzer wurde noch nicht um Erlaubnis gefragt, daher werden keine Benachrichtigungen angezeigt.
- `granted`
  - : Der Benutzer hat die Erlaubnis erteilt, Benachrichtigungen anzuzeigen, nachdem er vorher gefragt wurde.
- `denied`
  - : Der Benutzer hat ausdrücklich die Erlaubnis abgelehnt, Benachrichtigungen anzuzeigen.

### Erlaubnis erhalten

Wenn die Erlaubnis zur Anzeige von Benachrichtigungen noch nicht erteilt wurde, muss die Anwendung die Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) verwenden, um dies vom Benutzer anzufordern. In seiner einfachsten Form verwenden wir einfach das Folgende:

```js
Notification.requestPermission().then((result) => {
  console.log(result);
});
```

Dies verwendet die Promise-basierte Version der Methode. Wenn Sie ältere Versionen unterstützen möchten, müssen Sie möglicherweise die ältere Callback-Version verwenden, die so aussieht:

```js
Notification.requestPermission((result) => {
  console.log(result);
});
```

Die Callback-Version nimmt optional eine Callback-Funktion an, die aufgerufen wird, sobald der Benutzer auf die Anfrage zur Anzeige von Berechtigungen reagiert hat.

> [!NOTE]
> Es gibt keine Möglichkeit, sicherheitsbewusst zu testen, ob `Notification.requestPermission` die Promise-basierte Version unterstützt. Wenn Sie ältere Browser unterstützen müssen, verwenden Sie einfach die Callback-basierte Version – obwohl dies veraltet ist, funktioniert es immer noch in neuen Browsern. Überprüfen Sie die [Browser-Kompatibilitätstabelle](/de/docs/Web/API/Notification/requestPermission_static#browser_compatibility) für weitere Informationen.

### Beispiel

In unserem To-Do-List-Demo integrieren wir eine Schaltfläche "Benachrichtigungen aktivieren", die, wenn sie gedrückt wird, die Benachrichtigungsberechtigungen für die App anfordert.

```html
<button id="enable">Enable notifications</button>
```

Wenn darauf geklickt wird, wird die Funktion `askNotificationPermission()` aufgerufen:

```js
function askNotificationPermission() {
  // Check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support notifications.");
    return;
  }
  Notification.requestPermission().then((permission) => {
    // set the button to shown or hidden, depending on what the user answers
    notificationBtn.style.display = permission === "granted" ? "none" : "block";
  });
}
```

Beim Betrachten des zweiten Hauptblocks sehen Sie, dass wir zuerst überprüfen, ob Benachrichtigungen unterstützt werden. Wenn sie unterstützt werden, verwenden wir die Promise-basierte Version von `Notification.requestPermission()`, und wenn nicht, protokollieren wir eine Nachricht in der Konsole.

Im Promise-Resolution-Handler, der an `then` übergeben wird, zeigen oder verbergen wir die Schaltfläche, abhängig davon, was der Benutzer im Berechtigungsdialog ausgewählt hat. Wir möchten sie nicht anzeigen, wenn die Berechtigung bereits erteilt wurde, aber wenn der Benutzer die Erlaubnis verweigert hat, möchten wir ihm die Möglichkeit geben, seine Meinung später zu ändern.

## Eine Benachrichtigung erstellen

Eine Benachrichtigung zu erstellen ist einfach; verwenden Sie einfach den [`Notification`](/de/docs/Web/API/Notification) Konstruktor. Dieser Konstruktor erwartet einen Titel, der in der Benachrichtigung angezeigt wird, und einige Optionen, um die Benachrichtigung zu verbessern, wie z. B. ein [`icon`](/de/docs/Web/API/Notification/icon) oder ein Text-[`body`](/de/docs/Web/API/Notification/body).

Zum Beispiel verwenden wir in dem To-Do-List-Beispiel den folgenden Ausschnitt, um bei Bedarf eine Benachrichtigung zu erstellen (zu finden in der `createNotification()` Funktion):

```js
const img = "/to-do-notifications/img/icon-128.png";
const text = `HEY! Your task "${title}" is now overdue.`;
const notification = new Notification("To do list", { body: text, icon: img });
```

## Benachrichtigungen schließen

Verwenden Sie [`close()`](/de/docs/Web/API/Notification/close), um eine Benachrichtigung zu entfernen, die für den Benutzer nicht mehr relevant ist (z. B. hat der Benutzer die Benachrichtigung bereits auf der Webseite gelesen, im Fall einer Messaging-App, oder der folgende Song wird bereits in einer Musik-App abgespielt, die bei Songwechseln benachrichtigt). Die meisten modernen Browser blenden Benachrichtigungen automatisch nach einigen Momenten aus (etwa nach vier Sekunden), aber das sollte normalerweise nicht Ihre Sorge sein, da es dem Benutzer und dem Nutzeragent überlassen ist. Die Ausblendung kann auch auf Betriebssystemebene erfolgen und die Benutzer sollten darüber die Kontrolle behalten. Alte Versionen von Chrome entfernten Benachrichtigungen nicht automatisch, daher können Sie dies nach einem [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) nur für diese Legacy-Versionen tun, um zu vermeiden, dass Benachrichtigungen aus den Benachrichtigungstableaus anderer Browser entfernt werden.

```js
const n = new Notification("My Great Song");
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    // The tab has become visible so clear the now-stale Notification.
    n.close();
  }
});
```

> [!NOTE]
> Diese API sollte nicht einfach verwendet werden, um die Benachrichtigung nach einer festen Verzögerung (in modernen Browsern) vom Bildschirm zu entfernen, da diese Methode die Benachrichtigung auch aus jedem Benachrichtigungsbereich entfernt und verhindert, dass Benutzer damit interagieren, nachdem sie ursprünglich angezeigt wurde.

> [!NOTE]
> Wenn Sie ein "close"-Event erhalten, gibt es keine Garantie, dass der Benutzer die Benachrichtigung geschlossen hat. Dies steht im Einklang mit der Spezifikation, die besagt: "Wenn eine Benachrichtigung geschlossen wird, entweder durch die zugrunde liegende Benachrichtigungsplattform oder durch den Benutzer, müssen die Schlussschritte dafür ausgeführt werden."

## Benachrichtigungsereignisse

Es gibt vier Ereignisse, die auf der [`Notification`](/de/docs/Web/API/Notification)-Instanz ausgelöst werden:

- `click`
  - : Wird ausgelöst, wenn der Benutzer auf die Benachrichtigung klickt.
- `close`
  - : Wird ausgelöst, sobald die Benachrichtigung geschlossen wird.
- `error`
  - : Wird ausgelöst, wenn etwas mit der Benachrichtigung schiefgeht; dies ist normalerweise der Fall, wenn die Benachrichtigung aus irgendeinem Grund nicht angezeigt werden konnte.
- `show`
  - : Wird ausgelöst, wenn die Benachrichtigung dem Benutzer angezeigt wird.

Diese Ereignisse können mit den [`onclick`](/de/docs/Web/API/Notification/click_event), [`onclose`](/de/docs/Web/API/Notification/close_event), [`onerror`](/de/docs/Web/API/Notification/error_event) und [`onshow`](/de/docs/Web/API/Notification/show_event) Handlern verfolgt werden. Da [`Notification`](/de/docs/Web/API/Notification) auch von [`EventTarget`](/de/docs/Web/API/EventTarget) erbt, ist es möglich, die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) darauf zu verwenden.

## Bestehende Benachrichtigungen ersetzen

Es ist normalerweise unerwünscht für einen Benutzer, eine große Anzahl von Benachrichtigungen in kurzer Zeit zu erhalten – was wäre zum Beispiel, wenn eine Messenger-Anwendung einen Benutzer für jede eingehende Nachricht benachrichtigen würde, und sie wurden ihm viele geschickt? Um zu vermeiden, dass der Benutzer mit zu vielen Benachrichtigungen gespammt wird, ist es möglich, die Warteschlange ausstehenden Benachrichtigungen zu modifizieren, einzelne oder mehrere ausstehende Benachrichtigungen mit einer neuen zu ersetzen.

Dazu kann einem neuen Benachrichtigung eine Kennzeichnung hinzugefügt werden. Wenn eine Benachrichtigung bereits dieselbe Kennzeichnung hat und noch nicht angezeigt wurde, ersetzt die neue Benachrichtigung diese vorherige Benachrichtigung. Wenn die Benachrichtigung mit derselben Kennzeichnung bereits angezeigt wurde, wird die vorherige Benachrichtigung geschlossen und die neue angezeigt.

### Tag-Beispiel

Angenommen, das folgende grundlegende HTML:

```html
<button id="notify">Notify me!</button>
<section id="demo-logs"></section>
```

```css hidden
#demo-logs {
  width: 90%;
  height: 100px;
  background-color: #dddddd;
  overflow-x: auto;
  padding: 10px;
  margin-top: 10px;
}
```

Es ist möglich, mehrere Benachrichtigungen auf diese Weise zu handhaben:

```js
const demoLogs = document.querySelector("#demo-logs");

const button = document.querySelector("#notify");

button.addEventListener("click", () => {
  if (Notification?.permission === "granted") {
    demoLogs.innerText += `The site has permission to show notifications. Showing notifications.\n`;
    // If the user agreed to get notified
    // Let's try to send ten notifications
    let i = 0;
    // Using an interval cause some browsers (including Firefox) are blocking notifications if there are too much in a certain time.
    const interval = setInterval(() => {
      // Thanks to the tag, we should only see the "Hi no 9 from MDN." notification
      const n = new Notification(`Hi no ${i} from MDN.`, {
        tag: "soManyNotification",
      });
      if (i === 9) {
        clearInterval(interval);
      }
      i++;
    }, 200);
  } else if (Notification?.permission !== "denied") {
    demoLogs.innerText += "Requesting notification permission.\n";
    // If the user hasn't told if they want to be notified or not
    // Note: because of Chrome, we are not sure the permission property
    // is set, therefore it's unsafe to check for the "default" value.
    Notification.requestPermission().then((status) => {
      // If the user said okay
      if (status === "granted") {
        demoLogs.innerText +=
          "User granted the permission. Sending notifications.\n";
        let i = 0;
        // Using an interval cause some browsers (including Firefox) are blocking notifications if there are too much in a certain time.
        const interval = setInterval(() => {
          // Thanks to the tag, we should only see the "Message no 9 from MDN." notification
          const n = new Notification(`Message no ${i} from MDN.`, {
            tag: "soManyNotification",
          });
          if (i === 9) {
            clearInterval(interval);
          }
          i++;
        }, 200);
      } else {
        // Otherwise, we can fallback to a regular modal alert
        demoLogs.innerText += `User denied the permission request.\n`;
      }
    });
  } else {
    // If the user refuses to get notified, we can fallback to a regular modal alert
    demoLogs.innerText += `The site does not have permission to show notifications.\n`;
  }
});
```

### Ergebnis

{{ EmbedLiveSample('Tag_example', '100%', 200) }}

Um das obige Beispiel zu testen, ändern Sie die [Sendebenachrichtigungseinstellungen](https://support.mozilla.org/en-US/kb/firefox-page-info-window#w_permissions) für die Website `https://live.mdnplay.dev`.

## Siehe auch

- [`Notification`](/de/docs/Web/API/Notification)
