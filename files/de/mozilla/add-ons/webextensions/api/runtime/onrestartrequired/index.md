---
title: runtime.onRestartRequired
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onRestartRequired
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine App oder das Gerät, auf dem sie läuft, neu gestartet werden muss. Die App sollte alle ihre Fenster so schnell wie möglich schließen, um den Neustart zu ermöglichen. Wenn die App nichts unternimmt, wird nach einer 24-stündigen Karenzzeit ein Neustart erzwungen. Derzeit wird dieses Ereignis nur für ChromeOS-Kiosk-Apps ausgelöst.

## Syntax

```js-nolint
browser.runtime.onRestartRequired.addListener(listener)
browser.runtime.onRestartRequired.removeListener(listener)
browser.runtime.onRestartRequired.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, dieses Ereignis abzuhören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, sonst `false`.

## addListener-Syntax

### Parameter

- `function`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Die Funktion erhält dieses Argument:

    - `reason`
      - : Ein {{WebExtAPIRef('runtime.OnRestartRequiredReason')}}-Wert — der Grund, warum das Ereignis ausgelöst wird.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onRestartRequired)-API von Chromium. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

<!--
// Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Nutzung in Quell- und Binärform, mit oder ohne
// Änderungen, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weiterverbreitungen des Quellcodes müssen den obigen Urheberrechtshinweis,
// diesen Bedingungen sowie den folgenden Haftungsausschluss enthalten.
//    * Weiterverbreitungen in binärer Form müssen den obigen
// Urheberrechtshinweis, diese Bedingungen sowie den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der
// Verbreitung einhergehen, enthalten.
//    * Weder der Name Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die aus
// dieser Software hervorgehen, zu unterstützen oder zu bewerben, ohne vorherige
// schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITARBEITERN
// "WIE BESEHEN" BEREITGESTELLT, UND JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE STILLSCHWEIGENDEN GARANTIEN DER MARKTGÄNGIGKEIT UND DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL SIND DIE RECHTSINHABER ODER MITARBEITER HAFTBAR FÜR JEGLICHE DIREKTEN, INDIREKTEN, UNFALL-, SONDER-, EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN; NUTZUNGSVERLUST, DATENVERLUST ODER GEWINNVERLUST; GESCHÄFTSUNTERBRECHUNG) JEDOCH VERURSACHT UND UNTER JEGLICHER THEORIE DER HAFTUNG, OB IN VERTRAG, STRIKTER HAFTUNG ODER DELIKT (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE AUF IRGENDEINE WEISE AUS DER NUTZUNG DIESER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
