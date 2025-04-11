---
title: Bedienbar
slug: Web/Accessibility/Guides/Understanding_WCAG/Operable
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

Dieser Artikel liefert praktische Ratschläge, wie Sie Ihre Webinhalte so schreiben, dass sie den Erfolgskriterien des Prinzips **Bedienbar** der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 entsprechen. "Bedienbar" besagt, dass Benutzeroberflächenkomponenten und Navigation bedienbar sein müssen.

> [!NOTE]
> Die W3C-Definitionen für Bedienbar und deren Richtlinien sowie Erfolgskriterien finden Sie unter [Prinzip 2: Bedienbar — Benutzeroberflächenkomponenten und Navigation müssen bedienbar sein.](https://www.w3.org/TR/WCAG21/#operable)

## Richtlinie 2.1 — Tastaturbedienbar: Stellen Sie sicher, dass alle Funktionen über eine Tastatur verfügbar sind

Diese Richtlinie behandelt die Notwendigkeit, die grundlegende Funktionalität einer Website zusätzlich zu anderen Mitteln (z. B. Maus) über eine Tastatur zugänglich zu machen, sodass Benutzer, die auf Tastatursteuerungen angewiesen sind, darauf zugreifen können.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie man die Kriterien erfüllt</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.1.1 Tastatur (A)</td>
      <td>
        Alle Funktionalitäten sollten über Tastatursteuerungen zugänglich sein, es sei denn, dies ist nicht möglich (z. B. Freihandzeichnung). Wo möglich, sollten integrierte Steuerungen verwendet werden (z. B. sich durch Formularelemente tabben), und nur dort, wo es erforderlich ist, sollten Sie benutzerdefinierte Funktionen erstellen.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie semantische UI-Steuerelemente, wo möglich</a
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
          Wenn Sie einen Funktionsbereich mithilfe der Tastatur betreten, sollten Sie wieder aus diesem Bereich herauskommen können, indem Sie <em>nur</em> die Tastatur verwenden. Wenn Sie beispielsweise auf eine Schaltfläche fokussieren und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken, um ein Optionsfenster zu öffnen, sollten Sie dieses Fenster wieder schließen und mit der Tastatur zur Hauptinhaltsseite zurückkehren können.
        </p>
        <p>
          Dies ist sehr wichtig, damit Tastaturnutzer nicht in bestimmten Bereichen Ihrer Apps gefangen werden.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.1.3 Tastatur — alle Funktionen (AAA)</td>
      <td>
        Dies ist ein weiterer Schritt über das Kriterium 2.1.1 hinaus. Um die Konformität der Stufe AAA zu erreichen, sollten alle Funktionen über Tastatursteuerungen zugänglich sein — ohne Ausnahmen.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie semantische UI-Steuerelemente, wo möglich</a
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
        2.1.4 Zeichenkurzbefehle (A)
        <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        Wenn ein einzelner Zeichenkurzbefehl existiert, dann muss mindestens einer der folgenden Punkte zutreffen: Einzelne Zeichenkurzbefehle können ausgeschaltet, neu zugeordnet oder sind nur aktiv, wenn die entsprechende Benutzeroberflächenkomponente fokussiert ist.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html"
          >Verständnis von Zeichenkurzbefehlen</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.1 Tastaturbedienbar: Stellen Sie sicher, dass alle Funktionen über eine Tastatur verfügbar sind](https://www.w3.org/TR/WCAG21/#keyboard-accessible).

## Richtlinie 2.2 — Genügend Zeit: Stellen Sie den Benutzern genügend Zeit zum Lesen und Verwenden von Inhalten zur Verfügung

Diese Richtlinie behandelt Situationen, in denen Funktionalitäten möglicherweise eine zeitliche Begrenzung haben. Zum Beispiel müssen Käufe manchmal aus Sicherheitsgründen innerhalb einer bestimmten Zeit abgeschlossen werden.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie man die Kriterien erfüllt</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.2.1 Zeitspanne ist einstellbar (A)</td>
      <td>
        <p>
          Für Funktionalitäten mit zeitlichen Begrenzungen (z. B. das Abschließen einer Hotel- oder Flugbuchung hat oft ein Zeitlimit) sollte dem Benutzer die Möglichkeit gegeben werden, dieses Zeitlimit anzupassen, zu verlängern oder auszuschalten.
        </p>
        <p>
          Ausnahmen sind Aktivitäten mit Zeitlimits von mehr als 20 Stunden, Echtzeitereignisse (z. B. Live-Mehrspieler-Spiele) und andere Aktivitäten, die ein Zeitlimit erfordern und ungültig würden, wenn es abgeschaltet würde.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.2 Anhalten, stoppen, ausblenden (A)</td>
      <td>
        <p>
          Für sich automatisch bewegende oder blinkende Inhalte, die länger als 5 Sekunden dauern und neben anderen Inhalten angezeigt werden, sollten Steuerungen bereitgestellt werden, um diese anzuhalten, zu stoppen oder auszublenden. Dies gilt nicht für bewegende oder blinkende Inhalte, die für die Erfahrung wesentlich sind. Beispiele sind scrollender Text und Videos.
        </p>
        <p>
          Bei automatisch aktualisierten Informationen, die automatisch starten und neben anderen Inhalten angezeigt werden, sollten Steuerungen bereitgestellt werden, um diese anzuhalten, zu stoppen oder auszublenden oder um die Häufigkeit der Updates zu steuern. Dies gilt nicht für automatisch aktualisierte Inhalte, die für die Erfahrung wesentlich sind. Beispiele sind Karussells oder sich drehende Ankündigungen.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.3 Keine Zeitlimits (AAA)</td>
      <td>
        Dies baut auf den Kriterien 2.2.1 auf und besagt, dass Inhalte, die die Konformität der Stufe AAA erreichen möchten, keine Zeitlimits haben sollten.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.4 Unterbrechungen unterdrücken (AAA)</td>
      <td>
        Jegliche Unterbrechungen, wie Meldungen oder überlappende Anzeigen, sollten durch verfügbare Funktionen unterdrückt oder verschoben werden können, es sei denn, es ist eine Notfallmeldung.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.5 Wiederanmeldung (AAA)</td>
      <td>
        Wenn eine Authentifizierungssitzung während der Nutzung einer Webanwendung abläuft, kann sich der Benutzer erneut authentifizieren und seine Nutzung fortsetzen, ohne Daten zu verlieren.
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
          Wenn es eine Zeitüberschreitung (verursacht durch Benutzerinaktivität) gibt, benachrichtigen Sie Benutzer zu Beginn eines Prozesses, damit sie nicht überrascht sind, dass eine Zeitüberschreitung existiert (oder erlauben Sie nur eine Zeitüberschreitung nach 20 Stunden Inaktivität).
        </p>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html"
          >Verständnis von Zeitüberschreitungen</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.2 Genügend Zeit: Stellen Sie den Benutzern genügend Zeit zum Lesen und Verwenden von Inhalten zur Verfügung](https://www.w3.org/TR/WCAG21/#enough-time).

## Richtlinie 2.3 — Anfälle und körperliche Reaktionen: Entwerfen Sie Inhalte nicht so, dass sie bekanntermaßen Anfälle oder körperliche Reaktionen verursachen

Dies bezieht sich auf Inhalte, die, falls sie nicht geändert werden, Anfälle bei Nutzern mit Bedingungen wie Epilepsie auslösen können oder körperliche Reaktionen (wie Schwindel) bei Nutzern mit Bedingungen wie vestibulären Störungen hervorrufen können.

<table>
  <thead>
    <tr>
    <th scope="col">Erfolgskriterien</th>
    <th scope="col">Wie man die Kriterien erfüllt</th>
    <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.3.1 Drei Blitze oder unterhalb der Schwelle (A)</td>
      <td>Der Inhalt enthält keine Elemente, die mehr als dreimal pro Sekunde blinken, oder das blinkende Element liegt unterhalb der akzeptablen <a href="https://www.w3.org/TR/WCAG20/#general-thresholddef">Grenzwerte für Blinken und rote Blitze</a>.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.2 Drei Blitze (AAA)</td>
      <td>Der Inhalt enthält keine Elemente, die mehr als dreimal pro Sekunde blinken.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.3 Animationen aus Interaktionen (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
      <td>Erlauben Sie den Nutzern, Animationen aus Interaktionen zu deaktivieren (es sei denn, die Animation ist unverzichtbar).</td>
      <td><a href="https://www.w3.org/TR/WCAG21/#animation-from-interactions">Verständnis von Animationen aus Interaktionen</a></td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.3 Anfälle und körperliche Reaktionen: Entwerfen Sie Inhalte nicht so, dass sie bekanntermaßen Anfälle oder körperliche Reaktionen verursachen.](https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions)

## Richtlinie 2.4 — Navigierbar: Stellen Sie Möglichkeiten zur Verfügung, um Benutzern zu helfen, sich zu orientieren, Inhalte zu finden und zu bestimmen, wo sie sich befinden

Die Konformitätskriterien unter dieser Richtlinie beziehen sich auf Möglichkeiten, wie Benutzer erwarten können, sich zu orientieren und die Inhalte und Funktionen zu finden, die sie auf der aktuellen oder anderen Seiten der Webseite suchen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie man die Kriterien erfüllt</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.4.1 Blöcke überspringen (A)</td>
      <td>
        <p>
          Es sollte ein Mechanismus bereitgestellt werden, der es dem Benutzer ermöglicht, direkt zum Hauptinhalt oder zur verfügbaren Funktionalität auf der Seite zu springen, vorbei an wiederholten Funktionen (wie dem Firmenlogo oder der Navigation). Dies wird oft über "Sprunglinks" erreicht — Links, die am Anfang des Seitencodes platziert sind, zum Hauptinhalt führen und durch CSS verborgen werden.
        </p>
        <p>
          Wenn eine ordnungsgemäße Überschriftstruktur und semantische Container bereitgestellt werden, um sich durch die Seite zu bewegen (zum Beispiel {{htmlelement("section")}}, {{htmlelement("aside")}} usw.), dann ist kein zusätzlicher "Sprunglink" notwendig.
        </p>
      </td>
      <td><em>Es muss noch ein Abschnitt über "Sprunglinks" hinzugefügt werden.</em></td>
    </tr>
    <tr>
      <td>2.4.2 Seitentitel einfügen (A)</td>
      <td>
        Jede Webseite sollte einen informativen {{htmlelement("title")}} enthalten, dessen Inhalt den Inhalt/Zweck der Seite beschreibt.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_a_title"
          >Titel hinzufügen</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.3 Logische Fokusreihenfolge (A)</td>
      <td>
        Die "Tab-Reihenfolge" von fokussierbaren Seitenmerkmalen (z. B. Links, Schaltflächen, Formulareingabefelder) sollte logisch nachvollziehbar sein, was bedeutet, dass die Seite auch von nicht-sichtbaren/keyboard-Nutzern verwendbar bleibt.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie semantische UI-Steuerelemente, wo möglich</a
        >
        für allgemeine Ratschläge zum Tabben zu Steuerelementen. Wenn Sie Elemente in einem ungewöhnlichen Layout platzieren müssen, ist es besser, sicherzustellen, dass die Reihenfolge im Quellcode sinnvoll ist, dann verwenden Sie CSS-Funktionen wie
        <a href="/de/docs/Learn_web_development/Core/CSS_layout/Positioning">Positionierung</a>
        um das Layout zu handhaben.
      </td>
    </tr>
    <tr>
      <td>2.4.4 Zweck des Links (im Kontext) (A)</td>
      <td>
        Der Zweck/die Zielsetzung eines Links kann aus dem Linktext oder aus seinem Kontext (z. B. dem umgebenden Text) bestimmt werden. Ausnahmen gibt es, wo der Linkzweck für <em>alle</em> Benutzer mehrdeutig ist (siehe
        <a href="https://www.w3.org/TR/WCAG20/#ambiguouslinkdef"
          >mehrdeutig für Benutzer im Allgemeinen</a
        >
        für eine nützliche Erklärung dazu).
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels"
          >Verwenden Sie sinnvolle Textetiketten</a
        >. Beachten Sie auch, dass Sie Fälle minimieren sollten, in denen mehrere Kopien desselben Textes zu unterschiedlichen Orten verlinken. Dies kann Probleme für Benutzer von Bildschirmlesern verursachen, die häufig eine Liste der Links aus dem Kontext heraus aufrufen — mehrere Links, die alle "hier klicken", "hier klicken", "hier klicken" lauten, wären verwirrend.
      </td>
    </tr>
    <tr>
      <td>2.4.5 Mehrere Navigationsmechanismen (AA)</td>
      <td>
        <p>
          Sie sollten mindestens zwei allgemeine Navigationsmechanismen bereitstellen, um Seiten auf Ihrer Webseite zu finden, z. B. Navigationsmenü, Breadcrumb-Navigation, Website-Suche, Sitemap, Liste verwandter Links, usw.
        </p>
        <p>
          Die einzige Ausnahme hiervon ist, wenn eine Seite ein Schritt in einem Prozess ist, sodass sie nur logisch Links zu den vorherigen und nächsten Schritten haben sollte.
        </p>
      </td>
      <td>
        Die meisten dieser Mechanismen können mit vollständig unterstützten HTML-Funktionen erstellt werden, zum Beispiel
        <a
          href="/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#search_field"
          >Suchfeld</a
        >,
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#active_learning_creating_a_navigation_menu"
          >Erstellen eines Navigationsmenüs</a
        >,
        <a
          href="/de/docs/Learn_web_development/Core/Text_styling/Styling_links#styling_links_as_buttons"
          >Stilisieren von Links als Schaltflächen</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.6 Überschriften und Etiketten (AA)</td>
      <td>
        Überschriften (z.B. {{htmlelement("Heading_Elements", "&lt;h2&gt;")}}) und {{htmlelement("label")}}-Elemente sollten den Zweck der Inhalte und Formularelemente, die sie beschreiben sollen, klar darstellen.
      </td>
      <td>
        <p>
          Siehe
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
            >Verwenden Sie semantische UI-Steuerelemente, wo möglich</a
          >,
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels"
            >Verwenden Sie sinnvolle Textetiketten</a
          >,
          <a
            href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
            >Die Grundlagen von Überschriften und Absätzen</a
          >,
          <a
            href="/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#the_label_element"
            >Das &#x3C;label>-Element</a
          >.
        </p>
        <p>
          Beachten Sie, dass Sie die Wiederholung von Überschriften oder Etiketten (z. B. mehrere Instanzen von "Weitere Informationen") vermeiden sollten, es sei denn, die Struktur ermöglicht es Ihnen, zwischen ihnen leicht zu unterscheiden.
        </p>
      </td>
    </tr>
    <tr>
      <td>2.4.7 Sichtbarer Fokus für fokussierbare Elemente (AA)</td>
      <td>
        Beim Durchtabben von fokussierbaren Elementen wie Links oder Formularfeldern sollte es einen visuellen Indikator geben, der zeigt, welches Element gerade den Fokus hat. Dies ist normalerweise ein gepunkteter oder blauer Umriss (je nach Browser, Plattform, usw.), aber dieser kann durch CSS überschrieben werden.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie semantische UI-Steuerelemente, wo möglich</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.8 Standort innerhalb der Webseite (AAA)</td>
      <td>
        Wenn Sie sich auf einer Seite innerhalb einer komplexen Website oder einem Satz von Schritten befinden, sollte dem Benutzer ein Indikator darüber gegeben werden, wo er sich auf der Website befindet, z.B. eine Breadcrumb-Navigation, Sitemap oder Text wie "Formularseite 2 von 10".
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.4.9 Link-Zweck (nur Link) (AAA)</td>
      <td>
        Dieses Kriterium baut auf 2.4.4 auf, indem es besagt, dass zur Konformität der Stufe AAA der Zweck/die Zielsetzung eines Links allein aus dem Linktext bestimmt werden können sollte, auch wenn er aus dem Kontext herausgenommen wird.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels"
          >Verwenden Sie sinnvolle Textetiketten</a
        >. Beachten Sie auch, dass Sie Fälle minimieren sollten, in denen mehrere Kopien desselben Textes zu unterschiedlichen Orten verlinken. Dies kann Probleme für Benutzer von Bildschirmlesern verursachen, die häufig eine Liste der Links aus dem Kontext heraus aufrufen — mehrere Links, die alle "hier klicken", "hier klicken", "hier klicken" lauten, wären verwirrend.
      </td>
    </tr>
    <tr>
      <td>2.4.10 Abschnittsüberschriften (AAA)</td>
      <td>
        <p>
          Neben der Erstellung einer nützlichen Dokumentstruktur sollten Überschriften auch den Inhalt korrekt beschreiben und in logische Abschnitte unterteilen.
        </p>
        <p>
          Beachten Sie, dass sich dieses Kriterium auf die allgemeinen Überschriften und Titel im Webinhalt bezieht (z. B. Überschriften innerhalb des Textinhalts). Überschriften und Titel für Benutzeroberflächen sind ein besonderer Fall, der in Kriterium 4.1.2 behandelt wird.
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
    <p> Wenn eine Benutzeroberflächenkomponente den Tastaturfokus erhält, wird die Komponente nicht vollständig durch vom Autor erstellte Inhalte verdeckt.</p>
    <p> <strong>Hinweis:</strong> Wenn der Inhalt der Benutzeroberfläche vom Benutzer neu positioniert werden kann, wird nur die ursprüngliche Position des vom Benutzer verschiebbaren Inhalts berücksichtigt, um diesen Standard zu testen. Auch Inhalte, die der Benutzer öffnet, können die Komponente, die den Fokus erhält, verdecken. Wenn der Benutzer die fokussierte Komponente aufdecken kann, ohne den Tastaturfokus zu ändern, gilt die Komponente mit Fokus nicht als verdeckt für Konformitäts- und Testzwecke.</p>
    </td>
    <td>
    <p> Lesen Sie die <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum">Erläuterung zu Fokus nicht verdeckt (Minimum)</a>, um mehr über diesen Standard zu erfahren.</p>
    </td>
    </tr>
    <tr>
    <td> 2.4.12 Fokus nicht verdeckt (Erweiterte) (AAA) </td>
    <td>
    <p> Folgt den Regeln von 2.4.11, außer dass, wenn eine Benutzeroberflächenkomponente den Fokus erhält, kein Teil der Komponente durch vom Autor erstellte Inhalte verdeckt sein darf. Wenn die Oberfläche konfigurierbar ist, werden nur die ursprünglichen Positionen der verschiebbaren Inhalte des Benutzers für das Testen und die Erfüllung dieses Standards berücksichtigt.</p>
    </td>
    <td>
    <p> Lesen Sie die <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced">Erläuterung zu Fokus nicht verdeckt (Erweiterte) (Stufe AAA)</a>, um mehr über diesen Standard zu erfahren.</p> </td>
    </td>
    </tr>
<tr>
  <td> 2.4.13 Fokusdarstellung (AAA)</td>
  <td>
    <p>Wenn der Tastaturfokus-Indikator sichtbar ist, entspricht die Fläche des Fokus-Indikators allen folgenden Bedingungen:</p>
    <ul>
      <li>Er muss mindestens so groß sein wie die Fläche eines <code>2px</code> dicken Rahmens der nicht fokussierten Komponente oder Unterkomponente, der den Inhalt, die Rahmen und den Hintergrund der Komponente einschließt, jedoch äußerliche Schatten oder Leuchteffekte ausschließt.</li>
      <li>Er muss ein Kontrastverhältnis von mindestens 3:1 zwischen denselben Pixeln im fokussierten und nicht fokussierten Zustand haben.</li>
    </ul>
    <p> Die Ausnahmen hiervon sind:</p>
    <ul>
      <li>Der Fokus-Indikator wird vom Benutzer bestimmt und kann vom Autor nicht angepasst werden.</li>
      <li>Der Fokus-Indikator und die Hintergrundfarbe des Indikators werden vom Autor nicht verändert.</li>
    </ul>
  </td>
  <td>
    <p> Lesen Sie die <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html">Erläuterung zur Fokusdarstellung (Stufe AAA)</a>, um mehr über diesen Standard zu erfahren.</p>
  </td>
</tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.4 Navigierbar: Stellen Sie Möglichkeiten zur Verfügung, um Benutzern zu helfen, sich zu orientieren, Inhalte zu finden und zu bestimmen, wo sie sich befinden.](https://www.w3.org/TR/WCAG21/#navigable)

## Richtlinie 2.5 Eingabemodalitäten: Erleichtern Sie es Benutzern, Funktionen mit verschiedenen Eingaben über die Tastatur hinaus zu bedienen

Die Konformitätskriterien unter dieser Richtlinie stellen sicher, dass Benutzer mit digitalen Technologien über verschiedene Eingabemethoden jenseits von Tastatur oder Maus interagieren können (einschließlich Touchscreen, Sprache, Gerätebewegung oder alternativen Eingabegeräten).

<table>
 <thead>
  <tr>
   <th scope="col">Erfolgskriterien</th>
   <th scope="col">Wie man die Kriterien erfüllt</th>
   <th scope="col">Praktische Ressource</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>2.5.1 Zeigergesten (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Alle Funktionalitäten, die mit einem Zeiger bedient werden können, sollten mit Einzelpunktaktionen bedient werden können. Pfad- oder Mehrpunktgesten sind für keine Funktionalität erforderlich. Ausnahmen existieren.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html">Verständnis von Zeigergesten</a></td>
  </tr>
  <tr>
   <td>2.5.2 Zeigerabbruch (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Für Funktionalitäten, die mit einem Einzelzeiger bedient werden können, gilt mindestens einer der folgenden Punkte: kein Down-Ereignis, Abbruch/Undo, Aufwärtsumkehrung oder wesentlich.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html">Verständnis von Zeigerabbruch</a></td>
  </tr>
  <tr>
   <td>2.5.3 Beschriftung im Namen (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Für jede Benutzeroberflächenkomponente, die ein sichtbares Textetikett enthält, stellen Sie sicher, dass der zugängliche Name mit dem sichtbaren Text im Etikett übereinstimmt (oder diesen einschließt).</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">Verständnis von Beschriftung im Namen</a></td>
  </tr>
  <tr>
   <td>2.5.4 Bewegungsaktivierung (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Stellen Sie sicher, dass für Funktionalitäten, die durch a) Gerätebewegung (wie Schütteln oder Neigen) oder b) Benutzerbewegungen, die durch Gerätesensoren erkannt werden (einschließlich einer Kamera), ausgelöst werden können, beide der folgenden Punkte zutreffen: 1) Die Bewegungsaktivierung kann deaktiviert werden, und 2) die Funktionalität kann bedient werden, ohne die Gerätebewegung oder Benutzerbewegungen zu verwenden. Es gibt Ausnahmen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html">Verständnis von Bewegungsaktivierung</a></td>
  </tr>
  <tr>
   <td>2.5.5 Zielgröße (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Die Größe des Touchziels eines ausführbaren Elements muss mindestens 44 CSS-Pixel in Breite und Höhe betragen. Ausnahmen existieren.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html">Verständnis von Zielgröße</a></td>
  </tr>
  <tr>
   <td>2.5.6 Gleichzeitige Eingabemechanismen (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Stellen Sie sicher, dass Menschen unterschiedliche Eingabemodi verwenden und zwischen ihnen wechseln können, wenn sie mit digitalen Inhalten interagieren, einschließlich Touchscreen, Tastatur, Maus, Sprachbefehlen oder alternativen Eingabegeräten. Eine wesentliche Ausnahme existiert.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html">Verständnis von gleichzeitigen Eingabemechanismen</a></td>
 </tr>
 <tr>
 <td> 2.5.8 Mindestzielgröße (AA)</td>
 <td> Das Ziel für Zeigereingaben sollte mindestens <code>24px</code> breit und <code>24px</code> hoch sein, außer in den folgenden Bereichen:
 <ul>
  <li> <strong>Abstand:</strong> Ziele, die weniger als <code>24px x 24px</code> groß sind, sind so positioniert, dass, wenn ein Kreis mit einem <code>24px</code> Durchmesser auf der Mitte der Begrenzungsrahmen jedes Ziels zentriert ist, sich die Kreise nicht mit einem anderen Ziel oder dem Kreis für ein anderes zu kleines Ziel überschneiden.</li>
  <li> <strong>Äquivalent:</strong> Eine separate Steuerung, die dieselbe Funktion erfüllt und diesem Standard entspricht, ist auf derselben Seite verfügbar.</li>
  <li> <strong>Inline:</strong> Das Ziel befindet sich innerhalb einer Textzeile mit seiner Größe, beschränkt durch die Zeilenhöhe oder umgebenden nicht zielgerichteten Text.</li>
  <li> <strong>Nutzeragent gesteuert:</strong> Die Größe des Ziels wird durch den Nutzeragenten bestimmt und wurde vom Autor nicht verändert.</li>
  <li> <strong>Wesentlich:</strong> Eine bestimmte Darstellung des Ziels ist wesentlich oder rechtlich erforderlich für die übermittelten Informationen.</li>
 </ul>
 <td> Lesen Sie die <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html">Erläuterung zur Mindestzielgröße</a></td>
</tr>
  </tr>
 </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.5: Eingabemodalitäten: Erleichtern Sie es Benutzern, Funktionen mit verschiedenen Eingaben über die Tastatur hinaus zu bedienen.](https://www.w3.org/TR/WCAG21/#input-modalities)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. Bedienbar
  3. [Verständigbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)
