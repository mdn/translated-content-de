---
title: Verwendung der Notifications API
slug: Web/API/Notifications_API/Using_the_Notifications_API
l10n:
  sourceCommit: 03d7663c2965d67eca296f6a27aa8a651de7dfee
---

{{DefaultAPISidebar("Web Notifications")}}

Die [Notifications API](/de/docs/Web/API/Notifications_API) ermöglicht es einer Webseite oder App, Benachrichtigungen zu senden, die außerhalb der Seite auf Systemebene angezeigt werden; dies ermöglicht es Webanwendungen, Informationen an einen Benutzer zu senden, selbst wenn die Anwendung im Hintergrund oder im Leerlauf ist.
Dieser Artikel betrachtet die Grundlagen der Verwendung dieser API in Ihren eigenen Apps.

In der Regel beziehen sich Systembenachrichtigungen auf den Standardbenachrichtigungsmechanismus des Betriebssystems: Denken Sie beispielsweise daran, wie ein typisches Desktop-System oder mobiles Gerät Benachrichtigungen sendet.

![Desktop-Benachrichtigung: To-Do-Liste über mdn.github.io HEY! Ihre Aufgabe „Einkaufen gehen“ ist jetzt überfällig](desktop-notification.png)

Das Systembenachrichtigungssystem kann je nach Plattform und Browser variieren, was in Ordnung ist, und die Notifications API ist so geschrieben, dass sie allgemein genug für die Kompatibilität mit den meisten Systembenachrichtigungssystemen ist.

## Beispiele

Ein offensichtlicher Anwendungsfall für Web-Benachrichtigungen ist eine webbasierte E-Mail- oder IRC-Anwendung, die den Benutzer benachrichtigen muss, wenn eine neue Nachricht eingeht, selbst wenn der Benutzer etwas anderes mit einer anderen Anwendung tut.
Viele Beispiele dafür existieren inzwischen, wie zum Beispiel [Slack](https://slack.com/).

Wir haben ein praxisnahes Beispiel geschrieben — eine To-Do-Liste-App — um eine bessere Vorstellung davon zu geben, wie Web-Benachrichtigungen genutzt werden können.
Sie speichert Daten lokal mit [IndexedDB](/de/docs/Web/API/IndexedDB_API) und benachrichtigt Nutzer, wenn Aufgaben fällig sind, mithilfe von Systembenachrichtigungen.
[Laden Sie den To-Do-Listen-Code herunter](https://github.com/mdn/dom-examples/tree/main/to-do-notifications), oder [sehen Sie die App live in Aktion](https://mdn.github.io/dom-examples/to-do-notifications/).

## Berechtigung anfordern

Bevor eine App eine Benachrichtigung senden kann, muss der Benutzer der Anwendung das Recht dazu gewähren.
Dies ist eine übliche Anforderung, wenn eine API versucht, mit etwas außerhalb einer Webseite zu interagieren — mindestens einmal muss der Benutzer der Anwendung speziell die Erlaubnis erteilen, Benachrichtigungen zu präsentieren, damit der Benutzer kontrollieren kann, welche Apps/Sites berechtigt sind, Benachrichtigungen anzuzeigen.

Aufgrund von Missbräuchen von Push-Benachrichtigungen in der Vergangenheit haben Webbrowser und Entwickler begonnen, Strategien umzusetzen, um dieses Problem zu entschärfen.
Sie sollten nur dann die Zustimmung zur Anzeige von Benachrichtigungen einholen, wenn eine Benutzeraktion erfolgt (z. B. durch Klicken auf einen Button).
Dies ist nicht nur eine bewährte Praxis — Sie sollten Benutzer nicht mit Benachrichtigungen überfluten, denen sie nicht zugestimmt haben — sondern in Zukunft werden Browser ausdrücklich die Erlaubnisanfragen für Benachrichtigungen ablehnen, die nicht als Reaktion auf eine Benutzeraktion ausgelöst wurden.
Firefox tut das bereits ab Version 72, und Safari hat dies schon seit einiger Zeit implementiert.

Zusätzlich können in Chrome und Firefox Benachrichtigungen nicht angefragt werden, es sei denn, die Seite befindet sich in einem sicheren Kontext (d.h. HTTPS), und es ist nicht mehr möglich, Benachrichtigungserlaubnisse von Herkunfts-übergreifenden {{htmlelement("iframe")}}s zu erbitten.

> [!NOTE]
> Die Beispiele in diesem Artikel verwenden den [`Notification()`](/de/docs/Web/API/Notification/Notification) Konstruktor, um Benachrichtigungen zu erstellen.
> Dies ist für Desktops geeignet, aber auf den meisten mobilen Browsern wird dies einen {{jsxref("TypeError")}} werfen.
> Wenn Sie mobile Geräte anvisieren, sollten Sie einen Service Worker registrieren und [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) verwenden.

### Aktuellen Berechtigungsstatus prüfen

Sie können überprüfen, ob bereits eine Berechtigung vorliegt, indem Sie den Wert der schreibgeschützten Eigenschaft [`Notification.permission`](/de/docs/Web/API/Notification/permission_static) abfragen.
Sie kann einen von drei möglichen Werten haben:

- `default`
  - : Der Benutzer wurde noch nicht nach Erlaubnis gefragt, daher werden keine Benachrichtigungen angezeigt.
- `granted`
  - : Der Benutzer hat die Berechtigung zur Anzeige von Benachrichtigungen erteilt, nachdem er zuvor gefragt wurde.
- `denied`
  - : Der Benutzer hat die Berechtigung zur Anzeige von Benachrichtigungen ausdrücklich abgelehnt.

### Berechtigung einholen

Wenn noch keine Berechtigung zur Anzeige von Benachrichtigungen erteilt wurde, muss die Anwendung die Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) verwenden, um diese beim Benutzer anzufordern.
In ihrer einfachsten Form fügen wir einfach Folgendes ein:

```js
Notification.requestPermission().then((result) => {
  console.log(result);
});
```

Dies benutzt die auf Versprechen basierende Version der Methode.
Wenn Sie ältere Versionen unterstützen möchten, müssen Sie möglicherweise die ältere Callback-Version verwenden, die folgendermaßen aussieht:

```js
Notification.requestPermission((result) => {
  console.log(result);
});
```

Die Callback-Version akzeptiert optional eine Callback-Funktion, die aufgerufen wird, sobald der Benutzer auf die Berechtigungsanfrage reagiert hat.

> [!NOTE]
> Es gibt keine verlässliche Methode, um zu testen, ob `Notification.requestPermission` die auf Versprechen basierende Version unterstützt.
> Wenn Sie ältere Browser unterstützen müssen, verwenden Sie einfach die Callback-basierte Version — obwohl dies veraltet ist, funktioniert sie noch in neuen Browsern.
> Sehen Sie im [Browser-Kompatibilitätstabelle](/de/docs/Web/API/Notification/requestPermission_static#browser_compatibility) für weitere Informationen nach.

### Beispiel

In unserem To-Do-Listen-Demo haben wir einen „Benachrichtigungen aktivieren“-Button, der, wenn er gedrückt wird, Benachrichtigungsberechtigungen für die App anfordert.

```html
<button id="enable">Enable notifications</button>
```

Bei Klick wird die Funktion `askNotificationPermission()` aufgerufen:

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

Beim Blick auf den zweiten Hauptblock sehen Sie, dass wir zuerst prüfen, ob Benachrichtigungen unterstützt werden.
Ist dies der Fall, führen wir die auf Versprechen basierende Version von `Notification.requestPermission()` aus, und wenn nicht, wird eine Nachricht in die Konsole geloggt.

Im Promise-Resolution-Handler, der an `then` übergeben wird, zeigen wir den Button an oder blenden ihn aus, je nachdem, was der Benutzer im Berechtigungsdialog gewählt hat.
Wir möchten ihn nicht anzeigen, wenn die Berechtigung bereits erteilt wurde, aber wenn der Benutzer sich entschieden hat, die Berechtigung zu verweigern, möchten wir ihm die Möglichkeit geben, später seine Meinung zu ändern.

## Erstellen einer Benachrichtigung

Eine Benachrichtigung zu erstellen ist einfach; verwenden Sie einfach den [`Notification`](/de/docs/Web/API/Notification) Konstruktor.
Dieser Konstruktor erwartet einen Titel, der innerhalb der Benachrichtigung angezeigt wird, und einige Optionen zur Erweiterung der Benachrichtigung wie ein [`icon`](/de/docs/Web/API/Notification/icon) oder einen Text [`body`](/de/docs/Web/API/Notification/body).

Zum Beispiel nutzen wir im To-Do-Listen-Beispiel den folgenden Schnipsel, um bei Bedarf eine Benachrichtigung zu erstellen (zu finden in der Funktion `createNotification()`):

```js
const img = "/to-do-notifications/img/icon-128.png";
const text = `HEY! Your task "${title}" is now overdue.`;
const notification = new Notification("To do list", { body: text, icon: img });
```

## Schließen von Benachrichtigungen

Verwenden Sie [`close()`](/de/docs/Web/API/Notification/close), um eine Benachrichtigung zu entfernen, die für den Benutzer nicht mehr relevant ist (z. B. hat der Benutzer die Benachrichtigung auf der Webseite bereits gelesen, im Fall einer Messaging-App, oder der folgende Song wird bereits in einer Musik-App abgespielt, die bei Song-Wechseln benachrichtigt).
Die meisten modernen Browser schließen Benachrichtigungen automatisch nach einigen Augenblicken (etwa vier Sekunden), aber dies sollte Ihnen im Allgemeinen kein großes Anliegen sein, da es dem Benutzer und dem Benutzeragenten überlassen ist.
Das Schließen kann auch auf Betriebssystemebene erfolgen, und Benutzer sollten dies steuern können.
Alte Versionen von Chrome haben Benachrichtigungen nicht automatisch entfernt, daher können Sie dies nach einem [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) nur für diese älteren Versionen tun, um Benachrichtigungen nicht aus Benachrichtigungstrays in anderen Browsern zu entfernen.

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
> Diese API sollte nicht nur dazu verwendet werden, um die Benachrichtigung nach einer festen Verzögerung (auf modernen Browsern) vom Bildschirm zu entfernen, da diese Methode auch die Benachrichtigung aus jedem Benachrichtigungstray entfernt und Benutzer daran hindert, später mit ihr zu interagieren.

> [!NOTE]
> Wenn Sie ein „close“-Ereignis erhalten, gibt es keine Garantie dafür, dass es der Benutzer war, der die Benachrichtigung geschlossen hat.
> Dies steht im Einklang mit der Spezifikation, die besagt: „Wenn eine Benachrichtigung geschlossen wird, entweder durch die zugrunde liegende Benachrichtigungsplattform oder durch den Benutzer, müssen die Schließschritte für sie ausgeführt werden.“

## Benachrichtigungsereignisse

Es gibt vier Ereignisse, die auf der [`Notification`](/de/docs/Web/API/Notification) Instanz ausgelöst werden:

- `click`
  - : Wird ausgelöst, wenn der Benutzer auf die Benachrichtigung klickt.
- `close`
  - : Wird ausgelöst, wenn die Benachrichtigung geschlossen wird.
- `error`
  - : Wird ausgelöst, wenn ein Problem mit der Benachrichtigung auftritt; dies ist normalerweise der Fall, wenn die Benachrichtigung aus irgendeinem Grund nicht angezeigt werden konnte.
- `show`
  - : Wird ausgelöst, wenn die Benachrichtigung dem Benutzer angezeigt wird.

Diese Ereignisse können mit den Handlern [`onclick`](/de/docs/Web/API/Notification/click_event), [`onclose`](/de/docs/Web/API/Notification/close_event), [`onerror`](/de/docs/Web/API/Notification/error_event) und [`onshow`](/de/docs/Web/API/Notification/show_event) verfolgt werden. Da [`Notification`](/de/docs/Web/API/Notification) auch von [`EventTarget`](/de/docs/Web/API/EventTarget) erbt, ist es möglich, die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) darauf zu verwenden.

> [!NOTE]
> Die oben aufgelisteten Ereignisse gelten für [nicht-permanente Benachrichtigungen](/de/docs/Web/API/Notifications_API#persistent_and_non-persistent_notifications), die mit dem [`Notification()`](/de/docs/Web/API/Notification/Notification) Konstruktor erstellt wurden.
> Dauerhafte Benachrichtigungen, die über [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) erstellt wurden, lösen stattdessen die Ereignisse [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) und [`notificationclose`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event) auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aus.

### Navigation bei Aktivierung

Anstatt Klick-Ereignisse zu behandeln, können Sie die Option [`navigate`](/de/docs/Web/API/Notification/navigate) setzen, um automatisch eine URL zu öffnen, wenn der Benutzer die Benachrichtigung aktiviert.
Dies umgeht sowohl die `click`- als auch die `notificationclick`-Ereignisse.
Weitere Details finden Sie unter [`Notification.navigate`](/de/docs/Web/API/Notification/navigate).

## Ersetzen bestehender Benachrichtigungen

Es ist in der Regel unerwünscht, dass ein Benutzer viele Benachrichtigungen in kurzer Zeit erhält — zum Beispiel, was wenn eine Messenger-Anwendung für jede eingehende Nachricht eine Benachrichtigung anzeigt und viele Nachrichten gesendet werden?
Um zu vermeiden, den Benutzer mit zu vielen Benachrichtigungen zu überfluten, ist es möglich, die Warteschlange der ausstehenden Benachrichtigungen zu ändern und einzelne oder mehrere ausstehende Benachrichtigungen durch eine neue zu ersetzen.

Hierzu ist es möglich, einer neuen Benachrichtigung ein Tag hinzuzufügen.
Wenn eine Benachrichtigung bereits dasselbe Tag besitzt und noch nicht angezeigt wurde, ersetzt die neue Benachrichtigung die vorherige.
Falls die Benachrichtigung mit demselben Tag bereits angezeigt wurde, wird die vorherige Benachrichtigung geschlossen und die neue angezeigt.

### Tag-Beispiel

Angenommen, wir haben folgendes Basis-HTML:

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

Es ist möglich, mehrere Benachrichtigungen auf diese Weise zu verwalten:

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

Um das obige Beispiel zu testen, ändern Sie die [Einstellung zur Benachrichtigung senden](https://support.mozilla.org/en-US/kb/firefox-page-info-window#w_permissions) für die Webseite `https://live.mdnplay.dev`.

## Siehe auch

- [`Notification`](/de/docs/Web/API/Notification)
