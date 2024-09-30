---
title: runtime.onInstalled
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn die Erweiterung erstmals installiert wird, wenn die Erweiterung auf eine neue Version aktualisiert wird und wenn der Browser auf eine neue Version aktualisiert wird.

Beachten Sie, dass `runtime.onInstalled` nicht dasselbe ist wie {{WebExtAPIRef("management.onInstalled")}}. Das `runtime.onInstalled`-Ereignis wird nur für Ihre Erweiterung ausgelöst. Das `browser.management.onInstalled`-Ereignis wird für jede Erweiterung ausgelöst.

## Syntax

```js-nolint
browser.runtime.onInstalled.addListener(listener)
browser.runtime.onInstalled.removeListener(listener)
browser.runtime.onInstalled.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn gelauscht wird, andernfalls `false`.

## addListener-Syntax

### Parameter

- `function`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `details`

      - : Ein Objekt mit den folgenden Eigenschaften:

        - `id` {{optional_inline}}
          - : `string`. Die ID der importierten, aktualisierten, gemeinsam genutzten Module-Erweiterung. Dies ist nur vorhanden, wenn der `reason`-Wert `shared_module_update` ist.
        - `previousVersion` {{optional_inline}}
          - : `string`. Die vorherige Version der soeben aktualisierten Erweiterung. Dies ist nur vorhanden, wenn der `reason`-Wert `update` ist.
        - `reason`
          - : Ein {{WebExtAPIRef('runtime.OnInstalledReason')}}-Wert, der den Grund angibt, warum dieses Ereignis ausgelöst wird.
        - `temporary`
          - : `boolean`. Wahr, wenn das Add-on vorübergehend installiert wurde. Zum Beispiel durch Verwendung der "about:debugging"-Seite in Firefox oder durch Verwendung von [web-ext run](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/). Andernfalls falsch.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Wenn die Erweiterung installiert wird, protokollieren Sie den Installationsgrund und öffnen Sie <https://example.com>:

```js
function handleInstalled(details) {
  console.log(details.reason);
  browser.tabs.create({
    url: "https://example.com",
  });
}

browser.runtime.onInstalled.addListener(handleInstalled);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onInstalled)-API von Chromium. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Nutzung in sowohl Quell- als auch Binärform, mit oder ohne
// Modifizierungen, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weiterverbreitungen des Quellcodes müssen den obigen Urheberrechtsvermerk,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverbreitungen in binärer Form müssen den obigen Urheberrechtsvermerk,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderen Materialien, die mit der Verbreitung bereitgestellt werden,
// enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte zu unterstützen oder zu bewerben,
// die von dieser Software abgeleitet sind ohne vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE GEWÄHRLEISTUNGEN,
// INKLUSIVE, ABER NICHT BESCHRÄNKT AUF DIE STILLSCHWEIGENDEN GEWÄHRLEISTUNGEN
// DER MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL
// SOLLEN DIE EIGENTÜMER ODER MITWIRKENDEN FÜR JEGLICHE DIREKTE, INDIREKTE,
// ZUFÄLLIGE, SPEZIELLE, EXEMPLARISCHE ODER FOLGESCHÄDEN HAFTBAR SEIN (EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER -DIENSTLEISTUNGEN;
// NUTZUNGSAUSFALL, DATENVERLUST ODER GEWINNVERLUST; ODER BETRIEBSUNTERBRECHUNGEN) WIE AUCH IMMER VERURSACHT UND
// AUF JEDER HAFTUNGSTHEORIE, OB VERTRAGLICH, VERSCHULDENSUNABHÄNGIG ODER UNERLAUBT (EINSCHLIESSLICH
// FAHRLÄSSIGKEIT ODER ANDERWEITIG) ENTSTEHEN, SELBST WENN ÜBER DIE MÖGLICHKEIT SOLCHER SCHÄDEN INFORMIERT.
-->
