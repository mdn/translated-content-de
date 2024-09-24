---
title: BeforeInstallPromptEvent
slug: Web/API/BeforeInstallPromptEvent
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{APIRef}}{{SeeCompatTable}}{{Non-standard_header}}

Die **`BeforeInstallPromptEvent`** Schnittstelle gehört zum {{domxref("Window.beforeinstallprompt_event", "beforeinstallprompt")}}-Ereignis, das am {{domxref("Window")}}-Objekt ausgelöst wird, bevor ein Benutzer aufgefordert wird, eine Website auf einem mobilen Gerät zur Startseite hinzuzufügen.

Diese Schnittstelle erbt von der {{domxref("Event")}} Schnittstelle.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("BeforeInstallPromptEvent.BeforeInstallPromptEvent","BeforeInstallPromptEvent()")}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Erstellt ein neues `BeforeInstallPromptEvent`-Objekt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("Event")}}._

- {{domxref("BeforeInstallPromptEvent.platforms")}} {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Gibt ein Array von Zeichenketten zurück, das die Plattformen enthält, auf denen das Ereignis ausgelöst wurde. Dies wird für Benutzeragenten bereitgestellt, die dem Benutzer eine Auswahl von Versionen präsentieren möchten, wie zum Beispiel „web“ oder „play“, wodurch der Benutzer zwischen einer Web- oder einer Android-Version wählen kann.
- {{domxref("BeforeInstallPromptEvent.userChoice")}} {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu einem Objekt aufgelöst wird, das die Wahl des Benutzers beschreibt, als er zur Installation der App aufgefordert wurde.

## Instanz-Methoden

- {{domxref("BeforeInstallPromptEvent.prompt()")}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Zeigt eine Aufforderung an, die den Benutzer fragt, ob er die App installieren möchte. Diese Methode gibt ein {{jsxref("Promise")}} zurück, das zu einem Objekt aufgelöst wird, das die Wahl des Benutzers beschreibt, als er zur Installation der App aufgefordert wurde.

## Beispiele

Im folgenden Beispiel bietet eine App ihre eigene Installationsschaltfläche mit der `id` `"install"`. Die Schaltfläche ist anfänglich ausgeblendet.

```html
<button id="install" hidden>Installieren</button>
```

Der `beforeinstallprompt`-Handler:

- Bricht das Ereignis ab, um zu verhindern, dass der Browser auf einigen Plattformen seine eigene Installationsoberfläche anzeigt.
- Weist das `BeforeInstallPromptEvent`-Objekt einer Variablen zu, damit es später verwendet werden kann.
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

Beim Klicken ruft die Installationsschaltfläche der App:

- Die {{domxref("BeforeInstallPromptEvent.prompt()", "prompt()")}}-Methode des gespeicherten Ereignisobjekts auf, um die Installationsaufforderung auszulösen.
- Setzt ihren Zustand zurück, indem sie die `installPrompt`-Variable löscht und sich selbst wieder ausblendet.

```js
installButton.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  console.log(`Installationsaufforderung war: ${result.outcome}`);
  installPrompt = null;
  installButton.setAttribute("hidden", "");
});
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [Wie Sie Ihre eigene Installationserfahrung in der App bieten] (https://web.dev/articles/customize-install) auf web.dev (2021)
