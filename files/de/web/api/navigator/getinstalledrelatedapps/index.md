---
title: "Navigator: getInstalledRelatedApps()-Methode"
short-title: getInstalledRelatedApps()
slug: Web/API/Navigator/getInstalledRelatedApps
l10n:
  sourceCommit: 17daaae139ecc1663166e40c82ce3889a2df973f
---

{{APIRef}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`getInstalledRelatedApps()`** gibt ein Promise zurück, das mit einem Array von Objekten erfüllt wird. Diese Objekte repräsentieren zugehörige plattformspezifische Apps oder [Progressive Web Apps](/de/docs/Web/Progressive_web_apps), die der Benutzer installiert hat. Dies kann zur Personalisierung von Inhalten verwendet werden, etwa um Banner mit der Aufforderung „Installieren Sie unsere App“ aus der Web-App zu entfernen, wenn die plattformspezifische App und/oder PWA bereits installiert ist.

> [!NOTE]
> Diese Methode muss in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) auf oberster Ebene aufgerufen werden, darf also nicht in ein {{htmlelement("iframe")}} eingebettet sein.

## Syntax

```js-nolint
getInstalledRelatedApps()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von Objekten erfüllt wird, die installierte zugehörige Apps repräsentieren. Jedes Objekt kann die folgenden Eigenschaften enthalten:

- `id` {{optional_inline}}
  - : Ein String, der die ID repräsentiert, mit der die Anwendung auf der angegebenen Plattform identifiziert wird. Das genaue Format des Strings hängt von der Plattform ab.
- `platform`
  - : Ein String, der die [Plattform](https://github.com/w3c/manifest/wiki/Platforms) (Ökosystem oder Betriebssystem) repräsentiert, der die zugehörige App angehört. Mögliche Werte sind:
    - `"chrome_web_store"`: Eine App aus dem [Google Chrome Web Store](https://chromewebstore.google.com/).
    - `"play"`: Eine App aus dem [Google Play Store](https://play.google.com/store/games).
    - `"chromeos_play"`: Eine App aus [ChromeOS Play](https://support.google.com/googleplay/answer/7021273).
    - `"webapp"`: Eine [Progressive Web App](/de/docs/Web/Progressive_web_apps).
    - `"windows"`: Eine App aus dem [Windows Store](https://apps.microsoft.com/?rtc=1&hl=en-US&gl=US).
    - `"f-droid"`: Eine App aus [F-Droid](https://f-droid.org/).
    - `"amazon"`: Eine App aus dem [Amazon App Store](https://www.amazon.com/gp/browse.html?node=2350149011).
- `url` {{optional_inline}}
  - : Ein String, der die mit der App verknüpfte URL repräsentiert. Dort finden Sie normalerweise Informationen über die App und können sie installieren.
- `version` {{optional_inline}}
  - : Ein String, der die Version der zugehörigen App repräsentiert.

Die Informationen zur zugehörigen App müssen zuvor im Manifest-Eintrag [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications) der aufrufenden Web-App angegeben worden sein.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wurde nicht in einem Browsing-Kontext auf oberster Ebene aufgerufen.

## Beschreibung

Mit `getInstalledRelatedApps()` kann geprüft werden, ob Universal-Windows-Platform-Apps (UWP), Android-Apps und PWAs installiert sind, die mit der aufrufenden Web-App in Beziehung stehen.

Um die aufrufende Web-App mit einer plattformspezifischen App oder PWA zu verknüpfen, sind zwei Schritte erforderlich:

1. Die aufrufende Web-App muss im Manifest-Eintrag [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications) ihrer [Manifestdatei](/de/docs/Web/Progressive_web_apps/Manifest) angegeben sein.
2. Die Beziehung der plattformspezifischen App oder PWA zur aufrufenden App muss definiert sein.

Wie diese Beziehung definiert wird, hängt vom App-Typ ab:

- Bei einer Android-App erfolgt dies über das [Digital Asset Links-System](https://developers.google.com/digital-asset-links/v1/getting-started).
- Bei einer Windows-UWP-App erfolgt dies über [URI Handlers](https://learn.microsoft.com/en-us/windows/apps/develop/launch/web-to-app-linking).
- Bei einer PWA erfolgt dies über:
  - Einen Eintrag im eigenen Manifest-Eintrag `related_applications`, der die PWA selbst angibt und die Eigenschaften `platform` und `id` enthält. Dies gilt, wenn eine PWA prüft, ob sie innerhalb desselben Gültigkeitsbereichs auf der zugrunde liegenden Plattform installiert ist.
  - Eine Datei `assetlinks.json` im Verzeichnis [`/.well-known/`](https://datatracker.ietf.org/doc/html/rfc5785). Dies gilt, wenn eine App außerhalb des Gültigkeitsbereichs der PWA prüft, ob diese auf Android installiert ist.

Weitere Einzelheiten zur Handhabung dieser Fälle finden Sie unter [Ist Ihre App installiert? getInstalledRelatedApps() verrät es Ihnen!](https://developer.chrome.com/docs/capabilities/get-installed-related-apps).

> [!NOTE]
> Die meisten Browser, die PWAs unterstützen, zeigen eine eigene Installationsoberfläche an, wenn sie eine installierbare PWA erkennen. Ist die PWA bereits installiert, erscheint diese Oberfläche nicht. Siehe [PWAs installierbar machen > Installation über das Web](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installation_from_the_web). Die Installationsoberfläche kann mithilfe des Ereignisses [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event) unterdrückt werden. Dieses Ereignis kann auch mit `getInstalledRelatedApps()` kombiniert werden, um die Oberfläche zu unterdrücken, wenn eine plattformspezifische App verfügbar ist. Weitere nützliche Informationen finden Sie unter [Installation über Ihre PWA auslösen](/de/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt#responding_to_platform-specific_apps_being_installed).

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
> In diesem Beispiel ist `doesVersionSendPushMessages()` eine hypothetische, von Entwicklern definierte Funktion; sie wird nicht vom Browser bereitgestellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ist Ihre App installiert? getInstalledRelatedApps() verrät es Ihnen!](https://developer.chrome.com/docs/capabilities/get-installed-related-apps)
