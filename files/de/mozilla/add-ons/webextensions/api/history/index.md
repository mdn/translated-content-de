---
title: history
slug: Mozilla/Add-ons/WebExtensions/API/history
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Verwenden Sie die `history`-API, um mit dem Browserverlauf zu interagieren.

Wenn Sie Informationen über den Browserverlauf der Sitzung suchen, lesen Sie die [History-Schnittstelle](/de/docs/Web/API/History).

> [!NOTE]
> Downloads werden als [`HistoryItem`](/de/docs/Mozilla/Add-ons/WebExtensions/API/history/HistoryItem)-Objekte behandelt. Daher werden Ereignisse wie [`history.onVisited`](/de/docs/Mozilla/Add-ons/WebExtensions/API/history/onVisited) für Downloads ausgelöst.

Der Browserverlauf ist ein chronologischer Verlauf der Seiten, die der Benutzer besucht hat. Die history-API ermöglicht es Ihnen:

- [nach Seiten, die im Browserverlauf erscheinen, zu suchen](/de/docs/Mozilla/Add-ons/WebExtensions/API/history/search)
- [einzelne Seiten aus dem Browserverlauf zu entfernen](/de/docs/Mozilla/Add-ons/WebExtensions/API/history/deleteUrl)
- [Seiten zum Browserverlauf hinzuzufügen](/de/docs/Mozilla/Add-ons/WebExtensions/API/history/addUrl)
- [alle Seiten aus dem Browserverlauf zu entfernen](/de/docs/Mozilla/Add-ons/WebExtensions/API/history/deleteAll).

Allerdings kann der Benutzer eine einzelne Seite mehrmals besucht haben, daher hat die API auch das Konzept der "Besuche". So können Sie mit dieser API auch:

- [die komplette Reihe von Besuchen abrufen, die der Benutzer zu einer bestimmten Seite gemacht hat](/de/docs/Mozilla/Add-ons/WebExtensions/API/history/getVisits)
- [Besuche auf irgendeiner Seite während eines bestimmten Zeitraums entfernen](/de/docs/Mozilla/Add-ons/WebExtensions/API/history/deleteRange).

Um diese API zu verwenden, muss eine Erweiterung die "history"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei anfordern.

## Typen

- {{WebExtAPIRef("history.TransitionType")}}
  - : Beschreibt, wie der Browser zu einer bestimmten Seite navigierte.
- {{WebExtAPIRef("history.HistoryItem")}}
  - : Bietet Informationen zu einer bestimmten Seite im Browserverlauf.
- {{WebExtAPIRef("history.VisitItem")}}
  - : Beschreibt einen einzelnen Besuch auf einer Seite.

## Funktionen

- {{WebExtAPIRef("history.search()")}}
  - : Sucht im Browserverlauf nach [`history.HistoryItem`](/de/docs/Mozilla/Add-ons/WebExtensions/API/history/HistoryItem)-Objekten, die den gegebenen Kriterien entsprechen.
- {{WebExtAPIRef("history.getVisits()")}}
  - : Ruft Informationen über Besuche zu einer bestimmten Seite ab.
- {{WebExtAPIRef("history.addUrl()")}}
  - : Fügt einen Eintrag zum Browserverlauf eines Besuchs der gegebenen Seite hinzu.
- {{WebExtAPIRef("history.deleteUrl()")}}
  - : Entfernt alle Besuche zur gegebenen URL aus dem Browserverlauf.
- {{WebExtAPIRef("history.deleteRange()")}}
  - : Entfernt alle Besuche auf Seiten, die der Benutzer während des angegebenen Zeitraums gemacht hat.
- {{WebExtAPIRef("history.deleteAll()")}}
  - : Entfernt alle Besuche aus dem Browserverlauf.

## Ereignisse

- {{WebExtAPIRef("history.onTitleChanged")}}
  - : Wird ausgelöst, wenn der Titel einer vom Benutzer besuchten Seite aufgezeichnet wird.
- {{WebExtAPIRef("history.onVisited")}}
  - : Wird jedes Mal ausgelöst, wenn der Benutzer eine Seite besucht, und stellt die {{WebExtAPIRef("history.HistoryItem")}}-Daten für diese Seite bereit.
- {{WebExtAPIRef("history.onVisitRemoved")}}
  - : Wird ausgelöst, wenn eine URL vollständig aus dem Browserverlauf entfernt wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history)-API von Chromium. Diese Dokumentation stammt aus [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code.

<!--
// Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Verteilung und Nutzung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weiterverteilungen des Quellcodes müssen das obige Urheberrecht
// und diese Bedingungen sowie den folgenden Haftungsausschluss enthalten.
//    * Weiterverteilungen in Binärform müssen das obige Urheberrecht
// und diese Bedingungen sowie den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderen Materialien, die mit der Verteilung
// gegeben werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser
// Software abgeleitet sind, zu unterstützen oder zu bewerben, ohne
// vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHTINHABERN UND
// MITWIRKENDEN "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE
// AUSDRÜCKLICHE ODER STILLSCHWEIGENDE GEWÄHRLEISTUNGEN, EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF DIE STILLSCHWEIGENDE GEWÄHRLEISTUNG DER
// MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN
// ABGELEHNT. IN KEINEM FALL SIND DIE URHEBER ODER MITWIRKENDEN
// HAFTBAR FÜR DIREKTE, INDIREKTE, BEILÄUFIGE, BESONDERE,
// BEISPIELHAFTE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER -DIENSTLEISTUNGEN;
// NUTZUNGSVERLUST, DATEN- ODER GEWINNVERLUST; ODER
// BETRIEBSUNTERBRECHUNG), WIE AUCH IMMER DIESE VERURSACHT WERDEN UND
// UNTER WELCHER HAFTUNGSTHEORIE, SEI ES IN VERTRAG, STRIKTER HAFTUNG
// ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER
// ANDERWEITIG), DIE IN IRGENDEINER WEISE AUS DER VERWENDUNG DIESER
// SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN
// HINGEWIESEN WURDE.
-->
