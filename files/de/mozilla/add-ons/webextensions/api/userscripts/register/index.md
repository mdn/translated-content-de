---
title: userScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/register
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{AddonSidebar}}

Diese Methode ermöglicht es, Benutzerskripte von den Seiten einer Erweiterung (wie der Hintergrundseite) zu registrieren.

Diese Methode ist der {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}} API-Methode sehr ähnlich (zum Beispiel geben beide ein Promise zurück, das sich zu einem API-Objekt auflöst, welches eine {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}}-Methode zum Abmelden des Skripts enthält). Es gibt jedoch Unterschiede bei den unterstützten Optionen.

Dies ist eine asynchrone Methode, die ein {{JSxRef("Promise")}} zurückgibt.

## Syntax

```js-nolint
const registeredUserScript = await browser.userScripts.register(
  userScriptOptions       // object
);
// …
await registeredUserScript.unregister();
```

### Parameter

- `userScriptOptions`

  - : `object`. Repräsentiert die zu registrierenden Benutzerskripte. Es hat eine ähnliche Syntax wie {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}.

    Das `UserScriptOptions`-Objekt hat die folgenden Eigenschaften:

    - `scriptMetadata` {{Optional_Inline}}
      - : Ein `JSON`-Objekt, das beliebige Metadaten-Eigenschaften enthält, die mit den registrierten Benutzerskripten verknüpft sind. Das Objekt muss jedoch serialisierbar sein, damit es mit dem [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) kompatibel ist. Diese Metadaten werden verwendet, um Details vom Skript zum [API-Skript](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) zu übermitteln, z. B. die Bereitstellung von Details zu einem Teil der APIs, die vom [API-Skript](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) injiziert werden müssen. Die API verwendet diese Metadaten nicht,
    - `allFrames` {{Optional_Inline}}
      - : Dasselbe wie `all_frames` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
    - `cookieStoreId` {{optional_inline}}
      - : Ein Array von Cookie-Store-ID-Strings oder ein String, das eine Cookie-Store-ID enthält. Registriert das Benutzerskript in den Tabs, die zu den Cookie-Store-IDs gehören. Dies ermöglicht es, Skripte für alle Standard- oder nicht-kontextuellen Identitätstabs, private Browsing-Tabs (wenn die [Erweiterung im privaten Modus aktiviert ist](https://support.mozilla.org/de/kb/erweiterungen-im-privaten-modus)), die Tabs einer [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) oder eine Kombination davon zu registrieren.
    - `excludeGlobs` {{Optional_Inline}}
      - : Dasselbe wie `exclude_globs` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
    - `excludeMatches` {{Optional_Inline}}
      - : Dasselbe wie `exclude_matches` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
    - `includeGlobs` {{Optional_Inline}}
      - : Dasselbe wie `include_globs` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
    - `js`
      - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft namens `file`, die eine URL ist, beginnend beim manifest.json der Erweiterung und zeigend auf eine zu registrierende JavaScript-Datei, oder eine Eigenschaft namens `code`, die zu registrierenden JavaScript-Code enthält.
    - `matchAboutBlank` {{Optional_Inline}}
      - : Dasselbe wie `match_about_blank` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
    - `matches`
      - : Dasselbe wie `matches` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.
        Die in `matches` angegebenen URL-Muster müssen durch die im Manifest definierten Hostberechtigungen in der [`permission`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)-Eigenschaft aktiviert sein oder vom Benutzer aus der [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)-Liste aktiviert werden. Wenn zum Beispiel `https://mozilla.org/a` in den Matches enthalten ist, wird ein Skript nur registriert, wenn Hostberechtigungen z. B. `https://mozilla.org/*` enthalten. Wenn das URL-Muster nicht aktiviert ist, schlägt der Aufruf zum Registrieren mit dem Fehler "Permission denied to register a user script for ORIGIN" fehl.
    - `runAt` {{Optional_Inline}}
      - : Dasselbe wie `run_at` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel.

Im Gegensatz zu den Inhaltskript-Optionen hat das userScriptOptions-Objekt keine CSS-Eigenschaft. Verwenden Sie {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}, um Stylesheets dynamisch zu registrieren und zu entfernen.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}-Objekt erfüllt wird, das zur Abmeldung der Benutzerskripte verwendet wird.

> [!NOTE]
> Benutzerskripte werden abgemeldet, wenn die zugehörige Erweiterungsseite (von der die Benutzerskripte registriert wurden) entladen wird, daher sollten Sie Benutzerskripte von einer Erweiterungsseite registrieren, die mindestens so lange bestehen bleibt, wie Sie die Benutzerskripte registriert haben möchten.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}
- {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","RegisteredUserScript.unregister()")}}
