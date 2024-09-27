---
title: "Window: beforeinstallprompt-Ereignis"
short-title: beforeinstallprompt
slug: Web/API/Window/beforeinstallprompt_event
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef}}

Das **`beforeinstallprompt`**-Ereignis wird ausgelöst, wenn der Browser erkennt, dass eine Website [als Progressive Web App installiert werden kann](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

Es gibt keine garantierte Zeit, zu der dieses Ereignis ausgelöst wird, aber es passiert normalerweise beim Laden der Seite.

Der typische Anwendungsfall für dieses Ereignis ist, wenn eine Web-App ihre eigene In-App-Benutzeroberfläche bereitstellen möchte, um den Nutzer zur Installation der App einzuladen, anstatt der generischen, die vom Browser bereitgestellt wird. Dies ermöglicht es der App, mehr Kontext über die App bereitzustellen und dem Nutzer zu erklären, warum sie die Installation in Betracht ziehen sollten.

In diesem Szenario wird der Handler für dieses Ereignis:

- Eine Referenz zum [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent)-Objekt halten, das an ihn übergeben wird
- Seine In-App-Installations-UI anzeigen (diese sollte standardmäßig ausgeblendet sein, da nicht alle Browser die Installation unterstützen).

Wenn der Nutzer die In-App-Installations-UI verwendet, um die App zu installieren, ruft die In-App-Installations-UI die [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt)-Methode des gespeicherten `BeforeInstallPromptEvent`-Objekts auf, um das Installationsdialogfeld anzuzeigen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("beforeinstallprompt", (event) => {});

onbeforeinstallprompt = (event) => {};
```

## Ereignistyp

Ein [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("BeforeInstallPromptEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`BeforeInstallPromptEvent.platforms`](/de/docs/Web/API/BeforeInstallPromptEvent/platforms) {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Gibt ein Array von Strings zurück, das die Plattformen enthält, auf denen das Ereignis ausgelöst wurde. Dies wird für User Agents bereitgestellt, die dem Nutzer eine Auswahl an Versionen präsentieren möchten, wie beispielsweise "web" oder "play", was es dem Nutzer ermöglicht, zwischen einer Web-Version oder einer Android-Version zu wählen.
- [`BeforeInstallPromptEvent.userChoice`](/de/docs/Web/API/BeforeInstallPromptEvent/userChoice) {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu einem Objekt aufgelöst wird, das die Wahl des Nutzers beschreibt, als er zur Installation der App aufgefordert wurde.

## Ereignismethoden

- [`BeforeInstallPromptEvent.prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt){{Non-standard_Inline}} {{Experimental_Inline}}
  - : Zeigt ein Dialogfeld an, das den Nutzer fragt, ob er die App installieren möchte. Diese Methode gibt ein {{jsxref("Promise")}} zurück, das zu einem Objekt aufgelöst wird, das die Wahl des Nutzers beschreibt, als er zur Installation der App aufgefordert wurde.

## Beispiele

Im folgenden Beispiel stellt eine App ihren eigenen Installationsbutton bereit, der die `id` "install" hat. Der Button ist zunächst ausgeblendet.

```html
<button id="install" hidden>Install</button>
```

Der `beforeinstallprompt`-Handler:

- Bricht das Ereignis ab, um zu verhindern, dass der Browser seine eigene Installations-UI auf einigen Plattformen zeigt
- Weist das `BeforeInstallPromptEvent`-Objekt einer Variablen zu, damit es später verwendet werden kann
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

Beim Klicken auf den Installationsbutton der App:

- Wird die [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt)-Methode des gespeicherten Ereignisobjekts aufgerufen, um den Installationsdialog auszulösen.
- Setzt es seinen Zustand zurück, indem es die `installPrompt`-Variable löscht und sich selbst wieder verbirgt.

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
