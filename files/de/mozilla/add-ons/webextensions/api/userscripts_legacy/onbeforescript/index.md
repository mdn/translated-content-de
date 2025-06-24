---
title: userScripts.onBeforeScript (Legacy)
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/onBeforeScript
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

> [!WARNING]
> Dies ist die Dokumentation für die veraltete `userScripts`-API. Sie ist in Firefox für Manifest V2 verfügbar. Für die Funktionalität mit Nutzer-Skripten im Manifest V3 siehe die neue {{WebExtAPIRef("userScripts")}}-API.

Das `onBeforeScript`-Ereignis der {{WebExtAPIRef("userScripts_legacy","browser.userScripts")}} wird ausgelöst, bevor ein Nutzer-Skript ausgeführt wird. Es kann nur im API-Skript enthalten sein, dem Skript, das in [`"user_scripts"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) registriert ist, wo es verwendet wird, um zu erkennen, dass die benutzerdefinierten API-Methoden zum Nutzer-Skript exportiert werden sollten.

## Syntax

```js-nolint
browser.userScripts.onBeforeScript.addListener(listener)
browser.userScripts.onBeforeScript.removeListener(listener)
browser.userScripts.onBeforeScript.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stellt das Lauschen auf dieses Ereignis ein. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
    - `script`
      - : Ein `object`, das das Nutzer-Skript repräsentiert, das mit einer Webseite übereinstimmt. Seine Eigenschaften und Methoden sind wie folgt:
        - `defineGlobals`
          - : Eine Methode, die ein Objekt exportiert, das Eigenschaften und Methoden enthält, die global im Nutzer-Skript-Sandbox verfügbar sind. Diese Methode muss synchron aufgerufen werden, um sicherzustellen, dass das Nutzer-Skript nicht ausgeführt wurde.
        - `export`
          - : Eine Methode, die einen Wert in einen konvertiert, auf den der Nutzer-Skripte-Code zugreifen kann. Diese Methode wird in den API-Methoden verwendet, die an das Nutzer-Skript exportiert werden, um nicht primitive Werte zu liefern oder aufzulösen. Die exportierten Objekte können auch Methoden bereitstellen, auf die der Nutzer-Skripte-Code zugreifen und aufrufen kann.
        - `global`
          - : Ein `object`, das Zugriff auf die Sandbox für das Nutzer-Skript bietet.
        - `metadata`
          - : Die `scriptMetadata`-Eigenschaft, die festgelegt wird, wenn das Nutzer-Skript mit `userScripts.register` registriert wurde.

## Beispiele

Ein Beispiel dafür, wie der Listener verwendet werden könnte:

```js
browser.userScripts.onBeforeScript.addListener((script) => {
  script; // This is an API object that represents the user script
  // that is going to be executed.

  script.metadata; // Access the user script metadata (returns the
  // value of the scriptMetadata property from
  // the call to userScripts.register).

  // Export some global properties into the user script sandbox
  // (this method has to be called synchronously from the
  // listener, otherwise the user script may have executed).
  script.defineGlobals({
    aGlobalPropertyAccessibleFromUserScriptCode: "prop value",

    myCustomAPIMethod(param1, param2) {
      // Custom methods exported from the API script can use
      // the WebExtensions APIs available to content scripts.
      browser.runtime.sendMessage(/* … */);
      // …

      return 123; // primitive values can be returned directly
      // …

      // Non primitive values have to be exported explicitly
      // using the export method provided by the script API
      // object
      return script.export({
        objKey1: {
          nestedProp: "nestedValue",
        },
        // Explicitly exported objects can also provide methods.
        objMethod() {
          /* … */
        },
      });
    },

    async myAsyncMethod(param1, param2, param3) {
      // exported methods can also be declared as async
    },
  });
});
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("contentScripts")}}
