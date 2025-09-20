---
title: "Benachrichtigung: Notification() Konstruktor"
short-title: Notification()
slug: Web/API/Notification/Notification
l10n:
  sourceCommit: 3e8eb2b3466248d87e86df227f45deb49054aa42
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Der **`Notification()`** Konstruktor erstellt eine neue Instanz eines [`Notification`](/de/docs/Web/API/Notification)-Objekts, das eine Benutzerbenachrichtigung darstellt.

Der Versuch, eine Benachrichtigung innerhalb des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) unter Verwendung des `Notification()` Konstruktors zu erstellen, löst einen `TypeError` aus. Verwenden Sie stattdessen [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification).

Sie müssen zuerst die Erlaubnis einholen, bevor Sie Benachrichtigungen anzeigen können, indem Sie [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) verwenden. Die Erlaubnis ist möglicherweise nicht erteilbar, zum Beispiel wenn die Seite im privaten Browsing-Modus ist.

Dieser Konstruktor löst in nahezu allen mobilen Browsern einen {{jsxref("TypeError")}} aus und dies wird sich wahrscheinlich nicht ändern, da Webseiten auf mobilen Geräten fast nie "im Hintergrund laufen", was der Hauptanwendungsfall für Benachrichtigungen ist. Stattdessen müssen Sie einen Service Worker registrieren und [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) verwenden. Weitere Informationen finden Sie im [Chrome-Problembericht](https://crbug.com/481856).

## Syntax

```js-nolint
new Notification(title)
new Notification(title, options)
```

### Parameter

- `title`
  - : Definiert einen Titel für die Benachrichtigung, der oben im Benachrichtigungsfenster angezeigt wird.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das alle benutzerdefinierten Einstellungen enthält, die Sie auf die Benachrichtigung anwenden möchten. Die möglichen Optionen sind:
    - `actions` {{optional_inline}}
      - : Muss entweder nicht spezifiziert oder ein leeres Array sein. `actions` wird nur für persistente Benachrichtigungen unterstützt, die von einem Service Worker mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) ausgelöst werden.
    - `badge` {{optional_inline}}
      - : Ein String, der die URL des Bildes enthält, welches zur Darstellung der Benachrichtigung verwendet wird, wenn nicht genügend Platz vorhanden ist, um die Benachrichtigung selbst anzuzeigen; zum Beispiel die Android-Benachrichtigungsleiste. Auf Android-Geräten sollte das Abzeichen Geräte bis 4x Auflösung, etwa 96x96px, berücksichtigen und das Bild wird automatisch maskiert.
    - `body` {{optional_inline}}
      - : Ein String, der den Textkörper der Benachrichtigung darstellt, der unter dem Titel angezeigt wird. Standardmäßig ist es der leere String.
    - `data` {{optional_inline}}
      - : Beliebige Daten, die Sie mit der Benachrichtigung verknüpfen möchten. Dies kann jeder [structured-clonable](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) Datentyp sein. Standardmäßig ist es `null`.
    - `dir` {{optional_inline}}
      - : Die Richtung, in der die Benachrichtigung angezeigt werden soll. Es ist standardmäßig `auto`, was einfach das Sprachverhaltens des Browsers übernimmt, aber Sie können dieses Verhalten überschreiben, indem Sie Werte von `ltr` und `rtl` setzen (obwohl die meisten Browser diese Einstellungen anscheinend ignorieren).
    - `icon` {{optional_inline}}
      - : Ein String, der die URL eines Icons enthält, das in der Benachrichtigung angezeigt werden soll.
    - `image` {{optional_inline}}
      - : Ein String, der die URL eines Bildes enthält, das in der Benachrichtigung angezeigt werden soll.
    - `lang` {{optional_inline}}
      - : Die Sprache der Benachrichtigung, angegeben durch einen String, der einen Sprachcode gemäß {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} darstellt. Siehe die Sitepoint-Seite zu [ISO-2-Buchstaben-Sprachcodes](https://www.sitepoint.com/iso-2-letter-language-codes/) für eine einfache Referenz. Standardmäßig ist es der leere String.
    - `renotify` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob der Benutzer benachrichtigt werden soll, nachdem eine neue Benachrichtigung eine alte ersetzt. Der Standardwert ist `false`, was bedeutet, dass sie nicht benachrichtigt werden. Wenn `true`, muss auch `tag` gesetzt werden.
    - `requireInteraction` {{optional_inline}}
      - : Gibt an, dass eine Benachrichtigung aktiv bleiben sollte, bis der Benutzer sie anklickt oder schließt, anstatt automatisch zu schließen. Der Standardwert ist `false`.
    - `silent` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Benachrichtigung still sein soll, d.h. keine Geräusche oder Vibrationen ausgegeben werden sollten, unabhängig von den Geräteeinstellungen. Wenn auf `true` gesetzt, ist die Benachrichtigung lautlos; wenn auf `null` gesetzt (der Standardwert), werden die Standardeinstellungen des Geräts respektiert.
    - `tag` {{optional_inline}}
      - : Ein String, der eine identifizierende Markierung für die Benachrichtigung darstellt. Standardmäßig ist es der leere String.
    - `timestamp` {{optional_inline}}
      - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, der die Zeit repräsentiert, die mit der Benachrichtigung verbunden ist. Dies könnte in der Vergangenheit sein, wenn eine Benachrichtigung für eine Nachricht verwendet wird, die nicht sofort zugestellt werden konnte, weil das Gerät offline war, oder in der Zukunft für ein Meeting, das gleich beginnt.
    - `vibrate` {{optional_inline}}
      - : Ein [Vibrationsmuster](/de/docs/Web/API/Vibration_API#vibration_patterns), das die Vibrationshardware des Geräts mit der Benachrichtigung emittieren soll. Wenn angegeben, darf `silent` nicht `true` sein.

### Rückgabewert

Eine Instanz des [`Notification`](/de/docs/Web/API/Notification)-Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Der Konstruktor innerhalb des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aufgerufen wird.
    - Die `actions`-Option spezifiziert und nicht leer ist.
    - Die `silent`-Option `true` ist und die `vibrate`-Option angegeben ist.
    - Die `renotify`-Option `true` ist, aber die `tag`-Option leer ist.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Serialisieren der `data`-Option aus irgendeinem Grund fehlschlägt.

## Beispiele

Hier ist ein sehr einfaches Beispiel, um nur eine Benachrichtigung anzuzeigen, wenn die Erlaubnis bereits erteilt wurde. Für vollständigere Beispiele siehe die [`Notification`](/de/docs/Web/API/Notification)-Seite.

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
