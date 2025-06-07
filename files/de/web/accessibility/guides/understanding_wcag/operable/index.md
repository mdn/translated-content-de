---
title: Bedienbar
slug: Web/Accessibility/Guides/Understanding_WCAG/Operable
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihren Webinhalt so schreiben, dass er den Erfolgskriterien entspricht, die im Prinzip **Bedienbar** der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 festgelegt sind. Bedienbar bedeutet, dass Benutzeroberflächenkomponenten und die Navigation bedienbar sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Bedienbar und seine Richtlinien und Erfolgskriterien zu lesen, sehen Sie [Prinzip 2: Bedienbar — Benutzeroberflächenkomponenten und Navigation müssen bedienbar sein.](https://w3c.github.io/wcag/guidelines/22/#operable)

## Richtlinie 2.1 — Tastaturzugänglich: Stellen Sie sicher, dass alle Funktionen von einer Tastatur aus verfügbar sind

Diese Richtlinie behandelt die Notwendigkeit, die Kernfunktionalität einer Website zusätzlich zu anderen Mitteln (z. B. Maus) über eine Tastatur verfügbar zu machen, damit Benutzer, die auf Tastatursteuerungen angewiesen sind, darauf zugreifen können.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie man die Kriterien erfüllt</th>
      <th scope="col">Praktische Ressourcen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.1.1 Tastatur (A)</td>
      <td>
        Alle Funktionen sollten über Tastatursteuerungen zugänglich sein, es sei denn, dies ist mit der Tastatur nicht möglich (z. B. Freihandzeichnung). Eingebettete Steuerungen sollten nach Möglichkeit verwendet werden (z. B. durch Tabulatoren durch Formularelemente), und Sie sollten nur dann eigene Funktionen einbauen, wenn es notwendig ist.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible">Verwenden Sie nach Möglichkeit semantische UI-Steuerelemente</a>
        und
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in">Tastaturzugänglichkeit wiedereinbauen</a>
      </td>
    </tr>
    <tr>
      <td>2.1.2 Keine Tastaturfalle (A)</td>
      <td>
        <p>
          Wenn Sie mit der Tastatur einen Funktionsbereich betreten, sollten Sie diesen Bereich auch nur mit der
          Tastatur wieder verlassen können. Wenn Sie zum Beispiel <kbd>Enter</kbd>/<kbd>Return</kbd> auf einer fokussierten Schaltfläche drücken, um ein Optionsfenster zu öffnen, sollten Sie dieses Fenster ebenfalls wieder schließen und mit der Tastatur zum Hauptinhalt zurückkehren können.
        </p>
        <p>
          Dies ist sehr wichtig, damit Tastaturbenutzer nicht auf bestimmten Bereichen Ihrer Apps feststecken.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.1.3 Tastatur — alle Funktionen (AAA)</td>
      <td>
        Dies ist ein Schritt über Kriterium 2.1.1 hinaus. Um AAA-Konformität zu erreichen, sollten alle Funktionen ohne Ausnahmen über Tastatursteuerungen zugänglich sein.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible">Verwenden Sie nach Möglichkeit semantische UI-Steuerelemente</a>
        und
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in">Tastaturzugänglichkeit wiedereinbauen</a>
      </td>
    </tr>
    <tr>
      <td>2.1.4 Zeichen-Tastenkürzel (A)</td>
      <td>
        Wenn es ein Tastenkürzel mit einem einzelnen Zeichen gibt, dann muss mindestens eine der folgenden Aussagen zutreffen: Einzel-Zeichen-Tastenkürzel können deaktiviert, neu zugeordnet oder sind nur aktiv, wenn das entsprechende Benutzeroberflächenelement im Fokus ist.
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html">Verstehen von Zeichen-Tastenkürzeln</a>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Sehen Sie auch die WCAG-Beschreibung für [Richtlinie 2.1 Tastaturzugänglich: Stellen Sie sicher, dass alle Funktionen von einer Tastatur aus verfügbar sind](https://w3c.github.io/wcag/guidelines/22/#keyboard-accessible).

## Richtlinie 2.2 — Genügend Zeit: Stellen Sie Benutzer ausreichend Zeit zur Verfügung, um Inhalte zu lesen und zu nutzen

Diese Richtlinie behandelt Situationen, in denen Funktionen möglicherweise eine Zeitbegrenzung haben. Zum Beispiel müssen Käufe manchmal aus Sicherheitsgründen innerhalb einer bestimmten Zeitspanne abgeschlossen werden.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie man die Kriterien erfüllt</th>
      <th scope="col">Praktische Ressourcen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.2.1 Anpassbare Zeit (A)</td>
      <td>
        <p>
          Für Funktionen mit Zeitbegrenzung (z. B. das Abschließen einer Hotel- oder Flugbuchung hat oft eine Zeitvorgabe) sollte dem Benutzer Steuerelemente gegeben werden, die es ihm ermöglichen, die Zeitbegrenzung anzupassen, zu verlängern oder abzuschalten.
        </p>
        <p>
          Ausnahmen von dieser Regel sind Aktivitäten mit Zeitbegrenzungen von mehr als 20 Stunden, Echtzeitereignisse (z. B. Live-Multiplayer-Spiele) und jede andere Aktivität, die eine Zeitbegrenzung erfordert und ungültig wäre, wenn sie abgeschaltet würde.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.2 Pausieren, stoppen, ausblenden (A)</td>
      <td>
        <p>
          Für sich bewegende oder blinkende Inhalte, die automatisch starten, länger als 5 Sekunden dauern und neben anderen Inhalten gezeigt werden, sollten Steuerelemente bereitgestellt werden, um sie zu pausieren, zu stoppen oder auszublenden. Dies gilt nicht für sich bewegende oder blinkende Inhalte, die für die Erfahrung wesentlich sind. Beispiele sind scrollender Text und Videos.
        </p>
        <p>
          Für automatisch aktualisierende Informationen, die automatisch starten und neben anderen Inhalten gezeigt werden, sollten Steuerelemente bereitgestellt werden, um sie zu pausieren, zu stoppen oder auszublenden oder um die Häufigkeit der Aktualisierungen zu kontrollieren. Dies gilt nicht für automatisch aktualisierende Inhalte, die für die Erfahrung wesentlich sind. Beispiele sind Karussells oder rotierende Ankündigungen.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.3 Keine Zeitbegrenzungen (AAA)</td>
      <td>
        Dies baut auf Kriterium 2.2.1 auf und besagt, dass Inhalte, die die AAA-Konformität erreichen möchten, keine Zeitbegrenzungen haben sollten.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.4 Unterbrechen unterdrücken (AAA)</td>
      <td>
        Alle Unterbrechungen wie Warnungen oder überlagerte Werbung sollten Funktionen enthalten, um sie zu unterdrücken oder zu verschieben, es sei denn, es handelt sich um eine Notfallbenachrichtigung.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.5 Wiederautorisierung (AAA)</td>
      <td>
        Wenn eine Authentifizierungssitzung während der Nutzung einer Web-App abläuft, sollte der Benutzer sich erneut authentifizieren und seine Nutzung fortsetzen können, ohne Daten zu verlieren.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.6 Laufzeitende (AAA)</td>
      <td>
        <p>
          Wenn es ein Laufzeitende (verursacht durch Benutzerinaktivität) gibt, sollten Benutzer zu Beginn eines Prozesses gewarnt werden, damit sie nicht überrascht werden, dass ein Laufzeitende existiert (oder nur nach 20 Stunden Inaktivität eintreten).
        </p>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html">Verstehen von Laufzeitenden</a>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Sehen Sie auch die WCAG-Beschreibung für [Richtlinie 2.2 Genügend Zeit: Stellen Sie Benutzern ausreichend Zeit zur Verfügung, um Inhalte zu lesen und zu nutzen](https://w3c.github.io/wcag/guidelines/22/#enough-time).

## Richtlinie 2.3 — Anfälle und physische Reaktionen: Gestalten Sie Inhalte nicht so, dass sie Anfälle oder physische Reaktionen auslösen

Dies bezieht sich auf Inhalte, die, wenn sie nicht geändert werden, Anfälle bei Benutzern mit Erkrankungen wie Epilepsie auslösen könnten ODER physische Reaktionen (wie Schwindel) bei Benutzern mit Erkrankungen wie vestibulären Störungen hervorrufen könnten.

<table>
  <thead>
    <tr>
    <th scope="col">Erfolgskriterien</th>
    <th scope="col">Wie man die Kriterien erfüllt</th>
    <th scope="col">Praktische Ressourcen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.3.1 Drei-Blitz-Grenze (A)</td>
      <td>Der Inhalt enthält keinen Aspekt, der mehr als dreimal pro Sekunde blinkt, oder blinkende Inhalte liegen unter den akzeptablen <a href="https://w3c.github.io/wcag/guidelines/22/#dfn-general-flash-and-red-flash-thresholds">Blitz- und Rot-Blitz-Grenzen</a>.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.2 Drei Blitze (AAA)</td>
      <td>Der Inhalt enthält keinen Aspekt, der mehr als dreimal pro Sekunde blinkt.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.3 Animationen bei Interaktionen (AAA)</em></td>
      <td>Erlauben Sie Benutzern, Animationen von Interaktionen zu deaktivieren (es sei denn, die Animation ist wesentlich).</td>
      <td><a href="https://w3c.github.io/wcag/guidelines/22/#animation-from-interactions">Verstehen von Animationen bei Interaktionen</a></td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Sehen Sie auch die WCAG-Beschreibung für [Richtlinie 2.3 Anfälle und physische Reaktionen: Gestalten Sie Inhalte nicht so, dass sie Anfälle oder physische Reaktionen auslösen](https://w3c.github.io/wcag/guidelines/22/#seizures-and-physical-reactions)

## Richtlinie 2.4 — Navigierbar: Bieten Sie Möglichkeiten, die Benutzern helfen, zu navigieren, Inhalte zu finden und festzustellen, wo sie sich befinden

Die Konformitätskriterien unter dieser Richtlinie beziehen sich auf Möglichkeiten, wie Benutzer erwartet werden können, sich zu orientieren und die Inhalte und Funktionen zu finden, nach denen sie auf der aktuellen Seite oder anderen Seiten der Website suchen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie man die Kriterien erfüllt</th>
      <th scope="col">Praktische Ressourcen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.4.1 Blocke überspringen (A)</td>
      <td>
        <p>
          Es sollte ein Mechanismus bereitgestellt werden, der es dem Benutzer ermöglicht, direkt zum Hauptinhalt oder zur Hauptfunktionalität auf der Seite zu springen, vorbei an den wiederholten Features (wie dem Firmenlogo oder der Navigation). Dies wird oft durch "Skip-Links" erreicht — Links, die am Anfang des Seitenquellcodes platziert werden, um auf den Hauptinhalt zu verlinken und durch CSS versteckt werden.
        </p>
        <p>
          Wenn eine ordentliche Struktur von Überschriften und semantischen Containern bereitgestellt wird, um mit (zum Beispiel {{htmlelement("section")}}, {{htmlelement("aside")}}, etc.) zu navigieren, ist ein zusätzlicher "Skip-Link" nicht erforderlich.
        </p>
      </td>
      <td><em>Es muss ein Abschnitt zu "Skip-Links" hinzugefügt werden.</em></td>
    </tr>
    <tr>
      <td>2.4.2 Seitentitel einfügen (A)</td>
      <td>
        Jede Webseite sollte einen informativen {{htmlelement("title")}} enthalten, dessen Inhalt den Inhalt/Zweck der Seite beschreibt.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_a_title">Einen Titel hinzufügen</a>.
      </td>
    </tr>
    <tr>
      <td>2.4.3 Logische Fokusreihenfolge (A)</td>
      <td>
        Die "Tab-Reihenfolge" von fokussierbaren Seitenelementen (z. B. Links, Schaltflächen, Formulareingaben) sollte logisch sinnvoll sein, sodass die Seite auch für nicht sehende/Tastaturbenutzer bedienbar bleibt.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible">Verwenden Sie nach Möglichkeit semantische UI-Steuerelemente</a>
        für allgemeine Ratschläge zum Tabben zu Steuerelementen. Wenn Sie Elemente in einem ungewöhnlichen Layout platzieren müssen, ist es besser, dafür zu sorgen, dass die Quellreihenfolge sinnvoll ist, und dann CSS-Features wie <a href="/de/docs/Learn_web_development/Core/CSS_layout/Positioning">Positionierung</a> zu verwenden, um das Layout zu steuern.
      </td>
    </tr>
    <tr>
      <td>2.4.4 Link-Zweck (im Kontext) (A)</td>
      <td>
        Der Zweck/die Zielsetzung eines Links kann aus dem Linktext oder aus seiner Umgebung bestimmt werden (z. B. dem umgebenden Text). Ausnahmen sind, wo der Linkzweck für <em>alle</em> Benutzer mehrdeutig ist (siehe <a href="https://w3c.github.io/wcag/guidelines/22/#dfn-ambiguous-to-users-in-general">mehrdeutig für Benutzer im Allgemeinen</a> für eine nützliche Erklärung dazu).
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels">Verwenden Sie aussagekräftige Textbeschriftungen</a>. Beachten Sie auch, dass Sie Instanzen minimieren sollten, bei denen mehrere Kopien desselben Textes zu verschiedenen Orten verlinken. Dies kann Probleme für Bildschirmleser-Benutzer verursachen, die oft eine Liste der Links außerhalb des Kontexts aufrufen — mehrere Links, die alle mit "hier klicken", "hier klicken", "hier klicken" beschriftet sind, wären verwirrend.
      </td>
    </tr>
    <tr>
      <td>2.4.5 Mehrere Navigationsmechanismen (AA)</td>
      <td>
        <p>
          Sie sollten mindestens zwei allgemeine Navigationsmechanismen bereitstellen, um Seiten auf Ihrer Website zu finden, beispielsweise Navigationsmenü, Breadcrumb-Trail, Websitesuche, Sitemap, Liste verwandter Links usw.
        </p>
        <p>
          Die einzige Ausnahme hierbei ist, wenn eine Seite einen Schritt in einem Prozess darstellt und daher nur logisch Links zu den vorhergehenden und nächsten Schritten haben sollte.
        </p>
      </td>
      <td>
        Die meisten dieser Mechanismen können mit vollständig unterstützten HTML-Funktionen erstellt werden, siehe zum Beispiel
        <a href="/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#search_field">Suchfeld</a>,
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#active_learning_creating_a_navigation_menu">Erstellen eines Navigationsmenüs</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Styling_links#styling_links_as_buttons">Styling von Links als Schaltflächen</a>.
      </td>
    </tr>
    <tr>
      <td>2.4.6 Überschriften und Beschriftungen (AA)</td>
      <td>
        Überschriften (z. B. {{htmlelement("Heading_Elements", "&lt;h2&gt;")}}) und {{htmlelement("label")}}-Elemente beschreiben klar den Zweck der Inhalte und Formularelemente, die sie beschreiben sollen.
      </td>
      <td>
        <p>
          Siehe
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible">Verwenden Sie nach Möglichkeit semantische UI-Steuerelemente</a>,
          <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels">Verwenden Sie aussagekräftige Textbeschriftungen</a>,
          <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs">Die Grundlagen von Überschriften und Absätzen</a>,
          <a href="/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#the_label_element">Das &lt;label&gt;-Element</a>.
        </p>
        <p>
          Beachten Sie, dass Sie die Duplizierung von Überschriften oder Beschriftungen vermeiden sollten (z. B. mehrere Instanzen von "Weitere Informationen"), es sei denn, die Struktur ermöglicht es Ihnen, zwischen ihnen leicht zu unterscheiden.
        </p>
      </td>
    </tr>
    <tr>
      <td>2.4.7 Sichtbarer Fokus für fokussierbare Elemente (AA)</td>
      <td>
        Beim Wechsel zwischen fokussierbaren Elementen wie Links oder Formulareingaben sollte es einen visuellen Indikator geben, der anzeigt, welches Element aktuell den Fokus hat. Dies ist normalerweise standardmäßig ein gepunkteter oder blauer Umriss (abhängig vom Browser, der Plattform usw.), kann jedoch durch CSS überschrieben werden.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible">Verwenden Sie nach Möglichkeit semantische UI-Steuerelemente</a>.
      </td>
    </tr>
    <tr>
      <td>2.4.8 Standort innerhalb der Website (AAA)</td>
      <td>
        Wenn sich der Benutzer auf einer Seite innerhalb einer komplexen Website oder eines Schrittsatzes befindet, sollte ihm ein Indikator darüber gegeben werden, wo er sich auf der Website befindet, beispielsweise ein Breadcrumb-Trail, eine Sitemap oder ein Text wie "Formularseite 2 von 10".
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.4.9 Link-Zweck (nur Link) (AAA)</td>
      <td>
        Dieses Kriterium baut auf 2.4.4 auf und besagt, dass, um AAA-konform zu sein, der Zweck/die Zielsetzung eines Links allein aus dem Linktext bestimmt werden sollte, selbst wenn er aus dem Kontext gerissen ist.
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels">Verwenden Sie aussagekräftige Textbeschriftungen</a>. Beachten Sie auch, dass Sie Instanzen minimieren sollten, bei denen mehrere Kopien desselben Textes zu verschiedenen Orten verlinken. Dies kann Probleme für Bildschirmleser-Benutzer verursachen, die oft eine Liste der Links außerhalb des Kontexts aufrufen — mehrere Links, die alle mit "hier klicken", "hier klicken", "hier klicken" beschriftet sind, wären verwirrend.
      </td>
    </tr>
    <tr>
      <td>2.4.10 Abschnittsüberschriften (AAA)</td>
      <td>
        <p>
          Überschriften sollten nicht nur eine nützliche Dokumentenstruktur schaffen, sondern auch die Inhalte genau beschreiben und in logische Abschnitte unterteilen.
        </p>
        <p>
          Beachten Sie, dass sich dieses Kriterium auf Überschriften und Titel in allgemeinen Webinhalten bezieht (z.B. Überschriften innerhalb von Textinhalten). Überschriften und Titel für Benutzeroberflächen sind ein spezieller Fall, der in Kriterium 4.1.2 behandelt wird.
        </p>
      </td>
      <td>
        <p>
          Siehe
          <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs">Die Grundlagen von Überschriften und Absätzen</a>.
        </p>
      </td>
    </tr>
    <tr>
    <td>2.4.11 Fokus nicht verdeckt (Minimum) (AA)</td>
    <td>
    <p> Wenn eine Benutzeroberflächenkomponente den Tastaturfokus erhält, wird die Komponente nicht vollständig durch autorenerstellte Inhalte verborgen.</p>
    <p> <strong>Hinweis:</strong> Wenn der Inhalt der Schnittstelle vom Benutzer neu positioniert werden kann, wird für Tests zur Einhaltung dieses Standards nur die anfängliche Position der benutzerbewegbaren Inhalte berücksichtigt. Außerdem können Inhalte, die vom Benutzer geöffnet wurden, die Komponente verdecken, die den Fokus erhält. Weiterhin, wenn der Benutzer die fokussierte Komponente sichtbar machen kann, ohne den Tastaturfokus zu ändern, wird die Komponente mit Fokus nicht als verborgen in Bezug auf Konformität und Tests angesehen.</p>
    </td>
    <td>
    <p> Sehen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum">Verständnis von Fokus nicht verdeckt (Minimum)</a> an, um mehr über diesen Standard zu erfahren.</p>
    </td>
    </tr>
    <tr>
    <td>2.4.12 Fokus nicht verdeckt (Verbessert) (AAA) </td>
    <td>
    <p> Folgt den Regeln wie 2.4.11, außer wenn eine Benutzeroberflächenkomponente den Fokus erhält, kann kein Teil der Komponente durch autorenerstellte Inhalte verdeckt werden. Wenn die Oberfläche konfigurierbar ist, werden für Tests und die Einhaltung dieses Standards nur die anfänglichen Positionen von benutzerbewegbaren Inhalten berücksichtigt.</p>
    </td>
    <td>
    <p> Sehen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced">Verständnis von Fokus nicht verdeckt (Verbessert) (Level AAA)</a> an, um mehr über diesen Standard zu erfahren.</p> </td>
    </td>
    </tr>
<tr>
  <td>2.4.13 Fokuserscheinung (AAA)</td>
  <td>
    <p>Wenn der Tastaturfokus-Indikator sichtbar ist, erfüllt der Bereich des Fokus-Indikators alle folgenden Eigenschaften:</p>
    <ul>
      <li>Muss mindestens so groß sein wie die Fläche eines <code>2px</code> dicken Umfangs der unscharfen Komponente oder Unterkomponente, die den Inhalt, den Rahmen und den Hintergrund der Komponente umfasst, außer äußeren Schatten- oder Glüheffekten.</li>
      <li>Muss einen Kontrastverhältnis von mindestens 3:1 zwischen denselben Pixeln in den fokussierten und unscharfen Zuständen haben</li>
    </ul>
    <p> Die Ausnahmen sind:</p>
    <ul>
      <li>Der Fokus-Indikator wird vom Benutzer festgelegt und kann vom Autor nicht angepasst werden.</li>
      <li>Der Fokus-Indikator und die Hintergrundfarbe des Indikators wurden vom Autor nicht verändert.</li>
    </ul>
  </td>
  <td>
    <p> Sehen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html">Verständnis der Fokuserscheinung (Level AAA)</a> an, um mehr über diesen Standard zu erfahren.</p>
  </td>
</tr>
  </tbody>
</table>

> [!NOTE]
> Sehen Sie auch die WCAG-Beschreibung für [Richtlinie 2.4 Navigierbar: Bieten Sie Möglichkeiten, die Benutzern helfen, zu navigieren, Inhalte zu finden und festzustellen, wo sie sich befinden.](https://w3c.github.io/wcag/guidelines/22/#navigable)

## Richtlinie 2.5 Eingabemodalitäten: Erleichtern Sie es Benutzern, Funktionen über verschiedene Eingabemethoden jenseits der Tastatur zu bedienen

Die Konformitätskriterien unter dieser Richtlinie stellen sicher, dass Benutzer in der Lage sind, mit digitaler Technologie mittels verschiedener Eingabemethoden jenseits einer Tastatur oder Maus (einschließlich Touchscreen, Sprachsteuerung, Gerätebewegung oder alternativen Eingabegeräten) zu interagieren.

<table>
 <thead>
  <tr>
   <th scope="col">Erfolgskriterien</th>
   <th scope="col">Wie man die Kriterien erfüllt</th>
   <th scope="col">Praktische Ressourcen</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>2.5.1 Zeigergesten (A)</em></td>
   <td>Alle Funktionen, die mit einem Zeiger bedient werden können, können auch mit Einpunkt-Aktionen bedient werden. Pfadbasierte oder Mehrpunkt-Gesten sind zur Bedienung keiner Funktion erforderlich. Es gibt Ausnahmen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html">Verständnis von Zeigergesten</a></td>
  </tr>
  <tr>
   <td>2.5.2 Zeigerabbruch (A)</em></td>
   <td>Für Funktionen, die mit einem einzelnen Zeiger bedient werden können, trifft mindestens eine der folgenden Aussagen zu: kein nach unten-Event, Abbruch/Rückgängig, Aufwärtsumkehr oder wesentlich.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html">Verständnis von Zeigerabbruch</a></td>
  </tr>
  <tr>
   <td>2.5.3 Beschriftung im Namen (A)</em></td>
   <td>Für jede Benutzeroberflächenkomponente, die eine sichtbare Textbeschriftung enthält, stellen Sie sicher, dass der zugängliche Name mit dem sichtbaren Text im Beschriftungstext übereinstimmt (oder diesen beinhaltet).</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">Verständnis von Beschriftung im Namen</a></td>
  </tr>
  <tr>
   <td>2.5.4 Bewegungsaktivierung (A)</em></td>
   <td>Stellen Sie sicher, dass für Funktionen, die durch a) Gerätebewegung (wie Schütteln, Neigen) oder b) vom Gerät erfasste Benutzerbewegungen ausgelöst werden können (einschließlich einer Kamera), dass beide folgenden Aussagen zutreffen: 1) Bewegungsaktivierung kann deaktiviert werden, und 2) die Funktion kann bedient werden, ohne Gerätebewegung oder Benutzerbewegungen zu verwenden. Es gibt Ausnahmen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html">Verständnis von Bewegungsaktivierung</a></td>
  </tr>
  <tr>
   <td>2.5.5 Zielgröße (AAA)</td>
   <td>Die Größe des berührungsempfindlichen Ziels eines bedienbaren Elements muss mindestens 44 CSS-Pixel in Breite und Höhe betragen. Es gibt Ausnahmen.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html">Verständnis von Zielgröße</a></td>
  </tr>
  <tr>
   <td>2.5.6 Gleichzeitige Eingabemechanismen (AAA)</td>
   <td>Stellen Sie sicher, dass Personen verschiedene Eingabemodi verwenden und zwischen diesen wechseln können, wenn sie mit digitalen Inhalten interagieren, einschließlich Touchscreen, Tastatur, Maus, Sprachbefehlen oder alternativen Eingabegeräten. Es gibt eine wesentliche Ausnahme. </td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html">Verständnis von gleichzeitigen Eingabemechanismen</a></td>
 </tr>
 <tr>
 <td>2.5.8 Mindestzielgröße (AA)</td>
 <td> Die Zielgröße für Zeigereingaben sollte mindestens <code>24px</code> breit und <code>24px</code> hoch sein, außer in den folgenden Bereichen:
 <ul>
  <li> <strong>Abstände:</strong>Ziele, die weniger als <code>24px x 24px</code> groß sind, sind so positioniert, dass, wenn ein <code>24px</code> großer Kreis im Mittelpunkt jedes Zielrahmens zentriert ist, sich die Kreise nicht mit einem anderen Ziel oder dem Kreis eines anderen untergroßen Ziels schneiden.</li>
  <li> <strong>Gleichwertig:</strong> Eine separate Steuerung, die denselben Zweck erfüllt und diesen Standard erfüllt, ist auf derselben Seite verfügbar.</li>
  <li> <strong>Inline:</strong> Das Ziel befindet sich innerhalb einer Textzeile und seine Größe wird durch die Linienhöhe oder den umgebenden Nicht-Zieltext begrenzt.</li>
  <li> <strong>Nutzeragentenkontrolle:</strong> Die Größe des Ziels wird durch den Nutzeragenten bestimmt und wurde nicht vom Autor verändert.</li>
  <li> <strong>Wesentlich:</strong> Eine bestimmte Präsentation des Ziels ist wesentlich oder gesetzlich erforderlich, um die übermittelten Informationen darzustellen.</li>
 </ul>
 <td> Sehen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html">Understanding target size minimum</a> an </td>
</tr>
  </tr>
 </tbody>
</table>

> [!NOTE]
> Sehen Sie auch die WCAG-Beschreibung für [Richtlinie 2.5: Eingabemodalitäten: Erleichtern Sie es Benutzern, Funktionen über verschiedene Eingabemethoden jenseits der Tastatur zu bedienen.](https://w3c.github.io/wcag/guidelines/22/#input-modalities)

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. Bedienbar
  3. [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  4. [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)
