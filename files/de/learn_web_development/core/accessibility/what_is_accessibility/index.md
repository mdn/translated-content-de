---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Core/Accessibility/What_is_accessibility
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}

Dieser Artikel beginnt das Modul mit einem guten Überblick darüber, was Barrierefreiheit ist — dieser Überblick beinhaltet, welche Personengruppen wir berücksichtigen müssen und warum, welche Werkzeuge verschiedene Menschen nutzen, um mit dem Web zu interagieren, und wie wir Barrierefreiheit in unseren Webentwicklungsprozess integrieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Der Zweck der Barrierefreiheit — erhöhter Zugang zu digitalen Diensten für Menschen mit zusätzlichen Bedürfnissen, verbesserte Benutzerfreundlichkeit für alle, besseres SEO und ein breiteres Zielpublikum.</li>
          <li>Bewusstsein für die gesetzlichen Anforderungen an Barrierefreiheit.</li>
          <li>Dass Barrierefreiheit von Anfang an in ein Projekt integriert werden sollte und nicht am Ende angefügt werden sollte.</li>
          <li>Vertrautheit mit den Konformitätskriterien der Web Content Accessibility Guidelines (WCAG).</li>
          <li>Bewusstsein für Barrierefreiheits-APIs und deren Zweck.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist also Barrierefreiheit?

Barrierefreiheit ist die Praxis, Ihre Websites für möglichst viele Menschen nutzbar zu machen. Traditionell denkt man dabei an Menschen mit Behinderungen, aber die Praxis, Websites zugänglich zu gestalten, kommt auch anderen Gruppen zugute, wie z.B. Menschen, die mobile Geräte verwenden, oder Menschen mit langsamen Netzwerkverbindungen.

Man könnte Barrierefreiheit auch als die gleiche Behandlung aller Menschen betrachten, indem man ihnen unabhängig von ihren Fähigkeiten oder Umständen gleiche Chancen gibt. Genauso wie es falsch ist, jemanden aus einem physischen Gebäude auszuschließen, weil er im Rollstuhl sitzt (moderne öffentliche Gebäude haben in der Regel Rollstuhlrampen oder Aufzüge), ist es auch nicht richtig, jemanden von einer Website auszuschließen, weil er eine Sehbehinderung hat. Wir sind alle verschieden, aber wir sind alle Menschen und haben daher die gleichen Menschenrechte.

Barrierefreiheit ist das Richtige. In einigen Ländern ist es gesetzlich vorgeschrieben, zugängliche Websites bereitzustellen, was einige bedeutende Märkte erschließen kann, die sonst Ihre Dienste nicht nutzen oder Ihre Produkte kaufen könnten.

Der Aufbau zugänglicher Websites kommt allen zugute:

- Semantisches HTML, das die Barrierefreiheit verbessert, verbessert auch SEO, sodass Ihre Website besser auffindbar ist.
- Sich um Barrierefreiheit zu kümmern, zeigt gute Ethik und Moral und verbessert Ihr öffentliches Image.
- Andere gute Praktiken, die die Barrierefreiheit verbessern, machen Ihre Website auch für andere Gruppen besser nutzbar, wie z.B. für Handybenutzer oder Menschen mit niedrigen Netzwerkgeschwindigkeiten. Tatsächlich kann jeder von vielen solcher Verbesserungen profitieren.
- Haben wir erwähnt, dass es an manchen Orten auch gesetzlich vorgeschrieben ist?

## Mit welchen Arten von Behinderungen befassen wir uns?

Menschen mit Behinderungen sind genauso vielfältig wie Menschen ohne Behinderungen, ebenso wie ihre Behinderungen. Die Kernlektion besteht darin, über den eigenen Computer und die eigene Nutzung des Webs hinauszudenken und zu lernen, wie andere es nutzen — _Sie sind nicht Ihre Benutzer_. Die wichtigsten Arten von Behinderungen, die zu berücksichtigen sind, werden im Folgenden erläutert, zusammen mit den speziellen Werkzeugen, die sie zum Zugriff auf Webinhalte verwenden (bekannt als **Assistive Technologien**, oder **ATs**).

> [!NOTE]
> Das [Datenblatt zu Behinderung und Gesundheit](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health) der Weltgesundheitsorganisation besagt, dass „über eine Milliarde Menschen, etwa 15% der Weltbevölkerung, irgendeine Form von Behinderung haben“, und „zwischen 110 Millionen und 190 Millionen Erwachsene haben erhebliche Funktionsschwierigkeiten“.

### Menschen mit Sehbehinderungen

Zu Menschen mit Sehbehinderungen gehören Menschen, die blind sind, Menschen mit Sehschwäche und Farbenblinde. Viele Menschen mit Sehbehinderungen verwenden Bildschirmvergrößerer, die entweder physische Vergrößerer oder Software-Zoom-Funktionen sind. Die meisten Browser und Betriebssysteme verfügen heutzutage über Zoom-Funktionen. Einige Benutzer werden auf Bildschirmleser angewiesen sein, das ist Software, die digitale Textinhalte laut vorliest. Einige Beispiele für Bildschirmleser sind:

- Kommerzielle kostenpflichtige Produkte wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows) und [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows).
- Kostenlose Produkte wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- In das Betriebssystem eingebaute Software wie [VoiceOver](https://www.apple.com/accessibility/features/?vision) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf ChromeOS) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Es ist eine gute Idee, sich mit Bildschirmlesern vertraut zu machen; Sie sollten auch einen Bildschirmleser einrichten und damit herumspielen, um eine Vorstellung davon zu bekommen, wie er funktioniert. In unseren [Bildschirmleser-Tutorials](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) finden Sie weitere Informationen zur Verwendung. Das untenstehende Video gibt auch ein kurzes Beispiel für die Erfahrung.

{{EmbedYouTube("IK97XMibEws")}}

In Bezug auf die Statistiken schätzt die Weltgesundheitsorganisation, dass „weltweit 285 Millionen Menschen als sehbehindert gelten: 39 Millionen sind blind und 246 Millionen haben eine Sehschwäche.“ (siehe [Sehbehinderung und Blindheit](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)). Das ist eine große und bedeutende Benutzergruppe, auf die man verzichten muss, nur weil Ihre Seite nicht richtig codiert ist — fast so groß wie die Bevölkerung der Vereinigten Staaten von Amerika.

### Menschen mit Hörbehinderungen

[Täubstumme und Schwerhörige (DHH)](https://www.nad.org/resources/american-sign-language/community-and-culture-frequently-asked-questions/) Menschen haben unterschiedliche Grade von Hörverlust, die von mild bis schwer reichen. Obwohl einige ATs verwenden (siehe [Hilfsmittel für Menschen mit Hör-, Sprach-, Sprech- oder Sprachstörungen](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), sind sie nicht weit verbreitet.

Um Zugang zu gewähren, müssen Textalternativen bereitgestellt werden. Videos sollten manuell untertitelt und Transkripte für Audioinhalte bereitgestellt werden. Aufgrund des hohen [Sprachentzugspiegels](https://epicspecialeducationstaffing.com/language-deprivation/#:~:text=Language%20deprivation%20is%20the%20term,therefore%20not%20exposed%20to%20language.) in DHH-Populationen sollte [Textvereinfachung in Betracht gezogen werden](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/).

Täubstumme und Schwerhörige stellen ebenfalls eine bedeutende Benutzerbasis dar — „466 Millionen Menschen weltweit haben eine beeinträchtigende Hörstörung“, sagt das Datenblatt der Weltgesundheitsorganisation [Taubheit und Hörverlust](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss).

### Menschen mit Mobilitätseinschränkungen

Diese Menschen haben körperliche Einschränkungen, die rein physische Probleme betreffen können (wie Verlust eines Gliedes oder Lähmung) oder neurologische/genetische Störungen, die zu Schwäche oder Kontrollverlust in Gliedmaßen führen. Einige Menschen haben möglicherweise Schwierigkeiten, die genauen Handbewegungen auszuführen, die zur Verwendung einer Maus erforderlich sind, während andere stärker betroffen sein könnten, vielleicht erheblich gelähmt sind und einen [Kopfstift](https://www.performancehealth.com/adjustable-headpointer) verwenden müssen, um mit Computern zu interagieren.

Diese Art der Behinderung kann auch eine Folge des Alters sein, anstatt eines spezifischen Traumas oder Zustands, und es könnte auch auf Hardwarebeschränkungen zurückzuführen sein — einige Benutzer haben möglicherweise keine Maus.

Dies wirkt sich normalerweise auf die Webentwicklung aus, indem Steuerungen über die Tastatur zugänglich sein müssen — wir werden die Tastaturzugänglichkeit in späteren Artikeln des Moduls besprechen, aber es ist eine gute Idee, einige Websites nur mit der Tastatur auszuprobieren, um zu sehen, wie Sie zurechtkommen. Können Sie die Tabulatortaste verwenden, um zwischen den verschiedenen Steuerungen eines Webformulars zu wechseln? Weitere Details zu Tastatursteuerungen finden Sie in unserem Abschnitt [Verwenden Sie semantische UI-Steuerungen, wo möglich](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible).

In Bezug auf die Statistiken haben eine bedeutende Anzahl von Menschen Mobilitätseinschränkungen. Die US-Zentren für Krankheitskontrolle und Prävention [Behinderung und Funktion (Nicht institutionalisierten Erwachsenen ab 18 Jahren)](https://www.cdc.gov/nchs/fastats/disability.htm) berichten, dass in den USA „16,1% der Erwachsenen jegliche körperliche Funktionsschwierigkeiten haben“.

### Menschen mit kognitiven Beeinträchtigungen

Kognitive Beeinträchtigung bezieht sich auf eine breite Palette von Behinderungen, von Menschen mit intellektuellen Behinderungen, die die am stärksten eingeschränkten Fähigkeiten haben, bis hin zu all denjenigen von uns, die mit dem Alter Schwierigkeiten haben, zu denken und zu erinnern. Die Bandbreite umfasst Menschen mit psychischen Erkrankungen, wie [Depressionen](https://www.nimh.nih.gov/health/topics/depression) und [Schizophrenie](https://www.nimh.nih.gov/health/topics/schizophrenia). Sie umfasst auch Menschen mit Lernstörungen wie [Dyslexie](https://www.nichd.nih.gov/health/topics/learningdisabilities) und [Aufmerksamkeitsdefizit-Hyperaktivitätsstörung](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd). Wichtig ist, dass es, obwohl es innerhalb der klinischen Definition von kognitiven Beeinträchtigungen eine große Vielfalt gibt, eine gemeinsame Reihe von funktionalen Problemen gibt, die Menschen mit diesen haben. Dazu gehören Schwierigkeiten beim Verstehen von Inhalten, das Erinnern daran, wie Aufgaben abgeschlossen werden sollen, und Verwirrung, die durch inkonsistente Webseitenlayouts verursacht wird.

Eine gute Grundlage für die Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Inhalte auf mehr als eine Weise bereitzustellen, z.B. durch Text-to-Speech oder Video.
- Inhalte, die leicht zu verstehen sind, z.B. Texte, die nach Standards für einfache Sprache geschrieben sind.
- Die Aufmerksamkeit auf wichtige Inhalte zu lenken.
- Ablenkungen zu minimieren, wie unnötige Inhalte oder Werbung.
- Konsistente Webseitenlayouts und Navigation.
- Vertraute Elemente, wie unterstrichene Links in Blau bei nicht besuchtem und in Lila bei besuchtem Zustand.
- Prozesse in logische, notwendige Schritte mit Fortschrittsanzeigen unterteilen.
- Website-Authentifizierung so einfach wie möglich durchführen, ohne die Sicherheit zu beeinträchtigen.
- Formulare leicht ausfüllbar machen, z.B. mit klaren Fehlermeldungen und einfacher Fehlerbehebung.

### Anmerkungen

- Das Design mit [kognitiver Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility) führt zu guten Designpraktiken, die allen zugutekommen werden.
- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Behinderungen. Websites müssen den [Richtlinien zur Barrierefreiheit von Webinhalten](https://www.w3.org/WAI/standards-guidelines/wcag/) der W3C entsprechen, einschließlich der [Richtlinien zur kognitiven Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility#wcag_guidelines).
- Die [Arbeitsgruppe für die Barrierefreiheit von Menschen mit kognitiven und Lernbehinderungen](https://www.w3.org/WAI/GL/task-forces/coga/) der W3C erstellt Webzugänglichkeitsrichtlinien für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Seite zur Kognition](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die US-Zentren für Krankheitskontrolle schätzen, dass bis 2018 1 von 4 US-Bürgern eine Behinderung hat und von diesen ist [kognitive Beeinträchtigung die häufigste bei jungen Menschen](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden einige intellektuelle Behinderungen historisch als "geistige Behinderung" bezeichnet. Viele betrachten diesen Begriff heute als abwertend, daher sollte seine Verwendung vermieden werden.
- Im Vereinigten Königreich werden einige intellektuelle Behinderungen als "Lernbehinderungen" oder "Lernschwierigkeiten" bezeichnet.

## Barrierefreiheit in Ihr Projekt einbinden

Ein häufiger Mythos über Barrierefreiheit ist, dass sie eine teure "zusätzliche" Implementierung in einem Projekt darstellt. Dieser Mythos _kann_ tatsächlich wahr sein, wenn entweder:

- Sie versuchen, Barrierefreiheit in eine bestehende Website zu "rüsten", die erhebliche Barrierefreiheitsprobleme aufweist.
- Sie erst in den späten Phasen eines Projekts beginnen, sich mit Barrierefreiheit zu beschäftigen und diesbezüglich Probleme entdecken.

Wenn Sie jedoch die Barrierefreiheit von Anfang an berücksichtigen, sollten die Kosten für die Zugänglichmachung der meisten Inhalte relativ gering sein.

Wenn Sie Ihr Projekt planen, integrieren Sie Barrierefreiheitsprüfungen in Ihr Testregime, genau wie bei Tests für jedes andere wichtige Zielgruppensegment (z.B. Zielgruppen-Desktop- oder mobile Browser). Testen Sie früh und oft, idealerweise mit automatisierten Tests, um programmatisch erkennbare fehlende Features zu finden (wie fehlende Bild-[Alternativtexte](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) oder schlechten Linktext — siehe [Verwenden Sie aussagekräftige Textetiketten](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels)) und machen Sie einige Tests mit Benutzergruppen mit Behinderungen, um zu sehen, wie gut komplexere Site-Features für sie funktionieren. Zum Beispiel:

- Ist mein Datumsauswahl-Widget für Menschen, die Bildschirmleser verwenden, nutzbar?
- Wenn Inhalte dynamisch aktualisiert werden, wissen sehbehinderte Menschen davon?
- Sind meine UI-Buttons sowohl für Tastatur- als auch für Touchbenutzer zugänglich?

Sie können und sollten Problembereiche in Ihren Inhalten, die Arbeit erfordern, um sie zugänglich zu machen, notieren, sicherstellen, dass sie gründlich getestet werden, und über Lösungen/Alternativen nachdenken. Textinhalte (wie Sie im nächsten Artikel sehen werden) sind einfach, aber was ist mit Ihren Multimediainhalten und Ihren beeindruckenden 3D-Grafiken? Sie sollten Ihr Projektbudget betrachten und überlegen, welche Lösungen Sie zur Verfügung haben, um solche Inhalte zugänglich zu machen. Eine Option wäre, alle Ihre Multimediainhalte transkribieren zu lassen, was zwar teuer ist, aber möglich.

Seien Sie auch realistisch. "100% Zugänglichkeit" ist ein unerreichbares Ideal — Sie werden immer auf eine Art von Randfall stoßen, der dazu führt, dass ein bestimmter Benutzer bestimmte Inhalte nur schwer nutzen kann — aber Sie sollten so viel wie möglich tun. Wenn Sie planen, ein beeindruckendes 3D-Kuchendiagramm mit WebGL zu erstellen, möchten Sie möglicherweise eine Datentabelle als zugängliche alternative Darstellung der Daten einfügen. Oder Sie möchten einfach die Tabelle einfügen und das 3D-Kuchendiagramm entfernen — die Tabelle ist für alle zugänglich, schneller zu codieren, weniger CPU-intensiv und einfacher zu warten.

Auf der anderen Seite, wenn Sie an einer Galerie-Website arbeiten, die interessante 3D-Kunstwerke zeigt, wäre es unvernünftig, zu erwarten, dass jedes Kunstwerk perfekt für sehbehinderte Menschen zugänglich ist, da es sich um ein völlig visuelles Medium handelt.

Um zu zeigen, dass Sie sich um Barrierefreiheit kümmern und darüber nachgedacht haben, veröffentlichen Sie eine Barrierefreiheitserklärung auf Ihrer Website, die Ihre Politik zur Barrierefreiheit detailliert beschreibt und welche Schritte Sie unternommen haben, um die Website zugänglich zu machen. Wenn jemand Sie darüber informiert, dass Ihre Website ein Barrierefreiheitsproblem hat, beginnen Sie einen Dialog mit dieser Person, zeigen Sie Einfühlungsvermögen und unternehmen Sie angemessene Schritte, um das Problem zu beheben.

Zusammenfassend:

- Berücksichtigen Sie Barrierefreiheit von Anfang an in einem Projekt und testen Sie früh und oft. Genau wie bei jedem anderen Fehler wird ein Barrierefreiheitsproblem teurer, je später es entdeckt wird.
- Bedenken Sie, dass viele der besten Praktiken für Barrierefreiheit allen zugutekommen, nicht nur Benutzern mit Behinderungen. Zum Beispiel ist semantisches Markup nicht nur gut für Bildschirmleser, es lädt auch schnell und ist leistungsstark. Dies kommt allen zugute, insbesondere denjenigen, die mobile Geräte und/oder langsame Verbindungen verwenden.
- Veröffentlichen Sie eine Barrierefreiheitserklärung auf Ihrer Website und treten Sie mit Menschen in Kontakt, die Probleme haben.

## Barrierefreiheitsrichtlinien und das Gesetz

Es gibt zahlreiche Checklisten und Richtliniensammlungen, auf denen man die Barrierefreiheitsprüfungen basieren kann, die auf den ersten Blick überwältigend erscheinen können. Unser Rat ist, sich mit den grundlegenden Bereichen vertraut zu machen, in denen Sie vorsichtig sein müssen, sowie die hohen strukturellen Richtlinien zu verstehen, die für Sie am relevantesten sind.

- Die W3C hat ein großes und sehr detailliertes Dokument veröffentlicht, das sehr präzise, technologieunabhängige Kriterien für die Barrierefreiheitskonformität enthält. Diese werden als die [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) bezeichnet, und sie sind keineswegs eine kurze Lektüre. Die Kriterien sind in vier Hauptkategorien unterteilt, die spezifizieren, wie Implementierungen wahrnehmbar, bedienbar, verständlich und robust gemacht werden können. Der beste Ort, um eine leichte Einführung zu bekommen und mit dem Lernen zu beginnen, ist [WCAG auf einen Blick](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). Es ist nicht notwendig, alle WCAG-Kriterien zu erlernen — seien Sie sich der Hauptanliegen bewusst, und verwenden Sie eine Vielzahl von Techniken und Werkzeugen, um alle Bereiche hervorzuheben, die nicht den WCAG-Kriterien entsprechen (siehe unten für mehr).
- Ihr Land könnte auch spezielle Gesetze haben, die die Notwendigkeit regeln, dass Websites, die ihrer Bevölkerung dienen, zugänglich sind — zum Beispiel [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) in der EU, [Section 508 of the Rehabilitation Act](https://www.section508.gov/training/) in den USA, [Bundesverordnung über barrierefreie Informationstechnik](https://www.aktion-mensch.de/inklusion/barrierefreiheit/barrierefreie-website) in Deutschland, [Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) im Vereinigten Königreich, [Accessibilità](https://www.agid.gov.it/it/ambiti-intervento/accessibilita-usabilita) in Italien, das [Disability Discrimination Act](https://humanrights.gov.au/our-work/disability-rights/publications/guidelines-equal-access-digital-goods-and-services) in Australien, etc. Das W3C führt eine Liste von [Web Accessibility Laws & Policies](https://www.w3.org/WAI/policies/) nach Ländern.

Während die WCAG also eine Sammlung von Richtlinien ist, wird Ihr Land wahrscheinlich Gesetze haben, die die Webzugänglichkeit regeln, oder zumindest die Zugänglichkeit von Dienstleistungen, die der Öffentlichkeit zur Verfügung stehen (was Websites, Fernsehen, physische Räume usw. umfassen könnte). Es ist eine gute Idee, herauszufinden, welche Gesetze es gibt. Wenn Sie keinen Versuch unternehmen, zu überprüfen, ob Ihre Inhalte zugänglich sind, könnten Sie rechtlich haftbar sein, wenn sich Menschen beschweren.

Das klingt ernst, aber Sie müssen nur die Barrierefreiheit als Hauptpriorität Ihrer Webentwicklungspraktiken betrachten, wie oben beschrieben. Wenn Sie Zweifel haben, holen Sie sich Rat von einem qualifizierten Anwalt. Wir werden keinen weiteren Rat geben, da wir keine Anwälte sind.

## Barrierefreiheits-APIs

Webbrowser nutzen spezielle **Barrierefreiheits-APIs** (bereitgestellt durch das zugrunde liegende Betriebssystem), die Informationen bereitstellen, die für assistive Technologien (ATs) nützlich sind — ATs neigen dazu, meist semantische Informationen zu nutzen, sodass diese Informationen keine Stylinginformationen oder JavaScript beinhalten. Diese Informationen sind in einem Informationsbaum strukturiert, der als **Barrierefreiheitsbaum** bezeichnet wird.

Verschiedene Betriebssysteme haben verschiedene Barrierefreiheits-APIs zur Verfügung:

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- macOS: NSAccessibility
- Linux: AT-SPI
- Android: Barrierefreiheits-Framework
- iOS: UIAccessibility

Wo die nativen semantischen Informationen, die von den HTML-Elementen in Ihren Webapps bereitgestellt werden, nicht ausreichen, können Sie sie mit Funktionen aus der [WAI-ARIA-Spezifikation](https://w3c.github.io/aria/) ergänzen, die dem Barrierefreiheitsbaum semantische Informationen hinzufügen, um die Zugänglichkeit zu verbessern. Sie können in unserem Artikel [WAI-ARIA-Grundlagen](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) mehr über WAI-ARIA erfahren.

## Zusammenfassung

Dieser Artikel sollte Ihnen einen nützlichen Überblick über Barrierefreiheit gegeben haben, Ihnen gezeigt haben, warum sie wichtig ist, und wie Sie sie in Ihren Arbeitsablauf integrieren können. Sie sollten jetzt auch das Bedürfnis haben, mehr über die Implementierungsdetails zu lernen, die Websites zugänglich machen können, und welche Werkzeuge helfen können. Im nächsten Artikel werden wir uns mit Werkzeugen für die Barrierefreiheit befassen.

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  - [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  - [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  - [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  - [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

- [Google Chrome hat eine automatische Untertitelungserweiterung veröffentlicht](https://blog.google/products/chrome/live-caption-chrome/)

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}
