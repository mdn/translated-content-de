---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Howto/Design_and_accessibility/What_is_accessibility
l10n:
  sourceCommit: 1eae3d383ad47b5e21bf25764d1d35487ea52bb8
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

Dieser Artikel führt in die grundlegenden Konzepte hinter der Web-Barrierefreiheit ein.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>Erfahren Sie, was Barrierefreiheit ist und warum sie wichtig ist.</td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Aufgrund physischer oder technischer Einschränkungen können Ihre Besucher Ihre Website möglicherweise nicht so erleben, wie Sie es sich erhofft hatten. In diesem Artikel geben wir allgemeine Prinzipien der Barrierefreiheit und erklären einige Regeln.

## Aktives Lernen

_Es gibt noch kein aktives Lernen. [Bitte erwägen Sie, einen Beitrag zu leisten](/de/docs/MDN/Community/Contributing/Getting_started)._

## Vertiefung

### Barrierefreiheit: allgemeine Prinzipien

Zunächst könnten wir Barrierefreiheit mit negativen Einschränkungen assoziieren. Dieses Gebäude muss barrierefrei sein, daher müssen die Vorschriften zur Türbreite, Toilettengröße und Aufzugsplatzierung eingehalten werden.

Das ist eine enge Sichtweise auf Barrierefreiheit. Denken Sie daran als eine wunderbare Möglichkeit, Menschen zu befähigen und mehr Kunden zu erreichen. Was können die Menschen in Brasilien mit Ihrer englischen Website machen? Können die Menschen mit Smartphones eine schwere, überladene Website durchsuchen, die für einen großen Desktop-Monitor und unbegrenzte Bandbreite gestaltet ist? Sie werden woanders hingehen. Im Allgemeinen _müssen wir unser Produkt aus den Blickwinkeln aller unserer Zielkunden betrachten und entsprechend anpassen._ So entsteht Barrierefreiheit.

### Web-Barrierefreiheit

Im spezifischen Kontext des Webs bedeutet Barrierefreiheit, dass jeder von Ihren Inhalten profitieren kann, unabhängig von Behinderung, Standort, technischen Einschränkungen oder anderen Umständen.

Lassen Sie uns das Video betrachten:

- Hörbehinderung

  - : Wie profitiert eine hörgeschädigte Person von einem Video? Sie müssen Untertitel bereitstellen — oder noch besser, ein vollständiges Texttranskript.

    Stellen Sie außerdem sicher, dass Personen die Lautstärke an ihre individuellen Bedürfnisse anpassen können.

- Sehbehinderung
  - : Erneut, bieten Sie ein Texttranskript, das ein Benutzer konsultieren kann, ohne das Video abspielen zu müssen, und eine Audiobeschreibung (eine Off-Stimme, die beschreibt, was im Video passiert).
- Pausiermöglichkeit
  - : Benutzer haben möglicherweise Schwierigkeiten, jemanden in einem Video zu verstehen. Lassen Sie sie das Video pausieren, um die Untertitel zu lesen oder die Informationen zu verarbeiten.
- Tastensteuerung
  - : Lassen Sie den Benutzer mit der Tabulatortaste in ein Video hinein- und herausnavigieren, es abspielen und pausieren, ohne darin gefangen zu sein.

#### Die Grundlagen der Web-Barrierefreiheit

Einige Voraussetzungen für grundlegende Web-Barrierefreiheit umfassen:

- Wann immer Ihre Seite ein Bild benötigt, um Bedeutung zu vermitteln, fügen Sie einen Text als Alternative für sehbehinderte Nutzer oder solche mit langsamen Verbindungen hinzu.
- Stellen Sie sicher, dass alle Benutzer grafische Schnittstellen (wie aufklappbare Menüs) ausschließlich mit einer Tastatur bedienen können (z.B. mit Tabulator und Eingabetaste).
- Bieten Sie ein Attribut an, das ausdrücklich die Sprache Ihres Inhalts angibt, damit Screenreader Ihren Text richtig vorlesen.
- Stellen Sie sicher, dass ein Benutzer alle Widgets auf einer Seite ausschließlich mit der Tastatur navigieren kann, ohne gefangen zu werden. (Lassen Sie ihn zumindest Tab in und heraus.)

Und das ist erst der Anfang.

### Barrierefreiheits-Champions

Seit 1999 betreibt das {{Glossary("W3C", "W3C")}} eine Arbeitsgruppe namens {{Glossary("WAI", "Web Accessibility Initiative")}} (WAI), die Barrierefreiheit durch Leitlinien, unterstützende Materialien und internationale Ressourcen fördert.

## Weitere Details

Bitte beziehen Sie sich auf:

- [Wikipedia-Artikel](https://en.wikipedia.org/wiki/Accessibility) über Barrierefreiheit
- [WAI (W3C's Web Accessibility Initiative)](https://www.w3.org/WAI/)

## Nächste Schritte

Barrierefreiheit kann sowohl das Design als auch die technische Struktur einer Website beeinflussen.

- Aus gestalterischer Sicht empfehlen wir, sich über das [Gestalten für alle Benutzertypen](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Design_for_all_types_of_users) zu informieren.
- Wenn Sie sich mehr für die technische Seite interessieren, könnten Sie lernen, wie man [Bilder in Webseiten einbettet](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images).
