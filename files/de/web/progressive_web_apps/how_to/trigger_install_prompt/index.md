---
title: Installation von Ihrer PWA auslösen
slug: Web/Progressive_web_apps/How_to/Trigger_install_prompt
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{PWASidebar}}

> [!WARNING]
> Die hier beschriebene Technik hängt vom [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event) Event ab, das nicht standardisiert und derzeit nur in Chromium-basierten Browsern implementiert ist.

Standardmäßig zeigt der Browser, wenn ein Benutzer Ihre Website besucht und der Browser feststellt, dass die Website [als PWA installierbar ist](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installability), eine eingebaute Benutzeroberfläche an, z. B. ein Symbol in der URL-Leiste, um die Website zu installieren. Wenn der Benutzer auf das Symbol klickt, zeigt der Browser ein Installationsfenster an, das mindestens den [Namen](/de/docs/Web/Manifest/name) und das [Icon](/de/docs/Web/Manifest/icons) der App enthält. Wenn der Benutzer zustimmt, die App zu installieren, wird diese installiert.

Sie können jedoch auch eine eigene Benutzeroberfläche in der App implementieren, um den Benutzer zu fragen, ob er die App installieren möchte, wodurch das Installationsfenster ausgelöst wird. Die Vorteile sind:

- Sie können mehr Kontext über die App liefern und dem Benutzer erklären, warum er sie als PWA installieren sollte.
- Eine in-App-Installationsoberfläche ist für Benutzer wahrscheinlich einfacher zu entdecken und zu verstehen als die standardmäßige Benutzeroberfläche des Browsers.

## Hinzufügen einer in-App-Installationsoberfläche

Fügen Sie zuerst der App eine Benutzeroberfläche hinzu, die darauf hinweist, dass der Benutzer sie installieren kann. Zum Beispiel:

```html
<button id="install" hidden>Install</button>
```

Wir setzen das [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden) Attribut des Buttons, denn wenn der Benutzer die App mit einem Browser besucht, der sie nicht installieren kann, soll die Installationsoberfläche nicht sichtbar sein. Als nächstes sehen wir, wie der Button nur in Browsern sichtbar gemacht wird, die die Installation von PWAs lokal unterstützen.

## Auf das beforeinstallprompt-Ereignis hören

Sobald der Browser festgestellt hat, dass er die App installieren kann, wird im globalen [`Window`](/de/docs/Web/API/Window) Bereich das [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event) Event ausgelöst.

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

- Ruft [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das Ereignis auf. Dies verhindert, dass der Browser seine eigene Installationsoberfläche anzeigt.
- Nimmt eine Referenz auf das Ereignisobjekt, das in den Handler übergeben wird. Dies ist eine Instanz von [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent) und ermöglicht es uns, den Benutzer zur Installation der App aufzufordern.
- Zeigt unsere in-App-Installationsoberfläche an, indem das `hidden` Attribut des Buttons entfernt wird.

## Das Installationsfenster auslösen

Als nächstes müssen wir einen Klick-Handler für unseren in-App-Installationsbutton hinzufügen:

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

Andernfalls rufen wir seine [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) Methode auf. Dies zeigt das Installationsfenster an und gibt ein {{jsxref("Promise")}} zurück, welches mit einem Objekt aufgelöst wird, das angibt, ob die App installiert wurde oder nicht. Insbesondere ist seine `outcome` Eigenschaft `"accepted"` wenn der Benutzer sich entschieden hat, die App zu installieren, oder `"dismissed"` wenn er das Fenster abgelehnt hat.

In jedem Fall müssen wir unseren Status nach dem Aufruf von `prompt()` zurücksetzen, da wir es nur einmal pro `BeforeInstallPromptEvent` Instanz aufrufen können. Daher setzen wir unsere `installPrompt` Variable zurück und verbergen den Installationsbutton erneut.

## Reagieren auf App-Installation

Je nach Browser und Plattform kann der Browser weiterhin seine eigene Oberfläche zur Installation der App anbieten. Das bedeutet, dass die App möglicherweise installiert wird, ohne dass unsere in-App-Installationsoberfläche verwendet wird. Wenn dies geschieht, möchten wir die in-App-Installationsoberfläche deaktivieren, um sie nicht in einer bereits installierten App anzuzeigen.

Dazu können wir das [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event) Ereignis abhören, das im globalen [`Window`](/de/docs/Web/API/Window) Bereich ausgelöst wird, wenn die App installiert wurde:

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

## Reagieren auf plattformspezifische App-Installationen

Ein Fall, der in den obigen Beispielen nicht abgedeckt ist, ist, dass Sie eine plattformspezifische Version der App sowie eine Web-App haben, und Sie die Web-App-Erfahrung personalisieren möchten, abhängig davon, ob die plattformspezifische App bereits installiert ist. Sie möchten den Benutzer möglicherweise nicht einladen, die PWA zu installieren, wenn er bereits die plattformspezifische App installiert hat, und/oder Sie möchten ihn möglicherweise einladen, zur plattformspezifischen App zu wechseln, um Inhalte anzusehen.

Dies kann mit der [`Navigator.getInstalledRelatedApps()`](/de/docs/Web/API/Navigator/getInstalledRelatedApps) Methode gehandhabt werden, die es Ihnen ermöglicht, installierte verwandte plattformspezifische Apps (oder PWAs) zu erkennen und entsprechend zu reagieren.

Zum Beispiel:

```js
const relatedApps = await navigator.getInstalledRelatedApps();

// Search for a specific installed platform-specific app
const psApp = relatedApps.find((app) => app.id === "com.example.myapp");

if (psApp) {
  // Update UI as appropriate
}
```

Diese Methode könnte auch mit `beforeinstallprompt` kombiniert werden, um die Installationsoberfläche des Browsers basierend auf der Verfügbarkeit einer plattformspezifischen App zu unterdrücken:

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

- [Making PWAs installable](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event) Event
- [How to provide your own in-app install experience](https://web.dev/articles/customize-install) auf web.dev (2021)
