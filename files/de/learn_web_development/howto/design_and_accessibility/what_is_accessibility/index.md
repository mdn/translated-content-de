---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Howto/Design_and_accessibility/What_is_accessibility
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

{{QuicklinksWithSubPages("/de/docs/Learn_web_development/Howto")}}

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

Aufgrund physischer oder technischer Einschränkungen können Ihre Besucher Ihre Website möglicherweise nicht wie gewünscht erleben. In diesem Artikel geben wir allgemeine Prinzipien der Barrierefreiheit und erklären einige Regeln.

## Aktives Lernen

_Es gibt noch kein aktives Lernen. [Bitte erwägen Sie, einen Beitrag zu leisten](/de/docs/MDN/Community/Getting_started)._

## Vertiefung

### Barrierefreiheit: allgemeine Prinzipien

Wir verbinden Barrierefreiheit vielleicht zuerst mit negativen Einschränkungen. Dieses Gebäude muss barrierefrei sein, also muss es bestimmten Vorschriften für Türbreite, Toilettengröße und Aufzugslage entsprechen.

Das ist eine enge Sichtweise auf Barrierefreiheit. Denken Sie daran als eine wunderbare Möglichkeit, Menschen zu empowern und mehr Kunden zu bedienen. Was können die Menschen in Brasilien mit Ihrer englischen Website tun? Können Menschen mit Smartphones eine schwere, überfüllte Website durchstöbern, die für einen großen Desktop-Monitor und unbegrenzte Bandbreite konzipiert wurde? Sie werden woanders hingehen. Im Allgemeinen _müssen wir unser Produkt aus den Blickwinkeln all unserer Zielkunden betrachten und entsprechend anpassen._ Daher Barrierefreiheit.

### Web-Barrierefreiheit

Im spezifischen Kontext des Webs bedeutet Barrierefreiheit, dass jeder von Ihrem Inhalt profitieren kann, unabhängig von Behinderung, Ort, technischen Einschränkungen oder anderen Umständen.

Betrachten wir das Beispiel Video:

- Hörbehinderung

  - : Wie profitiert eine hörgeschädigte Person von einem Video? Sie müssen Untertitel bereitstellen – oder noch besser, ein vollständiges Texttranskript.

    Stellen Sie außerdem sicher, dass Menschen die Lautstärke anpassen können, um ihren individuellen Bedürfnissen gerecht zu werden.

- Sehbehinderung
  - : Auch hier gilt, ein Texttranskript bereitzustellen, das ein Nutzer konsultieren kann, ohne das Video abspielen zu müssen, und eine Audiodeskription (eine Stimme außerhalb des Bildschirms, die beschreibt, was im Video passiert).
- Pausenfunktion
  - : Benutzer haben möglicherweise Schwierigkeiten, jemandem im Video zu verstehen. Lassen Sie sie das Video pausieren, um die Untertitel zu lesen oder die Informationen zu verarbeiten.
- Tastatursteuerung
  - : Lassen Sie den Benutzer in ein Video hineintabulieren/aus ihm heraus, es abspielen und pausieren, ohne darin gefangen zu sein.

#### Die Grundlagen der Web-Barrierefreiheit

Einige Notwendigkeiten für grundlegende Web-Barrierefreiheit umfassen:

- Immer wenn Ihre Seite ein Bild benötigt, um Bedeutung zu vermitteln, fügen Sie einen Text als Alternative für sehbehinderte Benutzer oder solche mit langsamen Verbindungen hinzu.
- Stellen Sie sicher, dass alle Benutzer grafische Schnittstellen (wie aufklappbare Menüs) ausschließlich mit einer Tastatur bedienen können (z. B. mit Tab und der Eingabetaste).
- Geben Sie ein Attribut an, das explizit die Sprache Ihres Inhalts angibt, damit Bildschirmleseprogramme Ihren Text richtig lesen.
- Stellen Sie sicher, dass ein Benutzer alle Widgets auf einer Seite ausschließlich mit der Tastatur navigieren kann, ohne gefangen zu werden. (Lassen Sie sie zumindest herein- und heraus-tabulieren.)

Und das ist nur der Anfang.

### Champions der Barrierefreiheit

Seit 1999 betreibt das {{Glossary("W3C", "W3C")}} eine Arbeitsgruppe namens {{Glossary("WAI", "Web Accessibility Initiative")}} (WAI), die Barrierefreiheit durch Richtlinien, Unterstützungsmaterialien und internationale Ressourcen fördert.

## Weitere Details

Bitte beachten Sie:

- [Wikipedia-Artikel](https://en.wikipedia.org/wiki/Accessibility) über Barrierefreiheit
- [WAI (W3Cs Web Accessibility Initiative)](https://www.w3.org/WAI/)

## Nächste Schritte

Barrierefreiheit kann sowohl das Design als auch die technische Struktur einer Website beeinflussen.

- Aus Design-Sicht empfehlen wir, sich über das [Design für alle Arten von Benutzern](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Design_for_all_types_of_users) zu informieren.
- Wenn Sie die technische Seite mehr interessiert, könnten Sie lernen, wie man [Bilder in Webseiten einbettet](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images).
