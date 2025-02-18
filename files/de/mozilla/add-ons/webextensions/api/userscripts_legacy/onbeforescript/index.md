---
title: userScripts.onBeforeScript (Legacy)
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/onBeforeScript
l10n:
  sourceCommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

{{AddonSidebar}}

> [!WARNING]
> Dies ist die Dokumentation für die veraltete `userScripts`-API. Sie ist in Firefox für Manifest V2 verfügbar. Für Funktionalitäten, die mit Benutzerskripten in Manifest V3 arbeiten, schauen Sie sich die neue {{WebExtAPIRef("userScripts")}}-API an.

Das `onBeforeScript`-Ereignis des {{WebExtAPIRef("userScripts_legacy","browser.userScripts")}} wird ausgelöst, bevor ein Benutzerskript ausgeführt wird. Es kann nur im API-Skript enthalten sein, dem Skript, das in [`"user_scripts"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) registriert wurde. Dort wird es verwendet, um zu erkennen, dass die benutzerdefinierten API-Methoden in das Benutzerskript exportiert werden sollen.

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
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden die folgenden Argumente übergeben:

    - `script`

      - : Ein `object`, das das Benutzerskript darstellt, das zu einer Webseite passt. Seine Eigenschaften und Methoden sind wie folgt:

        - `defineGlobals`
          - : Eine Methode, die ein Objekt exportiert, das Eigenschaften und Methoden enthält, die global in der Benutzerskript-Sandbox verfügbar sind. Diese Methode muss synchron aufgerufen werden, um sicherzustellen, dass das Benutzerskript noch nicht ausgeführt wurde.
        - `export`
          - : Eine Methode, die einen Wert in einen konvertiert, auf den der Code des Benutzerskripts zugreifen kann. Diese Methode wird in API-Methoden verwendet, die an das Benutzerskript exportiert werden, um nicht primitive Werte zu liefern oder zu lösen. Die exportierten Objekte können auch Methoden bereitstellen, auf die der Code des Benutzerskripts zugreifen und die er aufrufen kann.
        - `global`
          - : Ein `object`, das Zugriff auf die Sandbox für das Benutzerskript bietet.
        - `metadata`
          - : Die `scriptMetadata`-Eigenschaft, die gesetzt wird, wenn das Benutzerskript mit `userScripts.register` registriert wurde.

## Beispiele

Ein Beispiel, wie der Listener verwendet werden kann:

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
