---
title: Operable
slug: Web/Accessibility/Guides/Understanding_WCAG/Operable
l10n:
  sourceCommit: 8941e7636bfc91985ca5a486e7228b681e1aa272
---

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so verfassen, dass sie den Erfolgskriterien entsprechen, die im **Operable**-Prinzip der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 aufgeführt sind. Operable besagt, dass Benutzeroberflächenkomponenten und Navigation bedienbar sein müssen.

> [!NOTE]
> Um die Definitionen von Operable und seinen Richtlinien und Erfolgskriterien im W3C zu lesen, siehe [Prinzip 2: Operierbar – Benutzeroberflächenkomponenten und Navigation müssen bedienbar sein.](https://www.w3.org/TR/WCAG21/#operable)

## Richtlinie 2.1 — Tastaturzugänglichkeit: Stellen Sie alle Funktionen über eine Tastatur zur Verfügung

Diese Richtlinie behandelt die Notwendigkeit, dass die Kernfunktionen einer Webseite neben anderen Mitteln (z. B. Maus) auch über eine Tastatur zugänglich sind, sodass Benutzer, die auf Tastatursteuerungen angewiesen sind, sie nutzen können.

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
        Alle Funktionen sollten mit Tastatursteuerungen zugänglich sein, es sei
        denn, es ist mit der Tastatur nicht möglich (z. B. Freihandzeichnen).
        Eingebaute Steuerungen sollten nach Möglichkeit verwendet werden (z. B.
        das Durchtabben durch Formularsteuerungen), und benutzerdefinierte
        Funktionen sollten nur eingebaut werden, wenn erforderlich.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI-Steuerelemente</a
        >
        und
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Einbauen der Tastaturzugänglichkeit</a
        >
      </td>
    </tr>
    <tr>
      <td>2.1.2 Keine Tastaturfalle (A)</td>
      <td>
        <p>
          Wenn Sie mit der Tastatur einen Funktionsbereich betreten, sollten Sie
          diesen Bereich auch wieder <em>nur</em> mit der Tastatur verlassen
          können. Zum Beispiel, wenn Sie eine Optionsfenster mit
          <kbd>Enter</kbd>/<kbd>Return</kbd> auf einer fokussierten
          Schaltfläche öffnen, sollten Sie dieses Fenster wieder schließen und
          zur Hauptinhaltsseite zurückkehren können.
        </p>
        <p>
          Dies ist sehr wichtig, damit Tastaturbenutzer nicht auf bestimmten
          Abschnitten Ihrer Anwendungen gefangen sind.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.1.3 Tastatur — alle Funktionen (AAA)</td>
      <td>
        Dies ist ein weiterer Schritt über das Kriterium 2.1.1 hinaus. Um
        Konformität auf AAA-Niveau zu erreichen, sollten alle Funktionen mit
        Tastatursteuerungen zugänglich sein — ohne Ausnahmen.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI-Steuerelemente</a
        >
        und
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Einbauen der Tastaturzugänglichkeit</a
        >
      </td>
    </tr>
    <tr>
      <td>
        2.1.4 Zeichen-Tastenkombinationen (A)
        <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >hinzugefügt in 2.1</a
          ></em
        >
      </td>
      <td>
        Wenn eine Tastenkombination mit einem Zeichen vorhanden ist, trifft
        mindestens eines der folgenden zu: einfache Zeichen-Tastenkombinationen
        können deaktiviert, neu zugeordnet oder sind nur aktiv, wenn die
        relevante Benutzeroberflächenkomponente im Fokus ist.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html"
          >Verständnis von Zeichen-Tastenkombinationen</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.1 Tastaturzugänglichkeit: Stellen Sie alle Funktionen über eine Tastatur zur Verfügung](https://www.w3.org/TR/WCAG21/#keyboard-accessible).

## Richtlinie 2.2 — Genügend Zeit: Stellen Sie den Benutzern genügend Zeit zur Verfügung, um Inhalte zu lesen und zu nutzen

Diese Richtlinie behandelt Situationen, in denen Funktionalitäten zeitlich begrenzt sind. Beispielsweise müssen Käufe manchmal aus Sicherheitsgründen innerhalb einer bestimmten Zeit abgeschlossen werden.

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
      <td>2.2.1 Zeiteinstellung anpassbar (A)</td>
      <td>
        <p>
          Für Funktionen mit zeitlicher Begrenzung (z. B. das Abschließen einer
          Hotel- oder Flugbuchung hat oft eine zeitliche Begrenzung) sollten dem
          Benutzer Steuerungen zur Verfügung stehen, mit denen sie die
          Zeiteinstellung anpassen, verlängern oder deaktivieren können.
        </p>
        <p>
          Ausnahmen hiervon sind Aktivitäten mit Zeitbegrenzungen, die länger
          als 20 Stunden dauern, Echtzeit-Ereignisse (z. B. Live-Multiplayer-Spiele)
          und jede andere Aktivität, die eine Zeitbegrenzung erfordert und
          ungültig würde, wenn sie deaktiviert würde.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.2 Anhalten, stoppen, verstecken (A)</td>
      <td>
        <p>
          Für sich bewegende/blinkende Inhalte, die automatisch starten,
          länger als 5 Sekunden dauern und neben anderen Inhalten angezeigt
          werden, sollten Steuerungen bereitgestellt werden, um sie anzuhalten,
          zu stoppen oder zu verstecken. Dies gilt nicht für sich bewegende/blinkende
          Inhalte, die essenziell für die Erfahrung sind. Beispiele umfassen
          scrollenden Text und Videos.
        </p>
        <p>
          Für automatische Aktualisierungsinformationen, die automatisch starten
          und neben anderen Inhalten angezeigt werden, sollten Steuerungen
          bereitgestellt werden, um sie anzuhalten, zu stoppen oder zu verstecken,
          oder um die Häufigkeit der Aktualisierungen zu steuern. Dies gilt
          nicht für sich automatisch aktualisierende Inhalte, die essenziell für
          die Erfahrung sind. Beispiele umfassen Karussells oder drehende
          Ankündigungen.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.3 Keine Zeitbegrenzungen (AAA)</td>
      <td>
        Dies baut auf Kriterium 2.2.1 auf und besagt, dass Inhalte, die eine
        AAA-Konformität erreichen möchten, keine zeitlichen Begrenzungen haben
        sollten.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.4 Unterdrücken von Unterbrechungen (AAA)</td>
      <td>
        Alle Unterbrechungen wie Warnungen oder interstitielle Anzeigen sollten
        die Möglichkeit bieten, sie zu unterdrücken oder zu verschieben, es sei
        denn, es handelt sich um eine Notfallwarnung.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.5 Erneute Authentifizierung (AAA)</td>
      <td>
        Wenn eine Authentifizierungssitzung während der Nutzung einer Web-App
        abläuft, kann der Benutzer sich erneut authentifizieren und die Nutzung
        fortsetzen, ohne Daten zu verlieren.
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
          Wenn es eine Zeitüberschreitung (verursacht durch Benutzerinaktivität)
          gibt, warnen Sie die Benutzer zu Beginn eines Prozesses, damit sie
          nicht überrascht werden, dass eine Zeitüberschreitung existiert (oder
          erlauben Sie nur eine Zeitüberschreitung nach 20 Stunden Inaktivität).
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
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.2 Genügend Zeit: Stellen Sie den Benutzern genügend Zeit zur Verfügung, um Inhalte zu lesen und zu nutzen](https://www.w3.org/TR/WCAG21/#enough-time).

## Richtlinie 2.3 — Anfälle und körperliche Reaktionen: Gestalten Sie Inhalte nicht so, dass sie Anfälle oder körperliche Reaktionen auslösen können

Dies bezieht sich auf Inhalte, die, wenn sie nicht geändert werden, bei Nutzern mit Erkrankungen wie Epilepsie Anfälle auslösen könnten ODER bei Nutzern mit Erkrankungen wie vestibulären Störungen körperliche Reaktionen (wie Schwindel) hervorrufen könnten.

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
      <td>Der Inhalt enthält keinen Aspekt, der mehr als dreimal pro Sekunde blinkt, oder das Blinken liegt unter den akzeptablen <a href="https://www.w3.org/TR/WCAG20/#general-thresholddef">Blitz- und Rotschwellwerten</a>.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.2 Drei Blitze (AAA)</td>
      <td>Der Inhalt enthält keinen Aspekt, der mehr als dreimal pro Sekunde blinkt.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.3 Animationen durch Interaktionen (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
      <td>Erlauben Sie den Benutzern, Animationen von Interaktionen zu deaktivieren (es sei denn, die Animation ist essenziell).</td>
      <td><a href="https://www.w3.org/TR/WCAG21/#animation-from-interactions">Verständnis von Animationen durch Interaktionen</a></td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.3 Anfälle und körperliche Reaktionen: Gestalten Sie Inhalte nicht so, dass sie Anfälle oder körperliche Reaktionen auslösen können.](https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions)

## Richtlinie 2.4 — Navigierbar: Stellen Sie Möglichkeiten bereit, die Benutzern helfen, zu navigieren, Inhalte zu finden und ihren Standort zu bestimmen

Die Konformitätskriterien unter dieser Richtlinie betreffen Möglichkeiten, wie Benutzer sich orientieren und die Inhalte und Funktionen finden können, die sie auf der aktuellen Seite oder anderen Seiten der Website suchen.

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
      <td>2.4.1 Blöcke umgehen (A)</td>
      <td>
        <p>
          Es sollte ein Mechanismus zur Verfügung gestellt werden, der es dem Benutzer erlaubt, direkt zum Hauptinhalt oder zu den auf der Seite verfügbaren Funktionen zu springen und dabei die wiederholten Funktionen (wie das Firmenlogo oder die Navigation) zu überspringen. Dies wird oft durch "Skip-Links" erreicht - Links, die am Anfang des Seitenquelltexts platziert sind und zum Hauptinhalt führen und durch CSS verborgen werden.
        </p>
        <p>
          Wenn eine ordnungsgemäße Struktur von Überschriften und semantischen Containern zum Navigieren bereitgestellt wird (zum Beispiel {{htmlelement("section")}},
          {{htmlelement("aside")}}, usw.), ist ein zusätzlicher "Skip-Link" nicht erforderlich.
        </p>
      </td>
      <td><em>Es muss ein Abschnitt über "Skip-Links" hinzugefügt werden.</em></td>
    </tr>
    <tr>
      <td>2.4.2 Seitentitel einfügen (A)</td>
      <td>
        Jede Webseite sollte einen informativen {{htmlelement("title")}} enthalten,
        dessen Inhalt den Inhalt/Zweck der Seite beschreibt.
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
        Die "Tab-Reihenfolge" der fokussierbaren Seitenfunktionen (z. B. Links, Schaltflächen, Formularfelder) ergibt einen logischen Sinn, damit die Seite weiterhin von nicht sehenden/Tastaturbenutzern verwendet werden kann.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI-Steuerelemente</a
        >
        für allgemeine Ratschläge zum Tabben zu Steuerungselementen. Wenn Sie Elemente in einem ungewöhnlichen Layout platzieren müssen, ist es besser sicherzustellen, dass die Quellreihenfolge sinnvoll ist, und dann CSS-Features wie
        <a href="/de/docs/Learn_web_development/Core/CSS_layout/Positioning">Positionierung</a>
        zu verwenden, um das Layout zu verwalten.
      </td>
    </tr>
    <tr>
      <td>2.4.4 Zweck des Links (im Kontext) (A)</td>
      <td>
        Der Zweck/Ziel eines Links kann aus dem Linktext oder aus seinem Umfeld (z. B. den umgebenden Text) bestimmt werden. Ausnahmen sind Fälle, in denen der Linkzweck für <em>alle</em> Benutzer mehrdeutig ist (siehe
        <a href="https://www.w3.org/TR/WCAG20/#ambiguouslinkdef"
          >mehrdeutig für Benutzer im Allgemeinen</a
        >
        für eine nützliche Erklärung hierzu).
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
          >Aussagekräftige Textbeschriftungen</a
        >. Beachten Sie auch, dass Sie Fälle minimieren sollten, in denen mehrere Kopien desselben Textes an verschiedene Orte verlinkt sind. Dies kann Probleme für Bildschirmleser-Benutzer verursachen, die oft eine Liste der Links aus dem Kontext aufrufen — mehrere Links mit der Bezeichnung "hier klicken", "hier klicken", "hier klicken" wären verwirrend.
      </td>
    </tr>
    <tr>
      <td>2.4.5 Mehrere Navigationsmechanismen (AA)</td>
      <td>
        <p>
          Sie sollten mindestens zwei allgemeine Navigationsmechanismen bereitstellen, um Seiten auf Ihrer Website zu finden, z. B. Navigationsmenü, Brotkrumennavigation, Site-Suche, Sitemap, Liste verwandter Links usw.
        </p>
        <p>
          Die einzige Ausnahme hiervon ist, wenn eine Seite ein Schritt in einem Prozess ist und daher nur logisch Links zu den vorherigen und nächsten Schritten haben sollte.
        </p>
      </td>
      <td>
        Die meisten dieser Mechanismen können mit vollständig unterstützten HTML-Funktionen erstellt werden, z. B. siehe
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
      <td>2.4.6 Überschriften und Beschriftungen (AA)</td>
      <td>
        Überschriftselemente (z. B. {{htmlelement("Heading_Elements", "&lt;h2&gt;")}}) und
        {{htmlelement("label")}}-Elemente beschreiben klar den Zweck
        der Inhalte und Formularelemente, die sie beschreiben sollen.
      </td>
      <td>
        <p>
          Siehe
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
            >UI-Steuerelemente</a
          >,
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
            >Aussagekräftige Textbeschriftungen</a
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
          Beachten Sie, dass Sie die Wiederholung von Überschriften oder Beschriftungen vermeiden sollten (z. B. mehrere Instanzen von "Weitere Informationen"), es sei denn, die Struktur erlaubt es Ihnen, zwischen ihnen leicht zu unterscheiden.
        </p>
      </td>
    </tr>
    <tr>
      <td>2.4.7 Sichtbarer Fokus für fokussierbare Elemente (AA)</td>
      <td>
        Wenn Sie durch fokussierbare Elemente wie Links oder Formulareingaben tabben, sollte ein visueller Indikator anzeigen, welches Element derzeit den Fokus hat. Dies ist normalerweise standardmäßig ein gepunkteter oder blauer Umriss (je nach Browser, Plattform, usw.), kann aber durch CSS überschrieben werden.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI-Steuerelemente</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.8 Standort innerhalb der Seite (AAA)</td>
      <td>
        Wenn Sie sich auf einer Seite innerhalb eines komplexen Systems oder einer Reihe von Schritten befinden, sollten Sie einen Hinweis erhalten, wo Sie sich auf der Seite befinden, z. B. eine Brotkrumennavigation, eine Sitemap oder ein Text wie "Formularseite 2 von 10".
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.4.9 Zweck von Links (nur Link) (AAA)</td>
      <td>
        Dieses Kriterium baut auf 2.4.4 auf und besagt, dass zu Konformität mit AAA der Zweck/Ziel eines Links allein aus dem Linktext erkennbar sein sollte, auch wenn er aus dem Kontext gerissen ist.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
          >Aussagekräftige Textbeschriftungen</a
        >. Beachten Sie auch, dass Sie Fälle minimieren sollten, in denen mehrere Kopien desselben Textes an verschiedene Orte verlinkt sind. Dies kann Probleme für Bildschirmleser-Benutzer verursachen, die oft eine Liste der Links aus dem Kontext aufrufen — mehrere Links mit der Bezeichnung "hier klicken", "hier klicken", "hier klicken" wären verwirrend.
      </td>
    </tr>
    <tr>
      <td>2.4.10 Abschnittsüberschriften (AAA)</td>
      <td>
        <p>
          Zwar schafft es eine nützliche Dokumentstruktur, aber Überschriften sollten
          auch die Inhalte genau beschreiben und in logische Abschnitte unterteilen.
        </p>
        <p>
          Beachten Sie, dass dieses Kriterium sich auf Überschriften und Titel in allgemeinem Webinhalt bezieht (z. B. Überschriften innerhalb von Textinhalten). Überschriften und Titel für Benutzeroberflächen sind ein Sonderfall, der im Kriterium 4.1.2 behandelt wird.
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
    <p> <strong>Hinweis:</strong> Wenn der Inhalt der Benutzeroberfläche vom Benutzer neu positioniert werden kann, wird nur die anfängliche Position des benutzerbeweglichen Inhalts für Tests zur Einhaltung dieses Standards berücksichtigt. Auch Inhalte, die vom Benutzer geöffnet werden, können die Komponente verdecken, die den Fokus erhält. Außerdem, wenn der Benutzer die fokussierte Komponente enthüllen kann, ohne den Tastaturfokus zu ändern, wird die Komponente mit Fokus nicht als verdeckt für Konformitäts- und Testzwecke angesehen.</p>
    </td>
    <td>
    <p> Sehen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum">Verständnis von Fokus nicht verdeckt (Minimum)</a> an, um mehr über diesen Standard zu erfahren.</p>
    </td>
    </tr>
    <tr>
    <td> 2.4.12 Fokus nicht verdeckt (Erweitert) (AAA) </td>
    <td>
    <p> Folgt denselben Regeln wie 2.4.11, außer dass, wenn eine Benutzeroberflächenkomponente den Fokus erhält, kein Teil der Komponente durch vom Autor erstellte Inhalte verdeckt werden darf. Wenn die Oberfläche konfigurierbar ist, werden nur die anfänglichen Positionen benutzerbeweglicher Inhalte für Tests und die Einhaltung dieses Standards in Betracht gezogen.</p>
    </td>
    <td>
    <p> Sehen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced">Verständnis von Fokus nicht verdeckt (Erweitert) (Level AAA)</a> an, um mehr über diesen Standard zu erfahren.</p> </td>
    </td>
    </tr>
<tr>
  <td> 2.4.13 Fokus erscheinung (AAA)</td>
  <td>
    <p>Wenn der Tastaturfokus-Indikator sichtbar ist, erfüllt der Bereich des Fokus-Indikators alle folgenden Anforderungen:</p>
    <ul>
      <li>Muss mindestens so groß sein wie der Bereich eines <code>2px</code> dicken Umfangs der nicht fokussierten Komponente oder Unterkomponente, der den Inhalt, den Rand und den Hintergrund der Komponente enthält, jedoch ohne äußere Schatten oder Glimmeffekte.</li>
      <li>Muss ein Kontrastverhältnis von mindestens 3:1 zwischen denselben Pixeln im fokussierten und nicht fokussierten Zustand haben</li>
    </ul>
    <p> Die Ausnahmen hierzu sind:</p>
    <ul>
      <li>Der Fokus-Indikator wird vom Benutzer bestimmt und kann vom Autor nicht angepasst werden.</li>
      <li>Der Fokus-Indikator und die Hintergrundfarbe des Indikators werden vom Autor nicht geändert.</li>
    </ul>
  </td>
  <td>
    <p> Sehen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html">Verständnis von Fokus erscheinung (Level AAA)</a> an, um mehr über diesen Standard zu erfahren.</p>
  </td>
</tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.4 Navigierbar: Stellen Sie Möglichkeiten bereit, die Benutzern helfen, zu navigieren, Inhalte zu finden und ihren Standort zu bestimmen.](https://www.w3.org/TR/WCAG21/#navigable)

## Richtlinie 2.5 Eingabemodalitäten: Ermöglichen Sie Benutzer die Bedienung der Funktionalität über verschiedene Eingaben über die Tastatur hinaus

Die Konformitätskriterien unter dieser Richtlinie stellen sicher, dass Benutzer in der Lage sind, mit digitaler Technologie über verschiedene Eingabemethoden jenseits von Tastatur oder Maus zu interagieren (einschließlich Touchscreen, Sprache, Gerätemotion oder alternative Eingabegeräte).

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
   <td>2.5.1 Gesten mit Zeiger (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Alle Funktionen, die mit einem Zeiger bedient werden können, können mit Einpunkt-Aktionen bedient werden. Pfadbasierte oder mehrpunktige Gesten sind zur Bedienung keiner Funktion erforderlich. Ausnahmen existieren.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html">Verständnis von Zeigergesten</a></td>
  </tr>
  <tr>
   <td>2.5.2 Zeiger-Abbruch (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Für Funktionen, die mit einem Einzelzeiger bedient werden können, trifft mindestens eines der folgenden zu: kein Drücken-Ereignis, Abbrechen/Rückgängigmachen, Hoch-Aufhebung oder essenziell.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html">Verständnis von Zeiger-Abbruch</a></td>
  </tr>
  <tr>
   <td>2.5.3 Beschriftung im Namen (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Für jede Benutzeroberflächenkomponente, die eine sichtbare Textbeschriftung enthält, stellen Sie sicher, dass der zugängliche Name mit (oder enthält) den sichtbaren Text in der Beschriftung übereinstimmt.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">Verständnis von Beschriftung im Namen</a></td>
  </tr>
  <tr>
   <td>2.5.4 Bewegungsaktivierung (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Stellen Sie sicher, dass für Funktionen, die durch a) Gerätemotion (wie Schütteln, Neigen) oder b) Benutzergesten, die von Gerätedetektoren erkannt werden (einschließlich einer Kamera), ausgelöst werden können, beide der folgenden wahr sind: 1) Bewegungsaktivierung kann deaktiviert werden, und 2) die Funktionalität kann ohne Verwendung von Gerätemotion oder Benutzergesten bedient werden. Ausnahmen existieren.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html">Verständnis von Bewegungsaktivierung</a></td>
  </tr>
  <tr>
   <td>2.5.5 Zielgröße (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Die Größe der Touch-Zielfläche eines bedienbaren Elements muss mindestens 44 CSS-Pixel in Breite und Höhe betragen. Ausnahmen existieren.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html">Verständnis von Zielgröße</a></td>
  </tr>
  <tr>
   <td>2.5.6 Gleichzeitige Eingabemechanismen (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">hinzugefügt in 2.1</a></em></td>
   <td>Stellen Sie sicher, dass Menschen verschiedene Eingabemodi nutzen und zwischen ihnen wechseln können, wenn sie mit digitalen Inhalten interagieren, einschließlich Touchscreen, Tastatur, Maus, Sprachbefehle oder alternative Eingabegeräte. Eine essenzielle Ausnahme existiert. </td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html">Verständnis von gleichzeitigen Eingabemechanismen</a></td>
 </tr>
 <tr>
 <td> 2.5.8 Zielgröße Minimum (AA)</td>
 <td> Die Zielgröße für Zeigereingaben sollte mindestens <code>24px</code> breit und <code>24px</code> hoch sein, außer in den folgenden Bereichen:
 <ul>
  <li> <strong>Abstand:</strong>Ziele, die weniger als <code>24px x 24px</code> sind, sind so positioniert, dass, wenn ein <code>24px</code> Durchmesser Kreis auf die Mitte des Begrenzungsrahmens jedes Ziels zentriert wird, sich die Kreise nicht mit einem anderen Ziel oder dem Kreis eines anderen Mindermaß-Ziels überschneiden.</li>
  <li> <strong>Äquivalent:</strong> Eine separate Steuerung, die dieselbe Funktion erfüllt und diesem Standard entspricht, ist auf derselben Seite verfügbar.</li>
  <li> <strong>Inline:</strong> Das Ziel befindet sich innerhalb einer Textzeile mit seiner Größe, die durch die Zeilenhöhe oder den umgebenden Nicht-Ziel-Text begrenzt ist.</li>
  <li> <strong>Benutzerkontrolliert:</strong> Die Zielgröße wird vom Benutzeragenten bestimmt und wurde nicht vom Autor geändert.</li>
  <li> <strong>Essenziell:</strong> Eine bestimmte Darstellung des Ziels ist für die übermittelten Informationen essenziell oder gesetzlich erforderlich.</li>
 </ul>
 <td> Sehen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html">Verständnis von Zielgröße Minimum</a> an </td>
</tr>
  </tr>
 </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 2.5: Eingabemodalitäten: Ermöglichen Sie Benutzer die Bedienung der Funktionalität über verschiedene Eingaben über die Tastatur hinaus.](https://www.w3.org/TR/WCAG21/#input-modalities)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. Bedienbar
  3. [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)
