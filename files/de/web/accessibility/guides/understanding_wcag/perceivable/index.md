---
title: Wahrnehmbar
slug: Web/Accessibility/Guides/Understanding_WCAG/Perceivable
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so gestalten, dass sie den Erfolgskriterien entsprechen, die im **wahrnehmbaren** Prinzip der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 festgelegt sind. Wahrnehmbar bedeutet, dass Benutzer in der Lage sein müssen, es auf irgendeine Weise wahrzunehmen, indem sie einen oder mehrere ihrer Sinne nutzen.

> [!NOTE]
> Um die W3C-Definitionen für Wahrnehmbar und seine Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 1: Wahrnehmbar - Informationen und Benutzeroberflächenkomponenten müssen so dargestellt werden, dass Benutzer sie wahrnehmen können.](https://www.w3.org/TR/WCAG21/#perceivable)

## Richtlinie 1.1 — Bereitstellung von Textalternativen für nicht-textuelle Inhalte

Der Schlüssel hierbei ist, dass Text in andere Formen umgewandelt werden kann, die Menschen mit Behinderungen nutzen können. Beispielsweise kann er von einem Screenreader gesprochen, in großen Druck umgewandelt oder auf einem Brailledisplay dargestellt werden. Nicht-textuelle Inhalte beziehen sich auf Multimedia wie Bilder, Audio und Video.

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
      <td rowspan="5">1.1.1 Textäquivalente bereitstellen (A)</td>
      <td>
        Alle Bilder, die bedeutungsvolle Inhalte vermitteln, sollten mit
        geeignetem alternativem Text versehen werden.
      </td>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives"
          >Textalternativen.</a
        >
      </td>
    </tr>
    <tr>
      <td>
        Komplexe Bilder oder Grafiken sollten eine barrierefreie Alternative
        haben, entweder auf derselben Seite oder über einen Link. Verwenden Sie
        einen regulären Link anstelle eines <code>longdesc</code>-Attributs.
      </td>
      <td>
        <p>
          Eine Textbeschreibung kann sinnvoll sein, oder eine barrierefreie
          Datentabelle (siehe
          <a href="/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility"
            >HTML-Tabellenbarrierefreiheit</a
          >). Siehe W3C's
          <a href="https://www.w3.org/TR/html-longdesc/">Image Description Extension (longdesc)</a>
          für das Argument gegen <code>longdesc</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Multimedia-Inhalte (z. B. Audio oder Video) sollten zumindest über eine
        beschreibende Kennzeichnung wie eine Untertitelung verfügen.
      </td>
      <td>
        <p>
          Siehe <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          >
          für statische Untertiteloptionen, und
          <a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts"
            >Audiotranskripte</a
          >,
          <a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#video_text_tracks"
            >Videotextspuren</a
          >
          für andere Alternativen.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        UI-Steuerungselemente wie Formularelemente und Buttons sollten
        Textlabels haben, die ihren Zweck beschreiben.
      </td>
      <td>
        Buttons sind einfach—Sie sollten sicherstellen, dass der Buttontext die
        Funktion des Buttons beschreibt (z.B., <code
          >&#x3C;button>Upload image&#x3C;/button></code
        >). Weitere Informationen zu anderen UI-Steuerelementen finden Sie unter
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie semantische UI-Steuerelemente, wo immer möglich</a
        >.
      </td>
    </tr>
    <tr>
      <td>
        Dekorative (Nicht-Inhalts-)Bilder, Videos usw. sollten so implementiert
        werden, dass sie von assistiven Technologien unsichtbar sind, um
        Benutzer nicht zu verwirren.
      </td>
      <td>
        <p>
          Dekorative Bilder sollten mit CSS-Hintergrundbildern implementiert
          werden (siehe
          <a
            href="/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders"
            >Hintergründe und Ränder</a
          >). Wenn Sie ein Bild über ein
          {{htmlelement("img")}}-Element einfügen müssen, geben Sie ihm ein
          leeres Alt-Attribut (<code>alt=""</code>). Andernfalls versuchen
          Screenreader möglicherweise, den Dateipfad usw.
          vorzulesen.
        </p>
        <p>
          Wenn Sie ein Hintergrundvideo oder -audio einfügen, das automatisch
          abgespielt wird, machen Sie es so unauffällig wie möglich. Lassen Sie
          es nicht wie Inhalt aussehen/klingen und bieten Sie eine Steuerung an,
          um es auszuschalten. Idealerweise sollten Sie es überhaupt nicht
          einfügen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die [WCAG-Beschreibung für Richtlinie 1.1: Textalternativen](https://www.w3.org/TR/WCAG21/#text-alternatives).

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
       <td>1.2.1 Alternativen für vorab aufgezeichnete nur Audio- und nur Video-Inhalte bereitstellen (A)</td>
       <td>Ein Transkript sollte für voraufgezeichnete nur Audio-Medien bereitgestellt werden, und ein Transkript oder eine Audiobeschreibung sollte für voraufgezeichnete nur Video-Medien (d.h. stilles Video) bereitgestellt werden.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audiotranskripte</a> für Transkriptinformationen. Es ist noch kein Tutorial zur Audiobeschreibung verfügbar.</td>
    </tr>
    <tr>
       <td>1.2.2 Untertitel für internetbasiertes Video bereitstellen (A)</td>
       <td>Sie sollten Untertitel für Videos bereitstellen, die im Internet präsentiert werden (z.B. HTML-Video). Dies kommt Menschen zugute, die den Audioteil des Videos nicht hören können.</td>
       <td>Siehe <a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#video_text_tracks">Videotextspuren</a> für HTML-Video-Untertitel. Siehe auch <a href="https://support.google.com/youtube/answer/2734796?hl=en">Fügen Sie eigene Untertitel hinzu</a> (YouTube).</td>
    </tr>
    <tr>
       <td>1.2.3 Texttranskript oder Audiobeschreibung für internetbasiertes Video bereitstellen (A)</td>
       <td>Sie sollten Texttranskripte oder Audiobeschreibungen für Videos bereitstellen, die im Internet präsentiert werden (z.B. HTML-Video). Dies dient Menschen, die den visuellen Teil des Videos nicht sehen können und den kompletten Inhalt nicht nur aus dem Audio erschließen.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audiotranskripte</a> für Transkriptinformationen. Es ist noch kein Tutorial zur Audiobeschreibung verfügbar.</td>
    </tr>
    <tr>
       <td>1.2.4 Untertitel für Live-Audio bereitstellen (AA)</td>
       <td>Sie sollten synchronisierte Untertitel für sämtliche Live-Multimedia bereitstellen, das Audio enthält (z.B. Videokonferenzen, Live-Audio-Übertragungen).</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.5 Audiobeschreibungen für voraufgezeichnetes Video bereitstellen (AA)</td>
       <td>Audiobeschreibungen sollten für voraufgezeichnetes Video bereitgestellt werden, jedoch nur, wenn das bestehende Audio die im Video ausgedrückte volle Bedeutung nicht vermittelt.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.6 Gebärdenspracheäquivalent zu voraufgezeichnetem Audio bereitstellen (AAA)</td>
       <td>Ein gleichwertiges Gebärdensprachevideo sollte für jegliche voraufgezeichneten Inhalte bereitgestellt werden, die Audio enthalten.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.7 Erweiterte Videos mit Audiobeschreibungen bereitstellen (AAA)</td>
       <td>Wo Audiobeschreibungen nicht bereitgestellt werden können (siehe 1.2.5) aufgrund von Video-Zeitproblemen (z.B. es gibt keine geeigneten Pausen im Inhalt, in denen die Audiobeschreibungen eingefügt werden können), sollte eine alternative Version des Videos bereitgestellt werden, die eingefügte Pausen (und Audiobeschreibungen) enthält.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.8 Alternative für voraufgezeichnete Medien bereitstellen (AAA)</td>
       <td>Für alle Inhalte, die Video enthalten, sollte ein beschreibendes Texttranskript bereitgestellt werden, zum Beispiel ein Drehbuch des Films, den Sie anschauen. Dies dient hörbehinderten Zuschauern, die den Inhalt nicht hören können.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audiotranskripte</a> für Transkriptinformationen.</td>
    </tr>
    <tr>
       <td>1.2.9 Transkript für Live-Audio bereitstellen (AAA)</td>
       <td>Für jegliche Live-Audioinhalte, die ausgestrahlt werden, sollte ein beschreibender Text bereitgestellt werden, zum Beispiel ein Drehbuch des Stückes oder der Musik, die Sie hören. Dies dient hörbehinderten Zuschauern, die den Inhalt nicht hören können.</td>
       <td>Siehe&nbsp;<a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audiotranskripte</a> für Transkriptinformationen.</td>
    </tr>
 </tbody>
</table>

> [!NOTE]
> Siehe auch die [WCAG-Beschreibung für Richtlinie 1.2: Zeitbasierte Medien: Bereitstellung von Alternativen für zeitbasierte Medien](https://www.w3.org/TR/WCAG21/#time-based-media).

## Richtlinie 1.3 — Erstellen von Inhalten, die auf unterschiedliche Weise präsentiert werden können

Diese Richtlinie bezieht sich auf die Fähigkeit von Inhalten, von Benutzern auf verschiedene Weise konsumiert zu werden, wobei deren unterschiedliche Bedürfnisse berücksichtigt werden.

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
          Jegliche Inhaltsstruktur—oder visuelle Beziehung zwischen Inhalten—
          kann auch programmatisch bestimmt oder aus Textbeschreibungen
          abgeleitet werden. Die Hauptsituationen, in denen dies relevant ist,
          sind:
        </p>
        <ul>
          <li>
            Textbeschriftungen und die von ihnen beschriebenen Formularelemente.
            Diese sind eindeutig mit dem {{htmlelement("label")}}-Element
            verknüpft, das von Screenreadern usw. erfasst werden kann.
          </li>
          <li>
            Bild-Alt-Text. Inhaltsbilder sollten über Text verfügen, der
            deren Inhalt klar beschreibt und der programmatisch damit
            verknüpft werden kann (z.B. alt Text) oder anderweitig leicht
            zuzuordnen ist (z.B. beschreibt es und ist direkt daneben
            platziert). Dies sollte bedeuten, dass die vollständige Bedeutung
            auch dann erschlossen werden kann, wenn Sie das Bild nicht sehen
            können.
          </li>
          <li>
            Listen. Wenn die Reihenfolge der Listenelemente wichtig ist,
            verwenden Sie eine geordnete Liste ({{htmlelement("ol")}}).
          </li>
        </ul>
      </td>
      <td>
        Das gesamte
        <p>
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML"
            >HTML: Eine gute Grundlage für Barrierefreiheit</a
          >
          ist vollgepackt mit Informationen dazu, aber Sie sollten
          insbesondere auf
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#good_semantics"
            >Gute Semantik</a
          >,
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
            >Verwenden Sie semantische UI-Steuerelemente, wo möglich</a
          >, und
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>1.3.2 Bedeutungsvolle Inhaltssequenz (A)</td>
      <td>
        Eine sinnvolle, logische Lesereihenfolge sollte für jegliche Inhalte
        leicht erkennbar sein, selbst wenn sie visuell auf ungewöhnliche Weise
        präsentiert werden. Die Reihenfolge sollte durch die Verwendung
        korrekter semantischer Elemente (z.B. Überschriften, Absätze)
        deutlich gemacht werden, wobei CSS verwendet wird, um ungewöhnliche
        Layoutstile zu erstellen, unabhängig von der Auszeichnung.
      </td>
      <td>
        Erneut verweisen Sie auf
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML"
          >HTML: Eine gute Grundlage für Barrierefreiheit</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.3.3 Sensorische Merkmale (A)</td>
      <td>
        <p>
          Anweisungen zum Bedienen von Steuerelementen oder zum Verstehen von
          Inhalten basieren nicht nur auf einem einzelnen Sinn. Dies kann für
          Menschen mit einer Behinderung, die mit diesem Sinn in Verbindung
          steht, oder für ein Gerät, das diesen Sinn nicht unterstützt,
          unzugänglich sein. Zum Beispiel:
        </p>
        <ul>
          <li>
            "Klicken Sie auf die runde Schaltfläche, um fortzufahren"<br />Die
            Schaltfläche sollte klar beschriftet sein, damit offensichtlich ist,
            dass es die Schaltfläche ist, die Sie drücken müssen. Wenn es
            mehrere Schaltflächen gibt, stellen Sie sicher, dass alle klar
            beschriftet sind, um deren Funktion zu unterscheiden.
          </li>
          <li>
            "Hören Sie sich die Audio-Anweisungen für eine Führung an"<br />Das
            ist offensichtlich problematisch—Audio wird für Menschen mit
            Hörbehinderungen unzugänglich sein, während Text gelesen, aber auch
            von einem Screenreader gesprochen werden kann, falls
            erforderlich.
          </li>
          <li>
            "Wischen Sie von der rechten Seite des Bildschirms, um das Menü anzuzeigen"<br />Einige
            Benutzer könnten nicht in der Lage sein, den Bildschirm zu wischen,
            entweder aufgrund einer Behinderung oder weil ihr Gerät das Wischen
            nicht unterstützt. Alternativ sollte eine Lösung angeboten werden,
            wie z.B. eine Tastenkombination oder eine Taste, die über die
            Tastatur oder andere Mittel aktiviert werden kann.
          </li>
        </ul>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Das Übermitteln von Anweisungen nur durch
            Farbe ist verwandt, wird jedoch in einer anderen Richtlinie
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
        Anzeigenausrichtung wie Hoch- oder Querformat ein, es sei denn, eine
        spezifische Anzeigenausrichtung ist wesentlich.
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
        1.3.5 Zweck der Eingabe ermitteln (AA) <em
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
          >,
          um programmatisch den Zweck eines Feldes zu ermitteln.
        </p>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html"
          >Den Zweck der Eingabe verstehen</a
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
        In Inhalten, die mit Markup-Sprachen implementiert sind, kann der Zweck
        von Benutzeroberflächenkomponenten, Symbolen und Regionen
        programmatisch bestimmt werden.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html"
          >Den Zweck verstehen</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 1.3: Anpassungsfähig: Erstellen Sie Inhalte, die auf unterschiedliche Weise präsentiert werden können, ohne Informationen oder Struktur zu verlieren.](https://www.w3.org/TR/WCAG21/#adaptable)

## Richtlinie 1.4: Machen Sie es Benutzern einfacher, Inhalte zu sehen und zu hören, einschließlich der Trennung von Vorder- und Hintergrund

Diese Richtlinie bezieht sich darauf, sicherzustellen, dass Kerninhalte leicht von Hintergründen und anderen Dekorationen zu unterscheiden sind. Das klassische Beispiel ist die Farbe (sowohl [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) als auch [Verwendung von Farbe](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Use_of_color), um Anweisungen zu vermitteln), aber es gilt auch in anderen Situationen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie die Kriterien erfüllt werden</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
    <tr>
      <td>1.4.1 Verwendung von Farbe (A)</td>
      <td>
        <p>
          Farbe sollte nicht allein verwendet werden, um Informationen zu
          vermitteln. Zum Beispiel sollten Felder in Formularen nicht nur durch
          eine Farbe (wie rot) als erforderlich markiert werden. Stattdessen (oder
          zusätzlich) wäre etwas wie ein Sternchen mit einem Etikett "erforderlich"
          angemessener.
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
        Für jegliches Audio, das länger als drei Sekunden abgespielt wird,
        sollten zugängliche Steuerungen zum Abspielen, Pausieren des Audios/Videos
        und zum Anpassen der Lautstärke bereitgestellt werden.
      </td>
      <td>
        Verwenden Sie native <code>&lt;button&gt;</code>, um zugängliche
        Tastatursteuerungen bereitzustellen, wie in
        <a
          href="/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics"
          >Grundlagen der Videoplayer-Stilisierung</a
        > gezeigt.
      </td>
    </tr>
    <tr>
      <td>1.4.3 Minimalkontrast (AA)</td>
      <td>
        <p>
          Der Farbkontrast zwischen Hintergrund und Vordergrundinhalten sollte
          auf einem Mindestniveau sein, um die Lesbarkeit zu gewährleisten:
        </p>
        <ul>
          <li>
            Text und sein Hintergrund sollten ein Kontrastverhältnis von
            mindestens 4.5:1 haben.
          </li>
          <li>
            Überschrift (oder nur größerer) Text sollte ein Verhältnis von
            mindestens 3:1 haben. Größerer Text ist als mindestens 18pt oder
            14pt fett definiert.
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
      <td>1.4.4 Text vergrößern (AA)</td>
      <td>
        Die Seite sollte lesbar und benutzbar sein, wenn die Textgröße
        verdoppelt wird. Das bedeutet, dass Designs responsiv sein sollten,
        sodass, wenn die Textgröße erhöht wird, die Inhalte weiterhin
        zugänglich sind.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.5 Bilder von Text (AA)</td>
      <td>
        Bilder sollten NICHT verwendet werden, um Inhalte zu präsentieren,
        bei denen Text die Aufgabe erledigen könnte. Zum Beispiel könnte, wenn
        ein Bild hauptsächlich Text enthält, es mit Text sowie mit Bildern
        dargestellt werden.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.6 Erhöhter Kontrast (AAA)</td>
      <td>
        <p>Dies folgt auf und baut auf Kriterium 1.4.3 auf.</p>
        <ul>
          <li>
            Text und sein Hintergrund sollten ein Kontrastverhältnis von
            mindestens 7:1 haben.
          </li>
          <li>
            Überschrift (oder nur größerer) Text sollte ein Verhältnis von
            mindestens 4.5:1 haben. Größerer Text ist als mindestens 18pt oder
            14pt fett definiert.
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
      <td>1.4.7 Niedriger oder kein Hintergrundaudio (AAA)</td>
      <td>
        Voraufgezeichnete Audiowiedergaben, die hauptsächlich Sprache
        enthalten, sollten minimale Hintergrundgeräusche aufweisen, damit der
        Inhalt leicht verständlich ist.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.8 Visuelle Präsentation (AAA)</td>
      <td>
        <p>Für die Präsentation von Textinhalten sollte folgendes zutreffen:</p>
        <ul>
          <li>Vorder- und Hintergrundfarben sollten vom Benutzer auswählbar sein.</li>
          <li>
            Textblöcke sollten nicht breiter sein als 80 Zeichen (oder Glyphen)
            für maximale Lesbarkeit.
          </li>
          <li>
            Text sollte nicht vollständig gerechtfertigt sein (z.B. <code
              >text-align: justify;</code
            >).
          </li>
          <li>
            Der Zeilenabstand sollte innerhalb von Absätzen mindestens 1,5-mal
            so groß wie die Textgröße sein (z.B. <code>line-height: 1.5;</code>),
            und zwischen den Absätzen mindestens 2,25-mal der Textgröße
            betragen (z.B. <code>padding: 2.25rem;</code>).
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
      <td>1.4.9 Textbilder (Keine Ausnahme) (AAA)</td>
      <td>
        Text sollte nicht als Teil eines Bildes dargestellt werden, es sei denn,
        es ist rein dekorativ (d.h. es vermittelt keine Inhalte) oder kann auf
        keine andere Weise dargestellt werden.
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
            Kein horizontales Scrollen für von links nach rechts gerichtete
            Sprachen (wie Englisch) oder von rechts nach links gerichtete
            Sprachen (wie Arabisch)
          </li>
          <li>
            Kein vertikales Scrollen für von oben nach unten gerichtete
            Sprachen (wie Japanisch)
          </li>
          <li>
            Ausgenommen sind Teile des Inhalts, die für die Nutzung oder
            Bedeutung ein zweidimensionales Layout erfordern (wie eine große
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
        1.4.11 Nicht-Text-Kontrast (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        Mindestfarbkontrastverhältnis von 3:1 für Benutzeroberflächenkomponenten
        und grafische Objekte.
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
        1.4.12 Textabstand (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          Es gibt keinen Verlust von Inhalten oder Funktionalität, wenn die
          folgenden Stile angewendet werden:
        </p>
        <ul>
          <li>
            Zeilenhöhe (Zeilenabstand) mindestens 1,5-mal der Schriftgröße
          </li>
          <li>
            Abstand nach Absätzen mindestens 2-mal der Schriftgröße
          </li>
          <li>
            Zeichenabstand (Tracking) mindestens 0,12-mal der Schriftgröße
          </li>
          <li>Wortabstand mindestens 0,16-mal der Schriftgröße</li>
        </ul>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
          >Textabstand verstehen</a
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
          Während zusätzlicher Inhalt erscheinen und verschwinden kann in
          Koordination mit Hover und Tastaturfokus, spezifiziert dieses
          Erfolgskriterium drei Bedingungen, die erfüllt sein müssen:
        </p>
        <ul>
          <li>abweisbar (kann geschlossen/entfernt werden)</li>
          <li>
            hoverfähig (der zusätzliche Inhalt verschwindet nicht, wenn der
            Zeiger darüber ist)
          </li>
          <li>
            persistent (der zusätzliche Inhalt verschwindet nicht ohne
            Benutzerinteraktion)
          </li>
        </ul>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html"
          >Inhalt bei Hover oder Fokus verstehen</a
        >
      </td>
    </tr>
  </thead>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 1.4: Unterscheidbar: Machen Sie es Benutzern einfacher, Inhalte zu sehen und zu hören, einschließlich der Trennung von Vorder- und Hintergrund.](https://www.w3.org/TR/WCAG21/#distinguishable)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  1. Wahrnehmbar
  2. [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  3. [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)
