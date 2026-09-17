---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Core/Accessibility/What_is_accessibility
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}

Dieser Artikel beginnt das Modul mit einem guten Überblick darüber, was Barrierefreiheit ist. Er behandelt, welche Personengruppen wir berücksichtigen müssen und warum, welche Werkzeuge verschiedene Menschen verwenden, um mit dem Web zu interagieren, und wie wir Barrierefreiheit zu einem Teil unseres Webentwicklungs-Workflows machen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Der Zweck von Barrierefreiheit — verbesserter Zugang zu digitalen Diensten für Menschen mit zusätzlichen Bedürfnissen, bessere Benutzerfreundlichkeit für alle, bessere SEO und eine größere Zielgruppe.</li>
          <li>Bewusstsein für die rechtlichen Anforderungen an Barrierefreiheit.</li>
          <li>Dass Barrierefreiheit von Beginn eines Projekts an berücksichtigt und nicht erst am Ende hinzugefügt werden sollte.</li>
          <li>Vertrautheit mit den Konformitätskriterien der Web Content Accessibility Guidelines (WCAG).</li>
          <li>Bewusstsein für Accessibility APIs und ihren Zweck.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist also Barrierefreiheit?

Barrierefreiheit ist die Praxis, Ihre Websites für möglichst viele Menschen nutzbar zu machen. Traditionell denken wir dabei an Menschen mit Behinderungen, aber die Praxis, Websites barrierefrei zu gestalten, kommt auch anderen Gruppen zugute, etwa Personen, die Mobilgeräte verwenden oder über langsame Netzwerkverbindungen verfügen.

Sie können Barrierefreiheit auch als die Gleichbehandlung aller Menschen und die Gewährung gleicher Chancen verstehen, unabhängig von ihren Fähigkeiten oder Umständen. So wie es falsch ist, jemanden von einem physischen Gebäude auszuschließen, weil diese Person einen Rollstuhl benutzt (moderne öffentliche Gebäude verfügen in der Regel über Rollstuhlrampen oder Aufzüge), ist es auch nicht richtig, jemanden von einer Website auszuschließen, weil diese Person eine Sehbeeinträchtigung hat. Wir sind alle verschieden, aber wir sind alle Menschen und haben daher dieselben Menschenrechte.

Barrierefreiheit ist das Richtige. In einigen Ländern ist das Bereitstellen barrierefreier Websites gesetzlich vorgeschrieben. Dadurch können sich bedeutende Märkte erschließen, die Ihre Dienste sonst nicht nutzen oder Ihre Produkte nicht kaufen könnten.

Der Aufbau barrierefreier Websites kommt allen zugute:

- Semantisches HTML, das die Barrierefreiheit verbessert, verbessert auch die SEO und macht Ihre Website leichter auffindbar.
- Die Berücksichtigung von Barrierefreiheit zeigt gute ethische und moralische Grundsätze und verbessert Ihr öffentliches Image.
- Andere bewährte Praktiken, die die Barrierefreiheit verbessern, machen Ihre Website auch für andere Gruppen nutzbarer, etwa für Mobiltelefonnutzende oder Personen mit niedriger Netzwerkgeschwindigkeit. Tatsächlich können alle von vielen solchen Verbesserungen profitieren.
- Haben wir erwähnt, dass dies an manchen Orten auch gesetzlich vorgeschrieben ist?

## Welche Arten von Behinderungen betrachten wir?

Menschen mit Behinderungen sind genauso vielfältig wie Menschen ohne Behinderungen, und das gilt auch für ihre Behinderungen. Die wichtigste Lektion dabei ist, über Ihren eigenen Computer und Ihre eigene Nutzung des Webs hinauszudenken und zu lernen, wie andere es nutzen — _Sie sind nicht Ihre Nutzenden_. Die wichtigsten zu berücksichtigenden Arten von Behinderungen werden im Folgenden erläutert, zusammen mit möglichen speziellen Werkzeugen, die zum Zugriff auf Webinhalte verwendet werden (bekannt als **assistive Technologien** oder **ATs**).

> [!NOTE]
> Das Faktenblatt [Disability and health](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health) der Weltgesundheitsorganisation besagt, dass „über eine Milliarde Menschen, etwa 15 % der Weltbevölkerung, eine Form von Behinderung haben“ und dass „zwischen 110 Millionen und 190 Millionen Erwachsene erhebliche Schwierigkeiten bei der Funktionsfähigkeit haben“.

### Menschen mit Sehbeeinträchtigungen

Zu Menschen mit Sehbeeinträchtigungen gehören blinde Menschen, Menschen mit eingeschränktem Sehvermögen und Menschen mit Farbenblindheit. Viele Menschen mit Sehbeeinträchtigungen verwenden Bildschirmvergrößerungen, die entweder physische Lupen oder Software-Zoomfunktionen sind. Die meisten Browser und Betriebssysteme verfügen heutzutage über Zoomfunktionen. Einige Nutzende verlassen sich auf Screenreader, also Software, die digitalen Text laut vorliest. Beispiele für Screenreader sind:

- Kostenpflichtige kommerzielle Produkte wie [JAWS](https://vispero.com/jaws-screen-reader-software/) (Windows) und [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows).
- Kostenlose Produkte wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome) und [Orca](https://help.gnome.org/orca/introduction.html) (Linux – auf mehreren Distributionen standardmäßig installiert).
- In das Betriebssystem integrierte Software wie [VoiceOver](https://www.apple.com/accessibility/features/?vision) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-us/accessibility/windows/narrator/complete-guide-to-narrator) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (unter ChromeOS) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Es ist sinnvoll, sich mit Screenreadern vertraut zu machen. Sie sollten auch einen Screenreader einrichten und damit experimentieren, um eine Vorstellung von seiner Funktionsweise zu bekommen. Weitere Details zur Verwendung finden Sie in unseren [Screenreader-Tutorials](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers). Das folgende Video bietet ebenfalls ein kurzes Beispiel dafür, wie sich die Nutzung anfühlt.

{{EmbedYouTube("IK97XMibEws")}}

Laut Statistiken schätzt die Weltgesundheitsorganisation, dass „weltweit schätzungsweise 285 Millionen Menschen sehbeeinträchtigt sind: 39 Millionen sind blind und 246 Millionen haben ein eingeschränktes Sehvermögen“ (siehe [Visual impairment and blindness](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)). Das ist eine große und bedeutende Nutzergruppe, die Sie allein deshalb ausschließen würden, weil Ihre Website nicht korrekt programmiert ist — fast so groß wie die Bevölkerung der Vereinigten Staaten von Amerika.

### Menschen mit Hörbeeinträchtigungen

[Taube und schwerhörige (DHH)](https://www.nad.org/resources/american-sign-language/community-and-culture-frequently-asked-questions/) Menschen haben unterschiedlich starke Hörverluste, von leicht bis hochgradig. Zwar verwenden einige assistive Technologien (siehe [Assistive Devices for People with Hearing, Voice, Speech, or Language Disorders](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), diese sind jedoch nicht weit verbreitet.

Um Zugang zu ermöglichen, müssen textliche Alternativen bereitgestellt werden. Videos sollten manuell untertitelt werden, und für Audioinhalte sollten Transkripte verfügbar sein. Darüber hinaus sollte aufgrund des hohen Ausmaßes an [Sprachdeprivation](https://stoneharborstaffing.com/blog/language-deprivation#:~:text=Language%20deprivation%20is%20the%20term,therefore%20not%20exposed%20to%20language.) in DHH-Populationen eine [Vereinfachung von Texten erwogen werden](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/).

Taube und schwerhörige Menschen stellen ebenfalls eine bedeutende Nutzerbasis dar — laut dem Faktenblatt [Deafness and hearing loss](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss) der Weltgesundheitsorganisation „haben weltweit 466 Millionen Menschen einen beeinträchtigenden Hörverlust“.

### Menschen mit Mobilitätseinschränkungen

Diese Menschen haben Behinderungen, die die Bewegung betreffen. Dabei kann es sich um rein körperliche Probleme handeln (etwa den Verlust einer Gliedmaße oder Lähmungen) oder um neurologische/genetische Erkrankungen, die zu Schwäche oder Kontrollverlust in Gliedmaßen führen. Einige Menschen haben möglicherweise Schwierigkeiten, die für die Verwendung einer Maus erforderlichen präzisen Handbewegungen auszuführen, während andere stärker beeinträchtigt sein können, möglicherweise so stark gelähmt, dass sie einen [Kopfzeiger](https://www.performancehealth.com/adjustable-headpointer) benötigen, um mit Computern zu interagieren.

Diese Art von Behinderung kann auch eine Folge des Alters sein und nicht einer bestimmten Verletzung oder Erkrankung. Sie kann außerdem aus Hardwarebeschränkungen resultieren — einige Nutzende haben möglicherweise keine Maus.

Die Auswirkungen auf die Webentwicklungsarbeit bestehen üblicherweise darin, dass Bedienelemente über die Tastatur zugänglich sein müssen. Wir werden die Tastaturzugänglichkeit in späteren Artikeln dieses Moduls behandeln, aber es ist sinnvoll, einige Websites nur mit der Tastatur auszuprobieren, um zu sehen, wie gut Sie zurechtkommen. Können Sie beispielsweise mit der Tab-Taste zwischen den verschiedenen Bedienelementen eines Webformulars wechseln? Weitere Details zu Tastaturbedienelementen finden Sie in unserem Abschnitt [Use semantic UI controls where possible](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible).

Auch statistisch gesehen haben viele Menschen Mobilitätseinschränkungen. Die US Centers for Disease Control and Prevention berichten in [Disability and Functioning (Non-institutionalized Adults 18 Years and Over)](https://www.cdc.gov/nchs/fastats/disability.htm) für die USA: „Anteil der Erwachsenen mit Schwierigkeiten bei mindestens einer körperlichen Funktion: 16,1 %“.

### Menschen mit kognitiven Beeinträchtigungen

Kognitive Beeinträchtigung bezeichnet ein breites Spektrum von Behinderungen: von Menschen mit intellektuellen Behinderungen und den stärksten Einschränkungen bis zu uns allen, wenn wir älter werden und Schwierigkeiten beim Denken und Erinnern haben. Das Spektrum umfasst Menschen mit psychischen Erkrankungen wie [Depressionen](https://www.nimh.nih.gov/health/topics/depression) und [Schizophrenie](https://www.nimh.nih.gov/health/topics/schizophrenia). Es umfasst auch Menschen mit Lernbehinderungen wie [Legasthenie](https://www.nichd.nih.gov/health/topics/learningdisabilities) und [Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd). Wichtig ist: Obwohl die klinischen Definitionen kognitiver Beeinträchtigungen sehr vielfältig sind, erleben betroffene Menschen eine gemeinsame Reihe funktionaler Probleme. Dazu gehören Schwierigkeiten beim Verstehen von Inhalten, beim Erinnern daran, wie Aufgaben erledigt werden, sowie Verwirrung durch uneinheitliche Webseitenlayouts.

Eine gute Grundlage für Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Die Bereitstellung von Inhalten auf mehr als eine Weise, etwa durch Text-zu-Sprache oder Video.
- Leicht verständliche Inhalte, etwa Texte, die nach Standards für einfache Sprache verfasst sind.
- Die Fokussierung der Aufmerksamkeit auf wichtige Inhalte.
- Die Minimierung von Ablenkungen wie unnötigen Inhalten oder Werbung.
- Einheitliches Webseitenlayout und einheitliche Navigation.
- Vertraute Elemente, etwa unterstrichene Links, die blau sind, wenn sie noch nicht besucht wurden, und violett, wenn sie besucht wurden.
- Die Unterteilung von Prozessen in logische, wesentliche Schritte mit Fortschrittsanzeigen.
- Eine möglichst einfache Website-Authentifizierung, ohne die Sicherheit zu beeinträchtigen.
- Das einfache Ausfüllen von Formularen, etwa durch klare Fehlermeldungen und eine einfache Fehlerbehebung.

### Hinweise

- Das Gestalten unter Berücksichtigung der [kognitiven Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility) führt zu guten Gestaltungspraktiken. Davon profitieren alle.
- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Behinderungen. Websites müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) des W3C entsprechen, einschließlich der [Richtlinien zur kognitiven Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility#wcag_guidelines).
- Die [Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/) des W3C erstellt Web-Barrierefreiheitsrichtlinien für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM bietet eine [Cognitive-Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die United States Centers for Disease Control schätzen, dass im Jahr 2018 einer von vier US-Bürgern eine Behinderung hatte und dass [kognitive Beeinträchtigungen bei jungen Menschen am häufigsten vorkommen](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden einige intellektuelle Behinderungen historisch als „mental retardation“ bezeichnet. Viele betrachten diesen Begriff heute als abwertend, weshalb seine Verwendung vermieden werden sollte.
- Im Vereinigten Königreich werden einige intellektuelle Behinderungen als „learning disabilities“ oder „learning difficulties“ bezeichnet.

## Barrierefreiheit in Ihr Projekt integrieren

Ein verbreiteter Mythos zur Barrierefreiheit ist, dass sie ein kostspieliges „zusätzliches Extra“ ist, das in einem Projekt umgesetzt werden muss. Dieser Mythos _kann_ tatsächlich zutreffen, wenn entweder:

- Sie versuchen, eine bestehende Website mit erheblichen Barrierefreiheitsproblemen nachträglich barrierefrei zu machen.
- Sie erst in den späten Phasen eines Projekts begonnen haben, Barrierefreiheit zu berücksichtigen, und damit zusammenhängende Probleme aufdecken.

Wenn Sie Barrierefreiheit jedoch von Beginn eines Projekts an berücksichtigen, sollten die Kosten für die barrierefreie Gestaltung der meisten Inhalte recht gering sein.

Berücksichtigen Sie bei der Projektplanung Tests zur Barrierefreiheit in Ihrem Testregime, genau wie Tests für jedes andere wichtige Zielgruppensegment, beispielsweise Desktop- oder Mobilbrowser. Testen Sie früh und häufig. Idealerweise führen Sie automatisierte Tests aus, um programmatisch erkennbare fehlende Funktionen aufzudecken (etwa fehlenden [Alternativtext](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) für Bilder oder schlechten Linktext — siehe [Use meaningful text labels](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels)), und testen Sie mit Gruppen von Nutzenden mit Behinderungen, um zu sehen, wie gut komplexere Website-Funktionen für sie funktionieren. Zum Beispiel:

- Ist mein Date-Picker-Widget für Menschen nutzbar, die Screenreader verwenden?
- Wenn Inhalte dynamisch aktualisiert werden, wissen sehbeeinträchtigte Menschen davon?
- Sind meine UI-Schaltflächen sowohl für Nutzende von Tastaturen als auch von Touch-Oberflächen zugänglich?

Sie können und sollten sich potenzielle Problembereiche in Ihren Inhalten notieren, die Arbeit erfordern, um barrierefrei zu werden. Stellen Sie sicher, dass sie gründlich getestet werden, und überlegen Sie sich Lösungen oder Alternativen. Textinhalte sind, wie Sie im nächsten Artikel sehen werden, einfach — aber was ist mit Ihren Multimedia-Inhalten und Ihren aufwendigen 3D-Grafiken? Sie sollten Ihr Projektbudget prüfen und überlegen, welche Lösungen Ihnen zur Verfügung stehen, um solche Inhalte barrierefrei zu machen. Eine mögliche, wenn auch kostspielige Option besteht darin, alle Ihre Multimedia-Inhalte transkribieren zu lassen.

Seien Sie außerdem realistisch. „100 % Barrierefreiheit“ ist ein unerreichbares Ideal — Sie werden immer auf Sonderfälle stoßen, in denen bestimmte Nutzende bestimmte Inhalte nur schwer verwenden können. Sie sollten jedoch so viel wie möglich tun. Wenn Sie planen, eine aufwendige 3D-Kreisdiagrammgrafik mit WebGL einzubinden, sollten Sie möglicherweise eine Datentabelle als barrierefreie Alternativdarstellung der Daten bereitstellen. Oder Sie möchten vielleicht einfach nur die Tabelle einbinden und das 3D-Kreisdiagramm weglassen — die Tabelle ist für alle zugänglich, schneller zu programmieren, weniger CPU-intensiv und leichter zu warten.

Wenn Sie dagegen an einer Galerie-Website arbeiten, die interessante 3D-Kunst zeigt, wäre es unangemessen zu erwarten, dass jedes Kunstwerk für sehbeeinträchtigte Menschen perfekt zugänglich ist, da es sich um ein vollständig visuelles Medium handelt.

Um zu zeigen, dass Sie Barrierefreiheit wichtig nehmen und darüber nachgedacht haben, veröffentlichen Sie auf Ihrer Website eine Erklärung zur Barrierefreiheit. Darin sollten Sie Ihre Richtlinien zur Barrierefreiheit und die Schritte erläutern, die Sie unternommen haben, um die Website barrierefrei zu gestalten. Falls Ihnen jemand mitteilt, dass Ihre Website ein Barrierefreiheitsproblem hat, beginnen Sie einen Dialog mit dieser Person, zeigen Sie Empathie und unternehmen Sie angemessene Schritte, um das Problem zu beheben.

Zusammengefasst:

- Berücksichtigen Sie Barrierefreiheit von Beginn eines Projekts an und testen Sie früh und häufig. Wie jeder andere Fehler wird auch ein Barrierefreiheitsproblem umso teurer zu beheben, je später es entdeckt wird.
- Denken Sie daran, dass viele bewährte Praktiken für Barrierefreiheit allen zugutekommen, nicht nur Nutzenden mit Behinderungen. Schlankes semantisches Markup ist beispielsweise nicht nur gut für Screenreader, sondern lädt auch schnell und bietet eine gute Performance. Davon profitieren alle, insbesondere Personen mit Mobilgeräten und/oder langsamen Verbindungen.
- Veröffentlichen Sie auf Ihrer Website eine Erklärung zur Barrierefreiheit und treten Sie mit Personen in Kontakt, die Probleme haben.

## Richtlinien zur Barrierefreiheit und das Gesetz

Es gibt zahlreiche Checklisten und Richtliniensammlungen, auf denen Barrierefreiheitstests basieren können. Das kann auf den ersten Blick überwältigend wirken. Unser Rat ist, sich mit den grundlegenden Bereichen vertraut zu machen, in denen Sie sorgfältig vorgehen müssen, und die übergeordneten Strukturen der für Sie relevantesten Richtlinien zu verstehen.

- Zunächst hat das W3C ein umfangreiches und sehr detailliertes Dokument veröffentlicht, das präzise, technologieunabhängige Kriterien für die Konformität mit Barrierefreiheit enthält. Diese werden als [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) bezeichnet, und sie sind keineswegs kurz. Die Kriterien sind in vier Hauptkategorien unterteilt, die festlegen, wie Implementierungen wahrnehmbar, bedienbar, verständlich und robust gestaltet werden können. Der beste Ort für eine kurze Einführung und den Einstieg ist [WCAG at a Glance](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). Sie müssen nicht alle WCAG-Kriterien lernen — seien Sie sich der wichtigsten Problembereiche bewusst und verwenden Sie verschiedene Techniken und Werkzeuge, um Bereiche hervorzuheben, die den WCAG-Kriterien nicht entsprechen (siehe unten für weitere Informationen).
- Ihr Land kann außerdem spezielle Gesetze haben, die vorschreiben, dass Websites für die jeweilige Bevölkerung barrierefrei sein müssen — beispielsweise [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) in der EU, [Section 508 of the Rehabilitation Act](https://www.section508.gov/training/) in den USA, die [Verordnung zur Schaffung barrierefreier Informationstechnik](https://www.aktion-mensch.de/inklusion/barrierefreiheit/barrierefreie-website) in Deutschland, die [Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) im Vereinigten Königreich, [Accessibilità](https://www.agid.gov.it/it/ambiti-intervento/accessibilita-usabilita) in Italien, der [Disability Discrimination Act](https://humanrights.gov.au/resource-hub/by-resource-type/guidelines-and-standards/guides-and-standards-disability-rights/guidelines-equal-access-digital-goods-and-services) in Australien usw. Das W3C führt eine nach Ländern geordnete Liste der [Web Accessibility Laws & Policies](https://www.w3.org/WAI/policies/).

Während die WCAG also eine Reihe von Richtlinien sind, gibt es in Ihrem Land wahrscheinlich Gesetze zur Web-Barrierefreiheit oder zumindest zur Barrierefreiheit öffentlicher Dienste, zu denen Websites, Fernsehen, physische Räume usw. gehören können. Es ist sinnvoll, herauszufinden, welche Gesetze für Sie gelten. Wenn Sie keinerlei Anstrengungen unternehmen, um die Barrierefreiheit Ihrer Inhalte zu überprüfen, können Sie rechtlich haftbar sein, wenn Menschen Beschwerden einreichen.

Das klingt ernst, aber tatsächlich müssen Sie Barrierefreiheit nur zur Hauptpriorität Ihrer Webentwicklungspraktiken machen, wie oben beschrieben. Holen Sie im Zweifelsfall Rat bei einem qualifizierten Rechtsanwalt ein. Wir geben hierzu keine weitergehenden Ratschläge, da wir keine Rechtsanwälte sind.

## Accessibility APIs

Webbrowser verwenden spezielle **Accessibility APIs** (die vom zugrunde liegenden Betriebssystem bereitgestellt werden), welche Informationen bereitstellen, die für assistive Technologien (ATs) nützlich sind. ATs verwenden meist semantische Informationen; diese Informationen enthalten daher keine Dinge wie Styling-Informationen oder JavaScript. Diese Informationen sind in einer Informationsbaumstruktur organisiert, die **Accessibility Tree** genannt wird.

Verschiedene Betriebssysteme stellen unterschiedliche Accessibility APIs bereit:

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- macOS: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility framework
- iOS: UIAccessibility

Wenn die von den HTML-Elementen in Ihren Web-Apps bereitgestellten nativen semantischen Informationen nicht ausreichen, können Sie sie mit Funktionen aus der [WAI-ARIA-Spezifikation](https://w3c.github.io/aria/) ergänzen. Diese fügen dem Accessibility Tree semantische Informationen hinzu, um die Barrierefreiheit zu verbessern. In unserem Artikel [WAI-ARIA basics](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) können Sie viel mehr über WAI-ARIA erfahren.

## Zusammenfassung

Dieser Artikel sollte Ihnen einen nützlichen Überblick über Barrierefreiheit gegeben, gezeigt haben, warum sie wichtig ist, und erläutert haben, wie Sie sie in Ihren Workflow integrieren können. Sie sollten nun auch den Wunsch haben, mehr über die Implementierungsdetails zu erfahren, die Websites barrierefrei machen können, und darüber, welche Werkzeuge helfen können. Im nächsten Artikel befassen wir uns mit Werkzeugen für Barrierefreiheit.

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
  - [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  - [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  - [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  - [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

- [Google Chrome veröffentlichte eine Erweiterung für automatische Untertitel](https://blog.google/products-and-platforms/products/chrome/live-caption-chrome/)

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}
