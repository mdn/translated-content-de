---
title: webNavigation.TransitionType
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/TransitionType
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ursache der Navigation: Zum Beispiel, der Benutzer klickte auf einen Link, oder tippte eine Adresse ein oder klickte auf ein Lesezeichen.

Beachten Sie, dass viele Werte hier derzeit in Firefox nicht unterstützt werden: Einzelheiten finden Sie in der [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- "link"
  - : Der Benutzer klickte auf einen Link in einer anderen Seite.
- "typed"
  - : Der Benutzer tippte die URL in die Adressleiste ein. Dies wird auch verwendet, wenn der Benutzer anfängt, in die Adressleiste zu tippen, dann eine URL aus den vorgeschlagenen Einträgen auswählt. Siehe auch "generated".
- "auto_bookmark"
  - : Der Benutzer klickte auf ein Lesezeichen oder einen Eintrag im Browserverlauf.
- "auto_subframe"
  - : Alle verschachtelten iframes, die automatisch von ihrem Elternteil geladen werden.
- "manual_subframe"
  - : Alle verschachtelten iframes, die als explizite Benutzeraktion geladen werden. Das Laden eines solchen iframes erzeugt einen Eintrag in der Rück-/Vorlauf-Navigation.
- "generated"
  - : Der Benutzer begann, in die Adressleiste zu tippen, dann klickte er auf einen vorgeschlagenen Eintrag, der keine URL enthielt.
- "start_page"
  - : Die Seite wurde der Befehlszeile übergeben oder ist die Startseite.
- "form_submit"
  - : Der Benutzer sendete ein Formular ab. Beachten Sie, dass in manchen Situationen, wie wenn ein Formular ein Skript verwendet, um seine Inhalte zu senden, das Abschicken eines Formulars nicht zu diesem Übergangstyp führt.
- "reload"
  - : Der Benutzer lud die Seite neu, indem er die Neuladen-Schaltfläche verwendete oder Enter in der Adressleiste drückte. Dies wird auch für Sitzungswiederherstellung und das erneute Öffnen geschlossener Tabs verwendet.
- "keyword"
  - : Die URL wurde durch eine vom Benutzer konfigurierte [Schlüsselwortsuche](https://support.mozilla.org/en-US/kb/how-search-from-address-bar) generiert.
- "keyword_generated"
  - : Entspricht einem Besuch, der für ein Schlüsselwort generiert wurde.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#type-TransitionType) API von Chromium. Diese Dokumentation stammt aus [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.

<!--
// Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Nutzung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weiterverbreitungen des Quellcodes müssen das obige Urheberrecht
// sowie diese Liste der Bedingungen und den folgenden Haftungsausschluss beibehalten.
//    * Weiterverbreitungen in binärer Form müssen das obige
// Urheberrecht, diese Liste der Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der
// Verteilung bereitgestellt werden, beibehalten.
//    * Weder der Name von Google Inc. noch die Namen
// seiner Mitwirkenden dürfen verwendet werden, um Produkte, die von
// dieser Software abgeleitet wurden, zu unterstützen oder zu bewerben, ohne vorherige spezifische
// schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZITE
// GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF
// DIE IMPLIZIERTEN GEWÄHRLEISTUNGEN DER MARKTFÄHIGKEIT UND EIGNUNG FÜR
// EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL HAFTEN DIE
// URHEBERRECHTSINHABER ODER MITWIRKENDEN FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE,
// BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN;
// NUTZUNGSVERLUST, DATEN- ODER GEWINNVERLUST; ODER GESCHÄFTSUNTERBRECHUNG)
// UNABHÄNGIG DAVON, OB IM RAHMEN EINES VERTRAGS, EINER STRENGEN HAFTUNG ODER EINER
// UNERLAUBTEN HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG),
// DIE AUF IRGENDEINE WEISE AUS DER NUTZUNG DIESER SOFTWARE ENTSTEHEN,
// SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
