---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Core/Accessibility/What_is_accessibility
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}

Dieser Artikel beginnt das Modul mit einem guten Einblick in das, was Barrierefreiheit ist — diese Übersicht umfasst, welche Personengruppen wir berücksichtigen müssen und warum, welche Werkzeuge verschiedene Personen verwenden, um mit dem Web zu interagieren, und wie wir Barrierefreiheit in unseren Webentwicklungs-Workflow integrieren können.

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
          <li>Der Zweck der Barrierefreiheit — erhöhter Zugang zu digitalen Diensten für Personen mit zusätzlichen Bedürfnissen, verbesserte Benutzerfreundlichkeit für alle, besseres SEO und ein breiteres Zielpublikum.</li>
          <li>Bewusstsein für die gesetzlichen Anforderungen an Barrierefreiheit.</li>
          <li>Dass Barrierefreiheit von Anfang an in ein Projekt einbezogen werden sollte und nicht erst am Ende hinzugefügt werden sollte.</li>
          <li>Vertrautheit mit den Kriterien zur Konformität der Web Content Accessibility Guidelines (WCAG).</li>
          <li>Bewusstsein für Barrierefreiheits-APIs und ihren Zweck.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist also Barrierefreiheit?

Barrierefreiheit ist die Praxis, Ihre Websites für so viele Menschen wie möglich nutzbar zu machen. Traditionell denken wir dabei an Menschen mit Behinderungen, aber die Praxis, Websites zugänglich zu machen, kommt auch anderen Gruppen zugute, wie z. B. Nutzern mobiler Geräte oder solchen mit langsamen Netzwerkverbindungen.

Man könnte Barrierefreiheit auch als die gleichberechtigte Behandlung aller Menschen betrachten, egal welche Fähigkeiten oder Umstände sie haben. Genauso wie es falsch ist, jemanden aus einem Gebäude auszuschließen, weil er im Rollstuhl sitzt (moderne öffentliche Gebäude haben in der Regel Rollstuhlrampen oder Aufzüge), ist es auch nicht richtig, jemanden von einer Website auszuschließen, weil er eine Sehbehinderung hat. Wir sind alle unterschiedlich, aber wir sind alle Menschen und haben daher dieselben Menschenrechte.

Barrierefreiheit ist das Richtige. Das Bereitstellen barrierefreier Websites ist in einigen Ländern gesetzlich vorgeschrieben, was einige bedeutende Märkte eröffnen kann, die sonst Ihre Dienste nicht nutzen oder Ihre Produkte nicht kaufen könnten.

Der Bau barrierefreier Websites bringt Vorteile für alle:

- Semantisches HTML, das die Barrierefreiheit verbessert, verbessert auch SEO, was Ihre Website auffindbarer macht.
- Aufmerksamkeit für Barrierefreiheit zeigt gute Ethik und Moral, was das öffentliche Image verbessert.
- Andere gute Praktiken, die die Barrierefreiheit verbessern, machen Ihre Website auch für andere Gruppen besser nutzbar, wie z.B. für Nutzer von Mobiltelefonen oder solche mit niedriger Netzwerkgeschwindigkeit. Tatsächlich können viele solcher Verbesserungen allen zugutekommen.
- Haben wir erwähnt, dass es in manchen Gegenden auch gesetzlich vorgeschrieben ist?

## Welche Arten von Behinderungen betrachten wir?

Menschen mit Behinderungen sind genauso vielfältig wie Menschen ohne Behinderungen, und so sind es auch ihre Behinderungen. Die wichtigste Lektion hier ist, über den eigenen Computer hinauszudenken und wie Sie das Web nutzen, und beginnen zu lernen, wie andere es nutzen — _Sie sind nicht Ihre Nutzer_. Die Haupttypen von Behinderungen, die Sie berücksichtigen sollten, werden unten erklärt, zusammen mit den speziellen Werkzeugen, die sie verwenden, um auf Webinhalte zuzugreifen (bekannt als **assistive Technologien**, oder **ATs**).

> [!NOTE]
> Das Faktenblatt der Weltgesundheitsorganisation [Behinderung und Gesundheit](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health) besagt, dass „über eine Milliarde Menschen, etwa 15 % der Weltbevölkerung, irgendeine Form von Behinderung haben“, und „zwischen 110 Millionen und 190 Millionen Erwachsene haben erhebliche funktionale Schwierigkeiten.“

### Menschen mit Sehbehinderungen

Menschen mit Sehbehinderungen umfassen Personen mit Blindheit, geringem Sehvermögen und Farbenblindheit. Viele Menschen mit Sehbehinderungen verwenden Bildschirmvergrößerer, die entweder physische Vergrößerer oder Software-Zoom-Funktionen sind. Die meisten Browser und Betriebssysteme haben heutzutage Zoom-Funktionen. Einige Nutzer werden auf Bildschirmleser angewiesen sein, welche Software ist, die digitalen Text vorliest. Einige Beispiele für Bildschirmleser umfassen:

- Kostenpflichtige kommerzielle Produkte wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows) und [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows).
- Kostenlose Produkte wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- In das Betriebssystem integrierte Software wie [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf ChromeOS) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Es ist eine gute Idee, sich mit Bildschirmlesern vertraut zu machen; Sie sollten auch einen Bildschirmleser einrichten und damit herumspielen, um eine Vorstellung davon zu bekommen, wie er funktioniert. Sehen Sie sich unsere [Tutorials zu Bildschirmlesern](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für weitere Details zur Verwendung an. Das untenstehende Video bietet auch ein kurzes Beispiel, wie die Erfahrung ist.

{{EmbedYouTube("IK97XMibEws")}}

In Bezug auf die Statistiken schätzt die Weltgesundheitsorganisation, dass "weltweit 285 Millionen Menschen als sehbehindert gelten: 39 Millionen sind blind und 246 Millionen haben schwaches Sehvermögen." (siehe [Sehbehinderung und Blindheit](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)). Das ist eine große und bedeutende Nutzerschaft, die man einfach verpassen würde, weil die eigene Website nicht ordnungsgemäß codiert ist — fast so groß wie die Bevölkerung der Vereinigten Staaten von Amerika.

### Menschen mit Hörbehinderungen

[Taube und schwerhörige (DHH)](https://www.nad.org/resources/american-sign-language/community-and-culture-frequently-asked-questions/) Menschen haben unterschiedliche Grade des Hörverlusts, von mild bis tief. Obwohl einige ATs verwenden (siehe [Assistive Devices for People with Hearing, Voice, Speech, or Language Disorders](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), sind sie nicht weit verbreitet.

Um Zugang zu bieten, müssen textliche Alternativen bereitgestellt werden. Videos sollten manuell untertitelt werden, und Transkripte sollten für Audioinhalte bereitgestellt werden. Darüber hinaus sollte aufgrund hoher Niveaus von [Sprachentzug](https://epicspecialeducationstaffing.com/language-deprivation/#:~:text=Language%20deprivation%20is%20the%20term,therefore%20not%20exposed%20to%20language.) in den DHH-Populationen [Textvereinfachung in Betracht gezogen werden](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/).

Taube und schwerhörige Menschen sind ebenfalls eine signifikante Nutzerschaft — "466 Millionen Menschen weltweit haben eine behindernde Hörminderung", sagt das Faktenblatt der Weltgesundheitsorganisation [Taubheit und Hörverlust](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss).

### Menschen mit Mobilitätsbehinderungen

Diese Menschen haben Bewegungsbehinderungen, die rein physische Probleme (wie Verlust eines Gliedes oder Lähmung) oder neurologische/genetische Störungen umfassen können, die zu Schwäche oder Kontrollverlust in den Gliedern führen. Einige Menschen haben möglicherweise Schwierigkeiten mit den genauen Handbewegungen, die erforderlich sind, um eine Maus zu verwenden, während andere möglicherweise schwerwiegend betroffen sind, möglicherweise erheblich gelähmt, sodass sie einen [Kopfstift](https://www.performancehealth.com/adjustable-headpointer) verwenden müssen, um mit Computern zu interagieren.

Diese Art von Behinderung kann auch eine Folge des Alters sein, anstatt eines spezifischen Traumas oder einer Krankheit, und es kann auch durch Hardware-Beschränkungen verursacht werden — einige Nutzer haben möglicherweise keine Maus.

Wie sich dies normalerweise auf die Webentwicklung auswirkt, ist die Anforderung, dass Bedienelemente mit der Tastatur zugänglich sein müssen — wir werden die Tastatur-Zugänglichkeit in späteren Artikeln des Moduls besprechen, aber es ist eine gute Idee, einige Websites nur mit der Tastatur auszuprobieren, um zu sehen, wie man zurechtkommt. Können Sie die Tabulatortaste verwenden, um zwischen den verschiedenen Steuerelementen eines Webformulars zu wechseln, zum Beispiel? Weitere Details zu Tastatursteuerungen finden Sie in unserem Abschnitt [UI-Steuerelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls).

In Bezug auf die Statistiken haben eine signifikante Anzahl von Menschen Mobilitätsbehinderungen. Die US-Zentren für Krankheitskontrolle und Prävention [Behinderung und Funktion (Nicht institutionalisierten Erwachsene ab 18 Jahren)](https://www.cdc.gov/nchs/fastats/disability.htm) berichten, dass die USA "Prozentsatz der Erwachsenen mit Schwierigkeiten im physischen Funktionieren: 16,1%".

### Menschen mit kognitiven Beeinträchtigungen

Kognitive Beeinträchtigungen beziehen sich auf eine breite Palette von Behinderungen, angefangen bei Menschen mit intellektuellen Behinderungen, die am wenigsten leistungsfähig sind, bis hin zu uns allen, wenn wir altern und Schwierigkeiten beim Denken und Erinnern haben. Die Bandbreite umfasst Menschen mit psychischen Erkrankungen wie [Depressionen](https://www.nimh.nih.gov/health/topics/depression) und [Schizophrenie](https://www.nimh.nih.gov/health/topics/schizophrenia). Sie umfasst auch Menschen mit Lernbehinderungen wie [Dyslexie](https://www.ninds.nih.gov/health-information/disorders/learning-disabilities) und [Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd). Wichtig ist, dass es zwar viel Vielfalt in den klinischen Definitionen kognitiver Beeinträchtigungen gibt, Menschen mit ihnen jedoch eine gemeinsame Reihe von funktionalen Problemen erleben. Dazu gehören Schwierigkeiten beim Verständnis von Inhalten, beim Erinnern, wie Aufgaben abgeschlossen werden, und Verwirrung durch inkonsistente Webseitenlayouts.

Eine gute Grundlage für Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Inhalte auf mehr als eine Weise bereitzustellen, z.B. durch Text-zu-Sprache oder Video.
- Leicht verständliche Inhalte, wie Texte, die unter Verwendung von Standards für einfache Sprache verfasst sind.
- Fokussierung der Aufmerksamkeit auf wichtige Inhalte.
- Minimierung von Ablenkungen, wie unnötigen Inhalten oder Werbung.
- Konsistentes Webseitenlayout und Navigation.
- Vertraute Elemente, wie unterstrichene Links blau, wenn nicht besucht, und lila, wenn besucht.
- Aufteilung von Prozessen in logische, wesentliche Schritte mit Fortschrittsanzeigen.
- Website-Authentifizierung so einfach wie möglich gestalten, ohne die Sicherheit zu beeinträchtigen.
- Formulare einfach auszufüllen machen, zum Beispiel mit klaren Fehlermeldungen und einfacher Fehlerbehebung.

### Notizen

- Beim Designen mit [kognitiver Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility) werden gute Designpraktiken entstehen. Sie kommen jedem zugute.
- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Behinderungen. Websites müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) des W3C entsprechen, einschließlich [kognitiver Barrierefreiheitsrichtlinien](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility#wcag_guidelines).
- Die [Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/) des W3C erstellt Richtlinien zur Webzugänglichkeit für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive page](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die US Centers for Disease Control schätzen, dass ab 2018 1 von 4 US-Bürgern eine Behinderung hat und davon [kognitive Beeinträchtigungen die häufigste für junge Menschen sind](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden einige intellektuelle Behinderungen historisch als „mentale Retardierung“ bezeichnet. Dieser Begriff wird heutzutage als abwertend angesehen, daher sollte seine Verwendung vermieden werden.
- In Großbritannien werden einige intellektuelle Behinderungen als „Lernbehinderungen“ oder „Lernschwierigkeiten“ bezeichnet.

## Implementierung von Barrierefreiheit in Ihr Projekt

Ein verbreiteter Mythos zur Barrierefreiheit ist, dass Barrierefreiheit ein teures „zusätzliches Extra“ sei, das in einem Projekt umgesetzt werden muss. Dieser Mythos _kann_ tatsächlich zutreffen, wenn entweder:

- Sie versuchen, Barrierefreiheit an eine bestehende Website anzupassen, die erhebliche Barrierefreiheitsprobleme aufweist.
- Sie erst in den späten Projektphasen damit beginnen, sich mit Barrierefreiheit zu beschäftigen und entsprechende Probleme aufzudecken.

Wenn Sie jedoch Barrierefreiheit von Anfang an bei einem Projekt berücksichtigen, sollten die Kosten für die Barrierefreiheit der meisten Inhalte relativ minimal sein.

Wenn Sie Ihr Projekt planen, berücksichtigen Sie Barrierefreiheits-Tests in Ihrem Testregime, genau wie Tests für andere wichtige Zielgruppensegmente (z.B. Ziel-Desktop- oder mobile Browser). Testen Sie früh und oft, führen Sie idealerweise automatisierte Tests durch, um programmatisch erkennbare fehlende Funktionen (wie fehlenden alternativen Text für Bilder oder schlechten Linktext — siehe [Bedeutungsvoller Text](/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels)) zu erkennen und führen Sie einige Tests mit behinderten Benutzergruppen durch, um zu sehen, wie gut komplexere Website-Funktionen für sie funktionieren. Zum Beispiel:

- Ist mein Datumswähler-Widget für Personen nutzbar, die Bildschirmleser verwenden?
- Wenn sich Inhalte dynamisch aktualisieren, wissen sehbehinderte Menschen es?
- Sind meine UI-Schaltflächen sowohl für Tastatur- als auch für Touchscreen-Benutzer zugänglich?

Sie können und sollten potenzielle Problemstellen in Ihren Inhalten, die Arbeit benötigen, um barrierefrei zu werden, notieren, sicherstellen, dass sie gründlich getestet werden, und über Lösungen/Alternativen nachdenken. Textinhalte (wie Sie im nächsten Artikel sehen werden) sind einfach, aber wie sieht es mit Ihren Multimediainhalten und Ihren beeindruckenden 3D-Grafiken aus? Sie sollten Ihr Projektbudget überprüfen und darüber nachdenken, welche Lösungen Sie zur Verfügung haben, um solche Inhalte barrierefrei zu machen. Das Transkribieren aller Ihrer Multimediainhalte ist eine Option, die, obwohl teuer, möglich ist.

Seien Sie auch realistisch. „100% Barrierefreiheit“ ist ein unerreichbares Ideal — Sie stoßen immer auf irgendeinen Randfall, der dazu führt, dass ein bestimmter Benutzer bestimmte Inhalte schwer verwenden kann — aber Sie sollten so viel tun, wie Sie können. Wenn Sie planen, ein beeindruckendes 3D-Pie-Chart-Grafiken mit WebGL einzubinden, könnten Sie beabsichtigen, eine Datentabelle als barrierefreie alternative Darstellung der Daten einzuschließen. Oder, Sie könnten erwägen, einfach die Tabelle einzuschließen und das 3D-Tortendiagramm zu entfernen — die Tabelle ist für jeden zugänglich, schneller zu codieren, weniger CPU-intensiv und leichter zu warten.

Andererseits, wenn Sie an einer Galerie-Website arbeiten, die interessante 3D-Kunst zeigt, wäre es unvernünftig zu erwarten, dass jedes Kunstwerk perfekt für sehbehinderte Menschen zugänglich ist, da es ein völlig visuelles Medium ist.

Um zu zeigen, dass Ihnen Barrierefreiheit wichtig ist und Sie darüber nachgedacht haben, veröffentlichen Sie eine Barrierefreiheitserklärung auf Ihrer Website, die beschreibt, was Ihre Richtlinien zur Barrierefreiheit sind und welche Schritte Sie unternommen haben, um die Website barrierefrei zu gestalten. Wenn Ihnen jemand mitteilt, dass Ihre Website ein Barrierefreiheitsproblem hat, beginnen Sie einen Dialog mit ihm, seien Sie empathisch und unternehmen Sie angemessene Schritte, um das Problem zu beheben.

Zusammenfassend:

- Überlegen Sie sich die Barrierefreiheit von Anfang an bei einem Projekt und testen Sie früh und oft. Genau wie bei anderen Fehlern wird ein Problem mit der Barrierefreiheit umso teurer zu beheben sein, je später es entdeckt wird.
- Bedenken Sie, dass viele der besten Praktiken für Barrierefreiheit jedem zugutekommen, nicht nur Nutzern mit Behinderungen. Beispielsweise ist schlanker semantischer Markup nicht nur gut für Bildschirmleser, es wird auch schnell geladen und ist performanter. Dies ist für alle von Vorteil, insbesondere für Personen mit Mobilgeräten und/oder langsamen Verbindungen.
- Veröffentlichen Sie eine Barrierefreiheitserklärung auf Ihrer Website und engagieren Sie sich für Personen, die Probleme haben.

## Barrierefreiheitsrichtlinien und das Gesetz

Es gibt zahlreiche Checklisten und Richtliniensätze, die zum Testen der Barrierefreiheit verfügbar sind, was auf den ersten Blick überwältigend erscheinen mag. Unser Rat ist, sich mit den grundlegenden Bereichen, in denen Sie vorsichtig sein müssen, vertraut zu machen und die hochrangigen Strukturen der Richtlinien zu verstehen, die für Sie am relevantesten sind.

- Zunächst hat das W3C ein umfangreiches und sehr detailliertes Dokument veröffentlicht, das sehr genaue, technologieunabhängige Kriterien zur Konformität der Barrierefreiheit enthält. Diese heißen die [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG), und sie sind keineswegs eine kurze Lektüre. Die Kriterien sind in vier Hauptkategorien unterteilt, die angeben, wie Implementierungen wahrnehmbar, bedienbar, verständlich und robust gemacht werden können. Der beste Ort, um eine leichte Einführung zu erhalten und mit dem Lernen zu beginnen, ist [WCAG auf einen Blick](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). Es gibt keine Notwendigkeit, alle WCAG-Kriterien zu lernen — seien Sie sich der Hauptbereiche bewusst, die Bedenken hervorrufen, und verwenden Sie eine Vielzahl von Techniken und Tools, um Bereiche hervorzuheben, die nicht den WCAG-Kriterien entsprechen (siehe unten für mehr).
- Ihr Land kann auch spezifische Gesetze haben, die die Notwendigkeit regeln, dass Websites, die ihre Bevölkerung bedienen, zugänglich sind — zum Beispiel [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) in der EU, [Section 508 des Rehabilitation Act](https://www.section508.gov/training/) in den USA, [Bundesverordnung zur barrierefreien Informationstechnik](https://www.aktion-mensch.de/inklusion/barrierefreiheit/barrierefreie-website) in Deutschland, die [Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) im Vereinigten Königreich, [Accessibilità](https://www.agid.gov.it/it/ambiti-intervento/accessibilita-usabilita) in Italien, das [Disability Discrimination Act](https://humanrights.gov.au/our-work/disability-rights/world-wide-web-access-disability-discrimination-act-advisory-notes-ver) in Australien usw. Das W3C führt eine Liste von [Webzugänglichkeitsgesetzen & -richtlinien](https://www.w3.org/WAI/policies/) nach Ländern.

Während also die WCAG ein Satz von Richtlinien ist, wird Ihr Land wahrscheinlich Gesetze zur Webzugänglichkeit haben, oder zumindest zur Zugänglichkeit von Dienstleistungen, die der Öffentlichkeit zur Verfügung stehen (was Websites, Fernsehen, physische Räume usw. umfassen könnte). Es ist eine gute Idee zu erfahren, welche Gesetze bei Ihnen gelten. Wenn Sie keine Anstrengungen unternehmen, um zu überprüfen, ob Ihre Inhalte zugänglich sind, könnten Sie rechtlich haftbar gemacht werden, wenn sich Menschen beschweren.

Das klingt ernst, aber eigentlich müssen Sie Barrierefreiheit nur als Hauptpriorität Ihrer Webentwicklungspraktiken betrachten, wie oben beschrieben. Wenn Sie Zweifel haben, holen Sie sich Rat von einem qualifizierten Anwalt. Wir werden Ihnen keinen weiteren Rat geben, weil wir keine Anwälte sind.

## Barrierefreiheits-APIs

Webbrowser nutzen spezielle **Barrierefreiheits-APIs** (bereitgestellt durch das zugrunde liegende Betriebssystem), die Informationen bereitstellen, die für assistive Technologien (ATs) nützlich sind — ATs verwenden meistens semantische Informationen, daher enthält diese Information in der Regel keine Stilinformations- oder JavaScript-Informationen. Diese Informationen sind in einem Informationsbaum strukturiert, der als **Barrierefreiheitsbaum** bekannt ist.

Verschiedene Betriebssysteme haben unterschiedliche Barrierefreiheits-APIs:

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- macOS: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility framework
- iOS: UIAccessibility

Wo die nativen semantischen Informationen, die durch die HTML-Elemente in Ihren Webanwendungen bereitgestellt werden, versagen, können Sie sie mit Funktionen aus der [WAI-ARIA-Spezifikation](https://www.w3.org/TR/wai-aria/) ergänzen, die semantische Informationen zum Barrierefreiheitsbaum hinzufügen, um die Barrierefreiheit zu verbessern. Sie können viel mehr über WAI-ARIA in unserem Artikel [WAI-ARIA-Grundlagen](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) lernen.

## Zusammenfassung

Dieser Artikel sollte Ihnen einen nützlichen Überblick über Barrierefreiheit gegeben haben, Ihnen gezeigt haben, warum sie wichtig ist, und untersucht haben, wie Sie sie in Ihren Workflow integrieren können. Sie sollten jetzt auch den Drang haben, mehr über die Implementierungsdetails zu lernen, die Websites barrierefrei machen können, und welche Tools dabei helfen können. Wir werden uns die Barrierefreiheitstools im nächsten Artikel anschauen.

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  - [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  - [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  - [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  - [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

- [Google Chrome hat eine automatische Untertitelungserweiterung veröffentlicht](https://blog.google/products/chrome/live-caption-chrome/)

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}
