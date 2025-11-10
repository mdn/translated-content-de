---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Howto/Design_and_accessibility/What_is_accessibility
l10n:
  sourceCommit: f33de00c56ac53878eb2cb7cb5849df1f9ab8db7
---

Dieser Artikel führt in die grundlegenden Konzepte hinter der Barrierefreiheit im Web ein.

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

Aufgrund physischer oder technischer Einschränkungen können Ihre Besucher Ihre Website möglicherweise nicht so erleben, wie Sie es sich erhofft haben. In diesem Artikel geben wir allgemeine Prinzipien zur Barrierefreiheit und erklären einige Regeln.

## Vertiefung

### Barrierefreiheit: allgemeine Prinzipien

Oft assoziieren wir Barrierefreiheit zunächst mit negativen Einschränkungen. Dieses Gebäude muss zugänglich sein, daher muss es diese Vorschriften für Türbreiten, Toilettengrößen und Aufzugsplatzierungen einhalten.

Das ist eine enge Sichtweise auf Barrierefreiheit. Denken Sie daran als eine wunderbare Möglichkeit, Menschen zu befähigen und mehr Kunden zu bedienen. Was können Menschen in Brasilien mit Ihrer englischen Website anfangen? Können Menschen mit Smartphones eine schwere, unübersichtliche Website durchsuchen, die für einen großen Desktop-Monitor und unbegrenzte Bandbreite ausgelegt ist? Sie werden sich woanders umsehen. Im Allgemeinen _müssen wir unser Produkt aus der Perspektive aller unserer Zielkunden betrachten und entsprechend anpassen_. Daher Barrierefreiheit.

### Barrierefreiheit im Web

Im spezifischen Kontext des Webs bedeutet Barrierefreiheit, dass jeder von Ihrem Inhalt profitieren kann, unabhängig von Behinderung, Standort, technischen Einschränkungen oder anderen Umständen.

Betrachten wir das Video:

- Hörbehinderung
  - : Wie profitiert eine hörgeschädigte Person von einem Video? Sie müssen Untertitel bereitstellen — oder noch besser, ein vollständiges Texttranskript.

    Achten Sie auch darauf, dass die Lautstärke an die individuellen Bedürfnisse angepasst werden kann.

- Sehbehinderung
  - : Erneut, bieten Sie ein Texttranskript an, das ein Nutzer einsehen kann, ohne das Video abspielen zu müssen, sowie eine Audiobeschreibung (eine Stimme außerhalb des Bildschirms, die beschreibt, was im Video passiert).
- Pausenkapazität
  - : Nutzer könnten Schwierigkeiten haben, jemanden in einem Video zu verstehen. Lassen Sie sie das Video pausieren, um die Untertitel zu lesen oder die Informationen zu verarbeiten.
- Tastenkapazität
  - : Lassen Sie den Nutzer in ein Video hinein- und heraustabben sowie es abspielen und pausieren, ohne darin gefangen zu sein.

#### Die Grundlagen der Barrierefreiheit im Web

Einige notwendige Maßnahmen für grundlegende Barrierefreiheit im Web umfassen:

- Immer wenn Ihre Seite ein Bild benötigt, um Bedeutung zu vermitteln, fügen Sie Text als Alternative für sehbehinderte Nutzer oder solche mit langsamer Verbindung hinzu.
- Stellen Sie sicher, dass alle Nutzer grafische Benutzeroberflächen (wie ausklappbare Menüs) ausschließlich mit einer Tastatur bedienen können (z.B. mit Tab und der Eingabetaste).
- Geben Sie ein Attribut an, das die Sprache Ihres Inhalts explizit bestimmt, damit Bildschirmleser Ihren Text korrekt lesen.
- Stellen Sie sicher, dass ein Nutzer alle Widgets einer Seite ausschließlich mit der Tastatur navigieren kann, ohne hängen zu bleiben. (Erlauben Sie ihnen mindestens, hinein- und herauszutabben.)

Und das ist nur der Anfang.

### Barrierefreiheits-Champions

Seit 1999 betreibt das {{Glossary("W3C", "W3C")}} eine Arbeitsgruppe namens {{Glossary("WAI", "Web Accessibility Initiative")}} (WAI), die sich für Barrierefreiheit durch Richtlinien, Unterstützungsunterlagen und internationale Ressourcen einsetzt.

## Weitere Details

Bitte beachten Sie:

- [Wikipedia-Artikel](https://en.wikipedia.org/wiki/Accessibility) über Barrierefreiheit
- [WAI (W3C's Web Accessibility Initiative)](https://www.w3.org/WAI/)

## Nächste Schritte

Barrierefreiheit kann sowohl das Design als auch die technische Struktur einer Website beeinflussen.

- Aus gestalterischer Sicht empfehlen wir, sich mit dem [Designen für alle Benutzerarten](/de/docs/Learn_web_development/Howto/Design_and_accessibility/Design_for_all_types_of_users) zu beschäftigen.
- Wenn Sie sich mehr für den technischen Aspekt interessieren, könnten Sie lernen, wie man [Bilder in Webseiten einbettet](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images).
