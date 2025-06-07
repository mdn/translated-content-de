---
title: Wahrnehmbar
slug: Web/Accessibility/Guides/Understanding_WCAG/Perceivable
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so verfassen, dass sie den Erfolgskriterien des **Wahrnehmbar**-Prinzips der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 entsprechen. Wahrnehmbar bedeutet, dass Benutzer sie auf irgendeine Weise mit einem oder mehreren ihrer Sinne wahrnehmen können müssen.

> [!NOTE]
> Um die W3C-Definitionen für Wahrnehmbar, seine Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 1: Wahrnehmbar - Informationen und Benutzeroberflächenkomponenten müssen für die Benutzer so dargestellt werden können, dass sie sie wahrnehmen können.](https://w3c.github.io/wcag/guidelines/22/#perceivable)

## Richtlinie 1.1 — Bereitstellung von Textalternativen für nicht-textuelle Inhalte

Der Schlüssel hier ist, dass Text in andere Formen umgewandelt werden kann, die Menschen mit Behinderungen verwenden können. Zum Beispiel kann er von einem Bildschirmleser gesprochen, in großen Druck umgewandelt oder auf einem Brailledisplay dargestellt werden. Nicht-textuelle Inhalte beziehen sich auf Multimedia wie Bilder, Audio und Video.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie die Kriterien erfüllt werden</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="5">1.1.1 Bereitstellung von Textequivalenten (A)</td>
      <td>
        Alle Bilder, die bedeutungsvolle Inhalte vermitteln, sollten mit geeignetem
        Alternativtext versehen werden.
      </td>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives"
          >Textalternativen.</a
        >
      </td>
    </tr>
    <tr>
      <td>
        Komplexe Bilder oder Grafiken sollten eine zugängliche Alternative erhalten,
        entweder auf derselben Seite oder über einen Link. Verwenden Sie einen normalen Link anstelle
        eines <code>longdesc</code>-Attributs.
      </td>
      <td>
        <p>
          Eine Textbeschreibung kann funktionieren, oder eine zugängliche Datentabelle (siehe
          <a href="/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility"
            >HTML-Tabellen-Barrierefreiheit</a
          >). Siehe W3C's
          <a href="https://www.w3.org/TR/html-longdesc/">Image Description Extension (longdesc)</a>
          für das Argument gegen <code>longdesc</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Multimedia-Inhalte (d.h. Audio oder Video) sollten zumindest eine
        beschreibende Identifikation haben, wie etwa eine Untertitelung oder Ähnliches.
      </td>
      <td>
        <p>
          Siehe <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          >
          für statische Untertiteloptionen, und
          <a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts"
            >Audio-Transkripte</a
          >,
          <a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#video_text_tracks"
            >Video-Textspuren</a
          >
          für andere Alternativen.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        UI-Steuerelemente wie Formularelemente und Schaltflächen sollten Textbezeichnungen haben,
        die ihren Zweck beschreiben.
      </td>
      <td>
        Schaltflächen sind einfach—Sie sollten sicherstellen, dass der Schaltflächentext die
        Funktion der Schaltfläche beschreibt (z.B. <code
          >&#x3C;button>Bild hochladen&#x3C;/button></code
        >). Für weitere Informationen zu anderen UI-Steuerelementen siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie semantic UI-Steuerelemente, wo möglich</a
        >.
      </td>
    </tr>
    <tr>
      <td>
        Implementieren Sie dekorative (nicht-inhaltliche) Bilder, Videos usw. so, dass sie für unterstützende Technologien unsichtbar sind, um Benutzer nicht zu verwirren.
      </td>
      <td>
        <p>
          Dekorative Bilder sollten mit CSS-Hintergrundbildern implementiert werden (siehe
          <a
            href="/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders"
            >Hintergründe und Rahmen</a
          >). Wenn Sie ein Bild über ein
          {{htmlelement("img")}}-Element einschließen müssen, geben Sie ihm ein leeres alt
          (<code>alt=""</code>). Andernfalls versuchen Bildschirmleser möglicherweise, den Dateipfad usw. vorzulesen.
        </p>
        <p>
          Wenn Sie Hintergrundvideo oder -audio einfügen, das automatisch wiedergegeben wird, machen Sie es
          so unauffällig wie möglich. Lassen Sie es nicht wie Inhalt aussehen/klingen und
          bieten Sie eine Steuerung, um es auszuschalten. Idealerweise sollten Sie es gar nicht einfügen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die [WCAG-Beschreibung für Richtlinie 1.1: Textalternativen](https://w3c.github.io/wcag/guidelines/22/#text-alternatives).

## Richtlinie 1.2 — Bereitstellung von Textalternativen für zeitbasierte Medien

Zeitbasierte Medien beziehen sich auf Multimedia mit einer Dauer, wie Audio und Video. Beachten Sie, dass, wenn das Audio/Video als Alternative zu bestehenden Textinhalten dient, Sie keine weitere Textalternative bereitstellen müssen.

<table>
  <thead>
    <tr>
       <th scope="col">Erfolgskriterien</th>
       <th scope="col">Wie die Kriterien erfüllt werden</th>
       <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
       <td>1.2.1 Bereitstellung von Alternativen für voraufgezeichnete Audio-only- und Video-only-Inhalte (A)</td>
       <td>Für voraufgezeichnete Audio-only-Medien sollte ein Transkript bereitgestellt werden, und für voraufgezeichnete Video-only-Medien (d.h. stille Videos) sollte ein Transkript oder eine Audiobeschreibung bereitgestellt werden.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Transkriptinformationen. Noch kein Audiobeschreibungstutorial verfügbar.</td>
    </tr>
    <tr>
       <td>1.2.2 Bereitstellung von Untertiteln für webbasierte Videos (A)</td>
       <td>Sie sollten Untertitel für auf dem Web präsentierte Videos bereitstellen (z.B. HTML-Video). Dies ist zum Vorteil von Menschen, die den Audioteil des Videos nicht hören können.</td>
       <td>Siehe <a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#video_text_tracks">Video-Textspuren</a> für HTML-Video-Untertitel. Siehe auch <a href="https://support.google.com/youtube/answer/2734796?hl=en">Fügen Sie Ihre eigenen Untertitel & geschlossene Untertitel hinzu</a> (YouTube).</td>
    </tr>
    <tr>
       <td>1.2.3 Bereitstellung von Texttranskript oder Audiobeschreibung für webbasierte Videos (A)</td>
       <td>Sie sollten Texttranskripte oder Audiobeschreibungen für auf dem Web präsentierte Videos bereitstellen (z.B. HTML-Video). Dies ist zum Vorteil von Menschen, die den visuellen Teil des Videos nicht sehen können und den Inhalt nicht alleine aus dem Audio erhalten.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Transkriptinformationen. Noch kein Audiobeschreibungstutorial verfügbar.</td>
    </tr>
    <tr>
       <td>1.2.4 Bereitstellung von Untertiteln für Live-Audio (AA)</td>
       <td>Sie sollten synchronisierte Untertitel für alle Live-Multimedia bereitstellen, das Audio enthält (z.B. Videokonferenzen, Live-Audioübertragungen).</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.5 Bereitstellung von Audiobeschreibungen für voraufgezeichnete Videos (AA)</td>
       <td>Audiobeschreibungen sollten für voraufgezeichnete Videos bereitgestellt werden, jedoch nur, wenn das bestehende Audio nicht die volle im Video ausgedrückte Bedeutung vermittelt.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.6 Bereitstellung von Gebärdensprache-Äquivalenten zu voraufgezeichnetem Audio (AAA)</td>
       <td>Ein entsprechendes Gebärdensprachvideo sollte für alle voraufgezeichneten Inhalte mit Audio bereitgestellt werden.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.7 Bereitstellung von erweitertem Video mit Audiobeschreibungen (AAA)</td>
       <td>Wenn Audiobeschreibungen aufgrund von Video-Timing-Problemen (z.B. es gibt keine geeigneten Pausen im Inhalt, in die die Audiobeschreibungen eingefügt werden können) nicht bereitgestellt werden können (siehe 1.2.5), sollte eine alternative Version des Videos bereitgestellt werden, die eingefügte Pausen (und Audiobeschreibungen) enthält.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.8 Bereitstellung einer Alternative für voraufgezeichnete Medien (AAA)</td>
       <td>Für alle Inhalte, die Video enthalten, sollte ein beschreibendes Texttranskript bereitgestellt werden, beispielsweise ein Drehbuch des Films, den Sie sich ansehen. Dies ist zum Vorteil von hörgeschädigten Zuschauern, die den Inhalt nicht hören können.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Transkriptinformationen.</td>
    </tr>
    <tr>
       <td>1.2.9 Bereitstellung eines Transkripts für Live-Audio (AAA)</td>
       <td>Für alle Live-Audio-Inhalte, die übertragen werden, sollte ein beschreibender Text bereitgestellt werden, beispielsweise ein Skript des Stücks oder Musicals, das Sie hören. Dies ist zum Vorteil von hörgeschädigten Zuschauern, die den Inhalt nicht hören können.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Transkriptinformationen.</td>
    </tr>
 </tbody>
</table>

> [!NOTE]
> Siehe auch die [WCAG-Beschreibung für Richtlinie 1.2: Zeitbasierte Medien: Bereitstellung von Alternativen für zeitbasierte Medien](https://w3c.github.io/wcag/guidelines/22/#time-based-media).

## Richtlinie 1.3 — Erstellen von Inhalten, die auf unterschiedliche Weise präsentiert werden können

Diese Richtlinie bezieht sich auf die Fähigkeit, Inhalte in mehreren Formen zu konsumieren, um den unterschiedlichen Bedürfnissen der Benutzer gerecht zu werden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie die Kriterien erfüllt werden</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
    <tr>
      <td>1.3.1 Informationen und Beziehungen (A)</td>
      <td>
        <p>
          Jede Inhaltsstruktur oder visuelle Beziehung zwischen Inhalten kann
          auch programmgesteuert ermittelt oder aus einer Textbeschreibung
          abgeleitet werden. Die Hauptsituationen, in denen dies relevant ist:
        </p>
        <ul>
          <li>
            Textetiketten und die Formularelemente, die sie beschreiben. Diese
            werden eindeutig mit dem {{htmlelement("label")}}-Element
            assoziiert, welches von Bildschirmlesern usw. erfasst werden kann.
          </li>
          <li>
            Bild-alt-Text. Inhaltsbilder sollten verfügbaren Text haben, der den Inhalt des Bildes klar beschreibt, der programmgesteuert mit ihm in Verbindung gebracht werden kann (z.B. alt-Text),
            oder auf andere Weise leicht assoziiert werden kann (z.B. beschreibt es und steht direkt daneben). Dies sollte bedeuten, dass die volle Bedeutung immer noch geschlossen werden kann, auch wenn Sie das Bild nicht sehen können.
          </li>
          <li>
            Listen. Wenn die Reihenfolge der Listenelemente wichtig ist, verwenden Sie eine geordnete Liste
            ({{htmlelement("ol")}}).
          </li>
        </ul>
      </td>
      <td>
        Das Ganze von
        <p>
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML"
            >HTML: Eine gute Grundlage für Barrierefreiheit</a
          >
          ist vollgepackt mit Informationen darüber, aber Sie sollten besonders auf
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#good_semantics"
            >Gute Semantik</a
          >,
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
            >Verwenden Sie semantic UI-Steuerelemente, wo möglich</a
          >, und
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          >, verweisen.
        </p>
      </td>
    </tr>
    <tr>
      <td>1.3.2 Sinnvolle Inhaltssequenz (A)</td>
      <td>
        Eine sinnvolle, logische Lesereihenfolge sollte einfach für jeden
        Inhalt zu bestimmen sein, auch wenn er visuell auf ungewöhnliche Weise präsentiert wird. Die Reihenfolge
        sollte durch die Verwendung korrekter semantischer Elemente deutlich gemacht werden (z.B.
        Überschriften, Absätze), wobei CSS verwendet wird, um ungewöhnliche Layoutstile zu erstellen, unabhängig vom Markup.
      </td>
      <td>
        Verweisen Sie wieder auf
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML"
          >HTML: Eine gute Grundlage für Barrierefreiheit</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.3.3 Sensory-Charakteristika (A)</td>
      <td>
        <p>
          Anweisungen zum Bedienen von Steuerelementen oder zum Verstehen von Inhalten basieren nicht nur auf einem einzigen Sinn. Dies kann sich als unzugänglich für Menschen mit einer Behinderung in Bezug auf diesen Sinn oder einem Gerät, das diesen Sinn nicht unterstützt, erweisen. Daher zum Beispiel:
        </p>
        <ul>
          <li>
            "Klicken Sie auf die runde Schaltfläche, um fortzufahren"<br />Die Schaltfläche sollte
            klar beschriftet sein, damit erkennbar ist, dass dies die Schaltfläche ist,
            auf die Sie drücken müssen. Wenn es mehrere Schaltflächen gibt, stellen Sie sicher, dass alle
            klar gekennzeichnet sind, um ihre Funktion zu unterscheiden.
          </li>
          <li>
            "Hören Sie die Audioanweisungen zur Orientierung"<br />Dies ist
            offensichtlich problematisch—Audio wird für Menschen mit
            Hörbeeinträchtigungen unzugänglich sein, während Text gelesen werden kann, aber auch bei Bedarf von einem Bildschirmleser gesprochen werden kann.
          </li>
          <li>
            "Wischen Sie von der rechten Seite des Bildschirms, um das Menü zu öffnen"<br />Einige
            Benutzer können möglicherweise den Bildschirm aus einer Behinderung oder weil ihr Gerät keine Berührungen unterstützt, nicht wischen. Eine
            Alternative sollte bereitgestellt werden, wie eine Tastenkombination oder
            Schaltfläche, die mit der Tastatur oder auf andere Weise aktiviert werden kann.
          </li>
        </ul>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Die Übermittlung von Anweisungen ausschließlich durch Farbe ist
            verwandt, wird jedoch in einer anderen Richtlinie behandelt - 1.4.1.
          </p>
        </div>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        1.3.4 Orientierung (AA)
      </td>
      <td>
        Inhalte schränken ihre Ansicht und Bedienung nicht auf eine einzige Anzeigeposition ein, wie Hoch- oder Querformat, es sei denn, eine bestimmte Anzeigeposition ist unerlässlich.
      </td>
      <td>
        <p>
          <a href="https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
            >Verständnis der Orientierung</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        1.3.5 Eingabezweck identifizieren (AA)
      </td>
      <td>
        <p>
          Befolgen Sie die Liste von
          <a href="https://w3c.github.io/wcag/guidelines/22/#input-purposes"
            >53 Eingabefeldern</a
          >
          um den Zweck eines Feldes programmgesteuert zu identifizieren.
        </p>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html"
          >Verständnis des Eingabezwecks</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.3.6 Zweck identifizieren (AAA)
      </td>
      <td>
        In Inhalten, die mit Markup-Sprachen implementiert sind, kann der Zweck von Benutzeroberflächenkomponenten, Symbolen und Regionen programmgesteuert bestimmt werden.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html"
          >Verständnis des Zwecks</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 1.3: Anpasbar: Erstellen von Inhalten, die auf unterschiedliche Weise präsentiert werden können, ohne Informationen oder Struktur zu verlieren.](https://w3c.github.io/wcag/guidelines/22/#adaptable)

## Richtlinie 1.4: Es den Benutzern erleichtern, Inhalte zu sehen und zu hören, einschließlich Trennung von Vordergrund und Hintergrund

Diese Richtlinie bezieht sich darauf, sicherzustellen, dass Kerninhalte leicht von Hintergründen und anderen Dekorationen zu unterscheiden sind. Das klassische Beispiel ist die Farbe (sowohl [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) und [Verwendung von Farbe](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Use_of_color) um Anweisungen zu vermitteln), aber es gilt auch in anderen Situationen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie die Kriterien erfüllt werden</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
    <tr>
      <td>1.4.1 Verwendung von Farben (A)</td>
      <td>
        <p>
          Auf Farbe sollte nicht ausschließlich zur Vermittlung von Informationen vertraut werden. Zum
          Beispiel, in Formularen sollten erforderliche Felder niemals nur mit einer
          Farbe (wie Rot) markiert werden. Stattdessen (oder zusätzlich)
          wäre etwas wie ein Sternchen mit einer Beschriftung "erforderlich" angemessener.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Use_of_color"
          >Verwendung von Farbe</a
        >,
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast"
          >Farbe und Farbkontrast</a
        >,
        und
        <a
          href="/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#multiple_labels"
          >Mehrere Etiketten</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.2 Audiosteuerungen (A)</td>
      <td>
        Für jedes Audio, das länger als drei Sekunden läuft, stellen
        Sie zugängliche Steuerungen bereit, um Audio/Video abzuspielen und zu pausieren sowie die Lautstärke stummzuschalten/anzupassen.
      </td>
      <td>
        Verwenden Sie native <code>&lt;button&gt;</code>s, um zugängliche Tastatursteuerungen bereitzustellen, wie in
        <a
          href="/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics"
          >Grundlagen der Video-Player-Styling</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.3 Mindestkontrast (AA)</td>
      <td>
        <p>
          Der Farbkontrast zwischen Hintergrund und Vordergrundinhalten sollte
          ein Mindestniveau haben, um die Lesbarkeit zu gewährleisten:
        </p>
        <ul>
          <li>
            Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens
            4.5:1 haben.
          </li>
          <li>
            Überschriften- (oder einfach größerer) Text sollte ein Verhältnis von mindestens 3:1 haben.
            Größerer Text ist definiert als mindestens 18pt oder 14pt fett.
          </li>
        </ul>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast"
          >Farbkontrast</a
        > und
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast"
          >Farbe und Farbkontrast</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.4 Textgröße anpassen (AA)</td>
      <td>
        Die Seite sollte lesbar und nutzbar sein, wenn die Textgröße verdoppelt wird. Das bedeutet, dass Designs responsiv sein sollten, sodass beim Vergrößern der Textgröße der Inhalt weiterhin zugänglich ist.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.5 Bilder von Text (AA)</td>
      <td>
        Bilder sollten NICHT verwendet werden, um Inhalte darzustellen, wo Text die
        Aufgabe erfüllen könnte. Beispielsweise könnte ein Bild, das hauptsächlich aus Text besteht, auch mit Text anstatt nur mit Bildern dargestellt werden.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.6 Erhöhter Kontrast (AAA)</td>
      <td>
        <p>Dies folgt auf, und baut auf, Kriterium 1.4.3 auf.</p>
        <ul>
          <li>
            Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens
            7:1 haben.
          </li>
          <li>
            Überschriften- (oder einfach größerer) Text sollte ein Verhältnis von mindestens 4.5:1 haben.
            Größerer Text ist definiert als mindestens 18pt oder 14pt fett.
          </li>
        </ul>
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast"
          >Farbe und Farbkontrast</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.7 Geringer oder kein Hintergrundaudio (AAA)</td>
      <td>
        Vorgefertigte Audioaufnahmen, die hauptsächlich Sprache enthalten, sollten minimales Hintergrundrauschen haben, damit der Inhalt leicht verstanden werden kann.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.8 Visuelle Darstellung (AAA)</td>
      <td>
        <p>Für die Präsentation von Textinhalten sollte Folgendes zutreffen:</p>
        <ul>
          <li>Vorder- und Hintergrundfarben sollten vom Benutzer auswählbar sein.</li>
          <li>
            Textblöcke sollten nicht breiter als 80 Zeichen (oder Glyphen) sein, für
            maximale Lesbarkeit.
          </li>
          <li>
            Text sollte nicht vollständig gerechtfertigt werden (z.B. <code
              >text-align: justify;</code
            >).
          </li>
          <li>
            Die Zeilenhöhe sollte mindestens 1,5-mal so groß sein wie die Textgröße innerhalb
            von Absätzen (z.B. <code>line-height: 1.5;</code>), und mindestens 2,25-mal
            so groß sein zwischen Absätzen (z.B. <code
              >padding: 2.25rem;</code
            >).
          </li>
          <li>
            Wenn die Textgröße verdoppelt wird, sollte der Inhalt nicht gescrollt werden müssen.
          </li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.9 Bilder von Text (Ohne Ausnahme) (AAA)</td>
      <td>
        Text sollte nicht als Teil eines Bildes präsentiert werden, es sei denn, es ist rein
        dekorativ (d.h. es vermittelt keinen Inhalt) oder kann nicht auf andere Weise präsentiert
        werden.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        1.4.10 Umbruch (AA)
      </td>
      <td>
        <ul>
          <li>
            Kein horizontales Scrollen für Sprachen von links nach rechts (wie Englisch)
            oder von rechts nach links (wie Arabisch)
          </li>
          <li>
            Kein vertikales Scrollen für Sprachen von oben nach unten (wie Japanisch)
          </li>
          <li>
            Ausgenommen sind Teile der Inhalte, die ein zweidimensionales Layout erfordern
            für die Nutzung oder Bedeutung (wie eine große Datentabelle)
          </li>
        </ul>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
          >Verständnis des Umbruchs</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.4.11 Nicht-Text-Kontrast (AA)
      </td>
      <td>
        Mindestens ein Farbkontrastverhältnis von 3:1 für Benutzeroberflächenkomponenten und
        grafische Objekte.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"
          >Verständnis des Nicht-Text-Kontrasts</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.4.12 Textabstände (AA)
      </td>
      <td>
        <p>
          Kein Verlust an Inhalt oder Funktionalität tritt auf, wenn die folgenden
          Stile angewendet werden:
        </p>
        <ul>
          <li>
            Zeilenhöhe (Zeilenabstand) von mindestens 1,5-mal der Schriftgröße
          </li>
          <li>
            Abstand nach Absätzen von mindestens 2-mal der Schriftgröße
          </li>
          <li>
            Zeichenabstand (Tracking) von mindestens 0,12-mal der Schriftgröße
          </li>
          <li>Wortabstand von mindestens 0,16-mal der Schriftgröße</li>
        </ul>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
          >Verständnis der Textabstände</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.4.13 Inhalt bei Hover oder Fokus (AA)
      </td>
      <td>
        <p>
          Während zusätzlicher Inhalt in Übereinstimmung mit
          Hover und Tastaturfokus erscheinen und verschwinden kann, gibt dieses Erfolgskriterium drei
          Bedingungen an, die erfüllt sein müssen:
        </p>
        <ul>
          <li>Manipulierbar (kann geschlossen/entfernt werden)</li>
          <li>
            schwebbar (der zusätzliche Inhalt verschwindet nicht, wenn der
            Zeiger darüber ist)
          </li>
          <li>
            dauerhaft (der zusätzliche Inhalt verschwindet nicht ohne Benutzeraktion)
          </li>
        </ul>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html"
          >Verständnis des Inhalts bei Hover oder Fokus</a
        >
      </td>
    </tr>
  </thead>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 1.4: Unterscheidbar: Es den Benutzern erleichtern, Inhalte zu sehen und zu hören, einschließlich der Trennung von Vordergrund und Hintergrund.](https://w3c.github.io/wcag/guidelines/22/#distinguishable)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  1. Wahrnehmbar
  2. [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  3. [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)
