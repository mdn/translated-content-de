---
title: Wie wird Ihre Website aussehen?
short-title: Wie wird sie aussehen?
slug: Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

{{NextMenu("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

_Wie wird Ihre Website aussehen?_ behandelt die Planungs- und Designarbeit, die Sie für Ihre Website erledigen müssen, bevor Sie mit dem Schreiben von Code beginnen. Dazu gehören Fragen wie „Welche Informationen bietet meine Website?“, „Welche Schriftarten und Farben möchte ich haben?“ und „Was macht meine Seite?“

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computerbetriebssystem, der grundlegenden Software, die Sie zur Erstellung einer Website verwenden werden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Eine einfache Website planen.</li>
          <li>Einen grundlegenden Designprozess anwenden.</li>
          <li>Materialien sammeln.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zuerst: Planung

Bevor Sie irgendetwas tun, benötigen Sie einige Ideen. Was soll Ihre Website eigentlich machen? Eine Website kann grundsätzlich alles tun, aber für den Anfang sollten Sie die Dinge einfach halten. Wir beginnen damit, eine einfache Webseite mit einer Überschrift, einem Bild und einigen Absätzen zu erstellen.

Um zu beginnen, müssen Sie diese Fragen beantworten:

1. **Worum geht es auf Ihrer Website?** Mögen Sie Hunde, New York oder Pac-Man?
2. **Welche Informationen präsentieren Sie zu diesem Thema?** Schreiben Sie einen Titel und einige Absätze und denken Sie an ein Bild, das Sie auf Ihrer Seite zeigen möchten.
3. **Wie sieht Ihre Website aus,** in einfachen übergeordneten Begriffen? Wie ist die Hintergrundfarbe? Welche Art von Schriftart ist angemessen: formell, cartoonartig, fett und laut, subtil?

> [!NOTE]
> Komplexe Projekte benötigen detaillierte Richtlinien, die alle Details zu Farben, Schriftarten, Abständen zwischen Elementen auf einer Seite, angemessenen Schreibstilen usw. abdecken. Dies wird manchmal als Design-Leitfaden, Design-System oder Markenbuch bezeichnet. Ein Beispiel hierfür finden Sie im [Firefox Acorn Design System](https://acorn.firefox.com/latest).

## Entwerfen Ihres Designs

Nehmen Sie als nächstes Stift und Papier und skizzieren Sie grob, wie Ihre Seite aussehen soll. Für Ihre erste einfache Webseite gibt es nicht viel zu skizzieren, aber es ist wichtig, sich jetzt daran zu gewöhnen. Es hilft wirklich – Sie müssen kein Van Gogh sein!

![Eine grobe Zeichnung und Skizze einer Website auf Papier](website-drawing-scan.png)

> [!NOTE]
> Selbst bei echten, komplexen Websites beginnt das Designteam normalerweise mit groben Skizzen auf Papier und erstellt später digitale Mockups mit einem Grafikeditor oder Webtechnologien.
>
> Web-Teams bestehen oft sowohl aus einem [Grafikdesigner](/de/docs/Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes#graphic_designer) als auch einem [Benutzererlebnis (UX) Designer](/de/docs/Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes#user_experience_ux_designer). Grafikdesigner erstellen die visuellen Elemente der Website. UX-Designer haben eine etwas abstraktere Rolle, indem sie sich damit befassen, wie Nutzer die Website erleben und mit ihr interagieren werden.

An diesem Punkt ist es gut, damit zu beginnen, den Inhalt zusammenzustellen, der schließlich auf Ihrer Webseite erscheinen wird. Sie sollten Ihre Absätze und den Titel von früher noch zur Hand haben. Halten Sie diese in der Nähe.

## Wählen Sie eine Themenfarbe

Lassen Sie uns eine Hintergrundfarbe für Ihre Seite auswählen.

1. Gehen Sie zum [Color Picker](/de/docs/Web/CSS/CSS_colors/Color_format_converter) und suchen Sie sich eine Farbe aus, die Ihnen gefällt.
2. Wenn Sie eine Farbe gewählt haben, sehen Sie einen seltsamen sechsstelligen Code wie `#660066`. Das nennt man einen _Hex-Code_ (kurz für hexadezimal) und er repräsentiert Ihre Farbe. Notieren Sie sich den Code vorerst an einem sicheren Ort.

![Farbformatkonverter-Tool auf der MDN Docs-Website](color_format_converter.jpg)

## Wählen Sie ein Bild

Jetzt ist es an der Zeit, ein Bild für Ihre Seite zu finden.

1. Gehen Sie zu [Google Bilder](https://www.google.com/imghp).
2. Beachten Sie, dass die meisten Bilder im Web, einschließlich der in Google Bilder, urheberrechtlich geschützt sind. Um die Wahrscheinlichkeit zu verringern, dass Sie Urheberrechte verletzen, können Sie den Lizenzfilter von Google verwenden. Klicken Sie auf die _Tools_-Schaltfläche und dann auf die erscheinende Option _Nutzungsrechte_. Sie sollten die Option _Creative Commons-Lizenzen_ wählen.

   ![Gefilterte Suchergebnisse, um Bilder von Creative Commons-Lizenzen auf Google Bilder zu erhalten](updated-google-images-licensing.png)

3. Suchen Sie ein geeignetes Bild.
4. Wenn Sie das gewünschte Bild gefunden haben, klicken Sie auf das Bild, um eine vergrößerte Ansicht zu erhalten.
5. Klicken Sie mit der rechten Maustaste auf das Bild (<kbd>Ctrl</kbd> + Klick auf einem Mac), wählen Sie _Bild speichern unter..._, und wählen Sie einen sicheren Ort, um Ihr Bild zu speichern.

   ![Suchergebnisse für einen Suchbegriff auf Google Bilder](updated-google-images.png)

## Wählen Sie eine Schriftart

Es gibt eine Reihe von Schriftarten, die als [websichere Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) bekannt sind – wie Arial, Times New Roman oder Courier New –, die auf den meisten Computersystemen allgemein verfügbar sind. Wenn Sie eine dieser Schriftarten auf Ihrer Website verwenden, lädt der Browser die Schriftdatei, die auf dem Computer des Benutzers verfügbar ist.

Wenn Sie jedoch andere Schriftarten verwenden möchten, die auf den Geräten nicht allgemein verfügbar sind, müssen Sie diese entweder zusammen mit Ihren Website-Dateien einbinden oder die Schriftdateien von einem Drittanbieter-Schriftservice referenzieren, damit der Browser sie bei Bedarf herunterladen kann. [Google Fonts](https://fonts.google.com/) ist ein solcher Dienst, der Zugang zu vielen Schriftarten bietet.

Lassen Sie uns Google Fonts verwenden, um eine Schriftart für Ihre Website auszuwählen:

1. Gehen Sie zu [Google Fonts](https://fonts.google.com/).
2. Scrollen Sie durch die Liste der Schriftarten, bis Sie eine finden, die Ihnen gefällt. Falls Sie Schwierigkeiten haben, eine zu finden, können Sie die verfügbaren Filter im anderen Bereich verwenden, um Ihre Suche einzugrenzen.
3. Klicken Sie Ihre Schriftart an, und klicken Sie dann auf der nächsten Seite auf die Schaltfläche „Schriftart abrufen“.
4. Auf der nächsten Seite klicken Sie auf „Einbettungscode abrufen“.
5. Kopieren Sie beide bereitgestellten Codeblöcke und speichern Sie diese an einem sicheren Ort zur späteren Verwendung.

> [!NOTE]
> Wie bei Bildern sind viele Schriftarten durch Lizenzen geschützt, was bedeutet, dass Sie sie nicht unbedingt frei auf kommerziellen Websites verwenden können. Im Moment sind Sie beim Lernen von Beispielen sicher, aber behalten Sie dies im Hinterkopf, wenn Sie Schriftarten für echte Websites auswählen.

{{NextMenu("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
