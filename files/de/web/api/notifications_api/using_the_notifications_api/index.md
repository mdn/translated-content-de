---
title: Verwendung der Notifications API
slug: Web/API/Notifications_API/Using_the_Notifications_API
l10n:
  sourceCommit: 83ec73ac6fec9cae23c54b729e6481f50a0a45e7
---

{{DefaultAPISidebar("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die [Notifications API](/de/docs/Web/API/Notifications_API) ermöglicht es einer Webseite oder App, Benachrichtigungen zu senden, die außerhalb der Seite auf Systemebene angezeigt werden; dadurch können Webanwendungen Informationen an einen Benutzer senden, auch wenn die Anwendung untätig ist oder im Hintergrund läuft. Dieser Artikel behandelt die Grundlagen der Nutzung dieser API in Ihren eigenen Apps.

Typischerweise beziehen sich Systembenachrichtigungen auf den Standardbenachrichtigungsmechanismus des Betriebssystems: Denken Sie beispielsweise daran, wie ein typisches Desktop-System oder mobiles Gerät Benachrichtigungen sendet.

![Desktop-Benachrichtigung: To-do-Liste über mdn.github.io HEY! Ihre Aufgabe "Einkaufen gehen" ist jetzt überfällig](desktop-notification.png)

Das Systembenachrichtigungssystem kann natürlich je nach Plattform und Browser variieren, aber das ist in Ordnung, und die Notifications API ist so allgemein geschrieben, dass sie mit den meisten Systembenachrichtigungssystemen kompatibel ist.

## Beispiele

Einer der offensichtlichsten Anwendungsfälle für Webbenachrichtigungen ist eine webbasierte Mail- oder IRC-Anwendung, die den Benutzer benachrichtigen muss, wenn eine neue Nachricht eingeht, auch wenn der Benutzer gerade etwas anderes mit einer anderen Anwendung macht. Viele Beispiele hierfür existieren bereits, wie zum Beispiel [Slack](https://slack.com/).

Wir haben ein praxisnahes Beispiel geschrieben — eine To-do-Liste-App —, um eine Vorstellung davon zu geben, wie Webbenachrichtigungen genutzt werden können. Sie speichert Daten lokal mit [IndexedDB](/de/docs/Web/API/IndexedDB_API) und benachrichtigt Benutzer, wenn Aufgaben fällig sind, durch Systembenachrichtigungen. [Laden Sie den To-do-Listen-Code herunter](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) oder [sehen Sie sich die App live an](https://mdn.github.io/dom-examples/to-do-notifications/).

## Anfrage um Erlaubnis

Bevor eine App eine Benachrichtigung senden kann, muss der Benutzer der Anwendung das Recht dazu erteilen. Dies ist eine häufige Anforderung, wenn eine API versucht, mit etwas außerhalb einer Webseite zu interagieren — mindestens einmal muss der Benutzer speziell dieser Anwendung die Erlaubnis erteilen, Benachrichtigungen anzuzeigen, um somit zu kontrollieren, welche Apps/Websites Benachrichtigungen anzeigen dürfen.

Aufgrund von Missbrauchsfällen bei Push-Benachrichtigungen in der Vergangenheit haben Webbrowser und Entwickler begonnen, Strategien zu implementieren, um dieses Problem zu mildern. Sie sollten nur mit Zustimmung des Benutzers um die Erlaubnis zur Anzeige von Benachrichtigungen bitten (z.B. beim Klicken auf einen Button). Dies ist nicht nur Best Practice — Sie sollten Nutzer nicht mit Benachrichtigungen belästigen, denen sie nicht zugestimmt haben —, sondern künftig werden Browser ausdrücklich Benachrichtigungsanfragen, die nicht aufgrund einer Nutzerinteraktion ausgelöst wurden, verbieten. Firefox tut dies bereits seit Version 72 beispielsweise und Safari schon seit längerem.

Darüber hinaus können Sie in Chrome und Firefox Benachrichtigungen überhaupt nicht anfordern, es sei denn, die Seite befindet sich in einem sicheren Kontext (d.h. HTTPS), und Sie können keine Erlaubnisanfragen für Benachrichtigungen von {{htmlelement("iframe")}}s mit Cross-Origin mehr durchführen.

### Überprüfen des aktuellen Erlaubnisstatus

Sie können überprüfen, ob Sie bereits eine Erlaubnis haben, indem Sie den Wert der schreibgeschützten Eigenschaft {{domxref("Notification.permission_static", "Notification.permission")}} prüfen. Sie kann einen von drei möglichen Werten haben:

- `default`
  - : Der Benutzer wurde noch nicht nach Erlaubnis gefragt, daher werden keine Benachrichtigungen angezeigt.
- `granted`
  - : Der Benutzer hat die Erlaubnis erteilt, Benachrichtigungen anzuzeigen, nachdem er zuvor gefragt wurde.
- `denied`
  - : Der Benutzer hat ausdrücklich die Erlaubnis verweigert, Benachrichtigungen anzuzeigen.

### Erlaubnis einholen

Wenn die Erlaubnis zum Anzeigen von Benachrichtigungen noch nicht erteilt wurde, muss die Anwendung die Methode {{domxref("Notification.requestPermission_static", "Notification.requestPermission()")}} verwenden, um diese vom Nutzer anzufordern. In ihrer einfachsten Form fügen wir einfach Folgendes hinzu:

```js
Notification.requestPermission().then((result) => {
  console.log(result);
});
```

Dies nutzt die auf Versprechen basierende Version der Methode. Wenn Sie ältere Versionen unterstützen möchten, müssen Sie möglicherweise die ältere Callback-Version verwenden, die wie folgt aussieht:

```js
Notification.requestPermission((result) => {
  console.log(result);
});
```

Die Callback-Version akzeptiert optional eine Callback-Funktion, die aufgerufen wird, sobald der Benutzer auf die Anfrage zur Anzeige von Berechtigungen reagiert hat.

> [!NOTE]
> Es gibt keine Möglichkeit, zuverlässig zu testen, ob `Notification.requestPermission` die auf Versprechen basierende Version unterstützt. Wenn Sie ältere Browser unterstützen müssen, verwenden Sie einfach die callback-basierte Version — obwohl diese veraltet ist, funktioniert sie immer noch in neuen Browsern. Überprüfen Sie die [Kompatibilitätstabelle des Browsers](/de/docs/Web/API/Notification/requestPermission_static#browser_compatibility) für weitere Informationen.

### Beispiel

In unserem To-do-Listen-Demo enthalten wir einen "Benachrichtigungen aktivieren"-Button, der bei Betätigung die Benachrichtigungsberechtigungen für die App anfordert.

```html
<button id="enable">Enable notifications</button>
```

Ein Klick darauf ruft die Funktion `askNotificationPermission()` auf:

```js
function askNotificationPermission() {
  // Überprüfen, ob der Browser Benachrichtigungen unterstützt
  if (!("Notification" in window)) {
    console.log("Dieser Browser unterstützt keine Benachrichtigungen.");
    return;
  }
  Notification.requestPermission().then((permission) => {
    // Den Button zeigen oder verstecken, abhängig von der Antwort des Nutzers
    notificationBtn.style.display = permission === "granted" ? "none" : "block";
  });
}
```

Beim Betrachten des zweiten Hauptblocks sehen Sie, dass wir zuerst überprüfen, ob Benachrichtigungen unterstützt werden. Wenn sie unterstützt werden, führen wir die auf Versprechen basierende Version von `Notification.requestPermission()` aus, und wenn nicht, loggen wir eine Nachricht in die Konsole.

Im Promise-Handler, der an `then` übergeben wird, zeigen oder verbergen wir den Button, je nachdem, was der Nutzer im Berechtigungsdialog ausgewählt hat. Wir möchten ihn nicht anzeigen, wenn die Berechtigung bereits erteilt wurde, aber wenn der Nutzer es ablehnt, möchten wir ihm die Möglichkeit geben, seine Meinung später zu ändern.

## Eine Benachrichtigung erstellen

Das Erstellen einer Benachrichtigung ist einfach; verwenden Sie einfach den Konstruktor {{domxref("Notification")}}. Dieser Konstruktor erwartet einen Titel, der in der Benachrichtigung angezeigt wird, sowie einige Optionen zur Verbesserung der Benachrichtigung, wie ein {{domxref("Notification.icon","icon")}} oder einen Text {{domxref("Notification.body","body")}}.

Zum Beispiel wird im To-do-List-Beispiel folgender Code-Ausschnitt verwendet, um bei Bedarf eine Benachrichtigung zu erstellen (im Inneren der Funktion `createNotification()` zu finden):

```js
const img = "/to-do-notifications/img/icon-128.png";
const text = `HEY! Your task "${title}" is now overdue.`;
const notification = new Notification("To do list", { body: text, icon: img });
```

## Schließen von Benachrichtigungen

Verwenden Sie {{domxref("Notification.close","close()")}}, um eine Benachrichtigung zu entfernen, die für den Benutzer nicht mehr relevant ist (z.B. hat der Benutzer die Benachrichtigung auf der Webseite bereits gelesen, im Fall einer Messaging-App, oder das nächste Lied wird bereits in einer Musik-App abgespielt, die beim Songwechsel benachrichtigt). Die meisten modernen Browser verwerfen Benachrichtigungen automatisch nach einigen Momenten (etwa vier Sekunden), aber das sollte Ihnen im Allgemeinen keine Sorgen bereiten, da es dem Benutzer und dem Benutzeragenten überlassen bleibt. Das Entfernen kann auch auf Betriebssystemebene geschehen, und die Benutzer sollten die Kontrolle darüber behalten. Alte Versionen von Chrome entfernten Benachrichtigungen nicht automatisch, sodass Sie diese nach einem {{domxref("setTimeout()")}} nur für diese älteren Versionen entfernen können, um Benachrichtigungen in Benachrichtigungsleisten anderer Browser nicht zu entfernen.

```js
const n = new Notification("My Great Song");
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    // Der Tab ist sichtbar geworden, also lösche die jetzt veraltete Benachrichtigung.
    n.close();
  }
});
```

> [!NOTE]
> Diese API sollte nicht verwendet werden, um die Benachrichtigung nach einer festen Verzögerung von der Anzeige zu entfernen (auf modernen Browsern), da diese Methode die Benachrichtigung auch aus jeder Benachrichtigungsleiste entfernt und verhindert, dass Benutzer nach ihrer ersten Anzeige mit ihr interagieren können.

> [!NOTE]
> Wenn Sie ein "close"-Ereignis empfangen, gibt es keine Garantie dafür, dass der Benutzer die Benachrichtigung geschlossen hat. Dies steht im Einklang mit der Spezifikation, die besagt: "Wenn eine Benachrichtigung geschlossen wird, entweder durch die zugrunde liegende Benachrichtigungsplattform oder durch den Benutzer, müssen die Schließungsschritte durchgeführt werden."

## Benachrichtigungsereignisse

Es gibt vier Ereignisse, die auf der {{domxref("Notification")}}-Instanz ausgelöst werden:

- `click`
  - : Ausgelöst, wenn der Benutzer auf die Benachrichtigung klickt.
- `close`
  - : Ausgelöst, sobald die Benachrichtigung geschlossen wird.
- `error`
  - : Ausgelöst, wenn etwas mit der Benachrichtigung schiefgeht; normalerweise, weil die Benachrichtigung aus irgendeinem Grund nicht angezeigt werden konnte.
- `show`
  - : Ausgelöst, wenn die Benachrichtigung dem Benutzer angezeigt wird.

Diese Ereignisse können mit den {{domxref("Notification.click_event","onclick")}}, {{domxref("Notification.close_event","onclose")}}, {{domxref("Notification.error_event","onerror")}}, und {{domxref("Notification.show_event","onshow")}} Handlern verfolgt werden. Da {{domxref("Notification")}} auch von {{domxref("EventTarget")}} erbt, ist es möglich, die Methode {{domxref("EventTarget.addEventListener","addEventListener()")}} darauf zu verwenden.

## Vorhandene Benachrichtigungen ersetzen

Es ist in der Regel unerwünscht, dass ein Benutzer viele Benachrichtigungen in kurzer Zeit erhält — was wäre zum Beispiel, wenn eine Messenger-Anwendung einen Benutzer für jede eingehende Nachricht benachrichtigen würde, und es würden viele Nachrichten gesendet? Um zu vermeiden, den Benutzer mit zu vielen Benachrichtigungen zu überhäufen, ist es möglich, die Warteschlange der ausstehenden Benachrichtigungen zu ändern, einzelne oder mehrere ausstehende Benachrichtigungen durch eine neue zu ersetzen.

Dazu ist es möglich, jeder neuen Benachrichtigung ein Tag hinzuzufügen. Wenn eine Benachrichtigung bereits dasselbe Tag hat und noch nicht angezeigt wurde, ersetzt die neue Benachrichtigung diese vorherige Benachrichtigung. Wenn die Benachrichtigung mit demselben Tag bereits angezeigt wurde, wird die vorherige Benachrichtigung geschlossen und die neue angezeigt.

### Tag-Beispiel

Angenommen, wir haben folgendes einfaches HTML:

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

Es ist möglich, mehrere Benachrichtigungen auf diese Weise zu behandeln:

```js
const demoLogs = document.querySelector("#demo-logs");

window.addEventListener("load", () => {
  const button = document.querySelector("#notify");

  button.addEventListener("click", () => {
    if (Notification?.permission === "granted") {
      demoLogs.innerText += `Die Seite hat die Erlaubnis, Benachrichtigungen anzuzeigen. Zeige Benachrichtigungen.\n`;
      // Wenn der Benutzer zugestimmt hat, benachrichtigt zu werden
      // Versuchen wir, zehn Benachrichtigungen zu senden
      let i = 0;
      // Durch die Verwendung eines Intervalls blockieren einige Browser (einschließlich Firefox) Benachrichtigungen, wenn es in einem bestimmten Zeitraum zu viele gibt.
      const interval = setInterval(() => {
        // Dank des Tags sollten wir nur die "Hi no 9 from MDN." Benachrichtigung sehen
        const n = new Notification(`Hi no ${i} from MDN.`, {
          tag: "soManyNotification",
        });
        if (i === 9) {
          clearInterval(interval);
        }
        i++;
      }, 200);
    } else if (Notification?.permission !== "denied") {
      demoLogs.innerText += "Fordere Benachrichtigungsberechtigung an.\n";
      // Falls der Benutzer noch nicht entschieden hat, ob er benachrichtigt werden möchte oder nicht
      // Hinweis: Aufgrund von Chrome sind wir uns nicht sicher, ob die Eigenschaft permission gesetzt ist, daher ist es unsicher, den "default"-Wert zu überprüfen.
      Notification.requestPermission().then((status) => {
        // Wenn der Benutzer zugestimmt hat
        if (status === "granted") {
          demoLogs.innerText +=
            "Benutzer hat die Erlaubnis erteilt. Sende Benachrichtigungen.\n";
          let i = 0;
          // Durch die Verwendung eines Intervalls blockieren einige Browser (einschließlich Firefox) Benachrichtigungen, wenn es in einem bestimmten Zeitraum zu viele gibt.
          const interval = setInterval(() => {
            // Dank des Tags sollten wir nur die "Message no 9 from MDN." Benachrichtigung sehen
            const n = new Notification(`Message no ${i} from MDN.`, {
              tag: "soManyNotification",
            });
            if (i === 9) {
              clearInterval(interval);
            }
            i++;
          }, 200);
        } else {
          // Andernfalls können wir auf ein reguläres modales Alert-Fenster zurückgreifen
          demoLogs.innerText += `Benutzer hat die Berechtigungsanfrage abgelehnt.\n`;
        }
      });
    } else {
      // Wenn der Benutzer ablehnt, benachrichtigt zu werden, können wir auf ein reguläres modales Alert-Fenster zurückgreifen
      demoLogs.innerText += `Die Seite hat keine Berechtigung, Benachrichtigungen anzuzeigen.\n`;
    }
  });
});
```

### Ergebnis

{{ EmbedLiveSample('Tag_example', '100%', 200) }}

Um das obige Beispiel zu testen, ändern Sie die [Einstellung für das Senden von Benachrichtigungen](https://support.mozilla.org/en-US/kb/firefox-page-info-window#w_permissions) für die `https://live.mdnplay.dev` Webseite.

## Siehe auch

- {{ domxref("Notification") }}
