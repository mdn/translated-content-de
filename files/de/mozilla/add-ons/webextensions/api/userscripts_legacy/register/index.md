---
title: userScripts.register() (Legacy)
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/register
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

> [!WARNING]
> Dies ist die Dokumentation für die veraltete `userScripts` API. Sie ist in Firefox für Manifest V2 verfügbar. Für Funktionalität mit Benutzerskripten in Manifest V3 siehe die neue {{WebExtAPIRef("userScripts")}} API.

Diese Methode ermöglicht es, Benutzerskripte von den Seiten einer Erweiterung aus zu registrieren (wie z.B. die Hintergrundseite).

Diese Methode ist der {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}} API-Methode sehr ähnlich (z.B. geben beide ein Versprechen zurück, das zu einem API-Objekt mit einer {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript.unregister","unregister()")}}-Methode aufgelöst wird, um das Skript zu deregistrieren). Es gibt jedoch Unterschiede in den unterstützten Optionen.

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
      - : Ein `JSON`-Objekt mit beliebigen Metadateneigenschaften, die den registrierten Benutzerskripten zugeordnet sind. Obwohl beliebig, muss das Objekt serialisierbar sein, sodass es mit [dem Structured Clone Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) kompatibel ist. Diese Metadaten werden verwendet, um Details vom Skript an das [API-Skript](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) zu übermitteln. Zum Beispiel zur Bereitstellung von Details zu einer Untermenge der APIs, die vom [API-Skript](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) injiziert werden müssen. Die API selbst verwendet diese Metadaten nicht,
    - `allFrames` {{Optional_Inline}}
      - : Entspricht `all_frames` im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
    - `cookieStoreId` {{optional_inline}}
      - : Ein Array von Cookie Store ID-Strings oder ein String, der eine Cookie Store ID enthält. Registriert das Benutzerskript in den Tabs, die zu den Cookie Store IDs gehören. Dies ermöglicht die Registrierung von Skripten für alle Standard- oder nicht-kontextbezogenen Identitäts-Tabs, private Browsing-Tabs (wenn die [Erweiterung im privaten Browsing aktiviert ist](https://support.mozilla.org/en-US/kb/extensions-private-browsing)), die Tabs einer [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) oder eine Kombination davon.
    - `excludeGlobs` {{Optional_Inline}}
      - : Entspricht `exclude_globs` im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
    - `excludeMatches` {{Optional_Inline}}
      - : Entspricht `exclude_matches` im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
    - `includeGlobs` {{Optional_Inline}}
      - : Entspricht `include_globs` im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
    - `js`
      - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft namens `file`, die eine URL darstellt, die bei der manifest.json der Erweiterung beginnt und auf eine JavaScript-Datei zeigt, die registriert werden soll, oder eine Eigenschaft namens `code`, die JavaScript-Code enthält, der registriert werden soll.
    - `matchAboutBlank` {{Optional_Inline}}
      - : Entspricht `match_about_blank` im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
    - `matches`
      - : Entspricht `matches` im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
        Die in `matches` bereitgestellten URL-Muster müssen durch die im Manifest [`permission`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) definierten Host-Berechtigungen aktiviert oder vom Benutzer aus der Liste der [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) aktiviert sein. Zum Beispiel, wenn matches `https://mozilla.org/a` enthält, wird ein Skript nur registriert, wenn die Host-Berechtigungen beispielsweise `https://mozilla.org/*` enthalten. Wenn das URL-Muster nicht aktiviert ist, schlägt der Aufruf zur Registrierung mit dem Fehler "Permission denied to register a user script for ORIGIN" fehl.
    - `runAt` {{Optional_Inline}}
      - : Entspricht `run_at` im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).

Im Gegensatz zu den content script options hat das userScriptOptions-Objekt keine CSS-Eigenschaft. Verwenden Sie {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}, um Stylesheets dynamisch zu registrieren und zu deregistrieren.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript","RegisteredUserScript")}}-Objekt erfüllt wird, das zum Deregistrieren der Benutzerskripte verwendet wird.

> [!NOTE]
> Benutzerskripte werden abgemeldet, wenn die zugehörige Erweiterungsseite (von der die Benutzerskripte registriert wurden) entladen wird, daher sollten Sie Benutzerskripte von einer Erweiterungsseite aus registrieren, die mindestens so lange bestehen bleibt, wie Sie die Benutzerskripte registriert bleiben sollen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}
- {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript.unregister","RegisteredUserScript.unregister()")}}
