---
title: Wahrnehmbar
slug: Web/Accessibility/Guides/Understanding_WCAG/Perceivable
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so schreiben, dass sie den Erfolgskriterien des **Wahrnehmbar**-Prinzips der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 entsprechen. Wahrnehmbar bedeutet, dass Benutzer in der Lage sein müssen, es in irgendeiner Weise zu erfassen, indem sie einen oder mehrere ihrer Sinne verwenden.

> [!NOTE]
> Um die W3C-Definitionen für Wahrnehmbar und dessen Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 1: Wahrnehmbar – Informationen und Benutzeroberflächenkomponenten müssen für Benutzer so darstellbar sein, dass sie sie wahrnehmen können.](https://www.w3.org/TR/WCAG21/#perceivable)

## Richtlinie 1.1 — Bereitstellung von Textalternativen für nicht-textliche Inhalte

Hierbei ist der entscheidende Punkt, dass Text in andere Formen umgewandelt werden kann, die Menschen mit Behinderungen nutzen können. Beispielsweise kann er von einem Bildschirmlesegerät gesprochen, in Großdruck umgewandelt oder auf einer Braille-Anzeige dargestellt werden. Nicht-textliche Inhalte beziehen sich auf Multimedia wie Bilder, Audio und Video.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie den Kriterien entsprechen</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="5">1.1.1 Bereitstellung von Textequivalenten (A)</td>
      <td>
        Allen Bildern, die bedeutungsvolle Inhalte vermitteln, sollte geeigneter
        alternativer Text zugeordnet werden.
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
        einen regulären Link anstelle eines <code>longdesc</code>-Attributes.
      </td>
      <td>
        <p>
          Eine Textbeschreibung kann funktionieren oder eine zugängliche
          Datentabelle (siehe
          <a href="/de/docs/Learn_web_development/Core/Structuring_content/Table_accessibility"
            >HTML-Tabellenzugänglichkeit</a
          >). Siehe W3C's
          <a href="https://www.w3.org/TR/html-longdesc/">Image Description Extension (longdesc)</a>
          für das Argument gegen <code>longdesc</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Multimediainhalte (d. h. Audio oder Video) sollten zumindest eine
        beschreibende Identifizierung haben, wie etwa eine Bildunterschrift oder
        Ähnliches.
      </td>
      <td>
        <p>
          Siehe <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          >
          für statische Beschriftungsoptionen, und
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
        UI-Steuerelemente wie Formularelemente und Schaltflächen sollten Textbeschriftungen haben, die ihren Zweck beschreiben.
      </td>
      <td>
        Schaltflächen sind einfach – Sie sollten sicherstellen, dass der Schaltflächentext die Funktion der Schaltfläche beschreibt (z. B. <code
          >&#x3C;button>Bild hochladen&#x3C;/button></code
        >). Weitere Informationen zu anderen UI-Steuerelementen finden Sie unter
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI-Steuerelemente</a
        >.
      </td>
    </tr>
    <tr>
      <td>
        Implementieren Sie dekorative (nicht inhaltsrelevante) Bilder, Videos
        usw. derart, dass sie für assistive Technologien unsichtbar sind, damit
        sie die Benutzer nicht verwirren.
      </td>
      <td>
        <p>
          Dekorative Bilder sollten mit CSS-Hintergrundbildern implementiert
          werden (siehe
          <a
            href="/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders"
            >Hintergründe und Rahmen</a
          >). Wenn Sie ein Bild über ein
          {{htmlelement("img")}}-Element einfügen müssen, geben Sie ihm einen
          leeren alt-Text (<code>alt=""</code>). Andernfalls könnten
          Bildschirmlesegeräte versuchen, den Dateipfad usw. vorzulesen.
        </p>
        <p>
          Wenn Sie Hintergrundvideo oder -audio einfügen, das automatisch
          abgespielt wird, gestalten Sie es so unauffällig wie möglich. Lassen
          Sie es nicht wie Inhalt aussehen/klingen und bieten Sie eine Steuerung
          zum Ausschalten an. Idealerweise sollte es gar nicht erst eingefügt
          werden.
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die [WCAG-Beschreibung für Richtlinie 1.1: Textalternativen](https://www.w3.org/TR/WCAG21/#text-alternatives).

## Richtlinie 1.2 — Bereitstellung von Textalternativen für zeitbasierte Medien

Zeitbasierte Medien beziehen sich auf Multimedia mit einer Dauer, wie Audio und Video. Beachten Sie, dass Sie, wenn das Audio/Video als Alternative zu bereits vorhandenem Textinhalt dient, keine weitere Textalternative bereitstellen müssen.

<table>
  <thead>
    <tr>
       <th scope="col">Erfolgskriterien</th>
       <th scope="col">Wie den Kriterien entsprechen</th>
       <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
       <td>1.2.1 Bereitstellung von Alternativen für vorab aufgezeichnete Audio- und Video-Inhalte (A)</td>
       <td>Ein Transkript sollte für vorab aufgezeichnete nur-Audio-Medien bereitgestellt werden, und ein Transkript oder eine Audiobeschreibung sollten für vorab aufgezeichnete nur-Video-Medien (d. h. stumme Videos) bereitgestellt werden.</td>
       <td>Siehe <a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Informationen zu Transkripten. Es steht noch kein Tutorial zur Audiobeschreibung zur Verfügung.</td>
    </tr>
    <tr>
       <td>1.2.2 Bereitstellung von Untertiteln für webbasierte Videos (A)</td>
       <td>Sie sollten Untertitel für Videos bereitstellen, die im Web präsentiert werden (z. B. HTML-Video). Dies ist zum Vorteil von Menschen, die den Audio-Teil des Videos nicht hören können.</td>
       <td>Siehe <a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#video_text_tracks">Video-Textspuren</a> für HTML-Video-Untertitel. Siehe auch <a href="https://support.google.com/youtube/answer/2734796?hl=en">Hinzufügen Ihrer eigenen Untertitel & geschlossenen Untertitel</a> (YouTube).</td>
    </tr>
    <tr>
       <td>1.2.3 Bereitstellung von Texttranskripten oder Audiobeschreibungen für webbasierte Videos (A)</td>
       <td>Sie sollten Texttranskripte oder Audiobeschreibungen für im Web vorgestellte Videos bereitstellen (z. B. HTML-Video). Dies ist zum Vorteil von Personen, die den visuellen Teil des Videos nicht sehen können und den vollständigen Inhalt nicht allein aus dem Audio erhalten.</td>
       <td>Siehe <a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Informationen zu Transkripten. Es steht noch kein Tutorial zur Audiobeschreibung zur Verfügung.</td>
    </tr>
    <tr>
       <td>1.2.4 Bereitstellung von Untertiteln für Live-Audio (AA)</td>
       <td>Sie sollten synchronisierte Untertitel für alle Live-Multimedia bereitstellen, die Audio enthalten (z. B. Videokonferenzen, Live-Audioübertragungen).</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.5 Bereitstellung von Audiobeschreibungen für vorab aufgezeichnete Videos (AA)</td>
       <td>Audiobeschreibungen sollten für vorab aufgezeichnete Videos bereitgestellt werden, jedoch nur dort, wo das vorhandene Audio nicht die volle Bedeutung ausdrückt, die durch das Video vermittelt wird.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.6 Bereitstellung eines Gebärdensprachäquivalents für vorab aufgezeichnete Audios (AAA)</td>
       <td>Für alle vorab aufgezeichneten Inhalte mit Audio sollte ein entsprechendes Gebärdensprachvideo bereitgestellt werden.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.7 Bereitstellung erweiterter Videos mit Audiobeschreibungen (AAA)</td>
       <td>Wo Audiobeschreibungen nicht bereitgestellt werden können (siehe 1.2.5) aufgrund von Videotimingproblemen (z. B. gibt es keine geeigneten Pausen im Inhalt, in denen Audiobeschreibungen eingefügt werden können), sollte eine alternative Version des Videos bereitgestellt werden, die eingefügte Pausen (und Audiobeschreibungen) enthält.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.8 Bereitstellung einer Alternative für vorab aufgezeichnete Medien (AAA)</td>
       <td>Für alle Inhalte, die Video enthalten, sollte ein beschreibendes Texttranskript bereitgestellt werden, zum Beispiel ein Skript des Films, den Sie sehen. Dies ist zum Vorteil für hörgeschädigte Zuschauer, die den Inhalt nicht hören können.</td>
       <td>Siehe <a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Informationen zu Transkripten.</td>
    </tr>
    <tr>
       <td>1.2.9 Bereitstellung eines Transkripts für Live-Audio (AAA)</td>
       <td>Für alle Live-Audio-Inhalte, die übertragen werden, sollte ein beschreibender Text bereitgestellt werden, zum Beispiel ein Skript des Stücks oder der Musik, die Sie hören. Dies ist zum Vorteil für hörgeschädigte Zuschauer, die den Inhalt nicht hören können.</td>
       <td>Siehe <a href="/de/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts">Audio-Transkripte</a> für Informationen zu Transkripten.</td>
    </tr>
 </tbody>
</table>

> [!NOTE]
> Siehe auch die [WCAG-Beschreibung für Richtlinie 1.2: Zeitbasierte Medien: Alternativen für zeitbasierte Medien bereitstellen](https://www.w3.org/TR/WCAG21/#time-based-media).

## Richtlinie 1.3 — Erstellen Sie Inhalte, die auf unterschiedliche Weise präsentiert werden können

Diese Richtlinie bezieht sich auf die Fähigkeit, dass Inhalte von Benutzern auf verschiedene Weise konsumiert werden können, um ihren unterschiedlichen Bedürfnissen gerecht zu werden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie den Kriterien entsprechen</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
    <tr>
      <td>1.3.1 Info und Beziehungen (A)</td>
      <td>
        <p>
          Jede Inhaltsstruktur – oder visuelle Beziehung zwischen Inhalten – kann
          auch programmgesteuert bestimmt oder aus einer Textbeschreibung
          abgeleitet werden. Die Hauptsituationen, in denen dies relevant ist, sind:
        </p>
        <ul>
          <li>
            Textbeschriftungen und die Formularelemente, die sie beschreiben.
            Diese sind eindeutig mit dem {{htmlelement("label")}}-Element
            verknüpft, das von Bildschirmlesegeräten usw. erkannt werden kann.
          </li>
          <li>
            Bild-alt-Text. Inhaltsbilder sollten Text zur Verfügung haben, der
            die Inhalte des Bildes klar beschreibt und der programmgesteuert damit
            verknüpft werden kann (z. B. als alt-Text) oder ansonsten leicht
            zuzuordnen ist (z. B. beschreibt es und steht direkt daneben). Dies
            sollte bedeuten, dass die volle Bedeutung auch dann noch erfasst
            werden kann, wenn Sie das Bild nicht sehen können.
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
          ist mit Informationen darüber vollgepackt, aber Sie sollten
          sich insbesondere auf
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#good_semantics"
            >Gute Semantik</a
          >,
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
            >UI-Steuerelemente</a
          >, und
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives"
            >Textalternativen</a
          >
          beziehen.
        </p>
      </td>
    </tr>
    <tr>
      <td>1.3.2 Bedeutende Inhaltsreihenfolge (A)</td>
      <td>
        Eine nachvollziehbare, logische Lesereihenfolge sollte für
        jeden Inhalt leicht zu bestimmen sein, auch wenn er visuell
        auf ungewöhnliche Weise präsentiert wird. Die Reihenfolge
        sollte durch die Verwendung korrekter semantischer Elemente
        (z. B. Überschriften, Absätze) offensichtlich gemacht werden,
        wobei CSS verwendet wird, um jegliche ungewöhnlichen Layoutstile
        zu erstellen, unabhängig von der Auszeichnung.
      </td>
      <td>
        Wiederum verweisen Sie auf
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML"
          >HTML: Eine gute Grundlage für Barrierefreiheit</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.3.3 Sensorische Merkmale (A)</td>
      <td>
        <p>
          Anweisungen zur Bedienung von Steuerelementen oder zum
          Verständnis von Inhalten verlassen sich nicht auf einen
          einzigen Sinn. Dies kann für Menschen mit einer Behinderung
          im Zusammenhang mit diesem Sinn oder einem Gerät, das diesen
          Sinn nicht unterstützt, unzugänglich sein. Zum Beispiel:
        </p>
        <ul>
          <li>
            "Klicken Sie auf die runde Schaltfläche zum Fortfahren"<br />Die
            Schaltfläche sollte klar beschriftet sein, sodass offensichtlich
            ist, dass es die Schaltfläche ist, die Sie drücken müssen.
            Wenn es mehrere Schaltflächen gibt, stellen Sie sicher, dass alle
            klar beschriftet sind, um ihre Funktion zu unterscheiden.
          </li>
          <li>
            "Hören Sie sich die Audio-Anweisungen zur Anleitung an"<br />Dies
            ist offensichtlich problematisch – Audio wird für Menschen mit
            Hörbehinderungen unzugänglich sein, während Text gelesen, aber
            auch bei Bedarf von einem Bildschirmlesegerät gesprochen werden
            kann.
          </li>
          <li>
            "Wischen Sie vom rechten Bildschirmrand, um das Menü anzuzeigen"<br />Einige
            Benutzer können möglicherweise nicht vom Bildschirm wischen, entweder
            aufgrund einer Behinderung oder weil ihr Gerät keine Berührung
            unterstützt. Eine Alternative sollte bereitgestellt werden, wie
            eine Tastenkombination oder eine Schaltfläche, die mit der
            Tastatur oder auf andere Weise aktiviert werden kann.
          </li>
        </ul>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Anweisungen ausschließlich durch Farben
            zu vermitteln, ist damit verwandt, wird aber in einer anderen
            Richtlinie behandelt — 1.4.1.
          </p>
        </div>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        1.3.4 Ausrichtung (AA)
        <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        Inhalte beschränken ihre Ansicht und Bedienung nicht auf eine
        einzelne Anzeigeausrichtung wie Hoch- oder Querformat, es sei denn,
        eine bestimmte Anzeigeausrichtung ist wesentlich.
      </td>
      <td>
        <p>
          <a href="https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"
            >Verständnis zur Ausrichtung</a
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
          Folgen Sie der Liste von
          <a href="https://www.w3.org/TR/WCAG21/#input-purposes"
            >53 Eingabefeldern</a
          >
          um den Zweck eines Feldes programmgesteuert zu identifizieren.
        </p>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html"
          >Verständnis zur Identifikation des Eingabezwecks</a
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
        In Inhalten, die unter Verwendung von Markup-Sprachen implementiert
        sind, kann der Zweck von Benutzeroberflächenkomponenten, Symbolen
        und Bereichen programmgesteuert bestimmt werden.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html"
          >Verständnis zur Identifikation des Zwecks</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 1.3: Anpassungsfähig: Erstellen Sie Inhalte, die auf unterschiedliche Weise präsentiert werden können, ohne Informationen oder Struktur zu verlieren.](https://www.w3.org/TR/WCAG21/#adaptable)

## Richtlinie 1.4: Erleichtern Sie es den Benutzern, Inhalte zu sehen und zu hören, einschließlich der Trennung von Vordergrund und Hintergrund

Diese Richtlinie bezieht sich darauf, sicherzustellen, dass Hauptinhalte leicht von Hintergründen und anderen Dekorationen unterscheidbar sind. Ein klassisches Beispiel sind Farben (sowohl [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) als auch [Verwendung von Farben](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Use_of_color), um Anweisungen zu vermitteln), aber es gilt auch in anderen Situationen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie den Kriterien entsprechen</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
    <tr>
      <td>1.4.1 Verwendung von Farben (A)</td>
      <td>
        <p>
          Auf Farbe sollte nicht ausschließlich vertraut werden, um
          Informationen zu vermitteln. Beispielsweise sollten Sie in Formularen
          niemals erforderliche Felder nur mit einer Farbe (wie Rot) kennzeichnen.
          Stattdessen (oder zusätzlich) wäre etwas wie ein Sternchen mit einem
          Label "erforderlich" angemessener.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Use_of_color"
          >Verwendung von Farben</a
        >,
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#color_and_color_contrast"
          >Farbe und Farbkontrast</a
        >,
        und
        <a
          href="/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#multiple_labels"
          >Mehrere Labels</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.2 Audiokontrollen (A)</td>
      <td>
        Für alle Audioinhalte, die länger als drei Sekunden abspielen, stellen
        Sie zugängliche Steuerelemente bereit, um das Audio/Video abzuspielen und
        anzuhalten sowie die Lautstärke stumm zu schalten/anzupassen.
      </td>
      <td>
        Verwenden Sie native <code>&lt;button&gt;</code>, um zugängliche
        Tastatursteuerungen bereitzustellen, wie gezeigt in
        <a
          href="/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics"
          >Grundlagen zur Videoplayer-Stilierung</a
        >.
      </td>
    </tr>
    <tr>
      <td>1.4.3 Mindestkontrast (AA)</td>
      <td>
        <p>
          Der Farbkontrast zwischen Hintergrund und Vordergrundinhalten sollte
          ein Mindestmaß haben, um Lesbarkeit sicherzustellen:
        </p>
        <ul>
          <li>
            Text und sein Hintergrund sollten einen Kontrastverhältnis von
            mindestens 4,5:1 haben.
          </li>
          <li>
            Überschriftstext (oder einfach größerer Text) sollte ein
            Verhältnis von mindestens 3:1 haben. Größerer Text ist als mindestens
            18pt oder 14pt fett definiert.
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
      <td>1.4.4 Text vergrößerbar (AA)</td>
      <td>
        Die Seite sollte lesbar und nutzbar sein, wenn die Textgröße verdoppelt
        wird. Das bedeutet, dass Designs reaktionsfähig sein sollten, sodass der
        Inhalt, auch wenn die Textgröße vergrößert wird, weiterhin zugänglich ist.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.5 Bilder von Text (AA)</td>
      <td>
        Bilder sollten NICHT verwendet werden, um Inhalte darzustellen, wenn Text
        die Aufgabe erfüllen würde. Zum Beispiel, wenn ein Bild hauptsächlich
        textuell ist, könnte es mit Text sowie Bildern dargestellt werden.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.6 Erweiterter Kontrast (AAA)</td>
      <td>
        <p>Dies folgt und baut auf Kriterium 1.4.3 auf.</p>
        <ul>
          <li>
            Text und sein Hintergrund sollten ein Kontrastverhältnis von
            mindestens 7:1 haben.
          </li>
          <li>
            Überschriftstext (oder einfach größerer Text) sollte ein
            Verhältnis von mindestens 4,5:1 haben. Größerer Text ist als
            mindestens 18pt oder 14pt fett definiert.
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
      <td>1.4.7 Wenig oder kein Hintergrundaudio (AAA)</td>
      <td>
        Vorab aufgezeichnete Audioaufnahmen, die hauptsächlich Sprache
        enthalten, sollten minimales Hintergrundrauschen aufweisen, sodass der
        Inhalt leicht verstanden werden kann.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.8 Visuelle Präsentation (AAA)</td>
      <td>
        <p>Für die Präsentation von Textinhalten sollte Folgendes zutreffen:</p>
        <ul>
          <li>Vordergrund- und Hintergrundfarben sollten vom Benutzer auswählbar sein.</li>
          <li>
            Textblöcke sollten nicht breiter als 80 Zeichen (oder Glyphen) sein, für
            maximale Lesbarkeit.
          </li>
          <li>
            Text sollte nicht vollständig ausgerichtet sein (z. B. <code
              >text-align: justify;</code
            >).
          </li>
          <li>
            Zeilenhöhe sollte mindestens das 1,5-fache der Textgröße innerhalb
            von Absätzen sein (z. B. <code>line-height: 1.5;</code>), und
            mindestens das 2,25-fache der Textgröße zwischen Absätzen (z. B. <code
              >padding: 2.25rem;</code
            >).
          </li>
          <li>
            Wenn die Textgröße verdoppelt wird, sollte der Inhalt nicht
            scrollen müssen.
          </li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.9 Bilder von Text (Keine Ausnahme) (AAA)</td>
      <td>
        Text sollte nicht als Teil eines Bildes präsentiert werden, es sei denn,
        er ist rein dekorativ (d. h., er vermittelt keine Inhalte) oder kann
        nicht auf andere Weise dargestellt werden.
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
            Kein horizontales Scrollen für von links nach rechts geschriebene
            Sprachen (wie Englisch) oder von rechts nach links geschriebene
            Sprachen (wie Arabisch)
          </li>
          <li>
            Kein vertikales Scrollen für von oben nach unten geschriebene
            Sprachen (wie Japanisch)
          </li>
          <li>
            Ausgenommen sind Teile des Inhalts, die ein zweidimensionales Layout
            für die Nutzung oder Bedeutung erfordern (wie eine große Datentabelle)
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
        1.4.11 Nicht-Text-Kontrast (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        Minimales Farbkontrastverhältnis von 3:1 für Benutzeroberflächenkomponenten
        und grafische Objekte.
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
        1.4.12 Textabstände (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          Kein Inhaltsverlust oder Funktionsverlust tritt auf, wenn die folgenden
          Stile angewendet werden:
        </p>
        <ul>
          <li>
            Zeilenhöhe (Zeilenabstand) auf mindestens 1,5-fache der Schriftgröße
          </li>
          <li>
            Abstand nach Absätzen auf mindestens 2-fache der Schriftgröße
          </li>
          <li>
            Zeichenabstand (Laufweite) auf mindestens 0,12-fache der Schriftgröße
          </li>
          <li>
            Wortabstand auf mindestens 0,16-fache der Schriftgröße
          </li>
        </ul>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
          >Verständnis von Textabständen</a
        >
      </td>
    </tr>
    <tr>
      <td>
        1.4.13 Inhalt bei Fokus oder Hover (AA) <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          Während zusätzlicher Inhalt in Koordination mit Hover und Tastaturfokus
          erscheinen und verschwinden kann, spezifiziert dieses Erfolgskriterium
          drei Bedingungen, die erfüllt werden müssen:
        </p>
        <ul>
          <li>ausblendbar (kann geschlossen/entfernt werden)</li>
          <li>
            hovering-fähig (der zusätzliche Inhalt verschwindet nicht, wenn der
            Zeiger darüber ist)
          </li>
          <li>
            persistent (der zusätzliche Inhalt verschwindet nicht ohne Benutzereingriff)
          </li>
        </ul>
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html"
          >Verständnis von Inhalt bei Fokus oder Hover</a
        >
      </td>
    </tr>
  </thead>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 1.4: Unterscheidbar: Erleichtern Sie es den Benutzern, Inhalte zu sehen und zu hören, einschließlich der Trennung von Vordergrund und Hintergrund.](https://www.w3.org/TR/WCAG21/#distinguishable)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  1. Wahrnehmbar
  2. [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  3. [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)
