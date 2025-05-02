---
title: "Fenster: beforeinstallprompt Ereignis"
short-title: beforeinstallprompt
slug: Web/API/Window/beforeinstallprompt_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`beforeinstallprompt`**-Ereignis wird ausgelöst, wenn der Browser erkannt hat, dass eine Website [als Progressive Web App installiert werden kann](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

Es gibt keinen garantierten Zeitpunkt, zu dem dieses Ereignis ausgelöst wird, aber es geschieht normalerweise beim Laden der Seite.

Der typische Anwendungsfall für dieses Ereignis besteht darin, dass eine Web-App ihre eigene In-App-Benutzeroberfläche bereitstellt, um den Benutzer zur Installation der App einzuladen, anstatt der generischen, die vom Browser bereitgestellt wird. Dies ermöglicht es der App, mehr Kontext über die App bereitzustellen und dem Benutzer zu erklären, warum er sie installieren könnte.

In diesem Szenario wird der Handler für dieses Ereignis:

- Eine Referenz auf das [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent)-Objekt behalten, das an ihn übergeben wird
- Seine eigene In-App-Installationsoberfläche anzeigen (diese sollte standardmäßig ausgeblendet sein, da nicht alle Browser die Installation unterstützen).

Wenn der Benutzer die In-App-Installationsoberfläche verwendet, um die App zu installieren, ruft die In-App-Installationsoberfläche die [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt)-Methode des gespeicherten `BeforeInstallPromptEvent`-Objekts auf, um die Installationsaufforderung anzuzeigen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("beforeinstallprompt", (event) => { })

onbeforeinstallprompt = (event) => { }
```

## Ereignistyp

Ein [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("BeforeInstallPromptEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`BeforeInstallPromptEvent.platforms`](/de/docs/Web/API/BeforeInstallPromptEvent/platforms) {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Gibt ein Array von Zeichenfolgen-Elementen zurück, das die Plattformen enthält, auf denen das Ereignis ausgelöst wurde. Dies wird für Benutzeragenten bereitgestellt, die dem Benutzer eine Auswahl an Versionen präsentieren möchten, wie z. B. "web" oder "play", die dem Benutzer die Wahl zwischen einer Web- oder einer Android-Version ermöglichen würden.
- [`BeforeInstallPromptEvent.userChoice`](/de/docs/Web/API/BeforeInstallPromptEvent/userChoice) {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das auf ein Objekt auflöst, das die Wahl des Benutzers beschreibt, als er zur Installation der App aufgefordert wurde.

## Ereignismethoden

- [`BeforeInstallPromptEvent.prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt){{Non-standard_Inline}} {{Experimental_Inline}}
  - : Zeigt eine Aufforderung an, ob der Benutzer die App installieren möchte. Diese Methode gibt ein {{jsxref("Promise")}} zurück, das auf ein Objekt auflöst, das die Wahl des Benutzers beschreibt, als er zur Installation der App aufgefordert wurde.

## Beispiele

Im folgenden Beispiel bietet eine App ihren eigenen Installationsbutton, der die `id` von `"install"` hat. Zunächst ist der Button ausgeblendet.

```html
<button id="install" hidden>Install</button>
```

Der `beforeinstallprompt`-Handler:

- Bricht das Ereignis ab, was verhindert, dass der Browser seine eigene Installationsoberfläche auf einigen Plattformen anzeigt
- Weist das `BeforeInstallPromptEvent`-Objekt einer Variablen zu, sodass es später verwendet werden kann
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

Bei einem Klick auf den Installationsbutton der App:

- Wird die [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt)-Methode des gespeicherten Ereignisobjekts aufgerufen, um die Installationsaufforderung zu starten.
- Wird der Zustand durch Löschen der `installPrompt`-Variable zurückgesetzt und der Button erneut ausgeblendet.

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
