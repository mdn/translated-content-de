---
title: Was ist Barrierefreiheit?
slug: Learn/Accessibility/What_is_accessibility
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{NextMenu("Learn/Accessibility/HTML", "Learn/Accessibility")}}

Dieser Artikel beginnt das Modul mit einem guten Überblick darüber, was Barrierefreiheit ist — diese Übersicht umfasst, welche Personengruppen wir berücksichtigen müssen und warum, welche Werkzeuge verschiedene Menschen verwenden, um mit dem Web zu interagieren, und wie wir Barrierefreiheit in unseren Webentwicklungs-Workflow integrieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein grundlegendes Verständnis von HTML und CSS.</td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit Barrierefreiheit, einschließlich was es ist und wie es
        Sie als Webentwickler betrifft.
      </td>
    </tr>
  </tbody>
</table>

## Was ist also Barrierefreiheit?

Barrierefreiheit ist die Praxis, Ihre Websites für möglichst viele Menschen nutzbar zu machen. Wir denken dabei traditionell an Menschen mit Behinderungen, aber die Praxis, Seiten barrierefrei zu gestalten, kommt auch anderen Gruppen zugute, wie z.B. Menschen, die mobile Geräte oder langsame Netzwerkverbindungen nutzen.

Sie könnten Barrierefreiheit auch als Gleichbehandlung aller Menschen betrachten, indem Sie ihnen gleiche Chancen geben, unabhängig von ihrer Fähigkeit oder ihren Umständen. Genauso wie es falsch ist, jemanden aus einem Gebäude auszuschließen, weil er im Rollstuhl sitzt (moderne öffentliche Gebäude haben in der Regel Rollstuhlrampen oder Aufzüge), ist es auch nicht richtig, jemanden von einer Website auszuschließen, weil er eine Sehbehinderung hat. Wir sind alle verschieden, aber wir sind alle Menschen und haben daher dieselben Menschenrechte.

Barrierefreiheit ist das Richtige. Barrierefreie Seiten bereitzustellen ist in einigen Ländern gesetzlich vorgeschrieben, was wichtige Märkte erschließen kann, die sonst Ihre Dienstleistungen nicht nutzen oder Ihre Produkte nicht kaufen könnten.

Barrierefreie Websites nützen jedem:

- Semantisches HTML verbessert die Barrierefreiheit und auch die SEO, wodurch Ihre Seite besser auffindbar wird.
- Sich um Barrierefreiheit zu kümmern, zeigt gute Ethik und Moral, was Ihr öffentliches Image verbessert.
- Andere gute Praktiken, die die Barrierefreiheit verbessern, machen Ihre Website auch für andere Gruppen nutzbarer, wie z.B. für Handybenutzer oder solche mit niedriger Netzwerkgeschwindigkeit. Tatsächlich kann jeder von vielen solchen Verbesserungen profitieren.
- Haben wir schon erwähnt, dass es in manchen Ländern auch gesetzlich vorgeschrieben ist?

## Welche Arten von Behinderungen betrachten wir?

Menschen mit Behinderungen sind genauso vielfältig wie Menschen ohne Behinderungen, ebenso wie ihre Behinderungen. Der wichtigste Punkt ist, über Ihren eigenen Computer und Ihre Nutzung des Internets hinauszudenken und zu lernen, wie andere es nutzen — _Sie sind nicht Ihre Nutzer_. Die wichtigsten zu betrachtenden Behinderungsarten werden unten erklärt, zusammen mit den speziellen Werkzeugen, die sie verwenden, um auf Webinhalte zuzugreifen (bekannt als **assistive Technologien**, oder **ATs**).

> [!NOTE]
> Das Faktenblatt der Weltgesundheitsorganisation zu [Behinderung und Gesundheit](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health) besagt, dass "über eine Milliarde Menschen, etwa 15 % der Weltbevölkerung, irgendeine Form von Behinderung haben", und "zwischen 110 Millionen und 190 Millionen Erwachsene haben erhebliche Schwierigkeiten bei der Funktionsweise".

### Menschen mit Sehbehinderungen

Menschen mit Sehbehinderungen umfassen Menschen mit Blindheit, eingeschränktem Sehvermögen und Farbenblindheit. Viele Menschen mit Sehbehinderungen verwenden Bildschirmvergrößerer, die entweder physisch oder Software-Zoom-Funktionen sind. Die meisten Browser und Betriebssysteme haben heutzutage Zoom-Funktionen. Einige Benutzer sind auf Bildschirmlesegeräte angewiesen, bei denen es sich um Software handelt, die digitalen Text vorliest. Einige Beispiele für Bildschirmlesegeräte sind:

- Kostenpflichtige kommerzielle Produkte wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows) und [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows).
- Kostenlose Produkte wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- In das Betriebssystem integrierte Software wie [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf ChromeOS) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Es ist eine gute Idee, sich mit Bildschirmlesegeräten vertraut zu machen; Sie sollten auch ein Bildschirmlesegerät einrichten und es ausprobieren, um eine Vorstellung davon zu bekommen, wie es funktioniert. Siehe unseren [Leitfaden zum Testen von Bildschirmlesegeräten in verschiedenen Browsern](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers) für mehr Details zur Nutzung. Das untenstehende Video bietet auch ein kurzes Beispiel für das Erlebnis.

{{EmbedYouTube("IK97XMibEws")}}

In Bezug auf Statistiken schätzt die Weltgesundheitsorganisation, dass "weltweit 285 Millionen Menschen als sehbehindert gelten: 39 Millionen sind blind und 246 Millionen haben eine niedrige Sehkraft." (siehe [Sehbehinderung und Blindheit](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)). Das ist eine große und bedeutende Nutzergruppe, die man einfach auslassen würde, weil Ihre Website nicht richtig kodiert ist — fast so groß wie die Bevölkerung der Vereinigten Staaten von Amerika.

### Menschen mit Hörbehinderungen

[Taube und schwerhörige (DHH)](https://www.nad.org/resources/american-sign-language/community-and-culture-frequently-asked-questions/) Menschen haben unterschiedliche Grade von Hörverlust, von mild bis tiefgreifend. Obwohl einige AT nutzen (siehe [Hilfsgeräte für Menschen mit Hör-, Stimm-, Sprach- oder Sprachstörungen](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), sind sie nicht weit verbreitet.

Um Zugang zu bieten, müssen textliche Alternativen bereitgestellt werden. Videos sollten manuell untertitelt werden, und Transkripte sollten für Audioinhalte bereitgestellt werden. Außerdem sollte aufgrund der hohen [Sprachdeprivation](https://epicspecialeducationstaffing.com/language-deprivation/#:~:text=Language%20deprivation%20is%20the%20term,therefore%20not%20exposed%20to%20language.) in DHH-Populationen [Textvereinfachung in Betracht gezogen werden](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/).

Taube und schwerhörige Menschen stellen ebenfalls eine signifikante Nutzerbasis dar — "466 Millionen Menschen weltweit haben eine hörbeeinträchtigende Behinderung", sagt das Faktenblatt der Weltgesundheitsorganisation zu [Taubheit und Hörverlust](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss).

### Menschen mit Mobilitätsbeeinträchtigungen

Diese Menschen haben Behinderungen bezüglich der Bewegung, was rein physische Probleme (wie z.B. Verlust einer Gliedmaße oder Lähmung) oder neurologische/genetische Störungen umfassen kann, die zu Schwäche oder Kontrollverlust in Gliedmaßen führen. Einige Menschen könnten Schwierigkeiten haben, die genauen Handbewegungen zu machen, die zur Bedienung einer Maus erforderlich sind, während andere schwerer betroffen sein könnten, vielleicht signifikant gelähmt, so dass sie einen [Kopfstab](https://www.performancehealth.com/adjustable-headpointer) zur Interaktion mit Computern benötigen.

Diese Art von Behinderung kann auch eine Folge des Alters sein, anstatt eines spezifischen Traumas oder Zustands, und sie könnte auch durch Hardwareeinschränkungen verursacht werden — einige Benutzer haben möglicherweise keine Maus.

Oft wirkt sich dies auf die Webentwicklungsarbeit aus, dass Steuerungen zugänglich über die Tastatur gemacht werden müssen — wir werden die Tastaturzugänglichkeit in späteren Artikeln des Moduls besprechen, aber es ist eine gute Idee, einige Websites nur mit der Tastatur auszuprobieren, um zu sehen, wie Sie vorankommen. Können Sie die Tabulatortaste verwenden, um zwischen den verschiedenen Steuerungen eines Webformulars zu wechseln? Weitere Details zu Tastatursteuerungen finden Sie in unserem Abschnitt [Tastaturzugänglichkeit in der Querbrowser-Testung verwenden](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#using_native_keyboard_accessibility).

In Bezug auf Statistiken haben viele Menschen Mobilitätsbeeinträchtigungen. Die US-Zentren für Krankheitskontrolle und Prävention berichten in [Behinderung und Funktionalität (nicht-institutionalisierte Erwachsene ab 18 Jahren)](https://www.cdc.gov/nchs/fastats/disability.htm), dass der USA "Anteil der Erwachsenen mit jeglicher physischer Funktionsbeeinträchtigung: 16,1 %".

### Menschen mit kognitiven Beeinträchtigungen

Kognitive Beeinträchtigung bezieht sich auf eine breite Palette von Behinderungen, von Menschen mit intellektuellen Beeinträchtigungen, die die am meisten eingeschränkten Fähigkeiten haben, bis zu uns allen, wenn wir altern und Schwierigkeiten beim Denken und Erinnern haben. Das Spektrum umfasst Menschen mit psychischen Erkrankungen wie [Depression](https://www.nimh.nih.gov/health/topics/depression) und [Schizophrenie](https://www.nimh.nih.gov/health/topics/schizophrenia). Es umfasst auch Menschen mit Lernstörungen, wie [Legasthenie](https://www.ninds.nih.gov/health-information/disorders/learning-disabilities) und [Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd). Wichtig ist, dass trotz der großen Vielfalt innerhalb der klinischen Definitionen von kognitiven Beeinträchtigungen Menschen mit ihnen eine gemeinsame Reihe von funktionalen Problemen erfahren. Diese umfassen Schwierigkeiten beim Verstehen von Inhalten, Erinnern, wie Aufgaben abgeschlossen werden, und Verwirrung durch ungleichmäßige Webseitenlayouts.

Eine gute Grundlage für Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Bereitstellung von Inhalten auf mehr als eine Weise, z.B. durch Text-zu-Sprache oder Video.
- Leicht verständliche Inhalte, z.B. Texte, die nach den Standards der leichten Sprache geschrieben sind.
- Fokussierung der Aufmerksamkeit auf wichtige Inhalte.
- Minimierung von Ablenkungen wie unnötigen Inhalten oder Werbung.
- Konsistentes Webseitenlayout und Navigation.
- Vertraute Elemente, z.B. unterstrichene Links in Blau, wenn nicht besucht, und in Lila, wenn besucht.
- Aufteilung von Prozessen in logische, wesentliche Schritte mit Fortschrittsindikatoren.
- Website-Authentifizierung so einfach wie möglich, ohne die Sicherheit zu gefährden.
- Auffüllen von Formularen einfach machen, z.B. mit klaren Fehlermeldungen und einfacher Fehlerbehebung.

### Anmerkungen

- Die Gestaltung unter Berücksichtigung der [kognitiven Zugänglichkeit](/de/docs/Web/Accessibility/Cognitive_accessibility) wird zu guten Designpraktiken führen. Diese werden jedem zugutekommen.
- Viele Menschen mit kognitiven Beeinträchtigungen haben auch physische Behinderungen. Websites müssen den W3C-[Richtlinien zur Barrierefreiheit für Webinhalte](https://www.w3.org/WAI/standards-guidelines/wcag/) entsprechen, einschließlich der [Richtlinien zur kognitiven Zugänglichkeit](/de/docs/Web/Accessibility/Cognitive_accessibility#wcag_guidelines).
- Die [W3C-Eingliederungs- und Lernbehinderungs-Zugänglichkeits-Taskforce](https://www.w3.org/WAI/GL/task-forces/coga/) erstellt Webzugänglichkeitsrichtlinien für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive-Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die US-amerikanischen Zentren für Krankheitskontrolle schätzen, dass ab 2018 1 von 4 US-Bürgern eine Behinderung hat und davon [kognitive Beeinträchtigung am häufigsten bei jungen Menschen vorkommt](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden einige intellektuelle Beeinträchtigungen historisch als "geistige Behinderung" bezeichnet. Viele betrachten diesen Begriff inzwischen als abwertend, daher sollte seine Nutzung vermieden werden.
- In Großbritannien werden einige intellektuelle Beeinträchtigungen als "Lernschwierigkeiten" oder "Lernbehinderungen" bezeichnet.

## Barrierefreiheit in Ihr Projekt integrieren

Ein häufiges Missverständnis über Barrierefreiheit ist, dass sie eine teure "zusätzliche" Implementierung in ein Projekt ist. Dieser Mythos kann tatsächlich _wahr_ sein, wenn entweder:

- Sie Barrierefreiheit in eine bestehende Website "nachrüsten", die erhebliche Barrierefreiheitsprobleme hat.
- Sie erst spät im Projektverlauf beginnen, Barrierefreiheit zu berücksichtigen und damit verbundene Probleme aufzudecken.

Wenn Sie jedoch von Anfang an Barrierefreiheit in einem Projekt berücksichtigen, sollten die Kosten für die barrierefreie Gestaltung der meisten Inhalte relativ gering sein.

Wenn Sie Ihr Projekt planen, berücksichtigen Sie Barrierefreiheitstests in Ihrem Testregime, genau wie Sie für jedes andere wichtige Zielpublikum testen (z.B. Ziel-Desktop- oder mobile Browser). Testen Sie früh und oft, idealerweise mit automatisierten Tests, um programmgesteuert erkennbare fehlende Funktionen zu erkennen (wie fehlender Bild-Alternativtext oder schlechter Linktext — siehe [Elementbeziehungen und Kontext](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#element_relationships_and_context)) und testen Sie mit behinderten Nutzergruppen, um zu sehen, wie gut komplexere Website-Funktionen für sie funktionieren. Beispielsweise:

- Ist mein Datumswähler-Widget für Personen mit Bildschirmlesern nutzbar?
- Wenn sich Inhalte dynamisch aktualisieren, wissen sehbehinderte Menschen davon?
- Sind meine UI-Buttons sowohl für Benutzer von Tastaturen als auch für Benutzer von Touchschnittstellen zugänglich?

Sie können und sollten mögliche Problemstellen in Ihren Inhalten notieren, die für die Barrierefreiheit bearbeitet werden müssen, sicherstellen, dass sie gründlich getestet werden, und über Lösungen/Alternativen nachdenken. Textinhalte (wie Sie im nächsten Artikel sehen werden) sind einfach, aber was ist mit Ihrem Multimedia-Inhalt und Ihren 3D-Grafiken? Sie sollten Ihr Projektbudget betrachten und darüber nachdenken, welche Lösungen Ihnen zur Verfügung stehen, um solche Inhalte zugänglich zu machen. Alle Ihre Multimedia-Inhalte transkribieren zu lassen, ist eine Option, während teuer, jedoch möglich.

Seien Sie auch realistisch. "100 % Barrierefreiheit" ist ein unerreichbares Ideal — Sie werden immer auf irgendeine Art von Randfall stoßen, der dazu führt, dass ein bestimmter Benutzer bestimmte Inhalte schwer nutzen kann — aber Sie sollten so viel wie möglich tun. Wenn Sie planen, ein anspruchsvolles 3D-Kuchendiagrammgrafik mit WebGL einzubeziehen, möchten Sie vielleicht eine Datentabelle als zugängliche alternative Darstellung der Daten einbeziehen. Oder Sie möchten vielleicht einfach die Tabelle einbeziehen und das 3D-Kuchendiagramm weglassen — die Tabelle ist für jeden zugänglich, schneller zu kodieren, weniger CPU-intensiv und einfacher zu warten.

Andererseits, wenn Sie an einer Galerie-Website arbeiten, die interessante 3D-Kunst zeigt, wäre es unvernünftig zu erwarten, dass jedes Kunstwerk perfekt zugänglich für sehbehinderte Menschen ist, da es ein rein visuelles Medium ist.

Um zu zeigen, dass Ihnen Barrierefreiheit wichtig ist und Sie darüber nachgedacht haben, veröffentlichen Sie eine Barrierefreiheitserklärung auf Ihrer Website, die beschreibt, was Ihre Politik in Bezug auf Barrierefreiheit ist und welche Schritte Sie unternommen haben, um die Website zugänglich zu machen. Wenn jemand Sie darauf hinweist, dass Ihre Website ein Barrierefreiheitsproblem hat, beginnen Sie einen Dialog mit ihm, seien Sie einfühlsam und unternehmen Sie vernünftige Schritte, um das Problem zu beheben.

> [!NOTE]
> Unser Artikel zur [Behandlung häufiger Barrierefreiheitsprobleme](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility) behandelt die Barrierefreiheitsspezifika, die detaillierter getestet werden sollten.

Zusammenfassend:

- Berücksichtigen Sie Barrierefreiheit von Anfang an im Projekt und testen Sie früh und oft. Wie bei jedem anderen Fehler wird ein Barrierefreiheitsproblem teurer zu beheben, je später es entdeckt wird.
- Denken Sie daran, dass viele der besten Praktiken für Barrierefreiheit jedem zugutekommen, nicht nur Benutzern mit Behinderungen. Zum Beispiel ist eine schlanke semantische Auszeichnung nicht nur gut für Bildschirmlesegeräte, sondern auch schnell zu laden und leistungsfähig. Dies nützt jedem, insbesondere denen, die mobile Geräte nutzen und/oder langsame Verbindungen haben.
- Veröffentlichen Sie eine Barrierefreiheitserklärung auf Ihrer Website und treten Sie mit Menschen in Kontakt, die Probleme haben.

## Barrierefreiheitsrichtlinien und das Gesetz

Es gibt zahlreiche Checklisten und Richtliniensätze, die als Grundlage für Barrierefreiheitstests zur Verfügung stehen, was auf den ersten Blick überwältigend erscheinen mag. Unser Rat ist, sich mit den grundlegenden Bereichen vertraut zu machen, in denen Sie Sorgfalt walten lassen müssen, ebenso wie die hochrangigen Strukturen der für Sie relevantesten Richtlinien zu verstehen.

- Zunächst hat das W3C ein großes und sehr detailliertes Dokument veröffentlicht, das sehr präzise, technologieunabhängige Kriterien für die Barrierefreiheitskonformität enthält. Diese werden als die [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) bezeichnet und sind keineswegs eine kurze Lektüre. Die Kriterien sind in vier Hauptkategorien unterteilt, die spezifizieren, wie Implementierungen wahrnehmbar, bedienbar, verständlich und robust gemacht werden können. Der beste Ort, um eine leichte Einführung zu erhalten und zu lernen, ist [WCAG auf einen Blick](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). Es besteht keine Notwendigkeit, alle WCAG-Kriterien zu lernen — seien Sie sich der wichtigsten Problemfelder bewusst und verwenden Sie eine Vielzahl von Techniken und Werkzeugen, um Bereiche hervorzuheben, die nicht den WCAG-Kriterien entsprechen (siehe unten für mehr Informationen).
- Ihr Land kann auch spezifische Gesetze haben, die die Notwendigkeit regeln, dass Websites, die ihrer Bevölkerung dienen, barrierefrei sind — zum Beispiel [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) in der EU, [Section 508 des Rehabilitation Act](https://www.section508.gov/training/) in den USA, [Bundesverordnung über Barrierefreie Informationstechnik](https://www.aktion-mensch.de/inklusion/barrierefreiheit/barrierefreie-website) in Deutschland, die [Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) in Großbritannien, [Accessibilità](https://www.agid.gov.it/it/ambiti-intervento/accessibilita-usabilita) in Italien, das [Disability Discrimination Act](https://humanrights.gov.au/our-work/disability-rights/world-wide-web-access-disability-discrimination-act-advisory-notes-ver) in Australien, etc. Das W3C führt eine Liste von [Web Accessibility Laws & Policies](https://www.w3.org/WAI/policies/) nach Ländern.

Während die WCAG ein Satz von Richtlinien ist, wird Ihr Land wahrscheinlich Gesetze haben, die die Webzugänglichkeit regeln, oder zumindest die Barrierefreiheit von öffentlich zugänglichen Diensten (was Websites, Fernsehen, physische Räume usw. umfassen könnte). Es ist eine gute Idee, herauszufinden, was Ihre Gesetze sind. Wenn Sie keine Anstrengung unternehmen, zu überprüfen, ob Ihre Inhalte zugänglich sind, könnten Sie rechtlich haftbar sein, wenn Menschen sich beschweren.

Das klingt ernst, aber eigentlich müssen Sie nur die Barrierefreiheit als Hauptpriorität Ihrer Webentwicklungspraktiken betrachten, wie oben beschrieben. Wenn Sie unsicher sind, holen Sie sich Rat von einem qualifizierten Anwalt. Wir werden hier keinen weiteren Rat als diesen geben, da wir keine Anwälte sind.

## Barrierefreiheits-APIs

Webbrowser verwenden spezielle **Barrierefreiheits-APIs** (bereitgestellt durch das zugrundeliegende Betriebssystem), die Informationen bereitstellen, die für assistive Technologien (ATs) nützlich sind — ATs neigen dazu, hauptsächlich semantische Informationen zu nutzen, daher sind diese Informationen nicht solche wie Stilinformationen oder JavaScript. Diese Informationen sind in einer als **barrierefreie Struktur** bezeichneten Informationshierarchie organisiert.

Verschiedene Betriebssysteme haben verschiedene Barrierefreiheits-APIs verfügbar:

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- macOS: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility framework
- iOS: UIAccessibility

Wenn die nativen semantischen Informationen, die von den HTML-Elementen in Ihren Web-Apps bereitgestellt werden, nicht ausreichen, können Sie sie mit Funktionen aus der [WAI-ARIA-Spezifikation](https://www.w3.org/TR/wai-aria/) ergänzen, die semantische Informationen zur barrierefreien Struktur hinzufügen, um die Barrierefreiheit zu verbessern. Sie können viel mehr über WAI-ARIA in unserem Artikel zu [WAI-ARIA-Grundlagen](/de/docs/Learn/Accessibility/WAI-ARIA_basics) lernen.

## Zusammenfassung

Dieser Artikel sollte Ihnen einen nützlichen Überblick auf hohem Niveau über die Barrierefreiheit gegeben haben, gezeigt haben, warum sie wichtig ist, und wie Sie sie in Ihren Workflow integrieren können. Sie sollten jetzt auch ein Verlangen haben, mehr über die Implementierungsdetails zu lernen, die Websites zugänglich machen können, und wir werden damit im nächsten Abschnitt beginnen, indem wir untersuchen, warum HTML eine gute Grundlage für Barrierefreiheit ist.

{{NextMenu("Learn/Accessibility/HTML", "Learn/Accessibility")}}

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG)

  - [Wahrnehmbar](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
  - [Bedienbar](/de/docs/Web/Accessibility/Understanding_WCAG/Operable)
  - [Verständlich](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable)
  - [Robust](/de/docs/Web/Accessibility/Understanding_WCAG/Robust)

- [Google Chrome hat eine automatische Untertitel-Erweiterung veröffentlicht](https://blog.google/products/chrome/live-caption-chrome/)
