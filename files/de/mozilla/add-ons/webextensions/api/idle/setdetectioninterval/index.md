---
title: idle.setDetectionInterval()
slug: Mozilla/Add-ons/WebExtensions/API/idle/setDetectionInterval
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Legt das Intervall in Sekunden fest, das verwendet wird, um zu bestimmen, wann das System für {{WebExtAPIRef("idle.onStateChanged")}}-Ereignisse in einem Ruhezustand ist. Das Standardintervall beträgt 60 Sekunden.

Das Erkennungsintervall ist spezifisch für die Erweiterung, die die Methode aufruft. Wenn das Intervall in einer Erweiterung geändert wird, beeinflusst dies nicht das Erkennungsintervall einer anderen Erweiterung.

## Syntax

```js-nolint
browser.idle.setDetectionInterval(
  intervalInSeconds // integer
)
```

### Parameter

- `intervalInSeconds`
  - : `integer`. Schwellenwert in Sekunden, der verwendet wird, um zu bestimmen, wann das System in einem Ruhezustand ist. Der Mindestwert, den Sie hier angeben können, beträgt 15.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
browser.idle.setDetectionInterval(15);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.idle`](https://developer.chrome.com/docs/extensions/reference/api/idle#method-setDetectionInterval) API. Diese Dokumentation stammt von [`idle.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/idle.json) im Chromium-Code.

<!--
// Urheberrecht 2015 Die Chromium-Autoren. Alle Rechte vorbehalten.
//
// Redistribution und Nutzung in Quell- und Binärform, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen gestattet:
//
//    * Weiterverteilungen des Quellcodes müssen den obigen Urheberrechtshinweis,
// diese Liste der Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverteilungen in binärer Form müssen den obigen Urheberrechtshinweis,
// diese Liste der Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderen Materialien enthalten, die mit der
// Verteilung bereitgestellt werden.
//    * Weder der Name Google Inc. noch die Namen seiner
// Beitragenden dürfen verwendet werden, um Produkte, die von dieser
// Software abgeleitet sind, zu unterstützen oder zu bewerben, ohne
// vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND BEITRAGENDEN
// "WIE BESEHEN" BEREITGESTELLT, UND JEGLICHE AUSDRÜCKLICHEN ODER
// IMPLIZIERTEN GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF DIE IMPLIZIERTEN GEWÄHRLEISTUNGEN DER
// MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK,
// SIND AUSGESCHLOSSEN. IN KEINEM FALL HAFTEN DIE
// URHEBERRECHTSINHABER ODER BEITRAGENDEN FÜR JEGLICHE DIREKTEN,
// INDIREKTEN, ZUFÄLLIGEN, BESONDEREN, EXEMPLARISCHEN ODER
// FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE
// BESCHAFFUNG VON ERSATZGÜTERN ODER DIENSTLEISTUNGEN; NUTZUNGSVERLUST,
// DATENVERLUST ODER ENTGANGENEN GEWINN; ODER
// BETRIEBSUNTERBRECHUNG) IN IRGENDEINER WEISE UND UNTER
// JEGLICHER HAFTUNGSTHEORIE, OB VERTRAG, STRIKTE HAFTUNG ODER
// UNERLAUBTE HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER
// SONSTIGEM), DIE AUF IRGENDEINE WEISE AUS DER NUTZUNG DER
// SOFTWARE ENTSTANDEN SIND, SELBST WENN ÜBER DIE MÖGLICHKEIT
// SOLCHER SCHÄDEN INFORMIERT WURDE.
-->
