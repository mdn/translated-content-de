---
title: "Navigator: getInstalledRelatedApps() Methode"
short-title: getInstalledRelatedApps()
slug: Web/API/Navigator/getInstalledRelatedApps
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getInstalledRelatedApps()`** Methode gibt ein Promise zurück, das mit einem Array von Objekten aufgelöst wird, die alle plattformspezifischen verwandten Apps oder [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) darstellen, die der Benutzer installiert hat. Dies könnte für die Personalisierung von Inhalten genutzt werden, wie zum Beispiel das Entfernen von "Installieren Sie unsere App"-Bannern aus der Web-App, wenn die plattformspezifische App und/oder PWA bereits installiert ist.

> [!NOTE]
> Diese Methode muss in einem Top-Level [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) aufgerufen werden, das heißt, nicht eingebettet in ein {{htmlelement("iframe")}}.

## Beschreibung

`getInstalledRelatedApps()` kann verwendet werden, um die Installation von Universal Windows Platform (UWP) Apps, Android-Apps und PWAs zu überprüfen, die mit der Web-App verwandt sind, die diese Methode aufruft.

Um die aufrufende Web-App mit einer plattformspezifischen App oder PWA zu verknüpfen, müssen zwei Dinge getan werden:

1. Die aufrufende Web-App muss im [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications) Mitglied ihrer [Manifest-Datei](/de/docs/Web/Progressive_web_apps/Manifest) angegeben werden.
2. Die plattformspezifische App oder PWA muss ihre Beziehung zur aufrufenden App definiert haben.

Die Definition der Beziehung erfolgt unterschiedlich, je nach Art der App:

- Eine Android-App macht dies über das [Digital Asset Links System](https://developers.google.com/digital-asset-links/v1/getting-started).
- Eine Windows UWP App macht dies über [URI-Handler](https://learn.microsoft.com/en-us/windows/apps/develop/launch/web-to-app-linking).
- Eine PWA macht dies über:
  - Einen selbsterklärenden Eintrag innerhalb ihres eigenen `related_applications`-Manifest-Mitglieds, wobei die Eigenschaften `platform` und `id` spezifiziert werden, im Fall einer PWA, die im gleichen Bereich prüft, ob sie auf der zugrunde liegenden Plattform installiert ist.
  - Eine `assetlinks.json`-Datei in ihrem [`/.well-known/`](https://datatracker.ietf.org/doc/html/rfc5785) Verzeichnis im Fall einer App außerhalb des Bereichs der PWA, die prüft, ob sie auf Android installiert ist.

Siehe [Ist Ihre App installiert? getInstalledRelatedApps() sagt es Ihnen!](https://developer.chrome.com/docs/capabilities/get-installed-related-apps) für weitere Details, wie man jeden dieser Fälle handhaben kann.

> [!NOTE]
> Die meisten unterstützenden Browser bieten ihre eigene Installationsoberfläche, wenn eine installierbare PWA erkannt wird, die nicht angezeigt wird, wenn sie bereits installiert ist — siehe [PWAs installierbar machen > Installation aus dem Web](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installation_from_the_web). Dies kann unterdrückt werden, indem das [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event) Ereignis verwendet wird, das auch mit `getInstalledRelatedApps()` kombiniert werden könnte, um es basierend auf der Verfügbarkeit einer plattformspezifischen App zu unterdrücken. Siehe [Installation von Ihrer PWA auslösen](/de/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt#responding_to_platform-specific_apps_being_installed) für weitere nützliche Informationen.

## Syntax

```js-nolint
getInstalledRelatedApps()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von Objekten aufgelöst wird, die alle installierten verwandten Apps darstellen. Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `id` {{optional_inline}}
  - : Ein String, der die ID darstellt, die verwendet wird, um die Anwendung auf der angegebenen Plattform darzustellen. Die genaue Form des Strings variiert je nach Plattform.
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
  - : Ein String, der die URL darstellt, die mit der App verbunden ist. Dies ist in der Regel der Ort, an dem Sie Informationen darüber lesen und sie installieren können.
- `version` {{optional_inline}}
  - : Ein String, der die Version der verwandten App darstellt.

Die Informationen zur verwandten App müssen zuvor im [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications) Mitglied der aufrufenden Web-App [Manifest-Datei](/de/docs/Web/Progressive_web_apps/Manifest) angegeben worden sein.

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

- [Ist Ihre App installiert? getInstalledRelatedApps() sagt es Ihnen!](https://developer.chrome.com/docs/capabilities/get-installed-related-apps)
