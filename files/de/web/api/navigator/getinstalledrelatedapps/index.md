---
title: "Navigator: getInstalledRelatedApps()-Methode"
short-title: getInstalledRelatedApps()
slug: Web/API/Navigator/getInstalledRelatedApps
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getInstalledRelatedApps()`**-Methode gibt ein `Promise` zurück, das zu einem Array von Objekten aufgelöst wird, die alle verwandten plattformspezifischen Apps oder [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) darstellen, die der Nutzer installiert hat. Dies könnte für die Personalisierung von Inhalten verwendet werden, beispielsweise um "Installieren Sie unsere App"-Banner von der Web-App zu entfernen, wenn die plattformspezifische App und/oder PWA bereits installiert ist.

> [!NOTE]
> Diese Methode muss in einem top-level [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden, das heißt, sie darf nicht in einem {{htmlelement("iframe")}} eingebettet sein.

## Beschreibung

`getInstalledRelatedApps()` kann verwendet werden, um die Installation von Universal Windows Platform (UWP)-Apps, Android-Apps und PWAs zu überprüfen, die mit der Web-App, die diese Methode aufruft, verknüpft sind.

Um die aufrufende Web-App mit einer plattformspezifischen App oder PWA zu verknüpfen, müssen zwei Dinge getan werden:

1. Die aufrufende Web-App muss im [`related_applications`](/de/docs/Web/Manifest/related_applications)-Mitglied ihrer [Manifestdatei](/de/docs/Web/Manifest) spezifiziert werden.
2. Die plattformspezifische App oder PWA muss ihre Beziehung zur aufrufenden App definieren.

Die Definition der Beziehung erfolgt auf unterschiedliche Weise, abhängig von der Art der App:

- Eine Android-App macht dies über das [Digital Asset Links System](https://developers.google.com/digital-asset-links/v1/getting-started).
- Eine Windows UWP-App macht dies über [URI Handler](https://learn.microsoft.com/en-us/windows/uwp/launch-resume/web-to-app-linking).
- Eine PWA macht dies über:
  - Einen selbstdefinierenden Eintrag in ihrem eigenen `related_applications`-Manifest-Mitglied, falls eine PWA überprüft, ob sie auf der zugrunde liegenden Plattform installiert ist.
  - Eine `assetlinks.json`-Datei in ihrem [`/.well-known/`](https://datatracker.ietf.org/doc/html/rfc5785)-Verzeichnis, falls eine App außerhalb des Bereichs der PWA überprüft, ob sie installiert ist.

Siehe [Ist Ihre App installiert? getInstalledRelatedApps() sagt es Ihnen!](https://web.dev/articles/get-installed-related-apps) für weitere Details, wie jeder dieser Fälle behandelt werden kann.

> [!NOTE]
> Die meisten unterstützenden Browser bieten ihre eigene Installations-Benutzeroberfläche, wenn eine installierbare PWA erkannt wird, die nicht erscheint, wenn sie bereits installiert ist — siehe [PWAs installierbar machen > Installation aus dem Web](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installation_from_the_web). Dies kann mit dem [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)-Ereignis unterdrückt werden, das auch mit `getInstalledRelatedApps()` kombiniert werden könnte, um es basierend auf einer verfügbaren plattformspezifischen App zu unterdrücken. Siehe [Installation von Ihrer PWA auslösen](/de/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt#responding_to_platform-specific_apps_being_installed) für weitere nützliche Informationen.

## Syntax

```js-nolint
getInstalledRelatedApps()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von Objekten aufgelöst wird, die alle installierten verwandten Apps darstellen. Jedes Objekt kann folgende Eigenschaften enthalten:

- `id` {{optional_inline}}
  - : Ein String, der die ID darstellt, die verwendet wird, um die Anwendung auf der angegebenen Plattform darzustellen. Die genaue Form des Strings variiert je nach Plattform.
- `platform`
  - : Ein String, der die [Plattform](https://github.com/w3c/manifest/wiki/Platforms) (Ökosystem oder Betriebssystem) darstellt, mit der die verwandte App verknüpft ist. Das kann sein:
    - `"chrome_web_store"`: Eine [Google Chrome Web Store](https://chromewebstore.google.com/)-App.
    - `"play"`: Eine [Google Play Store](https://play.google.com/store/games)-App.
    - `"chromeos_play"`: Eine [ChromeOS Play](https://support.google.com/googleplay/answer/7021273)-App.
    - `"webapp"`: Eine [Progressive Web App](/de/docs/Web/Progressive_web_apps).
    - `"windows"`: Eine [Windows Store](https://apps.microsoft.com/?rtc=1&hl=en-us&gl=us)-App.
    - `"f-droid"`: Eine [F-Droid](https://f-droid.org/)-App.
    - `"amazon"`: Eine [Amazon App Store](https://www.amazon.com/gp/browse.html?node=2350149011)-App.
- `url` {{optional_inline}}
  - : Ein String, der die URL darstellt, die mit der App verknüpft ist. Dies ist normalerweise, wo Sie Informationen darüber lesen und sie installieren können.
- `version` {{optional_inline}}
  - : Ein String, der die Version der verwandten App darstellt.

Die Informationen zur verwandten App müssen zuvor im [`related_applications`](/de/docs/Web/Manifest/related_applications)-Mitglied der Manifestdatei der aufrufenden Web-App angegeben worden sein.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wurde nicht in einem top-level Browser-Kontext aufgerufen.

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

- [Ist Ihre App installiert? getInstalledRelatedApps() sagt es Ihnen!](https://web.dev/articles/get-installed-related-apps)
