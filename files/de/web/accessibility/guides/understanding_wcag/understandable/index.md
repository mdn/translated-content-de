---
title: Verständlich
slug: Web/Accessibility/Guides/Understanding_WCAG/Understandable
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so verfassen können, dass sie den Erfolgskriterien des **Verständlich**-Prinzips der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 entsprechen. Das Prinzip Verständlich besagt, dass Informationen und die Bedienung von Benutzeroberflächen verständlich sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Verständlich und seine Richtlinien sowie Erfolgskriterien nachzulesen, siehe [Prinzip 3: Verständlich — Informationen und die Bedienung von Benutzeroberflächen müssen verständlich sein](https://www.w3.org/TR/WCAG21/#understandable).

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
        Die Standardsprache jeder Webseite sollte durch Code erkennbar sein. Dies ist wichtig, um sicherzustellen, dass der Leser auf einer Seite landet, die in einer für ihn geeigneten Sprache verfasst ist. Der einfachste Weg, dies zu erreichen, besteht darin, das <a href="/de/docs/Web/HTML/Global_attributes/lang">lang</a>-Attribut im {{htmlelement("html")}}-Element der Seite zu setzen, indem ihm ein Wert zugewiesen wird, der am besten die Sprache repräsentiert, in der die Seite verfasst ist.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#setting_the_primary_language_of_the_document"
          >Festlegung der primären Sprache des Dokuments</a
        >.
      </td>
    </tr>
    <tr>
      <td>3.1.2 Sprache der Teile (AA)</td>
      <td>
        <p>
          In Fällen, in denen der Inhalt einer Seite Wörter oder Phrasen in einer anderen Sprache als der Hauptsprache enthält, verwenden Sie das <a href="/de/docs/Web/HTML/Global_attributes/lang">lang</a>-Attribut auf einem um das betreffende Wort gewickelten Element (z. B. ein {{htmlelement("span")}}, wenn kein semantisches Element verfügbar ist), um eine geeignete Sprache dafür festzulegen.
        </p>
        <p>
          Sie müssen keine andere Sprache für Wörter oder Phrasen festlegen, die unabhängig von der Sprache identisch sind (zum Beispiel Eigennamen, technische Begriffe, die nicht Teil einer bestimmten Sprache sind).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.3 Ungewöhnliche Wörter (AAA)</td>
      <td>
        Wo technische Begriffe, Jargon oder Idiome/Slang verwendet werden, sollten Definitionen für solche Phrasen/Wörter bereitgestellt werden. Ihre Website sollte ein Glossar bereitstellen, das Definitionen solcher Wörter/Begriffe enthält, auf die Sie dann verlinken können, wenn sie erscheinen, oder zumindest irgendwo im umgebenden Text oder in einer <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists#description_lists">Beschreibungsliste</a> am Ende der Seite Definitionen bereitstellen.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.4 Abkürzungen (AAA)</td>
      <td>
        <p>
          Wo Abkürzungen verwendet werden, sollten Sie diese erweitern oder eine Definition bereitstellen, wie erforderlich.
        </p>
        <p>
          Das {{htmlelement("abbr")}}-Element wird oft als bevorzugte Methode angesehen, um eine Erweiterung für eine Abkürzung bereitzustellen — es nimmt ein <a href="/de/docs/Web/HTML/Global_attributes/title">title</a>-Attribut, das die Erweiterung enthält, und dies erscheint, wenn man mit der Maus über das Akronym fährt. Allerdings sind die Inhalte des Title-Attributs nicht per Tastatur zugänglich und werden von Screenreadern nicht zuverlässig vorgelesen. Ein besserer Weg, damit umzugehen, besteht darin, erneut Links zu Glossar-Seiten mit der Erklärung und Erweiterung des Akronyms bereitzustellen oder sie zumindest im umgebenden Kontexttext einzubeziehen.
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
          Wenn Text bereitgestellt wird, der ein höheres Lesestufen-Niveau als das untere Sekundarschulniveau (typischerweise Kinder im Alter von etwa 11-14 Jahren) erfordert, stellen Sie ergänzendes Erklärungsmaterial zur Verfügung, um Menschen zu helfen, die ihn nicht lesen können, oder bieten Sie eine alternative Version an, die auf dem unteren Sekundarschulniveau verfasst ist.
        </p>
        <p>
          Das bedeutet nicht, dass alle Themen von jedem verstanden werden sollten, sondern dass der Schreibstil für jeden zugänglich sein sollte. Es ist besser, alle Inhalte auf unterem Sekundarschulniveau zu verfassen, selbst technische Dokumentationen wie Programmieranleitungen, es sei denn, es gibt einen guten Grund, dies nicht zu tun (z. B. ein alternativer Stil für poetische Effekte) oder sie müssen in einem strengen Stil verfasst werden (z. B. W3C-Spezifikationen).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.6 Aussprache (AAA)</td>
      <td>
        <p>
          Ein Mechanismus sollte bereitgestellt werden, der Nutzern Zugriff auf die Aussprache von Wörtern gibt, bei denen diese notwendig ist, um den Inhalt vollständig zu verstehen.
        </p>
        <p>
          Das HTML-{{htmlelement("audio")}}-Element kann verwendet werden, um eine Steuerung zu erstellen, die es dem Leser ermöglicht, eine Audiodatei mit der korrekten Aussprache abzuspielen. Außerdem ist es sinnvoll, nach schwierigen Wörtern eine textuelle Ausspracheanleitung hinzuzufügen, ähnlich wie in Wörterbucheinträgen.
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
          >Ausspracheanleitung für Englisch-Wörterbücher</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.1 Lesbar: Machen Sie Textinhalte lesbar und verständlich](https://www.w3.org/TR/WCAG21/#readable).

## Richtlinie 3.2 — Vorhersehbar: Lassen Sie Webseiten vorhersehbar erscheinen und funktionieren

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
          Wenn ein Steuerelement oder eine andere Seitenfunktion den Fokus erhält, sollte sich der Kontext nicht in einer Weise ändern, die den Benutzer verwirren oder desorientieren könnte.
        </p>
        <p>
          Dies ist eine Frage des vernünftigen Designs — Menschen möchten nicht, dass sie von Oberflächen überrascht werden; sie wollen, dass alles intuitiv ist und sich erwartungsgemäß verhält. Beispielsweise sollte das Fokussieren einer Navigationsmenüoption die angezeigte Seite nicht ändern — es sollte aktiviert werden, bevor sich die Anzeige ändert.
        </p>
      </td>
      <td>
        Das [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis eines <code>Element</code> enthält einige nützliche Informationen. Siehe auch
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Tastaturzugänglichkeit wieder einbauen</a
        >
        für nützliche Implementierungsideen.
      </td>
    </tr>
    <tr>
      <td>3.2.2 Bei Eingabe (A)</td>
      <td>
        <p>
          Wenn Daten in ein Steuerelement eingegeben oder eine Einstellung geändert wird, sollte sich der Kontext nicht unerwartet ändern. Der Benutzer sollte gewarnt bzw. über die bevorstehende Änderung informiert werden, bevor sie eintritt.
        </p>
        <p>
          Auch hier sollte vernünftiges Design umgesetzt werden. Beispielsweise sollte der Benutzer aufgefordert werden, diese Aktion zu bestätigen oder seine Arbeit zu speichern, falls erforderlich, wenn das Drücken einer Taste dazu führt, dass die Anwendung die aktuelle Ansicht verlässt.
        </p>
      </td>
      <td>
        Das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis ist hierbei nützlich.
      </td>
    </tr>
    <tr>
      <td>3.2.3 Konsistente Navigation (AA)</td>
      <td>
        <p>
          Der Navigationsmenü-/Steuerungsstil und die Positionierung sollten zwischen verschiedenen Seiten oder Ansichten einer Webseite konsistent sein, und die vorhandenen Elemente sollten in derselben Reihenfolge erscheinen, selbst wenn beispielsweise neue Elemente hinzugefügt werden. Wenn der Benutzer eine Änderung initiiert hat, z. B. die Auswahl eines anderen Farbschemas oder einer anderen Position für die Navigation, sollte seine Wahl auf allen Seiten respektiert werden.
        </p>
        <p>
          Auch hier ist ein vernünftiges Design gefragt — machen Sie die Navigationssteuerungen auf allen Seiten oder Ansichten gleich.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#page_layouts"
          >Seitenlayouts</a
        >
        für Informationen zu modernem Markup für Layouts. Siehe auch
        <a
          href="/de/docs/Learn_web_development/Core/Text_styling/Styling_links#styling_links_as_buttons"
          >Stil von Links als Buttons</a
        >
        für ein nützliches Beispiel für ein zugängliches Navigationsmenü.
      </td>
    </tr>
    <tr>
      <td>3.2.4 Konsistente Identifikation (AA)</td>
      <td>
        <p>
          Steuerelemente oder Komponenten, die dieselbe Funktionalität haben, sollten auf verschiedenen Seiten oder Ansichten auf die gleiche Weise identifiziert werden. Ein Währungsumrechner, der auf jeder Seite einer Website für Weltreisen erscheint, sollte beispielsweise genau gleich sein, semantisch und bezüglich der Bezeichnungen.
        </p>
        <p>Erneut, vernünftiges Design!</p>
      </td>
      <td>
        "Bezeichnungen" können sich auf beschreibende Informationen im Textinhalt oder HTML-Formularbeschriftungen beziehen. Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
          >Bedeutungsvolle Textbeschriftungen</a
        >
        für weitere Informationen.
      </td>
    </tr>
    <tr>
      <td>3.2.5 Änderung auf Anfrage (AAA)</td>
      <td>
        <p>
          Kontextänderungen, die möglicherweise Benutzer verwirren oder desorientieren könnten, sollten nur dann stattfinden, wenn sie vom Benutzer angefordert wurden, ODER der Benutzer sollte sie deaktivieren können.
        </p>
        <p>
          Wenn Sie etwas haben, das die aktuelle Ansicht erheblich ändert (z. B. Inhalt oder Steuerelemente), lassen Sie den Benutzer kontrollieren, wann er diese Änderung vornehmen möchte (z. B. welche Seite angezeigt werden soll, wann zum nächsten Foto in der Galerie fortgeschritten werden soll...).
        </p>
        <p>
          Wenn Sie etwas wie ein Karussell auf einer Seite haben müssen, bieten Sie eine Option an, um es nicht automatisch voranzutreiben. Besser ist es, auf solche Funktionen zu verzichten, wenn möglich.
        </p>
      </td>
 </tr>
      <tr>
      <td> 3.2.6 Konsistente Hilfe (A)</td>
      <td> <p> Webseiten, die Hilfemechanismen wie Selbsthilfeoptionen und menschliche Kontaktdaten enthalten, die auf mehreren Webseiten wiederholt werden, müssen diese Mechanismen in derselben Reihenfolge auf allen Seiten platzieren, es sei denn, eine Änderung wird vom Benutzer initiiert.</p>
      <td> <p> Sehen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-help">Dokumentation zur konsistenten Hilfe</a> für diese Norm an, um mehr zu erfahren. </p>
      </td>
      </td>
      <tr>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.2 Vorhersehbar: Lassen Sie Webseiten vorhersehbar erscheinen und funktionieren](https://www.w3.org/TR/WCAG21/#predictable).

## Richtlinie 3.3 — Eingabeunterstützung: Helfen Sie Benutzern, Fehler zu vermeiden und zu korrigieren

Diese Richtlinie zielt darauf ab, Benutzern zu helfen, bei erforderlicher Eingabe mit minimalen Fehlern korrekte Informationen einzugeben.

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
          Wenn ein Benutzer ein Formular ausfüllt oder zwischen Optionen wählt, sollte jeder erkannte Fehler dem Benutzer klar gemeldet werden, zusammen mit der Formulareingabe, auf die sich der Fehler bezieht.
        </p>
        <p>
          Es ist ratsam, clientseitige Fehlererkennung und -behandlung über HTML-Formularvalidierungsfunktionen und/oder JavaScript zu implementieren, je nachdem, was für Ihre Situation am besten geeignet ist. Wenn ein Fehler erkannt wird, sollte eine intuitive Fehlermeldung neben der problematischen Formulareingabe angezeigt werden, um dem Benutzer bei der Korrektur seiner Eingaben zu helfen. Für Screenreader-Benutzer können Sie aria-live-Bereiche verwenden, um den Benutzer auf eine Änderung der Seite hinzuweisen.
        </p>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Serverseitige Validierung sollte <em>immer</em> zusammen mit clientseitiger Validierung verwendet werden. Clientseitige Validierung ist zu einfach zu deaktivieren oder anderweitig zu umgehen, daher kann man sich allein nicht darauf verlassen.
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
        für Informationen zu Live-Bereichen.
      </td>
    </tr>
    <tr>
      <td>3.3.2 Beschriftungen oder Anleitungen (A)</td>
      <td>
        <p>
          Klare Anleitungen sollten bereitgestellt werden, wenn Dateneingaben erforderlich sind. Wenn eine kurze Anweisung oder Eingabeaufforderung erforderlich ist, können Sie {{htmlelement("label")}}-Elemente für einzelne Eingaben wie Name oder Alter verwenden, eine Kombination aus {{htmlelement("label")}}s und {{htmlelement("fieldset")}}s/{{htmlelement("legend")}}s für mehrere zusammengehörende Eingaben (wie die Elemente eines Geburtsdatums oder einer Postadresse).
        </p>
        <p>
          Wenn eine komplexere Erklärung erforderlich ist, können Sie immer erläuternde Absätze hinzufügen, oder Sie müssen möglicherweise versuchen, Ihre Formulare intuitiver zu gestalten.
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
              >Textbeschriftungen und -namen</a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3.3.3 Fehlerhinweise (AA)</td>
      <td>
        <p>
          Wenn ein Fehler erkannt wird und Korrekturvorschläge bekannt sind, sollten diese dem Benutzer mitgeteilt werden (z. B. Vorschläge zu Alternativen, wenn der Benutzer einen Benutzernamen auswählt, der bereits vergeben ist), es sei denn, dies würde ein Sicherheitsproblem (z. B. Eingabe eines Passworts) oder ein Kontextproblem (z. B. beim Versuch, eine Frage in einer Quiz-App zu beantworten) verursachen.
        </p>
        <p>
          In solchen Fällen verwenden Sie wahrscheinlich eine Kombination aus JavaScript und serverseitiger Funktionalität, um zu überprüfen, ob die Eingabe korrekt ist, und wenn nicht, welche geeigneten Vorschläge dem Benutzer gegeben werden können. Solche Vorschläge sollten nützlich im Kontext angezeigt werden, genau wie Fehlermeldungen (siehe 3.3.1).
        </p>
      </td>
      <td>Bisher keine Tutorialvorschläge.</td>
    </tr>
    <tr>
      <td>3.3.4 Fehlervermeidung (Rechtlich, Finanziell, Daten) (AA)</td>
      <td>
        <p>
          Im Falle von Formularen, die die Eingabe sensibler Daten betreffen (wie rechtliche Vereinbarungen, E-Commerce-Transaktionen oder persönliche Daten), sollte zumindest eines der folgenden Kriterien erfüllt sein:
        </p>
        <ul>
          <li>Einsendungen sind umkehrbar.</li>
          <li>
            Daten werden auf Fehler überprüft, und der Benutzer erhält die Gelegenheit, diese zu korrigieren.
          </li>
          <li>
            Ein Mechanismus ist verfügbar, um Informationen vor der endgültigen Einreichung zu bestätigen und zu korrigieren.
          </li>
        </ul>
      </td>
      <td>
        <p>
          <strong>Umkehrbar</strong> — für jede Ansicht, in der Daten eingegeben werden können, stellen Sie eine gleichwertige Ansicht bereit, die Ihnen erlaubt, einen Eintrag zu bearbeiten oder sogar zu löschen, soweit dies angemessen ist (siehe zum Beispiel <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django">Django Web Framework</a>).
        </p>
        <p>
          <strong>Datenüberprüfung</strong> — wie in 3.3.1 behandelt, sollte eine Kombination aus clientseitiger und serverseitiger Validierung verwendet werden, um Fehler zu erkennen und hilfreiche Nachrichten an den Benutzer zu senden, damit er seine Eingaben korrigieren kann.
        </p>
        <p>
          <strong>Bestätigen und korrigieren</strong> — wo es angemessen ist, sollte dem Benutzer nach dem Ausfüllen einer Reihe von Formularfeldern zur Durchführung einer Aufgabe (z. B. Kauf eines Produkts) eine Bestätigungsseite angezeigt werden, auf der er seine Eingaben überprüfen und alles korrigieren kann, was nicht korrekt erscheint. Dieses Muster wird häufig auf E-Commerce-Websites wie Amazon verwendet.
        </p>
      </td>
    </tr>
    <tr>
      <td>3.3.5 Kontext-sensitive Hilfe ist verfügbar (AAA)</td>
      <td>
        Bieten Sie Anleitungen und andere geeignete Hinweise im Kontext an, um die Formularausfüllung und -einreichung zu unterstützen.
      </td>
      <td>
        Dies baut wirklich nur auf 3.3.1 und anderen ähnlichen Kriterien auf, erfordert jedoch gründlichere kontextbezogene Hilfsinformationen und -dienste, z. B. das Bereitstellen eines dedizierten Links zu einer Hilfeseite oder einem Hilfsdienst auf jeder Seite, das Bereitstellen von Beispielen, die zeigen, wie ein erfolgreiches Ausfüllen aussehen sollte.
      </td>
    </tr>
    <tr>
      <td>3.3.6 Fehlervermeidung (Alle) (AAA)</td>
      <td>
        Dieses Prinzip baut auf 3.3.4 auf und erweitert seine Anforderungen auf alle Benutzereingabesituationen, nicht nur auf solche, in denen sensible Daten beteiligt sind.
      </td>
      <td>Siehe erneut 3.3.4.</td>
      </tr>
      <tr>
      <td> 3.3.7 Redundante Eingabe (A) </td>
      <td>
      Informationen, die für erforderlich gehalten werden und die vom Benutzer im gleichen Prozess oder Benutzerablauf zuvor eingegeben oder bereitgestellt wurden, werden entweder automatisch ausgefüllt oder dem Benutzer zur Auswahl aus einer Liste von Optionen angeboten, es sei denn, das erneute Eingeben der Informationen ist wesentlich oder aus Sicherheitsgründen erforderlich oder die Informationen sind nicht mehr gültig.
      </td>
      <td>Sehen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry">Verständnis der redundanten Eingabe</a> an, um mehr zu erfahren.</td>
      </tr>
      <tr>
      <td> 3.3.8 Barrierefreie Authentifizierung (Minimum) (AA)
      </td>
      <td>
Kognitive Funktionstests, wie das Erinnern eines Passworts, sind für keinen Schritt in einem Authentifizierungsprozess erforderlich, es sei denn, es wird eine Alternative bereitgestellt, wie z. B. ein Erkennungsmechanismus für Objekte oder persönliche Inhalte (z. B. Bilder, Videos und Audio) oder ein Mechanismus zur Unterstützung (z. B. Kopieren und Einfügen und automatisches Speichern von Passwörtern).
      </td>
      <td> Sehen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum">Dokumentation zur barrierefreien Authentifizierung</a> für diese Norm an, um mehr zu erfahren. </td>
    </tr>
    <tr>
 <td> 3.3.9 Barrierefreie Authentifizierung (Erweitert) (AAA) </td>
    <td>
Ein kognitiver Funktionstest, wie das Erinnern an ein Passwort, darf für keinen Schritt in einem Authentifizierungsprozess verlangt werden, ohne dass eine alternative Möglichkeit geboten wird, die nicht auf einem kognitiven Funktionstest beruht, oder einen Mechanismus bereitstellen, der den Benutzer beim Abschluss des kognitiven Funktionstests unterstützt. Authentifizierungsprüfungen, die vom Benutzer verlangen, Objekte zu erkennen oder nicht-textlichen Inhalt zu identifizieren, den der Benutzer der Website bereitgestellt hat, sind erlaubt.
    </td>
<td> Schauen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced">erweiterte Dokumentation zur barrierefreien Authentifizierung (AAA)</a> an, um mehr zu erfahren.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.3 Eingabeunterstützung: Helfen Sie Benutzern, Fehler zu vermeiden und zu korrigieren](https://www.w3.org/TR/WCAG21/#input-assistance).

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  3. Verständlich
  4. [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)
