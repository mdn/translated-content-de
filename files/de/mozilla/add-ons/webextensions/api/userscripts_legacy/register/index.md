---
title: userScripts.register() (Legacy)
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/register
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

> [!WARNING]
> Dies ist die Dokumentation zur veralteten `userScripts` API. Sie ist in Firefox für Manifest V2 verfügbar. Für Funktionen, die mit Benutzerskripts in Manifest V3 arbeiten, siehe die neue {{WebExtAPIRef("userScripts")}} API.

Diese Methode ermöglicht es, Benutzerskripts von den Seiten einer Erweiterung (wie der Hintergrundseite) aus zu registrieren.

Diese Methode ist der {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}} API-Methode sehr ähnlich (beispielsweise geben beide ein Versprechen zurück, das zu einem API-Objekt aufgelöst wird, das eine {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript.unregister","unregister()")}} Methode zum Abmelden des Skripts enthält). Es gibt jedoch Unterschiede in den unterstützten Optionen.

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

  - : `object`. Repräsentiert die zu registrierenden Benutzerskripts. Es hat eine ähnliche Syntax wie {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}.

    Das `UserScriptOptions` Objekt hat folgende Eigenschaften:

    - `scriptMetadata` {{Optional_Inline}}
      - : Ein `JSON` Objekt, das beliebige Metadateneigenschaften enthält, die mit den registrierten Benutzerskripts verknüpft sind. Das Objekt muss jedoch serialisierbar sein, um mit dem [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) kompatibel zu sein. Diese Metadaten werden verwendet, um Details vom Skript an das [API-Skript](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) zu übermitteln. Beispielsweise können Details eines Subsets der APIs bereitgestellt werden, die vom [API-Skript](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) injiziert werden müssen. Die API verwendet diese Metadaten nicht.
    - `allFrames` {{Optional_Inline}}
      - : Entspricht `all_frames` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Schlüssel.
    - `cookieStoreId` {{optional_inline}}
      - : Ein Array von Cookie-Store-ID-Strings oder ein String, der eine Cookie-Store-ID enthält. Registriert das Benutzerskript in den Tabs, die zu den Cookie-Store-IDs gehören. Dies ermöglicht die Registrierung von Skripten für alle Standard- oder nicht-kontextuellen Identitäts-Tabs, private Browsing-Tabs (wenn die [Erweiterung im privaten Modus aktiviert ist](https://support.mozilla.org/de/kb/Erweiterungen-im-privaten-Browsing)), die Tabs einer [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) oder eine Kombination davon.
    - `excludeGlobs` {{Optional_Inline}}
      - : Entspricht `exclude_globs` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Schlüssel.
    - `excludeMatches` {{Optional_Inline}}
      - : Entspricht `exclude_matches` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Schlüssel.
    - `includeGlobs` {{Optional_Inline}}
      - : Entspricht `include_globs` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Schlüssel.
    - `js`
      - : Ein Array von Objekten. Jedes Objekt hat entweder eine Eigenschaft namens `file`, die eine URL ist, die im Manifest.json der Erweiterung beginnt und auf eine JavaScript-Datei verweist, die registriert werden soll, oder eine Eigenschaft namens `code`, die JavaScript-Code enthält, der registriert werden soll.
    - `matchAboutBlank` {{Optional_Inline}}
      - : Entspricht `match_about_blank` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Schlüssel.
    - `matches`
      - : Entspricht `matches` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Schlüssel.
        Die `matches` URL-Muster müssen durch die im Manifest definierten Host-Berechtigungen in der [`permission`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) Eigenschaft aktiviert oder vom Benutzer aus der [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) Liste aktiviert werden. Beispielsweise wird ein Skript nur registriert, wenn Host-Berechtigungen beispielsweise `https://mozilla.org/*` enthalten, wenn `matches` `https://mozilla.org/a` umfasst. Wenn das URL-Muster nicht aktiviert ist, schlägt der Registrierungsvorgang mit dem Fehler "Berechtigung verweigert, um ein Benutzerskript für ORIGIN zu registrieren" fehl.
    - `runAt` {{Optional_Inline}}
      - : Entspricht `run_at` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Schlüssel.

Im Gegensatz zu den Optionen für Inhaltskripts hat das `userScriptOptions`-Objekt keine CSS-Eigenschaft. Verwenden Sie {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}, um Stylesheets dynamisch zu registrieren und abzumelden.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript","RegisteredUserScript")}}-Objekt erfüllt wird, das verwendet wird, um die Benutzerskripts abzumelden.

> [!NOTE]
> Benutzerskripts werden abgemeldet, wenn die zugehörige Erweiterungsseite (von der die Benutzerskripts registriert wurden) entladen wird. Sie sollten also Benutzerskripts von einer Erweiterungsseite aus registrieren, die mindestens so lange bestehen bleibt, wie Sie die Benutzerskripts registriert lassen möchten.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}
- {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript.unregister","RegisteredUserScript.unregister()")}}
