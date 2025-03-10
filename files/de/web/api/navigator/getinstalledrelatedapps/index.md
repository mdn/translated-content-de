---
title: "Navigator: getInstalledRelatedApps() Methode"
short-title: getInstalledRelatedApps()
slug: Web/API/Navigator/getInstalledRelatedApps
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{APIRef}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getInstalledRelatedApps()`** Methode gibt ein Promise zurück, das mit einem Array von Objekten aufgelöst wird, die alle installierten plattformspezifischen Apps oder [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) darstellen. Dies könnte zur Personalisierung von Inhalten genutzt werden, indem z.B. "Installieren Sie unsere App"-Banner von der Web-App entfernt werden, wenn die plattformspezifische App und/oder PWA bereits installiert ist.

> [!NOTE]
> Diese Methode muss in einem übergeordneten [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden, das heißt, sie darf nicht in einem {{htmlelement("iframe")}} eingebettet sein.

## Beschreibung

`getInstalledRelatedApps()` kann genutzt werden, um die Installation von Universal Windows Platform (UWP) Apps, Android-Apps und PWAs zu überprüfen, die mit der die Methode aufrufenden Web-App in Beziehung stehen.

Um die aufrufende Web-App mit einer plattformspezifischen App oder PWA zu verknüpfen, müssen zwei Dinge getan werden:

1. Die aufrufende Web-App muss im [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications)-Mitglied ihrer [Manifest-Datei](/de/docs/Web/Progressive_web_apps/Manifest) angegeben sein.
2. Die plattformspezifische App oder PWA muss ihre Beziehung zur aufrufenden App definiert haben.

Die Definition der Beziehung erfolgt je nach Art der App unterschiedlich:

- Eine Android-App verwendet dazu das [Digital Asset Links System](https://developers.google.com/digital-asset-links/v1/getting-started).
- Eine Windows UWP App verwendet dazu [URI Handlers](https://learn.microsoft.com/en-us/windows/apps/develop/launch/web-to-app-linking).
- Eine PWA verwendet dafür:
  - Einen selbsterklärenden Eintrag innerhalb ihres eigenen `related_applications`-Manifest-Mitglieds, falls eine PWA überprüft, ob sie auf der zugrundeliegenden Plattform installiert ist.
  - Eine `assetlinks.json`-Datei in ihrem [`/.well-known/`](https://datatracker.ietf.org/doc/html/rfc5785) Verzeichnis, falls eine App außerhalb des Geltungsbereichs der PWA überprüft, ob sie installiert ist.

Siehe [Ist Ihre App installiert? getInstalledRelatedApps() wird es Ihnen sagen!](https://web.dev/articles/get-installed-related-apps) für mehr Details, wie Sie jede dieser Fälle handhaben können.

> [!NOTE]
> Die meisten unterstützenden Browser bieten ihre eigene Installations-UI, wenn eine installierbare PWA erkannt wird, die nicht erscheint, wenn sie bereits installiert ist – siehe [PWAs installierbar machen > Installation aus dem Web](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installation_from_the_web). Dies kann mit dem [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)-Ereignis unterdrückt werden, das auch mit `getInstalledRelatedApps()` kombiniert werden könnte, um es basierend auf einer plattformspezifischen verfügbaren App zu unterdrücken. Siehe [Installation aus Ihrer PWA auslösen](/de/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt#responding_to_platform-specific_apps_being_installed) für weitere nützliche Informationen.

## Syntax

```js-nolint
getInstalledRelatedApps()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von Objekten aufgelöst wird, die alle installierten verwandten Apps darstellen. Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `id` {{optional_inline}}
  - : Ein String, der die ID repräsentiert, die zur Darstellung der Anwendung auf der angegebenen Plattform verwendet wird. Die genaue Form des Strings variiert je nach Plattform.
- `platform`
  - : Ein String, der die [Plattform](https://github.com/w3c/manifest/wiki/Platforms) (Ökosystem oder Betriebssystem) beschreibt, mit der die verwandte App in Verbindung steht. Dies kann sein:
    - `"chrome_web_store"`: Eine [Google Chrome Web Store](https://chromewebstore.google.com/) App.
    - `"play"`: Eine [Google Play Store](https://play.google.com/store/games) App.
    - `"chromeos_play"`: Eine [ChromeOS Play](https://support.google.com/googleplay/answer/7021273) App.
    - `"webapp"`: Eine [Progressive Web App](/de/docs/Web/Progressive_web_apps).
    - `"windows"`: Eine [Windows Store](https://apps.microsoft.com/?rtc=1&hl=en-us&gl=us) App.
    - `"f-droid"`: Eine [F-Droid](https://f-droid.org/) App.
    - `"amazon"`: Eine [Amazon App Store](https://www.amazon.com/gp/browse.html?node=2350149011) App.
- `url` {{optional_inline}}
  - : Ein String, der die URL repräsentiert, die mit der App verbunden ist. Dies ist normalerweise der Ort, an dem Sie Informationen darüber lesen und sie installieren können.
- `version` {{optional_inline}}
  - : Ein String, der die Version der verwandten App repräsentiert.

Die Informationen über die verwandte App müssen zuvor im [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications)-Mitglied der die Methode aufrufenden Web-App [Manifest-Datei](/de/docs/Web/Progressive_web_apps/Manifest) angegeben worden sein.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wurde nicht in einem übergeordneten Browsing-Kontext aufgerufen.

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
> In diesem Beispiel ist `doesVersionSendPushMessages()` eine theoretische, von Entwicklern definierte Funktion; sie wird nicht vom Browser bereitgestellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ist Ihre App installiert? getInstalledRelatedApps() wird es Ihnen sagen!](https://web.dev/articles/get-installed-related-apps)
