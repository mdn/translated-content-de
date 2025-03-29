---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Core/Accessibility/What_is_accessibility
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}

Dieser Artikel beginnt das Modul mit einem detaillierten Blick darauf, was Barrierefreiheit ist — dieser Überblick umfasst, welche Menschengruppen wir berücksichtigen müssen und warum, welche Tools unterschiedliche Menschen nutzen, um mit dem Web zu interagieren, und wie wir Barrierefreiheit zu einem Teil unseres Webentwicklungsprozesses machen können.

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
          <li>Der Zweck der Barrierefreiheit — erhöhter Zugang zu digitalen Diensten für Menschen mit zusätzlichen Bedürfnissen, verbesserte Benutzerfreundlichkeit für alle, besseres SEO und ein breiteres Zielpublikum.</li>
          <li>Bewusstsein für die gesetzlichen Anforderungen der Barrierefreiheit.</li>
          <li>Dass Barrierefreiheit von Beginn eines Projekts an berücksichtigt werden sollte und nicht nachträglich hinzugefügt werden sollte.</li>
          <li>Vertrautheit mit den Konformitätskriterien der Web Content Accessibility Guidelines (WCAG).</li>
          <li>Bewusstsein für Barrierefreiheits-APIs und deren Zweck.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist also Barrierefreiheit?

Barrierefreiheit ist die Praxis, Ihre Websites so nutzbar wie möglich für so viele Menschen wie möglich zu machen. Traditionell denken wir dabei an Menschen mit Behinderungen, aber die Praxis, Websites zugänglich zu machen, kommt auch anderen Gruppen zugute, wie z. B. denjenigen, die mobile Geräte verwenden, oder solchen mit langsamen Netzwerkverbindungen.

Man könnte Barrierefreiheit auch als gleichberechtigte Behandlung aller betrachten und ihnen gleiche Chancen bieten, unabhängig von ihrer Fähigkeit oder ihren Umständen. Ebenso wie es falsch ist, jemanden aufgrund einer Gehbehinderung von einem physischen Gebäude auszuschließen (moderne öffentliche Gebäude haben in der Regel Rollstuhlrampen oder Aufzüge), ist es auch nicht richtig, jemanden von einer Website auszuschließen, weil er eine Sehbehinderung hat. Wir sind alle unterschiedlich, aber wir sind alle Menschen und haben daher die gleichen Menschenrechte.

Barrierefreiheit ist das Richtige. In einigen Ländern ist es gesetzlich vorgeschrieben, dass Websites zugänglich sind, was einige bedeutende Märkte eröffnen kann, die andernfalls möglicherweise nicht in der Lage wären, Ihre Dienstleistungen zu nutzen oder Ihre Produkte zu kaufen.

Barrierefreie Websites kommen jedem zugute:

- Semantisches HTML, das die Barrierefreiheit verbessert, verbessert auch das SEO und macht Ihre Website leichter auffindbar.
- Sich um Barrierefreiheit zu kümmern, zeigt gute Ethik und Moral, was Ihr öffentliches Image verbessert.
- Andere gute Praktiken, die die Barrierefreiheit verbessern, machen Ihre Website auch für andere Gruppen nutzbarer, z. B. für Mobiltelefonbenutzer oder solche mit niedriger Netzwerkgeschwindigkeit. Tatsächlich kann jeder von vielen solchen Verbesserungen profitieren.
- Haben wir erwähnt, dass es in einigen Regionen auch gesetzlich vorgeschrieben ist?

## Welche Arten von Behinderungen betrachten wir?

Menschen mit Behinderungen sind ebenso vielfältig wie Menschen ohne Behinderungen, und so sind auch ihre Behinderungen. Die wichtigste Lektion hier ist, über Ihren eigenen Computer und wie Sie das Web nutzen hinauszudenken und damit zu beginnen, zu lernen, wie andere es nutzen — _Sie sind nicht Ihre Nutzer_. Die Hauptarten von Behinderungen, die zu berücksichtigen sind, werden unten erklärt, zusammen mit speziellen Tools, die sie verwenden, um auf Webinhalte zuzugreifen (bekannt als **assistive technologies**, oder **ATs**).

> [!NOTE]
> Das Datenblatt der Weltgesundheitsorganisation [Behinderung und Gesundheit](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health) gibt an, dass "über eine Milliarde Menschen, etwa 15 % der Weltbevölkerung, irgendeine Form von Behinderung haben", und "zwischen 110 und 190 Millionen Erwachsene haben erhebliche Schwierigkeiten bei der Funktionsfähigkeit."

### Menschen mit Sehbehinderungen

Menschen mit Sehbehinderungen umfassen blinde Menschen, Menschen mit geringer Sehschärfe und Menschen mit Farbenblindheit. Viele Menschen mit Sehbehinderungen verwenden Bildschirmlupen, die entweder physische Lupen oder Software-Zoom-Funktionen sind. Die meisten Browser und Betriebssysteme bieten heutzutage Zoom-Funktionen. Einige Benutzer verlassen sich auf Screenreader, das sind Softwareprogramme, die digitalen Text laut vorlesen. Einige Screenreader-Beispiele sind:

- Kostenpflichtige kommerzielle Produkte wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows) und [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows).
- Kostenlose Produkte wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- In das Betriebssystem integrierte Software wie [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf ChromeOS) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Es ist eine gute Idee, sich mit Screenreadern vertraut zu machen; Sie sollten auch einen Screenreader installieren und damit experimentieren, um eine Vorstellung davon zu bekommen, wie er funktioniert. Weitere Informationen zur Verwendung finden Sie in unseren [Screenreader-Tutorials](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers). Das untenstehende Video bietet auch ein kurzes Beispiel dafür, wie das Erlebnis ist.

{{EmbedYouTube("IK97XMibEws")}}

In Bezug auf Statistiken schätzt die Weltgesundheitsorganisation, dass "weltweit 285 Millionen Menschen als sehbehindert gelten: 39 Millionen sind blind und 246 Millionen haben eine schwache Sehkraft." (siehe [Sehbehinderung und Blindheit](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)). Das ist eine große und bedeutende Benutzergruppe, die man einfach verpassen könnte, weil Ihre Website nicht richtig codiert ist — fast so groß wie die Bevölkerung der Vereinigten Staaten von Amerika.

### Menschen mit Hörbehinderungen

[Taube und schwerhörige Menschen (DHH)](https://www.nad.org/resources/american-sign-language/community-and-culture-frequently-asked-questions/) haben unterschiedliche Grade von Hörverlust, von leicht bis schwer. Obwohl einige ATs verwenden (siehe [Hilfsgeräte für Menschen mit Hör-, Stimm-, Sprech- oder Sprachstörungen](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), sind sie nicht weit verbreitet.

Um Zugang zu gewähren, müssen textuelle Alternativen bereitgestellt werden. Videos sollten manuell untertitelt werden, und für Audioinhalte sollten Transkripte bereitgestellt werden. Darüber hinaus sollte aufgrund der hohen [Sprachdeprivation](https://epicspecialeducationstaffing.com/language-deprivation/#:~:text=Language%20deprivation%20is%20the%20term,therefore%20not%20exposed%20to%20language.) in DHH-Populationen [Textvereinfachung in Betracht gezogen werden](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/).

Taube und schwerhörige Menschen stellen ebenfalls eine bedeutende Benutzerbasis dar — "weltweit haben 466 Millionen Menschen eine behindernde Hörbehinderung", sagt das Informationsblatt der Weltgesundheitsorganisation [Taubheit und Hörverlust](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss).

### Menschen mit Mobilitätsbehinderungen

Diese Menschen haben Behinderungen, die die Bewegung betreffen, was rein physische Probleme (wie den Verlust einer Gliedmaße oder Lähmung) oder neurologische/genetische Störungen beinhalten könnte, die zu Schwäche oder Kontrollverlust in den Gliedmaßen führen. Einige Menschen könnten Schwierigkeiten haben, die genauen Handbewegungen auszuführen, die erforderlich sind, um eine Maus zu verwenden, während andere möglicherweise schwerer betroffen sind, vielleicht so schwer gelähmt, dass sie einen [Kopfzeiger](https://www.performancehealth.com/adjustable-headpointer) verwenden müssen, um mit Computern zu interagieren.

Diese Art von Behinderung kann auch das Ergebnis von Alter sein, anstatt eines spezifischen Traumas oder einer Erkrankung, und es könnte auch auf Hardwarebeschränkungen zurückzuführen sein — einige Benutzer haben möglicherweise keine Maus.

Die Art und Weise, wie sich dies auf die Webentwicklung auswirkt, ist die Anforderung, dass die Steuerungen über die Tastatur zugänglich sind — wir werden die Tastaturzugänglichkeit in späteren Artikeln des Moduls behandeln, aber es ist eine gute Idee, einige Websites nur mit der Tastatur auszuprobieren, um zu sehen, wie Sie zurechtkommen. Können Sie die Tabulatortaste verwenden, um zwischen den verschiedenen Steuerungen eines Webformulars zu wechseln? Weitere Details zu Tastatursteuerungen finden Sie in unserem [UI-Kontrollen](/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls) Abschnitt.

In Bezug auf Statistiken haben eine erhebliche Anzahl von Menschen Mobilitätsbehinderungen. Das US Center for Disease Control and Prevention [Behinderung und Funktion (Nichthospitalisierte Erwachsene über 18 Jahre)](https://www.cdc.gov/nchs/fastats/disability.htm) berichtet, dass in den USA "Prozent der Erwachsenen mit jedweder körperlichen Funktionsstörung: 16,1 %" betroffen sind.

### Menschen mit kognitiven Beeinträchtigungen

Kognitive Beeinträchtigung bezieht sich auf eine breite Palette von Behinderungen, von Menschen mit intellektuellen Behinderungen, die über die am meisten eingeschränkten Fähigkeiten verfügen, bis zu uns allen, wenn wir älter werden und Schwierigkeiten haben zu denken und uns zu erinnern. Die Bandbreite umfasst Menschen mit psychischen Erkrankungen, wie [Depression](https://www.nimh.nih.gov/health/topics/depression) und [Schizophrenie](https://www.nimh.nih.gov/health/topics/schizophrenia). Sie umfasst auch Menschen mit Lernbehinderungen, wie [Dyslexie](https://www.nichd.nih.gov/health/topics/learningdisabilities) und [Aufmerksamkeitsdefizit-Hyperaktivitätsstörung](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd). Wichtig ist, dass es innerhalb der klinischen Definitionen von kognitiven Beeinträchtigungen eine große Vielfalt gibt, Menschen mit ihnen jedoch eine gemeinsame Reihe von funktionalen Problemen erleben. Dazu gehören Schwierigkeiten beim Verständnis von Inhalten, das Erinnern von Aufgaben, die verwirrend durch unbeständige Webseitenlayouts verursacht werden.

Eine gute Grundlage für Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Bereitstellung von Inhalten auf mehr als eine Weise, z. B. durch Text-zu-Sprache oder per Video.
- Leicht verständliche Inhalte, wie Text, der mit einfachen Sprachstandards geschrieben ist.
- Konzentration auf wichtige Inhalte.
- Minimierung von Ablenkungen, wie unnötige Inhalte oder Werbung.
- Konsistentes Webseitenlayout und Navigation.
- Vertraute Elemente, wie unterstrichene Links, die blau sind, wenn nicht besucht und lila, wenn besucht.
- Aufteilung von Prozessen in logische, wesentliche Schritte mit Fortschrittsanzeigen.
- Website-Authentifizierung so einfach wie möglich ohne Kompromisse bei der Sicherheit.
- Formulare einfach auszufüllen machen, z. B. mit klaren Fehlermeldungen und einfacher Fehlerbehebung.

### Hinweise

- Das Gestalten mit [kognitiver Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility) führt zu guten Designpraktiken. Sie kommen jedem zugute.
- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Behinderungen. Websites müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) der W3C entsprechen, einschließlich der [kognitiven Barrierefreiheitsrichtlinien](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility#wcag_guidelines).
- Die W3C [Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/) erstellt Web-Barrierefreiheitsrichtlinien für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die US-amerikanischen Centers for Disease Control schätzen, dass 2018 1 von 4 US-Bürgern eine Behinderung hatte, und von diesen ist [kognitive Beeinträchtigung die häufigste bei jungen Menschen](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden einige intellektuelle Beeinträchtigungen historisch als "geistige Zurückgebliebenheit" bezeichnet. Viele betrachten diesen Begriff jetzt als abwertend, daher sollte seine Verwendung vermieden werden.
- In Großbritannien werden einige intellektuelle Beeinträchtigungen als "Lernbehinderungen" oder "Lernschwierigkeiten" bezeichnet.

## Umsetzung der Barrierefreiheit in Ihr Projekt

Ein häufiger Mythos über Barrierefreiheit ist, dass diese ein teures "zusätzliches Extra" ist, das in ein Projekt implementiert werden muss. Dieser Mythos kann tatsächlich _wahr_ sein, wenn entweder:

- Sie versuchen, einem bestehenden Website, die erhebliche Barrierefreiheitsprobleme hat, nachträglich Barrierefreiheit hinzuzufügen.
- Sie die Barrierefreiheit erst gegen Ende eines Projekts in Betracht ziehen und damit verbundene Probleme feststellen.

Wenn Sie jedoch Barrierefreiheit von Beginn eines Projekts an berücksichtigen, sollten die Kosten für die Bereitstellung von barrierefreien Inhalten relativ gering sein.

Berücksichtigen Sie bei der Planung Ihres Projekts Barrierefreiheitstests in Ihrem Testregime, ebenso wie das Testen für andere wichtige Zielgruppen (z. B. Ziel-Desktop- oder Mobilbrowser). Testen Sie früh und oft, idealerweise mit automatisierten Tests, um programmatisch erkennbare fehlende Funktionen zu identifizieren (wie fehlender Alternativtext für Bilder oder schlechte Linktexte — siehe [Bedeutungsvolle Textetiketten](/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels)) und machen Sie einige Tests mit Behindertengruppen, um zu sehen, wie gut komplexere Website-Funktionen für sie funktionieren. Zum Beispiel:

- Ist mein Datumsfeld-Widget von Personen mit Screenreadern nutzbar?
- Werden sehbehinderte Menschen über dynamische Inhaltsaktualisierungen informiert?
- Sind meine UI-Schaltflächen für Tastatur- und Touch-Oberflächenbenutzer zugänglich?

Sie können und sollten mögliche Problembereiche in Ihren Inhalten notieren, die überarbeitet werden müssen, um sie zugänglich zu machen, sicherstellen, dass sie gründlich getestet werden, und über Lösungen/Alternativen nachdenken. Textinhalte (wie Sie im nächsten Artikel sehen werden) sind einfach, aber was ist mit Ihren Multimedia-Inhalten und Ihren beeindruckenden 3D-Grafiken? Sie sollten sich Ihr Projektbudget ansehen und überlegen, welche Lösungen Sie zur Verfügung haben, um solche Inhalte zugänglich zu machen. Eine Option besteht darin, alle Ihre multimedialen Inhalte zu transkribieren, was, obwohl es teuer ist, möglich ist.

Seien Sie außerdem realistisch. "100 % Barrierefreiheit" ist ein unerreichbares Ideal — es wird immer irgendeinen Randfall geben, der dazu führt, dass ein bestimmter Benutzer bestimmte Inhalte schwer nutzen kann — aber Sie sollten so viel wie möglich tun. Wenn Sie planen, ein beeindruckendes 3D-Kuchendiagramm-Grafik mit WebGL einzubinden, könnten Sie erwägen, eine Datentabelle als barrierefreie alternative Darstellung der Daten einzufügen. Oder Sie könnten die Tabelle einfach einfügen und das 3D-Kuchendiagramm entfernen — die Tabelle ist für alle zugänglich, schneller zu codieren, weniger CPU-intensiv und leichter zu warten.

Andererseits, wenn Sie an einer Galeriewebseite arbeiten, die interessante 3D-Kunst zeigt, wäre es unvernünftig zu erwarten, dass jedes Kunstwerk perfekt zugänglich für sehbehinderte Menschen ist, da es sich um ein rein visuelles Medium handelt.

Um zu zeigen, dass Sie Barrierefreiheit berücksichtigen und durchdacht haben, veröffentlichen Sie eine Barrierefreiheitserklärung auf Ihrer Website, die Ihre Politik zur Barrierefreiheit und die Schritte beschreibt, die Sie unternommen haben, um die Website zugänglich zu machen. Wenn Ihnen jemand mitteilt, dass Ihre Website ein Problem mit der Barrierefreiheit hat, beginnen Sie einen Dialog mit ihnen, seien Sie einfühlsam und ergreifen Sie angemessene Maßnahmen, um das Problem zu lösen.

Zusammengefasst:

- Berücksichtigen Sie Barrierefreiheit von Beginn eines Projekts an und testen Sie früh und oft. Genauso wie bei jedem anderen Fehler wird ein Problem mit der Barrierefreiheit teurer zu beheben, je später es entdeckt wird.
- Beachten Sie, dass viele Best Practices der Barrierefreiheit allen zugute kommen, nicht nur Nutzern mit Behinderungen. Zum Beispiel ist schlanker semantischer Code nicht nur für Screenreader gut, sondern lädt auch schnell und ist performant. Das kommt jedem zugute, insbesondere denen, die mobile Geräte verwenden oder eine langsame Verbindung haben.
- Veröffentlichen Sie eine Barrierefreiheitserklärung auf Ihrer Website und treten Sie in Kontakt mit Menschen, die Probleme haben.

## Barrierefreiheitsrichtlinien und das Gesetz

Es gibt zahlreiche Checklisten und Richtliniensets, die als Grundlage für Barrierefreiheitstests verfügbar sind, die auf den ersten Blick überwältigend erscheinen könnten. Unser Rat ist, sich mit den grundlegenden Bereichen vertraut zu machen, in denen Sie vorsichtig sein müssen, sowie die übergeordneten Strukturen der Richtlinien zu verstehen, die für Sie am relevantesten sind.

- Zunächst hat das W3C ein umfangreiches und sehr detailliertes Dokument veröffentlicht, das sehr präzise, technologie-unabhängige Kriterien für die Konformität zur Barrierefreiheit enthält. Diese werden die [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) genannt, und sie sind keineswegs eine kurze Lektüre. Die Kriterien sind in vier Hauptkategorien unterteilt, die spezifizieren, wie Implementierungen wahrnehmbar, bedienbar, verständlich und robust gemacht werden können. Der beste Ort, um einen leichten Einstieg zu finden und zu lernen, ist [WCAG auf einen Blick](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). Es ist nicht notwendig, alle WCAG-Kriterien zu lernen — seien Sie sich der Hauptanliegen bewusst und verwenden Sie verschiedene Techniken und Tools, um Bereiche hervorzuheben, die nicht den WCAG-Kriterien entsprechen (siehe unten für mehr).
- Ihr Land kann auch spezifische Gesetzgebung haben, die die Notwendigkeit regelt, dass Websites, die ihrer Bevölkerung dienen, zugänglich sind — zum Beispiel [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) in der EU, [Abschnitt 508 des Rehabilitationsgesetzes](https://www.section508.gov/training/) in den USA, [Barrierefreie Informationstechnologie-Verordnung](https://www.aktion-mensch.de/inklusion/barrierefreiheit/barrierefreie-website) in Deutschland, die [Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) im Vereinigten Königreich, [Accessibilità](https://www.agid.gov.it/it/ambiti-intervento/accessibilita-usabilita) in Italien, das [Disability Discrimination Act](https://humanrights.gov.au/our-work/disability-rights/world-wide-web-access-disability-discrimination-act-advisory-notes-ver) in Australien usw. Das W3C führt eine Liste von [Web Accessibility Laws & Policies](https://www.w3.org/WAI/policies/) nach Land.

Sowohl WCAG als auch nationale Gesetze, die wahrscheinlich die Zugänglichkeit von Webdiensten regeln, haben eine Rolle zu spielen, oder zumindest die Zugänglichkeit von Dienstleistungen zugänglich für die Öffentlichkeit (die Webseiten, Fernsehen, physische Räume usw. beinhalten könnten). Es ist ratsam herauszufinden, was Ihre Gesetze sind. Wenn Sie keine Anstrengungen unternehmen, um zu überprüfen, ob Ihre Inhalte zugänglich sind, könnten Sie rechtlich haftbar sein, wenn Menschen sich beschweren.

Dies klingt ernst, aber eigentlich müssen Sie nur die Barrierefreiheit als Hauptpriorität Ihrer Webentwicklungspraktiken betrachten, wie oben beschrieben. Wenn Sie Zweifel haben, holen Sie sich rechtlichen Rat von einem qualifizierten Anwalt. Wir werden hier nicht mehr Ratschläge anbieten, weil wir keine Juristen sind.

## Barrierefreiheits-APIs

Webbrowser nutzen spezielle **Barrierefreiheits-APIs** (bereitgestellt vom zugrunde liegenden Betriebssystem), die Informationen bereitstellen, die für assistive Technologien (ATs) nützlich sind — ATs neigen hauptsächlich dazu, semantische Informationen zu nutzen, sodass diese Informationen keine Stilinformationen oder JavaScript enthalten. Diese Informationen sind in einem Informationsbaum strukturiert, der als **Zugänglichkeitsbaum** bezeichnet wird.

Unterschiedliche Betriebssysteme bieten unterschiedliche Barrierefreiheits-APIs:

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- macOS: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility framework
- iOS: UIAccessibility

Wo die nativen semantischen Informationen, die von den HTML-Elementen in Ihren Webanwendungen bereitgestellt werden, nicht ausreichen, können Sie sie mit Funktionen aus der [WAI-ARIA-Spezifikation](https://www.w3.org/TR/wai-aria/) ergänzen, die semantische Informationen zum Barrierefreiheitsbaum hinzufügen, um die Barrierefreiheit zu verbessern. Sie können viel mehr über WAI-ARIA in unserem Artikel [WAI-ARIA Basics](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) erfahren.

## Zusammenfassung

Dieser Artikel sollte Ihnen einen nützlichen Überblick über Barrierefreiheit gegeben haben, Ihnen gezeigt haben, warum sie wichtig ist und wie Sie sie in Ihren Workflow integrieren können. Sie sollten jetzt auch das Bedürfnis haben, die Implementierungsdetails zu lernen, die Websites zugänglich machen können, und welche Tools dabei helfen. Wir werden im nächsten Artikel die Barrierefreiheits-Tools betrachten.

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  - [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  - [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  - [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  - [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

- [Google Chrome veröffentlichte eine Auto-Untertitelungs-Erweiterung](https://blog.google/products/chrome/live-caption-chrome/)

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}
