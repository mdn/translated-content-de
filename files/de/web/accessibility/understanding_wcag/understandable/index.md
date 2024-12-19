---
title: Verständlich
slug: Web/Accessibility/Understanding_WCAG/Understandable
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{AccessibilitySidebar}}

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so schreiben, dass sie den Erfolgskriterien des Prinzips **Verständlich** der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 entsprechen. Verständlich besagt, dass Informationen und die Bedienung der Benutzeroberfläche verständlich sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Verständlich, dessen Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 3: Verständlich — Informationen und die Bedienung der Benutzeroberfläche müssen verständlich sein](https://www.w3.org/TR/WCAG21/#understandable).

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
        Die Standardsprache jeder Webseite sollte über den Code erkennbar sein. Dies ist wichtig, um sicherzustellen, dass der Leser auf einer Seite landet, die in einer für ihn geeigneten Sprache verfasst ist. Der einfachste Weg, dies zu erreichen, besteht darin, das <a href="/de/docs/Web/HTML/Global_attributes/lang">lang</a>-Attribut am {{htmlelement("html")}}-Element der Seite zu setzen und ihm einen Wert zu geben, der dem Sprachcode entspricht, der die Sprache der Seite am besten repräsentiert.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#setting_the_primary_language_of_the_document"
          >Die primäre Sprache des Dokuments festlegen</a
        >.
      </td>
    </tr>
    <tr>
      <td>3.1.2 Sprache der Teile (AA)</td>
      <td>
        <p>
          In Fällen, in denen der Inhalt einer Seite Wörter oder Ausdrücke enthält, die in einer anderen Sprache als der Hauptsprache sind, verwenden Sie das
          <a href="/de/docs/Web/HTML/Global_attributes/lang">lang</a>-Attribut an einem Element, das um den betreffenden Begriff herum platziert ist (z.B. eine {{htmlelement("span")}}, wenn kein semantisches Element verfügbar ist), um eine geeignete Sprache dafür festzulegen.
        </p>
        <p>
          Sie müssen keine andere Sprache für Wörter oder Phrasen festlegen, die unabhängig von der Sprache dieselben sind (zum Beispiel Eigennamen oder technische Begriffe, die nicht zu einer bestimmten Sprache gehören).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.3 Ungewöhnliche Wörter (AAA)</td>
      <td>
        Wo technische Begriffe, Fachjargon oder Redewendungen/Slang verwendet werden, sollten Definitionen für solche Ausdrücke/Wörter bereitgestellt werden. Ihre Website sollte ein Glossar mit Definitionen solcher Wörter/Begriffe anbieten, auf das Sie verlinken können, wenn sie erscheinen, oder zumindest Definitionen irgendwo im umgebenden Text, oder in einer
        <a
          href="/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#description_lists"
          >Beschreibungsliste</a
        >
        am Seitenende bereitstellen.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.4 Abkürzungen (AAA)</td>
      <td>
        <p>
          Wenn Abkürzungen verwendet werden, sollten Sie eine Erläuterung dieser bereitstellen oder eine Definition, wenn erforderlich.
        </p>
        <p>
          Das {{htmlelement("abbr")}}-Element wird oft als bevorzugter Weg angesehen, eine Erläuterung für eine Abkürzung bereitzustellen — es nimmt ein <a href="/de/docs/Web/HTML/Global_attributes/title">title</a>-Attribut auf, das die Erklärung enthält, und erscheint, wenn das Akronym mit der Maus berührt wird. Allerdings sind die Inhalte des Titels nicht über die Tastatur zugänglich, noch werden sie zuverlässig von Bildschirmlesern vorgelesen. Ein besserer Weg, damit umzugehen, ist es, erneut Links zu Glossarseiten zu geben, die die Erklärung und Erläuterung des Akronyms enthalten, oder sie zumindest im umgebenden Text im Kontext einzufügen.
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
          Wenn Text bereitgestellt wird, der eine höhere Lesestufe als die untere Sekundarstufe (normalerweise Kinder im Alter von 11-14 Jahren) erfordert, sollten Sie zusätzliches Erklärmaterial bereitstellen, um Menschen zu helfen, die ihn nicht lesen können, oder eine alternative Version anbieten, die auf dem Niveau der unteren Sekundarstufe geschrieben ist.
        </p>
        <p>
          Das bedeutet nicht, dass alle Themen von jedem verstanden werden sollten, aber dass der Schreibstil für jeden zugänglich sein sollte. Es ist besser, alle Inhalte auf dem Niveau der unteren Sekundarstufe zu schreiben, auch technische Dokumentation wie Programmieranleitungen, es sei denn, es gibt einen guten Grund dies nicht zu tun (z.B. ein alternativer Stil für poetische Effekte), oder sie müssen in einem strengen Stil geschrieben werden (z.B. W3C Spezifikationen).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.6 Aussprache (AAA)</td>
      <td>
        <p>
          Ein Mechanismus sollte bereitgestellt werden, der den Nutzern den Zugriff auf die Aussprache von Wörtern ermöglicht, wenn diese erforderlich ist, um den Inhalt vollständig zu verstehen.
        </p>
        <p>
          Das HTML {{htmlelement("audio")}}-Element kann verwendet werden, um eine Steuerung zu erstellen, die es dem Leser ermöglicht, eine Audiodatei abzuspielen, die die korrekte Aussprache enthält. Es ist auch sinnvoll, einen schriftlichen Ausspracheführer nach schwierigen Wörtern einzufügen, ähnlich wie in Wörterbucheinträgen.
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
          >Ausspracheführer für das Englische Wörterbuch</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.1 Lesbar: Machen Sie Textinhalte lesbar und verständlich](https://www.w3.org/TR/WCAG21/#readable).

## Richtlinie 3.2 — Vorhersehbar: Webseiten sollen in vorhersehbarer Weise erscheinen und funktionieren

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
          Wenn ein Steuerelement oder eine andere Seitenfunktion den Fokus erhält, sollte der Kontext nicht so geändert werden, dass der Benutzer verwirrt oder desorientiert wird.
        </p>
        <p>
          Dies ist eine Frage des sinnvollen Designs — Menschen wollen nicht, dass Benutzeroberflächen sie überraschen; sie wollen, dass Dinge intuitiv sind und sich wie erwartet verhalten. Zum Beispiel sollte die Fokussierung auf eine Navigationsmenüoption die angezeigte Seite nicht ändern — es sollte aktiviert werden, bevor die Anzeige wechselt.
        </p>
      </td>
      <td>
        <code>Element</code>s [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis enthält einige nützliche Informationen. Siehe auch
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Tastaturzugänglichkeit wiederherstellen</a
        >
        für einige nützliche Implementierungsideen.
      </td>
    </tr>
    <tr>
      <td>3.2.2 Bei Eingabe (A)</td>
      <td>
        <p>
          Wenn Daten in ein Steuerelement eingegeben werden oder eine Einstellung geändert wird, sollte der Kontext nicht unerwartet geändert werden. Der Benutzer sollte gewarnt/rechtszeitig über die bevorstehende Änderung informiert werden, bevor sie eintritt.
        </p>
        <p>
          Auch hier sollte sinnvolles Design umgesetzt werden. Zum Beispiel, wenn das Drücken eines Buttons die Anwendung dazu bringt, die aktuelle Ansicht zu verlassen, sollte der Benutzer gefragt werden, ob er diese Aktion bestätigen möchte, seine Arbeit, falls sinnvoll, speichern usw.
        </p>
      </td>
      <td>
        Das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis ist hier nützlich.
      </td>
    </tr>
    <tr>
      <td>3.2.3 Konsistente Navigation (AA)</td>
      <td>
        <p>
          Der Stil und die Positionierung des Navigationsmenüs/der Steuerung sollten auf verschiedenen Seiten oder Ansichten einer Webseite konsistent sein, und die vorhandenen Elemente sollten in derselben Reihenfolge erscheinen, auch wenn zum Beispiel neue Elemente hinzugefügt werden. Wenn der Benutzer eine Änderung initiiert hat, z.B. die Wahl eines anderen Farbschemas oder der Position der Navigation, sollte diese Wahl auf allen Seiten respektiert werden.
        </p>
        <p>
          Auch hier: sinnvolles Design — machen Sie die Navigationselemente auf allen Seiten oder Ansichten gleich.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#page_layouts"
          >Seitenlayouts</a
        >
        für Informationen zu modernen Markup für Layouts. Siehe auch
        <a
          href="/de/docs/Learn_web_development/Core/Text_styling/Styling_links#styling_links_as_buttons"
          >Links als Buttons gestalten</a
        >
        für ein nützliches zugängliches Navigationsmenü-Beispiel.
      </td>
    </tr>
    <tr>
      <td>3.2.4 Konsistente Identifikation (AA)</td>
      <td>
        <p>
          Steuerelemente oder Komponenten, die dieselbe Funktionalität haben, sollten auf verschiedenen Seiten oder Ansichten auf dieselbe Weise identifiziert werden. Ein Währungsumrechner, der auf jeder Seite einer Webseite über Weltreisen erscheint, sollte zum Beispiel genau gleich sein, semantisch und in Bezug auf Beschriftungen.
        </p>
        <p>Nochmals, sinnvolles Design!</p>
      </td>
      <td>
        „Labels“ können sich auf beschreibende Informationen in Textinhalten oder HTML-Formularbeschriftungen beziehen. Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
          >Aussagekräftige Textbeschriftungen</a
        >
        für mehr Informationen.
      </td>
    </tr>
    <tr>
      <td>3.2.5 Änderung auf Anfrage (AAA)</td>
      <td>
        <p>
          Änderungen im Kontext, die Benutzer möglicherweise verwirren oder desorientieren könnten, sollten nur dann erfolgen, wenn dies vom Benutzer angefordert wird ODER der Benutzer sollte in der Lage sein, sie auszuschalten.
        </p>
        <p>
          Wenn Sie etwas haben müssen, das die aktuelle Ansicht erheblich ändert (z.B. Inhalte oder Steuerungen), lassen Sie den Benutzer kontrollieren, wann sie diese Änderung vornehmen möchten (z.B. welche Seite angezeigt werden soll, wann zum nächsten Foto in der Galerie gewechselt werden soll ...).
        </p>
        <p>
          Wenn Sie etwas wie ein Karussell auf einer Seite haben müssen, bieten Sie eine Option, um das automatische Weiterblättern zu stoppen. Besser ist es, solche Funktionalität zu vermeiden, wenn möglich.
        </p>
      </td>
 </tr>
      <tr>
      <td> 3.2.6 Konsistente Hilfe (A)</td>
      <td> <p> Webseiten, die Hilfsmechanismen, einschließlich Selbsthilfeoptionen und menschlichen Kontaktdaten, die auf mehreren Webseiten wiederholt werden, enthalten, müssen diese Mechanismen in derselben Reihenfolge auf allen Seiten platzieren, es sei denn, eine Änderung wird vom Benutzer initiiert.</p>
      <td> <p> Sehen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-help">konsistente Hilfedokumentation</a> zu diesem Standard an, um mehr zu erfahren. </p>
      </td>
      </td>
      <tr>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.2 Vorhersehbar: Webseiten sollen in vorhersehbarer Weise erscheinen und funktionieren](https://www.w3.org/TR/WCAG21/#predictable).

## Richtlinie 3.3 — Eingabehilfe: Benutzern helfen, Fehler zu vermeiden und zu korrigieren

Diese Richtlinie konzentriert sich darauf, Benutzern zu helfen, erforderliche Informationen so einzugeben, dass sie möglichst wenige Fehler machen.

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
          Wenn ein Benutzer ein Formular ausfüllt oder zwischen Optionen wählt, sollten erkannte Fehler klar dem Benutzer mitgeteilt werden, zusammen mit dem Formularsteuerelement, auf das sich der Fehler bezieht.
        </p>
        <p>
          Es ist ratsam, eine clientseitige Fehlererkennung und -behandlung über HTML-Formularvalidierungsfunktionen und/oder JavaScript zu implementieren, je nachdem, was für Ihre Situation am besten ist. Wenn ein Fehler erkannt wird, wird eine intuitive Fehlermeldung neben dem Formularfeld angezeigt, das dafür verantwortlich ist, um dem Benutzer zu helfen, seine Eingaben zu korrigieren. Für Benutzer von Bildschirmlesern können Sie Aria-Live-Regionen verwenden, um den Benutzer auf eine Änderung auf der Seite aufmerksam zu machen.
        </p>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Serverseitige Validierung sollte <em>immer</em> zusammen mit clientseitiger Validierung verwendet werden. Clientseitige Validierung ist zu leicht auszuschalten oder anderweitig zu umgehen, sodass sie nicht allein zuverlässig ist.
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
          >WAI-ARIA: Dynamische Inhaltsupdates</a
        >
        für Informationen zu Live-Regionen.
      </td>
    </tr>
    <tr>
      <td>3.3.2 Beschriftungen oder Anleitungen (A)</td>
      <td>
        <p>
          Klare Anweisungen sollten bereitgestellt werden, wenn die Eingabe von Daten erforderlich ist. Wenn eine einfache Anweisung oder Aufforderung erforderlich ist, können Sie {{htmlelement("label")}}-Elemente für einzelne Eingaben wie Name oder Alter verwenden, eine Kombination aus {{htmlelement("label")}}s und
          {{htmlelement("fieldset")}}s/{{htmlelement("legend")}}s
          für mehrere Eingaben, die zusammengehören (wie die Elemente eines Geburtsdatums oder einer Postadresse).
        </p>
        <p>
          Wenn ausführlichere Erläuterungen erforderlich sind, können Sie immer auch erläuternde Absätze einschließen, oder Sie müssen möglicherweise versuchen, Ihre Formulare intuitiver zu gestalten.
        </p>
      </td>
      <td>
        <ul>
          <li>
            <a
              href="/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
              >Aussagekräftige Textbeschriftungen</a
            >
          </li>
          <li>
            <a href="/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form"
              >Wie man ein HTML-Formular strukturiert</a
            >
          </li>
          <li>
            <a
              href="/de/docs/Web/Accessibility/Understanding_WCAG/Text_labels_and_names"
              >Textbeschriftungen und -namen</a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3.3.3 Fehlervorschläge (AA)</td>
      <td>
        <p>
          Wenn ein Fehler erkannt und Korrekturvorschläge bekannt sind, sollten diese dem Benutzer bereitgestellt werden (z.B. Alternativen vorschlagen, wenn der Benutzer einen Benutzernamen auswählt, der bereits vergeben ist), es sei denn, dies würde ein Sicherheitsproblem (z.B. bei der Eingabe eines Passworts) oder ein Kontextproblem (z.B. beim Versuch, eine Frage in einer Quiz-App zu beantworten) verursachen.
        </p>
        <p>
          In solchen Fällen werden Sie dies wahrscheinlich mithilfe einer Kombination aus JavaScript und serverseitiger Funktionalität umsetzen, um zu prüfen, ob die Eingabe korrekt ist, und wenn nicht, welche praktikablen Vorschläge dem Benutzer gegeben werden können. Solche Vorschläge sollten ansprechend im Kontext angezeigt werden, ähnlich wie Fehlermeldungen (siehe 3.3.1).
        </p>
      </td>
      <td>Derzeit keine Tutorial-Vorschläge.</td>
    </tr>
    <tr>
      <td>3.3.4 Fehlerverhütung (Rechtlich, Finanziell, Daten) (AA)</td>
      <td>
        <p>
          Im Fall von Formularen, die mit der Eingabe sensibler Daten zu tun haben (wie rechtliche Vereinbarungen, E-Commerce-Transaktionen oder persönliche Daten), sollte mindestens eines der folgenden zutreffen:
        </p>
        <ul>
          <li>Eingaben sind umkehrbar.</li>
          <li>
            Daten werden auf Fehler überprüft, und dem Benutzer wird die Möglichkeit gegeben, diese zu korrigieren.
          </li>
          <li>
            Ein Mechanismus ist vorhanden, um Informationen vor der endgültigen Übermittlung zu bestätigen und zu korrigieren.
          </li>
        </ul>
      </td>
      <td>
        <p>
          <strong>Umkehrbar</strong> — für jede Ansicht, in der Daten eingegeben werden können, sollte eine äquivalente Ansicht bereitgestellt werden, die es ermöglicht, einen Eintrag zu bearbeiten oder sogar zu löschen, falls geeignet (siehe zum Beispiel
          <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django">Django-Webframework</a
          >).
        </p>
        <p>
          <strong>Datenüberprüfung</strong> — wie in 3.3.1 behandelt, sollte eine Kombination aus clientseitiger und serverseitiger Validierung verwendet werden, um Fehler zu erkennen und dem Benutzer hilfreiche Nachrichten anzuzeigen, damit er seine Eingaben korrigieren kann.
        </p>
        <p>
          <strong>Bestätigen und korrigieren</strong> — wo angebracht, nach dem Ausfüllen einer Reihe von Formularfeldern zur Durchführung einer Aufgabe (wie dem Kauf eines Produkts), sollte dem Benutzer ein Bestätigungsbildschirm angezeigt werden, auf dem er seine Eingaben überprüfen und alles korrigieren kann, was nicht richtig aussieht. Dieses Muster wird häufig auf E-Commerce-Seiten wie Amazon verwendet.
        </p>
      </td>
    </tr>
    <tr>
      <td>3.3.5 Kontextbezogene Hilfe ist verfügbar (AAA)</td>
      <td>
        Stellen Sie Anweisungen und andere geeignete Hinweise im Kontext bereit, um die Formularausfüllung und -einreichung zu unterstützen.
      </td>
      <td>
        Dies baut wirklich nur auf 3.3.1 und anderen ähnlichen Kriterien auf, erfordert jedoch umfassendere kontextbezogene Hilfeinformationen und -dienste, z.B. durch Bereitstellung eines dedizierten Links zu einer Hilfeseite oder einem Dienst auf jeder Seite, sowie durch Bereitstellung von Beispielen, die zeigen, wie eine erfolgreiche Bearbeitung aussehen sollte.
      </td>
    </tr>
    <tr>
      <td>3.3.6 Fehlerverhütung (Alle) (AAA)</td>
      <td>
        Dieses Prinzip baut auf 3.3.4 auf und erweitert seine Anforderungen auf alle Benutzereingabesituationen, nicht nur solche, die sensible Daten betreffen.
      </td>
      <td>Siehe nochmals 3.3.4.</td>
      </tr>
      <tr>
      <td> 3.3.7 Redundante Eingabe (A) </td>
      <td>
      Informationen, die erforderlich sind, die der Benutzer im selben Prozess oder Benutzerablauf zuvor eingegeben oder bereitgestellt hat, werden entweder automatisch ausgefüllt oder zur Auswahl aus einer Liste von Optionen bereitgestellt, es sei denn, die erneute Eingabe der Informationen ist unerlässlich oder aus Sicherheitsgründen erforderlich oder wenn die Informationen nicht mehr gültig sind.
      </td>
      <td>Weitere Informationen finden Sie unter <a href="https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry">Redundante Eingabe verstehen</a>.</td>
      </tr>
      <tr>
      <td> 3.3.8 Zugängliche Authentifizierung (Minimum) (AA)
      </td>
      <td>
Kognitive Funktionstests, wie beispielsweise das Erinnern an ein Passwort, sind für keinen Schritt eines Authentifizierungsprozesses erforderlich, es sei denn, es wird eine Alternative angeboten, wie z.B. die Erkennung eines Objekts oder persönlichen Inhalts (z.B. Bilder, Videos und Audio) oder ein Mechanismus zur Unterstützung (z.B. kopieren und einfügen und Passwörter automatisch speichern).
      </td>
      <td> Weitere Informationen finden Sie in der <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum">Dokumentation zur zugänglichen Authentifizierung</a> zu diesem Standard. </td>
    </tr>
    <tr>
 <td> 3.3.9 Zugängliche Authentifizierung (Erweitert) (AAA) </td>
    <td>
Ein kognitiver Funktionstest, wie das Erinnern an ein Passwort, darf für keinen Schritt eines Authentifizierungsprozesses erforderlich sein, ohne eine Alternative bereitzustellen, die nicht auf einem kognitiven Funktionstest beruht, oder einen Mechanismus bereitzustellen, um den Benutzer bei der Durchführung des kognitiven Funktionstests zu unterstützen. Authentifizierungstests, die vom Benutzer erfordern, Objekte zu erkennen oder nichttextuelle Inhalte zu identifizieren, die der Benutzer der Website zur Verfügung gestellt hat, sind erlaubt.
    </td>
<td> Weitere Informationen finden Sie in der <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced">erweiterten Dokumentation zur zugänglichen Authentifizierung (AAA)</a>.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.3 Eingabehilfe: Benutzern helfen, Fehler zu vermeiden und zu korrigieren](https://www.w3.org/TR/WCAG21/#input-assistance).

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG)

  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
  2. [Bedienbar](/de/docs/Web/Accessibility/Understanding_WCAG/Operable)
  3. Verständlich
  4. [Robust](/de/docs/Web/Accessibility/Understanding_WCAG/Robust)
