---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Howto/Design_and_accessibility/What_is_accessibility
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Dieser Artikel führt in die grundlegenden Konzepte der Web-Barrierefreiheit ein.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen Sie, was Barrierefreiheit ist und warum sie wichtig ist.</td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Aufgrund physischer oder technischer Einschränkungen können Ihre Besucher Ihre Website möglicherweise nicht so erleben, wie Sie es sich erhofft haben. In diesem Artikel geben wir allgemeine Prinzipien der Barrierefreiheit und erklären einige Regeln.

## Aktives Lernen

_Es steht noch kein aktives Lernen zur Verfügung. [Bitte überlegen Sie, einen Beitrag zu leisten](/de/docs/MDN/Community/Getting_started)._

## Vertiefung

### Barrierefreiheit: allgemeine Prinzipien

Zunächst könnten wir Barrierefreiheit mit negativen Einschränkungen assoziieren. Dieses Gebäude muss barrierefrei sein, also muss es diese Vorschriften für Türbreite, Toilettengröße und Aufzugsplatzierung einhalten.

Das ist eine enge Sichtweise auf Barrierefreiheit. Betrachten Sie es als eine wunderbare Möglichkeit, Menschen zu befähigen und mehr Kunden zu bedienen. Was können die Menschen in Brasilien mit Ihrer englischen Website machen? Können die Menschen mit Smartphones eine schwere, überladene Website durchsuchen, die für einen großen Desktop-Monitor und unbegrenzte Bandbreite konzipiert ist? Sie werden woanders hingehen. Im Allgemeinen _müssen wir unser Produkt aus den Perspektiven aller unserer Zielkunden betrachten und entsprechend anpassen._ Daher Barrierefreiheit.

### Web-Barrierefreiheit

Im spezifischen Kontext des Web bedeutet Barrierefreiheit, dass jeder von Ihrem Inhalt profitieren kann, unabhängig von Behinderung, Standort, technischen Einschränkungen oder anderen Umständen.

Betrachten wir Video:

- Hörbehinderung

  - : Wie profitiert eine hörbehinderte Person von einem Video? Sie müssen Untertitel bereitstellen – oder noch besser, eine vollständige Textabschrift.

    Stellen Sie außerdem sicher, dass Menschen die Lautstärke anpassen können, um ihre individuellen Bedürfnisse zu berücksichtigen.

- Sehbehinderung
  - : Auch hier bieten Sie eine Textabschrift an, die ein Benutzer konsultieren kann, ohne das Video abspielen zu müssen, und eine Audiobeschreibung (eine Off-Screen-Stimme, die beschreibt, was im Video passiert).
- Pausierfähigkeit
  - : Benutzer haben möglicherweise Schwierigkeiten, jemanden in einem Video zu verstehen. Lassen Sie sie das Video anhalten, um die Untertitel zu lesen oder die Informationen zu verarbeiten.
- Tastaturfähigkeit
  - : Lassen Sie den Benutzer in ein Video hinein- und herausnavigieren, es abspielen und pausieren, ohne sich darin zu verlieren.

#### Die Grundlagen der Web-Barrierefreiheit

Einige Notwendigkeiten für die grundlegende Web-Barrierefreiheit sind:

- Wann immer Ihre Seite ein Bild benötigt, um Bedeutung zu vermitteln, fügen Sie Text als Alternative für sehbehinderte Benutzer oder Benutzer mit langsamen Verbindungen hinzu.
- Stellen Sie sicher, dass alle Benutzer grafische Schnittstellen (wie aufklappbare Menüs) ausschließlich mit einer Tastatur bedienen können (z.B. mit Tab und der Eingabetaste).
- Geben Sie ein Attribut an, das ausdrücklich die Sprache Ihres Inhalts angibt, damit Bildschirmleser Ihren Text korrekt lesen.
- Stellen Sie sicher, dass ein Benutzer alle Widgets auf einer Seite ausschließlich mit der Tastatur navigieren kann, ohne stecken zu bleiben. (Lassen Sie sie zumindest tabben Ein- und Aussteigen.)

Und das ist erst der Anfang.

### Unterstützer der Barrierefreiheit

Seit 1999 betreibt das {{Glossary("W3C", "W3C")}} eine Arbeitsgruppe namens {{Glossary("WAI", "Web Accessibility Initiative")}} (WAI), die Barrierefreiheit durch Richtlinien, Unterstützungsmaterial und internationale Ressourcen fördert.

## Weitere Details

Bitte beachten Sie:

- [Wikipedia-Artikel](https://en.wikipedia.org/wiki/Accessibility) über Barrierefreiheit
- [WAI (W3C's Web Accessibility Initiative)](https://www.w3.org/WAI/)

## Nächste Schritte

Barrierefreiheit kann sowohl das Design als auch die technische Struktur einer Website beeinflussen.

- Aus Design-Sicht empfehlen wir, sich über [Designs für alle Benutzertypen](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Design_for_all_types_of_users) zu informieren.
- Wenn Sie sich mehr für die technische Seite interessieren, könnten Sie lernen, wie man [Bilder in Webseiten einbettet](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images).
