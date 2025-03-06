---
title: Verständlich
slug: Web/Accessibility/Guides/Understanding_WCAG/Understandable
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so schreiben, dass sie den Erfolgskriterien entsprechen, die im **Verständlich**-Prinzip der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 festgelegt sind. Verständlich bedeutet, dass Informationen und die Bedienung der Benutzeroberfläche verständlich sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Verständlich sowie deren Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 3: Verständlich — Informationen und die Bedienung der Benutzeroberfläche müssen verständlich sein](https://www.w3.org/TR/WCAG21/#understandable).

## Richtlinie 3.1 — Lesbarkeit: Machen Sie Textinhalte verständlich und lesbar

Diese Richtlinie konzentriert sich darauf, Textinhalte so verständlich wie möglich zu gestalten.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie die Kriterien erfüllt werden</th>
      <th scope="col">Praktische Ressourcen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3.1.1 Sprache der Seite (A)</td>
      <td>
        Die Standardsprache jeder Webseite sollte über Code erkennbar sein. Dies ist entscheidend, um sicherzustellen, dass der Leser auf einer Seite angekommen ist, die in einer für ihn geeigneten Sprache verfasst ist. Der einfachste Weg, dies zu erreichen, ist das Setzen des <a href="/de/docs/Web/HTML/Global_attributes/lang">lang</a>-Attributs im {{htmlelement("html")}}-Element der Seite, wobei er einen Wert erhält, der dem Sprachcode entspricht, der die verwendete Sprache der Seite am besten repräsentiert.
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
      <td>3.1.2 Sprache von Teilen (AA)</td>
      <td>
        <p>
          Falls der Inhalt einer Seite Wörter oder Phrasen enthält, die sich von der Hauptsprache unterscheiden, verwenden Sie das <a href="/de/docs/Web/HTML/Global_attributes/lang">lang</a>-Attribut an einem Element, das den betreffenden Begriff umschließt (z. B. ein {{htmlelement("span")}}, wenn kein semantisches Element verfügbar ist), um eine geeignete Sprache dafür festzulegen.
        </p>
        <p>
          Sie müssen keine andere Sprache für Wörter oder Phrasen festlegen, die unabhängig von der Sprache gleich sind (beispielsweise Eigennamen, technische Begriffe, die nicht Teil einer spezifischen Sprache sind).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.3 Ungewöhnliche Wörter (AAA)</td>
      <td>
        Wenn technische Begriffe, Fachjargon oder Idiome/Slang verwendet werden, sollten Definitionen für solche Phrasen/Wörter bereitgestellt werden. Ihre Website sollte ein Glossar enthalten, das Definitionen solcher Wörter/Begriffe enthält, auf das Sie verlinken können, wenn sie erscheinen, oder zumindest irgendwo im umgebenden Text oder in einer <a href="/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#description_lists">Beschreibungsliste</a> am Seitenende bereitstellen.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.4 Abkürzungen (AAA)</td>
      <td>
        <p>
          Wo Abkürzungen verwendet werden, sollten Sie eine Erklärung oder, falls erforderlich, eine Definition bereitstellen.
        </p>
        <p>
          Das {{htmlelement("abbr")}}-Element wird oft als bevorzugte Methode betrachtet, um eine Erklärung für eine Abkürzung bereitzustellen — es nimmt ein <a href="/de/docs/Web/HTML/Global_attributes/title">title</a>-Attribut auf, das die Erklärung enthält, und diese erscheint, wenn die Abkürzung mit der Maus überfahren wird. Der Titelinhalt ist jedoch nicht über die Tastatur zugänglich und wird auch nicht zuverlässig von Screenreadern vorgelesen. Eine bessere Methode, um damit umzugehen, ist es, erneut Links zu Glossarseiten bereitzustellen, die die Abkürzungserklärung und -erläuterung enthalten, oder zumindest in den umgebenden Text integriert zu werden.
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
          Wenn Text bereitgestellt wird, der ein höheres Lese-Niveau als das Niveau der unteren Sekundarstufe erfordert (typischerweise Kinder im Alter von 11-14 Jahren), sollten ergänzende Erklärungen bereitgestellt werden, um Menschen zu helfen, die ihn nicht lesen können, oder eine alternative Version bereitgestellt werden, die auf dem Niveau der unteren Sekundarstufe verfasst ist.
        </p>
        <p>
          Dies bedeutet nicht, dass alle Inhalte von jedem verstanden werden sollten, sondern dass der Schreibstil für jeden zugänglich sein sollte. Es ist besser, alle Inhalte auf dem Niveau der unteren Sekundarstufe zu verfassen, selbst technische Dokumentationen wie Programmieranleitungen, es sei denn, es besteht ein triftiger Grund, dies nicht zu tun (z. B. ein alternativer Stil für poetische Effekte), oder sie müssen in einem strengen Stil verfasst sein (z. B. W3C-Spezifikationen).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.6 Aussprache (AAA)</td>
      <td>
        <p>
          Ein Mechanismus sollte bereitgestellt werden, um den Nutzern Zugriff auf die Aussprache von Wörtern zu geben, wo diese erforderlich ist, um den Inhalt vollständig zu verstehen.
        </p>
        <p>
          Das HTML {{htmlelement("audio")}}-Element kann verwendet werden, um ein Steuerelement zu erstellen, das dem Leser ermöglicht, eine Audiodatei mit der korrekten Aussprache abzuspielen. Es macht auch Sinn, einen Text, der die Aussprache nach schwierigen Wörtern beschreibt, auf die gleiche Weise wie in Wörterbucheinträgen anzugeben.
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
          >Ausspracheleitfaden für englische Wörterbücher</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.1 Lesbarkeit: Machen Sie Textinhalte verständlich und lesbar](https://www.w3.org/TR/WCAG21/#readable).

## Richtlinie 3.2 — Vorhersehbar: Web-Seiten sollen auf vorhersehbare Weise erscheinen und arbeiten

Diese Richtlinie konzentriert sich darauf, Benutzeroberflächen intuitiv und verständlich zu gestalten.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie die Kriterien erfüllt werden</th>
      <th scope="col">Praktische Ressourcen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3.2.1 Beim Fokus (A)</td>
      <td>
        <p>
          Wenn ein Steuerelement oder ein anderes Seitenelement den Fokus erhält, sollte es den Kontext nicht auf eine Weise ändern, die den Benutzer verwirren oder desorientieren könnte.
        </p>
        <p>
          Dies ist eine Frage des sinnvollen Designs — Menschen möchten keine Oberflächen, die sie überraschen, sie möchten, dass sie intuitiv sind und sich wie erwartet verhalten. Zum Beispiel sollte das Fokussieren einer Navigationsmenü-Option die angezeigte Seite nicht ändern — es sollte erst aktiviert werden, bevor sich die Anzeige ändert.
        </p>
      </td>
      <td>
        Das `Element` [`focus`](/de/docs/Web/API/Element/focus_event) Ereignis enthält einige nützliche Informationen. Siehe auch
        <a
          href="/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Tastaturbedienbarkeit wieder einbauen</a
        >
        für einige nützliche Implementierungsideen.
      </td>
    </tr>
    <tr>
      <td>3.2.2 Bei Eingabe (A)</td>
      <td>
        <p>
          Wenn Daten in ein Steuerelement eingegeben werden oder eine Einstellung geändert wird, sollte der Kontext nicht unerwartet geändert werden. Der Benutzer sollte auf die bevorstehende Änderung hingewiesen oder darüber informiert werden, bevor sie auftritt.
        </p>
        <p>
          Auch hier sollte ein sinnvolles Design implementiert werden. Beispielsweise, wenn das Drücken eines Knopfes dazu führt, dass die Anwendung die aktuelle Ansicht verlässt, sollte der Benutzer gebeten werden, diese Aktion zu bestätigen und gegebenenfalls seine Arbeit zu speichern usw.
        </p>
      </td>
      <td>
        Das [`input`](/de/docs/Web/API/Element/input_event) Ereignis ist hier nützlich.
      </td>
    </tr>
    <tr>
      <td>3.2.3 Konsistente Navigation (AA)</td>
      <td>
        <p>
          Der Stil und die Positionierung des Navigationsmenüs oder der Steuerelemente sollten zwischen verschiedenen Seiten oder Ansichten einer Webseite konsistent sein, und die bestehenden Elemente sollten in derselben Reihenfolge erscheinen, selbst wenn zum Beispiel neue Elemente hinzugefügt werden. Wenn der Nutzer eine Änderung initiiert hat, z.B. eine andere Farbgestaltung oder Position für die Navigation gewählt hat, sollte seine Wahl auf allen Seiten respektiert werden.
        </p>
        <p>
          Wieder einmal, sinnvolles Design — machen Sie die Navigationskontrollen auf allen Seiten oder Ansichten gleich.
        </p>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#page_layouts"
          >Seitenlayouts</a
        >
        für Informationen über modernes Markup für Layouts. Siehe auch
        <a
          href="/de/docs/Learn_web_development/Core/Text_styling/Styling_links#styling_links_as_buttons"
          >Links als Schaltflächen stylen</a
        >
        für ein nützliches, zugängliches Navigationsbeispiel.
      </td>
    </tr>
    <tr>
      <td>3.2.4 Konsistente Identifikation (AA)</td>
      <td>
        <p>
          Steuerelemente oder Komponenten, die dieselbe Funktionalität haben, sollten auf allen Seiten oder Ansichten auf die gleiche Weise identifiziert werden. Ein Währungsumrechner, der auf jeder Seite einer Weltreiseseite erscheint, sollte beispielsweise genau gleich sein, sowohl semantisch als auch in Bezug auf Kennzeichnungen.
        </p>
        <p>Wieder ein sinnvolles Design!</p>
      </td>
      <td>
        "Labels" können sich auf beschreibende Informationen im Textinhalt oder auf HTML-Formularlabels beziehen. Siehe
        <a href="/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
          >Sinnvolle Textlabels</a
        >
        für mehr Informationen.
      </td>
    </tr>
    <tr>
      <td>3.2.5 Änderung auf Anforderung (AAA)</td>
      <td>
        <p>
          Änderungen im Kontext, die möglicherweise Benutzer verwirren oder desorientieren könnten, sollten nur dann auftreten, wenn sie vom Benutzer angefordert wurden, ODER der Benutzer sollte in der Lage sein, sie auszuschalten.
        </p>
        <p>
          Wenn Sie etwas benötigen, das die aktuelle Ansicht erheblich verändert (z.B. Inhalte oder Steuerelemente), lassen Sie den Benutzer kontrollieren, wann sie diese Änderung vornehmen möchten (z.B. welche Seite angezeigt wird, wann zum nächsten Foto in der Galerie fortgefahren wird...).
        </p>
        <p>
          Wenn Sie etwas wie ein Karussell auf einer Seite benötigen, bieten Sie eine Option zum Stoppen des automatischen Vorschreitens an. Besser ist es, solche Funktionen zu vermeiden, wenn möglich.
        </p>
      </td>
 </tr>
      <tr>
      <td> 3.2.6 Konsistente Hilfe (A)</td>
      <td> <p> Web-Seiten, die Hilfemechanismen enthalten, einschließlich Selbsthilfeoptionen und menschlichen Kontaktinformationen, die auf mehreren webseiten wiederholt werden, sollten diese Mechanismen in derselben Reihenfolge auf allen Seiten platzieren, es sei denn, eine Änderung wird vom Benutzer initiiert.</p>
      <td> <p> Schauen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-help">dokumentation zur konsistenten Hilfe</a> für diesen Standard an, um mehr zu erfahren. </p>
      </td>
      </td>
      <tr>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.2 Vorhersehbar: Web-Seiten sollen auf vorhersehbare Weise erscheinen und arbeiten](https://www.w3.org/TR/WCAG21/#predictable).

## Richtlinie 3.3 — Eingabeunterstützung: Benutzern helfen, Fehler zu vermeiden und zu korrigieren

Diese Richtlinie konzentriert sich darauf, Benutzern zu helfen, korrekte Informationen mit einem Minimum an Fehlern einzugeben.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Erfolgskriterien</th>
      <th scope="col">Wie die Kriterien erfüllt werden</th>
      <th scope="col">Praktische Ressourcen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3.3.1 Fehlererkennung (A)</td>
      <td>
        <p>
          Wenn ein Benutzer ein Formular ausfüllt oder zwischen Optionen auswählt, sollte ein erkannter Fehler dem Benutzer klar gemeldet werden, zusammen mit dem Formularsteuerelement, auf das sich der Fehler bezieht.
        </p>
        <p>
          Es ist ratsam, eine clientseitige Fehlermeldung und Handhabung zu implementieren, über HTML-Formularvalidierungsfunktionen und/oder JavaScript, je nachdem, was für Ihre Situation am besten geeignet ist. Wenn ein Fehler erkannt wird, sollte eine intuitive Fehlermeldung neben dem Formulareingabe, das fehlerhaft ist, angezeigt werden, um dem Benutzer zu helfen, seine Eingaben zu korrigieren. Für Benutzer von Screenreadern können Sie ARIA Live-Bereiche verwenden, um den Benutzer auf eine Änderung der Seite hinzuweisen.
        </p>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Serverseitige Validierung sollte <em>immer</em> zusammen mit clientseitiger Validierung verwendet werden. Clientseitige Validierung kann zu leicht abgeschaltet oder umgangen werden, sodass man sich nicht ausschließlich darauf verlassen kann.
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
        für Informationen über Live-Bereiche.
      </td>
    </tr>
    <tr>
      <td>3.3.2 Labels oder Anweisungen (A)</td>
      <td>
        <p>
          Klare Anweisungen sollten bereitgestellt werden, wenn die Dateneingabe erforderlich ist. Wenn eine einfache Anweisung oder Eingabeaufforderung erforderlich ist, können Sie {{htmlelement("label")}}-Elemente für einzelne Eingaben wie Name oder Alter verwenden, eine Kombination von {{htmlelement("label")}}, {{htmlelement("fieldset")}}, und {{htmlelement("legend")}} für mehrere Eingaben, die zusammen gehören (wie die Elemente eines Geburtsdatums oder einer Postanschrift).
        </p>
        <p>
          Wenn eine komplexere Erklärung erforderlich ist, können Sie immer erklärende Absätze hinzufügen oder Sie müssen möglicherweise versuchen, Ihre Formulare intuitiver zu gestalten.
        </p>
      </td>
      <td>
        <ul>
          <li>
            <a
              href="/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
              >Sinnvolle Textlabels</a
            >
          </li>
          <li>
            <a href="/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form"
              >Wie Sie ein HTML-Formular strukturieren</a
            >
          </li>
          <li>
            <a
              href="/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Text_labels_and_names"
              >Textlabels und Namen</a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3.3.3 Fehlerhinweise (AA)</td>
      <td>
        <p>
          Wenn ein Fehler erkannt wird und Korrekturvorschläge bekannt sind, sollten diese dem Benutzer bereitgestellt werden (z.B. Vorschläge für Alternativen, wenn der Benutzer einen Benutzernamen wählt und bereits einer vorhanden ist), es sei denn, dies würde ein Sicherheitsproblem verursachen (z.B. bei Passworteingabe) oder ein Kontextproblem (z.B. beim Versuch, eine Frage in einer Quiz-App zu beantworten).
        </p>
        <p>
          In solchen Fällen, wenn dies angemessen ist, werden Sie wahrscheinlich eine Kombination aus JavaScript und serverseitiger Funktionalität verwenden, um zu überprüfen, ob die Eingabe korrekt ist, und falls nicht, welche passenden Vorschläge gegeben werden können. Solche Vorschläge sollten nützlich im Kontext angezeigt werden, ähnlich wie Fehlermeldungen (siehe 3.3.1).
        </p>
      </td>
      <td>Noch keine Tutorialvorschläge.</td>
    </tr>
    <tr>
      <td>3.3.4 Fehlervermeidung (Rechtlich, Finanziell, Daten) (AA)</td>
      <td>
        <p>
          Im Fall von Formularen, die die Eingabe sensibler Daten umfassen (wie rechtliche Vereinbarungen, E-Commerce-Transaktionen oder persönliche Daten), sollte mindestens eines der folgenden zutreffen:
        </p>
        <ul>
          <li>Eingaben sind umkehrbar.</li>
          <li>
            Daten werden auf Fehler geprüft, und der Benutzer erhält die Möglichkeit, sie zu korrigieren.
          </li>
          <li>
            Ein Mechanismus ist verfügbar, um Informationen vor der endgültigen Übermittlung zu bestätigen und zu korrigieren.
          </li>
        </ul>
      </td>
      <td>
        <p>
          <strong>Umkehrbar</strong> — für jede Ansicht, in der Daten eingegeben werden können, stellen Sie eine äquivalente Ansicht bereit, die es ermöglicht, einen Eintrag zu bearbeiten oder sogar zu löschen, falls geeignet (beispielsweise siehe
          <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django">Django Web-Framework</a>).
        </p>
        <p>
          <strong>Daten prüfen</strong> — wie in 3.3.1 behandelt, sollte eine Kombination von clientseitiger und serverseitiger Validierung verwendet werden, um Fehler zu erkennen und dem Benutzer nützliche Nachrichten anzuzeigen, damit er seine Eingaben korrigieren kann.
        </p>
        <p>
          <strong>Bestätigen und korrigieren</strong> — wo angebracht, sollten Benutzer nach dem Ausfüllen einer Reihe von Formularfeldern zur Durchführung einer Aufgabe (wie dem Kauf eines Produkts) eine Bestätigungsseite angezeigt bekommen, auf der sie ihre Eingaben überprüfen und alles, was nicht korrekt aussieht, korrigieren können. Dieses Muster wird häufig auf E-Commerce-Seiten wie Amazon verwendet.
        </p>
      </td>
    </tr>
    <tr>
      <td>3.3.5 Kontextsensitive Hilfe ist verfügbar (AAA)</td>
      <td>
        Stellen Sie Anweisungen und andere geeignete Hinweise im Kontext zur Verfügung, um das Ausfüllen und Absenden von Formularen zu erleichtern.
      </td>
      <td>
        Dies baut im Grunde auf 3.3.1 und anderen ähnlichen Kriterien auf, erfordert jedoch gründlichere kontextbezogene Hilfsinformationen und Dienste, z.B. das Bereitstellen eines dedizierten Links zu einer Hilfeseite oder einem Dienst auf jeder Seite, Bereitstellen von Beispielen, die zeigen, wie der Abschluss aussehen sollte.
      </td>
    </tr>
    <tr>
      <td>3.3.6 Fehlervermeidung (Alle) (AAA)</td>
      <td>
        Dieses Prinzip baut auf 3.3.4 auf und erweitert die Anforderungen auf alle Benutzerfalleingabesituationen, nicht nur auf solche, die sensible Daten betreffen.
      </td>
      <td>Nochmals, siehe 3.3.4.</td>
      </tr>
      <tr>
      <td> 3.3.7 Doppelte Eingabe (A) </td>
      <td>
      Informationen, die erforderlich sind und zuvor vom Nutzer in demselben Prozess oder Benutzerablauf eingegeben oder bereitgestellt wurden, werden entweder automatisch ausgefüllt oder für den Nutzer aus einer Liste von Optionen auswählbar gemacht, es sei denn, die erneute Eingabe der Informationen ist essentiell oder aus Sicherheitsgründen erforderlich, oder die Informationen sind nicht mehr gültig.
      </td>
      <td>Schauen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry">Erläuterung zur doppelten Eingabe</a> an, um mehr zu erfahren.</td>
      </tr>
      <tr>
      <td> 3.3.8 Barrierefreies Authentifizieren (Minimum) (AA)
      </td>
      <td>
Kognitive Funktionstests, wie das Erinnern an ein Passwort, sind für keinen Schritt in einem Authentifizierungsprozess erforderlich, es sei denn, es wird eine Alternative bereitgestellt, wie z.B. Erkennen von Objekten oder persönlichen Inhalten (z.B. Bilder, Videos und Audio) oder ein Mechanismus zur Unterstützung (z.B. Kopieren und Einfügen und automatisches Speichern von Passwörtern).
      </td>
      <td> Schauen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum">Dokumentation zu barrierefreiem Authentifizieren</a> für diesen Standard an, um mehr zu erfahren. </td>
    </tr>
    <tr>
 <td> 3.3.9 Barrierefreies Authentifizieren (Erweitert) (AAA) </td>
    <td>
Ein kognitiver Funktionstest, wie das Erinnern an ein Passwort, darf für keinen Schritt in einem Authentifizierungsprozess erforderlich sein, ohne eine Alternative bereitzustellen, die nicht auf einem kognitiven Funktionstest basiert oder einen Mechanismus bereitstellt, der dem Benutzer hilft, den kognitiven Funktionstest zu bestehen. Authentifizierungstests, die vom Benutzer das Erkennen von Objekten oder das Identifizieren von nicht-textuellen Inhalten verlangen, die der Benutzer für die Website bereitgestellt hat, sind erlaubt.
    </td>
<td> Schauen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced"> erweiterten Dokumentation zum barrierefreien Authentifizieren (AAA)</a> an, um mehr zu erfahren.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.3 Eingabeunterstützung: Benutzern helfen, Fehler zu vermeiden und zu korrigieren](https://www.w3.org/TR/WCAG21/#input-assistance).

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  3. Verständlich
  4. [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)
