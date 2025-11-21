---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Core/Accessibility/What_is_accessibility
l10n:
  sourceCommit: 12b296d2b3937c45b2363f34ed8afadcf00ed166
---

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}

Dieser Artikel beginnt das Modul mit einem ausführlichen Blick darauf, was Barrierefreiheit ist — dieser Überblick beinhaltet, welche Gruppen von Menschen wir berücksichtigen müssen und warum, welche Werkzeuge verschiedene Menschen verwenden, um mit dem Web zu interagieren, und wie wir Barrierefreiheit in unseren Webentwicklungs-Workflow integrieren können.

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
          <li>Der Zweck von Barrierefreiheit — erhöhter Zugang zu digitalen Dienstleistungen für Menschen mit zusätzlichen Bedürfnissen, verbesserte Benutzerfreundlichkeit für alle, besseres SEO und ein breiteres Zielpublikum.</li>
          <li>Bewusstsein für die gesetzlichen Anforderungen an die Barrierefreiheit.</li>
          <li>Dass Barrierefreiheit von Beginn eines Projekts an berücksichtigt werden sollte und nicht nachträglich hinzugefügt werden sollte.</li>
          <li>Vertrautheit mit den WCAG-Konformitätskriterien.</li>
          <li>Bewusstsein für Barrierefreiheits-APIs und deren Zweck.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist also Barrierefreiheit?

Barrierefreiheit ist die Praxis, Ihre Websites für möglichst viele Menschen nutzbar zu machen. Traditionell denken wir dabei an Menschen mit Behinderungen, aber die Praxis der Zugänglichkeit von Websites kommt auch anderen Gruppen zugute, wie zum Beispiel Nutzern von mobilen Geräten oder solchen mit langsamen Netzwerkverbindungen.

Sie könnten Barrierefreiheit auch als Gleichbehandlung aller Menschen betrachten und ihnen gleiche Chancen geben, unabhängig von ihren Fähigkeiten oder Umständen. Genauso wie es falsch ist, jemanden vom Zugang zu einem physischen Gebäude auszuschließen, weil er im Rollstuhl sitzt (moderne öffentliche Gebäude haben in der Regel Rampen oder Aufzüge für Rollstühle), ist es auch nicht richtig, jemanden wegen einer Sehbehinderung vom Zugang zu einer Website auszuschließen. Wir sind alle verschieden, aber wir sind alle Menschen und haben daher dieselben Menschenrechte.

Barrierefreiheit ist das Richtige zu tun. In einigen Ländern ist die Bereitstellung zugänglicher Websites gesetzlich vorgeschrieben, was bedeutende Märkte erschließen kann, die ansonsten Ihre Dienste oder Produkte nicht nutzen könnten.

Barrierefreie Websites nützen allen:

- Semantisches HTML, das die Barrierefreiheit verbessert, verbessert auch SEO, sodass Ihre Website besser auffindbar ist.
- Die Berücksichtigung von Barrierefreiheit demonstriert ethisches und moralisches Verhalten, was Ihr öffentliches Image verbessert.
- Weitere gute Praktiken, die die Barrierefreiheit verbessern, machen Ihre Website auch für andere Gruppen nutzbarer, wie zum Beispiel mobile Nutzer oder solche mit niedriger Netzgeschwindigkeit. Tatsächlich können alle von vielen solchen Verbesserungen profitieren.
- Haben wir erwähnt, dass es auch in manchen Regionen gesetzlich vorgeschrieben ist?

## Welche Arten von Behinderung betrachten wir?

Menschen mit Behinderungen sind genauso vielfältig wie Menschen ohne Behinderungen, und so sind auch ihre Behinderungen. Die wichtigste Lektion hier ist, über Ihren eigenen Computer und Ihre Webnutzung hinauszudenken und zu lernen, wie andere das Web nutzen — _Sie sind nicht Ihre Nutzer_. Die Haupttypen von Behinderungen, die es zu berücksichtigen gilt, werden im Folgenden erklärt, zusammen mit den speziellen Werkzeugen, die sie verwenden, um auf Webinhalte zuzugreifen (bekannt als **Assistive Technologien**, oder **ATs**).

> [!NOTE]
> Das Informationsblatt der Weltgesundheitsorganisation [Behinderung und Gesundheit](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health) besagt, dass „über eine Milliarde Menschen, etwa 15 % der Weltbevölkerung, eine Form der Behinderung haben“ und „zwischen 110 Millionen und 190 Millionen Erwachsene erhebliche Funktionseinschränkungen haben“.

### Menschen mit Sehbehinderungen

Menschen mit Sehbehinderungen schließen Personen mit Blindheit, eingeschränktem Sehvermögen und Farbenblindheit ein. Viele Menschen mit Sehbehinderungen verwenden Bildschirmvergrößerungshilfen, entweder physische Vergrößerungslinsen oder Software-Zoom-Funktionen. Die meisten Browser und Betriebssysteme haben heutzutage Zoom-Fähigkeiten. Einige Benutzer sind auf Screenreader angewiesen — Software, die digitalen Text laut vorliest. Einige Beispiele für Screenreader sind:

- Kostenpflichtige kommerzielle Produkte, wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows) und [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows).
- Kostenlose Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- In das Betriebssystem integrierte Software, wie [VoiceOver](https://www.apple.com/accessibility/features/?vision) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf ChromeOS) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Es ist eine gute Idee, sich mit Screenreadern vertraut zu machen; Sie sollten auch einen Screenreader einrichten und damit arbeiten, um ein Gefühl dafür zu bekommen, wie er funktioniert. Sehen Sie sich unsere [Screenreader-Anleitungen](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für weitere Details zur Nutzung an. Das untenstehende Video bietet auch ein kurzes Beispiel dafür, wie das Erlebnis ist.

{{EmbedYouTube("IK97XMibEws")}}

In Bezug auf Statistiken schätzt die Weltgesundheitsorganisation, dass "weltweit schätzungsweise 285 Millionen Menschen sehbehindert sind: 39 Millionen sind blind und 246 Millionen haben eine Sehbehinderung." (siehe [Sehbehinderung und Blindheit](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)). Das ist eine große und bedeutende Nutzerbasis, die Sie verlieren, weil Ihre Website nicht richtig codiert ist — fast genauso groß wie die Bevölkerung der Vereinigten Staaten von Amerika.

### Menschen mit Hörbehinderung

[Taube und schwerhörige (DHH)](https://www.nad.org/resources/american-sign-language/community-and-culture-frequently-asked-questions/) Menschen haben unterschiedlich starke Hörverluste, die von leicht bis schwer reichen. Obwohl einige ATs verwenden (siehe [Hilfsmittel für Menschen mit Hör-, Stimm-, Sprech- oder Sprachstörungen](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), sind sie nicht weit verbreitet.

Um Zugang zu bieten, müssen Textalternativen bereitgestellt werden. Videos sollten manuell untertitelt und Transkripte für Audioinhalte bereitgestellt werden. Darüber hinaus sollte aufgrund der hohen Rate an [Sprachdeprivation](https://epicspecialeducationstaffing.com/language-deprivation/#:~:text=Language%20deprivation%20is%20the%20term,therefore%20not%20exposed%20to%20language.) in DHH-Populationen die [Textvereinfachung in Betracht gezogen werden](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/).

Taube und schwerhörige Menschen stellen ebenfalls eine bedeutende Nutzerbasis dar — "466 Millionen Menschen weltweit haben eine hörbehindernde Hörstörung", sagt das Informationsblatt der Weltgesundheitsorganisation [Gehörlosigkeit und Hörverlust](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss).

### Menschen mit Mobilitätseinschränkungen

Diese Menschen haben Behinderungen, die die Bewegung betreffen, was rein physische Probleme (wie Verlust von Gliedmaßen oder Lähmung) oder neurologische/genetische Störungen umfassen kann, die zu Schwäche oder Kontrollverlust in Gliedmaßen führen. Einige Menschen haben Schwierigkeiten, die genauen Handbewegungen auszuführen, die für die Verwendung einer Maus erforderlich sind, während andere schwerer betroffen sein können, vielleicht so stark gelähmt, dass sie einen [Kopfstab](https://www.performancehealth.com/adjustable-headpointer) benötigen, um mit Computern zu interagieren.

Diese Art von Behinderung kann auch eine Folge des Alters sein, anstatt eines bestimmten Traumas oder Zustands, und sie kann auch durch Hardwarebeschränkungen verursacht werden — einige Benutzer haben möglicherweise keine Maus.

Der übliche Einfluss auf die Webentwicklung besteht darin, dass Steuerelemente über die Tastatur zugänglich sein müssen — wir werden die Tastaturzugänglichkeit in späteren Artikeln im Modul besprechen, aber es ist eine gute Idee, einige Websites nur mit der Tastatur zu testen, um zu sehen, wie Sie zurechtkommen. Können Sie beispielsweise mit der Tabulatortaste zwischen den verschiedenen Steuerelementen eines Webformulars wechseln? Weitere Details zu Tastatursteuerungen finden Sie in unserem Abschnitt [Verwenden Sie nach Möglichkeit semantische UI-Steuerelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible).

In Bezug auf Statistiken haben viele Menschen Mobilitätseinschränkungen. Das US-amerikanische Zentrum für Krankheitskontrolle und Prävention [Behinderung und Funktion (Nicht-institutionalisierte Erwachsene ab 18 Jahren)](https://www.cdc.gov/nchs/fastats/disability.htm) berichtet, dass in den USA "16,1% der Erwachsenen Schwierigkeiten mit körperlichen Funktionen haben".

### Menschen mit kognitiven Beeinträchtigungen

Kognitive Beeinträchtigung bezieht sich auf ein breites Spektrum von Behinderungen, von Menschen mit geistigen Behinderungen, die die eingeschränktesten Fähigkeiten haben, bis hin zu uns allen, wenn wir älter werden und Schwierigkeiten haben, zu denken und sich zu erinnern. Das Spektrum umfasst Menschen mit psychischen Erkrankungen wie [Depression](https://www.nimh.nih.gov/health/topics/depression) und [Schizophrenie](https://www.nimh.nih.gov/health/topics/schizophrenia). Es umfasst auch Menschen mit Lernschwierigkeiten wie [Dyslexie](https://www.nichd.nih.gov/health/topics/learningdisabilities) und [ADHS](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd). Wichtig ist, dass es zwar innerhalb der klinischen Definitionen von kognitiven Beeinträchtigungen eine große Vielfalt gibt, aber für Menschen mit welcher auch immer davon eine gemeinsame Reihe von funktionellen Problemen auftreten. Dazu gehören Schwierigkeiten beim Verstehen von Inhalten, beim Erinnern, wie Aufgaben abgeschlossen werden, und Verwirrung durch inkonsistente Webseitenlayouts.

Ein gutes Fundament für Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Bereitstellung von Inhalten auf mehr als eine Weise, z. B. durch Text-zu-Sprache oder Video.
- Leicht verständliche Inhalte, wie z. B. Texte, die unter Verwendung von Klartextstandards geschrieben werden.
- Fokussierung auf wichtige Inhalte.
- Minimierung von Ablenkungen, wie unnötige Inhalte oder Werbung.
- Konsistentes Webseitenlayout und Navigation.
- Vertraute Elemente, wie unterstrichene Links, die blau sind, wenn sie nicht besucht wurden, und violett, wenn sie besucht wurden.
- Aufteilung von Prozessen in logische, wesentliche Schritte mit Fortschrittsanzeigen.
- Einfacher aber sicherer Website-Authentifizierungsprozess.
- Gestaltung von Formularen, die einfach auszufüllen sind, z. B. mit klaren Fehlermeldungen und einfacher Fehlerbehebung.

### Hinweise

- Entwerfen mit [kognitiver Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility) führt zu guten Designpraktiken, die allen zugutekommen.
- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Behinderungen. Websites müssen den [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) der W3C entsprechen, einschließlich [kognitiver Zugänglichkeitsrichtlinien](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility#wcag_guidelines).
- Die W3C [Arbeitsgruppe für kognitive und Lernbehinderungen](https://www.w3.org/WAI/GL/task-forces/coga/) erstellt Webstandards für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive Page](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die US-amerikanischen Zentren für Krankheitskontrolle schätzen, dass im Jahr 2018 1 von 4 US-Bürgern eine Behinderung hat und darunter [kognitive Beeinträchtigung die häufigste bei jungen Menschen ist](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden einige geistige Behinderungen historisch als "mentale Retardierung" bezeichnet. Heute wird dieser Begriff oft als abwertend betrachtet, deshalb sollte seine Verwendung vermieden werden.
- Im Vereinigten Königreich werden einige geistige Behinderungen als "Lernbehinderungen" oder "Lernschwierigkeiten" bezeichnet.

## Implementierung von Barrierefreiheit in Ihr Projekt

Ein häufiges Barrierefreiheits-Mythos ist, dass Barrierefreiheit eine teure, zusätzliche Kosten auf einem Projekt ist. Dieser Mythos kann tatsächlich _wahr_ sein, wenn entweder:

- Sie versuchen, Barrierefreiheit auf eine bestehende Website nachzurüsten, die erhebliche Barrierefreiheitsprobleme hat.
- Sie erst in den späten Phasen eines Projekts anfangen, über Barrierefreiheit nachzudenken und dann damit verbundene Probleme entdecken.

Wenn Sie jedoch Barrierefreiheit von Beginn eines Projekts an berücksichtigen, sollten die Kosten, um die meisten Inhalte barrierefrei zu gestalten, relativ gering sein.

Wenn Sie Ihr Projekt planen, berücksichtigen Sie Barrierefreiheitstests in Ihrem Testregime, genau wie Tests für jedes andere wichtige Zielgruppensegment (z. B. Ziel-Desktop- oder mobile Browser). Testen Sie früh und oft, idealerweise indem Sie automatisierte Tests durchführen, um programmatisch erkennbare fehlende Funktionen aufzudecken (wie fehlender Bild-[Alternativtext](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) oder schlechter Linktext — siehe [Verwenden Sie aussagekräftige Textbeschriftungen](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels)) und machen Sie einige Tests mit behinderten Benutzergruppen, um zu sehen, wie gut komplexere Funktionen für sie funktionieren. Beispielsweise:

- Ist mein Datumsauswahl-Widget für Menschen, die Screenreader verwenden, nutzbar?
- Wenn sich Inhalte dynamisch aktualisieren, wissen sehbehinderte Menschen davon?
- Sind meine UI-Schaltflächen sowohl für Tastatur- als auch Touch-Oberflächenbenutzer zugänglich?

Sie können und sollten potenzielle Problembereiche in Ihren Inhalten, die Arbeit benötigen, um sie barrierefrei zu machen, notieren, sicherstellen, dass sie gründlich getestet werden, und über Lösungen/Alternativen nachdenken. Textinhalte (wie Sie im nächsten Artikel sehen werden) sind einfach, aber was ist mit Ihren Multimedia-Inhalten und Ihren beeindruckenden 3D-Grafiken? Sie sollten Ihr Projektbudget prüfen und überlegen, welche Lösungen Sie zur Verfügung haben, um solche Inhalte zugänglich zu machen. Die Transkription aller Ihrer Multimedia-Inhalte ist eine Option, die, obwohl sie teuer ist, möglich ist.

Seien Sie auch realistisch. "100% Barrierefreiheit" ist ein unerreichbares Ideal — Sie werden immer auf irgendeine Art von Ausnahmefall stoßen, der dazu führt, dass ein bestimmter Nutzer bestimmte Inhalte schwierig zu verwenden findet — aber Sie sollten Ihr Bestes tun. Wenn Sie planen, ein beeindruckendes 3D-Kreisdiagramsgrafik mit WebGL einzubeziehen, könnten Sie ein Datentabelle als zugängliche Alternative zur Darstellung der Daten hinzufügen. Oder Sie entscheiden sich einfach, nur die Tabelle einzubeziehen und das 3D-Diagramm wegzulassen — die Tabelle ist für alle zugänglich, schneller zu codieren, weniger CPU-intensiv und einfacher zu pflegen.

Auf der anderen Seite, wenn Sie an einer Galerie-Website arbeiten, die interessante 3D-Kunst zeigt, wäre es unvernünftig zu erwarten, dass jedes Kunstwerk für Menschen mit Sehbehinderungen perfekt zugänglich ist, da es sich um ein ausschließlich visuelles Medium handelt.

Um zu zeigen, dass Sie sich kümmern und über Barrierefreiheit nachgedacht haben, veröffentlichen Sie eine Barrierefreiheits-Erklärung auf Ihrer Website, die darlegt, wie Ihre Politik zur Barrierefreiheit aussieht und welche Schritte Sie unternommen haben, um die Website barrierefrei zu machen. Wenn jemand Sie darauf aufmerksam macht, dass Ihre Website ein Barrierefreiheitsproblem hat, beginnen Sie einen Dialog mit der Person, zeigen Sie Empathie und ergreifen Sie angemessene Maßnahmen, um das Problem zu beheben.

Zusammenfassend:

- Berücksichtigen Sie Barrierefreiheit von Beginn eines Projekts an und testen Sie früh und oft. Wie bei jedem anderen Fehler wird ein Barrierefreiheitsproblem teurer zu beheben, je später es entdeckt wird.
- Beachten Sie, dass viele Best Practices für Barrierefreiheit allen nützen, nicht nur Nutzern mit Behinderungen. Beispielsweise ist schlankes semantisches Markup nicht nur gut für Screenreader, sondern lädt auch schnell und ist leistungsstark. Dies kommt allen zugute, insbesondere Nutzern mobiler Geräte und/oder langsamer Verbindungen.
- Veröffentlichen Sie eine Barrierefreiheits-Erklärung auf Ihrer Website und interagieren Sie mit Menschen, die Probleme haben.

## Barrierefreiheitsrichtlinien und das Gesetz

Es gibt zahlreiche Checklisten und Richtlinien, die zum Testen der Barrierefreiheit herangezogen werden können, was auf den ersten Blick überwältigend wirken kann. Unser Rat ist, sich mit den grundlegenden Bereichen vertraut zu machen, auf die Sie achten müssen, und das hohe Niveau der für Sie am relevantesten Richtlinien zu verstehen.

- Zunächst hat das W3C ein großes und sehr detailliertes Dokument veröffentlicht, das sehr präzise, technologieunabhängige Kriterien für die Einhaltung der Barrierefreiheit enthält. Diese sind als die [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) bekannt und sind keineswegs eine kurze Lektüre. Die Kriterien sind in vier Hauptkategorien unterteilt, die spezifizieren, wie Implementierungen wahrnehmbar, bedienbar, verständlich und robust gemacht werden können. Der beste Ort, um eine leichte Einführung zu erhalten und mit dem Lernen zu beginnen, ist [WCAG auf einen Blick](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). Es ist nicht notwendig, alle WCAG-Kriterien zu lernen — seien Sie sich der großen Problembereiche bewusst und verwenden Sie eine Vielzahl von Techniken und Tools, um Problemfelder hervorzuheben, die nicht den WCAG-Kriterien entsprechen (siehe unten für mehr).
- Ihr Land könnte auch spezifische Gesetze haben, die vorschreiben, dass Websites, die ihre Bevölkerung bedienen, zugänglich sein müssen — zum Beispiel [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) in der EU, [Section 508 des Rehabilitation Act](https://www.section508.gov/training/) in den USA, [Barrierefreie Informationstechnologie-Verordnung](https://www.aktion-mensch.de/inklusion/barrierefreiheit/barrierefreie-website) in Deutschland, die [Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) im Vereinigten Königreich, [Accessibilità](https://www.agid.gov.it/it/ambiti-intervento/accessibilita-usabilita) in Italien, das [Disability Discrimination Act](https://humanrights.gov.au/resource-hub/resources-for-organisations-businesses/disability-resources-employers/guidelines-equal-access-digital-goods-and-services) in Australien usw. Das W3C führt eine Liste von [Web Accessibility Laws & Policies](https://www.w3.org/WAI/policies/) nach Ländern.

Während also die WCAG eine Reihe von Richtlinien ist, wird Ihr Land wahrscheinlich Gesetze zu Barrierefreiheit im Web haben, oder zumindest die Zugänglichkeit von der Öffentlichkeit zugänglichen Dienstleistungen (was Websites, Fernsehen, physische Räume usw. umfassen könnte). Es ist eine gute Idee, herauszufinden, was Ihre Gesetze sind. Wenn Sie keine Anstrengungen unternehmen, um zu überprüfen, dass Ihre Inhalte zugänglich sind, könnten Sie rechtlich haftbar gemacht werden, wenn sich Leute beschweren.

Das klingt ernst, aber eigentlich müssen Sie Barrierefreiheit nur als Hauptpriorität Ihrer Webentwicklungspraxis betrachten, wie oben beschrieben. Wenn Sie unsicher sind, holen Sie Rat von einem qualifizierten Anwalt ein. Wir werden keinen weiteren Rat geben, denn wir sind keine Anwälte.

## Barrierefreiheits-APIs

Webbrowser nutzen spezielle **Barrierefreiheits-APIs** (bereitgestellt durch das zugrundeliegende Betriebssystem), die Informationen bereitstellen, die für Assistive Technologien (ATs) nützlich sind — ATs tendieren dazu, hauptsächlich semantische Informationen zu nutzen, daher gehören Styling-Informationen oder JavaScript nicht dazu. Diese Informationen sind in einem Informationsbaum strukturiert, dem sogenannten **Barrierefreiheitsbaum**.

Verschiedene Betriebssysteme haben unterschiedliche Barrierefreiheits-APIs verfügbar:

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- macOS: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility framework
- iOS: UIAccessibility

Wo die native semantische Information, die durch die HTML-Elemente in Ihren Web-Apps bereitgestellt wird, versagt, können Sie sie mit Funktionen aus der [WAI-ARIA-Spezifikation](https://w3c.github.io/aria/) ergänzen, die semantische Informationen zum Barrierefreiheitsbaum hinzufügen, um die Barrierefreiheit zu verbessern. Sie können im Artikel [WAI-ARIA-Grundlagen](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) mehr über WAI-ARIA erfahren.

## Zusammenfassung

Dieser Artikel sollte Ihnen einen nützlichen Überblick über Barrierefreiheit gegeben haben, warum sie wichtig ist und wie Sie sie in Ihren Workflow integrieren können. Sie sollten jetzt auch ein Interesse daran haben, die Implementierungsdetails zu lernen, die Websites zugänglich machen können, und welche Werkzeuge dabei helfen. Im nächsten Artikel werden wir uns die Barrierefreiheits-Tools ansehen.

## Weitere Informationen

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
  - [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  - [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  - [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  - [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

- [Google Chrome hat eine Erweiterung für automatische Untertitel veröffentlicht](https://blog.google/products/chrome/live-caption-chrome/)

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}
