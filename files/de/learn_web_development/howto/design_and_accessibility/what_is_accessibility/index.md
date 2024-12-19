---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Howto/Design_and_accessibility/What_is_accessibility
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
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

Aufgrund physischer oder technischer Einschränkungen können Ihre Besucher Ihre Website möglicherweise nicht so erleben, wie Sie es sich erhofft haben. In diesem Artikel geben wir allgemeine Prinzipien der Barrierefreiheit und erläutern einige Regeln.

## Aktives Lernen

_Es ist noch kein aktives Lernen verfügbar. [Bitte ziehen Sie in Betracht, sich zu beteiligen](/de/docs/MDN/Community/Contributing/Getting_started)._

## Vertiefen Sie Ihr Wissen

### Barrierefreiheit: allgemeine Prinzipien

Wir verbinden Barrierefreiheit möglicherweise zunächst mit negativen Einschränkungen. Dieses Gebäude muss barrierefrei sein, daher muss es diese Vorschriften für Türbreite, Toilettengröße und Aufzugsplatzierung einhalten.

Das ist eine enge Sichtweise auf Barrierefreiheit. Denken Sie daran als eine wunderbare Möglichkeit, Menschen zu befähigen und mehr Kunden zu bedienen. Was können Menschen in Brasilien mit Ihrer englischen Website machen? Können die Menschen mit Smartphones eine schwere, überladene Website durchsuchen, die für einen großen Desktop-Monitor und unbegrenzte Bandbreite ausgelegt ist? Sie werden woanders hingehen. Im Allgemeinen _müssen wir unser Produkt aus den Blickwinkeln aller unserer Zielkunden betrachten und entsprechend anpassen._ Daher Barrierefreiheit.

### Web-Barrierefreiheit

Im spezifischen Kontext des Webs bedeutet Barrierefreiheit, dass jeder von Ihren Inhalten profitieren kann, unabhängig von Behinderung, Standort, technischen Einschränkungen oder anderen Umständen.

Betrachten wir Video:

- Hörbehinderung

  - : Wie profitiert eine hörgeschädigte Person von einem Video? Sie müssen Untertitel bereitstellen — oder noch besser, ein vollständiges Texttranskript.

    Stellen Sie außerdem sicher, dass Personen die Lautstärke ihren individuellen Bedürfnissen entsprechend anpassen können.

- Sehbehinderung
  - : Auch hier sollten Sie ein Texttranskript bereitstellen, das ein Benutzer konsultieren kann, ohne das Video abspielen zu müssen, und eine Audiobeschreibung (eine Off-Screen-Stimme, die beschreibt, was im Video passiert).
- Stopp-Fähigkeit
  - : Benutzer haben möglicherweise Schwierigkeiten, jemanden in einem Video zu verstehen. Lassen Sie sie das Video pausieren, um die Untertitel zu lesen oder die Informationen zu verarbeiten.
- Tastaturkapazität
  - : Ermöglichen Sie es dem Benutzer, in ein Video einzutreten/auszutreten, es abzuspielen und zu pausieren, ohne darin gefangen zu sein.

#### Die Grundlagen der Web-Barrierefreiheit

Einige Notwendigkeiten für grundlegende Web-Barrierefreiheit umfassen:

- Wann immer Ihre Website ein Bild benötigt, um eine Bedeutung zu vermitteln, fügen Sie Text als Alternative für sehgeschädigte Benutzer oder solche mit langsamen Verbindungen hinzu.
- Stellen Sie sicher, dass alle Benutzer grafische Schnittstellen (wie ausklappbare Menüs) ausschließlich mit einer Tastatur bedienen können (z. B. mit Tab-Taste und Return-Taste).
- Geben Sie ein Attribut an, das die Sprache Ihres Inhalts explizit angibt, damit Screenreader Ihren Text richtig lesen.
- Stellen Sie sicher, dass ein Benutzer alle Widgets auf einer Seite ausschließlich mit der Tastatur navigieren kann, ohne gefangen zu werden. (Lassen Sie sie zumindest ein- und austabben.)

Und das ist erst der Anfang.

### Barrierefreiheits-Champions

Seit 1999 betreibt das {{Glossary("W3C", "W3C")}} eine Arbeitsgruppe namens {{Glossary("WAI", "Web Accessibility Initiative")}} (WAI), die durch Richtlinien, Unterstützungsunterlagen und internationale Ressourcen die Barrierefreiheit fördert.

## Weitere Einzelheiten

Bitte beziehen Sie sich auf:

- [Wikipedia-Artikel](https://en.wikipedia.org/wiki/Accessibility) über Barrierefreiheit
- [WAI (W3C's Web Accessibility Initiative)](https://www.w3.org/WAI/)

## Nächste Schritte

Barrierefreiheit kann sowohl das Design als auch die technische Struktur einer Website beeinflussen.

- Aus gestalterischer Sicht empfehlen wir, etwas über das [Designen für alle Arten von Benutzern](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Design_for_all_types_of_users) zu lernen.
- Wenn Sie sich mehr für die technische Seite interessieren, könnten Sie lernen, wie man [Bilder in Webseiten einbettet](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images).
