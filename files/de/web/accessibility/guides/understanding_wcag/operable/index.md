---
title: Operabel
slug: Web/Accessibility/Guides/Understanding_WCAG/Operable
l10n:
  sourceCommit: 051d02b402b7f76c2078b12283aa18318c34c38b
---

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so gestalten, dass sie den Erfolgskriterien des Prinzips **Operabel** der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 entsprechen. Operabel bedeutet, dass Benutzeroberflächenkomponenten und Navigationen bedienbar sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für das Prinzip Operabel sowie dessen Richtlinien und Erfolgskriterien zu lesen, sehen Sie sich [Prinzip 2: Operabel — Benutzeroberflächenkomponenten und Navigationen müssen bedienbar sein.](https://w3c.github.io/wcag/guidelines/22/#operable) an.

## Richtlinie 2.1 — Tastaturzugänglichkeit: Machen Sie alle Funktionen über eine Tastatur zugänglich

Diese Richtlinie umfasst die Notwendigkeit, Hauptfunktionen einer Website zusätzlich zu anderen Mitteln (z.B. Maus) über eine Tastatur verfügbar zu machen, sodass Benutzer, die auf Tastatursteuerungen angewiesen sind, darauf zugreifen können.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie Sie die Kriterien einhalten</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.1.1 Tastatur (A)</td>
      <td>
        Alle Funktionen sollten mit Tastatursteuerungen zugänglich sein, es sei denn,
        sie können nicht mit der Tastatur bedient werden (z.B. freihändiges Zeichnen). Eingebaute
        Steuerungen sollten nach Möglichkeit verwendet werden (z.B. Tabulatoren durch Formularsteuerungen), und Sie sollten nur dann eine benutzerdefinierte Funktionalität einbauen, wenn sie notwendig ist.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie nach Möglichkeit semantische UI-Steuerelemente</a
        >
        und
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Einbau der Tastaturzugänglichkeit</a
        >
      </td>
    </tr>
    <tr>
      <td>2.1.2 Keine Tastaturfalle (A)</td>
      <td>
        <p>
          Wenn Sie einen Bereich der Funktionalität mit der Tastatur betreten,
          sollten Sie diesen Bereich auch wieder <em>nur</em> mit der Tastatur verlassen können. Zum Beispiel, wenn Sie die Taste <kbd>Enter</kbd>/<kbd>Return</kbd>
          auf einer fokussierten Schaltfläche drücken, um ein Optionsfenster zu öffnen, sollten Sie dieses Fenster wieder schließen und zur Hauptanzeige zurückkehren können, indem Sie nur die Tastatur verwenden.
        </p>
        <p>
          Dies ist sehr wichtig, damit Tastaturbenutzer nicht in bestimmten Bereichen Ihrer Apps gefangen sind.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.1.3 Tastatur — alle Funktionen (AAA)</td>
      <td>
        Dies ist ein weiterer Schritt über das Kriterium 2.1.1 hinaus. Um die Konformität nach AAA zu erreichen, sollten alle Funktionen mit Tastatursteuerungen zugänglich sein — ohne Ausnahmen.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie nach Möglichkeit semantische UI-Steuerelemente</a
        >
        und
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Einbau der Tastaturzugänglichkeit</a
        >
      </td>
    </tr>
    <tr>
      <td>
        2.1.4 Zeichenkurztasten (A)
      </td>
      <td>
        Wenn eine einzelne Zeichenkurztaste existiert, dann ist mindestens eines der
        folgenden wahr: Einzelne Zeichenkurztasten können deaktiviert, neu zugewiesen oder nur aktiv sein, wenn die entsprechende Benutzeroberflächenkomponente im Fokus ist.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html"
          >Verstehen von Zeichenkurztasten</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung zu [Richtlinie 2.1 Tastaturzugänglichkeit: Machen Sie alle Funktionen über eine Tastatur zugänglich](https://w3c.github.io/wcag/guidelines/22/#keyboard-accessible).

## Richtlinie 2.2 — Ausreichend Zeit: Geben Sie den Benutzern ausreichend Zeit, um Inhalte zu lesen und zu verwenden

Diese Richtlinie behandelt Situationen, in denen Funktionen möglicherweise eine zeitliche Begrenzung haben. Zum Beispiel müssen Käufe manchmal aus Sicherheitsgründen innerhalb eines bestimmten Zeitrahmens abgeschlossen werden.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie Sie die Kriterien einhalten</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.2.1 Zeitablauf anpassbar (A)</td>
      <td>
        <p>
          Bei Funktionen mit Zeitbeschränkungen (z.B. eine Hotel- oder Flugbuchung, die oft zeitlich begrenzt ist) sollte der Benutzer die Kontrolle haben, um den Zeitablauf anzupassen, zu verlängern oder auszuschalten.
        </p>
        <p>
          Ausnahmen bestehen bei Aktivitäten mit Zeitbeschränkungen länger als 20 Stunden, bei Echtzeitereignissen (z.B. Live-Mehrspieler-Spiele) und bei allen anderen Aktivitäten, die einen Zeitablauf benötigen und ungültig werden würden, wenn dieser abgeschaltet wird.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.2 Pause, Stopp, Verstecken (A)</td>
      <td>
        <p>
          Für automatisch startenden und länger als 5 Sekunden andauernden, bewegten oder blinkenden Inhalt, der neben anderem Inhalt angezeigt wird, sollten Steuerungen bereitgestellt werden, um ihn zu pausieren, zu stoppen oder zu verstecken. Dies gilt nicht für sich bewegenden/blinkenden Inhalt, der für das Erlebnis wesentlich ist. Beispiele sind scrollender Text und Videos.
        </p>
        <p>
          Für automatisch aktualisierende Informationen, die automatisch starten und neben anderem Inhalt angezeigt werden, sollten Steuerungen bereitgestellt werden, um sie zu pausieren, zu stoppen oder zu verstecken oder die Aktualisierungshäufigkeit zu steuern. Dies gilt nicht für automatisch aktualisierenden Inhalt, der für das Erlebnis wesentlich ist. Beispiele sind Karussells oder rotierende Ankündigungen.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.3 Keine Zeitlimits (AAA)</td>
      <td>
        Dieses Kriterium baut auf Kriterium 2.2.1 auf und besagt, dass Inhalte, die eine Konformität nach AAA erreichen möchten, keine Zeitlimits haben sollten.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.4 Unterdrücken von Unterbrechungen (AAA)</td>
      <td>
        Unterbrechungen wie Alarme oder Zwischenschaltungen sollten eine Funktion bieten, um sie zu unterdrücken oder zu verschieben, es sei denn, es handelt sich um einen Notfallalarm.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.5 Erneutes Authentifizieren (AAA)</td>
      <td>
        Wenn eine Authentifizierungssitzung während der Nutzung einer Web-App abläuft, kann der Benutzer sich erneut authentifizieren und ohne Datenverlust weitermachen.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        2.2.6 Zeitüberschreitungen (AAA)
      </td>
      <td>
        <p>
          Wenn es eine Zeitüberschreitung (verursacht durch Benutzer-Inaktivität) gibt, warnen Sie die Benutzer zu Beginn eines Prozesses, damit sie nicht überrascht werden, dass eine Zeitüberschreitung existiert (oder erlauben Sie die Zeitüberschreitung nur nach 20 Stunden Inaktivität).
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
> Siehe auch die WCAG-Beschreibung zu [Richtlinie 2.2 Ausreichend Zeit: Geben Sie den Benutzern ausreichend Zeit, um Inhalte zu lesen und zu verwenden](https://w3c.github.io/wcag/guidelines/22/#enough-time).

## Richtlinie 2.3 — Anfälle und physische Reaktionen: Entwerfen Sie Inhalte nicht auf eine Weise, die bekanntermaßen Anfälle oder physische Reaktionen auslöst

Dies bezieht sich auf Inhalte, die, wenn sie nicht geändert werden, Anfälle bei Benutzern mit Erkrankungen wie Epilepsie oder physische Reaktionen (wie Schwindel) bei Benutzern mit Vestibulärstörungen auslösen könnten.

<table>
  <thead>
    <tr>
    <th scope="col">Erfolgskriterien</th>
    <th scope="col">Wie Sie die Kriterien einhalten</th>
    <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.3.1 Drei Blitze, oder unterhalb der Schwelle (A)</td>
      <td>Inhalt enthält keinen Aspekt, der mehr als dreimal pro Sekunde blitzt, oder blitzende Inhalte liegen unterhalb der akzeptablen <a href="https://w3c.github.io/wcag/guidelines/22/#dfn-general-flash-and-red-flash-thresholds">Blitz- und Rotblitzschwellen</a>.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.2 Drei Blitze (AAA)</td>
      <td>Inhalt enthält keinen Aspekt, der mehr als dreimal pro Sekunde blitzt.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.3 Animationen aus Interaktionen (AAA)</em></td>
      <td>Erlauben Sie Benutzern, Animationen aus Interaktionen zu deaktivieren (es sei denn, die Animation ist wesentlich).</td>
      <td><a href="https://w3c.github.io/wcag/guidelines/22/#animation-from-interactions">Verstehen von Animationen aus Interaktionen</a></td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung zu [Richtlinie 2.3 Anfälle und physische Reaktionen: Entwerfen Sie Inhalte nicht auf eine Weise, die bekanntermaßen Anfälle oder physische Reaktionen auslöst.](https://w3c.github.io/wcag/guidelines/22/#seizures-and-physical-reactions)

## Richtlinie 2.4 — Navigierbar: Bieten Sie Möglichkeiten zur Unterstützung der Benutzer beim Navigieren, Finden von Inhalten und Bestimmen ihres Standorts

Die Erfolgskriterien unter dieser Richtlinie beziehen sich auf die Möglichkeiten, wie Benutzer erwarten können, sich zu orientieren und die Inhalte und Funktionen zu finden, nach denen sie auf der aktuellen Seite oder anderen Seiten der Website suchen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie Sie die Kriterien einhalten</th>
      <th scope="col">Praktische Ressource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.4.1 Blöcke umgehen (A)</td>
      <td>
        <p>
          Es sollte ein Mechanismus bereitgestellt werden, mit dem der Benutzer direkt zum Hauptinhalt oder zur auf der Seite verfügbaren Funktionalität gelangen kann, vorbei an wiederkehrenden Features (wie dem Firmenlogo oder der Navigation). Dies wird oft durch "Sprunglinks" erreicht — Links am Anfang des Seitenquellcodes, die zum Hauptinhalt führen und durch CSS versteckt sind.
        </p>
        <p>
          Wenn eine ordnungsgemäße Struktur von Überschriften und semantischen Behältern bereitgestellt wird, um damit zu navigieren (zum Beispiel {{htmlelement("section")}},
          {{htmlelement("aside")}}, etc.), dann ist ein zusätzlicher "Sprunglink" nicht notwendig.
        </p>
      </td>
      <td><em>Es muss ein Abschnitt zu "Sprunglinks" hinzugefügt werden.</em></td>
    </tr>
    <tr>
      <td>2.4.2 Seitentitel einfügen (A)</td>
      <td>
        Jede Webseite sollte einen informativen
        {{htmlelement("title")}} enthalten, dessen Inhalt den
        Seiteninhalt/-zweck beschreibt.
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
        Die "Tabulator-Reihenfolge" der fokussierbaren Seitenelemente (z.B. Links, Schaltflächen, Formulareingaben) ergibt logisch Sinn, was bedeutet, dass die Seite auch von nicht-sichtigen/Tastaturbenutzern nutzbar bleibt.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie nach Möglichkeit semantische UI-Steuerelemente</a
        >
        für allgemeine Ratschläge zum Tabben zu Steuerelementen. Wenn Sie Elemente
        in einem ungewöhnlichen Layout platzieren müssen, ist es besser, dafür zu sorgen, dass die Quellreihenfolge sinnvoll ist, und dann CSS-Funktionen wie
        <a href="/de/docs/Learn_web_development/Core/CSS_layout/Positioning">Positionierung</a>
        zu verwenden, um das Layout zu verwalten.
      </td>
    </tr>
    <tr>
      <td>2.4.4 Zweck von Links (im Kontext) (A)</td>
      <td>
        Der Zweck/Zielort eines Links kann aus dem Linktext
        oder seinem Umfeld (z.B. dem umgebenden Text) bestimmt werden. Ausnahmen sind, wenn der Linkzweck für <em>alle</em> Benutzer mehrdeutig ist (siehe
        <a href="https://w3c.github.io/wcag/guidelines/22/#dfn-ambiguous-to-users-in-general"
          >mehrdeutig für Benutzer im Allgemeinen</a
        >
        für eine nützliche Erklärung dazu).
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels"
          >Verwenden Sie aussagekräftige Textbeschriftungen</a
        >. Beachten Sie auch, dass Sie Fälle minimieren sollten, in denen mehrere Kopien
        desselben Textes auf verschiedene Stellen verlinken. Dies kann Probleme für Bildschirmleser-Benutzer verursachen, die oft eine Liste der Links aus dem Kontext aufrufen — mehrere Links, die alle mit "hier klicken", "hier klicken", "hier klicken" beschriftet sind, könnten verwirrend sein.
      </td>
    </tr>
    <tr>
      <td>2.4.5 Mehrere Navigationsmechanismen (AA)</td>
      <td>
        <p>
          Sie sollten mindestens zwei allgemeine Navigationsmechanismen bereitstellen, um Seiten auf Ihrer Website zu finden, z.B. Navigationsmenü, Breadcrumb-Leiste,
          Seitensuche, Seitenübersicht, Liste verwandter Links, etc.
        </p>
        <p>
          Die einzige Ausnahme ist, wenn eine Seite ein Schritt in einem Prozess ist,
          bei dem es logisch nur Links zu den vorherigen und nächsten Schritten geben sollte.
        </p>
      </td>
      <td>
        Die meisten dieser Mechanismen können mit vollständig unterstützten HTML-Funktionen erstellt werden, beispielsweise siehe
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
          >Stylen von Links als Schaltflächen</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.6 Überschriften und Beschriftungen (AA)</td>
      <td>
        Überschriften (z.B. {{htmlelement("Heading_Elements", "&lt;h2&gt;")}}) und
        {{htmlelement("label")}}-Elemente beschreiben eindeutig den Zweck
        der Inhalte und Formularelemente, die sie beschreiben sollen.
      </td>
      <td>
        <p>
          Siehe
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
            >Verwenden Sie nach Möglichkeit semantische UI-Steuerelemente</a
          >,
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels"
            >Verwenden Sie aussagekräftige Textbeschriftungen</a
          >,
          <a
            href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
            >Grundlagen von Überschriften und Absätzen</a
          >,
          <a
            href="/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#the_label_element"
            >Das &#x3C;label>-Element</a
          >.
        </p>
        <p>
          Beachten Sie, dass Sie es vermeiden sollten, Überschriften oder Beschriftungen zu duplizieren (z.B.
          mehrere Instanzen von "Weitere Informationen"), es sei denn, die Struktur
          ermöglicht es Ihnen, zwischen ihnen leicht zu unterscheiden.
        </p>
      </td>
    </tr>
    <tr>
      <td>2.4.7 Sichtbarer Fokus für fokussierbare Elemente (AA)</td>
      <td>
        Beim Tabben durch fokussierbare Elemente wie Links oder Formular-Eingaben
        sollte es einen visuellen Indikator geben, der zeigt, welches Element derzeit
        im Fokus steht. Dies ist standardmäßig in der Regel eine punktierte oder blaue Umrandung
        (abhängig vom Browser, Plattform, etc.), kann jedoch durch CSS überschrieben werden.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible"
          >Verwenden Sie nach Möglichkeit semantische UI-Steuerelemente</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.8 Standort innerhalb der Website (AAA)</td>
      <td>
        Wenn Sie sich auf einer Seite innerhalb einer komplexen Website oder eines Schrittes befinden, sollte den Benutzern ein Indikator darüber gegeben werden, wo sie sich in der Seite befinden. Beispiele sind eine Breadcrumb-Leiste, eine Seitenübersicht oder ein Text wie "Formularseite 2 von 10".
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.4.9 Zweck von Links (nur Link) (AAA)</td>
      <td>
        Dieses Kriterium baut auf Kriterium 2.4.4 auf und besagt, dass, um die AAA-Konformität zu erfüllen, der Zweck/Zielort eines Links allein vom Linktext bestimmt werden sollte, selbst wenn er aus dem Kontext gerissen ist.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels"
          >Verwenden Sie aussagekräftige Textbeschriftungen</a
        >. Beachten Sie auch, dass Sie Fälle minimieren sollten, in denen mehrere Kopien
        desselben Textes auf verschiedene Stellen verlinken. Dies kann Probleme für Bildschirmleser-Benutzer verursachen, die oft eine Liste der Links aus dem Kontext aufrufen — mehrere Links, die alle mit "hier klicken", "hier klicken", "hier klicken" beschriftet sind, könnten verwirrend sein.
      </td>
    </tr>
    <tr>
      <td>2.4.10 Abschnittsüberschriften (AAA)</td>
      <td>
        <p>
          Neben der Erstellung einer nützlichen Dokumentstruktur sollten Überschriften auch genau beschreiben und Inhaltsbereiche in logische Abschnitte unterteilen.
        </p>
        <p>
          Beachten Sie, dass sich dieses Kriterium auf Überschriften und Titel im allgemeinen Webinhalt bezieht (z.B. Überschriften innerhalb des Textinhalts). Überschriften und Titel für Benutzeroberflächen sind ein besonderer Fall, der in Kriterium 4.1.2 behandelt wird.
        </p>
      </td>
      <td>
        <p>
          Siehe
          <a
            href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
            >Grundlagen von Überschriften und Absätzen</a
          >.
        </p>
      </td>
    </tr>
    <tr>
    <td> 2.4.11 Fokus nicht verdeckt (Minimum) (AA)</td>
    <td>
    <p> Wenn eine Benutzeroberflächenkomponente Tastaturfokus erhält, darf die Komponente nicht vollständig durch autorenerstellte Inhalte verdeckt sein.</p>
    <p> <strong>Hinweis:</strong> Wenn der Inhalt der Benutzeroberfläche vom Benutzer neu positioniert werden kann, wird nur die ursprüngliche Position des benutzerbeweglichen Inhalts zum Testen auf die Einhaltung dieses Standards berücksichtigt. Außerdem können Inhalte, die vom Benutzer geöffnet werden, die Komponente mit Fokus verdecken. Ferner gilt die Komponente mit Fokus nicht als verdeckt für Konformitäts- und Testzwecke, wenn der Benutzer die fokussierte Komponente anzeigen kann, ohne den Tastaturfokus zu ändern.</p>
    </td>
    <td>
    <p> Sehen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum">Verstehen: Fokus nicht verdeckt (Minimum)</a> an, um mehr über diesen Standard zu erfahren.</p>
    </td>
    </tr>
    <tr>
    <td> 2.4.12 Fokus nicht verdeckt (Erweitert) (AAA) </td>
    <td>
    <p> Folgt den Regeln wie 2.4.11, außer dass bei Erhalt des Fokus keine Teile der Komponente durch autorenerstellte Inhalte verdeckt werden können. Wenn die Benutzeroberfläche konfigurierbar ist, werden nur die anfänglichen Positionen der benutzerbeweglichen Inhalte zum Testen und Erfüllen dieses Standards berücksichtigt.</p>
    </td>
    <td>
    <p> Sehen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced">Verstehen: Fokus nicht verdeckt (Erweitert) (Level AAA)</a> an, um mehr über diesen Standard zu erfahren.</p> </td>
    </td>
    </tr>
<tr>
  <td> 2.4.13 Fokus-Erscheinung (AAA)</td>
  <td>
    <p>Wenn der Tastaturfokus-Indikator sichtbar ist, erfüllt der Bereich des Fokus-Indikators alle folgenden Anforderungen:</p>
    <ul>
      <li>Muss mindestens so groß sein wie der Bereich des <code>2px</code> dicken Umfangs der nicht fokussierten Komponente oder Subkomponente, die den Inhalt, Rahmen und Hintergrund der Komponente umfasst, jedoch ohne äußere Schatten- oder Leuchteffekte.</li>
      <li>Erfordert ein Kontrastverhältnis von mindestens 3:1 zwischen den gleichen Pixeln in den fokussierten und nicht fokussierten Zuständen.</li>
    </ul>
    <p> Die Ausnahmen sind:</p>
    <ul>
      <li>Der Fokusindikator wird vom Benutzer bestimmt und kann vom Autor nicht angepasst werden.</li>
      <li>Der Fokusindikator und die Hintergrundfarbe des Indikators werden vom Autor nicht geändert.</li>
    </ul>
  </td>
  <td>
    <p> Sehen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html">Verstehen: Fokus-Erscheinung (Level AAA)</a> an, um mehr über diesen Standard zu erfahren.</p>
  </td>
</tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung zu [Richtlinie 2.4 Navigierbar: Bieten Sie Möglichkeiten zur Unterstützung der Benutzer beim Navigieren, Finden von Inhalten und Bestimmen ihres Standorts.](https://w3c.github.io/wcag/guidelines/22/#navigable)

## Richtlinie 2.5 Eingabemodalitäten: Erleichtern Sie Benutzern die Bedienung von Funktionen durch verschiedene Eingaben jenseits der Tastatur

Die Erfolgskriterien unter dieser Richtlinie stellen sicher, dass Benutzer fähig sind, mit digitaler Technologie unter Verwendung verschiedener Eingabemethoden jenseits der Tastatur oder Maus zu interagieren (einschließlich Touchscreen, Stimme, Gerätemotion oder alternativen Eingabegeräten).

<table>
 <thead>
  <tr>
   <th scope="col">Erfolgskriterien</th>
   <th scope="col">Wie Sie die Kriterien einhalten</th>
   <th scope="col">Praktische Ressource</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>2.5.1 Zeigergesten (A)</em></td>
   <td>Alle Funktionen, die mit einem Zeiger bedient werden können, können mit Einzelpunktaktionen betrieben werden. Pfadbasierte oder Mehrpunkt-Gesten sind für die Bedienung von Funktionen nicht erforderlich. Ausnahmen bestehen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html">Verstehen von Zeigergesten</a></td>
  </tr>
  <tr>
   <td>2.5.2 Zeigerabbruch (A)</em></td>
   <td>Für Funktionen, die mit einem Einzelzeiger bedient werden können, trifft wenigstens eines der Folgenden zu: kein Down-Event, Abbruch/Rückgängig, Aufwärtsumkehr oder wesentlich.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html">Verstehen von Zeigerabbruch</a></td>
  </tr>
  <tr>
   <td>2.5.3 Beschriftung im Namen (A)</em></td>
   <td>Für jede Benutzeroberflächenkomponente, die ein sichtbares Textlabel enthält, stellen Sie sicher, dass der zugängliche Name dem sichtbaren Text im Label entspricht (oder diesen einschließt).</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">Verstehen der Beschriftung im Namen</a></td>
  </tr>
  <tr>
   <td>2.5.4 Bewegungssteuerung (A)</em></td>
   <td>Stellen Sie sicher, dass bei Funktionen, die durch a) Gerätemotion (wie Schütteln, Neigen) oder b) Nutzer-Gesten, die von Gerätesensoren erkannt werden (einschließlich einer Kamera), ausgelöst werden können, beide folgenden Bedingungen erfüllt sind: 1) Bewegungssteuerung kann deaktiviert werden, und 2) die Funktionalität kann ohne Gerätemotion oder Nutzer-Gesten bedient werden. Ausnahmen bestehen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html">Verstehen von Bewegungssteuerung</a></td>
  </tr>
  <tr>
   <td>2.5.5 Zielgröße (AAA)</td>
   <td>Die Größe der Anklickfläche eines bedienbaren Elements muss mindestens 44 CSS-Pixel in Breite und Höhe betragen. Ausnahmen bestehen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html">Verstehen der Zielgröße</a></td>
  </tr>
  <tr>
   <td>2.5.6 Gleichzeitige Eingabemechanismen (AAA)</td>
   <td>Stellen Sie sicher, dass Personen verschiedene Modi der Eingabe verwenden und zwischen ihnen wechseln können, wenn sie mit digitalen Inhalten interagieren, einschließlich Touchscreen, Tastatur, Maus, Sprachbefehle oder alternative Eingabegeräte. Eine wesentliche Ausnahme besteht.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html">Verstehen gleichzeitiger Eingabemechanismen</a></td>
 </tr>
 <tr>
 <td> 2.5.8 Mindestzielgröße (AA)</td>
 <td> Die Zielgröße für Zeigereingaben sollte mindestens <code>24px</code> breit und <code>24px</code> hoch sein, außer in folgenden Bereichen:
 <ul>
  <li> <strong>Abstand:</strong>Ziele, die weniger als <code>24px x 24px</code> groß sind, sind so positioniert, dass wenn ein <code>24px</code> Durchmesser Kreis auf die Begrenzungsbox jedes Ziels zentriert wird, die Kreise sich nicht mit anderen Zielen oder dem Kreis für ein anderes unterdimensioniertes Ziel überschneiden.</li>
  <li> <strong>Äquivalent:</strong> Eine separate Kontrolle, die die gleiche Funktion erfüllt und diesem Standard entspricht, ist auf derselben Seite verfügbar.</li>
  <li> <strong>Inline:</strong> Das Ziel befindet sich innerhalb einer Textzeile mit seiner Größe, die durch die Zeilenhöhe oder umgebenden Nicht-Zieltext eingeschränkt ist.</li>
  <li> <strong>Benutzeragentensteuerung:</strong> Die Zielgröße wird durch den Benutzeragenten bestimmt und wurde nicht vom Autor geändert.</li>
  <li> <strong>Wesentlich:</strong> Eine bestimmte Präsentation des Ziels ist wesentlich oder gesetzlich erforderlich für die zu vermittelnden Informationen.</li>
 </ul>
 <td> Schauen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html">Verstehen der Mindestzielgröße</a> an </td>
</tr>
  </tr>
 </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung zu [Richtlinie 2.5: Eingabemodalitäten: Erleichtern Sie Benutzern die Bedienung von Funktionen durch verschiedene Eingaben jenseits der Tastatur.](https://w3c.github.io/wcag/guidelines/22/#input-modalities)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. Operabel
  3. [Verstehbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)
