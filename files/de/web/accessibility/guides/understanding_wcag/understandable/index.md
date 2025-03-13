---
title: Verständlich
slug: Web/Accessibility/Guides/Understanding_WCAG/Understandable
l10n:
  sourceCommit: 8941e7636bfc91985ca5a486e7228b681e1aa272
---

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so verfassen, dass sie den Erfolgskriterien des Prinzips **Verständlich** der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 entsprechen. Das Prinzip Verständlich besagt, dass Informationen und die Bedienung der Benutzeroberfläche verständlich sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Verständlich und dessen Richtlinien sowie Erfolgskriterien zu lesen, siehe [Principle 3: Understandable — Information and the operation of user interface must be understandable](https://www.w3.org/TR/WCAG21/#understandable).

## Richtlinie 3.1 — Lesbar: Machen Sie Textinhalte lesbar und verständlich

Diese Richtlinie konzentriert sich darauf, Textinhalte so verständlich wie möglich zu machen.

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
      <td>3.1.1 Sprache der Seite (A)</td>
      <td>
        Die Standardsprache jeder Webseite sollte über den Code erkennbar sein. Dies ist essenziell, um sicherzustellen, dass der Leser eine Seite in einer für ihn geeigneten Sprache erreicht hat. Der einfachste Weg, dies zu erreichen, besteht darin, das <a href="/de/docs/Web/HTML/Global_attributes/lang">lang</a>-Attribut auf dem {{htmlelement("html")}}-Element der Seite zu setzen und ihm einen Wert zu geben, der dem Sprachcode entspricht, der die Sprache, in der die Seite verfasst ist, am besten repräsentiert.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#setting_the_primary_language_of_the_document"
          >Festlegen der Hauptsprache des Dokuments</a
        >.
      </td>
    </tr>
    <tr>
      <td>3.1.2 Sprache der Teile (AA)</td>
      <td>
        <p>
          In Fällen, in denen der Inhalt einer Seite Wörter oder Phrasen in einer anderen Sprache als der Hauptsprache enthält, verwenden Sie das <a href="/de/docs/Web/HTML/Global_attributes/lang">lang</a>-Attribut auf einem um den betreffenden Begriff gewickelten Element (z. B. ein {{htmlelement("span")}}, wenn kein semantisches Element verfügbar ist), um eine geeignete Sprache dafür festzulegen.
        </p>
        <p>
          Sie müssen keine andere Sprache festlegen für Wörter oder Phrasen, die unabhängig von der Sprache gleich sind (zum Beispiel Eigennamen, technische Begriffe, die nicht zu einer bestimmten Sprache gehören).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.3 Unübliche Wörter (AAA)</td>
      <td>
        Wo technische Begriffe, Fachjargon oder Idiome/Slang verwendet werden, sollten Definitionen für solche Phrasen/Wörter bereitgestellt werden. Ihre Website sollte ein Glossar enthalten, das Definitionen dieser Wörter/Begriffe enthält, auf die Sie dann verlinken können, wenn sie auftauchen. Alternativ sollten Definitionen zumindest im umgebenden Text oder in einer
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#description_lists"
          >Beschreibungsliste</a
        >
        am Ende der Seite bereitgestellt werden.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.4 Abkürzungen (AAA)</td>
      <td>
        <p>
          Wo Abkürzungen verwendet werden, sollten Sie ihre vollständige Form oder eine Definition nach Bedarf bereitstellen.
        </p>
        <p>
          Das {{htmlelement("abbr")}}-Element wird oft als bevorzugte Methode angesehen, um die vollständige Form einer Abkürzung bereitzustellen — es nimmt ein <a href="/de/docs/Web/HTML/Global_attributes/title">title</a>-Attribut auf, das die vollständige Form enthält, und diese erscheint, wenn das Akronym mit der Maus überfahren wird. Allerdings sind die Inhalte des Titels nicht über die Tastatur zugänglich, noch werden sie zuverlässig von Bildschirmlesern vorgelesen. Eine bessere Möglichkeit, damit umzugehen, besteht darin, erneut Links zu Glossarseiten bereitzustellen, die die Erklärung und Erläuterung des Akronyms enthalten, oder sie zumindest im umgebenden Text kontextuell einzuschließen.
        </p>
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations"
          >Abkürzungen</a
        >.
      </td>
    </tr>
    <tr>
      <td>3.1.5 Lesestufe (AAA)</td>
      <td>
        <p>
          Wenn Text bereitgestellt wird, der ein höheres Leseverständnis als das der unteren Sekundarstufe erfordert (typischerweise Kinder im Alter von 11-14 Jahren), sollten ergänzende erklärende Materialien bereitgestellt werden, um Personen zu helfen, die es nicht lesen können, oder eine alternative Version, die auf der unteren Sekundarstufe geschrieben ist.
        </p>
        <p>
          Das bedeutet nicht, dass alle Themen von jedem verstanden werden sollten, aber dass der Schreibstil für jeden zugänglich sein sollte. Es ist besser, alle Inhalte auf der unteren Sekundarstufe zu schreiben, selbst technische Dokumentationen wie Programmier-Tutorials, es sei denn, es gibt einen guten Grund, dies nicht zu tun (z. B. ein alternativer Stil für poetische Effekte), oder sie müssen in einem strengen Stil geschrieben werden (z. B. W3C-Spezifikationen).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.6 Aussprache (AAA)</td>
      <td>
        <p>
          Es sollte ein Mechanismus bereitgestellt werden, um den Benutzern Zugang zur Aussprache von Wörtern zu geben, wo sie nötig ist, um den Inhalt vollständig zu verstehen.
        </p>
        <p>
          Das HTML-Element {{htmlelement("audio")}} kann verwendet werden, um eine Steuerung zu erstellen, die es dem Leser ermöglicht, eine Audiodatei mit der korrekten Aussprache abzuspielen. Es ist auch sinnvoll, eine Textaussprachenführung nach schwierigen Wörtern einzufügen, auf die gleiche Weise, wie Sie sie in Wörterbucheinträgen finden.
        </p>
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio"
          >Video- und Audioinhalte</a
        >, und
        <a
          href="https://www.oxfordlearnersdictionaries.com/us/about/pronunciation_english.html"
          >Ausspracheführer für Englisch-Wörterbuch</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Guideline 3.1 Readable: Make text content readable and understandable](https://www.w3.org/TR/WCAG21/#readable).

## Richtlinie 3.2 — Vorhersehbar: Lassen Sie Webseiten auf vorhersehbare Weise erscheinen und arbeiten

Diese Richtlinie konzentriert sich darauf, Benutzeroberflächen intuitiv und verständlich zu gestalten.

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
      <td>3.2.1 Bei Fokus (A)</td>
      <td>
        <p>
          Wenn ein Steuerelement oder eine andere Seitenfunktion den Fokus erhält, sollte es den Kontext nicht auf eine Weise ändern, die den Benutzer verwirren oder desorientieren könnte.
        </p>
        <p>
          Dies ist eine Frage des sinnvollen Designs – Menschen wollen nicht, dass Oberflächen sie überraschen; sie möchten, dass Dinge intuitiv sind und sich erwartungsgemäß verhalten. Beispielsweise sollte der Fokus auf eine Navigationsmenüoption die angezeigte Seite nicht ändern – sie sollte aktiviert werden, bevor die Anzeige wechselt.
        </p>
      </td>
      <td>
        Das `Element` `focus`-Ereignis enthält einige nützliche Informationen. Siehe auch
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Tastaturzugänglichkeit wieder einbauen</a
        >
        für einige nützliche Implementierungsideen.
      </td>
    </tr>
    <tr>
      <td>3.2.2 Bei Eingabe (A)</td>
      <td>
        <p>
          Wenn Daten in ein Steuerelement eingegeben oder eine Einstellung geändert wird, sollte der Kontext nicht unerwartet geändert werden. Der Benutzer sollte über die bevorstehende Änderung gewarnt/gesehen werden, bevor sie auftritt.
        </p>
        <p>
          Auch hier sollte sinnvolles Design umgesetzt werden. Zum Beispiel, wenn durch Drücken einer Taste die Anwendung die aktuelle Ansicht verlässt, sollte der Benutzer gebeten werden, diese Aktion zu bestätigen, seine Arbeit zu speichern, falls zutreffend, usw.
        </p>
      </td>
      <td>
        Das `input`-Ereignis ist hier nützlich.
      </td>
    </tr>
    <tr>
      <td>3.2.3 Konsistente Navigation (AA)</td>
      <td>
        <p>
          Navigationsmenü-/Steuerstil und Positionierung sollten zwischen verschiedenen Seiten oder Ansichten einer Webseite konsistent sein, und die vorhandenen Elemente sollten in derselben Reihenfolge erscheinen, selbst wenn beispielsweise neue Elemente hinzugefügt werden. Wenn der Benutzer eine Änderung initiiert hat, z. B. eine andere Farbgebung oder Position für die Navigation wählt, sollte diese über alle Seiten hinweg respektiert werden.
        </p>
        <p>
          Wieder sinnvolles Design – machen Sie die Navigationssteuerungen auf allen Seiten oder Ansichten gleich.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#page_layouts"
          >Seitenlayouts</a
        >
        für Informationen zu modernen Markup-Layouts. Siehe auch
        <a
          href="/de/docs/Learn_web_development/Core/Text_styling/Styling_links#styling_links_as_buttons"
          >Links als Schaltflächen gestalten</a
        >
        für ein nützliches zugängliches Navigationsmenü-Beispiel.
      </td>
    </tr>
    <tr>
      <td>3.2.4 Konsistente Identifikation (AA)</td>
      <td>
        <p>
          Steuerelemente oder Komponenten, die dieselbe Funktionalität haben, sollten über verschiedene Seiten oder Ansichten hinweg auf dieselbe Weise identifiziert werden. Ein Währungsrechner, der auf jeder Seite einer Weltreise-Website erscheint, sollte zum Beispiel genau gleich sein, semantisch und in Bezug auf Beschriftungen.
        </p>
        <p>Wieder sinnvolles Design!</p>
      </td>
      <td>
        "Beschriftungen" können sich auf beschreibende Informationen in Textinhalten oder HTML-Formularbeschriftungen beziehen. Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
          >Bedeutungsvolle Textbeschriftungen</a
        >
        für mehr Informationen.
      </td>
    </tr>
    <tr>
      <td>3.2.5 Änderung auf Anforderung (AAA)</td>
      <td>
        <p>
          Kontextänderungen, die möglicherweise Benutzer verwirren oder desorientieren könnten, sollten nur erfolgen, wenn sie vom Benutzer angefordert werden, ODER der Benutzer sollte in der Lage sein, sie auszuschalten.
        </p>
        <p>
          Wenn Sie etwas brauchen, das die aktuelle Ansicht signifikant ändert (z. B. Inhalte oder Steuerungen), lassen Sie den Benutzer steuern, wann er diese Änderung vornehmen möchte (z. B. welche Seite angezeigt werden soll, wann zum nächsten Foto in der Galerie gewechselt wird...)
        </p>
        <p>
          Wenn Sie etwas wie ein Karussell auf einer Seite benötigen, bieten Sie eine Option, um es automatisch anzuhalten. Besser ist es, solche Funktionen nach Möglichkeit zu vermeiden.
        </p>
      </td>
 </tr>
      <tr>
      <td> 3.2.6 Konsistente Hilfe (A)</td>
      <td> <p> Webseiten, die Hilfemechanismen enthalten, einschließlich Selbsthilfeoptionen und menschlichen Kontaktdaten, die auf mehreren Webseiten wiederholt werden, müssen diese Mechanismen in der gleichen Reihenfolge auf allen Seiten platzieren, es sei denn, eine Änderung wird vom Benutzer initiiert.</p>
      <td> <p> Schauen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-help">dokumentierte konsistente Hilfe</a> für diesen Standard an, um mehr zu erfahren. </p>
      </td>
      </td>
      <tr>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Guideline 3.2 Predictable: Make Web pages appear and operate in predictable ways](https://www.w3.org/TR/WCAG21/#predictable).

## Richtlinie 3.3 — Eingabeunterstützung: Helfen Sie Benutzern, Fehler zu vermeiden und zu korrigieren

Diese Richtlinie konzentriert sich darauf, Benutzern zu helfen, korrekte Informationen einzugeben, wenn dies erforderlich ist, bei minimalen Fehlern.

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
      <td>3.3.1 Fehlererkennung (A)</td>
      <td>
        <p>
          Wenn ein Benutzer ein Formular ausfüllt oder zwischen Optionen wählt, sollte jeder festgestellte Fehler dem Benutzer klar gemeldet werden, zusammen mit dem Formular-Steuerelement, auf das sich der Fehler bezieht.
        </p>
        <p>
          Es ist ratsam, die Fehlererkennung und -behandlung auf Clientseite zu implementieren, sei es über HTML-Formularvalidierungsfunktionen oder JavaScript, je nachdem, was für Ihre Situation am besten geeignet ist. Wenn ein Fehler festgestellt wird, sollte dem Benutzer eine intuitive Fehlermeldung neben dem Formularfeld angezeigt werden, das den Fehler verursacht hat, um dem Benutzer zu helfen, seine Eingaben zu korrigieren. Für Nutzer von Bildschirmlesern können Sie aria-live-Regionen verwenden, um den Benutzer auf eine Änderung auf der Seite hinzuweisen.
        </p>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Serverseitige Validierung sollte <em>immer</em> neben Client-seitiger Validierung verwendet werden. Clientseitige Validierung lässt sich zu leicht deaktivieren oder auf andere Weise umgehen, daher kann man sich nicht alleine darauf verlassen.
          </p>
        </div>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Extensions/Forms/Form_validation"
          >Formulardatenvalidierung</a
        >
        für umfassende Validierungsinformationen, und
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#dynamic_content_updates"
          >WAI-ARIA: Dynamische Inhaltsaktualisierungen</a
        >
        für Informationen über Live-Regionen.
      </td>
    </tr>
    <tr>
      <td>3.3.2 Beschriftungen oder Anweisungen (A)</td>
      <td>
        <p>
          Klare Anweisungen sollten bereitgestellt werden, wenn eine Dateneingabe erforderlich ist. Wenn eine kurze Anweisung oder Eingabeaufforderung erforderlich ist, können Sie {{htmlelement("label")}}-Elemente für einzelne Eingaben wie Name oder Alter verwenden, eine Kombination aus {{htmlelement("label")}} und {{htmlelement("fieldset")}}/{{htmlelement("legend")}} für mehrere Eingaben, die zusammengehören (wie die Elemente eines Geburtsdatums oder einer Postanschrift).
        </p>
        <p>
          Wenn eine komplexere Erklärung erforderlich ist, können Sie immer erläuternde Absätze einfügen, oder vielleicht müssen Sie versuchen, Ihre Formulare intuitiver zu gestalten.
        </p>
      </td>
      <td>
        <ul>
          <li>
            <a
              href="/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
              >Bedeutungsvolle Textbeschriftungen</a
            >
          </li>
          <li>
            <a href="/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form"
              >Wie man ein HTML-Formular strukturiert</a
            >
          </li>
          <li>
            <a
              href="/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Text_labels_and_names"
              >Textbeschriftungen und Namen</a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3.3.3 Fehleranzeige (AA)</td>
      <td>
        <p>
          Wenn ein Fehler erkannt wird und Korrekturvorschläge bekannt sind, sollten diese dem Benutzer bereitgestellt werden (z. B. Alternativen vorschlagen, wenn der Benutzer einen Benutzernamen wählt und dieser bereits vergeben ist), es sei denn, dies würde ein Sicherheitsproblem verursachen (z. B. bei der Eingabe eines Passworts) oder ein Kontextproblem (z. B. wenn sie versuchen, eine Frage in einer Quiz-App zu beantworten).
        </p>
        <p>
          In solchen Fällen, wenn dies angemessen ist, werden Sie wahrscheinlich eine Kombination aus JavaScript und serverseitiger Funktionalität verwenden, um zu überprüfen, ob der Eintrag korrekt ist, und, falls nicht, welche sinnvollen Vorschläge dem Benutzer gegeben werden können. Solche Vorschläge sollten kontextuell nützlich dargestellt werden, genau wie Fehlermeldungen (siehe 3.3.1).
        </p>
      </td>
      <td>Derzeit keine Tutorial-Vorschläge.</td>
    </tr>
    <tr>
      <td>3.3.4 Fehlervermeidung (Rechtlich, Finanziell, Daten) (AA)</td>
      <td>
        <p>
          Im Falle von Formularen, die mit der Eingabe sensibler Daten verbunden sind (wie rechtliche Vereinbarungen, E-Commerce-Transaktionen oder persönliche Daten), sollte mindestens eines der Folgenden zutreffen:
        </p>
        <ul>
          <li>Eingaben sind umkehrbar.</li>
          <li>
            Daten werden auf Fehler überprüft, und dem Benutzer wird die Möglichkeit gegeben, sie zu korrigieren.
          </li>
          <li>
            Ein Mechanismus ist verfügbar, um Informationen vor der endgültigen Übermittlung zu bestätigen und zu korrigieren.
          </li>
        </ul>
      </td>
      <td>
        <p>
          <strong>Umkehrbar</strong> — für jede Ansicht, in der Daten eingegeben werden können, bieten Sie eine gleichwertige Ansicht, die Ihnen erlaubt, einen Eintrag zu bearbeiten oder sogar zu löschen, sofern passend (siehe z. B. <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django">Django-Web-Framework</a>).
        </p>
        <p>
          <strong>Datenüberprüfung</strong> — wie in 3.3.1 behandelt, sollte eine Kombination aus clientseitiger und serverseitiger Validierung verwendet werden, um Fehler zu erkennen und dem Benutzer hilfreiche Nachrichten anzuzeigen, die es ihm ermöglichen, seine Eingaben zu korrigieren.
        </p>
        <p>
          <strong>Bestätigen und korrigieren</strong> — wo angemessen, sollte der Benutzer nach dem Ausfüllen einer Reihe von Formularfeldern zur Ausführung einer Aufgabe (wie den Kauf eines Produkts) einen Bestätigungsbildschirm sehen, auf dem er seine Eingaben überprüfen und alles korrigieren kann, was nicht richtig aussieht. Dieses Muster wird häufig auf E-Commerce-Sites wie Amazon verwendet.
        </p>
      </td>
    </tr>
    <tr>
      <td>3.3.5 Kontextsensitive Hilfe ist verfügbar (AAA)</td>
      <td>
        Stellen Sie Anweisungen und andere geeignete Hinweise im Kontext bereit, um das Ausfüllen und Übermitteln von Formularen zu erleichtern.
      </td>
      <td>
        Dies baut im Wesentlichen auf 3.3.1 und anderen ähnlichen Kriterien auf, erfordert jedoch umfassendere kontextuelle Hilfeinformationen und -dienste, z. B. das Bereitstellen eines dedizierten Links zu einer Hilfeseite oder einem -dienst auf jeder Seite, das Bereitstellen von Beispielen, die zeigen, wie der erfolgreiche Abschluss aussehen sollte.
      </td>
    </tr>
    <tr>
      <td>3.3.6 Fehlervermeidung (Alle) (AAA)</td>
      <td>
        Dieses Prinzip baut auf 3.3.4 auf und erweitert dessen Anforderungen auf alle Benutzereingabesituationen, nicht nur auf solche, bei denen es um sensible Daten geht.
      </td>
      <td>Siehe erneut 3.3.4.</td>
      </tr>
      <tr>
      <td> 3.3.7 Überflüssige Eingabe (A) </td>
      <td>
      Informationen, die erforderlich sind und zuvor vom Benutzer im gleichen Prozess oder Benutzerfluss eingegeben oder bereitgestellt wurden, sind entweder automatisch ausgefüllt oder dem Benutzer aus einer Liste von Optionen auswählbar, es sei denn, die erneute Eingabe der Informationen ist essentiell oder aus Sicherheitsgründen erforderlich, oder wenn die Informationen nicht mehr gültig sind.
      </td>
      <td>Sehen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry">Erklärung zur überflüssigen Eingabe</a> an, um mehr zu erfahren.</td>
      </tr>
      <tr>
      <td> 3.3.8 Zugängliche Authentifizierung (Minimum) (AA)
      </td>
      <td>
Kognitive Funktionstests, wie das Merken eines Passworts, sind in keinem Schritt eines Authentifizierungsprozesses erforderlich, es sei denn, es wird eine Alternative bereitgestellt, wie z.B. ein Objekt oder persönliches Content-Erkennung (z.B. Bilder, Videos und Audio), oder ein Mechanismus zur Unterstützung (z.B. Kopieren und Einfügen und automatisches Speichern von Passwörtern).
      </td>
      <td> Sehen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum">dokumentierte zugängliche Authentifizierung</a> für diesen Standard an, um mehr zu erfahren. </td>
    </tr>
    <tr>
 <td> 3.3.9 Zugängliche Authentifizierung (Erweitert) (AAA) </td>
    <td>
Ein kognitiver Funktionstest, wie das Merken eines Passworts, darf in keinem Schritt eines Authentifizierungsprozesses erforderlich sein, ohne eine Alternative bereitzustellen, die nicht auf einem kognitiven Funktionstest basiert oder einen Mechanismus bietet, der dem Benutzer bei der Durchführung des kognitiven Funktionstests hilft. Authentifizierungstests, die vom Benutzer verlangen, Objekte zu erkennen oder nicht-textliche Inhalte zu identifizieren, die der Benutzer der Website zur Verfügung gestellt hat, sind erlaubt.
    </td>
<td> Sehen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced">erweiterte dokumentierte zugängliche Authentifizierung (AAA)</a> an, um mehr zu erfahren.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Guideline 3.3 Input Assistance: Help users avoid and correct mistakes](https://www.w3.org/TR/WCAG21/#input-assistance).

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  3. Verständlich
  4. [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)
