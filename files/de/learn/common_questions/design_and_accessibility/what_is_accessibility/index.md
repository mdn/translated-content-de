---
title: Was ist Barrierefreiheit?
slug: Learn/Common_questions/Design_and_accessibility/What_is_accessibility
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel führt in die grundlegenden Konzepte der Web-Barrierefreiheit ein.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, was Barrierefreiheit ist und warum sie wichtig ist.</td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Aufgrund physischer oder technischer Einschränkungen können Ihre Besucher Ihre Website möglicherweise nicht so erleben, wie Sie es sich erhofft haben. In diesem Artikel geben wir allgemeine Grundsätze zur Barrierefreiheit und erläutern einige Regeln.

## Aktives Lernen

_Es stehen noch keine aktiven Lerninhalte zur Verfügung. [Bitte erwägen Sie eine Mitarbeit](/de/docs/MDN/Community/Contributing/Getting_started)._

## Vertiefen

### Barrierefreiheit: allgemeine Grundsätze

Wir könnten Barrierefreiheit zunächst mit negativen Einschränkungen assoziieren. Dieses Gebäude muss barrierefrei sein, daher muss es diesen Vorschriften für Türbreite, Toilettengröße und Aufzugplatzierung entsprechen.

Das ist eine enge Sichtweise auf Barrierefreiheit. Denken Sie daran als eine wunderbare Möglichkeit, Menschen zu unterstützen und mehr Kunden zu bedienen. Was können die Menschen in Brasilien mit Ihrer englischen Website anfangen? Können die Menschen mit Smartphones eine schwere, überladene Website besuchen, die für einen großen Desktop-Monitor und unbegrenzte Bandbreite ausgelegt ist? Sie werden woanders hingehen. Im Allgemeinen _müssen wir über unser Produkt aus den Blickwinkeln aller unserer Zielkunden nachdenken und es entsprechend anpassen_. Daher die Barrierefreiheit.

### Web-Barrierefreiheit

Im speziellen Kontext des Webs bedeutet Barrierefreiheit, dass jeder von Ihren Inhalten profitieren kann, unabhängig von Behinderung, Standort, technischen Einschränkungen oder anderen Umständen.

Betrachten wir das Thema Video:

- Gehörlosigkeit

  - : Wie profitiert eine gehörlose Person von einem Video? Sie müssen Untertitel bereitstellen — oder noch besser, eine vollständige Textabschrift.

    Stellen Sie außerdem sicher, dass die Lautstärke anpassbar ist, um den individuellen Bedürfnissen gerecht zu werden.

- Sehbehinderung
  - : Bieten Sie auch hier eine Textabschrift an, die ein Benutzer konsultieren kann, ohne das Video abspielen zu müssen, und eine Audiodeskription (eine Off-Stimme, die beschreibt, was im Video passiert).
- Pausierfähigkeit
  - : Benutzer haben möglicherweise Probleme, jemanden in einem Video zu verstehen. Lassen Sie sie das Video pausieren, um die Untertitel zu lesen oder die Informationen zu verarbeiten.
- Tastaturkapazität
  - : Ermöglichen Sie dem Benutzer, in ein Video hinein- und herauszutabben, es abzuspielen und zu pausieren, ohne darin gefangen zu werden.

#### Die Grundlagen der Web-Barrierefreiheit

Einige Notwendigkeiten für grundlegende Web-Barrierefreiheit sind:

- Wann immer Ihre Website ein Bild benötigt, um Bedeutung zu vermitteln, fügen Sie einen Text als Alternative für sehbehinderte Benutzer oder diejenigen mit langsamen Verbindungen hinzu.
- Stellen Sie sicher, dass alle Benutzer grafische Schnittstellen (wie sich öffnende Menüs) ausschließlich mit einer Tastatur bedienen können (z. B. mit Tab und Return-Taste).
- Geben Sie ein Attribut an, das die Sprache Ihrer Inhalte explizit angibt, damit Screenreader Ihren Text korrekt vorlesen.
- Stellen Sie sicher, dass ein Benutzer zu allen Widgets auf einer Seite ausschließlich mit der Tastatur navigieren kann, ohne steckenzubleiben. (Lassen Sie ihn zumindest hinein- und heraus-tabben.)

Und das ist erst der Anfang.

### Barrierefreiheits-Champions

Seit 1999 betreibt das [W3C](/de/docs/Glossary/W3C) eine Arbeitsgruppe namens [Web Accessibility Initiative](/de/docs/Glossary/WAI) (WAI), die Barrierefreiheit durch Richtlinien, Unterstützungsmaterialien und internationale Ressourcen fördert.

## Weitere Details

Bitte beachten Sie:

- [Wikipedia-Artikel](https://en.wikipedia.org/wiki/Accessibility) über Barrierefreiheit
- [WAI (W3C's Web Accessibility Initiative)](https://www.w3.org/WAI/)

## Nächste Schritte

Barrierefreiheit kann sowohl das Design als auch die technische Struktur einer Website beeinflussen.

- Aus einer Designperspektive empfehlen wir, mehr über das [Design für alle Benutzergruppen](/de/docs/Learn/Common_questions/Design_and_accessibility/Design_for_all_types_of_users) zu erfahren.
- Wenn Sie sich mehr für die technische Seite interessieren, könnten Sie lernen, wie man [Bilder in Webseiten einbettet](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML).
