---
title: userScripts.onBeforeScript
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/onBeforeScript
l10n:
  sourceCommit: 0b956178ef19e8fc3981ed97dc6659d5a63f59a6
---

{{AddonSidebar}}

Das `onBeforeScript`-Ereignis der {{WebExtAPIRef("userScripts","browser.userScripts")}} wird ausgelöst, bevor ein User Script ausgeführt wird. Es kann nur im API-Skript enthalten sein, dem Script, das unter [`"user_scripts"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) registriert ist, wo es verwendet wird, um zu erkennen, dass die benutzerdefinierten API-Methoden zum User Script exportiert werden sollen.

## Syntax

```js-nolint
browser.userScripts.onBeforeScript.addListener(listener)
browser.userScripts.onBeforeScript.removeListener(listener)
browser.userScripts.onBeforeScript.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er hört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Die Funktion erhält folgende Argumente:

    - `script`

      - : Ein `object`, das das User Script darstellt, das mit einer Webseite übereinstimmt. Seine Eigenschaften und Methoden sind wie folgt:

        - `defineGlobals`
          - : Eine Methode, die ein Objekt exportiert, das Eigenschaften und Methoden enthält, die global für den User Script Sandbox verfügbar sind. Diese Methode muss synchron aufgerufen werden, um zu gewährleisten, dass das User Script noch nicht ausgeführt wurde.
        - `export`
          - : Eine Methode, die einen Wert in einen umwandelt, auf den der User Script-Code zugreifen kann. Diese Methode wird in API-Methoden verwendet, die an das User Script exportiert werden, um nicht-primäre Werte abzurufen oder aufzulösen. Die exportierten Objekte können auch Methoden bereitstellen, auf die der User Script-Code zugreifen und die er aufrufen kann.
        - `global`
          - : Ein `object`, das Zugriff auf die Sandbox für das User Script bietet.
        - `metadata`
          - : Die Eigenschaft `scriptMetadata`, die festgelegt wurde, als das User Script mit `userScripts.register` registriert wurde.

## Beispiele

Ein Beispiel, wie der Listener verwendet werden könnte:

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
