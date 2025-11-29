---
title: "Navigator: getInstalledRelatedApps() Methode"
short-title: getInstalledRelatedApps()
slug: Web/API/Navigator/getInstalledRelatedApps
l10n:
  sourceCommit: d007a8e309a42faa62a69e0cd1095578e61a2b86
---

{{APIRef}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getInstalledRelatedApps()`**-Methode gibt ein Promise zurück, das mit einem Array von Objekten aufgelöst wird, die alle benutzerinstallierten plattformspezifischen Apps oder [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) repräsentieren. Dies könnte zur Personalisierung von Inhalten verwendet werden, beispielsweise um "Installieren Sie unsere App"-Banner aus der Web-App zu entfernen, wenn die plattformspezifische App und/oder PWA bereits installiert ist.

> [!NOTE]
> Diese Methode muss in einem Top-Level-[sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) aufgerufen werden, das heißt, nicht eingebettet in ein {{htmlelement("iframe")}}.

## Beschreibung

`getInstalledRelatedApps()` kann verwendet werden, um die Installation von Universal Windows Platform (UWP) Apps, Android-Apps und PWAs zu überprüfen, die zur aufrufenden Web-App gehören.

Um die aufrufende Web-App mit einer plattformspezifischen App oder PWA zu verknüpfen, müssen zwei Dinge getan werden:

1. Die aufrufende Web-App muss im [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications)-Mitglied ihrer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Manifest) angegeben sein.
2. Die plattformspezifische App oder PWA muss ihre Beziehung zur aufrufenden App definiert haben.

Die Definition der Beziehung erfolgt je nach App-Typ auf unterschiedliche Weise:

- Eine Android-App nutzt dazu das [Digital Asset Links System](https://developers.google.com/digital-asset-links/v1/getting-started).
- Eine Windows UWP-App verwendet [URI Handler](https://learn.microsoft.com/en-us/windows/apps/develop/launch/web-to-app-linking).
- Eine PWA macht dies durch:
  - Einen selbsterklärenden Eintrag innerhalb ihres eigenen `related_applications`-Manifest-Mitglieds, der die Eigenschaften `platform` und `id` angibt, im Fall einer PWA, die innerhalb des gleichen Scopes prüft, ob sie auf der darunterliegenden Plattform installiert ist.
  - Eine `assetlinks.json`-Datei in ihrem [`/.well-known/`](https://datatracker.ietf.org/doc/html/rfc5785) Verzeichnis im Fall einer App außerhalb des Scopes der PWA, die überprüft, ob sie auf Android installiert ist.

Weitere Details zum Umgang mit diesen Fällen finden Sie unter [Ist Ihre App installiert? getInstalledRelatedApps() wird es Ihnen sagen!](https://developer.chrome.com/docs/capabilities/get-installed-related-apps).

> [!NOTE]
> Die meisten unterstützenden Browser bieten ihre eigene Installations-Benutzeroberfläche, wenn eine installierbare PWA erkannt wird, die nicht erscheint, wenn sie bereits installiert ist — siehe [PWAs installierbar machen > Installation aus dem Web](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installation_from_the_web). Dies kann mit dem [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)-Ereignis unterdrückt werden, das auch mit `getInstalledRelatedApps()` kombiniert werden könnte, um es basierend auf einer verfügbaren plattformspezifischen App zu unterdrücken. Siehe [Auslösen der Installation von Ihrer PWA](/de/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt#responding_to_platform-specific_apps_being_installed) für weiterführende Informationen.

## Syntax

```js-nolint
getInstalledRelatedApps()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von Objekten aufgelöst wird, die alle installierten zugehörigen Apps repräsentieren. Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `id` {{optional_inline}}
  - : Ein String, der die ID darstellt, die verwendet wird, um die Anwendung auf der angegebenen Plattform zu repräsentieren. Die genaue Form des Strings variiert je nach Plattform.
- `platform`
  - : Ein String, der die [Plattform](https://github.com/w3c/manifest/wiki/Platforms) (Ökosystem oder Betriebssystem) repräsentiert, mit der die zugehörige App in Verbindung steht. Dies kann sein:
    - `"chrome_web_store"`: Eine [Google Chrome Web Store](https://chromewebstore.google.com/) App.
    - `"play"`: Eine [Google Play Store](https://play.google.com/store/games) App.
    - `"chromeos_play"`: Eine [ChromeOS Play](https://support.google.com/googleplay/answer/7021273) App.
    - `"webapp"`: Eine [Progressive Web App](/de/docs/Web/Progressive_web_apps).
    - `"windows"`: Eine [Windows Store](https://apps.microsoft.com/?rtc=1&hl=en-us&gl=us) App.
    - `"f-droid"`: Eine [F-Droid](https://f-droid.org/) App.
    - `"amazon"`: Eine [Amazon App Store](https://www.amazon.com/gp/browse.html?node=2350149011) App.
- `url` {{optional_inline}}
  - : Ein String, der die mit der App verbundene URL darstellt. Dies ist normalerweise der Ort, an dem Sie Informationen darüber lesen und sie installieren können.
- `version` {{optional_inline}}
  - : Ein String, der die Version der zugehörigen App darstellt.

Die Informationen zu der zugehörigen App müssen zuvor im [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications)-Mitglied der aufrufenden Web-App [Manifestdatei](/de/docs/Web/Progressive_web_apps/Manifest) angegeben worden sein.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wurde nicht in einem Top-Level-Browsing-Kontext aufgerufen.

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

- [Ist Ihre App installiert? getInstalledRelatedApps() wird es Ihnen sagen!](https://developer.chrome.com/docs/capabilities/get-installed-related-apps)
