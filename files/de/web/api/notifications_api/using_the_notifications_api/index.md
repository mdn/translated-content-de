---
title: Verwendung der Notifications API
slug: Web/API/Notifications_API/Using_the_Notifications_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die [Notifications API](/de/docs/Web/API/Notifications_API) ermöglicht es einer Webseite oder App, Benachrichtigungen zu senden, die außerhalb der Seite auf Systemebene angezeigt werden. Dies ermöglicht es Web-Apps, Informationen an einen Benutzer zu senden, auch wenn die Anwendung im Leerlauf oder im Hintergrund ist. Dieser Artikel behandelt die Grundlagen der Nutzung dieser API in Ihren eigenen Apps.

Typischerweise beziehen sich Systembenachrichtigungen auf den Standardbenachrichtigungsmechanismus des Betriebssystems: Denken Sie zum Beispiel daran, wie ein typisches Desktop-System oder Mobilgerät Benachrichtigungen sendet.

![Desktop-Benachrichtigung: Aufgabenliste über mdn.github.io HEY! Ihre Aufgabe "Einkaufen gehen" ist jetzt überfällig](desktop-notification.png)

Das Systembenachrichtigungssystem variiert natürlich je nach Plattform und Browser, aber das ist in Ordnung, und die Notifications API ist so gestaltet, dass sie allgemein genug ist, um mit den meisten Systembenachrichtigungssystemen kompatibel zu sein.

## Beispiele

Ein offensichtlicher Anwendungsfall für Web-Benachrichtigungen ist eine webbasierte E-Mail- oder IRC-Anwendung, die den Benutzer benachrichtigen muss, wenn eine neue Nachricht eingegangen ist, selbst wenn er gerade mit einer anderen Anwendung beschäftigt ist. Viele Beispiele dafür existieren mittlerweile, wie zum Beispiel [Slack](https://slack.com/).

Wir haben ein praxisnahes Beispiel geschrieben – eine Aufgabenlisten-App – um eine Vorstellung davon zu geben, wie Web-Benachrichtigungen verwendet werden können. Sie speichert Daten lokal mithilfe von [IndexedDB](/de/docs/Web/API/IndexedDB_API) und benachrichtigt Benutzer, wenn Aufgaben fällig sind, mithilfe von Systembenachrichtigungen. [Laden Sie den Aufgabenlisten-Code herunter](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) oder [sehen Sie sich die App live an](https://mdn.github.io/dom-examples/to-do-notifications/).

## Berechtigung anfordern

Bevor eine App eine Benachrichtigung senden kann, muss der Benutzer der Anwendung das Recht dazu gewähren. Dies ist eine häufige Anforderung, wenn eine API versucht, mit etwas außerhalb einer Webseite zu interagieren – der Benutzer muss zumindest einmal der Anwendung explizit die Berechtigung erteilen, Benachrichtigungen anzuzeigen, wodurch der Benutzer kontrollieren kann, welche Apps/Websites Benachrichtigungen anzeigen dürfen.

Aufgrund von Missbrauchsfällen bei Push-Benachrichtigungen in der Vergangenheit haben Webbrowser und Entwickler begonnen, Strategien zu implementieren, um diesem Problem zu begegnen. Sie sollten nur dann die Zustimmung zur Anzeige von Benachrichtigungen anfordern, wenn eine Nutzeraktion erfolgt (z.B. das Klicken auf einen Button). Dies ist nicht nur bewährte Praxis – Sie sollten Benutzer nicht mit Benachrichtigungen belästigen, denen sie nicht zugestimmt haben – sondern in Zukunft werden Browser ausdrücklich Benachrichtigungsberechtigungsanfragen ablehnen, die nicht als Reaktion auf eine Nutzeraktion ausgelöst werden. Firefox tut dies bereits ab Version 72, und Safari hat dies schon seit einiger Zeit umgesetzt.

Zusätzlich können Sie in Chrome und Firefox Benachrichtigungen überhaupt nicht anfordern, es sei denn, die Website befindet sich in einem sicheren Kontext (d.h. über HTTPS), und es ist nicht mehr erlaubt, Benachrichtigungsanfragen von fremden {{htmlelement("iframe")}}s zu stellen.

### Aktuellen Berechtigungsstatus überprüfen

Sie können überprüfen, ob Sie bereits Berechtigungen haben, indem Sie den Wert der schreibgeschützten Eigenschaft [`Notification.permission`](/de/docs/Web/API/Notification/permission_static) abfragen. Diese kann einen von drei möglichen Werten haben:

- `default`
  - : Der Benutzer wurde noch nicht um Erlaubnis gefragt, daher werden keine Benachrichtigungen angezeigt.
- `granted`
  - : Der Benutzer hat die Erlaubnis zur Anzeige von Benachrichtigungen erteilt, nachdem er vorher gefragt wurde.
- `denied`
  - : Der Benutzer hat die Erlaubnis zur Anzeige von Benachrichtigungen ausdrücklich verweigert.

### Berechtigung einholen

Falls die Erlaubnis zur Anzeige von Benachrichtigungen noch nicht erteilt wurde, muss die Anwendung die Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) verwenden, um diese vom Benutzer anzufordern. In der einfachsten Form fügen wir einfach Folgendes ein:

```js
Notification.requestPermission().then((result) => {
  console.log(result);
});
```

Dies verwendet die auf Versprechen basierende Version der Methode. Wenn Sie ältere Versionen unterstützen möchten, müssen Sie möglicherweise die ältere Callback-Version verwenden, die so aussieht:

```js
Notification.requestPermission((result) => {
  console.log(result);
});
```

Die Callback-Version akzeptiert optional eine Callback-Funktion, die aufgerufen wird, sobald der Benutzer auf die Anfrage zur Anzeige der Berechtigungen reagiert hat.

> [!NOTE]
> Es gibt keine verlässliche Möglichkeit, zu testen, ob `Notification.requestPermission` die auf Versprechen basierende Version unterstützt. Wenn Sie ältere Browser unterstützen müssen, verwenden Sie einfach die Callback-basierte Version – obwohl diese veraltet ist, funktioniert sie noch in neuen Browsern. Prüfen Sie die [Browser-Kompatibilitätstabelle](/de/docs/Web/API/Notification/requestPermission_static#browser_compatibility) für weitere Informationen.

### Beispiel

In unserem Aufgabenlisten-Demo haben wir eine "Benachrichtigungen aktivieren"-Schaltfläche eingefügt, die beim Drücken Benachrichtigungsberechtigungen für die App anfordert.

```html
<button id="enable">Enable notifications</button>
```

Wenn Sie darauf klicken, wird die Funktion `askNotificationPermission()` aufgerufen:

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

Wenn Sie sich zuerst den zweiten Hauptblock ansehen, werden Sie sehen, dass wir zuerst überprüfen, ob Benachrichtigungen unterstützt werden. Falls ja, führen wir die auf Versprechen basierende Version von `Notification.requestPermission()` aus, und falls nicht, protokollieren wir eine Nachricht in der Konsole.

Innerhalb des Promise-Auflösungsbehandlers, der an `then` übergeben wird, zeigen wir den Button an oder verstecken ihn, je nachdem, was der Benutzer im Berechtigungsdialog ausgewählt hat. Wir möchten ihn nicht anzeigen, wenn die Erlaubnis bereits erteilt wurde, aber wenn der Benutzer die Erlaubnis abgelehnt hat, möchten wir ihm die Möglichkeit geben, seine Meinung später zu ändern.

## Erstellen einer Benachrichtigung

Eine Benachrichtigung zu erstellen ist einfach; verwenden Sie einfach den [`Notification`](/de/docs/Web/API/Notification)-Konstruktor. Dieser Konstruktor erwartet einen Titel, der innerhalb der Benachrichtigung angezeigt werden soll, und einige Optionen, um die Benachrichtigung zu erweitern, wie ein [`icon`](/de/docs/Web/API/Notification/icon) oder einen Text [`body`](/de/docs/Web/API/Notification/body).

Zum Beispiel verwenden wir im Aufgabenlisten-Beispiel den folgenden Ausschnitt, um eine Benachrichtigung bei Bedarf zu erstellen (zu finden in der `createNotification()`-Funktion):

```js
const img = "/to-do-notifications/img/icon-128.png";
const text = `HEY! Your task "${title}" is now overdue.`;
const notification = new Notification("To do list", { body: text, icon: img });
```

## Schließen von Benachrichtigungen

Verwenden Sie [`close()`](/de/docs/Web/API/Notification/close), um eine Benachrichtigung zu entfernen, die für den Benutzer nicht mehr relevant ist (z.B. der Benutzer hat die Benachrichtigung bereits auf der Webseite gelesen, im Fall einer Messaging-App, oder das nächste Lied wird bereits in einer Musik-App abgespielt, die Benachrichtigungen bei Liedwechseln anzeigt). Die meisten modernen Browser schließen Benachrichtigungen automatisch nach einigen Momenten (ungefähr vier Sekunden), aber das ist normalerweise kein Grund zur Sorge, da es vom Benutzer und Benutzeragenten abhängt. Das Schließen kann auch auf Betriebssystemebene erfolgen, und Benutzer sollten die Kontrolle darüber behalten. Alte Versionen von Chrome schlossen Benachrichtigungen nicht automatisch, sodass Sie dies nur für diese Legacy-Versionen nach einem [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) tun können, um sicherzustellen, dass Benachrichtigungen nicht aus den Benachrichtigungstabletts anderer Browser entfernt werden.

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
> Diese API sollte nicht nur verwendet werden, um die Benachrichtigung nach einer festen Verzögerung (auf modernen Browsern) vom Bildschirm zu entfernen, da diese Methode auch die Benachrichtigung aus jedem Benachrichtigungstablett entfernt, wodurch verhindert wird, dass Benutzer mit ihr interagieren können, nachdem sie ursprünglich angezeigt wurde.

> [!NOTE]
> Wenn ein "close"-Ereignis empfangen wird, gibt es keine Garantie, dass es der Benutzer war, der die Benachrichtigung geschlossen hat. Dies entspricht der Spezifikation, die besagt: "Wenn eine Benachrichtigung geschlossen wird, entweder durch die zugrundeliegende Benachrichtigungsplattform oder durch den Benutzer, müssen die Schließschritte für sie ausgeführt werden."

## Benachrichtigungsereignisse

Es gibt vier Ereignisse, die auf der [`Notification`](/de/docs/Web/API/Notification)-Instanz ausgelöst werden:

- `click`
  - : Wird ausgelöst, wenn der Benutzer auf die Benachrichtigung klickt.
- `close`
  - : Wird ausgelöst, sobald die Benachrichtigung geschlossen wird.
- `error`
  - : Wird ausgelöst, wenn etwas mit der Benachrichtigung schiefgeht; dies geschieht in der Regel, weil die Benachrichtigung aus irgendeinem Grund nicht angezeigt werden konnte.
- `show`
  - : Wird ausgelöst, wenn die Benachrichtigung dem Benutzer angezeigt wird.

Diese Ereignisse können über die Handler [`onclick`](/de/docs/Web/API/Notification/click_event), [`onclose`](/de/docs/Web/API/Notification/close_event), [`onerror`](/de/docs/Web/API/Notification/error_event) und [`onshow`](/de/docs/Web/API/Notification/show_event) nachverfolgt werden. Da [`Notification`](/de/docs/Web/API/Notification) auch von [`EventTarget`](/de/docs/Web/API/EventTarget) erbt, ist es möglich, die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) darauf zu verwenden.

## Ersetzen bestehender Benachrichtigungen

Es ist in der Regel unerwünscht, dass ein Benutzer in kurzer Zeit viele Benachrichtigungen erhält – was wäre zum Beispiel, wenn eine Messenger-Anwendung einen Benutzer für jede eingehende Nachricht benachrichtigen würde, und sie viele Nachrichten erhält? Um zu vermeiden, dass der Benutzer mit zu vielen Benachrichtigungen überschwemmt wird, ist es möglich, die Warteschlange der ausstehenden Benachrichtigungen zu ändern und einzelne oder mehrere ausstehende Benachrichtigungen durch eine neue zu ersetzen.

Hierzu kann jedem neuen Benachrichtigung eine Tag hinzugefügt werden. Wenn eine Benachrichtigung bereits das gleiche Tag hat und noch nicht angezeigt wurde, ersetzt die neue Benachrichtigung die vorherige Benachrichtigung. Wenn die Benachrichtigung mit dem gleichen Tag bereits angezeigt wurde, wird die vorherige Benachrichtigung geschlossen und die neue angezeigt.

### Tag-Beispiel

Nehmen Sie folgendes grundlegendes HTML an:

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

Um das obige Beispiel zu testen, ändern Sie die [Einstellung für das Senden von Benachrichtigungen](https://support.mozilla.org/en-US/kb/firefox-page-info-window#w_permissions) für die Website `https://live.mdnplay.dev`.

## Siehe auch

- [`Notification`](/de/docs/Web/API/Notification)
