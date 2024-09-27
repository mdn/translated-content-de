---
title: Operable
slug: Web/Accessibility/Understanding_WCAG/Operable
l10n:
  sourceCommit: be68d68e0bf1c9cdf5f40939201403638fb90cbe
---

{{AccessibilitySidebar}}

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so gestalten, dass sie den Erfolgskriterien des Prinzips **Operable** der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 entsprechen. Operable besagt, dass Benutzeroberflächenkomponenten und Navigation bedienbar sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Operable und dessen Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 2: Operable — Benutzeroberflächenkomponenten und Navigation müssen bedienbar sein.](https://www.w3.org/TR/WCAG21/#operable)

## Richtlinie 2.1 — Tastaturzugänglich: Machen Sie alle Funktionen von der Tastatur aus zugänglich

Diese Richtlinie behandelt die Notwendigkeit, die Kernfunktionen der Website zusätzlich zu anderen Mitteln (z. B. Maus) auch über eine Tastatur zugänglich zu machen, sodass Benutzer, die auf Tastatursteuerungen angewiesen sind, diese nutzen können.

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
      <td>2.1.1 Tastatur (A)</td>
      <td>
        Alle Funktionen sollten über Tastatursteuerungen zugänglich sein, es sei denn, es ist über die Tastatur nicht möglich (z. B. freihändiges Zeichnen). Eingebaute Steuerungen sollten, wo möglich, verwendet werden (z. B. durch Tabben durch Formularelemente), und eigens erstellte Funktionen sollten nur da integriert werden, wo es notwendig ist.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn/Accessibility/HTML#ui_controls"
          >UI-Steuerelemente</a
        >
        und
        <a
          href="/de/docs/Learn/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Keyboard-Zugänglichkeit wieder einbauen</a
        >
      </td>
    </tr>
    <tr>
      <td>2.1.2 Keine Tastaturfalle (A)</td>
      <td>
        <p>
          Beim Betreten eines Funktionsbereichs mit der Tastatur sollte dieser auch wieder <em>nur</em> über die Tastatur verlassen werden können. Wenn Sie beispielsweise auf einen fokussierten Button <kbd>Enter</kbd>/<kbd>Return</kbd> drücken, um ein Optionsfenster zu öffnen, sollten Sie dieses Fenster wieder schließen können und zum Hauptinhalt mittels der Tastatur zurückkehren können.
        </p>
        <p>
          Dies ist sehr wichtig, damit Tastaturbenutzer nicht in bestimmten Abschnitten Ihrer Anwendungen gefangen werden.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.1.3 Tastatur — alle Funktionen (AAA)</td>
      <td>
        Dies ist ein weiterer Schritt über das Kriterium 2.1.1 hinaus. Um AAA-Konformität zu erreichen, sollten alle Funktionen ohne Ausnahmen über Tastatursteuerungen zugänglich sein.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn/Accessibility/HTML#ui_controls"
          >UI-Steuerelemente</a
        >
        und
        <a
          href="/de/docs/Learn/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Keyboard-Zugänglichkeit wieder einbauen</a
        >
      </td>
    </tr>
    <tr>
      <td>
        2.1.4 Zeichenkurzbefehle (A)
        <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        Wenn es einen Ein-Tasten-Zeichenkurzbefehl gibt, dann trifft mindestens einer der folgenden Punkte zu: Ein-Tasten-Zeichenkurzbefehle können deaktiviert, neu zugeordnet werden oder sind nur aktiv, wenn das entsprechende Benutzeroberflächenelement im Fokus ist.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html"
          >Verstehen von Zeichenkurzbefehlen</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Lesen Sie auch die WCAG-Beschreibung für [Richtlinie 2.1 Tastaturzugänglich: Machen Sie alle Funktionen von der Tastatur aus zugänglich](https://www.w3.org/TR/WCAG21/#keyboard-accessible).

## Richtlinie 2.2 — Ausreichend Zeit: Geben Sie den Benutzern ausreichend Zeit, um den Inhalt zu lesen und zu verwenden

Diese Richtlinie behandelt Situationen, in denen Funktionen ein Zeitlimit haben können. Zum Beispiel müssen Käufe aus Sicherheitsgründen manchmal innerhalb eines Zeitlimits abgeschlossen werden.

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
      <td>2.2.1 Timing ist einstellbar (A)</td>
      <td>
        <p>
          Für Funktionen mit Zeitlimits (z. B. der Abschluss einer Hotel- oder Flugbuchung hat oft ein Zeitlimit) sollten dem Benutzer Steuerungen gegeben werden, um das Zeitlimit anzupassen, zu verlängern oder zu deaktivieren.
        </p>
        <p>
          Ausnahmen hiervon sind Aktivitäten mit Zeitlimits von mehr als 20 Stunden, Echtzeitereignisse (z. B. Live-Multiplayer-Spiele) und jede andere Aktivität, die ein Zeitlimit erfordert und ungültig wäre, wenn es ausgeschaltet würde.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.2 Pausieren, stoppen, ausblenden (A)</td>
      <td>
        <p>
          Für sich automatisch bewegende/blinkende Inhalte, die länger als 5 Sekunden dauern und zusammen mit anderen Inhalten angezeigt werden, sollten Steuerungen bereitgestellt werden, um diese zu pausieren, zu stoppen oder auszublenden. Dies gilt nicht für bewegende/blinkende Inhalte, die wesentlich für die Erfahrung sind. Beispiele umfassen scrollende Texte und Videos.
        </p>
        <p>
          Für automatisch aktualisierte Informationen, die automatisch gestartet und zusammen mit anderen Inhalten angezeigt werden, sollten Steuerungen bereitgestellt werden, um diese zu pausieren, zu stoppen oder auszublenden oder die Aktualisierungsfrequenz zu steuern. Dies gilt nicht für automatisch aktualisierte Inhalte, die wesentlich für die Erfahrung sind. Beispiele sind Karussells oder rotierende Ankündigungen.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.3 Keine Zeitlimits (AAA)</td>
      <td>
        Dieses Kriterium baut auf 2.2.1 auf und besagt, dass Inhalte, die AAA-Konformität erreichen wollen, keine Zeitlimits haben sollten.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.4 Unterbrechungen unterdrücken (AAA)</td>
      <td>
        Jegliche Unterbrechungen wie Alarme oder Interstitial-Anzeigen sollten über Funktionalitäten verfügen, um diese zu unterdrücken oder zu verschieben, es sei denn, es handelt sich um einen Notfallalarm.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.5 Wiederanmeldung (AAA)</td>
      <td>
        Wenn eine Authentifizierungssitzung während der Nutzung einer Web-App abläuft, kann der Benutzer sich erneut authentifizieren und seine Nutzung fortsetzen, ohne Daten zu verlieren.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        2.2.6 Zeitüberschreitungen (AAA)
        <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          Wenn es eine Zeitüberschreitung (verursacht durch Benutzerinaktivität) gibt, warnen Sie die Benutzer zu Beginn eines Prozesses, damit sie nicht überrascht sind, dass eine Zeitüberschreitung existiert (oder erlauben Sie, dass die Zeitüberschreitung erst nach 20 Stunden Inaktivität auftritt).
        </p>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html"
          >Verstehen von Zeitüberschreitungen</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Lesen Sie auch die WCAG-Beschreibung für [Richtlinie 2.2 Ausreichend Zeit: Geben Sie den Benutzern ausreichend Zeit, um den Inhalt zu lesen und zu verwenden](https://www.w3.org/TR/WCAG21/#enough-time).

## Richtlinie 2.3 — Anfälle und physische Reaktionen: Gestalten Sie Inhalte nicht so, dass sie Anfälle oder physische Reaktionen verursachen können

Dies bezieht sich auf Inhalte, die, wenn sie nicht verändert werden, Anfälle bei Benutzern mit Bedingungen wie Epilepsie oder physische Reaktionen (wie Schwindel) bei Benutzern mit Bedingungen wie vestibulären Störungen verursachen könnten.

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
      <td>2.3.1 Drei Blitze oder unter dem Schwellenwert (A)</td>
      <td>Der Inhalt enthält keinen Aspekt, der mehr als dreimal pro Sekunde blinkt, oder blinkender Inhalt liegt unter den akzeptablen <a href="https://www.w3.org/TR/WCAG20/#general-thresholddef">Blitz- und Rotblitz-Schwellenwerten</a>.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.2 Drei Blitze (AAA)</td>
      <td>Der Inhalt enthält keinen Aspekt, der mehr als dreimal pro Sekunde blinkt.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.3 Animationen durch Interaktionen (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
      <td>Erlauben Sie Benutzern, Animationen durch Interaktionen zu deaktivieren (es sei denn, die Animation ist wesentlich).</td>
      <td><a href="https://www.w3.org/TR/WCAG21/#animation-from-interactions">Verstehen von Animationen durch Interaktionen</a></td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Lesen Sie auch die WCAG-Beschreibung für [Richtlinie 2.3 Anfälle und physische Reaktionen: Gestalten Sie Inhalte nicht so, dass sie Anfälle oder physische Reaktionen verursachen können.](https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions)

## Richtlinie 2.4 — Navigierbar: Bieten Sie Möglichkeiten an, die Benutzern helfen, zu navigieren, Inhalte zu finden und festzustellen, wo sie sich befinden

Die Konformitätskriterien unter dieser Richtlinie beziehen sich auf Methoden, mit denen Benutzer sich orientieren und die gewünschten Inhalte und Funktionen auf der aktuellen Seite oder anderen Seiten der Website finden können.

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
      <td>2.4.1 Blöcke überspringen (A)</td>
      <td>
        <p>
          Es sollte ein Mechanismus bereitgestellt werden, der es dem Benutzer ermöglicht, direkt zum Hauptinhalt oder zu den auf der Seite verfügbaren Funktionen zu springen, vorbei an den sich wiederholenden Merkmalen (wie dem Firmenlogo oder der Navigation). Dies wird oft mit "Überspringlinks" erreicht — Links, die oben im Seitenquelltext eingebettet sind, die zum Hauptinhalt führen und durch CSS ausgeblendet werden.
        </p>
        <p>
          Wenn eine korrekte Struktur von Überschriften und semantischen Containern zur Navigation bereitgestellt wird (z. B. {{htmlelement("section")}}, {{htmlelement("aside")}}), ist kein zusätzlicher "Überspringlink" erforderlich.
        </p>
      </td>
      <td><em>Benötigt einen Abschnitt über "Überspringlinks".</em></td>
    </tr>
    <tr>
      <td>2.4.2 Seitentitel einschließen (A)</td>
      <td>
        Jede Webseite sollte ein informatives
        {{htmlelement("title")}} enthalten, dessen Inhalt den Zweck/Inhalt der Seite beschreibt.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_a_title"
          >Hinzufügen eines Titels</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.3 Logische Fokusreihenfolge (A)</td>
      <td>
        Die "Tab-Reihenfolge" der fokussierbaren Seitenelemente (z. B. Links, Buttons, Formulareingaben) macht logisch Sinn, was bedeutet, dass die Seite auch von Nutzern ohne Sicht/mit Tastaturbedienung nutzbar ist.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn/Accessibility/HTML#ui_controls"
          >UI-Steuerelemente</a
        >
        für allgemeine Ratschläge zum Tabben zu Steuerelementen. Wenn Sie Elemente in einem ungewöhnlichen Layout platzieren müssen, ist es besser, sicherzustellen, dass die Quellreihenfolge sinnvoll ist, und dann CSS-Features wie
        <a href="/de/docs/Learn/CSS/CSS_layout/Positioning">Positionierung</a>
        zu verwenden, um das Layout zu steuern.
      </td>
    </tr>
    <tr>
      <td>2.4.4 Zweck des Links (im Kontext) (A)</td>
      <td>
        Der Zweck/das Ziel eines Links kann aus dem Linktext oder aus seinem Kontext (z. B. dem umgebenden Text) ermittelt werden. Ausnahmen sind dort, wo der Zweck des Links für <em>alle</em> Benutzer mehrdeutig ist (siehe
        <a href="https://www.w3.org/TR/WCAG20/#ambiguouslinkdef"
          >mehrdeutig für Benutzer im Allgemeinen</a
        >
        für eine nützliche Erklärung dazu).
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn/Accessibility/HTML#meaningful_text_labels"
          >Bedeutungsvolle Textbeschriftungen</a
        >. Beachten Sie auch, dass Sie Instanzen minimieren sollten, bei denen mehrere Kopien desselben Textes an verschiedene Stellen verlinken. Dies kann Probleme für Bildschirmleser-Benutzer verursachen, die oft eine Liste der Links aus dem Kontext bringen — mehrere Links, die alle mit "hier klicken", "hier klicken", "hier klicken" gekennzeichnet sind, wären verwirrend.
      </td>
    </tr>
    <tr>
      <td>2.4.5 Mehrere Navigationsmechanismen (AA)</td>
      <td>
        <p>
          Sie sollten mindestens zwei allgemeine Navigationsmechanismen bereitstellen, um Seiten auf Ihrer Website zu finden, z. B. Navigationsmenü, Breadcrumb-Navigation, Seitensuche, Sitemap, Liste verwandter Links etc.
        </p>
        <p>
          Die einzige Ausnahme hiervon ist eine Seite, die einen Schritt innerhalb eines Prozesses darstellt und daher logischerweise nur Links zu den vorherigen und nächsten Schritten haben sollte.
        </p>
      </td>
      <td>
        Die meisten dieser Mechanismen können mit einfachen HTML-Features erstellt werden, beispielsweise siehe
        <a
          href="/de/docs/Learn/Forms/HTML5_input_types#search_field"
          >Suchfeld</a
        >,
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#active_learning_creating_a_navigation_menu"
          >Erstellen eines Navigationsmenüs</a
        >,
        <a
          href="/de/docs/Learn/CSS/Styling_text/Styling_links#styling_links_as_buttons"
          >Links als Buttons gestalten</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.6 Überschriften und Beschriftungen (AA)</td>
      <td>
        Überschriften (z. B. {{htmlelement("Heading_Elements", "&lt;h2&gt;")}}) und
        {{htmlelement("label")}}-Elemente beschreiben klar den Zweck
        der Inhalte und Formularelemente, die sie beschreiben sollen.
      </td>
      <td>
        <p>
          Siehe
          <a href="/de/docs/Learn/Accessibility/HTML#ui_controls"
            >UI-Steuerelemente</a
          >,
          <a href="/de/docs/Learn/Accessibility/HTML#meaningful_text_labels"
            >Bedeutungsvolle Textbeschriftungen</a
          >,
          <a
            href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#the_basics_headings_and_paragraphs"
            >Die Grundlagen von Überschriften und Absätzen</a
          >,
          <a
            href="/de/docs/Learn/Forms/How_to_structure_a_web_form#the_label_element"
            >Das &#x3C;label>-Element</a
          >.
        </p>
        <p>
          Beachten Sie, dass Sie die Doppelung von Überschriften oder Beschriftungen (z. B. mehrere Instanzen von "Weitere Informationen") vermeiden sollten, es sei denn, die Struktur erlaubt es Ihnen, zwischen ihnen leicht zu unterscheiden.
        </p>
      </td>
    </tr>
    <tr>
      <td>2.4.7 Sichtbarer Fokus für fokussierbare Elemente (AA)</td>
      <td>
        Beim Tabben durch fokussierbare Elemente wie Links oder Formulareingaben sollte es einen visuellen Indikator geben, der zeigt, welches Element aktuell im Fokus steht. Dies ist normalerweise ein gestrichelter oder blauer Umriss standardmäßig (abhängig von Browser, Plattform, etc.), kann aber durch CSS überschrieben werden.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#using_native_keyboard_accessibility"
          >Verwendung nativer Tastaturzugänglichkeit</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.8 Standort innerhalb der Website (AAA)</td>
      <td>
        Wenn Sie sich auf einer Seite innerhalb einer komplexen Site oder eines Schrittes befinden, sollte dem Benutzer ein Indikator gegeben werden, wo er sich auf der Site befindet, z. B. eine Breadcrumb-Navigation, Sitemap oder Text wie "Formularseite 2 von 10".
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.4.9 Zweck des Links (nur Link) (AAA)</td>
      <td>
        Dieses Kriterium baut auf 2.4.4 auf und besagt, dass zur Konformität mit AAA der Zweck/das Ziel eines Links allein aus dem Linktext erkennbar sein sollte, selbst wenn er aus dem Kontext herausgelöst ist.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn/Accessibility/HTML#meaningful_text_labels"
          >Bedeutungsvolle Textbeschriftungen</a
        >. Beachten Sie auch, dass Sie Instanzen minimieren sollten, bei denen mehrere Kopien desselben Textes an verschiedene Stellen verlinken. Dies kann Probleme für Bildschirmleser-Benutzer verursachen, die oft eine Liste der Links außerhalb des Kontexts bringen — mehrere Links, die alle mit "hier klicken", "hier klicken", "hier klicken" gekennzeichnet sind, wären verwirrend.
      </td>
    </tr>
    <tr>
      <td>2.4.10 Abschnittsüberschriften (AAA)</td>
      <td>
        <p>
          Neben der Schaffung einer nützlichen Dokumentenstruktur sollten Überschriften auch Inhalte genau beschreiben und in logische Abschnitte unterteilen.
        </p>
        <p>
          Beachten Sie, dass sich dieses Kriterium auf Überschriften und Titel in allgemeinen Webinhalten (z. B. Überschriften in Textinhalten) bezieht. Überschriften und Titel für Benutzeroberflächen sind ein spezieller Fall, der in Kriterium 4.1.2 behandelt wird.
        </p>
      </td>
      <td>
        <p>
          Siehe
          <a
            href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#the_basics_headings_and_paragraphs"
            >Die Grundlagen von Überschriften und Absätzen</a
          >.
        </p>
      </td>
    </tr>
    <tr>
    <td> 2.4.11 Fokus nicht verdeckt (Minimum) (AA)</td>
    <td>
    <p> Wenn ein Benutzeroberflächenkomponente durch die Tastaturfokus erhält, wird die Komponente nicht vollständig aufgrund vom Benutzer erstelltem Inhalt verdeckt.</p>
    <p> <strong>Hinweis:</strong> Wenn der Inhalt der Oberfläche vom Benutzer neu positioniert werden kann, wird beim Testen zur Einhaltung dieses Standards nur die Ausgangsposition des benutzergesteuerten Inhalts berücksichtigt. Auch der vom Benutzer geöffnete Inhalt kann die Komponente verdecken, die den Fokus erhält. Darüber hinaus wird die Komponente mit Fokus nicht als verdeckt angesehen, wenn der Benutzer die fokussierte Komponente anzeigen kann, ohne den Tastaturfokus zu ändern, damit Konformität und Tests nicht beeinträchtigt werden.</p>
    </td>
    <td>
    <p> Lesen Sie <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum">Verständnis von Fokus nicht verdeckt (Minimum)</a>, um mehr über diesen Standard zu erfahren.</p>
    </td>
    </tr>
    <tr>
    <td> 2.4.12 Fokus nicht verdeckt (Erweitert) (AAA) </td>
    <td>
    <p> Entspricht den Regeln wie in 2.4.11, außer dass bei Fokus einer Benutzeroberflächenkomponente kein Teil der Komponente von benutzererstelltem Inhalt verdeckt werden kann. Wenn die Oberfläche konfigurierbar ist, werden beim Testen und Erfüllen dieses Standards nur die ursprünglichen Positionen des benutzergesteuerten Inhalts berücksichtigt.</p>
    </td>
    <td>
    <p> Lesen Sie <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced">Verständnis von Fokus nicht verdeckt (Erweitert) (Level AAA)</a>, um mehr über diesen Standard zu erfahren.</p> </td>
    </td>
    </tr>
<tr>
  <td> 2.4.13 Fokus Erscheinung (AAA)</td>
  <td>
    <p>Wenn der Tastaturfokus-Indikator sichtbar ist, entspricht der Bereich des Fokus-Indikators allen folgenden:</p>
    <ul>
      <li>Muss mindestens so groß sein wie der Bereich eines <code>2px</code> starken Umfangs der nicht fokussierten Komponente oder Unterkomponente, der den Inhalt, Rand und Hintergrund der Komponente umfasst, abgesehen von äußeren Schatten oder Leuchteffekten.</li>
      <li>Sollte ein Kontrastverhältnis von mindestens 3:1 zwischen denselben Pixeln in den fokussierten und nicht fokussierten Zuständen aufweisen</li>
    </ul>
    <p> Die Ausnahmen hierzu sind:</p>
    <ul>
      <li>Der Fokus-Indikator wird durch den Benutzer bestimmt und kann nicht vom Autor angepasst werden.</li>
      <li>Die Farbe des Fokus-Indikators und des Hintergrunds des Indikators wird vom Autor nicht verändert.</li>
    </ul>
  </td>
  <td>
    <p> Lesen Sie <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html">Verständnis von Fokus Erscheinung (Level AAA)</a>, um mehr über diesen Standard zu erfahren.</p>
  </td>
</tr>
  </tbody>
</table>

> [!NOTE]
> Lesen Sie auch die WCAG-Beschreibung für [Richtlinie 2.4 Navigierbar: Bieten Sie Möglichkeiten an, die Benutzern helfen, zu navigieren, Inhalte zu finden und festzustellen, wo sie sich befinden.](https://www.w3.org/TR/WCAG21/#navigable)

## Richtlinie 2.5 Eingabemodalitäten: Machen Sie es einfacher für Benutzer, die Funktionen über verschiedene Eingaben jenseits der Tastatur zu bedienen

Die Konformitätskriterien unter dieser Richtlinie stellen sicher, dass Benutzer in der Lage sind, mit digitalen Technologien unter Verwendung verschiedener Eingabemethoden jenseits einer Tastatur oder Maus (einschließlich Touchscreen, Sprachsteuerung, Gerätemotion oder alternativen Eingabegeräten) zu interagieren.

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
   <td>2.5.1 Zeigergesten (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Alle Funktionen, die mit einem Zeiger bedient werden können, können mit Einzelpunktaktionen bedient werden. Pfadbasierte oder Mehrpunktgesten sind nicht erforderlich, um eine Funktionalität zu bedienen. Ausnahmen existieren.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html">Verständnis von Zeigergesten</a></td>
  </tr>
  <tr>
   <td>2.5.2 Zeiger-Abbruch (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Für Funktionen, die mit einem Einzelzeiger bedient werden können, gilt mindestens eines der folgenden: kein Down-Event, Abbruch/Rückgängig, Aufwärtsumkehr oder wesentlich.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html">Verständnis von Zeiger-Abbruch</a></td>
  </tr>
  <tr>
   <td>2.5.3 Beschriftung im Namen (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Für jedes Benutzeroberflächenelement, das eine sichtbare Textbeschriftung enthält, stellen Sie sicher, dass der zugängliche Name mit dem sichtbaren Text im Etikett übereinstimmt (oder diesen einschließt).</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">Verständnis von Beschriftung im Namen</a></td>
  </tr>
  <tr>
   <td>2.5.4 Bewegungssteuerung (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Stellen Sie sicher, dass für Funktionen, die durch a) Gerätemotion (z. B. Schütteln, Neigen) oder b) Benutzergesten, die von Gerätesensoren (einschließlich Kamera) erkannt werden, ausgelöst werden können, beide der folgenden Punkte zutreffen: 1) Bewegungssteuerung kann deaktiviert werden und 2) die Funktionalität kann ohne Verwendung von Gerätemotion oder Benutzergesten bedient werden. Ausnahmen existieren.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html">Verständnis von Bewegungssteuerung</a></td>
  </tr>
  <tr>
   <td>2.5.5 Zielgröße (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Die Größe des Touch-Ziels eines bedienbaren Elements muss mindestens 44 CSS-Pixel in Breite und Höhe betragen. Ausnahmen existieren.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html">Verständnis von Zielgröße</a></td>
  </tr>
  <tr>
   <td>2.5.6 Gleichzeitige Eingabemechanismen (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Stellen Sie sicher, dass Benutzer digitale Inhalte unter Verwendung und Wechsel zwischen verschiedenen Eingabemodi, einschließlich Touchscreen, Tastatur, Maus, Sprachbefehlen oder alternativen Eingabegeräten, interagieren können. Eine wesentliche Ausnahme existiert.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html">Verständnis von gleichzeitigen Eingabemechanismen</a></td>
 </tr>
 <tr>
 <td> 2.5.8 Zielgröße Mindestanforderungen (AA)</td>
 <td> Die Zielgröße für Zeigereingaben sollte mindestens <code>24px</code> breit und <code>24px</code> hoch sein, außer in den folgenden Bereichen:
 <ul>
  <li> <strong>Abstand:</strong>Ziele, die kleiner als <code>24px x 24px</code> sind, sind so positioniert, dass, wenn ein <code>24px</code> großer Kreis auf die Mitte des Begrenzungsrahmens jedes Ziels zentriert ist, sich die Kreise nicht mit einem anderen Ziel oder dem Kreis eines anderen unterdimensionierten Ziels schneiden.</li>
  <li> <strong>Äquivalent:</strong> Eine separate Steuerung, die dieselbe Funktion erfüllt und diesen Standard erfüllt, ist auf derselben Seite verfügbar.</li>
  <li> <strong>Inline:</strong> Das Ziel befindet sich innerhalb einer Textzeile mit einer Größe, die durch die Zeilenhöhe oder den umgebenden Nicht-Ziel-Text beschränkt ist.</li>
  <li> <strong>Benutzeragentensteuerung:</strong> Die Größe des Ziels wird vom Benutzeragenten bestimmt und wurde vom Autor nicht verändert.</li>
  <li> <strong>Wesentlich:</strong> Eine spezifische Darstellung des Ziels ist wesentlich oder gesetzlich erforderlich für die zu vermittelnden Informationen.</li>
 </ul>
 <td> Lesen Sie <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html">Verständnis von Zielgröße Mindestanforderungen</a> </td>
</tr>
  </tr>
 </tbody>
</table>

> [!NOTE]
> Lesen Sie auch die WCAG-Beschreibung für [Richtlinie 2.5: Eingabemodalitäten: Machen Sie es einfacher für Benutzer, die Funktionen über verschiedene Eingaben jenseits der Tastatur zu bedienen.](https://www.w3.org/TR/WCAG21/#input-modalities)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG)

  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
  2. Operable
  3. [Verständlich](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Understanding_WCAG/Robust)
