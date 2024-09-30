---
title: "Window: beforeinstallprompt Ereignis"
short-title: beforeinstallprompt
slug: Web/API/Window/beforeinstallprompt_event
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef}}

Das **`beforeinstallprompt`** Ereignis wird ausgelöst, wenn der Browser feststellt, dass eine Website als [Progressive Web App installiert werden kann](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

Es gibt keine garantierte Zeit, zu der dieses Ereignis ausgelöst wird, aber es passiert normalerweise beim Laden der Seite.

Die typische Nutzung dieses Ereignisses ist, wenn eine Web-App ihre eigene In-App-UI bereitstellen möchte, die den Benutzer einlädt, die App zu installieren, anstelle der generischen, die vom Browser bereitgestellt wird. Dies ermöglicht es der App, mehr Kontext zur Verfügung zu stellen und dem Benutzer zu erklären, warum er sie installieren könnte.

In diesem Szenario wird der Handler für dieses Ereignis:

- Eine Referenz auf das [`BeforeInstallPromptEvent`](/de/docs/Web/API/BeforeInstallPromptEvent) Objekt, das übergeben wird, behalten.
- Seine eigene In-App-Installations-UI anzeigen (diese sollte standardmäßig verborgen sein, da nicht alle Browser die Installation unterstützen).

Wenn der Benutzer die In-App-Installations-UI verwendet, um die App zu installieren, ruft die In-App-Installations-UI die [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) Methode des gespeicherten `BeforeInstallPromptEvent` Objekts auf, um die Installationsaufforderung anzuzeigen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

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
  - : Gibt ein Array von Zeichenfolgen zurück, das die Plattformen enthält, auf denen das Ereignis ausgelöst wurde. Dies wird für Benutzeragenten bereitgestellt, die dem Benutzer eine Auswahl an Versionen präsentieren möchten, wie zum Beispiel "web" oder "play", wodurch der Benutzer zwischen einer Webversion oder einer Android-Version wählen kann.
- [`BeforeInstallPromptEvent.userChoice`](/de/docs/Web/API/BeforeInstallPromptEvent/userChoice) {{ReadOnlyInline}}{{Non-standard_Inline}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich in ein Objekt auflöst, das die Entscheidung des Benutzers beschreibt, als er aufgefordert wurde, die App zu installieren.

## Ereignismethoden

- [`BeforeInstallPromptEvent.prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt){{Non-standard_Inline}} {{Experimental_Inline}}
  - : Zeigt eine Aufforderung an, in der der Benutzer gefragt wird, ob er die App installieren möchte. Diese Methode gibt ein {{jsxref("Promise")}} zurück, das sich in ein Objekt auflöst, das die Entscheidung des Benutzers beschreibt, als er aufgefordert wurde, die App zu installieren.

## Beispiele

Im folgenden Beispiel bietet eine App ihre eigene Installationsschaltfläche an, die eine `id` von `"install"` hat. Anfänglich ist die Schaltfläche verborgen.

```html
<button id="install" hidden>Install</button>
```

Der `beforeinstallprompt`-Handler:

- Bricht das Ereignis ab, was verhindert, dass der Browser auf einigen Plattformen seine eigene Installations-UI anzeigt
- Weist das `BeforeInstallPromptEvent` Objekt einer Variablen zu, damit es später verwendet werden kann
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

Beim Klick auf die Installationsschaltfläche der App:

- Ruft die [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) Methode des gespeicherten Ereignisobjekts auf, um die Installationsaufforderung auszulösen.
- Setzt seinen Zustand zurück, indem die `installPrompt` Variable gelöscht und sich die Schaltfläche erneut verbirgt.

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
