---
title: "Notification: Notification()-Konstruktor"
short-title: Notification()
slug: Web/API/Notification/Notification
l10n:
  sourceCommit: 922949d1d9793e97e4cf9f2513a967e74b0171cf
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Der **`Notification()`**-Konstruktor erstellt eine neue Instanz des [`Notification`](/de/docs/Web/API/Notification)-Objekts, die eine Benachrichtigung für Benutzer darstellt.

> [!WARNING]
> Dieser Konstruktor löst in fast allen mobilen Browsern einen {{jsxref("TypeError")}} aus.
> Registrieren Sie stattdessen einen Service Worker und verwenden Sie [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification).

## Syntax

```js-nolint
new Notification(title)
new Notification(title, options)
```

### Parameter

- `title`
  - : Definiert einen Titel für die Benachrichtigung, der oben im Benachrichtigungsfenster angezeigt wird.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit benutzerdefinierten Einstellungen, die Sie auf die Benachrichtigung anwenden möchten.
    Folgende Optionen sind möglich:
    - `actions` {{optional_inline}}
      - : Muss weggelassen werden oder ein leeres Array sein.
        `actions` wird nur für [dauerhafte Benachrichtigungen](/de/docs/Web/API/Notifications_API#persistent_and_non-persistent_notifications) unterstützt, die von einem Service Worker mithilfe von [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) ausgelöst werden.
    - `badge` {{optional_inline}}
      - : Eine Zeichenfolge mit der URL eines kleinen Symbols, das die Webanwendung selbst repräsentiert.
        Das Badge wird von der Plattform verwendet, wenn nicht genügend Platz vorhanden ist, um die vollständige Benachrichtigung anzuzeigen – beispielsweise in einer Statusleiste.
        Es sollte visuell weniger hervorgehoben sein als die Optionen `icon` und `image`.
        Unter Android sollte das Badge für eine bis zu vierfache Anzeigeauflösung ausgelegt sein (etwa 96 × 96 px); das Bild wird automatisch zu einer monochromen Silhouette maskiert.
    - `body` {{optional_inline}}
      - : Eine Zeichenfolge mit dem Text der Benachrichtigung, der unter dem Titel angezeigt wird.
        Der Standardwert ist die leere Zeichenfolge.
    - `data` {{optional_inline}}
      - : Beliebige Daten, die Sie mit der Benachrichtigung verknüpfen möchten.
        Dies kann jeder Datentyp sein, der sich [strukturiert klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) lässt.
        Der Standardwert ist `null`.
    - `dir` {{optional_inline}}
      - : Die Richtung, in der die Benachrichtigung angezeigt wird.
        Der Standardwert ist `auto`, wodurch das Verhalten der Spracheinstellung des Browsers übernommen wird. Sie können dieses Verhalten mit den Werten `ltr` und `rtl` überschreiben (obwohl die meisten Browser diese Einstellungen offenbar ignorieren).
    - `icon` {{optional_inline}}
      - : Eine Zeichenfolge mit der URL eines kleinen Bildes, das die Benachrichtigung visuell ergänzt – beispielsweise ein App-Logo oder ein Foto des Absenders einer Nachricht.
        Es wird neben dem Titel und dem Text der Benachrichtigung angezeigt.
    - `image` {{optional_inline}}
      - : Eine Zeichenfolge mit der URL eines großen Bildes, das als Teil des Benachrichtigungsinhalts angezeigt wird – beispielsweise ein Nachrichtenfoto oder ein Produktvorschaubild.
        Es hat unter den drei Bildoptionen (`image`, `icon`, `badge`) die höchste visuelle Priorität. Einen Vergleich dieser drei Bildoptionen finden Sie unter [Benachrichtigungen mit verschiedenen Bildern](/de/docs/Web/API/ServiceWorkerRegistration/showNotification#notifications_with_different_images).
    - `lang` {{optional_inline}}
      - : Die Sprache der Benachrichtigung, angegeben als Zeichenfolge, die einen {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtag")}} darstellt.
        Der Standardwert ist die leere Zeichenfolge.
    - `navigate` {{optional_inline}} {{experimental_inline}}
      - : Eine Zeichenfolge mit einer URL, zu der navigiert wird, wenn der Benutzer die Benachrichtigung aktiviert.
        Wenn diese Option gesetzt ist, navigiert der User Agent zu dieser URL, anstatt das [`click`](/de/docs/Web/API/Notification/click_event)-Ereignis auszulösen.
        Der Wert wird relativ zur Basis-URL der Seite interpretiert.
        Weitere Informationen finden Sie unter [`Notification.navigate`](/de/docs/Web/API/Notification/navigate).
    - `renotify` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob der Benutzer benachrichtigt werden soll, nachdem eine neue Benachrichtigung eine alte ersetzt hat.
        Der Standardwert ist `false`; der Benutzer wird also nicht erneut benachrichtigt.
        Wenn der Wert `true` ist, muss auch `tag` gesetzt sein.
    - `requireInteraction` {{optional_inline}}
      - : Gibt an, dass eine Benachrichtigung aktiv bleiben soll, bis der Benutzer darauf klickt oder sie schließt, anstatt automatisch geschlossen zu werden.
        Der Standardwert ist `false`.
    - `silent` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Benachrichtigung lautlos sein soll, also unabhängig von den Geräteeinstellungen weder Töne noch Vibrationen auslösen soll.
        Bei `true` ist die Benachrichtigung lautlos; bei `null` (dem Standardwert) gelten die Standardeinstellungen des Geräts.
    - `tag` {{optional_inline}}
      - : Eine Zeichenfolge, die eine Kennzeichnung für die Benachrichtigung darstellt.
        Der Standardwert ist die leere Zeichenfolge.
    - `timestamp` {{optional_inline}}
      - : Ein als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden angegebener Zeitstempel für den Zeitpunkt, der mit der Benachrichtigung verknüpft ist.
        Dieser Zeitpunkt kann in der Vergangenheit liegen, wenn die Benachrichtigung eine Nachricht betrifft, die wegen eines offline befindlichen Geräts nicht sofort zugestellt werden konnte. Er kann auch in der Zukunft liegen, etwa bei einer Besprechung, die in Kürze beginnt.
    - `vibrate` {{optional_inline}}
      - : Ein [Vibrationsmuster](/de/docs/Web/API/Vibration_API#vibration_patterns), das die Vibrationshardware des Geräts zusammen mit der Benachrichtigung ausgibt.
        Wenn diese Option angegeben ist, darf `silent` nicht `true` sein.

### Rückgabewert

Eine Instanz des [`Notification`](/de/docs/Web/API/Notification)-Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - der Konstruktor innerhalb des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aufgerufen wird;
    - die Option `actions` angegeben und nicht leer ist;
    - die Option `silent` den Wert `true` hat und die Option `vibrate` angegeben ist;
    - die Option `renotify` den Wert `true` hat, die Option `tag` aber leer ist.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Serialisierung der Option `data` aus irgendeinem Grund fehlschlägt.

## Beschreibung

Der Konstruktor erstellt eine neue Instanz des [`Notification`](/de/docs/Web/API/Notification)-Objekts, die eine Benachrichtigung für Benutzer darstellt.

Sie müssen mit [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) die Berechtigung zum Anzeigen von Benachrichtigungen einholen.
Die Berechtigung kann möglicherweise nicht erteilt werden, beispielsweise wenn sich die Seite im privaten Browsermodus befindet.

Dieser Konstruktor löst in fast allen mobilen Browsern einen {{jsxref("TypeError")}} aus. Daran wird sich voraussichtlich nichts ändern, da Webseiten auf Mobilgeräten fast nie „im Hintergrund ausgeführt werden“ – dem wichtigsten Anwendungsfall für Benachrichtigungen.
Registrieren Sie stattdessen einen Service Worker und verwenden Sie [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification).
Weitere Informationen finden Sie unter [Chrome-Issue #481856](https://crbug.com/481856).

## Beispiele

Weitere Beispiele finden Sie auf der Seite zu [`Notification`](/de/docs/Web/API/Notification) und unter [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API).

### Einfaches Beispiel

Dieses einfache Beispiel zeigt eine Benachrichtigung an, wenn die Berechtigung bereits erteilt wurde.
Auf Mobilgeräten funktioniert es nicht.

```js
if (Notification.permission === "granted") {
  const notification = new Notification("Hi there!");
}
```

### Notification() als Fallback verwenden

Dieses Beispiel zeigt einen robusteren Ansatz, mit dem Benachrichtigungen sowohl auf Desktop- als auch auf Mobilgeräten angezeigt werden können.

Zuerst prüfen wir, ob [`Notification`](/de/docs/Web/API/Notification) unterstützt wird und ob die Berechtigung erteilt wurde. Ist eine der beiden Bedingungen nicht erfüllt, beenden wir die Ausführung vorzeitig.
Anschließend prüfen wir, ob ein aktiver Service Worker vorhanden ist.
Falls ja, verwenden wir ihn, um [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) aufzurufen; andernfalls greifen wir auf den Konstruktor zurück.

Beachten Sie, dass auch dieser Ansatz auf einem Mobilgerät einen Fehler auslöst, wenn für die Seite kein Service Worker bereitsteht.
Je nach Anwendung können Sie diesen Code in einen `try...catch`-Block einschließen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
