---
title: "Navigator: getInstalledRelatedApps() Methode"
short-title: getInstalledRelatedApps()
slug: Web/API/Navigator/getInstalledRelatedApps
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{APIRef}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getInstalledRelatedApps()`** Methode gibt ein Promise zurück, das mit einem Array von Objekten aufgelöst wird, die alle benutzerinstallierten platform-spezifischen Apps oder [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) darstellen. Dies kann zur Personalisierung von Inhalten verwendet werden, z. B. indem "installieren Sie unsere App" Banner von der Web-App entfernt werden, wenn die platform-spezifische App und/oder PWA bereits installiert ist.

> [!NOTE]
> Diese Methode muss in einem übergeordneten [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden, also nicht eingebettet in ein {{htmlelement("iframe")}}.

## Beschreibung

`getInstalledRelatedApps()` kann verwendet werden, um die Installation von Universal Windows Platform (UWP) Apps, Android Apps und PWAs zu überprüfen, die mit der die Methode aufrufenden Web-App verbunden sind.

Um die aufrufende Web-App mit einer platform-spezifischen App oder PWA zu verknüpfen, müssen zwei Dinge getan werden:

1. Die aufrufende Web-App muss im [`related_applications`](/de/docs/Web/Manifest/Reference/related_applications) Element ihrer [Manifest-Datei](/de/docs/Web/Manifest) spezifiziert sein.
2. Die platform-spezifische App oder PWA muss ihre Beziehung zur aufrufenden App definiert haben.

Die Definition der Beziehung erfolgt je nach App-Typ auf unterschiedliche Weise:

- Eine Android App tut dies über das [Digital Asset Links System](https://developers.google.com/digital-asset-links/v1/getting-started).
- Eine Windows UWP App tut dies über [URI-Handler](https://learn.microsoft.com/en-us/windows/uwp/launch-resume/web-to-app-linking).
- Eine PWA tut dies über:
  - Einen selbstdefinierenden Eintrag innerhalb ihres eigenen `related_applications` Manifest-Elements, falls eine PWA prüft, ob sie auf der zugrunde liegenden Plattform installiert ist.
  - Eine `assetlinks.json` Datei in ihrem [`/.well-known/`](https://datatracker.ietf.org/doc/html/rfc5785) Verzeichnis, falls eine App außerhalb des Geltungsbereichs der PWA prüft, ob sie installiert ist.

Siehe [Is your app installed? getInstalledRelatedApps() will tell you!](https://web.dev/articles/get-installed-related-apps) für weitere Details, wie man jeden dieser Fälle behandelt.

> [!NOTE]
> Die meisten unterstützenden Browser bieten ihre eigene Installationsoberfläche, wenn eine installierbare PWA erkannt wird, die nicht angezeigt wird, wenn sie bereits installiert ist — siehe [Making PWAs installable > Installation from the web](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installation_from_the_web). Dies kann durch das [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event) Ereignis unterdrückt werden, das auch mit `getInstalledRelatedApps()` kombiniert werden könnte, um es basierend auf einer verfügbaren platform-spezifischen App zu unterdrücken. Siehe [Trigger installation from your PWA](/de/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt#responding_to_platform-specific_apps_being_installed) für weitere nützliche Informationen.

## Syntax

```js-nolint
getInstalledRelatedApps()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von Objekten erfüllt wird, die alle installierten verwandten Apps darstellen. Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `id` {{optional_inline}}
  - : Ein String, der die ID darstellt, die zur Repräsentation der Anwendung auf der angegebenen Plattform verwendet wird. Die genaue Form des Strings variiert je nach Plattform.
- `platform`
  - : Ein String, der die [Plattform](https://github.com/w3c/manifest/wiki/Platforms) (Ökosystem oder Betriebssystem) darstellt, mit der die verwandte App verbunden ist. Dies kann sein:
    - `"chrome_web_store"`: Eine [Google Chrome Web Store](https://chromewebstore.google.com/) App.
    - `"play"`: Eine [Google Play Store](https://play.google.com/store/games) App.
    - `"chromeos_play"`: Eine [ChromeOS Play](https://support.google.com/googleplay/answer/7021273) App.
    - `"webapp"`: Eine [Progressive Web App](/de/docs/Web/Progressive_web_apps).
    - `"windows"`: Eine [Windows Store](https://apps.microsoft.com/?rtc=1&hl=en-us&gl=us) App.
    - `"f-droid"`: Eine [F-Droid](https://f-droid.org/) App.
    - `"amazon"`: Eine [Amazon App Store](https://www.amazon.com/gp/browse.html?node=2350149011) App.
- `url` {{optional_inline}}
  - : Ein String, der die mit der App verbundene URL darstellt. Dies ist in der Regel der Ort, an dem Sie Informationen dazu lesen und sie installieren können.
- `version` {{optional_inline}}
  - : Ein String, der die Version der verwandten App darstellt.

Die Informationen zur verwandten App müssen zuvor im [`related_applications`](/de/docs/Web/Manifest/Reference/related_applications) Element der Manifest-Datei der aufrufenden Web-App spezifiziert worden sein.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wurde nicht in einem übergeordneten Browserkontext aufgerufen.

## Beispiele

```js
const relatedApps = await navigator.getInstalledRelatedApps();

// Dump all the returned related apps into a table in the console
console.table(relatedApps);

// Search for a specific installed platform-specific app
const psApp = relatedApps.find((app) => app.id === "com.example.myapp");

if (psApp && doesVersionSendPushMessages(psApp.version)) {
  // There's an installed platform-specific app that handles sending push messages
  // No need to handle this via the web app
  return;
}
```

> [!NOTE]
> In diesem Beispiel ist `doesVersionSendPushMessages()` eine theoretische, vom Entwickler definierte Funktion; sie wird nicht vom Browser bereitgestellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Is your app installed? getInstalledRelatedApps() will tell you!](https://web.dev/articles/get-installed-related-apps)
