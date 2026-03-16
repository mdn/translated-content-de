---
title: "Benachrichtigung: Notification() Konstruktor"
short-title: Notification()
slug: Web/API/Notification/Notification
l10n:
  sourceCommit: 8a6e8b53625bddb3af2cf2fb927cb3e430b12ba2
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Der **`Notification()`** Konstruktor erstellt eine neue Instanz des [`Notification`](/de/docs/Web/API/Notification) Objekts, das eine Benutzerbenachrichtigung darstellt.

Der Versuch, eine Benachrichtigung im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) mit dem `Notification()` Konstruktor zu erstellen, führt zu einem `TypeError`.
Verwenden Sie stattdessen [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification).

Sie müssen zuerst die Erlaubnis einholen, bevor Sie Benachrichtigungen anzeigen können, indem Sie [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) verwenden.
Die Erlaubnis kann möglicherweise nicht erteilt werden, beispielsweise wenn die Seite im privaten Browsing-Modus ist.

Dieser Konstruktor wirft einen {{jsxref("TypeError")}}, wenn er in fast allen mobilen Browsern aufgerufen wird, und es ist unwahrscheinlich, dass sich dies ändert, da Webseiten auf mobilen Geräten fast nie "im Hintergrund ausgeführt werden", was der Hauptanwendungsfall für Benachrichtigungen ist.
Stattdessen müssen Sie einen Service Worker registrieren und [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) verwenden.
Siehe [Chrome issue](https://crbug.com/481856) für weitere Informationen.

## Syntax

```js-nolint
new Notification(title)
new Notification(title, options)
```

### Parameter

- `title`
  - : Definiert einen Titel für die Benachrichtigung, der oben im Benachrichtigungsfenster angezeigt wird.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das alle benutzerdefinierten Einstellungen enthält, die Sie auf die Benachrichtigung anwenden möchten.
    Die möglichen Optionen sind:
    - `actions` {{optional_inline}}
      - : Muss nicht angegeben oder ein leeres Array sein.
        `actions` wird nur für [persistente Benachrichtigungen](/de/docs/Web/API/Notifications_API#persistent_and_non-persistent_notifications) unterstützt, die von einem Service Worker mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) ausgelöst werden.
    - `badge` {{optional_inline}}
      - : Ein String, der die URL des Bildes enthält, das die Benachrichtigung darstellt, wenn nicht genug Platz zum Anzeigen der Benachrichtigung selbst ist; beispielsweise die Android-Benachrichtigungsleiste.
        Auf Android-Geräten sollte das Badge Geräte bis zu 4-facher Auflösung, etwa 96x96px, berücksichtigen, und das Bild wird automatisch maskiert.
    - `body` {{optional_inline}}
      - : Ein String, der den Text der Benachrichtigung darstellt, der unter dem Titel angezeigt wird.
        Der Standard ist der leere String.
    - `data` {{optional_inline}}
      - : Beliebige Daten, die Sie mit der Benachrichtigung verknüpfen möchten.
        Dies kann eine [strukturierbar klonbare](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) Datenart sein.
        Der Standard ist `null`.
    - `dir` {{optional_inline}}
      - : Die Richtung, in der die Benachrichtigung angezeigt wird.
        Der Standard ist `auto`, was einfach das Sprachverhalten des Browsers übernimmt, aber Sie können dieses Verhalten überschreiben, indem Sie die Werte `ltr` und `rtl` festlegen (obwohl die meisten Browser diese Einstellungen scheinbar ignorieren).
    - `icon` {{optional_inline}}
      - : Ein String, der die URL eines Symbols enthält, das in der Benachrichtigung angezeigt wird.
    - `image` {{optional_inline}}
      - : Ein String, der die URL eines Bildes enthält, das in der Benachrichtigung angezeigt wird.
    - `lang` {{optional_inline}}
      - : Die Sprache der Benachrichtigung, angegeben als String, der einen {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} darstellt.
        Der Standard ist der leere String.
    - `navigate` {{optional_inline}} {{experimental_inline}}
      - : Ein String, der eine URL enthält, zu der navigiert wird, wenn der Benutzer die Benachrichtigung aktiviert.
        Wenn eingestellt, navigiert der Benutzeragent zu dieser URL anstatt das [`click`](/de/docs/Web/API/Notification/click_event) Ereignis auszulösen.
        Der Wert wird relativ zur Basis-URL der Seite analysiert.
        Siehe [`Notification.navigate`](/de/docs/Web/API/Notification/navigate) für weitere Informationen.
    - `renotify` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob der Benutzer benachrichtigt werden soll, nachdem eine neue Benachrichtigung eine alte ersetzt hat.
        Der Standard ist `false`, was bedeutet, dass sie nicht benachrichtigt werden.
        Wenn `true`, muss auch `tag` gesetzt sein.
    - `requireInteraction` {{optional_inline}}
      - : Gibt an, dass eine Benachrichtigung aktiv bleiben soll, bis der Benutzer sie anklickt oder schließt, anstatt automatisch geschlossen zu werden.
        Der Standardwert ist `false`.
    - `silent` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Benachrichtigung lautlos sein soll, d.h. es sollten unabhängig von den Geräteeinstellungen keine Geräusche oder Vibrationen ausgegeben werden.
        Wenn auf `true` gesetzt, ist die Benachrichtigung lautlos; wenn auf `null` gesetzt (der Standardwert), werden die Standardeinstellungen des Geräts beachtet.
    - `tag` {{optional_inline}}
      - : Ein String, der ein identifizierendes Tag für die Benachrichtigung darstellt.
        Der Standard ist der leere String.
    - `timestamp` {{optional_inline}}
      - : Ein Zeitstempel, angegeben als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden, die die Zeit darstellt, die mit der Benachrichtigung verknüpft ist.
        Dies könnte in der Vergangenheit liegen, wenn eine Benachrichtigung für eine Nachricht verwendet wird, die nicht sofort zugestellt werden konnte, weil das Gerät offline war, oder in der Zukunft für ein Meeting, das bald beginnt.
    - `vibrate` {{optional_inline}}
      - : Ein [Vibrationsmuster](/de/docs/Web/API/Vibration_API#vibration_patterns) für die Vibrationshardware des Geräts, die mit der Benachrichtigung ausgegeben wird.
        Wenn angegeben, darf `silent` nicht `true` sein.

### Rückgabewert

Eine Instanz des [`Notification`](/de/docs/Web/API/Notification) Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Der Konstruktor innerhalb des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) aufgerufen wird.
    - Die `actions` Option angegeben ist und nicht leer ist.
    - Die `silent` Option `true` ist und die `vibrate` Option angegeben ist.
    - Die `renotify` Option `true` ist, aber die `tag` Option leer ist.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Serialisierung der `data` Option aus irgendeinem Grund fehlschlägt.

## Beispiele

Hier ist ein einfaches Beispiel, um nur dann eine Benachrichtigung anzuzeigen, wenn die Erlaubnis bereits erteilt ist.
Für vollständigere Beispiele siehe die [`Notification`](/de/docs/Web/API/Notification) Seite.

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
