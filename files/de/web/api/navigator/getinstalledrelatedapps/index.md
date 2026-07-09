---
title: "Navigator: getInstalledRelatedApps() Methode"
short-title: getInstalledRelatedApps()
slug: Web/API/Navigator/getInstalledRelatedApps
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getInstalledRelatedApps()`** Methode gibt ein Versprechen zurück, das mit einem Array von Objekten aufgelöst wird, die jede installierte plattformbezogene App oder [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) darstellen, die der Benutzer installiert hat. Diese Methode kann zur Personalisierung von Inhalten verwendet werden, wie zum Beispiel das Entfernen von "Installieren Sie unsere App"-Bannern aus der Web-App, wenn die plattformbezogene App und/oder PWA bereits installiert ist.

> [!NOTE]
> Diese Methode muss in einem obersten [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) aufgerufen werden, das heißt, sie darf nicht in einem {{htmlelement("iframe")}} eingebettet sein.

## Beschreibung

`getInstalledRelatedApps()` kann verwendet werden, um die Installation von Universal Windows Platform (UWP) Apps, Android Apps und PWAs zu überprüfen, die mit der Web-App, die diese Methode aufruft, in Zusammenhang stehen.

Um die aufrufende Web-App mit einer plattformspezifischen App oder PWA zu verknüpfen, müssen zwei Dinge getan werden:

1. Die aufrufende Web-App muss im Mitglied [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications) ihrer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Manifest) angegeben sein.
2. Die plattformspezifische App oder PWA muss ihre Beziehung zur aufrufenden App definiert haben.

Die Definition der Beziehung erfolgt je nach App-Typ auf unterschiedliche Weise:

- Eine Android-App tut dies über das [Digital Asset Links System](https://developers.google.com/digital-asset-links/v1/getting-started).
- Eine Windows UWP-App tut dies über [URI-Handler](https://learn.microsoft.com/en-us/windows/apps/develop/launch/web-to-app-linking).
- Eine PWA tut dies über:
  - Einen selbsterklärenden Eintrag in ihrem eigenen `related_applications` Manifestmitglied, der die Eigenschaften `platform` und `id` spezifiziert, im Fall einer PWA, die im gleichen Umfang überprüft, ob sie auf der zugrunde liegenden Plattform installiert ist.
  - Eine `assetlinks.json` Datei in ihrem [`/.well-known/`](https://datatracker.ietf.org/doc/html/rfc5785) Verzeichnis, im Fall einer App außerhalb des PWA-Scopes, um zu überprüfen, ob sie auf Android installiert ist.

Weitere Details zur Handhabung dieser Fälle finden Sie unter [Ist Ihre App installiert? getInstalledRelatedApps() wird es Ihnen sagen!](https://developer.chrome.com/docs/capabilities/get-installed-related-apps).

> [!NOTE]
> Die meisten unterstützenden Browser bieten ihre eigene Installationsbenutzeroberfläche an, wenn eine installierbare PWA erkannt wird, die nicht angezeigt wird, wenn sie bereits installiert ist — siehe [PWAs installierbar machen > Installation aus dem Web](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installation_from_the_web). Dies kann mit dem [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event) Ereignis unterdrückt werden, das auch mit `getInstalledRelatedApps()` kombiniert werden könnte, um es zu unterdrücken, basierend darauf, dass eine plattformspezifische App verfügbar ist. Weitere nützliche Informationen finden Sie unter [Installation von Ihrer PWA auslösen](/de/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt#responding_to_platform-specific_apps_being_installed).

## Syntax

```js-nolint
getInstalledRelatedApps()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von Objekten aufgelöst wird, die jede installierte verwandte App darstellen. Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `id` {{optional_inline}}
  - : Ein String, der die ID darstellt, die zur Repräsentation der Anwendung auf der angegebenen Plattform verwendet wird. Die genaue Form des String variiert je nach Plattform.
- `platform`
  - : Ein String, der die [Plattform](https://github.com/w3c/manifest/wiki/Platforms) (Ökosystem oder Betriebssystem) darstellt, mit der die verwandte App verbunden ist. Dies kann sein:
    - `"chrome_web_store"`: Eine [Google Chrome Web Store](https://chromewebstore.google.com/) App.
    - `"play"`: Eine [Google Play Store](https://play.google.com/store/games) App.
    - `"chromeos_play"`: Eine [ChromeOS Play](https://support.google.com/googleplay/answer/7021273) App.
    - `"webapp"`: Eine [Progressive Web App](/de/docs/Web/Progressive_web_apps).
    - `"windows"`: Eine [Windows Store](https://apps.microsoft.com/?rtc=1&hl=en-US&gl=US) App.
    - `"f-droid"`: Eine [F-Droid](https://f-droid.org/) App.
    - `"amazon"`: Eine [Amazon App Store](https://www.amazon.com/gp/browse.html?node=2350149011) App.
- `url` {{optional_inline}}
  - : Ein String, der die URL repräsentiert, die mit der App verknüpft ist. Dies ist in der Regel der Ort, an dem Sie Informationen darüber lesen und sie installieren können.
- `version` {{optional_inline}}
  - : Ein String, der die Version der verwandten App repräsentiert.

Die Informationen zur verwandten App müssen zuvor im [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications) Mitglied der Manifest-Datei der aufrufenden Web-App spezifiziert worden sein.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wurde nicht in einem obersten Browsing-Kontext aufgerufen.

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
> In diesem Beispiel ist `doesVersionSendPushMessages()` eine theoretisch vom Entwickler definierte Funktion; sie wird nicht vom Browser bereitgestellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ist Ihre App installiert? getInstalledRelatedApps() wird es Ihnen sagen!](https://developer.chrome.com/docs/capabilities/get-installed-related-apps)
