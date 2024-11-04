---
title: Verständlich
slug: Web/Accessibility/Understanding_WCAG/Understandable
l10n:
  sourceCommit: 3a004b55441ee5ac51bd34be5f3b7c6ce693ed6d
---

{{AccessibilitySidebar}}

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so schreiben können, dass sie den Erfolgskriterien des **Verständlich**-Prinzips der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 entsprechen. Verständlich bedeutet, dass Informationen und die Bedienung der Benutzeroberfläche verständlich sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Verständlich und die dazugehörigen Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 3: Verständlich — Informationen und die Bedienung der Benutzeroberfläche müssen verständlich sein](https://www.w3.org/TR/WCAG21/#understandable).

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
        Die Standardsprache jeder Webseite sollte über den Code erkennbar sein. Dies ist wichtig, um sicherzustellen, dass der Leser auf einer Seite gelandet ist, die in einer für ihn geeigneten Sprache verfasst ist. Der einfachste Weg, dies zu erreichen, besteht darin, das `lang`-Attribut im {{htmlelement("html")}}-Element der Seite zu setzen und ihm einen Wert zu geben, der dem Sprachcode entspricht, der die Sprache am besten repräsentiert, in der die Seite verfasst ist.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#setting_the_primary_language_of_the_document"
          >Festlegen der Primärsprache des Dokuments</a
        >.
      </td>
    </tr>
    <tr>
      <td>3.1.2 Sprache der Teile (AA)</td>
      <td>
        <p>
          In Fällen, in denen der Inhalt einer Seite Wörter oder Ausdrücke enthält, die in einer anderen Sprache als der Hauptsprache sind, verwenden Sie das `lang`-Attribut in einem Element, das den betreffenden Begriff umschließt (z. B. ein {{htmlelement("span")}}, wenn kein semantisches Element verfügbar ist), um eine geeignete Sprache für ihn festzulegen.
        </p>
        <p>
          Es ist nicht erforderlich, eine andere Sprache festzulegen für Wörter oder Ausdrücke, die unabhängig von der Sprache gleich sind (z. B. Eigennamen, technische Begriffe, die nicht Teil einer bestimmten Sprache sind).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.3 Ungewöhnliche Wörter (AAA)</td>
      <td>
        Wo technische Begriffe, Jargon oder Idiome/Slang verwendet werden, sollten Definitionen für solche Ausdrücke/Wörter bereitgestellt werden. Ihre Website sollte ein Glossar enthalten, das Definitionen solcher Wörter/Begriffe enthält, auf die Sie dann verlinken können, wenn sie auftreten, oder zumindest Definitionen irgendwo im umgebenden Text oder in einer
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#description_lists"
          >Beschreibungsliste</a
        >
        am Ende der Seite bereitstellen.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.4 Abkürzungen (AAA)</td>
      <td>
        <p>
          Wo Abkürzungen verwendet werden, sollten Sie eine Erweiterung oder bei Bedarf eine Definition bereitstellen.
        </p>
        <p>
          Das {{htmlelement("abbr")}}-Element wird oft als bevorzugte Methode angesehen, um eine Erweiterung für eine Abkürzung bereitzustellen — es nimmt ein `title`-Attribut, das die Erweiterung enthält, und diese erscheint, wenn die Abkürzung überfahren wird. Allerdings sind die Titelinhalte nicht über die Tastatur zugänglich, noch werden sie zuverlässig von Bildschirmlesegeräten vorgelesen. Eine bessere Möglichkeit, dies zu handhaben, besteht darin, erneut Links zu Glossarseiten bereitzustellen, die die Erweiterung und Erklärung der Abkürzung enthalten, oder zumindest sie im umgebenden Text im Kontext einzufügen.
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
      <td>3.1.5 Lesefähigkeit (AAA)</td>
      <td>
        <p>
          Wenn Text bereitgestellt wird, der ein höheres Leseniveau als das der unteren Sekundarstufe erfordert (typischerweise etwa 11- bis 14-Jährige), stellen Sie zusätzliches Erklärmaterial bereit, um Menschen zu helfen, die ihn nicht lesen können, oder stellen Sie eine alternative Version bereit, die auf einem niedrigeren Sekundarniveau geschrieben ist.
        </p>
        <p>
          Dies bedeutet nicht, dass alle Themen von allen verstanden werden sollten, sondern dass der Schreibstil für alle zugänglich sein sollte. Es ist besser, alle Inhalte auf einem niedrigeren Sekundarniveau zu schreiben, selbst technische Dokumentationen wie Programmieranleitungen, es sei denn, es gibt einen guten Grund, dies nicht zu tun (z. B. ein alternativer Stil für poetische Wirkung), oder sie müssen in einem strengen Stil geschrieben werden (z. B. W3C-Spezifikationen).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.6 Aussprache (AAA)</td>
      <td>
        <p>
          Es sollte ein Mechanismus bereitgestellt werden, der Benutzern den Zugang zur Aussprache von Wörtern ermöglicht, wenn dies erforderlich ist, um den Inhalt vollständig zu verstehen.
        </p>
        <p>
          Das HTML-{{htmlelement("audio")}}-Element kann verwendet werden, um eine Steuerung zu erstellen, die es dem Leser ermöglicht, eine Audiodatei abzuspielen, die die korrekte Aussprache enthält, und es macht auch Sinn, einen textuellen Ausspracheführer nach schwierigen Wörtern zu platzieren, ähnlich wie in einem Wörterbucheintrag.
        </p>
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content"
          >Video- und Audioinhalte</a
        >, und
        <a
          href="https://www.oxfordlearnersdictionaries.com/us/about/pronunciation_english.html"
          >Ausspracheführer für das englische Wörterbuch</a
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
      <td>3.2.1 Beim Fokus (A)</td>
      <td>
        <p>
          Wenn eine Steuerung oder ein anderes Seitenmerkmal den Fokus erhält, sollte es den Kontext nicht so ändern, dass es den Benutzer verwirren oder desorientieren könnte.
        </p>
        <p>
          Dies ist eine Frage des sinnvollen Designs — Menschen wollen nicht, dass Schnittstellen sie überraschen; sie wollen, dass Dinge intuitiv sind und sich wie erwartet verhalten. Zum Beispiel sollte das Fokussieren einer Navigationsmenüoption nicht die angezeigte Seite ändern — sie sollte aktiviert werden, bevor sich die Anzeige ändert.
        </p>
      </td>
      <td>
        Das `focus`-Ereignis des <code>Element</code> enthält einige nützliche Informationen. Siehe auch
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
          Wenn Daten in eine Steuerung eingegeben oder eine Einstellung geändert wird, sollte der Kontext nicht unerwartet geändert werden. Der Benutzer sollte gewarnt/vorgewarnt werden, bevor die Änderung erfolgt.
        </p>
        <p>
          Auch hier sollte ein sinnvolles Design implementiert werden. Zum Beispiel, wenn das Drücken eines Buttons dazu führt, dass die Anwendung die aktuelle Ansicht verlässt, sollte der Benutzer gefragt werden, diese Aktion zu bestätigen, ihre Arbeit zu speichern, wenn dies angebracht ist, usw.
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
          Navigationsmenü/-steuerung-Stil und -Positionierung sollten zwischen verschiedenen Seiten oder Ansichten einer Webseite konsistent sein, und die vorhandenen Elemente sollten in der gleichen Reihenfolge erscheinen, selbst wenn zum Beispiel neue Elemente hinzugefügt werden. Wenn der Benutzer eine Änderung initiiert hat, z. B. eine andere Farbgebung oder Position für die Navigation wählt, sollte ihre Wahl auf allen Seiten respektiert werden.
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
          >Links als Buttons gestalten</a
        >
        für ein nützliches Beispiel für ein zugängliches Navigationsmenü.
      </td>
    </tr>
    <tr>
      <td>3.2.4 Konsistente Identifikation (AA)</td>
      <td>
        <p>
          Steuerelemente oder Komponenten, die die gleiche Funktionalität haben, sollten auf verschiedene Seiten oder Ansichten hinweg auf die gleiche Weise identifiziert werden. Ein Währungsumrechner, der auf jeder Seite einer Website über Weltreisen erscheint, sollte zum Beispiel genau gleich sein, semantisch und in Bezug auf Beschriftungen.
        </p>
        <p>
          Auch hier sinnvolles Design!
        </p>
      </td>
      <td>
        "Beschriftungen" können sich auf beschreibende Informationen in Textinhalten oder HTML-Formularbeschriftungen beziehen. Siehe
        <a href="/de/docs/Learn/Accessibility/HTML#meaningful_text_labels"
          >Sinnvolle Textbeschriftungen</a
        >
        für mehr Informationen.
      </td>
    </tr>
    <tr>
      <td>3.2.5 Änderung auf Anfrage (AAA)</td>
      <td>
        <p>
          Änderungen im Kontext, die Benutzer möglicherweise verwirren oder desorientieren könnten, sollten nur stattfinden, wenn sie vom Benutzer angefragt werden, ODER der Benutzer sollte in der Lage sein, sie zu deaktivieren.
        </p>
        <p>
          Wenn Sie etwas benötigen, das die aktuelle Ansicht erheblich ändert (z. B. Inhalte oder Steuerungen), lassen Sie den Benutzer kontrollieren, wann er diese Änderung vornehmen möchte (z. B. welche Seite angezeigt werden soll, wann zum nächsten Foto in der Galerie vorgegangen werden soll ...)
        </p>
        <p>
          Wenn Sie etwas wie ein Karussell auf einer Seite haben, bieten Sie eine Option an, um das automatische Vorwärtsbewegen zu stoppen. Besser ist es, solche Funktionen nach Möglichkeit zu vermeiden.
        </p>
      </td>
 </tr>
      <tr>
      <td> 3.2.6 Konsistente Hilfe (A)</td>
      <td> <p> Webseiten, die Hilfemechanismen enthalten, einschließlich Selbsthilfemöglichkeiten und Kontaktdaten für menschlichen Kontakt, die auf mehreren Webseiten wiederholt werden, müssen diese Mechanismen auf allen Seiten in derselben Reihenfolge platzieren, es sei denn, eine Änderung wird vom Benutzer initiiert.</p>
      <td> <p> Informieren Sie sich über die <a href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-help">dokumentation zur konsistenten Hilfe</a> für diesen Standard, um mehr zu erfahren. </p>
      </td>
      </td>
      <tr>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.2 Vorhersehbar: Lassen Sie Webseiten auf vorhersehbare Weise erscheinen und funktionieren](https://www.w3.org/TR/WCAG21/#predictable).

## Richtlinie 3.3 — Eingabeunterstützung: Helfen Sie Benutzern, Fehler zu vermeiden und zu korrigieren

Diese Richtlinie konzentriert sich darauf, Benutzern zu helfen, korrekte Informationen einzugeben, wenn sie erforderlich sind, mit einem Minimum an Fehlern.

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
          Wenn ein Benutzer ein Formular ausfüllt oder zwischen Optionen wählt, sollte jeder erkannte Fehler dem Benutzer klar gemeldet werden, zusammen mit dem Formularfeld, auf das sich der Fehler bezieht.
        </p>
        <p>
          Es wird empfohlen, eine clientseitige Fehlererkennung und -behandlung über HTML-Formularvalidierungsfunktionen und/oder JavaScript zu implementieren, je nachdem, was für Ihre Situation am besten geeignet ist. Wenn ein Fehler erkannt wird, sollte eine intuitive Fehlermeldung neben dem fehlerhaften Formulareingabefeld angezeigt werden, um dem Benutzer zu helfen, seine Eingaben zu korrigieren. Für Bildschirmleserbenutzer können Sie aria-Live-Regionen verwenden, um den Benutzer auf eine Seitenänderung aufmerksam zu machen.
        </p>
        <div class="note notecard">
          <p>
            <strong>Hinweis:</strong> Serverseitige Validierung sollte <em>immer</em> zusätzlich zur clientseitigen Validierung verwendet werden. Die clientseitige Validierung lässt sich zu leicht ausschalten oder auf andere Weise umgehen, sodass sie nicht allein verwendet werden kann.
          </p>
        </div>
      </td>
      <td>
        Siehe
        <a href="/de/docs/Learn/Forms/Form_validation"
          >Formulardatenvalidierung</a
        >
        für umfassende Validierungsinformationen, und
        <a
          href="/de/docs/Learn/Accessibility/WAI-ARIA_basics#dynamic_content_updates"
          >WAI-ARIA: Dynamische Inhaltsaktualisierungen</a
        >
        für Informationen zu Live-Regionen.
      </td>
    </tr>
    <tr>
      <td>3.3.2 Beschriftungen oder Anweisungen (A)</td>
      <td>
        <p>
          Klare Anweisungen sollten gegeben werden, wenn eine Dateneingabe erforderlich ist. Wenn eine einfache Anweisung oder Aufforderung erforderlich ist, können Sie {{htmlelement("label")}}-Elemente für einzelne Eingaben wie Namen oder Alter verwenden, eine Kombination aus {{htmlelement("label")}}s und {{htmlelement("fieldset")}}s/{{htmlelement("legend")}}s für mehrere Eingaben, die zusammengehören (wie die Elemente eines Geburtsdatums oder einer Postanschrift).
        </p>
        <p>
          Wenn eine komplexere Erklärung erforderlich ist, können Sie immer auch erläuternde Absätze einfügen oder möglicherweise versuchen, Ihre Formulare intuitiver zu gestalten.
        </p>
      </td>
      <td>
        <ul>
          <li>
            <a
              href="/de/docs/Learn/Accessibility/HTML#meaningful_text_labels"
              >Sinnvolle Textbeschriftungen</a
            >
          </li>
          <li>
            <a href="/de/docs/Learn/Forms/How_to_structure_a_web_form"
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
      <td>3.3.3 Fehlerhinweis (AA)</td>
      <td>
        <p>
          Wenn ein Fehler erkannt wird und Vorschläge zur Korrektur bekannt sind, stellen Sie diese dem Benutzer zur Verfügung (z. B. Alternativen vorschlagen, wenn der Benutzer einen Benutzernamen gewählt hat, der bereits vergeben ist), es sei denn, dies würde zu einem Sicherheitsproblem führen (z. B. bei Eingabe eines Passworts) oder zu einem Kontextproblem (z. B. wenn sie versuchen, eine Frage in einer Quiz-App zu beantworten).
        </p>
        <p>
          In solchen Fällen, wenn es angemessen ist, verwenden Sie wahrscheinlich eine Kombination aus JavaScript und serverseitiger Funktionalität, um zu überprüfen, ob die Eingabe korrekt ist und, wenn nicht, welche möglichen Vorschläge dem Benutzer gegeben werden können. Solche Vorschläge sollten sinnvoll im Kontext angezeigt werden, genau wie Fehlermeldungen (siehe 3.3.1).
        </p>
      </td>
      <td>Keine Tutorialvorschläge bisher.</td>
    </tr>
    <tr>
      <td>3.3.4 Fehlervermeidung (Rechtlich, Finanziell, Daten) (AA)</td>
      <td>
        <p>
          Bei Formularen, die die Eingabe sensibler Daten betreffen (wie rechtliche Vereinbarungen, E-Commerce-Transaktionen oder persönliche Daten), sollte mindestens eines der folgenden zutreffen:
        </p>
        <ul>
          <li>Einsendungen sind reversibel.</li>
          <li>
            Daten werden auf Fehler überprüft, und dem Benutzer wird die Möglichkeit gegeben, sie zu korrigieren.
          </li>
          <li>
            Ein Mechanismus ist verfügbar, um Informationen vor der endgültigen Einreichung zu bestätigen und zu korrigieren.
          </li>
        </ul>
      </td>
      <td>
        <p>
          <strong>Reversibel</strong> — für jede Ansicht, in der Daten eingegeben werden können, bieten Sie eine äquivalente Ansicht an, die es Ihnen ermöglicht, einen Eintrag zu bearbeiten oder sogar zu löschen, falls angemessen (siehe zum Beispiel
          <a href="/de/docs/Learn/Server-side/Django">Django-Web-Framework</a
          >).
        </p>
        <p>
          <strong>Datenüberprüfung</strong> — wie in 3.3.1 behandelt, sollte eine Kombination aus clientseitiger und serverseitiger Validierung verwendet werden, um Fehler zu erkennen und hilfreiche Meldungen an den Benutzer zu zeigen, damit er seine Eingaben korrigieren kann.
        </p>
        <p>
          <strong>Bestätigen und korrigieren</strong> — nach dem Ausfüllen einer Reihe von Formularfeldern zur Durchführung einer Aufgabe (wie dem Kauf eines Produkts) sollte dem Benutzer eine Bestätigungsseite angezeigt werden, auf der er seine Eingaben überprüfen und alles korrigieren kann, was nicht korrekt aussieht. Dieses Muster wird häufig auf E-Commerce-Websites wie Amazon verwendet.
        </p>
      </td>
    </tr>
    <tr>
      <td>3.3.5 Kontextbezogene Hilfe ist verfügbar (AAA)</td>
      <td>
        Stellen Sie Anweisungen und andere geeignete Hinweise im Kontext zur Verfügung, um das Ausfüllen und Absenden von Formularen zu erleichtern.
      </td>
      <td>
        Dies baut wirklich nur auf 3.3.1 und anderen ähnlichen Kriterien auf, erfordert jedoch umfassendere kontextbezogene Hilfesinformationen und -dienste, z. B. das Bereitstellen eines speziellen Links zu einer Hilfeseite oder einem Dienst auf jeder Seite und das Bereitstellen von Beispielen, die zeigen, wie eine erfolgreiche Betrachtung aussehen sollte.
      </td>
    </tr>
    <tr>
      <td>3.3.6 Fehlervermeidung (Alle) (AAA)</td>
      <td>
        Dieses Prinzip baut auf 3.3.4 auf und erweitert seine Anforderungen auf alle Benutzereingabesituationen, nicht nur auf solche, die sensible Daten betreffen.
      </td>
      <td>Siehe erneut 3.3.4.</td>
      </tr>
      <tr>
      <td>3.3.7 Redundante Eingabe (A)</td>
      <td>
      Informationen, die erforderlich sind und vom Benutzer im gleichen Verfahren oder Benutzerfluss zuvor eingegeben oder bereitgestellt wurden, werden entweder automatisch ausgefüllt oder dem Benutzer aus einer Liste von Optionen auswählbar gemacht, es sei denn, das erneute Eingeben der Informationen ist unerlässlich oder aus Sicherheitsgründen erforderlich, oder wenn die Informationen nicht mehr gültig sind.
      </td>
      <td>Informieren Sie sich über <a href="https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry">das Verständnis für redundante Eingaben</a>, um mehr zu erfahren.</td>
      </tr>
      <tr>
      <td>3.3.8 Zugängliche Authentifizierung (Minimum) (AA)</td>
      <td>
Kognitive Funktionstests, wie das Erinnern eines Passworts, sind in keinem Schritt eines Authentifizierungsprozesses erforderlich, es sei denn, es wird eine Alternative zur Verfügung gestellt, z. B. die Erkennung eines Objekts oder persönlicher Inhalte (z. B. Bilder, Videos und Audios) oder ein Mechanismus, der hilft (z. B. Kopieren und Einfügen und automatisches Speichern von Passwörtern).
      </td>
      <td> Informieren Sie sich über die <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum">dokumentation zur zugänglichen Authentifizierung</a> für diesen Standard, um mehr zu erfahren. </td>
    </tr>
    <tr>
 <td>3.3.9 Zugängliche Authentifizierung (Erweitert) (AAA)</td>
    <td>
Ein kognitiver Funktionstest, wie das Erinnern eines Passworts, darf in keinem Schritt eines Authentifizierungsprozesses ohne Bereitstellung einer Alternative erforderlich sein, die nicht auf einem kognitiven Funktionstest beruht oder einen Mechanismus bietet, der den Benutzer beim Absolvieren des kognitiven Funktionstests unterstützt. Authentifizierungstests, die vom Benutzer erfordern, Objekte zu erkennen oder nicht-textliche Inhalte zu identifizieren, die der Benutzer der Website zur Verfügung gestellt hat, sind zulässig.
    </td>
<td> Informieren Sie sich über die <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced">dokumentation zur erweiterten zugänglichen Authentifizierung (AAA)</a> für weitere Informationen.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.3 Eingabeunterstützung: Helfen Sie Benutzern, Fehler zu vermeiden und zu korrigieren](https://www.w3.org/TR/WCAG21/#input-assistance).

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG)

  1. [Perceivable](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
  2. [Operable](/de/docs/Web/Accessibility/Understanding_WCAG/Operable)
  3. Verständlich
  4. [Robust](/de/docs/Web/Accessibility/Understanding_WCAG/Robust)
