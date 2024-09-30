---
title: Verwendung der Notifications API
slug: Web/API/Notifications_API/Using_the_Notifications_API
l10n:
  sourceCommit: 83ec73ac6fec9cae23c54b729e6481f50a0a45e7
---

{{DefaultAPISidebar("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die [Notifications API](/de/docs/Web/API/Notifications_API) ermöglicht es einer Webseite oder App, Benachrichtigungen zu senden, die außerhalb der Seite auf Systemebene angezeigt werden; dies ermöglicht es Web-Apps, Informationen an eine Nutzerin/einen Nutzer zu senden, auch wenn die Anwendung im Leerlauf oder im Hintergrund ist. Dieser Artikel behandelt die Grundlagen der Verwendung dieser API in Ihren eigenen Apps.

Typischerweise beziehen sich Systembenachrichtigungen auf den Standardbenachrichtigungsmechanismus des Betriebssystems: Denken Sie zum Beispiel daran, wie ein typisches Desktop-System oder Mobilgerät Benachrichtigungen sendet.

![Desktop-Benachrichtigung: Aufgabenliste über mdn.github.io HEY! Ihre Aufgabe "Einkaufen gehen" ist jetzt überfällig](desktop-notification.png)

Das Benachrichtigungssystem variiert natürlich je nach Plattform und Browser, aber das ist in Ordnung, und die Notifications API ist so geschrieben, dass sie allgemein genug für die Kompatibilität mit den meisten Systembenachrichtigungssystemen ist.

## Beispiele

Ein naheliegender Anwendungsfall für Webbenachrichtigungen ist eine webbasierte Mail- oder IRC-Anwendung, die die Nutzerin/den Nutzer benachrichtigen muss, wenn eine neue Nachricht empfangen wird, selbst wenn die Nutzerin/der Nutzer gerade etwas anderes mit einer anderen Anwendung macht. Viele Beispiele hierfür sind inzwischen verfügbar, wie z. B. [Slack](https://slack.com/).

Wir haben ein praxisnahes Beispiel geschrieben — eine Aufgabenlisten-App — um eine bessere Vorstellung davon zu geben, wie Webbenachrichtigungen genutzt werden können. Sie speichert Daten lokal mit [IndexedDB](/de/docs/Web/API/IndexedDB_API) und benachrichtigt Benutzer, wenn Aufgaben fällig sind, mit Systembenachrichtigungen. [Laden Sie den Aufgabenlisten-Code herunter](https://github.com/mdn/dom-examples/tree/main/to-do-notifications), oder [sehen Sie sich die App live an](https://mdn.github.io/dom-examples/to-do-notifications/).

## Berechtigung anfordern

Bevor eine App eine Benachrichtigung senden kann, muss der Nutzer der Anwendung das Recht dazu gewähren. Dies ist eine häufige Anforderung, wenn eine API versucht, mit etwas außerhalb einer Webseite zu interagieren — mindestens einmal muss der Nutzer der Anwendung spezifisch die Erlaubnis erteilen, Benachrichtigungen zu präsentieren, damit der Nutzer kontrollieren kann, welche Apps/Webseiten Benachrichtigungen anzeigen dürfen.

Aufgrund von Missbrauch von Push-Benachrichtigungen in der Vergangenheit haben Webbrowser und Entwickler begonnen, Strategien zu implementieren, um dieses Problem zu mildern. Sie sollten nur die Zustimmung zur Anzeige von Benachrichtigungen auf eine Benutzeraktion hin anfordern (z. B. durch Klicken auf einen Button). Dies ist nicht nur Best Practice — Sie sollten Nutzern keine Benachrichtigungen senden, denen sie nicht zugestimmt haben — aber zukünftig werden Browser ausdrücklich Anfragen zur Erlaubnis von Benachrichtigungen nicht zulassen, die nicht durch eine Nutzeraktion ausgelöst werden. Firefox tut dies bereits ab Version 72, und Safari tut dies schon seit einiger Zeit.

Zusätzlich können in Chrome und Firefox keine Benachrichtigungen angefordert werden, es sei denn, die Seite befindet sich in einem sicheren Kontext (d.h. HTTPS), und Sie können keine Benachrichtigungsberechtigungen mehr von {{htmlelement("iframe")}}s aus abfragen, die von anderen Ursprüngen stammen.

### Aktuellen Berechtigungsstatus überprüfen

Sie können überprüfen, ob Sie bereits Berechtigung haben, indem Sie den Wert der lediglich-lesen Eigenschaft [`Notification.permission`](/de/docs/Web/API/Notification/permission_static) überprüfen. Sie kann einen von drei möglichen Werten haben:

- `default`
  - : Der Nutzer wurde noch nicht um Erlaubnis gefragt, daher werden Benachrichtigungen nicht angezeigt.
- `granted`
  - : Der Nutzer hat die Erlaubnis zur Anzeige von Benachrichtigungen erteilt, nachdem er zuvor gefragt wurde.
- `denied`
  - : Der Nutzer hat ausdrücklich die Erlaubnis verweigert, Benachrichtigungen anzuzeigen.

### Berechtigung einholen

Falls die Erlaubnis zur Anzeige von Benachrichtigungen noch nicht erteilt wurde, muss die Anwendung die Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) verwenden, um diese vom Nutzer anzufordern. In der einfachsten Form, fügen wir einfach folgendes ein:

```js
Notification.requestPermission().then((result) => {
  console.log(result);
});
```

Dies nutzt die auf Versprechen basierende Version der Methode. Wenn Sie ältere Versionen unterstützen wollen, müssen Sie möglicherweise die ältere Rückrufversion nutzen, die so aussieht:

```js
Notification.requestPermission((result) => {
  console.log(result);
});
```

Die Rückrufversion akzeptiert optional eine Rückruffunktion, die aufgerufen wird, sobald der Nutzer auf die Anfrage zur Anzeige von Berechtigungen reagiert hat.

> [!NOTE]
> Es gibt keine zuverlässige Möglichkeit, durch Feature-Tests zu überprüfen, ob `Notification.requestPermission` die versprechenbasierte Version unterstützt. Wenn Sie ältere Browser unterstützen müssen, verwenden Sie einfach die rückrufbasierte Version — obwohl diese veraltet ist, funktioniert sie immer noch in neuen Browsern. Überprüfen Sie die [Browser-Kompatibilitätstabelle](/de/docs/Web/API/Notification/requestPermission_static#browser_compatibility) für weitere Informationen.

### Beispiel

In unserem Aufgabenlisten-Demo haben wir eine Schaltfläche "Benachrichtigungen aktivieren", die beim Drücken die Benachrichtigungsberechtigungen für die App anfordert.

```html
<button id="enable">Enable notifications</button>
```

Durch Klicken wird die Funktion `askNotificationPermission()` aufgerufen:

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

Wenn wir uns den zweiten Hauptblock zuerst anschauen, sehen Sie, dass wir zunächst überprüfen, ob Benachrichtigungen unterstützt werden. Wenn dies der Fall ist, führen wir die auf Versprechen basierende Version von `Notification.requestPermission()` aus, und wenn nicht, protokollieren wir eine Nachricht zur Konsole.

Innerhalb des Auflösungs-Handlers, der an `then` übergeben wird, zeigen oder verstecken wir die Schaltfläche, je nachdem, was der Nutzer im Berechtigungsdialog gewählt hat. Wir möchten sie nicht anzeigen, wenn die Berechtigung bereits erteilt wurde, aber wenn der Nutzer sich entschied, die Erlaubnis zu verweigern, möchten wir ihm die Möglichkeit geben, seine Meinung später zu ändern.

## Eine Benachrichtigung erstellen

Eine Benachrichtigung zu erstellen ist einfach; verwenden Sie einfach den [`Notification`](/de/docs/Web/API/Notification)-Konstruktor. Dieser Konstruktor erwartet einen Titel, der innerhalb der Benachrichtigung angezeigt wird, und einige Optionen zur Verbesserung der Benachrichtigung wie ein [`icon`](/de/docs/Web/API/Notification/icon) oder einen Text [`body`](/de/docs/Web/API/Notification/body).

Zum Beispiel verwenden wir im Aufgabenlisten-Beispiel das folgende Snippet, um bei Bedarf eine Benachrichtigung zu erstellen (im Inneren der Funktion `createNotification()` zu finden):

```js
const img = "/to-do-notifications/img/icon-128.png";
const text = `HEY! Your task "${title}" is now overdue.`;
const notification = new Notification("To do list", { body: text, icon: img });
```

## Benachrichtigungen schließen

Verwenden Sie [`close()`](/de/docs/Web/API/Notification/close), um eine Benachrichtigung zu entfernen, die für den Nutzer nicht mehr relevant ist (z. B. hat der Nutzer die Benachrichtigung auf der Webseite bereits gelesen, im Falle einer Messaging-App, oder der folgende Song wird bereits in einer Musik-App abgespielt, die über Songwechsel benachrichtigt). Die meisten modernen Browser blenden Benachrichtigungen automatisch nach einigen Augenblicken aus (etwa vier Sekunden), aber dies sollte generell kein Grund zur Sorge sein, da es dem Nutzer und dem Benutzeragent obliegt. Das Ausblenden kann auch auf Betriebssystemebene erfolgen und die Benutzer sollten die Kontrolle darüber behalten. Alte Versionen von Chrome haben Benachrichtigungen nicht automatisch entfernt, daher können Sie dies nur für diese älteren Versionen nach einem [`setTimeout()`](/de/docs/Web/API/SetTimeout) tun, um keine Benachrichtigungen aus den Benachrichtigungsleisten auf anderen Browsern zu entfernen.

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
> Diese API sollte nicht verwendet werden, um die Benachrichtigung nach einer festgelegten Verzögerung (bei modernen Browsern) einfach von der Anzeige zu entfernen, da diese Methode die Benachrichtigung auch aus jeder Benachrichtigungsleiste entfernt, was verhindert, dass Benutzer mit ihr interagieren, nachdem sie ursprünglich angezeigt wurde.

> [!NOTE]
> Wenn Sie ein "close"-Event erhalten, gibt es keine Garantie dafür, dass es der Nutzer war, der die Benachrichtigung geschlossen hat. Dies steht im Einklang mit der Spezifikation, die besagt: "Wenn eine Benachrichtigung geschlossen wird, entweder durch die zugrunde liegende Benachrichtigungsplattform oder durch den Nutzer, müssen die Schritts zur Schließung für sie ausgeführt werden."

## Benachrichtigungsereignisse

Es gibt vier Ereignisse, die auf der [`Notification`](/de/docs/Web/API/Notification)-Instanz ausgelöst werden:

- `click`
  - : Wird ausgelöst, wenn der Nutzer auf die Benachrichtigung klickt.
- `close`
  - : Wird ausgelöst, wenn die Benachrichtigung geschlossen wird.
- `error`
  - : Wird ausgelöst, wenn etwas mit der Benachrichtigung schiefgeht; dies ist normalerweise der Fall, weil die Benachrichtigung aus irgendeinem Grund nicht angezeigt werden konnte.
- `show`
  - : Wird ausgelöst, wenn die Benachrichtigung für den Nutzer angezeigt wird.

Diese Ereignisse können mit den Handlern [`onclick`](/de/docs/Web/API/Notification/click_event), [`onclose`](/de/docs/Web/API/Notification/close_event), [`onerror`](/de/docs/Web/API/Notification/error_event) und [`onshow`](/de/docs/Web/API/Notification/show_event) verfolgt werden. Da [`Notification`](/de/docs/Web/API/Notification) auch von [`EventTarget`](/de/docs/Web/API/EventTarget) erbt, ist es möglich, die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) darauf zu verwenden.

## Vorhandene Benachrichtigungen ersetzen

Es ist normalerweise unerwünscht, dass ein Nutzer in kurzer Zeit viele Benachrichtigungen erhält — was wäre zum Beispiel, wenn eine Messenger-Anwendung einen Nutzer für jede eingehende Nachricht benachrichtigen würde, und er/sie eine Menge bekommt? Um zu vermeiden, dass der Nutzer mit zu vielen Benachrichtigungen überflutet wird, ist es möglich, die Warteschlange ausstehenden Benachrichtigungen zu modifizieren, einzelne oder mehrere ausstehende Benachrichtigungen durch eine neue zu ersetzen.

Dazu kann einer neuen Benachrichtigung ein Tag hinzugefügt werden. Wenn eine Benachrichtigung bereits dasselbe Tag hat und noch nicht angezeigt wurde, ersetzt die neue Benachrichtigung die vorherige. Wenn die Benachrichtigung mit demselben Tag bereits angezeigt wurde, wird die vorherige Benachrichtigung geschlossen und die neue angezeigt.

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

Um das obige Beispiel zu testen, ändern Sie die [Einstellung zum Senden von Benachrichtigungen](https://support.mozilla.org/en-US/kb/firefox-page-info-window#w_permissions) für die Website `https://live.mdnplay.dev`.

## Siehe auch

- [`Notification`](/de/docs/Web/API/Notification)
