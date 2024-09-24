---
title: userScripts.onBeforeScript
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/onBeforeScript
l10n:
  sourceCommit: 0b956178ef19e8fc3981ed97dc6659d5a63f59a6
---

{{AddonSidebar}}

Das `onBeforeScript` Ereignis der {{WebExtAPIRef("userScripts","browser.userScripts")}} wird ausgelöst, bevor ein Benutzer-Script ausgeführt wird. Es kann nur im API-Script enthalten sein, das Script, das in [`"user_scripts"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) registriert ist, wo es verwendet wird, um zu erkennen, dass die benutzerdefinierten API-Methoden an das Benutzer-Script exportiert werden sollen.

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
  - : Beendet das Abhören dieses Ereignisses. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, `false` andernfalls.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `script`

      - : Ein `Object`, das das Benutzer-Script darstellt, das mit einer Webseite übereinstimmte. Seine Eigenschaften und Methoden sind wie folgt:

        - `defineGlobals`
          - : Eine Methode, die ein Objekt exportiert, das Eigenschaften und Methoden enthält, die global im Benutzer-Script-Sandbox verfügbar sind. Diese Methode muss synchron aufgerufen werden, um sicherzustellen, dass das Benutzer-Script nicht ausgeführt wurde.
        - `export`
          - : Eine Methode, die einen Wert in einen konvertiert, auf den der Benutzer-Script-Code zugreifen kann. Diese Methode wird in API-Methoden verwendet, die an das Benutzer-Script exportiert werden, um nicht-primitive Werte zu resultatieren oder aufzulösen. Die exportierten Objekte können auch Methoden bereitstellen, die der Benutzer-Script-Code aufrufen kann.
        - `global`
          - : Ein `Object`, das Zugriff auf die Sandbox für das Benutzer-Script bietet.
        - `metadata`
          - : Die `scriptMetadata` Eigenschaft, die gesetzt wird, wenn das Benutzer-Script mit `userScripts.register` registriert wurde.

## Beispiele

Ein Beispiel, wie der Listener verwendet werden könnte:

```js
browser.userScripts.onBeforeScript.addListener((script) => {
  script; // Dies ist ein API-Objekt, das das Benutzer-Script repräsentiert,
  // das ausgeführt werden soll.

  script.metadata; // Zugriff auf die Metadaten des Benutzer-Scripts (gibt den
  // Wert der scriptMetadata-Eigenschaft aus dem
  // Aufruf von userScripts.register zurück).

  // Exportieren von globalen Eigenschaften in den Benutzer-Script-Sandbox
  // (diese Methode muss synchron vom
  // Listener aus aufgerufen werden, andernfalls könnte das Benutzer-Script
  // bereits ausgeführt worden sein).
  script.defineGlobals({
    aGlobalPropertyAccessibleFromUserScriptCode: "prop value",

    myCustomAPIMethod(param1, param2) {
      // Benutzerdefinierte Methoden, die vom API-Script exportiert werden,
      // können die WebExtensions-APIs verwenden, die für Inhalts-Scripts verfügbar sind.
      browser.runtime.sendMessage(/* … */);
      // …

      return 123; // primitive Werte können direkt zurückgegeben werden
      // …

      // Nicht-primitive Werte müssen explizit exportiert werden,
      // mithilfe der export-Methode, die vom Script-API-Objekt bereitgestellt wird
      return script.export({
        objKey1: {
          nestedProp: "nestedValue",
        },
        // Explizit exportierte Objekte können auch Methoden bereitstellen.
        objMethod() {
          /* … */
        },
      });
    },

    async myAsyncMethod(param1, param2, param3) {
      // exportierte Methoden können auch als async deklariert werden
    },
  });
});
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("contentScripts")}}
