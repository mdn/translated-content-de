---
title: Wahrnehmbar
slug: Web/Accessibility/Understanding_WCAG/Perceivable
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{AccessibilitySidebar}}

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so schreiben können, dass sie den Erfolgskriterien entsprechen, die im **Wahrnehmbarkeits**prinzip der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 beschrieben sind. Wahrnehmbarkeit bedeutet, dass Benutzer in der Lage sein müssen, den Inhalt auf irgendeine Weise mit einem oder mehreren ihrer Sinne wahrzunehmen.

> [!NOTE]
> Um die Definitionen der W3C für Wahrnehmbarkeit sowie deren Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 1: Wahrnehmbar - Informationen und Benutzeroberflächenkomponenten müssen den Nutzern so präsentiert werden, dass sie sie wahrnehmen können.](https://www.w3.org/TR/WCAG21/#perceivable)

## Richtlinie 1.1 — Bereitstellung von Textalternativen für nicht-textuelle Inhalte

Der Schlüssel ist hier, dass Text in andere Formen umgewandelt werden kann, die Menschen mit Behinderungen nutzen können. Zum Beispiel kann er von einem Screenreader gesprochen, in Großdruck umgewandelt oder auf einer Brailleanzeige dargestellt werden. Nicht-textueller Inhalt bezieht sich auf Multimedia wie Bilder, Audio und Video.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie man den Kriterien entspricht</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="5">1.1.1 Bereitstellung von Textequivalenzen (A)</td>
      <td>
        Alle Bilder, die sinnvollen Inhalt vermitteln, sollten mit geeigneten
        Alternativtexten versehen werden.
      </td>
      <td>
        <a href="/de/docs/Learn/Accessibility/HTML#text_alternatives"
          >Textalternativen.</a
        >
      </td>
    </tr>
    <tr>
      <td>
        Komplexe Bilder oder Diagramme sollten eine zugängliche Alternative haben,
        entweder auf derselben Seite oder über einen Link. Verwenden Sie einen normalen Link anstatt eines
        <code>longdesc</code>-Attributs.
      </td>
      <td>
        <p>
          Eine Textbeschreibung kann funktionieren oder eine zugängliche Datentabelle (siehe
          <a href="/de/docs/Learn/HTML/Tables/Advanced"
            >Erweiterte HTML-Tabellenmerkmale und Barrierefreiheit</a
          >). Siehe das W3C-Dokument
          <a href="https://www.w3.org/TR/html-longdesc/">Image Description Extension (longdesc)</a>
          für das Argument gegen <code>longdesc</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Multimediainhalte (z.B. Audio oder Video) sollten zumindest eine
        beschreibende Identifikation wie eine Untertitelung oder Ähnliches haben.
      </td>
      <td>
        <p>
          Siehe <a href="/de/docs/Learn/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          >
          für statische Untertitelungsoptionen und
          <a href="/de/docs/Learn/Accessibility/Multimedia#audio_transcripts"
            >Audiotranskripte</a
          >,
          <a href="/de/docs/Learn/Accessibility/Multimedia#video_text_tracks"
            >Videotextspuren</a
          >
          für andere Alternativen.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        UI-Kontrollen wie Formularelemente und Schaltflächen sollten Textbeschriftungen
        haben, die ihren Zweck beschreiben.
      </td>
      <td>
        Schaltflächen sind einfach—Sie sollten sicherstellen, dass der Schaltflächentext die
        Funktion der Schaltfläche beschreibt (z.B., <code
          >&#x3C;button>Bild hochladen&#x3C;/button></code
        >). Weitere Informationen zu anderen UI-Kontrollen finden Sie in
        <a href="/de/docs/Learn/Accessibility/HTML#ui_controls"
          >UI-Kontrollen</a
        >.
      </td>
    </tr>
    <tr>
      <td>
        Dekorative (nicht-inhaltliche) Bilder, Videos usw. so implementieren,
        dass sie für unterstützende Technologien unsichtbar sind, um keine Verwirrung bei
        Nutzern zu stiften.
      </td>
      <td>
        <p>
          Dekorative Bilder sollten mit CSS-Hintergrundbildern implementiert werden
          (siehe
          <a
            href="/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders"
            >Hintergründe</a
          >). Wenn Sie ein Bild über ein
          {{htmlelement("img")}}-Element einfügen müssen, geben Sie ein leeres Alt-Attribut
          (<code>alt=""</code>) an. Andernfalls könnten Screenreader versuchen, den Dateipfad usw.
          vorzulesen.
        </p>
        <p>
          Wenn Sie Hintergrundvideo oder -audio einbinden, das automatisch abspielt, machen Sie es
          so unauffällig wie möglich. Es sollte nicht wie Inhalt aussehen/klingen und
          bieten Sie eine Steuerung an, um es abzuschalten. Ideal wäre es, es gar nicht erst
          einzubinden.
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die [WCAG-Beschreibung für Richtlinie 1.1: Textalternativen](https://www.w3.org/TR/WCAG21/#text-alternatives).

## Richtlinie 1.2 — Bereitstellung von Textalternativen für zeitbasierte Medien

Zeitbasierte Medien beziehen sich auf Multimedia mit einer Dauer, wie Audio und Video. Beachten Sie, dass, wenn das Audio/Video als Alternative zu vorhandenem Textinhalt dient, keine weitere Textalternative bereitgestellt werden muss.

<table>
  <thead>
    <tr>
       <th scope="col">Erfolgskriterien</th>
       <th scope="col">Wie man den Kriterien entspricht</th>
       <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
       <td>1.2.1 Bereitstellung von Alternativen für vorab aufgezeichnete Audio- und Video-Inhalte (A)</td>
       <td>Ein Transkript sollte für vorab aufgezeichnete Audio-Inhalte bereitgestellt werden, und ein Transkript oder eine Audiobeschreibung sollte für vorab aufgezeichnete Video-Inhalte (z.B. stilles Video) bereitgestellt werden.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn/Accessibility/Multimedia#audio_transcripts">Audiotranskripte</a> für Transkriptinformationen. Noch kein Tutorial für Audiobeschreibungen verfügbar.</td>
    </tr>
    <tr>
       <td>1.2.2 Bereitstellung von Untertiteln für webbasierte Videos (A)</td>
       <td>Sie sollten Untertitel für im Web präsentierte Videos bereitstellen (z.B. HTML-Video). Dies ist zum Vorteil für Personen, die den Audioteil des Videos nicht hören können.</td>
       <td>Siehe <a href="/de/docs/Learn/Accessibility/Multimedia#video_text_tracks">Videotextspuren</a> für HTML-Video-Untertitel. Siehe auch <a href="https://support.google.com/youtube/answer/2734796?hl=en">Fügen Sie Ihre eigenen Untertitel & geschlossenen Untertitel hinzu</a> (YouTube).</td>
    </tr>
    <tr>
       <td>1.2.3 Bereitstellung eines Texttranskripts oder einer Audiobeschreibung für webbasierte Videos (A)</td>
       <td>Sie sollten Texttranskripte oder Audiobeschreibungen für im Web präsentierte Videos bereitstellen (z.B. HTML-Video). Dies ist zum Vorteil für Personen, die den visuellen Teil des Videos nicht sehen können und den vollständigen Inhalt nicht nur durch das Audio erhalten.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn/Accessibility/Multimedia#audio_transcripts">Audiotranskripte</a> für Transkriptinformationen. Noch kein Tutorial für Audiobeschreibungen verfügbar.</td>
    </tr>
    <tr>
       <td>1.2.4 Bereitstellung von Untertiteln für Live-Audio (AA)</td>
       <td>Sie sollten synchronisierte Untertitel für alle Live-Multimedia-Inhalte bereitstellen, die Audio enthalten (z.B. Videokonferenzen, Live-Audioübertragungen).</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.5 Bereitstellung von Audiobeschreibungen für vorab aufgezeichnete Videos (AA)</td>
       <td>Audiobeschreibungen sollten für vorab aufgezeichnete Videos bereitgestellt werden, jedoch nur, wenn das vorhandene Audio nicht die vollständige Bedeutung des Videos vermittelt.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.6 Bereitstellung einer Gebärdensprachen-Entsprechung zu vorab aufgezeichneter Audio (AAA)</td>
       <td>Ein entsprechendes Gebärdensprachvideo sollte für alle vorab aufgezeichneten Inhalte, die Audio enthalten, bereitgestellt werden.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.7 Bereitstellung eines erweiterten Videos mit Audiobeschreibungen (AAA)</td>
       <td>Wenn Audiobeschreibungen wegen Timing-Problemen im Video nicht bereitgestellt werden können (siehe 1.2.5) (z.B. es gibt keine geeigneten Pausen im Inhalt, um darin die Audiobeschreibungen einzufügen), sollte eine alternative Version des Videos bereitgestellt werden, die eingefügte Pausen (und Audiobeschreibungen) beinhaltet.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.8 Bereitstellung einer Alternative für vorab aufgezeichnete Medien (AAA)</td>
       <td>Für alle Inhalte, die Video enthalten, sollte ein beschreibendes Texttranskript bereitgestellt werden, zum Beispiel ein Drehbuch des Films, den Sie sich ansehen. Dies ist zum Vorteil von hörgeschädigten Zuschauern, die den Inhalt nicht hören können.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn/Accessibility/Multimedia#audio_transcripts">Audiotranskripte</a> für Transkriptinformationen.</td>
    </tr>
    <tr>
       <td>1.2.9 Bereitstellung eines Transkripts für Live-Audio (AAA)</td>
       <td>Für alle Live-Audioinhalte, die ausgestrahlt werden, sollte ein beschreibender Text bereitgestellt werden, zum Beispiel ein Drehbuch des Stücks oder Musicals, das Sie hören. Dies ist zum Vorteil von hörgeschädigten Zuschauern, die den Inhalt nicht hören können.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn/Accessibility/Multimedia#audio_transcripts">Audiotranskripte</a> für Transkriptinformationen.</td>
    </tr>
 </tbody>
</table>

> [!NOTE]
> Siehe auch die [WCAG-Beschreibung für Richtlinie 1.2: Zeitbasierte Medien: Bereitstellung von Alternativen für zeitbasierte Medien](https://www.w3.org/TR/WCAG21/#time-based-media).

## Richtlinie 1.3 — Erstellen Sie Inhalte, die in unterschiedlicher Weise präsentiert werden können

Diese Richtlinie bezieht sich auf die Fähigkeit, Inhalte auf verschiedene Arten zu konsumieren, um den unterschiedlichen Bedürfnissen der Nutzer gerecht zu werden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie man den Kriterien entspricht</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
    <tr>
      <td>1.3.1 Informationen und Beziehungen (A)</td>
      <td>
        <p>
          Jede Inhaltsstruktur—oder die visuelle Beziehung, die zwischen Inhalten hergestellt wird—kann auch programmatisch bestimmt werden oder aus der Textbeschreibung hervorgehen. Die Hauptsituationen, in denen dies relevant ist, sind:
        </p>
        <ul>
          <li>
            Textbeschriftungen und die Formularelemente, die sie beschreiben. Diese sind eindeutig mit dem {{htmlelement("label")}}-Element verbunden, welches von Screenreadern usw. erkannt werden kann.
          </li>
          <li>
            Bild-Alt-Text. Inhaltsbilder sollten über Text verfügen, der den Inhalt des Bildes klar beschreibt, welcher entweder programmatisch mit ihm verknüpft werden kann (z.B. Alt-Text) oder der ansonsten leicht zuzuordnen ist (z.B. beschreibt ihn und steht direkt daneben). Dies sollte bedeuten, dass die volle Bedeutung erfasst werden kann, auch wenn das Bild nicht sichtbar ist.
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
          <a href="/de/docs/Learn/Accessibility/HTML"
            >HTML: Eine gute Grundlage für Barrierefreiheit</a
          >
          ist voll von Informationen darüber, aber Sie sollten besonders darauf achten, 
          <a href="/de/docs/Learn/Accessibility/HTML#good_semantics"
            >Gute Semantik</a
          >,
          <a href="/de/docs/Learn/Accessibility/HTML#ui_controls"
            >UI-Kontrollen</a
          >, und
          <a href="/de/docs/Learn/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>1.3.2 Sinnvolle Inhaltssequenz (A)</td>
      <td>
        Eine sinnvolle, logische Lesereihenfolge sollte für jeden Inhalt leicht zu bestimmen sein, selbst wenn er visuell auf ungewöhnliche Weise präsentiert wird. Die Reihenfolge sollte durch die Verwendung korrekter semantischer Elemente (z.B. Überschriften, Absätze) offensichtlich gemacht werden, wobei CSS verwendet wird, um etwaige ungewöhnliche Layoutstile zu erstellen, unabhängig von der Markup-Struktur.
      </td>
      <td>
        Siehe erneut 
        <a href="/de/docs/Learn/Accessibility/HTML"
          >HTML: Eine gute Grundlage für Barrierefreiheit</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.3.3 Sensorische Merkmale (A)</td>
      <td>
        <p>
          Anweisungen zur Bedienung von Bedienelementen oder zum Verständnis von Inhalten beruhen nicht auf einem einzigen Sinn. Dies könnte sich als unzugänglich erweisen für Menschen mit einer Behinderung, die mit diesem Sinn in Zusammenhang steht, oder ein Gerät, das diesen Sinn nicht unterstützt. Zum Beispiel:
        </p>
        <ul>
          <li>
            "Klicken Sie auf den runden Knopf, um fortzufahren"<br />Der Knopf sollte eindeutig beschriftet sein, so dass es offensichtlich ist, dass es der Knopf ist, den Sie drücken müssen. Wenn es mehrere Knöpfe gibt, stellen Sie sicher, dass sie alle klar beschriftet sind, um ihre Funktion zu unterscheiden.
          </li>
          <li>
            "Hören Sie sich die Audioanweisungen zum Verständnis an"<br />Dies ist offensichtlich problematisch—Audio wird für Menschen mit Hörbehinderungen unzugänglich sein, wohingegen Text gelesen, aber bei Bedarf auch von einem Screenreader gesprochen werden kann.
          </li>
          <li>
            "Wischen Sie von der rechten Seite des Bildschirms, um das Menü anzuzeigen"<br />Einige Benutzer könnten nicht in der Lage sein, den Bildschirm zu wischen, entweder aufgrund einer Behinderung oder weil ihr Gerät keine Berührung unterstützt. Es sollte eine Alternative bereitgestellt werden, wie eine Tastenkombination oder ein Knopf, der über die Tastatur oder andere Mittel aktiviert werden kann.
          </li>
        </ul>
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Anweisungen ausschließlich über Farbe zu übermitteln, ist verwandt, aber wird in einer anderen Richtlinie behandelt — 1.4.1.
          </p>
        </div>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        1.3.4 Orientierung (AA)
        <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        Inhalte schränken eigene Ansicht und Bedienung nicht auf eine einzige Anzeigeausrichtung ein, wie Hoch- oder Querformat, es sei denn, eine spezifische Anzeigeausrichtung ist wesentlich.
      </td>
      <td>
        <p>
          <a href="https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
            >Verständnis von Orientierung</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        1.3.5 Zweck der Eingabe identifizieren (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          Folgen Sie der Liste von
          <a href="https://www.w3.org/TR/WCAG21/#input-purposes"
            >53 Eingabefeldern</a
          >
          um den Zweck eines Feldes programmatisch zu identifizieren.
        </p>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html"
          >Verständnis der Identifizierung des Eingabezwecks</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.3.6 Zweck identifizieren (AAA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        Bei Inhalten, die mit Auszeichnungssprachen implementiert werden, kann der Zweck von Nutzeroberflächenkomponenten, Symbolen und Regionen programmatisch bestimmt werden.
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
> Siehe auch die WCAG-Beschreibung für [Richtlinie 1.3: Anpassungsfähig: Erstellen Sie Inhalte, die in unterschiedlicher Weise präsentiert werden können, ohne Informationen oder Struktur zu verlieren.](https://www.w3.org/TR/WCAG21/#adaptable)

## Richtlinie 1.4: Erleichtern Sie es Nutzern, Inhalte zu sehen und zu hören, einschließlich der Trennung von Vorder- und Hintergrund

Diese Richtlinie bezieht sich darauf, sicherzustellen, dass der Kerninhalt leicht von Hintergründen und anderen Dekorationen zu unterscheiden ist. Das klassische Beispiel ist Farbe (sowohl [Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) als auch [Farbverwendung](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Use_of_color) zur Vermittlung von Anweisungen), aber es gilt auch in anderen Situationen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie man den Kriterien entspricht</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
    <tr>
      <td>1.4.1 Farbverwendung (A)</td>
      <td>
        <p>
          Farbe sollte nicht ausschließlich zur Übermittlung von Informationen verwendet werden. Zum Beispiel sollten in Formularen Pflichtfelder niemals nur mit einer Farbe (wie Rot) markiert werden. Stattdessen wäre eine Markierung mit einem Sternchen mit der Beschriftung "erforderlich" angemessener.
        </p>
      </td>
      <td>
        Siehe 
        <a href="/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Use_of_color"
          >Farbverwendung</a
        >,
        <a
          href="/de/docs/Learn/Accessibility/CSS_and_JavaScript#color_and_color_contrast"
          >Farbe und Farbkontrast</a
        >,
        und
        <a
          href="/de/docs/Learn/Forms/How_to_structure_a_web_form#multiple_labels"
          >Mehrere Etiketten</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.2 Audiosteuerungen (A)</td>
      <td>
        Für jegliche Audioinhalte, die länger als drei Sekunden spielen, bieten Sie zugängliche Steuerungen zum Abspielen und Pausieren des Audio/Videos sowie zum Stummschalten/Anpassen der Lautstärke an.
      </td>
      <td>
        Verwenden Sie native <code>&lt;button&gt;</code>, um zugängliche Tastatursteuerungen bereitzustellen, wie sie in
        <a
          href="/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics"
          >Grundlagen der Videoplayer-Gestaltung</a
        > gezeigt werden.
      </td>
    </tr>
    <tr>
      <td>1.4.3 Mindestkontrast (AA)</td>
      <td>
        <p>
          Der Farbkontrast zwischen Hintergrund und Vordergrundinhalt sollte ein Mindestniveau erreichen, um die Lesbarkeit sicherzustellen:
        </p>
        <ul>
          <li>
            Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens 4,5:1 haben.
          </li>
          <li>
            Überschrift (oder nur größerer) Text sollte ein Verhältnis von mindestens 3:1 haben.
            Größerer Text ist definiert als mindestens 18pt, oder 14pt fett.
          </li>
        </ul>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast"
          >Farbkontrast</a
        > und
        <a
          href="/de/docs/Learn/Accessibility/CSS_and_JavaScript#color_and_color_contrast"
          >Farbe und Farbkontrast</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.4 Text vergrößern (AA)</td>
      <td>
        Die Seite sollte lesbar und nutzbar sein, wenn die Textgröße verdoppelt wird.
        Das bedeutet, dass Designs reaktionsschnell sein sollten, so dass, wenn die Textgröße
        erhöht wird, die Inhalte weiterhin zugänglich sind.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.5 Bilder von Text (AA)</td>
      <td>
        Bilder sollten NICHT verwendet werden, um Inhalte darzustellen, wo Text dies auch könnte. Zum Beispiel, wenn ein Bild hauptsächlich aus Text besteht, könnte es ebenso durch Text sowie Bilder dargestellt werden.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.6 Verbesserter Kontrast (AAA)</td>
      <td>
        <p>Dies folgt und baut auf Kriterium 1.4.3 auf.</p>
        <ul>
          <li>
            Text und sein Hintergrund sollten ein Kontrastverhältnis von mindestens 7:1 haben.
          </li>
          <li>
            Überschrift (oder nur größerer) Text sollte ein Verhältnis von mindestens 4,5:1 haben.
            Größerer Text ist definiert als mindestens 18pt, oder 14pt fett.
          </li>
        </ul>
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn/Accessibility/CSS_and_JavaScript#color_and_color_contrast"
          >Farbe und Farbkontrast</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.7 Niedrige oder keine Hintergrundgeräusche (AAA)</td>
      <td>
        Vorab aufgezeichnete Audioaufnahmen, die hauptsächlich Sprache enthalten, sollten minimale Hintergrundgeräusche haben, so dass der Inhalt leicht verständlich ist.
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
            Text sollte nicht vollständig gerechtfertigt sein (z.B. <code
              >text-align: justify;</code
            >).
          </li>
          <li>
            Der Zeilenabstand sollte mindestens 1,5-mal so groß sein wie die Textgröße in
            Absätzen (z.B. <code>line-height: 1.5;</code>), und mindestens 2,25
            mal so groß wie die Textgröße zwischen Absätzen (z.B. <code
              >padding: 2.25rem;</code
            >).
          </li>
          <li>
            Wenn die Textgröße verdoppelt wird, sollte der Inhalt nicht gescrollt
            werden müssen.
          </li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.9 Bilder von Text (Keine Ausnahme) (AAA)</td>
      <td>
        Text sollte nicht als Teil eines Bildes dargestellt werden, es sei denn, er ist rein dekorativ (d.h. er vermittelt keinen Inhalt) oder kann auf keine andere Weise dargestellt werden.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        1.4.10 Umbruch (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <ul>
          <li>
            Kein horizontales Scrollen für Sprachen, die von links nach rechts gelesen werden (wie Englisch)
            oder von rechts nach links (wie Arabisch)
          </li>
          <li>
            Kein vertikales Scrollen für von oben nach unten gelesene Sprachen (wie Japanisch)
          </li>
          <li>
            Mit Ausnahme von Teilen des Inhalts, die ein zweidimensionales Layout für die Nutzung oder Bedeutung erfordern (wie eine große Datentabelle)
          </li>
        </ul>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
          >Verständnis von Umbruch</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.4.11 Nicht-Text Kontrast (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        Minimales Farbkontrastverhältnis von 3:1 für Benutzeroberflächenkomponenten und
        grafische Objekte.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"
          >Verständnis von Nicht-Text Kontrast</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.4.12 Textabstand (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          Kein Verlust von Inhalt oder Funktionalität tritt auf, wenn die folgenden Stile
          angewendet werden:
        </p>
        <ul>
          <li>
            Zeilenhöhe (Zeilenabstand) mindestens 1,5-mal so groß wie die Schriftgröße
          </li>
          <li>
            Abstand nach Absätzen mindestens 2-mal so groß wie die Schriftgröße
          </li>
          <li>
            Zeichenabstand (Tracking) mindestens 0,12-mal so groß wie die Schriftgröße
          </li>
          <li>Wortabstand mindestens 0,16-mal so groß wie die Schriftgröße</li>
        </ul>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
          >Verständnis von Textabstand</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.4.13 Inhalt bei Hover oder Fokus (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          Während zusätzlicher Inhalt in Verbindung mit Hover und Tastaturfokus angezeigt und ausgeblendet werden kann, gibt es drei Bedingungen, die erfüllt sein müssen:
        </p>
        <ul>
          <li>entfernbar (kann geschlossen/entfernt werden)</li>
          <li>
            hoverbar (der zusätzliche Inhalt verschwindet nicht, wenn der
            Zeiger darüber ist)
          </li>
          <li>
            persistent (der zusätzliche Inhalt verschwindet nicht ohne Benutzeraktion)
          </li>
        </ul>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html"
          >Verständnis von Inhalt bei Hover oder Fokus</a
        >
      </td>
    </tr>
  </thead>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 1.4: Unterscheidbar: Erleichtern Sie es Nutzern, Inhalte zu sehen und zu hören, einschließlich der Trennung von Vorder- und Hintergrund.](https://www.w3.org/TR/WCAG21/#distinguishable)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG)

  1. Wahrnehmbar
  2. [Bedienbar](/de/docs/Web/Accessibility/Understanding_WCAG/Operable)
  3. [Verständlich](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Understanding_WCAG/Robust)
