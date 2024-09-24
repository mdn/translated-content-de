---
title: Verständlich
slug: Web/Accessibility/Understanding_WCAG/Understandable
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{AccessibilitySidebar}}

Dieser Artikel bietet praktische Ratschläge, wie Sie Ihre Webinhalte so verfassen, dass sie den Erfolgskriterien des **Verständlich**-Prinzips der Web Content Accessibility Guidelines (WCAG) 2.0 und 2.1 entsprechen. Das Prinzip "Verständlich" besagt, dass Informationen und die Bedienung der Benutzeroberfläche verständlich sein müssen.

> [!NOTE]
> Um die W3C-Definitionen für Verständlich und seine Richtlinien und Erfolgskriterien zu lesen, siehe [Prinzip 3: Verständlich — Informationen und die Bedienung der Benutzeroberfläche müssen verständlich sein](https://www.w3.org/TR/WCAG21/#understandable).

## Richtlinie 3.1 — Lesbar: Machen Sie Textinhalte lesbar und verständlich

Diese Richtlinie konzentriert sich darauf, Textinhalte so verständlich wie möglich zu machen.

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
      <td>3.1.1 Sprache der Seite (A)</td>
      <td>
        Die Standardsprache jeder Webseite sollte über Code erkennbar sein. Dies ist wichtig, um sicherzustellen, dass der Leser auf einer Seite landet, die in einer für ihn geeigneten Sprache verfasst ist. Der einfachste Weg, dies zu erreichen, besteht darin, das <a href="/de/docs/Web/HTML/Global_attributes#lang">lang</a>-Attribut des {{htmlelement("html")}}-Elements der Seite auf den Sprachcode zu setzen, der die Sprache, in der die Seite verfasst ist, am besten repräsentiert.
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#setting_the_primary_language_of_the_document"
          >Festlegung der Primärsprache des Dokuments</a
        >.
      </td>
    </tr>
    <tr>
      <td>3.1.2 Sprache von Teilen (AA)</td>
      <td>
        <p>
          In Fällen, in denen der Inhalt einer Seite Wörter oder Ausdrücke in einer anderen Sprache als der Hauptsprache enthält, verwenden Sie das <a href="/de/docs/Web/HTML/Global_attributes#lang">lang</a>-Attribut, um ein Element um den betreffenden Begriff zu setzen (z. B. ein {{htmlelement("span")}}, falls kein semantisches Element verfügbar ist), um eine geeignete Sprache festzulegen.
        </p>
        <p>
          Sie müssen keine andere Sprache für Wörter oder Ausdrücke festlegen, die unabhängig von der Sprache gleich bleiben (z. B. Eigennamen, technische Begriffe, die nicht Teil einer bestimmten Sprache sind).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.3 Ungewöhnliche Wörter (AAA)</td>
      <td>
        Wo technische Begriffe, Fachsprache oder Idiome/Slang verwendet werden, sollten Definitionen für solche Begriffe/Wörter bereitgestellt werden. Ihre Website sollte ein Glossar enthalten, das Definitionen solcher Wörter/Begriffe enthält, auf die Sie dann verlinken können, wenn sie erscheinen, oder zumindest irgendwo im umgebenden Text oder in einer <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#description_lists">Beschreibungsliste</a> am unteren Rand der Seite bereitstellen.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.4 Abkürzungen (AAA)</td>
      <td>
        <p>
          Wenn Abkürzungen verwendet werden, sollten Sie eine Erklärung oder Definition bereitstellen, wenn erforderlich.
        </p>
        <p>
          Das {{htmlelement("abbr")}}-Element wird oft als bevorzugte Methode angesehen, um eine Erklärung für eine Abkürzung bereitzustellen — es nimmt ein <a href="/de/docs/Web/HTML/Global_attributes#title">title</a>-Attribut, das die Erklärung enthält, und diese erscheint, wenn man mit der Maus über das Akronym fährt. Allerdings sind die Inhalte des Titels nicht über die Tastatur zugänglich noch werden sie zuverlässig von Screenreadern vorgelesen. Eine bessere Methode besteht darin, Links zu Glossarseiten zur Verfügung zu stellen, die die Erweiterung und Erklärung des Akronyms enthalten oder diese zumindest im umgebenden Text im Kontext einzuschließen.
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
          Wenn Texte bereitgestellt werden, die ein höheres Leseverständnis als das der unteren Sekundarstufe (normalerweise Kinder im Alter von 11-14 Jahren) erfordern, stellen Sie ergänzende Erklärungsunterlagen zur Verfügung, um Menschen zu helfen, die sie nicht lesen können, oder bieten Sie eine alternative Version, die auf der unteren Sekundarstufe geschrieben ist.
        </p>
        <p>
          Dies bedeutet nicht, dass alle Themen von jedem verstanden werden sollten, sondern dass der Schreibstil für jeden zugänglich sein sollte. Es ist besser, alle Inhalte auf dem Niveau der unteren Sekundarstufe zu schreiben, selbst technische Dokumentation wie Programmier-Tutorials, es sei denn, es gibt einen guten Grund, dies nicht zu tun (z. B. ein alternativer Stil aus poetischen Gründen), oder sie müssen in einem strengen Stil verfasst werden (z. B. W3C-Spezifikationen).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.6 Aussprache (AAA)</td>
      <td>
        <p>
          Ein Mechanismus sollte bereitgestellt werden, um den Benutzern Zugang zur Aussprache von Wörtern zu geben, wenn diese erforderlich ist, um den Inhalt vollständig zu verstehen.
        </p>
        <p>
          Das HTML-{{htmlelement("audio")}}-Element kann verwendet werden, um eine Steuerung zu erstellen, die dem Leser ermöglicht, eine Audiodatei mit der korrekten Aussprache abzuspielen, und es ist auch sinnvoll, eine Textaussprache-Anleitung nach schwierigen Wörtern hinzuzufügen, ähnlich wie in Wörterbucheinträgen.
        </p>
      </td>
      <td>
        Siehe
        <a
          href="/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content"
          >Video- und Audio-Inhalte</a
        >, und
        <a
          href="https://www.oxfordlearnersdictionaries.com/us/about/pronunciation_english.html"
          >Pronunciationsanleitung für das englische Wörterbuch</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.1 Lesbar: Machen Sie Textinhalte lesbar und verständlich](https://www.w3.org/TR/WCAG21/#readable).

## Richtlinie 3.2 — Vorhersehbar: Lassen Sie Webseiten auf vorhersehbare Weise erscheinen und funktionieren

Diese Richtlinie konzentriert sich darauf, Benutzeroberflächen intuitiv und verständlich zu gestalten.

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
      <td>3.2.1 Bei Fokus (A)</td>
      <td>
        <p>
          Wenn ein Steuerelement oder ein anderes Seitenelement den Fokus erhält, sollte es den Kontext nicht so ändern, dass der Benutzer verwirrt oder orientierungslos wird.
        </p>
        <p>
          Dies ist eine Frage des sinnvollen Designs — Menschen wollen nicht, dass Schnittstellen sie überraschen; sie wollen, dass Dinge intuitiv sind und erwartungsgemäß funktionieren. Zum Beispiel sollte das Fokussieren eines Navigationsmenüpunktes nicht die angezeigte Seite ändern — die Anzeige sollte erst nach einer Aktivierung geändert werden.
        </p>
      </td>
      <td>
        Das <code>Element</code>-{{domxref("Element.focus_event", "focus")}}-Ereignis enthält nützliche Informationen. Siehe auch
        <a
          href="/de/docs/Learn/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Wiederherstellung der Tastatur-Zugänglichkeit</a
        >
        für nützliche Umsetzungsideen.
      </td>
    </tr>
    <tr>
      <td>3.2.2 Bei Eingabe (A)</td>
      <td>
        <p>
          Wenn Daten in ein Steuerelement eingegeben werden oder eine Einstellung geändert wird, sollte der Kontext nicht unerwartet geändert werden. Der Benutzer sollte vor der bevorstehenden Änderung gewarnt/beraten werden, bevor sie eintritt.
        </p>
        <p>
          Auch hier sollte sinnvolles Design implementiert werden. Zum Beispiel, wenn das Drücken einer Taste dazu führt, dass die Anwendung die aktuelle Ansicht verlässt, sollte der Benutzer aufgefordert werden, diese Aktion zu bestätigen, seine Arbeit zu speichern, falls angebracht, usw.
        </p>
      </td>
      <td>
        Das {{domxref("Element/input_event", "input")}}-Ereignis ist hier nützlich.
      </td>
    </tr>
    <tr>
      <td>3.2.3 Konsistente Navigation (AA)</td>
      <td>
        <p>
          Der Stil und die Positionierung des Navigationsmenüs/der Steuerung sollten zwischen verschiedenen Seiten oder Ansichten einer Webseite konsistent sein, und die vorhandenen Elemente sollten in der gleichen Reihenfolge erscheinen, selbst wenn zum Beispiel neue Elemente hinzugefügt werden. Wenn der Benutzer eine Änderung initiiert hat, z. B. durch Auswahl eines anderen Farbschemas oder der Position für die Navigation, sollte seine Wahl auf allen Seiten respektiert werden.
        </p>
        <p>
          Auch hier sinnvolles Design — machen Sie die Navigationssteuerelemente auf allen Seiten oder Ansichten gleich.
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
          >Links als Schaltflächen stylen</a
        >
        für ein nützliches, zugängliches Navigationsmenü-Beispiel.
      </td>
    </tr>
    <tr>
      <td>3.2.4 Konsistente Identifikation (AA)</td>
      <td>
        <p>
          Steuerelemente oder Komponenten, die die gleiche Funktionalität haben, sollten auf verschiedene Seiten oder Ansichten gleich identifiziert werden. Ein Währungsumrechner, der auf jeder Seite einer Weltreise-Website erscheint, sollte zum Beispiel genau gleich sein, sowohl semantisch als auch in Bezug auf die Labels.
        </p>
        <p>Auch hier sinnvolles Design!</p>
      </td>
      <td>
        "Labels" können sich auf beschreibende Informationen im Textinhalt oder HTML-Formularlabels beziehen. Siehe
        <a href="/de/docs/Learn/Accessibility/HTML#meaningful_text_labels"
          >Sinnvolle Textlabels</a
        >
        für weitere Informationen.
      </td>
    </tr>
    <tr>
      <td>3.2.5 Änderung auf Anfrage (AAA)</td>
      <td>
        <p>
          Änderungen im Kontext, die Benutzer möglicherweise verwirren oder desorientieren können, sollten nur dann auftreten, wenn sie vom Benutzer angefordert werden, ODER der Benutzer sollte in der Lage sein, sie zu deaktivieren.
        </p>
        <p>
          Wenn Sie etwas haben, das die aktuelle Ansicht erheblich ändert (z. B. Inhalt oder Steuerelemente), lassen Sie den Benutzer steuern, wann er diese Änderung möchte (z. B. welche Seite angezeigt werden soll, wann zum nächsten Foto in der Galerie gewechselt werden soll ...).
        </p>
        <p>
          Wenn Sie etwas wie ein Karussell auf einer Seite haben, bieten Sie eine Option an, um das automatische Weiterblättern zu stoppen. Besser, solche Funktionen, wenn möglich, zu vermeiden.
        </p>
      </td>
 </tr>
      <tr>
      <td> 3.2.6 Konsistente Hilfe (A)</td>
      <td> <p> Webseiten, die Hilfemechanismen enthalten, einschließlich Selbsthilfeoptionen und menschlicher Kontaktdaten, die auf mehreren Webseiten wiederholt werden, müssen diese Mechanismen in der gleichen Reihenfolge auf allen Seiten platzieren, es sei denn, eine Änderung wird vom Benutzer initiiert.</p>
      <td> <p> Schauen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-help">konsistente Hilfe-Dokumentation</a> zu diesem Standard an, um mehr zu erfahren. </p>
      </td>
      </td>
      <tr>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.2 Vorhersehbar: Lassen Sie Webseiten auf vorhersehbare Weise erscheinen und funktionieren](https://www.w3.org/TR/WCAG21/#predictable).

## Richtlinie 3.3 — Eingabeunterstützung: Benutzern helfen, Fehler zu vermeiden und zu korrigieren

Diese Richtlinie konzentriert sich darauf, Benutzern zu helfen, korrekte Informationen einzugeben, wenn es erforderlich ist, und dies mit minimalen Fehlern.

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
      <td>3.3.1 Fehleridentifikation (A)</td>
      <td>
        <p>
          Wenn ein Benutzer ein Formular ausfüllt oder sich zwischen Optionen entscheidet, sollte jeder erkannte Fehler dem Benutzer klar gemeldet werden, zusammen mit dem Formularfeld, auf das sich der Fehler bezieht.
        </p>
        <p>
          Es ist ratsam, eine klientseitige Fehlererkennung und -behandlung zu implementieren, durch HTML-Formularvalidierungsfunktionen und/oder JavaScript, je nachdem, was für Ihre Situation am besten ist. Wenn ein Fehler erkannt wird, sollte eine intuitive Fehlermeldung neben der fehlerhaften Formulareingabe angezeigt werden, um dem Benutzer zu helfen, seine Eingaben zu korrigieren. Für Screenreader-Benutzer können Sie Aria-Live-Regionen verwenden, um den Benutzer auf eine Änderung auf der Seite hinzuweisen.
        </p>
        <div class="note">
          <p>
            <strong>Hinweis:</strong> Serverseitige Validierung sollte <em>immer</em> zusammen mit klientseitiger Validierung verwendet werden. Klientseitige Validierung ist zu leicht abzuschalten oder anderweitig zu umgehen, daher kann man sich nicht allein darauf verlassen.
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
      <td>3.3.2 Labels oder Anweisungen (A)</td>
      <td>
        <p>
          Es sollten klare Anweisungen bereitgestellt werden, wenn Dateneingaben erforderlich sind. Wenn eine einfache Anweisung oder Aufforderung erforderlich ist, können Sie {{htmlelement("label")}}-Elemente für einzelne Eingaben wie Name oder Alter verwenden, eine Kombination aus {{htmlelement("label")}}s und {{htmlelement("fieldset")}}s/{{htmlelement("legend")}}s für mehrere Eingaben, die zusammengehören (wie die Elemente eines Geburtsdatums oder einer Postadresse).
        </p>
        <p>
          Wenn komplexere Erklärungen benötigt werden, können Sie immer erklärende Absätze einfügen oder vielleicht müssen Sie versuchen, Ihre Formulare intuitiver zu gestalten.
        </p>
      </td>
      <td>
        <ul>
          <li>
            <a
              href="/de/docs/Learn/Accessibility/HTML#meaningful_text_labels"
              >Sinnvolle Textlabels</a
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
              >Textlabels und Namen</a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3.3.3 Fehlerkorrekturvorschläge (AA)</td>
      <td>
        <p>
          Wenn ein Fehler erkannt wird und Korrekturvorschläge bekannt sind, stellen Sie diese dem Benutzer zur Verfügung (z. B. Vorschlagen von Alternativen, wenn der Benutzer einen Benutzernamen auswählt, der bereits vergeben ist), es sei denn, dies würde ein Sicherheitsproblem oder Kontextproblem verursachen (z. B. bei der Eingabe eines Passworts) oder sie versuchen, eine Frage in einer Quiz-App zu beantworten.
        </p>
        <p>
          In solchen Fällen, wenn es angebracht ist, werden Sie wahrscheinlich eine Kombination aus JavaScript und serverseitiger Funktionalität verwenden, um zu prüfen, ob die Eingabe korrekt ist, und falls nicht, welche geeigneten Vorschläge dem Benutzer gemacht werden können. Solche Vorschläge sollten nützlich im Kontext angezeigt werden, genau wie Fehlermeldungen (siehe 3.3.1).
        </p>
      </td>
      <td>Noch keine Tutorialvorschläge.</td>
    </tr>
    <tr>
      <td>3.3.4 Fehlerprävention (Legal, Finanzen, Daten) (AA)</td>
      <td>
        <p>
          Im Fall von Formularen, die mit der Eingabe sensibler Daten zu tun haben (wie juristische Vereinbarungen, E-Commerce-Transaktionen oder persönliche Daten), sollte mindestens eines der Folgenden zutreffen:
        </p>
        <ul>
          <li>Einsendungen sind umkehrbar.</li>
          <li>
            Daten werden auf Fehler überprüft, und der Benutzer erhält die Gelegenheit, sie zu korrigieren.
          </li>
          <li>
            Ein Mechanismus ist verfügbar, um die Informationen vor der endgültigen Einsendung zu bestätigen und korrigieren.
          </li>
        </ul>
      </td>
      <td>
        <p>
          <strong>Umkehrbar</strong> — für jede Ansicht, in der Daten eingegeben werden können, bieten Sie eine gleichwertige Ansicht, die es Ihnen ermöglicht, einen Eintrag zu bearbeiten oder sogar zu löschen, falls angemessen (siehe z. B. das <a href="/de/docs/Learn/Server-side/Django">Django Web-Framework</a>).
        </p>
        <p>
          <strong>Datenüberprüfung</strong> — wie in 3.3.1 behandelt, sollte eine Kombination aus klientseitiger und serverseitiger Validierung verwendet werden, um Fehler zu erkennen und hilfreiche Nachrichten an den Benutzer zu übermitteln, die es ihm ermöglichen, seine Eingaben zu korrigieren.
        </p>
        <p>
          <strong>Bestätigen und korrigieren</strong> — wo es angebracht ist, sollten dem Benutzer nach dem Ausfüllen einer Reihe von Formularfeldern zur Durchführung einer Aufgabe (wie dem Kauf eines Produkts) eine Bestätigungsansicht angezeigt werden, auf der er seine Eingaben überprüfen und alle Fehler korrigieren kann. Dieses Muster wird häufig auf E-Commerce-Websites wie Amazon verwendet.
        </p>
      </td>
    </tr>
    <tr>
      <td>3.3.5 Kontextabhängige Hilfe ist verfügbar (AAA)</td>
      <td>
        Stellen Sie Anweisungen und andere geeignete Hinweise im Kontext zur Verfügung, um die Fertigstellung und Einreichung von Formularen zu unterstützen.
      </td>
      <td>
        Dies baut im Grunde auf 3.3.1 und anderen ähnlichen Kriterien auf, erfordert jedoch gründlichere kontextbezogene Hilfsinformationen und -dienste, z. B. eine spezielle Verlinkung zu einer Hilfeseite oder -dienstleistung auf jeder Seite oder dem Bereitstellen von Beispielen, die zeigen, wie eine erfolgreiche Fertigstellung aussehen sollte.
      </td>
    </tr>
    <tr>
      <td>3.3.6 Fehlervermeidung (Alle) (AAA)</td>
      <td>
        Dieses Prinzip baut auf 3.3.4 auf und erweitert seine Anforderungen auf alle Benutzereingabesituationen, nicht nur auf solche, die mit sensiblen Daten zu tun haben.
      </td>
      <td>Siehe erneut 3.3.4.</td>
      </tr>
      <tr>
      <td> 3.3.7 Doppelte Eingabe (A) </td>
      <td>
      Informationen, die erforderlich sind und die der Benutzer zuvor im gleichen Prozess oder Benutzerfluss eingegeben oder bereitgestellt hat, werden entweder automatisch ausgefüllt oder dem Benutzer zur Auswahl aus einer Liste von Optionen angeboten, es sei denn, eine erneute Eingabe der Informationen ist unerlässlich oder aus Sicherheitsgründen erforderlich oder wenn die Informationen nicht mehr gültig sind.
      </td>
      <td>Schauen Sie sich <a href="https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry">Doppelte Eingaben verstehen</a> an, um mehr zu erfahren.</td>
      </tr>
      <tr>
      <td> 3.3.8 Zugängliche Authentifizierung (Minimum) (AA)
      </td>
      <td>
Kognitive Funktionstests, wie das Erinnern an ein Passwort, sind für keinen Schritt im Authentifizierungsprozess erforderlich, es sei denn, eine Alternative wird bereitgestellt, wie z. B. das Erkennen eines Objekts oder persönlichen Inhalts (z. B. Bilder, Videos und Audio), oder ein Mechanismus zur Unterstützung (z. B. Kopieren und Einfügen und automatisches Speichern von Passwörtern).
      </td>
      <td> Schauen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum">Dokumentation zur zugänglichen Authentifizierung</a> für diesen Standard an, um mehr zu erfahren. </td>
    </tr>
    <tr>
 <td> 3.3.9 Zugängliche Authentifizierung (Erweitert) (AAA) </td>
    <td>
Ein kognitiver Funktionstest, wie das Erinnern an ein Passwort, darf in keinem Schritt des Authentifizierungsprozesses erforderlich sein, ohne eine Alternative bereitzustellen, die keinen kognitiven Funktionstest erfordert oder einen Mechanismus bietet, der dem Benutzer hilft, den kognitiven Funktionstest abzuschließen. Authentifizierungstests, die vom Benutzer das Erkennen von Objekten oder das Identifizieren von nicht-textlichen Inhalten erfordern, die vom Benutzer der Website zur Verfügung gestellt wurden, sind erlaubt.
    </td>
<td> Schauen Sie sich die <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced">Dokumentation zur erweiterten zugänglichen Authentifizierung (AAA)</a> an, um mehr zu erfahren.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Siehe auch die WCAG-Beschreibung für [Richtlinie 3.3 Eingabeunterstützung: Benutzern helfen, Fehler zu vermeiden und zu korrigieren](https://www.w3.org/TR/WCAG21/#input-assistance).

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG)

  1. [Wahrnehmbar](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
  2. [Bedienbar](/de/docs/Web/Accessibility/Understanding_WCAG/Operable)
  3. Verständlich
  4. [Robust](/de/docs/Web/Accessibility/Understanding_WCAG/Robust)
