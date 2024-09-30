---
title: Was ist Barrierefreiheit?
slug: Learn/Accessibility/What_is_accessibility
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{NextMenu("Learn/Accessibility/HTML", "Learn/Accessibility")}}

Dieser Artikel beginnt das Modul mit einem guten Überblick darüber, was Barrierefreiheit ist — dieser Überblick umfasst, welche Personengruppen wir berücksichtigen müssen und warum, welche Werkzeuge verschiedene Menschen nutzen, um mit dem Web zu interagieren, und wie wir Barrierefreiheit in unseren Webentwicklungs-Workflow integrieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Grundlegendes Verständnis von HTML und CSS.</td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit der Barrierefreiheit zu gewinnen, einschließlich dessen, was sie ist und wie sie Sie als Webentwickler beeinflusst.
      </td>
    </tr>
  </tbody>
</table>

## Was ist also Barrierefreiheit?

Barrierefreiheit ist die Praxis, Ihre Websites für möglichst viele Menschen nutzbar zu machen. Traditionell denken wir dabei an Menschen mit Behinderungen, aber die Praxis, Websites barrierefrei zu gestalten, bietet auch anderen Gruppen Vorteile, wie beispielsweise Nutzern mobiler Geräte oder Personen mit langsamen Netzwerkverbindungen.

Sie könnten Barrierefreiheit auch als Gleichbehandlung aller Menschen betrachten, die ihnen gleiche Chancen bietet, unabhängig von ihrer Fähigkeit oder ihren Umständen. So wie es falsch ist, jemanden aus einem physischen Gebäude auszuschließen, weil er im Rollstuhl sitzt (moderne öffentliche Gebäude sind in der Regel mit Rollstuhlrampen oder Aufzügen ausgestattet), ist es auch nicht richtig, jemanden von einer Website auszuschließen, weil er eine Sehbehinderung hat. Wir sind alle verschieden, aber wir sind alle menschlich und haben daher die gleichen Menschenrechte.

Barrierefreiheit ist die richtige Sache. In einigen Ländern ist die Bereitstellung barrierefreier Websites gesetzlich vorgeschrieben, was einige bedeutende Märkte eröffnen kann, die ansonsten nicht in der Lage wären, Ihre Dienstleistungen zu nutzen oder Ihre Produkte zu kaufen.

Barrierefreie Websites bieten allen Vorteile:

- Semantisches HTML, das die Barrierefreiheit verbessert, verbessert auch die SEO und macht Ihre Website auffindbarer.
- Die Sorge um Barrierefreiheit zeigt gute Ethik und Moral und verbessert Ihr öffentliches Image.
- Andere bewährte Praktiken, die die Barrierefreiheit verbessern, machen Ihre Website auch für andere Gruppen nutzbarer, wie z.B. Nutzer von Mobiltelefonen oder solche mit niedriger Netzwerkgeschwindigkeit. Tatsächlich kann jeder von vielen Verbesserungen profitieren.
- Haben wir erwähnt, dass es in manchen Gegenden auch gesetzlich vorgeschrieben ist?

## Welche Arten von Behinderungen betrachten wir?

Menschen mit Behinderungen sind ebenso vielfältig wie Menschen ohne Behinderungen, und ihre Behinderungen variieren ebenso. Die zentrale Lektion hier ist, über den eigenen Computer und die eigene Nutzung des Internets hinauszudenken und zu lernen, wie andere es nutzen — _Sie sind nicht Ihre Nutzer_. Die wesentlichen Arten von Behinderungen, die zu berücksichtigen sind, werden im Folgenden erläutert, zusammen mit speziellen Werkzeugen, die sie zum Zugang zu Web-Inhalten verwenden (bekannt als **assistive Technologien** oder **ATs**).

> [!NOTE]
> Das Faktenblatt der Weltgesundheitsorganisation [Behinderung und Gesundheit](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health) besagt, dass "über eine Milliarde Menschen, etwa 15% der Weltbevölkerung, eine Form von Behinderung haben", und "zwischen 110 Millionen und 190 Millionen Erwachsene haben erhebliche Funktionsschwierigkeiten."

### Menschen mit Sehbehinderungen

Zu den Menschen mit Sehbehinderungen gehören Blinde, Menschen mit schwachem Sehvermögen und Farbenblinde. Viele Menschen mit Sehbehinderungen verwenden Bildschirmvergrößerer, die entweder physische Vergrößerer oder Software-Zoom-Funktionen sind. Die meisten Browser und Betriebssysteme verfügen heute über Zoom-Funktionen. Einige Nutzer sind auf Bildschirmleseprogramme angewiesen, das sind Softwarelösungen, die digitalen Text laut vorlesen. Einige Beispiele für Bildschirmleseprogramme sind:

- Bezahlte kommerzielle Produkte, wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows) und [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows).
- Kostenlose Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- In das Betriebssystem integrierte Software, wie [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf ChromeOS) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Es ist eine gute Idee, sich mit Bildschirmleseprogrammen vertraut zu machen; Sie sollten auch ein solches Programm einrichten und herumprobieren, um eine Vorstellung davon zu bekommen, wie es funktioniert. Siehe unseren [Leitfaden zum Cross-Browser-Testing von Bildschirmleseprogrammen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers) für mehr Details zur Nutzung. Das untenstehende Video bietet zudem ein kurzes Beispiel dafür, wie die Erfahrung ist.

{{EmbedYouTube("IK97XMibEws")}}

In Bezug auf die Statistik schätzt die Weltgesundheitsorganisation, dass "weltweit 285 Millionen Menschen sehbehindert sind: 39 Millionen sind blind und 246 Millionen haben eine Sehschwäche." (siehe [Sehbehinderung und Blindheit](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)). Dies ist eine große und signifikante Benutzergruppe, die man nicht einfach ignorieren kann, weil Ihre Website nicht ordnungsgemäß codiert ist — fast so groß wie die Bevölkerung der Vereinigten Staaten von Amerika.

### Menschen mit Hörbehinderungen

[Taube und schwerhörige Menschen (DHH)](https://www.nad.org/resources/american-sign-language/community-and-culture-frequently-asked-questions/) haben unterschiedliche Grade des Hörverlusts von leicht bis stark. Obwohl einige AT verwenden (siehe [Hilfsgeräte für Menschen mit Hör-, Sprach- oder Sprachstörungen](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), sind diese nicht weit verbreitet.

Um Zugang zu bieten, müssen textuelle Alternativen bereitgestellt werden. Videos sollten manuell untertitelt werden, und Transkripte sollten für Audioinhalte bereitgestellt werden. Darüber hinaus sollte aufgrund hoher [Sprachdeprivation](https://epicspecialeducationstaffing.com/language-deprivation/#:~:text=Language%20deprivation%20is%20the%20term,therefore%20not%20exposed%20to%20language.) in DHH-Populationen [Textvereinfachung in Betracht gezogen werden](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/).

Taube und schwerhörige Menschen stellen ebenfalls eine bedeutende Nutzerbasis dar — "466 Millionen Menschen weltweit haben einen beeinträchtigenden Hörverlust", sagt das Faktenblatt der Weltgesundheitsorganisation [Taubheit und Hörverlust](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss).

### Menschen mit Mobilitätsbeeinträchtigungen

Diese Menschen haben Behinderungen in Bezug auf Bewegung, die ausschließlich physische Probleme (wie Verlust eines Gliedes oder Lähmung) oder neurologische/genetische Störungen umfassen können, die zu Schwäche oder Kontrollverlust der Gliedmaßen führen. Einige Menschen haben möglicherweise Schwierigkeiten, die genauen Handbewegungen auszuführen, die für die Nutzung einer Maus erforderlich sind, während andere möglicherweise stärker betroffen sind und möglicherweise so stark gelähmt sind, dass sie einen [Kopfzeiger](https://www.performancehealth.com/adjustable-headpointer) verwenden müssen, um mit Computern zu interagieren.

Diese Art von Behinderung kann auch durch Alter im Gegensatz zu einem spezifischen Trauma oder Zustand verursacht werden und könnte auch auf Hardwarebeschränkungen zurückzuführen sein — einige Benutzer haben möglicherweise keine Maus.

Hierbei betrifft diese Behinderung in der Regel die Anforderung, dass Bedienelemente mit der Tastatur zugänglich sind — wir werden Tastaturzugänglichkeit in späteren Artikeln des Moduls diskutieren, aber es ist eine gute Idee, einige Websites nur mit der Tastatur auszuprobieren, um zu sehen, wie Sie zurechtkommen. Können Sie beispielsweise mit der Tabulatortaste zwischen den verschiedenen Bedienelementen eines Webformulars navigieren? Weitere Details zu Tastatursteuerungen finden Sie in unserem Abschnitt [Cross-Browser-Testing zur Verwendung nativer Tastaturzugänglichkeit](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#using_native_keyboard_accessibility).

Was die Statistik betrifft, so haben viele Menschen Mobilitätsbeeinträchtigungen. Das US-amerikanische Zentrum für Krankheitskontrolle und Prävention [Behinderung und Funktion (nicht institutionalisierte Erwachsene ab 18 Jahren)](https://www.cdc.gov/nchs/fastats/disability.htm) berichtet über die USA "Prozentsatz der Erwachsenen mit Schwierigkeiten bei der körperlichen Funktionsfähigkeit: 16,1%".

### Menschen mit kognitiven Beeinträchtigungen

Kognitive Beeinträchtigung bezieht sich auf eine breite Palette von Behinderungen, von Menschen mit intellektuellen Behinderungen, die die am stärksten eingeschränkten Fähigkeiten haben, bis hin zu all von uns im Alter, wenn wir Schwierigkeiten haben, zu denken und uns zu erinnern. Das Spektrum umfasst Menschen mit psychischen Krankheiten, wie [Depressionen](https://www.nimh.nih.gov/health/topics/depression) und [Schizophrenie](https://www.nimh.nih.gov/health/topics/schizophrenia). Es schließt auch Menschen mit Lernbehinderungen ein, wie [Dyslexie](https://www.ninds.nih.gov/health-information/disorders/learning-disabilities) und [Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd). Wichtig ist, obwohl es eine große Vielfalt innerhalb klinischer Definitionen kognitiver Beeinträchtigungen gibt, erleben Menschen mit ihnen eine gemeinsame Reihe funktionaler Probleme. Dazu gehören Schwierigkeiten beim Verständnis von Inhalten, beim Erinnern, wie Aufgaben zu erledigen sind, und Verwirrung, die durch inkonsistente Webseitenlayouts verursacht wird.

Eine gute Grundlage für die Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Bereitstellung von Inhalten auf mehr als eine Weise, beispielsweise durch Text-to-Speech oder Video.
- Leicht verständliche Inhalte, wie Texte, die den Standards für einfache Sprache entsprechen.
- Konzentration der Aufmerksamkeit auf wichtige Inhalte.
- Minimierung von Ablenkungen, wie unnötigem Inhalt oder Werbung.
- Konsistentes Webseitenlayout und Navigation.
- Vertraute Elemente, wie unterstrichene Links in Blau, wenn nicht besucht und in Lila, wenn besucht.
- Aufteilung von Prozessen in logische, wesentliche Schritte mit Fortschrittsanzeigen.
- Website-Authentifizierung so einfach wie möglich, ohne die Sicherheit zu beeinträchtigen.
- Einfaches Ausfüllen von Formularen, wie z.B. mit klaren Fehlermeldungen und einfacher Fehlerbehebung.

### Anmerkungen

- Design mit [kognitiver Barrierefreiheit](/de/docs/Web/Accessibility/Cognitive_accessibility) führt zu guten Designpraktiken. Sie werden allen zugutekommen.
- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Behinderungen. Websites müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) der W3C entsprechen, einschließlich [Richtlinien zur kognitiven Barrierefreiheit](/de/docs/Web/Accessibility/Cognitive_accessibility#wcag_guidelines).
- Die [Arbeitsgruppe für Barrierefreiheit von Menschen mit kognitiven und Lernbehinderungen](https://www.w3.org/WAI/GL/task-forces/coga/) der W3C erstellt Richtlinien für die Web-Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM verfügt über eine [Seite zu kognitiven Beeinträchtigungen](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die US-amerikanischen Zentren für Krankheitskontrolle schätzen, dass 2018 1 von 4 US-Bürgern eine Behinderung hat und davon [kognitive Beeinträchtigung für junge Menschen am häufigsten ist](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden einige intellektuelle Behinderungen historisch als "geistige Behinderung" bezeichnet. Viele betrachten diesen Begriff nun als abwertend, daher sollte seine Verwendung vermieden werden.
- Im Vereinigten Königreich werden einige intellektuelle Behinderungen als "Lernbehinderungen" oder "Lernschwierigkeiten" bezeichnet.

## Barrierefreiheit in Ihr Projekt implementieren

Ein häufiges Barrierefreiheitsmythos ist, dass Barrierefreiheit eine teure "zusätzliche Option" ist, die in ein Projekt implementiert wird. Dieser Mythos kann tatsächlich _wahr_ sein, wenn entweder:

- Sie versuchen, Barrierefreiheit in eine bestehende Website zu "nachzurüsten", die erhebliche Barrierefreiheitsprobleme hat.
- Sie haben erst spät in einem Projekt begonnen, sich mit Barrierefreiheit zu befassen, und entsprechende Probleme aufgedeckt.

Wenn Sie jedoch Barrierefreiheit von Anfang an in ein Projekt integrieren, sollten sich die Kosten für die Zugänglichkeit der meisten Inhalte in Grenzen halten.

Planen Sie in Ihrem Projekt Barrierefreiheits-Tests in Ihr Testregime ein, genau wie bei jedem anderen wichtigen Zielgruppen-Segment (z.B. Ziel-Desktop- oder mobile Browser). Testen Sie früh und häufig, führen Sie vorzugsweise automatisierte Tests durch, um programmatisch erkennbare fehlende Funktionen (wie fehlenden Bild-[Alternativtext](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#text_alternatives) oder schlechten Linktext — siehe [Elementbeziehungen und Kontext](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#element_relationships_and_context)) zu erkennen und einige Tests mit benachteiligten Nutzergruppen durchzuführen, um zu sehen, wie gut komplexere Website-Funktionen für sie funktionieren. Zum Beispiel:

- Ist mein Datumsauswahl-Widget für Personen mit Bildschirmleseprogrammen nutzbar?
- Wenn Inhalte dynamisch aktualisiert werden, werden sehbehinderte Menschen darüber informiert?
- Sind meine Benutzeroberflächen-Schaltflächen sowohl für Tastatur- als auch für Touch-Benutzer zugänglich?

Sie können und sollten potenzielle Problembereiche in Ihren Inhalten, die bearbeitet werden müssen, um sie zugänglich zu machen, vermerken, sicherstellen, dass sie gründlich getestet werden, und über Lösungen/Alternativen nachdenken. Textinhalt (wie Sie im nächsten Artikel sehen werden) ist einfach, aber was ist mit Ihren Multimedia-Inhalten und Ihren beeindruckenden 3D-Grafiken? Sie sollten Ihr Projektbudget überprüfen und überlegen, welche Lösungen Ihnen zur Verfügung stehen, um solche Inhalte zugänglich zu machen. Die Transkription all Ihrer Multimedia-Inhalte ist eine Option, die, obwohl teuer, möglich ist.

Seien Sie auch realistisch. "100% Barrierefreiheit" ist ein unerreichbares Ideal — Sie werden immer auf irgendeinen Randfall stoßen, bei dem ein bestimmter Benutzer bestimmte Inhalte schwer nutzen kann — aber Sie sollten so viel wie möglich tun. Wenn Sie vorhaben, eine beeindruckende 3D-Kreisdiagramm-Grafik mit WebGL einzuschließen, möchten Sie vielleicht eine Datentabelle als zugängliche alternative Darstellung der Daten einschließen. Oder, Sie könnten einfach die Tabelle einschließen und das 3D-Kreisdiagramm weglassen — die Tabelle ist für alle zugänglich, schneller zu codieren, weniger CPU-intensive und einfacher zu warten.

Wenn Sie andererseits an einer Galerie-Website arbeiten, die interessante 3D-Kunst zeigt, wäre es wenig sinnvoll, zu erwarten, dass jedes Kunstwerk für Sehbehinderte perfekt zugänglich ist, da es sich um ein reines visuelles Medium handelt.

Zeigen Sie, dass Sie sich kümmern und über Barrierefreiheit nachgedacht haben, indem Sie eine Barrierefreiheitserklärung auf Ihrer Website veröffentlichen, die beschreibt, welche Schritte Sie unternommen haben, um die Seite zugänglich zu machen. Wenn jemand Sie darauf hinweist, dass Ihre Seite ein Barrierefreiheitsproblem hat, beginnen Sie einen Dialog mit ihm, seien Sie einfühlsam und ergreifen Sie angemessene Maßnahmen, um das Problem zu beheben.

> [!NOTE]
> Unser Artikel [Umgang mit häufigen Barrierefreiheitsproblemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility) behandelt die Details, die in Bezug auf Barrierefreiheit getestet werden sollten, genauer.

Zusammenfassend:

- Berücksichtigen Sie Barrierefreiheit von Anfang an in einem Projekt und testen Sie früh und häufig. Genau wie bei jedem anderen Fehler wird ein Barrierefreiheitsproblem teurer zu beheben, je später es entdeckt wird.
- Bedenken Sie, dass viele bewährte Praktiken der Barrierefreiheit allen zugutekommen, nicht nur Nutzern mit Behinderungen. Beispielsweise ist ein schlankes semantisches Markup nicht nur für Bildschirmlesegeräte gut, sondern es ist auch schnell zu laden und performant. Dies ist für alle von Vorteil, insbesondere für diejenigen, die mobile Geräte und/oder langsame Verbindungen nutzen.
- Veröffentlichen Sie eine Barrierefreiheitserklärung auf Ihrer Website und treten Sie mit Menschen in Kontakt, die Probleme haben.

## Barrierefreiheitsrichtlinien und das Gesetz

Es gibt zahlreiche Checklisten und Richtlinien, auf denen Barrierefreiheittests basieren können, was auf den ersten Blick überwältigend erscheinen kann. Unser Rat ist, sich mit den grundlegenden Bereichen vertraut zu machen, in denen Sie sorgfältig vorgehen müssen, sowie die hochrangigen Strukturen der Richtlinien zu verstehen, die für Sie am relevantesten sind.

- Zunächst hat das W3C ein umfangreiches und sehr detailreiches Dokument veröffentlicht, das sehr präzise, technologieunabhängige Kriterien für die Konformität mit der Barrierefreiheit enthält. Diese wird als [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) bezeichnet, und sie sind keineswegs eine kurze Lektüre. Die Kriterien sind in vier Hauptkategorien unterteilt, die angeben, wie Implementierungen wahrnehmbar, bedienbar, verständlich und robust gemacht werden können. Der beste Ort, um eine kurze Einführung zu erhalten und mit dem Lernen zu beginnen, ist [WCAG auf einen Blick](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). Sie müssen nicht alle WCAG-Kriterien lernen — seien Sie sich der wichtigsten Bereiche bewusst und verwenden Sie eine Vielzahl von Techniken und Tools, um alle Bereiche hervorzuheben, die nicht den WCAG-Kriterien entsprechen (siehe unten für mehr).
- Ihr Land kann auch spezifische Gesetze haben, die die Notwendigkeit regeln, dass Websites, die ihre Bevölkerung bedienen, barrierefrei sind — z.B. [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) in der EU, [Section 508 of the Rehabilitation Act](https://www.section508.gov/training/) in den USA, [Verordnung zur barrierefreien Informationstechnik](https://www.aktion-mensch.de/inklusion/barrierefreiheit/barrierefreie-website) in Deutschland, die [Barrierefreiheits-Verordnung 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) im Vereinigten Königreich, [Accessibilità](https://www.agid.gov.it/it/ambiti-intervento/accessibilita-usabilita) in Italien, das [Disability Discrimination Act](https://humanrights.gov.au/our-work/disability-rights/world-wide-web-access-disability-discrimination-act-advisory-notes-ver) in Australien, usw. Das W3C führt eine Liste der [Web Accessibility Laws & Policies](https://www.w3.org/WAI/policies/) nach Land.

Während die WCAG eine Reihe von Richtlinien ist, wird Ihr Land wahrscheinlich Gesetze haben, die die Barrierefreiheit im Web regeln, oder zumindest die Barrierefreiheit von öffentlich zugänglichen Dienstleistungen (was Websites, Fernsehen, physische Räume usw. einschließen könnte). Es ist eine gute Idee, herauszufinden, was Ihre Gesetze sind. Wenn Sie keine Anstrengungen unternehmen, um zu überprüfen, ob Ihre Inhalte barrierefrei sind, könnten Sie rechtliche Konsequenzen tragen, wenn sich Menschen beschweren.

Dies klingt ernst, aber eigentlich müssen Sie lediglich Barrierefreiheit als Hauptpriorität Ihrer Webentwicklungspraxis betrachten, wie oben beschrieben. Im Zweifelsfall lassen Sie sich von einem qualifizierten Anwalt beraten. Wir werden hier keine weiteren Ratschläge geben, da wir keine Anwälte sind.

## Barrierefreiheits-APIs

Webbrowser nutzen spezielle **Barrierefreiheits-APIs** (bereitgestellt vom zugrunde liegenden Betriebssystem), die Informationen bereitstellen, die für unterstützende Technologien (ATs) nützlich sind — ATs nutzen in der Regel semantische Informationen, daher schließen diese Informationen Dinge wie Styling-Informationen oder JavaScript nicht ein. Diese Informationen sind in einem Informationsbaum organisiert, der als **Barrierefreiheitsbaum** bezeichnet wird.

Verschiedene Betriebssysteme haben unterschiedliche Barrierefreiheits-APIs zur Verfügung:

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- macOS: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility-Framework
- iOS: UIAccessibility

Wo die nativen semantischen Informationen, die durch die HTML-Elemente in Ihren Web-Apps bereitgestellt werden, unzureichend sind, können Sie diese mit den Merkmalen der [WAI-ARIA-Spezifikation](https://www.w3.org/TR/wai-aria/) ergänzen, wodurch semantische Informationen zum Barrierefreiheitsbaum hinzugefügt werden, um die Barrierefreiheit zu verbessern. Sie können mehr über WAI-ARIA in unserem Artikel [WAI-ARIA-Basics](/de/docs/Learn/Accessibility/WAI-ARIA_basics) erfahren.

## Zusammenfassung

Dieser Artikel sollte Ihnen einen nützlichen Überblick über Barrierefreiheit gegeben, Ihnen gezeigt haben, warum sie wichtig ist, und betrachtet haben, wie Sie sie in Ihren Workflow integrieren können. Sie sollten jetzt auch ein Verlangen haben, mehr über die Implementierungsdetails zu erfahren, die Websites zugänglich machen können, und wir werden damit in dem nächsten Abschnitt beginnen, in dem wir uns ansehen, warum HTML eine gute Grundlage für Barrierefreiheit ist.

{{NextMenu("Learn/Accessibility/HTML", "Learn/Accessibility")}}

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG)

  - [Wahrnehmbar](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
  - [Bedienbar](/de/docs/Web/Accessibility/Understanding_WCAG/Operable)
  - [Verständlich](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable)
  - [Robust](/de/docs/Web/Accessibility/Understanding_WCAG/Robust)

- [Google Chrome hat eine automatische Untertitelungserweiterung veröffentlicht](https://blog.google/products/chrome/live-caption-chrome/)
