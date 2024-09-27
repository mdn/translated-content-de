---
title: Event.addRules()
slug: Mozilla/Add-ons/WebExtensions/API/events/Event/addRules
l10n:
  sourceCommit: 8bcd10489059539a341f82985eac9f1115e87483
---

{{AddonSidebar}}

Registriert Regeln für ein deklaratives Ereignis.

## Syntax

```js-nolint
events.Event.addRules(rules, callback)
```

### Parameter

- `rules`

  - : `array` von {{WebExtAPIRef("events.Rule")}}. Zu registrierende Regeln. Diese Regeln ersetzen nicht die bereits registrierten Regeln.

- `callback` {{optional_inline}}

  - : `function`. Wird aufgerufen, wenn die Regeln registriert sind. Der Parameter der Callback-Funktion ist ein Array der registrierten {{WebExtAPIRef("events.Rule")}} Objekte.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der `chrome.events` API von Chromium ([Dokumentation bei chrome.events](https://developer.chrome.com/docs/extensions/reference/api/events#method-Event-addRules)). Diese Dokumentation stammt aus [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Die Verbreitung und Nutzung im Quell- und Binärformat, mit oder ohne
// Modifizierung, sind unter den folgenden Bedingungen gestattet:
//
//    * Redistributions des Quellcodes müssen den obigen Copyright-Hinweis,
//      diese Liste von Bedingungen und den folgenden Haftungsausschluss
//      enthalten.
//    * Redistributions in Binärform müssen den obigen Copyright-Hinweis,
//      diese Liste von Bedingungen und den folgenden Haftungsausschluss
//      in der Dokumentation und/oder anderen Materialien, die mit der
//      Verteilung bereitgestellt werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
//      Mitwirkenden dürfen verwendet werden, um Produkte, die aus
//      dieser Software hervorgehen, ohne vorherige schriftliche
//      Genehmigung zu unterstützen oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHTINHABERN UND MITSCHREIBERN
// "WIE BESEHEN" BEREITGESTELLT UND JEDER AUSDRÜCKLICHE ODER STILLSCHWEIGENDE
// GEWÄHRLEISTUNG, EINSCHLIESSLICH, ABER NICHT BEGRENZT AUF, DIE STILLSCHWEIGENDE
// GEWÄHRLEISTUNG DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK
// WIRD ABGELEHNT. IN KEINEM FALL SIND DIE COPYRIGHTINHABER ODER MITSCHREIBER
// HAFTBAR FÜR IRGENDWELCHE DIREKTEN, INDIREKTEN, ZUFÄLLIGEN, SPEZIELLEN,
// EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BEGRENZT AUF,
// DIE BESCHAFFUNG VON ERSATZGÜTERN ODER DIENSTLEISTUNGEN; VERLUST VON NUTZUNG,
// DATEN ODER PROFITEN; ODER GESCHÄFTSUNTERBRECHUNG) JEDOCH VERURSACHT UND
// AUF JEDER HAFTUNGSTHEORIE, OB IN VERTRAG, STRIKTER HAFTUNG, ODER TORT
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE AUF IRGENDEINE WEISE
// AUS DER NUTZUNG DIESER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT
// SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
