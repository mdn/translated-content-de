---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Core/Accessibility/What_is_accessibility
l10n:
  sourceCommit: f8ef875113a7d3e9952f41de68be1e3a3a1e6988
---

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}

Dieser Artikel startet das Modul mit einem fundierten Blick darauf, was Barrierefreiheit ist – dieser Überblick umfasst, welche Personengruppen wir berücksichtigen müssen und warum, welche Werkzeuge verschiedene Menschen nutzen, um mit dem Web zu interagieren, und wie wir Barrierefreiheit in unseren Webentwicklungs-Workflow integrieren können.

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
          <li>Der Zweck der Barrierefreiheit – erhöhter Zugang zu digitalen Diensten für Personen mit besonderen Bedürfnissen, verbesserte Benutzerfreundlichkeit für alle, bessere SEO und ein breiteres Zielpublikum.</li>
          <li>Bewusstsein für die gesetzlichen Anforderungen an die Barrierefreiheit.</li>
          <li>Dass Barrierefreiheit von Beginn eines Projekts an berücksichtigt werden sollte und nicht nachträglich hinzugefügt werden sollte.</li>
          <li>Vertrautheit mit den Konformitätskriterien der Web Content Accessibility Guidelines (WCAG).</li>
          <li>Bewusstsein für Barrierefreiheits-APIs und deren Zweck.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist also Barrierefreiheit?

Barrierefreiheit ist die Praxis, Ihre Websites so zu gestalten, dass sie von möglichst vielen Menschen genutzt werden können. Traditionell denken wir dabei an Menschen mit Behinderungen, aber die Praxis des barrierefreien Gestaltens von Websites kommt auch anderen Gruppen zugute, wie zum Beispiel Nutzern mobiler Geräte oder solchen mit langsamen Netzwerkverbindungen.

Man könnte Barrierefreiheit auch als die Behandlung aller Menschen gleich ansehen und ihnen gleiche Chancen geben, unabhängig von ihren Fähigkeiten oder Umständen. So wie es falsch ist, jemanden aus einem Gebäude auszusperren, weil er im Rollstuhl sitzt (moderne öffentliche Gebäude haben in der Regel Rollstuhlrampen oder Aufzüge), ist es auch nicht richtig, jemanden aufgrund einer Sehbehinderung von einer Website auszuschließen. Wir sind alle unterschiedlich, aber wir sind alle Menschen und haben daher die gleichen Menschenrechte.

Barrierefreiheit ist das Richtige. Die Bereitstellung barrierefreier Seiten ist in einigen Ländern gesetzlich vorgeschrieben, was Märkte erschließen kann, die andernfalls Ihre Dienstleistungen nicht nutzen oder Ihre Produkte nicht kaufen könnten.

Der Bau barrierefreier Websites kommt allen zugute:

- Semantisches HTML, das die Barrierefreiheit verbessert, verbessert auch die SEO, wodurch Ihre Website besser auffindbar wird.
- Sich um Barrierefreiheit zu kümmern, zeigt gute Ethik und Moral, was Ihr öffentliches Image verbessert.
- Andere gute Praktiken, die die Barrierefreiheit verbessern, machen Ihre Website außerdem für andere Gruppen nutzbarer, wie z.B. Nutzer von Mobiltelefonen oder solche mit niedriger Netzgeschwindigkeit. Tatsächlich kann jeder von vielen solchen Verbesserungen profitieren.
- Haben wir schon erwähnt, dass es in einigen Regionen gesetzlich vorgeschrieben ist?

## Welche Arten von Behinderungen betrachten wir?

Menschen mit Behinderungen sind genauso vielfältig wie Menschen ohne Behinderungen, und ebenso sind es ihre Behinderungen. Die wichtigste Lektion hier ist, über den eigenen Computer und die eigene Nutzung des Webs hinauszudenken und damit zu beginnen, zu lernen, wie andere es nutzen — _Sie sind nicht Ihre Benutzer_. Die Haupttypen von Behinderungen, die zu berücksichtigen sind, werden unten erklärt, zusammen mit speziellen Werkzeugen, die sie zur Nutzung von Webinhalten verwenden (bekannt als **assistive technologies**, oder **ATs**).

> [!NOTE]
> Das Informationsblatt der Weltgesundheitsorganisation [Disability and health](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health) besagt, dass "über eine Milliarde Menschen, etwa 15% der Weltbevölkerung, irgendeine Form von Behinderung haben", und "zwischen 110 Millionen und 190 Millionen Erwachsene haben erhebliche Funktionsschwierigkeiten".

### Menschen mit Sehbehinderungen

Menschen mit Sehbehinderungen umfassen Blinde, Menschen mit eingeschränktem Sehvermögen und Farbenblinde. Viele sehbehinderte Menschen nutzen Bildschirmvergrößerer, die entweder physische Vergrößerer oder Software-Zoommöglichkeiten sind. Die meisten Browser und Betriebssysteme haben heute Zoomfunktionen. Einige Nutzer sind auf Bildschirmleser angewiesen, Software, die digitalen Text laut vorliest. Beispiele für Bildschirmleser sind:

- Kostenpflichtige kommerzielle Produkte, wie [JAWS](https://vispero.com/jaws-screen-reader-software/) (Windows) und [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows).
- Kostenlose Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome), und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- In das Betriebssystem integrierte Software, wie [VoiceOver](https://www.apple.com/accessibility/features/?vision) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf ChromeOS), und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Es ist eine gute Idee, sich mit Bildschirmlesern vertraut zu machen; Sie sollten auch einen Bildschirmleser einrichten und damit experimentieren, um eine Vorstellung davon zu bekommen, wie er funktioniert. Siehe unsere [Bildschirmleser-Tutorials](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für weitere Details zur Nutzung. Im folgenden Video wird ebenfalls ein kurzes Beispiel dafür gezeigt, wie das Erlebnis aussieht.

{{EmbedYouTube("IK97XMibEws")}}

Laut Statistiken schätzt die Weltgesundheitsorganisation, dass "weltweit etwa 285 Millionen Menschen sehbehindert sind: 39 Millionen sind blind und 246 Millionen habe niedrige Sehfähigkeit." (siehe [Visuelle Beeinträchtigung und Blindheit](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)). Das ist eine große und bedeutende Benutzerpopulation, die man einfach verpassen könnte, weil Ihre Website nicht ordnungsgemäß codiert ist – fast in der gleichen Größenordnung wie die Bevölkerung der Vereinigten Staaten von Amerika.

### Menschen mit Hörbehinderungen

[Taube und schwerhörige Menschen (DHH)](https://www.nad.org/resources/american-sign-language/community-and-culture-frequently-asked-questions/) haben verschiedene Grade von Hörverlust, die von leicht bis tiefgreifend reichen. Obwohl einige Hilfstechnologien verwenden (siehe [Assistive Devices for People with Hearing, Voice, Speech, or Language Disorders](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), sind diese nicht weit verbreitet.

Um Zugang zu bieten, müssen textuelle Alternativen bereitgestellt werden. Videos sollten manuell untertitelt werden, und für Audiomaterial sollten Transkriptionen bereitgestellt werden. Aufgrund der hohen Sprachdeprivation in der DHH-Population [sollte Textvereinfachung in Betracht gezogen werden](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/).

Taube und schwerhörige Menschen stellen ebenfalls eine bedeutende Benutzerbasis dar – "466 Millionen Menschen weltweit haben eine behindernde Schwerhörigkeit", sagt das Informationsblatt der Weltgesundheitsorganisation [Taubheit und Hörverlust](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss).

### Menschen mit Mobilitätsbeeinträchtigungen

Diese Menschen haben Bewegungsbehinderungen, die rein physische Probleme (wie Verlust eines Gliedes oder Lähmung) oder neurologische/genetische Störungen umfassen können, die zu Schwäche oder Kontrollverlust in Gliedern führen. Einige Menschen haben möglicherweise Schwierigkeiten, die genauen Handbewegungen auszuführen, die zur Verwendung einer Maus erforderlich sind, während andere möglicherweise stärker betroffen sind, bis zu dem Punkt, an dem sie einen [Kopfzeiger](https://www.performancehealth.com/adjustable-headpointer) zur Interaktion mit Computern verwenden müssen.

Diese Art von Behinderung kann auch eine Folge des Alters sein, anstatt eines spezifischen Traumas oder Zustands, und es könnte auch durch Hardwarebeschränkungen verursacht werden — einige Benutzer haben möglicherweise keine Maus.

Diese Notwendigkeit wirkt sich normalerweise auf Webentwicklungsarbeit aus, indem Steuerungselemente zugänglich per Tastatur gemacht werden – wir werden die Tastaturzugänglichkeit in späteren Artikeln in diesem Modul besprechen, aber es ist eine gute Idee, einige Websites nur mit der Tastatur zu testen, um zu sehen, wie Sie zurechtkommen. Können Sie beispielsweise mit der Tabulatortaste durch die verschiedenen Steuerelemente eines Webformulars navigieren? Weitere Details zu Tastatursteuerungen finden Sie in unserem Abschnitt [Verwenden Sie nach Möglichkeit semantische UI-Steuerelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible).

Laut Statistiken haben eine beträchtliche Anzahl von Menschen Mobilitätsbeeinträchtigungen. Die US-Zentren für Krankheitskontrolle und Prävention [Behinderung und Funktion (nicht-institutionalisierte Erwachsene ab 18 Jahren)](https://www.cdc.gov/nchs/fastats/disability.htm) berichten, dass in den USA "der Prozentsatz der Erwachsenen mit jeglicher körperlichen Funktionsbehinderung: 16,1% beträgt".

### Menschen mit kognitiven Beeinträchtigungen

Kognitive Beeinträchtigung bezieht sich auf ein breites Spektrum an Behinderungen, von Menschen mit geistigen Behinderungen, die die am stärksten eingeschränkten Fähigkeiten haben, bis hin zu allen von uns, wenn wir älter werden und Schwierigkeiten haben, zu denken und sich zu erinnern. Das Spektrum umfasst Menschen mit psychischen Erkrankungen, wie [Depression](https://www.nimh.nih.gov/health/topics/depression) und [Schizophrenie](https://www.nimh.nih.gov/health/topics/schizophrenia). Es umfasst auch Menschen mit Lernschwierigkeiten, wie [Dyslexie](https://www.nichd.nih.gov/health/topics/learningdisabilities) und [Aufmerksamkeitsdefizit-Hyperaktivitätsstörung](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd). Obwohl es bei klinischen Definitionen kognitiver Beeinträchtigungen viel Vielfalt gibt, erleben Menschen mit diesen eine gemeinsame Reihe funktionaler Probleme. Dazu gehören Schwierigkeiten beim Verstehen von Inhalten, sich an Aufgaben zu erinnern und Verwirrung, die durch inkonsistente Webseitenlayouts verursacht wird.

Eine gute Grundlage der Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Inhalte auf mehr als eine Weise bereitzustellen, z.B. durch Text-zu-Sprache oder Video.
- Leicht verständliche Inhalte, z.B. Texte, die unter Verwendung von Einfachsprachstandards geschrieben sind.
- Wichtige Inhalte in den Fokus zu stellen.
- Ablenkungen zu minimieren, wie unnötige Inhalte oder Werbung.
- Konsistente Webseitenlayout und Navigation.
- Vertraute Elemente, wie unterstrichene Links, die blau sind, wenn sie nicht besucht wurden, und lila, wenn sie besucht wurden.
- Prozesse in logische, wesentliche Schritte mit Fortschrittsanzeigen aufzuteilen.
- Die Website-Authentifizierung so einfach wie möglich zu gestalten, ohne die Sicherheit zu beeinträchtigen.
- Formulare einfach auszufüllen, z.B. mit klaren Fehlermeldungen und einfacher Fehlerbehebung.

### Hinweise

- Das Designen mit [kognitiver Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility) wird zu guten Designpraktiken führen. Diese werden allen zugute kommen.
- Viele Menschen mit kognitiven Beeinträchtigungen haben auch physische Beeinträchtigungen. Websites müssen der W3C-Richtlinie [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) entsprechen, einschließlich [kognitiver Zugänglichkeitsrichtlinien](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility#wcag_guidelines).
- Die W3C [Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/) erstellt Webzugänglichkeitsrichtlinien für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive-Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die US-Zentren für Krankheitskontrolle schätzen, dass seit 2018 1 von 4 US-Bürgern eine Behinderung hat und davon ist [kognitive Beeinträchtigung die häufigste bei jungen Menschen](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden einige intellektuelle Beeinträchtigungen historisch als "mentale Retardierung" bezeichnet. Viele betrachten diesen Begriff jetzt als abschätzig, daher sollte er vermieden werden.
- Im Vereinigten Königreich werden einige intellektuelle Beeinträchtigungen als "Lernbehinderungen" oder "Lernschwierigkeiten" bezeichnet.

## Implementierung von Barrierefreiheit in Ihr Projekt

Ein häufiger Mythos zur Barrierefreiheit besteht darin, dass Barrierefreiheit eine teure "zusätzliche" Umsetzung in einem Projekt darstellt. Dieser Mythos _kann_ tatsächlich zutreffen, wenn entweder:

- Sie versuchen, Barrierefreiheit nachträglich in eine bestehende Website einzubauen, die erhebliche Zugänglichkeitsprobleme aufweist.
- Sie erst spät im Projektverlauf anfangen, sich mit Barrierefreiheit zu befassen und damit zusammenhängende Probleme aufdecken.

Wenn Sie jedoch Barrierefreiheit von Anfang an berücksichtigen, sollten die Kosten für die Bereitstellung von zugänglichen Inhalten relativ gering sein.

Wenn Sie Ihr Projekt planen, berücksichtigen Sie Barrierefreiheitstests in Ihren Testplan, genauso wie Sie Tests für andere wichtige Zielgruppen-Segmente planen (z.B. für Desktop- oder mobile Browser). Testen Sie früh und oft und führen Sie idealerweise automatisierte Tests durch, um programmatisch erkennbare fehlende Funktionen zu identifizieren (wie fehlender Bild [Alternativtext](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) oder nichtssagender Linktext – siehe [Bedeutungsvolle Textbezeichnungen verwenden](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels)) und führen Sie einige Tests mit behinderten Nutzergruppen durch, um zu sehen, wie gut komplexere Website-Funktionen für sie funktionieren. Zum Beispiel:

- Ist mein Datumswähler-Widget für Benutzer von Bildschirmlesern nutzbar?
- Wenn Inhalte dynamisch aktualisiert werden, wissen sehbehinderte Menschen davon?
- Sind meine UI-Schaltflächen sowohl für Tastatur- als auch für Touchscreen-Benutzer zugänglich?

Sie können und sollten mögliche Problemfelder in Ihren Inhalten notieren, die überarbeitet werden müssen, um sie zugänglich zu machen. Stellen Sie sicher, dass diese gründlich getestet werden, und denken Sie über Lösungen/Alternativen nach. Textinhalte (wie Sie im nächsten Artikel sehen werden) sind einfach, aber was ist mit Ihren Multimedia-Inhalten und Ihren aufwendigen 3D-Grafiken? Sie sollten Ihr Projektbudget überprüfen und überlegen, welche Lösungen Ihnen zur Verfügung stehen, um solche Inhalte zugänglich zu machen. Eine Möglichkeit, alle Ihre Multimedia-Inhalte transkribieren zu lassen, ist zwar teuer, aber machbar.

Seien Sie auch realistisch. "100% Barrierefreiheit" ist ein unerreichbares Ideal – es wird immer irgendeine Art von Randfall geben, bei dem ein bestimmter Benutzer bestimmte Inhalte schwer verwenden kann – aber Sie sollten so viel tun, wie Sie können. Wenn Sie planen, ein aufwendiges 3D-Tortendiagramm zu erstellen, das mit WebGL gemacht wurde, möchten Sie vielleicht zusätzlich eine Datentabelle als zugängliche alternative Darstellung der Daten einfügen. Oder vielleicht möchten Sie einfach die Tabelle einfügen und das 3D-Tortendiagramm entfernen — die Tabelle ist für alle zugänglich, schneller zu codieren, weniger CPU-intensiv und einfacher zu pflegen.

Andererseits, wenn Sie an einer Galerie-Website arbeiten, die interessante 3D-Kunst zeigt, wäre es unvernünftig zu erwarten, dass jedes Kunstwerk perfekt für sehbehinderte Menschen zugänglich ist, da es sich um ein rein visuelles Medium handelt.

Um zu zeigen, dass Ihnen Barrierefreiheit wichtig ist und Sie sich damit auseinandersetzen, veröffentlichen Sie eine Erklärung zur Barrierefreiheit auf Ihrer Website, die Ihre Richtlinien zur Barrierefreiheit beschreibt und welche Schritte Sie unternommen haben, um die Seite zugänglich zu machen. Wenn Ihnen jemand mitteilt, dass Ihre Website ein Barrierefreiheitsproblem hat, treten Sie in einen Dialog mit ihm, seien Sie empathisch und nehmen Sie angemessene Maßnahmen, um das Problem zu beheben.

Zusammenfassend:

- Berücksichtigen Sie Barrierefreiheit von Beginn eines Projekts an und testen Sie früh und oft. Genauso wie bei jedem anderen Bug wird ein Barrierefreiheitsproblem teurer zu beheben, je später es entdeckt wird.
- Bedenken Sie, dass viele Best Practices der Barrierefreiheit allen zugutekommen, nicht nur den Nutzern mit Behinderungen. Zum Beispiel ist lean semantisches Markup nicht nur gut für Bildschirmleser, sondern lädt auch schnell und ist performant. Dies kommt allen zugute, insbesondere denjenigen mit mobilen Geräten und/oder langsamen Verbindungen.
- Veröffentlichen Sie eine Erklärung zur Barrierefreiheit auf Ihrer Website und treten Sie in Kontakt mit Menschen, die Probleme haben.

## Richtlinien zur Barrierefreiheit und das Gesetz

Es gibt zahlreiche Checklisten und Richtliniensätze, die als Grundlage für Barrierefreiheitstests verfügbar sind, was auf den ersten Blick überwältigend erscheinen mag. Unser Rat ist, sich mit den grundlegenden Bereichen vertraut zu machen, in denen Sie Vorsicht walten lassen müssen, sowie die übergeordneten Strukturen der für Sie am relevantesten Richtlinien zu verstehen.

- Zunächst hat das W3C ein großes und sehr detailliertes Dokument veröffentlicht, das sehr präzise, technologieunabhängige Kriterien für die Barrierefreiheitskonformität enthält. Diese werden die [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) genannt, und sie sind keineswegs eine kurze Lektüre. Die Kriterien sind in vier Hauptkategorien unterteilt, die festlegen, wie Implementierungen wahrnehmbar, bedienbar, verständlich und robust gemacht werden können. Der beste Ort, um einen leichten Einstieg zu bekommen und das Lernen zu beginnen, ist [WCAG at a Glance](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). Es ist nicht notwendig, alle WCAG-Kriterien zu lernen — seien Sie sich der wichtigsten Bereiche bewusst und verwenden Sie eine Vielzahl von Techniken und Tools, um Bereiche hervorzuheben, die nicht den WCAG-Kriterien entsprechen (siehe unten für mehr).
- Ihr Land kann auch spezifische Gesetze haben, die die Notwendigkeit regeln, dass Websites, die ihrer Bevölkerung dienen, barrierefrei sein müssen — zum Beispiel [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) in der EU, [Section 508 of the Rehabilitation Act](https://www.section508.gov/training/) in den USA, [Bundesverordnung zur barrierefreien Informationstechnik](https://www.aktion-mensch.de/inklusion/barrierefreiheit/barrierefreie-website) in Deutschland, die [Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) in UK, [Accessibilità](https://www.agid.gov.it/it/ambiti-intervento/accessibilita-usabilita) in Italien, das [Disability Discrimination Act](https://humanrights.gov.au/resource-hub/resources-for-organisations-businesses/disability-resources-employers/guidelines-equal-access-digital-goods-and-services) in Australien, usw. Das W3C führt eine Liste von [Web Accessibility Laws & Policies](https://www.w3.org/WAI/policies/) nach Ländern.

Während die WCAG also eine Sammlung von Richtlinien ist, wird Ihr Land wahrscheinlich Gesetze haben, die die Barrierefreiheit von Webdiensten regeln, oder mindestens die Barrierefreiheit von öffentlichen Diensten (die Websites, Fernseher, physische Räume usw. umfassen könnten). Es ist eine gute Idee, herauszufinden, welche Gesetze in Ihrem Land gelten. Wenn Sie keinerlei Anstrengung unternehmen, um sicherzustellen, dass Ihr Inhalt zugänglich ist, könnten Sie juristisch haftbar sein, wenn Menschen sich beschweren.

Das klingt ernsthaft, aber Sie müssen tatsächlich einfach nur Barrierefreiheit als Hauptpriorität Ihrer Webentwicklungspraxis betrachten, wie oben beschrieben. Wenn Sie im Zweifel sind, holen Sie sich Ratschläge von einem qualifizierten Anwalt. Wir werden nicht mehr Ratschläge als diese geben, da wir keine Anwälte sind.

## Accessibility APIs

Webbrowser nutzen spezielle **Barrierefreiheits-APIs** (bereitgestellt vom zugrunde liegenden Betriebssystem), die Informationen bereitstellen, die für assistive Technologien (ATs) nützlich sind — ATs nutzen meistens semantische Informationen, weshalb diese Informationen Dinge wie Style-Informationen oder JavaScript nicht umfassen. Diese Informationen sind in einem Informationsstrukturbaum, der **Barrierefreiheitsbaum** genannt wird, organisiert.

Verschiedene Betriebssysteme bieten unterschiedliche Barrierefreiheits-APIs an:

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- macOS: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility framework
- iOS: UIAccessibility

Wo die native semantische Information, die von den HTML-Elementen in Ihren Web-Apps bereitgestellt wird, nicht ausreicht, können Sie diese mit Funktionen aus der [WAI-ARIA-Spezifikation](https://w3c.github.io/aria/) ergänzen, die semantische Informationen zum Barrierefreiheitsbaum hinzufügen, um die Barrierefreiheit zu verbessern. Sie können viel mehr über WAI-ARIA in unserem Artikel [WAI-ARIA Grundlagen](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) erfahren.

## Zusammenfassung

Dieser Artikel sollte Ihnen einen nützlichen Überblick über die Barrierefreiheit gegeben haben, gezeigt haben, warum sie wichtig ist, und betrachtet haben, wie sie in Ihren Workflow integriert werden kann. Sie sollten nun auch das Verlangen haben, mehr über die Implementierungsdetails zu erfahren, die Webseiten zugänglich machen können, und welche Tools dabei helfen. Wir werden uns im nächsten Artikel die Barrierefreiheits-Tools genauer ansehen.

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
  - [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  - [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  - [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  - [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

- [Google Chrome veröffentlicht ein automatisches Untertitelungs-Plugin](https://blog.google/products-and-platforms/products/chrome/live-caption-chrome/)

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}
