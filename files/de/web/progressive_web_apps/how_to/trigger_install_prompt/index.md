---
title: Installation aus Ihrer PWA auslösen
slug: Web/Progressive_web_apps/How_to/Trigger_install_prompt
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{PWASidebar}}

> [!WARNING]
> Die hier beschriebene Technik hängt vom [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)-Ereignis ab, das nicht standardisiert ist und derzeit nur in Chromium-basierten Browsern implementiert ist.

Standardmäßig zeigt der Browser, wenn der Nutzer Ihre Website besucht und der Browser feststellt, dass die Seite [als PWA installierbar](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installability) ist, eine eingebaute Benutzeroberfläche an — beispielsweise ein Symbol in der URL-Leiste — um die Seite zu installieren. Wenn der Nutzer auf das Symbol klickt, zeigt der Browser ein Installationsfenster an, das mindestens den [Namen](/de/docs/Web/Manifest/Reference/name) und das [Symbol](/de/docs/Web/Manifest/Reference/icons) der App enthält. Stimmt der Nutzer der Installation der App zu, wird sie installiert.

Sie können jedoch eine eigene In-App-Benutzeroberfläche implementieren, um den Nutzer zu fragen, ob er die App installieren möchte, was das Installationsfenster auslösen wird. Die Vorteile hiervon sind:

- Sie können mehr Kontext über die App bereitstellen und dem Nutzer erklären, warum er sie als PWA installieren sollte.
- Eine In-App-Installationsoberfläche ist für die Nutzer wahrscheinlich leichter zu entdecken und zu verstehen als die standardmäßige Benutzeroberfläche des Browsers.

## Hinzufügen einer In-App-Installationsoberfläche

Zuerst fügen Sie der App eine Benutzeroberfläche hinzu, die anzeigt, dass der Nutzer sie installieren kann. Zum Beispiel:

```html
<button id="install" hidden>Install</button>
```

Wir setzen das `hidden`-Attribut des Buttons, da die Installationsoberfläche nicht sichtbar sein soll, wenn der Nutzer die App mit einem Browser besucht, der sie nicht installieren kann. Als Nächstes sehen wir, wie wir den Button nur in Browsern sichtbar machen können, die die lokale Installation von PWAs unterstützen.

## Abhören von beforeinstallprompt

Sobald der Browser festgestellt hat, dass er die App installieren kann, löst er das [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)-Ereignis im globalen [`Window`](/de/docs/Web/API/Window)-Bereich aus.

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

Der Ereignis-Handler hier macht drei Dinge:

- Ruft [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Ereignis auf. Dies verhindert, dass der Browser seine eigene Installationsoberfläche anzeigt.
- Nimmt eine Referenz zum Ereignisobjekt, das in den Handler übergeben wurde. Dies ist eine Instanz von [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent) und ermöglicht es uns, den Nutzer zur Installation der App aufzufordern.
- Zeigt unsere In-App-Installationsoberfläche an, indem das `hidden`-Attribut am Button entfernt wird.

## Auslösen des Installationsfensters

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

Die Variable `installPrompt` wurde mit dem `BeforeInstallPromptEvent`-Objekt in unserem `beforeinstallprompt`-Ereignis-Handler initialisiert. Wenn `installPrompt` aus irgendeinem Grund nicht initialisiert wurde, tun wir nichts.

Andernfalls rufen wir die [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt)-Methode auf. Dies zeigt das Installationsfenster an und gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt auflöst, das angibt, ob die App installiert wurde oder nicht. Insbesondere ist die `outcome`-Eigenschaft `"accepted"`, wenn der Nutzer die App zu installieren wählt, oder `"dismissed"`, wenn er das Fenster ablehnt.

In jedem Fall müssen wir unseren Status nach dem Aufrufen von `prompt()` zurücksetzen, da wir es für jede `BeforeInstallPromptEvent`-Instanz nur einmal aufrufen können. Also setzen wir unsere `installPrompt`-Variable zurück und blenden den Installationsbutton erneut aus.

## Reagieren auf die App-Installation

Je nach Browser und Plattform kann der Browser weiterhin seine eigene Benutzeroberfläche zur Installation der App anbieten. Das bedeutet, dass die App möglicherweise ohne unsere In-App-Installationsoberfläche installiert werden kann. Wenn dies geschieht, möchten wir die In-App-Installationsoberfläche deaktivieren, sonst zeigen wir sie in einer bereits installierten App an.

Um dies zu tun, können wir auf das [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event)-Ereignis hören, das im globalen [`Window`](/de/docs/Web/API/Window)-Bereich ausgelöst wird, wenn die App installiert wurde:

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

Ein Fall, der in den obigen Beispielen nicht abgedeckt ist, ist, wenn Sie sowohl eine plattformspezifische Version der App als auch eine Web-App haben und die Web-App-Erfahrung personalisieren möchten, je nachdem, ob die plattformspezifische App bereits installiert ist. Sie möchten Benutzer möglicherweise nicht einladen, die PWA zu installieren, wenn sie bereits die plattformspezifische App installiert haben, und/oder Sie möchten sie möglicherweise einladen, zur plattformspezifischen App zu gehen, um Inhalte anzuzeigen.

Dies kann mit der Methode [`Navigator.getInstalledRelatedApps()`](/de/docs/Web/API/Navigator/getInstalledRelatedApps) gehandhabt werden, die es Ihnen ermöglicht, installierte verwandte plattformspezifische Apps (oder PWAs) zu erkennen und entsprechend zu reagieren.

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

- [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)-Ereignis
- [Anleitung zur Bereitstellung eines eigenen In-App-Installationserlebnisses](https://web.dev/articles/customize-install) auf web.dev (2021)
