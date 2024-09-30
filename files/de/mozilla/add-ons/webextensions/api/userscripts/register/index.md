---
title: userScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/register
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{AddonSidebar}}

Diese Methode ermöglicht es, Benutzerskripte von den Seiten einer Erweiterung (wie der Hintergrundseite) zu registrieren.

Diese Methode ist sehr ähnlich zur {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}} API-Methode (beispielsweise geben beide ein Versprechen zurück, das in ein API-Objekt aufgelöst wird, welches eine {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}}-Methode zum Abmelden des Skripts enthält). Es gibt jedoch Unterschiede in den unterstützten Optionen.

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

  - : `object`. Stellt die zu registrierenden Benutzerskripte dar. Es hat eine ähnliche Syntax wie {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}.

    Das `UserScriptOptions`-Objekt hat die folgenden Eigenschaften:

    - `scriptMetadata` {{Optional_Inline}}
      - : Ein `JSON`-Objekt, das beliebige Metadateneigenschaften enthält, die mit den registrierten Benutzerskripten verbunden sind. Dieses Objekt muss jedoch serialisierbar sein, um mit dem [strukturieren Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) kompatibel zu sein. Diese Metadaten werden verwendet, um Details vom Skript an das [API-Skript](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) zu übermitteln. Zum Beispiel, um Details zu einer Teilmenge der APIs bereitzustellen, die vom [API-Skript](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) injiziert werden müssen. Die API verwendet diese Metadaten nicht.
    - `allFrames` {{Optional_Inline}}
      - : Entspricht `all_frames` im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
    - `cookieStoreId` {{optional_inline}}
      - : Ein Array von Cookie-Store-ID-Strings oder ein String, der eine Cookie-Store-ID enthält. Registriert das Benutzerskript in den Tabs, die zu den Cookie-Store-IDs gehören. Dies ermöglicht es, Skripte für alle Standard- oder nicht kontextuellen Identitätstabs, private Browsing-Tabs (wenn die [Erweiterung im privaten Modus aktiviert ist](https://support.mozilla.org/de/kb/extensions-private-browsing)), die Tabs einer [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), oder eine Kombination daraus zu registrieren.
    - `excludeGlobs` {{Optional_Inline}}
      - : Entspricht `exclude_globs` im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
    - `excludeMatches` {{Optional_Inline}}
      - : Entspricht `exclude_matches` im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
    - `includeGlobs` {{Optional_Inline}}
      - : Entspricht `include_globs` im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
    - `js`
      - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft namens `file`, die eine URL ab dem `manifest.json` der Erweiterung ist und auf eine JavaScript-Datei verweist, die registriert werden soll, oder eine Eigenschaft namens `code`, die JavaScript-Code enthält, der registriert werden soll.
    - `matchAboutBlank` {{Optional_Inline}}
      - : Entspricht `match_about_blank` im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
    - `matches`
      - : Entspricht `matches` im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts). Die in `matches` angegebenen URL-Muster müssen durch die Host-Berechtigungen aktiviert sein, die in der Manifest-Eigenschaft [`permission`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) definiert sind, oder vom Benutzer aus der Liste der [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) aktiviert werden. Zum Beispiel, wenn `matches` `https://mozilla.org/a` enthält, wird ein Skript nur registriert, wenn Host-Berechtigungen beispielsweise `https://mozilla.org/*` beinhalten. Wenn das URL-Muster nicht aktiviert ist, schlägt der Registrierungsaufruf mit dem Fehler "Permission denied to register a user script for ORIGIN" fehl.
    - `runAt` {{Optional_Inline}}
      - : Entspricht `run_at` im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).

Im Gegensatz zu den Optionen von Inhalteskripten hat das userScriptOptions-Objekt keine CSS-Eigenschaft. Verwenden Sie {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}, um Stylesheets dynamisch zu registrieren und abzumelden.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}-Objekt erfüllt wird, das verwendet wird, um die Benutzerskripte abzumelden.

> [!NOTE]
> Benutzerskripte werden abgemeldet, wenn die zugehörige Erweiterungsseite (von der die Benutzerskripte registriert wurden) entladen wird. Daher sollten Sie Benutzerskripte von einer Erweiterungsseite registrieren, die mindestens so lange bestehen bleibt, wie Sie die Benutzerskripte registriert haben möchten.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}
- {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","RegisteredUserScript.unregister()")}}
