---
title: Wahrnehmbar
slug: Web/Accessibility/Understanding_WCAG/Perceivable
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{AccessibilitySidebar}}

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so verfassen können, dass sie den Erfolgskriterien entsprechen, die im **Wahrnehmbar**-Prinzip der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 aufgeführt sind. Wahrnehmbar besagt, dass Benutzer in der Lage sein müssen, sie auf irgendeine Weise mit einem oder mehreren Sinnen wahrzunehmen.

> [!NOTE]
> Um die W3C-Definitionen für Wahrnehmbar und seine Richtlinien sowie Erfolgskriterien zu lesen, siehe [Prinzip 1: Wahrnehmbar - Informationen und Benutzeroberflächenkomponenten müssen den Benutzern auf wahrnehmbare Weise präsentiert werden.](https://www.w3.org/TR/WCAG21/#perceivable)

## Richtlinie 1.1 — Bereitstellung von Textalternativen für nicht-textuelle Inhalte

Der Schlüssel dabei ist, dass Text in andere Formen umgewandelt werden kann, die Menschen mit Behinderungen nutzen können. Zum Beispiel kann er von einem Screenreader gesprochen, in Großdruck umgewandelt oder auf einem Braille-Display dargestellt werden. Nicht-textuelle Inhalte beziehen sich auf Multimediainhalte wie Bilder, Audio und Video.

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
      <td rowspan="5">1.1.1 Bereitstellung von Textäquivalenten (A)</td>
      <td>
        Allen Bildern, die sinnvolle Inhalte übermitteln, sollte ein geeignetes
        alternatives Textäquivalent gegeben werden.
      </td>
      <td>
        <a href="/de/docs/Learn/Accessibility/HTML#text_alternatives"
          >Textalternativen.</a
        >
      </td>
    </tr>
    <tr>
      <td>
        Komplexe Bilder oder Diagramme sollten über eine zugängliche Alternative
        verfügen, entweder auf derselben Seite oder über einen Link. Verwenden
        Sie einen regulären Link anstelle eines <code>longdesc</code>-Attributs.
      </td>
      <td>
        <p>
          Ein Textbeschreibung könnte funktionieren, oder eine zugängliche
          Datentabelle (siehe
          <a href="/de/docs/Learn/HTML/Tables/Advanced"
            >Erweiterte Tabellenfunktionen und Barrierefreiheit in HTML</a
          >). Siehe W3C's
          <a href="https://www.w3.org/TR/html-longdesc/">Image Description Extension (longdesc)</a>
          für das Argument gegen <code>longdesc</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Multimediainhalte (z. B. Audio oder Video) sollten zumindest eine
        beschreibende Identifikation aufweisen, wie z. B. eine Untertitelung oder
        ähnliches.
      </td>
      <td>
        <p>
          Siehe <a href="/de/docs/Learn/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          >
          für statische Untertiteloptionen und
          <a href="/de/docs/Learn/Accessibility/Multimedia#audio_transcripts"
            >Audiotranskripte</a
          >,
          <a href="/de/docs/Learn/Accessibility/Multimedia#video_text_tracks"
            >Video-Textspuren</a
          >
          für andere Alternativen.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        UI-Steuerelemente wie Formularelemente und Schaltflächen sollten über
        Textbeschriftungen verfügen, die deren Zweck beschreiben.
      </td>
      <td>
        Bei Schaltflächen ist es einfach—stellen Sie sicher, dass der
        Schaltflächentext die Funktion der Schaltfläche beschreibt (z. B. <code
          >&#x3C;button>Bild hochladen&#x3C;/button></code
        >). Für weitere Informationen zu anderen UI-Steuerelementen siehe
        <a href="/de/docs/Learn/Accessibility/HTML#ui_controls"
          >UI-Steuerelemente</a
        >.
      </td>
    </tr>
    <tr>
      <td>
        Implementieren Sie dekorative (nicht-inhaltliche) Bilder, Videos usw. so,
        dass sie für unterstützende Technologien nicht sichtbar sind, um
        Benutzer nicht zu verwirren.
      </td>
      <td>
        <p>
          Dekorative Bilder sollten mit CSS-Hintergrundbildern umgesetzt werden
          (siehe
          <a
            href="/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders"
            >Hintergründe</a
          >). Wenn Sie ein Bild über ein {{htmlelement("img")}}-Element einfügen
          müssen, geben Sie ihm ein leeres alt (<code>alt=""</code>). Andernfalls
          könnten Screenreader versuchen, den Dateipfad usw. vorzulesen.
        </p>
        <p>
          Wenn Sie automatisch abspielende Hintergrundvideos oder -audios
          einschließen, machen Sie es so unauffällig wie möglich. Es sollte nicht
          wie Inhalt aussehen/klingen und eine Steuerung zum Ausschalten sollte
          bereitgestellt werden. Idealerweise sollten Sie es gar nicht erst
          einfügen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die [WCAG-Beschreibung für Richtlinie 1.1: Textalternativen](https://www.w3.org/TR/WCAG21/#text-alternatives).

## Richtlinie 1.2 — Bereitstellung von Textalternativen für zeitbasierte Medien

Zeitbasierte Medien beziehen sich auf Multimedia mit einer Dauer, wie Audio und Video. Beachten Sie, dass Sie keine weitere Textalternative bereitstellen müssen, wenn das Audio/Video als Alternative zu vorhandenen Textinhalten dient.

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
       <td>1.2.1 Bereitstellung von Alternativen für vorab aufgezeichnete Audio- und Video-Only-Inhalte (A)</td>
       <td>Ein Transkript sollte für vorab aufgezeichnete Audio-Only-Medien bereitgestellt werden, und ein Transkript oder eine Audiobeschreibung sollte für vorab aufgezeichnete Video-Only-Medien (d. h. stummes Video) bereitgestellt werden.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn/Accessibility/Multimedia#audio_transcripts">Audiotranskripte</a> für Informationen über Transkripte. Kein Tutorial zur Audiobeschreibung ist derzeit verfügbar.</td>
    </tr>
    <tr>
       <td>1.2.2 Bereitstellung von Untertiteln für webbasierte Videos (A)</td>
       <td>Sie sollten Untertitel für im Web präsentierte Videos bereitstellen (z. B. HTML-Video). Dies kommt Menschen zugute, die den Audioteil des Videos nicht hören können.</td>
       <td>Siehe <a href="/de/docs/Learn/Accessibility/Multimedia#video_text_tracks">Video-Textspuren</a> für HTML-Video-Untertitel. Siehe auch <a href="https://support.google.com/youtube/answer/2734796?hl=de">Eigene Untertitel und geschlossene Untertitel hinzufügen</a> (YouTube).</td>
    </tr>
    <tr>
       <td>1.2.3 Bereitstellung von Texttranskripten oder Audiobeschreibungen für webbasierte Videos (A)</td>
       <td>Sie sollten Texttranskripte oder Audiobeschreibungen für im Web präsentierte Videos bereitstellen (z. B. HTML-Video). Dies kommt Menschen zugute, die den visuellen Teil des Videos nicht sehen können und den Inhalt nicht ausschließlich über das Audio erhalten.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn/Accessibility/Multimedia#audio_transcripts">Audiotranskripte</a> für Informationen über Transkripte. Kein Tutorial zur Audiobeschreibung ist derzeit verfügbar.</td>
    </tr>
    <tr>
       <td>1.2.4 Bereitstellung von Untertiteln für Live-Audio (AA)</td>
       <td>Sie sollten synchronisierte Untertitel für alle Live-Multimedia bereithalten, die Audio enthalten (z. B. Videokonferenzen, Live-Audioübertragungen).</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.5 Bereitstellung von Audiobeschreibungen für vorab aufgezeichnete Videos (AA)</td>
       <td>Audiobeschreibungen sollten für vorab aufgezeichnete Videos bereitgestellt werden, jedoch nur, wenn das vorhandene Audio die volle Bedeutung, die das Video ausdrückt, nicht wiedergibt.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.6 Bereitstellung eines gebärdensprachlichen Äquivalents für vorab aufgezeichnetes Audio (AAA)</td>
       <td>Ein gleichwertiges Gebärdensprachvideo sollte für Inhalte bereitgestellt werden, die Audio enthalten.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.7 Bereitstellung erweiterter Videos mit Audiobeschreibungen (AAA)</td>
       <td>Wo Audiobeschreibungen aufgrund von Video-Timing-Problemen (siehe 1.2.5) nicht bereitgestellt werden können (z. B. weil es keine geeigneten Pausen im Inhalt gibt, in die Audiobeschreibungen eingefügt werden können), sollte eine alternative Version des Videos bereitgestellt werden, die eingefügte Pausen (und Audiobeschreibungen) enthält.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.8 Bereitstellung einer Alternative für vorab aufgezeichnete Medien (AAA)</td>
       <td>Für alle Inhalte, die Video enthalten, sollte ein beschreibendes Texttranskript bereitgestellt werden, z. B. ein Drehbuch des Films, den Sie gerade schauen. Dies kommt hörgeschädigten Zuschauern zugute, die den Inhalt nicht hören können.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn/Accessibility/Multimedia#audio_transcripts">Audiotranskripte</a> für Informationen über Transkripte.</td>
    </tr>
    <tr>
       <td>1.2.9 Bereitstellung eines Transkripts für Live-Audio (AAA)</td>
       <td>Für alle Live-Audioinhalte, die übertragen werden, sollte ein beschreibender Text bereitgestellt werden, z. B. ein Drehbuch des Stücks oder Musicals, das Sie gerade hören. Dies kommt hörgeschädigten Zuschauern zugute, die den Inhalt nicht hören können.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn/Accessibility/Multimedia#audio_transcripts">Audiotranskripte</a> für Informationen über Transkripte.</td>
    </tr>
 </tbody>
</table>

> [!NOTE]
> Siehe auch die [WCAG-Beschreibung für Richtlinie 1.2: Zeitbasierte Medien: Bereitstellung von Alternativen für zeitbasierte Medien](https://www.w3.org/TR/WCAG21/#time-based-media).

## Richtlinie 1.3 — Erstellen von Inhalten, die auf unterschiedliche Weise präsentiert werden können

Diese Richtlinie bezieht sich auf die Fähigkeit, Inhalte auf verschiedene Weise zu konsumieren, um den unterschiedlichen Bedürfnissen der Benutzer gerecht zu werden.

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
          Jede Struktur von Inhalten oder visuelle Beziehungen zwischen
          Inhalten können auch programmatisch ermittelt oder aus
          Textbeschreibungen abgeleitet werden. Die Hauptsituationen, in denen
          dies relevant ist, sind:
        </p>
        <ul>
          <li>
            Textbeschriftungen und die Formularelemente, die sie beschreiben.
            Diese sind eindeutig mit dem {{htmlelement("label")}}-Element
            verbunden, das von Screenreadern usw. erkannt werden kann.
          </li>
          <li>
            Alt-Text für Bilder. Inhaltebilder sollten einen Text enthalten,
            der den Inhalt des Bildes klar beschreibt und programmatisch
            zugeordnet werden kann (z. B. alt-Text) oder leicht
            zuzuordnen ist (z. B. beschreibt es und befindet sich direkt
            daneben). Dies sollte sicherstellen, dass die volle Bedeutung auch
            dann abgeleitet werden kann, wenn man das Bild nicht sehen kann.
          </li>
          <li>
            Listen. Wenn die Reihenfolge der Listenelemente wichtig ist,
            verwenden Sie eine geordnete Liste ({{htmlelement("ol")}}).
          </li>
        </ul>
      </td>
      <td>
        Die gesamte
        <p>
          <a href="/de/docs/Learn/Accessibility/HTML"
            >HTML: Eine gute Basis für Barrierefreiheit</a
          >
          ist mit Informationen dazu gespickt, aber Sie sollten
          insbesondere darauf achten,
          <a href="/de/docs/Learn/Accessibility/HTML#good_semantics"
            >gute Semantik</a
          >,
          <a href="/de/docs/Learn/Accessibility/HTML#ui_controls"
            >UI-Steuerelemente</a
          > und
          <a href="/de/docs/Learn/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>1.3.2 Sinnvolle Inhaltssequenz (A)</td>
      <td>
        Eine sinnvolle, logische Lesereihenfolge sollte für alle Inhalte leicht
        zu bestimmen sein, auch wenn sie visuell auf eine ungewöhnliche Weise
        präsentiert werden. Die Reihenfolge sollte durch die Verwendung von
        korrekten semantischen Elementen (z. B. Überschriften, Absätze)
        kenntlich gemacht werden, wobei CSS verwendet werden sollte, um
        ungewöhnliche Layoutstile zu erstellen, unabhängig von der
        Markupsprache.
      </td>
      <td>
        Wieder beziehen Sie sich auf
        <a href="/de/docs/Learn/Accessibility/HTML"
          >HTML: Eine gute Basis für Barrierefreiheit</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.3.3 Sensorische Merkmale (A)</td>
      <td>
        <p>
          Anweisungen für die Bedienung von Steuerungen oder das Verständnis von
          Inhalten hängen nicht von einem einzigen Sinn ab. Dies kann für
          Menschen mit einer Behinderung in Bezug auf diesen Sinn oder ein
          Gerät, das diesen Sinn nicht unterstützt, unzugänglich sein. Zum
          Beispiel:
        </p>
        <ul>
          <li>
            "Klicken Sie auf die runde Schaltfläche, um fortzufahren"<br />Die
            Schaltfläche sollte klar beschriftet sein, sodass ersichtlich ist,
            dass es die Schaltfläche ist, die Sie drücken müssen. Wenn es
            mehrere Schaltflächen gibt, stellen Sie sicher, dass alle
            eindeutig beschriftet sind, um ihre Funktion zu unterscheiden.
          </li>
          <li>
            "Hören Sie sich die Audioanweisungen zur Orientierung an"<br />Dies
            ist offensichtlich problematisch—Audio wird für Menschen mit
            Hörbeeinträchtigungen unzugänglich sein, während Text gelesen, aber
            bei Bedarf auch von einem Screenreader vorgelesen werden kann.
          </li>
          <li>
            "Wischen Sie von der rechten Seite des Bildschirms, um das Menü
            anzuzeigen"<br />Einige Benutzer können den Bildschirm möglicherweise
            nicht wischen, entweder aufgrund einer Behinderung oder weil ihr
            Gerät keine Berührung unterstützt. Eine Alternative sollte
            bereitgestellt werden, wie z. B. ein Tastaturkürzel oder eine
            Schaltfläche, die über die Tastatur oder auf andere Weise aktiviert
            werden kann.
          </li>
        </ul>
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Das Übermitteln von Anweisungen
            ausschließlich durch Farbe ist verwandt, wird jedoch in einer
            anderen Richtlinie behandelt — 1.4.1.
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
        Der Inhalt schränkt die Sicht- und Bedienmöglichkeit nicht auf eine
        einzelne Ausrichtungsansicht, wie Hoch- oder Querformat, ein, es sei
        denn, eine spezifische Anzeigeorientierung ist essenziell.
      </td>
      <td>
        <p>
          <a href="https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
            >Orientierung verstehen</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        1.3.5 Eingabezweck identifizieren (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          Befolgen Sie die Liste der
          <a href="https://www.w3.org/TR/WCAG21/#input-purposes"
            >53 Eingabefelder</a
          >
          zur programmatischen Identifizierung des Zwecks eines Feldes.
        </p>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html"
          >Zweck der Eingabe identifizieren verstehen</a
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
        In mit Markup-Sprachen umgesetzten Inhalten kann der Zweck von
        Benutzeroberflächenkomponenten, Symbolen und Regionen programmatisch
        bestimmt werden.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html"
          >Zweck identifizieren verstehen</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 1.3: Anpassbar: Erstellen Sie Inhalte, die in verschiedenen Weisen ohne Verlust von Informationen oder Struktur präsentiert werden können.](https://www.w3.org/TR/WCAG21/#adaptable)

## Richtlinie 1.4: Es den Benutzern erleichtern, Inhalte zu sehen und zu hören, einschließlich der Trennung von Vordergrund und Hintergrund

Diese Richtlinie bezieht sich darauf, dass sichergestellt wird, dass die Kerninhalte leicht von Hintergründen und anderer Dekoration abgrenzbar sind. Das klassische Beispiel ist Farbe (sowohl [Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) als auch [Verwendung von Farbe](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Use_of_color) zur Vermittlung von Anweisungen), aber es gilt auch in anderen Situationen.

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
          Farbe sollte nicht ausschließlich zur Übermittlung von Informationen
          verwendet werden. Zum Beispiel sollten in Formularen erforderliche
          Felder niemals nur durch eine Farbe (wie Rot) gekennzeichnet werden.
          Stattdessen (oder auch zusätzlich) wäre etwas wie ein Sternchen mit
          einer Beschriftung „erforderlich“ geeigneter.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Use_of_color"
          >Verwendung von Farbe</a
        >,
        <a
          href="/de/docs/Learn/Accessibility/CSS_and_JavaScript#color_and_color_contrast"
          >Farbe und Farbkontrast</a
        >,
        und
        <a
          href="/de/docs/Learn/Forms/How_to_structure_a_web_form#multiple_labels"
          >Mehrere Beschriftungen</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.2 Audiosteuerungen (A)</td>
      <td>
        Bei allen Audiodateien, die länger als drei Sekunden spielen, sollten
        zugängliche Steuerungen zum Abspielen und Anhalten des Audios/Videos
        und zum Stummschalten/Anpassen der Lautstärke bereitgestellt werden.
      </td>
      <td>
        Verwenden Sie native <code>&lt;button&gt;</code>s, um zugängliche
        Tastatursteuerungen bereitzustellen, wie in
        <a
          href="/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics"
          >Grundlagen der Videoplayer-Stilisierung</a
        > gezeigt.
      </td>
    </tr>
    <tr>
      <td>1.4.3 Mindestkontrast (AA)</td>
      <td>
        <p>
          Der Farbkontrast zwischen Hintergrund und Vordergrundinhalten sollte
          ein Mindestniveau haben, um die Lesbarkeit sicherzustellen:
        </p>
        <ul>
          <li>
            Text und sein Hintergrund sollten ein Kontrastverhältnis von
            mindestens 4,5:1 haben.
          </li>
          <li>
            Überschriften (oder einfach größerer) Text sollten ein Verhältnis
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
          href="/de/docs/Learn/Accessibility/CSS_and_JavaScript#color_and_color_contrast"
          >Farbe und Farbkontrast</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.4 Text vergrößern (AA)</td>
      <td>
        Die Seite sollte lesbar und nutzbar sein, wenn die Textgröße verdoppelt
        wird. Dies bedeutet, dass Designs reaktiv sein sollten, damit der
        Inhalt bei vergrößertem Text weiterhin zugänglich ist.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.5 Bilder von Text (AA)</td>
      <td>
        Bilder sollten NICHT verwendet werden, um Inhalte darzustellen, wenn
        Text dies übernehmen könnte. Beispielsweise könnte ein Bild, das
        überwiegend aus Text besteht, ebenso gut mit Text und Bildern
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
            Text und sein Hintergrund sollten ein Kontrastverhältnis von
            mindestens 7:1 haben.
          </li>
          <li>
            Überschriften (oder einfach größerer) Text sollten ein Verhältnis
            von mindestens 4,5:1 haben. Größerer Text ist definiert als
            mindestens 18pt oder 14pt fett.
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
      <td>1.4.7 Niedrige oder keine Hintergrund-Audio (AAA)</td>
      <td>
        Vorgefertigte Audioaufnahmen, die hauptsächlich Sprache enthalten,
        sollten minimalen Hintergrundgeräusche haben, damit der Inhalt leicht
        verstanden werden kann.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.8 Visuelle Darstellung (AAA)</td>
      <td>
        <p>Für die Präsentation von Textinhalten sollte folgendes gelten:</p>
        <ul>
          <li>Vordergrund- und Hintergrundfarben sollten vom Benutzer auswählbar sein.</li>
          <li>
            Textblöcke sollten nicht breiter als 80 Zeichen (oder Glyphen) sein,
            um die maximale Lesbarkeit zu gewährleisten.
          </li>
          <li>
            Text sollte nicht voll ausgerichtet sein (z. B. <code
              >text-align: justify;</code
            >).
          </li>
          <li>
            Der Zeilenabstand sollte innerhalb von Absätzen mindestens 1,5-mal
            so groß wie die Textgröße sein (z. B. <code>line-height: 1.5;</code>)
            und zwischen den Absätzen mindestens 2,25-mal so groß wie die
            Textgröße (z. B. <code>padding: 2.25rem;</code>).
          </li>
          <li>
            Wenn die Textgröße verdoppelt wird, sollte der Inhalt nicht
            gescrollt werden müssen.
          </li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.9 Bilder von Text (Keine Ausnahme) (AAA)</td>
      <td>
        Text sollte nicht als Teil eines Bildes dargestellt werden, es sei denn,
        es handelt sich um reine Dekoration (d. h. es vermittelt keinen Inhalt)
        oder kann auf keine andere Weise dargestellt werden.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        1.4.10 Umfluss (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <ul>
          <li>
            Kein horizontales Scrollen für links-nach-rechts-Sprachen (wie
            Englisch) oder rechts-nach-links-Sprachen (wie Arabisch)
          </li>
          <li>
            Kein vertikales Scrollen für oben-nach-unten-Sprachen (wie
            Japanisch)
          </li>
          <li>
            Abgesehen von Teilen des Inhalts, die ein zweidimensionales Layout
            für die Nutzung oder Bedeutung erfordern (wie eine große
            Datentabelle)
          </li>
        </ul>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
          >Umfluss verstehen</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.4.11 Nicht-Text-Kontrast(AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        Minimales Farbkontrastverhältnis von 3:1 für
        Benutzeroberflächenkomponenten und grafische Objekte.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"
          >Nicht-Text-Kontrast verstehen</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.4.12 Textabstände (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          Es kommt zu keinem Verlust von Inhalt oder Funktionalität, wenn die
          folgenden Stile angewendet werden:
        </p>
        <ul>
          <li>Zeilenhöhe (Zeilenabstand) mindestens 1,5-mal der Schriftgröße</li>
          <li>
            Abstand nach Absätzen mindestens 2-mal der Schriftgröße
          </li>
          <li>
            Buchstabenabstand (Tracking) mindestens 0,12-mal der Schriftgröße
          </li>
          <li>Wortabstand mindestens 0,16-mal der Schriftgröße</li>
        </ul>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
          >Textabstände verstehen</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.4.13 Inhalte beim Hovern oder Fokussieren (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          Während zusätzlicher Inhalt in Koordination mit Hover und
          Tastaturfokus erscheinen und verschwinden kann, legt dieses
          Erfolgskriterium drei Bedingungen fest, die erfüllt sein müssen:
        </p>
        <ul>
          <li>verwerfbar (kann geschlossen/entfernt werden)</li>
          <li>
            hervorgehobene (der zusätzliche Inhalt verschwindet nicht, wenn der
            Zeiger darüber ist)
          </li>
          <li>
            persistent (der zusätzliche Inhalt verschwindet nicht ohne
            Benutzereingriff)
          </li>
        </ul>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html"
          >Inhalte beim Hovern oder Fokussieren verstehen</a
        >
      </td>
    </tr>
  </thead>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 1.4: Unterscheidbar: Es den Benutzern erleichtern, Inhalte zu sehen und zu hören, einschließlich der Trennung von Vordergrund und Hintergrund.](https://www.w3.org/TR/WCAG21/#distinguishable)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG)

  1. Wahrnehmbar
  2. [Bedienbar](/de/docs/Web/Accessibility/Understanding_WCAG/Operable)
  3. [Verständlich](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Understanding_WCAG/Robust)
