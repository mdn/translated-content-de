---
title: BeforeInstallPromptEvent
slug: Web/API/BeforeInstallPromptEvent
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

Das **`BeforeInstallPromptEvent`** ist die Schnittstelle des [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)-Ereignisses, das im [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst wird, bevor ein Benutzer aufgefordert wird, eine Webseite zu einem Startbildschirm auf mobilen Geräten zu "installieren".

Diese Schnittstelle erbt von der [`Event`](/de/docs/Web/API/Event)-Schnittstelle.

{{InheritanceDiagram}}

## Konstruktor

- [`BeforeInstallPromptEvent()`](/de/docs/Web/API/BeforeInstallPromptEvent/BeforeInstallPromptEvent){{Non-standard_Inline}} {{Experimental_Inline}}
  - : Erstellt ein neues `BeforeInstallPromptEvent`-Objekt.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`BeforeInstallPromptEvent.platforms`](/de/docs/Web/API/BeforeInstallPromptEvent/platforms) {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Gibt ein Array von Zeichenfolgen zurück, das die Plattformen enthält, auf denen das Ereignis ausgelöst wurde. Dies wird für Benutzeragenten bereitgestellt, die dem Benutzer eine Auswahl an Versionen anbieten möchten, wie beispielsweise "web" oder "play", wodurch der Benutzer zwischen einer Web-Version oder einer Android-Version wählen kann.
- [`BeforeInstallPromptEvent.userChoice`](/de/docs/Web/API/BeforeInstallPromptEvent/userChoice) {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich zu einem Objekt auflöst, das die Entscheidung des Benutzers beschreibt, als er aufgefordert wurde, die App zu installieren.

## Instanzmethoden

- [`BeforeInstallPromptEvent.prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt){{Non-standard_Inline}} {{Experimental_Inline}}
  - : Zeigt eine Aufforderung, ob der Benutzer die App installieren möchte. Diese Methode gibt ein {{jsxref("Promise")}} zurück, das sich zu einem Objekt auflöst, das die Entscheidung des Benutzers beschreibt, als er aufgefordert wurde, die App zu installieren.

## Beispiele

Im folgenden Beispiel bietet eine App ihren eigenen Installationsbutton, der eine `id` von `"install"` hat. Der Button ist zunächst verborgen.

```html
<button id="install" hidden>Install</button>
```

Der `beforeinstallprompt`-Handler:

- Bricht das Ereignis ab, wodurch verhindert wird, dass der Browser auf einigen Plattformen seine eigene Installationsbenutzeroberfläche anzeigt.
- Weist das `BeforeInstallPromptEvent`-Objekt einer Variablen zu, damit es später verwendet werden kann.
- Macht den Installationsbutton der App sichtbar.

```js
let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
});
```

Bei einem Klick auf den Installationsbutton der App:

- Wird die [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt)-Methode des gespeicherten Ereignisobjekts aufgerufen, um die Installationsaufforderung auszulösen.
- Setzt seinen Zustand zurück, indem die `installPrompt`-Variable gelöscht und der Button wieder versteckt wird.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [Anleitung zur Bereitstellung eines eigenen In-App-Installationserlebnisses](https://web.dev/articles/customize-install) auf web.dev (2021)
