---
title: "Notification: Notification() Konstruktor"
short-title: Notification()
slug: Web/API/Notification/Notification
l10n:
  sourceCommit: 09ad551d5fecae5872328ece2871fdf02b115b6e
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Der **`Notification()`** Konstruktor erstellt eine neue Instanz eines {{domxref("Notification")}}-Objekts, das eine Benachrichtigung für den Benutzer darstellt.

> [!NOTE]
> Der Versuch, eine Benachrichtigung innerhalb des {{domxref("ServiceWorkerGlobalScope")}} mit dem `Notification()` Konstruktor zu erstellen, führt zu einem `TypeError`. Verwenden Sie stattdessen {{domxref("ServiceWorkerRegistration.showNotification()")}}.

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
      - : Muss nicht angegeben oder ein leeres Array sein. `actions` wird nur für persistente Benachrichtigungen unterstützt, die von einem Service-Arbeiter mit {{domxref("ServiceWorkerRegistration.showNotification()")}} ausgelöst werden.
    - `badge` {{optional_inline}}
      - : Ein String, der die URL des Bildes enthält, das verwendet wird, um die Benachrichtigung darzustellen, wenn nicht genügend Platz vorhanden ist, um die Benachrichtigung selbst anzuzeigen; zum Beispiel die Android-Benachrichtigungsleiste. Auf Android-Geräten sollte das Badge Geräte bis zu einer Auflösung von 4x, etwa 96x96px, unterstützen, und das Bild wird automatisch maskiert.
    - `body` {{optional_inline}}
      - : Ein String, der den Textkörper der Benachrichtigung darstellt und unter dem Titel angezeigt wird. Standard ist der leere String.
    - `data` {{optional_inline}}
      - : Beliebige Daten, die Sie mit der Benachrichtigung verknüpfen möchten. Dies kann ein beliebiger [strukturierter-klonbarer](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) Datentyp sein. Standard ist `null`.
    - `dir` {{optional_inline}}
      - : Die Richtung, in der die Benachrichtigung angezeigt wird. Standard ist `auto`, was einfach die Spracheinstellung des Browsers übernimmt, aber Sie können dieses Verhalten überschreiben, indem Sie Werte von `ltr` und `rtl` einstellen (obwohl die meisten Browser diese Einstellungen anscheinend ignorieren).
    - `icon` {{optional_inline}}
      - : Ein String, der die URL eines Icons enthält, das in der Benachrichtigung angezeigt werden soll.
    - `image` {{optional_inline}}
      - : Ein String, der die URL eines Bildes enthält, das in der Benachrichtigung angezeigt werden soll.
    - `lang` {{optional_inline}}
      - : Die Sprache der Benachrichtigung, wie sie mit einem String angegeben wird, der ein Sprach-Tag gemäß {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} darstellt. Sehen Sie die Sitepoint-Seite zu [ISO 2 Buchstaben Sprachcodes](https://www.sitepoint.com/iso-2-letter-language-codes/) für eine einfache Referenz. Standard ist der leere String.
    - `renotify` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob der Benutzer benachrichtigt werden soll, nachdem eine neue Benachrichtigung eine alte ersetzt hat. Standard ist `false`, was bedeutet, dass sie nicht benachrichtigt werden. Wenn `true`, muss auch `tag` gesetzt sein.
    - `requireInteraction` {{optional_inline}}
      - : Zeigt an, dass eine Benachrichtigung aktiv bleiben soll, bis der Benutzer sie anklickt oder schließt, anstatt automatisch zu schließen. Der Standardwert ist `false`.
    - `silent` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Benachrichtigung lautlos ist (keine Geräusche oder Vibrationen), unabhängig von den Geräteeinstellungen. Der Standardwert `null` bedeutet, dass die Gerätestandards respektiert werden. Wenn `true`, darf `vibrate` nicht vorhanden sein.
    - `tag` {{optional_inline}}
      - : Ein String, der ein identifizierendes Tag für die Benachrichtigung darstellt. Standard ist der leere String.
    - `timestamp` {{optional_inline}}
      - : Ein Zeitstempel, angegeben als {{glossary("Unix time")}} in Millisekunden, der die Zeit darstellt, die mit der Benachrichtigung verknüpft ist. Dies könnte in der Vergangenheit liegen, wenn eine Benachrichtigung für eine Nachricht verwendet wird, die nicht sofort zugestellt werden konnte, weil das Gerät offline war, oder in der Zukunft für ein Treffen, das gleich beginnt.
    - `vibrate` {{optional_inline}}
      - : Ein [Vibrationsmuster](/de/docs/Web/API/Vibration_API#vibration_patterns) für die Vibrationshardware des Geräts, das mit der Benachrichtigung abgespielt wird. Wenn angegeben, darf `silent` nicht `true` sein.

### Rückgabewert

Eine Instanz des {{domxref("Notification")}}-Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn:
    - Der Konstruktor innerhalb des {{domxref("ServiceWorkerGlobalScope")}} aufgerufen wird.
    - Die `actions`-Option angegeben und nicht leer ist.
    - Die `silent`-Option `true` ist und die `vibrate`-Option angegeben ist.
    - Die `renotify`-Option `true` ist, aber die `tag`-Option leer ist.
- `DataCloneError` {{domxref("DOMException")}}
  - : Wird geworfen, wenn das Serialisieren der `data`-Option aus irgendeinem Grund fehlschlägt.

## Beispiele

Hier ist ein grundlegendes Beispiel, das nur eine Benachrichtigung zeigt, wenn die Erlaubnis bereits erteilt wurde. Für vollständigere Beispiele siehe die {{domxref("Notification")}}-Seite.

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

Ab Chrome 49 funktionieren Benachrichtigungen nicht im Inkognito-Modus.

Chrome für Android wirft einen {{jsxref("TypeError")}}, wenn der `Notification`-Konstruktor aufgerufen wird. Es unterstützt nur das Erstellen von Benachrichtigungen aus einem Service-Arbeiter. Siehe den [Chromium-Issue-Tracker](https://crbug.com/481856) für weitere Details.

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
