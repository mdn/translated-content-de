---
title: Installation von Ihrer PWA auslösen
slug: Web/Progressive_web_apps/How_to/Trigger_install_prompt
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

> [!WARNING]
> Die hier beschriebene Technik hängt vom [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event) Ereignis ab, das nicht standardisiert ist und derzeit nur in Browsern auf Chromium-Basis implementiert wird.

Standardmäßig zeigt der Browser, wenn ein Benutzer Ihre Website besucht und feststellt, dass die Seite [als PWA installierbar ist](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installability), einige integrierte Benutzeroberflächen an — zum Beispiel ein Symbol in der URL-Leiste — um die Seite zu installieren. Wenn der Benutzer auf das Symbol klickt, zeigt der Browser eine Installationsaufforderung an, die mindestens den [Name](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) und das [Icon](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) der App enthält. Wenn der Benutzer zustimmt, die App zu installieren, wird sie installiert.

Sie können jedoch auch Ihre eigene In-App-UI implementieren, um den Benutzer zu fragen, ob er die App installieren möchte, was die Installationsaufforderung auslöst. Die Vorteile davon sind:

- Sie können mehr Kontext über die App bereitstellen und dem Benutzer erklären, warum er sie möglicherweise als PWA installieren möchte.
- Eine In-App-Installations-UI ist wahrscheinlich für Benutzer leichter zu entdecken und zu verstehen als die standardmäßige UI des Browsers.

## Hinzufügen einer In-App-Installations-UI

Fügen Sie zunächst der App eine Benutzeroberfläche hinzu, die anzeigt, dass der Benutzer sie installieren kann. Beispiel:

```html
<button id="install" hidden>Install</button>
```

Wir setzen das [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden) Attribut des Buttons, da wir nicht möchten, dass die Installations-UI sichtbar ist, wenn der Benutzer die App mit einem Browser besucht, der sie nicht installieren kann. Als nächstes erfahren Sie, wie der Button nur in Browsern sichtbar gemacht werden kann, die die Installation von PWAs lokal unterstützen.

## Vorbereitungen für `beforeinstallprompt`

Sobald der Browser ermittelt hat, dass er die App installieren kann, löst er das [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event) Ereignis im globalen [`Window`](/de/docs/Web/API/Window) Geltungsbereich aus.

In unserem Haupt-App-Code werden wir auf dieses Ereignis hören:

```js
// main.js

let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
});
```

Der Ereignishandler tut hier drei Dinge:

- Er ruft [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das Ereignis auf. Dies hindert den Browser daran, seine eigene Installations-UI anzuzeigen.
- Er nimmt eine Referenz auf das Ereignisobjekt, das an den Handler übergeben wird. Dies ist eine Instanz von [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent) und ermöglicht es uns, den Benutzer zur Installation der App aufzufordern.
- Er zeigt unsere In-App-Installations-UI an, indem das `hidden` Attribut des Buttons entfernt wird.

## Installationsaufforderung auslösen

Als nächstes müssen wir einen Klick-Handler zu unserem In-App-Installationsbutton hinzufügen:

```js
// main.js

installButton.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  console.log(`Install prompt was: ${result.outcome}`);
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  installPrompt = null;
  installButton.setAttribute("hidden", "");
}
```

Die `installPrompt` Variable wurde mit dem `BeforeInstallPromptEvent` Objekt in unserem `beforeinstallprompt` Ereignishandler initialisiert. Wenn `installPrompt` aus irgendeinem Grund nicht initialisiert wurde, tun wir nichts.

Andernfalls rufen wir die [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) Methode auf. Dies zeigt die Installationsaufforderung an und gibt ein {{jsxref("Promise")}} zurück, das sich mit einem Objekt löst, das angibt, ob die App installiert wurde oder nicht. Insbesondere ist die `outcome` Eigenschaft `"accepted"`, wenn der Benutzer die Installation der App ausgewählt hat, oder `"dismissed"`, wenn er die Aufforderung abgelehnt hat.

So oder so müssen wir unseren Zustand nach dem Aufruf von `prompt()` zurücksetzen, da wir es nur einmal für jede `BeforeInstallPromptEvent` Instanz aufrufen können. Daher setzen wir unsere `installPrompt` Variable zurück und verstecken den Installationsbutton erneut.

## Reaktion auf die Installation der App

Abhängig vom Browser und der Plattform kann der Browser weiterhin seine eigene Benutzeroberfläche zur Installation der App anbieten. Das bedeutet, dass die App möglicherweise ohne unsere In-App-Installations-UI installiert wird. Wenn dies geschieht, möchten wir die In-App-Installations-UI deaktivieren, oder wir zeigen sie in einer App an, die bereits installiert wurde.

Um dies zu erreichen, können wir das [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event) Ereignis anhören, das im globalen [`Window`](/de/docs/Web/API/Window) Geltungsbereich ausgelöst wird, wenn die App installiert wurde:

```js
// main.js

window.addEventListener("appinstalled", () => {
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  installPrompt = null;
  installButton.setAttribute("hidden", "");
}
```

## Reaktion auf die Installation plattform-spezifischer Apps

Ein Fall, der von den obigen Beispielen nicht abgedeckt wird, ist, wenn Sie eine plattform-spezifische Version der App zusätzlich zu einer Web-App haben und das Erlebnis der Web-App personalisieren möchten, je nachdem, ob die plattform-spezifische App bereits installiert ist. Möglicherweise möchten Sie Benutzer nicht einladen, die PWA zu installieren, wenn sie bereits die plattform-spezifische App installiert haben, und/oder Sie möchten sie möglicherweise einladen, zur plattform-spezifischen App zu wechseln, um Inhalte anzusehen.

Dies kann mit der [`Navigator.getInstalledRelatedApps()`](/de/docs/Web/API/Navigator/getInstalledRelatedApps) Methode gehandhabt werden, die es Ihnen ermöglicht, installierte verwandte plattform-spezifische Apps (oder PWAs) zu erkennen und entsprechend zu reagieren.

Zum Beispiel:

```js
const relatedApps = await navigator.getInstalledRelatedApps();

// Search for a specific installed platform-specific app
const psApp = relatedApps.find((app) => app.id === "com.example.myapp");

if (psApp) {
  // Update UI as appropriate
}
```

Diese Methode könnte auch mit `beforeinstallprompt` kombiniert werden, um die Installations-UI des Browsers basierend auf der Verfügbarkeit einer plattform-spezifischen App zu unterdrücken:

```js
window.addEventListener("beforeinstallprompt", async (event) => {
  const relatedApps = await navigator.getInstalledRelatedApps();

  // Search for a specific installed platform-specific app
  const psApp = relatedApps.find((app) => app.id === "com.example.myapp");

  if (psApp) {
    event.preventDefault();
    // Update UI as appropriate
  }
});
```

## Siehe auch

- [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event) Ereignis
- [Anleitung zur Bereitstellung eines eigenen In-App-Installationserlebnisses](https://web.dev/articles/customize-install) auf web.dev (2021)
