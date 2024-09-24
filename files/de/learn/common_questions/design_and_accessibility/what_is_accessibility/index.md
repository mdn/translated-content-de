---
title: Was ist Barrierefreiheit?
slug: Learn/Common_questions/Design_and_accessibility/What_is_accessibility
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

Dieser Artikel führt in die grundlegenden Konzepte der Barrierefreiheit im Web ein.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erfahren Sie, was Barrierefreiheit ist und warum sie wichtig ist.</td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Aufgrund physischer oder technischer Einschränkungen können Ihre Besucher Ihre Website möglicherweise nicht so erleben, wie Sie es sich erhofft haben. In diesem Artikel geben wir allgemeine Prinzipien der Barrierefreiheit und erklären einige Regeln.

## Aktives Lernen

_Es gibt noch keine aktiven Lernangebote. [Bitte überlegen Sie, ob Sie einen Beitrag leisten möchten](/de/docs/MDN/Community/Contributing/Getting_started)._

## Vertiefung

### Barrierefreiheit: allgemeine Prinzipien

Wir könnten Barrierefreiheit zunächst mit negativen Einschränkungen in Verbindung bringen. Dieses Gebäude muss barrierefrei sein, daher muss es diesen Vorschriften für Türbreiten, Toilettengrößen und die Platzierung von Aufzügen folgen.

Das ist ein engstirniger Weg, über Barrierefreiheit nachzudenken. Denken Sie daran als eine wunderbare Möglichkeit, Menschen zu befähigen und mehr Kunden zu bedienen. Was können die Menschen in Brasilien mit Ihrer englischen Website tun? Können die Menschen mit Smartphones eine schwere, überladene Website durchsuchen, die für einen großen Desktop-Monitor mit unbegrenzter Bandbreite ausgelegt ist? Sie werden woanders hingehen. Im Allgemeinen _müssen wir unser Produkt aus der Sicht aller unserer Zielkunden betrachten und es entsprechend anpassen._ Daher Barrierefreiheit.

### Barrierefreiheit im Web

Im spezifischen Kontext des Webs bedeutet Barrierefreiheit, dass jeder von Ihrem Inhalt profitieren kann, unabhängig von Behinderung, Standort, technischen Einschränkungen oder anderen Umständen.

Betrachten wir das Thema Video:

- Hörbeeinträchtigung

  - : Wie profitiert eine hörgeschädigte Person von einem Video? Sie müssen Untertitel bereitstellen — oder noch besser, ein vollständiges Texttranskript.

    Stellen Sie außerdem sicher, dass die Menschen die Lautstärke an ihre individuellen Bedürfnisse anpassen können.

- Sehbeeinträchtigung
  - : Auch hier sollten Sie ein Texttranskript bereitstellen, das ein Benutzer konsultieren kann, ohne das Video abspielen zu müssen, sowie eine Audiobeschreibung (eine Stimme, die beschreibt, was im Video passiert).
- Pause-Funktion
  - : Benutzer können Schwierigkeiten haben, jemanden in einem Video zu verstehen. Lassen Sie sie das Video anhalten, um die Untertitel zu lesen oder die Informationen zu verarbeiten.
- Tastatur-Funktionalität
  - : Ermöglichen Sie dem Benutzer, in ein Video hinein und heraus zu tabben, es abzuspielen und zu pausieren, ohne darin gefangen zu sein.

#### Die Grundlagen der Web-Barrierefreiheit

Einige notwendige Voraussetzungen für grundlegende Web-Barrierefreiheit umfassen:

- Wenn Ihre Website ein Bild benötigt, um Bedeutung zu vermitteln, fügen Sie als Alternative Text für sehbehinderte Benutzer oder solche mit langsamer Verbindung hinzu.
- Stellen Sie sicher, dass alle Benutzer grafische Schnittstellen (wie aufklappbare Menüs) ausschließlich mit der Tastatur bedienen können (z. B. mit der Tabulator- und der Eingabetaste).
- Geben Sie ein Attribut an, das die Sprache Ihres Inhalts explizit festlegt, damit Bildschirmleser Ihren Text richtig lesen.
- Stellen Sie sicher, dass ein Benutzer alle Widgets auf einer Seite ausschließlich mit der Tastatur navigieren kann, ohne gefangen zu werden. (Mindestens sollten sie eintabben und austabben können.)

Und das ist erst der Anfang.

### Barrierefreiheits-Champions

Seit 1999 betreibt das {{Glossary("W3C")}} eine Arbeitsgruppe mit dem Namen {{Glossary("WAI","Web Accessibility Initiative")}} (WAI), die Barrierefreiheit durch Richtlinien, unterstützendes Material und internationale Ressourcen fördert.

## Weitere Details

Bitte beachten Sie:

- [Wikipedia-Artikel](https://en.wikipedia.org/wiki/Accessibility) über Barrierefreiheit
- [WAI (W3C's Web Accessibility Initiative)](https://www.w3.org/WAI/)

## Nächste Schritte

Barrierefreiheit kann sowohl das Design als auch die technische Struktur einer Website beeinflussen.

- Aus gestalterischer Sicht empfehlen wir, mehr über das [Design für alle Benutzergruppen](/de/docs/Learn/Common_questions/Design_and_accessibility/Design_for_all_types_of_users) zu lernen.
- Wenn Sie sich mehr für die technische Seite interessieren, könnten Sie lernen, wie man [Bilder in Webseiten einbettet](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML).
