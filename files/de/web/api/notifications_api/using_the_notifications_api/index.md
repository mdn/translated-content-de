---
title: Verwendung der Notifications API
slug: Web/API/Notifications_API/Using_the_Notifications_API
l10n:
  sourceCommit: 8a6e8b53625bddb3af2cf2fb927cb3e430b12ba2
---

{{DefaultAPISidebar("Web Notifications")}}

Die [Notifications API](/de/docs/Web/API/Notifications_API) ermöglicht es einer Webseite oder App, Benachrichtigungen zu senden, die außerhalb der Seite auf Systemebene angezeigt werden. Dadurch können Web-Apps Informationen an einen Benutzer senden, selbst wenn die Anwendung inaktiv oder im Hintergrund ist. Dieser Artikel behandelt die Grundlagen zur Verwendung dieser API in Ihren eigenen Apps.

Typischerweise beziehen sich Systembenachrichtigungen auf den standardmäßigen Benachrichtigungsmechanismus des Betriebssystems: Denken Sie beispielsweise an die Art und Weise, wie ein typisches Desktop-System oder Mobilgerät Benachrichtigungen überträgt.

![Desktop-Benachrichtigung: To-do-Liste über mdn.github.io HEY! Ihre Aufgabe "Einkaufen gehen" ist jetzt überfällig](desktop-notification.png)

Das Systembenachrichtigungssystem variiert natürlich je nach Plattform und Browser, aber das ist in Ordnung, denn die Notifications API ist so geschrieben, dass sie allgemein genug für die Kompatibilität mit den meisten Systembenachrichtigungssystemen ist.

## Beispiele

Einer der offensichtlichsten Anwendungsfälle für Webbenachrichtigungen ist eine webbasierte Mail- oder IRC-Anwendung, die den Benutzer benachrichtigen muss, wenn eine neue Nachricht eingeht, selbst wenn der Benutzer gerade etwas anderes mit einer anderen Anwendung tut. Viele Beispiele dafür existieren jetzt, wie [Slack](https://slack.com/).

Wir haben ein realitätsnahes Beispiel geschrieben – eine To-do-Liste-App – um eine bessere Vorstellung davon zu geben, wie Webbenachrichtigungen verwendet werden können. Sie speichert Daten lokal mit [IndexedDB](/de/docs/Web/API/IndexedDB_API) und benachrichtigt Benutzer über anstehende Aufgaben durch Systembenachrichtigungen. [Laden Sie den To-do-Listen-Code herunter](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) oder [sehen Sie die App live](https://mdn.github.io/dom-examples/to-do-notifications/).

## Berechtigungen anfordern

Bevor eine App eine Benachrichtigung senden kann, muss der Benutzer der Anwendung das Recht dazu gewähren. Dies ist eine gängige Anforderung, wenn eine API versucht, mit etwas außerhalb einer Webseite zu interagieren – mindestens einmal muss der Benutzer der App speziell die Erlaubnis erteilen, Benachrichtigungen zu präsentieren, sodass der Benutzer kontrollieren kann, welche Apps/Sites Benachrichtigungen anzeigen dürfen.

Aufgrund von Missbrauchsfällen von Push-Benachrichtigungen in der Vergangenheit haben Webbrowser und Entwickler begonnen, Strategien zu implementieren, um dieses Problem zu mindern. Sie sollten nur die Zustimmung zur Anzeige von Benachrichtigungen als Reaktion auf eine Nutzeraktion anfordern (z.B. durch Klicken auf eine Schaltfläche). Dies ist nicht nur Best Practice – Sie sollten Benutzer nicht mit Benachrichtigungen zuspammen, denen sie nicht zugestimmt haben – sondern zukünftige Browser werden explizit Anfragen nach Benachrichtigungsberechtigungen ablehnen, die nicht als Reaktion auf eine Nutzeraktion ausgelöst werden. Firefox tut dies bereits seit Version 72, und Safari hat es schon seit einiger Zeit.

Außerdem können in Chrome und Firefox keine Benachrichtigungen angefordert werden, es sei denn, die Seite befindet sich in einem sicheren Kontext (d.h. HTTPS), und es ist nicht mehr möglich, Benachrichtigungsberechtigungen von cross-origin {{htmlelement("iframe")}}s anzufordern.

> [!NOTE]
> Die in diesem Artikel verwendeten Beispiele nutzen den [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktor zur Erstellung von Benachrichtigungen.
> Das ist für Desktop in Ordnung, aber in den meisten mobilen Browsern wird dies zu einem {{jsxref("TypeError")}} führen.
> Wenn Sie mobile Geräte ins Visier nehmen, sollten Sie einen Dienstmitarbeiter registrieren und [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) verwenden.

### Überprüfung des aktuellen Berechtigungsstatus

Sie können überprüfen, ob Sie bereits die Erlaubnis haben, indem Sie den Wert der schreibgeschützten Eigenschaft [`Notification.permission`](/de/docs/Web/API/Notification/permission_static) überprüfen. Sie kann einen von drei möglichen Werten haben:

- `default`
  - : Der Benutzer wurde noch nicht um Erlaubnis gefragt, daher werden keine Benachrichtigungen angezeigt.
- `granted`
  - : Der Benutzer hat die Erlaubnis zur Anzeige von Benachrichtigungen erteilt, nachdem er zuvor gefragt wurde.
- `denied`
  - : Der Benutzer hat die Erlaubnis zur Anzeige von Benachrichtigungen ausdrücklich abgelehnt.

### Berechtigungen erhalten

Wenn noch keine Erlaubnis zur Anzeige von Benachrichtigungen erteilt wurde, muss die Anwendung die Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) verwenden, um diese vom Benutzer anzufordern. In ihrer einfachsten Form fügen wir einfach Folgendes ein:

```js
Notification.requestPermission().then((result) => {
  console.log(result);
});
```

Dies verwendet die auf Versprechen basierende Version der Methode. Wenn Sie ältere Versionen unterstützen möchten, müssen Sie möglicherweise die ältere Rückruf-Version verwenden, die so aussieht:

```js
Notification.requestPermission((result) => {
  console.log(result);
});
```

Die Rückruf-Version akzeptiert optional eine Rückruffunktion, die aufgerufen wird, nachdem der Benutzer auf die Anfrage nach Anzeigeberechtigungen reagiert hat.

> [!NOTE]
> Es gibt keine zuverlässige Möglichkeit, durch einen Funktionstest zu ermitteln, ob `Notification.requestPermission` die auf Versprechen basierende Version unterstützt.
> Wenn Sie ältere Browser unterstützen müssen, verwenden Sie einfach die rückrufbasierte Version – auch wenn diese veraltet ist, funktioniert sie immer noch in neuen Browsern.
> Sehen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/API/Notification/requestPermission_static#browser_compatibility) für weitere Informationen an.

### Beispiel

In unserem To-do-Listen-Demo haben wir eine „Benachrichtigungen aktivieren“ Schaltfläche, die, wenn gedrückt, Benachrichtigungsberechtigungen für die App anfordert.

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

Wenn Sie sich den zweiten Hauptblock ansehen, werden Sie sehen, dass wir zuerst prüfen, ob Benachrichtigungen unterstützt werden. Wenn ja, verwenden wir die auf Versprechen basierende Version von `Notification.requestPermission()`, und wenn nicht, loggen wir eine Nachricht in die Konsole.

Im Versprechen-Auflösungshandler, der an `then` übergeben wird, zeigen oder verbergen wir die Schaltfläche, abhängig davon, was der Benutzer im Berechtigungsdialog ausgewählt hat. Wir wollen sie nicht anzeigen, wenn die Erlaubnis bereits erteilt wurde, aber wenn der Benutzer sich entschieden hat, die Erlaubnis abzulehnen, wollen wir ihm die Möglichkeit geben, später seine Meinung zu ändern.

## Erstellen einer Benachrichtigung

Das Erstellen einer Benachrichtigung ist einfach; verwenden Sie einfach den [`Notification`](/de/docs/Web/API/Notification)-Konstruktor. Dieser Konstruktor erwartet einen Titel der innerhalb der Benachrichtigung angezeigt wird und einige Optionen zur Bereicherung der Benachrichtigung wie ein [`icon`](/de/docs/Web/API/Notification/icon) oder ein Text- [`body`](/de/docs/Web/API/Notification/body).

Zum Beispiel verwenden wir im To-do-Listen-Beispiel den folgenden Ausschnitt, um bei Bedarf eine Benachrichtigung zu erstellen (zu finden in der Funktion `createNotification()`):

```js
const img = "/to-do-notifications/img/icon-128.png";
const text = `HEY! Your task "${title}" is now overdue.`;
const notification = new Notification("To do list", { body: text, icon: img });
```

## Schließen von Benachrichtigungen

Verwenden Sie [`close()`](/de/docs/Web/API/Notification/close), um eine Benachrichtigung zu entfernen, die für den Benutzer nicht mehr relevant ist (z.B. der Benutzer hat die Benachrichtigung bereits auf der Webseite gelesen, im Fall einer Messaging-App, oder der folgende Song spielt bereits in einer Musik-App, um über Songswechsel zu informieren). Die meisten modernen Browser schließen Benachrichtigungen automatisch nach ein paar Momenten (ca. vier Sekunden), aber darüber sollten Sie sich im Allgemeinen keine Sorgen machen, da es dem Benutzer und dem Benutzeragenten überlassen bleibt. Der Abbruch kann auch auf Betriebssystemebene erfolgen und Benutzer sollten dies kontrollieren können. Alte Versionen von Chrome haben Benachrichtigungen nicht automatisch entfernt, daher können Sie nach einem [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) nur für diese älteren Versionen die Benachrichtigungen entfernen, um nicht relevante Benachrichtigungen von Benachrichtigungsleisten in anderen Browsern zu entfernen.

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
> Diese API sollte nicht nur dazu verwendet werden, um Benachrichtigungen nach einer festen Verzögerung von modernen Browsern zu entfernen, da diese Methode auch die Benachrichtigung von jeder Benachrichtigungsleiste entfernt und verhindert, dass Benutzer nach deren anfänglicher Darstellung mit ihnen interagieren.

> [!NOTE]
> Wenn Sie ein "close" Ereignis erhalten, gibt es keine Garantie, dass es der Benutzer war, der die Benachrichtigung geschlossen hat.
> Dies stimmt mit der Spezifikation überein, die besagt: "Wenn eine Benachrichtigung geschlossen wird, entweder durch die zugrunde liegende Benachrichtigungsplattform oder durch den Benutzer, müssen die Schließungsschritte dafür ausgeführt werden."

## Benachrichtigungsereignisse

Es gibt vier Ereignisse, die auf der [`Notification`](/de/docs/Web/API/Notification)-Instanz ausgelöst werden:

- `click`
  - : Wird ausgelöst, wenn der Benutzer auf die Benachrichtigung klickt.
- `close`
  - : Wird einmal ausgelöst, wenn die Benachrichtigung geschlossen wird.
- `error`
  - : Wird ausgelöst, wenn mit der Benachrichtigung etwas schiefgeht; dies ist normalerweise der Fall, wenn die Benachrichtigung aus irgendeinem Grund nicht angezeigt werden konnte.
- `show`
  - : Wird ausgelöst, wenn dem Benutzer die Benachrichtigung angezeigt wird.

Diese Ereignisse können mit den Handlern [`onclick`](/de/docs/Web/API/Notification/click_event), [`onclose`](/de/docs/Web/API/Notification/close_event), [`onerror`](/de/docs/Web/API/Notification/error_event) und [`onshow`](/de/docs/Web/API/Notification/show_event) verfolgt werden. Da [`Notification`](/de/docs/Web/API/Notification) auch von [`EventTarget`](/de/docs/Web/API/EventTarget) erbt, ist es möglich, die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) darauf zu verwenden.

> [!NOTE]
> Die oben aufgeführten Ereignisse gelten für [nicht-persistente Benachrichtigungen](/de/docs/Web/API/Notifications_API#persistent_and_non-persistent_notifications), die mit dem [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktor erstellt wurden.
> Persistente Benachrichtigungen, die über [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) erstellt wurden, lösen stattdessen die Ereignisse [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) und [`notificationclose`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event) auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aus.

### Navigation bei Aktivierung

Statt Klickereignisse zu behandeln, können Sie die Option [`navigate`](/de/docs/Web/API/Notification/navigate) einstellen, um automatisch eine URL zu öffnen, wenn der Benutzer die Benachrichtigung aktiviert. Dies umgeht sowohl die `click` als auch die `notificationclick` Ereignisse. Siehe [`Notification.navigate`](/de/docs/Web/API/Notification/navigate) für Details.

## Ersetzen bestehender Benachrichtigungen

Es ist in der Regel unerwünscht, dass ein Benutzer in kurzer Zeit viele Benachrichtigungen erhält – was wäre beispielsweise, wenn eine Messenger-Anwendung einen Benutzer für jede eingehende Nachricht benachrichtigt und er viele Nachrichten gesendet bekommt? Um den Benutzer nicht mit zu vielen Benachrichtigungen zu spammen, ist es möglich, die Warteschlange der ausstehenden Benachrichtigungen zu ändern, indem man einzelne oder mehrere ausstehende Benachrichtigungen durch eine neue ersetzt.

Dazu kann man jeder neuen Benachrichtigung ein Tag hinzufügen. Wenn eine Benachrichtigung bereits das gleiche Tag hat und noch nicht angezeigt wurde, ersetzt die neue Benachrichtigung diese vorherige. Wenn die Benachrichtigung mit demselben Tag bereits angezeigt wurde, wird die vorherige Benachrichtigung geschlossen und die neue angezeigt.

### Tag Beispiel

Angenommen, folgendes grundlegende HTML liegt vor:

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

Es ist möglich, mehrere Benachrichtigungen auf diese Weise zu behandeln:

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

Um das obige Beispiel zu testen, ändern Sie die [Einstellung zur Benachrichtigungssendung](https://support.mozilla.org/en-US/kb/firefox-page-info-window#w_permissions) für die `https://live.mdnplay.dev` Website.

## Siehe auch

- [`Notification`](/de/docs/Web/API/Notification)
