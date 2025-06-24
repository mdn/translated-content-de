---
title: "Benachrichtigung: Konstruktor `Notification()`"
short-title: Notification()
slug: Web/API/Notification/Notification
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Der **`Notification()`**-Konstruktor erstellt eine neue Instanz des [`Notification`](/de/docs/Web/API/Notification)-Objekts, das eine Benutzerbenachrichtigung darstellt.

> [!NOTE]
> Wenn Sie versuchen, innerhalb des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) mit dem `Notification()`-Konstruktor eine Benachrichtigung zu erstellen, wird ein `TypeError` ausgelöst. Verwenden Sie stattdessen [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification).

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
      - : Ein String, der die URL des Bildes enthält, das verwendet wird, um die Benachrichtigung darzustellen, wenn nicht genug Platz vorhanden ist, um die Benachrichtigung selbst anzuzeigen; zum Beispiel in der Android-Benachrichtigungsleiste. Auf Android-Geräten sollte das Badge für Geräte bis zu einer 4-fachen Auflösung, etwa 96x96px, ausgelegt sein, und das Bild wird automatisch maskiert.
    - `body` {{optional_inline}}
      - : Ein String, der den Textinhalt der Benachrichtigung darstellt, der unterhalb des Titels angezeigt wird. Der Standardwert ist der leere String.
    - `data` {{optional_inline}}
      - : Beliebige Daten, die Sie mit der Benachrichtigung verknüpfen möchten. Diese können von jedem [struktur-klonbaren](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) Datentyp sein. Der Standardwert ist `null`.
    - `dir` {{optional_inline}}
      - : Die Richtung, in der die Benachrichtigung angezeigt werden soll. Standardmäßig `auto`, was einfach das Sprachverhalten des Browsers übernimmt, aber Sie können dieses Verhalten mit den Werten `ltr` und `rtl` überschreiben (obwohl die meisten Browser diese Einstellungen zu ignorieren scheinen).
    - `icon` {{optional_inline}}
      - : Ein String, der die URL eines Symbols enthält, das in der Benachrichtigung angezeigt wird.
    - `image` {{optional_inline}}
      - : Ein String, der die URL eines Bildes enthält, das in der Benachrichtigung angezeigt wird.
    - `lang` {{optional_inline}}
      - : Die Sprache der Benachrichtigung, angegeben als String, der ein Sprach-Tag gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} darstellt. Siehe die Sitepoint [ISO 2-Buchstaben Sprachcodes](https://www.sitepoint.com/iso-2-letter-language-codes/) Seite als einfache Referenz. Der Standardwert ist der leere String.
    - `renotify` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob der Benutzer benachrichtigt werden soll, nachdem eine neue Benachrichtigung eine alte ersetzt hat. Der Standardwert ist `false`, was bedeutet, dass sie nicht benachrichtigt werden. Wenn `true`, muss auch `tag` gesetzt sein.
    - `requireInteraction` {{optional_inline}}
      - : Gibt an, dass eine Benachrichtigung aktiv bleiben sollte, bis der Benutzer sie klickt oder verwirft, anstatt automatisch zu schließen. Der Standardwert ist `false`.
    - `silent` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Benachrichtigung stummgeschaltet sein soll, d.h. es sollten keine Geräusche oder Vibrationen ausgegeben werden, unabhängig von den Geräteeinstellungen. Wenn auf `true` gesetzt, ist die Benachrichtigung stumm; wenn auf `null` (der Standardwert) gesetzt, werden die Standardeinstellungen des Geräts beachtet.
    - `tag` {{optional_inline}}
      - : Ein String, der ein identifizierendes Tag für die Benachrichtigung darstellt. Der Standardwert ist der leere String.
    - `timestamp` {{optional_inline}}
      - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der die Zeit darstellt, die mit der Benachrichtigung verbunden ist. Dies kann in der Vergangenheit liegen, wenn eine Benachrichtigung für eine Nachricht verwendet wird, die nicht sofort zugestellt werden konnte, weil das Gerät offline war, oder in der Zukunft für ein bevorstehendes Meeting.
    - `vibrate` {{optional_inline}}
      - : Ein [Vibrationsmuster](/de/docs/Web/API/Vibration_API#vibration_patterns) für die Vibrationshardware des Geräts, das mit der Benachrichtigung ausgegeben werden soll. Wenn angegeben, darf `silent` nicht `true` sein.

### Rückgabewert

Eine Instanz des [`Notification`](/de/docs/Web/API/Notification)-Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn:
    - Der Konstruktor innerhalb des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aufgerufen wird.
    - Die Option `actions` angegeben und nicht leer ist.
    - Die Option `silent` `true` ist und die Option `vibrate` angegeben ist.
    - Die Option `renotify` `true` ist, aber die Option `tag` leer ist.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn das Serialisieren der `data`-Option aus irgendeinem Grund fehlschlug.

## Beispiele

Hier ist ein einfaches Beispiel, um nur eine Benachrichtigung anzuzeigen, wenn die Erlaubnis bereits gewährt wurde. Für vollständigere Beispiele siehe die [`Notification`](/de/docs/Web/API/Notification)-Seite.

```js
if (Notification.permission === "granted") {
  const notification = new Notification("Hi there!");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Chrome-Hinweise

Ab Chrome 49 funktionieren Benachrichtigungen nicht im Inkognitomodus.

Chrome für Android wird einen {{jsxref("TypeError")}} auslösen, wenn der
`Notification`-Konstruktor aufgerufen wird. Es unterstützt nur die Erstellung
von Benachrichtigungen aus einem Service Worker. Weitere Details finden Sie im
[Chromium Issue Tracker](https://crbug.com/481856).

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
