---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Core/Accessibility/What_is_accessibility
l10n:
  sourceCommit: 8a6ebefa23ff414c256ee69d08fc20bd5ebe540b
---

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}

Dieser Artikel startet das Modul mit einem guten Überblick darüber, was Barrierefreiheit ist — dieser Überblick umfasst die Gruppen von Menschen, die wir berücksichtigen müssen und warum, welche Tools verschiedene Menschen verwenden, um mit dem Web zu interagieren, und wie wir Barrierefreiheit in unseren Webentwicklungs-Workflow integrieren können.

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
          <li>Der Nutzen der Barrierefreiheit — erhöhter Zugang zu digitalen Diensten für Menschen mit besonderen Bedürfnissen, verbesserte Benutzerfreundlichkeit für alle, besseres SEO und eine größere Zielgruppe.</li>
          <li>Bewusstsein für die rechtlichen Anforderungen an die Barrierefreiheit.</li>
          <li>Dass Barrierefreiheit von Anfang an in ein Projekt einbezogen werden sollte und nicht erst am Ende hinzugefügt werden darf.</li>
          <li>Vertrautheit mit den Konformitätskriterien der Web Content Accessibility Guidelines (WCAG).</li>
          <li>Bewusstsein für die Barrierefreiheits-APIs und deren Zweck.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist also Barrierefreiheit?

Barrierefreiheit ist die Praxis, Ihre Websites so benutzbar wie möglich für so viele Menschen wie möglich zu gestalten. Traditionell denken wir dabei an Menschen mit Behinderungen, aber die Praxis, Websites barrierefrei zu machen, kommt auch anderen Gruppen zugute, wie beispielsweise Nutzern von Mobilgeräten oder solchen mit langsamen Netzwerkverbindungen.

Man könnte Barrierefreiheit auch als die Gleichbehandlung aller betrachten, unabhängig von ihren Fähigkeiten oder Umständen, und ihnen gleiche Chancen geben. Genauso wie es falsch ist, jemanden wegen einer Behinderung, wie z.B. durch eine Gehhilfe, von einem Gebäude auszuschließen (moderne öffentliche Gebäude verfügen im Allgemeinen über Rampen oder Aufzüge), ist es auch nicht richtig, jemanden von einer Website auszuschließen, weil sie eine Sehbehinderung haben. Wir sind alle unterschiedlich, aber wir sind alle Menschen und haben deshalb dieselben Menschenrechte.

Barrierefreiheit ist das Richtige zu tun. Die Bereitstellung barrierefreier Sites ist in einigen Ländern gesetzlich vorgeschrieben, was bedeutende Märkte erschließen kann, die andernfalls nicht in der Lage wären, Ihre Dienste zu nutzen oder Ihre Produkte zu kaufen.

Der Bau barrierefreier Websites kommt allen zugute:

- Semantisches HTML, das die Barrierefreiheit verbessert, verbessert auch SEO, was Ihre Website besser auffindbar macht.
- Die Sorge um Barrierefreiheit demonstriert ethisches und moralisches Verhalten, das Ihr öffentliches Ansehen verbessert.
- Andere bewährte Verfahren, die die Barrierefreiheit verbessern, machen Ihre Website auch für andere Gruppen benutzbarer, wie z.B. Benutzer von Mobiltelefonen oder solche mit niedriger Netzwerkgeschwindigkeit. Tatsächlich können alle von vielen solchen Verbesserungen profitieren.
- Haben wir erwähnt, dass es in manchen Ländern auch gesetzlich vorgeschrieben ist?

## Welche Arten von Behinderungen betrachten wir?

Menschen mit Behinderungen sind genauso vielfältig wie Menschen ohne Behinderungen, ebenso wie ihre Behinderungen. Die Hauptlektion hierbei ist, über Ihren eigenen Computer hinauszudenken und darüber, wie Sie das Web nutzen, und zu lernen, wie andere es nutzen — _Sie sind nicht Ihre Benutzer_. Die Haupttypen von Behinderungen, die man beachten sollte, werden unten erläutert, zusammen mit den speziellen Tools, die sie zum Zugriff auf Webinhalte verwenden (bekannt als **assistive technologies**, oder **ATs**).

> [!NOTE]
> Das Faktenblatt der Weltgesundheitsorganisation zu [Behinderung und Gesundheit](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health) besagt, dass "Über eine Milliarde Menschen, etwa 15% der Weltbevölkerung, eine Form von Behinderung haben" und "Zwischen 110 Millionen und 190 Millionen Erwachsene haben erhebliche Schwierigkeiten bei der Funktionsfähigkeit."

### Menschen mit Sehbehinderungen

Zu den Menschen mit Sehbehinderungen zählen Blinde, Menschen mit schwacher Sehkraft und Farbenblindheit. Viele Menschen mit Sehbehinderungen verwenden Bildschirmlupen, die entweder physische Lupen oder Software-Zoom-Funktionen sind. Die meisten Browser und Betriebssysteme verfügen heutzutage über Zoom-Fähigkeiten. Einige Benutzer werden auf Bildschirmlesegeräte angewiesen sein, Software, die digitalen Text vorliest. Einige Beispiele für Bildschirmlesegeräte sind:

- Kostenpflichtige kommerzielle Produkte, wie [JAWS](https://vispero.com/jaws-screen-reader-software/) (Windows) und [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows).
- Kostenlose Produkte wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome) und [Orca](https://help.gnome.org/orca/introduction.html) (Linux - standardmäßig auf mehreren Distributionen installiert).
- In das Betriebssystem integrierte Software wie [VoiceOver](https://www.apple.com/accessibility/features/?vision) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-US/accessibility/windows/narrator/complete-guide-to-narrator) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf ChromeOS) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Es ist eine gute Idee, sich mit Bildschirmlesegeräten vertraut zu machen; Sie sollten auch ein solches Gerät einrichten und damit experimentieren, um eine Vorstellung davon zu bekommen, wie es funktioniert. Weitere Details zur Verwendung finden Sie in unseren [Bildschirmleser-Tutorials](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers). Das folgende Video bietet ebenfalls ein kurzes Beispiel dafür, wie die Erfahrung aussieht.

{{EmbedYouTube("IK97XMibEws")}}

Laut Statistiken der Weltgesundheitsorganisation werden "weltweit 285 Millionen Menschen als sehbehindert eingeschätzt: 39 Millionen sind blind und 246 Millionen haben eine Sehschwäche." (siehe [Sehbehinderung und Blindheit](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)). Das ist eine große und bedeutende Nutzergruppe, die man nicht ignorieren sollte, weil Ihre Website nicht richtig kodiert ist — fast so groß wie die Bevölkerung der Vereinigten Staaten von Amerika.

### Personen mit Hörbehinderungen

[Taube und schwerhörige (DHH)](https://www.nad.org/resources/american-sign-language/community-and-culture-frequently-asked-questions/) Personen haben unterschiedliche Grade des Hörverlusts, die von leicht bis schwerwiegend reichen. Obwohl einige von ihnen AT verwenden (siehe [Hilfsgeräte für Menschen mit Hör-, Sprach-, Sprech- oder Sprachstörungen](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), sind sie nicht weit verbreitet.

Um Zugang zu gewähren, müssen textuelle Alternativen bereitgestellt werden. Videos sollten manuell untertitelt und Transkripte für Audiomaterial bereitgestellt werden. Aufgrund der hohen Raten von [Sprachentzug](https://epicspecialeducationstaffing.com/language-deprivation/#:~:text=Language%20deprivation%20is%20the%20term,therefore%20not%20exposed%20to%20language.) in DHH-Populationen sollte [Textvereinfachung berücksichtigt werden](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/).

Taube und schwerhörige Menschen sind ebenfalls eine bedeutende Nutzerbasis — "466 Millionen Menschen weltweit haben bebildernde Hörstörungen", sagt das Faktenblatt der Weltgesundheitsorganisation [Taubheit und Hörverlust](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss).

### Menschen mit Mobilitätsbehinderungen

Diese Personen haben Behinderungen im Zusammenhang mit Bewegung, die rein physische Probleme (wie Verlust eines Gliedes oder Lähmung) oder neurologische/genetische Störungen umfassen können, die zu Schwäche oder Kontrollverlust in den Gliedmaßen führen. Einige Menschen könnten Schwierigkeiten haben, die genauen Handbewegungen auszuführen, die für die Verwendung einer Maus erforderlich sind, während andere möglicherweise schwerer betroffen sind und möglicherweise erheblich gelähmt sind, sodass sie einen [Kopfzeiger](https://www.performancehealth.com/adjustable-headpointer) verwenden müssen, um mit Computern zu interagieren.

Diese Art von Behinderung kann auch eine Folge von Alter sein, anstatt eines spezifischen Traumas oder Zustands, und könnte auch aus Hardwarebeschränkungen resultieren — einige Benutzer haben möglicherweise keine Maus.

Dies betrifft in der Regel die Webentwicklung dahingehend, dass Bedienelemente über die Tastatur zugänglich sein müssen — wir werden die Tastaturzugänglichkeit in späteren Artikeln im Modul diskutieren, aber es ist eine gute Idee, einige Websites nur mit der Tastatur auszuprobieren, um zu sehen, wie Sie vorankommen. Können Sie beispielsweise die Tab-Taste verwenden, um zwischen den verschiedenen Steuerelementen eines Webformulars zu wechseln? Weitere Details zu Tastatursteuerelementen finden Sie in unserem Abschnitt [Verwenden Sie semantische UI-Steuerelemente, wo möglich](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible).

In Bezug auf Statistiken haben eine signifikante Anzahl von Menschen Mobilitätsbehinderungen. Die US-Zentren für Krankheitskontrolle und Prävention [Behinderung und Funktionieren (nicht-institutionalisierte Erwachsene 18 Jahre und älter)](https://www.cdc.gov/nchs/fastats/disability.htm) berichten über die USA "Prozent der Erwachsenen mit körperlicher Funktionsstörung: 16,1%".

### Menschen mit kognitiven Beeinträchtigungen

Kognitive Beeinträchtigungen beziehen sich auf eine breite Palette von Behinderungen, von Personen mit intellektuellen Behinderungen, die die am meisten eingeschränkten Fähigkeiten haben, bis hin zu uns allen, wenn wir altern und Schwierigkeiten haben, zu denken und sich zu erinnern. Die Bandbreite umfasst Menschen mit psychischen Erkrankungen wie [Depression](https://www.nimh.nih.gov/health/topics/depression) und [Schizophrenie](https://www.nimh.nih.gov/health/topics/schizophrenia). Sie umfasst auch Menschen mit Lernbehinderungen wie [Dyslexie](https://www.nichd.nih.gov/health/topics/learningdisabilities) und [Aufmerksamkeitsdefizit-Hyperaktivitätsstörung](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd). Wichtig ist, dass es trotz der großen Vielfalt an klinischen Definitionen kognitiver Beeinträchtigungen einen gemeinsamen Satz funktionaler Probleme gibt, denen Menschen mit diesen Beeinträchtigungen begegnen. Dazu gehören Schwierigkeiten beim Verstehen von Inhalten, das Erinnern, wie man Aufgaben erledigt, und Verwirrung, die durch inkonsistente Webseitenlayouts verursacht wird.

Eine gute Grundlage der Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Bereitstellung von Inhalten auf mehr als eine Weise, z.B. durch Text-zu-Sprache oder Video.
- Leicht verständliche Inhalte, wie Texte, die den Standards für einfache Sprache entsprechen.
- Konzentration auf wichtige Inhalte.
- Minimierung von Ablenkungen wie unnötigen Inhalten oder Werbung.
- Konsistente Webseitenlayout und Navigation.
- Vertraute Elemente, wie unterstrichene Links blau, wenn nicht besucht, und violett, wenn besucht.
- Aufteilung von Prozessen in logische, essentielle Schritte mit Fortschrittsanzeigern.
- Website-Authentifizierung so einfach wie möglich, ohne die Sicherheit zu kompromittieren.
- Formulare einfach zu vervollständigen, wie z.B. mit klaren Fehlernachrichten und einfacher Fehlerbehebung.

### Hinweise

- Das Design mit [kognitiver Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility) wird zu guten Designpraktiken führen. Sie werden allen zugutekommen.
- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Behinderungen. Websites müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) des W3C entsprechen, einschließlich der [Richtlinien zur kognitiven Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility#wcag_guidelines).
- Die W3C-[Taskforce zur Zugänglichkeit für kognitive und Lernbehinderungen](https://www.w3.org/WAI/GL/task-forces/coga/) erstellt Richtlinien zur Web-Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive-Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die US-Zentren für Krankheitskontrolle schätzen, dass ab 2018 1 von 4 US-Bürgern eine Behinderung hat und davon [kognitive Beeinträchtigungen am häufigsten bei jungen Menschen auftreten](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden einige intellektuelle Behinderungen in der Vergangenheit als "geistige Behinderung" bezeichnet. Viele betrachten diesen Begriff mittlerweile als abwertend, daher sollte seine Verwendung vermieden werden.
- Im Vereinigten Königreich werden einige intellektuelle Behinderungen als "Lernbehinderungen" oder "Lernschwierigkeiten" bezeichnet.

## Umsetzung von Barrierefreiheit in Ihr Projekt

Ein verbreiteter Mythos zur Barrierefreiheit ist, dass die Barrierefreiheit eine teure "zusätzliche" Implementierung in einem Projekt ist. Dieser Mythos kann tatsächlich _wahr_ sein, wenn entweder:

- Sie versuchen, "nachträglich" Barrierefreiheit auf eine bestehende Website anzuwenden, die erhebliche Barrierefreiheitprobleme hat.
- Sie erst spät im Projektverlauf beginnen, Barrierefreiheit zu berücksichtigen, und damit verbundene Probleme aufdecken.

Wenn Sie jedoch die Barrierefreiheit von Anfang an in Ihr Projekt einbeziehen, sollten die Kosten für die Barrierefreiheit der meisten Inhalte relativ gering sein.

Wenn Sie Ihr Projekt planen, berücksichtigen Sie die Barrierefreiheitstests in Ihrem Testregime, genau wie Tests für jedes andere wichtige Zielpublikum (z.B. Ziel-Desktop- oder Mobilbrowser). Testen Sie früh und häufig, idealerweise durch automatisierte Tests, um programmatisch erkennbar fehlende Funktionen (wie fehlenden Bildalternativtext oder schlechten Linktext — siehe [Verwenden Sie sinnvolle Textbeschriftungen](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels)) zu identifizieren und einige Tests mit behinderten Benutzergruppen durchzuführen, um zu sehen, wie gut komplexere Website-Funktionen für sie funktionieren. Zum Beispiel:

- Ist mein Datumswähler-Widget für Benutzer von Bildschirmlesegeräten nutzbar?
- Wenn sich Inhalte dynamisch aktualisieren, wissen sehbehinderte Menschen davon?
- Sind meine UI-Schaltflächen für sowohl Tastatur- als auch Touch-Interface-Benutzer zugänglich?

Sie können und sollten sich mögliche Problemgebiete in Ihren Inhalten merken, die Arbeit benötigen, um sie barrierefrei zu machen, sicherstellen, dass sie gründlich getestet werden, und Lösungen/Alternativen in Betracht ziehen. Textinhalt (wie Sie im nächsten Artikel sehen werden) ist einfach, aber wie steht es mit Ihren Multimedia-Inhalten und Ihren aufregenden 3D-Grafiken? Sie sollten Ihr Projektbudget betrachten und überlegen, welche Lösungen Sie haben, um solche Inhalte barrierefrei zu machen. Die Transkription all Ihrer Multimedia-Inhalte ist eine Option, die, obwohl teuer, möglich ist.

Seien Sie auch realistisch. "100% Barrierefreiheit" ist ein unerreichbares Ideal — Sie werden immer auf einen gewissen Randfall stoßen, bei dem ein bestimmter Benutzer bestimmte Inhalte schwer verwenden kann — aber Sie sollten so viel wie möglich tun. Wenn Sie planen, eine aufregende 3D-Tortengrafik mit WebGL einzubinden, möchten Sie möglicherweise eine Datentabelle als barrierefreie alternative Darstellung der Daten einfügen. Oder, Sie könnten einfach die Tabelle einfügen und die 3D-Tortengrafik weglassen — die Tabelle ist für alle zugänglich, schneller zu kodieren, weniger CPU-intensiv und einfacher zu warten.

Andererseits, wenn Sie an einer Galerie-Website arbeiten, die interessante 3D-Kunst zeigt, wäre es unvernünftig zu erwarten, dass jedes Kunstwerk perfekt für sehbehinderte Menschen zugänglich ist, da es ein rein visuelles Medium ist.

Um zu zeigen, dass Ihnen Barrierefreiheit wichtig ist und Sie darüber nachgedacht haben, veröffentlichen Sie eine Erklärung zur Barrierefreiheit auf Ihrer Website, die beschreibt, was Ihre Politik in Bezug auf Barrierefreiheit ist und welche Schritte Sie unternommen haben, um die Site barrierefrei zu machen. Wenn jemand Sie darauf hinweist, dass Ihre Website ein Barrierefreiheitsproblem hat, beginnen Sie einen Dialog mit ihm, zeigen Sie Einfühlungsvermögen und ergreifen Sie angemessene Maßnahmen, um das Problem zu beheben.

Zusammenfassend:

- Berücksichtigen Sie Barrierefreiheit von Beginn eines Projekts an und testen Sie früh und häufig. Genau wie bei jedem anderen Fehler wird eine Barrierefreiheitproblem teurer, je später es entdeckt wird.
- Denken Sie daran, dass viele bewährte Praktiken der Barrierefreiheit allen zugutekommen, nicht nur Benutzern mit Behinderungen. Zum Beispiel ist schlankes semantisches Markup nicht nur gut für Bildschirmleseprogramme, sondern auch schnell zu laden und performant. Dies kommt allen zugute, insbesondere Nutzern mobiler Geräte und/oder langsamer Verbindungen.
- Veröffentlichen Sie eine Erklärung zur Barrierefreiheit auf Ihrer Website und engagieren Sie sich mit Menschen, die Probleme haben.

## Barrierefreiheitsrichtlinien und das Gesetz

Es gibt zahlreiche Checklisten und Richtlinien, auf denen Barrierefreiheitstests basieren können, was auf den ersten Blick überwältigend erscheinen mag. Unser Ratschlag ist, sich mit den grundlegenden Bereichen vertraut zu machen, in denen Sie darauf achten müssen, sowie die übergeordneten Strukturen der für Sie am relevantesten Richtlinien zu verstehen.

- Zunächst hat das W3C ein großes und sehr detailliertes Dokument veröffentlicht, das sehr präzise, technologieunabhängige Kriterien für die Einhaltung der Barrierefreiheit enthält. Diese heißen die [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG), und sie sind keineswegs eine kurze Lektüre. Die Kriterien sind in vier Hauptkategorien unterteilt, die spezifizieren, wie Implementierungen wahrnehmbar, bedienbar, verständlich und robust gestaltet werden können. Der beste Ort, um eine leichte Einführung zu erhalten und zu lernen, ist [WCAG auf einen Blick](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). Es ist nicht notwendig, alle WCAG-Kriterien zu lernen - seien Sie sich der Hauptbereiche bewusst, und verwenden Sie eine Vielzahl von Techniken und Tools, um Bereiche hervorzuheben, die nicht den WCAG-Kriterien entsprechen (siehe unten für mehr).
- Ihr Land könnte auch spezifische Gesetze haben, die regeln, dass Websites, die ihrer Bevölkerung dienen, barrierefrei sein müssen - zum Beispiel [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) in der EU, [Section 508 of the Rehabilitation Act](https://www.section508.gov/training/) in den USA, [Barrierefreie Informationstechnik-Verordnung](https://www.aktion-mensch.de/inklusion/barrierefreiheit/barrierefreie-website) in Deutschland, die [Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) in Großbritannien, [Accessibilità](https://www.agid.gov.it/it/ambiti-intervento/accessibilita-usabilita) in Italien, das [Disability Discrimination Act](https://humanrights.gov.au/resource-hub/by-resource-type/guidelines-and-standards/guides-and-standards-disability-rights/guidelines-equal-access-digital-goods-and-services) in Australien, usw. Das W3C führt eine Liste von [Web Accessibility Laws & Policies](https://www.w3.org/WAI/policies/) nach Ländern.

Also während die WCAG eine Reihe von Richtlinien ist, wird Ihr Land wahrscheinlich Gesetze haben, die die Barrierefreiheit des Webs regeln, zumindest aber die Barrierefreiheit von öffentlich zugänglichen Dienstleistungen (die Websites, Fernsehen, physische Räume usw. beinhalten können). Es ist eine gute Idee, herauszufinden, welche Gesetze für Sie gelten. Wenn Sie keine Anstrengung unternehmen, um zu überprüfen, ob Ihre Inhalte barrierefrei sind, könnten Sie rechtlich haftbar sein, wenn Personen sich beschweren.

Das klingt ernst, aber eigentlich müssen Sie Barrierefreiheit einfach nur als Hauptpriorität in Ihren Webentwicklungspraktiken berücksichtigen, wie oben beschrieben. Im Zweifelsfall holen Sie sich Rat von einem qualifizierten Anwalt. Wir werden nicht mehr Ratschläge als das geben, weil wir keine Anwälte sind.

## Barrierefreiheits-APIs

Webbrowser verwenden spezielle **Barrierefreiheits-APIs** (bereitgestellt durch das zugrunde liegende Betriebssystem), die Informationen bereitstellen, die für Hilfstechnologien (ATs) nützlich sind — ATs tendieren hauptsächlich dazu, semantische Informationen zu verwenden, sodass diese Informationen keine Stilinformatieonen oder JavaScript enthalten. Diese Informationen sind in einem Informationsbaum strukturiert, der als **Barrierefreiheitbaum** bezeichnet wird.

Verschiedene Betriebssysteme haben unterschiedliche Barrierefreiheits-APIs verfügbar:

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- macOS: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility framework
- iOS: UIAccessibility

Wo die native semantische Informationen, die von den HTML-Elementen in Ihren Web-Apps bereitgestellt werden, versagen, können Sie sie mit Funktionen aus der [WAI-ARIA-Spezifikation](https://w3c.github.io/aria/) ergänzen, die semantische Informationen zum Barrierefreiheitbaum hinzufügen, um die Barrierefreiheit zu verbessern. Sie können viel mehr über WAI-ARIA in unserem Artikel [WAI-ARIA Grundlagen](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) erfahren.

## Zusammenfassung

Dieser Artikel sollte Ihnen einen nützlichen Überblick über Barrierefreiheit gegeben haben, Ihnen gezeigt haben, warum sie wichtig ist, und wie Sie sie in Ihren Workflow integrieren können. Sie sollten jetzt auch den Wunsch verspüren, mehr über die Umsetzungsdetails zu erfahren, die Websites barrierefrei machen können, und welche Tools dabei helfen können. Wir werden im nächsten Artikel auf Barrierefreiheitstools eingehen.

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
  - [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  - [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  - [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  - [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

- [Google Chrome hat eine automatische Untertitel-Erweiterung veröffentlicht](https://blog.google/products-and-platforms/products/chrome/live-caption-chrome/)

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}
