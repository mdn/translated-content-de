---
title: "Window: beforeinstallprompt-Ereignis"
short-title: beforeinstallprompt
slug: Web/API/Window/beforeinstallprompt_event
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef}}

Das **`beforeinstallprompt`**-Ereignis wird ausgelöst, wenn der Browser erkennt, dass eine Website [als Progressive Web App installiert](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) werden kann.

Es gibt keine garantierte Zeit, zu der dieses Ereignis ausgelöst wird, aber es passiert normalerweise beim Laden der Seite.

Der typische Anwendungsfall für dieses Ereignis ist, wenn eine Web-App ihre eigene In-App-Benutzeroberfläche bereitstellen möchte, um den Benutzer einzuladen, die App zu installieren, anstatt der generischen, die vom Browser bereitgestellt wird. Dies ermöglicht der App, mehr Kontext über die App bereitzustellen und dem Benutzer zu erklären, warum er sie möglicherweise installieren möchte.

In diesem Szenario wird der Handler für dieses Ereignis:

- Eine Referenz auf das {{domxref("BeforeInstallPromptEvent")}}-Objekt behalten, das an ihn übergeben wird
- Seine In-App-Installationsoberfläche anzeigen (diese sollte standardmäßig ausgeblendet sein, da nicht alle Browser die Installation unterstützen).

Wenn der Benutzer die In-App-Installationsoberfläche verwendet, um die App zu installieren, ruft die In-App-Installationsoberfläche die {{domxref("BeforeInstallPromptEvent.prompt()", "prompt()")}}-Methode des beibehaltenen `BeforeInstallPromptEvent`-Objekts auf, um die Installationsaufforderung anzuzeigen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("beforeinstallprompt", (event) => {});

onbeforeinstallprompt = (event) => {};
```

## Ereignetyp

Ein {{domxref("BeforeInstallPromptEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("BeforeInstallPromptEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("Event")}}._

- {{domxref("BeforeInstallPromptEvent.platforms")}} {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Gibt ein Array von Zeichenfolgen-Elementen zurück, die die Plattformen enthalten, auf denen das Ereignis ausgelöst wurde. Dies wird für Benutzeragenten bereitgestellt, die eine Auswahl an Versionen für den Benutzer präsentieren möchten, wie z.B. "web" oder "play", wodurch der Benutzer zwischen einer Webversion oder einer Android-Version wählen kann.
- {{domxref("BeforeInstallPromptEvent.userChoice")}} {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu einem Objekt aufgelöst wird, das die Wahl des Benutzers beschreibt, wenn er zur Installation der App aufgefordert wurde.

## Ereignismethoden

- {{domxref("BeforeInstallPromptEvent.prompt()")}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Zeigt eine Aufforderung an, die den Benutzer fragt, ob er die App installieren möchte. Diese Methode gibt ein {{jsxref("Promise")}} zurück, das sich zu einem Objekt auflöst, das die Wahl des Benutzers beschreibt, wenn er zur Installation der App aufgefordert wurde.

## Beispiele

Im folgenden Beispiel bietet eine App ihren eigenen Installations-Button an, der eine `id` von `"install"` hat. Der Button ist zunächst ausgeblendet.

```html
<button id="install" hidden>Installieren</button>
```

Der `beforeinstallprompt`-Handler:

- Bricht das Ereignis ab, wodurch verhindert wird, dass der Browser seine eigene Installationsoberfläche auf einigen Plattformen anzeigt
- Weist das `BeforeInstallPromptEvent`-Objekt einer Variable zu, damit es später verwendet werden kann
- Zeigt den Installations-Button der App an.

```js
let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
});
```

Wenn der Installations-Button der App angeklickt wird:

- Ruft die {{domxref("BeforeInstallPromptEvent.prompt()", "prompt()")}}-Methode des gespeicherten Ereignisobjekts auf, um die Installationsaufforderung auszulösen.
- Setzt seinen Zustand zurück, indem es die `installPrompt`-Variable löscht und sich wieder ausblendet.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("BeforeInstallPromptEvent.prompt")}}
- {{domxref("BeforeInstallPromptEvent")}}
