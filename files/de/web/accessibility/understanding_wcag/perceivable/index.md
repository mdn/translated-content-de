---
title: Wahrnehmbar
slug: Web/Accessibility/Understanding_WCAG/Perceivable
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{AccessibilitySidebar}}

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so schreiben können, dass sie den Erfolgskriterien entsprechen, die im **Wahrnehmbar**-Prinzip der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 festgelegt sind. Wahrnehmbar bedeutet, dass Benutzer in der Lage sein müssen, die Inhalte in irgendeiner Weise wahrzunehmen, indem sie einen oder mehrere ihrer Sinne nutzen.

> [!NOTE]
> Um die W3C-Definitionen für Wahrnehmbar sowie die entsprechenden Richtlinien und Erfolgskriterien zu lesen, besuchen Sie [Prinzip 1: Wahrnehmbar - Informationen und Benutzeroberflächenkomponenten müssen in einer Weise bereitgestellt werden, die für Benutzer wahrnehmbar ist.](https://www.w3.org/TR/WCAG21/#perceivable)

## Leitfaden 1.1 — Bereitstellen von Textalternativen für Nicht-Text-Inhalte

Der Schlüssel hier ist, dass Text in andere Formen umgewandelt werden kann, die Menschen mit Behinderungen nutzen können. Beispielsweise kann er von einem Screenreader gesprochen, in Großdruck umgewandelt oder auf einem Brailledisplay dargestellt werden. Nicht-Text-Inhalte bezieht sich auf Multimedia wie Bilder, Audio und Video.

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
      <td rowspan="5">1.1.1 Bereitstellen von Textequivalenten (A)</td>
      <td>
        Alle Bilder, die inhaltlich bedeutsam sind, sollten geeignete alternative
        Texte haben.
      </td>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives"
          >Textalternativen.</a
        >
      </td>
    </tr>
    <tr>
      <td>
        Komplexe Bilder oder Diagramme sollten eine zugängliche Alternative
        haben, entweder auf derselben Seite oder über einen Link. Verwenden Sie
        einen regulären Link anstelle eines <code>longdesc</code>-Attributs.
      </td>
      <td>
        <p>
          Eine Textbeschreibung kann hilfreich sein, oder eine zugängliche
          Datentabelle (siehe
          <a href="Learn_web_development/Core/Structuring_content/Table_accessibility"
            >HTML-Tabelle: Barrierefreiheit</a
          >). Siehe W3Cs
          <a href="https://www.w3.org/TR/html-longdesc/">Image Description Extension (longdesc)</a>
          für das Argument gegen <code>longdesc</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Multimedia-Inhalte (z. B. Audio oder Video) sollten zumindest eine
        beschreibende Kennzeichnung haben, wie z. B. eine Untertitel oder
        Ähnliches.
      </td>
      <td>
        <p>
          Siehe <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          >
          für statische Untertitel-Optionen, und
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
        UI-Steuerelemente wie Formularelemente und Schaltflächen sollten
        Textbeschriftungen haben, die ihren Zweck beschreiben.
      </td>
      <td>
        Schaltflächen sind einfach – Sie sollten sicherstellen, dass der
        Schaltflächentext die Funktion der Schaltfläche beschreibt (z. B. <code
          >&#x3C;button>Bild hochladen&#x3C;/button></code
        >). Für weitere Informationen zu anderen UI-Steuerelementen, siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI-Steuerelemente</a
        >.
      </td>
    </tr>
    <tr>
      <td>
        Dekorative (nicht inhaltliche) Bilder, Videos usw. sollten so
        implementiert werden, dass sie von unterstützenden Technologien
        unsichtbar sind, damit sie Benutzer nicht verwirren.
      </td>
      <td>
        <p>
          Dekorative Bilder sollten mit CSS-Hintergrundbildern implementiert
          werden (siehe
          <a
            href="/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders"
            >Hintergründe und Rahmen</a
          >). Wenn Sie ein Bild über ein
          {{htmlelement("img")}}-Element einfügen müssen, geben Sie ihm ein
          leeres alt (<code>alt=""</code>). Andernfalls versuchen Screenreader
          möglicherweise, den Dateipfad auszugeben usw.
        </p>
        <p>
          Wenn Sie Hintergrundvideo oder -audio, das automatisch abgespielt
          wird, einschließen, machen Sie es so unauffällig wie möglich. Es sollte
          nicht wie Inhalt aussehen/klingen, und ein Steuerungselement zur
          Deaktivierung bereitstellen. Idealerweise gar nicht einfügen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die [WCAG-Beschreibung für Leitfaden 1.1: Textalternativen](https://www.w3.org/TR/WCAG21/#text-alternatives).

## Leitfaden 1.2 — Bereitstellen von Textalternativen für zeitbasierte Medien

Zeitbasierte Medien beziehen sich auf Multimedia mit einer Dauer, wie Audio und Video. Beachten Sie, dass, wenn das Audio/Video als Alternative zu vorhandenem Textinhalt dient, Sie keine weitere Textalternative bereitstellen müssen.

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
       <td>1.2.1 Bereitstellen von Alternativen für vorab aufgezeichnete Audio- und Video-Inhalte (A)</td>
       <td>Für vorab aufgezeichnete reine Audio-Medien sollte ein Transkript bereitgestellt werden, und für vorab aufgezeichnete reine Video-Medien (d. h. stummes Video) sollte ein Transkript oder eine Audiobeschreibung bereitgestellt werden.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Transkriptinformationen. Es ist noch kein Tutorial zur Audiobeschreibung verfügbar.</td>
    </tr>
    <tr>
       <td>1.2.2 Bereitstellen von Untertiteln für webbasierte Videos (A)</td>
       <td>Sie sollten Untertitel für auf dem Web präsentierte Videos bereitstellen (z. B. HTML-Video). Dies dient dem Nutzen von Menschen, die den Audio-Teil des Videos nicht hören können.</td>
       <td>Siehe <a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#video_text_tracks">Video-Textspuren</a> für HTML-Video-Untertitel. Siehe auch <a href="https://support.google.com/youtube/answer/2734796?hl=en">Eigene Untertitel &amp; geschlossene Untertitel hinzufügen</a> (YouTube).</td>
    </tr>
    <tr>
       <td>1.2.3 Bereitstellen von Texttranskripten oder Audiobeschreibungen für webbasierte Videos (A)</td>
       <td>Sie sollten Texttranskripte oder Audiobeschreibungen für auf dem Web präsentierte Videos bereitstellen (z. B. HTML-Video). Dies dient dem Nutzen von Menschen, die den visuellen Teil des Videos nicht sehen können und den gesamten Inhalt nicht nur aus dem Audio entnehmen.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Transkriptinformationen. Es ist noch kein Tutorial zur Audiobeschreibung verfügbar.</td>
    </tr>
    <tr>
       <td>1.2.4 Bereitstellen von Untertiteln für Live-Audio (AA)</td>
       <td>Sie sollten synchronisierte Untertitel für alle Live-Multimedia-Inhalte bereitstellen, die Audio enthalten (z. B. Videokonferenzen, Live-Audio-Übertragungen).</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.5 Bereitstellen von Audiobeschreibungen für vorab aufgezeichnete Videos (AA)</td>
       <td>Audiobeschreibungen sollten für vorab aufgezeichnete Videos bereitgestellt werden, jedoch nur, wenn das bestehende Audio nicht die volle Bedeutung des Videos vermittelt.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.6 Bereitstellen eines Gebärdensprachäquivalents zu vorab aufgezeichnetem Audio (AAA)</td>
       <td>Ein äquivalentes Gebärdensprachvideo sollte für jegliche vorab aufgezeichnete Inhalte bereitgestellt werden, die Audio enthalten.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.7 Bereitstellen eines erweiterten Videos mit Audiobeschreibungen (AAA)</td>
       <td>Wo aufgrund von Videotiming-Problemen keine Audiobeschreibungen bereitgestellt werden können (siehe 1.2.5), sollte eine alternative Version des Videos bereitgestellt werden, die Pausen beinhaltet, in die Audiobeschreibungen eingefügt werden können.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.8 Bereitstellen einer Alternative für vorab aufgezeichnete Medien (AAA)</td>
       <td>Für alle Inhalte, die Video enthalten, sollte ein beschreibendes Texttranskript bereitgestellt werden, zum Beispiel ein Skript des Filmes, den Sie ansehen. Dies dient dem Nutzen der hörgeschädigten Zuschauer, die den Inhalt nicht hören können.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Transkriptinformationen.</td>
    </tr>
    <tr>
       <td>1.2.9 Bereitstellen eines Transkripts für Live-Audio (AAA)</td>
       <td>Für jegliche Live-Audioinhalte, die übertragen werden, sollte ein beschreibender Text bereitgestellt werden, zum Beispiel ein Skript des Stücks oder Musicals, das Sie hören. Dies dient dem Nutzen der hörgeschädigten Zuschauer, die den Inhalt nicht hören können.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Transkriptinformationen.</td>
    </tr>
 </tbody>
</table>

> [!NOTE]
> Siehe auch die [WCAG-Beschreibung für Leitfaden 1.2: Zeitbasierte Medien: Bereitstellen von Alternativen für zeitbasierte Medien](https://www.w3.org/TR/WCAG21/#time-based-media).

## Leitfaden 1.3 — Erstellen von Inhalten, die auf unterschiedliche Weise präsentiert werden können

Dieser Leitfaden bezieht sich auf die Fähigkeit von Inhalten, von Benutzern auf verschiedene Weisen konsumiert zu werden, um ihren unterschiedlichen Bedürfnissen gerecht zu werden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie man den Kriterien entspricht</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
    <tr>
      <td>1.3.1 Info und Beziehungen (A)</td>
      <td>
        <p>
          Jede Inhaltsstruktur – oder visuelle Beziehung zwischen Inhalten – kann
          auch programmgesteuert bestimmt werden oder aus einer Textbeschreibung
          abgeleitet werden. Die Hauptsituationen, in denen dies relevant ist,
          sind:
        </p>
        <ul>
          <li>
            Textbeschriftungen und die Formularelemente, die sie beschreiben.
            Diese sind unmissverständlich mit dem {{htmlelement("label")}}
            verbunden, welches von Screenreadern usw. erkannt wird.
          </li>
          <li>
            Alt-Text für Bilder. Inhaltliche Bilder sollten über einen Text
            verfügen, der den Inhalt des Bildes klar beschreibt und
            programmgesteuert ihm zugeordnet werden kann (z. B. alt-Text),
            oder der anderweitig leicht zuzuordnen ist (z. B. es beschreibt
            und befindet sich direkt daneben). Dies sollte bedeuten, dass die
            vollständige Bedeutung auch dann abgeleitet werden kann, wenn Sie
            das Bild nicht sehen können.
          </li>
          <li>
            Listen. Wenn die Reihenfolge der Listenelemente wichtig ist, verwenden
            Sie eine geordnete Liste ({{htmlelement("ol")}}).
          </li>
        </ul>
      </td>
      <td>
        Der gesamte
        <p>
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML"
            >HTML: Eine gute Grundlage für Barrierefreiheit</a
          >
          ist voll mit Informationen zu diesem Thema, aber Sie sollten
          insbesondere auf
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#good_semantics"
            >Gute Semantik</a
          >,
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
            >UI-Steuerelemente</a
          >, und
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          >
          achten.
        </p>
      </td>
    </tr>
    <tr>
      <td>1.3.2 Sinnvolle Inhaltsfolge (A)</td>
      <td>
        Eine sinnvolle, logische Leseabfolge sollte für jeden Inhalt einfach zu
        bestimmen sein, auch wenn dieser visuell in ungewöhnlicher Weise
        präsentiert wird. Die Reihenfolge sollte durch die Verwendung
        korrekter semantischer Elemente (z. B. Überschriften, Absätze) deutlich
        gemacht werden, wobei CSS verwendet wird, um jede ungewöhnliche
        Layout-Stilart zu erstellen, unabhängig vom Markup.
      </td>
      <td>
        Auch hier referenzieren Sie
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML"
          >HTML: Eine gute Grundlage für Barrierefreiheit</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.3.3 Sensorische Merkmale (A)</td>
      <td>
        <p>
          Anweisungen zum Bedienen von Steuerelementen oder zum Verstehen von Inhalten
          hängen nicht von einem einzigen Sinn ab. Dies kann für Menschen mit einer
          Behinderung in Bezug auf diesen Sinn oder ein Gerät, das diesen Sinn nicht
          unterstützt, unzugänglich sein. So zum Beispiel:
        </p>
        <ul>
          <li>
            "Klicken Sie auf die runde Schaltfläche, um fortzufahren"<br />Die
            Schaltfläche sollte klar beschriftet sein, sodass offensichtlich ist, dass
            es sich um die Schaltfläche handelt, die gedrückt werden muss. Wenn es
            mehrere Schaltflächen gibt, stellen Sie sicher, dass sie alle deutlich
            beschriftet sind, um ihre Funktion zu unterscheiden.
          </li>
          <li>
            "Hören Sie sich die Audioanweisungen an, um Anleitung zu bekommen"<br
            />Dies ist offensichtlich problematisch—Audio wird für Menschen mit
            Hörbehinderungen unzugänglich sein, während Text gelesen, aber auch
            von einem Screenreader gesprochen werden kann, falls erforderlich.
          </li>
          <li>
            "Wischen Sie vom rechten Bildschirmrand, um das Menü anzuzeigen"<br
            />Einige Benutzer können möglicherweise nicht den Bildschirm wischen, 
            entweder aufgrund einer Behinderung oder weil ihr Gerät keine Berührung unterstützt. 
            Es sollte eine Alternative bereitgestellt werden, wie z. B. eine 
            Tastaturverknüpfung oder eine Schaltfläche, die per Tastatur oder auf andere Weise 
            aktiviert werden kann.
          </li>
        </ul>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Eine Zuweisung von Anweisungen ausschließlich
            über Farben ist verwandt, wird jedoch in einem anderen Leitfaden
            behandelt — 1.4.1.
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
        Inhalte schränken ihre Ansicht und Bedienung nicht auf eine einzige
        Ausrichtung ein, wie z. B. Hoch- oder Querformat, es sei denn, eine
        bestimmte Anzeigeausrichtung ist unabdingbar.
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
        1.3.5 Eingabebedeutung identifizieren (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          Folgen Sie der Liste der
          <a href="https://www.w3.org/TR/WCAG21/#input-purposes"
            >53 Eingabefelder</a
          >
          um programmgesteuert den Zweck eines Feldes zu identifizieren.
        </p>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html"
          >Verständnis der Eingabebedeutung</a
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
        In Inhalten, die mit Auszeichnungssprachen implementiert wurden, kann der
        Zweck von Benutzeroberflächenkomponenten, Symbolen und Regionen
        programmgesteuert bestimmt werden.
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
> Siehe auch die WCAG-Beschreibung für [Leitfaden 1.3: Anpassen: Erstellen von Inhalten, die auf unterschiedliche Weise präsentiert werden können, ohne Informationen oder Struktur zu verlieren.](https://www.w3.org/TR/WCAG21/#adaptable)

## Leitfaden 1.4: Erleichtern Sie es den Benutzern, Inhalte zu sehen und zu hören, indem Sie den Vordergrund vom Hintergrund trennen

Dieser Leitfaden bezieht sich auf die Sicherstellung, dass der Kerninhalt leicht vom Hintergrund und anderen Dekorationen zu unterscheiden ist. Das klassische Beispiel ist Farbe (sowohl [Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) als auch [Verwendung von Farbe](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Use_of_color) zur Vermittlung von Anweisungen), aber es gilt auch in anderen Situationen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie man den Kriterien entspricht</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
    <tr>
      <td>1.4.1 Verwendung von Farbe (A)</td>
      <td>
        <p>
          Farbe sollte nicht ausschließlich verwendet werden, um Informationen
          zu vermitteln. Zum Beispiel sollten in Formularen erforderliche Felder
          niemals nur mit einer Farbe (wie Rot) markiert werden. Stattdessen wären
            (oder zusätzlich) etwas wie ein Sternchen mit einer Beschriftung
          "erforderlich" angemessen.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Use_of_color"
          >Verwendung von Farbe</a
        >,
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast"
          >Farbe und Farbkontrast</a
        >,
        und
        <a
          href="/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#multiple_labels"
          >Mehrere Beschriftungen</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.2 Audiosteuerung (A)</td>
      <td>
        Für jede Audioausgabe, die länger als drei Sekunden abgespielt wird,
        stellen Sie zugängliche Steuerungen zum Abspielen und Pausieren von Audio/Video
        sowie zum Stummschalten/Anpassen der Lautstärke bereit.
      </td>
      <td>
        Verwenden Sie native <code>&lt;button&gt;</code>s, um zugängliche
        Tastatursteuerungen bereitzustellen, wie in
        <a
          href="/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics"
          >Grundlagen der Videoplayer-Gestaltung</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.3 Minimalkontrast (AA)</td>
      <td>
        <p>
          Der Farbkontrast zwischen Hintergrund und Vordergrundinhalten sollte
          ein Mindestniveau erreichen, um die Lesbarkeit zu gewährleisten:
        </p>
        <ul>
          <li>
            Text und Hintergrund sollten ein Kontrastverhältnis von mindestens
            4,5:1 haben.
          </li>
          <li>
            Überschriftstext (oder nur größerer Text) sollte ein Verhältnis
            von mindestens 3:1 haben. Größerer Text ist definiert als mindestens
            18pt oder 14pt fett.
          </li>
        </ul>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast"
          >Farbkontrast</a
        > und
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast"
          >Farbe und Farbkontrast</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.4 Textgröße ändern (AA)</td>
      <td>
        Die Seite sollte lesbar und nutzbar sein, wenn sich die Textgröße
        verdoppelt. Das bedeutet, dass das Design reaktionsfähig sein sollte,
        sodass bei einer erhöhten Textgröße der Inhalt dennoch zugänglich ist.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.5 Bilder von Text (AA)</td>
      <td>
        Bilder sollten NICHT verwendet werden, um Inhalte zu präsentieren,
        wenn Text die Aufgabe erledigen würde. Zum Beispiel, wenn ein Bild
        hauptsächlich aus Text besteht, könnte es mit Text sowie Bildern
        dargestellt werden.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.6 Verbesserter Kontrast (AAA)</td>
      <td>
        <p>Dies folgt und baut auf Kriterium 1.4.3 auf.</p>
        <ul>
          <li>
            Text und Hintergrund sollten ein Kontrastverhältnis von mindestens
            7:1 haben.
          </li>
          <li>
            Überschriftstext (oder nur größerer Text) sollte ein Verhältnis von mindestens 4,5:1 haben. Größerer Text ist definiert als mindestens 18pt oder 14pt fett.
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
      <td>1.4.7 Geringes oder kein Hintergrundaudio (AAA)</td>
      <td>
        Vorab aufgezeichnete Audioaufnahmen, die hauptsächlich Sprache beinhalten, sollten minimiertes Hintergrundrauschen haben, damit der Inhalt leicht verständlich ist.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.8 Visuelle Präsentation (AAA)</td>
      <td>
        <p>Die folgende Darstellung von Textinhalten sollte zutreffen:</p>
        <ul>
          <li>Vorder- und Hintergrundfarben sollten benutzerauswählbar sein.</li>
          <li>Textblöcke sollten maximal 80 Zeichen (oder Glyphen) breit sein, um maximale Lesbarkeit zu erzielen.</li>
          <li>Text sollte nicht vollständig gerechtfertigt sein (z. B. <code>text-align: justify;</code>).</li>
          <li>Der Zeilenabstand sollte innerhalb von Absätzen mindestens das 1,5-fache der Textgröße betragen (z. B. <code>line-height: 1.5;</code>), und zwischen Absätzen mindestens das 2,25-fache der Textgröße (z. B. <code>padding: 2.25rem;</code>).</li>
          <li>Wenn die Textgröße verdoppelt wird, sollte der Inhalt nicht gescrollt werden müssen.</li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.9 Bilder von Text (Keine Ausnahme) (AAA)</td>
      <td>
        Text sollte nicht als Teil eines Bildes dargestellt werden, es sei denn, es ist rein dekorativ (d. h. es vermittelt keinen Inhalt) oder kann auf keine andere Weise dargestellt werden.
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
          <li>Kein horizontales Scrollen für von links nach rechts lesende Sprachen (wie Englisch) oder von rechts nach links lesende Sprachen (wie Arabisch)</li>
          <li>Kein vertikales Scrollen für von oben nach unten lesende Sprachen (wie Japanisch)</li>
          <li>Außer für Teile des Inhalts, die ein zweidimensionales Layout zur Nutzung oder Bedeutung erfordern (wie eine große Datentabelle)</li>
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
        1.4.11 Nicht-Text-Kontrast (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        Minimales Farbkontrastverhältnis von 3:1 für Benutzeroberflächenkomponenten und grafische Objekte.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"
          >Verständnis von Nicht-Text-Kontrast</a
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
        <p>Kein Informationsverlust oder Funktionsverlust tritt auf, wenn die folgenden Stile angewendet werden:</p>
        <ul>
          <li>Zeilenhöhe (Zeilenabstand) mindestens 1,5-mal der Schriftgröße</li>
          <li>Abstand nach Absätzen mindestens 2-mal der Schriftgröße</li>
          <li>Buchstabenabstand (Tracking) mindestens 0,12-mal der Schriftgröße</li>
          <li>Wortabstand mindestens 0,16-mal der Schriftgröße</li>
        </ul>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
          >Verständnis des Textabstands</a
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
        <p>Während zusätzlicher Inhalt in Abstimmung mit Hover und Keyboard-Fokus angezeigt und ausgeblendet werden kann, spezifiziert dieses Erfolgskriterium drei Bedingungen, die erfüllt werden müssen:</p>
        <ul>
          <li>entfernbar (kann geschlossen/entfernt werden)</li>
          <li>hoverbar (der zusätzliche Inhalt verschwindet nicht, wenn das Zeigegerät darüber ist)</li>
          <li>persistent (der zusätzliche Inhalt verschwindet nicht ohne Benutzeraktion)</li>
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
> Siehe auch die WCAG-Beschreibung für [Leitfaden 1.4: Unterscheidbar: Erleichtern Sie es den Benutzern, Inhalte zu sehen und zu hören, indem Sie den Vordergrund vom Hintergrund trennen.](https://www.w3.org/TR/WCAG21/#distinguishable)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG)

  1. Wahrnehmbar
  2. [Bedienbar](/de/docs/Web/Accessibility/Understanding_WCAG/Operable)
  3. [Verstehbar](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Understanding_WCAG/Robust)
