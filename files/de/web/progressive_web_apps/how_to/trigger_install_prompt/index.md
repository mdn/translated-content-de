---
title: Installation aus Ihrer PWA heraus auslösen
slug: Web/Progressive_web_apps/How_to/Trigger_install_prompt
l10n:
  sourceCommit: 7e7a9ee50e68a1da8386e08a7279a724cadfeaf9
---

> [!WARNING]
> Die hier beschriebene Technik hängt vom [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)-Ereignis ab, welches nicht standardisiert ist und derzeit nur in Browsern auf Chromium-Basis implementiert wurde.

Standardmäßig, wenn der Benutzer Ihre Website besucht und der Browser feststellt, dass die Site [als PWA installierbar ist](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installability), zeigt der Browser eine integrierte Benutzeroberfläche an – zum Beispiel ein Symbol in der URL-Leiste –, um die Site zu installieren. Wenn der Benutzer auf das Symbol klickt, zeigt der Browser ein Installations-Prompt an, das mindestens den [Name](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) und das [Symbol](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) der App enthält. Wenn der Benutzer zustimmt, die App zu installieren, wird sie installiert.

Sie können jedoch Ihre eigene In-App-Benutzeroberfläche implementieren, um den Benutzer zu fragen, ob er die App installieren möchte, was das Installations-Prompt auslösen wird. Die Vorteile davon sind:

- Sie können mehr Kontext zur App bieten und dem Benutzer erklären, warum er sie als PWA installieren sollte.
- Eine In-App-Installationsoberfläche ist wahrscheinlich einfacher für Benutzer zu entdecken und zu verstehen als die Standardoberfläche des Browsers.

## Hinzufügen einer In-App-Installationsoberfläche

Fügen Sie zunächst Ihrer App eine Benutzeroberfläche hinzu, die anzeigt, dass der Benutzer sie installieren kann. Zum Beispiel:

```html
<button id="install" hidden>Install</button>
```

Wir setzen das [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)-Attribut des Buttons, weil die Installationsoberfläche nicht sichtbar sein soll, wenn der Benutzer die App mit einem Browser besucht, der sie nicht installieren kann. Als Nächstes sehen wir, wie der Button nur in Browsern sichtbar gemacht wird, die die lokale Installation von PWAs unterstützen.

## Lauschen auf beforeinstallprompt

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

Der Event-Handler führt hier drei Dinge aus:

- Ruft [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Ereignis auf. Dies verhindert, dass der Browser seine eigene Installationsoberfläche anzeigt.
- Nimmt eine Referenz auf das Ereignisobjekt, das an den Handler übergeben wurde. Dies ist eine Instanz von [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent) und ermöglicht es uns, den Benutzer zur Installation der App aufzufordern.
- Zeigt unsere In-App-Installationsoberfläche an, indem das `hidden`-Attribut am Button entfernt wird.

Beachten Sie, dass das Ereignis nicht ausgelöst wird, wenn:

- Die PWA bereits installiert ist.
- Die App nicht die [PWA-Installationskriterien](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installability) erfüllt.
- Die PWA auf dem aktuellen Gerät nicht installierbar ist (zum Beispiel wegen fehlender Berechtigungen).

## Auslösen des Installations-Prompts

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

Die Variable `installPrompt` wurde im `beforeinstallprompt`-Ereignishandler mit dem `BeforeInstallPromptEvent`-Objekt initialisiert. Wenn `installPrompt` aus irgendeinem Grund nicht initialisiert wurde, tun wir nichts.

Andernfalls rufen wir seine [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt)-Methode auf. Diese zeigt das Installations-Prompt an und gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das anzeigt, ob die App installiert wurde oder nicht. Insbesondere ist die Eigenschaft `outcome` `"accepted"`, wenn der Benutzer sich für die Installation der App entschieden hat, oder `"dismissed"`, wenn er das Prompt abgelehnt hat.

In jedem Fall müssen wir unseren Zustand nach dem Aufruf von `prompt()` zurücksetzen, da wir es nur einmal für jedes `BeforeInstallPromptEvent`-Exemplar aufrufen können. Daher setzen wir unsere `installPrompt`-Variable zurück und blenden den Installationsbutton wieder aus.

## Reagieren auf die App-Installation

Je nach Browser und Plattform kann der Browser weiterhin seine eigene Benutzeroberfläche zur Installation der App anbieten. Das bedeutet, dass die App möglicherweise installiert wird, ohne dass unsere In-App-Installationsoberfläche verwendet wird. Wenn dies geschieht, möchten wir die In-App-Installationsoberfläche deaktivieren, da wir sie sonst in einer bereits installierten App anzeigen werden.

Dazu können wir auf das [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event)-Ereignis lauschen, das im globalen [`Window`](/de/docs/Web/API/Window)-Scope ausgelöst wird, wenn die App installiert wurde:

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

## Reagieren auf installierte plattform-spezifische Apps

Wenn Sie sowohl eine plattform-spezifische Version der App als auch eine Web-App haben und Sie die Benutzererfahrung der Web-App personalisieren möchten, abhängig davon, ob die plattform-spezifische App bereits installiert ist. Möglicherweise möchten Sie die Benutzer nicht einladen, die PWA zu installieren, wenn sie bereits die plattform-spezifische App installiert haben, und/oder Sie möchten sie vielleicht einladen, zur plattform-spezifischen App zu wechseln, um Inhalte dort anzusehen.

Dies kann mit der Methode [`Navigator.getInstalledRelatedApps()`](/de/docs/Web/API/Navigator/getInstalledRelatedApps) gehandhabt werden, die es ermöglicht, installierte verwandte plattform-spezifische Apps (oder PWAs) zu erkennen und entsprechend zu reagieren.

Beispielsweise:

```js
const relatedApps = await navigator.getInstalledRelatedApps();

// Search for a specific installed platform-specific app
const psApp = relatedApps.find((app) => app.id === "com.example.myapp");

if (psApp) {
  // Update UI as appropriate
}
```

Diese Methode könnte auch mit `beforeinstallprompt` kombiniert werden, um die Installationsoberfläche des Browsers basierend auf der Verfügbarkeit einer plattform-spezifischen App zu unterdrücken:

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

- [PWA installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)-Ereignis
- [Wie Sie ein eigenes In-App-Installationserlebnis anbieten](https://web.dev/articles/customize-install) auf web.dev (2021)
- [Installationsaufforderung](https://web.dev/learn/pwa/installation-prompt) auf web.dev (2022)
