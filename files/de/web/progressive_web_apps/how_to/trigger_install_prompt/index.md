---
title: Installation von Ihrer PWA auslösen
slug: Web/Progressive_web_apps/How_to/Trigger_install_prompt
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{PWASidebar}}

> [!WARNING]
> Die hier beschriebene Technik hängt vom [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)-Ereignis ab, das nicht standardisiert ist und derzeit nur in Chromium-basierten Browsern implementiert ist.

Standardmäßig zeigt der Browser, wenn ein Nutzer Ihre Website besucht und der Browser feststellt, dass die Site [als PWA installierbar ist](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installability), eine eingebaute Benutzeroberfläche an - beispielsweise ein Symbol in der URL-Leiste - um die Site zu installieren. Wenn der Nutzer auf das Symbol klickt, zeigt der Browser eine Installationsaufforderung an, die mindestens den [Namen](/de/docs/Web/Manifest/name) und das [Symbol](/de/docs/Web/Manifest/icons) der App enthält. Wenn der Nutzer zustimmt, die App zu installieren, wird sie installiert.

Sie können jedoch Ihre eigene In-App-Benutzeroberfläche implementieren, um den Nutzer zu fragen, ob er die App installieren möchte, wodurch die Installationsaufforderung ausgelöst wird. Die Vorteile dessen sind:

- Sie können den Nutzern mehr Kontext über die App bieten und erklären, warum sie diese als PWA installieren sollten.
- Eine In-App-Installationsoberfläche ist wahrscheinlich leichter von den Nutzern zu entdecken und zu verstehen als die Standardbenutzeroberfläche des Browsers.

## Hinzufügen einer In-App-Installationsoberfläche

Fügen Sie zuerst der App eine Benutzeroberfläche hinzu, die anzeigt, dass der Nutzer diese installieren kann. Zum Beispiel:

```html
<button id="install" hidden>Install</button>
```

Wir setzen das [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)-Attribut des Buttons, weil wir nicht möchten, dass die Installationsoberfläche sichtbar ist, wenn der Nutzer die App mit einem Browser besucht, der sie nicht installieren kann. Als Nächstes sehen wir, wie man den Button nur auf Browsern sichtbar macht, die die lokale Installation von PWAs unterstützen.

## Abhören von beforeinstallprompt

Sobald der Browser festgestellt hat, dass er die App installieren kann, löst er das [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)-Ereignis im globalen [`Window`](/de/docs/Web/API/Window)-Scope aus.

In unserem Haupt-App-Code werden wir auf dieses Ereignis lauschen:

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

Der Ereignishandler hier tut drei Dinge:

- Er ruft [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das Ereignis auf. Dies verhindert, dass der Browser seine eigene Installationsoberfläche anzeigt.
- Er nimmt eine Referenz auf das Ereignisobjekt, das an den Handler übergeben wird. Dies ist eine Instanz von [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent) und ermöglicht es uns, den Nutzer zur Installation der App aufzufordern.
- Er zeigt unsere In-App-Installationsoberfläche an, indem er das `hidden`-Attribut des Buttons entfernt.

## Auslösen der Installationsaufforderung

Als Nächstes müssen wir einen Klick-Handler zu unserem In-App-Installations-Button hinzufügen:

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

Die Variable `installPrompt` wurde im `beforeinstallprompt`-Ereignishandler mit dem `BeforeInstallPromptEvent`-Objekt initialisiert. Wenn `installPrompt` aus irgendeinem Grund nicht initialisiert wurde, tun wir nichts.

Andernfalls rufen wir die Methode [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) auf. Diese zeigt die Installationsaufforderung an und gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, welches angibt, ob die App installiert wurde oder nicht. Insbesondere ist das `outcome`-Eigenschaft `"accepted"`, wenn der Nutzer die App installieren wollte, oder `"dismissed"`, wenn er die Aufforderung abgelehnt hat.

In jedem Fall müssen wir unseren Zustand nach dem Aufrufen von `prompt()` zurücksetzen, da wir es nur einmal für jede `BeforeInstallPromptEvent`-Instanz aufrufen können. Also setzen wir unsere `installPrompt`-Variable zurück und blenden den Installationsbutton erneut aus.

## Reagieren auf App-Installation

Je nach Browser und Plattform kann der Browser weiterhin seine eigene Benutzeroberfläche zur Installation der App anbieten. Das bedeutet, dass die App möglicherweise ohne Durchlaufen unserer In-App-Installationsoberfläche installiert wird. Wenn dies passiert, möchten wir verhindern, dass die In-App-Installationsoberfläche angezeigt wird, oder wir zeigen sie in einer bereits installierten App an.

Um dies zu tun, können wir das [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event)-Ereignis abhören, das im globalen [`Window`](/de/docs/Web/API/Window)-Scope ausgelöst wird, wenn die App installiert wurde:

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

## Reagieren auf plattform-spezifische installierte Apps

Ein Fall, der in den obigen Beispielen nicht abgedeckt ist, ist, wenn Sie sowohl eine plattform-spezifische Version der App als auch eine Web-App haben und das Erlebnis der Web-App personalisieren möchten, je nachdem, ob die plattform-spezifische App bereits installiert ist. Möglicherweise möchten Sie Nutzer nicht einladen, die PWA zu installieren, wenn sie bereits die plattform-spezifische App installiert haben, und/oder Sie möchten sie möglicherweise einladen, die plattform-spezifische App zu öffnen, um Inhalte anzusehen.

Dies kann mit der Methode [`Navigator.getInstalledRelatedApps()`](/de/docs/Web/API/Navigator/getInstalledRelatedApps) gehandhabt werden, die es Ihnen ermöglicht, installierte verwandte plattform-spezifische Apps (oder PWAs) zu erkennen und angemessen zu reagieren.

Zum Beispiel:

```js
const relatedApps = await navigator.getInstalledRelatedApps();

// Search for a specific installed platform-specific app
const psApp = relatedApps.find((app) => app.id === "com.example.myapp");

if (psApp) {
  // Update UI as appropriate
}
```

Diese Methode könnte auch mit `beforeinstallprompt` kombiniert werden, um die Installations-Benutzeroberfläche des Browsers basierend auf der Verfügbarkeit einer plattform-spezifischen App zu unterdrücken:

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
- [Wie Sie Ihre eigene In-App-Installationserfahrung bieten](https://web.dev/articles/customize-install) auf web.dev (2021)
