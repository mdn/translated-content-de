---
title: userScripts.register() (Legacy)
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/register
l10n:
  sourceCommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

{{AddonSidebar}}

> [!WARNING]
> Dies ist die Dokumentation für die veraltete `userScripts`-API. Sie ist in Firefox für Manifest V2 verfügbar. Für Funktionen, die mit User-Skripten in Manifest V3 arbeiten, siehe die neue {{WebExtAPIRef("userScripts")}}-API.

Diese Methode ermöglicht es, User-Skripte von den Seiten einer Erweiterung (wie der Hintergrundseite) aus zu registrieren.

Diese Methode ist der {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}-API-Methode sehr ähnlich (zum Beispiel geben beide ein `Promise` zurück, das auf ein API-Objekt mit einer {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript.unregister","unregister()")}}-Methode zum Deregistrieren des Skripts aufgelöst wird). Es gibt jedoch Unterschiede in den unterstützten Optionen.

Diese Methode ist asynchron und gibt ein {{JSxRef("Promise")}} zurück.

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

  - : `object`. Repräsentiert die zu registrierenden User-Skripte. Es hat eine ähnliche Syntax wie {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}.

    Das `UserScriptOptions`-Objekt hat folgende Eigenschaften:

    - `scriptMetadata` {{Optional_Inline}}
      - : Ein `JSON`-Objekt, das beliebige Metadateneigenschaften enthält, die den registrierten User-Skripten zugeordnet sind. Diese Eigenschaften müssen jedoch serialisierbar sein, damit sie mit [dem strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) kompatibel sind. Diese Metadaten werden verwendet, um Details vom Skript an das [API-Skript](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) zu übermitteln, beispielsweise Details zu einem Subset der APIs, die vom [API-Skript](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) injiziert werden sollen. Die API selbst verwendet diese Metadaten jedoch nicht.
    - `allFrames` {{Optional_Inline}}
      - : Entspricht `all_frames` im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
    - `cookieStoreId` {{optional_inline}}
      - : Ein Array von Cookie-Store-ID-Strings oder ein String, der eine Cookie-Store-ID enthält. Registriert das User-Skript in den Tabs, die zu den Cookie-Store-IDs gehören. Dies ermöglicht es, Skripte für alle Standard- oder nicht-kontextuellen Identitäten von Tabs, für private Tabs (wenn [die Erweiterung im privaten Modus aktiviert ist](https://support.mozilla.org/en-US/kb/extensions-private-browsing)), Tabs einer [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) oder eine Kombination dieser zu registrieren.
    - `excludeGlobs` {{Optional_Inline}}
      - : Entspricht `exclude_globs` im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
    - `excludeMatches` {{Optional_Inline}}
      - : Entspricht `exclude_matches` im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
    - `includeGlobs` {{Optional_Inline}}
      - : Entspricht `include_globs` im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
    - `js`
      - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft namens `file`, die eine URL enthält (beginnend vom `manifest.json` der Erweiterung und zeigend auf eine JavaScript-Datei zum Registrieren), oder eine Eigenschaft namens `code`, die JavaScript-Code enthält, der registriert werden soll.
    - `matchAboutBlank` {{Optional_Inline}}
      - : Entspricht `match_about_blank` im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
    - `matches`
      - : Entspricht `matches` im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
        Die in `matches` bereitgestellten URL-Muster müssen durch die in der Manifestdatei definierten Host-Berechtigungen im [`permission`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)-Eigenschaft aktiviert oder vom Benutzer aus der Liste der [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) aktiviert werden. Wenn beispielsweise `matches` `https://mozilla.org/a` enthält, wird das Skript nur registriert, wenn die Host-Berechtigungen beispielsweise `https://mozilla.org/*` enthalten. Wenn das URL-Muster nicht aktiviert ist, schlägt der Registrierungsvorgang mit der Fehlermeldung "Permission denied to register a user script for ORIGIN" fehl.
    - `runAt` {{Optional_Inline}}
      - : Entspricht `run_at` im Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).

Im Gegensatz zu den Optionen für Content-Skripte hat das `userScriptOptions`-Objekt keine CSS-Eigenschaft. Verwenden Sie {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}, um Stylesheets dynamisch zu registrieren und abzumelden.

### Rückgabewert

Ein {{JSxRef("Promise")}}, der mit einem {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript","RegisteredUserScript")}}-Objekt aufgelöst wird, das zum Deregistrieren der User-Skripte verwendet wird.

> [!NOTE]
> User-Skripte werden abgemeldet, wenn die zugehörige Erweiterungsseite (von der die User-Skripte registriert wurden) entladen wird. Sie sollten daher User-Skripte von einer Erweiterungsseite aus registrieren, die mindestens so lange besteht, wie Sie möchten, dass die User-Skripte registriert bleiben.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}
- {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript.unregister","RegisteredUserScript.unregister()")}}
