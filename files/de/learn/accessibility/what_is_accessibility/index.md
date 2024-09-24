---
title: Was ist Barrierefreiheit?
slug: Learn/Accessibility/What_is_accessibility
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{NextMenu("Learn/Accessibility/HTML", "Learn/Accessibility")}}

Dieser Artikel beginnt das Modul mit einem guten Blick darauf, was Barrierefreiheit ist – diese Übersicht umfasst, welche Personengruppen wir berücksichtigen müssen und warum, welche Werkzeuge verschiedene Personen verwenden, um mit dem Internet zu interagieren, und wie wir Barrierefreiheit in unseren Webentwicklungs-Workflow integrieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Grundlegendes Verständnis von HTML und CSS.</td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sich mit Barrierefreiheit vertraut zu machen, einschließlich dessen, was es ist und wie es Sie als Webentwickler beeinflusst.
      </td>
    </tr>
  </tbody>
</table>

## Was ist also Barrierefreiheit?

Barrierefreiheit ist die Praxis, Ihre Websites so nutzbar wie möglich für so viele Menschen wie möglich zu machen. Traditionell denken wir dabei an Menschen mit Behinderungen, aber die Praxis, Websites barrierefrei zu gestalten, kommt auch anderen Gruppen zugute, wie beispielsweise Nutzern mobiler Geräte oder Personen mit langsamen Netzwerkverbindungen.

Sie könnten Barrierefreiheit auch als Gleichbehandlung aller betrachten und ihnen gleiche Chancen bieten, unabhängig von ihren Fähigkeiten oder Umständen. So wie es falsch ist, jemanden wegen eines Rollstuhls von einem Gebäude auszuschließen (moderne öffentliche Gebäude haben in der Regel Rollstuhlrampen oder Aufzüge), ebenso falsch ist es, jemanden wegen einer Sehbehinderung von einer Website auszuschließen. Wir sind alle unterschiedlich, aber wir sind alle Menschen und haben daher die gleichen Menschenrechte.

Barrierefreiheit ist die richtige Sache zu tun. Die Bereitstellung barrierefreier Websites ist in einigen Ländern Teil des Gesetzes, was bedeutende Märkte eröffnen kann, die ansonsten Ihre Dienste nicht nutzen oder Ihre Produkte nicht kaufen könnten.

Barrierefreie Websites profitieren alle:

- Semantisches HTML, das die Barrierefreiheit verbessert, verbessert auch die SEO und macht Ihre Website besser auffindbar.
- Das Kümmern um Barrierefreiheit zeigt gute Ethik und Moral, was Ihr öffentliches Ansehen verbessert.
- Andere gute Praktiken, die die Barrierefreiheit verbessern, machen Ihre Website auch für andere Gruppen benutzbarer, z. B. für Benutzer von Mobiltelefonen oder bei niedriger Netzwerkgeschwindigkeit. Tatsächlich können alle von vielen solcher Verbesserungen profitieren.
- Haben wir erwähnt, dass es an einigen Orten auch das Gesetz ist?

## Welche Arten von Behinderungen betrachten wir?

Menschen mit Behinderungen sind genauso vielfältig wie Menschen ohne Behinderungen, und ebenso vielfältig sind ihre Behinderungen. Die wichtigste Lektion hier ist, über den eigenen Computer und die eigene Nutzung des Internets hinauszudenken und zu lernen, wie andere es nutzen — _Sie sind nicht Ihre Benutzer_. Die wichtigsten Arten von Behinderungen, die berücksichtigt werden sollten, werden im Folgenden erklärt, zusammen mit den speziellen Werkzeugen, die sie zur Nutzung von Webinhalten verwenden (bekannt als **assistive Technologien** oder **ATs**).

> [!NOTE]
> Die Weltgesundheitsorganisation sagt im [Informationsblatt zu Behinderung und Gesundheit](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health), dass "über eine Milliarde Menschen, etwa 15% der Weltbevölkerung, irgendeine Form von Behinderung haben", und "zwischen 110 Millionen und 190 Millionen Erwachsene erhebliche Funktionsschwierigkeiten haben."

### Menschen mit Sehbehinderungen

Menschen mit Sehbehinderungen umfassen Menschen mit Blindheit, Sehschwäche und Farbenblindheit. Viele dieser Menschen nutzen Bildschirmlupen, die entweder physische Vergrößerungsgläser oder Software-Zoom-Funktionen sind. Die meisten Browser und Betriebssysteme verfügen heutzutage über Zoom-Funktionen. Einige Benutzer sind auf Screenreader angewiesen, Software, die digitalen Text laut vorliest. Einige Beispiele für Screenreader sind:

- Kostenpflichtige kommerzielle Produkte wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows) und [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows).
- Kostenlose Produkte wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- In das Betriebssystem integrierte Software wie [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf ChromeOS) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Es ist eine gute Idee, sich mit Screenreadern vertraut zu machen; Sie sollten auch einen Screenreader einrichten und ihn ausprobieren, um ein Gefühl dafür zu bekommen, wie er funktioniert. In unserem [Leitfaden zur Cross-Browser-Testing von Screenreadern](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers) finden Sie weitere Details zur Nutzung. Das untenstehende Video gibt ebenfalls ein kurzes Beispiel, wie das Erlebnis sein kann.

{{EmbedYouTube("IK97XMibEws")}}

In Bezug auf Statistiken schätzt die Weltgesundheitsorganisation, dass "weltweit schätzungsweise 285 Millionen Menschen sehbehindert sind: 39 Millionen sind blind und 246 Millionen haben eine Sehschwäche." (siehe [Sehbehinderung und Blindheit](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)). Das ist eine große und bedeutende Benutzergruppe, die Sie einfach verpassen könnten, weil Ihre Website nicht richtig codiert ist – fast so groß wie die Bevölkerung der Vereinigten Staaten von Amerika.

### Menschen mit Hörbehinderungen

[Menschen, die gehörlos oder schwerhörig (DHH)](https://www.nad.org/resources/american-sign-language/community-and-culture-frequently-asked-questions/) sind, weisen verschiedene Grade von Hörverlust auf, die von leicht bis schwerwiegend reichen. Obwohl einige AT verwenden (siehe [Hilfsgeräte für Menschen mit Hör-, Stimm-, Sprach- oder Sprachstörungen](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), sind diese nicht weit verbreitet.

Um Zugang zu ermöglichen, müssen textliche Alternativen bereitgestellt werden. Videos sollten manuell untertitelt und Transkripte für Audioinhalte bereitgestellt werden. Außerdem sollte aufgrund des hohen Maßes an [Sprachdeprivation](https://epicspecialeducationstaffing.com/language-deprivation/#:~:text=Language%20deprivation%20is%20the%20term,therefore%20not%20exposed%20to%20language.) in der DHH-Bevölkerung [Textvereinfachung in Betracht gezogen werden](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/).

Gehörlose und schwerhörige Menschen stellen ebenfalls eine bedeutende Benutzerbasis dar – laut dem Informationsblatt zur [Taubheit und Hörverlust](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss) der Weltgesundheitsorganisation haben "466 Millionen Menschen weltweit einen beeinträchtigenden Hörverlust".

### Menschen mit Mobilitätseinschränkungen

Diese Menschen haben Behinderungen, die die Bewegung betreffen, was rein physische Probleme (wie Verlust von Gliedmaßen oder Lähmung) oder neurologische/genetische Störungen, die zu Schwäche oder Kontrollverlust in Gliedmaßen führen, umfassen könnte. Einige Menschen haben möglicherweise Schwierigkeiten, die exakten Handbewegungen zu machen, die erforderlich sind, um eine Maus zu verwenden, während andere schwerer betroffen sein könnten und möglicherweise einen [Kopfzeiger](https://www.performancehealth.com/adjustable-headpointer) benötigen, um mit Computern zu interagieren.

Diese Art von Behinderung kann auch durch das Alter verursacht werden, anstatt durch ein bestimmtes Trauma oder eine Bedingung, und könnte auch durch Hardwarebeschränkungen verursacht werden – einige Benutzer haben möglicherweise keine Maus.

Der Einfluss auf die Webentwicklung ergibt sich meist in der Notwendigkeit, dass Steuerungen über die Tastatur zugänglich sind – wir werden die Tastaturzugänglichkeit in späteren Artikeln des Moduls erörtern, aber es ist eine gute Idee, einige Websites nur mit der Tastatur auszuprobieren, um zu sehen, wie Sie klarkommen. Können Sie beispielsweise mit der Tabulatortaste zwischen den verschiedenen Steuerungen eines Webformulars wechseln? Weitere Details zu Tastatursteuerungen finden Sie in unserem Abschnitt [Cross-Browser-Testing Verwendung der nativen Tastaturzugänglichkeit](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#using_native_keyboard_accessibility).

In Bezug auf Statistiken weisen eine signifikante Anzahl von Menschen Mobilitätseinschränkungen auf. Die US-Zentren für Krankheitskontrolle und Prävention [Behinderung und Funktion (18-jährige und ältere Erwachsene ohne institutionelle Betreuung)](https://www.cdc.gov/nchs/fastats/disability.htm) berichten, dass "16,1% der Erwachsenen mit einer körperlichen Funktionseinschränkung" in den USA betroffen sind.

### Menschen mit kognitiven Beeinträchtigungen

Kognitive Beeinträchtigung bezieht sich auf ein breites Spektrum von Behinderungen, von Menschen mit geistigen Behinderungen, die über die am meisten eingeschränkten Fähigkeiten verfügen, bis hin zu uns allen, wenn wir älter werden und Schwierigkeiten mit dem Denken und Erinnern haben. Das Spektrum umfasst Menschen mit psychischen Erkrankungen wie [Depressionen](https://www.nimh.nih.gov/health/topics/depression) und [Schizophrenie](https://www.nimh.nih.gov/health/topics/schizophrenia). Es umfasst auch Menschen mit Lernbehinderungen wie [Legasthenie](https://www.ninds.nih.gov/health-information/disorders/learning-disabilities) und [Aufmerksamkeitsdefizit-Hyperaktivitäts-Störung](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd). Wichtig ist, dass es innerhalb der klinischen Definitionen kognitiver Beeinträchtigungen viel Vielfalt gibt, aber Menschen mit ihnen erleben eine gemeinsame Reihe funktionaler Probleme. Dazu gehören Schwierigkeiten beim Verständnis von Inhalten, das Erinnern, wie Aufgaben zu erledigen sind, und Verwirrung, die durch inkonsistente Webseitenlayouts verursacht wird.

Eine gute Grundlage für Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Bereitstellung von Inhalten auf mehr als eine Art, beispielsweise durch Text-to-Speech oder Videos.
- Leicht verständliche Inhalte, wie Text, der nach Standards für einfache Sprache geschrieben wurde.
- Fokussierung der Aufmerksamkeit auf wichtige Inhalte.
- Minimierung von Ablenkungen, wie unnötige Inhalte oder Werbung.
- Konsistentes Webseitenlayout und Navigation.
- Vertraute Elemente, wie unterstrichene Links in Blau bei nicht besucht und Lila bei besucht.
- Aufteilung von Prozessen in logische, wesentliche Schritte mit Fortschrittsanzeigen.
- Authentifizierung auf der Website so einfach wie möglich gestalten, ohne die Sicherheit zu beeinträchtigen.
- Formulare einfach ausfüllen können, beispielsweise mit klaren Fehlermeldungen und einfacher Fehlerbehebung.

### Hinweise

- Das Designen mit [kognitiver Barrierefreiheit](/de/docs/Web/Accessibility/Cognitive_accessibility) führt zu guten Designpraktiken. Diese werden allen zugutekommen.
- Viele Menschen mit kognitiven Einschränkungen haben auch körperliche Behinderungen. Websites müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) des W3C und den [kognitiven Barrierefreiheitsrichtlinien](/de/docs/Web/Accessibility/Cognitive_accessibility#wcag_guidelines) entsprechen.
- Die [Task-Force für kognitive und Lernbehinderungen](https://www.w3.org/WAI/GL/task-forces/coga/) des W3C entwickelt Web-Barrierefreiheitsrichtlinien für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Seite zu kognitiven Themen](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die Zentren für Krankheitskontrolle in den USA schätzen, dass im Jahr 2018 1 von 4 US-Bürgern eine Behinderung hat und bei ihnen [kognitive Beeinträchtigung die häufigste bei jungen Menschen ist](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurde früher der Begriff "mentale Retardierung" verwendet, um einige geistige Behinderungen zu beschreiben. Viele betrachten diesen Begriff nun als abwertend, daher sollte seine Verwendung vermieden werden.
- In Großbritannien werden einige geistige Behinderungen als "Lernbehinderungen" oder "Lernschwierigkeiten" bezeichnet.

## Implementierung von Barrierefreiheit in Ihr Projekt

Ein häufiges Missverständnis zur Barrierefreiheit ist, dass Barrierefreiheit eine teure "zusätzliche" Umsetzung in einem Projekt ist. Dieses Missverständnis kann tatsächlich _wahr_ sein, wenn entweder:

- Sie versuchen, Barrierefreiheit auf eine vorhandene Website anzuwenden, die erhebliche Barrierefreiheitsprobleme aufweist.
- Sie erst spät in einem Projekt beginnen, sich mit Barrierefreiheit zu befassen und damit verbundene Probleme aufdecken.

Wenn Sie jedoch Barrierefreiheit von Anfang an in einem Projekt berücksichtigen, sollten die Kosten für die Erstellung der meisten barrierefreien Inhalte ziemlich minimal sein.

Planen Sie Ihr Projekt, indem Sie Barrierefreiheitsprüfungen in Ihr Testregime einbeziehen, so wie Sie für jedes andere wichtige Zielpublikum (z. B. Ziel-Desktop- oder Mobil-Browser) testen würden. Testen Sie früh und oft, idealerweise mit automatisierten Tests, um programmgesteuert erkennbare fehlende Funktionen (wie fehlenden Bildalternativtext oder schlechten Linktext — siehe [Elementbeziehungen und Kontext](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#element_relationships_and_context)) zu erkennen, und führen Sie einige Tests mit behinderten Benutzergruppen durch, um zu sehen, wie gut komplexere Website-Funktionen für sie funktionieren. Zum Beispiel:

- Ist mein Kalender-Widget für Personen, die Screenreader verwenden, nutzbar?
- Wenn sich Inhalte dynamisch aktualisieren, wissen sehbehinderte Personen davon?
- Sind meine UI-Buttons sowohl für Tastatur- als auch für Touch-Benutzer zugänglich?

Sie können und sollten sich potenzielle Problemzonen in Ihren Inhalten notieren, die Arbeit erfordern, um sie zugänglich zu machen, sicherstellen, dass sie gründlich getestet werden, und über Lösungen/Alternativen nachdenken. Textinhalte (wie Sie im nächsten Artikel sehen werden) sind einfach, aber was ist mit Ihren Multimedia-Inhalten und Ihren ausgefallenen 3D-Grafiken? Sie sollten Ihr Projektbudget betrachten und überlegen, welche Lösungen Sie zur Verfügung haben, um solche Inhalte zugänglich zu machen. Die Transkription aller Multimedia-Inhalte ist eine Option, die zwar teuer, aber machbar ist.

Seien Sie auch realistisch. "100% Barrierefreiheit" ist ein unerreichbares Ideal — es wird immer einen Randfall geben, bei dem ein bestimmter Benutzer bestimmte Inhalte nur schwer nutzen kann — aber Sie sollten so viel wie möglich tun. Wenn Sie planen, ein ausgefallenes 3D-Tortendiagramm mit WebGL zu erstellen, möchten Sie vielleicht eine Datentabelle als zugängliche alternative Darstellung der Daten einfügen. Oder Sie möchten vielleicht das Diagramm entfernen und einfach die Tabelle verwenden — die Tabelle ist für alle zugänglich, schneller zu codieren, weniger CPU-intensiv und einfacher zu warten.

Auf der anderen Seite ist es bei einer Galerie-Website, die interessante 3D-Kunstwerke zeigt, unzumutbar zu erwarten, dass jedes Kunstwerk perfekt für sehbehinderte Personen zugänglich ist, da es sich um ein rein visuelles Medium handelt.

Um zu zeigen, dass Sie sich kümmern und über Barrierefreiheit nachgedacht haben, veröffentlichen Sie eine Barriereerklärung auf Ihrer Website, die beschreibt, welche Schritte Sie unternommen haben, um die Seite zugänglich zu machen. Wenn jemand Sie darauf hinweist, dass Ihre Seite ein Barrierefreiheitsproblem hat, beginnen Sie einen Dialog mit ihm, seien Sie empathisch und versuchen Sie, das Problem angemessen zu beheben.

> [!NOTE]
> Unser Artikel [Umgang mit häufigen Barrierefreiheitsproblemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility) behandelt die Details, die getestet werden sollten, ausführlicher.

Zusammengefasst:

- Betrachten Sie Barrierefreiheit von Beginn eines Projekts an und testen Sie früh und oft. Wie jedes andere Problem wird ein Barrierefreiheitsproblem teurer zu beheben, je später es entdeckt wird.
- Bedenken Sie, dass viele Barrierefreiheitspraktiken allen zugutekommen, nicht nur Benutzern mit Behinderungen. Beispielsweise ist schlankes semantisches Markup nicht nur gut für Screenreader, sondern auch schnell zu laden und performant. Dies kommt allen zugute, vor allem denen mit mobilen Geräten und/oder langsamen Verbindungen.
- Veröffentlichen Sie eine Barriereerklärung auf Ihrer Website und treten Sie in Kontakt mit Menschen, die Probleme haben.

## Barrierefreiheits-Richtlinien und das Gesetz

Es gibt zahlreiche Checklisten und Richtlinien, die als Grundlage für Barrierefreiheitsprüfungen verwendet werden können und auf den ersten Blick überwältigend erscheinen mögen. Unser Rat ist, sich mit den grundlegenden Bereichen, in denen Sie aufpassen müssen, vertraut zu machen, sowie die grundlegende Struktur der für Sie am relevantesten Richtlinien zu verstehen.

- Zunächst hat das W3C ein großes und sehr detailliertes Dokument veröffentlicht, das sehr präzise und technologieunabhängige Kriterien für die Barrierefreiheitskonformität enthält. Diese heißen die [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG), und sie sind bei weitem keine leichte Lektüre. Die Kriterien sind in vier Hauptkategorien unterteilt, die angeben, wie Implementierungen wahrnehmbar, bedienbar, verständlich und robust gemacht werden können. Der beste Ort, um eine leichte Einführung zu erhalten und mit dem Lernen zu beginnen, ist [WCAG im Überblick](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). Es ist nicht notwendig, alle WCAG-Kriterien zu lernen – seien Sie sich der wichtigsten Bereiche bewusst und verwenden Sie verschiedene Techniken und Tools, um Bereiche hervorzuheben, die nicht den WCAG-Kriterien entsprechen (siehe unten für mehr).
- Ihr Land könnte auch spezifische Gesetze haben, die die Notwendigkeit regeln, dass Websites, die ihre Bevölkerung bedienen, barrierefrei sein müssen – beispielsweise [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) in der EU, [Section 508 des Rehabilitation Act](https://www.section508.gov/training/) in den USA, [Bundesverordnung über barrierefreie Informationstechnik](https://www.aktion-mensch.de/inklusion/barrierefreiheit/barrierefreie-website) in Deutschland, die [Barrierefreiheitsvorschriften 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) im Vereinigten Königreich, [Accessibilità](https://www.agid.gov.it/it/ambiti-intervento/accessibilita-usabilita) in Italien, das [Disability Discrimination Act](https://humanrights.gov.au/our-work/disability-rights/world-wide-web-access-disability-discrimination-act-advisory-notes-ver) in Australien, etc. Das W3C führt eine Liste von [Web Accessibility Laws & Policies](https://www.w3.org/WAI/policies/) nach Ländern.

Während die WCAG also ein Satz von Richtlinien ist, wird Ihr Land wahrscheinlich Gesetze hinsichtlich Web-Barrierefreiheit haben, oder zumindest hinsichtlich der Barrierefreiheit öffentlicher Dienstleistungen (die Websites, Fernsehen, physische Räume usw. einschließen könnten). Es ist eine gute Idee, herauszufinden, was Ihre Gesetze sind. Wenn Sie sich nicht darum bemühen, zu überprüfen, ob Ihre Inhalte barrierefrei sind, könnten Sie rechtlich haftbar sein, wenn Personen sich beschweren.

Das klingt ernst, aber Sie müssen Barrierefreiheit wirklich nur als Hauptpriorität Ihrer Webentwicklungspraktiken betrachten, wie oben beschrieben. Im Zweifelsfall holen Sie sich Rat bei einem qualifizierten Anwalt ein. Wir werden keine weiteren Ratschläge geben, weil wir keine Juristen sind.

## Barrierefreiheits-APIs

Webbrowser nutzen spezielle **Barrierefreiheits-APIs** (bereitgestellt durch das zugrunde liegende Betriebssystem), die Informationen bereitstellen, die für assistive Technologien (ATs) nützlich sind – ATs neigen dazu, hauptsächlich semantische Informationen zu verwenden, sodass diese Informationen nicht Dinge wie Styling-Informationen oder JavaScript enthalten. Diese Informationen sind in einem Informationsbaum strukturiert, der **Barrierefreiheitsbaum** genannt wird.

Verschiedene Betriebssysteme bieten unterschiedliche Barrierefreiheits-APIs an:

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- macOS: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility framework
- iOS: UIAccessibility

Wo die semantischen Informationen, die durch die HTML-Elemente in Ihren Webanwendungen bereitgestellt werden, unzureichend sind, können Sie sie mit Funktionen aus der [WAI-ARIA-Spezifikation](https://www.w3.org/TR/wai-aria/) ergänzen, die semantische Informationen zum Barrierefreiheitsbaum hinzufügen, um die Barrierefreiheit zu verbessern. Sie können viel mehr über WAI-ARIA in unserem Artikel [WAI-ARIA Grundlagen](/de/docs/Learn/Accessibility/WAI-ARIA_basics) lernen.

## Zusammenfassung

Dieser Artikel sollte Ihnen einen nützlichen Überblick über die Barrierefreiheit gegeben haben, Ihnen gezeigt haben, warum sie wichtig ist, und erklärt haben, wie Sie sie in Ihren Workflow integrieren können. Sie sollten nun auch den Wunsch haben, mehr über die Implementierungsdetails zu erfahren, die Websites zugänglich machen können, und wir beginnen damit im nächsten Abschnitt, in dem wir uns ansehen, warum HTML eine gute Grundlage für Barrierefreiheit darstellt.

{{NextMenu("Learn/Accessibility/HTML", "Learn/Accessibility")}}

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG)

  - [Wahrnehmbar](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
  - [Bedienbar](/de/docs/Web/Accessibility/Understanding_WCAG/Operable)
  - [Verstehbar](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable)
  - [Robust](/de/docs/Web/Accessibility/Understanding_WCAG/Robust)

- [Google Chrome hat eine automatische Untertitel-Erweiterung veröffentlicht](https://blog.google/products/chrome/live-caption-chrome/)
