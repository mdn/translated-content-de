---
title: Bedienbar
slug: Web/Accessibility/Guides/Understanding_WCAG/Operable
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

Dieser Artikel bietet praktische Ratschläge dazu, wie Sie Ihre Webinhalte so erstellen, dass sie den Erfolgskriterien des **Bedienbar**-Prinzips der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 entsprechen. Bedienbar bedeutet, dass Benutzeroberflächenkomponenten und Navigation bedienbar sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Bedienbar und seine Richtlinien sowie Erfolgskriterien zu lesen, siehe [Prinzip 2: Bedienbar — Benutzeroberflächenkomponenten und Navigation müssen bedienbar sein.](https://w3c.github.io/wcag/guidelines/22/#operable)

## Richtlinie 2.1 — Tastaturzugänglich: Alle Funktionen über eine Tastatur verfügbar machen

Diese Richtlinie behandelt die Notwendigkeit, die Kernfunktionalität einer Website über eine Tastatur neben anderen Mitteln (z.B. Maus) verfügbar zu machen, damit Benutzer, die auf Tastatursteuerungen angewiesen sind, darauf zugreifen können.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">So erfüllen Sie die Kriterien</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.1.1 Tastatur (A)</td>
      <td>
        Alle Funktionen sollten über Tastatursteuerungen zugänglich sein, es sei denn, es ist nicht mit der Tastatur möglich (z.B. Freihandzeichnen). Eingebaute Steuerungen sollten, wo möglich, verwendet werden (z.B. durch Formularelemente tabben), und Sie sollten nur dann benutzerdefinierte Funktionen einbauen, wenn es erforderlich ist.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie nach Möglichkeit semantische UI-Steuerungen</a
        >
        und
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Tastaturzugänglichkeit wieder einbauen</a
        >
      </td>
    </tr>
    <tr>
      <td>2.1.2 Keine Tastaturfalle (A)</td>
      <td>
        <p>
          Wenn Sie mit der Tastatur in einen Funktionsbereich eintreten, sollten Sie diesen Abschnitt nur mit der Tastatur wieder verlassen können. Wenn Sie beispielsweise die <kbd>Enter</kbd>-/<kbd>Return</kbd>-Taste auf einem fokussierten Button drücken, um ein Optionsfenster zu öffnen, sollten Sie dieses Fenster wieder schließen und mit der Tastatur zum Hauptinhalt zurückkehren können.
        </p>
        <p>
          Dies ist sehr wichtig, damit Tastaturnutzer nicht in bestimmten Abschnitten Ihrer Apps gefangen sind.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.1.3 Tastatur — alle Funktionen (AAA)</td>
      <td>
        Dies ist ein weiterer Schritt über das Kriterium 2.1.1 hinaus. Um die AAA-Konformität zu erreichen, sollten alle Funktionen über Tastatursteuerungen zugänglich sein — ohne Ausnahmen.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie nach Möglichkeit semantische UI-Steuerungen</a
        >
        und
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Tastaturzugänglichkeit wieder einbauen</a
        >
      </td>
    </tr>
    <tr>
      <td>
        2.1.4 Zeichen-Tastenkürzel (A)
      </td>
      <td>
        Wenn ein einzelnes Zeichen-Tastenkürzel existiert, dann trifft mindestens eines der folgenden zu: Einzeltasten-Tastenkombinationen können deaktiviert, neu zugeordnet oder sind nur aktiv, wenn die relevante Benutzeroberflächenkomponente fokussiert ist.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html"
          >Verständnis von Zeichen-Tastenkürzeln</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.1 Tastaturzugänglich: Alle Funktionen über eine Tastatur verfügbar machen](https://w3c.github.io/wcag/guidelines/22/#keyboard-accessible).

## Richtlinie 2.2 — Genügend Zeit: Den Nutzern genügend Zeit geben, um Inhalte zu lesen und zu nutzen

Diese Richtlinie behandelt Situationen, in denen Funktionen möglicherweise ein Zeitlimit haben. Zum Beispiel müssen Einkäufe manchmal aus Sicherheitsgründen innerhalb eines Zeitlimits abgeschlossen werden.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">So erfüllen Sie die Kriterien</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.2.1 Einstellbares Timing (A)</td>
      <td>
        <p>
          Bei Funktionen mit Zeitlimits (z.B. das Ausfüllen einer Hotel- oder Flugbuchung hat oft ein Zeitlimit) sollte der Benutzer über Steuerungen verfügen, die es ihm erlauben, das Zeitlimit anzupassen, zu verlängern oder auszuschalten.
        </p>
        <p>
          Ausnahmen hierzu sind Aktivitäten mit Zeitlimits von mehr als 20 Stunden, Echtzeitereignisse (z.B. Live-Mehrspieler-Spiele) und alle anderen Aktivitäten, die ein Zeitlimit erfordern und ungültig würden, wenn es ausgeschaltet würde.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.2 Anhalten, stoppen, ausblenden (A)</td>
      <td>
        <p>
          Für sich automatisch in Bewegung setzenden oder blinkenden Inhalt, der länger als 5 Sekunden dauert und zusammen mit anderen Inhalten angezeigt wird, sollten Steuerungen bereitgestellt werden, um ihn anzuhalten, zu stoppen oder auszublenden. Dies gilt nicht für bewegten/blinkenden Inhalt, der für das Erlebnis wesentlich ist. Beispiele sind laufende Texte und Videos.
        </p>
        <p>
          Für sich automatisch aktualisierende Informationen, die automatisch starten und zusammen mit anderen Inhalten angezeigt werden, sollten Steuerungen bereitgestellt werden, um sie anzuhalten, zu stoppen oder auszublenden, bzw. um die Frequenz der Aktualisierungen zu steuern. Dies gilt nicht für sich automatisch aktualisierenden Inhalt, der für das Erlebnis wesentlich ist. Beispiele sind Karusselle oder rotierende Ankündigungen.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.3 Keine Zeitlimits (AAA)</td>
      <td>
        Dies baut auf Kriterium 2.2.1 auf und besagt, dass Inhalte, die die AAA-Konformität erreichen möchten, keine Zeitlimits haben sollten.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.4 Unterbrechungen unterdrücken (AAA)</td>
      <td>
        Alle Unterbrechungen wie Warnungen oder Werbeeinblendungen sollten Funktionen haben, um sie zu unterdrücken oder aufzuschieben, es sei denn, es handelt sich um Notfallwarnungen.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.5 Wieder-Authentisieren (AAA)</td>
      <td>
        Wenn eine Authentifizierungssitzung während der Nutzung einer Web-App abläuft, kann der Benutzer sich erneut authentifizieren und die Nutzung fortsetzen, ohne dass Daten verloren gehen.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        2.2.6 Timeouts (AAA)
      </td>
      <td>
        <p>
          Wenn es ein Timeout (verursacht durch Inaktivität des Benutzers) gibt, warnen Sie Benutzer zu Beginn eines Prozesses, damit sie nicht überrascht sind, dass ein Timeout existiert (oder lassen Sie das Timeout erst nach 20 Stunden Inaktivität auftreten).
        </p>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html"
          >Verständnis von Timeouts</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.2 Genügend Zeit: Den Nutzern genügend Zeit geben, um Inhalte zu lesen und zu nutzen](https://w3c.github.io/wcag/guidelines/22/#enough-time).

## Richtlinie 2.3 — Anfälle und physische Reaktionen: Inhalte nicht so gestalten, dass sie Anfälle oder physische Reaktionen auslösen können

Dies bezieht sich auf Inhalte, die, wenn sie nicht geändert werden, Anfälle bei Nutzern mit Erkrankungen wie Epilepsie oder physische Reaktionen (wie Schwindel) bei Nutzern mit Erkrankungen wie vestibulären Störungen auslösen könnten.

<table>
  <thead>
    <tr>
    <th scope="col">Erfolgskriterien</th>
    <th scope="col">So erfüllen Sie die Kriterien</th>
    <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.3.1 Drei Blitze oder unter der Schwelle (A)</td>
      <td>Inhalte enthalten keine Aspekte, die mehr als dreimal pro Sekunde blitzen, oder blitzende Inhalte liegen unter den akzeptablen <a href="https://w3c.github.io/wcag/guidelines/22/#dfn-general-flash-and-red-flash-thresholds">Blitz- und Rotblitzschwellenwerten</a>.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.2 Drei Blitze (AAA)</td>
      <td>Inhalte enthalten keine Aspekte, die mehr als dreimal pro Sekunde blitzen.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.3 Animationen aus Interaktionen (AAA)</td>
      <td>Benutzern erlauben, Animationen aus Interaktionen zu deaktivieren (es sei denn, die Animation ist wesentlich).</td>
      <td><a href="https://w3c.github.io/wcag/guidelines/22/#animation-from-interactions">Verständnis von Animationen aus Interaktionen</a></td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.3 Anfälle und physische Reaktionen: Inhalte nicht so gestalten, dass sie Anfälle oder physische Reaktionen auslösen können.](https://w3c.github.io/wcag/guidelines/22/#seizures-and-physical-reactions)

## Richtlinie 2.4 — Navigierbar: Möglichkeiten bieten, um Nutzern das Navigieren, Finden von Inhalten und Bestimmen ihres Standortes zu erleichtern

Die Konformitätskriterien dieser Richtlinie beziehen sich auf Möglichkeiten, wie Benutzer erwarten können, sich zu orientieren und die Inhalte und Funktionen zu finden, die sie auf der aktuellen Seite oder auf anderen Seiten der Website suchen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">So erfüllen Sie die Kriterien</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.4.1 Blöcke überspringen (A)</td>
      <td>
        <p>
          Ein Mechanismus sollte bereitgestellt werden, der es dem Benutzer ermöglicht, direkt zum Haupinhalt oder zu den Funktionen auf der Seite zu springen und die wiederholten Funktionen (wie das Firmenlogo oder die Navigation) zu überspringen. Dies wird oft mit "Überspringen-Links" erreicht — Links, die am Anfang des Seitenquellcodes eingefügt werden und die zum Hauptinhalt führen und durch CSS ausgeblendet werden.
        </p>
        <p>
          Wenn eine richtige Struktur von Überschriften und semantischen Containern bereitgestellt wird, um damit zu navigieren (zum Beispiel {{htmlelement("section")}}, {{htmlelement("aside")}}, etc.), dann ist ein zusätzlicher "Überspringen-Link" nicht nötig.
        </p>
      </td>
      <td><em>Abschnitt über "Überspringen-Links" hinzufügen.</em></td>
    </tr>
    <tr>
      <td>2.4.2 Seitentitel einschließen (A)</td>
      <td>
        Jede Webseite sollte eine informative {{htmlelement("title")}} enthalten, deren Inhalt die Inhalte/Purpose der Seite beschreibt.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_a_title"
          >Hinzufügen eines Titels</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.3 Logische Fokusreihenfolge (A)</td>
      <td>
        Die "Tab-Reihenfolge" der fokussierbaren Seitenelemente (z.B. Links, Buttons, Formulareingaben) ergibt einen logischen Sinn, das bedeutet, dass die Seite auch für blinde/Tastaturbenutzer nutzbar bleibt.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie nach Möglichkeit semantische UI-Steuerungen</a
        >
        für allgemeine Ratschläge zum Tabben zu Steuerungen. Wenn Sie Elemente in einer ungewöhnlichen Anordnung platzieren müssen, ist es besser, sicherzustellen, dass die Quellreihenfolge sinnvoll ist, dann CSS-Funktionen wie <a href="/de/docs/Learn_web_development/Core/CSS_layout/Positioning">Positionierung</a> zu nutzen, um das Layout zu steuern.
      </td>
    </tr>
    <tr>
      <td>2.4.4 Verwendungszweck des Links (im Kontext) (A)</td>
      <td>
        Der Zweck/Das Ziel eines Links kann aus dem Linktext oder aus seinem Umfeld abgeleitet werden (z.B. dem umliegenden Text). Ausnahmen sind, wo der Linkzweck für <em>alle</em> Benutzer mehrdeutig ist (siehe <a href="https://w3c.github.io/wcag/guidelines/22/#dfn-ambiguous-to-users-in-general">mehrdeutig für Benutzer im Allgemeinen</a> für eine nützliche Erklärung dazu).
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels"
          >Verwenden Sie bedeutsame Textbeschriftungen</a
        >. Beachten Sie auch, dass Sie Fälle minimieren sollten, in denen mehrere Kopien desselben Textes auf verschiedene Stellen verlinkt werden. Dies kann Probleme für Benutzer von Bildschirmlesegeräten verursachen, die oft eine Liste der Links aus dem Zusammenhang heraus anzeigen — mehrere Links, die alle mit "hier klicken", "hier klicken", "hier klicken" beschriftet sind, wären verwirrend.
      </td>
    </tr>
    <tr>
      <td>2.4.5 Mehrere Navigationsmechanismen (AA)</td>
      <td>
        <p>
          Sie sollten mindestens zwei allgemeine Navigationsmechanismen bereitstellen, um Seiten auf Ihrer Website zu finden, zum Beispiel Navigationsmenü, Brotkrümelpfad, Sitesuche, Sitemap, Liste verwandter Links, etc.
        </p>
        <p>
          Die einzige Ausnahme hiervon ist, wenn eine Seite ein Schritt in einem Prozess ist und daher nur logisch Links zu den vorherigen und nächsten Schritten haben sollte.
        </p>
      </td>
      <td>
        Die meisten dieser Mechanismen können mit voll unterstützten HTML-Funktionen erstellt werden, zum Beispiel siehe
        <a
          href="/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#search_field"
          >Suchfeld</a
        >,
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#creating_a_navigation_menu"
          >Erstellen eines Navigationsmenüs</a
        >,
        <a
          href="/de/docs/Learn_web_development/Core/Text_styling/Styling_links#styling_links_as_buttons"
          >Links als Schaltflächen gestalten</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.6 Überschriften und Beschriftungen (AA)</td>
      <td>
        Überschriftselemente (z.B. {{htmlelement("Heading_Elements", "&lt;h2&gt;")}}) und {{htmlelement("label")}}-Elemente beschreiben klar den Zweck der Inhalte und Formelemente, die sie beschreiben sollen.
      </td>
      <td>
        <p>
          Siehe
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
            >Verwenden Sie nach Möglichkeit semantische UI-Steuerungen</a
          >,
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels"
            >Verwenden Sie bedeutsame Textbeschriftungen</a
          >,
          <a
            href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
            >Die Grundlagen von Überschriften und Absätzen</a
          >,
          <a
            href="/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#the_label_element"
            >Das &#x3C;label> Element</a
          >.
        </p>
        <p>
          Beachten Sie, dass Sie die Duplizierung von Überschriften oder Beschriftungen vermeiden sollten (z.B. mehrere Instanzen von "Weitere Informationen"), es sei denn, der Aufbau ermöglicht Ihnen, leicht zwischen ihnen zu unterscheiden.
        </p>
      </td>
    </tr>
    <tr>
      <td>2.4.7 Sichtbarer Fokus für fokussierbare Elemente (AA)</td>
      <td>
        Beim Tabben durch fokussierbare Elemente wie Links oder Formulareingaben sollte es einen visuellen Indikator geben, der zeigt, welches Element aktuell den Fokus hat. Dies ist normalerweise ein gepunkteter oder blauer Umriss standardmäßig (abhängig von Browser, Plattform, etc.), aber dies kann durch CSS überschrieben werden.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie nach Möglichkeit semantische UI-Steuerungen</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.8 Standort auf der Website (AAA)</td>
      <td>
        Wenn Sie sich auf einer Seite innerhalb einer komplexen Website oder einem Komplex von Schritten befinden, sollte dem Benutzer ein Indikator darüber bereitgestellt werden, wo er sich auf der Website befindet, zum Beispiel ein Brotkrümelpfad, eine Sitemap oder ein Text wie "Formularseite 2 von 10".
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.4.9 Verwendungszweck des Links (Link alleine) (AAA)</td>
      <td>
        Dieses Kriterium baut auf 2.4.4 auf und besagt, dass zur Erfüllung der AAA-Konformität der Zweck/Ziel eines Links allein aus dem Linktext heraus erkennbar sein sollte, auch wenn er aus dem Kontext heraus ist.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels"
          >Verwenden Sie bedeutsame Textbeschriftungen</a
        >. Beachten Sie auch, dass Sie Fälle minimieren sollten, in denen mehrere Kopien desselben Textes auf verschiedene Stellen verlinkt werden. Dies kann Probleme für Benutzer von Bildschirmlesegeräten verursachen, die oft eine Liste der Links aus dem Zusammenhang heraus anzeigen — mehrere Links, die alle mit "hier klicken", "hier klicken", "hier klicken" beschriftet sind, wären verwirrend.
      </td>
    </tr>
    <tr>
      <td>2.4.10 Abschnittsüberschriften (AAA)</td>
      <td>
        <p>
          Neben der Erstellung einer nützlichen Dokumentstruktur sollten Überschriften auch genau beschreiben und Inhaltsbereiche in logische Abschnitte unterteilen.
        </p>
        <p>
          Beachten Sie, dass sich dieses Kriterium auf Überschriften und Titel im allgemeinen Webinhalt bezieht (z.B. Überschriften innerhalb von Textinhalten). Überschriften und Titel für Benutzeroberflächen sind ein Sonderfall, der in Kriterium 4.1.2 behandelt wird.
        </p>
      </td>
      <td>
        <p>
          Siehe
          <a
            href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
            >Die Grundlagen von Überschriften und Absätzen</a
          >.
        </p>
      </td>
    </tr>
    <tr>
    <td> 2.4.11 Fokus nicht verdeckt (Minimum) (AA)</td>
    <td>
    <p> Wenn eine Benutzeroberflächenkomponente den Tastaturfokus erhält, ist die Komponente nicht vollständig durch vom Autor erstellte Inhalte verdeckt.</p>
    <p> <strong>Hinweis:</strong> Wenn der Inhalt der Oberfläche vom Benutzer umpositioniert werden kann, wird nur die ursprüngliche Position des vom Benutzer bewegbaren Inhalts für Tests zur Einhaltung dieses Standards in Betracht gezogen. Zusätzlich kann Inhalt, der vom Benutzer geöffnet wird, die Komponente verdecken, die den Fokus erhält. Wenn der Benutzer die fokussierte Komponente offenlegen kann, ohne den Tastaturfokus zu ändern, wird die Komponente mit Fokus für Konformitäts- und Testzwecke nicht als verdeckt angesehen.</p>
    </td>
    <td>
    <p> Weitere Informationen finden Sie unter <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum">Verständnis von Fokus nicht verdeckt (Minimum)</a>.</p>
    </td>
    </tr>
    <tr>
    <td> 2.4.12 Fokus nicht verdeckt (Erweitert) (AAA) </td>
    <td>
    <p> Folgt den Regeln von 2.4.11, außer dass bei Fokuserhalt für eine Benutzeroberflächenkomponente kein Teil der Komponente durch vom Autor erstellte Inhalte verdeckt werden kann. Wenn die Oberfläche konfigurierbar ist, werden nur die ursprünglichen Positionen der vom Benutzer bewegbaren Inhalte für die Prüfung und Einhaltung dieses Standards betrachtet.</p>
    </td>
    <td>
    <p> Weitere Informationen finden Sie unter <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced">Verständnis von Fokus nicht verdeckt (Erweitert) (Level AAA)</a>.</p> </td>
    </td>
    </tr>
<tr>
  <td> 2.4.13 Fokusdarstellung (AAA)</td>
  <td>
    <p>Wenn der Tastaturfokus-Indikator sichtbar ist, erfüllt der Bereich des Fokus-Indikators alle folgenden Punkte:</p>
    <ul>
      <li>Muss mindestens so groß sein wie der Bereich eines <code>2px</code> dicken Umfangs der nicht fokussierten Komponente oder Subkomponente, einschließlich des Inhalts, des Rahmens und des Hintergrunds der Komponente, jedoch ohne äußere Schatten oder Glüheffekte.</li>
      <li>Muss einen Kontrastverhältnis von mindestens 3:1 zwischen denselben Pixeln in den fokussierten und nicht fokussierten Zuständen haben.</li>
    </ul>
    <p> Die Ausnahmen davon sind:</p>
    <ul>
      <li>Der Fokus-Indikator wird vom Benutzer bestimmt und kann vom Autor nicht angepasst werden.</li>
      <li>Die Hintergrundfarbe des Fokus-Indikators und des Indikators wird vom Autor nicht verändert.</li>
    </ul>
  </td>
  <td>
    <p> Weitere Informationen finden Sie unter <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html">Verständnis von Fokusdarstellung (Level AAA)</a>.</p>
  </td>
</tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.4 Navigierbar: Möglichkeiten bieten, um Nutzern das Navigieren, Finden von Inhalten und Bestimmen ihres Standortes zu erleichtern.](https://w3c.github.io/wcag/guidelines/22/#navigable)

## Richtlinie 2.5 Eingabemodalitäten: Benutzerfreundlichkeit durch verschiedene Eingaben über die Tastatur hinaus erleichtern

Die Konformitätskriterien dieser Richtlinie stellen sicher, dass Benutzer in der Lage sind, mit digitaler Technologie mithilfe verschiedener Eingabemethoden neben einer Tastatur oder Maus (einschließlich Touchscreen, Stimme, Bewegungssteuerung des Geräts oder alternativen Eingabegeräten) zu interagieren.

<table>
 <thead>
  <tr>
   <th scope="col">Erfolgskriterien</th>
   <th scope="col">So erfüllen Sie die Kriterien</th>
   <th scope="col">Praktische Ressource</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>2.5.1 Zeigergesten (A)</td>
   <td>Alle Funktionen, die mit einem Zeiger bedient werden können, können mit Einzelpunktaktionen betrieben werden. Pfadbasierte oder Mehrpunktgesten sind nicht erforderlich, um eine Funktion zu bedienen. Es gibt Ausnahmen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html">Verständnis von Zeigergesten</a></td>
  </tr>
  <tr>
   <td>2.5.2 Zeigerabbruch (A)</td>
   <td>Für Funktionalitäten, die mit einem einzelnen Zeiger betrieben werden können, trifft mindestens eines der folgenden zu: kein Down-Ereignis, Abbruch/Rückgängig, Umkehrung nach oben oder wesentlich.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html">Verständnis von Zeigerabbruch</a></td>
  </tr>
  <tr>
   <td>2.5.3 Beschriftung im Namen (A)</td>
   <td>Für jede Benutzeroberflächenkomponente, die ein sichtbares Textetikett enthält, stellen Sie sicher, dass der zugängliche Name mit dem sichtbaren Text im Etikett übereinstimmt (oder ihn einschließt).</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">Verständnis von Beschriftung im Namen</a></td>
  </tr>
  <tr>
   <td>2.5.4 Bewegungssteuerung (A)</td>
   <td>Stellen Sie sicher, dass für Funktionen, die a) durch Bewegung des Geräts (wie Schütteln, Kippen) oder b) durch Benutzergesten, die von Gerätesensoren (einschließlich einer Kamera) erkannt werden, ausgelöst werden können, beide der folgenden Punkte zutreffen: 1) Bewegungssteuerung kann deaktiviert werden, und 2) die Funktion kann ohne Gerätemotion oder Benutzergesten betrieben werden. Es gibt Ausnahmen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html">Verständnis von Bewegungssteuerung</a></td>
  </tr>
  <tr>
   <td>2.5.5 Zielgröße (AAA)</td>
   <td>Die Größe des Touchziels eines ausführbaren Elements muss mindestens 44 CSS-Pixel in sowohl Breite als auch Höhe betragen. Es gibt Ausnahmen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html">Verständnis von Zielgröße</a></td>
  </tr>
  <tr>
   <td>2.5.6 Gleichzeitige Eingabemechanismen (AAA)</td>
   <td>Stellen Sie sicher, dass Menschen verschiedene Eingabemodi verwenden und zwischen ihnen wechseln können, wenn sie mit digitalen Inhalten interagieren, einschließlich Touchscreen, Tastatur, Maus, Sprachbefehle oder alternative Eingabegeräte. Es gibt eine wesentliche Ausnahme.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html">Verständnis von gleichzeitigen Eingabemechanismen</a></td>
 </tr>
 <tr>
 <td> 2.5.8 Mindestzielgröße (AA)</td>
 <td> Die Zielgröße für Zeigereingaben sollte mindestens <code>24px</code> breit und <code>24px</code> hoch sein, außer in folgenden Bereichen:
 <ul>
  <li> <strong>Abstand:</strong> Ziele, die kleiner als <code>24px x 24px</code> sind, sind so positioniert, dass, wenn ein <code>24px</code> Durchmesser-Kreis auf das Begrenzungsrechteck jedes Ziels zentriert ist, die Kreise sich nicht mit einem anderen Ziel oder dem Kreis eines anderen untergroßen Ziels überschneiden.</li>
  <li> <strong>Äquivalent:</strong> Eine separate Steuerung, die dieselbe Funktion erfüllt und diesen Standard erfüllt, ist auf derselben Seite verfügbar.</li>
  <li> <strong>Inline:</strong> Das Ziel befindet sich innerhalb einer Textzeile, wobei seine Größe durch die Zeilenhöhe oder den umgebenden Nicht-Ziel-Text eingeschränkt ist.</li>
  <li> <strong>Benutzeragentensteuerung:</strong> Die Zielgröße wird durch den Benutzeragenten bestimmt und wurde vom Autor nicht geändert.</li>
  <li> <strong>Wesentlich:</strong> Eine bestimmte Präsentation des Ziels ist für die vermittelten Informationen wesentlich oder gesetzlich vorgeschrieben.</li>
 </ul>
 <td> Weitere Informationen finden Sie unter <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html">Verständnis von Mindestzielgröße</a> </td>
</tr>
  </tr>
 </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.5: Eingabemodalitäten: Benutzerfreundlichkeit durch verschiedene Eingaben über die Tastatur hinaus erleichtern.](https://w3c.github.io/wcag/guidelines/22/#input-modalities)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. Bedienbar
  3. [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)
