---
title: Installation von Ihrer PWA auslösen
slug: Web/Progressive_web_apps/How_to/Trigger_install_prompt
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{PWASidebar}}

> [!WARNING]
> Die hier beschriebene Technik hängt von dem [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)-Ereignis ab, das nicht standardisiert ist und derzeit nur in auf Chromium basierenden Browsern implementiert ist.

Standardmäßig zeigt der Browser, wenn ein Benutzer Ihre Website besucht und der Browser feststellt, dass die Seite [als PWA installierbar ist](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installability), eine integrierte Benutzeroberfläche – zum Beispiel ein Symbol in der URL-Leiste – um die Installation der Website anzustoßen. Wenn der Benutzer auf das Symbol klickt, zeigt der Browser ein Installationsfenster an, das mindestens den [Namen](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) und das [Icon](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) der App enthält. Wenn der Benutzer zustimmt, die App zu installieren, wird sie installiert.

Sie können jedoch Ihre eigene In-App-Benutzeroberfläche implementieren, um den Benutzer zu fragen, ob er die App installieren möchte, was den Installationsdialog auslöst. Die Vorteile dabei sind:

- Sie können mehr Kontext über die App bieten und dem Benutzer erklären, warum er sie als PWA installieren sollte.
- Eine In-App-Installationsoberfläche ist wahrscheinlich leichter für Benutzer zu entdecken und zu verstehen als die Standard-Benutzeroberfläche des Browsers.

## Hinzufügen einer In-App-Installationsoberfläche

Zuerst fügen Sie Ihrer App eine Benutzeroberfläche hinzu, die anzeigt, dass der Benutzer die App installieren kann. Zum Beispiel:

```html
<button id="install" hidden>Install</button>
```

Wir setzen das [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)-Attribut des Buttons, da die Installationsoberfläche nicht sichtbar sein soll, wenn der Benutzer die App mit einem Browser besucht, der die Installation nicht unterstützt. Als nächstes werden wir sehen, wie man den Button nur für Browser sichtbar macht, die die lokale Installation von PWAs unterstützen.

## Zuhören auf beforeinstallprompt

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

Der Ereignishandler macht hier drei Dinge:

- Rufen Sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das Ereignis auf. Dadurch wird verhindert, dass der Browser seine eigene Installationsoberfläche anzeigt.
- Nehmen Sie eine Referenz auf das Ereignisobjekt, das in den Handler übergeben wird. Dies ist eine Instanz von [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent) und ermöglicht uns, den Benutzer zur Installation der App aufzufordern.
- Zeigen Sie unsere In-App-Installationsoberfläche an, indem Sie das `hidden`-Attribut auf dem Button entfernen.

## Auslösen des Installationsdialogs

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

Die Variable `installPrompt` wurde mit dem `BeforeInstallPromptEvent`-Objekt in unserem `beforeinstallprompt`-Ereignishandler initialisiert. Falls `installPrompt` aus irgendeinem Grund nicht initialisiert wurde, tun wir nichts.

Andernfalls rufen wir die Methode [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) auf. Dies zeigt das Installationsdialogfeld an und gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das anzeigt, ob die App installiert wurde oder nicht. Insbesondere ist die `outcome`-Eigenschaft `"accepted"`, wenn der Benutzer sich entschieden hat, die App zu installieren, oder `"dismissed"`, wenn er den Dialog abgelehnt hat.

In jedem Fall müssen wir unseren Zustand nach dem Aufrufen von `prompt()` zurücksetzen, da wir es nur einmal für jede `BeforeInstallPromptEvent`-Instanz aufrufen können. Also setzen wir unsere Variable `installPrompt` zurück und verstecken den Installationsbutton erneut.

## Reagieren auf App-Installation

Je nach Browser und Plattform kann es sein, dass der Browser auch nach wie vor seine eigene Benutzeroberfläche zur Installation der App anbietet. Dies bedeutet, dass die App möglicherweise installiert wird, ohne unsere In-App-Installationsoberfläche zu durchlaufen. Wenn dies geschieht, möchten wir die In-App-Installationsoberfläche deaktivieren, oder wir zeigen sie in einer bereits installierten App an.

Um dies zu erreichen, können wir auf das [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event)-Ereignis hören, das im globalen [`Window`](/de/docs/Web/API/Window)-Bereich ausgelöst wird, wenn die App installiert wurde:

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

Ein Fall, der in den obigen Beispielen nicht abgedeckt ist, ist der, wenn Sie neben einer Web-App auch eine plattformspezifische Version der App haben und das Web-App-Erlebnis personalisieren möchten, je nachdem, ob die plattformspezifische App bereits installiert ist. Möglicherweise möchten Sie Benutzer nicht einladen, die PWA zu installieren, wenn sie die plattformspezifische App bereits installiert haben und/oder Sie möchten sie einladen, zur plattformspezifischen App zu wechseln, um Inhalte anzusehen.

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

- [Making PWAs installable](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event) Ereignis
- [How to provide your own in-app install experience](https://web.dev/articles/customize-install) auf web.dev (2021)
