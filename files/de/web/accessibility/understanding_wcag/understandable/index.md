---
title: Verständlich
slug: Web/Accessibility/Understanding_WCAG/Understandable
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{AccessibilitySidebar}}

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so gestalten, dass sie den Erfolgskriterien des Prinzips **Verständlich** der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 entsprechen. Verständlich bedeutet, dass Informationen und die Bedienung der Benutzeroberfläche verständlich sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Verständlich sowie seine Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 3: Verständlich — Informationen und die Bedienung der Benutzeroberfläche müssen verständlich sein](https://www.w3.org/TR/WCAG21/#understandable).

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
        Die Standardsprache jeder Webseite sollte über den Code erkennbar sein. Dies ist wichtig, um sicherzustellen, dass der Leser auf einer Seite landet, die in einer für ihn geeigneten Sprache verfasst ist. Der einfachste Weg, dies zu erreichen, ist, das `<lang>`-Attribut am {{htmlelement("html")}}-Element der Seite zu setzen und ihm einen Wert gleich dem Sprachcode zu geben, der die Sprache, in der die Seite verfasst ist, am besten repräsentiert.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#setting_the_primary_language_of_the_document"
          >Einstellung der primären Sprache des Dokuments</a
        >.
      </td>
    </tr>
    <tr>
      <td>3.1.2 Sprache der Teile (AA)</td>
      <td>
        <p>
          In Fällen, in denen der Inhalt einer Seite Wörter oder Ausdrücke in einer anderen Sprache als der Hauptsprache enthält, verwenden Sie das `<lang>`-Attribut an einem Element, das um den betreffenden Begriff gewickelt ist (z. B. ein {{htmlelement("span")}}, wenn kein semantisches Element verfügbar ist), um eine geeignete Sprache dafür festzulegen.
        </p>
        <p>
          Sie müssen keine andere Sprache für Wörter oder Ausdrücke setzen, die unabhängig von der Sprache gleich sind (zum Beispiel Eigennamen, Fachbegriffe, die nicht Teil einer bestimmten Sprache sind).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.3 Ungewöhnliche Wörter (AAA)</td>
      <td>
        Wo Fachbegriffe, Jargon oder Idiome/Umgangssprache verwendet werden, sollten Definitionen für solche Ausdrücke/Wörter bereitgestellt werden. Ihre Seite sollte ein Glossar bereitstellen, das Definitionen solcher Wörter/Begriffe enthält, auf das Sie verlinken können, wann immer sie auftreten, oder zumindest Definitionen irgendwo im umliegenden Text oder in einer
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#description_lists"
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
          Wo Abkürzungen verwendet werden, sollten Sie eine Erweiterung oder eine Definition bereitstellen, wenn erforderlich.
        </p>
        <p>
          Das {{htmlelement("abbr")}}-Element wird oft als bevorzugte Methode betrachtet, um eine Erweiterung für eine Abkürzung bereitzustellen — es nimmt ein `<title>`-Attribut auf, das die Erweiterung enthält, und dies erscheint, wenn das Akronym mit der Maus überfahren wird. Der Titelinhalt ist jedoch nicht über die Tastatur zugänglich und wird auch nicht zuverlässig von Screenreadern vorgelesen. Eine bessere Möglichkeit, damit umzugehen, besteht darin, erneut Links zu Glossarseiten bereitzustellen, die die Akronymerweiterung und -erklärung enthalten, oder sie zumindest im umgebenden Text im Kontext einzuschließen.
        </p>
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#abbreviations"
          >Abkürzungen</a
        >.
      </td>
    </tr>
    <tr>
      <td>3.1.5 Lesestufe (AAA)</td>
      <td>
        <p>
          Wenn Text bereitgestellt wird, der eine höhere Lesestufe als die der unteren Sekundarstufe (typischerweise Kinder im Alter von 11-14 Jahren) erfordert, stellen Sie zusätzliches Erklärmaterial bereit, um Personen zu helfen, die es nicht lesen können, oder bieten Sie eine alternative Version an, die auf der unteren Sekundarstufe geschrieben ist.
        </p>
        <p>
          Dies bedeutet nicht, dass alle Themen von allen verstanden werden sollten, sondern dass der Schreibstil für alle zugänglich sein sollte. Es ist besser, alle Inhalte auf der unteren Sekundarstufe zu schreiben, sogar technische Dokumentationen wie Programmier-Tutorials, es sei denn, es gibt einen guten Grund, dies nicht zu tun (z. B. ein alternativer Stil für poetische Wirkung), oder sie müssen in einem strengen Stil geschrieben werden (z. B. W3C-Spezifikationen).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.6 Aussprache (AAA)</td>
      <td>
        <p>
          Es sollte ein Mechanismus bereitgestellt werden, der den Benutzern den Zugang zur Aussprache von Wörtern gewährt, wo dies erforderlich ist, um den Inhalt vollständig zu verstehen.
        </p>
        <p>
          Das HTML-{{htmlelement("audio")}}-Element kann verwendet werden, um eine Steuerung zu erstellen, die es dem Leser ermöglicht, eine Audiodatei mit der korrekten Aussprache abzuspielen, und es ist sinnvoll, nach schwierigen Wörtern eine textuelle Aussprachehilfe einzufügen, so wie Sie es in Wörterbucheinträgen finden.
        </p>
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content"
          >Video- und Audioinhalte</a
        > und
        <a
          href="https://www.oxfordlearnersdictionaries.com/us/about/pronunciation_english.html"
          >Ausspracheleitfaden für Englische Wörterbücher</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.1 Lesbar: Machen Sie Textinhalte lesbar und verständlich](https://www.w3.org/TR/WCAG21/#readable).

## Richtlinie 3.2 — Vorhersehbar: Lassen Sie Webseiten auf vorhersehbare Weise erscheinen und funktionieren

Diese Richtlinie konzentriert sich darauf, Benutzeroberflächen intuitiv und verständlich zu machen.

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
          Wenn ein Steuerelement oder ein anderes Seitenelement den Fokus erhält, sollte es den Kontext nicht auf eine Weise verändern, die den Benutzer verwirren oder desorientieren könnte.
        </p>
        <p>
          Dies ist eine Frage des sinnvollen Designs — Menschen wollen sich nicht von Schnittstellen überraschen lassen; sie wollen, dass Dinge intuitiv sind und sich so verhalten, wie erwartet. Zum Beispiel sollte der Fokus auf eine Navigationsmenüoption nicht die angezeigte Seite ändern — sie sollte aktiviert werden, bevor sich die Anzeige ändert.
        </p>
      </td>
      <td>
        Das <code>Element</code>'s [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis enthält einige nützliche Informationen. Siehe auch
        <a
          href="/de/docs/Learn/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Tastaturzugänglichkeit wieder einbauen</a
        >
        für einige nützliche Implementierungsideen.
      </td>
    </tr>
    <tr>
      <td>3.2.2 Bei Eingabe (A)</td>
      <td>
        <p>
          Wenn Daten in ein Steuerelement eingegeben oder eine Einstellung geändert wird, sollte der Kontext nicht unerwartet geändert werden. Der Benutzer sollte vor der bevorstehenden Änderung gewarnt/beraten werden, bevor sie eintritt.
        </p>
        <p>
          Auch hier sollte ein sinnvolles Design implementiert werden. Zum Beispiel, wenn das Drücken eines Knopfes die Anwendung dazu veranlasst, die aktuelle Ansicht zu verlassen, sollte der Benutzer aufgefordert werden, diese Aktion zu bestätigen, seine Arbeit zu speichern, falls dies angemessen ist, usw.
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
          Der Stil und die Positionierung des Navigationsmenüs/Steuerelements sollten zwischen verschiedenen Seiten oder Ansichten einer Webseite konsistent sein, und die vorhandenen Elemente sollten in derselben Reihenfolge erscheinen, auch wenn beispielsweise neue Elemente hinzugefügt werden. Wenn der Benutzer eine Änderung vorgenommen hat, z. B. eine andere Farbgestaltung oder Position für die Navigation gewählt hat, sollte diese Wahl auf allen Seiten respektiert werden.
        </p>
        <p>
          Auch hier sinnvolles Design — machen Sie die Navigationssteuerungen auf allen Seiten oder Ansichten gleich.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn/Accessibility/HTML#page_layouts"
          >Seitenlayouts</a
        >
        für Informationen über modernes Markup für Layouts. Siehe auch
        <a
          href="/de/docs/Learn/CSS/Styling_text/Styling_links#styling_links_as_buttons"
          >Links als Buttons stylen</a
        >
        für ein nützliches, zugängliches Navigationsmenü-Beispiel.
      </td>
    </tr>
    <tr>
      <td>3.2.4 Konsistente Identifikation (AA)</td>
      <td>
        <p>
          Steuerelemente oder Komponenten, die die gleiche Funktionalität haben, sollten auf unterschiedliche Seiten oder Ansichten gleichermaßen identifiziert werden. Ein Währungsumrechner, der auf jeder Seite einer Weltreiseseite erscheint, sollte zum Beispiel genau gleich sein, sowohl semantisch als auch hinsichtlich der Labels.
        </p>
        <p>Auch hier, sinnvolles Design!</p>
      </td>
      <td>
        "Labels" können sich auf beschreibende Informationen in Textinhalten oder HTML-Formular-Labels beziehen. Siehe
        <a href="/de/docs/Learn/Accessibility/HTML#meaningful_text_labels"
          >Bedeutungsvolle Textlabels</a
        >
        für weitere Informationen.
      </td>
    </tr>
    <tr>
      <td>3.2.5 Änderung auf Anforderung (AAA)</td>
      <td>
        <p>
          Änderungen im Kontext, die Benutzer möglicherweise verwirren oder desorientieren könnten, sollten nur auf Anfrage des Benutzers erfolgen, ODER der Benutzer sollte in der Lage sein, sie abzuschalten.
        </p>
        <p>
          Wenn Sie etwas haben müssen, das die aktuelle Ansicht signifikant ändert (z. B. Inhalte oder Steuerungen), lassen Sie den Benutzer steuern, wann er diese Änderung vornehmen möchte (z. B. welche Seite anzuzeigen, wann zum nächsten Foto in der Galerie zu wechseln...)
        </p>
        <p>
          Wenn Sie beispielsweise etwas wie ein Karussell auf einer Seite haben müssen, bieten Sie eine Option, um es automatisch zu stoppen. Besser, solche Funktionen nach Möglichkeit zu vermeiden.
        </p>
      </td>
 </tr>
      <tr>
      <td> 3.2.6 Konsistente Hilfe (A)</td>
      <td> <p> Webpages, die Hilfemechanismen enthalten, einschließlich Selbsthilfeoptionen und menschliche Kontaktdaten, die auf mehreren Webseiten wiederholt werden, müssen diese Mechanismen in gleicher Reihenfolge auf allen Seiten platzieren, es sei denn, eine Änderung wird vom Benutzer initiiert.</p>
      <td> <p> Sehen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-help">Dokumentation zur konsistenten Hilfe</a> für diesen Standard an, um mehr zu erfahren. </p>
      </td>
      </td>
      <tr>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.2 Vorhersehbar: Lassen Sie Webseiten auf vorhersehbare Weise erscheinen und funktionieren](https://www.w3.org/TR/WCAG21/#predictable).

## Richtlinie 3.3 — Eingabeunterstützung: Helfen Sie Benutzern, Fehler zu vermeiden und zu korrigieren

Diese Richtlinie konzentriert sich darauf, Benutzern zu helfen, die richtigen Informationen einzugeben, wann immer dies mit minimalen Fehlern erforderlich ist.

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
          Wenn ein Benutzer ein Formular ausfüllt oder zwischen Optionen wählt, sollte jeglicher erkannter Fehler dem Benutzer deutlich mitgeteilt werden, zusammen mit dem Formularelement, auf das sich der Fehler bezieht.
        </p>
        <p>
          Es ist ratsam, eine clientseitige Fehlererkennung und -behandlung zu implementieren, entweder über HTML-Formular-Validierungsfunktionen und/oder JavaScript, was auch immer für Ihre Situation am besten ist. Wenn ein Fehler erkannt wird, sollte eine intuitive Fehlermeldung neben dem fehlerhaften Formularelement angezeigt werden, um dem Benutzer zu helfen, seine Eingaben zu korrigieren. Für Screenreader-Benutzer können Sie ARIA-Live-Regionen verwenden, um den Benutzer auf eine Änderung auf der Seite aufmerksam zu machen.
        </p>
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Serverseitige Validierung sollte <em>immer</em> zusammen mit der clientseitigen Validierung verwendet werden. Die clientseitige Validierung kann zu leicht abgeschaltet oder umgangen werden, daher kann sie nicht allein als zuverlässig angesehen werden.
          </p>
        </div>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn/Forms/Form_validation"
          >Formulardatenvalidierung</a
        >
        für umfassende Validierungsinformationen und
        <a
          href="/de/docs/Learn/Accessibility/WAI-ARIA_basics#dynamic_content_updates"
          >WAI-ARIA: Dynamische Inhaltsaktualisierungen</a
        >
        für Informationen über Live-Regionen.
      </td>
    </tr>
    <tr>
      <td>3.3.2 Beschriftungen oder Anweisungen (A)</td>
      <td>
        <p>
          Klare Anweisungen sollten bereitgestellt werden, wenn eine Dateneingabe erforderlich ist. Wenn eine einfache Anweisung oder Aufforderung erforderlich ist, können Sie {{htmlelement("label")}}-Elemente für einzelne Eingaben wie Name oder Alter verwenden, eine Kombination aus {{htmlelement("label")}}s und {{htmlelement("fieldset")}}s/{{htmlelement("legend")}}s für mehrere Eingaben, die zusammengehören (wie die Elemente eines Geburtsdatums oder einer Postadresse).
        </p>
        <p>
          Wenn eine komplexere Erklärung erforderlich ist, können Sie auch erläuternde Absätze hinzufügen, oder Sie müssen möglicherweise versuchen, Ihre Formulare intuitiver zu gestalten.
        </p>
      </td>
      <td>
        <ul>
          <li>
            <a
              href="/de/docs/Learn/Accessibility/HTML#meaningful_text_labels"
              >Bedeutungsvolle Textlabels</a
            >
          </li>
          <li>
            <a href="/de/docs/Learn/Forms/How_to_structure_a_web_form"
              >So strukturieren Sie ein HTML-Formular</a
            >
          </li>
          <li>
            <a
              href="/de/docs/Web/Accessibility/Understanding_WCAG/Text_labels_and_names"
              >Textlabels und -namen</a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3.3.3 Fehlerhinweise (AA)</td>
      <td>
        <p>
          Wenn ein Fehler erkannt wird und Vorschläge zur Korrektur bekannt sind, sollten diese dem Benutzer zur Verfügung gestellt werden (z. B. Vorschläge von Alternativen, wenn der Benutzer einen Benutzernamen wählt und dieser bereits vergeben ist), es sei denn, dies würde ein Sicherheitsproblem (z. B. bei der Passwort-Eingabe) oder ein Kontextproblem (z. B. versucht der Benutzer, eine Frage in einer Quiz-App zu beantworten) verursachen.
        </p>
        <p>
          In solchen Fällen werden Sie wahrscheinlich eine Kombination aus JavaScript und serverseitiger Funktionalität verwenden, um zu überprüfen, ob die Eingabe korrekt ist, und falls nicht, welche realisierbaren Vorschläge dem Benutzer gegeben werden können. Solche Vorschläge sollten sinnvoll im Kontext angezeigt werden, genau wie Fehlermeldungen (siehe 3.3.1).
        </p>
      </td>
      <td>Keine Tutorialvorschläge bisher.</td>
    </tr>
    <tr>
      <td>3.3.4 Fehlervermeidung (Rechtlich, Finanz, Daten) (AA)</td>
      <td>
        <p>
          Im Falle von Formularen, die die Eingabe sensibler Daten betreffen (wie rechtliche Vereinbarungen, E-Commerce-Transaktionen oder persönliche Daten), sollte mindestens eine der folgenden Bedingungen erfüllt sein:
        </p>
        <ul>
          <li>Einsendungen sind umkehrbar.</li>
          <li>
            Daten werden auf Fehler überprüft, und dem Benutzer wird die Möglichkeit gegeben, diese zu korrigieren.
          </li>
          <li>
            Ein Mechanismus zur Bestätigung und Korrektur von Informationen vor der endgültigen Abgabe ist vorhanden.
          </li>
        </ul>
      </td>
      <td>
        <p>
          <strong>Umkehrbar</strong> — für jede Ansicht, in der Daten eingegeben werden können, bieten Sie eine äquivalente Ansicht, die Ihnen erlaubt, einen Eintrag bei Bedarf zu bearbeiten oder sogar zu löschen (zum Beispiel siehe
          <a href="/de/docs/Learn/Server-side/Django">Django-Web-Framework</a
          >).
        </p>
        <p>
          <strong>Datenüberprüfung</strong> — wie in 3.3.1 behandelt, sollte eine Kombination aus clientseitiger und serverseitiger Validierung verwendet werden, um Fehler zu erkennen und hilfreiche Nachrichten an den Benutzer zu senden, um ihm zu ermöglichen, seine Eingaben zu korrigieren.
        </p>
        <p>
          <strong>Bestätigen und korrigieren</strong> — nach dem Ausfüllen einer Reihe von Formularfeldern, um eine Aufgabe zu erledigen (z. B. ein Produkt zu kaufen), sollte dem Benutzer eine Bestätigungsseite angezeigt werden, auf der er seine Eingaben überprüfen und alles korrigieren kann, was nicht richtig aussieht. Dieses Muster wird häufig auf E-Commerce-Websites wie Amazon verwendet.
        </p>
      </td>
    </tr>
    <tr>
      <td>3.3.5 Kontext-sensitive Hilfe ist verfügbar (AAA)</td>
      <td>
        Stellen Sie Anleitungen und andere geeignete Hinweise im Kontext bereit, um die Fertigstellung und Abgabe von Formularen zu unterstützen.
      </td>
      <td>
        Dies baut wirklich nur auf 3.3.1 und anderen ähnlichen Kriterien auf, erfordert jedoch umfassendere kontextbezogene Hilfeinformationen und -leistungen, z. B. einen dedizierten Link zu einer Hilfeseite oder einem Hilfsdienst auf jeder Seite bereitzustellen, Beispiele zu zeigen, wie eine erfolgreiche Fertigstellung aussehen sollte.
      </td>
    </tr>
    <tr>
      <td>3.3.6 Fehlervermeidung (Alle) (AAA)</td>
      <td>
        Dieses Prinzip baut auf 3.3.4 auf und erweitert seine Anforderungen auf alle Benutzereingabesituationen, nicht nur auf solche mit sensiblen Daten.
      </td>
      <td>Wieder siehe 3.3.4.</td>
      </tr>
      <tr>
      <td> 3.3.7 Redundante Eingabe (A) </td>
      <td>
      Informationen, die benötigt werden und zuvor vom Benutzer im gleichen Prozess oder Benutzerablauf eingegeben oder bereitgestellt wurden, werden entweder automatisch ausgefüllt oder dem Benutzer zur Auswahl aus einer Liste von Optionen bereitgestellt, es sei denn, die erneute Eingabe der Informationen ist wesentlich oder aus Sicherheitsgründen erforderlich, oder wenn die Informationen nicht mehr gültig sind.
      </td>
      <td>Siehe <a href="https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry">Verständnis redundanter Eingaben</a> lernen Sie mehr.</td>
      </tr>
      <tr>
      <td> 3.3.8 Barrierefreie Authentifizierung (Minimum) (AA)
      </td>
      <td>
Kognitive Funktionstests, wie das Erinnern an ein Passwort, sind für keinen Schritt eines Authentifizierungsprozesses erforderlich, es sei denn, es wird eine Alternative bereitgestellt, wie z. B. Erkennung von Objekten oder persönlichen Inhalten (z.B. Bilder, Videos und Audio), oder ein Mechanismus zur Unterstützung (z.B. Kopieren und Einfügen und automatisches Speichern von Passwörtern).
      </td>
      <td> Siehe die <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum">Dokumentation zur barrierefreien Authentifizierung</a> für diesen Standard, um mehr zu erfahren. </td>
    </tr>
    <tr>
 <td> 3.3.9 Barrierefreie Authentifizierung (Erweitert) (AAA) </td>
    <td>
Ein kognitiver Funktionstest, wie das Erinnern an ein Passwort, darf in keinem Schritt eines Authentifizierungsprozesses erforderlich sein, ohne eine Alternative bereitzustellen, die nicht auf einem kognitiven Funktionstest basiert oder einen Mechanismus zur Unterstützung des Benutzers bei der Durchführung des kognitiven Funktionstests bereitstellt. Authentifizierungstests, die vom Benutzer verlangen, Objekte zu erkennen oder nicht-textliche Inhalte zu identifizieren, die der Benutzer der Website bereitgestellt hat, sind erlaubt.
    </td>
<td> Siehe die <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced">erweiterte Dokumentation zur barrierefreien Authentifizierung (AAA)</a> um mehr zu erfahren.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.3 Eingabehilfe: Hilf Benutzern dabei, Fehler zu vermeiden und zu korrigieren](https://www.w3.org/TR/WCAG21/#input-assistance).

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG)

  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
  2. [Bedienbar](/de/docs/Web/Accessibility/Understanding_WCAG/Operable)
  3. Verständlich
  4. [Robust](/de/docs/Web/Accessibility/Understanding_WCAG/Robust)
