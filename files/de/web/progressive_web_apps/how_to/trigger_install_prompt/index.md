---
title: Installation aus Ihrer PWA auslösen
slug: Web/Progressive_web_apps/How_to/Trigger_install_prompt
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{PWASidebar}}

> [!WARNING]
> Die hier beschriebene Technik hängt vom {{domxref("Window.beforeinstallprompt_event", "beforeinstallprompt")}}-Ereignis ab, das nicht standardmäßig ist und derzeit nur in Chromium-basierten Browsern implementiert ist.

Standardmäßig zeigt der Browser, wenn ein Benutzer Ihre Website besucht und der Browser feststellt, dass die Seite [als PWA installierbar ist](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installability), eine eingebaute Benutzeroberfläche an — zum Beispiel ein Symbol in der URL-Leiste — um die Seite zu installieren. Wenn der Benutzer auf das Symbol klickt, zeigt der Browser eine Installationsaufforderung an, die mindestens den [Namen](/de/docs/Web/Manifest/name) und das [Symbol](/de/docs/Web/Manifest/icons) der App enthält. Wenn der Benutzer zustimmt, die App zu installieren, wird sie installiert.

Sie können jedoch Ihre eigene In-App-Benutzeroberfläche implementieren, um den Benutzer zu fragen, ob er die App installieren möchte, was die Installationsaufforderung auslöst. Die Vorteile davon sind:

- Sie können mehr Kontext über die App bereitstellen, um dem Benutzer zu erklären, warum er sie als PWA installieren könnte.
- Eine In-App-Installationsoberfläche ist wahrscheinlich einfacher für Benutzer zu entdecken und zu verstehen als die standardmäßige Benutzeroberfläche des Browsers.

## Hinzufügen einer In-App-Installationsoberfläche

Zuerst fügen Sie der App eine Benutzeroberfläche hinzu, die anzeigt, dass der Benutzer sie installieren kann. Zum Beispiel:

```html
<button id="install" hidden>Installieren</button>
```

Wir setzen das [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)-Attribut des Buttons, denn wenn der Benutzer die App mit einem Browser besucht, der sie nicht installieren kann, möchten wir nicht, dass die Installationsoberfläche sichtbar ist. Als nächstes werden wir sehen, wie man den Button nur in Browsern sichtbar macht, die PWAs lokal installieren können.

## Lauschen auf beforeinstallprompt

Sobald der Browser festgestellt hat, dass er die App installieren kann, löst er das {{domxref("Window.beforeinstallprompt_event", "beforeinstallprompt")}}-Ereignis im globalen {{domxref("Window")}}-Bereich aus.

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

Der Ereignis-Handler hier macht drei Dinge:

- Ruft {{domxref("Event.preventDefault()","preventDefault()")}} beim Ereignis auf. Dies verhindert, dass der Browser seine eigene Installationsbenutzeroberfläche anzeigt.
- Nimmt eine Referenz auf das Ereignisobjekt, das in den Handler übergeben wird. Dies ist eine Instanz von {{domxref("BeforeInstallPromptEvent")}} und ermöglicht es uns, den Benutzer zur Installation der App aufzufordern.
- Zeigt unsere In-App-Installationsoberfläche an, indem das `hidden`-Attribut des Buttons entfernt wird.

## Auslösen der Installationsaufforderung

Als nächstes müssen wir einen Klick-Handler zu unserem In-App-Installationsbutton hinzufügen:

```js
// main.js

installButton.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  console.log(`Die Installationsaufforderung war: ${result.outcome}`);
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  installPrompt = null;
  installButton.setAttribute("hidden", "");
}
```

Die `installPrompt`-Variable wurde mit dem `BeforeInstallPromptEvent`-Objekt in unserem `beforeinstallprompt`-Ereignis-Handler initialisiert. Falls `installPrompt` aus irgendeinem Grund nicht initialisiert wurde, tun wir nichts.

Andernfalls rufen wir die {{domxref("BeforeInstallPromptEvent.prompt()", "prompt()")}}-Methode auf. Dies zeigt die Installationsaufforderung an und gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das anzeigt, ob die App installiert wurde oder nicht. Insbesondere hat seine `outcome`-Eigenschaft den Wert `"accepted"`, wenn der Benutzer sich entschieden hat, die App zu installieren, oder `"dismissed"`, wenn er die Aufforderung abgelehnt hat.

In jedem Fall müssen wir unseren Zustand nach dem Aufruf von `prompt()` zurücksetzen, da wir es nur einmal für jede `BeforeInstallPromptEvent`-Instanz aufrufen können. Also setzen wir unsere `installPrompt`-Variable zurück und verbergen den Installationsbutton erneut.

## Reagieren auf App-Installation

Je nach Browser und Plattform kann der Browser möglicherweise weiterhin seine eigene Benutzeroberfläche zur Installation der App anbieten. Dies bedeutet, dass die App möglicherweise installiert wird, ohne unsere In-App-Installationsoberfläche zu durchlaufen. Wenn dies geschieht, möchten wir die In-App-Installationsoberfläche deaktivieren, oder wir zeigen sie in einer App an, die bereits installiert wurde.

Hierfür können wir auf das {{domxref("Window.appinstalled_event", "appinstalled")}}-Ereignis lauschen, das im globalen {{domxref("Window")}}-Bereich ausgelöst wird, wenn die App installiert wurde:

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

## Reagieren auf plattformspezifische Apps, die installiert werden

Ein Fall, der in den obigen Beispielen nicht behandelt wird, ist der, bei dem Sie eine plattformspezifische Version der App sowie eine Web-App haben und das Web-App-Erlebnis personalisieren möchten, je nachdem, ob die plattformspezifische App bereits installiert ist. Sie möchten möglicherweise die Benutzer nicht einladen, die PWA zu installieren, wenn sie bereits die plattformspezifische App haben, und/oder sie dazu einladen, die plattformspezifische App zu besuchen, um Inhalte anzuzeigen.

Dies kann mit der Methode {{domxref("Navigator.getInstalledRelatedApps()")}} gehandhabt werden, die es Ihnen ermöglicht, installierte verwandte plattformspezifische Apps (oder PWAs) zu erkennen und entsprechend zu reagieren.

Zum Beispiel:

```js
const relatedApps = await navigator.getInstalledRelatedApps();

// Spezifische installierte plattformspezifische App suchen
const psApp = relatedApps.find((app) => app.id === "com.example.myapp");

if (psApp) {
  // Benutzeroberfläche entsprechend aktualisieren
}
```

Diese Methode könnte auch mit `beforeinstallprompt` kombiniert werden, um die Installationsbenutzeroberfläche des Browsers basierend auf der Verfügbarkeit einer plattformspezifischen App zu unterdrücken:

```js
window.addEventListener("beforeinstallprompt", async (event) => {
  const relatedApps = await navigator.getInstalledRelatedApps();

  // Spezifische installierte plattformspezifische App suchen
  const psApp = relatedApps.find((app) => app.id === "com.example.myapp");

  if (psApp) {
    event.preventDefault();
    // Benutzeroberfläche entsprechend aktualisieren
  }
});
```

## Siehe auch

- [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- {{domxref("Window.beforeinstallprompt_event", "beforeinstallprompt")}}-Ereignis
- [How to provide your own in-app install experience](https://web.dev/articles/customize-install) auf web.dev (2021)
