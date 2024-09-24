---
title: userScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/register
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{AddonSidebar}}

Diese Methode ermöglicht es, Benutzerskripte von den Seiten einer Erweiterung aus zu registrieren (z.B. der Hintergrundseite).

Diese Methode ähnelt stark der {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}} API-Methode (beispielsweise geben beide ein Versprechen zurück, das zu einem API-Objekt mit einer {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}}-Methode für die Deregistrierung des Skripts aufgelöst wird). Es gibt jedoch Unterschiede in den unterstützten Optionen.

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

  - : `object`. Repräsentiert die zu registrierenden Benutzerskripte. Hat eine ähnliche Syntax wie {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}.

    Das `UserScriptOptions`-Objekt hat die folgenden Eigenschaften:

    - `scriptMetadata` {{Optional_Inline}}
      - : Ein `JSON`-Objekt mit beliebigen Metadaten-Eigenschaften, die mit den registrierten Benutzerskripten verbunden sind. Obwohl beliebig, muss das Objekt serialisierbar sein, um mit [dem Structured Clone Algorithmus.](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) kompatibel zu sein. Diese Metadaten werden verwendet, um Details vom Skript an das [API-Skript](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) weiterzugeben. Zum Beispiel zur Bereitstellung von Details eines Untersetzes der APIs, die durch das [API-Skript](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) injiziert werden müssen. Die API verwendet diese Metadaten nicht.
    - `allFrames` {{Optional_Inline}}
      - : Entspricht `all_frames` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Schlüssel.
    - `cookieStoreId` {{optional_inline}}
      - : Ein Array von Cookie-Store-ID-Strings oder ein String mit einer Cookie-Store-ID. Registriert das Benutzerskript in den Tabs, die zu den Cookie-Store-IDs gehören. Dies ermöglicht die Registrierung von Skripten für alle standardmäßigen oder nicht kontextbezogenen Identität-Tabs, private Browsing-Tabs (wenn die [Erweiterung im privaten Browsen aktiviert ist](https://support.mozilla.org/en-US/kb/extensions-private-browsing)), die Tabs einer [kontextbezogenen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) oder eine Kombination dieser.
    - `excludeGlobs` {{Optional_Inline}}
      - : Entspricht `exclude_globs` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Schlüssel.
    - `excludeMatches` {{Optional_Inline}}
      - : Entspricht `exclude_matches` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Schlüssel.
    - `includeGlobs` {{Optional_Inline}}
      - : Entspricht `include_globs` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Schlüssel.
    - `js`
      - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft namens `file`, die eine URL ist, die bei der manifest.json der Erweiterung beginnt und auf eine zu registrierende JavaScript-Datei verweist, oder eine Eigenschaft namens `code`, die zu registrierenden JavaScript-Code enthält.
    - `matchAboutBlank` {{Optional_Inline}}
      - : Entspricht `match_about_blank` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Schlüssel.
    - `matches`
      - : Entspricht `matches` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Schlüssel.
        Die in `matches` bereitgestellten URL-Muster müssen durch die Host-Berechtigungen im manifest definierten [`permission`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) Eigenschaft oder vom Benutzer aus der Liste der [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) aktiviert werden. Beispielsweise wird ein Skript nur registriert, wenn matches `https://mozilla.org/a` enthält und die Host-Berechtigungen, z.B. `https://mozilla.org/*`, umfassen. Wenn das URL-Muster nicht aktiviert ist, schlägt der Registrierungsaufruf mit dem Fehler "Permission denied to register a user script for ORIGIN" fehl.
    - `runAt` {{Optional_Inline}}
      - : Entspricht `run_at` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Schlüssel.

Im Gegensatz zu den Optionen für Inhalts-Skripte hat das userScriptOptions-Objekt keine CSS-Eigenschaft. Verwenden Sie {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}, um Stylesheets dynamisch zu registrieren und zu deregistrieren.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}-Objekt erfüllt wird, das genutzt wird, um die Benutzerskripte zu deregistrieren.

> [!NOTE]
> Benutzerskripte werden deregistriert, wenn die zugehörige Erweiterungsseite (von der die Benutzerskripte registriert wurden) entladen wird. Daher sollten Sie Benutzerskripte von einer Erweiterungsseite registrieren, die mindestens solange bestehen bleibt, wie Sie möchten, dass die Benutzerskripte registriert bleiben.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}
- {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","RegisteredUserScript.unregister()")}}
