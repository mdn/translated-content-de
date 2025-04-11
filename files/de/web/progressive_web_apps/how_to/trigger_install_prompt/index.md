---
title: Installation von Ihrer PWA auslösen
slug: Web/Progressive_web_apps/How_to/Trigger_install_prompt
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{PWASidebar}}

> [!WARNING]
> Die hier beschriebene Technik hängt vom [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event) Ereignis ab, das nicht standardisiert ist und derzeit nur in auf Chromium basierenden Browsern implementiert ist.

Standardmäßig zeigt der Browser, wenn der Benutzer Ihre Website besucht und der Browser feststellt, dass die Seite [als PWA installierbar](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installability) ist, eine integrierte Benutzeroberfläche an — zum Beispiel ein Symbol in der URL-Leiste — um die Seite zu installieren. Wenn der Benutzer auf das Symbol klickt, zeigt der Browser eine Installationsaufforderung an, die mindestens den [Namen](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) und das [Symbol](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) der App enthält. Wenn der Benutzer der Installation der App zustimmt, wird sie installiert.

Sie können jedoch Ihre eigene In-App-Benutzeroberfläche implementieren, um den Benutzer zu fragen, ob er die App installieren möchte, was die Installationsaufforderung auslösen wird. Die Vorteile davon sind:

- Sie können mehr Kontext über die App bereitstellen und dem Benutzer erklären, warum er sie als PWA installieren sollte.
- Eine In-App-Installations-Benutzeroberfläche ist für Benutzer wahrscheinlich leichter zu entdecken und zu verstehen als die Standard-Benutzeroberfläche des Browsers.

## Hinzufügen einer In-App-Installations-Benutzeroberfläche

Fügen Sie zuerst der App eine Benutzeroberfläche hinzu, die anzeigt, dass der Benutzer sie installieren kann. Zum Beispiel:

```html
<button id="install" hidden>Install</button>
```

Wir setzen das [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden) Attribut des Buttons, weil wir nicht möchten, dass die Installations-Benutzeroberfläche sichtbar ist, wenn der Benutzer die App mit einem Browser besucht, der sie nicht installieren kann. Als Nächstes wird gezeigt, wie der Button nur in Browsern sichtbar gemacht wird, die die lokale Installation von PWAs unterstützen.

## Abhören des beforeinstallprompt-Ereignisses

Sobald der Browser festgestellt hat, dass er die App installieren kann, löst er das [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event) Ereignis im globalen [`Window`](/de/docs/Web/API/Window) Kontext aus.

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

Der Ereignishandler hier tut drei Dinge:

- Er ruft [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) am Ereignis auf. Dies verhindert, dass der Browser seine eigene Installations-Benutzeroberfläche anzeigt.
- Er nimmt eine Referenz auf das Ereignisobjekt, das in den Handler übergeben wird. Dies ist eine Instanz von [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent) und ermöglicht es uns, den Benutzer aufzufordern, die App zu installieren.
- Er zeigt unsere In-App-Installations-Benutzeroberfläche an, indem er das `hidden` Attribut vom Button entfernt.

## Auslösen der Installationsaufforderung

Als Nächstes müssen wir einen Klick-Handler zu unserem In-App-Installationsbutton hinzufügen:

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

Die Variable `installPrompt` wurde im `beforeinstallprompt` Ereignishandler mit dem `BeforeInstallPromptEvent` Objekt initialisiert. Wenn `installPrompt` aus irgendeinem Grund nicht initialisiert wurde, tun wir nichts.

Andernfalls rufen wir seine [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) Methode auf. Dies zeigt die Installationsaufforderung an und gibt ein {{jsxref("Promise")}} zurück, das sich mit einem Objekt auflöst, das angibt, ob die App installiert wurde oder nicht. Insbesondere ist seine `outcome` Eigenschaft `"accepted"`, wenn der Benutzer sich entschieden hat, die App zu installieren, oder `"dismissed"`, wenn er die Aufforderung abgelehnt hat.

In jedem Fall müssen wir unseren Zustand nach dem Aufruf von `prompt()` zurücksetzen, da wir es nur einmal für jede Instanz von `BeforeInstallPromptEvent` aufrufen können. Daher setzen wir unsere `installPrompt` Variable zurück und verstecken den Installationsbutton erneut.

## Reagieren auf die App-Installation

Je nach Browser und Plattform kann der Browser weiterhin seine eigene Benutzeroberfläche anbieten, um die App zu installieren. Das bedeutet, dass die App möglicherweise installiert wird, ohne dass unsere In-App-Installations-Benutzeroberfläche durchlaufen wird. Wenn dies geschieht, möchten wir die In-App-Installations-Benutzeroberfläche deaktivieren, oder wir zeigen sie in einer App an, die bereits installiert ist.

Dazu können wir auf das [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event) Ereignis hören, das im globalen [`Window`](/de/docs/Web/API/Window) Kontext ausgelöst wird, wenn die App installiert wurde:

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

## Reaktion auf plattformspezifische Apps, die installiert werden

Ein Fall, der durch die obigen Beispiele nicht abgedeckt wird, ist, wenn Sie eine plattformspezifische Version der App sowie eine Web-App haben und die Web-App-Erfahrung anpassen möchten, abhängig davon, ob die plattformspezifische App bereits installiert ist. Sie möchten Benutzer möglicherweise nicht dazu einladen, die PWA zu installieren, wenn sie die plattformspezifische App bereits installiert haben, und/oder Sie möchten sie dazu einladen, sich an die plattformspezifische App zu wenden, um Inhalte anzusehen.

Dies kann mit der Methode [`Navigator.getInstalledRelatedApps()`](/de/docs/Web/API/Navigator/getInstalledRelatedApps) bewältigt werden, die es Ihnen ermöglicht, installierte verwandte plattformspezifische Apps (oder PWAs) zu erkennen und entsprechend zu reagieren.

Zum Beispiel:

```js
const relatedApps = await navigator.getInstalledRelatedApps();

// Search for a specific installed platform-specific app
const psApp = relatedApps.find((app) => app.id === "com.example.myapp");

if (psApp) {
  // Update UI as appropriate
}
```

Diese Methode könnte auch mit `beforeinstallprompt` kombiniert werden, um die Installations-Benutzeroberfläche des Browsers basierend auf der Verfügbarkeit einer plattformspezifischen App zu unterdrücken:

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
- [How to provide your own in-app install experience](https://web.dev/articles/customize-install) auf web.dev (2021)
