---
title: "Benachrichtigung: Notification()-Konstruktor"
short-title: Notification()
slug: Web/API/Notification/Notification
l10n:
  sourceCommit: 66be0a23be754791266009f1044e2238c27332b4
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Der **`Notification()`**-Konstruktor erstellt eine neue Instanz des [`Notification`](/de/docs/Web/API/Notification)-Objekts, die eine Benutzerbenachrichtigung darstellt.

> [!WARNING]
> Dieser Konstruktor wirft einen {{jsxref("TypeError")}}, wenn er in fast allen mobilen Browsern aufgerufen wird.
> Stattdessen müssen Sie einen Service Worker registrieren und [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) verwenden.

## Syntax

```js-nolint
new Notification(title)
new Notification(title, options)
```

### Parameter

- `title`
  - : Definiert einen Titel für die Benachrichtigung, der oben im Benachrichtigungsfenster angezeigt wird.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das benutzerdefinierte Einstellungen enthält, die Sie auf die Benachrichtigung anwenden möchten.
    Die möglichen Optionen sind:
    - `actions` {{optional_inline}}
      - : Muss unbestimmt oder ein leeres Array sein.
        `actions` wird nur für [persistente Benachrichtigungen](/de/docs/Web/API/Notifications_API#persistent_and_non-persistent_notifications) unterstützt, die von einem Service Worker mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) ausgelöst werden.
    - `badge` {{optional_inline}}
      - : Ein String, der die URL des Bildes enthält, das die Benachrichtigung darstellt, wenn nicht genügend Platz vorhanden ist, um die Benachrichtigung selbst anzuzeigen; zum Beispiel die Android-Benachrichtigungsleiste.
        Auf Android-Geräten sollte das Abzeichen Geräte mit bis zu 4-facher Auflösung unterstützen, etwa 96x96px, und das Bild wird automatisch maskiert.
    - `body` {{optional_inline}}
      - : Ein String, der den Textkörper der Benachrichtigung darstellt, der unter dem Titel angezeigt wird.
        Der Standard ist der leere String.
    - `data` {{optional_inline}}
      - : Beliebige Daten, die Sie der Benachrichtigung zuordnen möchten.
        Dies kann jeder [strukturklonierbare Daten](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) Typ sein.
        Der Standard ist `null`.
    - `dir` {{optional_inline}}
      - : Die Richtung, in der die Benachrichtigung angezeigt werden soll.
        Sie ist standardmäßig `auto`, was einfach das Spracheinstellungverhalten des Browsers übernimmt. Sie können dieses Verhalten jedoch überschreiben, indem Sie Werte von `ltr` und `rtl` festlegen (obwohl die meisten Browser diese Einstellungen scheinbar ignorieren).
    - `icon` {{optional_inline}}
      - : Ein String, der die URL eines in der Benachrichtigung angezeigten Symbols enthält.
    - `image` {{optional_inline}}
      - : Ein String, der die URL eines in der Benachrichtigung angezeigten Bildes enthält.
    - `lang` {{optional_inline}}
      - : Die Sprache der Benachrichtigung, angegeben als ein String, der einen {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} darstellt.
        Der Standard ist der leere String.
    - `navigate` {{optional_inline}} {{experimental_inline}}
      - : Ein String, der eine URL enthält, zu der navigiert werden soll, wenn der Benutzer die Benachrichtigung aktiviert.
        Wenn festgelegt, navigiert der Benutzeragent zu dieser URL, anstatt das [`click`](/de/docs/Web/API/Notification/click_event)-Ereignis auszulösen.
        Der Wert wird relativ zur Basis-URL der Seite geparst.
        Weitere Informationen finden Sie unter [`Notification.navigate`](/de/docs/Web/API/Notification/navigate).
    - `renotify` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob der Benutzer benachrichtigt werden soll, nachdem eine neue Benachrichtigung eine alte ersetzt hat.
        Der Standardwert ist `false`, was bedeutet, dass sie nicht benachrichtigt werden.
        Falls `true`, muss `tag` ebenfalls gesetzt sein.
    - `requireInteraction` {{optional_inline}}
      - : Gibt an, dass eine Benachrichtigung aktiv bleiben soll, bis der Benutzer darauf klickt oder sie schließt, anstatt automatisch zu schließen.
        Der Standardwert ist `false`.
    - `silent` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Benachrichtigung stumm sein soll, d.h. keine Geräusche oder Vibrationen sollten unabhängig von den Geräteeinstellungen ausgelöst werden.
        Wenn auf `true` gesetzt, ist die Benachrichtigung stumm; wenn auf `null` gesetzt (der Standardwert), werden die Standardeinstellungen des Geräts respektiert.
    - `tag` {{optional_inline}}
      - : Ein String, der eine identifizierende Markierung für die Benachrichtigung darstellt.
        Der Standard ist der leere String.
    - `timestamp` {{optional_inline}}
      - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der die Zeit angibt, die mit der Benachrichtigung verbunden ist.
        Dies könnte in der Vergangenheit liegen, wenn eine Benachrichtigung für eine Nachricht verwendet wird, die aufgrund einer Offline-Verbindung des Geräts nicht sofort zugestellt werden konnte, oder in der Zukunft für ein Treffen, das gleich beginnt.
    - `vibrate` {{optional_inline}}
      - : Ein [Vibrationsmuster](/de/docs/Web/API/Vibration_API#vibration_patterns) für die Vibrationshardware des Geräts, die zusammen mit der Benachrichtigung ausgelöst werden soll.
        Wenn angegeben, darf `silent` nicht `true` sein.

### Rückgabewert

Eine Instanz des [`Notification`](/de/docs/Web/API/Notification)-Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Der Konstruktor innerhalb des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aufgerufen wird.
    - Die Option `actions` angegeben und nicht leer ist.
    - Die Option `silent` `true` ist und die Option `vibrate` angegeben ist.
    - Die Option `renotify` `true` ist, aber die Option `tag` leer ist.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Serialisierung der `data`-Option aus irgendeinem Grund fehlschlägt.

## Beschreibung

Der Konstruktor erstellt eine neue Instanz des [`Notification`](/de/docs/Web/API/Notification)-Objekts, die eine Benutzerbenachrichtigung darstellt.

Sie müssen die Erlaubnis erhalten, Benachrichtigungen mithilfe von [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) anzuzeigen.
Die Genehmigung ist möglicherweise nicht erteilt, z.B. wenn sich die Seite im privaten Browsing-Modus befindet.

Dieser Konstruktor wirft einen {{jsxref("TypeError")}}, wenn er in fast allen mobilen Browsern aufgerufen wird, und es ist unwahrscheinlich, dass sich dies ändert, da Webseiten auf mobilen Geräten fast nie „im Hintergrund laufen“, was der Hauptanwendungsfall für Benachrichtigungen ist.
Stattdessen müssen Sie einen Service Worker registrieren und [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) verwenden.
Siehe [Chrome Issue #481856](https://crbug.com/481856) für weitere Informationen.

## Beispiele

Weitere Beispiele finden Sie auf der Seite [`Notification`](/de/docs/Web/API/Notification) und unter [Verwendung der Benachrichtigungs-API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API).

### Einfaches Beispiel

Dies ist ein einfaches Beispiel, das eine Benachrichtigung zeigt, wenn bereits eine Erlaubnis erteilt wurde.
Dies wird auf mobilen Geräten nicht funktionieren.

```js
if (Notification.permission === "granted") {
  const notification = new Notification("Hi there!");
}
```

### Verwendung von Notification() als Fallback

Dieses Beispiel zeigt einen robusteren Ansatz, der es ermöglicht, Benachrichtigungen sowohl auf Desktop- als auch auf mobilen Geräten anzuzeigen.

Zuerst überprüfen wir, ob [`Notification`](/de/docs/Web/API/Notification) unterstützt wird und ob die Erlaubnis erteilt wurde und kehren früh zurück, wenn eine der Bedingungen nicht erfüllt ist.
Dann überprüfen wir, ob ein aktiver Service Worker vorhanden ist.
Falls vorhanden, verwenden wir ihn, um [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) zu verwenden; wenn nicht, greifen wir auf den Aufruf des Konstruktors zurück.

```js
async function showNotification(title, options = {}) {
  if (!("Notification" in window)) return;
  if (Notification.permission !== "granted") return;

  // Only use SW if one is already active — don't hang waiting
  const swReg = navigator.serviceWorker?.controller
    ? await navigator.serviceWorker.getRegistration()
    : null;

  if (swReg) {
    await swReg.showNotification(title, options);
  } else {
    new Notification(title, options);
  }
}
```

Beachten Sie, dass dies auf einem mobilen Gerät immer noch einen Fehler auslösen wird, wenn die Seite keinen einsatzbereiten Service Worker hat.
Abhängig von Ihrer Anwendung könnten Sie diesen Code in einem `try...catch`-Block einbinden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Benachrichtigungs-API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
