---
title: Wie wird Ihre Website aussehen?
short-title: Wie wird sie aussehen?
slug: Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like
l10n:
  sourceCommit: 04b891269af86287313a1d6e28423560a674cd2d
---

{{NextMenu("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

_Wie wird Ihre Website aussehen?_ behandelt die Planung und Gestaltungsarbeit, die Sie für Ihre Website erledigen müssen, bevor Sie mit dem Schreiben von Code beginnen. Dazu gehören Fragen wie "Welche Informationen bietet meine Website?", "Welche Schriftarten und Farben möchte ich?" und "Was genau macht meine Seite?"

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computerbetriebssystem, der grundlegenden Software, die Sie zur Erstellung einer Website verwenden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Planung einer einfachen Website.</li>
          <li>Verwendung eines einfachen Designprozesses.</li>
          <li>Sammlung von Ressourcen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zuerst: Planung

Bevor Sie irgendetwas tun, benötigen Sie einige Ideen. Was sollte Ihre Website tatsächlich machen? Eine Website kann im Grunde alles tun, aber für den ersten Versuch sollten Sie die Dinge einfach halten. Wir beginnen mit der Erstellung einer einfachen Webseite mit einer Überschrift, einem Bild und ein paar Absätzen.

Um zu beginnen, müssen Sie folgende Fragen beantworten:

1. **Worum geht es auf Ihrer Website?** Mögen Sie Hunde, New York oder Pac-Man?
2. **Welche Informationen präsentieren Sie zu diesem Thema?** Schreiben Sie einen Titel und einige Absätze und denken Sie an ein Bild, das Sie auf Ihrer Seite präsentieren möchten.
3. **Wie sieht Ihre Website aus,** in einfachen übergeordneten Begriffen? Was ist die Hintergrundfarbe? Welche Art von Schriftart ist angemessen: formal, cartoonartig, fett und laut, subtil?

> [!NOTE]
> Komplexe Projekte benötigen detaillierte Richtlinien, die alle Details zu Farben, Schriftarten, Abständen zwischen den Elementen auf einer Seite, dem angemessenen Schreibstil und so weiter enthalten. Dies wird manchmal als Design-Leitfaden, Design-System oder Markenbuch bezeichnet, und Sie können ein Beispiel im [Firefox Acorn Design System](https://acorn.firefox.com/latest) sehen.

## Skizzieren Sie Ihr Design

Nehmen Sie nun Stift und Papier und skizzieren Sie grob, wie Ihre Seite aussehen soll. Für Ihre erste einfache Webseite gibt es nicht viel zu skizzieren, aber Sie sollten sich jetzt daran gewöhnen. Es hilft wirklich — Sie müssen kein Van Gogh sein!

![Eine grobe Zeichnung und Skizze einer Website auf Papier](website-drawing-scan.png)

> [!NOTE]
> Selbst bei echten, komplexen Websites beginnen die Designteams in der Regel mit groben Skizzen auf Papier und erstellen später digitale Entwürfe mit einem Grafikeditor oder Web-Technologien.
>
> Web-Teams bestehen oft sowohl aus einem Grafikdesigner als auch einem {{Glossary("UX", "User Experience")}} (UX) Designer. Grafikdesigner stellen die visuellen Elemente der Website zusammen. UX-Designer haben eine etwas abstraktere Rolle und befassen sich damit, wie Nutzer die Website erleben und mit ihr interagieren werden.

An diesem Punkt ist es gut, den Inhalt vorzubereiten, der schließlich auf Ihrer Webseite erscheinen wird. Sie sollten immer noch die Absätze und den Titel von vorher haben. Halten Sie diese griffbereit.

## Auswahl einer Themenfarbe

Wählen Sie eine Farbe, indem Sie zum [Color Picker](/de/docs/Web/CSS/CSS_colors/Color_picker_tool) gehen und eine Farbe finden, die Ihnen gefällt. Wenn Sie auf eine Farbe klicken, sehen Sie einen seltsamen sechsstelligen Code wie `#660066`. Das ist ein _Hex-Code_ (kurz für hexadezimal) und repräsentiert Ihre Farbe. Notieren Sie den Code jetzt an einem sicheren Ort.

![Color-Picker-Tool auf der MDN Docs-Seite mit RGB-, HSL- und HEX-Farben](color-picker.png)

## Auswahl eines Bildes

Um ein Bild auszuwählen, gehen Sie zu [Google Images](https://www.google.com/imghp) und suchen Sie nach etwas Passendem.

1. Wenn Sie das gewünschte Bild gefunden haben, klicken Sie auf das Bild, um eine vergrößerte Ansicht zu erhalten.
2. Klicken Sie mit der rechten Maustaste auf das Bild (Ctrl + Klick auf einem Mac), wählen Sie _Bild speichern unter..._ und suchen Sie einen sicheren Ort zum Speichern Ihres Bildes.

![Suchergebnisse für einen Suchbegriff auf Google Bilder](updated-google-images.png)

Beachten Sie, dass die meisten Bilder im Web, einschließlich bei Google Images, urheberrechtlich geschützt sind. Um die Wahrscheinlichkeit einer Urheberrechtsverletzung zu verringern, können Sie den Lizenzfilter von Google verwenden. Klicken Sie auf die Schaltfläche _Tools_ und dann auf die erscheinende Option _Nutzungsrechte_. Sie sollten die Option _Creative Commons-Lizenzen_ wählen.

![Gefilterte Suchergebnisse, um Bilder von Creative Commons-Lizenzen auf Google Bilder zu erhalten](updated-google-images-licensing.png)

## Auswahl einer Schriftart

Es gibt eine Reihe von Schriftarten, die als [websichere Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) bekannt sind, wie Arial, Times New Roman oder Courier New, die auf den meisten Computersystemen verfügbar sind. Wenn Sie eine dieser Schriftarten auf Ihrer Website verwenden, lädt der Browser die Schriftartdatei, die auf dem Computer des Nutzers vorhanden ist.

Wenn Sie jedoch andere Schriftarten verwenden möchten, die nicht allgemein auf Geräten verfügbar sind, müssen Sie sie entweder zusammen mit Ihren Website-Dateien bereitstellen oder die Schriftdateien von einem Drittanbieter-Schriftservice referenzieren, damit der Browser sie bei Bedarf herunterladen kann. [Google Fonts](https://fonts.google.com/) ist ein solcher Dienst, der Zugang zu vielen Schriftarten bietet.

Verwenden wir Google Fonts, um eine Schriftart für Ihre Website auszuwählen:

1. Gehen Sie zu [Google Fonts](https://fonts.google.com/).
2. Scrollen Sie die Liste der Schriftarten herunter, bis Sie eine finden, die Ihnen gefällt. Wenn Sie Probleme haben, eine zu finden, können Sie die Filter in der anderen Spalte verwenden, um Ihre Suche einzugrenzen.
3. Klicken Sie auf Ihre Schriftartoption, dann auf der nächsten Seite auf die Schaltfläche "Get font".
4. Klicken Sie auf der nächsten Seite auf "Get embed code".
5. Kopieren Sie beide bereitgestellten Codeblöcke und speichern Sie sie an einem sicheren Ort für die spätere Verwendung.

> [!NOTE]
> Wie bei Bildern sind viele Schriftarten durch Lizenzen geschützt, was bedeutet, dass Sie sie nicht unbedingt frei auf kommerziellen Websites verwenden können. Sie werden keine Probleme haben, während Sie an Lernbeispielen arbeiten, aber dies sollten Sie im Hinterkopf behalten, wenn Sie Schriftarten für echte Websites auswählen.

{{NextMenu("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
