---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Core/Accessibility/What_is_accessibility
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}

Dieser Artikel beginnt das Modul mit einem guten Blick darauf, was Barrierefreiheit ist – dieser Überblick umfasst, welche Personengruppen wir berücksichtigen müssen und warum, welche Werkzeuge verschiedene Personen verwenden, um mit dem Web zu interagieren, und wie wir Barrierefreiheit in unseren Webentwicklungs-Workflow integrieren können.

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
          <li>Der Zweck der Barrierefreiheit – erhöhter Zugang zu digitalen Diensten für Menschen mit zusätzlichen Bedürfnissen, verbesserte Benutzerfreundlichkeit für alle, besseres SEO und eine breitere Zielgruppe.</li>
          <li>Bewusstsein für die rechtlichen Anforderungen an die Barrierefreiheit.</li>
          <li>Dass Barrierefreiheit von Anfang an in einem Projekt berücksichtigt werden sollte und nicht am Ende hinzugefügt werden sollte.</li>
          <li>Vertrautheit mit den WCAG-Konformitätskriterien (Web Content Accessibility Guidelines).</li>
          <li>Bewusstsein für Barrierefreiheits-APIs und deren Zweck.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist also Barrierefreiheit?

Barrierefreiheit ist die Praxis, Ihre Websites für möglichst viele Menschen nutzbar zu machen. Wir denken traditionell, dass es dabei um Menschen mit Behinderungen geht, aber die Praxis der Zugänglichmachung von Websites kommt auch anderen Gruppen zugute, wie z. B. Nutzern mobiler Geräte oder Personen mit langsamen Netzwerkverbindungen.

Sie könnten Barrierefreiheit auch als gleichberechtigtes Behandeln aller Menschen betrachten und ihnen gleiche Chancen geben, unabhängig von ihren Fähigkeiten oder Umständen. Ebenso wie es falsch ist, jemanden aus einem physischen Gebäude auszuschließen, weil er im Rollstuhl sitzt (moderne öffentliche Gebäude haben im Allgemeinen Rollstuhlrampen oder Aufzüge), ist es auch nicht richtig, jemanden von einer Website auszuschließen, weil er eine Sehbehinderung hat. Wir sind alle unterschiedlich, aber wir sind alle Menschen und haben daher die gleichen Menschenrechte.

Barrierefreiheit ist das Richtige. In einigen Ländern ist die Bereitstellung barrierefreier Websites gesetzlich vorgeschrieben, was einige bedeutende Märkte eröffnen kann, die andernfalls nicht in der Lage wären, Ihre Dienste zu nutzen oder Ihre Produkte zu kaufen.

Der Aufbau barrierefreier Websites kommt allen zugute:

- Semantisches HTML, das die Barrierefreiheit verbessert, verbessert auch das SEO und macht Ihre Seite leichter auffindbar.
- Das Kümmern um Barrierefreiheit demonstriert gute Ethik und Moral, was Ihr öffentliches Image verbessert.
- Andere gute Praktiken, die die Barrierefreiheit verbessern, machen Ihre Website auch für andere Gruppen benutzerfreundlicher, wie z. B. Nutzer von Mobiltelefonen oder solche mit niedrigen Netzgeschwindigkeiten. Tatsächlich können alle von solchen Verbesserungen profitieren.
- Haben wir auch erwähnt, dass es in einigen Gegenden gesetzlich vorgeschrieben ist?

## Welche Arten von Behinderungen betrachten wir?

Menschen mit Behinderungen sind genauso vielfältig wie Menschen ohne Behinderungen, und ebenso vielfältig sind ihre Behinderungen. Die wichtigste Lektion ist, über Ihren eigenen Computer und Ihre Nutzung des Webs hinauszudenken und zu lernen, wie andere es nutzen – _Sie sind nicht Ihre Nutzer_. Die wichtigsten Arten von Behinderungen, die berücksichtigt werden sollten, werden unten erklärt, zusammen mit allen speziellen Werkzeugen, die sie zum Zugriff auf Webinhalte verwenden (bekannt als **assistive Technologien**, oder **ATs**).

> [!NOTE]
> Das Informationsblatt der Weltgesundheitsorganisation [Disability and health](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health) gibt an, dass „über eine Milliarde Menschen, etwa 15 % der Weltbevölkerung, irgendeine Form von Behinderung haben“ und „zwischen 110 Millionen und 190 Millionen Erwachsene erhebliche Schwierigkeiten bei der Ausführung haben“.

### Menschen mit Sehbehinderungen

Menschen mit Sehbehinderungen umfassen Personen mit Blindheit, Sehschwäche und Farbenblindheit. Viele Menschen mit Sehbehinderungen nutzen Bildschirmvergrößerungen, die entweder physische Vergrößerungen oder Software-Zoom-Funktionen sind. Die meisten Browser und Betriebssysteme haben heutzutage Zoom-Funktionen. Einige Benutzer sind auf Screenreader angewiesen, Software, die digitalen Text vorliest. Zu den Screenreader-Beispielen gehören:

- Kostenpflichtige kommerzielle Produkte wie [JAWS](https://vispero.com/jaws-screen-reader-software/) (Windows) und [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows).
- Kostenlose Produkte wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- Software, die in das Betriebssystem integriert ist, wie [VoiceOver](https://www.apple.com/accessibility/features/?vision) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-US/accessibility/windows/narrator/complete-guide-to-narrator) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf ChromeOS) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Es ist eine gute Idee, sich mit Screenreadern vertraut zu machen; Sie sollten auch einen Screenreader einrichten und damit experimentieren, um eine Vorstellung davon zu bekommen, wie er funktioniert. Siehe unsere [Screenreader-Tutorials](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für weitere Details zur Verwendung. Das untenstehende Video bietet auch ein kurzes Beispiel dafür, wie das Erlebnis ist.

{{EmbedYouTube("IK97XMibEws")}}

Nach Schätzungen der Weltgesundheitsorganisation sind „weltweit 285 Millionen Menschen sehbehindert: 39 Millionen sind blind und 246 Millionen haben Sehschwäche.“ (siehe [Sehbehinderung und Blindheit](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)). Das ist eine große und bedeutende Nutzergruppe, die Sie aufgrund einer unsachgemäßen Codierung Ihrer Website verpassen – fast so groß wie die Bevölkerungsgröße der Vereinigten Staaten.

### Menschen mit Hörbehinderungen

[Taube und schwerhörige (DHH)](https://www.nad.org/resources/american-sign-language/community-and-culture-frequently-asked-questions/) Menschen haben unterschiedlich starke Hörverluste, die von mild bis schwerwiegend reichen. Obwohl einige ATs verwenden (siehe [Assistive Devices for People with Hearing, Voice, Speech, or Language Disorders](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), sind diese nicht weit verbreitet.

Um Zugang zu bieten, müssen textuelle Alternativen bereitgestellt werden. Videos sollten manuell untertitelt werden, und es sollten Transkripte für Audioinhalte bereitgestellt werden. Darüber hinaus sollte aufgrund hoher [Sprachdeprivation](https://epicspecialeducationstaffing.com/language-deprivation/#:~:text=Language%20deprivation%20is%20the%20term,therefore%20not%20exposed%20to%20language.) in DHH-Populationen [Textvereinfachung in Betracht gezogen werden](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/).

Taube und schwerhörige Menschen stellen ebenfalls eine bedeutende Nutzergruppe dar – „466 Millionen Menschen weltweit haben eine Hörbehinderung“, so das Informationsblatt der Weltgesundheitsorganisation [Taubheit und Hörverlust](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss).

### Menschen mit Mobilitätsbeeinträchtigungen

Diese Menschen haben Behinderungen, die die Bewegung betreffen, was rein physische Probleme (wie Verlust einer Gliedmaße oder Lähmung) oder neurologische/genetische Störungen, die zu Schwäche oder Kontrollverlust in den Gliedmaßen führen, umfassen kann. Einige Menschen könnten Schwierigkeiten haben, die genauen Handbewegungen zu machen, die erforderlich sind, um eine Maus zu verwenden, während andere schwerer betroffen sein könnten, vielleicht sind sie erheblich gelähmt bis zu dem Punkt, an dem sie einen [Kopfzeiger](https://www.performancehealth.com/adjustable-headpointer) verwenden müssen, um mit Computern zu interagieren.

Diese Art von Behinderung kann auch durch das Alter und nicht durch ein bestimmtes Trauma oder eine bestimmte Erkrankung entstehen und könnte auch durch Hardwarebeschränkungen zustande kommen – einige Benutzer haben möglicherweise keine Maus.

Wie sich dies normalerweise auf die Webentwicklung auswirkt, ist die Anforderung, dass Bedienelemente über die Tastatur zugänglich sind – wir werden die Tastaturzugänglichkeit in späteren Artikeln in diesem Modul diskutieren, aber es ist eine gute Idee, einige Websites nur mit der Tastatur zu testen, um zu sehen, wie Sie zurechtkommen. Können Sie z. B. mit der Tabulatortaste zwischen den verschiedenen Steuerelementen eines Webformulars wechseln? Weitere Details zu Tastatursteuerungen finden Sie in unserem Abschnitt [Verwenden Sie nach Möglichkeit semantische UI-Steuerungen](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible).

Was die Statistik betrifft, hat eine erhebliche Anzahl von Menschen Mobilitätsbeeinträchtigungen. Die US-Behörde Centers for Disease Control and Prevention berichtet im Abschnitt [Behinderung und Funktionieren (Nichtinstitutionalisierte Erwachsene ab 18 Jahren)](https://www.cdc.gov/nchs/fastats/disability.htm) der USA: „Prozentsatz der Erwachsenen mit irgendeiner physischen Funktionsbeeinträchtigung: 16,1 %“.

### Menschen mit kognitiven Beeinträchtigungen

Kognitive Beeinträchtigungen beziehen sich auf ein breites Spektrum von Behinderungen, von Menschen mit intellektuellen Behinderungen, die die am stärksten eingeschränkten Fähigkeiten haben, bis hin zu uns allen, die wir im Alter Schwierigkeiten haben, zu denken und sich zu erinnern. Das Spektrum umfasst Menschen mit psychischen Erkrankungen wie [Depressionen](https://www.nimh.nih.gov/health/topics/depression) und [Schizophrenie](https://www.nimh.nih.gov/health/topics/schizophrenia). Es umfasst auch Menschen mit Lernbehinderungen wie [Dyslexie](https://www.nichd.nih.gov/health/topics/learningdisabilities) und [Aufmerksamkeitsdefizit-Hyperaktivitätsstörung](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd). Wichtig ist, dass Menschen mit kognitiven Beeinträchtigungen, obwohl es innerhalb klinischer Definitionen von kognitiven Beeinträchtigungen eine große Vielfalt gibt, ein gemeinsames Set von funktionellen Problemen erleben. Dazu gehören Schwierigkeiten beim Verstehen von Inhalten, beim Erinnern, wie Aufgaben ausgeführt werden, und Verwirrung durch inkonsistente Webseitenlayouts.

Eine gute Grundlage für Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Lieferung von Inhalten auf mehr als eine Weise, zum Beispiel durch Text-zu-Sprache oder Video.
- Leicht verständliche Inhalte, wie Text, der mit einfachen Sprachstandards verfasst ist.
- Fokussierung auf wichtige Inhalte.
- Minimierung von Ablenkungen, wie unnötige Inhalte oder Werbung.
- Konsistentes Webseiten-Layout und Navigation.
- Vertraute Elemente, wie unterstrichene Links in Blau, wenn sie nicht besucht wurden, und Lila, wenn sie besucht wurden.
- Aufteilung von Prozessen in logische, wesentliche Schritte mit Fortschrittsanzeigen.
- Einfache Website-Authentifizierung ohne Sicherheitskompromisse.
- Einfach auszufüllende Formulare, zum Beispiel mit klaren Fehlermeldungen und einfacher Fehlerbehebung.

### Hinweise

- Das Design mit [kognitiver Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility) wird zu guten Designpraktiken führen. Sie werden allen zugutekommen.
- Viele Menschen mit kognitiven Beeinträchtigungen haben auch physische Behinderungen. Websites müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) der W3C entsprechen, einschließlich der [kognitiven Zugänglichkeitsrichtlinien](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility#wcag_guidelines).
- Die W3C's [Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/) erstellt Leitlinien zur Web-Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive-Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die US-Zentren für Krankheitskontrolle schätzen, dass ab 2018 1 von 4 US-Bürgern eine Behinderung hat und unter ihnen ist [kognitive Beeinträchtigung am häufigsten bei jungen Menschen](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden einige intellektuelle Behinderungen historisch als "mentale Retardierung" bezeichnet. Viele betrachten diesen Begriff jetzt als abwertend, daher sollte seine Verwendung vermieden werden.
- Im Vereinigten Königreich werden einige geistige Behinderungen als „Lernbehinderungen“ oder „Lernschwierigkeiten“ bezeichnet.

## Implementierung der Barrierefreiheit in Ihrem Projekt

Ein weit verbreiteter Mythos über Barrierefreiheit ist, dass Barrierefreiheit eine teure „zusätzliche Ergänzung“ ist, die in einem Projekt umgesetzt werden muss. Dieser Mythos _kann_ tatsächlich wahr sein, wenn entweder:

- Sie versuchen, Barrierefreiheit auf eine bestehende Website nachzurüsten, die erhebliche Barrierefreiheitsprobleme hat.
- Sie beginnen erst in den späten Phasen eines Projekts, sich mit Barrierefreiheit zu beschäftigen und decken dabei zusammenhängende Probleme auf.

Wenn Sie jedoch von Anfang an Barrierefreiheit berücksichtigen, sollten die Kosten für die meisten Inhalte recht minimal sein.

Berücksichtigen Sie bei der Planung Ihres Projekts die Barrierefreiheitstests in Ihrem Testregime, genauso wie beim Testen anderer wichtiger Zielgruppensegmente (z. B. Ziel-Desktops oder mobile Browser). Testen Sie früh und oft, idealerweise mit automatisierten Tests, um programmatisch erkennbare fehlende Funktionen zu identifizieren (wie fehlende Bild-[Alternativtexte](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) oder schlechten Linktext – siehe [Verwenden Sie aussagekräftige Textetiketten](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels)) und führen Sie einige Tests mit behinderten Nutzergruppen durch, um zu sehen, wie gut komplexere Website-Funktionen für sie funktionieren. Zum Beispiel:

- Ist mein Datumsauswahl-Widget für Benutzer von Screenreadern nutzbar?
- Wenn Inhalte dynamisch aktualisiert werden, wissen sehbehinderte Personen davon?
- Sind meine UI-Schaltflächen für Benutzer von Tastatur und Touch-Oberfläche zugänglich?

Sie können und sollten eine Liste potenzieller Problembereiche in Ihren Inhalten führen, die Arbeit erfordern, um sie zugänglich zu machen, sicherstellen, dass sie gründlich getestet werden, und über Lösungen/Alternativen nachdenken. Textinhalte sind (wie Sie im nächsten Artikel sehen werden) einfach, aber was ist mit Ihren multimedialen Inhalten und Ihren beeindruckenden 3D-Grafiken? Sie sollten Ihr Projektbudget prüfen und überlegen, welche Lösungen Sie haben, um solche Inhalte zugänglich zu machen. Die Transkription all Ihrer multimedialen Inhalte ist eine Option, die, obwohl teuer, möglich ist.

Seien Sie auch realistisch. „100% Barrierefreiheit“ ist ein unerreichbares Ideal – Sie werden immer auf irgendeine Art von Randfall stoßen, der dazu führt, dass ein bestimmter Benutzer bestimmte Inhalte schwierig zu nutzen findet – aber Sie sollten so viel wie möglich tun. Wenn Sie planen, eine beeindruckende 3D-Kuchendiagramm-Grafik mit WebGL zu verwenden, möchten Sie möglicherweise eine Datentabelle als zugängliche alternative Darstellung der Daten hinzufügen. Oder Sie möchten möglicherweise nur die Tabelle hinzufügen und das 3D-Kuchendiagramm entfernen – die Tabelle ist für alle zugänglich, schneller zu codieren, weniger CPU-intensiv und einfacher zu warten.

Andererseits, wenn Sie an einer Galerieseite arbeiten, die interessante 3D-Kunst zeigt, wäre es unvernünftig zu erwarten, dass jedes Kunstwerk perfekt für sehbeeinträchtigte Menschen zugänglich ist, da es sich um ein völlig visuelles Medium handelt.

Um zu zeigen, dass Ihnen Barrierefreiheit wichtig ist und dass Sie darüber nachgedacht haben, veröffentlichen Sie eine Barrierefreiheits-Erklärung auf Ihrer Website, die darlegt, was Ihre Politik in Bezug auf Barrierefreiheit ist und welche Schritte Sie unternommen haben, um die Seite zugänglich zu machen. Wenn jemand Sie darauf hinweist, dass Ihre Website ein Barrierefreiheitsproblem hat, beginnen Sie einen Dialog mit ihm, seien Sie einfühlsam und unternehmen Sie angemessene Schritte, um das Problem zu beheben.

Zusammenfassend:

- Berücksichtigen Sie Barrierefreiheit von Anfang an in einem Projekt und testen Sie frühzeitig und oft. Genauso wie bei jedem anderen Fehler wird ein Barrierefreiheitsproblem umso teurer zu beheben, je später es entdeckt wird.
- Bedenken Sie, dass viele Best Practices für Barrierefreiheit allen zugutekommen, nicht nur Nutzern mit Behinderungen. Zum Beispiel ist schlankes, semantisches Markup nicht nur gut für Screenreader, sondern auch schnell zu laden und leistungsstark. Dies kommt allen zugute, insbesondere denen mit mobilen Geräten und/oder langsamen Verbindungen.
- Veröffentlichen Sie eine Barrierefreiheits-Erklärung auf Ihrer Site und treten Sie mit Menschen in Kontakt, die Probleme haben.

## Barrierefreiheitsrichtlinien und das Gesetz

Es gibt zahlreiche Checklisten und Richtlinien, die die Grundlage für Barrierefreiheitstests bilden können, was auf den ersten Blick überwältigend erscheinen mag. Unser Rat ist, sich mit den grundlegenden Bereichen vertraut zu machen, in denen Sie vorsichtig sein müssen, sowie die Strukturen der für Sie wichtigsten Richtlinien auf hoher Ebene zu verstehen.

- Zunächst hat das W3C ein umfangreiches und sehr detailliertes Dokument veröffentlicht, das sehr präzise, technologieunabhängige Kriterien für die Einhaltung der Barrierefreiheit enthält. Diese werden die [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) genannt und sind keineswegs eine kurze Lektüre. Die Kriterien sind in vier Hauptkategorien unterteilt, die spezifizieren, wie Implementierungen wahrnehmbar, bedienbar, verständlich und robust gemacht werden können. Der beste Ort für einen leichten Einstieg ist [WCAG at a Glance](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). Es ist nicht notwendig, alle WCAG-Kriterien zu lernen – seien Sie sich der großen Bedenkenbereiche bewusst und nutzen Sie verschiedene Techniken und Werkzeuge, um Bereiche hervorzuheben, die nicht mit den WCAG-Kriterien konform sind (siehe unten für mehr).
- Ihr Land kann auch spezielle gesetzliche Vorgaben haben, die die Notwendigkeit regeln, dass Websites, die ihrer Bevölkerung dienen, zugänglich sein müssen – zum Beispiel [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) in der EU, [Section 508 of the Rehabilitation Act](https://www.section508.gov/training/) in den USA, [Verordnung zur barrierefreien Informationstechnik](https://www.aktion-mensch.de/inklusion/barrierefreiheit/barrierefreie-website) in Deutschland, die [Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) im Vereinigten Königreich, [Accessibilità](https://www.agid.gov.it/it/ambiti-intervento/accessibilita-usabilita) in Italien, das [Disability Discrimination Act](https://humanrights.gov.au/resource-hub/by-resource-type/guidelines-and-standards/guides-and-standards-disability-rights/guidelines-equal-access-digital-goods-and-services) in Australien usw. Das W3C führt eine Liste der [Web Accessibility Laws & Policies](https://www.w3.org/WAI/policies/) nach Ländern.

Während die WCAG also ein Satz von Richtlinien ist, wird Ihr Land wahrscheinlich Gesetze haben, die die Barrierefreiheit im Web regeln, oder zumindest die Zugänglichkeit von Diensten, die der Öffentlichkeit zugänglich sind (was Websites, Fernsehen, physische Räume usw. einschließen könnte). Es ist eine gute Idee, herauszufinden, welche Ihre Gesetze sind. Wenn Sie keinen Versuch unternehmen, zu überprüfen, ob Ihre Inhalte zugänglich sind, könnten Sie rechtlich haftbar gemacht werden, wenn sich jemand beschwert.

Das klingt ernst, aber wirklich müssen Sie nur Barrierefreiheit als Hauptpriorität Ihrer Webentwicklungspraktiken betrachten, wie oben skizziert. Im Zweifelsfall holen Sie Rat bei einem qualifizierten Anwalt ein. Wir werden hier keinen weiteren Rat geben, da wir keine Anwälte sind.

## Barrierefreiheits-APIs

Webbrowser nutzen spezielle **Barrierefreiheits-APIs** (bereitgestellt vom zugrunde liegenden Betriebssystem), die Informationen offenlegen, die für assistive Technologien (ATs) nützlich sind – ATs neigen größtenteils dazu, semantische Informationen zu nutzen, sodass diese Informationen Dinge wie Stilinformationen oder JavaScript nicht enthalten. Diese Informationen sind in einem Informationsbaum strukturiert, der **Barrierefreiheits-Baum** genannt wird.

Verschiedene Betriebssysteme haben unterschiedliche Barrierefreiheits-APIs verfügbar:

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- macOS: NSAccessibility
- Linux: AT-SPI
- Android: Zugänglichkeits-Framework
- iOS: UIAccessibility

Wo die native semantische Information, die von den HTML-Elementen in Ihren Web-Apps bereitgestellt wird, fehlt, können Sie sie mit Funktionen aus der [WAI-ARIA-Spezifikation](https://w3c.github.io/aria/) ergänzen, die semantische Informationen zum Barrierefreiheits-Baum hinzufügen, um die Barrierefreiheit zu verbessern. Sie können viel mehr über WAI-ARIA in unserem Artikel [WAI-ARIA Grundlagen](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) erfahren.

## Zusammenfassung

Dieser Artikel sollte Ihnen einen nützlichen Überblick über Barrierefreiheit gegeben haben, gezeigt haben, warum sie wichtig ist, und wie Sie sie in Ihren Workflow integrieren können. Sie sollten jetzt auch ein Verlangen danach haben, mehr über die Implementierungsdetails zu erfahren, die Websites zugänglich machen können, und welche Werkzeuge dabei helfen. Wir werden im nächsten Artikel auf Barrierefreiheitstools eingehen.

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
  - [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  - [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  - [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  - [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

- [Google Chrome hat eine Auto-Untertitel-Erweiterung veröffentlicht](https://blog.google/products-and-platforms/products/chrome/live-caption-chrome/)

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}
