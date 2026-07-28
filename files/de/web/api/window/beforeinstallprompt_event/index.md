---
title: "Window: beforeinstallprompt Ereignis"
short-title: beforeinstallprompt
slug: Web/API/Window/beforeinstallprompt_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef}}

Das **`beforeinstallprompt`** Ereignis wird ausgelöst, wenn der Browser erkennt, dass eine Website [als Progressive Web App installiert](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) werden kann.

Es gibt keinen garantierten Zeitpunkt, zu dem dieses Ereignis ausgelöst wird, aber es passiert normalerweise beim Laden der Seite.

Der typische Verwendungszweck dieses Ereignisses ist, wenn eine Web-App ihre eigene In-App-Benutzeroberfläche bereitstellen möchte, um den Benutzer zur Installation der App aufzufordern, anstatt die generische, vom Browser bereitgestellte Oberfläche zu nutzen. Dies ermöglicht der App, mehr Kontext über die App bereitzustellen und dem Benutzer zu erklären, warum er sie installieren sollte.

In diesem Szenario wird der Handler für dieses Ereignis folgendes tun:

- Eine Referenz auf das [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent) Objekt, das übergeben wird, behalten.
- Die eigene In-App-Installationsoberfläche anzeigen (diese sollte standardmäßig verborgen sein, da nicht alle Browser die Installation unterstützen).

Wenn der Benutzer die In-App-Installationsoberfläche nutzt, um die App zu installieren, ruft die In-App-Installationsoberfläche die [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt)-Methode des beibehaltenen `BeforeInstallPromptEvent`-Objekts auf, um das Installationsfenster anzuzeigen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("beforeinstallprompt", (event) => { })

onbeforeinstallprompt = (event) => { }
```

## Ereignistyp

Ein [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("BeforeInstallPromptEvent")}}

## Ereignismethoden

- [`BeforeInstallPromptEvent.prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt){{Non-standard_Inline}} {{Experimental_Inline}}
  - : Zeigt ein Dialogfeld an, das den Benutzer fragt, ob er die App installieren möchte. Diese Methode gibt ein {{jsxref("Promise")}} zurück, das ein Objekt beschreibt, das die Entscheidung des Benutzers bei der Aufforderung zur Installation beschreibt.

## Beispiele

Im folgenden Beispiel bietet eine App ihren eigenen Installationsbutton an, der die `id` `"install"` hat. Der Button ist zunächst verborgen.

```html
<button id="install" hidden>Install</button>
```

Der `beforeinstallprompt` Handler:

- Bricht das Ereignis ab, was verhindert, dass der Browser auf manchen Plattformen seine eigene Installationsoberfläche zeigt.
- Weist das `BeforeInstallPromptEvent`-Objekt einer Variable zu, damit es später verwendet werden kann.
- Zeigt den Installationsbutton der App an.

```js
let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
});
```

Bei einem Klick:

- Ruft der Installationsbutton der App die [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt)-Methode des gespeicherten Ereignisobjekts auf, um das Installationsfenster auszulösen.
- Setzt seinen Zustand zurück, indem die Variable `installPrompt` gelöscht und der Button wieder verborgen wird.

```js
installButton.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  console.log(`Install prompt was: ${result.outcome}`);
  installPrompt = null;
  installButton.setAttribute("hidden", "");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`BeforeInstallPromptEvent.prompt`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt)
- [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent)
