---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Core/Accessibility/What_is_accessibility
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}

Dieser Artikel beginnt das Modul mit einem eingehenden Blick darauf, was Barrierefreiheit ist — diese Übersicht schließt ein, welche Personengruppen wir berücksichtigen müssen und warum, welche Werkzeuge unterschiedliche Menschen nutzen, um mit dem Web zu interagieren, und wie wir Barrierefreiheit in unseren Webentwicklungs-Workflow integrieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Sinn von Barrierefreiheit — verbesserter Zugang zu digitalen Diensten für Menschen mit zusätzlichen Bedürfnissen, verbesserte Benutzerfreundlichkeit für alle, besseres SEO und ein breiteres Zielpublikum.</li>
          <li>Bewusstsein für die gesetzlichen Anforderungen der Barrierefreiheit.</li>
          <li>Dass Barrierefreiheit von Anfang an in ein Projekt einbezogen und nicht am Ende hinzugefügt werden sollte.</li>
          <li>Vertrautheit mit den Konformitätskriterien der Web Content Accessibility Guidelines (WCAG).</li>
          <li>Bewusstsein für Accessibility-APIs und deren Zweck.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist also Barrierefreiheit?

Barrierefreiheit ist die Praxis, Ihre Websites für möglichst viele Menschen nutzbar zu machen. Traditionell denken wir dabei an Menschen mit Behinderungen, aber die Praxis, Websites zugänglich zu machen, kommt auch anderen Gruppen zugute, wie z. B. Menschen, die mobile Geräte nutzen, oder solchen mit langsamen Netzwerkverbindungen.

Man könnte Barrierefreiheit auch als die gleiche Behandlung aller Menschen und die Gewährung gleicher Chancen betrachten, unabhängig von ihren Fähigkeiten oder Umständen. So wie es falsch ist, jemanden wegen eines Rollstuhls von einem Gebäude auszuschließen (moderne öffentliche Gebäude haben im Allgemeinen Rampen oder Aufzüge), ist es auch nicht richtig, jemanden aufgrund einer Sehbehinderung von einer Website auszuschließen. Wir sind alle unterschiedlich, aber wir sind alle Menschen und haben daher die gleichen Menschenrechte.

Barrierefreiheit ist das Richtige. Die Bereitstellung zugänglicher Websites gehört in einigen Ländern zum Gesetz, was bedeutende Märkte eröffnen kann, die sonst Ihre Dienste nicht nutzen oder Ihre Produkte nicht kaufen könnten.

Der Bau von barrierefreien Websites kommt jedem zugute:

- Semantisches HTML, das die Barrierefreiheit verbessert, verbessert auch das SEO, was Ihre Website leichter auffindbar macht.
- Die Auseinandersetzung mit Barrierefreiheit zeigt gute Ethik und Moral, was Ihr öffentliches Image verbessert.
- Andere gute Praktiken, die die Barrierefreiheit verbessern, machen Ihre Website auch für andere Gruppen nutzbarer, wie z. B. Nutzer von Mobiltelefonen oder solche mit niedriger Netzwerkgeschwindigkeit. Tatsächlich kann jeder von vielen solchen Verbesserungen profitieren.
- Haben wir erwähnt, dass es in einigen Regionen auch gesetzlich vorgeschrieben ist?

## Welche Arten von Behinderungen betrachten wir?

Menschen mit Behinderungen sind genauso vielfältig wie Menschen ohne Behinderungen, und so sind es auch ihre Behinderungen. Die Schlüssellektion hier ist, über Ihren eigenen Computer und die Art und Weise, wie Sie das Web nutzen, hinauszudenken und zu beginnen, zu lernen, wie andere es nutzen — _Sie sind nicht Ihre Nutzer_. Die Hauptarten von Behinderungen, die wir berücksichtigen sollten, werden im Folgenden erklärt, zusammen mit den besonderen Werkzeugen, die sie zum Zugriff auf Webinhalte verwenden (bekannt als **Assistive Technologies**, oder **ATs**).

> [!NOTE]
> Das Informationsblatt der Weltgesundheitsorganisation zu [Behinderung und Gesundheit](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health) besagt, dass "über eine Milliarde Menschen, etwa 15 % der Weltbevölkerung, irgendeine Form von Behinderung haben" und "zwischen 110 Millionen und 190 Millionen Erwachsene haben erhebliche Funktionsschwierigkeiten."

### Menschen mit Sehbehinderungen

Menschen mit Sehbehinderungen umfassen Menschen mit Blindheit, geringer Sehleistung und Farbenblindheit. Viele Menschen mit Sehbehinderungen nutzen Bildschirmlupen, die entweder physische Lupen oder Software-Zoom-Funktionen sind. Die meisten Browser und Betriebssysteme verfügen heute über Zoom-Funktionen. Einige Benutzer sind auf Screenreader angewiesen, das ist Software, die digitalen Text vorliest. Einige Beispiele für Screenreader sind:

- Kostenpflichtige kommerzielle Produkte wie [JAWS](https://vispero.com/jaws-screen-reader-software/) (Windows) und [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows).
- Kostenlose Produkte wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- In das Betriebssystem integrierte Software wie [VoiceOver](https://www.apple.com/accessibility/features/?vision) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf ChromeOS) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Es ist eine gute Idee, sich mit Screenreadern vertraut zu machen; Sie sollten auch einen Screenreader einrichten und damit herumspielen, um ein Gefühl dafür zu bekommen, wie er funktioniert. Siehe unsere [Screenreader-Tutorials](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für weitere Details zur Nutzung. Das unten stehende Video bietet ebenfalls ein kurzes Beispiel für das Benutzererlebnis.

{{EmbedYouTube("IK97XMibEws")}}

In Bezug auf Statistiken schätzt die Weltgesundheitsorganisation, dass "weltweit 285 Millionen Menschen geschätzt sehbehindert sind: 39 Millionen sind blind und 246 Millionen haben eine geringe Sehkraft." (siehe [Sehbehinderung und Blindheit](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)). Das ist eine große und bedeutende Benutzergruppe, die Sie einfach verpassen, weil Ihre Website nicht richtig codiert ist — fast so groß wie die Bevölkerung der Vereinigten Staaten von Amerika.

### Menschen mit Hörbehinderungen

[Taube und schwerhörige (DHH)](https://www.nad.org/resources/american-sign-language/community-and-culture-frequently-asked-questions/) Menschen haben unterschiedliche Grade des Hörverlusts, von leicht bis schwerwiegend. Obwohl einige ATs verwenden (siehe [Hilfsgeräte für Menschen mit Hör-, Sprach-, Sprech- oder Sprachstörungen](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), sind sie nicht weit verbreitet.

Um Zugang zu bieten, müssen textuelle Alternativen bereitgestellt werden. Videos sollten manuell untertitelt werden, und für Audioinhalte sollten Transkripte bereitgestellt werden. Außerdem sollte aufgrund des hohen Niveaus an [Sprachentzug](https://epicspecialeducationstaffing.com/language-deprivation/#:~:text=Language%20deprivation%20is%20the%20term,therefore%20not%20exposed%20to%20language.) in DHH-Populationen eine [Textvereinfachung in Betracht gezogen](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/) werden.

Taube und schwerhörige Menschen stellen ebenfalls eine bedeutende Benutzerbasis dar — "466 Millionen Menschen weltweit haben eine behindernde Hörbehinderung", sagt das Informationsblatt der Weltgesundheitsorganisation zu [Taubheit und Hörverlust](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss).

### Menschen mit Mobilitätseinschränkungen

Diese Menschen haben Bewegungsbehinderungen, die rein physische Probleme (wie Verlust einer Gliedmaße oder Lähmung) oder neurologische/genetische Störungen umfassen können, die zu Schwäche oder Verlust der Kontrolle über Gliedmaßen führen. Einige Menschen könnten Schwierigkeiten haben, die exakten Handbewegungen auszuführen, die zur Nutzung einer Maus erforderlich sind, während andere stärker betroffen sein könnten, bis hin zur erheblichen Lähmung, bei der sie einen [Kopfzeiger](https://www.performancehealth.com/adjustable-headpointer) zur Interaktion mit Computern verwenden müssen.

Diese Art von Behinderung kann auch eine Folge des Alters sein, anstatt einer spezifischen Verletzung oder Erkrankung, und sie kann auch durch hardwarebedingte Einschränkungen entstehen — einige Benutzer könnten keine Maus haben.

Der Einfluss dieser Behinderung auf die Webentwicklung liegt meist in der Anforderung, dass Steuerungen über die Tastatur zugänglich sind — wir werden in späteren Artikeln im Modul über Tastaturzugänglichkeit sprechen, aber es ist eine gute Idee, einige Websites nur mit der Tastatur auszuprobieren, um zu sehen, wie Sie klarkommen. Können Sie zum Beispiel mit der Tabulatortaste zwischen den verschiedenen Steuerungen eines Webformulars wechseln? Weitere Details zu Tastatursteuerungen finden Sie in unserem Abschnitt [Verwenden Sie nach Möglichkeit semantische UI-Steuerungen](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible).

In Bezug auf Statistiken haben eine signifikante Anzahl von Menschen Mobilitätsbeeinträchtigungen. Die US Centers for Disease Control and Prevention [Disability and Functioning (Nicht-institutionalisierte Erwachsene ab 18 Jahren)](https://www.cdc.gov/nchs/fastats/disability.htm) berichten: "Prozentsatz der Erwachsenen mit einer physischen Funktionsstörung: 16,1 %".

### Menschen mit kognitiven Einschränkungen

Kognitive Beeinträchtigung bezieht sich auf eine Vielzahl von Behinderungen, von Menschen mit intellektuellen Behinderungen, die die am meisten eingeschränkten Fähigkeiten haben, bis hin zu uns allen, wenn wir älter werden und Schwierigkeiten beim Denken und Erinnern haben. Die Bandbreite umfasst Menschen mit psychischen Erkrankungen, wie [Depressionen](https://www.nimh.nih.gov/health/topics/depression) und [Schizophrenie](https://www.nimh.nih.gov/health/topics/schizophrenia). Es umfasst auch Menschen mit Lernbehinderungen, wie [Legasthenie](https://www.nichd.nih.gov/health/topics/learningdisabilities) und [Aufmerksamkeitsdefizit-Hyperaktivitätsstörung](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd). Wichtig ist, dass Menschen mit kognitiven Beeinträchtigungen, obwohl es innerhalb klinischer Definitionen eine große Vielfalt gibt, eine gemeinsame Reihe von funktionalen Problemen erleben. Dazu gehören Schwierigkeiten beim Verständnis von Inhalten, das Erinnern, wie Aufgaben auszuführen sind, und Verwirrung, die durch inkonsistente Webseitenlayouts verursacht wird.

Eine gute Grundlage der Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Bereitstellung von Inhalten auf mehr als eine Weise, z. B. durch Text-zu-Sprache oder Video.
- Leicht verständliche Inhalte, wie Texte, die nach den Standards der Klartextsprache verfasst sind.
- Konzentration auf wichtige Inhalte.
- Minimierung von Ablenkungen, wie unnötige Inhalte oder Werbung.
- Konsistentes Webseitenlayout und Navigation.
- Vertraute Elemente, wie unterstrichene Links, die blau sind, wenn sie nicht besucht wurden, und lila, wenn sie besucht wurden.
- Unterteilung von Prozessen in logische, wesentliche Schritte mit Fortschrittsindikatoren.
- So einfache Website-Authentifizierung wie möglich, ohne die Sicherheit zu gefährden.
- Einfache Ausfüllbarkeit von Formularen, z. B. mit klaren Fehlermeldungen und einfacher Fehlerbehebung.

### Anmerkungen

- Das Design mit [kognitiver Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility) wird zu guten Designpraktiken führen. Sie werden jedem zugutekommen.
- Viele Menschen mit kognitiven Einschränkungen haben auch körperliche Behinderungen. Websites müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) des W3C entsprechen, einschließlich der [Richtlinien zur kognitiven Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility#wcag_guidelines).
- Die [Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/) des W3C erstellt Web-Benutzbarkeitsrichtlinien für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive-Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die US-Zentren für die Kontrolle und Prävention von Krankheiten schätzen, dass ab 2018 1 von 4 US-Bürgern eine Behinderung hat und dass [kognitive Beeinträchtigungen die häufigste bei jungen Menschen](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html) sind.
- In den USA wurden einige intellektuelle Behinderungen historisch als "geistige Behinderung" bezeichnet. Viele betrachten diesen Begriff jetzt als abwertend, daher sollte seine Verwendung vermieden werden.
- In Großbritannien werden einige intellektuelle Behinderungen als "Lernschwierigkeiten" oder "Lernbehinderungen" bezeichnet.

## Barrierefreiheit in Ihr Projekt einbinden

Ein weit verbreiteter Mythos zur Barrierefreiheit ist, dass sie als teurer "zusätzlicher Punkt" in ein Projekt eingebracht wird. Dieser Mythos kann tatsächlich _wahr_ sein, wenn entweder:

- Sie versuchen, Barrierefreiheit in eine bestehende Website zu integrieren, die erhebliche Barrierefreiheitsprobleme hat.
- Sie haben die Barrierefreiheit erst spät in einem Projekt berücksichtigt und aufgedeckte Probleme gefunden.

Wenn Sie jedoch die Barrierefreiheit von Anfang an in ein Projekt einbeziehen, sollten die Kosten zur Umsetzung der meisten Inhalte für Barrierefreiheit recht gering sein.

Planen Sie bei der Projektplanung die Barrierefreiheitstests in Ihr Testregime ein, genau wie das Testen für jedes andere wichtige Zielpublikumssegment (z. B. Ziel-Desktop- oder Mobile-Browser). Testen Sie früh und oft, idealerweise mit automatisierten Tests, um programmatisch erkennbare fehlende Funktionen zu identifizieren (wie fehlender Bild-Alternativtext oder schlechter Linktext — siehe [Verwenden Sie sinnvolle Textbeschriftungen](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels)) und einige Tests mit Benutzergruppen mit Behinderungen, um zu sehen, wie gut komplexere Website-Funktionen für sie arbeiten. Beispielsweise:

- Ist mein Datumsauswahl-Widget für Menschen mit Screenreadern nutzbar?
- Wenn Inhalte dynamisch aktualisiert werden, wissen sehbehinderte Personen davon?
- Sind meine UI-Buttons sowohl für Tastatur- als auch für Touch-Benutzer zugänglich?

Sie können und sollten sich problematische Bereiche in Ihren Inhalten notieren, die bearbeitet werden müssen, um sie barrierefrei zu machen, sicherstellen, dass diese gründlich getestet werden, und über Lösungen/Alternativen nachdenken. Textinhalte (wie Sie im nächsten Artikel sehen werden) sind einfach, aber was ist mit Ihren Multimedia-Inhalten und Ihren eindrucksvollen 3D-Grafiken? Sie sollten Ihr Projektbudget betrachten und darüber nachdenken, welche Lösungen Sie haben, um solche Inhalte barrierefrei zu machen. Die Transkription aller Multimedia-Inhalte ist eine Option, die, obwohl teuer, möglich ist.

Seien Sie auch realistisch. "100% Barrierefreiheit" ist ein unerreichbares Ideal — es wird immer irgendein Randfall vorkommen, der dazu führt, dass ein bestimmter Benutzer bestimmte Inhalte schwierig zu nutzen findet — aber Sie sollten so viel wie möglich tun. Wenn Sie planen, ein beeindruckendes 3D-Kreisdiagramm mit WebGL zu erstellen, sollten Sie eine Datentabelle als zugängliche alternative Darstellung der Daten einfügen. Oder Sie möchten vielleicht nur die Tabelle einfügen und auf das 3D-Kreisdiagramm verzichten — die Tabelle ist für alle zugänglich, schneller zu codieren, weniger CPU-intensiv und leichter zu warten.

Andererseits, wenn Sie an einer Galerie-Website arbeiten, auf der interessante 3D-Kunstwerke gezeigt werden, wäre es unvernünftig zu erwarten, dass jedes Kunstwerk perfekt für sehbehinderte Menschen zugänglich ist, da es ein vollständig visuelles Medium ist.

Um zu zeigen, dass Sie sich kümmern und über Barrierefreiheit nachgedacht haben, veröffentlichen Sie eine Barrierefreiheitserklärung auf Ihrer Website, die Ihre Politik bezüglich Barrierefreiheit darlegt und welche Schritte Sie unternommen haben, um die Website zugänglich zu machen. Wenn jemand Sie darauf hinweist, dass Ihre Website ein Barrierefreiheitsproblem hat, beginnen Sie einen Dialog mit ihm, seien Sie einfühlsam und unternehmen Sie angemessene Schritte, um das Problem zu beheben.

Zusammenfassend:

- Betrachten Sie Barrierefreiheit von Beginn eines Projekts an und testen Sie früh und oft. Wie bei jedem anderen Fehler wird ein Barrierefreiheitsproblem teurer zu beheben, je später es entdeckt wird.
- Bedenken Sie, dass viele der besten Praktiken zur Barrierefreiheit jedem zugutekommen, nicht nur den Nutzern mit Behinderungen. Zum Beispiel ist mageres semantisches Markup nicht nur gut für Screenreader, sondern auch schnell zu laden und leistungsfähig. Das kommt jedem zugute, besonders denen auf mobilen Geräten und/oder langsamen Verbindungen.
- Veröffentlichen Sie eine Barrierefreiheitserklärung auf Ihrer Website und treten Sie mit Menschen in Kontakt, die Probleme haben.

## Richtlinien zur Barrierefreiheit und das Gesetz

Es gibt zahlreiche Checklisten und Sätze von Richtlinien, die als Grundlage für Barrierefreiheitstests dienen können, was auf den ersten Blick überwältigend erscheinen mag. Unser Rat ist, sich mit den grundlegenden Bereichen, in denen Sie vorsichtig sein müssen, vertraut zu machen und die hochrangigen Strukturen der am relevantesten Richtlinien zu verstehen.

- Der W3C hat zu Beginn ein umfangreiches und sehr detailliertes Dokument veröffentlicht, das sehr präzise, technologieunabhängige Kriterien zur Barrierefreiheitskonformität enthält. Diese werden als die [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) bezeichnet und sind mit Sicherheit kein kurzer Lesestoff. Die Kriterien sind in vier Hauptkategorien unterteilt, die spezifizieren, wie Implementierungen wahrnehmbar, bedienbar, verständlich und robust gemacht werden können. Der beste Ort, um eine leichte Einführung zu erhalten und zu lernen, ist [WCAG auf einen Blick](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). Es ist nicht nötig, alle WCAG-Kriterien zu lernen — seien Sie sich der Hauptbesorgnisgebiete bewusst und verwenden Sie eine Vielzahl von Techniken und Werkzeugen, um Bereiche hervorzuheben, die sich nicht an die WCAG-Kriterien halten (siehe unten für mehr).
- Ihr Land könnte auch spezifische Gesetze haben, die die Notwendigkeit regeln, dass für ihre Bevölkerung dienende Websites barrierefrei sind — beispielsweise [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) in der EU, [Section 508 des Rehabilitation Act](https://www.section508.gov/training/) in den USA, [Barrierefreie Informationstechnik-Verordnung](https://www.aktion-mensch.de/inklusion/barrierefreiheit/barrierefreie-website) in Deutschland, die [Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) im Vereinigten Königreich, [Accessibilità](https://www.agid.gov.it/it/ambiti-intervento/accessibilita-usabilita) in Italien, das [Disability Discrimination Act](https://humanrights.gov.au/resource-hub/by-resource-type/guidelines-and-standards/guides-and-standards-disability-rights/guidelines-equal-access-digital-goods-and-services) in Australien, usw. Der W3C führt eine Liste der [Web Accessibility Laws & Policies](https://www.w3.org/WAI/policies/) nach Land.

Während also die WCAG eine Art Richtlinie sind, haben die Länder wahrscheinlich Gesetze, die Barrierefreiheit im Web regeln oder zumindest die Barrierefreiheit von öffentlichen Diensten (einschließlich Websites, Fernsehen, physische Räume, usw.). Es ist eine gute Idee, herauszufinden, welche Gesetze für Sie gelten. Wenn Sie sich keine Mühe geben, sicherzustellen, dass Ihre Inhalte zugänglich sind, könnten Sie rechtlich haftbar sein, wenn sich Menschen beschweren.

Das klingt ernst, aber Sie müssen Barrierefreiheit nur als Hauptpriorität Ihrer Webentwicklungspraxis betrachten, wie oben beschrieben. Bei Zweifeln lassen Sie sich von einem qualifizierten Anwalt beraten. Wir werden keinen weiteren Rat geben, da wir keine Anwälte sind.

## Accessibility-APIs

Webbrowser verwenden spezielle **Accessibility-APIs** (bereitgestellt durch das zugrunde liegende Betriebssystem), die Informationen bereitstellen, die für Assistive Technologies (ATs) nützlich sind — ATs neigen dazu, hauptsächlich semantische Informationen zu verwenden, daher umfassen diese Informationen keine solchen Dinge wie Stilinformationen oder JavaScript. Diese Informationen sind in einem Baum von Informationen strukturiert, der als **Accessibility-Tree** bezeichnet wird.

Verschiedene Betriebssysteme haben unterschiedliche Accessibility-APIs zur Verfügung:

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- macOS: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility framework
- iOS: UIAccessibility

Wo die native semantische Information, die die HTML-Elemente in Ihren Web-Apps bereitstellen, unzureichend ist, können Sie sie mit Funktionen aus der [WAI-ARIA-Spezifikation](https://w3c.github.io/aria/) ergänzen, die semantische Information dem Accessibility-Tree hinzufügen, um die Barrierefreiheit zu verbessern. Sie können viel mehr über WAI-ARIA in unserem Artikel [WAI-ARIA basics](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) erfahren.

## Zusammenfassung

Dieser Artikel sollte Ihnen einen nützlichen Überblick über Barrierefreiheit geben, zeigen, warum sie wichtig ist, und beleuchten, wie Sie sie in Ihren Workflow integrieren können. Sie sollten nun auch Interesse an den Implementierungsdetails haben, die Websites barrierefrei machen können, und welche Tools dabei helfen können. Wir werden im nächsten Artikel auf Barrierefreiheitstools eingehen.

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
  - [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  - [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  - [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  - [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

- [Google Chrome veröffentlichte eine automatische Erweiterung zur Untertitelung](https://blog.google/products-and-platforms/products/chrome/live-caption-chrome/)

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}
