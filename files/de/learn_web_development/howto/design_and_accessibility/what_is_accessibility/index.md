---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Howto/Design_and_accessibility/What_is_accessibility
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

Dieser Artikel führt in die grundlegenden Konzepte der Barrierefreiheit im Web ein.

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

Aufgrund physischer oder technischer Einschränkungen können Ihre Besucher Ihre Website möglicherweise nicht so erleben, wie Sie es sich erhofft hatten. In diesem Artikel geben wir allgemeine Grundsätze der Barrierefreiheit und erklären einige Regeln.

## Aktives Lernen

_Es ist noch kein aktives Lernen verfügbar. [Bitte erwägen Sie, einen Beitrag zu leisten](/de/docs/MDN/Community/Getting_started)._

## Tiefergehende Informationen

### Barrierefreiheit: allgemeine Grundsätze

Wir bringen Barrierefreiheit möglicherweise zunächst mit negativen Einschränkungen in Verbindung. Dieses Gebäude muss zugänglich sein, also muss es diese Vorschriften für Türbreite, Toilettengröße und Fahrstuhlplatzierung einhalten.

Das ist eine enge Sichtweise auf Barrierefreiheit. Denken Sie daran als eine wunderbare Möglichkeit, Menschen zu befähigen und mehr Kunden zu bedienen. Was können die Menschen in Brasilien mit Ihrer englischen Website anfangen? Können die Menschen mit Smartphones auf einer überladenen Website surfen, die für große Desktop-Monitore mit unbegrenzter Bandbreite entwickelt wurde? Sie werden woanders hingehen. Im Allgemeinen _müssen wir unser Produkt aus den Blickwinkeln aller unserer Zielkunden betrachten und entsprechend anpassen._ Daher Barrierefreiheit.

### Barrierefreiheit im Web

Im spezifischen Kontext des Webs bedeutet Barrierefreiheit, dass jeder von Ihrem Inhalt profitieren kann, unabhängig von Behinderung, Standort, technischen Einschränkungen oder anderen Umständen.

Betrachten wir Video:

- Schwerhörigkeit

  - : Wie profitiert eine hörgeschädigte Person von einem Video? Sie müssen Untertitel bereitstellen — oder noch besser, ein vollständiges Transkript.

    Stellen Sie auch sicher, dass die Leute die Lautstärke an ihre individuellen Bedürfnisse anpassen können.

- Sehbehinderung
  - : Auch hier ein Texttranskript bereitstellen, das ein Benutzer einsehen kann, ohne das Video abspielen zu müssen, sowie eine Audio-Beschreibung (eine Stimme außerhalb des Bildschirms, die beschreibt, was im Video passiert).
- Unterbrechungsfähigkeit
  - : Benutzer können Schwierigkeiten haben, jemanden in einem Video zu verstehen. Lassen Sie sie das Video anhalten, um die Untertitel zu lesen oder die Informationen zu verarbeiten.
- Tastaturbedienbarkeit
  - : Erlauben Sie dem Benutzer, mit der Tabulatortaste in ein Video hinein- und herauszufahren, es abzuspielen und zu pausieren, ohne darin gefangen zu sein.

#### Die Grundlagen der Barrierefreiheit im Web

Einige Notwendigkeiten für grundlegende Barrierefreiheit im Web umfassen:

- Wann immer Ihre Website ein Bild benötigt, um Bedeutung zu vermitteln, fügen Sie für sehbehinderte Nutzer oder solche mit langsamer Verbindung einen Text als Alternative hinzu.
- Stellen Sie sicher, dass alle Benutzer grafische Oberflächen (wie ausklappbare Menüs) ausschließlich mit einer Tastatur bedienen können (z. B. mit Tab und der Eingabetaste).
- Geben Sie ein Attribut an, das explizit die Sprache Ihres Inhalts angibt, damit Screenreader Ihren Text richtig lesen.
- Stellen Sie sicher, dass ein Benutzer zu allen Widgets auf einer Seite ausschließlich mit der Tastatur navigieren kann, ohne gefangen zu werden. (Mindestens sollten sie mit der Tabulatortaste hinein- und hinausnavigieren können.)

Und das ist erst der Anfang.

### Befürworter der Barrierefreiheit

Seit 1999 betreibt das {{Glossary("W3C", "W3C")}} eine Arbeitsgruppe namens {{Glossary("WAI", "Web Accessibility Initiative")}} (WAI), die Barrierefreiheit durch Richtlinien, unterstützendes Material und internationale Ressourcen fördert.

## Mehr Details

Bitte beziehen Sie sich auf:

- [Wikipedia-Artikel](https://en.wikipedia.org/wiki/Accessibility) über Barrierefreiheit
- [WAI (W3C's Web Accessibility Initiative)](https://www.w3.org/WAI/)

## Nächste Schritte

Barrierefreiheit kann sowohl das Design als auch die technische Struktur einer Website beeinflussen.

- Aus Design-Sicht empfehlen wir, mehr über [Designs für alle Nutzertypen](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Design_for_all_types_of_users) zu lernen.
- Wenn Sie mehr an der technischen Seite interessiert sind, könnten Sie lernen, wie man [Bilder in Webseiten einbettet](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images).
