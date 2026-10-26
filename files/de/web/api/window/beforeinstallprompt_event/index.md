---
title: "Window: beforeinstallprompt-Ereignis"
short-title: beforeinstallprompt
slug: Web/API/Window/beforeinstallprompt_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef}}

Das **`beforeinstallprompt`**-Ereignis wird ausgelöst, wenn der Browser erkannt hat, dass eine Website [als Progressive Web App installiert werden kann](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

Es gibt keinen garantierten Zeitpunkt für das Auslösen dieses Ereignisses, es tritt jedoch üblicherweise beim Laden der Seite auf.

Dieses Ereignis wird typischerweise verwendet, wenn eine Web-App eine eigene Benutzeroberfläche innerhalb der App anbieten möchte, die zur Installation einlädt, anstatt die allgemeine Benutzeroberfläche des Browsers zu verwenden. So kann die App mehr Kontext bieten und erklären, warum eine Installation sinnvoll sein könnte.

In diesem Fall wird der Event-Handler:

- Eine Referenz auf das übergebene [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent)-Objekt speichern.
- Die Installationsoberfläche innerhalb der App einblenden (diese sollte standardmäßig ausgeblendet sein, da nicht alle Browser die Installation unterstützen).

Wenn die Person die Installation über die Benutzeroberfläche der App startet, ruft diese die Methode [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) des gespeicherten `BeforeInstallPromptEvent`-Objekts auf, um die Installationsaufforderung anzuzeigen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("beforeinstallprompt", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onbeforeinstallprompt = (event) => { }
```

## Ereignistyp

Ein [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("BeforeInstallPromptEvent")}}

## Ereignismethoden

- [`BeforeInstallPromptEvent.prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt){{Non-standard_Inline}} {{Experimental_Inline}}
  - : Zeigt eine Aufforderung an, die fragt, ob die App installiert werden soll. Diese Methode gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das die Entscheidung zur Installation beschreibt.

## Beispiele

Im folgenden Beispiel stellt eine App eine eigene Installationsschaltfläche mit der `id` `"install"` bereit. Anfangs ist die Schaltfläche ausgeblendet.

```html
<button id="install" hidden>Install</button>
```

Der `beforeinstallprompt`-Handler:

- Bricht das Ereignis ab. Dadurch wird auf einigen Plattformen verhindert, dass der Browser seine eigene Installationsoberfläche anzeigt.
- Weist das `BeforeInstallPromptEvent`-Objekt einer Variablen zu, damit es später verwendet werden kann.
- Blendet die Installationsschaltfläche der App ein.

```js
let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
});
```

Wenn auf die Installationsschaltfläche der App geklickt wird, geschieht Folgendes:

- Die Methode [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) des gespeicherten Ereignisobjekts wird aufgerufen, um die Installationsaufforderung anzuzeigen.
- Die Schaltfläche setzt ihren Zustand zurück, indem sie die Variable `installPrompt` leert und sich wieder ausblendet.

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
