---
title: Verwendung der Notifications API
slug: Web/API/Notifications_API/Using_the_Notifications_API
l10n:
  sourceCommit: 3e8eb2b3466248d87e86df227f45deb49054aa42
---

{{DefaultAPISidebar("Web Notifications")}}

Die [Notifications API](/de/docs/Web/API/Notifications_API) ermöglicht es einer Webseite oder App, Benachrichtigungen zu senden, die außerhalb der Seite auf Systemebene angezeigt werden; dies ermöglicht Web-Apps, Informationen an einen Benutzer zu senden, selbst wenn die Anwendung inaktiv ist oder im Hintergrund läuft. Dieser Artikel behandelt die Grundlagen der Verwendung dieser API in Ihren eigenen Apps.

Typischerweise beziehen sich Systembenachrichtigungen auf den Standard-Benachrichtigungsmechanismus des Betriebssystems: Denken Sie zum Beispiel daran, wie ein typisches Desktop-System oder mobiles Gerät Benachrichtigungen sendet.

![Desktop-Benachrichtigung: Aufgabenliste über mdn.github.io HEY! Ihre Aufgabe "Einkaufen gehen" ist jetzt überfällig](desktop-notification.png)

Das Systembenachrichtigungssystem variiert natürlich je nach Plattform und Browser, aber das ist in Ordnung, und die Notifications API ist so geschrieben, dass sie allgemein genug für die Kompatibilität mit den meisten Systembenachrichtigungssystemen ist.

## Beispiele

Ein offensichtlicher Anwendungsfall für Web-Benachrichtigungen ist eine webbasierte Mail- oder IRC-Anwendung, die den Benutzer benachrichtigen muss, wenn eine neue Nachricht eingeht, selbst wenn der Benutzer gerade etwas anderes mit einer anderen Anwendung macht. Viele Beispiele dafür existieren nun, wie z. B. [Slack](https://slack.com/).

Wir haben ein praxisnahes Beispiel geschrieben - eine Aufgabenlisten-App -, um eine Vorstellung davon zu geben, wie Web-Benachrichtigungen verwendet werden können. Sie speichert Daten lokal mit [IndexedDB](/de/docs/Web/API/IndexedDB_API) und benachrichtigt Benutzer, wenn Aufgaben fällig sind, mithilfe von Systembenachrichtigungen. [Laden Sie den Code der Aufgabenliste herunter](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) oder [sehen Sie sich die App live in Betrieb an](https://mdn.github.io/dom-examples/to-do-notifications/).

## Einholen der Erlaubnis

Bevor eine App eine Benachrichtigung senden kann, muss der Benutzer der Anwendung das Recht dazu erteilen. Dies ist eine häufige Anforderung, wenn eine API versucht, mit etwas außerhalb einer Webseite zu interagieren - zumindest einmal muss der Benutzer dieser Anwendung ausdrücklich die Erlaubnis erteilen, Benachrichtigungen zu präsentieren, damit der Benutzer kontrollieren kann, welche Apps/Websites Benachrichtigungen anzeigen dürfen.

Aufgrund des Missbrauchs von Push-Benachrichtigungen in der Vergangenheit haben Webbrowser und Entwickler begonnen, Strategien zu implementieren, um dieses Problem zu mildern. Sie sollten die Zustimmung zur Anzeige von Benachrichtigungen nur als Reaktion auf eine Benutzerhandlung anfordern (z. B. durch Klicken auf eine Schaltfläche). Dies ist nicht nur bewährte Praxis - Sie sollten Benutzer nicht mit Benachrichtigungen belästigen, denen sie nicht zugestimmt haben - sondern in Zukunft werden Browser Benachrichtigungsberechtigungsanfragen ausdrücklich verbieten, die nicht als Reaktion auf eine Benutzerhandlung ausgelöst werden. Firefox tut dies bereits seit Version 72, zum Beispiel, und Safari tut dies schon seit einiger Zeit.

Darüber hinaus können Sie in Chrome und Firefox Benachrichtigungen nur anfordern, wenn die Website ein sicherer Kontext ist (d.h. HTTPS), und Sie können keine Berechtigungen für Benachrichtigungen mehr von cross-origin {{htmlelement("iframe")}}s anfordern.

> [!NOTE]
> Die Beispiele in diesem Artikel verwenden den [`Notification()`](/de/docs/Web/API/Notification/Notification) Konstruktor, um Benachrichtigungen zu erstellen. Dies ist für Desktops in Ordnung, aber in den meisten mobilen Browsern wird dies einen {{jsxref("TypeError")}} auslösen. Wenn Sie mobile Geräte anvisieren, sollten Sie einen Service Worker registrieren und [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) stattdessen verwenden.

### Überprüfung des aktuellen Berechtigungsstatus

Sie können prüfen, ob Sie bereits die Berechtigung haben, indem Sie den Wert der schreibgeschützten Eigenschaft [`Notification.permission`](/de/docs/Web/API/Notification/permission_static) überprüfen. Sie kann einen von drei möglichen Werten haben:

- `default`
  - : Der Benutzer wurde noch nicht um Erlaubnis gefragt, daher werden keine Benachrichtigungen angezeigt.
- `granted`
  - : Der Benutzer hat die Erlaubnis zur Anzeige von Benachrichtigungen erteilt, nachdem er zuvor gefragt wurde.
- `denied`
  - : Der Benutzer hat die Erlaubnis zur Anzeige von Benachrichtigungen ausdrücklich abgelehnt.

### Erlaubnis einholen

Wenn die Erlaubnis zur Anzeige von Benachrichtigungen noch nicht erteilt wurde, muss die Anwendung die Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) verwenden, um dies vom Benutzer anzufordern. In seiner einfachsten Form fügen wir einfach Folgendes hinzu:

```js
Notification.requestPermission().then((result) => {
  console.log(result);
});
```

Dies verwendet die auf Versprechungen basierende Version der Methode. Wenn Sie ältere Versionen unterstützen möchten, müssen Sie möglicherweise die ältere Callback-Version verwenden, die so aussieht:

```js
Notification.requestPermission((result) => {
  console.log(result);
});
```

Die Callback-Version akzeptiert optional eine Callback-Funktion, die aufgerufen wird, sobald der Benutzer auf die Anzeigeanforderungen geantwortet hat.

> [!NOTE]
> Es gibt keine Möglichkeit, zuverlässig zu testen, ob `Notification.requestPermission` die auf Versprechungen basierende Version unterstützt. Wenn Sie ältere Browser unterstützen müssen, verwenden Sie einfach die auf Callbacks basierende Version - obwohl diese veraltet ist, funktioniert sie immer noch in neuen Browsern. Überprüfen Sie die [Browser-Kompatibilitätstabelle](/de/docs/Web/API/Notification/requestPermission_static#browser_compatibility) für weitere Informationen.

### Beispiel

In unserem Demoprojekt der Aufgabenliste fügen wir eine Schaltfläche "Benachrichtigungen aktivieren" hinzu, die beim Drücken die Benachrichtigungsberechtigungen für die App anfordert.

```html
<button id="enable">Enable notifications</button>
```

Beim Anklicken wird die Funktion `askNotificationPermission()` aufgerufen:

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

Wenn Sie sich zuerst den zweiten Hauptblock ansehen, sehen Sie, dass wir zuerst prüfen, ob Benachrichtigungen unterstützt werden. Wenn dies der Fall ist, führen wir die auf Versprechungen basierende Version von `Notification.requestPermission()` aus, und wenn nicht, protokollieren wir eine Nachricht in die Konsole.

Im Bereich des Versprechens, das zu `then` übergeben wird, zeigen oder verbergen wir die Schaltfläche je nachdem, was der Benutzer im Berechtigungsdialog ausgewählt hat. Wir wollen sie nicht anzeigen, wenn die Berechtigung bereits erteilt wurde, aber wenn der Benutzer die Erlaubnis ablehnt, wollen wir ihm die Möglichkeit geben, später seine Meinung zu ändern.

## Erstellen einer Benachrichtigung

Das Erstellen einer Benachrichtigung ist einfach; verwenden Sie einfach den [`Notification`](/de/docs/Web/API/Notification) Konstruktor. Dieser Konstruktor erwartet einen Titel zur Anzeige in der Benachrichtigung und einige Optionen, um die Benachrichtigung zu verbessern, wie z.B. ein [`icon`](/de/docs/Web/API/Notification/icon) oder einen Text [`body`](/de/docs/Web/API/Notification/body).

Zum Beispiel verwenden wir im Aufgabenlistenbeispiel den folgenden Codeausschnitt, um bei Bedarf eine Benachrichtigung zu erstellen (zu finden in der Funktion `createNotification()`):

```js
const img = "/to-do-notifications/img/icon-128.png";
const text = `HEY! Your task "${title}" is now overdue.`;
const notification = new Notification("To do list", { body: text, icon: img });
```

## Schließen von Benachrichtigungen

Verwenden Sie [`close()`](/de/docs/Web/API/Notification/close), um eine Benachrichtigung zu entfernen, die für den Benutzer nicht mehr relevant ist (z. B. hat der Benutzer die Benachrichtigung auf der Webseite bereits gelesen, im Fall einer Nachrichten-App, oder das folgende Lied wird bereits in einer Musik-App abgespielt, die bei Liedwechseln benachrichtigt). Die meisten modernen Browser schließen Benachrichtigungen automatisch nach einigen Momenten (ungefähr vier Sekunden), aber dies ist etwas, worüber Sie sich im Allgemeinen keine Sorgen machen sollten, da es dem Benutzer und dem Browser überlassen ist. Das Schließen kann auch auf Betriebssystemebene erfolgen und Benutzer sollten die Kontrolle darüber behalten. Alte Versionen von Chrome haben Benachrichtigungen nicht automatisch geschlossen, sodass Sie dies nur für diese älteren Versionen mit einem [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) tun können, um Benachrichtigungen nicht aus den Benachrichtigungstabletts anderer Browser zu entfernen.

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
> Diese API sollte nicht verwendet werden, nur um die Benachrichtigung nach einer festen Verzögerung (auf modernen Browsern) vom Bildschirm zu entfernen, da diese Methode die Benachrichtigung auch aus jedem Benachrichtigungstablett entfernt, wodurch Benutzer daran gehindert werden, mit ihr zu interagieren, nachdem sie ursprünglich angezeigt wurde.

> [!NOTE]
> Wenn Sie ein "close"-Ereignis erhalten, gibt es keine Garantie, dass es der Benutzer war, der die Benachrichtigung geschlossen hat. Dies entspricht der Spezifikation, die besagt: "Wenn eine Benachrichtigung geschlossen wird, entweder durch die zugrunde liegende Benachrichtigungsplattform oder durch den Benutzer, müssen die Schritts für das Schließen ausgeführt werden."

## Benachrichtigungsereignisse

Es gibt vier Ereignisse, die auf der [`Notification`](/de/docs/Web/API/Notification) Instanz ausgelöst werden:

- `click`
  - : Ausgelöst, wenn der Benutzer auf die Benachrichtigung klickt.
- `close`
  - : Ausgelöst, sobald die Benachrichtigung geschlossen wird.
- `error`
  - : Ausgelöst, wenn etwas mit der Benachrichtigung schiefgeht; dies ist normalerweise der Fall, weil die Benachrichtigung aus irgendeinem Grund nicht angezeigt werden konnte.
- `show`
  - : Ausgelöst, wenn die Benachrichtigung dem Benutzer angezeigt wird.

Diese Ereignisse können mittels der Handler [`onclick`](/de/docs/Web/API/Notification/click_event), [`onclose`](/de/docs/Web/API/Notification/close_event), [`onerror`](/de/docs/Web/API/Notification/error_event) und [`onshow`](/de/docs/Web/API/Notification/show_event) verfolgt werden. Da [`Notification`](/de/docs/Web/API/Notification) auch von [`EventTarget`](/de/docs/Web/API/EventTarget) erbt, ist es möglich, die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) darauf zu verwenden.

## Ersetzen bestehender Benachrichtigungen

Es ist in der Regel unerwünscht, dass ein Benutzer eine Vielzahl von Benachrichtigungen in kurzer Zeit erhält - z.B., was wäre, wenn eine Messenger-Anwendung einen Benutzer für jede eingehende Nachricht benachrichtigen würde und ihm viele Nachrichten geschickt würden? Um den Benutzer nicht mit zu vielen Benachrichtigungen zu überfluten, ist es möglich, die ausstehenden Benachrichtigungen zu ändern und eine einzelne oder mehrere ausstehende Benachrichtigungen durch eine neue zu ersetzen.

Um dies zu erreichen, kann einer neuen Benachrichtigung ein Tag hinzugefügt werden. Wenn eine Benachrichtigung bereits dasselbe Tag hat und noch nicht angezeigt wurde, ersetzt die neue Benachrichtigung die vorherige Benachrichtigung. Wenn die Benachrichtigung mit demselben Tag bereits angezeigt wurde, wird die vorherige Benachrichtigung geschlossen und die neue angezeigt.

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
  background-color: #dddddd;
  overflow-x: auto;
  padding: 10px;
  margin-top: 10px;
}
```

Es ist möglich, mehrere Benachrichtigungen auf diese Weise zu bearbeiten:

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

Um das obige Beispiel zu testen, ändern Sie die [Sendeberechtigungseinstellung](https://support.mozilla.org/en-US/kb/firefox-page-info-window#w_permissions) für die Website `https://live.mdnplay.dev`.

## Siehe auch

- [`Notification`](/de/docs/Web/API/Notification)
