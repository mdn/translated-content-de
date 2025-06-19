---
title: Wie wird Ihre Website aussehen?
short-title: Wie wird sie aussehen?
slug: Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like
l10n:
  sourceCommit: 08c3f187740ba6d4d1584f66df5a61232ab25421
---

{{NextMenu("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website")}}

_Wie wird Ihre Website aussehen?_ behandelt die Planung und das Design, das Sie für Ihre Website durchführen müssen, bevor Sie Code schreiben. Dazu gehören Fragen wie „Welche Informationen bietet meine Website?“, „Welche Schriftarten und Farben möchte ich einsetzen?“ und „Welche Funktion hat meine Website?“

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit Ihrem Computerbetriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Planen einer einfachen Website.</li>
          <li>Anwenden eines grundlegenden Gestaltungsprozesses.</li>
          <li>Zusammentragen von Ressourcen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Das Wichtigste zuerst: Planung

Bevor Sie irgendetwas tun, benötigen Sie einige Ideen. Was sollte Ihre Website tatsächlich tun? Eine Website kann grundsätzlich alles Mögliche tun, aber für Ihren ersten Versuch sollten Sie es einfach halten. Wir beginnen damit, eine einfache Webseite mit einer Überschrift, einem Bild und ein paar Absätzen zu erstellen.

Um zu beginnen, müssen Sie folgende Fragen beantworten:

1. **Worum geht es auf Ihrer Website?** Mögen Sie Hunde, New York oder Pac-Man?
2. **Welche Informationen präsentieren Sie zu diesem Thema?** Schreiben Sie einen Titel und ein paar Absätze und überlegen Sie sich ein Bild, das Sie auf Ihrer Seite zeigen möchten.
3. **Wie sieht Ihre Website aus,** in einfachen, groben Zügen? Was ist die Hintergrundfarbe? Welche Art von Schriftart ist angemessen: formell, cartoonhaft, fett und laut, subtil?

> [!NOTE]
> Komplexe Projekte benötigen detaillierte Richtlinien, die auf alle Details von Farben, Schriftarten, Abständen zwischen Elementen auf einer Seite, passenden Schreibstilen usw. eingehen. Dies wird manchmal als Designleitfaden, Designsysten oder Brand Book bezeichnet, und Sie können ein Beispiel im [Firefox Acorn Design System](https://acorn.firefox.com/latest) sehen.

## Skizzierung Ihres Designs

Als Nächstes nehmen Sie Stift und Papier zur Hand und skizzieren grob, wie Ihre Seite aussehen soll. Für Ihre erste einfache Webseite gibt es nicht viel zu skizzieren, aber Sie sollten sich angewöhnen, dies jetzt zu tun. Es hilft wirklich – Sie müssen kein Van Gogh sein!

![Eine grobe Zeichnung und Skizze einer Website auf Papier](website-drawing-scan.png)

> [!NOTE]
> Selbst bei realen, komplexen Websites beginnt das Designteam meist mit groben Skizzen auf Papier und erstellt später digitale Modelle mit einem Grafikeditor oder Webtechnologien.
>
> Webteams umfassen oft sowohl einen [Grafikdesigner](/de/docs/Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes#graphic_designer) als auch einen [User Experience (UX) Designer](/de/docs/Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes#user_experience_ux_designer). Grafikdesigner komponieren die visuellen Elemente der Website. UX-Designer haben eine etwas abstraktere Rolle, indem sie sich damit befassen, wie die Benutzer die Website erleben und mit ihr interagieren werden.

An diesem Punkt ist es gut, damit zu beginnen, die Inhalte zusammenzutragen, die schließlich auf Ihrer Webseite erscheinen werden. Sie sollten immer noch Ihre Absätze und den Titel von früher bereithalten. Halten Sie diese griffbereit.

## Eine Themenfarbe wählen

Wählen wir eine Hintergrundfarbe für Ihre Seite aus.

1. Gehen Sie zum [Farbwähler](/de/docs/Web/CSS/CSS_colors/Color_picker_tool) und finden Sie eine Farbe, die Ihnen gefällt.
2. Wenn Sie auf eine Farbe klicken, sehen Sie einen seltsamen sechsstelligen Code wie `#660066`. Dies wird als _Hex-Code_ bezeichnet (kurz für Hexadezimal) und repräsentiert Ihre Farbe. Notieren Sie sich diesen Code an einem sicheren Ort für später.

![Farbauswahl-Tool auf der MDN Dokumentationsseite mit RGB-, HSL- und HEX-Farben](color-picker.png)

## Ein Bild auswählen

Nun ist es Zeit, ein Bild zu finden, das Sie auf Ihrer Seite zeigen.

1. Gehen Sie zu [Google Bilder](https://www.google.com/imghp).
2. Beachten Sie, dass die meisten Bilder im Internet, einschließlich der in Google Bilder, urheberrechtlich geschützt sind. Um Ihre Wahrscheinlichkeit, das Urheberrecht zu verletzen, zu verringern, können Sie den Lizenzfilter von Google verwenden. Klicken Sie auf die Schaltfläche _Tools_ und anschließend auf die erscheinende Option _Nutzungsrechte_. Wählen Sie die Option _Creative Commons-Lizenzen_.

   ![Gefilterte Suchergebnisse für Bilder mit Creative Commons-Lizenzen bei Google Bilder](updated-google-images-licensing.png)

3. Suchen Sie nach einem passenden Bild.
4. Wenn Sie das gewünschte Bild gefunden haben, klicken Sie darauf, um eine vergrößerte Ansicht zu erhalten.
5. Klicken Sie mit der rechten Maustaste auf das Bild (<kbd>Strg</kbd> + Klick auf einem Mac), wählen Sie _Bild speichern unter…_ und suchen Sie einen sicheren Ort, um Ihr Bild zu speichern.

   ![Suchergebnisse für einen Suchbegriff bei Google Bilder](updated-google-images.png)

## Eine Schriftart wählen

Es gibt eine Reihe von Schriftarten, die als [websichere Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) bezeichnet werden – wie Arial, Times New Roman oder Courier New –, die allgemein auf den meisten Computersystemen verfügbar sind. Wenn Sie eine dieser Schriftarten auf Ihrer Website verwenden, lädt der Browser die Schriftartdatei, die auf dem Computer des Benutzers verfügbar ist.

Wenn Sie jedoch andere Schriftarten verwenden möchten, die nicht allgemein auf Geräten verfügbar sind, müssen Sie diese entweder zusammen mit Ihren Websitedateien einbinden oder die Schriftdateien von einem Drittanbieter-Schriftservice beziehen, damit der Browser sie bei Bedarf herunterladen kann. [Google Fonts](https://fonts.google.com/) ist ein solcher Dienst, der Zugriff auf viele Schriftarten bietet.

Verwenden wir Google Fonts, um eine Schriftart für Ihre Website auszuwählen:

1. Gehen Sie zu [Google Fonts](https://fonts.google.com/).
2. Scrollen Sie die Liste der Schriftarten herunter, bis Sie eine finden, die Ihnen gefällt. Wenn Sie Schwierigkeiten haben, eine zu finden, können Sie die verfügbaren Filter in der anderen Spalte verwenden, um Ihre Suche einzugrenzen.
3. Klicken Sie Ihre Schriftwahl an und dann auf der nächsten Seite auf die Schaltfläche „Schriftart erhalten“.
4. Auf der nächsten Seite klicken Sie „Einbettungscode erhalten“.
5. Kopieren Sie beide bereitgestellten Codeblöcke und speichern Sie sie an einem sicheren Ort für den späteren Gebrauch.

> [!NOTE]
> Wie bei Bildern sind auch viele Schriftarten durch Lizenzen geschützt, was bedeutet, dass Sie sie nicht zwangsläufig frei auf kommerziellen Websites verwenden können. Für jetzt, während Sie an Lernbeispielen arbeiten, sind Sie in Ordnung, aber denken Sie daran, wenn Sie Schriftarten für echte Websites auswählen.

{{NextMenu("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website")}}
