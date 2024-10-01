---
title: "Notification: Notification() Konstruktor"
short-title: Notification()
slug: Web/API/Notification/Notification
l10n:
  sourceCommit: 09ad551d5fecae5872328ece2871fdf02b115b6e
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Der **`Notification()`**-Konstruktor erstellt eine neue Instanz des [`Notification`](/de/docs/Web/API/Notification)-Objekts, das eine Benachrichtigung für den Benutzer darstellt.

> [!NOTE]
> Der Versuch, eine Benachrichtigung innerhalb des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) mit dem `Notification()`-Konstruktor zu erstellen, führt zu einem `TypeError`. Verwenden Sie stattdessen [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification).

## Syntax

```js-nolint
new Notification(title)
new Notification(title, options)
```

### Parameter

- `title`
  - : Definiert einen Titel für die Benachrichtigung, der oben im Benachrichtigungsfenster angezeigt wird.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das benutzerdefinierte Einstellungen enthält, die Sie auf die Benachrichtigung anwenden möchten. Die möglichen Optionen sind:

    - `actions` {{optional_inline}}
      - : Muss nicht angegeben oder ein leeres Array sein. `actions` wird nur für persistente Benachrichtigungen unterstützt, die von einem Service Worker mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) ausgelöst werden.
    - `badge` {{optional_inline}}
      - : Ein String, der die URL des Bildes enthält, das zur Darstellung der Benachrichtigung verwendet wird, wenn nicht genug Platz zum Anzeigen der Benachrichtigung selbst vorhanden ist. Zum Beispiel die Android-Benachrichtigungsleiste. Auf Android-Geräten sollten die Abzeichen Bilder mit bis zu 4x Auflösung, etwa 96x96px, aufnehmen, und das Bild wird automatisch maskiert.
    - `body` {{optional_inline}}
      - : Ein String, der den Text des eigentlichen Benachrichtigungskörpers darstellt, welcher unterhalb des Titels angezeigt wird. Standardmäßig ist dies der leere String.
    - `data` {{optional_inline}}
      - : Beliebige Daten, die Sie mit der Benachrichtigung verknüpfen möchten. Dies kann ein beliebiger [structure-clonable](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) Datentyp sein. Standardmäßig ist dies `null`.
    - `dir` {{optional_inline}}
      - : Die Richtung, in der die Benachrichtigung angezeigt werden soll. Standardmäßig ist `auto`, was einfach das sprachliche Verhalten des Browsers übernimmt, aber Sie können dieses Verhalten mit `ltr` und `rtl` überschreiben (obwohl die meisten Browser diese Einstellungen zu ignorieren scheinen).
    - `icon` {{optional_inline}}
      - : Ein String, der die URL eines Icons enthält, das in der Benachrichtigung angezeigt werden soll.
    - `image` {{optional_inline}}
      - : Ein String, der die URL eines Bildes enthält, das in der Benachrichtigung angezeigt werden soll.
    - `lang` {{optional_inline}}
      - : Die Sprache der Benachrichtigung, angegeben durch einen String, der einen Sprachcode gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} darstellt. Besuchen Sie die Sitepoint-Seite [ISO 2 letter language codes](https://www.sitepoint.com/iso-2-letter-language-codes/) für eine einfache Referenz. Standardmäßig ist dies der leere String.
    - `renotify` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob der Benutzer benachrichtigt werden soll, nachdem eine neue Benachrichtigung eine alte ersetzt hat. Der Standardwert ist `false`, was bedeutet, dass der Benutzer nicht benachrichtigt wird. Wenn `true`, muss auch `tag` gesetzt sein.
    - `requireInteraction` {{optional_inline}}
      - : Gibt an, dass eine Benachrichtigung aktiv bleiben soll, bis der Benutzer sie anklickt oder verwirft, anstatt automatisch zu schließen. Der Standardwert ist `false`.
    - `silent` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Benachrichtigung still ist (keine Geräusche oder Vibrationen ausgelöst werden), unabhängig von den Geräteeinstellungen. Der Standardwert `null` bedeutet, die Gerätevoreinstellungen zu beachten. Wenn `true`, darf `vibrate` nicht vorhanden sein.
    - `tag` {{optional_inline}}
      - : Ein String, der einen identifizierenden Tag für die Benachrichtigung darstellt. Der Standardwert ist der leere String.
    - `timestamp` {{optional_inline}}
      - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der die der Benachrichtigung zugeordnete Zeit angibt. Dies könnte in der Vergangenheit liegen, wenn eine Benachrichtigung für eine Nachricht verwendet wird, die nicht sofort zugestellt werden konnte, weil das Gerät offline war, oder in der Zukunft für eine Besprechung, die kurz vor Beginn steht.
    - `vibrate` {{optional_inline}}
      - : Ein [Vibrationsmuster](/de/docs/Web/API/Vibration_API#vibration_patterns) für die Vibrationshardware des Geräts, das mit der Benachrichtigung ausgelöst werden soll. Wenn angegeben, darf `silent` nicht `true` sein.

### Rückgabewert

Eine Instanz des [`Notification`](/de/docs/Web/API/Notification)-Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Der Konstruktor innerhalb des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aufgerufen wird.
    - Die `actions`-Option angegeben ist und nicht leer ist.
    - Die `silent`-Option `true` ist und die `vibrate`-Option angegeben ist.
    - Die `renotify`-Option `true` ist, aber die `tag`-Option leer ist.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Serialisierung der `data`-Option aus irgendeinem Grund fehlgeschlagen ist.

## Beispiele

Hier ist ein sehr einfaches Beispiel, um eine Benachrichtigung nur anzuzeigen, wenn die Erlaubnis bereits erteilt wurde. Für vollständigere Beispiele siehe die [`Notification`](/de/docs/Web/API/Notification)-Seite.

```js
if (Notification.permission === "granted") {
  const notification = new Notification("Hi there!");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Anmerkungen zu Chrome

Ab Chrome 49 funktionieren Benachrichtigungen im Inkognito-Modus nicht.

Chrome für Android wird einen {{jsxref("TypeError")}} auslösen, wenn der `Notification`-Konstruktor aufgerufen wird. Es unterstützt das Erstellen von Benachrichtigungen nur von einem Service Worker aus. Weitere Einzelheiten finden Sie im [Chromium issue tracker](https://crbug.com/481856).

## Siehe auch

- [Verwendung der Notifications-API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
