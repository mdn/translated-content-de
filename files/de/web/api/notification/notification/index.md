---
title: "Benachrichtigung: Notification()-Konstruktor"
short-title: Notification()
slug: Web/API/Notification/Notification
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Der **`Notification()`**-Konstruktor erstellt eine neue [`Notification`](/de/docs/Web/API/Notification)-Objektinstanz, die eine Benutzerbenachrichtigung darstellt.

Der Versuch, eine Benachrichtigung innerhalb des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) mit dem `Notification()`-Konstruktor zu erstellen, führt zu einem `TypeError`. Verwenden Sie stattdessen [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification).

Sie müssen zuerst die Erlaubnis einholen, bevor Sie Benachrichtigungen anzeigen können, indem Sie [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) verwenden. Die Erlaubnis kann möglicherweise nicht erteilt werden, beispielsweise wenn die Seite im privaten Modus geöffnet ist.

Dieser Konstruktor wirft einen {{jsxref("TypeError")}}, wenn er in fast allen mobilen Browsern aufgerufen wird und dies wird sich wahrscheinlich nicht ändern, da Webseiten auf mobilen Geräten fast nie "im Hintergrund laufen", was der Hauptanwendungsfall für Benachrichtigungen ist. Stattdessen müssen Sie einen Service Worker registrieren und [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) verwenden. Weitere Informationen finden Sie im [Chrome-Issue](https://crbug.com/481856).

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
      - : Muss nicht spezifiziert oder ein leeres Array sein. `actions` wird nur für persistente Benachrichtigungen unterstützt, die von einem Service Worker mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) ausgelöst werden.
    - `badge` {{optional_inline}}
      - : Ein String, der die URL des Bildes enthält, das verwendet wird, um die Benachrichtigung darzustellen, wenn nicht genügend Platz vorhanden ist, um die Benachrichtigung selbst anzuzeigen, zum Beispiel in der Android-Benachrichtigungsleiste. Auf Android-Geräten sollte das Abzeichen Geräte bis zu einer Auflösung von 4x, etwa 96x96px, unterstützen und das Bild wird automatisch maskiert.
    - `body` {{optional_inline}}
      - : Ein String, der den Textinhalt der Benachrichtigung darstellt, der unter dem Titel angezeigt wird. Der Standardwert ist der leere String.
    - `data` {{optional_inline}}
      - : Beliebige Daten, die Sie mit der Benachrichtigung verknüpfen möchten. Dies kann jeder [strukturiert klonbare](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) Datentyp sein. Der Standardwert ist `null`.
    - `dir` {{optional_inline}}
      - : Die Richtung, in der die Benachrichtigung angezeigt werden soll. Der Standardwert ist `auto`, welches einfach das Verhalten der Spracheinstellung des Browsers übernimmt, aber Sie können dieses Verhalten durch das Setzen von Werten wie `ltr` und `rtl` überschreiben (obwohl die meisten Browser diese Einstellungen ignorieren.)
    - `icon` {{optional_inline}}
      - : Ein String, der die URL eines Icons enthält, das in der Benachrichtigung angezeigt wird.
    - `image` {{optional_inline}}
      - : Ein String, der die URL eines Bildes enthält, das in der Benachrichtigung angezeigt wird.
    - `lang` {{optional_inline}}
      - : Die Sprache der Benachrichtigung, angegeben durch einen String, der einen {{Glossary("BCP_47_language_tag", "BCP 47-Sprachcode")}} repräsentiert. Der Standardwert ist der leere String.
    - `renotify` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob der Benutzer benachrichtigt werden soll, nachdem eine neue Benachrichtigung eine alte ersetzt hat. Der Standardwert ist `false`, was bedeutet, dass er nicht benachrichtigt wird. Wenn `true`, dann muss auch `tag` gesetzt sein.
    - `requireInteraction` {{optional_inline}}
      - : Gibt an, dass eine Benachrichtigung aktiv bleiben soll, bis der Benutzer sie anklickt oder schließt, anstatt sie automatisch zu schließen. Der Standardwert ist `false`.
    - `silent` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Benachrichtigung stumm geschaltet sein soll, d.h. unabhängig von den Geräteeinstellungen sollen keine Geräusche oder Vibrationen ausgegeben werden. Wenn auf `true` gesetzt, ist die Benachrichtigung stumm; wenn auf `null` gesetzt (der Standardwert), werden die Standardeinstellungen des Geräts respektiert.
    - `tag` {{optional_inline}}
      - : Ein String, der einen identifizierenden Tag für die Benachrichtigung darstellt. Der Standardwert ist der leere String.
    - `timestamp` {{optional_inline}}
      - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der die mit der Benachrichtigung verknüpfte Zeit darstellt. Dies könnte in der Vergangenheit liegen, wenn eine Benachrichtigung für eine Nachricht verwendet wird, die nicht sofort zugestellt werden konnte, weil das Gerät offline war, oder in der Zukunft für ein Treffen, das bald beginnt.
    - `vibrate` {{optional_inline}}
      - : Ein [Vibrationsmuster](/de/docs/Web/API/Vibration_API#vibration_patterns) für die Vibrationstechnik des Geräts, das mit der Benachrichtigung ausgegeben werden soll. Wenn angegeben, darf `silent` nicht `true` sein.

### Rückgabewert

Eine Instanz des [`Notification`](/de/docs/Web/API/Notification)-Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn:
    - Der Konstruktor innerhalb des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aufgerufen wird.
    - Die `actions`-Option spezifiziert und nicht leer ist.
    - Die `silent`-Option `true` ist und die `vibrate`-Option angegeben ist.
    - Die `renotify`-Option `true` ist, aber die `tag`-Option leer ist.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn die Serialisierung der `data`-Option aus irgendeinem Grund fehlgeschlagen ist.

## Beispiele

Hier ist ein grundlegendes Beispiel, um nur eine Benachrichtigung anzuzeigen, wenn die Erlaubnis bereits erteilt wurde. Für vollständigere Beispiele siehe die [`Notification`](/de/docs/Web/API/Notification)-Seite.

```js
if (Notification.permission === "granted") {
  const notification = new Notification("Hi there!");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
