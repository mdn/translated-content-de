---
title: BeforeInstallPromptEvent
slug: Web/API/BeforeInstallPromptEvent
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

Das **`BeforeInstallPromptEvent`** ist das Interface des [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)-Ereignisses, das am [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst wird, bevor ein Benutzer dazu aufgefordert wird, eine Webseite auf dem Startbildschirm eines Mobilgeräts zu "installieren".

Dieses Interface erbt vom [`Event`](/de/docs/Web/API/Event)-Interface.

{{InheritanceDiagram}}

## Konstruktor

- [`BeforeInstallPromptEvent()`](/de/docs/Web/API/BeforeInstallPromptEvent/BeforeInstallPromptEvent){{Non-standard_Inline}} {{Experimental_Inline}}
  - : Erstellt ein neues `BeforeInstallPromptEvent`-Objekt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`BeforeInstallPromptEvent.platforms`](/de/docs/Web/API/BeforeInstallPromptEvent/platforms) {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Gibt ein Array von Zeichenketten zurück, das die Plattformen enthält, auf denen das Ereignis ausgelöst wurde. Dies wird für User Agents bereitgestellt, die dem Benutzer eine Auswahl von Versionen präsentieren möchten, wie beispielsweise "web" oder "play", wodurch der Benutzer zwischen einer Web-Version oder einer Android-Version wählen kann.
- [`BeforeInstallPromptEvent.userChoice`](/de/docs/Web/API/BeforeInstallPromptEvent/userChoice) {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich zu einem Objekt auflöst, das die Wahl des Benutzers beschreibt, als er zur Installation der App aufgefordert wurde.

## Instanz-Methoden

- [`BeforeInstallPromptEvent.prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt){{Non-standard_Inline}} {{Experimental_Inline}}
  - : Zeigt eine Aufforderung, die den Benutzer fragt, ob er die App installieren möchte. Diese Methode gibt ein {{jsxref("Promise")}} zurück, das sich zu einem Objekt auflöst, das die Wahl des Benutzers beschreibt, als er zur Installation der App aufgefordert wurde.

## Beispiele

Im folgenden Beispiel bietet eine App ihre eigene Installationsschaltfläche an, die eine `id` von `"install"` hat. Zunächst ist die Schaltfläche ausgeblendet.

```html
<button id="install" hidden>Install</button>
```

Der `beforeinstallprompt`-Handler:

- Bricht das Ereignis ab, was verhindert, dass der Browser seine eigene Installations-Benutzeroberfläche auf einigen Plattformen anzeigt
- Weist das `BeforeInstallPromptEvent`-Objekt einer Variablen zu, damit es später verwendet werden kann
- Zeigt die Installationsschaltfläche der App an.

```js
let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
});
```

Beim Klicken auf die Installationsschaltfläche der App:

- Ruft die [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt)-Methode des gespeicherten Ereignis-Objekts auf, um den Installationsdialog auszulösen.
- Setzt seinen Zustand zurück, indem es die `installPrompt`-Variable löscht und sich selbst wieder ausblendet.

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

- [PWA-Installationen ermöglichen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [Anleitung zur Bereitstellung einer eigenen In-App-Installationserfahrung](https://web.dev/articles/customize-install) auf web.dev (2021)
