---
title: Verwenden der Notifications API
slug: Web/API/Notifications_API/Using_the_Notifications_API
l10n:
  sourceCommit: 0d0ccc861fa024fa10836fbf0cc2c3813cd74745
---

{{DefaultAPISidebar("Web Notifications")}}

Die [Notifications API](/de/docs/Web/API/Notifications_API) ermöglicht es einer Webseite oder App, Benachrichtigungen zu senden, die außerhalb der Seite auf Systemebene angezeigt werden; so können Web-Apps Informationen an einen Benutzer senden, selbst wenn die Anwendung im Leerlauf oder im Hintergrund ist. Dieser Artikel behandelt die Grundlagen der Verwendung dieser API in Ihren eigenen Apps.

In der Regel beziehen sich Systembenachrichtigungen auf den Standard-Benachrichtigungsmechanismus des Betriebssystems: Denken Sie zum Beispiel an die Art und Weise, wie ein typisches Desktop-System oder mobiles Gerät Benachrichtigungen sendet.

![Desktop-Benachrichtigung: To-Do-Liste via mdn.github.io HEY! Ihre Aufgabe "Einkaufen gehen" ist jetzt überfällig](desktop-notification.png)

Das Systembenachrichtigungssystem unterscheidet sich natürlich je nach Plattform und Browser, aber das ist in Ordnung, da die Notifications API so geschrieben ist, dass sie allgemein genug für die Kompatibilität mit den meisten Systembenachrichtigungssystemen ist.

## Beispiele

Einer der offensichtlichsten Anwendungsfälle für Web-Benachrichtigungen ist eine webbasierte Mail- oder IRC-Anwendung, die den Benutzer benachrichtigen muss, wenn eine neue Nachricht eingeht, selbst wenn der Benutzer etwas anderes mit einer anderen Anwendung macht. Viele Beispiele dafür existieren bereits, wie zum Beispiel [Slack](https://slack.com/).

Wir haben ein praxisnahes Beispiel - eine To-Do-Liste-App - geschrieben, um Ihnen eine bessere Vorstellung davon zu geben, wie Web-Benachrichtigungen verwendet werden können. Es speichert Daten lokal mithilfe von [IndexedDB](/de/docs/Web/API/IndexedDB_API) und benachrichtigt Benutzer, wenn Aufgaben fällig sind, mit Systembenachrichtigungen. [Laden Sie den To-Do-Listen-Code herunter](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) oder [sehen Sie sich die App live an](https://mdn.github.io/dom-examples/to-do-notifications/).

## Erlaubnis anfordern

Bevor eine App eine Benachrichtigung senden kann, muss der Benutzer der Anwendung das Recht dazu gewähren. Dies ist eine häufige Anforderung, wenn eine API versucht, mit etwas außerhalb einer Webseite zu interagieren – mindestens einmal muss der Benutzer der betreffenden Anwendung ausdrücklich die Erlaubnis erteilen, Benachrichtigungen anzuzeigen, wodurch der Benutzer steuern kann, welche Apps/Sites Benachrichtigungen anzeigen dürfen.

Aufgrund von Missbräuchen bei Push-Benachrichtigungen in der Vergangenheit haben Webbrowser und Entwickler begonnen, Strategien zu implementieren, um dieses Problem zu mildern. Sie sollten die Zustimmung zur Anzeige von Benachrichtigungen nur als Reaktion auf eine Benutzeraktion anfordern (z.B. durch Klicken auf einen Button). Dies ist nicht nur bewährte Praxis – Sie sollten Benutzer nicht mit Benachrichtigungen belästigen, denen sie nicht zugestimmt haben – sondern in Zukunft werden Browser explizit Benachrichtigungserlaubnisanfragen verbieten, die nicht als Reaktion auf eine Benutzeraktion ausgelöst werden. Firefox tut dies ab Version 72 bereits, und Safari hat dies schon seit einiger Zeit getan.

Zusätzlich können Sie in Chrome und Firefox Benachrichtigungen nur anfordern, wenn die Seite ein sicherer Kontext ist (d.h. HTTPS), und Sie können nicht mehr erlauben, dass Benachrichtigungserlaubnisse von cross-origin {{htmlelement("iframe")}}s angefordert werden.

### Aktuellen Berechtigungsstatus überprüfen

Sie können überprüfen, ob Sie bereits die Erlaubnis haben, indem Sie den Wert der schreibgeschützten Eigenschaft [`Notification.permission`](/de/docs/Web/API/Notification/permission_static) überprüfen. Es kann einen von drei möglichen Werten haben:

- `default`
  - : Der Benutzer wurde noch nicht um Erlaubnis gefragt, daher werden Benachrichtigungen nicht angezeigt.
- `granted`
  - : Der Benutzer hat die Erlaubnis zur Anzeige von Benachrichtigungen erteilt, nachdem er zuvor gefragt wurde.
- `denied`
  - : Der Benutzer hat ausdrücklich abgelehnt, Benachrichtigungen anzuzeigen.

### Erlaubnis erhalten

Wenn die Erlaubnis zur Anzeige von Benachrichtigungen noch nicht erteilt wurde, muss die Anwendung die Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) verwenden, um diese beim Benutzer anzufordern. In seiner einfachsten Form fügen wir einfach Folgendes ein:

```js
Notification.requestPermission().then((result) => {
  console.log(result);
});
```

Dies verwendet die auf Versprechen basierende Version der Methode. Wenn Sie ältere Versionen unterstützen möchten, müssen Sie möglicherweise die ältere Rückrufversion verwenden, die so aussieht:

```js
Notification.requestPermission((result) => {
  console.log(result);
});
```

Die Rückrufversion akzeptiert optional eine Rückruffunktion, die aufgerufen wird, sobald der Benutzer auf die Anforderung zur Anzeige von Berechtigungen reagiert hat.

> [!NOTE]
> Es gibt keine Möglichkeit, zuverlässig zu testen, ob `Notification.requestPermission` die auf Promises basierende Version unterstützt. Wenn Sie ältere Browser unterstützen müssen, verwenden Sie einfach die rückrufbasierte Version - obwohl diese veraltet ist, funktioniert sie weiterhin in neuen Browsern. Überprüfen Sie die [Browser-Kompatibilitätstabelle](/de/docs/Web/API/Notification/requestPermission_static#browser_compatibility) für weitere Informationen.

### Beispiel

In unserem Demo für die To-Do-Liste haben wir einen "Benachrichtigungen aktivieren"-Button, der beim Drücken die Benachrichtigungserlaubnisse für die App anfordert.

```html
<button id="enable">Enable notifications</button>
```

Durch Klicken darauf wird die `askNotificationPermission()`-Funktion aufgerufen:

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

Wenn Sie sich zuerst den zweiten Hauptblock ansehen, werden Sie sehen, dass wir zunächst überprüfen, ob Benachrichtigungen unterstützt werden. Wenn sie unterstützt werden, führen wir die auf Promises basierende Version von `Notification.requestPermission()` aus, und wenn nicht, protokollieren wir eine Nachricht in der Konsole.

Im Promise-Auflösungs-Handler, der an `then` übergeben wird, zeigen oder verbergen wir den Button, je nachdem, was der Benutzer im Berechtigungsdialogbox gewählt hat. Wir möchten ihn nicht anzeigen, wenn die Erlaubnis bereits erteilt wurde, aber falls der Benutzer sich entschieden hat, die Erlaubnis zu verweigern, möchten wir ihm die Möglichkeit geben, seine Meinung später zu ändern.

## Eine Benachrichtigung erstellen

Eine Benachrichtigung zu erstellen ist einfach; verwenden Sie einfach den [`Notification`](/de/docs/Web/API/Notification) Konstruktor. Dieser Konstruktor erwartet einen Titel zur Anzeige innerhalb der Benachrichtigung und einige Optionen, um die Benachrichtigung zu verbessern, wie ein [`icon`](/de/docs/Web/API/Notification/icon) oder ein Text [`body`](/de/docs/Web/API/Notification/body).

Zum Beispiel verwenden wir im To-Do-Listen-Beispiel das folgende Snippet, um bei Bedarf eine Benachrichtigung zu erstellen (im Inneren der `createNotification()`-Funktion gefunden):

```js
const img = "/to-do-notifications/img/icon-128.png";
const text = `HEY! Your task "${title}" is now overdue.`;
const notification = new Notification("To do list", { body: text, icon: img });
```

## Benachrichtigungen schließen

Verwenden Sie [`close()`](/de/docs/Web/API/Notification/close), um eine Benachrichtigung zu entfernen, die für den Benutzer nicht mehr relevant ist (z.B. der Benutzer hat die Benachrichtigung auf der Webseite bereits gelesen, im Falle einer Messaging-App, oder das folgende Lied spielt schon in einer Musik-App, die bei Liedwechseln benachrichtigt). Die meisten modernen Browser blenden Benachrichtigungen automatisch nach wenigen Momenten (ungefähr vier Sekunden) aus, aber das sollte im Allgemeinen kein großes Problem sein, da es vom Benutzer und dem User-Agent abhängt. Die Abweisung kann auch auf der Betriebssystemebene erfolgen und die Benutzer sollten dies kontrollieren können. Alte Versionen von Chrome haben Benachrichtigungen nicht automatisch entfernt, daher können Sie dies nach einem [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) nur für diese Legacy-Versionen tun, um nicht Benachrichtigungen aus den Benachrichtigungsbereichen in anderen Browsern zu entfernen.

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
> Diese API sollte nicht verwendet werden, nur um die Benachrichtigung nach einer festgelegten Verzögerung (auf modernen Browsern) vom Bildschirm zu entfernen, da diese Methode die Benachrichtigung auch aus jedem Benachrichtigungsbereich entfernt und verhindert, dass Benutzer mit ihr interagieren, nachdem sie ursprünglich angezeigt wurde.

> [!NOTE]
> Wenn Sie ein "close"-Ereignis erhalten, gibt es keine Garantie, dass der Benutzer die Benachrichtigung geschlossen hat. Dies entspricht der Spezifikation, die besagt: "Wenn eine Benachrichtigung geschlossen wird, sei es durch die zugrunde liegende Benachrichtigungsplattform oder durch den Benutzer, müssen die Schlussschritte für sie ausgeführt werden."

## Benachrichtigungsereignisse

Es gibt vier Ereignisse, die bei der [`Notification`](/de/docs/Web/API/Notification)-Instanz ausgelöst werden:

- `click`
  - : Wird ausgelöst, wenn der Benutzer auf die Benachrichtigung klickt.
- `close`
  - : Wird ausgelöst, sobald die Benachrichtigung geschlossen wird.
- `error`
  - : Wird ausgelöst, falls mit der Benachrichtigung etwas schiefgeht; dies liegt in der Regel daran, dass die Benachrichtigung aus irgendeinem Grund nicht angezeigt werden konnte.
- `show`
  - : Wird ausgelöst, wenn die Benachrichtigung dem Benutzer angezeigt wird.

Diese Ereignisse können mit den Handlern [`onclick`](/de/docs/Web/API/Notification/click_event), [`onclose`](/de/docs/Web/API/Notification/close_event), [`onerror`](/de/docs/Web/API/Notification/error_event) und [`onshow`](/de/docs/Web/API/Notification/show_event) verfolgt werden. Da [`Notification`](/de/docs/Web/API/Notification) auch von [`EventTarget`](/de/docs/Web/API/EventTarget) erbt, ist es möglich, die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) darauf zu verwenden.

## Bestehende Benachrichtigungen ersetzen

Es ist in der Regel unerwünscht, dass ein Benutzer in kurzer Zeit viele Benachrichtigungen erhält – zum Beispiel, was wäre, wenn eine Messenger-Anwendung einen Benutzer bei jeder eingehenden Nachricht benachrichtigen würde und viele gesendet würden? Um zu vermeiden, den Benutzer mit zu vielen Benachrichtigungen zu überschwemmen, ist es möglich, die ausstehenden Benachrichtigungen zu ändern, indem man einzelne oder mehrere ausstehende Benachrichtigungen mit einer neuen ersetzt.

Dazu ist es möglich, einer neuen Benachrichtigung ein Tag hinzuzufügen. Wenn eine Benachrichtigung bereits dasselbe Tag hat und noch nicht angezeigt wurde, ersetzt die neue Benachrichtigung diese vorherige Benachrichtigung. Wenn die Benachrichtigung mit demselben Tag bereits angezeigt wurde, wird die vorherige Benachrichtigung geschlossen und die neue angezeigt.

### Tag-Beispiel

Nehmen Sie das folgende einfache HTML an:

```html
<button id="notify">Notify me!</button>
<section id="demo-logs"></section>
```

```css hidden
#demo-logs {
  width: 90%;
  height: 100px;
  background-color: #ddd;
  overflow-x: auto;
  padding: 10px;
  margin-top: 10px;
}
```

Es ist möglich, mehrere Benachrichtigungen auf diese Weise zu handhaben:

```js
const demoLogs = document.querySelector("#demo-logs");

window.addEventListener("load", () => {
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
});
```

### Ergebnis

{{ EmbedLiveSample('Tag_example', '100%', 200) }}

Um das obige Beispiel zu testen, ändern Sie die [mitteilungseinstellung sendenerlaubnis](https://support.mozilla.org/en-US/kb/firefox-page-info-window#w_permissions) für die Website `https://live.mdnplay.dev`.

## Siehe auch

- [`Notification`](/de/docs/Web/API/Notification)
