---
title: Verwendung der Notifications API
slug: Web/API/Notifications_API/Using_the_Notifications_API
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{DefaultAPISidebar("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die [Notifications API](/de/docs/Web/API/Notifications_API) ermöglicht es einer Webseite oder App, Benachrichtigungen zu senden, die außerhalb der Seite auf Systemebene angezeigt werden; dies erlaubt es Web-Apps, Informationen an einen Benutzer zu senden, auch wenn die Anwendung inaktiv oder im Hintergrund ist. Dieser Artikel beschreibt die Grundlagen der Verwendung dieser API in Ihren eigenen Apps.

In der Regel beziehen sich Systembenachrichtigungen auf den Standardmechanismus für Benachrichtigungen des Betriebssystems: Denken Sie zum Beispiel daran, wie ein typisches Desktop-System oder ein mobiles Gerät Benachrichtigungen sendet.

![Desktop-Benachrichtigung: Aufgabenliste über mdn.github.io HEY! Ihre Aufgabe "Einkaufen gehen" ist jetzt überfällig](desktop-notification.png)

Das Benachrichtigungssystem des Systems variiert natürlich je nach Plattform und Browser, aber das ist in Ordnung, und die Notifications API ist allgemein genug geschrieben, um mit den meisten Systembenachrichtigungssystemen kompatibel zu sein.

## Beispiele

Eine der offensichtlichsten Einsatzmöglichkeiten für Web-Benachrichtigungen ist eine webbasierte Mail- oder IRC-Anwendung, die den Benutzer benachrichtigen muss, wenn eine neue Nachricht eingegangen ist, auch wenn der Benutzer gerade mit einer anderen Anwendung beschäftigt ist. Viele Beispiele dafür gibt es inzwischen, wie zum Beispiel [Slack](https://slack.com/).

Wir haben ein praxisnahes Beispiel geschrieben — eine Aufgabenlisten-App — um mehr darüber zu erfahren, wie Web-Benachrichtigungen verwendet werden können. Sie speichert Daten lokal mit [IndexedDB](/de/docs/Web/API/IndexedDB_API) und benachrichtigt Benutzer, wenn Aufgaben fällig sind, mit Systembenachrichtigungen. [Laden Sie den Aufgabenlisten-Code herunter](https://github.com/mdn/dom-examples/tree/main/to-do-notifications), oder [sehen Sie sich die App live an](https://mdn.github.io/dom-examples/to-do-notifications/).

## Erlaubnis anfordern

Bevor eine App eine Benachrichtigung senden kann, muss der Benutzer der Anwendung das Recht dazu gewähren. Dies ist eine häufige Anforderung, wenn eine API versucht, mit etwas außerhalb einer Webseite zu interagieren — der Benutzer muss mindestens einmal speziell dieser Anwendung die Erlaubnis erteilen, Benachrichtigungen anzuzeigen, wodurch der Benutzer steuern kann, welche Apps/Websites Benachrichtigungen anzeigen dürfen.

Aufgrund von Missbrauch von Push-Benachrichtigungen in der Vergangenheit haben Web-Browser und Entwickler begonnen, Strategien zu implementieren, um dieses Problem zu mildern. Sie sollten nur mit Zustimmung des Benutzers die Erlaubnis zur Anzeige von Benachrichtigungen anfordern (z.B. durch Klicken auf einen Button). Dies ist nicht nur Best Practice — Sie sollten Benutzer nicht mit Benachrichtigungen belästigen, denen sie nicht zugestimmt haben — sondern in Zukunft werden Browser ausdrücklich die Anforderung von Benachrichtigungserlaubnis verhindern, die nicht als Reaktion auf eine Benutzeraktion ausgelöst wurde. Firefox tut dies bereits ab Version 72, und Safari hat dies bereits seit einiger Zeit getan.

Zusätzlich können Sie in Chrome und Firefox Benachrichtigungen nur anfordern, wenn die Seite ein sicheres Kontext ist (d.h. HTTPS), und Sie können Benachrichtigungsberechtigungen nicht mehr aus {{htmlelement("iframe")}}s von Fremddomänen anfordern.

### Aktuellen Berechtigungsstatus prüfen

Sie können prüfen, ob Sie bereits Berechtigung haben, indem Sie den Wert der schreibgeschützten Eigenschaft [`Notification.permission`](/de/docs/Web/API/Notification/permission_static) überprüfen. Es kann einen von drei möglichen Werten haben:

- `default`
  - : Der Benutzer wurde noch nicht um Erlaubnis gefragt, daher werden Benachrichtigungen nicht angezeigt.
- `granted`
  - : Der Benutzer hat die Erlaubnis erteilt, Benachrichtigungen anzuzeigen, nachdem er zuvor gefragt wurde.
- `denied`
  - : Der Benutzer hat die Erlaubnis zum Anzeigen von Benachrichtigungen ausdrücklich abgelehnt.

### Erlaubnis einholen

Wenn die Erlaubnis zum Anzeigen von Benachrichtigungen noch nicht erteilt wurde, muss die Anwendung die Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) verwenden, um dies beim Benutzer anzufordern. In seiner einfachsten Form fügen wir einfach Folgendes ein:

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

Die Callback-Version akzeptiert optional eine Callback-Funktion, die aufgerufen wird, sobald der Benutzer auf die Anfrage zur Anzeige von Berechtigungen reagiert hat.

> [!NOTE]
> Es gibt keine zuverlässige Möglichkeit, zu testen, ob `Notification.requestPermission` die auf Versprechen basierende Version unterstützt. Wenn Sie ältere Browser unterstützen müssen, verwenden Sie einfach die Callback-basierte Version — obwohl dies veraltet ist, funktioniert es in neuen Browsern weiterhin. Überprüfen Sie die [Browser-Kompatibilitätstabelle](/de/docs/Web/API/Notification/requestPermission_static#browser_compatibility) für weitere Informationen.

### Beispiel

In unserem Aufgabenlisten-Demo fügen wir einen Button "Benachrichtigungen aktivieren" ein, der, wenn er gedrückt wird, die Benachrichtigungsberechtigungen für die App anfordert.

```html
<button id="enable">Enable notifications</button>
```

Ein Klick darauf ruft die Funktion `askNotificationPermission()` auf:

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

Wenn Sie sich den zweiten Hauptblock ansehen, werden Sie feststellen, dass wir zunächst prüfen, ob Benachrichtigungen unterstützt werden. Wenn ja, führen wir die auf Versprechen basierende Version von `Notification.requestPermission()` aus, und wenn nicht, protokollieren wir eine Nachricht in der Konsole.

Innerhalb des Promise-Auflösungshandlers, der an `then` übergeben wird, zeigen oder verbergen wir den Button abhängig davon, was der Benutzer im Berechtigungsdialog gewählt hat. Wir möchten ihn nicht anzeigen, wenn die Erlaubnis bereits erteilt wurde, aber wenn der Benutzer sich entschieden hat, die Erlaubnis zu verweigern, möchten wir ihm die Möglichkeit geben, seine Meinung später zu ändern.

## Erstellen einer Benachrichtigung

Das Erstellen einer Benachrichtigung ist einfach; verwenden Sie einfach den [`Notification`](/de/docs/Web/API/Notification) Konstruktor. Dieser Konstruktor erwartet einen Titel, der innerhalb der Benachrichtigung angezeigt wird, und einige Optionen zur Verbesserung der Benachrichtigung wie ein [`icon`](/de/docs/Web/API/Notification/icon) oder ein Text [`body`](/de/docs/Web/API/Notification/body).

Zum Beispiel verwenden wir im Aufgabenlisten-Beispiel folgenden Schnipsel, um eine Benachrichtigung bei Bedarf zu erstellen (zu finden innerhalb der Funktion `createNotification()`):

```js
const img = "/to-do-notifications/img/icon-128.png";
const text = `HEY! Your task "${title}" is now overdue.`;
const notification = new Notification("To do list", { body: text, icon: img });
```

## Benachrichtigungen schließen

Verwenden Sie [`close()`](/de/docs/Web/API/Notification/close), um eine Benachrichtigung zu entfernen, die für den Benutzer nicht mehr relevant ist (z.B. der Benutzer hat die Benachrichtigung bereits auf der Webseite gelesen, im Fall einer Messaging-App, oder das nächste Lied wird bereits in einer Musik-App abgespielt, die bei Liedwechseln benachrichtigt). Die meisten modernen Browser schließen Benachrichtigungen automatisch nach wenigen Augenblicken (ca. vier Sekunden), aber dies ist normalerweise nichts, worüber Sie sich Gedanken machen sollten, da es dem Benutzer und dem User-Agent überlassen bleibt. Die Entlassung kann auch auf Betriebssystemebene erfolgen, und Benutzer sollten die Kontrolle darüber behalten. Alte Versionen von Chrome entfernten Benachrichtigungen nicht automatisch, daher können Sie dies nach einem [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) nur für diese älteren Versionen tun, um Benachrichtigungen nicht aus den Benachrichtigungszentralen anderer Browser zu entfernen.

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
> Diese API sollte nicht nur verwendet werden, um die Benachrichtigung nach einer festen Zeitspanne (auf modernen Browsern) vom Bildschirm zu entfernen, da diese Methode auch die Benachrichtigung aus jeglichen Benachrichtigungscentern entfernt und verhindert, dass Benutzer später damit interagieren.

> [!NOTE]
> Wenn Sie ein "close"-Ereignis erhalten, gibt es keine Garantie, dass der Benutzer die Benachrichtigung geschlossen hat. Dies stimmt mit der Spezifikation überein, die besagt: "Wenn eine Benachrichtigung geschlossen wird, entweder durch die zugrunde liegende Benachrichtigungsplattform oder den Benutzer, müssen die Schließungsschritte für diese ausgeführt werden."

## Benachrichtigungsereignisse

Es gibt vier Ereignisse, die bei der [`Notification`](/de/docs/Web/API/Notification) Instanz ausgelöst werden:

- `click`
  - : Wird ausgelöst, wenn der Benutzer auf die Benachrichtigung klickt.
- `close`
  - : Wird ausgelöst, sobald die Benachrichtigung geschlossen ist.
- `error`
  - : Wird ausgelöst, wenn mit der Benachrichtigung etwas schiefgeht; dies geschieht normalerweise, weil die Benachrichtigung aus irgendeinem Grund nicht angezeigt werden konnte.
- `show`
  - : Wird ausgelöst, wenn die Benachrichtigung dem Benutzer angezeigt wird.

Diese Ereignisse können mit den Handlern [`onclick`](/de/docs/Web/API/Notification/click_event), [`onclose`](/de/docs/Web/API/Notification/close_event), [`onerror`](/de/docs/Web/API/Notification/error_event) und [`onshow`](/de/docs/Web/API/Notification/show_event) nachverfolgt werden. Da [`Notification`](/de/docs/Web/API/Notification) auch von [`EventTarget`](/de/docs/Web/API/EventTarget) erbt, ist es möglich, die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) darauf zu verwenden.

## Bestehende Benachrichtigungen ersetzen

Es ist in der Regel unerwünscht, dass ein Benutzer viele Benachrichtigungen in kurzer Zeit erhält – was, wenn eine Messenger-Anwendung den Benutzer bei jeder eingehenden Nachricht benachrichtigen würde und er viele Nachrichten erhält? Um den Benutzer nicht mit zu vielen Benachrichtigungen zu überfluten, ist es möglich, die Warteschlange ausstehenden Benachrichtigungen zu ändern und einzelne oder mehrere ausstehende Benachrichtigungen durch eine neue zu ersetzen.

Dazu kann jeder neuen Benachrichtigung ein Tag hinzugefügt werden. Wenn eine Benachrichtigung bereits das gleiche Tag hat und noch nicht angezeigt wurde, ersetzt die neue Benachrichtigung diese vorherige Benachrichtigung. Wenn die Benachrichtigung mit dem gleichen Tag bereits angezeigt wurde, wird die vorherige Benachrichtigung geschlossen und die neue angezeigt.

### Tag-Beispiel

Nehmen Sie das folgende grundlegende HTML an:

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

Um das obige Beispiel zu testen, ändern Sie die [Einstellung für das Senden von Benachrichtigungen](https://support.mozilla.org/en-US/kb/firefox-page-info-window#w_permissions) für die Webseite `https://live.mdnplay.dev`.

## Siehe auch

- [`Notification`](/de/docs/Web/API/Notification)
