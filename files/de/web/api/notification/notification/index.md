---
title: "Notification: Notification()-Konstruktor"
short-title: Notification()
slug: Web/API/Notification/Notification
l10n:
  sourceCommit: 79f5e2c8ed9833f409e9054e69e02798b83422d1
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Der **`Notification()`**-Konstruktor erstellt eine neue Instanz des [`Notification`](/de/docs/Web/API/Notification)-Objekts, das eine Benachrichtigung für den Benutzer darstellt.

> [!NOTE]
> Der Versuch, innerhalb des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eine Benachrichtigung mit dem `Notification()`-Konstruktor zu erstellen, führt zu einem `TypeError`. Verwenden Sie stattdessen [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification).

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
      - : Muss unbestimmt oder ein leeres Array sein. `actions` wird nur für persistente Benachrichtigungen unterstützt, die von einem Service Worker mittels [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) ausgelöst werden.
    - `badge` {{optional_inline}}
      - : Ein String, der die URL des Bildes enthält, das verwendet wird, um die Benachrichtigung darzustellen, wenn nicht genügend Platz für die Anzeige der eigentlichen Benachrichtigung vorhanden ist, z.B. in der Android-Benachrichtigungsleiste. Auf Android-Geräten sollte das Abzeichen Geräte bis zu einer 4x-Auflösung, etwa 96x96px, unterstützen, und das Bild wird automatisch maskiert.
    - `body` {{optional_inline}}
      - : Ein String, der den Textkörper der Benachrichtigung darstellt, der unter dem Titel angezeigt wird. Standardmäßig ist dies der leere String.
    - `data` {{optional_inline}}
      - : Beliebige Daten, die Sie mit der Benachrichtigung verknüpfen möchten. Dies kann jeder [strukturierbar klonbare](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) Datentyp sein. Der Standardwert ist `null`.
    - `dir` {{optional_inline}}
      - : Die Richtung, in der die Benachrichtigung angezeigt wird. Standardmäßig wird `auto` verwendet, was das Sprachverhalten des Browsers übernimmt, aber Sie können dieses Verhalten überschreiben, indem Sie die Werte `ltr` und `rtl` einstellen (obwohl die meisten Browser diese Einstellungen zu ignorieren scheinen).
    - `icon` {{optional_inline}}
      - : Ein String, der die URL eines Symbols enthält, das in der Benachrichtigung angezeigt wird.
    - `image` {{optional_inline}}
      - : Ein String, der die URL eines Bildes enthält, das in der Benachrichtigung angezeigt wird.
    - `lang` {{optional_inline}}
      - : Die Sprache der Benachrichtigung, angegeben durch einen String, der einen Sprach-Tag gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} darstellt. Siehe die Sitepoint-Seite [ISO-2-Buchstaben-Sprachcodes](https://www.sitepoint.com/iso-2-letter-language-codes/) für eine einfache Referenz. Der Standardwert ist der leere String.
    - `renotify` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob der Benutzer benachrichtigt werden sollte, nachdem eine neue Benachrichtigung eine alte ersetzt hat. Der Standardwert ist `false`, was bedeutet, dass der Benutzer nicht benachrichtigt wird. Wenn `true`, muss auch `tag` gesetzt sein.
    - `requireInteraction` {{optional_inline}}
      - : Gibt an, dass eine Benachrichtigung aktiv bleiben soll, bis der Benutzer darauf klickt oder sie schließt, anstatt automatisch geschlossen zu werden. Der Standardwert ist `false`.
    - `silent` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Benachrichtigung lautlos sein soll, d.h. es sollten unabhängig von den Geräteeinstellungen keine Geräusche oder Vibrationen ausgegeben werden. Wenn auf `true` gesetzt, ist die Benachrichtigung lautlos; wenn auf `null` (den Standardwert) gesetzt, werden die Standardeinstellungen des Geräts respektiert.
    - `tag` {{optional_inline}}
      - : Ein String, der ein identifizierendes Tag für die Benachrichtigung darstellt. Der Standardwert ist der leere String.
    - `timestamp` {{optional_inline}}
      - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der die mit der Benachrichtigung verbundene Zeit darstellt. Dies könnte in der Vergangenheit liegen, wenn eine Benachrichtigung für eine Nachricht verwendet wird, die nicht sofort zugestellt werden konnte, weil das Gerät offline war, oder in der Zukunft für ein Meeting, das bald beginnt.
    - `vibrate` {{optional_inline}}
      - : Ein [Vibrationsmuster](/de/docs/Web/API/Vibration_API#vibration_patterns) für die Vibrieren-Hardware des Geräts, um mit der Benachrichtigung auszulösen. Wenn angegeben, darf `silent` nicht `true` sein.

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
  - : Wird ausgelöst, wenn das Serialisieren der `data`-Option aus irgendeinem Grund fehlschlägt.

## Beispiele

Hier ist ein einfaches Beispiel, das nur eine Benachrichtigung anzeigt, wenn die Berechtigung bereits erteilt ist. Für vollständigere Beispiele siehe die [`Notification`](/de/docs/Web/API/Notification)-Seite.

```js
if (Notification.permission === "granted") {
  const notification = new Notification("Hi there!");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Hinweise zu Chrome

Ab Chrome 49 funktionieren Benachrichtigungen im Inkognito-Modus nicht.

Chrome für Android wird einen {{jsxref("TypeError")}} auslösen, wenn der `Notification`-Konstruktor aufgerufen wird. Es unterstützt nur die Erstellung von Benachrichtigungen über einen Service Worker. Weitere Details finden Sie im [Chromium-Issue-Tracker](https://crbug.com/481856).

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
