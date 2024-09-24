---
title: "Navigator: getInstalledRelatedApps() Methode"
short-title: getInstalledRelatedApps()
slug: Web/API/Navigator/getInstalledRelatedApps
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`getInstalledRelatedApps()`** gibt ein Promise zurück, das mit einem Array von Objekten aufgelöst wird, die jede installierte plattformspezifische App oder [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) repräsentieren, die der Benutzer installiert hat. Dies kann zur Personalisierung von Inhalten genutzt werden, z.B. um "Installieren Sie unsere App"-Banner aus der Web-App zu entfernen, wenn die plattformspezifische App und/oder PWA bereits installiert ist.

> [!NOTE]
> Diese Methode muss in einem top-level [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden, das heißt, nicht eingebettet in ein {{htmlelement("iframe")}}.

## Beschreibung

`getInstalledRelatedApps()` kann verwendet werden, um die Installation von Universal Windows Platform (UWP) Apps, Android-Apps und PWAs zu überprüfen, die mit der aufrufenden Web-App in Beziehung stehen.

Um die aufrufende Web-App mit einer plattformspezifischen App oder PWA zu verknüpfen, müssen zwei Dinge getan werden:

1. Die aufrufende Web-App muss im [`related_applications`](/de/docs/Web/Manifest/related_applications) Mitglied ihrer [Manifestdatei](/de/docs/Web/Manifest) spezifiziert sein.
2. Die plattformspezifische App oder PWA muss ihre Beziehung zur aufrufenden App definiert haben.

Die Definition der Beziehung erfolgt je nach Art der App unterschiedlich:

- Eine Android-App macht dies über das [Digital Asset Links System](https://developers.google.com/digital-asset-links/v1/getting-started).
- Eine Windows UWP App macht dies über [URI Handler](https://learn.microsoft.com/en-us/windows/uwp/launch-resume/web-to-app-linking).
- Eine PWA macht dies über:
  - Einen selbstdefinierenden Eintrag innerhalb ihres eigenen `related_applications` Manifestmitglieds im Fall einer PWA, die prüft, ob sie auf der zugrunde liegenden Plattform installiert ist.
  - Eine `assetlinks.json` Datei in ihrem [`/.well-known/`](https://datatracker.ietf.org/doc/html/rfc5785) Verzeichnis im Fall einer App außerhalb des PWA-Bereichs, die prüft, ob sie installiert ist.

Weitere Informationen, wie jede dieser Fälle behandelt wird, finden Sie unter [Ist Ihre App installiert? getInstalledRelatedApps() wird es Ihnen sagen!](https://web.dev/articles/get-installed-related-apps).

> [!NOTE]
> Die meisten unterstützenden Browser bieten ihre eigene Installations-UI, wenn eine installierbare PWA erkannt wird, die nicht erscheint, wenn sie bereits installiert ist — siehe [PWAs installierbar machen > Installation aus dem Web](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installation_from_the_web). Dies kann mit dem {{domxref("Window.beforeinstallprompt_event", "beforeinstallprompt")}} Event unterdrückt werden, das auch mit `getInstalledRelatedApps()` kombiniert werden könnte, um es basierend auf einer verfügbaren plattformspezifischen App zu unterdrücken. Weitere nützliche Informationen finden Sie unter [Installation von Ihrer PWA auslösen](/de/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt#responding_to_platform-specific_apps_being_installed).

## Syntax

```js-nolint
getInstalledRelatedApps()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von Objekten erfüllt wird, welche installierte verwandte Apps repräsentieren. Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `id` {{optional_inline}}
  - : Ein String, der die ID repräsentiert, die verwendet wird, um die Anwendung auf der angegebenen Plattform darzustellen. Die genaue Form des Strings variiert je nach Plattform.
- `platform`
  - : Ein String, der die [Plattform](https://github.com/w3c/manifest/wiki/Platforms) (Ökosystem oder Betriebssystem) repräsentiert, mit der die verwandte App verbunden ist. Dies kann sein:
    - `"chrome_web_store"`: Eine [Google Chrome Web Store](https://chromewebstore.google.com/) App.
    - `"play"`: Eine [Google Play Store](https://play.google.com/store/games) App.
    - `"chromeos_play"`: Eine [ChromeOS Play](https://support.google.com/googleplay/answer/7021273) App.
    - `"webapp"`: Eine [Progressive Web App](/de/docs/Web/Progressive_web_apps).
    - `"windows"`: Eine [Windows Store](https://apps.microsoft.com/?rtc=1&hl=en-us&gl=us) App.
    - `"f-droid"`: Eine [F-Droid](https://f-droid.org/) App.
    - `"amazon"`: Eine [Amazon App Store](https://www.amazon.com/gp/browse.html?node=2350149011) App.
- `url` {{optional_inline}}
  - : Ein String, der die URL repräsentiert, die mit der App verknüpft ist. Diese ist normalerweise der Ort, an dem Sie Informationen dazu lesen und sie installieren können.
- `version` {{optional_inline}}
  - : Ein String, der die Version der verwandten App darstellt.

Die Informationen zur verwandten App müssen zuvor im [`related_applications`](/de/docs/Web/Manifest/related_applications) Mitglied der Manifestdatei der aufrufenden Web-App angegeben worden sein.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Die Methode wurde nicht in einem top-level Browsing-Kontext aufgerufen.

## Beispiele

```js
const relatedApps = await navigator.getInstalledRelatedApps();

// Geben Sie alle zurückgegebenen verwandten Apps in einer Tabelle in der Konsole aus
console.table(relatedApps);

// Suchen Sie nach einer spezifisch installierten plattformspezifischen App
const psApp = relatedApps.find((app) => app.id === "com.example.myapp");

if (psApp && doesVersionSendPushMessages(psApp.version)) {
  // Es gibt eine installierte plattformspezifische App, die das Senden von Push-Nachrichten handhabt
  // Es ist nicht nötig, dies über die Web-App zu handhaben
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

- [Ist Ihre App installiert? getInstalledRelatedApps() wird es Ihnen sagen!](https://web.dev/articles/get-installed-related-apps)
