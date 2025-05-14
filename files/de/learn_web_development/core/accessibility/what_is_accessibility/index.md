---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Core/Accessibility/What_is_accessibility
l10n:
  sourceCommit: eaec5c4226ac64696a95314a7bce995165a4d124
---

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}

Dieser Artikel beginnt das Modul mit einem guten Überblick darüber, was Barrierefreiheit ist — dieser Überblick umfasst, welche Personengruppen wir berücksichtigen müssen und warum, welche Werkzeuge verschiedene Menschen verwenden, um mit dem Web zu interagieren, und wie wir Barrierefreiheit in unseren Webentwicklungs-Workflow integrieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Punkt der Barrierefreiheit — erhöhter Zugang zu digitalen Diensten für Menschen mit zusätzlichen Bedürfnissen, verbesserte Benutzerfreundlichkeit für alle, bessere SEO und eine breitere Zielgruppe.</li>
          <li>Bewusstsein für die gesetzlichen Anforderungen an Barrierefreiheit.</li>
          <li>Dass Barrierefreiheit von Beginn eines Projekts an berücksichtigt werden sollte und nicht erst am Ende hinzugefügt wird.</li>
          <li>Vertrautheit mit den Konformitätskriterien der Web Content Accessibility Guidelines (WCAG).</li>
          <li>Bewusstsein für Barrierefreiheits-APIs und deren Zweck.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist also Barrierefreiheit?

Barrierefreiheit ist die Praxis, Ihre Websites für so viele Menschen wie möglich nutzbar zu machen. Traditionell denken wir hierbei an Menschen mit Behinderungen, aber die Praxis, Seiten barrierefrei zu gestalten, kommt auch anderen Gruppen zugute, wie zum Beispiel Personen, die mobile Geräte verwenden oder langsame Netzwerkverbindungen haben.

Man kann Barrierefreiheit auch als Gleichbehandlung aller betrachten, indem man ihnen gleiche Chancen bietet, unabhängig von ihren Fähigkeiten oder Umständen. So wie es falsch ist, jemanden wegen eines Rollstuhls aus einem physischen Gebäude auszuschließen (moderne öffentliche Gebäude haben in der Regel Rollstuhlrampen oder Aufzüge), ist es auch nicht richtig, jemanden aufgrund einer Sehbehinderung von einer Website auszuschließen. Wir sind alle unterschiedlich, aber wir sind alle Menschen und haben daher dieselben Menschenrechte.

Barrierefreiheit ist das Richtige. Die Bereitstellung barrierefreier Websites ist in einigen Ländern gesetzlich vorgeschrieben, was bedeutende Märkte öffnen kann, die ansonsten nicht in der Lage wären, Ihre Dienste zu nutzen oder Ihre Produkte zu kaufen.

Der Bau barrierefreier Websites bringt allen Vorteile:

- Semantisches HTML, das die Barrierefreiheit verbessert, verbessert auch SEO und macht Ihre Seite besser auffindbar.
- Die Sorge um Barrierefreiheit demonstriert gute Ethik und Moral, was Ihr öffentliches Image verbessert.
- Andere bewährte Praktiken, die die Barrierefreiheit verbessern, machen Ihre Seite auch für andere Gruppen benutzbarer, wie z.B. Benutzer von Mobiltelefonen oder diejenigen mit geringer Netzwerkgeschwindigkeit. Tatsächlich kann jeder von vielen solcher Verbesserungen profitieren.
- Haben wir erwähnt, dass es in einigen Regionen auch gesetzlich vorgeschrieben ist?

## Welche Arten von Behinderungen betrachten wir?

Menschen mit Behinderungen sind genauso vielfältig wie Menschen ohne Behinderungen, ebenso wie ihre Behinderungen. Die wichtige Lektion hier ist, über den eigenen Computer und die eigene Nutzung des Webs hinauszudenken und zu lernen, wie andere es nutzen — _Sie sind nicht Ihre Benutzer_. Die Hauptarten von Behinderungen, die berücksichtigt werden müssen, werden unten erklärt, zusammen mit eventuellen speziellen Werkzeugen, die sie verwenden, um auf Webinhalte zuzugreifen (bekannt als **assistive technologies** oder **ATs**).

> [!NOTE]
> Das Merkblatt der Weltgesundheitsorganisation zu [Behinderung und Gesundheit](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health) besagt, dass "über eine Milliarde Menschen, etwa 15% der Weltbevölkerung, eine Form der Behinderung haben" und "zwischen 110 Millionen und 190 Millionen Erwachsene erhebliche funktionale Schwierigkeiten haben".

### Menschen mit Sehbeeinträchtigungen

Zu den Menschen mit Sehbeeinträchtigungen gehören Menschen mit Blindheit, schwacher Sehkraft und Farbenblindheit. Viele Menschen mit Sehbehinderungen verwenden Bildschirmvergrößerungen, die entweder physische Vergrößerungen oder Software-Zoom-Funktionen sind. Die meisten Browser und Betriebssysteme verfügen heutzutage über Zoom-Funktionen. Einige Benutzer sind auf Screenreader angewiesen, Software, die digitale Texte laut vorliest. Beispiele für Screenreader sind:

- Kostenpflichtige kommerzielle Produkte, wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows) und [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows).
- Kostenlose Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- In das Betriebssystem integrierte Software, wie [VoiceOver](https://www.apple.com/accessibility/features/?vision) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf ChromeOS) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Es ist eine gute Idee, sich mit Screenreadern vertraut zu machen; Sie sollten auch einen Screenreader einrichten und damit experimentieren, um eine Vorstellung davon zu bekommen, wie er funktioniert. Siehe unsere [Screenreader-Tutorials](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für weitere Details zur Nutzung. Das folgende Video bietet ebenfalls ein kurzes Beispiel dafür, wie die Erfahrung ist.

{{EmbedYouTube("IK97XMibEws")}}

In Bezug auf die Statistik schätzt die Weltgesundheitsorganisation, dass "weltweit 285 Millionen Menschen sehbehindert sind: 39 Millionen sind blind und 246 Millionen haben eine schwache Sehkraft." (siehe [Sehbehinderung und Blindheit](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)). Das ist eine große und bedeutende Benutzergruppe, die man einfach verpassen kann, weil Ihre Seite nicht korrekt codiert ist — fast so groß wie die Bevölkerung der Vereinigten Staaten von Amerika.

### Menschen mit Hörbeeinträchtigungen

Menschen, die [gehörlos oder schwerhörig (DHH)](https://www.nad.org/resources/american-sign-language/community-and-culture-frequently-asked-questions/) sind, haben unterschiedliche Stufen von Hörverlust von leicht bis schwerwiegend. Obwohl einige AT verwenden (siehe [Hilfsmittel für Menschen mit Hör-, Stimm-, Sprach- oder Sprachstörungen](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), sind sie nicht weit verbreitet.

Um Zugang zu ermöglichen, müssen Textalternativen bereitgestellt werden. Videos sollten manuell untertitelt und Transkripte für Audiomaterial bereitgestellt werden. Darüber hinaus sollte aufgrund des hohen Maßes an [Sprachentzug](https://epicspecialeducationstaffing.com/language-deprivation/#:~:text=Language%20deprivation%20is%20the%20term,therefore%20not%20exposed%20to%20language.) in den DHH-Populationen die [Textvereinfachung in Betracht gezogen werden](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/).

Gehörlose und schwerhörige Menschen repräsentieren ebenfalls eine bedeutende Benutzerbasis — "466 Millionen Menschen weltweit haben eine schädliche Hörverlust", besagt das Faktenblatt der Weltgesundheitsorganisation zur [Gehörlosigkeit und Hörverlust](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss).

### Menschen mit Mobilitätsbeeinträchtigungen

Diese Menschen haben Behinderungen bezüglich der Bewegung, die rein körperliche Probleme sein könnten (wie Verlust einer Gliedmaße oder Lähmung) oder neurologische/genetische Störungen, die zu Schwäche oder Kontrollverlust der Gliedmaße führen. Einige Menschen haben Schwierigkeiten, die genauen Handbewegungen auszuführen, die zur Verwendung einer Maus erforderlich sind, während andere schwerer betroffen sein könnten, möglicherweise erheblich gelähmt, sodass sie zur Interaktion mit Computern einen [Kopfzeiger](https://www.performancehealth.com/adjustable-headpointer) verwenden müssen.

Diese Art von Behinderung kann auch das Ergebnis des Alterns sein und nicht unbedingt eines spezifischen Traumas oder einer Erkrankung, und sie kann auch auf Hardwarebeschränkungen zurückzuführen sein — einige Benutzer haben möglicherweise keine Maus.

Dies wirkt sich in der Regel auf die Webentwicklung aus, da erforderliche Steuerelemente über die Tastatur zugänglich sein müssen — wir werden die Tastaturzugänglichkeit in späteren Artikeln des Moduls besprechen, aber es ist ratsam, einige Websites nur mit der Tastatur auszuprobieren, um zu sehen, wie Sie damit zurechtkommen. Können Sie z.B. mit der Tabulatortaste zwischen den verschiedenen Kontrollen eines Webformulars wechseln? Weitere Details zu Tastatursteuerungen finden Sie in unserem Abschnitt [Verwenden Sie wenn möglich semantische UI-Kontrollen](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible).

In Bezug auf die Statistik haben eine erhebliche Anzahl von Menschen Mobilitätsbeeinträchtigungen. Das US Centers for Disease Control and Prevention [Behinderung und Funktion (nicht institutionalisierte Erwachsene ab 18 Jahren)](https://www.cdc.gov/nchs/fastats/disability.htm) berichtet, dass in den USA der "Prozentsatz der Erwachsenen mit einer körperlichen Funktionsschwierigkeit: 16,1 %" beträgt.

### Menschen mit kognitiven Beeinträchtigungen

Kognitive Beeinträchtigung bezieht sich auf ein breites Spektrum von Behinderungen, von Menschen mit geistiger Behinderung, die die am meisten eingeschränkten Fähigkeiten haben, bis hin zu uns allen, die mit zunehmendem Alter Schwierigkeiten mit dem Denken und Erinnern haben. Das Spektrum umfasst Menschen mit psychischen Erkrankungen, wie [Depressionen](https://www.nimh.nih.gov/health/topics/depression) und [Schizophrenie](https://www.nimh.nih.gov/health/topics/schizophrenia). Es umfasst auch Menschen mit Lernbehinderungen, wie [Dyslexie](https://www.nichd.nih.gov/health/topics/learningdisabilities) und [Aufmerksamkeitsdefizit-Hyperaktivitätsstörung](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd). Wichtig ist, dass trotz der großen Vielfalt innerhalb der klinischen Definitionen von kognitiven Beeinträchtigungen Menschen mit ihnen ein gemeinsames Set funktionaler Probleme erfahren. Dazu gehören Schwierigkeiten beim Verstehen von Inhalten, das Erinnern, wie Aufgaben zu erledigen sind, und Verwirrung durch inkonsistente Webseitenlayouts.

Eine gute Grundlage für Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Bereitstellung von Inhalten auf mehr als eine Weise, wie etwa durch Text-zu-Sprache oder durch Video.
- Verständliche Inhalte, wie etwa Texte, die unter Verwendung von Standards für einfache Sprache geschrieben sind.
- Fokussierung der Aufmerksamkeit auf wichtige Inhalte.
- Minimierung von Ablenkungen, wie unnötige Inhalte oder Werbung.
- Konsistentes Webseiten-Layout und Navigation.
- Vertraute Elemente, wie unterstrichene Links in Blau, wenn nicht besucht, und in Lila, wenn besucht.
- Aufteilung von Prozessen in logische, wesentliche Schritte mit Fortschrittsanzeigen.
- Eine möglichst einfache Authentifizierung ohne Beeinträchtigung der Sicherheit.
- Einfache Ausfüllbarkeit von Formularen, wie mit klaren Fehlermeldungen und einfacher Fehlerkorrektur.

### Notizen

- Das Design mit [kognitiver Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility) wird zu guten Designpraktiken führen. Sie werden allen zugutekommen.
- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Behinderungen. Websites müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) des W3C entsprechen, einschließlich [kognitiver Zugänglichkeitsrichtlinien](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility#wcag_guidelines).
- Die [Task Force für kognitive und Lernbehinderungen des W3C](https://www.w3.org/WAI/GL/task-forces/coga/) erstellt Richtlinien für Webzugänglichkeit für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive-Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die US-amerikanischen Zentren für Krankheitskontrolle schätzen, dass 2018 jeder vierte US-Bürger eine Behinderung hat, und [kognitive Beeinträchtigung ist die häufigste bei jungen Menschen](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden einige geistige Behinderungen historisch als "geistige Retardierung" bezeichnet. Viele empfinden diesen Begriff nun als abwertend, daher sollte seine Verwendung vermieden werden.
- Im Vereinigten Königreich werden einige geistige Behinderungen als "Lernbehinderungen" oder "Lernschwierigkeiten" bezeichnet.

## Implementierung von Barrierefreiheit in Ihr Projekt

Ein weit verbreiteter Mythos über Barrierefreiheit besagt, dass Barrierefreiheit ein teures "zusätzliches Extra" ist, das in ein Projekt implementiert werden muss. Dieser Mythos kann tatsächlich _wahr_ sein, wenn entweder:

- Sie versuchen, Barrierefreiheit in eine bestehende Website nachzurüsten, die erhebliche Barrierefreiheitsprobleme aufweist.
- Sie erst spät im Projektzyklus begonnen haben, Barrierefreiheit zu berücksichtigen und damit verbundene Probleme aufgedeckt haben.

Wenn Sie jedoch Barrierefreiheit von Anfang an in Ihr Projekt einbeziehen, sollten die Kosten, den meisten Inhalt barrierefrei zu machen, relativ gering sein.

Planen Sie Ihr Projekt so, dass Barrierefreiheitstests in Ihr Testregime einfließen, genau wie Tests für andere wichtige Zielgruppen-Segmente (z. B. Ziel-Desktop- oder mobile Browser). Testen Sie frühzeitig und häufig, idealerweise durch automatisierte Tests, um programmatisch erkennbare fehlende Funktionen (wie fehlenden Bild-Alternativtext oder schlechten Linktext — siehe [Verwenden Sie aussagekräftige Textbeschriftungen](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels)) und einige Tests mit behinderten Nutzergruppen, um herauszufinden, wie gut komplexere Site-Funktionen für sie funktionieren. Beispiel:

- Ist mein Datumswähler-Widget für Benutzer von Screenreadern nutzbar?
- Wenn sich Inhalte dynamisch aktualisieren, wissen sehbehinderte Menschen davon?
- Sind meine UI-Schaltflächen sowohl für Tastatur- als auch für Touch-Interface-Benutzer zugänglich?

Sie können (und sollten) Notizen zu potenziell problematischen Bereichen in Ihrem Inhalt machen, die Arbeit erfordern, um ihn barrierefrei zu machen, sicherstellen, dass er gründlich getestet wird, und über Lösungen/Alternativen nachdenken. Textinhalte (wie Sie im nächsten Artikel sehen werden) sind einfach, aber was ist mit Ihren multimedialen Inhalten und Ihren innovativen 3D-Grafiken? Sie sollten Ihr Projektbudget überdenken und überlegen, welche Lösungen Ihnen zur Verfügung stehen, um solche Inhalte zugänglich zu machen. Eine Option ist, all Ihre multimedialen Inhalte zu transkribieren, was zwar teuer, aber machbar ist.

Seien Sie auch realistisch. "100% Barrierefreiheit" ist ein unerreichbares Ideal — es wird immer einen Randfall geben, der dazu führt, dass ein gewisser Nutzer Schwierigkeiten hat, bestimmte Inhalte zu nutzen — aber Sie sollten so viel wie möglich tun. Wenn Sie vorhaben, ein innovatives 3D-Tortendiagramm mit WebGL einzusetzen, möchten Sie vielleicht eine Datentabelle als zugängliche alternative Darstellung der Daten hinzufügen. Oder Sie entscheiden sich einfach nur für die Tabelle und verzichten auf das 3D-Tortendiagramm — die Tabelle ist für alle zugänglich, schneller zu codieren, weniger CPU-intensiv und einfacher zu pflegen.

Auf der anderen Seite, wenn Sie an einer Galerie-Website arbeiten, die interessante 3D-Kunst zeigt, wäre es unvernünftig zu erwarten, dass jedes Kunstwerk perfekt für sehbehinderte Menschen zugänglich ist, gegebenenfalls, dass es sich dabei um ein vollständig visuelles Medium handelt.

Um zu zeigen, dass Ihnen Barrierefreiheit wichtig ist und dass Sie darüber nachgedacht haben, veröffentlichen Sie eine Barrierefreiheitserklärung auf Ihrer Website, in der Sie Ihre Richtlinie zur Barrierefreiheit erläutern und welche Schritte Sie unternommen haben, um die Website barrierefrei zu machen. Wenn jemand Ihnen mitteilt, dass Ihre Website ein Barrierefreiheitsproblem hat, sollten Sie mit ihnen einen Dialog beginnen, empathisch sein und angemessene Schritte unternehmen, um das Problem zu beheben.

Zusammengefasst:

- Berücksichtigen Sie Barrierefreiheit von Anfang an in einem Projekt und testen Sie frühzeitig und häufig. Wie bei jedem anderen Fehler wird ein Barrierefreiproblem umso teurer zu beheben, je später es entdeckt wird.
- Beachten Sie, dass viele Best Practices für Barrierefreiheit jedem zugutekommen, nicht nur Nutzern mit Behinderungen. Beispielsweise ist schlankes semantisches Markup nicht nur gut für Screenreader, sondern auch schnell zu laden und performant. Dies kommt allen zugute, insbesondere Benutzern mobiler Geräte und/oder langsamer Verbindungen.
- Veröffentlichen Sie eine Barrierefreiheitserklärung auf Ihrer Website und treten Sie mit Menschen in Kontakt, die Probleme haben.

## Zugänglichkeitsrichtlinien und das Gesetz

Es gibt zahlreiche Checklisten und Richtliniensätze, auf denen Barrierefreiheitstests basieren können, die auf den ersten Blick überwältigend erscheinen können. Unser Rat ist, sich mit den grundlegenden Bereichen vertraut zu machen, auf die Sie achten müssen, sowie ein Verständnis für die hochrangigen Strukturen der Richtlinien, die für Sie am relevantesten sind, zu entwickeln.

- Zunächst einmal hat das W3C ein großes und sehr detailliertes Dokument veröffentlicht, das sehr präzise, technologieunabhängige Kriterien für die Barrierefreiheitskonformität enthält. Diese werden als [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) bezeichnet und sind keineswegs eine leichte Lektüre. Die Kriterien sind in vier Hauptkategorien unterteilt, die festlegen, wie Implementierungen wahrnehmbar, bedienbar, verständlich und robust gemacht werden können. Der beste Ort für einen leichten Einstieg ist [WCAG auf einen Blick](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). Es ist nicht notwendig, alle WCAG-Kriterien zu lernen — seien Sie sich der wichtigsten Bereiche der Sorge bewusst und verwenden Sie verschiedene Techniken und Tools, um Bereiche hervorzuheben, die nicht den WCAG-Kriterien entsprechen (siehe unten für mehr).
- Ihr Land kann auch spezifische Gesetze haben, die den Bedarf für barrierefreie Websites, die ihre Bevölkerung bedienen, regeln — zum Beispiel [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) in der EU, [Section 508 des Rehabilitation Act](https://www.section508.gov/training/) in den USA, [Bundesverordnung zur barrierefreien Informationstechnologie](https://www.aktion-mensch.de/inklusion/barrierefreiheit/barrierefreie-website) in Deutschland, die [Barrierefreiheit-Verordnung 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) im Vereinigten Königreich, [Accessibilità](https://www.agid.gov.it/it/ambiti-intervento/accessibilita-usabilita) in Italien, das [Disability Discrimination Act](https://humanrights.gov.au/our-work/disability-rights/publications/guidelines-equal-access-digital-goods-and-services) in Australien usw. Das W3C führt eine Liste der [Web Accessibility Laws & Policies](https://www.w3.org/WAI/policies/) nach Land.

Während die WCAG also eine Reihe von Richtlinien darstellt, wird Ihr Land wahrscheinlich Gesetze zur Barrierefreiheit im Web haben oder zumindest zur Barrierefreiheit von für die Öffentlichkeit zugänglichen Diensten (was Websites, Fernsehen, physische Räume usw. umfassen könnte). Es ist eine gute Idee, herauszufinden, welche Gesetze für Sie geltend. Wenn Sie keinen Versuch unternehmen, zu überprüfen, ob Ihre Inhalte zugänglich sind, könnten Sie rechtlich haftbar gemacht werden, wenn Menschen sich beschweren.

Das klingt ernst, aber Sie müssen Barrierefreiheit einfach als Hauptpriorität Ihrer Webentwicklungspraktiken betrachten, wie oben beschrieben. Wenn Sie Zweifel haben, sollten Sie sich von einem qualifizierten Anwalt beraten lassen. Wir werden hier keinen weiteren Rat als diesen geben, da wir keine Anwälte sind.

## Barrierefreiheits-APIs

Webbrowser nutzen spezielle **Barrierefreiheits-APIs** (bereitgestellt vom zugrundeliegenden Betriebssystem), die Informationen bereitstellen, die für assistive Technologien (ATs) nützlich sind — ATs neigen dazu, vorwiegend semantische Informationen zu verwenden, daher sind in diesen Informationen keine Stylinginformationen oder JavaScript enthalten. Diese Informationen sind in einem Informationsbaum strukturiert, dem sogenannten **Barrierefreiheitsbaum**.

Verschiedene Betriebssysteme haben unterschiedliche Barrierefreiheits-APIs:

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- macOS: NSAccessibility
- Linux: AT-SPI
- Android: Zugänglichkeitsframework
- iOS: UIAccessibility

Wo die native semantische Information, die von den HTML-Elementen in Ihren Webanwendungen bereitgestellt wird, nicht ausreicht, können Sie sie mit Funktionen aus der [WAI-ARIA-Spezifikation](https://www.w3.org/TR/wai-aria/) ergänzen, die semantische Informationen in den Barrierefreiheitsbaum hinzufügen, um die Barrierefreiheit zu verbessern. Sie können viel mehr über WAI-ARIA in unserem Artikel [WAI-ARIA Grundlagen](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) lernen.

## Zusammenfassung

Dieser Artikel sollte Ihnen einen nützlichen Überblick über Barrierefreiheit gegeben haben, warum sie wichtig ist und wie Sie sie in Ihren Workflow integrieren können. Sie sollten jetzt auch den Drang haben, sich über die Implementierungsdetails zu informieren, die Websites barrierefrei machen können, und welche Tools helfen können. Im nächsten Artikel werden wir uns mit Barrierefreiheits-Tools beschäftigen.

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  - [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  - [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  - [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  - [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

- [Google Chrome hat eine Auto-Untertitel-Erweiterung veröffentlicht](https://blog.google/products/chrome/live-caption-chrome/)

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}
